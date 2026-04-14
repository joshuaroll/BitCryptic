// Moon story scenes — "The Lunar Hermit"
// Keys: moon_0 through moon_7

// Scene 0: Moon surface, silence, craters everywhere, starfield
STORY_SCENES['moon_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m0Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#020408"/><stop offset="100%" stop-color="#080c14"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#m0Sky)"/>
<!-- Stars -->
<g fill="#fff">
  <circle cx="20" cy="15" r="0.8"/><circle cx="55" cy="40" r="0.6"/><circle cx="90" cy="10" r="1"/>
  <circle cx="130" cy="55" r="0.5"/><circle cx="160" cy="20" r="0.7"/><circle cx="200" cy="8" r="0.9"/>
  <circle cx="235" cy="45" r="0.6"/><circle cx="270" cy="18" r="0.8"/><circle cx="310" cy="50" r="0.5"/>
  <circle cx="340" cy="12" r="1"/><circle cx="375" cy="38" r="0.6"/><circle cx="410" cy="22" r="0.7"/>
  <circle cx="445" cy="48" r="0.8"/><circle cx="475" cy="14" r="0.5"/><circle cx="490" cy="55" r="0.6"/>
  <circle cx="45" cy="70" r="0.5"/><circle cx="110" cy="80" r="0.7"/><circle cx="180" cy="65" r="0.4"/>
  <circle cx="260" cy="75" r="0.6"/><circle cx="330" cy="68" r="0.5"/><circle cx="400" cy="78" r="0.7"/>
  <circle cx="460" cy="65" r="0.4"/><circle cx="70" cy="95" r="0.6"/><circle cx="150" cy="100" r="0.5"/>
  <circle cx="220" cy="90" r="0.7"/><circle cx="290" cy="95" r="0.4"/><circle cx="360" cy="88" r="0.6"/>
  <circle cx="430" cy="92" r="0.5"/><circle cx="15" cy="110" r="0.4"/><circle cx="485" cy="105" r="0.6"/>
  <circle cx="120" cy="35" r="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
  <circle cx="300" cy="30" r="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
  <circle cx="450" cy="70" r="0.3"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
</g>
<!-- Earth in distance -->
<circle cx="80" cy="60" r="14" fill="#1a4a6a"/>
<path d="M72,54 Q78,58 74,64 Q80,68 86,62 Q82,56 76,52" fill="#2a8a5a" opacity="0.5"/>
<circle cx="80" cy="60" r="14" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
<circle cx="80" cy="60" r="16" fill="none" stroke="#6abaee" stroke-width="0.3" opacity="0.15"/>
<!-- Moon surface -->
<path d="M0,170 Q50,165 100,168 Q150,160 200,170 Q250,165 300,172 Q350,162 400,168 Q450,170 500,166 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,172 Q50,167 100,170 Q150,162 200,172 Q250,167 300,174 Q350,164 400,170 Q450,172 500,168 L500,260 L0,260 Z" fill="#7a7870"/>
<!-- Craters -->
<ellipse cx="60" cy="210" rx="28" ry="8" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="60" cy="210" rx="20" ry="5" fill="#606058"/>
<ellipse cx="200" cy="230" rx="35" ry="10" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="200" cy="230" rx="25" ry="6" fill="#606058"/>
<ellipse cx="340" cy="195" rx="22" ry="7" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="340" cy="195" rx="15" ry="4" fill="#606058"/>
<ellipse cx="450" cy="220" rx="18" ry="5" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="450" cy="220" rx="12" ry="3" fill="#606058"/>
<ellipse cx="140" cy="200" rx="12" ry="4" fill="#6a6860"/>
<!-- Subtle dust particles -->
<circle cx="150" cy="175" r="1" fill="#aaa8a0" opacity="0.15"><animate attributeName="opacity" values="0.05;0.2;0.05" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="320" cy="180" r="0.8" fill="#aaa8a0" opacity="0.1"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
</svg>`;

// Scene 1: Dome glows in distance, footprints in dust
STORY_SCENES['moon_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m1Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#020408"/><stop offset="100%" stop-color="#080c14"/>
  </linearGradient>
  <radialGradient id="m1DomeGlow" cx="78%" cy="72%" r="14%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.35"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m1Sky)"/>
<!-- Stars -->
<g fill="#fff">
  <circle cx="20" cy="15" r="0.8"/><circle cx="55" cy="40" r="0.6"/><circle cx="90" cy="10" r="1"/>
  <circle cx="130" cy="55" r="0.5"/><circle cx="160" cy="20" r="0.7"/><circle cx="200" cy="8" r="0.9"/>
  <circle cx="235" cy="45" r="0.6"/><circle cx="270" cy="18" r="0.8"/><circle cx="310" cy="50" r="0.5"/>
  <circle cx="340" cy="12" r="1"/><circle cx="375" cy="38" r="0.6"/><circle cx="410" cy="22" r="0.7"/>
  <circle cx="445" cy="48" r="0.8"/><circle cx="475" cy="14" r="0.5"/><circle cx="490" cy="55" r="0.6"/>
  <circle cx="45" cy="70" r="0.5"/><circle cx="110" cy="80" r="0.7"/><circle cx="180" cy="65" r="0.4"/>
  <circle cx="260" cy="75" r="0.6"/><circle cx="330" cy="68" r="0.5"/><circle cx="400" cy="78" r="0.7"/>
  <circle cx="460" cy="65" r="0.4"/><circle cx="70" cy="95" r="0.6"/><circle cx="150" cy="100" r="0.5"/>
  <circle cx="220" cy="90" r="0.7"/><circle cx="290" cy="95" r="0.4"/><circle cx="360" cy="88" r="0.6"/>
  <circle cx="430" cy="92" r="0.5"/><circle cx="15" cy="110" r="0.4"/><circle cx="485" cy="105" r="0.6"/>
</g>
<!-- Earth in distance -->
<circle cx="80" cy="60" r="14" fill="#1a4a6a"/>
<path d="M72,54 Q78,58 74,64 Q80,68 86,62 Q82,56 76,52" fill="#2a8a5a" opacity="0.5"/>
<circle cx="80" cy="60" r="14" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
<!-- Moon surface -->
<path d="M0,170 Q50,165 100,168 Q150,160 200,170 Q250,165 300,172 Q350,162 400,168 Q450,170 500,166 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,172 Q50,167 100,170 Q150,162 200,172 Q250,167 300,174 Q350,164 400,170 Q450,172 500,168 L500,260 L0,260 Z" fill="#7a7870"/>
<!-- Craters -->
<ellipse cx="60" cy="210" rx="28" ry="8" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="60" cy="210" rx="20" ry="5" fill="#606058"/>
<ellipse cx="200" cy="230" rx="35" ry="10" fill="#6a6860" stroke="#5a5850" stroke-width="1"/>
<ellipse cx="200" cy="230" rx="25" ry="6" fill="#606058"/>
<ellipse cx="140" cy="200" rx="12" ry="4" fill="#6a6860"/>
<!-- Footprints leading to dome -->
<g fill="#6a6860" opacity="0.6">
  <ellipse cx="260" cy="240" rx="3" ry="5" transform="rotate(-10,260,240)"/>
  <ellipse cx="275" cy="235" rx="3" ry="5" transform="rotate(5,275,235)"/>
  <ellipse cx="290" cy="228" rx="3" ry="5" transform="rotate(-8,290,228)"/>
  <ellipse cx="308" cy="222" rx="3" ry="5" transform="rotate(5,308,222)"/>
  <ellipse cx="325" cy="215" rx="2.5" ry="4.5" transform="rotate(-5,325,215)"/>
  <ellipse cx="342" cy="208" rx="2.5" ry="4.5" transform="rotate(8,342,208)"/>
  <ellipse cx="358" cy="200" rx="2" ry="4" transform="rotate(-5,358,200)"/>
  <ellipse cx="372" cy="192" rx="2" ry="4" transform="rotate(5,372,192)"/>
</g>
<!-- Dome -->
<path d="M380,185 Q395,145 410,185" fill="#2a2820" stroke="#d4d0c0" stroke-width="1" opacity="0.8"/>
<ellipse cx="395" cy="185" rx="15" ry="3" fill="#2a2820" stroke="#d4d0c0" stroke-width="0.5" opacity="0.6"/>
<!-- Dome warm glow -->
<path d="M383,183 Q395,155 407,183" fill="#ffe880" opacity="0.12">
  <animate attributeName="opacity" values="0.08;0.16;0.08" dur="4s" repeatCount="indefinite"/>
</path>
<rect x="0" y="0" width="500" height="260" fill="url(#m1DomeGlow)"/>
</svg>`;

// Scene 2: Mark introduces himself inside dome
STORY_SCENES['moon_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m2DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m2WarmLight" cx="50%" cy="60%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m2DomeBg)"/>
<!-- Curved glass dome showing stars outside -->
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.3"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<!-- Stars visible through dome -->
<g fill="#fff" opacity="0.4">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="180" cy="60" r="0.3"/><circle cx="300" cy="55" r="0.6"/><circle cx="430" cy="75" r="0.4"/>
</g>
<!-- Earth visible through dome glass -->
<circle cx="400" cy="45" r="10" fill="#1a4a6a" opacity="0.6"/>
<path d="M395,39 Q399,42 396,47 Q401,50 405,45 Q402,40 398,38" fill="#2a8a5a" opacity="0.3"/>
<circle cx="400" cy="45" r="10" fill="none" stroke="#4a9aba" stroke-width="0.3" opacity="0.2"/>
<!-- Warm interior glow -->
<rect x="0" y="0" width="500" height="260" fill="url(#m2WarmLight)"/>
<!-- Floor -->
<rect x="60" y="220" width="380" height="40" fill="#2a2418" rx="4"/>
<!-- Left bookshelf -->
<g opacity="0.8">
  <path d="M65,100 Q60,120 62,180 L80,180 Q78,120 82,100 Z" fill="#4a3820"/>
  <rect x="65" y="105" width="14" height="10" rx="1" fill="#8a6040" opacity="0.7"/>
  <rect x="66" y="118" width="12" height="9" rx="1" fill="#6a8050" opacity="0.6"/>
  <rect x="64" y="130" width="15" height="10" rx="1" fill="#8a5040" opacity="0.7"/>
  <rect x="65" y="143" width="13" height="9" rx="1" fill="#5a6a80" opacity="0.6"/>
  <rect x="63" y="155" width="16" height="10" rx="1" fill="#8a7040" opacity="0.7"/>
  <rect x="65" y="168" width="13" height="9" rx="1" fill="#6a5060" opacity="0.6"/>
  <!-- Right bookshelf -->
  <path d="M418,100 Q422,120 420,180 L438,180 Q440,120 435,100 Z" fill="#4a3820"/>
  <rect x="420" y="105" width="14" height="10" rx="1" fill="#6a8050" opacity="0.7"/>
  <rect x="421" y="118" width="12" height="9" rx="1" fill="#8a5040" opacity="0.6"/>
  <rect x="419" y="130" width="15" height="10" rx="1" fill="#5a6a80" opacity="0.7"/>
  <rect x="420" y="143" width="13" height="9" rx="1" fill="#8a7040" opacity="0.6"/>
  <rect x="418" y="155" width="16" height="10" rx="1" fill="#8a6040" opacity="0.7"/>
  <rect x="420" y="168" width="13" height="9" rx="1" fill="#6a5060" opacity="0.6"/>
</g>
<!-- Desk -->
<rect x="160" y="180" width="180" height="8" rx="2" fill="#5a4830"/>
<rect x="170" y="188" width="6" height="32" fill="#4a3820"/>
<rect x="324" y="188" width="6" height="32" fill="#4a3820"/>
<!-- Crossword grids on desk -->
<g opacity="0.8">
  <rect x="180" y="168" width="24" height="24" rx="1" fill="#e8e0d0" transform="rotate(-5,192,180)"/>
  <g stroke="#888" stroke-width="0.3" transform="rotate(-5,192,180)">
    <line x1="186" y1="168" x2="186" y2="192"/><line x1="192" y1="168" x2="192" y2="192"/><line x1="198" y1="168" x2="198" y2="192"/>
    <line x1="180" y1="174" x2="204" y2="174"/><line x1="180" y1="180" x2="204" y2="180"/><line x1="180" y1="186" x2="204" y2="186"/>
  </g>
  <rect x="215" y="170" width="22" height="22" rx="1" fill="#e8e0d0" transform="rotate(3,226,181)"/>
  <rect x="248" y="172" width="18" height="14" rx="1" fill="#d8d0c0" transform="rotate(8,257,179)" opacity="0.7"/>
  <rect x="275" y="170" width="20" height="16" rx="1" fill="#ddd8c8" transform="rotate(-3,285,178)" opacity="0.6"/>
</g>
<!-- Pen on desk -->
<line x1="300" y1="172" x2="318" y2="178" stroke="#1a1a2a" stroke-width="2" stroke-linecap="round"/>
<circle cx="318" cy="178" r="1.5" fill="#2a2a4a"/>
<!-- Old armchair -->
<g transform="translate(120,185)">
  <rect x="0" y="5" width="30" height="28" rx="6" fill="#5a3828"/>
  <rect x="-6" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="26" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="2" y="2" width="26" height="14" rx="4" fill="#6a4838"/>
</g>
<!-- Mug of tea with steam -->
<rect x="310" y="165" width="10" height="12" rx="2" fill="#8a7a60"/>
<path d="M320,168 Q325,170 320,174" fill="none" stroke="#8a7a60" stroke-width="1.5"/>
<g opacity="0.3">
  <path d="M313,162 Q314,155 312,148" fill="none" stroke="#aaa" stroke-width="1">
    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M317,163 Q318,154 316,146" fill="none" stroke="#aaa" stroke-width="1">
    <animate attributeName="opacity" values="0.2;0.35;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
  </path>
</g>
<!-- Warm ceiling light -->
<circle cx="250" cy="80" r="4" fill="#ffe880" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="80" r="12" fill="#ffe880" opacity="0.08"/>
</svg>`;

// Scene 3: Puzzle — "Blemish is also a target (4)" answer MARK — clue etched in lunar rock
STORY_SCENES['moon_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m3Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="60%" stop-color="#14120e"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m3ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m3TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#m3Bg)"/>
<!-- Dome glass behind showing stars -->
<path d="M0,0 L0,100 Q250,70 500,100 L500,0 Z" fill="#060810"/>
<g fill="#fff" opacity="0.3">
  <circle cx="60" cy="30" r="0.6"/><circle cx="150" cy="20" r="0.8"/><circle cx="250" cy="15" r="0.5"/>
  <circle cx="340" cy="25" r="0.7"/><circle cx="430" cy="18" r="0.6"/><circle cx="100" cy="50" r="0.4"/>
  <circle cx="200" cy="45" r="0.5"/><circle cx="380" cy="42" r="0.6"/><circle cx="460" cy="50" r="0.4"/>
</g>
<!-- Earth through dome glass -->
<circle cx="420" cy="35" r="8" fill="#1a4a6a" opacity="0.5"/>
<path d="M416,31 Q419,33 417,37 Q421,39 424,35 Q422,32 418,30" fill="#2a8a5a" opacity="0.25"/>
<!-- Floor surface -->
<rect x="40" y="150" width="420" height="110" fill="#2a2418" rx="4"/>
<!-- Lunar rock slab with clue -->
<ellipse cx="250" cy="205" rx="90" ry="14" fill="#000" opacity="0.15"/>
<path d="M165,165 L170,152 Q175,148 185,148 L315,148 Q325,148 330,152 L335,165 Q337,170 333,175 L337,198 Q335,202 330,204 L170,204 Q165,202 163,198 L167,175 Q163,170 165,165 Z" fill="#5a5a6a"/>
<path d="M170,152 L175,150 Q180,148 187,149 L313,149 Q320,148 325,150 L330,152 L327,168 Q325,172 320,173 L180,173 Q175,172 173,168 Z" fill="#6a6a7a"/>
<rect x="177" y="149" width="146" height="24" rx="3" fill="#7a7a8a" opacity="0.4"/>
<!-- Clue text etched in rock -->
<g filter="url(#m3TextGlow)">
  <text x="250" y="160" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">Blemish is also</text>
  <text x="250" y="171" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">a target (4)</text>
</g>
<ellipse cx="250" cy="163" rx="80" ry="25" fill="url(#m3ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
</ellipse>
<!-- Stone texture lines -->
<line x1="175" y1="182" x2="175" y2="194" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="179" y1="182" x2="179" y2="194" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="183" y1="182" x2="183" y2="194" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<!-- Crossword grid on desk beside rock -->
<rect x="360" y="155" width="70" height="50" rx="3" fill="#e8e0d0" opacity="0.6"/>
<g stroke="#999" stroke-width="0.3" opacity="0.6">
  <line x1="374" y1="155" x2="374" y2="205"/><line x1="388" y1="155" x2="388" y2="205"/>
  <line x1="402" y1="155" x2="402" y2="205"/><line x1="416" y1="155" x2="416" y2="205"/>
  <line x1="360" y1="168" x2="430" y2="168"/><line x1="360" y1="181" x2="430" y2="181"/>
  <line x1="360" y1="194" x2="430" y2="194"/>
</g>
<rect x="374" y="155" width="14" height="13" fill="#2a2a2a" opacity="0.5"/>
<rect x="402" y="168" width="14" height="13" fill="#2a2a2a" opacity="0.5"/>
<!-- Pen -->
<line x1="345" y1="160" x2="352" y2="200" stroke="#1a1a3a" stroke-width="2" stroke-linecap="round"/>
<!-- Warm ambient light -->
<circle cx="250" cy="120" r="4" fill="#ffe880" opacity="0.3"/>
<circle cx="250" cy="120" r="20" fill="#ffe880" opacity="0.04"/>
</svg>`;

// Scene 4: Mark's character, warm dome interior
STORY_SCENES['moon_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m4DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m4WarmLight" cx="50%" cy="55%" r="55%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m4DomeBg)"/>
<!-- Curved dome glass -->
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.3"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<!-- Stars through dome -->
<g fill="#fff" opacity="0.35">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
</g>
<!-- Earth through dome -->
<circle cx="390" cy="50" r="11" fill="#1a4a6a" opacity="0.5"/>
<path d="M385,45 Q389,48 386,53 Q391,55 395,50 Q392,46 388,44" fill="#2a8a5a" opacity="0.3"/>
<circle cx="390" cy="50" r="11" fill="none" stroke="#4a9aba" stroke-width="0.3" opacity="0.2"/>
<!-- Warm glow overlay -->
<rect x="0" y="0" width="500" height="260" fill="url(#m4WarmLight)"/>
<!-- Floor -->
<rect x="60" y="220" width="380" height="40" fill="#2a2418" rx="4"/>
<!-- Bookshelves -->
<g opacity="0.8">
  <path d="M65,100 Q60,120 62,180 L80,180 Q78,120 82,100 Z" fill="#4a3820"/>
  <rect x="65" y="105" width="14" height="10" rx="1" fill="#8a6040" opacity="0.7"/>
  <rect x="66" y="118" width="12" height="9" rx="1" fill="#6a8050" opacity="0.6"/>
  <rect x="64" y="130" width="15" height="10" rx="1" fill="#8a5040" opacity="0.7"/>
  <rect x="65" y="143" width="13" height="9" rx="1" fill="#5a6a80" opacity="0.6"/>
  <rect x="63" y="155" width="16" height="10" rx="1" fill="#8a7040" opacity="0.7"/>
  <path d="M418,100 Q422,120 420,180 L438,180 Q440,120 435,100 Z" fill="#4a3820"/>
  <rect x="420" y="105" width="14" height="10" rx="1" fill="#6a8050" opacity="0.7"/>
  <rect x="421" y="118" width="12" height="9" rx="1" fill="#8a5040" opacity="0.6"/>
  <rect x="419" y="130" width="15" height="10" rx="1" fill="#5a6a80" opacity="0.7"/>
  <rect x="420" y="143" width="13" height="9" rx="1" fill="#8a7040" opacity="0.6"/>
</g>
<!-- Desk with scattered crosswords -->
<rect x="160" y="180" width="180" height="8" rx="2" fill="#5a4830"/>
<rect x="170" y="188" width="6" height="32" fill="#4a3820"/>
<rect x="324" y="188" width="6" height="32" fill="#4a3820"/>
<rect x="180" y="168" width="24" height="24" rx="1" fill="#e8e0d0" opacity="0.8" transform="rotate(-5,192,180)"/>
<rect x="215" y="170" width="22" height="22" rx="1" fill="#e8e0d0" opacity="0.7" transform="rotate(3,226,181)"/>
<rect x="250" y="169" width="20" height="20" rx="1" fill="#ddd8c8" opacity="0.6" transform="rotate(7,260,179)"/>
<!-- Armchair with Mark silhouette -->
<g transform="translate(120,185)">
  <rect x="0" y="5" width="30" height="28" rx="6" fill="#5a3828"/>
  <rect x="-6" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="26" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="2" y="2" width="26" height="14" rx="4" fill="#6a4838"/>
</g>
<!-- Tea mug with steam -->
<rect x="310" y="165" width="10" height="12" rx="2" fill="#8a7a60"/>
<path d="M320,168 Q325,170 320,174" fill="none" stroke="#8a7a60" stroke-width="1.5"/>
<g opacity="0.3">
  <path d="M313,162 Q314,155 312,148" fill="none" stroke="#aaa" stroke-width="1">
    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M317,163 Q318,154 316,146" fill="none" stroke="#aaa" stroke-width="1">
    <animate attributeName="opacity" values="0.2;0.35;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
  </path>
</g>
<!-- Warm ceiling light with pulse -->
<circle cx="250" cy="80" r="4" fill="#ffe880" opacity="0.5">
  <animate attributeName="opacity" values="0.35;0.55;0.35" dur="6s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="80" r="14" fill="#ffe880" opacity="0.06"/>
<!-- Extra warmth — wall sconces -->
<circle cx="90" cy="140" r="3" fill="#ffe880" opacity="0.2"/>
<circle cx="410" cy="140" r="3" fill="#ffe880" opacity="0.2"/>
</svg>`;

// Scene 5: Puzzle — "Lunar feature from confused tracer (6)" answer CRATER — clue etched in lunar rock
STORY_SCENES['moon_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m5Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="60%" stop-color="#14120e"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m5ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m5TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#m5Bg)"/>
<!-- Dome glass behind showing stars and moon surface -->
<path d="M0,0 L0,100 Q250,70 500,100 L500,0 Z" fill="#060810"/>
<g fill="#fff" opacity="0.3">
  <circle cx="50" cy="25" r="0.7"/><circle cx="120" cy="15" r="0.5"/><circle cx="200" cy="30" r="0.6"/>
  <circle cx="280" cy="12" r="0.8"/><circle cx="360" cy="28" r="0.5"/><circle cx="440" cy="20" r="0.7"/>
  <circle cx="90" cy="55" r="0.4"/><circle cx="180" cy="48" r="0.6"/><circle cx="320" cy="45" r="0.5"/>
  <circle cx="410" cy="52" r="0.4"/><circle cx="470" cy="38" r="0.6"/>
</g>
<!-- Earth through dome -->
<circle cx="60" cy="40" r="9" fill="#1a4a6a" opacity="0.5"/>
<path d="M56,36 Q59,38 57,42 Q61,44 64,40 Q62,37 58,35" fill="#2a8a5a" opacity="0.25"/>
<!-- Moon surface visible through glass -->
<path d="M0,100 Q100,92 200,98 Q300,88 400,96 Q450,92 500,100 L500,118 Q400,110 300,116 Q200,108 100,114 Q50,118 0,114 Z" fill="#6a6860" opacity="0.3"/>
<!-- Floor surface -->
<rect x="40" y="150" width="420" height="110" fill="#2a2418" rx="4"/>
<!-- Large lunar rock slab with clue -->
<ellipse cx="250" cy="210" rx="95" ry="15" fill="#000" opacity="0.15"/>
<path d="M158,168 L163,154 Q168,150 178,150 L322,150 Q332,150 337,154 L342,168 Q344,173 340,178 L344,202 Q342,206 337,208 L163,208 Q158,206 156,202 L160,178 Q156,173 158,168 Z" fill="#5a5a6a"/>
<path d="M163,154 L168,152 Q173,150 180,151 L320,151 Q327,150 332,152 L337,154 L334,172 Q332,176 327,177 L173,177 Q168,176 166,172 Z" fill="#6a6a7a"/>
<rect x="170" y="151" width="160" height="26" rx="3" fill="#7a7a8a" opacity="0.4"/>
<!-- Clue text etched in rock -->
<g filter="url(#m5TextGlow)">
  <text x="250" y="163" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">Lunar feature from</text>
  <text x="250" y="174" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">confused tracer (6)</text>
</g>
<ellipse cx="250" cy="166" rx="85" ry="25" fill="url(#m5ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite"/>
</ellipse>
<!-- Stone texture lines -->
<line x1="168" y1="186" x2="168" y2="198" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="172" y1="186" x2="172" y2="198" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<line x1="176" y1="186" x2="176" y2="198" stroke="#8a8a9a" stroke-width="1" opacity="0.3"/>
<!-- Small crater sketch on the rock face -->
<ellipse cx="320" cy="193" rx="12" ry="4" fill="none" stroke="#8a8a9a" stroke-width="0.5" opacity="0.4"/>
<ellipse cx="320" cy="193" rx="8" ry="2.5" fill="none" stroke="#8a8a9a" stroke-width="0.3" opacity="0.3"/>
<!-- Papers on floor nearby -->
<rect x="370" y="165" width="60" height="45" rx="2" fill="#ddd8c8" opacity="0.5" transform="rotate(6,400,187)"/>
<rect x="80" y="170" width="50" height="38" rx="2" fill="#d8d0c0" opacity="0.4" transform="rotate(-8,105,189)"/>
<!-- Warm ambient light -->
<circle cx="250" cy="125" r="4" fill="#ffe880" opacity="0.3"/>
<circle cx="250" cy="125" r="18" fill="#ffe880" opacity="0.04"/>
</svg>`;

// Scene 6: Mark's approval, warm scene
STORY_SCENES['moon_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m6DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1e1a12"/>
  </linearGradient>
  <radialGradient id="m6WarmLight" cx="50%" cy="50%" r="55%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m6DomeBg)"/>
<!-- Dome glass arch -->
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.35"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<!-- Stars visible through dome -->
<g fill="#fff" opacity="0.4">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="180" cy="60" r="0.3"/><circle cx="300" cy="55" r="0.6"/><circle cx="430" cy="75" r="0.4"/>
</g>
<!-- Earth through dome — slightly larger, warmer feel -->
<circle cx="380" cy="48" r="12" fill="#1a4a6a" opacity="0.55"/>
<path d="M374,42 Q379,46 376,52 Q382,56 387,48 Q384,43 378,41" fill="#2a8a5a" opacity="0.3"/>
<circle cx="380" cy="48" r="12" fill="none" stroke="#6abaee" stroke-width="0.4" opacity="0.2"/>
<!-- Warm glow overlay — stronger warmth for approval scene -->
<rect x="0" y="0" width="500" height="260" fill="url(#m6WarmLight)"/>
<!-- Floor -->
<rect x="60" y="220" width="380" height="40" fill="#2a2418" rx="4"/>
<!-- Bookshelves -->
<g opacity="0.8">
  <path d="M65,100 Q60,120 62,180 L80,180 Q78,120 82,100 Z" fill="#4a3820"/>
  <rect x="65" y="105" width="14" height="10" rx="1" fill="#8a6040" opacity="0.7"/>
  <rect x="66" y="118" width="12" height="9" rx="1" fill="#6a8050" opacity="0.6"/>
  <rect x="64" y="130" width="15" height="10" rx="1" fill="#8a5040" opacity="0.7"/>
  <rect x="65" y="143" width="13" height="9" rx="1" fill="#5a6a80" opacity="0.6"/>
  <path d="M418,100 Q422,120 420,180 L438,180 Q440,120 435,100 Z" fill="#4a3820"/>
  <rect x="420" y="105" width="14" height="10" rx="1" fill="#6a8050" opacity="0.7"/>
  <rect x="421" y="118" width="12" height="9" rx="1" fill="#8a5040" opacity="0.6"/>
  <rect x="419" y="130" width="15" height="10" rx="1" fill="#5a6a80" opacity="0.7"/>
  <rect x="420" y="143" width="13" height="9" rx="1" fill="#8a7040" opacity="0.6"/>
</g>
<!-- Desk -->
<rect x="160" y="180" width="180" height="8" rx="2" fill="#5a4830"/>
<rect x="170" y="188" width="6" height="32" fill="#4a3820"/>
<rect x="324" y="188" width="6" height="32" fill="#4a3820"/>
<!-- Solved crosswords stacked neatly -->
<rect x="190" y="168" width="24" height="24" rx="1" fill="#e8e0d0" opacity="0.8"/>
<rect x="220" y="168" width="24" height="24" rx="1" fill="#e8e0d0" opacity="0.75"/>
<rect x="250" y="168" width="24" height="24" rx="1" fill="#e8e0d0" opacity="0.7"/>
<!-- Armchair -->
<g transform="translate(120,185)">
  <rect x="0" y="5" width="30" height="28" rx="6" fill="#5a3828"/>
  <rect x="-6" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="26" y="0" width="10" height="30" rx="4" fill="#4a2818"/>
  <rect x="2" y="2" width="26" height="14" rx="4" fill="#6a4838"/>
</g>
<!-- Tea mug -->
<rect x="310" y="165" width="10" height="12" rx="2" fill="#8a7a60"/>
<path d="M320,168 Q325,170 320,174" fill="none" stroke="#8a7a60" stroke-width="1.5"/>
<g opacity="0.3">
  <path d="M313,162 Q314,155 312,148" fill="none" stroke="#aaa" stroke-width="1">
    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
  </path>
</g>
<!-- Warm ceiling light — brighter for approval -->
<circle cx="250" cy="80" r="5" fill="#ffe880" opacity="0.55">
  <animate attributeName="opacity" values="0.45;0.65;0.45" dur="4s" repeatCount="indefinite"/>
</circle>
<circle cx="250" cy="80" r="18" fill="#ffe880" opacity="0.08"/>
<!-- Wall sconces glowing warmer -->
<circle cx="90" cy="140" r="4" fill="#ffe880" opacity="0.25">
  <animate attributeName="opacity" values="0.18;0.3;0.18" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="410" cy="140" r="4" fill="#ffe880" opacity="0.25">
  <animate attributeName="opacity" values="0.18;0.3;0.18" dur="5s" repeatCount="indefinite" begin="1s"/>
</circle>
</svg>`;

// Scene 7: Complete — dome glows, farewell, Earth rising
STORY_SCENES['moon_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m7Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050810"/><stop offset="100%" stop-color="#0a0e18"/>
  </linearGradient>
  <radialGradient id="m7EarthGlow" cx="50%" cy="55%" r="30%">
    <stop offset="0%" stop-color="#4a8aba" stop-opacity="0.08"/><stop offset="100%" stop-color="#4a8aba" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m7DomeGlow" cx="22%" cy="78%" r="18%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.4"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m7Sky)"/>
<!-- Stars everywhere -->
<g fill="#fff">
  <circle cx="30" cy="30" r="0.8"/><circle cx="70" cy="60" r="0.5"/><circle cx="110" cy="20" r="1"/>
  <circle cx="150" cy="50" r="0.6"/><circle cx="190" cy="35" r="0.7"/><circle cx="230" cy="15" r="0.5"/>
  <circle cx="270" cy="45" r="0.8"/><circle cx="310" cy="25" r="0.6"/><circle cx="350" cy="55" r="0.9"/>
  <circle cx="390" cy="30" r="0.5"/><circle cx="430" cy="50" r="0.7"/><circle cx="470" cy="20" r="0.6"/>
  <circle cx="50" cy="90" r="0.4"/><circle cx="130" cy="85" r="0.6"/><circle cx="210" cy="78" r="0.5"/>
  <circle cx="290" cy="82" r="0.7"/><circle cx="370" cy="75" r="0.4"/><circle cx="450" cy="88" r="0.6"/>
  <circle cx="90" cy="110" r="0.5"/><circle cx="170" cy="105" r="0.3"/><circle cx="330" cy="100" r="0.5"/>
  <circle cx="410" cy="108" r="0.4"/><circle cx="480" cy="95" r="0.6"/><circle cx="20" cy="120" r="0.3"/>
  <circle cx="40" cy="55" r="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>
  <circle cx="250" cy="60" r="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" begin="1.5s"/></circle>
  <circle cx="460" cy="40" r="0.4"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.5s" repeatCount="indefinite" begin="0.8s"/></circle>
</g>
<!-- Earth rising over lunar horizon (larger, more detailed) -->
<circle cx="310" cy="100" r="65" fill="#0a2a4a"/>
<circle cx="310" cy="100" r="65" fill="#1a4a6a"/>
<circle cx="310" cy="100" r="65" fill="url(#m7EarthGlow)"/>
<!-- Oceans - subtle depth -->
<circle cx="310" cy="100" r="62" fill="#1a5a7a" opacity="0.3"/>
<!-- Continents - larger and more recognisable -->
<path d="M275,72 Q285,68 295,74 Q300,80 295,90 Q288,95 280,90 Q272,82 275,72" fill="#2a8a5a" opacity="0.5"/>
<path d="M300,65 Q310,60 320,68 Q325,78 318,88 Q310,92 302,85 Q296,76 300,65" fill="#2a8a5a" opacity="0.45"/>
<path d="M330,78 Q340,74 348,82 Q352,92 346,102 Q338,108 330,100 Q326,90 330,78" fill="#2a8a5a" opacity="0.4"/>
<path d="M305,105 Q315,100 325,106 Q330,115 322,125 Q312,130 305,122 Q300,112 305,105" fill="#2a8a5a" opacity="0.35"/>
<path d="M280,100 Q288,96 296,102 Q298,110 290,116 Q282,112 280,100" fill="#2a8a5a" opacity="0.3"/>
<!-- Cloud wisps -->
<path d="M270,80 Q290,76 310,82" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.08"/>
<path d="M320,90 Q340,86 355,92" fill="none" stroke="#fff" stroke-width="1" opacity="0.06"/>
<path d="M285,110 Q305,106 325,112" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.07"/>
<!-- Atmosphere glow - thicker, more vivid -->
<circle cx="310" cy="100" r="68" fill="none" stroke="#6abaee" stroke-width="3" opacity="0.18"/>
<circle cx="310" cy="100" r="72" fill="none" stroke="#4a9ade" stroke-width="2" opacity="0.1"/>
<circle cx="310" cy="100" r="76" fill="none" stroke="#3a8ace" stroke-width="1" opacity="0.05"/>
<!-- Lunar horizon -->
<path d="M0,185 Q80,178 160,182 Q250,175 340,184 Q420,178 500,182 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,190 Q100,184 200,188 Q300,180 400,190 Q450,185 500,188 L500,260 L0,260 Z" fill="#7a7870"/>
<!-- Small craters on horizon -->
<ellipse cx="100" cy="215" rx="15" ry="4" fill="#6a6860"/>
<ellipse cx="100" cy="215" rx="10" ry="2.5" fill="#606058"/>
<ellipse cx="440" cy="210" rx="12" ry="3" fill="#6a6860"/>
<ellipse cx="440" cy="210" rx="8" ry="2" fill="#606058"/>
<ellipse cx="250" cy="230" rx="20" ry="5" fill="#6a6860"/>
<ellipse cx="250" cy="230" rx="14" ry="3" fill="#606058"/>
<!-- Dome on surface — glowing warmly -->
<path d="M80,195 Q110,148 140,195" fill="#2a2820" stroke="#d4d0c0" stroke-width="1.2" opacity="0.85"/>
<ellipse cx="110" cy="195" rx="30" ry="5" fill="#2a2820" stroke="#d4d0c0" stroke-width="0.5" opacity="0.6"/>
<!-- Dome warm glow — stronger for farewell -->
<path d="M85,193 Q110,155 135,193" fill="#ffe880" opacity="0.18">
  <animate attributeName="opacity" values="0.12;0.22;0.12" dur="4s" repeatCount="indefinite"/>
</path>
<rect x="0" y="0" width="500" height="260" fill="url(#m7DomeGlow)"/>
<!-- Serene Earth glow -->
<rect x="0" y="0" width="500" height="260" fill="url(#m7EarthGlow)"/>
<!-- (title text removed) -->
</svg>`;
