// Cove story scenes — "Cluey Cove"
// Keys: cove_0 through cove_4
// DRAFT — for review only

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
<!-- Chest 1, left ledge -->
<path d="M68,168 Q82,164 98,168 Q86,172 68,168 Z" fill="#141420" opacity="0.55"/>
<path d="M72,158 L94,158 L95,168 Q95,170 92,170 L74,170 Q71,170 71,168 Z" fill="#8a6a20"/>
<path d="M72,158 L78,158 L78,170 L74,170 Q71,170 71,168 Z" fill="#6a5018" opacity="0.6"/>
<path d="M87,158 L94,158 L95,168 Q95,170 92,170 L87,170 Z" fill="#a07a28" opacity="0.45"/>
<path d="M71,158 Q71,150 76,147 Q83,144 90,147 Q95,150 95,158 Q84,161 71,158 Z" fill="#a07a28"/>
<path d="M74,156 Q74,150 79,148 Q84,146 88,148 Q80,151 76,157 Z" fill="#c09a3c" opacity="0.45"/>
<path d="M78,146 Q78,155 78,159" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.55"/>
<path d="M88,146 Q88,155 88,159" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.5"/>
<path d="M71,159 Q83,162 95,159" fill="none" stroke="#6a5018" stroke-width="1.4" opacity="0.7"/>
<path d="M81,155 L86,155 Q87,155 87,157 L87,161 L80,161 L80,157 Q80,155 81,155 Z" fill="#ffd700" opacity="0.8"/>
<path d="M80,163 Q80,159 83,158 Q86,159 86,163" fill="none" stroke="#ffd700" stroke-width="1.2" opacity="0.7"/>
<path d="M80,163 L86,163 Q87,163 87,165 L87,167 Q87,168 86,168 L80,168 Q79,168 79,167 L79,165 Q79,163 80,163 Z" fill="#ffd700" opacity="0.7"/>

<!-- Chest 2, right ledge -->
<path d="M394,153 Q409,149 426,153 Q413,157 394,153 Z" fill="#141420" opacity="0.55"/>
<path d="M398,142 L421,142 L422,153 Q422,155 419,155 L400,155 Q397,155 397,153 Z" fill="#8a6a20"/>
<path d="M398,142 L404,142 L404,155 L400,155 Q397,155 397,153 Z" fill="#6a5018" opacity="0.6"/>
<path d="M414,142 L421,142 L422,153 Q422,155 419,155 L414,155 Z" fill="#a07a28" opacity="0.45"/>
<path d="M397,142 Q397,133 403,130 Q410,127 417,130 Q422,133 422,142 Q410,145 397,142 Z" fill="#a07a28"/>
<path d="M400,140 Q400,133 406,131 Q411,129 415,131 Q406,134 402,141 Z" fill="#c09a3c" opacity="0.45"/>
<path d="M404,129 Q404,138 404,143" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.55"/>
<path d="M415,129 Q415,138 415,143" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.5"/>
<path d="M397,143 Q410,146 422,143" fill="none" stroke="#6a5018" stroke-width="1.4" opacity="0.7"/>
<path d="M407,139 L413,139 Q414,139 414,141 L414,145 L406,145 L406,141 Q406,139 407,139 Z" fill="#ffd700" opacity="0.8"/>
<path d="M406,148 Q406,144 410,143 Q414,144 414,148" fill="none" stroke="#ffd700" stroke-width="1.2" opacity="0.7"/>
<path d="M406,148 L414,148 Q415,148 415,150 L415,153 Q415,154 414,154 L406,154 Q405,154 405,153 L405,150 Q405,148 406,148 Z" fill="#ffd700" opacity="0.7"/>

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
<path d="M157,196 Q168,193 181,196 Q171,199 157,196 Z" fill="#141420" opacity="0.5"/>
<path d="M160,188 L177,188 L178,196 Q178,197 176,197 L162,197 Q159,197 159,196 Z" fill="#7a5a18"/>
<path d="M160,188 L165,188 L165,197 L162,197 Q159,197 159,196 Z" fill="#5e4614" opacity="0.6"/>
<path d="M159,188 Q159,181 164,179 Q169,177 174,179 Q178,181 178,188 Q169,190 159,188 Z" fill="#8a6a22"/>
<path d="M162,186 Q162,181 166,180 Q170,179 172,180 Q166,182 163,187 Z" fill="#a8842e" opacity="0.4"/>
<path d="M165,179 Q165,185 165,189" fill="none" stroke="#5e4614" stroke-width="0.9" opacity="0.5"/>
<path d="M172,179 Q172,185 172,189" fill="none" stroke="#5e4614" stroke-width="0.9" opacity="0.45"/>
<path d="M159,189 Q169,191 178,189" fill="none" stroke="#5e4614" stroke-width="1.2" opacity="0.6"/>
<path d="M166,192 Q166,189 169,188 Q172,189 172,192" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
<path d="M166,192 L172,192 Q173,192 173,193 L173,196 Q173,197 172,197 L166,197 Q165,197 165,196 L165,193 Q165,192 166,192 Z" fill="#ffd700" opacity="0.6"/>

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
     THE GREAT CHEST, half sunk in the pool. Its lid is a BARREL: staves
     arching over the top, bound by iron straps that follow the curve. The
     carcass is planked with visible seams, cornered in metal, and the wood
     DARKENS at the waterline where it has been soaking for centuries.
     ==================================================================== -->
