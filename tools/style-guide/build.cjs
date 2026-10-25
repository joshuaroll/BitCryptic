#!/usr/bin/env node
// Living style guide for the art kit: palette, tone ramps, the outline/depth
// ladder, every prop in every variant with its anchors drawn, and the approved
// cast at reference scale beside the props. Built FROM the kit, so it cannot
// drift from what scenes actually draw.
//
//   node tools/style-guide/build.cjs [OUT.html] [--png OUT.png]
//
// Default OUT is the session scratchpad, or pass design/style-guide.html. The
// guide holds no scene strings and no answers, so writing it into the repo is
// safe. --png renders the page with playwright so you can LOOK at it.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '../..');
const DEFAULT_OUT = 'C:\\Users\\Joshua\\AppData\\Local\\Temp\\claude\\D--AntiGravity\\6cfa405c-11d4-418b-9464-4aad6c38aa7f\\scratchpad\\style-guide.html';

const args = process.argv.slice(2);
const pngAt = args.indexOf('--png');
const png = pngAt >= 0 ? args[pngAt + 1] : null;
// pngAt is -1 without --png; guard it, or i !== 0 silently drops the output path argument.
const out = args.filter((a, i) => a !== '--png' && (pngAt < 0 || i !== pngAt + 1))[0] || DEFAULT_OUT;

const ctx = vm.createContext({ STORY_SCENES: {} });
for (const f of ['approved-cast.js', 'characters.js', 'art-kit.js'])
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'scenes', f), 'utf8'), ctx, { filename: f });
const A = ctx.bcArt, T = A.TOKENS, place = ctx.bcApprovedPlace, mission = ctx.bcMissionPlace;
const tok = JSON.parse(fs.readFileSync(path.join(ROOT, 'design', 'tokens.json'), 'utf8'));
const cast = Object.fromEntries(Object.entries(tok.scale.cast).filter(([k]) => k[0] !== '$').map(([k, v]) => [k, v.$value]));
const REF = tok.scale.reference.$value;

let uid = 0;
const id = () => 'sg' + (++uid);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const MINT = T.palette.brand.mint, CORAL = T.palette.brand.coral, AMBER = T.palette.brand.amber;

// The biome each prop is shown in: the one it was built to fix.
const HOME = { chest: 'cove', 'table-round': 'cafe', 'table-square': 'cafe', 'cup-saucer': 'cafe', newspaper: 'cafe',
  lantern: 'docks', crate: 'docks', barrel: 'docks', rock: 'forest', pine: 'forest', fern: 'forest',
  'mushroom-glow': 'forest', observatory: 'observatory', mountain: 'adventure' };
// Cell size and display zoom per prop. Small props are zoomed so they can be judged;
// the cast row below shows everything at true scale.
const CELL = { mountain: [330, 250, 1], observatory: [120, 110, 2], pine: [120, 150, 1], 'table-round': [130, 120, 1.2],
  'table-square': [130, 120, 1.2], chest: [130, 120, 1.3], lantern: [90, 110, 2], 'cup-saucer': [90, 80, 4],
  newspaper: [100, 70, 3], crate: [90, 90, 2], barrel: [90, 90, 2], rock: [100, 70, 1.6], fern: [100, 80, 2], 'mushroom-glow': [100, 80, 3] };

function checker(w, h, floorY, biome) {
  const p = A.palette(biome), pid = id();
  return `<defs><pattern id="${pid}" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="${p.groundShade}"/><rect width="8" height="8" fill="${A.mix(p.groundShade, p.ground, 0.5)}"/><rect x="8" y="8" width="8" height="8" fill="${A.mix(p.groundShade, p.ground, 0.5)}"/></pattern></defs>` +
    `<rect width="${w}" height="${floorY}" fill="${A.mix(p.skyBottom, T.palette.brand.slate, 0.4)}"/><rect y="${floorY}" width="${w}" height="${h - floorY}" fill="url(#${pid})"/>` +
    `<line x1="0" y1="${floorY}" x2="${w}" y2="${floorY}" stroke="${T.palette.brand.border}" stroke-width="0.6"/>`;
}

