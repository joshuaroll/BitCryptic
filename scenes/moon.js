// Moon story scenes — "The Mark on The Moon"
// Keys: moon_0 through moon_7

// ============================================================================
// MARK'S HABITAT. One building, drawn by these helpers in every moon scene so
// it cannot drift: a hemispherical glass dome, five meridian glazing bars and
// two latitude rings, frame colour #d4d0c0, an arched airlock facing the
// viewer, a service module with mast and dish on the sunward (right) side.
// Inside, the same shell seen from the deck: the same five meridians and two
// rings, the same plank floor sweeping out to meet the glass, sconces fixed to
// the second meridian on each side.
// ============================================================================
const MOON_FRAME = '#d4d0c0';
function moonSpline(v, dur, begin) {
  return `<animate attributeName="opacity" values="${v}" dur="${dur}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>`;
}
// Exterior. Origin is the centre of the dome's base on the dust; s=1 is a
// 56-wide dome. o.glow / o.door: interior and airlock light, [low, high].
function moonHabitat(cx, gy, s, o) {
  o = o || {};
  const g = o.glow || [0.14, 0.26], d = o.door || [0.12, 0.22];
  const mid = (a) => ((a[0] + a[1]) / 2).toFixed(2);
  return `<g transform="translate(${cx},${gy}) scale(${s})">
<ellipse cx="0" cy="0" rx="30" ry="5" fill="#4e4c46" opacity="0.55"/>
<path d="M30,0 L30,-12 Q30,-16 34,-16 L46,-16 Q50,-16 50,-12 L50,0 Z" fill="#3a382f" stroke="${MOON_FRAME}" stroke-width="0.6" opacity="0.85"/>
<path d="M32,-14 L48,-14 L48,-10 L32,-10 Z" fill="#8a8880" opacity="0.35"/>
<path d="M38,-16 L39,-34" stroke="#9a9890" stroke-width="0.9" opacity="0.6" fill="none"/>
<path d="M32,-30 A7,7 0 0 1 46,-36 L39,-33 Z" fill="#5a5850" stroke="#9a9890" stroke-width="0.7" opacity="0.75"/>
<path d="M43,-35 A7,7 0 0 0 33,-31" fill="none" stroke="#b0aea4" stroke-width="0.5" opacity="0.4"/>
<path d="M39,-33 L42,-39" stroke="#9a9890" stroke-width="0.5" opacity="0.5" fill="none"/>
<circle cx="42.5" cy="-40" r="1.1" fill="#ffe880" opacity="0.7">${moonSpline('0.25;0.9;0.25', o.beacon || 2.8)}</circle>
<path d="M-28,0 Q-28,-28 0,-29.3 Q28,-28 28,0 Z" fill="#33312a" stroke="${MOON_FRAME}" stroke-width="1" opacity="0.92"/>
<path d="M-23,0 Q-23,-23 0,-24.1 Q23,-23 23,0 Z" fill="#ffe27a" opacity="${mid(g)}">${moonSpline(`${g[0]};${g[1]};${g[0]}`, o.glowDur || 4.6)}</path>
<path d="M0,-29.3 L0,0 M-11.5,-28.5 Q-12.5,-14 -12.7,0 M11.5,-28.5 Q12.5,-14 12.7,0 M-21,-24.8 Q-23.4,-12.7 -23.9,0 M21,-24.8 Q23.4,-12.7 23.9,0" stroke="${MOON_FRAME}" stroke-width="0.6" opacity="0.4" fill="none"/>
<path d="M-26.2,-16.8 Q0,-19.9 26.2,-16.8" stroke="${MOON_FRAME}" stroke-width="0.5" opacity="0.3" fill="none"/>
<path d="M-19.5,-22.7 Q0,-25.5 19.5,-22.7" stroke="${MOON_FRAME}" stroke-width="0.4" opacity="0.22" fill="none"/>
<path d="M17.9,-24 Q28,-16.8 28,0 L21,0 Q21,-11.55 14.65,-17.05 Z" fill="${MOON_FRAME}" opacity="0.16"/>
<path d="M-6,0 L-6,-10 A6,6 0 0,1 6,-10 L6,0 Z" fill="#2e2a1e" stroke="${MOON_FRAME}" stroke-width="0.7" opacity="0.9"/>
<path d="M-4.2,0 L-4.2,-9.6 A4.2,4.2 0 0,1 4.2,-9.6 L4.2,0 Z" fill="#ffe880" opacity="${mid(d)}">${moonSpline(`${d[0]};${d[1]};${d[0]}`, o.doorDur || 5.3)}</path>
<path d="M0,-13.8 L0,0" stroke="${MOON_FRAME}" stroke-width="0.4" opacity="0.35" fill="none"/>
<path d="M-30,0 A30,5 0 0,0 30,0" stroke="${MOON_FRAME}" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M-8,1 Q0,-1 8,1 Q2,8 -8,1 Z" fill="#ffe880" opacity="${(d[1] * 0.75).toFixed(2)}"/>
</g>`;
}
// Interior, back half: everything seen through the glass. Dark sky, stars,
// Earth, and ONE low dim lunar horizon with the same two craters. This is the
// only outside any interior view gets: the plain is at infinity, so it sits
// at the same screen place in the wide and close shots. Never paint a
// scene-local plain over it. Then moonDomeShell.
// o.bg: bottom colour of the backdrop. o.earth: [x, y, r, opacity].
function moonDomeRoom(p, o) {
  o = o || {};
  const [ex, ey, er, eo] = o.earth || [400, 45, 10, 0.55];
  const k = er / 10, E = (dx, dy) => `${(ex + dx * k).toFixed(1)},${(ey + dy * k).toFixed(1)}`;
  return `<defs>
  <linearGradient id="${p}DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="${o.bg || '#1a1810'}"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#${p}DomeBg)"/>
<g fill="#f4f2ee" opacity="${o.stars || 0.4}">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="180" cy="60" r="0.3"/><circle cx="300" cy="55" r="0.6"/><circle cx="430" cy="75" r="0.4"/>
  <circle cx="40" cy="22" r="0.5"/><circle cx="470" cy="28" r="0.6"/><circle cx="230" cy="12" r="0.5"/>
</g>
<circle cx="${ex}" cy="${ey}" r="${er}" fill="#1a4a6a" opacity="${eo}"/>
<path d="M${E(-5, -6)} Q${E(-1, -3)} ${E(-4, 2)} Q${E(1, 5)} ${E(5, 0)} Q${E(2, -5)} ${E(-2, -7)}" fill="#2a8a5a" opacity="${(eo * 0.55).toFixed(2)}"/>
<circle cx="${ex}" cy="${ey}" r="${er}" fill="none" stroke="#4a9aba" stroke-width="0.3" opacity="0.2"/>
<defs>
  <linearGradient id="${p}Plain" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2e2c27"/><stop offset="100%" stop-color="#16150f"/>
  </linearGradient>
</defs>
<path d="M0,128 Q90,122 180,126 Q280,119 380,125 Q450,121 500,127 L500,260 L0,260 Z" fill="url(#${p}Plain)"/>
<path d="M0,128 Q90,122 180,126 Q280,119 380,125 Q450,121 500,127" stroke="#8f8d84" stroke-width="0.6" opacity="0.28" fill="none"/>
<g opacity="0.85">
  <ellipse cx="305" cy="134" rx="30" ry="4.6" fill="#55534c"/>
  <ellipse cx="305" cy="134" rx="26.5" ry="3.4" fill="#1c1b17"/>
  <path d="M278.5,134 A26.5,3.4 0 0 1 331.5,134 A19,2.2 0 0 0 278.5,134 Z" fill="#848279"/>
  <path d="M278,135.5 l-10,1.6 M332,135.5 l10,1.6" stroke="#55534c" stroke-width="0.8" fill="none"/>
</g>
<g opacity="0.75">
  <ellipse cx="112" cy="139" rx="20" ry="3.6" fill="#55534c"/>
  <ellipse cx="112" cy="139" rx="17" ry="2.6" fill="#1c1b17"/>
  <path d="M95,139 A17,2.6 0 0 1 129,139 A12,1.6 0 0 0 95,139 Z" fill="#848279"/>
</g>`;
}
// Interior, front half: the shell, its glazing, the warm light, the deck and
// the sconces. o.s scales the whole shell about the deck centre (250,250):
// 1 is the wide room shot, about 1.25 is the close shot at the slab.
// o.light: [cx%, cy%, r%, opacity] of the warm interior light.
// o.floor: [top, bottom] deck colours. o.sconce: sconce glow, 0 for none.
function moonDomeShell(p, o) {
  o = o || {};
  const s = o.s || 1, L = o.light || [50, 45, 52, 0.13], F = o.floor || ['#3a3020', '#221c12'];
  const T = s === 1 ? '' : ` transform="translate(250,250) scale(${s}) translate(-250,-250)"`;
  const sc = o.sconce === undefined ? 0.22 : o.sconce;
  // a backplate clamped to the rib, a shallow shade, the bulb under it
  const sconce = (x, dur, begin) => `<path d="M${x - 1.4},134 L${x + 1.4},134 L${x + 1.4},146 L${x - 1.4},146 Z" fill="#3a3324"/>
<path d="M${x - 6},141 Q${x},134 ${x + 6},141 Q${x},144 ${x - 6},141 Z" fill="#4a4030"/>
<path d="M${x - 6},141 Q${x},134 ${x + 1},135.6 Q${x - 3},137 ${x - 4},141 Z" fill="#6a5c44" opacity="0.6"/>
<ellipse cx="${x}" cy="142.4" rx="3" ry="1.4" fill="#ffe880" opacity="${sc}">${moonSpline(`${(sc * 0.7).toFixed(2)};${(sc * 1.25).toFixed(2)};${(sc * 0.7).toFixed(2)}`, dur, begin)}</ellipse>
<path d="M${x - 5},143 Q${x},158 ${x + 5},143 Z" fill="#ffe880" opacity="${(sc * 0.18).toFixed(3)}"/>`;
  return `<defs>
  <radialGradient id="${p}WarmLight" cx="${L[0]}%" cy="${L[1]}%" r="${L[2]}%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="${L[3]}"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="${p}Floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${F[0]}"/><stop offset="100%" stop-color="${F[1]}"/>
  </linearGradient>
</defs>
<g${T}>
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="${MOON_FRAME}" stroke-width="1.5" opacity="0.32"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="${MOON_FRAME}" stroke-width="0.5" opacity="0.15"/>
<path d="M250,20 L250,250 M160,26 Q152,140 150,250 M340,26 Q348,140 350,250 M85,55 Q66,150 62,250 M415,55 Q434,150 438,250" stroke="${MOON_FRAME}" stroke-width="0.5" opacity="0.13" fill="none"/>
<path d="M44,118 Q250,94 456,118 M97,72 Q250,50 403,72" stroke="${MOON_FRAME}" stroke-width="0.5" opacity="0.11" fill="none"/>
</g>
<rect x="0" y="0" width="500" height="260" fill="url(#${p}WarmLight)"/>
<g${T}>
<path d="M36,250 Q42,208 90,203 Q250,192 410,203 Q458,208 464,250 Z" fill="url(#${p}Floor)"/>
<path d="M36,250 Q42,208 90,203 Q250,192 410,203 Q458,208 464,250 Z" fill="none" stroke="#4a3c26" stroke-width="0.8" opacity="0.5"/>
<path d="M92,204 Q88,226 82,250 M170,199 Q168,224 164,250 M250,197 L250,250 M330,199 Q332,224 336,250 M408,204 Q412,226 418,250" stroke="#241e14" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M48,224 Q250,212 452,224" stroke="#241e14" stroke-width="0.6" opacity="0.4" fill="none"/>
${sc ? sconce(71, 5.4) + '\n' + sconce(429, 6.1, 1.4) : ''}
</g>`;
}

