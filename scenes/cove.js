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
</defs>
<rect width="500" height="260" fill="url(#coveBg0)"/>
<!-- Cavern ceiling (stalactites) -->
<polygon points="0,0 0,50 30,35 60,55 90,25 120,50 150,20 180,45 210,15 240,40 270,10 300,38 330,18 360,42 390,12 420,48 450,22 480,45 500,30 500,0" fill="#0e1828"/>
<polygon points="60,0 65,40 70,0" fill="#1a2a3a" opacity="0.7"/>
<polygon points="150,0 155,50 160,0" fill="#1a2a3a" opacity="0.6"/>
<polygon points="300,0 304,45 308,0" fill="#1a2a3a" opacity="0.65"/>
<polygon points="420,0 424,38 428,0" fill="#1a2a3a" opacity="0.7"/>
<!-- Cave walls -->
<path d="M0,50 Q10,80 0,130 L0,260 L0,50 Z" fill="#2a2a3a" opacity="0.8"/>
<path d="M500,40 Q490,90 500,140 L500,260 L500,40 Z" fill="#2a2a3a" opacity="0.8"/>
<!-- Bioluminescent algae patches on walls -->
<ellipse cx="20" cy="80" rx="18" ry="12" fill="#4af5a0" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/></ellipse>
<circle cx="20" cy="80" r="20" fill="url(#algaeGlow0)" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite"/></circle>
<ellipse cx="480" cy="70" rx="16" ry="10" fill="#4af5a0" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="3.5s" repeatCount="indefinite" begin="1s"/></ellipse>
<circle cx="480" cy="70" r="18" fill="url(#algaeGlow0)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<ellipse cx="40" cy="140" rx="14" ry="8" fill="#7ac5e8" opacity="0.06"><animate attributeName="opacity" values="0.04;0.09;0.04" dur="5s" repeatCount="indefinite" begin="0.5s"/></ellipse>
<circle cx="40" cy="140" r="16" fill="url(#blueGlow0)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" begin="0.5s"/></circle>
<ellipse cx="470" cy="130" rx="15" ry="9" fill="#7ac5e8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.08;0.03" dur="4.5s" repeatCount="indefinite" begin="2s"/></ellipse>
<circle cx="470" cy="130" r="17" fill="url(#blueGlow0)" opacity="0.3"><animate attributeName="opacity" values="0.18;0.38;0.18" dur="4.5s" repeatCount="indefinite" begin="2s"/></circle>
<!-- Ceiling algae -->
<ellipse cx="100" cy="30" rx="20" ry="6" fill="#4af5a0" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="6s" repeatCount="indefinite"/></ellipse>
<ellipse cx="250" cy="18" rx="25" ry="7" fill="#7ac5e8" opacity="0.05"><animate attributeName="opacity" values="0.03;0.08;0.03" dur="5s" repeatCount="indefinite" begin="1.5s"/></ellipse>
<ellipse cx="400" cy="25" rx="18" ry="5" fill="#4af5a0" opacity="0.06"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4.8s" repeatCount="indefinite" begin="0.8s"/></ellipse>
<!-- Rocky ledges -->
<path d="M50,170 L120,165 L130,172 L55,178 Z" fill="#3a3a4a"/>
<path d="M50,178 L55,178 L130,172 L130,180 L50,185 Z" fill="#2a2a3a"/>
<path d="M370,155 L450,150 L460,158 L375,163 Z" fill="#3a3a4a"/>
<path d="M370,163 L375,163 L460,158 L460,165 L370,170 Z" fill="#2a2a3a"/>
<path d="M140,200 L210,195 L218,202 L145,208 Z" fill="#3a3a4a"/>
<path d="M140,208 L145,208 L218,202 L218,209 L140,215 Z" fill="#2a2a3a"/>
<!-- Treasure chests on ledges -->
<!-- Chest 1 (left ledge) -->
<rect x="72" y="155" width="22" height="14" rx="2" fill="#8a6a20"/>
<rect x="72" y="155" width="22" height="7" rx="2" fill="#a07a28"/>
<rect x="81" y="153" width="4" height="4" rx="1" fill="#ffd700" opacity="0.8"/>
<line x1="72" y1="162" x2="94" y2="162" stroke="#6a5018" stroke-width="1"/>
<!-- Chest 1 padlock -->
<circle cx="83" cy="166" r="3" fill="none" stroke="#ffd700" stroke-width="1.2" opacity="0.7"/>
<rect x="81" y="166" width="4" height="3" rx="0.5" fill="#ffd700" opacity="0.7"/>
<!-- Chest 2 (right ledge) -->
<rect x="398" y="140" width="24" height="15" rx="2" fill="#8a6a20"/>
<rect x="398" y="140" width="24" height="7" rx="2" fill="#a07a28"/>
<rect x="408" y="138" width="4" height="4" rx="1" fill="#ffd700" opacity="0.8"/>
<line x1="398" y1="147" x2="422" y2="147" stroke="#6a5018" stroke-width="1"/>
<circle cx="410" cy="152" r="3" fill="none" stroke="#ffd700" stroke-width="1.2" opacity="0.7"/>
<rect x="408" y="152" width="4" height="3" rx="0.5" fill="#ffd700" opacity="0.7"/>
<!-- Chest 3 (lower ledge, smaller) -->
<rect x="160" y="185" width="18" height="12" rx="2" fill="#7a5a18"/>
<rect x="160" y="185" width="18" height="6" rx="2" fill="#8a6a22"/>
<rect x="167" y="183" width="3" height="3" rx="1" fill="#ffd700" opacity="0.7"/>
<circle cx="169" cy="194" r="2.5" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
<!-- Cave floor -->
<path d="M0,230 Q60,222 130,225 Q200,228 250,220 Q320,215 400,222 Q460,228 500,225 L500,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M0,240 Q100,232 200,236 Q300,240 400,234 Q460,238 500,235 L500,260 L0,260 Z" fill="#1a2030"/>
<!-- Water on floor (tidal pools) -->
<ellipse cx="250" cy="245" rx="80" ry="10" fill="#1a3a5a" opacity="0.6"/>
<ellipse cx="250" cy="245" rx="80" ry="10" fill="url(#waterShimmer0)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/></ellipse>
<ellipse cx="380" cy="248" rx="40" ry="6" fill="#1a3a5a" opacity="0.5"/>
<ellipse cx="380" cy="248" rx="40" ry="6" fill="url(#waterShimmer0)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.5s" repeatCount="indefinite" begin="0.7s"/></ellipse>
<!-- Scattered glow particles -->
<circle cx="100" cy="100" r="1.5" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="200" cy="60" r="1" fill="#7ac5e8" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="350" cy="80" r="1.5" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.15;0.65;0.15" dur="5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="450" cy="100" r="1" fill="#7ac5e8" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.8s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="160" cy="45" r="1" fill="#4af5a0" filter="url(#coveGlow0)"><animate attributeName="opacity" values="0.1;0.55;0.1" dur="4.5s" repeatCount="indefinite" begin="1.2s"/></circle>
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
</defs>
<rect width="500" height="260" fill="url(#coveBg1)"/>
<!-- Cavern back wall -->
<path d="M0,0 L0,180 Q50,170 100,175 Q200,160 250,155 Q300,160 400,175 Q450,170 500,180 L500,0 Z" fill="#0e1828"/>
<polygon points="0,0 0,50 30,35 60,55 90,25 120,50 150,20 180,45 210,15 240,40 270,10 300,38 330,18 360,42 390,12 420,48 450,22 480,45 500,30 500,0" fill="#0a1420"/>
<!-- Stalactites -->
<polygon points="120,0 125,55 130,0" fill="#1a2a3a" opacity="0.7"/>
<polygon points="250,0 254,48 258,0" fill="#1a2a3a" opacity="0.6"/>
<polygon points="380,0 384,42 388,0" fill="#1a2a3a" opacity="0.65"/>
<!-- Algae on walls -->
<ellipse cx="30" cy="100" rx="20" ry="14" fill="#4af5a0" opacity="0.06"><animate attributeName="opacity" values="0.04;0.09;0.04" dur="4s" repeatCount="indefinite"/></ellipse>
<circle cx="30" cy="100" r="22" fill="url(#algaeGlow1)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="4s" repeatCount="indefinite"/></circle>
<ellipse cx="475" cy="95" rx="18" ry="12" fill="#7ac5e8" opacity="0.05"><animate attributeName="opacity" values="0.03;0.08;0.03" dur="5s" repeatCount="indefinite" begin="1s"/></ellipse>
<circle cx="475" cy="95" r="20" fill="url(#algaeGlow1)" opacity="0.3"><animate attributeName="opacity" values="0.18;0.4;0.18" dur="5s" repeatCount="indefinite" begin="1s"/></circle>
<ellipse cx="100" cy="60" rx="15" ry="8" fill="#4af5a0" opacity="0.05"><animate attributeName="opacity" values="0.03;0.08;0.03" dur="4.5s" repeatCount="indefinite" begin="0.5s"/></ellipse>
<ellipse cx="400" cy="55" rx="16" ry="7" fill="#7ac5e8" opacity="0.04"><animate attributeName="opacity" values="0.02;0.07;0.02" dur="5.5s" repeatCount="indefinite" begin="1.5s"/></ellipse>
<!-- Rocky ledge behind pool -->
<path d="M150,170 Q200,155 250,152 Q300,155 350,170 L360,180 L140,180 Z" fill="#3a3a4a"/>
<path d="M140,180 L360,180 L365,190 L135,190 Z" fill="#2a2a3a"/>
<!-- Crystal tidal pool -->
<ellipse cx="250" cy="215" rx="120" ry="35" fill="#0a2a40"/>
<ellipse cx="250" cy="215" rx="120" ry="35" fill="url(#crystalWater)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.35" dur="4s" repeatCount="indefinite"/></ellipse>
<ellipse cx="250" cy="215" rx="120" ry="35" fill="url(#poolGlow1)"/>
<!-- Pool edge rocks -->
<path d="M125,210 Q130,200 140,198 Q145,205 140,215 Z" fill="#3a3a4a"/>
<path d="M355,205 Q360,195 370,195 Q375,202 370,212 Z" fill="#3a3a4a"/>
<path d="M145,225 Q148,218 158,217 Q160,225 155,232 Z" fill="#2a2a3a" opacity="0.8"/>
<path d="M340,228 Q345,220 352,218 Q356,226 350,234 Z" fill="#2a2a3a" opacity="0.8"/>
<!-- Large treasure chest (half submerged) -->
<rect x="200" y="165" width="100" height="50" rx="4" fill="#8a6a20"/>
<rect x="200" y="165" width="100" height="24" rx="4" fill="#a07a28"/>
<rect x="200" y="165" width="100" height="24" rx="4" fill="#b08a30" opacity="0.3"/>
<!-- Chest bands -->
<line x1="200" y1="189" x2="300" y2="189" stroke="#6a5018" stroke-width="2"/>
<line x1="200" y1="200" x2="300" y2="200" stroke="#6a5018" stroke-width="1.2"/>
<!-- Chest clasp -->
<rect x="243" y="162" width="14" height="6" rx="2" fill="#ffd700" opacity="0.9"/>
<!-- Large golden padlock -->
<path d="M244,196 Q244,186 250,184 Q256,186 256,196 Z" fill="none" stroke="#ffd700" stroke-width="2.5" opacity="0.9"/>
<rect x="241" y="196" width="18" height="13" rx="2.5" fill="#ffd700" opacity="0.85"/>
<circle cx="250" cy="202" r="2.5" fill="#2a2a3a"/>
<!-- Lock glow -->
<circle cx="250" cy="198" r="35" fill="url(#lockGlow1)" opacity="0.6"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/></circle>
<!-- Inscription on chest face -->
<g filter="url(#lockTextGlow)">
  <text x="250" y="137" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="10" opacity="0.9" letter-spacing="0.5">Trap set up for a</text>
  <text x="250" y="150" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="10" opacity="0.9" letter-spacing="0.5">piece of the whole (4)</text>
