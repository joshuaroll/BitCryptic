// Hidden story scenes — "The Listening Post"
// Canon's questline. Entered by typing HIDDEN at the Town Square terminal.
//
// Keys: hidden_0..hidden_10 (intro), hidden_m1..hidden_m5 (mission beats),
//       hidden_end_0..hidden_end_16 (the ending).
//
// COMPOSITION RULE, ENFORCED THROUGHOUT: Canon is never shown facing the player.
// Every scene he appears in draws a back, a head, a chair. No face, ever.
//
// PALETTE: room is Deep Ink #0a1224 / #05080f. Screen glow is cold grey-green
// (#16323a, #3d5a75, #5fa0b8). Amber #F2C14E is reserved for exactly two things:
// the lamp burning on the big screen (the wreck, four hundred feet down) and
// the pencil on the table. The room is cold. One small warm thing in it is
// underwater and on a screen.
//
// ID DISCIPLINE: every gradient and filter id in this file carries a scene
// suffix (hidGrate0, hidBigScr1, ...). Scenes coexist in one document and an
// unsuffixed id silently steals another scene's fill.

// ---------------------------------------------------------------------------
// INTRO — hidden_0 .. hidden_10
// ---------------------------------------------------------------------------

// Scene 0: The fountain grate open in the town square. Stairs going down.
// Water still running and the sound gone — the water is drawn mid-stream with
// no ripple animation on the basin, which is the visual of a held note.
STORY_SCENES['hidden_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidSky0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1224"/><stop offset="55%" stop-color="#16233a"/><stop offset="100%" stop-color="#28384c"/>
  </linearGradient>
  <linearGradient id="hidStair0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a2436"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidShaft0" cx="50%" cy="12%" r="70%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.22"/><stop offset="55%" stop-color="#3d5a75" stop-opacity="0.07"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidWater0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fb4c8" stop-opacity="0.55"/><stop offset="100%" stop-color="#3d5a75" stop-opacity="0.1"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidSky0)"/>
<!-- Distant buildings, town square, kept flat and unlit -->
<rect x="0" y="52" width="62" height="120" rx="2" fill="#141c2e" opacity="0.9"/>
<rect x="58" y="40" width="52" height="132" rx="2" fill="#101828" opacity="0.9"/>
<rect x="392" y="46" width="56" height="126" rx="2" fill="#141c2e" opacity="0.9"/>
<rect x="444" y="36" width="56" height="136" rx="2" fill="#101828" opacity="0.9"/>
<rect x="10" y="70" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.3"/>
<rect x="36" y="70" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.22"/>
<rect x="404" y="64" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.26"/>
<rect x="458" y="56" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.2"/>
<!-- Cobbles -->
<rect x="0" y="170" width="500" height="90" fill="#141a26"/>
<ellipse cx="70" cy="200" rx="15" ry="6" fill="#3d4a60" opacity="0.6"/>
<ellipse cx="150" cy="222" rx="13" ry="5" fill="#39465c" opacity="0.5"/>
<ellipse cx="360" cy="206" rx="14" ry="6" fill="#3d4a60" opacity="0.55"/>
<ellipse cx="430" cy="234" rx="13" ry="5" fill="#39465c" opacity="0.45"/>
<ellipse cx="110" cy="248" rx="12" ry="5" fill="#3d4a60" opacity="0.4"/>
<!-- Fountain basin, cut away at the front so the shaft reads -->
<ellipse cx="250" cy="176" rx="98" ry="30" fill="#525f79"/>
<ellipse cx="250" cy="174" rx="90" ry="26" fill="#1a2334"/>
<!-- Fountain pillar and top basin, behind -->
<rect x="243" y="112" width="14" height="46" fill="#525f79"/>
<rect x="245" y="112" width="6" height="46" fill="#6d7b96" opacity="0.5"/>
<ellipse cx="250" cy="112" rx="26" ry="9" fill="#525f79"/>
<ellipse cx="250" cy="110" rx="20" ry="6" fill="#16323a"/>
<!-- Water, still running. Drawn as unbroken ribbons, no animation: the sound is
     what stopped, not the water, so the streams hold one shape -->
<path d="M250,104 L250,88" stroke="url(#hidWater0)" stroke-width="2" fill="none" opacity="0.7"/>
<path d="M236,113 Q226,132 220,152" stroke="url(#hidWater0)" stroke-width="1.6" fill="none" opacity="0.6"/>
<path d="M264,113 Q274,132 280,152" stroke="url(#hidWater0)" stroke-width="1.6" fill="none" opacity="0.6"/>
<path d="M242,116 Q236,138 233,156" stroke="#7fb4c8" stroke-width="0.8" fill="none" opacity="0.28"/>
<path d="M258,116 Q264,138 267,156" stroke="#7fb4c8" stroke-width="0.8" fill="none" opacity="0.28"/>
<!-- Open shaft in the floor of the basin -->
<ellipse cx="250" cy="208" rx="62" ry="22" fill="#05080f"/>
<ellipse cx="250" cy="208" rx="62" ry="22" fill="none" stroke="#525f79" stroke-width="2"/>
<!-- Cold light coming UP out of the shaft, faint -->
<ellipse cx="250" cy="204" rx="74" ry="30" fill="url(#hidShaft0)"/>
<!-- Stairs going down, seen through the hole -->
<g fill="url(#hidStair0)" stroke="#0d1422" stroke-width="0.6">
  <rect x="212" y="200" width="76" height="7" rx="1"/>
  <rect x="216" y="209" width="68" height="7" rx="1"/>
  <rect x="220" y="218" width="60" height="6" rx="1"/>
  <rect x="224" y="226" width="52" height="6" rx="1"/>
  <rect x="228" y="234" width="44" height="5" rx="1"/>
</g>
<!-- Boot scuff on the fourth step -->
<path d="M232,227 Q243,225 252,228" fill="none" stroke="#4a5568" stroke-width="1.4" stroke-linecap="round" opacity="0.55"/>
<path d="M236,230 Q245,228 251,230" fill="none" stroke="#4a5568" stroke-width="0.9" stroke-linecap="round" opacity="0.35"/>
<!-- The grate, swung open on its hinge, standing up at the left rim -->
<g transform="translate(188,190) rotate(-64)">
  <rect x="0" y="-3" width="62" height="6" rx="2" fill="#525f79"/>
  <g stroke="#6d7b96" stroke-width="2.2" stroke-linecap="round">
    <line x1="6" y1="-2" x2="6" y2="2"/><line x1="15" y1="-2" x2="15" y2="2"/>
    <line x1="24" y1="-2" x2="24" y2="2"/><line x1="33" y1="-2" x2="33" y2="2"/>
    <line x1="42" y1="-2" x2="42" y2="2"/><line x1="51" y1="-2" x2="51" y2="2"/>
  </g>
  <circle cx="0" cy="0" r="3" fill="#6d7b96"/>
</g>
<!-- Grate bars laid flat, seen edge-on across the near rim (the half still shut) -->
<g stroke="#525f79" stroke-width="2" stroke-linecap="round" opacity="0.85">
  <line x1="296" y1="196" x2="308" y2="214"/>
  <line x1="304" y1="199" x2="314" y2="216"/>
  <line x1="312" y1="203" x2="320" y2="219"/>
</g>
<!-- One thin cold gleam off the wet grate -->
<line x1="188" y1="190" x2="215" y2="135" stroke="#5fa0b8" stroke-width="0.6" opacity="0.2"/>
<!-- Two lanterns, low and grey. Nothing warm above ground. -->
<rect x="118" y="128" width="4" height="44" fill="#4a5770"/>
<rect x="112" y="118" width="16" height="13" rx="2" fill="#525f79"/>
<rect x="114" y="120" width="12" height="9" rx="1" fill="#3d5a75" opacity="0.5"/>
<rect x="378" y="128" width="4" height="44" fill="#4a5770"/>
<rect x="372" y="118" width="16" height="13" rx="2" fill="#525f79"/>
<rect x="374" y="120" width="12" height="9" rx="1" fill="#3d5a75" opacity="0.45"/>
</svg>`;

// Scene 1: The listening post, establishing. Canon from behind, one big screen
// of grey-green water with the wreck lamp in it, nine small screens each on a
// different horizon, calculator and index cards on the table, second chair empty.
STORY_SCENES['hidden_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="60%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <linearGradient id="hidBig1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3f49"/><stop offset="45%" stop-color="#16323a"/><stop offset="100%" stop-color="#0e2028"/>
  </linearGradient>
  <radialGradient id="hidWash1" cx="42%" cy="34%" r="62%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.2"/><stop offset="55%" stop-color="#3d5a75" stop-opacity="0.06"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLamp1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.85"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.28"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.16"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClip1"><rect x="150" y="24" width="200" height="118" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom1)"/>
<rect width="500" height="260" fill="url(#hidWash1)"/>
<!-- Back wall, lit by the screens. Gives the table a plane to sit in front of. -->
<rect x="0" y="0" width="500" height="196" fill="#152232"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash1)"/>
<!-- Floor, lighter than the wall where the screenlight lands on it -->
<rect x="0" y="196" width="500" height="64" fill="#0e1726"/>
<ellipse cx="250" cy="214" rx="210" ry="34" fill="#16323a" opacity="0.4"/>
<ellipse cx="250" cy="210" rx="140" ry="22" fill="#5fa0b8" opacity="0.09"/>
<!-- BACK WALL: the nine small screens, three left, three right, three above.
     Each carries a different horizon height so they read as nine PLACES. -->
<!-- left column -->
<g>
  <rect x="24" y="30" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="52" width="48" height="10" fill="#16323a"/><rect x="26" y="50" width="48" height="1" fill="#3d5a75" opacity="0.5"/>
  <rect x="38" y="41" width="3" height="11" fill="#0b1a20"/><rect x="52" y="44" width="14" height="8" fill="#0b1a20"/>
  <rect x="24" y="70" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="84" width="48" height="18" fill="#16323a"/><rect x="26" y="83" width="48" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="30" y="74" width="18" height="10" fill="#0b1a20"/><rect x="49" y="77" width="6" height="7" fill="#0b1a20"/>
  <rect x="24" y="110" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="130" width="48" height="12" fill="#16323a"/><rect x="26" y="129" width="48" height="1" fill="#3d5a75" opacity="0.4"/>
  <path d="M26,129 L40,116 L54,129Z" fill="#0b1a20"/>
</g>
<!-- right column -->
<g>
  <rect x="424" y="30" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="47" width="48" height="15" fill="#16323a"/><rect x="426" y="46" width="48" height="1" fill="#3d5a75" opacity="0.5"/>
  <rect x="432" y="36" width="10" height="11" fill="#0b1a20"/><rect x="448" y="39" width="4" height="8" fill="#0b1a20"/>
  <rect x="424" y="70" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="90" width="48" height="12" fill="#16323a"/><rect x="426" y="89" width="48" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="438" y="79" width="20" height="10" rx="1" fill="#0b1a20"/>
  <rect x="424" y="110" width="52" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="126" width="48" height="16" fill="#16323a"/><rect x="426" y="125" width="48" height="1" fill="#3d5a75" opacity="0.4"/>
  <path d="M426,125 Q440,116 458,125Z" fill="#0b1a20"/>
</g>
<!-- top row, three across above the big screen -->
<g>
  <rect x="152" y="0" width="60" height="20" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="154" y="12" width="56" height="6" fill="#16323a"/><rect x="154" y="11" width="56" height="1" fill="#3d5a75" opacity="0.4"/>
  <rect x="220" y="0" width="60" height="20" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="222" y="9" width="56" height="9" fill="#16323a"/><rect x="222" y="8" width="56" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="288" y="0" width="60" height="20" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="290" y="14" width="56" height="4" fill="#16323a"/><rect x="290" y="13" width="56" height="1" fill="#3d5a75" opacity="0.35"/>
</g>
<!-- THE BIG SCREEN: water, and the wreck lamp -->
<rect x="146" y="20" width="208" height="126" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip1)">
  <rect x="150" y="24" width="200" height="118" fill="url(#hidBig1)"/>
  <!-- slow water bands, deep and near-still -->
  <path d="M150,60 Q200,55 250,60 Q300,65 350,60 L350,72 Q300,77 250,72 Q200,67 150,72Z" fill="#1d3f49" opacity="0.5">
    <animate attributeName="d" values="M150,60 Q200,55 250,60 Q300,65 350,60 L350,72 Q300,77 250,72 Q200,67 150,72Z;M150,63 Q200,58 250,63 Q300,68 350,63 L350,75 Q300,80 250,75 Q200,70 150,75Z;M150,60 Q200,55 250,60 Q300,65 350,60 L350,72 Q300,77 250,72 Q200,67 150,72Z" dur="9s" repeatCount="indefinite"/>
  </path>
  <path d="M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z" fill="#0e2028" opacity="0.55">
    <animate attributeName="d" values="M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z;M150,99 Q205,94 250,99 Q295,104 350,99 L350,113 L150,113Z;M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z" dur="11s" repeatCount="indefinite"/>
  </path>
  <!-- the wreck: a shape that used to be a hull -->
  <path d="M186,132 Q206,110 246,106 L300,110 Q318,116 314,132 Z" fill="#08121a" opacity="0.9"/>
  <path d="M198,124 Q222,113 250,112 L292,116" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.5"/>
  <path d="M246,106 L242,88 L252,86 L254,106" fill="#08121a" opacity="0.8"/>
  <!-- THE LAMP. The only warm thing in the room, and it is on a screen. -->
  <circle cx="272" cy="118" r="26" fill="url(#hidLamp1)" opacity="0.5">
    <animate attributeName="opacity" values="0.34;0.56;0.34" dur="7s" repeatCount="indefinite"/>
  </circle>
  <circle cx="272" cy="118" r="2.6" fill="#F2C14E">
    <animate attributeName="opacity" values="0.72;1;0.72" dur="7s" repeatCount="indefinite"/>
  </circle>
  <!-- scanline crawling down the big screen -->
  <rect x="150" y="24" width="200" height="16" fill="url(#hidScan1)">
    <animate attributeName="y" values="10;146" dur="6s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- TABLE -->
<rect x="86" y="196" width="328" height="8" rx="2" fill="#3d4a60"/>
<rect x="86" y="196" width="328" height="2.5" rx="1" fill="#5d6b85" opacity="0.7"/>
<rect x="104" y="204" width="7" height="52" fill="#2b3548"/>
<rect x="389" y="204" width="7" height="52" fill="#2b3548"/>
<!-- Pocket calculator, solar strip worn pale -->
<g transform="translate(128,178)">
  <rect x="0" y="0" width="34" height="18" rx="2" fill="#46536b"/>
  <rect x="3" y="3" width="28" height="6" rx="1" fill="#16323a"/>
  <rect x="3" y="3" width="18" height="6" rx="1" fill="#2a3d3f" opacity="0.7"/>
  <g fill="#2c3648">
    <rect x="4" y="11" width="4" height="2.6" rx="0.6"/><rect x="10" y="11" width="4" height="2.6" rx="0.6"/>
    <rect x="16" y="11" width="4" height="2.6" rx="0.6"/><rect x="22" y="11" width="4" height="2.6" rx="0.6"/>
    <rect x="4" y="15" width="4" height="2.6" rx="0.6"/><rect x="10" y="15" width="4" height="2.6" rx="0.6"/>
    <rect x="16" y="15" width="4" height="2.6" rx="0.6"/><rect x="22" y="15" width="4" height="2.6" rx="0.6"/>
  </g>
</g>
<!-- Stack of index cards, written on both sides -->
<g transform="translate(304,176)">
  <rect x="0" y="14" width="52" height="6" rx="1" fill="#4a5162"/>
  <rect x="1" y="9" width="52" height="6" rx="1" fill="#565e70"/>
  <rect x="0" y="4" width="52" height="6" rx="1" fill="#626a7e"/>
  <rect x="2" y="0" width="52" height="6" rx="1" fill="#6e7688"/>
  <line x1="6" y1="2" x2="30" y2="2" stroke="#525f79" stroke-width="0.5" opacity="0.7"/>
  <line x1="6" y1="4" x2="44" y2="4" stroke="#525f79" stroke-width="0.5" opacity="0.6"/>
</g>
<!-- The pencil. Amber. Laid parallel to the edge of the table. -->
<rect x="228" y="188" width="46" height="2.6" rx="1.3" fill="#F2C14E" opacity="0.85"/>
<rect x="272" y="188" width="4" height="2.6" rx="1" fill="#525f79"/>
<!-- CANON, from behind. A back, a head, a chair. -->
<g transform="translate(200,148)">
  <!-- chair back -->
  <rect x="-30" y="26" width="60" height="60" rx="4" fill="#333e52"/>
  <rect x="-30" y="26" width="60" height="4" rx="2" fill="#46536b"/>
  <!-- shoulders and back, tired: the line falls forward -->
  <path d="M-26,88 Q-24,44 -12,30 Q0,24 12,30 Q24,44 26,88 Z" fill="#05070e"/>
  <path d="M-20,42 Q0,34 20,42" fill="none" stroke="#1a2334" stroke-width="1" opacity="0.7"/>
  <!-- head, forward of vertical -->
  <circle cx="1" cy="12" r="14" fill="#05070e"/>
  <path d="M-13,10 Q-9,-4 1,-2 Q11,-4 15,10" fill="#0b0f19"/>
  <!-- neck -->
  <rect x="-5" y="22" width="12" height="8" fill="#05070e"/>
  <!-- cold rim light off one shoulder, from the screens -->
  <path d="M-25,80 Q-23,46 -12,32" fill="none" stroke="#5fa0b8" stroke-width="4" opacity="0.22"/>
  <path d="M-25,80 Q-23,46 -12,32" fill="none" stroke="#9fd4e4" stroke-width="1.5" opacity="0.75"/>
  <path d="M-13,2 Q-15,11 -12,18" fill="none" stroke="#9fd4e4" stroke-width="1.4" opacity="0.6"/>
</g>
<!-- THE SECOND CHAIR. Empty, angled toward him. It has been there a while. -->
<g transform="translate(332,160) rotate(-14)">
  <rect x="-24" y="12" width="48" height="52" rx="4" fill="#2e3849"/>
  <rect x="-24" y="12" width="48" height="3.5" rx="1.5" fill="#3d4a60"/>
  <rect x="-20" y="20" width="40" height="2" rx="1" fill="#3d4a60" opacity="0.6"/>
  <rect x="-20" y="27" width="40" height="2" rx="1" fill="#3d4a60" opacity="0.5"/>
  <rect x="-22" y="62" width="5" height="34" fill="#28313f"/>
  <rect x="17" y="62" width="5" height="34" fill="#28313f"/>
</g>
<!-- Floor, and the cold spill of screenlight across it -->
<rect x="0" y="252" width="500" height="8" fill="#0a121e" opacity="0.7"/>
<ellipse cx="250" cy="248" rx="170" ry="14" fill="#5fa0b8" opacity="0.08"/>
</svg>`;

// Scene 2: "My name is Canon." He sets the pencil down flat. Closer on the
// table: the pencil, the cards, his hand still near them, the second chair
// large in frame because the line is about the chair.
STORY_SCENES['hidden_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="55%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidWash2" cx="30%" cy="20%" r="70%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.17"/><stop offset="60%" stop-color="#3d5a75" stop-opacity="0.05"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidBig2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0e2028"/>
  </linearGradient>
  <radialGradient id="hidLamp2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.8"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.22"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.14"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClip2"><rect x="42" y="16" width="150" height="88" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom2)"/>
<rect width="500" height="260" fill="url(#hidWash2)"/>
<rect x="0" y="0" width="500" height="164" fill="#152232"/>
<rect x="0" y="0" width="500" height="164" fill="url(#hidWash2)"/>
<!-- Big screen pushed left and small; the table is the subject now -->
<rect x="38" y="12" width="158" height="96" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip2)">
  <rect x="42" y="16" width="150" height="88" fill="url(#hidBig2)"/>
  <path d="M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z" fill="#1d3f49" opacity="0.45">
    <animate attributeName="d" values="M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z;M42,53 Q80,49 117,53 Q154,57 192,53 L192,63 Q154,67 117,63 Q80,59 42,63Z;M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z" dur="10s" repeatCount="indefinite"/>
  </path>
  <path d="M70,100 Q86,84 118,81 L156,84 Q168,89 165,100 Z" fill="#08121a" opacity="0.9"/>
  <circle cx="140" cy="88" r="19" fill="url(#hidLamp2)" opacity="0.46">
    <animate attributeName="opacity" values="0.3;0.52;0.3" dur="7s" repeatCount="indefinite"/>
  </circle>
  <circle cx="140" cy="88" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.7;1;0.7" dur="7s" repeatCount="indefinite"/></circle>
  <rect x="42" y="16" width="150" height="14" fill="url(#hidScan2)">
    <animate attributeName="y" values="4;108" dur="6.5s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- Three small screens, right edge, different horizons -->
<rect x="416" y="14" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="34" width="52" height="12" fill="#16323a"/><rect x="418" y="33" width="52" height="1" fill="#3d5a75" opacity="0.5"/>
<rect x="416" y="54" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="68" width="52" height="18" fill="#16323a"/><rect x="418" y="67" width="52" height="1" fill="#3d5a75" opacity="0.45"/>
<rect x="416" y="94" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="115" width="52" height="11" fill="#16323a"/><rect x="418" y="114" width="52" height="1" fill="#3d5a75" opacity="0.4"/>
<!-- TABLE, large, angled front-on -->
<rect x="40" y="164" width="420" height="10" rx="3" fill="#3d4a60"/>
<rect x="40" y="164" width="420" height="3" rx="1.5" fill="#66748f" opacity="0.75"/>
<rect x="40" y="174" width="420" height="86" fill="#05070e"/>
<!-- Cards, closer -->
<g transform="translate(268,132)">
  <rect x="0" y="22" width="78" height="9" rx="1.5" fill="#454d5f"/>
  <rect x="2" y="14" width="78" height="9" rx="1.5" fill="#525a6d"/>
  <rect x="0" y="7" width="78" height="9" rx="1.5" fill="#5e677b"/>
  <rect x="3" y="0" width="78" height="9" rx="1.5" fill="#6c7488"/>
  <g stroke="#4a5770" stroke-width="0.6" opacity="0.7">
    <line x1="9" y1="2.6" x2="52" y2="2.6"/><line x1="9" y1="5" x2="70" y2="5"/><line x1="9" y1="7" x2="40" y2="7"/>
  </g>
  <!-- one card just marked, half out of the stack -->
  <rect x="-16" y="24" width="46" height="9" rx="1.5" fill="#7a8296" transform="rotate(-4,7,28)"/>
  <line x1="-9" y1="27" x2="18" y2="26" stroke="#4a5770" stroke-width="0.6" opacity="0.7" transform="rotate(-4,7,28)"/>
</g>
<!-- Calculator, worn solar strip -->
<g transform="translate(88,138)">
  <rect x="0" y="0" width="46" height="24" rx="2.5" fill="#46536b"/>
  <rect x="4" y="4" width="38" height="8" rx="1" fill="#16323a"/>
  <rect x="4" y="4" width="24" height="8" rx="1" fill="#2f4245" opacity="0.75"/>
  <g fill="#2c3648">
    <rect x="5" y="15" width="6" height="3.4" rx="0.8"/><rect x="14" y="15" width="6" height="3.4" rx="0.8"/>
    <rect x="23" y="15" width="6" height="3.4" rx="0.8"/><rect x="32" y="15" width="6" height="3.4" rx="0.8"/>
    <rect x="5" y="20" width="6" height="3.4" rx="0.8"/><rect x="14" y="20" width="6" height="3.4" rx="0.8"/>
    <rect x="23" y="20" width="6" height="3.4" rx="0.8"/><rect x="32" y="20" width="6" height="3.4" rx="0.8"/>
  </g>
</g>
<!-- THE PENCIL, just set down. Parallel to the table edge, and it is exactly parallel. -->
<rect x="176" y="152" width="76" height="3.6" rx="1.8" fill="#F2C14E" opacity="0.9"/>
<rect x="248" y="152" width="6" height="3.6" rx="1.2" fill="#525f79"/>
<polygon points="176,152 170,153.8 176,155.6" fill="#6d7b96"/>
<!-- faint amber bloom under it, the only warm thing in the room's own air -->
<ellipse cx="212" cy="157" rx="46" ry="4" fill="#F2C14E" opacity="0.07"/>
<!-- Canon: shoulder and back of head, entering frame at the left, cropped -->
<g transform="translate(58,168)">
  <path d="M-60,92 Q-52,26 -10,10 Q10,6 24,20 Q40,44 44,92 Z" fill="#05070e"/>
  <circle cx="-2" cy="-4" r="18" fill="#05070e"/>
  <path d="M-20,-6 Q-14,-24 -2,-22 Q10,-24 16,-6" fill="#0b0f19"/>
  <path d="M-56,86 Q-48,32 -14,14" fill="none" stroke="#5fa0b8" stroke-width="5" opacity="0.2"/>
  <path d="M-56,86 Q-48,32 -14,14" fill="none" stroke="#9fd4e4" stroke-width="1.8" opacity="0.78"/>
  <!-- his hand, resting where the pencil was put down -->
  <ellipse cx="106" cy="-8" rx="16" ry="7" fill="#28313f" transform="rotate(-8,106,-8)"/>
  <path d="M22,26 Q66,10 96,-8" fill="none" stroke="#05070e" stroke-width="13" stroke-linecap="round"/>
</g>
<!-- THE SECOND CHAIR. Big in frame. It has been there a while. -->
<g transform="translate(390,150) rotate(-16)">
  <rect x="-34" y="0" width="68" height="70" rx="5" fill="#2e3849"/>
  <rect x="-34" y="0" width="68" height="4.5" rx="2" fill="#46536b"/>
  <rect x="-28" y="12" width="56" height="2.5" rx="1" fill="#3d4a60" opacity="0.6"/>
  <rect x="-28" y="22" width="56" height="2.5" rx="1" fill="#3d4a60" opacity="0.5"/>
  <rect x="-28" y="32" width="56" height="2.5" rx="1" fill="#3d4a60" opacity="0.4"/>
  <rect x="-31" y="68" width="6" height="44" fill="#28313f"/>
  <rect x="25" y="68" width="6" height="44" fill="#28313f"/>
  <!-- dust settled on the seat rail, the "a while" of it -->
  <rect x="-30" y="66" width="60" height="1.2" fill="#3d5a75" opacity="0.18"/>
</g>
<rect x="0" y="253" width="500" height="7" fill="#0a121e" opacity="0.7"/>
</svg>`;

// Scene 3: "That is my brother." Two fingers tipped at the big screen. The
// screen fills the frame; Canon is a silhouette at the bottom edge, still from
// behind. The lamp is the subject.
STORY_SCENES['hidden_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="100%" stop-color="#0a1224"/>
  </linearGradient>
  <linearGradient id="hidBig3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#26505c"/><stop offset="40%" stop-color="#16323a"/><stop offset="100%" stop-color="#0b1a22"/>
  </linearGradient>
  <radialGradient id="hidLamp3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.9"/><stop offset="30%" stop-color="#F2C14E" stop-opacity="0.3"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.18"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="hidVig3" cx="50%" cy="45%" r="72%">
    <stop offset="60%" stop-color="#05080f" stop-opacity="0"/><stop offset="100%" stop-color="#05080f" stop-opacity="0.65"/>
  </radialGradient>
  <clipPath id="hidBigClip3"><rect x="34" y="12" width="432" height="196" rx="4"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom3)"/>
<rect x="30" y="8" width="440" height="204" rx="6" fill="#1e2637" stroke="#4a5770" stroke-width="3"/>
<g clip-path="url(#hidBigClip3)">
  <rect x="34" y="12" width="432" height="196" fill="url(#hidBig3)"/>
  <!-- suspended silt, drifting up very slowly -->
  <circle cx="90" cy="180" r="1" fill="#5fa0b8" opacity="0.18"><animate attributeName="cy" values="180;40" dur="22s" repeatCount="indefinite"/></circle>
  <circle cx="180" cy="200" r="1.4" fill="#5fa0b8" opacity="0.14"><animate attributeName="cy" values="200;30" dur="27s" repeatCount="indefinite" begin="4s"/></circle>
  <circle cx="330" cy="190" r="1" fill="#5fa0b8" opacity="0.16"><animate attributeName="cy" values="190;36" dur="24s" repeatCount="indefinite" begin="9s"/></circle>
  <circle cx="410" cy="205" r="1.2" fill="#5fa0b8" opacity="0.12"><animate attributeName="cy" values="205;44" dur="30s" repeatCount="indefinite" begin="14s"/></circle>
  <!-- water strata -->
  <path d="M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z" fill="#1d3f49" opacity="0.42">
    <animate attributeName="d" values="M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z;M34,70 Q140,62 250,70 Q360,78 466,70 L466,88 Q360,96 250,88 Q140,80 34,88Z;M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z" dur="12s" repeatCount="indefinite"/>
  </path>
  <path d="M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z" fill="#12262e" opacity="0.5">
    <animate attributeName="d" values="M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z;M34,122 Q150,115 250,122 Q350,129 466,122 L466,140 L34,140Z;M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z" dur="14s" repeatCount="indefinite"/>
  </path>
  <!-- THE WRECK: a shape that used to be a hull -->
  <path d="M108,208 Q124,168 172,152 L318,140 Q384,146 396,178 L400,208 Z" fill="#07121a"/>
  <path d="M132,190 Q182,166 240,160 L340,158" fill="none" stroke="#1d3f49" stroke-width="1.4" opacity="0.45"/>
  <path d="M150,204 Q206,186 268,180 L356,180" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.3"/>
  <!-- broken mast -->
  <path d="M256,142 L246,84 L262,80 L272,142 Z" fill="#07121a"/>
  <path d="M262,80 Q284,74 300,82" fill="none" stroke="#0b1a22" stroke-width="3" stroke-linecap="round"/>
  <!-- open deck rail -->
  <g stroke="#0b1a22" stroke-width="2.4" opacity="0.9">
    <line x1="188" y1="158" x2="188" y2="146"/><line x1="212" y1="154" x2="212" y2="142"/>
    <line x1="236" y1="150" x2="236" y2="139"/><line x1="300" y1="146" x2="300" y2="136"/>
    <line x1="324" y1="146" x2="324" y2="137"/>
  </g>
  <line x1="184" y1="145" x2="330" y2="135" stroke="#0b1a22" stroke-width="1.6" opacity="0.8"/>
  <!-- THE LAMP. A long way down and a mile out. -->
  <circle cx="344" cy="164" r="52" fill="url(#hidLamp3)" opacity="0.42">
    <animate attributeName="opacity" values="0.26;0.5;0.26" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="344" cy="164" r="16" fill="url(#hidLamp3)" opacity="0.6">
    <animate attributeName="opacity" values="0.44;0.72;0.44" dur="8s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="344" cy="164" rx="3.4" ry="4.4" fill="#F2C14E">
    <animate attributeName="opacity" values="0.78;1;0.78" dur="8s" repeatCount="indefinite"/>
  </ellipse>
  <rect x="342.4" y="168" width="3.2" height="8" fill="#3a3a2a" opacity="0.7"/>
  <!-- scanline -->
  <rect x="34" y="12" width="432" height="26" fill="url(#hidScan3)">
    <animate attributeName="y" values="-6;212" dur="7s" repeatCount="indefinite"/>
  </rect>
  <!-- screen curvature vignette -->
  <rect x="34" y="12" width="432" height="196" fill="url(#hidVig3)"/>
</g>
<!-- Canon, silhouette at the bottom edge, back to us, two fingers tipped up -->
<g transform="translate(140,214)">
  <path d="M-52,46 Q-46,10 -8,0 Q10,-2 22,10 Q36,26 40,46 Z" fill="#03050a"/>
  <circle cx="0" cy="-16" r="17" fill="#03050a"/>
  <path d="M-17,-18 Q-11,-36 0,-34 Q11,-36 17,-18" fill="#080d18"/>
  <!-- arm up, two fingers at the screen -->
  <path d="M26,14 Q52,-4 70,-26" fill="none" stroke="#03050a" stroke-width="11" stroke-linecap="round"/>
  <path d="M70,-26 L78,-38" stroke="#03050a" stroke-width="4" stroke-linecap="round"/>
  <path d="M73,-24 L82,-35" stroke="#03050a" stroke-width="4" stroke-linecap="round"/>
</g>
<!-- second chair, edge of frame, still empty -->
<g transform="translate(452,206) rotate(-12)">
  <rect x="-22" y="0" width="44" height="46" rx="4" fill="#0e1521"/>
  <rect x="-22" y="0" width="44" height="3" rx="1.5" fill="#39465c"/>
</g>
</svg>`;

// Scene 4: The choice. "Ask him where home is." He turns a card over without
// looking at it. Nine small screens dominant behind him — eight island, one
// brother, and the ratio is the point of the shot.
STORY_SCENES['hidden_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="60%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidWash4" cx="50%" cy="30%" r="66%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.18"/><stop offset="60%" stop-color="#3d5a75" stop-opacity="0.05"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidBig4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0e2028"/>
  </linearGradient>
  <radialGradient id="hidLamp4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.85"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.24"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.15"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClip4"><rect x="186" y="18" width="128" height="76" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom4)"/>
<rect width="500" height="260" fill="url(#hidWash4)"/>
<rect x="0" y="0" width="500" height="196" fill="#152232"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash4)"/>
<rect x="0" y="196" width="500" height="64" fill="#0e1726"/>
<ellipse cx="250" cy="214" rx="200" ry="32" fill="#16323a" opacity="0.38"/>
<!-- NINE SMALL SCREENS in a 3x3 ring around the big one. Nine places.
     Each has its own horizon height and its own furniture. -->
<!-- row 1: pier / [BIG] / cafe door -->
<g>
  <rect x="24" y="18" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="46" width="68" height="16" fill="#16323a"/><rect x="26" y="45" width="68" height="1" fill="#3d5a75" opacity="0.55"/>
  <rect x="34" y="34" width="46" height="3" fill="#0b1a20"/>
  <rect x="40" y="37" width="2.5" height="9" fill="#0b1a20"/><rect x="58" y="37" width="2.5" height="9" fill="#0b1a20"/><rect x="74" y="37" width="2.5" height="9" fill="#0b1a20"/>
  <rect x="404" y="18" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="406" y="52" width="68" height="10" fill="#16323a"/><rect x="406" y="51" width="68" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="424" y="28" width="24" height="24" fill="#0b1a20"/>
  <rect x="428" y="32" width="16" height="12" fill="#16323a" opacity="0.55"/>
  <rect x="444" y="39" width="2" height="4" fill="#3d5a75" opacity="0.4"/>
</g>
<!-- row 2: shore / [BIG] / path to the peak -->
<g>
  <rect x="24" y="72" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="94" width="68" height="22" fill="#16323a"/><rect x="26" y="93" width="68" height="1" fill="#3d5a75" opacity="0.5"/>
  <path d="M26,93 Q60,88 94,93 L94,88 Q60,84 26,88Z" fill="#0b1a20"/>
  <rect x="404" y="72" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="406" y="100" width="68" height="16" fill="#16323a"/><rect x="406" y="99" width="68" height="1" fill="#3d5a75" opacity="0.45"/>
  <path d="M406,99 L432,76 L452,99Z" fill="#0b1a20"/>
  <path d="M440,116 Q442,106 438,99" fill="none" stroke="#3d5a75" stroke-width="1" opacity="0.35"/>
</g>
<!-- row 3: town square / cove / forest -->
<g>
  <rect x="24" y="126" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="26" y="156" width="68" height="14" fill="#16323a"/><rect x="26" y="155" width="68" height="1" fill="#3d5a75" opacity="0.5"/>
  <ellipse cx="60" cy="152" rx="14" ry="4" fill="#0b1a20"/><rect x="58" y="138" width="4" height="14" fill="#0b1a20"/>
  <rect x="404" y="126" width="72" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="406" y="148" width="68" height="22" fill="#16323a"/><rect x="406" y="147" width="68" height="1" fill="#3d5a75" opacity="0.42"/>
  <path d="M412,147 L420,130 L428,147Z" fill="#0b1a20"/><path d="M436,147 L446,126 L456,147Z" fill="#0b1a20"/>
  <rect x="186" y="102" width="128" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="188" y="122" width="124" height="12" fill="#16323a"/><rect x="188" y="121" width="124" height="1" fill="#3d5a75" opacity="0.4"/>
  <rect x="216" y="110" width="18" height="11" fill="#0b1a20"/><rect x="262" y="113" width="26" height="8" fill="#0b1a20"/>
</g>
<!-- THE BIG SCREEN. One of nine is his brother. -->
<rect x="182" y="14" width="136" height="84" rx="3" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip4)">
  <rect x="186" y="18" width="128" height="76" fill="url(#hidBig4)"/>
  <path d="M186,44 Q218,40 250,44 Q282,48 314,44 L314,54 Q282,58 250,54 Q218,50 186,54Z" fill="#1d3f49" opacity="0.42">
    <animate attributeName="d" values="M186,44 Q218,40 250,44 Q282,48 314,44 L314,54 Q282,58 250,54 Q218,50 186,54Z;M186,47 Q218,43 250,47 Q282,51 314,47 L314,57 Q282,61 250,57 Q218,53 186,57Z;M186,44 Q218,40 250,44 Q282,48 314,44 L314,54 Q282,58 250,54 Q218,50 186,54Z" dur="10s" repeatCount="indefinite"/>
  </path>
  <path d="M206,92 Q220,76 250,73 L288,76 Q300,81 297,92 Z" fill="#08121a" opacity="0.92"/>
  <circle cx="274" cy="80" r="17" fill="url(#hidLamp4)" opacity="0.46">
    <animate attributeName="opacity" values="0.3;0.54;0.3" dur="7.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="274" cy="80" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.72;1;0.72" dur="7.5s" repeatCount="indefinite"/></circle>
  <rect x="186" y="18" width="128" height="14" fill="url(#hidScan4)">
    <animate attributeName="y" values="6;98" dur="6s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- table -->
