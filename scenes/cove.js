// Cove story scenes — "Cluey Cove"
// Keys: cove_0 through cove_6
// DRAFT — for review only

// Every small chest in the cove is the KIT chest (bcArt 'chest', cove biome)
// wearing the same GLYPH PLATE over the kit lock: index.html says every lock
// wears an inscription where a keyhole should be. Kit local frame: origin =
// contact point, 60 wide, closed lid top y -54, lock plate on the seam at y
// -31.5. The plate is drawn in the old small-chest frame and scaled into kit
// units so it keeps its proportion of the chest. Marks are abstract only: a
// dot, an arc, a stacked pair of dots, a ripple.
//   glow: filter id to glow the marks (scene must define it), or null.
//   lit:  flicker the marks (the live lock); otherwise they sit dim.
function coveGlyphPlate(glow, lit, depth) {
  var flick = ' calcMode="spline" keyTimes="0;0.2;0.45;0.7;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1" repeatCount="indefinite"';
  var glyph = '<path d="M-3,-10.85 l0,0.01 M-2,-10.2 Q-1.2,-11.8 -0.4,-10.2 M0.7,-11.6 l0,0.01 M0.7,-10 l0,0.01 M1.7,-10.8 Q2.2,-11.6 2.7,-10.8 T3.4,-10.8" fill="none" stroke="#4af5a0" stroke-width="0.7" stroke-linecap="round"' +
    (glow ? ' filter="url(#' + glow + ')"' : '') + (lit ? '>' + '<animate attributeName="opacity" values="0.35;1;0.5;0.95;0.35" dur="2.3s"' + flick + '/></path>' : ' opacity="0.55"/>');
  var plate = '<path d="M-5,-15 L5,-15 Q5.6,-15 5.6,-14.4 L5.6,-8 Q5.6,-7.2 4.8,-7.2 L-4.8,-7.2 Q-5.6,-7.2 -5.6,-8 L-5.6,-14.4 Q-5.6,-15 -5,-15 Z" fill="#c09a3c" stroke="#4a3810" stroke-width="0.6"/>' +
    '<path d="M-3.8,-12.8 L3.8,-12.8 L3.8,-8.9 L-3.8,-8.9 Z" fill="#1a2420"/>';
  return '<g transform="translate(0 -31.5) scale(1.67) translate(0 11.1)">' + bcArt.layer(depth || 'fg', plate + glyph, 'cove') + '</g>';
}
function coveSmallChest(o, glow, lit) {
  o.biome = 'cove';
  return bcArt.prop('chest', o).replace(/<\/g>$/, coveGlyphPlate(glow, lit, o.depth) + '</g>');
}

