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
<circle cx="40" cy="20" r="1" fill="#fff" opacity="0.7" filter="url(#starGlow)"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="120" cy="35" r="0.8" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="200" cy="12" r="1.2" fill="#fff" opacity="0.6" filter="url(#starGlow)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="310" cy="28" r="0.8" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="4.2s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="390" cy="8" r="1" fill="#fff" opacity="0.6" filter="url(#starGlow)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.8s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="460" cy="40" r="0.7" fill="#fff" opacity="0.5" filter="url(#starGlow)"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="75" cy="55" r="0.6" fill="#fff" opacity="0.4"/><circle cx="260" cy="18" r="0.9" fill="#fff" opacity="0.5"/>
<circle cx="440" cy="22" r="0.7" fill="#fff" opacity="0.4"/><circle cx="160" cy="50" r="0.6" fill="#fff" opacity="0.3"/>
<!-- Ocean -->
<rect x="0" y="140" width="500" height="120" fill="url(#docksOceanGrad)"/>
<!-- Waves -->
<path d="M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z" fill="#1a3a5a" opacity="0.4"><animate attributeName="d" values="M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z;M0,158 Q60,152 120,158 Q180,165 240,158 Q300,152 360,158 Q420,165 500,158 L500,168 Q420,175 360,168 Q300,162 240,168 Q180,175 120,168 Q60,162 0,168Z;M0,155 Q60,148 120,155 Q180,162 240,155 Q300,148 360,155 Q420,162 500,155 L500,165 Q420,172 360,165 Q300,158 240,165 Q180,172 120,165 Q60,158 0,165Z" dur="4s" repeatCount="indefinite"/></path>
<path d="M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z" fill="#0a1628" opacity="0.3"><animate attributeName="d" values="M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z;M0,178 Q50,173 100,178 Q150,183 200,178 Q250,173 300,178 Q350,183 400,178 Q450,173 500,178 L500,188 L0,188Z;M0,175 Q50,170 100,175 Q150,180 200,175 Q250,170 300,175 Q350,180 400,175 Q450,170 500,175 L500,185 L0,185Z" dur="5s" repeatCount="indefinite"/></path>
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
<path d="M418,118 L428,118 L429,182 L417,182 Z" fill="#5a4008"/>
<path d="M418,118 L422,118 L423,182 L419,182 Z" fill="#8b6914" opacity="0.45"/>
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
<path d="M444,112 L470,112 L470,132 L444,132 Z" fill="#7a5a10"/>
<path d="M444,112 L470,112 L470,115 L444,115 Z" fill="#a07d28" opacity="0.7"/>
<path d="M444,120 h26 M456,112 v20" stroke="#5a4008" stroke-width="1.4" opacity="0.7"/>

<!-- ropes slung between the piles, hanging in a real catenary -->
<path d="M183,124 Q243,140 303,124" fill="none" stroke="#a07d28" stroke-width="1.6" opacity="0.7"/>
<path d="M303,124 Q363,140 423,124" fill="none" stroke="#a07d28" stroke-width="1.6" opacity="0.65"/>
<path d="M183,124 Q243,138 303,124" fill="none" stroke="#c49a3a" stroke-width="0.8" opacity="0.35"/>

<!-- A LANTERN on the end pile, because a dock at night has one -->
<path d="M420,112 L426,112 L426,118 L420,118 Z" fill="#5a4008"/>
<path d="M417,100 L429,100 L431,112 L415,112 Z" fill="#8b6914" opacity="0.9"/>
<path d="M419,102 L427,102 L428,110 L418,110 Z" fill="#ffeaa7" opacity="0.55">
  <animate attributeName="opacity" values="0.4;0.68;0.4" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M416,99 L423,93 L430,99 Z" fill="#5a4008"/>
