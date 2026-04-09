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
<!-- Descending stone steps -->
<g fill="#3a2a20" stroke="#2a1a10" stroke-width="0.5">
  <rect x="150" y="200" width="200" height="12" rx="2"/>
  <rect x="160" y="215" width="180" height="12" rx="2"/>
  <rect x="170" y="230" width="160" height="12" rx="2"/>
  <rect x="180" y="245" width="140" height="15" rx="2"/>
</g>
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
  <filter id="lairFireGlow1"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<rect width="500" height="260" fill="url(#lairChamber)"/>
<!-- Cavern walls -->
<path d="M0,0 Q20,30 10,70 Q25,100 15,140 Q30,170 20,200 Q10,230 0,260 Z" fill="#2a1814"/>
<path d="M500,0 Q480,30 490,70 Q475,100 485,140 Q470,170 480,200 Q490,230 500,260 Z" fill="#2a1814"/>
<!-- Stalactites -->
<path d="M80,0 L85,30 L90,0" fill="#2a1814"/><path d="M180,0 L184,25 L188,0" fill="#2a1814"/>
<path d="M300,0 L305,35 L310,0" fill="#2a1814"/><path d="M420,0 L424,28 L428,0" fill="#2a1814"/>
<!-- Hoard: piles of scrolls -->
<g opacity="0.7">
  <ellipse cx="100" cy="235" rx="50" ry="18" fill="#3a2a18"/>
  <rect x="70" y="220" width="14" height="20" rx="2" fill="#d4c090" opacity="0.6" transform="rotate(-15,77,230)"/>
  <rect x="90" y="218" width="12" height="18" rx="2" fill="#c8b880" opacity="0.5" transform="rotate(10,96,227)"/>
  <rect x="110" y="222" width="14" height="16" rx="2" fill="#d4c090" opacity="0.55" transform="rotate(-5,117,230)"/>
  <ellipse cx="400" cy="235" rx="45" ry="16" fill="#3a2a18"/>
  <rect x="375" y="222" width="12" height="18" rx="2" fill="#d4c090" opacity="0.6" transform="rotate(12,381,231)"/>
  <rect x="395" y="220" width="14" height="16" rx="2" fill="#c8b880" opacity="0.55" transform="rotate(-8,402,228)"/>
  <rect x="415" y="224" width="10" height="14" rx="2" fill="#d4c090" opacity="0.5" transform="rotate(15,420,231)"/>
</g>
<!-- Dragon glow aura -->
<circle cx="250" cy="140" r="80" fill="url(#lairDrGlow)"/>
<!-- Dragon body -->
<ellipse cx="250" cy="180" rx="70" ry="50" fill="#1a0808" opacity="0.9"/>
<!-- Dragon head -->
<ellipse cx="250" cy="120" rx="40" ry="30" fill="#1a0808" opacity="0.9"/>
<!-- Horns -->
<path d="M220,100 Q210,75 205,60" fill="none" stroke="#2a1212" stroke-width="6" stroke-linecap="round"/>
<path d="M280,100 Q290,75 295,60" fill="none" stroke="#2a1212" stroke-width="6" stroke-linecap="round"/>
<!-- Snout -->
<ellipse cx="250" cy="140" rx="25" ry="12" fill="#1a0808"/>
<!-- Glowing red eyes -->
<ellipse cx="235" cy="115" rx="8" ry="6" fill="#ff2200" opacity="0.9">
  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="265" cy="115" rx="8" ry="6" fill="#ff2200" opacity="0.9">
  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="0.5s"/>
</ellipse>
<!-- Eye slit pupils -->
<ellipse cx="235" cy="115" rx="3" ry="6" fill="#ffaa00" opacity="0.6"/>
<ellipse cx="265" cy="115" rx="3" ry="6" fill="#ffaa00" opacity="0.6"/>
<!-- Nostrils with smoke -->
<circle cx="242" cy="138" r="3" fill="#ff2200" opacity="0.3"/>
<circle cx="258" cy="138" r="3" fill="#ff2200" opacity="0.3"/>
<circle cx="242" cy="130" r="3" fill="#444" opacity="0.2">
  <animate attributeName="cy" values="130;115;100" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="4s" repeatCount="indefinite"/>