</g>
<!-- Water over bottom of chest (half submerged effect) -->
<ellipse cx="250" cy="213" rx="45" ry="8" fill="#1a4a6a" opacity="0.5"/>
<ellipse cx="250" cy="213" rx="45" ry="8" fill="#7ac5e8" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite"/></ellipse>
<!-- Water ripples around chest -->
<ellipse cx="250" cy="216" rx="50" ry="4" fill="none" stroke="#7ac5e8" stroke-width="0.5" opacity="0.2"><animate attributeName="rx" values="50;55;50" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.2;0.05;0.2" dur="4s" repeatCount="indefinite"/></ellipse>
<ellipse cx="250" cy="218" rx="55" ry="5" fill="none" stroke="#7ac5e8" stroke-width="0.5" opacity="0.15"><animate attributeName="rx" values="55;62;55" dur="5s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.15;0.03;0.15" dur="5s" repeatCount="indefinite" begin="1s"/></ellipse>
<!-- Cave floor edges -->
<path d="M0,230 Q60,240 130,235 L130,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M370,235 Q430,240 500,232 L500,260 L370,260 Z" fill="#2a2a3a"/>
<rect x="0" y="250" width="500" height="10" fill="#1a2030" opacity="0.6"/>
<!-- Floating glow particles -->
<circle cx="180" cy="130" r="1.5" fill="#4af5a0" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="320" cy="110" r="1" fill="#7ac5e8" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.15;0.6;0.15" dur="3.5s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="80" cy="160" r="1" fill="#4af5a0" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.45;0.1" dur="5s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="420" cy="150" r="1.5" fill="#7ac5e8" filter="url(#coveGlow1)"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="4.2s" repeatCount="indefinite" begin="2s"/></circle>
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
</defs>
<rect width="500" height="260" fill="url(#coveBg3)"/>
<!-- Golden light washing the scene -->
<circle cx="250" cy="170" r="150" fill="url(#chestLight3)"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/></circle>
<!-- Cavern back wall -->
<path d="M0,0 L0,180 Q50,170 100,175 Q200,160 250,155 Q300,160 400,175 Q450,170 500,180 L500,0 Z" fill="#0e1828"/>
<polygon points="0,0 0,50 30,35 60,55 90,25 120,50 150,20 180,45 210,15 240,40 270,10 300,38 330,18 360,42 390,12 420,48 450,22 480,45 500,30 500,0" fill="#0a1420"/>
<!-- Stalactites -->
<polygon points="120,0 125,55 130,0" fill="#1a2a3a" opacity="0.7"/>
<polygon points="250,0 254,48 258,0" fill="#1a2a3a" opacity="0.6"/>
<polygon points="380,0 384,42 388,0" fill="#1a2a3a" opacity="0.65"/>
<!-- Algae on walls (dimmer, outshone by chest light) -->
<ellipse cx="30" cy="100" rx="20" ry="14" fill="#4af5a0" opacity="0.04"><animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite"/></ellipse>
<circle cx="30" cy="100" r="22" fill="url(#algaeGlow3)" opacity="0.2"/>
<ellipse cx="475" cy="95" rx="18" ry="12" fill="#7ac5e8" opacity="0.03"><animate attributeName="opacity" values="0.02;0.05;0.02" dur="5s" repeatCount="indefinite" begin="1s"/></ellipse>
<!-- Rocky ledge -->
<path d="M150,170 Q200,155 250,152 Q300,155 350,170 L360,180 L140,180 Z" fill="#3a3a4a"/>
<path d="M140,180 L360,180 L365,190 L135,190 Z" fill="#2a2a3a"/>
<!-- Crystal tidal pool -->
<ellipse cx="250" cy="215" rx="120" ry="35" fill="#0a2a40"/>
<ellipse cx="250" cy="215" rx="120" ry="35" fill="url(#crystalWater3)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.35" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Golden reflection in pool -->
<ellipse cx="250" cy="220" rx="60" ry="15" fill="#ffd700" opacity="0.06"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite"/></ellipse>
<!-- Pool edge rocks -->
<path d="M125,210 Q130,200 140,198 Q145,205 140,215 Z" fill="#3a3a4a"/>
<path d="M355,205 Q360,195 370,195 Q375,202 370,212 Z" fill="#3a3a4a"/>
<!-- Open treasure chest — bottom -->
<rect x="218" y="188" width="64" height="25" rx="3" fill="#8a6a20"/>
<line x1="218" y1="200" x2="282" y2="200" stroke="#6a5018" stroke-width="1.5"/>
<!-- Open lid (tilted back) -->
<path d="M218,188 L220,165 Q222,160 228,158 L272,158 Q278,160 280,165 L282,188 Z" fill="#a07a28"/>
<path d="M220,165 L222,162 Q226,158 232,157 L268,157 Q274,158 278,162 L280,165 L275,168 L225,168 Z" fill="#b08a30" opacity="0.5"/>
<rect x="244" y="156" width="12" height="5" rx="1.5" fill="#ffd700" opacity="0.8"/>
<!-- Relics inside chest -->
<!-- Scroll -->
<rect x="228" y="190" width="12" height="5" rx="2.5" fill="#e8d8a0" opacity="0.8"/>
<circle cx="228" cy="192.5" r="2.5" fill="#e8d8a0" opacity="0.8"/>
<circle cx="240" cy="192.5" r="2.5" fill="#e8d8a0" opacity="0.8"/>
<!-- Gem -->
<polygon points="255,190 260,185 265,190 260,196" fill="#4af5a0" opacity="0.7"/>
<!-- Coin stack -->
<ellipse cx="272" cy="194" rx="5" ry="2" fill="#ffd700" opacity="0.7"/>
<ellipse cx="272" cy="192" rx="5" ry="2" fill="#ffd700" opacity="0.8"/>
<ellipse cx="272" cy="190" rx="5" ry="2" fill="#ffe840" opacity="0.9"/>
<!-- Golden light beams spilling from chest -->
<polygon points="240,185 225,100 235,100" fill="#ffd700" opacity="0.04"><animate attributeName="opacity" values="0.02;0.06;0.02" dur="3s" repeatCount="indefinite"/></polygon>
<polygon points="250,183 245,90 255,90" fill="#ffd700" opacity="0.05"><animate attributeName="opacity" values="0.03;0.08;0.03" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></polygon>
<polygon points="260,185 265,100 275,100" fill="#ffd700" opacity="0.04"><animate attributeName="opacity" values="0.02;0.06;0.02" dur="3.5s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- Water over bottom of chest -->
<ellipse cx="250" cy="213" rx="45" ry="8" fill="#1a4a6a" opacity="0.4"/>
<ellipse cx="250" cy="213" rx="45" ry="8" fill="#ffd700" opacity="0.04"><animate attributeName="opacity" values="0.02;0.06;0.02" dur="3s" repeatCount="indefinite"/></ellipse>
<!-- Cave floor edges -->
<path d="M0,230 Q60,240 130,235 L130,260 L0,260 Z" fill="#2a2a3a"/>
<path d="M370,235 Q430,240 500,232 L500,260 L370,260 Z" fill="#2a2a3a"/>
<rect x="0" y="250" width="500" height="10" fill="#1a2030" opacity="0.6"/>
<!-- Golden particles rising from chest -->
<circle cx="240" cy="170" r="2" fill="#ffd700" opacity="0.5" filter="url(#goldGlow3)"><animate attributeName="cy" values="170;140;110" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0.8;0" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="255" cy="165" r="1.5" fill="#ffd700" opacity="0.4" filter="url(#goldGlow3)"><animate attributeName="cy" values="165;135;105" dur="3.5s" repeatCount="indefinite" begin="0.8s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3.5s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="265" cy="172" r="1.5" fill="#ffd700" opacity="0.3" filter="url(#goldGlow3)"><animate attributeName="cy" values="172;142;112" dur="4.5s" repeatCount="indefinite" begin="1.5s"/><animate attributeName="opacity" values="0.3;0.6;0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/></circle>
<circle cx="248" cy="168" r="1" fill="#ffe840" opacity="0.4" filter="url(#goldGlow3)"><animate attributeName="cy" values="168;138;108" dur="3s" repeatCount="indefinite" begin="0.3s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="260" cy="175" r="2" fill="#ffd700" opacity="0.35" filter="url(#goldGlow3)"><animate attributeName="cy" values="175;145;115" dur="5s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.35;0.65;0" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
<!-- Floating glow particles -->
<circle cx="80" cy="160" r="1" fill="#4af5a0" filter="url(#coveGlow3)"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="420" cy="150" r="1.5" fill="#7ac5e8" filter="url(#coveGlow3)"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="4.2s" repeatCount="indefinite" begin="2s"/></circle>
</svg>`;

// Scene 4 (complete): Cove is yours to explore — reuse the open-chest scene
STORY_SCENES['cove_4'] = STORY_SCENES['cove_3'];
