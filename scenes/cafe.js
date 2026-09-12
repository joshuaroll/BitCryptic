// Cafe story scenes for "Cryptic Cafe"
// Keys: cafe_0 through cafe_4
// DRAFT, for review only

// Scene 0: Push open the door. Cafe interior, warm lamplight, mismatched tables, framed puzzles
STORY_SCENES['cafe_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="cafeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="60%" stop-color="#2a1a0c"/><stop offset="100%" stop-color="#1a1008"/>
  </linearGradient>
  <radialGradient id="lampGlow" cx="50%" cy="20%" r="50%">
    <stop offset="0%" stop-color="#ffa040" stop-opacity="0.25"/><stop offset="100%" stop-color="#ffa040" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lampGlow2" cx="25%" cy="15%" r="30%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.18"/><stop offset="100%" stop-color="#ffeaa7" stop-opacity="0"/>
  </radialGradient>
  <filter id="warmGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#cafeBg)"/>
<!-- Warm light overlay -->
<circle cx="250" cy="40" r="200" fill="url(#lampGlow)"/>
<circle cx="130" cy="30" r="140" fill="url(#lampGlow2)"/>
<!-- Back wall, cream -->
<rect x="0" y="0" width="500" height="170" fill="#e8d8c0" opacity="0.12"/>
<!-- Wainscoting -->
<rect x="0" y="130" width="500" height="40" fill="#5a3a1a" opacity="0.35"/>
<line x1="0" y1="130" x2="500" y2="130" stroke="#6b4a20" stroke-width="2" opacity="0.3"/>
<line x1="0" y1="168" x2="500" y2="168" stroke="#6b4a20" stroke-width="1" opacity="0.2"/>
<!-- FRAMED PUZZLES. The best idea in the room and previously the least
     visible: cream rects at 0.2 with 5px serif text, which is a smudge. A
     framed crossword reads at any size as a GRID of black and white cells, so
     draw the grid rather than the words. -->
<g opacity="0.92">
  <path d="M58,48 L102,50 L102,102 L58,100 Z" fill="#2a1808"/>
  <path d="M62,52 L98,54 L98,98 L62,96 Z" fill="#e8dcc4"/>
  <path d="M70,53 v44 M78,53.5 v44 M86,54 v44 M62,63 h36 M62,74 h36 M62,85 h36" stroke="#8a7550" stroke-width="0.6" opacity="0.55"/>
  <rect x="62" y="54" width="8" height="9" fill="#3a2a18" opacity="0.85"/>
  <rect x="78" y="64" width="8" height="10" fill="#3a2a18" opacity="0.85"/>
  <rect x="70" y="75" width="8" height="10" fill="#3a2a18" opacity="0.85"/>
  <rect x="86" y="86" width="8" height="10" fill="#3a2a18" opacity="0.8"/>
  <path d="M58,48 L102,50 L102,54 L58,52 Z" fill="#5a3a1a" opacity="0.6"/>
</g>
<g opacity="0.92">
  <path d="M198,38 L246,40 L246,96 L198,94 Z" fill="#241606"/>
  <path d="M202,42 L242,44 L242,92 L202,90 Z" fill="#e8dcc4"/>
  <path d="M212,43 v48 M222,43.5 v48 M232,44 v48 M202,54 h40 M202,66 h40 M202,78 h40" stroke="#8a7550" stroke-width="0.6" opacity="0.55"/>
  <rect x="212" y="44" width="10" height="10" fill="#3a2a18" opacity="0.85"/>
  <rect x="202" y="55" width="10" height="11" fill="#3a2a18" opacity="0.85"/>
  <rect x="232" y="67" width="10" height="11" fill="#3a2a18" opacity="0.8"/>
  <rect x="222" y="79" width="10" height="11" fill="#3a2a18" opacity="0.8"/>
  <path d="M198,38 L246,40 L246,44 L198,42 Z" fill="#5a3a1a" opacity="0.6"/>
</g>
<g opacity="0.9">
  <path d="M378,46 L420,48 L420,98 L378,96 Z" fill="#2a1808"/>
  <path d="M382,50 L416,52 L416,94 L382,92 Z" fill="#e8dcc4"/>
  <path d="M390,51 v42 M399,51.5 v42 M408,52 v42 M382,62 h34 M382,73 h34 M382,84 h34" stroke="#8a7550" stroke-width="0.6" opacity="0.5"/>
  <rect x="390" y="52" width="9" height="10" fill="#3a2a18" opacity="0.8"/>
  <rect x="408" y="63" width="8" height="10" fill="#3a2a18" opacity="0.8"/>
  <rect x="382" y="74" width="8" height="10" fill="#3a2a18" opacity="0.75"/>
  <path d="M378,46 L420,48 L420,52 L378,50 Z" fill="#5a3a1a" opacity="0.55"/>
</g>
<!-- Floor -->
<rect x="0" y="170" width="500" height="90" fill="#3a2210" opacity="0.6"/>
<line x1="0" y1="170" x2="500" y2="170" stroke="#2a1808" stroke-width="1" opacity="0.4"/>
<!-- Floorboard lines -->
<line x1="0" y1="200" x2="500" y2="200" stroke="#2a1808" stroke-width="0.5" opacity="0.15"/>
<line x1="0" y1="230" x2="500" y2="230" stroke="#2a1808" stroke-width="0.5" opacity="0.1"/>
<!-- ====================
     REVAMP. Measured across every scene file, the ones that read as drawn art
     rather than as a diagram are the ones built from CURVES:
       wreck 47% paths   hidden 21%   cafe 14%   library 2%   skyship 2%
     cafe_0 itself had 23 rects and 2 paths. Element count was never the
     problem: it had 48, against wreck_5's 45. What it lacked was curvature.
     Every idea already here is kept; the boxes become shapes.
     ==================== -->

<!-- Floorboards converge toward the back wall. -->
<path d="M80 170 L12 260 M150 170 L115 260 M225 170 L215 260 M295 170 L320 260 M365 170 L425 260 M435 170 L525 260 M0 192 H500 M0 220 H500 M0 254 H500" fill="none" stroke="#6b4a20" stroke-width=".8" opacity=".2"/>
<!-- Service counter, behind the seating: coffee machine, grinder and cups. -->
<path d="M290 146 H496 V180 H290Z" fill="#5a3418"/>
<path d="M296 151 H490 V176 H296Z" fill="#6b3a10"/>
<path d="M301 154 H355 V172 H301Z M363 154 H418 V172 H363Z M426 154 H485 V172 H426Z" fill="#5a3010" opacity=".65"/>
<path d="M286 141 L488 138 L500 143 V149 H286Z" fill="#a06a38"/>
<path d="M287 141 L488 138 L498 142 L296 145Z" fill="#c07a48" opacity=".55"/>
<path d="M313 135 V110 Q313 106 318 106 H365 Q370 106 370 111 V136Z" fill="#8a7550"/>
<path d="M319 111 H364 V125 H319Z" fill="#d8c4a4"/>
<path d="M316 129 H369 V137 H316Z" fill="#3a2a18"/>
<path d="M322 135 H365" stroke="#d8c4a4" stroke-width="1"/>
<circle cx="329" cy="117" r="3.5" fill="#5a3418"/>
<path d="M329 117 l1 -2" stroke="#e8dcc4" stroke-width=".8"/>
<path d="M342 122 V127 H351 M359 122 V127 H368" fill="none" stroke="#8a7550" stroke-width="2"/>
<path d="M337 130 H346 V134 Q341 138 337 134Z M353 130 H362 V134 Q357 138 353 134Z" fill="#e8dcc4"/>
<path d="M322 101 H329 V106 H322Z M335 101 H342 V106 H335Z M348 101 H355 V106 H348Z" fill="#d8c4a4"/>
<path d="M379 114 H394 L391 124 H382Z" fill="#8a7550"/>
<path d="M380 116 H393 L390 121 H383Z" fill="#3a2210"/>
<path d="M382 124 H391 V136 H382Z M379 135 H396 V139 H379Z" fill="#a06a38"/>
<path d="M410 134 Q422 124 435 134 V139 H410Z" fill="#c9a441" opacity=".28"/>
<path d="M410 138 H436" stroke="#d8c4a4" stroke-width="1"/>
<path d="M415 135 Q418 127 422 134 M425 135 Q429 127 433 135" fill="none" stroke="#c07a48" stroke-width="3"/>
<path d="M452 119 H464 L467 137 H449Z" fill="#a06a38"/>
<path d="M453 119 V111 H463 V119" fill="#5a3418"/>
<!-- The round table's chair. It is drawn BEFORE the table so the table
     overlaps its seat: from the front you see the back above the top and
     the legs below it, which is what "pulled up to the table" looks like. -->
<g transform="translate(76,0) rotate(4 74 214)">
  <path d="M62,214 Q61,228 62,240" fill="none" stroke="#4a2c12" stroke-width="2.2" opacity="0.75"/>
  <path d="M86,214 Q87,228 86,240" fill="none" stroke="#4a2c12" stroke-width="2.2" opacity="0.75"/>
  <path d="M64,208 Q63,188 65,177 Q74,173 83,177 Q85,188 84,208" fill="none" stroke="#5a3616" stroke-width="2.6"/>
  <path d="M66,183 Q74,180 82,183" fill="none" stroke="#5a3616" stroke-width="2"/>
  <path d="M66,192 Q74,189 82,192" fill="none" stroke="#5a3616" stroke-width="1.8"/>
  <path d="M60,210 Q74,205 88,210 Q88,216 74,217 Q60,216 60,210 Z" fill="#7a4c24"/>
  <path d="M63,211 Q74,208 85,211 Q74,213 63,211 Z" fill="#a06a38" opacity="0.5"/>
  <path d="M64,217 Q63,229 64,241" fill="none" stroke="#5a3616" stroke-width="2.4"/>
  <path d="M84,217 Q85,229 84,241" fill="none" stroke="#5a3616" stroke-width="2.4"/>
  <path d="M64,231 L84,231" stroke="#5a3616" stroke-width="1.5" opacity="0.7"/>
</g>

<!-- ROUND TABLE. Draw order matters: SVG has no z-index, it paints in
     document order, so the PEDESTAL goes down first and the TOP goes down last
     and overlaps it. Previously the pedestal was emitted after the top and
     painted over the table's own front edge. -->
<path d="M104,236 Q120,230 136,236 Q136,242 120,243 Q104,242 104,236 Z" fill="#5a3010" opacity="0.9"/>
<path d="M112,192 Q108,214 106,230 Q112,236 120,236 Q128,236 134,230 Q132,214 128,192 Z" fill="#6b3a10" opacity="0.95"/>
<path d="M113,196 Q110,216 109,229" fill="none" stroke="#8a5228" stroke-width="2" opacity="0.4"/>
<ellipse cx="120" cy="196" rx="46" ry="9" fill="#6b3a10" opacity="0.9"/>
<ellipse cx="120" cy="193" rx="46" ry="9" fill="#a0623a"/>
<ellipse cx="112" cy="190" rx="24" ry="4" fill="#c07a48" opacity="0.35"/>

<!-- A CUP with a handle, a saucer, and a real curve to the lip -->
<ellipse cx="136" cy="189" rx="11" ry="3.4" fill="#d8c4a4" opacity="0.75"/>
<path d="M129,181 Q129,190 136,190 Q143,190 143,181 Q136,179 129,181 Z" fill="#e8d8c0" opacity="0.9"/>
<path d="M143,183 Q149,184 148,187 Q147,190 142,189" fill="none" stroke="#e8d8c0" stroke-width="1.6" opacity="0.85"/>
<ellipse cx="136" cy="181" rx="7" ry="2.2" fill="#5a3a1a" opacity="0.7"/>
<path d="M133,179 Q131,171 134,164" fill="none" stroke="#f4efe4" stroke-width="1.2" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.26;0.1" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M133,179 Q131,171 134,164;M133,179 Q136,171 133,164;M133,179 Q131,171 134,164" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M139,178 Q141,169 138,162" fill="none" stroke="#f4efe4" stroke-width="1.1" opacity="0.16">
  <animate attributeName="opacity" values="0.07;0.22;0.07" dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M139,178 Q141,169 138,162;M139,178 Q136,169 139,162;M139,178 Q141,169 138,162" dur="4.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- A HALF-SOLVED GRID left on the table. This is the thing that says the cafe
     is a place where people work on clues, which no amount of furniture says. -->
<g transform="rotate(-7 96 190)">
  <rect x="80" y="182" width="32" height="15" rx="1" fill="#f0e4cc" opacity="0.9"/>
  <path d="M80,182 h32 v15 h-32 Z" fill="none" stroke="#8a7550" stroke-width="0.6" opacity="0.7"/>
  <path d="M88,182 v15 M96,182 v15 M104,182 v15 M80,187 h32 M80,192 h32" stroke="#8a7550" stroke-width="0.5" opacity="0.5"/>
  <rect x="88" y="182" width="8" height="5" fill="#3a2210" opacity="0.55"/>
  <rect x="96" y="187" width="8" height="5" fill="#3a2210" opacity="0.55"/>
  <rect x="104" y="192" width="8" height="5" fill="#3a2210" opacity="0.5"/>
</g>
<path d="M116,196 Q122,193 127,195" fill="none" stroke="#ffd700" stroke-width="1.6" opacity="0.55" stroke-linecap="round"/>

<!-- and the square table's chair, turned the other way -->
<g transform="translate(276,0) rotate(-4 74 214)">
  <path d="M62,214 Q61,228 62,240" fill="none" stroke="#4a2c12" stroke-width="2.2" opacity="0.75"/>
  <path d="M86,214 Q87,228 86,240" fill="none" stroke="#4a2c12" stroke-width="2.2" opacity="0.75"/>
  <path d="M64,208 Q63,188 65,177 Q74,173 83,177 Q85,188 84,208" fill="none" stroke="#5a3616" stroke-width="2.6"/>
  <path d="M66,183 Q74,180 82,183" fill="none" stroke="#5a3616" stroke-width="2"/>
  <path d="M66,192 Q74,189 82,192" fill="none" stroke="#5a3616" stroke-width="1.8"/>
  <path d="M60,210 Q74,205 88,210 Q88,216 74,217 Q60,216 60,210 Z" fill="#7a4c24"/>
  <path d="M63,211 Q74,208 85,211 Q74,213 63,211 Z" fill="#a06a38" opacity="0.5"/>
  <path d="M64,217 Q63,229 64,241" fill="none" stroke="#5a3616" stroke-width="2.4"/>
  <path d="M84,217 Q85,229 84,241" fill="none" stroke="#5a3616" stroke-width="2.4"/>
  <path d="M64,231 L84,231" stroke="#5a3616" stroke-width="1.5" opacity="0.7"/>
</g>

<!-- SQUARE TABLE. Legs first, top last, for the same reason. -->
<rect x="316" y="230" width="6" height="13" rx="2" fill="#6b3a10" opacity="0.55"/>
<rect x="378" y="230" width="6" height="13" rx="2" fill="#6b3a10" opacity="0.5"/>
<path d="M308,192 Q312,214 309,232 Q318,236 326,232 Q328,214 326,192 Z" fill="#7a4420" opacity="0.6"/>
<path d="M374,192 Q378,214 375,232 Q384,236 392,232 Q394,214 392,192 Z" fill="#7a4420" opacity="0.55"/>
<path d="M306,190 Q350,186 394,190 L394,196 Q350,200 306,196 Z" fill="#a0522d"/>
<path d="M310,190.5 Q350,187 390,190.5 Q350,192.5 310,190.5 Z" fill="#c07a48" opacity="0.4"/>
<!-- the cloth hangs OVER the front edge, which is what makes it read as cloth
     rather than as a panel set into the table -->
<path d="M328,195 Q350,200 372,195 Q370,214 350,218 Q330,214 328,195 Z" fill="#d8c4a4" opacity="0.55"/>
<path d="M336,198 Q350,202 364,198 Q362,211 350,213 Q338,211 336,198 Z" fill="#f0e4cc" opacity="0.3"/>

<!-- HANGING LAMPS: a curved shade, a cord with a little sag, and the cone of
     light each one actually throws -->
<path d="M250,0 Q252,10 250,20" fill="none" stroke="#4a3a18" stroke-width="1.5" opacity="0.6"/>
<path d="M234,30 Q236,17 250,17 Q264,17 266,30 Q258,33 250,33 Q242,33 234,30 Z" fill="#8b6840" opacity="0.85"/>
<path d="M238,28 Q240,20 250,20 Q260,20 262,28 Q256,30 250,30 Q244,30 238,28 Z" fill="#a8814e" opacity="0.5"/>
<path d="M234,31 Q250,64 266,31 Q250,36 234,31 Z" fill="#ffa040" opacity="0.12"/>
<ellipse cx="250" cy="32" rx="12" ry="4" fill="#ffeaa7" opacity="0.55">
  <animate attributeName="opacity" values="0.42;0.62;0.42" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<circle cx="250" cy="29" r="3.4" fill="#ffa040" opacity="0.8" filter="url(#warmGlow)">
  <animate attributeName="opacity" values="0.62;0.9;0.62" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<path d="M130,0 Q131,8 130,15" fill="none" stroke="#4a3a18" stroke-width="1" opacity="0.5"/>
<path d="M118,24 Q120,13 130,13 Q140,13 142,24 Q136,26.5 130,26.5 Q124,26.5 118,24 Z" fill="#8b6840" opacity="0.7"/>
<path d="M118,25 Q130,50 142,25 Q130,29 118,25 Z" fill="#ffa040" opacity="0.09"/>
<circle cx="130" cy="21" r="2.6" fill="#ffa040" opacity="0.7" filter="url(#warmGlow)">
  <animate attributeName="opacity" values="0.52;0.8;0.52" dur="5.2s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>

<!-- ====================
     THE DOOR, rebuilt. It was two flat rects and a dot. A door reads as a door
     because of its FRAME, its PANELS, and the fact that it stands ajar: the
     wedge of outside light is the whole reason the door is in the shot.
     ==================== -->
<path d="M0,54 L44,58 L44,176 L0,178 Z" fill="#2a1608" opacity="0.9"/>
<path d="M4,60 L38,63 L38,172 L4,174 Z" fill="#4a2a10" opacity="0.95"/>
<path d="M8,66 L34,68 L34,110 L8,110 Z" fill="#3a2010" opacity="0.9"/>
<path d="M9,67.5 L32.5,69.5 L32.5,108 L9,108 Z" fill="#5a3418" opacity="0.35"/>
<path d="M8,118 L34,118 L34,164 L8,166 Z" fill="#3a2010" opacity="0.9"/>
<path d="M9,119.5 L32.5,119.5 L32.5,162 L9,164 Z" fill="#5a3418" opacity="0.28"/>
<path d="M8,112 Q21,110 34,112 Q21,116 8,114 Z" fill="#6b4a20" opacity="0.5"/>
<circle cx="30" cy="116" r="2.6" fill="#c9a441" opacity="0.85"/>
<circle cx="30" cy="116" r="1" fill="#f0d68a" opacity="0.7"/>
<path d="M2,72 Q6,72 6,77 Q6,82 2,82" fill="none" stroke="#c9a441" stroke-width="1.4" opacity="0.5"/>
<path d="M2,150 Q6,150 6,155 Q6,160 2,160" fill="none" stroke="#c9a441" stroke-width="1.4" opacity="0.5"/>
<!-- a bell on a curl of iron, because a cafe door has one -->
<path d="M38,64 Q46,60 48,68" fill="none" stroke="#6b4a20" stroke-width="1.4" opacity="0.7"/>
<path d="M45,68 Q48,68 50,72 Q51,76 52,79 L43,79 Q44,74 45,68 Z" fill="#c9a441" opacity="0.8"/>
<circle cx="47.5" cy="81" r="1.4" fill="#a8812c" opacity="0.8"/>

<!-- Warm light spill from door -->
<path d="M44,58 Q86,96 96,176 L44,176 Z" fill="#ffa040" opacity="0.07"/>
<path d="M44,64 Q74,100 80,176 L44,176 Z" fill="#ffeaa7" opacity="0.05"/>
</svg>`;

// Scene 1: Barista with ink-stained fingers, reusing the cafe interior of scene 0
// Fredward on land.
//
// All twelve of his existing appearances are inside wreck_* scenes, where he
// is in the diving suit -- helmet, hose, bolted boots -- and that suit stays
// exactly as it is. It IS the character underwater.
//
// This is the same man with the helmet off, out of the water, in the cafe:
// the shared-cast model, so his face and build match everyone else on the
// island rather than being a third unrelated construction.
//
// cafe_1 was `= cafe_0`, i.e. the same empty room, so nothing is being
// replaced here -- a scene that had no one in it now has someone.
STORY_SCENES['cafe_1'] = STORY_SCENES['cafe_0']
  // cafe_1 is cafe_0 plus a figure, so it duplicates every gradient id in that
  // scene; two copies of one id in a document is the collision that makes a
  // gradient resolve against the wrong scene.
  .replace(/id="(lampGlow2|lampGlow|warmGlow|cafeWall|cafeBg)"/g, 'id="$1C1"')
  .replace(/url\(#(lampGlow2|lampGlow|warmGlow|cafeWall|cafeBg)\)/g, 'url(#$1C1)')
  .replace('</svg>', `
<!-- FREDWARD, ashore -->
${bcPlace('fredward', 16, 214, 243)}
<!-- his cup on the table beside him -->
<ellipse cx="330" cy="188" rx="7" ry="2.6" fill="#e8d8c0" opacity="0.8"/>
<rect x="323" y="181" width="13" height="8" rx="2" fill="#e8d8c0" opacity="0.75"/>
<path d="M336,183 q5,0 5,3 t-5,3" fill="none" stroke="#e8d8c0" stroke-width="1.4" opacity="0.7"/>
<path d="M328,178 q2,-5 0,-9" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.18">
  <animate attributeName="opacity" values="0.05;0.22;0.05" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`);

// Golden text on cup
// Scene 2: Close-up of cup with cryptic clue. Golden text, steam rising
STORY_SCENES['cafe_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="cupBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a1a0c"/><stop offset="100%" stop-color="#1a1008"/>
  </linearGradient>
  <radialGradient id="cupLight" cx="50%" cy="40%" r="45%">
    <stop offset="0%" stop-color="#ffa040" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffa040" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="textGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="goldGlow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#cupBg)"/>
<circle cx="250" cy="130" r="180" fill="url(#cupLight)"/>
<!-- Table surface close-up -->
<rect x="0" y="175" width="500" height="85" fill="#8b4513" opacity="0.6"/>
<rect x="0" y="175" width="500" height="3" fill="#a0522d" opacity="0.3"/>
<!-- Wood grain -->
<line x1="0" y1="195" x2="500" y2="195" stroke="#6b3a10" stroke-width="0.5" opacity="0.15"/>
<line x1="0" y1="215" x2="500" y2="215" stroke="#6b3a10" stroke-width="0.5" opacity="0.1"/>
<!-- Scaling group for the big, classic mug -->
<!-- LOOK FOR: scale(2.3) &lt;- Adjust this number to control the mug size -->
<g transform="translate(250, 145) scale(1.9) translate(-250, -145)">
  <!-- Saucer -->
  <ellipse cx="250" cy="188" rx="85" ry="12" fill="#d4c4a0" opacity="1"/>
  <ellipse cx="250" cy="186" rx="80" ry="10" fill="#e8d8c0" opacity="1"/>
  <!-- Mug Base (Taller Foot) -->
  <path d="M225,170 L215,185 Q250,192 285,185 L275,170 Z" fill="#d4c4a0" opacity="1"/>
  <!-- Mug body (U-shaped, Opaque) -->
  <path d="M175,100 Q180,175 250,175 Q320,175 325,100 Q250,88 175,100 Z" fill="#e8d8c0" opacity="1"/>
  <!-- Mug inner shadow for depth -->
  <path d="M185,105 Q190,170 250,170 Q310,170 315,105 Q250,95 185,105 Z" fill="#3a1a08" opacity="0.1"/>
  <!-- Mug rim -->
  <ellipse cx="250" cy="100" rx="75" ry="12" fill="#f0e4d0" opacity="1"/>
  <ellipse cx="250" cy="100" rx="68" ry="9" fill="#6b4020" opacity="0.4"/>
  <!-- Coffee surface -->
  <ellipse cx="250" cy="102" rx="66" ry="8" fill="#3a1a08" opacity="1"/>
  <!-- Mug handle (Deep seamless connection) -->
  <path d="M318,115 Q355,115 358,140 Q358,165 285,160" fill="none" stroke="#e8d8c0" stroke-width="8" opacity="1"/>
  <path d="M318,118 Q351,120 354,140 Q354,162 285,158" fill="none" stroke="#d4c4a0" stroke-width="3" opacity="0.6"/>
  <!-- Golden text on cup (Sharp and clear) -->
  <g>
    <text x="250" y="138" text-anchor="middle" fill="#ffd700" stroke="#3a1a08" stroke-width="0.35" paint-order="stroke" font-family="'Fredoka One',cursive" font-size="6.5" opacity="1" letter-spacing="0.2">Something instantly perky,</text>
    <text x="250" y="148" text-anchor="middle" fill="#ffd700" stroke="#3a1a08" stroke-width="0.35" paint-order="stroke" font-family="'Fredoka One',cursive" font-size="6.5" opacity="1" letter-spacing="0.2">starts a mouthful (3)</text>
  </g>
  <!-- Steam wisps (Originating from coffee surface at y=102) -->
  <path d="M235,98 Q230,80 236,65" fill="none" stroke="#f4efe4" stroke-width="1.5" opacity="0.12"><animate attributeName="opacity" values="0.06;0.18;0.06" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M235,98 Q230,80 236,65;M235,98 Q240,80 234,65;M235,98 Q230,80 236,65" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  <path d="M250,96 Q248,75 252,57" fill="none" stroke="#f4efe4" stroke-width="1.8" opacity="0.14"><animate attributeName="opacity" values="0.08;0.2;0.08" dur="3.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M250,96 Q248,75 252,57;M250,96 Q254,75 248,57;M250,96 Q248,75 252,57" dur="4.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  <path d="M265,97 Q268,78 263,61" fill="none" stroke="#f4efe4" stroke-width="1.2" opacity="0.1"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M265,97 Q268,78 263,61;M265,97 Q262,78 267,61;M265,97 Q268,78 263,61" dur="5.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
</g>
<path d="M243,98 Q238,85 242,72" fill="none" stroke="#f4efe4" stroke-width="1" opacity="0.08"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="3.2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<path d="M258,97 Q262,83 258,69" fill="none" stroke="#f4efe4" stroke-width="1" opacity="0.09"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="3.8s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
<!-- Barista hand hint (ink-stained fingers at edge) -->
<path d="M410,175 Q415,165 420,168 Q425,165 430,170 Q435,167 440,172 L442,180 L408,180 Z" fill="#c4956a" opacity="0.25"/>
<circle cx="420" cy="170" r="1" fill="#2a2a4a" opacity="0.15"/>
<circle cx="432" cy="170" r="1" fill="#2a2a4a" opacity="0.12"/>
<!-- Ambient warm particles -->
<circle cx="180" cy="70" r="1.5" fill="#ffa040" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="320" cy="50" r="1" fill="#ffeaa7" opacity="0.15"><animate attributeName="opacity" values="0.08;0.25;0.08" dur="3.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="150" cy="100" r="1" fill="#ffeaa7" opacity="0.12"><animate attributeName="opacity" values="0.06;0.2;0.06" dur="5s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</svg>`;

// Scene 3: Wall slides open revealing cobblestone path
STORY_SCENES['cafe_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wallBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a1a0c"/><stop offset="100%" stop-color="#1a1008"/>
  </linearGradient>
  <radialGradient id="passageGlow" cx="55%" cy="50%" r="35%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="60%" stop-color="#ffa040" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffa040" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="cobbleLight" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8a7a60" stop-opacity="0.6"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.2"/>
  </linearGradient>
  <linearGradient id="c3Beyond" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2c1c"/><stop offset="52%" stop-color="#8a6a34"/><stop offset="100%" stop-color="#c89a48"/>
  </linearGradient>
  <filter id="passageBlur"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wallBg)"/>

<!-- ====================================================================
     Rebuilt from rects and ellipses. The old scene was 44 elements, ONE of
     them a curve, and it showed: the cobbles were twelve identical white
     ellipses floating on a grey tray with the void visible between them, the
     glow beyond was two flat ellipses reading as a lava lamp, and the
     sliding panel was a plain slab with two scratches on it.

     Everything the scene had is still here. It is drawn rather than
     diagrammed.
     ==================================================================== -->

<!-- THE CAFE WALL, matching cafe_0: cream above, dark wainscot below, and
     the same warm lamplight sitting on it. -->
<path d="M0,0 L500,0 L500,132 Q250,127 0,132 Z" fill="#e8d8c0" opacity="0.12"/>
<!-- the wainscot, which stops either side of the opening -->
<path d="M0,130 Q100,126 196,129 L196,172 Q100,170 0,174 Z" fill="#5a3a1a" opacity="0.38"/>
<path d="M372,129 Q436,126 500,130 L500,174 Q436,170 372,172 Z" fill="#5a3a1a" opacity="0.38"/>
<path d="M0,130 Q100,126 196,129 Q100,129 0,133 Z" fill="#6b4a20" opacity="0.4"/>
<path d="M372,129 Q436,126 500,130 Q436,129 372,132 Z" fill="#6b4a20" opacity="0.4"/>
<!-- panel mouldings in the wainscot, which is what cafe_0's door has too -->
<g fill="none" stroke="#6b4a20" stroke-width="1" opacity="0.22">
  <path d="M18,138 Q54,136 90,137 L90,164 Q54,164 18,166 Z"/>
  <path d="M106,137 Q140,135 174,136 L174,163 Q140,163 106,165 Z"/>
  <path d="M392,136 Q426,135 460,136 L460,163 Q426,163 392,164 Z"/>
</g>
<!-- the cafe floor -->
<path d="M0,172 Q250,166 500,172 L500,260 L0,260 Z" fill="#3a2210" opacity="0.72"/>
<path d="M0,172 Q250,166 500,172 Q250,170 0,176 Z" fill="#6b4a20" opacity="0.3"/>
<g fill="none" stroke="#2a1808" stroke-width="0.8" opacity="0.2">
  <path d="M70,174 Q56,212 36,260"/>
  <path d="M430,174 Q444,212 464,260"/>
  <path d="M0,206 Q250,200 500,206"/>
  <path d="M0,236 Q250,230 500,236"/>
</g>

<!-- ====================================================================
     THE OPENING. A hole in a wall reads by its JAMB: you can see the
     thickness of the wall on the side the light comes from, and that
     returning face is lit while the opposite one is in shadow.
     ==================================================================== -->
<!-- what lies beyond, before anything is drawn on top of it -->
<path d="M204,34 L368,34 L368,236 L204,236 Z" fill="url(#c3Beyond)"/>

<!-- ====================================================================
     THE TOWN BEYOND. Drawn first as round-topped slabs on one baseline with
     a window each, which read as TOMBSTONES, and arcs floating above them
     that read as croquet hoops.

     A cartoon town is a ROOFLINE problem. What makes it a town is: pitched
     roofs whose EAVES overhang the wall below, gables of different heights
     and widths, buildings that OVERLAP rather than lining up on one
     baseline, and chimneys breaking the skyline. All of it is pushed almost
     to nothing, because distance eats contrast before it eats detail.
     ==================================================================== -->
<!-- the far side of the square: a solid mass, no detail at all, the thing
     the nearer roofs read against -->
<path d="M204,138 Q240,132 276,136 Q312,140 344,134 Q360,132 368,136 L368,158 L204,158 Z"
      fill="#5e4828" opacity="0.4"/>
<!-- the buildings, back row first, each roof overhanging its own wall -->
<path d="M226,122 L246,108 L266,122 L262,122 L262,150 L230,150 L230,122 Z" fill="#77592e" opacity="0.45"/>
<path d="M226,122 L246,108 L266,122 L262,124 L246,112 L230,124 Z" fill="#7e6236" opacity="0.3"/>
<path d="M300,116 L322,100 L344,116 L340,116 L340,150 L304,150 L304,116 Z" fill="#77592e" opacity="0.4"/>
<path d="M300,116 L322,100 L344,116 L340,118 L322,104 L304,118 Z" fill="#7e6236" opacity="0.26"/>
<!-- front row, overlapping the back row, taller and a touch stronger -->
<path d="M206,130 L224,116 L242,130 L238,130 L238,154 L210,154 L210,130 Z" fill="#8a6836" opacity="0.6"/>
<path d="M206,130 L224,116 L242,130 L238,132 L224,120 L210,132 Z" fill="#8f6f3c" opacity="0.4"/>
<path d="M254,126 L276,108 L298,126 L293,126 L293,154 L259,154 L259,126 Z" fill="#8a6836" opacity="0.55"/>
<path d="M254,126 L276,108 L298,126 L293,128 L276,113 L259,128 Z" fill="#8f6f3c" opacity="0.36"/>
<path d="M334,132 L352,118 L370,132 L366,132 L366,154 L338,154 L338,132 Z" fill="#8a6836" opacity="0.46"/>
<path d="M334,132 L352,118 L370,132 L366,134 L352,122 L338,134 Z" fill="#8f6f3c" opacity="0.28"/>
<!-- chimneys, which break the skyline and are what stops a roofline reading
     as a row of triangles -->
<path d="M232,112 L238,112 L238,122 L232,122 Z" fill="#6a5230" opacity="0.34"/>
<path d="M284,114 L290,114 L290,124 L284,124 Z" fill="#6a5230" opacity="0.3"/>
<path d="M332,105 L337,105 L337,114 L332,114 Z" fill="#6a5230" opacity="0.26"/>
<!-- lit windows, warm and small, a couple per building at most -->
<g fill="#ffd070">
  <path d="M215,136 Q219,134 223,136 L223,145 Q219,147 215,145 Z" opacity="0.4"/>
  <path d="M228,138 Q231,136.5 234,138 L234,145 Q231,146.5 228,145 Z" opacity="0.3"/>
  <path d="M265,133 Q270,131 275,133 L275,143 Q270,145 265,143 Z" opacity="0.36"/>
  <path d="M281,136 Q285,134.5 289,136 L289,144 Q285,145.5 281,144 Z" opacity="0.26"/>
  <path d="M310,126 Q314,124.5 318,126 L318,134 Q314,135.5 310,134 Z" opacity="0.24"/>
  <path d="M345,139 Q349,137.5 353,139 L353,146 Q349,147.5 345,146 Z" opacity="0.2"/>
</g>
<!-- a lamp standing in the square, throwing the pool of light the cobbles
     nearest the far end are lying in -->
<path d="M296,140 Q298,150 297,158" fill="none" stroke="#5e4828" stroke-width="1.4" opacity="0.35"/>
<path d="M292,136 Q296,130 300,136 Q296,139 292,136 Z" fill="#ffd070" opacity="0.34"/>
<!-- the distant arch the old scene had, kept, now standing on real piers
     with an impost where the arch springs from them -->
<path d="M296,80 L302,80 L302,132 L296,132 Z" fill="#a8873a" opacity="0.18"/>
<path d="M338,80 L344,80 L344,132 L338,132 Z" fill="#a8873a" opacity="0.15"/>
<path d="M293,78 L305,78 L305,82 L293,82 Z" fill="#b5933a" opacity="0.2"/>
<path d="M335,78 L347,78 L347,82 L335,82 Z" fill="#b5933a" opacity="0.17"/>
<path d="M296,80 Q320,50 344,80 L338,80 Q320,58 302,80 Z" fill="#b5933a" opacity="0.22"/>
<path d="M296,80 Q320,52 344,80" fill="none" stroke="#c9a441" stroke-width="1.4" opacity="0.24"/>
<!-- the whole square veiled back, one wash, so nothing in it competes with
     the cobbles the player is being shown -->
<path d="M204,60 L368,60 L368,160 L204,160 Z" fill="#c89a48" opacity="0.1"/>

<!-- ====================================================================
     THE COBBLED PATH. It was twelve identical ellipses in three tidy rows
     with the dark ground showing between them, which reads as eggs in a
     crate. Real setts INTERLOCK: courses offset by half a stone, joints
     thin enough that no ground shows, every stone a different rounded
     polygon rather than the same ellipse, and both the stones and the
     courses shrinking with distance because the path runs away from you.

     They are generated rather than typed so that no two are alike and the
     perspective is arithmetic rather than a guess.
     ==================================================================== -->
<path d="M252,176 L320,176 L378,238 L194,238 Z" fill="#4a4034"/>
<path d="M245.5,177.9 Q246.3,176.7 247,175.8 Q249.7,175.7 251.9,175.6 Q252.7,176.6 253.3,177.5 Q252.5,178.6 251.9,179.6 Q249.3,179.5 247.2,179.5 Q246.3,178.6 245.5,177.9 Z" fill="#8a7048" opacity="0.2"/>
<path d="M251.7,177.9 Q252.6,176.9 253.3,176.1 Q255.7,176.2 257.7,176.3 Q258.6,177.2 259.4,177.9 Q258.7,179 258.1,179.8 Q255.4,179.9 253.2,179.9 Q252.3,178.8 251.7,177.9 Z" fill="#8a7048" opacity="0.2"/>
<path d="M258.2,177.5 Q259,176.7 259.7,176 Q261.7,176 263.4,176 Q264.2,176.8 264.8,177.5 Q264.1,178.5 263.5,179.2 Q261.2,179.2 259.4,179.1 Q258.7,178.2 258.2,177.5 Z" fill="#a89066" opacity="0.3"/>
<path d="M263.2,178 Q264,176.9 264.8,176 Q267.4,176.1 269.6,176.2 Q270.3,177 271,177.7 Q270.1,178.8 269.4,179.7 Q266.7,179.6 264.5,179.5 Q263.8,178.7 263.2,178 Z" fill="#9a8258" opacity="0.3"/>
<path d="M270.1,177.6 Q270.9,176.4 271.5,175.5 Q274.1,175.4 276.2,175.3 Q276.8,176.4 277.3,177.2 Q276.5,178.4 275.9,179.4 Q273.3,179.4 271.3,179.4 Q270.6,178.4 270.1,177.6 Z" fill="#8a7048" opacity="0.3"/>
<path d="M276.3,177.8 Q277.1,176.8 277.9,176 Q280,175.9 281.8,175.9 Q282.6,177.1 283.4,178 Q282.4,178.9 281.7,179.7 Q279.4,179.8 277.6,179.9 Q276.9,178.7 276.3,177.8 Z" fill="#b09a6e" opacity="0.4"/>
<path d="M281.9,177.9 Q282.6,176.7 283.2,175.8 Q285.5,175.7 287.5,175.7 Q288.4,176.8 289.1,177.7 Q288.3,178.7 287.6,179.5 Q285.2,179.5 283.2,179.4 Q282.5,178.6 281.9,177.9 Z" fill="#8a7048" opacity="0.4"/>
<path d="M288.3,177.8 Q289.1,176.8 289.7,175.9 Q292.2,175.8 294.3,175.7 Q295.1,176.9 295.8,177.8 Q294.9,178.6 294.1,179.3 Q291.8,179.2 289.9,179.1 Q289,178.4 288.3,177.8 Z" fill="#7e6842" opacity="0.4"/>
<path d="M295.5,177.4 Q296.2,176.4 296.8,175.7 Q299,175.6 300.8,175.4 Q301.6,176.6 302.2,177.5 Q301.5,178.3 300.9,179 Q298.8,179.1 297.1,179.1 Q296.2,178.1 295.5,177.4 Z" fill="#9a8258" opacity="0.3"/>
<path d="M301.1,177.5 Q301.7,176.7 302.2,176.1 Q304.3,176 306.1,175.9 Q306.9,177 307.5,177.8 Q306.8,178.7 306.2,179.4 Q304.1,179.3 302.3,179.2 Q301.7,178.3 301.1,177.5 Z" fill="#a89066" opacity="0.3"/>
<path d="M307.8,178.1 Q308.3,177 308.8,176.1 Q311.2,176.1 313.2,176.2 Q313.8,177.3 314.2,178.1 Q313.7,179 313.2,179.7 Q310.8,179.8 308.8,179.9 Q308.2,178.9 307.8,178.1 Z" fill="#a89066" opacity="0.2"/>
<path d="M313.6,178 Q314.2,176.9 314.6,176 Q316.9,175.9 318.9,175.9 Q319.4,177 319.8,177.9 Q319.3,178.8 318.8,179.5 Q316.8,179.5 315.1,179.5 Q314.3,178.6 313.6,178 Z" fill="#7e6842" opacity="0.2"/>
<path d="M319,177.5 Q319.7,176.6 320.3,175.9 Q322.6,175.9 324.5,176 Q325.4,176.8 326.2,177.4 Q325.4,178.4 324.7,179.2 Q322.2,179.2 320.2,179.3 Q319.5,178.3 319,177.5 Z" fill="#a89066" opacity="0.2"/>
<path d="M244.7,182.1 Q245.4,180.9 246,179.9 Q248.6,179.9 250.8,179.9 Q251.5,181.1 252.1,182 Q251.2,182.9 250.5,183.7 Q248.3,183.8 246.6,183.8 Q245.6,182.8 244.7,182.1 Z" fill="#b09a6e" opacity="0.2"/>
<path d="M251.1,181.7 Q251.9,180.5 252.5,179.5 Q255,179.5 257.1,179.5 Q258.1,180.6 258.9,181.4 Q258.2,182.7 257.7,183.7 Q254.9,183.7 252.6,183.7 Q251.8,182.6 251.1,181.7 Z" fill="#7e6842" opacity="0.2"/>
<path d="M258.7,181.8 Q259.4,180.5 259.9,179.4 Q262.6,179.6 264.8,179.7 Q265.6,180.8 266.3,181.7 Q265.4,182.7 264.6,183.6 Q262.1,183.4 260.1,183.3 Q259.3,182.5 258.7,181.8 Z" fill="#b09a6e" opacity="0.3"/>
<path d="M265.6,181.4 Q266.5,180.3 267.3,179.5 Q269.4,179.6 271,179.7 Q271.9,180.8 272.7,181.8 Q271.9,182.9 271.2,183.8 Q269,183.8 267.2,183.9 Q266.3,182.5 265.6,181.4 Z" fill="#95805c" opacity="0.3"/>
<path d="M272,181.5 Q272.8,180.5 273.4,179.6 Q275.9,179.6 278,179.5 Q278.9,180.5 279.6,181.4 Q278.9,182.5 278.4,183.5 Q275.7,183.6 273.5,183.7 Q272.6,182.5 272,181.5 Z" fill="#b09a6e" opacity="0.4"/>
<path d="M278.1,181.4 Q279.2,180.3 280,179.4 Q282.5,179.5 284.6,179.5 Q285.6,180.7 286.4,181.6 Q285.3,182.5 284.4,183.3 Q282,183.4 280,183.4 Q279,182.3 278.1,181.4 Z" fill="#7e6842" opacity="0.4"/>
<path d="M285.2,181.2 Q286,180.3 286.6,179.6 Q289.3,179.6 291.6,179.7 Q292.2,180.8 292.8,181.7 Q291.9,182.6 291.2,183.4 Q288.8,183.4 286.9,183.3 Q285.9,182.2 285.2,181.2 Z" fill="#b09a6e" opacity="0.4"/>
<path d="M292.2,182 Q293.2,180.7 294,179.6 Q296.7,179.7 299,179.8 Q300,180.9 300.8,181.8 Q300.1,182.9 299.5,183.9 Q296.6,184 294.3,184.1 Q293.1,183 292.2,182 Z" fill="#a89066" opacity="0.4"/>
<path d="M299.2,181.8 Q300.2,180.7 301.1,179.8 Q303.8,179.9 306.1,180 Q306.9,180.9 307.6,181.6 Q306.8,182.9 306.2,183.9 Q303.3,184 300.9,184.1 Q300,182.8 299.2,181.8 Z" fill="#7e6842" opacity="0.3"/>
<path d="M306.2,181.2 Q306.9,180.1 307.5,179.2 Q309.7,179.3 311.6,179.3 Q312.5,180.3 313.3,181.1 Q312.3,182.2 311.6,183.2 Q309.5,183.1 307.9,183 Q307,182 306.2,181.2 Z" fill="#8a7048" opacity="0.3"/>
<path d="M313.5,180.9 Q314.3,179.9 314.9,179 Q317.7,179.1 319.9,179.1 Q320.7,180.1 321.3,180.9 Q320.3,182.2 319.5,183.3 Q317.2,183.4 315.3,183.4 Q314.3,182 313.5,180.9 Z" fill="#95805c" opacity="0.2"/>
<path d="M320.1,181.4 Q321.2,180.3 322.1,179.4 Q324.3,179.4 326.2,179.5 Q327.2,180.4 327.9,181.2 Q327.1,182.2 326.3,183.1 Q323.8,183 321.8,182.9 Q320.9,182.1 320.1,181.4 Z" fill="#9a8258" opacity="0.2"/>
<path d="M236.4,185.6 Q237.5,184.1 238.4,183 Q240.9,183.1 243,183.2 Q244.2,184.5 245.1,185.6 Q244.3,186.8 243.6,187.7 Q240.7,187.9 238.3,188 Q237.2,186.7 236.4,185.6 Z" fill="#8a7048" opacity="0.2"/>
<path d="M242.7,185.5 Q243.7,184.4 244.5,183.4 Q247.5,183.4 250,183.4 Q250.9,184.4 251.7,185.3 Q250.7,186.6 249.9,187.8 Q246.7,187.8 244.1,187.9 Q243.3,186.6 242.7,185.5 Z" fill="#b09a6e" opacity="0.2"/>
<path d="M251.3,185.6 Q252.1,184.4 252.9,183.5 Q255.6,183.5 257.9,183.5 Q258.6,184.7 259.2,185.6 Q258.5,186.9 257.9,187.9 Q254.9,187.9 252.5,187.9 Q251.8,186.6 251.3,185.6 Z" fill="#a89066" opacity="0.3"/>
<path d="M258.6,186.3 Q259.3,184.8 259.9,183.6 Q262.9,183.6 265.3,183.6 Q266.4,185 267.4,186.1 Q266.3,187.3 265.4,188.3 Q262.6,188.2 260.4,188.1 Q259.4,187.1 258.6,186.3 Z" fill="#b09a6e" opacity="0.3"/>
<path d="M266.4,185.1 Q267.5,184 268.4,183 Q270.9,183.1 273,183.2 Q273.7,184.5 274.3,185.6 Q273.4,186.7 272.5,187.6 Q269.8,187.6 267.6,187.6 Q267,186.2 266.4,185.1 Z" fill="#8a7048" opacity="0.4"/>
<path d="M274,185.4 Q274.8,184.2 275.5,183.2 Q278.5,183.1 280.9,183 Q281.8,184.5 282.5,185.7 Q281.7,186.8 281,187.7 Q278.2,187.8 275.9,187.9 Q274.8,186.5 274,185.4 Z" fill="#9a8258" opacity="0.4"/>
<path d="M281.9,185.8 Q282.8,184.5 283.6,183.5 Q286.5,183.4 289,183.3 Q289.8,184.5 290.4,185.5 Q289.6,186.6 288.9,187.5 Q285.9,187.3 283.5,187.2 Q282.6,186.4 281.9,185.8 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M288.9,185 Q289.9,184 290.7,183.2 Q293.4,183.1 295.6,183.1 Q296.6,184.4 297.3,185.5 Q296.4,186.5 295.7,187.4 Q293.1,187.5 291,187.6 Q289.8,186.2 288.9,185 Z" fill="#9a8258" opacity="0.4"/>
<path d="M297.2,185 Q298.3,184 299.2,183.2 Q301.7,183 303.8,182.9 Q304.8,184.2 305.6,185.3 Q304.9,186.5 304.3,187.4 Q301.4,187.5 299,187.6 Q298,186.2 297.2,185 Z" fill="#9a8258" opacity="0.4"/>
<path d="M305.1,185.8 Q305.8,184.6 306.4,183.6 Q309.4,183.5 311.8,183.5 Q312.8,184.6 313.6,185.5 Q312.8,186.7 312,187.7 Q309.1,187.8 306.8,187.8 Q305.8,186.7 305.1,185.8 Z" fill="#9a8258" opacity="0.3"/>
<path d="M311.6,185.3 Q312.6,184.3 313.4,183.5 Q316.7,183.4 319.4,183.3 Q320.3,184.6 321,185.6 Q320.1,186.7 319.4,187.6 Q316.3,187.7 313.8,187.8 Q312.6,186.4 311.6,185.3 Z" fill="#9a8258" opacity="0.3"/>
<path d="M320.5,185.9 Q321.2,184.7 321.8,183.7 Q324.6,183.9 326.9,183.9 Q327.7,185.2 328.4,186.2 Q327.4,187.3 326.7,188.2 Q324,188.2 321.8,188.3 Q321.1,187 320.5,185.9 Z" fill="#b09a6e" opacity="0.2"/>
<path d="M327.4,185.5 Q328.6,184.1 329.5,182.9 Q332.4,183 334.8,183.1 Q336,184.2 337,185.1 Q335.9,186.5 334.9,187.7 Q331.7,187.6 329,187.6 Q328.1,186.4 327.4,185.5 Z" fill="#95805c" opacity="0.2"/>
<path d="M234,190.1 Q235.1,188.7 236,187.7 Q239.2,187.8 241.8,187.8 Q243,189 243.9,189.9 Q243.1,191.4 242.4,192.6 Q238.7,192.5 235.7,192.4 Q234.8,191.1 234,190.1 Z" fill="#9a8258" opacity="0.2"/>
<path d="M243.3,190.3 Q244.5,189.1 245.5,188.1 Q248.5,187.9 251.1,187.8 Q252.1,189.5 253,190.9 Q252.1,192.2 251.4,193.1 Q248.2,193.2 245.6,193.3 Q244.4,191.6 243.3,190.3 Z" fill="#a89066" opacity="0.3"/>
<path d="M250.9,190.4 Q251.8,189.2 252.6,188.2 Q256.2,188.1 259.1,188.1 Q260.5,189.7 261.7,191 Q260.7,192.3 260,193.4 Q256.1,193.3 252.9,193.3 Q251.8,191.7 250.9,190.4 Z" fill="#8a7048" opacity="0.3"/>
<path d="M260.5,190.2 Q261.7,189 262.7,187.9 Q266.1,187.8 268.9,187.6 Q269.9,189.2 270.7,190.6 Q269.5,191.9 268.5,193 Q265.3,193.1 262.6,193.3 Q261.5,191.6 260.5,190.2 Z" fill="#b09a6e" opacity="0.4"/>
<path d="M269.3,190.5 Q270.3,188.9 271.1,187.7 Q274,187.9 276.3,188 Q277.3,189.4 278.1,190.5 Q277.3,191.9 276.7,193 Q273.4,192.9 270.7,192.8 Q269.9,191.5 269.3,190.5 Z" fill="#95805c" opacity="0.4"/>
<path d="M277.6,190 Q278.7,188.6 279.5,187.5 Q282.3,187.5 284.5,187.5 Q285.8,188.8 286.7,189.9 Q285.7,191.2 284.8,192.4 Q282,192.4 279.7,192.4 Q278.6,191.1 277.6,190 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M284.2,190.6 Q285.1,189.3 285.9,188.3 Q289.7,188.2 292.9,188.1 Q293.9,189.4 294.7,190.4 Q293.5,191.7 292.5,192.7 Q289.2,192.7 286.5,192.6 Q285.2,191.5 284.2,190.6 Z" fill="#a89066" opacity="0.5"/>
<path d="M294,190.2 Q295,188.8 295.8,187.7 Q299.5,187.6 302.5,187.5 Q303.7,188.9 304.6,190 Q303.7,191.2 303,192.2 Q299,192.2 295.7,192.1 Q294.7,191.1 294,190.2 Z" fill="#8a7048" opacity="0.4"/>
<path d="M302.1,189.8 Q302.9,188.5 303.6,187.4 Q306.6,187.3 309,187.3 Q310,188.6 310.9,189.8 Q310,191.2 309.3,192.5 Q306.3,192.7 303.8,192.8 Q302.8,191.1 302.1,189.8 Z" fill="#8a7048" opacity="0.4"/>
<path d="M311.4,190.6 Q312.3,189.2 313,188.1 Q316.2,188.2 318.9,188.2 Q319.7,189.5 320.4,190.6 Q319.6,191.6 318.9,192.5 Q315.6,192.6 312.8,192.6 Q312,191.5 311.4,190.6 Z" fill="#7e6842" opacity="0.3"/>
<path d="M319.6,190.1 Q321.1,188.9 322.2,187.9 Q325.3,187.9 327.8,187.9 Q329,189.1 329.9,190.1 Q328.8,191.8 327.9,193.1 Q324.7,192.9 322,192.8 Q320.7,191.3 319.6,190.1 Z" fill="#95805c" opacity="0.3"/>
<path d="M327.9,190.6 Q329,189.3 329.9,188.2 Q332.6,188.2 334.7,188.1 Q335.8,189.3 336.6,190.3 Q335.5,191.8 334.6,193.1 Q331.9,193 329.6,192.9 Q328.6,191.6 327.9,190.6 Z" fill="#7e6842" opacity="0.2"/>
<path d="M225.1,195.5 Q226.2,194.1 227,192.9 Q230.3,193 233,193 Q234.1,194.3 235,195.3 Q233.8,196.7 232.8,197.9 Q229.6,198.1 227,198.2 Q226,196.7 225.1,195.5 Z" fill="#9a8258" opacity="0.2"/>
<path d="M233.9,195.5 Q235.1,194.2 236,193.2 Q239.3,193 242,192.8 Q243.5,194.3 244.7,195.5 Q243.4,197.2 242.3,198.5 Q239.1,198.7 236.5,198.8 Q235.1,197 233.9,195.5 Z" fill="#9a8258" opacity="0.3"/>
<path d="M243.4,195.8 Q244.6,194.2 245.6,192.9 Q248.7,192.7 251.2,192.6 Q252.1,194 252.9,195.3 Q251.8,196.9 251,198.3 Q247.8,198.1 245.2,197.9 Q244.2,196.7 243.4,195.8 Z" fill="#7e6842" opacity="0.3"/>
<path d="M252.2,195.4 Q253.6,194.2 254.7,193.3 Q258.5,193.4 261.6,193.5 Q262.7,194.8 263.5,195.8 Q262.4,197.1 261.5,198.2 Q257.5,198.3 254.3,198.3 Q253.2,196.7 252.2,195.4 Z" fill="#95805c" opacity="0.4"/>
<path d="M263.2,195.1 Q264.5,193.8 265.6,192.7 Q268.2,192.7 270.4,192.8 Q271.7,194.1 272.7,195.2 Q271.8,196.8 271,198.1 Q268,197.9 265.6,197.7 Q264.3,196.3 263.2,195.1 Z" fill="#9a8258" opacity="0.4"/>
<path d="M270.6,195.8 Q271.7,194.1 272.7,192.7 Q276.3,192.8 279.2,192.9 Q280.2,194.1 281.1,195.1 Q280.1,196.8 279.2,198.2 Q275.8,198.1 273,198.1 Q271.7,196.8 270.6,195.8 Z" fill="#9a8258" opacity="0.5"/>
<path d="M281.5,195.5 Q282.7,194.3 283.7,193.4 Q287.2,193.4 290,193.4 Q290.9,194.6 291.6,195.6 Q290.5,197.1 289.5,198.2 Q286.1,198.4 283.4,198.5 Q282.4,196.8 281.5,195.5 Z" fill="#a89066" opacity="0.5"/>
<path d="M290.8,195 Q292,193.8 293.1,192.7 Q296.6,192.9 299.4,193.1 Q300.7,194.4 301.6,195.4 Q300.7,196.7 299.9,197.8 Q296.2,197.8 293.3,197.9 Q291.9,196.3 290.8,195 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M298.9,195.2 Q300.2,193.8 301.3,192.7 Q305.1,192.8 308.1,192.9 Q309.3,194.2 310.2,195.3 Q309.2,196.6 308.4,197.7 Q304.6,197.5 301.5,197.4 Q300.1,196.2 298.9,195.2 Z" fill="#9a8258" opacity="0.4"/>
<path d="M308.1,195.5 Q309.6,193.8 310.7,192.4 Q314.3,192.5 317.3,192.7 Q318.8,194.2 320,195.4 Q319,196.8 318.2,198 Q313.7,198 310.1,198.1 Q309,196.7 308.1,195.5 Z" fill="#8a7048" opacity="0.4"/>
<path d="M318.2,194.9 Q319.3,193.6 320.3,192.6 Q324.3,192.5 327.6,192.5 Q328.6,194 329.5,195.3 Q328.5,196.8 327.7,198.1 Q323.8,198 320.7,197.9 Q319.3,196.3 318.2,194.9 Z" fill="#9a8258" opacity="0.3"/>
<path d="M327.2,195.8 Q328,194.2 328.7,192.9 Q332.2,192.9 335.1,193 Q336.1,194.2 336.9,195.3 Q335.6,197 334.6,198.5 Q331.8,198.3 329.4,198.2 Q328.2,196.9 327.2,195.8 Z" fill="#9a8258" opacity="0.3"/>
<path d="M337.2,195.1 Q338.2,193.7 339.1,192.5 Q342.6,192.6 345.5,192.8 Q346.6,194 347.5,194.9 Q346.2,196.7 345.2,198.1 Q341.9,197.9 339.3,197.7 Q338.1,196.3 337.2,195.1 Z" fill="#b09a6e" opacity="0.2"/>
<path d="M223.2,201.6 Q224.2,200 225.1,198.7 Q228.6,198.8 231.4,198.8 Q232.6,200.4 233.6,201.7 Q232.6,203 231.8,204 Q227.9,204.2 224.8,204.3 Q223.9,202.8 223.2,201.6 Z" fill="#7e6842" opacity="0.3"/>
<path d="M233.8,200.8 Q235.2,199.3 236.4,198.1 Q240.4,198 243.7,198 Q245.2,199.5 246.5,200.8 Q245.1,202.7 244,204.3 Q240,204.5 236.6,204.7 Q235.1,202.5 233.8,200.8 Z" fill="#9a8258" opacity="0.3"/>
<path d="M243.6,201.4 Q245.1,199.5 246.3,197.9 Q250.3,197.9 253.5,198 Q254.9,199.7 256,201.2 Q254.7,202.8 253.7,204.2 Q249.2,204.4 245.5,204.5 Q244.5,202.8 243.6,201.4 Z" fill="#a89066" opacity="0.4"/>
<path d="M253.3,201 Q254.8,199.4 256.1,198.1 Q260.3,197.9 263.7,197.8 Q264.7,199.5 265.5,200.9 Q263.9,202.3 262.6,203.4 Q258.6,203.6 255.4,203.8 Q254.2,202.3 253.3,201 Z" fill="#9a8258" opacity="0.4"/>
<path d="M264.5,201 Q265.8,199.5 266.9,198.2 Q270.6,198.4 273.7,198.6 Q275.3,199.8 276.5,200.8 Q275.5,202.5 274.7,203.9 Q270.6,204 267.3,204 Q265.7,202.4 264.5,201 Z" fill="#7e6842" opacity="0.5"/>
<path d="M275.3,201.2 Q276.9,199.4 278.2,198 Q281.9,197.9 284.9,197.8 Q286.1,199.6 287.1,201 Q285.7,202.7 284.6,204.1 Q280.5,204.2 277.2,204.2 Q276.1,202.6 275.3,201.2 Z" fill="#a89066" opacity="0.5"/>
<path d="M286,200.7 Q287.3,198.9 288.3,197.5 Q291.6,197.5 294.3,197.4 Q295.8,198.8 297,200 Q295.8,201.8 294.9,203.2 Q291,203.4 287.8,203.5 Q286.8,202 286,200.7 Z" fill="#a89066" opacity="0.5"/>
<path d="M294.6,200.7 Q296,199 297.1,197.7 Q301.3,197.6 304.8,197.5 Q306.2,199.4 307.5,200.9 Q306.1,202.5 305,203.7 Q300.7,203.7 297.1,203.7 Q295.7,202.1 294.6,200.7 Z" fill="#9a8258" opacity="0.5"/>
<path d="M307.3,200.8 Q308.7,199 309.8,197.5 Q313.2,197.4 316,197.3 Q317.3,199.2 318.3,200.8 Q317.1,202.5 316.2,203.9 Q312.6,203.9 309.7,203.9 Q308.4,202.2 307.3,200.8 Z" fill="#95805c" opacity="0.4"/>
<path d="M316.7,201.5 Q318.2,199.7 319.3,198.3 Q322.9,198.5 325.8,198.6 Q327.2,200 328.4,201.1 Q327.4,202.8 326.5,204.2 Q322.4,204.1 319,204 Q317.8,202.6 316.7,201.5 Z" fill="#9a8258" opacity="0.4"/>
<path d="M328.4,200.8 Q329.3,199 330.1,197.6 Q334,197.6 337.2,197.6 Q338.1,199.1 338.8,200.3 Q337.7,202.3 336.8,203.8 Q333.1,203.9 330,203.9 Q329.1,202.2 328.4,200.8 Z" fill="#95805c" opacity="0.3"/>
<path d="M336.5,200.6 Q337.8,199 338.8,197.6 Q343,197.8 346.4,198 Q348,199.2 349.3,200.2 Q347.7,202 346.4,203.4 Q342.1,203.4 338.6,203.3 Q337.4,201.9 336.5,200.6 Z" fill="#b09a6e" opacity="0.3"/>
<path d="M209.7,207 Q211.1,205.5 212.3,204.3 Q216.2,204.4 219.5,204.4 Q221.2,205.9 222.6,207.1 Q220.9,209 219.6,210.6 Q215.5,210.9 212.2,211.1 Q210.8,208.8 209.7,207 Z" fill="#95805c" opacity="0.2"/>
<path d="M222.5,206.2 Q223.7,204.4 224.7,203 Q229.4,203.2 233.3,203.4 Q234.6,205 235.7,206.4 Q234,208.3 232.7,209.9 Q228.7,209.7 225.5,209.6 Q223.8,207.7 222.5,206.2 Z" fill="#a89066" opacity="0.3"/>
<path d="M225.4,204.9 Q229.1,203.1 232.7,204.9 Q229.1,204.3 225.4,204.9 Z" fill="#b8a884" opacity="0.1"/>
<path d="M233.9,207.1 Q235.5,204.9 236.9,203.2 Q241.5,203 245.2,202.9 Q247,204.9 248.4,206.6 Q246.9,208.6 245.6,210.2 Q240.4,210.2 236.2,210.2 Q234.9,208.5 233.9,207.1 Z" fill="#95805c" opacity="0.4"/>
<path d="M244.4,206.2 Q245.7,204.5 246.7,203.1 Q251.4,203.3 255.2,203.6 Q256.4,205.2 257.3,206.6 Q255.9,208.4 254.7,209.8 Q250.2,210 246.6,210.2 Q245.4,208 244.4,206.2 Z" fill="#7e6842" opacity="0.4"/>
<path d="M256.4,207 Q257.8,204.9 258.9,203.2 Q263.1,203.3 266.6,203.4 Q268.1,205.1 269.3,206.5 Q267.8,208.4 266.6,209.9 Q262.1,210 258.4,210.2 Q257.3,208.4 256.4,207 Z" fill="#a89066" opacity="0.5"/>
<path d="M267.8,207.3 Q269.4,205.2 270.7,203.4 Q274.4,203.2 277.5,203 Q278.7,205.4 279.8,207.3 Q278.3,209 277.1,210.3 Q273.1,210.5 269.7,210.6 Q268.7,208.8 267.8,207.3 Z" fill="#95805c" opacity="0.5"/>
<path d="M277.8,206.3 Q279.4,204.8 280.7,203.6 Q285.2,203.7 288.9,203.8 Q290.8,205.6 292.4,207 Q290.8,208.5 289.5,209.7 Q284.4,209.6 280.2,209.6 Q278.9,207.8 277.8,206.3 Z" fill="#9a8258" opacity="0.6"/>
<path d="M281.1,205.3 Q285.1,203.8 289.1,205.3 Q285.1,204.8 281.1,205.3 Z" fill="#b8a884" opacity="0.3"/>
<path d="M289.6,207.6 Q291.6,205.7 293.1,204.1 Q297.2,204.4 300.6,204.6 Q302.6,206 304.2,207.1 Q302.3,209.2 300.7,210.9 Q296.3,211.1 292.7,211.2 Q291,209.2 289.6,207.6 Z" fill="#9a8258" opacity="0.5"/>
<path d="M292.9,206 Q296.9,204.3 300.9,206 Q296.9,205.5 292.9,206 Z" fill="#b8a884" opacity="0.3"/>
<path d="M300.6,207.2 Q302.6,205.3 304.2,203.7 Q308.4,203.7 311.8,203.8 Q313.6,205.8 315,207.5 Q313.6,209.2 312.4,210.5 Q307.3,210.4 303.1,210.3 Q301.8,208.6 300.6,207.2 Z" fill="#8a7048" opacity="0.5"/>
<path d="M314.3,206.7 Q315.8,205 317.1,203.6 Q321,203.6 324.2,203.6 Q325.6,205.6 326.7,207.3 Q325,209.1 323.7,210.6 Q320.1,210.6 317.2,210.6 Q315.6,208.5 314.3,206.7 Z" fill="#7e6842" opacity="0.4"/>
<path d="M317.1,205.5 Q320.5,203.8 323.9,205.5 Q320.5,205 317.1,205.5 Z" fill="#b8a884" opacity="0.2"/>
<path d="M323.9,207.6 Q325.8,205.8 327.4,204.4 Q331.6,204.5 335.1,204.6 Q336.6,206.4 337.9,207.8 Q336,209.3 334.4,210.6 Q330,210.8 326.5,211 Q325,209.1 323.9,207.6 Z" fill="#8a7048" opacity="0.4"/>
<path d="M336.3,206.6 Q337.8,204.8 339,203.3 Q344.1,203.1 348.3,202.9 Q349.7,204.7 350.8,206.1 Q349.1,207.9 347.8,209.4 Q343.1,209.6 339.2,209.6 Q337.6,208 336.3,206.6 Z" fill="#8a7048" opacity="0.3"/>
<path d="M339.6,205 Q343.6,203.5 347.5,205 Q343.6,204.5 339.6,205 Z" fill="#b8a884" opacity="0.1"/>
<path d="M348.5,207.2 Q350.3,205.6 351.8,204.2 Q356,204 359.4,203.8 Q360.6,205.8 361.6,207.4 Q360,209 358.6,210.3 Q354.3,210.1 350.7,210 Q349.5,208.5 348.5,207.2 Z" fill="#8a7048" opacity="0.2"/>
<path d="M351.5,205.9 Q355.1,204.4 358.6,205.9 Q355.1,205.4 351.5,205.9 Z" fill="#b8a884" opacity="0.1"/>
<path d="M209.7,214.2 Q211.6,212.1 213.3,210.4 Q217.8,210.7 221.4,210.9 Q223.5,212.3 225.3,213.4 Q223.8,215.6 222.6,217.4 Q217.5,217.4 213.3,217.4 Q211.3,215.7 209.7,214.2 Z" fill="#8a7048" opacity="0.3"/>
<path d="M220.1,214.3 Q221.6,212.2 222.8,210.5 Q227.8,210.4 231.9,210.2 Q234,212 235.7,213.5 Q233.6,215.5 231.8,217.2 Q227,216.9 223,216.7 Q221.4,215.4 220.1,214.3 Z" fill="#7e6842" opacity="0.3"/>
<path d="M234.2,213.8 Q236,212.1 237.4,210.6 Q241.6,210.4 245,210.2 Q246.1,212.5 247,214.3 Q245.6,216.2 244.5,217.7 Q240.3,217.7 236.9,217.6 Q235.4,215.5 234.2,213.8 Z" fill="#a89066" opacity="0.4"/>
<path d="M237.1,212.6 Q240.6,210.8 244.1,212.6 Q240.6,212 237.1,212.6 Z" fill="#b8a884" opacity="0.2"/>
<path d="M246,212.7 Q247.8,211 249.3,209.6 Q253.7,209.6 257.3,209.7 Q258.9,211.4 260.3,212.8 Q258.7,214.8 257.4,216.5 Q252.6,216.3 248.7,216.2 Q247.2,214.2 246,212.7 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M261.1,214 Q262.4,212 263.5,210.4 Q267.9,210.7 271.5,211 Q273.2,212.9 274.6,214.5 Q273.5,216.4 272.5,218 Q267.7,218.2 263.8,218.4 Q262.3,216 261.1,214 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M270.9,213.3 Q273,211.1 274.8,209.3 Q280.1,209.3 284.5,209.4 Q285.8,211.3 286.9,212.8 Q285.6,215 284.5,216.8 Q278.4,217 273.4,217.1 Q272,215 270.9,213.3 Z" fill="#b09a6e" opacity="0.6"/>
<path d="M274.5,211.3 Q278.9,209.4 283.3,211.3 Q278.9,210.8 274.5,211.3 Z" fill="#b8a884" opacity="0.3"/>
<path d="M286,212.8 Q287.4,211 288.7,209.4 Q293,209.5 296.5,209.5 Q298.3,211.5 299.7,213.2 Q298,215.4 296.7,217.2 Q292.2,216.9 288.5,216.7 Q287.1,214.6 286,212.8 Z" fill="#95805c" opacity="0.6"/>
<path d="M298.7,213.3 Q300.1,211.4 301.2,209.8 Q305.5,210 309,210.2 Q310.5,211.9 311.7,213.3 Q310.1,215.4 308.8,217.1 Q304.6,217.3 301.2,217.6 Q299.8,215.2 298.7,213.3 Z" fill="#8a7048" opacity="0.5"/>
<path d="M310,213.1 Q311.5,211.4 312.7,210.1 Q317.9,210.2 322.2,210.4 Q324.4,212.4 326.1,214 Q324.1,215.6 322.4,217 Q317.4,217.2 313.4,217.4 Q311.5,215 310,213.1 Z" fill="#95805c" opacity="0.5"/>
<path d="M324.6,213.1 Q326.1,211 327.3,209.3 Q331.5,209.5 334.9,209.6 Q336.4,211.8 337.6,213.5 Q335.9,215.2 334.6,216.6 Q330.3,216.7 326.8,216.8 Q325.6,214.8 324.6,213.1 Z" fill="#b09a6e" opacity="0.4"/>
<path d="M335.3,213.1 Q337.3,211.1 339,209.5 Q343.8,209.4 347.8,209.3 Q349.3,211.4 350.5,213.2 Q348.7,214.8 347.3,216.2 Q342.4,216.2 338.3,216.3 Q336.7,214.5 335.3,213.1 Z" fill="#95805c" opacity="0.3"/>
<path d="M338.7,211.3 Q342.9,209.6 347.1,211.3 Q342.9,210.8 338.7,211.3 Z" fill="#b8a884" opacity="0.2"/>
<path d="M349.1,214.1 Q351,212 352.6,210.3 Q356.5,210.2 359.8,210.1 Q361.6,212.4 363.1,214.2 Q361.6,216 360.5,217.4 Q355.6,217.5 351.7,217.6 Q350.3,215.7 349.1,214.1 Z" fill="#7e6842" opacity="0.3"/>
<path d="M352.3,212.3 Q356.1,210.5 359.9,212.3 Q356.1,211.8 352.3,212.3 Z" fill="#b8a884" opacity="0.1"/>
<path d="M193.4,221.7 Q195.4,219.3 197.1,217.3 Q202.8,217.1 207.5,217 Q209.1,219.6 210.4,221.8 Q208.5,223.8 206.9,225.5 Q201.6,225.3 197.2,225.1 Q195.1,223.3 193.4,221.7 Z" fill="#b09a6e" opacity="0.3"/>
<path d="M209.2,221 Q210.8,219 212.1,217.3 Q217.8,217.1 222.5,216.9 Q224.5,218.8 226.1,220.4 Q224,222.6 222.4,224.4 Q216.6,224.5 211.8,224.6 Q210.4,222.6 209.2,221 Z" fill="#a89066" opacity="0.3"/>
<path d="M213,219.3 Q217.7,217.5 222.3,219.3 Q217.7,218.7 213,219.3 Z" fill="#b8a884" opacity="0.1"/>
<path d="M223.2,219.9 Q224.7,218.1 226,216.6 Q230.4,216.8 234,216.9 Q235.8,218.9 237.2,220.6 Q235.9,222.6 234.8,224.1 Q229.7,224.3 225.5,224.4 Q224.2,222 223.2,219.9 Z" fill="#9a8258" opacity="0.4"/>
<path d="M226.3,218.7 Q230.2,216.8 234,218.7 Q230.2,218.1 226.3,218.7 Z" fill="#b8a884" opacity="0.2"/>
<path d="M237.6,220.7 Q239.2,218.6 240.6,216.9 Q246,217 250.4,217.1 Q252,219.1 253.4,220.8 Q252,222.6 250.9,224 Q244.9,224.2 240,224.4 Q238.7,222.3 237.6,220.7 Z" fill="#95805c" opacity="0.5"/>
<path d="M241.2,218.9 Q245.5,217.1 249.8,218.9 Q245.5,218.3 241.2,218.9 Z" fill="#b8a884" opacity="0.2"/>
<path d="M250.1,220.8 Q252.1,218.5 253.7,216.7 Q258.9,216.6 263.1,216.6 Q264.9,218.8 266.3,220.7 Q264.4,222.8 262.9,224.5 Q257.8,224.7 253.7,224.9 Q251.7,222.6 250.1,220.8 Z" fill="#a89066" opacity="0.5"/>
<path d="M253.8,218.9 Q258.2,216.9 262.6,218.9 Q258.2,218.3 253.8,218.9 Z" fill="#b8a884" opacity="0.2"/>
<path d="M264.5,220.6 Q266.8,218.9 268.7,217.4 Q273.4,217.6 277.4,217.7 Q279.5,219.5 281.2,221 Q279.6,223.2 278.2,225 Q272.7,224.8 268.1,224.6 Q266.1,222.4 264.5,220.6 Z" fill="#95805c" opacity="0.6"/>
<path d="M268.3,219.5 Q272.9,217.6 277.5,219.5 Q272.9,218.9 268.3,219.5 Z" fill="#b8a884" opacity="0.3"/>
<path d="M278.2,220.1 Q279.8,217.9 281.1,216.1 Q286.3,216.3 290.6,216.3 Q292.3,218.8 293.6,220.7 Q291.8,222.9 290.4,224.6 Q285,224.2 280.6,224 Q279.3,221.8 278.2,220.1 Z" fill="#95805c" opacity="0.7"/>
<path d="M292.2,219.8 Q294.2,217.9 295.9,216.3 Q300.8,216.1 304.8,216 Q306.9,218.1 308.6,219.8 Q306.8,222.1 305.4,223.9 Q299.5,223.8 294.7,223.7 Q293.3,221.6 292.2,219.8 Z" fill="#b09a6e" opacity="0.6"/>
<path d="M306.2,220.9 Q308.1,218.7 309.7,216.9 Q314,217.1 317.5,217.3 Q319.4,219.3 321,220.9 Q319.7,223.2 318.6,225.2 Q313.6,225.1 309.6,225.1 Q307.7,222.8 306.2,220.9 Z" fill="#b09a6e" opacity="0.5"/>
<path d="M318,220.5 Q319.5,218.2 320.8,216.2 Q326.8,216 331.7,215.9 Q333.8,217.9 335.5,219.6 Q333.8,221.9 332.4,223.7 Q326.5,223.6 321.6,223.6 Q319.6,221.9 318,220.5 Z" fill="#8a7048" opacity="0.5"/>
<path d="M321.9,218.3 Q326.7,216.4 331.6,218.3 Q326.7,217.7 321.9,218.3 Z" fill="#b8a884" opacity="0.2"/>
<path d="M333.3,219.7 Q334.7,218 335.8,216.6 Q341.2,216.6 345.6,216.7 Q347.1,218.5 348.2,220 Q346.3,222 344.7,223.7 Q339.7,223.6 335.7,223.6 Q334.4,221.5 333.3,219.7 Z" fill="#9a8258" opacity="0.4"/>
<path d="M336.7,218.5 Q340.8,216.7 344.9,218.5 Q340.8,218 336.7,218.5 Z" fill="#b8a884" opacity="0.2"/>
<path d="M347.1,221.6 Q348.9,219.4 350.3,217.6 Q354.8,217.5 358.5,217.3 Q360.6,219.8 362.2,221.8 Q360.2,223.6 358.5,225 Q353.8,224.9 350,224.8 Q348.4,223 347.1,221.6 Z" fill="#7e6842" opacity="0.3"/>
<path d="M362.7,220.6 Q364.1,218.7 365.3,217.2 Q371.4,217.4 376.4,217.6 Q377.8,219.1 378.9,220.3 Q376.8,222.5 375.1,224.2 Q370.4,224 366.5,223.8 Q364.4,222.1 362.7,220.6 Z" fill="#8a7048" opacity="0.3"/>
<path d="M366.3,219.1 Q370.8,217.3 375.3,219.1 Q370.8,218.6 366.3,219.1 Z" fill="#b8a884" opacity="0.1"/>
<path d="M194,228 Q195.5,225.5 196.6,223.4 Q202.5,223.7 207.4,224 Q208.9,226.4 210.2,228.3 Q208.8,230.5 207.7,232.3 Q202,232.5 197.4,232.6 Q195.6,230.1 194,228 Z" fill="#95805c" opacity="0.3"/>
<path d="M197.7,225.8 Q202.1,223.6 206.5,225.8 Q202.1,225.2 197.7,225.8 Z" fill="#b8a884" opacity="0.1"/>
<path d="M209,228.4 Q210.9,225.9 212.5,223.9 Q217.6,223.5 221.8,223.3 Q223.9,225.9 225.7,228.1 Q223.8,230.3 222.3,232.1 Q217,232.1 212.7,232 Q210.7,230.1 209,228.4 Z" fill="#95805c" opacity="0.4"/>
<path d="M212.8,226.1 Q217.4,224.1 221.9,226.1 Q217.4,225.5 212.8,226.1 Z" fill="#b8a884" opacity="0.2"/>
<path d="M223.6,228.6 Q226,226.6 227.9,225 Q233.9,224.7 238.8,224.4 Q240.4,227 241.8,229.2 Q240.3,231.2 239,232.9 Q232.7,232.8 227.5,232.8 Q225.3,230.5 223.6,228.6 Z" fill="#8a7048" opacity="0.5"/>
<path d="M241.1,228.7 Q242.7,226.5 244.1,224.6 Q249.7,224.3 254.4,224.1 Q255.7,226.8 256.8,229.1 Q254.7,231.5 253,233.6 Q248.2,233.4 244.3,233.3 Q242.6,230.7 241.1,228.7 Z" fill="#9a8258" opacity="0.5"/>
<path d="M244.6,227.1 Q248.9,224.9 253.2,227.1 Q248.9,226.4 244.6,227.1 Z" fill="#b8a884" opacity="0.2"/>
<path d="M254,228.6 Q256.1,225.9 257.8,223.6 Q262.9,224 267.1,224.3 Q268.7,226.7 270,228.7 Q268.1,230.9 266.6,232.7 Q261.5,233.1 257.3,233.3 Q255.5,230.7 254,228.6 Z" fill="#95805c" opacity="0.6"/>
<path d="M270.3,228.1 Q272.6,225.9 274.4,224 Q279.6,223.6 283.8,223.4 Q286,226.1 287.7,228.3 Q285.3,231 283.4,233.1 Q278.4,233.2 274.4,233.3 Q272.1,230.5 270.3,228.1 Z" fill="#95805c" opacity="0.7"/>
<path d="M282.8,227.8 Q285.5,225.3 287.6,223.2 Q293.4,223.3 298.1,223.4 Q300.3,225.5 302.1,227.1 Q300.4,230 299,232.4 Q292.7,232.4 287.6,232.4 Q285,229.9 282.8,227.8 Z" fill="#a89066" opacity="0.7"/>
<path d="M298.7,228.6 Q300.3,226 301.6,223.9 Q307.9,223.7 313,223.6 Q315.3,226.5 317.2,228.8 Q315.3,231.1 313.6,233 Q307,233 301.6,233.1 Q300,230.6 298.7,228.6 Z" fill="#b09a6e" opacity="0.6"/>
<path d="M316.1,228.9 Q318.3,226.9 320,225.2 Q326.3,225.3 331.5,225.4 Q333.7,227.5 335.6,229.2 Q333.7,231.4 332.1,233.1 Q325.7,232.9 320.4,232.7 Q318.1,230.6 316.1,228.9 Z" fill="#95805c" opacity="0.5"/>
<path d="M333.2,229.1 Q335.2,226.5 336.8,224.3 Q342.2,224.3 346.7,224.3 Q348.1,226.6 349.2,228.5 Q347.9,231.2 346.7,233.3 Q341.2,233 336.7,232.7 Q334.8,230.7 333.2,229.1 Z" fill="#95805c" opacity="0.5"/>
<path d="M336.8,226.8 Q341.2,224.6 345.6,226.8 Q341.2,226.1 336.8,226.8 Z" fill="#b8a884" opacity="0.2"/>
<path d="M347.4,228.3 Q349.5,225.9 351.3,223.9 Q356.1,223.6 360,223.4 Q361.8,225.7 363.3,227.6 Q361.8,230.1 360.7,232.1 Q355,231.8 350.4,231.5 Q348.7,229.8 347.4,228.3 Z" fill="#95805c" opacity="0.4"/>
<path d="M351,226.2 Q355.3,224.1 359.7,226.2 Q355.3,225.5 351,226.2 Z" fill="#b8a884" opacity="0.2"/>
<path d="M362.2,229.4 Q364.1,227 365.6,225 Q371.1,225.3 375.5,225.5 Q377.5,227.2 379.2,228.6 Q377.5,230.9 376.1,232.8 Q370.3,232.9 365.5,232.9 Q363.7,231 362.2,229.4 Z" fill="#b09a6e" opacity="0.3"/>
<path d="M366,227.2 Q370.7,225.2 375.4,227.2 Q370.7,226.6 366,227.2 Z" fill="#b8a884" opacity="0.1"/>
<!-- a gutter of smaller setts down each side, which is how a real street is
     edged, and it is what stops the path reading as a rug laid on the floor -->
<path d="M252,176 L245,176 L186,240 L199,240 Z" fill="#6a5a40" opacity="0.42"/>
<path d="M245,176 L242,176 L180,240 L186,240 Z" fill="#8a7a58" opacity="0.3"/>
<path d="M320,176 L327,176 L386,240 L373,240 Z" fill="#6a5a40" opacity="0.38"/>
<path d="M327,176 L330,176 L392,240 L386,240 Z" fill="#4e422e" opacity="0.3"/>
<!-- warm light lying along the stones, brightest down the middle -->
<path d="M258,176 L314,176 L360,238 L212,238 Z" fill="url(#cobbleLight)" opacity="0.2"/>

<!-- ====================================================================
     THE JAMB. The wall has THICKNESS, and you can see it: the left return
     is turned away from the light so it is dark, the right return catches it.
     Without this the opening is a hole cut in paper.
     ==================================================================== -->
<path d="M196,30 L206,36 L206,234 L196,240 Z" fill="#2a1808" opacity="0.9"/>
<path d="M372,30 L362,36 L362,234 L372,240 Z" fill="#4a2e14" opacity="0.85"/>
<path d="M366,38 Q368,136 366,232" fill="none" stroke="#8a6030" stroke-width="1.4" opacity="0.35"/>
<!-- the head of the opening, with its lintel -->
<path d="M196,30 Q284,26 372,30 L372,40 Q284,36 196,40 Z" fill="#3a2210" opacity="0.9"/>
<path d="M196,30 Q284,26 372,30 Q284,29 196,33 Z" fill="#6b4a20" opacity="0.35"/>
<!-- the frame proper: a bead round the whole opening -->
<path d="M192,26 Q284,22 376,26 L376,34 Q284,30 192,34 Z" fill="#5a3a1a" opacity="0.75"/>
<path d="M192,26 L200,26 L200,242 L192,242 Z" fill="#5a3a1a" opacity="0.7"/>
<path d="M368,26 L376,26 L376,242 L368,242 Z" fill="#5a3a1a" opacity="0.7"/>

<!-- ====================================================================
     THE SLIDING PANEL, pushed back to the left and standing PROUD of the
     wall, which is what a panel that has just slid does. It carries the same
     wainscot line as the wall it came out of, so you can see it used to be
     part of it, and the light from the passage rakes across its near edge.
     ==================================================================== -->
<path d="M124,30 Q160,26 196,29 L196,240 Q160,244 124,240 Z" fill="#4a2a10" opacity="0.92"/>
<path d="M128,34 Q160,30.5 192,33 L192,236 Q160,240 128,236 Z" fill="#5a3616" opacity="0.7"/>
<!-- panels in it, matching the wainscot mouldings on the wall -->
<g fill="none" stroke="#3a2008" stroke-width="1.1" opacity="0.45">
  <path d="M136,44 Q160,41 186,43 L186,126 Q160,129 136,131 Z"/>
  <path d="M136,140 Q160,137 186,139 L186,224 Q160,227 136,229 Z"/>
</g>
<g fill="none" stroke="#7a5024" stroke-width="0.8" opacity="0.22">
  <path d="M138,46 Q160,43 184,45"/>
  <path d="M138,142 Q160,139 184,141"/>
</g>
<!-- the wainscot rail carried across it, so it reads as part of the wall -->
<path d="M124,129 Q160,126 196,128 L196,133 Q160,131 124,134 Z" fill="#6b4a20" opacity="0.3"/>
<!-- its leading edge, lit by the passage: this is the single stroke that
     makes the panel stand off the wall instead of lying flat on it -->
<path d="M192,29 Q196,134 192,240 L198,240 Q200,134 198,29 Z" fill="#a8794a" opacity="0.4"/>
<!-- the recess it slid into, dark, on its far side -->
<path d="M118,32 Q122,136 118,238 L126,238 Q130,136 126,32 Z" fill="#1a1008" opacity="0.7"/>
<!-- the track it runs in, at the floor -->
<path d="M112,236 Q160,233 200,235 L200,240 Q160,238 112,241 Z" fill="#2a1808" opacity="0.6"/>
<path d="M118,238 Q160,235.5 196,237" fill="none" stroke="#8a6030" stroke-width="0.9" opacity="0.3"/>

<!-- golden light out of the passage, over everything it falls on -->
<circle cx="285" cy="130" r="130" fill="url(#passageGlow)"/>
<!-- the wedge of it thrown onto the cafe floor, which is what tells you the
     opening is a source and not a picture -->
<path d="M206,236 L362,236 Q404,250 424,260 L142,260 Q170,248 206,236 Z" fill="#ffc860" opacity="0.09"/>
<path d="M224,238 L346,238 Q374,250 388,260 L182,260 Q202,248 224,238 Z" fill="#ffe0a0" opacity="0.06"/>
<!-- shafts of it in the air, following the opening's edges rather than
     radiating from a point that is not there -->
<path d="M208,40 Q262,86 246,260 L192,260 Q206,120 202,44 Z" fill="#ffd700" opacity="0.035"/>
<path d="M360,40 Q312,86 330,260 L378,260 Q364,120 366,44 Z" fill="#ffd700" opacity="0.03"/>

<!-- ====================================================================
     WHAT IS LEFT OF THE CAFE, in the foreground. All of it was in the old
     scene: a hanging lamp, a table, a framed puzzle. They were a polygon, a
     lollipop, and an empty rectangle.
     ==================================================================== -->
<!-- the hanging lamp, the same fitting as cafe_0 -->
<path d="M80,0 Q81,8 80,15" fill="none" stroke="#4a3a18" stroke-width="1.1" opacity="0.5"/>
<path d="M66,26 Q68,14 80,14 Q92,14 94,26 Q87,29 80,29 Q73,29 66,26 Z" fill="#8b6840" opacity="0.75"/>
<path d="M70,24 Q72,17 80,17 Q88,17 90,24 Q85,26 80,26 Q75,26 70,24 Z" fill="#a8814e" opacity="0.45"/>
<path d="M66,27 Q80,56 94,27 Q80,31 66,27 Z" fill="#ffa040" opacity="0.1"/>
<circle cx="80" cy="24" r="2.8" fill="#ffa040" opacity="0.65" filter="url(#passageBlur)">
  <animate attributeName="opacity" values="0.48;0.74;0.48" dur="4.9s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>

<!-- the framed crossword still on the wall, drawn as a GRID, which is the
     lesson cafe_0 already settled: a framed puzzle reads as black and white
     cells at any size and not at all as a blank cream rectangle -->
<path d="M36,52 L78,54 L78,106 L36,104 Z" fill="#2a1808"/>
<path d="M40,56 L74,58 L74,102 L40,100 Z" fill="#e8dcc4" opacity="0.55"/>
<path d="M48,57 v44 M57,57.5 v44 M65,58 v44 M40,67 h34 M40,78 h34 M40,89 h34"
      stroke="#8a7550" stroke-width="0.6" opacity="0.35"/>
<path d="M40,58 L48,58.4 L48,67 L40,67 Z" fill="#3a2a18" opacity="0.5"/>
<path d="M57,68 L65,68.4 L65,78 L57,78 Z" fill="#3a2a18" opacity="0.45"/>
<path d="M48,79 L57,79.4 L57,89 L48,89 Z" fill="#3a2a18" opacity="0.42"/>
<path d="M36,52 L78,54 L78,58 L36,56 Z" fill="#5a3a1a" opacity="0.55"/>

<!-- the table. It was an ellipse on a stick. A pedestal table has a foot
     that spreads, a column with a swell in it, and a top thick enough to
     see the edge of. Its chair is not drawn: this is the corner of the room
     the player is walking away from, and an empty table says that. -->
<path d="M46,244 Q76,238 106,244 Q76,251 46,244 Z" fill="#1e1206" opacity="0.45"/>
<path d="M58,238 Q76,232 94,238 Q94,244 76,246 Q58,244 58,238 Z" fill="#5a3010" opacity="0.9"/>
<path d="M68,206 Q64,220 66,232 Q76,237 86,232 Q88,220 84,206 Z" fill="#6b3a10"/>
<path d="M70,209 Q67,221 68,231" fill="none" stroke="#8a5228" stroke-width="1.8" opacity="0.35"/>
<path d="M70,196 Q76,192 82,196 Q82,204 76,206 Q70,204 70,196 Z" fill="#7a4420" opacity="0.9"/>
<path d="M40,198 Q76,190 112,198 Q112,204 76,208 Q40,204 40,198 Z" fill="#6b3a10" opacity="0.9"/>
<path d="M40,196 Q76,188 112,196 Q112,201 76,205 Q40,201 40,196 Z" fill="#a0623a"/>
<path d="M52,194 Q72,190 92,193 Q72,196 52,194 Z" fill="#c07a48" opacity="0.32"/>
<!-- a cup left on it, still steaming, because someone got up in a hurry -->
<path d="M84,192 Q92,190 100,192 Q92,195 84,192 Z" fill="#d8c4a4" opacity="0.6"/>
<path d="M86,185 Q86,192 92,192.5 Q98,192 98,185 Q92,183 86,185 Z" fill="#e8d8c0" opacity="0.85"/>
<path d="M98,187 Q103,188 102,190.5 Q101,193 97,192.4" fill="none" stroke="#e8d8c0" stroke-width="1.4" opacity="0.8"/>
<path d="M89,183 Q87,176 90,170" fill="none" stroke="#f4efe4" stroke-width="1.1" opacity="0.18">
  <animate attributeName="opacity" values="0.07;0.22;0.07" dur="3.7s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M89,183 Q87,176 90,170;M89,183 Q92,176 88,170;M89,183 Q87,176 90,170"
           dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- dust turning over in the shaft of light. It drifts UP because warm air
     off the cobbles is rising through the doorway. -->
<circle cx="260" cy="80" r="1" fill="#ffeaa7" opacity="0.3">
  <animate attributeName="opacity" values="0.1;0.36;0.1" dur="3.4s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="cy" values="96;60" dur="12s" repeatCount="indefinite"/>
</circle>
<circle cx="292" cy="100" r="1.4" fill="#ffd700" opacity="0.2">
  <animate attributeName="opacity" values="0.06;0.3;0.06" dur="4.6s" begin="1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="cy" values="118;66" dur="15s" begin="1s" repeatCount="indefinite"/>
</circle>
<circle cx="238" cy="112" r="1" fill="#ffeaa7" opacity="0.16">
  <animate attributeName="opacity" values="0.05;0.24;0.05" dur="3.9s" begin="0.5s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="cy" values="130;76" dur="17s" begin="0.5s" repeatCount="indefinite"/>
</circle>
<circle cx="330" cy="92" r="1" fill="#ffa040" opacity="0.18">
  <animate attributeName="opacity" values="0.06;0.26;0.06" dur="5.3s" begin="2s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="cy" values="110;58" dur="19s" begin="2s" repeatCount="indefinite"/>
</circle>
<circle cx="312" cy="140" r="1.2" fill="#ffd700" opacity="0.14">
  <animate attributeName="opacity" values="0.04;0.2;0.04" dur="6.1s" begin="3.2s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="cy" values="156;94" dur="21s" begin="3.2s" repeatCount="indefinite"/>
</circle>
</svg>`;

// Scene 4 (complete): Glimpse of bustling square through the passage, reusing scene 3
STORY_SCENES['cafe_4'] = STORY_SCENES['cafe_3'];