</circle>
<circle cx="258" cy="130" r="3" fill="#444" opacity="0.2">
  <animate attributeName="cy" values="130;112;94" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
  <animate attributeName="opacity" values="0.2;0.1;0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
</circle>
<!-- Wings folded -->
<path d="M180,150 Q140,120 120,160 Q150,180 180,170" fill="#120808" opacity="0.7"/>
<path d="M320,150 Q360,120 380,160 Q350,180 320,170" fill="#120808" opacity="0.7"/>
<!-- Cryptic clue carvings on walls -->
<text x="30" y="50" fill="#ff4422" font-family="monospace" font-size="6" opacity="0.3" transform="rotate(-5,30,50)">8 down</text>
<text x="25" y="90" fill="#ff6644" font-family="monospace" font-size="5" opacity="0.25" transform="rotate(-8,25,90)">(5,4)</text>
<text x="455" y="55" fill="#ff4422" font-family="monospace" font-size="6" opacity="0.3" transform="rotate(5,455,55)">3 across</text>
<text x="460" y="100" fill="#ff6644" font-family="monospace" font-size="5" opacity="0.25" transform="rotate(8,460,100)">ANAG.</text>
<!-- Torches -->
<rect x="50" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="52" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="8;10;7;9;8" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="52" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="5;7;4;6;5" dur="1.5s" repeatCount="indefinite"/>
</ellipse>
<rect x="446" y="100" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="448" cy="98" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="7;9;8;10;7" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="448" cy="95" rx="3" ry="5" fill="#ffaa44" opacity="0.5">
  <animate attributeName="ry" values="4;6;5;7;4" dur="1.7s" repeatCount="indefinite"/>
</ellipse>
<!-- Floor -->
<rect x="0" y="245" width="500" height="15" fill="#1a0a08"/>
</svg>`;

// Scene 2: Dragon speaks, challenges the solver — reuse dragon chamber scene
STORY_SCENES['lair_2'] = STORY_SCENES['lair_1'];

// Scene 3: Puzzle — "Treasure hidden in each estimate (5)" on scorched scroll
STORY_SCENES['lair_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow1" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.08"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll1)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow1)"/>
<!-- Scorched scroll unfurled -->
<rect x="80" y="40" width="340" height="180" rx="8" fill="#d4c090" opacity="0.9"/>
<rect x="85" y="45" width="330" height="170" rx="6" fill="#e8d8b0" opacity="0.85"/>
<!-- Burned edges -->
<path d="M80,40 Q85,45 82,55 Q88,65 84,75 Q90,85 86,95" fill="#8a6030" opacity="0.4"/>
<path d="M420,40 Q415,48 418,58 Q412,68 416,78 Q410,88 414,98" fill="#8a6030" opacity="0.4"/>
<path d="M80,220 Q86,215 83,205 Q89,195 85,185" fill="#8a6030" opacity="0.35"/>
<path d="M420,220 Q414,215 417,205 Q411,195 415,185" fill="#8a6030" opacity="0.35"/>
<!-- Scorch marks on scroll -->
<circle cx="120" cy="70" r="12" fill="#6a4a20" opacity="0.15"/>
<circle cx="380" cy="190" r="10" fill="#6a4a20" opacity="0.12"/>
<circle cx="350" cy="60" r="8" fill="#6a4a20" opacity="0.1"/>
<!-- Scroll rollers -->
<rect x="72" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<rect x="420" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<!-- Header -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S FIRST CLUE</text>
<line x1="140" y1="92" x2="360" y2="92" stroke="#2a1a10" stroke-width="0.5" opacity="0.3"/>
<!-- Clue text -->
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"Treasure hidden in</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">each estimate (5)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>
<!-- Dragon eyes watching from darkness -->
<ellipse cx="55" cy="130" rx="5" ry="3.5" fill="#ff2200" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="445" cy="130" rx="5" ry="3.5" fill="#ff2200" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>
</ellipse>
<!-- Ember particles -->
<circle cx="40" cy="200" r="1.5" fill="#ff6622" opacity="0.4">
  <animate attributeName="cy" values="200;170;140" dur="5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.4;0.2;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="460" cy="210" r="1.5" fill="#ff6622" opacity="0.35">
  <animate attributeName="cy" values="210;175;140" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
</circle>
</svg>`;