<!-- carcass -->
<path d="M198,186 L302,186 Q306,186 306,190 L305,214 Q305,218 300,218 L200,218 Q195,218 195,214 L194,190 Q194,186 198,186 Z" fill="url(#cove1Oak)"/>
<!-- plank seams down the front -->
<path d="M216,187 Q215,202 216,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<path d="M238,187 Q237,202 238,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.45"/>
<path d="M262,187 Q263,202 262,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.45"/>
<path d="M284,187 Q285,202 284,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<!-- iron corner straps: they wrap the edge, so they show on both faces -->
<path d="M194,190 Q194,186 198,186 L206,186 L206,218 L200,218 Q195,218 195,214 Z" fill="#4a3a12" opacity="0.55"/>
<path d="M294,186 L302,186 Q306,186 306,190 L305,214 Q305,218 300,218 L294,218 Z" fill="#4a3a12" opacity="0.5"/>
<!-- horizontal iron bands round the body -->
<path d="M194,199 L306,199 L306,203 L194,203 Z" fill="#6a5018" opacity="0.75"/>
<path d="M194,199 L306,199 L306,200 L194,200 Z" fill="#a5832e" opacity="0.35"/>
<path d="M195,211 L305,211 L305,214 L195,214 Z" fill="#6a5018" opacity="0.6"/>

<!-- lid: a barrel arch, with staves running over it -->
<path d="M194,190 Q194,176 210,169 Q230,163 250,163 Q270,163 290,169 Q306,176 306,190 Q250,196 194,190 Z" fill="url(#cove1Lid)"/>
<!-- stave seams following the curve of the lid -->
<path d="M214,169 Q210,179 210,189" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.45"/>
<path d="M232,164 Q229,177 229,191" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.4"/>
<path d="M268,164 Q271,177 271,191" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.4"/>
<path d="M286,169 Q290,179 290,189" fill="none" stroke="#6a5018" stroke-width="1" opacity="0.45"/>
<!-- iron straps arching over the lid, following the same curve -->
<path d="M203,181 Q206,172 220,166" fill="none" stroke="#6a5018" stroke-width="3" opacity="0.7" stroke-linecap="round"/>
<path d="M297,181 Q294,172 280,166" fill="none" stroke="#6a5018" stroke-width="3" opacity="0.65" stroke-linecap="round"/>
<!-- highlight riding the crown of the lid, which is what makes it curve -->
<path d="M212,173 Q232,166 250,165 Q268,166 288,173 Q268,170 250,169 Q232,170 212,173 Z" fill="#e0bc58" opacity="0.35"/>
<!-- the seam where the lid closes on the carcass -->
<path d="M194,190 Q250,196 306,190 L306,193 Q250,199 194,193 Z" fill="#4a3a12" opacity="0.6"/>
<!-- clasp on the crown -->
<path d="M242,162 L258,162 Q260,162 260,165 L260,170 Q260,172 258,172 L242,172 Q240,172 240,170 L240,165 Q240,162 242,162 Z" fill="#ffd700" opacity="0.9"/>
<path d="M243,164 L257,164 L257,166 L243,166 Z" fill="#fff0a0" opacity="0.4"/>

