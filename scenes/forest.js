// Forest story scenes — "Whispers Among the Pines"
// Keys: forest_0 through forest_5

// Scene 0: Entering the forest (bioluminescent path)
STORY_SCENES['forest_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="forestBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1a10"/><stop offset="60%" stop-color="#0d2218"/><stop offset="100%" stop-color="#1a3a20"/>
  </linearGradient>
  <radialGradient id="bioGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.6"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <filter id="softGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#forestBg)"/>
<!-- Distant trees -->
<polygon points="0,120 30,40 60,120" fill="#0a1a0e" opacity="0.8"/>
<polygon points="40,130 75,30 110,130" fill="#0c1c10" opacity="0.7"/>
<polygon points="100,125 135,45 170,125" fill="#0a1a0e" opacity="0.75"/>
<polygon points="330,120 365,35 400,120" fill="#0c1c10" opacity="0.7"/>
<polygon points="390,130 420,50 450,130" fill="#0a1a0e" opacity="0.8"/>
<polygon points="440,125 470,55 500,125" fill="#0c1c10" opacity="0.75"/>
<!-- Mid-ground trees -->
<polygon points="60,190 90,80 120,190" fill="#112a18" style="transform-origin:90px 190px;animation:treeSway 8s ease-in-out infinite 1s"/>
<rect x="87" y="190" width="6" height="20" fill="#3a2210"/>
<polygon points="150,180 185,60 220,180" fill="#133020" style="transform-origin:185px 180px;animation:treeSway 6s ease-in-out infinite"/>
<rect x="181" y="180" width="8" height="25" fill="#3a2210"/>
<polygon points="260,175 300,50 340,175" fill="#153222" style="transform-origin:300px 175px;animation:treeSway 7s ease-in-out infinite 0.5s"/>
<rect x="296" y="175" width="8" height="28" fill="#3a2210"/>
<polygon points="370,185 400,75 430,185" fill="#112a18" style="transform-origin:400px 185px;animation:treeSway 7.5s ease-in-out infinite 0.8s"/>
<rect x="397" y="185" width="6" height="22" fill="#3a2210"/>
<!-- Forest floor -->
<ellipse cx="250" cy="240" rx="280" ry="40" fill="#1a3020" opacity="0.6"/>
<!-- Dirt path -->
<path d="M180,260 Q200,230 230,225 Q270,218 300,230 Q330,240 350,260" fill="none" stroke="#4a3a20" stroke-width="18" stroke-linecap="round" opacity="0.5"/>
<path d="M180,260 Q200,230 230,225 Q270,218 300,230 Q330,240 350,260" fill="none" stroke="#5a4a28" stroke-width="12" stroke-linecap="round" opacity="0.4"/>
<!-- Bioluminescent mushrooms -->
<rect x="80" y="215" width="4" height="10" fill="#ddd" opacity="0.6"/>
<ellipse cx="82" cy="215" rx="8" ry="4" fill="#4af5a0" opacity="0.5"/>
<circle cx="82" cy="215" r="10" fill="url(#bioGlow)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/></circle>
<rect x="95" y="220" width="3" height="8" fill="#ddd" opacity="0.5"/>
<ellipse cx="97" cy="220" rx="6" ry="3" fill="#3ae090" opacity="0.45"/>
<circle cx="97" cy="220" r="8" fill="url(#bioGlow)" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<rect x="400" y="210" width="4" height="10" fill="#ddd" opacity="0.6"/>
<ellipse cx="402" cy="210" rx="8" ry="4" fill="#4af5a0" opacity="0.5"/>
<circle cx="402" cy="210" r="10" fill="url(#bioGlow)" opacity="0.5"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" begin="1s"/></circle>
<rect x="418" y="218" width="3" height="8" fill="#ddd" opacity="0.5"/>
<ellipse cx="420" cy="218" rx="6" ry="3" fill="#3ae090" opacity="0.45"/>
<circle cx="420" cy="218" r="8" fill="url(#bioGlow)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" begin="0.3s"/></circle>
<rect x="158" y="218" width="4" height="10" fill="#ddd" opacity="0.5"/>
<ellipse cx="160" cy="218" rx="7" ry="3.5" fill="#4af5a0" opacity="0.4"/>
<circle cx="160" cy="218" r="9" fill="url(#bioGlow)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" begin="1.5s"/></circle>
<!-- Fireflies -->
<circle cx="120" cy="140" r="2" fill="#ffffaa" opacity="0.3" filter="url(#softGlow)"><animate attributeName="opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="140;130;140" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="350" cy="120" r="1.5" fill="#ffffaa" opacity="0.4" filter="url(#softGlow)"><animate attributeName="opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite" begin="1s"/><animate attributeName="cy" values="120;110;120" dur="5s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="230" cy="100" r="1.5" fill="#ffffaa" opacity="0.2" filter="url(#softGlow)"><animate attributeName="opacity" values="0.1;0.7;0.1" dur="5s" repeatCount="indefinite" begin="2s"/><animate attributeName="cx" values="230;240;230" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="420" cy="160" r="1.5" fill="#ffffaa" opacity="0.3" filter="url(#softGlow)"><animate attributeName="opacity" values="0.15;0.85;0.15" dur="3.5s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="60" cy="170" r="2" fill="#ffffaa" opacity="0.25" filter="url(#softGlow)"><animate attributeName="opacity" values="0.1;0.6;0.1" dur="4.5s" repeatCount="indefinite" begin="1.2s"/></circle>
<!-- Ferns -->
<path d="M0,240 Q20,220 15,200 Q25,215 40,210 Q30,230 35,250 Z" fill="#1a4a25" opacity="0.7"/>
<path d="M460,235 Q475,215 470,195 Q480,210 495,205 Q490,225 500,245 Z" fill="#1a4a25" opacity="0.7"/>
<!-- Mist -->
<ellipse cx="250" cy="200" rx="200" ry="30" fill="#4af5a0" opacity="0.04"/>
<ellipse cx="150" cy="190" rx="120" ry="20" fill="#fff" opacity="0.03"/>
</svg>`;

// Scene 1: The Carved Oak — giant pine with cryptic clues etched into trunk (from mockup Scene 2)
STORY_SCENES['forest_1'] = `<svg width="100%" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="oakBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1a10"/><stop offset="100%" stop-color="#152a1a"/>
  </linearGradient>
  <radialGradient id="oakGlow" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.08"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bioGlow1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.6"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <filter id="carveGlow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="280" fill="url(#oakBg)"/>
<!-- Ambient glow around tree -->
<circle cx="250" cy="160" r="150" fill="url(#oakGlow)"/>
<!-- Side trees (dark, framing) -->
<polygon points="0,200 25,50 50,200" fill="#0c1c10" opacity="0.6"/>
<polygon points="450,200 475,60 500,200" fill="#0c1c10" opacity="0.6"/>
<!-- GIANT PINE TREE trunk -->
<rect x="185" y="0" width="130" height="280" fill="#4a3418"/>
<rect x="192" y="5" width="116" height="272" fill="#5a4020"/>
<!-- Bark texture -->
<path d="M210,10 Q208,100 211,190 Q210,240 210,275" fill="none" stroke="#3a2a12" stroke-width="2" opacity="0.4"/>
<path d="M235,8 Q233,95 236,185 Q235,240 235,275" fill="none" stroke="#3a2a12" stroke-width="1.5" opacity="0.3"/>
<path d="M250,5 Q248,90 251,180 Q250,240 250,275" fill="none" stroke="#3a2a12" stroke-width="2" opacity="0.35"/>
<path d="M265,8 Q267,95 264,185 Q265,240 265,275" fill="none" stroke="#3a2a12" stroke-width="1.5" opacity="0.3"/>
<path d="M290,10 Q292,105 289,195 Q290,245 290,275" fill="none" stroke="#3a2a12" stroke-width="2" opacity="0.4"/>
<!-- Knots -->
<ellipse cx="220" cy="240" rx="7" ry="9" fill="#3a2a12" opacity="0.4"/>
<ellipse cx="220" cy="240" rx="5" ry="6" fill="#4a3418" opacity="0.5"/>
<ellipse cx="280" cy="115" rx="5" ry="6" fill="#3a2a12" opacity="0.3"/>
<ellipse cx="280" cy="115" rx="3" ry="4" fill="#4a3418" opacity="0.4"/>
<!-- Roots -->
<path d="M185,270 Q160,265 140,272 L140,280 L190,280 Z" fill="#3a2a12"/>
<path d="M315,270 Q340,265 360,272 L360,280 L310,280 Z" fill="#3a2a12"/>
<path d="M190,275 Q170,270 150,275 L150,280 L195,280 Z" fill="#2a1a0a" opacity="0.6"/>
<path d="M310,275 Q330,270 350,275 L350,280 L305,280 Z" fill="#2a1a0a" opacity="0.6"/>
<!-- Pine boughs pushed up high so trunk exposed for clues -->
<polygon points="250,-10 50,100 450,100" fill="#1a5218" opacity="0.85"/>
<polygon points="250,-2 68,97 432,97" fill="#2a6328" opacity="0.7"/>
<polygon points="250,-60 100,45 400,45" fill="#1a5218" opacity="0.85"/>
<polygon points="250,-52 115,43 385,43" fill="#236828" opacity="0.7"/>
<polygon points="250,-120 140,-15 360,-15" fill="#1a5218" opacity="0.85"/>
<polygon points="250,-112 152,-17 348,-17" fill="#2a7a2a" opacity="0.65"/>
<polygon points="250,-180 185,-70 315,-70" fill="#1a5218" opacity="0.8"/>
<!-- Frost highlights on bough tips -->
<line x1="65" y1="97" x2="90" y2="94" stroke="#ffffff" stroke-width="1.5" opacity="0.06" stroke-linecap="round"/>
<line x1="410" y1="97" x2="435" y2="94" stroke="#ffffff" stroke-width="1.5" opacity="0.06" stroke-linecap="round"/>
<line x1="118" y1="43" x2="143" y2="40" stroke="#ffffff" stroke-width="1" opacity="0.05" stroke-linecap="round"/>
<line x1="362" y1="43" x2="387" y2="40" stroke="#ffffff" stroke-width="1" opacity="0.05" stroke-linecap="round"/>
<!-- CARVED CRYPTIC CLUES on trunk -->
<g filter="url(#carveGlow)">
  <text x="250" y="135" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="10" opacity="0.7" font-weight="700" letter-spacing="0.5">Yelp in</text>
  <text x="250" y="150" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="10" opacity="0.65" font-weight="700" letter-spacing="0.5">sidebar knowledge (4)</text>
  <text x="232" y="167" fill="#ffd700" font-size="8" opacity="0.3">~</text>
  <text x="268" y="167" fill="#ffd700" font-size="8" opacity="0.3">~</text>
  <text x="250" y="185" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="10" opacity="0.6" font-weight="700" letter-spacing="0.5">Page from the</text>
  <text x="250" y="200" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="10" opacity="0.55" font-weight="700" letter-spacing="0.5">whole affair (4)</text>
  <text x="232" y="217" fill="#ffd700" font-size="8" opacity="0.25">~</text>
  <text x="268" y="217" fill="#ffd700" font-size="8" opacity="0.25">~</text>
  <text x="250" y="235" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="9" opacity="0.35" font-weight="700" letter-spacing="0.5">Evergreen from</text>
  <text x="250" y="249" text-anchor="middle" fill="#ffd700" font-family="'Nunito',serif" font-size="9" opacity="0.25" font-weight="700" letter-spacing="0.5">worship in earnest (4)</text>
</g>
<!-- Warm glow from carvings -->
<ellipse cx="250" cy="190" rx="50" ry="70" fill="#ffd700" opacity="0.03"/>
<!-- Moss on trunk -->
<ellipse cx="187" cy="240" rx="8" ry="18" fill="#2a6a28" opacity="0.35"/>
<ellipse cx="313" cy="220" rx="7" ry="15" fill="#2a6a28" opacity="0.3"/>
<!-- Forest floor mushrooms -->
<rect x="140" y="262" width="3" height="8" fill="#ddd" opacity="0.5"/>
<ellipse cx="141" cy="262" rx="6" ry="3" fill="#4af5a0" opacity="0.4"/>
<circle cx="141" cy="262" r="8" fill="url(#bioGlow1)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/></circle>
<rect x="355" y="265" width="3" height="7" fill="#ddd" opacity="0.5"/>
<ellipse cx="356" cy="265" rx="5" ry="2.5" fill="#4af5a0" opacity="0.35"/>
<circle cx="356" cy="265" r="7" fill="url(#bioGlow1)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
<!-- Leaf litter -->
<ellipse cx="160" cy="272" rx="5" ry="2" fill="#5a4a18" opacity="0.35" transform="rotate(25,160,272)"/>
<ellipse cx="340" cy="270" rx="4" ry="2" fill="#4a3a10" opacity="0.3" transform="rotate(-15,340,270)"/>
<ellipse cx="220" cy="275" rx="4" ry="1.5" fill="#6a5a20" opacity="0.25" transform="rotate(40,220,275)"/>
<ellipse cx="280" cy="274" rx="3" ry="1.5" fill="#5a4a18" opacity="0.3" transform="rotate(-30,280,274)"/>
<!-- Small ferns at base -->
<path d="M120,270 Q115,258 110,250 Q118,255 122,248 Q120,260 125,270 Z" fill="#1a4a25" opacity="0.5"/>
<path d="M380,268 Q385,256 390,248 Q383,254 378,246 Q380,258 375,268 Z" fill="#1a4a25" opacity="0.5"/>
<!-- Ground -->
<ellipse cx="250" cy="275" rx="220" ry="15" fill="#152a1a" opacity="0.5"/>
<rect x="0" y="272" width="500" height="8" fill="#0d2015" opacity="0.6"/>
</svg>`;

// Scene 2: Fox appears (glowing eyes in undergrowth) — reuse scene 0 visual since it's the same forest
STORY_SCENES['forest_2'] = STORY_SCENES['forest_0'];

// Scene 3: Fox & stone slab puzzle
STORY_SCENES['forest_3'] = `<svg width="100%" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="clearingBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0d2218"/><stop offset="40%" stop-color="#142a1e"/><stop offset="100%" stop-color="#1a3a22"/>
  </linearGradient>
  <radialGradient id="clearingLight" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.06"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="foxEyeGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7fff7f" stop-opacity="0.8"/><stop offset="100%" stop-color="#7fff7f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="stoneGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="stoneTextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="softGlow2"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="280" fill="url(#clearingBg)"/>
<circle cx="250" cy="140" r="180" fill="url(#clearingLight)"/>
<!-- Trees forming clearing -->
<polygon points="0,230 20,80 40,230" fill="#0a1a0e" opacity="0.8"/>
<polygon points="25,240 50,60 75,240" fill="#0d1c12" opacity="0.7"/>
<polygon points="425,230 450,70 475,230" fill="#0a1a0e" opacity="0.8"/>
<polygon points="455,240 475,80 500,240" fill="#0d1c12" opacity="0.7"/>
<polygon points="80,190 105,40 130,190" fill="#0c1c10" opacity="0.5"/>
<polygon points="370,185 395,35 420,185" fill="#0c1c10" opacity="0.5"/>
<!-- Mossy ground -->
<ellipse cx="250" cy="240" rx="200" ry="50" fill="#1a3a20" opacity="0.5"/>
<!-- Stone slab -->
<ellipse cx="290" cy="230" rx="75" ry="12" fill="#000" opacity="0.2"/>
<path d="M220,195 L225,180 Q230,175 240,175 L340,175 Q350,175 355,180 L360,195 Q362,200 358,205 L362,225 Q360,230 355,232 L225,232 Q220,230 218,225 L222,205 Q218,200 220,195 Z" fill="#5a5a6a"/>
<path d="M225,180 L230,178 Q235,176 242,177 L338,177 Q345,176 350,178 L355,180 L352,198 Q350,202 345,203 L235,203 Q230,202 228,198 Z" fill="#6a6a7a"/>
<rect x="232" y="177" width="116" height="25" rx="3" fill="#7a7a8a" opacity="0.4"/>
<g filter="url(#stoneTextGlow)">
  <text x="290" y="188" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">Face remodelled into</text>
  <text x="290" y="199" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">a place for coffee (4)</text>
</g>
<ellipse cx="290" cy="190" rx="65" ry="25" fill="url(#stoneGlow)"/>
<line x1="230" y1="210" x2="230" y2="220" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="234" y1="210" x2="234" y2="220" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="238" y1="210" x2="238" y2="220" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<!-- Fox (sitting) -->
<ellipse cx="155" cy="215" rx="20" ry="11" fill="#d4703a"/>
<ellipse cx="155" cy="218" rx="14" ry="7" fill="#e8a060" opacity="0.5"/>
<circle cx="178" cy="204" r="10" fill="#d4703a"/>
<ellipse cx="187" cy="207" rx="5" ry="3.5" fill="#c06030"/>
<circle cx="190" cy="206" r="1.5" fill="#1a1a1a"/>
<polygon points="172,198 170,184 179,197" fill="#d4703a"/>
<polygon points="173,198 171,187 178,197" fill="#e8a060" opacity="0.5"/>
<polygon points="182,197 185,183 188,197" fill="#d4703a"/>
<polygon points="183,197 185,186 187,197" fill="#e8a060" opacity="0.5"/>
<circle cx="179" cy="203" r="2.5" fill="#7fff7f" opacity="0.9"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="185" cy="202" r="2.5" fill="#7fff7f" opacity="0.9"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" begin="0.3s"/></circle>
<circle cx="179" cy="203" r="1.2" fill="#1a3a1a"/>
<circle cx="185" cy="202" r="1.2" fill="#1a3a1a"/>
<circle cx="179" cy="203" r="5" fill="url(#foxEyeGlow)" opacity="0.35"/>
<circle cx="185" cy="202" r="5" fill="url(#foxEyeGlow)" opacity="0.35"/>
<line x1="165" y1="222" x2="167" y2="234" stroke="#c06030" stroke-width="3.5" stroke-linecap="round"/>
<line x1="172" y1="221" x2="174" y2="234" stroke="#c06030" stroke-width="3.5" stroke-linecap="round"/>
<line x1="142" y1="220" x2="138" y2="230" stroke="#c06030" stroke-width="3.5" stroke-linecap="round"/>
<line x1="148" y1="222" x2="145" y2="231" stroke="#c06030" stroke-width="3.5" stroke-linecap="round"/>
<ellipse cx="167" cy="235" rx="3.5" ry="1.5" fill="#c06030"/>
<ellipse cx="174" cy="235" rx="3.5" ry="1.5" fill="#c06030"/>
<ellipse cx="137" cy="231" rx="3" ry="1.5" fill="#c06030"/>
<ellipse cx="145" cy="232" rx="3" ry="1.5" fill="#c06030"/>
<path d="M135,213 Q118,208 115,214 Q112,220 120,222 Q128,224 138,218 Z" fill="#d4703a"/>
<path d="M118,215 Q112,214 115,218 Q112,222 120,220 Z" fill="#e8c8a0" opacity="0.6"/>
<!-- Leaves & fireflies -->
<ellipse cx="200" cy="245" rx="4" ry="2" fill="#5a8a30" opacity="0.3" transform="rotate(30,200,245)"/>
<ellipse cx="330" cy="248" rx="3" ry="1.5" fill="#4a7a28" opacity="0.25" transform="rotate(-20,330,248)"/>
<circle cx="80" cy="150" r="1.5" fill="#ffffaa" filter="url(#softGlow2)"><animate attributeName="opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="420" cy="130" r="2" fill="#ffffaa" filter="url(#softGlow2)"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1.5s"/></circle>
<rect x="0" y="268" width="500" height="12" fill="#142a1e" opacity="0.5"/>
</svg>`;

// Scene 4: Fox leads to cafe (solved, path revealed)
STORY_SCENES['forest_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="solvedBg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#0d2218"/><stop offset="100%" stop-color="#1a2a20"/>
  </linearGradient>
  <radialGradient id="cafeGlow" cx="80%" cy="50%" r="30%">
    <stop offset="0%" stop-color="#ffa040" stop-opacity="0.25"/><stop offset="100%" stop-color="#ffa040" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="pathLight" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0"/><stop offset="50%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffa040" stop-opacity="0.2"/>
  </linearGradient>
  <radialGradient id="bioGlow2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4af5a0" stop-opacity="0.6"/><stop offset="100%" stop-color="#4af5a0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#solvedBg)"/>
<circle cx="430" cy="130" r="120" fill="url(#cafeGlow)"/>
<!-- Trees -->
<polygon points="0,245 20,60 40,245" fill="#0a1a0e" opacity="0.8"/>
<polygon points="25,248 55,50 85,248" fill="#0d1c12" opacity="0.7"/>
<rect x="17" y="235" width="6" height="15" fill="#3a2210" opacity="0.5"/>
<rect x="52" y="238" width="6" height="14" fill="#3a2210" opacity="0.45"/>
<polygon points="415,242 445,70 475,242" fill="#0a1a0e" opacity="0.8"/>
<polygon points="445,245 470,80 500,245" fill="#0d1c12" opacity="0.7"/>
<rect x="442" y="232" width="6" height="14" fill="#3a2210" opacity="0.5"/>
<rect x="467" y="235" width="6" height="14" fill="#3a2210" opacity="0.45"/>
<!-- Floor -->
<ellipse cx="250" cy="238" rx="260" ry="35" fill="#1a3a20" opacity="0.5"/>
<!-- Path -->
<path d="M40,250 Q120,238 200,234 Q300,228 400,222 Q450,218 500,210" fill="none" stroke="#4a3a20" stroke-width="32" stroke-linecap="round" opacity="0.35"/>
<path d="M40,250 Q120,238 200,234 Q300,228 400,222 Q450,218 500,210" fill="none" stroke="#5a4a28" stroke-width="24" stroke-linecap="round" opacity="0.3"/>
<path d="M40,250 Q120,238 200,234 Q300,228 400,222 Q450,218 500,210" fill="none" stroke="url(#pathLight)" stroke-width="22" stroke-linecap="round" opacity="0.6"/>
<!-- Grass tufts -->
<path d="M80,244 Q82,238 84,244" fill="none" stroke="#2a5a28" stroke-width="1.5" opacity="0.35"/>
<path d="M180,236 Q183,230 185,236" fill="none" stroke="#2a5a28" stroke-width="1.5" opacity="0.3"/>
<path d="M260,232 Q262,226 265,232" fill="none" stroke="#2a5a28" stroke-width="1.5" opacity="0.25"/>
<!-- Leaf litter -->
<ellipse cx="60" cy="248" rx="4" ry="2" fill="#5a4a18" opacity="0.3" transform="rotate(20,60,248)"/>
<ellipse cx="150" cy="240" rx="3.5" ry="1.5" fill="#4a6a20" opacity="0.25" transform="rotate(-15,150,240)"/>
<!-- Mushrooms -->
<rect x="108" y="234" width="3" height="7" fill="#ddd" opacity="0.4"/>
<ellipse cx="110" cy="234" rx="5" ry="2.5" fill="#4af5a0" opacity="0.35"/>
<circle cx="110" cy="234" r="7" fill="url(#bioGlow2)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/></circle>
<!-- Signpost -->
<rect x="185" y="170" width="4" height="68" fill="#6b4e0a"/>
<rect x="193" y="172" width="90" height="24" rx="3" fill="#5a3a10"/>
<rect x="195" y="174" width="86" height="20" rx="2" fill="#6b4a18"/>
<text x="238" y="188" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="8" letter-spacing="0.5">CRYPTIC CAFE</text>
<polygon points="285,184 293,178 293,190" fill="#ffd700" opacity="0.6"/>
<!-- Running fox -->
<ellipse cx="340" cy="216" rx="18" ry="9" fill="#d4703a" transform="rotate(-8,340,216)"/>
<circle cx="358" cy="208" r="8" fill="#d4703a"/>
<ellipse cx="365" cy="210" rx="4" ry="3" fill="#c06030"/>
<circle cx="367" cy="209" r="1.5" fill="#1a1a1a"/>
<polygon points="353,203 352,192 358,202" fill="#d4703a"/>
<polygon points="361,202 364,191 366,202" fill="#d4703a"/>
<circle cx="359" cy="207" r="2" fill="#7fff7f" opacity="0.8"/>
<circle cx="364" cy="206" r="2" fill="#7fff7f" opacity="0.8"/>
<line x1="330" y1="222" x2="324" y2="232" stroke="#c06030" stroke-width="3" stroke-linecap="round"/>
<line x1="337" y1="223" x2="336" y2="233" stroke="#c06030" stroke-width="3" stroke-linecap="round"/>
<line x1="350" y1="220" x2="357" y2="230" stroke="#c06030" stroke-width="3" stroke-linecap="round"/>
<line x1="346" y1="222" x2="350" y2="232" stroke="#c06030" stroke-width="3" stroke-linecap="round"/>
<path d="M322,214 Q308,208 302,212 Q298,216 305,219 Q312,222 322,218 Z" fill="#d4703a"/>
<path d="M305,214 Q298,212 302,216 Q298,219 305,218 Z" fill="#e8c8a0" opacity="0.6"/>
<!-- Motion lines -->
<line x1="290" y1="210" x2="308" y2="210" stroke="#4af5a0" stroke-width="1" opacity="0.15" stroke-linecap="round"/>
<line x1="286" y1="216" x2="306" y2="216" stroke="#4af5a0" stroke-width="1" opacity="0.12" stroke-linecap="round"/>
<line x1="288" y1="222" x2="304" y2="222" stroke="#4af5a0" stroke-width="1" opacity="0.1" stroke-linecap="round"/>
<!-- Cafe silhouette -->
<rect x="445" y="185" width="45" height="32" rx="2" fill="#3a2a18" opacity="0.5"/>
<polygon points="468,168 440,187 496,187" fill="#4a2a18" opacity="0.5"/>
<rect x="478" y="172" width="8" height="16" fill="#3a2a18" opacity="0.4"/>
<rect x="452" y="194" width="9" height="9" rx="1" fill="#ffeaa7" opacity="0.4"/>
<rect x="472" y="194" width="9" height="9" rx="1" fill="#ffeaa7" opacity="0.35"/>
<rect x="462" y="200" width="10" height="17" rx="2" fill="#2a1a0a" opacity="0.4"/>
<ellipse cx="467" cy="218" rx="12" ry="5" fill="#ffa040" opacity="0.08"/>
<!-- Golden particles -->
<circle cx="200" cy="180" r="2" fill="#ffd700" opacity="0.5"><animate attributeName="cy" values="180;160;140" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0.8;0" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="280" cy="170" r="1.5" fill="#ffd700" opacity="0.4"><animate attributeName="cy" values="170;150;130" dur="3.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="160" cy="190" r="1.5" fill="#ffd700" opacity="0.3"><animate attributeName="cy" values="190;165;140" dur="4s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.3;0.6;0" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="350" cy="160" r="2" fill="#ffd700" opacity="0.4"><animate attributeName="cy" values="160;140;120" dur="3s" repeatCount="indefinite" begin="1.5s"/><animate attributeName="opacity" values="0.4;0.7;0" dur="3s" repeatCount="indefinite" begin="1.5s"/></circle>
<!-- Ferns & ground -->
<path d="M0,242 Q8,232 5,222 Q12,228 18,222 Q15,235 20,248 Z" fill="#1a4a25" opacity="0.6"/>
<path d="M10,248 Q18,238 15,228 Q22,234 28,228 Q25,240 30,252 Z" fill="#1a4a25" opacity="0.5"/>
<path d="M470,238 Q478,228 475,218 Q482,224 488,218 Q485,232 490,242 Z" fill="#1a4a25" opacity="0.5"/>
<ellipse cx="250" cy="248" rx="260" ry="18" fill="#0d2015" opacity="0.4"/>
<rect x="0" y="248" width="500" height="12" fill="#0d2015" opacity="0.6"/>
</svg>`;

// Scene 5 (complete): Same as scene 4 (fox at clearing edge)
STORY_SCENES['forest_5'] = STORY_SCENES['forest_4'];
