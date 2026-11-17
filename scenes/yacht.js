// Yacht story scenes: "Above Deck"
// Keys: yacht_0 through yacht_2
//
// ============================================================================
// THE MASTHEAD. Three views from one perch, drawn by the same helpers so the
// mast, the crosstrees and Maddie's things are the same objects each time.
//
//   ytSea(p, o)          sky, the island on the horizon, the sea far below
//   ytRig(o)             mast, masthead and pennant, crosstrees, shrouds, the
//                        foredeck a long way down
//   ytSeat(o)            Maddie's place on the starboard arm: blanket, tin
//                        mug, spyglass, the lantern hung under the spar
//   ytDeckBelow(p)       the straight-down view: hull, deck, the mast running
//                        away to its foot
//   ytCompass(p)         the compass with no needle
//
// CAPTAIN MADDIE IS NOT DRAWN. There is no approved model for her, and a
// figure is never hand-built (scene-art rule 1). Each beat is the view from
// beside her: she sits just past the right edge of the frame, and her things
// on the spar carry her. No hand is drawn either: a hand would have fixed her
// species and sleeve before her model exists, so the compass is held out on
// its lanyard, the cord leaving the top of the frame.
//
// Palette: there is no coast or sea biome in design/tokens.json; the beach
// biome is the island's midday sea and sky (sea, seaDeep, swell, foam, canvas,
// headland), so the yacht reads that. Light is upper left. Wind blows left to
// right in every beat.
// ============================================================================
const YT_B = bcArt.palette('beach');
const YT_SPAR = bcArt.mix(YT_B.drift, YT_B.accentDeep, 0.16);
const YT_ROPE = YT_B.grit;
const YT_BRASS = bcArt.mix(YT_B.grit, YT_B.gold, 0.38);
const YT_OPEN = '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">';

function ytN(v) { return Math.round(v * 100) / 100; }
function ytRng(seed) {
  let s = (seed || 1) * 9301 + 49297;
  return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}