<!-- a planed panel on the lid: the carved words need a ground to read against -->
<path d="M206,172 Q250,167 294,172 Q296,184 294,192 Q250,197 206,192 Q204,184 206,172 Z" fill="#6a5018" opacity="0.4"/>
<!-- INSCRIPTION on the lid, between the clasp and the shackle -->
<g filter="url(#lockTextGlow)">
  <text x="250" y="179" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7.5" opacity="0.92" letter-spacing="0.2">Shelter endlessly</text>
  <text x="250" y="188" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7.5" opacity="0.92" letter-spacing="0.2">is a bay (4)</text>
</g>

<!-- padlock hanging from the hasp, on the carcass below the seam -->
<path d="M243,203 Q243,192 250,189 Q257,192 257,203" fill="none" stroke="#ffd700" stroke-width="2.6" opacity="0.9" stroke-linecap="round"/>
<path d="M240,202 L260,202 Q263,202 263,205 L263,214 Q263,217 260,217 L240,217 Q237,217 237,214 L237,205 Q237,202 240,202 Z" fill="#ffd700" opacity="0.88"/>
<path d="M241,204 L259,204 L259,207 L241,207 Z" fill="#fff0a0" opacity="0.35"/>
<path d="M247,209 Q247,206 250,206 Q253,206 253,209 Q253,211 251,212 L252,215 L248,215 L249,212 Q247,211 247,209 Z" fill="#2a2a3a"/>
<circle cx="250" cy="205" r="36" fill="url(#lockGlow1)" opacity="0.6"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>

<!-- ====================================================================
     THE WATERLINE. Water crossing the chest darkens the wood behind it and
     refracts what is below, so the submerged part is a tinted band, not a
     flat ellipse laid on top.
     ==================================================================== -->
<path d="M196,208 Q224,204 250,205 Q278,204 304,208 Q306,216 300,220 Q250,225 200,220 Q194,216 196,208 Z" fill="#0a2a40" opacity="0.55"/>
<path d="M196,208 Q224,204 250,205 Q278,204 304,208 Q306,216 300,220 Q250,225 200,220 Q194,216 196,208 Z" fill="#7ac5e8" opacity="0.1"><animate attributeName="opacity" values="0.06;0.14;0.06" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- the meniscus line itself, brightest where it cuts the wood -->
<path d="M196,209 Q224,205 250,206 Q278,205 304,209" fill="none" stroke="#9fd8ef" stroke-width="1" opacity="0.4"/>
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
     THE OPEN CHEST. Open reads by two things a closed one cannot have:
     you see the INSIDE of the lid tipped back away from you, and you see
     down into a dark cavity that the treasure sits in. Painted in order:
     lid interior, then the box, then what is inside it, then the light.
     ==================================================================== -->
