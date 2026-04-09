// Workshop story scenes — "The Puzzle Workshop"
// Keys: workshop_0 through workshop_4
// DRAFT — for review only

// Scene 0: Workshop interior — gears, crossword grids, puzzle boxes on shelves
STORY_SCENES['workshop_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="100%" stop-color="#c8a855"/>
  </linearGradient>
  <radialGradient id="wsLampGlow" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg0)"/>
<!-- Warm lamp glow -->
<circle cx="250" cy="40" r="140" fill="url(#wsLampGlow)"/>
<!-- Back wall & shelves -->
<rect x="0" y="0" width="500" height="130" fill="#3a2210" opacity="0.5"/>
<line x1="0" y1="130" x2="500" y2="130" stroke="#5a3a1a" stroke-width="2"/>
<!-- Shelf 1 -->
<rect x="20" y="50" width="180" height="4" fill="#6b4e0a"/>
<!-- Shelf 2 -->
<rect x="300" y="50" width="180" height="4" fill="#6b4e0a"/>
<!-- Shelf 3 (lower) -->
<rect x="60" y="95" width="160" height="4" fill="#6b4e0a"/>
<rect x="300" y="95" width="140" height="4" fill="#6b4e0a"/>
<!-- Puzzle boxes on shelves -->
<rect x="30" y="32" width="18" height="18" rx="2" fill="#a0522d" stroke="#c8a855" stroke-width="0.5"/>
<rect x="55" y="36" width="14" height="14" rx="2" fill="#8b4513" stroke="#d4a017" stroke-width="0.5"/>
<rect x="80" y="30" width="20" height="20" rx="2" fill="#b05530" stroke="#c8a855" stroke-width="0.5"/>
<rect x="310" y="34" width="16" height="16" rx="2" fill="#8b4513" stroke="#d4a017" stroke-width="0.5"/>
<rect x="340" y="30" width="22" height="20" rx="2" fill="#a0522d" stroke="#c8a855" stroke-width="0.5"/>
<rect x="380" y="36" width="14" height="14" rx="2" fill="#7a3a10" stroke="#d4a017" stroke-width="0.5"/>
<!-- Crossword grids on shelves -->
<g transform="translate(120,30)">
  <rect width="28" height="20" fill="#f5f0e0" rx="1"/>
  <line x1="7" y1="0" x2="7" y2="20" stroke="#aaa" stroke-width="0.3"/>
  <line x1="14" y1="0" x2="14" y2="20" stroke="#aaa" stroke-width="0.3"/>
  <line x1="21" y1="0" x2="21" y2="20" stroke="#aaa" stroke-width="0.3"/>
  <line x1="0" y1="5" x2="28" y2="5" stroke="#aaa" stroke-width="0.3"/>
  <line x1="0" y1="10" x2="28" y2="10" stroke="#aaa" stroke-width="0.3"/>
  <line x1="0" y1="15" x2="28" y2="15" stroke="#aaa" stroke-width="0.3"/>
  <rect x="0" y="0" width="7" height="5" fill="#333"/>
  <rect x="14" y="10" width="7" height="5" fill="#333"/>
  <rect x="21" y="15" width="7" height="5" fill="#333"/>
</g>
<g transform="translate(440,32)">
  <rect width="24" height="18" fill="#f5f0e0" rx="1"/>
  <line x1="6" y1="0" x2="6" y2="18" stroke="#aaa" stroke-width="0.3"/>
  <line x1="12" y1="0" x2="12" y2="18" stroke="#aaa" stroke-width="0.3"/>
  <line x1="18" y1="0" x2="18" y2="18" stroke="#aaa" stroke-width="0.3"/>
  <line x1="0" y1="6" x2="24" y2="6" stroke="#aaa" stroke-width="0.3"/>
  <line x1="0" y1="12" x2="24" y2="12" stroke="#aaa" stroke-width="0.3"/>
  <rect x="6" y="0" width="6" height="6" fill="#333"/>
  <rect x="12" y="12" width="6" height="6" fill="#333"/>