// Eased loops: one spline per keyTimes interval, always.
function ytEase(attr, values, dur, begin) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(ytN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animate attributeName="${attr}" values="${values}" keyTimes="${times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
// Only ever placed on an element that carries no transform of its own.
function ytMove(type, values, dur, begin) {
  const k = values.split(';').length, times = [], ks = [];
  for (let i = 0; i < k; i++) times.push(ytN(i / (k - 1)));
  for (let i = 0; i < k - 1; i++) ks.push('0.42 0 0.58 1');
  return `<animateTransform attributeName="transform" type="${type}" values="${values}" keyTimes="${times.join(';')}" calcMode="spline" keySplines="${ks.join(';')}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite"/>`;
}
function ytBody(d, t, shadeD, hiD, sw) {
  return `<path d="${d}" fill="${t.base}"/>` + (shadeD ? `<path d="${shadeD}" fill="${t.shade || bcArt.shade(t.base)}"/>` : '') + (hiD ? `<path d="${hiD}" fill="${t.hi || bcArt.light(t.base)}"/>` : '') +
    (sw ? `<path d="${d}" fill="none" stroke="${t.ink}" stroke-width="${ytN(sw)}" stroke-linejoin="round"/>` : '');
}
// A rope or spar that thins with distance: one tapered shape, near end first.
function ytTaper(x0, y0, w0, x1, y1, w1) {
  const dx = x1 - x0, dy = y1 - y0, len = Math.sqrt(dx * dx + dy * dy) || 1, nx = -dy / len, ny = dx / len;
  return `M${ytN(x0 + nx * w0)},${ytN(y0 + ny * w0)} L${ytN(x1 + nx * w1)},${ytN(y1 + ny * w1)} L${ytN(x1 - nx * w1)},${ytN(y1 - ny * w1)} L${ytN(x0 - nx * w0)},${ytN(y0 - ny * w0)} Z`;
}
// Wind you can see: a long pale stroke that crosses and is gone.
function ytGust(x, y, len, dur, begin) {
  return `<path d="M${x},${y} q${ytN(len * 0.3)},-5 ${ytN(len * 0.6)},-1 t${ytN(len * 0.4)},-3" fill="none" stroke="${YT_B.foam}" stroke-width="1.2" stroke-linecap="round" opacity="0">` +
    ytMove('translate', `-60,0;40,-2;150,-3`, dur, begin) + ytEase('opacity', '0;0.55;0', dur, begin) + '</path>';
}
function ytCloud(x, y, s, dur, dx) {
  return `<g transform="translate(${x},${y}) scale(${s})"><g opacity="0.85">${ytMove('translate', `0,0;${dx},0;0,0`, dur)}` +
    `<path d="M-44,5 Q-46,-3 -30,-4 Q-26,-12 -10,-9 Q2,-17 18,-9 Q34,-12 40,-3 Q54,-3 50,5 Z" fill="${YT_B.canvas}"/><path d="M-44,5 Q0,0 50,5 Z" fill="${YT_B.headland}" opacity="0.5"/></g></g>`;
}
// A gull, small and far: it turns one wide circle on the wind.
function ytGull(x, y, s, rx, ry, dur, col) {
  return `<g transform="translate(${x - rx},${y})"><g><animateMotion dur="${dur}s" repeatCount="indefinite" path="M0,0 a${rx},${ry} 0 1,1 ${rx * 2},0 a${rx},${ry} 0 1,1 ${-rx * 2},0"/>` +
    `<g transform="scale(${s})"><path d="M-8,0 Q-4,-3.6 0,-0.4 Q4,-3.6 8,0 Q4,-1.6 0,1.2 Q-4,-1.6 -8,0 Z" fill="${col || YT_B.canvas}"/><path d="M-8,0 Q-6.4,-1.6 -5,-1.9 L-5.6,-0.6 Z M8,0 Q6.4,-1.6 5,-1.9 L5.6,-0.6 Z" fill="${YT_B.rock}"/></g></g></g>`;
}

// ----------------------------------------------------------------------------
// THE SEA from the masthead: horizon at o.hy, the island low on it to the
// west, the water darkening toward the eye, whitecaps running with the wind.
// ----------------------------------------------------------------------------
function ytSea(p, o) {
  o = o || {};
  const hy = o.hy || 120, H = (h, d) => bcArt.haze(h, d, 'beach'), r = ytRng(7);
  let s = bcArt.sky('beach', p);
  s += `<defs><radialGradient id="${p}-sun" cx="0.06" cy="0" r="0.95"><stop offset="0" stop-color="${YT_B.sun}" stop-opacity="0.66"/><stop offset="1" stop-color="${YT_B.sun}" stop-opacity="0"/></radialGradient>` +
    `<linearGradient id="${p}-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${H(YT_B.sea, 'far')}"/><stop offset="0.3" stop-color="${YT_B.sea}"/><stop offset="1" stop-color="${YT_B.seaDeep}"/></linearGradient></defs>`;
  s += `<rect width="500" height="${hy + 20}" fill="url(#${p}-sun)"/>`;
  s += ytCloud(330, 34, 1.1, 23, 46) + ytCloud(210, 72, 0.6, 31, 30) + ytCloud(440, 86, 0.5, 27, 26) + ytCloud(60, 96, 0.4, 35, 20);
  // the island, far: the observatory mountain is the kit's, a plane back
  s += bcArt.prop('mountain', { x: 300, y: hy + 1, w: 104, h: 42, snow: true, trail: false, depth: 'far', biome: 'beach', shadow: false });
  s += `<path d="M196,${hy} Q214,${hy - 9} 236,${hy - 8} Q262,${hy - 15} 290,${hy - 10} Q330,${hy - 14} 356,${hy - 7} Q384,${hy - 10} 410,${hy - 5} Q424,${hy - 4} 432,${hy} Z" fill="${H(YT_B.foliage, 'far')}"/>`;
  s += `<path d="M214,${hy} Q250,${hy - 7} 290,${hy - 5} Q320,${hy - 8} 350,${hy - 3} L360,${hy} Z" fill="${H(YT_B.foliage, 'bg')}" opacity="0.7"/>`;
  s += `<path d="M192,${hy + 0.6} L436,${hy + 0.6}" stroke="${H(YT_B.sand, 'bg')}" stroke-width="1.4" stroke-linecap="round"/>`;
  // sea
  s += `<rect x="0" y="${hy}" width="500" height="${260 - hy}" fill="url(#${p}-sea)"/>`;
  s += `<path d="M0,${hy} L500,${hy}" stroke="${YT_B.foam}" stroke-width="0.8" opacity="0.5"/>`;
  // the sun's road on the water, to the left
  [[40, hy + 5, 46], [28, hy + 12, 64], [50, hy + 21, 52], [20, hy + 33, 80], [44, hy + 48, 70], [10, hy + 68, 96]].forEach((g, i) => { s += `<path d="M${g[0]},${g[1]} h${g[2]}" stroke="${YT_B.sun}" stroke-width="${ytN(1 + i * 0.3)}" stroke-linecap="round" opacity="0.4">${ytEase('opacity', '0.2;0.6;0.2', ytN(2.3 + i * 0.47), ytN(i * 0.6))}</path>`; });
  // swell: rows of short marks, larger and further apart toward the eye
  let rows = '';
  for (let row = 0; row < 9; row++) {
    const k = row / 8, y = hy + 6 + k * k * (136 - 0) + row * 3, len = 5 + k * 26, gap = 30 + k * 70;
    let d = '';
    for (let x = -40 + r() * gap; x < 560; x += gap * (0.6 + r() * 0.8)) d += `M${ytN(x)},${ytN(y + (r() - 0.5) * 4)} q${ytN(len * 0.5)},${ytN(-1 - k * 3)} ${ytN(len)},0 `;
    rows += `<g>${ytMove('translate', `0,0;${ytN(6 + k * 16)},0;0,0`, ytN(4.6 + row * 0.53), ytN(row * 0.4))}<path d="${d}" fill="none" stroke="${row % 3 === 0 ? YT_B.foam : YT_B.swell}" stroke-width="${ytN(0.6 + k * 1.2)}" stroke-linecap="round" opacity="${ytN(0.3 + k * 0.3)}"/></g>`;
  }
  s += rows;
  return s;
}

// ----------------------------------------------------------------------------
// THE RIG. The mast comes up through the bottom of the frame at the left, the
// crosstrees cross it at y 153 to 188 and run off both edges, the masthead and
// its pennant are above. o.pennant: false drops the pennant (close shot).
// ----------------------------------------------------------------------------
function ytRig(o) {
  o = o || {};
  const w = bcArt.tone(YT_SPAR), m = bcArt.tone(YT_B.metal), rope = bcArt.tone(YT_ROPE), H = (h, d) => bcArt.haze(h, d, 'beach');
  let s = '';
  // the foredeck, a long way down, and the forestay running down to its stem
  const dk = bcArt.tone(H(YT_B.drift, 'bg'));
  s += `<path d="M-10,262 L-10,226 Q20,214 46,222 Q76,232 96,262 Z" fill="${H(YT_B.canvas, 'bg')}"/><path d="M-10,262 L-10,232 Q18,221 42,228 Q66,236 82,262 Z" fill="${dk.base}"/>`;
  s += `<path d="M-10,240 L52,236 M-10,250 L66,246 M14,262 L10,226" stroke="${dk.shade}" stroke-width="0.7" opacity="0.8"/><path d="M4,236 h18 v10 h-18 Z" fill="${H(YT_B.rockShade, 'bg')}"/>`;
  s += `<path d="${ytTaper(128, 44, 1, 44, 226, 0.3)}" fill="${H(YT_ROPE, 'mid')}"/>`;
  // far shrouds, behind the mast
  s += `<path d="${ytTaper(124, 44, 1.1, -14, 148, 0.8)}" fill="${rope.shade}"/>`;
  // the pennant, streaming to the right off its staff
  if (o.pennant !== false) {
    const c = bcArt.tone(YT_B.accent);
    const a = 'M136,6 Q152,1 168,7 Q184,13 202,9 Q190,13 172,15 Q154,11 136,18 Z', b = 'M136,6 Q152,11 168,5 Q184,1 204,13 Q190,17 172,11 Q154,19 136,18 Z';
    s += `<path d="M135,30 L135,2" stroke="${w.ink}" stroke-width="2.6" stroke-linecap="round"/><path d="M135,30 L135,2" stroke="${w.base}" stroke-width="1.4" stroke-linecap="round"/><circle cx="135" cy="2.4" r="2" fill="${YT_BRASS}" stroke="${bcArt.ink(YT_BRASS)}" stroke-width="0.7"/>`;
    s += `<path d="${a}" fill="${c.base}" stroke="${c.ink}" stroke-width="1.1" stroke-linejoin="round">${ytEase('d', `${a};${b};${a}`, 1.3)}</path>`;
  }
  // mast: a round spar, lit on the left, in shade on the right
  s += ytBody('M116,270 L123,36 L147,36 L152,270 Z', w, 'M140,36 L147,36 L152,270 L143,270 Z', 'M116,270 L123,36 L126.4,36 L120.6,270 Z', 1.6);
  s += `<path d="M131,60 L129,262 M137,52 L138,262" stroke="${w.shade}" stroke-width="0.7" opacity="0.6"/>`;
  // halyards down the face of the mast
  s += `<path d="M133,40 L132.4,270 M136.6,40 L137.4,270" stroke="${rope.ink}" stroke-width="1.6"/><path d="M133,40 L132.4,270 M136.6,40 L137.4,270" stroke="${rope.base}" stroke-width="0.8"/>`;
  // masthead: band, truck, the sheave the halyards run over
  s += ytBody('M121,36 L149,36 L149,46 L121,46 Z', m, 'M142,36 L149,36 L149,46 L142,46 Z', 'M121,36 L149,36 L149,38 L121,38 Z', 1.4);
  s += ytBody('M119,29 L151,29 L149,36 L121,36 Z', w, 'M143,29 L151,29 L149,36 L142,36 Z', null, 1.4);
  s += `<circle cx="135" cy="41" r="2.6" fill="${m.shade}" stroke="${m.ink}" stroke-width="0.8"/>`;
  // near shrouds: from the masthead out to the crosstree ends, off both edges
  s += `<path d="${ytTaper(148, 43, 1, 520, 147, 1.9)}" fill="${rope.ink}"/><path d="${ytTaper(148, 43, 0.5, 520, 147, 1.1)}" fill="${rope.base}"/>`;
  // crosstrees: top face then front face, thicker toward the near (right) end
  s += ytBody('M-20,153 L520,163 L520,172 L-20,158 Z', { base: w.hi, ink: w.ink }, null, null, 1.6);
  s += ytBody('M-20,158 L520,172 L520,190 L-20,168 Z', w, 'M-20,164.4 L520,184 L520,190 L-20,168 Z', null, 1.6);
  s += `<path d="M40,163.6 q60,2.6 120,4 M220,169.6 q80,3 170,6" fill="none" stroke="${w.shade}" stroke-width="0.8" opacity="0.7"/>`;
  // the iron that holds spar to mast, and its bolts
  s += ytBody('M112,152 L156,153 L156,188 L112,186 Z', m, 'M146,153 L156,153 L156,188 L146,187.6 Z', 'M112,152 L156,153 L156,155.4 L112,154.4 Z', 1.6);
  s += `<circle cx="119" cy="160" r="1.6" fill="${m.ink}"/><circle cx="119" cy="179" r="1.6" fill="${m.ink}"/><circle cx="149" cy="161" r="1.6" fill="${m.ink}"/><circle cx="149" cy="180" r="1.6" fill="${m.ink}"/>`;
  // lower shrouds, from under the crosstrees down and away out of frame
  s += `<path d="${ytTaper(152, 196, 1.2, 250, 270, 1.6)}" fill="${rope.ink}"/><path d="${ytTaper(152, 196, 0.6, 250, 270, 0.9)}" fill="${rope.base}"/>`;
  s += `<path d="${ytTaper(116, 196, 1.1, 70, 270, 1.4)}" fill="${rope.ink}"/><path d="${ytTaper(116, 196, 0.5, 70, 270, 0.8)}" fill="${rope.base}"/>`;
  // a coil of spare line hung on the mast under the spar, its tail in the wind
  s += `<g transform="translate(134,204)"><ellipse cx="0" cy="14" rx="9" ry="13" fill="none" stroke="${rope.ink}" stroke-width="5.4"/><ellipse cx="0" cy="14" rx="9" ry="13" fill="none" stroke="${rope.base}" stroke-width="3.6"/><ellipse cx="0" cy="14" rx="9" ry="13" fill="none" stroke="${rope.shade}" stroke-width="0.8"/><ellipse cx="0.8" cy="14" rx="6.6" ry="10.6" fill="none" stroke="${rope.hi}" stroke-width="0.9" opacity="0.7"/>` +
    `<path d="M-4,0 L4,0 L4,5 L-4,5 Z" fill="${rope.shade}" stroke="${rope.ink}" stroke-width="1"/><g>${ytMove('rotate', '-6 6 27;14 6 27;-6 6 27', 1.9)}<path d="M6,27 q8,4 16,1" fill="none" stroke="${rope.ink}" stroke-width="3.4" stroke-linecap="round"/><path d="M6,27 q8,4 16,1" fill="none" stroke="${rope.base}" stroke-width="1.9" stroke-linecap="round"/></g></g>`;
  return s;
}

// ----------------------------------------------------------------------------
// MADDIE'S PLACE, on the starboard arm. She is out of frame to the right; what
// she brought up with her is here. Everything sits on the spar's top face
// (y = 163 + (x - 0) * 10 / 540 ... the helper works it out) or hangs from it.
// ----------------------------------------------------------------------------
function ytSparTop(x) { return 155.5 + (x + 20) * (167.5 - 155.5) / 540; }
function ytMug(x, s) {
  const y = ytSparTop(x) + 2.6, t = bcArt.tone(YT_B.metal);
  let g = `<ellipse cx="1" cy="0" rx="9" ry="1.8" fill="#0a0806" opacity="0.3"/>` +
    `<path d="M5.6,-10 C12,-11 12,-2 5,-3" fill="none" stroke="${t.ink}" stroke-width="3.4" stroke-linecap="round"/><path d="M5.6,-10 C12,-11 12,-2 5,-3" fill="none" stroke="${t.shade}" stroke-width="1.7" stroke-linecap="round"/>` +
    ytBody('M-6,-13 L-5.4,-1 Q0,1 5.4,-1 L6,-13 Z', t, 'M2.4,-13 L6,-13 L5.4,-1 Q3.6,-0.2 2,0 Z', 'M-5,-12 L-4.2,-12 L-3.6,-2 L-4.4,-2 Z', 1.3) +
    `<ellipse cx="0" cy="-13" rx="6" ry="1.5" fill="${t.hi}" stroke="${t.ink}" stroke-width="1"/><ellipse cx="0" cy="-12.8" rx="4.8" ry="1" fill="${YT_B.coffee}"/><path d="M-6,-10.4 Q0,-8.8 6,-10.4" fill="none" stroke="${bcArt.shade(YT_B.seaDeep, 0.2)}" stroke-width="1.2"/>`;
  // steam, torn off to the right by the wind
  [[2.1, 0], [2.6, 0.9], [1.8, 1.5]].forEach((q) => { g += `<path d="M0,-15 q3,-4 8,-4 t9,-3" fill="none" stroke="${YT_B.steam}" stroke-width="1.3" stroke-linecap="round" opacity="0">${ytMove('translate', '0,0;8,-3;20,-5', q[0], q[1])}${ytEase('opacity', '0;0.7;0', q[0], q[1])}</path>`; });
  return `<g transform="translate(${x},${ytN(y)}) scale(${s})">${g}</g>`;
}
function ytSpyglass(x, s) {
  const y = ytSparTop(x) + 3.4, b = bcArt.tone(YT_BRASS), lt = bcArt.tone(bcArt.shade(YT_B.accentDeep, 0.3));
  return `<g transform="translate(${x},${ytN(y)}) scale(${s}) rotate(1.3)"><ellipse cx="2" cy="0.4" rx="27" ry="1.9" fill="#0a0806" opacity="0.3"/>` +
    ytBody('M-26,-7.6 L-6,-8 L-6,-0.4 L-26,-0.8 Z', lt, 'M-26,-2.6 L-6,-2.4 L-6,-0.4 L-26,-0.8 Z', 'M-26,-7.6 L-6,-8 L-6,-6.8 L-26,-6.4 Z', 1.2) +
    ytBody('M-6,-7.2 L10,-6.8 L10,-1.2 L-6,-1 Z', b, 'M-6,-2.6 L10,-2.8 L10,-1.2 L-6,-1 Z', 'M-6,-7.2 L10,-6.8 L10,-5.8 L-6,-6.2 Z', 1.2) +
    ytBody('M10,-6.2 L24,-5.8 L24,-2 L10,-1.8 Z', b, 'M10,-3 L24,-3.2 L24,-2 L10,-1.8 Z', 'M10,-6.2 L24,-5.8 L24,-5 L10,-5.4 Z', 1.2) +
    ytBody('M-28.4,-8.4 L-25.4,-8.4 L-25.4,0 L-28.4,0 Z', b, null, null, 1.1) + ytBody('M-7.4,-8.6 L-5,-8.6 L-5,0.2 L-7.4,0.2 Z', b, null, null, 1.1) + ytBody('M23,-6.6 L26,-6.6 L26,-1.4 L23,-1.4 Z', b, null, null, 1.1) + '</g>';
}
function ytSeat(o) {
  o = o || {};
  const c = bcArt.tone(YT_B.accent), st = bcArt.tone(YT_B.canvas);
  let s = '';
  // the lantern she climbed up with, hung under the spar and swinging
  if (o.lantern !== false) {
    s += `<g>${ytMove('rotate', '-5 258 180;7 258 180;-5 258 180', 2.9)}` + bcArt.prop('lantern', { x: 258, y: 180, hang: true, lit: false, biome: 'beach', depth: 'fg', scale: 1.1 }) + '</g>';
    s += `<path d="M254,176 L262,176 L262,181 L254,181 Z" fill="${bcArt.tone(YT_B.metal).shade}" stroke="${bcArt.tone(YT_B.metal).ink}" stroke-width="1"/>`;
  }
  s += ytSpyglass(332, 1) + ytMug(392, 1.15);
  // her blanket, folded over the spar where she sits: it runs out of frame
  const top = ytSparTop(436), d = `M434,${ytN(top - 3)} Q470,${ytN(top - 6)} 520,${ytN(top - 4)} L520,222 Q494,228 470,220 Q452,226 438,216 Q440,196 434,${ytN(top - 3)} Z`;
  s += ytBody(d, c, `M434,${ytN(top - 3)} Q440,196 438,216 Q446,221 452,222 Q450,196 446,${ytN(top - 2)} Z`, `M434,${ytN(top - 3)} Q470,${ytN(top - 6)} 520,${ytN(top - 4)} L520,${ytN(top + 2)} Q470,${ytN(top)} 436,${ytN(top + 3)} Z`, 1.6);
  s += `<path d="M440,${ytN(top + 14)} Q480,${ytN(top + 10)} 520,${ytN(top + 13)} M440,${ytN(top + 22)} Q480,${ytN(top + 18)} 520,${ytN(top + 21)}" fill="none" stroke="${st.base}" stroke-width="3.2" opacity="0.85"/>`;
  s += `<path d="M462,${ytN(top + 4)} Q466,200 470,220 M492,${ytN(top + 2)} Q494,200 498,224" fill="none" stroke="${c.shade}" stroke-width="1"/>`;
  // the loose corner, which the wind keeps lifting
  s += `<g>${ytMove('rotate', '-4 438 214;9 438 214;-4 438 214', 1.5)}` + ytBody('M438,214 Q428,222 422,236 Q436,236 452,222 Z', c, 'M438,214 Q444,224 452,222 Q442,232 430,236 Q438,226 438,214 Z', null, 1.4) + '</g>';
  return s;
}

// Scene 0: out at the top of the mast. The island is a long way off and a long
// way down, the wind is in everything, and somebody was here first.
STORY_SCENES['yacht_0'] = YT_OPEN + ytSea('yt0', {}) +
  ytGull(250, 150, 0.9, 40, 9, 17) + ytGull(380, 196, 1.3, 54, 12, 23, YT_B.foam) +
  ytRig({}) + ytSeat({}) +
  ytGust(40, 70, 90, 2.6, 0) + ytGust(200, 110, 120, 3.1, 0.9) + ytGust(160, 216, 140, 2.3, 1.6) + ytGust(300, 40, 80, 2.9, 2.2) + ytGust(260, 236, 110, 3.4, 0.4) +
  '</svg>';

// ----------------------------------------------------------------------------
// STRAIGHT DOWN. The same mast, seen along its length to its foot; the deck
// small and pale with distance; the sea all round it.
// ----------------------------------------------------------------------------
function ytDeckBelow(p) {
  const H = (h) => bcArt.haze(h, 'mid', 'beach'), r = ytRng(11);
  const dk = bcArt.tone(H(YT_B.drift)), cv = bcArt.tone(H(YT_B.canvas)), tr = bcArt.tone(H(YT_SPAR)), w = bcArt.tone(YT_SPAR), m = bcArt.tone(YT_B.metal), rope = bcArt.tone(YT_ROPE);
  let s = `<defs><radialGradient id="${p}-sea" cx="0.56" cy="0.42" r="0.8"><stop offset="0" stop-color="${YT_B.sea}"/><stop offset="0.6" stop-color="${bcArt.mix(YT_B.sea, YT_B.seaDeep, 0.6)}"/><stop offset="1" stop-color="${bcArt.shade(YT_B.seaDeep, 0.2)}"/></radialGradient></defs>`;
  s += `<rect width="500" height="260" fill="url(#${p}-sea)"/>`;
  // the swell from above: short curved marks, all running the wind's way
  let d1 = '', d2 = '';
  for (let i = 0; i < 90; i++) { const x = r() * 520 - 10, y = r() * 270 - 5, l = 8 + r() * 16; if (i % 3) d1 += `M${ytN(x)},${ytN(y)} q${ytN(l * 0.5)},${ytN(-2 - r() * 2)} ${ytN(l)},0 `; else d2 += `M${ytN(x)},${ytN(y)} q${ytN(l * 0.5)},${ytN(-2 - r() * 2)} ${ytN(l)},0 `; }
  s += `<g>${ytMove('translate', '0,0;9,2;0,0', 5.3)}<path d="${d1}" fill="none" stroke="${YT_B.swell}" stroke-width="1" stroke-linecap="round" opacity="0.4"/></g><g>${ytMove('translate', '0,0;13,3;0,0', 6.7, 1.1)}<path d="${d2}" fill="none" stroke="${YT_B.foam}" stroke-width="1.1" stroke-linecap="round" opacity="0.5"/></g>`;
  // THE HULL, in its own frame: bow at -y, 184 long, 58 in the beam
  const hull = 'M0,-92 Q23,-60 29,-10 Q31,40 20,88 L-20,88 Q-31,40 -29,-10 Q-23,-60 0,-92 Z', deck = 'M0,-86 Q20,-58 25.4,-10 Q27,38 17.4,84 L-17.4,84 Q-27,38 -25.4,-10 Q-20,-58 0,-86 Z';
  let b = '';
  // her shadow on the water, and the water she pushes aside
  b += `<path d="${hull}" fill="${bcArt.shade(YT_B.seaDeep, 0.4)}" opacity="0.45" transform="translate(9,7)"/>`;
  b += `<path d="M-22,90 Q-30,104 -26,122 M22,90 Q30,104 26,122 M-8,90 Q-10,108 -6,128 M8,90 Q10,108 6,128" fill="none" stroke="${YT_B.foam}" stroke-width="1.6" stroke-linecap="round" opacity="0.4">${ytEase('opacity', '0.22;0.5;0.22', 3.3)}</path>`;
  b += `<path d="M0,-94 L0,-116" stroke="${tr.ink}" stroke-width="3.4" stroke-linecap="round"/><path d="M0,-94 L0,-116" stroke="${tr.base}" stroke-width="1.8" stroke-linecap="round"/>`;
  b += `<path d="${hull}" fill="${cv.base}" stroke="${cv.ink}" stroke-width="1.2" stroke-linejoin="round"/><path d="${deck}" fill="${dk.base}"/>`;
  b += `<path d="M10,-74 Q20,-40 21,-10 Q22,38 13.4,84 L17.4,84 Q27,38 25.4,-10 Q20,-58 0,-86 Z" fill="${dk.shade}" opacity="0.5"/>`;
  b += `<path d="M-8,-70 L-8,84 M0,-84 L0,84 M8,-70 L8,84 M-16,-44 L-14,84 M16,-44 L14,84" stroke="${dk.shade}" stroke-width="0.6" opacity="0.8"/>`;
  // fore hatch, open: the way down
  b += `<path d="M-7,-62 L7,-62 L7,-48 L-7,-48 Z" fill="${H(YT_B.rockShade)}" stroke="${dk.ink}" stroke-width="0.9"/><path d="M-7,-62 L7,-62 L9,-67 L-5,-67 Z" fill="${tr.base}" stroke="${tr.ink}" stroke-width="0.8"/><path d="M-3,-60 L-3,-50 M1,-60 L1,-50" stroke="${dk.base}" stroke-width="0.6" opacity="0.5"/>`;
  // cabin top with two skylights and the companionway hatch slid open
  b += ytBody('M-14,-6 Q-14,-10 -10,-10 L10,-10 Q14,-10 14,-6 L14,38 L-14,38 Z', cv, 'M8,-10 L10,-10 Q14,-10 14,-6 L14,38 L8,38 Z', null, 1);
  b += `<path d="M-9,-4 h8 v9 h-8 Z M2,-4 h8 v9 h-8 Z" fill="${H(YT_B.seaShallow)}" stroke="${cv.ink}" stroke-width="0.7"/><path d="M-6,24 L6,24 L6,38 L-6,38 Z" fill="${H(YT_B.rockShade)}" stroke="${cv.ink}" stroke-width="0.8"/><path d="M-7,14 L7,14 L7,25 L-7,25 Z" fill="${tr.base}" stroke="${tr.ink}" stroke-width="0.8"/>`;
  // cockpit and wheel
  b += `<path d="M-13,46 L13,46 L11,78 L-11,78 Z" fill="${dk.shade}" stroke="${dk.ink}" stroke-width="0.9"/><path d="M-13,46 L13,46 L12.6,50 L-12.6,50 Z" fill="${dk.ink}" opacity="0.4"/>`;
  b += `<circle cx="0" cy="68" r="5" fill="none" stroke="${tr.ink}" stroke-width="2.2"/><circle cx="0" cy="68" r="5" fill="none" stroke="${tr.base}" stroke-width="1.1"/><path d="M-5,68 L5,68 M0,63 L0,73" stroke="${tr.ink}" stroke-width="0.7"/>`;
  // boom and the furled main, swung a little to starboard
  b += `<path d="${ytTaper(0, -22, 3.6, 7, 62, 2.8)}" fill="${cv.hi}" stroke="${cv.ink}" stroke-width="1" stroke-linejoin="round"/><path d="M-3,-8 L4.6,-8.6 M-2.4,10 L5.4,9.4 M-1.4,28 L6.2,27.4 M-0.4,46 L7,45.4" stroke="${H(YT_B.accentDeep)}" stroke-width="1.1"/>`;
  // rails and the two anchors of everything: stem and stern
  b += `<path d="${deck}" fill="none" stroke="${dk.ink}" stroke-width="0.8"/><circle cx="0" cy="-84" r="1.8" fill="${H(YT_B.metal)}" stroke="${dk.ink}" stroke-width="0.6"/><circle cx="0" cy="82" r="1.6" fill="${H(YT_B.metal)}" stroke="${dk.ink}" stroke-width="0.6"/>`;
  // Benson, or the splashing at least: rings off the starboard side, clear of
  // the mast's line, and again further aft a moment later
  const ring = (x, y, R, dur, begin) => `<ellipse cx="${x}" cy="${y}" rx="1.5" ry="1.2" fill="none" stroke="${YT_B.foam}" stroke-width="2" opacity="0">${ytEase('rx', `1.5;${ytN(R * 0.6)};${R}`, dur, begin)}${ytEase('ry', `1.2;${ytN(R * 0.5)};${ytN(R * 0.82)}`, dur, begin)}${ytEase('opacity', '0;0.95;0', dur, begin)}</ellipse>`;
  b += ring(56, 22, 30, 2.8, 0) + ring(56, 22, 27, 3.1, 0.9) + ring(56, 22, 16, 2.5, 1.7) + ring(48, 66, 19, 3.4, 1.3) + ring(48, 66, 17, 3.9, 2.4);
  b += `<path d="M50,24 q2,-11 5,-2 q2,-13 5,-1 q2,-9 4,3 Z" fill="${YT_B.foam}" opacity="0">${ytEase('opacity', '0;0.95;0.6;0', 2.2)}</path>`;
  [[50, 16, 1.4, 0, 1.4], [62, 14, 1.2, 0.3, 1.7], [57, 10, 1, 0.6, 1.2]].forEach((q) => { b += `<circle cx="${q[0]}" cy="${q[1]}" r="${q[2]}" fill="${YT_B.foam}" opacity="0">${ytMove('translate', `0,0;${q[0] < 55 ? -4 : 4},-5;${q[0] < 55 ? -7 : 7},3`, q[4], q[3])}${ytEase('opacity', '0;1;0', q[4], q[3])}</circle>`; });
  s += `<g transform="translate(288,116) rotate(9)">${b}</g>`;
  // gulls, below us
  s += ytGull(410, 70, 1.5, 34, 20, 15) + ytGull(120, 110, 1.1, 28, 16, 19, YT_B.foam);
  // stays and shrouds: from up here down to the stem, the stern, the rails
  const foot = [284.6, 94.3];
  s += `<path d="${ytTaper(150, 228, 1.4, 302.4, 33, 0.3)}" fill="${rope.shade}"/><path d="${ytTaper(520, 150, 1.6, 316, 110, 0.3)}" fill="${rope.shade}"/><path d="${ytTaper(-10, 150, 1.4, 260, 100, 0.3)}" fill="${rope.shade}"/><path d="${ytTaper(170, 250, 1.2, 275, 197, 0.3)}" fill="${rope.shade}" opacity="0.8"/>`;
  // THE MAST, from the eye down to its foot on the deck
  const near = [84, 284], dx = foot[0] - near[0], dy = foot[1] - near[1], len = Math.sqrt(dx * dx + dy * dy), nx = -dy / len, ny = dx / len;
  const q = (t, o) => [ytN(near[0] + dx * t + nx * o * (46 - 43.4 * t)), ytN(near[1] + dy * t + ny * o * (46 - 43.4 * t))].join(',');
  s += `<path d="M${q(0, 1)} L${q(1, 1)} L${q(1, -1)} L${q(0, -1)} Z" fill="${w.base}"/><path d="M${q(0, 1)} L${q(1, 1)} L${q(1, 0.4)} L${q(0, 0.4)} Z" fill="${w.shade}"/><path d="M${q(0, -1)} L${q(1, -1)} L${q(1, -0.74)} L${q(0, -0.74)} Z" fill="${w.hi}"/>`;
  s += `<path d="M${q(0, 0.1)} L${q(1, 0.1)} M${q(0, -0.3)} L${q(1, -0.3)}" stroke="${rope.ink}" stroke-width="1.4" opacity="0.7"/><path d="M${q(0.3, 1)} L${q(0.3, -1)} M${q(0.56, 1)} L${q(0.56, -1)} M${q(0.76, 1)} L${q(0.76, -1)}" stroke="${m.ink}" stroke-width="2.2" opacity="0.6"/>`;
  s += `<path d="M${q(0, 1)} L${q(1, 1)} L${q(1, -1)} L${q(0, -1)} Z" fill="none" stroke="${w.ink}" stroke-width="1.6" stroke-linejoin="round"/>`;
  // distance: the far half of the mast and everything under it sits in haze
  s += `<path d="M${q(0.45, 1)} L${q(1, 1)} L${q(1, -1)} L${q(0.45, -1)} Z" fill="${YT_B.haze}" opacity="0.3"/>`;
  return s;
}

// Scene 1: "He is still down there somewhere, if you hear splashing."
// The view straight down past the crosstree: mast, deck, sea, and the rings
// of something splashing alongside.
STORY_SCENES['yacht_1'] = YT_OPEN + ytDeckBelow('yt1') +
  // the crosstree we are sitting on, across the bottom of the frame
  (function () {
    const w = bcArt.tone(YT_SPAR), m = bcArt.tone(YT_B.metal), c = bcArt.tone(YT_B.accent), st = bcArt.tone(YT_B.canvas);
    let s = '';
    s += `<path d="M-20,250 L520,196 L520,206 L-20,262 Z" fill="#0a0806" opacity="0.18" transform="translate(0,10)"/>`;
    s += ytBody('M-20,222 L520,168 L520,202 L-20,262 Z', w, 'M-20,250 L520,192 L520,202 L-20,262 Z', 'M-20,222 L520,168 L520,173 L-20,228 Z', 1.6);
    s += `<path d="M30,232 q90,-10 180,-18 M260,206 q90,-10 200,-20" fill="none" stroke="${w.shade}" stroke-width="0.9" opacity="0.7"/>`;
    // the iron at the mast
    s += ytBody('M40,214 L132,204.6 L132,246 L40,256.6 Z', m, 'M40,246 L132,236 L132,246 L40,256.6 Z', 'M40,214 L132,204.6 L132,208 L40,217.4 Z', 1.6);
    s += `<circle cx="52" cy="224" r="2.2" fill="${m.ink}"/><circle cx="52" cy="246" r="2.2" fill="${m.ink}"/><circle cx="120" cy="216" r="2.2" fill="${m.ink}"/><circle cx="120" cy="238" r="2.2" fill="${m.ink}"/>`;
    // her blanket, the same one, folded over the spar at the right
    s += ytBody('M404,174 Q460,164 520,160 L520,214 Q470,222 430,216 Q414,222 402,214 Q408,196 404,174 Z', c, 'M404,174 Q408,196 402,214 Q410,219 418,219 Q416,196 414,173 Z', 'M404,174 Q460,164 520,160 L520,167 Q460,171 405,181 Z', 1.6);
    s += `<path d="M408,190 Q464,180 520,176 M407,200 Q464,190 520,186" fill="none" stroke="${st.base}" stroke-width="3.6" opacity="0.85"/>`;
    s += `<g>${ytMove('rotate', '-4 404 212;8 404 212;-4 404 212', 1.6)}` + ytBody('M404,212 Q392,222 388,238 Q402,236 418,220 Z', c, 'M404,212 Q410,222 418,220 Q408,232 396,237 Q404,226 404,212 Z', null, 1.4) + '</g>';
    return s;
  })() +
  ytGust(60, 60, 110, 2.7, 0.3) + ytGust(240, 150, 120, 3.2, 1.4) + ytGust(120, 196, 100, 2.4, 2.1) +
  '</svg>';

// ----------------------------------------------------------------------------
// THE COMPASS. Brass hunter case, lid thrown back, a card with a rose on it,
// a pivot pin in the middle, and no needle. Origin at the centre of the card;
// the bow (ring) is at the top. About 104 across.
// ----------------------------------------------------------------------------
function ytCompass(p) {
  const b = bcArt.tone(YT_BRASS), card = bcArt.tone(YT_B.paper), ink = YT_B.printInk;
  let s = `<defs><radialGradient id="${p}-card" cx="0.4" cy="0.36" r="0.7"><stop offset="0" stop-color="${card.hi}"/><stop offset="1" stop-color="${card.base}"/></radialGradient>` +
    `<radialGradient id="${p}-halo"><stop offset="0.55" stop-color="${YT_B.gold}" stop-opacity="0.34"/><stop offset="1" stop-color="${YT_B.gold}" stop-opacity="0"/></radialGradient></defs>`;
  // it is doing something: a slow glow off the card
  s += `<circle r="84" fill="url(#${p}-halo)">${ytEase('opacity', '0.25;0.8;0.25', 4.4)}</circle>`;
  // lid, thrown back behind the case, hinge at the top
  s += ytBody('M-40,-52 A44,24 0 0 1 40,-52 Q30,-34 0,-34 Q-30,-34 -40,-52 Z', b, 'M12,-74 A44,24 0 0 1 40,-52 Q34,-40 20,-36 Q30,-52 12,-74 Z', 'M-40,-52 A44,24 0 0 1 -8,-75.6 Q-28,-66 -34,-52 Z', 1.8);
  s += `<path d="M-26,-54 A30,15 0 0 1 26,-54" fill="none" stroke="${b.shade}" stroke-width="1.2"/>`;
  // bow and stem
  s += `<circle cx="0" cy="-66" r="9" fill="none" stroke="${b.ink}" stroke-width="6.4"/><circle cx="0" cy="-66" r="9" fill="none" stroke="${b.base}" stroke-width="3.6"/><path d="M-6.6,-71.6 A9,9 0 0 1 3,-74.6" fill="none" stroke="${b.hi}" stroke-width="1.4" stroke-linecap="round"/>`;
  s += ytBody('M-7,-58 L7,-58 L8.6,-49 L-8.6,-49 Z', b, 'M3,-58 L7,-58 L8.6,-49 L4,-49 Z', null, 1.6);
  // case
  s += `<circle r="52" fill="${b.base}"/><path d="M36,-37.6 A52,52 0 0 1 -30,42.4 A58,58 0 0 0 36,-37.6 Z" fill="${b.shade}"/><path d="M-44,-27.6 A52,52 0 0 1 16,-49.4 A60,60 0 0 0 -44,-27.6 Z" fill="${b.hi}"/><circle r="52" fill="none" stroke="${b.ink}" stroke-width="1.8"/>`;
  s += `<circle r="44" fill="${b.shade}" stroke="${b.ink}" stroke-width="1.2"/><circle r="41" fill="url(#${p}-card)" stroke="${card.ink}" stroke-width="1"/>`;
  // degree ring
  let ticks = '';
  for (let i = 0; i < 48; i++) { const a = i * Math.PI / 24, r0 = i % 12 === 0 ? 31 : i % 4 === 0 ? 34 : 36.6; ticks += `M${ytN(Math.sin(a) * r0)},${ytN(-Math.cos(a) * r0)} L${ytN(Math.sin(a) * 39.4)},${ytN(-Math.cos(a) * 39.4)} `; }
  s += `<path d="${ticks}" stroke="${ink}" stroke-width="0.9" opacity="0.8"/><circle r="29.4" fill="none" stroke="${ink}" stroke-width="0.6" opacity="0.6"/>`;
  // the rose: eight points, each split light and dark
  const pt = (a, len, wd, c1, c2) => `<g transform="rotate(${a})"><path d="M0,${-len} L${-wd},0 L0,0 Z" fill="${c1}"/><path d="M0,${-len} L${wd},0 L0,0 Z" fill="${c2}"/><path d="M0,${-len} L${-wd},0 L${wd},0 Z" fill="none" stroke="${ink}" stroke-width="0.6" stroke-linejoin="round"/></g>`;
  // printed on the card and faded: every point the same ink, so none of them
  // can be taken for a needle. North is only a small mark out on the ring.
  s += '<g opacity="0.62">';
  [45, 135, 225, 315].forEach((a) => { s += pt(a, 13, 2.8, card.shade, bcArt.mix(card.shade, ink, 0.3)); });
  [0, 90, 180, 270].forEach((a) => { s += pt(a, 22, 4, card.hi, bcArt.mix(card.shade, ink, 0.42)); });
  s += '</g>';
  s += `<path d="M0,-28 L-2.6,-23.4 L2.6,-23.4 Z" fill="${YT_B.accentDeep}" opacity="0.8"/>`;
  // where a needle would turn: the pivot pin, bare, with its little shadow
  s += `<ellipse cx="2.2" cy="2.6" rx="6.4" ry="5.8" fill="#0a0806" opacity="0.22"/><circle r="5.6" fill="${b.base}" stroke="${b.ink}" stroke-width="1.2"/><circle r="2.2" fill="${b.ink}"/><circle cx="-1.9" cy="-2" r="1.3" fill="${b.hi}"/>`;
  // glass: one curved glare, and a glint that comes and goes
  s += `<path d="M-33,-12 A36,36 0 0 1 -6,-35 A44,44 0 0 0 -33,-12 Z" fill="${YT_B.foam}" opacity="0.55"/><path d="M24,28 A36,36 0 0 0 33,12" fill="none" stroke="${YT_B.foam}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`;
  s += `<path d="M-36,-40 l2.4,-8 l2.4,8 l8,2.4 l-8,2.4 l-2.4,8 l-2.4,-8 l-8,-2.4 Z" fill="${YT_B.sun}" opacity="0.5">${ytEase('opacity', '0.1;0.95;0.1', 3.1)}</path>`;
  return s;
}

// Scene 2: the compass with no needle, held out to you on its lanyard. Past it,
// the island you came from. Her blanket and mug at the right, as before.
STORY_SCENES['yacht_2'] = YT_OPEN +
  `<g transform="translate(250,150) scale(1.5) translate(-330,-136)">` + ytSea('yt2', {}) + ytRig({ pennant: false }) + ytSeat({ lantern: false }) + '</g>' +
  `<rect width="500" height="260" fill="${YT_B.haze}" opacity="0.1"/>` +
  ytGust(20, 60, 130, 2.8, 0.2) + ytGust(260, 226, 120, 3.3, 1.5) +
  // the lanyard comes down from the top of the frame (her side), and the
  // compass hangs on it, turning a little in the wind
  `<g>${ytMove('rotate', '-2.6 238 -40;3.4 238 -40;-2.6 238 -40', 3.7)}` +
  `<path d="M235,-10 L226,60 M241,-10 L232,60" stroke="${bcArt.ink(YT_B.accentDeep)}" stroke-width="3.6" stroke-linecap="round"/><path d="M235,-10 L226,60 M241,-10 L232,60" stroke="${YT_B.accentDeep}" stroke-width="2" stroke-linecap="round"/>` +
  `<path d="M224,57 L234,58.6 L233,66 L223,64.4 Z" fill="${YT_BRASS}" stroke="${bcArt.ink(YT_BRASS)}" stroke-width="1.1" stroke-linejoin="round"/>` +
  `<g transform="translate(222,118) rotate(7) scale(0.88)">${ytCompass('yt2c')}</g></g>` +
  '</svg>';
