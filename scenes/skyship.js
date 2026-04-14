// Skyship story scenes — "Simon's Skyship"
// Keys: airship_0 through airship_4

// Scene 0: Boarding the Skyship — blue sky, fluffy clouds, airship from below
STORY_SCENES['airship_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skyBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a8ae8"/><stop offset="50%" stop-color="#5aafe8"/><stop offset="100%" stop-color="#a0d4f8"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#skyBg0)"/>
<!-- Fluffy white clouds -->
<g opacity="0.85">
  <ellipse cx="80" cy="60" rx="50" ry="22" fill="#fff"/>
  <ellipse cx="110" cy="55" rx="35" ry="18" fill="#fff"/>
  <ellipse cx="55" cy="55" rx="30" ry="16" fill="#f8f8ff"/>
  <ellipse cx="400" cy="90" rx="55" ry="24" fill="#fff"/>
  <ellipse cx="435" cy="85" rx="40" ry="20" fill="#f8f8ff"/>
  <ellipse cx="370" cy="85" rx="30" ry="16" fill="#fff"/>
  <ellipse cx="240" cy="40" rx="40" ry="16" fill="#fff" opacity="0.6"/>
</g>
<!-- Wind streaks -->
<g stroke="#fff" stroke-width="1" opacity="0.25">
  <line x1="30" y1="110" x2="120" y2="108"/>
  <line x1="350" y1="130" x2="470" y2="127"/>
  <line x1="150" y1="150" x2="260" y2="148"/>
</g>
<!-- Airship envelope (red and gold striped balloon) -->
<ellipse cx="250" cy="80" rx="110" ry="55" fill="#cc3333"/>
<path d="M160,60 Q250,40 340,60 L340,65 Q250,45 160,65 Z" fill="#e8a820" opacity="0.8"/>
<path d="M150,75 Q250,55 350,75 L350,80 Q250,60 150,80 Z" fill="#e8a820" opacity="0.8"/>
<path d="M155,90 Q250,70 345,90 L345,95 Q250,75 155,95 Z" fill="#e8a820" opacity="0.8"/>
<!-- Wooden gondola/deck -->
<rect x="175" y="165" width="150" height="45" rx="6" fill="#8a6a30"/>
<rect x="180" y="170" width="140" height="35" rx="4" fill="#a07840"/>
<line x1="180" y1="182" x2="320" y2="182" stroke="#8a6a30" stroke-width="1" opacity="0.5"/>
<line x1="180" y1="193" x2="320" y2="193" stroke="#8a6a30" stroke-width="1" opacity="0.5"/>
<!-- Railing posts -->
<rect x="175" y="155" width="3" height="15" rx="1" fill="#6a5020"/>
<rect x="210" y="155" width="3" height="15" rx="1" fill="#6a5020"/>
<rect x="248" y="155" width="3" height="15" rx="1" fill="#6a5020"/>
<rect x="286" y="155" width="3" height="15" rx="1" fill="#6a5020"/>
<rect x="322" y="155" width="3" height="15" rx="1" fill="#6a5020"/>
<line x1="175" y1="158" x2="325" y2="158" stroke="#6a5020" stroke-width="2"/>
<!-- Ropes into balloon -->
<line x1="176" y1="115" x2="176" y2="155" stroke="#8a6a30" stroke-width="2.5"/>
<line x1="211" y1="118" x2="211" y2="155" stroke="#8a6a30" stroke-width="2.5"/>
<line x1="249" y1="120" x2="249" y2="155" stroke="#8a6a30" stroke-width="2.5"/>
<line x1="288" y1="118" x2="288" y2="155" stroke="#8a6a30" stroke-width="2.5"/>
<line x1="323" y1="115" x2="323" y2="155" stroke="#8a6a30" stroke-width="2.5"/>
<!-- Rope ladders -->
<g stroke="#8a7040" stroke-width="1.5">
  <line x1="190" y1="210" x2="188" y2="255"/><line x1="198" y1="210" x2="196" y2="255"/>
  <line x1="189" y1="220" x2="197" y2="220"/><line x1="189" y1="230" x2="197" y2="230"/>
  <line x1="189" y1="240" x2="197" y2="240"/><line x1="188" y1="250" x2="196" y2="250"/>
</g>
<!-- Drifting cloud -->
<ellipse cx="480" cy="160" rx="35" ry="14" fill="#fff" opacity="0.5">
  <animate attributeName="cx" values="500;-40" dur="25s" repeatCount="indefinite"/>
</ellipse>
</svg>`;

// Scene 1: Cabin interior — warm wood, desk with crosswords, lantern, porthole
STORY_SCENES['airship_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="cabinBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a3a18"/><stop offset="100%" stop-color="#3a2210"/>
  </linearGradient>
  <radialGradient id="lanternGlow" cx="85%" cy="30%" r="40%">
    <stop offset="0%" stop-color="#ffcc44" stop-opacity="0.25"/><stop offset="100%" stop-color="#ffcc44" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#cabinBg)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#lanternGlow)"/>
<!-- Wood paneling -->
<g stroke="#4a2a10" stroke-width="1" opacity="0.4">
  <line x1="0" y1="0" x2="0" y2="260"/><line x1="50" y1="0" x2="50" y2="260"/>
  <line x1="100" y1="0" x2="100" y2="260"/><line x1="150" y1="0" x2="150" y2="260"/>
  <line x1="200" y1="0" x2="200" y2="260"/><line x1="250" y1="0" x2="250" y2="260"/>
  <line x1="300" y1="0" x2="300" y2="260"/><line x1="350" y1="0" x2="350" y2="260"/>
  <line x1="400" y1="0" x2="400" y2="260"/><line x1="450" y1="0" x2="450" y2="260"/>
</g>
<!-- Desk -->
<rect x="60" y="150" width="280" height="90" rx="4" fill="#6a4a20"/>
<rect x="65" y="145" width="270" height="8" rx="2" fill="#7a5a28"/>
<rect x="70" y="240" width="8" height="20" fill="#5a3a18"/>
<rect x="322" y="240" width="8" height="20" fill="#5a3a18"/>
<!-- Papers on desk -->
<rect x="80" y="155" width="60" height="75" rx="2" fill="#e8dcc0" transform="rotate(-5,110,192)"/>
<rect x="150" y="158" width="55" height="70" rx="2" fill="#e0d4b8" transform="rotate(3,177,193)"/>
<rect x="215" y="156" width="50" height="72" rx="2" fill="#e8dcc0" transform="rotate(-2,240,192)"/>
<!-- Grid lines on papers -->
<g stroke="#888" stroke-width="0.5" opacity="0.4">
  <line x1="85" y1="165" x2="135" y2="163"/><line x1="85" y1="175" x2="135" y2="173"/>
  <line x1="85" y1="185" x2="135" y2="183"/><line x1="95" y1="158" x2="93" y2="225"/>
  <line x1="110" y1="157" x2="108" y2="224"/><line x1="125" y1="156" x2="123" y2="223"/>
</g>
<!-- Compass on desk -->
<circle cx="290" cy="190" r="18" fill="#b8960a" opacity="0.8"/>
<circle cx="290" cy="190" r="15" fill="#d4b020"/>
<circle cx="290" cy="190" r="12" fill="#f0e8d0"/>
<line x1="290" y1="180" x2="290" y2="200" stroke="#cc2222" stroke-width="1.5"/>
<line x1="280" y1="190" x2="300" y2="190" stroke="#333" stroke-width="1"/>
<text x="290" y="183" text-anchor="middle" fill="#cc2222" font-size="5" font-family="sans-serif">N</text>
<!-- Lantern on wall -->
<rect x="410" y="55" width="20" height="30" rx="4" fill="#b89030"/>
<rect x="413" y="50" width="14" height="8" rx="3" fill="#a08020"/>
<ellipse cx="420" cy="70" rx="7" ry="10" fill="#ffcc44" opacity="0.7">
  <animate attributeName="opacity" values="0.6;0.8;0.5;0.7;0.6" dur="3s" repeatCount="indefinite"/>
</ellipse>
<!-- Porthole -->
<circle cx="430" cy="200" r="25" fill="#2a6ab8"/>
<circle cx="430" cy="200" r="22" fill="#5aafe8"/>
<ellipse cx="425" cy="195" rx="12" ry="6" fill="#fff" opacity="0.5"/>
<circle cx="430" cy="200" r="25" fill="none" stroke="#b89030" stroke-width="4"/>
<line x1="405" y1="200" x2="455" y2="200" stroke="#b89030" stroke-width="2"/>
<line x1="430" y1="175" x2="430" y2="225" stroke="#b89030" stroke-width="2"/>
<!-- Floor -->
<rect x="0" y="245" width="500" height="15" fill="#3a2210"/>
</svg>`;

// Scene 2: Puzzle step — shares cabin scene
STORY_SCENES['airship_2'] = STORY_SCENES['airship_1'];

// Scene 3: Solved — newspaper with crossword and porthole
STORY_SCENES['airship_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="paperBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a3a18"/><stop offset="100%" stop-color="#3a2810"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#paperBg)"/>
<!-- Newspaper page -->
<rect x="60" y="20" width="280" height="220" rx="4" fill="#f0e8d4"/>
<rect x="65" y="25" width="270" height="210" rx="2" fill="#f5f0e0"/>
<text x="200" y="50" text-anchor="middle" fill="#2a2a2a" font-family="'Fredoka One',cursive" font-size="12">THE SKY GAZETTE</text>
<line x1="80" y1="56" x2="320" y2="56" stroke="#aaa" stroke-width="0.5"/>
<!-- Crossword grid -->
<g stroke="#888" stroke-width="0.5">
  <rect x="120" y="70" width="160" height="120" fill="#fff" rx="1"/>
  <line x1="120" y1="90" x2="280" y2="90"/><line x1="120" y1="110" x2="280" y2="110"/>
  <line x1="120" y1="130" x2="280" y2="130"/><line x1="120" y1="150" x2="280" y2="150"/>
  <line x1="120" y1="170" x2="280" y2="170"/>
  <line x1="140" y1="70" x2="140" y2="190"/><line x1="160" y1="70" x2="160" y2="190"/>
  <line x1="180" y1="70" x2="180" y2="190"/><line x1="200" y1="70" x2="200" y2="190"/>
  <line x1="220" y1="70" x2="220" y2="190"/><line x1="240" y1="70" x2="240" y2="190"/>
  <line x1="260" y1="70" x2="260" y2="190"/>
</g>
<!-- Black squares -->
<rect x="120" y="70" width="20" height="20" fill="#333"/>
<rect x="180" y="70" width="20" height="20" fill="#333"/>
<rect x="260" y="90" width="20" height="20" fill="#333"/>
<rect x="120" y="110" width="20" height="20" fill="#333"/>
<rect x="220" y="110" width="20" height="20" fill="#333"/>
<rect x="160" y="130" width="20" height="20" fill="#333"/>
<rect x="240" y="130" width="20" height="20" fill="#333"/>
<!-- Filled letters -->
<text x="210" y="86" fill="#333" font-family="sans-serif" font-size="12" text-anchor="middle">S</text>
<text x="230" y="86" fill="#333" font-family="sans-serif" font-size="12" text-anchor="middle">H</text>
<text x="250" y="86" fill="#333" font-family="sans-serif" font-size="12" text-anchor="middle">I</text>
<text x="270" y="86" fill="#333" font-family="sans-serif" font-size="12" text-anchor="middle">P</text>
<!-- Clue text -->
<text x="80" y="210" fill="#888" font-size="5" font-family="sans-serif">1. Boat hidden in worship, I presume (4)</text>
<text x="80" y="220" fill="#888" font-size="5" font-family="sans-serif">2. Anger found in desire (3)</text>
<!-- Porthole -->
<circle cx="410" cy="130" r="55" fill="#5aafe8"/>
<ellipse cx="400" cy="115" rx="25" ry="12" fill="#fff" opacity="0.7"/>
<ellipse cx="425" cy="140" rx="18" ry="8" fill="#fff" opacity="0.5"/>
<circle cx="410" cy="130" r="55" fill="none" stroke="#b89030" stroke-width="6"/>
<line x1="355" y1="130" x2="465" y2="130" stroke="#b89030" stroke-width="3"/>
<line x1="410" y1="75" x2="410" y2="185" stroke="#b89030" stroke-width="3"/>
<circle cx="370" cy="90" r="2.5" fill="#d4b040"/>
<circle cx="450" cy="90" r="2.5" fill="#d4b040"/>
<circle cx="370" cy="170" r="2.5" fill="#d4b040"/>
<circle cx="450" cy="170" r="2.5" fill="#d4b040"/>
</svg>`;

// Scene 4: Sunset farewell — deck railing, sunset, island far below
STORY_SCENES['airship_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="sunsetBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1a40"/><stop offset="25%" stop-color="#2a4a88"/><stop offset="50%" stop-color="#c87830"/><stop offset="70%" stop-color="#e8a040"/><stop offset="85%" stop-color="#f0c060"/>
  </linearGradient>
  <radialGradient id="sunGlow5" cx="75%" cy="52%" r="20%">
    <stop offset="0%" stop-color="#fff8d0" stop-opacity="0.9"/><stop offset="50%" stop-color="#f0b040" stop-opacity="0.4"/><stop offset="100%" stop-color="#e88020" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#sunsetBg)"/>
<!-- Sun -->
<circle cx="375" cy="135" r="50" fill="url(#sunGlow5)"/>
<circle cx="375" cy="135" r="22" fill="#fff8d0" opacity="0.85"/>
<!-- Stars -->
<circle cx="40" cy="15" r="1.5" fill="#fff" opacity="0.7"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="130" cy="25" r="1" fill="#fff" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="220" cy="10" r="1.5" fill="#fff" opacity="0.6"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<!-- Cloud wisps -->
<ellipse cx="120" cy="130" rx="60" ry="6" fill="#f0c870" opacity="0.3"/>
<ellipse cx="300" cy="140" rx="50" ry="5" fill="#f0c870" opacity="0.25"/>
<!-- Island below -->
<ellipse cx="180" cy="185" rx="45" ry="12" fill="#3a7a38" opacity="0.35"/>
<ellipse cx="175" cy="182" rx="12" ry="6" fill="#2a5a28" opacity="0.25"/>
<ellipse cx="195" cy="180" rx="6" ry="10" fill="#2a6a28" opacity="0.2"/>
<ellipse cx="180" cy="190" rx="65" ry="10" fill="#2a6090" opacity="0.15"/>
<!-- Deck railing -->
<rect x="0" y="220" width="500" height="6" fill="#8a6a30"/>
<rect x="0" y="226" width="500" height="34" fill="#6a4a20"/>
<line x1="0" y1="236" x2="500" y2="236" stroke="#5a3a18" stroke-width="0.8" opacity="0.4"/>
<rect x="30" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="100" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="170" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="240" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="310" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="380" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<rect x="450" y="204" width="4" height="22" rx="1" fill="#6a4a20"/>
<line x1="0" y1="208" x2="500" y2="208" stroke="#7a5a28" stroke-width="2.5"/>
<line x1="0" y1="216" x2="500" y2="216" stroke="#7a5a28" stroke-width="2"/>
</svg>`;
