// Skyship story scenes for "The Sky Captain's Collection"
// Keys: airship_0 through airship_8 (9-step story; some steps share art)

// Scene 0: Boarding the Skyship. Blue sky, fluffy clouds, airship from below
STORY_SCENES['airship_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skyBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a8ae8"/><stop offset="50%" stop-color="#5aafe8"/><stop offset="100%" stop-color="#a0d4f8"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#skyBg0)"/>
<!-- Fluffy white clouds -->
<g opacity="0.85">
  <ellipse cx="80" cy="60" rx="50" ry="22" fill="#f6fbff"/>
  <ellipse cx="110" cy="55" rx="35" ry="18" fill="#f6fbff"/>
  <ellipse cx="55" cy="55" rx="30" ry="16" fill="#f8f8ff"/>
  <ellipse cx="400" cy="90" rx="55" ry="24" fill="#f6fbff"/>
  <ellipse cx="435" cy="85" rx="40" ry="20" fill="#f8f8ff"/>
  <ellipse cx="370" cy="85" rx="30" ry="16" fill="#f6fbff"/>
  <ellipse cx="240" cy="40" rx="40" ry="16" fill="#fff" opacity="0.6"/>
</g>
<!-- Wind streaks -->
<g stroke="#fff" stroke-width="1" opacity="0.25">
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
<path d="M150,120 Q220,140 300,132 Q350,124 372,100 Q356,126 302,135
         Q250,143 198,134 Q166,128 150,120 Z" fill="#8a1e1e" opacity="0.55"/>
<!-- gold bands, following the curve of the hull rather than lying flat on it -->
<path d="M172,48 Q176,86 176,124" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.85"/>
<path d="M232,37 Q234,86 232,138" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.85"/>
<path d="M292,38 Q294,86 292,136" fill="none" stroke="#e8a820" stroke-width="3.4" opacity="0.8"/>
<path d="M140,74 Q250,58 368,76" fill="none" stroke="#e8a820" stroke-width="2" opacity="0.5"/>
<!-- the nose cone and its cap -->
<path d="M126,88 Q120,80 122,72 Q126,78 130,74 Q128,82 132,88 Q128,94 126,88 Z" fill="#e8a820" opacity="0.9"/>
<!-- tail fins: the one detail that separates an airship from a balloon -->
<path d="M370,74 Q400,44 414,40 Q408,62 384,86 Z" fill="#b02828"/>
<path d="M370,74 Q400,46 413,42 Q404,58 384,84 Z" fill="#d84a42" opacity="0.5"/>
<path d="M372,98 Q402,128 416,132 Q410,110 386,88 Z" fill="#9a2222"/>
<path d="M374,86 Q408,86 422,86 Q408,92 374,92 Z" fill="#b02828" opacity="0.85"/>
<path d="M374,86 Q408,86 422,86 Q408,88.5 374,88.5 Z" fill="#e8a820" opacity="0.5"/>

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

<!-- Drifting cloud -->
<ellipse cx="480" cy="160" rx="35" ry="14" fill="#fff" opacity="0.5">
  <animate attributeName="cx" values="500;-40" dur="25s" repeatCount="indefinite"/>
</ellipse>
<!-- Brass-rimmed cabin ports follow the gondola's side. -->
<g fill="#3b626c" stroke="#d0b16a" stroke-width="2">
<ellipse cx="242" cy="185" rx="7" ry="6"/><ellipse cx="272" cy="185" rx="7" ry="6"/><ellipse cx="301" cy="183" rx="7" ry="6"/>
</g>
<path d="M239 182L244 180 M269 182L274 180 M298 180L303 178" stroke="#b8d8d7" stroke-width="1.2" opacity=".65"/>
<path d="M231 199L250 199 M263 200L283 199 M294 197L310 195" stroke="#624a25" stroke-width=".8" opacity=".45"/>
<g fill="#d0b16a" opacity=".7"><circle cx="226" cy="174" r="1"/><circle cx="250" cy="175" r="1"/><circle cx="275" cy="175" r="1"/><circle cx="300" cy="174" r="1"/><circle cx="319" cy="173" r="1"/></g>
</svg>`;

// Scene 1: Cabin interior. Warm wood, chart table with crosswords, lantern, porthole
STORY_SCENES['airship_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
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

// Scene 2: Puzzle step, shares the cabin scene
STORY_SCENES['airship_2'] = STORY_SCENES['airship_1'];

// Scene 3 (VOYAGE puzzle): the gazette open on the chart table, cabin behind
STORY_SCENES['airship_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="paperBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a3a18"/><stop offset="100%" stop-color="#3a2810"/>
  </linearGradient>
  <radialGradient id="a3PortSky" cx="38%" cy="28%" r="72%">
    <stop offset="0%" stop-color="#b8e0fa"/><stop offset="58%" stop-color="#5aafe8"/><stop offset="100%" stop-color="#2a6ab8"/>
  </radialGradient>
  <radialGradient id="a3Read" cx="40%" cy="52%" r="46%">
    <stop offset="0%" stop-color="#ffe0a0" stop-opacity="0.14"/><stop offset="100%" stop-color="#ffe0a0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#paperBg)"/>

<!-- ====================================================================
     The old scene was a cream rectangle floating on a flat brown field, with
     a flat disc beside it. Nothing said where the page was, so it read as a
     slide rather than as a moment in the story.

     It is the SAME CABIN as airship_1, seen closer: the same curved hull
     frames, the same brass porthole, the same chart table, with the gazette
     opened out on it. The player should recognise the room.
     ==================================================================== -->
<!-- hull frames, bowing the way they do in airship_1 but wider apart, which
     is what a closer camera does to them -->
<path d="M0,0 Q14,120 0,240 L38,240 Q26,120 38,0 Z" fill="#432a12" opacity="0.55"/>
<g fill="none" stroke="#3c2410" stroke-width="1.8" opacity="0.5">
  <path d="M38,0 Q26,120 38,240"/>
  <path d="M124,0 Q116,120 124,240"/>
  <path d="M212,0 Q209,120 212,240"/>
  <path d="M300,0 Q301,120 300,240"/>
  <path d="M388,0 Q394,120 388,240"/>
  <path d="M474,0 Q486,120 474,240"/>
</g>
<g fill="none" stroke="#78501f" stroke-width="1.1" opacity="0.22">
  <path d="M41,0 Q29,120 41,240"/>
  <path d="M127,0 Q119,120 127,240"/>
  <path d="M215,0 Q212,120 215,240"/>
  <path d="M303,0 Q304,120 303,240"/>
  <path d="M391,0 Q397,120 391,240"/>
</g>
<path d="M0,20 Q250,14 500,20 L500,28 Q250,22 0,28 Z" fill="#684220" opacity="0.5"/>

<!-- THE PORTHOLE, the same fitting as airship_1: bolted brass ring, sky that
     is lighter at the top, a cloud crossing outside. -->
<circle cx="416" cy="121" r="47" fill="#3c2410" opacity="0.3"/>
<circle cx="416" cy="120" r="43" fill="url(#a3PortSky)"/>
<path d="M380,100 Q388,90 400,94 Q410,86 421,94 Q433,92 435,102 Q408,110 380,100 Z" fill="#f6faff" opacity="0.72">
  <animate attributeName="opacity" values="0;0.72;0.72;0" dur="21s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.14;0.82;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="60,0;-60,9" dur="21s" repeatCount="indefinite"/>
</path>
<path d="M386,138 Q398,132 410,137 Q424,132 430,141 Q408,148 386,138 Z" fill="#e6f0fb" opacity="0.4">
  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="29s" begin="5s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.14;0.82;1" keySplines="0.42 0 0.58 1;0 0 1 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="56,0;-56,-6" dur="29s" begin="5s" repeatCount="indefinite"/>
</path>
<!-- the island, far below and small, because the ship is high up -->
<path d="M396,152 Q404,146 414,148 Q424,145 432,151 Q422,157 408,157 Q398,156 396,152 Z" fill="#3a7a38" opacity="0.5"/>
<path d="M400,151 Q408,147 416,150 Q410,152 400,151 Z" fill="#4e9046" opacity="0.4"/>
<!-- the glass sheen, high and to the left -->
<path d="M390,98 Q398,86 412,86 Q396,99 390,116 Q384,110 390,98 Z" fill="#fbfdff" opacity="0.45"/>
<!-- the brass ring: bright above, dark below -->
<path d="M416,77 A43,43 0 0,1 459,120 A43,43 0 0,1 416,163 A43,43 0 0,1 373,120 A43,43 0 0,1 416,77 Z
         M416,84 A36,36 0 0,0 380,120 A36,36 0 0,0 416,156 A36,36 0 0,0 452,120 A36,36 0 0,0 416,84 Z"
      fill="#a8802c" fill-rule="evenodd"/>
<path d="M416,77 A43,43 0 0,0 373,120 Q373,108 379,98 Q392,79 416,77 Z" fill="#e0b45a" opacity="0.8"/>
<path d="M459,120 A43,43 0 0,1 416,163 Q439,161 451,143 Q459,131 459,120 Z" fill="#5a3c12" opacity="0.85"/>
<path d="M377,120 Q416,116 455,120" fill="none" stroke="#b89030" stroke-width="3" opacity="0.85"/>
<path d="M416,83 Q412,120 416,157" fill="none" stroke="#b89030" stroke-width="3" opacity="0.85"/>
<g fill="#d4b040" opacity="0.85">
  <circle cx="416" cy="81" r="2.4"/><circle cx="446" cy="94" r="2.4"/>
  <circle cx="455" cy="120" r="2.4"/><circle cx="446" cy="147" r="2.3"/>
  <circle cx="416" cy="159" r="2.3"/><circle cx="386" cy="147" r="2.3"/>
  <circle cx="377" cy="120" r="2.4"/><circle cx="386" cy="94" r="2.4"/>
</g>

<!-- THE CHART TABLE, much closer than in airship_1 so it runs off the bottom
     of the frame. Cropping by the frame edge is a camera decision; the table
     is the same object, just nearer, and the gazette lies ON it. -->
<path d="M0,170 Q250,160 500,170 L500,260 L0,260 Z" fill="#7a5024"/>
<path d="M0,176 Q250,166 500,176 L500,260 L0,260 Z" fill="#96652e"/>
<!-- planking on the top, converging toward the far edge -->
<g fill="none" stroke="#6a4420" stroke-width="1.1" opacity="0.35">
  <path d="M96,170 Q86,224 72,260"/>
  <path d="M212,166 Q208,224 202,260"/>
  <path d="M328,166 Q334,224 344,260"/>
  <path d="M444,194 Q456,224 472,260"/>
</g>
<!-- the far edge lip, which is what gives the top an edge to see over -->
<path d="M0,196 Q250,186 500,196 Q250,190 0,200 Z" fill="#5f3a1a"/>
<path d="M0,192 Q250,182 500,192 Q250,187 0,197 Z" fill="#4e3014" opacity="0.7"/>
<!-- ====================================================================
     THE GAZETTE. It was a rounded rect with a smaller rounded rect on top of
     it. A sheet of newsprint LYING on a table obeys the table's perspective,
     and the test of that is simple: the NEAR edge is both LOWER and WIDER
     than the far edge. A page whose two edges are the same width is standing
     up against a wall, which is what the first attempt at this looked like.
     ==================================================================== -->
<g transform="translate(0 125) scale(1 .6)"><!-- the shadow first, thrown down-left because the porthole is up-right -->
<path d="M74,176 Q170,170 268,176 Q266,190 170,196 Q70,190 74,176 Z" fill="#2a1a08" opacity="0.35"/>
<!-- the page: far edge short and high, near edge long and low -->
<path d="M100,80 Q172,77 246,80 L278,182 Q172,190 62,182 Z" fill="#e6ddc6"/>
<path d="M104,83 Q172,80 242,83 L272,179 Q172,186 68,179 Z" fill="#f7f2e2"/>
<!-- the near corners lift off the wood, which is what paper does -->
<path d="M62,182 Q68,172 80,170 Q74,180 86,186 Q72,187 62,182 Z" fill="#ddd3b8"/>
<path d="M278,182 Q272,172 260,170 Q266,180 254,186 Q268,187 278,182 Z" fill="#ddd3b8"/>

<!-- the masthead, sitting INSIDE the page with its rules under it -->
<text x="172" y="93" text-anchor="middle" fill="#2f2a22" font-family="'Fredoka One',cursive" font-size="10">THE SKY GAZETTE</text>
<!-- no rule under the masthead: the grid starts immediately below it, so a
     rule there is hidden by the top row of cells and only its two ends show,
     which reads as a pair of stray ticks. -->

<!-- the grid, generated so every black cell sits exactly inside the ruled
     lines. Placing them by hand is what made the cells different sizes in
     the version this replaces. -->
<path d="M110,96 Q173,95 236,94 L258,168 Q172,169 86,170 Z" fill="#fdfaf2"/>
<path d="M110,96 L125.8,95.8 L122.7,107.8 L106,108.3 Z" fill="#33281c"/>
<path d="M157.3,95.3 L173,95 L172.8,106.5 L156.1,106.8 Z" fill="#33281c"/>
<path d="M204.5,94.5 L220.3,94.3 L223,106.3 L206.3,106.3 Z" fill="#33281c"/>
<path d="M189.5,106.3 L206.3,106.3 L208,118.2 L190.3,118.1 Z" fill="#33281c"/>
<path d="M122.7,107.8 L139.4,107.3 L137.3,119.2 L119.7,119.9 Z" fill="#33281c"/>
<path d="M137.3,119.2 L155,118.6 L153.9,130.8 L135.3,131.4 Z" fill="#33281c"/>
<path d="M225.7,118.4 L243.3,118.7 L247,131 L228.4,130.6 Z" fill="#33281c"/>
<path d="M172.5,130.4 L191.1,130.3 L191.9,142.8 L172.3,142.9 Z" fill="#33281c"/>
<path d="M98,133 L116.6,132.1 L113.6,144.6 L94,145.3 Z" fill="#33281c"/>
<path d="M211.5,142.9 L231.1,143.1 L233.8,155.6 L213.3,155.6 Z" fill="#33281c"/>
<path d="M152.8,143.3 L172.3,142.9 L172.2,155.9 L151.6,156.2 Z" fill="#33281c"/>
<path d="M110.5,157.1 L131.1,156.6 L129,169.5 L107.5,169.8 Z" fill="#33281c"/>
<path d="M192.7,155.7 L213.3,155.6 L215,168.5 L193.5,168.8 Z" fill="#33281c"/>
<g stroke="#9a9080" stroke-width="0.55" opacity="0.8" fill="none">
  <path d="M125.8,95.8 Q116.6,132.1 107.5,169.8"/>
  <path d="M141.5,95.5 Q135.3,131.4 129,169.5"/>
  <path d="M157.3,95.3 Q153.9,130.8 150.5,169.3"/>
  <path d="M173,95 Q172.5,130.4 172,169"/>
  <path d="M188.8,94.8 Q191.1,130.3 193.5,168.8"/>
  <path d="M204.5,94.5 Q209.8,130.4 215,168.5"/>
  <path d="M220.3,94.3 Q228.4,130.6 236.5,168.3"/>
  <path d="M106,108.3 Q172.8,106.5 239.7,106.3"/>
  <path d="M102,120.7 Q172.7,118.3 243.3,118.7"/>
  <path d="M98,133 Q172.5,130.4 247,131"/>
  <path d="M94,145.3 Q172.3,142.9 250.7,143.3"/>
  <path d="M90,157.7 Q172.2,155.9 254.3,155.7"/>
</g>
<path d="M110,96 Q173,95 236,94 L258,168 Q172,169 86,170 Z" fill="none" stroke="#5a5040" stroke-width="1.1"/>

<!-- No column of set type beside the grid. The grid fills the page to both
     margins, so a column placed next to it straddles the page edge and reads
     as ticks lying on the table. The masthead is what says newspaper here. -->

<!-- the clue, printed under the grid the way a newspaper prints it. The text
     is frozen and is carried across exactly as it was. -->
<path d="M96,174 Q172,171 250,174" fill="none" stroke="#a49a86" stroke-width="0.5" opacity="0.4"/>
<text x="98" y="182" fill="#4a4238" font-size="6.6" font-family="sans-serif" font-weight="bold">1. Savoy agent conceals a journey (6)</text>

</g><!-- a pencil put down across the table beside the page, with its shadow
     directly under it so it is lying on the wood -->
<path d="M300,200 L344,190" fill="none" stroke="#1e1206" stroke-width="3" opacity="0.28" stroke-linecap="round"/>
<path d="M298,197 L340,187" fill="none" stroke="#c9a441" stroke-width="3.2" stroke-linecap="round"/>
<path d="M300,196.4 L338,187.6" fill="none" stroke="#e0b45a" stroke-width="1.1" opacity="0.5"/>
<path d="M340,187.6 L350,185 L347,190 Z" fill="#efe7d2"/>
<path d="M348,185.7 L350,185 L349.2,187.7 Z" fill="#3a3028"/>
<!-- the warm pool a reader's lamp puts on the page -->
<circle cx="180" cy="128" r="150" fill="url(#a3Read)"/>
</svg>`;

// Scenes 4-7 (narratives + COAST/MAST puzzles): reuse the cabin interior
STORY_SCENES['airship_4'] = STORY_SCENES['airship_1'];
STORY_SCENES['airship_5'] = STORY_SCENES['airship_1'];
STORY_SCENES['airship_6'] = STORY_SCENES['airship_1'];
STORY_SCENES['airship_7'] = STORY_SCENES['airship_1'];

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
</svg>`;
