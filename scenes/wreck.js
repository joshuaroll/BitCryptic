// Wreck story scenes — "Why does anyone stay down here?"
// Keys: wreck_0 through wreck_11, wreck_return_0 through wreck_return_5
// Palette: cold undersea greens (#07141a #0d2028 #133440 #1a4a55),
// amber lamps (#F2C14E #ffd700 #ffeaa7) as the only warm colour in frame.

// Scene 0: The descent. Inside the water column, looking down. Rope, small
// figure, green going darker, the wreck an unreadable silhouette below.
STORY_SCENES['wreck_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckCol0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="35%" stop-color="#133440"/><stop offset="70%" stop-color="#0d2028"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.22"/><stop offset="55%" stop-color="#7fc4b8" stop-opacity="0.07"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="wreckSurf0" cx="50%" cy="0%" r="70%">
    <stop offset="0%" stop-color="#cfeee0" stop-opacity="0.3"/><stop offset="45%" stop-color="#4f9d94" stop-opacity="0.09"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckSoft0"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
  <filter id="wreckDeepBlur0"><feGaussianBlur stdDeviation="4"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckCol0)"/>
<!-- Surface light pooling at the top of the column -->
<rect width="500" height="150" fill="url(#wreckSurf0)"/>
<!-- Caustic shafts falling from the surface -->
<polygon points="60,0 96,0 150,200 128,200" fill="url(#wreckShaft0)" opacity="0.55"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="7s" repeatCount="indefinite"/></polygon>
<polygon points="180,0 204,0 232,190 216,190" fill="url(#wreckShaft0)" opacity="0.4"><animate attributeName="opacity" values="0.22;0.5;0.22" dur="9s" repeatCount="indefinite" begin="1.5s"/></polygon>
<polygon points="300,0 342,0 320,210 296,210" fill="url(#wreckShaft0)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" begin="3s"/></polygon>
<polygon points="418,0 444,0 400,180 382,180" fill="url(#wreckShaft0)" opacity="0.35"><animate attributeName="opacity" values="0.18;0.45;0.18" dur="10s" repeatCount="indefinite" begin="0.8s"/></polygon>
<!-- Surface seen from beneath, a moving ceiling -->
<path d="M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z" fill="#8fd0c4" opacity="0.16"><animate attributeName="d" values="M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z;M0,0 L500,0 L500,18 Q440,10 380,18 Q320,26 260,18 Q200,10 140,18 Q80,26 0,18 Z;M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z" dur="6s" repeatCount="indefinite"/></path>
<!-- The seabed, far down, and the wreck on it: unreadable -->
<path d="M0,238 Q120,230 240,234 Q360,238 500,231 L500,260 L0,260 Z" fill="#07141a"/>
<g filter="url(#wreckDeepBlur0)" opacity="0.85">
  <path d="M150,236 Q168,214 214,210 L332,206 Q368,208 378,220 L382,236 Z" fill="#0a1a20"/>
  <path d="M236,206 L244,182 L252,182 L256,206 Z" fill="#0a1a20"/>
  <path d="M300,205 L306,188 L312,189 L314,205 Z" fill="#0a1a20"/>
</g>
<!-- Two faint amber pinpricks, too far to resolve -->
<circle cx="228" cy="216" r="2" fill="#F2C14E" opacity="0.16" filter="url(#wreckSoft0)"><animate attributeName="opacity" values="0.08;0.22;0.08" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="318" cy="212" r="1.8" fill="#F2C14E" opacity="0.13" filter="url(#wreckSoft0)"><animate attributeName="opacity" values="0.06;0.18;0.06" dur="5.5s" repeatCount="indefinite" begin="1.2s"/></circle>
<!-- The rope, hanging down the middle of the column -->
<path d="M252,0 Q248,60 254,120 Q259,160 252,196" fill="none" stroke="#2a3a2c" stroke-width="2.4" stroke-linecap="round" opacity="0.85"><animate attributeName="d" values="M252,0 Q248,60 254,120 Q259,160 252,196;M252,0 Q256,60 248,120 Q245,160 252,196;M252,0 Q248,60 254,120 Q259,160 252,196" dur="8s" repeatCount="indefinite"/></path>
<path d="M252,0 Q248,60 254,120 Q259,160 252,196" fill="none" stroke="#4a5a3e" stroke-width="0.8" opacity="0.4"><animate attributeName="d" values="M252,0 Q248,60 254,120 Q259,160 252,196;M252,0 Q256,60 248,120 Q245,160 252,196;M252,0 Q248,60 254,120 Q259,160 252,196" dur="8s" repeatCount="indefinite"/></path>
<!-- The player, small, on the rope -->
<g transform="translate(250,112)">
  <animateTransform attributeName="transform" type="translate" values="250,112;252,118;250,112" dur="8s" repeatCount="indefinite"/>
  <ellipse cx="0" cy="3" rx="5" ry="8" fill="#0a1a20"/>
  <circle cx="0" cy="-7" r="4.4" fill="#0a1a20"/>
  <circle cx="1.4" cy="-7.4" r="2.6" fill="#1a4a55" opacity="0.55"/>
  <line x1="-3" y1="-2" x2="-6" y2="-8" stroke="#0a1a20" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="-2" x2="6" y2="-9" stroke="#0a1a20" stroke-width="2" stroke-linecap="round"/>
  <path d="M-3,10 Q-5,20 -3,27" fill="none" stroke="#0a1a20" stroke-width="2.4" stroke-linecap="round"><animate attributeName="d" values="M-3,10 Q-5,20 -3,27;M-3,10 Q-1,20 -4,27;M-3,10 Q-5,20 -3,27" dur="3.4s" repeatCount="indefinite"/></path>
  <path d="M3,10 Q6,20 4,27" fill="none" stroke="#0a1a20" stroke-width="2.4" stroke-linecap="round"><animate attributeName="d" values="M3,10 Q6,20 4,27;M3,10 Q2,20 5,27;M3,10 Q6,20 4,27" dur="3.4s" repeatCount="indefinite" begin="0.6s"/></path>
</g>
<!-- Bubbles rising past the descent -->
<circle cx="262" cy="120" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="120;-10" dur="5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="268" cy="126" r="1.3" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="126;-10" dur="6.4s" repeatCount="indefinite" begin="1.4s"/><animate attributeName="opacity" values="0;0.45;0" dur="6.4s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="258" cy="118" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="118;-10" dur="7.2s" repeatCount="indefinite" begin="2.9s"/><animate attributeName="opacity" values="0;0.4;0" dur="7.2s" repeatCount="indefinite" begin="2.9s"/></circle>
<!-- Drifting motes -->
<circle cx="80" cy="90" r="1" fill="#cfeee0" opacity="0.25"><animate attributeName="cy" values="90;70;90" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="410" cy="140" r="1.2" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="140;118;140" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.08;0.26;0.08" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="150" cy="180" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="180;160;180" dur="13s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="5s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="350" cy="70" r="0.9" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="70;52;70" dur="11s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
<!-- Deep haze at the bottom of frame -->
<rect x="0" y="190" width="500" height="70" fill="#07141a" opacity="0.5"/>
</svg>`;

// Scene 1: The wreck in full. On her side, sand banked along the hull like a
// drift of snow. Amber lamps strung along the rail. Doormat and one crab,
// tiny, foreground. The whole visual idea of the file lives in this frame.
STORY_SCENES['wreck_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="40%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wreckHull1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="55%" stop-color="#122a2c"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wreckSand1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <radialGradient id="wreckLampG1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckGlow1"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckWater1)"/>
<!-- Caustic shafts from far above -->
<polygon points="70,0 100,0 138,150 118,150" fill="url(#wreckShaft1)" opacity="0.6"><animate attributeName="opacity" values="0.35;0.7;0.35" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="250,0 288,0 262,160 238,160" fill="url(#wreckShaft1)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="400,0 424,0 388,140 370,140" fill="url(#wreckShaft1)" opacity="0.45"><animate attributeName="opacity" values="0.22;0.55;0.22" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- Distant seabed ridge -->
<path d="M0,196 Q80,186 170,192 Q280,198 380,188 Q450,182 500,190 L500,260 L0,260 Z" fill="#0d2028" opacity="0.85"/>
<!-- Kelp behind the wreck, slow sway -->
<path d="M40,260 Q34,222 44,190 Q50,170 44,150" fill="none" stroke="#12333a" stroke-width="4" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M40,260 Q34,222 44,190 Q50,170 44,150;M40,260 Q46,222 36,190 Q30,170 38,150;M40,260 Q34,222 44,190 Q50,170 44,150" dur="11s" repeatCount="indefinite"/></path>
<path d="M62,260 Q58,228 66,204 Q70,188 64,172" fill="none" stroke="#0f2b31" stroke-width="3" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M62,260 Q58,228 66,204 Q70,188 64,172;M62,260 Q68,228 58,204 Q54,188 62,172;M62,260 Q58,228 66,204 Q70,188 64,172" dur="13s" repeatCount="indefinite" begin="2s"/></path>
<path d="M462,260 Q456,224 466,196 Q472,178 466,160" fill="none" stroke="#12333a" stroke-width="4" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M462,260 Q456,224 466,196 Q472,178 466,160;M462,260 Q470,224 458,196 Q452,178 460,160;M462,260 Q456,224 466,196 Q472,178 466,160" dur="12s" repeatCount="indefinite" begin="4s"/></path>
<!-- THE HULL, lying over on her side, bow left, stern right -->
<!-- Main hull mass -->
<path d="M52,214 Q60,182 108,172 L360,150 Q404,148 420,164 Q432,178 428,202 L424,222 Q300,232 180,230 Q100,228 52,214 Z" fill="url(#wreckHull1)"/>
<!-- Upper plating catching the last of the green light -->
<path d="M52,214 Q60,182 108,172 L360,150 Q404,148 420,164 L418,176 Q300,166 178,180 Q104,190 56,208 Z" fill="#25494a" opacity="0.55"/>
<!-- Plank/plate seams running the length of her -->
<path d="M62,200 Q180,176 418,164" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.6"/>
<path d="M60,210 Q190,190 424,180" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M70,220 Q200,206 426,198" fill="none" stroke="#0a1a1e" stroke-width="0.8" opacity="0.4"/>
<!-- Rib frames showing where the planking has gone -->
<path d="M120,172 L114,224" stroke="#0a1a1e" stroke-width="2" opacity="0.45"/>
<path d="M168,168 L164,228" stroke="#0a1a1e" stroke-width="2" opacity="0.4"/>
<path d="M330,152 L332,226" stroke="#0a1a1e" stroke-width="2" opacity="0.35"/>
<!-- Broken bow, open to the water -->
<path d="M52,214 Q60,182 108,172 L100,186 Q86,192 82,206 L88,218 Q68,220 52,214 Z" fill="#07141a" opacity="0.8"/>
<!-- Rail line along the top of the deck -->
<path d="M106,170 L358,148" fill="none" stroke="#2c5450" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
<!-- Rail stanchions -->
<rect x="128" y="160" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="180" y="156" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="234" y="151" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="288" y="147" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="340" y="143" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<!-- Toppled mast, still attached, angled off toward the seabed -->
<path d="M250,152 L196,84" stroke="#173537" stroke-width="5" stroke-linecap="round"/>
<path d="M250,152 L196,84" stroke="#28524f" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
<path d="M214,106 L246,98" stroke="#173537" stroke-width="3" stroke-linecap="round"/>
<!-- Rope hanging from the mast in loops that no longer go anywhere -->
<path d="M200,90 Q184,116 196,132 Q208,146 194,158" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.75"><animate attributeName="d" values="M200,90 Q184,116 196,132 Q208,146 194,158;M200,90 Q188,116 192,132 Q204,146 198,158;M200,90 Q184,116 196,132 Q208,146 194,158" dur="9s" repeatCount="indefinite"/></path>
<path d="M228,101 Q244,124 232,140 Q222,152 234,162" fill="none" stroke="#2a3a2c" stroke-width="1.3" opacity="0.6"><animate attributeName="d" values="M228,101 Q244,124 232,140 Q222,152 234,162;M228,101 Q238,124 236,140 Q228,152 230,162;M228,101 Q244,124 232,140 Q222,152 234,162" dur="11s" repeatCount="indefinite" begin="1.5s"/></path>
<path d="M356,150 Q372,168 360,182 Q350,192 362,200" fill="none" stroke="#2a3a2c" stroke-width="1.4" opacity="0.6"><animate attributeName="d" values="M356,150 Q372,168 360,182 Q350,192 362,200;M356,150 Q366,168 364,182 Q356,192 358,200;M356,150 Q372,168 360,182 Q350,192 362,200" dur="10s" repeatCount="indefinite" begin="3s"/></path>
<!-- SAND banked along the hull like a drift of snow -->
<path d="M0,246 Q60,232 130,236 Q160,238 186,244 Q140,222 116,206 Q90,192 44,206 Q16,216 0,232 Z" fill="url(#wreckSand1)" opacity="0.9"/>
<path d="M300,244 Q346,224 388,206 Q420,192 462,204 Q488,212 500,228 L500,260 L296,260 Z" fill="url(#wreckSand1)" opacity="0.9"/>
<path d="M0,250 Q120,240 250,246 Q380,252 500,242 L500,260 L0,260 Z" fill="#2f5158" opacity="0.75"/>
<!-- Sand crest highlights -->
<path d="M20,230 Q60,214 104,208" fill="none" stroke="#3d666c" stroke-width="1.4" opacity="0.5"/>
<path d="M396,206 Q436,198 476,210" fill="none" stroke="#3d666c" stroke-width="1.4" opacity="0.45"/>
<!-- AMBER LAMPS strung along the rail, the only warm thing down here -->
<path d="M124,158 Q152,166 178,154 Q206,162 232,149 Q260,157 286,145 Q314,153 338,141" fill="none" stroke="#2c5450" stroke-width="0.9" opacity="0.7"/>
<circle cx="152" cy="164" r="26" fill="url(#wreckLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="206" cy="160" r="24" fill="url(#wreckLampG1)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></circle>
<circle cx="260" cy="155" r="26" fill="url(#wreckLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.45;0.6;0.4" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="314" cy="151" r="24" fill="url(#wreckLampG1)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3s" repeatCount="indefinite" begin="2.1s"/></circle>
<g fill="#F2C14E">
  <rect x="149" y="161" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="203" y="157" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.7;1;0.8;0.92;0.7" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></rect>
  <rect x="257" y="152" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></rect>
  <rect x="311" y="148" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="3s" repeatCount="indefinite" begin="2.1s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.7" opacity="0.7">
  <rect x="148" y="160" width="8" height="9" rx="1.8"/>
  <rect x="202" y="156" width="8" height="9" rx="1.8"/>
  <rect x="256" y="151" width="8" height="9" rx="1.8"/>
  <rect x="310" y="147" width="8" height="9" rx="1.8"/>
</g>
<!-- Amber wash on the sand directly under the lamps -->
<ellipse cx="235" cy="228" rx="120" ry="16" fill="#F2C14E" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Hatch on the deck, closed for now -->
<rect x="272" y="150" width="26" height="8" rx="2" fill="#0e2224" transform="rotate(-5,285,154)"/>
<rect x="274" y="151" width="22" height="2" rx="1" fill="#2c5450" opacity="0.5" transform="rotate(-5,285,154)"/>
<!-- THE DOORMAT, foreground, swept and level despite everything -->
<g transform="translate(214,236)">
  <path d="M-34,0 L34,0 L42,14 L-42,14 Z" fill="#5a4a22"/>
  <path d="M-34,0 L34,0 L36,4 L-36,4 Z" fill="#75612e" opacity="0.8"/>
  <path d="M-30,5 L32,5 M-32,9 L34,9" stroke="#3d3216" stroke-width="0.9" opacity="0.7"/>
  <path d="M-20,0 L-24,14 M-6,0 L-8,14 M8,0 L8,14 M22,0 L24,14" stroke="#3d3216" stroke-width="0.7" opacity="0.5"/>
</g>
<!-- THE CRAB, standing on the doormat, apparently in charge -->
<g transform="translate(214,232)">
  <ellipse cx="0" cy="0" rx="7" ry="4.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.4" rx="6" ry="3" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <circle cx="2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <circle cx="-2.1" cy="-3.7" r="0.4" fill="#ffeaa7"/>
  <circle cx="2.7" cy="-3.7" r="0.4" fill="#ffeaa7"/>
  <path d="M-6,-1 L-11,-4 L-13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M-6,-1 L-11,-4 L-13,-1;M-6,-1 L-11,-5 L-13,-2;M-6,-1 L-11,-4 L-13,-1" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M6,-1 L11,-4 L13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M6,-1 L11,-4 L13,-1;M6,-1 L11,-5 L13,-2;M6,-1 L11,-4 L13,-1" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></path>
  <path d="M-5,3 L-8,6 M0,4 L0,7 M5,3 L8,6" stroke="#8f3b2e" stroke-width="1.2" stroke-linecap="round"/>
</g>
<!-- Drifting motes in the lamplight -->
<circle cx="180" cy="188" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="188;170;188" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.35;0.12" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="292" cy="176" r="1.2" fill="#ffeaa7" opacity="0.25"><animate attributeName="cy" values="176;158;176" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="96" cy="140" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="140;120;140" dur="13s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="7s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="420" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;100;120" dur="14s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" begin="1s"/></circle>
<!-- Cold vignette from the water itself, top corners -->
<rect x="0" y="0" width="500" height="46" fill="#07141a" opacity="0.18"/>
</svg>`;