<circle cx="423" cy="106" r="14" fill="#ffd700" opacity="0.08"/>
<!-- and its light on the water below -->
<path d="M414,182 q9,26 0,52 q-9,-26 0,-52 Z" fill="#ffd700" opacity="0.07"/>

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
<g transform="translate(30,130)">
  <animateTransform attributeName="transform" type="translate" values="30,130;30,133;30,130" dur="3s" repeatCount="indefinite"/>
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
<!-- Water reflection shimmer -->
<rect x="100" y="180" width="40" height="1" fill="#1a3a5a" opacity="0.3"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite"/></rect>
<rect x="250" y="190" width="30" height="1" fill="#1a3a5a" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" begin="1s"/></rect>
</svg>`;

// Scene 1: Lantern at end of pier with soggy note
STORY_SCENES['docks_1'] = STORY_SCENES['docks_0'].replace(/dockSky|docksOceanGrad|starGlow/g, id => id + 'Note').replace('</svg>', `<g transform="translate(199 93) scale(.65)"><g transform="translate(-100 -20)"><!-- the shadow the paper drops down the timber, which is what pins it there -->
<path d="M436,88 Q442,90 444,96 L446,122 Q440,126 434,124 Z" fill="#2a1c04" opacity="0.45"/>
<path d="M418,86 Q428,84 438,87 L442,122 Q430,127 418,125 Q408,126 400,122 L398,90 Q408,86 418,86 Z" fill="#8a8264"/>
<path d="M418,86 Q428,84 438,87 L440,104 Q429,107 417,106 Q407,108 399,105 L398,90 Q408,86 418,86 Z" fill="#9a9273" opacity="0.75"/>
<!-- the light from the lantern above falls across its top half -->
<path d="M418,86 Q428,84 438,87 L439,96 Q428,99 417,98 Q407,100 399,97 L398,90 Q408,86 418,86 Z" fill="#ffeaa7" opacity="0.28"/>
<!-- a torn corner, and the curl where it lifted off the wood -->
<path d="M438,87 L442,122 Q438,124 434,123 Q440,106 436,89 Z" fill="#6a634c" opacity="0.8"/>
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
</g></g></svg>`);

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
<path d="M186,136 L214,136 L214,160 L186,160 Z" fill="#5a4008"/>
<path d="M186,136 L214,136 L214,139 L186,139 Z" fill="#8b6914" opacity="0.55"/>
<path d="M186,146 h28 M200,136 v24" stroke="#3a2a08" stroke-width="1.3" opacity="0.65"/>
<path d="M222,142 q4,-4 10,-4 q6,0 10,4 q2,9 0,18 q-4,3 -10,3 q-6,0 -10,-3 q-2,-9 0,-18 Z" fill="#4a3208"/>
<path d="M222,148 q10,3 20,0 M222,155 q10,3 20,0" fill="none" stroke="#8b6914" stroke-width="1.2" opacity="0.5"/>

<!-- ====================================================================
     THE DOCK KEEPER. He was an ellipse, a circle and two rects: a
     different species from every other person on the island. He is now
     Aufu from the shared cast, kept in near silhouette by the night, with
     his lantern arm drawn over the model the way town_2 does the crier's.
     ==================================================================== -->
${bcPlace('aufu', 15, 258, 166, { armPose: { right: { ex: 1.5, ey: -0.35, wx: 2.15, wy: -1.5 } } })}
<!-- the deck under him takes his shadow -->
<path d="M236,161 q22,-4 44,0 q-22,5 -44,0 Z" fill="#050a18" opacity="0.4"/>
<!-- NIGHT. He is lit by one small flame and nothing else, so a soft veil of
     the sky colour goes over him. A hard-edged rect leaves a seam down his
     middle; a gradient does not. -->
<ellipse cx="268" cy="104" rx="62" ry="88" fill="url(#docks2Night)"/>
<!-- THE LANTERN, HELD BY HAND. His right arm is POSED by the model, not
     drawn here, so it is the same arm as his other one. The model puts that
     hand at (286.7, 62.8): the bail hangs from there and the lantern hangs
     off the bail, with no rod between hand and prop. -->
<path d="M283,64 Q283,60 286.7,60 Q290.4,60 290.4,64" fill="none" stroke="#8b6914" stroke-width="1.6"/>
<!-- the fingers closing over the bail, on top of the model's palm -->
<path d="M283.3,61.5 q3.4,-1.6 6.8,0 M283.3,64.5 q3.4,-1.6 6.8,0" fill="none" stroke="#1f160e" stroke-width="0.7" opacity="0.5"/>
<!-- the cage below it: peaked cap, panes, ring -->
<path d="M279.7,66 L293.7,66 L296.7,72 L276.7,72 Z" fill="#8b6914"/>
<path d="M279.7,66 L286.7,60 L293.7,66 Z" fill="#a07d28"/>
<path d="M277.7,72 L295.7,72 L293.7,90 L279.7,90 Z" fill="#a07d28"/>
<path d="M279.7,74 L293.7,74 L291.7,88 L281.7,88 Z" fill="#ffd700" opacity="0.88">
  <animate attributeName="opacity" values="0.66;0.95;0.74;0.9;0.66" dur="3.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M286.7,74 v14 M279.7,81 h14" stroke="#8b6914" stroke-width="0.9" opacity="0.75"/>
<path d="M276.7,90 L296.7,90 L294.7,94 L278.7,94 Z" fill="#8b6914"/>
<circle cx="286.7" cy="81" r="46" fill="url(#keeperLantern)" opacity="0.42">
  <animate attributeName="opacity" values="0.3;0.5;0.36;0.47;0.3" dur="3.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- the lantern lights the boards under it, and the water beyond -->
<path d="M278,160 Q308,155 340,160 Q308,168 278,160 Z" fill="#ffd700" opacity="0.1"/>
<path d="M296,182 q10,24 4,48 q-3,10 3,18 q-13,-6 -10,-19 q4,-24 -6,-47 Z" fill="#ffd700" opacity="0.07"/>
</svg>`;

