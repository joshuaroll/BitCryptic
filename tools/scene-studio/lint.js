// Scene lint: the scene-art rules (Bit_Cryptic/.claude/skills/scene-art/SKILL.md) as checks
// that run on a scene's SVG string. One module, used by Scene Studio in the browser and by
// scripts/ci/lint-scenes.mjs in Node, so the editor and CI can never disagree.
//
// Severity: error = breaks the CI contract or a rule the audit found shipping broken;
// warn = a craft rule from the 171-defect audit; info = worth a look, often deliberate.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(root);
  else root.BCSceneLint = factory(root);
})(typeof self !== 'undefined' ? self : this, function (root) {
  var OPENER = '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">';
  var ORGANIC = /attributeName="(transform|cx|cy|x|y|d|r|rx|ry|points|x1|x2|y1|y2)"/;

  function tags(s, name) {
    var re = new RegExp('<' + name + '\\b[^>]*>', 'g'), out = [], m;
    while ((m = re.exec(s))) out.push({ tag: m[0], at: m.index });
    return out;
  }
  function attr(tag, a) {
    var m = tag.match(new RegExp('\\b' + a + '="([^"]*)"'));
    return m ? m[1] : null;
  }
  function lineOf(s, at) { return s.slice(0, at).split('\n').length; }

  // ---- colour distance, for the off-palette rule ----
  function lab(hex) {
    var h = hex.replace('#', ''), c = [0, 2, 4].map(function (i) {
      var v = parseInt(h.slice(i, i + 2), 16) / 255;
      return v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92;
    });
    var x = (c[0] * 0.4124 + c[1] * 0.3576 + c[2] * 0.1805) / 0.95047, y = c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722, z = (c[0] * 0.0193 + c[1] * 0.1192 + c[2] * 0.9505) / 1.08883;
    var f = function (t) { return t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116; };
    return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
  }
  function dE(a, b) { return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)); }
  var OFF_PALETTE_DE = 18;   // CIE76; ~18 is "clearly a different colour", not a near-tone

  // The text of the <g> that opens at index `at`, balanced to its own </g>.
  function groupAt(s, at) {
    var re = /<(\/?)g\b[^>]*?(\/?)>/g, d = 0, m;
    re.lastIndex = at;
    while ((m = re.exec(s))) {
      if (m[2]) continue;
      d += m[1] ? -1 : 1;
      if (d === 0) return s.slice(at, re.lastIndex);
    }
    return s.slice(at);
  }

  // Element tree, for sibling/ancestor questions. Returns { at -> {tag, name, parent, kids} },
  // keyed by each element's start index. Comments are blanked first (same length) so a tag
  // quoted in a comment never opens an element.
  function tree(s) {
    var src = s.replace(/<!--[\s\S]*?-->/g, function (c) { return c.replace(/[^\n]/g, ' '); });
    var re = /<(\/?)([a-zA-Z][\w:-]*)\b[^>]*?(\/?)>/g, stack = [], nodes = {}, m;
    while ((m = re.exec(src))) {
      if (m[1]) { // close: pop to the matching name
        for (var i = stack.length - 1; i >= 0; i--) if (nodes[stack[i]].name === m[2]) { stack.length = i; break; }
        continue;
      }
      var parent = stack.length ? stack[stack.length - 1] : null;
      nodes[m.index] = { tag: m[0], name: m[2], parent: parent, kids: [] };
      if (parent != null) nodes[parent].kids.push(m.index);
      if (!m[3]) stack.push(m.index);
    }
    return nodes;
  }
  function beginOf(t) { var b = attr(t, 'begin'); return b == null ? 0 : parseFloat(b) || 0; }
  function durOf(t) { var d = attr(t, 'dur'); return d == null ? null : parseFloat(d) * (/ms$/.test(d) ? 0.001 : /min$/.test(d) ? 60 : /h$/.test(d) ? 3600 : 1); }
  // A sibling <animate attributeName="opacity"> on the same element, with the same dur and begin,
  // that hides the loop's seam. Returns 'mask' when both ends of the fade are near zero (the
  // element is invisible at the seam: the full mask the spec asks for), 'emitter' when only the
  // last value is (the element is reborn visible at its first position: right for a ripple or
  // spark born at its source, wrong for anything that should not reappear), else false.
  var FADE_EPS = 0.05;
  function syncedFade(nodes, at) {
    var me = nodes[at]; if (!me || me.parent == null) return false;
    var d = durOf(me.tag), b = beginOf(me.tag), best = false;
    nodes[me.parent].kids.forEach(function (k) {
      if (k === at || best === 'mask') return;
      var t = nodes[k].tag;
      if (nodes[k].name !== 'animate' || !/attributeName="(opacity|fill-opacity|stroke-opacity)"/.test(t)) return;
      if (durOf(t) !== d || Math.abs(beginOf(t) - b) > 1e-6) return;
      var v = (attr(t, 'values') || '').split(';').map(function (x) { return x.trim(); }).filter(Boolean);
      if (v.length < 2 || +v[v.length - 1] > FADE_EPS) return;
      best = +v[0] <= FADE_EPS ? 'mask' : 'emitter';
    });
    return best;
  }
  // The animated element (or the <g> holding it) is placed by a plain translate() and nothing
  // else, and the rotate is additive="sum": the rotation turns about that translated origin, so a
  // bare angle is correct. A transform that also scales or skews, or a cast placement (whose
  // translate positions the whole figure, not a joint), does not mark a pivot.
  var PURE_TRANSLATE = /\btransform="\s*translate\([^)]*\)\s*"/;
  function pivotGroup(n) { return n && PURE_TRANSLATE.test(n.tag) && !/data-(approved|mission)-character=/.test(n.tag); }
  function translatedPivot(nodes, at) {
    var me = nodes[at]; if (!me || !/additive="sum"/.test(me.tag) || me.parent == null) return false;
    var target = nodes[me.parent];
    if (pivotGroup(target)) return true;
    var up = target.parent != null ? nodes[target.parent] : null;
    // The element between may carry no transform, or a bare rotate(angle), which turns about the
    // same origin and so keeps the pivot where the translate put it.
    var keepsOrigin = !/\btransform=/.test(target.tag) || /\btransform="\s*rotate\(\s*-?[\d.]+\s*\)\s*"/.test(target.tag);
    return !!(up && up.name === 'g' && keepsOrigin && pivotGroup(up));
  }
  // A constant spin through whole turns (0;360, 360;0, 0;720...): linear is the right easing for
  // a wheel or a star. Same whole-turn test as the loop-seam rule.
  function constantSpin(t) {
    if (!/type="rotate"/.test(t)) return false;
    var v = (attr(t, 'values') || '').split(';').map(function (x) { return parseFloat(x); });
    if (v.length !== 2) {
      var f = parseFloat(attr(t, 'from')), to = parseFloat(attr(t, 'to'));
      if (attr(t, 'values') != null || isNaN(f) || isNaN(to)) return false;
      v = [f, to];
    }
    var dv = v[1] - v[0];
    return !isNaN(dv) && dv !== 0 && dv % 360 === 0;
  }

  // In-art type: two stacks and nothing else (design/tokens.json font.clue / font.paper,
  // decision 2026-10). 'Fredoka One' was never loaded and shipped as Comic Sans; any other
  // stack is a font the page does not load. Quotes, escapes and spaces are ignored, so this
  // also runs on raw scene-file source (scripts/ci/lint-scenes.mjs). No system-UI exception:
  // no scene needs one.
  var FONTS = { 'jetbrainsmono,monospace': 1, 'georgia,serif': 1 };
  function badFonts(text) {
    var ff = /font-family\s*(?:=\s*"([^"]*)"|:\s*([^;"<>]+))/g, out = [], m;
    while ((m = ff.exec(text))) {
      var raw = (m[1] != null ? m[1] : m[2]).trim();
      if (FONTS[raw.replace(/\\?['"\s]/g, '').toLowerCase()]) continue;
      out.push({ at: m.index, stack: raw, message: 'font-family "' + raw + '": in-art text uses \'JetBrains Mono\',monospace (clue, machine, screen, sign) or Georgia,serif (paper, parchment, chalk, books, carving). See design/STYLE.md "In-art type".' });
    }
    return out;
  }

  // opts (all optional): palette: [hex] the biome palette (+ cast colours) to
  // measure hard-coded fills against. In the browser it falls back to the art
  // kit's whole palette when bcArt is loaded.
  function lintSource(svg, opts) {
    opts = opts || {};
    var out = [];
    function add(rule, sev, msg, at) { out.push({ rule: rule, severity: sev, message: msg, line: at == null ? null : lineOf(svg, at) }); }

    // Extra attributes (role, aria-label) after the required three are fine.
    if (svg.indexOf(OPENER.slice(0, -1)) !== 0) add('contract-opener', 'error', 'Scene must open with the 500x260 <svg> opener.', 0);

    // Opaque pure black or white
    // Translucent highlights (opacity < 1) are allowed; only an OPAQUE pure value is the fault.
    // Mask content is luminance, not paint: white/black inside a <mask>, or in a gradient that a
    // mask paints with, is how a mask works and is exempt.
    var nodes = tree(svg), maskRefs = {};
    (svg.match(/<mask\b[\s\S]*?<\/mask>/g) || []).forEach(function (mk) {
      (mk.match(/url\(#([^)]+)\)/g) || []).forEach(function (u) { maskRefs[u.slice(5, -1)] = 1; });
    });
    function inMask(at) {
      for (var n = nodes[at]; n; n = n.parent != null ? nodes[n.parent] : null) {
        if (n.name === 'mask') return true;
        if (/Gradient$/.test(n.name) && maskRefs[attr(n.tag, 'id')]) return true;
      }
      return false;
    }
    var bw = /<[^>]*\b(fill|stroke|stop-color)="(#000|#000000|#fff|#ffffff|black|white)"[^>]*>/gi, m;
    while ((m = bw.exec(svg))) {
      var op = m[0].match(/\b(opacity|fill-opacity|stroke-opacity|stop-opacity)="([\d.]+)"/);
      if ((!op || +op[2] >= 1) && !inMask(m.index)) add('pure-black-white', 'error', m[2] + ' at full opacity: no opaque pure black or white; pick a tinted neutral.', m.index);
    }

    var anims = tags(svg, 'animate').concat(tags(svg, 'animateTransform'), tags(svg, 'animateMotion'));
    var durs = {};
    anims.forEach(function (a) {
      var t = a.tag, ks = attr(t, 'keySplines'), kt = attr(t, 'keyTimes'), vals = attr(t, 'values');
      if (ks) {
        var segs = ks.split(';').filter(function (x) { return x.trim(); });
        if (kt && segs.length !== kt.split(';').length - 1)
          add('keysplines-count', 'error', 'keySplines has ' + segs.length + ' curves but keyTimes needs ' + (kt.split(';').length - 1) + '. A miscounted list kills the animation.', a.at);
        if (segs.some(function (sg) { return sg.trim().split(/[\s,]+/).some(function (n) { return +n < 0 || +n > 1; }); }))
          add('keysplines-range', 'error', 'keySplines values must sit in [0,1]; bounce curves are spec-invalid in SMIL and do not run.', a.at);
      }
      var indefinite = /repeatCount="indefinite"/.test(t);
      // Exempt: constant spins, and drift whose loop is hidden by a synced fade (dust, sparks).
      if (indefinite && ORGANIC.test(t) && !/calcMode="spline"/.test(t) && !constantSpin(t) && !syncedFade(nodes, a.at))
        add('linear-motion', 'warn', 'Organic motion with linear easing. Use calcMode="spline" keySplines="0.42 0 0.58 1".', a.at);
      if (/type="rotate"/.test(t) && vals && vals.split(';').some(function (v) { return v.trim() && v.trim().split(/[\s,]+/).length < 3; }) && !translatedPivot(nodes, a.at))
        add('rotate-centre', 'warn', 'Rotate values need an explicit "angle cx cy" centre at the real joint.', a.at);
      if (indefinite && vals && !/attributeName="(opacity|fill-opacity|stroke-opacity)"/.test(t)) {
        var v = vals.split(';').map(function (x) { return x.trim(); }).filter(Boolean);
        // A full turn (0 -> 360) lands where it started, so a rotate whose angles differ by whole turns is seamless.
        var turn = /type="rotate"/.test(t) && (parseFloat(v[0]) - parseFloat(v[v.length - 1])) % 360 === 0;
        var fade = syncedFade(nodes, a.at);
        if (v.length > 1 && v[0] !== v[v.length - 1] && !turn && !/attributeName="(cy|y|cx|x)"/.test(t) && fade !== 'mask') {
          if (fade === 'emitter') add('loop-seam', 'info', 'Loop seam hidden only by a fade-out: the element reappears visible at "' + v[0] + '". Right for an emitter reborn at its source; otherwise fade in from 0 too.', a.at);
          else add('loop-seam', 'warn', 'Loop starts at "' + v[0] + '" and ends at "' + v[v.length - 1] + '": it pops at the seam. Close it (a;b;a) or pair with an opacity fade.', a.at);
        }
      }
      var dur = attr(t, 'dur');
      if (indefinite && dur) durs[dur] = (durs[dur] || 0) + 1;
    });
    Object.keys(durs).forEach(function (d) {
      if (durs[d] >= 4) add('unison', 'info', durs[d] + ' loops share dur="' + d + '" and pulse in unison. Vary durations and offset with begin.', null);
    });

    // The transform trap: animateTransform straight inside a placed group, without additive="sum".
    var trap = /<g\b[^>]*\btransform="[^"]*"[^>]*>\s*(<animateTransform\b[^>]*>)/g;
    while ((m = trap.exec(svg))) if (!/additive="sum"/.test(m[1])) {
      // Replace mode is survivable when the values restate the placement; it still breaks the moment someone moves the group.
      var base = (m[0].match(/transform="translate\(([^)]*)\)"/) || [])[1], first = ((attr(m[1], 'values') || '').split(';')[0] || '').trim();
      var same = base && first && base.split(/[\s,]+/).map(Number).join(',') === first.split(/[\s,]+/).map(Number).join(',');
      if (same) add('transform-trap', 'info', 'animateTransform replaces the placement but restates it in its values. Works, but moving the group breaks it; prefer additive="sum".', m.index);
      else add('transform-trap', 'error', 'animateTransform on a group that carries a placement transform, without additive="sum": it wipes the placement and teleports the group.', m.index);
    }

    // Cast placements without a contact shadow. Head-only shots (clipPath) and held hands are exempt.
    var placed = tags(svg, 'g').filter(function (g) { return /data-(approved|mission)-character=/.test(g.tag); });
    var shadows = (svg.match(/data-contact-shadow/g) || []).length;
    var heads = placed.filter(function (g) { return /scale\([^)]*\) translate\(-225 -230\)/.test(g.tag) || /data-shadow="off"/.test(g.tag); }).length;
    if (placed.length - heads > shadows)
      add('cast-shadow', 'warn', (placed.length - heads - shadows) + ' character placement(s) without a contact shadow. Use bcApprovedPlace, which emits one.', null);

    // Hand-built characters: the audit's first rule.
    if (/data-fred-h=/.test(svg) && /data-approved-character="fredward"/.test(svg) === false)
      add('legacy-rig', 'info', 'Uses the legacy fred() rig rather than the approved Fredward model.', null);

    badFonts(svg).forEach(function (f) { add('in-art-font', 'error', f.message, f.at); });

    // ---- art-kit rules (warnings/info only) ----
    // Kit props that define gradients must be given an idp, or two scenes can
    // collide; the kit marks the fallback it used.
    var mi = /data-art-prop="([^"]+)"[^>]*data-idp-missing="1"/g;
    while ((m = mi.exec(svg))) add('art-idp', 'warn', 'bcArt.prop("' + m[1] + '") defines gradient ids but was given no idp: pass {idp:"<scene>-<n>"}.', m.index);
    // ...and every id inside a kit prop must carry that prop's prefix.
    var gp = /<g data-art-prop="([^"]+)"[^>]*\bdata-idp="([^"]+)"[^>]*>/g;
    while ((m = gp.exec(svg))) {
      var inner = groupAt(svg, m.index), bad = (inner.match(/\bid="([^"]+)"/g) || []).filter(function (x) { return x.slice(4, 4 + m[2].length + 1) !== m[2] + '-'; });
      if (bad.length) add('art-idp', 'warn', 'Kit prop "' + m[1] + '" defines ' + bad.length + ' id(s) without its idp prefix "' + m[2] + '".', m.index);
    }
    // Unseated surface items. Only kit props can be judged: a hand-drawn cup
    // has no machine-readable contact point or surface, so it is not checked.
    var si = /<g data-art-prop="(cup-saucer|newspaper)"(?![^>]*data-seated)[^>]*>/g;
    while ((m = si.exec(svg))) add('unseated-item', 'info', 'A ' + m[1] + ' placed by coordinates, not seated. Use bcArt.on(bcArt.anchors(table,...).top, "' + m[1] + '", {u,v}) so it sits on the surface.', m.index);

    // Hard-coded fills far from the biome palette. One summary per scene: it is
    // a pointer for redraws, never a reason to sweep shipped colours.
    var pal = opts.palette || (root && root.bcArt && root.bcArt.allColours ? root.bcArt.allColours() : null);
    if (pal && pal.length) {
      var labs = pal.map(lab), seen = {}, off = [], hx = /(?:fill|stroke|stop-color)="(#[0-9a-fA-F]{6})"/g;
      while ((m = hx.exec(svg))) {
        var c = m[1].toLowerCase();
        if (seen[c]) continue;
        seen[c] = 1;
        var L = lab(c), best = Infinity;
        for (var i = 0; i < labs.length && best > OFF_PALETTE_DE; i++) best = Math.min(best, dE(L, labs[i]));
        if (best > OFF_PALETTE_DE) off.push(c);
      }
      if (off.length) add('off-palette', 'info', off.length + ' hard-coded colour(s) not within dE ' + OFF_PALETTE_DE + ' of the ' + (opts.biome || 'kit') + ' palette, e.g. ' + off.slice(0, 5).join(' ') + '. Info only: never sweep shipped art (scene-art rule 6).', null);
    }

    return out;
  }

  // Entity rules need the composed layout, so they run on Scene Studio's spec.
  // spec: {horizon, nearFloor, reference, floors:[{y}], entities:[{name,x,floor,height,flip,cast}]}
  function lintLayout(spec, tokens) {
    var out = [];
    function add(rule, sev, msg, eid) { out.push({ rule: rule, severity: sev, message: msg, entity: eid }); }
    var ref = tokens.reference, near = spec.nearFloor || tokens.nearFloor, hz = spec.horizon;
    spec.entities.forEach(function (e, i) {
      if (e.locked) return;
      var label = e.name + ' (' + e.pose + ')';
      if (spec.floors && spec.floors.length) {
        var d = Math.min.apply(null, spec.floors.map(function (f) { return Math.abs(f.y - e.floor); }));
        if (d > 1.5) add('feet-on-floor', 'warn', label + ' stands ' + d.toFixed(1) + ' units off the nearest floor line. Feet float or sink.', i);
      }
      if (hz != null && e.floor > hz) {
        var ratio = (tokens.cast[e.name] || 1), expected = ref * ratio * (e.floor - hz) / (near - hz);
        var off = e.height / expected - 1;
        if (Math.abs(off) > 0.08) add('scale-perspective', Math.abs(off) > 0.2 ? 'warn' : 'info',
          label + ' is ' + Math.round(Math.abs(off) * 100) + '% ' + (off > 0 ? 'taller' : 'shorter') + ' than the cast scale says for that floor (expected ' + expected.toFixed(0) + ').', i);
      } else if (hz != null && e.floor <= hz) add('above-horizon', 'warn', label + ' stands at or above the horizon line.', i);
      if (e.x < 0 || e.x > 500) add('out-of-frame', 'info', label + ' is anchored outside the frame horizontally.', i);
      if (e.floor > 260) add('camera-crop', 'info', label + ' has feet below the frame edge: a camera crop. Fine if intended.', i);
    });
    // Two figures sharing the same footprint at the same depth.
    for (var a = 0; a < spec.entities.length; a++) for (var b = a + 1; b < spec.entities.length; b++) {
      var A = spec.entities[a], B = spec.entities[b];
      if (A.locked || B.locked) continue;
      if (Math.abs(A.floor - B.floor) < 4 && Math.abs(A.x - B.x) < Math.min(A.height, B.height) * 0.25)
        add('overlap', 'warn', A.name + ' and ' + B.name + ' share a footprint at the same depth.', a);
    }
    return out;
  }

  return { lintSource: lintSource, lintLayout: lintLayout, badFonts: badFonts, OPENER: OPENER };
});
