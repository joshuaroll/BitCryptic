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
  <radialGradient id="wreckGlass2" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
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
    <!-- THE FACEPLATE: bolted brass rim, dark glass, his face behind it,
         upside down along with the rest of him -->
    <circle cx="0.0" cy="1.0" r="14.0" fill="url(#wreckGlass2)"/>
    <g opacity="0.82" transform="rotate(180,0.0,3.43)">
    <ellipse cx="0.0" cy="3.43" rx="7.84" ry="8.96" fill="#9c7a5e"/>
    <path d="M-7.84,1.93 Q0.0,-6.09 7.84,1.93 L7.84,-2.73 Q0.0,-7.77 -7.84,-2.73 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-6.16,-0.31 Q0.0,-2.92 6.16,-0.31" fill="none" stroke="#5a4131" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,1.37 L-0.75,4.92 Q0.0,5.85 1.31,5.11" fill="none" stroke="#7a5c45" stroke-width="1.12" stroke-linecap="round" opacity="0.8"/>
    <g transform="rotate(180,0.0,3.43)"><path d="M-5.04,1.56 Q-3.17,-0.49 -1.31,1.56" fill="none" stroke="#2a1d12" stroke-width="1.4" stroke-linecap="round"/><path d="M1.31,1.56 Q3.17,-0.49 5.04,1.56" fill="none" stroke="#2a1d12" stroke-width="1.4" stroke-linecap="round"/></g>
    <path d="M-5.23,6.97 Q-2.24,5.48 0.0,6.6 Q2.24,5.48 5.23,6.97" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="1.0" r="14.0" fill="none" stroke="#8b6914" stroke-width="3.17"/>
    <circle cx="0.0" cy="1.0" r="15.31" fill="none" stroke="#c9962e" stroke-width="0.93" opacity="0.75"/>
    <circle cx="13.11" cy="6.43" r="0.93" fill="#5c4409"/><circle cx="5.43" cy="14.11" r="0.93" fill="#5c4409"/><circle cx="-5.43" cy="14.11" r="0.93" fill="#5c4409"/><circle cx="-13.11" cy="6.43" r="0.93" fill="#5c4409"/><circle cx="-13.11" cy="-4.43" r="0.93" fill="#5c4409"/><circle cx="-5.43" cy="-12.11" r="0.93" fill="#5c4409"/><circle cx="5.43" cy="-12.11" r="0.93" fill="#5c4409"/><circle cx="13.11" cy="-4.43" r="0.93" fill="#5c4409"/>
    <path d="M-8.77,-2.17 Q-4.67,-7.77 2.24,-8.15" fill="none" stroke="#dff6ea" stroke-width="2.24" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="3.6s" repeatCount="indefinite"/></path>
    <circle cx="5.79" cy="-4.97" r="1.59" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="3.6s" repeatCount="indefinite"/></circle>
    <path d="M-7.09,7.16 Q0.0,9.96 7.09,7.16" fill="none" stroke="#7fc4b8" stroke-width="1.31" stroke-linecap="round" opacity="0.2"/>
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
<!-- Camera pulled back: the table and everything on it sit at 0.66 in
     the middle of the frame, so the book is a book on a table. -->
<g transform="translate(250,150) scale(0.66) translate(-250,-150)">
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
</g>
<!-- Deck the pull-back has now made room for -->
<path d="M0,214 L500,206 L500,260 L0,260 Z" fill="#132c30" opacity="0.55"/>
<path d="M0,214 L500,206 L500,212 L0,220 Z" fill="#2c5450" opacity="0.22"/>
<path d="M0,236 L500,226" stroke="#0a1a1e" stroke-width="1" opacity="0.3"/>
<!-- A crate and a coil of rope on the deck either side of the table -->
<rect x="16" y="182" width="46" height="34" rx="2" fill="#12292c"/>
<rect x="16" y="182" width="46" height="7" rx="2" fill="#1d3b3a" opacity="0.7"/>
<ellipse cx="452" cy="206" rx="24" ry="7" fill="none" stroke="#2a3a2c" stroke-width="2.6" opacity="0.5"/>
<ellipse cx="452" cy="201" rx="18" ry="5.4" fill="none" stroke="#2a3a2c" stroke-width="2.2" opacity="0.42"/>
<ellipse cx="452" cy="197" rx="12" ry="3.8" fill="none" stroke="#2a3a2c" stroke-width="1.8" opacity="0.35"/>
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
  <radialGradient id="wreckGlass4" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
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
  <!-- faceplate: he is looking straight at you and is entirely certain -->
  <circle cx="0.0" cy="17.0" r="15.5" fill="url(#wreckGlass4)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="19.69" rx="8.68" ry="9.92" fill="#9c7a5e"/>
    <path d="M-8.68,18.03 Q0.0,9.15 8.68,18.03 L8.68,12.87 Q0.0,7.29 -8.68,12.87 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-6.82,15.55 Q0.0,12.66 6.82,15.55" fill="none" stroke="#5a4131" stroke-width="1.55" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,17.41 L-0.83,21.34 Q0.0,22.37 1.45,21.55" fill="none" stroke="#7a5c45" stroke-width="1.24" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="-3.51" cy="17.21" rx="2.07" ry="1.65" fill="#e8dcc4"/><ellipse cx="3.51" cy="17.21" rx="2.07" ry="1.65" fill="#e8dcc4"/><circle cx="-3.31" cy="17.41" r="1.14" fill="#2a1d12"/><circle cx="3.72" cy="17.41" r="1.14" fill="#2a1d12"/>
    <path d="M-5.79,23.61 Q-2.48,21.96 0.0,23.2 Q2.48,21.96 5.79,23.61" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="17.0" r="15.5" fill="none" stroke="#8b6914" stroke-width="3.51"/>
    <circle cx="0.0" cy="17.0" r="16.95" fill="none" stroke="#c9962e" stroke-width="1.03" opacity="0.75"/>
    <circle cx="14.51" cy="23.01" r="1.03" fill="#5c4409"/><circle cx="6.01" cy="31.51" r="1.03" fill="#5c4409"/><circle cx="-6.01" cy="31.51" r="1.03" fill="#5c4409"/><circle cx="-14.51" cy="23.01" r="1.03" fill="#5c4409"/><circle cx="-14.51" cy="10.99" r="1.03" fill="#5c4409"/><circle cx="-6.01" cy="2.49" r="1.03" fill="#5c4409"/><circle cx="6.01" cy="2.49" r="1.03" fill="#5c4409"/><circle cx="14.51" cy="10.99" r="1.03" fill="#5c4409"/>
    <path d="M-9.71,13.49 Q-5.17,7.29 2.48,6.87" fill="none" stroke="#dff6ea" stroke-width="2.48" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="4s" repeatCount="indefinite"/></path>
    <circle cx="6.41" cy="10.39" r="1.76" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="4s" repeatCount="indefinite"/></circle>
    <path d="M-7.85,23.82 Q0.0,26.92 7.85,23.82" fill="none" stroke="#7fc4b8" stroke-width="1.45" stroke-linecap="round" opacity="0.2"/>
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

// Scene 5: Fredward propped against the rail mid-explanation, hands open and
// deliberately still, not reaching for anything. The step is about asking
// rather than chasing, so the water behind him is EMPTY. No creature in frame,
// deliberately: nothing is being approached and nothing is approaching.
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
  <radialGradient id="wreckGlass5" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
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
<!-- EMPTY WATER behind him. Nothing in it. That is the composition. -->
<rect x="0" y="0" width="500" height="180" fill="#07141a" opacity="0.22"/>
<!-- Rail and lamps, the source -->
<path d="M0,178 L500,166" fill="none" stroke="#2c5450" stroke-width="1.8" opacity="0.7"/>
<circle cx="118" cy="177" r="30" fill="url(#wreckLampG5)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.7;0.5;0.64;0.42" dur="3.3s" repeatCount="indefinite"/></circle>
<circle cx="392" cy="167" r="28" fill="url(#wreckLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></circle>
<rect x="115" y="174" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.3s" repeatCount="indefinite"/></rect>
<rect x="389" y="164" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.73;1;0.8;0.94;0.73" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></rect>
<!-- Table and book, still lit, still open -->
<path d="M76,220 L268,212 L276,228 L68,236 Z" fill="#1d3b3a"/>
<path d="M100,213 L246,207 L246,199 L100,205 Z" fill="#8a7a4c"/>
<path d="M104,205 Q160,197 172,199 L172,176 Q160,172 104,180 Z" fill="#e8dcae"/>
<path d="M172,199 Q220,197 242,203 L242,180 Q220,172 172,176 Z" fill="#ddd0a0"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.4">
  <path d="M112,186 L160,183 M112,190 L164,187 M112,194 L150,191 M182,186 L232,184 M182,190 L236,188"/>
</g>
<!-- FREDWARD at the table, bent to the page, not looking up -->
<g transform="translate(316,116) rotate(-7)">
  <animateTransform attributeName="transform" type="translate" values="316,116;316,118;316,116" dur="7s" repeatCount="indefinite" additive="sum"/>
  <path d="M-24,34 Q0,26 24,34 L21,80 Q0,86 -21,80 Z" fill="url(#wreckSuit5)"/>
  <rect x="-10" y="36" width="20" height="10" rx="2" fill="url(#wreckBrass5)"/>
  <ellipse cx="0" cy="31" rx="13.5" ry="5" fill="url(#wreckBrass5)"/>
  <!-- helmet level: he is talking, not working -->
  <g transform="rotate(-3,0,12)">
    <circle cx="0" cy="12" r="18.5" fill="url(#wreckBrass5)"/>
    <circle cx="0" cy="12" r="18.5" fill="none" stroke="#5c4409" stroke-width="1.4"/>
    <circle cx="-15" cy="14" r="4.4" fill="#5c4409"/>
    <circle cx="15" cy="14" r="4.4" fill="#5c4409"/>
    <circle cx="-9" cy="-1" r="1.1" fill="#c9962e"/><circle cx="0" cy="-4" r="1.1" fill="#c9962e"/><circle cx="9" cy="-1" r="1.1" fill="#c9962e"/>
    <circle cx="0.0" cy="13.0" r="12.4" fill="url(#wreckGlass5)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="15.15" rx="6.94" ry="7.94" fill="#9c7a5e"/>
    <path d="M-6.94,13.83 Q0.0,6.72 6.94,13.83 L6.94,9.69 Q0.0,5.23 -6.94,9.69 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-5.46,11.84 Q0.0,9.53 5.46,11.84" fill="none" stroke="#5a4131" stroke-width="1.24" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,13.33 L-0.66,16.47 Q0.0,17.3 1.16,16.64" fill="none" stroke="#7a5c45" stroke-width="0.99" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="-2.81" cy="14.32" rx="1.65" ry="1.32" fill="#e8dcc4"/><ellipse cx="2.81" cy="14.32" rx="1.65" ry="1.32" fill="#e8dcc4"/><circle cx="-2.65" cy="14.49" r="0.91" fill="#2a1d12"/><circle cx="2.98" cy="14.49" r="0.91" fill="#2a1d12"/>
    <path d="M-4.63,18.29 Q-1.98,16.97 0.0,17.96 Q1.98,16.97 4.63,18.29" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="13.0" r="12.4" fill="none" stroke="#8b6914" stroke-width="2.81"/>
    <circle cx="0.0" cy="13.0" r="13.56" fill="none" stroke="#c9962e" stroke-width="0.83" opacity="0.75"/>
    <circle cx="11.61" cy="17.81" r="0.83" fill="#5c4409"/><circle cx="4.81" cy="24.61" r="0.83" fill="#5c4409"/><circle cx="-4.81" cy="24.61" r="0.83" fill="#5c4409"/><circle cx="-11.61" cy="17.81" r="0.83" fill="#5c4409"/><circle cx="-11.61" cy="8.19" r="0.83" fill="#5c4409"/><circle cx="-4.81" cy="1.39" r="0.83" fill="#5c4409"/><circle cx="4.81" cy="1.39" r="0.83" fill="#5c4409"/><circle cx="11.61" cy="8.19" r="0.83" fill="#5c4409"/>
    <path d="M-7.77,10.19 Q-4.13,5.23 1.98,4.9" fill="none" stroke="#dff6ea" stroke-width="1.98" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="4.2s" repeatCount="indefinite"/></path>
    <circle cx="5.13" cy="7.71" r="1.41" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="4.2s" repeatCount="indefinite"/></circle>
    <path d="M-6.28,18.46 Q0.0,20.94 6.28,18.46" fill="none" stroke="#7fc4b8" stroke-width="1.16" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- BOTH HANDS OPEN AND STILL. Palms up, held out a little, going nowhere.
       No pointing, no reaching, no grabbing: the whole point of the step. -->
  <path d="M22,44 Q44,54 52,70" fill="none" stroke="url(#wreckSuit5)" stroke-width="9.5" stroke-linecap="round"/>
  <path d="M46,68 Q60,64 70,70 Q74,76 66,80 Q54,83 46,77 Z" fill="#40614e"/>
  <path d="M64,70 Q72,66 78,69 M62,75 Q71,73 76,76" fill="none" stroke="#4a7059" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M50,72 Q58,69 66,71" fill="none" stroke="#5b8069" stroke-width="0.8" opacity="0.5"/>
  <path d="M-22,44 Q-44,54 -52,70" fill="none" stroke="url(#wreckSuit5)" stroke-width="9.5" stroke-linecap="round"/>
  <path d="M-46,68 Q-60,64 -70,70 Q-74,76 -66,80 Q-54,83 -46,77 Z" fill="#40614e"/>
  <path d="M-64,70 Q-72,66 -78,69 M-62,75 Q-71,73 -76,76" fill="none" stroke="#4a7059" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M-50,72 Q-58,69 -66,71" fill="none" stroke="#5b8069" stroke-width="0.8" opacity="0.5"/>
  <path d="M14,0 Q44,-10 62,10 Q80,32 68,60" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M14,0 Q44,-10 62,10 Q80,32 68,60;M14,0 Q48,-14 66,8 Q84,30 68,60;M14,0 Q44,-10 62,10 Q80,32 68,60" dur="9s" repeatCount="indefinite"/></path>
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


// Scene 6: The lure held flat on two palms. Hero prop shot. Every part of it
// is a named thing a man bent by hand and did not get quite right: a coat
// hanger of brass wire twisted closed at the top, three glass floats threaded
// on it, a length of knotted fishing line wound round the frame, and one small
// brass bell with a flat spot where it has been dropped.
STORY_SCENES['wreck_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="60%" stop-color="#0d2028"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckLureLit6" cx="50%" cy="42%" r="52%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.26"/><stop offset="50%" stop-color="#F2C14E" stop-opacity="0.07"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckWire6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d3a03a"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckGlove6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a7059"/><stop offset="100%" stop-color="#25392f"/>
  </linearGradient>
  <linearGradient id="wreckFloat6" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0%" stop-color="#cfeee0" stop-opacity="0.85"/><stop offset="45%" stop-color="#6fb3a8" stop-opacity="0.5"/><stop offset="100%" stop-color="#153038" stop-opacity="0.75"/>
  </linearGradient>
  <linearGradient id="wreckBellB6" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="40%" stop-color="#8b6914"/><stop offset="100%" stop-color="#4e3907"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater6)"/>
