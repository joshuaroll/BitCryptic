// Pond story scenes: "The Quiet Catch"
// Keys: pond_0 through pond_4
//
// ============================================================================
// ONE POND, ONE BENCH, ONE ROD. Every beat calls these, so the pond that the
// fish leaps from is the pond the trail opened onto.
//
//   pdPond(p, o)                 sky, far trees, the ring of willows, the
//                                water with its reflections, both banks.
//   pdPad(x, y, s, o)            a lily pad; pdPads() the drifting set
//   pdWillow / pdReeds           the planting, each swaying from its own root
//   pdBench(x, floorY, s)        the old bench, seen from behind: it faces
//                                the water. Legs are drawn down to floorY.
//   pdRod(x0, y0, x1, y1, o)     the rod propped on it. o.glow for the ending.
//   pdArmrest(p, o)              the armrest close: carving worn smooth, and
//                                (o.near) the clue cut into it.
//
// Palette: there is no meadow biome in design/tokens.json; daylight outdoors
// reads the beach biome (sky, foliage, water, drift wood, pale haze so
// distance lightens). Light is upper left. The player is never drawn.
// ============================================================================
const PD_B = bcArt.palette('beach');
const PD_GRASS = bcArt.mix(PD_B.foliage, PD_B.sun, 0.24);
const PD_WILLOW = bcArt.mix(PD_B.foliage, PD_B.flame, 0.22);
const PD_REED = bcArt.mix(PD_B.foliage, PD_B.grit, 0.42);
const PD_BARK = bcArt.shade(PD_B.drift, 0.5);
const PD_BENCH = bcArt.mix(PD_B.drift, PD_B.rock, 0.3);
const PD_OPEN = '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">';
const PD_CLUE = 'Stagger on a fishing spool (4).';
const PD_POND = 'M34,152 Q40,121 150,116 Q250,112 352,116 Q462,121 468,152 Q474,187 360,193 Q250,199 140,193 Q28,187 34,152 Z';

function pdN(v) { return Math.round(v * 100) / 100; }
function pdRng(seed) {
  let s = (seed || 1) * 9301 + 49297;
  return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}
