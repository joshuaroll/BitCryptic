// Lair story scenes — "Liam's Lair"
// Keys: lair_0 through lair_9

// ======================================================================
// THE HOARD FLOOR. One helper, every lair scene, so the treasure is the
// same treasure wherever you stand. Pale rolled scrolls on the floor read
// as eggs, so the floor is gold: coin heaps (a mound with a lit left slope
// and a shaded right one, coins tumbling over it), cut gems, goblets, and
// the kit chest. Kept LOW: heaps are sized per scene so nothing rises past
// the floor line a figure or the dragon stands on.
//   lairHoard(idp, {
//     heaps:   [[cx, baseY, halfWidth, height], ...],
//     chest:   {x, y, scale, flip} | null      (bcArt chest, open, gold)
//     goblets: [[x, y, scale, tilt], ...]
//     spill:   [[x0, x1, y0, y1, count], ...]  (loose coins on the floor)
//     seed:    number,  dim: 0..1 (veil toward the cave dark)
//   })
// ======================================================================
function lairHoard(idp, o) {
  o = o || {};
  var seed = (o.seed || 7) >>> 0;
  function rnd() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
  function r1(v) { return Math.round(v * 10) / 10; }
  var G = { deep: '#4a2c0a', shade: '#7a4e12', base: '#a8721c', mid: '#c8922a', hi: '#e8b844', glint: '#fff0b8', rim: '#5a360c' };
  var GEMS = [['#b8202e', '#ff6a70'], ['#1e7a4a', '#6ae0a0'], ['#2a4ea8', '#8ab4ff'], ['#7a2a9a', '#d08aff']];
  var s = '<g data-lair-hoard="' + idp + '">';
  var glints = [];
  // edge-on coins only inside a heap, where the pile props them up; loose on
  // the floor a standing coin reads as a stick
  function coin(x, y, big, loose) {
    var rx = big ? 3.4 : 2.6 + rnd() * 0.8, edge = !loose && rnd() < 0.1;
    if (edge) return '<ellipse cx="' + r1(x) + '" cy="' + r1(y - 1.6) + '" rx="1" ry="' + r1(rx * 0.85) + '" fill="' + G.mid + '" stroke="' + G.rim + '" stroke-width="0.5"/>';
    return '<ellipse cx="' + r1(x) + '" cy="' + r1(y) + '" rx="' + r1(rx) + '" ry="' + r1(rx * 0.38) + '" fill="' + (rnd() < 0.45 ? G.hi : G.mid) + '" stroke="' + G.rim + '" stroke-width="0.5"/>';
  }
  function gem(x, y, k) {
    var c = GEMS[k % GEMS.length], z = 2.6 + rnd() * 1.2;
    return '<path d="M' + r1(x) + ',' + r1(y - z) + ' L' + r1(x + z) + ',' + r1(y) + ' L' + r1(x) + ',' + r1(y + z * 0.8) + ' L' + r1(x - z) + ',' + r1(y) + ' Z" fill="' + c[0] + '" stroke="' + G.rim + '" stroke-width="0.4"/>' +
      '<path d="M' + r1(x) + ',' + r1(y - z) + ' L' + r1(x) + ',' + r1(y) + ' L' + r1(x - z) + ',' + r1(y) + ' Z" fill="' + c[1] + '" opacity="0.8"/>';
  }
  // loose coins first: they lie on the floor around and under the heaps
  (o.spill || []).forEach(function (sp) {
    for (var i = 0; i < sp[4]; i++) s += coin(sp[0] + rnd() * (sp[1] - sp[0]), sp[2] + rnd() * (sp[3] - sp[2]), false, true);
  });
  (o.heaps || []).forEach(function (hp, hi) {
    var cx = hp[0], b = hp[1], w = hp[2], h = hp[3], x0 = cx - w, x1 = cx + w;
    // a lumpy mound: three bumps along the crest so it is a pile, not a dome
    var d = 'M' + x0 + ',' + b + ' C' + r1(x0 + w * 0.3) + ',' + r1(b - h * 0.7) + ' ' + r1(cx - w * 0.45) + ',' + r1(b - h * 1.02) + ' ' + r1(cx - w * 0.15) + ',' + r1(b - h * 0.98) +
      ' Q' + r1(cx) + ',' + r1(b - h * 0.9) + ' ' + r1(cx + w * 0.15) + ',' + r1(b - h) +
      ' C' + r1(cx + w * 0.45) + ',' + r1(b - h * 1.02) + ' ' + r1(x1 - w * 0.3) + ',' + r1(b - h * 0.6) + ' ' + x1 + ',' + b +
      // the front foot bows toward the viewer: a heap seen from above the floor, not a slab
      ' Q' + r1(cx + w * 0.5) + ',' + r1(b + 2 + h * 0.08) + ' ' + cx + ',' + r1(b + 1.5 + h * 0.08) + ' Q' + r1(cx - w * 0.5) + ',' + r1(b + 2 + h * 0.08) + ' ' + x0 + ',' + b + ' Z';
    s += '<ellipse cx="' + cx + '" cy="' + r1(b + 0.5) + '" rx="' + r1(w * 1.05) + '" ry="' + r1(Math.max(2, h * 0.16)) + '" fill="#0e0604" opacity="0.45"/>';
    s += '<path d="' + d + '" fill="' + G.base + '"/>';
    // shaded right flank, away from the torch side
    s += '<path d="M' + r1(cx + w * 0.15) + ',' + r1(b - h) + ' C' + r1(cx + w * 0.45) + ',' + r1(b - h * 1.02) + ' ' + r1(x1 - w * 0.3) + ',' + r1(b - h * 0.6) + ' ' + x1 + ',' + b + ' L' + r1(cx + w * 0.1) + ',' + b + ' Q' + r1(cx + w * 0.3) + ',' + r1(b - h * 0.5) + ' ' + r1(cx + w * 0.15) + ',' + r1(b - h) + ' Z" fill="' + G.shade + '"/>';
    // lit upper-left slope
    s += '<path d="M' + r1(x0 + w * 0.2) + ',' + r1(b - h * 0.55) + ' C' + r1(x0 + w * 0.4) + ',' + r1(b - h * 0.92) + ' ' + r1(cx - w * 0.35) + ',' + r1(b - h * 0.98) + ' ' + r1(cx - w * 0.1) + ',' + r1(b - h * 0.92) + ' Q' + r1(cx - w * 0.4) + ',' + r1(b - h * 0.8) + ' ' + r1(x0 + w * 0.2) + ',' + r1(b - h * 0.55) + ' Z" fill="' + G.hi + '" opacity="0.55"/>';
    // dark base where the pile meets the floor
    s += '<path d="M' + x0 + ',' + b + ' Q' + cx + ',' + r1(b - h * 0.28) + ' ' + x1 + ',' + b + ' Q' + r1(cx + w * 0.5) + ',' + r1(b + 2 + h * 0.08) + ' ' + cx + ',' + r1(b + 1.5 + h * 0.08) + ' Q' + r1(cx - w * 0.5) + ',' + r1(b + 2 + h * 0.08) + ' ' + x0 + ',' + b + ' Z" fill="' + G.deep + '" opacity="0.45"/>';
    // coins tumbling over the surface, denser near the crest
    var nC = Math.round(w * 0.55 + h * 0.6);
    for (var i = 0; i < nC; i++) {
      var u = (rnd() * 2 - 1) * 0.88, top = b - h * (1 - u * u) * 0.92;
      var y = top + 1.5 + Math.pow(rnd(), 1.6) * (b - top - 2.5);
      s += coin(cx + u * w, y, rnd() < 0.2);
    }
    // gems pressed into the heap
    var nG = Math.max(1, Math.round(w / 22));
    for (var g = 0; g < nG; g++) {
      var ug = (rnd() * 2 - 1) * 0.6, tg = b - h * (1 - ug * ug) * 0.9;
      s += gem(cx + ug * w, tg + 2 + rnd() * (b - tg) * 0.4, hi + g);
    }
    glints.push([cx - w * 0.25, b - h * 0.85], [cx + w * 0.3, b - h * 0.55]);
  });
  (o.goblets || []).forEach(function (gb) {
    var z = gb[2] || 1, t = gb[3] || 0;
    s += '<g transform="translate(' + gb[0] + ',' + gb[1] + ') rotate(' + t + ') scale(' + z + ')">' +
      '<ellipse cx="0" cy="0" rx="6" ry="1.6" fill="#0e0604" opacity="0.45"/>' +
      '<path d="M-5,0 Q-5,-2 -1.2,-2.4 L-1,-8 Q-7,-9 -7.5,-17 L7.5,-17 Q7,-9 1,-8 L1.2,-2.4 Q5,-2 5,0 Z" fill="' + G.mid + '" stroke="' + G.rim + '" stroke-width="0.6"/>' +
      '<path d="M1,-8 Q7,-9 7.5,-17 L3.5,-17 Q3.5,-10 1,-8 Z M1.2,-2.4 Q5,-2 5,0 L1,0 Z" fill="' + G.shade + '"/>' +
      '<path d="M-6,-15.5 Q-5.5,-11 -3,-9.4" fill="none" stroke="' + G.glint + '" stroke-width="0.9" opacity="0.7"/>' +
      '<ellipse cx="0" cy="-17" rx="7.5" ry="1.8" fill="' + G.deep + '" stroke="' + G.rim + '" stroke-width="0.6"/>' +
      '<path d="M0,-14.6 L1.6,-12.8 L0,-11 L-1.6,-12.8 Z" fill="#b8202e"/>' +
      '</g>';
    glints.push([gb[0] - 4 * z, gb[1] - 14 * z]);
  });
  if (o.chest && typeof bcArt !== 'undefined') {
    s += bcArt.prop('chest', { x: o.chest.x, y: o.chest.y, scale: o.chest.scale || 0.6, flip: !!o.chest.flip, open: true, contents: 'gold', biome: 'workshop', depth: 'mid', idp: idp + 'ch' });
    glints.push([o.chest.x - 6 * (o.chest.scale || 0.6), o.chest.y - 44 * (o.chest.scale || 0.6)]);
  }
  // glints: a four-point twinkle that swells and fades, never in unison
  glints.forEach(function (p, i) {
    var dur = (2.3 + ((i * 0.73 + (o.seed || 0) * 0.11) % 1.9)).toFixed(2), beg = ((i * 0.61) % 2.2).toFixed(2);
    s += '<path d="M' + r1(p[0]) + ',' + r1(p[1] - 3.5) + ' L' + r1(p[0] + 0.8) + ',' + r1(p[1] - 0.8) + ' L' + r1(p[0] + 3.5) + ',' + r1(p[1]) + ' L' + r1(p[0] + 0.8) + ',' + r1(p[1] + 0.8) + ' L' + r1(p[0]) + ',' + r1(p[1] + 3.5) + ' L' + r1(p[0] - 0.8) + ',' + r1(p[1] + 0.8) + ' L' + r1(p[0] - 3.5) + ',' + r1(p[1]) + ' L' + r1(p[0] - 0.8) + ',' + r1(p[1] - 0.8) + ' Z" fill="' + G.glint + '" opacity="0">' +
      '<animate attributeName="opacity" values="0;0.9;0" keyTimes="0;0.5;1" dur="' + dur + 's" begin="' + beg + 's" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>';
  });
  return s + '</g>';
}