<rect width="500" height="260" fill="url(#wreckLureLit6)"/>
<!-- Dark bulkhead behind so the object reads clean against it -->
<rect x="0" y="0" width="500" height="160" fill="#07141a" opacity="0.55"/>
<path d="M0,158 L500,154" stroke="#1a4a55" stroke-width="1.2" opacity="0.28"/>
<!-- Crates out of focus at the right, a rope loop on the left -->
<rect x="424" y="112" width="72" height="52" rx="2" fill="#0f2528" opacity="0.65"/>
<rect x="424" y="112" width="72" height="7" rx="2" fill="#1d3b3a" opacity="0.5"/>
<path d="M34,24 Q14,52 32,72 Q48,88 28,106" fill="none" stroke="#2a3a2c" stroke-width="2.4" opacity="0.4"><animate attributeName="d" values="M34,24 Q14,52 32,72 Q48,88 28,106;M34,24 Q20,52 28,72 Q44,88 32,106;M34,24 Q14,52 32,72 Q48,88 28,106" dur="11s" repeatCount="indefinite"/></path>
<!-- HIS TWO PALMS, held out flat and open, filling the bottom of frame -->
<path d="M84,260 Q102,212 150,192" fill="none" stroke="#2e4a3c" stroke-width="28" stroke-linecap="round"/>
<path d="M416,260 Q398,212 350,192" fill="none" stroke="#2e4a3c" stroke-width="28" stroke-linecap="round"/>
<path d="M110,238 L150,216 L166,244 L126,266 Z" fill="#8b6914"/>
<path d="M390,238 L350,216 L334,244 L374,266 Z" fill="#8b6914"/>
<path d="M114,240 L148,221 L152,229 L118,248 Z" fill="#c9962e" opacity="0.5"/>
<path d="M386,240 L352,221 L348,229 L382,248 Z" fill="#c9962e" opacity="0.5"/>
<circle cx="132" cy="243" r="1.8" fill="#5c4409"/><circle cx="368" cy="243" r="1.8" fill="#5c4409"/>
<!-- left palm, fingers open and flat -->
<path d="M120,206 Q152,180 206,178 Q242,178 248,194 Q250,210 224,218 Q172,230 134,222 Q116,216 120,206 Z" fill="url(#wreckGlove6)"/>
<path d="M208,176 Q232,170 246,176" fill="none" stroke="#4a7059" stroke-width="7.6" stroke-linecap="round"/>
<path d="M200,172 Q220,164 236,170" fill="none" stroke="#4a7059" stroke-width="7" stroke-linecap="round"/>
<path d="M190,169 Q208,160 222,166" fill="none" stroke="#43664f" stroke-width="6.4" stroke-linecap="round"/>
<path d="M142,198 Q178,188 222,190" fill="none" stroke="#5b8069" stroke-width="1" opacity="0.5"/>
<!-- right palm -->
<path d="M380,206 Q348,180 294,178 Q258,178 252,194 Q250,210 276,218 Q328,230 366,222 Q384,216 380,206 Z" fill="url(#wreckGlove6)"/>
<path d="M292,176 Q268,170 254,176" fill="none" stroke="#4a7059" stroke-width="7.6" stroke-linecap="round"/>
<path d="M300,172 Q280,164 264,170" fill="none" stroke="#4a7059" stroke-width="7" stroke-linecap="round"/>
<path d="M310,169 Q292,160 278,166" fill="none" stroke="#43664f" stroke-width="6.4" stroke-linecap="round"/>
<path d="M358,198 Q322,188 278,190" fill="none" stroke="#5b8069" stroke-width="1" opacity="0.5"/>
<!-- ================= THE LURE, lying across both palms ================= -->
<g transform="translate(250,150)">
  <animateTransform attributeName="transform" type="translate" values="250,150;250,153;250,150" dur="5.5s" repeatCount="indefinite"/>
  <!-- 1. THE FRAME: a single length of brass wire bent into a teardrop and
       twisted shut at the top, the way a coat hanger is. The two sides do not
       match, because he bent it by eye. -->
  <path d="M0,-52 Q-46,-34 -54,10 Q-58,40 -22,48 Q4,54 30,46 Q62,36 58,4 Q54,-32 0,-52 Z"
        fill="none" stroke="url(#wreckWire6)" stroke-width="4.4" stroke-linejoin="round"/>
  <path d="M0,-52 Q-46,-34 -54,10 Q-58,40 -22,48 Q4,54 30,46 Q62,36 58,4 Q54,-32 0,-52 Z"
        fill="none" stroke="#e0b452" stroke-width="1.2" opacity="0.45"/>
  <!-- the twist at the top where the two wire ends are wound together -->
  <path d="M-3,-52 L-3,-70 M3,-52 L3,-70" stroke="#8b6914" stroke-width="3" stroke-linecap="round"/>
  <path d="M-4,-56 L4,-59 M-4,-60 L4,-63 M-4,-64 L4,-67" stroke="#5c4409" stroke-width="1.8" stroke-linecap="round"/>
  <!-- and a loop above it, uneven, to hang the whole thing from -->
  <path d="M-3,-70 Q-3,-82 3,-82 Q9,-82 8,-72" fill="none" stroke="url(#wreckWire6)" stroke-width="3.4" stroke-linecap="round"/>
  <!-- 2. A CROSSBAR, a second bit of wire soldered across the middle. The
       solder blob is visibly too big at one end and too small at the other. -->
  <path d="M-52,-2 L56,-8" stroke="url(#wreckWire6)" stroke-width="3" stroke-linecap="round"/>
  <circle cx="-52" cy="-2" r="4.4" fill="#8b6914"/>
  <circle cx="-53" cy="-3.4" r="1.6" fill="#e0b452" opacity="0.6"/>
  <circle cx="56" cy="-8" r="2" fill="#8b6914"/>
  <!-- 3. THREE GLASS FLOATS threaded on the crossbar, different sizes -->
  <g>
    <circle cx="-28" cy="-4" r="11" fill="url(#wreckFloat6)"/>
    <circle cx="-28" cy="-4" r="11" fill="none" stroke="#7fc4b8" stroke-width="0.9" opacity="0.5"/>
    <path d="M-34,-9 Q-31,-13 -26,-13" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" opacity="0.6"><animate attributeName="opacity" values="0.34;0.75;0.34" dur="3.6s" repeatCount="indefinite"/></path>
    <path d="M-39,-4 L-17,-4" stroke="#8b6914" stroke-width="3" opacity="0.35"/>
  </g>
  <g>
    <circle cx="4" cy="-6" r="14" fill="url(#wreckFloat6)"/>
    <circle cx="4" cy="-6" r="14" fill="none" stroke="#7fc4b8" stroke-width="0.9" opacity="0.5"/>
    <path d="M-3,-12 Q1,-17 7,-16" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.62"><animate attributeName="opacity" values="0.36;0.82;0.36" dur="4.4s" repeatCount="indefinite" begin="1.2s"/></path>
    <path d="M-10,-6 L18,-6" stroke="#8b6914" stroke-width="3" opacity="0.35"/>
  </g>
  <g>
    <circle cx="36" cy="-7" r="9" fill="url(#wreckFloat6)"/>
    <circle cx="36" cy="-7" r="9" fill="none" stroke="#7fc4b8" stroke-width="0.8" opacity="0.5"/>
    <!-- this one is chipped: a wedge missing off the rim -->
    <path d="M43,-11 L46,-6 L41,-2 Z" fill="#0d2028" opacity="0.7"/>
    <path d="M43,-11 L46,-6 L41,-2" fill="none" stroke="#7fc4b8" stroke-width="0.8" opacity="0.45"/>
    <path d="M31,-11 Q34,-14 38,-14" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.55"><animate attributeName="opacity" values="0.3;0.68;0.3" dur="3.1s" repeatCount="indefinite" begin="2.3s"/></path>
    <path d="M28,-7 L45,-7" stroke="#8b6914" stroke-width="2.6" opacity="0.35"/>
  </g>
  <!-- 4. KNOTTED LINE wound round the bottom of the frame, four real knots -->
  <path d="M-53,14 Q-30,26 -6,22 Q20,18 44,28 Q54,32 57,20" fill="none" stroke="#3b4a34" stroke-width="2.6"/>
  <path d="M-53,14 Q-30,26 -6,22 Q20,18 44,28 Q54,32 57,20" fill="none" stroke="#6a7a58" stroke-width="0.8" opacity="0.5"/>
  <g fill="#3b4a34">
    <ellipse cx="-30" cy="22" rx="3.6" ry="3" /><ellipse cx="-6" cy="22" rx="3.8" ry="3.2"/>
    <ellipse cx="20" cy="19" rx="3.4" ry="2.8"/><ellipse cx="44" cy="28" rx="3.6" ry="3"/>
  </g>
  <g fill="none" stroke="#6a7a58" stroke-width="0.7" opacity="0.6">
    <path d="M-32,20 Q-30,24 -28,20 M-8,20 Q-6,24 -4,20 M18,17 Q20,21 22,17 M42,26 Q44,30 46,26"/>
  </g>
  <!-- a loose tail of line hanging off the bottom left, drifting -->
  <path d="M-53,14 Q-70,26 -64,46" fill="none" stroke="#3b4a34" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M-53,14 Q-70,26 -64,46;M-53,14 Q-76,24 -66,44;M-53,14 Q-70,26 -64,46" dur="5s" repeatCount="indefinite"/></path>
  <path d="M-64,46 L-68,52 M-64,46 L-60,53" stroke="#3b4a34" stroke-width="1.4" stroke-linecap="round"><animate attributeName="opacity" values="0.8;1;0.8" dur="5s" repeatCount="indefinite"/></path>
  <!-- 5. THE BELL, hanging off the bottom of the frame on its own bit of wire -->
  <path d="M4,50 L4,60" stroke="url(#wreckWire6)" stroke-width="2.4" stroke-linecap="round"/>
  <g transform="translate(4,62)">
    <animateTransform attributeName="transform" type="rotate" values="-5,0,-2;5,0,-2;-5,0,-2" dur="4.6s" repeatCount="indefinite" additive="sum"/>
    <!-- crown loop -->
    <circle cx="0" cy="-2" r="3" fill="none" stroke="#8b6914" stroke-width="1.8"/>
    <!-- body of the bell -->
    <path d="M-12,16 Q-12,0 -6,-2 Q0,-3.4 6,-2 Q12,0 12,16 Z" fill="url(#wreckBellB6)"/>
    <!-- the flare at the mouth -->
    <path d="M-12,16 Q0,21 12,16 L12,19.4 Q0,24.4 -12,19.4 Z" fill="#5c4409"/>
    <path d="M-12,16 Q0,21 12,16" fill="none" stroke="#c9962e" stroke-width="0.9" opacity="0.5"/>
    <!-- THE DENT: a flat facet where the round should be, with a crease -->
    <path d="M5,2 L11.6,8 L9,15 L12,15 L12,4 Z" fill="#3f2e05"/>
    <path d="M5,2 L11.6,8 L9,15" fill="none" stroke="#3f2e05" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M6.4,4.6 L10.4,8.6" stroke="#c9962e" stroke-width="0.8" opacity="0.4"/>
    <!-- highlight on the good side -->
    <path d="M-7,2 Q-4,-1 0,-1.6" fill="none" stroke="#ffeaa7" stroke-width="1.6" stroke-linecap="round" opacity="0.55"/>
    <!-- clapper, hanging out of the mouth -->
    <path d="M0,16 L0,21" stroke="#5c4409" stroke-width="1.2"/>
    <circle cx="0" cy="22.4" r="2.4" fill="#5c4409"/>
  </g>
  <!-- 6. one wire that was bent back on itself and simply left that way -->
  <path d="M-54,10 Q-70,2 -62,-10" fill="none" stroke="url(#wreckWire6)" stroke-width="3" stroke-linecap="round"/>
  <path d="M-62,-10 L-58,-16" stroke="#8b6914" stroke-width="2.4" stroke-linecap="round"/>
