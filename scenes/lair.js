// Lair story scenes — "Liam's Lair"
// Keys: lair_0 through lair_9

// Scene 0: The Descent — dark passage, stone steps, heat rising
STORY_SCENES['lair_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairDesc" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0a08"/><stop offset="50%" stop-color="#2a1210"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairLavaG0" cx="50%" cy="90%" r="50%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.15"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <filter id="lairFireGlow0"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="500" height="260" fill="url(#lairDesc)"/>
<!-- Lava glow from below -->
<rect x="0" y="180" width="500" height="80" fill="url(#lairLavaG0)"/>
<!-- Rough cave walls -->
<path d="M0,0 L0,260 L30,250 Q50,220 40,180 Q60,150 45,120 Q55,80 40,50 Q50,20 35,0 Z" fill="#2a1a14"/>
<path d="M500,0 L500,260 L470,250 Q450,220 460,180 Q440,150 455,120 Q445,80 460,50 Q450,20 465,0 Z" fill="#2a1a14"/>
<!-- Claw marks on walls -->
<g stroke="#3a2218" stroke-width="2" stroke-linecap="round" opacity="0.5">
  <line x1="20" y1="60" x2="15" y2="100"/><line x1="25" y1="58" x2="20" y2="98"/><line x1="30" y1="62" x2="25" y2="102"/>
  <line x1="475" y1="80" x2="480" y2="120"/><line x1="470" y1="78" x2="475" y2="118"/><line x1="465" y1="82" x2="470" y2="122"/>
</g>
<!-- ====================================================================
     THE STEPS. Four rects with 3px gaps between them, which is exactly why
     they floated: nothing connected one tread to the next. A flight of steps
     is TREAD + RISER, and the riser is the vertical face you see from above.
     Without it you have four shelves hanging in a void.

     The flight descends toward the viewer, so each tread is wider and deeper
     than the one behind it, and the stair narrows as it recedes into the dark.
     Centuries of feet wear the middle of a step hollow.
     ==================================================================== -->
<path d="M162,201 L338,201 L346,210 L154,210 Z" fill="#1f1510"/>
<path d="M162,196 L338,196 L338,201 L162,201 Z" fill="#6b4a2e"/>
<path d="M162,196 L338,196 L338,197 L162,197 Z" fill="#a8703a" opacity="0.75"/>
<path d="M210,197 Q250,200 289,197 Q250,198 210,197 Z" fill="#1f1510" opacity="0.35"/>
<path d="M154,216 L346,216 L355,225 L145,225 Z" fill="#1f1510"/>
<path d="M154,210 L346,210 L346,216 L154,216 Z" fill="#6b4a2e"/>
<path d="M154,210 L346,210 L346,211 L154,211 Z" fill="#a8703a" opacity="0.75"/>
<path d="M206,211 Q250,215 293,211 Q250,212 206,211 Z" fill="#1f1510" opacity="0.35"/>
<path d="M145,232 L355,232 L365,241 L135,241 Z" fill="#1f1510"/>
<path d="M145,225 L355,225 L355,232 L145,232 Z" fill="#6b4a2e"/>
<path d="M145,225 L355,225 L355,226 L145,226 Z" fill="#a8703a" opacity="0.75"/>
<path d="M202,226 Q250,231 297,226 Q250,227 202,226 Z" fill="#1f1510" opacity="0.35"/>
<path d="M135,249 L365,249 L376,258 L124,258 Z" fill="#1f1510"/>
<path d="M135,241 L365,241 L365,249 L135,249 Z" fill="#6b4a2e"/>
<path d="M135,241 L365,241 L365,242 L135,242 Z" fill="#a8703a" opacity="0.75"/>
<path d="M198,242 Q250,248 301,242 Q250,244 198,242 Z" fill="#1f1510" opacity="0.35"/>
<!-- the walls closing in on either side of the stair -->
<path d="M120,190 Q142,214 124,260 L162,260 Q152,216 162,192 Z" fill="#2a1a12" opacity="0.9"/>
<path d="M380,190 Q358,214 376,260 L338,260 Q348,216 338,192 Z" fill="#2a1a12" opacity="0.9"/>
<path d="M120,190 Q142,214 124,260 L136,260 Q130,216 138,192 Z" fill="#4a2a20" opacity="0.4"/>

<!-- Red glow from depth -->
<ellipse cx="250" cy="260" rx="100" ry="30" fill="#ff2200" opacity="0.08">
  <animate attributeName="opacity" values="0.06;0.12;0.06" dur="4s" repeatCount="indefinite"/>
</ellipse>
<!-- Smoke wisps rising -->
<g opacity="0.3">
  <circle cx="200" cy="220" r="6" fill="#444">
    <animate attributeName="cy" values="220;180;140" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0.15;0" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="230" r="5" fill="#444">
    <animate attributeName="cy" values="230;190;150" dur="5s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="opacity" values="0.25;0.12;0" dur="5s" repeatCount="indefinite" begin="1s"/>
  </circle>
  <circle cx="250" cy="240" r="7" fill="#555">
    <animate attributeName="cy" values="240;195;150" dur="7s" repeatCount="indefinite" begin="2s"/>
    <animate attributeName="opacity" values="0.2;0.1;0" dur="7s" repeatCount="indefinite" begin="2s"/>
  </circle>
</g>
<!-- Faceted side walls retain a clear central descent. -->
<path d="M45 0L98 28L111 80L92 130L117 190L138 192L125 260H43L52 204L40 166L58 121L43 75Z" fill="#362018" opacity=".6"/>
<path d="M455 0L407 24L389 72L410 119L383 188L362 192L375 260H459L448 203L463 161L442 116L456 68Z" fill="#352019" opacity=".55"/>
<path d="M71 28L85 78L72 125L92 172 M427 26L411 74L430 119L407 174" fill="none" stroke="#6c4230" stroke-width="1.3" opacity=".32"/>
<path d="M55 113L68 116V104 M441 113L431 116V104" fill="none" stroke="#77604a" stroke-width="2"/>
<path d="M67 101V119 M430 101V119" stroke="#45382d" stroke-width="3"/>
<path d="M79 240L91 230L103 235L110 248H83Z M392 250L403 237L417 240L425 252Z" fill="#473025"/>
<path d="M79 240L91 230L98 234L89 239 M392 250L403 237L410 241" fill="#7e4b30" opacity=".35"/>

<!-- Torch on wall (left) -->
<rect x="55" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="57" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="8;10;7;9;8" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="57" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="5;7;4;6;5" dur="1.5s" repeatCount="indefinite"/>
</ellipse>
<!-- Torch on wall (right) -->
<rect x="441" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="443" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="7;9;8;10;7" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="443" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="4;6;5;7;4" dur="1.7s" repeatCount="indefinite"/>
</ellipse>
</svg>`;

// Scene 1: The Dragon's Chamber — vast cavern, dragon silhouette, glowing red eyes
STORY_SCENES['lair_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairChamber" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="40%" stop-color="#2a1010"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairDrGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairHide1" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#341414"/><stop offset="100%" stop-color="#140606"/>
  </linearGradient>
  <filter id="lairFireGlow1"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="500" height="260" fill="url(#lairChamber)"/>

<!-- ====================================================================
     CAVERN WALLS. Rock breaks in flat planes, so the walls step in and
     out rather than sweeping in one smooth curve.
     ==================================================================== -->
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L28,170 L12,204 L30,238 L16,260 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L14,140 L4,102 L18,66 L2,30 L0,10 Z" fill="#3e221c" opacity="0.5"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L472,170 L488,204 L470,238 L484,260 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L486,140 L482,100 L496,64 L482,28 L500,8 Z" fill="#3e221c" opacity="0.42"/>
<!-- Stalactites: a slow taper with a needle point -->
<path d="M80,0 Q85,-2 90,0 Q88,20 85,40 Q83,20 80,0 Z" fill="#2a1814"/>
<path d="M83,2 Q85,1 87,2 Q86,20 85,34 Q84,20 83,2 Z" fill="#432420" opacity="0.5"/>
<path d="M180,0 Q184,-2 188,0 Q186,18 184,34 Q182,18 180,0 Z" fill="#2a1814"/>
<path d="M300,0 Q305,-2 310,0 Q308,24 305,46 Q303,24 300,0 Z" fill="#2a1814"/>
<path d="M303,2 Q305,1 307,2 Q306,24 305,40 Q304,24 303,2 Z" fill="#432420" opacity="0.5"/>
<path d="M420,0 Q424,-2 428,0 Q426,20 424,38 Q422,20 420,0 Z" fill="#2a1814"/>
<path d="M132,0 Q135,-1 138,0 Q137,14 135,26 Q134,14 132,0 Z" fill="#2a1814" opacity="0.7"/>
<path d="M360,0 Q363,-1 366,0 Q365,12 363,24 Q362,12 360,0 Z" fill="#2a1814" opacity="0.7"/>

<!-- Cryptic clue carvings scratched into the rock -->
<text x="30" y="50" fill="#ff4422" font-family="monospace" font-size="6" opacity="0.3" transform="rotate(-5,30,50)">8 down</text>
<text x="25" y="90" fill="#ff6644" font-family="monospace" font-size="5" opacity="0.25" transform="rotate(-8,25,90)">(5,4)</text>
<text x="455" y="55" fill="#ff4422" font-family="monospace" font-size="6" opacity="0.3" transform="rotate(5,455,55)">3 across</text>
<text x="460" y="100" fill="#ff6644" font-family="monospace" font-size="5" opacity="0.25" transform="rotate(8,460,100)">ANAG.</text>

<!-- ====================================================================
     THE FLOOR. Drawn before the hoard so the scrolls sit ON it.
     ==================================================================== -->
<path d="M0,236 Q60,228 128,232 Q200,236 250,229 Q320,224 396,231 Q452,236 500,230 L500,260 L0,260 Z" fill="#1a0a08"/>
<path d="M0,248 Q100,242 200,246 Q300,250 400,244 Q456,248 500,244 L500,260 L0,260 Z" fill="#120606"/>

<!-- ====================================================================
     THE HOARD. Scrolls are not identical rectangles: they are rolled
     tubes at different angles, some furled tight, some spilling open,
     with dark ends where you look into the roll.
     ==================================================================== -->
<path d="M50,238 Q76,224 108,222 Q142,221 158,232 Q142,244 106,246 Q70,246 50,238 Z" fill="#3a2a18" opacity="0.75"/>
<path d="M64,236 Q62,225 70,220 L82,217 Q88,220 88,229 Q88,238 80,241 L70,242 Q64,241 64,236 Z" fill="#d4c090" opacity="0.62"/>
<path d="M70,220 Q76,222 76,229 Q76,237 70,242 Q64,241 64,236 Q62,225 70,220 Z" fill="#a89468" opacity="0.65"/>
<path d="M92,234 Q88,224 96,219 L108,218 Q113,222 112,230 Q110,238 102,240 L96,239 Q92,238 92,234 Z" fill="#c8b880" opacity="0.55"/>
<path d="M96,219 Q102,221 103,229 Q103,236 98,240 Q92,238 92,234 Q88,224 96,219 Z" fill="#9c8a5e" opacity="0.6"/>
<path d="M118,236 Q114,228 122,223 L134,223 Q139,227 137,234 Q134,240 126,242 Q119,241 118,236 Z" fill="#d4c090" opacity="0.55"/>
<path d="M122,223 Q128,226 128,233 Q127,239 122,242 Q118,241 118,236 Q114,228 122,223 Z" fill="#a89468" opacity="0.6"/>
<!-- one lying flat, half unrolled, so the pile is not all tubes -->
<path d="M84,244 Q106,240 130,243 Q126,247 106,248 Q88,247 84,244 Z" fill="#c8b880" opacity="0.4"/>

<path d="M352,238 Q376,226 406,224 Q436,223 450,233 Q434,244 402,246 Q370,246 352,238 Z" fill="#3a2a18" opacity="0.72"/>
<path d="M370,236 Q367,226 375,222 L386,221 Q391,225 390,232 Q388,240 380,242 Q371,241 370,236 Z" fill="#d4c090" opacity="0.6"/>
<path d="M375,222 Q381,225 381,231 Q380,238 375,242 Q371,241 370,236 Q367,226 375,222 Z" fill="#a89468" opacity="0.62"/>
<path d="M398,234 Q394,225 402,220 L414,220 Q419,224 417,231 Q414,238 406,240 Q399,239 398,234 Z" fill="#c8b880" opacity="0.55"/>
<path d="M402,220 Q408,223 408,230 Q407,236 402,240 Q398,239 398,234 Q394,225 402,220 Z" fill="#9c8a5e" opacity="0.58"/>
<path d="M424,236 Q421,229 428,225 L437,225 Q441,229 439,235 Q436,240 430,241 Q424,240 424,236 Z" fill="#d4c090" opacity="0.5"/>
<path d="M428,225 Q433,228 433,233 Q432,238 428,241 Q424,240 424,236 Q421,229 428,225 Z" fill="#a89468" opacity="0.55"/>
<path d="M382,245 Q404,241 428,244 Q422,248 402,249 Q386,248 382,245 Z" fill="#c8b880" opacity="0.35"/>

<!-- Dragon aura -->
<circle cx="250" cy="145" r="90" fill="url(#lairDrGlow)"/>

<!-- ====================================================================
     LIAM. A dragon, not a snowman. Painted back to front: far wing, tail,
     haunch, body, near wing, neck, head. The silhouette that says DRAGON
     is a deep chest tapering to a long neck, a WEDGE head with a snout and
     a jaw line, spines running the ridge of the back, and a tail that
     leaves the body rather than stopping at it.
     ==================================================================== -->
<!-- far wing, folded, behind the body -->
<path d="M284,156 Q318,138 352,144 Q374,149 378,162 Q366,158 356,164 Q348,156 338,164 Q330,156 320,166 Q310,158 300,168 Q290,163 284,164 Z" fill="#120808" opacity="0.62"/>
<path d="M286,157 Q320,148 350,146" fill="none" stroke="#2a1010" stroke-width="1" opacity="0.35"/>
<path d="M290,159 Q306,158 300,168" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.3"/>
<path d="M298,157 Q318,157 320,166" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.3"/>
<path d="M310,153 Q334,155 338,164" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.28"/>
<!-- tail sweeping out to the right and lying along the floor -->
<path d="M296,196 Q344,188 388,198 Q424,208 452,228 Q428,234 402,224 Q372,212 342,208 Q314,205 294,210 Z" fill="#1a0808"/>
<path d="M300,199 Q344,192 384,201 Q416,210 442,226" fill="none" stroke="#3e1818" stroke-width="1.2" opacity="0.4"/>

<!-- spade at the tail tip -->
<path d="M452,228 Q466,220 478,226 Q472,236 458,236 Q450,234 452,228 Z" fill="#2a1212" opacity="0.85"/>
<path d="M456,227 Q466,223 474,226 Q466,229 456,227 Z" fill="#4a2020" opacity="0.4"/>
<!-- haunch: the big rear muscle, which is what gives a dragon its weight -->
<path d="M268,182 Q296,174 312,192 Q320,208 306,220 Q284,228 268,216 Q258,198 268,182 Z" fill="#1a0808"/>
<!-- body: deep chest, drawn as one mass with the shoulder -->
<path d="M196,186 Q198,162 224,154 Q256,146 284,158 Q306,170 304,194 Q300,216 272,224 Q234,230 208,216 Q192,204 196,186 Z" fill="url(#lairHide1)"/>
<!-- belly plates, the lighter scutes on the underside -->
<path d="M212,214 Q240,224 274,218 Q272,224 250,227 Q224,226 212,214 Z" fill="#4a1c18" opacity="0.45"/>
<path d="M216,206 Q244,214 272,209" fill="none" stroke="#4a1c18" stroke-width="1.2" opacity="0.3"/>
<!-- foreleg planted on the floor, so he is standing not floating -->
<path d="M216,208 Q210,224 210,238 Q216,242 224,240 Q224,224 228,210 Z" fill="#1a0808"/>
<path d="M206,238 Q216,234 228,238 Q228,244 218,245 Q208,244 206,238 Z" fill="#2a1212"/>
<path d="M208,243 Q210,247 208,249" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<path d="M216,244 Q217,248 216,250" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<path d="M224,243 Q226,247 225,249" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<!-- near wing, folded over the shoulder, with a visible finger frame -->
<path d="M220,158 Q184,136 148,143 Q124,149 118,164 Q132,159 144,167 Q154,157 166,168 Q176,157 188,170 Q200,162 212,170 Z" fill="#120808" opacity="0.8"/>
<path d="M220,158 Q182,146 148,143" fill="none" stroke="#3a1616" stroke-width="1.3" opacity="0.55"/>
<path d="M212,161 Q182,157 188,170" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.45"/>
<path d="M204,157 Q170,155 166,168" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.42"/>
<path d="M188,151 Q152,152 144,167" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.4"/>
<path d="M166,146 Q134,150 118,164" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.38"/>
<!-- the wing claw at the fold, which is what says WING and not cape -->
<path d="M120,160 Q110,152 100,152 Q108,160 118,166 Z" fill="#2a1212" opacity="0.85"/>

<!-- neck rising out of the chest toward the head -->
<path d="M226,158 Q222,136 232,120 Q244,108 260,110 Q272,116 272,132 Q270,150 258,160 Q240,166 226,158 Z" fill="url(#lairHide1)"/>
<!-- spines running the ridge of the neck -->
<path d="M232,120 Q228,112 230,104 Q236,110 238,118 Z" fill="#2a1212"/>
<path d="M242,112 Q239,104 242,96 Q247,103 248,111 Z" fill="#2a1212"/>
<path d="M254,110 Q252,102 256,95 Q260,102 260,110 Z" fill="#2a1212" opacity="0.9"/>

<!-- ====================================================================
     THE HEAD. A wedge: broad at the skull, narrowing along the snout to
     the nostrils, with a jaw line under it and a brow over the eye. This
     is the difference between a dragon and a ball.
     ==================================================================== -->
<path d="M236,110 Q234,96 246,90 Q264,84 280,90 Q294,96 300,108 Q306,118 300,126 L272,134 Q252,136 240,128 Q234,120 236,110 Z" fill="url(#lairHide1)"/>
<!-- snout, tapering forward from the skull -->
<path d="M282,110 Q300,108 312,116 Q318,122 314,130 Q302,136 286,132 Q278,124 282,110 Z" fill="#1e0a0a"/>
<!-- jaw line: a lit edge under the snout is what separates it from the neck -->
<path d="M284,132 Q300,136 314,130 Q304,140 286,138 Z" fill="#3e1818" opacity="0.75"/>
<path d="M244,128 Q266,138 288,138" fill="none" stroke="#3e1818" stroke-width="1.2" opacity="0.5"/>
<!-- brow ridges, jutting over each eye -->
<path d="M240,102 Q252,96 264,100 Q254,102 244,106 Z" fill="#2a1212"/>
<path d="M268,98 Q280,94 290,100 Q280,101 270,104 Z" fill="#2a1212" opacity="0.9"/>
<!-- horns, sweeping back off the skull -->
<path d="M244,94 Q234,74 224,58 Q238,66 248,84 Q250,90 248,94 Z" fill="#2a1212"/>
<path d="M240,88 Q234,76 228,66 Q236,72 242,84 Z" fill="#4a2020" opacity="0.45"/>
<path d="M272,90 Q278,70 286,54 Q284,72 280,88 Q277,93 274,93 Z" fill="#2a1212"/>
<path d="M274,86 Q278,74 282,64 Q280,76 277,86 Z" fill="#4a2020" opacity="0.4"/>
<!-- a smaller pair of jaw horns -->
<path d="M246,124 Q240,132 236,140 Q244,134 250,128 Z" fill="#2a1212" opacity="0.8"/>

<!-- nostrils, set at the tip of the snout where they belong -->
<path d="M304,120 Q308,118 310,121 Q308,124 304,123 Z" fill="#ff2200" opacity="0.35"/>
<path d="M306,127 Q310,125 312,128 Q310,131 306,130 Z" fill="#ff2200" opacity="0.3"/>
<!-- smoke curling out of them -->
<circle cx="310" cy="118" r="3" fill="#4a4a4a" opacity="0.2">
  <animate attributeName="cy" values="118;102;86" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="4s" repeatCount="indefinite"/>
</circle>
<circle cx="314" cy="126" r="3" fill="#4a4a4a" opacity="0.2">
  <animate attributeName="cy" values="126;108;90" dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="3.5s" begin="0.5s" repeatCount="indefinite"/>
</circle>

<!-- ====================================================================
     THE EYES. The best thing in this location. A reptile eye is an ALMOND
     with a vertical slit, set under the brow, and the glow spills onto the
     scale around it.
     ==================================================================== -->
<circle cx="252" cy="108" r="13" fill="#ff2200" opacity="0.14" filter="url(#lairFireGlow1)"/>
<circle cx="279" cy="107" r="13" fill="#ff2200" opacity="0.14" filter="url(#lairFireGlow1)"/>
<path d="M245,108 Q251,101 259,106 Q253,113 245,108 Z" fill="#ff2200" opacity="0.92">
  <animate attributeName="opacity" values="0.72;1;0.72" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M272,107 Q278,100 286,105 Q280,112 272,107 Z" fill="#ff2200" opacity="0.92">
  <animate attributeName="opacity" values="0.72;1;0.72" dur="3.4s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M251,103 Q253,108 251,112 Q249,108 251,103 Z" fill="#ffaa00" opacity="0.7"/>
<path d="M278,102 Q280,107 278,111 Q276,107 278,102 Z" fill="#ffaa00" opacity="0.7"/>

<!-- ====================================================================
     TORCHES. A flame is a teardrop that leans and licks, not an ellipse.
     ==================================================================== -->
<path d="M49,102 L55,102 Q56,102 56,104 L55,120 L49,120 L48,104 Q48,102 49,102 Z" fill="#6a4a20"/>
<path d="M48,102 Q52,99 56,102 Q52,104 48,102 Z" fill="#8a6430" opacity="0.6"/>
<path d="M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z;M52,84 Q62,96 59,105 Q57,112 52,112 Q47,112 45,105 Q43,96 52,84 Z;M52,90 Q59,99 57,105 Q55,112 52,112 Q49,112 47,105 Q45,99 52,90 Z;M52,88 Q60,98 58,105 Q56,112 52,112 Q48,112 46,105 Q44,98 52,88 Z" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z;M52,91 Q57,100 56,106 Q54,110 52,110 Q50,110 48,106 Q47,100 52,91 Z;M52,96 Q55,102 54,106 Q53,110 52,110 Q51,110 50,106 Q49,102 52,96 Z;M52,94 Q56,101 55,106 Q53,110 52,110 Q51,110 49,106 Q48,101 52,94 Z" dur="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M445,102 L451,102 Q452,102 452,104 L451,120 L445,120 L444,104 Q444,102 445,102 Z" fill="#6a4a20"/>
<path d="M444,102 Q448,99 452,102 Q448,104 444,102 Z" fill="#8a6430" opacity="0.6"/>
<path d="M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z;M448,91 Q455,99 453,105 Q451,112 448,112 Q445,112 443,105 Q441,99 448,91 Z;M448,84 Q458,96 455,105 Q453,112 448,112 Q443,112 441,105 Q439,96 448,84 Z;M448,88 Q456,98 454,105 Q452,112 448,112 Q444,112 442,105 Q440,98 448,88 Z" dur="2.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z;M448,96 Q451,102 450,106 Q449,110 448,110 Q447,110 446,106 Q445,102 448,96 Z;M448,91 Q453,100 452,106 Q450,110 448,110 Q446,110 444,106 Q443,100 448,91 Z;M448,94 Q452,101 451,106 Q449,110 448,110 Q447,110 445,106 Q444,101 448,94 Z" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- pools of torchlight on the wall behind each bracket -->
<path d="M38,90 Q52,80 66,90 Q68,108 52,118 Q36,108 38,90 Z" fill="#ff6622" opacity="0.05"/>
<path d="M434,90 Q448,80 462,90 Q464,108 448,118 Q432,108 434,90 Z" fill="#ff6622" opacity="0.05"/>
</svg>`;

// Scene 2: Dragon speaks, challenges the solver — reuse dragon chamber scene
STORY_SCENES['lair_2'] = STORY_SCENES['lair_1'];

// Scene 3: Puzzle — "Tough about love, a dragon's pile (5)" HOARD on scorched scroll
STORY_SCENES['lair_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow1" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.08"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairVellum1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b4a074"/><stop offset="10%" stop-color="#e8d8b0"/><stop offset="50%" stop-color="#f0e4c4"/><stop offset="90%" stop-color="#e8d8b0"/><stop offset="100%" stop-color="#b4a074"/>
  </linearGradient>
  <linearGradient id="lairRoller1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#3a2810"/><stop offset="35%" stop-color="#8a6430"/><stop offset="70%" stop-color="#6a4a20"/><stop offset="100%" stop-color="#2e1e08"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll1)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow1)"/>