// ======================================================================
// LIAM. One dragon, every lair scene. The geometry is lair_6's reviewed
// profile dragon (wedge skull, swept horns, finger-boned wings, clawed
// forefoot, ox-blood hide), lifted into a helper so the chamber, the bow
// and the farewell all draw the SAME animal, posed per step. lair_6 itself
// keeps its own inline copy (reviewed; not touched).
//   lairLiam(idp, {
//     x, y          translate of the whole animal
//     wings         'raised' (lair_6 V) | 'folded' (furled against the back)
//     neck, head    degrees: neck about its root (262,172), head about the
//                   neck top (284,88). Positive lowers the snout.
//     jaw           'open' | 'closed'
//     eye           'red' (glare) | 'amber' (calm); lid: true for half-lids
//     farEye        glint of the far eye past the brow (the pair the text names)
//     leg           'planted' | 'offer' (forefoot held out, palm up)
//     held          svg drawn in the offer claw's frame, palm at (0,0)
//     smoke, breath nostril smoke puffs (true) or curling S-wisps ('curl') | exhale plume
//   })
// ======================================================================
function lairLiam(idp, o) {
  o = o || {};
  var H = idp + 'Hide', HH = idp + 'HideHead', M = idp + 'Memb', F = idp + 'Glow', B = idp + 'Breath';
  var red = o.eye !== 'amber';
  var EYE = red ? '#ff2200' : '#ffaa44', PUPIL = red ? '#ffaa00' : '#ffdd88';
  var s = '<g data-lair-liam="' + idp + '" transform="translate(' + (o.x || 0) + ',' + (o.y || 0) + ')">' +
    '<defs>' +
    '<linearGradient id="' + H + '" gradientUnits="userSpaceOnUse" x1="202" y1="110" x2="312" y2="150"><stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#3a1616"/><stop offset="100%" stop-color="#140606"/></linearGradient>' +
    '<linearGradient id="' + HH + '" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#3a1616"/><stop offset="100%" stop-color="#1a0808"/></linearGradient>' +
    '<linearGradient id="' + M + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#140606"/><stop offset="100%" stop-color="#0c0404"/></linearGradient>' +
    '<filter id="' + F + '" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3"/></filter>' +
    (o.breath ? '<linearGradient id="' + B + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ffe2a8" stop-opacity="0.75"/><stop offset="45%" stop-color="#ffb060" stop-opacity="0.4"/><stop offset="100%" stop-color="#c86a30" stop-opacity="0"/></linearGradient>' : '') +
    '</defs>';

  // WINGS. Folded = the same wing frame furled: rotated down about its root
  // and drawn in, so the arm bone, finger bones and claw are still there.
  var fold = o.wings === 'folded';
  // Furl = align the arm bone with x, squeeze the finger fan shut across it,
  // then lay the closed wing up and back along the spine.
  // Squashing the spread frame (the old furl) left four loose spikes with no
  // membrane between them, so the folded wing is drawn as its own closed
  // shape: the arm bone rises from the shoulder root to a wrist knuckle above
  // the back (thumb claw on it), the finger bones fold back DOWN from the
  // wrist, and the membrane is one solid blade between them with the
  // trailing edge scalloped between the fingertips. Same bones, same colours
  // as lair_6; the right wing is the left mirrored about x=260, as there.
  function furled(mirror) {
    var g = '<g' + (mirror ? ' transform="translate(520,0) scale(-1,1)"' : '') + '>' +
      '<path d="M242,158 Q216,122 196,86 Q172,108 160,148 Q172,152 168,166 Q180,166 182,180 Q196,178 204,190 Q220,180 236,176 Z" fill="url(#' + M + ')"/>' +
      '<path d="M196,86 Q172,108 160,148 Q172,152 168,166 Q180,166 182,180 Q196,178 204,190" fill="none" stroke="' + (mirror ? '#5a2220' : '#4a1c1c') + '" stroke-width="1.2" stroke-linejoin="round" opacity="0.85"/>' +
      '<path d="M196,86 Q174,114 162,146 M196,86 Q180,124 169,164 M196,86 Q186,134 183,178 M196,86 Q198,140 204,188" fill="none" stroke="#3e1818" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M242,158 Q216,122 196,86" fill="none" stroke="#3a1616" stroke-width="5.5" stroke-linecap="round"/>' +
      '<path d="M238,150 Q216,120 198,92" fill="none" stroke="#5a2626" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/>' +
      '<path d="M194,88 Q192,74 199,66 Q200,78 199,89 Z" fill="#3a1616"/></g>';
    return g;
  }
  if (fold) s += furled(false) + furled(true);
  var wl = '', wr = '';
  if (!fold) s += '<g' + wl + '>' +
    '<path d="M240,156 Q198,96 162,46 Q124,20 80,16 Q84,38 44,48 Q78,66 52,90 Q96,86 104,112 Q166,124 216,178 Z" fill="url(#' + M + ')"/>' +
    '<path d="M80,16 Q84,38 44,48 Q78,66 52,90 Q96,86 104,112 Q166,124 216,178" fill="none" stroke="#4a1c1c" stroke-width="' + (fold ? 2 : 1) + '" stroke-linejoin="round" opacity="0.8"/>' +
    '<path d="M162,46 Q118,30 82,18 M162,46 Q98,48 46,48 M162,46 Q102,68 54,88 M162,46 Q128,82 106,110" fill="none" stroke="#3e1818" stroke-width="' + (fold ? 3.6 : 2.2) + '" stroke-linecap="round"/>' +
    '<path d="M240,156 Q198,96 162,46" fill="none" stroke="#3a1616" stroke-width="' + (fold ? 8 : 5.5) + '" stroke-linecap="round"/>' +
    '<path d="M236,148 Q198,94 164,50" fill="none" stroke="#5a2626" stroke-width="' + (fold ? 2.2 : 1.4) + '" stroke-linecap="round" opacity="0.7"/>' +
    '<path d="M160,46 Q160,32 168,24 Q168,36 166,48 Z" fill="#3a1616"/></g>';
  if (!fold) s += '<g' + wr + '>' +
    '<path d="M280,156 Q322,96 358,46 Q396,20 440,16 Q436,38 476,48 Q442,66 468,90 Q424,86 416,112 Q354,124 304,178 Z" fill="url(#' + M + ')"/>' +
    '<path d="M440,16 Q436,38 476,48 Q442,66 468,90 Q424,86 416,112 Q354,124 304,178" fill="none" stroke="#5a2220" stroke-width="' + (fold ? 2 : 1) + '" stroke-linejoin="round" opacity="0.85"/>' +
    '<path d="M358,46 Q402,30 438,18 M358,46 Q422,48 474,48 M358,46 Q418,68 466,88 M358,46 Q392,82 414,110" fill="none" stroke="#3e1818" stroke-width="' + (fold ? 3.6 : 2.2) + '" stroke-linecap="round"/>' +
    '<path d="M280,156 Q322,96 358,46" fill="none" stroke="#3a1616" stroke-width="' + (fold ? 8 : 5.5) + '" stroke-linecap="round"/>' +
    '<path d="M284,148 Q322,94 356,50" fill="none" stroke="#5a2626" stroke-width="' + (fold ? 2.2 : 1.4) + '" stroke-linecap="round" opacity="0.7"/>' +
    '<path d="M360,46 Q360,32 352,24 Q352,36 354,48 Z" fill="#3a1616"/></g>';

  // tail, haunch, body, belly: lair_6 verbatim
  s += '<path d="M290,206 Q334,204 368,214 Q398,224 416,242 Q396,246 376,236 Q350,224 322,219 Q302,216 288,218 Z" fill="#1a0808"/>' +
    '<path d="M416,242 Q430,234 442,240 Q436,250 422,250 Q414,248 416,242 Z" fill="#2a1212" opacity="0.85"/>' +
    '<path d="M268,178 Q296,172 310,190 Q316,208 302,222 Q280,232 264,218 Q256,198 268,178 Z" fill="#1a0808"/>' +
    '<path d="M202,178 Q204,152 230,143 Q262,134 290,148 Q312,161 310,188 Q306,212 278,222 Q240,228 214,212 Q198,198 202,178 Z" fill="url(#' + H + ')"/>' +
    '<path d="M216,210 Q244,220 278,214 Q276,220 254,224 Q228,223 216,210 Z" fill="#4a1c18" opacity="0.45"/>';

  // forefoot. Planted = lair_6's clawed forefoot. Offering = the same leg
  // and foot mirrored to reach FORWARD, drawn after the head (nearest).
  var foot = '<path d="M222,190 Q210,202 202,216 Q206,222 214,220 Q220,206 232,196 Z" fill="#1a0808"/>' +
    '<path d="M198,216 Q208,212 218,218 Q216,224 206,224 Q196,222 198,216 Z" fill="#2a1212"/>' +
    '<path d="M198,222 Q196,227 193,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>' +
    '<path d="M206,224 Q205,229 203,231" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>' +
    '<path d="M214,222 Q215,227 214,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>';
  if (o.leg !== 'offer') s += foot;

  // NECK + HEAD. Nested joints: placement on the outer group, the head turn
  // on the inner one, so lowering the head never detaches it from the neck.
  s += '<g transform="rotate(' + (o.neck || 0) + ',262,172)">' +
    '<path d="M222,168 Q230,140 244,118 Q256,98 266,74 L298,98 Q276,114 276,134 Q278,154 304,170 Q262,180 222,168 Z" fill="url(#' + H + ')"/>' +
    '<path d="M258,92 L244,86 L254,102 Z" fill="#2a1212"/>' +
    '<path d="M249,110 L233,106 L244,122 Z" fill="#2a1212"/>' +
    '<path d="M240,128 L224,126 L236,141 Z" fill="#2a1212"/>' +
    '<path d="M232,146 L217,146 L229,158 Z" fill="#2a1212" opacity="0.9"/>' +
    '<path d="M292,104 Q276,116 276,134 Q277,150 292,162 Q274,152 270,134 Q270,114 286,102 Z" fill="#5a2420" opacity="0.5"/>' +
    '<path d="M277,118 L284,121 M273,130 L281,131 M273,142 L281,141" fill="none" stroke="#1e0a0a" stroke-width="1" opacity="0.6"/>' +
    '<g transform="rotate(' + (o.head || 0) + ',284,88)">';
  // far horn behind the skull
  s += '<path d="M282,56 Q272,36 264,16 Q284,30 294,52 Z" fill="#1e0a0a"/>';
  if (o.jaw === 'open') {
    s += '<path d="M262,78 Q260,60 278,53 Q298,48 314,58 Q324,64 332,68 L350,76 Q358,80 357,87 Q355,93 347,94 L306,99 L340,113 Q347,116 344,121 Q339,125 328,123 L306,118 Q290,113 279,105 Q266,95 262,78 Z" fill="url(#' + HH + ')"/>' +
      '<path d="M347,94 L306,99 L340,113 Q350,104 347,94 Z" fill="#0e0404"/>' +
      '<path d="M316,98 L318,104 L321,97 Z M326,97 L328,102 L331,96 Z M336,95 L338,100 L341,95 Z" fill="#e8d8c0" opacity="0.85"/>' +
      '<path d="M306,118 L328,123 Q339,125 344,121 Q338,121 328,120 L308,115 Z" fill="#6a2a20" opacity="0.5"/>';
  } else {
    // jaw shut: the lower jaw swung up about the same hinge (306,99)
    s += '<path d="M262,78 Q260,60 278,53 Q298,48 314,58 Q324,64 332,68 L350,76 Q358,80 357,87 Q355,93 349,96 Q346,102 336,104 L310,109 Q292,111 279,104 Q266,95 262,78 Z" fill="url(#' + HH + ')"/>' +
      '<path d="M348,95 Q330,99 306,100" fill="none" stroke="#0e0404" stroke-width="1.3" stroke-linecap="round"/>' +
      '<path d="M337,97 L339,102 L341,96 Z" fill="#e8d8c0" opacity="0.8"/>' +
      '<path d="M310,109 L336,104 Q346,102 349,96 Q345,104 336,106.5 L312,111 Z" fill="#6a2a20" opacity="0.45"/>';
  }
  s += '<path d="M314,60 Q332,68 350,76 Q356,79 357,84 Q336,78 316,70 Q308,64 314,60 Z" fill="#4a1e1e" opacity="0.55"/>' +
    '<path d="M278,88 Q294,86 306,99 Q296,108 282,102 Q272,96 278,88 Z" fill="#2a1212" opacity="0.5"/>' +
    // far eye: a sliver peeking over the brow ridge just behind and above
    // the near eye, its lower half hidden by the ridge drawn over it
    '<path d="M286,66 Q300,57 316,63 Q302,64 290,71 Z" fill="#2a1212"/>' +
    // far eye (3/4 turn): the second almond seen past the bridge of the snout,
    // forward of and above the near eye, so the pair the text names both glow
    (o.farEye ? '<circle cx="312" cy="61" r="7" fill="' + EYE + '" opacity="0.16" filter="url(#' + F + ')"/>' +
      '<path d="M305,62.5 Q310,57 318,59.5 Q312,65 305,62.5 Z" fill="' + EYE + '" opacity="0.85"><animate attributeName="opacity" values="0.65;0.95;0.65" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>' +
      '<path d="M311,58.4 Q312.2,61 311,63.4 Q309.8,61 311,58.4 Z" fill="' + PUPIL + '" opacity="0.8"/>' : '') +
    '<path d="M266,68 Q246,48 224,32 Q252,40 280,56 Z" fill="#2a1212"/>' +
    '<path d="M262,62 Q246,48 232,38 Q250,44 270,56 Z" fill="#4a2020" opacity="0.45"/>' +
    '<path d="M266,90 L250,94 L264,98 Z" fill="#2a1212"/>';
  // nostril
  s += '<path d="M346,79 Q352,77 354,81 Q351,84 346,83 Z" fill="' + (red ? '#ff4400' : '#ffaa44') + '" opacity="' + (red ? 0.5 : 0.4) + '"/>';
  if (o.smoke && o.smoke !== 'curl') {
    s += '<circle cx="354" cy="78" r="3" fill="#4a4a4a" opacity="0"><animate attributeName="cy" values="78;62;46" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0;0.2;0" keyTimes="0;0.3;1" dur="4s" repeatCount="indefinite"/></circle>' +
      '<circle cx="358" cy="80" r="2.6" fill="#4a4a4a" opacity="0"><animate attributeName="cy" values="80;64;50" keyTimes="0;0.5;1" dur="3.5s" begin="1.1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0;0.18;0" keyTimes="0;0.3;1" dur="3.5s" begin="1.1s" repeatCount="indefinite"/></circle>';
  }
  if (o.smoke === 'curl') {
    // smoke curling from the nostrils: two S-wisps, thick at the nostril and
    // thinning as they rise, drifting up and swaying; visible at every frame
    [[351, 78, 0, 4.6, 1], [348, 81, 2.1, 5.2, -1]].forEach(function (w) {
      var x = w[0], y = w[1], d = w[4];
      var path = 'M' + x + ',' + y + ' Q' + (x + 7 * d) + ',' + (y - 8) + ' ' + x + ',' + (y - 16) + ' Q' + (x - 7 * d) + ',' + (y - 24) + ' ' + (x + 1 * d) + ',' + (y - 32) + ' Q' + (x + 6 * d) + ',' + (y - 38) + ' ' + (x + 2 * d) + ',' + (y - 44);
      var anim = '<animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;' + (1.5 * d) + ' -2.5;0 0" keyTimes="0;0.5;1" dur="' + w[3] + 's" begin="-' + w[2] + 's" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
        '<animate attributeName="opacity" values="0.55;0.3;0.55" keyTimes="0;0.5;1" dur="' + w[3] + 's" begin="-' + w[2] + 's" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>';
      s += '<g opacity="0.5" transform="translate(0,0)">' + anim +
        '<path d="' + path + '" fill="none" stroke="#6a5e58" stroke-width="5" stroke-linecap="round" opacity="0.35" filter="url(#' + F + ')"/>' +
        '<path d="' + path + '" fill="none" stroke="#9a8a80" stroke-width="2" stroke-linecap="round" opacity="0.8"/></g>';
    });
  }
  if (o.breath) {
    // a long slow exhale: warm, pale, spreading along the snout line and
    // fading at its far end; swells and settles, never pops
    s += '<g opacity="0.8" transform="translate(352,84)"><path d="M0,-3 Q14,-12 34,-10 Q56,-14 74,-4 Q98,0 104,18 Q110,38 86,42 Q64,50 44,36 Q22,26 0,6 Z" fill="url(#' + B + ')" filter="url(#' + F + ')">' +
      '<animateTransform attributeName="transform" type="scale" additive="sum" values="0.8 0.85;1.04 1.08;0.8 0.85" keyTimes="0;0.4;1" dur="5.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      '<animate attributeName="opacity" values="0.4;0.9;0.4" keyTimes="0;0.4;1" dur="5.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>';
    // puffs rolling off the plume and thinning as they drift
    [[0, 6.1, 4, 12, 70, 8], [1.9, 6.7, 2, 10, 84, 30], [3.6, 5.8, -4, 9, 62, -12]].forEach(function (p) {
      s += '<circle cx="12" cy="' + p[2] + '" r="4" fill="#ffd8a0" opacity="0" filter="url(#' + F + ')">' +
        '<animate attributeName="cx" values="12;' + p[4] + '" dur="' + p[1] + 's" begin="' + p[0] + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.4 1"/>' +
        '<animate attributeName="cy" values="' + p[2] + ';' + p[5] + '" dur="' + p[1] + 's" begin="' + p[0] + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.4 1"/>' +
        '<animate attributeName="r" values="4;' + p[3] + '" dur="' + p[1] + 's" begin="' + p[0] + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.4 1"/>' +
        '<animate attributeName="opacity" values="0;0.32;0" keyTimes="0;0.3;1" dur="' + p[1] + 's" begin="' + p[0] + 's" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>';
    });
    s += '</g>';
  }
  // EYE: almond with a slit, glow spilling onto the scale around it
  s += '<circle cx="300" cy="72" r="13" fill="' + EYE + '" opacity="' + (red ? 0.2 : 0.16) + '" filter="url(#' + F + ')"/>';
  s += '<path d="M291,73 Q298,65 308,70 Q300,78 291,73 Z" fill="' + EYE + '" opacity="0.92"><animate attributeName="opacity" values="' + (red ? '0.78;1;0.78' : '0.55;0.8;0.55') + '" keyTimes="0;0.5;1" dur="' + (red ? '3s' : '5s') + '" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>' +
    '<path d="M299,67 Q301,72 299,77 Q297,72 299,67 Z" fill="' + PUPIL + '" opacity="0.8"/>';
  if (o.lid) {
    // upper lid half down: the brow relaxes over the eye, which reads as calm
    s += '<path d="M290,72 Q298,63 309,69 Q299,68 291,75 Z" fill="#1e0c0a" opacity="0.85"/>';
  }
  s += '</g></g>';

  if (o.leg === 'offer') {
    // the forefoot reaching out of the chest toward the viewer, turned palm
    // up. The held item sits in the pad BEFORE the claws curl up over it.
    // lair_6's forefoot built forward: a limb that tapers from a thick
    // shoulder to a narrow wrist, a wrist knuckle where it bends level, a
    // pad under the item, and digits that curl up round it with the claws
    // grown out of their tips (one digit behind the item, two in front).
    s += '<path d="M282,170 Q304,172 316,186 Q321,193 326,198 L322,210 Q314,206 304,202 Q292,198 281,199 Q270,186 282,170 Z" fill="#2e1212"/>' +
      '<path d="M282,190 Q298,193 310,200 Q317,204 322,209 Q312,206 302,202 Q291,198 280,199 Z" fill="#140606" opacity="0.75"/>' +
      '<path d="M284,173 Q304,176 314,188 Q319,194 323,198" fill="none" stroke="#6a2c26" stroke-width="1.6" stroke-linecap="round" opacity="0.75"/>' +
      '<path d="M322,199 Q336,195 350,198 Q360,198 364,195 Q366,203 357,208 Q340,213 324,210 Z" fill="#2a1212"/>' +
      // wrist knuckle: the joint where the limb turns level into the paw
      '<circle cx="324" cy="204" r="6.4" fill="#2e1212"/>' +
      '<path d="M319,199 Q324,196.5 329,199" fill="none" stroke="#6a2c26" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/>' +
      '<path d="M326,200 Q340,197 352,199 Q358,199 362,197" fill="none" stroke="#5a2626" stroke-width="1" opacity="0.7"/>' +
      // far digit, behind the item: curls up its right side
      '<path d="M352,201 Q360,196 361,186 L357.5,186 Q357,194 349,199 Z" fill="#1a0808"/>' +
      '<path d="M361,186 Q361,180 356.5,177.5 Q358,182 357.5,186 Z" fill="#d8c4a8" opacity="0.85"/>';
    if (o.held) s += '<g transform="translate(' + o.heldAt[0] + ',' + o.heldAt[1] + ')">' + o.held + '</g>';
    // near digits, in front of the item, closing over its lower half
    s += '<path d="M328,205 Q327,196 332,190 L335.5,191.5 Q332,197 335,204 Z" fill="#2a1212"/>' +
      '<path d="M332,190 Q334,185 339,184.5 Q337,188 335.5,191.5 Z" fill="#d8c4a8" opacity="0.85"/>' +
      '<path d="M340,207 Q339,199 343,194 L346.5,195.5 Q343,200 347,206 Z" fill="#2a1212"/>' +
      '<path d="M343,194 Q345.5,189.5 350,189.5 Q347.5,192.5 346.5,195.5 Z" fill="#d8c4a8" opacity="0.85"/>';
  }
  return s + '</g>';
}

// Scene 0: The Descent — dark passage, stone steps, heat rising
STORY_SCENES['lair_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairDesc" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0a08"/><stop offset="50%" stop-color="#2a1210"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairLavaG0" cx="50%" cy="90%" r="50%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.15"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <filter id="lairFireGlow0"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="500" height="260" fill="url(#lairDesc)"/>
<!-- Lava glow from below -->
<rect x="0" y="180" width="500" height="80" fill="url(#lairLavaG0)"/>
<!-- Rough cave walls -->
<path d="M0,0 L0,260 L30,250 Q50,220 40,180 Q60,150 45,120 Q55,80 40,50 Q50,20 35,0 Z" fill="#2a1a14"/>
<path d="M500,0 L500,260 L470,250 Q450,220 460,180 Q440,150 455,120 Q445,80 460,50 Q450,20 465,0 Z" fill="#2a1a14"/>
<!-- Claw marks on walls -->
<g stroke="#3a2218" stroke-width="2" stroke-linecap="round" opacity="0.5">
  <line x1="20" y1="60" x2="15" y2="100"/><line x1="25" y1="58" x2="20" y2="98"/><line x1="30" y1="62" x2="25" y2="102"/>
  <line x1="475" y1="80" x2="480" y2="120"/><line x1="470" y1="78" x2="475" y2="118"/><line x1="465" y1="82" x2="470" y2="122"/>
</g>
<!-- ====================================================================
     THE STEPS. Four rects with 3px gaps between them, which is exactly why
     they floated: nothing connected one tread to the next. A flight of steps
     is TREAD + RISER, and the riser is the vertical face you see from above.
     Without it you have four shelves hanging in a void.

     The flight descends toward the viewer, so each tread is wider and deeper
     than the one behind it, and the stair narrows as it recedes into the dark.
     Centuries of feet wear the middle of a step hollow.
     ==================================================================== -->
<path d="M162,201 L338,201 L346,210 L154,210 Z" fill="#1f1510"/>
<path d="M162,196 L338,196 L338,201 L162,201 Z" fill="#6b4a2e"/>
<path d="M162,196 L338,196 L338,197 L162,197 Z" fill="#a8703a" opacity="0.75"/>
<path d="M210,197 Q250,200 289,197 Q250,198 210,197 Z" fill="#1f1510" opacity="0.35"/>
<path d="M154,216 L346,216 L355,225 L145,225 Z" fill="#1f1510"/>
<path d="M154,210 L346,210 L346,216 L154,216 Z" fill="#6b4a2e"/>
<path d="M154,210 L346,210 L346,211 L154,211 Z" fill="#a8703a" opacity="0.75"/>
<path d="M206,211 Q250,215 293,211 Q250,212 206,211 Z" fill="#1f1510" opacity="0.35"/>
<path d="M145,232 L355,232 L365,241 L135,241 Z" fill="#1f1510"/>
<path d="M145,225 L355,225 L355,232 L145,232 Z" fill="#6b4a2e"/>
<path d="M145,225 L355,225 L355,226 L145,226 Z" fill="#a8703a" opacity="0.75"/>
<path d="M202,226 Q250,231 297,226 Q250,227 202,226 Z" fill="#1f1510" opacity="0.35"/>
<path d="M135,249 L365,249 L376,258 L124,258 Z" fill="#1f1510"/>
<path d="M135,241 L365,241 L365,249 L135,249 Z" fill="#6b4a2e"/>
<path d="M135,241 L365,241 L365,242 L135,242 Z" fill="#a8703a" opacity="0.75"/>
<path d="M198,242 Q250,248 301,242 Q250,244 198,242 Z" fill="#1f1510" opacity="0.35"/>
<!-- the walls closing in on either side of the stair -->
<path d="M120,190 Q142,214 124,260 L162,260 Q152,216 162,192 Z" fill="#2a1a12" opacity="0.9"/>
<path d="M380,190 Q358,214 376,260 L338,260 Q348,216 338,192 Z" fill="#2a1a12" opacity="0.9"/>
<path d="M120,190 Q142,214 124,260 L136,260 Q130,216 138,192 Z" fill="#4a2a20" opacity="0.4"/>

<!-- Red glow from depth -->
<ellipse cx="250" cy="260" rx="100" ry="30" fill="#ff2200" opacity="0.08">
  <animate attributeName="opacity" values="0.06;0.12;0.06" dur="4s" repeatCount="indefinite"/>
</ellipse>
<!-- Smoke wisps rising -->
<g opacity="0.3">
  <circle cx="200" cy="220" r="6" fill="#444">
    <animate attributeName="cy" values="220;180;140" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0.15;0" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="230" r="5" fill="#444">
    <animate attributeName="cy" values="230;190;150" dur="5s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="opacity" values="0.25;0.12;0" dur="5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="250" cy="240" r="7" fill="#555">
    <animate attributeName="cy" values="240;195;150" dur="7s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="opacity" values="0.2;0.1;0" dur="7s" repeatCount="indefinite" begin="2s"/>
  </circle>
</g>
<!-- Faceted side walls retain a clear central descent. -->
<path d="M45 0L98 28L111 80L92 130L117 190L138 192L125 260H43L52 204L40 166L58 121L43 75Z" fill="#362018" opacity=".6"/>
<path d="M455 0L407 24L389 72L410 119L383 188L362 192L375 260H459L448 203L463 161L442 116L456 68Z" fill="#352019" opacity=".55"/>
<path d="M71 28L85 78L72 125L92 172 M427 26L411 74L430 119L407 174" fill="none" stroke="#6c4230" stroke-width="1.3" opacity=".32"/>
<path d="M55 113L68 116V104 M441 113L431 116V104" fill="none" stroke="#77604a" stroke-width="2"/>
<path d="M67 101V119 M430 101V119" stroke="#45382d" stroke-width="3"/>
<!-- the hoard starts here: gold drifted to the foot of each wall and onto the
     lowest tread, the same lairHoard() gold as the chamber below -->
` + lairHoard('lairH0', {
  seed: 5,
  spill: [[150, 350, 244, 256, 9]],
  heaps: [[94, 249, 24, 10], [408, 253, 22, 8]],
  goblets: [[118, 251, 0.75, 10]]
}) + `

<!-- Torch on wall (left) -->
<rect x="55" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="57" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="8;10;7;9;8" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<ellipse cx="57" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="5;7;4;6;5" dur="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- Torch on wall (right) -->
<rect x="441" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="443" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="7;9;8;10;7" dur="2.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<ellipse cx="443" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="4;6;5;7;4" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
</svg>`;

// Scene 1: The Dragon's Chamber — vast cavern, dragon silhouette, glowing red eyes
// The chamber is one room drawn for several steps, so it is a builder:
// k suffixes the ids, liam poses the dragon, warm (step 8) lifts the
// cavern from a red glare to a brighter hearth glow.
function lairChamber(k, liam, warm) {
  return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairChamber` + k + `" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="40%" stop-color="#2a1010"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairDrGlow` + k + `" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>` + (warm ? `
  <radialGradient id="lairWarm` + k + `" cx="55%" cy="52%" r="62%">
    <stop offset="0%" stop-color="#ffb24a" stop-opacity="0.55"/><stop offset="50%" stop-color="#e0702a" stop-opacity="0.26"/><stop offset="100%" stop-color="#c04a1a" stop-opacity="0.12"/>
  </radialGradient>` : '') + `
</defs>
<rect width="500" height="260" fill="url(#lairChamber` + k + `)"/>` + (warm ? `
<!-- the cavern glowing brighter: a warm wash behind everything, breathing
     up slowly with his exhale -->
<rect width="500" height="260" fill="url(#lairWarm` + k + `)">
  <animate attributeName="opacity" values="0.8;1;0.8" keyTimes="0;0.4;1" dur="5.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</rect>` : '') + `

<!-- ====================================================================
     CAVERN WALLS. Rock breaks in flat planes, so the walls step in and
     out rather than sweeping in one smooth curve.
     ==================================================================== -->
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L28,170 L12,204 L30,238 L16,260 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L14,140 L4,102 L18,66 L2,30 L0,10 Z" fill="#3e221c" opacity="0.5"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L472,170 L488,204 L470,238 L484,260 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L486,140 L482,100 L496,64 L482,28 L500,8 Z" fill="#3e221c" opacity="0.42"/>
<!-- Stalactites: a slow taper with a needle point -->
<path d="M80,0 Q85,-2 90,0 Q88,20 85,40 Q83,20 80,0 Z" fill="#2a1814"/>
<path d="M83,2 Q85,1 87,2 Q86,20 85,34 Q84,20 83,2 Z" fill="#432420" opacity="0.5"/>
<path d="M180,0 Q184,-2 188,0 Q186,18 184,34 Q182,18 180,0 Z" fill="#2a1814"/>
<path d="M300,0 Q305,-2 310,0 Q308,24 305,46 Q303,24 300,0 Z" fill="#2a1814"/>
<path d="M303,2 Q305,1 307,2 Q306,24 305,40 Q304,24 303,2 Z" fill="#432420" opacity="0.5"/>
<path d="M420,0 Q424,-2 428,0 Q426,20 424,38 Q422,20 420,0 Z" fill="#2a1814"/>
<path d="M132,0 Q135,-1 138,0 Q137,14 135,26 Q134,14 132,0 Z" fill="#2a1814" opacity="0.7"/>
<path d="M360,0 Q363,-1 366,0 Q365,12 363,24 Q362,12 360,0 Z" fill="#2a1814" opacity="0.7"/>

<!-- Cryptic clue carvings scratched into the rock -->
<text x="30" y="50" fill="#ff4422" font-family="Georgia,serif" font-size="6" opacity="0.3" transform="rotate(-5,30,50)">8 down</text>
<text x="25" y="90" fill="#ff6644" font-family="Georgia,serif" font-size="5" opacity="0.25" transform="rotate(-8,25,90)">(5,4)</text>
<text x="455" y="55" fill="#ff4422" font-family="Georgia,serif" font-size="6" opacity="0.3" transform="rotate(5,455,55)">3 across</text>
<text x="460" y="100" fill="#ff6644" font-family="Georgia,serif" font-size="5" opacity="0.25" transform="rotate(8,460,100)">ANAG.</text>

<!-- ====================================================================
     THE FLOOR. Drawn before the hoard so the gold sits ON it.
     ==================================================================== -->
<path d="M0,236 Q60,228 128,232 Q200,236 250,229 Q320,224 396,231 Q452,236 500,230 L500,260 L0,260 Z" fill="#1a0a08"/>
<path d="M0,248 Q100,242 200,246 Q300,250 400,244 Q456,248 500,244 L500,260 L0,260 Z" fill="#120606"/>

<!-- THE HOARD: shared lairHoard() floor, gold under and around him -->
` + lairHoard('lairH1' + k, {
  seed: 11,
  spill: [[20, 480, 238, 258, 46]],
  heaps: [[250, 258, 250, 9], [92, 248, 58, 17], [168, 252, 34, 9], [398, 248, 56, 15], [326, 254, 30, 8]],
  chest: { x: 112, y: 249, scale: 0.55 },
  goblets: [[54, 250, 0.9, -8], [372, 249, 0.85, 6], [452, 252, 0.8, -4]]
}) + `

<!-- Dragon aura -->
<circle cx="250" cy="145" r="90" fill="url(#lairDrGlow` + k + `)"/>

<!-- LIAM: the shared lairLiam() dragon (lair_6's animal), posed per step -->
` + lairLiam('lairL1' + k, liam) + `

<!-- ====================================================================
     TORCHES. A flame is a teardrop that leans and licks, not an ellipse.
     ==================================================================== -->
<path d="M49,102 L55,102 Q56,102 56,104 L55,120 L49,120 L48,104 Q48,102 49,102 Z" fill="#6a4a20"/>
<path d="M48,102 Q52,99 56,102 Q52,104 48,102 Z" fill="#8a6430" opacity="0.6"/>
<path d="M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z;M52,84 Q62,96 59,105 Q57,112 52,112 Q47,112 45,105 Q43,96 52,84 Z;M52,90 Q59,99 57,105 Q55,112 52,112 Q49,112 47,105 Q45,99 52,90 Z;M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z;M52,91 Q57,100 56,106 Q54,110 52,110 Q50,110 48,106 Q47,100 52,91 Z;M52,96 Q55,102 54,106 Q53,110 52,110 Q51,110 50,106 Q49,102 52,96 Z;M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z" dur="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M445,102 L451,102 Q452,102 452,104 L451,120 L445,120 L444,104 Q444,102 445,102 Z" fill="#6a4a20"/>
<path d="M444,102 Q448,99 452,102 Q448,104 444,102 Z" fill="#8a6430" opacity="0.6"/>
<path d="M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z;M448,91 Q455,99 453,105 Q451,112 448,112 Q445,112 443,105 Q441,99 448,91 Z;M448,84 Q458,96 455,105 Q453,112 448,112 Q443,112 441,105 Q439,96 448,84 Z;M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z" dur="2.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z;M448,96 Q451,102 450,106 Q449,110 448,110 Q447,110 446,106 Q445,102 448,96 Z;M448,91 Q453,100 452,106 Q450,110 448,110 Q446,110 444,106 Q443,100 448,91 Z;M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- pools of torchlight on the wall behind each bracket -->
<path d="M38,90 Q52,80 66,90 Q68,108 52,118 Q36,108 38,90 Z" fill="#ff6622" opacity="0.05"/>
<path d="M434,90 Q448,80 462,90 Q464,108 448,118 Q432,108 434,90 Z" fill="#ff6622" opacity="0.05"/>` + (warm ? `
<!-- the lift in the light reaches the near plane too, gently -->
<rect width="500" height="260" fill="url(#lairWarm` + k + `)" opacity="0.26">
  <animate attributeName="opacity" values="0.2;0.32;0.2" keyTimes="0;0.4;1" dur="5.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</rect>` : '') + `
</svg>`;
}

// Scene 1: the glare. Wings furled, jaw shut, head dipped to watch you;
// both red eyes catch the light.
STORY_SCENES['lair_1'] = lairChamber('', { wings: 'folded', neck: 4, head: 10, jaw: 'closed', eye: 'red', farEye: true, smoke: true });

// Scene 2: Dragon speaks, challenges the solver — reuse dragon chamber scene
STORY_SCENES['lair_2'] = STORY_SCENES['lair_1'];

// Scene 3: Puzzle — "Tough about love, a dragon's pile (5)" HOARD on scorched scroll
STORY_SCENES['lair_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow1" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.08"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairVellum1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b4a074"/><stop offset="10%" stop-color="#e8d8b0"/><stop offset="50%" stop-color="#f0e4c4"/><stop offset="90%" stop-color="#e8d8b0"/><stop offset="100%" stop-color="#b4a074"/>
  </linearGradient>
  <linearGradient id="lairRoller1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#3a2810"/><stop offset="35%" stop-color="#8a6430"/><stop offset="70%" stop-color="#6a4a20"/><stop offset="100%" stop-color="#2e1e08"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll1)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow1)"/>