function drawAnchors(anc, sw) {
  let s = '';
  const one = (a, label) => {
    if ('cx' in a) s += `<ellipse cx="${a.cx}" cy="${a.cy}" rx="${a.rx}" ry="${Math.max(0.4, a.ry)}" fill="none" stroke="${MINT}" stroke-width="${sw}" stroke-dasharray="${sw * 3} ${sw * 2}"/>` +
      `<text x="${a.cx + a.rx + sw * 3}" y="${a.cy}" font-size="${sw * 9}" fill="${MINT}" font-family="JetBrains Mono, monospace">${esc(label)}</text>`;
    else s += `<path d="M${a.x - sw * 3},${a.y} L${a.x + sw * 3},${a.y} M${a.x},${a.y - sw * 3} L${a.x},${a.y + sw * 3}" stroke="${CORAL}" stroke-width="${sw}"/>` +
      `<text x="${a.x + sw * 4}" y="${a.y - sw * 2}" font-size="${sw * 9}" fill="${CORAL}" font-family="JetBrains Mono, monospace">${esc(label)}</text>`;
  };
  for (const [k, a] of Object.entries(anc)) {
    if (Array.isArray(a)) a.forEach((b, i) => one(b, i ? '' : k));
    else one(a, k);
  }
  return s;
}