// Scene 3: Same setting — dock keeper explains note (reuse scene 2)
STORY_SCENES['docks_3'] = STORY_SCENES['docks_2'];

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

<!-- the text. FROZEN: not one character of it changes. -->
<text x="250" y="75" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="12" fill="#3a2a10" opacity="0.7" font-weight="700">WELcome TO</text>
<text x="250" y="95" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="12" fill="#3a2a10" opacity="0.65" font-weight="700">BIT CRYPTIC WORLD.</text>
<text x="250" y="118" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11" fill="#3a2a10" opacity="0.55">NOTHinG IS AS IT SEEMS.</text>
<!-- Reversed postscript, glowing -->
<text x="250" y="168" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#ffd700" opacity="0.9">!EMOH EMOCLEW .S.P</text>
<text x="250" y="168" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#ffeaa7" opacity="0.4"><animate attributeName="opacity" values="0.18;0.58;0.18" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>!EMOH EMOCLEW .S.P</text>
<!-- where the ink has run downhill out of the lines above -->
<g stroke="#3a2a10" stroke-linecap="round" opacity="0.16">
  <path d="M198,80 q-2,9 1,17" stroke-width="1.4"/>
  <path d="M286,100 q3,10 0,18" stroke-width="1.2"/>
  <path d="M226,122 q-2,8 1,14" stroke-width="1"/>
</g>
<g stroke="#ffd700" stroke-linecap="round" opacity="0.2">
  <path d="M212,172 q-2,10 1,16" stroke-width="1.2"/>
  <path d="M298,172 q3,9 0,15" stroke-width="1"/>
</g>

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

// Scene 5: Same dock setting as keeper speaks (reuse scene 2)
STORY_SCENES['docks_5'] = STORY_SCENES['docks_2'];

// Scene 6: Forest treeline with glowing path, compass glow
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

<!-- far rank: barely separated from the sky, no trunk worth reading -->
<path d="M36,44 L42,60 L37,59 L46,76 L39,75 L50,94 L41,93 L54,113 L14,113 L27,93 L18,94 L31,76 L24,77 L33,60 L28,61 Z" fill="#101f2c" opacity="0.85"/>
<path d="M96,32 L103,52 L97,51 L108,72 L99,71 L113,94 L102,93 L118,116 L68,116 L84,93 L72,94 L88,72 L77,73 L91,52 L85,53 Z" fill="#132433" opacity="0.8"/>
<path d="M170,48 L176,64 L171,63 L180,80 L173,79 L184,98 L175,97 L188,116 L148,116 L161,97 L150,98 L163,80 L156,81 L165,64 L160,65 Z" fill="#101f2c" opacity="0.82"/>
<path d="M318,38 L325,56 L319,55 L330,76 L321,75 L334,97 L324,96 L339,116 L291,116 L306,96 L295,97 L309,75 L300,76 L313,56 L307,57 Z" fill="#132433" opacity="0.78"/>
<path d="M400,50 L406,65 L401,64 L410,80 L403,79 L413,97 L405,96 L417,115 L377,115 L390,96 L380,97 L392,80 L384,81 L394,65 L389,66 Z" fill="#101f2c" opacity="0.84"/>
<path d="M462,42 L469,60 L463,59 L473,78 L465,77 L477,98 L468,97 L482,116 L438,116 L452,97 L442,98 L455,78 L446,79 L459,60 L453,61 Z" fill="#132433" opacity="0.8"/>
<!-- the wash that pushes the far rank back into the sky -->
<path d="M0,0 L500,0 L500,124 L0,124 Z" fill="#0a1628" opacity="0.45"/>

