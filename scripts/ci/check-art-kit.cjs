#!/usr/bin/env node
// The art kit's contract, checked without a browser.
//
// Every prop is rendered in every VARIANT x every depth x every biome and the
// output must be:
//   * produced without throwing, with no NaN / undefined leaking into markup
//   * well-formed XML (balanced tags, quoted attributes): innerHTML would
//     silently repair a stray </g>, and nothing else would tell us
//   * id-safe: every id it defines starts with the idp it was given, and every
//     url(#...) it uses resolves inside the same output
//   * grounded: a contact shadow unless shadow:false (or a hanging lantern)
//   * free of opaque pure black/white and of miscounted keySplines
// and its anchors must exist with finite numbers. The embedded token block must
// match design/tokens.json, and the mountain trail must be ONE continuous line
// from trailBase to summit (the defect that started this kit).
//
//   node scripts/ci/check-art-kit.cjs
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '../..');
const { inSync } = require('../build-art-tokens.cjs');

const problems = [];
const fail = (m) => problems.push(m);

if (!inSync()) fail('scenes/art-kit.js token block is stale vs design/tokens.json: run node scripts/build-art-tokens.cjs');

// Load the kit the way the browser does: a plain script in a shared global scope.
const ctx = vm.createContext({});
try { vm.runInContext(fs.readFileSync(path.join(ROOT, 'scenes', 'art-kit.js'), 'utf8'), ctx, { filename: 'art-kit.js' }); }
catch (e) { console.error('art-kit.js does not evaluate: ' + e.message); process.exit(1); }
const A = ctx.bcArt;
if (!A || typeof A.prop !== 'function') { console.error('art-kit.js does not expose bcArt.prop'); process.exit(1); }