// Boot prints pressed into the dust: one sole and heel for every trail, one per
// [x, y, scale, rotate, opacity]. Prints at scale 0.7 and up get the sunward
// lip that makes them read as pressed in rather than painted on.
function moonPrints(list) {
  return list.map(([x, y, s, r, op]) => `<g transform="translate(${x},${y}) rotate(${r}) scale(${s})">
<path d="M-2,-3 q4,-1 5,3 q0,4 -4,4 q-4,0 -4,-3 q0,-3 3,-4 Z M-3,4 q4,-1 5,2 q0,3 -4,3 q-3,0 -3,-2 Z" fill="#4e4c46" opacity="${op}"/>${s >= 0.7 ? `
<path d="M-4,-6 q5,-2 8,1" stroke="#b0aea4" stroke-width="0.9" opacity="0.3" fill="none" stroke-linecap="round"/>` : ''}
</g>`).join('\n');
}
// Bit Cryptic World seen from the moon: the small blue disc with its one island,
// the construction moonDomeRoom uses through the glass, at any size.
function moonWorld(ex, ey, er) {
  const k = er / 10, E = (dx, dy) => `${(ex + dx * k).toFixed(1)},${(ey + dy * k).toFixed(1)}`;
  return `<circle cx="${ex}" cy="${ey}" r="${er}" fill="#1a4a6a"/>
<path d="M${E(-5, -6)} Q${E(-1, -3)} ${E(-4, 2)} Q${E(1, 5)} ${E(5, 0)} Q${E(2, -5)} ${E(-2, -7)}" fill="#2a8a5a" opacity="0.55"/>`;
}
// The globe's atmosphere: a hairline limb plus three sunward arcs, every radius
// derived from er so the rim fits whatever size the disc is drawn at. Sun high
// right: the limb arc runs from the top of the disc to 50 degrees below the
// right-hand horizontal, and each outer arc is shorter and nested inside that
// span, so the haze tapers off at both ends instead of stopping square.
// Offsets 0 / 0.096 / 0.192 of er; angles in degrees, 0 = right, + = down.
function moonWorldRim(ex, ey, er) {
  const P = (r, a) => `${(ex + r * Math.cos(a * Math.PI / 180)).toFixed(1)},${(ey + r * Math.sin(a * Math.PI / 180)).toFixed(1)}`;
  const arc = (r, a0, a1, w, col, op) => `<path d="M${P(r, a0)} A${r.toFixed(1)},${r.toFixed(1)} 0 0,1 ${P(r, a1)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`;
  return `<circle cx="${ex}" cy="${ey}" r="${er}" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
${arc(er, -90, 50, 1.6, '#6abaee', 0.26)}
${arc(er * 1.096, -78, 38, 1.4, '#6abaee', 0.12)}
${arc(er * 1.192, -66, 26, 1.1, '#4a9ade', 0.06)}`;
}

// Scene 0: Moon surface, silence, craters everywhere, starfield
STORY_SCENES['moon_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m0Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#020408"/><stop offset="100%" stop-color="#080c14"/>
  </linearGradient>
  <radialGradient id="m0DomeGlow" cx="82%" cy="64%" r="8%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.26"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m0Sky)"/>
<!-- Stars -->
<g fill="#f4f2ee">
  <circle cx="20" cy="15" r="0.8"/><circle cx="55" cy="40" r="0.6"/><circle cx="90" cy="10" r="1"/>
  <circle cx="130" cy="55" r="0.5"/><circle cx="160" cy="20" r="0.7"/><circle cx="200" cy="8" r="0.9"/>
  <circle cx="235" cy="45" r="0.6"/><circle cx="270" cy="18" r="0.8"/><circle cx="310" cy="50" r="0.5"/>
  <circle cx="340" cy="12" r="1"/><circle cx="375" cy="38" r="0.6"/><circle cx="410" cy="22" r="0.7"/>
  <circle cx="445" cy="48" r="0.8"/><circle cx="475" cy="14" r="0.5"/><circle cx="490" cy="55" r="0.6"/>
  <circle cx="45" cy="70" r="0.5"/><circle cx="110" cy="80" r="0.7"/><circle cx="180" cy="65" r="0.4"/>
  <circle cx="260" cy="75" r="0.6"/><circle cx="330" cy="68" r="0.5"/><circle cx="400" cy="78" r="0.7"/>
  <circle cx="460" cy="65" r="0.4"/><circle cx="70" cy="95" r="0.6"/><circle cx="150" cy="100" r="0.5"/>
  <circle cx="220" cy="90" r="0.7"/><circle cx="290" cy="95" r="0.4"/><circle cx="360" cy="88" r="0.6"/>
  <circle cx="430" cy="92" r="0.5"/><circle cx="15" cy="110" r="0.4"/><circle cx="485" cy="105" r="0.6"/>
  <circle cx="120" cy="35" r="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
  <circle cx="300" cy="30" r="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
  <circle cx="450" cy="70" r="0.3"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
</g>
<!-- Earth in distance -->
<circle cx="80" cy="60" r="14" fill="#1a4a6a"/>
<path d="M72,54 Q78,58 74,64 Q80,68 86,62 Q82,56 76,52" fill="#2a8a5a" opacity="0.5"/>
<circle cx="80" cy="60" r="14" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
<circle cx="80" cy="60" r="16" fill="none" stroke="#6abaee" stroke-width="0.3" opacity="0.15"/>
<!-- Moon surface -->
<path d="M0,170 Q50,165 100,168 Q150,160 200,170 Q250,165 300,172 Q350,162 400,168 Q450,170 500,166 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,172 Q50,167 100,170 Q150,162 200,172 Q250,167 300,174 Q350,164 400,170 Q450,172 500,168 L500,260 L0,260 Z" fill="#7a7870"/>
<!-- ====================================================================
     CRATERS. They were two concentric ellipses in near-identical greys, which
     reads as a puddle. A crater is a HOLE, and a hole reads by its RIM: the
     far wall catches the light while the near wall is in shadow, so the bright
     and dark arcs sit on OPPOSITE sides of the ring. Concentric fills can
     never show that, however many you stack.

     The Earth hangs upper-left and the sun is high to the right, so the lit
     arc is the far wall and the shadow is the near one.
     ==================================================================== -->
<ellipse cx="60" cy="210" rx="31" ry="10" fill="#8f8d84"/><ellipse cx="60" cy="210" rx="28" ry="8" fill="#63615a"/><path d="M32,210 A28,8 0 0 1 88,210 A20,5 0 0 0 32,210 Z" fill="#a8a69c" opacity="0.75"/><path d="M32,210 A28,8 0 0 0 88,210 A20,5 0 0 1 32,210 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="60" cy="210" rx="16" ry="4" fill="#56544e"/><path d="M30,208 l-10,-2 M90,209 l9,-3 M60,200 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="200" cy="230" rx="38" ry="12" fill="#8f8d84"/><ellipse cx="200" cy="230" rx="35" ry="10" fill="#63615a"/><path d="M165,230 A35,10 0 0 1 235,230 A25,7 0 0 0 165,230 Z" fill="#a8a69c" opacity="0.75"/><path d="M165,230 A35,10 0 0 0 235,230 A25,7 0 0 1 165,230 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="200" cy="231" rx="21" ry="5" fill="#56544e"/><path d="M163,228 l-12,-2 M237,229 l11,-3 M200,218 l2,-5" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="340" cy="195" rx="25" ry="9" fill="#8f8d84"/><ellipse cx="340" cy="195" rx="22" ry="7" fill="#63615a"/><path d="M318,195 A22,7 0 0 1 362,195 A15,5 0 0 0 318,195 Z" fill="#a8a69c" opacity="0.75"/><path d="M318,195 A22,7 0 0 0 362,195 A15,5 0 0 1 318,195 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="340" cy="195" rx="13" ry="3" fill="#56544e"/><path d="M316,193 l-8,-2 M364,194 l7,-3 M340,186 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="450" cy="220" rx="21" ry="7" fill="#8f8d84"/><ellipse cx="450" cy="220" rx="18" ry="5" fill="#63615a"/><path d="M432,220 A18,5 0 0 1 468,220 A12,3 0 0 0 432,220 Z" fill="#a8a69c" opacity="0.75"/><path d="M432,220 A18,5 0 0 0 468,220 A12,3 0 0 1 432,220 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="450" cy="220" rx="10" ry="2" fill="#56544e"/><path d="M430,218 l-6,-2 M470,219 l6,-3 M450,213 l2,-3" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="140" cy="200" rx="15" ry="6" fill="#8f8d84"/><ellipse cx="140" cy="200" rx="12" ry="4" fill="#63615a"/><path d="M128,200 A12,4 0 0 1 152,200 A8,2 0 0 0 128,200 Z" fill="#a8a69c" opacity="0.75"/><path d="M128,200 A12,4 0 0 0 152,200 A8,2 0 0 1 128,200 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="140" cy="200" rx="7" ry="2" fill="#56544e"/><path d="M126,198 l-4,-2 M154,199 l4,-3 M140,194 l2,-2" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="392" cy="244" rx="29" ry="9" fill="#8f8d84"/><ellipse cx="392" cy="244" rx="26" ry="7" fill="#63615a"/><path d="M366,244 A26,7 0 0 1 418,244 A18,5 0 0 0 366,244 Z" fill="#a8a69c" opacity="0.75"/><path d="M366,244 A26,7 0 0 0 418,244 A18,5 0 0 1 366,244 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="392" cy="244" rx="15" ry="3" fill="#56544e"/><path d="M364,242 l-9,-2 M420,243 l8,-3 M392,235 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="268" cy="202" rx="17" ry="6" fill="#8f8d84"/><ellipse cx="268" cy="202" rx="14" ry="4" fill="#63615a"/><path d="M254,202 A14,4 0 0 1 282,202 A10,2 0 0 0 254,202 Z" fill="#a8a69c" opacity="0.75"/><path d="M254,202 A14,4 0 0 0 282,202 A10,2 0 0 1 254,202 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="268" cy="202" rx="8" ry="2" fill="#56544e"/><path d="M252,200 l-5,-2 M284,201 l4,-3 M268,196 l2,-2" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>

<!-- ridges and boulders, so the ground has relief between the craters -->
<path d="M92,186 Q108,178 128,184 Q112,190 92,186 Z" fill="#9a9890" opacity="0.5"/>
<path d="M300,214 Q318,206 340,213 Q320,220 300,214 Z" fill="#9a9890" opacity="0.4"/>
<path d="M416,190 Q430,183 448,189 Q432,195 416,190 Z" fill="#9a9890" opacity="0.45"/>
<path d="M24,238 Q40,229 60,237 Q42,246 24,238 Z" fill="#6a6860" opacity="0.5"/>
<path d="M158,250 L172,242 L186,248 L180,258 L164,258 Z" fill="#7a7870"/>
<path d="M158,250 L172,242 L178,247 L166,254 Z" fill="#a8a69c" opacity="0.45"/>
<path d="M462,246 L474,240 L486,245 L482,254 L466,254 Z" fill="#7a7870"/>
<path d="M462,246 L474,240 L479,244 L468,250 Z" fill="#a8a69c" opacity="0.4"/>