</g>
<!-- Faint amber halo where the lamp above catches the brass. No spotlight. -->
<ellipse cx="250" cy="146" rx="112" ry="44" fill="#F2C14E" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Motes -->
<circle cx="140" cy="74" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="74;56;74" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="366" cy="58" r="1.1" fill="#ffeaa7" opacity="0.22"><animate attributeName="cy" values="58;40;58" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.08;0.26;0.08" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="64" cy="118" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="118;100;118" dur="13s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="3.5s"/></circle>
<circle cx="452" cy="86" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="86;68;86" dur="14s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="1.2s"/></circle>
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
  <radialGradient id="wreckGlass7" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
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
    <circle cx="0.0" cy="13.0" r="13.4" fill="url(#wreckGlass7)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="15.32" rx="7.5" ry="8.58" fill="#9c7a5e"/>
    <path d="M-7.5,13.89 Q0.0,6.21 7.5,13.89 L7.5,9.43 Q0.0,4.6 -7.5,9.43 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-5.9,11.75 Q0.0,9.25 5.9,11.75" fill="none" stroke="#5a4131" stroke-width="1.34" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,13.36 L-0.71,16.75 Q0.0,17.65 1.25,16.93" fill="none" stroke="#7a5c45" stroke-width="1.07" stroke-linecap="round" opacity="0.8"/>
    <path d="M-4.82,13.54 Q-3.04,11.57 -1.25,13.54" fill="none" stroke="#2a1d12" stroke-width="1.34" stroke-linecap="round"/><path d="M1.25,13.54 Q3.04,11.57 4.82,13.54" fill="none" stroke="#2a1d12" stroke-width="1.34" stroke-linecap="round"/>
    <path d="M-5.0,18.72 Q-2.14,17.29 0.0,18.36 Q2.14,17.29 5.0,18.72" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="13.0" r="13.4" fill="none" stroke="#8b6914" stroke-width="3.04"/>
    <circle cx="0.0" cy="13.0" r="14.65" fill="none" stroke="#c9962e" stroke-width="0.89" opacity="0.75"/>
    <circle cx="12.55" cy="18.2" r="0.89" fill="#5c4409"/><circle cx="5.2" cy="25.55" r="0.89" fill="#5c4409"/><circle cx="-5.2" cy="25.55" r="0.89" fill="#5c4409"/><circle cx="-12.55" cy="18.2" r="0.89" fill="#5c4409"/><circle cx="-12.55" cy="7.8" r="0.89" fill="#5c4409"/><circle cx="-5.2" cy="0.45" r="0.89" fill="#5c4409"/><circle cx="5.2" cy="0.45" r="0.89" fill="#5c4409"/><circle cx="12.55" cy="7.8" r="0.89" fill="#5c4409"/>
    <path d="M-8.4,9.96 Q-4.47,4.6 2.14,4.25" fill="none" stroke="#dff6ea" stroke-width="2.14" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="3.8s" repeatCount="indefinite"/></path>
    <circle cx="5.54" cy="7.28" r="1.52" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="3.8s" repeatCount="indefinite"/></circle>
    <path d="M-6.79,18.9 Q0.0,21.58 6.79,18.9" fill="none" stroke="#7fc4b8" stroke-width="1.25" stroke-linecap="round" opacity="0.2"/>
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
// DELIBERATE, DO NOT "IMPROVE": the lamps here use the same colours, radii and
// flicker timings as wreck_1 and wreck_7. There is no glow pool, no vignette,
// no spotlight and no centring. Fredward is off-centre and small, turned away,
// lit by nothing but the same rail lamps that light the rest of the deck. The
// frame must look exactly as warm as every other scene in this file. Every bit
// of the cold is composition: he is facing away down his own hull, and the
// player is stopped at the near end of it.
STORY_SCENES['wreck_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="42%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
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
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater8)"/>
<!-- Same caustics as wreck_1 -->
<polygon points="70,0 100,0 138,150 118,150" fill="url(#wreckShaft8)" opacity="0.6"><animate attributeName="opacity" values="0.35;0.7;0.35" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="250,0 288,0 262,160 238,160" fill="url(#wreckShaft8)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="400,0 424,0 388,140 370,140" fill="url(#wreckShaft8)" opacity="0.45"><animate attributeName="opacity" values="0.22;0.55;0.22" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- The deck running away to the right: the whole length of his wreck -->
<path d="M0,150 L500,116 L500,160 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,160 L500,260 L0,260 Z" fill="url(#wreckDeck8)"/>
<path d="M0,196 L500,160 L500,168 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,218 L500,180 M0,240 L500,198" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Far superstructure and the broken bow, going off into the green -->
<path d="M330,142 L372,138 L376,112 L418,108 L422,136 L458,134 L458,152 L328,158 Z" fill="#0d2028" opacity="0.7"/>
<path d="M458,134 Q480,128 500,134 L500,150 L458,152 Z" fill="url(#wreckHull8)" opacity="0.75"/>
<path d="M406,108 L382,54" stroke="#173537" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
<path d="M384,60 Q370,80 380,94" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.5"><animate attributeName="d" values="M384,60 Q370,80 380,94;M384,60 Q374,80 376,94;M384,60 Q370,80 380,94" dur="10s" repeatCount="indefinite"/></path>
<!-- Sand banked along the far side, same as wreck_1 -->
<path d="M320,162 Q372,148 424,142 Q466,136 500,146 L500,164 L320,174 Z" fill="url(#wreckSand8)" opacity="0.75"/>
<path d="M400,146 Q436,140 470,150" fill="none" stroke="#3d666c" stroke-width="1.3" opacity="0.4"/>
<!-- Rail with the lamp string, running the whole length away from us -->
<path d="M0,178 L500,142" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.8"/>
<path d="M0,184 Q46,192 92,182 Q140,190 186,178 Q234,186 280,172 Q328,180 374,164 Q420,172 466,156" fill="none" stroke="#2c5450" stroke-width="0.9" opacity="0.6"/>
<!-- LAMPS. Exactly the wreck_1 values: same fill, same radii, same timings. -->
<circle cx="46" cy="190" r="26" fill="url(#wreckLampG8)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="152" cy="182" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></circle>
<circle cx="258" cy="174" r="26" fill="url(#wreckLampG8)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.45;0.6;0.4" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="358" cy="166" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3s" repeatCount="indefinite" begin="2.1s"/></circle>
<circle cx="450" cy="158" r="22" fill="url(#wreckLampG8)" opacity="0.48"><animate attributeName="opacity" values="0.32;0.58;0.4;0.52;0.32" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></circle>
<g fill="#F2C14E">
  <rect x="43" y="187" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="149" y="179" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.7;1;0.8;0.92;0.7" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></rect>
  <rect x="255" y="171" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></rect>
  <rect x="355" y="163" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="3s" repeatCount="indefinite" begin="2.1s"/></rect>
  <rect x="447.4" y="155" width="5.4" height="6.4" rx="1.5"><animate attributeName="opacity" values="0.7;1;0.78;0.92;0.7" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.7" opacity="0.7">
  <rect x="42" y="186" width="8" height="9" rx="1.8"/>
  <rect x="148" y="178" width="8" height="9" rx="1.8"/>
  <rect x="254" y="170" width="8" height="9" rx="1.8"/>
  <rect x="354" y="162" width="8" height="9" rx="1.8"/>
</g>
<!-- Same broad amber wash on the sand as wreck_1, no stronger, not centred -->
<ellipse cx="235" cy="222" rx="120" ry="16" fill="#F2C14E" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Deck furniture down the length: table with the book, crates, coiled rope -->
<path d="M24,228 L120,224 L128,238 L16,242 Z" fill="#1d3b3a"/>
<path d="M40,223 L112,220 L112,212 L40,216 Z" fill="#8a7a4c"/>
<path d="M44,215 L74,212 L74,199 L44,203 Z" fill="#e8dcae"/>
<path d="M74,212 L108,213 L108,200 L74,199 Z" fill="#ddd0a0"/>
<rect x="298" y="172" width="28" height="20" rx="2" fill="#1d3b3a"/>
<rect x="298" y="172" width="28" height="5" rx="2" fill="#2c5450" opacity="0.55"/>
<ellipse cx="392" cy="170" rx="13" ry="4.2" fill="none" stroke="#2a3a2c" stroke-width="1.7" opacity="0.55"/>
<ellipse cx="392" cy="167.8" rx="9" ry="3.2" fill="none" stroke="#2a3a2c" stroke-width="1.3" opacity="0.45"/>
<!-- FREDWARD. Off centre, mid-size, turned away down the deck. Lit by the
     rail lamps and nothing else: no halo of his own. -->
<g transform="translate(216,120)">
  <animateTransform attributeName="transform" type="translate" values="216,120;216,123;216,120" dur="6s" repeatCount="indefinite"/>
  <!-- the back of the suit: no chest plate, no faceplate, just a man's back -->
  <path d="M-23,32 Q0,25 23,32 L20,80 Q0,86 -20,80 Z" fill="url(#wreckSuit8)"/>
  <path d="M-20,45 Q0,39 20,45 M-21,58 Q0,52 21,58 M-20,71 Q0,65 20,71" fill="none" stroke="#1c2f26" stroke-width="1.1" opacity="0.5"/>
  <path d="M0,34 L0,82" stroke="#1c2f26" stroke-width="1.3" opacity="0.45"/>
  <!-- back weight plate, bolted on -->
  <rect x="-11" y="40" width="22" height="12" rx="2.2" fill="url(#wreckBrass8)"/>
  <circle cx="-5.5" cy="46" r="1.3" fill="#5c4409"/><circle cx="5.5" cy="46" r="1.3" fill="#5c4409"/>
  <ellipse cx="0" cy="29" rx="13.6" ry="5" fill="url(#wreckBrass8)"/>
  <!-- HELMET FROM BEHIND: a brass sphere with a bolt ring and the strap
       fittings. No port on this side, so no face, which is the whole point. -->
  <g transform="rotate(-8,0,10)">
    <circle cx="0" cy="10" r="18" fill="url(#wreckBrass8)"/>
    <circle cx="0" cy="10" r="18" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <!-- crown seam and the bolt ring that holds the two halves together -->
    <path d="M-18,10 Q0,2 18,10" fill="none" stroke="#5c4409" stroke-width="1.2" opacity="0.8"/>
    <circle cx="-13" cy="4" r="1.2" fill="#5c4409"/><circle cx="-6.6" cy="0.6" r="1.2" fill="#5c4409"/>
    <circle cx="0" cy="-0.4" r="1.2" fill="#5c4409"/><circle cx="6.6" cy="0.6" r="1.2" fill="#5c4409"/>
    <circle cx="13" cy="4" r="1.2" fill="#5c4409"/>
    <!-- the rear vent, a small grilled plate -->
    <rect x="-5" y="12" width="10" height="8" rx="1.6" fill="#5c4409"/>
    <path d="M-3.4,14 L3.4,14 M-3.4,16.4 L3.4,16.4 M-3.4,18.8 L3.4,18.8" stroke="#3d2c06" stroke-width="0.8"/>
    <!-- the rim of the faceplate, showing round the far side. He is smiling
         at his ship and we get the edge of it and nothing more. -->
    <path d="M14.6,2 Q19.4,10 14.6,19" fill="none" stroke="#c9962e" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M15.6,4.4 Q19,10 15.6,16.6" fill="none" stroke="#123038" stroke-width="1.6" opacity="0.55"/>
    <!-- ordinary brass highlight, the same weight as every other scene -->
    <path d="M-9,1 Q-4,-3 1,-1" fill="none" stroke="#ffeaa7" stroke-width="1.9" stroke-linecap="round" opacity="0.4"/>
  </g>
  <!-- arms down, one hand resting on the rail. Nothing being done. -->
  <path d="M21,44 Q38,52 42,68" fill="none" stroke="url(#wreckSuit8)" stroke-width="10" stroke-linecap="round"/>
  <path d="M38,66 Q50,64 56,70 Q58,75 50,78 Q40,79 36,73 Z" fill="#40614e"/>
  <path d="M-21,44 Q-37,56 -39,74" fill="none" stroke="url(#wreckSuit8)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="-40" cy="77" r="6" fill="#40614e"/>
  <!-- air hose trailing back behind him toward us -->
  <path d="M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72;M-12,-2 Q-52,-12 -74,12 Q-94,36 -80,72;M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72" dur="8.5s" repeatCount="indefinite"/></path>
</g>
<!-- His bubbles, the same calm regular rate as every other scene -->
<circle cx="232" cy="102" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="102;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="226" cy="96" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="96;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- THE PLAYER, small and still, near left. Not moving, not reaching. -->
<g transform="translate(88,190)">
  <path d="M-12,20 Q0,15 12,20 L10,50 Q0,54 -10,50 Z" fill="#132c30"/>
  <rect x="9" y="20" width="6.4" height="17" rx="3.2" fill="#1a4a55"/>
  <circle cx="0" cy="8" r="8.6" fill="#132c30"/>
  <ellipse cx="0" cy="7" rx="6.2" ry="4.6" fill="#1a4a55" opacity="0.6"/>
  <ellipse cx="-1.3" cy="5.2" rx="2.2" ry="1.5" fill="#7fc4b8" opacity="0.32"/>
  <path d="M-11,28 Q-20,33 -22,42" fill="none" stroke="#132c30" stroke-width="6.2" stroke-linecap="round"/>
  <path d="M11,28 Q19,33 20,42" fill="none" stroke="#132c30" stroke-width="6.2" stroke-linecap="round"/>
  <!-- the lure, in one fist, held down and not being looked at -->
  <circle cx="-23" cy="45" r="3.8" fill="#1a3a3e"/>
  <path d="M-27,46 Q-31,40 -27,36" fill="none" stroke="#8b6914" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="-29" cy="41" r="1.3" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.28;0.62;0.28" dur="3.6s" repeatCount="indefinite"/></circle>
  <path d="M-27,48 Q-30,53 -28,57" fill="none" stroke="#2a3a2c" stroke-width="0.9" stroke-linecap="round"/>
  <path d="M-6,52 Q-9,59 -15,61" fill="none" stroke="#132c30" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M6,52 Q9,59 15,61" fill="none" stroke="#132c30" stroke-width="4.6" stroke-linecap="round"/>
</g>
<!-- Player bubbles, slower than his -->
<circle cx="97" cy="184" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="184;-10" dur="8.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.34;0" dur="8.4s" repeatCount="indefinite"/></circle>
<circle cx="102" cy="190" r="1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="190;-10" dur="10.2s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.3;0" dur="10.2s" repeatCount="indefinite" begin="4s"/></circle>
<!-- The doormat and the crab, foreground right. It has not moved. -->
<g transform="translate(376,232)">
  <path d="M-28,0 L28,0 L34,12 L-34,12 Z" fill="#5a4a22"/>
  <path d="M-28,0 L28,0 L29,3.4 L-29,3.4 Z" fill="#75612e" opacity="0.78"/>
  <path d="M-25,5.4 L26,5.4 M-27,9 L28,9" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(376,228)">
  <ellipse cx="0" cy="0" rx="6.6" ry="4.4" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.3" rx="5.6" ry="2.8" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.3" cy="-3.2" r="1" fill="#0a1a1e"/><circle cx="2.3" cy="-3.2" r="1" fill="#0a1a1e"/>
  <path d="M-5.6,-1 L-10.4,-3.8 L-12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M5.6,-1 L10.4,-3.8 L12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-4.6,2.8 L-7.4,5.6 M0,3.6 L0,6.6 M4.6,2.8 L7.4,5.6" stroke="#8f3b2e" stroke-width="1.1" stroke-linecap="round"/>
</g>
<!-- Motes, same density and drift as the rest of the deck scenes -->
<circle cx="160" cy="86" r="1" fill="#ffeaa7" opacity="0.24"><animate attributeName="cy" values="86;68;86" dur="11s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.28;0.1" dur="5.5s" repeatCount="indefinite"/></circle>
<circle cx="440" cy="94" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="94;76;94" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="308" cy="46" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="46;28;46" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="60" cy="118" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="118;100;118" dur="12.5s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" begin="1.2s"/></circle>
<!-- Same top-corner water darkening as wreck_1 and nothing more -->
<rect x="0" y="0" width="500" height="46" fill="#07141a" opacity="0.18"/>
</svg>`;

// Scene 9: Back at the book, fresh page, his posture already re-absorbed in
// work. Same table and framing as scene 3, but the spread is blank and his
// whole body has gone back to it.
STORY_SCENES['wreck_9'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater9" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckBookLit9" cx="46%" cy="48%" r="58%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.32"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckPage9" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f0e5bc"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wreckBrass9" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit9" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass9" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater9)"/>
<rect width="500" height="260" fill="url(#wreckBookLit9)"/>
<!-- Lamp above frame -->
<rect x="222" y="0" width="4" height="16" fill="#2c5450"/>
<path d="M208,16 L240,16 L234,28 L214,28 Z" fill="#5c4409"/>
<rect x="216" y="26" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="224" cy="34" rx="44" ry="15" fill="#ffd700" opacity="0.12"><animate attributeName="opacity" values="0.07;0.17;0.07" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Bulkhead behind -->
<rect x="0" y="0" width="500" height="146" fill="#0d2028" opacity="0.55"/>
<path d="M0,144 L500,140" stroke="#1a4a55" stroke-width="1.2" opacity="0.35"/>
<path d="M424,36 Q406,62 422,80 Q436,94 420,108" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.45"><animate attributeName="d" values="M424,36 Q406,62 422,80 Q436,94 420,108;M424,36 Q412,62 418,80 Q432,94 424,108;M424,36 Q406,62 422,80 Q436,94 420,108" dur="10s" repeatCount="indefinite"/></path>
<!-- Shelf of finished volumes on the bulkhead, the two hundred pages implied -->
<rect x="46" y="66" width="104" height="5" fill="#1d3b3a"/>
<rect x="52" y="40" width="9" height="26" fill="#3d2a12"/><rect x="62" y="44" width="8" height="22" fill="#4a3418"/>
<rect x="71" y="38" width="10" height="28" fill="#33240f"/><rect x="82" y="43" width="7" height="23" fill="#4a3418"/>
<rect x="90" y="41" width="9" height="25" fill="#3d2a12"/><rect x="100" y="45" width="8" height="21" fill="#2b1f0d"/>
<rect x="109" y="39" width="10" height="27" fill="#4a3418"/><rect x="120" y="44" width="7" height="22" fill="#33240f"/>
<rect x="128" y="42" width="9" height="24" fill="#3d2a12"/><rect x="138" y="46" width="8" height="20" fill="#2b1f0d"/>
<!-- THE TABLE -->
<path d="M34,172 L456,172 L466,188 L24,188 Z" fill="#1d3b3a"/>
<path d="M34,172 L456,172 L458,176 L32,176 Z" fill="#2c5450" opacity="0.55"/>
<rect x="60" y="188" width="12" height="66" fill="#173537"/>
<rect x="418" y="188" width="12" height="66" fill="#173537"/>
<rect x="52" y="250" width="28" height="6" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="410" y="250" width="28" height="6" rx="1" fill="#5c4409" opacity="0.8"/>
<!-- THE BOOK, turned to a fresh page -->
<path d="M84,172 L410,172 L408,153 L86,153 Z" fill="#8a7a4c"/>
<path d="M86,153 L408,153 L406,149 L88,149 Z" fill="#a5945f"/>
<path d="M92,155 L402,155 M92,160 L402,160 M92,165 L402,165" stroke="#6d5f38" stroke-width="0.6" opacity="0.55"/>
<path d="M92,151 Q158,140 242,144 L242,60 Q158,54 92,66 Z" fill="url(#wreckPage9)"/>
<path d="M242,144 Q328,140 394,151 L394,66 Q328,54 242,60 Z" fill="url(#wreckPage9)" opacity="0.94"/>
<path d="M242,60 L242,144" stroke="#8a7a4c" stroke-width="3.6" opacity="0.5"/>
<!-- Left page: the last finished entry, complete -->
<path d="M116,100 Q140,84 158,100 Q174,114 194,98" fill="none" stroke="#3a2e12" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="118" cy="99" r="1.2" fill="#3a2e12"/>
<path d="M110,74 L176,72" stroke="#3a2e12" stroke-width="1.5" opacity="0.72"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M102,86 L110,86 M102,91 L111,91 M102,96 L108,96 M102,101 L111,101 M102,106 L109,106 M102,111 L111,111"/>
  <path d="M116,120 L216,117 M116,125 L224,122 M116,130 L188,128 M116,135 L206,133"/>
</g>
<!-- RIGHT PAGE: blank, ruled and waiting, one date already written at the top -->
<path d="M266,72 L306,71" stroke="#3a2e12" stroke-width="0.9" opacity="0.5"/>
<g stroke="#c0ae7e" stroke-width="0.5" opacity="0.7">
  <path d="M262,86 L376,84 M262,94 L376,92 M262,102 L376,100 M262,110 L376,108 M262,118 L376,116 M262,126 L376,124 M262,134 L376,132"/>
</g>
<!-- the first mark of the new entry, just started -->
<path d="M292,104 Q304,96 314,104" fill="none" stroke="#3a2e12" stroke-width="1.6" stroke-linecap="round"><animate attributeName="opacity" values="0.85;1;0.85" dur="5s" repeatCount="indefinite"/></path>
<!-- FREDWARD, folded down over the page, entirely re-absorbed -->
<g transform="translate(322,86)">
  <animateTransform attributeName="transform" type="translate" values="322,86;322,88;322,86" dur="7s" repeatCount="indefinite"/>
  <path d="M-24,36 Q0,28 26,36 L28,90 Q0,96 -24,90 Z" fill="url(#wreckSuit9)"/>
  <path d="M-21,50 Q2,43 24,50" fill="none" stroke="#1c2f26" stroke-width="1.1" opacity="0.5"/>
  <rect x="-10" y="38" width="21" height="11" rx="2.4" fill="url(#wreckBrass9)"/>
  <ellipse cx="0" cy="32" rx="14" ry="5.2" fill="url(#wreckBrass9)"/>
  <!-- helmet tipped well down: he is looking at the page, not at you -->
  <g transform="rotate(26,0,12)">
    <circle cx="0" cy="12" r="19" fill="url(#wreckBrass9)"/>
    <circle cx="0" cy="12" r="19" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <circle cx="-15.6" cy="14" r="4.5" fill="#5c4409"/><circle cx="-15.6" cy="14" r="2.7" fill="#123038" opacity="0.8"/>
    <circle cx="15.6" cy="14" r="4.5" fill="#5c4409"/>
    <circle cx="-9.4" cy="-2" r="1.2" fill="#c9962e"/><circle cx="0" cy="-5.4" r="1.2" fill="#c9962e"/><circle cx="9.4" cy="-2" r="1.2" fill="#c9962e"/>
    <circle cx="0.0" cy="13.0" r="12.8" fill="url(#wreckGlass9)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="15.22" rx="7.17" ry="8.19" fill="#9c7a5e"/>
    <path d="M-7.17,13.85 Q0.0,6.51 7.17,13.85 L7.17,9.59 Q0.0,4.98 -7.17,9.59 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-5.63,11.81 Q0.0,9.42 5.63,11.81" fill="none" stroke="#5a4131" stroke-width="1.28" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,13.34 L-0.68,16.58 Q0.0,17.44 1.19,16.75" fill="none" stroke="#7a5c45" stroke-width="1.02" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="-2.9" cy="14.54" rx="1.71" ry="1.37" fill="#e8dcc4"/><ellipse cx="2.9" cy="14.54" rx="1.71" ry="1.37" fill="#e8dcc4"/><circle cx="-2.73" cy="14.71" r="0.94" fill="#2a1d12"/><circle cx="3.07" cy="14.71" r="0.94" fill="#2a1d12"/>
    <path d="M-4.78,18.46 Q-2.05,17.1 0.0,18.12 Q2.05,17.1 4.78,18.46" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="13.0" r="12.8" fill="none" stroke="#8b6914" stroke-width="2.9"/>
    <circle cx="0.0" cy="13.0" r="13.99" fill="none" stroke="#c9962e" stroke-width="0.85" opacity="0.75"/>
    <circle cx="11.98" cy="17.96" r="0.85" fill="#5c4409"/><circle cx="4.96" cy="24.98" r="0.85" fill="#5c4409"/><circle cx="-4.96" cy="24.98" r="0.85" fill="#5c4409"/><circle cx="-11.98" cy="17.96" r="0.85" fill="#5c4409"/><circle cx="-11.98" cy="8.04" r="0.85" fill="#5c4409"/><circle cx="-4.96" cy="1.02" r="0.85" fill="#5c4409"/><circle cx="4.96" cy="1.02" r="0.85" fill="#5c4409"/><circle cx="11.98" cy="8.04" r="0.85" fill="#5c4409"/>
    <path d="M-8.02,10.1 Q-4.27,4.98 2.05,4.64" fill="none" stroke="#dff6ea" stroke-width="2.05" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="4.2s" repeatCount="indefinite"/></path>
    <circle cx="5.29" cy="7.54" r="1.45" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="4.2s" repeatCount="indefinite"/></circle>
    <path d="M-6.49,18.63 Q0.0,21.19 6.49,18.63" fill="none" stroke="#7fc4b8" stroke-width="1.19" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- drawing arm, moving in a small steady arc across the blank page -->
  <path d="M-24,50 Q-52,62 -60,80" fill="none" stroke="url(#wreckSuit9)" stroke-width="10" stroke-linecap="round"><animate attributeName="d" values="M-24,50 Q-52,62 -60,80;M-24,50 Q-50,66 -54,82;M-24,50 Q-52,62 -60,80" dur="4.6s" repeatCount="indefinite"/></path>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0,0;6,2;0,0" dur="4.6s" repeatCount="indefinite"/>
    <path d="M-70,74 Q-58,70 -50,76 Q-46,82 -54,86 Q-64,88 -70,82 Z" fill="#40614e"/>
    <rect x="-82" y="76" width="22" height="2.6" rx="1.3" fill="#7a5a18" transform="rotate(14,-71,77)"/>
    <path d="M-84,80 L-79,81 L-83,84 Z" fill="#2a2a2a"/>
  </g>
  <!-- other hand flat on the far page, holding it against the current -->
  <path d="M26,50 Q46,64 44,84" fill="none" stroke="url(#wreckSuit9)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="44" cy="87" r="6.2" fill="#40614e"/>
  <path d="M16,0 Q50,-8 68,14 Q84,36 72,66" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M16,0 Q50,-8 68,14 Q84,36 72,66;M16,0 Q54,-12 72,12 Q88,34 72,66;M16,0 Q50,-8 68,14 Q84,36 72,66" dur="9s" repeatCount="indefinite"/></path>
</g>
<!-- Pencil case, ink, magnifier on the table -->
<rect x="180" y="164" width="14" height="16" rx="2" fill="#0e2224"/>
<rect x="180" y="164" width="14" height="5" rx="2" fill="#1a3a3c"/>
<rect x="184" y="159" width="6" height="6" rx="1" fill="#5c4409"/>
<g transform="translate(126,164)">
  <circle cx="0" cy="0" r="9.4" fill="#123038" opacity="0.5"/>
  <circle cx="0" cy="0" r="9.4" fill="none" stroke="url(#wreckBrass9)" stroke-width="2.2"/>
  <path d="M7,7 L17,15" stroke="url(#wreckBrass9)" stroke-width="3" stroke-linecap="round"/>
</g>
<!-- Bubbles, unhurried -->
<circle cx="336" cy="60" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="60;-10" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.4;0" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="342" cy="66" r="1.1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="66;-10" dur="7.6s" repeatCount="indefinite" begin="2.4s"/><animate attributeName="opacity" values="0;0.34;0" dur="7.6s" repeatCount="indefinite" begin="2.4s"/></circle>
<!-- Motes -->
<circle cx="140" cy="56" r="1" fill="#ffeaa7" opacity="0.28"><animate attributeName="cy" values="56;40;56" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.32;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="106" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="106;88;106" dur="12s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="30" cy="96" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="96;78;96" dur="13s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
</svg>`;

// Scene 10: Fredward with one hand flat on the page, mid-sentence, the one
// beat where his face is not certain. Under a second's worth of expression:
// the eyes go level, the smile stays, and that is all.
STORY_SCENES['wreck_10'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckBookLit10" cx="50%" cy="50%" r="58%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.32"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckPage10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f0e5bc"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wreckBrass10" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit10" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass10" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater10)"/>
<rect width="500" height="260" fill="url(#wreckBookLit10)"/>
<rect x="0" y="0" width="500" height="140" fill="#0d2028" opacity="0.5"/>
<path d="M0,138 L500,134" stroke="#1a4a55" stroke-width="1.2" opacity="0.3"/>
<!-- Lamp, off to the left this time -->
<rect x="88" y="0" width="4" height="14" fill="#2c5450"/>
<path d="M74,14 L106,14 L100,26 L80,26 Z" fill="#5c4409"/>
<rect x="82" y="24" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="90" cy="32" rx="42" ry="14" fill="#ffd700" opacity="0.11"><animate attributeName="opacity" values="0.06;0.16;0.06" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Table and the book, angled so the open spread sits low and left -->
<path d="M0,206 L360,196 L372,214 L0,224 Z" fill="#1d3b3a"/>
<path d="M0,206 L360,196 L361,200 L0,210 Z" fill="#2c5450" opacity="0.55"/>
<rect x="60" y="220" width="12" height="40" fill="#173537"/>
<path d="M22,204 L318,196 L316,180 L24,188 Z" fill="#8a7a4c"/>
<path d="M24,188 L316,180 L314,176 L26,184 Z" fill="#a5945f"/>
<path d="M30,190 L310,182 M30,194 L310,186 M30,198 L310,190" stroke="#6d5f38" stroke-width="0.6" opacity="0.5"/>
<path d="M30,186 Q94,174 166,177 L166,116 Q94,110 30,122 Z" fill="url(#wreckPage10)"/>
<path d="M166,177 Q240,174 308,181 L308,120 Q240,112 166,116 Z" fill="url(#wreckPage10)" opacity="0.94"/>
<path d="M166,116 L166,177" stroke="#8a7a4c" stroke-width="3.4" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M42,140 L128,137 M42,146 L136,143 M42,152 L112,150 M42,158 L130,155 M42,164 L104,162"/>
  <path d="M182,142 L288,138 M182,148 L294,144 M182,154 L250,151"/>
</g>
<path d="M44,128 L112,125" stroke="#3a2e12" stroke-width="1.4" opacity="0.7"/>
<path d="M182,130 L242,127" stroke="#3a2e12" stroke-width="1.4" opacity="0.7"/>
<path d="M212,164 Q228,152 244,164" fill="none" stroke="#3a2e12" stroke-width="1.6" stroke-linecap="round"/>
<!-- FREDWARD, close, upright, one hand flat on the page. Mid-sentence. -->
<g transform="translate(322,74)">
  <animateTransform attributeName="transform" type="translate" values="322,74;322,76;322,74" dur="7.5s" repeatCount="indefinite"/>
  <path d="M-32,44 Q0,34 32,44 L28,104 Q0,112 -28,104 Z" fill="url(#wreckSuit10)"/>
  <path d="M-28,58 Q0,50 28,58 M-29,74 Q0,66 29,74 M-28,90 Q0,82 28,90" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.5"/>
  <rect x="-14" y="46" width="28" height="13" rx="2.6" fill="url(#wreckBrass10)"/>
  <circle cx="-6.4" cy="52.5" r="1.5" fill="#c9962e"/><circle cx="6.4" cy="52.5" r="1.5" fill="#c9962e"/>
  <ellipse cx="0" cy="39" rx="18" ry="6.4" fill="url(#wreckBrass10)"/>
  <!-- helmet, level. Not tipped down to the book, not turned to you. -->
  <circle cx="0" cy="14" r="25" fill="url(#wreckBrass10)"/>
  <circle cx="0" cy="14" r="25" fill="none" stroke="#5c4409" stroke-width="1.7"/>
  <circle cx="-20.6" cy="16" r="5.8" fill="#5c4409"/><circle cx="-20.6" cy="16" r="3.4" fill="#123038" opacity="0.8"/>
  <circle cx="20.6" cy="16" r="5.8" fill="#5c4409"/><circle cx="20.6" cy="16" r="3.4" fill="#123038" opacity="0.8"/>
  <circle cx="-13" cy="-3" r="1.4" fill="#c9962e"/><circle cx="0" cy="-7" r="1.4" fill="#c9962e"/><circle cx="13" cy="-3" r="1.4" fill="#c9962e"/>
  <circle cx="-21" cy="4" r="1.4" fill="#c9962e"/><circle cx="21" cy="4" r="1.4" fill="#c9962e"/>
  <circle cx="0.0" cy="15.0" r="17.0" fill="url(#wreckGlass10)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="17.95" rx="9.52" ry="10.88" fill="#9c7a5e"/>
    <path d="M-9.52,16.13 Q0.0,6.39 9.52,16.13 L9.52,10.47 Q0.0,4.35 -9.52,10.47 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-7.48,13.41 Q0.0,10.24 7.48,13.41" fill="none" stroke="#5a4131" stroke-width="1.7" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,15.45 L-0.91,19.76 Q0.0,20.89 1.59,19.99" fill="none" stroke="#7a5c45" stroke-width="1.36" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="-3.85" cy="15.23" rx="2.27" ry="1.81" fill="#e8dcc4"/><ellipse cx="3.85" cy="15.23" rx="2.27" ry="1.81" fill="#e8dcc4"/><circle cx="-3.63" cy="15.45" r="1.25" fill="#2a1d12"><animate attributeName="cx" values="-3.63;-4.99;-3.63" dur="9s" repeatCount="indefinite"/></circle><circle cx="4.08" cy="15.45" r="1.25" fill="#2a1d12"><animate attributeName="cx" values="4.08;2.72;4.08" dur="9s" repeatCount="indefinite"/></circle>
    <path d="M-6.35,22.25 Q-2.72,20.44 0.0,21.8 Q2.72,20.44 6.35,22.25" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="15.0" r="17.0" fill="none" stroke="#8b6914" stroke-width="3.85"/>
    <circle cx="0.0" cy="15.0" r="18.59" fill="none" stroke="#c9962e" stroke-width="1.13" opacity="0.75"/>
    <circle cx="15.92" cy="21.59" r="1.13" fill="#5c4409"/><circle cx="6.59" cy="30.92" r="1.13" fill="#5c4409"/><circle cx="-6.59" cy="30.92" r="1.13" fill="#5c4409"/><circle cx="-15.92" cy="21.59" r="1.13" fill="#5c4409"/><circle cx="-15.92" cy="8.41" r="1.13" fill="#5c4409"/><circle cx="-6.59" cy="-0.92" r="1.13" fill="#5c4409"/><circle cx="6.59" cy="-0.92" r="1.13" fill="#5c4409"/><circle cx="15.92" cy="8.41" r="1.13" fill="#5c4409"/>
    <path d="M-10.65,11.15 Q-5.67,4.35 2.72,3.89" fill="none" stroke="#dff6ea" stroke-width="2.72" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="3.8s" repeatCount="indefinite"/></path>
    <circle cx="7.03" cy="7.75" r="1.93" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="3.8s" repeatCount="indefinite"/></circle>
    <path d="M-8.61,22.48 Q0.0,25.88 8.61,22.48" fill="none" stroke="#7fc4b8" stroke-width="1.59" stroke-linecap="round" opacity="0.2"/>
  <!-- ARM DOWN AND LEFT, palm flat on the page. It does not move. -->
  <path d="M-30,58 Q-64,74 -84,96" fill="none" stroke="url(#wreckSuit10)" stroke-width="12" stroke-linecap="round"/>
  <path d="M-78,96 Q-96,92 -110,98 Q-116,104 -108,110 Q-92,116 -76,108 Z" fill="#40614e"/>
  <path d="M-104,109 L-107,116 M-96,112 L-98,119 M-88,112 L-89,119 M-80,108 L-79,115" stroke="#3a5847" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M-100,100 Q-88,96 -78,99" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.55"/>
  <!-- other arm hanging, doing nothing at all -->
  <path d="M30,58 Q50,78 48,104" fill="none" stroke="url(#wreckSuit10)" stroke-width="12" stroke-linecap="round"/>
  <circle cx="48" cy="108" r="7" fill="#40614e"/>
  <path d="M20,-2 Q56,-12 78,10 Q98,34 86,68" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M20,-2 Q56,-12 78,10 Q98,34 86,68;M20,-2 Q60,-16 82,8 Q102,32 86,68;M20,-2 Q56,-12 78,10 Q98,34 86,68" dur="9s" repeatCount="indefinite"/></path>
</g>
<!-- Bubbles. One gap in the stream where the sentence stops, then normal. -->
<circle cx="340" cy="46" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="46;-10" dur="4.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.42;0" dur="4.6s" repeatCount="indefinite"/></circle>
<circle cx="346" cy="52" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="52;-10" dur="6.8s" repeatCount="indefinite" begin="3.6s"/><animate attributeName="opacity" values="0;0.36;0" dur="6.8s" repeatCount="indefinite" begin="3.6s"/></circle>
<circle cx="334" cy="42" r="1.3" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="42;-10" dur="5.4s" repeatCount="indefinite" begin="8s"/><animate attributeName="opacity" values="0;0.38;0" dur="5.4s" repeatCount="indefinite" begin="8s"/></circle>
<!-- Motes -->
<circle cx="140" cy="70" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="70;54;70" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="120" r="1" fill="#cfeee0" opacity="0.19"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite" begin="2.5s"/><animate attributeName="opacity" values="0.06;0.23;0.06" dur="6s" repeatCount="indefinite" begin="2.5s"/></circle>
<circle cx="240" cy="52" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="52;34;52" dur="13.5s" repeatCount="indefinite" begin="4.5s"/><animate attributeName="opacity" values="0.05;0.21;0.05" dur="6.8s" repeatCount="indefinite" begin="4.5s"/></circle>
</svg>`;

// Scene 11: Looking up the rope from below. Wreck and its amber lamps small
// at the bottom of frame, surface light huge above. Ascent framing.
STORY_SCENES['wreck_11'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckAsc11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9fdccd"/><stop offset="18%" stop-color="#4f9d94"/><stop offset="44%" stop-color="#1a4a55"/><stop offset="72%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckSun11" cx="50%" cy="4%" r="46%">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.72"/><stop offset="28%" stop-color="#dff6ea" stop-opacity="0.3"/><stop offset="100%" stop-color="#4f9d94" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckShaft11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.34"/><stop offset="45%" stop-color="#bfe6d8" stop-opacity="0.12"/><stop offset="100%" stop-color="#1a4a55" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="wreckLampG11" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.15"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckSoft11"><feGaussianBlur stdDeviation="1.6" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckAsc11)"/>
<!-- The surface, huge, right at the top of frame -->
<rect width="500" height="120" fill="url(#wreckSun11)"/>
<path d="M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z" fill="#dff6ea" opacity="0.4"><animate attributeName="d" values="M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z;M0,0 L500,0 L500,26 Q450,14 400,26 Q350,38 300,26 Q250,14 200,26 Q150,38 100,26 Q50,14 0,26 Z;M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z" dur="6s" repeatCount="indefinite"/></path>
<path d="M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z" fill="#ffffff" opacity="0.22"><animate attributeName="d" values="M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z;M0,24 Q60,12 120,24 Q180,36 240,24 Q300,12 360,24 Q420,36 500,24 L500,40 Q420,52 360,40 Q300,28 240,40 Q180,52 120,40 Q60,28 0,40 Z;M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z" dur="7.5s" repeatCount="indefinite"/></path>
<!-- Great wide caustic shafts opening downward: the surface light is enormous -->
<polygon points="200,10 262,10 330,240 268,240" fill="url(#wreckShaft11)" opacity="0.7"><animate attributeName="opacity" values="0.5;0.85;0.5" dur="7s" repeatCount="indefinite"/></polygon>
<polygon points="120,10 168,10 190,230 140,230" fill="url(#wreckShaft11)" opacity="0.55"><animate attributeName="opacity" values="0.36;0.7;0.36" dur="9s" repeatCount="indefinite" begin="2s"/></polygon>
<polygon points="292,10 348,10 400,220 344,220" fill="url(#wreckShaft11)" opacity="0.5"><animate attributeName="opacity" values="0.32;0.66;0.32" dur="8s" repeatCount="indefinite" begin="4s"/></polygon>
<polygon points="42,10 76,10 74,210 36,210" fill="url(#wreckShaft11)" opacity="0.4"><animate attributeName="opacity" values="0.24;0.55;0.24" dur="10s" repeatCount="indefinite" begin="1s"/></polygon>
<polygon points="404,10 438,10 462,200 424,200" fill="url(#wreckShaft11)" opacity="0.38"><animate attributeName="opacity" values="0.22;0.52;0.22" dur="11s" repeatCount="indefinite" begin="5s"/></polygon>
<!-- The hull of the boat waiting on the surface, a small dark oval up there -->
<path d="M212,14 Q246,4 288,10 Q300,14 288,20 Q246,26 212,20 Z" fill="#0d2028" opacity="0.55"><animate attributeName="opacity" values="0.4;0.62;0.4" dur="6s" repeatCount="indefinite"/></path>
<!-- THE ROPE, running the whole height of frame, the way home -->
<path d="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.85"><animate attributeName="d" values="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252;M248,10 Q240,60 252,110 Q262,158 246,206 Q238,232 248,252;M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" dur="9s" repeatCount="indefinite"/></path>
<path d="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" fill="none" stroke="#5c6b4a" stroke-width="0.9" opacity="0.45"><animate attributeName="d" values="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252;M248,10 Q240,60 252,110 Q262,158 246,206 Q238,232 248,252;M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" dur="9s" repeatCount="indefinite"/></path>
<!-- THE WRECK, small at the bottom of frame, on her side, lamps still lit -->
<g opacity="0.9">
  <path d="M0,250 Q80,242 170,246 Q280,250 380,244 Q450,240 500,246 L500,260 L0,260 Z" fill="#07141a"/>
  <path d="M136,248 Q142,232 168,228 L326,220 Q352,220 358,230 L360,246 Q250,252 160,251 Q142,250 136,248 Z" fill="#0f2528"/>
  <path d="M136,248 Q142,232 168,228 L326,220 Q352,220 358,230 L356,234 Q250,228 164,240 Q142,244 136,248 Z" fill="#1d3b3a" opacity="0.6"/>
  <!-- her mast, angled, tiny -->
  <path d="M238,224 L222,196" stroke="#173537" stroke-width="2.4" stroke-linecap="round"/>
  <!-- sand banked along her -->
  <path d="M96,252 Q124,240 152,236 Q126,232 100,240 Q80,246 68,252 Z" fill="#2f5158" opacity="0.6"/>
  <path d="M352,244 Q384,232 416,230 Q444,229 468,238 L468,250 Q410,246 352,250 Z" fill="#2f5158" opacity="0.6"/>
  <!-- rail line -->
  <path d="M166,227 L324,219" fill="none" stroke="#2c5450" stroke-width="1.2" opacity="0.7"/>
</g>
<!-- HER LAMPS, small, warm, and still on. The last thing in the frame. -->
<circle cx="182" cy="230" r="14" fill="url(#wreckLampG11)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="228" cy="227" r="15" fill="url(#wreckLampG11)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.46;0.62;0.4" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></circle>
<circle cx="274" cy="224" r="14" fill="url(#wreckLampG11)" opacity="0.52"><animate attributeName="opacity" values="0.36;0.64;0.44;0.58;0.36" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="316" cy="221" r="13" fill="url(#wreckLampG11)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3s" repeatCount="indefinite" begin="2.6s"/></circle>
<g fill="#F2C14E" filter="url(#wreckSoft11)">
  <rect x="180" y="228" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="226" y="225" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></rect>
  <rect x="272" y="222" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.74;1;0.82;0.95;0.74" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></rect>
  <rect x="314" y="219" width="4" height="4.6" rx="1.1"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="3s" repeatCount="indefinite" begin="2.6s"/></rect>
</g>
<!-- A single amber pinprick moving on the deck: he is still working -->
<circle cx="252" cy="216" r="1.2" fill="#ffeaa7" opacity="0.5" filter="url(#wreckSoft11)"><animate attributeName="cx" values="252;258;252" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.28;0.6;0.28" dur="4s" repeatCount="indefinite"/></circle>
<!-- Bubbles, big and going the same way you are -->
<circle cx="264" cy="200" r="3" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="200;-14" dur="4.6s" repeatCount="indefinite"/><animate attributeName="r" values="2.2;4.4" dur="4.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.55;0" dur="4.6s" repeatCount="indefinite"/></circle>
<circle cx="238" cy="212" r="2.2" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="212;-14" dur="5.8s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="r" values="1.6;3.6" dur="5.8s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0;0.5;0" dur="5.8s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="272" cy="220" r="1.8" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="220;-14" dur="6.6s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="r" values="1.3;3" dur="6.6s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.45;0" dur="6.6s" repeatCount="indefinite" begin="2.6s"/></circle>
<circle cx="230" cy="190" r="1.5" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="190;-14" dur="7.4s" repeatCount="indefinite" begin="4s"/><animate attributeName="r" values="1.1;2.6" dur="7.4s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.4;0" dur="7.4s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="258" cy="180" r="1.2" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="180;-14" dur="8.2s" repeatCount="indefinite" begin="5.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="8.2s" repeatCount="indefinite" begin="5.4s"/></circle>
<!-- THE PLAYER, on the rope, going up, seen from below and behind -->
<g transform="translate(250,168)">
  <animateTransform attributeName="transform" type="translate" values="250,174;250,164;250,174" dur="10s" repeatCount="indefinite"/>
  <!-- fins nearest us, foreshortened, kicking -->
  <path d="M-8,26 Q-16,38 -26,42" fill="none" stroke="#132c30" stroke-width="7.4" stroke-linecap="round"><animate attributeName="d" values="M-8,26 Q-16,38 -26,42;M-8,26 Q-14,34 -22,44;M-8,26 Q-16,38 -26,42" dur="3.2s" repeatCount="indefinite"/></path>
  <path d="M8,26 Q16,38 26,42" fill="none" stroke="#132c30" stroke-width="7.4" stroke-linecap="round"><animate attributeName="d" values="M8,26 Q16,38 26,42;M8,26 Q14,34 22,44;M8,26 Q16,38 26,42" dur="3.2s" repeatCount="indefinite" begin="1.6s"/></path>
  <path d="M-12,4 Q0,-2 12,4 L10,28 Q0,32 -10,28 Z" fill="#132c30"/>
  <rect x="-4" y="-2" width="8" height="20" rx="4" fill="#1a4a55"/>
  <rect x="-2.4" y="0" width="2.6" height="15" rx="1.3" fill="#2a6a75" opacity="0.6"/>
  <circle cx="0" cy="-8" r="8.6" fill="#132c30"/>
  <!-- both arms up on the rope -->
  <path d="M-10,2 Q-8,-14 -3,-24" fill="none" stroke="#132c30" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M10,2 Q8,-16 3,-28" fill="none" stroke="#132c30" stroke-width="6.4" stroke-linecap="round"/>
  <circle cx="-3" cy="-26" r="4" fill="#1a3a3e"/>
  <circle cx="3" cy="-30" r="4" fill="#1a3a3e"/>
  <!-- the lure, in a fist, a single amber bead visible -->
  <circle cx="4" cy="-31" r="1.4" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.34;0.75;0.34" dur="3.4s" repeatCount="indefinite"/></circle>
</g>
<!-- Motes, thinning as the water gets brighter -->
<circle cx="90" cy="150" r="1" fill="#dff6ea" opacity="0.24"><animate attributeName="cy" values="150;130;150" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="404" cy="120" r="1.1" fill="#dff6ea" opacity="0.22"><animate attributeName="cy" values="120;98;120" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.28;0.07" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="152" cy="70" r="0.9" fill="#ffffff" opacity="0.26"><animate attributeName="cy" values="70;52;70" dur="11s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.1;0.32;0.1" dur="5.5s" repeatCount="indefinite" begin="3.5s"/></circle>
<circle cx="352" cy="60" r="0.8" fill="#ffffff" opacity="0.24"><animate attributeName="cy" values="60;42;60" dur="13s" repeatCount="indefinite" begin="1.4s"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="6.5s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="60" cy="220" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="220;200;220" dur="15s" repeatCount="indefinite" begin="5s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7.5s" repeatCount="indefinite" begin="5s"/></circle>
</svg>`;

// ---------------------------------------------------------------------------
// STORY 2: wreck_return — "Back Down to Fishington's"
// ---------------------------------------------------------------------------

// Return scene 0: Arrival. The story-1 wreck composition, but closer and more
// familiar. Crab on the mat, foreground.
STORY_SCENES['wreck_return_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="42%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetShaft0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wrRetHull0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="55%" stop-color="#122a2c"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wrRetSand0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <radialGradient id="wrRetLampG0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater0)"/>
<polygon points="100,0 132,0 158,140 130,140" fill="url(#wrRetShaft0)" opacity="0.6"><animate attributeName="opacity" values="0.34;0.7;0.34" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 366,0 340,150 312,150" fill="url(#wrRetShaft0)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<!-- Kelp, closer than in story 1 -->
<path d="M22,260 Q14,214 26,178 Q34,154 26,128" fill="none" stroke="#12333a" stroke-width="5" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M22,260 Q14,214 26,178 Q34,154 26,128;M22,260 Q30,214 16,178 Q8,154 18,128;M22,260 Q14,214 26,178 Q34,154 26,128" dur="11s" repeatCount="indefinite"/></path>
<path d="M482,260 Q474,220 486,186 Q492,164 484,142" fill="none" stroke="#12333a" stroke-width="4.4" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M482,260 Q474,220 486,186 Q492,164 484,142;M482,260 Q492,220 476,186 Q470,164 478,142;M482,260 Q474,220 486,186 Q492,164 484,142" dur="13s" repeatCount="indefinite" begin="3s"/></path>
<!-- THE HULL, closer, filling more of frame -->
<path d="M20,208 Q30,164 96,150 L392,116 Q450,112 470,134 Q488,154 482,190 L476,220 Q300,238 150,234 Q60,230 20,208 Z" fill="url(#wrRetHull0)"/>
<path d="M20,208 Q30,164 96,150 L392,116 Q450,112 470,134 L466,150 Q300,138 148,158 Q60,176 24,200 Z" fill="#25494a" opacity="0.55"/>
<path d="M32,192 Q180,158 468,140" fill="none" stroke="#0a1a1e" stroke-width="1.2" opacity="0.55"/>
<path d="M28,206 Q190,176 476,160" fill="none" stroke="#0a1a1e" stroke-width="1.2" opacity="0.45"/>
<path d="M112,150 L104,222" stroke="#0a1a1e" stroke-width="2.2" opacity="0.4"/>
<path d="M180,142 L174,230" stroke="#0a1a1e" stroke-width="2.2" opacity="0.35"/>
<path d="M366,120 L370,228" stroke="#0a1a1e" stroke-width="2.2" opacity="0.3"/>
<!-- Broken bow, open water inside -->
<path d="M20,208 Q30,164 96,150 L84,168 Q62,178 58,196 L66,212 Q38,216 20,208 Z" fill="#07141a" opacity="0.8"/>
<!-- Rail with stanchions -->
<path d="M94,148 L390,114" fill="none" stroke="#2c5450" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
<rect x="122" y="134" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="188" y="126" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="254" y="118" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="320" y="111" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<!-- Toppled mast and its hanging loops of rope -->
<path d="M270,118 L206,44" stroke="#173537" stroke-width="6" stroke-linecap="round"/>
<path d="M270,118 L206,44" stroke="#28524f" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
<path d="M226,68 L262,58" stroke="#173537" stroke-width="3.4" stroke-linecap="round"/>
<path d="M212,50 Q192,82 208,102 Q224,120 206,136" fill="none" stroke="#2a3a2c" stroke-width="1.8" opacity="0.75"><animate attributeName="d" values="M212,50 Q192,82 208,102 Q224,120 206,136;M212,50 Q198,82 202,102 Q218,120 212,136;M212,50 Q192,82 208,102 Q224,120 206,136" dur="9s" repeatCount="indefinite"/></path>
<path d="M248,60 Q268,88 252,108 Q240,124 254,140" fill="none" stroke="#2a3a2c" stroke-width="1.5" opacity="0.6"><animate attributeName="d" values="M248,60 Q268,88 252,108 Q240,124 254,140;M248,60 Q260,88 258,108 Q248,124 250,140;M248,60 Q268,88 252,108 Q240,124 254,140" dur="11s" repeatCount="indefinite" begin="1.6s"/></path>
<!-- SAND banked along her -->
<path d="M0,242 Q52,224 116,216 Q152,212 176,220 Q126,196 96,182 Q64,166 26,182 Q4,192 0,206 Z" fill="url(#wrRetSand0)" opacity="0.9"/>
<path d="M340,236 Q392,214 436,194 Q466,180 500,192 L500,260 L336,260 Z" fill="url(#wrRetSand0)" opacity="0.9"/>
<path d="M0,248 Q120,238 250,244 Q380,250 500,238 L500,260 L0,260 Z" fill="#2f5158" opacity="0.75"/>
<path d="M12,214 Q56,196 100,188" fill="none" stroke="#3d666c" stroke-width="1.5" opacity="0.5"/>
<path d="M420,194 Q456,186 490,198" fill="none" stroke="#3d666c" stroke-width="1.5" opacity="0.45"/>
<!-- THE LAMPS, closer and brighter than the first dive -->
<path d="M112,132 Q146,142 178,128 Q212,138 244,122 Q278,132 310,116 Q344,126 374,110" fill="none" stroke="#2c5450" stroke-width="1" opacity="0.7"/>
<circle cx="146" cy="140" r="32" fill="url(#wrRetLampG0)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.72;0.5;0.66;0.42" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="212" cy="136" r="30" fill="url(#wrRetLampG0)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="278" cy="130" r="32" fill="url(#wrRetLampG0)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.74;0.5;0.66;0.42" dur="3.6s" repeatCount="indefinite" begin="1.6s"/></circle>
<circle cx="344" cy="124" r="29" fill="url(#wrRetLampG0)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.68;0.46;0.6;0.38" dur="3s" repeatCount="indefinite" begin="2.4s"/></circle>
<g fill="#F2C14E">
  <rect x="142" y="136" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="208" y="132" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.74;1;0.82;0.94;0.74" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></rect>
  <rect x="274" y="126" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="3.6s" repeatCount="indefinite" begin="1.6s"/></rect>
  <rect x="340" y="120" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.75;1;0.83;0.95;0.75" dur="3s" repeatCount="indefinite" begin="2.4s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.8" opacity="0.7">
  <rect x="141" y="135" width="9.4" height="10.6" rx="2"/>
  <rect x="207" y="131" width="9.4" height="10.6" rx="2"/>
  <rect x="273" y="125" width="9.4" height="10.6" rx="2"/>
  <rect x="339" y="119" width="9.4" height="10.6" rx="2"/>
</g>
<ellipse cx="244" cy="222" rx="150" ry="20" fill="#F2C14E" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- The hatch, shut. It is about to bang open. -->
<rect x="290" y="118" width="34" height="10" rx="2.4" fill="#0e2224" transform="rotate(-6,307,123)"/>
<rect x="293" y="119" width="28" height="2.6" rx="1.3" fill="#2c5450" opacity="0.5" transform="rotate(-6,307,123)"/>
<circle cx="318" cy="123" r="2.4" fill="url(#wrRetSand0)" opacity="0"/>
<circle cx="318" cy="123" r="2.4" fill="#8b6914" opacity="0.7"/>
<!-- THE DOORMAT, close and clearly swept, and the crab on it -->
<g transform="translate(206,230)">
  <path d="M-42,0 L42,0 L52,18 L-52,18 Z" fill="#5a4a22"/>
  <path d="M-42,0 L42,0 L44,5 L-44,5 Z" fill="#75612e" opacity="0.85"/>
  <path d="M-38,7 L40,7 M-41,12 L43,12" stroke="#3d3216" stroke-width="1.1" opacity="0.7"/>
  <path d="M-24,0 L-29,18 M-8,0 L-10,18 M8,0 L9,18 M24,0 L28,18" stroke="#3d3216" stroke-width="0.8" opacity="0.5"/>
  <!-- a fringe of the mat lifting in the current -->
  <path d="M-52,18 Q-56,14 -52,10" fill="none" stroke="#5a4a22" stroke-width="2" stroke-linecap="round"><animate attributeName="d" values="M-52,18 Q-56,14 -52,10;M-52,18 Q-58,13 -52,9;M-52,18 Q-56,14 -52,10" dur="5s" repeatCount="indefinite"/></path>
</g>
<g transform="translate(206,224)">
  <ellipse cx="0" cy="0" rx="10" ry="6.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-2" rx="8.6" ry="4.2" fill="#b04a38" opacity="0.85"/>
  <path d="M-6,-4 Q0,-6 6,-4" fill="none" stroke="#7a3428" stroke-width="0.8" opacity="0.6"/>
  <circle cx="-3.4" cy="-4.8" r="1.6" fill="#0a1a1e"/>
  <circle cx="3.4" cy="-4.8" r="1.6" fill="#0a1a1e"/>
  <circle cx="-3" cy="-5.3" r="0.6" fill="#ffeaa7"/>
  <circle cx="3.8" cy="-5.3" r="0.6" fill="#ffeaa7"/>
  <path d="M-8.6,-1.4 L-16,-5.6 L-19,-1.4" fill="none" stroke="#8f3b2e" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M-8.6,-1.4 L-16,-5.6 L-19,-1.4;M-8.6,-1.4 L-16,-7 L-19,-3;M-8.6,-1.4 L-16,-5.6 L-19,-1.4" dur="2.4s" repeatCount="indefinite"/></path>
  <path d="M8.6,-1.4 L16,-5.6 L19,-1.4" fill="none" stroke="#8f3b2e" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M8.6,-1.4 L16,-5.6 L19,-1.4;M8.6,-1.4 L16,-7 L19,-3;M8.6,-1.4 L16,-5.6 L19,-1.4" dur="2.4s" repeatCount="indefinite" begin="1.2s"/></path>
  <path d="M-7,4.4 L-11,8.6 M0,5.6 L0,10 M7,4.4 L11,8.6" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"/>
</g>
<!-- The rope you came down on, still there, off to the left -->
<path d="M76,0 Q70,40 80,80 Q88,110 76,138" fill="none" stroke="#2a3a2c" stroke-width="2.2" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M76,0 Q70,40 80,80 Q88,110 76,138;M76,0 Q82,40 72,80 Q66,110 76,138;M76,0 Q70,40 80,80 Q88,110 76,138" dur="8s" repeatCount="indefinite"/></path>
<!-- Motes -->
<circle cx="170" cy="170" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="170;152;170" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.34;0.12" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="310" cy="158" r="1.2" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="158;140;158" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="440" cy="80" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="80;60;80" dur="13s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="56" cy="100" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="100;80;100" dur="14s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="1s"/></circle>
<rect x="0" y="0" width="500" height="40" fill="#07141a" opacity="0.16"/>
</svg>`;

// Return scene 1: The hatch bangs open and Fredward is already coming at the
// viewer with the book. Motion, joy, ink.
STORY_SCENES['wreck_return_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="48%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetDeck1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wrRetBrass1" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="48%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetGlass1" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
  <radialGradient id="wrRetLampG1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetPage1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#d2c190"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater1)"/>
<polygon points="60,0 92,0 116,130 88,130" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="400,0 428,0 404,136 380,136" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- Deck and rail -->
<path d="M0,150 L500,132 L500,178 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,178 L500,260 L0,260 Z" fill="url(#wrRetDeck1)"/>
<path d="M0,196 L500,178 L500,186 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,220 L500,200 M0,242 L500,220" stroke="#0a1a1e" stroke-width="1" opacity="0.35"/>
<path d="M0,178 L500,158" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.75"/>
<circle cx="62" cy="180" r="26" fill="url(#wrRetLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="436" cy="162" r="26" fill="url(#wrRetLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.68;0.46;0.62;0.38" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></circle>
<rect x="59" y="177" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
<rect x="433" y="159" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.83;0.95;0.75" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></rect>
<!-- THE HATCH, banged open, cover still swinging -->
<ellipse cx="248" cy="196" rx="52" ry="17" fill="#07141a"/>
<ellipse cx="248" cy="196" rx="52" ry="17" fill="none" stroke="url(#wrRetBrass1)" stroke-width="3.4"/>
<ellipse cx="248" cy="194" rx="47" ry="13" fill="none" stroke="#c9962e" stroke-width="0.9" opacity="0.4"/>
<g transform="translate(296,192)">
  <animateTransform attributeName="transform" type="rotate" values="-8,0,0;5,0,0;-3,0,0;2,0,0;0,0,0" dur="2.4s" repeatCount="indefinite" additive="sum"/>
  <path d="M0,-6 L54,-38 L62,-24 L8,8 Z" fill="#1d3b3a"/>
  <path d="M0,-6 L54,-38 L56,-34 L2,-2 Z" fill="#2c5450" opacity="0.6"/>
  <circle cx="52" cy="-32" r="2.4" fill="#8b6914"/>
</g>
<!-- Silt kicked up by the bang, settling -->
<ellipse cx="248" cy="208" rx="76" ry="12" fill="#3d666c" opacity="0.2"><animate attributeName="rx" values="40;96;110" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.12;0" dur="3.4s" repeatCount="indefinite"/></ellipse>
<ellipse cx="248" cy="196" rx="46" ry="14" fill="#F2C14E" opacity="0.2"><animate attributeName="opacity" values="0.12;0.28;0.12" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- FREDWARD, out of the hatch and already coming at you, both hands out -->
<g transform="translate(246,86)">
  <animateTransform attributeName="transform" type="translate" values="246,90;246,80;246,90" dur="2.6s" repeatCount="indefinite"/>
  <!-- legs, still half in the hatch, kicking up -->
  <path d="M-14,96 Q-24,116 -20,132" fill="none" stroke="url(#wrRetSuit1)" stroke-width="14" stroke-linecap="round"><animate attributeName="d" values="M-14,96 Q-24,116 -20,132;M-14,96 Q-28,112 -26,128;M-14,96 Q-24,116 -20,132" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M14,96 Q26,114 22,130" fill="none" stroke="url(#wrRetSuit1)" stroke-width="14" stroke-linecap="round"><animate attributeName="d" values="M14,96 Q26,114 22,130;M14,96 Q30,110 28,126;M14,96 Q26,114 22,130" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></path>
  <rect x="-28" y="128" width="18" height="12" rx="3" fill="#5c4409"><animate attributeName="x" values="-28;-34;-28" dur="2.6s" repeatCount="indefinite"/></rect>
  <rect x="14" y="126" width="18" height="12" rx="3" fill="#5c4409"><animate attributeName="x" values="14;20;14" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></rect>
  <!-- torso, leaning forward hard -->
  <path d="M-30,46 Q0,36 30,46 L26,100 Q0,108 -26,100 Z" fill="url(#wrRetSuit1)"/>
  <path d="M-27,60 Q0,52 27,60 M-27,76 Q0,68 27,76" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.5"/>
  <rect x="-13" y="48" width="26" height="12" rx="2.5" fill="url(#wrRetBrass1)"/>
  <circle cx="-6" cy="54" r="1.5" fill="#c9962e"/><circle cx="6" cy="54" r="1.5" fill="#c9962e"/>
  <ellipse cx="0" cy="42" rx="17" ry="6" fill="url(#wrRetBrass1)"/>
  <!-- helmet, tilted forward at you, very slight bob -->
  <g transform="rotate(-4,0,16)">
    <animateTransform attributeName="transform" type="rotate" values="-6,0,16;-2,0,16;-6,0,16" dur="2.6s" repeatCount="indefinite" additive="sum"/>
    <circle cx="0" cy="16" r="23" fill="url(#wrRetBrass1)"/>
    <circle cx="0" cy="16" r="23" fill="none" stroke="#5c4409" stroke-width="1.6"/>
    <circle cx="-19" cy="18" r="5.4" fill="#5c4409"/><circle cx="-19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
    <circle cx="19" cy="18" r="5.4" fill="#5c4409"/><circle cx="19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
    <circle cx="-12" cy="-1" r="1.3" fill="#c9962e"/><circle cx="0" cy="-5" r="1.3" fill="#c9962e"/><circle cx="12" cy="-1" r="1.3" fill="#c9962e"/>
    <circle cx="0.0" cy="17.0" r="15.4" fill="url(#wrRetGlass1)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="19.67" rx="8.62" ry="9.86" fill="#9c7a5e"/>
    <path d="M-8.62,18.03 Q0.0,9.2 8.62,18.03 L8.62,12.89 Q0.0,7.35 -8.62,12.89 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-6.78,15.56 Q0.0,12.69 6.78,15.56" fill="none" stroke="#5a4131" stroke-width="1.54" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,17.41 L-0.82,21.31 Q0.0,22.34 1.44,21.52" fill="none" stroke="#7a5c45" stroke-width="1.23" stroke-linecap="round" opacity="0.8"/>
    <path d="M-5.54,17.62 Q-3.49,15.36 -1.44,17.62" fill="none" stroke="#2a1d12" stroke-width="1.54" stroke-linecap="round"/><path d="M1.44,17.62 Q3.49,15.36 5.54,17.62" fill="none" stroke="#2a1d12" stroke-width="1.54" stroke-linecap="round"/>
    <path d="M-5.75,23.57 Q-2.46,21.93 0.0,23.16 Q2.46,21.93 5.75,23.57" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="17.0" r="15.4" fill="none" stroke="#8b6914" stroke-width="3.49"/>
    <circle cx="0.0" cy="17.0" r="16.84" fill="none" stroke="#c9962e" stroke-width="1.03" opacity="0.75"/>
    <circle cx="14.42" cy="22.97" r="1.03" fill="#5c4409"/><circle cx="5.97" cy="31.42" r="1.03" fill="#5c4409"/><circle cx="-5.97" cy="31.42" r="1.03" fill="#5c4409"/><circle cx="-14.42" cy="22.97" r="1.03" fill="#5c4409"/><circle cx="-14.42" cy="11.03" r="1.03" fill="#5c4409"/><circle cx="-5.97" cy="2.58" r="1.03" fill="#5c4409"/><circle cx="5.97" cy="2.58" r="1.03" fill="#5c4409"/><circle cx="14.42" cy="11.03" r="1.03" fill="#5c4409"/>
    <path d="M-9.65,13.51 Q-5.13,7.35 2.46,6.94" fill="none" stroke="#dff6ea" stroke-width="2.46" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="2.8s" repeatCount="indefinite"/></path>
    <circle cx="6.37" cy="10.43" r="1.75" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="2.8s" repeatCount="indefinite"/></circle>
    <path d="M-7.8,23.78 Q0.0,26.86 7.8,23.78" fill="none" stroke="#7fc4b8" stroke-width="1.44" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- BOTH ARMS OUT, thrusting the book at the viewer -->
  <path d="M-28,60 Q-58,74 -70,96" fill="none" stroke="url(#wrRetSuit1)" stroke-width="11" stroke-linecap="round"><animate attributeName="d" values="M-28,60 Q-58,74 -70,96;M-28,60 Q-60,78 -66,100;M-28,60 Q-58,74 -70,96" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M28,60 Q58,74 70,96" fill="none" stroke="url(#wrRetSuit1)" stroke-width="11" stroke-linecap="round"><animate attributeName="d" values="M28,60 Q58,74 70,96;M28,60 Q60,78 66,100;M28,60 Q58,74 70,96" dur="2.6s" repeatCount="indefinite"/></path>
  <!-- air hose, whipping behind him -->
  <path d="M18,2 Q60,-10 84,14 Q104,40 92,76" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M18,2 Q60,-10 84,14 Q104,40 92,76;M18,2 Q66,-18 90,10 Q110,38 92,76;M18,2 Q60,-10 84,14 Q104,40 92,76" dur="3.6s" repeatCount="indefinite"/></path>
</g>
<!-- THE BOOK, held out open, right at the front of frame -->
<g transform="translate(246,196)">
  <animateTransform attributeName="transform" type="translate" values="246,200;246,190;246,200" dur="2.6s" repeatCount="indefinite"/>
  <!-- the closed block of pages beneath, thick -->
  <path d="M-96,18 L96,18 L92,2 L-92,2 Z" fill="#8a7a4c"/>
  <path d="M-92,2 L92,2 L88,-2 L-88,-2 Z" fill="#a5945f"/>
  <path d="M-88,6 L88,6 M-88,11 L88,11 M-88,16 L88,16" stroke="#6d5f38" stroke-width="0.7" opacity="0.55"/>
  <path d="M-100,20 L-92,20 L-92,-6 L-100,-4 Z" fill="#3d2a12"/>
  <path d="M100,20 L92,20 L92,-6 L100,-4 Z" fill="#3d2a12"/>
  <!-- open spread, tipped toward the viewer -->
  <path d="M-88,0 Q-44,-14 0,-10 L0,-72 Q-44,-80 -88,-64 Z" fill="url(#wrRetPage1)"/>
  <path d="M0,-10 Q44,-14 88,0 L88,-64 Q44,-80 0,-72 Z" fill="url(#wrRetPage1)" opacity="0.94"/>
  <path d="M0,-72 L0,-10" stroke="#8a7a4c" stroke-width="3.4" opacity="0.5"/>
  <!-- left page: finished entries -->
  <g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
    <path d="M-78,-52 L-24,-55 M-78,-46 L-16,-49 M-78,-40 L-36,-43"/>
    <path d="M-78,-26 L-20,-28 M-78,-20 L-30,-22"/>
  </g>
  <path d="M-70,-36 Q-56,-46 -42,-36 Q-30,-27 -18,-36" fill="none" stroke="#3a2e12" stroke-width="1.6" stroke-linecap="round"/>
  <!-- right page: THE NEW ONE, ink still tacky -->
  <path d="M16,-64 L64,-66" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
  <ellipse cx="46" cy="-40" rx="19" ry="12" fill="none" stroke="#26200c" stroke-width="2"/>
  <path d="M28,-43 L16,-49 M28,-37 L15,-34 M62,-43 L74,-49 M62,-37 L75,-34 M36,-29 L30,-20 M56,-29 L62,-20" stroke="#26200c" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="40" cy="-43" r="1.5" fill="#26200c"/><circle cx="52" cy="-43" r="1.5" fill="#26200c"/>
  <!-- wet ink: a faint sheen that moves -->
  <ellipse cx="46" cy="-40" rx="19" ry="12" fill="none" stroke="#5b4a20" stroke-width="2" opacity="0.4"><animate attributeName="opacity" values="0.2;0.55;0.2" dur="3s" repeatCount="indefinite"/></ellipse>
  <g stroke="#3a2e12" stroke-width="0.6" opacity="0.4">
    <path d="M16,-22 L78,-24 M16,-16 L70,-18"/>
  </g>
  <!-- a smudge where a glove has already touched it -->
  <ellipse cx="24" cy="-18" rx="6" ry="3" fill="#4a3a18" opacity="0.25"/>
  <!-- his gloves gripping both covers -->
  <path d="M-108,10 Q-96,2 -86,8 Q-82,16 -92,20 Q-104,22 -108,16 Z" fill="#40614e"/>
  <path d="M108,10 Q96,2 86,8 Q82,16 92,20 Q104,22 108,16 Z" fill="#40614e"/>
  <path d="M-100,20 L-102,26 M-92,21 L-93,27" stroke="#3a5847" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M100,20 L102,26 M92,21 L93,27" stroke="#3a5847" stroke-width="3.2" stroke-linecap="round"/>
  <!-- warm light landing on the open spread -->
  <path d="M-88,0 Q-44,-14 0,-10 L0,-72 Q-44,-80 -88,-64 Z" fill="#ffeaa7" opacity="0.1"><animate attributeName="opacity" values="0.06;0.14;0.06" dur="4s" repeatCount="indefinite"/></path>
</g>
<!-- Bubbles, fast, because he has come up out of the hatch in a hurry -->
<circle cx="264" cy="70" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="70;-10" dur="3.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="3.6s" repeatCount="indefinite"/></circle>
<circle cx="272" cy="78" r="1.5" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="78;-10" dur="4.4s" repeatCount="indefinite" begin="0.8s"/><animate attributeName="opacity" values="0;0.46;0" dur="4.4s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="256" cy="64" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="64;-10" dur="4s" repeatCount="indefinite" begin="1.7s"/><animate attributeName="opacity" values="0;0.48;0" dur="4s" repeatCount="indefinite" begin="1.7s"/></circle>
<circle cx="280" cy="86" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="86;-10" dur="5.2s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.2s" repeatCount="indefinite" begin="2.6s"/></circle>
<!-- Motes -->
<circle cx="120" cy="110" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="110;92;110" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="404" cy="88" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="88;70;88" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="46" cy="60" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="60;42;60" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Return scene 2: The new page. The drawing pool rotates per visit, so all
// four creatures sit on the spread as separate entries and the page reads
// correctly whichever line the story picks: the eel that only swims through
// gaps, the crab building a shell out of letters, the thing that comes to look
// at the lamps, and the octopus who has moved into the ship's bell.
STORY_SCENES['wreck_return_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wrRetLit2" cx="50%" cy="46%" r="60%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.34"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.1"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetPage2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wrRetBrass2" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetGlove2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater2)"/>
<rect width="500" height="260" fill="url(#wrRetLit2)"/>
<!-- Lamp above frame -->
<rect x="248" y="0" width="4" height="14" fill="#2c5450"/>
<path d="M234,14 L266,14 L260,26 L240,26 Z" fill="#5c4409"/>
<rect x="242" y="24" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="250" cy="32" rx="46" ry="15" fill="#ffd700" opacity="0.12"><animate attributeName="opacity" values="0.07;0.17;0.07" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Bulkhead and table -->
<rect x="0" y="0" width="500" height="46" fill="#0d2028" opacity="0.5"/>
<path d="M26,222 L474,222 L484,238 L16,238 Z" fill="#1d3b3a"/>
<path d="M26,222 L474,222 L476,226 L24,226 Z" fill="#2c5450" opacity="0.55"/>
<rect x="54" y="238" width="12" height="22" fill="#173537"/>
<rect x="434" y="238" width="12" height="22" fill="#173537"/>
<!-- THE BOOK, filling the frame, open to the new spread -->
<path d="M60,222 L440,222 L438,200 L62,200 Z" fill="#8a7a4c"/>
<path d="M62,200 L438,200 L436,195 L64,195 Z" fill="#a5945f"/>
<path d="M68,203 L432,203 M68,209 L432,209 M68,215 L432,215" stroke="#6d5f38" stroke-width="0.7" opacity="0.55"/>
<path d="M54,224 L62,224 L62,192 L54,193 Z" fill="#3d2a12"/>
<path d="M446,224 L438,224 L438,192 L446,193 Z" fill="#3d2a12"/>
<path d="M68,198 Q160,182 250,187 L250,44 Q160,36 68,54 Z" fill="url(#wrRetPage2)"/>
<path d="M250,187 Q340,182 432,198 L432,54 Q340,36 250,44 Z" fill="url(#wrRetPage2)" opacity="0.95"/>
<path d="M250,44 L250,187" stroke="#8a7a4c" stroke-width="4" opacity="0.5"/>
<!-- Ruled margins -->
<path d="M92,50 L92,192 M408,50 L408,192" stroke="#c9705a" stroke-width="0.6" opacity="0.35"/>
<!-- ENTRY 1, upper left: the eel that only swims through gaps between things -->
<g stroke="#3a2e12" fill="none">
  <path d="M104,84 Q124,66 140,80 Q154,92 172,76 Q186,64 202,72" stroke-width="1.9" stroke-linecap="round"/>
  <path d="M104,84 Q124,70 140,83 Q154,94 172,79 Q186,68 202,75" stroke-width="0.7" opacity="0.55"/>
</g>
<circle cx="106" cy="83" r="1.3" fill="#3a2e12"/>
<!-- the gaps it swims through, drawn as two rocks with a slot between -->
<path d="M132,96 Q140,88 150,96 L150,104 L132,104 Z" fill="none" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M158,96 Q166,88 176,96 L176,104 L158,104 Z" fill="none" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M154,90 L154,106" stroke="#3a2e12" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 2"/>
<path d="M104,58 L172,56" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M104,112 L200,109 M104,117 L192,114 M104,122 L162,120"/>
</g>
<!-- ENTRY 2, lower left: the crab building a shell out of letters -->
<ellipse cx="140" cy="152" rx="17" ry="11" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M126,150 L118,145 M126,156 L117,158 M154,150 L162,145 M154,156 L163,158" stroke="#3a2e12" stroke-width="1.2" stroke-linecap="round"/>
<path d="M132,162 L128,170 M148,162 L152,170" stroke="#3a2e12" stroke-width="1" stroke-linecap="round"/>
<circle cx="135" cy="148" r="1.1" fill="#3a2e12"/><circle cx="145" cy="148" r="1.1" fill="#3a2e12"/>
<!-- the shell, made of actual letters -->
<text x="132" y="155" font-family="'Courier New',monospace" font-size="7" fill="#3a2e12" opacity="0.85">A</text>
<text x="140" y="151" font-family="'Courier New',monospace" font-size="6" fill="#3a2e12" opacity="0.75">R</text>
<text x="146" y="156" font-family="'Courier New',monospace" font-size="7" fill="#3a2e12" opacity="0.8">G</text>
<text x="134" y="147" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.6">S</text>
<text x="149" y="149" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.6">U</text>
<!-- drawn twice, and a different word both times -->
<ellipse cx="196" cy="158" rx="12" ry="8" fill="none" stroke="#3a2e12" stroke-width="1.2" opacity="0.55"/>
<text x="190" y="160" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.5">GUAR</text>
<path d="M168,152 L182,155" stroke="#3a2e12" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 2"/>
<path d="M104,136 L176,134" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M104,176 L204,173 M104,181 L196,178"/>
</g>
<!-- ENTRY 3, upper right: the thing that comes to look at the lamps -->
<!-- fourteen tally marks, and it has never once come closer -->
<path d="M270,84 Q292,66 318,78 Q338,88 320,98 Q292,110 270,94 Z" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M270,94 L256,104 L260,84 Z" fill="none" stroke="#3a2e12" stroke-width="1.4"/>
<circle cx="312" cy="82" r="1.4" fill="#3a2e12"/>
<!-- the lamp it looks at, drawn small at the far side, and the gap between -->
<rect x="358" y="80" width="7" height="9" rx="1.8" fill="none" stroke="#3a2e12" stroke-width="1.1"/>
<path d="M336,86 L354,85" stroke="#3a2e12" stroke-width="0.6" opacity="0.45" stroke-dasharray="3 3"/>
<!-- fourteen tallies -->
<g stroke="#3a2e12" stroke-width="0.9" opacity="0.7">
  <path d="M266,110 L266,118 M270,110 L270,118 M274,110 L274,118 M278,110 L278,118 M264,118 L280,110"/>
  <path d="M286,110 L286,118 M290,110 L290,118 M294,110 L294,118 M298,110 L298,118 M284,118 L300,110"/>
  <path d="M306,110 L306,118 M310,110 L310,118 M314,110 L314,118 M318,110 L318,118"/>
</g>
<path d="M266,58 L340,56" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M266,126 L390,123 M266,131 L380,128"/>
</g>
<!-- ENTRY 4, lower right: the octopus who has moved into the ship's bell -->
<path d="M300,150 Q300,136 314,134 Q328,136 328,150 Z" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M300,150 Q314,156 328,150 L328,153 Q314,159 300,153 Z" fill="none" stroke="#3a2e12" stroke-width="1.2"/>
<circle cx="314" cy="131" r="2.4" fill="none" stroke="#3a2e12" stroke-width="1"/>
<!-- her, inside it, not ringing it -->
<ellipse cx="314" cy="145" rx="7" ry="6" fill="none" stroke="#3a2e12" stroke-width="1.3"/>
<circle cx="311" cy="144" r="1" fill="#3a2e12"/><circle cx="317" cy="144" r="1" fill="#3a2e12"/>
<path d="M308,151 Q304,157 300,158 M312,152 Q311,159 307,162 M317,152 Q319,159 323,161 M321,151 Q326,156 330,157" fill="none" stroke="#3a2e12" stroke-width="1" stroke-linecap="round"/>
<!-- the clapper, hanging perfectly still -->
<path d="M314,150 L314,155" stroke="#3a2e12" stroke-width="0.7" opacity="0.5"/>
<circle cx="314" cy="156" r="1.4" fill="none" stroke="#3a2e12" stroke-width="0.7" opacity="0.5"/>
<path d="M266,136 L336,134" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M266,172 L392,169 M266,177 L378,174 M266,182 L330,179"/>
</g>
<!-- the newest ink, still wet: a sheen over the octopus entry -->
<ellipse cx="314" cy="146" rx="20" ry="18" fill="#5b4a20" opacity="0.1"><animate attributeName="opacity" values="0.05;0.16;0.05" dur="3.2s" repeatCount="indefinite"/></ellipse>
<!-- HIS GLOVED HAND, one finger down on the newest entry -->
<g transform="translate(374,168)">
  <animateTransform attributeName="transform" type="translate" values="374,168;374,166;374,168" dur="5.4s" repeatCount="indefinite"/>
  <path d="M18,-30 L58,-52 L74,-24 L34,-2 Z" fill="url(#wrRetGlove2)"/>
  <path d="M16,-32 L36,-42 L46,-22 L26,-12 Z" fill="url(#wrRetBrass2)"/>
  <path d="M-8,-6 Q6,-24 28,-24 Q42,-22 40,-8 Q36,8 16,14 Q0,18 -8,8 Z" fill="url(#wrRetGlove2)"/>
  <!-- the tapping finger, pointing back at the entry -->
  <path d="M-8,-2 Q-26,-8 -38,-2" fill="none" stroke="#40614e" stroke-width="5.4" stroke-linecap="round"><animate attributeName="d" values="M-8,-2 Q-26,-8 -38,-2;M-8,-2 Q-26,-6 -38,0;M-8,-2 Q-26,-8 -38,-2" dur="1.8s" repeatCount="indefinite"/></path>
  <path d="M-6,6 Q-20,6 -28,12" fill="none" stroke="#3a5847" stroke-width="4.8" stroke-linecap="round"/>
  <path d="M0,12 Q-10,16 -14,22" fill="none" stroke="#3a5847" stroke-width="4.4" stroke-linecap="round"/>
  <path d="M4,-16 Q-6,-22 -14,-18" fill="none" stroke="#3a5847" stroke-width="4.8" stroke-linecap="round"/>
  <path d="M2,-4 Q16,-14 32,-12" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.55"/>
</g>
<!-- Pen, laid across the gutter where he dropped it -->
<rect x="216" y="192" width="48" height="3.2" rx="1.6" fill="#7a5a18" transform="rotate(-6,240,193)"/>
<path d="M264,192 L272,194 L264,196 Z" fill="#2a2a2a" transform="rotate(-6,240,193)"/>
<!-- Motes in the lamplight -->
<circle cx="140" cy="34" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="34;18;34" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.34;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="368" cy="28" r="1.1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="28;12;28" dur="11s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="472" cy="120" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="24" cy="140" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="140;122;140" dur="13s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
</svg>`;

// Return scene 3: The book fanned open at a hundred pages back, two spreads
// visible, identical handwriting on both. The old spread is stained and the
// new one is not, and the hand is exactly the same hand.
STORY_SCENES['wreck_return_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wrRetLit3" cx="50%" cy="48%" r="60%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.32"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetOldPg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dbcb98"/><stop offset="100%" stop-color="#b8a672"/>
  </linearGradient>
  <linearGradient id="wrRetNewPg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wrRetBrass3" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetGlove3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater3)"/>
<rect width="500" height="260" fill="url(#wrRetLit3)"/>
<rect x="0" y="0" width="500" height="40" fill="#0d2028" opacity="0.5"/>
<!-- Lamp glow from off-frame left -->
<ellipse cx="60" cy="20" rx="70" ry="30" fill="#ffd700" opacity="0.09"><animate attributeName="opacity" values="0.05;0.13;0.05" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Table -->
<path d="M14,228 L486,228 L496,244 L4,244 Z" fill="#1d3b3a"/>
<path d="M14,228 L486,228 L488,232 L12,232 Z" fill="#2c5450" opacity="0.55"/>
<rect x="48" y="244" width="12" height="16" fill="#173537"/>
<rect x="440" y="244" width="12" height="16" fill="#173537"/>
<!-- THE BOOK, held open in two places at once, fanned -->
<!-- page block, left half: the hundred pages he has turned back through -->
<path d="M40,228 L246,228 L244,190 L42,196 Z" fill="#8a7a4c"/>
<path d="M42,196 L244,190 L242,185 L44,191 Z" fill="#a5945f"/>
<g stroke="#6d5f38" stroke-width="0.6" opacity="0.5">
  <path d="M46,200 L244,194 M46,206 L244,200 M46,212 L244,206 M46,218 L244,212 M46,224 L244,218"/>
</g>
<!-- page block, right half: the rest of it -->
<path d="M254,228 L460,228 L458,196 L256,190 Z" fill="#8a7a4c"/>
<path d="M256,190 L458,196 L456,191 L258,185 Z" fill="#a5945f"/>
<g stroke="#6d5f38" stroke-width="0.6" opacity="0.5">
  <path d="M256,194 L456,200 M256,200 L456,206 M256,206 L456,212 M256,212 L456,218 M256,218 L456,224"/>
</g>
<!-- covers at the outer edges -->
<path d="M34,230 L42,230 L44,184 L36,185 Z" fill="#3d2a12"/>
<path d="M466,230 L458,230 L456,184 L464,185 Z" fill="#3d2a12"/>
<!-- SPREAD A: a hundred pages back. Older paper, water-marked, complete. -->
<path d="M46,192 Q106,178 172,182 L172,66 Q106,58 46,72 Z" fill="url(#wrRetOldPg3)"/>
<path d="M172,182 Q196,181 212,184 L212,68 Q196,64 172,66 Z" fill="url(#wrRetOldPg3)" opacity="0.85"/>
<path d="M172,66 L172,182" stroke="#8a7a4c" stroke-width="2.6" opacity="0.5"/>
<!-- age: stains, and a corner gone soft -->
<ellipse cx="70" cy="164" rx="26" ry="15" fill="#9d8a58" opacity="0.28"/>
<ellipse cx="152" cy="84" rx="20" ry="11" fill="#9d8a58" opacity="0.22"/>
<path d="M46,192 Q56,186 46,180" fill="#b8a672" opacity="0.7"/>
<!-- entry heading in his hand, plus the drawing and dense marginal notes -->
<path d="M58,84 L124,81" stroke="#3a2e12" stroke-width="1.5" opacity="0.7"/>
<path d="M64,108 Q84,92 100,106 Q114,118 132,104" fill="none" stroke="#3a2e12" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="66" cy="107" r="1.2" fill="#3a2e12"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M52,94 L60,94 M52,99 L61,99 M52,104 L58,104 M52,109 L61,109 M52,114 L59,114 M52,119 L61,119"/>
  <path d="M64,128 L152,125 M64,133 L160,130 M64,138 L124,136 M64,143 L150,140 M64,148 L138,146"/>
  <path d="M182,90 L206,89 M182,96 L206,95 M182,102 L200,101 M182,108 L206,107"/>
</g>
<path d="M64,120 L152,120" stroke="#3a2e12" stroke-width="0.6" opacity="0.5"/>
<path d="M64,117 L64,123 M86,118 L86,122 M108,117 L108,123 M130,118 L130,122 M152,117 L152,123" stroke="#3a2e12" stroke-width="0.55" opacity="0.5"/>
<!-- a date, ruled off, at the foot -->
<path d="M120,168 L160,168" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M116,172 L164,172" stroke="#3a2e12" stroke-width="0.5" opacity="0.4"/>
<!-- THE FAN OF PAGES BETWEEN THE TWO SPREADS: a hundred of them, held -->
<g>
  <path d="M212,68 Q240,44 268,62" fill="none" stroke="#e0d0a0" stroke-width="1.4" opacity="0.9"/>
  <path d="M212,72 Q242,50 270,68" fill="none" stroke="#dccb9a" stroke-width="1.3" opacity="0.85"/>
  <path d="M212,76 Q244,56 272,74" fill="none" stroke="#e0d0a0" stroke-width="1.3" opacity="0.8"/>
  <path d="M212,80 Q246,62 274,80" fill="none" stroke="#d8c694" stroke-width="1.2" opacity="0.75"/>
  <path d="M212,84 Q248,68 276,86" fill="none" stroke="#e0d0a0" stroke-width="1.2" opacity="0.7"/>
  <path d="M212,88 Q248,74 278,92" fill="none" stroke="#d8c694" stroke-width="1.1" opacity="0.65"/>
  <path d="M212,92 Q250,80 280,98" fill="none" stroke="#e0d0a0" stroke-width="1.1" opacity="0.6"/>
  <path d="M212,96 Q250,86 280,104" fill="none" stroke="#d8c694" stroke-width="1" opacity="0.55"/>
  <path d="M212,100 Q250,92 280,110" fill="none" stroke="#e0d0a0" stroke-width="1" opacity="0.5"/>
  <path d="M212,104 Q248,98 278,116" fill="none" stroke="#d8c694" stroke-width="0.9" opacity="0.45"/>
  <path d="M212,108 Q246,104 276,122" fill="none" stroke="#e0d0a0" stroke-width="0.9" opacity="0.4"/>
  <path d="M212,112 Q244,110 274,128" fill="none" stroke="#d8c694" stroke-width="0.9" opacity="0.36"/>
  <path d="M212,116 Q242,116 272,134" fill="none" stroke="#e0d0a0" stroke-width="0.8" opacity="0.32"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="6s" repeatCount="indefinite"/>
</g>
<!-- SPREAD B: this week. New paper, no stains, same handwriting exactly. -->
<path d="M282,186 Q302,183 322,182 L322,68 Q302,64 282,68 Z" fill="url(#wrRetNewPg3)" opacity="0.9"/>
<path d="M322,182 Q392,178 452,192 L452,72 Q392,58 322,68 Z" fill="url(#wrRetNewPg3)"/>
<path d="M322,68 L322,182" stroke="#8a7a4c" stroke-width="2.6" opacity="0.5"/>
<!-- the SAME heading stroke, the SAME margin rhythm, the SAME rule -->
<path d="M336,80 L402,78" stroke="#3a2e12" stroke-width="1.5" opacity="0.7"/>
<path d="M342,104 Q362,88 378,102 Q392,114 410,100" fill="none" stroke="#3a2e12" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="344" cy="103" r="1.2" fill="#3a2e12"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M330,90 L338,90 M330,95 L339,95 M330,100 L336,100 M330,105 L339,105 M330,110 L337,110 M330,115 L339,115"/>
  <path d="M342,124 L430,121 M342,129 L438,126 M342,134 L402,132 M342,139 L428,136 M342,144 L416,142"/>
  <path d="M292,88 L316,87 M292,94 L316,93 M292,100 L310,99 M292,106 L316,105"/>
</g>
<path d="M342,116 L430,116" stroke="#3a2e12" stroke-width="0.6" opacity="0.5"/>
<path d="M342,113 L342,119 M364,114 L364,118 M386,113 L386,119 M408,114 L408,118 M430,113 L430,119" stroke="#3a2e12" stroke-width="0.55" opacity="0.5"/>
<path d="M398,164 L438,164" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M394,168 L442,168" stroke="#3a2e12" stroke-width="0.5" opacity="0.4"/>
<!-- the new spread is the one the lamp is on -->
<path d="M322,182 Q392,178 452,192 L452,72 Q392,58 322,68 Z" fill="#ffeaa7" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/></path>
<!-- HIS TWO GLOVED HANDS, one holding each spread flat -->
<g transform="translate(96,196)">
  <path d="M-8,-4 Q8,-22 34,-22 Q50,-20 48,-4 Q44,12 22,18 Q2,22 -8,10 Z" fill="url(#wrRetGlove3)"/>
  <path d="M-8,0 Q-26,-6 -38,2" fill="none" stroke="#40614e" stroke-width="6" stroke-linecap="round"/>
  <path d="M-6,8 Q-22,8 -32,16" fill="none" stroke="#3a5847" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M2,15 Q-10,20 -16,28" fill="none" stroke="#3a5847" stroke-width="5" stroke-linecap="round"/>
  <path d="M6,-14 Q-6,-20 -16,-16" fill="none" stroke="#3a5847" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M40,-22 L74,-42 L88,-16 L54,4 Z" fill="url(#wrRetGlove3)"/>
  <path d="M38,-24 L58,-36 L68,-14 L48,-4 Z" fill="url(#wrRetBrass3)"/>
  <path d="M4,-6 Q20,-16 38,-14" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.55"/>
</g>
<g transform="translate(408,198)">
  <path d="M8,-4 Q-8,-22 -34,-22 Q-50,-20 -48,-4 Q-44,12 -22,18 Q-2,22 8,10 Z" fill="url(#wrRetGlove3)"/>
  <path d="M8,0 Q26,-6 38,2" fill="none" stroke="#40614e" stroke-width="6" stroke-linecap="round"/>
  <path d="M6,8 Q22,8 32,16" fill="none" stroke="#3a5847" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M-2,15 Q10,20 16,28" fill="none" stroke="#3a5847" stroke-width="5" stroke-linecap="round"/>
  <path d="M-6,-14 Q6,-20 16,-16" fill="none" stroke="#3a5847" stroke-width="5.4" stroke-linecap="round"/>
  <path d="M-40,-22 L-74,-42 L-88,-16 L-54,4 Z" fill="url(#wrRetGlove3)"/>
  <path d="M-38,-24 L-58,-36 L-68,-14 L-48,-4 Z" fill="url(#wrRetBrass3)"/>
  <path d="M-4,-6 Q-20,-16 -38,-14" fill="none" stroke="#5b8069" stroke-width="0.9" opacity="0.55"/>
</g>
<!-- Motes -->
<circle cx="240" cy="40" r="1" fill="#ffeaa7" opacity="0.28"><animate attributeName="cy" values="40;24;40" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.32;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="466" cy="100" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="100;82;100" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="22" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;102;120" dur="13s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="3.5s"/></circle>
</svg>`;

// Return scene 4: Two-shot at the table. He is turned to the player, the book
// between them, and his eyes are on the player's hands, which is what both
// branches need: branch A he glances at empty hands, branch B he is turning
// the proper catcher over. The catcher is drawn on the table between them so
// the frame reads either way.
STORY_SCENES['wreck_return_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="50%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetDeck4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wrRetBrass4" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit4" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetGlass4" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
  <radialGradient id="wrRetLampG4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater4)"/>
<polygon points="160,0 190,0 210,110 182,110" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 356,0 334,116 312,116" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- Bulkhead, shelf of finished volumes, rope loop -->
<rect x="0" y="0" width="500" height="140" fill="#0d2028" opacity="0.5"/>
<rect x="330" y="60" width="112" height="5" fill="#1d3b3a"/>
<rect x="336" y="34" width="9" height="26" fill="#3d2a12"/><rect x="346" y="38" width="8" height="22" fill="#4a3418"/>
<rect x="355" y="32" width="10" height="28" fill="#33240f"/><rect x="366" y="37" width="7" height="23" fill="#4a3418"/>
<rect x="374" y="35" width="9" height="25" fill="#3d2a12"/><rect x="384" y="39" width="8" height="21" fill="#2b1f0d"/>
<rect x="393" y="33" width="10" height="27" fill="#4a3418"/><rect x="404" y="38" width="7" height="22" fill="#33240f"/>
<rect x="412" y="36" width="9" height="24" fill="#3d2a12"/><rect x="422" y="40" width="8" height="20" fill="#2b1f0d"/>
<path d="M60,26 Q40,54 58,74 Q74,90 56,106" fill="none" stroke="#2a3a2c" stroke-width="2.2" opacity="0.45"><animate attributeName="d" values="M60,26 Q40,54 58,74 Q74,90 56,106;M60,26 Q46,54 52,74 Q68,90 60,106;M60,26 Q40,54 58,74 Q74,90 56,106" dur="10s" repeatCount="indefinite"/></path>
<!-- Deck and rail -->
<path d="M0,140 L500,132 L500,178 L0,186 Z" fill="#0d2028" opacity="0.55"/>
<path d="M0,186 L500,178 L500,260 L0,260 Z" fill="url(#wrRetDeck4)"/>
<path d="M0,186 L500,178 L500,186 L0,194 Z" fill="#2c5450" opacity="0.32"/>
<path d="M0,152 L500,144" fill="none" stroke="#2c5450" stroke-width="1.8" opacity="0.65"/>
<circle cx="88" cy="152" r="26" fill="url(#wrRetLampG4)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="146" r="24" fill="url(#wrRetLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.62;0.42;0.56;0.34" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></circle>
<rect x="85" y="149" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
<rect x="449" y="143" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.82;0.94;0.74" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></rect>
<!-- THE TABLE between them, seen slightly from the side -->
<path d="M108,214 L396,208 L410,226 L96,232 Z" fill="#1d3b3a"/>
<path d="M108,214 L396,208 L397,212 L107,218 Z" fill="#2c5450" opacity="0.55"/>
<rect x="132" y="228" width="12" height="32" fill="#173537"/>
<rect x="368" y="224" width="12" height="32" fill="#173537"/>
<!-- The book, open, pushed a little to one side -->
<path d="M150,212 L318,207 L316,190 L152,196 Z" fill="#8a7a4c"/>
<path d="M152,196 L316,190 L314,186 L154,192 Z" fill="#a5945f"/>
<path d="M156,198 Q194,190 232,192 L232,158 Q194,152 156,162 Z" fill="#f0e5bc"/>
<path d="M232,192 Q272,190 310,196 L310,162 Q272,152 232,158 Z" fill="#e6d9a8"/>
<path d="M232,158 L232,192" stroke="#8a7a4c" stroke-width="2.4" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M164,172 L222,170 M164,177 L226,174 M164,182 L206,180 M244,172 L302,169 M244,177 L296,174"/>
</g>
<path d="M178,166 Q192,158 206,166" fill="none" stroke="#3a2e12" stroke-width="1.4" stroke-linecap="round"/>
<!-- THE CATCHER on the table between them: a proper one, and next to it his -->
<g transform="translate(276,204)">
  <!-- the proper catcher: neat, machined, a clean glass dome and a good clasp -->
  <ellipse cx="0" cy="0" rx="20" ry="5" fill="#5c4409"/>
  <path d="M-18,-1 Q-18,-18 0,-20 Q18,-18 18,-1 Z" fill="#7fc4b8" opacity="0.22"/>
  <path d="M-18,-1 Q-18,-18 0,-20 Q18,-18 18,-1" fill="none" stroke="#c9962e" stroke-width="1.6"/>
  <path d="M-11,-6 Q-9,-14 -2,-17" fill="none" stroke="#ffeaa7" stroke-width="1.6" opacity="0.5"><animate attributeName="opacity" values="0.28;0.66;0.28" dur="3.6s" repeatCount="indefinite"/></path>
  <rect x="-4" y="-25" width="8" height="6" rx="2" fill="url(#wrRetBrass4)"/>
  <circle cx="0" cy="-27" r="2.4" fill="none" stroke="#8b6914" stroke-width="1.2"/>
  <path d="M-20,0 L20,0" stroke="#c9962e" stroke-width="1" opacity="0.6"/>
</g>
<g transform="translate(196,208)">
  <!-- and his: wire, beads, knotted line, the dented bell. Sitting beside it. -->
  <path d="M-20,2 Q-16,-8 -5,-11 Q6,-14 15,-8 Q22,-3 20,4" fill="none" stroke="#8b6914" stroke-width="1.7" stroke-linecap="round"/>
  <path d="M-14,5 Q-5,-3 4,-6 Q13,-9 18,-4" fill="none" stroke="#7a5a18" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="-13" cy="-3" r="2.2" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.34;0.75;0.34" dur="3.4s" repeatCount="indefinite"/></circle>
  <circle cx="-1" cy="-10" r="2.6" fill="#ffeaa7" opacity="0.55"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite" begin="1.1s"/></circle>
  <circle cx="10" cy="-8" r="1.8" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.26;0.66;0.26" dur="3s" repeatCount="indefinite" begin="2.2s"/></circle>
  <path d="M-19,2 Q-9,-1 0,1 Q10,4 18,2" fill="none" stroke="#2a3a2c" stroke-width="1.2"/>
  <circle cx="0" cy="1" r="1.4" fill="#2a3a2c"/>
  <g transform="translate(20,8)">
    <path d="M-4.4,2.6 Q-4.4,-3.4 0,-4.4 Q4.4,-3.4 4.4,2.6 Z" fill="url(#wrRetBrass4)"/>
    <path d="M-4.4,2.6 Q0,4.8 4.4,2.6 L4.4,4 Q0,6 -4.4,4 Z" fill="#5c4409"/>
    <path d="M1.8,-2.6 L4,-0.4" stroke="#5c4409" stroke-width="0.9"/>
  </g>
</g>
<!-- FREDWARD, left, turned three-quarters to the player -->
<g transform="translate(178,102)">
  <animateTransform attributeName="transform" type="translate" values="178,102;178,105;178,102" dur="6.5s" repeatCount="indefinite"/>
  <path d="M-27,38 Q0,29 27,38 L24,92 Q0,99 -24,92 Z" fill="url(#wrRetSuit4)"/>
  <path d="M-24,52 Q0,44 24,52 M-25,68 Q0,60 25,68" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.5"/>
  <rect x="-12" y="40" width="24" height="12" rx="2.5" fill="url(#wrRetBrass4)"/>
  <circle cx="-5.5" cy="46" r="1.5" fill="#c9962e"/><circle cx="5.5" cy="46" r="1.5" fill="#c9962e"/>
  <ellipse cx="0" cy="33" rx="15.6" ry="5.6" fill="url(#wrRetBrass4)"/>
  <!-- helmet turned toward the player and tipped a little down: he is looking
       at their hands, not their face -->
  <g transform="rotate(12,0,12)">
    <circle cx="0" cy="12" r="21" fill="url(#wrRetBrass4)"/>
    <circle cx="0" cy="12" r="21" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <circle cx="-17.4" cy="14" r="5" fill="#5c4409"/><circle cx="-17.4" cy="14" r="3" fill="#123038" opacity="0.8"/>
    <circle cx="17.4" cy="14" r="5" fill="#5c4409"/>
    <circle cx="-10.6" cy="-2" r="1.3" fill="#c9962e"/><circle cx="0" cy="-6" r="1.3" fill="#c9962e"/><circle cx="10.6" cy="-2" r="1.3" fill="#c9962e"/>
    <circle cx="2.0" cy="13.0" r="14.0" fill="url(#wrRetGlass4)"/>
    <g opacity="0.82">
    <ellipse cx="2.0" cy="15.43" rx="7.84" ry="8.96" fill="#9c7a5e"/>
    <path d="M-5.84,13.93 Q2.0,5.91 9.84,13.93 L9.84,9.27 Q2.0,4.23 -5.84,9.27 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-4.16,11.69 Q2.0,9.08 8.16,11.69" fill="none" stroke="#5a4131" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>
    <path d="M2.0,13.37 L1.25,16.92 Q2.0,17.85 3.31,17.11" fill="none" stroke="#7a5c45" stroke-width="1.12" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="-1.17" cy="14.49" rx="1.87" ry="1.49" fill="#e8dcc4"/><ellipse cx="5.17" cy="14.49" rx="1.87" ry="1.49" fill="#e8dcc4"/><circle cx="-0.99" cy="14.68" r="1.03" fill="#2a1d12"/><circle cx="5.36" cy="14.68" r="1.03" fill="#2a1d12"/>
    <path d="M-3.23,18.97 Q-0.24,17.48 2.0,18.6 Q4.24,17.48 7.23,18.97" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="2.0" cy="13.0" r="14.0" fill="none" stroke="#8b6914" stroke-width="3.17"/>
    <circle cx="2.0" cy="13.0" r="15.31" fill="none" stroke="#c9962e" stroke-width="0.93" opacity="0.75"/>
    <circle cx="15.11" cy="18.43" r="0.93" fill="#5c4409"/><circle cx="7.43" cy="26.11" r="0.93" fill="#5c4409"/><circle cx="-3.43" cy="26.11" r="0.93" fill="#5c4409"/><circle cx="-11.11" cy="18.43" r="0.93" fill="#5c4409"/><circle cx="-11.11" cy="7.57" r="0.93" fill="#5c4409"/><circle cx="-3.43" cy="-0.11" r="0.93" fill="#5c4409"/><circle cx="7.43" cy="-0.11" r="0.93" fill="#5c4409"/><circle cx="15.11" cy="7.57" r="0.93" fill="#5c4409"/>
    <path d="M-6.77,9.83 Q-2.67,4.23 4.24,3.85" fill="none" stroke="#dff6ea" stroke-width="2.24" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="3.8s" repeatCount="indefinite"/></path>
    <circle cx="7.79" cy="7.03" r="1.59" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="3.8s" repeatCount="indefinite"/></circle>
    <path d="M-5.09,19.16 Q2.0,21.96 9.09,19.16" fill="none" stroke="#7fc4b8" stroke-width="1.31" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- one hand on the book, one gesturing at the two catchers -->
  <path d="M-26,52 Q-46,68 -46,90" fill="none" stroke="url(#wrRetSuit4)" stroke-width="10.6" stroke-linecap="round"/>
  <circle cx="-46" cy="93" r="6.4" fill="#40614e"/>
  <path d="M26,52 Q52,66 62,86" fill="none" stroke="url(#wrRetSuit4)" stroke-width="10.6" stroke-linecap="round"><animate attributeName="d" values="M26,52 Q52,66 62,86;M26,52 Q54,64 66,82;M26,52 Q52,66 62,86" dur="4.4s" repeatCount="indefinite"/></path>
  <path d="M58,84 Q74,82 82,88 Q86,94 78,98 Q66,102 58,96 Z" fill="#40614e"><animate attributeName="d" values="M58,84 Q74,82 82,88 Q86,94 78,98 Q66,102 58,96 Z;M62,80 Q78,78 86,84 Q90,90 82,94 Q70,98 62,92 Z;M58,84 Q74,82 82,88 Q86,94 78,98 Q66,102 58,96 Z" dur="4.4s" repeatCount="indefinite"/></path>
  <path d="M14,-2 Q48,-12 68,10 Q86,32 74,64" fill="none" stroke="#2a3a2c" stroke-width="2.9" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M14,-2 Q48,-12 68,10 Q86,32 74,64;M14,-2 Q52,-16 72,8 Q90,30 74,64;M14,-2 Q48,-12 68,10 Q86,32 74,64" dur="8.5s" repeatCount="indefinite"/></path>
</g>
<!-- THE PLAYER, right, across the table, hands resting on the edge -->
<g transform="translate(352,116)">
  <animateTransform attributeName="transform" type="translate" values="352,116;352,119;352,116" dur="7.5s" repeatCount="indefinite"/>
  <path d="M-21,30 Q0,23 21,30 L19,80 Q0,86 -19,80 Z" fill="#132c30"/>
  <path d="M-19,44 Q0,38 19,44" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.55"/>
  <rect x="16" y="30" width="10" height="28" rx="5" fill="#1a4a55"/>
  <rect x="18" y="33" width="3" height="21" rx="1.5" fill="#2a6a75" opacity="0.6"/>
  <!-- head, turned slightly toward him -->
  <circle cx="-2" cy="11" r="13.6" fill="#132c30"/>
  <ellipse cx="-4" cy="9" rx="9.6" ry="7.2" fill="#1a4a55" opacity="0.68"/>
  <ellipse cx="-6" cy="6.6" rx="3.4" ry="2.4" fill="#7fc4b8" opacity="0.4"/>
  <path d="M-12,18 Q-2,22 8,18" fill="none" stroke="#0a1a1e" stroke-width="1.4"/>
  <!-- both arms forward, hands on the table edge either side of the catchers -->
  <path d="M-20,44 Q-46,62 -62,80" fill="none" stroke="#132c30" stroke-width="9.6" stroke-linecap="round"/>
  <path d="M-58,78 Q-72,76 -80,82 Q-82,88 -74,92 Q-62,94 -56,88 Z" fill="#1a3a3e"/>
  <path d="M20,44 Q34,60 34,80" fill="none" stroke="#132c30" stroke-width="9.6" stroke-linecap="round"/>
  <circle cx="34" cy="83" r="6" fill="#1a3a3e"/>
  <path d="M-9,84 Q-14,94 -22,96" fill="none" stroke="#132c30" stroke-width="7" stroke-linecap="round"/>
  <path d="M9,84 Q14,94 22,96" fill="none" stroke="#132c30" stroke-width="7" stroke-linecap="round"/>
</g>
<!-- Bubbles from both, at their own rates -->
<circle cx="194" cy="86" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="86;-10" dur="5.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.42;0" dur="5.4s" repeatCount="indefinite"/></circle>
<circle cx="188" cy="80" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="80;-10" dur="7s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="2.6s"/></circle>
<circle cx="364" cy="104" r="1.5" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="104;-10" dur="6.4s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0;0.38;0" dur="6.4s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="370" cy="110" r="1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="110;-10" dur="8s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.32;0" dur="8s" repeatCount="indefinite" begin="4s"/></circle>
<!-- The crab, foreground right, on the mat, present as ever -->
<g transform="translate(452,240)">
  <path d="M-26,0 L26,0 L32,12 L-32,12 Z" fill="#5a4a22"/>
  <path d="M-26,0 L26,0 L27,3.4 L-27,3.4 Z" fill="#75612e" opacity="0.75"/>
</g>
<g transform="translate(452,236)">
  <ellipse cx="0" cy="0" rx="6.6" ry="4.4" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.3" rx="5.6" ry="2.8" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.3" cy="-3.2" r="1" fill="#0a1a1e"/><circle cx="2.3" cy="-3.2" r="1" fill="#0a1a1e"/>
  <path d="M-5.6,-1 L-10.4,-3.8 L-12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"><animate attributeName="d" values="M-5.6,-1 L-10.4,-3.8 L-12.4,-1;M-5.6,-1 L-10.4,-4.8 L-12.4,-2;M-5.6,-1 L-10.4,-3.8 L-12.4,-1" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M5.6,-1 L10.4,-3.8 L12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="266" cy="80" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="80;62;80" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="60" cy="110" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="110;92;110" dur="12.5s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="470" cy="70" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="70;52;70" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Return scene 5: Fredward at the table with one hand holding the page down,
// seen from the rope, going away. The rope is in the near foreground, he is
// small and busy at the far end of the lit deck, and the whole frame is
// already receding.
STORY_SCENES['wreck_return_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a6a70"/><stop offset="28%" stop-color="#1a4a55"/><stop offset="66%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetShaft5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.22"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wrRetHull5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wrRetSand5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <linearGradient id="wrRetBrass5" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit5" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetLampG5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.52"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.17"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater5)"/>
<!-- Surface light above, because you are already on your way up to it -->
<polygon points="150,0 196,0 214,150 178,150" fill="url(#wrRetShaft5)" opacity="0.6"><animate attributeName="opacity" values="0.34;0.7;0.34" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="320,0 362,0 336,160 302,160" fill="url(#wrRetShaft5)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.62;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="40,0 72,0 96,140 66,140" fill="url(#wrRetShaft5)" opacity="0.42"><animate attributeName="opacity" values="0.24;0.55;0.24" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- The wreck, below and behind, seen from above and off to one side -->
<path d="M0,236 Q90,226 190,230 Q300,234 400,226 Q460,222 500,230 L500,260 L0,260 Z" fill="#07141a"/>
<path d="M96,232 Q104,208 140,202 L354,190 Q394,190 402,204 L404,230 Q250,240 140,238 Q106,236 96,232 Z" fill="url(#wrRetHull5)"/>
<path d="M96,232 Q104,208 140,202 L354,190 Q394,190 402,204 L400,210 Q250,200 138,214 Q106,222 96,232 Z" fill="#25494a" opacity="0.5"/>
<path d="M108,222 Q250,198 400,204" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M172,200 L168,236" stroke="#0a1a1e" stroke-width="1.6" opacity="0.35"/>
<path d="M312,192 L314,236" stroke="#0a1a1e" stroke-width="1.6" opacity="0.3"/>
<!-- sand banked along her -->
<path d="M60,240 Q96,226 132,220 Q104,216 74,224 Q46,232 34,240 Z" fill="url(#wrRetSand5)" opacity="0.7"/>
<path d="M396,228 Q432,216 468,214 Q492,213 500,222 L500,236 Q446,232 396,236 Z" fill="url(#wrRetSand5)" opacity="0.7"/>
<!-- her toppled mast -->
<path d="M226,196 L200,150" stroke="#173537" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
<path d="M202,156 Q188,176 198,190" fill="none" stroke="#2a3a2c" stroke-width="1.4" opacity="0.45"><animate attributeName="d" values="M202,156 Q188,176 198,190;M202,156 Q192,176 194,190;M202,156 Q188,176 198,190" dur="10s" repeatCount="indefinite"/></path>
<!-- rail and the amber lamps, still lit, small now -->
<path d="M138,200 L354,188" fill="none" stroke="#2c5450" stroke-width="1.4" opacity="0.7"/>
<circle cx="164" cy="202" r="20" fill="url(#wrRetLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="230" cy="198" r="21" fill="url(#wrRetLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.46;0.62;0.4" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></circle>
<circle cx="296" cy="194" r="20" fill="url(#wrRetLampG5)" opacity="0.52"><animate attributeName="opacity" values="0.36;0.64;0.44;0.58;0.36" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="352" cy="190" r="18" fill="url(#wrRetLampG5)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3s" repeatCount="indefinite" begin="2.6s"/></circle>
<g fill="#F2C14E">
  <rect x="161.4" y="199" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="227.4" y="195" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></rect>
  <rect x="293.4" y="191" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.74;1;0.82;0.95;0.74" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></rect>
  <rect x="349.6" y="187" width="4.8" height="5.6" rx="1.3"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="3s" repeatCount="indefinite" begin="2.6s"/></rect>
</g>
<!-- THE TABLE, small, near the middle of the lit deck, with the book on it -->
<path d="M226,222 L306,218 L312,228 L220,232 Z" fill="#1d3b3a"/>
<path d="M240,218 L296,216 L296,209 L240,212 Z" fill="#8a7a4c"/>
<path d="M243,211 L266,209 L266,199 L243,202 Z" fill="#e8dcae"/>
<path d="M266,209 L292,210 L292,200 L266,199 Z" fill="#ddd0a0"/>
<g stroke="#3a2e12" stroke-width="0.4" opacity="0.4">
  <path d="M247,204 L262,203 M247,207 L263,206 M271,204 L288,203"/>
</g>
<!-- FREDWARD, small, at the table, one hand flat on the page against the
     current, already back at work and humming something with no tune in it -->
<g transform="translate(268,182)">
  <animateTransform attributeName="transform" type="translate" values="268,182;268,183.6;268,182" dur="7s" repeatCount="indefinite"/>
  <path d="M-11,15 Q0,11 11,15 L10,36 Q0,39 -10,36 Z" fill="url(#wrRetSuit5)"/>
  <rect x="-5" y="16" width="10" height="5" rx="1.2" fill="url(#wrRetBrass5)"/>
  <ellipse cx="0" cy="13" rx="6.4" ry="2.4" fill="url(#wrRetBrass5)"/>
  <!-- helmet, tipped down to the page. Too small for a face, and correctly so. -->
  <g transform="rotate(22,0,5)">
    <circle cx="0" cy="5" r="8.6" fill="url(#wrRetBrass5)"/>
    <circle cx="0" cy="5" r="8.6" fill="none" stroke="#5c4409" stroke-width="0.9"/>
    <circle cx="-7" cy="6" r="2" fill="#5c4409"/>
    <circle cx="7" cy="6" r="2" fill="#5c4409"/>
    <circle cx="0" cy="5.6" r="5.4" fill="#1c3630"/>
    <circle cx="0" cy="5.6" r="5.4" fill="none" stroke="#c9962e" stroke-width="1.3"/>
    <path d="M-3.4,2.4 Q-1.4,-0.4 1.6,0.4" fill="none" stroke="#dff6ea" stroke-width="1.2" stroke-linecap="round" opacity="0.4"><animate attributeName="opacity" values="0.22;0.5;0.22" dur="4s" repeatCount="indefinite"/></path>
  </g>
  <!-- the hand holding the page down. It does not move. -->
  <path d="M10,20 Q22,26 26,34" fill="none" stroke="url(#wrRetSuit5)" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M22,32 Q30,31 34,34 Q35,37 31,38 Q25,39 22,36 Z" fill="#40614e"/>
  <!-- drawing arm, moving in a small arc -->
  <path d="M-10,20 Q-22,28 -24,36" fill="none" stroke="url(#wrRetSuit5)" stroke-width="4.6" stroke-linecap="round"><animate attributeName="d" values="M-10,20 Q-22,28 -24,36;M-10,20 Q-21,30 -21,37;M-10,20 Q-22,28 -24,36" dur="4.8s" repeatCount="indefinite"/></path>
  <circle cx="-25" cy="37" r="2.8" fill="#40614e"><animate attributeName="cx" values="-25;-22;-25" dur="4.8s" repeatCount="indefinite"/></circle>
  <!-- air hose going off into the hull -->
  <path d="M6,-2 Q26,-6 36,8 Q46,24 40,42" fill="none" stroke="#2a3a2c" stroke-width="1.5" stroke-linecap="round" opacity="0.55"><animate attributeName="d" values="M6,-2 Q26,-6 36,8 Q46,24 40,42;M6,-2 Q28,-9 38,7 Q48,23 40,42;M6,-2 Q26,-6 36,8 Q46,24 40,42" dur="9s" repeatCount="indefinite"/></path>
</g>
<!-- his bubbles, still going, small at this distance -->
<circle cx="276" cy="172" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="172;-10" dur="7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.34;0" dur="7s" repeatCount="indefinite"/></circle>
<circle cx="271" cy="168" r="0.9" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="168;-10" dur="8.6s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0;0.3;0" dur="8.6s" repeatCount="indefinite" begin="3s"/></circle>
<!-- The crab, on the mat, seeing you off by not looking up -->
<g transform="translate(378,224)">
  <path d="M-13,0 L13,0 L16,6 L-16,6 Z" fill="#5a4a22"/>
  <path d="M-13,0 L13,0 L13.6,1.8 L-13.6,1.8 Z" fill="#75612e" opacity="0.7"/>
</g>
<g transform="translate(378,222)">
  <ellipse cx="0" cy="0" rx="3.6" ry="2.4" fill="#8f3b2e"/>
  <path d="M-3,-0.6 L-5.6,-2 L-6.8,-0.6" fill="none" stroke="#8f3b2e" stroke-width="1" stroke-linecap="round"/>
  <path d="M3,-0.6 L5.6,-2 L6.8,-0.6" fill="none" stroke="#8f3b2e" stroke-width="1" stroke-linecap="round"/>
</g>
<!-- THE ROPE, near foreground, running up out of frame. You are on it. -->
<path d="M92,260 Q78,196 96,132 Q112,76 88,0" fill="none" stroke="#2a3a2c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M92,260 Q78,196 96,132 Q112,76 88,0;M92,260 Q86,196 88,132 Q104,76 96,0;M92,260 Q78,196 96,132 Q112,76 88,0" dur="9s" repeatCount="indefinite"/></path>
<path d="M92,260 Q78,196 96,132 Q112,76 88,0" fill="none" stroke="#5c6b4a" stroke-width="1.6" opacity="0.45"><animate attributeName="d" values="M92,260 Q78,196 96,132 Q112,76 88,0;M92,260 Q86,196 88,132 Q104,76 96,0;M92,260 Q78,196 96,132 Q112,76 88,0" dur="9s" repeatCount="indefinite"/></path>
<!-- the twist of the rope's lay, close enough to see -->
<g stroke="#1e2a20" stroke-width="1" opacity="0.6">
  <path d="M89,232 L95,228 M91,206 L97,202 M93,180 L98,176 M95,154 L100,150 M97,128 L103,124 M100,102 L106,98 M101,76 L107,72 M99,50 L105,46 M95,24 L101,20"/>
</g>
<!-- your gloved hand on the rope, closest thing to camera -->
<g transform="translate(94,196)">
  <animateTransform attributeName="transform" type="translate" values="94,200;94,188;94,200" dur="9s" repeatCount="indefinite"/>
  <path d="M-16,10 Q-20,-6 -6,-14 Q10,-20 20,-10 Q26,0 18,10 Q4,20 -16,10 Z" fill="#1a3a3e"/>
  <path d="M-14,-4 Q-22,-8 -26,-2" fill="none" stroke="#1a3a3e" stroke-width="7" stroke-linecap="round"/>
  <path d="M-15,4 Q-25,4 -29,10" fill="none" stroke="#16323a" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M-10,12 Q-18,18 -20,26" fill="none" stroke="#16323a" stroke-width="6" stroke-linecap="round"/>
  <path d="M-4,-14 Q-12,-20 -20,-18" fill="none" stroke="#16323a" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M-6,-2 Q4,-8 16,-6" fill="none" stroke="#2a6a75" stroke-width="1" opacity="0.5"/>
  <path d="M14,-16 Q24,-20 32,-14" fill="none" stroke="#132c30" stroke-width="14" stroke-linecap="round"/>
</g>
<!-- Bubbles going up past you the way you are going -->
<circle cx="112" cy="180" r="2.4" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="180;-12" dur="4.8s" repeatCount="indefinite"/><animate attributeName="r" values="1.8;3.6" dur="4.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="4.8s" repeatCount="indefinite"/></circle>
<circle cx="104" cy="196" r="1.7" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="196;-12" dur="6.2s" repeatCount="indefinite" begin="1.6s"/><animate attributeName="r" values="1.3;2.8" dur="6.2s" repeatCount="indefinite" begin="1.6s"/><animate attributeName="opacity" values="0;0.44;0" dur="6.2s" repeatCount="indefinite" begin="1.6s"/></circle>
<circle cx="118" cy="206" r="1.3" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="206;-12" dur="7.4s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.38;0" dur="7.4s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- Motes -->
<circle cx="330" cy="110" r="1" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="110;90;110" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="446" cy="70" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="70;50;70" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="220" cy="60" r="0.9" fill="#dff6ea" opacity="0.24"><animate attributeName="cy" values="60;40;60" dur="11s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="5.5s" repeatCount="indefinite" begin="3.5s"/></circle>
<circle cx="30" cy="150" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="150;130;150" dur="15s" repeatCount="indefinite" begin="5s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7.5s" repeatCount="indefinite" begin="5s"/></circle>
</svg>`;