<rect x="96" y="196" width="308" height="9" rx="2.5" fill="#3d4a60"/>
<rect x="96" y="196" width="308" height="2.6" rx="1.3" fill="#5d6b85" opacity="0.7"/>
<rect x="112" y="205" width="7" height="55" fill="#2b3548"/>
<rect x="382" y="205" width="7" height="55" fill="#2b3548"/>
<!-- the pencil, parallel -->
<rect x="146" y="188" width="48" height="2.8" rx="1.4" fill="#F2C14E" opacity="0.85"/>
<rect x="192" y="188" width="4.5" height="2.8" rx="1" fill="#525f79"/>
<!-- cards, and one being turned over WITHOUT being looked at -->
<g transform="translate(320,178)">
  <rect x="0" y="12" width="54" height="7" rx="1.2" fill="#4a5162"/>
  <rect x="1" y="5" width="54" height="7" rx="1.2" fill="#5a6275"/>
  <rect x="0" y="-1" width="54" height="7" rx="1.2" fill="#687084"/>
</g>
<!-- the turning card: mid-flip, blank face up, a slow slight rock -->
<g transform="translate(288,180)">
  <animateTransform attributeName="transform" type="rotate" values="-6;-2;-6" dur="5s" repeatCount="indefinite" additive="sum"/>
  <rect x="-24" y="-3" width="46" height="7" rx="1.2" fill="#7a8296"/>
  <rect x="-24" y="-3" width="46" height="2" rx="1" fill="#8e96a8" opacity="0.6"/>
</g>
<!-- calculator -->
<g transform="translate(128,180)">
  <rect x="0" y="0" width="34" height="17" rx="2" fill="#46536b"/>
  <rect x="3" y="3" width="28" height="5.6" rx="1" fill="#16323a"/>
  <rect x="3" y="3" width="17" height="5.6" rx="1" fill="#2f4245" opacity="0.75"/>
</g>
<!-- CANON from behind, centre, low. Head slightly down. -->
<g transform="translate(238,150)">
  <rect x="-34" y="30" width="68" height="66" rx="4" fill="#333e52"/>
  <rect x="-34" y="30" width="68" height="4" rx="2" fill="#46536b"/>
  <path d="M-30,96 Q-27,46 -13,32 Q0,25 13,32 Q27,46 30,96 Z" fill="#05070e"/>
  <circle cx="1" cy="13" r="15" fill="#05070e"/>
  <path d="M-14,11 Q-10,-5 1,-3 Q12,-5 16,11" fill="#0b0f19"/>
  <rect x="-6" y="24" width="13" height="9" fill="#05070e"/>
  <path d="M-29,88 Q-26,48 -13,34" fill="none" stroke="#5fa0b8" stroke-width="4.4" opacity="0.22"/>
  <path d="M-29,88 Q-26,48 -13,34" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.76"/>
  <!-- right arm out toward the cards, not looking -->
  <path d="M28,52 Q56,44 76,32" fill="none" stroke="#05070e" stroke-width="12" stroke-linecap="round"/>
</g>
<!-- second chair, angled toward him -->
<g transform="translate(360,164) rotate(-14)">
  <rect x="-24" y="10" width="48" height="52" rx="4" fill="#2e3849"/>
  <rect x="-24" y="10" width="48" height="3.5" rx="1.5" fill="#46536b"/>
  <rect x="-22" y="60" width="5" height="36" fill="#28313f"/>
  <rect x="17" y="60" width="5" height="36" fill="#28313f"/>
</g>
<rect x="0" y="253" width="500" height="7" fill="#0a121e" opacity="0.7"/>
</svg>`;

// Scene 5: He finally turns. He is younger than the back of his head suggested
// and more tired than the front of it admits — so we STILL do not see his face:
// he has turned in profile-away, three-quarters back, chin toward the second
// chair. The turn is legible; the face is not there.
STORY_SCENES['hidden_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="55%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidWash5" cx="26%" cy="26%" r="72%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.2"/><stop offset="55%" stop-color="#3d5a75" stop-opacity="0.06"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidBig5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0e2028"/>
  </linearGradient>
  <radialGradient id="hidLamp5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.85"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.24"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.15"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClip5"><rect x="34" y="18" width="164" height="98" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom5)"/>
<rect width="500" height="260" fill="url(#hidWash5)"/>
<rect x="0" y="0" width="500" height="200" fill="#152232"/>
<rect x="0" y="0" width="500" height="200" fill="url(#hidWash5)"/>
<rect x="0" y="200" width="500" height="60" fill="#0e1726"/>
<!-- screenlight throw from the big screen at left, across the floor -->
<path d="M30,200 L202,200 L300,260 L0,260 Z" fill="#16323a" opacity="0.42"/>
<path d="M60,200 L180,200 L250,260 L40,260 Z" fill="#5fa0b8" opacity="0.07"/>
<!-- big screen, left, throwing the key light across his turned shoulder -->
<rect x="30" y="14" width="172" height="106" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip5)">
  <rect x="34" y="18" width="164" height="98" fill="url(#hidBig5)"/>
  <path d="M34,56 Q75,51 116,56 Q157,61 198,56 L198,68 Q157,73 116,68 Q75,63 34,68Z" fill="#1d3f49" opacity="0.42">
    <animate attributeName="d" values="M34,56 Q75,51 116,56 Q157,61 198,56 L198,68 Q157,73 116,68 Q75,63 34,68Z;M34,60 Q75,55 116,60 Q157,65 198,60 L198,72 Q157,77 116,72 Q75,67 34,72Z;M34,56 Q75,51 116,56 Q157,61 198,56 L198,68 Q157,73 116,68 Q75,63 34,68Z" dur="11s" repeatCount="indefinite"/>
  </path>
  <path d="M58,114 Q76,94 114,90 L162,94 Q176,100 172,114 Z" fill="#08121a" opacity="0.92"/>
  <circle cx="146" cy="98" r="22" fill="url(#hidLamp5)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.52;0.3" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="146" cy="98" r="2.2" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.74" dur="8s" repeatCount="indefinite"/></circle>
  <rect x="34" y="18" width="164" height="16" fill="url(#hidScan5)">
    <animate attributeName="y" values="4;120" dur="6.5s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- small screens, right stack -->
<rect x="418" y="16" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="38" width="52" height="10" fill="#16323a"/><rect x="420" y="37" width="52" height="1" fill="#3d5a75" opacity="0.5"/>
<rect x="418" y="56" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="72" width="52" height="16" fill="#16323a"/><rect x="420" y="71" width="52" height="1" fill="#3d5a75" opacity="0.44"/>
<rect x="418" y="96" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="118" width="52" height="10" fill="#16323a"/><rect x="420" y="117" width="52" height="1" fill="#3d5a75" opacity="0.4"/>
<!-- table -->
<rect x="70" y="200" width="360" height="9" rx="2.5" fill="#3d4a60"/>
<rect x="70" y="200" width="360" height="2.6" rx="1.3" fill="#5d6b85" opacity="0.7"/>
<rect x="88" y="209" width="7" height="51" fill="#2b3548"/>
<rect x="406" y="209" width="7" height="51" fill="#2b3548"/>
<rect x="126" y="192" width="48" height="2.8" rx="1.4" fill="#F2C14E" opacity="0.85"/>
<rect x="172" y="192" width="4.5" height="2.8" rx="1" fill="#525f79"/>
<g transform="translate(330,182)">
  <rect x="0" y="12" width="52" height="7" rx="1.2" fill="#4a5162"/>
  <rect x="1" y="5" width="52" height="7" rx="1.2" fill="#5a6275"/>
  <rect x="0" y="-1" width="52" height="7" rx="1.2" fill="#687084"/>
</g>
<!-- CANON, TURNED. Three-quarters away. We get the far side of a jaw and a
     temple in silhouette and nothing else. Still no face. -->
<g transform="translate(258,148)">
  <!-- chair, now seen from the side because he has swivelled in it -->
  <rect x="-6" y="34" width="58" height="62" rx="4" fill="#333e52"/>
  <rect x="-6" y="34" width="58" height="4" rx="2" fill="#46536b"/>
  <!-- torso turned: the shoulder line runs away from us -->
  <path d="M-34,96 Q-34,48 -20,34 Q-6,26 10,32 Q28,44 34,96 Z" fill="#05070e"/>
  <path d="M-22,44 Q-4,36 14,44" fill="none" stroke="#1a2334" stroke-width="1" opacity="0.6"/>
  <!-- head in three-quarter back view: skull, ear, jawline going away.
       The face plane points off-frame left and is not drawn. -->
  <g transform="translate(-8,10)">
    <circle cx="0" cy="0" r="15" fill="#05070e"/>
    <path d="M-15,-3 Q-10,-19 1,-17 Q13,-19 15,-2" fill="#0b0f19"/>
    <!-- jaw, receding, no features on it -->
    <path d="M-14,4 Q-16,14 -6,17 Q2,18 8,13" fill="#05070e"/>
    <!-- ear -->
    <ellipse cx="7" cy="2" rx="3" ry="4.6" fill="#0b0f19"/>
    <!-- cold rim off the temple, the tell that he has turned -->
    <path d="M-13,-6 Q-16,3 -12,10" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.8"/>
    <path d="M-11,12 Q-6,16 0,16" fill="none" stroke="#7fc4d8" stroke-width="1.2" opacity="0.55"/>
  </g>
  <rect x="-14" y="24" width="14" height="10" fill="#05070e"/>
  <path d="M-32,88 Q-32,50 -20,36" fill="none" stroke="#5fa0b8" stroke-width="4.4" opacity="0.22"/>
  <path d="M-32,88 Q-32,50 -20,36" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.76"/>
  <!-- forearm along the table, hand open, not holding anything -->
  <path d="M-30,54 Q-58,50 -84,52" fill="none" stroke="#05070e" stroke-width="12" stroke-linecap="round"/>
  <ellipse cx="-92" cy="52" rx="12" ry="6" fill="#28313f"/>
</g>
<!-- second chair, and he is turned toward it -->
<g transform="translate(392,168) rotate(-18)">
  <rect x="-24" y="8" width="48" height="52" rx="4" fill="#2e3849"/>
  <rect x="-24" y="8" width="48" height="3.5" rx="1.5" fill="#46536b"/>
  <rect x="-20" y="20" width="40" height="2.4" rx="1" fill="#3d4a60" opacity="0.55"/>
  <rect x="-22" y="58" width="5" height="36" fill="#28313f"/>
  <rect x="17" y="58" width="5" height="36" fill="#28313f"/>
</g>
<rect x="0" y="253" width="500" height="7" fill="#0a121e" opacity="0.7"/>
</svg>`;

// Scene 6: "We crossed together." Back to the establishing angle, but the big
// screen has gone to the memory of a boat: the same grey-green water with a
// small hull on the surface of it, high up in frame. He is watched, he says.
STORY_SCENES['hidden_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="58%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidWash6" cx="46%" cy="30%" r="66%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.19"/><stop offset="58%" stop-color="#3d5a75" stop-opacity="0.05"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidBig6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2b5866"/><stop offset="32%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0b1a22"/>
  </linearGradient>
  <radialGradient id="hidLamp6" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.8"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.2"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScan6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0"/><stop offset="50%" stop-color="#5fa0b8" stop-opacity="0.16"/><stop offset="100%" stop-color="#5fa0b8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClip6"><rect x="150" y="22" width="200" height="118" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoom6)"/>
<rect width="500" height="260" fill="url(#hidWash6)"/>
<rect x="0" y="0" width="500" height="196" fill="#152232"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash6)"/>
<rect x="0" y="196" width="500" height="64" fill="#0e1726"/>
<ellipse cx="250" cy="214" rx="210" ry="34" fill="#16323a" opacity="0.4"/>
<!-- nine smalls, ring, different horizons -->
<g>
  <rect x="22" y="26" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="24" y="47" width="50" height="11" fill="#16323a"/><rect x="24" y="46" width="50" height="1" fill="#3d5a75" opacity="0.5"/>
  <rect x="22" y="66" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="24" y="80" width="50" height="18" fill="#16323a"/><rect x="24" y="79" width="50" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="22" y="106" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="24" y="126" width="50" height="12" fill="#16323a"/><rect x="24" y="125" width="50" height="1" fill="#3d5a75" opacity="0.4"/>
  <rect x="424" y="26" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="43" width="50" height="15" fill="#16323a"/><rect x="426" y="42" width="50" height="1" fill="#3d5a75" opacity="0.5"/>
  <rect x="424" y="66" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="86" width="50" height="12" fill="#16323a"/><rect x="426" y="85" width="50" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="424" y="106" width="54" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="426" y="122" width="50" height="16" fill="#16323a"/><rect x="426" y="121" width="50" height="1" fill="#3d5a75" opacity="0.4"/>
  <rect x="152" y="0" width="60" height="18" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="154" y="11" width="56" height="5" fill="#16323a"/>
  <rect x="220" y="0" width="60" height="18" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="222" y="8" width="56" height="8" fill="#16323a"/>
  <rect x="288" y="0" width="60" height="18" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="290" y="13" width="56" height="3" fill="#16323a"/>
</g>
<!-- BIG SCREEN: the surface of the water, and a boat on it, small and high -->
<rect x="146" y="18" width="208" height="126" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip6)">
  <rect x="150" y="22" width="200" height="118" fill="url(#hidBig6)"/>
  <!-- surface line, high in frame: this is the way in, seen from below -->
  <path d="M150,46 Q200,42 250,46 Q300,50 350,46 L350,54 Q300,58 250,54 Q200,50 150,54Z" fill="#5fa0b8" opacity="0.18">
    <animate attributeName="d" values="M150,46 Q200,42 250,46 Q300,50 350,46 L350,54 Q300,58 250,54 Q200,50 150,54Z;M150,49 Q200,45 250,49 Q300,53 350,49 L350,57 Q300,61 250,57 Q200,53 150,57Z;M150,46 Q200,42 250,46 Q300,50 350,46 L350,54 Q300,58 250,54 Q200,50 150,54Z" dur="9s" repeatCount="indefinite"/>
  </path>
  <!-- the boat, tiny, a hull and a mast, twelve years ago -->
  <g transform="translate(244,42)">
    <animateTransform attributeName="transform" type="translate" values="244,42;244,44;244,42" dur="8s" repeatCount="indefinite"/>
    <path d="M-14,0 Q-11,4 -4,5 L8,5 Q14,4 15,0 Z" fill="#0b1a22"/>
    <rect x="-1" y="-14" width="1.6" height="14" fill="#0b1a22"/>
    <path d="M0.6,-14 L8,-8 L0.6,-6 Z" fill="#0b1a22" opacity="0.85"/>
  </g>
  <!-- the depth, and the wreck lamp far below it -->
  <path d="M164,140 Q182,120 216,116 L294,118 Q320,124 318,140 Z" fill="#08121a" opacity="0.9"/>
  <circle cx="278" cy="126" r="21" fill="url(#hidLamp6)" opacity="0.4">
    <animate attributeName="opacity" values="0.26;0.48;0.26" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="278" cy="126" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.7;1;0.7" dur="8s" repeatCount="indefinite"/></circle>
  <!-- a rope, doubled, trailing down from the boat: same cleat, both of them -->
  <path d="M240,47 Q236,78 244,112" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.35"/>
  <path d="M248,47 Q252,78 246,112" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.28"/>
  <rect x="150" y="22" width="200" height="16" fill="url(#hidScan6)">
    <animate attributeName="y" values="8;144" dur="6s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- table -->
<rect x="86" y="196" width="328" height="8" rx="2" fill="#3d4a60"/>
<rect x="86" y="196" width="328" height="2.5" rx="1" fill="#5d6b85" opacity="0.7"/>
<rect x="104" y="204" width="7" height="56" fill="#2b3548"/>
<rect x="389" y="204" width="7" height="56" fill="#2b3548"/>
<rect x="228" y="188" width="46" height="2.6" rx="1.3" fill="#F2C14E" opacity="0.85"/>
<rect x="272" y="188" width="4" height="2.6" rx="1" fill="#525f79"/>
<g transform="translate(304,176)">
  <rect x="0" y="14" width="52" height="6" rx="1" fill="#4a5162"/>
  <rect x="1" y="9" width="52" height="6" rx="1" fill="#565e70"/>
  <rect x="0" y="4" width="52" height="6" rx="1" fill="#626a7e"/>
  <rect x="2" y="0" width="52" height="6" rx="1" fill="#6e7688"/>
</g>
<g transform="translate(128,178)">
  <rect x="0" y="0" width="34" height="18" rx="2" fill="#46536b"/>
  <rect x="3" y="3" width="28" height="6" rx="1" fill="#16323a"/>
  <rect x="3" y="3" width="18" height="6" rx="1" fill="#2a3d3f" opacity="0.7"/>
</g>
<!-- Canon from behind -->
<g transform="translate(200,148)">
  <rect x="-30" y="26" width="60" height="60" rx="4" fill="#333e52"/>
  <rect x="-30" y="26" width="60" height="4" rx="2" fill="#46536b"/>
  <path d="M-26,88 Q-24,44 -12,30 Q0,24 12,30 Q24,44 26,88 Z" fill="#05070e"/>
  <circle cx="1" cy="12" r="14" fill="#05070e"/>
  <path d="M-13,10 Q-9,-4 1,-2 Q11,-4 15,10" fill="#0b0f19"/>
  <rect x="-5" y="22" width="12" height="8" fill="#05070e"/>
  <path d="M-25,80 Q-23,46 -12,32" fill="none" stroke="#5fa0b8" stroke-width="4" opacity="0.22"/>
  <path d="M-25,80 Q-23,46 -12,32" fill="none" stroke="#9fd4e4" stroke-width="1.5" opacity="0.75"/>
</g>
<!-- second chair -->
<g transform="translate(332,160) rotate(-14)">
  <rect x="-24" y="12" width="48" height="52" rx="4" fill="#2e3849"/>
  <rect x="-24" y="12" width="48" height="3.5" rx="1.5" fill="#46536b"/>
  <rect x="-22" y="62" width="5" height="34" fill="#28313f"/>
  <rect x="17" y="62" width="5" height="34" fill="#28313f"/>