</g>
<!-- Clue cards in velvet trays on lower shelf -->
<rect x="70" y="78" width="50" height="16" rx="2" fill="#6a1a2a"/>
<rect x="74" y="80" width="12" height="10" rx="1" fill="#f5f0d0" transform="rotate(-5,80,85)"/>
<rect x="88" y="81" width="12" height="10" rx="1" fill="#f0ead0" transform="rotate(3,94,86)"/>
<rect x="102" y="80" width="12" height="10" rx="1" fill="#f5f0d0" transform="rotate(-2,108,85)"/>
<rect x="310" y="78" width="44" height="16" rx="2" fill="#6a1a2a"/>
<rect x="314" y="81" width="10" height="9" rx="1" fill="#f0ead0" transform="rotate(4,319,85)"/>
<rect x="328" y="80" width="10" height="9" rx="1" fill="#f5f0d0" transform="rotate(-3,333,84)"/>
<!-- Floor -->
<rect x="0" y="200" width="500" height="60" fill="#2a1a0c"/>
<rect x="0" y="196" width="500" height="6" fill="#5a3a1a"/>
<!-- Large gear (animated) -->
<g transform="translate(100,170)" filter="url(#wsGlow)">
  <circle cx="0" cy="0" r="28" fill="none" stroke="#888" stroke-width="3" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="10" fill="#666" opacity="0.5"/>
  <g opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
    <rect x="-3" y="-30" width="6" height="8" rx="1" fill="#888"/>
    <rect x="-3" y="22" width="6" height="8" rx="1" fill="#888"/>
    <rect x="-30" y="-3" width="8" height="6" rx="1" fill="#888"/>
    <rect x="22" y="-3" width="8" height="6" rx="1" fill="#888"/>
    <rect x="17" y="-22" width="6" height="8" rx="1" fill="#888" transform="rotate(45,20,-18)"/>
    <rect x="-23" y="14" width="6" height="8" rx="1" fill="#888" transform="rotate(45,-20,18)"/>
    <rect x="14" y="17" width="6" height="8" rx="1" fill="#888" transform="rotate(-45,17,21)"/>
    <rect x="-20" y="-23" width="6" height="8" rx="1" fill="#888" transform="rotate(-45,-17,-19)"/>
  </g>
</g>
<!-- Smaller gear (counter-rotating) -->
<g transform="translate(140,155)" opacity="0.35">
  <circle cx="0" cy="0" r="16" fill="none" stroke="#999" stroke-width="2">
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="6" fill="#777"/>
  <g>
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite"/>
    <rect x="-2" y="-18" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-2" y="13" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-18" y="-2" width="5" height="4" rx="1" fill="#999"/>
    <rect x="13" y="-2" width="5" height="4" rx="1" fill="#999"/>
  </g>
</g>
<!-- Workbench -->
<rect x="180" y="175" width="260" height="8" rx="2" fill="#6b4e0a"/>
<rect x="190" y="183" width="8" height="55" fill="#5a3a1a"/>
<rect x="420" y="183" width="8" height="55" fill="#5a3a1a"/>
<!-- Spinning crossword grid on workbench (animated) -->
<g transform="translate(310,155)">
  <animateTransform attributeName="transform" type="rotate" values="0,310,155;360,310,155" dur="20s" repeatCount="indefinite"/>
  <rect x="-18" y="-14" width="36" height="28" fill="#f5f0e0" rx="1" opacity="0.7"/>
  <line x1="-9" y1="-14" x2="-9" y2="14" stroke="#aaa" stroke-width="0.4"/>
  <line x1="0" y1="-14" x2="0" y2="14" stroke="#aaa" stroke-width="0.4"/>
  <line x1="9" y1="-14" x2="9" y2="14" stroke="#aaa" stroke-width="0.4"/>
  <line x1="-18" y1="-7" x2="18" y2="-7" stroke="#aaa" stroke-width="0.4"/>
  <line x1="-18" y1="0" x2="18" y2="0" stroke="#aaa" stroke-width="0.4"/>
  <line x1="-18" y1="7" x2="18" y2="7" stroke="#aaa" stroke-width="0.4"/>
