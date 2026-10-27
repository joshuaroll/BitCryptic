// Town Square story scenes — "Town Square"
// Keys: town_0 through town_5
// DRAFT — for review only

// ====================================================================
// THE SQUARE'S FOUNTAIN, one object drawn one way. It had been drawn four
// different ways across the five scenes (a pillar with jets, a ghost, a goblet
// and town_3's column-and-bowl). This is town_3's design at mid-shot: a basin
// with a coping you can see the thickness of, a tapering shaft on a plinth,
// and an upper bowl showing its underside. town_3 stays the close-up of it.
//
// (x, y) is the CONTACT POINT: the centre of the basin's footprint on the
// paving. At scale 1 the basin is 114 wide and the bowl rim stands 59 above y.
// {gold:true} fills the pool and bowl with the surge and leaves the jet to the
// scene; otherwise it runs with water and draws its own jet.
// ====================================================================
function townFountain(id, x, y, scale, opts) {
  opts = opts || {};
  var gold = !!opts.gold;
  var pool = gold ? '#aa8820' : '#4f6f8f';
  var surf = gold ? '#ffd700' : '#6688aa';
  var e = 'calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"';
  var s = '<g data-prop="town-fountain" data-id="' + id + '" transform="translate(' + x + ' ' + y + ') scale(' + scale + ') translate(-250 -190)">'
  // contact shadow
  + '<path d="M190,190 Q250,180 310,190 Q250,204 190,190 Z" fill="#5c4d3b" opacity="0.3"/>'
  // far wall and the pool it holds
  + '<path d="M195,183 Q250,173 305,183 Q250,191 195,183 Z" fill="#8a8a9a"/>'
  + '<path d="M199,183 Q250,175 301,183 Q250,196 199,183 Z" fill="' + pool + '" opacity="' + (gold ? 0.55 : 0.85) + '"/>'
  + '<path d="M203,183 Q250,176 297,183 Q250,190 203,183 Z" fill="' + surf + '" opacity="' + (gold ? 0.34 : 0.6) + '">'
  + '<animate attributeName="opacity" values="' + (gold ? '0.2;0.48;0.2' : '0.45;0.7;0.45') + '" dur="3.4s" repeatCount="indefinite" ' + e + '/></path>'
  // near coping, over the pool, laid in blocks
  + '<path d="M193,185 Q250,199 307,185 L306,193 Q250,209 194,193 Z" fill="#7c7c8c"/>'
  + '<path d="M193,185 Q250,199 307,185 Q250,195 193,185 Z" fill="#9a9aaa"/>'
  + '<path d="M197,185.4 Q250,196 303,185.4 Q250,192 197,185.4 Z" fill="#aaaabc" opacity="0.5"/>'
  + '<g stroke="#5a5a6a" stroke-width="0.9" opacity="0.45" fill="none"><path d="M210,189 L209,199 M232,193 L231,204 M268,193 L269,204 M290,189 L291,199"/></g>'
  + '<path d="M193,190 Q250,204 307,190 L306,193 Q250,209 194,193 Z" fill="#4a4a5a" opacity="0.3"/>'
  // the shaft, tapering, on its plinth, with a torus at the foot and a cavetto under the bowl
  + '<path d="M238,175 Q250,171 262,175 Q250,180 238,175 Z" fill="#7c7c8c"/>'
  + '<path d="M239,175 L261,175 L260,181 Q250,184 240,181 Z" fill="#6a6a7a"/>'
  + '<path d="M242,177 L258,177 L256,142 L244,142 Z" fill="#9a9aaa"/>'
  + '<path d="M245,177 L252,177 L251,142 L246,142 Z" fill="#aaaabc" opacity="0.5"/>'
  + '<path d="M256,177 L258,177 L256,142 L254,142 Z" fill="#6a6a7a" opacity="0.55"/>'
  + '<path d="M247,175 L248,145 M253,175 L252.5,145" stroke="#6f6f80" stroke-width="0.6" opacity="0.4" fill="none"/>'
  + '<path d="M240,173 Q250,169 260,173 Q250,178 240,173 Z" fill="#9a9aaa"/>'
  + '<path d="M241,148 Q250,145 259,148 Q250,152 241,148 Z" fill="#9a9aaa"/>'
  // the upper bowl, with its underside showing
  + '<path d="M228,140 Q250,131 272,140 Q268,150 250,153 Q232,150 228,140 Z" fill="#7c7c8c"/>'
  + '<path d="M228,140 Q250,131 272,140 Q250,147 228,140 Z" fill="#9a9aaa"/>'
  + '<path d="M233,139.6 Q250,134 267,139.6 Q250,144 233,139.6 Z" fill="' + pool + '" opacity="0.55"/>'
  + '<path d="M236,139 Q250,135 264,139 Q250,142 236,139 Z" fill="' + surf + '" opacity="' + (gold ? 0.4 : 0.6) + '">'
  + '<animate attributeName="opacity" values="' + (gold ? '0.24;0.56;0.24' : '0.45;0.72;0.45') + '" dur="3.4s" repeatCount="indefinite" ' + e + '/></path>';
  if (!gold) {
    s += ''
    // water spilling over the bowl's lip in two sheets, and where they land
    + '<path d="M231,143 Q227,162 230,182 Q234,162 235,143 Z" fill="#aaddff" opacity="0.3">'
    + '<animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.4s" repeatCount="indefinite" ' + e + '/></path>'
    + '<path d="M269,143 Q273,162 270,182 Q266,162 265,143 Z" fill="#aaddff" opacity="0.28">'
    + '<animate attributeName="opacity" values="0.14;0.38;0.14" dur="4.1s" begin="0.7s" repeatCount="indefinite" ' + e + '/></path>'
    + '<path d="M222,184 q8,-2.5 16,0 q-8,3 -16,0 Z" fill="#dff0fa" opacity="0.22"/>'
    + '<path d="M262,184 q8,-2.5 16,0 q-8,3 -16,0 Z" fill="#dff0fa" opacity="0.2"/>'
    // the jet: a column that rises, slows, and falls back in two arcs
    + '<path d="M250,137 Q249.5,118 249,104" fill="none" stroke="#aaddff" stroke-width="2" opacity="0.45" stroke-linecap="round">'
    + '<animate attributeName="opacity" values="0.28;0.62;0.28" dur="2.9s" repeatCount="indefinite" ' + e + '/></path>'
    + '<path d="M249,104 Q243,114 236,136" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>'
    + '<path d="M249,104 Q256,114 264,136" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.3" stroke-linecap="round">'
    + '<animate attributeName="opacity" values="0.18;0.4;0.18" dur="3.6s" begin="0.4s" repeatCount="indefinite" ' + e + '/></path>'
    + '<path d="M249,100 q1.6,-1 2.4,0.8 q-0.8,2.4 -2.4,2.4 q-1.6,-1.6 0,-3.2 Z" fill="#aaddff" opacity="0">'
    + '<animate attributeName="opacity" values="0;0.7;0" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>'
    + '<animateTransform attributeName="transform" type="translate" values="0,0;-2,-8;-4,-13" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/></path>';
  }
  return s + '</g>';
}

// ====================================================================
// THE SQUARE'S STREET LAMP, one design in every town shot: the kit's lit
// lantern (bcArt) seated on a drawn iron post. (x, y) is the foot of the post
// on the paving. The post is 34 tall and the lantern (scale 1.2) adds 36.
// ====================================================================
function townLamp(idp, x, y, depth) {
  depth = depth || 'mid';
  var top = y - 34, r = function (v) { return Math.round(v * 10) / 10; };
  var post = ''
    + '<ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="1.6" fill="#0a0806" opacity="0.3"/>'
    + '<path d="M' + r(x - 5) + ',' + y + ' L' + r(x + 5) + ',' + y + ' L' + r(x + 4) + ',' + (y - 4) + ' L' + r(x - 4) + ',' + (y - 4) + ' Z" fill="#3e4454"/>'
    + '<path d="M' + r(x - 1.8) + ',' + (y - 4) + ' L' + r(x + 1.8) + ',' + (y - 4) + ' L' + r(x + 1.4) + ',' + (top + 3) + ' L' + r(x - 1.4) + ',' + (top + 3) + ' Z" fill="#4a5266"/>'
    + '<path d="M' + r(x - 1.8) + ',' + (y - 4) + ' L' + r(x - 0.6) + ',' + (y - 4) + ' L' + r(x - 0.5) + ',' + (top + 3) + ' L' + r(x - 1.4) + ',' + (top + 3) + ' Z" fill="#6a7488" opacity="0.5"/>'
    + '<path d="M' + r(x - 5) + ',' + (top + 3) + ' L' + r(x + 5) + ',' + (top + 3) + ' L' + r(x + 3.5) + ',' + top + ' L' + r(x - 3.5) + ',' + top + ' Z" fill="#3e4454"/>';
  return '<g data-prop="town-lamp">' + bcArt.layer(depth, post, 'town')
    + bcArt.prop('lantern', { x: x, y: top, lit: true, biome: 'town', idp: idp, scale: 1.2, depth: depth, shadow: false })
    + '</g>';
}

// ====================================================================
// THE SQUARE'S CODE TERMINAL, one object in one place: it stands on the
// paving just right of the fountain, exactly where town_1 put it, in every
// shot that shows the fountain. Pass the townFountain's own (x, y, scale) and
// the terminal is placed from them, so it cannot drift from the fountain.
// town_1's numbers, fountain (250,194) x1.25 -> terminal (337,197) x1.45, give
// the offsets below in fountain units.
// ====================================================================
function townTerminal(fx, fy, fs) {
  var r = function (v) { return Math.round(v * 100) / 100; };
  var x = r(fx + 69.6 * fs), y = r(fy + 2.4 * fs), k = r(1.16 * fs);
  var e = 'calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"';
  return '<g data-prop="town-terminal" transform="translate(' + x + ' ' + y + ') scale(' + k + ') translate(-335 -197)">'
    + '<ellipse cx="335" cy="197" rx="11" ry="2.6" fill="#453e36" opacity="0.3"/>'
    + '<path d="M332,182 h6 v15 h-6 Z" fill="#3a4048"/>'
    + '<path d="M329,195 h12 v2.4 h-12 Z" fill="#3a4048"/>'
    + '<path d="M325,164 h20 v19 h-20 Z" fill="#2b3138"/>'
    + '<path d="M325,164 h20 v2 h-20 Z" fill="#454d58"/>'
    + '<path d="M327.5,167 h15 v12 h-15 Z" fill="#1f4a2c"/>'
    + '<path d="M327.5,167 h15 v12 h-15 Z" fill="#3fbf6a" opacity="0.22">'
    + '<animate attributeName="opacity" values="0.16;0.3;0.16" dur="3.9s" repeatCount="indefinite" ' + e + '/></path>'
    + '<path d="M329.5,169.5 h9 v1 h-9 Z M329.5,172 h6 v1 h-6 Z" fill="#7dffa0" opacity="0.7"/>'
    + '<rect x="336.5" y="174.2" width="2" height="2.6" fill="#7dffa0">'
    + '<animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" calcMode="discrete" dur="1.1s" repeatCount="indefinite"/></rect>'
    + '<path d="M327,181 h16 v1 h-16 Z" fill="#454d58"/>'
    + '</g>';
}

// ====================================================================
// THE FOUNTAIN'S SERVICE GRATE, shut. The story's "grate you have walked
// over without once looking down": a steel plate with a bar grille, flush in
// the cobbles at the basin's front left, the same plate hidden_0 opens and
// hidden_10 shows closed. Ported verbatim from hidden_10's own drawing (town.js
// must not call into hidden.js), in hidden_10's coordinates, where the fountain
// is the townFountain at (250,194) x1.25; so passing any shot's fountain
// (x, y, scale) puts the grate in the same place relative to it, scaled with
// it. Daylight: the same drawing at reduced strength, so it sinks into the
// paving and goes unnoticed. No glow.
// ====================================================================
function townGrate(fx, fy, fs) {
  var r = function (v) { return Math.round(v * 1000) / 1000; };
  return '<g data-prop="town-grate" opacity="0.5" transform="translate(' + r(fx) + ' ' + r(fy) + ') scale(' + r(fs / 1.25) + ') translate(-250 -194)">'
    + '<path d="M70 213H172L181 246H61Z" fill="#34414c"/>'
    + '<path d="M75 217H167L174 241H68Z" fill="#283643"/>'
    + '<path d="M87 218L83 240 M102 218L100 240 M119 218V240 M135 218L137 240 M151 218L155 240" stroke="#182630" stroke-width="2"/>'
    + '<path d="M71 214H171 M64 244H178" stroke="#566571" stroke-width="1.4"/>'
    + '<path d="M113 224H128V227H113Z" fill="#182630"/>'
    + '</g>';
}