<!-- Subtle dust particles -->
<circle cx="150" cy="175" r="1" fill="#aaa8a0" opacity="0.15"><animate attributeName="opacity" values="0.05;0.2;0.05" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="320" cy="180" r="0.8" fill="#aaa8a0" opacity="0.1"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
<!-- ====================================================================
     MARK'S DOME, far off on the horizon: the same moonHabitat as moon_7,
     small because it is distant. Habitat first, glow second.
     ==================================================================== -->
${moonHabitat(410, 170, 0.42, { glow: [0.14, 0.26], door: [0.12, 0.22] })}
<rect x="0" y="0" width="500" height="260" fill="url(#m0DomeGlow)"/>
<!-- FOOTPRINTS, crisp in the dust, shrinking toward the airlock -->
${moonPrints([[262, 252, 1, 38, 0.6], [278, 244, 0.95, 50, 0.58], [288, 235, 0.9, 38, 0.56], [303, 227, 0.84, 50, 0.54], [310, 219, 0.78, 38, 0.52], [325, 214, 0.72, 50, 0.5], [336, 209, 0.66, 38, 0.48], [352, 207, 0.6, 50, 0.46], [362, 203, 0.55, 38, 0.44], [374, 199, 0.5, 50, 0.42], [382, 194, 0.46, 38, 0.4], [391, 190, 0.42, 50, 0.38], [398, 185, 0.38, 38, 0.36], [404, 181, 0.34, 50, 0.34], [408, 177, 0.3, 38, 0.32], [411, 174, 0.27, 50, 0.3]])}
<!-- Low relief and small ejecta fragments between the existing craters. -->
<path d="M0 181L27 174L42 178L69 175L92 180 M188 177L215 171L233 176L257 173L285 179 M375 178L396 171L412 175L433 171L460 178" fill="none" stroke="#b0ada3" stroke-width="1" opacity=".3"/>
<path d="M98 221L104 215L113 218L115 222L105 224Z M301 238L307 232L316 235L314 240Z M224 189L229 185L237 189Z" fill="#5e5c55"/>
<path d="M98 221L104 215L108 218L105 221 M301 238L307 232L310 236 M224 189L229 185L232 188" fill="#aaa79c" opacity=".65"/>
<g fill="#b2afa4" opacity=".35"><circle cx="117" cy="235" r=".8"/><circle cx="123" cy="233" r=".6"/><circle cx="310" cy="247" r=".9"/><circle cx="324" cy="237" r=".6"/><circle cx="232" cy="210" r=".7"/><circle cx="243" cy="213" r=".6"/></g>
</svg>`;

// Scene 1 (Mark at his desk, the dome interior) is defined after the study
// pieces below, because it is built from them.

// Scene 2: Mark introduces himself inside dome
// ============================================================================
// MARK'S STUDY, one furniture layout shared by every wide interior (moon_2, 4,
// 6 draw their own versions of the same pieces in the same places) and framed
// at the edge of the close shots (moon_3, 5) so the room never rearranges.
// ============================================================================
const MOON_SHELVES_CHAIR = `<!-- ====================================================================
     BOOKSHELVES. Low cases standing on the deck, set in from the curved
     wall so their tops clear the glass: the shell is a hemisphere, and at
     the edge of the room it is lower than a tall case. Same drawing as
     before, scaled 0.75 and placed by its plinth on the floor.
     ==================================================================== -->
<path d="M80,213.5 Q97,209.5 116,213.5 Q97,218.5 80,213.5 Z" fill="#181208" opacity="0.5"/>
<path d="M384,213.5 Q403,209.5 420,213.5 Q403,218.5 384,213.5 Z" fill="#181208" opacity="0.5"/>
<g transform="translate(42.5,59.5) scale(0.75)">
  <!-- left case, carcass -->
  <path d="M58,96 L88,99 L88,206 L58,203 Z" fill="#33260f"/>
  <path d="M58,96 L88,99 L88,104 L58,101 Z" fill="#5a4526" opacity="0.8"/>
  <path d="M58,96 L62,97 L62,204 L58,203 Z" fill="#6a5330" opacity="0.55"/>
  <path d="M84,98.5 L88,99 L88,206 L84,205 Z" fill="#241a0b" opacity="0.8"/>
  <!-- shelf boards -->
  <path d="M60,120 L87,122 L87,124 L60,122 Z" fill="#5a4526"/>
  <path d="M60,146 L87,148 L87,150 L60,148 Z" fill="#5a4526"/>
  <path d="M60,172 L87,174 L87,176 L60,174 Z" fill="#5a4526"/>
  <path d="M59,196 L88,198 L88,201 L59,199 Z" fill="#4a3820"/>
  <!-- books, varied and a couple leaning -->
  <path d="M62,105 L66,105.3 L66,120.3 L62,120 Z" fill="#8a6040"/>
  <path d="M66.5,103 L69.5,103.2 L69.5,120.4 L66.5,120.2 Z" fill="#6a8050"/>
  <path d="M70,106 L75,106.3 L75,120.6 L70,120.3 Z" fill="#8a5040"/>
  <path d="M75.5,104 L78,104.2 L78,120.7 L75.5,120.5 Z" fill="#5a6a80"/>
  <path d="M79,108 L85,116 L85,121 L79,121 Z" fill="#8a7040"/>
  <path d="M62,132 L67,132.3 L67,146.4 L62,146.1 Z" fill="#5a6a80"/>
  <path d="M67.5,129 L70,129.2 L70,146.5 L67.5,146.3 Z" fill="#8a7040"/>
  <path d="M70.5,133 L76,133.4 L76,146.7 L70.5,146.4 Z" fill="#6a5060"/>
  <path d="M77,131 L81,131.2 L81,146.9 L77,146.6 Z" fill="#8a6040"/>
  <path d="M82,134 L86,134.3 L86,147 L82,146.8 Z" fill="#4a6a5a"/>
  <path d="M62,158 L65,158.2 L65,172.4 L62,172.2 Z" fill="#6a8050"/>
  <path d="M65.5,155 L71,155.4 L71,172.6 L65.5,172.3 Z" fill="#8a5040"/>
  <path d="M71.5,159 L74,159.2 L74,172.7 L71.5,172.5 Z" fill="#5a6a80"/>
  <path d="M75,156 L79,156.3 L79,172.9 L75,172.6 Z" fill="#8a7040"/>
  <path d="M80,161 L86,168 L86,173.1 L80,173 Z" fill="#6a5060"/>
  <!-- a couple laid flat on the bottom shelf -->
  <path d="M62,190 L82,191.3 L82,194 L62,192.7 Z" fill="#8a6040" opacity="0.85"/>
  <path d="M63,184 L79,185 L79,188 L63,187 Z" fill="#5a6a80" opacity="0.8"/>
</g>
<g transform="translate(82.5,59.5) scale(0.75)">
  <!-- right case, mirrored -->
  <path d="M442,96 L412,99 L412,206 L442,203 Z" fill="#33260f"/>
  <path d="M442,96 L412,99 L412,104 L442,101 Z" fill="#5a4526" opacity="0.8"/>
  <path d="M438,97 L442,96 L442,203 L438,204 Z" fill="#241a0b" opacity="0.7"/>
  <path d="M412,99 L416,98.5 L416,205 L412,206 Z" fill="#6a5330" opacity="0.45"/>
  <path d="M413,122 L440,120 L440,122 L413,124 Z" fill="#5a4526"/>
  <path d="M413,148 L440,146 L440,148 L413,150 Z" fill="#5a4526"/>
  <path d="M413,174 L440,172 L440,174 L413,176 Z" fill="#5a4526"/>
  <path d="M412,198 L441,196 L441,199 L412,201 Z" fill="#4a3820"/>
  <path d="M415,106 L419,105.7 L419,121.7 L415,122 Z" fill="#6a8050"/>
  <path d="M419.5,103 L423,102.8 L423,121.4 L419.5,121.6 Z" fill="#8a5040"/>
  <path d="M424,107 L429,106.6 L429,121.1 L424,121.4 Z" fill="#5a6a80"/>
  <path d="M429.5,104 L433,103.8 L433,120.9 L429.5,121.1 Z" fill="#8a7040"/>
  <path d="M434,109 L438,108.7 L438,120.7 L434,120.9 Z" fill="#8a6040"/>
  <path d="M415,133 L420,132.6 L420,147.7 L415,148 Z" fill="#8a5040"/>
  <path d="M420.5,130 L423,129.8 L423,147.4 L420.5,147.6 Z" fill="#5a6a80"/>
  <path d="M424,134 L430,133.5 L430,147.1 L424,147.4 Z" fill="#8a7040"/>
  <path d="M431,131 L435,130.7 L435,146.9 L431,147.1 Z" fill="#6a5060"/>
  <path d="M436,136 L439,135.7 L439,146.8 L436,146.9 Z" fill="#6a8050"/>
  <path d="M415,159 L418,158.7 L418,173.7 L415,174 Z" fill="#8a6040"/>
  <path d="M419,156 L424,155.6 L424,173.4 L419,173.7 Z" fill="#6a8050"/>
  <path d="M425,160 L430,159.6 L430,173.1 L425,173.4 Z" fill="#8a5040"/>
  <path d="M431,157 L436,156.6 L436,172.8 L431,173.1 Z" fill="#5a6a80"/>
  <path d="M414,190 L436,188.6 L436,191.4 L414,192.8 Z" fill="#8a7040" opacity="0.85"/>
  <path d="M415,184 L432,182.9 L432,185.7 L415,186.8 Z" fill="#6a5060" opacity="0.8"/>
</g>
<!-- ====================================================================
     ARMCHAIR, drawn before the desk it is pulled up beside. It was four
     rounded rects; a chair needs a back that curves, arms with a roll on the
     front, a seat cushion, and legs that reach the deck.
     ==================================================================== -->
<g>
  <ellipse cx="140" cy="222" rx="30" ry="5" fill="#181208" opacity="0.5"/>
  <!-- back, wings curving forward -->
  <path d="M120,214 Q114,168 124,158 Q140,150 156,158 Q166,168 160,214 Z" fill="#4a2c1c"/>
  <path d="M124,208 Q120,172 129,164 Q140,158 151,164 Q160,172 156,208 Z" fill="#5e3a26"/>
  <!-- buttoned back panel -->
  <path d="M129,203 Q126,176 133,169 Q140,165 147,169 Q154,176 151,203 Z" fill="#6a4838" opacity="0.75"/>
  <circle cx="136" cy="180" r="0.9" fill="#3e2418" opacity="0.7"/>
  <circle cx="145" cy="180" r="0.9" fill="#3e2418" opacity="0.7"/>
  <circle cx="140" cy="191" r="0.9" fill="#3e2418" opacity="0.7"/>
  <!-- arms, rolled -->
  <path d="M114,214 Q110,190 116,184 Q124,180 128,186 L128,214 Z" fill="#4a2818"/>
  <path d="M114,192 Q114,184 121,183 Q128,184 128,192 Q121,196 114,192 Z" fill="#66412c"/>
  <path d="M166,214 Q170,190 164,184 Q156,180 152,186 L152,214 Z" fill="#3e2214"/>
  <path d="M152,192 Q152,184 159,183 Q166,184 166,192 Q159,196 152,192 Z" fill="#5a3826"/>
  <!-- seat cushion, sagging in the middle -->
  <path d="M118,196 Q140,190 162,196 Q164,206 158,209 Q140,213 122,209 Q116,206 118,196 Z" fill="#71503b"/>
  <path d="M118,196 Q140,190 162,196 Q140,199 118,196 Z" fill="#835f47" opacity="0.7"/>
  <!-- legs, reaching the deck -->
  <path d="M120,213 L123,213 L124,222 L120,222 Z" fill="#33200f"/>
  <path d="M157,213 L160,213 L159,222 L156,222 Z" fill="#33200f"/>
  <path d="M129,212 L131,212 L131,219 L129,219 Z" fill="#2a1a0c" opacity="0.7"/>
