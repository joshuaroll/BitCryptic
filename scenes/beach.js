// Beach story scenes — "Letters in the Sand" (Scramble Shores)
// Keys: beach_0 through beach_7 (8-step story; steps 0-3 share the shore art)

// ====================================================================
// THE BEACH PALETTE. Scramble Shores is MIDDAY (decision 2026-10): a high
// sun, short shadows straight down, no orange sunset cast. Every hue is a
// midday colour with its saturation cut by 25% so the shore sits with the
// muted island palette. Defined ONCE here; beach_0..beach_5 read from it.
// Mirrored as palette.beach in design/tokens.json.
// ====================================================================
var BC_BEACH = {
  sky: '#5c9bc6', skyHorizon: '#c5dee9', sun: '#faf3dd',
  sea: '#4b90b3', seaDeep: '#2e6687', seaShallow: '#7ab8cb', swell: '#a4cfde', foam: '#eff5f7',
  sand: '#e3d5b1', sandDry: '#ebe1c3', sandWet: '#c7b287', sandShadow: '#baa37b', sandSheen: '#f1ead5',
  drift: '#b2996d', grit: '#bea579',
  rock: '#776f67', rockLit: '#a49a8f', rockShade: '#554d46', headland: '#a0b1ba',
  foliage: '#437f3b', foliageDeep: '#31612d',
  // the warm accent (umbrella red, towel pink), cut by the same 25%
  accent: '#d56363', accentDeep: '#b34b4b', accentSoft: '#d66c90', accentSoftLit: '#e68aaa',
  accentSoftDeep: '#b95a7b', canvas: '#f2efe3'
};

