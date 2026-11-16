// Home story scenes: "A Place to Call Home"
// Keys: house_0 through house_5
//
// ============================================================================
// ONE COTTAGE, ONE ROOM, ONE DESK. Every beat calls the helpers below, so the
// cottage in the closing beat is the cottage from the opening beat and the desk
// in the close-ups is the desk from the wide shot.
//
//   hmCottage(x, floorY, s, o)   the stone cottage, origin at the foot of the
//                                front wall. o.lit: windows and doorway glow.
//                                o.open: the door stands wide, not ajar.
//   hmMeadow(p, o)               sky, valley, hillside, meadow ground
//   hmFlower / hmFlowerBed       wildflowers, each swaying on its own stem base
//   hmRoom(p, o)                 the interior: hearth, window on the valley,
//                                the writing desk. o.lit warms the whole room.
//   hmDesk(x, floorY, o)         kit table-square plus the drawer frieze; legs
//                                come from the kit, so they reach floorY.
//   hmNote / hmKey               the handwritten note and the brass key
//
// Palette: no meadow or interior biome exists in design/tokens.json, so the
// daylight exterior reads the beach biome (the island's only midday outdoor
// palette: its sky, foliage, rock, haze) and the room reads the cafe biome
// (warm interior, dark haze, so distance darkens). Light is upper left.
// The player is never drawn: these are second-person views.
// ============================================================================
const HM_B = bcArt.palette('beach'), HM_C = bcArt.palette('cafe');
const HM_GRASS = bcArt.mix(HM_B.foliage, HM_B.sun, 0.24);
const HM_ROOF = bcArt.mix(HM_B.accentDeep, HM_B.rockShade, 0.42);
const HM_INK = HM_B.printInk, HM_PAPER = HM_B.paper, HM_BRASS = HM_C.trim;
const HM_DARK = bcArt.shade(HM_C.haze, 0.45);
const HM_OPEN = '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">';
const HM_CLUE = 'Head of household? Ring me, I live here! (4)';
const HM_PETALS = [HM_B.accent, HM_B.accentSoft, HM_B.canvas, HM_B.deviceHidden, HM_B.flame, HM_B.accentSoftLit];

function hmN(v) { return Math.round(v * 100) / 100; }
// Seeded random, so a bed of flowers is the same bed every time it is drawn.
function hmRng(seed) {
  let s = (seed || 1) * 9301 + 49297;
  return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}