<!-- mid rank: trunks first so the boughs overlap their tops, and every trunk
     reaches the actual ground line rather than stopping in mid air -->
<g transform="translate(70,0)">
  <path d="M-4,126 Q-5,148 -6,176 L5,176 Q4,148 3,126 Z" fill="#0c1808"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-0.7 0 172;0.7 0 172;-0.7 0 172" dur="8.4s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,52 L7,74 L1,73 L12,96 L3,95 L17,120 L5,119 L21,142 L7,141 L26,164 L-26,164 L-7,141 L-21,142 L-5,120 L-17,121 L-3,96 L-12,97 L-1,74 L-7,75 Z" fill="#0a1a10"/>
    <path d="M0,58 L5,76 L2,75 L9,96 L4,95 L13,119 L5,118 L16,141 L0,141 Z" fill="#122c18" opacity="0.5"/>
  </g>
</g>
<g transform="translate(148,0)">
  <path d="M-4,120 Q-5,146 -6,178 L5,178 Q4,146 3,120 Z" fill="#0c1808"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0.8 0 174;-0.8 0 174;0.8 0 174" dur="6.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,38 L8,62 L1,61 L14,88 L4,87 L20,114 L6,113 L25,138 L8,137 L31,160 L-31,160 L-8,137 L-25,138 L-6,114 L-20,115 L-4,88 L-14,89 L-1,62 L-8,63 Z" fill="#0b1c11"/>
    <path d="M0,45 L6,64 L2,63 L11,88 L4,87 L16,113 L6,112 L19,137 L0,137 Z" fill="#143018" opacity="0.45"/>
  </g>
</g>
<g transform="translate(352,0)">
  <path d="M-4,122 Q-5,148 -6,177 L5,177 Q4,148 3,122 Z" fill="#0c1808"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-0.9 0 173;0.9 0 173;-0.9 0 173" dur="7.4s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,42 L8,66 L1,65 L14,92 L4,91 L20,116 L6,115 L25,140 L8,139 L31,162 L-31,162 L-8,139 L-25,140 L-6,116 L-20,117 L-4,92 L-14,93 L-1,66 L-8,67 Z" fill="#0b1c11"/>
    <path d="M0,49 L6,68 L2,67 L11,92 L4,91 L16,115 L6,114 L19,139 L0,139 Z" fill="#143018" opacity="0.45"/>
  </g>
</g>
<g transform="translate(438,0)">
  <path d="M-4,128 Q-5,150 -6,176 L5,176 Q4,150 3,128 Z" fill="#0c1808"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0.7 0 172;-0.7 0 172;0.7 0 172" dur="7.9s" begin="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,56 L7,78 L1,77 L12,100 L3,99 L17,124 L5,123 L21,146 L7,145 L26,166 L-26,166 L-7,145 L-21,146 L-5,124 L-17,125 L-3,100 L-12,101 L-1,78 L-7,79 Z" fill="#0a1a10"/>
    <path d="M0,62 L5,80 L2,79 L9,100 L4,99 L13,123 L5,122 L16,145 L0,145 Z" fill="#122c18" opacity="0.5"/>
  </g>
</g>

<!-- near rank: the two that frame the path mouth, nearly black, and they are
     what the glow of the path is thrown against -->
<g transform="translate(196,0)">
  <path d="M-5,142 Q-6,178 -7,214 L6,214 Q5,178 4,142 Z" fill="#080f06"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-0.6 0 208;0.6 0 208;-0.6 0 208" dur="9.2s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,26 L10,56 L2,55 L18,86 L5,85 L24,118 L8,117 L31,148 L10,147 L38,180 L-38,180 L-10,147 L-31,148 L-8,117 L-24,118 L-5,85 L-18,86 L-2,56 L-10,57 Z" fill="#071208"/>
    <path d="M0,34 L7,58 L2,57 L13,86 L5,85 L19,117 L8,116 L24,147 L0,147 Z" fill="#0d2010" opacity="0.55"/>
  </g>