// Scene 0: Sandy beach with scattered shell letters, waves, umbrella
STORY_SCENES['beach_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="beachSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.sky + `"/><stop offset="50%" stop-color="` + BC_BEACH.skyHorizon + `"/>
  </linearGradient>
  <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.seaDeep + `"/><stop offset="100%" stop-color="` + BC_BEACH.sea + `"/>
  </linearGradient>
  <linearGradient id="sandGrad" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.sand + `"/><stop offset="100%" stop-color="` + BC_BEACH.sandWet + `"/>
  </linearGradient>
  <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="` + BC_BEACH.sun + `" stop-opacity="0.7"/><stop offset="100%" stop-color="` + BC_BEACH.sun + `" stop-opacity="0"/>
  </radialGradient>
  <filter id="waveBlur"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#beachSky)"/>
<!-- Sun: high overhead at midday, mostly above the frame -->
<circle cx="300" cy="-4" r="56" fill="url(#sunGlow)"/>
<circle cx="300" cy="-4" r="22" fill="` + BC_BEACH.sun + `" opacity="0.95"/>
<!-- Ocean -->
<rect x="0" y="130" width="500" height="50" fill="url(#oceanGrad)" opacity="0.85"/>
<!-- Waves -->
<path d="M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z" fill="` + BC_BEACH.seaShallow + `" opacity="0.5">
  <animate attributeName="d" values="M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z;M0,148 Q30,142 60,148 Q90,155 120,148 Q150,142 180,148 Q210,155 240,148 Q270,142 300,148 Q330,155 360,148 Q390,142 420,148 Q450,155 480,148 L500,148 L500,160 L0,160 Z;M0,145 Q30,138 60,145 Q90,152 120,145 Q150,138 180,145 Q210,152 240,145 Q270,138 300,145 Q330,152 360,145 Q390,138 420,145 Q450,152 480,145 L500,145 L500,160 L0,160 Z" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- Shore foam -->
<path d="M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z" fill="` + BC_BEACH.foam + `" opacity="0.3">
  <animate attributeName="d" values="M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z;M0,162 Q40,157 80,162 Q120,167 160,162 Q200,157 240,162 Q280,167 320,162 Q360,157 400,162 Q440,167 500,162 L500,168 L0,168 Z;M0,158 Q40,153 80,158 Q120,163 160,158 Q200,153 240,158 Q280,163 320,158 Q360,153 400,158 Q440,163 500,158 L500,165 L0,165 Z" dur="3.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- ====================================================================
     THE SAND. It was one flat fill. A beach has a WET STRIP at the waterline
     that is darker and reflective, a drift line of weed and shell where the
     last high tide stopped, and dry sand above that with grit in it.
     ==================================================================== -->
<path d="M0,168 L500,168 L500,260 L0,260 Z" fill="` + BC_BEACH.sand + `"/>
<!-- wet sand: darker, and it takes a sheen from the sky -->
<path d="M0,168 Q120,174 250,170 Q380,166 500,172 L500,190 Q380,186 250,190 Q120,194 0,188 Z" fill="` + BC_BEACH.sandWet + `" opacity="0.85"/>
<path d="M0,170 Q120,176 250,172 Q380,168 500,174 L500,178 Q380,172 250,176 Q120,180 0,174 Z" fill="` + BC_BEACH.sandSheen + `" opacity="0.45"/>
<!-- the drift line where the last tide stopped -->
<path d="M0,190 Q90,196 180,191 Q270,186 360,192 Q430,196 500,190" fill="none" stroke="` + BC_BEACH.drift + `" stroke-width="2.2" opacity="0.5"/>
<g fill="#b09660" opacity="0.45">
  <path d="M42,189 q5,-3 10,0 q-5,3 -10,0 Z"/><path d="M128,192 q6,-3 12,0 q-6,3 -12,0 Z"/>
  <path d="M226,188 q5,-3 10,0 q-5,3 -10,0 Z"/><path d="M318,192 q6,-3 12,0 q-6,3 -12,0 Z"/>
  <path d="M418,190 q5,-3 10,0 q-5,3 -10,0 Z"/>
</g>
<!-- dry sand above the drift, lighter and slightly warmer -->
<path d="M0,196 Q120,202 250,197 Q380,192 500,198 L500,260 L0,260 Z" fill="` + BC_BEACH.sandDry + `" opacity="0.55"/>
<!-- grit: sparse, varied, never a regular field -->
<g fill="` + BC_BEACH.grit + `" opacity="0.4">
  <circle cx="62" cy="222" r="1.4"/><circle cx="146" cy="236" r="1"/><circle cx="238" cy="228" r="1.6"/>
  <circle cx="322" cy="244" r="1.2"/><circle cx="404" cy="230" r="1.5"/><circle cx="466" cy="248" r="1.1"/>
  <circle cx="98" cy="250" r="1.3"/><circle cx="284" cy="256" r="1"/><circle cx="368" cy="216" r="1.2"/>
  <circle cx="180" cy="212" r="1.1"/><circle cx="446" cy="208" r="1.3"/><circle cx="24" cy="240" r="1.2"/>
</g>
<g fill="#f8ecc8" opacity="0.5">
  <circle cx="84" cy="230" r="1"/><circle cx="212" cy="246" r="1.2"/><circle cx="352" cy="234" r="1"/>
  <circle cx="428" cy="252" r="1.1"/><circle cx="152" cy="256" r="1"/><circle cx="298" cy="220" r="0.9"/>
</g>

<!-- ====================================================================
     THE PALM, THE UMBRELLA AND THE TOWEL.

     The first pass had three faults. The palm's fronds were flat wedges that
     read as a spiky bush; a palm frond is a SPINE with leaflets along it, and
     it DROOPS under its own weight. The umbrella's scallops were too shallow
     to see and its panels did not alternate, so it read as a red mushroom. And
     the sand was a flat wash, when a beach has a wet strip at the waterline,
     dry drift above it, and a scatter of shell grit.
     ==================================================================== -->

<!-- THE PALM. A trunk that leans and tapers, with old frond scars, and fronds
     that arch over and hang. -->
<path d="M22,196 Q28,152 40,116 Q45,102 52,94 L62,98 Q54,110 50,122 Q40,156 34,196 Z" fill="#7a5a30"/>
<path d="M26,194 Q32,154 43,118 Q47,106 53,99" fill="none" stroke="#9a7440" stroke-width="2" opacity="0.45"/>
<path d="M28,178 q4,-3 8,-1 M31,162 q4,-3 8,-1 M34,146 q4,-3 8,-1 M38,130 q4,-3 8,-1 M43,116 q4,-3 8,-1"
      stroke="#5a4020" stroke-width="1.3" opacity="0.55" fill="none"/>
<!-- Long fronds arch out from one crown, with broad drooping leaflets. -->
<g fill="` + BC_BEACH.foliageDeep + `">
 <path d="M57 98 Q35 57 9 66 Q28 63 38 78 L30 76 L43 88 L35 86 L50 97Z"/>
 <path d="M57 97 Q58 49 85 42 Q70 53 67 68 L74 61 L67 79 L73 72 L64 93Z"/>
 <path d="M57 96 Q79 60 113 73 Q88 68 76 82 L87 78 L73 92 L82 88 L65 102Z"/>
</g>
<g fill="` + BC_BEACH.foliage + `">
 <path d="M58 98 Q26 67 0 94 Q16 84 28 89 L17 92 L34 93 L24 98 L42 97 L34 103 L52 103Z"/>
 <path d="M56 98 Q24 91 15 128 Q20 114 31 109 L26 119 L37 109 L35 118 L45 107 L44 114 L61 101Z"/>
 <path d="M55 98 Q42 58 21 48 Q31 61 34 75 L28 70 L39 87 L32 82 L48 99Z"/>
 <path d="M56 98 Q75 47 103 61 Q85 58 76 74 L85 67 L76 84 L83 78 L68 100Z"/>
 <path d="M58 99 Q91 77 119 109 Q102 95 90 98 L101 102 L85 101 L94 108 L77 105 L84 113 L65 105Z"/>
 <path d="M58 99 Q86 97 96 133 Q86 117 76 113 L82 123 L70 111 L74 121 L62 109Z"/>
</g>
<path d="M56 97 Q28 78 5 93 M57 96 Q73 59 99 60 M61 100 Q92 87 115 107 M56 101 Q27 97 17 125" fill="none" stroke="#6a9a45" stroke-width="1" opacity=".55"/>
<!-- coconuts at the crown -->
<circle cx="53" cy="100" r="3.6" fill="#8b6914"/>
<circle cx="60" cy="103" r="3" fill="#7a5a10"/>
<circle cx="52.5" cy="99" r="1.2" fill="#c4a870" opacity="0.5"/>
<!-- and the shadow it throws: the sun is overhead, so it pools short at the
     foot of the trunk, with the crown's shade dropped straight below it -->
<ellipse cx="30" cy="198" rx="16" ry="3" fill="` + BC_BEACH.sandShadow + `" opacity="0.5"/>
<ellipse cx="60" cy="204" rx="40" ry="5" fill="` + BC_BEACH.sandShadow + `" opacity="0.3"/>

<!-- ====================================================================
     THE TOWEL, laid out under the umbrella. A towel is a rectangle in
     perspective with a fold at one corner and stripes running across it.
     ==================================================================== -->
<path d="M118,214 L206,208 Q214,208 213,214 L206,238 Q205,244 198,244 L112,240 Q104,240 106,234 Z" fill="` + BC_BEACH.accentSoft + `"/>
<path d="M118,214 L206,208 Q214,208 213,214 L211,220 L116,226 Z" fill="` + BC_BEACH.accentSoftLit + `" opacity="0.55"/>
<g stroke="` + BC_BEACH.canvas + `" stroke-width="3" opacity="0.75">
  <path d="M114,226 L211,219"/>
  <path d="M116,234 L209,227"/>
</g>
<path d="M198,244 Q206,238 213,232 Q212,240 206,244 Z" fill="` + BC_BEACH.accentSoftDeep + `"/>
<path d="M106,238 Q112,232 118,236 Q112,242 106,240 Z" fill="` + BC_BEACH.accentSoftDeep + `" opacity="0.8"/>

<!-- One canopy apex, continuous fabric panels and ribs meeting at the hub. -->
<ellipse cx="139" cy="234" rx="58" ry="7" fill="` + BC_BEACH.sandShadow + `" opacity=".34"/>
<path d="M137 236 H141 V83 H137Z" fill="#8b6914"/>
<path d="M138 236 V87" stroke="#c4a870" stroke-width="1" opacity=".65"/>
<path d="M76 122 Q139 137 202 122 Q139 112 76 122Z" fill="` + BC_BEACH.accentDeep + `"/>
<path d="M82 122 L139 134 L196 122 M104 123 L139 134 L175 123" fill="none" stroke="#8b6914" stroke-width="1" opacity=".65"/>
<path d="M139 82 Q103 86 76 122 Q89 127 101 121 Q108 98 139 82Z" fill="` + BC_BEACH.accent + `"/>
<path d="M139 82 Q108 98 101 121 Q120 128 139 123 Q128 99 139 82Z" fill="` + BC_BEACH.canvas + `"/>
<path d="M139 82 Q128 99 139 123 Q159 128 177 121 Q170 98 139 82Z" fill="` + BC_BEACH.accent + `"/>
<path d="M139 82 Q170 98 177 121 Q190 127 202 122 Q175 86 139 82Z" fill="` + BC_BEACH.canvas + `"/>
<path d="M139 82 Q108 98 101 121 M139 82 Q128 99 139 123 M139 82 Q170 98 177 121" fill="none" stroke="` + BC_BEACH.accentDeep + `" stroke-width=".65" opacity=".3"/>
<circle cx="139" cy="82" r="2.5" fill="#8b6914"/>
<path d="M139 80 V75" stroke="#8b6914" stroke-width="1.8"/>

<!-- Shell letters scattered on sand -->
<g font-family="'JetBrains Mono',monospace" font-size="11" fill="#c4917a">
  <text x="88" y="224" transform="rotate(-12,88,224)">W</text>
  <text x="152" y="258" transform="rotate(7,152,258)">H</text>
  <text x="232" y="214" transform="rotate(-16,232,214)">S</text>
  <text x="272" y="250" transform="rotate(9,272,250)">E</text>
  <text x="330" y="220" transform="rotate(-6,330,220)">L</text>
  <text x="388" y="248" transform="rotate(13,388,248)">L</text>
  <text x="440" y="222" transform="rotate(-9,440,222)">S</text>
</g>
<!-- Shell shapes -->
<g transform="translate(175,228) rotate(20)"><path d="M0 4 L-7 -1 Q-8 -5 -4 -5 Q-2 -8 0 -5 Q4 -8 5 -4 Q9 -3 7 0Z" fill="#f0c8b0"/><path d="M0 4 L-4 -4 M0 4 V-5 M0 4 L5 -3" stroke="#c4917a" stroke-width=".6" opacity=".7"/></g>
<g transform="translate(320,235) rotate(-30)"><path d="M-6 2 Q-6 -4 0 -4 Q7 -3 6 2 Q2 6 -6 2Z" fill="#e8b8a0"/><path d="M-3 1 Q-2 -3 2 -1 Q5 2 0 3" fill="none" stroke="#c4917a" stroke-width=".7"/></g>
<g transform="translate(400,220) rotate(15)"><path d="M0 5 L-8 -1 Q-9 -5 -5 -5 Q-2 -9 0 -6 Q4 -9 6 -5 Q10 -4 8 0Z" fill="#f0d0b8"/><path d="M0 5 L-5 -4 M0 5 V-6 M0 5 L6 -4" stroke="#c4917a" stroke-width=".7" opacity=".65"/></g>
<!-- Driftwood and dune grass stay clear of the clue letters. -->
<path d="M338 192 Q360 187 384 192 L388 196 L343 198Z" fill="#c4a870" opacity=".65"/>
<path d="M346 193 L379 193 M367 192 L376 184" fill="none" stroke="#8b6914" stroke-width="1" opacity=".55"/>
<path d="M460 198 Q480 187 500 191 V204 Q482 199 460 203Z" fill="#c9a86e" opacity=".35"/>
<path d="M478 199 L471 182 M478 199 L480 177 M478 199 L489 184 M494 201 L490 187 M494 201 L499 183" fill="none" stroke="#8b9160" stroke-width="1.1" opacity=".65"/>
<!-- Bottle bobbing in shallows -->
<g>
  <animateTransform attributeName="transform" type="translate" values="0,0;3,-2;0,0;-3,2;0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
  <rect x="58" y="150" width="16" height="7" rx="3" fill="#8bc8a0" opacity="0.6" transform="rotate(-10,66,153)"/>
  <rect x="66" y="147" width="3" height="5" rx="1" fill="#a0d8b0" opacity="0.5" transform="rotate(-10,67,149)"/>
</g>
<!-- Sand texture dots -->
<circle cx="150" cy="220" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="250" cy="240" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="350" cy="225" r="0.8" fill="#c4a870" opacity="0.25"/>
<circle cx="430" cy="245" r="0.8" fill="#c4a870" opacity="0.3"/>
<circle cx="80" cy="235" r="0.8" fill="#c4a870" opacity="0.25"/>
<!-- Approved cast background appearance; story and clues are unchanged. -->
` + bcApprovedPlace('webby','ready',425,217,90,false) + `
</svg>`;

// ====================================================================
// Scenes 1-3: kneeling at the shell cluster. A close-up, not the wide shot:
// the shells, their scratch marks, and the crab who runs the place.
// The story says each shell has a letter scratched in it, so the cluster
// shells carry the fodder's letters (HORSE). Before the solve (beach_1/2)
// they never spell the answer in any order; beach_3 is post-solve.
// ====================================================================
function bcBn(v) { return Math.round(v * 10) / 10; }

// The wreck crab (wCrab in wreck.js), same body/claw construction, copied
// because beach.js loads before wreck.js. `tap` makes the left claw tap down
// onto a shell and rest, the way a teacher taps a desk.
function bcBeachCrab(x, y, r, tap) {
  var jx = bcBn(-r * 0.85), jy = bcBn(-r * 0.15);
  var o = '<g transform="translate(' + x + ',' + y + ')">';
  o += '<ellipse cx="0" cy="' + bcBn(r * 0.95) + '" rx="' + bcBn(r * 1.7) + '" ry="' + bcBn(r * 0.3) + '" fill="#a88a52" opacity="0.4"/>';
  // four walking legs a side, each bent at the knee and fanning out
  var legs = [[0.5, 0.4, 0.82, 0.62, 0.92, 0.96], [0.7, 0.3, 1.08, 0.46, 1.26, 0.9], [0.86, 0.16, 1.3, 0.28, 1.56, 0.78], [0.95, 0.0, 1.42, 0.06, 1.76, 0.6]];
  var ld = '';
  legs.forEach(function (g) {
    [-1, 1].forEach(function (sd) {
      ld += 'M' + bcBn(sd * r * g[0]) + ',' + bcBn(r * g[1]) + ' L' + bcBn(sd * r * g[2]) + ',' + bcBn(r * g[3]) + ' L' + bcBn(sd * r * g[4]) + ',' + bcBn(r * g[5]) + ' ';
    });
  });
  o += '<path d="' + ld.trim() + '" fill="none" stroke="#8f3b2e" stroke-width="' + bcBn(r * 0.13) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  o += '<ellipse cx="0" cy="0" rx="' + r + '" ry="' + bcBn(r * 0.67) + '" fill="#8f3b2e"/>';
  o += '<ellipse cx="0" cy="' + bcBn(-r * 0.2) + '" rx="' + bcBn(r * 0.85) + '" ry="' + bcBn(r * 0.42) + '" fill="#b04a38" opacity="0.85"/>';
  o += '<ellipse cx="' + bcBn(-r * 0.25) + '" cy="' + bcBn(-r * 0.36) + '" rx="' + bcBn(r * 0.35) + '" ry="' + bcBn(r * 0.12) + '" fill="#d87a60" opacity="0.5"/>';
  o += '<circle cx="' + bcBn(-r * 0.35) + '" cy="' + bcBn(-r * 0.48) + '" r="' + bcBn(r * 0.15) + '" fill="#0a1a1e"/>' +
    '<circle cx="' + bcBn(r * 0.35) + '" cy="' + bcBn(-r * 0.48) + '" r="' + bcBn(r * 0.15) + '" fill="#0a1a1e"/>';
  o += '<circle cx="' + bcBn(-r * 0.31) + '" cy="' + bcBn(-r * 0.52) + '" r="' + bcBn(r * 0.05) + '" fill="#f4ece0"/>' +
    '<circle cx="' + bcBn(r * 0.39) + '" cy="' + bcBn(-r * 0.52) + '" r="' + bcBn(r * 0.05) + '" fill="#f4ece0"/>';
  var claw = 'M' + jx + ',' + jy + ' L' + bcBn(-r * 1.58) + ',' + bcBn(-r * 0.58) + ' L' + bcBn(-r * 1.88) + ',' + bcBn(-r * 0.15);
  // a chunky filled pincer: a fat palm with two fingers and a V notch between
  function pincer(sd) {
    var p = [[1.76, -0.36], [2.3, -0.5], [2.46, -0.16], [2.16, -0.22], [2.02, -0.12], [2.18, -0.02], [2.4, 0.04], [2.22, 0.24], [1.76, 0.06]];
    function q(i) { return bcBn(sd * r * p[i][0]) + ',' + bcBn(r * p[i][1]); }
    return '<path d="M' + q(0) + ' Q' + q(1) + ' ' + q(2) + ' Q' + q(3) + ' ' + q(4) + ' Q' + q(5) + ' ' + q(6) + ' Q' + q(7) + ' ' + q(8) + ' Z" fill="#8f3b2e"/>' +
      '<ellipse cx="' + bcBn(sd * r * 1.98) + '" cy="' + bcBn(-r * 0.26) + '" rx="' + bcBn(r * 0.16) + '" ry="' + bcBn(r * 0.07) + '" fill="#b04a38" opacity="0.8"/>';
  }
  o += '<g>';
  if (tap) {
    o += '<animateTransform attributeName="transform" type="rotate" values="0 ' + jx + ' ' + jy + ';-16 ' + jx + ' ' + jy + ';0 ' + jx + ' ' + jy + ';-16 ' + jx + ' ' + jy + ';0 ' + jx + ' ' + jy + ';0 ' + jx + ' ' + jy +
      '" keyTimes="0;0.08;0.16;0.24;0.32;1" dur="2.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>';
  }
  o += '<path d="' + claw + '" fill="none" stroke="#8f3b2e" stroke-width="' + bcBn(r * 0.23) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  o += pincer(-1);
  o += '</g>';
  o += '<path d="M' + bcBn(r * 0.85) + ',' + bcBn(-r * 0.15) + ' L' + bcBn(r * 1.58) + ',' + bcBn(-r * 0.58) + ' L' + bcBn(r * 1.88) + ',' + bcBn(-r * 0.15) +
    '" fill="none" stroke="#8f3b2e" stroke-width="' + bcBn(r * 0.23) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  o += pincer(1);
  return o + '</g>';
}

// One scallop shell, hinge at (x,y), size s, with scratch marks. Each scratch
// set is worn nicks that never touch or cross: one long diagonal plus dots,
// short curved nicks, or broken hatching. No two strokes meet, no pair is
// joined by a bar, so none can resolve into a letterform.
// ['l',x1,y1,x2,y2] straight nick, ['q',x1,y1,cx,cy,x2,y2] curved nick,
// ['d',x,y] a pit.
var BC_SCUFFS = [
  [['l', -0.4, -0.66, 0.36, -0.26], ['d', 0.22, -0.62], ['d', -0.18, -0.24]],
  [['q', -0.42, -0.34, -0.3, -0.47, -0.14, -0.42], ['q', 0.08, -0.66, 0.2, -0.56, 0.36, -0.62], ['d', 0.06, -0.28]],
  [['l', -0.4, -0.62, -0.27, -0.53], ['l', -0.14, -0.45, -0.01, -0.36], ['l', 0.12, -0.28, 0.25, -0.19]],
  [['q', -0.36, -0.3, -0.06, -0.72, 0.36, -0.46], ['d', -0.22, -0.62], ['d', 0.16, -0.24]],
  [['l', -0.34, -0.24, 0.3, -0.66], ['q', 0.12, -0.2, 0.24, -0.2, 0.34, -0.3], ['d', -0.28, -0.6]],
  [['l', -0.36, -0.56, -0.26, -0.46], ['l', -0.04, -0.4, 0.06, -0.3], ['l', 0.2, -0.64, 0.3, -0.54], ['d', -0.22, -0.26]],
  [['q', -0.42, -0.5, -0.12, -0.62, 0.08, -0.48], ['l', 0.14, -0.28, 0.32, -0.38], ['d', -0.3, -0.26]]
];
// `letter` (optional) replaces the scuffs with one letter scratched into the
// face: Georgia (carved/scratched surface), a dark groove with a pale lip.
function bcShell(x, y, s, rot, tint, scuff, letter) {
  var o = '<ellipse cx="' + x + '" cy="' + bcBn(y + 2) + '" rx="' + bcBn(s * 1.05) + '" ry="' + bcBn(s * 0.25) + '" fill="#b09660" opacity="0.38"/>';
  o += '<g transform="translate(' + x + ',' + y + ') rotate(' + rot + ')">';
  o += '<path d="M0,0 L' + bcBn(-s * 0.95) + ',' + bcBn(-s * 0.55) + ' Q' + bcBn(-s * 1.05) + ',' + bcBn(-s * 1.25) + ' ' + bcBn(-s * 0.45) + ',' + bcBn(-s * 1.4) +
    ' Q0,' + bcBn(-s * 1.58) + ' ' + bcBn(s * 0.45) + ',' + bcBn(-s * 1.4) + ' Q' + bcBn(s * 1.05) + ',' + bcBn(-s * 1.25) + ' ' + bcBn(s * 0.95) + ',' + bcBn(-s * 0.55) + ' Z" fill="' + tint + '" stroke="#a8745e" stroke-width="1"/>';
  o += '<path d="M' + bcBn(-s * 0.7) + ',' + bcBn(-s * 1.2) + ' Q0,' + bcBn(-s * 1.5) + ' ' + bcBn(s * 0.7) + ',' + bcBn(-s * 1.2) + ' Q0,' + bcBn(-s * 1.3) + ' ' + bcBn(-s * 0.7) + ',' + bcBn(-s * 1.2) + ' Z" fill="#fff4e4" opacity="0.45"/>';
  o += '<path d="M0,0 L' + bcBn(-s * 0.7) + ',' + bcBn(-s * 1.15) + ' M0,0 L' + bcBn(-s * 0.25) + ',' + bcBn(-s * 1.42) + ' M0,0 L' + bcBn(s * 0.25) + ',' + bcBn(-s * 1.42) + ' M0,0 L' + bcBn(s * 0.7) + ',' + bcBn(-s * 1.15) +
    '" stroke="#c4917a" stroke-width="0.9" opacity="0.6" fill="none"/>';
  o += '<path d="M' + bcBn(-s * 0.3) + ',' + bcBn(s * 0.12) + ' L' + bcBn(s * 0.3) + ',' + bcBn(s * 0.12) + ' L' + bcBn(s * 0.18) + ',' + bcBn(-s * 0.12) + ' L' + bcBn(-s * 0.18) + ',' + bcBn(-s * 0.12) + ' Z" fill="#d8a890"/>';
  if (letter) {
    var t = 'x="0" y="' + bcBn(-s * 0.36) + '" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-size="' + bcBn(s * 1.02) + '"';
    o += '<text ' + t + ' fill="#fff0dc" opacity="0.55" transform="translate(0.7,0.7)">' + letter + '</text>';
    o += '<text ' + t + ' fill="#6e4434">' + letter + '</text>';
    return o + '</g>';
  }
  var d = '', pits = '';
  function px(v) { return bcBn(v * s); }
  function py(v) { return bcBn(v * s * 1.6); }
  BC_SCUFFS[scuff % BC_SCUFFS.length].forEach(function (l) {
    if (l[0] === 'l') d += 'M' + px(l[1]) + ',' + py(l[2]) + ' L' + px(l[3]) + ',' + py(l[4]) + ' ';
    else if (l[0] === 'q') d += 'M' + px(l[1]) + ',' + py(l[2]) + ' Q' + px(l[3]) + ',' + py(l[4]) + ' ' + px(l[5]) + ',' + py(l[6]) + ' ';
    else pits += '<circle cx="' + px(l[1]) + '" cy="' + py(l[2]) + '" r="0.9"/>';
  });
  o += '<path d="' + d.trim() + '" stroke="#6e4434" stroke-width="1.3" stroke-linecap="round" opacity="0.7" fill="none"/>';
  o += '<path d="' + d.trim() + '" stroke="#fff0dc" stroke-width="0.6" stroke-linecap="round" opacity="0.35" fill="none" transform="translate(0.7,0.7)"/>';
  if (pits) o += '<g fill="#6e4434" opacity="0.6">' + pits + '</g>';
  return o + '</g>';
}

function bcBeachCloseup(v) {
  var o = '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">' +
    '<defs>' +
    '<linearGradient id="bcuSea' + v + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' + BC_BEACH.sea + '"/><stop offset="100%" stop-color="' + BC_BEACH.seaShallow + '"/></linearGradient>' +
    '<linearGradient id="bcuSand' + v + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' + BC_BEACH.sandWet + '"/><stop offset="22%" stop-color="' + BC_BEACH.sand + '"/><stop offset="100%" stop-color="' + BC_BEACH.sandDry + '"/></linearGradient>' +
    '<radialGradient id="bcuGlow' + v + '" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fffbe0" stop-opacity="1"/><stop offset="45%" stop-color="#ffd860" stop-opacity="0.75"/><stop offset="100%" stop-color="#ffc040" stop-opacity="0"/></radialGradient>' +
    '</defs>';
  // the sand, filling the frame because we are kneeling on it
  o += '<rect width="500" height="260" fill="url(#bcuSand' + v + ')"/>';
  // the edge of the sea at the top of the frame, and its foam
  o += '<path d="M0,0 L500,0 L500,30 Q440,38 370,32 Q290,26 220,34 Q130,42 60,33 Q30,30 0,34 Z" fill="url(#bcuSea' + v + ')" opacity="0.85"/>';
  o += '<path d="M0,34 Q30,30 60,33 Q130,42 220,34 Q290,26 370,32 Q440,38 500,30 L500,36 Q440,44 370,38 Q290,32 220,40 Q130,48 60,39 Q30,36 0,40 Z" fill="' + BC_BEACH.foam + '" opacity="0.6">' +
    '<animate attributeName="opacity" values="0.45;0.75;0.45" dur="4.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>';
  // wet sheen and the drift line
  o += '<path d="M0,42 Q130,52 250,44 Q380,38 500,44 L500,58 Q380,52 250,58 Q130,64 0,56 Z" fill="' + BC_BEACH.sandSheen + '" opacity="0.4"/>';
  o += '<path d="M0,74 Q110,80 230,73 Q360,66 500,74" fill="none" stroke="' + BC_BEACH.drift + '" stroke-width="2" opacity="0.45"/>';
  // grit
  o += '<g fill="' + BC_BEACH.grit + '" opacity="0.45">';
  [[38, 98, 1.6], [92, 236, 1.4], [148, 120, 1.2], [276, 236, 1.7], [452, 102, 1.4], [470, 230, 1.3], [24, 196, 1.2], [334, 108, 1.1], [196, 246, 1.3], [418, 156, 1.2], [64, 150, 1], [302, 92, 1.2]].forEach(function (g) {
    o += '<circle cx="' + g[0] + '" cy="' + g[1] + '" r="' + g[2] + '"/>';
  });
  o += '</g>';
  o += '<g fill="#f8ecc8" opacity="0.55"><circle cx="118" cy="214" r="1.1"/><circle cx="246" cy="96" r="1"/><circle cx="436" cy="248" r="1.2"/><circle cx="54" cy="122" r="1"/></g>';
  // a pebble and a broken shell fragment, so the ground is not empty
  // (the pebble sits clear of the player's heels, where it no longer merges with his shadow)
  o += '<path d="M150,236 Q156,226 168,230 Q176,236 168,242 Q156,244 150,236 Z" fill="#a89a8b"/><path d="M154,232 Q160,228 166,231" stroke="#c8bcae" stroke-width="1.4" fill="none" opacity="0.6"/>';
  o += '<path d="M456,184 l8,-6 l6,4 l-4,6 Z" fill="#f0d0b8" opacity="0.8"/>';

  if (v === 1) {
    // THE CLUSTER: arranged on purpose, a loose arc with one at the centre
    // (the whole cluster sits 40 right of where it was, to give the kneeling
    // player the left of the frame; same seven shells, same tints, same scuffs)
    o += '<path d="M160,190 Q250,150 314,170" fill="none" stroke="#c9a86e" stroke-width="1.2" stroke-dasharray="2 5" opacity="0.4"/>';
    // Five shells carry the letters of the clue's fodder, HORSE, in no order
    // ("read in order, they spell nonsense"); the other two are bare. S sits
    // last on every reading (left-right, top-down), so no ordered subset can
    // spell the answer. Each lettered shell is the one that slides into the
    // beach_3 line (see the drag marks there), so the letters carry over.
    var shells = [[172, 190, 15, -14, '#f0c8b0', 'H'], [208, 168, 16, -6, '#f5d6c0'], [248, 158, 17, 3, '#f0c8b0', 'E'], [290, 160, 16, 8, '#ecc2aa'], [340, 222, 14, 10, '#f5d6c0', 'S'], [230, 214, 14, -4, '#ecc2aa', 'O'], [278, 210, 15, 6, '#f0d0b8', 'R']];
    shells.forEach(function (sh, i) { o += bcShell(sh[0], sh[1], sh[2], sh[3], sh[4], i, sh[5]); });
    // the crab, beside the cluster, tapping the nearest shell
    o += bcBeachCrab(390, 200, 22, true);
    // its feet have printed the sand on the way in
    o += '<g fill="#b8996a" opacity="0.4"><circle cx="434" cy="214" r="1.4"/><circle cx="446" cy="208" r="1.4"/><circle cx="456" cy="218" r="1.4"/><circle cx="468" cy="212" r="1.4"/><circle cx="478" cy="222" r="1.4"/><circle cx="490" cy="216" r="1.4"/></g>';
  } else {
    // THE CLUSTER, REARRANGED: the shells now sit in one line and glow
    // (22 right of where it was, clear of the kneeling player; same five shells)
    var line = [[172, 176, 15, -4, '#f0c8b0'], [218, 174, 16, 2, '#f5d6c0'], [264, 172, 16, -2, '#ecc2aa'], [310, 174, 16, 3, '#f0d0b8'], [356, 176, 15, -3, '#f0c8b0']];
    // the drag marks where they slid into place: a soft groove from each
    // shell's base back toward where it lay in beach_1, fading as it goes
    // (the first shell only rose a few units from its beach_1 spot, under the
    // player's hand, so it leaves no groove; a straight 12-unit one read as a stalk)
    var drags = ['M217,181 Q226,192 229,205', 'M263,180 Q270,191 277,203', 'M311,181 Q325,192 339,205', 'M358,182 Q375,188 392,196'];
    o += '<defs><linearGradient id="bcuDrag' + v + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity="1"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<mask id="bcuDragM' + v + '" maskUnits="userSpaceOnUse" x="0" y="176" width="500" height="32"><rect x="0" y="176" width="500" height="32" fill="url(#bcuDrag' + v + ')"/></mask></defs>';
    o += '<g mask="url(#bcuDragM' + v + ')" fill="none" stroke-linecap="round">';
    drags.forEach(function (p) {
      o += '<path d="' + p + '" stroke="#b8996a" stroke-width="8" opacity="0.4" transform="translate(0,1.4)"/>' +
        '<path d="' + p + '" stroke="#f6e8c4" stroke-width="7" opacity="0.85"/>';
    });
    o += '</g>';
    line.forEach(function (sh, i) {
      o += '<ellipse cx="' + sh[0] + '" cy="' + (sh[1] - 12) + '" rx="30" ry="25" fill="url(#bcuGlow' + v + ')" opacity="0.5">' +
        '<animate attributeName="opacity" values="0.45;1;0.45" dur="' + bcBn(3 + i * 0.17) + 's" begin="' + bcBn(i * 0.32) + 's" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>';
    });
    // beach_3 runs after the solve, beside the line "the shells ... rearrange
    // themselves to spell SHORE", so here (only here) the line reads SHORE:
    // the same five lettered shells from beach_1, reordered.
    var lineLetters = ['S', 'H', 'O', 'R', 'E'];
    line.forEach(function (sh, i) { o += bcShell(sh[0], sh[1], sh[2], sh[3], sh[4], i + 2, lineLetters[i]); });
    // the crab mid-shuffle: placement outside, motion inside
    o += '<g><animateTransform attributeName="transform" type="translate" values="0,0;-8,-2;-16,0;-8,-2;0,0" keyTimes="0;0.25;0.5;0.75;1" dur="1.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      bcBeachCrab(410, 214, 22, false) + '</g>';
    // further down the beach, a bottle rolling in on the tide
    o += '<g transform="translate(420,44)"><g>' +
      '<animateTransform attributeName="transform" type="translate" values="10,-2;0,1;10,-2" keyTimes="0;0.5;1" dur="4.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      '<ellipse cx="0" cy="6" rx="14" ry="2.4" fill="#a88a52" opacity="0.35"/>' +
      '<g><animateTransform attributeName="transform" type="rotate" values="-14 0 0;-4 0 0;-14 0 0" keyTimes="0;0.5;1" dur="4.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>' +
      '<rect x="-12" y="-4" width="20" height="9" rx="4" fill="#7fc4a8" opacity="0.85"/>' +
      '<rect x="7" y="-2" width="6" height="5" rx="1.5" fill="#7fc4a8" opacity="0.9"/>' +
      '<rect x="12.5" y="-2.2" width="3.5" height="5.4" rx="1" fill="#c08a4a"/>' +
      '<rect x="-7" y="-2" width="11" height="5" rx="2" fill="#f0e4cc" opacity="0.9"/>' +
      '<path d="M-9,-2.5 L4,-2.5" stroke="#f4fffa" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>' +
      '</g></g></g>';
  }
  // THE PLAYER, approved Webby, at the shells. Whole figure in frame, feet on
  // the sand with his contact shadow, at the cast's natural scale beside the
  // shells. There is no kneeling model, so the approved 'reach' pose is leant
  // 8 degrees forward about his feet, bending him toward the cluster, and the
  // cluster is placed so his fingertips land on its nearest shell. Drawn after
  // the shells so the hand closes over it.
  o += '<g transform="rotate(8 78 246)">' + bcApprovedPlace('webby', 'reach', 78, 246, 176, false) + '</g>';
  return o + '</svg>';
}

STORY_SCENES['beach_1'] = bcBeachCloseup(1);
STORY_SCENES['beach_2'] = STORY_SCENES['beach_1'];
STORY_SCENES['beach_3'] = bcBeachCloseup(3);

// Scene 4: Bottle rolls to feet, cliffside passage with vines
STORY_SCENES['beach_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="b4Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.sky + `"/><stop offset="58%" stop-color="` + BC_BEACH.skyHorizon + `"/>
  </linearGradient>
  <linearGradient id="b4CliffFace" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0%" stop-color="#8a7f74"/><stop offset="48%" stop-color="` + BC_BEACH.rock + `"/><stop offset="100%" stop-color="` + BC_BEACH.rockShade + `"/>
  </linearGradient>
  <linearGradient id="b4CliffLit" x1="0.2" y1="0" x2="1" y2="0.6">
    <stop offset="0%" stop-color="` + BC_BEACH.rockLit + `"/><stop offset="100%" stop-color="#7d7166"/>
  </linearGradient>
  <linearGradient id="b4Sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.seaDeep + `"/><stop offset="100%" stop-color="` + BC_BEACH.sea + `"/>
  </linearGradient>
  <linearGradient id="b4Sand" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="` + BC_BEACH.sandDry + `"/><stop offset="100%" stop-color="` + BC_BEACH.sand + `"/>
  </linearGradient>
  <linearGradient id="b4Slab" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0%" stop-color="#8f877c"/><stop offset="55%" stop-color="#7a7268"/><stop offset="100%" stop-color="#615a52"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#b4Sky)"/>

<!-- ====================================================================
     THE FAR HEADLAND, across the water. Distance eats contrast before it
     eats detail, so it goes to a wash of the sky colour rather than a
     smaller version of the near rock.
     ==================================================================== -->
<path d="M360,150 L378,128 L396,136 L414,116 L436,124 L452,110 L470,120 L488,108 L500,116 L500,152 Z" fill="` + BC_BEACH.headland + `" opacity="0.7"/>
<path d="M414,116 L436,124 L452,110 L462,116 L440,130 L420,124 Z" fill="#a6bcc8" opacity="0.4"/>

<!-- the sea, sitting between the two headlands -->
<path d="M156,150 L500,150 L500,196 L172,196 Z" fill="url(#b4Sea)"/>
<path d="M156,150 L500,150 L500,155 L158,155 Z" fill="` + BC_BEACH.seaShallow + `" opacity="0.6"/>
<!-- swell lines, further apart as they come toward the shore -->
<path d="M180,166 Q260,161 340,166 Q420,171 500,164" fill="none" stroke="` + BC_BEACH.swell + `" stroke-width="1.7" opacity="0.45" stroke-linecap="round">
  <animate attributeName="opacity" values="0.25;0.55;0.25" dur="6.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M176,180 Q266,174 356,181 Q432,187 500,179" fill="none" stroke="` + BC_BEACH.swell + `" stroke-width="2" opacity="0.4" stroke-linecap="round">
  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="7.4s" begin="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- foam where the sea lands on the sand -->
<path d="M172,194 Q280,199 390,194 Q450,191 500,195 L500,201 Q400,205 280,204 Q210,202 172,199 Z" fill="` + BC_BEACH.foam + `" opacity="0.55"/>

<!-- ====================================================================
     THE HEADLAND. Rock is flat planes meeting at angles, so the mass is
     built from a few big faces with the light landing on some and not
     others. It runs from the left edge out toward the water and is
     UNDERCUT at the base, where the tide has been working at it: that
     undercut is what the cave sits in, and what explains the dark.
     ==================================================================== -->
<!-- the main mass -->
<path d="M-4,260 L-4,58 L34,30 L86,44 L124,26 L172,52 L206,44 L242,78 L268,110 L286,150 L292,196 L282,236 L262,260 Z" fill="url(#b4CliffFace)"/>
<!-- the seaward faces, turned into the light -->
<path d="M124,26 L172,52 L206,44 L242,78 L268,110 L286,150 L268,152 L238,112 L200,74 L166,66 L128,44 Z" fill="url(#b4CliffLit)" opacity="0.85"/>
<path d="M34,30 L86,44 L124,26 L128,44 L88,60 L38,48 Z" fill="#9c8f81" opacity="0.5"/>
<!-- the shadowed face on the near side, which is what gives the mass depth -->
<path d="M-4,260 L-4,168 L48,150 L96,166 L128,200 L136,240 L124,260 Z" fill="#4e453d" opacity="0.5"/>

<!-- STRATA. Bands follow the slope of the rock, never level across the
     front, because the beds were tilted when the headland was made. -->
<path d="M-4,88 Q56,74 112,84 Q168,96 212,124 L214,134 Q166,108 110,96 Q54,86 -4,100 Z" fill="#5c5249" opacity="0.42"/>
<path d="M-4,130 Q52,118 104,130 Q156,144 196,172 L198,182 Q152,156 100,142 Q50,132 -4,144 Z" fill="#5c5249" opacity="0.34"/>
<path d="M-4,52 Q44,42 88,50 L88,58 Q44,50 -4,60 Z" fill="#9c8f81" opacity="0.3"/>
<!-- fractures running down the face, following the fall of the rock -->
<path d="M42,36 Q56,88 78,140 Q96,186 104,232" fill="none" stroke="#443b34" stroke-width="1.7" opacity="0.45" stroke-linecap="round"/>
<path d="M136,32 Q152,80 178,124 Q200,162 210,196" fill="none" stroke="#443b34" stroke-width="1.4" opacity="0.38" stroke-linecap="round"/>
<path d="M212,52 Q228,86 248,118" fill="none" stroke="#443b34" stroke-width="1.1" opacity="0.3" stroke-linecap="round"/>

<!-- scrub clinging to the ledges, which is what says this rock is old -->
<g fill="#3f7434" opacity="0.55">
  <path d="M18,62 q7,-9 14,-2 q7,-7 12,2 q-13,5 -26,0 Z"/>
  <path d="M92,50 q6,-8 12,-2 q6,-6 10,2 q-11,4 -22,0 Z"/>
  <path d="M150,64 q6,-8 12,-1 q6,-6 10,3 q-11,4 -22,-2 Z"/>
  <path d="M214,80 q5,-7 11,-1 q5,-5 9,2 q-10,4 -20,-1 Z"/>
  <path d="M246,116 q5,-6 10,-1 q5,-5 8,2 q-9,4 -18,-1 Z"/>
</g>

<!-- ====================================================================
     THE PASSAGE. A narrow cut at the foot of the cliff, wide enough for one
     person, and SHUT: a heavy stone slab sits in a rebate cut into the rock.
     Same stone, same chisel work and same colours as the door in beach_5,
     because it is the same door seen from further back.
     ==================================================================== -->
<!-- the brow of rock the passage is cut under -->
<path d="M70,240 Q72,160 128,146 Q184,160 186,240 L172,240 Q170,172 128,160 Q86,172 84,240 Z" fill="#4a4139"/>
<path d="M78,226 Q82,166 128,154 Q174,166 178,226 L172,226 Q168,174 128,162 Q88,174 84,226 Z" fill="#645a50" opacity="0.55"/>
<!-- the rebate the slab sits in, and the shadow gap round it -->
<path d="M92,242 L92,178 Q92,172 98,172 L158,172 Q164,172 164,178 L164,242 Z" fill="#332e27"/>
<path d="M96,242 L96,181 Q96,176 101,176 L155,176 Q160,176 160,181 L160,242 Z" fill="#241f1a"/>
<!-- the slab, standing a little proud of the rebate -->
<path d="M100,240 L100,184 Q100,180 104,180 L152,180 Q156,180 156,184 L156,240 Z" fill="url(#b4Slab)"/>
<path d="M100,240 L100,184 Q100,180 104,180 L107,180 Q103,181 103,185 L103,240 Z" fill="#a09689" opacity="0.55"/>
<path d="M156,240 L156,184 Q156,180 152,180 L149,180 Q153,181 153,185 L153,240 Z" fill="#4a443c" opacity="0.6"/>
<!-- the sunk panel and the mason's tool marks -->
<path d="M107,234 L107,188 Q107,186 109,186 L147,186 Q149,186 149,188 L149,234 Z" fill="#6f675c"/>
<path d="M107,234 L107,188 Q107,186 109,186 L147,186 Q149,186 149,188 L109,188 L109,234 Z" fill="#4f483f" opacity="0.65"/>
<path d="M149,234 L149,189 L147,191 L147,232 L109,232 L107,234 Z" fill="#8f877c" opacity="0.5"/>
<path d="M110,229 L110,192 Q110,190 112,190 L144,190 Q146,190 146,192 L146,229 Z" fill="#7a7268" opacity="0.85"/>
<g stroke="#655e55" stroke-width="0.8" opacity="0.4" fill="none">
  <path d="M113,198 Q128,196 143,198 M113,206 Q128,204 143,206 M113,216 Q128,214 143,216 M113,224 Q128,222 143,224"/>
</g>
<!-- the shadow gap under the slab -->
<path d="M100,237 L156,237 L156,242 L100,242 Z" fill="#1c1814" opacity="0.8"/>
<!-- the tide line the sea has cut across the base of the cliff -->
<path d="M-4,222 Q22,216 46,220 L46,228 Q22,224 -4,230 Z" fill="#5a6a62" opacity="0.4"/>
<path d="M200,238 Q230,232 258,238 L258,246 Q230,240 200,246 Z" fill="#5a6a62" opacity="0.35"/>

<!-- FADED SYMBOLS carved in the rock round the passage. Abstract marks only:
     spiral, ring, waves, chevrons, an eye. Never letters. Each is a dark cut
     with a pale lip on its lower edge, and all of them are worn. -->
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
  <g stroke="#3a322b" stroke-width="1.6" opacity="0.38">
    <path d="M38.8,180.0 L38.9,180.5 L38.5,181.3 L37.5,181.7 L36.6,181.4 L35.9,180.7 L35.6,179.6 L35.8,178.4 L36.7,177.4 L38.0,176.8 L39.6,176.9 L41.0,177.8 L41.9,179.4 L42.0,181.3 L41.1,183.1 L39.4,184.4 L37.2,184.8 L35.0,184.1 L33.2,182.4 L32.4,180.0 L32.8,177.3 L34.4,175.1 L37.0,173.8 L40.0,173.8 L42.8,175.2 L44.7,177.8 L45.2,181.1 L44.1,184.4 L41.5,186.9 L38.0,188.0"/><circle cx="38" cy="180" r="8"/>
    <circle cx="214" cy="166" r="9"/><circle cx="214" cy="166" r="1.8"/>
    <path d="M166,104 q5,-5 10,0 q5,5 10,0 q5,-5 10,0 M166,112 q5,-5 10,0 q5,5 10,0 q5,-5 10,0"/>
    <path d="M222,216 l5,-6 l5,6 l5,-6 l5,6 l5,-6 l5,6 l5,-6 l5,6"/>
    <path d="M14,138 q12,-10 24,0 q-12,10 -24,0 Z"/><circle cx="26" cy="138" r="2.4"/>
  </g>
  <g stroke="#b0a290" stroke-width="0.8" opacity="0.28" transform="translate(0.9,1)">
    <path d="M38.8,180.0 L38.9,180.5 L38.5,181.3 L37.5,181.7 L36.6,181.4 L35.9,180.7 L35.6,179.6 L35.8,178.4 L36.7,177.4 L38.0,176.8 L39.6,176.9 L41.0,177.8 L41.9,179.4 L42.0,181.3 L41.1,183.1 L39.4,184.4 L37.2,184.8 L35.0,184.1 L33.2,182.4 L32.4,180.0 L32.8,177.3 L34.4,175.1 L37.0,173.8 L40.0,173.8 L42.8,175.2 L44.7,177.8 L45.2,181.1 L44.1,184.4 L41.5,186.9 L38.0,188.0"/><circle cx="38" cy="180" r="8"/>
    <circle cx="214" cy="166" r="9"/>
    <path d="M166,104 q5,-5 10,0 q5,5 10,0 q5,-5 10,0 M166,112 q5,-5 10,0 q5,5 10,0 q5,-5 10,0"/>
    <path d="M222,216 l5,-6 l5,6 l5,-6 l5,6 l5,-6 l5,6 l5,-6 l5,6"/>
    <path d="M14,138 q12,-10 24,0 q-12,10 -24,0 Z"/>
  </g>
</g>

<!-- VINES. The passage is vine-covered: they hang PLUMB from the brow,
     framing the slab and falling across its top edge. -->
<path d="M82,170 Q78,196 84,220 Q86,232 82,246" fill="none" stroke="#3a8a30" stroke-width="2.3" stroke-linecap="round"/>
<path d="M108,156 Q105,176 110,198" fill="none" stroke="#4a9a38" stroke-width="1.8" stroke-linecap="round"/>
<path d="M140,154 Q144,172 139,190" fill="none" stroke="#3a8a30" stroke-width="1.9" stroke-linecap="round"/>
<path d="M174,168 Q179,194 172,220 Q169,234 173,248" fill="none" stroke="#4a9a38" stroke-width="2.2" stroke-linecap="round"/>
<g fill="#4a9a38">
  <path d="M80,184 q-9,-3 -11,4 q8,5 11,-4 Z"/>
  <path d="M85,210 q9,-3 11,4 q-8,5 -11,-4 Z"/>
  <path d="M106,170 q-8,-3 -10,4 q7,4 10,-4 Z"/>
  <path d="M110,192 q8,-3 10,4 q-7,4 -10,-4 Z"/>
  <path d="M142,168 q8,-3 10,4 q-7,4 -10,-4 Z"/>
  <path d="M139,184 q-8,-3 -10,4 q7,4 10,-4 Z"/>
  <path d="M177,186 q8,-3 10,4 q-7,4 -10,-4 Z"/>
  <path d="M171,216 q-8,-3 -10,4 q7,4 10,-4 Z"/>
</g>

<!-- ====================================================================
     THE SAND, running from the foot of the cliff to the near ground.
     ==================================================================== -->
<path d="M52,250 Q120,238 200,240 Q240,241 268,236 L500,196 L500,260 L40,260 Z" fill="url(#b4Sand)"/>
<path d="M78,244 Q124,236 170,244 Q124,250 78,244 Z" fill="#cdb078" opacity="0.5"/>
<!-- the wet strip the last wave left, darker and reflective -->
<path d="M258,236 L500,196 L500,212 Q380,224 262,246 Z" fill="` + BC_BEACH.sandWet + `" opacity="0.7"/>
<path d="M270,238 L500,199 L500,204 Q390,216 272,242 Z" fill="` + BC_BEACH.sandSheen + `" opacity="0.4"/>
<!-- the drift line where the tide stopped -->
<path d="M212,252 Q300,242 390,234 Q446,229 500,224" fill="none" stroke="` + BC_BEACH.drift + `" stroke-width="1.8" opacity="0.45" stroke-linecap="round"/>
<!-- pebbles and shell fragments, sparse and unevenly spread -->
<g fill="#c0a068" opacity="0.6">
  <path d="M304,250 q5,-3 9,1 q-4,4 -9,-1 Z"/>
  <path d="M376,242 q4,-3 7,1 q-3,3 -7,-1 Z"/>
  <path d="M436,232 q5,-3 9,1 q-4,3 -9,-1 Z"/>
  <path d="M468,250 q4,-2 7,1 q-3,3 -7,-1 Z"/>
  <path d="M238,256 q5,-3 9,1 q-4,4 -9,-1 Z"/>
  <path d="M340,232 q4,-2 6,1 q-3,3 -6,-1 Z"/>
</g>
<!-- a rock fallen from the cliff, half buried, which is where the debris
     at the foot of a headland actually comes from -->
<path d="M148,252 L162,242 L182,246 L188,258 L146,260 Z" fill="#6f6459"/>
<path d="M162,242 L182,246 L184,251 L164,248 Z" fill="#9c8f81" opacity="0.55"/>

<!-- ====================================================================
     THE BOTTLE. This is what the scene is FOR: its own comment reads
     "Bottle rolls to feet", so it lies in the near ground where a thing
     that has just rolled to a stop would lie, with the trough it left.
     ==================================================================== -->
<path d="M286,252 Q338,246 396,250 Q340,254 286,252 Z" fill="#bd9c62" opacity="0.35"/>
<!-- lying on its side, the body then the neck then the cork -->
<path d="M300,240 Q302,232 314,231 L358,229 Q370,229 371,235 Q372,242 360,243 L314,245 Q301,246 300,240 Z" fill="#7fc4a8" opacity="0.75"/>
<path d="M304,236 Q308,233 316,233 L354,231 Q362,231 362,234 Q356,236 344,236 L316,238 Q306,238 304,236 Z" fill="#c8ecdc" opacity="0.5"/>
<path d="M371,234 L385,233 Q389,233 389,236 Q389,239 385,239 L371,240 Z" fill="#7fc4a8" opacity="0.78"/>
<path d="M389,233 L398,232 Q401,232 401,236 Q401,240 398,240 L389,239 Z" fill="#c08a4a"/>
<path d="M390,234 L397,233 Q399,233 399,236 L390,238 Z" fill="#d8a464" opacity="0.6"/>
<!-- the rolled message inside the glass, which is the thing worth having -->
<path d="M316,234 Q318,231 324,231 L348,230 Q353,230 353,234 Q353,238 348,238 L324,239 Q317,239 316,234 Z" fill="#f0e4cc"/>
<path d="M321,234 L344,233 M321,237 L339,236" fill="none" stroke="#a89070" stroke-width="0.8" opacity="0.7"/>
<path d="M348,230 Q353,232 353,234 Q353,237 348,238 Q351,234 348,230 Z" fill="#d8ccb0"/>
<!-- the glint on the glass, and the shadow it drops in the sand -->
<path d="M310,232 Q322,229 336,229" fill="none" stroke="#f4fffa" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
<path d="M300,244 Q340,249 392,241 Q344,252 300,248 Z" fill="#ab8f58" opacity="0.4"/>
</svg>`;

// Scene 5: inside the passage
STORY_SCENES['beach_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="doorCliff" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6a6058"/><stop offset="100%" stop-color="#4a4238"/>
  </linearGradient>
  <linearGradient id="doorFace" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0%" stop-color="#8f877c"/><stop offset="55%" stop-color="#7a7268"/><stop offset="100%" stop-color="#615a52"/>
  </linearGradient>
  <radialGradient id="chalkGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#f4f2ea" stop-opacity="0.3"/><stop offset="100%" stop-color="#f4f2ea" stop-opacity="0"/>
  </radialGradient>
  <filter id="chalkFilter"><feGaussianBlur stdDeviation="0.8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <radialGradient id="beach5Mouth" cx="50%" cy="0%" r="80%">
    <stop offset="0%" stop-color="` + BC_BEACH.skyHorizon + `" stop-opacity="0.28"/><stop offset="100%" stop-color="` + BC_BEACH.skyHorizon + `" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#doorCliff)"/>

<!-- ====================================================================
     INSIDE THE PASSAGE, looking at the far end of it. The scene was a
     gradient with three ruled lines across it for "cliff texture" and a
     rounded rect for a door: a diagram of a door, in an empty room.

     A rock is not a wash. It is flat planes meeting at angles, and the
     angles are what catch light differently. Same rock vocabulary as
     beach_4, which is the headland this passage runs into.
     ==================================================================== -->

<!-- daylight leaking in behind the player, so the passage has a direction -->
<path d="M0,0 L500,0 L500,60 L0,60 Z" fill="url(#beach5Mouth)"/>

<!-- the rock the passage is cut through: angular planes, the left wall lit
     from the mouth behind and the right wall turned away from it -->
<path d="M0,0 L84,0 L96,34 L74,66 L98,104 L78,148 L100,196 L74,240 L88,260 L0,260 Z" fill="#5c554c"/>
<path d="M0,0 L52,0 L62,36 L44,68 L66,106 L48,150 L70,198 L46,242 L58,260 L0,260 Z" fill="#6f675c"/>
<path d="M0,0 L26,0 L34,38 L20,70 L38,110 L22,154 L42,202 L20,246 L30,260 L0,260 Z" fill="#7e7568" opacity="0.7"/>
<path d="M500,0 L414,0 L402,32 L426,64 L400,102 L422,146 L398,194 L424,238 L410,260 L500,260 Z" fill="#4f483f"/>
<path d="M500,0 L452,0 L442,34 L462,66 L438,104 L458,148 L434,196 L458,240 L446,260 L500,260 Z" fill="#5c554c"/>
<path d="M500,0 L478,0 L470,36 L486,68 L466,106 L482,150 L460,198 L482,242 L472,260 L500,260 Z" fill="#69614a" opacity="0.4"/>
<!-- the strata, running with the fall of the rock rather than level: level
     bands on a cut face is the tell of a flat slab -->
<path d="M0,74 L30,66 L62,72 L96,90 L92,100 L58,82 L28,76 L0,84 Z" fill="#453f37" opacity="0.55"/>
<path d="M0,146 L26,138 L58,146 L92,166 L88,176 L54,156 L24,148 L0,156 Z" fill="#453f37" opacity="0.45"/>
<path d="M500,68 L470,60 L438,68 L404,86 L408,96 L442,78 L472,70 L500,78 Z" fill="#3f3931" opacity="0.55"/>
<path d="M500,142 L474,134 L442,142 L408,162 L412,172 L446,152 L476,144 L500,152 Z" fill="#3f3931" opacity="0.45"/>
<!-- fractures following the fall of the rock -->
<path d="M56,20 Q46,72 62,124 Q76,180 60,244" fill="none" stroke="#3a342c" stroke-width="1.6" opacity="0.45"/>
<path d="M456,16 Q468,70 450,122 Q436,178 454,246" fill="none" stroke="#332e27" stroke-width="1.4" opacity="0.4"/>
<!-- the passage roof, closing in over the door -->
<path d="M0,0 L500,0 L500,26 Q380,10 250,14 Q120,10 0,28 Z" fill="#3f3931"/>
<path d="M0,20 Q120,4 250,8 Q380,4 500,20 Q380,18 250,22 Q120,18 0,32 Z" fill="#524b42" opacity="0.7"/>

<!-- ====================================================================
     THE STONE DOOR. It was a rounded rect with a smaller rounded rect on
     it and four ruled lines. A slab cut to fill a hole in the rock has a
     REBATE it sits in, a shadow gap all round it, and its own chisel work.
     ==================================================================== -->
<!-- the rebate: the recess in the rock the slab sits in, and its shadow -->
<path d="M136,238 L136,52 Q136,32 158,32 L342,32 Q364,32 364,52 L364,238 Z" fill="#332e27"/>
<path d="M142,238 L142,54 Q142,38 160,38 L340,38 Q358,38 358,54 L358,238 Z" fill="#241f1a"/>
<!-- the slab itself, sitting a little proud of the rebate -->
<path d="M148,236 L148,58 Q148,44 162,44 L338,44 Q352,44 352,58 L352,236 Z" fill="url(#doorFace)"/>
<!-- its lit left edge and its shadowed right edge, because it stands proud -->
<path d="M148,236 L148,58 Q148,44 162,44 L172,44 Q158,46 158,60 L158,236 Z" fill="#a09689" opacity="0.55"/>
<path d="M352,236 L352,58 Q352,44 338,44 L328,44 Q342,46 342,60 L342,236 Z" fill="#4a443c" opacity="0.6"/>
<!-- the chisel work: a sunk panel with a bevel, not four ruled lines -->
<path d="M168,224 L168,66 Q168,58 176,58 L324,58 Q332,58 332,66 L332,224 Z" fill="#6f675c"/>
<path d="M168,224 L168,66 Q168,58 176,58 L324,58 Q332,58 332,66 L172,66 L172,224 Z" fill="#4f483f" opacity="0.65"/>
<path d="M332,224 L332,70 L328,74 L328,220 L172,220 L168,224 Z" fill="#8f877c" opacity="0.5"/>
<path d="M176,214 L176,76 Q176,70 182,70 L318,70 Q324,70 324,76 L324,214 Z" fill="#7a7268" opacity="0.85"/>
<!-- the tool marks the mason left across the panel -->
<g stroke="#655e55" stroke-width="0.9" opacity="0.4" fill="none">
  <path d="M182,90 Q250,86 318,91 M182,110 Q250,106 318,111 M182,150 Q250,146 318,151
           M182,170 Q250,166 318,171 M182,196 Q250,192 318,197"/>
</g>
<g stroke="#918a80" stroke-width="0.7" opacity="0.28" fill="none">
  <path d="M182,92 Q250,88 318,93 M182,152 Q250,148 318,153 M182,198 Q250,194 318,199"/>
</g>
<!-- weathering: the slab has been here long enough to stain, and the stain
     runs DOWN from every ledge, which is what tells you which way is up -->
<path d="M196,72 Q200,110 194,152 Q188,110 196,72 Z" fill="#5c554c" opacity="0.3"/>
<path d="M288,74 Q294,120 286,166 Q280,120 288,74 Z" fill="#5c554c" opacity="0.26"/>
<path d="M244,68 Q248,100 242,128 Q238,100 244,68 Z" fill="#5c554c" opacity="0.2"/>
<!-- the shadow gap under the slab, and the grit that has drifted into it -->
<path d="M148,232 L352,232 L352,238 L148,238 Z" fill="#1c1814" opacity="0.8"/>

<!-- ====================================================================
     THE TWO HANDLES. They were rounded rects: a wall plaque and a fridge
     handle. A handle is a bar on two mounts, standing off the stone, and
     it throws a shadow onto the slab behind it.
     ==================================================================== -->
<!-- PUSH, a horizontal plate -->
<path d="M191,124 L223,124 L225,134 L189,134 Z" fill="#4f483f" opacity="0.5"/>
<path d="M188,118 L220,118 Q224,118 224,124 Q224,130 220,130 L188,130 Q184,130 184,124 Q184,118 188,118 Z" fill="#96805f"/>
<path d="M188,119 L220,119 Q222,119 222,123 Q222,126 220,126 L188,126 Q186,126 186,123 Q186,119 188,119 Z" fill="#b8a080" opacity="0.7"/>
<path d="M186,130 q3,4 6,0 M216,130 q3,4 6,0" fill="none" stroke="#6f5f46" stroke-width="1.6"/>
<text x="204" y="127" text-anchor="middle" fill="#4a3f2e" font-family="'JetBrains Mono',monospace" font-size="6">PUSH</text>
<!-- PULL, a vertical one -->
<path d="M280,120 L290,120 L292,152 L282,152 Z" fill="#4f483f" opacity="0.5"/>
<path d="M276,116 Q282,116 282,120 L282,150 Q282,154 276,154 Q272,154 272,150 L272,120 Q272,116 276,116 Z" fill="#96805f"/>
<path d="M276,118 Q280,118 280,121 L280,149 Q280,152 276,152 Q274,152 274,149 L274,121 Q274,118 276,118 Z" fill="#b8a080" opacity="0.7"/>
<path d="M282,119 q4,3 0,6 M282,145 q4,3 0,6" fill="none" stroke="#6f5f46" stroke-width="1.6"/>
<text x="277" y="137" text-anchor="middle" fill="#4a3f2e" font-family="'JetBrains Mono',monospace" font-size="5.5" transform="rotate(-90,277,137)">PULL</text>

<!-- ====================================================================
     THE CHALK. Text is frozen: not one character of it changes. It now
     sits in a rubbed patch, because chalk on rough stone leaves a smear
     around the letters as much as the letters themselves. It sits BELOW the
     handles (decision 2026-10), shifted down as one block; no arrow.
     ==================================================================== -->
<g transform="translate(0,90)">
<path d="M182,74 Q250,66 318,74 Q322,90 318,104 Q250,112 182,104 Q178,90 182,74 Z" fill="#cfcabd" opacity="0.12"/>
<ellipse cx="250" cy="90" rx="72" ry="20" fill="url(#chalkGlow)" opacity="0.4">
  <animate attributeName="opacity" values="0.28;0.52;0.28" dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<g filter="url(#chalkFilter)">
  <text x="250" y="94" text-anchor="middle" fill="#e8e4d8" font-family="Georgia,serif" font-size="14" letter-spacing="2" opacity="0.85">
    TIFL OT NEPO
    <animate attributeName="opacity" values="0.72;0.95;0.72" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </text>
</g>
</g>
<!-- chalk dust fallen at the foot of the slab -->
<path d="M226,230 q14,-3 28,0 q-14,4 -28,0 Z" fill="#cfcabd" opacity="0.16"/>

<!-- ====================================================================
     VINES that have found their way in through the mouth behind. A leaf is
     a filled shape with a point, not an ellipse laid on a stroke.
     ==================================================================== -->
<!-- ANYTHING THAT HANGS, HANGS PLUMB. These have come in over the lip of the
     passage and are hanging under their own weight, so each runs close to
     vertical and only bows where a leaf load pulls it. Leaves are FILLED
     shapes with a point and a midrib; thin strokes vanish at this size. -->
<path d="M114,2 Q110,40 116,78 Q111,118 118,158 Q113,200 120,254" fill="none" stroke="#245a22" stroke-width="3.4" opacity="0.7" stroke-linecap="round"/>
<path d="M114,2 Q111,40 116,78 Q112,118 118,158" fill="none" stroke="#3a8a30" stroke-width="1.2" opacity="0.3" stroke-linecap="round"/>
<path d="M129,14 Q126,52 132,90 Q128,128 133,168 Q130,206 135,244" fill="none" stroke="#2a6a28" stroke-width="2.2" opacity="0.5" stroke-linecap="round"/>
<path d="M383,4 Q387,44 381,82 Q386,122 379,162 Q384,204 378,256" fill="none" stroke="#245a22" stroke-width="3.2" opacity="0.65" stroke-linecap="round"/>
<path d="M383,4 Q386,44 381,82 Q385,122 379,162" fill="none" stroke="#3a8a30" stroke-width="1.1" opacity="0.28" stroke-linecap="round"/>
<path d="M368,20 Q371,58 366,96 Q370,134 365,172 Q368,210 364,246" fill="none" stroke="#2a6a28" stroke-width="2" opacity="0.45" stroke-linecap="round"/>
<!-- the leaves, each hanging off its own stalk and drooping -->
<g fill="#3a8a30">
  <path d="M114,40 q-4,3 -8,10 q-1,8 5,9 q6,-3 6,-11 q0,-5 -3,-8 Z" opacity="0.62"/>
  <path d="M108,50 q-5,4 -6,10" fill="none" stroke="#245a22" stroke-width="0.8" opacity="0.5"/>
  <path d="M117,86 q5,3 9,11 q1,8 -5,9 q-7,-3 -7,-12 q0,-5 3,-8 Z" opacity="0.56"/>
  <path d="M116,132 q-4,3 -8,10 q-1,8 5,9 q6,-3 6,-11 q0,-5 -3,-8 Z" opacity="0.52"/>
  <path d="M119,180 q5,3 9,11 q1,8 -5,9 q-7,-3 -7,-12 q0,-5 3,-8 Z" opacity="0.46"/>
  <path d="M132,66 q5,3 8,10 q1,7 -5,8 q-6,-3 -6,-11 q0,-4 3,-7 Z" opacity="0.44"/>
  <path d="M132,146 q-4,3 -7,9 q-1,7 4,8 q6,-3 6,-10 q0,-4 -3,-7 Z" opacity="0.4"/>
  <path d="M382,46 q4,3 8,10 q1,8 -5,9 q-6,-3 -6,-11 q0,-5 3,-8 Z" opacity="0.6"/>
  <path d="M389,56 q5,4 6,10" fill="none" stroke="#245a22" stroke-width="0.8" opacity="0.5"/>
  <path d="M380,94 q-5,3 -9,11 q-1,8 5,9 q7,-3 7,-12 q0,-5 -3,-8 Z" opacity="0.54"/>
  <path d="M381,140 q4,3 8,10 q1,8 -5,9 q-6,-3 -6,-11 q0,-5 3,-8 Z" opacity="0.5"/>
  <path d="M379,190 q-5,3 -9,11 q-1,8 5,9 q7,-3 7,-12 q0,-5 -3,-8 Z" opacity="0.44"/>
  <path d="M366,74 q-5,3 -8,10 q-1,7 5,8 q6,-3 6,-11 q0,-4 -3,-7 Z" opacity="0.42"/>
  <path d="M365,154 q4,3 7,9 q1,7 -4,8 q-6,-3 -6,-10 q0,-4 3,-7 Z" opacity="0.38"/>
</g>

<!-- ====================================================================
     THE FLOOR. Rubble is flat planes meeting at angles, not ellipses, and
     it sits IN the sand that has blown in rather than on top of it.
     ==================================================================== -->
<path d="M0,238 Q120,230 250,234 Q380,238 500,232 L500,260 L0,260 Z" fill="#3f3931"/>
<path d="M0,248 Q120,242 250,246 Q380,250 500,244 L500,260 L0,260 Z" fill="#332e27"/>
<!-- sand blown in from the beach, drifted against the foot of the slab -->
<path d="M110,244 Q250,234 390,242 Q250,254 110,244 Z" fill="` + BC_BEACH.sandShadow + `" opacity="0.22"/>
<path d="M156,240 Q250,232 344,238 Q250,246 156,240 Z" fill="` + BC_BEACH.sand + `" opacity="0.14"/>
<!-- rubble: angular blocks, each with a lit top plane and a dark side -->
<path d="M96,246 L108,238 L124,241 L128,250 L112,254 L94,251 Z" fill="#6f675c"/>
<path d="M96,246 L108,238 L124,241 L112,245 Z" fill="#8f877c" opacity="0.55"/>
<path d="M112,245 L124,241 L128,250 L112,254 Z" fill="#4f483f" opacity="0.5"/>
<path d="M366,250 L378,240 L396,244 L400,254 L382,258 L364,254 Z" fill="#5c554c"/>
<path d="M366,250 L378,240 L396,244 L382,248 Z" fill="#7e7568" opacity="0.5"/>
<path d="M382,248 L396,244 L400,254 L382,258 Z" fill="#453f37" opacity="0.5"/>
<path d="M234,252 L244,246 L256,249 L258,256 L244,259 L232,256 Z" fill="#6f675c" opacity="0.75"/>
<path d="M234,252 L244,246 L256,249 L244,252 Z" fill="#8f877c" opacity="0.4"/>
<path d="M296,244 L304,239 L314,242 L315,248 L303,250 L294,247 Z" fill="#5c554c" opacity="0.65"/>
<path d="M160,254 L169,249 L179,252 L180,258 L168,260 L158,257 Z" fill="#5c554c" opacity="0.6"/>
</svg>`;

// Scene 6: Door slides up — dark mysterious passage, faint phosphorescent glow.
// Deliberately vague: the cove interior and its name are revealed in the cove story.
STORY_SCENES['beach_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
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
  <linearGradient id="beach6Slab" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0%" stop-color="#8f877c"/><stop offset="55%" stop-color="#7a7268"/><stop offset="100%" stop-color="#615a52"/>
  </linearGradient>
  <linearGradient id="beach6Deep" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1820"/><stop offset="100%" stop-color="#050d12"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#coveBg)"/>
<rect width="500" height="260" fill="url(#coveLight)"/>

<!-- ====================================================================
     THE SLAB HAS LIFTED, and what is beyond it is deliberately vague: the
     cove and its name belong to the cove story, so nothing in here is
     legible. That constraint is kept. What changed is that the dark was a
     grey rounded polygon with four rects in it, and darkness that has no
     shape is not mysterious, it is just empty.

     The rock is the same rock as beach_5, one step further in: flat planes
     meeting at angles, with the daylight behind the player now gone.
     ==================================================================== -->

<!-- the deep dark the passage opens into, drawn first so everything else
     stands in front of it -->
<path d="M0,0 L500,0 L500,260 L0,260 Z" fill="url(#beach6Deep)"/>
<!-- the passage narrowing away into the dark. Without it the centre of the
     frame is a flat void and the eye has nothing to travel along. -->
<path d="M116,260 Q126,180 154,120 Q186,64 250,44 Q314,64 346,120 Q374,180 384,260 Z" fill="#0e1a22"/>
<path d="M146,260 Q154,190 176,138 Q202,90 250,74 Q298,90 324,138 Q346,190 354,260 Z" fill="#0c161e"/>
<path d="M180,260 Q186,200 200,158 Q218,120 250,108 Q282,120 300,158 Q314,200 320,260 Z" fill="#0a1219"/>
<path d="M212,260 Q216,214 224,180 Q234,152 250,144 Q266,152 276,180 Q284,214 288,260 Z" fill="#080f15"/>

<!-- ====================================================================
     THE WALLS, closing in and running away from the viewer. Each is three
     planes: the face turned toward the phosphor light, the one turned away
     from it, and the shadowed break between them.
     ==================================================================== -->
<path d="M0,0 L110,0 L124,30 L106,62 L128,102 L108,146 L130,194 L104,240 L118,260 L0,260 Z" fill="#252d34"/>
<path d="M0,0 L70,0 L82,32 L62,64 L84,104 L64,148 L86,196 L60,242 L74,260 L0,260 Z" fill="#2e3740"/>
<path d="M0,0 L34,0 L44,34 L28,66 L48,108 L30,152 L52,200 L28,246 L40,260 L0,260 Z" fill="#38424c" opacity="0.75"/>
<path d="M500,0 L392,0 L378,28 L396,60 L374,100 L394,144 L372,192 L398,238 L384,260 L500,260 Z" fill="#20272e"/>
<path d="M500,0 L434,0 L422,30 L442,62 L420,102 L440,146 L418,194 L444,240 L430,260 L500,260 Z" fill="#282f37"/>
<path d="M500,0 L466,0 L456,32 L474,64 L452,106 L472,150 L448,198 L474,244 L462,260 L500,260 Z" fill="#333c45" opacity="0.7"/>
<!-- strata running with the fall of the rock -->
<path d="M0,84 L32,74 L66,82 L124,106 L120,118 L62,94 L30,86 L0,96 Z" fill="#1a2028" opacity="0.55"/>
<path d="M0,160 L28,150 L62,160 L120,186 L116,198 L58,172 L26,162 L0,172 Z" fill="#1a2028" opacity="0.45"/>
<path d="M500,80 L472,70 L438,80 L378,104 L382,116 L442,92 L474,82 L500,92 Z" fill="#161c23" opacity="0.55"/>
<path d="M500,156 L474,146 L440,156 L380,182 L384,194 L444,168 L476,158 L500,168 Z" fill="#161c23" opacity="0.45"/>
<!-- fractures following the fall of the rock -->
<path d="M62,14 Q52,70 68,126 Q82,184 64,250" fill="none" stroke="#151b21" stroke-width="1.8" opacity="0.5"/>
<path d="M438,10 Q450,68 432,124 Q418,182 436,252" fill="none" stroke="#131920" stroke-width="1.6" opacity="0.45"/>

<!-- ====================================================================
     THE ROOF, and the SLAB RAISED INTO IT. The slab was a flat rect with
     two ruled lines across it. It is the same slab the player was just
     looking at, so it carries the same panel and the same tool marks,
     seen edge-on from below with its bottom edge lit and its face dark.
     ==================================================================== -->
<path d="M0,0 L500,0 L500,30 Q380,12 250,17 Q120,12 0,32 Z" fill="#141b22"/>
<!-- the pocket the slab has gone up into, and the shadow it drops -->
<path d="M148,0 L352,0 L352,34 L148,34 Z" fill="#0a0f14"/>
<path d="M148,30 L352,30 L352,42 Q250,50 148,42 Z" fill="#070b0f" opacity="0.85"/>
<!-- the slab: its lower edge is what the light from below reaches -->
<path d="M154,0 L346,0 L346,26 L154,26 Z" fill="url(#beach6Slab)" opacity="0.5"/>
<path d="M170,4 L330,4 L330,20 L170,20 Z" fill="#5c554c" opacity="0.5"/>
<g stroke="#6f675c" stroke-width="0.9" opacity="0.3" fill="none">
  <path d="M176,9 Q250,6 324,10 M176,16 Q250,13 324,17"/>
</g>
<!-- the lit underside of the slab, the one edge a light from below can find -->
<path d="M154,24 L346,24 L346,29 L154,29 Z" fill="#a09689" opacity="0.4"/>
<path d="M154,26 L346,26 L346,27.6 L154,27.6 Z" fill="#4af5e0" opacity="0.14"/>
<!-- the runners the slab rides in, cut down the jambs -->
<path d="M144,0 L152,0 L152,58 L144,58 Z" fill="#0d1319" opacity="0.9"/>
<path d="M348,0 L356,0 L356,58 L348,58 Z" fill="#0d1319" opacity="0.9"/>
<path d="M150,0 L152,0 L152,58 L150,58 Z" fill="#4a5058" opacity="0.35"/>

<!-- ====================================================================
     PHOSPHORESCENCE. It was four soft circles on the walls, which read as
     lens flare rather than as something growing. It grows in COLONIES,
     spreading along the wet seams in the rock, brightest at the centre and
     ragged at the edge. Each colony breathes on its own timing, so they
     drift apart rather than pulsing in unison.
     ==================================================================== -->
<g>
  <circle cx="94" cy="92" r="30" fill="url(#phosphor1)" opacity="0.5">
    <animate attributeName="opacity" values="0.24;0.5;0.24" dur="6.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <path d="M82,88 q10,-8 20,-2 q6,8 -2,14 q-12,4 -19,-3 q-3,-6 1,-9 Z" fill="#4af5e0" opacity="0.24"/>
  <path d="M87,90 q7,-5 13,-1 q4,5 -2,9 q-8,2 -12,-2 q-2,-4 1,-6 Z" fill="#7af8e8" opacity="0.3"/>
  <path d="M104,84 q4,-3 7,0 q-2,4 -7,0 Z M78,98 q4,-3 7,0 q-3,4 -7,0 Z" fill="#4af5e0" opacity="0.2"/>
</g>
<g>
  <circle cx="70" cy="152" r="24" fill="url(#phosphor2)" opacity="0.44">
    <animate attributeName="opacity" values="0.2;0.44;0.2" dur="7.8s" begin="1.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <path d="M60,150 q9,-6 17,-1 q4,7 -3,11 q-10,3 -15,-3 q-2,-5 1,-7 Z" fill="#7ac5e8" opacity="0.2"/>
  <path d="M65,151 q6,-4 11,-1 q2,4 -2,7 q-7,2 -10,-2 q-1,-3 1,-4 Z" fill="#a8ddf4" opacity="0.22"/>
</g>
<g>
  <circle cx="414" cy="86" r="28" fill="url(#phosphor1)" opacity="0.5">
    <animate attributeName="opacity" values="0.24;0.48;0.24" dur="5.4s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <path d="M404,82 q11,-7 20,-1 q5,8 -3,13 q-12,4 -18,-3 q-2,-6 1,-9 Z" fill="#4af5e0" opacity="0.22"/>
  <path d="M409,84 q7,-4 13,-1 q3,5 -3,8 q-8,2 -11,-2 q-1,-4 1,-5 Z" fill="#7af8e8" opacity="0.28"/>
  <path d="M426,92 q4,-3 7,0 q-3,4 -7,0 Z M400,76 q4,-3 7,0 q-3,4 -7,0 Z" fill="#4af5e0" opacity="0.18"/>
</g>
<g>
  <circle cx="434" cy="146" r="23" fill="url(#phosphor2)" opacity="0.42">
    <animate attributeName="opacity" values="0.18;0.42;0.18" dur="8.6s" begin="2.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <path d="M425,144 q9,-6 16,-1 q4,6 -3,10 q-9,3 -14,-3 q-2,-4 1,-6 Z" fill="#7ac5e8" opacity="0.2"/>
  <path d="M430,145 q5,-3 10,-1 q2,4 -2,6 q-6,2 -9,-2 q-1,-2 1,-3 Z" fill="#a8ddf4" opacity="0.2"/>
</g>
<!-- a straggling run of it down a wet seam, which is what says colony -->
<path d="M104,110 q-3,14 4,26 q6,12 2,24" fill="none" stroke="#4af5e0" stroke-width="1.4" opacity="0.14"/>
<path d="M410,104 q4,15 -3,27 q-6,12 -1,24" fill="none" stroke="#4af5e0" stroke-width="1.3" opacity="0.12"/>

<!-- ====================================================================
     THE FLOOR: wet rock with sand blown over it and standing water in the
     low places. Water is the only thing in here that reflects, so it is
     what carries the phosphor light down to the bottom of the frame.
     ==================================================================== -->
<path d="M0,220 Q120,210 250,216 Q380,222 500,212 L500,260 L0,260 Z" fill="#101820"/>
<path d="M0,234 Q120,226 250,232 Q380,238 500,228 L500,260 L0,260 Z" fill="#0b1219"/>
<!-- sand carried in from the beach outside, thinning as it goes deeper -->
<path d="M114,232 Q250,219 386,230 Q250,247 114,232 Z" fill="#e8d5a3" opacity="0.18"/>
<path d="M164,238 Q250,228 336,236 Q250,248 164,238 Q164,238 164,238 Z" fill="#e8d5a3" opacity="0.09"/>
<!-- STANDING WATER: an irregular sheet, not an ellipse, with the phosphor
     colonies reflected in it as broken bands -->
<path d="M126,241 Q160,235 196,234 Q224,238 250,234 Q282,238 312,233 Q348,234 378,241 Q352,249 318,252 Q284,254 250,255 Q214,254 182,252 Q150,249 126,241 Z" fill="#143241" opacity="0.72"/>
<path d="M148,241 Q194,235 250,236 Q306,235 356,242 Q308,248 250,249 Q194,248 148,241 Z" fill="#1c4757" opacity="0.45"/>
<path d="M158,240 Q196,236 230,238 Q194,243 158,240 Z" fill="#4af5e0" opacity="0.15">
  <animate attributeName="opacity" values="0.06;0.18;0.06" dur="6.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M274,240 Q310,236 346,239 Q308,244 274,240 Z" fill="#4af5e0" opacity="0.13">
  <animate attributeName="opacity" values="0.05;0.16;0.05" dur="5.4s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M200,246 Q244,242 288,245 Q244,250 200,246 Z" fill="#7ac5e8" opacity="0.13"/>

<!-- ====================================================================
     SHAPES DEEPER IN, in silhouette only. Nothing here is legible, and
     that is deliberate: what the cove holds is the cove story's to tell.
     But two rects with rounded corners is a diagram of a crate. These are
     forms with an angle to them, half swallowed by the dark.
     ==================================================================== -->
<path d="M172,222 L206,218 L212,224 L210,240 L176,242 L170,236 Z" fill="#131c24" opacity="0.95"/>
<path d="M172,222 L206,218 L212,224 L178,228 Z" fill="#1e2a34" opacity="0.95"/>
<path d="M178,228 L212,224 L210,240 L176,242 Z" fill="#080d12" opacity="0.85"/>
<path d="M168,216 L204,211 L214,217 L212,222 L176,226 L166,220 Z" fill="#161f27" opacity="0.85"/>
<path d="M292,224 L322,219 L328,226 L326,240 L296,242 L290,236 Z" fill="#131c24" opacity="0.95"/>
<path d="M292,224 L322,219 L328,226 L298,230 Z" fill="#1e2a34" opacity="0.95"/>
<path d="M298,230 L328,226 L326,240 L296,242 Z" fill="#080d12" opacity="0.85"/>
<path d="M288,214 L318,208 L332,216 L330,222 L300,227 L286,220 Z" fill="#161f27" opacity="0.8"/>
<!-- something taller behind them, and the near edge of a boulder -->
<path d="M240,206 L258,202 L266,212 L264,236 L242,238 L236,228 Z" fill="#111a22" opacity="0.95"/>
<path d="M240,206 L258,202 L266,212 L246,215 Z" fill="#1b262f" opacity="0.9"/>
<path d="M92,224 L118,216 L138,224 L136,242 L100,246 L86,236 Z" fill="#0c1218" opacity="0.8"/>
<path d="M92,224 L118,216 L138,224 L106,230 Z" fill="#141c24" opacity="0.7"/>
<path d="M366,220 L392,212 L412,222 L410,240 L374,244 L360,232 Z" fill="#0c1218" opacity="0.8"/>
<path d="M366,220 L392,212 L412,222 L380,228 Z" fill="#141c24" opacity="0.65"/>
<!-- and the veil that swallows the far end of it: distance eats contrast, and
     underwater or in the dark the ambient is DARK, so distance means darker -->
<path d="M150,178 Q250,164 350,178 L360,232 Q250,244 140,232 Z" fill="#050d12" opacity="0.24"/>
</svg>`;

// Steps 6+7 merged into a single complete step (index 6): the dark opening above
// is the final scene — the cove itself is revealed in the cove story.