// Scene 2: Fredward comes out of the hatch upside down, waving. Brass suit,
// huge polished faceplate, comic body language, warm light on the glass.
STORY_SCENES['wreck_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="45%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckBrass2" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="45%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="50%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass2" cx="36%" cy="32%" r="70%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.85"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.4"/><stop offset="100%" stop-color="#123038" stop-opacity="0.9"/>
  </radialGradient>
  <radialGradient id="wreckLampG2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckGlow2"><feGaussianBlur stdDeviation="2" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckWater2)"/>
<!-- Light from far above -->
<polygon points="120,0 152,0 176,120 152,120" fill="#bfe6d8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 358,0 336,130 314,130" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="10s" repeatCount="indefinite" begin="2s"/></polygon>
<!-- Superstructure behind, silhouetted -->
<path d="M0,150 L60,146 L66,116 L118,112 L124,148 L200,144 L200,260 L0,260 Z" fill="#0d2028" opacity="0.7"/>
<path d="M410,140 L470,134 L476,104 L500,102 L500,260 L406,260 Z" fill="#0d2028" opacity="0.6"/>
<!-- Deck plane, tilted because she is on her side -->
<path d="M0,196 L500,168 L500,260 L0,260 Z" fill="url(#wreckDeck2)"/>
<path d="M0,196 L500,168 L500,178 L0,206 Z" fill="#2c5450" opacity="0.4"/>
<path d="M0,214 L500,186" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M0,232 L500,206" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Rail along the far edge with amber lamps -->
<path d="M0,190 L500,162" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.8"/>
<circle cx="72" cy="178" r="24" fill="url(#wreckLampG2)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3.1s" repeatCount="indefinite"/></circle>
<circle cx="424" cy="158" r="24" fill="url(#wreckLampG2)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.4;0.56;0.35" dur="2.8s" repeatCount="indefinite" begin="1.2s"/></circle>
<rect x="69" y="175" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.1s" repeatCount="indefinite"/></rect>
<rect x="421" y="155" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="2.8s" repeatCount="indefinite" begin="1.2s"/></rect>
<!-- THE HATCH, open, ring of brass, and Fredward coming out of it head first -->
<ellipse cx="250" cy="188" rx="46" ry="15" fill="#07141a"/>
<ellipse cx="250" cy="188" rx="46" ry="15" fill="none" stroke="url(#wreckBrass2)" stroke-width="3"/>
<ellipse cx="250" cy="186" rx="42" ry="12" fill="none" stroke="#c9962e" stroke-width="0.8" opacity="0.4"/>
<!-- Hatch cover swung back -->
<path d="M292,184 L338,160 L344,168 L298,192 Z" fill="#1d3b3a"/>
<path d="M292,184 L338,160 L340,163 L294,187 Z" fill="#2c5450" opacity="0.6"/>
<!-- Warm light spilling out of the open hatch -->
<ellipse cx="250" cy="188" rx="40" ry="12" fill="#F2C14E" opacity="0.18"><animate attributeName="opacity" values="0.1;0.24;0.1" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- FREDWARD, upside down, feet still in the hatch, waving -->
<g transform="translate(250,182)">
  <animateTransform attributeName="transform" type="translate" values="250,182;250,176;250,182" dur="4.2s" repeatCount="indefinite"/>
  <!-- Boots, still down in the hatch, comically weighted -->
  <rect x="-22" y="-4" width="17" height="12" rx="3" fill="#5c4409"/>
  <rect x="6" y="-4" width="17" height="12" rx="3" fill="#5c4409"/>
  <rect x="-22" y="-4" width="17" height="4" rx="2" fill="#8b6914" opacity="0.7"/>
  <rect x="6" y="-4" width="17" height="4" rx="2" fill="#8b6914" opacity="0.7"/>
  <!-- Legs going up out of the hatch -->
  <path d="M-13,-4 Q-16,-30 -12,-52" fill="none" stroke="url(#wreckSuit2)" stroke-width="13" stroke-linecap="round"/>
  <path d="M14,-4 Q18,-30 13,-52" fill="none" stroke="url(#wreckSuit2)" stroke-width="13" stroke-linecap="round"/>
  <!-- Torso, hanging upside down -->
  <path d="M-18,-52 Q0,-60 18,-52 L22,-92 Q0,-100 -22,-92 Z" fill="url(#wreckSuit2)"/>
  <!-- Suit creases -->
  <path d="M-14,-62 Q0,-66 14,-62 M-16,-74 Q0,-78 16,-74" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.6"/>
  <!-- Chest weight plate, brass, now near the top because he is inverted -->
  <rect x="-11" y="-90" width="22" height="10" rx="2" fill="url(#wreckBrass2)"/>
  <circle cx="-5" cy="-85" r="1.4" fill="#c9962e"/><circle cx="5" cy="-85" r="1.4" fill="#c9962e"/>
  <!-- Neck ring -->
  <ellipse cx="0" cy="-95" rx="15" ry="5" fill="url(#wreckBrass2)"/>
  <!-- THE HELMET, hanging below the body because everything is upside down -->
  <g transform="translate(0,-118)">
    <circle cx="0" cy="0" r="21" fill="url(#wreckBrass2)"/>
    <circle cx="0" cy="0" r="21" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <!-- Side port -->
    <circle cx="-17" cy="2" r="5" fill="#5c4409"/>
    <circle cx="-17" cy="2" r="3" fill="#123038" opacity="0.8"/>
    <circle cx="17" cy="2" r="5" fill="#5c4409"/>
    <!-- Rivets around the crown -->
    <circle cx="-11" cy="-16" r="1.2" fill="#c9962e"/><circle cx="0" cy="-19" r="1.2" fill="#c9962e"/>
    <circle cx="11" cy="-16" r="1.2" fill="#c9962e"/><circle cx="-18" cy="-9" r="1.2" fill="#c9962e"/>
    <circle cx="18" cy="-9" r="1.2" fill="#c9962e"/>
    <!-- THE FACEPLATE, huge, polished so clean it hurts -->
    <circle cx="0" cy="1" r="14" fill="url(#wreckGlass2)"/>
    <circle cx="0" cy="1" r="14" fill="none" stroke="#c9962e" stroke-width="2"/>
    <!-- His face, upside down and delighted: eyes low, grin above them -->
    <circle cx="-4.5" cy="4" r="1.7" fill="#0d2024"/>
    <circle cx="4.5" cy="4" r="1.7" fill="#0d2024"/>
    <path d="M-6,-2 Q0,-7 6,-2" fill="none" stroke="#0d2024" stroke-width="1.6" stroke-linecap="round"/>
    <!-- Moustache, hanging the wrong way -->
    <path d="M-5,1 Q0,-1 5,1" fill="none" stroke="#0d2024" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
    <!-- Polish highlight sliding across the glass -->
    <path d="M-9,-6 Q-4,-11 2,-9" fill="none" stroke="#ffeaa7" stroke-width="2.4" stroke-linecap="round" opacity="0.7"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.6s" repeatCount="indefinite"/></path>
    <circle cx="-6" cy="-5" r="2.4" fill="#fff" opacity="0.35"/>
  </g>
  <!-- Waving arm, big loose comic arc -->
  <path d="M20,-86 Q46,-92 54,-116" fill="none" stroke="url(#wreckSuit2)" stroke-width="10" stroke-linecap="round"><animate attributeName="d" values="M20,-86 Q46,-92 54,-116;M20,-86 Q48,-84 62,-102;M20,-86 Q46,-92 54,-116" dur="1.5s" repeatCount="indefinite"/></path>
  <circle cx="55" cy="-118" r="6.5" fill="#5c4409"><animate attributeName="cx" values="55;63;55" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="-118;-104;-118" dur="1.5s" repeatCount="indefinite"/></circle>
  <!-- Other arm, bracing on the hatch rim -->
  <path d="M-20,-86 Q-42,-76 -48,-58" fill="none" stroke="url(#wreckSuit2)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="-49" cy="-56" r="6" fill="#5c4409"/>
  <!-- Air hose, coiling back down into the hatch -->
  <path d="M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.8"><animate attributeName="d" values="M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20;M14,-108 Q44,-102 46,-78 Q48,-56 28,-46 Q8,-38 18,-20;M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20" dur="6s" repeatCount="indefinite"/></path>