// Scene 0: Vast cavern interior, bioluminescent algae on walls, treasure chests on rocky ledges
STORY_SCENES['cove_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="coveBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0e1e30"/><stop offset="50%" stop-color="#1a3a5a"/><stop offset="100%" stop-color="#2a2a3a"/>
  </linearGradient>
  <radialGradient id="algaeGlow0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.5"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="blueGlow0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7ac5e8" stop-opacity="0.4"/><stop offset="100%" stop-color="#7ac5e8" stop-opacity="0"/>
  </radialGradient>
  <filter id="coveGlow0"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="waterShimmer0" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#1a3a5a"/><stop offset="30%" stop-color="#2a5070"/><stop offset="60%" stop-color="#1a3a5a"/><stop offset="100%" stop-color="#2a5070"/>
  </linearGradient>
  <linearGradient id="coveLedge0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a4a5c"/><stop offset="100%" stop-color="#33333f"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#coveBg0)"/>
<!-- Receding rock faces frame the open center of the cavern. -->
<path d="M0 20L77 45L108 90L92 128L124 174L106 224H0Z" fill="#23384a" opacity=".55"/>
<path d="M500 12L430 38L402 85L416 118L388 169L410 222H500Z" fill="#25394b" opacity=".5"/>
<path d="M28 45L77 61L96 90L80 111 M37 114L76 128L90 150 M454 49L430 66L419 94 M460 109L438 132L425 138" fill="none" stroke="#506073" stroke-width="1.3" opacity=".25"/>
<path d="M50 78L62 94L57 126 M458 145L446 159L452 183" fill="none" stroke="#122839" stroke-width="2" opacity=".45"/>

<!-- ====================================================================
     CAVERN CEILING. A stalactite grows by dripping, so it is a slow taper
     with a swollen shoulder and a needle point, and the whole roof is one
     lumpy mass they hang out of. A zigzag polyline reads as sawteeth.
     ==================================================================== -->
<path d="M0,0 L500,0 L500,26 Q484,34 476,50 Q468,32 452,28 Q436,36 428,52 Q418,34 402,30 Q388,40 380,58 Q370,36 352,32 Q338,42 330,60 Q320,38 302,34 Q288,44 280,62 Q270,40 252,36 Q238,46 230,64 Q220,42 202,38 Q188,46 180,62 Q170,40 152,36 Q138,44 130,60 Q120,38 102,34 Q88,42 80,58 Q70,36 52,32 Q38,40 30,54 Q20,34 0,28 Z" fill="#0e1828"/>
<!-- the long fangs: each one tapers to a point and catches a little light -->
<path d="M60,26 Q64,24 68,26 Q67,50 65,74 Q63,50 60,26 Z" fill="#1a2a3a" opacity="0.8"/>
<path d="M63,28 Q65,27 66,28 Q65,50 65,68 Q64,50 63,28 Z" fill="#2c405a" opacity="0.45"/>
<path d="M150,30 Q155,27 160,30 Q158,58 155,86 Q153,58 150,30 Z" fill="#1a2a3a" opacity="0.72"/>
<path d="M153,32 Q155,31 157,32 Q156,58 155,80 Q154,58 153,32 Z" fill="#2c405a" opacity="0.4"/>
<path d="M300,24 Q305,21 310,24 Q308,50 305,78 Q303,50 300,24 Z" fill="#1a2a3a" opacity="0.78"/>
<path d="M303,26 Q305,25 307,26 Q306,50 305,72 Q304,50 303,26 Z" fill="#2c405a" opacity="0.42"/>
<path d="M418,28 Q423,26 428,28 Q426,50 423,72 Q421,50 418,28 Z" fill="#1a2a3a" opacity="0.8"/>
<path d="M421,30 Q423,29 425,30 Q424,48 423,66 Q422,48 421,30 Z" fill="#2c405a" opacity="0.42"/>
<!-- shorter ones packed between, so the roof reads as many not four -->
<path d="M108,36 Q111,34 114,36 Q113,52 111,68 Q110,52 108,36 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M222,32 Q225,30 228,32 Q227,50 225,66 Q224,50 222,32 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M360,34 Q363,32 366,34 Q365,50 363,64 Q362,50 360,34 Z" fill="#1a2a3a" opacity="0.48"/>
<path d="M470,32 Q473,30 476,32 Q475,48 473,62 Q472,48 470,32 Z" fill="#1a2a3a" opacity="0.5"/>

<!-- ====================================================================
     CAVE WALLS. Rock is flat planes meeting at angles, so the walls step
     in and out rather than curving smoothly.
     ==================================================================== -->
<path d="M0,40 L18,62 L6,88 L22,116 L8,146 L24,178 L10,210 L26,242 L14,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M0,40 L18,62 L6,88 L22,116 L8,146 L12,150 L4,120 L14,90 L2,64 L0,48 Z" fill="#3a3a4c" opacity="0.5"/>
<path d="M500,32 L482,56 L494,84 L478,112 L492,142 L476,174 L490,206 L474,238 L486,260 L500,260 Z" fill="#2a2a3a"/>
<path d="M500,32 L482,56 L494,84 L478,112 L492,142 L488,146 L484,116 L498,88 L488,58 L500,42 Z" fill="#3a3a4c" opacity="0.42"/>

<!-- ====================================================================
     BIOLUMINESCENT ALGAE. It grows in lobed crusts on wet rock, not in
     tidy ellipses: irregular blooms with a bright core.
     ==================================================================== -->
<path d="M8,70 Q18,62 28,68 Q38,74 34,84 Q26,94 14,90 Q4,84 8,70 Z" fill="#4af5a0" opacity="0.09"><animate attributeName="opacity" values="0.05;0.13;0.05" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="20" cy="80" r="22" fill="url(#algaeGlow0)" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<path d="M470,60 Q480,54 490,60 Q496,68 490,76 Q480,82 472,76 Q466,68 470,60 Z" fill="#4af5a0" opacity="0.08"><animate attributeName="opacity" values="0.04;0.11;0.04" dur="3.6s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="480" cy="70" r="19" fill="url(#algaeGlow0)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.6s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<path d="M30,134 Q40,128 48,134 Q53,141 47,148 Q38,152 32,147 Q27,141 30,134 Z" fill="#7ac5e8" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="40" cy="140" r="17" fill="url(#blueGlow0)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<path d="M460,124 Q470,118 479,124 Q485,131 479,139 Q469,143 462,138 Q457,131 460,124 Z" fill="#7ac5e8" opacity="0.07"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="4.6s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="470" cy="130" r="18" fill="url(#blueGlow0)" opacity="0.3"><animate attributeName="opacity" values="0.18;0.38;0.18" dur="4.6s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<!-- Ceiling algae, smeared along the rock rather than blobbed -->
<path d="M78,32 Q100,24 122,32 Q112,40 100,40 Q86,40 78,32 Z" fill="#4af5a0" opacity="0.07"><animate attributeName="opacity" values="0.03;0.1;0.03" dur="6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M224,20 Q250,12 276,20 Q264,29 250,29 Q234,29 224,20 Z" fill="#7ac5e8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="5.2s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M382,26 Q400,19 418,26 Q408,33 400,33 Q389,33 382,26 Z" fill="#4af5a0" opacity="0.07"><animate attributeName="opacity" values="0.04;0.11;0.04" dur="4.8s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- ====================================================================
     ROCKY LEDGES. A shelf does not float. Each one is a wedge of the wall:
     THICK where it is rooted in the rock, thinning to a lip at the free
     end, with a buttress of flowstone running back down to the wall so the
     eye can see what is carrying the weight. The middle shelf has no wall
     to hang off, so it stands on a stump of rock rising from the floor.
     ==================================================================== -->
<!-- left shelf, rooted in the left wall -->
<path d="M0,152 L20,155 Q62,158 100,164 Q122,168 132,174 Q135,176 130,177 Q94,175 54,172 Q22,169 0,166 Z" fill="url(#coveLedge0)"/>
<path d="M0,166 Q22,169 54,172 Q94,175 130,177 Q135,176 132,174 L133,181 Q124,186 92,185 Q50,182 18,178 Q4,176 0,174 Z" fill="#22222e"/>
<path d="M8,157 Q48,160 88,166 Q110,170 120,174 Q90,172 52,169 Q22,166 8,163 Z" fill="#585868" opacity="0.45"/>
<path d="M0,176 Q14,184 22,198 Q26,208 22,216 Q16,204 8,192 Q2,184 0,182 Z" fill="#262632" opacity="0.85"/>
<path d="M64,184 Q68,196 65,208 Q61,197 61,185 Z" fill="#22222e" opacity="0.6"/>

<!-- right shelf, rooted in the right wall -->
<path d="M500,138 L478,141 Q436,145 400,151 Q380,155 370,160 Q367,162 372,163 Q406,161 444,158 Q478,155 500,152 Z" fill="url(#coveLedge0)"/>
<path d="M372,163 Q406,161 444,158 Q478,155 500,152 L500,160 Q478,164 442,167 Q404,170 378,168 Q368,166 370,163 Z" fill="#22222e"/>
<path d="M492,143 Q454,147 418,152 Q396,156 384,160 Q414,158 448,155 Q478,152 492,149 Z" fill="#585868" opacity="0.45"/>
<path d="M500,162 Q488,170 480,184 Q476,194 480,202 Q486,190 494,178 Q499,170 500,168 Z" fill="#262632" opacity="0.8"/>
<path d="M420,170 Q424,182 421,194 Q417,183 417,171 Z" fill="#22222e" opacity="0.55"/>

<!-- ====================================================================
     TREASURE CHESTS. A chest lid is a BARREL: staves curving over a domed
     top, bound by iron straps that wrap the curve. The body is planked,
     the corners are cornered in metal, and the hasp hangs off the front.
     A rect with a stripe is a filing box.
     ==================================================================== -->
<!-- Chest 1, left ledge: the kit chest, the one small-chest design in the cove -->
${coveSmallChest({ x: 83, y: 169, scale: 0.42, depth: 'mid' })}

<!-- Chest 2, right ledge -->
${coveSmallChest({ x: 410, y: 154, scale: 0.42, depth: 'mid' })}

<!-- ====================================================================
     CAVE FLOOR. Wet rock, uneven, with boulders bedded in it.
     ==================================================================== -->
<path d="M0,228 Q58,220 128,224 Q198,228 250,219 Q320,213 400,221 Q460,227 500,223 L500,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M0,239 Q98,231 200,235 Q300,240 400,233 Q460,237 500,234 L500,260 L0,260 Z" fill="#1a2030"/>
<!-- boulders: flat planes, a lit top and a shadowed flank -->
<path d="M52,232 L64,222 L82,224 L90,234 Q72,239 52,232 Z" fill="#33333f"/>
<path d="M64,222 L82,224 L86,229 Q70,230 60,227 Z" fill="#4a4a5c" opacity="0.45"/>
<path d="M416,228 L428,219 L444,221 L451,231 Q434,236 416,228 Z" fill="#33333f"/>
<path d="M428,219 L444,221 L448,226 Q432,227 424,224 Z" fill="#4a4a5c" opacity="0.4"/>
<path d="M300,236 L310,229 L323,231 L329,239 Q314,243 300,236 Z" fill="#2e2e3a"/>

<!-- middle shelf: a free-standing stump, so its column goes to the FLOOR -->
<path d="M164,204 L154,226 L150,244 L214,244 L210,226 L200,204 Z" fill="#262632"/>
<path d="M164,204 L154,226 L150,244 L170,244 L172,226 L176,204 Z" fill="#3a3a4c" opacity="0.42"/>
<path d="M200,204 L210,226 L214,244 L198,244 L196,226 L192,204 Z" fill="#1c1c26" opacity="0.6"/>
<path d="M158,216 Q180,213 204,216" fill="none" stroke="#1c1c26" stroke-width="1.2" opacity="0.4"/>
<path d="M138,192 Q170,186 206,190 Q230,193 240,200 Q243,203 237,204 Q202,208 166,206 Q144,204 136,200 Z" fill="url(#coveLedge0)"/>
<path d="M136,200 Q144,204 166,206 Q202,208 237,204 Q243,203 240,200 L241,209 Q230,214 196,215 Q160,215 144,211 Q134,208 134,205 Z" fill="#22222e"/>
<path d="M146,194 Q178,190 208,194 Q224,196 230,200 Q202,202 170,201 Q150,199 146,197 Z" fill="#585868" opacity="0.45"/>
<path d="M160,215 Q158,226 160,236 L166,236 Q164,225 166,214 Z" fill="#22222e" opacity="0.6"/>

<!-- Chest 3, lower ledge, smaller and further back -->
${coveSmallChest({ x: 169, y: 197, scale: 0.33, depth: 'mid' })}

<!-- Tidal pools lying in the hollows: irregular, not perfect ellipses -->
<path d="M176,246 Q214,238 254,240 Q296,242 322,249 Q296,256 252,256 Q206,255 176,246 Z" fill="#1a3a5a" opacity="0.65"/>
<path d="M176,246 Q214,238 254,240 Q296,242 322,249 Q296,256 252,256 Q206,255 176,246 Z" fill="url(#waterShimmer0)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M188,244 Q220,239 252,242" fill="none" stroke="#7ac5e8" stroke-width="0.8" opacity="0.18"/>
<path d="M348,250 Q374,244 402,246 Q422,248 418,253 Q392,258 364,256 Q346,254 348,250 Z" fill="#1a3a5a" opacity="0.55"/>
<path d="M348,250 Q374,244 402,246 Q422,248 418,253 Q392,258 364,256 Q346,254 348,250 Z" fill="url(#waterShimmer0)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.6s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- Scattered glow motes drifting in the cavern air -->
<circle cx="100" cy="100" r="1.5" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q9,-8 2,-15 Q-8,-8 0,0 Z" dur="7.2s" repeatCount="indefinite"/></circle>
<circle cx="200" cy="60" r="1" fill="#7ac5e8" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.2s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q-8,-6 -1,-13 Q7,-7 0,0 Z" dur="6.1s" begin="1s" repeatCount="indefinite"/></circle>
<circle cx="350" cy="80" r="1.5" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.15;0.65;0.15" dur="5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q10,-6 6,-14 Q-3,-8 0,0 Z" dur="8s" begin="0.5s" repeatCount="indefinite"/></circle>
<circle cx="450" cy="100" r="1" fill="#7ac5e8" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.8s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q-7,-7 0,-13 Q8,-6 0,0 Z" dur="6.8s" begin="2s" repeatCount="indefinite"/></circle>
<circle cx="160" cy="45" r="1" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.55;0.1" dur="4.5s" begin="1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q8,-7 3,-14 Q-6,-7 0,0 Z" dur="7.6s" begin="1.2s" repeatCount="indefinite"/></circle>
<!-- Small ripples and wet fragments along the tidal pools. -->
<g fill="none" stroke="#7ac5e8" stroke-width=".8" opacity=".27"><ellipse cx="274" cy="248" rx="13" ry="2.3"/><path d="M252 250Q274 256 293 250 M364 251Q379 248 391 251 M209 249L228 250"/></g>
<path d="M324 235L334 230L342 234L340 238H325Z M105 242L116 236L126 241L121 245Z" fill="#3c414e"/>
<path d="M324 235L334 230L337 234 M105 242L116 236L119 240" fill="#586170" opacity=".55"/>
</svg>`;

// Scene 1: Largest chest at back, half-submerged in crystal tidal pool
// Scene 2: Puzzle — chest lock glows with inscription
STORY_SCENES['cove_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="coveBg1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0e1828"/><stop offset="40%" stop-color="#1a3a5a"/><stop offset="100%" stop-color="#2a2a3a"/>
  </linearGradient>
  <radialGradient id="poolGlow1" cx="50%" cy="60%" r="45%">
    <stop offset="0%" stop-color="#7ac5e8" stop-opacity="0.15"/><stop offset="100%" stop-color="#7ac5e8" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lockGlow1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.4"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="algaeGlow1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.5"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <filter id="coveGlow1"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="lockTextGlow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="crystalWater" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#1a4a6a"/><stop offset="25%" stop-color="#2a5a80"/><stop offset="50%" stop-color="#1a4a6a"/><stop offset="75%" stop-color="#2a5a80"/><stop offset="100%" stop-color="#1a4a6a"/>
  </linearGradient>
  <linearGradient id="cove1Oak" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#6a5018"/><stop offset="22%" stop-color="#9a7526"/><stop offset="60%" stop-color="#8a6a20"/><stop offset="100%" stop-color="#5e4614"/>
  </linearGradient>
  <linearGradient id="cove1Lid" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c09a3c"/><stop offset="55%" stop-color="#a07a28"/><stop offset="100%" stop-color="#7a5c1a"/>
  </linearGradient>
  <clipPath id="cove1PoolClip"><path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#coveBg1)"/>

<!-- Cavern back wall: an uneven rock face, not a smooth arc -->
<path d="M0,0 L0,182 Q28,176 56,180 Q92,170 128,174 Q176,162 214,158 Q250,152 286,158 Q324,163 372,174 Q408,170 444,178 Q472,176 500,182 L500,0 Z" fill="#0e1828"/>
<!-- Ceiling mass with stalactites hanging out of it -->
<path d="M0,0 L500,0 L500,24 Q482,32 474,48 Q464,30 448,26 Q432,34 424,50 Q414,32 398,28 Q384,38 376,56 Q366,34 348,30 Q334,40 326,58 Q316,36 298,32 Q284,42 276,60 Q266,38 248,34 Q234,44 226,62 Q216,40 198,36 Q184,44 176,60 Q166,38 148,34 Q134,42 126,58 Q116,36 98,32 Q84,40 76,56 Q66,34 48,30 Q34,38 26,52 Q16,32 0,26 Z" fill="#0a1420"/>
<path d="M120,26 Q125,23 130,26 Q128,54 125,82 Q123,54 120,26 Z" fill="#1a2a3a" opacity="0.75"/>
<path d="M123,28 Q125,27 127,28 Q126,54 125,76 Q124,54 123,28 Z" fill="#2c405a" opacity="0.42"/>
<path d="M248,24 Q253,21 258,24 Q256,50 253,76 Q251,50 248,24 Z" fill="#1a2a3a" opacity="0.7"/>
<path d="M251,26 Q253,25 255,26 Q254,50 253,70 Q252,50 251,26 Z" fill="#2c405a" opacity="0.4"/>
<path d="M378,26 Q383,24 388,26 Q386,50 383,72 Q381,50 378,26 Z" fill="#1a2a3a" opacity="0.72"/>
<path d="M381,28 Q383,27 385,28 Q384,50 383,66 Q382,50 381,28 Z" fill="#2c405a" opacity="0.4"/>
<path d="M64,32 Q67,30 70,32 Q69,48 67,64 Q66,48 64,32 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M180,30 Q183,28 186,30 Q185,48 183,64 Q182,48 180,30 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M320,28 Q323,26 326,28 Q325,46 323,62 Q322,46 320,28 Z" fill="#1a2a3a" opacity="0.48"/>
<path d="M440,30 Q443,28 446,30 Q445,46 443,60 Q442,46 440,30 Z" fill="#1a2a3a" opacity="0.5"/>

<!-- Algae crusts on the wet wall -->
<path d="M16,88 Q28,80 42,88 Q52,96 46,108 Q34,116 22,110 Q12,100 16,88 Z" fill="#4af5a0" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="30" cy="100" r="24" fill="url(#algaeGlow1)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<path d="M462,84 Q474,77 486,84 Q494,92 488,102 Q476,109 466,103 Q458,94 462,84 Z" fill="#7ac5e8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="5s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="475" cy="95" r="21" fill="url(#algaeGlow1)" opacity="0.3"><animate attributeName="opacity" values="0.18;0.4;0.18" dur="5s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<path d="M86,54 Q98,48 110,54 Q116,61 110,68 Q98,72 90,67 Q84,61 86,54 Z" fill="#4af5a0" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="4.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M386,48 Q400,42 412,48 Q418,56 412,63 Q399,67 391,62 Q384,55 386,48 Z" fill="#7ac5e8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="5.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- ====================================================================
     ROCK LEDGE BEHIND THE POOL. Faceted planes, a lit crest and a
     shadowed apron, with boulders bedded along its foot.
     ==================================================================== -->
<path d="M132,184 L162,168 Q200,154 250,151 Q300,154 338,168 L368,184 L372,192 L128,192 Z" fill="#3a3a4c"/>
<path d="M162,168 Q200,154 250,151 Q300,154 338,168 L330,172 Q294,161 250,159 Q206,161 170,172 Z" fill="#525266" opacity="0.55"/>
<path d="M128,192 L372,192 L376,201 L124,201 Z" fill="#2a2a3a"/>
<path d="M124,201 L376,201 L378,206 L122,206 Z" fill="#1f1f2a" opacity="0.7"/>
<path d="M196,170 L206,178 L192,182 Z" fill="#2a2a3a" opacity="0.5"/>
<path d="M298,172 L310,180 L294,183 Z" fill="#2a2a3a" opacity="0.45"/>

<!-- ====================================================================
     CRYSTAL TIDAL POOL. The waterline is not a perfect ellipse: it laps
     into the rock. A dark bed, a shimmer sheet over it, then a rim of
     brighter water where it meets stone.
     ==================================================================== -->
<path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z" fill="#0a2a40"/>
<path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z" fill="url(#crystalWater)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.35" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z" fill="url(#poolGlow1)"/>
<!-- surface lines: the water reads as a plane only if something lies on it -->
<path d="M156,206 Q194,196 240,193" fill="none" stroke="#7ac5e8" stroke-width="0.9" opacity="0.22"/>
<path d="M292,192 Q330,197 358,210" fill="none" stroke="#7ac5e8" stroke-width="0.8" opacity="0.18"/>
<path d="M176,232 Q222,240 274,240" fill="none" stroke="#7ac5e8" stroke-width="0.7" opacity="0.14"/>

<!-- Rocks bedding the pool edge: flat planes, lit top, dark flank -->
<path d="M118,214 L128,200 L142,199 L148,212 Q134,219 118,214 Z" fill="#3a3a4c"/>
<path d="M128,200 L142,199 L146,206 Q134,208 124,205 Z" fill="#525266" opacity="0.5"/>
<path d="M356,206 L366,193 L380,193 L386,206 Q370,212 356,206 Z" fill="#3a3a4c"/>
<path d="M366,193 L380,193 L383,199 Q372,201 362,199 Z" fill="#525266" opacity="0.45"/>
<path d="M140,232 L150,220 L163,220 L168,231 Q154,237 140,232 Z" fill="#2a2a3a" opacity="0.85"/>
<path d="M338,234 L348,222 L360,222 L366,233 Q352,239 338,234 Z" fill="#2a2a3a" opacity="0.85"/>

<!-- ====================================================================
     THE GREAT CHEST, CLOSED. The same box as cove_3 in the same local
     frame (origin = front face bottom centre on the waterline, 250,212;
     front face x -46..46, y -30..0), so closed and open read as one chest.
     The lid sits shut on the rim. The lock carries an inscription band of
     glowing glyphs where a keyhole would be; the clue sits on a front plaque.
     ==================================================================== -->
<g clip-path="url(#cove1PoolClip)">
<g transform="translate(250 203.5) scale(1 -1)" opacity="0.28">
<path d="M-46,0 L46,0 L46,-30 L-46,-30 Z" fill="#8a6a20"/>
<path d="M-47,-30 L47,-30 L47,-38 L-47,-38 Z" fill="#7a5c1a"/>
<path d="M-31,0 L-27,0 L-27,-38 L-31,-38 Z M27,0 L31,0 L31,-38 L27,-38 Z" fill="#3a2c0c"/>
</g>
<path d="M206,222 Q250,219 294,222 M212,231 Q250,228 288,231 M220,239 Q250,237 280,239" fill="none" stroke="#0a2a40" stroke-width="2.2" opacity="0.55"/>
</g>
<!-- PHOSPHORESCENT LINE above the chest: algae light gathered into a band -->
<!-- of abstract marks on the back wall (dots, arcs, ripples; no letters) -->
<ellipse cx="250" cy="139" rx="42" ry="9" fill="url(#algaeGlow1)" opacity="0.45"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
<path d="M220,139 l0,0.01 M225,140.5 Q228,136.5 231,140.5 M236,137.5 l0,0.01 M236,141 l0,0.01 M241,139 Q242.5,137 244,139 T247,139 M252,138 l0,0.01 M255,140.5 Q258,136.5 261,140.5 M265,137 l0,0.01 M265,139.5 l0,0.01 M265,142 l0,0.01 M270,139 Q271.5,137 273,139 T276,139 M280,139 l0,0.01" fill="none" stroke="#4af5a0" stroke-width="1.3" stroke-linecap="round" filter="url(#coveGlow1)" opacity="0.7"><animate attributeName="opacity" values="0.45;0.9;0.55;0.85;0.45" dur="3.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.2;0.45;0.7;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="250" cy="182" r="40" fill="url(#lockGlow1)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<g transform="translate(250 212)">
<!-- contact shadow where the box stands in the water -->
<ellipse cx="0" cy="2" rx="54" ry="5" fill="#061420" opacity="0.22"/>

<!-- LID, shut: top face seen from slightly above, back edge y -48 -->
<path d="M-47,-38 L47,-38 L44,-48 Q0,-51 -44,-48 Z" fill="#a07a28"/>
<path d="M-40,-46.6 Q0,-49.4 40,-46.6" fill="none" stroke="#e0bc58" stroke-width="1.2" opacity="0.55"/>
<path d="M22,-38 L47,-38 L44,-48 Q34,-48.8 24,-49.2 Z" fill="#5e4614" opacity="0.35"/>
<!-- iron straps running over the lid top, continuing the front straps -->
<path d="M-31,-38 L-27,-38 L-26,-49.6 L-29.6,-49.4 Z M27,-38 L31,-38 L29.6,-49.4 L26,-49.6 Z" fill="#3a2c0c" opacity="0.7"/>
<path d="M-47,-38 L-42,-38 L-39.5,-48.4 L-44,-48 Z M42,-38 L47,-38 L44,-48 L39.5,-48.4 Z" fill="#3a2c0c" opacity="0.8"/>
<!-- lid skirt: the front edge of the shut lid -->
<path d="M-47,-38 L47,-38 L47,-30.5 L-47,-30.5 Z" fill="url(#cove1Lid)"/>
<path d="M-47,-37.4 L47,-37.4" fill="none" stroke="#e0bc58" stroke-width="0.8" opacity="0.5"/>
<path d="M-47,-38 L-42,-38 L-42,-30.5 L-47,-30.5 Z M42,-38 L47,-38 L47,-30.5 L42,-30.5 Z" fill="#3a2c0c" opacity="0.8"/>
<path d="M-31,-38 L-27,-38 L-27,-30.5 L-31,-30.5 Z M27,-38 L31,-38 L31,-30.5 L27,-30.5 Z" fill="#3a2c0c" opacity="0.7"/>
<!-- the seam where lid meets box -->
<path d="M-47,-30.5 L47,-30.5" fill="none" stroke="#2a1e08" stroke-width="1.1" opacity="0.8"/>

<!-- FRONT FACE, planked and banded (as cove_3) -->
<path d="M-46,-30 L46,-30 L46,0 L-46,0 Z" fill="url(#cove1Oak)"/>
<path d="M-23,-30 L-23,0 M0,-30 L0,0 M23,-30 L23,0" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<path d="M-46,-15 L46,-15 L46,-12 L-46,-12 Z" fill="#6a5018" opacity="0.75"/>
<path d="M-46,-15 L46,-15 L46,-14 L-46,-14 Z" fill="#a5832e" opacity="0.35"/>
<path d="M-46,-30 L-41,-30 L-41,0 L-46,0 Z M41,-30 L46,-30 L46,0 L41,0 Z" fill="#3a2c0c" opacity="0.8"/>
<path d="M-31,-30 L-27,-30 L-27,0 L-31,0 Z M27,-30 L31,-30 L31,0 L27,0 Z" fill="#3a2c0c" opacity="0.7"/>

<!-- LOCK PLATE hung over the lid seam: an inscription band of abstract -->
<!-- marks (dots, arcs, a ripple) where the keyhole would be. No letters. -->
<path d="M-8,-38.4 L8,-38.4 Q9,-38.4 9,-37.4 L9,-29 Q9,-28 8,-28 L-8,-28 Q-9,-28 -9,-29 L-9,-37.4 Q-9,-38.4 -8,-38.4 Z" fill="#ffd700" opacity="0.88"/>
<path d="M-7,-37.4 L7,-37.4" fill="none" stroke="#fff0a0" stroke-width="0.8" opacity="0.45"/>
<path d="M-6.6,-35.4 L6.6,-35.4 L6.6,-31.2 L-6.6,-31.2 Z" fill="#2a1e08"/>
<path d="M-5.4,-33.3 l0,0.01 M-4,-32.5 Q-2.8,-34.5 -1.6,-32.5 M0,-34.3 l0,0.01 M0,-32.3 l0,0.01 M1.4,-33.2 Q2.1,-34.4 2.8,-33.2 T4.2,-33.2 M5.5,-33.3 l0,0.01" fill="none" stroke="#ffe066" stroke-width="0.8" stroke-linecap="round" filter="url(#lockTextGlow)"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- FRONT PLAQUE carrying the clue, riveted high on the face so it -->
<!-- stays clear of the water -->
<path d="M-38,-27.5 L38,-27.5 Q39.5,-27.5 39.5,-26 L39.5,-12.5 Q39.5,-11 38,-11 L-38,-11 Q-39.5,-11 -39.5,-12.5 L-39.5,-26 Q-39.5,-27.5 -38,-27.5 Z" fill="#3e2e0c"/>
<path d="M-38,-27.5 L38,-27.5 Q39.5,-27.5 39.5,-26 L39.5,-12.5 Q39.5,-11 38,-11 L-38,-11 Q-39.5,-11 -39.5,-12.5 L-39.5,-26 Q-39.5,-27.5 -38,-27.5 Z" fill="none" stroke="#a5832e" stroke-width="0.9"/>
<circle cx="-37" cy="-25" r="0.8" fill="#c9a32c"/><circle cx="37" cy="-25" r="0.8" fill="#c9a32c"/><circle cx="-37" cy="-13.5" r="0.8" fill="#c9a32c"/><circle cx="37" cy="-13.5" r="0.8" fill="#c9a32c"/>
<g filter="url(#lockTextGlow)">
  <text x="0" y="-20.2" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="6.2" opacity="0.95" letter-spacing="0">Shelter endlessly</text>
  <text x="0" y="-13.4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="6.2" opacity="0.95" letter-spacing="0">is a bay (4)</text>
</g>

<!-- WATER over the lower third of the box: the chest is half-sunk in the -->
<!-- pool. A translucent tint across the planks, a bright surface line, -->
<!-- and ripples drifting over the wood beneath it. -->
<path d="M-52,-8.4 Q-26,-9.8 0,-8.6 Q26,-9.8 52,-8.4 L52,3 Q0,6 -52,3 Z" fill="#0e3a58" opacity="0.62"/>
<path d="M-52,-6 Q0,-4.6 52,-6 L52,3 Q0,6 -52,3 Z" fill="#0a2a40" opacity="0.45"/>
<path d="M-40,-6.4 Q-30,-7.4 -20,-6.4 M-6,-6.8 Q6,-7.8 18,-6.8 M28,-4.2 Q36,-5 44,-4.2 M-34,-2.6 Q-22,-3.6 -10,-2.6 M6,-2.4 Q16,-3.2 26,-2.4" fill="none" stroke="#9fd8ef" stroke-width="0.6" opacity="0.3"><animate attributeName="opacity" values="0.18;0.38;0.18" dur="3.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M-52,-8.4 Q-26,-9.8 0,-8.6 Q26,-9.8 52,-8.4" fill="none" stroke="#9fd8ef" stroke-width="0.9" opacity="0.5"/>
<!-- the silhouette line, drawn last -->
<path d="M-46,-1 L-46,-30.5 L-47,-30.5 L-47,-38 L-44,-48 Q0,-51 44,-48 L47,-38 L47,-30.5 L46,-30.5 L46,-1" fill="none" stroke="#2a1e08" stroke-width="1.1" opacity="0.7" stroke-linejoin="round"/>
</g>

<!-- gold reflected down into the water under the lock -->
<path d="M226,214 Q250,211 274,214 Q250,232 226,214 Z" fill="#ffd700" opacity="0.07"><animate attributeName="opacity" values="0.04;0.11;0.04" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- ripples spreading from where the chest breaks the surface -->
<path d="M186,214 Q250,204 314,214 Q250,228 186,214 Z" fill="none" stroke="#7ac5e8" stroke-width="0.6" opacity="0.2"><animate attributeName="opacity" values="0.2;0.04;0.2" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M170,218 Q250,206 330,218 Q250,234 170,218 Z" fill="none" stroke="#7ac5e8" stroke-width="0.6" opacity="0.14"><animate attributeName="opacity" values="0.14;0.02;0.14" dur="5s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- Cave floor either side of the pool -->
<path d="M0,224 Q40,232 82,230 Q116,228 132,236 L132,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M376,236 Q396,228 430,230 Q466,232 500,224 L500,260 L376,260 Z" fill="#2a2a3a"/>
<path d="M0,246 Q120,240 250,248 Q380,254 500,244 L500,260 L0,260 Z" fill="#1a2030" opacity="0.7"/>
<path d="M44,232 L54,222 L68,224 L74,234 Q58,239 44,232 Z" fill="#33333f"/>
<path d="M424,230 L434,221 L448,223 L454,232 Q438,237 424,230 Z" fill="#33333f"/>

<!-- Motes drifting in the cavern -->
<circle cx="180" cy="130" r="1.5" fill="#4af5a0" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q9,-7 2,-14 Q-8,-7 0,0 Z" dur="7.4s" repeatCount="indefinite"/></circle>
<circle cx="320" cy="110" r="1" fill="#7ac5e8" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.15;0.6;0.15" dur="3.6s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q-8,-6 -1,-12 Q7,-6 0,0 Z" dur="6.2s" begin="0.8s" repeatCount="indefinite"/></circle>
<circle cx="80" cy="160" r="1" fill="#4af5a0" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.45;0.1" dur="5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q8,-6 4,-13 Q-5,-7 0,0 Z" dur="8.1s" begin="1.5s" repeatCount="indefinite"/></circle>
<circle cx="420" cy="150" r="1.5" fill="#7ac5e8" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="4.2s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q-7,-8 1,-14 Q8,-6 0,0 Z" dur="6.9s" begin="2s" repeatCount="indefinite"/></circle>
</svg>`;

// Scene 2 (puzzle step) shares the same visual as scene 1
STORY_SCENES['cove_2'] = STORY_SCENES['cove_1'];

// Scene 3: Chest open, golden light spilling out, relics visible
STORY_SCENES['cove_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="coveBg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0e1828"/><stop offset="40%" stop-color="#1a3a5a"/><stop offset="100%" stop-color="#2a2a3a"/>
  </linearGradient>
  <radialGradient id="chestLight3" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.3"/><stop offset="40%" stop-color="#ffd700" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="algaeGlow3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.5"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <filter id="coveGlow3"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="goldGlow3"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="crystalWater3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#1a4a6a"/><stop offset="25%" stop-color="#2a5a80"/><stop offset="50%" stop-color="#1a4a6a"/><stop offset="75%" stop-color="#2a5a80"/><stop offset="100%" stop-color="#1a4a6a"/>
  </linearGradient>
  <linearGradient id="cove3Oak" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#6a5018"/><stop offset="22%" stop-color="#9a7526"/><stop offset="60%" stop-color="#8a6a20"/><stop offset="100%" stop-color="#5e4614"/>
  </linearGradient>
  <linearGradient id="cove3Lid" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7a5c1a"/><stop offset="60%" stop-color="#a07a28"/><stop offset="100%" stop-color="#c09a3c"/>
  </linearGradient>
  <linearGradient id="cove3Inside" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6a4e16"/><stop offset="100%" stop-color="#1e1404"/>
  </linearGradient>
  <clipPath id="cove3PoolClip"><path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z"/></clipPath>
  <linearGradient id="cove3Beam" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="#ffe066" stop-opacity="0.4"/><stop offset="100%" stop-color="#ffe066" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#coveBg3)"/>
<!-- Golden light washing the whole cavern -->
<circle cx="250" cy="175" r="160" fill="url(#chestLight3)"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>

<!-- Cavern back wall and ceiling -->
<path d="M0,0 L0,182 Q28,176 56,180 Q92,170 128,174 Q176,162 214,158 Q250,152 286,158 Q324,163 372,174 Q408,170 444,178 Q472,176 500,182 L500,0 Z" fill="#0e1828"/>
<path d="M0,0 L500,0 L500,24 Q482,32 474,48 Q464,30 448,26 Q432,34 424,50 Q414,32 398,28 Q384,38 376,56 Q366,34 348,30 Q334,40 326,58 Q316,36 298,32 Q284,42 276,60 Q266,38 248,34 Q234,44 226,62 Q216,40 198,36 Q184,44 176,60 Q166,38 148,34 Q134,42 126,58 Q116,36 98,32 Q84,40 76,56 Q66,34 48,30 Q34,38 26,52 Q16,32 0,26 Z" fill="#0a1420"/>
<path d="M120,26 Q125,23 130,26 Q128,54 125,82 Q123,54 120,26 Z" fill="#1a2a3a" opacity="0.75"/>
<path d="M123,28 Q125,27 127,28 Q126,54 125,76 Q124,54 123,28 Z" fill="#3a4a5e" opacity="0.4"/>
<path d="M248,24 Q253,21 258,24 Q256,50 253,76 Q251,50 248,24 Z" fill="#1a2a3a" opacity="0.7"/>
<path d="M251,26 Q253,25 255,26 Q254,50 253,70 Q252,50 251,26 Z" fill="#3a4a5e" opacity="0.4"/>
<path d="M378,26 Q383,24 388,26 Q386,50 383,72 Q381,50 378,26 Z" fill="#1a2a3a" opacity="0.72"/>
<path d="M381,28 Q383,27 385,28 Q384,50 383,66 Q382,50 381,28 Z" fill="#3a4a5e" opacity="0.4"/>
<path d="M64,32 Q67,30 70,32 Q69,48 67,64 Q66,48 64,32 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M180,30 Q183,28 186,30 Q185,48 183,64 Q182,48 180,30 Z" fill="#1a2a3a" opacity="0.5"/>
<path d="M320,28 Q323,26 326,28 Q325,46 323,62 Q322,46 320,28 Z" fill="#1a2a3a" opacity="0.48"/>
<path d="M440,30 Q443,28 446,30 Q445,46 443,60 Q442,46 440,30 Z" fill="#1a2a3a" opacity="0.5"/>

<!-- Algae, dimmed: the chest is now the brighter source -->
<path d="M16,88 Q28,80 42,88 Q52,96 46,108 Q34,116 22,110 Q12,100 16,88 Z" fill="#4af5a0" opacity="0.045"><animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<circle cx="30" cy="100" r="23" fill="url(#algaeGlow3)" opacity="0.2"/>
<path d="M462,84 Q474,77 486,84 Q494,92 488,102 Q476,109 466,103 Q458,94 462,84 Z" fill="#7ac5e8" opacity="0.035"><animate attributeName="opacity" values="0.02;0.05;0.02" dur="5s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- Rock ledge behind the pool -->
<path d="M132,184 L162,168 Q200,154 250,151 Q300,154 338,168 L368,184 L372,192 L128,192 Z" fill="#3a3a4c"/>
<path d="M162,168 Q200,154 250,151 Q300,154 338,168 L330,172 Q294,161 250,159 Q206,161 170,172 Z" fill="#5c5c72" opacity="0.55"/>
<path d="M128,192 L372,192 L376,201 L124,201 Z" fill="#2a2a3a"/>
<path d="M124,201 L376,201 L378,206 L122,206 Z" fill="#1f1f2a" opacity="0.7"/>

<!-- Crystal tidal pool -->
<path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z" fill="#0a2a40"/>
<path d="M132,212 Q168,192 216,187 Q262,183 306,188 Q356,194 376,214 Q360,238 306,245 Q254,250 202,244 Q148,236 132,212 Z" fill="url(#crystalWater3)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.35" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- gold thrown down into the water, broken up by the surface -->
<path d="M198,214 Q250,206 302,214 Q286,234 250,238 Q214,234 198,214 Z" fill="#ffd700" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M212,222 Q250,217 288,222" fill="none" stroke="#ffe066" stroke-width="1" opacity="0.18"/>
<path d="M222,230 Q250,226 278,230" fill="none" stroke="#ffe066" stroke-width="0.8" opacity="0.13"/>
<path d="M156,206 Q194,196 240,193" fill="none" stroke="#7ac5e8" stroke-width="0.9" opacity="0.2"/>
<path d="M292,192 Q330,197 358,210" fill="none" stroke="#7ac5e8" stroke-width="0.8" opacity="0.16"/>

<!-- Rocks bedding the pool edge -->
<path d="M118,214 L128,200 L142,199 L148,212 Q134,219 118,214 Z" fill="#3a3a4c"/>
<path d="M128,200 L142,199 L146,206 Q134,208 124,205 Z" fill="#5c5c72" opacity="0.5"/>
<path d="M356,206 L366,193 L380,193 L386,206 Q370,212 356,206 Z" fill="#3a3a4c"/>
<path d="M366,193 L380,193 L383,199 Q372,201 362,199 Z" fill="#5c5c72" opacity="0.45"/>

<!-- ====================================================================
     THE OPEN CHEST, one prop in one local frame. Origin = centre of the
     front face's bottom edge, which is also the WATERLINE (y 212), so no
     part can drift off another. Box: front face x -46..46, y -30..0; the
     top of the walls is a rim quad, front edge y -30, back edge y -40.
     The lid hinges on that BACK edge and swings up behind the box, so we
     see its underside. Paint order, back to front: reflection, contact
     shadow, lid, hinges on the seam, rim, dark cavity, relics, front rim,
     front face, water lapping the foot.
     ==================================================================== -->
<g clip-path="url(#cove3PoolClip)">
<!-- reflection: the chest above water mirrored about the waterline. The -->
<!-- water stands at local y -8.5 (abs 203.5), as in cove_1, so the mirror -->
<!-- maps local y to 195 - y and only the dry part (y -8.5 up) is drawn. -->
<g transform="translate(250 195) scale(1 -1)" opacity="0.28">
<path d="M-46,-8.5 L46,-8.5 L46,-30 L-46,-30 Z" fill="#8a6a20"/>
<path d="M-44,-40 L44,-40 L40,-72 Q0,-75 -40,-72 Z" fill="#5e4614"/>
<path d="M-43,-32 L43,-32 L41,-38 L-41,-38 Z" fill="#ffd700" opacity="0.6"/>
<path d="M-31,-8.5 L-27,-8.5 L-27,-30 L-31,-30 Z M27,-8.5 L31,-8.5 L31,-30 L27,-30 Z" fill="#3a2c0c"/>
</g>
<!-- ripples breaking the reflection up -->
<path d="M206,222 Q250,219 294,222 M212,231 Q250,228 288,231 M220,239 Q250,237 280,239" fill="none" stroke="#0a2a40" stroke-width="2.2" opacity="0.55"/>
</g>
<g transform="translate(250 212)">
<!-- contact shadow where the box stands in the water -->
<ellipse cx="0" cy="2" rx="54" ry="5" fill="#061420" opacity="0.5"/>

<!-- LID, swung back past upright. Its bottom edge IS the back rim line -->
<!-- (y -40, x -44..44), so it pivots exactly on the box. -->
<path d="M-44,-40 L44,-40 L40,-72 Q0,-76 -40,-72 Z" fill="url(#cove3Lid)"/>
<!-- underside panel, recessed inside the lid's frame -->
<path d="M-39,-42 L39,-42 L36,-68 Q0,-71 -36,-68 Z" fill="#4a3810"/>
<path d="M-34,-44 L34,-44 L32,-64 Q0,-67 -32,-64 Z" fill="#5e4614" opacity="0.7"/>
<!-- battens across the underside -->
<path d="M-14,-43 L-13,-67 M14,-43 L13,-67" fill="none" stroke="#3a2c0c" stroke-width="1.4" opacity="0.6"/>
<!-- the lid's front edge, now on top, catching the glow -->
<path d="M-40,-72 Q0,-76 40,-72 L39,-70 Q0,-73.5 -39,-70 Z" fill="#d4ac48" opacity="0.7"/>
<!-- hasp hanging off that edge, the lid being open -->
<path d="M-5,-77 L5,-77 Q6,-77 6,-75 L6,-70 L-6,-70 L-6,-75 Q-6,-77 -5,-77 Z" fill="#ffd700" opacity="0.85"/>
<path d="M-1.2,-74 L1.2,-74 L1.2,-71.5 L-1.2,-71.5 Z" fill="#3a2c0c" opacity="0.7"/>

<!-- RIM: the top of all four walls, seen from slightly above -->
<path d="M-46,-30 L46,-30 L44,-40 L-44,-40 Z" fill="#a07a28"/>
<path d="M-44,-40 L44,-40" fill="none" stroke="#2a1e08" stroke-width="0.9" opacity="0.7"/>
<!-- HINGES on the lid/back-rim seam: strap up the lid, knuckle on the seam -->
<g transform="translate(-35 0)"><path d="M-2.5,-42 L-2,-57 L2,-57 L2.5,-42 Z" fill="#5a4e3a"/><path d="M-2,-56.5 L-2.3,-43" fill="none" stroke="#a89870" stroke-width="0.6" opacity="0.7"/><circle cx="0" cy="-51" r="0.9" fill="#b8a878"/><path d="M-6,-43.5 L6,-43.5 Q7,-43.5 7,-42.5 L7,-38.5 L-7,-38.5 L-7,-42.5 Q-7,-43.5 -6,-43.5 Z" fill="#4e4434"/><path d="M-6,-42.7 L6,-42.7" fill="none" stroke="#b8a878" stroke-width="0.9" opacity="0.8"/><path d="M0,-43.5 L0,-38.5" fill="none" stroke="#1a1406" stroke-width="0.7" opacity="0.7"/></g>
<g transform="translate(35 0)"><path d="M-2.5,-42 L-2,-57 L2,-57 L2.5,-42 Z" fill="#5a4e3a"/><path d="M-2,-56.5 L-2.3,-43" fill="none" stroke="#a89870" stroke-width="0.6" opacity="0.7"/><circle cx="0" cy="-51" r="0.9" fill="#b8a878"/><path d="M-6,-43.5 L6,-43.5 Q7,-43.5 7,-42.5 L7,-38.5 L-7,-38.5 L-7,-42.5 Q-7,-43.5 -6,-43.5 Z" fill="#4e4434"/><path d="M-6,-42.7 L6,-42.7" fill="none" stroke="#b8a878" stroke-width="0.9" opacity="0.8"/><path d="M0,-43.5 L0,-38.5" fill="none" stroke="#1a1406" stroke-width="0.7" opacity="0.7"/></g>

<!-- the CAVITY inside the walls: the dark mouth that says "open" -->
<path d="M-43,-32 L43,-32 L41.5,-38.5 L-41.5,-38.5 Z" fill="url(#cove3Inside)"/>

<!-- RELICS, seated IN the cavity. Drawn before the front wall, which -->
<!-- crosses their bases. -->
<!-- SALT-STIFF PAGES: loose sheets dried hard by the sea, standing up at -->
<!-- angles where they set. Rime crusts their edges; the ruling on them is -->
<!-- abstract strokes only, never readable text. -->
<path d="M-39,-33 L-36.5,-47 L-23,-49.5 L-24.5,-35 Z" fill="#d8c99a"/>
<path d="M-36.5,-47 L-23,-49.5" fill="none" stroke="#f4efe0" stroke-width="1" stroke-dasharray="1.6 0.9" opacity="0.85"/>
<path d="M-34.5,-44 L-25.5,-45.6 M-34.8,-41 L-25.2,-42.5 M-35,-38 L-28,-39" fill="none" stroke="#8a7a4c" stroke-width="0.6" opacity="0.45"/>
<path d="M23,-35 L29,-50 L41.5,-46 L38.5,-33 Z" fill="#e2d4a6"/>
<path d="M29,-50 L41.5,-46" fill="none" stroke="#f4efe0" stroke-width="1" stroke-dasharray="1.6 0.9" opacity="0.85"/>
<path d="M29.4,-46 L39.6,-43 M28.2,-43 L38.8,-40 M27.2,-40 L34,-38" fill="none" stroke="#8a7a4c" stroke-width="0.6" opacity="0.45"/>
<path d="M-4,-38 L3,-47.5 L17,-45.5 L12,-37 Z" fill="#cdbd8c"/>
<path d="M3,-47.5 L17,-45.5" fill="none" stroke="#f4efe0" stroke-width="0.9" stroke-dasharray="1.4 0.9" opacity="0.8"/>
<!-- the bed of pages the scrolls lie on, buckled into stiff ridges -->
<path d="M-42,-31 L-40.5,-35 L-33,-38.6 L-25,-37 L-18,-40.6 L-9,-38.8 L-2,-41.6 L7,-39.4 L15,-41.2 L24,-38.2 L33,-39.4 L40.5,-35 L42.5,-31 Z" fill="#c9b886"/>
<path d="M-40.5,-35 L-33,-38.6 L-25,-37 L-18,-40.6 L-9,-38.8 L-2,-41.6 L7,-39.4 L15,-41.2 L24,-38.2 L33,-39.4 L40.5,-35" fill="none" stroke="#f4efe0" stroke-width="0.9" stroke-dasharray="1.8 1" opacity="0.7"/>
<path d="M-33,-38.6 L-31,-33 M-18,-40.6 L-16,-34 M-2,-41.6 L-1,-34 M15,-41.2 L14,-34 M33,-39.4 L31,-33.5" fill="none" stroke="#9a8a58" stroke-width="0.6" opacity="0.5"/>
<!-- ROLLED SCROLLS (the clues) lying on the pages, one end tipped up -->
<g transform="translate(-16 -40.5) rotate(-9)">
<path d="M-11,-3.5 L11,-3.5 Q13,-3.5 13,0 Q13,3.5 11,3.5 L-11,3.5 Q-13,3.5 -13,0 Q-13,-3.5 -11,-3.5 Z" fill="#e8d8a0"/>
<ellipse cx="-11" cy="0" rx="2" ry="3.5" fill="#cbb87e"/>
<path d="M-11.5,-1.2 Q-10.4,0 -11.5,1.2" fill="none" stroke="#9a8a58" stroke-width="0.7"/>
<path d="M-9,-2.6 L11,-2.6" fill="none" stroke="#f4e8bc" stroke-width="1" opacity="0.7"/>
<path d="M-1,-3.5 L1,-3.5 L1,3.5 L-1,3.5 Z" fill="#a03a2a" opacity="0.8"/>
</g>
<!-- second scroll, shorter, lying across the middle of the pages -->
<g transform="translate(9 -41.5) rotate(7) scale(0.82)">
<path d="M-11,-3.5 L11,-3.5 Q13,-3.5 13,0 Q13,3.5 11,3.5 L-11,3.5 Q-13,3.5 -13,0 Q-13,-3.5 -11,-3.5 Z" fill="#e2d098"/>
<ellipse cx="11" cy="0" rx="2" ry="3.5" fill="#c4b076"/>
<path d="M11.5,-1.2 Q10.4,0 11.5,1.2" fill="none" stroke="#9a8a58" stroke-width="0.7"/>
<path d="M-11,-2.6 L9,-2.6" fill="none" stroke="#f4e8bc" stroke-width="1" opacity="0.7"/>
<path d="M-3,-3.5 L-1,-3.5 L-1,3.5 L-3,3.5 Z" fill="#3a5a6a" opacity="0.8"/>
</g>
<!-- third scroll propped against the right-hand pages, end up -->
<g transform="translate(26 -40) rotate(-58) scale(0.78)">
<path d="M-11,-3.5 L11,-3.5 Q13,-3.5 13,0 Q13,3.5 11,3.5 L-11,3.5 Q-13,3.5 -13,0 Q-13,-3.5 -11,-3.5 Z" fill="#ead9a4"/>
<ellipse cx="11" cy="0" rx="2" ry="3.5" fill="#cbb87e"/>
<path d="M11.5,-1.2 Q10.4,0 11.5,1.2" fill="none" stroke="#9a8a58" stroke-width="0.7"/>
<path d="M-9,-2.6 L9,-2.6" fill="none" stroke="#f4e8bc" stroke-width="1" opacity="0.7"/>
<path d="M2,-3.5 L4,-3.5 L4,3.5 L2,3.5 Z" fill="#a03a2a" opacity="0.8"/>
</g>
<!-- one stiff page leaning on the inside of the front wall -->
<path d="M-40,-31 L-37,-38 L-29.5,-36.6 L-32,-31 Z" fill="#e6d9ae"/>
<path d="M-37,-38 L-29.5,-36.6" fill="none" stroke="#f4efe0" stroke-width="0.8" stroke-dasharray="1.2 0.8" opacity="0.8"/>

<!-- FRONT RIM: the top of the front wall, in front of the relics -->
<path d="M-46,-30 L46,-30 L43,-32 L-43,-32 Z" fill="#d4ac48"/>

<!-- FRONT FACE, planked and banded -->
<path d="M-46,-30 L46,-30 L46,0 L-46,0 Z" fill="url(#cove3Oak)"/>
<path d="M-23,-30 L-23,0 M0,-30 L0,0 M23,-30 L23,0" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<path d="M-46,-15 L46,-15 L46,-12 L-46,-12 Z" fill="#6a5018" opacity="0.75"/>
<path d="M-46,-15 L46,-15 L46,-14 L-46,-14 Z" fill="#a5832e" opacity="0.35"/>
<!-- iron corner bands and straps -->
<path d="M-46,-30 L-41,-30 L-41,0 L-46,0 Z M41,-30 L46,-30 L46,0 L41,0 Z" fill="#3a2c0c" opacity="0.8"/>
<path d="M-31,-30 L-27,-30 L-27,0 L-31,0 Z M27,-30 L31,-30 L31,0 L27,0 Z" fill="#3a2c0c" opacity="0.7"/>
<path d="M-46,-29.4 L46,-29.4" fill="none" stroke="#3a2c0c" stroke-width="1.2" opacity="0.6"/>
<!-- GLYPH BAND where the hasp would close: an engraved inscription band -->
<!-- (as cove_1's lock), abstract marks only (dots, arcs, a ripple). No -->
<!-- keyhole, no letters. -->
<path d="M-15,-28.8 L15,-28.8 Q16,-28.8 16,-27.8 L16,-20.2 Q16,-19.2 15,-19.2 L-15,-19.2 Q-16,-19.2 -16,-20.2 L-16,-27.8 Q-16,-28.8 -15,-28.8 Z" fill="#ffd700" opacity="0.85"/>
<path d="M-14,-28 L14,-28" fill="none" stroke="#fff0a0" stroke-width="0.7" opacity="0.45"/>
<path d="M-13.4,-26.6 L13.4,-26.6 L13.4,-21.4 L-13.4,-21.4 Z" fill="#2a1e08"/>
<path d="M-11.6,-24 l0,0.01 M-9.4,-23 Q-8,-25.4 -6.6,-23 M-4.4,-25 l0,0.01 M-4.4,-22.8 l0,0.01 M-2.4,-24 Q-1.6,-25.4 -0.8,-24 T0.8,-24 M2.8,-24.2 l0,0.01 M4.6,-23 Q6,-25.4 7.4,-23 M9.4,-25 l0,0.01 M9.4,-22.8 l0,0.01 M11.6,-24 l0,0.01" fill="none" stroke="#ffe066" stroke-width="0.9" stroke-linecap="round"><animate attributeName="opacity" values="0.65;1;0.65" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- glow catching the front rim from inside -->
<path d="M-43,-31.4 L43,-31.4" fill="none" stroke="#ffe066" stroke-width="0.8" opacity="0.6"/>

<!-- WATERLINE, matched to cove_1: the chest stands half-sunk, water over -->
<!-- the lower part of the box (surface at local y -8.5, abs 203.5). -->
<path d="M-52,-8.4 Q-26,-9.8 0,-8.6 Q26,-9.8 52,-8.4 L52,3 Q0,6 -52,3 Z" fill="#0e3a58" opacity="0.62"/>
<path d="M-52,-6 Q0,-4.6 52,-6 L52,3 Q0,6 -52,3 Z" fill="#0a2a40" opacity="0.45"/>
<path d="M-40,-6.4 Q-30,-7.4 -20,-6.4 M-6,-6.8 Q6,-7.8 18,-6.8 M28,-4.2 Q36,-5 44,-4.2 M-34,-2.6 Q-22,-3.6 -10,-2.6 M6,-2.4 Q16,-3.2 26,-2.4" fill="none" stroke="#9fd8ef" stroke-width="0.6" opacity="0.3"><animate attributeName="opacity" values="0.18;0.38;0.18" dur="3.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M-52,-8.4 Q-26,-9.8 0,-8.6 Q26,-9.8 52,-8.4" fill="none" stroke="#9fd8ef" stroke-width="0.9" opacity="0.5"/>
<path d="M-52,-8.4 Q-26,-9.8 0,-8.6 Q26,-9.8 52,-8.4 L52,3 Q0,6 -52,3 Z" fill="#ffd700" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="3.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
</g>

<!-- ====================================================================
     LIGHT SPILLING OUT of the mouth (y 172..180). It must ADD, so the
     beams are a light gradient fading upward, widening as they rise.
     ==================================================================== -->
<path d="M228,178 L212,178 L192,112 L218,112 Z" fill="url(#cove3Beam)" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M262,176 L238,176 L228,96 L268,96 Z" fill="url(#cove3Beam)" opacity="0.5"><animate attributeName="opacity" values="0.32;0.66;0.32" dur="2.6s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M272,178 L288,178 L308,112 L282,112 Z" fill="url(#cove3Beam)" opacity="0.36"><animate attributeName="opacity" values="0.22;0.46;0.22" dur="3.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- the hot core right at the mouth of the chest -->
<path d="M210,177 Q250,166 290,177 Q250,183 210,177 Z" fill="#ffe066" opacity="0.28"><animate attributeName="opacity" values="0.18;0.4;0.18" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- Cave floor either side -->
<path d="M0,224 Q40,232 82,230 Q116,228 132,236 L132,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M376,236 Q396,228 430,230 Q466,232 500,224 L500,260 L376,260 Z" fill="#2a2a3a"/>
<path d="M0,246 Q120,240 250,248 Q380,254 500,244 L500,260 L0,260 Z" fill="#1a2030" opacity="0.7"/>
<path d="M44,232 L54,222 L68,224 L74,234 Q58,239 44,232 Z" fill="#33333f"/>
<path d="M424,230 L434,221 L448,223 L454,232 Q438,237 424,230 Z" fill="#33333f"/>

<!-- Golden motes rising out of the chest -->
<circle cx="240" cy="172" r="2" fill="#ffd700" opacity="0.5" filter="url(#goldGlow3)"><animate attributeName="cy" values="172;142;112" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0.5;0.8;0" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="255" cy="170" r="1.5" fill="#ffd700" opacity="0.4" filter="url(#goldGlow3)"><animate attributeName="cy" values="170;138;106" dur="3.6s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3.6s" begin="0.8s" repeatCount="indefinite"/></circle>
<circle cx="266" cy="174" r="1.5" fill="#ffd700" opacity="0.3" filter="url(#goldGlow3)"><animate attributeName="cy" values="174;144;114" dur="4.6s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0.3;0.6;0" dur="4.6s" begin="1.5s" repeatCount="indefinite"/></circle>
<circle cx="248" cy="170" r="1" fill="#ffe840" opacity="0.4" filter="url(#goldGlow3)"><animate attributeName="cy" values="170;140;110" dur="3.1s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3.1s" begin="0.3s" repeatCount="indefinite"/></circle>
<circle cx="230" cy="176" r="2" fill="#ffd700" opacity="0.35" filter="url(#goldGlow3)"><animate attributeName="cy" values="176;146;116" dur="5s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="opacity" values="0.35;0.65;0" dur="5s" begin="2s" repeatCount="indefinite"/></circle>

<!-- Motes elsewhere in the cavern -->
<circle cx="80" cy="160" r="1" fill="#4af5a0" filter="url(#coveGlow3)"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q8,-6 3,-13 Q-6,-7 0,0 Z" dur="7.8s" repeatCount="indefinite"/></circle>
<circle cx="420" cy="150" r="1.5" fill="#7ac5e8" filter="url(#coveGlow3)"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="4.2s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animateMotion path="M0,0 Q-7,-7 1,-13 Q8,-6 0,0 Z" dur="6.6s" begin="2s" repeatCount="indefinite"/></circle>
</svg>`;

// Scenes 4-6: the cove_3 room (first chest open, untouched) plus the SECOND,
// smaller chest wedged in a crack in the right-hand rock.
//   4: CAVE puzzle. Small domed chest, locked, algae light flickering on its
//      glyph band. The clue itself stays in the puzzle dialog (index.html).
//   5: small chest open, a stone tablet standing in it (abstract glyphs only).
//   6: both chests open; algae on the far wall gathering into glyphs.
// Built from the cove_3 string with every id suffixed, so no id collides.
(function () {
  var EASE = ' calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" keyTimes="0;0.5;1" repeatCount="indefinite"';
  var FLICK = ' calcMode="spline" keyTimes="0;0.2;0.45;0.7;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1" repeatCount="indefinite"';

  function defs(s) {
    return '<radialGradient id="coveNookLit' + s + '" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4af5a0" stop-opacity="0.55"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/></radialGradient>' +
      '<filter id="coveNookGlow' + s + '" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="1.4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>' +
      '<linearGradient id="coveFloorFade' + s + '" gradientUnits="userSpaceOnUse" x1="360" y1="0" x2="420" y2="0"><stop offset="0" stop-color="#1a2030" stop-opacity="0"/><stop offset="1" stop-color="#1a2030" stop-opacity="0.7"/></linearGradient>';
  }

  // The rock outcrop on the right and the crack the chest is jammed into.
  function rockBack() {
    return '<!-- OUTCROP on the right, split by a crack -->' +
      '<path d="M386,242 L390,214 L398,190 L410,168 L426,150 L442,136 L462,134 L482,144 L496,158 L500,162 L500,246 Z" fill="#3a3a4c"/>' +
      '<path d="M398,190 L410,168 L426,150 L442,136 L462,134 L482,144 L476,149 L460,141 L445,143 L430,156 L415,175 L404,194 Z" fill="#5c5c72" opacity="0.5"/>' +
      '<path d="M482,144 L496,158 L500,162 L500,246 L484,246 L490,196 Z" fill="#2a2a3a" opacity="0.8"/>' +
      '<!-- the crack: a dark V from the crest down to the floor, wide enough -->' +
      '<!-- that the chest body sits INSIDE it with dark showing either side -->' +
      '<path d="M404,240 L410,206 L414,188 L422,168 L436,150 L446,140 L456,146 L468,160 L476,178 L482,200 L484,240 Z" fill="#0b0f18"/>' +
      '<path d="M440,150 L446,140 L453,146 L447,152 Z" fill="#1a2030"/>' +
      '<!-- the floor of the crack the chest is jammed down onto -->' +
      '<path d="M406,230 L478,224 L484,240 L402,242 Z" fill="#22222e"/>';
  }
  function rockFront(s) {
    return '<!-- near lips of the crack: one broad rock mass in front, rising -->' +
      '<!-- either side over the chest flanks so the chest sits in a notch -->' +
      '<path d="M390,250 L393,232 L400,216 L410,206 L421,204.5 L427,213 L428,224 Q446,225 462,219.5 L462,213 L468,203.5 L480,205.5 L489,218 L495,234 L497,250 Z" fill="#3a3a4c"/>' +
      '<path d="M400,216 L410,206 L421,204.5 L424,209 L412,211.5 Z" fill="#5c5c72" opacity="0.6"/>' +
      '<path d="M468,203.5 L480,205.5 L486,213 L473,209.5 Z" fill="#5c5c72" opacity="0.5"/>' +
      '<path d="M428,224 Q446,225 462,219.5" fill="none" stroke="#525266" stroke-width="1.2" opacity="0.8"/>' +
      '<path d="M410,250 L414,232 L420,224 M478,250 L476,232 L484,226" fill="none" stroke="#2a2a3a" stroke-width="1.4" opacity="0.6"/>' +
      '<path d="M393,232 L400,216 L410,206 L421,204.5 L427,213 L428,224 Q446,225 462,219.5 L462,213 L468,203.5 L480,205.5 L489,218 L495,234" fill="none" stroke="#1f1f2a" stroke-width="1"/>' +
      '<!-- floor shadow band under the outcrop, feathered in from the left -->' +
      '<path d="M360,247 Q440,250 500,244 L500,260 L360,260 Z" fill="url(#coveFloorFade' + s + ')"/>';
  }

  // The small chests: the shared kit chest + glyph plate (coveSmallChest, top
  // of file). Only the niche chest's plate glows; the live lock flickers.
  function smallClosed(s) {
    return coveSmallChest({ x: 0, y: 0, scale: 0.74 }, 'coveNookGlow' + s, true);
  }

  function smallOpen(s) {
    // POLISHED STONE TABLET set down in the chest, carved with abstract marks
    // only: dashes, dots and broken arcs. No letter shapes. Authored in the old
    // small-chest frame (base y -17), scaled into kit units, seated on the
    // kit's 'inside' anchor by the contents slot.
    var tablet = '<g transform="scale(1.67) translate(0 17)">' +
      '<g transform="rotate(-3 0 -17)">' +
      '<path d="M-7.5,-17 L-7.5,-31 Q-7.5,-35.5 0,-35.5 Q7.5,-35.5 7.5,-31 L7.5,-17 Z" fill="#8a8e9a"/>' +
      '<path d="M3.8,-34.7 Q7.5,-33.6 7.5,-31 L7.5,-17 L3.8,-17 Z" fill="#5c6070" opacity="0.7"/>' +
      '<path d="M-6.5,-18 L-6.5,-30.6 Q-6.5,-33.7 -2.8,-34.6" fill="none" stroke="#c4c8d2" stroke-width="0.9" opacity="0.6"/>' +
      '<path d="M-4.5,-30 L-2,-30 M0,-30 l0,0.01 M2,-30 L4.5,-30 M-4.2,-26.2 l0,0.01 M-2.6,-25.6 Q-1.2,-27.8 0.2,-25.6 M2,-26.2 l0,0.01 M4,-26.2 l0,0.01 M-4.5,-22.4 L-0.8,-22.4 M1.4,-22.4 l0,0.01 M3.2,-22.4 L4.5,-22.4" fill="none" stroke="#3a3e4a" stroke-width="0.9" stroke-linecap="round"/>' +
      '<path d="M-4.5,-30 L-2,-30 M0,-30 l0,0.01 M2,-30 L4.5,-30 M-4.2,-26.2 l0,0.01 M-2.6,-25.6 Q-1.2,-27.8 0.2,-25.6 M2,-26.2 l0,0.01 M4,-26.2 l0,0.01 M-4.5,-22.4 L-0.8,-22.4 M1.4,-22.4 l0,0.01 M3.2,-22.4 L4.5,-22.4" fill="none" stroke="#4af5a0" stroke-width="0.55" stroke-linecap="round" filter="url(#coveNookGlow' + s + ')"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.2s"' + EASE + '/></path>' +
      '<path d="M-7.5,-17 L-7.5,-31 Q-7.5,-35.5 0,-35.5 Q7.5,-35.5 7.5,-31 L7.5,-17" fill="none" stroke="#3a3e4a" stroke-width="0.9"/>' +
      '</g></g>';
    return coveSmallChest({ x: 0, y: 0, scale: 0.74, open: true, contents: tablet }, 'coveNookGlow' + s, false);
  }

  // Algae light on the chest: the crust above the crack throws it down.
  function algaeOnChest(s, strength, dur) {
    var lo = (0.25 * strength).toFixed(2), hi = (0.7 * strength).toFixed(2), mid = (0.35 * strength).toFixed(2), hi2 = (0.6 * strength).toFixed(2);
    return '<path d="M467,148 Q474,144 481,147 Q483,152 478,155 Q472,156 468,153 Z" fill="#4af5a0" opacity="0.1"><animate attributeName="opacity" values="0.05;0.14;0.05" dur="4.4s"' + EASE + '/></path>' +
      '<ellipse cx="446" cy="196" rx="34" ry="28" fill="url(#coveNookLit' + s + ')" opacity="' + lo + '"><animate attributeName="opacity" values="' + lo + ';' + hi + ';' + mid + ';' + hi2 + ';' + lo + '" dur="' + dur + '"' + FLICK + '/></ellipse>';
  }

  // Far-wall algae gathering into glyphs (scene 6). The SAME phosphorescent
  // row as cove_1/_2 (same marks, stroke, glow and flicker), moved onto the
  // far wall and split into four runs that light up out of step, so the row
  // reads as gathering. Dots, arcs and ripples only: nothing alphabetic.
  function wallGlyphs(s) {
    var g = [
      'M220,139 l0,0.01 M225,140.5 Q228,136.5 231,140.5',
      'M236,137.5 l0,0.01 M236,141 l0,0.01 M241,139 Q242.5,137 244,139 T247,139',
      'M252,138 l0,0.01 M255,140.5 Q258,136.5 261,140.5 M265,137 l0,0.01 M265,139.5 l0,0.01 M265,142 l0,0.01',
      'M270,139 Q271.5,137 273,139 T276,139 M280,139 l0,0.01'
    ];
    var out = '<!-- far wall: algae light gathering into the glyph row -->' +
      '<ellipse cx="112" cy="112" rx="42" ry="9" fill="url(#coveNookLit' + s + ')" opacity="0.45"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="5.2s"' + EASE + '/></ellipse>' +
      '<g transform="translate(-138 -27)">';
    for (var i = 0; i < g.length; i++) {
      var b = (i * 0.6).toFixed(1), d = [3.9, 4.3, 3.6, 4.7][i];
      out += '<path d="' + g[i] + '" fill="none" stroke="#4af5a0" stroke-width="1.3" stroke-linecap="round" filter="url(#coveNookGlow' + s + ')" opacity="0.7">' +
        '<animate attributeName="opacity" values="0.45;0.9;0.55;0.85;0.45" dur="' + d + 's" begin="' + b + 's"' + FLICK + '/></path>';
    }
    out += '</g>';
    // motes drifting in from the crusts toward the glyphs
    var motes = [[40, 132, 'M0,0 Q20,-8 34,-20'], [176, 140, 'M0,0 Q-14,-12 -30,-26'], [96, 150, 'M0,0 Q6,-16 8,-34']];
    for (var j = 0; j < motes.length; j++) {
      var m = motes[j], md = (4.6 + j * 0.7).toFixed(1), mb = (j * 1.1).toFixed(1);
      out += '<circle cx="' + m[0] + '" cy="' + m[1] + '" r="1.2" fill="#4af5a0" filter="url(#coveNookGlow' + s + ')" opacity="0">' +
        '<animateMotion path="' + m[2] + '" dur="' + md + 's" begin="' + mb + 's" repeatCount="indefinite" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>' +
        '<animate attributeName="opacity" values="0;0.8;0" dur="' + md + 's" begin="' + mb + 's"' + EASE + '/></circle>';
    }
    return out;
  }

  // Scene 6: "Others sit locked on the higher ledges." Two more small chests
  // (the same kit chest), shut and unlit, on rock shelves up the back wall.
  // Opaque: they are set back a plane by the kit's mid-depth haze (bcArt.layer
  // for the hand-drawn rock, depth:'mid' for the chest), not by transparency
  // or a veil box.
  function ledgeChests() {
    var spots = [[40, 166, 0.43, 4], [372, 150, 0.37, -3]];
    var out = '<!-- higher ledges with more chests, still locked -->';
    for (var i = 0; i < spots.length; i++) {
      var x = spots[i][0], y = spots[i][1], k = spots[i][2], r = spots[i][3];
      out += '<g transform="translate(' + x + ' ' + y + ')">' +
        '<!-- the buttress the shelf grows out of, running down to the floor -->' +
        bcArt.layer('mid',
          '<path d="M-22,6 L-30,' + (230 - y) + ' L28,' + (230 - y) + ' L20,8 Z" fill="#2a2a3a"/>' +
          '<path d="M-22,6 L-30,' + (230 - y) + '" fill="none" stroke="#3a3a4c" stroke-width="1.6" opacity="0.7"/>' +
          '<path d="M-30,0 L-24,-1.5 L24,-2 L31,0.5 L24,7 L4,11 L-20,8 Z" fill="#33333f"/>' +
          '<path d="M-30,0 L-24,-1.5 L24,-2 L31,0.5" fill="none" stroke="#525266" stroke-width="1" opacity="0.7"/>' +
          '<path d="M-20,8 L4,11 L24,7 L10,16 Z" fill="#22222e"/>', 'cove') +
        '<g transform="translate(0 -1) rotate(' + r + ')">' + coveSmallChest({ x: 0, y: 0, scale: k, depth: 'mid' }) + '</g>' +
        '</g>';
    }
    return out;
  }

  function build(sfx, opts) {
    var s = STORY_SCENES['cove_3'].replace(/(id="|url\(#)([A-Za-z0-9_]+)/g, function (m, a, b) { return a + b + '_' + sfx; });
    var chest = '<g transform="translate(445 224) rotate(-4) scale(1.15)">' + (opts.open ? smallOpen(sfx) : smallClosed(sfx)) + '</g>';
    var overlay = '<!-- SECOND CHEST, wedged in the crack -->' + (opts.ledges ? ledgeChests() : '') + rockBack() + chest + rockFront(sfx) +
      algaeOnChest(sfx, opts.algae, opts.flickDur) + (opts.glyphs ? wallGlyphs(sfx) : '') + '\n';
    s = s.replace('</defs>', defs(sfx) + '</defs>');
    return s.replace('<!-- Golden motes rising out of the chest -->', overlay + '<!-- Golden motes rising out of the chest -->');
  }

  STORY_SCENES['cove_4'] = build('c4', { open: false, algae: 1, flickDur: '2.3s' });
  STORY_SCENES['cove_5'] = build('c5', { open: true, algae: 1.4, flickDur: '3.6s' });
  STORY_SCENES['cove_6'] = build('c6', { open: true, algae: 1.1, flickDur: '4.1s', glyphs: true, ledges: true });
})();