<!-- lid, tipped back: we see its underside, so it is dark timber with the -->
<!-- outside curve showing beyond the top edge -->
<path d="M204,166 Q206,152 222,146 Q250,139 278,146 Q294,152 296,166 Q250,171 204,166 Z" fill="url(#cove3Lid)"/>
<path d="M210,163 Q212,153 224,149 Q250,143 276,149 Q288,153 290,163 Q250,167 210,163 Z" fill="#4a3810"/>
<path d="M216,161 Q220,155 230,152 Q250,148 270,152 Q280,155 284,161 Q250,164 216,161 Z" fill="#5e4614" opacity="0.7"/>
<!-- iron strap across the lid interior -->
<path d="M234,150 Q233,157 233,164" fill="none" stroke="#3a2c0c" stroke-width="1.4" opacity="0.6"/>
<path d="M266,150 Q267,157 267,164" fill="none" stroke="#3a2c0c" stroke-width="1.4" opacity="0.55"/>
<!-- hinge barrels where the lid pivots off the back of the box -->
<path d="M218,166 L226,166 Q228,166 228,169 L228,172 Q228,174 226,174 L218,174 Q216,174 216,172 L216,169 Q216,166 218,166 Z" fill="#6a5018" opacity="0.85"/>
<path d="M274,166 L282,166 Q284,166 284,169 L284,172 Q284,174 282,174 L274,174 Q272,174 272,169 Z" fill="#6a5018" opacity="0.85"/>
<path d="M244,143 L256,143 Q258,143 258,146 L258,149 Q258,151 256,151 L244,151 Q242,151 242,149 L242,146 Q242,143 244,143 Z" fill="#ffd700" opacity="0.8"/>

<!-- the CAVITY: a dark mouth, which is what actually says "open" -->
<path d="M208,176 Q250,169 292,176 Q294,186 292,192 Q250,198 208,192 Q206,186 208,176 Z" fill="#241a06"/>
<path d="M212,178 Q250,172 288,178 Q289,184 288,188 Q250,193 212,188 Q211,184 212,178 Z" fill="#3a2a0c" opacity="0.8"/>

<!-- the box itself, front face, planked and banded -->
<path d="M206,188 L294,188 Q298,188 298,192 L297,214 Q297,218 292,218 L208,218 Q203,218 203,214 L202,192 Q202,188 206,188 Z" fill="url(#cove3Oak)"/>
<path d="M222,189 Q221,203 222,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<path d="M244,189 Q243,203 244,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.45"/>
<path d="M266,189 Q267,203 266,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.45"/>
<path d="M278,189 Q279,203 278,217" fill="none" stroke="#5e4614" stroke-width="1" opacity="0.5"/>
<path d="M202,192 Q202,188 206,188 L214,188 L214,218 L208,218 Q203,218 203,214 Z" fill="#4a3a12" opacity="0.5"/>
<path d="M286,188 L294,188 Q298,188 298,192 L297,214 Q297,218 292,218 L286,218 Z" fill="#4a3a12" opacity="0.45"/>
<path d="M202,200 L298,200 L298,204 L202,204 Z" fill="#6a5018" opacity="0.75"/>
<path d="M202,200 L298,200 L298,201 L202,201 Z" fill="#a5832e" opacity="0.35"/>
<path d="M203,212 L297,212 L297,215 L203,215 Z" fill="#6a5018" opacity="0.55"/>
<!-- the rim of the box, catching the light coming up out of it -->
<path d="M206,188 Q250,182 294,188 Q250,192 206,188 Z" fill="#d4ac48" opacity="0.55"/>

<!-- ====================================================================
     RELICS lying in the cavity, each lit from below by the hoard glow.
     ==================================================================== -->