</g>
<!-- Bubbles from the helmet, streaming DOWNWARD in frame because he is inverted -->
<circle cx="266" cy="64" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="64;-10" dur="4.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="4.4s" repeatCount="indefinite"/></circle>
<circle cx="272" cy="70" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="70;-10" dur="5.6s" repeatCount="indefinite" begin="1.3s"/><animate attributeName="opacity" values="0;0.45;0" dur="5.6s" repeatCount="indefinite" begin="1.3s"/></circle>
<circle cx="260" cy="60" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="60;-10" dur="6.2s" repeatCount="indefinite" begin="2.8s"/><animate attributeName="opacity" values="0;0.4;0" dur="6.2s" repeatCount="indefinite" begin="2.8s"/></circle>
<!-- The doormat and the crab, foreground left, unbothered -->
<g transform="translate(92,238)">
  <path d="M-30,0 L30,0 L37,12 L-37,12 Z" fill="#5a4a22"/>
  <path d="M-30,0 L30,0 L32,3.6 L-32,3.6 Z" fill="#75612e" opacity="0.8"/>
  <path d="M-27,5 L28,5 M-29,8.4 L30,8.4" stroke="#3d3216" stroke-width="0.8" opacity="0.7"/>
</g>
<g transform="translate(92,234)">
  <ellipse cx="0" cy="0" rx="7" ry="4.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.4" rx="6" ry="3" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/><circle cx="2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <path d="M-6,-1 L-11,-4 L-13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M-6,-1 L-11,-4 L-13,-1;M-6,-1 L-11,-5 L-13,-2;M-6,-1 L-11,-4 L-13,-1" dur="2.4s" repeatCount="indefinite"/></path>
  <path d="M6,-1 L11,-4 L13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M-5,3 L-8,6 M0,4 L0,7 M5,3 L8,6" stroke="#8f3b2e" stroke-width="1.2" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="160" cy="120" r="1" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="380" cy="96" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="96;76;96" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.06;0.24;0.06" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="330" cy="200" r="1" fill="#ffeaa7" opacity="0.25"><animate attributeName="cy" values="200;184;200" dur="10s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" begin="3s"/></circle>
</svg>`;

// Scene 3: Close on the catalogue book, open on a bolted table. Hand-drawn
// creature pages, notes down the margin, water not touching it, his gloved
// hand turning a page.
STORY_SCENES['wreck_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckBookLit3" cx="50%" cy="46%" r="58%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.34"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.1"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckPage3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e8dcae"/><stop offset="100%" stop-color="#c8b784"/>
  </linearGradient>
  <linearGradient id="wreckPageR3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e2d5a4"/><stop offset="100%" stop-color="#bfae7b"/>
  </linearGradient>
  <linearGradient id="wreckBrass3" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckGlove3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater3)"/>
<!-- Warm pool of lamplight over the table -->
<rect width="500" height="260" fill="url(#wreckBookLit3)"/>
<!-- Lamp above frame, only its underside and its light -->
<rect x="236" y="0" width="4" height="18" fill="#2c5450"/>
<path d="M222,18 L254,18 L248,30 L228,30 Z" fill="#5c4409"/>
<rect x="230" y="28" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="238" cy="36" rx="46" ry="16" fill="#ffd700" opacity="0.12"><animate attributeName="opacity" values="0.07;0.17;0.07" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Bulkhead behind, dark, with a rope loop and a pinned sketch -->
<rect x="0" y="0" width="500" height="150" fill="#0d2028" opacity="0.55"/>
<path d="M0,148 L500,144" stroke="#1a4a55" stroke-width="1.4" opacity="0.4"/>
<path d="M64,40 Q46,66 62,84 Q76,98 60,112" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.5"><animate attributeName="d" values="M64,40 Q46,66 62,84 Q76,98 60,112;M64,40 Q52,66 58,84 Q72,98 64,112;M64,40 Q46,66 62,84 Q76,98 60,112" dur="10s" repeatCount="indefinite"/></path>
<g opacity="0.5" transform="rotate(-4,412,72)">
  <rect x="392" y="48" width="40" height="48" fill="#c8b784"/>
  <path d="M400,80 Q408,64 418,72 Q426,78 424,86" fill="none" stroke="#4a3a18" stroke-width="1"/>
  <path d="M398,88 L426,88 M398,92 L420,92" stroke="#4a3a18" stroke-width="0.6" opacity="0.7"/>
  <circle cx="412" cy="50" r="1.8" fill="#8f3b2e"/>
</g>
<!-- THE TABLE, bolted flat to the deck -->
<path d="M40,168 L460,168 L470,184 L30,184 Z" fill="#1d3b3a"/>
<path d="M40,168 L460,168 L462,172 L38,172 Z" fill="#2c5450" opacity="0.6"/>
<rect x="66" y="184" width="12" height="66" fill="#173537"/>
<rect x="422" y="184" width="12" height="66" fill="#173537"/>
<!-- Bolt plates -->
<rect x="58" y="246" width="28" height="6" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="414" y="246" width="28" height="6" rx="1" fill="#5c4409" opacity="0.8"/>
<circle cx="64" cy="249" r="1.4" fill="#c9962e"/><circle cx="80" cy="249" r="1.4" fill="#c9962e"/>
<circle cx="420" cy="249" r="1.4" fill="#c9962e"/><circle cx="436" cy="249" r="1.4" fill="#c9962e"/>
<!-- THE BOOK, so thick the sea has given up on it -->
<!-- Block of closed pages beneath, showing the depth of it -->
<path d="M88,168 L412,168 L410,150 L90,150 Z" fill="#8a7a4c"/>
<path d="M90,150 L410,150 L408,146 L92,146 Z" fill="#a5945f"/>
<path d="M96,152 L404,152 M96,157 L404,157 M96,162 L404,162" stroke="#6d5f38" stroke-width="0.6" opacity="0.6"/>
<!-- Left page -->
<path d="M96,148 Q160,138 244,142 L244,58 Q160,52 96,64 Z" fill="url(#wreckPage3)"/>
<path d="M96,148 Q160,138 244,142 L244,138 Q160,134 96,144 Z" fill="#bda870" opacity="0.5"/>
<!-- Right page -->
<path d="M244,142 Q330,138 396,148 L396,64 Q330,52 244,58 Z" fill="url(#wreckPageR3)"/>
<!-- Spine shadow -->
<path d="M244,58 L244,142" stroke="#8a7a4c" stroke-width="4" opacity="0.5"/>
<!-- LEFT PAGE: an eel, drawn measured named dated -->
<path d="M118,104 Q142,86 160,102 Q176,116 196,100 Q210,90 222,98" fill="none" stroke="#3a2e12" stroke-width="2" stroke-linecap="round"/>
<path d="M118,104 Q142,90 160,105 Q176,118 196,104 Q210,95 222,101" fill="none" stroke="#3a2e12" stroke-width="0.8" opacity="0.6"/>
<circle cx="120" cy="103" r="1.4" fill="#3a2e12"/>
<path d="M126,100 L130,96 M136,95 L139,91 M150,97 L152,92" stroke="#3a2e12" stroke-width="0.7" opacity="0.7"/>
<!-- measuring rule under the drawing -->
<path d="M118,116 L222,116" stroke="#3a2e12" stroke-width="0.7" opacity="0.6"/>
<path d="M118,113 L118,119 M144,114 L144,118 M170,113 L170,119 M196,114 L196,118 M222,113 L222,119" stroke="#3a2e12" stroke-width="0.6" opacity="0.6"/>
<!-- page heading + notes down the margin -->
<path d="M110,72 L182,71" stroke="#3a2e12" stroke-width="1.6" opacity="0.75"/>
<path d="M110,78 L156,77" stroke="#3a2e12" stroke-width="0.9" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
  <path d="M104,86 L112,86 M104,90 L113,90 M104,94 L110,94 M104,98 L113,98 M104,102 L111,102 M104,106 L113,106 M104,110 L109,110"/>
</g>
<g stroke="#3a2e12" stroke-width="0.7" opacity="0.5">
  <path d="M118,126 L214,126 M118,131 L222,131 M118,136 L190,136"/>
</g>
<!-- RIGHT PAGE: a small many-legged thing, mid-draw -->
<ellipse cx="300" cy="98" rx="17" ry="11" fill="none" stroke="#3a2e12" stroke-width="2"/>
<ellipse cx="300" cy="95" rx="12" ry="6" fill="none" stroke="#3a2e12" stroke-width="0.8" opacity="0.6"/>
<circle cx="295" cy="93" r="1.2" fill="#3a2e12"/><circle cx="305" cy="93" r="1.2" fill="#3a2e12"/>
<path d="M285,96 L274,90 M285,101 L273,102 M288,106 L280,114 M312,106 L320,114 M315,101 L327,102 M315,96 L326,90" stroke="#3a2e12" stroke-width="1.2" stroke-linecap="round"/>
<!-- callout arrow and a labelled detail -->
<path d="M322,86 L344,74" stroke="#3a2e12" stroke-width="0.7" opacity="0.6"/>
<circle cx="348" cy="72" r="7" fill="none" stroke="#3a2e12" stroke-width="0.9" opacity="0.7"/>
<path d="M344,72 L352,72 M348,68 L348,76" stroke="#3a2e12" stroke-width="0.6" opacity="0.6"/>
<g stroke="#3a2e12" stroke-width="0.7" opacity="0.5">
  <path d="M262,124 L380,124 M262,129 L372,129 M262,134 L330,134"/>
</g>
<path d="M262,68 L326,67" stroke="#3a2e12" stroke-width="1.6" opacity="0.75"/>
<!-- date, ruled off in the corner -->
<path d="M356,138 L390,138" stroke="#3a2e12" stroke-width="0.6" opacity="0.5"/>
<path d="M360,134 L388,134" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<!-- THE PAGE BEING TURNED, caught mid-lift -->
<path d="M244,58 Q300,44 352,60 Q368,66 360,90 Q348,120 300,132 Q268,140 244,142 Z" fill="#eee3b8" opacity="0.96"><animate attributeName="d" values="M244,58 Q300,44 352,60 Q368,66 360,90 Q348,120 300,132 Q268,140 244,142 Z;M244,58 Q296,40 344,54 Q362,60 356,86 Q346,118 298,130 Q266,138 244,142 Z;M244,58 Q300,44 352,60 Q368,66 360,90 Q348,120 300,132 Q268,140 244,142 Z" dur="7s" repeatCount="indefinite"/></path>
<path d="M244,58 Q300,44 352,60" fill="none" stroke="#c8b784" stroke-width="1" opacity="0.8"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.3">
  <path d="M262,80 L330,72 M262,88 L336,80 M264,96 L330,90"/>
</g>
<!-- HIS GLOVED HAND, turning it -->
<g transform="translate(352,64)">
  <animateTransform attributeName="transform" type="translate" values="352,64;344,58;352,64" dur="7s" repeatCount="indefinite"/>
  <!-- cuff, brass ring at the wrist -->
  <path d="M22,-12 L58,-30 L70,-8 L34,10 Z" fill="url(#wreckGlove3)"/>
  <path d="M20,-14 L36,-22 L44,-6 L28,2 Z" fill="url(#wreckBrass3)"/>
  <!-- palm -->
  <path d="M-4,2 Q6,-14 24,-14 Q34,-12 32,-2 Q28,10 12,14 Q0,16 -4,10 Z" fill="url(#wreckGlove3)"/>
  <!-- fingers pinching the page corner -->
  <path d="M-4,4 Q-14,0 -18,4" fill="none" stroke="#40614e" stroke-width="5" stroke-linecap="round"/>
  <path d="M-2,10 Q-12,8 -16,12" fill="none" stroke="#40614e" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M2,14 Q-6,15 -10,19" fill="none" stroke="#3a5847" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M6,-10 Q-2,-14 -8,-10" fill="none" stroke="#3a5847" stroke-width="4.6" stroke-linecap="round"/>
  <!-- seam highlights -->
  <path d="M4,0 Q16,-8 28,-6" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.6"/>
</g>
<!-- Pencil and a brass magnifier resting on the table -->
<rect x="118" y="160" width="52" height="3.4" rx="1.6" fill="#7a5a18" transform="rotate(-3,144,162)"/>
<path d="M170,160 L178,162 L170,164 Z" fill="#2a2a2a" transform="rotate(-3,144,162)"/>
<g transform="translate(388,158)">
  <circle cx="0" cy="0" r="11" fill="#123038" opacity="0.5"/>
  <circle cx="0" cy="0" r="11" fill="none" stroke="url(#wreckBrass3)" stroke-width="2.4"/>
  <path d="M8,8 L20,16" stroke="url(#wreckBrass3)" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M-5,-5 Q-2,-8 2,-7" fill="none" stroke="#ffeaa7" stroke-width="1.4" opacity="0.5"/>
</g>
<!-- Ink bottle, stoppered, unbothered by the ocean -->
<rect x="196" y="150" width="14" height="16" rx="2" fill="#0e2224"/>
<rect x="196" y="150" width="14" height="5" rx="2" fill="#1a3a3c"/>
<rect x="200" y="145" width="6" height="6" rx="1" fill="#5c4409"/>
<!-- Motes drifting through the warm light -->
<circle cx="140" cy="60" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="60;44;60" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.34;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="330" cy="40" r="1.2" fill="#ffeaa7" opacity="0.25"><animate attributeName="cy" values="40;24;40" dur="11s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="450" cy="110" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="110;92;110" dur="12s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="30" cy="90" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="90;72;90" dur="13s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
</svg>`;