// Eased loop. One spline per keyTimes interval, always.
function hmEase(attr, values, dur, begin, kt) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(hmN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animate attributeName="${attr}" values="${values}" keyTimes="${kt || times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
// Eased transform loop. Only ever placed on a group with no transform of its own.
function hmMove(type, values, dur, begin, kt) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(hmN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${kt || times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
// Croc treatment: flat base, one shade band, one highlight, ink line last.
function hmBody(d, t, shadeD, hiD, sw) {
  return `<path d="${d}" fill="${t.base}"/>` + (shadeD ? `<path d="${shadeD}" fill="${t.shade || bcArt.shade(t.base)}"/>` : '') + (hiD ? `<path d="${hiD}" fill="${t.hi || bcArt.light(t.base)}"/>` : '') +
    (sw ? `<path d="${d}" fill="none" stroke="${t.ink}" stroke-width="${hmN(sw)}" stroke-linejoin="round"/>` : '');
}
function hmShadow(x, y, rx, ry, op) {
  return `<ellipse data-contact-shadow="1" cx="${hmN(x)}" cy="${hmN(y)}" rx="${hmN(rx)}" ry="${hmN(ry == null ? Math.max(1.2, rx * 0.16) : ry)}" fill="#0a0806" opacity="${op == null ? 0.3 : op}"/>`;
}
// A ribbon through centre points [x, y, halfWidth]: one smooth closed shape, so
// the path cannot break into pieces that do not meet.
function hmRibbon(pts) {
  const P = (i) => pts[Math.max(0, Math.min(pts.length - 1, i))], L = [], R = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    for (let j = 0; j <= 8; j++) {
      if (j === 8 && i < pts.length - 2) continue;
      const t = j / 8, t2 = t * t, t3 = t2 * t;
      const c = (k) => 0.5 * (2 * p1[k] + (p2[k] - p0[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * t3);
      const dv = (k) => 0.5 * ((p2[k] - p0[k]) + 2 * (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t + 3 * (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * t2);
      const x = c(0), y = c(1), w = c(2), dx = dv(0), dy = dv(1), len = Math.sqrt(dx * dx + dy * dy) || 1;
      // the ground plane is foreshortened, so the width is laid mostly along x
      L.push([x - w * Math.abs(dy) / len - w * 0.35, y + w * 0.12 * (dx / len)]);
      R.push([x + w * Math.abs(dy) / len + w * 0.35, y - w * 0.12 * (dx / len)]);
    }
  }
  return 'M' + L.concat(R.reverse()).map((p) => hmN(p[0]) + ',' + hmN(p[1])).join(' L') + ' Z';
}

// ----------------------------------------------------------------------------
// WILDFLOWERS. Local origin is the foot of the stem. The sway turns about that
// foot on an inner group, so the placement transform is never animated.
// ----------------------------------------------------------------------------
function hmFlower(x, y, s, kind, col, dur, begin, dark) {
  const stem = dark ? bcArt.shade(HM_B.foliageDeep, 0.3) : HM_B.foliageDeep, leaf = dark ? HM_B.foliageDeep : HM_B.foliage;
  const c = dark ? bcArt.shade(col, 0.22) : col, hi = bcArt.light(c, 0.4);
  let head;
  if (kind === 1) {
    // bell
    head = `<path d="M-3.4,-19.5 Q-4.2,-25.5 0,-26.5 Q4.2,-25.5 3.4,-19.5 Q1.7,-21 0,-19.6 Q-1.7,-21 -3.4,-19.5 Z" fill="${c}"/><path d="M-2.6,-21 Q-3,-24.6 -0.6,-25.6 Q-1.6,-23.4 -1.5,-20.6 Z" fill="${hi}"/>`;
  } else if (kind === 2) {
    // spike
    head = [[0, -19, 2.3], [0.5, -22.4, 2.1], [0.2, -25.6, 1.8], [0.6, -28.4, 1.4], [0.3, -30.6, 1]].map((q) => `<ellipse cx="${q[0]}" cy="${q[1]}" rx="${q[2]}" ry="${hmN(q[2] * 0.85)}" fill="${c}"/>`).join('') +
      `<ellipse cx="-0.5" cy="-22.6" rx="0.8" ry="0.7" fill="${hi}"/><ellipse cx="-0.3" cy="-25.8" rx="0.7" ry="0.6" fill="${hi}"/>`;
  } else {
    // five petals round a gold eye
    head = [0, 72, 144, 216, 288].map((a) => { const r = a * Math.PI / 180; return `<ellipse cx="${hmN(Math.sin(r) * 3.1)}" cy="${hmN(-22 - Math.cos(r) * 3.1)}" rx="2.5" ry="2.5" fill="${a === 288 || a === 0 ? hi : c}"/>`; }).join('') +
      `<circle cx="0" cy="-22" r="1.9" fill="${dark ? bcArt.shade(HM_B.gold, 0.3) : HM_B.flame}"/>`;
  }
  return `<g transform="translate(${hmN(x)},${hmN(y)}) scale(${hmN(s)})"><g>${hmMove('rotate', '-3.5 0 0;3 0 0;-3.5 0 0', dur, begin)}` +
    `<path d="M0,0 Q1.8,-10 0,-20" fill="none" stroke="${stem}" stroke-width="1.2" stroke-linecap="round"/>` +
    `<path d="M0.4,-6 Q5.5,-8.5 7,-13.5 Q2.4,-12 0.6,-8 Z" fill="${leaf}"/><path d="M0.2,-10 Q-4.6,-11.5 -5.8,-16 Q-1.6,-15 0.4,-11.6 Z" fill="${stem}"/>${head}</g></g>`;
}
// A bed: n flowers scattered inside a box, nearer ones larger and drawn later.
function hmFlowerBed(x0, x1, y0, y1, n, seed, o) {
  o = o || {};
  const r = hmRng(seed), list = [];
  for (let i = 0; i < n; i++) list.push([x0 + r() * (x1 - x0), y0 + r() * (y1 - y0), Math.floor(r() * 3), Math.floor(r() * HM_PETALS.length), r()]);
  list.sort((a, b) => a[1] - b[1]);
  return list.map((f, i) => hmFlower(f[0], f[1], (o.s0 || 0.3) + ((o.s1 || 1) - (o.s0 || 0.3)) * ((f[1] - (o.ya || y0)) / ((o.yb || y1) - (o.ya || y0) || 1)), f[2], HM_PETALS[f[3]], hmN(3.3 + f[4] * 2.6), hmN(f[4] * 3.1), o.dark)).join('');
}
// Far bloom: specks of petal colour with no stems, for the meadow behind.
function hmSpecks(x0, x1, y0, y1, n, seed) {
  const r = hmRng(seed);
  let s = '';
  for (let i = 0; i < n; i++) {
    const y = y0 + r() * (y1 - y0), k = (y - y0) / (y1 - y0 || 1);
    s += `<circle cx="${hmN(x0 + r() * (x1 - x0))}" cy="${hmN(y)}" r="${hmN(0.6 + k * 0.9)}" fill="${bcArt.haze(HM_PETALS[Math.floor(r() * HM_PETALS.length)], 'mid', 'beach')}" opacity="${hmN(0.55 + k * 0.35)}"/>`;
  }
  return s;
}
function hmTufts(x0, x1, y0, y1, n, seed, col) {
  const r = hmRng(seed);
  let d = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0), k = 0.5 + ((y - y0) / (y1 - y0 || 1)) * 0.9;
    d += `M${hmN(x - 2.4 * k)},${hmN(y)} l${hmN(-0.6 * k)},${hmN(-5 * k)} M${hmN(x)},${hmN(y)} l${hmN(0.5 * k)},${hmN(-7 * k)} M${hmN(x + 2.4 * k)},${hmN(y)} l${hmN(1.6 * k)},${hmN(-4.6 * k)} `;
  }
  return `<path d="${d}" fill="none" stroke="${col}" stroke-width="1" stroke-linecap="round" opacity="0.7"/>`;
}

// ----------------------------------------------------------------------------
// THE COTTAGE. Three-quarter view: long stone front toward the light, the
// right gable end in shade, roof ridge running left to right, chimney at the
// right end of the ridge. Ivy on the right of the front wall and up the gable.
// ----------------------------------------------------------------------------
function hmIvy(pts, seed, C) {
  const r = hmRng(seed);
  let back = '', front = '', vine = 'M' + pts.map((p) => p[0] + ',' + p[1]).join(' L');
  for (let i = 0; i < pts.length - 1; i++) {
    for (let j = 0; j < 7; j++) {
      const t = j / 7, x = pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t + (r() - 0.5) * 9, y = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t + (r() - 0.5) * 5, q = 1.7 + r() * 1.5;
      const leaf = `<path d="M${hmN(x)},${hmN(y - q)} Q${hmN(x + q * 1.2)},${hmN(y - q * 0.6)} ${hmN(x + q * 0.2)},${hmN(y + q)} Q${hmN(x - q * 1.2)},${hmN(y + q * 0.2)} ${hmN(x)},${hmN(y - q)} Z" fill="`;
      if (r() < 0.45) back += leaf + C(HM_B.foliageDeep) + '"/>'; else front += leaf + C(r() < 0.3 ? bcArt.light(HM_B.foliage, 0.25) : HM_B.foliage) + '"/>';
    }
  }
  return `<path d="${vine}" fill="none" stroke="${C(bcArt.shade(HM_B.foliageDeep, 0.3))}" stroke-width="0.8" stroke-linejoin="round"/>` + back + front;
}
function hmWindow(cx, cy, o, C, sw) {
  const wd = bcArt.tone(C(HM_C.wood)), st = bcArt.tone(C(HM_B.rockLit)), glow = HM_B.flame;
  let s = '';
  // shutters, folded back against the stone
  s += hmBody(`M${cx - 15},${cy - 9} L${cx - 9},${cy - 9} L${cx - 9},${cy + 9} L${cx - 15},${cy + 9} Z`, bcArt.tone(C(HM_B.seaDeep)), null, null, sw * 0.7);
  s += hmBody(`M${cx + 9},${cy - 9} L${cx + 15},${cy - 9} L${cx + 15},${cy + 9} L${cx + 9},${cy + 9} Z`, bcArt.tone(C(bcArt.shade(HM_B.seaDeep, 0.2))), null, null, sw * 0.7);
  s += `<path d="M${cx - 14},${cy - 4} h4 M${cx - 14},${cy + 3} h4 M${cx + 10},${cy - 4} h4 M${cx + 10},${cy + 3} h4" stroke="${C(bcArt.shade(HM_B.seaDeep, 0.4))}" stroke-width="0.6"/>`;
  s += `<path d="M${cx - 9},${cy - 9} L${cx + 9},${cy - 9} L${cx + 9},${cy + 9} L${cx - 9},${cy + 9} Z" fill="${wd.shade}"/>`;
  if (o.lit) {
    s += `<path d="M${cx - 7},${cy - 7} L${cx + 7},${cy - 7} L${cx + 7},${cy + 7} L${cx - 7},${cy + 7} Z" fill="${glow}">${hmEase('opacity', '0.86;1;0.9;0.86', o.flick || 3.7, o.begin || 0)}</path>`;
    s += `<path d="M${cx - 7},${cy + 1} L${cx + 7},${cy + 1} L${cx + 7},${cy + 7} L${cx - 7},${cy + 7} Z" fill="${HM_C.glow}" opacity="0.4"/>`;
  } else {
    s += `<path d="M${cx - 7},${cy - 7} L${cx + 7},${cy - 7} L${cx + 7},${cy + 7} L${cx - 7},${cy + 7} Z" fill="${C(HM_B.glass)}"/>`;
    s += `<path d="M${cx - 7},${cy - 7} L${cx + 1},${cy - 7} L${cx - 7},${cy + 3} Z" fill="${C(HM_B.skyBottom)}" opacity="0.32"/>`;
  }
  s += `<path d="M${cx},${cy - 7} L${cx},${cy + 7} M${cx - 7},${cy} L${cx + 7},${cy}" stroke="${wd.shade}" stroke-width="1.3"/>`;
  s += `<path d="M${cx - 9},${cy - 9} L${cx + 9},${cy - 9} L${cx + 9},${cy + 9} L${cx - 9},${cy + 9} Z" fill="none" stroke="${wd.ink}" stroke-width="${hmN(sw)}"/>`;
  // sill
  s += hmBody(`M${cx - 11},${cy + 9} L${cx + 11},${cy + 9} L${cx + 12},${cy + 12} L${cx - 12},${cy + 12} Z`, { base: st.hi, ink: st.ink }, null, null, sw * 0.7);
  return s;
}
function hmCottage(x, y, s, o) {
  o = o || {};
  const depth = o.depth || 'mid', C = (h) => bcArt.haze(h, depth, 'beach'), sw = (depth === 'fg' ? 1.6 : 1) / s;
  const st = bcArt.tone(C(HM_B.rockLit)), rf = bcArt.tone(C(HM_ROOF)), wd = bcArt.tone(C(HM_C.wood)), dark = C(HM_DARK);
  let g = '';
  // the cottage's own cast shadow, thrown right and a little forward
  g += `<path d="M-50,0 L80,-6 L112,2 L96,8 L-40,6 Z" fill="#0a0806" opacity="0.16"/>` + hmShadow(8, 1, 70, 5, 0.26);
  // chimney, behind the ridge
  g += hmBody('M38,-80 L52,-80 L52,-109 L38,-109 Z', st, 'M47,-80 L52,-80 L52,-109 L47,-109 Z', 'M38,-80 L39.6,-80 L39.6,-109 L38,-109 Z', sw);
  g += hmBody('M36,-109 L54,-109 L54,-113 L36,-113 Z', { base: st.hi, ink: st.ink }, null, null, sw);
  g += `<path d="M40,-100 h6 M43,-93 h7 M39,-87 h6" stroke="${st.shade}" stroke-width="0.6" opacity="0.7"/>`;
  // right gable end, in shade
  g += hmBody('M52,0 L78,-7 L78,-51 L65,-88 L52,-46 Z', { base: st.shade, ink: st.ink }, null, null, sw);
  g += `<path d="M56,-12 l7,-2 M66,-24 l8,-2 M58,-36 l7,-2 M63,-52 l7,-2 M62,-66 l5,-1.4" stroke="${st.ink}" stroke-width="0.6" opacity="0.45"/>`;
  g += `<path d="M61,-40 L69,-42 L69,-56 L61,-54 Z" fill="${o.lit ? HM_B.flame : C(HM_B.glass)}" stroke="${wd.ink}" stroke-width="${hmN(sw * 0.8)}"/>`;
  // far roof slope, seen edge on above the gable
  g += `<path d="M67,-90 L82,-50 L78,-49 L65,-86 Z" fill="${rf.shade}" stroke="${rf.ink}" stroke-width="${hmN(sw * 0.8)}" stroke-linejoin="round"/>`;
  // front wall
  g += hmBody('M-52,0 L52,0 L52,-46 L-52,-46 Z', st, null, 'M-52,0 L-49,0 L-49,-46 L-52,-46 Z', sw);
  g += `<path d="M-44,-8 h9 q2,0 2,2 M-30,-12 h10 M-6,-40 h10 M12,-8 h9 q2,0 2,-2 M14,-36 h8 M-46,-38 h7 M34,-6 h10 M40,-40 h8 M-24,-40 h8 M-48,-22 h4 M22,-12 h4" fill="none" stroke="${st.shade}" stroke-width="0.7" stroke-linecap="round" opacity="0.75"/>`;
  // quoins at the lit corner
  g += `<path d="M-52,-6 h6 v-7 h-6 M-52,-20 h8 v-7 h-8 M-52,-34 h6 v-7 h-6" fill="none" stroke="${st.shade}" stroke-width="0.7" opacity="0.8"/>`;
  // eave shadow on the wall
  g += `<path d="M-52,-46 L52,-46 L52,-38.5 L-52,-38.5 Z" fill="${st.ink}" opacity="0.28"/>`;
  // roof, front slope
  g += hmBody('M-59,-41 L55,-41 L67,-90 L-42,-90 Z', rf, 'M-59,-41 L55,-41 L56.5,-47 L-57,-47 Z', 'M-43.4,-86 L66,-86 L67,-90 L-42,-90 Z', sw);
  g += `<path d="M-54.8,-53 L58,-53 M-51,-64 L60.8,-64 M-47,-75 L63.4,-75" stroke="${rf.shade}" stroke-width="0.8" opacity="0.7"/>`;
  g += `<path d="M-40,-41 l1.6,-6 M-20,-47 l1.6,-6 M4,-41 l1.6,-6 M28,-47 l1.6,-6 M-30,-53 l2.8,-11 M0,-53 l2.8,-11 M34,-53 l2.8,-11 M-16,-64 l2.8,-11 M18,-64 l2.8,-11 M48,-64 l2.8,-11 M-34,-75 l2.8,-11 M2,-75 l2.8,-11 M36,-75 l2.8,-11" stroke="${rf.shade}" stroke-width="0.6" opacity="0.55"/>`;
  // windows
  g += hmWindow(-34, -22, { lit: o.lit, flick: 4.1 }, C, sw) + hmWindow(30, -22, { lit: o.lit, flick: 3.3, begin: 0.9 }, C, sw);
  // flower box under the left window
  g += hmBody('M-44,-10 L-24,-10 L-25,-5.5 L-43,-5.5 Z', wd, null, null, sw * 0.7);
  g += [[-41, HM_B.accent], [-37, HM_B.canvas], [-33, HM_B.accentSoft], [-29, HM_B.flame], [-26.5, HM_B.accent]].map((q) => `<circle cx="${q[0]}" cy="-11.6" r="1.7" fill="${C(q[1])}"/>`).join('') +
    `<path d="M-43,-10.4 q2,-2.4 4,0 q2,-2.4 4,0 q2,-2.4 4,0 q2,-2.4 4,0 q1.5,-2 3,0" fill="none" stroke="${C(HM_B.foliage)}" stroke-width="1"/>`;
  // door: stone surround, the dark of the room, then the leaf
  g += hmBody('M-17,0 L-17,-33 Q-4,-42 9,-33 L9,0 Z', { base: st.hi, ink: st.ink }, null, null, sw);
  if (o.lit) {
    g += `<path d="M-14,0 L-14,-32 Q-4,-39 6,-32 L6,0 Z" fill="${HM_B.flame}"/><path d="M-14,0 L-14,-14 L6,-14 L6,0 Z" fill="${HM_C.glow}" opacity="0.45"/>`;
  } else {
    g += `<path d="M-14,0 L-14,-32 Q-4,-39 6,-32 L6,0 Z" fill="${dark}"/>`;
  }
  if (o.open) {
    // swung wide: the leaf seen nearly edge on against the left jamb
    g += hmBody('M-14,0 L-8.5,-1.6 L-8.5,-33.6 Q-11,-34.8 -14,-32 Z', { base: wd.shade, ink: wd.ink }, null, null, sw * 0.8);
  } else {
    // ajar: the leaf stops short of the right jamb and a dark sliver shows
    g += hmBody('M-14,0 L-0.6,-1.1 L-0.6,-35 Q-7,-37.2 -14,-32 Z', wd, 'M-4.4,-0.8 L-0.6,-1.1 L-0.6,-35 L-4.4,-36 Z', null, sw * 0.8);
    g += `<path d="M-9.4,-0.3 L-9.4,-34.6 M-4.8,-0.7 L-4.8,-36" stroke="${wd.shade}" stroke-width="0.6" opacity="0.8"/>`;
    g += `<circle cx="-2.6" cy="-17" r="1.2" fill="${C(HM_BRASS)}" stroke="${wd.ink}" stroke-width="0.4"/>`;
  }
  // doorstep
  g += hmBody('M-19,0 L11,0 L14,4.5 L-22,4.5 Z', { base: st.hi, ink: st.ink }, null, null, sw * 0.8);
  // ivy
  g += hmIvy([[48, 0], [46, -14], [50, -28], [44, -39], [34, -43], [20, -39]], 5, C) + hmIvy([[60, -2], [65, -20], [72, -34], [69, -50], [65, -68]], 9, C) + hmIvy([[-50, 0], [-49, -14], [-46, -30]], 13, C);
  // smoke: each puff rises, drifts, swells and thins on one shared clock
  const puff = (dur, begin, dx) => `<ellipse cx="45" cy="-115" rx="3.4" ry="3" fill="${C(HM_B.steam)}" opacity="0">` +
    hmMove('translate', `0,0;${dx},-20;${hmN(dx * 0.3)},-44`, dur, begin) + hmEase('opacity', '0;0.8;0', dur, begin) + hmEase('rx', '3.4;6.5;10', dur, begin) + hmEase('ry', '3;5.4;7.6', dur, begin) + '</ellipse>';
  g += puff(6.4, 0, 9) + puff(6.9, 2.1, 12) + puff(5.9, 4.3, 7) + puff(7.3, 1.2, 14) + puff(7.8, 4.9, 10) + puff(5.6, 3.2, 6);
  return `<g transform="translate(${x},${y}) scale(${s})">${g}</g>`;
}

// ----------------------------------------------------------------------------
// THE MEADOW: sky, far valley, the hillside the cottage is tucked against, and
// the meadow ground. o.hill: [x0, footY, crestX, crestY]. o.horizon: ground top.
// ----------------------------------------------------------------------------
function hmCloud(x, y, s, dur, dx) {
  return `<g transform="translate(${x},${y}) scale(${s})"><g opacity="0.82">${hmMove('translate', `0,0;${dx},0;0,0`, dur)}` +
    `<path d="M-30,6 Q-34,-4 -22,-5 Q-20,-15 -7,-12 Q0,-21 12,-13 Q24,-15 26,-5 Q36,-4 32,6 Z" fill="${HM_B.canvas}"/><path d="M-30,6 Q-10,1 32,6 Z" fill="${HM_B.headland}" opacity="0.45"/></g></g>`;
}
function hmMeadow(p, o) {
  o = o || {};
  const hy = o.horizon || 164, H = (h, d) => bcArt.haze(h, d, 'beach');
  let s = bcArt.sky('beach', p);
  s += `<defs><radialGradient id="${p}-sun" cx="0.08" cy="0" r="0.9"><stop offset="0" stop-color="${HM_B.sun}" stop-opacity="0.62"/><stop offset="1" stop-color="${HM_B.sun}" stop-opacity="0"/></radialGradient>` +
    `<linearGradient id="${p}-grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${H(HM_GRASS, 'bg')}"/><stop offset="0.45" stop-color="${HM_GRASS}"/><stop offset="1" stop-color="${bcArt.mix(HM_GRASS, HM_B.foliage, 0.6)}"/></linearGradient></defs>`;
  s += `<rect width="500" height="200" fill="url(#${p}-sun)"/>`;
  s += hmCloud(120, 40, 1, 46, 26) + hmCloud(300, 24, 0.7, 61, -18) + hmCloud(430, 58, 0.55, 53, 14);
  // far valley, three ridges, each a band lighter than the one in front
  s += `<path d="M0,${hy - 38} Q50,${hy - 56} 110,${hy - 44} Q170,${hy - 66} 250,${hy - 46} Q320,${hy - 60} 400,${hy - 42} Q460,${hy - 50} 500,${hy - 40} L500,${hy + 6} L0,${hy + 6} Z" fill="${H(HM_B.headland, 'bg')}"/>`;
  s += `<path d="M0,${hy - 20} Q70,${hy - 36} 150,${hy - 24} Q230,${hy - 38} 310,${hy - 22} L330,${hy + 6} L0,${hy + 6} Z" fill="${H(HM_B.foliage, 'far')}"/>`;
  s += `<path d="M0,${hy - 6} Q90,${hy - 18} 190,${hy - 8} Q260,${hy - 14} 330,${hy - 4} L330,${hy + 8} L0,${hy + 8} Z" fill="${H(HM_GRASS, 'bg')}"/>`;
  // a ribbon of river down in the valley, catching the sky
  s += `<path d="M40,${hy - 10} Q90,${hy - 14} 130,${hy - 9} Q170,${hy - 5} 214,${hy - 8}" fill="none" stroke="${HM_B.swell}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>`;
  // the hillside
  const hl = o.hill || [176, hy + 4, 420, 56];
  const hd = `M${hl[0]},${hl[1]} Q${hl[0] + 70},${hl[1] - 22} ${hmN((hl[0] + hl[2]) / 2 + 16)},${hmN((hl[1] + hl[3]) / 2 - 8)} Q${hl[2] - 50},${hl[3] + 6} ${hl[2]},${hl[3]} Q${hl[2] + 50},${hl[3] - 6} 520,${hl[3] + 6} L520,${hl[1] + 30} L${hl[0]},${hl[1] + 30} Z`;
  const hill = bcArt.tone(H(bcArt.mix(HM_GRASS, HM_B.foliage, 0.35), 'mid'));
  s += `<path d="${hd}" fill="${hill.base}"/>`;
  s += `<path d="M${hl[2] - 30},${hl[3] + 14} Q${hl[2] + 30},${hl[3] + 2} 520,${hl[3] + 20} L520,${hl[1] + 30} L${hl[2] - 90},${hl[1] + 30} Q${hl[2] - 20},${hmN((hl[1] + hl[3]) / 2 + 10)} ${hl[2] - 30},${hl[3] + 14} Z" fill="${hill.shade}" opacity="0.55"/>`;
  s += `<path d="M${hl[0] + 40},${hl[1] - 9} Q${hl[0] + 90},${hl[1] - 26} ${hmN((hl[0] + hl[2]) / 2 + 16)},${hmN((hl[1] + hl[3]) / 2 - 8)} Q${hl[2] - 50},${hl[3] + 6} ${hl[2]},${hl[3]} Q${hl[2] - 60},${hl[3] + 16} ${hmN((hl[0] + hl[2]) / 2 + 12)},${hmN((hl[1] + hl[3]) / 2 + 2)} Q${hl[0] + 90},${hl[1] - 16} ${hl[0] + 40},${hl[1] - 9} Z" fill="${hill.hi}" opacity="0.7"/>`;
  // pines up the hill, kit props a plane back
  (o.pines || []).forEach((q) => { s += bcArt.prop('pine', { x: q[0], y: q[1], h: q[2], tiers: 3, depth: q[3] || 'bg', biome: 'beach' }); });
  // meadow ground
  s += `<rect x="0" y="${hy}" width="500" height="${260 - hy}" fill="url(#${p}-grass)"/>`;
  s += `<path d="M0,${hy} Q120,${hy - 5} 250,${hy + 1} Q380,${hy + 5} 500,${hy} L500,${hy + 8} L0,${hy + 8} Z" fill="${H(HM_GRASS, 'bg')}"/>`;
  return s;
}
// The worn path: a pale ribbon with a darker verge and a lit middle.
function hmPath(pts) {
  const verge = pts.map((q) => [q[0], q[1], q[2] * 1.22 + 1]), mid = pts.map((q) => [q[0] - q[2] * 0.12, q[1], q[2] * 0.5]);
  return `<path d="${hmRibbon(verge)}" fill="${bcArt.mix(HM_B.sandShadow, HM_B.foliage, 0.35)}" opacity="0.8"/><path d="${hmRibbon(pts)}" fill="${HM_B.sandWet}"/><path d="${hmRibbon(mid)}" fill="${HM_B.sand}" opacity="0.7"/>`;
}
// Foreground grass: dark blades cropped by the bottom of the frame.
function hmBlades(x0, x1, n, seed, hmax) {
  const r = hmRng(seed);
  let a = '', b = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + (x1 - x0) * (i + r() * 0.8) / n, h = hmax * (0.45 + r() * 0.55), lean = (r() - 0.4) * 16, w = 2.2 + r() * 2.2;
    const d = `M${hmN(x - w)},264 Q${hmN(x - w * 0.4 + lean * 0.3)},${hmN(264 - h * 0.6)} ${hmN(x + lean)},${hmN(264 - h)} Q${hmN(x + w * 0.6 + lean * 0.4)},${hmN(264 - h * 0.5)} ${hmN(x + w)},264 Z`;
    if (i % 2) a += d + ' '; else b += d + ' ';
  }
  return `<path d="${a}" fill="${bcArt.shade(HM_B.foliageDeep, 0.28)}"/><path d="${b}" fill="${HM_B.foliageDeep}"/>`;
}
function hmButterfly(x, y, col, dur, path) {
  return `<g transform="translate(${x},${y})"><g>${hmMove('translate', path, dur)}<g>${hmMove('scale', '1 1;0.25 1;1 1', 0.42)}` +
    `<path d="M0,0 Q-5,-6 -6,-1 Q-5,3 0,0 Z M0,0 Q5,-6 6,-1 Q5,3 0,0 Z" fill="${col}"/></g><path d="M0,-1.6 L0,1.8" stroke="${HM_INK}" stroke-width="0.8" stroke-linecap="round"/></g></g>`;
}

// Scene 0: the path through the wildflowers, the cottage against the hill,
// smoke from the chimney, the door a hand's width open.
const HM_PATH0 = [[322, 182, 6], [300, 188, 8], [258, 193, 11], [226, 201, 14], [240, 213, 18], [272, 225, 23], [262, 240, 31], [206, 252, 42], [150, 268, 56]];
STORY_SCENES['house_0'] = HM_OPEN +
  hmMeadow('hm0', { horizon: 164, hill: [170, 170, 426, 50], pines: [[388, 86, 30, 'bg'], [408, 76, 36, 'bg'], [452, 70, 44, 'bg'], [476, 78, 38, 'bg'], [236, 150, 26, 'bg'], [70, 160, 22, 'far'], [86, 161, 17, 'far'], [20, 163, 20, 'far']] }) +
  hmSpecks(0, 300, 170, 200, 70, 3) + hmSpecks(360, 500, 186, 206, 26, 8) + hmTufts(0, 500, 176, 236, 46, 4, HM_B.foliage) +
  hmCottage(326, 178, 1, {}) +
  // the hill's shoulder comes forward round the gable: the cottage is tucked in
  `<path d="M386,180 Q400,160 430,154 Q470,150 500,158 L500,196 L380,196 Z" fill="${bcArt.haze(bcArt.mix(HM_GRASS, HM_B.foliage, 0.3), 'mid', 'beach')}"/><path d="M392,174 Q404,160 430,155 Q452,152 474,154 Q440,160 420,166 Q402,172 392,174 Z" fill="${bcArt.light(HM_GRASS, 0.2)}" opacity="0.5"/>` +
  hmSpecks(392, 500, 162, 190, 18, 12) +
  hmPath(HM_PATH0) +
  bcArt.prop('rock', { x: 214, y: 208, size: 15, seed: 5, depth: 'mid', biome: 'beach' }) + bcArt.prop('rock', { x: 302, y: 232, size: 21, seed: 2, depth: 'mid', biome: 'beach' }) +
  hmFlowerBed(120, 232, 196, 232, 16, 21, { s0: 0.42, s1: 0.86 }) + hmFlowerBed(296, 470, 204, 238, 18, 33, { s0: 0.5, s1: 0.9 }) + hmFlowerBed(8, 120, 190, 226, 9, 41, { s0: 0.4, s1: 0.8 }) +
  hmButterfly(196, 186, HM_B.canvas, 9.2, '0,0;14,-9;30,-2;16,6;0,0') + hmButterfly(388, 206, HM_B.flame, 11.6, '0,0;-12,-8;-26,2;-10,7;0,0') +
  bcArt.prop('rock', { x: 418, y: 252, size: 40, seed: 7, biome: 'beach' }) +
  hmFlowerBed(292, 500, 248, 266, 12, 57, { s0: 1.25, s1: 1.7 }) + hmFlowerBed(0, 96, 246, 266, 7, 63, { s0: 1.25, s1: 1.75 }) +
  hmBlades(0, 120, 16, 2, 44) + hmBlades(330, 500, 20, 6, 38) + hmFlowerBed(10, 70, 268, 276, 3, 71, { s0: 2, s1: 2.3, dark: true }) + hmFlowerBed(430, 496, 268, 276, 3, 77, { s0: 2, s1: 2.3, dark: true }) +
  '</svg>';

// ----------------------------------------------------------------------------
// THE NOTE and THE KEY. Drawn in local units and placed by the caller: the
// same two objects on the desk in the wide shot and in both close-ups.
// ----------------------------------------------------------------------------
// Handwriting that cannot be read: looped strokes broken into words.
function hmScribble(x, y, len, seed, sz) {
  const r = hmRng(seed);
  let d = '', cx = x;
  while (cx < x + len - sz * 2) {
    const w = sz * (2 + Math.floor(r() * 5));
    d += `M${hmN(cx)},${hmN(y)}`;
    for (let k = 0; k < w / sz && cx < x + len - sz; k++) { d += ` q${hmN(sz * 0.25)},${hmN(-sz * (0.7 + r() * 0.9))} ${hmN(sz * 0.5)},0 t${hmN(sz * 0.5)},${hmN((r() - 0.5) * sz * 0.3)}`; cx += sz; }
    cx += sz * 1.1;
  }
  return d;
}
// The key: bow with a trefoil, collar, shaft, a two-tooth bit. Origin at the
// centre of the bow, shaft along +x, 46 long.
function hmKey(sw, flat) {
  const b = flat ? { base: flat, shade: flat, hi: flat, ink: flat } : bcArt.tone(HM_BRASS);
  return `<path d="M0,-10 A10,10 0 1 0 0.01,-10 Z M0,-5.4 A5.4,5.4 0 1 1 -0.01,-5.4 Z" fill="${b.base}" fill-rule="evenodd" stroke="${b.ink}" stroke-width="${sw}" stroke-linejoin="round"/>` +
    `<path d="M-7.4,-6.6 A10,10 0 0 1 4,-9.2 L3.2,-7.6 A8.2,8.2 0 0 0 -6.2,-5.4 Z" fill="${b.hi}"/><path d="M8.2,5.8 A10,10 0 0 1 -5,8.7 L-4.2,7 A8.2,8.2 0 0 0 6.8,4.6 Z" fill="${b.shade}"/>` +
    `<path d="M9.4,-2.2 L42,-2.2 L42,2.2 L9.4,2.2 Z" fill="${b.base}" stroke="${b.ink}" stroke-width="${sw}" stroke-linejoin="round"/><path d="M10,-1.6 L41.4,-1.6 L41.4,-0.5 L10,-0.5 Z" fill="${b.hi}"/>` +
    `<path d="M11,-3.6 L15,-3.6 L15,3.6 L11,3.6 Z M17.4,-3 L19.4,-3 L19.4,3 L17.4,3 Z" fill="${b.base}" stroke="${b.ink}" stroke-width="${sw}" stroke-linejoin="round"/>` +
    `<path d="M32,2.2 L32,10.6 L35.4,10.6 L35.4,7 L37.6,7 L37.6,10.6 L41.4,10.6 L41.4,2.2 Z" fill="${b.base}" stroke="${b.ink}" stroke-width="${sw}" stroke-linejoin="round"/><path d="M38.8,2.4 L41.2,2.4 L41.2,10.4 L38.8,10.4 Z" fill="${b.shade}"/>`;
}
// The note, w by h, origin top left. o.clue: the puzzle line is written under
// the message. o.lines: how many lines of message. Georgia: it is paper.
function hmNote(w, h, o) {
  o = o || {};
  const p = bcArt.tone(HM_PAPER), sz = o.sz || 5;
  // paper cockles: the edge is not ruled
  const edge = `M2,3 Q${hmN(w * 0.25)},-1 ${hmN(w * 0.5)},2 Q${hmN(w * 0.76)},4 ${w - 2},1 Q${w + 1},${hmN(h * 0.3)} ${w - 1},${hmN(h * 0.6)} Q${w + 1},${hmN(h * 0.85)} ${w - 3},${h - 2} Q${hmN(w * 0.7)},${h + 1} ${hmN(w * 0.42)},${h - 1} Q${hmN(w * 0.2)},${h - 3} 3,${h - 1} Q-1,${hmN(h * 0.7)} 1,${hmN(h * 0.42)} Q-1,${hmN(h * 0.2)} 2,3 Z`;
  let s = `<path d="${edge}" fill="${p.base}"/>`;
  s += `<path d="M${hmN(w * 0.62)},${hmN(h * 0.5)} Q${w + 1},${hmN(h * 0.56)} ${w - 1},${hmN(h * 0.6)} Q${w + 1},${hmN(h * 0.85)} ${w - 3},${h - 2} Q${hmN(w * 0.7)},${h + 1} ${hmN(w * 0.42)},${h - 1} Q${hmN(w * 0.56)},${hmN(h * 0.8)} ${hmN(w * 0.62)},${hmN(h * 0.5)} Z" fill="${p.shade}" opacity="0.3"/>`;
  s += `<path d="M2,3 Q${hmN(w * 0.25)},-1 ${hmN(w * 0.5)},2 L${hmN(w * 0.46)},${hmN(h * 0.1)} Q${hmN(w * 0.2)},${hmN(h * 0.06)} ${hmN(w * 0.03)},${hmN(h * 0.16)} Z" fill="${p.hi}" opacity="0.8"/>`;
  // two fold lines: it was carried in a pocket before it was left here
  s += `<path d="M${hmN(w * 0.02)},${hmN(h * 0.5)} Q${hmN(w * 0.5)},${hmN(h * 0.48)} ${hmN(w * 0.98)},${hmN(h * 0.51)}" fill="none" stroke="${p.shade}" stroke-width="${hmN(sz * 0.12)}" opacity="0.7"/>`;
  s += `<path d="${edge}" fill="none" stroke="${p.ink}" stroke-width="${o.sw || 1}" stroke-linejoin="round"/>`;
  const n = o.lines || 4, x0 = w * 0.1, top = o.top || h * 0.2, gap = o.gap || (h * 0.6) / n;
  for (let i = 0; i < n; i++) s += `<path d="${hmScribble(x0 + (i === 0 ? w * 0.06 : 0), top + i * gap, w * (i === n - 1 ? 0.5 : (o.run || 0.8)), 11 + i * 7 + (o.seed || 0), sz)}" fill="none" stroke="${HM_INK}" stroke-width="${hmN(sz * 0.2)}" stroke-linecap="round" stroke-linejoin="round" opacity="0.72"/>`;
  if (o.clue) {
    s += `<path d="M${hmN(w * 0.36)},${hmN(o.clueY - o.clueSize * 1.75)} q${hmN(w * 0.07)},${hmN(-sz * 0.5)} ${hmN(w * 0.14)},0 t${hmN(w * 0.14)},0" fill="none" stroke="${HM_INK}" stroke-width="${hmN(sz * 0.16)}" stroke-linecap="round" opacity="0.5"/>`;
    s += `<text x="${hmN(w / 2)}" y="${o.clueY}" font-family="Georgia,serif" font-style="italic" font-size="${o.clueSize}" letter-spacing="0" text-anchor="middle" fill="${bcArt.shade(HM_INK, 0.35)}">${HM_CLUE}</text>`;
    s += `<path d="M${hmN(w * 0.3)},${hmN(o.clueY + o.clueSize * 0.9)} q${hmN(w * 0.1)},${hmN(sz * 0.5)} ${hmN(w * 0.2)},0 t${hmN(w * 0.2)},0" fill="none" stroke="${HM_INK}" stroke-width="${hmN(sz * 0.2)}" stroke-linecap="round" opacity="0.55"/>`;
  }
  return s;
}

// ----------------------------------------------------------------------------
// THE DESK. The kit table carries the top and the four legs (so they reach
// floorY and the kit lays the contact shadow); the frieze and its drawer are
// this desk's own. o.open: the drawer is out, blueprints and pencils showing.
// Returns { svg, top } so the caller seats things on the real surface.
// ----------------------------------------------------------------------------
const HM_PENCILS = [HM_C.deviceAnagram, HM_C.deviceDeletion, HM_C.deviceHidden, HM_C.deviceReversal, HM_C.deviceHomophone, HM_C.deviceCharade];
function hmDesk(x, floorY, o) {
  o = o || {};
  const W = 116, H = 58, D = 14, hw = W / 2, opts = { x: x, y: floorY, w: W, h: H, d: D, biome: 'cafe', depth: 'fg' };
  const wd = bcArt.tone(HM_C.wood), br = bcArt.tone(HM_BRASS);
  let s = bcArt.prop('table-square', opts), g = '';
  // frieze under the apron, between the front legs
  g += hmBody(`M${-hw + 7},${-H + 4} L${hw - 7},${-H + 4} L${hw - 7},${-H + 17} L${-hw + 7},${-H + 17} Z`, { base: wd.shade, ink: wd.ink }, null, null, 1.2);
  g += `<path d="M${-hw + 7},${-H + 4} L${hw - 7},${-H + 4} L${hw - 7},${-H + 6.4} L${-hw + 7},${-H + 6.4} Z" fill="${wd.ink}" opacity="0.5"/>`;
  if (o.open) {
    // the drawer is out: its inside is seen from above, the front face lower
    g += `<path d="M-25,${-H + 7} L25,${-H + 7} L30,${-H + 21} L-30,${-H + 21} Z" fill="${bcArt.shade(HM_C.wood, 0.5)}" stroke="${wd.ink}" stroke-width="1"/>`;
    // blueprints: two rolls and one sheet standing proud of the drawer
    const bp = bcArt.tone(HM_B.swell);
    g += `<path d="M-22,${-H + 18} L-19,${-H - 3} L-3,${-H - 5} L-2,${-H + 18} Z" fill="${bp.base}" stroke="${bp.ink}" stroke-width="0.8" stroke-linejoin="round"/><path d="M-19,${-H - 3} L-3,${-H - 5} L-4,${-H - 1} L-18.6,${-H + 0.6} Z" fill="${bp.hi}"/>`;
    g += `<path d="M-17,${-H + 4} h10 M-17,${-H + 9} h11 M-12,${-H + 2} v13" stroke="${HM_B.canvas}" stroke-width="0.5" opacity="0.55"/>`;
    g += `<path d="M-26,${-H + 12} L-2,${-H + 9} L-1.6,${-H + 14} L-25.6,${-H + 17} Z" fill="${bp.base}" stroke="${bp.ink}" stroke-width="0.8" stroke-linejoin="round"/><ellipse cx="-25.8" cy="${-H + 14.5}" rx="1.3" ry="2.5" fill="${bp.hi}" stroke="${bp.ink}" stroke-width="0.6"/><path d="M-24,${-H + 12.4} L-2.4,${-H + 9.8}" stroke="${bp.hi}" stroke-width="1"/>`;
    // coloured pencils, points up, fanned in the right of the drawer
    HM_PENCILS.forEach((c, i) => {
      const px = 4 + i * 3.6, lean = (i - 2.5) * 1.5, top = -H - 1 - (i % 3) * 1.6;
      g += `<path d="M${px},${-H + 18} L${hmN(px + lean)},${hmN(top + 4)} L${hmN(px + lean + 1.3)},${top} L${hmN(px + lean + 2.6)},${hmN(top + 4)} L${px + 2.6},${-H + 18} Z" fill="${c}" stroke="${bcArt.ink(c)}" stroke-width="0.5" stroke-linejoin="round"/><path d="M${hmN(px + lean + 0.7)},${hmN(top + 1.9)} L${hmN(px + lean + 1.3)},${top} L${hmN(px + lean + 1.9)},${hmN(top + 1.9)} Z" fill="${bcArt.ink(c)}"/>`;
    });
    g += hmBody(`M-30,${-H + 21} L30,${-H + 21} L30,${-H + 33} L-30,${-H + 33} Z`, wd, null, `M-30,${-H + 21} L30,${-H + 21} L30,${-H + 22.6} L-30,${-H + 22.6} Z`, 1.2);
    g += `<circle cx="0" cy="${-H + 27}" r="2.2" fill="${br.base}" stroke="${br.ink}" stroke-width="0.7"/><circle cx="-0.6" cy="${-H + 26.4}" r="0.8" fill="${br.hi}"/>`;
    g += `<path d="M-30,${-H + 33} L30,${-H + 33} L27,${-H + 36} L-27,${-H + 36} Z" fill="#0a0806" opacity="0.22"/>`;
  } else {
    g += hmBody(`M-24,${-H + 7} L24,${-H + 7} L24,${-H + 15.4} L-24,${-H + 15.4} Z`, wd, null, null, 0.9);
    g += `<circle cx="0" cy="${-H + 11.2}" r="1.9" fill="${br.base}" stroke="${br.ink}" stroke-width="0.6"/><circle cx="-0.5" cy="${-H + 10.7}" r="0.7" fill="${br.hi}"/>`;
  }
  s += `<g transform="translate(${x},${floorY})">${g}</g>`;
  return { svg: s, top: bcArt.anchors('table-square', opts).top };
}
// Things that live on the desk, each drawn with its contact point at 0,0.
function hmDeskNote() {
  // the note lying flat (foreshortened), the key across its top corner
  return `<ellipse cx="1" cy="0.6" rx="15" ry="3.4" fill="#0a0806" opacity="0.25"/>` +
    `<g transform="translate(-13,-3.4) scale(1,0.36)">${hmNote(26, 19, { sz: 1.5, lines: 4, sw: 0.7 })}</g>` +
    `<g transform="translate(4,-3.4) rotate(14) scale(0.3,0.19)">${hmKey(2.6)}</g>`;
}
function hmInkwell(s) {
  const gl = bcArt.tone(HM_B.seaDeep), q = bcArt.tone(HM_B.canvas);
  return `<g transform="scale(${s})"><ellipse cx="0" cy="0" rx="7" ry="1.6" fill="#0a0806" opacity="0.28"/>` +
    hmBody('M-5,0 L-5.6,-6 Q-5.6,-8 -3,-8.4 L-2.4,-11 L2.4,-11 L3,-8.4 Q5.6,-8 5.6,-6 L5,0 Z', gl, 'M2,0 L5,0 L5.6,-6 Q5.6,-8 3,-8.4 L2.4,-11 L1.4,-11 Z', 'M-4.4,-1.6 L-4.8,-6 L-3.8,-6 L-3.4,-1.6 Z', 0.9) +
    // the quill stands in the well, leaning right
    `<path d="M0.4,-10 L12,-33" stroke="${q.ink}" stroke-width="1.1" stroke-linecap="round"/>` +
    hmBody('M5,-19.4 Q14,-24 16.4,-37 Q8.6,-33 4.6,-21.6 Z', q, 'M5,-19.4 Q14,-24 16.4,-37 Q13,-28 8,-21.6 Z', null, 0.8) + '</g>';
}
function hmCandle(s, lit, p) {
  const wax = bcArt.tone(HM_B.ceramic), br = bcArt.tone(HM_BRASS);
  let g = `<ellipse cx="0" cy="0" rx="7.5" ry="1.6" fill="#0a0806" opacity="0.28"/>` +
    hmBody('M-7,-1.4 Q0,1.2 7,-1.4 L5,-3 L-5,-3 Z', br, null, null, 0.8) +
    hmBody('M-2.6,-3 L2.6,-3 L2.6,-15 Q0,-16.4 -2.6,-15 Z', wax, 'M0.8,-3 L2.6,-3 L2.6,-15 L0.8,-15.6 Z', null, 0.8) +
    `<path d="M0,-15.6 L0,-18" stroke="${HM_INK}" stroke-width="0.7" stroke-linecap="round"/>`;
  if (lit) {
    g += `<defs><radialGradient id="${p}-cnd"><stop offset="0" stop-color="${HM_C.glow}" stop-opacity="0.5"/><stop offset="1" stop-color="${HM_C.glow}" stop-opacity="0"/></radialGradient></defs><circle cx="0" cy="-21" r="20" fill="url(#${p}-cnd)">${hmEase('opacity', '0.7;1;0.8;0.7', 2.3)}</circle>`;
    g += `<g transform="translate(0,-17.6)"><g>${hmMove('scale', '1 1;0.9 1.16;1.06 0.92;1 1', 1.9)}<path d="M0,0 Q-2.8,-3.4 0,-9 Q2.8,-3.4 0,0 Z" fill="${HM_C.glow}"/><path d="M0,-0.4 Q-1.4,-2.6 0,-5.6 Q1.4,-2.6 0,-0.4 Z" fill="${HM_B.flame}"/></g></g>`;
  }
  return `<g transform="scale(${s})">${g}</g>`;
}

// ----------------------------------------------------------------------------
// THE ROOM. Back wall with the valley window, the stone hearth on the left,
// the desk under the window, plank floor running to one vanishing point
// (250,105). o.lit: fire up, candle and lantern lit, warm light on everything.
// Unlit, the materials sit a plane back in the cafe haze (dark: distance
// darkens indoors) and only the window and the embers carry light.
// o.zoom: [scale, cx, cy] pushes the camera in. o.open: the drawer is out.
// ----------------------------------------------------------------------------
function hmFire(p, lit) {
  let s = '';
  const log = bcArt.tone(bcArt.shade(HM_C.wood, 0.3));
  // andirons and two logs, there in both states
  s += hmBody('M102,166 L140,158 L142,163 L104,171 Z', log, null, 'M102,166 L140,158 L140.4,159.4 L102.4,167.4 Z', 0.9) + hmBody('M110,160 L150,165 L149,170 L109,165 Z', log, null, 'M110,160 L150,165 L149.7,166.4 L109.7,161.4 Z', 0.9);
  if (!lit) {
    // embers: the smoke outside came from this
    s += `<ellipse cx="126" cy="168" rx="20" ry="3.4" fill="${HM_C.glow}" opacity="0.3">${hmEase('opacity', '0.2;0.42;0.2', 4.3)}</ellipse>`;
    [[114, 167, 1.6, 3.1, 0], [124, 169, 2, 4.4, 0.8], [133, 167.4, 1.5, 3.7, 1.9], [141, 168.6, 1.2, 5.2, 0.4]].forEach((e) => { s += `<circle cx="${e[0]}" cy="${e[1]}" r="${e[2]}" fill="${HM_B.flame}" opacity="0.6">${hmEase('opacity', '0.35;0.95;0.35', e[3], e[4])}</circle>`; });
    s += `<path d="M124,158 q-4,-8 0,-15 q4,-7 -1,-14" fill="none" stroke="${HM_B.steam}" stroke-width="1.6" stroke-linecap="round" opacity="0.14">${hmEase('opacity', '0.05;0.2;0.05', 5.6)}</path>`;
    return s;
  }
  s += `<defs><radialGradient id="${p}-fire" cx="0.5" cy="0.62" r="0.5"><stop offset="0" stop-color="${HM_B.flame}" stop-opacity="0.75"/><stop offset="0.5" stop-color="${HM_C.glow}" stop-opacity="0.28"/><stop offset="1" stop-color="${HM_C.glow}" stop-opacity="0"/></radialGradient></defs>`;
  s += `<path d="M97,170 L97,124 Q125,105 153,124 L153,170 Z" fill="${HM_C.glow}" opacity="0.34">${hmEase('opacity', '0.26;0.42;0.3;0.26', 2.9)}</path>`;
  const flame = (x, w, h, col, dur, begin, vals) => `<g transform="translate(${x},167)"><g>${hmMove('scale', vals, dur, begin)}<path d="M${-w},0 Q${hmN(-w * 1.25)},${hmN(-h * 0.45)} ${hmN(-w * 0.25)},${hmN(-h * 0.62)} Q${hmN(-w * 0.5)},${hmN(-h * 0.85)} ${hmN(w * 0.12)},${-h} Q${hmN(w * 0.1)},${hmN(-h * 0.7)} ${hmN(w * 0.7)},${hmN(-h * 0.5)} Q${hmN(w * 1.25)},${hmN(-h * 0.3)} ${w},0 Z" fill="${col}"/></g></g>`;
  s += flame(112, 9, 26, HM_C.glow, 1.7, 0, '1 1;0.94 1.18;1.05 0.9;1 1') + flame(138, 9, 30, HM_C.glow, 2.1, 0.5, '1 1;1.06 0.88;0.95 1.14;1 1') + flame(125, 13, 40, HM_C.glow, 1.4, 0.2, '1 1;0.95 1.12;1.04 0.93;1 1');
  s += flame(120, 7, 22, HM_B.flame, 1.2, 0.1, '1 1;1.05 0.86;0.94 1.16;1 1') + flame(131, 8, 27, HM_B.flame, 1.6, 0.4, '1 1;0.92 1.15;1.06 0.9;1 1') + flame(126, 4.4, 15, bcArt.light(HM_B.flame, 0.6), 1.1, 0, '1 1;1.08 0.84;0.94 1.12;1 1');
  // sparks, born in the fire and gone before the loop turns over
  [[118, 3.4, 0, -7], [130, 4.1, 1.3, 6], [124, 2.9, 2.2, -3]].forEach((k) => { s += `<circle cx="${k[0]}" cy="146" r="1" fill="${HM_B.flame}" opacity="0">${hmMove('translate', `0,0;${k[3]},-16;${hmN(k[3] * 1.5)},-30`, k[1], k[2])}${hmEase('opacity', '0;0.9;0', k[1], k[2])}</circle>`; });
  return s;
}
function hmRoom(p, o) {
  o = o || {};
  const lit = !!o.lit, C = HM_C;
  // A: everything that is the room's own material. Unlit, it is veiled.
  const wall = bcArt.tone(bcArt.light(C.skyBottom, 0.18)), stone = bcArt.tone(C.stone), wood = bcArt.tone(C.wood), beam = bcArt.tone(bcArt.shade(C.wood, 0.3)), floor = bcArt.tone(bcArt.mix(C.wood, C.path, 0.34));
  let a = '';
  a += `<defs><linearGradient id="${p}-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${wall.shade}"/><stop offset="0.5" stop-color="${wall.base}"/><stop offset="1" stop-color="${bcArt.mix(wall.base, wall.shade, 0.5)}"/></linearGradient>` +
    `<linearGradient id="${p}-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${floor.shade}"/><stop offset="1" stop-color="${floor.base}"/></linearGradient></defs>`;
  // ceiling, joists running to the vanishing point
  a += `<rect x="-60" y="-40" width="620" height="64" fill="${beam.shade}"/>`;
  [80, 190, 310, 420].forEach((x) => { const k = 1.75, x2 = 250 + (x - 250) * k, x3 = 250 + (x + 12 - 250) * k; a += `<path d="M${x},22 L${x + 12},22 L${hmN(x3)},-40 L${hmN(x2)},-40 Z" fill="${beam.base}"/><path d="M${x},22 L${x + 3},22 L${hmN(250 + (x + 3 - 250) * k)},-40 L${hmN(x2)},-40 Z" fill="${beam.hi}" opacity="0.5"/>`; });
  // back wall and side walls
  a += `<rect x="46" y="22" width="408" height="150" fill="url(#${p}-wall)"/>`;
  a += `<path d="M-60,-21 L46,22 L46,170 L-60,204 Z" fill="${wall.shade}"/><path d="M560,-21 L454,22 L454,170 L560,204 Z" fill="${bcArt.shade(wall.shade, 0.2)}"/>`;
  a += `<path d="M46,22 L46,170 M454,22 L454,170" stroke="${wall.ink}" stroke-width="1" opacity="0.5"/>`;
  a += `<rect x="46" y="22" width="408" height="7" fill="${beam.base}"/><rect x="46" y="29" width="408" height="2" fill="${wall.ink}" opacity="0.3"/>`;
  // plaster: a few cracks and patches so the wall is a surface
  a += `<path d="M214,40 q4,10 -2,18 q-3,6 2,12 M392,128 q-6,8 -1,16 M70,140 q5,6 2,14" fill="none" stroke="${wall.shade}" stroke-width="0.8" opacity="0.7"/><path d="M196,120 q14,-6 30,0 q-6,10 -18,10 q-10,0 -12,-10 Z" fill="${wall.hi}" opacity="0.25"/>`;
  // floor
  a += `<path d="M-60,204 L46,170 L454,170 L560,204 L560,300 L-60,300 Z" fill="url(#${p}-floor)"/>`;
  let seams = '';
  for (let x = 46; x <= 454; x += 34) seams += `M${x},170 L${hmN(250 + (x - 250) * 3)},300 `;
  a += `<path d="${seams}" stroke="${floor.ink}" stroke-width="0.9" opacity="0.5" fill="none"/>`;
  a += `<path d="M120,186 l40,0 M300,196 l52,0 M196,214 l64,0 M60,232 l80,0 M330,238 l90,0 M210,250 l70,0" stroke="${floor.ink}" stroke-width="0.8" opacity="0.4"/>`;
  a += `<rect x="46" y="166" width="408" height="5" fill="${beam.base}"/><path d="M46,171 L454,171" stroke="${beam.ink}" stroke-width="0.8" opacity="0.6"/>`;
  // window frame, curtains, sill (the view itself is drawn unveiled, below)
  const cur = bcArt.tone(C.cloth);
  let win = '';
  win += hmBody('M254,42 L358,42 L358,122 L254,122 Z', wood, null, null, 1.2);
  // the hearth: chimney breast, mantel, firebox, hearthstone
  let h = '';
  h += hmBody('M72,22 L178,22 L178,170 L72,170 Z', stone, 'M162,22 L178,22 L178,170 L162,170 Z', 'M72,22 L76,22 L76,170 L72,170 Z', 1.2);
  h += `<path d="M178,22 L187,25 L187,174 L178,170 Z" fill="${stone.ink}" opacity="0.55"/>`;
  h += `<path d="M80,40 h22 v12 h-22 Z M108,36 h26 v13 h-26 Z M140,42 h20 v11 h-20 Z M84,60 h28 v12 h-28 Z M120,58 h24 v13 h-24 Z M150,62 h18 v10 h-18 Z M78,102 h14 v14 h-14 Z M158,104 h14 v13 h-14 Z M76,126 h16 v14 h-16 Z M160,128 h12 v14 h-12 Z M78,148 h14 v14 h-14 Z M158,150 h14 v13 h-14 Z" fill="none" stroke="${stone.shade}" stroke-width="0.9" stroke-linejoin="round" opacity="0.8"/>`;
  h += `<path d="M80,40 h22 v2.4 h-22 Z M108,36 h26 v2.4 h-26 Z M84,60 h28 v2.4 h-28 Z M120,58 h24 v2.4 h-24 Z" fill="${stone.hi}" opacity="0.6"/>`;
  // firebox arch with its ring of voussoirs
  h += `<path d="M90,170 L90,122 Q125,96 160,122 L160,170 Z" fill="${stone.hi}" stroke="${stone.ink}" stroke-width="1"/><path d="M97,170 L97,124 Q125,105 153,124 L153,170 Z" fill="${HM_DARK}"/>`;
  h += `<path d="M90,140 h7 M90,156 h7 M153,140 h7 M153,156 h7 M100,113.6 l3.4,6 M113,106.6 l1.8,6.6 M125,104 v7 M137,106.6 l-1.8,6.6 M150,113.6 l-3.4,6" stroke="${stone.ink}" stroke-width="0.8" opacity="0.6"/>`;
  h += hmFire(p, lit);
  // mantel beam
  h += hmBody('M62,82 L190,82 L190,93 L62,93 Z', beam, 'M62,89 L190,89 L190,93 L62,93 Z', 'M62,82 L190,82 L190,84 L62,84 Z', 1.2);
  h += `<path d="M72,93 L178,93 L178,98 L72,98 Z" fill="${stone.ink}" opacity="0.4"/>`;
  // hearthstone on the floor
  h += hmBody('M70,170 L180,170 L192,186 L58,186 Z', { base: stone.hi, ink: stone.ink }, 'M58,186 L192,186 L192,189 L58,189 Z', null, 1.1);
  // shelves on the right of the back wall, books with no titles
  let sh = '';
  const books = (x, y, list) => list.map((b, i) => { const bx = x + list.slice(0, i).reduce((t, q) => t + q[0], 0), bt = bcArt.tone(b[2]); return `<path d="M${bx},${y} L${bx},${y - b[1]} L${bx + b[0]},${y - b[1]} L${bx + b[0]},${y} Z" fill="${bt.base}" stroke="${bt.ink}" stroke-width="0.6"/><path d="M${bx + 1},${hmN(y - b[1] * 0.78)} h${b[0] - 2}" stroke="${bt.hi}" stroke-width="0.8"/>`; }).join('');
  sh += hmBody('M388,74 L446,74 L446,78 L388,78 Z', beam, null, null, 0.9) + `<path d="M394,78 l0,7 l6,-7 Z M440,78 l0,7 l-6,-7 Z" fill="${beam.shade}"/>`;
  sh += books(392, 74, [[5, 17, C.cloth], [4, 14, C.foliage], [6, 19, C.deviceReversal], [4, 15, C.trim], [5, 17, C.deviceHidden]]);
  sh += hmBody('M426,74 L426,63 Q426,60 430,60 L436,60 Q440,60 440,63 L440,74 Z', bcArt.tone(C.ceramic), 'M436,74 L440,74 L440,63 Q440,60 436,60 Z', null, 0.8);
  sh += hmBody('M388,108 L446,108 L446,112 L388,112 Z', beam, null, null, 0.9) + `<path d="M394,112 l0,7 l6,-7 Z M440,112 l0,7 l-6,-7 Z" fill="${beam.shade}"/>`;
  sh += books(408, 108, [[5, 16, C.deviceDeletion], [6, 18, C.cloth], [4, 13, C.foliage], [5, 17, C.metal], [5, 15, C.deviceHomophone]]);
  sh += hmBody('M392,108 L393,98 L402,98 L403,108 Z', bcArt.tone(C.trim), null, null, 0.8);
  // rug in front of the hearth
  let rug = '';
  rug += `<ellipse cx="160" cy="222" rx="92" ry="19" fill="${cur.shade}"/><ellipse cx="160" cy="221" rx="92" ry="18" fill="${cur.base}"/><ellipse cx="160" cy="221" rx="78" ry="14" fill="none" stroke="${C.trim}" stroke-width="2" opacity="0.8"/><ellipse cx="160" cy="221" rx="56" ry="9" fill="${bcArt.mix(C.cloth, C.trim, 0.3)}"/><ellipse cx="160" cy="221" rx="92" ry="18" fill="none" stroke="${cur.ink}" stroke-width="1.2"/>`;
  rug += `<path d="M70,218 l-7,2 M71,224 l-7,3 M250,218 l7,2 M249,224 l7,3" stroke="${cur.hi}" stroke-width="1.2" stroke-linecap="round"/>`;

  // B: the desk and everything on it, the stool, the pot.
  const desk = hmDesk(306, 206, { open: o.open });
  let b = desk.svg;
  b += bcArt.on(desk.top, hmDeskNote(), { u: -0.12, v: 0.2 });
  b += bcArt.on(desk.top, hmInkwell(0.62), { u: 0.72, v: -0.3 });
  b += bcArt.on(desk.top, hmCandle(0.72, lit, p), { u: -0.82, v: -0.2 });
  // stool: seat, three legs splayed to the floor line at 224
  const st = bcArt.tone(bcArt.light(C.wood, 0.12));
  b += hmShadow(236, 224, 17, 3, 0.3);
  b += hmBody('M226,193 L229.4,193 L224.4,224 L221,224 Z', { base: st.shade, ink: st.ink }, null, null, 1.2) + hmBody('M246,193 L242.6,193 L247.6,224 L251,224 Z', { base: st.shade, ink: st.ink }, null, null, 1.2) + hmBody('M234.4,194 L237.6,194 L237.8,226 L234.2,226 Z', st, null, null, 1.2);
  b += `<path d="M225,208 L247,208" stroke="${st.ink}" stroke-width="2.6"/><path d="M225,208 L247,208" stroke="${st.shade}" stroke-width="1.4"/>`;
  b += hmBody('M220,189 Q236,184 252,189 L252,193 Q236,198 220,193 Z', st, 'M220,191.4 Q236,196.4 252,191.4 L252,193 Q236,198 220,193 Z', null, 1.4);
  // potted fern in the right corner
  const pot = bcArt.tone(C.cloth);
  b += hmShadow(424, 190, 15, 2.6, 0.3) + bcArt.prop('fern', { x: 424, y: 176, size: 38, biome: 'cafe', depth: 'fg', shadow: false }) +
    hmBody('M413,174 L435,174 L432,190 L416,190 Z', pot, 'M428,174 L435,174 L432,190 L426.6,190 Z', 'M413,174 L435,174 L434.6,176.4 L413.4,176.4 Z', 1.3);
  // lantern on the mantel, seated on the beam's top edge
  const lan = bcArt.prop('lantern', { x: 168, y: 82, scale: 0.72, lit: lit, biome: 'cafe', depth: 'fg', idp: p + '-lan' });
  // jar of wildflowers from the meadow, at the other end of the mantel
  let jar = hmShadow(88, 82, 7, 1.3, 0.3) + [[-5, -16, HM_B.accent], [0, -20, HM_B.canvas], [5, -15, HM_B.deviceHidden], [2, -12, HM_B.accentSoft]].map((f) => `<path d="M88,76 L${88 + f[0]},${82 + f[1]}" stroke="${C.foliage}" stroke-width="0.9"/><circle cx="${88 + f[0]}" cy="${82 + f[1]}" r="2.6" fill="${f[2]}"/><circle cx="${88 + f[0]}" cy="${82 + f[1]}" r="0.9" fill="${HM_B.flame}"/>`).join('') +
    hmBody('M83,82 L83.6,74 L92.4,74 L93,82 Z', bcArt.tone(C.deviceReversal), 'M90,82 L93,82 L92.4,74 L90,74 Z', null, 0.9);

  // The window view: daylight, never veiled. Sky, the far valley, a river.
  let view = `<defs><linearGradient id="${p}-view" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${HM_B.skyTop}"/><stop offset="1" stop-color="${HM_B.skyBottom}"/></linearGradient><clipPath id="${p}-pane"><rect x="259" y="47" width="94" height="70"/></clipPath></defs>`;
  view += `<g clip-path="url(#${p}-pane)"><rect x="259" y="47" width="94" height="70" fill="url(#${p}-view)"/>` +
    `<g opacity="0.85"><g>${hmMove('translate', '0,0;10,0;0,0', 37)}<path d="M276,66 q-3,-6 5,-6 q3,-6 10,-2 q8,-2 8,5 q4,1 2,5 Z" fill="${HM_B.canvas}"/></g></g>` +
    `<path d="M259,92 Q280,78 300,88 Q322,74 353,90 L353,117 L259,117 Z" fill="${bcArt.haze(HM_B.headland, 'bg', 'beach')}"/>` +
    `<path d="M259,100 Q284,90 308,98 Q330,90 353,100 L353,117 L259,117 Z" fill="${bcArt.haze(HM_B.foliage, 'far', 'beach')}"/>` +
    `<path d="M259,108 Q290,100 320,107 Q338,103 353,108 L353,117 L259,117 Z" fill="${bcArt.haze(HM_GRASS, 'bg', 'beach')}"/>` +
    `<path d="M268,106 Q290,102 306,107 Q322,112 340,110" fill="none" stroke="${HM_B.swell}" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>` +
    `<path d="M259,47 L300,47 L259,96 Z" fill="${HM_B.canvas}" opacity="0.14"/></g>`;
  // mullions, curtains and sill go over the view and belong to the room
  let win2 = `<path d="M306,47 L306,117 M259,80 L353,80" stroke="${wood.shade}" stroke-width="3.2"/><path d="M305,47 L305,117 M259,79 L353,79" stroke="${wood.hi}" stroke-width="0.8" opacity="0.6"/>`;
  win2 += `<path d="M259,47 L353,47 L353,117 L259,117 Z" fill="none" stroke="${wood.ink}" stroke-width="1"/>`;
  win2 += `<path d="M244,38 L368,38" stroke="${beam.ink}" stroke-width="3.4" stroke-linecap="round"/><path d="M244,38 L368,38" stroke="${C.trim}" stroke-width="1.6" stroke-linecap="round"/>`;
  win2 += hmBody('M246,39 L276,39 Q268,60 266,84 Q264,104 258,124 L246,124 Z', cur, 'M246,39 L254,39 Q252,80 250,124 L246,124 Z', 'M268,39 L276,39 Q268,60 266,84 Q270,58 268,39 Z', 1.1);
  win2 += `<path d="M258,40 Q256,80 252,122 M266,40 Q262,74 260,100" fill="none" stroke="${cur.shade}" stroke-width="0.9" opacity="0.8"/>`;
  win2 += hmBody('M366,39 L336,39 Q344,60 346,84 Q348,104 354,124 L366,124 Z', { base: cur.shade, shade: cur.ink, hi: cur.base, ink: cur.ink }, 'M366,39 L358,39 Q360,80 362,124 L366,124 Z', null, 1.1);
  win2 += `<path d="M354,40 Q356,80 360,122 M346,40 Q350,74 352,100" fill="none" stroke="${cur.ink}" stroke-width="0.9" opacity="0.5"/>`;
  win2 += hmBody('M248,122 L364,122 L368,128 L244,128 Z', { base: wood.hi, ink: wood.ink }, 'M244,128 L368,128 L368,130.4 L244,130.4 Z', null, 1.1);

  const veil = (svg) => lit ? svg : bcArt.layer('bg', svg, 'cafe');
  let s = veil(a + win + h + sh) + view + veil(win2 + jar) + lan + veil(rug);
  // daylight: the window's patch on the floor, and the open door behind us
  s += `<path d="M262,178 L352,178 L392,232 L246,232 Z" fill="${HM_B.sun}" opacity="${lit ? 0.05 : 0.09}"/><path d="M304,178 L310,178 L324,232 L314,232 Z" fill="${HM_DARK}" opacity="0.12"/>`;
  if (!lit) s += `<path d="M150,300 L182,226 L318,226 L350,300 Z" fill="${HM_B.sun}" opacity="0.07"/>`;
  s += veil(b);
  if (lit) {
    // the fire's light: on the floor, up the breast, and over the whole room
    s += `<defs><radialGradient id="${p}-warm" cx="0.25" cy="0.62" r="0.75"><stop offset="0" stop-color="${C.glow}" stop-opacity="0.42"/><stop offset="0.45" stop-color="${HM_B.flame}" stop-opacity="0.16"/><stop offset="1" stop-color="${HM_B.flame}" stop-opacity="0.04"/></radialGradient></defs>`;
    s += `<rect x="-60" y="-40" width="620" height="340" fill="url(#${p}-warm)">${hmEase('opacity', '0.86;1;0.9;0.86', 3.1)}</rect>`;
    s += `<ellipse cx="126" cy="196" rx="86" ry="15" fill="${C.glow}" opacity="0.2">${hmEase('opacity', '0.14;0.26;0.17;0.14', 2.3)}</ellipse>`;
    // dust in the warm air, each mote on its own slow loop
    [[210, 120, 9.2, 0, 8, -12], [262, 150, 11.4, 2, -9, -10], [340, 140, 10.3, 4.4, 7, -14], [188, 160, 12.7, 1.1, -6, -9], [380, 110, 9.8, 3, 10, -8]].forEach((m) => { s += `<circle cx="${m[0]}" cy="${m[1]}" r="1" fill="${HM_B.flame}" opacity="0">${hmMove('translate', `0,0;${m[4]},${m[5]};0,0`, m[2], m[3])}${hmEase('opacity', '0;0.7;0', m[2], m[3])}</circle>`; });
  } else {
    // embers barely reach the hearthstone
    s += `<ellipse cx="126" cy="180" rx="44" ry="7" fill="${C.glow}" opacity="0.1">${hmEase('opacity', '0.06;0.14;0.06', 4.3)}</ellipse>`;
  }
  const z = o.zoom;
  return z ? `<g transform="translate(${z[1]},${z[2]}) scale(${z[0]}) translate(${-z[1]},${-z[2]})">${s}</g>` : s;
}

// Scene 1: the door pushed open. The room is dim and waiting: embers in the
// hearth, daylight from the valley window, the note and key on the desk.
STORY_SCENES['house_1'] = HM_OPEN + `<rect width="500" height="260" fill="${HM_DARK}"/>` +
  hmRoom('hm1', {}) +
  // foreground: the door frame we are standing in, and the door we just pushed
  `<path d="M0,0 L500,0 L500,9 L0,9 Z" fill="${HM_DARK}"/><path d="M0,0 L24,0 L20,260 L0,260 Z" fill="${HM_DARK}"/><path d="M24,0 L27,0 L23,260 L20,260 Z" fill="${bcArt.haze(HM_C.wood, 'bg', 'cafe')}"/>` +
  `<path d="M462,6 L500,0 L500,260 L466,260 Z" fill="${bcArt.shade(HM_C.wood, 0.5)}"/><path d="M462,6 L466,6 L470,260 L466,260 Z" fill="${bcArt.haze(HM_C.wood, 'mid', 'cafe')}"/>` +
  `<path d="M480,3 L482,260 M494,1 L495,260" stroke="${HM_DARK}" stroke-width="1.2" opacity="0.8"/><path d="M462,70 L500,66 L500,74 L462,78 Z M462,196 L500,198 L500,206 L462,204 Z" fill="${HM_DARK}"/>` +
  `<path d="M470,132 q8,-3 9,5 q-1,7 -9,5" fill="none" stroke="${bcArt.shade(HM_BRASS, 0.3)}" stroke-width="2.4" stroke-linecap="round"/>` +
  '</svg>';

// ----------------------------------------------------------------------------
// THE DESK TOP, close. The same desk seen from where you would stand to read
// at it: the top runs away to the window sill, the note lies on it, the brass
// key holds it down. o.near: straight down on the note, with the clue.
// ----------------------------------------------------------------------------
function hmDeskTop(p, o) {
  o = o || {};
  const C = HM_C, wood = bcArt.tone(C.wood), wall = bcArt.tone(bcArt.haze(bcArt.light(C.skyBottom, 0.18), 'mid', 'cafe')), cur = bcArt.tone(C.cloth);
  let s = `<defs><linearGradient id="${p}-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${wood.shade}"/><stop offset="0.3" stop-color="${wood.base}"/><stop offset="1" stop-color="${bcArt.light(C.wood, 0.14)}"/></linearGradient>` +
    `<linearGradient id="${p}-view" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${HM_B.skyTop}"/><stop offset="1" stop-color="${HM_B.skyBottom}"/></linearGradient>` +
    `<radialGradient id="${p}-day" cx="0.42" cy="0.3" r="0.7"><stop offset="0" stop-color="${HM_B.sun}" stop-opacity="0.3"/><stop offset="1" stop-color="${HM_B.sun}" stop-opacity="0"/></radialGradient></defs>`;
  if (!o.near) {
    // wall, and the bottom of the valley window above the desk
    s += `<rect width="500" height="260" fill="${wall.base}"/><path d="M0,178 L500,178 L500,260 L0,260 Z" fill="${bcArt.haze(bcArt.mix(C.wood, C.path, 0.34), 'bg', 'cafe')}"/><path d="M0,172 L500,172 L500,178 L0,178 Z" fill="${bcArt.haze(C.wood, 'bg', 'cafe')}"/>`;
    s += `<rect x="96" y="-10" width="308" height="76" fill="${wood.shade}"/><rect x="106" y="-10" width="288" height="66" fill="url(#${p}-view)"/>`;
    s += `<path d="M106,22 Q160,2 220,18 Q290,-2 394,24 L394,56 L106,56 Z" fill="${bcArt.haze(HM_B.headland, 'bg', 'beach')}"/><path d="M106,36 Q180,18 250,34 Q320,20 394,38 L394,56 L106,56 Z" fill="${bcArt.haze(HM_B.foliage, 'far', 'beach')}"/><path d="M106,46 Q200,34 290,46 Q350,40 394,48 L394,56 L106,56 Z" fill="${bcArt.haze(HM_GRASS, 'bg', 'beach')}"/>`;
    s += `<path d="M130,44 Q190,38 240,46 Q290,52 350,48" fill="none" stroke="${HM_B.swell}" stroke-width="2" stroke-linecap="round" opacity="0.8"/>`;
    s += `<path d="M250,-10 L250,56" stroke="${wood.shade}" stroke-width="8"/><path d="M247,-10 L247,56" stroke="${wood.hi}" stroke-width="1.4" opacity="0.5"/><rect x="106" y="-10" width="288" height="66" fill="none" stroke="${wood.ink}" stroke-width="1.4"/>`;
    s += hmBody('M76,-10 L150,-10 Q134,24 130,70 L76,70 Z', cur, 'M76,-10 L96,-10 Q90,30 88,70 L76,70 Z', null, 1.4) + `<path d="M112,-8 Q104,30 102,68 M134,-8 Q122,30 118,68" fill="none" stroke="${cur.shade}" stroke-width="1.2"/>`;
    s += hmBody('M424,-10 L350,-10 Q366,24 370,70 L424,70 Z', { base: cur.shade, ink: cur.ink }, 'M424,-10 L404,-10 Q410,30 412,70 L424,70 Z', null, 1.4) + `<path d="M388,-8 Q396,30 398,68 M366,-8 Q378,30 382,68" fill="none" stroke="${cur.ink}" stroke-width="1.2" opacity="0.5"/>`;
    s += hmBody('M80,64 L420,64 L430,78 L70,78 Z', { base: wood.hi, ink: wood.ink }, 'M70,78 L430,78 L430,84 L70,84 Z', null, 1.4);
    s += `<path d="M0,84 L500,84 L500,130 L0,130 Z" fill="${wall.shade}" opacity="0.45"/>`;
    // the desk top, running away from us
    s += `<path d="M-40,262 L540,262 L452,104 L48,104 Z" fill="url(#${p}-top)"/>`;
    s += `<path d="M48,104 L452,104 L455,110 L45,110 Z" fill="${wood.ink}" opacity="0.5"/>`;
    s += `<path d="M130,106 L72,262 M212,106 L186,262 M290,106 L304,262 M372,106 L424,262" stroke="${wood.ink}" stroke-width="1.2" opacity="0.45" fill="none"/>`;
    s += `<path d="M60,150 q60,-5 110,2 M300,132 q50,-4 96,3 M20,214 q80,-8 140,2 M330,224 q70,-6 130,4 M210,246 q50,-4 90,2" fill="none" stroke="${wood.shade}" stroke-width="1" opacity="0.6"/>`;
    s += `<path d="M48,104 L96,104 L22,262 L-40,262 Z" fill="${wood.hi}" opacity="0.2"/>`;
    s += `<rect width="500" height="260" fill="url(#${p}-day)"/>`;
    // inkwell and quill back right, candle back left
    s += `<g transform="translate(396,138)">${hmInkwell(2.5)}</g><g transform="translate(92,134)">${hmCandle(2.3, false, p)}</g>`;
    // the note, lying flat: the same sheet, foreshortened, turned a little
    s += `<path d="M128,150 L368,142 L398,236 L104,246 Z" fill="#0a0806" opacity="0.26" transform="translate(5,5)"/>`;
    s += `<g transform="matrix(1,-0.034,-0.12,0.5,134,150)">${hmNote(240, 190, { sz: 7.4, lines: 6, sw: 1.8, top: 44, gap: 24 })}</g>`;
    // the key across the top right corner, its weight on the paper
    s += `<g transform="translate(314,165) rotate(12) scale(1.65,1)" opacity="0.3">${hmKey(1.3, '#0a0806')}</g>`;
    s += `<g transform="translate(310,158) rotate(12) scale(1.65,1)">${hmKey(1.3)}</g>`;
    // a glint that travels the bow
    s += `<path d="M293,145 l2.4,-6 l2.4,6 l6,2.4 l-6,2.4 l-2.4,6 l-2.4,-6 l-6,-2.4 Z" fill="${HM_B.sun}" opacity="0.5">${hmEase('opacity', '0.1;0.8;0.1', 3.4)}</path>`;
    return s;
  }
  // straight down: boards, the sheet, the key at its corner
  s += `<rect width="500" height="260" fill="url(#${p}-top)"/>`;
  s += `<path d="M0,58 L500,52 M0,136 L500,132 M0,210 L500,214" stroke="${wood.ink}" stroke-width="1.6" opacity="0.5"/><path d="M0,60 L500,54 M0,138 L500,134 M0,212 L500,216" stroke="${wood.hi}" stroke-width="0.8" opacity="0.25"/>`;
  s += `<path d="M20,24 q80,-8 150,2 M330,30 q70,-6 150,4 M40,96 q90,-10 170,0 M300,104 q90,-8 180,2 M10,170 q60,-6 120,2 M360,176 q60,-6 130,2 M60,240 q100,-8 190,2 M320,244 q70,-6 160,0" fill="none" stroke="${wood.shade}" stroke-width="1.1" opacity="0.6"/>`;
  s += `<ellipse cx="96" cy="96" rx="9" ry="5" fill="${wood.shade}" opacity="0.7"/><ellipse cx="96" cy="96" rx="4" ry="2" fill="${wood.ink}" opacity="0.6"/><ellipse cx="436" cy="190" rx="7" ry="4" fill="${wood.shade}" opacity="0.7"/>`;
  s += `<rect width="500" height="260" fill="url(#${p}-day)"/>`;
  // the window's cross falls over desk and paper alike
  // the sheet
  s += `<g transform="rotate(-1.6 250 130)"><path d="M56,34 L450,34 L450,236 L56,236 Z" fill="#0a0806" opacity="0.3"/>` +
    `<g transform="translate(50,26)">${hmNote(394, 204, { sz: 8, lines: 3, sw: 1.6, top: 46, gap: 25, clue: true, clueY: 152, clueSize: 16.4, seed: 4, run: 0.7 })}</g></g>`;
  // inkwell, cropped by the corner of the frame: a camera crop, not a float
  s += `<g transform="translate(470,262)">${hmInkwell(3.4)}</g>`;
  // the key, lifted off the words and set down on the top corner
  s += `<g transform="translate(377,47) rotate(24) scale(1.9)" opacity="0.28">${hmKey(0.9, '#0a0806')}</g>`;
  s += `<g transform="translate(372,40) rotate(24) scale(1.9)">${hmKey(0.9)}</g>`;
  s += `<path d="M352,22 l2.6,-7 l2.6,7 l7,2.6 l-7,2.6 l-2.6,7 l-2.6,-7 l-7,-2.6 Z" fill="${HM_B.sun}" opacity="0.5">${hmEase('opacity', '0.1;0.85;0.1', 3.8)}</path>`;
  s += `<path d="M0,0 L500,0 L500,260 L0,260 Z" fill="${HM_DARK}" opacity="0.08"/>`;
  return s;
}

// Scene 2: the note and the key, close.
STORY_SCENES['house_2'] = HM_OPEN + hmDeskTop('hm2', {}) + '</svg>';

// Scene 3 (puzzle): the clue, written under the message. Text is frozen.
STORY_SCENES['house_3'] = HM_OPEN + hmDeskTop('hm3', { near: true }) + '</svg>';

// Scene 4: the key has turned. Fire up, lantern and candle lit, the drawer out
// with the blank blueprints and the coloured pencils. Camera a step inside.
STORY_SCENES['house_4'] = HM_OPEN + `<rect width="500" height="260" fill="${HM_DARK}"/>` + hmRoom('hm4', { lit: true, open: true, zoom: [1.15, 225, 204] }) + '</svg>';

// Scene 5: home. The same cottage from the path, nearer now, door wide and
// every window lit.
const HM_PATH5 = [[260, 212, 9], [252, 220, 13], [226, 230, 19], [212, 244, 28], [236, 264, 44]];
STORY_SCENES['house_5'] = HM_OPEN +
  hmMeadow('hm5', { horizon: 170, hill: [150, 178, 440, 34], pines: [[404, 60, 40, 'bg'], [440, 52, 52, 'bg'], [478, 58, 46, 'bg'], [44, 166, 24, 'far'], [62, 167, 18, 'far']] }) +
  hmSpecks(0, 180, 176, 204, 50, 5) + hmTufts(0, 500, 182, 240, 40, 9, HM_B.foliage) +
  hmCottage(266, 206, 1.5, { lit: true, open: true, depth: 'fg' }) +
  `<path d="M360,208 Q388,178 432,170 Q474,166 500,174 L500,228 L350,228 Z" fill="${bcArt.mix(HM_GRASS, HM_B.foliage, 0.3)}"/><path d="M372,200 Q394,180 432,172 Q462,168 486,171 Q440,180 412,188 Q388,196 372,200 Z" fill="${bcArt.light(HM_GRASS, 0.2)}" opacity="0.5"/>` +
  hmSpecks(380, 500, 176, 214, 22, 14) +
  hmPath(HM_PATH5) +
  // the doorway's light, spilled down the step and onto the path
  `<path d="M246,213 L276,213 L298,246 L206,252 Z" fill="${HM_B.flame}" opacity="0.3">${hmEase('opacity', '0.22;0.36;0.26;0.22', 3.6)}</path>` +
  hmFlowerBed(20, 200, 214, 244, 16, 25, { s0: 0.7, s1: 1.15 }) + hmFlowerBed(290, 480, 226, 248, 14, 37, { s0: 0.8, s1: 1.15 }) +
  hmButterfly(152, 196, HM_B.canvas, 10.4, '0,0;12,-8;26,0;12,7;0,0') +
  bcArt.prop('rock', { x: 330, y: 250, size: 30, seed: 4, biome: 'beach' }) +
  hmFlowerBed(0, 150, 250, 268, 9, 59, { s0: 1.3, s1: 1.8 }) + hmFlowerBed(350, 500, 252, 268, 8, 67, { s0: 1.3, s1: 1.8 }) +
  hmBlades(0, 110, 14, 3, 40) + hmBlades(380, 500, 14, 8, 36) + hmFlowerBed(6, 60, 268, 276, 3, 73, { s0: 2, s1: 2.3, dark: true }) + hmFlowerBed(440, 498, 268, 276, 3, 79, { s0: 2, s1: 2.3, dark: true }) +
  '</svg>';