</g>`;
const MOON_DESK = `<!-- ====================================================================
     DESK, drawn legs first then the top, so the top overlaps them. It was a
     plank on two sticks. Now it has a moulded front edge, a kneehole with a
     drawer, turned legs and a stretcher.
     ==================================================================== -->
<g>
  <ellipse cx="250" cy="219" rx="98" ry="5" fill="#181208" opacity="0.45"/>
  <!-- back legs first -->
  <path d="M186,186 L190,186 L189,214 L186,214 Z" fill="#33260f"/>
  <path d="M310,186 L314,186 L313,214 L310,214 Z" fill="#33260f"/>
  <!-- front legs, turned -->
  <path d="M170,188 L178,188 L177,196 Q180,199 177,202 L176,216 L169,216 L168,202 Q165,199 168,196 Z" fill="#4a3820"/>
  <path d="M170,188 L173,188 L172,216 L169,216 Z" fill="#6a5330" opacity="0.5"/>
  <path d="M322,188 L330,188 L331,196 Q334,199 331,202 L332,216 L325,216 L324,202 Q321,199 324,196 Z" fill="#4a3820"/>
  <path d="M327,188 L330,188 L331,216 L328,216 Z" fill="#2a1e0c" opacity="0.6"/>
  <!-- stretcher between the front legs -->
  <path d="M176,206 L324,206 L324,209 L176,209 Z" fill="#3d2c17"/>
  <!-- kneehole apron and a drawer -->
  <path d="M182,186 L318,186 L318,199 L182,199 Z" fill="#4a3820"/>
  <path d="M188,188 L246,188 L246,197 L188,197 Z" fill="#3d2c17"/>
  <path d="M188,188 L246,188 L246,190 L188,190 Z" fill="#6a5330" opacity="0.4"/>
  <path d="M214,192 Q220,191 220,193 Q220,195 214,194 Z" fill="#8a7a60" opacity="0.8"/>
  <!-- top, with a moulded lip -->
  <path d="M156,180 Q250,176 344,180 L346,184 Q250,180 154,184 Z" fill="#6a5330"/>
  <path d="M154,184 Q250,180 346,184 L346,188 Q250,184 154,188 Z" fill="#4a3820"/>
  <path d="M158,181 Q250,177.5 342,181 Q250,179 158,181 Z" fill="#8a6e42" opacity="0.5"/>
</g>`;
const MOON_DESK_GRID = `<!-- ====================================================================
     CROSSWORDS on the desk. They were blank rects standing on edge like a
     fence. A sheet lying on a table is FORESHORTENED: short from front to
     back, wide across, its grid lines converging with the desk. One is
     propped against the mug so not everything lies flat.
     ==================================================================== -->
<g>
  <path d="M176,172 L212,170 L216,182 L178,183 Z" fill="#e8e0d0" opacity="0.9"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.7" fill="none">
    <path d="M183,171.6 L184.6,182.8 M190,171.2 L192,182.6 M197,170.8 L199.4,182.4 M204,170.4 L206.8,182.2"/>
    <path d="M176.7,174.4 L212.9,172.4 M177.4,176.9 L213.8,174.9 M178,179.4 L215,177.4"/>
  </g>
  <path d="M183,171.6 L190,171.2 L192,174.6 L184.6,175 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M197,177.7 L204,177.3 L206.8,180.9 L199.4,181.3 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M176,172 L212,170 L212.4,171.3 L176.2,173.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M178,183 L216,182 L216.6,183.4 L178.4,184.4 Z" fill="#a8a294" opacity="0.45"/>
</g>`;
const MOON_LAMP_BODY = `<!-- ====================================================================
     CEILING LAMP. It was a floating dot. A hanging lamp hangs plumb, from a
     flex, under a shade whose underside catches the bulb.
     ==================================================================== -->
<path d="M250,20 L250,68" stroke="#5a5348" stroke-width="0.7" opacity="0.6" fill="none"/>
<path d="M236,80 Q240,66 250,66 Q260,66 264,80 Z" fill="#4a4030"/>
<path d="M236,80 Q240,66 250,66 Q246,70 244,80 Z" fill="#6a5c44" opacity="0.7"/>
<path d="M236,80 Q250,84 264,80 Q250,82.5 236,80 Z" fill="#ffe880" opacity="0.5"/>
<circle cx="250" cy="82" r="3" fill="#ffe880" opacity="0.55">
  <animate attributeName="opacity" values="0.45;0.65;0.45" dur="5.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="82" r="12" fill="#ffe880" opacity="0.07"/>`;
// The lamp at the wide shot, with the pool it throws on the desk. The close
// shots (moon_3, moon_5) hang MOON_LAMP_BODY under the shell's 1.25 camera,
// so the drop matches, and throw their own light where it lands.
const MOON_CEILING_LAMP = `${MOON_LAMP_BODY}
<!-- the lamp throws a pool on the desk, which is why the paperwork reads -->
<path d="M198,178 Q250,168 302,178 Q250,190 198,178 Z" fill="#ffe880" opacity="0.06"/>`;
const MOON_CLOSE_CAM = 'translate(250,250) scale(1.25) translate(-250,-250)';

// ============================================================================
// MARK, the mission-cast hedgehog. One height for every wide interior, so he
// stands to the desk the same way each time: MOON_MARK_H tall on the deck
// behind the desk (MOON_MARK_FLOOR), which puts the desk top at his hips.
// The close shots (moon_3, moon_5) use the same height times the 1.25 camera.
// The helper draws the contact shadow itself, then breathes the figure on an
// inner group (slow in, slower out) so the placement transform is never
// replaced by the animation. An optional lean (degrees, + tips the head to
// the right) pivots the whole figure about his hips, on its own static
// group so the breathing group above it never carries a placement.
// ============================================================================
const MOON_MARK_H = 94, MOON_MARK_FLOOR = 204;
function moonMark(pose, x, floor, h, flip, dur, begin, lean) {
  const fig = bcMissionPlace('mark', pose, x, floor, h, flip, { shadow: false });
  return `${bcApprovedShadow(x, floor, h)}
<g><animateTransform attributeName="transform" type="translate" values="0,0;0,${(-h * 0.008).toFixed(2)};0,0" additive="sum" dur="${dur || 4.4}s"${begin ? ` begin="${begin}s"` : ''} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.333;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
${lean ? `<g transform="rotate(${lean} ${x} ${(floor - h * 0.45).toFixed(1)})">${fig}</g>` : fig}
</g>`;
}