</g>
<g transform="translate(302,0)">
  <path d="M-5,138 Q-6,176 -7,214 L6,214 Q5,176 4,138 Z" fill="#080f06"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0.6 0 208;-0.6 0 208;0.6 0 208" dur="8.1s" begin="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M0,22 L10,54 L2,53 L18,84 L5,83 L25,116 L8,115 L32,146 L10,145 L39,178 L-39,178 L-10,145 L-32,146 L-8,115 L-25,116 L-5,83 L-18,84 L-2,54 L-10,55 Z" fill="#071208"/>
    <path d="M0,30 L7,56 L2,55 L13,84 L5,83 L19,115 L8,114 L24,145 L0,145 Z" fill="#0d2010" opacity="0.55"/>
  </g>
</g>

<!-- the path glow lands on the inner face of each near trunk -->



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
<path d="M211 260Q226 228 241 202Q252 181 248 161L254 161Q262 182 253 204Q244 231 276 260Z" fill="#756b3b"/>
<path d="M216 260Q234 226 246 203Q258 182 251 164" fill="none" stroke="#c1ac65" stroke-width="1.5" opacity=".45"/>
<path d="M231 246L244 241L254 247L247 251Z M240 222L249 218L255 222L248 225Z M247 199L253 196L255 200Z" fill="#a5945c" opacity=".55"/>
<!-- ====================================================================
     THE DOCK KEEPER, gesturing toward the path. He was a circle, an
     ellipse, two rects and a line; he is the same person the player just
     spoke to in docks_2, so he is the same model. He stands with his
     lantern low, at the edge of the light, pointing the way in.
     ==================================================================== -->
${bcPlace('aufu', 14, 86, 214, { armPose: { right: { ex: 1.45, ey: 0.55, wx: 2.3, wy: 0.55 }, left: { ex: -1.1, ey: 1.0, wx: -1.25, wy: 2.2 } } })}
<path d="M66,210 q20,-4 40,0 q-20,5 -40,0 Z" fill="#050a18" opacity="0.4"/>
<!-- NIGHT over him. He stands outside the path's light, so almost all of him
     goes to silhouette. The veil runs off the left edge of the frame and
     fades out toward the path, so it has no visible border anywhere. -->
<path d="M-10,78 L124,78 L124,234 L-10,234 Z" fill="url(#docks6Night)"/>
<!-- BOTH ARMS ARE THE MODEL'S OWN, posed rather than redrawn: right raised
     to point down the path, left hanging with the lantern. Only the index
     finger and the lantern are drawn here, onto the hands the model puts at
     (114.7, 146.3) and (70.4, 169.4). -->
<!-- the index finger, laid out of the near fist toward the path mouth -->
<path d="M114,145.8 Q119,145 123,144.2" fill="none" stroke="#8f7050" stroke-width="2" stroke-linecap="round"/>
<!-- HIS LANTERN, hanging off the other hand. The bail is a short loop the
     fingers close around, with no rod standing above the fist. -->
<path d="M67,171.5 Q67,167.5 70.4,167.5 Q73.8,167.5 73.8,171.5" fill="none" stroke="#6b4e0a" stroke-width="1.3"/>
<path d="M67.5,168.2 q2.9,-1.3 5.8,0 M67.5,170.8 q2.9,-1.3 5.8,0" fill="none" stroke="#3a2a18" stroke-width="0.6" opacity="0.5"/>
<path d="M65.4,173.5 L75.4,173.5 L77.4,177.5 L63.4,177.5 Z" fill="#6b4e0a"/>
<path d="M64.4,177.5 L76.4,177.5 L75.4,189.5 L65.4,189.5 Z" fill="#7a5a10"/>
<path d="M66.4,179.5 L74.4,179.5 L73.4,187.5 L67.4,187.5 Z" fill="#ffd700" opacity="0.6">
  <animate attributeName="opacity" values="0.42;0.68;0.48;0.62;0.42" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<circle cx="70.4" cy="183.5" r="24" fill="url(#docks6Lamp)" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.36;0.24;0.33;0.2" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
</svg>`;