// Scene 4: Fredward with his palm flat on the open book, holding your eye,
// the one moment he is making a case. The book magnificent. Whole deck behind.
STORY_SCENES['wreck_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="50%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckBrass4" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit4" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass4" cx="36%" cy="32%" r="70%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.85"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.4"/><stop offset="100%" stop-color="#123038" stop-opacity="0.9"/>
  </radialGradient>
  <radialGradient id="wreckLampG4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckPage4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eee3b8"/><stop offset="100%" stop-color="#cbba86"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater4)"/>
<!-- Caustics -->
<polygon points="90,0 118,0 140,120 118,120" fill="#bfe6d8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="360,0 386,0 362,130 340,130" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- The length of the deck receding right: the whole wreck is behind him -->
<path d="M0,150 L500,120 L500,164 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,164 L500,260 L0,260 Z" fill="url(#wreckDeck4)"/>
<path d="M0,196 L500,164 L500,172 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,216 L500,182 M0,236 L500,200" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Rail with the amber lamp string, running away down the hull -->
<path d="M0,152 L500,122" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.8"/>
<path d="M0,158 Q46,166 92,156 Q140,164 186,152 Q234,160 280,148 Q328,156 374,142 Q420,150 466,136" fill="none" stroke="#2c5450" stroke-width="0.8" opacity="0.6"/>
<g>
  <circle cx="46" cy="164" r="22" fill="url(#wreckLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3.1s" repeatCount="indefinite"/></circle>
  <circle cx="140" cy="160" r="20" fill="url(#wreckLampG4)" opacity="0.46"><animate attributeName="opacity" values="0.3;0.56;0.38;0.5;0.3" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></circle>
  <circle cx="328" cy="152" r="20" fill="url(#wreckLampG4)" opacity="0.46"><animate attributeName="opacity" values="0.3;0.58;0.38;0.52;0.3" dur="3.5s" repeatCount="indefinite" begin="1.6s"/></circle>
  <circle cx="420" cy="146" r="18" fill="url(#wreckLampG4)" opacity="0.42"><animate attributeName="opacity" values="0.26;0.52;0.34;0.48;0.26" dur="3s" repeatCount="indefinite" begin="2.4s"/></circle>
</g>
<g fill="#F2C14E">
  <rect x="43" y="161" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.1s" repeatCount="indefinite"/></rect>
  <rect x="137" y="157" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></rect>
  <rect x="325" y="149" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.84;0.96;0.78" dur="3.5s" repeatCount="indefinite" begin="1.6s"/></rect>
  <rect x="417" y="143" width="5.4" height="6.4" rx="1.5"><animate attributeName="opacity" values="0.7;1;0.8;0.92;0.7" dur="3s" repeatCount="indefinite" begin="2.4s"/></rect>
</g>
<!-- Crates and a coil of rope down the deck -->
<rect x="446" y="138" width="34" height="26" rx="2" fill="#1d3b3a"/>
<rect x="446" y="138" width="34" height="6" rx="2" fill="#2c5450" opacity="0.6"/>
<ellipse cx="404" cy="166" rx="16" ry="5" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.6"/>
<ellipse cx="404" cy="163" rx="12" ry="4" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.5"/>
<!-- THE TABLE, bolted, low and wide, front of frame -->
<path d="M96,214 L456,196 L468,214 L88,234 Z" fill="#1d3b3a"/>
<path d="M96,214 L456,196 L457,200 L96,218 Z" fill="#2c5450" opacity="0.55"/>
<rect x="122" y="230" width="11" height="30" fill="#173537"/>
<rect x="418" y="212" width="11" height="30" fill="#173537"/>
<!-- THE BOOK, magnificent: a slab of pages the sea gave up on -->
<path d="M132,214 L424,199 L424,186 L132,201 Z" fill="#8a7a4c"/>
<path d="M132,201 L424,186 L424,182 L132,197 Z" fill="#a5945f"/>
<path d="M138,203 L420,189 M138,207 L420,193 M138,211 L420,197" stroke="#6d5f38" stroke-width="0.6" opacity="0.55"/>
<!-- covers, dark and salt-stained, visible at the outer edges -->
<path d="M128,216 L134,216 L134,180 L128,181 Z" fill="#3d2a12"/>
<path d="M422,200 L428,199 L428,164 L422,165 Z" fill="#3d2a12"/>
<!-- open spread -->
<path d="M138,199 Q212,186 280,190 L280,124 Q212,116 138,132 Z" fill="url(#wreckPage4)"/>
<path d="M280,190 Q352,186 418,184 L418,120 Q352,112 280,124 Z" fill="url(#wreckPage4)" opacity="0.92"/>
<path d="M280,124 L280,190" stroke="#8a7a4c" stroke-width="3.5" opacity="0.5"/>
<!-- left page: a drawn creature and dense marginal notes -->
<path d="M158,164 Q178,146 196,162 Q212,176 232,158" fill="none" stroke="#3a2e12" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="160" cy="163" r="1.2" fill="#3a2e12"/>
<path d="M154,140 L216,136" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
  <path d="M146,150 L154,149 M146,155 L155,154 M146,160 L152,160 M146,165 L155,164 M146,170 L153,170 M146,175 L155,174 M146,180 L151,180"/>
</g>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
  <path d="M158,174 L242,170 M158,179 L250,175 M158,184 L218,181"/>
</g>
<!-- right page: another creature, half drawn, and the columns of notes -->
<ellipse cx="330" cy="152" rx="15" ry="10" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M316,150 L306,145 M316,155 L305,157 M344,150 L354,145 M344,155 L355,157 M322,161 L316,168 M338,160 L344,167" stroke="#3a2e12" stroke-width="1" stroke-linecap="round"/>
<path d="M296,132 L354,128" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
  <path d="M296,172 L404,167 M296,177 L396,172 M296,182 L350,178"/>
</g>
<!-- the warm light lands on the page and nowhere else in particular -->
<path d="M138,199 Q212,186 280,190 L280,124 Q212,116 138,132 Z" fill="#ffeaa7" opacity="0.09"><animate attributeName="opacity" values="0.05;0.13;0.05" dur="4s" repeatCount="indefinite"/></path>
<!-- FREDWARD, behind the table, palm flat on the page, holding your eye -->
<g transform="translate(232,72)">
  <animateTransform attributeName="transform" type="translate" values="232,72;232,75;232,72" dur="6s" repeatCount="indefinite"/>
  <!-- torso -->
  <path d="M-30,44 Q0,34 30,44 L26,96 Q0,104 -26,96 Z" fill="url(#wreckSuit4)"/>
  <path d="M-26,58 Q0,50 26,58 M-27,72 Q0,64 27,72" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.55"/>
  <!-- chest plate -->
  <rect x="-13" y="46" width="26" height="12" rx="2.5" fill="url(#wreckBrass4)"/>
  <circle cx="-6" cy="52" r="1.5" fill="#c9962e"/><circle cx="6" cy="52" r="1.5" fill="#c9962e"/>
  <!-- neck ring -->
  <ellipse cx="0" cy="40" rx="17" ry="6" fill="url(#wreckBrass4)"/>
  <!-- HELMET -->
  <circle cx="0" cy="16" r="23" fill="url(#wreckBrass4)"/>
  <circle cx="0" cy="16" r="23" fill="none" stroke="#5c4409" stroke-width="1.6"/>
  <circle cx="-19" cy="18" r="5.4" fill="#5c4409"/><circle cx="-19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
  <circle cx="19" cy="18" r="5.4" fill="#5c4409"/><circle cx="19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
  <circle cx="-12" cy="-1" r="1.3" fill="#c9962e"/><circle cx="0" cy="-5" r="1.3" fill="#c9962e"/>
  <circle cx="12" cy="-1" r="1.3" fill="#c9962e"/>
  <!-- faceplate -->
  <circle cx="0" cy="17" r="15.5" fill="url(#wreckGlass4)"/>
  <circle cx="0" cy="17" r="15.5" fill="none" stroke="#c9962e" stroke-width="2.2"/>
  <!-- face: level, direct, entirely certain -->
  <circle cx="-5" cy="14" r="1.9" fill="#0d2024"/>
  <circle cx="5" cy="14" r="1.9" fill="#0d2024"/>
  <path d="M-8,10 Q-5,8 -2,10 M2,10 Q5,8 8,10" fill="none" stroke="#0d2024" stroke-width="1.1" stroke-linecap="round" opacity="0.8"/>
  <path d="M-6,22 Q0,25 6,22" fill="none" stroke="#0d2024" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-6,20 Q0,22 6,20" fill="none" stroke="#0d2024" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
  <path d="M-10,8 Q-5,3 1,6" fill="none" stroke="#ffeaa7" stroke-width="2.6" stroke-linecap="round" opacity="0.65"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/></path>
  <!-- ARM DOWN, palm flat on the open page. This is the gesture. -->
  <path d="M28,54 Q56,68 62,102" fill="none" stroke="url(#wreckSuit4)" stroke-width="11" stroke-linecap="round"/>
  <path d="M52,104 Q66,98 80,102 Q86,106 80,112 Q66,118 52,114 Z" fill="#40614e"/>
  <path d="M56,113 L54,120 M64,115 L63,122 M72,114 L72,121 M79,111 L81,118" stroke="#3a5847" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M56,106 Q68,102 78,105" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.6"/>
  <!-- other arm resting on the table edge -->
  <path d="M-28,54 Q-52,70 -56,96" fill="none" stroke="url(#wreckSuit4)" stroke-width="11" stroke-linecap="round"/>
  <circle cx="-57" cy="100" r="7" fill="#40614e"/>
  <!-- air hose looping back into the dark -->
  <path d="M18,4 Q54,-4 76,18 Q96,40 84,72" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M18,4 Q54,-4 76,18 Q96,40 84,72;M18,4 Q58,-8 80,16 Q100,38 84,72;M18,4 Q54,-4 76,18 Q96,40 84,72" dur="8s" repeatCount="indefinite"/></path>
