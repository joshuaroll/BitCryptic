// Skyship story scenes for "The Sky Captain's Collection"
// Keys: airship_0 through airship_8 (9-step story; some steps share art)

// Scene 0: Boarding the Skyship. Dusk sky, lit clouds, airship from below
STORY_SCENES['airship_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <!-- The same dusk as the deck (airship_8 sunsetBg), caught a little
       earlier: deep blue overhead, mauve through the middle, amber at the
       horizon. Was a flat noon blue that belonged to no other airship scene. -->
  <linearGradient id="skyBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#14244e"/><stop offset="34%" stop-color="#2e4a86"/><stop offset="62%" stop-color="#8a6290"/><stop offset="82%" stop-color="#d88a52"/><stop offset="100%" stop-color="#f0bc68"/>
  </linearGradient>
  <radialGradient id="a0Glow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.45"/><stop offset="45%" stop-color="#f0a050" stop-opacity="0.18"/><stop offset="100%" stop-color="#e88020" stop-opacity="0"/>
  </radialGradient>
  <!-- mid-plane cloud body: rose base easing into one cool shade band
       underneath, a soft ramp rather than a hard cut -->
  <linearGradient id="a0ClBody" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#b48aa0"/><stop offset="52%" stop-color="#b08aa2"/><stop offset="80%" stop-color="#8e769a"/><stop offset="100%" stop-color="#7e6890"/>
  </linearGradient>
  <!-- the one warm highlight: a rim on the upper-left (lit) edge only,
       fading out before it reaches the shade band -->
  <linearGradient id="a0ClRim" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#f2c6a0" stop-opacity="0.85"/><stop offset="30%" stop-color="#f2c6a0" stop-opacity="0.5"/><stop offset="46%" stop-color="#f2c6a0" stop-opacity="0"/>
  </linearGradient>
  <!-- the low drifting cloud sits in the amber horizon haze: veiled toward it -->
  <linearGradient id="a0ClDrift" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2c08a"/><stop offset="55%" stop-color="#e6a87e"/><stop offset="100%" stop-color="#cf9078"/>
  </linearGradient>
  <clipPath id="a0ClClipL"><path d="M24,72 Q22,58 40,56 Q46,40 66,42 Q78,30 98,38 Q116,32 126,46 Q144,48 140,64 Q148,74 132,78 L36,78 Q22,78 24,72 Z"/></clipPath>
  <clipPath id="a0ClClipR"><path d="M340,100 Q336,86 356,84 Q362,68 386,70 Q400,58 422,66 Q442,60 452,74 Q472,76 468,92 Q476,102 458,106 L352,106 Q338,106 340,100 Z"/></clipPath>
  <clipPath id="a0EnvClip"><path d="M126,88 Q132,52 200,38 Q252,30 306,38 Q360,48 374,74 Q380,86 374,98 Q360,124 306,134 Q252,142 200,134 Q132,120 126,88 Z"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#skyBg0)"/>
<!-- the sun is below the frame, low and to the left: the key light -->
<ellipse cx="120" cy="262" rx="230" ry="110" fill="url(#a0Glow)"/>
<!-- first stars, only in the deep blue at the top -->
<g fill="#e8effa">
  <circle cx="34" cy="14" r="1.1" opacity="0.55"/><circle cx="168" cy="9" r="0.9" opacity="0.4"/>
  <circle cx="330" cy="16" r="1.2" opacity="0.5"/><circle cx="452" cy="11" r="0.9" opacity="0.4"/>
  <circle cx="288" cy="30" r="0.8" opacity="0.3"/>
</g>
<!-- FAR PLANE: horizon cloud lenses, no outline, veiled into the glow -->
<path d="M8,214 Q96,204 204,212 Q100,220 8,214 Z" fill="#f2b878" opacity="0.38"/>
<path d="M296,228 Q400,218 496,224 Q402,232 296,228 Z" fill="#f2b878" opacity="0.3"/>
<path d="M150,236 Q220,230 290,235 Q220,240 150,236 Z" fill="#f6c88a" opacity="0.25"/>
<!-- BG PLANE: a small high cloud, veiled toward the sky -->
<path d="M200,48 Q204,38 220,38 Q230,28 248,32 Q266,30 272,42 Q284,46 276,50 L206,50 Q198,50 200,48 Z" fill="#7c6a94" opacity="0.75"/>
<path d="M204,48 Q240,45 278,47 Q280,50 276,50 L206,50 Q201,50 204,48 Z" fill="#5a4e7c" opacity="0.6"/>
<path d="M220,38 Q230,28 248,32 Q236,33 230,39 Z" fill="#c69a9a" opacity="0.6"/>
<!-- MID PLANE: two cloud banks. One body each, shaded by a soft vertical
     ramp into the cool band underneath, and ONE warm rim on the upper-left
     lit edge. The rim is the body's own outline stroked and clipped to the
     body, so it can never show as a second silhouette outside it. -->
<path d="M24,72 Q22,58 40,56 Q46,40 66,42 Q78,30 98,38 Q116,32 126,46 Q144,48 140,64 Q148,74 132,78 L36,78 Q22,78 24,72 Z" fill="url(#a0ClBody)"/>
<path clip-path="url(#a0ClClipL)" d="M24,72 Q22,58 40,56 Q46,40 66,42 Q78,30 98,38 Q116,32 126,46 Q144,48 140,64 Q148,74 132,78 L36,78 Q22,78 24,72 Z" fill="none" stroke="url(#a0ClRim)" stroke-width="5"/>
<path d="M340,100 Q336,86 356,84 Q362,68 386,70 Q400,58 422,66 Q442,60 452,74 Q472,76 468,92 Q476,102 458,106 L352,106 Q338,106 340,100 Z" fill="url(#a0ClBody)"/>
<path clip-path="url(#a0ClClipR)" d="M340,100 Q336,86 356,84 Q362,68 386,70 Q400,58 422,66 Q442,60 452,74 Q472,76 468,92 Q476,102 458,106 L352,106 Q338,106 340,100 Z" fill="none" stroke="url(#a0ClRim)" stroke-width="5"/>
<!-- Wind streaks, warm in the low light -->
<g stroke="#f6dcc0" stroke-width="1" opacity="0.2">
  <line x1="30" y1="110" x2="120" y2="108"/>
  <line x1="350" y1="130" x2="470" y2="127"/>
  <line x1="150" y1="150" x2="260" y2="148"/>
</g>
<!-- ====================================================================
     THE AIRSHIP, rebuilt. It was an ellipse with three gold bands and a
     rectangle slung under it. skyship.js was one of the two worst files in
     the project at 2% paths: 135 elements, 3 of them curves.

     An airship reads as an airship because of its SILHOUETTE: a nose that
     comes to a point, a tail that tapers to fins, and a gondola shaped like a
     boat hull rather than a crate. An ellipse has none of those, which is why
     the old one read as a balloon.
     ==================================================================== -->

<!-- the envelope: pointed nose, long taper aft, fins at the tail -->
<path d="M126,88 Q132,52 200,38 Q252,30 306,38 Q360,48 374,74 Q380,86 374,98
         Q360,124 306,134 Q252,142 200,134 Q132,120 126,88 Z" fill="#c03030"/>
<path d="M126,88 Q132,52 200,38 Q252,30 306,38 Q360,48 374,74 Q378,80 376,86
         Q330,58 250,54 Q170,54 126,88 Z" fill="#d84a42" opacity="0.7"/>
<path clip-path="url(#a0EnvClip)" d="M150,120 Q220,140 300,132 Q350,124 372,100 Q356,126 302,135
         Q250,143 198,134 Q166,128 150,120 Z" fill="#8a1e1e" opacity="0.55"/>
<!-- gold bands, following the curve of the hull rather than lying flat on it -->
<path d="M172,48 Q176,86 176,124" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.85"/>
<path d="M232,37 Q234,86 232,138" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.85"/>
<path d="M292,38 Q294,86 292,136" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.8"/>
<path d="M140,74 Q250,58 368,76" fill="none" stroke="#e8a820" stroke-width="2" opacity="0.5"/>
<!-- the nose cone and its cap -->
<path d="M126,88 Q120,80 122,72 Q126,78 130,74 Q128,82 132,88 Q128,94 126,88 Z" fill="#e8a820" opacity="0.9"/>
<!-- ink line, mid plane (1.0): the envelope's own red pushed toward ink -->
<path d="M126,88 Q132,52 200,38 Q252,30 306,38 Q360,48 374,74 Q380,86 374,98
         Q360,124 306,134 Q252,142 200,134 Q132,120 126,88 Z" fill="none" stroke="#501c27" stroke-width="1"/>
<!-- tail fins: the one detail that separates an airship from a balloon -->
<path d="M370,74 Q400,44 414,40 Q408,62 384,86 Z" fill="#b02828"/>
<path d="M370,74 Q400,46 413,42 Q404,58 384,84 Z" fill="#d84a42" opacity="0.5"/>
<path d="M372,98 Q402,128 416,132 Q410,110 386,88 Z" fill="#9a2222"/>
<path d="M374,86 Q408,86 422,86 Q408,92 374,92 Z" fill="#b02828" opacity="0.85"/>
<path d="M374,86 Q408,86 422,86 Q408,88.5 374,88.5 Z" fill="#e8a820" opacity="0.5"/>
<g fill="none" stroke="#501c27" stroke-width="1" stroke-linejoin="round">
  <path d="M370,74 Q400,44 414,40 Q408,62 384,86"/><path d="M372,98 Q402,128 416,132 Q410,110 386,88"/>
  <path d="M376,86 L422,86 Q408,92 376,92"/>
</g>

<!-- suspension rigging: cables that hang in a catenary, not straight lines -->
<path d="M196,128 Q198,146 202,164" fill="none" stroke="#6a5020" stroke-width="1.6" opacity="0.85"/>
<path d="M232,136 Q233,150 234,164" fill="none" stroke="#6a5020" stroke-width="1.6" opacity="0.85"/>
<path d="M272,136 Q271,150 270,164" fill="none" stroke="#6a5020" stroke-width="1.6" opacity="0.85"/>
<path d="M306,130 Q304,147 300,164" fill="none" stroke="#6a5020" stroke-width="1.6" opacity="0.85"/>

<!-- ====================================================================
     THE GONDOLA, shaped like a hull. It was a rounded rectangle, which is a
     crate. A hull has a keel line, a raked bow and a transom, and its planking
     follows the curve of the sides.
     ==================================================================== -->
<path d="M176,164 L326,164 Q332,164 330,172 Q322,202 306,210 Q250,218 196,210
         Q180,202 172,172 Q170,164 176,164 Z" fill="#8a6a30"/>
<path d="M180,168 L322,168 Q326,168 324,175 Q317,199 303,206 Q250,213 199,206
         Q185,199 178,175 Q176,168 180,168 Z" fill="#a07840"/>
<path d="M182,178 Q250,186 320,178" fill="none" stroke="#8a6a30" stroke-width="1.2" opacity="0.6"/>
<path d="M186,190 Q250,198 316,190" fill="none" stroke="#8a6a30" stroke-width="1.2" opacity="0.5"/>
<path d="M196,210 Q250,218 306,210 Q250,214 196,210 Z" fill="#6a5020" opacity="0.8"/>
<!-- a gunwale rail along the top edge, so the deck has a lip -->
<path d="M172,164 L330,164 L330,168 L172,168 Z" fill="#b89030" opacity="0.7"/>
<path d="M176,164 L326,164 Q332,164 330,172 Q322,202 306,210 Q250,218 196,210
         Q180,202 172,172 Q170,164 176,164 Z" fill="none" stroke="#3b3227" stroke-width="1"/>

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
<!-- ====================================================================
     THE ROPE LADDER. Two faults, both now fixed.

     It first started INSIDE the hull, so it grew out of the gondola's middle.
     Then, correcting that, I let the rails splay: measured, the rungs ran 18.8
     wide at the top and 30.8 at the bottom. That is backwards. A rope ladder
     hangs PLUMB: the rungs are what hold the rails apart, so every rung is
     the same length and the rails stay parallel.

     What a hanging ladder does do is SWAY: the whole thing drifts off vertical
     as it falls. That is a shift, not a taper.
     ==================================================================== -->
<!-- lashings where it is made fast to the gunwale -->
<path d="M196,163 q4,-3 8,0 q-4,3 -8,0 Z" fill="#6a5020"/>
<path d="M212,163 q4,-3 8,0 q-4,3 -8,0 Z" fill="#6a5020"/>
<!-- the rails: parallel, drifting together as the ladder sways -->
<path d="M200,166 Q197,200 199,232 Q201,250 202,258" fill="none" stroke="#8a7040" stroke-width="2"/>
<path d="M216,166 Q213,200 215,232 Q217,250 218,258" fill="none" stroke="#8a7040" stroke-width="2"/>
<path d="M200,166 Q197,200 199,232" fill="none" stroke="#c4a860" stroke-width="0.8" opacity="0.4"/>
<!-- rungs, every one the same length, tracking the sway -->
<path d="M198.7,180 L214.7,180" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>
<path d="M197.7,194 L213.7,194" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>
<path d="M197.3,208 L213.3,208" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>
<path d="M197.9,222 L213.9,222" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>
<path d="M199.4,236 L215.4,236" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>
<path d="M201,250 L217,250" stroke="#6a5020" stroke-width="2.2" stroke-linecap="round"/>

<!-- THE MOORING POST, rising out of frame from the ground below, with the
     tether made fast to the nose. The rope sags because the ship rides a
     little toward the post, and it is drawn after the hull so it sits on the
     nose cap rather than vanishing behind it. -->
<path d="M58,260 L60,126 Q67,121 74,126 L76,260 Z" fill="#6a4a24"/>
<path d="M60,260 L61.5,128 Q63,126 64.5,126 L64,260 Z" fill="#8a6a38" opacity="0.6"/>
<path d="M72,128 L74,260 L76,260 L74,126 Z" fill="#4a3018" opacity="0.7"/>
<path d="M57,124 Q67,116 77,124 L77,128 Q67,124 57,128 Z" fill="#4a3018"/>
<path d="M58,260 L60,126 Q67,121 74,126 L76,260" fill="none" stroke="#2f2622" stroke-width="1"/>
<g fill="#3a3028" opacity="0.85">
  <path d="M59.6,150 L74.4,150 L74.5,154 L59.5,154 Z"/>
  <path d="M59,212 L75,212 L75.2,216 L58.8,216 Z"/>
</g>
<ellipse cx="74" cy="134" rx="3" ry="3.4" fill="none" stroke="#b89030" stroke-width="1.4"/>
<path d="M76,134 Q101,121 128,90" fill="none" stroke="#8a7040" stroke-width="1.8" stroke-linecap="round"/>
<path d="M76,134 Q101,121 128,90" fill="none" stroke="#c4a860" stroke-width="0.6" opacity="0.45"/>
<!-- the lashing where the line is made fast round the cap -->
<path d="M125.2,88.6 Q127.8,87 130.2,89.2 Q127.6,91 125.2,88.6 Z" fill="#6a5020"/>

<!-- THE PENNANT, flying aft from a short staff on the top fin. Blank, and it
     ripples rather than swinging stiffly. -->
<path d="M412,42 L414,20" stroke="#6a5020" stroke-width="1.4" stroke-linecap="round"/>
<path d="M414,21 Q426,22 440,26 Q426,28 413.4,30 Z" fill="#e8a820">
  <animate attributeName="d" dur="2.6s" repeatCount="indefinite" calcMode="spline"
           keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
           values="M414,21 Q426,22 440,26 Q426,28 413.4,30 Z;M414,21 Q426,19 440,25 Q426,25 413.4,30 Z;M414,21 Q426,22 440,26 Q426,28 413.4,30 Z"/>
</path>
<path d="M414,21 Q426,22 440,26 Q426,24 414,24 Z" fill="#f4c850" opacity="0.6"/>

<!-- Drifting cloud wisp: placement on the outer group, motion on the inner.
     The drift eases and fades in/out at the frame edges so the loop has no seam. -->
<g transform="translate(536,234)">
  <g opacity="0">
    <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;-576,0"
                      dur="25s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
    <animate attributeName="opacity" values="0;0.45;0.45;0" keyTimes="0;0.12;0.88;1" dur="25s" repeatCount="indefinite"
             calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
    <path d="M-34,6 Q-36,-4 -20,-6 Q-14,-16 2,-14 Q14,-20 24,-10 Q38,-8 34,4 Q38,10 28,10 L-28,10 Q-38,10 -34,6 Z" fill="url(#a0ClDrift)"/>
  </g>
</g>
<!-- Brass-rimmed cabin ports follow the gondola's side. -->
<g fill="#3b626c" stroke="#d0b16a" stroke-width="2">
<ellipse cx="242" cy="185" rx="7" ry="6"/><ellipse cx="272" cy="185" rx="7" ry="6"/><ellipse cx="301" cy="183" rx="7" ry="6"/>
</g>
<path d="M239 182L244 180 M269 182L274 180 M298 180L303 178" stroke="#b8d8d7" stroke-width="1.2" opacity=".65"/>
<path d="M231 199L250 199 M263 200L283 199 M294 197L310 195" stroke="#624a25" stroke-width=".8" opacity=".45"/>
<g fill="#d0b16a" opacity=".7"><circle cx="226" cy="174" r="1"/><circle cx="250" cy="175" r="1"/><circle cx="275" cy="175" r="1"/><circle cx="300" cy="174" r="1"/><circle cx="319" cy="173" r="1"/></g>
</svg>`;

// Scene 1: ON DECK, the moment after boarding. Simon has just made the
// mooring line fast to a brass cleat and turns to offer a gloved hand
// (welcome pose). Same dusk as airship_0 (its skyBg0 stops), same deck woods
// as the airship_8 rail. One perspective: eye level (the horizon) is y 105,
// about Simon's eye height, and every plank seam runs to (250,105), so the
// far rail is half his scale. The mooring post rises from the ground beyond
// the rail and its line comes in over a fairlead on the top rail, down to
// the cleat beside him. The envelope's belly closes the top of the frame
// with the rigging dropping from it to the rail posts.
STORY_SCENES['airship_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="a1dSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#14244e"/><stop offset="34%" stop-color="#2e4a86"/><stop offset="62%" stop-color="#8a6290"/><stop offset="82%" stop-color="#d88a52"/><stop offset="100%" stop-color="#f0bc68"/>
  </linearGradient>
  <radialGradient id="a1dGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.45"/><stop offset="45%" stop-color="#f0a050" stop-opacity="0.18"/><stop offset="100%" stop-color="#e88020" stop-opacity="0"/>
  </radialGradient>
  <!-- the land far below, violet at the horizon warming toward the glow -->
  <linearGradient id="a1dLand" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6e5f86"/><stop offset="100%" stop-color="#a87a74"/>
  </linearGradient>
  <linearGradient id="a1dEnv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d84a42"/><stop offset="55%" stop-color="#c03030"/><stop offset="100%" stop-color="#8a1e1e"/>
  </linearGradient>
  <linearGradient id="a1dDeck" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5f3f18"/><stop offset="45%" stop-color="#7a5024"/><stop offset="100%" stop-color="#452a10"/>
  </linearGradient>
  <linearGradient id="a1dRail" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a87a34"/><stop offset="45%" stop-color="#8a6028"/><stop offset="100%" stop-color="#5f3f18"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#a1dSky)"/>
<!-- FAR PLANE: the land below the rail, the horizon hills, and the low glow
     of a sun already under the horizon to the left -->
<path d="M0,106 L500,106 L500,180 L0,180 Z" fill="url(#a1dLand)"/>
<path d="M0,108 Q50,98 112,105 Q170,96 236,104 Q320,94 392,103 Q450,98 500,104 L500,112 L0,112 Z" fill="#5a4e7c" opacity="0.8"/>
<ellipse cx="96" cy="150" rx="250" ry="90" fill="url(#a1dGlow)"/>
<path d="M14,124 Q110,116 210,122 Q110,128 14,124 Z" fill="#f2b878" opacity="0.32"/>
<path d="M300,140 Q400,132 496,138 Q400,145 300,140 Z" fill="#f2b878" opacity="0.26"/>
<!-- BG PLANE: one cloud bank, the airship_0 cloud: rose body, a cool band
     underneath, a warm rim on the lit upper-left edge. It drifts. -->
<g transform="translate(-14 -6)">
  <g>
    <path d="M340,100 Q336,86 356,84 Q362,68 386,70 Q400,58 422,66 Q442,60 452,74 Q472,76 468,92 Q476,102 458,106 L352,106 Q338,106 340,100 Z" fill="#b08aa2" opacity="0.9"/>
    <path d="M342,98 Q400,94 470,96 Q474,104 458,106 L352,106 Q340,106 342,98 Z" fill="#8e769a" opacity="0.85"/>
    <path d="M356,84 Q362,68 386,70 Q400,58 422,66 Q404,64 392,74 Q372,72 364,86 Z" fill="#f2c6a0" opacity="0.55"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-12,0;0,0" dur="26s"
                      repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </g>
</g>
<!-- THE MOORING POST, beyond the rail, rising from the ground below; the rail
     and the deck are drawn after it, so they cover its foot -->
<path d="M30,180 L31,66 Q38,61 45,66 L46,180 Z" fill="#6a4a24"/>
<path d="M31.5,180 L32.5,68 Q34,66 35.5,66 L35,180 Z" fill="#8a6a38" opacity="0.6"/>
<path d="M29,64 Q38,57 47,64 L47,68 Q38,64 29,68 Z" fill="#4a3018"/>
<path d="M30.6,92 L45.4,92 L45.5,95 L30.5,95 Z" fill="#3a3028" opacity="0.85"/>
<ellipse cx="46" cy="74" rx="2.6" ry="3" fill="none" stroke="#b89030" stroke-width="1.2"/>
<!-- the line from the post to the fairlead: it sags and lifts as the ship
     rides on its tether -->
<path d="M47,74 Q80,114 116,128" fill="none" stroke="#8a7040" stroke-width="1.8" stroke-linecap="round">
  <animate attributeName="d" values="M47,74 Q80,114 116,128;M47,74 Q82,120 116,128;M47,74 Q80,114 116,128" dur="6.4s"
           repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- THE ENVELOPE'S BELLY, overhead: the red of airship_0, gold bands that
     follow its curve, a shade band and the mid-plane ink line on its edge -->
<path d="M-10,-2 L510,-2 L510,18 Q250,56 -10,18 Z" fill="url(#a1dEnv)"/>
<path d="M-10,13 Q250,51 510,13 L510,18 Q250,56 -10,18 Z" fill="#8a1e1e" opacity="0.6"/>
<g fill="none" stroke="#e8a820" opacity="0.8">
  <path d="M-10,6 Q250,42 510,6" stroke-width="1.6" opacity="0.6"/>
  <path d="M90,-2 L90,29" stroke-width="3"/><path d="M250,-2 L250,36" stroke-width="3.4"/><path d="M410,-2 L410,29" stroke-width="3"/>
</g>
<path d="M-10,18 Q250,56 510,18" fill="none" stroke="#501c27" stroke-width="1"/>
<!-- rigging: from the belly down to the rail posts, each with a slight sag -->
<g fill="none" stroke="#6a5020" stroke-width="1.4" opacity="0.85">
  <path d="M60,26 Q66,80 82,130"/>
  <path d="M200,35 Q210,84 218,130"/>
  <path d="M368,33 Q362,84 354,130"/>
  <path d="M440,27 Q434,80 422,130"/>
</g>
<!-- THE RAIL at the far edge of the deck: turned posts, then the rails over
     them, curving very slightly with the deck -->
<g fill="url(#a1dRail)">
  <path d="M11,176 L11,132 L17,132 L17,176 Z"/><path d="M79,175 L79,131 L85,131 L85,175 Z"/>
  <path d="M147,174 L147,130 L153,130 L153,174 Z"/><path d="M215,174 L215,130 L221,130 L221,174 Z"/>
  <path d="M283,174 L283,130 L289,130 L289,174 Z"/><path d="M351,174 L351,130 L357,130 L357,174 Z"/>
  <path d="M419,175 L419,131 L425,131 L425,175 Z"/><path d="M487,176 L487,132 L493,132 L493,176 Z"/>
</g>
<path d="M0,129 Q250,124 500,129 L500,135 Q250,130 0,135 Z" fill="#8a6028"/>
<path d="M0,129 Q250,124 500,129 Q250,126.5 0,131.5 Z" fill="#c49a4a" opacity="0.55"/>
<path d="M0,151 Q250,147 500,151 L500,154 Q250,150 0,154 Z" fill="#7a5424" opacity="0.9"/>
<!-- the fairlead: a brass ring on the top rail the line runs through -->
<ellipse cx="118" cy="129" rx="3.4" ry="2.4" fill="none" stroke="#c9a441" stroke-width="1.4"/>
<!-- THE DECK. A dark waterway along the far edge, then planks whose seams
     all run to the one vanishing point, and staggered butt joints. -->
<path d="M0,176 Q250,172 500,176 L500,260 L0,260 Z" fill="url(#a1dDeck)"/>
<path d="M0,174 Q250,170 500,174 L500,178 Q250,174 0,178 Z" fill="#33200e" opacity="0.8"/>
<g fill="none" stroke="#33200e" stroke-width="0.9" opacity="0.4">
  <path d="M16,177 L-261,260"/><path d="M42,176 L-204,260"/><path d="M68,175 L-147,260"/><path d="M94,175 L-91,260"/>
  <path d="M120,174 L-34,260"/><path d="M146,174 L23,260"/><path d="M172,174 L80,260"/><path d="M198,174 L136,260"/>
  <path d="M224,174 L193,260"/><path d="M250,174 L250,260"/><path d="M276,174 L307,260"/><path d="M302,174 L364,260"/>
  <path d="M328,174 L420,260"/><path d="M354,174 L477,260"/><path d="M380,174 L534,260"/><path d="M406,174 L591,260"/>
  <path d="M432,175 L647,260"/><path d="M458,175 L704,260"/><path d="M484,176 L761,260"/>
</g>
<g fill="none" stroke="#33200e" stroke-width="0.8" opacity="0.35">
  <path d="M154,200 L180,200"/><path d="M262,190 L284,190"/><path d="M330,214 L362,214"/>
  <path d="M60,236 L104,236"/><path d="M394,234 L436,234"/><path d="M222,246 L262,246"/>
</g>
<!-- the lit plank edge nearest the glow, so the deck catches the light -->
<path d="M0,180 Q120,177 240,178 Q120,181 0,184 Z" fill="#c49a4a" opacity="0.18"/>
<!-- THE LINE comes over the fairlead, down the inside of the rail and across
     the deck to a brass cleat, made fast with figure-eight turns; the spare
     end is flaked into a coil beside it. This is the knot he just finished. -->
<path d="M118,131 Q121,152 122,176 Q138,206 166,223" fill="none" stroke="#8a7040" stroke-width="3" stroke-linecap="round"/>
<path d="M118,131 Q121,152 122,176 Q138,206 166,223" fill="none" stroke="#c4a860" stroke-width="1" opacity="0.45"/>
<g transform="translate(182 226) scale(1.45) translate(-182 -226)">
<ellipse cx="182" cy="228" rx="18" ry="3" fill="#1e1206" opacity="0.4"/>
<path d="M166,227 Q166,222 172,223 L192,223 Q198,222 198,227 Q190,225 182,225.5 Q174,225 166,227 Z" fill="#a8802c"/>
<path d="M176,226 L176,229 L188,229 L188,226 Z" fill="#8a6a1a"/>
<path d="M168,224 Q182,221 196,224" fill="none" stroke="#e0b45a" stroke-width="0.8" opacity="0.7"/>
<g fill="none" stroke="#8a7040" stroke-width="2.2" stroke-linecap="round">
  <path d="M170,224 Q182,228 192,222"/><path d="M172,227 Q182,220 194,226"/><path d="M174,223 Q184,229 196,224"/>
  <path d="M194,226 Q204,234 214,236"/>
</g>
</g>
<g fill="none" stroke="#8a7040" stroke-width="2" opacity="0.95">
  <ellipse cx="226" cy="238" rx="15" ry="4"/><ellipse cx="226" cy="237.6" rx="10.5" ry="2.8"/><ellipse cx="226" cy="237.3" rx="6" ry="1.7"/>
</g>
<g fill="none" stroke="#c4a860" stroke-width="0.6" opacity="0.4">
  <path d="M212,236 Q226,232 240,236"/><path d="M216,236 Q226,233.5 236,236"/>
</g>
<!-- deck stores on the right: a crate with the lantern on it, and a barrel -->
${(function () {
  var crate = { x: 446, y: 214, size: 34, biome: 'skyship' };
  return bcArt.prop('barrel', { x: 486, y: 236, scale: 1.15, biome: 'skyship' }) +
    bcArt.prop('crate', crate) +
    bcArt.on(bcArt.anchors('crate', crate).top, 'lantern', { biome: 'skyship', idp: 'a1dLamp' });
})()}
<!-- SIMON, on the deck in front of the cleat, turned to greet you -->
${bcMissionPlace('simon', 'welcome', 300, 246, 180)}
</svg>`;

// The cabin interior. Warm wood, chart table with crosswords, lantern, porthole.
// It was airship_1; step 1 now happens out on deck (Simon knotting the
// mooring line), so the cabin is kept here as the base the logbook steps
// (airship_2, 4, 6) are built from, and is not itself a scene key.
var SKY_CABIN = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="cabinBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a3a18"/><stop offset="100%" stop-color="#3a2210"/>
  </linearGradient>
  <radialGradient id="skyLanternGlow" cx="85%" cy="30%" r="40%">
    <stop offset="0%" stop-color="#ffcc44" stop-opacity="0.25"/><stop offset="100%" stop-color="#ffcc44" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="a1PortSky" cx="38%" cy="30%" r="72%">
    <stop offset="0%" stop-color="#a0d4f8"/><stop offset="60%" stop-color="#5aafe8"/><stop offset="100%" stop-color="#2a6ab8"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#cabinBg)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#skyLanternGlow)"/>

<!-- ====================================================================
     THE HULL WALL. It was ten dead-straight vertical lines, which reads as
     ruled paper, not as the inside of anything. A cabin in an airship sits
     inside a HULL: the frames bow outward and the planking between them
     follows that bow, so the wall is a set of shallow arcs that get flatter
     toward the middle of the room and lean harder at the corners.
     ==================================================================== -->
<path d="M0,0 Q10,130 0,260 L44,260 Q34,130 44,0 Z" fill="#4e3014" opacity="0.5"/>
<path d="M456,0 Q466,130 456,260 L500,260 Q490,130 500,0 Z" fill="#4e3014" opacity="0.5"/>
<g fill="none" stroke="#42260e" stroke-width="1.6" opacity="0.5">
  <path d="M44,0 Q34,130 44,260"/>
  <path d="M108,0 Q102,130 108,260"/>
  <path d="M172,0 Q169,130 172,260"/>
  <path d="M236,0 Q235,130 236,260"/>
  <path d="M300,0 Q301,130 300,260"/>
  <path d="M364,0 Q367,130 364,260"/>
  <path d="M428,0 Q434,130 428,260"/>
</g>
<!-- highlight down the lit side of each frame, so the planks have a round -->
<g fill="none" stroke="#7a5024" stroke-width="1" opacity="0.28">
  <path d="M47,0 Q37,130 47,260"/>
  <path d="M111,0 Q105,130 111,260"/>
  <path d="M175,0 Q172,130 175,260"/>
  <path d="M239,0 Q238,130 239,260"/>
  <path d="M303,0 Q304,130 303,260"/>
  <path d="M367,0 Q370,130 367,260"/>
  <path d="M431,0 Q437,130 431,260"/>
</g>
<!-- the deckhead beam and the rail where the panelling stops -->
<path d="M0,26 Q250,20 500,26 L500,33 Q250,27 0,33 Z" fill="#6a4420" opacity="0.55"/>
<path d="M0,33 Q250,27 500,33 Q250,30 0,36 Z" fill="#8a6030" opacity="0.3"/>

<!-- ====================================================================
     THE PORTHOLE, given a rim you can believe is bolted through the hull.
     It was two flat discs and a crosshair. What makes brass read as brass is
     that it is BRIGHT ON TOP AND DARK UNDERNEATH, and what makes a porthole
     read as a hole is that the sky inside it is lighter at the top.
     ==================================================================== -->
<circle cx="419" cy="167" r="34.5" fill="#3c2410" opacity="0.3"/>
<circle cx="418" cy="166" r="31" fill="url(#a1PortSky)"/>
<!-- cloud drifting past outside, because the ship is moving -->
<path d="M392,152 Q398,145 406,148 Q413,142 421,148 Q429,147 430,154 Q410,159 392,152 Z" fill="#f4f8ff" opacity="0.7">
  <animate attributeName="opacity" values="0;0.7;0.7;0" dur="18s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.15;0.8;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="46,0;-46,6" dur="18s" repeatCount="indefinite"/>
</path>
<path d="M396,178 Q404,174 412,177 Q422,174 426,180 Q410,185 396,178 Z" fill="#e8f0fc" opacity="0.4">
  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="25s" begin="4s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.15;0.8;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="42,0;-42,-4" dur="25s" begin="4s" repeatCount="indefinite"/>
</path>
<!-- the glass: a curved sheen high-left, not a symmetric blob -->
<path d="M398,150 Q404,142 414,143 Q404,152 400,162 Q394,158 398,150 Z" fill="#f8fcff" opacity="0.45"/>
<!-- the brass ring, lit above and shadowed below -->
<path d="M418,132 A34,34 0 0,1 452,166 A34,34 0 0,1 418,200 A34,34 0 0,1 384,166 A34,34 0 0,1 418,132 Z
         M418,138 A28,28 0 0,0 390,166 A28,28 0 0,0 418,194 A28,28 0 0,0 446,166 A28,28 0 0,0 418,138 Z"
      fill="#a8802c" fill-rule="evenodd"/>
<path d="M418,132 A34,34 0 0,0 384,166 Q384,158 388,150 Q398,134 418,132 Z" fill="#e0b45a" opacity="0.75"/>
<path d="M452,166 A34,34 0 0,1 418,200 Q436,198 446,184 Q452,175 452,166 Z" fill="#5a3c12" opacity="0.85"/>
<!-- the cross bars, curved to sit ON the glass rather than across the frame -->
<path d="M389,166 Q418,163 447,166" fill="none" stroke="#b89030" stroke-width="2.4" opacity="0.85"/>
<path d="M418,137 Q415,166 418,195" fill="none" stroke="#b89030" stroke-width="2.4" opacity="0.85"/>
<!-- bolt heads round the rim -->
<g fill="#d4b040" opacity="0.85">
  <circle cx="418" cy="135" r="1.9"/><circle cx="442" cy="145" r="1.9"/>
  <circle cx="449" cy="166" r="1.9"/><circle cx="442" cy="188" r="1.8"/>
  <circle cx="418" cy="197" r="1.8"/><circle cx="394" cy="188" r="1.8"/>
  <circle cx="387" cy="166" r="1.9"/><circle cx="394" cy="145" r="1.9"/>
</g>
<!-- No light spill is painted on the wall under the port. It was tried twice
     (sky blue, then a warm wash) and both DARKENED this wood at low opacity,
     reading as a bib hanging off the rim rather than as light. The rim shadow
     alone is what puts the porthole on the wall. -->
<!-- ====================================================================
     THE LANTERN. It hung as a rect with a rect on top. A ship's lantern is
     a glass barrel in a brass cage, hung from a hook so it can swing, and
     the thing that makes it read is the CAGE BARS crossing the flame.
     ==================================================================== -->
<path d="M414,24 Q416,32 414,40" fill="none" stroke="#5a3a18" stroke-width="1.6" opacity="0.8"/>
<path d="M406,42 Q414,36 422,42" fill="none" stroke="#b89030" stroke-width="1.8" opacity="0.85"/>
<g>
  <animateTransform attributeName="transform" type="rotate" values="-1.6 414 42;1.6 414 42;-1.6 414 42"
                    dur="6.4s" repeatCount="indefinite" calcMode="spline"
                    keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <!-- the cap, domed -->
  <path d="M403,50 Q414,40 425,50 Q414,54 403,50 Z" fill="#c9a441"/>
  <path d="M405,49 Q414,42 423,49 Q414,51 405,49 Z" fill="#e8c868" opacity="0.5"/>
  <!-- the glass barrel: waisted, not a box -->
  <path d="M405,51 Q401,66 405,80 Q414,84 423,80 Q427,66 423,51 Q414,48 405,51 Z" fill="#ffcc44" opacity="0.22"/>
  <ellipse cx="414" cy="67" rx="6" ry="9" fill="#ffcc44" opacity="0.7">
    <animate attributeName="opacity" values="0.55;0.78;0.6;0.72;0.55" dur="3.8s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.28;0.55;0.78;1"
             keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
  </ellipse>
  <path d="M414,60 Q411,66 414,72 Q417,66 414,60 Z" fill="#fff0b8" opacity="0.8">
    <animate attributeName="opacity" values="0.6;0.9;0.65;0.85;0.6" dur="2.9s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.3;0.55;0.8;1"
             keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <!-- cage bars, which is what says lantern rather than jar -->
  <path d="M405,51 Q401,66 405,80" fill="none" stroke="#a8802c" stroke-width="1.6"/>
  <path d="M423,51 Q427,66 423,80" fill="none" stroke="#a8802c" stroke-width="1.6"/>
  <path d="M414,49 Q413,66 414,82" fill="none" stroke="#a8802c" stroke-width="1.2" opacity="0.7"/>
  <!-- the base -->
  <path d="M404,80 Q414,86 424,80 Q422,88 414,89 Q406,88 404,80 Z" fill="#a8802c"/>
</g>

<!-- ====================================================================
     THE FLOOR, laid before the furniture so the table can stand ON it.
     Boards run away from the viewer, so they converge; the joins between
     them are not parallel lines.
     ==================================================================== -->
<path d="M0,238 Q250,232 500,238 L500,260 L0,260 Z" fill="#33200e"/>
<path d="M0,238 Q250,232 500,238 Q250,235 0,241 Z" fill="#6a4420" opacity="0.35"/>
<g fill="none" stroke="#241608" stroke-width="0.9" opacity="0.45">
  <path d="M52,240 Q46,250 38,260"/>
  <path d="M148,238 Q145,249 141,260"/>
  <path d="M250,236 L250,260"/>
  <path d="M352,238 Q355,249 359,260"/>
  <path d="M448,240 Q454,250 462,260"/>
</g>

<!-- ====================================================================
     THE CHART TABLE. It was a 280x90 rounded rect with two stubs under it,
     i.e. a crate. What a table needs is a TOP YOU SEE ACROSS: the far edge
     is higher and shorter than the near edge, and the top is a quadrilateral
     rather than a rectangle. Legs go down before the top goes down, so the
     top overlaps them and the near legs are hidden behind the apron.
     ==================================================================== -->
<!-- contact shadow, so it is standing on the deck rather than in front of it -->
<path d="M62,244 Q186,236 318,244 Q186,254 62,244 Z" fill="#1e1206" opacity="0.45"/>
<!-- far legs, turned, seen between the near ones -->
<path d="M104,178 Q101,200 103,214 Q100,224 104,240 L112,240 Q116,224 113,214 Q115,200 112,178 Z" fill="#4e3014"/>
<path d="M272,178 Q269,200 271,214 Q268,224 272,240 L280,240 Q284,224 281,214 Q283,200 280,178 Z" fill="#4e3014"/>
<!-- the apron under the top, following the top's own curve -->
<path d="M74,180 Q186,172 310,180 L310,196 Q186,190 74,198 Z" fill="#563518"/>
<!-- a shallow drawer with a brass pull, because a chart table has one -->
<path d="M112,183 Q186,178 262,183 L262,194 Q186,189 112,194 Z" fill="#66401c" opacity="0.9"/>
<path d="M112,183 Q186,178 262,183 Q186,180.5 112,185.5 Z" fill="#8a5a28" opacity="0.45"/>
<path d="M178,189 Q186,186 194,189 Q186,192 178,189 Z" fill="#c9a441" opacity="0.85"/>
<!-- near legs, splayed a little the way a sea-going table's are -->
<path d="M76,180 Q72,206 68,222 Q64,232 66,244 L76,244 Q78,232 78,222 Q82,206 84,180 Z" fill="#5f3a1a"/>
<path d="M78,184 Q74,208 71,226" fill="none" stroke="#8a5a28" stroke-width="1.6" opacity="0.35"/>
<path d="M300,180 Q304,206 308,222 Q312,232 310,244 L300,244 Q298,232 298,222 Q294,206 292,180 Z" fill="#5f3a1a"/>
<path d="M302,184 Q306,208 309,226" fill="none" stroke="#8a5a28" stroke-width="1.6" opacity="0.35"/>
<!-- a stretcher between them, low down -->
<path d="M74,224 Q186,218 310,224 Q186,228 74,230 Z" fill="#4e3014" opacity="0.85"/>
<!-- THE TOP. Far edge short and high, near edge long and low. -->
<path d="M96,150 Q186,144 290,150 L318,182 Q186,190 68,182 Z" fill="#7a5024"/>
<path d="M100,153 Q186,148 286,153 L308,178 Q186,185 78,178 Z" fill="#96652e"/>
<!-- planking on the top, converging toward the far edge -->
<g fill="none" stroke="#6a4420" stroke-width="0.9" opacity="0.4">
  <path d="M142,150 Q136,166 128,183"/>
  <path d="M186,148 Q186,166 186,186"/>
  <path d="M232,150 Q238,166 246,183"/>
</g>
<!-- the near edge lip, which is what gives the top thickness -->
<path d="M68,182 Q186,190 318,182 L318,187 Q186,195 68,187 Z" fill="#5f3a1a"/>

<!-- ====================================================================
     WHAT IS ON THE TABLE. It was three blank cards standing on their edge.
     Paper lying on a table shares the table's perspective, so a sheet is a
     QUADRILATERAL, not a rectangle, and its corners lift.
     ==================================================================== -->
<!-- a rolled chart, half unrolled, hanging over the far edge -->
<path d="M96,158 Q142,152 190,157 L196,176 Q142,182 90,176 Z" fill="#e8dcc0"/>
<path d="M96,158 Q142,152 190,157 Q142,161 96,163 Z" fill="#f4ecd8" opacity="0.6"/>
<!-- the chart's content. Two wavy strokes read as a crease in the paper; a
     chart reads because there is LAND on it, a filled mass with a bay bitten
     out of one side, and the sea round it carrying depth marks. -->
<path d="M112,171 Q120,164 132,165 Q142,160 152,165 Q158,171 152,174 Q144,171 138,175
         Q130,179 120,176 Q112,176 112,171 Z" fill="#c2ab7c" opacity="0.85"/>
<path d="M112,171 Q120,164 132,165 Q142,160 152,165 Q158,171 152,174 Q144,171 138,175
         Q130,179 120,176 Q112,176 112,171 Z" fill="none" stroke="#8a6a40" stroke-width="0.7" opacity="0.8"/>
<path d="M162,166 Q172,163 182,167 Q186,171 180,173 Q170,172 162,169 Z" fill="#c2ab7c" opacity="0.7"/>
<path d="M162,166 Q172,163 182,167 Q186,171 180,173 Q170,172 162,169 Z" fill="none" stroke="#8a6a40" stroke-width="0.6" opacity="0.65"/>
<!-- a rhumb line ruled across the sea between the two, which is the thing a
     navigator actually leaves on a chart -->
<path d="M100,178 Q140,170 190,163" fill="none" stroke="#a06a3a" stroke-width="0.6" opacity="0.55"/>
<path d="M126,169 q3,-2.5 5,1 q-2,3.5 -5,-1 Z" fill="#8a6a40" opacity="0.7"/>
<path d="M170,179 q2.5,-2 4,0.8 q-1.6,2.8 -4,-0.8 Z" fill="#8a6a40" opacity="0.45"/>
<!-- the roll it came off, with the paper curling back into it -->
<path d="M188,155 Q198,152 202,158 Q204,166 200,174 Q192,180 186,176 Q192,166 188,155 Z" fill="#ddd0b0"/>
<path d="M190,157 Q198,156 199,162 Q200,169 196,175" fill="none" stroke="#b8a880" stroke-width="0.8" opacity="0.6"/>

<g transform="translate(-8 -10)"><!-- A CROSSWORD SHEET, drawn as a GRID. Same lesson as the cafe: a framed
     or laid-out crossword reads at any size as black and white cells, and
     not at all as ruled lines with nothing in them. -->
<path d="M204,160 Q238,156 272,161 L276,182 Q238,187 200,181 Z" fill="#efe6cc"/>
<path d="M204,160 Q238,156 272,161 Q238,164 204,164 Z" fill="#f8f2e0" opacity="0.7"/>
<g stroke="#9a8a66" stroke-width="0.45" opacity="0.65" fill="none">
  <path d="M216.7,162.2 Q215.3,171.2 214,180.1"/>
  <path d="M227.3,162.7 Q226.7,171.7 226,180.6"/>
  <path d="M238,163 Q238,172 238,180.9"/>
  <path d="M248.7,163 Q249.3,172 250,180.9"/>
  <path d="M259.3,162.9 Q260.7,171.8 262,180.8"/>
  <path d="M205,166.1 Q238,167.5 271,167.1"/>
  <path d="M204,170.6 Q238,172 272,171.6"/>
  <path d="M203,175 Q238,176.4 273,176"/>
</g>
<path d="M216.7,162.2 Q222,162.5 227.3,162.7 L227,167.2 Q221.5,167 216,166.7 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M248.7,163 Q254,163 259.3,162.9 L260,167.4 Q254.5,167.5 249,167.5 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M227,167.2 Q232.5,167.4 238,167.5 L238,172 Q232.3,171.8 226.7,171.7 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M238,172 Q243.7,172 249.3,172 L249.7,176.5 Q243.8,176.5 238,176.4 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M204,170.6 Q209.7,170.9 215.3,171.2 L214.7,175.6 Q208.8,175.3 203,175 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M261.3,176.3 Q267.2,176.2 273,176 L274,180.5 Q268,180.6 262,180.8 Z" fill="#3f2c14" opacity="0.72"/>
<path d="M214.7,175.6 Q220.5,175.9 226.3,176.1 L226,180.6 Q220,180.4 214,180.1 Z" fill="#3f2c14" opacity="0.72"/>
<!-- a pencil left lying across it, at the angle a hand puts it down -->
<path d="M258,186 L292,172" fill="none" stroke="#c9a441" stroke-width="2.2" stroke-linecap="round"/>
<path d="M290,173 L296,170 L295,174 Z" fill="#e8dcc0"/>
<path d="M295,171 L296.6,170.3 L296.4,172 Z" fill="#4a3a2a"/>

</g><g transform="translate(-6 -24)"><!-- ====================================================================
     THE COMPASS, now a compass ROSE rather than three concentric circles
     and a bullseye. A rose reads by its POINTS: long cardinals, short
     intercardinals, each split light-and-dark down its axis. It also sits
     in the table's perspective, so its dial is an ellipse.
     ==================================================================== -->
<ellipse cx="272" cy="196" rx="20" ry="9" fill="#241608" opacity="0.4"/>
<path d="M252,192 Q272,184 292,192 Q292,197 272,201 Q252,197 252,192 Z" fill="#8a6a1a"/>
<path d="M253,191 Q272,184 291,191 Q272,196 253,191 Z" fill="#c9a441"/>
<ellipse cx="272" cy="190" rx="16" ry="6.4" fill="#f0e8d0"/>
<ellipse cx="272" cy="190" rx="16" ry="6.4" fill="none" stroke="#a8802c" stroke-width="1"/>
<!-- the rose: cardinals long, intercardinals short, split down the middle -->
<path d="M272,184 L274,190 L272,196 Z" fill="#8a7a5a" opacity="0.8"/>
<path d="M272,184 L270,190 L272,196 Z" fill="#4a4030" opacity="0.75"/>
<path d="M256,190 L272,188 L288,190 Z" fill="#8a7a5a" opacity="0.55"/>
<path d="M256,190 L272,192 L288,190 Z" fill="#4a4030" opacity="0.5"/>
<path d="M261,186.5 L272,190 L266,193.5 Z" fill="#6a5a44" opacity="0.4"/>
<path d="M283,186.5 L272,190 L278,193.5 Z" fill="#6a5a44" opacity="0.4"/>
<!-- the needle, north in red, swinging the way a needle settles -->
<g>
  <animateTransform attributeName="transform" type="rotate" values="-5 272 190;4 272 190;-5 272 190"
                    dur="7.2s" repeatCount="indefinite" calcMode="spline"
                    keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <path d="M272,185 L275,190 L272,191 L269,190 Z" fill="#cc2222"/>
  <path d="M272,195 L269,190 L272,189 L275,190 Z" fill="#54443a"/>
</g>
<circle cx="272" cy="190" r="1.3" fill="#a8802c"/>

</g><g transform="translate(-12 -24)"><!-- brass dividers, left open where a navigator set them down. Their
     points TOUCH the table, and the shadow under them is what puts them on
     the wood rather than in the air in front of it. -->
<path d="M228,193 Q222,199 217,203 Q223,201 229,196 Q235,201 240,204 Q235,199 229,193 Z" fill="#1e1206" opacity="0.3"/>
<path d="M228,190 Q223,196 218,201" fill="none" stroke="#c9a441" stroke-width="1.5" stroke-linecap="round"/>
<path d="M228,190 Q234,196 239,202" fill="none" stroke="#c9a441" stroke-width="1.5" stroke-linecap="round"/>
<path d="M228,186 Q225,188 226,190 Q228,191 230,190 Q231,188 228,186 Z" fill="#e0b45a"/>

</g><g transform="translate(0 -12)"><!-- a mug of something, steaming, because someone is working here -->
<ellipse cx="128" cy="187" rx="9" ry="3.4" fill="#241608" opacity="0.35"/>
<path d="M121,177 Q121,186 128,186.6 Q135,186 135,177 Q128,175 121,177 Z" fill="#e8dcc0"/>
<path d="M135,179 Q141,180 140,183 Q139,186 134,185.4" fill="none" stroke="#e8dcc0" stroke-width="1.5"/>
<ellipse cx="128" cy="177" rx="7" ry="2.2" fill="#4a2c14" opacity="0.8"/>
<path d="M125,175 Q122,167 126,159" fill="none" stroke="#fff4e0" stroke-width="1.1" opacity="0.2">
  <animate attributeName="opacity" values="0.08;0.24;0.08" dur="3.4s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M125,175 Q122,167 126,159;M125,175 Q129,167 124,159;M125,175 Q122,167 126,159"
           dur="5.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M131,174 Q134,166 130,158" fill="none" stroke="#fff4e0" stroke-width="1" opacity="0.15">
  <animate attributeName="opacity" values="0.06;0.19;0.06" dur="4.3s" begin="0.7s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animate attributeName="d" values="M131,174 Q134,166 130,158;M131,174 Q128,166 132,158;M131,174 Q134,166 130,158"
           dur="6.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

</g><!-- The left wall carries the barometer alone. A hanging rope coil was drawn
     here three ways (nested rings, filled bundle, concentric loops) and read
     as an onion, a pinecone and a leaf; a speaking tube after that read as a
     question mark. At 20px none of those forms survives, so the wall is left
     plain rather than shipped with an ornament nobody can identify. -->
<!-- barometer: a brass dial on a board, and the board stops ABOVE the rail
     rather than running behind it, so it reads as hung and not as let in -->
<path d="M148,52 Q160,48 172,52 L172,92 Q160,96 148,92 Z" fill="#4e3014" opacity="0.85"/>
<path d="M150,54 Q160,51 170,54 L170,90 Q160,93 150,90 Z" fill="#66401c" opacity="0.5"/>
<path d="M155,50 Q160,46 165,50 Q160,52 155,50 Z" fill="#8a6a30" opacity="0.7"/>
<circle cx="160" cy="70" r="11" fill="#a8802c"/>
<path d="M160,59 A11,11 0 0,0 149,70 Q151,61 160,59 Z" fill="#e0b45a" opacity="0.7"/>
<circle cx="160" cy="70" r="8.4" fill="#f0e8d0" opacity="0.9"/>
<!-- the tick marks, which are what make a dial read as a dial -->
<g stroke="#8a6a1a" stroke-width="0.7" opacity="0.7" fill="none">
  <path d="M154,64.5 L155.4,65.9"/><path d="M160,62.6 L160,64.6"/>
  <path d="M166,64.5 L164.6,65.9"/><path d="M168,70 L166,70"/>
  <path d="M152,70 L154,70"/>
</g>
<path d="M153,68 Q160,63.5 167,68" fill="none" stroke="#a8802c" stroke-width="0.7" opacity="0.55"/>
<path d="M160,70 L165,65" fill="none" stroke="#4a3a2a" stroke-width="1.1" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" values="-6 160 70;5 160 70;-6 160 70"
                    dur="11s" repeatCount="indefinite" calcMode="spline"
                    keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<circle cx="160" cy="70" r="1.1" fill="#8a6a1a"/>
</svg>`;

// Scenes 2, 4, 6 turn the pages of Simon's logbook: he flips to a marked page,
// then on to the next. Built from the cabin with every gradient id suffixed, so
// it can never collide with a cabin id in the shared document. Simon stands at
// the right-hand end of the chart table in his WORK pose, the logbook in his
// glove: the one doing the flipping is him. The book used to lie open on the
// table with Simon across the room waving at it, which acted nothing out, and
// the table is too tall for any of his poses to put a hand on its top, so the
// book lives in his hand and nowhere else (never two copies in one room).
STORY_SCENES['airship_2'] = SKY_CABIN
  .replace(/id="([A-Za-z0-9]+)"/g, 'id="$1Log"')
  .replace(/url\(#([A-Za-z0-9]+)\)/g, 'url(#$1Log)')
  .replace('</svg>', bcMissionPlace('simon', 'work', 322, 251, 150) + '\n</svg>');

// Simon's front hand. His model has no left-hand/right-hand ids for
// bcApprovedHold to cut, so this lifts one hand group (data-hand="left" or
// "right"), and with sleeve=true the 19-wide sleeve stroke that ends at it, out
// of the pose and redraws them with the same placement and body transform.
// Emit it AFTER whatever he is touching, so the glove closes over the object.
function skySimonHand(pose, hand, x, floor, height, flip, sleeve) {
  var art = BC_MISSION_CAST.simon.poses[pose];
  var body = art.match(/<g data-body-performance="[^"]*" transform="([^"]*)">/);
  var i = art.indexOf('<g data-hand="' + hand + '"'), depth = 0, re = /<g\b|<\/g>/g, t, end = i;
  re.lastIndex = i;
  while ((t = re.exec(art))) { depth += t[0] === '</g>' ? -1 : 1; if (!depth) { end = t.index + 4; break; } }
  var glove = art.slice(i, end), at = glove.match(/translate\(([-\d.]+) ([-\d.]+)\)/);
  var arm = !sleeve ? '' : (art.match(/<path d="[^"]*" fill="none" stroke="[^"]*" stroke-width="19"[^>]*>/g) || [])
    .filter(function (p) { return p.indexOf(' ' + at[1] + ' ' + at[2] + '"') > 0; }).join('');
  return bcApprovedOpen('simon', pose, x, floor, height, flip, true).replace('data-approved-character', 'data-approved-hands') +
    '<g transform="' + (body ? body[1] : '') + '">' + arm + glove + '</g></g>';
}

// Scene 3 (VOYAGE puzzle): Simon's logbook open on the chart table, cabin behind
STORY_SCENES['airship_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="a3Cabin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a3a18"/><stop offset="100%" stop-color="#3a2210"/>
  </linearGradient>
  <radialGradient id="a3Lamp" cx="85%" cy="30%" r="40%">
    <stop offset="0%" stop-color="#ffcc44" stop-opacity="0.25"/><stop offset="100%" stop-color="#ffcc44" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="a3PortSky" cx="38%" cy="30%" r="72%">
    <stop offset="0%" stop-color="#a0d4f8"/><stop offset="60%" stop-color="#5aafe8"/><stop offset="100%" stop-color="#2a6ab8"/>
  </radialGradient>
  <radialGradient id="a3Read" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.14"/><stop offset="100%" stop-color="#ffe0a0" stop-opacity="0"/>
  </radialGradient>
</defs>
<!-- ====================================================================
     The SAME CABIN as airship_1: its wall gradient, its hull frames, its
     porthole and its lantern, all at the airship_1 positions. Only the table
     comes nearer, with Simon's logbook lying open on it.
     ==================================================================== -->
<rect width="500" height="260" fill="url(#a3Cabin)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#a3Lamp)"/>
<path d="M0,0 Q10,130 0,260 L44,260 Q34,130 44,0 Z" fill="#4e3014" opacity="0.5"/>
<path d="M456,0 Q466,130 456,260 L500,260 Q490,130 500,0 Z" fill="#4e3014" opacity="0.5"/>
<g fill="none" stroke="#42260e" stroke-width="1.6" opacity="0.5">
  <path d="M44,0 Q34,130 44,260"/>
  <path d="M108,0 Q102,130 108,260"/>
  <path d="M172,0 Q169,130 172,260"/>
  <path d="M236,0 Q235,130 236,260"/>
  <path d="M300,0 Q301,130 300,260"/>
  <path d="M364,0 Q367,130 364,260"/>
  <path d="M428,0 Q434,130 428,260"/>
</g>
<g fill="none" stroke="#7a5024" stroke-width="1" opacity="0.28">
  <path d="M47,0 Q37,130 47,260"/>
  <path d="M111,0 Q105,130 111,260"/>
  <path d="M175,0 Q172,130 175,260"/>
  <path d="M239,0 Q238,130 239,260"/>
  <path d="M303,0 Q304,130 303,260"/>
  <path d="M367,0 Q370,130 367,260"/>
  <path d="M431,0 Q437,130 431,260"/>
</g>
<path d="M0,26 Q250,20 500,26 L500,33 Q250,27 0,33 Z" fill="#6a4420" opacity="0.55"/>
<path d="M0,33 Q250,27 500,33 Q250,30 0,36 Z" fill="#8a6030" opacity="0.3"/>

<!-- THE PORTHOLE, the airship_1 fitting, set 18 higher than in airship_1
     because the nearer table's far edge would otherwise cut its lower rim -->
<g transform="translate(0 -18)">
<circle cx="419" cy="167" r="34.5" fill="#3c2410" opacity="0.3"/>
<circle cx="418" cy="166" r="31" fill="url(#a3PortSky)"/>
<path d="M392,152 Q398,145 406,148 Q413,142 421,148 Q429,147 430,154 Q410,159 392,152 Z" fill="#f4f8ff" opacity="0.7">
  <animate attributeName="opacity" values="0;0.7;0.7;0" dur="21s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.15;0.8;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="46,0;-46,6" dur="21s" repeatCount="indefinite"/>
</path>
<path d="M396,178 Q404,174 412,177 Q422,174 426,180 Q410,185 396,178 Z" fill="#e8f0fc" opacity="0.4">
  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="29s" begin="5s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.15;0.8;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="42,0;-42,-4" dur="29s" begin="5s" repeatCount="indefinite"/>
</path>
<path d="M398,150 Q404,142 414,143 Q404,152 400,162 Q394,158 398,150 Z" fill="#f8fcff" opacity="0.45"/>
<path d="M418,132 A34,34 0 0,1 452,166 A34,34 0 0,1 418,200 A34,34 0 0,1 384,166 A34,34 0 0,1 418,132 Z
         M418,138 A28,28 0 0,0 390,166 A28,28 0 0,0 418,194 A28,28 0 0,0 446,166 A28,28 0 0,0 418,138 Z"
      fill="#a8802c" fill-rule="evenodd"/>
<path d="M418,132 A34,34 0 0,0 384,166 Q384,158 388,150 Q398,134 418,132 Z" fill="#e0b45a" opacity="0.75"/>
<path d="M452,166 A34,34 0 0,1 418,200 Q436,198 446,184 Q452,175 452,166 Z" fill="#5a3c12" opacity="0.85"/>
<path d="M389,166 Q418,163 447,166" fill="none" stroke="#b89030" stroke-width="2.4" opacity="0.85"/>
<path d="M418,137 Q415,166 418,195" fill="none" stroke="#b89030" stroke-width="2.4" opacity="0.85"/>
<g fill="#d4b040" opacity="0.85">
  <circle cx="418" cy="135" r="1.9"/><circle cx="442" cy="145" r="1.9"/>
  <circle cx="449" cy="166" r="1.9"/><circle cx="442" cy="188" r="1.8"/>
  <circle cx="418" cy="197" r="1.8"/><circle cx="394" cy="188" r="1.8"/>
  <circle cx="387" cy="166" r="1.9"/><circle cx="394" cy="145" r="1.9"/>
</g>
</g>

<!-- THE LANTERN, the airship_1 lantern on the same hook -->
<path d="M414,24 Q416,32 414,40" fill="none" stroke="#5a3a18" stroke-width="1.6" opacity="0.8"/>
<path d="M406,42 Q414,36 422,42" fill="none" stroke="#b89030" stroke-width="1.8" opacity="0.85"/>
<g>
  <animateTransform attributeName="transform" type="rotate" values="-1.6 414 42;1.6 414 42;-1.6 414 42"
                    dur="6.9s" repeatCount="indefinite" calcMode="spline"
                    keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <path d="M403,50 Q414,40 425,50 Q414,54 403,50 Z" fill="#c9a441"/>
  <path d="M405,49 Q414,42 423,49 Q414,51 405,49 Z" fill="#e8c868" opacity="0.5"/>
  <path d="M405,51 Q401,66 405,80 Q414,84 423,80 Q427,66 423,51 Q414,48 405,51 Z" fill="#ffcc44" opacity="0.22"/>
  <ellipse cx="414" cy="67" rx="6" ry="9" fill="#ffcc44" opacity="0.7">
    <animate attributeName="opacity" values="0.55;0.78;0.6;0.72;0.55" dur="4.1s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.28;0.55;0.78;1"
             keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
  </ellipse>
  <path d="M414,60 Q411,66 414,72 Q417,66 414,60 Z" fill="#fff0b8" opacity="0.8">
    <animate attributeName="opacity" values="0.6;0.9;0.65;0.85;0.6" dur="3.1s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.3;0.55;0.8;1"
             keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M405,51 Q401,66 405,80" fill="none" stroke="#a8802c" stroke-width="1.6"/>
  <path d="M423,51 Q427,66 423,80" fill="none" stroke="#a8802c" stroke-width="1.6"/>
  <path d="M414,49 Q413,66 414,82" fill="none" stroke="#a8802c" stroke-width="1.2" opacity="0.7"/>
  <path d="M404,80 Q414,86 424,80 Q422,88 414,89 Q406,88 404,80 Z" fill="#a8802c"/>
</g>

<!-- SIMON, standing behind the table on the left, drawn BEFORE the table so
     its top crosses him at the chest (the table runs off both sides of the
     frame, which is the visible cause). Explain pose, flipped, so his arm
     reaches across the table and the glove lies on the left page, holding the
     book open for you: the sleeve and glove are drawn again over the book
     (below). His tail sits behind the table top, inside his silhouette.
     His floor is hidden under the table, so no contact shadow is drawn. -->
${bcMissionPlace('simon', 'explain', 110, 298, 250, true, { shadow: false })}

<!-- ====================================================================
     THE CHART TABLE, nearer than in airship_1, so it runs off both sides of
     the frame. The top is seen across (far edge high, near edge low) and the
     NEAR EDGE is in frame: a lit lip, then the dark front face that gives the
     top its thickness, then the shadow under it. Without that edge the top
     read as floor.
     ==================================================================== -->
<path d="M0,190 Q250,180 500,190 L500,238 Q250,246 0,238 Z" fill="#7a5024"/>
<path d="M0,194 Q250,184 500,194 L500,236 Q250,243 0,236 Z" fill="#96652e"/>
<g fill="none" stroke="#6a4420" stroke-width="1" opacity="0.35">
  <path d="M90,192 Q84,214 76,238"/>
  <path d="M186,186 Q184,214 180,242"/>
  <path d="M300,186 Q303,214 308,242"/>
  <path d="M410,190 Q418,214 428,240"/>
</g>
<!-- the near edge: a lit lip, then the front face (the band that used to
     streak across the middle of the top), then the shadow beneath -->
<path d="M0,236 Q250,243 500,236 L500,239 Q250,246 0,239 Z" fill="#b07a3a" opacity="0.7"/>
<path d="M0,239 Q250,246 500,239 L500,251 Q250,258 0,251 Z" fill="#5f3a1a"/>
<path d="M0,249 Q250,256 500,249 L500,251 Q250,258 0,251 Z" fill="#42260e" opacity="0.8"/>
<path d="M0,251 Q250,258 500,251 L500,260 L0,260 Z" fill="#241608"/>

<!-- ====================================================================
     THE LOGBOOK, open flat. Leather cover proud of the pages all round, a
     page block you can see the thickness of at the near edge, and a gutter
     that dips at the spine. Same perspective as the table top: the near edge
     is lower and wider than the far edge.
     ==================================================================== -->
<path d="M96,236 Q250,244 404,236 Q250,250 96,236 Z" fill="#1e1206" opacity="0.4"/>
<path d="M132,196 Q250,190 368,196 L400,234 Q250,242 100,234 Z" fill="#5a2a14"/>
<path d="M100,234 Q250,242 400,234 L400,237 Q250,245 100,237 Z" fill="#3a1a0c"/>
<!-- page block edges at the near side -->
<path d="M108,231 Q180,228 250,235 Q320,228 392,231 L392,233.5 Q320,230.5 250,237.5 Q180,230.5 108,233.5 Z" fill="#d8caa8"/>
<!-- the pages -->
<path d="M140,199 Q196,194 250,200 L250,235 Q180,228 108,231 Z" fill="#efe4c8"/>
<path d="M250,200 Q304,194 360,199 L392,231 Q320,228 250,235 Z" fill="#f4ead0"/>
<!-- gutter shade either side of the spine -->
<path d="M240,199 Q246,199 250,200 L250,235 Q244,234 236,233 Z" fill="#c8b890" opacity="0.6"/>
<path d="M250,200 Q254,199 260,199 L264,233 Q256,234 250,235 Z" fill="#d4c49c" opacity="0.5"/>
<path d="M250,200 L250,235" stroke="#8a6a40" stroke-width="0.8" opacity="0.7"/>
<!-- left page: an ink sketch of the floating market and a few lines of hand -->
<g fill="none" stroke="#5a4a36" stroke-width="0.7" opacity="0.7" stroke-linecap="round">
  <path d="M152,212 Q170,208 190,212 Q210,208 228,212"/>
  <path d="M160,212 L160,204 L170,204 L170,212 M174,212 L174,202 L182,198 L190,202 L190,212 M198,212 L198,205 L212,205 L212,212"/>
  <path d="M144,218 Q160,216 176,218 Q196,216 212,218 Q224,217 236,218"/>
  <path d="M140,223 Q156,221 172,223 Q190,221 208,223 Q222,222 236,223"/>
  <path d="M134,228 Q150,226 166,228 Q182,226 198,228"/>
</g>
<!-- right page: two lines of Simon's hand above the entry -->
<g fill="none" stroke="#5a4a36" stroke-width="0.7" opacity="0.6" stroke-linecap="round">
  <path d="M262,206 Q280,204 298,206 Q318,204 338,206 Q346,205 354,206"/>
  <path d="M262,212 Q278,210 294,212 Q312,210 330,212"/>
</g>
<!-- the clue, written into the logbook. The text is frozen and is carried
     across exactly as it was. -->
<text x="262" y="223" fill="#3a2c1c" font-size="6.6" font-family="Georgia,serif" font-style="italic" font-weight="bold" textLength="112" lengthAdjust="spacingAndGlyphs">1. Savoy agent conceals a journey (6)</text>
<!-- a red ribbon marker trailing out over the near edge -->
<path d="M252,234 Q256,242 252,252 L256,251 Q260,242 255,234 Z" fill="#b03a2a"/>
<!-- Simon's reaching sleeve and glove, over the table top and the left page.
     Clipped to the table so above its far edge the arm stays the one drawn
     with him, and the two copies meet without a seam. -->
<clipPath id="a3SimonReach"><path d="M0,190 Q250,180 500,190 L500,260 L0,260 Z"/></clipPath>
<g clip-path="url(#a3SimonReach)">${skySimonHand('explain', 'left', 110, 298, 250, true, true)}</g>

<!-- a pencil put down on the table beside the book, its shadow under it -->
<g transform="translate(76 26)">
<path d="M330,200 L364,192" fill="none" stroke="#1e1206" stroke-width="3" opacity="0.28" stroke-linecap="round"/>
<path d="M328,197 L360,189" fill="none" stroke="#c9a441" stroke-width="3.2" stroke-linecap="round"/>
<path d="M330,196.4 L358,189.6" fill="none" stroke="#e0b45a" stroke-width="1.1" opacity="0.5"/>
<path d="M360,189.6 L370,187 L367,192 Z" fill="#efe7d2"/>
<path d="M368,187.7 L370,187 L369.2,189.7 Z" fill="#3a3028"/>
</g>
<!-- the warm pool the lantern puts on the page -->
<ellipse cx="250" cy="216" rx="170" ry="60" fill="url(#a3Read)"/>
</svg>`;

// Scene 5 (COAST puzzle): the same logbook close-up, turned to the Windswept
// Atoll page. The left leaf carries an atoll sketch instead of the market, and
// the entry he points to is SUN-BLEACHED: the ink faded to a ghost, a pale
// bleached patch over it and a salt tide-mark across the page. The clue itself
// is not lettered into the art; it is read in the story panel. Built from
// airship_3 with every id renamed a3 to a5 so the two never collide.
STORY_SCENES['airship_5'] = STORY_SCENES['airship_3']
  .replace(/id="a3/g, 'id="a5')
  .replace(/url\(#a3/g, 'url(#a5')
  .replace(/<path d="M160,212 L160,204[^"]*"\/>/,
    '<path d="M172,212 Q190,205 208,212 M189,207.5 Q188,205 190,202.5 M190,202.5 Q185,201 181.5,204 M190,202.5 Q195,200.5 199,203.5 M190,202.5 Q187,200 183.5,200.6 M190,202.5 Q193,199.8 196.5,200.4"/>')
  .replace(/<!-- the clue, written into the logbook[\s\S]*?<\/text>/, [
    '<!-- the sun-bleached entry: a pale patch where the sun got at the page,',
    '     the ink inside it faded to a ghost, and a salt tide-mark across it -->',
    '<path d="M258,214 Q296,210 336,213 Q368,214 378,221 Q360,230 318,229 Q280,230 262,225 Q254,220 258,214 Z" fill="#fffdf2" opacity="0.9" stroke="#d2bc8e" stroke-width="0.9" stroke-opacity="0.75"/>',
    '<g fill="none" stroke="#8a7a62" stroke-width="1.1" stroke-linecap="round" opacity="0.5">',
    '  <path d="M264,219 Q276,217.6 290,219 M294,219 Q306,217.8 318,219 M322,219 Q334,218 346,219.4 M350,219.4 Q358,219 364,219.8"/>',
    '  <path d="M266,225 Q282,223.8 298,225 M302,225 Q314,224 326,225.2"/>',
    '</g>',
    '<path d="M256,229 Q270,226 286,229 Q302,232 318,228 Q336,224 352,228 Q366,231 380,227" fill="none" stroke="#e8dcc0" stroke-width="1.6" opacity="0.8"/>',
    '<path d="M256,230.4 Q270,227.4 286,230.4 Q302,233.4 318,229.4 Q336,225.4 352,229.4 Q366,232.4 380,228.4" fill="none" stroke="#b8a888" stroke-width="0.5" opacity="0.7"/>',
    '<g fill="#fffaf0" opacity="0.7"><circle cx="292" cy="227" r="0.7"/><circle cx="311" cy="223" r="0.6"/><circle cx="340" cy="226" r="0.7"/><circle cx="362" cy="222" r="0.5"/></g>'
  ].join('\n'));

// Scenes 4 and 6 (he flips on to the next page): the cabin with the logbook
STORY_SCENES['airship_4'] = STORY_SCENES['airship_2'];
STORY_SCENES['airship_6'] = STORY_SCENES['airship_2'];

// Scene 7 (MAST puzzle): AT THE RAIL, under way. "He leans back against the
// rail": Simon stands with his back to it, the top rail at his waist, in his
// think pose, mulling the Cloud Harbour entry. The rail runs away from the
// camera to the right, so posts, rails and plank seams all run to one
// vanishing point on the horizon, (820,110), which is his eye height. Beyond
// the rail the ship is aloft now: a sea of cloud, a far island, the low sun.
// The envelope overhead and its rigging come down to the post tops.
STORY_SCENES['airship_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="a7dSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#14244e"/><stop offset="30%" stop-color="#2e4a86"/><stop offset="58%" stop-color="#8a6290"/><stop offset="80%" stop-color="#d88a52"/><stop offset="100%" stop-color="#f0bc68"/>
  </linearGradient>
  <radialGradient id="a7dGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.55"/><stop offset="45%" stop-color="#f0a050" stop-opacity="0.2"/><stop offset="100%" stop-color="#e88020" stop-opacity="0"/>
  </radialGradient>
  <!-- the sea of cloud below the horizon: lit amber at the top, cooling down -->
  <linearGradient id="a7dCloudSea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e6a87e"/><stop offset="45%" stop-color="#b08aa2"/><stop offset="100%" stop-color="#7e6890"/>
  </linearGradient>
  <linearGradient id="a7dEnv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d84a42"/><stop offset="60%" stop-color="#c03030"/><stop offset="100%" stop-color="#8a1e1e"/>
  </linearGradient>
  <linearGradient id="a7dDeck" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7a5024"/><stop offset="100%" stop-color="#452a10"/>
  </linearGradient>
  <linearGradient id="a7dRail" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a87a34"/><stop offset="45%" stop-color="#8a6028"/><stop offset="100%" stop-color="#5f3f18"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#a7dSky)"/>
<!-- FAR PLANE: the cloud sea from the horizon down, a far island on it, and
     the glow of a sun just above the horizon -->
<path d="M0,110 L500,110 L500,260 L0,260 Z" fill="url(#a7dCloudSea)"/>
<ellipse cx="330" cy="112" rx="230" ry="80" fill="url(#a7dGlow)"/>
<path d="M352,112 Q362,104 372,107 Q380,98 390,104 Q400,103 408,112 Z" fill="#6a6a64" opacity="0.7"/>
<path d="M340,112 Q380,109 420,112 Q380,114 340,112 Z" fill="#5a4e7c" opacity="0.4"/>
<g>
  <path d="M60,128 Q170,118 290,126 Q170,134 60,128 Z" fill="#f2c08a" opacity="0.45"/>
  <path d="M250,150 Q370,140 500,148 Q370,157 250,150 Z" fill="#f2c08a" opacity="0.35"/>
  <path d="M0,176 Q120,166 250,174 Q120,182 0,176 Z" fill="#cf9078" opacity="0.4"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-14,0;0,0" dur="29s"
                    repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</g>
<!-- BG PLANE: a cloud bank high on the right, the airship_0 cloud -->
<g transform="translate(20 -14)">
  <g>
    <path d="M340,100 Q336,86 356,84 Q362,68 386,70 Q400,58 422,66 Q442,60 452,74 Q472,76 468,92 Q476,102 458,106 L352,106 Q338,106 340,100 Z" fill="#b08aa2" opacity="0.9"/>
    <path d="M342,98 Q400,94 470,96 Q474,104 458,106 L352,106 Q340,106 342,98 Z" fill="#8e769a" opacity="0.85"/>
    <path d="M356,84 Q362,68 386,70 Q400,58 422,66 Q404,64 392,74 Q372,72 364,86 Z" fill="#f2c6a0" opacity="0.55"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-10,0;0,0" dur="23s"
                      repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </g>
</g>
<!-- THE ENVELOPE overhead, its belly running away toward the vanishing point;
     the gold hoops crowd together as they recede -->
<path d="M-5,-5 L505,-5 L505,79 Q250,62 -5,40 Z" fill="url(#a7dEnv)"/>
<path d="M-5,34 Q250,56 505,74 L505,79 Q250,62 -5,40 Z" fill="#8a1e1e" opacity="0.6"/>
<g fill="none" stroke="#e8a820" opacity="0.8">
  <path d="M70,-5 L64,45" stroke-width="3.4"/><path d="M220,-5 L214,56" stroke-width="2.8"/>
  <path d="M320,-5 L316,63" stroke-width="2.3"/><path d="M392,-5 L389,69" stroke-width="1.9"/><path d="M446,-5 L444,74" stroke-width="1.6"/>
  <path d="M-5,22 Q250,44 505,64" stroke-width="1.4" opacity="0.6"/>
</g>
<path d="M-5,40 Q250,62 505,79" fill="none" stroke="#501c27" stroke-width="1"/>
<!-- rigging from the belly down to the post tops. None comes down to the
     post behind Simon (x 186): a line ending there landed on his cap and
     hung him from a string. -->
<g fill="none" stroke="#6a5020" stroke-width="1.3" opacity="0.85">
  <path d="M13,41 Q24,110 39,193"/><path d="M263,60 Q274,112 289,168"/>
  <path d="M337,66 Q348,110 363,161"/><path d="M392,70 Q403,108 418,155"/><path d="M435,74 Q446,108 461,151"/>
</g>
<!-- THE RAIL. Posts first, shrinking and crowding as they recede, then the
     rails over them along lines that meet at the vanishing point. Waist
     high on Simon: the top rail meets his belt, so he can lean on it. -->
<g fill="url(#a7dRail)">
  <path d="M33.3,193 L44.7,193 L44.7,234 L33.3,234 Z"/><path d="M181.4,178.5 L190.6,178.5 L190.6,210.5 L181.4,210.5 Z"/>
  <path d="M285.2,168.3 L292.8,168.3 L292.8,194.2 L285.2,194.2 Z"/><path d="M359.7,161 L366.3,161 L366.3,182.5 L359.7,182.5 Z"/>
  <path d="M415,155.5 L421,155.5 L421,173.7 L415,173.7 Z"/><path d="M458.4,151.3 L463.6,151.3 L463.6,166.9 L458.4,166.9 Z"/>
  <path d="M494.6,147.7 L499.4,147.7 L499.4,161.2 L494.6,161.2 Z"/>
</g>
<g fill="none" stroke="#c49a4a" stroke-width="1" opacity="0.3">
  <path d="M36,196 L36,230"/><path d="M183.5,181 L183.5,207"/><path d="M287,171 L287,191"/>
</g>
<path d="M0,215 L500,152 L500,154.4 L0,219 Z" fill="#7a5424" opacity="0.9"/>
<path d="M0,195 L500,145.4 L500,148.6 L0,203 Z" fill="#8a6028"/>
<path d="M0,195 L500,145.4 L500,146.7 L0,198.5 Z" fill="#c49a4a" opacity="0.55"/>
<!-- THE DECK: a dark toe-rail at the edge, planks running along the ship,
     every seam aimed at the vanishing point -->
<path d="M0,240 L500,160.7 L500,260 L0,260 Z" fill="url(#a7dDeck)"/>
<path d="M0,235 L500,158.7 L500,161.7 L0,241 Z" fill="#33200e" opacity="0.85"/>
<g fill="none" stroke="#33200e" stroke-width="0.9" opacity="0.4">
  <path d="M0,252 L500,165.4"/><path d="M0,268 L500,171.6"/><path d="M0,290 L500,180.2"/>
  <path d="M0,318 L500,191.2"/><path d="M0,355 L500,205.6"/><path d="M0,405 L500,225.1"/><path d="M0,470 L500,250.5"/>
</g>
<g fill="none" stroke="#33200e" stroke-width="0.8" opacity="0.35">
  <path d="M96,236 L98,242"/><path d="M262,212 L264,217"/><path d="M402,200 L403.5,204"/><path d="M330,225 L332,231"/>
</g>
<path d="M0,242 L500,162.5 L500,164 L0,245 Z" fill="#c49a4a" opacity="0.2"/>
<!-- a barrel lashed by the rail further along, with the lantern on it -->
${(function () {
  var barrel = { x: 330, y: 202, scale: 1.1, biome: 'skyship' };
  return bcArt.prop('barrel', barrel) +
    bcArt.on(bcArt.anchors('barrel', barrel).top, 'lantern', { biome: 'skyship', idp: 'a7dLamp' });
})()}
<!-- a flaked coil of line in the near corner -->
<g fill="none" stroke="#8a7040" stroke-width="2.2">
  <ellipse cx="58" cy="250" rx="24" ry="6"/><ellipse cx="58" cy="249.4" rx="17" ry="4.2"/><ellipse cx="58" cy="248.9" rx="10" ry="2.5"/>
</g>
<path d="M34,250 Q22,254 8,252" fill="none" stroke="#8a7040" stroke-width="2.2" stroke-linecap="round"/>
<!-- SIMON, his back to the rail with the top rail at his belt, thinking it
     over. The small tilt about his feet is the lean back onto it. -->
<g transform="rotate(-3 168 219)">${bcMissionPlace('simon', 'think', 168, 219, 160)}</g>
</svg>`;

// Scene 8 (complete): Sunset farewell. Deck railing, sunset, island far below
STORY_SCENES['airship_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="sunsetBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1a40"/><stop offset="25%" stop-color="#2a4a88"/><stop offset="50%" stop-color="#c87830"/><stop offset="70%" stop-color="#e8a040"/><stop offset="85%" stop-color="#f0c060"/>
  </linearGradient>
  <radialGradient id="sunGlow5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fff8d0" stop-opacity="0.75"/><stop offset="38%" stop-color="#f0b040" stop-opacity="0.34"/><stop offset="100%" stop-color="#e88020" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="a8Rail" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a87a34"/><stop offset="45%" stop-color="#8a6028"/><stop offset="100%" stop-color="#5f3f18"/>
  </linearGradient>
  <linearGradient id="a8Deck" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7a5024"/><stop offset="100%" stop-color="#452a10"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#sunsetBg)"/>

<!-- ====================================================================
     Everything below was rebuilt from rects and ellipses.

     The sun was a flat disc. A low sun is FLATTENED by the atmosphere and it
     lays a road of light across whatever is under it, and that road is the
     thing that says "low" rather than "midday".

     The railing was four full-width rects: two rails, a deck, and a row of
     posts. That is a fence elevation, not a deck seen from on it. A rail you
     are standing at runs AWAY from you, so it curves, its posts get closer
     together toward the ends, and the deck under it shows its planking.
     ==================================================================== -->

<!-- Stars, thinning out as the sky brightens toward the sun -->
<circle cx="40" cy="15" r="1.5" fill="#f4f8ff" opacity="0.7">
  <animate attributeName="opacity" values="0.35;0.9;0.35" dur="3.4s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="130" cy="25" r="1" fill="#f4f8ff" opacity="0.5">
  <animate attributeName="opacity" values="0.25;0.7;0.25" dur="4.6s" begin="1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="220" cy="10" r="1.5" fill="#f4f8ff" opacity="0.6">
  <animate attributeName="opacity" values="0.28;0.82;0.28" dur="3.9s" begin="0.5s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="76" cy="38" r="1" fill="#e8effa" opacity="0.4">
  <animate attributeName="opacity" values="0.16;0.55;0.16" dur="5.3s" begin="2.1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="172" cy="20" r="0.9" fill="#e8effa" opacity="0.35">
  <animate attributeName="opacity" values="0.14;0.5;0.14" dur="6.1s" begin="3.4s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="284" cy="28" r="1" fill="#e8effa" opacity="0.3">
  <animate attributeName="opacity" values="0.12;0.44;0.12" dur="4.9s" begin="1.7s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>

<!-- THE SUN. Low, so it is wider than it is tall, and it sits behind the
     haze band rather than on top of the sky. -->
<circle cx="375" cy="135" r="52" fill="url(#sunGlow5)"/>
<path d="M351,135 Q351,122 375,122 Q399,122 399,135 Q399,149 375,149 Q351,149 351,135 Z" fill="#fff4c4" opacity="0.9"/>
<path d="M355,131 Q360,125 375,125 Q390,125 395,131 Q375,134 355,131 Z" fill="#fffbe4" opacity="0.6"/>
<!-- the road of light it lays across the haze, which is what says LOW SUN -->
<path d="M375,143 Q404,146 436,150 Q404,154 375,152 Q346,154 314,150 Q346,146 375,143 Z" fill="#ffd070" opacity="0.28"/>
<path d="M375,148 Q408,151 444,156 Q408,160 375,158 Q342,160 306,156 Q342,151 375,148 Z" fill="#ffbc50" opacity="0.16"/>

<!-- CLOUD WISPS. A wisp is not an ellipse: it is a long shape with a torn
     underside and a lit top edge, and at this hour the light comes from the
     sun so the edge facing it is the bright one. -->
<path d="M56,127 Q76,119 104,120 Q134,121 158,125 Q178,128 190,132 Q166,133 142,131 Q116,133 92,132 Q66,132 56,127 Z" fill="#f4c878" opacity="0.34"/>
<path d="M60,126 Q78,120 104,121 Q132,122 154,125 Q126,125 100,124 Q74,125 60,126 Z" fill="#ffe0a4" opacity="0.32"/>
<path d="M242,143 Q262,136 290,137 Q318,138 340,142 Q356,145 364,148 Q340,148 316,147 Q288,149 264,148 Q246,147 242,143 Z" fill="#f4c878" opacity="0.28"/>
<path d="M246,142 Q264,137 290,138 Q314,139 334,142 Q308,142 284,141 Q260,142 246,142 Z" fill="#ffe0a4" opacity="0.26"/>
<path d="M130,101 Q148,96 174,97 Q200,98 220,101 Q234,103 240,106 Q216,106 194,105 Q166,107 146,106 Q132,105 130,101 Z" fill="#e0a870" opacity="0.2"/>
<!-- a low band of haze the sun is sinking into -->
<path d="M0,158 Q124,152 250,155 Q376,158 500,153 L500,166 Q376,170 250,167 Q124,164 0,168 Z" fill="#f0b060" opacity="0.2"/>

<!-- ====================================================================
     THE ISLAND, far below. It was three stacked ellipses. An island read
     from above at this distance is a SHAPE with a shoreline: bays, a spit
     running off one end, hills that are wedges rather than blobs, and a
     paler shelf of shallow water around the whole thing.

     Distance eats contrast before it eats detail, so all of it is pushed
     toward the sky colour rather than merely made smaller.
     ==================================================================== -->
<path d="M118,190 Q140,180 172,178 Q206,175 236,180 Q258,185 250,193 Q228,200 190,201
         Q150,201 124,196 Q112,193 118,190 Z" fill="#c08048" opacity="0.16"/>
<path d="M134,187 Q152,179 178,177 Q206,175 228,180 Q240,185 228,189 Q206,194 176,194
         Q148,193 134,190 Q128,188 134,187 Z" fill="#5c8046" opacity="0.45"/>
<!-- a spit running off the east end, which is what stops it reading as a blob -->
<path d="M228,182 Q240,181 250,184 Q242,187 230,186 Z" fill="#5c8046" opacity="0.34"/>
<!-- The interior. Seen from an airship the land has no SILHOUETTE to catch:
     a hill this far below is a change of TONE, not a shape with an edge, and
     the wedges drawn here first read as triangular chips lying on the green.
     What does read is darker forest inland and a paler dry rim near the shore. -->
<path d="M150,182 Q170,177 196,179 Q216,181 222,185 Q198,190 168,189 Q150,187 150,182 Z" fill="#3f6234" opacity="0.28"/>
<path d="M160,180 Q178,177 198,179 Q186,183 168,183 Q158,182 160,180 Z" fill="#7fa055" opacity="0.3"/>
<path d="M140,188 Q170,185 206,187 Q226,188 222,190 Q188,193 156,192 Q140,190 140,188 Z" fill="#cbb070" opacity="0.3"/>
<!-- a bay bitten out of the near shore -->
<path d="M176,192 Q186,188 196,192 Q186,195 176,192 Z" fill="#c08048" opacity="0.2"/>

<!-- the atmospheric veil. Distance is not smaller shapes, it is LESS
     CONTRAST, applied as a wash of the medium the object is seen through. -->
<path d="M118,190 Q140,180 172,178 Q206,175 236,180 Q258,185 250,193 Q228,200 190,201
         Q150,201 124,196 Q112,193 118,190 Z" fill="#e8a040" opacity="0.22"/>

<!-- ====================================================================
     THE DECK AND ITS RAIL. Order matters: the DECK goes down first, then
     the posts stand ON it, then the rails run in front of the posts, so the
     rails cross the posts rather than the posts crossing the rails.
     ==================================================================== -->
<!-- the deck, curving away because you are standing on it -->
<path d="M0,222 Q250,214 500,222 L500,260 L0,260 Z" fill="url(#a8Deck)"/>
<path d="M0,222 Q250,214 500,222 Q250,218 0,226 Z" fill="#a87a34" opacity="0.4"/>
<!-- planking, converging toward the rail because it runs away from you -->
<g fill="none" stroke="#33200e" stroke-width="1" opacity="0.4">
  <path d="M40,224 Q28,240 10,260"/>
  <path d="M130,220 Q124,240 116,260"/>
  <path d="M250,218 L250,260"/>
  <path d="M370,220 Q376,240 384,260"/>
  <path d="M460,224 Q472,240 490,260"/>
</g>
<path d="M0,240 Q250,233 500,240" fill="none" stroke="#33200e" stroke-width="0.8" opacity="0.28"/>

<!-- the posts: turned, standing on the deck, closer together toward the ends
     where the rail runs away from the camera -->
<path d="M24,196 Q21,206 23,211 Q20,217 24,224 L31,224 Q35,217 32,211 Q34,206 31,196 Z" fill="url(#a8Rail)"/>
<path d="M96,194 Q93,204 95,209 Q92,215 96,222 L103,222 Q107,215 104,209 Q106,204 103,194 Z" fill="url(#a8Rail)"/>
<path d="M182,192 Q179,203 181,208 Q178,214 182,221 L189,221 Q193,214 190,208 Q192,203 189,192 Z" fill="url(#a8Rail)"/>
<path d="M274,192 Q271,203 273,208 Q270,214 274,221 L281,221 Q285,214 282,208 Q284,203 281,192 Z" fill="url(#a8Rail)"/>
<path d="M360,194 Q357,204 359,209 Q356,215 360,222 L367,222 Q371,215 368,209 Q370,204 367,194 Z" fill="url(#a8Rail)"/>
<path d="M438,196 Q435,206 437,211 Q434,217 438,224 L445,224 Q449,217 446,211 Q448,206 445,196 Z" fill="url(#a8Rail)"/>
<!-- a highlight down the sunward face of each post -->
<g fill="none" stroke="#c49a4a" stroke-width="1" opacity="0.3">
  <path d="M29,198 Q31,208 30,220"/>
  <path d="M101,196 Q103,206 102,218"/>
  <path d="M187,194 Q189,204 188,217"/>
  <path d="M279,194 Q281,204 280,217"/>
  <path d="M365,196 Q367,206 366,218"/>
  <path d="M443,198 Q445,208 444,220"/>
</g>

<!-- the rails, drawn AFTER the posts so they run in front of them, and
     curving with the deck rather than ruled straight -->
<path d="M0,196 Q250,187 500,196 L500,202 Q250,193 0,202 Z" fill="#8a6028"/>
<path d="M0,196 Q250,187 500,196 Q250,190 0,199 Z" fill="#c49a4a" opacity="0.55"/>
<path d="M0,199.5 Q250,190.5 500,199.5 Q250,196 0,205 Z" fill="#5f3f18" opacity="0.4"/>
<path d="M0,210 Q250,202 500,210 L500,214 Q250,206 0,214 Z" fill="#7a5424" opacity="0.9"/>
<path d="M0,210 Q250,202 500,210 Q250,204.5 0,212.5 Z" fill="#b08a3c" opacity="0.4"/>

<!-- a coil of the ship's line made fast to one post, and a brass cleat: the
     small evidence that the deck is used -->
<path d="M96,198 Q90,200 92,204 Q98,206 104,204 Q108,200 103,198 Q99,197 96,198 Z" fill="#6a5020" opacity="0.75"/>
<path d="M97,200 Q93,201 95,203 Q99,204.5 103,203 Q105,201 101,199.6" fill="none" stroke="#8a7040" stroke-width="1" opacity="0.6"/>
<path d="M100,205 Q102,212 99,218" fill="none" stroke="#8a7040" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/>
<!-- the light the sun throws along the top rail, brightest under itself -->
<path d="M306,192 Q376,187.5 446,192 Q376,195 306,192 Z" fill="#ffd888" opacity="0.22"/>
<!-- SIMON on the deck in front of the rail, holding out the brass spyglass:
     "Keep it." He goes down first, then the spyglass over him, then his
     offering glove again on top, so the glove closes round the barrel. The
     spyglass is held out at the player, tipped up off the rail line: the big
     objective barrel in his glove, the draw tubes running out to the eyepiece
     on your side. It glints with the sun on its lit side. -->
${bcMissionPlace('simon', 'welcome', 120, 252, 150)}
<g transform="translate(157 203) rotate(-30)">
  <!-- objective barrel, the widest, with its glass at the back end -->
  <path d="M-16,-6.6 L22,-6.6 L22,6.6 L-16,6.6 Z" fill="#a8802c"/>
  <path d="M-16,-6.6 L22,-6.6 L22,-3.6 L-16,-3.6 Z" fill="#f0d68a" opacity="0.55"/>
  <path d="M-16,3.4 L22,3.4 L22,6.6 L-16,6.6 Z" fill="#6a5020" opacity="0.5"/>
  <path d="M-18,-7.6 L-14,-7.6 L-14,7.6 L-18,7.6 Z" fill="#8a6a1a"/>
  <ellipse cx="-18" cy="0" rx="1.8" ry="7.2" fill="#4e6a80"/>
  <path d="M20,-7.2 L24,-7.2 L24,7.2 L20,7.2 Z" fill="#6a5020"/>
  <!-- first draw tube -->
  <path d="M24,-5 L44,-5 L44,5 L24,5 Z" fill="#c9a441"/>
  <path d="M24,-5 L44,-5 L44,-2.6 L24,-2.6 Z" fill="#f0d68a" opacity="0.6"/>
  <path d="M42,-5.6 L45.4,-5.6 L45.4,5.6 L42,5.6 Z" fill="#8a6a1a"/>
  <!-- second draw tube, then the eyepiece -->
  <path d="M45.4,-3.8 L58,-3.8 L58,3.8 L45.4,3.8 Z" fill="#a8802c"/>
  <path d="M45.4,-3.8 L58,-3.8 L58,-1.8 L45.4,-1.8 Z" fill="#f0d68a" opacity="0.55"/>
  <path d="M58,-4.6 L62,-4.6 L62,4.6 L58,4.6 Z" fill="#6a5020"/>
  <ellipse cx="62" cy="0" rx="1.3" ry="3.6" fill="#4e6a80"/>
  <ellipse cx="62" cy="-1.2" rx="0.5" ry="1.2" fill="#e8effa" opacity="0.7"/>
  <path d="M-18,-7.6 L-14,-7.6 L-14,-6.6 L24,-7.2 L24,-5 L45.4,-5.6 L45.4,-3.8 L58,-4.6 L62,-4.6 L62,4.6 L58,4.6 L45.4,3.8 L45.4,5.6 L24,5 L24,7.2 L-14,6.6 L-14,7.6 L-18,7.6 Z"
        fill="none" stroke="#5a3c14" stroke-width="0.8" stroke-linejoin="round"/>
  <ellipse cx="34" cy="-3.4" rx="4" ry="1.2" fill="#fff8d0" opacity="0">
    <animate attributeName="opacity" values="0;0.8;0" dur="4.3s" begin="1.2s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </ellipse>
</g>
${skySimonHand('welcome', 'right', 120, 252, 150, false, false)}
</svg>`;