// Eased loops: one spline per keyTimes interval, always.
function pdEase(attr, values, dur, begin) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(pdN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animate attributeName="${attr}" values="${values}" keyTimes="${times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
// Only ever placed on a group that carries no transform of its own.
function pdMove(type, values, dur, begin) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(pdN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
function pdBody(d, t, shadeD, hiD, sw) {
  return `<path d="${d}" fill="${t.base}"/>` + (shadeD ? `<path d="${shadeD}" fill="${t.shade || bcArt.shade(t.base)}"/>` : '') + (hiD ? `<path d="${hiD}" fill="${t.hi || bcArt.light(t.base)}"/>` : '') +
    (sw ? `<path d="${d}" fill="none" stroke="${t.ink}" stroke-width="${pdN(sw)}" stroke-linejoin="round"/>` : '');
}
function pdShadow(x, y, rx, ry, op) {
  return `<ellipse data-contact-shadow="1" cx="${pdN(x)}" cy="${pdN(y)}" rx="${pdN(rx)}" ry="${pdN(ry == null ? Math.max(1.2, rx * 0.16) : ry)}" fill="#0a0806" opacity="${op == null ? 0.3 : op}"/>`;
}
// A ribbon through centre points [x, y, halfWidth], for the trail.
function pdRibbon(pts) {
  const P = (i) => pts[Math.max(0, Math.min(pts.length - 1, i))], L = [], R = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    for (let j = 0; j <= 8; j++) {
      if (j === 8 && i < pts.length - 2) continue;
      const t = j / 8, t2 = t * t, t3 = t2 * t;
      const c = (k) => 0.5 * (2 * p1[k] + (p2[k] - p0[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * t3);
      const dv = (k) => 0.5 * ((p2[k] - p0[k]) + 2 * (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t + 3 * (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * t2);
      const x = c(0), y = c(1), w = c(2), dx = dv(0), dy = dv(1), len = Math.sqrt(dx * dx + dy * dy) || 1;
      L.push([x - w * Math.abs(dy) / len - w * 0.35, y + w * 0.12 * (dx / len)]);
      R.push([x + w * Math.abs(dy) / len + w * 0.35, y - w * 0.12 * (dx / len)]);
    }
  }
  return 'M' + L.concat(R.reverse()).map((q) => pdN(q[0]) + ',' + pdN(q[1])).join(' L') + ' Z';
}

// ----------------------------------------------------------------------------
// WILLOW. Origin at the foot of the trunk. The hanging strands are two layers,
// each swaying about the crown on its own clock.
// ----------------------------------------------------------------------------
function pdWillow(x, y, s, depth, seed) {
  const C = (h) => bcArt.haze(h, depth, 'beach'), r = pdRng(seed), sw = depth === 'mid' ? 1 / s : 0;
  const lf = bcArt.tone(C(PD_WILLOW)), bk = bcArt.tone(C(PD_BARK));
  let back = '', front = '';
  for (let i = 0; i < 15; i++) {
    const a = -1 + 2 * i / 14, sx = a * 54 + (r() - 0.5) * 6, sy = -62 + Math.abs(a) * 8 - (1 - Math.abs(a)) * 6, len = 34 + r() * 30 + (1 - Math.abs(a)) * 10, bend = a * 5 + (r() - 0.5) * 5, w = 3.4 + r() * 2;
    const d = `M${pdN(sx - w)},${pdN(sy - 8)} Q${pdN(sx - w * 0.8 + bend * 0.5)},${pdN(sy + len * 0.5)} ${pdN(sx + bend)},${pdN(sy + len)} Q${pdN(sx + w * 0.8 + bend * 0.5)},${pdN(sy + len * 0.5)} ${pdN(sx + w)},${pdN(sy - 8)} Z`;
    if (i % 2) back += `<path d="${d}" fill="${lf.shade}"/>`; else front += `<path d="${d}" fill="${i % 4 === 0 && a < 0.2 ? lf.hi : lf.base}"/>`;
  }
  const crown = 'M-56,-56 Q-64,-98 -24,-116 Q8,-130 40,-112 Q70,-94 58,-54 Q34,-70 0,-64 Q-32,-70 -56,-56 Z';
  return `<g transform="translate(${x},${y}) scale(${s})">` + pdShadow(4, 0, 30, 4, 0.2 * (depth === 'mid' ? 1 : 0.6)) +
    pdBody('M-6,0 Q-8,-28 -3,-50 Q0,-62 -9,-76 L1,-80 Q8,-64 6,-50 Q4,-28 8,0 Z', bk, 'M2,0 Q0,-28 3,-50 Q5,-62 -2,-78 L1,-80 Q8,-64 6,-50 Q4,-28 8,0 Z', null, sw) +
    `<g>${pdMove('rotate', '-1.3 0 -96;1.5 0 -96;-1.3 0 -96', pdN(5.7 + r() * 1.6), pdN(r() * 2))}${back}</g>` +
    pdBody(crown, lf, 'M10,-122 Q46,-116 60,-88 Q64,-70 58,-54 Q40,-66 22,-66 Q44,-84 10,-122 Z', 'M-50,-78 Q-48,-104 -22,-114 Q-6,-120 8,-118 Q-20,-108 -34,-92 Q-44,-82 -50,-78 Z', sw) +
    `<g>${pdMove('rotate', '1.6 0 -96;-1.4 0 -96;1.6 0 -96', pdN(4.6 + r() * 1.4), pdN(r() * 2))}${front}</g></g>`;
}
// REEDS. A clump between x0 and x1 standing on baseY, every blade one tapered
// shape. Cat's tails on some. The clump leans in the air about its own root.
function pdReeds(x0, x1, baseY, n, hmax, seed, o) {
  o = o || {};
  const r = pdRng(seed), C = (h) => o.depth ? bcArt.haze(h, o.depth, 'beach') : h;
  const g = bcArt.tone(C(o.dark ? bcArt.shade(PD_REED, 0.3) : PD_REED)), head = C(bcArt.shade(PD_B.drift, o.dark ? 0.6 : 0.45));
  let a = '', b = '', tails = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + (x1 - x0) * (i + r() * 0.9) / n, h = hmax * (0.5 + r() * 0.5), lean = (r() - 0.5) * h * 0.22, w = (o.w || 2.4) * (0.7 + r() * 0.6);
    const d = `M${pdN(x - w)},${baseY} Q${pdN(x - w * 0.5 + lean * 0.25)},${pdN(baseY - h * 0.55)} ${pdN(x + lean)},${pdN(baseY - h)} Q${pdN(x + w * 0.6 + lean * 0.35)},${pdN(baseY - h * 0.5)} ${pdN(x + w)},${baseY} Z `;
    if (i % 2) a += d; else b += d;
    if (i % 3 === 1 && !o.bare) {
      const hx = x + lean * 0.86, hy = baseY - h * 0.9, hw = w * 0.82, hh = Math.min(h * 0.1, w * 3.6);
      tails += `<path d="M${pdN(hx)},${pdN(hy - hh - h * 0.07)} L${pdN(hx)},${pdN(hy)}" stroke="${g.shade}" stroke-width="${pdN(w * 0.4)}"/><path d="M${pdN(hx - hw)},${pdN(hy)} Q${pdN(hx - hw)},${pdN(hy - hh)} ${pdN(hx)},${pdN(hy - hh)} Q${pdN(hx + hw)},${pdN(hy - hh)} ${pdN(hx + hw)},${pdN(hy)} Q${pdN(hx + hw)},${pdN(hy + hh * 0.35)} ${pdN(hx)},${pdN(hy + hh * 0.35)} Q${pdN(hx - hw)},${pdN(hy + hh * 0.35)} ${pdN(hx - hw)},${pdN(hy)} Z" fill="${head}"/>`;
    }
  }
  const cx = pdN((x0 + x1) / 2);
  return `<g>${pdMove('rotate', `-1.1 ${cx} ${baseY};1.3 ${cx} ${baseY};-1.1 ${cx} ${baseY}`, o.dur || 5.2, o.begin || 0)}<path d="${a}" fill="${g.shade}"/><path d="${b}" fill="${g.base}"/>${tails}</g>`;
}
// LILY PAD. Origin at its centre on the water. o.flower: a bloom on it.
function pdPad(x, y, s, o) {
  o = o || {};
  // o.rot turns the NOTCH round the pad, in the plane of the water. The pad
  // itself is always a level ellipse: it lies flat however it has turned.
  const g = bcArt.tone(bcArt.mix(PD_B.foliage, PD_B.seaShallow, 0.18)), th = (o.rot || 0) * Math.PI / 180, dl = 0.2;
  const pt = (a, k) => pdN(10 * k * Math.cos(a)) + ',' + pdN(3.7 * k * Math.sin(a));
  const pad = `M0,0 L${pt(th - dl, 1)} A10,3.7 0 1 0 ${pt(th + dl, 1)} Z`;
  let d = `<ellipse cx="0.8" cy="1.4" rx="10.6" ry="4" fill="${PD_B.seaDeep}" opacity="0.4"/>`;
  d += `<path d="${pad}" fill="${g.base}"/><path d="M-9.2,-1.4 A10,3.7 0 0 1 3,-3.5 Q-3,-2.4 -9.2,-1.4 Z" fill="${g.hi}"/>` +
    `<path d="${[2.2, 2.9, 3.6, 4.3, 5].map((k) => 'M0,0 L' + pt(th + k * Math.PI / 3.6, 0.82)).join(' ')}" stroke="${g.shade}" stroke-width="0.5" fill="none"/>` +
    `<path d="${pad}" fill="none" stroke="${g.ink}" stroke-width="${pdN(0.7 / s)}" stroke-linejoin="round"/>`;
  if (o.flower) {
    const c = o.flower === 2 ? PD_B.canvas : PD_B.accentSoftLit;
    d += `<path d="M-5.4,-1 Q-4,-4.6 0,-1.4 Q4,-4.6 5.4,-1 Q2,1.8 0,0.6 Q-2,1.8 -5.4,-1 Z" fill="${bcArt.shade(c, 0.16)}"/><path d="M-3,-1.4 Q-2.2,-6.6 0,-7.6 Q2.2,-6.6 3,-1.4 Q0,0.6 -3,-1.4 Z" fill="${c}"/><path d="M-1.2,-1.6 Q-0.6,-5 0,-6 Q0.6,-5 1.2,-1.6 Z" fill="${PD_B.flame}"/>`;
  }
  return `<g transform="translate(${pdN(x)},${pdN(y)}) scale(${pdN(s)})">${d}</g>`;
}
// The drifting set: each raft of pads turns one slow circle (an ellipse on the
// foreshortened water), every raft on its own period.
const PD_RAFTS = [
  { at: [112, 160], rx: 9, ry: 2.6, dur: 47, pads: [[0, 0, 1, { rot: 20 }], [15, 4, 0.8, { rot: 200, flower: 1 }], [-11, 5, 0.7, { rot: 110 }]] },
  { at: [206, 146], rx: 7, ry: 2, dur: 58, pads: [[0, 0, 0.74, { rot: 300 }], [12, -2, 0.6, { rot: 80 }]] },
  { at: [306, 170], rx: 11, ry: 3, dur: 52, pads: [[0, 0, 1.1, { rot: 150, flower: 2 }], [-17, -3, 0.84, { rot: 30 }], [13, 5, 0.9, { rot: 250 }]] },
  { at: [392, 150], rx: 8, ry: 2.2, dur: 64, pads: [[0, 0, 0.8, { rot: 60 }], [-12, 3, 0.66, { rot: 220, flower: 1 }]] },
  { at: [232, 181], rx: 10, ry: 2.8, dur: 43, pads: [[0, 0, 1.2, { rot: 340 }], [18, -1, 0.9, { rot: 120 }]] },
  { at: [150, 132], rx: 5, ry: 1.4, dur: 70, pads: [[0, 0, 0.5, { rot: 10 }], [8, 1, 0.44, { rot: 190 }]] },
  { at: [340, 130], rx: 5, ry: 1.4, dur: 66, pads: [[0, 0, 0.5, { rot: 250 }], [-8, 1.4, 0.42, { rot: 40, flower: 2 }]] }
];
function pdPads() {
  return PD_RAFTS.map((f) => `<g transform="translate(${f.at[0] - f.rx},${f.at[1]})"><g><animateMotion dur="${f.dur}s" repeatCount="indefinite" path="M0,0 a${f.rx},${f.ry} 0 1,0 ${f.rx * 2},0 a${f.rx},${f.ry} 0 1,0 ${-f.rx * 2},0"/>` +
    f.pads.map((q) => pdPad(q[0], q[1], q[2], q[3])).join('') + '</g></g>').join('');
}
// DRAGONFLY. Skims a closed track; the wings shiver far faster than it flies.
function pdDragonfly(x, y, s, col, track, dur, begin) {
  return `<g transform="translate(${x},${y}) scale(${s})"><g>${pdMove('translate', track, dur, begin)}` +
    `<g opacity="0.75">${pdEase('opacity', '0.75;0.3;0.75', 0.16)}<ellipse cx="-2.6" cy="-3" rx="5.4" ry="1.5" fill="${PD_B.canvas}" transform="rotate(-22 -2.6 -3)"/><ellipse cx="2" cy="-3.2" rx="5.4" ry="1.5" fill="${PD_B.canvas}" transform="rotate(16 2 -3.2)"/></g>` +
    `<path d="M-8,0.6 L3,0" stroke="${col}" stroke-width="1.5" stroke-linecap="round"/><circle cx="4" cy="-0.1" r="1.5" fill="${bcArt.shade(col, 0.25)}"/><path d="M-7.6,0.5 L-3,0.2" stroke="${bcArt.light(col, 0.4)}" stroke-width="0.6" stroke-linecap="round"/></g></g>`;
}

// ----------------------------------------------------------------------------
// THE POND. Back to front: sky, far trees, far bank, willows, water (with the
// willows' reflections and the sky's glass), pads, near bank.
// ----------------------------------------------------------------------------
function pdPond(p, o) {
  o = o || {};
  const H = (h, d) => bcArt.haze(h, d, 'beach');
  let s = bcArt.sky('beach', p);
  s += `<defs><radialGradient id="${p}-sun" cx="0.1" cy="0" r="0.9"><stop offset="0" stop-color="${PD_B.sun}" stop-opacity="0.6"/><stop offset="1" stop-color="${PD_B.sun}" stop-opacity="0"/></radialGradient>` +
    `<linearGradient id="${p}-grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${H(PD_GRASS, 'bg')}"/><stop offset="0.4" stop-color="${PD_GRASS}"/><stop offset="1" stop-color="${bcArt.mix(PD_GRASS, PD_B.foliage, 0.6)}"/></linearGradient>` +
    `<linearGradient id="${p}-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bcArt.mix(PD_B.swell, PD_B.skyBottom, 0.4)}"/><stop offset="0.45" stop-color="${PD_B.seaShallow}"/><stop offset="1" stop-color="${PD_B.sea}"/></linearGradient>` +
    `<clipPath id="${p}-clip"><path d="${PD_POND}"/></clipPath></defs>`;
  s += `<rect width="500" height="140" fill="url(#${p}-sun)"/>`;
  s += `<g opacity="0.8"><g>${pdMove('translate', '0,0;22,0;0,0', 57)}<path d="M60,34 Q56,24 68,23 Q70,13 83,16 Q90,7 102,15 Q114,13 116,23 Q126,24 122,34 Z" fill="${PD_B.canvas}"/></g></g>`;
  s += `<g opacity="0.7"><g>${pdMove('translate', '0,0;-16,0;0,0', 71)}<path d="M330,26 Q327,19 336,18 Q338,11 348,13 Q353,7 362,13 Q371,11 372,18 Q380,19 377,26 Z" fill="${PD_B.canvas}"/></g></g>`;
  // far wood: two soft ridges of trees, the nearer a band darker
  s += `<path d="M0,84 Q20,66 44,78 Q60,60 86,74 Q108,56 134,72 Q160,60 182,76 Q210,58 240,74 Q262,62 288,76 Q312,58 340,74 Q366,60 392,76 Q420,62 444,76 Q470,64 500,80 L500,106 L0,106 Z" fill="${H(PD_B.foliage, 'far')}"/>`;
  s += `<path d="M0,96 Q26,82 50,92 Q74,80 100,92 Q130,84 150,96 L150,110 L0,110 Z M350,96 Q372,84 398,94 Q424,82 452,92 Q478,84 500,94 L500,110 L350,110 Z" fill="${H(PD_B.foliage, 'bg')}"/>`;
  // ground, both banks at once; the water goes on top of it
  s += `<rect x="0" y="100" width="500" height="160" fill="url(#${p}-grass)"/>`;
  s += pdWillow(170, 113, 0.44, 'bg', 3) + pdWillow(332, 112, 0.4, 'bg', 5) + pdWillow(250, 110, 0.5, 'bg', 9);
  // the bank's lip: bare earth where the water has cut it
  s += `<path d="${PD_POND}" fill="${bcArt.mix(PD_B.sandShadow, PD_B.foliageDeep, 0.5)}" transform="translate(0,-2.4)"/>`;
  s += `<path d="${PD_POND}" fill="url(#${p}-water)"/>`;
  s += `<g clip-path="url(#${p}-clip)">`;
  // reflections: the willows hang upside down in it, softened
  s += `<path d="M30,150 Q50,116 130,118 Q150,140 138,166 Q100,180 40,172 Z" fill="${PD_B.foliageDeep}" opacity="0.3"/><path d="M360,116 Q450,116 470,150 L462,174 Q410,180 372,164 Q352,140 360,116 Z" fill="${PD_B.foliageDeep}" opacity="0.3"/>`;
  s += `<path d="M150,114 Q168,134 188,116 Z M228,112 Q250,138 274,112 Z M316,113 Q332,132 348,114 Z" fill="${PD_B.foliage}" opacity="0.34"/>`;
  s += `<ellipse cx="250" cy="128" rx="96" ry="14" fill="${PD_B.canvas}" opacity="0.16"/>`;
  // glass: long level streaks of sky that barely breathe
  [[150, 136, 70, 7.3, 0], [236, 158, 96, 9.1, 2], [300, 142, 54, 8.2, 4.1], [96, 178, 60, 10.4, 1.3], [340, 184, 74, 6.7, 3]].forEach((k) => { s += `<path d="M${k[0]},${k[1]} h${k[2]}" stroke="${PD_B.foam}" stroke-width="1.1" stroke-linecap="round" opacity="0.4">${pdEase('opacity', '0.18;0.5;0.18', k[3], k[4])}</path>`; });
  s += '</g>';
  // far bank's reeds, small and pale
  s += pdReeds(120, 200, 118, 16, 9, 4, { depth: 'bg', w: 1, dur: 6.1, bare: true }) + pdReeds(270, 330, 117, 12, 8, 6, { depth: 'bg', w: 1, dur: 5.4, begin: 1, bare: true }) + pdReeds(380, 430, 120, 11, 10, 8, { depth: 'bg', w: 1.1, dur: 6.6, begin: 2, bare: true });
  // o.under: anything that is IN the water goes down before the pads float on it
  s += (o.under || '') + pdPads();
  // the two near willows stand on the banks either side and lean in
  s += pdWillow(34, 158, 1.02, 'mid', 11) + pdWillow(472, 154, 1.08, 'mid', 14);
  // near bank: grass overhanging the water's edge
  const r = pdRng(17);
  let tuft = '';
  for (let i = 0; i < 44; i++) { const x = 40 + i * 9.6 + r() * 6, y = 192 + Math.sin((x - 250) / 220 * Math.PI / 2 + Math.PI / 2) * 4 - Math.abs(x - 250) / 250 * 14 + r() * 3; tuft += `M${pdN(x - 2)},${pdN(y + 3)} l${pdN(-1 + r() * 2)},${pdN(-6 - r() * 4)} l2,${pdN(5 + r() * 2)} `; }
  s += `<path d="${tuft}" fill="none" stroke="${bcArt.mix(PD_GRASS, PD_B.foliage, 0.5)}" stroke-width="1.3" stroke-linecap="round"/>`;
  return s;
}
// Grass tufts and wild flowers of the near bank, seeded.
function pdBank(seed, n) {
  const r = pdRng(seed);
  let d = '', f = '';
  for (let i = 0; i < n; i++) {
    const x = r() * 500, y = 204 + r() * 54, k = 0.7 + (y - 204) / 54 * 0.8;
    d += `M${pdN(x - 2.4 * k)},${pdN(y)} l${pdN(-0.6 * k)},${pdN(-5 * k)} M${pdN(x)},${pdN(y)} l${pdN(0.5 * k)},${pdN(-7 * k)} M${pdN(x + 2.4 * k)},${pdN(y)} l${pdN(1.6 * k)},${pdN(-4.6 * k)} `;
    if (i % 4 === 0) f += `<circle cx="${pdN(x + 6)}" cy="${pdN(y - 3)}" r="${pdN(1 + k * 0.6)}" fill="${[PD_B.canvas, PD_B.flame, PD_B.accentSoftLit][i % 3]}" opacity="0.85"/>`;
  }
  return `<path d="${d}" fill="none" stroke="${PD_B.foliage}" stroke-width="1" stroke-linecap="round" opacity="0.7"/>${f}`;
}

// ----------------------------------------------------------------------------
// THE BENCH, from behind: it faces the water. Origin is the ground midway
// between the two near legs. Every leg is drawn from the timber down to y=0
// (near pair) or to the far foot line, so none can float.
// ----------------------------------------------------------------------------
function pdBench(x, y, s) {
  const w = bcArt.tone(PD_BENCH), sw = 1.6 / s, far = { base: w.shade, shade: w.ink, hi: w.base, ink: w.ink };
  let g = pdShadow(2, -3, 70, 8, 0.3);
  // far legs (the front of the bench, at the water side), then the seat
  g += pdBody('M-50,-7 L-44,-7 L-44,-54 L-50,-54 Z', far, null, null, sw * 0.8) + pdBody('M44,-7 L50,-7 L50,-54 L44,-54 Z', far, null, null, sw * 0.8);
  g += pdBody('M-55,-28 L55,-28 L50,-36 L-50,-36 Z', w, null, null, sw) + `<path d="M-53.4,-30.6 L53.4,-30.6 M-51.6,-33.4 L51.6,-33.4" stroke="${w.shade}" stroke-width="0.7"/>`;
  g += pdBody('M-55,-28 L55,-28 L55,-24.6 L-55,-24.6 Z', far, null, null, sw);
  // armrests run away from us to the far posts
  g += pdBody('M-60,-48 L-50,-48 L-45,-55.6 L-54,-55.6 Z', { base: w.hi, ink: w.ink }, null, null, sw) + pdBody('M50,-48 L60,-48 L54,-55.6 L45,-55.6 Z', { base: w.hi, ink: w.ink }, null, null, sw);
  // near posts, floor to cap
  g += pdBody('M-59,0 L-51,0 L-51,-61 L-59,-61 Z', w, 'M-54,0 L-51,0 L-51,-61 L-54,-61 Z', 'M-59,0 L-57.6,0 L-57.6,-61 L-59,-61 Z', sw) + pdBody('M51,0 L59,0 L59,-61 L51,-61 Z', w, 'M56,0 L59,0 L59,-61 L56,-61 Z', 'M51,0 L52.4,0 L52.4,-61 L51,-61 Z', sw);
  // back boards: weathered, a split in the top one, a knot in the lower
  g += pdBody('M-57,-59 L57,-59 L57,-46 L-57,-46 Z', w, 'M-57,-49 L57,-49 L57,-46 L-57,-46 Z', 'M-57,-59 L57,-59 L57,-57.4 L-57,-57.4 Z', sw);
  g += pdBody('M-57,-42 L57,-42 L57,-30.6 L-57,-30.6 Z', w, 'M-57,-33.4 L57,-33.4 L57,-30.6 L-57,-30.6 Z', 'M-57,-42 L57,-42 L57,-40.6 L-57,-40.6 Z', sw);
  g += `<path d="M-40,-54 q16,-2 34,0 M4,-52 q20,2 44,0 M-46,-37 q22,-2 40,0 M10,-36 q18,2 36,0 M22,-59 l3,6 l-2,7" fill="none" stroke="${w.shade}" stroke-width="0.7" stroke-linecap="round"/><ellipse cx="-12" cy="-36.4" rx="2.6" ry="1.5" fill="${w.shade}"/>`;
  g += `<circle cx="-55" cy="-52.4" r="0.9" fill="${w.ink}"/><circle cx="55" cy="-52.4" r="0.9" fill="${w.ink}"/><circle cx="-55" cy="-36.4" r="0.9" fill="${w.ink}"/><circle cx="55" cy="-36.4" r="0.9" fill="${w.ink}"/>`;
  // moss and grass at the feet: it has stood here a long time
  g += `<path d="M-63,0 q3,-7 7,-1 q3,-6 7,0 Z M47,0 q4,-7 8,-1 q3,-5 7,1 Z" fill="${bcArt.mix(PD_GRASS, PD_B.foliage, 0.5)}"/>`;
  return `<g transform="translate(${x},${y}) scale(${s})">${g}</g>`;
}
// THE ROD: butt on the ground at (x0,y0), tip at (x1,y1). Cork grip, brass
// reel, three guides, the line hanging from the tip with a float on it.
// o.glow: the faint light of the ending. p is needed for the glow's gradient.
function pdRod(x0, y0, x1, y1, o) {
  o = o || {};
  const dx = x1 - x0, dy = y1 - y0, len = Math.sqrt(dx * dx + dy * dy), ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
  const at = (t, off) => [pdN(x0 + dx * t + nx * (off || 0)), pdN(y0 + dy * t + ny * (off || 0))];
  const cane = bcArt.tone(bcArt.shade(PD_B.drift, 0.42)), cork = bcArt.tone(PD_B.sandWet), br = bcArt.tone(bcArt.mix(PD_B.grit, PD_B.gold, 0.4));
  const poly = (t0, t1, w0, w1) => 'M' + [at(t0, w0), at(t1, w1), at(t1, -w1), at(t0, -w0)].map((q) => q.join(',')).join(' L') + ' Z';
  let s = '';
  if (o.glow) {
    s += `<defs><radialGradient id="${o.p}-rod"><stop offset="0" stop-color="${PD_B.glow}" stop-opacity="0.7"/><stop offset="1" stop-color="${PD_B.glow}" stop-opacity="0"/></radialGradient></defs>`;
    s += `<path d="M${at(0.04).join(',')} L${at(1).join(',')}" stroke="${PD_B.flame}" stroke-width="9" stroke-linecap="round" opacity="0.2">${pdEase('opacity', '0.1;0.3;0.1', 3.4)}</path>`;
    s += `<circle cx="${at(1)[0]}" cy="${at(1)[1]}" r="15" fill="url(#${o.p}-rod)">${pdEase('opacity', '0.45;1;0.45', 3.4, 0.4)}</circle><circle cx="${at(0.17)[0]}" cy="${at(0.17)[1]}" r="13" fill="url(#${o.p}-rod)">${pdEase('opacity', '0.4;0.9;0.4', 4.1)}</circle>`;
  }
  s += pdBody(poly(0.2, 1, 1.5, 0.45), cane, null, null, 0.9) + pdBody(poly(0, 0.2, 2.3, 2), cork, null, null, 1);
  s += `<path d="M${at(0.03, 2.2).join(',')} L${at(0.03, -2.2).join(',')} M${at(0.19, 2).join(',')} L${at(0.19, -2).join(',')}" stroke="${cork.ink}" stroke-width="1.3"/>`;
  if (o.glow) s += `<path d="M${at(0.22).join(',')} L${at(0.99).join(',')}" stroke="${PD_B.glow}" stroke-width="1" stroke-linecap="round" opacity="0.7">${pdEase('opacity', '0.35;0.9;0.35', 3.4)}</path>`;
  // reel, on the side away from the bench
  const rc = at(0.15, -5.2);
  s += `<circle cx="${rc[0]}" cy="${rc[1]}" r="4.6" fill="${br.base}" stroke="${br.ink}" stroke-width="1"/><circle cx="${rc[0]}" cy="${rc[1]}" r="2" fill="${br.shade}"/><path d="M${pdN(rc[0] - 3)},${pdN(rc[1] - 2.4)} a3.8,3.8 0 0 1 4,-1.2" fill="none" stroke="${br.hi}" stroke-width="0.9" stroke-linecap="round"/>`;
  [0.42, 0.66, 0.86].forEach((t) => { const g = at(t, -2.2); s += `<circle cx="${g[0]}" cy="${g[1]}" r="1.3" fill="none" stroke="${br.ink}" stroke-width="0.8"/>`; });
  // line: along the rod from the reel, then hanging from the tip, swinging
  const tip = at(1), drop = o.drop || 44;
  s += `<path d="M${rc.join(',')} L${at(0.42, -2.2).join(',')} L${at(0.66, -2.2).join(',')} L${at(0.86, -2.2).join(',')} L${tip.join(',')}" fill="none" stroke="${PD_B.foam}" stroke-width="0.5" opacity="0.8"/>`;
  s += `<g transform="translate(${tip[0]},${tip[1]})"><g>${pdMove('rotate', '-4 0 0;5 0 0;-4 0 0', 4.4)}<path d="M0,0 L0,${drop}" stroke="${PD_B.foam}" stroke-width="0.6" opacity="0.85"/>` +
    `<path d="M-2.2,${drop} Q-2.6,${drop + 4} 0,${drop + 6.4} Q2.6,${drop + 4} 2.2,${drop} Z" fill="${PD_B.accent}" stroke="${bcArt.ink(PD_B.accent)}" stroke-width="0.6"/><path d="M-2.2,${drop} Q0,${drop - 2.6} 2.2,${drop} Z" fill="${PD_B.canvas}" stroke="${bcArt.ink(PD_B.accent)}" stroke-width="0.6"/></g></g>`;
  return s;
}

// Scene 0: the trail through the reeds opens onto the pond.
const PD_TRAIL0 = [[304, 238, 12], [262, 240, 15], [214, 246, 20], [176, 254, 27], [150, 268, 36]];
STORY_SCENES['pond_0'] = PD_OPEN + pdPond('pd0', {}) + pdBank(5, 60) +
  `<path d="${pdRibbon(PD_TRAIL0.map((q) => [q[0], q[1], q[2] * 1.2 + 1]))}" fill="${bcArt.mix(PD_B.sandShadow, PD_B.foliage, 0.4)}" opacity="0.8"/><path d="${pdRibbon(PD_TRAIL0)}" fill="${PD_B.sandWet}"/><path d="${pdRibbon(PD_TRAIL0.map((q) => [q[0] - 2, q[1], q[2] * 0.5]))}" fill="${PD_B.sand}" opacity="0.6"/>` +
  pdDragonfly(170, 142, 1.5, PD_B.deviceReversal, '0,0;40,-6;86,4;50,12;0,0', 8.6) + pdDragonfly(330, 164, 1.8, PD_B.deviceHomophone, '0,0;-36,-10;-70,2;-30,9;0,0', 10.3, 1.4) + pdDragonfly(250, 128, 1, PD_B.accent, '0,0;24,4;50,-3;22,-7;0,0', 7.1, 0.6) +
  pdBench(352, 232, 1.05) + pdRod(424, 233, 392, 112, { drop: 40 }) +
  bcArt.prop('rock', { x: 270, y: 224, size: 18, seed: 6, biome: 'beach' }) +
  // the reeds the trail came through, tall and close on both sides
  pdReeds(-10, 96, 262, 15, 196, 21, { dark: true, w: 4.6, dur: 6.3 }) + pdReeds(-6, 130, 264, 13, 120, 23, { w: 4, dur: 5.1, begin: 1.2 }) +
  pdReeds(448, 512, 262, 9, 176, 27, { dark: true, w: 4.6, dur: 5.8, begin: 0.7 }) + pdReeds(424, 506, 264, 9, 96, 29, { w: 3.8, dur: 4.9, begin: 2 }) +
  '</svg>';

// ----------------------------------------------------------------------------
// THE ARMREST, close. The near post and the board that runs from it toward
// the water. Far view: the carving is there but worn too smooth to read from
// here. o.near: straight over the board, and the words can be read.
// ----------------------------------------------------------------------------
function pdArmrest(p, o) {
  o = o || {};
  const w = bcArt.tone(PD_BENCH), dk = bcArt.tone(bcArt.shade(PD_BENCH, 0.2));
  let s = `<defs><linearGradient id="${p}-arm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${w.base}"/><stop offset="1" stop-color="${w.hi}"/></linearGradient></defs>`;
  if (!o.near) {
    // the back boards run off to the left; the seat is below and beyond
    s += `<path d="M-10,150 L246,128 L250,164 L-10,196 Z" fill="${dk.base}" stroke="${dk.ink}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-10,150 L246,128 L246.4,132 L-10,155 Z" fill="${dk.hi}"/>` +
      `<path d="M-10,206 L250,172 L254,204 L-10,246 Z" fill="${dk.base}" stroke="${dk.ink}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-10,206 L250,172 L250.4,176 L-10,211 Z" fill="${dk.hi}"/>` +
      `<path d="M20,170 q60,-9 120,-12 M40,226 q70,-13 150,-20" fill="none" stroke="${dk.shade}" stroke-width="1.1" stroke-linecap="round"/>`;
    // far post, small, at the water end of the armrest
    s += pdBody('M330,96 L352,96 L352,150 L330,150 Z', { base: w.shade, ink: w.ink }, null, null, 1.4);
    // the armrest board, running away from us
    s += `<path d="M196,206 L412,206 L412,218 L196,218 Z" fill="${w.shade}" stroke="${w.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;
    s += `<path d="M196,206 L412,206 L362,90 L316,90 Z" fill="url(#${p}-arm)" stroke="${w.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;
    // grain running with the board
    s += `<path d="M232,204 L324,94 M286,204 L336,94 M340,204 L348,94 M384,204 L358,96" fill="none" stroke="${w.shade}" stroke-width="0.9" opacity="0.7"/>`;
    // the carving: three lines of cut marks, their edges gone soft
    const r = pdRng(31);
    let cut = '';
    [[168, 30, 15], [142, 24, 12], [120, 19, 10]].forEach((row, ri) => {
      const y = row[0], half = (y - 90) / 116 * 108 * 0.74, cx = 339 - (y - 90) / 116 * 35;
      let x = cx - half;
      while (x < cx + half - row[2] * 0.4) { const ww = row[2] * (0.5 + r() * 0.8), hgt = row[1] * 0.28 * (0.6 + r() * 0.6); cut += `M${pdN(x)},${pdN(y)} q${pdN(ww * 0.25)},${pdN(-hgt)} ${pdN(ww * 0.5)},0 t${pdN(ww * 0.5)},0 `; x += ww + (r() < 0.25 ? row[2] * 0.7 : row[2] * 0.14); }
    });
    s += `<path d="${cut}" fill="none" stroke="${w.hi}" stroke-width="2" stroke-linecap="round" transform="translate(0.7,1.2)" opacity="0.8"/><path d="${cut}" fill="none" stroke="${w.ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.75"/>`;
    // worn smooth: a long shine where a hundred hands have rested
    s += `<path d="M236,196 Q300,150 330,100 Q318,152 262,198 Z" fill="${PD_B.sun}" opacity="0.2">${pdEase('opacity', '0.12;0.28;0.12', 5.2)}</path>`;
    // near post, cap toward us
    s += pdShadow(304, 258, 80, 7, 0.24);
    s += pdBody('M250,214 L358,214 L358,270 L250,270 Z', w, 'M326,214 L358,214 L358,270 L326,270 Z', 'M250,214 L256,214 L256,270 L250,270 Z', 1.6);
    s += `<path d="M266,224 q-3,20 2,44 M290,222 q4,22 -1,46 M312,224 q-3,18 1,44" fill="none" stroke="${w.shade}" stroke-width="0.9"/>`;
    return s;
  }
  // straight over the armrest: the board lies across the frame
  s += `<path d="M-10,60 L510,52 L510,204 L-10,212 Z" fill="#0a0806" opacity="0.26" transform="translate(4,8)"/>`;
  s += `<path d="M-10,196 L510,188 L510,206 L-10,214 Z" fill="${w.shade}" stroke="${w.ink}" stroke-width="1.6"/>`;
  s += `<path d="M-10,58 L510,50 L510,188 L-10,196 Z" fill="url(#${p}-arm)" stroke="${w.ink}" stroke-width="1.6"/>`;
  s += `<path d="M-10,74 Q120,66 250,70 Q380,74 510,64 M-10,104 Q140,96 280,102 Q400,106 510,96 M-10,160 Q130,150 260,156 Q390,162 510,150 M-10,182 Q200,172 510,174" fill="none" stroke="${w.shade}" stroke-width="1" opacity="0.7"/>`;
  s += `<ellipse cx="78" cy="88" rx="12" ry="6" fill="${w.shade}"/><ellipse cx="78" cy="88" rx="5" ry="2.4" fill="${w.ink}" opacity="0.7"/><path d="M430,56 q6,18 -2,36 q-5,10 2,20" fill="none" stroke="${w.ink}" stroke-width="1.1" opacity="0.6"/>`;
  // worn smooth: the shine lies across the middle of the board
  s += `<path d="M40,112 Q250,88 470,104 Q250,112 40,134 Z" fill="${PD_B.sun}" opacity="0.14">${pdEase('opacity', '0.08;0.18;0.08', 5.6)}</path>`;
  // THE CLUE, cut into the wood. Frozen text. Carved, so Georgia: a lit lower
  // lip under each letter, then the dark of the cut itself.
  const txt = `x="250" y="136" font-family="Georgia,serif" font-size="27" letter-spacing="0" text-anchor="middle"`;
  s += `<g transform="rotate(-0.9 250 128)"><text ${txt} fill="${bcArt.light(PD_BENCH, 0.5)}" transform="translate(0.9,1.5)" opacity="0.9">${PD_CLUE}</text><text ${txt} fill="${bcArt.shade(PD_BENCH, 0.72)}">${PD_CLUE}</text></g>`;
  // nail heads at the post end, and lichen: it is an old bench
  s += `<circle cx="22" cy="76" r="3" fill="${w.ink}"/><circle cx="21.4" cy="75.4" r="1" fill="${w.hi}"/><circle cx="22" cy="176" r="3" fill="${w.ink}"/><circle cx="21.4" cy="175.4" r="1" fill="${w.hi}"/>`;
  s += `<path d="M452,170 q8,-8 16,-2 q8,-6 14,2 q-4,10 -14,8 q-10,4 -16,-8 Z" fill="${bcArt.mix(PD_GRASS, PD_B.headland, 0.5)}" opacity="0.8"/><path d="M130,62 q6,6 14,2 q4,6 12,0 q-6,-6 -26,-2 Z" fill="${bcArt.mix(PD_GRASS, PD_B.headland, 0.5)}" opacity="0.7"/>`;
  return s;
}

// Scene 1: the bench, close. A message in the armrest, worn smooth.
STORY_SCENES['pond_1'] = PD_OPEN +
  `<g transform="translate(250,150) scale(1.9) translate(-300,-162)">${bcArt.layer('mid', pdPond('pd1', {}), 'beach')}</g>` +
  `<rect width="500" height="260" fill="${PD_B.haze}" opacity="0.14"/>` +
  pdArmrest('pd1a', {}) +
  // the rod, leaning in from the right against the post
  `<g transform="translate(380,270) scale(2.4)">${pdRod(0, 0, 34, -118, { drop: 30 })}</g>` +
  pdReeds(440, 520, 264, 8, 190, 41, { dark: true, w: 5.4, dur: 6.2 }) +
  '</svg>';

// Scene 2 (puzzle): the carving, read. Text is frozen.
STORY_SCENES['pond_2'] = PD_OPEN +
  `<g transform="translate(250,40) scale(2.6) translate(-250,-150)">${bcArt.layer('bg', pdPond('pd2', {}), 'beach')}</g>` +
  `<rect width="500" height="260" fill="${PD_B.haze}" opacity="0.2"/>` +
  // the seat's boards, below the armrest and further from the eye
  `<path d="M-10,214 L510,206 L510,270 L-10,270 Z" fill="${bcArt.shade(PD_BENCH, 0.3)}"/><path d="M-10,240 L510,234" stroke="${bcArt.shade(PD_BENCH, 0.66)}" stroke-width="2.4"/><path d="M-10,243 L510,237" stroke="${PD_BENCH}" stroke-width="1" opacity="0.5"/>` +
  `<path d="M30,226 q90,-6 180,-2 M300,224 q80,-4 170,-4 M60,254 q110,-6 200,-3 M330,250 q70,-4 150,-3" fill="none" stroke="${bcArt.shade(PD_BENCH, 0.5)}" stroke-width="1" opacity="0.7"/>` +
  pdArmrest('pd2a', { near: true }) +
  '</svg>';

// ----------------------------------------------------------------------------
// THE FISH. Origin at the middle of the body, nose toward +x, about 66 long.
// ----------------------------------------------------------------------------
function pdFish() {
  const sv = bcArt.tone(bcArt.light(PD_B.headland, 0.3)), back = bcArt.mix(PD_B.headland, PD_B.seaDeep, 0.55), fin = bcArt.tone(bcArt.mix(PD_B.headland, PD_B.sea, 0.4));
  const bodyD = 'M-26,0 Q-12,-14 12,-10 Q27,-7 33,0 Q27,7 12,9 Q-12,12 -26,0 Z';
  return pdBody('M-22,0 L-40,-13 Q-35,0 -41,12 Z', fin, 'M-22,0 L-41,12 Q-36,4 -36,0 Z', null, 1.3) +
    `<path d="M-37,-9 L-27,-2 M-38,8 L-27,2 M-36,-1 L-28,0" stroke="${fin.ink}" stroke-width="0.6" opacity="0.6"/>` +
    pdBody('M-8,-11 Q2,-22 12,-10 Z', fin, null, null, 1.2) + pdBody('M0,9 Q4,17 12,9 Z', fin, null, null, 1.1) +
    `<path d="${bodyD}" fill="${sv.base}"/><path d="M-26,0 Q-12,-14 12,-10 Q27,-7 33,0 Q20,-4 6,-4 Q-10,-4 -26,0 Z" fill="${back}"/><path d="M-20,2 Q-6,9 12,7 Q22,5 29,2 Q20,9 12,9 Q-8,11 -20,2 Z" fill="${PD_B.canvas}" opacity="0.9"/>` +
    `<path d="M-14,-2 q3,3 0,6 M-7,-3 q3,4 0,8 M0,-3 q3,4 0,8 M7,-3 q3,4 0,8 M14,-2.4 q2.6,3.4 0,6.8" fill="none" stroke="${sv.shade}" stroke-width="0.7" opacity="0.8"/>` +
    `<path d="${bodyD}" fill="none" stroke="${sv.ink}" stroke-width="1.4" stroke-linejoin="round"/>` +
    `<path d="M20,-7 Q17,0 20,7" fill="none" stroke="${sv.ink}" stroke-width="0.9"/><path d="M8,2 Q3,6 9,8 Z" fill="${fin.base}" stroke="${fin.ink}" stroke-width="0.8"/>` +
    `<circle cx="26" cy="-2" r="2.3" fill="${PD_B.canvas}" stroke="${sv.ink}" stroke-width="0.8"/><circle cx="26.5" cy="-2" r="1.1" fill="${PD_B.printInk}"/>`;
}
// A ring on the water, born at its centre, widening and gone on one clock.
function pdRing(x, y, rx, dur, begin, col) {
  return `<ellipse cx="${x}" cy="${y}" rx="2" ry="0.6" fill="none" stroke="${col || PD_B.foam}" stroke-width="1.4" opacity="0">${pdEase('rx', `2;${pdN(rx * 0.6)};${rx}`, dur, begin)}${pdEase('ry', `0.6;${pdN(rx * 0.17)};${pdN(rx * 0.28)}`, dur, begin)}${pdEase('opacity', '0;0.85;0', dur, begin)}</ellipse>`;
}

// Scene 3: the pond answers. A silver fish at the top of its leap, the sun on
// its flank, the rings spreading under it; the rod by the bench begins to glow.
STORY_SCENES['pond_3'] = PD_OPEN +
  `<g transform="translate(250,150) scale(1.42) translate(-262,-156)">${pdPond('pd3', {})}` +
  pdBank(9, 50) + pdBench(352, 232, 1.05) + pdRod(424, 233, 392, 112, { drop: 40, glow: true, p: 'pd3' }) + '</g>' +
  // a shaft of sun from the upper left, laid across the water
  `<defs><linearGradient id="pd3-ray" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${PD_B.sun}" stop-opacity="0.5"/><stop offset="1" stop-color="${PD_B.sun}" stop-opacity="0"/></linearGradient>` +
  `<radialGradient id="pd3-glint"><stop offset="0" stop-color="${PD_B.sun}" stop-opacity="0.95"/><stop offset="1" stop-color="${PD_B.sun}" stop-opacity="0"/></radialGradient></defs>` +
  `<path d="M0,0 L120,0 L330,170 L170,190 Z" fill="url(#pd3-ray)" opacity="0.34">${pdEase('opacity', '0.24;0.42;0.24', 6.2)}</path>` +
  // where it broke the surface: rings, a crown of water, falling drops
  pdRing(214, 150, 46, 3.6, 0) + pdRing(214, 150, 50, 3.9, 1.2) + pdRing(214, 150, 42, 4.3, 2.4) + pdRing(214, 150, 22, 2.7, 0.5, PD_B.swell) +
  `<path d="M200,150 Q198,136 204,128 Q205,140 210,146 Q211,128 216,120 Q219,136 220,146 Q225,134 230,130 Q230,142 228,150 Q214,154 200,150 Z" fill="${PD_B.foam}" opacity="0.85"/><path d="M204,150 Q208,140 212,148 Q217,138 221,148 Q224,144 226,150 Z" fill="${PD_B.swell}"/>` +
  [[204, 122, 2.2, 2.1, 0, -6, 20], [226, 112, 1.8, 2.6, 0.4, 8, 30], [240, 126, 1.5, 1.9, 0.9, 10, 18], [192, 132, 1.4, 2.4, 1.3, -10, 14], [250, 104, 1.3, 2.9, 0.2, 6, 34]].map((d) => `<circle cx="${d[0]}" cy="${d[1]}" r="${d[2]}" fill="${PD_B.foam}" opacity="0">${pdMove('translate', `0,0;${pdN(d[5] * 0.5)},-7;${d[5]},${d[6]}`, d[3], d[4])}${pdEase('opacity', '0;0.95;0', d[3], d[4])}</circle>`).join('') +
  // the fish: hung at the top of the arc, turning over slowly
  `<g transform="translate(268,84)"><g>${pdMove('translate', '0,0;3,-6;0,0', 3.8)}<g>${pdMove('rotate', '-30 0 0;-22 0 0;-30 0 0', 3.8)}<g transform="scale(1.5)">${pdFish()}</g></g></g></g>` +
  // the sun catches it
  `<g transform="translate(276,70)"><g>${pdMove('translate', '0,0;3,-6;0,0', 3.8)}<circle r="20" fill="url(#pd3-glint)">${pdEase('opacity', '0.35;1;0.35', 2.3)}</circle>` +
  `<path d="M0,-17 L2.4,-2.4 L17,0 L2.4,2.4 L0,17 L-2.4,2.4 L-17,0 L-2.4,-2.4 Z" fill="${PD_B.sun}" opacity="0.9">${pdEase('opacity', '0.3;1;0.3', 2.3)}</path></g></g>` +
  // water streaming off the tail
  [[226, 108, 1.6, 0, 1.7], [218, 118, 1.3, 0.5, 1.9], [234, 100, 1.1, 0.9, 2.2]].map((d) => `<circle cx="${d[0]}" cy="${d[1]}" r="${d[2]}" fill="${PD_B.foam}" opacity="0">${pdMove('translate', '0,0;-3,12;-5,30', d[4], d[3])}${pdEase('opacity', '0;0.9;0', d[4], d[3])}</circle>`).join('') +
  pdReeds(-10, 70, 264, 9, 150, 51, { dark: true, w: 5, dur: 6.1 }) +
  '</svg>';

// Scene 4: the pond is open. Pads close under the eye, the float sitting
// still, and under them something large drifting past as if by accident.
STORY_SCENES['pond_4'] = PD_OPEN +
  `<g transform="translate(250,150) scale(2.6) translate(-250,-146)">` + pdPond('pd4', {
    // authored in frame units, then set back into the pond's own space, so the
    // big one lies under the pond's pads and not over them
    under: `<g transform="translate(250,146) scale(${pdN(1 / 2.6)}) translate(-250,-150)">` +
      `<defs><linearGradient id="pd4-deep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${PD_B.seaDeep}" stop-opacity="0"/><stop offset="1" stop-color="${PD_B.seaDeep}" stop-opacity="0.5"/></linearGradient></defs>` +
      `<rect x="-200" y="120" width="900" height="200" fill="url(#pd4-deep)"/>` +
      // the big one, under the surface: a shape and no more
      `<g transform="translate(236,184)"><g>${pdMove('translate', '-34,4;30,-2;-34,4', 13)}` +
      `<ellipse cx="6" cy="6" rx="112" ry="22" fill="${PD_B.seaDeep}" opacity="0.3"/>` +
      `<g>${pdMove('rotate', '-7 -70 0;7 -70 0;-7 -70 0', 4.6)}<path d="M-64,0 Q-96,-14 -138,-30 Q-122,0 -138,30 Q-96,14 -64,0 Z" fill="${bcArt.shade(PD_B.seaDeep, 0.45)}" opacity="0.72"/></g>` +
      `<path d="M-78,0 Q-40,-30 30,-26 Q84,-22 108,0 Q84,20 30,24 Q-40,28 -78,0 Z" fill="${bcArt.shade(PD_B.seaDeep, 0.45)}" opacity="0.72"/>` +
      `<path d="M-10,-27 Q16,-46 44,-24 Z M10,25 Q24,40 44,22 Z" fill="${bcArt.shade(PD_B.seaDeep, 0.45)}" opacity="0.62"/>` +
      `<path d="M-50,-8 Q0,-22 70,-12" fill="none" stroke="${PD_B.sea}" stroke-width="3" stroke-linecap="round" opacity="0.4"/>` +
      // one eye, turned up at the float and then very carefully away
      `<circle cx="84" cy="-6" r="4.4" fill="${PD_B.swell}" opacity="0.75"/><circle cx="85" cy="-6" r="2.2" fill="${PD_B.printInk}" opacity="0.8">${pdEase('cx', '85;86.6;85;83.4;85', 6.5)}</circle>` +
      '</g></g>' +
      // slow bubbles it lets go
      [[300, 176, 2, 5.2, 0], [286, 186, 1.5, 6.1, 2.2], [312, 190, 1.2, 4.7, 3.6]].map((b) => `<circle cx="${b[0]}" cy="${b[1]}" r="${b[2]}" fill="none" stroke="${PD_B.foam}" stroke-width="0.8" opacity="0">${pdMove('translate', '0,0;3,-14;-1,-30', b[3], b[4])}${pdEase('opacity', '0;0.8;0', b[3], b[4])}</circle>`).join('') +
      '</g>'
  }) + '</g>' +
  // lily pads over it, large in the foreground and rocking a little
  [[96, 170, 3.2, { rot: 30 }, 5.3], [186, 214, 4.4, { rot: 200, flower: 1 }, 6.4], [330, 232, 5, { rot: 120 }, 5.8], [404, 176, 3.4, { rot: 300, flower: 2 }, 7.1], [250, 148, 2.4, { rot: 80 }, 6.7], [52, 228, 4.2, { rot: 250 }, 4.9], [462, 220, 3.6, { rot: 10 }, 6]].map((q) => `<g>${pdMove('translate', '0,0;0,1.6;0,0', q[4])}${pdPad(q[0], q[1], q[2], q[3])}</g>`).join('') +
  // the float, and the line going up out of frame to the rod
  pdRing(290, 196, 30, 4.8, 0) + pdRing(290, 196, 34, 5.5, 2.4) +
  `<path d="M291,180 Q330,90 420,-6" fill="none" stroke="${PD_B.foam}" stroke-width="0.9" opacity="0.85"/>` +
  `<g transform="translate(290,196)"><g>${pdMove('translate', '0,0;0,2.6;0,0', 2.9)}<g>${pdMove('rotate', '-5 0 0;6 0 0;-5 0 0', 3.7)}` +
  `<path d="M0,-27 L0,-15" stroke="${PD_B.printInk}" stroke-width="1.2" stroke-linecap="round"/><path d="M-6.6,-4 Q-7.4,-15 0,-16.4 Q7.4,-15 6.6,-4 Z" fill="${PD_B.accent}" stroke="${bcArt.ink(PD_B.accent)}" stroke-width="1.2" stroke-linejoin="round"/>` +
  `<path d="M-6.6,-4 Q-7,4 0,6 Q7,4 6.6,-4 Z" fill="${PD_B.canvas}" stroke="${bcArt.ink(PD_B.accent)}" stroke-width="1.2" stroke-linejoin="round"/><path d="M-4.4,-6 Q-5,-12.6 -1,-14.2" fill="none" stroke="${PD_B.accentSoftLit}" stroke-width="1.4" stroke-linecap="round"/></g></g></g>` +
  `<ellipse cx="290" cy="199" rx="11" ry="2.6" fill="${PD_B.foam}" opacity="0.5"/>` +
  // dragonflies still working the surface
  pdDragonfly(140, 120, 1.5, PD_B.deviceReversal, '0,0;30,-8;64,2;30,10;0,0', 9.4) + pdDragonfly(400, 110, 1.2, PD_B.deviceHomophone, '0,0;-26,6;-52,-4;-24,-9;0,0', 11.2, 1.1) +
  pdReeds(-12, 60, 266, 8, 170, 61, { dark: true, w: 5.4, dur: 6.4 }) + pdReeds(452, 514, 266, 7, 150, 63, { dark: true, w: 5.2, dur: 5.5, begin: 1.4 }) +
  '</svg>';