// Scene 4: Dragon responds, impressed — reuse dragon chamber scene
STORY_SCENES['lair_4'] = STORY_SCENES['lair_1'];

// Scene 5: Puzzle — "This beast makes proceedings drag on (6)" on scorched scroll
STORY_SCENES['lair_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow2" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.1"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll2)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow2)"/>
<!-- Scorched scroll -->
<rect x="80" y="40" width="340" height="180" rx="8" fill="#d4c090" opacity="0.9"/>
<rect x="85" y="45" width="330" height="170" rx="6" fill="#e8d8b0" opacity="0.85"/>
<!-- Burned edges -->
<path d="M80,40 Q85,45 82,55 Q88,65 84,75 Q90,85 86,95" fill="#8a6030" opacity="0.4"/>
<path d="M420,40 Q415,48 418,58 Q412,68 416,78 Q410,88 414,98" fill="#8a6030" opacity="0.4"/>
<path d="M80,220 Q86,215 83,205 Q89,195 85,185" fill="#8a6030" opacity="0.35"/>
<path d="M420,220 Q414,215 417,205 Q411,195 415,185" fill="#8a6030" opacity="0.35"/>
<!-- Deeper scorch marks — dragon getting more intense -->
<circle cx="110" cy="60" r="14" fill="#6a4a20" opacity="0.18"/>
<circle cx="390" cy="200" r="12" fill="#6a4a20" opacity="0.15"/>
<circle cx="140" cy="200" r="9" fill="#6a4a20" opacity="0.12"/>
<!-- Scroll rollers -->
<rect x="72" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<rect x="420" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<!-- Header -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S SECOND CLUE</text>
<line x1="140" y1="92" x2="360" y2="92" stroke="#2a1a10" stroke-width="0.5" opacity="0.3"/>
<!-- Clue text -->
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"This beast makes proceedings</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">drag on (6)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the clue to proceed</text>
<!-- Dragon eyes — closer, brighter -->
<ellipse cx="50" cy="125" rx="6" ry="4" fill="#ff2200" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="450" cy="125" rx="6" ry="4" fill="#ff2200" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
</ellipse>
<!-- Claw scratches on floor beneath scroll -->
<g stroke="#3a1a10" stroke-width="1.5" stroke-linecap="round" opacity="0.3">
  <line x1="180" y1="235" x2="200" y2="250"/><line x1="190" y1="235" x2="210" y2="250"/><line x1="200" y1="235" x2="220" y2="250"/>
  <line x1="290" y1="235" x2="310" y2="250"/><line x1="300" y1="235" x2="320" y2="250"/><line x1="310" y1="235" x2="330" y2="250"/>
</g>
<!-- Ember particles -->
<circle cx="35" cy="190" r="1.5" fill="#ff6622" opacity="0.45">
  <animate attributeName="cy" values="190;155;120" dur="4.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.45;0.2;0" dur="4.5s" repeatCount="indefinite"/>
</circle>
<circle cx="465" cy="200" r="2" fill="#ff4422" opacity="0.4">
  <animate attributeName="cy" values="200;160;120" dur="5s" repeatCount="indefinite" begin="1s"/>
  <animate attributeName="opacity" values="0.4;0.15;0" dur="5s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="250" cy="250" r="1.5" fill="#ff8844" opacity="0.3">
  <animate attributeName="cy" values="250;215;180" dur="6s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="opacity" values="0.3;0.1;0" dur="6s" repeatCount="indefinite" begin="2s"/>
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
</defs>
<rect width="500" height="260" fill="url(#lairRise)"/>
<!-- Cavern walls -->
<path d="M0,0 Q20,30 10,70 Q25,100 15,140 Q30,170 20,200 Q10,230 0,260 Z" fill="#2a1814"/>
<path d="M500,0 Q480,30 490,70 Q475,100 485,140 Q470,170 480,200 Q490,230 500,260 Z" fill="#2a1814"/>
<!-- Stalactites -->
<path d="M80,0 L85,30 L90,0" fill="#2a1814"/><path d="M180,0 L184,25 L188,0" fill="#2a1814"/>
<path d="M300,0 L305,35 L310,0" fill="#2a1814"/><path d="M420,0 L424,28 L428,0" fill="#2a1814"/>
<!-- Dragon aura — intensified -->
<circle cx="250" cy="120" r="100" fill="url(#lairDrGlow6)"/>
<!-- Dragon body — risen, taller pose -->
<ellipse cx="250" cy="170" rx="65" ry="55" fill="#1a0808" opacity="0.9"/>
<!-- Dragon head — raised higher -->
<ellipse cx="250" cy="100" rx="38" ry="28" fill="#1a0808" opacity="0.9"/>
<!-- Horns -->
<path d="M218,82 Q205,55 200,38" fill="none" stroke="#2a1212" stroke-width="6" stroke-linecap="round"/>
<path d="M282,82 Q295,55 300,38" fill="none" stroke="#2a1212" stroke-width="6" stroke-linecap="round"/>
<!-- Snout -->
<ellipse cx="250" cy="120" rx="24" ry="11" fill="#1a0808"/>
<!-- Glowing red eyes — intense -->
<ellipse cx="236" cy="96" rx="8" ry="6" fill="#ff2200" opacity="0.95">
  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="264" cy="96" rx="8" ry="6" fill="#ff2200" opacity="0.95">
  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s"/>
</ellipse>
<ellipse cx="236" cy="96" rx="3" ry="6" fill="#ffaa00" opacity="0.7"/>
<ellipse cx="264" cy="96" rx="3" ry="6" fill="#ffaa00" opacity="0.7"/>
<!-- Nostrils with fire glow -->
<circle cx="242" cy="118" r="3" fill="#ff4400" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
</circle>
<circle cx="258" cy="118" r="3" fill="#ff4400" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
</circle>
<!-- Wings — spread wide -->
<path d="M185,130 Q120,80 60,110 Q80,140 100,150 Q130,145 160,155 Q175,145 185,140" fill="#120808" opacity="0.8"/>
<path d="M315,130 Q380,80 440,110 Q420,140 400,150 Q370,145 340,155 Q325,145 315,140" fill="#120808" opacity="0.8"/>
<!-- Wing membrane detail -->
<line x1="185" y1="130" x2="80" y2="105" stroke="#2a1010" stroke-width="1" opacity="0.3"/>
<line x1="185" y1="135" x2="110" y2="135" stroke="#2a1010" stroke-width="1" opacity="0.3"/>
<line x1="315" y1="130" x2="420" y2="105" stroke="#2a1010" stroke-width="1" opacity="0.3"/>
<line x1="315" y1="135" x2="390" y2="135" stroke="#2a1010" stroke-width="1" opacity="0.3"/>
<!-- Fire breath line searing across wall -->
<line x1="260" y1="118" x2="440" y2="50" stroke="#ff4400" stroke-width="3" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="260" y1="118" x2="440" y2="50" stroke="#ffaa44" stroke-width="1.5" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite"/>
</line>
<!-- Torches -->
<rect x="30" y="150" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="32" cy="148" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="8;11;7;9;8" dur="1.8s" repeatCount="indefinite"/>
</ellipse>
<rect x="466" y="150" width="4" height="20" fill="#6a4a20"/>
<ellipse cx="468" cy="148" rx="6" ry="8" fill="#ff6622" opacity="0.7">
  <animate attributeName="ry" values="7;10;8;11;7" dur="2s" repeatCount="indefinite"/>
</ellipse>
<!-- Lava glow at floor -->
<ellipse cx="250" cy="258" rx="200" ry="20" fill="#ff2200" opacity="0.06">
  <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite"/>
</ellipse>
<!-- Floor -->
<rect x="0" y="245" width="500" height="15" fill="#1a0a08"/>
</svg>`;

// Scene 7: Puzzle — "Fun race, oddly, leads to the source of heat (7)" on scorched scroll
STORY_SCENES['lair_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lairScroll3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a0808"/><stop offset="100%" stop-color="#0a0404"/>
  </linearGradient>
  <radialGradient id="lairScrGlow3" cx="50%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#ff4422" stop-opacity="0.12"/><stop offset="100%" stop-color="#ff4422" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#lairScroll3)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairScrGlow3)"/>
<!-- Scorched scroll — most burned of the three -->
<rect x="80" y="40" width="340" height="180" rx="8" fill="#d4c090" opacity="0.85"/>
<rect x="85" y="45" width="330" height="170" rx="6" fill="#e8d8b0" opacity="0.8"/>
<!-- Heavy burn marks -->
<path d="M80,40 Q87,50 82,60 Q90,72 84,82 Q92,95 86,105" fill="#6a4020" opacity="0.45"/>
<path d="M420,40 Q413,52 418,62 Q410,74 416,84 Q408,96 414,106" fill="#6a4020" opacity="0.45"/>
<path d="M80,220 Q88,210 83,198 Q91,188 85,178" fill="#6a4020" opacity="0.4"/>
<path d="M420,220 Q412,210 417,198 Q409,188 415,178" fill="#6a4020" opacity="0.4"/>
<!-- Scorch marks — fire-seared -->
<circle cx="115" cy="55" r="16" fill="#5a3a18" opacity="0.2"/>
<circle cx="385" cy="65" r="13" fill="#5a3a18" opacity="0.18"/>
<circle cx="130" cy="195" r="11" fill="#5a3a18" opacity="0.15"/>
<circle cx="370" cy="195" r="14" fill="#5a3a18" opacity="0.17"/>
<!-- Scroll rollers -->
<rect x="72" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<rect x="420" y="38" width="8" height="186" rx="4" fill="#6a4a20"/>
<!-- Header -->
<text x="250" y="85" text-anchor="middle" fill="#2a1a10" font-family="serif" font-size="10" opacity="0.6">THE DRAGON'S FINAL CLUE</text>
<line x1="140" y1="92" x2="360" y2="92" stroke="#2a1a10" stroke-width="0.5" opacity="0.3"/>
<!-- Clue text -->
<text x="250" y="130" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">"Fun race, oddly, leads to</text>
<text x="250" y="155" text-anchor="middle" fill="#8a2010" font-family="serif" font-size="14" font-weight="bold">the source of heat (7)"</text>
<text x="250" y="195" text-anchor="middle" fill="#4a3020" font-family="sans-serif" font-size="8" opacity="0.5">Solve the final clue</text>
<!-- Dragon eyes — very close, flanking the scroll -->
<ellipse cx="45" cy="120" rx="7" ry="5" fill="#ff2200" opacity="0.6">
  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="455" cy="120" rx="7" ry="5" fill="#ff2200" opacity="0.6">
  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin="0.6s"/>
</ellipse>
<!-- Second set of eyes (hint of dragon size) -->
<ellipse cx="30" cy="120" rx="5" ry="3.5" fill="#ff2200" opacity="0.35">
  <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="470" cy="120" rx="5" ry="3.5" fill="#ff2200" opacity="0.35">
  <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite" begin="0.6s"/>
</ellipse>
<!-- Hot embers rising around scroll -->
<circle cx="75" cy="230" r="2" fill="#ff6622" opacity="0.5">
  <animate attributeName="cy" values="230;180;130" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.25;0" dur="4s" repeatCount="indefinite"/>
</circle>
<circle cx="425" cy="235" r="2" fill="#ff4422" opacity="0.45">
  <animate attributeName="cy" values="235;185;135" dur="4.5s" repeatCount="indefinite" begin="0.8s"/>
  <animate attributeName="opacity" values="0.45;0.2;0" dur="4.5s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<circle cx="250" cy="240" r="1.5" fill="#ff8844" opacity="0.35">
  <animate attributeName="cy" values="240;200;160" dur="5s" repeatCount="indefinite" begin="1.5s"/>
  <animate attributeName="opacity" values="0.35;0.15;0" dur="5s" repeatCount="indefinite" begin="1.5s"/>
</circle>
<circle cx="150" cy="245" r="1.5" fill="#ff6622" opacity="0.3">
  <animate attributeName="cy" values="245;205;165" dur="5.5s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="opacity" values="0.3;0.1;0" dur="5.5s" repeatCount="indefinite" begin="2s"/>
</circle>
<circle cx="350" cy="248" r="2" fill="#ff4422" opacity="0.4">
  <animate attributeName="cy" values="248;195;145" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
  <animate attributeName="opacity" values="0.4;0.15;0" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
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
</defs>
<rect width="500" height="260" fill="url(#lairVictory)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lairWarmGlow)"/>
<!-- Cave walls -->
<path d="M0,0 Q15,40 8,80 Q20,120 12,160 Q25,200 15,240 L0,260 Z" fill="#2a1814"/>
<path d="M500,0 Q485,40 492,80 Q480,120 488,160 Q475,200 485,240 L500,260 Z" fill="#2a1814"/>
<!-- Exit opening (right side, warm light spilling in) -->
<ellipse cx="450" cy="140" rx="30" ry="55" fill="#1a0c08"/>
<ellipse cx="450" cy="140" rx="25" ry="48" fill="#ffddaa" opacity="0.15">
  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite"/>
</ellipse>
<rect x="0" y="0" width="500" height="260" fill="url(#lairExitLight)"/>
<!-- Hoard glowing warm -->
<ellipse cx="250" cy="215" rx="180" ry="35" fill="#3a2818"/>
<!-- Scrolls scattered across the hoard -->
<g opacity="0.8">
  <rect x="100" y="200" width="16" height="22" rx="2" fill="#d4c090" transform="rotate(-10,108,211)"/>
  <rect x="140" y="197" width="14" height="20" rx="2" fill="#c8b880" transform="rotate(8,147,207)"/>
  <rect x="180" y="203" width="16" height="18" rx="2" fill="#d4c090" transform="rotate(-5,188,212)"/>
  <rect x="230" y="199" width="18" height="20" rx="2" fill="#e0d0a0" transform="rotate(12,239,209)"/>
  <rect x="280" y="201" width="14" height="18" rx="2" fill="#c8b880" transform="rotate(-8,287,210)"/>
  <rect x="320" y="197" width="16" height="22" rx="2" fill="#d4c090" transform="rotate(6,328,208)"/>
  <rect x="360" y="203" width="14" height="18" rx="2" fill="#c8b880" transform="rotate(-12,367,212)"/>
</g>
<!-- Dragon — settled, head bowed -->
<ellipse cx="220" cy="150" rx="60" ry="45" fill="#1a0808" opacity="0.7"/>
<!-- Dragon head — lowered in bow -->
<ellipse cx="200" cy="175" rx="30" ry="20" fill="#1a0808" opacity="0.7"/>
<!-- Horns -->
<path d="M178,165 Q165,145 162,130" fill="none" stroke="#2a1212" stroke-width="5" stroke-linecap="round"/>
<path d="M215,162 Q220,140 225,128" fill="none" stroke="#2a1212" stroke-width="5" stroke-linecap="round"/>
<!-- Eyes — warm amber now, not threatening red -->
<ellipse cx="190" cy="172" rx="5" ry="4" fill="#ffaa44" opacity="0.6">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="210" cy="170" rx="5" ry="4" fill="#ffaa44" opacity="0.6">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" begin="0.5s"/>
</ellipse>
<!-- Wings — folded at rest -->
<path d="M165,130 Q130,110 115,140 Q135,155 160,145" fill="#120808" opacity="0.5"/>
<path d="M275,135 Q310,115 320,145 Q300,155 275,148" fill="#120808" opacity="0.5"/>
<!-- Golden particles floating upward -->
<circle cx="150" cy="100" r="2" fill="#ffd700" opacity="0.4">
  <animate attributeName="cy" values="100;80;60" dur="5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.4;0.6;0" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="85" r="2.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="85;60;35" dur="6s" repeatCount="indefinite" begin="1s"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="6s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="350" cy="95" r="2" fill="#ffd700" opacity="0.35">
  <animate attributeName="cy" values="95;70;45" dur="4.5s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="opacity" values="0.35;0.55;0" dur="4.5s" repeatCount="indefinite" begin="2s"/>
</circle>
<circle cx="200" cy="110" r="1.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="110;85;60" dur="5.5s" repeatCount="indefinite" begin="0.5s"/>
  <animate attributeName="opacity" values="0.3;0.5;0" dur="5.5s" repeatCount="indefinite" begin="0.5s"/>
</circle>
<circle cx="300" cy="105" r="2" fill="#ffcc00" opacity="0.25">
  <animate attributeName="cy" values="105;78;50" dur="6.5s" repeatCount="indefinite" begin="1.5s"/>
  <animate attributeName="opacity" values="0.25;0.45;0" dur="6.5s" repeatCount="indefinite" begin="1.5s"/>
</circle>
<!-- LIAM'S LAIR title glow -->
<text x="250" y="35" text-anchor="middle" fill="#ffd700" font-family="serif" font-size="16" font-weight="bold" opacity="0.6">LIAM'S LAIR</text>
</svg>`;
