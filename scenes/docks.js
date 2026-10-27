// Docks story scenes — "Washed Ashore"
// Keys: docks_0 through docks_6

// Scene 0: Ocean at night, wooden dock planks, red boat rocking, stars
STORY_SCENES['docks_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="dockSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050a18"/><stop offset="60%" stop-color="#0a1628"/><stop offset="100%" stop-color="#1a3a5a"/>
  </linearGradient>
  <linearGradient id="docksOceanGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1628"/><stop offset="100%" stop-color="#050a18"/>
  </linearGradient>
  <filter id="starGlow"><feGaussianBlur stdDeviation="1.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#dockSky)"/>
<!-- Stars -->
<circle cx="40" cy="20" r="1" fill="#fff" opacity="0.7" filter="url(#starGlow)"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="120" cy="35" r="0.8" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="1s"/></circle>
<circle cx="200" cy="12" r="1.2" fill="#fff" opacity="0.6" filter="url(#starGlow)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="0.5s"/></circle>
<circle cx="310" cy="28" r="0.8" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="2s"/></circle>
<circle cx="390" cy="8" r="1" fill="#fff" opacity="0.6" filter="url(#starGlow)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="1.5s"/></circle>
<circle cx="460" cy="40" r="0.7" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="75" cy="55" r="0.6" fill="#fff" opacity="0.4"/><circle cx="260" cy="18" r="0.9" fill="#fff" opacity="0.5"/>
<circle cx="440" cy="22" r="0.7" fill="#fff" opacity="0.4"/><circle cx="160" cy="50" r="0.6" fill="#fff" opacity="0.3"/>
<!-- Ocean -->
<rect x="0" y="140" width="500" height="120" fill="url(#docksOceanGrad)"/>
<!-- Waves -->
<path d="M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z" fill="#1a3a5a" opacity="0.4"><animate attributeName="d" values="M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z;M0,158 Q60,152 120,158 Q180,165 240,158 Q300,152 360,158 Q420,165 500,158 L500,168 Q420,175 360,168 Q300,162 240,168 Q180,175 120,168 Q60,162 0,168Z;M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z" fill="#0a1628" opacity="0.3"><animate attributeName="d" values="M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z;M0,178 Q50,173 100,178 Q150,183 200,178 Q250,173 300,178 Q350,183 400,178 Q450,173 500,178 L500,188 L0,188Z;M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- ====================================================================
     THE PIER. It was one 8px rect with a highlight, three posts and two rope
     arcs. A pier reads as a pier because you can see it is BUILT: individual
     boards with gaps between them, posts that go down into the water with
     their own reflections, cross-bracing under the deck, and mooring cleats.

     The waves and the boat above are already good and are untouched.
     ==================================================================== -->

<!-- the piles, driven into the water, drawn BEFORE the deck so it sits on them -->
<path d="M178,118 L188,118 L189,182 L177,182 Z" fill="#5a4008"/>
<path d="M178,118 L182,118 L183,182 L179,182 Z" fill="#8b6914" opacity="0.45"/>
<path d="M298,118 L308,118 L309,186 L297,186 Z" fill="#5a4008"/>
<path d="M298,118 L302,118 L303,186 L299,186 Z" fill="#8b6914" opacity="0.45"/>
<path d="M418,100 L428,100 L429,182 L417,182 Z" fill="#5a4008"/>
<path d="M418,100 L422,100 L423,182 L419,182 Z" fill="#8b6914" opacity="0.45"/>
<!-- cross-bracing between the piles: the detail that says a structure rather
     than three sticks in the sea -->
<path d="M186,140 L300,160" stroke="#5a4008" stroke-width="3" opacity="0.75"/>
<path d="M186,160 L300,140" stroke="#5a4008" stroke-width="3" opacity="0.6"/>
<path d="M306,140 L420,158" stroke="#5a4008" stroke-width="3" opacity="0.7"/>
<path d="M306,158 L420,140" stroke="#5a4008" stroke-width="3" opacity="0.55"/>
<!-- their reflections, broken by the water -->
<path d="M177,182 h12 v10 h-12 Z" fill="#5a4008" opacity="0.25"/>
<path d="M177,196 h12 v6 h-12 Z" fill="#5a4008" opacity="0.16"/>
<path d="M297,186 h12 v9 h-12 Z" fill="#5a4008" opacity="0.22"/>
<path d="M297,199 h12 v5 h-12 Z" fill="#5a4008" opacity="0.14"/>
<path d="M417,182 h12 v10 h-12 Z" fill="#5a4008" opacity="0.24"/>

<!-- THE DECK: individual boards with gaps, and a bull rail along the edge -->
<path d="M148,133 L500,133 L500,143 L148,143 Z" fill="#6b4e0a"/>
<path d="M148,133 L500,133 L500,135.4 L148,135.4 Z" fill="#a07d28" opacity="0.7"/>
<g stroke="#3a2a08" stroke-width="1.1" opacity="0.65">
  <path d="M170,133 v10 M192,133 v10 M214,133 v10 M236,133 v10 M258,133 v10
           M280,133 v10 M302,133 v10 M324,133 v10 M346,133 v10 M368,133 v10
           M390,133 v10 M412,133 v10 M434,133 v10 M456,133 v10 M478,133 v10"/>
</g>
<!-- the bull rail, a raised timber along the seaward edge -->
<path d="M148,143 L500,143 L500,147 L148,147 Z" fill="#5a4008"/>
<path d="M148,143 L500,143 L500,144.4 L148,144.4 Z" fill="#8b6914" opacity="0.5"/>
<!-- the shadow the deck throws on the water beneath it -->
<path d="M148,147 L500,147 L500,156 L148,156 Z" fill="#0a1628" opacity="0.35"/>

<!-- MOORING CLEATS and a coil of rope, spread along the deck.
     Measured, the first pass put two fittings 34 apart and then left a 96 gap:
     a clump at the near end and an empty run out to the lantern. Four fittings
     evenly over the 352-wide deck land at 192, 280, 368 and 456. -->
<path d="M186,127 q6,-4 12,0 l0,4 q-6,3 -12,0 Z" fill="#a07d28"/>
<path d="M188,131 v4 M196,131 v4" stroke="#8b6914" stroke-width="1.6"/>
<!-- a rope coil lying on the boards -->
<g transform="translate(280,128)">
  <path d="M-11,3 q11,-7 22,0 q-11,6 -22,0 Z" fill="#a07d28" opacity="0.8"/>
  <path d="M-8,1 q8,-5 16,0 q-8,4 -16,0 Z" fill="#c49a3a" opacity="0.6"/>
  <path d="M-5,-1 q5,-3 10,0 q-5,2 -10,0 Z" fill="#a07d28" opacity="0.7"/>
</g>
<path d="M362,127 q6,-4 12,0 l0,4 q-6,3 -12,0 Z" fill="#a07d28"/>
<path d="M364,131 v4 M372,131 v4" stroke="#8b6914" stroke-width="1.6"/>
<!-- a crate at the far end, so the deck carries something all the way along -->
${bcArt.prop('crate', { x: 457, y: 132, size: 24, biome: 'docks', depth: 'mid' })}

<!-- ropes slung between the piles, hanging in a real catenary -->
<path d="M183,124 Q243,140 303,124" fill="none" stroke="#a07d28" stroke-width="1.6" opacity="0.7"/>
<path d="M303,124 Q363,140 423,124" fill="none" stroke="#a07d28" stroke-width="1.6" opacity="0.65"/>
<path d="M183,124 Q243,138 303,124" fill="none" stroke="#c49a3a" stroke-width="0.8" opacity="0.35"/>

<!-- A LANTERN on the end pile, because a dock at night has one. The pile runs
     up past the rail to carry it, so the note has timber to be pinned to. -->
<path d="M420,94 L426,94 L426,100 L420,100 Z" fill="#5a4008"/>
<path d="M417,82 L429,82 L431,94 L415,94 Z" fill="#8b6914" opacity="0.9"/>
<path d="M419,84 L427,84 L428,92 L418,92 Z" fill="#ffeaa7" opacity="0.55">
  <animate attributeName="opacity" values="0.4;0.68;0.4" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M416,81 L423,75 L430,81 Z" fill="#5a4008"/>
<circle cx="423" cy="88" r="14" fill="#ffd700" opacity="0.08"/>
<!-- and its light on the water below: broken horizontal glints under the pile,
     narrowing and fading with depth, so it reads as reflection, not a fin -->
<g fill="#ffeaa7">
  <rect x="415" y="186" width="16" height="1.6" rx="0.8" opacity="0.18"/>
  <rect x="417" y="193" width="12" height="1.4" rx="0.7" opacity="0.15"/>
  <rect x="418.5" y="201" width="9" height="1.3" rx="0.6" opacity="0.12"/>
  <rect x="420" y="210" width="6" height="1.2" rx="0.6" opacity="0.09"/>
  <rect x="421" y="220" width="4" height="1" rx="0.5" opacity="0.06"/>
  <animate attributeName="opacity" values="0.8;1;0.8" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</g>

<!-- A drying net hangs from the bull rail, with its weight below the deck. -->
<path d="M223 145 Q247 155 277 145 L270 178 Q245 186 231 173Z" fill="#8b7950" opacity=".12"/>
<path d="M223 145 Q247 155 277 145 L270 178 Q245 186 231 173Z M229 149 L238 178 M239 151 L248 181 M250 151 L258 180 M261 150 L269 177 M226 156 Q247 167 274 155 M229 165 Q249 175 272 165 M233 174 Q250 181 270 174" fill="none" stroke="#a09070" stroke-width=".8" opacity=".55"/>
<path d="M224 143 V148 M275 143 V149" stroke="#a07d28" stroke-width="1.5"/>
<!-- A life ring hangs from a short loop, separate from the walking surface. -->
<path d="M354 144 Q358 139 361 145 L359 153" fill="none" stroke="#a09070" stroke-width="1.2"/>
<circle cx="357" cy="163" r="11" fill="none" stroke="#c8b888" stroke-width="4"/>
<path d="M350 155 L352 158 M362 169 L365 172 M349 170 L352 167 M363 156 L360 159" stroke="#b54a30" stroke-width="4"/>
<path d="M333 190 Q355 187 379 190 M343 197 H365" fill="none" stroke="#a09070" stroke-width="1" opacity=".12"/>
<!-- Red boat -->
<g transform="translate(12,130)">
  <animateTransform attributeName="transform" type="translate" values="0,0;0,3;0,0" additive="sum" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <g transform="scale(2)">
  <!-- Hull body — wide rowboat shape, tapered bow left, flat stern right -->
  <path d="M0,10 Q4,4 10,0 L72,-3 L75,0 L75,14 Q70,22 55,24 L15,24 Q4,22 0,16 Z" fill="#9b2020"/>
  <!-- Hull lighter upper half -->
  <path d="M0,10 Q4,4 10,0 L72,-3 L75,0 L75,8 Q70,6 55,5 L15,5 Q4,6 0,10 Z" fill="#c0392b"/>
  <!-- Plank lines across hull -->
  <path d="M6,8 Q40,6 72,8" fill="none" stroke="#7a1818" stroke-width="0.6" opacity="0.5"/>
  <path d="M3,13 Q40,11 74,13" fill="none" stroke="#7a1818" stroke-width="0.6" opacity="0.5"/>
  <path d="M8,18 Q40,16 70,18" fill="none" stroke="#7a1818" stroke-width="0.6" opacity="0.4"/>
  <!-- Gunwale (top rim) — thick dark rail -->
  <path d="M0,10 Q4,4 10,0 L72,-3 L75,0" fill="none" stroke="#6b1515" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Gunwale highlight -->
  <path d="M2,9 Q5,4 11,1 L71,-2 L74,0" fill="none" stroke="#d44a3a" stroke-width="1" opacity="0.4"/>
  <!-- Stern board (flat back) -->
  <line x1="75" y1="0" x2="75" y2="14" stroke="#6b1515" stroke-width="2"/>
  <!-- Portholes -->
  <circle cx="25" cy="10" r="3.5" fill="#1a3a5a" stroke="#a07d28" stroke-width="1"/>
  <circle cx="25" cy="10" r="2" fill="#2a5a7a" opacity="0.7"/>
  <circle cx="45" cy="9" r="3.5" fill="#1a3a5a" stroke="#a07d28" stroke-width="1"/>
  <circle cx="45" cy="9" r="2" fill="#2a5a7a" opacity="0.7"/>
  <circle cx="63" cy="9" r="3" fill="#1a3a5a" stroke="#a07d28" stroke-width="0.8"/>
  <circle cx="63" cy="9" r="1.8" fill="#2a5a7a" opacity="0.7"/>
  <!-- Mast -->
  <rect x="35" y="-58" width="3" height="60" fill="#6b4e0a"/>
  <rect x="35.5" y="-58" width="1.5" height="60" fill="#8b6914" opacity="0.3"/>
  <!-- Flag -->
  <polygon points="38,-58 60,-50 38,-42" fill="#ffd700" opacity="0.85"/>
  <polygon points="38,-58 60,-50 38,-42" fill="none" stroke="#c8a020" stroke-width="0.5" opacity="0.5"/>
  <!-- Puzzle piece on flag -->
  <path d="M46,-52 L50,-52 Q51,-52 51,-51 L51,-50 Q52.5,-50.5 54,-50 Q55.5,-49.5 54,-49 L54,-47 Q54,-46 53,-46 L49,-46 Q49,-47.5 48,-47.5 Q47,-47.5 47,-46 L44,-46 Q43,-46 43,-47 L43,-51 Q43,-52 44,-52 Z" fill="#c8a020" opacity="0.7"/>
  <!-- Mast cap -->
  <circle cx="36.5" cy="-58" r="2" fill="#a07d28"/>
  <!-- Seat planks -->
  <rect x="18" y="3" width="18" height="1.5" rx="0.5" fill="#a07d28" opacity="0.4"/>
  <rect x="48" y="2.5" width="14" height="1.5" rx="0.5" fill="#a07d28" opacity="0.35"/>
  </g>
</g>
<g transform="translate(-8,4)">
<!-- THE WATERLINE. The hull sits IN the sea: water closes over its lower
     planks, and a wave band runs across it, so it is not pasted on. -->
<path d="M16,166 Q40,162 66,166 Q92,170 118,166 Q144,162 176,166 L173,171 Q162,182 130,183 L50,183 Q28,182 18,171 Z" fill="#081323">
  <animate attributeName="d" values="M16,166 Q40,162 66,166 Q92,170 118,166 Q144,162 176,166 L173,171 Q162,182 130,183 L50,183 Q28,182 18,171 Z;M16,167 Q40,170 66,166 Q92,162 118,167 Q144,170 176,166 L173,171 Q162,182 130,183 L50,183 Q28,182 18,171 Z;M16,166 Q40,162 66,166 Q92,170 118,166 Q144,162 176,166 L173,171 Q162,182 130,183 L50,183 Q28,182 18,171 Z" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M14,165 Q40,161 66,165 Q92,169 118,165 Q144,161 176,165 L176,171 Q144,167 118,171 Q92,175 66,171 Q40,167 14,171 Z" fill="#1a3a5a" opacity="0.7">
  <animate attributeName="d" values="M14,165 Q40,161 66,165 Q92,169 118,165 Q144,161 176,165 L176,171 Q144,167 118,171 Q92,175 66,171 Q40,167 14,171 Z;M14,166 Q40,169 66,165 Q92,161 118,166 Q144,169 176,165 L176,171 Q144,175 118,172 Q92,167 66,171 Q40,175 14,172 Z;M14,165 Q40,161 66,165 Q92,169 118,165 Q144,161 176,165 L176,171 Q144,167 118,171 Q92,175 66,171 Q40,167 14,171 Z" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</g>
<!-- THE MOORING LINE: slack from the stern to the first cleat, riding with the
     boat, with a frayed end trailing past the cleat -->
<path d="M163,133 Q175,160 189,129" fill="none" stroke="#a07d28" stroke-width="2.2" stroke-linecap="round">
  <animate attributeName="d" values="M163,133 Q175,160 189,129;M163,136 Q175,162 189,129;M163,133 Q175,160 189,129" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M192,128 q4,1 6,4 M192,128 q5,0 7,2 M192,128 q3,2 4,5" fill="none" stroke="#a07d28" stroke-width="0.8" stroke-linecap="round" opacity="0.8"/>
<!-- Water reflection shimmer -->
<rect x="100" y="180" width="40" height="1" fill="#1a3a5a" opacity="0.3"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<rect x="250" y="190" width="30" height="1" fill="#1a3a5a" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin="1s"/></rect>
</svg>`;

// Scene 1: Lantern at end of pier with soggy note
// The soggy note, pinned to the lantern pile. One drawing, used wherever the
// post is in shot (docks_1, and the deck in docks_2/3/5). (nx, ny) is the nail.
function docksNote(nx, ny) {
  return '<g transform="translate(' + (nx - 208) + ' ' + (ny - 44.2) + ') scale(.65)"><g transform="translate(-100 -20)">' + `<!-- the shadow the paper drops down the timber, which is what pins it there.
     Kept to the post's width (local x 412-428): the sheet is wider than the
     pile, and a shadow cast on open air read as a black sliver down its edge. -->
<path d="M413,121 Q421,127 428,122 L428,130 Q421,133 413,129 Z" fill="#2a1c04" opacity="0.28"/>
<path d="M418,86 Q428,84 438,87 L442,122 Q430,127 418,125 Q408,126 400,122 L398,90 Q408,86 418,86 Z" fill="#8a8264"/>
<path d="M418,86 Q428,84 438,87 L440,104 Q429,107 417,106 Q407,108 399,105 L398,90 Q408,86 418,86 Z" fill="#9a9273" opacity="0.75"/>
<!-- the light from the lantern above falls across its top half -->
<path d="M418,86 Q428,84 438,87 L439,96 Q428,99 417,98 Q407,100 399,97 L398,90 Q408,86 418,86 Z" fill="#ffeaa7" opacity="0.28"/>
<!-- a torn corner, and the curl where it lifted off the wood -->
<path d="M438,87 L442,122 Q438,124 434,123 Q440,106 436,89 Z" fill="#7a7258" opacity="0.7"/>
<path d="M398,90 Q404,96 400,104 Q396,96 398,90 Z" fill="#6a634c" opacity="0.7"/>
<!-- writing, run and blotted where the water took it -->
<g stroke="#3a352a" stroke-linecap="round" opacity="0.6">
  <path d="M403,95 Q415,93 431,94" stroke-width="1.2"/>
  <path d="M403,101 Q413,99 428,100" stroke-width="1.1"/>
  <path d="M403,107 Q417,106 433,106" stroke-width="1"/>
</g>
<g stroke="#4a4438" stroke-linecap="round" opacity="0.3">
  <path d="M403,113 Q413,115 426,112" stroke-width="1.4"/>
  <path d="M404,118 Q415,120 424,117" stroke-width="1.2"/>
</g>
<path d="M407,115 q7,-4 14,-1 q-6,7 -14,1 Z" fill="#5a5446" opacity="0.3"/>
<!-- the nail holding it -->
<path d="M419,88 q3,-1 5,1 q-2,3 -5,2 Z" fill="#c0392b"/>
<path d="M420,89 q1,-0.5 2,0.4" stroke="#e05a4a" stroke-width="0.7" fill="none" opacity="0.7"/>
` + '</g></g>';
}
STORY_SCENES['docks_1'] = STORY_SCENES['docks_0'].replace(/dockSky|docksOceanGrad|starGlow/g, id => id + 'Note').replace('</svg>', docksNote(423, 105) + '</svg>');

// Scene 2: Dock keeper silhouette with glowing lantern, shack behind
STORY_SCENES['docks_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="dockSky2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050a18"/><stop offset="50%" stop-color="#0a1628"/><stop offset="100%" stop-color="#1a3a5a"/>
  </linearGradient>
  <radialGradient id="keeperLantern" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="30%" stop-color="#ffeaa7" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="docks2Night" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0%" stop-color="#0a1628" stop-opacity="0.34"/><stop offset="62%" stop-color="#0a1628" stop-opacity="0.19"/><stop offset="100%" stop-color="#0a1628" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#dockSky2)"/>
<!-- Stars -->
<circle cx="30" cy="18" r="0.8" fill="#e8eefc" opacity="0.4"/><circle cx="150" cy="10" r="0.6" fill="#e8eefc" opacity="0.3"/>
<circle cx="280" cy="25" r="0.7" fill="#e8eefc" opacity="0.35"/><circle cx="470" cy="15" r="0.8" fill="#e8eefc" opacity="0.4"/>
<circle cx="212" cy="34" r="0.6" fill="#e8eefc" opacity="0.28"/><circle cx="372" cy="8" r="0.7" fill="#e8eefc" opacity="0.3"/>
<!--docks-far-->

<!-- ====================================================================
     THE OCEAN behind the pier. Waves rather than a filled band, so the
     horizon is not a ruled line.
     ==================================================================== -->
<path d="M0,170 L500,170 L500,260 L0,260 Z" fill="#0a1628"/>
<path d="M0,178 Q80,172 160,178 Q240,184 320,178 Q400,172 500,178 L500,188 L0,188Z" fill="#1a3a5a" opacity="0.3">
  <animate attributeName="d" values="M0,178 Q80,172 160,178 Q240,184 320,178 Q400,172 500,178 L500,188 L0,188Z;M0,181 Q80,175 160,181 Q240,187 320,181 Q400,175 500,181 L500,191 L0,191Z;M0,178 Q80,172 160,178 Q240,184 320,178 Q400,172 500,178 L500,188 L0,188Z" dur="6.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M0,198 Q70,193 140,198 Q210,203 280,198 Q350,193 420,199 Q460,202 500,198" fill="none" stroke="#1a3a5a" stroke-width="1.4" opacity="0.34">
  <animate attributeName="d" values="M0,198 Q70,193 140,198 Q210,203 280,198 Q350,193 420,199 Q460,202 500,198;M0,201 Q70,196 140,201 Q210,206 280,201 Q350,196 420,202 Q460,205 500,201;M0,198 Q70,193 140,198 Q210,203 280,198 Q350,193 420,199 Q460,202 500,198" dur="7.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     THE KEEPER'S SHACK. It was a rect, a triangle and two dark squares.
     A shack reads by its ROOFLINE and by the fact it is built of boards:
     a pitched roof with an overhanging eave and a ridge, vertical planking
     with gaps, a door with a frame, and a stove pipe.
     ==================================================================== -->
<!-- Door clearance: 76 scene units for the keeper at approximately 71 units. -->
<g transform="translate(110 164) scale(1.7) translate(-110 -164)">
<!-- the piles it stands on, over the water, drawn before the hut -->
<path d="M70,158 L76,158 L77,190 L69,190 Z" fill="#4a3208"/>
<path d="M134,158 L140,158 L141,192 L133,192 Z" fill="#4a3208"/>
<path d="M70,190 h7 v7 h-7 Z" fill="#4a3208" opacity="0.22"/>
<path d="M133,192 h8 v6 h-8 Z" fill="#4a3208" opacity="0.2"/>
<!-- the body of the hut, leaning a touch, as a hut on piles does -->
<path d="M58,164 L58,100 L152,98 L152,164 Z" fill="#3a2a10"/>
<path d="M58,100 L152,98 L152,112 L58,113 Z" fill="#4a3518" opacity="0.6"/>
<!-- vertical planking with gaps between the boards -->
<g stroke="#241a08" stroke-width="1.1" opacity="0.55">
  <path d="M68,101 v63 M80,101 v63 M92,100 v64 M104,100 v64 M116,99 v65 M128,99 v65 M140,98 v66"/>
</g>
<path d="M58 101L104 74L152 100Z" fill="#4a3518"/><path d="M70 94H139 M82 87H126 M95 80H113" stroke="#72562b" stroke-width="1" opacity=".65"/>
<!-- the roof: pitched, with an overhanging eave and a ridge board -->
<path d="M46,102 L104,68 L164,100 L152,100 L104,74 L58,102 Z" fill="#5a4520"/>
<path d="M46,102 L104,68 L164,100 L158,104 L104,74 L52,106 Z" fill="#4a3518"/>
<path d="M104,68 L164,100 L158,104 L104,74 Z" fill="#6b5228" opacity="0.45"/>
<path d="M100,68 L108,68 L108,74 L100,74 Z" fill="#3a2a10"/>
<!-- the stove pipe, with a cap, and smoke drifting off it -->
<path d="M128,84 L136,80 L137,64 L131,64 Z" fill="#443c34"/>
<path d="M128,62 L140,62 L139,66 L129,66 Z" fill="#544c44"/>
<path d="M134,60 Q142,50 136,40 Q130,30 138,20" fill="none" stroke="#7a8a9a" stroke-width="3" stroke-linecap="round" opacity="0.16">
  <animate attributeName="opacity" values="0.08;0.2;0.08" dur="7.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the door, framed and set into the boards, standing open on the dark -->
<path d="M72,118 L100,117 L100,164 L72,164 Z" fill="#241a08"/>
<path d="M75,120 L97,119.5 L97,164 L75,164 Z" fill="#120c04"/>
<path d="M75,120 L86,119.8 L86,164 L75,164 Z" fill="#ffd700" opacity="0.09"/>
<path d="M70,116 L102,115 L102,119 L70,120 Z" fill="#4a3518"/>
<!-- the window: a lamp is lit inside, so the panes glow and the bars read -->
<path d="M116,116 L142,115 L142,134 L116,135 Z" fill="#241a08"/>
<path d="M118,118 L140,117 L140,132 L118,133 Z" fill="#ffd700" opacity="0.34"/>
<path d="M129,117 v16 M118,125 h22" stroke="#241a08" stroke-width="1.3" opacity="0.85"/>
<path d="M114,113 L144,112 L144,116 L114,117 Z" fill="#4a3518"/>
<path d="M151 120H158 M155 121Q162 127 166 132 M155 121Q171 126 172 139" fill="none" stroke="#8b7650" stroke-width="1.2"/><circle cx="155" cy="120" r="1.5" fill="#aaa080"/>
<!-- gear left where a hand left it: a net over the rail and two floats -->
<path d="M156,126 Q166,140 162,158 Q158,146 152,138 Z" fill="#6b5228" opacity="0.5"/>
<path d="M154,130 Q164,142 160,156 M158,127 Q166,140 163,155" fill="none" stroke="#8b6914" stroke-width="0.8" opacity="0.45"/>
<circle cx="166" cy="132" r="3.4" fill="#8a3a2a" opacity="0.75"/>
<circle cx="172" cy="139" r="2.8" fill="#7a3222" opacity="0.7"/>

</g>

<!-- ====================================================================
     THE DECK. Same construction as docks_0 and docks_1: piles, bracing,
     boards with gaps, a bull rail on the seaward edge.
     ==================================================================== -->
<path d="M198,168 L206,168 L207,206 L197,206 Z" fill="#5a4008"/>
<path d="M198,168 L202,168 L203,206 L199,206 Z" fill="#8b6914" opacity="0.4"/>
<path d="M374,168 L382,168 L383,204 L373,204 Z" fill="#5a4008"/>
<path d="M374,168 L378,168 L379,204 L375,204 Z" fill="#8b6914" opacity="0.4"/>
<path d="M204,180 L376,192" stroke="#5a4008" stroke-width="2.6" opacity="0.55"/>
<path d="M204,192 L376,180" stroke="#5a4008" stroke-width="2.6" opacity="0.45"/>
<path d="M197,206 h10 v8 h-10 Z" fill="#5a4008" opacity="0.22"/>
<path d="M373,204 h10 v8 h-10 Z" fill="#5a4008" opacity="0.2"/>
<!-- THE LANTERN PILE from docks_0/1, at the seaward end of this deck, so the
     note the keeper talks about is in shot. Drawn before the deck boards. -->
<path d="M447,118 L457,118 L458,206 L446,206 Z" fill="#5a4008"/>
<path d="M447,118 L451,118 L452,206 L448,206 Z" fill="#8b6914" opacity="0.45"/>
<path d="M446,206 h12 v9 h-12 Z" fill="#5a4008" opacity="0.22"/>
<path d="M449,112 L455,112 L455,118 L449,118 Z" fill="#5a4008"/>
<path d="M446,100 L458,100 L460,112 L444,112 Z" fill="#8b6914" opacity="0.9"/>
<path d="M448,102 L456,102 L457,110 L447,110 Z" fill="#ffeaa7" opacity="0.55">
  <animate attributeName="opacity" values="0.4;0.68;0.4" dur="5.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M445,99 L452,93 L459,99 Z" fill="#5a4008"/>
<circle cx="452" cy="106" r="14" fill="#ffd700" opacity="0.08"/>
${docksNote(452, 128)}
<path d="M0,160 L500,160 L500,170 L0,170 Z" fill="#6b4e0a"/>
<path d="M0,160 L500,160 L500,162.4 L0,162.4 Z" fill="#a07d28" opacity="0.65"/>
<g stroke="#3a2a08" stroke-width="1.1" opacity="0.6">
  <path d="M18,160 v10 M40,160 v10 M62,160 v10 M84,160 v10 M106,160 v10 M128,160 v10
           M150,160 v10 M172,160 v10 M194,160 v10 M216,160 v10 M238,160 v10 M260,160 v10
           M282,160 v10 M304,160 v10 M326,160 v10 M348,160 v10 M370,160 v10 M392,160 v10
           M414,160 v10 M436,160 v10 M458,160 v10 M480,160 v10"/>
</g>
<path d="M0,170 L500,170 L500,174 L0,174 Z" fill="#5a4008"/>
<path d="M0,170 L500,170 L500,171.4 L0,171.4 Z" fill="#8b6914" opacity="0.45"/>
<path d="M0,174 L500,174 L500,182 L0,182 Z" fill="#0a1628" opacity="0.3"/>
<!-- a cleat and a rope coil, spread along the deck rather than clumped -->
<path d="M330,153 q6,-4 12,0 l0,4 q-6,3 -12,0 Z" fill="#a07d28"/>
<path d="M332,157 v4 M340,157 v4" stroke="#8b6914" stroke-width="1.5"/>
<g transform="translate(422,155)">
  <path d="M-10,3 q10,-6 20,0 q-10,5 -20,0 Z" fill="#a07d28" opacity="0.75"/>
  <path d="M-7,1 q7,-4 14,0 q-7,3 -14,0 Z" fill="#c49a3a" opacity="0.55"/>
</g>
<!-- a crate and a barrel, because a working dock carries something -->
${bcArt.prop('crate', { x: 200, y: 161, size: 26, biome: 'docks', depth: 'mid' })}
${bcArt.prop('barrel', { x: 232, y: 162, scale: 0.68, biome: 'docks', depth: 'mid' })}

<!-- ====================================================================
     THE DOCK KEEPER. He was an ellipse, a circle and two rects: a
     different species from every other person on the island. He is now
     Aufu from the shared cast, kept in near silhouette by the night, with
     his lantern arm drawn over the model the way town_2 does the crier's.
     ==================================================================== -->
${bcMissionPlace('dock-keeper','work',278,166,80)}
<!-- the lantern lights the boards under it, and the water beyond -->
<path d="M278,160 Q308,155 340,160 Q308,168 278,160 Z" fill="#ffd700" opacity="0.1"/>
<g fill="#ffeaa7">
  <rect x="283" y="186" width="18" height="1.6" rx="0.8" opacity="0.17"/>
  <rect x="285.5" y="194" width="13" height="1.4" rx="0.7" opacity="0.14"/>
  <rect x="287.5" y="203" width="9" height="1.3" rx="0.6" opacity="0.11"/>
  <rect x="289" y="213" width="6" height="1.2" rx="0.6" opacity="0.08"/>
  <rect x="290" y="224" width="4" height="1" rx="0.5" opacity="0.05"/>
  <animate attributeName="opacity" values="0.8;1;0.8" dur="5.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</g>
<!--docks-glow-->
</svg>`;

// Scene 3: "See that note on the post? ... He taps the bottom of the soggy
// note." Same deck as scene 2. The keeper has walked down to the lantern pile
// (approved 'explain' pose, mirrored to face it): his near hand reaches out to
// the foot of the note, and the far hand still carries the SAME brass,
// amber-glass lantern he holds in docks_2/5/6 (the cast's 'work' lantern art,
// re-hung from the explain pose's resting hand, drawn before that hand).
var DOCKS3_KEEPER_X = 420, DOCKS3_TAP = '30 224', DOCKS3_TAP_ROT = -70;
var DOCKS_KEEPER_LANTERN ='<path d="M140 193Q134 166 147 166Q159 166 153 193" fill="none" stroke="#C7A658" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M133 195L161 195L158 225H136Z" fill="#B69652"/><path d="M138 199H156V220H138Z" fill="#F2C14E"/><path d="M146 199V220" fill="none" stroke="#8C723D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
STORY_SCENES['docks_3'] = STORY_SCENES['docks_2']
  .replace(/dockSky2|keeperLantern|docks2Night/g, id => id + 'Post')
  // the lantern's light on the boards and water follows him to the pile: the
  // pool sits under the lantern (x~412, measured at 3x) and is drawn BEFORE him, so it lights
  // the boards and never veils his legs; the reflection centres under it too
  .replace('<path d="M278,160 Q308,155 340,160 Q308,168 278,160 Z" fill="#ffd700" opacity="0.1"/>', '')
  // the rope coil he would be standing on moves aside, along the boards
  .replace('<g transform="translate(422,155)">', '<g transform="translate(366,155)">')
  .replace('<g fill="#ffeaa7">\n  <rect x="283"','<g fill="#ffeaa7" transform="translate(121 0)">\n  <rect x="283"')
  .replace(bcMissionPlace('dock-keeper','work',278,166,80),
    // flattened onto the boards (top at y~161, not 155) so no gold sits behind his shins
    '<path d="M390,164 Q412,161 434,164 Q412,169 390,164 Z" fill="#ffd700" opacity="0.1"/>\n' +
    bcMissionPlace('dock-keeper','explain',DOCKS3_KEEPER_X,166,80,true)
      // near arm: out and down to the foot of the note, fingertips on the paper
      .replace('M68 156Q49 173 40 201', 'M68 156Q42 196 ' + DOCKS3_TAP)
      .replace('translate(40 201) scale(-1 1)', 'translate(' + DOCKS3_TAP + ') rotate(' + DOCKS3_TAP_ROT + ') scale(-1 1)')
      // far hand: the lantern hangs from it, as in docks_2
      .replace('<g data-hand="right"', '<g transform="translate(-20 23)">' + DOCKS_KEEPER_LANTERN + '</g><g data-hand="right"'));

// Scene 4: Close-up of soggy note with reversed text, lantern light
STORY_SCENES['docks_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="noteBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1628"/><stop offset="100%" stop-color="#050a18"/>
  </linearGradient>
  <radialGradient id="noteGlow" cx="50%" cy="34%" r="58%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.34"/><stop offset="60%" stop-color="#ffd700" stop-opacity="0.09"/><stop offset="100%" stop-color="#050a18" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="docks4Paper" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0%" stop-color="#d6ca9e"/><stop offset="52%" stop-color="#c9bd94"/><stop offset="100%" stop-color="#ab9f78"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#noteBg)"/>

<!-- ====================================================================
     THE BOARDS the note is lying on. The close-up had the paper floating in
     an empty gradient, so nothing said where the player was standing. Now it
     lies on the pier deck: boards with gaps running away under it, wet in
     places, so the paper has a surface and a scale.
     ==================================================================== -->
<path d="M0,44 L500,30 L500,260 L0,260 Z" fill="#33230a"/>
<path d="M0,44 L500,30 L500,44 L0,58 Z" fill="#54400e" opacity="0.5"/>
<g stroke="#1e1404" stroke-width="2" opacity="0.65">
  <path d="M-14,260 L44,36 M62,260 L100,34 M150,260 L164,32 M244,260 L232,31
           M340,260 L300,30 M440,260 L370,29 M540,260 L440,28"/>
</g>
<g stroke="#7a5c12" stroke-width="0.9" opacity="0.12">
  <path d="M-8,260 L48,36 M68,260 L104,34 M156,260 L168,32 M250,260 L236,31
           M346,260 L304,30 M446,260 L374,29"/>
</g>
<!-- grain, and damp patches where the sea has been over the deck -->
<path d="M40,120 Q120,112 190,124 Q120,132 40,120 Z" fill="#1a1204" opacity="0.4"/>
<path d="M330,180 Q420,168 490,182 Q420,196 330,180 Z" fill="#1a1204" opacity="0.34"/>
<path d="M18,214 Q90,206 156,218 Q90,230 18,214 Z" fill="#1a1204" opacity="0.3"/>
<!-- distance and the dark eat the far end of the deck -->
<path d="M0,44 L500,30 L500,96 L0,110 Z" fill="#050a18" opacity="0.5"/>
<path d="M0,44 L500,30 L500,62 L0,76 Z" fill="#050a18" opacity="0.4"/>
<!-- Warm light wash from the lantern above -->
<rect width="500" height="260" fill="url(#noteGlow)"/>

<!-- ====================================================================
     THE NOTE. It was a rounded rect with three grey ellipses on it. Paper
     that has been in the sea does four things: it COCKLES, so its edges are
     wavy rather than straight; it TEARS, most of all where it was pinned;
     it CURLS at the corners as it dries; and the ink RUNS downhill.
     ==================================================================== -->
<!-- the shadow it drops on the boards, offset from the light above -->
<path d="M108,44 Q250,36 400,46 L410,240 Q250,250 100,238 Z" fill="#050a18" opacity="0.45"/>
<!-- the sheet, cockled along every edge -->
<path d="M100,36 Q140,29 176,34 Q216,28 252,33 Q292,27 328,33 Q366,28 400,36
         Q406,80 402,124 Q407,168 400,228
         Q360,236 322,230 Q282,238 246,231 Q206,239 168,232 Q132,238 98,230
         Q92,168 97,124 Q91,80 100,36 Z" fill="url(#docks4Paper)"/>
<!-- the sheet's lit upper half, where the lantern falls on it -->
<path d="M100,36 Q140,29 176,34 Q216,28 252,33 Q292,27 328,33 Q366,28 400,36
         Q404,74 402,110 Q250,122 98,110 Q94,74 100,36 Z" fill="#e0d4a8" opacity="0.42"/>
<!-- WATER DAMAGE. Stains have a hard tide line at their edge and are pale
     inside, which is what distinguishes them from a soft grey blob. -->
<path d="M118,192 Q142,166 186,172 Q222,178 226,204 Q214,228 172,230 Q128,226 118,192 Z" fill="#a09060" opacity="0.3"/>
<path d="M124,192 Q146,172 184,177 Q214,183 218,203 Q206,222 172,224 Q132,220 124,192 Z" fill="#bdae7c" opacity="0.28"/>
<path d="M312,42 Q346,34 380,44 Q392,62 378,76 Q344,84 318,72 Q304,56 312,42 Z" fill="#a09060" opacity="0.26"/>
<path d="M318,48 Q348,41 376,49 Q384,62 374,71 Q346,77 322,68 Q312,57 318,48 Z" fill="#bdae7c" opacity="0.24"/>
<path d="M252,196 Q278,182 300,192 Q310,210 296,222 Q268,228 254,214 Q246,204 252,196 Z" fill="#a09060" opacity="0.22"/>
<!-- the fold that ran down the middle when it was folded into a pocket -->
<path d="M250,34 Q246,120 251,231" fill="none" stroke="#9d906a" stroke-width="1.3" opacity="0.4"/>
<path d="M252,34 Q248,120 253,231" fill="none" stroke="#ece0b4" stroke-width="1" opacity="0.28"/>

<!-- THE BACK OF THE NOTE. The keeper has turned it over (story step 4), so the
     front's welcome shows through the wet paper mirrored and faint, and the clue
     sits alone in a steadier hand. Clue text is approved: do not reword it. -->
<g transform="translate(500 0) scale(-1 1)" font-family="Georgia,serif" font-weight="700" fill="#3a2a10" text-anchor="middle" opacity="0.1">
  <text x="250" y="75" font-size="12">WELcome TO</text>
  <text x="250" y="95" font-size="12">BIT CRYPTIC WORLD.</text>
  <text x="250" y="118" font-size="11" font-weight="400">NOTHinG IS AS IT SEEMS.</text>
  <text x="250" y="168" font-size="14">!EMOH EMOCLEW .S.P</text>
</g>
<g font-family="Georgia,serif" font-style="italic" font-size="17" fill="#2a1c08" text-anchor="middle">
  <text x="250" y="132" opacity="0.88">Embracing towel comes</text>
  <text x="250" y="156" opacity="0.88">with warm greeting (7)</text>
</g>
<!-- the pen's last stroke, a short rule under the line -->
<path d="M206,170 Q250,166 294,169" fill="none" stroke="#2a1c08" stroke-width="1.1" stroke-linecap="round" opacity="0.35"/>

<!-- ====================================================================
     THE TORN CORNER and the curl. The bottom edge was a zigzag polyline
     drawn in the paper colour ON TOP of the paper, so it did nothing.
     ==================================================================== -->
<!-- a piece torn away at the top right, showing the boards through the gap -->
<path d="M368,33 Q384,30 400,36 Q402,52 398,64 Q382,54 372,44 Q366,38 368,33 Z" fill="#2a1c07" opacity="0.9"/>
<path d="M368,33 Q384,30 400,36 Q392,40 380,38 Q372,36 368,33 Z" fill="#1e1404" opacity="0.55"/>
<path d="M366,32 Q378,44 400,64" fill="none" stroke="#b0a37c" stroke-width="1.4" opacity="0.7"/>
<!-- the bottom right corner curled up as it dried, showing its back -->
<path d="M400,228 Q384,236 360,232 Q378,220 388,204 Q400,214 400,228 Z" fill="#b5a97f"/>
<path d="M400,228 Q386,234 366,231 Q382,222 390,210 Q398,218 400,228 Z" fill="#c9bd94" opacity="0.6"/>
<path d="M388,204 Q378,222 360,232" fill="none" stroke="#8f8460" stroke-width="1.1" opacity="0.6"/>
<!-- the bottom left corner, lifted a little less -->
<path d="M98,230 Q114,236 132,232 Q118,222 110,212 Q100,220 98,230 Z" fill="#b5a97f" opacity="0.85"/>
<!-- the nail hole where it was pinned, torn through -->
<path d="M244,40 q6,-4 12,-1 q-3,6 -6,7 q-6,-2 -6,-6 Z" fill="#2a1c07" opacity="0.7"/>
<path d="M250,39 L248,47" stroke="#2a1c07" stroke-width="1.2" opacity="0.55"/>
<!-- the pin still in it -->
<path d="M243,36 q7,-5 14,-1 q-3,7 -7,8 q-7,-2 -7,-7 Z" fill="#c0392b"/>
<path d="M245,37 q4,-2 8,-0.6" stroke="#e05a4a" stroke-width="1" fill="none" opacity="0.6"/>
<!-- the lantern flicker running along the paper's lit edge -->
<path d="M100,36 Q140,29 176,34 Q216,28 252,33 Q292,27 328,33 Q366,28 400,36" fill="none" stroke="#ffd700" stroke-width="1.4" opacity="0.16">
  <animate attributeName="opacity" values="0.08;0.24;0.08" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`;

// Scene 5: "He nods toward the dark treeline" and "the lantern burns a little
// brighter". Scene 2's deck with the island's pines low on the right horizon,
// dim against the sky, and a wider, breathing glow round the keeper's lantern.
function docksTreeline(x0, x1, base) {
  // stepped conifer silhouettes, heights varied so the band is not a comb
  var s = '', hs = [44, 34, 52, 38, 58, 36, 48, 41, 55, 32, 46], x = x0, i = 0;
  while (x < x1) {
    var h = hs[i % hs.length], w = h * 0.46, t = base - h;
    s += 'M' + (x - w / 2) + ',' + base + ' L' + (x - w * 0.36) + ',' + (t + h * 0.66) + ' L' + (x - w * 0.22) + ',' + (t + h * 0.68) +
      ' L' + (x - w * 0.26) + ',' + (t + h * 0.36) + ' L' + (x - w * 0.1) + ',' + (t + h * 0.38) + ' L' + x + ',' + t +
      ' L' + (x + w * 0.1) + ',' + (t + h * 0.38) + ' L' + (x + w * 0.26) + ',' + (t + h * 0.36) + ' L' + (x + w * 0.22) + ',' + (t + h * 0.68) +
      ' L' + (x + w * 0.36) + ',' + (t + h * 0.66) + ' L' + (x + w / 2) + ',' + base + ' Z ';
    x += w * 0.72; i++;
  }
  return s;
}
STORY_SCENES['docks_5'] = STORY_SCENES['docks_2']
  .replace(/dockSky2|keeperLantern|docks2Night/g, id => id + 'Trees')
  .replace('<!--docks-far-->', '<!-- the dark treeline the keeper nods toward, low on the right horizon -->' +
    '<path d="M300,163 Q340,152 380,150 L500,146 L500,163 Z" fill="#0b1826" opacity="0.9"/>' +
    '<path d="' + docksTreeline(326, 510, 162) + '" fill="#0b1826" opacity="0.92"/>' +
    '<path d="' + docksTreeline(345, 510, 163) + '" fill="#08121e" opacity="0.85"/>')
  .replace('<!--docks-glow-->', '<!-- the lantern burns a little brighter -->' +
    '<circle cx="290" cy="139" r="26" fill="url(#keeperLanternTrees)" opacity="0.55">' +
    '<animate attributeName="opacity" values="0.45;0.7;0.45" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>');

// Scene 6: Forest treeline with glowing path, the keeper on his dock
STORY_SCENES['docks_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="dockSky6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050a18"/><stop offset="50%" stop-color="#0a1628"/><stop offset="100%" stop-color="#0d1a2a"/>
  </linearGradient>
  <radialGradient id="pathGlow" cx="50%" cy="80%" r="40%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.5"/><stop offset="50%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="docks6Lamp" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="docks6Night" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#050a18" stop-opacity="0.74"/><stop offset="62%" stop-color="#050a18" stop-opacity="0.68"/><stop offset="100%" stop-color="#050a18" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#dockSky6)"/>
<!-- Stars -->
<circle cx="50" cy="15" r="0.8" fill="#e8eefc" opacity="0.5"/><circle cx="140" cy="30" r="0.6" fill="#e8eefc" opacity="0.35"/>
<circle cx="350" cy="12" r="0.9" fill="#e8eefc" opacity="0.45"/><circle cx="460" cy="35" r="0.7" fill="#e8eefc" opacity="0.4"/>
<circle cx="228" cy="20" r="0.6" fill="#e8eefc" opacity="0.3"/><circle cx="400" cy="26" r="0.6" fill="#e8eefc" opacity="0.28"/>

<!-- Ground -->
<path d="M0,118 L500,118 L500,260 L0,260 Z" fill="#0a1a0e"/>

<!-- ====================================================================
     THE TREELINE. It was twelve isosceles triangles in three near-identical
     greens: the clearest diagram tell in the whole location. A conifer
     silhouette is a run of shallow SCALLOPS that widen as they descend,
     because the boughs step out and then droop. Same construction as
     forest_0, in this scene's night values.

     Three ranks, and distance eats contrast before it eats detail: the far
     rank sits a shade off the sky, the near rank is nearly black.
     ==================================================================== -->

<!-- far rank: kit pines, veiled into the night by depth -->
${[[31,116,74],[93,116,86],[168,116,70],[236,118,64],[315,116,82],[397,115,72],[460,116,80]].map(([x,y,h]) => bcArt.prop('pine', { x, y, h, tiers: 3, biome: 'forest', depth: 'far', shadow: false })).join('')}
<!-- the wash that pushes the far rank back into the sky -->
<path d="M0,0 L500,0 L500,124 L0,124 Z" fill="#0a1628" opacity="0.45"/>

<!-- mid rank: kit pines, each swaying on an eased loop about its own base -->
${[[70,176,124,8.4,0.9,0.7],[148,178,138,6.8,0,0.8],[352,177,132,7.4,0.4,0.9],[438,176,118,7.9,1.4,0.7]].map(([x,y,h,d,bg,a]) =>
  '<g><animateTransform attributeName="transform" type="rotate" values="' + (-a) + ' ' + x + ' ' + y + ';' + a + ' ' + x + ' ' + y + ';' + (-a) + ' ' + x + ' ' + y + '" dur="' + d + 's" begin="' + bg + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>' +
  bcArt.prop('pine', { x, y, h, biome: 'forest', depth: 'bg' }) + '</g>').join('')}
<!-- night veil: at night distance darkens, so the back ranks sink toward the sky -->
<path d="M0,0 L500,0 L500,206 L0,206 Z" fill="#050a18" opacity="0.42"/>

<!-- ====================================================================
     THE FOREST FLOOR. Not a straight edge: an uneven crest with roots and
     hummocks breaking it, then a darker near band.
     ==================================================================== -->
<path d="M0,204 Q56,196 112,202 Q162,207 210,199 Q252,192 292,199 Q346,207 396,200 Q450,193 500,201 L500,260 L0,260 Z" fill="#09150b"/>
<path d="M0,224 Q72,216 146,222 Q218,227 288,220 Q358,214 428,221 Q466,225 500,220 L500,260 L0,260 Z" fill="#060f08"/>
<path d="M56,206 Q86,212 108,206 Q132,200 158,207" fill="none" stroke="#141b0e" stroke-width="2.4" stroke-linecap="round" opacity="0.7"/>
<path d="M330,202 Q358,208 384,201 Q408,196 432,203" fill="none" stroke="#141b0e" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

<!-- ====================================================================
     THE GLOWING PATH. It was three fat strokes of uniform width, laid down
     BEFORE the ground, so the forest floor painted over its near half and
     what survived read as a lit stick. It is now a worn ribbon that WIDENS
     as it comes forward, drawn after the floor it is worn into, running out
     of the frame at the player's feet.
     ==================================================================== -->
<!-- near rank: the two that frame the path mouth, standing on the crest -->
${[[196,206,182,9.2,0.2,0.6],[304,205,188,8.1,1.7,0.6]].map(([x,y,h,d,bg,a]) =>
  '<g><animateTransform attributeName="transform" type="rotate" values="' + (-a) + ' ' + x + ' ' + y + ';' + a + ' ' + x + ' ' + y + ';' + (-a) + ' ' + x + ' ' + y + '" dur="' + d + 's" begin="' + bg + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>' +
  bcArt.prop('pine', { x, y, h, tiers: 5, biome: 'forest', depth: 'mid' }) + '</g>').join('')}
<path d="M0,0 L500,0 L500,212 L0,212 Z" fill="#050a18" opacity="0.3"/>
<path d="M196 260C212 249 224 241 226 232C228 222 246 212 254.5 202.5L257.5 202.5C255 211 252 221 262 232C272 244 298 251 322 260Z" fill="#5e5330"/>
<path d="M196 260C212 249 224 241 226 232C228 222 246 212 254.5 202.5L257.5 202.5C255 211 252 221 262 232C272 244 298 251 322 260Z" fill="url(#pathGlow)" opacity="0.45"/>
<path d="M204 260C218 250 228 242 230 233C232 224 247 213 255.5 204" fill="none" stroke="#c1ac65" stroke-width="1.2" opacity=".35"/>
<path d="M250 250L264 246L274 251L264 255Z M238 232L246 229L252 233L244 235Z M251 215L255 213L257 216Z" fill="#a5945c" opacity=".5"/>
<!-- the far end runs over a low rise, so it ends in the ground, not a point -->
<ellipse cx="256" cy="203.5" rx="9" ry="2.6" fill="#09150b"/>
<!-- soft amber where the path crests into the trees -->
<ellipse cx="256" cy="205" rx="24" ry="8" fill="url(#pathGlow)" opacity="0.8">
  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="5.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- undergrowth at the path mouth -->
${bcArt.prop('fern', { x: 352, y: 250, size: 30, biome: 'forest', depth: 'fg' })}
${bcArt.prop('mushroom-glow', { x: 318, y: 246, count: 3, size: 1.1, biome: 'forest', depth: 'fg', idp: 'docks6-mush' })}

<!-- THE TRAIL IN FROM THE DOCKS. The left foreground used to be a dock deck
     over harbour water, which left the shore and the forest edge in one shot
     with nothing joining them. It is forest floor now: a worn, unlit footpath
     comes in from the left frame edge (the way back to the docks), passes
     under the keeper's feet and joins the glowing path where it widens.
     Same dirt as the path, a step darker because the glow does not reach it. -->
<path d="M-2,233 C42,230 96,234 140,236 C176,237.6 206,236 225.5,232.5 L226,236 C222,242 216,247 210,250.5 C176,252 136,256 92,257 C56,258 22,257 -2,256 Z" fill="#3a3320"/>
<path d="M-2,233 C42,230 96,234 140,236 C176,237.6 206,236 225.5,232.5" fill="none" stroke="#4d4429" stroke-width="1" opacity="0.7"/>
<path d="M210,250.5 C176,252 136,256 92,257 C56,258 22,257 -2,256" fill="none" stroke="#141b0e" stroke-width="1.4" opacity="0.6"/>
<!-- the glow bleeding a little way down the trail from the main path -->
<path d="M150,236.5 C180,238 206,236 225.5,232.5 L226,236 C222,242 216,247 210,250.5 C190,251.4 168,253 150,254 Z" fill="url(#pathGlow)" opacity="0.3"/>
<!-- stones and wheel-worn ruts in the dirt -->
<path d="M30,244 L37,242 L42,245 L35,247Z M128,247 L134,245.5 L138,248 L132,249.5Z M176,243 L181,241.8 L184,244 L179,245Z" fill="#544a2e" opacity=".55"/>
<path d="M4,240 C50,238 110,242 168,243 M2,251 C48,251 104,251 150,249" fill="none" stroke="#2c2718" stroke-width="0.9" opacity="0.55"/>
<!-- the trail's verge: hummocks and a root along the near edge, a tuft at the far edge -->
<path d="M-2,256 Q20,250 44,255 Q70,250 96,256.5 L96,260 L-2,260 Z" fill="#09150b"/>
<path d="M118,232.5 Q128,226 138,233 M146,234 Q152,228 158,234.5" fill="none" stroke="#1a2a14" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>
<path d="M14,232 q3,-7 5,0 q2,-6 4,0.5 q3,-5 4,0" fill="none" stroke="#1d3018" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>
${bcArt.prop('fern', { x: 30, y: 261, size: 22, biome: 'forest', depth: 'fg' })}
<!-- ====================================================================
     THE DOCK KEEPER, gesturing toward the path. He was a circle, an
     ellipse, two rects and a line; he is the same person the player just
     spoke to in docks_2, so he is the same model. He stands with his
     lantern low, at the edge of the light, pointing the way in.
     ==================================================================== -->
${bcMissionPlace('dock-keeper','work',86,250,132)}
</svg>`;