</g>
<!-- His bubbles, calm and regular -->
<circle cx="252" cy="62" r="1.8" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="62;-10" dur="5.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.45;0" dur="5.4s" repeatCount="indefinite"/></circle>
<circle cx="258" cy="68" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="68;-10" dur="6.6s" repeatCount="indefinite" begin="1.8s"/><animate attributeName="opacity" values="0;0.4;0" dur="6.6s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="246" cy="58" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="58;-10" dur="7.4s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.38;0" dur="7.4s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- Motes -->
<circle cx="90" cy="110" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="110;92;110" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.07;0.25;0.07" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="400" cy="90" r="1.1" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="90;70;90" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="160" cy="188" r="1" fill="#ffeaa7" opacity="0.24"><animate attributeName="cy" values="188;172;188" dur="10s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.1;0.28;0.1" dur="5s" repeatCount="indefinite" begin="3s"/></circle>
</svg>`;

// Scene 5: Creatures at the edge of lamplight, watching, none of them coming
// closer. Fredward not looking at them.
STORY_SCENES['wreck_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="55%" stop-color="#0d2028"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckBrass5" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit5" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass5" cx="36%" cy="32%" r="70%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.8"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.38"/><stop offset="100%" stop-color="#123038" stop-opacity="0.9"/>
  </radialGradient>
  <radialGradient id="wreckLampG5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.16"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="wreckPool5" cx="50%" cy="60%" r="52%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.16"/><stop offset="70%" stop-color="#F2C14E" stop-opacity="0.03"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater5)"/>
<!-- The pool of lamplight, and everything outside it -->
<rect width="500" height="260" fill="url(#wreckPool5)"/>
<!-- Deck -->
<path d="M0,192 L500,180 L500,260 L0,260 Z" fill="url(#wreckDeck5)"/>
<path d="M0,192 L500,180 L500,188 L0,200 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,214 L500,200 M0,236 L500,220" stroke="#0a1a1e" stroke-width="1" opacity="0.35"/>
<!-- Rail and lamps, centre-left, the source -->
<path d="M0,178 L500,166" fill="none" stroke="#2c5450" stroke-width="1.8" opacity="0.7"/>
<circle cx="130" cy="176" r="30" fill="url(#wreckLampG5)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.7;0.5;0.64;0.42" dur="3.3s" repeatCount="indefinite"/></circle>
<circle cx="238" cy="172" r="28" fill="url(#wreckLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></circle>
<rect x="127" y="173" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.3s" repeatCount="indefinite"/></rect>
<rect x="235" y="169" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.73;1;0.8;0.94;0.73" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></rect>
<!-- Table and book, still lit, still open -->
<path d="M76,220 L268,212 L276,228 L68,236 Z" fill="#1d3b3a"/>
<path d="M100,213 L246,207 L246,199 L100,205 Z" fill="#8a7a4c"/>
<path d="M104,205 Q160,197 172,199 L172,176 Q160,172 104,180 Z" fill="#e8dcae"/>
<path d="M172,199 Q220,197 242,203 L242,180 Q220,172 172,176 Z" fill="#ddd0a0"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.4">
  <path d="M112,186 L160,183 M112,190 L164,187 M112,194 L150,191 M182,186 L232,184 M182,190 L236,188"/>
</g>
<!-- FREDWARD at the table, bent to the page, not looking up -->
<g transform="translate(174,120)">
  <animateTransform attributeName="transform" type="translate" values="174,120;174,123;174,120" dur="6.5s" repeatCount="indefinite"/>
  <path d="M-24,34 Q0,26 24,34 L21,80 Q0,86 -21,80 Z" fill="url(#wreckSuit5)"/>
  <rect x="-10" y="36" width="20" height="10" rx="2" fill="url(#wreckBrass5)"/>
  <ellipse cx="0" cy="31" rx="13.5" ry="5" fill="url(#wreckBrass5)"/>
  <!-- helmet turned down toward the book -->
  <g transform="rotate(16,0,12)">
    <circle cx="0" cy="12" r="18.5" fill="url(#wreckBrass5)"/>
    <circle cx="0" cy="12" r="18.5" fill="none" stroke="#5c4409" stroke-width="1.4"/>
    <circle cx="-15" cy="14" r="4.4" fill="#5c4409"/>
    <circle cx="15" cy="14" r="4.4" fill="#5c4409"/>
    <circle cx="-9" cy="-1" r="1.1" fill="#c9962e"/><circle cx="0" cy="-4" r="1.1" fill="#c9962e"/><circle cx="9" cy="-1" r="1.1" fill="#c9962e"/>
    <circle cx="0" cy="13" r="12.4" fill="url(#wreckGlass5)"/>
    <circle cx="0" cy="13" r="12.4" fill="none" stroke="#c9962e" stroke-width="1.8"/>
    <circle cx="-4" cy="13" r="1.5" fill="#0d2024"/><circle cx="4" cy="13" r="1.5" fill="#0d2024"/>
    <path d="M-8,9 Q-4,7 -1,9 M1,9 Q4,7 8,9" fill="none" stroke="#0d2024" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
    <path d="M-4,19 Q0,21 4,19" fill="none" stroke="#0d2024" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M-8,5 Q-4,1 1,3" fill="none" stroke="#ffeaa7" stroke-width="2.2" stroke-linecap="round" opacity="0.6"><animate attributeName="opacity" values="0.36;0.72;0.36" dur="4.2s" repeatCount="indefinite"/></path>
  </g>
  <!-- drawing arm, working -->
  <path d="M22,44 Q42,60 40,80" fill="none" stroke="url(#wreckSuit5)" stroke-width="9.5" stroke-linecap="round"><animate attributeName="d" values="M22,44 Q42,60 40,80;M22,44 Q44,58 36,80;M22,44 Q42,60 40,80" dur="5s" repeatCount="indefinite"/></path>
  <circle cx="40" cy="82" r="6" fill="#40614e"><animate attributeName="cx" values="40;36;40" dur="5s" repeatCount="indefinite"/></circle>
  <path d="M-22,44 Q-40,58 -42,76" fill="none" stroke="url(#wreckSuit5)" stroke-width="9.5" stroke-linecap="round"/>
  <circle cx="-43" cy="79" r="6" fill="#40614e"/>
  <path d="M14,0 Q44,-10 62,10 Q80,32 68,60" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M14,0 Q44,-10 62,10 Q80,32 68,60;M14,0 Q48,-14 66,8 Q84,30 68,60;M14,0 Q44,-10 62,10 Q80,32 68,60" dur="9s" repeatCount="indefinite"/></path>
</g>
<!-- THE CREATURES, at the edge of the light, none of them coming closer -->
<!-- Right-hand cluster, just past the lamp's reach -->
<g opacity="0.55">
  <path d="M356,144 Q372,132 392,142 Q404,148 392,154 Q372,162 356,150 Z" fill="#0a1a20"/>
  <path d="M356,150 L344,158 L348,144 Z" fill="#0a1a20"/>
  <circle cx="386" cy="145" r="1.6" fill="#F2C14E" opacity="0.5"><animate attributeName="opacity" values="0.24;0.6;0.24" dur="4s" repeatCount="indefinite"/></circle>
  <animateTransform attributeName="transform" type="translate" values="0,0;6,-4;0,0" dur="12s" repeatCount="indefinite"/>
</g>
<g opacity="0.45">
  <path d="M420,190 Q436,178 456,188 Q466,194 456,200 Q436,208 420,196 Z" fill="#0a1a20"/>
  <path d="M420,196 L408,204 L412,190 Z" fill="#0a1a20"/>
  <circle cx="450" cy="191" r="1.4" fill="#F2C14E" opacity="0.42"><animate attributeName="opacity" values="0.18;0.5;0.18" dur="5.4s" repeatCount="indefinite" begin="1.5s"/></circle>
  <animateTransform attributeName="transform" type="translate" values="0,0;-5,5;0,0" dur="15s" repeatCount="indefinite" begin="2s"/>
</g>
<!-- A long eel-shape holding station in the dark above right -->
<path d="M470,96 Q440,84 414,98 Q392,110 366,102" fill="none" stroke="#0a1a20" stroke-width="7" stroke-linecap="round" opacity="0.55"><animate attributeName="d" values="M470,96 Q440,84 414,98 Q392,110 366,102;M470,96 Q442,90 414,102 Q392,114 366,106;M470,96 Q440,84 414,98 Q392,110 366,102" dur="10s" repeatCount="indefinite"/></path>
<circle cx="368" cy="102" r="1.4" fill="#F2C14E" opacity="0.4"><animate attributeName="opacity" values="0.16;0.48;0.16" dur="6s" repeatCount="indefinite" begin="0.6s"/><animate attributeName="cy" values="102;106;102" dur="10s" repeatCount="indefinite"/></circle>
<!-- Left-hand watchers, further out, barely shapes -->
<g opacity="0.35">
  <ellipse cx="42" cy="112" rx="18" ry="10" fill="#0a1a20"/>
  <path d="M24,112 L12,104 L14,120 Z" fill="#0a1a20"/>
  <circle cx="52" cy="110" r="1.3" fill="#F2C14E" opacity="0.4"><animate attributeName="opacity" values="0.14;0.46;0.14" dur="7s" repeatCount="indefinite" begin="3s"/></circle>
  <animateTransform attributeName="transform" type="translate" values="0,0;4,6;0,0" dur="16s" repeatCount="indefinite"/>
</g>
<g opacity="0.3">
  <ellipse cx="26" cy="196" rx="14" ry="8" fill="#0a1a20"/>
  <path d="M12,196 L2,190 L4,203 Z" fill="#0a1a20"/>
  <circle cx="34" cy="194" r="1.1" fill="#F2C14E" opacity="0.35"><animate attributeName="opacity" values="0.12;0.4;0.12" dur="6.4s" repeatCount="indefinite" begin="4s"/></circle>
  <animateTransform attributeName="transform" type="translate" values="0,0;-3,-5;0,0" dur="14s" repeatCount="indefinite" begin="1s"/>
</g>
<!-- A small crowd of pinprick eyes right at the boundary, nothing else visible -->
<g fill="#F2C14E">
  <circle cx="316" cy="122" r="1" opacity="0.3"><animate attributeName="opacity" values="0.1;0.36;0.1" dur="5s" repeatCount="indefinite"/></circle>
  <circle cx="330" cy="118" r="0.9" opacity="0.26"><animate attributeName="opacity" values="0.08;0.32;0.08" dur="6.2s" repeatCount="indefinite" begin="1.3s"/></circle>
  <circle cx="308" cy="212" r="1" opacity="0.28"><animate attributeName="opacity" values="0.1;0.34;0.1" dur="5.6s" repeatCount="indefinite" begin="2.4s"/></circle>
  <circle cx="322" cy="220" r="0.8" opacity="0.24"><animate attributeName="opacity" values="0.07;0.3;0.07" dur="7.2s" repeatCount="indefinite" begin="3.6s"/></circle>
  <circle cx="82" cy="60" r="0.9" opacity="0.24"><animate attributeName="opacity" values="0.08;0.3;0.08" dur="6.8s" repeatCount="indefinite" begin="0.9s"/></circle>
</g>
<!-- The crab on the mat, still in the light, still in charge -->
<g transform="translate(400,236)">
  <path d="M-26,0 L26,0 L32,11 L-32,11 Z" fill="#5a4a22" opacity="0.9"/>
  <path d="M-26,0 L26,0 L27,3.2 L-27,3.2 Z" fill="#75612e" opacity="0.7"/>
</g>
<g transform="translate(400,232)">
  <ellipse cx="0" cy="0" rx="6.4" ry="4.2" fill="#7a3428"/>
  <ellipse cx="0" cy="-1.2" rx="5.4" ry="2.7" fill="#96402f" opacity="0.8"/>
  <circle cx="-2.2" cy="-3" r="1" fill="#0a1a1e"/><circle cx="2.2" cy="-3" r="1" fill="#0a1a1e"/>
  <path d="M-5.5,-1 L-10,-3.6 L-12,-1" fill="none" stroke="#7a3428" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M5.5,-1 L10,-3.6 L12,-1" fill="none" stroke="#7a3428" stroke-width="1.5" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="200" cy="90" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="90;72;90" dur="11s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.5s" repeatCount="indefinite"/></circle>
<circle cx="112" cy="140" r="1.1" fill="#ffeaa7" opacity="0.22"><animate attributeName="cy" values="140;124;140" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.08;0.26;0.08" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="286" cy="46" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="46;28;46" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Scene 6: The lure held flat on two palms. Wire, glass, knotted line, one
// dented bell. Hero prop shot, and slightly shabby.
STORY_SCENES['wreck_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="60%" stop-color="#0d2028"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckLureLit6" cx="50%" cy="44%" r="52%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.28"/><stop offset="50%" stop-color="#F2C14E" stop-opacity="0.08"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckBrass6" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="48%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckGlove6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a7059"/><stop offset="100%" stop-color="#25392f"/>
  </linearGradient>
  <radialGradient id="wreckBead6" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.9"/><stop offset="60%" stop-color="#7fc4b8" stop-opacity="0.4"/><stop offset="100%" stop-color="#123038" stop-opacity="0.7"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater6)"/>
<rect width="500" height="260" fill="url(#wreckLureLit6)"/>
<!-- Dark bulkhead behind, so the object reads -->
<rect x="0" y="0" width="500" height="150" fill="#07141a" opacity="0.5"/>
<path d="M0,148 L500,144" stroke="#1a4a55" stroke-width="1.2" opacity="0.3"/>
<!-- Two crates stacked out of focus at the right -->
<rect x="418" y="118" width="70" height="52" rx="2" fill="#0f2528" opacity="0.7"/>
<rect x="418" y="118" width="70" height="7" rx="2" fill="#1d3b3a" opacity="0.6"/>
<!-- A rope loop on the wall left -->
<path d="M40,30 Q18,58 36,78 Q52,94 32,112" fill="none" stroke="#2a3a2c" stroke-width="2.4" opacity="0.45"><animate attributeName="d" values="M40,30 Q18,58 36,78 Q52,94 32,112;M40,30 Q24,58 32,78 Q48,94 36,112;M40,30 Q18,58 36,78 Q52,94 32,112" dur="11s" repeatCount="indefinite"/></path>
<!-- HIS TWO PALMS, held out flat, filling the bottom of frame -->
<!-- forearms coming in from below -->
<path d="M96,260 Q112,214 156,196" fill="none" stroke="#2e4a3c" stroke-width="26" stroke-linecap="round"/>
<path d="M404,260 Q388,214 344,196" fill="none" stroke="#2e4a3c" stroke-width="26" stroke-linecap="round"/>
<!-- brass cuffs -->
<path d="M120,236 L156,218 L170,244 L134,262 Z" fill="url(#wreckBrass6)"/>
<path d="M380,236 L344,218 L330,244 L366,262 Z" fill="url(#wreckBrass6)"/>
<circle cx="140" cy="240" r="1.6" fill="#c9962e"/><circle cx="360" cy="240" r="1.6" fill="#c9962e"/>
<!-- left palm -->
<path d="M128,208 Q158,182 210,180 Q244,180 250,196 Q252,212 226,220 Q176,232 140,224 Q124,218 128,208 Z" fill="url(#wreckGlove6)"/>
<path d="M212,178 Q234,172 246,178 M204,175 Q222,168 236,173" fill="none" stroke="#4a7059" stroke-width="7" stroke-linecap="round"/>
<path d="M150,200 Q184,190 226,192" fill="none" stroke="#5b8069" stroke-width="1" opacity="0.5"/>
<!-- right palm -->
<path d="M372,208 Q342,182 290,180 Q256,180 250,196 Q248,212 274,220 Q324,232 360,224 Q376,218 372,208 Z" fill="url(#wreckGlove6)"/>
<path d="M288,178 Q266,172 254,178 M296,175 Q278,168 264,173" fill="none" stroke="#4a7059" stroke-width="7" stroke-linecap="round"/>
<path d="M350,200 Q316,190 274,192" fill="none" stroke="#5b8069" stroke-width="1" opacity="0.5"/>
<!-- THE LURE, lying across both palms. Wire, glass, knotted line, one bell. -->
<g transform="translate(250,172)">
  <animateTransform attributeName="transform" type="translate" values="250,172;250,175;250,172" dur="5.5s" repeatCount="indefinite"/>
  <!-- the wire armature: a bent hoop, plainly hand-made and not quite true -->
  <path d="M-72,14 Q-58,-22 -20,-30 Q16,-38 48,-20 Q72,-6 66,18" fill="none" stroke="#8b6914" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M-72,14 Q-58,-22 -20,-30 Q16,-38 48,-20 Q72,-6 66,18" fill="none" stroke="#c9962e" stroke-width="0.9" opacity="0.5"/>
  <!-- a second wire, crossing, soldered badly at the join -->
  <path d="M-52,20 Q-20,-6 10,-14 Q40,-22 58,-4" fill="none" stroke="#7a5a18" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="10" cy="-14" r="2.6" fill="#8b6914"/>
  <circle cx="-20" cy="-30" r="2.2" fill="#8b6914"/>
  <!-- glass beads threaded on the wire, catching the lamp -->
  <circle cx="-46" cy="-8" r="5.4" fill="url(#wreckBead6)"/>
  <circle cx="-47.6" cy="-9.8" r="1.6" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.3;0.75;0.3" dur="3.6s" repeatCount="indefinite"/></circle>
  <circle cx="-8" cy="-27" r="6.4" fill="url(#wreckBead6)"/>
  <circle cx="-10" cy="-29" r="1.9" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.4s" repeatCount="indefinite" begin="1.2s"/></circle>
  <circle cx="34" cy="-23" r="4.6" fill="url(#wreckBead6)"/>
  <circle cx="32.6" cy="-24.6" r="1.4" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.25;0.7;0.25" dur="3.1s" repeatCount="indefinite" begin="2.3s"/></circle>
  <!-- one bead visibly chipped -->
  <circle cx="56" cy="-2" r="4" fill="url(#wreckBead6)"/>
  <path d="M56,-6 L60,-3 L57,2" fill="#123038" opacity="0.55"/>
  <!-- knotted line, wound along the frame with real knots at intervals -->
  <path d="M-70,10 Q-52,2 -34,8 Q-14,16 6,6 Q28,-4 48,4 Q62,10 64,16" fill="none" stroke="#2a3a2c" stroke-width="1.8"/>
  <path d="M-70,10 Q-52,2 -34,8 Q-14,16 6,6 Q28,-4 48,4 Q62,10 64,16" fill="none" stroke="#4a5a3e" stroke-width="0.6" opacity="0.5"/>
  <circle cx="-34" cy="8" r="2.4" fill="#2a3a2c"/><circle cx="6" cy="6" r="2.6" fill="#2a3a2c"/><circle cx="48" cy="4" r="2.2" fill="#2a3a2c"/>
  <!-- a loose tail of line, drifting slightly -->
  <path d="M-70,10 Q-84,20 -78,34" fill="none" stroke="#2a3a2c" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M-70,10 Q-84,20 -78,34;M-70,10 Q-88,18 -80,32;M-70,10 Q-84,20 -78,34" dur="5s" repeatCount="indefinite"/></path>
  <!-- THE BELL, small and dented, on the end of it -->
  <g transform="translate(66,26)">
    <animateTransform attributeName="transform" type="rotate" values="-4,0,-8;4,0,-8;-4,0,-8" dur="4.6s" repeatCount="indefinite" additive="sum"/>
    <path d="M-9,6 Q-9,-8 0,-9 Q9,-8 9,6 Z" fill="url(#wreckBrass6)"/>
    <path d="M-9,6 Q0,10 9,6 L9,8 Q0,12 -9,8 Z" fill="#5c4409"/>
    <!-- the dent, a flat spot where the curve should be -->
    <path d="M3,-6 L8,-1 L6,4" fill="none" stroke="#5c4409" stroke-width="1.6"/>
    <path d="M-6,-4 Q-4,-7 0,-7.6" fill="none" stroke="#ffeaa7" stroke-width="1.2" opacity="0.55"/>
    <circle cx="0" cy="-11" r="2.2" fill="none" stroke="#8b6914" stroke-width="1.4"/>
    <circle cx="0" cy="8" r="1.8" fill="#5c4409"/>
  </g>
  <!-- one wire that has simply been bent back on itself and left -->
  <path d="M-72,14 Q-84,6 -76,-4" fill="none" stroke="#7a5a18" stroke-width="1.8" stroke-linecap="round"/>
</g>
<!-- Faint amber halo where the lamp above catches the brass -->
<ellipse cx="250" cy="160" rx="110" ry="40" fill="#F2C14E" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Motes -->
<circle cx="150" cy="80" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="80;62;80" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="356" cy="64" r="1.1" fill="#ffeaa7" opacity="0.22"><animate attributeName="cy" values="64;46;64" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.08;0.26;0.08" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="70" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;102;120" dur="13s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="3.5s"/></circle>
</svg>`;

