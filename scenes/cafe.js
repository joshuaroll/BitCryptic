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

<!-- A CUP with a handle, a saucer, and a real curve to the lip. It sits
     well inside the top ellipse (cx120 cy193 rx46 ry9), saucer foreshortened
     to the same 0.2 ratio as the top, with a contact shadow under it. -->
<ellipse cx="139" cy="197.6" rx="11" ry="2.6" fill="#3a2210" opacity="0.4"/>
<ellipse cx="138" cy="196" rx="9.5" ry="2.4" fill="#d8c4a4"/>
<ellipse cx="138" cy="195.6" rx="6" ry="1.3" fill="#c4ae8c"/>
<path d="M132,188.5 Q132,196 138,196 Q144,196 144,188.5 Q138,187 132,188.5 Z" fill="#e8d8c0"/>
<path d="M144,190 Q149,190.5 148.5,193 Q148,195 143.2,194.6" fill="none" stroke="#e8d8c0" stroke-width="1.5"/>
<ellipse cx="138" cy="188.5" rx="6" ry="1.5" fill="#5a3a1a" opacity="0.8"/>
<path d="M135,186.5 Q133,179 136,172" fill="none" stroke="#f4efe4" stroke-width="1.2" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.26;0.1" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M135,186.5 Q133,179 136,172;M135,186.5 Q138,179 135,172;M135,186.5 Q133,179 136,172" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M141,186 Q143,177 140,170" fill="none" stroke="#f4efe4" stroke-width="1.1" opacity="0.16">
  <animate attributeName="opacity" values="0.07;0.22;0.07" dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M141,186 Q143,177 140,170;M141,186 Q138,177 141,170;M141,186 Q143,177 140,170" dur="4.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- A HALF-SOLVED GRID left on the table. This is the thing that says the cafe
     is a place where people work on clues, which no amount of furniture says. -->
<g transform="translate(100,194.5) scale(1,0.32) rotate(-12)">
  <rect x="-15" y="-11" width="32" height="24" fill="#3a2210" opacity="0.3" transform="translate(1.2,3)"/>
  <rect x="-16" y="-12" width="32" height="24" fill="#f0e4cc"/>
  <path d="M-16,-12 h32 v24 h-32 Z" fill="none" stroke="#8a7550" stroke-width="1.2" opacity="0.7"/>
  <path d="M-8,-12 v24 M0,-12 v24 M8,-12 v24 M-16,-4 h32 M-16,4 h32" stroke="#8a7550" stroke-width="1" opacity="0.55"/>
  <rect x="-8" y="-12" width="8" height="8" fill="#3a2210" opacity="0.6"/>
  <rect x="0" y="-4" width="8" height="8" fill="#3a2210" opacity="0.6"/>
  <rect x="8" y="4" width="8" height="8" fill="#3a2210" opacity="0.55"/>
</g>
<path d="M115,199.8 L126,198.6" stroke="#3a2210" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M114,198.8 L125,197.4" stroke="#ffd700" stroke-width="1.5" opacity="0.8" stroke-linecap="round"/>
<path d="M125,197.4 L127,197.1" stroke="#5a3418" stroke-width="1.1" stroke-linecap="round"/>

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
<!-- the top is a PLANE you can see into (back edge y183, front y192), so
     things can stand on it, then a thickness strip below. The old top was the
     front edge only, and the translucent cloth hanging off it read as a
     shaft of white light, so the cloth is gone. -->
