// Adventure Tower story scenes — "Adventure Tower"
// Keys: adventure_0 through adventure_5
// DRAFT — for review only

// Scene 0: Tower looming against dark sky, glowing runes on stone walls
STORY_SCENES['adventure_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="advSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="50%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="runeGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="advSoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="towerStone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#5a5a6a"/><stop offset="50%" stop-color="#4a4a5a"/><stop offset="100%" stop-color="#3a3a4a"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#advSky)"/>
<!-- Stars -->
<circle cx="60" cy="25" r="1" fill="#fff" opacity="0.4"/>
<circle cx="140" cy="40" r="1.2" fill="#fff" opacity="0.35"/>
<circle cx="420" cy="18" r="1" fill="#fff" opacity="0.5"/>
<circle cx="380" cy="50" r="0.8" fill="#fff" opacity="0.3"/>
<circle cx="470" cy="35" r="1.1" fill="#fff" opacity="0.45"/>
<circle cx="30" cy="55" r="0.9" fill="#fff" opacity="0.3"/>
<!-- Distant hills -->
<ellipse cx="120" cy="220" rx="140" ry="50" fill="#3a2a5a" opacity="0.4"/>
<ellipse cx="400" cy="225" rx="130" ry="45" fill="#3a2a5a" opacity="0.35"/>
<!-- Tower body -->
<rect x="195" y="30" width="110" height="200" fill="url(#towerStone)" rx="3"/>
<!-- Tower stone lines -->
<line x1="195" y1="60" x2="305" y2="60" stroke="#3a3a4a" stroke-width="0.8" opacity="0.5"/>
<line x1="195" y1="90" x2="305" y2="90" stroke="#3a3a4a" stroke-width="0.8" opacity="0.5"/>
<line x1="195" y1="120" x2="305" y2="120" stroke="#3a3a4a" stroke-width="0.8" opacity="0.5"/>
<line x1="195" y1="150" x2="305" y2="150" stroke="#3a3a4a" stroke-width="0.8" opacity="0.5"/>
<line x1="195" y1="180" x2="305" y2="180" stroke="#3a3a4a" stroke-width="0.8" opacity="0.5"/>
<line x1="250" y1="30" x2="250" y2="230" stroke="#3a3a4a" stroke-width="0.5" opacity="0.3"/>
<!-- Tower battlements -->
<rect x="190" y="22" width="18" height="14" fill="#4a4a5a"/>
<rect x="218" y="22" width="18" height="14" fill="#4a4a5a"/>
<rect x="246" y="22" width="18" height="14" fill="#4a4a5a"/>
<rect x="274" y="22" width="18" height="14" fill="#4a4a5a"/>
<rect x="298" y="22" width="12" height="14" fill="#4a4a5a"/>
<!-- Tower entrance arch -->
<path d="M230,230 L230,195 Q250,178 270,195 L270,230 Z" fill="#1a1030"/>
<path d="M232,230 L232,197 Q250,182 268,197 L268,230 Z" fill="#0d0820"/>
<!-- Glowing runes on walls — pulsing -->
<text x="210" y="75" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>&#x2727;</text>
<text x="280" y="75" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>&#x2726;</text>
<text x="215" y="108" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>&#x2740;</text>
<text x="275" y="110" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" begin="0.3s"/>&#x2721;</text>
<text x="208" y="142" fill="#ffd700" font-size="11" opacity="0.65" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>&#x2738;</text>
<text x="282" y="145" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.35;0.8;0.35" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>&#x2727;</text>
<text x="220" y="172" fill="#ffd700" font-size="10" opacity="0.55" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.3;0.75;0.3" dur="4.2s" repeatCount="indefinite" begin="2s"/>&#x2726;</text>
<text x="270" y="175" fill="#ffd700" font-size="11" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3s" repeatCount="indefinite" begin="1.2s"/>&#x2740;</text>
<!-- Rune glow halos -->
<circle cx="215" cy="72" r="8" fill="url(#runeGlow)" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="285" cy="72" r="8" fill="url(#runeGlow)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="220" cy="105" r="7" fill="url(#runeGlow)" opacity="0.25"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="280" cy="107" r="7" fill="url(#runeGlow)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.8s" repeatCount="indefinite" begin="0.3s"/></circle>
<!-- Ground -->
<rect x="0" y="230" width="500" height="30" fill="#3a2a4a" opacity="0.6"/>
<ellipse cx="250" cy="232" rx="260" ry="12" fill="#4a3a5a" opacity="0.4"/>
<!-- Ground stones -->
<ellipse cx="130" cy="245" rx="15" ry="5" fill="#4a4a5a" opacity="0.3"/>
<ellipse cx="370" cy="242" rx="12" ry="4" fill="#4a4a5a" opacity="0.25"/>
<!-- Mist at base -->
<ellipse cx="250" cy="235" rx="80" ry="10" fill="#6a5a8a" opacity="0.08"/>
<ellipse cx="200" cy="240" rx="60" ry="8" fill="#8a7aaa" opacity="0.05"/>
</svg>`;

// Scene 1: Spectral guardian at entrance, glowing symbols on armor
STORY_SCENES['adventure_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv1Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="60%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#3a2a5a"/>
  </linearGradient>
  <radialGradient id="guardianGlow" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#8a7aff" stop-opacity="0.15"/><stop offset="100%" stop-color="#8a7aff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="runeGlow1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="spectralShimmer">
    <feGaussianBlur stdDeviation="1.5" result="blur"/>
    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
  </filter>
  <filter id="advGlow1"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv1Bg)"/>
<!-- Tower wall backdrop -->
<rect x="0" y="0" width="500" height="260" fill="#3a3a4a" opacity="0.3"/>
<rect x="80" y="0" width="340" height="260" fill="#4a4a5a" opacity="0.4"/>
<!-- Stone texture lines -->
<line x1="80" y1="50" x2="420" y2="50" stroke="#3a3a4a" stroke-width="0.6" opacity="0.4"/>
<line x1="80" y1="100" x2="420" y2="100" stroke="#3a3a4a" stroke-width="0.6" opacity="0.4"/>
<line x1="80" y1="150" x2="420" y2="150" stroke="#3a3a4a" stroke-width="0.6" opacity="0.4"/>
<line x1="80" y1="200" x2="420" y2="200" stroke="#3a3a4a" stroke-width="0.6" opacity="0.4"/>
<line x1="200" y1="0" x2="200" y2="260" stroke="#3a3a4a" stroke-width="0.4" opacity="0.25"/>
<line x1="300" y1="0" x2="300" y2="260" stroke="#3a3a4a" stroke-width="0.4" opacity="0.25"/>
<!-- Entrance arch behind guardian -->
<path d="M160,260 L160,120 Q250,60 340,120 L340,260 Z" fill="#0d0820" opacity="0.6"/>
<path d="M165,260 L165,125 Q250,68 335,125 L335,260 Z" fill="#0a0618" opacity="0.7"/>
<!-- Spectral guardian - 7ft tall spectral figure -->
<g filter="url(#spectralShimmer)">
  <!-- Guardian spectral aura -->
  <ellipse cx="250" cy="150" rx="55" ry="90" fill="url(#guardianGlow)" opacity="0.5">
    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- Helmet -->
  <path d="M232,72 Q250,55 268,72 L270,90 Q250,95 230,90 Z" fill="#6a6a8a" opacity="0.75"/>
  <path d="M235,75 Q250,62 265,75 L267,88 Q250,92 233,88 Z" fill="#7a7a9a" opacity="0.6"/>
  <!-- Visor slit - glowing eyes -->
  <rect x="239" y="80" width="22" height="3" rx="1" fill="#8af" opacity="0.7">
    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
  </rect>
  <!-- Shoulders -->
  <path d="M215,95 Q250,88 285,95 L290,110 Q250,105 210,110 Z" fill="#5a5a7a" opacity="0.7"/>
  <!-- Breastplate -->
  <path d="M222,110 L278,110 L275,175 Q250,182 225,175 Z" fill="#5a5a7a" opacity="0.7"/>
  <path d="M226,114 L274,114 L271,170 Q250,177 229,170 Z" fill="#6a6a8a" opacity="0.55"/>
  <!-- Cryptic symbols on breastplate -->
  <text x="250" y="135" text-anchor="middle" fill="#ffd700" font-size="10" opacity="0.8" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>&#x2721;</text>
  <text x="238" y="152" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.7" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="0.3s"/>&#x2727;</text>
  <text x="262" y="152" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.7" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.2s" repeatCount="indefinite" begin="0.8s"/>&#x2726;</text>
  <text x="250" y="168" text-anchor="middle" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.3;0.85;0.3" dur="4s" repeatCount="indefinite" begin="1.2s"/>&#x2738;</text>
  <!-- Symbol glow halos -->
  <circle cx="250" cy="132" r="8" fill="url(#runeGlow1)" opacity="0.25"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="250" cy="165" r="7" fill="url(#runeGlow1)" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" begin="1.2s"/></circle>
  <!-- Arms -->
  <rect x="205" y="110" width="14" height="60" rx="5" fill="#5a5a7a" opacity="0.6"/>
  <rect x="281" y="110" width="14" height="60" rx="5" fill="#5a5a7a" opacity="0.6"/>
  <!-- Gauntlets -->
  <rect x="203" y="165" width="18" height="12" rx="3" fill="#6a6a8a" opacity="0.5"/>
  <rect x="279" y="165" width="18" height="12" rx="3" fill="#6a6a8a" opacity="0.5"/>
  <!-- Legs / lower body -->
  <rect x="230" y="175" width="18" height="55" rx="4" fill="#4a4a6a" opacity="0.6"/>
  <rect x="252" y="175" width="18" height="55" rx="4" fill="#4a4a6a" opacity="0.6"/>
  <!-- Boots -->
  <rect x="227" y="225" width="24" height="10" rx="3" fill="#3a3a5a" opacity="0.6"/>
  <rect x="249" y="225" width="24" height="10" rx="3" fill="#3a3a5a" opacity="0.6"/>
  <!-- Spectral shimmer particles -->
  <circle cx="225" cy="100" r="1.5" fill="#aaf" opacity="0.3"><animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite"/><animate attributeName="cy" values="100;85;70" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="275" cy="95" r="1" fill="#aaf" opacity="0.25"><animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="cy" values="95;80;65" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
  <circle cx="250" cy="110" r="1.2" fill="#aaf" opacity="0.2"><animate attributeName="opacity" values="0;0.45;0" dur="3s" repeatCount="indefinite" begin="1s"/><animate attributeName="cy" values="110;90;70" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
</g>
<!-- Floor -->
<rect x="0" y="235" width="500" height="25" fill="#2a1a3a" opacity="0.5"/>
<ellipse cx="250" cy="240" rx="180" ry="8" fill="#4a3a5a" opacity="0.3"/>
</svg>`;

// Scene 2: Puzzle — letters glowing on guardian breastplate (reuses guardian scene)
STORY_SCENES['adventure_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv2Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="60%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#3a2a5a"/>
  </linearGradient>
  <radialGradient id="guardGlow2" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#8a7aff" stop-opacity="0.18"/><stop offset="100%" stop-color="#8a7aff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="letterGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.8"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="letterBloom"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="spectShimmer2"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv2Bg)"/>
<!-- Wall -->
<rect x="80" y="0" width="340" height="260" fill="#4a4a5a" opacity="0.4"/>
<line x1="80" y1="100" x2="420" y2="100" stroke="#3a3a4a" stroke-width="0.6" opacity="0.35"/>
<line x1="80" y1="200" x2="420" y2="200" stroke="#3a3a4a" stroke-width="0.6" opacity="0.35"/>
<!-- Arch -->
<path d="M165,260 L165,125 Q250,68 335,125 L335,260 Z" fill="#0a0618" opacity="0.7"/>
<!-- Guardian (closer view, upper body focus) -->
<g filter="url(#spectShimmer2)">
  <ellipse cx="250" cy="140" rx="60" ry="100" fill="url(#guardGlow2)" opacity="0.5">
    <animate attributeName="opacity" values="0.3;0.55;0.3" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <!-- Helmet -->
  <path d="M230,65 Q250,48 270,65 L272,85 Q250,90 228,85 Z" fill="#6a6a8a" opacity="0.75"/>
  <rect x="237" y="74" width="26" height="4" rx="1.5" fill="#8af" opacity="0.7">
    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
  </rect>
  <!-- Shoulders -->
  <path d="M210,90 Q250,82 290,90 L295,108 Q250,100 205,108 Z" fill="#5a5a7a" opacity="0.7"/>
  <!-- Breastplate — prominent, with glowing HERO letters -->
  <path d="M218,108 L282,108 L278,185 Q250,194 222,185 Z" fill="#5a5a7a" opacity="0.7"/>
  <path d="M222,112 L278,112 L274,180 Q250,188 226,180 Z" fill="#6a6a8a" opacity="0.55"/>
  <!-- The letters H E R O glowing on breastplate -->
  <g filter="url(#letterBloom)">
    <text x="234" y="150" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="18" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>H</text>
    <text x="248" y="150" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="18" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.2s"/>E</text>
    <text x="262" y="150" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="18" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.4s"/>R</text>
    <text x="276" y="150" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="18" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.6s"/>O</text>
  </g>
  <!-- Letter glow halos -->
  <circle cx="250" cy="145" r="28" fill="url(#letterGlow)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite"/></circle>
  <!-- Smaller cryptic symbols flanking letters -->
  <text x="225" y="135" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.5">&#x2727;</text>
  <text x="290" y="135" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.5">&#x2726;</text>
  <text x="225" y="168" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.4">&#x2738;</text>
  <text x="290" y="168" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.4">&#x2740;</text>
  <!-- Arms -->
  <rect x="200" y="108" width="15" height="60" rx="5" fill="#5a5a7a" opacity="0.6"/>
  <rect x="285" y="108" width="15" height="60" rx="5" fill="#5a5a7a" opacity="0.6"/>
  <!-- Gauntlets -->
  <rect x="198" y="163" width="19" height="14" rx="3" fill="#6a6a8a" opacity="0.5"/>
  <rect x="283" y="163" width="19" height="14" rx="3" fill="#6a6a8a" opacity="0.5"/>
  <!-- Lower body -->
  <rect x="228" y="185" width="18" height="50" rx="4" fill="#4a4a6a" opacity="0.55"/>
  <rect x="254" y="185" width="18" height="50" rx="4" fill="#4a4a6a" opacity="0.55"/>
  <!-- Spectral particles -->
  <circle cx="220" cy="95" r="1.5" fill="#aaf" opacity="0.3"><animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite"/><animate attributeName="cy" values="95;75;55" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="280" cy="90" r="1" fill="#aaf" opacity="0.25"><animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" begin="0.7s"/><animate attributeName="cy" values="90;70;50" dur="3.5s" repeatCount="indefinite" begin="0.7s"/></circle>
</g>
<!-- Floor -->
<rect x="0" y="235" width="500" height="25" fill="#2a1a3a" opacity="0.5"/>
</svg>`;

// Scene 3: View from summit — island below, distant observatory dome on mountain peak
STORY_SCENES['adventure_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv3Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="30%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#5a4a7a"/>
  </linearGradient>
  <radialGradient id="domeGlint" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#c0c0e0" stop-opacity="0.6"/><stop offset="100%" stop-color="#c0c0e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="moonGlow3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#eeeeff" stop-opacity="0.15"/><stop offset="100%" stop-color="#eeeeff" stop-opacity="0"/>
  </radialGradient>
  <filter id="advSoftGlow3"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv3Sky)"/>
<!-- Stars -->
<circle cx="45" cy="20" r="1" fill="#fff" opacity="0.5"/>
<circle cx="130" cy="35" r="0.8" fill="#fff" opacity="0.4"/>
<circle cx="200" cy="15" r="1.2" fill="#fff" opacity="0.45"/>
<circle cx="350" cy="25" r="1" fill="#fff" opacity="0.5"/>
<circle cx="460" cy="40" r="0.9" fill="#fff" opacity="0.35"/>
<circle cx="80" cy="60" r="0.7" fill="#fff" opacity="0.3"/>
<circle cx="420" cy="55" r="1.1" fill="#fff" opacity="0.4"/>
<!-- Moon -->
<circle cx="400" cy="45" r="18" fill="#eeeeff" opacity="0.15"/>
<circle cx="400" cy="45" r="30" fill="url(#moonGlow3)" opacity="0.3"/>
<!-- Distant mountain range -->
<polygon points="0,200 40,140 80,170 130,110 180,155 220,130 260,160 300,100 340,145 380,120 420,150 460,105 500,160 500,260 0,260" fill="#3a2a5a" opacity="0.5"/>
<!-- Mystic Peak with observatory -->
<polygon points="340,80 380,160 300,160" fill="#4a3a6a" opacity="0.7"/>
<polygon points="345,85 375,155 315,155" fill="#5a4a7a" opacity="0.5"/>
<!-- Observatory dome on peak -->
<ellipse cx="340" cy="82" rx="16" ry="8" fill="#8a8aaa" opacity="0.7"/>
<path d="M324,82 Q340,65 356,82 Z" fill="#9a9aba" opacity="0.7"/>
<!-- Dome glint -->
<circle cx="340" cy="74" r="10" fill="url(#domeGlint)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
</circle>
<circle cx="342" cy="72" r="2" fill="#fff" opacity="0.4" filter="url(#advSoftGlow3)">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
</circle>
<!-- Island terrain below (seen from tower summit) -->
<ellipse cx="200" cy="220" rx="180" ry="50" fill="#3a4a3a" opacity="0.35"/>
<ellipse cx="150" cy="235" rx="100" ry="25" fill="#2a3a2a" opacity="0.3"/>
<!-- Tiny trees on island below -->
<polygon points="100,210 105,195 110,210" fill="#2a4a2a" opacity="0.3"/>
<polygon points="120,215 124,200 128,215" fill="#2a4a2a" opacity="0.25"/>
<polygon points="170,208 175,190 180,208" fill="#2a4a2a" opacity="0.3"/>
<polygon points="230,212 234,198 238,212" fill="#2a4a2a" opacity="0.25"/>
<!-- Tower battlement edge (foreground, we're looking FROM the summit) -->
<rect x="0" y="240" width="500" height="20" fill="#4a4a5a" opacity="0.8"/>
<rect x="10" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="60" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="110" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="160" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="210" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="260" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="310" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="360" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="410" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<rect x="460" y="232" width="30" height="14" fill="#5a5a6a" opacity="0.7"/>
<!-- Rune glow on battlements -->
<text x="25" y="244" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.4">&#x2727;</text>
<text x="175" y="244" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.35">&#x2726;</text>
<text x="325" y="244" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.4">&#x2738;</text>
<text x="475" y="244" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.35">&#x2727;</text>
<!-- Wind lines -->
<line x1="50" y1="100" x2="100" y2="98" stroke="#8a7aaa" stroke-width="0.8" opacity="0.15" stroke-linecap="round"/>
<line x1="200" y1="85" x2="260" y2="82" stroke="#8a7aaa" stroke-width="0.7" opacity="0.12" stroke-linecap="round"/>
</svg>`;

// Scene 4: Observatory on Mystic Peak, mountain path
STORY_SCENES['adventure_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv4Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="domeLight4" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="obsGlint4" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <filter id="advGlow4"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv4Sky)"/>
<!-- Stars -->
<circle cx="50" cy="25" r="1" fill="#fff" opacity="0.45"/>
<circle cx="150" cy="18" r="1.2" fill="#fff" opacity="0.5"/>
<circle cx="280" cy="30" r="0.8" fill="#fff" opacity="0.35"/>
<circle cx="420" cy="22" r="1" fill="#fff" opacity="0.4"/>
<circle cx="470" cy="50" r="0.9" fill="#fff" opacity="0.3"/>
<!-- Background mountains -->
<polygon points="0,180 60,100 120,160 180,90 240,140 300,110 360,150 420,80 480,130 500,120 500,260 0,260" fill="#3a2a5a" opacity="0.4"/>
<!-- Mystic Peak - large, center-right -->
<polygon points="250,60 380,220 120,220" fill="#4a3a6a" opacity="0.8"/>
<polygon points="255,68 370,215 140,215" fill="#5a4a7a" opacity="0.5"/>
<!-- Snow cap -->
<polygon points="250,60 270,90 230,90" fill="#c0c0d0" opacity="0.2"/>
<!-- Mountain path winding up -->
<path d="M120,220 Q160,205 180,190 Q210,170 230,155 Q260,135 275,120 Q290,105 300,95" fill="none" stroke="#8a7a9a" stroke-width="3" stroke-linecap="round" opacity="0.4" stroke-dasharray="5,3"/>
<path d="M120,220 Q160,205 180,190 Q210,170 230,155 Q260,135 275,120 Q290,105 300,95" fill="none" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round" opacity="0.15" stroke-dasharray="5,3"/>
<!-- Observatory at peak -->
<rect x="235" y="68" width="30" height="22" rx="2" fill="#7a7a9a" opacity="0.8"/>
<path d="M232,70 Q250,48 268,70 Z" fill="#8a8aaa" opacity="0.8"/>
<!-- Dome details -->
<ellipse cx="250" cy="70" rx="18" ry="10" fill="#9a9aba" opacity="0.6"/>
<!-- Telescope slit -->
<rect x="248" y="60" width="4" height="12" fill="#2a1a3a" opacity="0.5"/>
<!-- Dome glint -->
<circle cx="250" cy="58" r="12" fill="url(#obsGlint4)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/>
</circle>
<circle cx="252" cy="55" r="2" fill="#fff" opacity="0.5" filter="url(#advGlow4)">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
</circle>
<!-- Warm dome window light -->
<rect x="242" y="75" width="6" height="6" rx="1" fill="#ffd700" opacity="0.35"/>
<rect x="252" y="75" width="6" height="6" rx="1" fill="#ffd700" opacity="0.3"/>
<circle cx="250" cy="78" r="15" fill="url(#domeLight4)" opacity="0.4"/>
<!-- Foreground rocky ground -->
<rect x="0" y="220" width="500" height="40" fill="#3a2a4a" opacity="0.6"/>
<ellipse cx="250" cy="222" rx="260" ry="12" fill="#4a3a5a" opacity="0.4"/>
<!-- Scattered rocks -->
<ellipse cx="80" cy="235" rx="12" ry="5" fill="#5a5a6a" opacity="0.35"/>
<ellipse cx="180" cy="240" rx="8" ry="3" fill="#5a5a6a" opacity="0.3"/>
<ellipse cx="400" cy="238" rx="10" ry="4" fill="#5a5a6a" opacity="0.3"/>
<!-- Purple mist at mountain base -->
<ellipse cx="250" cy="218" rx="120" ry="15" fill="#6a5a8a" opacity="0.08"/>
<ellipse cx="180" cy="215" rx="80" ry="10" fill="#8a7aaa" opacity="0.05"/>
</svg>`;

// Scene 5: Winding mountain trail, observatory dome glints in distance
STORY_SCENES['adventure_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv5Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#5a4a7a"/>
  </linearGradient>
  <radialGradient id="domeGlint5" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.6"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="trailGold" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.05"/><stop offset="50%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.05"/>
  </linearGradient>
  <filter id="advGlow5"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv5Sky)"/>
<!-- Stars -->
<circle cx="40" cy="20" r="1" fill="#fff" opacity="0.5"/>
<circle cx="120" cy="35" r="0.8" fill="#fff" opacity="0.4"/>
<circle cx="300" cy="15" r="1.1" fill="#fff" opacity="0.45"/>
<circle cx="430" cy="30" r="1" fill="#fff" opacity="0.5"/>
<circle cx="480" cy="55" r="0.7" fill="#fff" opacity="0.3"/>
<!-- Distant peak with observatory dome (top right) -->
<polygon points="350,40 430,160 270,160" fill="#4a3a6a" opacity="0.5"/>
<polygon points="353,45 420,155 285,155" fill="#5a4a7a" opacity="0.35"/>
<!-- Tiny observatory dome -->
<path d="M342,42 Q350,30 358,42 Z" fill="#9a9aba" opacity="0.6"/>
<ellipse cx="350" cy="42" rx="10" ry="5" fill="#8a8aaa" opacity="0.5"/>
<circle cx="350" cy="36" r="8" fill="url(#domeGlint5)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite"/>
</circle>
<circle cx="352" cy="34" r="1.5" fill="#fff" opacity="0.5" filter="url(#advGlow5)">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite"/>
</circle>
<!-- Background mountain range -->
<polygon points="0,170 50,110 100,145 150,90 200,130 250,105 300,140 350,100 400,130 450,85 500,120 500,260 0,260" fill="#3a2a5a" opacity="0.4"/>
<!-- Foreground mountain slope (we're on the trail) -->
<polygon points="0,140 80,100 180,130 250,160 320,180 400,200 500,220 500,260 0,260" fill="#4a3a6a" opacity="0.7"/>
<polygon points="0,145 80,108 180,135 250,165 320,185 400,205 500,225 500,260 0,260" fill="#5a4a7a" opacity="0.4"/>
<!-- Winding trail on mountainside -->
<path d="M0,200 Q50,185 100,190 Q160,195 200,185 Q250,172 300,178 Q360,185 400,195 Q450,205 500,210" fill="none" stroke="#7a6a8a" stroke-width="8" stroke-linecap="round" opacity="0.5"/>
<path d="M0,200 Q50,185 100,190 Q160,195 200,185 Q250,172 300,178 Q360,185 400,195 Q450,205 500,210" fill="none" stroke="url(#trailGold)" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
<!-- Trail edge stones -->
<ellipse cx="60" cy="192" rx="4" ry="2" fill="#6a6a7a" opacity="0.3"/>
<ellipse cx="150" cy="190" rx="3" ry="1.5" fill="#6a6a7a" opacity="0.25"/>
<ellipse cx="270" cy="176" rx="3.5" ry="1.8" fill="#6a6a7a" opacity="0.3"/>
<ellipse cx="380" cy="192" rx="4" ry="2" fill="#6a6a7a" opacity="0.25"/>
<!-- Rocky outcrops -->
<polygon points="30,175 45,155 60,175" fill="#5a4a6a" opacity="0.5"/>
<polygon points="440,190 455,170 470,190" fill="#5a4a6a" opacity="0.45"/>
<!-- Scrubby vegetation -->
<path d="M110,188 Q115,178 120,188" fill="none" stroke="#3a5a4a" stroke-width="1.5" opacity="0.3"/>
<path d="M340,182 Q345,172 350,182" fill="none" stroke="#3a5a4a" stroke-width="1.5" opacity="0.25"/>
<!-- Golden particles along trail (adventure beckons) -->
<circle cx="150" cy="185" r="2" fill="#ffd700" opacity="0.4" filter="url(#advGlow5)"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/><animate attributeName="cy" values="185;175;165" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="250" cy="170" r="1.5" fill="#ffd700" opacity="0.35" filter="url(#advGlow5)"><animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="cy" values="170;160;150" dur="4.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="350" cy="180" r="2" fill="#ffd700" opacity="0.4" filter="url(#advGlow5)"><animate attributeName="opacity" values="0.2;0.55;0.2" dur="3s" repeatCount="indefinite" begin="1s"/><animate attributeName="cy" values="180;168;156" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="450" cy="200" r="1.5" fill="#ffd700" opacity="0.3" filter="url(#advGlow5)"><animate attributeName="opacity" values="0.15;0.5;0.15" dur="4s" repeatCount="indefinite" begin="1.5s"/><animate attributeName="cy" values="200;188;176" dur="5s" repeatCount="indefinite" begin="1.5s"/></circle>
<!-- Ground edge -->
<rect x="0" y="245" width="500" height="15" fill="#3a2a4a" opacity="0.5"/>
</svg>`;