<!-- ====================================================================
     THE SCROLL. A rounded rect is a sheet of paper, not a scroll. Vellum
     held open between two rollers SAGS between them, so its top edge dips
     and its bottom edge bows out. It CURLS back into each roller, which
     shows as a lit inner face. And it has been in a dragon's fire, so the
     free edges are eaten away in a ragged bite rather than cut straight.
     Drawn back to front: sag shadow, sheet, curls, burn, rollers, text.
     ==================================================================== -->
<!-- the shadow the hanging sheet throws on the rock behind it -->
<path d="M84,46 Q250,38 416,46 Q424,132 416,226 Q250,236 84,226 Q76,132 84,46 Z" fill="#0e0404" opacity="0.55"/>
<!-- the sheet: top edge dips, bottom edge bows, edges bitten by fire -->
<path d="M86,44 Q140,54 190,50 Q250,45 312,50 Q364,54 414,44 Q420,72 417,96 Q422,118 416,140 Q421,170 415,196 Q418,212 414,222 Q360,212 306,217 Q250,222 192,217 Q138,212 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="url(#lairVellum1)" opacity="0.94"/>
<!-- the CURL back into each roller: a lit inner face and a shadowed fold -->
<path d="M86,44 Q78,46 76,60 Q74,132 76,206 Q78,220 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M86,44 Q80,50 79,62 Q78,132 80,204 Q81,216 86,222 Q84,206 84,140 Q84,80 86,44 Z" fill="#9c8a62" opacity="0.55"/>
<path d="M414,44 Q422,46 424,60 Q426,132 424,206 Q422,220 414,222 Q418,212 415,196 Q421,170 416,140 Q422,118 417,96 Q420,72 414,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M414,44 Q420,50 421,62 Q422,132 420,204 Q419,216 414,222 Q416,206 416,140 Q416,80 414,44 Z" fill="#9c8a62" opacity="0.55"/>
<!-- a fold running down the sheet where it has been rolled and rolled -->
<path d="M148,49 Q145,132 148,218" fill="none" stroke="#c4b088" stroke-width="1.6" opacity="0.45"/>
<path d="M352,49 Q355,132 352,218" fill="none" stroke="#c4b088" stroke-width="1.4" opacity="0.4"/>
<!-- ====================================================================
     BURN. Fire eats INWARD from an edge: a brown scorch halo, then a
     charred black rim, then nothing. This is the FIRST clue, so the
     damage is light: a bite out of two corners and a few sparks' worth.
     ==================================================================== -->
<path d="M86,44 Q104,52 96,66 Q108,78 98,92 Q86,86 84,68 Q82,54 86,44 Z" fill="#8a6030" opacity="0.35"/>
<path d="M86,44 Q98,50 92,60 Q100,70 94,80 Q86,74 85,60 Z" fill="#4a3010" opacity="0.4"/>
<path d="M414,44 Q396,52 404,66 Q392,78 402,92 Q414,86 416,68 Q418,54 414,44 Z" fill="#8a6030" opacity="0.35"/>
<path d="M414,44 Q402,50 408,60 Q400,70 406,80 Q414,74 415,60 Z" fill="#4a3010" opacity="0.4"/>
<path d="M86,222 Q102,214 94,202 Q104,192 96,182 Q86,190 84,204 Z" fill="#8a6030" opacity="0.3"/>
<path d="M414,222 Q398,214 406,202 Q396,192 404,182 Q414,190 416,204 Z" fill="#8a6030" opacity="0.3"/>
<!-- scorch blooms where embers landed on the face of the sheet -->
<path d="M110,58 Q126,50 140,60 Q146,74 134,84 Q116,88 108,76 Q104,64 110,58 Z" fill="#6a4a20" opacity="0.14"/>
<path d="M116,64 Q126,60 134,68 Q132,76 122,78 Q114,72 116,64 Z" fill="#4a3010" opacity="0.12"/>
<path d="M370,182 Q384,176 394,186 Q398,198 386,204 Q372,206 366,196 Q364,186 370,182 Z" fill="#6a4a20" opacity="0.12"/>
<path d="M340,52 Q352,48 360,56 Q362,66 352,70 Q340,70 336,62 Z" fill="#6a4a20" opacity="0.1"/>

<!-- ====================================================================
     ROLLERS. A turned wooden roller is a cylinder: lit down one side,
     dark on the other, with a knob finial at each end.
     ==================================================================== -->
<path d="M70,42 Q70,38 76,38 Q82,38 82,42 L82,224 Q82,228 76,228 Q70,228 70,224 Z" fill="url(#lairRoller1)"/>
<path d="M73,40 Q75,39 77,40 L77,226 Q75,227 73,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,36 Q66,30 76,30 Q86,30 86,36 Q86,42 76,42 Q66,42 66,36 Z" fill="#6a4a20"/>
<path d="M70,34 Q74,32 80,33 Q76,36 70,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,230 Q66,224 76,224 Q86,224 86,230 Q86,236 76,236 Q66,236 66,230 Z" fill="#6a4a20"/>
<path d="M70,228 Q74,226 80,227 Q76,230 70,231 Z" fill="#a5793c" opacity="0.45"/>
<path d="M418,42 Q418,38 424,38 Q430,38 430,42 L430,224 Q430,228 424,228 Q418,228 418,224 Z" fill="url(#lairRoller1)"/>
<path d="M421,40 Q423,39 425,40 L425,226 Q423,227 421,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,36 Q414,30 424,30 Q434,30 434,36 Q434,42 424,42 Q414,42 414,36 Z" fill="#6a4a20"/>
<path d="M418,34 Q422,32 428,33 Q424,36 418,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,230 Q414,224 424,224 Q434,224 434,230 Q434,236 424,236 Q424,236 414,230 Z" fill="#6a4a20"/>

<!-- Header, rule, and the clue. Text unchanged. -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="Georgia,serif" font-size="10" opacity="0.6">THE DRAGON'S FIRST CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#2a1a10" stroke-width="0.7" opacity="0.3"/>
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="Georgia,serif" font-size="14" font-weight="bold">"Tough about love,</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="Georgia,serif" font-size="14" font-weight="bold">a dragon's pile (5)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="Georgia,serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M46,130 Q51,125 58,129 Q52,135 46,130 Z" fill="#ff2200" opacity="0.42">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M51,127 Q53,130 51,133 Q49,130 51,127 Z" fill="#ffaa00" opacity="0.45"/>
<path d="M442,130 Q447,125 454,129 Q448,135 442,130 Z" fill="#ff2200" opacity="0.42">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M447,127 Q449,130 447,133 Q445,130 447,127 Z" fill="#ffaa00" opacity="0.45"/>

<!-- the hoard at the foot of the scroll: shared lairHoard() gold -->
` + lairHoard('lairH3', {
  seed: 3,
  spill: [[60, 440, 252, 259, 14]],
  heaps: [[28, 262, 44, 24], [474, 262, 40, 22], [120, 266, 52, 12], [388, 266, 50, 12]],
  goblets: [[58, 258, 0.8, -8]]
}) + `

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="26" cy="176" r="1.1" fill="#ff8844" opacity="0.28">
  <animate attributeName="cy" values="176;148;120" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.28;0.12;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 4: Dragon responds, impressed — reuse dragon chamber scene
STORY_SCENES['lair_4'] = lairChamber('4', { wings: 'folded', neck: 4, head: 10, jaw: 'closed', eye: 'red', farEye: true, smoke: 'curl' });

// Scene 5: Puzzle — "Iron fen forged into a blaze (7)" INFERNO on scorched scroll
STORY_SCENES['lair_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow2" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairVellum2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b4a074"/><stop offset="10%" stop-color="#e8d8b0"/><stop offset="50%" stop-color="#f0e4c4"/><stop offset="90%" stop-color="#e8d8b0"/><stop offset="100%" stop-color="#b4a074"/>
  </linearGradient>
  <linearGradient id="lairRoller2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#3a2810"/><stop offset="35%" stop-color="#8a6430"/><stop offset="70%" stop-color="#6a4a20"/><stop offset="100%" stop-color="#2e1e08"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll2)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow2)"/>