<path d="M312,183 L388,183 L396,192 L304,192 Z" fill="#a0522d"/>
<path d="M316,184 L384,184 L388,188 L312,188 Z" fill="#c07a48" opacity="0.3"/>
<path d="M304,192 L396,192 L396,197 Q350,199 304,197 Z" fill="#7a4420"/>
<!-- a folded napkin and a sugar bowl, lying ON the top -->
<path d="M352,189.6 L368,189.6 L371,186.4 L355,186.4 Z" fill="#3a2210" opacity="0.3"/>
<path d="M350,189 L366,189 L369,185.6 L353,185.6 Z" fill="#d8c4a4"/>
<path d="M351.5,187.5 L367.5,187.5" stroke="#b8a484" stroke-width="0.6"/>
<ellipse cx="379" cy="189.8" rx="6" ry="1.5" fill="#3a2210" opacity="0.4"/>
<path d="M374,184 Q374,189.5 379,189.5 Q384,189.5 384,184 Z" fill="#c9a441"/>
<ellipse cx="379" cy="184" rx="5" ry="1.3" fill="#e8d8c0"/>
<path d="M379,182.7 V181" stroke="#a8812c" stroke-width="1.2" stroke-linecap="round"/>

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
<!-- BARISTA, carrying the cup as part of the character rig -->
${bcMissionPlace('barista','work',214,243,139)}
<!-- his cup on the table beside him, standing on the top plane -->
<ellipse cx="331" cy="190.4" rx="9" ry="1.8" fill="#3a2210" opacity="0.4"/>
<ellipse cx="330" cy="189.4" rx="8" ry="1.8" fill="#d8c4a4"/>
<path d="M325,182.5 Q325,189.4 330,189.4 Q335,189.4 335,182.5 Z" fill="#e8d8c0"/>
<path d="M335,183.8 q4.5,0 4.2,2.6 q-0.3,2.4 -4.6,2" fill="none" stroke="#e8d8c0" stroke-width="1.4"/>
<ellipse cx="330" cy="182.5" rx="5" ry="1.2" fill="#5a3a1a" opacity="0.8"/>
<path d="M329,180.5 q2,-5 0,-9" fill="none" stroke="#f4efe4" stroke-width="1" opacity="0.18">
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
  <!-- Mug handle: drawn BEFORE the body, both ends running inside the cup
       outline, so the body covers the joins (no cut stub, no shadow poke) -->
  <path d="M314,113 Q356,112 358,136 Q359,156 300,150" fill="none" stroke="#e8d8c0" stroke-width="8" opacity="1"/>
  <path d="M314,116 Q352,116 354,136 Q354,152 300,148" fill="none" stroke="#d4c4a0" stroke-width="3" opacity="0.6"/>
  <!-- Mug body (U-shaped, Opaque) -->
  <path d="M175,100 Q180,175 250,175 Q320,175 325,100 Q250,88 175,100 Z" fill="#e8d8c0" opacity="1"/>
  <!-- Mug inner shadow for depth -->
  <path d="M185,105 Q190,170 250,170 Q310,170 315,105 Q250,95 185,105 Z" fill="#3a1a08" opacity="0.1"/>
  <!-- Mug rim -->
  <ellipse cx="250" cy="100" rx="75" ry="12" fill="#f0e4d0" opacity="1"/>
  <ellipse cx="250" cy="100" rx="68" ry="9" fill="#6b4020" opacity="0.4"/>
  <!-- Coffee surface -->
  <ellipse cx="250" cy="102" rx="66" ry="8" fill="#3a1a08" opacity="1"/>
  <!-- Golden text on cup (Sharp and clear) -->
  <g>
    <text x="250" y="138" text-anchor="middle" fill="#ffd700" stroke="#3a1a08" stroke-width="0.35" paint-order="stroke" font-family="'JetBrains Mono',monospace" font-size="6.5" opacity="1" letter-spacing="0.2">Something instantly perky,</text>
    <text x="250" y="148" text-anchor="middle" fill="#ffd700" stroke="#3a1a08" stroke-width="0.35" paint-order="stroke" font-family="'JetBrains Mono',monospace" font-size="6.5" opacity="1" letter-spacing="0.2">starts a mouthful (3)</text>
  </g>
  <!-- Steam wisps (Originating from coffee surface at y=102) -->
  <path d="M235,98 Q230,80 236,65" fill="none" stroke="#f4efe4" stroke-width="1.5" opacity="0.12"><animate attributeName="opacity" values="0.06;0.18;0.06" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M235,98 Q230,80 236,65;M235,98 Q240,80 234,65;M235,98 Q230,80 236,65" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  <path d="M250,96 Q248,75 252,57" fill="none" stroke="#f4efe4" stroke-width="1.8" opacity="0.14"><animate attributeName="opacity" values="0.08;0.2;0.08" dur="3.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M250,96 Q248,75 252,57;M250,96 Q254,75 248,57;M250,96 Q248,75 252,57" dur="4.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  <path d="M265,97 Q268,78 263,61" fill="none" stroke="#f4efe4" stroke-width="1.2" opacity="0.1"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/><animate attributeName="d" values="M265,97 Q268,78 263,61;M265,97 Q262,78 267,61;M265,97 Q268,78 263,61" dur="5.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