// Scene 1: inside the dome. Mark bends over the desk, finishing the clue he
// is writing, the desk covered in grids; the room is moon_2's study.
STORY_SCENES['moon_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<!-- Mark's dome from inside: shared shell, glazing, deck and sconces -->
${moonDomeRoom('m1', { earth: [400, 45, 10, 0.55] })}
${moonDomeShell('m1', { light: [52, 52, 46, 0.12] })}
${MOON_SHELVES_CHAIR}
<!-- Mark bent over the desk, left of centre: stepped in close (deck line a
     few units nearer, so the card's lower edge rests on the desk top and the
     pencil meets it) and leaning into the work. Drawn before the desk so the
     desk top crosses him and his legs show in the kneehole. -->
${moonMark('work', 230, MOON_MARK_FLOOR + 5, MOON_MARK_H, false, 4.6, 0, 7)}
${MOON_DESK}
<!-- the desk covered in grids: the shared one, two more fanned to the right,
     and a leaning stack at the left end -->
${MOON_DESK_GRID}
<g transform="translate(118,1) rotate(2,196,177)">${MOON_DESK_GRID}</g>
<g transform="translate(148,-3) rotate(-3,196,177)">${MOON_DESK_GRID}</g>
<g>
  <path d="M158,166 L182,163 L184,180 L160,182 Z" fill="#cfc8b4" opacity="0.6"/>
  <path d="M156,167 L180,164 L182,181 L158,183 Z" fill="#ddd6c2" opacity="0.66"/>
  <path d="M154,168 L178,165 L180,182 L156,184 Z" fill="#e6dfca" opacity="0.72"/>
  <path d="M154,168 L178,165 L178.3,166.6 L154.3,169.6 Z" fill="#f4eedd" opacity="0.45"/>
  <path d="M158,171 L174,169 M158.3,174 L174.4,172 M158.6,177 L174.7,175" stroke="#7a746a" stroke-width="0.4" opacity="0.35" fill="none"/>
  <path d="M154,182.6 Q166,185 180,182 Q166,186 154,184 Z" fill="#8e8878" opacity="0.4"/>
</g>
${MOON_CEILING_LAMP}
</svg>`;

STORY_SCENES['moon_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<!-- Mark's dome from inside: shared shell, glazing, deck and sconces -->
${moonDomeRoom('m2', { earth: [400, 45, 10, 0.6] })}
${moonDomeShell('m2', { light: [50, 42, 52, 0.13] })}
${MOON_SHELVES_CHAIR}
<!-- Mark behind the desk, leaning to sweep his open hand low across the
     corner he has just cleared, between him and the mug pushed to the end.
     Stepped in to the desk like moon_1, so the hand is at desk height. -->
${moonMark('welcome', 288, MOON_MARK_FLOOR + 4, MOON_MARK_H, false, 4.2, 0, 4)}
${MOON_DESK}
${MOON_DESK_GRID}
<g>
  <path d="M222,174 L254,175 L256,184 L221,183 Z" fill="#e2dbc9" opacity="0.82"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.55" fill="none">
    <path d="M228,174.2 L227.4,183.2 M234,174.4 L233.6,183.4 M240,174.6 L239.9,183.6 M246,174.8 L246.2,183.8"/>
    <path d="M221.7,177 L254.6,178 M221.3,180 L255.3,181"/>
  </g>
  <path d="M234,177.3 L240,177.5 L240,180.5 L233.9,180.3 Z" fill="#3a352d" opacity="0.6"/>
  <path d="M222,174 L254,175 L254.2,176.2 L221.9,175.2 Z" fill="#f4eedd" opacity="0.45"/>
</g>
<!-- one sheet slipping over the front lip, so the desk edge is felt -->
<g>
  <path d="M262,176 L292,177 Q294,183 288,187 Q272,188 260,185 Z" fill="#ddd8c8" opacity="0.72"/>
  <path d="M268,176.2 L266,186.6 M276,176.5 L274.6,187.6 M284,176.8 L283,187.6" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M260.6,180 L292.8,181 M260.2,183.5 L291,184.5" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M292,177 Q294,183 288,187 Q291,181 289,177.5 Z" fill="#b0aa9a" opacity="0.6"/>
</g>
<!-- a leaning stack of worked puzzles, the one thing not lying flat -->
<g>
  <path d="M158,166 L182,163 L184,180 L160,182 Z" fill="#cfc8b4" opacity="0.6"/>
  <path d="M156,167 L180,164 L182,181 L158,183 Z" fill="#ddd6c2" opacity="0.66"/>
  <path d="M154,168 L178,165 L180,182 L156,184 Z" fill="#e6dfca" opacity="0.72"/>
  <path d="M154,168 L178,165 L178.3,166.6 L154.3,169.6 Z" fill="#f4eedd" opacity="0.45"/>
  <path d="M158,171 L174,169 M158.3,174 L174.4,172 M158.6,177 L174.7,175" stroke="#7a746a" stroke-width="0.4" opacity="0.35" fill="none"/>
  <path d="M154,182.6 Q166,185 180,182 Q166,186 154,184 Z" fill="#8e8878" opacity="0.4"/>
</g>
<!-- Pen, lying on the desk where a hand left it -->
<path d="M228,168 Q238,169.5 248,171.5" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M247,171.3 Q250.4,171.9 252,173.4 Q249.2,173.3 247.4,172.6 Z" fill="#b8b6ac"/>
<path d="M229,168.2 Q233,168.8 236,169.4" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M231,167.2 Q239,168.6 247,170.4" stroke="#6e6e90" stroke-width="0.5" opacity="0.5" stroke-linecap="round" fill="none"/>
<!-- ====================================================================
     MUG. It was a rect with a hook. A vessel has a curved wall that narrows
     to the foot, a rim ellipse and a handle that leaves and returns.
     Pushed out to the desk's end, with its steam, to clear the corner.
     ==================================================================== -->
<g transform="translate(20,0)">
<g>
  <ellipse cx="312" cy="181" rx="8" ry="2" fill="#181208" opacity="0.4"/>
  <path d="M305,166 Q305,178 307,180 L317,180 Q319,178 319,166 Z" fill="#8a7a60"/>
  <path d="M305,166 Q305,178 307,180 L310,180 Q308,177 308,166 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M316,166 Q316,177 314.5,180 L317,180 Q319,178 319,166 Z" fill="#665a44" opacity="0.7"/>
  <path d="M319,168.5 Q325,169 325.5,173 Q325,177 319,177.5 L319,175.5 Q323,175 323.3,173 Q323,171 319,170.5 Z" fill="#8a7a60"/>
  <ellipse cx="312" cy="166" rx="7" ry="2.2" fill="#3a3226"/>
  <ellipse cx="312" cy="166" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M306,166 Q312,168.6 318,166 Q312,167.4 306,166 Z" fill="#6a4a2a" opacity="0.7"/>
</g>
<!-- Steam, drifting and fading so the loop has no seam -->
<g opacity="0.32">
  <path d="M309,163 Q307,156 310,150 Q312,145 310,141" fill="none" stroke="#b4b0a6" stroke-width="1" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.9;0" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M314,163 Q317,155 314,149 Q312,144 315,140" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.75;0" dur="3.4s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keyTimes="0;0.45;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
</g>
${MOON_CEILING_LAMP}
</svg>`;

// Scene 3: Puzzle — "Blemish is also a target (4)" answer MARK — clue scratched in lunar dust
STORY_SCENES['moon_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="m3ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m3TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <!-- grain for the dust: a ragged, displaced edge, holes where the wood
       shows through, and a fine speckle so it reads as powder, not liquid -->
  <filter id="m3Dust" x="-8%" y="-30%" width="116%" height="160%">
    <feTurbulence type="fractalNoise" baseFrequency="0.09 0.35" numOctaves="2" seed="4" result="warp"/>
    <feDisplacementMap in="SourceGraphic" in2="warp" scale="12" xChannelSelector="R" yChannelSelector="G" result="ragged"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.035 0.13" numOctaves="2" seed="11" result="holes"/>
    <feColorMatrix in="holes" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  6 0 0 0 -2.3" result="holeMask"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed="2" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.1 0 0 0 0.25" result="grainMask"/>
    <feComposite in="holeMask" in2="grainMask" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="mask"/>
    <feComposite in="ragged" in2="mask" operator="in"/>
  </filter>
</defs>
<!-- ====================================================================
     MARK'S DOME from inside, the same shell as moon_2 with the camera a
     step closer (scale 1.25 about the deck), so the glass, its five
     meridians and two rings, the deck and the sconces all match.
     ==================================================================== -->
${moonDomeRoom('m3', { earth: [400, 45, 10, 0.5], stars: 0.32 })}
${moonDomeShell('m3', { s: 1.25, light: [50, 50, 50, 0.08] })}
<!-- ====================================================================
     THE DESK, the same object as moon_2, framed at the right edge by the
     close camera (the shell's 1.25 about the deck), its grid still on it.
     ==================================================================== -->
<g transform="translate(500,250) scale(1.25) translate(-250,-250)">
${MOON_DESK}
${MOON_DESK_GRID}
</g>
<!-- ====================================================================
     THE DUST. Regolith tracked in through the airlock and spread thin on the
     deck, scuffed ragged at the edges. The clue is drawn through it with one
     finger: a groove where the dust is pushed aside and a pale ridge heaped
     along its sunward side, plus a wiped false start and an underline swipe.
     ==================================================================== -->
<g filter="url(#m3Dust)">
<path d="M366.9,210.5 Q364.7,213.0 357.7,215.3 Q350.6,217.5 350.5,219.9 Q350.5,222.3 338.7,224.8 Q327.0,227.3 322.1,228.2 Q317.3,229.2 303.2,231.0 Q289.2,232.8 277.2,231.9 Q265.3,231.1 251.3,231.4 Q237.3,231.8 223.0,231.1 Q208.8,230.4 197.0,229.9 Q185.2,229.4 179.0,227.2 Q172.9,225.0 155.7,224.1 Q138.5,223.2 144.9,220.5 Q151.2,217.7 137.4,215.4 Q123.5,213.0 133.1,210.6 Q142.6,208.2 144.1,206.1 Q145.5,204.1 159.3,201.3 Q173.0,198.4 180.1,197.9 Q187.2,197.5 198.6,196.2 Q210.1,195.0 224.3,193.5 Q238.5,192.0 251.4,192.9 Q264.2,193.8 275.6,193.2 Q287.0,192.6 299.2,193.9 Q311.4,195.2 323.5,197.8 Q335.7,200.5 345.2,202.2 Q354.6,203.9 361.9,206.0 Q369.1,208.1 366.9,210.5 Z" fill="#a39f92" opacity="0.5"/>
<path d="M335.1,209.8 Q338.5,212.0 333.2,214.3 Q327.8,216.5 321.3,218.2 Q314.7,219.8 310.6,222.1 Q306.6,224.3 293.1,226.1 Q279.6,227.9 263.8,226.8 Q248.0,225.7 234.1,226.4 Q220.2,227.1 208.7,225.7 Q197.3,224.3 187.6,222.8 Q177.9,221.3 166.0,218.9 Q154.2,216.6 150.6,214.3 Q147.0,212.0 153.3,209.9 Q159.5,207.9 171.7,206.0 Q183.8,204.2 186.5,201.3 Q189.2,198.5 205.2,198.1 Q221.2,197.8 234.6,196.8 Q248.0,195.8 262.3,196.8 Q276.6,197.7 293.2,199.0 Q309.7,200.3 321.1,202.1 Q332.4,203.9 332.1,205.7 Q331.8,207.5 335.1,209.8 Z" fill="#b8b4a6" opacity="0.34"/>
</g>
<!-- finger swirls, idle loops drawn while he thought -->
<path d="M332,214 q7,-6 13,-1 q3,5 -5,6 q-6,0 -4,-4" stroke="#4a4841" stroke-width="1.4" opacity="0.45" fill="none" stroke-linecap="round"/>
<path d="M332,213 q7,-6 13,-1" stroke="#aeaca2" stroke-width="0.5" opacity="0.4" fill="none" stroke-linecap="round"/>
<path d="M150,218 q10,-3 18,1 M154,222 q9,-2 16,1" stroke="#4a4841" stroke-width="1.2" opacity="0.38" fill="none" stroke-linecap="round"/>
<g filter="url(#m3Dust)"><path d="M128,221 Q138,214 150,219 Q141,225 128,221 Z M354,223 Q365,216 376,222 Q365,227 354,223 Z M176,237 Q189,232 202,236 Q189,240 176,237 Z M290,236 Q302,233 314,236 Q302,239 290,236 Z" fill="#a39f92" opacity="0.42"/></g>
<g fill="#9a988e" opacity="0.4"><circle cx="146" cy="207" r="0.8"/><circle cx="158" cy="226" r="0.6"/><circle cx="350" cy="205" r="0.7"/><circle cx="342" cy="226" r="0.6"/><circle cx="214" cy="232" r="0.5"/><circle cx="286" cy="196" r="0.6"/><circle cx="370" cy="214" r="0.5"/><circle cx="134" cy="213" r="0.5"/></g>
<!-- a false start, rubbed out with the side of the hand -->
<path d="M164,206 Q172,202 180,207 Q174,213 166,211 Q160,209 164,206 Z" fill="#5a5850" opacity="0.45"/>
<path d="M163,205.5 Q172,201 181,206" stroke="#a8a69c" stroke-width="0.7" opacity="0.4" fill="none" stroke-linecap="round"/>
<!-- the finger's underline swipe, groove then ridge -->
<path d="M196,226 Q250,231 308,223" stroke="#4a4841" stroke-width="2" opacity="0.55" fill="none" stroke-linecap="round"/>
<path d="M196,224.6 Q250,229.4 308,221.6" stroke="#aeaca2" stroke-width="0.7" opacity="0.45" fill="none" stroke-linecap="round"/>
<!-- more furrows ploughed round the clue: a bracket each side, an arc over
     the top, and doodled waves out in the dust. Groove first, then the pale
     ridge the finger heaps along its sunward (upper) side. -->
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M198,203 Q185,206 186,214 Q187,222 199,223 M302,202 Q316,205 315,213 Q314,221 302,223 M210,198 Q250,191 292,197 M168,219 q6,-6 12,0 q6,6 12,0 M316,227 q6,-5 12,0 q6,5 12,0 M150,212 q8,-7 16,-2 M344,207 q8,-4 14,2 M226,229 q24,4 48,-1" stroke="#34322c" stroke-width="2" opacity="0.72"/>
  <path d="M198,203 Q185,206 186,214 Q187,222 199,223 M302,202 Q316,205 315,213 Q314,221 302,223 M210,198 Q250,191 292,197 M168,219 q6,-6 12,0 q6,6 12,0 M316,227 q6,-5 12,0 q6,5 12,0 M150,212 q8,-7 16,-2 M344,207 q8,-4 14,2 M226,229 q24,4 48,-1" stroke="#d6d1bf" stroke-width="0.8" opacity="0.7" transform="translate(-0.6,-1.5)"/>
</g>
<!-- the fingertip's last push, a little heap where the stroke stopped -->
<path d="M306,220 Q311,218 314,222 Q310,225 306,223 Z" fill="#9a988e" opacity="0.5"/>
<!-- ====================================================================
     THE CLUE, drawn in the dust. The grooves read by the shadow that sits
     below and left of them, so a dark ghost goes down first.
     ==================================================================== -->
<g opacity="0.5">
  <text x="250.8" y="210" text-anchor="middle" fill="#2a2820" font-family="'JetBrains Mono',monospace" font-size="9" letter-spacing="0.5">Blemish is also</text>
  <text x="250.8" y="221" text-anchor="middle" fill="#2a2820" font-family="'JetBrains Mono',monospace" font-size="9" letter-spacing="0.5">a target (4)</text>
</g>
<g filter="url(#m3TextGlow)">
  <text x="250" y="209" text-anchor="middle" fill="#ffe880" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0.85" letter-spacing="0.5">Blemish is also</text>
  <text x="250" y="220" text-anchor="middle" fill="#ffe880" font-family="'JetBrains Mono',monospace" font-size="9" opacity="0.85" letter-spacing="0.5">a target (4)</text>
</g>
<ellipse cx="250" cy="214" rx="80" ry="20" fill="url(#m3ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- the stroke he has only just finished: a fresh groove and ridge leading
     out of the dust at his feet into the first letters, sharper than the
     older furrows round it -->
<path d="M190,229 Q198,221 206,216 Q211,213 214,210" stroke="#2e2c26" stroke-width="2.1" opacity="0.8" fill="none" stroke-linecap="round"/>
<path d="M189.4,227.6 Q197.4,219.6 205.4,214.6 Q210.4,211.6 213.4,208.6" stroke="#dcd7c5" stroke-width="0.8" opacity="0.75" fill="none" stroke-linecap="round"/>
<!-- Mark standing on the dust's left rim, the drawing hand still lifted,
     moon_1's height under the 1.25 close camera. At x 166 (was 178) his
     boots stand clear of the clue's left bracket instead of on it. -->
${moonMark('explain', 166, 231, MOON_MARK_H * 1.25, false, 4.7, 0, 5)}
<!-- regolith still on that fingertip, sifting back down onto the stroke it
     came from; each mote fades out before it restarts, so no seam. Shifted
     with him, so it still leaves the fingertip. -->
<g fill="#a8a496" transform="translate(-12,0)">
  <path d="M196.5,174.5 Q199,172.8 201.5,174 Q201,176.2 198.5,176.4 Q196.6,176.2 196.5,174.5 Z" opacity="0.7"/>
  <circle cx="200.5" cy="178.5" r="1.1" opacity="0">
    <animate attributeName="cy" values="178;214" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;0.85;0" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.2;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="198" cy="178" r="0.9" opacity="0">
    <animate attributeName="cy" values="178;216" dur="3.6s" begin="1.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;0.8;0" dur="3.6s" begin="1.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.2;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="202" cy="178" r="0.8" opacity="0">
    <animate attributeName="cy" values="178;213" dur="3.2s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;0.75;0" dur="3.2s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.2;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
</g>
<!-- ====================================================================
     THE CEILING LAMP, the shared one, hung under the same close camera as
     the shell so its drop matches moon_2, and aimed down at the dust, which
     is where the glow on the clue comes from.
     ==================================================================== -->
<g transform="${MOON_CLOSE_CAM}">
${MOON_LAMP_BODY}
</g>
<path d="M246,42 L170,212 Q250,226 330,212 L254,42 Z" fill="#ffe880" opacity="0.035"/>
</svg>`;

// Scene 4: Mark's character, warm dome interior
STORY_SCENES['moon_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<!-- Mark's dome from inside: the same shell, glazing, deck and sconces as moon_2 -->
${moonDomeRoom('m4', { earth: [400, 45, 10, 0.5], stars: 0.35 })}
${moonDomeShell('m4', { light: [42, 55, 50, 0.14], floor: ['#3e3322', '#231d13'], sconce: 0.22 })}
<!-- The study as moon_2 lays it out: same cases, chair, desk and lamp -->
${MOON_SHELVES_CHAIR}
<!-- Mark behind the desk, one hand up as he names himself: "my name and
     my nature". Same height and deck line as moon_1. -->
${moonMark('explain', 250, MOON_MARK_FLOOR, MOON_MARK_H, false, 4.8, 0.6)}
${MOON_DESK}
<!-- moon_4's own papers, pen and mug, seated on the shared desk top -->
<g transform="translate(-58,13)">
<!-- Crosswords lying on the desk, foreshortened onto its plane -->
<g>
  <path d="M246,158 L282,156 L286,170 L248,171 Z" fill="#e8e0d0" opacity="0.88"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.7" fill="none">
    <path d="M253,157.6 L254.7,170.8 M260,157.2 L262.3,170.6 M267,156.8 L269.9,170.4 M274,156.4 L277.5,170.2"/>
    <path d="M246.6,161 L282.7,159 M247.3,164.5 L283.9,162.5 M248,168 L285,166"/>
  </g>
  <path d="M253,157.6 L260,157.2 L262.3,161.3 L254.7,161.7 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M267,163.9 L274,163.5 L277.5,167.9 L269.9,168.3 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M246,158 L282,156 L282.4,157.3 L246.2,159.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M248,171 L286,170 L286.6,171.4 L248.4,172.4 Z" fill="#a8a294" opacity="0.45"/>
</g>
<g>
  <path d="M294,162 L328,163 L330,172 L293,171 Z" fill="#e2dbc9" opacity="0.8"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.5" fill="none">
    <path d="M300,162.2 L299.4,171.2 M307,162.4 L306.7,171.4 M314,162.6 L314,171.6 M321,162.8 L321.3,171.8"/>
    <path d="M293.7,165 L328.7,166 M293.3,168 L329.4,169"/>
  </g>
  <path d="M307,165.3 L314,165.5 L314,168.5 L306.9,168.3 Z" fill="#3a352d" opacity="0.55"/>
</g>
<g>
  <path d="M338,160 L368,162 Q371,169 366,173 Q350,175 336,171 Z" fill="#ddd8c8" opacity="0.7"/>
  <path d="M344,160.4 L342.6,172.6 M352,160.9 L351,174 M360,161.4 L359.4,174" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M336.6,165 L369.4,167 M336.2,169 L367.8,171" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M368,162 Q371,169 366,173 Q369,167 366,162.6 Z" fill="#b0aa9a" opacity="0.6"/>
</g>
<!-- Pen, put down mid clue -->
<path d="M226,160 Q236,161.6 246,163.8" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M245,163.6 Q248.4,164.2 250,165.8 Q247.2,165.6 245.4,164.9 Z" fill="#b8b6ac"/>
<path d="M227,160.2 Q231,160.8 234,161.5" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<!-- Mug, drawn as a vessel: curved wall, rim ellipse, handle that leaves and returns -->
<g>
  <ellipse cx="378" cy="168" rx="8" ry="2" fill="#181208" opacity="0.4"/>
  <path d="M371,153 Q371,165 373,167 L383,167 Q385,165 385,153 Z" fill="#8a7a60"/>
  <path d="M371,153 Q371,165 373,167 L376,167 Q374,164 374,153 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M382,153 Q382,164 380.5,167 L383,167 Q385,165 385,153 Z" fill="#665a44" opacity="0.7"/>
  <path d="M385,155.5 Q391,156 391.5,160 Q391,164 385,164.5 L385,162.5 Q389,162 389.3,160 Q389,158 385,157.5 Z" fill="#8a7a60"/>
  <ellipse cx="378" cy="153" rx="7" ry="2.2" fill="#3a3226"/>
  <ellipse cx="378" cy="153" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M372,153 Q378,155.6 384,153 Q378,154.4 372,153 Z" fill="#6a4a2a" opacity="0.7"/>
</g>
<g opacity="0.32">
  <path d="M375,150 Q373,143 376,137 Q378,132 376,128" fill="none" stroke="#b4b0a6" stroke-width="1" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.9;0" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M380,150 Q383,142 380,136 Q378,131 381,127" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.72;0" dur="3.6s" repeatCount="indefinite" begin="1.3s" calcMode="spline" keyTimes="0;0.45;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
</g>
${MOON_CEILING_LAMP}
</svg>`;

// Scene 5: Puzzle — "Lunar feature from confused tracer (6)" answer CRATER — clue traced on a fogged pane
STORY_SCENES['moon_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="m5ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m5TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <radialGradient id="m5Fog" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#dfe7ea" stop-opacity="0.3"/><stop offset="65%" stop-color="#dfe7ea" stop-opacity="0.18"/><stop offset="100%" stop-color="#dfe7ea" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m5PaneMist" cx="34%" cy="56%" r="30%">
    <stop offset="0%" stop-color="#dfe7ea" stop-opacity="0.07"/><stop offset="100%" stop-color="#dfe7ea" stop-opacity="0"/>
  </radialGradient>
</defs>
<!-- Mark's dome from inside: the moon_3 camera on the shared shell -->
${moonDomeRoom('m5', { earth: [400, 45, 10, 0.5], stars: 0.32 })}
${moonDomeShell('m5', { s: 1.25, light: [50, 50, 50, 0.08] })}
<!-- ====================================================================
     THE FOGGED PANE. Breath and warm air condense on the cold glass, so one
     pane of the dome mists over: a soft patch, densest in the middle, beaded
     at the rim, with drips running down from it. Mark has traced the clue
     through it with a fingertip. The pane is a low one, at the height his
     hand reaches, so the whole fogged patch sits down near the deck.
     ==================================================================== -->
<rect x="0" y="0" width="500" height="260" fill="url(#m5PaneMist)"/>
<!-- the fogged pane sits 20 left of where it was (position only), so the
     glowing clue stands clear of the figure's head -->
<g transform="translate(-20,50)">
<ellipse cx="172" cy="97" rx="66" ry="27" fill="url(#m5Fog)"/>
<g fill="#e8eef0" opacity="0.32">
  <circle cx="112" cy="90" r="0.9"/><circle cx="118" cy="108" r="0.7"/><circle cx="128" cy="78" r="0.8"/>
  <circle cx="214" cy="76" r="0.7"/><circle cx="230" cy="94" r="0.9"/><circle cx="224" cy="112" r="0.6"/>
  <circle cx="150" cy="120" r="0.7"/><circle cx="196" cy="121" r="0.8"/><circle cx="106" cy="100" r="0.6"/>
  <circle cx="172" cy="72" r="0.6"/><circle cx="236" cy="104" r="0.5"/><circle cx="140" cy="73" r="0.5"/>
</g>
<!-- drips, each a thin run ending in a bead -->
<g stroke="#e8eef0" stroke-width="0.6" opacity="0.28" fill="none" stroke-linecap="round">
  <path d="M138,115 L138.4,124"/><path d="M161,119 L161.2,126"/><path d="M203,117 L203.6,127"/><path d="M219,112 L219.3,119"/>
</g>
<g fill="#e8eef0" opacity="0.36">
  <circle cx="138.4" cy="124.6" r="0.9"/><circle cx="161.2" cy="126.5" r="0.8"/><circle cx="203.6" cy="127.6" r="0.9"/><circle cx="219.3" cy="119.6" r="0.7"/>
</g>
<!-- the fingertip's wipe under the clue, clear glass where the mist is gone -->
<path d="M130,110 Q172,114 214,108" stroke="#0e1018" stroke-width="2" opacity="0.35" fill="none" stroke-linecap="round"/>
<!-- ====================================================================
     THE CLUE, traced through the mist. The wiped strokes read darker than
     the fog around them, so a dark ghost goes down first.
     ==================================================================== -->
<g opacity="0.5">
  <text x="172.8" y="93" text-anchor="middle" fill="#2a2820" font-family="'JetBrains Mono',monospace" font-size="8" letter-spacing="0">Lunar feature from</text>
  <text x="172.8" y="104" text-anchor="middle" fill="#2a2820" font-family="'JetBrains Mono',monospace" font-size="8" letter-spacing="0">confused tracer (6)</text>
</g>
<g filter="url(#m5TextGlow)">
  <text x="172" y="92" text-anchor="middle" fill="#ffe880" font-family="'JetBrains Mono',monospace" font-size="8" opacity="0.85" letter-spacing="0">Lunar feature from</text>
  <text x="172" y="103" text-anchor="middle" fill="#ffe880" font-family="'JetBrains Mono',monospace" font-size="8" opacity="0.85" letter-spacing="0">confused tracer (6)</text>
</g>
<ellipse cx="172" cy="97" rx="72" ry="22" fill="url(#m5ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
</g>
<!-- ====================================================================
     THE DESK, the same object as moon_2, framed at the left edge by the
     close camera (the shell's 1.25 about the deck), one grid on its top.
     ==================================================================== -->
<g transform="translate(0,250) scale(1.25) translate(-250,-250)">
${MOON_DESK}
<g transform="translate(110,0)">
${MOON_DESK_GRID}
</g>
</g>
<!-- ====================================================================
     A SURVEY CHART pinned to the dome rib on the right, showing the crater
     field with its rims drawn. The papers were blank rects on the floor.
     ==================================================================== -->
<g>
  <ellipse cx="421" cy="199" rx="42" ry="3" fill="#141009" opacity="0.45"/>
  <path d="M382,140 L456,136 L460,196 L384,199 Z" fill="#8a867a"/>
  <path d="M382,140 L456,136 L456.4,138 L382.1,142 Z" fill="#a8a294" opacity="0.6"/>
  <path d="M456,136 L460,196 L452,192 L452,138 Z" fill="#7c786c"/>
  <g opacity="0.55">
    <ellipse cx="412" cy="158" rx="14" ry="5" fill="none" stroke="#5a564c" stroke-width="0.7"/>
    <path d="M398,158 A14,5 0 0 1 426,158" stroke="#3a3630" stroke-width="1.1" fill="none"/>
    <ellipse cx="412" cy="158" rx="7" ry="2.4" fill="#c2bcaa"/>
    <ellipse cx="437" cy="176" rx="9" ry="3.4" fill="none" stroke="#5a564c" stroke-width="0.6"/>
    <path d="M428,176 A9,3.4 0 0 1 446,176" stroke="#3a3630" stroke-width="0.9" fill="none"/>
    <ellipse cx="393" cy="180" rx="6" ry="2.2" fill="none" stroke="#5a564c" stroke-width="0.5"/>
    <path d="M387,180 A6,2.2 0 0 1 399,180" stroke="#3a3630" stroke-width="0.8" fill="none"/>
  </g>
  <path d="M386,146 L404,145 M386,149 L398,148.4" stroke="#7a746a" stroke-width="0.5" opacity="0.4" fill="none"/>
  <path d="M388,190 Q406,188 424,188.6" stroke="#7a746a" stroke-width="0.5" opacity="0.35" fill="none"/>
  <!-- the pin holding it, and the curl where the corner has come loose -->
  <circle cx="419" cy="138.4" r="1.4" fill="#8a8880"/>
  <path d="M384,199 Q392,194 396,186 Q394,196 390,200 Z" fill="#b0aa9a" opacity="0.5"/>
</g>
<!-- Mark right under the pane, turned to it, his fingertip on the glass at
     the end of the streak it has wiped down from the last word. moon_1's
     height under the close camera.
     First the streak, wiped clear through the mist from the clue to his finger,
     drawn before him so his fingertip lies over its end -->
<path d="M219,156 Q217.5,163 216,170" stroke="#0e1018" stroke-width="3" opacity="0.14" fill="none" stroke-linecap="round"/>
<path d="M220.8,156 Q219.4,163 218,170 M217.2,156 Q215.7,163 214.2,170" stroke="#e8eef0" stroke-width="0.45" opacity="0.3" fill="none" stroke-linecap="round"/>
${moonMark('explain', 240, 230, MOON_MARK_H * 1.25, true, 4.3, 0.8)}
<!-- ====================================================================
     THE CEILING LAMP, the shared one, hung under the same close camera as
     the shell so its drop matches moon_2. No cone: nothing below it.
     ==================================================================== -->
<g transform="${MOON_CLOSE_CAM}">
${MOON_LAMP_BODY}
</g>
</svg>`;

// Scene 6: Mark's final test (the eclipse clue), warm desk scene
STORY_SCENES['moon_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<!-- Mark's dome from inside, the shared shell. Earth stays the same small
     disc as moon_2 to moon_5 (r10); only the light is warmer for the
     approval beat. The building itself does not change. -->
${moonDomeRoom('m6', { earth: [400, 45, 10, 0.55], bg: '#1e1a12' })}
${moonDomeShell('m6', { light: [50, 48, 56, 0.17], floor: ['#443724', '#261f14'], sconce: 0.28 })}
<!-- The study as moon_2 lays it out: the same cases and armchair -->
${MOON_SHELVES_CHAIR}
<!-- the finished puzzles, filed on the right case's bottom shelf over the
     books lying there. This is the shelf that carries the beat: the work is
     done and put away. -->
<g transform="translate(82.5,61) scale(0.75)">
  <path d="M414,182 L438,180.4 L438,188.4 L414,190 Z" fill="#ddd6c2" opacity="0.75"/>
  <path d="M414,182 L438,180.4 L438,181.8 L414,183.4 Z" fill="#f0eadb" opacity="0.5"/>
  <path d="M418,183.4 L418,189.7 M422,183.1 L422,189.4 M426,182.8 L426,189.1 M430,182.5 L430,188.8 M434,182.2 L434,188.5" stroke="#a09a8a" stroke-width="0.4" opacity="0.5" fill="none"/>
</g>
<!-- Mark behind the desk, reaching across it toward the card he has just
     slid out of the drawer. Same height and deck line as moon_1. -->
${moonMark('welcome', 200, MOON_MARK_FLOOR, MOON_MARK_H, true, 4.5, 0.3)}
${MOON_DESK}
<!-- moon_6's own drawer, card, grids, pen and mug, seated on the shared desk -->
<g transform="translate(0,2)">
<!-- ====================================================================
     THE DRAWER, pulled open: the dark slot it came out of, the drawer box
     sliding toward us with its sides showing, the cards still filed inside,
     and the front, lower and a touch wider because it is nearer.
     ==================================================================== -->
<g>
  <path d="M188,186 L246,186 L246,195 L188,195 Z" fill="#1a1208"/>
  <path d="M188,195 L186,201 L186,203 L188,197 Z M246,195 L248,201 L248,203 L246,197 Z" fill="#3b2c12"/>
  <path d="M188,190 L246,190 L248,197 L186,197 Z" fill="#2a1e0e"/>
  <path d="M192,190.6 L210,190.6 L211,194 L191.6,194 Z M213,190.4 L232,190.4 L232.8,193.8 L213.4,193.8 Z" fill="#d8cfb4" opacity="0.55"/>
  <path d="M186,197 L248,197 L248,206 L186,206 Z" fill="#48331a"/>
  <path d="M186,197 L248,197 L248,198.6 L186,198.6 Z" fill="#7a6038" opacity="0.55"/>
  <path d="M214,201 Q220,200 220,202 Q220,204 214,203 Z" fill="#a8967a" opacity="0.85"/>
</g>
<!-- ====================================================================
     THE CARD he kept for visitors, slid across the desk toward us by the
     open drawer: thin, blank, lying flat and foreshortened, turned a few
     degrees, its front edge just over the lip, corners worn round.
     ==================================================================== -->
<g>
  <path d="M175.4,183.9 L199,182.2 L198.6,184.6 L175.8,186.4 Z" fill="#1c1508" opacity="0.3"/>
  <path d="M173,178.5 L196.2,176.9 Q197.2,176.9 197.4,177.6 L198.4,181.2 Q198.6,182 197.6,182.1 L175,183.6 Q174,183.7 173.8,182.9 L172.2,179.3 Q172.1,178.6 173,178.5 Z" fill="#efe6cc"/>
  <path d="M173,178.5 L196.2,176.9 Q197.2,176.9 197.4,177.6 L197.6,178.3 L172.5,180 L172.2,179.3 Q172.1,178.6 173,178.5 Z" fill="#f7f0dc" opacity="0.7"/>
  <path d="M174.4,183.6 L197.9,182 L197.9,182.9 L174.6,184.5 Z" fill="#b8a682" opacity="0.85"/>
</g>
<!-- ====================================================================
     THE SOLVED GRIDS, squared up in a neat stack instead of scattered. Every
     square is filled, which is the whole point of this scene. The top one is
     turned slightly so the stack does not read as one printed block.
     ==================================================================== -->
<g>
  <path d="M204,166 L246,164 L248,180 L206,182 Z" fill="#cfc8b4" opacity="0.62"/>
  <path d="M202,167 L244,165 L246,181 L204,183 Z" fill="#ded7c3" opacity="0.7"/>
  <path d="M200,168 L242,166 L244,182 L202,184 Z" fill="#e8e0d0" opacity="0.85"/>
  <g stroke="#7a746a" stroke-width="0.4" opacity="0.65" fill="none">
    <path d="M207,167.7 L209,183.7 M214,167.3 L216,183.3 M221,167 L223,183 M228,166.6 L230,182.6 M235,166.3 L237,182.3"/>
    <path d="M200.4,171.2 L242.4,169.2 M200.9,174.4 L242.9,172.4 M201.4,177.6 L243.4,175.6 M201.8,180.8 L243.8,178.8"/>
  </g>
  <path d="M207,167.7 L214,167.3 L214.4,170.5 L207.3,170.9 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M228,173.3 L235,172.9 L235.5,176.1 L228.4,176.5 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M221,180 L228,179.6 L228.4,182.8 L221.3,183.2 Z" fill="#3a352d" opacity="0.6"/>
  <!-- every remaining cell has a letter in it, drawn as short marks -->
  <g stroke="#4a4640" stroke-width="0.55" opacity="0.6" fill="none">
    <path d="M202.6,169.4 L203.2,170.6 M209.6,169 L210.2,170.2 M216.6,168.6 L217.2,169.8 M223.6,168.3 L224.2,169.5 M230.6,167.9 L231.2,169.1 M237.6,167.6 L238.2,168.8"/>
    <path d="M203,172.6 L203.6,173.8 M210,172.2 L210.6,173.4 M217,171.8 L217.6,173 M224,171.5 L224.6,172.7 M231,171.1 L231.6,172.3 M238,170.8 L238.6,172 "/>
    <path d="M203.5,175.8 L204.1,177 M210.5,175.4 L211.1,176.6 M217.5,175 L218.1,176.2 M231.5,174.3 L232.1,175.5 M238.5,174 L239.1,175.2"/>
    <path d="M204,179 L204.6,180.2 M211,178.6 L211.6,179.8 M218,178.2 L218.6,179.4 M232,177.5 L232.6,178.7 M239,177.2 L239.6,178.4"/>
  </g>
  <path d="M200,168 L242,166 L242.4,167.3 L200.2,169.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M202,184 L244,182 L244.6,183.4 L202.4,185.4 Z" fill="#a8a294" opacity="0.45"/>
</g>
<!-- one more grid set aside, this the newest and squarest to the desk -->
<g>
  <path d="M256,170 L292,171 L293,182 L255,181 Z" fill="#e2dbc9" opacity="0.8"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.55" fill="none">
    <path d="M262,170.2 L261.4,181.2 M268,170.4 L267.6,181.4 M274,170.5 L273.8,181.5 M280,170.7 L280,181.6 M286,170.8 L286.2,181.8"/>
    <path d="M255.7,174 L292.4,175 M255.4,178 L292.8,179"/>
  </g>
  <path d="M268,174.3 L274,174.5 L274,178.5 L267.9,178.3 Z" fill="#3a352d" opacity="0.6"/>
  <path d="M256,170 L292,171 L292.2,172.2 L255.9,171.2 Z" fill="#f4eedd" opacity="0.45"/>
</g>
<!-- Pen, capped and laid down straight. The work is finished. -->
<path d="M300,172 L316,173" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M316,172.9 Q319.4,173 321,174.4 Q318.2,174.6 316.4,174 Z" fill="#b8b6ac"/>
<path d="M301,172 L306,172.3" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<!-- Mug, drained, drawn as a vessel with a rim and a handle -->
<g>
  <ellipse cx="332" cy="179" rx="8" ry="2" fill="#1c1508" opacity="0.4"/>
  <path d="M325,164 Q325,176 327,178 L337,178 Q339,176 339,164 Z" fill="#8a7a60"/>
  <path d="M325,164 Q325,176 327,178 L330,178 Q328,175 328,164 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M336,164 Q336,175 334.5,178 L337,178 Q339,176 339,164 Z" fill="#665a44" opacity="0.7"/>
  <path d="M339,166.5 Q345,167 345.5,171 Q345,175 339,175.5 L339,173.5 Q343,173 343.3,171 Q343,169 339,168.5 Z" fill="#8a7a60"/>
  <ellipse cx="332" cy="164" rx="7" ry="2.2" fill="#4a4032"/>
  <ellipse cx="332" cy="164" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M327,165.4 Q332,167 337,165.4 Q332,166.2 327,165.4 Z" fill="#6a4a2a" opacity="0.55"/>
</g>
<g opacity="0.26">
  <path d="M329,161 Q327,155 330,150 Q332,146 330,143" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
</g>
<!-- The shared lamp, then the lit state laid over it: this is the beat where
     the light goes up, so the bulb and the pool on the desk brighten. -->
${MOON_CEILING_LAMP}
<circle cx="250" cy="82" r="2.2" fill="#fff4c0" opacity="0.5">
  <animate attributeName="opacity" values="0.38;0.62;0.38" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<path d="M190,178 Q250,166 310,178 Q250,190 190,178 Z" fill="#ffe880" opacity="0.04"/>
</svg>`;

// Scene 7: Complete — dome glows, farewell, Bit Cryptic World over the horizon
STORY_SCENES['moon_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m7Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050810"/><stop offset="100%" stop-color="#0a0e18"/>
  </linearGradient>
  <!-- Earthshine halo, centred on the globe (330,82,r26) and sized off it:
       faint from the limb out to 1.8 radii. -->
  <radialGradient id="m7EarthGlow" gradientUnits="userSpaceOnUse" cx="330" cy="82" r="46.8">
    <stop offset="0.55" stop-color="#4a8aba" stop-opacity="0.1"/><stop offset="1" stop-color="#4a8aba" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m7DomeGlow" cx="22%" cy="76%" r="17%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.34"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m7Limb" cx="34%" cy="32%" r="76%">
    <stop offset="42%" stop-color="#0a1a2a" stop-opacity="0"/><stop offset="100%" stop-color="#030b14" stop-opacity="0.9"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m7Sky)"/>
<!-- Stars everywhere -->
<g fill="#f4f2ee">
  <circle cx="30" cy="30" r="0.8"/><circle cx="70" cy="60" r="0.5"/><circle cx="110" cy="20" r="1"/>
  <circle cx="150" cy="50" r="0.6"/><circle cx="190" cy="35" r="0.7"/><circle cx="230" cy="15" r="0.5"/>
  <circle cx="270" cy="45" r="0.8"/><circle cx="310" cy="25" r="0.6"/><circle cx="350" cy="55" r="0.9"/>
  <circle cx="390" cy="30" r="0.5"/><circle cx="430" cy="50" r="0.7"/><circle cx="470" cy="20" r="0.6"/>
  <circle cx="50" cy="90" r="0.4"/><circle cx="130" cy="85" r="0.6"/><circle cx="210" cy="78" r="0.5"/>
  <circle cx="290" cy="82" r="0.7"/><circle cx="370" cy="75" r="0.4"/><circle cx="450" cy="88" r="0.6"/>
  <circle cx="90" cy="110" r="0.5"/><circle cx="170" cy="105" r="0.3"/><circle cx="330" cy="100" r="0.5"/>
  <circle cx="410" cy="108" r="0.4"/><circle cx="480" cy="95" r="0.6"/><circle cx="20" cy="120" r="0.3"/>
  <circle cx="40" cy="55" r="0.4"><animate attributeName="opacity" values="0.35;1;0.35" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="215" cy="62" r="0.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.3s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="462" cy="40" r="0.4"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.7s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</g>
<!-- ====================================================================
     BIT CRYPTIC WORLD, hanging over the horizon: the same small blue disc
     with its one island that every other moon scene shows, a little larger
     here because it is the last look home, and still small enough to cover
     with a thumb. The sun is high right, so the terminator falls lower left
     and the atmosphere rim sits on the sunward limb. Halo first (behind the
     disc), then the globe, limb shading and rim, all sized from one radius.
     ==================================================================== -->
<circle cx="330" cy="82" r="46.8" fill="url(#m7EarthGlow)"/>
${moonWorld(330, 82, 26)}
<circle cx="330" cy="82" r="26" fill="url(#m7Limb)"/>
${moonWorldRim(330, 82, 26)}
<!-- ====================================================================
     LUNAR HORIZON, three receding bands so the plain falls away rather than
     sitting as one flat wall of grey.
     ==================================================================== -->
<path d="M0,184 Q80,177 160,181 Q250,174 340,183 Q420,177 500,181 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,193 Q100,187 200,191 Q300,183 400,193 Q450,188 500,191 L500,260 L0,260 Z" fill="#7a7870"/>
<path d="M0,210 Q90,203 180,209 Q270,201 360,210 Q430,205 500,209 L500,260 L0,260 Z" fill="#6f6d65"/>
<!-- ====================================================================
     CRATERS, using moon_0's construction: the far wall catches the light and
     the near wall is in shadow, so the bright and dark arcs sit on OPPOSITE
     sides of the ring. Ejecta streaks radiate from the rim.
     ==================================================================== -->
<ellipse cx="252" cy="238" rx="38" ry="11" fill="#8f8d84"/><ellipse cx="252" cy="238" rx="34" ry="9" fill="#63615a"/>
<path d="M218,238 A34,9 0 0 1 286,238 A24,6 0 0 0 218,238 Z" fill="#a8a69c" opacity="0.75"/>
<path d="M218,238 A34,9 0 0 0 286,238 A24,6 0 0 1 218,238 Z" fill="#4e4c46" opacity="0.6"/>
<ellipse cx="252" cy="239" rx="20" ry="4.5" fill="#56544e"/>
<path d="M216,236 l-12,-3 M288,237 l11,-3 M252,226 l3,-5" stroke="#9a9890" stroke-width="1.2" opacity="0.3" fill="none"/>
<ellipse cx="424" cy="222" rx="27" ry="8" fill="#8f8d84"/><ellipse cx="424" cy="222" rx="24" ry="6.5" fill="#63615a"/>
<path d="M400,222 A24,6.5 0 0 1 448,222 A17,4.5 0 0 0 400,222 Z" fill="#a8a69c" opacity="0.72"/>
<path d="M400,222 A24,6.5 0 0 0 448,222 A17,4.5 0 0 1 400,222 Z" fill="#4e4c46" opacity="0.58"/>
<ellipse cx="424" cy="222" rx="14" ry="3.2" fill="#56544e"/>
<path d="M398,220 l-9,-2 M450,221 l9,-3" stroke="#9a9890" stroke-width="1.1" opacity="0.28" fill="none"/>
<ellipse cx="96" cy="214" rx="21" ry="6" fill="#8f8d84"/><ellipse cx="96" cy="214" rx="18" ry="4.6" fill="#63615a"/>
<path d="M78,214 A18,4.6 0 0 1 114,214 A12,3 0 0 0 78,214 Z" fill="#a8a69c" opacity="0.68"/>
<path d="M78,214 A18,4.6 0 0 0 114,214 A12,3 0 0 1 78,214 Z" fill="#4e4c46" opacity="0.55"/>
<ellipse cx="96" cy="214" rx="10" ry="2.4" fill="#56544e"/>
<path d="M76,212 l-7,-2 M116,213 l7,-3" stroke="#9a9890" stroke-width="1" opacity="0.26" fill="none"/>
<!-- Far craters, veiled toward the plain because distance eats contrast -->
<ellipse cx="352" cy="198" rx="17" ry="4.5" fill="#7f7d75"/><ellipse cx="352" cy="198" rx="14" ry="3.2" fill="#67655e"/>
<path d="M338,198 A14,3.2 0 0 1 366,198 A10,2 0 0 0 338,198 Z" fill="#98968e" opacity="0.5"/>
<path d="M338,198 A14,3.2 0 0 0 366,198 A10,2 0 0 1 338,198 Z" fill="#56544e" opacity="0.42"/>
<ellipse cx="186" cy="200" rx="14" ry="4" fill="#7d7b73"/><ellipse cx="186" cy="200" rx="11.5" ry="2.8" fill="#67655e"/>
<path d="M174.5,200 A11.5,2.8 0 0 1 197.5,200 A8,1.8 0 0 0 174.5,200 Z" fill="#96948c" opacity="0.46"/>
<path d="M174.5,200 A11.5,2.8 0 0 0 197.5,200 A8,1.8 0 0 1 174.5,200 Z" fill="#56544e" opacity="0.38"/>
<!-- Ridges and angular boulders, so there is relief between the holes -->
<path d="M296,216 Q318,208 344,216 Q320,223 296,216 Z" fill="#9a9890" opacity="0.35"/>
<path d="M40,232 Q60,224 84,232 Q60,240 40,232 Z" fill="#6a6860" opacity="0.45"/>
<path d="M330,248 Q352,240 378,248 Q352,256 330,248 Z" fill="#6a6860" opacity="0.4"/>
<ellipse cx="204" cy="256" rx="16" ry="3" fill="#4a4840" opacity="0.4"/>
<path d="M190,248 L204,239 L219,246 L214,257 L195,257 Z" fill="#6f6d65"/>
<path d="M204,239 L219,246 L214,257 L207,252 Z" fill="#8f8d84" opacity="0.68"/>
<path d="M190,248 L204,239 L207,252 L195,257 Z" fill="#46443d" opacity="0.55"/>
<ellipse cx="470" cy="248" rx="13" ry="2.6" fill="#4a4840" opacity="0.4"/>
<path d="M458,242 L470,234 L482,240 L478,249 L461,249 Z" fill="#6f6d65"/>
<path d="M470,234 L482,240 L478,249 L472,245 Z" fill="#8f8d84" opacity="0.62"/>
<path d="M458,242 L470,234 L472,245 L461,249 Z" fill="#46443d" opacity="0.5"/>
<!-- ====================================================================
     THE DOME, the same habitat as moon_0: the interior shell's profile,
     panel seams following the curve, an airlock,
     a service module and a mast. Habitat first, glow second, so the light
     comes from inside.
     ==================================================================== -->
<!-- the same helper as moon_0, a step closer and brighter: he is still up -->
${moonHabitat(108, 197, 1.15, { glow: [0.2, 0.38], door: [0.26, 0.44], beacon: 3.1, glowDur: 4.1 })}
<!-- Mark back at his desk, already composing, seen small through the lit
     glass left of the airlock: veiled, so the glazing bars still read
     across him and he stays inside the dome -->
<g opacity="0.72">
${bcMissionPlace('mark', 'work', 92, 194, 18, false, { shadow: false })}
<path d="M83,189 L101,189 L101,190.5 L83,190.5 Z M84,190.5 L85,190.5 L85,195 L84,195 Z M99,190.5 L100,190.5 L100,195 L99,195 Z" fill="#3a2c18"/>
</g>
<path d="M88,199 Q108,196 128,199 Q112,216 88,199 Z" fill="#ffe880" opacity="0.08"/>
<rect x="0" y="0" width="500" height="260" fill="url(#m7DomeGlow)"/>
</svg>`;