</g>
<rect x="0" y="252" width="500" height="8" fill="#0a121e" opacity="0.7"/>
<ellipse cx="250" cy="248" rx="170" ry="14" fill="#5fa0b8" opacity="0.08"/>
</svg>`;

// Scene 7: He opens a drawer. The drawer of a man who makes things out of what
// washes up. Read at a glance: a COIL of line, three SPOONS, a JAR of screws,
// bent WIRE. Four shapes, well separated, on a lit drawer floor. Detail is
// subordinate to silhouette here — anything smaller than this is texture.
STORY_SCENES['hidden_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1b2c3e"/><stop offset="100%" stop-color="#0e1726"/>
  </linearGradient>
  <linearGradient id="hidDrawerFloor7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a5a52"/><stop offset="100%" stop-color="#2b3730"/>
  </linearGradient>
  <linearGradient id="hidSpoon7" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0%" stop-color="#dde5ee"/><stop offset="40%" stop-color="#a0abb9"/><stop offset="100%" stop-color="#4f5966"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoom7)"/>
<!-- table top above the drawer -->
<rect x="0" y="0" width="500" height="52" fill="#39465c"/>
<rect x="0" y="0" width="500" height="4" rx="2" fill="#66748f" opacity="0.6"/>
<rect x="0" y="48" width="500" height="6" fill="#22303f"/>
<!-- the pencil up on the table, still parallel -->
<rect x="330" y="22" width="76" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.9"/>
<rect x="404" y="22" width="6" height="4.4" rx="1.6" fill="#525f79"/>
<!-- THE DRAWER, pulled out. Its floor is LIT so the contents have a ground. -->
<rect x="48" y="54" width="404" height="172" rx="5" fill="#1b2534"/>
<rect x="56" y="62" width="388" height="158" rx="4" fill="url(#hidDrawerFloor7)"/>
<!-- drawer sides catching the screenlight -->
<rect x="48" y="54" width="404" height="9" rx="4" fill="#7d8b96" opacity="0.35"/>
<rect x="48" y="54" width="10" height="172" rx="4" fill="#7d8b96" opacity="0.2"/>
<!-- drawer front, below, with a pull -->
<rect x="40" y="226" width="420" height="30" rx="4" fill="#46536b"/>
<rect x="40" y="226" width="420" height="4" rx="2" fill="#7686a3" opacity="0.6"/>
<rect x="214" y="238" width="72" height="8" rx="4" fill="#22303f"/>

<!-- 1. THE COIL OF FISHING LINE. Big, obvious, unmistakably a coil. -->
<g transform="translate(122,116)">
  <ellipse cx="0" cy="4" rx="52" ry="34" fill="#1e2820" opacity="0.5"/>
  <g fill="none" stroke="#e8eef5" stroke-width="2.4" opacity="0.85">
    <ellipse cx="0" cy="0" rx="50" ry="32"/><ellipse cx="2" cy="2" rx="42" ry="26"/>
    <ellipse cx="-2" cy="-1" rx="34" ry="21"/><ellipse cx="1" cy="3" rx="26" ry="16"/>
    <ellipse cx="0" cy="0" rx="18" ry="11"/><ellipse cx="1" cy="1" rx="10" ry="6"/>
  </g>
  <!-- the loose end, running out of the coil -->
  <path d="M50,4 Q78,18 104,10 Q126,3 132,-14" fill="none" stroke="#e8eef5" stroke-width="2" opacity="0.7"/>
</g>

<!-- 2. THREE SPOONS. Clearly three, clearly spoons, clearly metal. -->
<g transform="translate(266,86) rotate(14)">
  <ellipse cx="0" cy="0" rx="20" ry="13" fill="#39434f"/>
  <ellipse cx="0" cy="-1" rx="19" ry="12" fill="url(#hidSpoon7)"/>
  <ellipse cx="1" cy="1" rx="13" ry="7.5" fill="#59636f" opacity="0.5"/>
  <path d="M-17,-6 Q-20,0 -16,7" fill="none" stroke="#ffffff" stroke-width="2.2" opacity="0.85" stroke-linecap="round"/>
  <rect x="17" y="-2.6" width="60" height="5.2" rx="2.6" fill="#8e99a7"/>
  <rect x="17" y="-2.6" width="60" height="1.8" rx="0.9" fill="#e8eef5" opacity="0.7"/>
</g>
<g transform="translate(272,128) rotate(-6)">
  <ellipse cx="0" cy="0" rx="19" ry="12.5" fill="#39434f"/>
  <ellipse cx="0" cy="-1" rx="18" ry="11.5" fill="url(#hidSpoon7)"/>
  <ellipse cx="1" cy="1" rx="12" ry="7" fill="#59636f" opacity="0.5"/>
  <path d="M-16,-6 Q-19,0 -15,6" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.8" stroke-linecap="round"/>
  <rect x="16" y="-2.4" width="58" height="4.8" rx="2.4" fill="#8e99a7"/>
  <rect x="16" y="-2.4" width="58" height="1.6" rx="0.8" fill="#e8eef5" opacity="0.65"/>
</g>
<!-- the third: bowl already beaten flat, hole drilled, line knotted through.
     This is the one you are about to be given. -->
<g transform="translate(266,174) rotate(5)">
  <ellipse cx="0" cy="0" rx="23" ry="12" fill="#39434f"/>
  <ellipse cx="0" cy="-1" rx="22" ry="11" fill="url(#hidSpoon7)"/>
  <g fill="#7b8592" opacity="0.4">
    <ellipse cx="-8" cy="-2" rx="5" ry="3"/><ellipse cx="6" cy="1" rx="5" ry="3"/><ellipse cx="-1" cy="4" rx="4.4" ry="2.6"/>
  </g>
  <path d="M-20,-5 Q-23,0 -19,6" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.9" stroke-linecap="round"/>
  <rect x="20" y="-2.8" width="62" height="5.6" rx="2.8" fill="#8e99a7"/>
  <rect x="20" y="-2.8" width="62" height="1.9" rx="0.9" fill="#e8eef5" opacity="0.7"/>
  <circle cx="76" cy="0" r="3" fill="#1b2534"/>
  <path d="M76,0 Q92,14 96,34" fill="none" stroke="#e8eef5" stroke-width="1.8" opacity="0.75"/>
</g>

<!-- 3. THE JAR OF SCREWS, sorted by nothing. A jar shape, first and foremost. -->
<g transform="translate(396,144)">
  <rect x="-34" y="-56" width="68" height="92" rx="7" fill="#24404a" opacity="0.75"/>
  <rect x="-34" y="-56" width="68" height="92" rx="7" fill="none" stroke="#9fd4e4" stroke-width="2" opacity="0.55"/>
  <!-- glass highlight down the left, which is what says JAR -->
  <rect x="-29" y="-50" width="9" height="80" rx="4.5" fill="#dff0f7" opacity="0.32"/>
  <!-- neck and lid -->
  <rect x="-22" y="-66" width="44" height="12" rx="3" fill="#5b6a72"/>
  <rect x="-22" y="-66" width="44" height="4" rx="2" fill="#93a4ac" opacity="0.7"/>
  <!-- screws, jumbled, at every angle -->
  <g fill="#c3ccd8" opacity="0.8">
    <rect x="-24" y="8" width="20" height="3.6" rx="1.8" transform="rotate(22,-14,10)"/>
    <rect x="-8" y="18" width="22" height="3.6" rx="1.8" transform="rotate(-14,3,20)"/>
    <rect x="6" y="2" width="18" height="3.4" rx="1.7" transform="rotate(58,15,4)"/>
    <rect x="-22" y="24" width="21" height="3.6" rx="1.8" transform="rotate(-42,-12,26)"/>
    <rect x="0" y="28" width="19" height="3.4" rx="1.7" transform="rotate(8,10,30)"/>
    <rect x="-26" y="-6" width="17" height="3.4" rx="1.7" transform="rotate(-68,-18,-4)"/>
    <rect x="8" y="14" width="20" height="3.6" rx="1.8" transform="rotate(36,18,16)"/>
    <rect x="-14" y="-16" width="18" height="3.4" rx="1.7" transform="rotate(15,-5,-14)"/>
  </g>
</g>

<!-- 4. BENT WIRE, a few long clear lengths across the back of the drawer -->
<g fill="none" stroke="#b3bfcc" stroke-width="2.6" stroke-linecap="round" opacity="0.8">
  <path d="M74,74 Q124,62 168,78 Q206,92 246,74"/>
  <path d="M80,90 Q112,80 136,92"/>
</g>
<g fill="none" stroke="#8996a4" stroke-width="2.2" stroke-linecap="round" opacity="0.6">
  <path d="M78,200 Q122,212 164,198 Q196,188 214,198"/>
</g>

<!-- HIS HAND on the drawer edge. Near-black against the lit drawer, which is
     what makes it read. -->
<g transform="translate(96,42)">
  <path d="M0,0 Q2,18 14,22 L58,20 Q74,15 70,0 Z" fill="#05070e"/>
  <path d="M12,21 Q14,32 22,32 Q28,30 27,19" fill="#05070e"/>
  <path d="M28,20 Q30,33 39,33 Q45,31 44,19" fill="#05070e"/>
  <path d="M45,19 Q47,31 54,30 Q59,28 58,18" fill="#05070e"/>
  <path d="M0,0 Q2,16 13,21" fill="none" stroke="#9fd4e4" stroke-width="1.4" opacity="0.5"/>
</g>
</svg>`;

