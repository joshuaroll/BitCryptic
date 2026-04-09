// Observatory story scenes — "The Star Watcher's Puzzle"
// Keys: observatory_0 through observatory_5
// DRAFT — for review only

// Scene 0: Mountain trail, swirling mist, silver dome above clouds, starfield
STORY_SCENES['observatory_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="obsSkyBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050a18"/><stop offset="50%" stop-color="#0a1628"/><stop offset="100%" stop-color="#1a2040"/>
  </linearGradient>
  <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.6"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="domeShine" cx="40%" cy="30%" r="60%">
    <stop offset="0%" stop-color="#a0b0c8" stop-opacity="0.6"/><stop offset="100%" stop-color="#6a7a9a" stop-opacity="0"/>
  </radialGradient>
  <filter id="obsGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="mistBlur"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="500" height="260" fill="url(#obsSkyBg)"/>
<!-- Stars -->
<circle cx="45" cy="18" r="1.2" fill="#fff" opacity="0.7"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="120" cy="35" r="0.8" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="200" cy="12" r="1" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="280" cy="28" r="0.7" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="340" cy="8" r="1.1" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="410" cy="22" r="0.9" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.2s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="470" cy="40" r="0.8" fill="#fff" opacity="0.45"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="75" cy="55" r="0.6" fill="#fff" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="160" cy="48" r="1" fill="#ffd700" opacity="0.5" filter="url(#obsGlow)"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="0.7s"/></circle>
<circle cx="380" cy="45" r="0.7" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.3s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="440" cy="58" r="0.9" fill="#fff" opacity="0.4"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="0.4s"/></circle>
<circle cx="30" cy="70" r="0.6" fill="#fff" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" begin="2.2s"/></circle>
<!-- Mountain silhouettes -->
<polygon points="0,260 0,160 80,110 160,140 200,100 260,80 320,105 380,90 440,120 500,95 500,260" fill="#0c1428"/>
<polygon points="0,260 0,180 60,145 130,165 180,135 250,115 300,140 360,120 420,150 500,130 500,260" fill="#101830"/>
<!-- Cairns on trail -->
<ellipse cx="130" cy="210" rx="5" ry="3" fill="#4a5068"/>
<ellipse cx="130" cy="207" rx="4" ry="2.5" fill="#5a6078"/>
<ellipse cx="130" cy="205" rx="3" ry="2" fill="#6a7088"/>
<ellipse cx="320" cy="195" rx="4" ry="2.5" fill="#4a5068"/>
<ellipse cx="320" cy="193" rx="3" ry="2" fill="#5a6078"/>
<ellipse cx="320" cy="191" rx="2" ry="1.5" fill="#6a7088"/>
<!-- Trail path -->
<path d="M0,250 Q80,240 130,215 Q180,190 250,170 Q310,155 350,145" fill="none" stroke="#2a3048" stroke-width="8" stroke-linecap="round" opacity="0.5"/>
<path d="M0,250 Q80,240 130,215 Q180,190 250,170 Q310,155 350,145" fill="none" stroke="#3a4058" stroke-width="5" stroke-linecap="round" opacity="0.4"/>
<!-- Cloud / mist layer -->
<ellipse cx="250" cy="160" rx="280" ry="25" fill="#8090b0" opacity="0.08" filter="url(#mistBlur)"/>
<ellipse cx="180" cy="155" rx="140" ry="18" fill="#a0b0d0" opacity="0.06" filter="url(#mistBlur)"><animate attributeName="cx" values="180;200;180" dur="12s" repeatCount="indefinite"/></ellipse>
<ellipse cx="350" cy="165" rx="120" ry="15" fill="#8090b0" opacity="0.07" filter="url(#mistBlur)"><animate attributeName="cx" values="350;330;350" dur="10s" repeatCount="indefinite"/></ellipse>
<!-- Observatory dome -->
<ellipse cx="260" cy="82" rx="30" ry="4" fill="#000" opacity="0.15"/>
<rect x="240" y="75" width="40" height="10" fill="#6a7a9a" rx="1"/>
<path d="M238,78 Q250,50 260,42 Q270,50 282,78 Z" fill="#8a9ab0"/>
<path d="M238,78 Q250,50 260,42 Q270,50 282,78 Z" fill="url(#domeShine)"/>
<!-- Dome slit -->
<line x1="259" y1="44" x2="259" y2="70" stroke="#0a1628" stroke-width="2.5" opacity="0.6"/>
<!-- Dome base detail -->
<rect x="242" y="78" width="36" height="3" fill="#7a8aa0" rx="1"/>
<rect x="245" y="81" width="30" height="2" fill="#5a6a80"/>
</svg>`;

// Scene 1: Star Watcher introduction — reuse scene 0 exterior (character described in narrative)
STORY_SCENES['observatory_1'] = STORY_SCENES['observatory_0'];

// Scene 2: Interior — transparent dome, dense starfield
// Also used for Scene 3 (puzzle: constellations S, K, Y)
STORY_SCENES['observatory_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="obsInteriorBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050a18"/><stop offset="40%" stop-color="#080e20"/><stop offset="100%" stop-color="#0c1830"/>
  </linearGradient>
  <radialGradient id="domeEdge" cx="50%" cy="100%" r="60%">
    <stop offset="80%" stop-color="#050a18" stop-opacity="0"/><stop offset="100%" stop-color="#6a7a9a" stop-opacity="0.15"/>
  </radialGradient>
  <radialGradient id="constGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.35"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="starSoft"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="constFilter"><feGaussianBlur stdDeviation="0.8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <radialGradient id="nebulaA" cx="30%" cy="25%" r="25%">
    <stop offset="0%" stop-color="#6a2090" stop-opacity="0.08"/><stop offset="100%" stop-color="#6a2090" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="nebulaB" cx="75%" cy="35%" r="20%">
    <stop offset="0%" stop-color="#3040a0" stop-opacity="0.06"/><stop offset="100%" stop-color="#3040a0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#obsInteriorBg)"/>
<!-- Nebula washes -->
<circle cx="150" cy="65" r="80" fill="url(#nebulaA)"/>
<circle cx="375" cy="90" r="70" fill="url(#nebulaB)"/>
<!-- Dense starfield -->
<circle cx="22" cy="15" r="0.8" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="58" cy="42" r="0.5" fill="#fff" opacity="0.4"/>
<circle cx="90" cy="20" r="0.7" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="115" cy="60" r="0.6" fill="#fff" opacity="0.45"/>
<circle cx="145" cy="30" r="0.9" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="178" cy="50" r="0.5" fill="#fff" opacity="0.35"/>
<circle cx="210" cy="18" r="0.7" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="245" cy="38" r="0.6" fill="#fff" opacity="0.4"/>
<circle cx="275" cy="12" r="0.8" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.2s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="310" cy="55" r="0.5" fill="#fff" opacity="0.35"/>
<circle cx="340" cy="25" r="0.7" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="375" cy="15" r="0.6" fill="#fff" opacity="0.45"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="400" cy="48" r="0.8" fill="#fff" opacity="0.5"/>
<circle cx="430" cy="22" r="0.5" fill="#fff" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="465" cy="35" r="0.7" fill="#fff" opacity="0.45"/>
<circle cx="488" cy="55" r="0.6" fill="#fff" opacity="0.4"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" begin="0.6s"/></circle>
<circle cx="35" cy="80" r="0.5" fill="#fff" opacity="0.3"/>
<circle cx="72" cy="95" r="0.6" fill="#fff" opacity="0.35"/>
<circle cx="195" cy="78" r="0.5" fill="#fff" opacity="0.3"/>
<circle cx="305" cy="85" r="0.6" fill="#fff" opacity="0.35"/>
<circle cx="450" cy="75" r="0.5" fill="#fff" opacity="0.3"/>
<!-- Constellation S — clear S-curve of stars, NO connecting lines (left area) -->
<g filter="url(#constFilter)">
  <!-- Top curve of S -->
  <circle cx="130" cy="55" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/></circle>
  <circle cx="118" cy="52" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.15s"/></circle>
  <circle cx="108" cy="57" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.3s"/></circle>
  <!-- Middle crossing -->
  <circle cx="112" cy="70" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.45s"/></circle>
  <circle cx="122" cy="78" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.6s"/></circle>
  <!-- Bottom curve of S -->
  <circle cx="132" cy="85" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.75s"/></circle>
  <circle cx="125" cy="95" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.9s"/></circle>
  <circle cx="112" cy="98" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="1.05s"/></circle>
  <!-- NO lines — player must connect the dots mentally -->
  <circle cx="120" cy="75" r="22" fill="url(#constGlow)"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite"/></circle>
</g>
<!-- Constellation K — stars forming K shape, NO connecting lines (center area) -->
<g filter="url(#constFilter)">
  <!-- Vertical stroke -->
  <circle cx="240" cy="55" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.1s"/></circle>
  <circle cx="240" cy="70" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.3s"/></circle>
  <circle cx="240" cy="85" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
  <circle cx="240" cy="100" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.7s"/></circle>
  <!-- Upper diagonal -->
  <circle cx="255" cy="60" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.4s"/></circle>
  <!-- Lower diagonal -->
  <circle cx="255" cy="95" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.6s"/></circle>
  <!-- NO lines -->
  <circle cx="245" cy="78" r="22" fill="url(#constGlow)"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
</g>
<!-- Constellation Y — forking stars, NO connecting lines (right area) -->
<g filter="url(#constFilter)">
  <!-- Left branch top -->
  <circle cx="370" cy="55" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.2s"/></circle>
  <!-- Right branch top -->
  <circle cx="390" cy="55" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
  <!-- Junction -->
  <circle cx="380" cy="70" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.7s"/></circle>
  <!-- Stem -->
  <circle cx="380" cy="85" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.9s"/></circle>
  <circle cx="380" cy="100" r="2" fill="#ffd700" opacity="0.8"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="1.1s"/></circle>
  <!-- NO lines -->
  <circle cx="380" cy="78" r="22" fill="url(#constGlow)"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="2s"/></circle>
</g>
<!-- Transparent dome outline (interior view) -->
<path d="M30,240 Q30,30 250,15 Q470,30 470,240" fill="none" stroke="#8a9ab0" stroke-width="1" opacity="0.12"/>
<path d="M50,240 Q50,45 250,25 Q450,45 450,240" fill="none" stroke="#8a9ab0" stroke-width="0.5" opacity="0.08"/>
<circle cx="250" cy="240" r="230" fill="url(#domeEdge)"/>
<!-- Observatory floor -->
<rect x="0" y="220" width="500" height="40" fill="#0c1830" opacity="0.8"/>
<rect x="0" y="220" width="500" height="2" fill="#8a9ab0" opacity="0.08"/>
<!-- Telescope -->
<rect x="238" y="180" width="4" height="42" fill="#5a6a80"/>
<rect x="230" y="218" width="20" height="4" rx="2" fill="#4a5a70"/>
<line x1="240" y1="185" x2="215" y2="150" stroke="#6a7a90" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="212" cy="147" rx="5" ry="3.5" fill="#7a8aa0" transform="rotate(-30,212,147)"/>
<!-- Star Watcher silhouette (cross-legged, right of telescope) -->
<ellipse cx="310" cy="215" rx="18" ry="6" fill="#0e1838"/>
<path d="M295,215 Q298,195 305,188 Q310,185 315,188 Q322,195 325,215 Z" fill="#101c40"/>
<!-- Cloak drape -->
<path d="M292,215 Q290,200 296,190 Q300,186 305,188 L295,215 Z" fill="#141e48" opacity="0.7"/>
<path d="M328,215 Q330,200 324,190 Q320,186 315,188 L325,215 Z" fill="#141e48" opacity="0.7"/>
<!-- Head -->
<circle cx="310" cy="182" r="7" fill="#c8a878"/>
<!-- Hood/cloak collar -->
<path d="M303,185 Q305,178 310,175 Q315,178 317,185" fill="#101c40"/>
<!-- Eyes reflecting starlight -->
<circle cx="308" cy="181" r="1" fill="#ffd700" opacity="0.7"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="312" cy="181" r="1" fill="#ffd700" opacity="0.7"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.5s"/></circle>
</svg>`;

// Scene 3 (puzzle): Same interior with constellations — reuse scene 2
STORY_SCENES['observatory_3'] = STORY_SCENES['observatory_2'];

// Scene 4: Observatory flooded with projected starlight, golden projections
STORY_SCENES['observatory_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="obsFloodBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#080e22"/><stop offset="50%" stop-color="#0e1838"/><stop offset="100%" stop-color="#141e48"/>
  </linearGradient>
  <radialGradient id="floodCenter" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="50%" stop-color="#ffd700" stop-opacity="0.04"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="projGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="nebulaPurple" cx="25%" cy="30%" r="30%">
    <stop offset="0%" stop-color="#8040c0" stop-opacity="0.1"/><stop offset="100%" stop-color="#8040c0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="nebulaBlue" cx="70%" cy="25%" r="25%">
    <stop offset="0%" stop-color="#4060d0" stop-opacity="0.08"/><stop offset="100%" stop-color="#4060d0" stop-opacity="0"/>
  </radialGradient>
  <filter id="projFilter"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="goldSoft"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#obsFloodBg)"/>
<!-- Central golden flood -->
<circle cx="250" cy="100" r="180" fill="url(#floodCenter)"/>
<!-- Nebula washes -->
<circle cx="120" cy="80" r="100" fill="url(#nebulaPurple)"/>
<circle cx="380" cy="65" r="80" fill="url(#nebulaBlue)"/>
<!-- Dense starfield (brighter than scene 2) -->
<circle cx="30" cy="20" r="1" fill="#fff" opacity="0.7"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/></circle>
<circle cx="70" cy="45" r="0.7" fill="#fff" opacity="0.5"/>
<circle cx="105" cy="15" r="0.9" fill="#fff" opacity="0.65"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="150" cy="35" r="0.6" fill="#fff" opacity="0.45"/>
<circle cx="190" cy="22" r="0.8" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="230" cy="50" r="0.7" fill="#fff" opacity="0.5"/>
<circle cx="270" cy="18" r="1" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="315" cy="40" r="0.6" fill="#fff" opacity="0.4"/>
<circle cx="355" cy="12" r="0.8" fill="#fff" opacity="0.55"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="395" cy="30" r="0.7" fill="#fff" opacity="0.5"/>
<circle cx="440" cy="48" r="0.9" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="480" cy="25" r="0.6" fill="#fff" opacity="0.45"/>
<circle cx="50" cy="75" r="0.5" fill="#fff" opacity="0.35"/>
<circle cx="160" cy="68" r="0.6" fill="#fff" opacity="0.4"/>
<circle cx="290" cy="65" r="0.5" fill="#fff" opacity="0.3"/>
<circle cx="420" cy="70" r="0.6" fill="#fff" opacity="0.4"/>
<!-- Projected golden star-lines radiating from telescope -->
<g filter="url(#projFilter)" opacity="0.3">
  <line x1="250" y1="175" x2="60" y2="30" stroke="#ffd700" stroke-width="1"/>
  <line x1="250" y1="175" x2="140" y2="15" stroke="#ffd700" stroke-width="0.8"/>
  <line x1="250" y1="175" x2="250" y2="10" stroke="#ffd700" stroke-width="1"/>
  <line x1="250" y1="175" x2="360" y2="20" stroke="#ffd700" stroke-width="0.8"/>
  <line x1="250" y1="175" x2="450" y2="35" stroke="#ffd700" stroke-width="1"/>
  <line x1="250" y1="175" x2="100" y2="60" stroke="#ffd700" stroke-width="0.6"/>
  <line x1="250" y1="175" x2="400" y2="55" stroke="#ffd700" stroke-width="0.6"/>
</g>
<!-- Floating golden projection dots -->
<circle cx="80" cy="100" r="3" fill="url(#projGlow)" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="170" cy="120" r="4" fill="url(#projGlow)" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="250" cy="90" r="5" fill="url(#projGlow)" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="330" cy="115" r="4" fill="url(#projGlow)" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="420" cy="95" r="3" fill="url(#projGlow)" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" begin="1.5s"/></circle>
<!-- Smaller floating gold motes -->
<circle cx="120" cy="140" r="1.5" fill="#ffd700" opacity="0.4" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" begin="0.8s"/><animate attributeName="cy" values="140;130;140" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="200" cy="150" r="1.5" fill="#ffd700" opacity="0.35" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="cy" values="150;140;150" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="300" cy="135" r="1.5" fill="#ffd700" opacity="0.4" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite" begin="2s"/><animate attributeName="cy" values="135;125;135" dur="7s" repeatCount="indefinite"/></circle>
<circle cx="380" cy="145" r="1.5" fill="#ffd700" opacity="0.35" filter="url(#goldSoft)"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.8s" repeatCount="indefinite" begin="0.6s"/><animate attributeName="cy" values="145;135;145" dur="5.5s" repeatCount="indefinite"/></circle>
<!-- Transparent dome outline -->
<path d="M30,240 Q30,30 250,15 Q470,30 470,240" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.06"/>
<path d="M50,240 Q50,45 250,25 Q450,45 450,240" fill="none" stroke="#ffd700" stroke-width="0.5" opacity="0.04"/>
<!-- Observatory floor -->
<rect x="0" y="220" width="500" height="40" fill="#0e1838" opacity="0.85"/>
<rect x="0" y="220" width="500" height="2" fill="#ffd700" opacity="0.06"/>
<!-- Floor reflections -->
<ellipse cx="250" cy="240" rx="180" ry="15" fill="#ffd700" opacity="0.03"/>
<!-- Telescope -->
<rect x="238" y="180" width="4" height="42" fill="#5a6a80"/>
<rect x="230" y="218" width="20" height="4" rx="2" fill="#4a5a70"/>
<line x1="240" y1="185" x2="218" y2="155" stroke="#6a7a90" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="215" cy="152" rx="5" ry="3.5" fill="#7a8aa0" transform="rotate(-30,215,152)"/>
<!-- Golden glow at telescope eyepiece -->
<circle cx="215" cy="152" r="8" fill="url(#projGlow)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/></circle>
<!-- Star Watcher standing, arms raised -->
<ellipse cx="310" cy="218" rx="10" ry="3" fill="#000" opacity="0.15"/>
<path d="M300,218 Q302,190 305,178 Q310,172 315,178 Q318,190 320,218 Z" fill="#101c40"/>
<!-- Arms raised outward -->
<line x1="304" y1="190" x2="280" y2="170" stroke="#101c40" stroke-width="4" stroke-linecap="round"/>
<line x1="316" y1="190" x2="340" y2="170" stroke="#101c40" stroke-width="4" stroke-linecap="round"/>
<!-- Hands -->
<circle cx="278" cy="168" r="2.5" fill="#c8a878"/>
<circle cx="342" cy="168" r="2.5" fill="#c8a878"/>
<!-- Head -->
<circle cx="310" cy="172" r="7" fill="#c8a878"/>
<!-- Hood -->
<path d="M303,175 Q305,168 310,165 Q315,168 317,175" fill="#101c40"/>
</svg>`;

// Scene 5 (complete): Same as scene 4 — observatory flooded with starlight
STORY_SCENES['observatory_5'] = STORY_SCENES['observatory_4'];