// Minimal well-formedness check: every tag parses, nesting balances, & is an entity.
function xmlProblems(s) {
  const out = [], stack = [];
  const re = /<(\/?)([A-Za-z][\w:.-]*)((?:\s+[\w:.-]+="[^"<]*")*)\s*(\/?)>|<!--[\s\S]*?-->|<|&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);)/gi;
  let m;
  while ((m = re.exec(s))) {
    if (m[0] === '<') { out.push('unparseable tag at ' + m.index + ': ' + s.slice(m.index, m.index + 40)); continue; }
    if (m[0][0] === '&') { out.push('bare & at ' + m.index); continue; }
    if (m[0].startsWith('<!--')) { if (/--/.test(m[0].slice(4, -3))) out.push('double hyphen in comment'); continue; }
    const [, close, name, , self] = m;
    if (self) continue;
    if (close) { const top = stack.pop(); if (top !== name) { out.push('</' + name + '> closes <' + top + '>'); break; } }
    else stack.push(name);
  }
  if (stack.length) out.push('unclosed: ' + stack.join(' > '));
  return out;
}

function contract(label, svg, idp, wantShadow) {
  if (typeof svg !== 'string' || !svg) return fail(label + ': no output');
  if (/NaN|undefined|Infinity/.test(svg)) fail(label + ': NaN/undefined/Infinity in markup');
  xmlProblems(svg).forEach((p) => fail(label + ': ' + p));
  const ids = [...svg.matchAll(/\bid="([^"]+)"/g)].map((x) => x[1]);
  ids.forEach((id) => { if (!idp || !id.startsWith(idp + '-')) fail(label + ': id "' + id + '" is not prefixed with idp "' + idp + '"'); });
  if (new Set(ids).size !== ids.length) fail(label + ': duplicate id inside one prop');
  [...svg.matchAll(/url\(#([^)]+)\)/g)].forEach((u) => { if (!ids.includes(u[1])) fail(label + ': url(#' + u[1] + ') does not resolve'); });
  if (/data-idp-missing/.test(svg)) fail(label + ': defines ids but got no idp');
  if (wantShadow && !/data-contact-shadow/.test(svg)) fail(label + ': no contact shadow');
  const bw = /(fill|stroke|stop-color)="(#000|#000000|#fff|#ffffff|black|white)"/i.exec(svg);
  if (bw) fail(label + ': opaque pure ' + bw[2]);
  for (const a of svg.matchAll(/<animate(?:Transform)?\b[^>]*>/g)) {
    const kt = /keyTimes="([^"]*)"/.exec(a[0]), ks = /keySplines="([^"]*)"/.exec(a[0]);
    if (!/calcMode="spline"/.test(a[0]) && /repeatCount="indefinite"/.test(a[0])) fail(label + ': linear (un-eased) loop');
    if (kt && ks && ks[1].split(';').length !== kt[1].split(';').length - 1) fail(label + ': keySplines/keyTimes count mismatch');
  }
}

function finiteAnchor(label, k, a) {
  if (Array.isArray(a)) return a.forEach((b) => finiteAnchor(label, k, b));
  const nums = 'cx' in a ? [a.cx, a.cy, a.rx, a.ry] : [a.x, a.y];
  if (!nums.every(Number.isFinite)) fail(label + ': anchor ' + k + ' is not finite');
}

const REQUIRED_ANCHORS = {
  chest: ['inside', 'top', 'hinge', 'lock', 'lidTop'], 'table-round': ['top', 'floor'], 'table-square': ['top', 'floor'],
  'cup-saucer': ['rim', 'top'], newspaper: ['top'], lantern: ['handle', 'light', 'top'], crate: ['top'], barrel: ['top'],
  rock: ['top'], pine: ['tip', 'top', 'base'], fern: ['top'], 'mushroom-glow': ['top'], observatory: ['top', 'door'],
  mountain: ['summit', 'trailBase', 'turns', 'top']
};

let renders = 0;
const DEPTHS = ['fg', 'mid', 'bg', 'far'];
for (const name of Object.keys(REQUIRED_ANCHORS)) if (!A.PROPS.includes(name)) fail('missing prop: ' + name);
for (const name of A.PROPS) {
  if (!A.VARIANTS[name]) { fail(name + ': no VARIANTS entry'); continue; }
  for (const variant of A.VARIANTS[name]) for (const depth of DEPTHS) for (const biome of A.BIOMES) for (const flip of [false, true]) {
    const idp = 't' + renders;
    const o = Object.assign({ x: 120, y: 200, scale: 1.3, depth, biome, flip, idp }, variant);
    const label = `${name} ${JSON.stringify(variant)} ${depth}/${biome}${flip ? '/flip' : ''}`;
    let svg, anc;
    try { svg = A.prop(name, o); anc = A.anchors(name, o); } catch (e) { fail(label + ': throws ' + e.message); continue; }
    renders++;
    contract(label, svg, idp, !(name === 'lantern' && variant.hang));
    for (const k of REQUIRED_ANCHORS[name] || []) {
      if (!anc[k]) fail(label + ': anchor "' + k + '" missing');
      else finiteAnchor(label, k, anc[k]);
    }
    if (!svg.startsWith('<g data-art-prop="' + name + '"')) fail(label + ': output is not one data-art-prop group');
  }
  // shadow:false really drops it
  if (/data-contact-shadow/.test(A.prop(name, { idp: 'ns', shadow: false }))) fail(name + ': shadow:false still draws a shadow');
}

// Seating: a cup seated on a table top lands inside the top surface.
{
  const top = A.anchors('table-round', { x: 200, y: 230, scale: 1.2 }).top;
  const cup = A.on(top, 'cup-saucer', { u: 0.5, v: -0.3 });
  const m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(cup);
  if (!m) fail('on(): seated prop has no placement');
  else {
    const dx = (+m[1] - top.cx) / top.rx, dy = (+m[2] - top.cy) / top.ry;
    if (dx * dx + dy * dy > 1) fail('on(): seated cup lands outside the table top ellipse');
  }
  if (!/data-seated="top"/.test(cup)) fail('on(): seated prop is not marked data-seated');
  contract('on(string)', A.on(top, '<g/>', {}), null, false);
}

// Mountain trail: one continuous line, trailBase -> summit, narrowing upward.
for (const variant of A.VARIANTS.mountain) {
  const o = Object.assign({ x: 250, y: 230 }, variant);
  const svg = A.prop('mountain', o), anc = A.anchors('mountain', o);
  const top = /<g data-trail="1"[^>]*><g stroke="[^"]+">([\s\S]*?)<\/g><g stroke/.exec(svg);
  if (!top) { fail('mountain ' + JSON.stringify(variant) + ': no trail group'); continue; }
  const segs = [...top[1].matchAll(/d="M([-\d.]+),([-\d.]+) L([-\d.]+),([-\d.]+)" stroke-width="([\d.]+)"/g)].map((m) => m.slice(1).map(Number));
  for (let i = 1; i < segs.length; i++) {
    if (Math.hypot(segs[i][0] - segs[i - 1][2], segs[i][1] - segs[i - 1][3]) > 0.02) { fail('mountain trail breaks at segment ' + i); break; }
    if (segs[i][4] > segs[i - 1][4] + 1e-6) { fail('mountain trail widens going up at segment ' + i); break; }
  }
  if (segs.length < 10) { fail('mountain trail: could not read its segments'); continue; }
  const first = segs[0], last = segs[segs.length - 1];
  // The trail is in local units; anchors are scene units with scale 1 and origin (250,230).
  if (Math.hypot(first[0] + 250 - anc.trailBase.x, first[1] + 230 - anc.trailBase.y) > 0.5) fail('mountain trail does not start at trailBase');
  if (Math.hypot(last[2] + 250 - anc.summit.x, last[3] + 230 - anc.summit.y) > 3) fail('mountain trail does not reach the summit');
}

// Environment helpers.
for (const b of A.BIOMES) {
  contract('sky ' + b, A.sky(b, 'sk-' + b), 'sk-' + b, false);
  contract('ground ' + b, A.ground(b, 'gr-' + b, 170), 'gr-' + b, false);
}
const hazed = A.layer('far', '<rect fill="#ff0000"/>', 'forest');
if (/#ff0000/.test(hazed)) fail('layer(): far layer did not haze its colours');
if (A.layer('fg', '<rect fill="#ff0000"/>', 'forest').indexOf('#ff0000') < 0) fail('layer(): fg must not change colours');

// Colour helpers keep their contract.
const t = A.tone('#3a8a3a');
if (!['base', 'shade', 'hi', 'ink'].every((k) => /^#[0-9a-f]{6}$/.test(t[k]))) fail('tone() does not return four hex colours');
const lum = (h) => { const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
if (!(lum(t.ink) < lum(t.shade) && lum(t.shade) < lum(t.base) && lum(t.base) < lum(t.hi))) fail('tone(): expected ink < shade < base < hi in luminance');

if (problems.length) {
  problems.slice(0, 40).forEach((p) => console.log('::error::art-kit: ' + p));
  if (problems.length > 40) console.log('... and ' + (problems.length - 40) + ' more');
  console.log('Art kit: FAILED, ' + problems.length + ' problem(s).');
  process.exit(1);
}
console.log('Art kit OK: ' + A.PROPS.length + ' props, ' + renders + ' renders (variants x depths x biomes x flip), anchors, trail continuity, tokens in sync.');