// ====================================================================
// THE SQUARE'S SKYLINE, read straight out of town_0 (far row + the scaled
// building plane), so any other shot of the square uses the identical
// buildings at the identical scale. Call only after town_0 is defined.
// ====================================================================
function townSkyline() {
  var s = STORY_SCENES['town_0'];
  var a = s.indexOf('<!-- far row: pale');
  var b = s.lastIndexOf('<!--', s.indexOf('COBBLES'));
  return (a < 0 || b < 0) ? '' : s.slice(a, b);
}

// Scene 0: Town Square opens up, grand fountain, notice boards with coded messages
STORY_SCENES['town_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="fountainMist" cx="50%" cy="60%" r="30%">
    <stop offset="0%" stop-color="#aaccee" stop-opacity="0.15"/><stop offset="100%" stop-color="#aaccee" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="townSoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky)"/>
<!-- ====================================================================
     THE SQUARE. The buildings were flat rects with square window holes, three
     of them, in two greys. A cartoon town reads as a town because of its
     ROOFLINE: pitched, stepped and hipped roofs at varied heights. A flat top
     reads as a block however many windows you put in it.

     Drawn in place rather than generated, so this square is this square.
     ==================================================================== -->

<!-- far row: pale, low, no detail worth reading at that distance -->
<path d="M0,182 L0,96 L26,80 L52,96 L52,182 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M48,182 L48,110 L74,92 L100,110 L100,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M96,182 L96,84 L118,70 L140,84 L140,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M300,182 L300,92 L326,74 L352,92 L352,182 Z" fill="#8a9db3" opacity="0.38"/>
<path d="M348,182 L348,106 L372,88 L396,106 L396,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M392,182 L392,88 L418,72 L444,88 L444,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M440,182 L440,100 L470,82 L500,100 L500,182 Z" fill="#7a8da3" opacity="0.4"/>

<!-- Building plane: enlarge architecture around its pavement baseline. -->
<g transform="translate(250 182) scale(1.5) translate(-250 -182)">
<!-- mid row: the town proper, where the rooflines do the work -->
<!-- a stepped gable, the most old-town roofline there is -->
<path d="M14,182 L14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,108 L94,108 L94,118 L114,118 L114,182 Z" fill="#6f8298" opacity="0.85"/>
<path d="M14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,182 L14,182 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M36,130 h14 v16 h-14 Z M60,130 h14 v16 h-14 Z M84,130 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.42"/>
<path d="M36,158 h14 v16 h-14 Z M84,158 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.3"/>
<path d="M60,158 h14 v16 h-14 Z" fill="#5a6276" opacity="0.5"/>

<!-- a clock tower: the one vertical the square needs -->
<path d="M122,182 L122,74 L166,74 L166,182 Z" fill="#67798f"/>
<path d="M118,74 L144,50 L170,74 Z" fill="#56687e"/>
<path d="M144,50 L170,74 L160,74 Z" fill="#7d90a6" opacity="0.5"/>
<circle cx="144" cy="94" r="12" fill="#ffeaa7" opacity="0.55"/>
<circle cx="144" cy="94" r="12" fill="none" stroke="#5a6276" stroke-width="1.6"/>
<path d="M144,94 L144,87" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round"/>
<path d="M144,94 L149,97" stroke="#3a4250" stroke-width="1.2" stroke-linecap="round"/>
<path d="M128,120 h14 v18 h-14 Z M148,120 h14 v18 h-14 Z" fill="#ffeaa7" opacity="0.36"/>
<path d="M128,150 h34 v22 h-34 Z" fill="#4a5468" opacity="0.6"/>
<path d="M132,152 h26 v18 h-26 Z" fill="#ffeaa7" opacity="0.2"/>

<!-- a plain gabled house between the tower and the fountain -->
<path d="M172,182 L172,116 L204,116 L204,182 Z" fill="#6a7286"/>
<path d="M166,116 L188,96 L210,116 Z" fill="#5a6276"/>
<path d="M188,96 L210,116 L202,116 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M178,128 h9 v12 h-9 Z M191,128 h9 v12 h-9 Z" fill="#ffeaa7" opacity="0.4"/>
<path d="M180,152 h18 v30 h-18 Z" fill="#4a3a20"/>
<path d="M182,154 h14 v26 h-14 Z" fill="#5a4830" opacity="0.7"/>
<circle cx="194" cy="168" r="1.6" fill="#ffd700" opacity="0.7"/>
<path d="M196,110 h7 v8 h-7 Z" fill="#5a6276"/>

<!-- and one on the far side, hipped -->
<path d="M296,182 L296,120 L340,120 L340,182 Z" fill="#6a7286"/>
<path d="M290,120 L306,102 L330,102 L346,120 Z" fill="#5a6276"/>
<path d="M306,102 L330,102 L346,120 L336,120 Z" fill="#8a9db3" opacity="0.35"/>
<path d="M302,132 h11 v14 h-11 Z M322,132 h11 v14 h-11 Z" fill="#ffeaa7" opacity="0.38"/>
<path d="M310,156 h16 v26 h-16 Z" fill="#4a3a20"/>
<circle cx="322" cy="170" r="1.5" fill="#ffd700" opacity="0.65"/>

<!-- ====================================================================
     TWO SHOPFRONTS flanking the square. A scalloped awning is the single most
     "shop" mark there is, and it gives the square somewhere to BE rather than
     a backdrop to stand in front of.
     ==================================================================== -->
<path d="M6,182 L6,104 L92,104 L92,182 Z" fill="#63758a" opacity="0"/>
<path d="M400,182 L400,112 L470,112 L470,182 Z" fill="#647689"/>
<path d="M396,112 L435,94 L474,112 Z" fill="#54667a"/>
<path d="M398,142 q10,9 20,0 q10,9 20,0 q10,9 20,0 q10,9 18,0 L476,132 L398,132 Z" fill="#8a4a3a" opacity="0.9"/>
<path d="M398,132 L476,132" stroke="#9aadc3" stroke-width="1.2" opacity="0.4"/>
<path d="M406,152 h30 v20 h-30 Z" fill="#ffeaa7" opacity="0.34"/>
<path d="M444,152 h20 v30 h-20 Z" fill="#4a3a20"/>
<circle cx="448" cy="168" r="1.5" fill="#ffd700" opacity="0.7"/>
<path d="M478,116 h12 M484,116 v10" stroke="#4a3a20" stroke-width="1.4"/>
<path d="M476,126 h18 v12 h-18 Z" fill="#6b4a20"/>
<path d="M480,130 h10 v2 h-10 Z M480,134 h6 v2 h-6 Z" fill="#ffd700" opacity="0.55"/>

</g>

<!-- ====================================================================
     COBBLES. The ground was one brown rectangle with six faint ellipses on it.
     Stones laid in courses that widen as they come forward is what makes a
     square read as paved rather than as bare earth.
     ==================================================================== -->
<path d="M0,182 L500,182 L500,260 L0,260 Z" fill="#6a5a48"/>
<!-- ================================================================
     THE PAVING, third pass, and the fault was never the joints.

     Measured: the stones were running 2.9:1 to 3.3:1 wide-to-tall. That is a
     BRICK. A cobble is roughly square in plan and foreshortens to about 2:1 at
     a shallow viewing angle, so the square kept reading as a wall however the
     course lines were tuned. Halving the widths fixed what two passes of joint
     tuning could not.

     Setts also have their corners knocked off, and no continuous joint runs
     across a square: the stones themselves define the courses.
     ================================================================ -->
<path d="M-8.5,187.0 h13.1 q1,0 1,1 v6.4 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M7.4,187.0 h12.5 q1,0 1,1 v6.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M22.6,185.6 h19.2 q1,0 1,1 v6.4 q0,1 -1,1 h-19.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M44.7,186.3 h13.8 q1,0 1,1 v6.4 q0,1 -1,1 h-13.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M61.3,185.6 h10.5 q1,0 1,1 v6.4 q0,1 -1,1 h-10.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M74.6,186.3 h16.3 q1,0 1,1 v6.4 q0,1 -1,1 h-16.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M93.7,185.6 h10.3 q1,0 1,1 v6.4 q0,1 -1,1 h-10.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M106.9,187.0 h12.9 q1,0 1,1 v6.4 q0,1 -1,1 h-12.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M122.6,186.3 h15.2 q1,0 1,1 v6.4 q0,1 -1,1 h-15.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M140.5,186.3 h14.2 q1,0 1,1 v6.4 q0,1 -1,1 h-14.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M157.5,185.6 h11.8 q1,0 1,1 v6.4 q0,1 -1,1 h-11.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M172.0,187.0 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M191.4,187.0 h15.0 q1,0 1,1 v6.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M209.1,186.3 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M228.5,186.3 h12.4 q1,0 1,1 v6.4 q0,1 -1,1 h-12.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M243.7,185.6 h18.1 q1,0 1,1 v6.4 q0,1 -1,1 h-18.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M264.5,186.3 h14.9 q1,0 1,1 v6.4 q0,1 -1,1 h-14.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M282.2,187.0 h17.4 q1,0 1,1 v6.4 q0,1 -1,1 h-17.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M302.4,185.6 h16.9 q1,0 1,1 v6.4 q0,1 -1,1 h-16.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M322.1,187.0 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M338.5,186.3 h18.4 q1,0 1,1 v6.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M359.7,186.3 h17.1 q1,0 1,1 v6.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M379.7,186.3 h18.5 q1,0 1,1 v6.4 q0,1 -1,1 h-18.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M401.0,186.3 h11.0 q1,0 1,1 v6.4 q0,1 -1,1 h-11.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M414.8,187.0 h17.9 q1,0 1,1 v6.4 q0,1 -1,1 h-17.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M435.5,185.6 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M451.9,185.6 h16.0 q1,0 1,1 v6.4 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M470.7,187.0 h14.4 q1,0 1,1 v6.4 q0,1 -1,1 h-14.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M487.9,186.3 h16.4 q1,0 1,1 v6.4 q0,1 -1,1 h-16.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M507.1,186.3 h17.3 q1,0 1,1 v6.4 q0,1 -1,1 h-17.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-12.7,195.3 h12.5 q1,0 1,1 v8.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M2.6,194.6 h17.5 q1,0 1,1 v8.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M23.0,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M49.9,195.3 h18.0 q1,0 1,1 v8.4 q0,1 -1,1 h-18.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M70.7,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M97.8,195.3 h21.8 q1,0 1,1 v8.4 q0,1 -1,1 h-21.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M122.3,196.0 h13.9 q1,0 1,1 v8.4 q0,1 -1,1 h-13.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M139.0,195.3 h23.8 q1,0 1,1 v8.4 q0,1 -1,1 h-23.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M165.6,195.3 h19.0 q1,0 1,1 v8.4 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M187.4,194.6 h14.3 q1,0 1,1 v8.4 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M204.5,195.3 h17.1 q1,0 1,1 v8.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M224.5,195.3 h12.7 q1,0 1,1 v8.4 q0,1 -1,1 h-12.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M239.9,195.3 h15.7 q1,0 1,1 v8.4 q0,1 -1,1 h-15.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M258.4,195.3 h14.0 q1,0 1,1 v8.4 q0,1 -1,1 h-14.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M275.2,195.3 h22.0 q1,0 1,1 v8.4 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M300.0,194.6 h20.8 q1,0 1,1 v8.4 q0,1 -1,1 h-20.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M323.5,195.3 h23.6 q1,0 1,1 v8.4 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M349.9,196.0 h15.0 q1,0 1,1 v8.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M367.7,195.3 h15.5 q1,0 1,1 v8.4 q0,1 -1,1 h-15.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M386.0,195.3 h15.3 q1,0 1,1 v8.4 q0,1 -1,1 h-15.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M404.0,196.0 h20.4 q1,0 1,1 v8.4 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M427.3,195.3 h15.6 q1,0 1,1 v8.4 q0,1 -1,1 h-15.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M445.7,195.3 h21.2 q1,0 1,1 v8.4 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M469.7,194.6 h23.9 q1,0 1,1 v8.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M496.4,195.3 h16.2 q1,0 1,1 v8.4 q0,1 -1,1 h-16.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-9.4,205.6 h27.9 q1,0 1,1 v11.4 q0,1 -1,1 h-27.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M21.3,205.6 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M41.6,206.3 h25.0 q1,0 1,1 v11.4 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M69.4,205.6 h27.7 q1,0 1,1 v11.4 q0,1 -1,1 h-27.7 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M99.9,206.3 h18.9 q1,0 1,1 v11.4 q0,1 -1,1 h-18.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M121.6,205.6 h22.4 q1,0 1,1 v11.4 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M146.8,207.0 h23.4 q1,0 1,1 v11.4 q0,1 -1,1 h-23.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M173.0,206.3 h33.4 q1,0 1,1 v11.4 q0,1 -1,1 h-33.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M209.2,205.6 h20.0 q1,0 1,1 v11.4 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M231.9,205.6 h31.9 q1,0 1,1 v11.4 q0,1 -1,1 h-31.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M266.6,207.0 h30.5 q1,0 1,1 v11.4 q0,1 -1,1 h-30.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M299.9,205.6 h20.6 q1,0 1,1 v11.4 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M323.3,207.0 h19.5 q1,0 1,1 v11.4 q0,1 -1,1 h-19.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M345.6,206.3 h27.6 q1,0 1,1 v11.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M376.0,205.6 h19.6 q1,0 1,1 v11.4 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M398.4,207.0 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M418.7,205.6 h32.1 q1,0 1,1 v11.4 q0,1 -1,1 h-32.1 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M453.6,206.3 h28.2 q1,0 1,1 v11.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M484.6,206.3 h18.4 q1,0 1,1 v11.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M505.8,206.3 h20.5 q1,0 1,1 v11.4 q0,1 -1,1 h-20.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-8.2,221.0 h36.5 q1,0 1,1 v14.4 q0,1 -1,1 h-36.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M31.1,220.3 h25.2 q1,0 1,1 v14.4 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M59.1,220.3 h23.9 q1,0 1,1 v14.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M85.8,220.3 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M117.0,220.3 h21.9 q1,0 1,1 v14.4 q0,1 -1,1 h-21.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M141.6,220.3 h25.7 q1,0 1,1 v14.4 q0,1 -1,1 h-25.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M170.1,220.3 h30.8 q1,0 1,1 v14.4 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M203.7,220.3 h27.0 q1,0 1,1 v14.4 q0,1 -1,1 h-27.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M233.5,219.6 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M264.7,220.3 h28.0 q1,0 1,1 v14.4 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M295.5,221.0 h37.2 q1,0 1,1 v14.4 q0,1 -1,1 h-37.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M335.4,220.3 h42.3 q1,0 1,1 v14.4 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M380.6,220.3 h35.5 q1,0 1,1 v14.4 q0,1 -1,1 h-35.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M418.9,220.3 h42.5 q1,0 1,1 v14.4 q0,1 -1,1 h-42.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M464.2,220.3 h37.7 q1,0 1,1 v14.4 q0,1 -1,1 h-37.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M504.7,220.3 h26.0 q1,0 1,1 v14.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-17.1,237.3 h57.1 q1,0 1,1 v21.4 q0,1 -1,1 h-57.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M42.8,237.3 h53.4 q1,0 1,1 v21.4 q0,1 -1,1 h-53.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M99.0,237.3 h52.5 q1,0 1,1 v21.4 q0,1 -1,1 h-52.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M154.3,237.3 h49.5 q1,0 1,1 v21.4 q0,1 -1,1 h-49.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M206.6,236.6 h54.6 q1,0 1,1 v21.4 q0,1 -1,1 h-54.6 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M263.9,237.3 h41.7 q1,0 1,1 v21.4 q0,1 -1,1 h-41.7 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M308.4,237.3 h39.4 q1,0 1,1 v21.4 q0,1 -1,1 h-39.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M350.7,238.0 h49.1 q1,0 1,1 v21.4 q0,1 -1,1 h-49.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M402.5,238.0 h41.1 q1,0 1,1 v21.4 q0,1 -1,1 h-41.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M446.5,237.3 h54.5 q1,0 1,1 v21.4 q0,1 -1,1 h-54.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M503.7,236.6 h45.9 q1,0 1,1 v21.4 q0,1 -1,1 h-45.9 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<!-- the kerb where the paving meets the buildings -->
<path d="M0,182 L500,182 L500,184.6 L0,184.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet cross the square -->
<path d="M150,260 Q210,220 250,196 Q290,220 350,260 Z" fill="#8a765d" opacity="0.16"/>
<path d="M0,258 Q120,236 250,198 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- the service grate, shut, flush in the cobbles at the basin's foot -->
` + townGrate(250,194,1.25) + `
<!-- the fountain: the shared townFountain, town_3's design at mid-shot -->
` + townFountain('town0',250,194,1.25) + `
<!-- Street lamps, the shared townLamp -->
` + townLamp('town0lampL', 120, 181) + townLamp('town0lampR', 380, 181) + `
<!-- Notice board left -->
<rect x="50" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="40" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="42" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="52" y="141" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.7">?X=7</text>
<text x="52" y="146" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.6">A+B=?</text>
<!-- Notice board right, set out past Laurel so it reads apart from her -->
<g transform="translate(32 0)">
<rect x="446" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="436" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="438" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="448" y="141" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.7">ROT13</text>
<text x="448" y="146" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.6">#!&amp;%</text>
</g>
<!-- Fountain mist -->
<ellipse cx="250" cy="165" rx="60" ry="25" fill="url(#fountainMist)"/>
<!-- Street furniture, set clear of the fountain and entrances. -->
<g transform="translate(85 193)">
<ellipse cx="24" cy="18" rx="29" ry="4" fill="#453e36" opacity=".25"/>
<path d="M2 0H45V4H2Z M2 6H45V10H2Z" fill="#8c7152"/>
<path d="M5 -1V17 M42 -1V17" stroke="#4e565b" stroke-width="2"/>
<path d="M0 11H48L45 14H2Z" fill="#a08864"/>
<path d="M5 14V19 M42 14V19" stroke="#4e565b" stroke-width="2"/>
</g>
<g transform="translate(349 190)">
<ellipse cx="12" cy="17" rx="15" ry="3" fill="#453e36" opacity=".24"/>
<path d="M1 3H24L21 17H4Z" fill="#8a6654"/><path d="M0 2H25V6H0Z" fill="#aa8770"/>
<path d="M4 2Q-2 -9 7 -7L11 0Q7 -17 15 -12L16 0Q23 -14 25 -5L21 3Z" fill="#577360"/>
<path d="M8 0L6 -5 M15 1L15 -7 M20 2L23 -4" stroke="#839678" stroke-width="1"/>
</g>
<!-- THE TERMINAL, humming on the paving just right of the fountain: the
     shared townTerminal, placed from the fountain's own position -->
` + townTerminal(250, 194, 1.25) + `
<!-- Approved cast background appearance; story and clues are unchanged. -->
` + bcApprovedPlace('laurel','idle-folio',427,238,128,false) + `
</svg>`;

// Scene 1: Terminal hums near fountain. Three paths lead outward.
// town_0's square, plus what this step's text names: the terminal by the
// fountain, and the three places the paths lead to (a spire, a library, a
// workshop sending up steam), set into the skyline. Ids are suffixed so the
// variant never shares a gradient id with town_0.
STORY_SCENES['town_1'] = STORY_SCENES['town_0']
  .replace(/townSky|fountainMist|lanternGlow|townSoftGlow|town0lamp/g, function (id) { return id + 'T1'; })
  .replace(/approved-laurel-(\d+)-/g, 'approved-laurel-$1t1-')
  .replace('<!-- Building plane:', `<!-- THE THREE PATHS' ENDS, in the distance behind the square's own row.
     The spire, in the gap left of the fountain. -->
<path d="M206,182 L206,74 L214,22 L222,74 L222,182 Z" fill="#7a8da3" opacity="0.62"/>
<path d="M214,22 L222,74 L218,74 Z" fill="#8a9db3" opacity="0.5"/>
<path d="M203,74 L225,74 L225,79 L203,79 Z" fill="#6f8298" opacity="0.62"/>
<g fill="#a8e0d0" opacity="0.5"><path d="M213,92 h2 v6 h-2 Z M213,110 h2 v6 h-2 Z M213,128 h2 v6 h-2 Z"/>
  <animate attributeName="opacity" values="0.3;0.65;0.3" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></g>
<!-- the library, a columned front, set back right of the fountain -->
<path d="M280,112 L300,100 L320,112 Z" fill="#8a96a8" opacity="0.72"/>
<path d="M282,112 h36 v5 h-36 Z" fill="#7d899b" opacity="0.72"/>
<path d="M282,117 h36 v65 h-36 Z" fill="#6f7c8f" opacity="0.6"/>
<g fill="#97a3b4" opacity="0.72"><path d="M285,118 h4 v58 h-4 Z M293,118 h4 v58 h-4 Z M303,118 h4 v58 h-4 Z M311,118 h4 v58 h-4 Z"/></g>
<path d="M280,176 h40 v6 h-40 Z" fill="#8a96a8" opacity="0.72"/>
<!-- the workshop's chimney, behind the hipped roof, and its steam -->
<path d="M375,44 h10 v32 h-10 Z" fill="#5a6276"/>
<path d="M373,42 h14 v4 h-14 Z" fill="#4e566a"/>
<g fill="#dfe6ee">
  <ellipse cx="380" cy="36" rx="6" ry="4.5" opacity="0">
    <animate attributeName="opacity" values="0;0.55;0" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-4,-12;-10,-28" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="380" cy="36" rx="7.5" ry="5.5" opacity="0">
    <animate attributeName="opacity" values="0;0.5;0" dur="4.4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-5,-12;-12,-28" dur="4.4s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="380" cy="36" rx="6.5" ry="5" opacity="0">
    <animate attributeName="opacity" values="0;0.5;0" dur="4.4s" begin="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-3,-12;-8,-28" dur="4.4s" begin="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="379" cy="30" rx="8" ry="6" opacity="0.32"/>
  <ellipse cx="373" cy="18" rx="10" ry="7" opacity="0.2"/>
</g>
<!-- Building plane:`);
// The terminal comes from town_0 (townTerminal), already beside the fountain.

// Scene 2: Town Crier — woman in plumed hat rings brass bell
STORY_SCENES['town_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="lanternGlow2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="bellGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky2)"/>
<!-- the same paving as town_0, at the nearer camera: setts about 2:1 with
     their corners knocked off, courses deepening as they come forward -->
<path d="M0,176 L500,176 L500,260 L0,260 Z" fill="#6a5a48"/>
<path d="M-8.3,179.4 h15.1 q1,0 1,1 v8.2 q0,1 -1,1 h-15.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M9.8,178.6 h23.9 q1,0 1,1 v8.2 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M36.7,179.4 h19.6 q1,0 1,1 v8.2 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M59.3,178.6 h19.3 q1,0 1,1 v8.2 q0,1 -1,1 h-19.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M81.7,180.2 h23.2 q1,0 1,1 v8.2 q0,1 -1,1 h-23.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M107.9,179.4 h12.2 q1,0 1,1 v8.2 q0,1 -1,1 h-12.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M123.1,179.4 h20.7 q1,0 1,1 v8.2 q0,1 -1,1 h-20.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M146.8,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M167.7,179.4 h25.0 q1,0 1,1 v8.2 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M195.6,180.2 h14.3 q1,0 1,1 v8.2 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M212.9,179.4 h19.7 q1,0 1,1 v8.2 q0,1 -1,1 h-19.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M235.7,179.4 h22.3 q1,0 1,1 v8.2 q0,1 -1,1 h-22.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M261.0,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M281.8,179.4 h23.1 q1,0 1,1 v8.2 q0,1 -1,1 h-23.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M307.8,179.4 h13.1 q1,0 1,1 v8.2 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M323.9,179.4 h21.7 q1,0 1,1 v8.2 q0,1 -1,1 h-21.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M348.5,179.4 h19.3 q1,0 1,1 v8.2 q0,1 -1,1 h-19.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M370.9,179.4 h13.7 q1,0 1,1 v8.2 q0,1 -1,1 h-13.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M387.6,179.4 h21.1 q1,0 1,1 v8.2 q0,1 -1,1 h-21.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M411.7,179.4 h12.8 q1,0 1,1 v8.2 q0,1 -1,1 h-12.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M427.5,179.4 h15.1 q1,0 1,1 v8.2 q0,1 -1,1 h-15.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M445.6,179.4 h20.0 q1,0 1,1 v8.2 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M468.6,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M489.4,179.4 h16.0 q1,0 1,1 v8.2 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M508.5,179.4 h13.5 q1,0 1,1 v8.2 q0,1 -1,1 h-13.5 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-11.6,189.6 h27.5 q1,0 1,1 v11.2 q0,1 -1,1 h-27.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M18.9,190.4 h30.8 q1,0 1,1 v11.2 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M52.8,190.4 h16.8 q1,0 1,1 v11.2 q0,1 -1,1 h-16.8 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M72.6,189.6 h17.7 q1,0 1,1 v11.2 q0,1 -1,1 h-17.7 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M93.3,190.4 h23.6 q1,0 1,1 v11.2 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M119.9,190.4 h25.5 q1,0 1,1 v11.2 q0,1 -1,1 h-25.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M148.4,190.4 h27.4 q1,0 1,1 v11.2 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M178.8,190.4 h19.4 q1,0 1,1 v11.2 q0,1 -1,1 h-19.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M201.2,190.4 h28.4 q1,0 1,1 v11.2 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M232.6,190.4 h33.0 q1,0 1,1 v11.2 q0,1 -1,1 h-33.0 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M268.5,189.6 h31.4 q1,0 1,1 v11.2 q0,1 -1,1 h-31.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M303.0,190.4 h27.4 q1,0 1,1 v11.2 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M333.4,189.6 h26.6 q1,0 1,1 v11.2 q0,1 -1,1 h-26.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M363.0,190.4 h26.5 q1,0 1,1 v11.2 q0,1 -1,1 h-26.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M392.5,190.4 h32.5 q1,0 1,1 v11.2 q0,1 -1,1 h-32.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M428.1,190.4 h20.1 q1,0 1,1 v11.2 q0,1 -1,1 h-20.1 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M451.2,189.6 h28.7 q1,0 1,1 v11.2 q0,1 -1,1 h-28.7 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M482.9,190.4 h29.6 q1,0 1,1 v11.2 q0,1 -1,1 h-29.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-29.2,204.4 h28.2 q1,0 1,1 v15.2 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M2.0,204.4 h42.4 q1,0 1,1 v15.2 q0,1 -1,1 h-42.4 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M47.3,204.4 h28.2 q1,0 1,1 v15.2 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M78.6,205.2 h39.7 q1,0 1,1 v15.2 q0,1 -1,1 h-39.7 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M121.3,204.4 h30.4 q1,0 1,1 v15.2 q0,1 -1,1 h-30.4 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M154.7,204.4 h38.5 q1,0 1,1 v15.2 q0,1 -1,1 h-38.5 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M196.2,204.4 h26.9 q1,0 1,1 v15.2 q0,1 -1,1 h-26.9 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M226.1,204.4 h26.8 q1,0 1,1 v15.2 q0,1 -1,1 h-26.8 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M255.9,204.4 h26.1 q1,0 1,1 v15.2 q0,1 -1,1 h-26.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M285.0,204.4 h23.6 q1,0 1,1 v15.2 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M311.6,205.2 h34.1 q1,0 1,1 v15.2 q0,1 -1,1 h-34.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M348.7,204.4 h25.6 q1,0 1,1 v15.2 q0,1 -1,1 h-25.6 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M377.3,203.6 h24.8 q1,0 1,1 v15.2 q0,1 -1,1 h-24.8 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M405.1,204.4 h36.9 q1,0 1,1 v15.2 q0,1 -1,1 h-36.9 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M445.0,203.6 h40.1 q1,0 1,1 v15.2 q0,1 -1,1 h-40.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M488.1,204.4 h35.2 q1,0 1,1 v15.2 q0,1 -1,1 h-35.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-24.9,222.4 h43.3 q1,0 1,1 v20.2 q0,1 -1,1 h-43.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M21.4,222.4 h54.3 q1,0 1,1 v20.2 q0,1 -1,1 h-54.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M78.7,223.2 h30.2 q1,0 1,1 v20.2 q0,1 -1,1 h-30.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M112.0,222.4 h49.2 q1,0 1,1 v20.2 q0,1 -1,1 h-49.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M164.1,223.2 h47.2 q1,0 1,1 v20.2 q0,1 -1,1 h-47.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M214.3,222.4 h43.9 q1,0 1,1 v20.2 q0,1 -1,1 h-43.9 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M261.2,222.4 h40.9 q1,0 1,1 v20.2 q0,1 -1,1 h-40.9 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M305.1,223.2 h30.6 q1,0 1,1 v20.2 q0,1 -1,1 h-30.6 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M338.6,222.4 h48.8 q1,0 1,1 v20.2 q0,1 -1,1 h-48.8 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M390.4,222.4 h48.4 q1,0 1,1 v20.2 q0,1 -1,1 h-48.4 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M441.8,222.4 h37.3 q1,0 1,1 v20.2 q0,1 -1,1 h-37.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M482.1,223.2 h53.2 q1,0 1,1 v20.2 q0,1 -1,1 h-53.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-19.5,245.4 h43.2 q1,0 1,1 v23.2 q0,1 -1,1 h-43.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M26.7,244.6 h61.1 q1,0 1,1 v23.2 q0,1 -1,1 h-61.1 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M90.8,244.6 h49.7 q1,0 1,1 v23.2 q0,1 -1,1 h-49.7 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M143.5,245.4 h63.6 q1,0 1,1 v23.2 q0,1 -1,1 h-63.6 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M210.1,244.6 h42.3 q1,0 1,1 v23.2 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M255.4,245.4 h60.1 q1,0 1,1 v23.2 q0,1 -1,1 h-60.1 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M318.5,244.6 h56.2 q1,0 1,1 v23.2 q0,1 -1,1 h-56.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M377.7,245.4 h49.2 q1,0 1,1 v23.2 q0,1 -1,1 h-49.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M429.9,246.2 h56.6 q1,0 1,1 v23.2 q0,1 -1,1 h-56.6 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M489.5,245.4 h68.5 q1,0 1,1 v23.2 q0,1 -1,1 h-68.5 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<path d="M0,176 L500,176 L500,178.6 L0,178.6 Z" fill="#8a7a63" opacity="0.5"/>
<path d="M0,258 Q120,236 250,196 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- ====================================================================
     THE SAME SQUARE, one step closer. town_2 still carried the original four
     flat rects while town_0 had been rebuilt, so the two scenes were visibly
     different towns. These are town_0's own buildings and paving, moved and
     scaled for the nearer camera.
     ==================================================================== -->

<!-- far row and building plane: town_0's own skyline at town_0's own scale
     (clock tower, stepped gable, gabled house, hipped house, awning shop),
     lifted from the town_0 string so the two can never drift apart again,
     and seated on this scene's kerb (y 178 rather than 182). The earlier
     bespoke copy was drawn larger than town_0, pushed the clock tower out of
     frame and filled the foreground with house fronts. -->
<g transform="translate(0 -4)">${townSkyline()}</g>
<!-- the fountain, behind the crier and off her head's axis: the shared
     townFountain, fully solid, set back on the left of the square -->
${townGrate(164,188,1.2)}
${townFountain('town2',164,188,1.2)}
<!-- the terminal, where it always stands: just right of the fountain -->
${townTerminal(164,188,1.2)}

<!-- ====================================================================
     THE TOWN CRIER: Wren, from the shared cast (scenes/characters.js).

     She was a hand-built figure with her own proportions: rects for a coat,
     a circle head, a plumed hat: so the crier was a different species from
     everyone else on the island. She is now drawn by the same model as every
     other cast appearance.

     Wren is the islander of the five, which is the right fit: the surveyor
     records and does not comment, and Aufu keeps things rather than announcing
     them.
     ==================================================================== -->
${bcMissionPlace('wren','work',306,238,94)}
<!-- Street lamps (flanking), the shared townLamp -->
${townLamp('town2lampL', 83, 185)}${townLamp('town2lampR', 398.5, 185)}
</svg>`;

// Scene 3: Fountain close-up with three cryptic clues carved on the rim
STORY_SCENES['town_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townCloseupBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="waterShimmer" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#aaddff" stop-opacity="0.2"/><stop offset="100%" stop-color="#aaddff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="goldTextGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="carvedGlow"><feGaussianBlur stdDeviation="1.2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townCloseupBg)"/>

<!-- ====================================================================
     THE SAME SQUARE AS town_0 AND town_2, at the closest camera of the
     three. The scene used to be four concentric ellipses on an empty
     gradient, so the fountain stood nowhere: no town behind it, no paving
     under it, and nothing to say it was the same fountain the player had
     just been standing in front of.

     These are town_0's own buildings and paving, scaled up for this camera
     and pushed back with a wash, because at this distance the town is
     backdrop and the rim of the basin is the subject.
     ==================================================================== -->

<!-- far row, barely off the sky -->
<path d="M0,168 L0,74 L38,50 L76,74 L76,168 Z" fill="#8a9db3" opacity="0.26"/>
<path d="M70,168 L70,94 L108,68 L146,94 L146,168 Z" fill="#7a8da3" opacity="0.28"/>
<path d="M352,168 L352,80 L390,56 L428,80 L428,168 Z" fill="#8a9db3" opacity="0.26"/>
<path d="M420,168 L420,98 L458,72 L500,98 L500,168 Z" fill="#7a8da3" opacity="0.28"/>

<!-- the clock tower, the square's one vertical, seen over the fountain -->
<path d="M14,168 L14,40 L74,40 L74,168 Z" fill="#67798f" opacity="0.5"/>
<path d="M6,40 L44,4 L82,40 Z" fill="#56687e" opacity="0.5"/>
<path d="M44,4 L82,40 L68,40 Z" fill="#7d90a6" opacity="0.3"/>
<circle cx="44" cy="70" r="17" fill="#ffeaa7" opacity="0.32"/>
<circle cx="44" cy="70" r="17" fill="none" stroke="#5a6276" stroke-width="1.8" opacity="0.5"/>
<path d="M44,70 L44,60" stroke="#3a4250" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
<path d="M44,70 L51,74" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>
<path d="M22,104 h18 v22 h-18 Z M50,104 h18 v22 h-18 Z" fill="#ffeaa7" opacity="0.22"/>
<path d="M22,142 h44 v26 h-44 Z" fill="#4a5468" opacity="0.32"/>

<!-- a gabled house, and the stepped gable beside it -->
<path d="M92,168 L92,96 L138,96 L138,168 Z" fill="#6a7286" opacity="0.5"/>
<path d="M84,96 L115,68 L146,96 Z" fill="#5a6276" opacity="0.5"/>
<path d="M115,68 L146,96 L134,96 Z" fill="#8a9db3" opacity="0.28"/>
<path d="M100,110 h13 v16 h-13 Z M120,110 h13 v16 h-13 Z" fill="#ffeaa7" opacity="0.24"/>
<path d="M104,140 h26 v28 h-26 Z" fill="#4a3a20" opacity="0.45"/>

<!-- the shop with its scalloped awning, on the far side, as in town_0 -->
<path d="M362,168 L362,86 L452,86 L452,168 Z" fill="#647689" opacity="0.5"/>
<path d="M356,86 L407,58 L458,86 Z" fill="#54667a" opacity="0.5"/>
<path d="M358,126 q12,11 24,0 q12,11 24,0 q12,11 24,0 q12,11 22,0 L456,114 L358,114 Z" fill="#8a4a3a" opacity="0.5"/>
<path d="M358,114 L456,114" stroke="#9aadc3" stroke-width="1.4" opacity="0.22"/>
<path d="M368,140 h36 v22 h-36 Z" fill="#ffeaa7" opacity="0.2"/>
<path d="M414,140 h26 v28 h-26 Z" fill="#4a3a20" opacity="0.45"/>
<path d="M460,90 h14 M467,90 v12" stroke="#4a3a20" stroke-width="1.6" opacity="0.5"/>
<path d="M458,102 h22 v15 h-22 Z" fill="#6b4a20" opacity="0.55"/>

<!-- the distance wash: at this camera the town is backdrop, so it is veiled
     toward the sky colour rather than merely drawn smaller -->
<path d="M0,0 L500,0 L500,176 L0,176 Z" fill="#7a9ab3" opacity="0.24"/>

<!-- ====================================================================
     THE PAVING, to town_0's rule: a sett is about 2:1 wide-to-tall with its
     corners knocked off, courses deepening as they come forward, and no
     continuous joint running across the square. This is the nearest of the
     three cameras, so the courses are the deepest.
     ==================================================================== -->
<path d="M0,176 L500,176 L500,260 L0,260 Z" fill="#6a5a48"/>
<path d="M-10,178.4 h26.0 q1,0 1,1 v3.6 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M18.6,179.2 h20.4 q1,0 1,1 v3.6 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M42.6,178.0 h24.8 q1,0 1,1 v3.6 q0,1 -1,1 h-24.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M70.6,179.0 h18.6 q1,0 1,1 v3.6 q0,1 -1,1 h-18.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M92.0,178.2 h27.4 q1,0 1,1 v3.6 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M122.6,179.4 h21.2 q1,0 1,1 v3.6 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M147.6,178.6 h25.6 q1,0 1,1 v3.6 q0,1 -1,1 h-25.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M176.4,179.2 h19.4 q1,0 1,1 v3.6 q0,1 -1,1 h-19.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M199.0,178.0 h23.6 q1,0 1,1 v3.6 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M226.0,179.4 h26.8 q1,0 1,1 v3.6 q0,1 -1,1 h-26.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M256.0,178.4 h20.2 q1,0 1,1 v3.6 q0,1 -1,1 h-20.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M279.4,179.0 h24.4 q1,0 1,1 v3.6 q0,1 -1,1 h-24.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M307.2,178.2 h22.0 q1,0 1,1 v3.6 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M332.6,179.4 h27.8 q1,0 1,1 v3.6 q0,1 -1,1 h-27.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M363.6,178.6 h19.0 q1,0 1,1 v3.6 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M386.0,179.2 h25.2 q1,0 1,1 v3.6 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M414.4,178.0 h23.0 q1,0 1,1 v3.6 q0,1 -1,1 h-23.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M440.6,179.4 h20.6 q1,0 1,1 v3.6 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M464.4,178.4 h28.0 q1,0 1,1 v3.6 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M495.6,179.0 h22.4 q1,0 1,1 v3.6 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.55"/>
<path d="M-16,185.6 h31.2 q1,0 1,1 v5.4 q0,1 -1,1 h-31.2 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M17.8,186.6 h27.6 q1,0 1,1 v5.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M48.2,185.4 h34.0 q1,0 1,1 v5.4 q0,1 -1,1 h-34.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M85.0,186.8 h25.4 q1,0 1,1 v5.4 q0,1 -1,1 h-25.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M113.2,185.8 h32.8 q1,0 1,1 v5.4 q0,1 -1,1 h-32.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M148.8,186.4 h28.2 q1,0 1,1 v5.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M179.8,185.4 h35.4 q1,0 1,1 v5.4 q0,1 -1,1 h-35.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M218.0,186.8 h26.0 q1,0 1,1 v5.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M246.8,185.6 h30.6 q1,0 1,1 v5.4 q0,1 -1,1 h-30.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M280.2,186.2 h33.8 q1,0 1,1 v5.4 q0,1 -1,1 h-33.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M316.8,185.4 h25.8 q1,0 1,1 v5.4 q0,1 -1,1 h-25.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M345.4,186.8 h31.4 q1,0 1,1 v5.4 q0,1 -1,1 h-31.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M379.6,186.0 h28.8 q1,0 1,1 v5.4 q0,1 -1,1 h-28.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M411.2,185.4 h34.6 q1,0 1,1 v5.4 q0,1 -1,1 h-34.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M448.6,186.6 h26.6 q1,0 1,1 v5.4 q0,1 -1,1 h-26.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M478.0,185.8 h32.0 q1,0 1,1 v5.4 q0,1 -1,1 h-32.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.52"/>
<path d="M-22,196.4 h40.2 q1,0 1,1 v8.2 q0,1 -1,1 h-40.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M21.0,197.6 h34.6 q1,0 1,1 v8.2 q0,1 -1,1 h-34.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M58.4,196.2 h44.0 q1,0 1,1 v8.2 q0,1 -1,1 h-44.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M105.2,197.8 h33.0 q1,0 1,1 v8.2 q0,1 -1,1 h-33.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M141.0,196.6 h42.4 q1,0 1,1 v8.2 q0,1 -1,1 h-42.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M186.2,197.4 h36.8 q1,0 1,1 v8.2 q0,1 -1,1 h-36.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M225.8,196.2 h45.6 q1,0 1,1 v8.2 q0,1 -1,1 h-45.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M274.2,197.8 h34.0 q1,0 1,1 v8.2 q0,1 -1,1 h-34.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M311.0,196.4 h39.8 q1,0 1,1 v8.2 q0,1 -1,1 h-39.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M353.6,197.2 h43.4 q1,0 1,1 v8.2 q0,1 -1,1 h-43.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M399.8,196.2 h33.6 q1,0 1,1 v8.2 q0,1 -1,1 h-33.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M436.2,197.8 h41.0 q1,0 1,1 v8.2 q0,1 -1,1 h-41.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M480.0,196.6 h37.4 q1,0 1,1 v8.2 q0,1 -1,1 h-37.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z" fill="#77644e" opacity="0.5"/>
<path d="M-26,213.4 h52.6 q1,0 1,1 v12.4 q0,1 -1,1 h-52.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M29.4,214.8 h45.4 q1,0 1,1 v12.4 q0,1 -1,1 h-45.4 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M77.6,213.2 h57.6 q1,0 1,1 v12.4 q0,1 -1,1 h-57.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M138.0,214.6 h43.2 q1,0 1,1 v12.4 q0,1 -1,1 h-43.2 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M184.0,213.6 h55.4 q1,0 1,1 v12.4 q0,1 -1,1 h-55.4 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M242.2,214.4 h48.0 q1,0 1,1 v12.4 q0,1 -1,1 h-48.0 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M293.0,213.2 h59.8 q1,0 1,1 v12.4 q0,1 -1,1 h-59.8 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M355.6,214.8 h44.6 q1,0 1,1 v12.4 q0,1 -1,1 h-44.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M403.0,213.4 h52.2 q1,0 1,1 v12.4 q0,1 -1,1 h-52.2 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M458.0,214.2 h56.8 q1,0 1,1 v12.4 q0,1 -1,1 h-56.8 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.47"/>
<path d="M-30,241.6 h74.2 q1,0 1,1 v20.6 q0,1 -1,1 h-74.2 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M47.0,242.8 h63.8 q1,0 1,1 v20.6 q0,1 -1,1 h-63.8 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M113.6,241.4 h81.0 q1,0 1,1 v20.6 q0,1 -1,1 h-81.0 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M197.4,242.6 h60.4 q1,0 1,1 v20.6 q0,1 -1,1 h-60.4 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M260.6,241.8 h77.6 q1,0 1,1 v20.6 q0,1 -1,1 h-77.6 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M341.0,242.4 h67.2 q1,0 1,1 v20.6 q0,1 -1,1 h-67.2 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M411.0,241.4 h83.8 q1,0 1,1 v20.6 q0,1 -1,1 h-83.8 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M497.6,242.8 h62.0 q1,0 1,1 v20.6 q0,1 -1,1 h-62.0 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z" fill="#71604a" opacity="0.44"/>
<path d="M0,176 L500,176 L500,178.6 L0,178.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet come round the basin -->
<path d="M0,258 Q120,238 250,204 Q380,238 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- ====================================================================
     THE FOUNTAIN. It was four concentric ellipses, which is a diagram of a
     fountain rather than a drawing of one. A stone basin at this range has
     a COPING you can see the thickness of, and it is BUILT of blocks, so
     the joints between them run out toward the viewer around the curve.
     ==================================================================== -->
<!-- ONE RING OF STONE. The rim used to be two separate lenses, a far wall
     and a near coping, whose ends did not meet, so the band holding the
     clues floated free of the basin, and the clues sat half in the water and
     half across the stone. It is now one ring: an outer ellipse and an inner
     one, the coping is the stone between them, and the wall face drops from
     the outer edge. The near coping is the widest part of the ring (the eye is
     above it), wide enough to carry the clues cut into it. -->
<!-- the shadow the basin drops on the paving -->
<path d="M30,226 Q250,206 470,226 Q250,266 30,226 Z" fill="#5c4d3b" opacity="0.3"/>
<!-- the wall face, hanging from the front of the ring -->
<path d="M28,207 L28,221 A222,32 0 0 0 472,221 L472,207 A222,32 0 0 1 28,207 Z" fill="#6f6f80"/>
<path d="M28,215 L28,221 A222,32 0 0 0 472,221 L472,215 A222,32 0 0 1 28,215 Z" fill="#4a4a5a" opacity="0.36"/>
<clipPath id="town3WallClip"><path d="M28,207 L28,221 A222,32 0 0 0 472,221 L472,207 A222,32 0 0 1 28,207 Z"/></clipPath>
<g clip-path="url(#town3WallClip)">
<g stroke="#5a5a6a" stroke-width="1.1" opacity="0.5" fill="none">
  <path d="M58,222 L56,238 M110,231 L108,247 M188,237 L187,253 M312,237 L313,253 M390,231 L392,247 M442,222 L444,238"/>
</g>
<g stroke="#c0c0d0" stroke-width="0.7" opacity="0.3" fill="none">
  <path d="M60,222 L58,238 M112,231 L110,247 M190,237 L189,253 M314,237 L315,253 M392,231 L394,247"/>
</g>
</g>
<!-- the coping: the whole ring of stone, outer ellipse less the pool -->
<path d="M28,207 A222,32 0 1 0 472,207 A222,32 0 1 0 28,207 Z M46,200 A204,18 0 1 0 454,200 A204,18 0 1 0 46,200 Z" fill="#9a9aaa" fill-rule="evenodd"/>
<!-- light on the near coping, shade on the far one where the eye sees its inside edge -->
<path d="M36,210 A214,26 0 0 0 464,210 L456,205 A206,20 0 0 1 44,205 Z" fill="#aaaabc" opacity="0.45"/>
<path d="M28,207 A222,32 0 0 1 472,207 L454,200 A204,18 0 0 0 46,200 Z" fill="#7c7c8c" opacity="0.4"/>
<!-- the joints between the coping slabs run across the ring, from the pool
     edge out to the wall, and fall BETWEEN the clues: one slab, one clue -->
<g stroke="#6a6a7a" stroke-width="0.9" opacity="0.55" fill="none">
  <path d="M187,217.1 L185,237.6 M313,217.1 L315,237.6 M66,207.5 L52,219.5 M434,207.5 L448,219.5"/>
</g>
<!-- moss along the wet line where the wall meets the paving -->
<path d="M96,248 q30,6 62,6 q-32,4 -62,-6 Z" fill="#5a6a4a" opacity="0.28"/>
<path d="M334,253 q28,-1 56,-7 q-25,9 -56,7 Z" fill="#5a6a4a" opacity="0.24"/>

<!-- THE POOL, held inside the ring's inner edge: the far inner wall the
     player looks across, then the water, deep enough to read as a hole -->
<clipPath id="town3PoolClip"><path d="M46,200 A204,18 0 1 0 454,200 A204,18 0 1 0 46,200 Z"/></clipPath>
<g clip-path="url(#town3PoolClip)">
<path d="M40,180 h420 v40 h-420 Z" fill="#8a8a9a"/>
<path d="M40,180 h420 v6 h-420 Z" fill="#6f6f80" opacity="0.5"/>
<path d="M44,206 A206,17 0 1 1 456,206 A206,17 0 1 1 44,206 Z" fill="#3f5f7f"/>
<path d="M44,206 A206,17 0 1 1 456,206 L456,208 Q250,214 44,208 Z" fill="#5a7c9c" opacity="0.85"/>
<path d="M62,196 Q250,184 438,196 Q250,196 62,196 Z" fill="#8fbcd8" opacity="0.5"/>
<!-- the pillar and the sky in the water, broken into bands by the ripple -->
<path d="M234,196 Q250,193 266,196 L263,216 Q250,220 237,216 Z" fill="#9a9aaa" opacity="0.22"/>
<path d="M112,203 Q164,198 216,204 Q164,209 112,203 Z" fill="#aaddff" opacity="0.16">
  <animate attributeName="opacity" values="0.08;0.24;0.08" dur="5.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M286,204 Q334,199 384,205 Q334,210 286,204 Z" fill="#aaddff" opacity="0.14">
  <animate attributeName="opacity" values="0.07;0.21;0.07" dur="6.8s" begin="1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M84,209 Q142,204 200,211 Q142,216 84,209 Z" fill="#8ac0e8" opacity="0.11"/>
<path d="M304,211 Q356,206 408,213 Q356,218 304,211 Z" fill="#8ac0e8" opacity="0.1"/>
<path d="M60,204 Q250,186 440,204 Q250,226 60,204 Z" fill="url(#waterShimmer)">
  <animate attributeName="opacity" values="0.4;0.85;0.4" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M70,196 Q250,186 430,196 Q250,214 70,196 Z" fill="#8fbcd8" opacity="0.13">
  <animate attributeName="opacity" values="0.07;0.2;0.07" dur="5.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the inner edge of the near coping drops its shadow on the water -->
<path d="M46,200 A204,18 0 0 0 454,200 L454,196 A204,18 0 0 1 46,196 Z" fill="#2f4a66" opacity="0.3"/>
</g>

<!-- ====================================================================
     THE CLUES, CUT INTO THE NEAR COPING. Each runs along the curve of the
     ring on its own slab, both lines inside the stone band, gilded so they
     catch the light. Text is frozen: not one character changes. Carved
     stone takes Georgia (design/STYLE.md "In-art type").
     ==================================================================== -->
<path id="town3RimL1" d="M38.44,202.94 A211.56,23.88 0 0 0 461.56,202.94" fill="none"/>
<path id="town3RimL2" d="M31.6,205.6 A218.4,29.2 0 0 0 468.4,205.6" fill="none"/>
<circle cx="126" cy="226" r="24" fill="url(#goldTextGlow)" opacity="0.5"/>
<circle cx="250" cy="230" r="26" fill="url(#goldTextGlow)" opacity="0.5"/>
<circle cx="374" cy="226" r="24" fill="url(#goldTextGlow)" opacity="0.5"/>
<g fill="#ffd700" stroke="#3a3a4c" stroke-width="1.1" paint-order="stroke" stroke-linejoin="round" font-family="Georgia,serif" font-size="7.2" font-weight="bold" letter-spacing="0" text-anchor="middle">
  <animate attributeName="opacity" values="0.86;1;0.86" dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <text><textPath href="#town3RimL1" startOffset="21.24%">Wrote, mangled,</textPath></text>
  <text><textPath href="#town3RimL2" startOffset="22.3%">a tall building (5)</textPath></text>
  <text><textPath href="#town3RimL1" startOffset="50%">Moved by rail right</textPath></text>
  <text><textPath href="#town3RimL2" startOffset="50%">to the book house (7)</textPath></text>
  <text><textPath href="#town3RimL1" startOffset="78.77%">Hop works, scrambled,</textPath></text>
  <text><textPath href="#town3RimL2" startOffset="77.7%">a place to build (8)</textPath></text>
</g>

<!-- ====================================================================
     THE PILLAR. A rect with two rect bands. A fountain pillar tapers, sits
     on a plinth, and carries a moulding under the upper basin.
     ==================================================================== -->
<!-- the plinth it stands on, standing in the water -->
<path d="M226,182 Q250,176 274,182 Q250,190 226,182 Z" fill="#7c7c8c"/>
<path d="M226,182 L274,182 L272,192 Q250,198 228,192 Z" fill="#6a6a7a"/>
<path d="M228,183 Q250,178 272,183 Q250,188 228,183 Z" fill="#9a9aaa" opacity="0.55"/>
<!-- the shaft, tapering as it rises -->
<path d="M234,184 L266,184 L262,110 L238,110 Z" fill="#8a8a9a"/>
<path d="M240,184 L254,184 L252,110 L242,110 Z" fill="#aaaabc" opacity="0.5"/>
<path d="M262,184 L266,184 L262,110 L259,110 Z" fill="#6a6a7a" opacity="0.6"/>
<!-- flutes cut down the shaft -->
<g stroke="#6f6f80" stroke-width="0.9" opacity="0.4" fill="none">
  <path d="M245,182 L247,112 M256,182 L255,112"/>
</g>
<!-- the mouldings: a torus at the foot and a cavetto under the basin -->
<path d="M231,178 Q250,172 269,178 Q250,186 231,178 Z" fill="#9a9aaa"/>
<path d="M232,178 Q250,174 268,178 Q250,182 232,178 Z" fill="#b4b4c4" opacity="0.5"/>
<path d="M234,124 Q250,119 266,124 Q250,131 234,124 Z" fill="#9a9aaa"/>
<path d="M235,124 Q250,121 265,124 Q250,127 235,124 Z" fill="#b4b4c4" opacity="0.5"/>

<!-- ====================================================================
     THE UPPER BASIN. A shallow bowl seen from below the rim, so its
     UNDERSIDE shows: that is what makes it a bowl rather than a disc.
     ==================================================================== -->
<path d="M212,104 Q250,90 288,104 Q282,122 250,126 Q218,122 212,104 Z" fill="#7c7c8c"/>
<path d="M212,104 Q250,90 288,104 Q250,116 212,104 Z" fill="#9a9aaa"/>
<path d="M218,103 Q250,93 282,103 Q250,112 218,103 Z" fill="#aaaabc" opacity="0.55"/>
<path d="M224,102 Q250,96 276,102 Q250,108 224,102 Z" fill="#6688aa" opacity="0.6"/>
<!-- water spilling over its lip in two sheets -->
<path d="M220,108 Q216,124 220,140 Q226,124 226,108 Z" fill="#aaddff" opacity="0.3">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M274,108 Q278,124 274,140 Q268,124 268,108 Z" fill="#aaddff" opacity="0.28">
  <animate attributeName="opacity" values="0.14;0.38;0.14" dur="4.1s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- where those two sheets strike the water below -->
<path d="M208,190 Q222,186 236,190 Q222,195 208,190 Z" fill="#dff0fa" opacity="0.22">
  <animate attributeName="opacity" values="0.12;0.3;0.12" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M262,191 Q276,187 290,191 Q276,196 262,191 Z" fill="#dff0fa" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.28;0.1" dur="4.1s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     THE JET. A straight line does not read as water. A jet rises, slows,
     and falls: two arcs from one nozzle, plus the column between them.
     ==================================================================== -->
<path d="M250,98 Q249,74 248,58" fill="none" stroke="#aaddff" stroke-width="2.4" opacity="0.45" stroke-linecap="round">
  <animate attributeName="opacity" values="0.28;0.62;0.28" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M248,58 Q244,72 234,96" fill="none" stroke="#aaddff" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M248,58 Q253,72 264,96" fill="none" stroke="#aaddff" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M250,100 Q242,80 226,100" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.28" stroke-linecap="round">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.6s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M250,100 Q258,80 274,100" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.28" stroke-linecap="round">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.2s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the drops thrown clear at the top of the jet -->
<path d="M248,54 q2,-1 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#aaddff" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-2,-12;-5,-20" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M252,56 q2,-1 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#aaddff" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="2.8s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;3,-11;7,-18" dur="2.8s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>

<!-- ====================================================================
     GLINTS on the gilded lettering in the coping.
     ==================================================================== -->
<!-- sparkle where the gold catches the light on the coping -->
<path d="M160,226 q2,-3 4,0 q-2,3 -4,0 Z" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.16;0.66;0.16" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M282,234 q2,-3 4,0 q-2,3 -4,0 Z" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.16;0.66;0.16" dur="3.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M250,192 q1.6,-2.4 3.2,0 q-1.6,2.4 -3.2,0 Z" fill="#ffd700" opacity="0.3">
  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4.6s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`;

// Scene 4: All three solved — bell rings, fountain surges golden
STORY_SCENES['town_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townGoldenSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a6a7a"/><stop offset="40%" stop-color="#7a8a9a"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="goldenFountain" cx="50%" cy="55%" r="40%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.35"/><stop offset="60%" stop-color="#ffeaa7" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowL" cx="0%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowR" cx="100%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="goldenGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="town4GoldWash" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.09"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#townGoldenSky)"/>

<!-- ====================================================================
     THE SAME SQUARE AS town_0, at the same camera, the moment all three
     clues are solved. It was four flat rects for a town and one brown
     rectangle for the ground, so it did not look like the same place the
     player had been standing in for four scenes.

     These are town_0's own buildings and paving, unchanged, with the
     golden light of the surge laid over them.
     ==================================================================== -->
<!-- far row: pale, low, no detail worth reading at that distance -->
<path d="M0,182 L0,96 L26,80 L52,96 L52,182 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M48,182 L48,110 L74,92 L100,110 L100,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M96,182 L96,84 L118,70 L140,84 L140,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M300,182 L300,92 L326,74 L352,92 L352,182 Z" fill="#8a9db3" opacity="0.38"/>
<path d="M348,182 L348,106 L372,88 L396,106 L396,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M392,182 L392,88 L418,72 L444,88 L444,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M440,182 L440,100 L470,82 L500,100 L500,182 Z" fill="#7a8da3" opacity="0.4"/>

<!-- mid row: the town proper, where the rooflines do the work -->
<!-- a stepped gable, the most old-town roofline there is -->
<path d="M14,182 L14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,108 L94,108 L94,118 L114,118 L114,182 Z" fill="#6f8298" opacity="0.85"/>
<path d="M14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,182 L14,182 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M36,130 h14 v16 h-14 Z M60,130 h14 v16 h-14 Z M84,130 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.42"/>
<path d="M36,158 h14 v16 h-14 Z M84,158 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.3"/>
<path d="M60,158 h14 v16 h-14 Z" fill="#5a6276" opacity="0.5"/>

<!-- a clock tower: the one vertical the square needs -->
<path d="M122,182 L122,74 L166,74 L166,182 Z" fill="#67798f"/>
<path d="M118,74 L144,50 L170,74 Z" fill="#56687e"/>
<path d="M144,50 L170,74 L160,74 Z" fill="#7d90a6" opacity="0.5"/>
<circle cx="144" cy="94" r="12" fill="#ffeaa7" opacity="0.55"/>
<circle cx="144" cy="94" r="12" fill="none" stroke="#5a6276" stroke-width="1.6"/>
<path d="M144,94 L144,87" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round"/>
<path d="M144,94 L149,97" stroke="#3a4250" stroke-width="1.2" stroke-linecap="round"/>
<path d="M128,120 h14 v18 h-14 Z M148,120 h14 v18 h-14 Z" fill="#ffeaa7" opacity="0.36"/>
<path d="M128,150 h34 v22 h-34 Z" fill="#4a5468" opacity="0.6"/>
<path d="M132,152 h26 v18 h-26 Z" fill="#ffeaa7" opacity="0.2"/>

<!-- a plain gabled house between the tower and the fountain -->
<path d="M172,182 L172,116 L204,116 L204,182 Z" fill="#6a7286"/>
<path d="M166,116 L188,96 L210,116 Z" fill="#5a6276"/>
<path d="M188,96 L210,116 L202,116 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M178,128 h9 v12 h-9 Z M191,128 h9 v12 h-9 Z" fill="#ffeaa7" opacity="0.4"/>
<path d="M180,152 h18 v30 h-18 Z" fill="#4a3a20"/>
<path d="M182,154 h14 v26 h-14 Z" fill="#5a4830" opacity="0.7"/>
<circle cx="194" cy="168" r="1.6" fill="#ffd700" opacity="0.7"/>
<path d="M196,110 h7 v8 h-7 Z" fill="#5a6276"/>

<!-- and one on the far side, hipped -->
<path d="M296,182 L296,120 L340,120 L340,182 Z" fill="#6a7286"/>
<path d="M290,120 L306,102 L330,102 L346,120 Z" fill="#5a6276"/>
<path d="M306,102 L330,102 L346,120 L336,120 Z" fill="#8a9db3" opacity="0.35"/>
<path d="M302,132 h11 v14 h-11 Z M322,132 h11 v14 h-11 Z" fill="#ffeaa7" opacity="0.38"/>
<path d="M310,156 h16 v26 h-16 Z" fill="#4a3a20"/>
<circle cx="322" cy="170" r="1.5" fill="#ffd700" opacity="0.65"/>

<!-- ====================================================================
     TWO SHOPFRONTS flanking the square. A scalloped awning is the single most
     "shop" mark there is, and it gives the square somewhere to BE rather than
     a backdrop to stand in front of.
     ==================================================================== -->
<path d="M6,182 L6,104 L92,104 L92,182 Z" fill="#63758a" opacity="0"/>
<path d="M400,182 L400,112 L470,112 L470,182 Z" fill="#647689"/>
<path d="M396,112 L435,94 L474,112 Z" fill="#54667a"/>
<path d="M398,142 q10,9 20,0 q10,9 20,0 q10,9 20,0 q10,9 18,0 L476,132 L398,132 Z" fill="#8a4a3a" opacity="0.9"/>
<path d="M398,132 L476,132" stroke="#9aadc3" stroke-width="1.2" opacity="0.4"/>
<path d="M406,152 h30 v20 h-30 Z" fill="#ffeaa7" opacity="0.34"/>
<path d="M444,152 h20 v30 h-20 Z" fill="#4a3a20"/>
<circle cx="448" cy="168" r="1.5" fill="#ffd700" opacity="0.7"/>
<path d="M478,116 h12 M484,116 v10" stroke="#4a3a20" stroke-width="1.4"/>
<path d="M476,126 h18 v12 h-18 Z" fill="#6b4a20"/>
<path d="M480,130 h10 v2 h-10 Z M480,134 h6 v2 h-6 Z" fill="#ffd700" opacity="0.55"/>

<path d="M0,182 L500,182 L500,260 L0,260 Z" fill="#6a5a48"/>
<!-- ================================================================
     THE PAVING, third pass, and the fault was never the joints.

     Measured: the stones were running 2.9:1 to 3.3:1 wide-to-tall. That is a
     BRICK. A cobble is roughly square in plan and foreshortens to about 2:1 at
     a shallow viewing angle, so the square kept reading as a wall however the
     course lines were tuned. Halving the widths fixed what two passes of joint
     tuning could not.

     Setts also have their corners knocked off, and no continuous joint runs
     across a square: the stones themselves define the courses.
     ================================================================ -->
<path d="M-8.5,187.0 h13.1 q1,0 1,1 v6.4 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M7.4,187.0 h12.5 q1,0 1,1 v6.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M22.6,185.6 h19.2 q1,0 1,1 v6.4 q0,1 -1,1 h-19.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M44.7,186.3 h13.8 q1,0 1,1 v6.4 q0,1 -1,1 h-13.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M61.3,185.6 h10.5 q1,0 1,1 v6.4 q0,1 -1,1 h-10.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M74.6,186.3 h16.3 q1,0 1,1 v6.4 q0,1 -1,1 h-16.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M93.7,185.6 h10.3 q1,0 1,1 v6.4 q0,1 -1,1 h-10.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M106.9,187.0 h12.9 q1,0 1,1 v6.4 q0,1 -1,1 h-12.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M122.6,186.3 h15.2 q1,0 1,1 v6.4 q0,1 -1,1 h-15.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M140.5,186.3 h14.2 q1,0 1,1 v6.4 q0,1 -1,1 h-14.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M157.5,185.6 h11.8 q1,0 1,1 v6.4 q0,1 -1,1 h-11.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M172.0,187.0 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M191.4,187.0 h15.0 q1,0 1,1 v6.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M209.1,186.3 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M228.5,186.3 h12.4 q1,0 1,1 v6.4 q0,1 -1,1 h-12.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M243.7,185.6 h18.1 q1,0 1,1 v6.4 q0,1 -1,1 h-18.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M264.5,186.3 h14.9 q1,0 1,1 v6.4 q0,1 -1,1 h-14.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M282.2,187.0 h17.4 q1,0 1,1 v6.4 q0,1 -1,1 h-17.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M302.4,185.6 h16.9 q1,0 1,1 v6.4 q0,1 -1,1 h-16.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M322.1,187.0 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M338.5,186.3 h18.4 q1,0 1,1 v6.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M359.7,186.3 h17.1 q1,0 1,1 v6.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M379.7,186.3 h18.5 q1,0 1,1 v6.4 q0,1 -1,1 h-18.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M401.0,186.3 h11.0 q1,0 1,1 v6.4 q0,1 -1,1 h-11.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M414.8,187.0 h17.9 q1,0 1,1 v6.4 q0,1 -1,1 h-17.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M435.5,185.6 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M451.9,185.6 h16.0 q1,0 1,1 v6.4 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M470.7,187.0 h14.4 q1,0 1,1 v6.4 q0,1 -1,1 h-14.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M487.9,186.3 h16.4 q1,0 1,1 v6.4 q0,1 -1,1 h-16.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M507.1,186.3 h17.3 q1,0 1,1 v6.4 q0,1 -1,1 h-17.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-12.7,195.3 h12.5 q1,0 1,1 v8.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M2.6,194.6 h17.5 q1,0 1,1 v8.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M23.0,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M49.9,195.3 h18.0 q1,0 1,1 v8.4 q0,1 -1,1 h-18.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M70.7,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M97.8,195.3 h21.8 q1,0 1,1 v8.4 q0,1 -1,1 h-21.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M122.3,196.0 h13.9 q1,0 1,1 v8.4 q0,1 -1,1 h-13.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M139.0,195.3 h23.8 q1,0 1,1 v8.4 q0,1 -1,1 h-23.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M165.6,195.3 h19.0 q1,0 1,1 v8.4 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M187.4,194.6 h14.3 q1,0 1,1 v8.4 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M204.5,195.3 h17.1 q1,0 1,1 v8.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M224.5,195.3 h12.7 q1,0 1,1 v8.4 q0,1 -1,1 h-12.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M239.9,195.3 h15.7 q1,0 1,1 v8.4 q0,1 -1,1 h-15.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M258.4,195.3 h14.0 q1,0 1,1 v8.4 q0,1 -1,1 h-14.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M275.2,195.3 h22.0 q1,0 1,1 v8.4 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M300.0,194.6 h20.8 q1,0 1,1 v8.4 q0,1 -1,1 h-20.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M323.5,195.3 h23.6 q1,0 1,1 v8.4 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M349.9,196.0 h15.0 q1,0 1,1 v8.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M367.7,195.3 h15.5 q1,0 1,1 v8.4 q0,1 -1,1 h-15.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M386.0,195.3 h15.3 q1,0 1,1 v8.4 q0,1 -1,1 h-15.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M404.0,196.0 h20.4 q1,0 1,1 v8.4 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M427.3,195.3 h15.6 q1,0 1,1 v8.4 q0,1 -1,1 h-15.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M445.7,195.3 h21.2 q1,0 1,1 v8.4 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M469.7,194.6 h23.9 q1,0 1,1 v8.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M496.4,195.3 h16.2 q1,0 1,1 v8.4 q0,1 -1,1 h-16.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-9.4,205.6 h27.9 q1,0 1,1 v11.4 q0,1 -1,1 h-27.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M21.3,205.6 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M41.6,206.3 h25.0 q1,0 1,1 v11.4 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M69.4,205.6 h27.7 q1,0 1,1 v11.4 q0,1 -1,1 h-27.7 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M99.9,206.3 h18.9 q1,0 1,1 v11.4 q0,1 -1,1 h-18.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M121.6,205.6 h22.4 q1,0 1,1 v11.4 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M146.8,207.0 h23.4 q1,0 1,1 v11.4 q0,1 -1,1 h-23.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M173.0,206.3 h33.4 q1,0 1,1 v11.4 q0,1 -1,1 h-33.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M209.2,205.6 h20.0 q1,0 1,1 v11.4 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M231.9,205.6 h31.9 q1,0 1,1 v11.4 q0,1 -1,1 h-31.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M266.6,207.0 h30.5 q1,0 1,1 v11.4 q0,1 -1,1 h-30.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M299.9,205.6 h20.6 q1,0 1,1 v11.4 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M323.3,207.0 h19.5 q1,0 1,1 v11.4 q0,1 -1,1 h-19.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M345.6,206.3 h27.6 q1,0 1,1 v11.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M376.0,205.6 h19.6 q1,0 1,1 v11.4 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M398.4,207.0 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M418.7,205.6 h32.1 q1,0 1,1 v11.4 q0,1 -1,1 h-32.1 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M453.6,206.3 h28.2 q1,0 1,1 v11.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M484.6,206.3 h18.4 q1,0 1,1 v11.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M505.8,206.3 h20.5 q1,0 1,1 v11.4 q0,1 -1,1 h-20.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-8.2,221.0 h36.5 q1,0 1,1 v14.4 q0,1 -1,1 h-36.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M31.1,220.3 h25.2 q1,0 1,1 v14.4 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M59.1,220.3 h23.9 q1,0 1,1 v14.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M85.8,220.3 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M117.0,220.3 h21.9 q1,0 1,1 v14.4 q0,1 -1,1 h-21.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M141.6,220.3 h25.7 q1,0 1,1 v14.4 q0,1 -1,1 h-25.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M170.1,220.3 h30.8 q1,0 1,1 v14.4 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M203.7,220.3 h27.0 q1,0 1,1 v14.4 q0,1 -1,1 h-27.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M233.5,219.6 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M264.7,220.3 h28.0 q1,0 1,1 v14.4 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M295.5,221.0 h37.2 q1,0 1,1 v14.4 q0,1 -1,1 h-37.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M335.4,220.3 h42.3 q1,0 1,1 v14.4 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M380.6,220.3 h35.5 q1,0 1,1 v14.4 q0,1 -1,1 h-35.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M418.9,220.3 h42.5 q1,0 1,1 v14.4 q0,1 -1,1 h-42.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M464.2,220.3 h37.7 q1,0 1,1 v14.4 q0,1 -1,1 h-37.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M504.7,220.3 h26.0 q1,0 1,1 v14.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-17.1,237.3 h57.1 q1,0 1,1 v21.4 q0,1 -1,1 h-57.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M42.8,237.3 h53.4 q1,0 1,1 v21.4 q0,1 -1,1 h-53.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M99.0,237.3 h52.5 q1,0 1,1 v21.4 q0,1 -1,1 h-52.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M154.3,237.3 h49.5 q1,0 1,1 v21.4 q0,1 -1,1 h-49.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M206.6,236.6 h54.6 q1,0 1,1 v21.4 q0,1 -1,1 h-54.6 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M263.9,237.3 h41.7 q1,0 1,1 v21.4 q0,1 -1,1 h-41.7 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M308.4,237.3 h39.4 q1,0 1,1 v21.4 q0,1 -1,1 h-39.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M350.7,238.0 h49.1 q1,0 1,1 v21.4 q0,1 -1,1 h-49.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M402.5,238.0 h41.1 q1,0 1,1 v21.4 q0,1 -1,1 h-41.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M446.5,237.3 h54.5 q1,0 1,1 v21.4 q0,1 -1,1 h-54.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M503.7,236.6 h45.9 q1,0 1,1 v21.4 q0,1 -1,1 h-45.9 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<!-- the kerb where the paving meets the buildings -->
<path d="M0,182 L500,182 L500,184.6 L0,184.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet cross the square -->
<path d="M150,260 Q210,220 250,196 Q290,220 350,260 Z" fill="#8a765d" opacity="0.16"/>
<path d="M0,258 Q120,236 250,198 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>
<!-- the fountain's service grate, shut, under the gold that washes over it -->
${townGrate(250,190,1)}
<!-- the gold from the fountain washing up the near paving -->
<path d="M0,196 L500,196 L500,260 L0,260 Z" fill="url(#town4GoldWash)"/>

<!-- the golden aura, over the town but under the fountain itself -->
<circle cx="250" cy="158" r="150" fill="url(#goldenFountain)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>

<!-- ====================================================================
     THE THREE PATHS, one to each solved place, laid on the paving BEFORE
     the fountain so the basin stands on top of where they meet. They are
     ribbons worn into the stone that widen as they come forward, not
     strokes of uniform width: a stroke cannot taper, and a track that does
     not taper reads as a painted stripe.
     ==================================================================== -->
<!-- left, to the tower -->
<path d="M214,191 Q154,196 92,205 Q46,212 0,221 L0,236 Q48,224 94,215 Q156,204 218,198 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M215,193 Q158,198 98,207 Q54,214 4,224 L1,232 Q50,221 98,212 Q158,202 217,196 Z" fill="#ffeaa7" opacity="0.22">
  <animate attributeName="opacity" values="0.13;0.33;0.13" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- right, to the workshop -->
<path d="M286,191 Q346,196 408,205 Q454,212 500,221 L500,236 Q452,224 406,215 Q344,204 282,198 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M285,193 Q342,198 402,207 Q446,214 496,224 L499,232 Q450,221 402,212 Q342,202 283,196 Z" fill="#ffeaa7" opacity="0.22">
  <animate attributeName="opacity" values="0.13;0.33;0.13" dur="4.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- centre, to the library, running straight out at the player's feet and so
     the widest of the three -->
<path d="M238,196 Q234,224 228,260 L272,260 Q266,224 262,196 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M241,196 Q238,224 234,260 L266,260 Q262,224 259,196 Z" fill="#ffeaa7" opacity="0.24">
  <animate attributeName="opacity" values="0.15;0.36;0.15" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the individual setts each track is worn across, lit from beneath -->
<path d="M234,236 q16,-6 32,-1 q-15,9 -32,1 Z" fill="#ffeaa7" opacity="0.22"/>
<path d="M238,214 q12,-5 23,-1 q-11,7 -23,1 Z" fill="#ffeaa7" opacity="0.18"/>
<path d="M112,214 q18,-5 34,-8 q-16,10 -34,8 Z" fill="#ffeaa7" opacity="0.16"/>
<path d="M356,214 q18,3 34,8 q-18,2 -34,-8 Z" fill="#ffeaa7" opacity="0.16"/>
<path d="M172,204 q14,-3 27,-5 q-13,7 -27,5 Z" fill="#ffeaa7" opacity="0.14"/>
<path d="M302,204 q14,2 27,5 q-14,2 -27,-5 Z" fill="#ffeaa7" opacity="0.14"/>

<!-- town_0's street furniture, still standing at this wider camera, set back
     a plane: the notice boards, the bench and the planter -->
${bcArt.layer('bg', `<rect x="50" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="40" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="42" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="52" y="141" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.7">?X=7</text>
<text x="52" y="146" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.6">A+B=?</text>
<rect x="446" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="436" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="438" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="448" y="141" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.7">ROT13</text>
<text x="448" y="146" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="4" opacity="0.6">#!&amp;%</text>
<g transform="translate(408 182) scale(0.85)">
<ellipse cx="12" cy="17" rx="15" ry="3" fill="#453e36" opacity=".24"/>
<path d="M1 3H24L21 17H4Z" fill="#8a6654"/><path d="M0 2H25V6H0Z" fill="#aa8770"/>
<path d="M4 2Q-2 -9 7 -7L11 0Q7 -17 15 -12L16 0Q23 -14 25 -5L21 3Z" fill="#577360"/>
<path d="M8 0L6 -5 M15 1L15 -7 M20 2L23 -4" stroke="#839678" stroke-width="1"/>
</g>`, 'town')}
<!-- the bench, out on the paving in front of the lamp line, so it sits on
     the near plane: solid, town_0's colours, not veiled back with the
     boards behind it -->
${bcArt.layer('fg', `<g transform="translate(70 185) scale(0.85)">
<ellipse cx="24" cy="18" rx="29" ry="4" fill="#453e36" opacity=".25"/>
<path d="M2 0H45V4H2Z M2 6H45V10H2Z" fill="#8c7152"/>
<path d="M5 -1V17 M42 -1V17" stroke="#4e565b" stroke-width="2"/>
<path d="M0 11H48L45 14H2Z" fill="#a08864"/>
<path d="M5 14V19 M42 14V19" stroke="#4e565b" stroke-width="2"/>
</g>`, 'town')}

<!-- ====================================================================
     THE FOUNTAIN, the shared townFountain, running gold. At scale 1 and
     contact point (250,190) it is exactly the basin the surge below was
     drawn to, so the jet still leaves the bowl where it did.
     ==================================================================== -->
${townFountain('town4',250,190,1,{gold:true})}
<!-- the terminal, where it always stands: just right of the fountain -->
${townTerminal(250,190,1)}

<!-- ====================================================================
     THE GOLDEN SURGE. Straight lines do not read as water. A jet rises,
     slows and falls back, so it is arcs from one nozzle plus the column.
     ==================================================================== -->
<path d="M250,134 Q249,104 248,80" fill="none" stroke="#ffd700" stroke-width="3.4" opacity="0.6" stroke-linecap="round" filter="url(#goldenGlow)">
  <animate attributeName="opacity" values="0.38;0.8;0.38" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M248,80 Q247,66 247,54" fill="none" stroke="#ffeaa7" stroke-width="2" opacity="0.42" stroke-linecap="round">
  <animate attributeName="opacity" values="0.22;0.6;0.22" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M247,56 C232,56 214,110 214,183" fill="none" stroke="#ffd700" stroke-width="1.6" opacity="0.38" stroke-linecap="round">
  <animate attributeName="opacity" values="0.2;0.54;0.2" dur="3.6s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M249,56 C264,56 286,110 286,183" fill="none" stroke="#ffd700" stroke-width="1.6" opacity="0.38" stroke-linecap="round">
  <animate attributeName="opacity" values="0.2;0.54;0.2" dur="3.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M244,138 Q236,118 230,139" fill="none" stroke="#ffeaa7" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>
<path d="M256,138 Q264,118 270,139" fill="none" stroke="#ffeaa7" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>
<!-- where the two sheets strike the pool -->
<path d="M204,184 q10,-3 20,0 q-10,4 -20,0 Z" fill="#ffeaa7" opacity="0.32">
  <animate attributeName="opacity" values="0.16;0.46;0.16" dur="3.6s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M276,184 q10,-3 20,0 q-10,4 -20,0 Z" fill="#ffeaa7" opacity="0.3">
  <animate attributeName="opacity" values="0.14;0.44;0.14" dur="3.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- sparks carried up off the top of the jet, each on its own timing so they
     do not pulse in unison -->
<path d="M248,48 q2.4,-1.4 3.6,1.2 q-1.2,3.4 -3.6,3.4 q-2.4,-2.4 0,-4.6 Z" fill="#ffd700" opacity="0" filter="url(#goldenGlow)">
  <animate attributeName="opacity" values="0;0.7;0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-2,-18;-6,-32" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M240,60 q2,-1.2 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#ffeaa7" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="3.3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-3,-16;-8,-28" dur="3.3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M260,66 q2,-1.2 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#ffeaa7" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="3.05s" begin="1.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;4,-15;9,-27" dur="3.05s" begin="1.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M232,72 q1.6,-1 2.4,0.8 q-0.8,2.4 -2.4,2.4 q-1.6,-1.6 0,-3.2 Z" fill="#ffd700" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="3.7s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-4,-14;-10,-26" dur="3.7s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M268,54 q1.6,-1 2.4,0.8 q-0.8,2.4 -2.4,2.4 q-1.6,-1.6 0,-3.2 Z" fill="#ffd700" opacity="0">
  <animate attributeName="opacity" values="0;0.7;0" dur="2.85s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;5,-13;11,-24" dur="2.85s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>

<!-- ====================================================================
     THE LANTERNS, town_0's pair: the shared townLamp.
     ==================================================================== -->
${townLamp('town4lampL', 120, 182)}${townLamp('town4lampR', 380, 182)}
<!-- Wren, ringing the bell that opens the paths: town_2's crier, standing
     back beside the fountain at this wider camera -->
${bcMissionPlace('wren','work',354,222,74)}
</svg>`;

// Scene 5 (complete): Three paths glow golden, and each now ends somewhere:
// the left path at the rune tower (Adventure Tower), a new path at the
// columned library standing where the far-side house was, the right path at
// the workshop with its steam. town_4's square otherwise, ids suffixed.
function townCut(s, from, to, insert) {
  var a = s.indexOf(from), b = s.indexOf(to, a);
  if (a < 0 || b < 0) return s;
  return s.slice(0, a) + insert + s.slice(b);
}
STORY_SCENES['town_5'] = (function () {
  var s = STORY_SCENES['town_4']
    .replace(/townGoldenSky|goldenFountain|lanternGlow4|pathGlowL|pathGlowR|goldenGlow|town4GoldWash|town4lamp/g, function (id) { return id + 'T5'; });
  // the far-side house becomes the library
  s = townCut(s, '<!-- and one on the far side, hipped -->', '<!-- ====', `<!-- the Lexicon Library, where the far-side house stood: pediment, four columns, steps -->
<path d="M288,114 L318,96 L348,114 Z" fill="#7d8798"/>
<path d="M318,96 L348,114 L340,114 Z" fill="#9aa6b6" opacity="0.45"/>
<path d="M290,114 h56 v6 h-56 Z" fill="#6f7a8c"/>
<path d="M294,120 h48 v56 h-48 Z" fill="#59647a"/>
<path d="M310,140 h16 v36 h-16 Z" fill="#4a3a20"/>
<path d="M310,140 h16 v36 h-16 Z" fill="#ffd700" opacity="0.18"/>
<g fill="#8f9bad"><path d="M296,120 h6 v56 h-6 Z M304,120 h5 v56 h-5 Z M327,120 h5 v56 h-5 Z M334,120 h6 v56 h-6 Z"/></g>
<g fill="#a9b4c4" opacity="0.5"><path d="M296,120 h2 v56 h-2 Z M304,120 h1.6 v56 h-1.6 Z M327,120 h1.6 v56 h-1.6 Z M334,120 h2 v56 h-2 Z"/></g>
<path d="M290,176 h56 v3 h-56 Z M286,179 h64 v3 h-64 Z" fill="#7d8798"/>

`);
  // the centre ribbon, which ran out at the player's feet, now runs to the library steps
  s = townCut(s, '<!-- centre, to the library', '<!-- the individual setts', `<!-- the third path, from the fountain's right to the library steps -->
<path d="M292,196 Q306,189 312,182 L332,182 Q324,192 302,202 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M296,197 Q308,190 315,182.5 L328,182.5 Q320,191 301,200 Z" fill="#ffeaa7" opacity="0.24">
  <animate attributeName="opacity" values="0.15;0.36;0.15" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
`);
  // and the lit setts that marked the old centre track toward the viewer
  s = s.replace('<path d="M234,236 q16,-6 32,-1 q-15,9 -32,1 Z" fill="#ffeaa7" opacity="0.22"/>\n', '')
       .replace('<path d="M238,214 q12,-5 23,-1 q-11,7 -23,1 Z" fill="#ffeaa7" opacity="0.18"/>\n', '');
  // the rune tower and the workshop, where the side paths leave the frame
  return s.replace('<!-- Wren, ringing the bell', `<!-- the Adventure Tower, at the end of the left path: a rune-cut tower cropped by the frame -->
<ellipse cx="20" cy="235" rx="34" ry="5" fill="#3e3428" opacity="0.32"/>
<path d="M-6,234 L-2,70 L42,70 L46,234 Z" fill="#5d6a80"/>
<path d="M-6,234 L-2,70 L12,70 L10,234 Z" fill="#76849a" opacity="0.5"/>
<path d="M36,70 L42,70 L46,234 L40,234 Z" fill="#46526a" opacity="0.6"/>
<path d="M-8,70 L20,22 L48,70 Z" fill="#4a5468"/>
<path d="M20,22 L48,70 L38,70 Z" fill="#5d6a80" opacity="0.5"/>
<path d="M-6,66 h52 v6 h-52 Z" fill="#6c7890"/>
<path d="M12,196 h16 v38 h-16 Z" fill="#3a3020"/>
<g fill="#ffd700" opacity="0.7">
  <path d="M18,92 l3,-5 l3,5 l-3,5 Z M17,118 h6 v2 h-6 Z M19,113 h2 v12 h-2 Z M16,146 l8,0 l-4,7 Z M18,170 h4 v8 h-4 Z"/>
  <animate attributeName="opacity" values="0.45;0.85;0.45" dur="4.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</g>
<!-- the Puzzle Workshop, at the end of the right path, chimney steaming -->
<ellipse cx="480" cy="235" rx="36" ry="5" fill="#3e3428" opacity="0.32"/>
<path d="M486,72 h10 v40 h-10 Z" fill="#4e566a"/>
<path d="M484,70 h14 v4 h-14 Z" fill="#434b5e"/>
<path d="M450,234 L450,136 L506,136 L506,234 Z" fill="#6b5a48"/>
<path d="M450,234 L450,136 L462,136 L462,234 Z" fill="#7d6a55" opacity="0.6"/>
<path d="M444,136 L478,104 L512,136 Z" fill="#54465a"/>
<path d="M478,104 L512,136 L502,136 Z" fill="#6a5a70" opacity="0.5"/>
<path d="M458,176 h22 v58 h-22 Z" fill="#3a2c1a"/>
<path d="M486,160 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.45"/>
<g transform="translate(478 150)" fill="none" stroke="#ffd700" stroke-width="2" opacity="0.75">
  <circle r="6"/><path d="M0,-9 v3 M0,6 v3 M-9,0 h3 M6,0 h3 M-6.4,-6.4 l2,2 M4.4,4.4 l2,2 M-6.4,6.4 l2,-2 M4.4,-4.4 l2,-2"/>
</g>
<g fill="#dfe6ee">
  <ellipse cx="491" cy="64" rx="7" ry="5" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-5,-14;-12,-34" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="491" cy="64" rx="8.5" ry="6" opacity="0">
    <animate attributeName="opacity" values="0;0.55;0" dur="4.2s" begin="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-6,-14;-14,-34" dur="4.2s" begin="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="491" cy="64" rx="7.5" ry="5.5" opacity="0">
    <animate attributeName="opacity" values="0;0.55;0" dur="4.2s" begin="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;-4,-14;-10,-34" dur="4.2s" begin="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
  </ellipse>
  <ellipse cx="489" cy="56" rx="9" ry="6.5" opacity="0.35"/>
  <ellipse cx="482" cy="42" rx="11" ry="8" opacity="0.22"/>
</g>
<!-- Wren, ringing the bell`);
})();