function propCell(name, variant) {
  const [w, h, z] = CELL[name], biome = HOME[name], floorY = h - 18;
  // Zoom through the prop's own scale, so the outline stays its true on-screen width.
  const o = Object.assign({ x: w / 2, y: variant.hang ? 14 : floorY, scale: z, biome, idp: id() }, variant);
  const svg = A.prop(name, o), anc = A.anchors(name, o);
  const label = Object.keys(variant).length ? JSON.stringify(variant).replace(/"/g, '') : 'default';
  return `<figure class="cell"><svg viewBox="0 0 ${w} ${h}" width="${w * 1.4}" height="${h * 1.4}" xmlns="http://www.w3.org/2000/svg">` +
    checker(w, h, floorY - 22, biome) + svg + drawAnchors(anc, 0.5) + `</svg><figcaption>${esc(label)}</figcaption></figure>`;
}

function swatch(hex, label) {
  return `<div class="sw"><span style="background:${hex}"></span><b>${esc(label)}</b><i>${hex}</i></div>`;
}

let html = '';
// 1. palette
html += '<section><h2>Palette</h2><p>Every biome defines the same roles, so a prop asks for <code>wood</code> or <code>foliage</code> and gets that biome\'s colour. Source: <code>design/tokens.json</code>.</p>';
for (const g of ['brand', 'shared'].concat(A.BIOMES)) {
  html += `<div class="row"><h3>${g}</h3><div class="sws">` + Object.entries(T.palette[g]).map(([k, v]) => swatch(v, k)).join('') + '</div></div>';
}
html += '</section>';

// 2. tone ramps
html += '<section><h2>Tone ramps</h2><p>Croc treatment: flat <b>base</b>, one <b>shade</b> band (toward ink), one <b>hi</b> (toward warm light), outline in <b>ink</b> (the base darkened, never flat black).</p><div class="ramps">';
for (const b of A.BIOMES) {
  const p = A.palette(b);
  html += `<div class="ramp"><h3>${b}</h3>` + ['wood', 'stone', 'foliage', 'metal', 'cloth'].map(r => {
    const t = A.tone(p[r]);
    return `<div class="tr"><em>${r}</em>${['ink', 'shade', 'base', 'hi'].map(k => `<span title="${k} ${t[k]}" style="background:${t[k]}"></span>`).join('')}</div>`;
  }).join('') + '</div>';
}
html += '</div></section>';

// 3. outline / depth ladder
html += '<section><h2>Outline and depth ladder</h2><p>Same props, four planes. Deeper planes veil toward the biome haze and drop the outline. Outline widths (scene units): ' +
  Object.entries(T.outline.width).map(([k, v]) => `${k} ${v}`).join(' · ') + '. In the cafe the haze is dark, so distance darkens.</p>';
for (const b of ['forest', 'cafe', 'adventure']) {
  let s = checker(500, 150, 128, b);
  ['far', 'bg', 'mid', 'fg'].forEach((d, i) => {
    const x = 70 + i * 120;
    if (b === 'cafe') {
      s += A.prop('barrel', { x: x - 22, y: 128, depth: d, biome: b, scale: 1.4 });
      s += A.prop('crate', { x: x + 26, y: 128, depth: d, biome: b, scale: 1.2 });
    } else {
      s += A.prop('pine', { x: x - 20, y: 128, depth: d, biome: b, h: 100 });
      s += A.prop('rock', { x: x + 22, y: 128, depth: d, biome: b, size: 36 });
    }
    s += `<text x="${x}" y="144" text-anchor="middle" font-size="10" fill="${AMBER}" font-family="JetBrains Mono, monospace">${d}</text>`;
  });
  html += `<div class="ladder"><h3>${b}</h3><svg viewBox="0 0 500 150" width="750" height="225" xmlns="http://www.w3.org/2000/svg">${s}</svg></div>`;
}
html += '</section>';

// 4. props
html += '<section><h2>Props</h2><p>Every variant the CI check renders, on a checker floor. The floor line is each prop\'s contact point. <span style="color:' + MINT + '">Mint</span> = surface anchors (seat with <code>bcArt.on</code>), <span style="color:' + CORAL + '">coral</span> = point anchors. Small props are zoomed; see the cast row for true scale.</p>';
for (const name of A.PROPS) {
  html += `<div class="prow"><h3>${name} <small>${HOME[name]}</small></h3><div class="cells">` + A.VARIANTS[name].map(v => propCell(name, v)).join('') + '</div></div>';
}
html += '</section>';

// 5. cast at reference scale + seating demo
{
  const b = 'cafe', floor = 236;
  let s = A.sky(b, id()) + A.ground(b, id(), 150);
  // back to front: the barista stands a step further back, so she goes down first
  s += mission('barista', 'ready', 405, floor - 8, REF * cast.barista * (floor - 8 - 150) / (floor - 150), false);
  const tr = { x: 150, y: floor, biome: b, cloth: true };
  s += A.prop('table-round', tr);
  const top = A.anchors('table-round', tr).top;
  s += A.on(top, 'newspaper', { u: -0.5, v: 0.2, biome: b });
  s += A.on(top, 'cup-saucer', { u: 0.35, v: -0.2, biome: b, steam: true });
  const sq = { x: 330, y: floor, biome: b };
  s += A.prop('table-square', sq);
  const st = A.anchors('table-square', sq).top;
  s += A.on(st, 'lantern', { u: -0.6, v: 0, biome: b, idp: id() });
  s += A.on(st, 'cup-saucer', { u: 0.5, v: 0.3, biome: b, flip: true });
  s += A.prop('chest', { x: 462, y: floor, biome: 'cove', open: true, glow: true, idp: id() });
  s += A.prop('barrel', { x: 255, y: floor, biome: b });
  s += place('croc', 'ready', 60, floor, REF * cast.croc, false);
  s += place('fredward', 'welcome', 230, floor + 6, REF * cast.fredward, true);
  html += `<section><h2>Scale: cast beside props</h2><p>True scale against the reference (Fredward ${REF} tall at floor ${floor}). Table tops at 73 = 0.44 of standing height. Cup, paper and lantern are SEATED with <code>bcArt.on(anchors.top, ...)</code>, not placed by eye.</p>` +
    `<svg viewBox="0 0 500 260" width="1000" height="520" xmlns="http://www.w3.org/2000/svg">${s}</svg></section>`;
}

// 6. biome strip: sky + ground + layered kit
{
  html += '<section><h2>Biomes, composed from the kit</h2><p><code>bcArt.sky</code> + <code>bcArt.ground</code> + a far mountain, bg/mid pines and fg props. One light, one outline rule, one haze rule across all nine.</p><div class="cells">';
  for (const b of A.BIOMES) {
    let s = A.sky(b, id()) + A.ground(b, id(), 170);
    s += A.prop('mountain', { x: 330, y: 172, biome: b, depth: 'far', w: 260, h: 120, observatory: b === 'adventure' || b === 'observatory', shadow: false });
    s += A.prop('pine', { x: 60, y: 190, biome: b, depth: 'bg', h: 90 }) + A.prop('pine', { x: 110, y: 205, biome: b, depth: 'mid', h: 110 });
    s += A.prop('rock', { x: 200, y: 240, biome: b, size: 44 }) + A.prop('crate', { x: 380, y: 236, biome: b, scale: 1.3 }) + A.prop('lantern', { x: 420, y: 236, biome: b, idp: id(), scale: 1.2 });
    s += A.prop('mushroom-glow', { x: 250, y: 242, biome: b, idp: id(), size: 1.6 });
    html += `<figure class="cell"><svg viewBox="0 0 500 260" width="400" height="208" xmlns="http://www.w3.org/2000/svg">${s}</svg><figcaption>${b}</figcaption></figure>`;
  }
  html += '</div></section>';
}

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Art Kit Style Guide</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
<style>
:root{--ink:#0B1021;--slate:#161B2E;--border:#2A3553;--amber:#F2C14E;--mint:#64D9A0;--text:#E2E8F0;--muted:#94A3B8}
body{margin:0;padding:24px 32px;background:var(--ink);color:var(--text);font:14px/1.5 Inter,system-ui,sans-serif;max-width:1500px}
h1{font:700 30px 'Space Grotesk',sans-serif;margin:0 0 4px}h1+p{color:var(--muted);margin:0 0 20px}
h2{font:700 20px 'Space Grotesk',sans-serif;color:var(--amber);margin:0 0 6px}h3{font:700 12px 'JetBrains Mono',monospace;margin:6px 0;color:var(--text)}
h3 small{color:var(--muted);font-weight:400;margin-left:6px}code{font-family:'JetBrains Mono',monospace;color:var(--mint)}
section{background:var(--slate);border:1px solid var(--border);border-radius:8px;padding:16px 18px;margin:0 0 18px}section>p{color:var(--muted);margin:0 0 12px}
.row{display:flex;gap:12px;align-items:flex-start;margin:4px 0}.row h3{width:96px;flex:none}
.sws{display:flex;flex-wrap:wrap;gap:6px}.sw{width:78px;font:10px 'JetBrains Mono',monospace}.sw span{display:block;height:24px;border-radius:4px;border:1px solid var(--border)}
.sw b{display:block;font-weight:700;margin-top:2px;overflow-wrap:anywhere}.sw i{font-style:normal;color:var(--muted)}
.ramps{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}.tr{display:flex;align-items:center;gap:3px;margin:2px 0}
.tr em{font:10px 'JetBrains Mono',monospace;font-style:normal;width:52px;color:var(--muted)}.tr span{width:34px;height:16px;border-radius:3px}
.prow{border-top:1px solid var(--border);padding-top:6px;margin-top:6px}.cells{display:flex;flex-wrap:wrap;gap:10px}
.cell{margin:0;background:var(--ink);border:1px solid var(--border);border-radius:6px;padding:4px}.cell svg{display:block}
figcaption{font:10px 'JetBrains Mono',monospace;color:var(--muted);text-align:center;padding-top:3px}
</style></head><body><h1>Art kit style guide</h1><p>Generated by <code>tools/style-guide/build.cjs</code> from <code>scenes/art-kit.js</code> and <code>design/tokens.json</code>. Rules: <code>design/STYLE.md</code>.</p>${html}</body></html>`;

fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
fs.writeFileSync(out, page);
console.log('style guide -> ' + out + ' (' + (page.length / 1024).toFixed(0) + ' KB)');

if (png) {
  const { chromium } = require(path.join(ROOT, 'node_modules', 'playwright'));
  (async () => {
    const b = await chromium.launch();
    const p = await b.newPage({ viewport: { width: 1560, height: 1000 } });
    await p.setContent(page, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(400);
    await p.evaluate(() => document.querySelectorAll('svg').forEach(s => { try { s.pauseAnimations(); s.setCurrentTime(1); } catch (e) {} }));
    await p.screenshot({ path: png, fullPage: true });
    // One PNG per section too: a full-page shot is too tall to judge detail in.
    const secs = await p.$$('section');
    for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: png.replace(/\.png$/, '') + '-' + (i + 1) + '.png' });
    await b.close();
    console.log('png -> ' + png);
  })();
}