// Scene 8: The Sounding Spoon. Beaten spoon bowl, fishing line through the
// handle hole, hanging from his fingers the way it is meant to be used.
// Built for READABILITY: plain lit wall behind it, the line running clearly to
// a fixing at the top, the handle a distinct narrow bar, and the bowl a
// hammered ellipse with a hard specular that says metal.
STORY_SCENES['hidden_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidWall8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20364a"/><stop offset="55%" stop-color="#1a2c3e"/><stop offset="100%" stop-color="#101c2b"/>
  </linearGradient>
  <linearGradient id="hidSteel8" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0%" stop-color="#e6eef6"/><stop offset="30%" stop-color="#aeb9c8"/><stop offset="62%" stop-color="#6d7987"/><stop offset="100%" stop-color="#39434f"/>
  </linearGradient>
  <linearGradient id="hidShaft8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d6dee8"/><stop offset="42%" stop-color="#9aa5b3"/><stop offset="100%" stop-color="#4b5563"/>
  </linearGradient>
</defs>
<!-- PLAIN LIT WALL. No vignette. The tool is the whole subject. -->
<rect width="500" height="260" fill="url(#hidWall8)"/>
<!-- a single soft key from the screens, off frame left -->
<ellipse cx="150" cy="120" rx="230" ry="180" fill="#5fa0b8" opacity="0.07"/>
<!-- THE FIXING: his fingers at the top, holding the line. Dark against the
     lit wall, so the line has somewhere to come from. -->
<g transform="translate(250,14)">
  <path d="M-46,-14 Q-40,16 -18,24 L18,26 Q42,20 46,-8 L46,-20 L-46,-20 Z" fill="#05070e"/>
  <!-- index finger and thumb pinching the line -->
  <path d="M-16,22 Q-14,42 -4,44 Q6,44 6,26" fill="#05070e"/>
  <path d="M8,26 Q12,44 22,42 Q30,38 26,20" fill="#05070e"/>
  <!-- rim light down the finger edge -->
  <path d="M-16,24 Q-14,40 -5,43" fill="none" stroke="#9fd4e4" stroke-width="1.4" opacity="0.6"/>
</g>
<!-- THE LINE. One clear unbroken run from the fingers to the handle hole.
     It swings a little, and the whole tool swings with it. -->
<g transform="translate(250,58)">
  <animateTransform attributeName="transform" type="rotate" values="-2.2;2.2;-2.2" dur="5.5s" repeatCount="indefinite" additive="sum"/>
  <!-- the line itself: bright, thin, unmistakably a line -->
  <line x1="0" y1="-4" x2="-1" y2="66" stroke="#0a121e" stroke-width="3" opacity="0.5"/>
  <line x1="0" y1="-4" x2="-1" y2="66" stroke="#dfe7f0" stroke-width="1.4" opacity="0.9"/>
  <!-- the knot, tied through the hole in the beaten handle -->
  <ellipse cx="-1.4" cy="70" rx="4.4" ry="3.4" fill="none" stroke="#dfe7f0" stroke-width="1.6" opacity="0.85"/>
  <path d="M-5.4,68 Q-1.4,72 2.6,69" fill="none" stroke="#dfe7f0" stroke-width="1.2" opacity="0.7"/>
  <!-- the cut tail of the line, left long because he did not trim it -->
  <path d="M1,72 Q9,80 7,90" fill="none" stroke="#dfe7f0" stroke-width="1" opacity="0.55"/>

  <!-- ONE CONTINUOUS PIECE OF METAL. A soup spoon somebody beat flat with a
       hammer: narrow at the top, widening into a shallow bowl at the bottom.
       It hangs at a rake so the bowl is seen as a foreshortened ellipse and
       the handle runs OUT of it along the same axis. Drawn as a SINGLE path
       so there is no seam where a handle stops and a round thing begins. -->
  <g transform="rotate(13)">
    <!-- the whole spoon, one silhouette, dark backing plate -->
    <path d="M-4.6,72
             C-5.4,104 -6.6,124 -7.4,140
             C-15,146 -21,156 -21.6,169
             C-22.4,186 -13.8,199 -0.6,201
             C13,203 23.4,192 24.4,176
             C25.2,162 19.6,150 10.6,143
             C8.6,126 7,104 6.2,72 Z" fill="#2b333e"/>
    <!-- the metal itself, same path inset -->
    <path d="M-3.4,73
             C-4.2,104 -5.4,124 -6.2,139
             C-13.4,145 -19.2,155 -19.8,168
             C-20.6,184 -12.4,196 -0.4,198
             C12,200 21.6,190 22.6,175
             C23.4,161 18,150 9.4,143
             C7.4,126 5.8,104 5,73 Z" fill="url(#hidSteel8)"/>
    <!-- THE HOLLOW of the bowl: one shallow crescent, offset UP and LEFT so it
         reads as a dish catching light, not as a pair of marks on a face. -->
    <path d="M-15.4,166
             C-14.4,155 -7.4,148 0.6,148
             C9.4,148 16.4,156 17,167
             C12.6,159 6.6,155 0.4,155
             C-6.2,155 -11.8,159 -15.4,166 Z" fill="#5c6774" opacity="0.6"/>
    <!-- the deepest part of the dish, a single soft pool low in the bowl -->
    <ellipse cx="0.4" cy="177" rx="14.6" ry="9.4" fill="#4a5563" opacity="0.42"/>
    <!-- hammer marks. Irregular, scattered, NEVER paired left-and-right. -->
    <g fill="#8a95a4" opacity="0.3">
      <ellipse cx="-9" cy="160" rx="5.4" ry="3.2" transform="rotate(-16,-9,160)"/>
      <ellipse cx="6.4" cy="185" rx="4.6" ry="2.8" transform="rotate(9,6.4,185)"/>
      <ellipse cx="-12.6" cy="180" rx="4.2" ry="2.6" transform="rotate(22,-12.6,180)"/>
      <ellipse cx="9.4" cy="171.6" rx="4" ry="2.4" transform="rotate(-8,9.4,171.6)"/>
      <ellipse cx="-2.4" cy="192" rx="5" ry="2.6" transform="rotate(4,-2.4,192)"/>
    </g>
    <!-- hammer marks up the stem too: he beat the whole thing -->
    <g fill="#5b6674" opacity="0.42">
      <ellipse cx="-5.4" cy="96" rx="2.4" ry="3.4"/><ellipse cx="-4.6" cy="112" rx="2.2" ry="3"/>
      <ellipse cx="-6" cy="128" rx="2.4" ry="3.2"/>
    </g>
    <!-- HARD SPECULAR: one unbroken highlight running the WHOLE length, down
         the stem and round the near rim. This is what welds it into one object. -->
    <path d="M-3.2,74 C-4,104 -5.2,124 -6,139
             C-13,145 -18.4,155 -19,168
             C-19.6,180 -14.6,189 -6.6,194"
          fill="none" stroke="#f2f7fc" stroke-width="2.2" opacity="0.85" stroke-linecap="round"/>
    <!-- and the shaded far rim, so the bowl turns away from us -->
    <path d="M9.6,143 C18,150 23.2,161 22.4,175 C21.6,188 13.4,197 2,198"
          fill="none" stroke="#232a34" stroke-width="2.4" opacity="0.85" stroke-linecap="round"/>
    <!-- the beaten edge is not truly round: one flattened stretch -->
    <path d="M-19.4,172 C-18.6,183 -12.4,191 -3.6,193"
          fill="none" stroke="#c6d0dc" stroke-width="1.4" opacity="0.55"/>
    <!-- where the stem meets the bowl the metal is widest and thinnest:
         two faint spread lines, the mark of hammering it out -->
    <path d="M-9.4,146 C-6.4,150 -2.4,151 1.6,151" fill="none" stroke="#8a95a4" stroke-width="0.9" opacity="0.45"/>
    <path d="M-11.4,152 C-7.4,157 -2.4,159 3.6,158" fill="none" stroke="#8a95a4" stroke-width="0.8" opacity="0.35"/>
    <!-- THE DRILLED HOLE, at the narrow top, where the line is knotted -->
    <ellipse cx="-4.2" cy="80" rx="2.6" ry="3.2" fill="#101c2b"/>
    <ellipse cx="-4.2" cy="80" rx="2.6" ry="3.2" fill="none" stroke="#c6d0dc" stroke-width="0.7" opacity="0.5"/>
  </g>
</g>
<!-- what the tool is FOR: a plank wall behind, and the spoon is near it -->
<g opacity="0.28">
  <line x1="0" y1="212" x2="500" y2="212" stroke="#0a121e" stroke-width="2"/>
  <line x1="0" y1="238" x2="500" y2="238" stroke="#0a121e" stroke-width="2"/>
  <line x1="96" y1="212" x2="96" y2="260" stroke="#0a121e" stroke-width="1.6"/>
  <line x1="404" y1="212" x2="404" y2="260" stroke="#0a121e" stroke-width="1.6"/>
</g>
<!-- the sound it makes: two faint rings off the bowl, because it is a
     listening device and nothing else in the frame says so -->
<ellipse cx="292" cy="250" rx="52" ry="14" fill="none" stroke="#9fd4e4" stroke-width="1.2" opacity="0.25">
  <animate attributeName="rx" values="40;96" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="ry" values="11;26" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.3;0" dur="4s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="292" cy="250" rx="52" ry="14" fill="none" stroke="#9fd4e4" stroke-width="1.2" opacity="0.2">
  <animate attributeName="rx" values="40;96" dur="4s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="ry" values="11;26" dur="4s" repeatCount="indefinite" begin="2s"/>
  <animate attributeName="opacity" values="0.25;0" dur="4s" repeatCount="indefinite" begin="2s"/>
</ellipse>
</svg>`;

// Scene 9: Two letters on a fresh card, slid across. The pencil goes back
// parallel to the table edge, and it is EXACTLY parallel, which is the tell.
STORY_SCENES['hidden_9'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoom9" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#05080f"/><stop offset="50%" stop-color="#0a1224"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidWash9" cx="34%" cy="14%" r="72%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.2"/><stop offset="58%" stop-color="#3d5a75" stop-opacity="0.06"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidCard9" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8c94a8"/><stop offset="100%" stop-color="#6a7286"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoom9)"/>
<rect width="500" height="260" fill="url(#hidWash9)"/>
<rect x="0" y="0" width="500" height="88" fill="#152232"/>
<rect x="0" y="0" width="500" height="88" fill="url(#hidWash9)"/>
<!-- three small screens up high, out of focus, different horizons -->
<rect x="34" y="10" width="60" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1" opacity="0.75"/>
<rect x="36" y="32" width="56" height="10" fill="#16323a" opacity="0.8"/>
<rect x="112" y="10" width="60" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1" opacity="0.7"/>
<rect x="114" y="26" width="56" height="16" fill="#16323a" opacity="0.75"/>
<rect x="190" y="10" width="60" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1" opacity="0.65"/>
<rect x="192" y="36" width="56" height="6" fill="#16323a" opacity="0.7"/>
<!-- THE TABLE, filling the lower two thirds, seen from above -->
<rect x="0" y="88" width="500" height="172" fill="#39465c"/>
<rect x="0" y="88" width="500" height="4" rx="2" fill="#66748f" opacity="0.55"/>
<!-- the grain, faint -->
<g stroke="#4a5568" stroke-width="1" opacity="0.5">
  <line x1="0" y1="112" x2="500" y2="112"/><line x1="0" y1="146" x2="500" y2="146"/>
  <line x1="0" y1="186" x2="500" y2="186"/><line x1="0" y1="226" x2="500" y2="226"/>
</g>
<!-- THE FRESH CARD, slid across. Two letters on it. -->
<g transform="translate(238,158) rotate(2)">
  <rect x="-72" y="-42" width="144" height="86" rx="2" fill="#4a5162" opacity="0.4"/>
  <rect x="-74" y="-46" width="144" height="86" rx="2" fill="url(#hidCard9)"/>
  <rect x="-74" y="-46" width="144" height="3" rx="1.5" fill="#a2aabc" opacity="0.5"/>
  <!-- ruled line -->
  <line x1="-64" y1="-30" x2="60" y2="-30" stroke="#4c5468" stroke-width="0.8" opacity="0.6"/>
  <!-- the two letters, pencil grey, written by hand -->
  <text x="-2" y="10" text-anchor="middle" font-family="'Courier New',monospace" font-size="42" font-weight="bold" fill="#4a5770" opacity="0.85">LR</text>
  <!-- a thumb smudge -->
  <ellipse cx="46" cy="26" rx="14" ry="9" fill="#5b6377" opacity="0.4"/>
</g>
<!-- the stack it came off -->
<g transform="translate(408,120)">
  <rect x="0" y="22" width="72" height="9" rx="1.4" fill="#454d5f"/>
  <rect x="2" y="13" width="72" height="9" rx="1.4" fill="#525a6d"/>
  <rect x="0" y="5" width="72" height="9" rx="1.4" fill="#5e677b"/>
  <rect x="3" y="-4" width="72" height="9" rx="1.4" fill="#6c7488"/>
  <g stroke="#4a5770" stroke-width="0.6" opacity="0.65">
    <line x1="10" y1="-1.4" x2="52" y2="-1.4"/><line x1="10" y1="1" x2="66" y2="1"/>
  </g>
</g>
<!-- THE PENCIL, put back. Parallel to the table edge, and exactly so:
     both ends sit at y=222, which is the whole characterisation. -->
<rect x="60" y="222" width="130" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.9"/>
<rect x="186" y="222" width="8" height="4.4" rx="1.6" fill="#525f79"/>
<rect x="194" y="222.6" width="4" height="3.2" rx="1" fill="#5c6674"/>
<polygon points="60,222 48,224.2 60,226.4" fill="#6d7b96"/>
<polygon points="54,223.1 48,224.2 54,225.3" fill="#141a26"/>
<!-- amber bloom under the pencil -->
<ellipse cx="124" cy="228" rx="76" ry="6" fill="#F2C14E" opacity="0.06"/>
<!-- a faint guide line on the table where the pencil always goes -->
<line x1="40" y1="230" x2="214" y2="230" stroke="#F2C14E" stroke-width="0.5" opacity="0.1"/>
<!-- his hand withdrawing from the card, top edge, fingers only -->
<g transform="translate(266,88)">
  <path d="M-42,0 Q-38,16 -26,20 L26,18 Q42,12 40,0 Z" fill="#05070e"/>
  <path d="M-24,19 Q-22,28 -14,28 Q-8,26 -9,17" fill="#05070e"/>
  <path d="M-6,19 Q-4,29 4,29 Q10,27 9,17" fill="#05070e"/>
  <path d="M12,18 Q15,27 22,26 Q27,24 26,16" fill="#05070e"/>
</g>
</svg>`;

// Scene 10: Back up into the square. The grate behind him, the fountain sound
// released mid-splash — the water is animating again, which scene 0 refused to do.
STORY_SCENES['hidden_10'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidSky10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1224"/><stop offset="52%" stop-color="#1a2a42"/><stop offset="100%" stop-color="#2e405a"/>
  </linearGradient>
  <radialGradient id="hidMist10" cx="50%" cy="60%" r="34%">
    <stop offset="0%" stop-color="#7fb4c8" stop-opacity="0.16"/><stop offset="100%" stop-color="#7fb4c8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidWater10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9fd0e0" stop-opacity="0.6"/><stop offset="100%" stop-color="#3d5a75" stop-opacity="0.1"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidSky10)"/>
<rect x="0" y="50" width="64" height="122" rx="2" fill="#16203a" opacity="0.9"/>
<rect x="60" y="38" width="52" height="134" rx="2" fill="#121a30" opacity="0.9"/>
<rect x="390" y="44" width="58" height="128" rx="2" fill="#16203a" opacity="0.9"/>
<rect x="444" y="34" width="56" height="138" rx="2" fill="#121a30" opacity="0.9"/>
<rect x="12" y="68" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.28"/>
<rect x="38" y="68" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.2"/>
<rect x="404" y="62" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.24"/>
<rect x="460" y="54" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.18"/>
<rect x="0" y="170" width="500" height="90" fill="#18202e"/>
<ellipse cx="72" cy="200" rx="15" ry="6" fill="#202839" opacity="0.6"/>
<ellipse cx="150" cy="224" rx="13" ry="5" fill="#1e2534" opacity="0.5"/>
<ellipse cx="358" cy="206" rx="14" ry="6" fill="#202839" opacity="0.55"/>
<ellipse cx="432" cy="234" rx="13" ry="5" fill="#1e2534" opacity="0.45"/>
<!-- fountain, whole again -->
<ellipse cx="250" cy="180" rx="98" ry="30" fill="#2e3648"/>
<ellipse cx="250" cy="178" rx="90" ry="26" fill="#1d3245"/>
<ellipse cx="250" cy="178" rx="82" ry="21" fill="#25506a" opacity="0.55"/>
<rect x="243" y="112" width="14" height="48" fill="#2e3648"/>
<rect x="245" y="112" width="6" height="48" fill="#3e4a5e" opacity="0.5"/>
<ellipse cx="250" cy="112" rx="26" ry="9" fill="#2e3648"/>
<ellipse cx="250" cy="110" rx="20" ry="6" fill="#25506a" opacity="0.6"/>
<!-- water, MOVING now: the held note released, mid splash -->
<line x1="250" y1="104" x2="250" y2="84" stroke="url(#hidWater10)" stroke-width="2.2" opacity="0.8">
  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.7s" repeatCount="indefinite"/>
</line>
<path d="M236,113 Q226,133 220,153" stroke="url(#hidWater10)" stroke-width="1.7" fill="none" opacity="0.6">
  <animate attributeName="opacity" values="0.3;0.75;0.3" dur="2.1s" repeatCount="indefinite" begin="0.3s"/>
</path>
<path d="M264,113 Q274,133 280,153" stroke="url(#hidWater10)" stroke-width="1.7" fill="none" opacity="0.6">
  <animate attributeName="opacity" values="0.3;0.75;0.3" dur="2.1s" repeatCount="indefinite" begin="0.7s"/>
</path>
<circle cx="250" cy="82" r="2.2" fill="#9fd0e0" opacity="0.4">
  <animate attributeName="cy" values="82;74;70" dur="1.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.6;0.8;0" dur="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="222" cy="150" r="1.6" fill="#9fd0e0" opacity="0.35">
  <animate attributeName="cy" values="146;158;170" dur="1.8s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite"/>
</circle>
<circle cx="278" cy="150" r="1.6" fill="#9fd0e0" opacity="0.35">
  <animate attributeName="cy" values="146;158;170" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
</circle>
<ellipse cx="250" cy="166" rx="62" ry="26" fill="url(#hidMist10)"/>
<!-- the grate, shut again, in the cobbles at the front. Nothing marks it. -->
<g opacity="0.85">
  <rect x="196" y="216" width="108" height="26" rx="2" fill="#3d4a60"/>
  <g stroke="#525f79" stroke-width="2.4" stroke-linecap="round">
    <line x1="206" y1="219" x2="206" y2="239"/><line x1="220" y1="219" x2="220" y2="239"/>
    <line x1="234" y1="219" x2="234" y2="239"/><line x1="248" y1="219" x2="248" y2="239"/>
    <line x1="262" y1="219" x2="262" y2="239"/><line x1="276" y1="219" x2="276" y2="239"/>
    <line x1="290" y1="219" x2="290" y2="239"/>
  </g>
  <!-- one faint cold gleam out of it, if you know to look -->
  <rect x="204" y="222" width="94" height="14" fill="#16323a" opacity="0.35"/>
</g>
<!-- lanterns -->
<rect x="118" y="128" width="4" height="44" fill="#28303f"/>
<rect x="112" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="114" y="120" width="12" height="9" rx="1" fill="#5fa0b8" opacity="0.4"/>
<rect x="378" y="128" width="4" height="44" fill="#28303f"/>
<rect x="372" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="374" y="120" width="12" height="9" rx="1" fill="#5fa0b8" opacity="0.36"/>
</svg>`;

// ---------------------------------------------------------------------------
// MISSION BEATS — hidden_m1 .. hidden_m5
// One frame per mission: the moment the artifact is understood, not the moment
// it is found. Canon at the table with the thing in his hands, from behind or
// hands-only. The pencil is the running tell — exactly parallel through m1..m4,
// and where it fell in m5, and it never goes back.
// ---------------------------------------------------------------------------

// Mission 1: Scramble Shores. The rope's other end. His thumb on the splice:
// a fourteen year old who was told to do it twice and did it twice.
STORY_SCENES['hidden_m1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomM1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1b2c3e"/><stop offset="100%" stop-color="#0e1726"/>
  </linearGradient>
  <linearGradient id="hidTableM1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#42506a"/><stop offset="100%" stop-color="#2c3849"/>
  </linearGradient>
  <linearGradient id="hidRopeM1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8d8778"/><stop offset="45%" stop-color="#5f5a4e"/><stop offset="100%" stop-color="#2f2c26"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoomM1)"/>
<!-- one small screen showing exactly that stretch of coast -->
<rect x="26" y="12" width="96" height="60" rx="3" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<rect x="30" y="16" width="88" height="52" fill="#16323a"/>
<rect x="30" y="44" width="88" height="24" fill="#1d3f49"/>
<rect x="30" y="43" width="88" height="1.6" fill="#7fc4d8" opacity="0.5"/>
<path d="M30,43 Q54,37 74,43 Q94,49 118,43 L118,38 Q94,32 74,38 Q54,44 30,38Z" fill="#0b1a20"/>
<!-- letters half buried, drifting in the sand -->
<text x="42" y="60" font-family="'Courier New',monospace" font-size="9" fill="#7fc4d8" opacity="0.45">A E</text>
<text x="86" y="63" font-family="'Courier New',monospace" font-size="9" fill="#7fc4d8" opacity="0.35">R S</text>
<!-- table, lit, filling the lower frame -->
<rect x="0" y="108" width="500" height="152" fill="url(#hidTableM1)"/>
<rect x="0" y="108" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<!-- THE ROPE. Tarred, pale against the table, spliced badly at one end,
     cut clean at the other. Read the two ends at a glance. -->
<g transform="translate(250,180) rotate(-6)">
  <!-- cast shadow, so it sits ON the table -->
  <path d="M-120,10 Q-60,20 0,10 Q60,0 120,12" fill="none" stroke="#101a26" stroke-width="20" opacity="0.35" stroke-linecap="round"/>
  <!-- the lay of the rope -->
  <path d="M-118,0 Q-88,-10 -58,0 Q-28,10 2,0 Q32,-10 62,0 Q92,10 118,2" fill="none" stroke="#2f2c26" stroke-width="22" stroke-linecap="round"/>
  <path d="M-118,0 Q-88,-10 -58,0 Q-28,10 2,0 Q32,-10 62,0 Q92,10 118,2" fill="none" stroke="url(#hidRopeM1)" stroke-width="18" stroke-linecap="round"/>
  <!-- the twist of the strands, drawn as diagonal bands -->
  <g stroke="#3b382f" stroke-width="2.4" opacity="0.65" stroke-linecap="round">
    <line x1="-102" y1="-8" x2="-94" y2="8"/><line x1="-80" y1="-9" x2="-72" y2="7"/>
    <line x1="-58" y1="-8" x2="-50" y2="8"/><line x1="-36" y1="-5" x2="-28" y2="11"/>
    <line x1="-14" y1="-8" x2="-6" y2="8"/><line x1="8" y1="-9" x2="16" y2="7"/>
    <line x1="30" y1="-8" x2="38" y2="8"/><line x1="52" y1="-6" x2="60" y2="10"/>
    <line x1="74" y1="-6" x2="82" y2="10"/><line x1="96" y1="-4" x2="104" y2="12"/>
  </g>
  <!-- the tar sheen, cold and hard: this is old boat rope -->
  <path d="M-108,-7 Q-78,-15 -50,-7" fill="none" stroke="#cdd6df" stroke-width="2" opacity="0.35"/>
  <path d="M14,-7 Q42,-15 70,-6" fill="none" stroke="#cdd6df" stroke-width="2" opacity="0.3"/>
  <!-- CUT CLEAN, right end: a flat face, strands all level -->
  <ellipse cx="120" cy="2" rx="5" ry="10" fill="#a49d8b"/>
  <ellipse cx="120" cy="2" rx="3.2" ry="7.4" fill="#4a463c"/>
  <line x1="120" y1="-5" x2="120" y2="9" stroke="#dfe6ec" stroke-width="1" opacity="0.5"/>
  <!-- THE SPLICE, left end: done badly, then done AGAIN over the top of itself.
       Two visibly different weaves stacked, which is the whole point of it. -->
  <g transform="translate(-118,0)">
    <!-- first attempt: loose tucks, spaced too far apart -->
    <path d="M2,-9 Q-16,-13 -30,-5" fill="none" stroke="#5f5a4e" stroke-width="8" stroke-linecap="round"/>
    <path d="M2,8 Q-18,12 -34,4" fill="none" stroke="#5f5a4e" stroke-width="8" stroke-linecap="round"/>
    <!-- second attempt, laid over the first: tighter, closer, still not neat -->
    <path d="M0,-6 Q-15,-10 -24,-3" fill="none" stroke="#8d8778" stroke-width="6" stroke-linecap="round"/>
    <path d="M0,5 Q-16,9 -26,2" fill="none" stroke="#8d8778" stroke-width="6" stroke-linecap="round"/>
    <path d="M-9,-2 Q-19,1 -24,6" fill="none" stroke="#a49d8b" stroke-width="5" stroke-linecap="round"/>
    <!-- loose strand ends nobody trimmed -->
    <path d="M-30,-5 Q-40,-8 -48,-3" fill="none" stroke="#5f5a4e" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M-34,4 Q-44,7 -50,3" fill="none" stroke="#5f5a4e" stroke-width="3" stroke-linecap="round"/>
    <!-- sand still caught in the splice -->
    <circle cx="-16" cy="-4" r="1.4" fill="#e8e2d0" opacity="0.55"/>
    <circle cx="-22" cy="4" r="1.1" fill="#e8e2d0" opacity="0.45"/>
    <circle cx="-10" cy="6" r="1.2" fill="#e8e2d0" opacity="0.4"/>
  </g>
</g>
<!-- HIS THUMB, running along the splice. Near-black hand, lit table. -->
<g transform="translate(112,214)">
  <path d="M0,42 Q-10,12 8,-8 Q28,-28 56,-26 L90,-22 Q108,-16 104,2 Q98,22 72,28 L22,42 Z" fill="#05070e"/>
  <path d="M12,-6 Q26,-26 50,-32 Q66,-35 70,-27 Q72,-19 58,-14 Q38,-8 22,4 Z" fill="#0b0f19"/>
  <path d="M24,-24 Q42,-31 60,-29" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.55"/>
  <path d="M0,40 Q-8,14 8,-6" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.45"/>
</g>
<!-- the pencil, set aside, still exactly parallel -->
<rect x="356" y="234" width="92" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.9"/>
<rect x="444" y="234" width="6" height="4.4" rx="1.6" fill="#525f79"/>
<ellipse cx="402" cy="240" rx="58" ry="5" fill="#F2C14E" opacity="0.07"/>
<!-- the cards, squared, off to the side -->
<g transform="translate(392,124)">
  <rect x="0" y="18" width="68" height="9" rx="1.4" fill="#5e6577"/>
  <rect x="2" y="9" width="68" height="9" rx="1.4" fill="#6d748a"/>
  <rect x="0" y="0" width="68" height="9" rx="1.4" fill="#7c849b"/>
</g>
</svg>`;

// Mission 2: Enigma Forest. He holds the lens up to the big screen and the
// water on it goes green — the exact green of every night watch either of them
// ever stood. The one time cold light in this room means something warm.
STORY_SCENES['hidden_m2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomM2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidBigM2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#26505c"/><stop offset="45%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0b1a22"/>
  </linearGradient>
  <radialGradient id="hidLensM2" cx="42%" cy="34%" r="66%">
    <stop offset="0%" stop-color="#63e8b4"/><stop offset="55%" stop-color="#22a97e"/><stop offset="100%" stop-color="#0b5240"/>
  </radialGradient>
  <radialGradient id="hidLensGlowM2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#4fd6a0" stop-opacity="0.4"/><stop offset="55%" stop-color="#1e9a72" stop-opacity="0.12"/><stop offset="100%" stop-color="#1e9a72" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLampM2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.9"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.24"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScanM2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.2"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClipM2"><rect x="112" y="20" width="276" height="152" rx="3"/></clipPath>
  <clipPath id="hidLensClipM2"><circle cx="298" cy="112" r="52"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomM2)"/>
<!-- THE BIG SCREEN, large and bright -->
<rect x="108" y="16" width="284" height="160" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="3"/>
<g clip-path="url(#hidBigClipM2)">
  <rect x="112" y="20" width="276" height="152" fill="url(#hidBigM2)"/>
  <path d="M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z" fill="#2b6070" opacity="0.5">
    <animate attributeName="d" values="M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z;M112,70 Q180,64 250,70 Q320,76 388,70 L388,84 Q320,90 250,84 Q180,78 112,84Z;M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z" dur="11s" repeatCount="indefinite"/>
  </path>
  <path d="M142,172 Q164,138 220,132 L316,136 Q356,144 352,172 Z" fill="#061019" opacity="0.95"/>
  <path d="M226,132 L218,86 L232,84 L240,132Z" fill="#061019" opacity="0.9"/>
  <circle cx="312" cy="146" r="34" fill="url(#hidLampM2)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.55;0.3" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="312" cy="146" r="2.8" fill="#F2C14E"><animate attributeName="opacity" values="0.76;1;0.76" dur="8s" repeatCount="indefinite"/></circle>
  <rect x="112" y="20" width="276" height="22" fill="url(#hidScanM2)">
    <animate attributeName="y" values="2;176" dur="6.5s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- THE LENS, held up against it. Everything behind the glass goes green. -->
<g clip-path="url(#hidLensClipM2)">
  <rect x="240" y="54" width="120" height="120" fill="url(#hidLensM2)"/>
  <!-- the same wreck and the same water, re-seen in port-light green -->
  <path d="M246,174 Q266,142 314,136 L360,140 L360,174 Z" fill="#053a2b" opacity="0.75"/>
  <path d="M246,72 Q296,64 360,72 L360,86 Q296,94 246,86Z" fill="#0d6a50" opacity="0.6"/>
  <!-- the lamp seen through green does not go green. It goes pale. -->
  <circle cx="312" cy="146" r="22" fill="#dff0d4" opacity="0.3"/>
  <circle cx="312" cy="146" r="3" fill="#f4f8e6" opacity="0.95"/>
</g>
<!-- lens body: a brass boat lamp lens, the size of a coaster -->
<circle cx="298" cy="112" r="52" fill="none" stroke="#7d7358" stroke-width="8"/>
<circle cx="298" cy="112" r="52" fill="none" stroke="#c3b489" stroke-width="3" opacity="0.7"/>
<circle cx="298" cy="112" r="47" fill="none" stroke="#3d3a30" stroke-width="1.6" opacity="0.8"/>
<!-- concentric fresnel rings in the glass -->
<g fill="none" stroke="#9ff2cd" stroke-width="1" opacity="0.35">
  <circle cx="298" cy="112" r="38"/><circle cx="298" cy="112" r="28"/><circle cx="298" cy="112" r="18"/><circle cx="298" cy="112" r="9"/>
</g>
<!-- one hard specular on the brass rim, so the metal reads -->
<path d="M262,78 Q250,92 252,110" fill="none" stroke="#f0e3b8" stroke-width="3" opacity="0.7" stroke-linecap="round"/>
<!-- bark scar still on the rim, where the tree closed over it -->
<path d="M330,150 Q344,142 344,128" fill="none" stroke="#2e2a1f" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
<!-- the green throw across the room -->
<circle cx="298" cy="112" r="118" fill="url(#hidLensGlowM2)" opacity="0.6">
  <animate attributeName="opacity" values="0.46;0.68;0.46" dur="6s" repeatCount="indefinite"/>
</circle>
<!-- his hand and forearm holding it up, from below left. No head, no face. -->
<path d="M232,260 Q238,214 254,182 Q262,166 274,158" fill="none" stroke="#05070e" stroke-width="28" stroke-linecap="round"/>
<path d="M244,258 Q250,214 264,184" fill="none" stroke="#4fd6a0" stroke-width="2" opacity="0.3"/>
<g transform="translate(268,154)">
  <path d="M0,16 Q-6,0 6,-10 Q20,-20 34,-14 Q44,-8 40,6 Q34,20 16,22 Z" fill="#05070e"/>
  <path d="M28,-14 Q36,-22 44,-18" fill="none" stroke="#05070e" stroke-width="8" stroke-linecap="round"/>
  <path d="M34,-8 Q44,-14 50,-8" fill="none" stroke="#05070e" stroke-width="7" stroke-linecap="round"/>
  <path d="M4,-6 Q14,-16 26,-16" fill="none" stroke="#4fd6a0" stroke-width="1.6" opacity="0.5"/>
</g>
<!-- table edge, pencil parallel, green-lit -->
<rect x="0" y="212" width="500" height="48" fill="#2c3849"/>
<rect x="0" y="212" width="500" height="4" rx="2" fill="#5f6d88" opacity="0.7"/>
<rect x="60" y="234" width="86" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.85"/>
<rect x="142" y="234" width="6" height="4.4" rx="1.5" fill="#525f79"/>
<g transform="translate(376,222)">
  <rect x="0" y="12" width="64" height="8" rx="1.3" fill="#4d5c60"/>
  <rect x="2" y="3" width="64" height="8" rx="1.3" fill="#5d6f70"/>
</g>
</svg>`;

// Mission 3: the Lexicon Library page, unfolded in eighths. And THE SLIP:
// one index card lifted, mid sentence. Played SMALL. A man who has lost a
// word, not a breakdown — the frame is calm, the card is barely raised an
// inch, and nothing else in the room reacts to it.
STORY_SCENES['hidden_m3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomM3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidTableM3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#42506a"/><stop offset="100%" stop-color="#2c3849"/>
  </linearGradient>
  <linearGradient id="hidPageM3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d8d6c2"/><stop offset="100%" stop-color="#b5b3a0"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoomM3)"/>
<!-- three small screens, calm, unchanged. The island is fine. -->
<rect x="16" y="10" width="62" height="38" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.6"/>
<rect x="19" y="13" width="56" height="32" fill="#16323a"/>
<rect x="19" y="34" width="56" height="11" fill="#1d3f49"/><rect x="19" y="33" width="56" height="1.4" fill="#7fc4d8" opacity="0.5"/>
<rect x="16" y="56" width="62" height="38" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.6"/>
<rect x="19" y="59" width="56" height="32" fill="#16323a"/>
<rect x="19" y="74" width="56" height="17" fill="#1d3f49"/><rect x="19" y="73" width="56" height="1.4" fill="#7fc4d8" opacity="0.45"/>
<rect x="16" y="102" width="62" height="38" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.6"/>
<rect x="19" y="105" width="56" height="32" fill="#16323a"/>
<rect x="19" y="128" width="56" height="9" fill="#1d3f49"/><rect x="19" y="127" width="56" height="1.4" fill="#7fc4d8" opacity="0.4"/>
<!-- table, lit, most of frame -->
<rect x="0" y="100" width="500" height="160" fill="url(#hidTableM3)"/>
<rect x="0" y="100" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<!-- THE LEDGER PAGE, unfolded in eighths. Pale, so it reads instantly. -->
<g transform="translate(180,180) rotate(-2)">
  <rect x="-100" y="-58" width="208" height="124" rx="1" fill="#101a26" opacity="0.4"/>
  <rect x="-106" y="-64" width="208" height="124" rx="1" fill="url(#hidPageM3)"/>
  <!-- the eight panels: creases with a lit side and a shadow side -->
  <g stroke="#8d8b78" stroke-width="1.2" opacity="0.75">
    <line x1="-54" y1="-64" x2="-54" y2="60"/><line x1="-2" y1="-64" x2="-2" y2="60"/><line x1="50" y1="-64" x2="50" y2="60"/>
    <line x1="-106" y1="-2" x2="102" y2="-2"/>
  </g>
  <g stroke="#f0eede" stroke-width="1" opacity="0.6">
    <line x1="-52.4" y1="-64" x2="-52.4" y2="60"/><line x1="-0.4" y1="-64" x2="-0.4" y2="60"/><line x1="51.6" y1="-64" x2="51.6" y2="60"/>
    <line x1="-106" y1="-0.4" x2="102" y2="-0.4"/>
  </g>
  <!-- ruled survey columns -->
  <g stroke="#6a6858" stroke-width="1" opacity="0.75">
    <line x1="-96" y1="-50" x2="94" y2="-50"/>
    <line x1="-72" y1="-56" x2="-72" y2="54"/><line x1="-40" y1="-56" x2="-40" y2="54"/>
    <line x1="-4" y1="-56" x2="-4" y2="54"/><line x1="34" y1="-56" x2="34" y2="54"/><line x1="64" y1="-56" x2="64" y2="54"/>
  </g>
  <!-- small tidy handwriting, drawn as marks. Dark on pale: it reads. -->
  <g stroke="#3b3a30" stroke-width="1.1" opacity="0.7" stroke-linecap="round">
    <line x1="-92" y1="-42" x2="-78" y2="-42"/><line x1="-66" y1="-42" x2="-48" y2="-42"/><line x1="-34" y1="-42" x2="-12" y2="-42"/><line x1="40" y1="-42" x2="56" y2="-42"/><line x1="70" y1="-42" x2="88" y2="-42"/>
    <line x1="-92" y1="-34" x2="-80" y2="-34"/><line x1="-66" y1="-34" x2="-52" y2="-34"/><line x1="-34" y1="-34" x2="-16" y2="-34"/><line x1="40" y1="-34" x2="58" y2="-34"/><line x1="70" y1="-34" x2="84" y2="-34"/>
    <line x1="-92" y1="-26" x2="-76" y2="-26"/><line x1="-66" y1="-26" x2="-50" y2="-26"/><line x1="-34" y1="-26" x2="-14" y2="-26"/><line x1="40" y1="-26" x2="54" y2="-26"/><line x1="70" y1="-26" x2="90" y2="-26"/>
    <line x1="-92" y1="-18" x2="-82" y2="-18"/><line x1="-66" y1="-18" x2="-46" y2="-18"/><line x1="-34" y1="-18" x2="-18" y2="-18"/><line x1="40" y1="-18" x2="60" y2="-18"/><line x1="70" y1="-18" x2="86" y2="-18"/>
    <line x1="-92" y1="-10" x2="-78" y2="-10"/><line x1="-66" y1="-10" x2="-54" y2="-10"/><line x1="-34" y1="-10" x2="-10" y2="-10"/><line x1="40" y1="-10" x2="56" y2="-10"/><line x1="70" y1="-10" x2="88" y2="-10"/>
    <line x1="-92" y1="8" x2="-80" y2="8"/><line x1="-66" y1="8" x2="-48" y2="8"/><line x1="-34" y1="8" x2="-14" y2="8"/><line x1="40" y1="8" x2="58" y2="8"/><line x1="70" y1="8" x2="84" y2="8"/>
    <line x1="-92" y1="16" x2="-76" y2="16"/><line x1="-66" y1="16" x2="-52" y2="16"/><line x1="-34" y1="16" x2="-16" y2="16"/><line x1="40" y1="16" x2="54" y2="16"/><line x1="70" y1="16" x2="90" y2="16"/>
    <line x1="-92" y1="24" x2="-82" y2="24"/><line x1="-66" y1="24" x2="-46" y2="24"/><line x1="-34" y1="24" x2="-12" y2="24"/><line x1="40" y1="24" x2="60" y2="24"/><line x1="70" y1="24" x2="86" y2="24"/>
    <line x1="-92" y1="32" x2="-78" y2="32"/><line x1="-66" y1="32" x2="-50" y2="32"/><line x1="-34" y1="32" x2="-18" y2="32"/><line x1="40" y1="32" x2="56" y2="32"/><line x1="70" y1="32" x2="88" y2="32"/>
    <line x1="-92" y1="40" x2="-80" y2="40"/><line x1="-66" y1="40" x2="-54" y2="40"/><line x1="-34" y1="40" x2="-10" y2="40"/><line x1="40" y1="40" x2="58" y2="40"/><line x1="70" y1="40" x2="84" y2="40"/>
  </g>
  <!-- COLUMN FIVE. Blank the whole way down the return leg, which everyone
       notices and nobody asks about twice. -->
  <rect x="-2" y="-46" width="36" height="102" fill="#e2e0cd"/>
  <line x1="-2" y1="-46" x2="-2" y2="56" stroke="#6a6858" stroke-width="1" opacity="0.7"/>
  <line x1="34" y1="-46" x2="34" y2="56" stroke="#6a6858" stroke-width="1" opacity="0.7"/>
  <!-- the date, with a wobble in the year -->
  <g stroke="#3b3a30" stroke-width="1.2" opacity="0.65" stroke-linecap="round">
    <line x1="44" y1="-54" x2="58" y2="-54"/><path d="M62,-54 q3,-4 6,0 t6,0" fill="none"/>
  </g>
  <!-- torn along the gutter, left edge -->
  <path d="M-106,-64 L-101,-52 L-107,-40 L-100,-28 L-106,-16 L-100,-4 L-106,10 L-101,24 L-107,38 L-102,52 L-106,60" fill="none" stroke="#8d8b78" stroke-width="2.4" opacity="0.85"/>
</g>
<!-- THE SLIP. One card lifted from the stack. About an inch. That is all
     that happens in this frame, and it is meant to be easy to miss. -->
<g transform="translate(392,152)">
  <!-- the stack, undisturbed and square -->
  <rect x="-48" y="26" width="96" height="10" rx="1.4" fill="#5e6577"/>
  <rect x="-46" y="16" width="96" height="10" rx="1.4" fill="#6d748a"/>
  <rect x="-48" y="6" width="96" height="10" rx="1.4" fill="#7c849b"/>
  <rect x="-45" y="-4" width="96" height="10" rx="1.4" fill="#8b93aa"/>
  <!-- the shadow the lifted card throws. One inch of gap, no more. -->
  <ellipse cx="-2" cy="-8" rx="48" ry="4.4" fill="#0a1020" opacity="0.35"/>
  <!-- the fourth card, lifted. Barely. Held level, not clutched. -->
  <g transform="translate(-2,-22) rotate(-4)">
    <rect x="-48" y="-6" width="96" height="11" rx="1.4" fill="#c3c9d6"/>
    <rect x="-48" y="-6" width="96" height="3" rx="1.4" fill="#e2e6ef" opacity="0.8"/>
    <g stroke="#3d4557" stroke-width="0.9" opacity="0.8">
      <line x1="-40" y1="-1.6" x2="10" y2="-1.6"/><line x1="-40" y1="1.8" x2="30" y2="1.8"/>
    </g>
    <!-- one word ringed on it. He is looking for a word. -->
    <ellipse cx="22" cy="0" rx="15" ry="4.6" fill="none" stroke="#3d4557" stroke-width="1.1" opacity="0.75"/>
  </g>
</g>
<!-- his hand at the lifted card. Two fingers. Nothing tense about it. -->
<g transform="translate(456,106)">
  <path d="M-32,26 Q-38,6 -24,-6 Q-6,-20 14,-16 Q30,-12 28,6 Q24,24 4,28 Z" fill="#05070e"/>
  <path d="M-24,24 Q-26,38 -14,40 Q-6,40 -6,26" fill="#05070e"/>
  <path d="M-4,27 Q-2,41 8,41 Q17,39 15,25" fill="#05070e"/>
  <path d="M-31,24 Q-36,8 -24,-4" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.5"/>
</g>
<!-- THE PENCIL. Still exactly parallel. He has not dropped it. Not yet. -->
<rect x="56" y="238" width="118" height="4.6" rx="2.3" fill="#F2C14E" opacity="0.9"/>
<rect x="170" y="238" width="7" height="4.6" rx="1.6" fill="#525f79"/>
<polygon points="56,238 44,240.3 56,242.6" fill="#6d7b96"/>
<ellipse cx="114" cy="244" rx="70" ry="5" fill="#F2C14E" opacity="0.07"/>
</svg>`;

// Mission 4: Mystic Peak. The ship's compass card on the table, turned slowly
// until it disagrees with the room. Off by eleven degrees, and they knew, and
// they steered around it, because a known error is just arithmetic.
STORY_SCENES['hidden_m4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomM4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidTableM4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#42506a"/><stop offset="100%" stop-color="#2c3849"/>
  </linearGradient>
  <radialGradient id="hidRoseM4" cx="42%" cy="36%" r="62%">
    <stop offset="0%" stop-color="#efeade"/><stop offset="70%" stop-color="#cec8b6"/><stop offset="100%" stop-color="#a49e8c"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoomM4)"/>
<!-- two small screens, one of them the peak -->
<rect x="20" y="10" width="76" height="46" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.6"/>
<rect x="23" y="13" width="70" height="40" fill="#16323a"/>
<rect x="23" y="38" width="70" height="15" fill="#1d3f49"/>
<path d="M23,38 L52,14 L82,38Z" fill="#0b1a20"/>
<rect x="404" y="10" width="76" height="46" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.6"/>
<rect x="407" y="13" width="70" height="40" fill="#16323a"/>
<rect x="407" y="34" width="70" height="19" fill="#1d3f49"/><rect x="407" y="33" width="70" height="1.4" fill="#7fc4d8" opacity="0.45"/>
<!-- table, lit -->
<rect x="0" y="66" width="500" height="194" fill="url(#hidTableM4)"/>
<rect x="0" y="66" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<!-- the grain, running true and level. This is the room's own north, and it
     is what the card is about to disagree with. -->
<g stroke="#5a6884" stroke-width="1.2" opacity="0.5">
  <line x1="0" y1="102" x2="500" y2="102"/><line x1="0" y1="150" x2="500" y2="150"/>
  <line x1="0" y1="200" x2="500" y2="200"/><line x1="0" y1="244" x2="500" y2="244"/>
</g>
<!-- THE COMPASS CARD. Turns eleven degrees off the grain, once, and stops. -->
<g transform="translate(250,162)">
  <animateTransform attributeName="transform" type="rotate" values="0;11" dur="4s" fill="freeze" additive="sum"/>
  <ellipse cx="4" cy="8" rx="72" ry="70" fill="#101a26" opacity="0.4"/>
  <circle cx="0" cy="0" r="70" fill="url(#hidRoseM4)"/>
  <circle cx="0" cy="0" r="70" fill="none" stroke="#6a6858" stroke-width="1.8"/>
  <circle cx="0" cy="0" r="62" fill="none" stroke="#6a6858" stroke-width="1" opacity="0.8"/>
  <!-- degree ticks -->
  <g stroke="#4a4838" stroke-width="1.4" opacity="0.8">
    <line x1="0" y1="-70" x2="0" y2="-61"/><line x1="0" y1="70" x2="0" y2="61"/>
    <line x1="-70" y1="0" x2="-61" y2="0"/><line x1="70" y1="0" x2="61" y2="0"/>
    <line x1="49" y1="-49" x2="43" y2="-43"/><line x1="-49" y1="-49" x2="-43" y2="-43"/>
    <line x1="49" y1="49" x2="43" y2="43"/><line x1="-49" y1="49" x2="-43" y2="43"/>
  </g>
  <g stroke="#4a4838" stroke-width="0.8" opacity="0.55">
    <line x1="24" y1="-65" x2="21" y2="-59"/><line x1="-24" y1="-65" x2="-21" y2="-59"/>
    <line x1="65" y1="-24" x2="59" y2="-21"/><line x1="65" y1="24" x2="59" y2="21"/>
    <line x1="24" y1="65" x2="21" y2="59"/><line x1="-24" y1="65" x2="-21" y2="59"/>
    <line x1="-65" y1="24" x2="-59" y2="21"/><line x1="-65" y1="-24" x2="-59" y2="-21"/>
  </g>
  <!-- the eight point rose, printed and worn -->
  <polygon points="0,-58 9,-9 0,0 -9,-9" fill="#2f2e24"/>
  <polygon points="0,58 9,9 0,0 -9,9" fill="#8d8877"/>
  <polygon points="58,0 9,9 0,0 9,-9" fill="#8d8877" opacity="0.85"/>
  <polygon points="-58,0 -9,9 0,0 -9,-9" fill="#8d8877" opacity="0.85"/>
  <polygon points="38,-38 7,-4 0,0 4,-7" fill="#b3ad9a"/>
  <polygon points="-38,-38 -7,-4 0,0 -4,-7" fill="#b3ad9a"/>
  <polygon points="38,38 7,4 0,0 4,7" fill="#b3ad9a" opacity="0.8"/>
  <polygon points="-38,38 -7,4 0,0 -4,7" fill="#b3ad9a" opacity="0.8"/>
  <circle cx="0" cy="0" r="5.5" fill="#2f2e24"/>
  <text x="0" y="-43" text-anchor="middle" font-family="serif" font-size="12" fill="#2f2e24">N</text>
  <!-- foxing, and a hairline crack, from being a floor tile for years -->
  <ellipse cx="-34" cy="26" rx="13" ry="9" fill="#9d9782" opacity="0.35"/>
  <ellipse cx="30" cy="-30" rx="10" ry="7" fill="#9d9782" opacity="0.28"/>
  <path d="M-52,-18 Q-30,-8 -6,-14" fill="none" stroke="#8d8877" stroke-width="0.9" opacity="0.6"/>
  <!-- mortar still stuck to the underside edge -->
  <path d="M-64,30 Q-56,42 -42,50" fill="none" stroke="#7c7666" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
</g>
<!-- THE ELEVEN DEGREES, drawn: the room's line and the card's line -->
<line x1="250" y1="88" x2="250" y2="150" stroke="#9fd4e4" stroke-width="1.2" opacity="0.4" stroke-dasharray="5 5"/>
<line x1="250" y1="162" x2="238" y2="90" stroke="#F2C14E" stroke-width="1.2" opacity="0.28" stroke-dasharray="5 5"/>
<!-- his hand on the rim, stopped turning it -->
<g transform="translate(178,240)">
  <path d="M0,20 Q-14,-8 6,-26 Q28,-46 58,-44 L90,-40 Q110,-33 106,-13 Q100,6 72,12 L22,20 Z" fill="#05070e"/>
  <path d="M14,-26 Q30,-44 54,-48 Q70,-50 72,-41 Q72,-32 56,-28" fill="#0b0f19"/>
  <path d="M26,-42 Q44,-48 62,-46" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.5"/>
</g>
<!-- the pencil, and it is STILL parallel. Mission four. It breaks at five. -->
<rect x="350" y="238" width="106" height="4.6" rx="2.3" fill="#F2C14E" opacity="0.9"/>
<rect x="452" y="238" width="7" height="4.6" rx="1.6" fill="#525f79"/>
<ellipse cx="404" cy="244" rx="64" ry="5" fill="#F2C14E" opacity="0.07"/>
<!-- the first three artifacts already on the table, squared -->
<g opacity="0.9">
  <path d="M28,110 Q52,102 76,110 Q98,118 122,110" fill="none" stroke="#5f5a4e" stroke-width="11" stroke-linecap="round"/>
  <path d="M28,110 Q52,102 76,110 Q98,118 122,110" fill="none" stroke="#8d8778" stroke-width="7" stroke-linecap="round"/>
  <circle cx="72" cy="174" r="24" fill="#22a97e" opacity="0.4"/>
  <circle cx="72" cy="174" r="24" fill="none" stroke="#7d7358" stroke-width="5"/>
  <rect x="28" y="208" width="90" height="38" rx="1" fill="#c9c7b4"/>
  <g stroke="#6a6858" stroke-width="0.9" opacity="0.7">
    <line x1="58" y1="208" x2="58" y2="246"/><line x1="88" y1="208" x2="88" y2="246"/>
  </g>
</g>
</svg>`;

// Mission 5: Liam's Lair, the tin. He takes it. He does not open it. And he
// does not square it with the edge of the table. The tidiness breaks HERE, and
// it does not come back: the tin is crooked, the pencil is where it fell, and
// the cards are out of true for the first time in the questline.
STORY_SCENES['hidden_m5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomM5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidTableM5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#42506a"/><stop offset="100%" stop-color="#2c3849"/>
  </linearGradient>
  <linearGradient id="hidTinM5" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#8fb0bc"/><stop offset="40%" stop-color="#4f717c"/><stop offset="100%" stop-color="#26383f"/>
  </linearGradient>
  <linearGradient id="hidScanM5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.18"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidRoomM5)"/>
<!-- THE NINE LITTLE SCREENS GO ON SHOWING THE ISLAND BEING FINE.
     All nine present, all on different horizons, all completely indifferent. -->
<g>
  <rect x="10" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="13" y="11" width="46" height="28" fill="#16323a"/><rect x="13" y="30" width="46" height="9" fill="#1d3f49"/><rect x="13" y="29" width="46" height="1.3" fill="#7fc4d8" opacity="0.5"/>
  <rect x="68" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="71" y="11" width="46" height="28" fill="#16323a"/><rect x="71" y="24" width="46" height="15" fill="#1d3f49"/><rect x="71" y="23" width="46" height="1.3" fill="#7fc4d8" opacity="0.45"/>
  <rect x="126" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="129" y="11" width="46" height="28" fill="#16323a"/><rect x="129" y="34" width="46" height="5" fill="#1d3f49"/><rect x="129" y="33" width="46" height="1.3" fill="#7fc4d8" opacity="0.4"/>
  <rect x="184" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="187" y="11" width="46" height="28" fill="#16323a"/><rect x="187" y="27" width="46" height="12" fill="#1d3f49"/><rect x="187" y="26" width="46" height="1.3" fill="#7fc4d8" opacity="0.48"/>
  <rect x="264" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="267" y="11" width="46" height="28" fill="#16323a"/><rect x="267" y="20" width="46" height="19" fill="#1d3f49"/><rect x="267" y="19" width="46" height="1.3" fill="#7fc4d8" opacity="0.42"/>
  <rect x="322" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="325" y="11" width="46" height="28" fill="#16323a"/><rect x="325" y="32" width="46" height="7" fill="#1d3f49"/><rect x="325" y="31" width="46" height="1.3" fill="#7fc4d8" opacity="0.5"/>
  <rect x="380" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="383" y="11" width="46" height="28" fill="#16323a"/><rect x="383" y="26" width="46" height="13" fill="#1d3f49"/><rect x="383" y="25" width="46" height="1.3" fill="#7fc4d8" opacity="0.44"/>
  <rect x="438" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="441" y="11" width="46" height="28" fill="#16323a"/><rect x="441" y="22" width="46" height="17" fill="#1d3f49"/><rect x="441" y="21" width="46" height="1.3" fill="#7fc4d8" opacity="0.4"/>
  <!-- and the ninth, narrow between them: water, and the lamp -->
  <rect x="242" y="8" width="18" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="244" y="11" width="14" height="28" fill="#16323a"/>
  <circle cx="251" cy="31" r="1.8" fill="#F2C14E"><animate attributeName="opacity" values="0.55;1;0.55" dur="8s" repeatCount="indefinite"/></circle>
  <rect x="10" y="8" width="480" height="7" fill="url(#hidScanM5)">
    <animate attributeName="y" values="2;42" dur="9s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- table, lit -->
<rect x="0" y="82" width="500" height="178" fill="url(#hidTableM5)"/>
<rect x="0" y="82" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<g stroke="#5a6884" stroke-width="1.2" opacity="0.45">
  <line x1="0" y1="120" x2="500" y2="120"/><line x1="0" y1="176" x2="500" y2="176"/><line x1="0" y1="234" x2="500" y2="234"/>
</g>
<!-- THE TIN. A tin that once held boiled sweets. Put down CROOKED, nine
     degrees off the table edge, and he did not fix it. -->
<g transform="translate(240,164) rotate(-9)">
  <rect x="-64" y="-38" width="132" height="80" rx="7" fill="#101a26" opacity="0.45"/>
  <rect x="-70" y="-44" width="132" height="80" rx="7" fill="url(#hidTinM5)"/>
  <rect x="-70" y="-44" width="132" height="80" rx="7" fill="none" stroke="#b9d4de" stroke-width="1.6" opacity="0.6"/>
  <!-- the lid seam, still shut -->
  <rect x="-65" y="-39" width="122" height="70" rx="5" fill="none" stroke="#20323a" stroke-width="2"/>
  <!-- printed sweet-tin lettering, worn past reading -->
  <ellipse cx="-4" cy="-4" rx="42" ry="22" fill="none" stroke="#d3e6ed" stroke-width="1.6" opacity="0.4"/>
  <ellipse cx="-4" cy="-4" rx="36" ry="17" fill="none" stroke="#d3e6ed" stroke-width="0.9" opacity="0.28"/>
  <g stroke="#e2f0f5" stroke-width="2" opacity="0.35" stroke-linecap="round">
    <line x1="-28" y1="-8" x2="-16" y2="-8"/><line x1="-10" y1="-8" x2="4" y2="-8"/><line x1="10" y1="-8" x2="20" y2="-8"/>
    <line x1="-20" y1="2" x2="-6" y2="2"/><line x1="0" y1="2" x2="14" y2="2"/>
  </g>
  <!-- rust freckles, and a dent -->
  <circle cx="-52" cy="22" r="3.4" fill="#8a5c38" opacity="0.5"/>
  <circle cx="42" cy="-30" r="2.6" fill="#8a5c38" opacity="0.42"/>
  <circle cx="30" cy="26" r="2" fill="#8a5c38" opacity="0.38"/>
  <path d="M-58,-28 Q-50,-22 -56,-14" fill="none" stroke="#20323a" stroke-width="2.4" opacity="0.6"/>
  <!-- hard specular along the lid, so it reads as tin -->
  <path d="M-62,-38 L44,-38" stroke="#eaf5f9" stroke-width="2" opacity="0.4"/>
</g>
<!-- his hands: put it down, and let go. Both, open, withdrawing. -->
<g transform="translate(88,206)">
  <path d="M0,26 Q-10,2 6,-14 Q24,-30 50,-28 L76,-24 Q92,-18 88,-2 Q82,14 58,20 L20,26 Z" fill="#05070e"/>
  <path d="M52,-27 Q64,-36 76,-32" fill="none" stroke="#05070e" stroke-width="9" stroke-linecap="round"/>
  <path d="M0,24 Q-8,2 6,-12" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.45"/>
</g>
<g transform="translate(412,206) scale(-1,1)">
  <path d="M0,26 Q-10,2 6,-14 Q24,-30 50,-28 L76,-24 Q92,-18 88,-2 Q82,14 58,20 L20,26 Z" fill="#05070e"/>
  <path d="M52,-27 Q64,-36 76,-32" fill="none" stroke="#05070e" stroke-width="9" stroke-linecap="round"/>
  <path d="M0,24 Q-8,2 6,-12" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.45"/>
</g>
<!-- THE PENCIL, WHERE IT FELL. Not parallel to anything. This is the break,
     and it holds for the whole of the rest of the questline. -->
<g transform="translate(398,112) rotate(37)">
  <rect x="0" y="0" width="90" height="4.6" rx="2.3" fill="#F2C14E" opacity="0.9"/>
  <rect x="86" y="0" width="6" height="4.6" rx="1.6" fill="#525f79"/>
  <polygon points="0,0 -12,2.3 0,4.6" fill="#6d7b96"/>
</g>
<!-- the cards, unsquared for the first time -->
<g transform="translate(58,120)">
  <rect x="0" y="20" width="66" height="9" rx="1.3" fill="#5e6577" transform="rotate(3,33,24)"/>
  <rect x="5" y="10" width="66" height="9" rx="1.3" fill="#6d748a" transform="rotate(-7,38,14)"/>
  <rect x="-2" y="0" width="66" height="9" rx="1.3" fill="#7c849b" transform="rotate(2,31,4)"/>
  <rect x="7" y="-10" width="66" height="9" rx="1.3" fill="#8b93aa" transform="rotate(-4,40,-6)"/>
</g>
</svg>`;

// ---------------------------------------------------------------------------
// THE ENDING — hidden_end_0 .. hidden_end_16
// Maps to script steps E1..E18 (E17 and E18 share a frame, aliased).
//
// The palette turns over here. At the wreck the amber is REAL and it is
// everywhere, because that is where the lamp actually is: Fredward lives
// inside the one warm thing Canon can only watch. Then the last frame puts it
// back on a screen, cold room around it, and nothing moves.
//
// Fredward is not Canon. His face may be drawn. Canon's may not, ever.
// ---------------------------------------------------------------------------

// E1: The five artifacts laid out in a row on Canon's table, in the order they
// came: rope, lens, page, compass card, tin. Squared, because he squared them.
STORY_SCENES['hidden_end_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomE0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidTableE0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#45536e"/><stop offset="100%" stop-color="#2c3849"/>
  </linearGradient>
  <linearGradient id="hidScanE0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.18"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="hidLampE0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.85"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.22"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <clipPath id="hidBigClipE0"><rect x="164" y="10" width="172" height="62" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomE0)"/>
<!-- the big screen up top, the wreck still on it -->
<rect x="160" y="6" width="180" height="70" rx="3" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClipE0)">
  <rect x="164" y="10" width="172" height="62" fill="#1d3f49"/>
  <path d="M164,32 Q206,28 250,32 Q294,36 336,32 L336,42 Q294,46 250,42 Q206,38 164,42Z" fill="#2b6070" opacity="0.5"/>
  <path d="M182,72 Q196,56 226,53 L296,56 Q312,62 310,72 Z" fill="#061019"/>
  <circle cx="286" cy="60" r="15" fill="url(#hidLampE0)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.34" dur="8s" repeatCount="indefinite"/></circle>
  <circle cx="286" cy="60" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.74" dur="8s" repeatCount="indefinite"/></circle>
  <rect x="164" y="10" width="172" height="12" fill="url(#hidScanE0)"><animate attributeName="y" values="0;76" dur="6.5s" repeatCount="indefinite"/></rect>
</g>
<!-- table, lit, filling the frame -->
<rect x="0" y="88" width="500" height="172" fill="url(#hidTableE0)"/>
<rect x="0" y="88" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<!-- ONE ALIGNMENT LINE. He squared them, so they all sit on it. -->
<line x1="16" y1="196" x2="484" y2="196" stroke="#7fc4d8" stroke-width="0.6" opacity="0.12"/>
<!-- 1. THE ROPE -->
<g transform="translate(58,166)">
  <path d="M-34,32 Q0,38 34,32" fill="none" stroke="#101a26" stroke-width="16" opacity="0.3" stroke-linecap="round"/>
  <path d="M-34,24 Q-16,16 2,24 Q20,32 34,24" fill="none" stroke="#2f2c26" stroke-width="17" stroke-linecap="round"/>
  <path d="M-34,24 Q-16,16 2,24 Q20,32 34,24" fill="none" stroke="#8d8778" stroke-width="13" stroke-linecap="round"/>
  <g stroke="#3b382f" stroke-width="2" opacity="0.6" stroke-linecap="round">
    <line x1="-24" y1="17" x2="-18" y2="29"/><line x1="-8" y1="18" x2="-2" y2="30"/><line x1="10" y1="20" x2="16" y2="32"/>
  </g>
  <!-- the double splice, left -->
  <path d="M-34,20 Q-46,17 -54,22" fill="none" stroke="#8d8778" stroke-width="8" stroke-linecap="round"/>
  <path d="M-34,28 Q-48,31 -56,26" fill="none" stroke="#a49d8b" stroke-width="6" stroke-linecap="round"/>
  <!-- cut clean, right -->
  <ellipse cx="36" cy="24" rx="4" ry="7.4" fill="#a49d8b"/>
</g>
<!-- 2. THE LENS -->
<g transform="translate(158,168)">
  <ellipse cx="2" cy="30" rx="30" ry="9" fill="#101a26" opacity="0.35"/>
  <circle cx="0" cy="22" r="28" fill="#22a97e" opacity="0.45"/>
  <circle cx="0" cy="22" r="28" fill="none" stroke="#7d7358" stroke-width="6"/>
  <circle cx="0" cy="22" r="28" fill="none" stroke="#c3b489" stroke-width="2.2" opacity="0.7"/>
  <g fill="none" stroke="#9ff2cd" stroke-width="0.8" opacity="0.35">
    <circle cx="0" cy="22" r="20"/><circle cx="0" cy="22" r="12"/><circle cx="0" cy="22" r="5"/>
  </g>
  <path d="M-20,8 Q-28,20 -24,34" fill="none" stroke="#f0e3b8" stroke-width="2.4" opacity="0.65" stroke-linecap="round"/>
</g>
<!-- 3. THE LEDGER PAGE, folded back into eighths along the same creases -->
<g transform="translate(250,170)">
  <rect x="-28" y="0" width="58" height="46" rx="1" fill="#101a26" opacity="0.35"/>
  <rect x="-32" y="-4" width="58" height="46" rx="1" fill="#d8d6c2"/>
  <g stroke="#8d8b78" stroke-width="1" opacity="0.7">
    <line x1="-3" y1="-4" x2="-3" y2="42"/><line x1="-32" y1="19" x2="26" y2="19"/>
  </g>
  <g stroke="#3b3a30" stroke-width="0.9" opacity="0.6" stroke-linecap="round">
    <line x1="-26" y1="4" x2="-10" y2="4"/><line x1="4" y1="4" x2="20" y2="4"/>
    <line x1="-26" y1="10" x2="-14" y2="10"/><line x1="4" y1="10" x2="18" y2="10"/>
    <line x1="-26" y1="26" x2="-12" y2="26"/><line x1="4" y1="26" x2="20" y2="26"/>
    <line x1="-26" y1="32" x2="-16" y2="32"/><line x1="4" y1="32" x2="16" y2="32"/>
  </g>
</g>
<!-- 4. THE COMPASS CARD, still eleven degrees off everything -->
<g transform="translate(348,170) rotate(11)">
  <ellipse cx="2" cy="24" rx="28" ry="26" fill="#101a26" opacity="0.35"/>
  <circle cx="0" cy="20" r="26" fill="#cec8b6"/>
  <circle cx="0" cy="20" r="26" fill="none" stroke="#6a6858" stroke-width="1.4"/>
  <polygon points="0,-2 3.4,17 0,20 -3.4,17" fill="#2f2e24"/>
  <polygon points="0,42 3.4,23 0,20 -3.4,23" fill="#8d8877"/>
  <polygon points="22,20 3.4,23 0,20 3.4,17" fill="#8d8877" opacity="0.85"/>
  <polygon points="-22,20 -3.4,23 0,20 -3.4,17" fill="#8d8877" opacity="0.85"/>
  <circle cx="0" cy="20" r="2.4" fill="#2f2e24"/>
  <text x="0" y="8" text-anchor="middle" font-family="serif" font-size="7" fill="#2f2e24">N</text>
</g>
<!-- 5. THE TIN, and even here it is very slightly out of true -->
<g transform="translate(444,172) rotate(-3)">
  <rect x="-32" y="4" width="62" height="40" rx="4" fill="#101a26" opacity="0.4"/>
  <rect x="-36" y="0" width="62" height="40" rx="4" fill="#4f717c"/>
  <rect x="-36" y="0" width="62" height="40" rx="4" fill="none" stroke="#b9d4de" stroke-width="1.4" opacity="0.55"/>
  <ellipse cx="-5" cy="20" rx="20" ry="11" fill="none" stroke="#d3e6ed" stroke-width="1.2" opacity="0.35"/>
  <path d="M-32,2 L20,2" stroke="#eaf5f9" stroke-width="1.6" opacity="0.4"/>
  <circle cx="-26" cy="32" r="2.2" fill="#8a5c38" opacity="0.5"/>
</g>
<!-- the pencil is STILL where it fell. He never squared it again. -->
<g transform="translate(60,232) rotate(29)">
  <rect x="0" y="0" width="82" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.88"/>
  <rect x="78" y="0" width="6" height="4.4" rx="1.6" fill="#525f79"/>
</g>
<!-- Canon from behind at the edge of frame, looking down the row -->
<g transform="translate(-10,150)">
  <path d="M-40,110 Q-34,50 4,34 Q26,28 42,42 Q58,62 62,110 Z" fill="#05070e"/>
  <circle cx="16" cy="16" r="19" fill="#05070e"/>
  <path d="M-3,14 Q3,-6 16,-4 Q30,-6 35,14" fill="#0b0f19"/>
  <path d="M-38,102 Q-32,52 2,36" fill="none" stroke="#5fa0b8" stroke-width="5" opacity="0.2"/>
  <path d="M-38,102 Q-32,52 2,36" fill="none" stroke="#9fd4e4" stroke-width="1.8" opacity="0.75"/>
</g>
</svg>`;

// E2: "Here is the whole of my plan, and I would like you to hear how thin it
// is." He does not sit down for this. Canon standing, from behind, the big
// screen in front of him. Four years, and that is what he has got.
STORY_SCENES['hidden_end_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomE1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidBigE1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#26505c"/><stop offset="45%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0b1a22"/>
  </linearGradient>
  <radialGradient id="hidLampE1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.9"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.26"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScanE1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.2"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClipE1"><rect x="76" y="14" width="348" height="176" rx="4"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomE1)"/>
<rect x="72" y="10" width="356" height="184" rx="5" fill="#1e2637" stroke="#4a5770" stroke-width="3"/>
<g clip-path="url(#hidBigClipE1)">
  <rect x="76" y="14" width="348" height="176" fill="url(#hidBigE1)"/>
  <path d="M76,62 Q162,55 250,62 Q338,69 424,62 L424,78 Q338,85 250,78 Q162,71 76,78Z" fill="#2b6070" opacity="0.5">
    <animate attributeName="d" values="M76,62 Q162,55 250,62 Q338,69 424,62 L424,78 Q338,85 250,78 Q162,71 76,78Z;M76,66 Q162,59 250,66 Q338,73 424,66 L424,82 Q338,89 250,82 Q162,75 76,82Z;M76,62 Q162,55 250,62 Q338,69 424,62 L424,78 Q338,85 250,78 Q162,71 76,78Z" dur="12s" repeatCount="indefinite"/>
  </path>
  <circle cx="120" cy="150" r="1.4" fill="#7fc4d8" opacity="0.2"><animate attributeName="cy" values="150;30" dur="24s" repeatCount="indefinite"/></circle>
  <circle cx="330" cy="170" r="1.6" fill="#7fc4d8" opacity="0.16"><animate attributeName="cy" values="170;34" dur="28s" repeatCount="indefinite" begin="7s"/></circle>
  <path d="M108,190 Q128,150 186,142 L322,146 Q374,156 372,190 Z" fill="#061019"/>
  <path d="M234,142 L224,86 L242,84 L252,142Z" fill="#061019"/>
  <circle cx="330" cy="158" r="44" fill="url(#hidLampE1)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.56;0.3" dur="8s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="330" cy="158" rx="3.4" ry="4.4" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.78" dur="8s" repeatCount="indefinite"/></ellipse>
  <rect x="76" y="14" width="348" height="24" fill="url(#hidScanE1)">
    <animate attributeName="y" values="-6;194" dur="7s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- floor, lit by the screen -->
<rect x="0" y="194" width="500" height="66" fill="#101c2c"/>
<path d="M72,194 L428,194 L500,260 L0,260 Z" fill="#16323a" opacity="0.4"/>
<path d="M140,194 L360,194 L420,260 L80,260 Z" fill="#5fa0b8" opacity="0.07"/>
<!-- CANON STANDING. He does not sit down for this. Full height, from behind,
     near-black against the bright screen. This is his biggest silhouette. -->
<g transform="translate(216,60)">
  <path d="M-30,200 Q-32,110 -22,72 Q-12,52 2,50 Q18,52 28,72 Q38,110 36,200 Z" fill="#05070e"/>
  <circle cx="3" cy="30" r="20" fill="#05070e"/>
  <path d="M-17,28 Q-11,4 3,6 Q17,4 23,28" fill="#0b0f19"/>
  <rect x="-6" y="46" width="18" height="12" fill="#05070e"/>
  <!-- arms down, hands empty. There is nothing in them. -->
  <path d="M-26,86 Q-38,130 -36,168" fill="none" stroke="#05070e" stroke-width="15" stroke-linecap="round"/>
  <path d="M32,86 Q44,130 42,168" fill="none" stroke="#05070e" stroke-width="15" stroke-linecap="round"/>
  <!-- the rim, hard: he is standing in front of a lit screen -->
  <path d="M-29,196 Q-31,112 -22,74 Q-14,56 0,51" fill="none" stroke="#5fa0b8" stroke-width="6" opacity="0.2"/>
  <path d="M-29,196 Q-31,112 -22,74 Q-14,56 0,51" fill="none" stroke="#9fd4e4" stroke-width="2" opacity="0.8"/>
  <path d="M-17,20 Q-21,32 -18,44" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.65"/>
  <path d="M-37,120 Q-40,146 -37,166" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.55"/>
</g>
<!-- the empty second chair, pushed back, still there -->
<g transform="translate(410,196) rotate(-16)">
  <rect x="-26" y="-4" width="52" height="52" rx="4" fill="#2e3849"/>
  <rect x="-26" y="-4" width="52" height="4" rx="2" fill="#5b6a86"/>
  <rect x="-24" y="46" width="6" height="34" fill="#28313f"/>
  <rect x="19" y="46" width="6" height="34" fill="#28313f"/>
</g>
</svg>`;

// E3: the choice. "You are going down there, because you are the one he makes
// tea for, and I am the one he walks back to the rope." Reuses E2's frame.
STORY_SCENES['hidden_end_2'] = STORY_SCENES['hidden_end_1'];

// E4: Down is colder than it looks from a screen. THE WRECK DECK: Fredward at
// his ledger, sleeves rolled, lamps lit, ruling a fresh column with a straight
// edge. Warm. The amber is real here and it is the whole room.
STORY_SCENES['hidden_end_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="55%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE3" cx="52%" cy="56%" r="60%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.34"/><stop offset="45%" stop-color="#c98b34" stop-opacity="0.13"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.35"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidDeckE3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6b5330"/><stop offset="100%" stop-color="#3a2c19"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE3)"/>
<!-- the water above, and the cold outside the lamplight -->
<path d="M0,30 Q80,22 160,30 Q240,38 320,30 Q400,22 500,30 L500,44 Q400,52 320,44 Q240,36 160,44 Q80,52 0,44Z" fill="#164450" opacity="0.4">
  <animate attributeName="d" values="M0,30 Q80,22 160,30 Q240,38 320,30 Q400,22 500,30 L500,44 Q400,52 320,44 Q240,36 160,44 Q80,52 0,44Z;M0,34 Q80,26 160,34 Q240,42 320,34 Q400,26 500,34 L500,48 Q400,56 320,48 Q240,40 160,48 Q80,56 0,48Z;M0,30 Q80,22 160,30 Q240,38 320,30 Q400,22 500,30 L500,44 Q400,52 320,44 Q240,36 160,44 Q80,52 0,44Z" dur="13s" repeatCount="indefinite"/>
</path>
<!-- silt drifting up -->
<circle cx="60" cy="200" r="1.4" fill="#7fc4d8" opacity="0.16"><animate attributeName="cy" values="200;40" dur="26s" repeatCount="indefinite"/></circle>
<circle cx="440" cy="220" r="1.6" fill="#7fc4d8" opacity="0.14"><animate attributeName="cy" values="220;36" dur="30s" repeatCount="indefinite" begin="9s"/></circle>
<!-- the warm room the lamps make, which is the whole of Fredward's world -->
<rect width="500" height="260" fill="url(#hidWarmE3)"/>
<!-- hull ribs arching over, the old ship still around him -->
<g fill="none" stroke="#2a1f12" stroke-width="9" opacity="0.85">
  <path d="M-10,208 Q30,90 120,58"/><path d="M510,208 Q470,90 380,58"/>
</g>
<g fill="none" stroke="#4a3822" stroke-width="3" opacity="0.5">
  <path d="M-6,206 Q34,92 122,62"/><path d="M506,206 Q466,92 378,62"/>
</g>
<!-- THE DECK -->
<rect x="0" y="198" width="500" height="62" fill="url(#hidDeckE3)"/>
<g stroke="#2a1f12" stroke-width="1.4" opacity="0.6">
  <line x1="0" y1="212" x2="500" y2="212"/><line x1="0" y1="230" x2="500" y2="230"/><line x1="0" y1="248" x2="500" y2="248"/>
</g>
<!-- THE RAIL of what used to be a deck, behind him -->
<g stroke="#3a2c19" stroke-width="5" stroke-linecap="round">
  <line x1="40" y1="150" x2="40" y2="198"/><line x1="120" y1="150" x2="120" y2="198"/>
  <line x1="380" y1="150" x2="380" y2="198"/><line x1="460" y1="150" x2="460" y2="198"/>
</g>
<line x1="30" y1="152" x2="470" y2="152" stroke="#4a3822" stroke-width="4" stroke-linecap="round"/>
<!-- THE LAMPS ALONG THE RAIL. They are always lit. -->
<g>
  <rect x="34" y="128" width="13" height="18" rx="2.5" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="36.5" y="131" width="8" height="12" fill="#ffe9a8" opacity="0.9"><animate attributeName="opacity" values="0.72;1;0.82;0.95;0.72" dur="3.4s" repeatCount="indefinite"/></rect>
  <circle cx="40.5" cy="137" r="42" fill="url(#hidLantE3)" opacity="0.42"><animate attributeName="opacity" values="0.3;0.5;0.36;0.46;0.3" dur="3.4s" repeatCount="indefinite"/></circle>
  <rect x="454" y="128" width="13" height="18" rx="2.5" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="456.5" y="131" width="8" height="12" fill="#ffe9a8" opacity="0.85"><animate attributeName="opacity" values="0.68;1;0.78;0.92;0.68" dur="3.9s" repeatCount="indefinite" begin="1.2s"/></rect>
  <circle cx="460.5" cy="137" r="40" fill="url(#hidLantE3)" opacity="0.4"><animate attributeName="opacity" values="0.28;0.48;0.34;0.44;0.28" dur="3.9s" repeatCount="indefinite" begin="1.2s"/></circle>
</g>
<!-- the lamp over the table, the one Canon watches on a screen -->
<line x1="250" y1="0" x2="250" y2="34" stroke="#3a2c19" stroke-width="2.4"/>
<rect x="240" y="34" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="38" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.78;1;0.86;0.96;0.78" dur="3.1s" repeatCount="indefinite"/></rect>
<circle cx="250" cy="47" r="92" fill="url(#hidLantE3)" opacity="0.42"><animate attributeName="opacity" values="0.32;0.5;0.38;0.47;0.32" dur="3.1s" repeatCount="indefinite"/></circle>
<!-- THE TABLE -->
<rect x="120" y="176" width="270" height="10" rx="3" fill="#5c4526"/>
<rect x="120" y="176" width="270" height="3.4" rx="1.7" fill="#9d7c40" opacity="0.7"/>
<rect x="140" y="186" width="9" height="40" fill="#3a2c19"/>
<rect x="362" y="186" width="9" height="40" fill="#3a2c19"/>
<!-- THE LEDGER, open, hundreds of pages of it, ruled by hand -->
<g transform="translate(258,158)">
  <rect x="-64" y="-4" width="128" height="22" rx="2" fill="#3a2c19" opacity="0.5"/>
  <rect x="-66" y="-22" width="130" height="22" rx="1" fill="#e8dcbc"/>
  <rect x="-66" y="-22" width="130" height="3" fill="#f6eed6"/>
  <line x1="-1" y1="-22" x2="-1" y2="0" stroke="#b8a882" stroke-width="1.4"/>
  <g stroke="#8a7a56" stroke-width="0.8" opacity="0.8">
    <line x1="-58" y1="-16" x2="-8" y2="-16"/><line x1="-58" y1="-11" x2="-8" y2="-11"/><line x1="-58" y1="-6" x2="-8" y2="-6"/>
    <line x1="6" y1="-16" x2="56" y2="-16"/><line x1="6" y1="-11" x2="56" y2="-11"/>
  </g>
  <!-- the fresh column, being ruled now -->
  <line x1="28" y1="-21" x2="28" y2="-1" stroke="#4a3822" stroke-width="1.1"/>
</g>
<!-- the straight edge in his hand -->
<rect x="272" y="140" width="76" height="4" rx="1" fill="#8a6a35"/>
<rect x="272" y="140" width="76" height="1.4" rx="0.7" fill="#d6b06a" opacity="0.7"/>
<!-- FREDWARD. An old fashioned brass suited diver, sleeves rolled, at work.
     He is warm and he is fine and that is the whole problem. -->
<g transform="translate(228,116)">
  <!-- the brass helmet, off, set on the table beside him -->
  <g transform="translate(122,44)">
    <circle cx="0" cy="0" r="20" fill="#8a6a35"/>
    <circle cx="0" cy="0" r="20" fill="none" stroke="#c49a4c" stroke-width="2.4"/>
    <circle cx="-3" cy="-2" r="10" fill="#3d3320"/>
    <circle cx="-6" cy="-6" r="3.4" fill="#ffe9a8" opacity="0.65"/>
    <rect x="-16" y="17" width="32" height="7" rx="2" fill="#6d5228"/>
    <g fill="#c49a4c" opacity="0.8">
      <circle cx="-16" cy="-10" r="1.8"/><circle cx="16" cy="-10" r="1.8"/><circle cx="-16" cy="10" r="1.8"/><circle cx="16" cy="10" r="1.8"/>
    </g>
  </g>
  <!-- body: the canvas suit, sleeves rolled to the elbow -->
  <path d="M-34,96 Q-36,44 -22,26 Q-8,16 6,20 Q22,28 28,50 Q34,74 32,96 Z" fill="#6b6350"/>
  <path d="M-34,96 Q-36,44 -22,26 Q-8,16 6,20 Q22,28 28,50 Q34,74 32,96 Z" fill="#8a8168" opacity="0.5"/>
  <!-- the rolled cuffs -->
  <rect x="-38" y="56" width="16" height="9" rx="3" fill="#a89d7e"/>
  <rect x="24" y="52" width="16" height="9" rx="3" fill="#a89d7e"/>
  <!-- forearms, bare, working -->
  <path d="M-30,64 Q-14,76 8,80" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <path d="M32,60 Q46,68 58,76" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <!-- hands: one on the straight edge, one steadying the page -->
  <ellipse cx="12" cy="82" rx="10" ry="7" fill="#c39a72"/>
  <ellipse cx="62" cy="78" rx="10" ry="7" fill="#c39a72" transform="rotate(-14,62,78)"/>
  <!-- head, DOWN at the ledger. Face is allowed here: he is not Canon. -->
  <circle cx="-2" cy="0" r="17" fill="#c39a72"/>
  <path d="M-19,-4 Q-14,-20 -2,-18 Q11,-20 15,-4" fill="#5a4a34"/>
  <!-- brow and the line of a nose, seen from three quarters, looking down -->
  <path d="M-14,4 Q-10,2 -6,4" fill="none" stroke="#8a6748" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M2,2 Q6,8 2,11" fill="none" stroke="#8a6748" stroke-width="1.4" stroke-linecap="round"/>
  <!-- the moustache, and a mouth that is not doing anything in particular -->
  <path d="M-6,13 Q-1,15 6,12" fill="none" stroke="#5a4a34" stroke-width="2.6" stroke-linecap="round"/>
  <!-- warm key on the near cheek, from the lamp above -->
  <path d="M-16,-6 Q-19,4 -14,12" fill="none" stroke="#ffe0a0" stroke-width="2" opacity="0.6"/>
  <rect x="-8" y="16" width="14" height="10" fill="#c39a72"/>
</g>
<!-- the crab, which does not move -->
<g transform="translate(408,222)">
  <ellipse cx="0" cy="0" rx="11" ry="7" fill="#8a3b2a"/>
  <ellipse cx="0" cy="-1.6" rx="8" ry="4.4" fill="#b0503a" opacity="0.7"/>
  <g stroke="#8a3b2a" stroke-width="2" stroke-linecap="round">
    <line x1="-11" y1="1" x2="-18" y2="5"/><line x1="11" y1="1" x2="18" y2="5"/>
    <line x1="-9" y1="4" x2="-15" y2="9"/><line x1="9" y1="4" x2="15" y2="9"/>
  </g>
  <path d="M-11,-4 Q-18,-8 -21,-3" fill="none" stroke="#8a3b2a" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M11,-4 Q18,-8 21,-3" fill="none" stroke="#8a3b2a" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="-3.4" cy="-5" r="1.4" fill="#1a0c08"/><circle cx="3.4" cy="-5" r="1.4" fill="#1a0c08"/>
</g>
<!-- the tea, because there is always tea -->
<g transform="translate(158,168)">
  <path d="M-9,0 L9,0 L7,12 L-7,12 Z" fill="#d8cdb4"/>
  <ellipse cx="0" cy="0" rx="9" ry="3" fill="#7a5a34"/>
  <path d="M9,3 Q15,5 12,9" fill="none" stroke="#d8cdb4" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="0" cy="13" rx="11" ry="3" fill="#c9bda2"/>
  <path d="M-2,-4 Q1,-11 -1,-18" fill="none" stroke="#ffe9a8" stroke-width="1.4" opacity="0.3">
    <animate attributeName="opacity" values="0.14;0.34;0.14" dur="5s" repeatCount="indefinite"/>
  </path>
</g>
</svg>`;

// E5: He goes quiet in stages. Near the end of the third page he puts one hand
// FLAT ON THE TABLE, the way you do on a boat. Four pages in front of him.
// Held longer than the beat before it: nothing in this frame moves but the lamp.
STORY_SCENES['hidden_end_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="60%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE4" cx="50%" cy="46%" r="58%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.36"/><stop offset="45%" stop-color="#c98b34" stop-opacity="0.14"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.34"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE4)"/>
<rect width="500" height="260" fill="url(#hidWarmE4)"/>
<!-- the lamp above, the only thing in this frame that moves -->
<line x1="250" y1="0" x2="250" y2="20" stroke="#3a2c19" stroke-width="2.4"/>
<rect x="240" y="20" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="24" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.2s" repeatCount="indefinite"/></rect>
<circle cx="250" cy="33" r="110" fill="url(#hidLantE4)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.48;0.36;0.45;0.3" dur="3.2s" repeatCount="indefinite"/></circle>
<!-- THE TABLE, close, filling the lower frame. Warm wood. -->
<rect x="0" y="128" width="500" height="132" fill="#5c4526"/>
<rect x="0" y="128" width="500" height="5" rx="2.5" fill="#a5813f" opacity="0.75"/>
<g stroke="#3a2c19" stroke-width="1.4" opacity="0.5">
  <line x1="0" y1="160" x2="500" y2="160"/><line x1="0" y1="200" x2="500" y2="200"/><line x1="0" y1="240" x2="500" y2="240"/>
</g>
<!-- FOUR PAGES, in the same half familiar hand, spread in front of him -->
<g>
  <g transform="translate(146,178) rotate(-6)">
    <rect x="-38" y="-46" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.35"/>
    <rect x="-40" y="-48" width="76" height="94" rx="1" fill="#f2e9cd"/>
    <g stroke="#6a5a3a" stroke-width="0.9" opacity="0.65" stroke-linecap="round">
      <line x1="-32" y1="-38" x2="24" y2="-38"/><line x1="-32" y1="-30" x2="28" y2="-30"/><line x1="-32" y1="-22" x2="18" y2="-22"/>
      <line x1="-32" y1="-14" x2="26" y2="-14"/><line x1="-32" y1="-6" x2="20" y2="-6"/><line x1="-32" y1="2" x2="28" y2="2"/>
      <line x1="-32" y1="10" x2="14" y2="10"/><line x1="-32" y1="18" x2="24" y2="18"/><line x1="-32" y1="26" x2="22" y2="26"/>
    </g>
  </g>
  <g transform="translate(234,174) rotate(2)">
    <rect x="-38" y="-46" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.35"/>
    <rect x="-40" y="-48" width="76" height="94" rx="1" fill="#f2e9cd"/>
    <g stroke="#6a5a3a" stroke-width="0.9" opacity="0.65" stroke-linecap="round">
      <line x1="-32" y1="-38" x2="26" y2="-38"/><line x1="-32" y1="-30" x2="18" y2="-30"/><line x1="-32" y1="-22" x2="28" y2="-22"/>
      <line x1="-32" y1="-14" x2="20" y2="-14"/><line x1="-32" y1="-6" x2="26" y2="-6"/><line x1="-32" y1="2" x2="16" y2="2"/>
      <line x1="-32" y1="10" x2="28" y2="10"/><line x1="-32" y1="18" x2="20" y2="18"/><line x1="-32" y1="26" x2="26" y2="26"/>
    </g>
  </g>
  <g transform="translate(322,178) rotate(-3)">
    <rect x="-38" y="-46" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.35"/>
    <rect x="-40" y="-48" width="76" height="94" rx="1" fill="#f2e9cd"/>
    <g stroke="#6a5a3a" stroke-width="0.9" opacity="0.65" stroke-linecap="round">
      <line x1="-32" y1="-38" x2="20" y2="-38"/><line x1="-32" y1="-30" x2="28" y2="-30"/><line x1="-32" y1="-22" x2="22" y2="-22"/>
      <line x1="-32" y1="-14" x2="26" y2="-14"/><line x1="-32" y1="-6" x2="16" y2="-6"/><line x1="-32" y1="2" x2="28" y2="2"/>
      <line x1="-32" y1="10" x2="22" y2="10"/><line x1="-32" y1="18" x2="18" y2="18"/>
    </g>
    <!-- near the end of the third page. This is where his hand went down. -->
  </g>
  <g transform="translate(408,176) rotate(5)">
    <rect x="-38" y="-46" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.35"/>
    <rect x="-40" y="-48" width="76" height="94" rx="1" fill="#f2e9cd"/>
    <g stroke="#6a5a3a" stroke-width="0.9" opacity="0.65" stroke-linecap="round">
      <line x1="-32" y1="-38" x2="24" y2="-38"/><line x1="-32" y1="-30" x2="20" y2="-30"/><line x1="-32" y1="-22" x2="26" y2="-22"/>
      <line x1="-32" y1="-14" x2="14" y2="-14"/><line x1="-32" y1="-6" x2="22" y2="-6"/>
    </g>
  </g>
</g>
<!-- the four other things, off to the left, already looked at -->
<g opacity="0.85">
  <path d="M14,140 Q34,134 54,140" fill="none" stroke="#2f2c26" stroke-width="12" stroke-linecap="round"/>
  <path d="M14,140 Q34,134 54,140" fill="none" stroke="#a09878" stroke-width="8" stroke-linecap="round"/>
  <circle cx="36" cy="228" r="18" fill="#2f9a76" opacity="0.5"/>
  <circle cx="36" cy="228" r="18" fill="none" stroke="#8a6a35" stroke-width="4"/>
  <!-- the compass card he does not touch at all -->
  <circle cx="470" cy="238" r="20" fill="#cec8b6" opacity="0.8"/>
  <polygon points="470,222 472,236 470,238 468,236" fill="#2f2e24"/>
  <!-- the open tin -->
  <rect x="446" y="112" width="46" height="16" rx="3" fill="#4f717c"/>
  <rect x="446" y="112" width="46" height="3" rx="1.5" fill="#b9d4de" opacity="0.6"/>
</g>
<!-- HIS HAND, FLAT ON THE TABLE. The way you do on a boat. Warm, lit, and
     absolutely still: no animation on this element at all. -->
<g transform="translate(304,214)">
  <!-- the shadow it casts, soft and close: the hand is pressed down -->
  <ellipse cx="4" cy="18" rx="62" ry="14" fill="#3a2c19" opacity="0.4"/>
  <!-- back of the hand -->
  <path d="M-58,16 Q-64,-6 -46,-18 Q-24,-32 8,-30 L44,-26 Q64,-20 60,0 Q54,18 26,22 L-30,24 Z" fill="#c39a72"/>
  <!-- fingers, spread flat, each one down -->
  <path d="M-46,-18 Q-52,-34 -38,-38 Q-26,-40 -24,-26" fill="#c39a72"/>
  <path d="M-22,-28 Q-24,-46 -8,-48 Q6,-48 6,-30" fill="#c39a72"/>
  <path d="M8,-29 Q8,-47 24,-46 Q36,-44 34,-26" fill="#c39a72"/>
  <path d="M36,-26 Q38,-42 52,-39 Q62,-36 58,-20" fill="#c39a72"/>
  <!-- thumb, laid along the near edge -->
  <path d="M-56,10 Q-72,4 -74,-8 Q-74,-18 -62,-16 Q-52,-12 -48,-2" fill="#c39a72"/>
  <!-- tendons: the hand is pressing, not resting -->
  <g stroke="#a67c56" stroke-width="1.4" opacity="0.55" stroke-linecap="round">
    <line x1="-38" y1="-16" x2="-32" y2="6"/><line x1="-14" y1="-24" x2="-10" y2="4"/>
    <line x1="14" y1="-24" x2="16" y2="4"/><line x1="40" y1="-20" x2="40" y2="2"/>
  </g>
  <!-- warm rim off the knuckles -->
  <path d="M-46,-18 Q-24,-32 8,-30 L44,-26" fill="none" stroke="#ffdf9e" stroke-width="2" opacity="0.6"/>
  <!-- rolled cuff and forearm, running off the bottom of frame -->
  <path d="M-24,24 Q-14,50 -10,80" fill="none" stroke="#c39a72" stroke-width="26" stroke-linecap="round"/>
  <rect x="-34" y="40" width="46" height="14" rx="4" fill="#a89d7e" transform="rotate(6,-11,47)"/>
</g>
</svg>`;

// E6: Fredward with both hands full and looking at NEITHER of them. Framed on
// the face. What is in his hands is deliberately unreadable — the shot is a
// man stopping mid sentence, and the objects are only there to be forgotten.
STORY_SCENES['hidden_end_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="60%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidFaceKeyE5" cx="46%" cy="34%" r="52%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.4"/><stop offset="50%" stop-color="#c98b34" stop-opacity="0.13"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.85"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.28"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE5)"/>
<rect width="500" height="260" fill="url(#hidFaceKeyE5)"/>
<!-- the lamps behind, thrown well out of focus. Nothing back there matters. -->
<circle cx="52" cy="60" r="46" fill="url(#hidLantE5)" opacity="0.32"><animate attributeName="opacity" values="0.24;0.4;0.28;0.36;0.24" dur="3.6s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="76" r="42" fill="url(#hidLantE5)" opacity="0.28"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="4.1s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="52" cy="60" r="7" fill="#ffe9a8" opacity="0.55"/>
<circle cx="452" cy="76" r="6" fill="#ffe9a8" opacity="0.5"/>
<!-- hull ribs, soft, far back -->
<g fill="none" stroke="#132028" stroke-width="14" opacity="0.6">
  <path d="M-10,240 Q20,110 110,64"/><path d="M510,240 Q480,110 390,64"/>
</g>
<!-- FREDWARD, CLOSE. The face is the shot. He has stopped mid sentence. -->
<g transform="translate(250,132)">
  <!-- shoulders, cropped by the frame -->
  <path d="M-150,150 Q-140,74 -74,52 Q-30,40 0,42 Q34,40 76,52 Q142,74 152,150 Z" fill="#6b6350"/>
  <path d="M-150,150 Q-140,74 -74,52 Q-30,40 0,42 Q34,40 76,52 Q142,74 152,150 Z" fill="#8a8168" opacity="0.45"/>
  <!-- collar -->
  <path d="M-46,52 Q-20,78 0,80 Q20,78 46,52" fill="none" stroke="#4e4838" stroke-width="5"/>
  <!-- neck -->
  <rect x="-20" y="10" width="40" height="44" fill="#a8805e"/>
  <!-- HEAD, large. Looking at neither hand: the eyeline goes off, at nothing. -->
  <ellipse cx="0" cy="-28" rx="52" ry="58" fill="#c39a72"/>
  <!-- the lit side, from the lamp above left -->
  <path d="M-52,-32 Q-48,-78 -6,-86 Q10,-87 22,-80 Q-10,-64 -18,-22 Q-24,14 -6,28 Q-34,22 -46,-2 Z" fill="#dcae80" opacity="0.55"/>
  <!-- and the shadow side -->
  <path d="M52,-30 Q50,10 20,26 Q34,4 34,-30 Q34,-62 18,-80 Q44,-68 52,-30 Z" fill="#9c7452" opacity="0.6"/>
  <!-- hair, grey at the sides, salt-worn -->
  <path d="M-52,-40 Q-48,-92 0,-94 Q48,-92 52,-40 Q40,-72 0,-74 Q-40,-72 -52,-40 Z" fill="#5a4a34"/>
  <path d="M-52,-40 Q-50,-64 -40,-76" fill="none" stroke="#9a8a72" stroke-width="4" opacity="0.6"/>
  <path d="M52,-40 Q50,-62 42,-74" fill="none" stroke="#9a8a72" stroke-width="3.4" opacity="0.5"/>
  <!-- brows, level. Not distressed. Not anything yet. -->
  <path d="M-34,-42 Q-22,-48 -10,-44" fill="none" stroke="#5a4a34" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M10,-44 Q22,-48 34,-42" fill="none" stroke="#5a4a34" stroke-width="3.4" stroke-linecap="round"/>
  <!-- EYES. Open, and aimed at nothing in the frame. This is the whole beat. -->
  <ellipse cx="-21" cy="-30" rx="10" ry="6" fill="#f3e6d4"/>
  <ellipse cx="21" cy="-30" rx="10" ry="6" fill="#f3e6d4"/>
  <circle cx="-22" cy="-30" r="4.4" fill="#4a5a52"/>
  <circle cx="20" cy="-30" r="4.4" fill="#4a5a52"/>
  <circle cx="-22" cy="-30" r="2" fill="#160f0a"/>
  <circle cx="20" cy="-30" r="2" fill="#160f0a"/>
  <!-- one warm catchlight each, from the lamp: the only bright point in a face
       that has otherwise gone still -->
  <circle cx="-24.4" cy="-32" r="1.4" fill="#fff3d4"/>
  <circle cx="17.6" cy="-32" r="1.4" fill="#fff3d4"/>
  <!-- lower lids, heavy: he is not staring, he has simply stopped -->
  <path d="M-31,-26 Q-21,-22 -11,-26" fill="none" stroke="#a67c56" stroke-width="1.6" opacity="0.7"/>
  <path d="M11,-26 Q21,-22 31,-26" fill="none" stroke="#a67c56" stroke-width="1.6" opacity="0.7"/>
  <!-- nose -->
  <path d="M0,-28 Q6,-10 -2,-4" fill="none" stroke="#a67c56" stroke-width="2.4" stroke-linecap="round"/>
  <!-- moustache -->
  <path d="M-18,4 Q0,10 18,3" fill="none" stroke="#5a4a34" stroke-width="7" stroke-linecap="round"/>
  <!-- THE MOUTH, caught OPEN, mid word. He was saying something and stopped. -->
  <path d="M-11,15 Q0,22 11,15 Q0,19 -11,15 Z" fill="#4a2c22"/>
  <path d="M-11,15 Q0,12 11,15" fill="none" stroke="#a67c56" stroke-width="1.4" opacity="0.6"/>
  <!-- the line at the corner of the mouth that was not there a second ago -->
  <path d="M-15,12 Q-19,17 -17,22" fill="none" stroke="#a67c56" stroke-width="1.4" opacity="0.5"/>
</g>
<!-- BOTH HANDS FULL, and both are at the bottom edge, dark and UNREADABLE.
     Something rope-shaped, something paper-shaped. Neither is legible, and
     that is on purpose: he is not looking at them either. -->
<g opacity="0.9">
  <g transform="translate(84,244) rotate(-12)">
    <path d="M-30,16 Q-36,-6 -18,-16 Q4,-26 30,-20 Q46,-14 42,2 Q36,18 12,22 Z" fill="#8a6a4c"/>
    <path d="M-24,-14 Q-40,-20 -52,-14" fill="none" stroke="#3a3830" stroke-width="13" stroke-linecap="round"/>
    <path d="M-24,-14 Q-40,-20 -52,-14" fill="none" stroke="#6a6558" stroke-width="9" stroke-linecap="round" opacity="0.7"/>
  </g>
  <g transform="translate(420,242) rotate(9)">
    <path d="M30,16 Q36,-6 18,-16 Q-4,-26 -30,-20 Q-46,-14 -42,2 Q-36,18 -12,22 Z" fill="#8a6a4c"/>
    <rect x="6" y="-34" width="52" height="30" rx="1" fill="#d8cfb4" opacity="0.7" transform="rotate(-14,32,-19)"/>
  </g>
</g>
</svg>`;

// E7: He does not say anything for a while. Quieter and worse than distress:
// a careful man going back through his own notes and finding a column he has
// been ruling for years with nothing written in it. Hold on the ledger.
STORY_SCENES['hidden_end_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="60%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE6" cx="50%" cy="40%" r="58%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.34"/><stop offset="46%" stop-color="#c98b34" stop-opacity="0.12"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE6" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.32"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE6)"/>
<rect width="500" height="260" fill="url(#hidWarmE6)"/>
<line x1="250" y1="0" x2="250" y2="16" stroke="#3a2c19" stroke-width="2.4"/>
<rect x="240" y="16" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="20" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.2s" repeatCount="indefinite"/></rect>
<circle cx="250" cy="29" r="106" fill="url(#hidLantE6)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.43;0.28" dur="3.2s" repeatCount="indefinite"/></circle>
<!-- table -->
<rect x="0" y="118" width="500" height="142" fill="#5c4526"/>
<rect x="0" y="118" width="500" height="5" rx="2.5" fill="#a5813f" opacity="0.75"/>
<!-- THE LEDGER, open wide. Hundreds of pages of it, ruled by hand. -->
<g transform="translate(250,178)">
  <!-- the block of pages beneath, seen edge on: years of this -->
  <path d="M-190,52 Q-190,26 -180,22 L180,22 Q190,26 190,52 Z" fill="#c9b98e"/>
  <g stroke="#a89972" stroke-width="0.8" opacity="0.7">
    <line x1="-186" y1="28" x2="186" y2="28"/><line x1="-186" y1="33" x2="186" y2="33"/>
    <line x1="-186" y1="38" x2="186" y2="38"/><line x1="-186" y1="43" x2="186" y2="43"/>
    <line x1="-186" y1="48" x2="186" y2="48"/>
  </g>
  <!-- the two open leaves -->
  <path d="M-188,22 Q-100,10 -4,18 L-4,-64 Q-100,-72 -188,-60 Z" fill="#f2e9cd"/>
  <path d="M188,22 Q100,10 4,18 L4,-64 Q100,-72 188,-60 Z" fill="#f2e9cd"/>
  <path d="M-4,18 Q0,14 4,18 L4,-64 Q0,-68 -4,-64 Z" fill="#d6c9a4"/>
  <!-- ruled columns, both leaves -->
  <g stroke="#8a7a56" stroke-width="1" opacity="0.8">
    <line x1="-150" y1="-58" x2="-150" y2="18"/><line x1="-108" y1="-60" x2="-108" y2="17"/>
    <line x1="-66" y1="-62" x2="-66" y2="16"/><line x1="-30" y1="-63" x2="-30" y2="16"/>
    <line x1="30" y1="-63" x2="30" y2="16"/><line x1="66" y1="-62" x2="66" y2="16"/>
    <line x1="108" y1="-60" x2="108" y2="17"/><line x1="150" y1="-58" x2="150" y2="18"/>
  </g>
  <line x1="-184" y1="-50" x2="-6" y2="-56" stroke="#8a7a56" stroke-width="1.2" opacity="0.8"/>
  <line x1="184" y1="-50" x2="6" y2="-56" stroke="#8a7a56" stroke-width="1.2" opacity="0.8"/>
  <!-- years of small tidy entries, every column filled but one -->
  <g stroke="#4a3d26" stroke-width="1" opacity="0.7" stroke-linecap="round">
    <line x1="-178" y1="-42" x2="-158" y2="-42"/><line x1="-144" y1="-42" x2="-116" y2="-42"/><line x1="-100" y1="-42" x2="-74" y2="-42"/><line x1="-24" y1="-42" x2="-10" y2="-42"/>
    <line x1="-178" y1="-32" x2="-160" y2="-32"/><line x1="-144" y1="-32" x2="-114" y2="-32"/><line x1="-100" y1="-32" x2="-72" y2="-32"/><line x1="-24" y1="-32" x2="-12" y2="-32"/>
    <line x1="-178" y1="-22" x2="-156" y2="-22"/><line x1="-144" y1="-22" x2="-118" y2="-22"/><line x1="-100" y1="-22" x2="-76" y2="-22"/><line x1="-24" y1="-22" x2="-10" y2="-22"/>
    <line x1="-178" y1="-12" x2="-162" y2="-12"/><line x1="-144" y1="-12" x2="-112" y2="-12"/><line x1="-100" y1="-12" x2="-70" y2="-12"/><line x1="-24" y1="-12" x2="-14" y2="-12"/>
    <line x1="-178" y1="-2" x2="-158" y2="-2"/><line x1="-144" y1="-2" x2="-116" y2="-2"/><line x1="-100" y1="-2" x2="-74" y2="-2"/><line x1="-24" y1="-2" x2="-10" y2="-2"/>
    <line x1="-178" y1="8" x2="-160" y2="8"/><line x1="-144" y1="8" x2="-114" y2="8"/><line x1="-100" y1="8" x2="-72" y2="8"/><line x1="-24" y1="8" x2="-12" y2="8"/>
    <line x1="12" y1="-42" x2="26" y2="-42"/><line x1="36" y1="-42" x2="62" y2="-42"/><line x1="74" y1="-42" x2="102" y2="-42"/><line x1="116" y1="-42" x2="144" y2="-42"/><line x1="156" y1="-42" x2="178" y2="-42"/>
    <line x1="12" y1="-32" x2="24" y2="-32"/><line x1="36" y1="-32" x2="60" y2="-32"/><line x1="74" y1="-32" x2="104" y2="-32"/><line x1="116" y1="-32" x2="142" y2="-32"/><line x1="156" y1="-32" x2="176" y2="-32"/>
    <line x1="12" y1="-22" x2="26" y2="-22"/><line x1="36" y1="-22" x2="62" y2="-22"/><line x1="74" y1="-22" x2="100" y2="-22"/><line x1="116" y1="-22" x2="144" y2="-22"/><line x1="156" y1="-22" x2="178" y2="-22"/>
    <line x1="12" y1="-12" x2="22" y2="-12"/><line x1="36" y1="-12" x2="58" y2="-12"/><line x1="74" y1="-12" x2="102" y2="-12"/><line x1="116" y1="-12" x2="140" y2="-12"/><line x1="156" y1="-12" x2="174" y2="-12"/>
    <line x1="12" y1="-2" x2="26" y2="-2"/><line x1="36" y1="-2" x2="62" y2="-2"/><line x1="74" y1="-2" x2="104" y2="-2"/><line x1="116" y1="-2" x2="144" y2="-2"/><line x1="156" y1="-2" x2="176" y2="-2"/>
  </g>
  <!-- THE COLUMN HE HAS BEEN RULING FOR YEARS WITH NOTHING IN IT.
       Ruled every line. Filled on none. -->
  <rect x="-66" y="-62" width="36" height="78" fill="#f7f0da"/>
  <line x1="-66" y1="-62" x2="-66" y2="16" stroke="#8a7a56" stroke-width="1.2"/>
  <line x1="-30" y1="-63" x2="-30" y2="16" stroke="#8a7a56" stroke-width="1.2"/>
  <!-- and a faint warm pool right on it, because that is where he is looking -->
  <ellipse cx="-48" cy="-24" rx="34" ry="42" fill="#F2C14E" opacity="0.1"/>
</g>
<!-- his hand, gone still at the edge of the page. Not writing. -->
<g transform="translate(392,138)">
  <path d="M0,24 Q-8,4 8,-10 Q28,-24 52,-20 L76,-16 Q92,-10 88,4 Q82,20 58,24 L18,28 Z" fill="#c39a72"/>
  <path d="M8,-10 Q4,-26 20,-28 Q34,-28 32,-12" fill="#c39a72"/>
  <path d="M34,-13 Q34,-29 48,-28 Q60,-26 56,-12" fill="#c39a72"/>
  <path d="M2,20 Q-6,4 8,-8" fill="none" stroke="#ffdf9e" stroke-width="2" opacity="0.55"/>
</g>
<!-- the pen, put down across the gutter, which he would never normally do -->
<g transform="translate(196,126) rotate(-8)">
  <rect x="0" y="0" width="66" height="4" rx="2" fill="#2f2418"/>
  <rect x="60" y="-0.6" width="14" height="5.2" rx="2" fill="#8a6a35"/>
  <polygon points="0,0 -9,2 0,4" fill="#c9c3b4"/>
</g>
</svg>`;

// E8: He squares the pages. Exactly as tidy about it as his brother, and
// neither of them will ever be told. Hands squaring four pages into one block.
STORY_SCENES['hidden_end_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="60%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE7" cx="50%" cy="42%" r="56%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.36"/><stop offset="46%" stop-color="#c98b34" stop-opacity="0.13"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE7" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.3"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE7)"/>
<rect width="500" height="260" fill="url(#hidWarmE7)"/>
<rect x="240" y="10" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="14" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.3s" repeatCount="indefinite"/></rect>
<circle cx="250" cy="23" r="104" fill="url(#hidLantE7)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.43;0.28" dur="3.3s" repeatCount="indefinite"/></circle>
<rect x="0" y="120" width="500" height="140" fill="#5c4526"/>
<rect x="0" y="120" width="500" height="5" rx="2.5" fill="#a5813f" opacity="0.75"/>
<g stroke="#3a2c19" stroke-width="1.4" opacity="0.5">
  <line x1="0" y1="164" x2="500" y2="164"/><line x1="0" y1="212" x2="500" y2="212"/>
</g>
<!-- THE FOUR PAGES, squared into one block. Perfectly true. -->
<g transform="translate(250,166)">
  <rect x="-58" y="-38" width="120" height="106" rx="1" fill="#3a2c19" opacity="0.4"/>
  <rect x="-62" y="-46" width="120" height="106" rx="1" fill="#c9bd9c"/>
  <rect x="-62" y="-49" width="120" height="106" rx="1" fill="#ddd2b0"/>
  <rect x="-62" y="-52" width="120" height="106" rx="1" fill="#e8dcbc"/>
  <rect x="-62" y="-55" width="120" height="106" rx="1" fill="#f2e9cd"/>
  <g stroke="#6a5a3a" stroke-width="1" opacity="0.65" stroke-linecap="round">
    <line x1="-52" y1="-42" x2="42" y2="-42"/><line x1="-52" y1="-32" x2="48" y2="-32"/><line x1="-52" y1="-22" x2="36" y2="-22"/>
    <line x1="-52" y1="-12" x2="46" y2="-12"/><line x1="-52" y1="-2" x2="40" y2="-2"/><line x1="-52" y1="8" x2="48" y2="8"/>
    <line x1="-52" y1="18" x2="32" y2="18"/><line x1="-52" y1="28" x2="44" y2="28"/><line x1="-52" y1="38" x2="26" y2="38"/>
  </g>
  <!-- the true edges: a bright line down each side, which is what SQUARED
       looks like. His brother does this to index cards. -->
  <line x1="-62" y1="-55" x2="-62" y2="51" stroke="#fff8e2" stroke-width="2" opacity="0.8"/>
  <line x1="-62" y1="-55" x2="58" y2="-55" stroke="#fff8e2" stroke-width="2" opacity="0.8"/>
</g>
<!-- both hands, squaring: one on each edge, coming in square to the block -->
<g transform="translate(120,188)">
  <path d="M0,30 Q-12,6 6,-12 Q28,-30 56,-26 L82,-22 Q100,-14 94,4 Q86,24 58,28 L20,32 Z" fill="#c39a72"/>
  <path d="M56,-26 Q54,-44 70,-44 Q84,-42 80,-24" fill="#c39a72"/>
  <path d="M2,26 Q-8,6 8,-10" fill="none" stroke="#ffdf9e" stroke-width="2.2" opacity="0.6"/>
  <rect x="-16" y="14" width="44" height="15" rx="4" fill="#a89d7e" transform="rotate(-8,6,21)"/>
</g>
<g transform="translate(380,188) scale(-1,1)">
  <path d="M0,30 Q-12,6 6,-12 Q28,-30 56,-26 L82,-22 Q100,-14 94,4 Q86,24 58,28 L20,32 Z" fill="#c39a72"/>
  <path d="M56,-26 Q54,-44 70,-44 Q84,-42 80,-24" fill="#c39a72"/>
  <path d="M2,26 Q-8,6 8,-10" fill="none" stroke="#ffdf9e" stroke-width="2.2" opacity="0.6"/>
  <rect x="-16" y="14" width="44" height="15" rx="4" fill="#a89d7e" transform="rotate(-8,6,21)"/>
</g>
<!-- the tin, open, empty now -->
<g transform="translate(60,142) rotate(-6)">
  <rect x="-30" y="-14" width="60" height="34" rx="4" fill="#4f717c"/>
  <rect x="-30" y="-14" width="60" height="3.4" rx="1.6" fill="#b9d4de" opacity="0.6"/>
  <rect x="-24" y="-8" width="48" height="22" rx="2" fill="#26383f"/>
</g>
</svg>`;

// E9 / E10: "I am not confused. I know what I have got here." He touches the
// ledger. Hundreds of pages of it. Work that is his, in a place that does not
// ask him to be remarkable at anything. The frame agrees with him.
STORY_SCENES['hidden_end_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a2028"/><stop offset="58%" stop-color="#06161d"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE8" cx="50%" cy="48%" r="62%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.36"/><stop offset="46%" stop-color="#c98b34" stop-opacity="0.14"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE8" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.32"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE8)"/>
<rect width="500" height="260" fill="url(#hidWarmE8)"/>
<!-- the lamps along the rail, all lit, all of them always lit -->
<g>
  <rect x="30" y="70" width="12" height="17" rx="2.4" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="32.4" y="73" width="7.2" height="11" fill="#ffe9a8"><animate attributeName="opacity" values="0.74;1;0.84;0.96;0.74" dur="3.5s" repeatCount="indefinite"/></rect>
  <circle cx="36" cy="78" r="40" fill="url(#hidLantE8)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.48;0.36;0.44;0.3" dur="3.5s" repeatCount="indefinite"/></circle>
  <rect x="458" y="78" width="12" height="17" rx="2.4" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="460.4" y="81" width="7.2" height="11" fill="#ffe9a8"><animate attributeName="opacity" values="0.7;1;0.8;0.94;0.7" dur="4s" repeatCount="indefinite" begin="1.3s"/></rect>
  <circle cx="464" cy="86" r="38" fill="url(#hidLantE8)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.42;0.28" dur="4s" repeatCount="indefinite" begin="1.3s"/></circle>
</g>
<line x1="20" y1="94" x2="480" y2="94" stroke="#4a3822" stroke-width="4" stroke-linecap="round"/>
<g stroke="#3a2c19" stroke-width="5" stroke-linecap="round">
  <line x1="34" y1="94" x2="34" y2="140"/><line x1="466" y1="94" x2="466" y2="140"/>
</g>
<!-- deck -->
<rect x="0" y="140" width="500" height="120" fill="#5c4526"/>
<g stroke="#3a2c19" stroke-width="1.6" opacity="0.55">
  <line x1="0" y1="164" x2="500" y2="164"/><line x1="0" y1="196" x2="500" y2="196"/><line x1="0" y1="230" x2="500" y2="230"/>
</g>
<!-- THE LEDGERS. Hundreds of pages of it, and then all the years before it,
     stacked and shelved. This is the work that is his. -->
<g transform="translate(96,140)">
  <!-- a shelf of finished volumes, spines out -->
  <rect x="-84" y="-52" width="168" height="8" rx="2" fill="#3a2c19"/>
  <g>
    <rect x="-80" y="-98" width="16" height="46" rx="1.6" fill="#7a4a30"/>
    <rect x="-62" y="-102" width="14" height="50" rx="1.6" fill="#5d5a3a"/>
    <rect x="-46" y="-96" width="17" height="44" rx="1.6" fill="#6a4028"/>
    <rect x="-27" y="-104" width="15" height="52" rx="1.6" fill="#4a5a4a"/>
    <rect x="-10" y="-99" width="16" height="47" rx="1.6" fill="#7a4a30"/>
    <rect x="8" y="-101" width="14" height="49" rx="1.6" fill="#5d5a3a"/>
    <rect x="24" y="-95" width="17" height="43" rx="1.6" fill="#6a4028"/>
    <rect x="43" y="-103" width="15" height="51" rx="1.6" fill="#4a5a4a"/>
    <rect x="60" y="-97" width="16" height="45" rx="1.6" fill="#7a4a30"/>
  </g>
  <!-- gilt on the spines, catching the lamps -->
  <g stroke="#d6b06a" stroke-width="1.4" opacity="0.55">
    <line x1="-77" y1="-88" x2="-67" y2="-88"/><line x1="-59" y1="-92" x2="-51" y2="-92"/>
    <line x1="-43" y1="-86" x2="-32" y2="-86"/><line x1="-24" y1="-94" x2="-15" y2="-94"/>
    <line x1="-7" y1="-89" x2="3" y2="-89"/><line x1="11" y1="-91" x2="19" y2="-91"/>
    <line x1="27" y1="-85" x2="38" y2="-85"/><line x1="46" y1="-93" x2="55" y2="-93"/>
    <line x1="63" y1="-87" x2="73" y2="-87"/>
  </g>
</g>
<!-- the open ledger on the table, his hand flat on it -->
<g transform="translate(320,182)">
  <path d="M-96,28 Q-96,10 -88,6 L88,6 Q96,10 96,28 Z" fill="#c9b98e"/>
  <path d="M-94,6 Q-48,-2 -2,4 L-2,-44 Q-48,-50 -94,-42 Z" fill="#f2e9cd"/>
  <path d="M94,6 Q48,-2 2,4 L2,-44 Q48,-50 94,-42 Z" fill="#f2e9cd"/>
  <g stroke="#8a7a56" stroke-width="0.9" opacity="0.75">
    <line x1="-64" y1="-42" x2="-64" y2="4"/><line x1="-32" y1="-45" x2="-32" y2="4"/>
    <line x1="32" y1="-45" x2="32" y2="4"/><line x1="64" y1="-42" x2="64" y2="4"/>
  </g>
  <g stroke="#4a3d26" stroke-width="0.9" opacity="0.7" stroke-linecap="round">
    <line x1="-88" y1="-32" x2="-70" y2="-32"/><line x1="-58" y1="-32" x2="-38" y2="-32"/><line x1="-26" y1="-32" x2="-8" y2="-32"/>
    <line x1="-88" y1="-22" x2="-72" y2="-22"/><line x1="-58" y1="-22" x2="-40" y2="-22"/><line x1="-26" y1="-22" x2="-10" y2="-22"/>
    <line x1="-88" y1="-12" x2="-70" y2="-12"/><line x1="-58" y1="-12" x2="-38" y2="-12"/><line x1="-26" y1="-12" x2="-8" y2="-12"/>
    <line x1="8" y1="-32" x2="26" y2="-32"/><line x1="38" y1="-32" x2="58" y2="-32"/><line x1="70" y1="-32" x2="86" y2="-32"/>
    <line x1="8" y1="-22" x2="24" y2="-22"/><line x1="38" y1="-22" x2="56" y2="-22"/><line x1="70" y1="-22" x2="88" y2="-22"/>
  </g>
  <!-- HIS HAND, FLAT ON THE TABLE. The way you do on a boat.
       Placed on the DECK to the near-left of the ledger, only its little-finger
       edge overlapping the page corner, so the ledger still reads as a ledger.
       Low angle: four splayed fingers pressing, knuckles up and catching the
       lamp, thumb hooked back along the near edge. -->
  <g transform="translate(-118,30)">
    <!-- contact shadow, tight under the palm: it is pressed down, not resting -->
    <ellipse cx="6" cy="16" rx="52" ry="12" fill="#2a1f12" opacity="0.45"/>
    <!-- FOUR FINGERS, splayed, each a separate tapered digit with a knuckle.
         Drawn first so the palm mass overlaps their bases. -->
    <!-- index -->
    <path d="M-30,-2 C-40,-12 -46,-26 -42,-36 C-39,-43 -31,-42 -28,-35
             C-25,-27 -21,-16 -17,-6 Z" fill="#c39a72"/>
    <ellipse cx="-34" cy="-20" rx="7.4" ry="8.4" fill="#cea681" transform="rotate(-18,-34,-20)"/>
    <!-- middle -->
    <path d="M-14,-6 C-19,-19 -20,-35 -14,-43 C-8,-49 -1,-45 -1,-36
             C-1,-26 -1,-14 -1,-4 Z" fill="#c39a72"/>
    <ellipse cx="-11" cy="-24" rx="7.8" ry="9" fill="#cea681" transform="rotate(-6,-11,-24)"/>
    <!-- ring -->
    <path d="M2,-4 C1,-18 4,-33 11,-39 C18,-44 24,-39 22,-30
             C20,-21 18,-11 16,-2 Z" fill="#c39a72"/>
    <ellipse cx="10" cy="-21" rx="7.4" ry="8.6" fill="#cea681" transform="rotate(8,10,-21)"/>
    <!-- little -->
    <path d="M18,-2 C20,-14 25,-26 32,-30 C39,-33 43,-27 40,-19
             C37,-12 33,-4 31,2 Z" fill="#c39a72"/>
    <ellipse cx="30" cy="-16" rx="6.4" ry="7.4" fill="#cea681" transform="rotate(20,30,-16)"/>
    <!-- THE PALM / back of the hand, a broad low wedge over the finger bases -->
    <path d="M-34,2 C-40,-6 -36,-14 -26,-14
             L34,-8 C46,-6 50,4 44,14
             C38,23 18,27 -2,26 L-22,22 C-32,19 -36,10 -34,2 Z" fill="#c39a72"/>
    <!-- THUMB, hooked back along the near edge of the table -->
    <path d="M-32,10 C-46,10 -58,6 -62,-2 C-65,-9 -58,-14 -50,-11
             C-42,-8 -36,-4 -31,1 Z" fill="#c39a72"/>
    <ellipse cx="-52" cy="-6" rx="7.4" ry="6.4" fill="#cea681" transform="rotate(-28,-52,-6)"/>
    <!-- KNUCKLES catching the lamp: four bright caps across the back of the
         hand, which is what makes it read as a hand at a glance -->
    <g fill="#f0c795" opacity="0.75">
      <ellipse cx="-28" cy="-10" rx="6" ry="4.2" transform="rotate(-16,-28,-10)"/>
      <ellipse cx="-10" cy="-12" rx="6.4" ry="4.4" transform="rotate(-5,-10,-12)"/>
      <ellipse cx="9" cy="-10" rx="6" ry="4.2" transform="rotate(7,9,-10)"/>
      <ellipse cx="26" cy="-6" rx="5.2" ry="3.8" transform="rotate(18,26,-6)"/>
    </g>
    <!-- TENDONS running back from each knuckle. The hand is PRESSING. -->
    <g stroke="#a67c56" stroke-width="1.5" opacity="0.5" stroke-linecap="round">
      <path d="M-27,-6 C-26,3 -25,11 -23,18"/>
      <path d="M-9,-8 C-9,2 -8,11 -7,19"/>
      <path d="M10,-6 C11,3 12,12 12,19"/>
      <path d="M26,-3 C27,4 28,11 28,17"/>
    </g>
    <!-- the gaps between the splayed fingers, so they separate -->
    <g stroke="#9c7452" stroke-width="1.4" opacity="0.55" stroke-linecap="round">
      <path d="M-22,-8 C-21,-16 -21,-24 -22,-31"/>
      <path d="M-3,-9 C-2,-18 0,-27 2,-33"/>
      <path d="M17,-6 C19,-14 22,-21 25,-26"/>
    </g>
    <!-- warm rim along the top of the knuckle line, from the lamp above -->
    <path d="M-36,-8 C-24,-16 -4,-18 16,-13 C28,-10 38,-6 44,0"
          fill="none" stroke="#ffdf9e" stroke-width="2.2" opacity="0.7"/>
    <!-- and along the thumb edge -->
    <path d="M-60,-3 C-54,-10 -44,-10 -33,-2" fill="none" stroke="#ffdf9e" stroke-width="1.6" opacity="0.5"/>
    <!-- rolled cuff and forearm, running off the bottom of frame -->
    <path d="M6,26 C10,44 12,58 12,74" fill="none" stroke="#c39a72" stroke-width="30" stroke-linecap="round"/>
    <rect x="-14" y="34" width="46" height="15" rx="4" fill="#a89d7e" transform="rotate(5,9,41)"/>
    <path d="M-8,30 C-5,46 -4,58 -4,72" fill="none" stroke="#ffdf9e" stroke-width="2" opacity="0.4"/>
  </g>
</g>
<!-- and nobody looking at him. The frame has no watcher in it and no screen. -->
</svg>`;

// E10: "Perhaps it is the only cupboard in the world where the things they
// take off us go on being kept. And I am living in it, and the light is quite
// nice." He puts the four pages down on the compass card so neither can blow
// anywhere. Reuses E9's warm deck; the frame agrees with him.
STORY_SCENES['hidden_end_9'] = STORY_SCENES['hidden_end_8'];

// E11: He stands. He goes to the rail of what used to be a deck and stands
// there. THE FOUR PAGES STAY ON THE TABLE. He did not take them with him and
// he did not put them away. That gap between him and the table is the shot.
STORY_SCENES['hidden_end_10'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0e2c36"/><stop offset="55%" stop-color="#071a22"/><stop offset="100%" stop-color="#030c11"/>
  </linearGradient>
  <radialGradient id="hidWarmE10" cx="30%" cy="62%" r="46%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.3"/><stop offset="50%" stop-color="#c98b34" stop-opacity="0.1"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidLantE10" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.3"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hidOpenE10" cx="78%" cy="34%" r="56%">
    <stop offset="0%" stop-color="#2f7d92" stop-opacity="0.34"/><stop offset="60%" stop-color="#164450" stop-opacity="0.12"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE10)"/>
<!-- the open water beyond the rail: cold, wide, and where he is looking -->
<rect width="500" height="260" fill="url(#hidOpenE10)"/>
<circle cx="360" cy="200" r="1.4" fill="#7fc4d8" opacity="0.2"><animate attributeName="cy" values="200;24" dur="26s" repeatCount="indefinite"/></circle>
<circle cx="430" cy="220" r="1.6" fill="#7fc4d8" opacity="0.16"><animate attributeName="cy" values="220;30" dur="31s" repeatCount="indefinite" begin="8s"/></circle>
<circle cx="300" cy="240" r="1.2" fill="#7fc4d8" opacity="0.14"><animate attributeName="cy" values="240;40" dur="34s" repeatCount="indefinite" begin="15s"/></circle>
<!-- the warm half of the frame, behind him, where the table is -->
<rect width="500" height="260" fill="url(#hidWarmE10)"/>
<!-- deck -->
<rect x="0" y="196" width="500" height="64" fill="#5c4526"/>
<g stroke="#3a2c19" stroke-width="1.6" opacity="0.55">
  <line x1="0" y1="216" x2="500" y2="216"/><line x1="0" y1="238" x2="500" y2="238"/>
</g>
<!-- and the deck ENDS. Past this there is only water. -->
<path d="M0,196 L500,196 L500,186 Q300,182 0,190 Z" fill="#3a2c19"/>
<!-- THE RAIL -->
<g stroke="#3a2c19" stroke-width="6" stroke-linecap="round">
  <line x1="300" y1="118" x2="300" y2="196"/><line x1="386" y1="118" x2="386" y2="196"/><line x1="472" y1="118" x2="472" y2="196"/>
</g>
<line x1="288" y1="120" x2="490" y2="120" stroke="#4a3822" stroke-width="5" stroke-linecap="round"/>
<line x1="288" y1="152" x2="490" y2="152" stroke="#4a3822" stroke-width="3.4" stroke-linecap="round"/>
<!-- one lamp, back on the warm side, doing its work without him -->
<rect x="60" y="86" width="13" height="18" rx="2.5" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
<rect x="62.5" y="89" width="8" height="12" fill="#ffe9a8"><animate attributeName="opacity" values="0.76;1;0.86;0.96;0.76" dur="3.4s" repeatCount="indefinite"/></rect>
<circle cx="66.5" cy="95" r="72" fill="url(#hidLantE10)" opacity="0.36"><animate attributeName="opacity" values="0.26;0.44;0.32;0.4;0.26" dur="3.4s" repeatCount="indefinite"/></circle>
<!-- THE TABLE, behind him, with THE FOUR PAGES STILL ON IT -->
<rect x="24" y="164" width="196" height="9" rx="3" fill="#7d6031"/>
<rect x="24" y="164" width="196" height="3" rx="1.5" fill="#a5813f" opacity="0.7"/>
<rect x="42" y="173" width="8" height="34" fill="#3a2c19"/>
<rect x="196" y="173" width="8" height="34" fill="#3a2c19"/>
<!-- the four pages. Squared, left behind, not put away. -->
<g transform="translate(112,148)">
  <rect x="-36" y="-14" width="74" height="30" rx="1" fill="#3a2c19" opacity="0.4"/>
  <rect x="-38" y="-18" width="74" height="30" rx="1" fill="#ddd2b0"/>
  <rect x="-38" y="-21" width="74" height="30" rx="1" fill="#e8dcbc"/>
  <rect x="-38" y="-24" width="74" height="30" rx="1" fill="#f2e9cd"/>
  <g stroke="#6a5a3a" stroke-width="0.9" opacity="0.6" stroke-linecap="round">
    <line x1="-30" y1="-16" x2="20" y2="-16"/><line x1="-30" y1="-9" x2="26" y2="-9"/><line x1="-30" y1="-2" x2="16" y2="-2"/>
  </g>
  <line x1="-38" y1="-24" x2="36" y2="-24" stroke="#fff8e2" stroke-width="1.6" opacity="0.7"/>
</g>
<!-- the ledger, closed, beside them -->
<rect x="164" y="146" width="52" height="18" rx="2" fill="#7a4a30"/>
<rect x="164" y="146" width="52" height="3" rx="1.5" fill="#a3653f" opacity="0.7"/>
<line x1="172" y1="155" x2="200" y2="155" stroke="#d6b06a" stroke-width="1.2" opacity="0.5"/>
<!-- FREDWARD AT THE RAIL. From behind, and that is a choice, not the rule:
     the rule is about Canon. Here it is because he is looking at the water and
     so are we. Hands on the rail, weight on them. -->
<g transform="translate(360,196)">
  <!-- legs -->
  <rect x="-16" y="-8" width="13" height="8" fill="#6b6350"/>
  <rect x="3" y="-8" width="13" height="8" fill="#6b6350"/>
  <!-- body: the canvas suit, and the shoulders are DOWN -->
  <path d="M-30,-6 Q-32,-58 -22,-84 Q-10,-100 2,-100 Q16,-100 26,-84 Q36,-58 34,-6 Z" fill="#6b6350"/>
  <path d="M-30,-6 Q-32,-58 -22,-84 Q-10,-100 2,-100 Q16,-100 26,-84 Q36,-58 34,-6 Z" fill="#8a8168" opacity="0.4"/>
  <!-- rolled cuffs, and forearms out to the rail -->
  <rect x="-38" y="-64" width="15" height="9" rx="3" fill="#a89d7e"/>
  <rect x="24" y="-64" width="15" height="9" rx="3" fill="#a89d7e"/>
  <path d="M-32,-58 Q-44,-52 -52,-46" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <path d="M32,-58 Q44,-52 52,-46" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <!-- hands ON the rail, taking his weight -->
  <ellipse cx="-56" cy="-44" rx="10" ry="7" fill="#c39a72"/>
  <ellipse cx="56" cy="-44" rx="10" ry="7" fill="#c39a72"/>
  <!-- head, back of it, tipped very slightly up at the water -->
  <circle cx="2" cy="-114" r="17" fill="#c39a72"/>
  <path d="M-15,-116 Q-10,-134 2,-132 Q15,-134 19,-116" fill="#5a4a34"/>
  <path d="M-15,-116 Q-14,-104 -4,-100" fill="#c39a72"/>
  <rect x="-7" y="-100" width="18" height="8" fill="#a8805e"/>
  <!-- the cold rim, from the open water. He is lit from the OTHER side now:
       he has walked out of the lamplight and into the wide dark. -->
  <path d="M32,-8 Q36,-58 26,-84" fill="none" stroke="#7fc4d8" stroke-width="2.2" opacity="0.55"/>
  <path d="M18,-124 Q22,-116 19,-106" fill="none" stroke="#7fc4d8" stroke-width="1.8" opacity="0.5"/>
  <path d="M52,-48 Q58,-46 60,-42" fill="none" stroke="#7fc4d8" stroke-width="1.6" opacity="0.45"/>
  <!-- and one last warm edge off the far shoulder, from the lamp behind -->
  <path d="M-29,-10 Q-31,-58 -22,-82" fill="none" stroke="#ffdf9e" stroke-width="1.8" opacity="0.4"/>
</g>
<!-- the distance between the man and the table he left the pages on -->
<line x1="150" y1="130" x2="300" y2="130" stroke="#F2C14E" stroke-width="0.5" opacity="0.07"/>
</svg>`;

// E12: The pet catcher. A hoop of steamed cane, a net of fine line, a sliding
// collar, and a grip worn smooth by one hand. Hand-made. Nothing manufactured.
STORY_SCENES['hidden_end_11'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidWallE11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b44"/><stop offset="60%" stop-color="#123039"/><stop offset="100%" stop-color="#0a2028"/>
  </linearGradient>
  <linearGradient id="hidCaneE11" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#e0c78e"/><stop offset="45%" stop-color="#b8975c"/><stop offset="100%" stop-color="#7a6034"/>
  </linearGradient>
  <linearGradient id="hidGripE11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a37f4e"/><stop offset="50%" stop-color="#7a5c34"/><stop offset="100%" stop-color="#4a3720"/>
  </linearGradient>
  <radialGradient id="hidLantE11" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.7"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.2"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<!-- PLAIN LIT WALL. The tool is the subject, so it gets a ground to read on. -->
<rect width="500" height="260" fill="url(#hidWallE11)"/>
<circle cx="120" cy="60" r="120" fill="url(#hidLantE11)" opacity="0.3"><animate attributeName="opacity" values="0.22;0.36;0.26;0.34;0.22" dur="3.6s" repeatCount="indefinite"/></circle>
<!-- THE HOOP: steamed cane, bound where the two ends overlap -->
<g transform="translate(174,120)">
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="#3a2c19" stroke-width="12"/>
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="url(#hidCaneE11)" stroke-width="8"/>
  <!-- the grain of the cane, running round the hoop -->
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="#efdcaa" stroke-width="2" opacity="0.5" stroke-dasharray="26 16"/>
  <!-- and it is not a perfect circle, because a person steamed it -->
  <path d="M-96,-8 Q-98,-40 -84,-62" fill="none" stroke="#efdcaa" stroke-width="2.4" opacity="0.5"/>
</g>
<!-- THE NET: fine line, hanging INSIDE the hoop, with real slack in it -->
<g transform="translate(174,120)" opacity="0.7">
  <g fill="none" stroke="#dfe7f0" stroke-width="1.1">
    <path d="M-92,-22 Q-40,10 -4,86"/><path d="M-72,-62 Q-30,-6 8,84"/>
    <path d="M-40,-86 Q-8,-20 26,74"/><path d="M2,-94 Q18,-26 46,62"/>
    <path d="M44,-84 Q46,-20 64,46"/><path d="M76,-56 Q72,-8 80,24"/>
    <path d="M-96,10 Q-30,26 44,66"/><path d="M-88,44 Q-20,52 42,68"/>
    <path d="M-66,72 Q-16,80 30,80"/><path d="M-92,-46 Q-24,-18 52,-52"/>
    <path d="M-78,-70 Q-4,-52 62,-70"/>
  </g>
</g>
<!-- THE SLIDING COLLAR: a band of tin on the shaft that the hoop closes with -->
<g transform="translate(292,192) rotate(-38)">
  <rect x="0" y="-11" width="30" height="22" rx="4" fill="#5b6a72"/>
  <rect x="0" y="-11" width="30" height="5" rx="2.5" fill="#b9cdd6" opacity="0.7"/>
  <rect x="0" y="4" width="30" height="4" rx="2" fill="#2c3a40" opacity="0.7"/>
  <!-- the little tab you push it with, worn bright -->
  <rect x="11" y="-18" width="9" height="9" rx="2" fill="#93a4ac"/>
  <line x1="15.5" y1="-17" x2="15.5" y2="-10" stroke="#e2f0f5" stroke-width="1.4" opacity="0.7"/>
</g>
<!-- THE SHAFT, running down to the grip -->
<g transform="translate(252,164) rotate(38)">
  <rect x="0" y="-6" width="176" height="12" rx="6" fill="#3a2c19"/>
  <rect x="0" y="-6" width="176" height="12" rx="6" fill="url(#hidCaneE11)"/>
  <rect x="0" y="-5" width="176" height="3.4" rx="1.7" fill="#efdcaa" opacity="0.55"/>
  <!-- cane nodes, because it is cane -->
  <g stroke="#7a6034" stroke-width="2" opacity="0.6">
    <line x1="34" y1="-6" x2="34" y2="6"/><line x1="72" y1="-6" x2="72" y2="6"/><line x1="110" y1="-6" x2="110" y2="6"/>
  </g>
  <!-- THE GRIP, worn smooth by ONE hand: the wear is in one place, not all over -->
  <rect x="116" y="-9" width="62" height="18" rx="9" fill="url(#hidGripE11)"/>
  <!-- the smooth patch, exactly where a palm goes -->
  <ellipse cx="146" cy="-2" rx="22" ry="6" fill="#d3ab72" opacity="0.55"/>
  <ellipse cx="146" cy="-3" rx="15" ry="3.4" fill="#e8c894" opacity="0.5"/>
  <!-- and the binding at the end, whipped with the same line as the net -->
  <g stroke="#dfe7f0" stroke-width="1.2" opacity="0.65">
    <line x1="170" y1="-9" x2="170" y2="9"/><line x1="173" y1="-9" x2="173" y2="9"/><line x1="176" y1="-9" x2="176" y2="9"/>
  </g>
</g>
<!-- the bindings where the hoop meets the shaft: line, wound and wound -->
<g transform="translate(258,170) rotate(38)">
  <g stroke="#dfe7f0" stroke-width="1.4" opacity="0.7">
    <line x1="-8" y1="-8" x2="-8" y2="8"/><line x1="-4" y1="-8" x2="-4" y2="8"/>
    <line x1="0" y1="-8" x2="0" y2="8"/><line x1="4" y1="-8" x2="4" y2="8"/><line x1="8" y1="-8" x2="8" y2="8"/>
  </g>
</g>
<!-- the crate he took it out of, at the edge of frame -->
<rect x="424" y="196" width="76" height="64" fill="#4a3720"/>
<g stroke="#2a1f12" stroke-width="2.4" opacity="0.7">
  <line x1="424" y1="214" x2="500" y2="214"/><line x1="424" y1="238" x2="500" y2="238"/>
</g>
</svg>`;

// E13: He walks you to the rope, because he always walks you to the rope.
// He waves. He is still waving when the water takes the shape of him.
STORY_SCENES['hidden_end_12'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidDeepE12" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#123a48"/><stop offset="45%" stop-color="#0a2530"/><stop offset="100%" stop-color="#040f16"/>
  </linearGradient>
  <radialGradient id="hidLantE12" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.8"/><stop offset="40%" stop-color="#F2C14E" stop-opacity="0.24"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidBlurE12" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f7d92" stop-opacity="0.5"/><stop offset="100%" stop-color="#0a2530" stop-opacity="0.9"/>
  </linearGradient>
  <filter id="hidWaterTakeE12"><feGaussianBlur stdDeviation="2.6"/></filter>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE12)"/>
<!-- looking BACK and UP: we are on the rope, going. -->
<circle cx="110" cy="180" r="1.6" fill="#9fd4e4" opacity="0.3"><animate attributeName="cy" values="180;10" dur="9s" repeatCount="indefinite"/></circle>
<circle cx="380" cy="220" r="1.4" fill="#9fd4e4" opacity="0.26"><animate attributeName="cy" values="220;20" dur="11s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="230" cy="240" r="1.8" fill="#9fd4e4" opacity="0.22"><animate attributeName="cy" values="240;30" dur="13s" repeatCount="indefinite" begin="6s"/></circle>
<circle cx="440" cy="200" r="1.2" fill="#9fd4e4" opacity="0.24"><animate attributeName="cy" values="200;16" dur="10s" repeatCount="indefinite" begin="8s"/></circle>
<!-- THE ROPE, running up out of frame past the camera -->
<path d="M64,260 Q80,180 74,100 Q70,44 84,0" fill="none" stroke="#2f2c26" stroke-width="13" stroke-linecap="round"/>
<path d="M64,260 Q80,180 74,100 Q70,44 84,0" fill="none" stroke="#8d8778" stroke-width="9" stroke-linecap="round"/>
<g stroke="#3b382f" stroke-width="2" opacity="0.55" stroke-linecap="round">
  <line x1="66" y1="234" x2="76" y2="244"/><line x1="72" y1="194" x2="82" y2="204"/>
  <line x1="72" y1="154" x2="82" y2="164"/><line x1="70" y1="114" x2="80" y2="124"/>
  <line x1="70" y1="74" x2="80" y2="84"/><line x1="74" y1="34" x2="84" y2="44"/>
</g>
<!-- the deck far below, going soft: the water is taking it -->
<g opacity="0.6">
  <rect x="0" y="212" width="500" height="48" fill="url(#hidBlurE12)"/>
  <rect x="140" y="206" width="280" height="8" rx="3" fill="#5c4526" opacity="0.5" filter="url(#hidWaterTakeE12)"/>
  <g stroke="#3a2c19" stroke-width="5" opacity="0.4" filter="url(#hidWaterTakeE12)">
    <line x1="180" y1="182" x2="180" y2="212"/><line x1="300" y1="182" x2="300" y2="212"/><line x1="410" y1="182" x2="410" y2="212"/>
  </g>
  <line x1="170" y1="184" x2="420" y2="184" stroke="#4a3822" stroke-width="4" opacity="0.4" filter="url(#hidWaterTakeE12)"/>
</g>
<!-- the lamps, still lit, blurring out -->
<circle cx="186" cy="170" r="34" fill="url(#hidLantE12)" opacity="0.35"><animate attributeName="opacity" values="0.24;0.4;0.28;0.38;0.24" dur="3.6s" repeatCount="indefinite"/></circle>
<circle cx="186" cy="170" r="4" fill="#ffe9a8" opacity="0.6" filter="url(#hidWaterTakeE12)"/>
<circle cx="404" cy="176" r="30" fill="url(#hidLantE12)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="4.1s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="404" cy="176" r="3.4" fill="#ffe9a8" opacity="0.55" filter="url(#hidWaterTakeE12)"/>
<!-- FREDWARD, WAVING, and the water is taking the shape of him. He is drawn
     entirely through the blur filter: still a man, no longer a person. -->
<g transform="translate(292,150)" filter="url(#hidWaterTakeE12)" opacity="0.62">
  <path d="M-22,62 Q-24,18 -16,-2 Q-6,-16 2,-16 Q12,-16 20,-2 Q28,18 26,62 Z" fill="#8a8168"/>
  <circle cx="2" cy="-28" r="13" fill="#c39a72"/>
  <path d="M-11,-30 Q-7,-44 2,-42 Q11,-44 15,-30" fill="#5a4a34"/>
  <!-- THE ARM, UP. Still waving. -->
  <g>
    <path d="M20,4 Q40,-16 46,-42" fill="none" stroke="#c39a72" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="47" cy="-48" rx="8" ry="9" fill="#c39a72"/>
    <animateTransform attributeName="transform" type="rotate" values="-7;7;-7" dur="2.4s" repeatCount="indefinite"/>
  </g>
  <path d="M-20,4 Q-30,22 -30,44" fill="none" stroke="#c39a72" stroke-width="9" stroke-linecap="round"/>
</g>
<!-- and the water closing over the shape: bands drifting across him -->
<path d="M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z" fill="#2f7d92" opacity="0.16">
  <animate attributeName="d" values="M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z;M180,118 Q250,110 320,118 Q390,126 460,118 L460,134 Q390,142 320,134 Q250,126 180,134Z;M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z" dur="7s" repeatCount="indefinite"/>
</path>
<path d="M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z" fill="#2f7d92" opacity="0.12">
  <animate attributeName="d" values="M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z;M160,178 Q240,170 320,178 Q400,186 480,178 L480,198 L160,198Z;M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z" dur="9s" repeatCount="indefinite"/>
</path>
</svg>`;

// E14: The room under the fountain is the same. Canon has the big screen on
// the wreck. He does not ask you what happened. He is watching a man at a
// table a long way below him do nothing at all.
STORY_SCENES['hidden_end_13'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomE13" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#152232"/><stop offset="100%" stop-color="#0a1020"/>
  </linearGradient>
  <linearGradient id="hidBigE13" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#26505c"/><stop offset="45%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0b1a22"/>
  </linearGradient>
  <radialGradient id="hidLampE13" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.9"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.26"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScanE13" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.2"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="hidBigClipE13"><rect x="128" y="16" width="244" height="140" rx="4"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomE13)"/>
<!-- nine smalls, all present, all indifferent, all on different horizons -->
<g>
  <rect x="14" y="14" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="17" y="17" width="46" height="28" fill="#16323a"/><rect x="17" y="36" width="46" height="9" fill="#1d3f49"/><rect x="17" y="35" width="46" height="1.3" fill="#7fc4d8" opacity="0.5"/>
  <rect x="14" y="56" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="17" y="59" width="46" height="28" fill="#16323a"/><rect x="17" y="72" width="46" height="15" fill="#1d3f49"/><rect x="17" y="71" width="46" height="1.3" fill="#7fc4d8" opacity="0.45"/>
  <rect x="14" y="98" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="17" y="101" width="46" height="28" fill="#16323a"/><rect x="17" y="123" width="46" height="6" fill="#1d3f49"/><rect x="17" y="122" width="46" height="1.3" fill="#7fc4d8" opacity="0.4"/>
  <rect x="434" y="14" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="437" y="17" width="46" height="28" fill="#16323a"/><rect x="437" y="31" width="46" height="14" fill="#1d3f49"/><rect x="437" y="30" width="46" height="1.3" fill="#7fc4d8" opacity="0.48"/>
  <rect x="434" y="56" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="437" y="59" width="46" height="28" fill="#16323a"/><rect x="437" y="79" width="46" height="8" fill="#1d3f49"/><rect x="437" y="78" width="46" height="1.3" fill="#7fc4d8" opacity="0.42"/>
  <rect x="434" y="98" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="437" y="101" width="46" height="28" fill="#16323a"/><rect x="437" y="115" width="46" height="14" fill="#1d3f49"/><rect x="437" y="114" width="46" height="1.3" fill="#7fc4d8" opacity="0.44"/>
  <rect x="130" y="0" width="76" height="12" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="133" y="6" width="70" height="4" fill="#1d3f49"/>
  <rect x="212" y="0" width="76" height="12" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="215" y="4" width="70" height="6" fill="#1d3f49"/>
  <rect x="294" y="0" width="76" height="12" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="297" y="8" width="70" height="2" fill="#1d3f49"/>
</g>
<!-- the big screen, on the wreck -->
<rect x="124" y="12" width="252" height="148" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="3"/>
<g clip-path="url(#hidBigClipE13)">
  <rect x="128" y="16" width="244" height="140" fill="url(#hidBigE13)"/>
  <path d="M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z" fill="#2b6070" opacity="0.5">
    <animate attributeName="d" values="M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z;M128,58 Q188,52 250,58 Q312,64 372,58 L372,72 Q312,78 250,72 Q188,66 128,72Z;M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z" dur="12s" repeatCount="indefinite"/>
  </path>
  <path d="M150,156 Q168,120 216,114 L318,118 Q352,126 350,156 Z" fill="#061019"/>
  <path d="M224,114 L216,70 L230,68 L238,114Z" fill="#061019"/>
  <!-- the lamps are lit down there, the way they always are -->
  <circle cx="310" cy="128" r="34" fill="url(#hidLampE13)" opacity="0.44">
    <animate attributeName="opacity" values="0.3;0.54;0.3" dur="8s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="310" cy="128" rx="3" ry="4" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.78" dur="8s" repeatCount="indefinite"/></ellipse>
  <!-- and a man at a table down there, doing nothing at all -->
  <rect x="240" y="132" width="58" height="3" rx="1.4" fill="#3a2c19" opacity="0.8"/>
  <ellipse cx="262" cy="124" rx="7" ry="9" fill="#0d1a16" opacity="0.85"/>
  <circle cx="262" cy="112" r="4.4" fill="#0d1a16" opacity="0.85"/>
  <rect x="128" y="16" width="244" height="20" fill="url(#hidScanE13)">
    <animate attributeName="y" values="0;160" dur="7s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- floor and screen spill -->
<rect x="0" y="196" width="500" height="64" fill="#101c2c"/>
<path d="M124,196 L376,196 L446,260 L54,260 Z" fill="#16323a" opacity="0.42"/>
<path d="M170,196 L330,196 L380,260 L120,260 Z" fill="#5fa0b8" opacity="0.07"/>
<!-- table -->
<rect x="72" y="182" width="356" height="9" rx="3" fill="#3d4a60"/>
<rect x="72" y="182" width="356" height="3" rx="1.5" fill="#66748f" opacity="0.65"/>
<!-- the cards, still in a stack, still unsquared since the tin -->
<g transform="translate(354,164)">
  <rect x="0" y="12" width="64" height="8" rx="1.3" fill="#5e6577" transform="rotate(3,32,16)"/>
  <rect x="4" y="3" width="64" height="8" rx="1.3" fill="#6d748a" transform="rotate(-6,36,7)"/>
  <rect x="-1" y="-6" width="64" height="8" rx="1.3" fill="#7c849b" transform="rotate(2,31,-2)"/>
</g>
<!-- THE PENCIL, WHERE HE LEFT IT. Still not parallel. -->
<g transform="translate(96,168) rotate(31)">
  <rect x="0" y="0" width="80" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.88"/>
  <rect x="76" y="0" width="6" height="4.4" rx="1.6" fill="#525f79"/>
</g>
<!-- CANON from behind, watching. He does not ask you what happened. -->
<g transform="translate(238,120)">
  <rect x="-36" y="34" width="72" height="72" rx="4" fill="#333e52"/>
  <rect x="-36" y="34" width="72" height="4" rx="2" fill="#5b6a86"/>
  <path d="M-32,106 Q-30,50 -14,34 Q0,26 14,34 Q30,50 32,106 Z" fill="#05070e"/>
  <circle cx="1" cy="14" r="16" fill="#05070e"/>
  <path d="M-15,12 Q-10,-6 1,-4 Q13,-6 17,12" fill="#0b0f19"/>
  <rect x="-6" y="26" width="14" height="10" fill="#05070e"/>
  <path d="M-31,98 Q-29,52 -14,36" fill="none" stroke="#5fa0b8" stroke-width="5" opacity="0.2"/>
  <path d="M-31,98 Q-29,52 -14,36" fill="none" stroke="#9fd4e4" stroke-width="1.8" opacity="0.78"/>
  <path d="M-14,4 Q-17,14 -14,22" fill="none" stroke="#9fd4e4" stroke-width="1.4" opacity="0.6"/>
</g>
<!-- the second chair, and it has been sat in: it is pulled out now -->
<g transform="translate(356,196) rotate(-20)">
  <rect x="-24" y="-6" width="48" height="50" rx="4" fill="#2e3849"/>
  <rect x="-24" y="-6" width="48" height="4" rx="2" fill="#5b6a86"/>
  <rect x="-22" y="42" width="6" height="32" fill="#28313f"/>
  <rect x="17" y="42" width="6" height="32" fill="#28313f"/>
</g>
</svg>`;

// E15 / E16 / E17: "He read it. He put his hand on the table." He gathers the
// index cards and then holds them without doing anything to them, and at the
// end he looks at the second chair. Same room, held.
STORY_SCENES['hidden_end_14'] = STORY_SCENES['hidden_end_13'];
STORY_SCENES['hidden_end_15'] = STORY_SCENES['hidden_end_13'];

// E18: THE FINAL FRAME. The big screen, a man at a table, four pages, the
// lamps lit, NOTHING MOVING.
//
// This is the last thing the questline shows and it is the whole argument of
// it in one image: the warm room is real, it is four hundred feet down, and it
// arrives here only as light on a screen in a cold room. Deliberately quiet.
// The ONLY animation in the entire scene is the lamp, breathing on an eight
// second cycle, and the scanline. No silt, no waves, no figure movement. He
// has not moved for an hour and he has not gone back to the ledger either.
STORY_SCENES['hidden_end_16'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidRoomE16" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#121e2c"/><stop offset="100%" stop-color="#080e1a"/>
  </linearGradient>
  <linearGradient id="hidBigE16" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a5764"/><stop offset="42%" stop-color="#1d3f49"/><stop offset="100%" stop-color="#0a1820"/>
  </linearGradient>
  <radialGradient id="hidLampE16" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.95"/><stop offset="26%" stop-color="#F2C14E" stop-opacity="0.4"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="hidScanE16" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fc4d8" stop-opacity="0"/><stop offset="50%" stop-color="#7fc4d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#7fc4d8" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="hidVigE16" cx="50%" cy="46%" r="70%">
    <stop offset="58%" stop-color="#0a1820" stop-opacity="0"/><stop offset="100%" stop-color="#0a1820" stop-opacity="0.7"/>
  </radialGradient>
  <clipPath id="hidBigClipE16"><rect x="46" y="22" width="408" height="196" rx="4"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomE16)"/>
<!-- THE BIG SCREEN, almost the whole frame. Everything else is a dark border. -->
<rect x="40" y="16" width="420" height="208" rx="6" fill="#1a2231" stroke="#3f4b63" stroke-width="4"/>
<g clip-path="url(#hidBigClipE16)">
  <rect x="46" y="22" width="408" height="196" fill="url(#hidBigE16)"/>
  <!-- water strata: drawn, and STILL. No animate on either of these. -->
  <path d="M46,72 Q148,64 250,72 Q352,80 454,72 L454,88 Q352,96 250,88 Q148,80 46,88Z" fill="#2b6070" opacity="0.35"/>
  <path d="M46,126 Q148,119 250,126 Q352,133 454,126 L454,142 L46,142Z" fill="#153039" opacity="0.45"/>
  <!-- the wreck, and the deck he is sitting on -->
  <path d="M60,218 Q84,168 156,156 L346,152 Q412,162 418,218 Z" fill="#050f16"/>
  <path d="M92,196 Q152,170 226,164 L352,164" fill="none" stroke="#1d3f49" stroke-width="1.4" opacity="0.4"/>
  <!-- the rail -->
  <g stroke="#050f16" stroke-width="4">
    <line x1="120" y1="156" x2="120" y2="132"/><line x1="196" y1="152" x2="196" y2="128"/>
    <line x1="316" y1="152" x2="316" y2="129"/><line x1="386" y1="156" x2="386" y2="134"/>
  </g>
  <line x1="112" y1="132" x2="394" y2="132" stroke="#050f16" stroke-width="3"/>
  <!-- THE LAMP. Lit. It is always lit. This is the only thing that moves. -->
  <circle cx="250" cy="150" r="86" fill="url(#hidLampE16)" opacity="0.4">
    <animate attributeName="opacity" values="0.3;0.46;0.3" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="150" r="30" fill="url(#hidLampE16)" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.4" dur="8s" repeatCount="indefinite"/>
  </circle>
  <rect x="246" y="112" width="8" height="12" rx="2" fill="#3a2c19"/>
  <ellipse cx="250" cy="126" rx="3.4" ry="4.6" fill="#ffe0a0">
    <animate attributeName="opacity" values="0.82;1;0.82" dur="8s" repeatCount="indefinite"/>
  </ellipse>
  <!-- THE TABLE -->
  <rect x="180" y="180" width="146" height="5" rx="2" fill="#5c4526"/>
  <rect x="180" y="180" width="146" height="1.8" rx="0.9" fill="#a5813f" opacity="0.6"/>
  <rect x="192" y="185" width="5" height="24" fill="#3a2c19"/>
  <rect x="310" y="185" width="5" height="24" fill="#3a2c19"/>
  <!-- THE FOUR PAGES. Squared, in front of him, exactly where he left them. -->
  <g transform="translate(288,172)">
    <rect x="-19" y="-5" width="40" height="14" rx="0.6" fill="#c9bd9c"/>
    <rect x="-19" y="-7" width="40" height="14" rx="0.6" fill="#ddd2b0"/>
    <rect x="-19" y="-9" width="40" height="14" rx="0.6" fill="#e8dcbc"/>
    <rect x="-19" y="-11" width="40" height="14" rx="0.6" fill="#f2e9cd"/>
    <g stroke="#8a7a56" stroke-width="0.5" opacity="0.55">
      <line x1="-14" y1="-7" x2="12" y2="-7"/><line x1="-14" y1="-4" x2="16" y2="-4"/><line x1="-14" y1="-1" x2="10" y2="-1"/>
    </g>
  </g>
  <!-- THE MAN AT THE TABLE. Small, still, and not at the ledger.
       The ledger is CLOSED and pushed to the far end, which is the one detail
       in this frame that is doing any work. -->
  <rect x="196" y="172" width="24" height="8" rx="1" fill="#7a4a30"/>
  <g transform="translate(250,150)">
    <!-- seated, side on, hands not on anything -->
    <path d="M-13,30 Q-14,10 -7,2 Q0,-2 7,2 Q14,10 13,30 Z" fill="#0d1a16"/>
    <circle cx="0" cy="-9" r="8" fill="#0d1a16"/>
    <path d="M-8,-10 Q-4,-19 0,-18 Q5,-19 8,-10" fill="#0a140f"/>
    <!-- the warm edge the lamp puts on him. He is inside the light. -->
    <path d="M-12,26 Q-13,10 -7,3" fill="none" stroke="#ffd894" stroke-width="1.4" opacity="0.6"/>
    <path d="M-7,-14 Q-9,-8 -7,-3" fill="none" stroke="#ffd894" stroke-width="1.2" opacity="0.55"/>
    <!-- forearms out to the table, and nothing in the hands -->
    <path d="M9,10 Q22,16 32,20" fill="none" stroke="#0d1a16" stroke-width="6" stroke-linecap="round"/>
  </g>
  <!-- the chair he is on, and the crate he is not -->
  <rect x="232" y="152" width="5" height="30" fill="#0d1a16"/>
  <!-- screen curvature -->
  <rect x="46" y="22" width="408" height="196" fill="url(#hidVigE16)"/>
  <!-- the scanline, crawling. Slower here than anywhere else in the file. -->
  <rect x="46" y="22" width="408" height="22" fill="url(#hidScanE16)">
    <animate attributeName="y" values="-8;222" dur="11s" repeatCount="indefinite"/>
  </rect>
</g>
<!-- the cold room around it. A table edge, and the amber pencil, and that is
     all: no Canon in this frame. He has gone up, or he is behind us. -->
<rect x="0" y="236" width="500" height="24" fill="#2c3849"/>
<rect x="0" y="236" width="500" height="3" rx="1.5" fill="#5f6d88" opacity="0.6"/>
<g transform="translate(64,244) rotate(6)">
  <rect x="0" y="0" width="72" height="4" rx="2" fill="#F2C14E" opacity="0.8"/>
  <rect x="68" y="0" width="5" height="4" rx="1.4" fill="#525f79"/>
</g>
<!-- and the screenlight lying on the table, the last cold thing -->
<ellipse cx="250" cy="240" rx="180" ry="6" fill="#5fa0b8" opacity="0.07"/>
</svg>`;