<!-- ====================================================================
     THE SCROLL. A rounded rect is a sheet of paper, not a scroll. Vellum
     held open between two rollers SAGS between them, so its top edge dips
     and its bottom edge bows out. It CURLS back into each roller, which
     shows as a lit inner face. And it has been in a dragon's fire, so the
     free edges are eaten away in a ragged bite rather than cut straight.
     Drawn back to front: sag shadow, sheet, curls, burn, rollers, text.
     ==================================================================== -->
<!-- the shadow the hanging sheet throws on the rock behind it -->
<path d="M84,46 Q250,38 416,46 Q424,132 416,226 Q250,236 84,226 Q76,132 84,46 Z" fill="#0e0404" opacity="0.55"/>
<!-- the sheet: top edge dips, bottom edge bows, edges bitten by fire -->
<path d="M86,44 Q140,54 190,50 Q250,45 312,50 Q364,54 414,44 Q420,72 417,96 Q422,118 416,140 Q421,170 415,196 Q418,212 414,222 Q360,212 306,217 Q250,222 192,217 Q138,212 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="url(#lairVellum1)" opacity="0.94"/>
<!-- the CURL back into each roller: a lit inner face and a shadowed fold -->
<path d="M86,44 Q78,46 76,60 Q74,132 76,206 Q78,220 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M86,44 Q80,50 79,62 Q78,132 80,204 Q81,216 86,222 Q84,206 84,140 Q84,80 86,44 Z" fill="#9c8a62" opacity="0.55"/>
<path d="M414,44 Q422,46 424,60 Q426,132 424,206 Q422,220 414,222 Q418,212 415,196 Q421,170 416,140 Q422,118 417,96 Q420,72 414,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M414,44 Q420,50 421,62 Q422,132 420,204 Q419,216 414,222 Q416,206 416,140 Q416,80 414,44 Z" fill="#9c8a62" opacity="0.55"/>
<!-- a fold running down the sheet where it has been rolled and rolled -->
<path d="M148,49 Q145,132 148,218" fill="none" stroke="#c4b088" stroke-width="1.6" opacity="0.45"/>
<path d="M352,49 Q355,132 352,218" fill="none" stroke="#c4b088" stroke-width="1.4" opacity="0.4"/>
<!-- ====================================================================
     BURN. Fire eats INWARD from an edge: a brown scorch halo, then a
     charred black rim, then nothing. This is the FIRST clue, so the
     damage is light: a bite out of two corners and a few sparks' worth.
     ==================================================================== -->
<path d="M86,44 Q104,52 96,66 Q108,78 98,92 Q86,86 84,68 Q82,54 86,44 Z" fill="#8a6030" opacity="0.35"/>
<path d="M86,44 Q98,50 92,60 Q100,70 94,80 Q86,74 85,60 Z" fill="#4a3010" opacity="0.4"/>
<path d="M414,44 Q396,52 404,66 Q392,78 402,92 Q414,86 416,68 Q418,54 414,44 Z" fill="#8a6030" opacity="0.35"/>
<path d="M414,44 Q402,50 408,60 Q400,70 406,80 Q414,74 415,60 Z" fill="#4a3010" opacity="0.4"/>
<path d="M86,222 Q102,214 94,202 Q104,192 96,182 Q86,190 84,204 Z" fill="#8a6030" opacity="0.3"/>
<path d="M414,222 Q398,214 406,202 Q396,192 404,182 Q414,190 416,204 Z" fill="#8a6030" opacity="0.3"/>
<!-- scorch blooms where embers landed on the face of the sheet -->
<path d="M110,58 Q126,50 140,60 Q146,74 134,84 Q116,88 108,76 Q104,64 110,58 Z" fill="#6a4a20" opacity="0.14"/>
<path d="M116,64 Q126,60 134,68 Q132,76 122,78 Q114,72 116,64 Z" fill="#4a3010" opacity="0.12"/>
<path d="M370,182 Q384,176 394,186 Q398,198 386,204 Q372,206 366,196 Q364,186 370,182 Z" fill="#6a4a20" opacity="0.12"/>
<path d="M340,52 Q352,48 360,56 Q362,66 352,70 Q340,70 336,62 Z" fill="#6a4a20" opacity="0.1"/>

<!-- ====================================================================
     ROLLERS. A turned wooden roller is a cylinder: lit down one side,
     dark on the other, with a knob finial at each end.
     ==================================================================== -->
<path d="M70,42 Q70,38 76,38 Q82,38 82,42 L82,224 Q82,228 76,228 Q70,228 70,224 Z" fill="url(#lairRoller1)"/>
<path d="M73,40 Q75,39 77,40 L77,226 Q75,227 73,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,36 Q66,30 76,30 Q86,30 86,36 Q86,42 76,42 Q66,42 66,36 Z" fill="#6a4a20"/>
<path d="M70,34 Q74,32 80,33 Q76,36 70,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,230 Q66,224 76,224 Q86,224 86,230 Q86,236 76,236 Q66,236 66,230 Z" fill="#6a4a20"/>
<path d="M70,228 Q74,226 80,227 Q76,230 70,231 Z" fill="#a5793c" opacity="0.45"/>
<path d="M418,42 Q418,38 424,38 Q430,38 430,42 L430,224 Q430,228 424,228 Q418,228 418,224 Z" fill="url(#lairRoller1)"/>
<path d="M421,40 Q423,39 425,40 L425,226 Q423,227 421,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,36 Q414,30 424,30 Q434,30 434,36 Q434,42 424,42 Q414,42 414,36 Z" fill="#6a4a20"/>
<path d="M418,34 Q422,32 428,33 Q424,36 418,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,230 Q414,224 424,224 Q434,224 434,230 Q434,236 424,236 Q424,236 414,230 Z" fill="#6a4a20"/>

<!-- Header, rule, and the clue. Text unchanged. -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S FIRST CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#2a1a10" stroke-width="0.7" opacity="0.3"/>
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"Tough about love,</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">a dragon's pile (5)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M46,130 Q51,125 58,129 Q52,135 46,130 Z" fill="#ff2200" opacity="0.42">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M51,127 Q53,130 51,133 Q49,130 51,127 Z" fill="#ffaa00" opacity="0.45"/>
<path d="M442,130 Q447,125 454,129 Q448,135 442,130 Z" fill="#ff2200" opacity="0.42">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M447,127 Q449,130 447,133 Q445,130 447,127 Z" fill="#ffaa00" opacity="0.45"/>

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="26" cy="176" r="1.1" fill="#ff8844" opacity="0.28">
  <animate attributeName="cy" values="176;148;120" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.28;0.12;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 4: Dragon responds, impressed — reuse dragon chamber scene
STORY_SCENES['lair_4'] = STORY_SCENES['lair_1'];

// Scene 5: Puzzle — "Iron fen forged into a blaze (7)" INFERNO on scorched scroll
STORY_SCENES['lair_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow2" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairVellum2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b4a074"/><stop offset="10%" stop-color="#e8d8b0"/><stop offset="50%" stop-color="#f0e4c4"/><stop offset="90%" stop-color="#e8d8b0"/><stop offset="100%" stop-color="#b4a074"/>
  </linearGradient>
  <linearGradient id="lairRoller2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#3a2810"/><stop offset="35%" stop-color="#8a6430"/><stop offset="70%" stop-color="#6a4a20"/><stop offset="100%" stop-color="#2e1e08"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll2)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow2)"/>

