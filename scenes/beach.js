// Beach story scenes — "Cryptogram Cove"
// Keys: beach_0 through beach_4
// DRAFT — for review only

// Scene 0: Sandy beach with scattered shell letters, waves, umbrella
STORY_SCENES['beach_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="beachSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff8c00"/><stop offset="40%" stop-color="#ffa840"/><stop offset="70%" stop-color="#7ac5e8"/><stop offset="100%" stop-color="#2980b9"/>
  </linearGradient>
  <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2980b9"/><stop offset="100%" stop-color="#1a6090"/>
  </linearGradient>
  <linearGradient id="sandGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e8d5a3"/><stop offset="100%" stop-color="#d4b87a"/>
  </linearGradient>
  <radialGradient id="sunGlow" cx="80%" cy="15%" r="20%">
    <stop offset="0%" stop-color="#fff4c0" stop-opacity="0.8"/><stop offset="100%" stop-color="#ff8c00" stop-opacity="0"/>
  </radialGradient>
  <filter id="waveBlur"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#beachSky)"/>
<!-- Sun -->
<circle cx="400" cy="40" r="25" fill="#fff4c0" opacity="0.9"/>
<circle cx="400" cy="40" r="45" fill="url(#sunGlow)"/>
<!-- Ocean -->
<rect x="0" y="130" width="500" height="50" fill="url(#oceanGrad)" opacity="0.85"/>
<!-- Waves -->
<path d="M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z" fill="#7ac5e8" opacity="0.5">
  <animate attributeName="d" values="M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z;M0,148 Q30,142 60,148 Q90,155 120,148 Q150,142 180,148 Q210,155 240,148 Q270,142 300,148 Q330,155 360,148 Q390,142 420,148 Q450,155 480,148 L500,148 L500,160 L0,160 Z;M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z" dur="4s" repeatCount="indefinite"/>
</path>
<!-- Shore foam -->
<path d="M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z" fill="#fff" opacity="0.25">
  <animate attributeName="d" values="M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z;M0,162 Q40,157 80,162 Q120,167 160,162 Q200,157 240,162 Q280,167 320,162 Q360,157 400,162 Q440,167 500,162 L500,168 L0,168 Z;M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z" dur="3.5s" repeatCount="indefinite"/>
</path>
<!-- Sand -->
<rect x="0" y="162" width="500" height="98" fill="url(#sandGrad)"/>
<!-- Umbrella -->
<line x1="100" y1="140" x2="100" y2="210" stroke="#8b6914" stroke-width="3"/>
<path d="M60,142 Q80,108 100,105 Q120,108 140,142 Z" fill="#e85050" opacity="0.85"/>
<path d="M80,140 Q90,118 100,115 Q110,118 120,140 Z" fill="#f06060" opacity="0.6"/>
<!-- Shell letters scattered on sand -->
<g font-family="'Fredoka One',cursive" font-size="11" fill="#c4917a">
  <text x="170" y="200" transform="rotate(-10,170,200)">W</text>
  <text x="200" y="210" transform="rotate(5,200,210)">H</text>
  <text x="225" y="195" transform="rotate(-15,225,195)">S</text>
  <text x="255" y="208" transform="rotate(8,255,208)">E</text>
  <text x="285" y="198" transform="rotate(-5,285,198)">L</text>
  <text x="310" y="212" transform="rotate(12,310,212)">L</text>
  <text x="340" y="202" transform="rotate(-8,340,202)">S</text>
</g>
<!-- Shell shapes -->
<ellipse cx="175" cy="228" rx="6" ry="4" fill="#f0c8b0" opacity="0.5" transform="rotate(20,175,228)"/>
<ellipse cx="320" cy="235" rx="5" ry="3" fill="#e8b8a0" opacity="0.4" transform="rotate(-30,320,235)"/>
<ellipse cx="400" cy="220" rx="7" ry="4" fill="#f0d0b8" opacity="0.45" transform="rotate(15,400,220)"/>
<!-- Bottle bobbing in shallows -->
<g>
  <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0;-3,2;0,0" dur="5s" repeatCount="indefinite"/>
  <rect x="58" y="150" width="16" height="7" rx="3" fill="#8bc8a0" opacity="0.6" transform="rotate(-10,66,153)"/>
  <rect x="66" y="147" width="3" height="5" rx="1" fill="#a0d8b0" opacity="0.5" transform="rotate(-10,67,149)"/>
</g>
<!-- Sand texture dots -->
<circle cx="150" cy="220" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="250" cy="240" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="350" cy="225" r="0.8" fill="#c4a870" opacity="0.25"/>
<circle cx="430" cy="245" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="80" cy="235" r="0.8" fill="#c4a870" opacity="0.25"/>
</svg>`;

// Scene 1: Bottle rolls to feet, cliffside passage with vines
STORY_SCENES['beach_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="cliffSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7ac5e8"/><stop offset="100%" stop-color="#2980b9"/>
  </linearGradient>
  <linearGradient id="cliffFace" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#6a6058"/><stop offset="100%" stop-color="#8a7a70"/>
  </linearGradient>
  <linearGradient id="sandGrad2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e8d5a3"/><stop offset="100%" stop-color="#d4b87a"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#cliffSky)"/>
<!-- Cliff wall (right half) -->
<path d="M250,0 L260,0 Q280,30 270,60 Q290,80 285,120 Q300,140 290,180 Q310,200 300,240 L300,260 L500,260 L500,0 Z" fill="url(#cliffFace)"/>
<path d="M260,0 Q285,20 278,50 Q295,70 290,110 Q305,130 298,170 Q315,195 305,230 L305,260 L500,260 L500,0 L270,0 Z" fill="#7a706a" opacity="0.6"/>
<!-- Rock texture lines -->
<line x1="300" y1="40" x2="450" y2="45" stroke="#5a5248" stroke-width="0.8" opacity="0.3"/>
<line x1="310" y1="90" x2="480" y2="88" stroke="#5a5248" stroke-width="0.8" opacity="0.25"/>
<line x1="295" y1="150" x2="460" y2="148" stroke="#5a5248" stroke-width="0.8" opacity="0.3"/>
<line x1="305" y1="200" x2="490" y2="198" stroke="#5a5248" stroke-width="0.8" opacity="0.25"/>
<!-- Vine-covered passage (dark gap in cliff) -->
<ellipse cx="340" cy="190" rx="22" ry="35" fill="#1a1810" opacity="0.85"/>
<ellipse cx="340" cy="190" rx="18" ry="30" fill="#0a0a08"/>
<!-- Vines -->
<path d="M320,155 Q315,165 322,175 Q318,185 325,195 Q320,205 326,215 Q322,220 328,225" fill="none" stroke="#2a6a28" stroke-width="2.5" opacity="0.7"/>
<path d="M360,158 Q365,168 358,178 Q362,188 356,198 Q362,210 358,220" fill="none" stroke="#2a6a28" stroke-width="2" opacity="0.65"/>
<path d="M325,160 Q330,155 335,158" fill="none" stroke="#3a8a30" stroke-width="1.5" opacity="0.5"/>
<path d="M318,175 Q324,170 328,174" fill="none" stroke="#3a8a30" stroke-width="1.5" opacity="0.5"/>
<path d="M355,170 Q360,165 365,168" fill="none" stroke="#3a8a30" stroke-width="1.5" opacity="0.5"/>
<path d="M352,195 Q358,190 362,194" fill="none" stroke="#3a8a30" stroke-width="1.5" opacity="0.5"/>
<!-- Vine leaves -->
<ellipse cx="322" cy="158" rx="4" ry="2.5" fill="#3a8a30" opacity="0.6" transform="rotate(-30,322,158)"/>
<ellipse cx="316" cy="180" rx="3.5" ry="2" fill="#4a9a38" opacity="0.5" transform="rotate(20,316,180)"/>
<ellipse cx="363" cy="165" rx="4" ry="2.5" fill="#3a8a30" opacity="0.55" transform="rotate(25,363,165)"/>
<ellipse cx="360" cy="200" rx="3.5" ry="2" fill="#4a9a38" opacity="0.5" transform="rotate(-15,360,200)"/>
<!-- Ocean (left side) -->
<rect x="0" y="160" width="250" height="30" fill="#2980b9" opacity="0.7"/>
<path d="M0,165 Q25,158 50,165 Q75,172 100,165 Q125,158 150,165 Q175,172 200,165 Q225,158 250,165 L250,175 L0,175 Z" fill="#7ac5e8" opacity="0.4">
  <animate attributeName="d" values="M0,165 Q25,158 50,165 Q75,172 100,165 Q125,158 150,165 Q175,172 200,165 Q225,158 250,165 L250,175 L0,175 Z;M0,168 Q25,162 50,168 Q75,175 100,168 Q125,162 150,168 Q175,175 200,168 Q225,162 250,168 L250,178 L0,178 Z;M0,165 Q25,158 50,165 Q75,172 100,165 Q125,158 150,165 Q175,172 200,165 Q225,158 250,165 L250,175 L0,175 Z" dur="4s" repeatCount="indefinite"/>
</path>
<!-- Sand at base -->
<path d="M0,188 Q60,182 120,185 Q180,188 250,186 Q260,200 280,210 L300,260 L0,260 Z" fill="url(#sandGrad2)"/>
<!-- Rocky path along cliff base -->
<ellipse cx="230" cy="210" rx="15" ry="5" fill="#9a8a7a" opacity="0.3"/>
<ellipse cx="260" cy="220" rx="12" ry="4" fill="#8a7a6a" opacity="0.35"/>
<ellipse cx="290" cy="230" rx="10" ry="4" fill="#9a8a7a" opacity="0.3"/>
<!-- Bottle on sand (arrived) -->
<rect x="110" y="182" width="20" height="8" rx="4" fill="#8bc8a0" opacity="0.7" transform="rotate(5,120,186)"/>
<rect x="128" y="180" width="4" height="5" rx="1.5" fill="#a0d8b0" opacity="0.6" transform="rotate(5,130,182)"/>
<!-- Note sticking out -->
<rect x="115" y="183" width="12" height="5" rx="1" fill="#f5e8c8" opacity="0.8" transform="rotate(5,121,185)"/>
</svg>`;

// Scene 2: Stone door with handles and chalk text "TIFL OT NEPO"
STORY_SCENES['beach_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="doorCliff" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6a6058"/><stop offset="100%" stop-color="#5a5048"/>
  </linearGradient>
  <linearGradient id="doorFace" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8a8278"/><stop offset="100%" stop-color="#6a6258"/>
  </linearGradient>
  <radialGradient id="chalkGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fff" stop-opacity="0.3"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/>
  </radialGradient>
  <filter id="chalkFilter"><feGaussianBlur stdDeviation="0.8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#doorCliff)"/>
<!-- Cliff texture -->
<line x1="0" y1="30" x2="500" y2="32" stroke="#5a5248" stroke-width="0.8" opacity="0.2"/>
<line x1="0" y1="80" x2="500" y2="78" stroke="#5a5248" stroke-width="0.8" opacity="0.25"/>
<line x1="0" y1="220" x2="500" y2="218" stroke="#4a4238" stroke-width="0.8" opacity="0.2"/>
<!-- Stone door -->
<rect x="150" y="30" width="200" height="200" rx="5" fill="url(#doorFace)"/>
<rect x="155" y="35" width="190" height="190" rx="3" fill="#7a7268" opacity="0.5"/>
<!-- Door border -->
<rect x="150" y="30" width="200" height="200" rx="5" fill="none" stroke="#5a5048" stroke-width="3"/>
<!-- Carved line details on door -->
<line x1="170" y1="50" x2="330" y2="50" stroke="#6a6258" stroke-width="1" opacity="0.4"/>
<line x1="170" y1="210" x2="330" y2="210" stroke="#6a6258" stroke-width="1" opacity="0.4"/>
<line x1="170" y1="50" x2="170" y2="210" stroke="#6a6258" stroke-width="1" opacity="0.3"/>
<line x1="330" y1="50" x2="330" y2="210" stroke="#6a6258" stroke-width="1" opacity="0.3"/>
<!-- "Push" handle (left) -->
<rect x="190" y="120" width="30" height="12" rx="3" fill="#a89070"/>
<rect x="192" y="122" width="26" height="8" rx="2" fill="#b8a080" opacity="0.6"/>
<text x="205" y="129" text-anchor="middle" fill="#5a4a3a" font-family="'Fredoka One',cursive" font-size="6">PUSH</text>
<!-- "Pull" handle (right) -->
<rect x="275" y="115" width="12" height="30" rx="3" fill="#a89070"/>
<rect x="277" y="117" width="8" height="26" rx="2" fill="#b8a080" opacity="0.6"/>
<text x="281" y="134" text-anchor="middle" fill="#5a4a3a" font-family="'Fredoka One',cursive" font-size="5.5" transform="rotate(-90,281,134)">PULL</text>
<!-- Chalk text on stone — "TIFL OT NEPO" (scrambled "LIFT TO OPEN") -->
<ellipse cx="250" cy="82" rx="70" ry="18" fill="url(#chalkGlow)" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite"/>
</ellipse>
<g filter="url(#chalkFilter)">
  <text x="250" y="80" text-anchor="middle" fill="#e8e4d8" font-family="'Fredoka One',cursive" font-size="14" letter-spacing="2" opacity="0.85">
    TIFL OT NEPO
    <animate attributeName="opacity" values="0.75;0.95;0.75" dur="3.5s" repeatCount="indefinite"/>
  </text>
</g>
<!-- Small chalk arrow hinting upward -->
<path d="M250,92 L245,100 M250,92 L255,100 M250,92 L250,105" fill="none" stroke="#e8e4d8" stroke-width="1.5" opacity="0.4"/>
<!-- Vines on cliff around door -->
<path d="M140,20 Q135,60 142,100 Q138,140 145,180 Q140,220 148,250" fill="none" stroke="#2a6a28" stroke-width="3" opacity="0.5"/>
<path d="M360,25 Q365,65 358,105 Q362,145 356,185 Q360,225 354,255" fill="none" stroke="#2a6a28" stroke-width="2.5" opacity="0.45"/>
<ellipse cx="138" cy="70" rx="5" ry="3" fill="#3a8a30" opacity="0.5" transform="rotate(-20,138,70)"/>
<ellipse cx="145" cy="130" rx="4" ry="2.5" fill="#4a9a38" opacity="0.45" transform="rotate(15,145,130)"/>
<ellipse cx="362" cy="80" rx="5" ry="3" fill="#3a8a30" opacity="0.5" transform="rotate(20,362,80)"/>
<ellipse cx="355" cy="150" rx="4" ry="2.5" fill="#4a9a38" opacity="0.45" transform="rotate(-15,355,150)"/>
<!-- Ground rubble -->
<ellipse cx="180" cy="240" rx="10" ry="5" fill="#7a7068" opacity="0.4"/>
<ellipse cx="310" cy="245" rx="12" ry="4" fill="#6a6058" opacity="0.35"/>
<ellipse cx="250" cy="248" rx="8" ry="3" fill="#8a7a70" opacity="0.3"/>
<rect x="0" y="230" width="500" height="30" fill="#4a4238" opacity="0.3"/>
</svg>`;

// Scene 3: Door slides up, hidden cove revealed with phosphorescent walls and treasure chests
STORY_SCENES['beach_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="coveBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a2838"/><stop offset="100%" stop-color="#0a1820"/>
  </linearGradient>
  <radialGradient id="phosphor1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5e0" stop-opacity="0.5"/><stop offset="100%" stop-color="#4af5e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="phosphor2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7ac5e8" stop-opacity="0.4"/><stop offset="100%" stop-color="#7ac5e8" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="coveLight" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#4af5e0" stop-opacity="0.08"/><stop offset="100%" stop-color="#4af5e0" stop-opacity="0"/>
  </radialGradient>
  <filter id="phosphorGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#coveBg)"/>
<rect width="500" height="260" fill="url(#coveLight)"/>
<!-- Cave arch (door opening visible at top, slid upward) -->
<path d="M0,0 L160,0 L160,20 Q180,5 250,0 Q320,5 340,20 L340,0 L500,0 L500,260 L380,260 L380,240 Q360,250 340,260 L160,260 Q140,250 120,240 L120,260 L0,260 Z" fill="#2a2a30" opacity="0.6"/>
<!-- Raised door slab visible at top -->
<rect x="165" y="0" width="170" height="15" rx="2" fill="#7a7268" opacity="0.5"/>
<line x1="175" y1="5" x2="325" y2="5" stroke="#8a8278" stroke-width="0.8" opacity="0.3"/>
<line x1="175" y1="10" x2="325" y2="10" stroke="#8a8278" stroke-width="0.8" opacity="0.3"/>
<!-- Cave walls -->
<path d="M120,260 Q100,200 110,140 Q105,80 130,20 L160,20 Q145,70 150,120 Q142,180 148,240 L120,240 Z" fill="#3a3840" opacity="0.5"/>
<path d="M340,20 L370,20 Q395,80 390,140 Q400,200 380,260 L350,260 Q358,200 355,140 Q362,80 340,20 Z" fill="#3a3840" opacity="0.5"/>
<!-- Phosphorescent writing on walls -->
<g filter="url(#phosphorGlow)">
  <!-- Left wall glowing symbols -->
  <text x="130" y="80" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="8" opacity="0.6" transform="rotate(-5,130,80)">ABC</text>
  <text x="125" y="120" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="7" opacity="0.5" transform="rotate(-8,125,120)">XYZ</text>
  <text x="132" y="160" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="6" opacity="0.4" transform="rotate(-3,132,160)">CIPHER</text>
  <!-- Right wall glowing symbols -->
  <text x="370" y="75" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="7" opacity="0.55" transform="rotate(5,370,75)">KEY</text>
  <text x="375" y="115" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="8" opacity="0.5" transform="rotate(3,375,115)">CODE</text>
  <text x="368" y="155" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="6" opacity="0.45" transform="rotate(6,368,155)">DECODE</text>
</g>
<!-- Phosphorescent spots on walls -->
<circle cx="140" cy="100" r="8" fill="url(#phosphor1)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="128" cy="145" r="6" fill="url(#phosphor2)" opacity="0.35"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="365" cy="95" r="7" fill="url(#phosphor1)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="372" cy="140" r="6" fill="url(#phosphor2)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4.5s" repeatCount="indefinite" begin="1.5s"/></circle>
<!-- Cave floor (wet rock / sand) -->
<rect x="120" y="220" width="260" height="40" fill="#1a2830" opacity="0.5"/>
<ellipse cx="250" cy="235" rx="130" ry="20" fill="#e8d5a3" opacity="0.15"/>
<!-- Treasure chest (left) -->
<rect x="170" y="195" width="40" height="25" rx="3" fill="#8b6914"/>
<rect x="168" y="195" width="44" height="5" rx="2" fill="#a07a18"/>
<rect x="186" y="197" width="8" height="5" rx="1" fill="#ffd700" opacity="0.7"/>
<line x1="175" y1="208" x2="205" y2="208" stroke="#6a5010" stroke-width="1" opacity="0.5"/>
<line x1="175" y1="214" x2="205" y2="214" stroke="#6a5010" stroke-width="1" opacity="0.5"/>
<!-- Treasure chest (right, slightly open) -->
<rect x="290" y="198" width="35" height="22" rx="3" fill="#8b6914"/>
<rect x="288" y="192" width="39" height="8" rx="2" fill="#a07a18" transform="rotate(-8,307,196)"/>
<rect x="304" y="193" width="7" height="5" rx="1" fill="#ffd700" opacity="0.6" transform="rotate(-8,307,195)"/>
<!-- Gold glint from open chest -->
<circle cx="305" cy="200" r="2" fill="#ffd700" opacity="0.5"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/></circle>
<circle cx="310" cy="202" r="1.5" fill="#ffe040" opacity="0.4"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<!-- Water puddle reflection -->
<ellipse cx="250" cy="245" rx="60" ry="8" fill="#2980b9" opacity="0.1"/>
<ellipse cx="250" cy="245" rx="40" ry="5" fill="#4af5e0" opacity="0.05">
  <animate attributeName="opacity" values="0.03;0.08;0.03" dur="5s" repeatCount="indefinite"/>
</ellipse>
</svg>`;

// Scene 4: Cryptogram Cove fully revealed, ancient cryptograms glowing
STORY_SCENES['beach_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="coveReveal" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1820"/><stop offset="50%" stop-color="#122838"/><stop offset="100%" stop-color="#0a1a28"/>
  </linearGradient>
  <radialGradient id="coveCenter" cx="50%" cy="45%" r="45%">
    <stop offset="0%" stop-color="#4af5e0" stop-opacity="0.12"/><stop offset="100%" stop-color="#4af5e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glyph1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5e0" stop-opacity="0.6"/><stop offset="100%" stop-color="#4af5e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glyph2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="glyphGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#coveReveal)"/>
<rect width="500" height="260" fill="url(#coveCenter)"/>
<!-- Expansive cave walls -->
<path d="M0,0 L80,0 Q60,40 65,80 Q55,130 70,180 Q60,220 50,260 L0,260 Z" fill="#2a2a35" opacity="0.7"/>
<path d="M420,0 L500,0 L500,260 L450,260 Q440,220 435,180 Q445,130 440,80 Q448,40 420,0 Z" fill="#2a2a35" opacity="0.7"/>
<!-- Domed ceiling -->
<path d="M80,0 Q120,20 180,10 Q250,-5 320,10 Q380,20 420,0 L420,30 Q350,50 250,40 Q150,50 80,30 Z" fill="#222230" opacity="0.5"/>
<!-- Glowing cryptogram symbols across walls -->
<g filter="url(#glyphGlow)">
  <!-- Left wall ancient symbols -->
  <text x="70" y="60" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="10" opacity="0.7"><animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite"/>&#x0394;</text>
  <text x="60" y="100" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="9" opacity="0.6"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>&#x03A9;</text>
  <text x="68" y="140" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="8" opacity="0.5"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="5s" repeatCount="indefinite" begin="1s"/>&#x03A3;</text>
  <text x="62" y="180" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="10" opacity="0.55"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>&#x03C0;</text>
  <!-- Right wall ancient symbols -->
  <text x="435" y="65" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="9" opacity="0.65"><animate attributeName="opacity" values="0.45;0.75;0.45" dur="3.8s" repeatCount="indefinite" begin="0.3s"/>&#x03B1;</text>
  <text x="440" y="105" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="10" opacity="0.6"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4.2s" repeatCount="indefinite" begin="0.8s"/>&#x03B2;</text>
  <text x="432" y="145" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="8" opacity="0.5"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="3.5s" repeatCount="indefinite" begin="1.2s"/>&#x03BB;</text>
  <text x="438" y="185" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="9" opacity="0.55"><animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" begin="2s"/>&#x03B8;</text>
  <!-- Ceiling symbols -->
  <text x="200" y="30" fill="#4af5e0" font-family="'Fredoka One',cursive" font-size="7" opacity="0.4"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="5s" repeatCount="indefinite"/>&#x2234;</text>
  <text x="300" y="28" fill="#7ac5e8" font-family="'Fredoka One',cursive" font-size="7" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="4.5s" repeatCount="indefinite" begin="0.6s"/>&#x221E;</text>
</g>
<!-- Central glowing inscription — "CRYPTOGRAM COVE" -->
<g filter="url(#glyphGlow)">
  <text x="250" y="90" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="16" letter-spacing="3" opacity="0.8">
    CRYPTOGRAM COVE
    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite"/>
  </text>
</g>
<ellipse cx="250" cy="85" rx="100" ry="15" fill="url(#glyph2)" opacity="0.3"/>
<!-- Treasure chests (multiple) -->
<rect x="120" y="195" width="40" height="25" rx="3" fill="#8b6914"/>
<rect x="118" y="195" width="44" height="5" rx="2" fill="#a07a18"/>
<rect x="136" y="197" width="8" height="5" rx="1" fill="#ffd700" opacity="0.7"/>
<rect x="220" y="200" width="35" height="22" rx="3" fill="#8b6914"/>
<rect x="218" y="200" width="39" height="5" rx="2" fill="#a07a18"/>
<rect x="234" y="202" width="7" height="5" rx="1" fill="#ffd700" opacity="0.6"/>
<rect x="330" y="193" width="42" height="27" rx="3" fill="#8b6914"/>
<rect x="328" y="187" width="46" height="8" rx="2" fill="#a07a18" transform="rotate(-5,351,191)"/>
<rect x="347" y="189" width="8" height="5" rx="1" fill="#ffd700" opacity="0.6" transform="rotate(-5,351,191)"/>
<!-- Gold glints from chests -->
<circle cx="345" cy="198" r="2" fill="#ffd700" opacity="0.6"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/></circle>
<circle cx="350" cy="200" r="1.5" fill="#ffe040" opacity="0.5"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" begin="0.4s"/></circle>
<circle cx="355" cy="196" r="1.5" fill="#ffd700" opacity="0.4"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" begin="0.8s"/></circle>
<!-- Floor with water shimmer -->
<rect x="50" y="222" width="400" height="38" fill="#0a1820" opacity="0.4"/>
<ellipse cx="250" cy="240" rx="180" ry="15" fill="#e8d5a3" opacity="0.1"/>
<ellipse cx="200" cy="248" rx="60" ry="6" fill="#2980b9" opacity="0.1">
  <animate attributeName="opacity" values="0.05;0.15;0.05" dur="5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="320" cy="250" rx="50" ry="5" fill="#4af5e0" opacity="0.06">
  <animate attributeName="opacity" values="0.03;0.1;0.03" dur="4s" repeatCount="indefinite" begin="1s"/>
</ellipse>
<!-- Floating particles (magical atmosphere) -->
<circle cx="150" cy="120" r="1.5" fill="#4af5e0" opacity="0.3"><animate attributeName="cy" values="120;100;80" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.6;0" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="300" cy="140" r="1.5" fill="#ffd700" opacity="0.3"><animate attributeName="cy" values="140;115;90" dur="5s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.3;0.6;0" dur="5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="220" cy="150" r="1" fill="#7ac5e8" opacity="0.25"><animate attributeName="cy" values="150;125;100" dur="7s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.25;0.5;0" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="380" cy="130" r="1.5" fill="#4af5e0" opacity="0.3"><animate attributeName="cy" values="130;105;80" dur="5.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0.3;0.55;0" dur="5.5s" repeatCount="indefinite" begin="0.5s"/></circle>
</svg>`;