</g>
<!-- Hanging lamp -->
<line x1="250" y1="0" x2="250" y2="18" stroke="#888" stroke-width="1"/>
<polygon points="240,18 260,18 265,28 235,28" fill="#c8a855" opacity="0.7"/>
<ellipse cx="250" cy="30" rx="16" ry="4" fill="#ffd700" opacity="0.2"><animate attributeName="opacity" values="0.15;0.25;0.15" dur="4s" repeatCount="indefinite"/></ellipse>
</svg>`;

// Scene 1: Cryptic Croc at workbench — large crocodile in tweed waistcoat, spectacles
STORY_SCENES['workshop_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsTweed" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#7a6a4a"/><stop offset="50%" stop-color="#8a7a5a"/><stop offset="100%" stop-color="#6a5a3a"/>
  </linearGradient>
  <radialGradient id="wsWarm" cx="35%" cy="50%" r="45%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.08"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsGlow1"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg1)"/>
<circle cx="200" cy="150" r="180" fill="url(#wsWarm)"/>
<!-- Back wall -->
<rect x="0" y="0" width="500" height="130" fill="#3a2210" opacity="0.5"/>
<line x1="0" y1="130" x2="500" y2="130" stroke="#5a3a1a" stroke-width="2"/>
<!-- Shelf with puzzle boxes -->
<rect x="340" y="50" width="150" height="4" fill="#6b4e0a"/>
<rect x="350" y="32" width="18" height="18" rx="2" fill="#a0522d" stroke="#c8a855" stroke-width="0.5"/>
<rect x="380" y="36" width="14" height="14" rx="2" fill="#8b4513" stroke="#d4a017" stroke-width="0.5"/>
<rect x="410" y="30" width="20" height="20" rx="2" fill="#b05530" stroke="#c8a855" stroke-width="0.5"/>
<rect x="450" y="34" width="16" height="16" rx="2" fill="#8b4513" stroke="#d4a017" stroke-width="0.5"/>
<!-- Floor -->
<rect x="0" y="200" width="500" height="60" fill="#2a1a0c"/>
<rect x="0" y="196" width="500" height="6" fill="#5a3a1a"/>
<!-- Workbench -->
<rect x="30" y="170" width="240" height="8" rx="2" fill="#6b4e0a"/>
<rect x="40" y="178" width="8" height="60" fill="#5a3a1a"/>
<rect x="250" y="178" width="8" height="60" fill="#5a3a1a"/>
<!-- Screwdriver on bench -->
<line x1="60" y1="168" x2="110" y2="164" stroke="#888" stroke-width="3" stroke-linecap="round"/>
<line x1="110" y1="164" x2="128" y2="162" stroke="#d4a017" stroke-width="2" stroke-linecap="round"/>
<!-- Brass machine outline on bench -->
<rect x="150" y="140" width="70" height="30" rx="4" fill="#c8a855" opacity="0.3"/>
<rect x="155" y="145" width="60" height="20" rx="2" fill="#b09840" opacity="0.25"/>
<!-- Cryptic Croc — Round stylized version (Home Decorator style) -->
<g transform="translate(360, 185)">
  <!-- Tail -->
  <path d="M15,20 Q40,30 55,25" fill="none" stroke="#3a8a3a" stroke-width="12" stroke-linecap="round"/>
  <!-- Body (round) -->
  <ellipse cx="0" cy="0" rx="48" ry="42" fill="#3a8a3a"/>
  <!-- Belly -->
  <ellipse cx="0" cy="5" rx="35" ry="30" fill="#8ac48a" opacity="0.8"/>
  <!-- Tweed Waistcoat -->
  <path d="M-45,-15 Q-50,10 -40,35 L40,35 Q50,10 45,-15 Q0,-25 -45,-15 Z" fill="url(#wsTweed)"/>
  <circle cx="0" cy="-5" r="2.5" fill="#c8a855"/>
  <circle cx="0" cy="10" r="2.5" fill="#c8a855"/>
  <circle cx="0" cy="25" r="2.5" fill="#c8a855"/>
  <!-- Head (round) -->
  <ellipse cx="-5" cy="-55" rx="35" ry="32" fill="#3a8a3a"/>
  <!-- Snout -->
  <ellipse cx="-30" cy="-45" rx="25" ry="14" fill="#4a9a4a"/>
  <path d="-45,-38 Q-30,-34 -15,-38" fill="none" stroke="#2a6a2a" stroke-width="1.5"/>
  <circle cx="-38" cy="-48" r="2" fill="#2a4a1a"/>
  <circle cx="-32" cy="-49" r="2" fill="#2a4a1a"/>
  <!-- Eyes (large, round) -->
  <circle cx="-15" cy="-68" r="11" fill="#f0ece0"/>
  <circle cx="15" cy="-65" r="11" fill="#f0ece0"/>
  <circle cx="-15" cy="-68" r="6" fill="#2c3e50"/>
  <circle cx="15" cy="-65" r="6" fill="#2c3e50"/>
  <circle cx="-18" cy="-72" r="2.5" fill="#fff" opacity="0.9"/>
  <circle cx="12" cy="-69" r="2.5" fill="#fff" opacity="0.9"/>
  <!-- Spectacles -->
  <g transform="translate(0, -66)" stroke="#c8a855" stroke-width="1.8" fill="none">
    <circle cx="-15" cy="0" r="14" opacity="0.7"/>
    <circle cx="15" cy="3" r="14" opacity="0.7"/>
    <line x1="-1" y1="1" x2="1" y2="1.5"/>
  </g>
  <!-- Top Hat -->
  <g transform="translate(0, -95)">
    <rect x="-26" y="0" width="52" height="10" rx="3" fill="#2c3e50"/>
    <rect x="-18" y="-22" width="36" height="22" rx="3" fill="#2c3e50"/>
    <rect x="-18" y="-12" width="36" height="5" fill="#c0a040"/>
  </g>
  <!-- Arm reaching to workbench -->
  <path d="M-40,0 Q-80,-5 -115,-15" fill="none" stroke="#3a8a3a" stroke-width="10" stroke-linecap="round"/>
  <path d="M-115,-15 Q-125,-18 -128,-14" fill="none" stroke="#4a9a4a" stroke-width="8" stroke-linecap="round"/>
  <!-- Arm posing -->
  <path d="M45,10 Q65,15 70,35" fill="none" stroke="#3a8a3a" stroke-width="10" stroke-linecap="round"/>
  <!-- Legs -->
  <rect x="-30" y="35" width="12" height="25" rx="4" fill="#3a8a3a"/>
  <rect x="15" y="35" width="12" height="25" rx="4" fill="#3a8a3a"/>
</g>
<!-- Hanging lamp -->
<line x1="150" y1="0" x2="150" y2="18" stroke="#888" stroke-width="1"/>
<polygon points="140,18 160,18 165,28 135,28" fill="#c8a855" opacity="0.6"/>
<ellipse cx="150" cy="30" rx="14" ry="3" fill="#ffd700" opacity="0.15"><animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite"/></ellipse>
</svg>`;

