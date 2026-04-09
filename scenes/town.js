// Town Square story scenes — "Town Square"
// Keys: town_0 through town_5
// DRAFT — for review only

// Scene 0: Town Square opens up, grand fountain, notice boards with coded messages
STORY_SCENES['town_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="fountainMist" cx="50%" cy="60%" r="30%">
    <stop offset="0%" stop-color="#aaccee" stop-opacity="0.15"/><stop offset="100%" stop-color="#aaccee" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="townSoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky)"/>
<!-- Distant buildings -->
<rect x="0" y="60" width="60" height="120" rx="2" fill="#7a8da3" opacity="0.5"/>
<rect x="8" y="75" width="12" height="14" rx="1" fill="#ffeaa7" opacity="0.25"/>
<rect x="32" y="75" width="12" height="14" rx="1" fill="#ffeaa7" opacity="0.2"/>
<rect x="55" y="50" width="50" height="130" rx="2" fill="#8a9db3" opacity="0.45"/>
<rect x="63" y="65" width="10" height="12" rx="1" fill="#ffeaa7" opacity="0.2"/>
<rect x="82" y="65" width="10" height="12" rx="1" fill="#ffeaa7" opacity="0.18"/>
<rect x="395" y="55" width="55" height="125" rx="2" fill="#7a8da3" opacity="0.5"/>
<rect x="403" y="70" width="12" height="14" rx="1" fill="#ffeaa7" opacity="0.22"/>
<rect x="430" y="70" width="12" height="14" rx="1" fill="#ffeaa7" opacity="0.18"/>
<rect x="445" y="45" width="55" height="135" rx="2" fill="#8a9db3" opacity="0.45"/>
<rect x="453" y="58" width="10" height="12" rx="1" fill="#ffeaa7" opacity="0.2"/>
<rect x="478" y="58" width="10" height="12" rx="1" fill="#ffeaa7" opacity="0.18"/>
<!-- Cobblestone ground -->
<rect x="0" y="178" width="500" height="82" rx="0" fill="#6a5a48"/>
<ellipse cx="60" cy="210" rx="14" ry="6" fill="#7a6a55" opacity="0.4"/>
<ellipse cx="130" cy="225" rx="12" ry="5" fill="#6b5b45" opacity="0.35"/>
<ellipse cx="200" cy="200" rx="13" ry="5.5" fill="#7a6a55" opacity="0.3"/>
<ellipse cx="310" cy="215" rx="14" ry="6" fill="#6b5b45" opacity="0.4"/>
<ellipse cx="380" cy="195" rx="12" ry="5" fill="#7a6a55" opacity="0.35"/>
<ellipse cx="440" cy="230" rx="13" ry="5.5" fill="#6b5b45" opacity="0.3"/>
<ellipse cx="250" cy="240" rx="15" ry="6" fill="#7a6a55" opacity="0.3"/>
<ellipse cx="170" cy="245" rx="11" ry="5" fill="#6b5b45" opacity="0.25"/>
<ellipse cx="350" cy="248" rx="12" ry="5" fill="#7a6a55" opacity="0.25"/>
<!-- Fountain base -->
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#8a8a9a"/>
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#9a9aaa" opacity="0.5"/>
<ellipse cx="250" cy="180" rx="48" ry="14" fill="#6688aa" opacity="0.6"/>
<!-- Fountain pillar -->
<rect x="244" y="140" width="12" height="42" fill="#9a9aaa"/>
<rect x="246" y="140" width="8" height="42" fill="#aaaabc" opacity="0.5"/>
<!-- Fountain top basin -->
<ellipse cx="250" cy="142" rx="22" ry="8" fill="#8a8a9a"/>
<ellipse cx="250" cy="140" rx="18" ry="6" fill="#6688aa" opacity="0.5"/>
<!-- Water streams -->
<line x1="250" y1="135" x2="250" y2="120" stroke="#aaddff" stroke-width="1.5" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="240" y1="142" x2="228" y2="165" stroke="#aaddff" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
</line>
<line x1="260" y1="142" x2="272" y2="165" stroke="#aaddff" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.6s"/>
</line>
<!-- Water shimmer particles -->
<circle cx="250" cy="118" r="2" fill="#aaddff" opacity="0.3" filter="url(#townSoftGlow)">
  <animate attributeName="cy" values="118;112;108" dur="1.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.8;0" dur="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="232" cy="160" r="1.5" fill="#aaddff" opacity="0.3">
  <animate attributeName="cy" values="155;165;175" dur="1.8s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite"/>
</circle>
<circle cx="268" cy="160" r="1.5" fill="#aaddff" opacity="0.3">
  <animate attributeName="cy" values="155;165;175" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
</circle>
<!-- Lantern left -->
<rect x="118" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="112" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="114" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.6"/>
<circle cx="120" cy="137" r="12" fill="url(#lanternGlow)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/>
</circle>
<!-- Lantern right -->
<rect x="378" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="372" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="374" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.6"/>
<circle cx="380" cy="137" r="12" fill="url(#lanternGlow)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<!-- Notice board left -->
<rect x="50" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="40" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="42" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="52" y="141" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.7">?X=7</text>
<text x="52" y="146" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.6">A+B=?</text>
<!-- Notice board right -->
<rect x="446" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="436" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="438" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="448" y="141" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.7">ROT13</text>
<text x="448" y="146" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.6">#!&amp;%</text>
<!-- Fountain mist -->
<ellipse cx="250" cy="165" rx="60" ry="25" fill="url(#fountainMist)"/>
</svg>`;

// Scene 1: Terminal hums near fountain. Three paths lead outward.
// Reuse scene 0 — same visual composition, narrative text differs
STORY_SCENES['town_1'] = STORY_SCENES['town_0'];

// Scene 2: Town Crier — woman in plumed hat rings brass bell
STORY_SCENES['town_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="lanternGlow2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="bellGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky2)"/>
<!-- Distant buildings (simplified backdrop) -->
<rect x="0" y="70" width="80" height="110" rx="2" fill="#7a8da3" opacity="0.35"/>
<rect x="420" y="65" width="80" height="115" rx="2" fill="#7a8da3" opacity="0.35"/>
<!-- Cobblestone ground -->
<rect x="0" y="195" width="500" height="65" fill="#6a5a48"/>
<ellipse cx="100" cy="220" rx="14" ry="6" fill="#7a6a55" opacity="0.3"/>
<ellipse cx="300" cy="230" rx="12" ry="5" fill="#6b5b45" opacity="0.3"/>
<ellipse cx="400" cy="215" rx="13" ry="5.5" fill="#7a6a55" opacity="0.25"/>
<!-- Fountain (background, partial) -->
<ellipse cx="320" cy="190" rx="40" ry="14" fill="#8a8a9a" opacity="0.5"/>
<rect x="315" y="155" width="10" height="36" fill="#9a9aaa" opacity="0.5"/>
<ellipse cx="320" cy="157" rx="16" ry="6" fill="#8a8a9a" opacity="0.4"/>
<line x1="320" y1="152" x2="320" y2="140" stroke="#aaddff" stroke-width="1" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/>
</line>
<!-- Town Crier figure -->
<!-- Body / coat -->
<rect x="180" y="145" width="30" height="48" rx="4" fill="#8b2252"/>
<rect x="183" y="145" width="24" height="48" rx="3" fill="#a0325f" opacity="0.6"/>
<!-- Collar / sash -->
<rect x="186" y="145" width="18" height="6" rx="1" fill="#ffd700" opacity="0.6"/>
<!-- Head -->
<circle cx="195" cy="130" r="14" fill="#d4a574"/>
<!-- Eyes -->
<circle cx="190" cy="128" r="1.5" fill="#2a2a3a"/>
<circle cx="200" cy="128" r="1.5" fill="#2a2a3a"/>
<!-- Smile -->
<path d="M190,134 Q195,138 200,134" fill="none" stroke="#6a4a3a" stroke-width="1" opacity="0.6"/>
<!-- Plumed hat -->
<path d="M175,122 Q180,106 195,104 Q210,102 218,112 Q220,118 215,122 Z" fill="#3a1a50"/>
<path d="M178,120 Q182,108 195,106 Q208,104 214,112 Q216,116 212,120 Z" fill="#4a2a60" opacity="0.7"/>
<!-- Plume feather -->
<path d="M212,112 Q225,95 230,80 Q228,95 222,108" fill="#ff6a6a" opacity="0.7"/>
<path d="M214,110 Q228,92 232,78 Q230,94 224,106" fill="#ff8a8a" opacity="0.5"/>
<path d="M230,80 Q232,75 234,80" fill="none" stroke="#ff6a6a" stroke-width="1" opacity="0.6"/>
<!-- Left arm (resting) -->
<line x1="180" y1="155" x2="168" y2="175" stroke="#8b2252" stroke-width="6" stroke-linecap="round"/>
<circle cx="166" cy="177" r="4" fill="#d4a574"/>
<!-- Right arm (holding bell up) -->
<line x1="210" y1="152" x2="228" y2="130" stroke="#8b2252" stroke-width="6" stroke-linecap="round"/>
<circle cx="230" cy="128" r="4" fill="#d4a574"/>
<!-- Brass bell -->
<path d="M224,110 Q230,108 236,110 Q238,118 240,125 L220,125 Q222,118 224,110 Z" fill="#c8962a"/>
<path d="M226,112 Q230,110 234,112 Q236,118 237,123 L223,123 Q224,118 226,112 Z" fill="#daa640" opacity="0.6"/>
<rect x="218" y="124" width="24" height="3" rx="1" fill="#b88620"/>
<line x1="230" y1="125" x2="230" y2="130" stroke="#8a6a10" stroke-width="1.5"/>
<circle cx="230" cy="131" r="2" fill="#8a6a10"/>
<!-- Bell ring effect -->
<path d="M215,105 Q210,100 212,95" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite"/>
</path>
<path d="M245,105 Q250,100 248,95" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
</path>
<path d="M208,100 Q202,96 204,90" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.3">
  <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
</path>
<!-- Skirt / lower coat -->
<path d="M180,193 Q175,195 172,200 L218,200 Q215,195 210,193 Z" fill="#8b2252"/>
<!-- Boots -->
<rect x="182" y="198" width="10" height="6" rx="2" fill="#3a2a18"/>
<rect x="198" y="198" width="10" height="6" rx="2" fill="#3a2a18"/>
<!-- Lanterns (flanking) -->
<rect x="100" y="150" width="3" height="35" fill="#5a4a2a"/>
<rect x="95" y="140" width="13" height="12" rx="2" fill="#6a5a3a"/>
<rect x="97" y="142" width="9" height="8" rx="1" fill="#ffeaa7" opacity="0.5"/>
<circle cx="101" cy="146" r="10" fill="url(#lanternGlow2)" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
</circle>
<rect x="397" y="150" width="3" height="35" fill="#5a4a2a"/>
<rect x="392" y="140" width="13" height="12" rx="2" fill="#6a5a3a"/>
<rect x="394" y="142" width="9" height="8" rx="1" fill="#ffeaa7" opacity="0.5"/>
<circle cx="399" cy="146" r="10" fill="url(#lanternGlow2)" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" begin="0.6s"/>
</circle>
</svg>`;

// Scene 3: Fountain close-up with three cryptic clues carved on the rim
STORY_SCENES['town_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townCloseupBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a7a9a"/><stop offset="40%" stop-color="#7a9ab3"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="waterShimmer" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#aaddff" stop-opacity="0.2"/><stop offset="100%" stop-color="#aaddff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="goldTextGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="carvedGlow"><feGaussianBlur stdDeviation="1.2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townCloseupBg)"/>
<!-- Large fountain basin (close-up view) -->
<ellipse cx="250" cy="200" rx="210" ry="55" fill="#8a8a9a"/>
<ellipse cx="250" cy="195" rx="200" ry="48" fill="#9a9aaa"/>
<ellipse cx="250" cy="188" rx="185" ry="40" fill="#6688aa" opacity="0.7"/>
<!-- Water surface shimmer -->
<ellipse cx="250" cy="185" rx="170" ry="35" fill="url(#waterShimmer)">
  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="220" cy="180" rx="30" ry="8" fill="#aaddff" opacity="0.08">
  <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" begin="0.5s"/>
</ellipse>
<ellipse cx="280" cy="182" rx="25" ry="7" fill="#aaddff" opacity="0.06">
  <animate attributeName="opacity" values="0.04;0.12;0.04" dur="3.5s" repeatCount="indefinite" begin="1s"/>
</ellipse>
<!-- Fountain pillar (close) -->
<rect x="240" y="95" width="20" height="95" fill="#9a9aaa"/>
<rect x="243" y="95" width="14" height="95" fill="#aaaabc" opacity="0.5"/>
<!-- Decorative bands on pillar -->
<rect x="238" y="120" width="24" height="4" rx="1" fill="#aaaa9a"/>
<rect x="238" y="150" width="24" height="4" rx="1" fill="#aaaa9a"/>
<!-- Top basin -->
<ellipse cx="250" cy="97" rx="35" ry="12" fill="#8a8a9a"/>
<ellipse cx="250" cy="94" rx="30" ry="9" fill="#6688aa" opacity="0.5"/>
<!-- Water spout -->
<line x1="250" y1="88" x2="250" y2="65" stroke="#aaddff" stroke-width="2" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite"/>
</line>
<circle cx="250" cy="63" r="3" fill="#aaddff" opacity="0.3">
  <animate attributeName="cy" values="63;55;50" dur="1.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.8;0" dur="1.5s" repeatCount="indefinite"/>
</circle>
<!-- Side water arcs -->
<path d="M235,97 Q220,75 205,100" fill="none" stroke="#aaddff" stroke-width="1.2" opacity="0.35">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.2s" repeatCount="indefinite" begin="0.3s"/>
</path>
<path d="M265,97 Q280,75 295,100" fill="none" stroke="#aaddff" stroke-width="1.2" opacity="0.35">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
</path>
<!-- Submerged golden text in fountain water — matching index.html clues -->
<g opacity="0.65" filter="url(#townSoftGlow)">
  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>
  <!-- Clue 1 (left): TOWER. Answer: WROTE mangled -->
  <text x="125" y="180" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Wrote, mangled,</text>
  <text x="125" y="188" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">a tall building (5)</text>
  <!-- Clue 2 (center): LIBRARY. Answer: Quiet place where books live -->
  <text x="250" y="202" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Quiet place where</text>
  <text x="250" y="210" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">books live (7)</text>
  <!-- Clue 3 (right): WORKSHOP. Answer: HOP WORKS scrambled -->
  <text x="375" y="180" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Hop works, scrambled,</text>
  <text x="375" y="188" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">a place to build (8)</text>
</g>
<!-- Gold glow halos for water clues -->
<circle cx="125" cy="184" r="22" fill="url(#goldTextGlow)" opacity="0.4"/>
<circle cx="250" cy="206" r="24" fill="url(#goldTextGlow)" opacity="0.4"/>
<circle cx="375" cy="184" r="22" fill="url(#goldTextGlow)" opacity="0.4"/>
<!-- Sparkle accents on rim -->
<circle cx="160" cy="196" r="1.5" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite"/>
</circle>
<circle cx="340" cy="196" r="1.5" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.3s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<circle cx="250" cy="200" r="1" fill="#ffd700" opacity="0.3">
  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.8s" repeatCount="indefinite" begin="0.4s"/>
</circle>
</svg>`;

// Scene 4: All three solved — bell rings, fountain surges golden
STORY_SCENES['town_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townGoldenSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a6a7a"/><stop offset="40%" stop-color="#7a8a9a"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="goldenFountain" cx="50%" cy="55%" r="40%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.35"/><stop offset="60%" stop-color="#ffeaa7" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowL" cx="0%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowR" cx="100%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="goldenGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townGoldenSky)"/>
<!-- Golden radial aura from fountain -->
<circle cx="250" cy="155" r="140" fill="url(#goldenFountain)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
</circle>
<!-- Distant buildings -->
<rect x="0" y="60" width="60" height="120" rx="2" fill="#7a8da3" opacity="0.4"/>
<rect x="55" y="50" width="50" height="130" rx="2" fill="#8a9db3" opacity="0.35"/>
<rect x="395" y="55" width="55" height="125" rx="2" fill="#7a8da3" opacity="0.4"/>
<rect x="445" y="45" width="55" height="135" rx="2" fill="#8a9db3" opacity="0.35"/>
<!-- Cobblestone ground -->
<rect x="0" y="178" width="500" height="82" rx="0" fill="#6a5a48"/>
<ellipse cx="80" cy="210" rx="14" ry="6" fill="#7a6a55" opacity="0.3"/>
<ellipse cx="200" cy="225" rx="12" ry="5" fill="#6b5b45" opacity="0.3"/>
<ellipse cx="370" cy="215" rx="13" ry="5.5" fill="#7a6a55" opacity="0.25"/>
<!-- Fountain base -->
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#8a8a9a"/>
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="250" cy="180" rx="48" ry="14" fill="#aa8820" opacity="0.5"/>
<!-- Fountain pillar -->
<rect x="244" y="140" width="12" height="42" fill="#9a9aaa"/>
<!-- Fountain top basin -->
<ellipse cx="250" cy="142" rx="22" ry="8" fill="#8a8a9a"/>
<ellipse cx="250" cy="140" rx="18" ry="6" fill="#aa8820" opacity="0.4"/>
<!-- Golden water surge -->
<line x1="250" y1="135" x2="250" y2="95" stroke="#ffd700" stroke-width="3" opacity="0.6" filter="url(#goldenGlow)">
  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
</line>
<line x1="250" y1="95" x2="250" y2="75" stroke="#ffeaa7" stroke-width="2" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite"/>
</line>
<!-- Golden spray arcs -->
<path d="M235,142 Q210,100 185,140" fill="none" stroke="#ffd700" stroke-width="1.5" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="0.3s"/>
</path>
<path d="M265,142 Q290,100 315,140" fill="none" stroke="#ffd700" stroke-width="1.5" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="0.6s"/>
</path>
<!-- Rising golden particles -->
<circle cx="250" cy="90" r="2.5" fill="#ffd700" opacity="0.5" filter="url(#goldenGlow)">
  <animate attributeName="cy" values="90;60;40" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.7;0.9;0" dur="2.5s" repeatCount="indefinite"/>
</circle>
<circle cx="240" cy="100" r="2" fill="#ffeaa7" opacity="0.4">
  <animate attributeName="cy" values="100;70;50" dur="3s" repeatCount="indefinite" begin="0.5s"/>
  <animate attributeName="opacity" values="0.5;0.8;0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
</circle>
<circle cx="260" cy="105" r="2" fill="#ffeaa7" opacity="0.4">
  <animate attributeName="cy" values="105;75;55" dur="2.8s" repeatCount="indefinite" begin="1s"/>
  <animate attributeName="opacity" values="0.5;0.8;0" dur="2.8s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="230" cy="110" r="1.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="110;80;60" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
  <animate attributeName="opacity" values="0.4;0.7;0" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
</circle>
<circle cx="270" cy="95" r="1.5" fill="#ffd700" opacity="0.3">
  <animate attributeName="cy" values="95;65;45" dur="2.6s" repeatCount="indefinite" begin="0.8s"/>
  <animate attributeName="opacity" values="0.4;0.7;0" dur="2.6s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<!-- Three glowing paths leading outward -->
<!-- Left path (to tower) -->
<path d="M200,190 Q140,200 60,210 Q20,218 0,225" fill="none" stroke="#ffd700" stroke-width="14" stroke-linecap="round" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite"/>
</path>
<path d="M200,190 Q140,200 60,210 Q20,218 0,225" fill="none" stroke="#ffeaa7" stroke-width="6" stroke-linecap="round" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite"/>
</path>
<!-- Center path (to library) -->
<path d="M250,200 Q250,220 250,240 Q250,250 250,260" fill="none" stroke="#ffd700" stroke-width="14" stroke-linecap="round" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" begin="0.4s"/>
</path>
<path d="M250,200 Q250,220 250,240 Q250,250 250,260" fill="none" stroke="#ffeaa7" stroke-width="6" stroke-linecap="round" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" begin="0.4s"/>
</path>
<!-- Right path (to workshop) -->
<path d="M300,190 Q360,200 440,210 Q480,218 500,225" fill="none" stroke="#ffd700" stroke-width="14" stroke-linecap="round" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
</path>
<path d="M300,190 Q360,200 440,210 Q480,218 500,225" fill="none" stroke="#ffeaa7" stroke-width="6" stroke-linecap="round" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
</path>
<!-- Lanterns -->
<rect x="118" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="112" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="114" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.7"/>
<circle cx="120" cy="137" r="12" fill="url(#lanternGlow4)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.8s" repeatCount="indefinite"/>
</circle>
<rect x="378" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="372" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="374" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.7"/>
<circle cx="380" cy="137" r="12" fill="url(#lanternGlow4)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" begin="0.5s"/>
</circle>
</svg>`;

// Scene 5 (complete): Three paths glow golden — same visual as scene 4
STORY_SCENES['town_5'] = STORY_SCENES['town_4'];