<g transform="translate(-2 -6)"><!-- rolled scroll, with a shadowed end and a lit belly -->
<path d="M224,186 Q224,181 228,180 L242,180 Q246,181 246,186 Q246,190 242,191 L228,191 Q224,190 224,186 Z" fill="#e8d8a0" opacity="0.85"/>
<path d="M228,180 Q232,181 232,186 Q232,190 228,191 Q224,190 224,186 Q224,181 228,180 Z" fill="#cbb87e" opacity="0.9"/>
<path d="M229,184 Q231,186 229,188" fill="none" stroke="#9a8a58" stroke-width="0.8" opacity="0.7"/>
<path d="M242,180 Q246,181 246,186 Q246,190 242,191 Q244,187 244,186 Q244,184 242,180 Z" fill="#f4e8bc" opacity="0.6"/>
<!-- gem: facets, so it reads as cut stone rather than a lozenge -->
<path d="M256,180 L264,180 L268,185 L260,192 L252,185 Z" fill="#4af5a0" opacity="0.8"/>
<path d="M256,180 L260,185 L252,185 Z" fill="#8affd0" opacity="0.7"/>
<path d="M264,180 L268,185 L260,185 Z" fill="#2ec27a" opacity="0.75"/>
<path d="M252,185 L260,185 L260,192 Z" fill="#3ad48c" opacity="0.6"/>
<!-- coin stack: each disc has a lit rim and a shadowed underside -->
<path d="M272,190 Q272,187 278,187 Q284,187 284,190 Q284,192 278,192 Q272,192 272,190 Z" fill="#c9a32c" opacity="0.85"/>
<path d="M272,187 Q272,184 278,184 Q284,184 284,187 Q284,189 278,189 Q272,189 272,187 Z" fill="#e0bc48" opacity="0.9"/>
<path d="M272,184 Q272,181 278,181 Q284,181 284,184 Q284,186 278,186 Q272,186 272,184 Z" fill="#ffe066" opacity="0.95"/>
<path d="M274,183 Q278,182 282,183 Q278,184 274,183 Z" fill="#fff3b8" opacity="0.6"/>
<!-- a coin fallen onto the box rim -->
<path d="M290,186 Q290,184 294,184 Q297,184 297,186 Q297,188 294,188 Q290,188 290,186 Z" fill="#e0bc48" opacity="0.8"/>

</g>
<path d="M208 190Q250 197 292 190L292 197Q250 204 208 197Z" fill="#8a6a20"/><path d="M208 190Q250 197 292 190" fill="none" stroke="#c9a441" stroke-width="2"/>
<!-- ====================================================================
     LIGHT SPILLING OUT. It must ADD, so the beams are a light gradient
     fading upward, widening as they rise. Painted over everything.
     ==================================================================== -->
<path d="M232,183 L216,181 L196,114 L220,114 Z" fill="url(#cove3Beam)" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M262,181 L238,181 L228,98 L268,98 Z" fill="url(#cove3Beam)" opacity="0.5"><animate attributeName="opacity" values="0.32;0.66;0.32" dur="2.6s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M268,183 L284,181 L302,114 L278,114 Z" fill="url(#cove3Beam)" opacity="0.36"><animate attributeName="opacity" values="0.22;0.46;0.22" dur="3.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- the hot core right at the mouth of the chest -->
<path d="M212,182 Q250,172 288,182 Q250,190 212,182 Z" fill="#ffe066" opacity="0.28"><animate attributeName="opacity" values="0.18;0.4;0.18" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>

<!-- Water lapping the foot of the chest -->
<path d="M204,208 Q228,204 250,205 Q272,204 296,208 Q298,215 292,219 Q250,224 208,219 Q202,215 204,208 Z" fill="#0a2a40" opacity="0.45"/>
<path d="M204,208 Q228,204 250,205 Q272,204 296,208 Q298,215 292,219 Q250,224 208,219 Q202,215 204,208 Z" fill="#ffd700" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M204,209 Q228,205 250,206 Q272,205 296,209" fill="none" stroke="#9fd8ef" stroke-width="0.9" opacity="0.35"/>

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

// Scene 4 (CAVE puzzle — "Sculpt without right makes a hollow (4)") reuses cove_3.
// Note: cove_3 shows the opened FIRST chest; there is no second-chest/plaque art
// in this file to carry the CAVE clue text, so the clue is shown only in the
// puzzle dialog (index.html).
STORY_SCENES['cove_4'] = STORY_SCENES['cove_3'];