// Scene 2: Anagram Engine — brass machine with letter wheels, clue on plate
STORY_SCENES['workshop_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="50%" stop-color="#c8a855"/><stop offset="100%" stop-color="#b08a30"/>
  </linearGradient>
  <radialGradient id="wsMachGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsPlateGlow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg2)"/>
<!-- Back wall -->
<rect x="0" y="0" width="500" height="130" fill="#3a2210" opacity="0.5"/>
<line x1="0" y1="130" x2="500" y2="130" stroke="#5a3a1a" stroke-width="2"/>
<!-- Floor -->
<rect x="0" y="200" width="500" height="60" fill="#2a1a0c"/>
<rect x="0" y="196" width="500" height="6" fill="#5a3a1a"/>
<!-- Workbench -->
<rect x="60" y="168" width="380" height="8" rx="2" fill="#6b4e0a"/>
<rect x="70" y="176" width="8" height="60" fill="#5a3a1a"/>
<rect x="420" y="176" width="8" height="60" fill="#5a3a1a"/>
<!-- Anagram Engine — large brass machine -->
<rect x="130" y="95" width="240" height="73" rx="6" fill="url(#wsBrass2)"/>
<rect x="135" y="100" width="230" height="63" rx="4" fill="#b09840" opacity="0.6"/>
<!-- Machine rivets -->
<circle cx="140" cy="105" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="360" cy="105" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="140" cy="155" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="360" cy="155" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<!-- Letter wheels (5 wheels for BEACH) — animated spinning -->
<g transform="translate(170,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#c8a855" stroke-width="1"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">
    B<animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
  </text>
</g>
<g transform="translate(210,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#c8a855" stroke-width="1"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">
    E<animate attributeName="opacity" values="1;0;1" dur="2.3s" repeatCount="indefinite" begin="0.2s"/>
  </text>
</g>
<g transform="translate(250,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#c8a855" stroke-width="1"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">
    A<animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
  </text>
</g>
<g transform="translate(290,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#c8a855" stroke-width="1"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">
    C<animate attributeName="opacity" values="1;0;1" dur="2.1s" repeatCount="indefinite" begin="0.8s"/>
  </text>
</g>
<g transform="translate(330,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#c8a855" stroke-width="1"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">
    H<animate attributeName="opacity" values="1;0;1" dur="1.9s" repeatCount="indefinite" begin="0.4s"/>
  </text>
</g>
<!-- Brass clue plate below wheels -->
<rect x="160" y="150" width="180" height="24" rx="3" fill="#c8a855" stroke="#d4a017" stroke-width="1"/>
<rect x="165" y="153" width="170" height="18" rx="2" fill="#b09840" opacity="0.5"/>
<g filter="url(#wsPlateGlow)">
  <text x="250" y="166" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="8" letter-spacing="0.3">CLUE: Rearrange letters</text>
</g>
<!-- Machine gears (left side, animated) -->
<g transform="translate(118,130)">
  <circle cx="0" cy="0" r="14" fill="none" stroke="#888" stroke-width="2" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="5" fill="#777" opacity="0.5"/>
  <g opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
    <rect x="-2" y="-16" width="4" height="5" rx="1" fill="#888"/>
    <rect x="-2" y="11" width="4" height="5" rx="1" fill="#888"/>
    <rect x="-16" y="-2" width="5" height="4" rx="1" fill="#888"/>
    <rect x="11" y="-2" width="5" height="4" rx="1" fill="#888"/>
  </g>
</g>
<!-- Machine gears (right side, counter-rotate) -->
<g transform="translate(382,130)">
  <circle cx="0" cy="0" r="14" fill="none" stroke="#888" stroke-width="2" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="5" fill="#777" opacity="0.5"/>
  <g opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="6s" repeatCount="indefinite"/>
    <rect x="-2" y="-16" width="4" height="5" rx="1" fill="#888"/>
    <rect x="-2" y="11" width="4" height="5" rx="1" fill="#888"/>
    <rect x="-16" y="-2" width="5" height="4" rx="1" fill="#888"/>
    <rect x="11" y="-2" width="5" height="4" rx="1" fill="#888"/>
  </g>
</g>
<!-- Machine glow -->
<ellipse cx="250" cy="130" rx="130" ry="50" fill="url(#wsMachGlow)"/>
<!-- Cryptic Croc — Round stylized version (Home Decorator style) -->
<g transform="translate(75, 185)">
  <!-- Tail -->
  <path d="M-15,20 Q-40,30 -55,25" fill="none" stroke="#3a8a3a" stroke-width="10" stroke-linecap="round" opacity="0.8"/>
  <!-- Body (round) -->
  <ellipse cx="0" cy="0" rx="42" ry="38" fill="#3a8a3a" opacity="0.9"/>
  <!-- Belly -->
  <ellipse cx="0" cy="5" rx="30" ry="26" fill="#8ac48a" opacity="0.7"/>
  <!-- Tweed Waistcoat (simplified for distance) -->
  <path d="M-38,-12 Q-42,10 -35,30 L35,30 Q42,10 38,-12 Q0,-20 -38,-12 Z" fill="#7a6a4a" opacity="0.8"/>
  <circle cx="0" cy="-2" r="2" fill="#c8a855" opacity="0.8"/>
  <circle cx="0" cy="10" r="2" fill="#c8a855" opacity="0.8"/>
  <!-- Head (round) -->
  <ellipse cx="5" cy="-48" rx="30" ry="28" fill="#3a8a3a" opacity="0.9"/>
  <!-- Snout (facing right) -->
  <ellipse cx="28" cy="-40" rx="22" ry="12" fill="#4a9a4a" opacity="0.9"/>
  <!-- Eyes -->
  <circle cx="0" cy="-58" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="20" cy="-56" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="0" cy="-58" r="5" fill="#2c3e50" opacity="0.9"/>
  <circle cx="20" cy="-56" r="5" fill="#2c3e50" opacity="0.9"/>
  <!-- Spectacles -->
  <g transform="translate(10, -56)" stroke="#c8a855" stroke-width="1.2" fill="none" opacity="0.7">
    <circle cx="-10" cy="0" r="12"/>
    <circle cx="10" cy="2" r="12"/>
  </g>
  <!-- Top Hat -->
  <g transform="translate(5, -82)">
    <rect x="-22" y="0" width="44" height="8" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-18" width="30" height="18" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-10" width="30" height="4" fill="#c0a040"/>
  </g>
  <!-- Arm reaching right to machine -->
  <path d="M35,0 Q60,0 85,-15" fill="none" stroke="#3a8a3a" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
  <path d="M85,-15 Q92,-18 95,-14" fill="none" stroke="#4a9a4a" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
</g>
</svg>`;

// Scene 3: Machine clicks, brass plate with coordinates slides out
STORY_SCENES['workshop_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="50%" stop-color="#c8a855"/><stop offset="100%" stop-color="#b08a30"/>
  </linearGradient>
  <radialGradient id="wsSolveGlow" cx="50%" cy="60%" r="40%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsGoldGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg3)"/>
<circle cx="250" cy="160" r="160" fill="url(#wsSolveGlow)"/>
<!-- Back wall -->
<rect x="0" y="0" width="500" height="130" fill="#3a2210" opacity="0.5"/>
<line x1="0" y1="130" x2="500" y2="130" stroke="#5a3a1a" stroke-width="2"/>
<!-- Floor -->
<rect x="0" y="200" width="500" height="60" fill="#2a1a0c"/>
<rect x="0" y="196" width="500" height="6" fill="#5a3a1a"/>
<!-- Workbench -->
<rect x="60" y="168" width="380" height="8" rx="2" fill="#6b4e0a"/>
<rect x="70" y="176" width="8" height="60" fill="#5a3a1a"/>
<rect x="420" y="176" width="8" height="60" fill="#5a3a1a"/>
<!-- Anagram Engine — solved, letters locked -->
<rect x="130" y="95" width="240" height="73" rx="6" fill="url(#wsBrass3)"/>
<rect x="135" y="100" width="230" height="63" rx="4" fill="#b09840" opacity="0.6"/>
<!-- Rivets -->
<circle cx="140" cy="105" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="360" cy="105" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="140" cy="155" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<circle cx="360" cy="155" r="2" fill="#a08830" stroke="#8a7020" stroke-width="0.5"/>
<!-- Letter wheels — locked on BEACH -->
<g transform="translate(170,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#ffd700" stroke-width="1.5"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">B</text>
</g>
<g transform="translate(210,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#ffd700" stroke-width="1.5"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">E</text>
</g>
<g transform="translate(250,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#ffd700" stroke-width="1.5"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">A</text>
</g>
<g transform="translate(290,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#ffd700" stroke-width="1.5"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">C</text>
</g>
<g transform="translate(330,118)">
  <rect x="-12" y="-15" width="24" height="30" rx="3" fill="#8a7020" stroke="#ffd700" stroke-width="1.5"/>
  <text x="0" y="5" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="16" font-weight="bold">H</text>
</g>
<!-- Gears turning (both sides, animated) -->
<g transform="translate(118,130)">
  <circle cx="0" cy="0" r="14" fill="none" stroke="#999" stroke-width="2" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="5" fill="#888" opacity="0.5"/>
  <g opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
    <rect x="-2" y="-16" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-2" y="11" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-16" y="-2" width="5" height="4" rx="1" fill="#999"/>
    <rect x="11" y="-2" width="5" height="4" rx="1" fill="#999"/>
  </g>
</g>
<g transform="translate(382,130)">
  <circle cx="0" cy="0" r="14" fill="none" stroke="#999" stroke-width="2" opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="5" fill="#888" opacity="0.5"/>
  <g opacity="0.5">
    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite"/>
    <rect x="-2" y="-16" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-2" y="11" width="4" height="5" rx="1" fill="#999"/>
    <rect x="-16" y="-2" width="5" height="4" rx="1" fill="#999"/>
    <rect x="11" y="-2" width="5" height="4" rx="1" fill="#999"/>
  </g>
</g>
<!-- Brass coordinates plate sliding out (animated) -->
<g filter="url(#wsGoldGlow)">
  <rect x="190" y="168" width="120" height="22" rx="3" fill="#c8a855" stroke="#d4a017" stroke-width="1">
    <animate attributeName="y" values="155;168" dur="1.5s" fill="freeze"/>
    <animate attributeName="opacity" values="0;1" dur="1s" fill="freeze"/>
  </rect>
  <text x="250" y="183" text-anchor="middle" fill="#3a2210" font-family="monospace" font-size="9" font-weight="bold" letter-spacing="0.5">
    COORDINATES: SOUTH
    <animate attributeName="opacity" values="0;1" dur="1.5s" fill="freeze"/>
  </text>
</g>
<!-- Cryptic Croc — Round stylized version (Home Decorator style) -->
<g transform="translate(440, 185)">
  <!-- Tail -->
  <path d="M15,20 Q40,30 55,25" fill="none" stroke="#3a8a3a" stroke-width="10" stroke-linecap="round" opacity="0.8"/>
  <!-- Body (round) -->
  <ellipse cx="0" cy="0" rx="42" ry="38" fill="#3a8a3a" opacity="0.9"/>
  <!-- Belly -->
  <ellipse cx="0" cy="5" rx="30" ry="26" fill="#8ac48a" opacity="0.7"/>
  <!-- Tweed Waistcoat -->
  <path d="M-38,-12 Q-42,10 -35,30 L35,30 Q42,10 38,-12 Q0,-20 -38,-12 Z" fill="#7a6a4a" opacity="0.7"/>
  <circle cx="0" cy="-2" r="2" fill="#c8a855" opacity="0.7"/>
  <circle cx="0" cy="8" r="2" fill="#c8a855" opacity="0.7"/>
  <!-- Head (round, watching intently) -->
  <ellipse cx="-5" cy="-48" rx="30" ry="28" fill="#3a8a3a" opacity="0.9"/>
  <!-- Snout (facing left) -->
  <ellipse cx="-28" cy="-40" rx="22" ry="12" fill="#4a9a4a" opacity="0.9"/>
  <!-- Eyes -->
  <circle cx="-20" cy="-56" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="0" cy="-58" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="-20" cy="-56" r="5" fill="#2c3e50" opacity="0.9"/>
  <circle cx="0" cy="-58" r="5" fill="#2c3e50" opacity="0.9"/>
  <!-- Spectacles -->
  <g transform="translate(-10, -56)" stroke="#c8a855" stroke-width="1.2" fill="none" opacity="0.6">
    <circle cx="-10" cy="2" r="12"/>
    <circle cx="10" cy="0" r="12"/>
  </g>
  <!-- Top Hat -->
  <g transform="translate(-5, -82)">
    <rect x="-22" y="0" width="44" height="8" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-18" width="30" height="18" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-10" width="30" height="4" fill="#c0a040"/>
  </g>
  <!-- Arm held in thought -->
  <path d="M-35,5 Q-55,10 -60,25" fill="none" stroke="#3a8a3a" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
</g>
<!-- Spark particles from machine -->
<circle cx="200" cy="95" r="1.5" fill="#ffd700" opacity="0.6"><animate attributeName="cy" values="95;80;65" dur="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0.9;0" dur="1.5s" repeatCount="indefinite"/></circle>
<circle cx="250" cy="92" r="1" fill="#ffa040" opacity="0.5"><animate attributeName="cy" values="92;75;58" dur="2s" repeatCount="indefinite" begin="0.3s"/><animate attributeName="opacity" values="0.5;0.8;0" dur="2s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="300" cy="94" r="1.5" fill="#ffd700" opacity="0.4"><animate attributeName="cy" values="94;78;62" dur="1.8s" repeatCount="indefinite" begin="0.7s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="1.8s" repeatCount="indefinite" begin="0.7s"/></circle>
</svg>`;

// Scene 4: Anagram Engine projects golden beam southward to coastline
STORY_SCENES['workshop_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a1a0c"/><stop offset="40%" stop-color="#3a2210"/><stop offset="100%" stop-color="#1a1208"/>
  </linearGradient>
  <linearGradient id="wsBeam" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.6"/><stop offset="50%" stop-color="#ffa040" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.1"/>
  </linearGradient>
  <radialGradient id="wsBeamSource" cx="30%" cy="50%" r="30%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wsCoast" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a8ab5"/><stop offset="100%" stop-color="#2a6a95"/>
  </linearGradient>
  <filter id="wsBeamGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg4)"/>
<!-- Machine glow source -->
<circle cx="120" cy="130" r="100" fill="url(#wsBeamSource)"/>
<!-- Back wall fading to vista -->
<rect x="0" y="0" width="200" height="130" fill="#3a2210" opacity="0.5"/>
<path d="M200,0 L200,130 L500,130 L500,0 Z" fill="#1a2a3a" opacity="0.3"/>
<line x1="0" y1="130" x2="200" y2="130" stroke="#5a3a1a" stroke-width="2"/>
<!-- Floor -->
<rect x="0" y="200" width="250" height="60" fill="#2a1a0c"/>
<rect x="0" y="196" width="250" height="6" fill="#5a3a1a"/>
<!-- Distant coastline (right side, through window/opening) -->
<rect x="250" y="180" width="250" height="80" fill="url(#wsCoast)" opacity="0.4"/>
<path d="M250,200 Q300,192 350,195 Q400,190 450,198 Q475,195 500,200 L500,260 L250,260 Z" fill="#c8b870" opacity="0.3"/>
<path d="M350,200 Q380,196 420,198 Q460,194 500,200 L500,210 Q460,204 420,208 Q380,206 350,210 Z" fill="#e0d090" opacity="0.2"/>
<!-- Simplified machine (left side) -->
<rect x="40" y="100" width="140" height="65" rx="5" fill="#c8a855" opacity="0.8"/>
<rect x="45" y="105" width="130" height="55" rx="3" fill="#b09840" opacity="0.5"/>
<!-- Letter wheels showing BEACH -->
<g transform="translate(65,128)">
  <rect x="-8" y="-10" width="16" height="20" rx="2" fill="#8a7020" stroke="#ffd700" stroke-width="1"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="11" font-weight="bold">B</text>
</g>
<g transform="translate(85,128)">
  <rect x="-8" y="-10" width="16" height="20" rx="2" fill="#8a7020" stroke="#ffd700" stroke-width="1"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="11" font-weight="bold">E</text>
</g>
<g transform="translate(105,128)">
  <rect x="-8" y="-10" width="16" height="20" rx="2" fill="#8a7020" stroke="#ffd700" stroke-width="1"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="11" font-weight="bold">A</text>
</g>
<g transform="translate(125,128)">
  <rect x="-8" y="-10" width="16" height="20" rx="2" fill="#8a7020" stroke="#ffd700" stroke-width="1"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="11" font-weight="bold">C</text>
</g>
<g transform="translate(145,128)">
  <rect x="-8" y="-10" width="16" height="20" rx="2" fill="#8a7020" stroke="#ffd700" stroke-width="1"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="11" font-weight="bold">H</text>
</g>
<!-- Machine gear spinning fast -->
<g transform="translate(28,130)">
  <circle cx="0" cy="0" r="12" fill="none" stroke="#999" stroke-width="2" opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="4" fill="#888" opacity="0.4"/>
  <g opacity="0.4">
    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/>
    <rect x="-2" y="-14" width="4" height="4" rx="1" fill="#999"/>
    <rect x="-2" y="10" width="4" height="4" rx="1" fill="#999"/>
    <rect x="-14" y="-2" width="4" height="4" rx="1" fill="#999"/>
    <rect x="10" y="-2" width="4" height="4" rx="1" fill="#999"/>
  </g>
</g>
<!-- Golden beam projecting southward from machine to coastline -->
<g filter="url(#wsBeamGlow)">
  <path d="M180,128 Q250,145 350,180 Q420,200 500,220" fill="none" stroke="url(#wsBeam)" stroke-width="8" stroke-linecap="round" opacity="0.7">
    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
  </path>
  <path d="M180,128 Q260,150 360,185 Q430,205 500,225" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" opacity="0.4">
    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" begin="0.3s"/>
  </path>
</g>
<!-- Beam particles traveling along path -->
<circle cx="220" cy="138" r="2" fill="#ffd700" opacity="0.7">
  <animate attributeName="cx" values="180;350;500" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="128;180;220" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.8;0.5;0" dur="3s" repeatCount="indefinite"/>
</circle>
<circle cx="260" cy="150" r="1.5" fill="#ffa040" opacity="0.5">
  <animate attributeName="cx" values="180;350;500" dur="3s" repeatCount="indefinite" begin="1s"/>
  <animate attributeName="cy" values="128;180;220" dur="3s" repeatCount="indefinite" begin="1s"/>
  <animate attributeName="opacity" values="0.6;0.4;0" dur="3s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="300" cy="165" r="2" fill="#ffd700" opacity="0.4">
  <animate attributeName="cx" values="180;350;500" dur="3s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="cy" values="128;180;220" dur="3s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="opacity" values="0.7;0.3;0" dur="3s" repeatCount="indefinite" begin="2s"/>
</circle>
<!-- Cryptic Croc — Round stylized version (Home Decorator style) -->
<g transform="translate(210, 192) scale(0.6)">
  <!-- Tail -->
  <path d="M-15,20 Q-40,30 -55,25" fill="none" stroke="#3a8a3a" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
  <!-- Body (round) -->
  <ellipse cx="0" cy="0" rx="42" ry="38" fill="#3a8a3a" opacity="0.9"/>
  <!-- Belly -->
  <ellipse cx="0" cy="5" rx="30" ry="26" fill="#8ac48a" opacity="0.7"/>
  <!-- Tweed Waistcoat -->
  <path d="M-38,-12 Q-42,10 -35,30 L35,30 Q42,10 38,-12 Q0,-20 -38,-12 Z" fill="#7a6a4a" opacity="0.7"/>
  <!-- Head (round) -->
  <ellipse cx="5" cy="-48" rx="30" ry="28" fill="#3a8a3a" opacity="0.9"/>
  <!-- Snout (facing right) -->
  <ellipse cx="28" cy="-40" rx="22" ry="12" fill="#4a9a4a" opacity="0.9"/>
  <!-- Eyes -->
  <circle cx="0" cy="-58" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="20" cy="-56" r="9" fill="#f0ece0" opacity="0.9"/>
  <circle cx="0" cy="-58" r="5" fill="#2c3e50" opacity="0.9"/>
  <circle cx="20" cy="-56" r="5" fill="#2c3e50" opacity="0.9"/>
  <!-- Top Hat -->
  <g transform="translate(5, -82)">
    <rect x="-22" y="0" width="44" height="8" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-18" width="30" height="18" rx="2" fill="#2c3e50"/>
    <rect x="-15" y="-10" width="30" height="4" fill="#c0a040"/>
  </g>
</g>
<!-- Warm sparks around machine -->
<circle cx="160" cy="90" r="1.5" fill="#ffd700" opacity="0.5"><animate attributeName="cy" values="90;75;60" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0.8;0" dur="2s" repeatCount="indefinite"/></circle>
<circle cx="100" cy="88" r="1" fill="#ffa040" opacity="0.4"><animate attributeName="cy" values="88;70;52" dur="2.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
</svg>`;