<!-- ====================================================================
     THE SCROLL. A rounded rect is a sheet of paper, not a scroll. Vellum
     held open between two rollers SAGS between them, so its top edge dips
     and its bottom edge bows out. It CURLS back into each roller, which
     shows as a lit inner face. And it has been in a dragon's fire, so the
     free edges are eaten away in a ragged bite rather than cut straight.
     Drawn back to front: sag shadow, sheet, curls, burn, rollers, text.
     This is the SECOND clue, so the fire has taken more of it.
     ==================================================================== -->
<!-- the shadow the hanging sheet throws on the rock behind it -->
<path d="M84,46 Q250,38 416,46 Q424,132 416,226 Q250,236 84,226 Q76,132 84,46 Z" fill="#0e0404" opacity="0.55"/>
<!-- the sheet: top edge dips, bottom edge bows, edges bitten by fire -->
<path d="M86,44 Q140,54 190,50 Q250,45 312,50 Q364,54 414,44 Q420,72 417,96 Q422,118 416,140 Q421,170 415,196 Q418,212 414,222 Q360,212 306,217 Q250,222 192,217 Q138,212 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="url(#lairVellum2)" opacity="0.94"/>
<!-- the CURL back into each roller: a lit inner face and a shadowed fold -->
<path d="M86,44 Q78,46 76,60 Q74,132 76,206 Q78,220 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M86,44 Q80,50 79,62 Q78,132 80,204 Q81,216 86,222 Q84,206 84,140 Q84,80 86,44 Z" fill="#9c8a62" opacity="0.55"/>
<path d="M414,44 Q422,46 424,60 Q426,132 424,206 Q422,220 414,222 Q418,212 415,196 Q421,170 416,140 Q422,118 417,96 Q420,72 414,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M414,44 Q420,50 421,62 Q422,132 420,204 Q419,216 414,222 Q416,206 416,140 Q416,80 414,44 Z" fill="#9c8a62" opacity="0.55"/>
<!-- a fold running down the sheet where it has been rolled and rolled -->
<path d="M148,49 Q145,132 148,218" fill="none" stroke="#c4b088" stroke-width="1.6" opacity="0.45"/>
<path d="M352,49 Q355,132 352,218" fill="none" stroke="#c4b088" stroke-width="1.4" opacity="0.4"/>
<!-- ====================================================================
     BURN. Fire eats INWARD from an edge: a brown scorch halo, then a
     charred black rim, then nothing. Deeper bites than the first clue,
     and the char has begun to eat toward the writing.
     ==================================================================== -->
<path d="M86,44 Q112,54 102,70 Q116,86 104,104 Q88,96 84,72 Q81,54 86,44 Z" fill="#8a6030" opacity="0.42"/>
<path d="M86,44 Q104,52 96,66 Q106,80 98,94 Q87,86 85,66 Z" fill="#4a3010" opacity="0.5"/>
<path d="M414,44 Q388,54 398,70 Q384,86 396,104 Q412,96 416,72 Q419,54 414,44 Z" fill="#8a6030" opacity="0.42"/>
<path d="M414,44 Q396,52 404,66 Q394,80 402,94 Q413,86 415,66 Z" fill="#4a3010" opacity="0.5"/>
<path d="M86,222 Q108,212 98,196 Q110,182 100,168 Q86,180 83,200 Z" fill="#8a6030" opacity="0.38"/>
<path d="M414,222 Q392,212 402,196 Q390,182 400,168 Q414,180 417,200 Z" fill="#8a6030" opacity="0.38"/>
<!-- scorch blooms where embers landed on the face of the sheet -->
<path d="M110,58 Q126,50 140,60 Q146,74 134,84 Q116,88 108,76 Q104,64 110,58 Z" fill="#6a4a20" opacity="0.14"/>
<path d="M116,64 Q126,60 134,68 Q132,76 122,78 Q114,72 116,64 Z" fill="#4a3010" opacity="0.12"/>
<path d="M370,182 Q384,176 394,186 Q398,198 386,204 Q372,206 366,196 Q364,186 370,182 Z" fill="#6a4a20" opacity="0.12"/>
<path d="M336,50 Q352,44 364,54 Q368,68 356,76 Q338,78 332,66 Q330,54 336,50 Z" fill="#6a4a20" opacity="0.16"/>
<path d="M342,56 Q352,52 358,60 Q356,68 346,70 Q340,64 342,56 Z" fill="#4a3010" opacity="0.13"/>
<path d="M124,186 Q140,180 152,190 Q156,202 144,210 Q128,212 122,200 Q120,190 124,186 Z" fill="#6a4a20" opacity="0.15"/>
<path d="M242,206 Q256,202 264,210 Q262,220 250,222 Q240,218 242,206 Z" fill="#6a4a20" opacity="0.1"/>

<!-- ====================================================================
     ROLLERS. A turned wooden roller is a cylinder: lit down one side,
     dark on the other, with a knob finial at each end.
     ==================================================================== -->
<path d="M70,42 Q70,38 76,38 Q82,38 82,42 L82,224 Q82,228 76,228 Q70,228 70,224 Z" fill="url(#lairRoller2)"/>
<path d="M73,40 Q75,39 77,40 L77,226 Q75,227 73,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,36 Q66,30 76,30 Q86,30 86,36 Q86,42 76,42 Q66,42 66,36 Z" fill="#6a4a20"/>
<path d="M70,34 Q74,32 80,33 Q76,36 70,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,230 Q66,224 76,224 Q86,224 86,230 Q86,236 76,236 Q66,236 66,230 Z" fill="#6a4a20"/>
<path d="M70,228 Q74,226 80,227 Q76,230 70,231 Z" fill="#a5793c" opacity="0.45"/>
<path d="M418,42 Q418,38 424,38 Q430,38 430,42 L430,224 Q430,228 424,228 Q418,228 418,224 Z" fill="url(#lairRoller2)"/>
<path d="M421,40 Q423,39 425,40 L425,226 Q423,227 421,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,36 Q414,30 424,30 Q434,30 434,36 Q434,42 424,42 Q414,42 414,36 Z" fill="#6a4a20"/>
<path d="M418,34 Q422,32 428,33 Q424,36 418,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,230 Q414,224 424,224 Q434,224 434,230 Q434,236 424,236 Q424,236 414,230 Z" fill="#6a4a20"/>

<!-- Header, rule, and the clue. Text unchanged. -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S SECOND CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#2a1a10" stroke-width="0.7" opacity="0.3"/>
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"Iron fen forged</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">into a blaze (7)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M40,126 Q46,120 54,125 Q47,132 40,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M46,122 Q48,126 46,130 Q44,126 46,122 Z" fill="#ffaa00" opacity="0.55"/>
<path d="M446,126 Q452,120 460,125 Q453,132 446,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M452,122 Q454,126 452,130 Q450,126 452,122 Z" fill="#ffaa00" opacity="0.55"/>

<!-- claw scratches gouged in the floor beneath the scroll -->
<path d="M180,238 Q190,244 200,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M190,238 Q200,244 210,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M200,238 Q210,244 220,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M290,238 Q300,244 310,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M300,238 Q310,244 320,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M310,238 Q320,244 330,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="250" r="1.5" fill="#ff8844" opacity="0.32">
  <animate attributeName="cy" values="250;214;178" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.32;0.14;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 6: Dragon prepares final challenge — dragon risen, wings spread
STORY_SCENES['lair_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairRise" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="40%" stop-color="#2a1010"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairDrGlow6" cx="50%" cy="45%" r="50%">
    <stop offset="0%" stop-color="#ff2200" stop-opacity="0.15"/><stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairHide6" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#3a1616"/><stop offset="100%" stop-color="#140606"/>
  </linearGradient>
  <linearGradient id="lairMembrane6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a1010"/><stop offset="100%" stop-color="#100606"/>
  </linearGradient>
  <filter id="lairFireGlow6"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="500" height="260" fill="url(#lairRise)"/>

<!-- Cavern walls: faceted planes -->
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L28,170 L12,204 L30,238 L16,260 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L22,26 L8,62 L26,96 L10,134 L14,140 L4,102 L18,66 L2,30 L0,10 Z" fill="#3e221c" opacity="0.5"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L472,170 L488,204 L470,238 L484,260 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L478,26 L492,62 L474,96 L490,134 L486,140 L482,100 L496,64 L482,28 L500,8 Z" fill="#3e221c" opacity="0.42"/>
<!-- Stalactites -->
<path d="M80,0 Q85,-2 90,0 Q88,20 85,40 Q83,20 80,0 Z" fill="#2a1814"/>
<path d="M83,2 Q85,1 87,2 Q86,20 85,34 Q84,20 83,2 Z" fill="#432420" opacity="0.5"/>
<path d="M180,0 Q184,-2 188,0 Q186,18 184,34 Q182,18 180,0 Z" fill="#2a1814"/>
<path d="M300,0 Q305,-2 310,0 Q308,24 305,46 Q303,24 300,0 Z" fill="#2a1814"/>
<path d="M303,2 Q305,1 307,2 Q306,24 305,40 Q304,24 303,2 Z" fill="#432420" opacity="0.5"/>
<path d="M420,0 Q424,-2 428,0 Q426,20 424,38 Q422,20 420,0 Z" fill="#2a1814"/>

<!-- Floor -->
<path d="M0,238 Q60,231 128,235 Q200,239 250,232 Q320,227 396,234 Q452,238 500,233 L500,260 L0,260 Z" fill="#1a0a08"/>
<path d="M0,249 Q100,243 200,247 Q300,251 400,245 Q456,249 500,245 L500,260 L0,260 Z" fill="#120606"/>

<!-- Dragon aura, intensified -->
<circle cx="250" cy="120" r="110" fill="url(#lairDrGlow6)"/>

<!-- ====================================================================
     LIAM RISEN. Same animal as the chamber, reared up: the wings are OPEN
     now, so the membrane spans between splayed finger bones and the
     trailing edge scallops deeply between each one. A spread wing reads by
     its ribs; without them it is a cape.
     ==================================================================== -->
<!-- far wing (his right, our left), spread -->
<path d="M196,138 Q152,86 88,88 Q54,92 44,116 Q66,110 84,124 Q92,108 110,124 Q120,110 138,130 Q150,118 166,140 Q180,132 196,146 Z" fill="url(#lairMembrane6)" opacity="0.92"/>
<path d="M196,138 Q150,96 88,88" fill="none" stroke="#4a1e1e" stroke-width="1.6" opacity="0.6"/>
<path d="M192,141 Q160,116 166,140" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.45"/>
<path d="M186,140 Q140,110 138,130" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.42"/>
<path d="M178,136 Q118,102 110,124" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.4"/>
<path d="M168,130 Q98,92 84,124" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.38"/>
<path d="M148,116 Q80,88 44,116" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.35"/>
<!-- wing claw at the leading edge -->
<path d="M88,88 Q74,80 62,82 Q72,90 86,94 Z" fill="#2a1212" opacity="0.9"/>

<!-- near wing (his left, our right), spread -->
<path d="M304,138 Q348,86 412,88 Q446,92 456,116 Q434,110 416,124 Q408,108 390,124 Q380,110 362,130 Q350,118 334,140 Q320,132 304,146 Z" fill="url(#lairMembrane6)" opacity="0.92"/>
<path d="M304,138 Q350,96 412,88" fill="none" stroke="#4a1e1e" stroke-width="1.6" opacity="0.6"/>
<path d="M308,141 Q340,116 334,140" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.45"/>
<path d="M314,140 Q360,110 362,130" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.42"/>
<path d="M322,136 Q382,102 390,124" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.4"/>
<path d="M332,130 Q402,92 416,124" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.38"/>
<path d="M352,116 Q420,88 456,116" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.35"/>
<path d="M412,88 Q426,80 438,82 Q428,90 414,94 Z" fill="#2a1212" opacity="0.9"/>

<!-- tail, thrown out behind and curling up as he rears -->
<path d="M290,206 Q334,204 368,214 Q398,224 416,242 Q396,246 376,236 Q350,224 322,219 Q302,216 288,218 Z" fill="#1a0808"/>
<path d="M294,209 Q334,208 366,217 Q392,226 408,240" fill="none" stroke="#3e1818" stroke-width="1.2" opacity="0.4"/>
<path d="M416,242 Q430,234 442,240 Q436,250 422,250 Q414,248 416,242 Z" fill="#2a1212" opacity="0.85"/>

<!-- haunch and body: reared, so the chest rides higher and the belly shows -->
<path d="M268,178 Q296,172 310,190 Q316,208 302,222 Q280,232 264,218 Q256,198 268,178 Z" fill="#1a0808"/>
<path d="M202,178 Q204,152 230,143 Q262,134 290,148 Q312,161 310,188 Q306,212 278,222 Q240,228 214,212 Q198,198 202,178 Z" fill="url(#lairHide6)"/>
<path d="M216,210 Q244,220 278,214 Q276,220 254,224 Q228,223 216,210 Z" fill="#4a1c18" opacity="0.45"/>
<path d="M220,200 Q248,209 276,204" fill="none" stroke="#4a1c18" stroke-width="1.2" opacity="0.3"/>
<!-- forelegs, raised as he rises, ending in claws -->
<path d="M222,190 Q210,202 202,216 Q206,222 214,220 Q220,206 232,196 Z" fill="#1a0808"/>
<path d="M198,216 Q208,212 218,218 Q216,224 206,224 Q196,222 198,216 Z" fill="#2a1212"/>
<path d="M198,222 Q196,227 193,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
<path d="M206,224 Q205,229 203,231" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
<path d="M214,222 Q215,227 214,229" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>

<!-- neck, longer and straighter in the rearing pose -->
<path d="M228,148 Q222,120 232,100 Q244,86 262,88 Q276,94 276,114 Q274,136 260,150 Q242,158 228,148 Z" fill="url(#lairHide6)"/>
<path d="M232,100 Q228,90 230,80 Q237,88 240,98 Z" fill="#2a1212"/>
<path d="M242,90 Q239,80 243,70 Q249,79 250,89 Z" fill="#2a1212"/>
<path d="M256,86 Q254,76 259,67 Q264,76 264,86 Z" fill="#2a1212" opacity="0.9"/>

<!-- ====================================================================
     HEAD, raised and turned so the snout points across the chamber, which
     is what lets the fire actually come out of his mouth.
     ==================================================================== -->
<path d="M234,88 Q232,72 245,66 Q264,58 281,65 Q296,72 302,86 Q308,97 302,105 L272,113 Q250,115 238,106 Q232,98 234,88 Z" fill="url(#lairHide6)"/>
<!-- snout -->
<path d="M284,86 Q304,84 317,93 Q324,100 320,109 Q306,116 289,111 Q280,101 284,86 Z" fill="#241010"/>
<!-- the jaw, OPEN: a dark gape with teeth, so the breath has somewhere to -->
<!-- come from. A closed mouth breathing fire is the tell of a diagram. -->
<path d="M290,110 Q306,114 320,109 Q324,118 314,124 Q298,126 288,120 Q285,114 290,110 Z" fill="#0e0404"/>
<path d="M294,113 L297,119 L300,113 Z" fill="#e8d8c0" opacity="0.7"/>
<path d="M303,114 L306,120 L309,114 Z" fill="#e8d8c0" opacity="0.65"/>
<path d="M312,113 L314,118 L317,112 Z" fill="#e8d8c0" opacity="0.6"/>
<path d="M292,121 L295,116 L298,122 Z" fill="#e8d8c0" opacity="0.5"/>
<path d="M304,123 L307,118 L310,124 Z" fill="#e8d8c0" opacity="0.45"/>
<path d="M242,106 Q264,116 288,118" fill="none" stroke="#4a1e1e" stroke-width="1.2" opacity="0.5"/>
<!-- brow ridges -->
<path d="M238,80 Q250,74 262,78 Q252,80 242,84 Z" fill="#2a1212"/>
<path d="M266,76 Q278,72 288,78 Q278,79 268,82 Z" fill="#2a1212" opacity="0.9"/>
<!-- horns swept back -->
<path d="M242,72 Q230,50 218,32 Q234,42 246,62 Q248,68 246,72 Z" fill="#2a1212"/>
<path d="M238,66 Q231,52 224,40 Q233,48 240,62 Z" fill="#4a2020" opacity="0.45"/>
<path d="M272,68 Q280,46 290,28 Q287,48 282,66 Q279,71 275,71 Z" fill="#2a1212"/>
<path d="M275,64 Q280,50 285,38 Q282,52 278,64 Z" fill="#4a2020" opacity="0.4"/>
<path d="M246,102 Q240,110 236,118 Q244,112 250,106 Z" fill="#2a1212" opacity="0.8"/>

<!-- nostrils, flared, glowing with what is coming -->
<path d="M308,96 Q313,94 315,98 Q312,101 308,100 Z" fill="#ff4400" opacity="0.6">
  <animate attributeName="opacity" values="0.4;0.75;0.4" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M311,103 Q316,101 318,105 Q315,108 311,107 Z" fill="#ff4400" opacity="0.55">
  <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- Eyes: almond, slit, glowing -->
<circle cx="250" cy="85" r="13" fill="#ff2200" opacity="0.18" filter="url(#lairFireGlow6)"/>
<circle cx="277" cy="84" r="13" fill="#ff2200" opacity="0.18" filter="url(#lairFireGlow6)"/>
<path d="M243,85 Q249,77 258,83 Q251,91 243,85 Z" fill="#ff2200" opacity="0.96">
  <animate attributeName="opacity" values="0.82;1;0.82" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M270,84 Q276,76 285,82 Q278,90 270,84 Z" fill="#ff2200" opacity="0.96">
  <animate attributeName="opacity" values="0.82;1;0.82" dur="2.3s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M249,79 Q251,85 249,90 Q247,85 249,79 Z" fill="#ffaa00" opacity="0.78"/>
<path d="M276,78 Q278,84 276,89 Q274,84 276,78 Z" fill="#ffaa00" opacity="0.78"/>

<!-- ====================================================================
     THE FIRE. Flame is not a blade. It leaves the jaw narrow and hot, and
     as it travels it BREAKS UP: the outline goes ragged with tongues, the
     colour cools from white through orange to smoke, and each layer is
     translucent so the wall shows through. Three nested plumes, the
     brightest smallest and nearest the mouth.
     ==================================================================== -->
<!-- outer plume: broad, cool, ragged, and very transparent -->
<path d="M320,116 Q356,110 388,96 Q414,84 440,66 Q430,84 442,78 Q428,96 440,94 Q420,110 432,110 Q408,120 418,124 Q392,130 400,138 Q372,136 344,130 Q326,126 320,116 Z" fill="#ff4400" opacity="0.16">
  <animate attributeName="opacity" values="0.1;0.24;0.1" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- middle plume: the body of the flame -->
<path d="M319,115 Q350,110 378,98 Q400,88 422,72 Q414,88 424,84 Q410,100 420,98 Q400,112 410,113 Q388,121 396,127 Q370,126 346,120 Q326,116 319,115 Z" fill="#ff6622" opacity="0.3">
  <animate attributeName="opacity" values="0.18;0.44;0.18" dur="1.4s" begin="0.15s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- hot core: short, and it stops well before the plume does -->
<path d="M318,114 Q338,111 356,104 Q372,97 386,86 Q381,97 388,94 Q378,106 386,105 Q370,114 376,116 Q356,118 338,116 Q324,114 318,114 Z" fill="#ffaa44" opacity="0.36">
  <animate attributeName="opacity" values="0.22;0.5;0.22" dur="1.1s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the white-hot jet right at the teeth, where it is still a jet -->
<path d="M317,114 Q328,112 338,107 Q348,102 356,94 Q353,103 349,108 Q340,114 330,117 Q322,117 317,114 Z" fill="#ffdd88" opacity="0.42">
  <animate attributeName="opacity" values="0.28;0.58;0.28" dur="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- sparks torn off the flame front and thrown on -->
<circle cx="396" cy="90" r="1.6" fill="#ffcc66" opacity="0.6">
  <animate attributeName="cx" values="396;438;466" dur="1.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="90;66;50" dur="1.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.6;0.3;0" dur="1.4s" repeatCount="indefinite"/>
</circle>
<circle cx="372" cy="102" r="1.3" fill="#ffaa44" opacity="0.55">
  <animate attributeName="cx" values="372;424;458" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="102;74;54" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.55;0.25;0" dur="1.9s" begin="0.4s" repeatCount="indefinite"/>
</circle>
<circle cx="386" cy="112" r="1.1" fill="#ff8844" opacity="0.45">
  <animate attributeName="cx" values="386;430;452" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="112;88;72" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.45;0.2;0" dur="2.3s" begin="0.9s" repeatCount="indefinite"/>
</circle>
<!-- smoke peeling off the cooling tail of the plume -->
<circle cx="424" cy="96" r="5" fill="#4a3a34" opacity="0.16">
  <animate attributeName="cx" values="424;446;464" dur="3.4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="96;74;56" dur="3.4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.16;0.08;0" dur="3.4s" repeatCount="indefinite"/>
</circle>
<!-- the wall glowing where the fire washes it -->
<path d="M448,42 Q472,32 492,48 Q490,76 464,88 Q442,74 448,42 Z" fill="#ff6622" opacity="0.11">
  <animate attributeName="opacity" values="0.06;0.17;0.06" dur="1.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     TORCHES. Teardrop flames, guttering in the draught he has stirred up.
     ==================================================================== -->
<path d="M29,152 L35,152 Q36,152 36,154 L35,170 L29,170 L28,154 Q28,152 29,152 Z" fill="#6a4a20"/>
<path d="M28,152 Q32,149 36,152 Q32,154 28,152 Z" fill="#8a6430" opacity="0.6"/>
<path d="M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z;M32,131 Q43,146 40,156 Q38,163 32,163 Q26,163 24,156 Q21,146 32,131 Z;M32,139 Q40,149 38,156 Q36,163 32,163 Q28,163 26,156 Q24,149 32,139 Z;M32,136 Q41,148 39,156 Q37,163 32,163 Q27,163 25,156 Q23,148 32,136 Z" dur="1.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z" fill="#ffaa44" opacity="0.55">
  <animate attributeName="d" values="M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z;M32,140 Q38,150 37,157 Q35,161 32,161 Q29,161 27,157 Q26,150 32,140 Z;M32,146 Q36,152 35,157 Q34,161 32,161 Q30,161 29,157 Q28,152 32,146 Z;M32,143 Q37,151 36,157 Q34,161 32,161 Q30,161 28,157 Q27,151 32,143 Z" dur="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M465,152 L471,152 Q472,152 472,154 L471,170 L465,170 L464,154 Q464,152 465,152 Z" fill="#6a4a20"/>
<path d="M464,152 Q468,149 472,152 Q468,154 464,152 Z" fill="#8a6430" opacity="0.6"/>
<path d="M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z" fill="#ff6622" opacity="0.72">
  <animate attributeName="d" values="M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z;M468,140 Q476,149 474,156 Q472,163 468,163 Q464,163 462,156 Q460,149 468,140 Z;M468,131 Q479,146 476,156 Q474,163 468,163 Q462,163 460,156 Q457,146 468,131 Z;M468,136 Q477,148 475,156 Q473,163 468,163 Q463,163 461,156 Q459,148 468,136 Z" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.34;0.68;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M22,140 Q32,131 42,140 Q44,158 32,168 Q20,158 22,140 Z" fill="#ff6622" opacity="0.05"/>
<path d="M458,140 Q468,131 478,140 Q480,158 468,168 Q456,158 458,140 Z" fill="#ff6622" opacity="0.05"/>

<!-- Lava glow banking up under the floor -->
<path d="M40,258 Q160,242 250,246 Q346,250 460,258 Q346,260 250,260 Q158,260 40,258 Z" fill="#ff2200" opacity="0.08">
  <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`;

// Scene 7: Puzzle — "Riches make one strangely austerer (8)" TREASURE on scorched scroll
STORY_SCENES['lair_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow3" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.12"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairVellum3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#b4a074"/><stop offset="10%" stop-color="#e8d8b0"/><stop offset="50%" stop-color="#f0e4c4"/><stop offset="90%" stop-color="#e8d8b0"/><stop offset="100%" stop-color="#b4a074"/>
  </linearGradient>
  <linearGradient id="lairRoller3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#3a2810"/><stop offset="35%" stop-color="#8a6430"/><stop offset="70%" stop-color="#6a4a20"/><stop offset="100%" stop-color="#2e1e08"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll3)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow3)"/>

<!-- ====================================================================
     THE SCROLL. A rounded rect is a sheet of paper, not a scroll. Vellum
     held open between two rollers SAGS between them, so its top edge dips
     and its bottom edge bows out. It CURLS back into each roller, which
     shows as a lit inner face. And it has been in a dragon's fire, so the
     free edges are eaten away in a ragged bite rather than cut straight.
     Drawn back to front: sag shadow, sheet, curls, burn, rollers, text.
     The FINAL clue: the fire has taken the most of this one, and the
     vellum is scorched almost through in places.
     ==================================================================== -->
<!-- the shadow the hanging sheet throws on the rock behind it -->
<path d="M84,46 Q250,38 416,46 Q424,132 416,226 Q250,236 84,226 Q76,132 84,46 Z" fill="#0e0404" opacity="0.55"/>
<!-- the sheet: top edge dips, bottom edge bows, edges bitten by fire -->
<path d="M86,44 Q140,54 190,50 Q250,45 312,50 Q364,54 414,44 Q420,72 417,96 Q422,118 416,140 Q421,170 415,196 Q418,212 414,222 Q360,212 306,217 Q250,222 192,217 Q138,212 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="url(#lairVellum3)" opacity="0.94"/>
<!-- the CURL back into each roller: a lit inner face and a shadowed fold -->
<path d="M86,44 Q78,46 76,60 Q74,132 76,206 Q78,220 86,222 Q82,208 85,196 Q79,170 84,140 Q78,118 83,96 Q80,72 86,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M86,44 Q80,50 79,62 Q78,132 80,204 Q81,216 86,222 Q84,206 84,140 Q84,80 86,44 Z" fill="#9c8a62" opacity="0.55"/>
<path d="M414,44 Q422,46 424,60 Q426,132 424,206 Q422,220 414,222 Q418,212 415,196 Q421,170 416,140 Q422,118 417,96 Q420,72 414,44 Z" fill="#cbb890" opacity="0.9"/>
<path d="M414,44 Q420,50 421,62 Q422,132 420,204 Q419,216 414,222 Q416,206 416,140 Q416,80 414,44 Z" fill="#9c8a62" opacity="0.55"/>
<!-- a fold running down the sheet where it has been rolled and rolled -->
<path d="M148,49 Q145,132 148,218" fill="none" stroke="#c4b088" stroke-width="1.6" opacity="0.45"/>
<path d="M352,49 Q355,132 352,218" fill="none" stroke="#c4b088" stroke-width="1.4" opacity="0.4"/>
<!-- ====================================================================
     BURN. Fire eats INWARD from an edge: a brown scorch halo, then a
     charred black rim, then nothing. Heaviest damage of the three: the
     bites reach well into the sheet and the char is nearly through.
     ==================================================================== -->
<path d="M86,44 Q120,56 108,74 Q124,92 110,116 Q90,106 83,76 Q79,54 86,44 Z" fill="#6a4020" opacity="0.5"/>
<path d="M86,44 Q110,54 100,70 Q112,86 102,104 Q88,94 85,70 Z" fill="#3a2408" opacity="0.6"/>
<path d="M414,44 Q380,56 392,74 Q376,92 390,116 Q410,106 417,76 Q421,54 414,44 Z" fill="#6a4020" opacity="0.5"/>
<path d="M414,44 Q390,54 400,70 Q388,86 398,104 Q412,94 415,70 Z" fill="#3a2408" opacity="0.6"/>
<path d="M86,222 Q114,210 102,192 Q116,176 104,158 Q86,172 82,196 Z" fill="#6a4020" opacity="0.45"/>
<path d="M414,222 Q386,210 398,192 Q384,176 396,158 Q414,172 418,196 Z" fill="#6a4020" opacity="0.45"/>
<!-- scorch blooms where embers landed on the face of the sheet -->
<path d="M110,58 Q126,50 140,60 Q146,74 134,84 Q116,88 108,76 Q104,64 110,58 Z" fill="#6a4a20" opacity="0.14"/>
<path d="M116,64 Q126,60 134,68 Q132,76 122,78 Q114,72 116,64 Z" fill="#4a3010" opacity="0.12"/>
<path d="M370,182 Q384,176 394,186 Q398,198 386,204 Q372,206 366,196 Q364,186 370,182 Z" fill="#6a4a20" opacity="0.12"/>
<path d="M336,50 Q352,44 364,54 Q368,68 356,76 Q338,78 332,66 Q330,54 336,50 Z" fill="#6a4a20" opacity="0.16"/>
<path d="M342,56 Q352,52 358,60 Q356,68 346,70 Q340,64 342,56 Z" fill="#4a3010" opacity="0.13"/>
<path d="M124,186 Q140,180 152,190 Q156,202 144,210 Q128,212 122,200 Q120,190 124,186 Z" fill="#6a4a20" opacity="0.15"/>
<path d="M242,206 Q256,202 264,210 Q262,220 250,222 Q240,218 242,206 Z" fill="#6a4a20" opacity="0.1"/>

<!-- burned clean through: the dark of the cave shows in the hole, with a
     char ring and a scorch halo round it -->
<path d="M368,60 Q388,50 404,64 Q410,82 396,94 Q374,98 366,84 Q362,68 368,60 Z" fill="#6a4020" opacity="0.3"/>
<path d="M374,64 Q390,57 402,68 Q406,82 394,90 Q377,92 372,80 Q370,70 374,64 Z" fill="#3a2408" opacity="0.55"/>
<path d="M380,68 Q391,64 398,72 Q400,82 391,86 Q381,86 378,78 Q377,71 380,68 Z" fill="#0e0404" opacity="0.85"/>
<path d="M124,182 Q140,175 152,186 Q156,200 144,208 Q128,210 122,198 Q120,187 124,182 Z" fill="#6a4020" opacity="0.26"/>
<path d="M130,187 Q142,182 149,190 Q150,200 141,204 Q130,203 128,195 Z" fill="#3a2408" opacity="0.45"/>
<path d="M134,191 Q142,188 146,193 Q146,199 140,201 Q134,200 133,196 Z" fill="#0e0404" opacity="0.75"/>

<!-- ====================================================================
     ROLLERS. A turned wooden roller is a cylinder: lit down one side,
     dark on the other, with a knob finial at each end.
     ==================================================================== -->
<path d="M70,42 Q70,38 76,38 Q82,38 82,42 L82,224 Q82,228 76,228 Q70,228 70,224 Z" fill="url(#lairRoller3)"/>
<path d="M73,40 Q75,39 77,40 L77,226 Q75,227 73,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,36 Q66,30 76,30 Q86,30 86,36 Q86,42 76,42 Q66,42 66,36 Z" fill="#6a4a20"/>
<path d="M70,34 Q74,32 80,33 Q76,36 70,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M66,230 Q66,224 76,224 Q86,224 86,230 Q86,236 76,236 Q66,236 66,230 Z" fill="#6a4a20"/>
<path d="M70,228 Q74,226 80,227 Q76,230 70,231 Z" fill="#a5793c" opacity="0.45"/>
<path d="M418,42 Q418,38 424,38 Q430,38 430,42 L430,224 Q430,228 424,228 Q418,228 418,224 Z" fill="url(#lairRoller3)"/>
<path d="M421,40 Q423,39 425,40 L425,226 Q423,227 421,226 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,36 Q414,30 424,30 Q434,30 434,36 Q434,42 424,42 Q414,42 414,36 Z" fill="#6a4a20"/>
<path d="M418,34 Q422,32 428,33 Q424,36 418,37 Z" fill="#a5793c" opacity="0.5"/>
<path d="M414,230 Q414,224 424,224 Q434,224 434,230 Q434,236 424,236 Q424,236 414,230 Z" fill="#6a4a20"/>

<!-- Header, rule, and the clue. Text unchanged. -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S FINAL CLUE</text>
<path d="M140,92 Q196,89 250,91 Q304,93 360,90" fill="none" stroke="#2a1a10" stroke-width="0.7" opacity="0.3"/>
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"Riches make one</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">strangely austerer (8)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the final clue</text>

<!-- ====================================================================
     DRAGON EYES watching from the dark either side. Almond and slit, the
     same shape as the chamber, just further off and dimmer.
     ==================================================================== -->
<path d="M40,126 Q46,120 54,125 Q47,132 40,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M46,122 Q48,126 46,130 Q44,126 46,122 Z" fill="#ffaa00" opacity="0.55"/>
<path d="M446,126 Q452,120 460,125 Q453,132 446,126 Z" fill="#ff2200" opacity="0.55">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.4s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M452,122 Q454,126 452,130 Q450,126 452,122 Z" fill="#ffaa00" opacity="0.55"/>

<!-- a second, further pair: a hint of how big he actually is -->
<path d="M22,128 Q27,123 34,127 Q28,133 22,128 Z" fill="#ff2200" opacity="0.32">
  <animate attributeName="opacity" values="0.2;0.44;0.2" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M466,128 Q471,123 478,127 Q472,133 466,128 Z" fill="#ff2200" opacity="0.32">
  <animate attributeName="opacity" values="0.2;0.44;0.2" dur="3.5s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- claw scratches gouged in the floor beneath the scroll -->
<path d="M180,238 Q190,244 200,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M190,238 Q200,244 210,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M200,238 Q210,244 220,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M290,238 Q300,244 310,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.35" stroke-linecap="round"/>
<path d="M300,238 Q310,244 320,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M310,238 Q320,244 330,252" fill="none" stroke="#3a1a10" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>

<!-- Embers drifting up out of the dark -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" begin="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="250" r="1.5" fill="#ff8844" opacity="0.32">
  <animate attributeName="cy" values="250;214;178" dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.32;0.14;0" dur="6.2s" begin="0.7s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 8: Dragon shows respect — reuse dragon chamber scene
STORY_SCENES['lair_8'] = STORY_SCENES['lair_1'];

// Scene 9: Complete — dragon bows, exit opens, warm golden glow
STORY_SCENES['lair_9'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairVictory" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="50%" stop-color="#2a1410"/><stop offset="100%" stop-color="#1a0c08"/>
  </linearGradient>
  <radialGradient id="lairWarmGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lairExitLight" cx="85%" cy="50%" r="25%">
    <stop offset="0%" stop-color="#ffddaa" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffddaa" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairHide9" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0%" stop-color="#1e0a0a"/><stop offset="45%" stop-color="#341414"/><stop offset="100%" stop-color="#140606"/>
  </linearGradient>
  <linearGradient id="lairExitMouth" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2a1410"/><stop offset="55%" stop-color="#8a6a3a"/><stop offset="100%" stop-color="#ffddaa"/>
  </linearGradient>
  <filter id="lairFireGlow9" x="-70%" y="-70%" width="240%" height="240%">
    <feGaussianBlur stdDeviation="2.6"/>
  </filter>
  <radialGradient id="lairAura9" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffaa44" stop-opacity="0.13"/><stop offset="60%" stop-color="#c06a28" stop-opacity="0.05"/><stop offset="100%" stop-color="#c06a28" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="lairTorch9" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="#ff7a18"/><stop offset="55%" stop-color="#ffc24a"/><stop offset="100%" stop-color="#ffe9a8"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#lairVictory)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairWarmGlow)"/>

<!-- Cave walls: faceted planes -->
<path d="M0,0 L18,32 L4,72 L20,112 L6,154 L22,196 L8,236 L0,260 Z" fill="#2a1814"/>
<path d="M0,0 L18,32 L4,72 L20,112 L6,154 L10,160 L0,116 L14,74 L0,34 Z" fill="#3e221c" opacity="0.45"/>
<path d="M500,0 L484,32 L496,72 L480,112 L494,154 L478,196 L490,236 L500,260 Z" fill="#2a1814"/>
<path d="M500,0 L484,32 L496,72 L480,112 L494,154 L490,160 L500,116 L486,74 L500,34 Z" fill="#3e221c" opacity="0.34"/>
<!-- stalactites. A cave ceiling has teeth, and they are what stops the top
     of the frame reading as a lid. Longer at the sides, shorter at centre. -->
<path d="M52,0 L60,0 L57,34 Z" fill="#3a2018"/>
<path d="M92,0 L104,0 L99,54 Z" fill="#42251c"/>
<path d="M148,0 L156,0 L152,26 Z" fill="#3a2018"/>
<path d="M318,0 L328,0 L323,40 Z" fill="#42251c"/>
<path d="M372,0 L380,0 L376,22 Z" fill="#3a2018"/>
<path d="M414,0 L426,0 L420,48 Z" fill="#42251c"/>
<path d="M94,0 L100,0 L98,40 Z" fill="#3e221c" opacity="0.3"/>
<path d="M416,0 L421,0 L419,36 Z" fill="#3e221c" opacity="0.28"/>

<!-- ====================================================================
     THE EXIT. A hole in rock reads by its RIM: the far wall of the tunnel
     is lit by what is beyond it, the near wall is a shadowed lip on the
     opposite side, and the opening is not a smooth ellipse but a broken
     rock arch. The light spills out of it onto the floor.
     ==================================================================== -->
<path d="M420,194 L428,170 L420,146 L432,120 L426,104 L442,88 L458,82 L472,88 L468,100 L484,106 L480,122 L494,142 L488,162 L498,186 L490,198 L462,202 L438,198 Z" fill="#150806"/>
<path d="M430,188 L437,168 L430,148 L440,124 L436,110 L448,96 L460,91 L470,97 L466,108 L479,113 L476,127 L487,145 L482,164 L490,184 L484,193 L460,196 L440,192 Z" fill="url(#lairExitMouth)" opacity="0.75">
  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- shadowed NEAR lip on the left of the hole, lit FAR wall on the right -->
<path d="M420,194 L428,170 L420,146 L432,120 L426,104 L442,88 L458,82 L448,97 L436,110 L440,124 L430,148 L437,168 L430,188 L438,198 Z" fill="#0e0504" opacity="0.85"/>
<path d="M484,106 L480,122 L494,142 L488,162 L498,186 L490,198 L484,193 L490,184 L482,164 L487,145 L476,127 L479,113 L470,97 L472,88 Z" fill="#c9a878" opacity="0.35"/>
<!-- broken teeth of rock round the arch -->
<path d="M436,110 L444,102 L448,114 Z" fill="#2a1814"/>
<path d="M470,90 L478,96 L468,100 Z" fill="#2a1814"/>
<path d="M430,158 L438,152 L440,164 Z" fill="#2a1814" opacity="0.8"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairExitLight)"/>
<!-- the light lying on the floor in front of the opening -->
<path d="M398,240 Q436,224 476,222 Q500,222 500,232 Q464,244 424,250 Q400,250 398,240 Z" fill="#ffddaa" opacity="0.09"/>

<!-- ====================================================================
     THE FLOOR AND THE HOARD. A hoard is a heap: it mounds, and the scrolls
     lie at every angle at every depth, so they overlap and some are half
     buried. Seven identical uprights in a row is a bar chart.
     ==================================================================== -->
<path d="M0,222 Q60,214 132,218 Q214,224 280,216 Q356,209 428,217 Q468,221 500,216 L500,260 L0,260 Z" fill="#241408"/>
<path d="M62,224 Q126,204 208,200 Q296,197 366,208 Q420,217 442,230 Q382,244 288,247 Q186,248 108,240 Q66,234 62,224 Z" fill="#33230f"/>
<path d="M74,226 Q134,210 208,206 Q286,204 350,213" fill="none" stroke="#4e3820" stroke-width="1.4" opacity="0.5"/>

<!-- scrolls: rolled tubes at varying angles, sizes and depths -->
<path d="M62,230 Q58,218 68,213 L82,211 Q89,215 88,225 Q86,235 76,238 Q64,237 62,230 Z" fill="#d4c090" opacity="0.9"/>
<path d="M68,213 Q76,217 76,226 Q75,234 68,238 Q62,237 62,230 Q58,218 68,213 Z" fill="#8e7a52"/>
<path d="M69,221 Q72,225 69,229" fill="none" stroke="#7e6c44" stroke-width="0.9" opacity="0.7"/>
<path d="M96,236 Q91,225 101,219 L114,218 Q121,222 119,232 Q116,241 106,243 Q97,242 96,236 Z" fill="#c8b880" opacity="0.85"/>
<path d="M101,219 Q109,223 108,232 Q107,239 101,243 Q97,242 96,236 Q91,225 101,219 Z" fill="#83704a"/>
<path d="M336,238 Q332,228 341,223 L353,223 Q359,227 357,235 Q354,243 346,244 Q338,243 336,238 Z" fill="#e0d0a0" opacity="0.8"/>
<path d="M341,223 Q348,227 347,234 Q346,241 341,244 Q338,243 336,238 Q332,228 341,223 Z" fill="#94845c"/>
<!-- one lying flat and half unrolled, spilling toward the viewer -->
<path d="M206,232 Q234,224 266,226 Q292,228 300,234 Q268,242 232,241 Q210,239 206,232 Z" fill="#d4c090" opacity="0.72"/>
<path d="M216,231 Q244,226 272,228" fill="none" stroke="#8e7c50" stroke-width="0.9" opacity="0.55"/>
<path d="M222,235 Q248,231 276,233" fill="none" stroke="#8e7c50" stroke-width="0.8" opacity="0.45"/>
<path d="M296,230 Q302,226 306,230 Q302,238 294,238 Q292,234 296,230 Z" fill="#a89468" opacity="0.8"/>
<!-- a taller one standing on end, leaning against the heap -->
<path d="M244,216 Q240,200 248,194 L258,193 Q265,198 263,212 Q260,224 252,226 Q245,224 244,216 Z" fill="#d4c090" opacity="0.85"/>
<path d="M248,194 Q255,199 254,211 Q253,222 248,226 Q245,224 244,216 Q240,200 248,194 Z" fill="#8e7a52"/>
<path d="M249,205 Q252,210 249,215" fill="none" stroke="#7e6c44" stroke-width="0.9" opacity="0.65"/>
<path d="M318,222 Q314,210 324,205 L337,204 Q344,208 342,218 Q339,228 329,230 Q320,229 318,222 Z" fill="#c8b880" opacity="0.85"/>
<path d="M324,205 Q332,209 331,218 Q330,226 324,230 Q320,229 318,222 Q314,210 324,205 Z" fill="#83704a"/>
<path d="M356,226 Q353,216 361,212 L372,212 Q377,216 375,223 Q372,230 365,232 Q357,231 356,226 Z" fill="#d4c090" opacity="0.75"/>
<path d="M361,212 Q368,216 367,222 Q366,229 361,232 Q357,231 356,226 Q353,216 361,212 Z" fill="#8e7a52" opacity="0.95"/>
<!-- half-buried edges, so the heap looks deep rather than laid out -->
<path d="M132,234 Q158,230 184,233 Q160,238 132,234 Z" fill="#c8b880" opacity="0.4"/>
<path d="M382,232 Q406,229 428,232 Q406,237 382,232 Z" fill="#c8b880" opacity="0.35"/>
<!-- a few loose gold coins glinting in the heap -->
<path d="M164,238 Q164,236 168,236 Q172,236 172,238 Q172,240 168,240 Q164,240 164,238 Z" fill="#ffd700" opacity="0.55"/>
<path d="M300,240 Q300,238 304,238 Q307,238 307,240 Q307,242 304,242 Q300,242 300,240 Z" fill="#ffd700" opacity="0.45"/>
<path d="M234,244 Q234,242 237,242 Q240,242 240,244 Q240,246 237,246 Q234,246 234,244 Z" fill="#ffcc00" opacity="0.4"/>

<!-- ====================================================================
     TORCHES. A matched pair, as in the chamber scenes. The flame is a
     teardrop, not a circle, and each one lights the wall behind it: if a
     light source exists it has to cast, or it reads as a sticker.
     ==================================================================== -->
<g>
  <ellipse cx="46" cy="96" rx="30" ry="34" fill="#ff9a30" opacity="0.07"/>
  <path d="M30,104 L46,101 L47,105 L31,108 Z" fill="#3a2418"/>
  <path d="M44,100 L52,99 L53,106 L45,107 Z" fill="#241410"/>
  <path d="M48,98 Q42,88 48,78 Q54,88 48,98 Z" fill="url(#lairTorch9)">
    <animate attributeName="opacity" values="0.72;1;0.72" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M48,96 Q45,90 48,84 Q51,90 48,96 Z" fill="#ffe9a8" opacity="0.8"/>
</g>
<g>
  <ellipse cx="366" cy="104" rx="28" ry="32" fill="#ff9a30" opacity="0.06"/>
  <path d="M382,112 L366,109 L365,113 L381,116 Z" fill="#3a2418"/>
  <path d="M368,108 L360,107 L359,114 L367,115 Z" fill="#241410"/>
  <path d="M364,106 Q358,96 364,87 Q370,96 364,106 Z" fill="url(#lairTorch9)">
    <animate attributeName="opacity" values="1;0.7;1" dur="3.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M364,104 Q361,98 364,92 Q367,98 364,104 Z" fill="#ffe9a8" opacity="0.75"/>
</g>

<!-- ====================================================================
     LIAM AT REST. The bow is a POSE, not a different animal: the same
     wedge head and snout, but the neck arcs DOWN so the head comes to the
     floor, the wings are furled against the flank, and the eyes are amber
     rather than red. He is still recognisably the dragon of the chamber.
     ==================================================================== -->
<!-- ====================================================================
     LIAM, BOWED. This is the CHAMBER DRAGON, not a second animal: every
     path below is lair_1’s, unchanged. The bow is a transform, not a
     redraw. Body, wings, tail, haunch and foreleg do not move in a bow,
     so they are drawn exactly where the chamber draws them; the neck and
     head rotate as one group about (226,158), the point where the neck
     leaves the chest.

     The angle is measured, not guessed. At 70 degrees the head swung past
     vertical and lay on its side, horns pointing sideways; at 38 the snout
     comes down to y=185 while the horns stay above the skull, so the head
     reads as LOWERED rather than tipped over. The animal then settles onto
     the hoard, partly buried in it, which is the other half of the bow.

     What changes from the chamber is the ending: the eyes go from red to
     amber, they pulse slower and lower, and a lid comes half down.
     ==================================================================== -->
<circle cx="250" cy="182" r="104" fill="url(#lairAura9)"/>
<g transform="translate(0,12)">
<!-- far wing, folded, behind the body -->
<path d="M284,156 Q318,138 352,144 Q374,149 378,162 Q366,158 356,164 Q348,156 338,164 Q330,156 320,166 Q310,158 300,168 Q290,163 284,164 Z" fill="#120808" opacity="0.62"/>
<path d="M286,157 Q320,148 350,146" fill="none" stroke="#2a1010" stroke-width="1" opacity="0.35"/>
<path d="M290,159 Q306,158 300,168" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.3"/>
<path d="M298,157 Q318,157 320,166" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.3"/>
<path d="M310,153 Q334,155 338,164" fill="none" stroke="#2a1010" stroke-width="0.9" opacity="0.28"/>
<!-- tail sweeping out to the right and lying along the floor -->
<path d="M296,196 Q344,188 388,198 Q424,208 452,228 Q428,234 402,224 Q372,212 342,208 Q314,205 294,210 Z" fill="#1a0808"/>
<path d="M300,199 Q344,192 384,201 Q416,210 442,226" fill="none" stroke="#3e1818" stroke-width="1.2" opacity="0.4"/>

<!-- spade at the tail tip -->
<path d="M452,228 Q466,220 478,226 Q472,236 458,236 Q450,234 452,228 Z" fill="#2a1212" opacity="0.85"/>
<path d="M456,227 Q466,223 474,226 Q466,229 456,227 Z" fill="#4a2020" opacity="0.4"/>
<!-- haunch: the big rear muscle, which is what gives a dragon its weight -->
<path d="M268,182 Q296,174 312,192 Q320,208 306,220 Q284,228 268,216 Q258,198 268,182 Z" fill="#1a0808"/>
<!-- body: deep chest, drawn as one mass with the shoulder -->
<path d="M196,186 Q198,162 224,154 Q256,146 284,158 Q306,170 304,194 Q300,216 272,224 Q234,230 208,216 Q192,204 196,186 Z" fill="url(#lairHide9)"/>
<!-- belly plates, the lighter scutes on the underside -->
<path d="M212,214 Q240,224 274,218 Q272,224 250,227 Q224,226 212,214 Z" fill="#4a1c18" opacity="0.45"/>
<path d="M216,206 Q244,214 272,209" fill="none" stroke="#4a1c18" stroke-width="1.2" opacity="0.3"/>
<!-- foreleg planted on the floor, so he is standing not floating -->
<path d="M216,208 Q210,224 210,238 Q216,242 224,240 Q224,224 228,210 Z" fill="#1a0808"/>
<path d="M206,238 Q216,234 228,238 Q228,244 218,245 Q208,244 206,238 Z" fill="#2a1212"/>
<path d="M208,243 Q210,247 208,249" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<path d="M216,244 Q217,248 216,250" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<path d="M224,243 Q226,247 225,249" fill="none" stroke="#4a2020" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>
<!-- near wing, folded over the shoulder, with a visible finger frame -->
<path d="M220,158 Q184,136 148,143 Q124,149 118,164 Q132,159 144,167 Q154,157 166,168 Q176,157 188,170 Q200,162 212,170 Z" fill="#120808" opacity="0.8"/>
<path d="M220,158 Q182,146 148,143" fill="none" stroke="#3a1616" stroke-width="1.3" opacity="0.55"/>
<path d="M212,161 Q182,157 188,170" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.45"/>
<path d="M204,157 Q170,155 166,168" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.42"/>
<path d="M188,151 Q152,152 144,167" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.4"/>
<path d="M166,146 Q134,150 118,164" fill="none" stroke="#3a1616" stroke-width="1.1" opacity="0.38"/>
<!-- the wing claw at the fold, which is what says WING and not cape -->
<path d="M120,160 Q110,152 100,152 Q108,160 118,166 Z" fill="#2a1212" opacity="0.85"/>

<g transform="rotate(38,226,158)">
<!-- neck rising out of the chest toward the head -->
<path d="M226,158 Q222,136 232,120 Q244,108 260,110 Q272,116 272,132 Q270,150 258,160 Q240,166 226,158 Z" fill="url(#lairHide9)"/>
<!-- spines running the ridge of the neck -->
<path d="M232,120 Q228,112 230,104 Q236,110 238,118 Z" fill="#2a1212"/>
<path d="M242,112 Q239,104 242,96 Q247,103 248,111 Z" fill="#2a1212"/>
<path d="M254,110 Q252,102 256,95 Q260,102 260,110 Z" fill="#2a1212" opacity="0.9"/>

<!-- ====================================================================
     THE HEAD. A wedge: broad at the skull, narrowing along the snout to
     the nostrils, with a jaw line under it and a brow over the eye. This
     is the difference between a dragon and a ball.
     ==================================================================== -->
<path d="M236,110 Q234,96 246,90 Q264,84 280,90 Q294,96 300,108 Q306,118 300,126 L272,134 Q252,136 240,128 Q234,120 236,110 Z" fill="url(#lairHide9)"/>
<!-- snout, tapering forward from the skull -->
<path d="M282,110 Q300,108 312,116 Q318,122 314,130 Q302,136 286,132 Q278,124 282,110 Z" fill="#1e0a0a"/>
<!-- jaw line: a lit edge under the snout is what separates it from the neck -->
<path d="M284,132 Q300,136 314,130 Q304,140 286,138 Z" fill="#3e1818" opacity="0.75"/>
<path d="M244,128 Q266,138 288,138" fill="none" stroke="#3e1818" stroke-width="1.2" opacity="0.5"/>
<!-- brow ridges, jutting over each eye -->
<path d="M240,102 Q252,96 264,100 Q254,102 244,106 Z" fill="#2a1212"/>
<path d="M268,98 Q280,94 290,100 Q280,101 270,104 Z" fill="#2a1212" opacity="0.9"/>
<!-- horns, sweeping back off the skull -->
<path d="M244,94 Q234,74 224,58 Q238,66 248,84 Q250,90 248,94 Z" fill="#2a1212"/>
<path d="M240,88 Q234,76 228,66 Q236,72 242,84 Z" fill="#4a2020" opacity="0.45"/>
<path d="M272,90 Q278,70 286,54 Q284,72 280,88 Q277,93 274,93 Z" fill="#2a1212"/>
<path d="M274,86 Q278,74 282,64 Q280,76 277,86 Z" fill="#4a2020" opacity="0.4"/>
<!-- a smaller pair of jaw horns -->
<path d="M246,124 Q240,132 236,140 Q244,134 250,128 Z" fill="#2a1212" opacity="0.8"/>

<!-- nostrils, set at the tip of the snout where they belong -->
<path d="M304,120 Q308,118 310,121 Q308,124 304,123 Z" fill="#ffaa44" opacity="0.35"/>
<path d="M306,127 Q310,125 312,128 Q310,131 306,130 Z" fill="#ffaa44" opacity="0.3"/>
<!-- smoke curling out of them -->
<circle cx="310" cy="118" r="3" fill="#c8a878" opacity="0.16">
  <animate attributeName="cy" values="118;102;86" dur="6.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="6.4s" repeatCount="indefinite"/>
</circle>
<circle cx="314" cy="126" r="3" fill="#c8a878" opacity="0.16">
  <animate attributeName="cy" values="126;108;90" dur="7.2s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="7.2s" begin="0.5s" repeatCount="indefinite"/>
</circle>

<!-- ====================================================================
     THE EYES. The best thing in this location. A reptile eye is an ALMOND
     with a vertical slit, set under the brow, and the glow spills onto the
     scale around it.
     ==================================================================== -->
<circle cx="252" cy="108" r="13" fill="#ffaa44" opacity="0.14" filter="url(#lairFireGlow9)"/>
<circle cx="279" cy="107" r="13" fill="#ffaa44" opacity="0.14" filter="url(#lairFireGlow9)"/>
<path d="M245,108 Q251,101 259,106 Q253,113 245,108 Z" fill="#ffaa44" opacity="0.62">
  <animate attributeName="opacity" values="0.42;0.72;0.42" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M272,107 Q278,100 286,105 Q280,112 272,107 Z" fill="#ffaa44" opacity="0.62">
  <animate attributeName="opacity" values="0.42;0.72;0.42" dur="5.4s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M251,103 Q253,108 251,112 Q249,108 251,103 Z" fill="#ffdd88" opacity="0.7"/>
<path d="M278,102 Q280,107 278,111 Q276,107 278,102 Z" fill="#ffdd88" opacity="0.7"/>

<!-- the upper lid coming down over each eye, which is what reads as calm.
     Drawn in the head's own frame so it rotates with the bow. -->
<path d="M244,105 Q251,99 260,104 Q251,103 244,109 Z" fill="#1e0c0a" opacity="0.8"/>
<path d="M271,104 Q278,98 287,103 Q278,102 271,108 Z" fill="#1e0c0a" opacity="0.8"/>
</g>
</g>

<!-- Golden motes drifting up through the warm air -->
<circle cx="150" cy="100" r="2" fill="#ffd700" opacity="0.4">
  <animate attributeName="cy" values="100;80;60" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.4;0.6;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="85" r="2.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="85;60;35" dur="6s" begin="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="6s" begin="1s" repeatCount="indefinite"/>
</circle>
<circle cx="350" cy="95" r="2" fill="#ffd700" opacity="0.35">
  <animate attributeName="cy" values="95;70;45" dur="4.6s" begin="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.35;0.55;0" dur="4.6s" begin="2s" repeatCount="indefinite"/>
</circle>
<circle cx="200" cy="110" r="1.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="110;85;60" dur="5.6s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="5.6s" begin="0.5s" repeatCount="indefinite"/>
</circle>
<circle cx="300" cy="105" r="2" fill="#ffcc00" opacity="0.25">
  <animate attributeName="cy" values="105;78;50" dur="6.4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="opacity" values="0.25;0.45;0" dur="6.4s" begin="1.5s" repeatCount="indefinite"/>
</circle>

</svg>`;