// Scene 7: The lure changing hands. Both figures, mid-deck.
STORY_SCENES['wreck_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="50%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckBrass7" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit7" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass7" cx="36%" cy="32%" r="70%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.82"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.38"/><stop offset="100%" stop-color="#123038" stop-opacity="0.9"/>
  </radialGradient>
  <radialGradient id="wreckLampG7" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.52"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.17"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater7)"/>
<polygon points="140,0 168,0 188,120 166,120" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="340,0 364,0 342,124 320,124" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- Superstructure and mast stumps behind -->
<path d="M0,146 L54,142 L60,110 L112,106 L118,144 L188,140 L188,190 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M420,136 L500,128 L500,190 L418,192 Z" fill="#0d2028" opacity="0.55"/>
<!-- Deck -->
<path d="M0,192 L500,178 L500,260 L0,260 Z" fill="url(#wreckDeck7)"/>
<path d="M0,192 L500,178 L500,187 L0,201 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,216 L500,198 M0,238 L500,218" stroke="#0a1a1e" stroke-width="1" opacity="0.35"/>
<!-- Rail and lamps -->
<path d="M0,178 L500,164" fill="none" stroke="#2c5450" stroke-width="1.9" opacity="0.75"/>
<circle cx="58" cy="176" r="24" fill="url(#wreckLampG7)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="252" cy="170" r="26" fill="url(#wreckLampG7)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.8s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="446" cy="164" r="24" fill="url(#wreckLampG7)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.62;0.42;0.56;0.34" dur="3.6s" repeatCount="indefinite" begin="2s"/></circle>
<g fill="#F2C14E">
  <rect x="55" y="173" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="249" y="167" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="2.8s" repeatCount="indefinite" begin="1s"/></rect>
  <rect x="443" y="161" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.73;1;0.8;0.94;0.73" dur="3.6s" repeatCount="indefinite" begin="2s"/></rect>
</g>
<!-- Table with the book, pushed to the left -->
<path d="M18,214 L128,208 L136,222 L10,228 Z" fill="#1d3b3a"/>
<path d="M34,208 L118,204 L118,196 L34,200 Z" fill="#8a7a4c"/>
<path d="M38,201 L74,197 L74,182 L38,187 Z" fill="#e8dcae"/>
<path d="M74,197 L112,199 L112,184 L74,182 Z" fill="#ddd0a0"/>
<!-- FREDWARD, left of centre, handing it over -->
<g transform="translate(196,110)">
  <animateTransform attributeName="transform" type="translate" values="196,110;196,113;196,110" dur="6s" repeatCount="indefinite"/>
  <path d="M-26,36 Q0,28 26,36 L23,86 Q0,92 -23,86 Z" fill="url(#wreckSuit7)"/>
  <path d="M-23,50 Q0,43 23,50 M-24,64 Q0,57 24,64" fill="none" stroke="#1c2f26" stroke-width="1.1" opacity="0.5"/>
  <rect x="-11" y="38" width="22" height="11" rx="2.4" fill="url(#wreckBrass7)"/>
  <circle cx="-5" cy="43.5" r="1.4" fill="#c9962e"/><circle cx="5" cy="43.5" r="1.4" fill="#c9962e"/>
  <ellipse cx="0" cy="32" rx="14.6" ry="5.4" fill="url(#wreckBrass7)"/>
  <!-- helmet, tipped slightly toward the player -->
  <g transform="rotate(8,0,12)">
    <circle cx="0" cy="12" r="20" fill="url(#wreckBrass7)"/>
    <circle cx="0" cy="12" r="20" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <circle cx="-16.5" cy="14" r="4.7" fill="#5c4409"/><circle cx="-16.5" cy="14" r="2.8" fill="#123038" opacity="0.8"/>
    <circle cx="16.5" cy="14" r="4.7" fill="#5c4409"/>
    <circle cx="-10" cy="-2" r="1.2" fill="#c9962e"/><circle cx="0" cy="-5.4" r="1.2" fill="#c9962e"/><circle cx="10" cy="-2" r="1.2" fill="#c9962e"/>
    <circle cx="0" cy="13" r="13.4" fill="url(#wreckGlass7)"/>
    <circle cx="0" cy="13" r="13.4" fill="none" stroke="#c9962e" stroke-width="2"/>
    <!-- enormously pleased -->
    <path d="M-6.6,10.5 Q-4.2,8 -1.8,10.5" fill="none" stroke="#0d2024" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M1.8,10.5 Q4.2,8 6.6,10.5" fill="none" stroke="#0d2024" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M-6,17 Q0,23 6,17" fill="none" stroke="#0d2024" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M-8.5,5 Q-4,0.5 1.5,3" fill="none" stroke="#ffeaa7" stroke-width="2.4" stroke-linecap="round" opacity="0.62"><animate attributeName="opacity" values="0.38;0.78;0.38" dur="3.8s" repeatCount="indefinite"/></path>
  </g>
  <!-- offering arm, extended right, pressing the lure across -->
  <path d="M24,48 Q58,52 76,62" fill="none" stroke="url(#wreckSuit7)" stroke-width="10.5" stroke-linecap="round"/>
  <path d="M72,56 Q86,54 94,60 Q98,66 90,70 Q78,74 70,68 Z" fill="#40614e"/>
  <path d="M-24,48 Q-46,60 -50,80" fill="none" stroke="url(#wreckSuit7)" stroke-width="10.5" stroke-linecap="round"/>
  <circle cx="-51" cy="83" r="6.4" fill="#40614e"/>
  <path d="M16,0 Q50,-10 70,12 Q88,34 76,64" fill="none" stroke="#2a3a2c" stroke-width="2.9" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M16,0 Q50,-10 70,12 Q88,34 76,64;M16,0 Q54,-14 74,10 Q92,32 76,64;M16,0 Q50,-10 70,12 Q88,34 76,64" dur="8.5s" repeatCount="indefinite"/></path>
</g>
<!-- THE LURE, mid-air between them, both hands on it -->
<g transform="translate(298,178)">
  <animateTransform attributeName="transform" type="translate" values="298,178;298,181;298,178" dur="5s" repeatCount="indefinite"/>
  <path d="M-24,4 Q-19,-8 -6,-11 Q7,-14 17,-7 Q25,-2 23,6" fill="none" stroke="#8b6914" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M-17,7 Q-6,-2 4,-5 Q14,-8 20,-2" fill="none" stroke="#7a5a18" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="-15" cy="-3" r="2.4" fill="#ffeaa7" opacity="0.7"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.4s" repeatCount="indefinite"/></circle>
  <circle cx="-2" cy="-10" r="2.8" fill="#ffeaa7" opacity="0.65"><animate attributeName="opacity" values="0.35;0.8;0.35" dur="4.2s" repeatCount="indefinite" begin="1.1s"/></circle>
  <circle cx="12" cy="-8" r="2" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.3;0.75;0.3" dur="3s" repeatCount="indefinite" begin="2.2s"/></circle>
  <path d="M-23,3 Q-12,-1 -2,2 Q10,5 20,2" fill="none" stroke="#2a3a2c" stroke-width="1.3"/>
  <circle cx="-2" cy="2" r="1.6" fill="#2a3a2c"/>
  <g transform="translate(23,10)">
    <animateTransform attributeName="transform" type="rotate" values="-5,0,-4;5,0,-4;-5,0,-4" dur="3.4s" repeatCount="indefinite" additive="sum"/>
    <path d="M-5,3 Q-5,-4 0,-5 Q5,-4 5,3 Z" fill="url(#wreckBrass7)"/>
    <path d="M-5,3 Q0,5.4 5,3 L5,4.4 Q0,6.6 -5,4.4 Z" fill="#5c4409"/>
    <path d="M2,-3 L4.6,-0.6" stroke="#5c4409" stroke-width="1"/>
    <circle cx="0" cy="-6.6" r="1.3" fill="none" stroke="#8b6914" stroke-width="0.9"/>
  </g>
</g>
<!-- THE PLAYER, right of centre, taking it. Smaller, plainer, no faceplate. -->
<g transform="translate(360,118)">
  <animateTransform attributeName="transform" type="translate" values="360,118;360,121;360,118" dur="7s" repeatCount="indefinite"/>
  <path d="M-19,30 Q0,23 19,30 L17,76 Q0,82 -17,76 Z" fill="#132c30"/>
  <path d="M-17,42 Q0,36 17,42" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.6"/>
  <!-- tank on the back -->
  <rect x="14" y="30" width="10" height="26" rx="5" fill="#1a4a55"/>
  <rect x="16" y="32" width="3" height="20" rx="1.5" fill="#2a6a75" opacity="0.6"/>
  <!-- head, simple mask, no brass -->
  <circle cx="0" cy="12" r="13" fill="#132c30"/>
  <ellipse cx="0" cy="10" rx="9.4" ry="7" fill="#1a4a55" opacity="0.7"/>
  <ellipse cx="-2" cy="7.4" rx="3.4" ry="2.4" fill="#7fc4b8" opacity="0.4"/>
  <path d="M-9,18 Q0,22 9,18" fill="none" stroke="#0a1a1e" stroke-width="1.4"/>
  <!-- reaching arm, hands closing on the lure -->
  <path d="M-18,42 Q-42,48 -58,58" fill="none" stroke="#132c30" stroke-width="9.5" stroke-linecap="round"/>
  <path d="M-54,54 Q-66,52 -72,58 Q-74,64 -66,67 Q-56,70 -50,64 Z" fill="#1a3a3e"/>
  <path d="M18,44 Q34,56 34,74" fill="none" stroke="#132c30" stroke-width="9.5" stroke-linecap="round"/>
  <circle cx="34" cy="77" r="5.6" fill="#1a3a3e"/>
  <!-- fins -->
  <path d="M-8,80 Q-14,90 -22,92" fill="none" stroke="#132c30" stroke-width="7" stroke-linecap="round"/>
  <path d="M8,80 Q14,90 22,92" fill="none" stroke="#132c30" stroke-width="7" stroke-linecap="round"/>
</g>
<!-- Player bubbles -->
<circle cx="374" cy="110" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="110;-10" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.4;0" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="380" cy="118" r="1.1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="118;-10" dur="7.4s" repeatCount="indefinite" begin="2.2s"/><animate attributeName="opacity" values="0;0.35;0" dur="7.4s" repeatCount="indefinite" begin="2.2s"/></circle>
<!-- Fredward bubbles -->
<circle cx="212" cy="98" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="98;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="206" cy="92" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="92;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- The crab, foreground left, entirely uninvolved -->
<g transform="translate(122,242)">
  <path d="M-28,0 L28,0 L34,12 L-34,12 Z" fill="#5a4a22"/>
  <path d="M-28,0 L28,0 L29,3.4 L-29,3.4 Z" fill="#75612e" opacity="0.75"/>
  <path d="M-25,5.4 L26,5.4 M-27,9 L28,9" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(122,238)">
  <ellipse cx="0" cy="0" rx="6.6" ry="4.4" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.3" rx="5.6" ry="2.8" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.3" cy="-3.2" r="1" fill="#0a1a1e"/><circle cx="2.3" cy="-3.2" r="1" fill="#0a1a1e"/>
  <path d="M-5.6,-1 L-10.4,-3.8 L-12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"><animate attributeName="d" values="M-5.6,-1 L-10.4,-3.8 L-12.4,-1;M-5.6,-1 L-10.4,-4.8 L-12.4,-2;M-5.6,-1 L-10.4,-3.8 L-12.4,-1" dur="2.8s" repeatCount="indefinite"/></path>
  <path d="M5.6,-1 L10.4,-3.8 L12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-4.6,2.8 L-7.4,5.6 M0,3.6 L0,6.6 M4.6,2.8 L7.4,5.6" stroke="#8f3b2e" stroke-width="1.1" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="120" cy="90" r="1" fill="#ffeaa7" opacity="0.24"><animate attributeName="cy" values="90;72;90" dur="11s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.28;0.1" dur="5.5s" repeatCount="indefinite"/></circle>
<circle cx="424" cy="104" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="104;86;104" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="266" cy="52" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="52;34;52" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Scene 8: Fredward turned away, looking down the length of his own wreck,
// smiling. Player figure small and still in the foreground.
// DELIBERATE: identical lighting, palette and lamp values to every other deck
// scene in this file. No vignette, no spotlight, no colour shift, no emphasis.
// The composition does all of it. Do not "improve" this scene by warming or
// cooling it, or by adding a visual signal that it is the sad one.
STORY_SCENES['wreck_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="50%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckHull8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wreckSand8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <linearGradient id="wreckBrass8" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit8" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckLampG8" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.52"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.17"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater8)"/>
<!-- Caustics, same as every other deck scene -->
<polygon points="140,0 168,0 188,120 166,120" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="340,0 364,0 342,124 320,124" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- The hull running away from us, bow at the far end, the length of her -->
<path d="M0,150 L500,120 L500,164 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,164 L500,260 L0,260 Z" fill="url(#wreckDeck8)"/>
<path d="M0,196 L500,164 L500,172 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,216 L500,182 M0,236 L500,200" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Far superstructure, and the broken bow beyond it, going into the green -->
<path d="M312,146 L356,142 L360,116 L404,112 L408,140 L446,138 L446,158 L310,164 Z" fill="#0d2028" opacity="0.7"/>
<path d="M446,138 Q470,132 490,138 L496,152 L446,156 Z" fill="url(#wreckHull8)" opacity="0.75"/>
<!-- Toppled mast, far off, the same one from scene 1 seen end-on -->
<path d="M396,112 L370,58" stroke="#173537" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
<path d="M372,64 Q358,84 368,98" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.5"><animate attributeName="d" values="M372,64 Q358,84 368,98;M372,64 Q362,84 364,98;M372,64 Q358,84 368,98" dur="10s" repeatCount="indefinite"/></path>
<!-- Sand banked along the far side of the hull -->
<path d="M300,166 Q356,152 410,146 Q456,140 500,150 L500,168 L300,178 Z" fill="url(#wreckSand8)" opacity="0.75"/>
<!-- Rail, running the whole length, with the lamp string on it -->
<path d="M0,178 L500,146" fill="none" stroke="#2c5450" stroke-width="1.9" opacity="0.75"/>
<path d="M0,184 Q46,192 92,182 Q140,190 186,178 Q234,186 280,174 Q328,182 374,168 Q420,176 466,162" fill="none" stroke="#2c5450" stroke-width="0.8" opacity="0.55"/>
<!-- Lamps: same colours, same flicker timings, same radii as scene 7 -->
<circle cx="58" cy="190" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="186" cy="180" r="26" fill="url(#wreckLampG8)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.8s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="312" cy="172" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.62;0.42;0.56;0.34" dur="3.6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="416" cy="164" r="20" fill="url(#wreckLampG8)" opacity="0.46"><animate attributeName="opacity" values="0.3;0.56;0.38;0.5;0.3" dur="3.1s" repeatCount="indefinite" begin="0.6s"/></circle>
<circle cx="478" cy="156" r="17" fill="url(#wreckLampG8)" opacity="0.42"><animate attributeName="opacity" values="0.26;0.52;0.34;0.48;0.26" dur="2.7s" repeatCount="indefinite" begin="1.7s"/></circle>
<g fill="#F2C14E">
  <rect x="55" y="187" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="183" y="177" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="2.8s" repeatCount="indefinite" begin="1s"/></rect>
  <rect x="309" y="169" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.73;1;0.8;0.94;0.73" dur="3.6s" repeatCount="indefinite" begin="2s"/></rect>
  <rect x="413.4" y="161" width="5.4" height="6.4" rx="1.5"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="3.1s" repeatCount="indefinite" begin="0.6s"/></rect>
  <rect x="475.6" y="153" width="4.8" height="5.6" rx="1.4"><animate attributeName="opacity" values="0.7;1;0.78;0.92;0.7" dur="2.7s" repeatCount="indefinite" begin="1.7s"/></rect>
</g>
<!-- Deck furniture down the length: table, book, crates, coiled rope -->
<path d="M12,224 L104,220 L112,234 L4,238 Z" fill="#1d3b3a"/>
<path d="M28,219 L96,216 L96,208 L28,212 Z" fill="#8a7a4c"/>
<path d="M32,212 L62,209 L62,196 L32,200 Z" fill="#e8dcae"/>
<path d="M62,209 L92,210 L92,197 L62,196 Z" fill="#ddd0a0"/>
<rect x="248" y="176" width="30" height="22" rx="2" fill="#1d3b3a"/>
<rect x="248" y="176" width="30" height="5" rx="2" fill="#2c5450" opacity="0.55"/>
<ellipse cx="352" cy="176" rx="14" ry="4.4" fill="none" stroke="#2a3a2c" stroke-width="1.8" opacity="0.55"/>
<ellipse cx="352" cy="173.6" rx="10" ry="3.4" fill="none" stroke="#2a3a2c" stroke-width="1.4" opacity="0.45"/>
<!-- FREDWARD, mid-frame, turned away, looking down the length of her -->
<g transform="translate(238,116)">
  <animateTransform attributeName="transform" type="translate" values="238,116;238,119;238,116" dur="6s" repeatCount="indefinite"/>
  <!-- back of the suit: no chest plate, no faceplate, just the shape of a man -->
  <path d="M-25,34 Q0,26 25,34 L22,84 Q0,90 -22,84 Z" fill="url(#wreckSuit8)"/>
  <path d="M-22,48 Q0,41 22,48 M-23,62 Q0,55 23,62" fill="none" stroke="#1c2f26" stroke-width="1.1" opacity="0.5"/>
  <!-- spine seam, and the back weight plate -->
  <path d="M0,36 L0,86" stroke="#1c2f26" stroke-width="1.4" opacity="0.5"/>
  <rect x="-12" y="42" width="24" height="13" rx="2.4" fill="url(#wreckBrass8)"/>
  <circle cx="-6" cy="48.5" r="1.4" fill="#5c4409"/><circle cx="6" cy="48.5" r="1.4" fill="#5c4409"/>
  <ellipse cx="0" cy="30" rx="14.6" ry="5.4" fill="url(#wreckBrass8)"/>
  <!-- helmet from behind and slightly to the right: we get the back and the
       curve of one side port, and just the edge of the faceplate rim, enough
       to read as a smile without showing it -->
  <g transform="rotate(-6,0,10)">
    <circle cx="0" cy="10" r="20" fill="url(#wreckBrass8)"/>
    <circle cx="0" cy="10" r="20" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <!-- the back of a brass hat: rivet ring and a big blank curve -->
    <circle cx="0" cy="10" r="13.6" fill="#8b6914"/>
    <circle cx="0" cy="10" r="13.6" fill="none" stroke="#5c4409" stroke-width="1.4"/>
    <circle cx="-9" cy="-2" r="1.2" fill="#c9962e"/><circle cx="0" cy="-6" r="1.2" fill="#c9962e"/><circle cx="9" cy="-2" r="1.2" fill="#c9962e"/>
    <circle cx="-16" cy="8" r="1.2" fill="#c9962e"/><circle cx="16" cy="8" r="1.2" fill="#c9962e"/>
    <circle cx="-11" cy="20" r="1.2" fill="#c9962e"/><circle cx="11" cy="20" r="1.2" fill="#c9962e"/>
    <!-- side port, turned mostly away -->
    <ellipse cx="17" cy="11" rx="3" ry="4.6" fill="#5c4409"/>
    <ellipse cx="17.4" cy="11" rx="1.6" ry="2.8" fill="#123038" opacity="0.75"/>
    <!-- the far rim of the faceplate, catching the lamp he is looking at -->
    <path d="M19,4 Q22,10 19,17" fill="none" stroke="#c9962e" stroke-width="2" stroke-linecap="round"/>
    <path d="M20,6 Q22.4,10 20,15" fill="none" stroke="#ffeaa7" stroke-width="0.9" opacity="0.5"><animate attributeName="opacity" values="0.3;0.66;0.3" dur="3.8s" repeatCount="indefinite"/></path>
    <!-- normal highlight on the brass crown, no more than the other scenes -->
    <path d="M-9,0 Q-4,-4 1,-2" fill="none" stroke="#ffeaa7" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  </g>
  <!-- hands loose at his sides, one on the rail -->
  <path d="M23,46 Q42,54 46,70" fill="none" stroke="url(#wreckSuit8)" stroke-width="10.5" stroke-linecap="round"/>
  <circle cx="47" cy="73" r="6.4" fill="#40614e"/>
  <path d="M-23,46 Q-40,58 -42,76" fill="none" stroke="url(#wreckSuit8)" stroke-width="10.5" stroke-linecap="round"/>
  <circle cx="-43" cy="79" r="6.4" fill="#40614e"/>
  <!-- air hose trailing back down the deck behind him -->
  <path d="M-14,-2 Q-52,-8 -76,14 Q-98,38 -88,72" fill="none" stroke="#2a3a2c" stroke-width="2.9" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M-14,-2 Q-52,-8 -76,14 Q-98,38 -88,72;M-14,-2 Q-56,-12 -80,12 Q-102,36 -88,72;M-14,-2 Q-52,-8 -76,14 Q-98,38 -88,72" dur="8.5s" repeatCount="indefinite"/></path>
</g>
<!-- His bubbles, the same calm regular rate as always -->
<circle cx="256" cy="100" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="100;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="250" cy="94" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="94;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- THE PLAYER, small and still, foreground left. Not moving. -->
<g transform="translate(96,182)">
  <path d="M-13,22 Q0,17 13,22 L11,54 Q0,58 -11,54 Z" fill="#132c30"/>
  <rect x="10" y="22" width="7" height="19" rx="3.5" fill="#1a4a55"/>
  <circle cx="0" cy="9" r="9.4" fill="#132c30"/>
  <ellipse cx="0" cy="7.6" rx="6.8" ry="5" fill="#1a4a55" opacity="0.65"/>
  <ellipse cx="-1.4" cy="5.6" rx="2.4" ry="1.7" fill="#7fc4b8" opacity="0.35"/>
  <path d="M-12,30 Q-22,36 -24,46" fill="none" stroke="#132c30" stroke-width="6.8" stroke-linecap="round"/>
  <path d="M12,30 Q21,36 22,46" fill="none" stroke="#132c30" stroke-width="6.8" stroke-linecap="round"/>
  <!-- the lure, still in one fist, held down and not looked at -->
  <circle cx="-25" cy="49" r="4.2" fill="#1a3a3e"/>
  <path d="M-30,50 Q-34,44 -30,40" fill="none" stroke="#8b6914" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="-32" cy="45" r="1.4" fill="#ffeaa7" opacity="0.55"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.6s" repeatCount="indefinite"/></circle>
  <path d="M-30,52 Q-33,57 -31,61" fill="none" stroke="#2a3a2c" stroke-width="1" stroke-linecap="round"/>
  <path d="M-6,56 Q-10,64 -16,66" fill="none" stroke="#132c30" stroke-width="5" stroke-linecap="round"/>
  <path d="M6,56 Q10,64 16,66" fill="none" stroke="#132c30" stroke-width="5" stroke-linecap="round"/>
</g>
<!-- Player bubbles, slower than his: the only thing about the player that moves -->
<circle cx="106" cy="176" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="176;-10" dur="8.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.34;0" dur="8.4s" repeatCount="indefinite"/></circle>
<circle cx="111" cy="182" r="1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="182;-10" dur="10.2s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.3;0" dur="10.2s" repeatCount="indefinite" begin="4s"/></circle>
<!-- The crab, on the mat, foreground right. It has not moved. -->
<g transform="translate(396,222)">
  <path d="M-26,0 L26,0 L32,11 L-32,11 Z" fill="#5a4a22"/>
  <path d="M-26,0 L26,0 L27,3.2 L-27,3.2 Z" fill="#75612e" opacity="0.75"/>
  <path d="M-23,5 L24,5 M-25,8.4 L26,8.4" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(396,218)">
  <ellipse cx="0" cy="0" rx="6.4" ry="4.2" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.2" rx="5.4" ry="2.7" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.2" cy="-3" r="1" fill="#0a1a1e"/><circle cx="2.2" cy="-3" r="1" fill="#0a1a1e"/>
  <path d="M-5.5,-1 L-10,-3.6 L-12,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M5.5,-1 L10,-3.6 L12,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-4.4,2.6 L-7,5.4 M0,3.4 L0,6.4 M4.4,2.6 L7,5.4" stroke="#8f3b2e" stroke-width="1.1" stroke-linecap="round"/>
</g>
<!-- Motes, same density and drift as the rest of the deck scenes -->
<circle cx="150" cy="88" r="1" fill="#ffeaa7" opacity="0.24"><animate attributeName="cy" values="88;70;88" dur="11s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.28;0.1" dur="5.5s" repeatCount="indefinite"/></circle>
<circle cx="430" cy="96" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="96;78;96" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="300" cy="48" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="48;30;48" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="66" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;102;120" dur="12.5s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" begin="1.2s"/></circle>
</svg>`;