</g>
<!-- Ambient warm particles -->
<circle cx="180" cy="70" r="1.5" fill="#ffa040" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="320" cy="50" r="1" fill="#ffeaa7" opacity="0.15"><animate attributeName="opacity" values="0.08;0.25;0.08" dur="3.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="150" cy="100" r="1" fill="#ffeaa7" opacity="0.12"><animate attributeName="opacity" values="0.06;0.2;0.06" dur="5s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</svg>`;

// Scene 3: She pulls the lever behind the espresso machine and a section of
// the back wall slides open onto Town Square.
//
// Built IN the cafe_0 room (same counter, machine, tables and lamps) rather
// than in a separate wall-only set, so the passage visibly opens out of the
// cafe the player has been sitting in. The middle framed crossword hung on
// the section that moved, so it travels with the panel: the same grid now
// hangs 84 units to the left, which is what says "slid sideways".
//
// cafe_4 is the same moment a beat later: the lever stays down, she has let
// go of it and turned to wave.
function cafeSlideScene(sfx, wave) {
  var room = STORY_SCENES['cafe_0']
    // a derived scene duplicates cafe_0's ids, so they are suffixed
    .replace(/id="(lampGlow2|lampGlow|warmGlow|cafeBg)"/g, 'id="$1' + sfx + '"')
    .replace(/url\(#(lampGlow2|lampGlow|warmGlow|cafeBg)\)/g, 'url(#$1' + sfx + ')')
    // the middle frame lived on the moving section; it is redrawn on the panel
    .replace(/<g opacity="0\.92">\s*<path d="M198,38[\s\S]*?<\/g>/, '')
    // the grinder stood exactly where her lever hand goes; it moves to the
    // free left end of the counter in these two scenes
    .replace(/(<path d="M379 114 H394[\s\S]*?H379Z" fill="#a06a38"\/>)/, '<g transform="translate(-85,0)">$1</g>');

  var defs =
    '<linearGradient id="cafeSky' + sfx + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#7a5a30"/><stop offset="60%" stop-color="#d0a050"/><stop offset="100%" stop-color="#f0c870"/>' +
    '</linearGradient>' +
    '<linearGradient id="cafeSq' + sfx + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#a88a58"/><stop offset="100%" stop-color="#7a6040"/>' +
    '</linearGradient>' +
    '<clipPath id="cafeGap' + sfx + '"><rect x="190" y="52" width="80" height="118"/></clipPath>';

  // ---- THE OPENING, in the wall plane, before the floor and the furniture
  var wall =
    '<!-- THE OPENING: the back-wall section between x190 and x270 has slid away -->' +
    '<g clip-path="url(#cafeGap' + sfx + ')">' +
      '<rect x="190" y="52" width="80" height="118" fill="url(#cafeSky' + sfx + ')"/>' +
      // the far side of the square, one soft mass, then a row of gabled fronts
      '<path d="M190,112 Q212,106 232,110 Q252,114 270,108 L270,140 L190,140 Z" fill="#8a6a3a" opacity="0.55"/>' +
      '<path d="M188,118 L200,108 L212,118 L210,140 L190,140 Z M246,116 L258,104 L272,116 L272,140 L248,140 Z" fill="#9a7440" opacity="0.8"/>' +
      '<path d="M212,124 L222,116 L232,124 L232,140 L212,140 Z" fill="#a8824a" opacity="0.7"/>' +
      '<path d="M196,122 h4 v5 h-4 Z M252,121 h4 v5 h-4 Z M262,124 h4 v5 h-4 Z M220,128 h4 v5 h-4 Z" fill="#ffe08a" opacity="0.75"/>' +
      // the square itself, paved, opening toward the passage
      '<rect x="190" y="138" width="80" height="32" fill="url(#cafeSq' + sfx + ')"/>' +
      // cobbles: courses of setts, joints staggered course to course
      '<path d="M190,146 H270 M190,155 H270 M190,164 H270" stroke="#6a5234" stroke-width="0.7" opacity="0.5"/>' +
      '<path d="M196,138 v8 M206,138 v8 M216,138 v8 M244,138 v8 M254,138 v8 M264,138 v8 M191,146 v9 M201,146 v9 M259,146 v9 M269,146 v9 M196,155 v9 M264,155 v9 M191,164 v6 M201,164 v6 M211,164 v6 M249,164 v6 M259,164 v6 M269,164 v6" stroke="#6a5234" stroke-width="0.6" opacity="0.4"/>' +
      // THE FOUNTAIN at the centre of the square: the town_0 fountain (same
      // stone and water values), big enough to read at 520px: basin with a
      // lit rim and front wall, pillar, top bowl, a strong jet and two tiers
      // of falling water
      // a far figure beyond the fountain, drawn first so the spray passes in front
      '<g fill="#4a3420" opacity="0.6"><circle cx="215" cy="139.5" r="1.5"/><path d="M213,148 Q212.8,142 215,141.5 Q217.2,142 217,148 Z"/></g>' +
      '<ellipse cx="230" cy="163" rx="27" ry="3.5" fill="#3a2a18" opacity="0.4"/>' +
      '<path d="M206,155 V160.5 Q230,167.5 254,160.5 V155 Z" fill="#74748a"/>' +
      '<ellipse cx="230" cy="155" rx="24" ry="6" fill="#8a8a9a"/>' +
      '<ellipse cx="230" cy="155.2" rx="20.5" ry="4.3" fill="#5f93c0"/>' +
      '<ellipse cx="230" cy="155" rx="24" ry="6" fill="none" stroke="#c8c8d6" stroke-width="1"/>' +
      '<rect x="227.4" y="131" width="5.2" height="24" fill="#9a9aaa"/>' +
      '<rect x="228.2" y="131" width="1.8" height="24" fill="#c4c4d4" opacity="0.7"/>' +
      '<path d="M219.5,131.5 Q230,137 240.5,131.5 Z" fill="#74748a"/>' +
      '<ellipse cx="230" cy="131.5" rx="10.5" ry="3" fill="#8a8a9a"/>' +
      '<ellipse cx="230" cy="131.3" rx="8.6" ry="2" fill="#5f93c0"/>' +
      '<path d="M230,130.5 V114" stroke="#d8f0ff" stroke-width="2.2" stroke-linecap="round" opacity="0.9">' +
        '<animate attributeName="opacity" values="0.7;1;0.7" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      '</path>' +
      '<path d="M230,114.5 Q222,114 220.5,130 M230,114.5 Q238,114 239.5,130 M220,133 Q212,136 210,153 M240,133 Q248,136 250,153" fill="none" stroke="#bfe4ff" stroke-width="1.6" stroke-linecap="round" opacity="0.85">' +
        '<animate attributeName="opacity" values="0.65;0.95;0.65" dur="3.3s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      '</path>' +
      '<path d="M208,154.5 q2,-2 4,0 M248,154.5 q2,-2 4,0" fill="none" stroke="#e4f4ff" stroke-width="0.9" stroke-linecap="round" opacity="0.8"/>' +
      // townsfolk crossing the square, small and soft, so it reads as busy
      '<g fill="#4a3420" opacity="0.7">' +
        '<circle cx="201" cy="152.5" r="2.3"/><path d="M197.8,166 Q197.4,156 201,155.3 Q204.6,156 204.2,166 Z"/>' +
        '<circle cx="258.5" cy="146" r="2"/><path d="M255.7,158 Q255.4,149.2 258.5,148.6 Q261.6,149.2 261.3,158 Z"/>' +
      '</g>' +
      // warm daylight veil over the whole glimpse, so it sits back a plane
      '<rect x="190" y="52" width="80" height="118" fill="#f0c870" opacity="0.14"/>' +
    '</g>' +
    // glow round the opening on the wall, BEFORE the jambs so it cannot wash them out
    '<path d="M180,46 H280 V172 H180 Z" fill="#ffd070" opacity="0.06"/>' +
    // the jambs: the wall's thickness, both sides, then a bead round the opening
    '<path d="M190,52 L196,57 L196,170 L190,170 Z" fill="#6b4a20"/>' +
    '<path d="M270,52 L264,57 L264,170 L270,170 Z" fill="#4a2c12"/>' +
    '<path d="M190,52 L270,52 L264,57 L196,57 Z" fill="#3a2010"/>' +
    '<path d="M188,50 H272 V170 M188,50 V170" fill="none" stroke="#5a3a1a" stroke-width="2.4"/>' +
    // the iron rail the section hangs from, and the floor track it runs in
    '<path d="M98,47 H274" stroke="#2a1808" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M98,46 H274" stroke="#8a7550" stroke-width="0.8" opacity="0.5"/>' +
    // THE SLID PANEL: the wall section itself, now standing in front of the
    // wall to the left of the opening, cream above and wainscot below
    '<path d="M188,50 L190,52 L190,172 L188,170 Z" fill="#1a0e06" opacity="0.5"/>' +
    '<path d="M104,50 H188 V170 H104 Z" fill="#4a2e16"/>' +
    '<path d="M104,50 H188 V130 H104 Z" fill="#e8d8c0" opacity="0.14"/>' +
    '<path d="M104,130 H188 V170 H104 Z" fill="#5a3a1a" opacity="0.55"/>' +
    '<path d="M104,130 H188" stroke="#6b4a20" stroke-width="2" opacity="0.5"/>' +
    '<path d="M110,137 H182 V164 H110 Z" fill="none" stroke="#6b4a20" stroke-width="1" opacity="0.35"/>' +
    '<path d="M104,50 H188 V170 H104 Z" fill="none" stroke="#2a1608" stroke-width="1.6"/>' +
    // its leading edge, lit gold by the passage it has just uncovered
    '<path d="M185,51 H188 V169 H185 Z" fill="#ffd070" opacity="0.45"/>' +
    // its two hanger wheels on the rail
    '<circle cx="118" cy="47" r="3" fill="#3a2a18"/><circle cx="174" cy="47" r="3" fill="#3a2a18"/>' +
    '<circle cx="118" cy="47" r="1" fill="#8a7550"/><circle cx="174" cy="47" r="1" fill="#8a7550"/>' +
    // the middle framed crossword, carried across with the panel (x -84)
    '<g transform="translate(-84,0)" opacity="0.92">' +
      '<path d="M198,58 L246,60 L246,116 L198,114 Z" fill="#241606"/>' +
      '<path d="M202,62 L242,64 L242,112 L202,110 Z" fill="#e8dcc4"/>' +
      '<path d="M212,63 v48 M222,63.5 v48 M232,64 v48 M202,74 h40 M202,86 h40 M202,98 h40" stroke="#8a7550" stroke-width="0.6" opacity="0.55"/>' +
      '<rect x="212" y="64" width="10" height="10" fill="#3a2a18" opacity="0.85"/>' +
      '<rect x="202" y="75" width="10" height="11" fill="#3a2a18" opacity="0.85"/>' +
      '<rect x="232" y="87" width="10" height="11" fill="#3a2a18" opacity="0.8"/>' +
      '<rect x="222" y="99" width="10" height="11" fill="#3a2a18" opacity="0.8"/>' +
      '<path d="M198,58 L246,60 L246,64 L198,62 Z" fill="#5a3a1a" opacity="0.6"/>' +
    '</g>' +
    '<path d="M98,171 H274" stroke="#2a1808" stroke-width="2" opacity="0.7"/>\n';

  // ---- on the floor plane, before the counter: the light the passage throws,
  // the lever (its pivot hidden behind the machine), then the barista. The
  // counter and everything on it is drawn after her, so it hides her below
  // the counter top, which is what puts her BEHIND the counter.
  // brass shaft from a pivot hidden behind the machine, dark ball knob on top.
  // Pulled in cafe_3; at rest (out of sight behind the machine) in cafe_4.
  // In cafe_3 it runs from the pivot THROUGH her fist (centre 377.7,113.6,
  // measured) and out past it to the knob, so it is drawn after her body and
  // the fist is redrawn on top: the brass shows below and above the fist only.
  var lever =
    '<path d="M362,134 L385.3,103.7" stroke="#8a6a20" stroke-width="3.4" stroke-linecap="round"/>' +
    '<path d="M362,134 L385.3,103.7" stroke="#d6a640" stroke-width="1.4" stroke-linecap="round"/>' +
    '<circle cx="385.6" cy="103.3" r="3.2" fill="#3a1a10"/><circle cx="384.6" cy="102.3" r="1.1" fill="#c07a48" opacity="0.7"/>';
  // Her raised hand in cafe_3, closed round the lever. Generated by the
  // character rig, not drawn, in the barista's own pose space (inside the
  // explain pose's rotate(4 100 244)), replacing that pose's open left palm:
  //   BCRig.hand(39, 53, 163, {pose:'fist', rot:-40, flip:true,
  //              fill:'#B8754D', size:0.42})
  // r 39 is her head radius; size 0.42 matches the cast's own hand width.
  // Regenerate from the rig rather than editing the numbers below.
  var fist = '<g transform="translate(53,163) rotate(-40) scale(-0.13,0.13) translate(-158,-330)"><g fill="#B8754D"><g transform="translate(212,232) rotate(74)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(88)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(46)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(70)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(86)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(42)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(66)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(84)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(38)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(62)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(78)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(34)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g><g transform="translate(104,298) rotate(-46) rotate(34)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(40)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g></g></g>';
  // the explain pose minus its open left palm (cut by nesting depth), and the
  // fist placed in the same pose space, as bcApprovedHold places a front hand
  function cutLeftHand(s) {
    var i = s.indexOf('<g data-hand="left"'), depth = 0, re = /<g\b|<\/g>/g, t;
    if (i < 0) return s;
    re.lastIndex = i;
    while ((t = re.exec(s))) {
      depth += t[0] === '</g>' ? -1 : 1;
      if (!depth) return s.slice(0, i) + s.slice(t.index + 4);
    }
    return s;
  }
  // (with shadow off the placed string opens with the figure's own <g> tag,
  // which carries the pose-space transform the fist reuses)
  var placed = bcApprovedPlace('barista', 'explain', 400, 178, 128, false, { shadow: false });
  var pull =
    cutLeftHand(placed) +
    lever +
    placed.slice(0, placed.indexOf('>') + 1).replace('data-approved-character', 'data-approved-hands') +
      '<g transform="rotate(4 100 244)">' + fist + '</g></g>';
  var floor =
    '<!-- the passage light lying across the cafe floor -->' +
    '<path d="M190,171 L270,171 L320,260 L130,260 Z" fill="#ffd070" opacity="0.08"/>' +
    '<path d="M204,171 L256,171 L284,260 L170,260 Z" fill="#ffe08a" opacity="0.05"/>' +
    // in cafe_4 she has let go and the lever has dropped back to rest, tucked
    // behind the machine, so no stray knob floats beside her head
    '<!-- BARISTA, behind the counter -->' +
    (wave
      ? bcApprovedPlace('barista', 'explain', 412, 178, 128, true, { shadow: false }) +
        // two small motion arcs hugging the raised hand's fingertips (hand
        // bbox x 422-438, y 107-123), clear of the canister at x 450
        '<path d="M440,104 Q444,109 440,114 M444,101 Q449,109 444,117" fill="none" stroke="#f4efe4" stroke-width="1.2" stroke-linecap="round" opacity="0.4">' +
          '<animate attributeName="opacity" values="0.15;0.5;0.15" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
        '</path>'
      : pull) + '\n';

  return room
    .replace('<defs>', '<defs>' + defs)
    .replace('<!-- Floor -->', wall + '<!-- Floor -->')
    .replace('<!-- Service counter', floor + '<!-- Service counter');
}
STORY_SCENES['cafe_3'] = cafeSlideScene('C3', false);

// Scene 4 (complete): the glimpse of the square through the passage, and the
// barista's wave
STORY_SCENES['cafe_4'] = cafeSlideScene('C4', true);