<!-- ====================================================================
     THE SCROLL. A rounded rect is a sheet of paper, not a scroll. Vellum
     held open between two rollers SAGS between them, so its top edge dips
     and its bottom edge bows out. It CURLS back into each roller, which
     shows as a lit inner face. And it has been in a dragon's fire, so the
     free edges are eaten away in a ragged bite rather than cut straight.
     Drawn back to front: sag shadow, sheet, curls, burn, rollers, text.
     This is the SECOND clue, so the fire has taken more of it.
     ==================================================================== -->
<!-- the shadow the hanging sheet throws on the rock behind it -->
<path d="M84,46 Q250,38 416,46 Q424,132 416,226 Q250,236 84,226 Q76,132 84,46 Z" fill="#0e0404" opacity="0.55"/>
<!-- the sheet: top edge dips, bottom edge bows, edges bitten by fire -->
<path d="M86,44 Q140,54 190,50 Q250,45 312,50 Q364,54 414,44 Q420,72 417,96 Q422,118 416,140 Q421,170 415,196 Q418,212 414,222 Q360,212 306,217 Q250,222 192,217 Q138,212 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="url(#lairVellum2)" opacity="0.94"/>
<!-- the CURL back into each roller: a lit inner face and a shadowed fold -->
<path d="M86,44 Q78,46 76,60 Q74,132 76,206 Q78,220 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M86,44 Q80,50 79,62 Q78,132 80,204 Q81,216 86,222 Q84,206 84,140 Q84,80 86,44 Z" fill="#9c8a62" opacity="0.55"/>
<path d="M414,44 Q422,46 424,60 Q426,132 424,206 Q422,220 414,222 Q418,212 415,196 Q421,170 416,140 Q422,118 417,96 Q420,72 414,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M414,44 Q420,50 421,62 Q422,132 420,204 Q419,216 414,222 Q416,206 416,140 Q416,80 414,44 Z" fill="#9c8a62" opacity="0.55"/>
<!-- a fold running down the sheet where it has been rolled and rolled -->
<path d="M148,49 Q145,132 148,218" fill="none" stroke="#c4b088" stroke-width="1.6" opacity="0.45"/>
<path d="M352,49 Q355,132 352,218" fill="none" stroke="#c4b088" stroke-width="1.4" opacity="0.4"/>
<!-- ====================================================================
     BURN. Fire eats INWARD from an edge: a brown scorch halo, then a
     charred black rim, then nothing. Deeper bites than the first clue,
     and the char has begun to eat toward the writing.
     ==================================================================== -->
<path d="M86,44 Q112,54 102,70 Q116,86 104,104 Q88,96 84,72 Q81,54 86,44 Z" fill="#8a6030" opacity="0.42"/>
<path d="M86,44 Q104,52 96,66 Q106,80 98,94 Q87,86 85,66 Z" fill="#4a3010" opacity="0.5"/>
<path d="M414,44 Q388,54 398,70 Q384,86 396,104 Q412,96 416,72 Q419,54 414,44 Z" fill="#8a6030" opacity="0.42"/>
<path d="M414,44 Q396,52 404,66 Q394,80 402,94 Q413,86 415,66 Z" fill="#4a3010" opacity="0.5"/>
<path d="M86,222 Q108,212 98,196 Q110,182 100,168 Q86,180 83,200 Z" fill="#8a6030" opacity="0.38"/>
<path d="M414,222 Q392,212 402,196 Q390,182 400,168 Q414,180 417,200 Z" fill="#8a6030" opacity="0.38"/>
<!-- scorch blooms where embers landed on the face of the sheet -->
<path d="M110,58 Q126,50 140,60 Q146,74 134,84 Q116,88 108,76 Q104,64 110,58 Z" fill="#6a4a20" opacity="0.14"/>
<path d="M116,64 Q126,60 134,68 Q132,76 122,78 Q114,72 116,64 Z" fill="#4a3010" opacity="0.12"/>
<path d="M370,182 Q384,176 394,186 Q398,198 386,204 Q372,206 366,196 Q364,186 370,182 Z" fill="#6a4a20" opacity="0.12"/>
<path d="M336,50 Q352,44 364,54 Q368,68 356,76 Q338,78 332,66 Q330,54 336,50 Z" fill="#6a4a20" opacity="0.16"/>
<path d="M342,56 Q352,52 358,60 Q356,68 346,70 Q340,64 342,56 Z" fill="#4a3010" opacity="0.13"/>
<path d="M124,186 Q140,180 152,190 Q156,202 144,210 Q128,212 122,200 Q120,190 124,186 Z" fill="#6a4a20" opacity="0.15"/>
<path d="M242,206 Q256,202 264,210 Q262,220 250,222 Q240,218 242,206 Z" fill="#6a4a20" opacity="0.1"/>

<!-- ====================================================================
     ROLLERS. A turned wooden roller is a cylinder: lit down one side,
     dark on the other, with a knob finial at each end.
     ==================================================================== -->
<path d="M70,42 Q70,38 76,38 Q82,38 82,42 L82,224 Q82,228 76,228 Q70,228 70,224 Z" fill="url(#lairRoller2)"/>
<path d="M73,40 Q75,39 77,40 L77,226 Q75,227 73,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,36 Q66,30 76,30 Q86,30 86,36 Q86,42 76,42 Q66,42 66,36 Z" fill="#6a4a20"/>
<path d="M70,34 Q74,32 80,33 Q76,36 70,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,230 Q66,224 76,224 Q86,224 86,230 Q86,236 76,236 Q66,236 66,230 Z" fill="#6a4a20"/>
<path d="M70,228 Q74,226 80,227 Q76,230 70,231 Z" fill="#a5793c" opacity="0.45"/>
<path d="M418,42 Q418,38 424,38 Q430,38 430,42 L430,224 Q430,228 424,228 Q418,228 418,224 Z" fill="url(#lairRoller2)"/>
<path d="M421,40 Q423,39 425,40 L425,226 Q423,227 421,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,36 Q414,30 424,30 Q434,30 434,36 Q434,42 424,42 Q414,42 414,36 Z" fill="#6a4a20"/>
<path d="M418,34 Q422,32 428,33 Q424,36 418,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,230 Q414,224 424,224 Q434,224 434,230 Q434,236 424,236 Q424,236 414,230 Z" fill="#6a4a20"/>

<!-- Header, rule, and the clue. Text unchanged. -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="Georgia,serif" font-size="10" opacity="0.6">THE DRAGON'S SECOND CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#2a1a10" stroke-width="0.7" opacity="0.3"/>
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="Georgia,serif" font-size="14" font-weight="bold">"Iron fen forged</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="Georgia,serif" font-size="14" font-weight="bold">into a blaze (7)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="Georgia,serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M40,126 Q46,120 54,125 Q47,132 40,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M46,122 Q48,126 46,130 Q44,126 46,122 Z" fill="#ffaa00" opacity="0.55"/>
<path d="M446,126 Q452,120 460,125 Q453,132 446,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M452,122 Q454,126 452,130 Q450,126 452,122 Z" fill="#ffaa00" opacity="0.55"/>

<!-- the hoard at the foot of the scroll: shared lairHoard() gold -->
` + lairHoard('lairH5', {
  seed: 13,
  spill: [[60, 440, 252, 259, 14]],
  heaps: [[30, 262, 42, 22], [470, 262, 42, 24], [118, 266, 50, 12], [390, 266, 52, 12]],
  goblets: [[444, 258, 0.8, 8]]
}) + `

<!-- claw scratches gouged in the floor beneath the scroll -->
<path d="M180,238 Q190,244 200,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M190,238 Q200,244 210,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M200,238 Q210,244 220,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M290,238 Q300,244 310,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M300,238 Q310,244 320,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M310,238 Q320,244 330,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="250" r="1.5" fill="#ff8844" opacity="0.32">
  <animate attributeName="cy" values="250;214;178" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.32;0.14;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 6: Dragon prepares final challenge — dragon risen, wings spread
STORY_SCENES['lair_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairRise" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="40%" stop-color="#2a1010"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairDrGlow6" cx="50%" cy="45%" r="50%">
    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.15"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>
  <!-- body and neck share ONE gradient field (user space), so where the
       neck overlaps the chest there is no seam -->
  <linearGradient id="lairHide6" gradientUnits="userSpaceOnUse" x1="202" y1="110" x2="312" y2="150">
    <stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#3a1616"/><stop offset="100%" stop-color="#140606"/>
  </linearGradient>
  <linearGradient id="lairHideHead6" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#3a1616"/><stop offset="100%" stop-color="#1a0808"/>
  </linearGradient>
  <linearGradient id="lairMembrane6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#140606"/><stop offset="100%" stop-color="#0c0404"/>
  </linearGradient>
  <filter id="lairFireGlow6"><feGaussianBlur stdDeviation="3"/></filter>
  <linearGradient id="lairBreath6" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#fff0b8" stop-opacity="0.95"/><stop offset="28%" stop-color="#ffbb44" stop-opacity="0.9"/><stop offset="65%" stop-color="#ff6622" stop-opacity="0.7"/><stop offset="100%" stop-color="#cc2200" stop-opacity="0.15"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairRise)"/>

<!-- Cavern walls: faceted planes -->
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L28,170 L12,204 L30,238 L16,260 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L14,140 L4,102 L18,66 L2,30 L0,10 Z" fill="#3e221c" opacity="0.5"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L472,170 L488,204 L470,238 L484,260 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L486,140 L482,100 L496,64 L482,28 L500,8 Z" fill="#3e221c" opacity="0.42"/>
<!-- Stalactites -->
<path d="M80,0 Q85,-2 90,0 Q88,20 85,40 Q83,20 80,0 Z" fill="#2a1814"/>
<path d="M83,2 Q85,1 87,2 Q86,20 85,34 Q84,20 83,2 Z" fill="#432420" opacity="0.5"/>
<path d="M180,0 Q184,-2 188,0 Q186,18 184,34 Q182,18 180,0 Z" fill="#2a1814"/>
<path d="M300,0 Q305,-2 310,0 Q308,24 305,46 Q303,24 300,0 Z" fill="#2a1814"/>
<path d="M303,2 Q305,1 307,2 Q306,24 305,40 Q304,24 303,2 Z" fill="#432420" opacity="0.5"/>
<path d="M420,0 Q424,-2 428,0 Q426,20 424,38 Q422,20 420,0 Z" fill="#2a1814"/>

<!-- Floor -->
<path d="M0,238 Q60,231 128,235 Q200,239 250,232 Q320,227 396,234 Q452,238 500,233 L500,260 L0,260 Z" fill="#1a0a08"/>
<path d="M0,249 Q100,243 200,247 Q300,251 400,245 Q456,249 500,245 L500,260 L0,260 Z" fill="#120606"/>
<!-- THE HOARD: shared lairHoard() floor, the same gold he guards in the chamber -->
` + lairHoard('lairH6', {
  seed: 17,
  spill: [[20, 480, 240, 258, 40]],
  heaps: [[250, 259, 250, 8], [70, 250, 50, 14], [168, 254, 30, 8], [420, 250, 52, 13]],
  chest: { x: 104, y: 252, scale: 0.5 },
  goblets: [[40, 252, 0.85, -6], [372, 253, 0.8, 8]]
}) + `

<!-- Dragon aura, intensified -->
<circle cx="250" cy="120" r="110" fill="url(#lairDrGlow6)"/>

<!-- ====================================================================
     LIAM RISEN. Same animal as the chamber, reared up: the wings are OPEN
     now, so the membrane spans between splayed finger bones and the
     trailing edge scallops deeply between each one. A spread wing reads by
     its ribs; without them it is a cape.
     ==================================================================== -->
<!-- far wing (his right, our left), spread -->
<!-- Both wings root INSIDE the shoulders (drawn before the body, which
     covers the root). Arm bone shoulder to wrist, then four finger bones
     radiate from the wrist to the scallop tips: one joint, not loose arcs. -->
<!-- Wings RAISED in a V as he rears: a solid dark membrane silhouette
     against the lit cavern, finger bones lighter than the skin. -->
<path d="M240,156 Q198,96 162,46 Q124,20 80,16 Q84,38 44,48 Q78,66 52,90 Q96,86 104,112 Q166,124 216,178 Z" fill="url(#lairMembrane6)"/>
<path d="M80,16 Q84,38 44,48 Q78,66 52,90 Q96,86 104,112 Q166,124 216,178" fill="none" stroke="#4a1c1c" stroke-width="1" stroke-linejoin="round" opacity="0.8"/>
<path d="M162,46 Q118,30 82,18 M162,46 Q98,48 46,48 M162,46 Q102,68 54,88 M162,46 Q128,82 106,110" fill="none" stroke="#3e1818" stroke-width="2.2" stroke-linecap="round"/>
<path d="M240,156 Q198,96 162,46" fill="none" stroke="#3a1616" stroke-width="5.5" stroke-linecap="round"/>
<path d="M236,148 Q198,94 164,50" fill="none" stroke="#5a2626" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/>
<!-- wing claw (thumb) at the wrist -->
<path d="M160,46 Q160,32 168,24 Q168,36 166,48 Z" fill="#3a1616"/>

<!-- near wing (his left, our right): mirror about x=260 -->
<path d="M280,156 Q322,96 358,46 Q396,20 440,16 Q436,38 476,48 Q442,66 468,90 Q424,86 416,112 Q354,124 304,178 Z" fill="url(#lairMembrane6)"/>
<path d="M440,16 Q436,38 476,48 Q442,66 468,90 Q424,86 416,112 Q354,124 304,178" fill="none" stroke="#5a2220" stroke-width="1" stroke-linejoin="round" opacity="0.85"/>
<path d="M358,46 Q402,30 438,18 M358,46 Q422,48 474,48 M358,46 Q418,68 466,88 M358,46 Q392,82 414,110" fill="none" stroke="#3e1818" stroke-width="2.2" stroke-linecap="round"/>
<path d="M280,156 Q322,96 358,46" fill="none" stroke="#3a1616" stroke-width="5.5" stroke-linecap="round"/>
<path d="M284,148 Q322,94 356,50" fill="none" stroke="#5a2626" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/>
<path d="M360,46 Q360,32 352,24 Q352,36 354,48 Z" fill="#3a1616"/>

<!-- tail, thrown out behind and curling up as he rears -->
<path d="M290,206 Q334,204 368,214 Q398,224 416,242 Q396,246 376,236 Q350,224 322,219 Q302,216 288,218 Z" fill="#1a0808"/>
<path d="M416,242 Q430,234 442,240 Q436,250 422,250 Q414,248 416,242 Z" fill="#2a1212" opacity="0.85"/>

<!-- haunch and body: reared, so the chest rides higher and the belly shows -->
<path d="M268,178 Q296,172 310,190 Q316,208 302,222 Q280,232 264,218 Q256,198 268,178 Z" fill="#1a0808"/>
<path d="M202,178 Q204,152 230,143 Q262,134 290,148 Q312,161 310,188 Q306,212 278,222 Q240,228 214,212 Q198,198 202,178 Z" fill="url(#lairHide6)"/>
<path d="M216,210 Q244,220 278,214 Q276,220 254,224 Q228,223 216,210 Z" fill="#4a1c18" opacity="0.45"/>
<!-- forelegs, raised as he rises, ending in claws -->
<path d="M222,190 Q210,202 202,216 Q206,222 214,220 Q220,206 232,196 Z" fill="#1a0808"/>
<path d="M198,216 Q208,212 218,218 Q216,224 206,224 Q196,222 198,216 Z" fill="#2a1212"/>
<path d="M198,222 Q196,227 193,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
<path d="M206,224 Q205,229 203,231" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
<path d="M214,222 Q215,227 214,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>

<!-- neck, longer and straighter in the rearing pose -->
<!-- one column that widens from the back of the skull into both shoulders -->
<!-- An S-curved neck, ~32 wide at mid-height, flaring into both shoulders
     at the base and running up INSIDE the skull at the top (head covers it). -->
<path d="M222,168 Q230,140 244,118 Q256,98 266,74 L298,98 Q276,114 276,134 Q278,154 304,170 Q262,180 222,168 Z" fill="url(#lairHide6)"/>
<!-- dorsal spines down the back of the neck -->
<path d="M258,92 L244,86 L254,102 Z" fill="#2a1212"/>
<path d="M249,110 L233,106 L244,122 Z" fill="#2a1212"/>
<path d="M240,128 L224,126 L236,141 Z" fill="#2a1212"/>
<path d="M232,146 L217,146 L229,158 Z" fill="#2a1212" opacity="0.9"/>
<!-- throat plates: lit underside sitting ON the front edge of the neck -->
<path d="M292,104 Q276,116 276,134 Q277,150 292,162 Q274,152 270,134 Q270,114 286,102 Z" fill="#5a2420" opacity="0.5"/>
<path d="M277,118 L284,121 M273,130 L281,131 M273,142 L281,141" fill="none" stroke="#1e0a0a" stroke-width="1" opacity="0.6"/>

<!-- ====================================================================
     HEAD, raised and turned so the snout points across the chamber, which
     is what lets the fire actually come out of his mouth.
     ==================================================================== -->
<!-- skull, snout and lower jaw are ONE silhouette; the gape is a notch cut
     into it, hinged at the back of the mouth (286,110), so the jaw cannot
     float free of the skull. -->
<!-- Profile, facing the fire. Wedge skull: domed cranium, long tapering
     snout, open jaw hinged under the eye at (304,99). One silhouette. -->
<!-- far horn, behind the skull -->
<path d="M282,56 Q272,36 264,16 Q284,30 294,52 Z" fill="#1e0a0a"/>
<path d="M262,78 Q260,60 278,53 Q298,48 314,58 Q324,64 332,68 L350,76 Q358,80 357,87 Q355,93 347,94 L306,99 L340,113 Q347,116 344,121 Q339,125 328,123 L306,118 Q290,113 279,105 Q266,95 262,78 Z" fill="url(#lairHideHead6)"/>
<!-- the jaw, OPEN: dark gape with teeth so the breath has somewhere to come from -->
<path d="M347,94 L306,99 L340,113 Q350,104 347,94 Z" fill="#0e0404"/>
<path d="M316,98 L318,104 L321,97 Z M326,97 L328,102 L331,96 Z M336,95 L338,100 L341,95 Z" fill="#e8d8c0" opacity="0.85"/>
<path d="M320,106 L323,101 L325,108 Z M331,110 L334,105 L336,112 Z" fill="#e8d8c0" opacity="0.75"/>
<!-- snout top plane, lighter, so the muzzle reads as projecting -->
<path d="M314,60 Q332,68 350,76 Q356,79 357,84 Q336,78 316,70 Q308,64 314,60 Z" fill="#4a1e1e" opacity="0.55"/>
<!-- lower-jaw underside rim, catching the fire -->
<path d="M306,118 L328,123 Q339,125 344,121 Q338,121 328,120 L308,115 Z" fill="#6a2a20" opacity="0.5"/>
<!-- cheek over the hinge -->
<path d="M278,88 Q294,86 306,99 Q296,108 282,102 Q272,96 278,88 Z" fill="#2a1212" opacity="0.5"/>
<!-- brow ridge -->
<path d="M286,66 Q300,57 316,63 Q302,64 290,71 Z" fill="#2a1212"/>
<!-- near horn, swept back off the crown -->
<path d="M266,68 Q246,48 224,32 Q252,40 280,56 Z" fill="#2a1212"/>
<path d="M262,62 Q246,48 232,38 Q250,44 270,56 Z" fill="#4a2020" opacity="0.45"/>
<!-- small cheek spine behind the jaw -->
<path d="M266,90 L250,94 L264,98 Z" fill="#2a1212"/>

<!-- nostril, flared, glowing with what is coming -->
<path d="M346,79 Q352,77 354,81 Q351,84 346,83 Z" fill="#ff4400" opacity="0.6">
  <animate attributeName="opacity" values="0.4;0.75;0.4" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- Eye: almond, slit, glowing -->
<circle cx="300" cy="72" r="13" fill="#ff2200" opacity="0.2" filter="url(#lairFireGlow6)"/>
<path d="M291,73 Q298,65 308,70 Q300,78 291,73 Z" fill="#ff2200" opacity="0.96">
  <animate attributeName="opacity" values="0.82;1;0.82" dur="2.3s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M299,67 Q301,72 299,77 Q297,72 299,67 Z" fill="#ffaa00" opacity="0.8"/>

<!-- ====================================================================
     THE FIRE. Flame is not a blade. It leaves the jaw narrow and hot, and
     as it travels it BREAKS UP: the outline goes ragged with tongues, the
     colour cools from white through orange to smoke, and each layer is
     translucent so the wall shows through. Three nested plumes, the
     brightest smallest and nearest the mouth.
     ==================================================================== -->
<!-- outer plume: broad, cool, ragged, and very transparent -->
<!-- Leaves the gape as a narrow jet and flares into a billowing, rounded
     front (puffs, not the scalloped points a wing has), hot white at the
     teeth fading to transparent red. A soft blurred halo sits under it. -->
<path d="M338,105 Q360,94 392,84 Q416,72 438,66 Q458,64 462,80 Q476,92 462,104 Q468,120 446,120 Q432,132 410,124 Q388,126 368,118 Q350,113 338,105 Z" fill="#ff5511" opacity="0.35" filter="url(#lairFireGlow6)">
  <animate attributeName="opacity" values="0.25;0.45;0.25" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- outer flame -->
<path d="M338,105 Q356,98 390,87 Q412,76 430,72 Q448,68 452,82 Q464,92 452,102 Q456,116 438,114 Q424,124 406,118 Q386,120 368,115 Q350,111 338,105 Z" fill="url(#lairBreath6)" opacity="0.8">
  <animate attributeName="opacity" values="0.68;0.9;0.68" dur="1.3s" begin="0.15s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- inner flame -->
<path d="M336,105 Q352,99 380,93 Q398,86 410,88 Q420,96 410,104 Q396,112 376,112 Q350,110 336,105 Z" fill="#ffbb44" opacity="0.75">
  <animate attributeName="opacity" values="0.6;0.85;0.6" dur="1.1s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the white-hot jet right at the teeth, where it is still a jet -->
<path d="M334,105 Q346,101 368,99 Q378,97 382,101 Q378,106 366,107 Q346,108 334,105 Z" fill="#fff0b8" opacity="0.85">
  <animate attributeName="opacity" values="0.7;0.95;0.7" dur="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- sparks torn off the flame front and thrown on -->
<circle cx="396" cy="90" r="1.6" fill="#ffcc66" opacity="0.6">
  <animate attributeName="cx" values="396;438;466" dur="1.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="90;66;50" dur="1.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.6;0.3;0" dur="1.4s" repeatCount="indefinite"/>
</circle>
<circle cx="372" cy="102" r="1.3" fill="#ffaa44" opacity="0.55">
  <animate attributeName="cx" values="372;424;458" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="102;74;54" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.55;0.25;0" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
</circle>
<circle cx="386" cy="112" r="1.1" fill="#ff8844" opacity="0.45">
  <animate attributeName="cx" values="386;430;452" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="112;88;72" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.45;0.2;0" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
</circle>
<!-- smoke peeling off the cooling tail of the plume -->
<circle cx="424" cy="96" r="5" fill="#4a3a34" opacity="0.16">
  <animate attributeName="cx" values="424;446;464" dur="3.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="96;74;56" dur="3.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.16;0.08;0" dur="3.4s" repeatCount="indefinite"/>
</circle>
<!-- the wall glowing where the fire washes it -->
<path d="M448,42 Q472,32 492,48 Q490,76 464,88 Q442,74 448,42 Z" fill="#ff6622" opacity="0.11">
  <animate attributeName="opacity" values="0.06;0.17;0.06" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     TORCHES. Teardrop flames, guttering in the draught he has stirred up.
     ==================================================================== -->
<path d="M29,152 L35,152 Q36,152 36,154 L35,170 L29,170 L28,154 Q28,152 29,152 Z" fill="#6a4a20"/>
<path d="M28,152 Q32,149 36,152 Q32,154 28,152 Z" fill="#8a6430" opacity="0.6"/>
<path d="M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z;M32,131 Q43,146 40,156 Q38,163 32,163 Q26,163 24,156 Q21,146 32,131 Z;M32,139 Q40,149 38,156 Q36,163 32,163 Q28,163 26,156 Q24,149 32,139 Z;M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z" dur="1.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z;M32,140 Q38,150 37,157 Q35,161 32,161 Q29,161 27,157 Q26,150 32,140 Z;M32,146 Q36,152 35,157 Q34,161 32,161 Q30,161 29,157 Q28,152 32,146 Z;M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z" dur="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M465,152 L471,152 Q472,152 472,154 L471,170 L465,170 L464,154 Q464,152 465,152 Z" fill="#6a4a20"/>
<path d="M464,152 Q468,149 472,152 Q468,154 464,152 Z" fill="#8a6430" opacity="0.6"/>
<path d="M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z;M468,140 Q476,149 474,156 Q472,163 468,163 Q464,163 462,156 Q460,149 468,140 Z;M468,131 Q479,146 476,156 Q474,163 468,163 Q462,163 460,156 Q457,146 468,131 Z;M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M22,140 Q32,131 42,140 Q44,158 32,168 Q20,158 22,140 Z" fill="#ff6622" opacity="0.05"/>
<path d="M458,140 Q468,131 478,140 Q480,158 468,168 Q456,158 458,140 Z" fill="#ff6622" opacity="0.05"/>

<!-- Lava glow banking up under the floor -->
<path d="M0,260 L0,254 Q120,246 250,249 Q380,252 500,254 L500,260 Z" fill="#ff2200" opacity="0.08" filter="url(#lairFireGlow6)">
  <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`;

// Scene 7: Puzzle — "Riches make one strangely austerer (8)" TREASURE on scorched scroll
STORY_SCENES['lair_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow3" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.12"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll3)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow3)"/>

<!-- ====================================================================
     THE SEARED WALL. The FINAL clue is not on a scroll: he sears it straight into the rock
     wall with a thin line of fire. So the card is a slab of the cavern
     wall, the lettering glows ember-hot, and the air above it shimmers.
     ==================================================================== -->
<defs>
  <linearGradient id="lairRock7" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#3a221c"/><stop offset="50%" stop-color="#2a1612"/><stop offset="100%" stop-color="#1a0c0a"/>
  </linearGradient>
  <filter id="lairEmber7" x="-30%" y="-60%" width="160%" height="220%"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="lairShimmer7" x="-10%" y="-40%" width="120%" height="180%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.12" numOctaves="1" seed="7" result="n">
      <animate attributeName="baseFrequency" values="0.02 0.12;0.024 0.16;0.02 0.12" keyTimes="0;0.5;1" dur="3.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="3"/>
    <feGaussianBlur stdDeviation="1.6"/>
  </filter>
</defs>
<!-- the slab: a faceted face of the wall, catching the glow of the burn -->
<path d="M84,50 Q250,40 416,50 Q426,136 418,230 Q250,240 82,230 Q74,136 84,50 Z" fill="#0a0303" opacity="0.6"/>
<path d="M92,48 L170,40 L248,46 L330,38 L410,50 L422,110 L414,170 L420,222 L330,230 L250,224 L160,232 L84,222 L90,160 L78,104 Z" fill="url(#lairRock7)"/>
<!-- lit upper-left facet, shadowed lower bevel: light comes from the upper left -->
<path d="M92,48 L170,40 L248,46 L330,38 L326,50 L248,58 L170,52 L102,60 L90,104 L78,104 Z" fill="#4a2a22" opacity="0.4"/>
<path d="M420,222 L330,230 L250,224 L160,232 L84,222 L96,212 L160,220 L250,212 L330,218 L408,210 L414,170 L422,110 Z" fill="#0e0504" opacity="0.5"/>
<!-- cracks in the rock -->
<path d="M110,64 L126,90 L120,112 M392,58 L380,86 L388,104 M404,182 L384,198 L390,216 M100,190 L118,204" fill="none" stroke="#120606" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
<path d="M111,66 L127,91 M393,60 L381,87" fill="none" stroke="#5a3428" stroke-width="0.6" opacity="0.35"/>
<!-- soot blown back across the face where the fire traced the words -->
<ellipse cx="250" cy="138" rx="138" ry="36" fill="#0a0302" opacity="0.4" filter="url(#lairEmber7)"/>
<!-- the rest of the heat still in the stone, under the lettering -->
<ellipse cx="250" cy="140" rx="112" ry="24" fill="#ff5a1a" opacity="0.1" filter="url(#lairEmber7)">
  <animate attributeName="opacity" values="0.07;0.13;0.07" keyTimes="0;0.5;1" dur="3.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>

<!-- Header, rule, and the clue. Text unchanged; seared in ember. A blurred
     copy under each clue line is the glow, wobbled by the heat shimmer;
     the crisp line on top stays perfectly legible. -->
<text x="250" y="85" text-anchor="middle" fill="#d8743a" font-family="Georgia,serif" font-size="10" opacity="0.75">THE DRAGON'S FINAL CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#ff7a2a" stroke-width="0.9" opacity="0.5"/>
<g filter="url(#lairShimmer7)" opacity="0.7">
  <text x="250" y="130" text-anchor="middle" fill="#ff5a1a" font-family="Georgia,serif" font-size="14" font-weight="bold" stroke="#ff5a1a" stroke-width="2.4">"Riches make one</text>
  <text x="250" y="155" text-anchor="middle" fill="#ff5a1a" font-family="Georgia,serif" font-size="14" font-weight="bold" stroke="#ff5a1a" stroke-width="2.4">strangely austerer (8)"</text>
  <animate attributeName="opacity" values="0.55;0.8;0.55" keyTimes="0;0.5;1" dur="2.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</g>
<text x="250" y="130" text-anchor="middle" fill="#ffb060" font-family="Georgia,serif" font-size="14" font-weight="bold">"Riches make one</text>
<text x="250" y="155" text-anchor="middle" fill="#ffb060" font-family="Georgia,serif" font-size="14" font-weight="bold">strangely austerer (8)"</text>
<text x="250" y="195" text-anchor="middle" fill="#c8743a" font-family="Georgia,serif" font-size="8" opacity="0.65">Solve the final clue</text>
<!-- heat rising off the burn: faint wavering bands that drift up and fade -->
<g opacity="0.5">
  <path d="M170,112 Q190,106 210,112 Q230,118 250,112 Q270,106 290,112 Q310,118 330,112" fill="none" stroke="#ff9a50" stroke-width="1.2" opacity="0" stroke-linecap="round">
    <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;0,-26" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.6 1"/>
    <animate attributeName="opacity" values="0;0.35;0" keyTimes="0;0.35;1" dur="4.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M190,138 Q206,133 222,138 Q238,143 254,138 Q270,133 286,138 Q302,143 314,138" fill="none" stroke="#ff9a50" stroke-width="1" opacity="0" stroke-linecap="round">
    <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;0,-30" dur="5.1s" begin="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0 0.6 1"/>
    <animate attributeName="opacity" values="0;0.3;0" keyTimes="0;0.35;1" dur="5.1s" begin="1.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M40,126 Q46,120 54,125 Q47,132 40,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M46,122 Q48,126 46,130 Q44,126 46,122 Z" fill="#ffaa00" opacity="0.55"/>
<path d="M446,126 Q452,120 460,125 Q453,132 446,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M452,122 Q454,126 452,130 Q450,126 452,122 Z" fill="#ffaa00" opacity="0.55"/>

<!-- a second, further pair: a hint of how big he actually is -->
<path d="M22,128 Q27,123 34,127 Q28,133 22,128 Z" fill="#ff2200" opacity="0.32">
  <animate attributeName="opacity" values="0.2;0.44;0.2" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M466,128 Q471,123 478,127 Q472,133 466,128 Z" fill="#ff2200" opacity="0.32">
  <animate attributeName="opacity" values="0.2;0.44;0.2" dur="3.5s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- the hoard at the foot of the scroll: shared lairHoard() gold -->
` + lairHoard('lairH7', {
  seed: 23,
  spill: [[60, 440, 252, 259, 14]],
  heaps: [[30, 262, 44, 23], [472, 262, 40, 22], [122, 266, 50, 12], [386, 266, 52, 12]],
  goblets: [[60, 258, 0.8, -6], [442, 258, 0.75, 8]]
}) + `

<!-- claw scratches gouged in the floor beneath the scroll -->
<path d="M180,238 Q190,244 200,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M190,238 Q200,244 210,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M200,238 Q210,244 220,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M290,238 Q300,244 310,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M300,238 Q310,244 320,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M310,238 Q320,244 330,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="250" r="1.5" fill="#ff8844" opacity="0.32">
  <animate attributeName="cy" values="250;214;178" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.32;0.14;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 8: Dragon shows respect. The same chamber and the same dragon, but
// he lowers his head and lets out a long slow breath, and the cavern glows
// brighter around him.
STORY_SCENES['lair_8'] = lairChamber('8', { wings: 'folded', neck: 28, head: 22, jaw: 'closed', eye: 'red', lid: true, breath: true }, true);

// Scene 9: Complete — dragon bows, exit opens, warm golden glow
STORY_SCENES['lair_9'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairVictory" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="40%" stop-color="#2a1010"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairWarmGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#e0702a" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lairExitLight" cx="85%" cy="50%" r="25%">
    <stop offset="0%" stop-color="#ffddaa" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffddaa" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairScale9" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#e88a48"/><stop offset="45%" stop-color="#b8482a"/><stop offset="100%" stop-color="#6a2416"/>
  </linearGradient>
  <linearGradient id="lairExitMouth" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2a1410"/><stop offset="55%" stop-color="#8a6a3a"/><stop offset="100%" stop-color="#ffddaa"/>
  </linearGradient>
  <filter id="lairFireGlow9" x="-70%" y="-70%" width="240%" height="240%">
    <feGaussianBlur stdDeviation="2.6"/>
  </filter>
  <radialGradient id="lairAura9" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairTorch9" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="#ff7a18"/><stop offset="55%" stop-color="#ffc24a"/><stop offset="100%" stop-color="#ffe9a8"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairVictory)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairWarmGlow)"/>

<!-- Cave walls: faceted planes -->
<path d="M0,0 L18,32 L4,72 L20,112 L6,154 L22,196 L8,236 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L18,32 L4,72 L20,112 L6,154 L10,160 L0,116 L14,74 L0,34 Z" fill="#3e221c" opacity="0.45"/>
<path d="M500,0 L484,32 L496,72 L480,112 L494,154 L478,196 L490,236 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L484,32 L496,72 L480,112 L494,154 L490,160 L500,116 L486,74 L500,34 Z" fill="#3e221c" opacity="0.34"/>
<!-- stalactites. A cave ceiling has teeth, and they are what stops the top
     of the frame reading as a lid. Longer at the sides, shorter at centre. -->
<path d="M52,0 L60,0 L57,34 Z" fill="#3a2018"/>
<path d="M92,0 L104,0 L99,54 Z" fill="#42251c"/>
<path d="M148,0 L156,0 L152,26 Z" fill="#3a2018"/>
<path d="M318,0 L328,0 L323,40 Z" fill="#42251c"/>
<path d="M372,0 L380,0 L376,22 Z" fill="#3a2018"/>
<path d="M414,0 L426,0 L420,48 Z" fill="#42251c"/>
<path d="M94,0 L100,0 L98,40 Z" fill="#3e221c" opacity="0.3"/>
<path d="M416,0 L421,0 L419,36 Z" fill="#3e221c" opacity="0.28"/>

<!-- ====================================================================
     THE EXIT. A hole in rock reads by its RIM: the far wall of the tunnel
     is lit by what is beyond it, the near wall is a shadowed lip on the
     opposite side, and the opening is not a smooth ellipse but a broken
     rock arch. The light spills out of it onto the floor.
     ==================================================================== -->
<path d="M420,194 L428,170 L420,146 L432,120 L426,104 L442,88 L458,82 L472,88 L468,100 L484,106 L480,122 L494,142 L488,162 L498,186 L490,198 L462,202 L438,198 Z" fill="#150806"/>
<path d="M430,188 L437,168 L430,148 L440,124 L436,110 L448,96 L460,91 L470,97 L466,108 L479,113 L476,127 L487,145 L482,164 L490,184 L484,193 L460,196 L440,192 Z" fill="url(#lairExitMouth)" opacity="0.75">
  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- shadowed NEAR lip on the left of the hole, lit FAR wall on the right -->
<path d="M420,194 L428,170 L420,146 L432,120 L426,104 L442,88 L458,82 L448,97 L436,110 L440,124 L430,148 L437,168 L430,188 L438,198 Z" fill="#0e0504" opacity="0.85"/>
<path d="M484,106 L480,122 L494,142 L488,162 L498,186 L490,198 L484,193 L490,184 L482,164 L487,145 L476,127 L479,113 L470,97 L472,88 Z" fill="#c9a878" opacity="0.35"/>
<!-- broken teeth of rock round the arch -->
<path d="M436,110 L444,102 L448,114 Z" fill="#2a1814"/>
<path d="M470,90 L478,96 L468,100 Z" fill="#2a1814"/>
<path d="M430,158 L438,152 L440,164 Z" fill="#2a1814" opacity="0.8"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairExitLight)"/>
<!-- the light lying on the floor in front of the opening -->
<path d="M398,240 Q436,224 476,222 Q500,222 500,232 Q464,244 424,250 Q400,250 398,240 Z" fill="#ffddaa" opacity="0.09"/>

<!-- ====================================================================
     THE FLOOR AND THE HOARD. A hoard is a heap: it mounds, coins tumble
     down its flanks, and the gems, goblets and the chest sit IN it rather
     than on top. Shared lairHoard() floor, same gold as the chamber.
     ==================================================================== -->
<path d="M0,222 Q60,214 132,218 Q214,224 280,216 Q356,209 428,217 Q468,221 500,216 L500,260 L0,260 Z" fill="#1a0a08"/>
` + lairHoard('lairH9', {
  seed: 29,
  spill: [[30, 480, 228, 256, 44]],
  heaps: [[252, 247, 190, 42], [58, 238, 34, 12], [156, 246, 34, 10], [384, 240, 40, 13]],
  chest: { x: 100, y: 242, scale: 0.55 },
  goblets: [[352, 244, 0.9, 6], [196, 250, 0.8, -6]]
}) + `

<!-- ====================================================================
     TORCHES. A matched pair, as in the chamber scenes. The flame is a
     teardrop, not a circle, and each one lights the wall behind it: if a
     light source exists it has to cast, or it reads as a sticker.
     ==================================================================== -->
<g>
  <ellipse cx="46" cy="96" rx="30" ry="34" fill="#ff9a30" opacity="0.07"/>
  <path d="M30,104 L46,101 L47,105 L31,108 Z" fill="#3a2418"/>
  <path d="M44,100 L52,99 L53,106 L45,107 Z" fill="#241410"/>
  <path d="M48,98 Q42,88 48,78 Q54,88 48,98 Z" fill="url(#lairTorch9)">
    <animate attributeName="opacity" values="0.72;1;0.72" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M48,96 Q45,90 48,84 Q51,90 48,96 Z" fill="#ffe9a8" opacity="0.8"/>
</g>
<g>
  <ellipse cx="366" cy="104" rx="28" ry="32" fill="#ff9a30" opacity="0.06"/>
  <path d="M382,112 L366,109 L365,113 L381,116 Z" fill="#3a2418"/>
  <path d="M368,108 L360,107 L359,114 L367,115 Z" fill="#241410"/>
  <path d="M364,106 Q358,96 364,87 Q370,96 364,106 Z" fill="url(#lairTorch9)">
    <animate attributeName="opacity" values="1;0.7;1" dur="3.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M364,104 Q361,98 364,92 Q367,98 364,104 Z" fill="#ffe9a8" opacity="0.75"/>
</g>

<!-- ====================================================================
     LIAM, AT REST. The shared lairLiam() dragon, the same animal as the
     chamber and the rearing scene: wings furled, head lowered toward you,
     red eyes, calm under half-lowered lids. One forefoot reaches out holding
     the Dragon Scale he has plucked from his flank, offered to you.
     ==================================================================== -->
<circle cx="250" cy="182" r="104" fill="url(#lairAura9)"/>
` + lairLiam('lairL9', {
  x: -14, y: 6, wings: 'folded', neck: 20, head: 16, jaw: 'closed', eye: 'red', lid: true,
  leg: 'offer', heldAt: [345, 187],
  // THE DRAGON SCALE: a red-bronze teardrop, still warm, glowing in his claw
  held: '<circle r="14" fill="#ffaa44" opacity="0.32" filter="url(#lairFireGlow9)">' +
    '<animate attributeName="opacity" values="0.22;0.42;0.22" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>' +
    '<g transform="rotate(-14)">' +
    '<path d="M0,-10 Q8,-10 8.5,-1 Q8.5,6 0,12 Q-8.5,6 -8.5,-1 Q-8,-10 0,-10 Z" fill="url(#lairScale9)" stroke="#4a1a10" stroke-width="0.9"/>' +
    '<path d="M0,-8 L0,9" fill="none" stroke="#ffb070" stroke-width="0.8" opacity="0.4"/>' +
    '<path d="M-5,-6 Q-2,-8.5 2,-7.5 Q-2,-4.5 -4.5,0 Z" fill="#ffd8a0" opacity="0.55"/>' +
    '<path d="M3,-3 L4,-5 L5,-3 L4,-1 Z" fill="#fff0c8" opacity="0">' +
    '<animate attributeName="opacity" values="0;0.9;0" keyTimes="0;0.5;1" dur="2.7s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path></g>'
}) + `

<!-- Golden motes drifting up through the warm air -->
<circle cx="150" cy="100" r="2" fill="#ffd700" opacity="0.4">
  <animate attributeName="cy" values="100;80;60" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.6;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="85" r="2.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="85;60;35" dur="6s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="6s" begin="1s" repeatCount="indefinite"/>
</circle>
<circle cx="350" cy="95" r="2" fill="#ffd700" opacity="0.35">
  <animate attributeName="cy" values="95;70;45" dur="4.6s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.55;0" dur="4.6s" begin="2s" repeatCount="indefinite"/>
</circle>
<circle cx="200" cy="110" r="1.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="110;85;60" dur="5.6s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="5.6s" begin="0.5s" repeatCount="indefinite"/>
</circle>
<circle cx="300" cy="105" r="2" fill="#ffcc00" opacity="0.25">
  <animate attributeName="cy" values="105;78;50" dur="6.4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.25;0.45;0" dur="6.4s" begin="1.5s" repeatCount="indefinite"/>
</circle>

</svg>`;
