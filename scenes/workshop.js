// Workshop story scenes — "Gears and Clues"
// Keys: workshop_0 through workshop_7 (8-step story; steps 2-5 share the engine art)

// ---------------------------------------------------------------------------
// ONE ROOM. Every workshop shot is the same room, so the back wall (planks at
// 64/178/322/436, the shelf up left, the belt coil right), the floor (seam at
// y200) and the bench (top at y170, legs to y238) come from these helpers and
// are never redrawn by hand. Croc is 150 tall in every shot.
// ---------------------------------------------------------------------------
function wsWall(o) {
  o = o || {};
  var w = o.w || 500;
  var planks = [64, 178, 322, 436].filter(function (x) { return x < w; });
  var s = '<rect x="0" y="0" width="' + w + '" height="132" fill="#3a2210" opacity="0.55"/>' +
    '<path d="M0,132 Q' + (w / 2) + ',128 ' + w + ',132 L' + w + ',136 Q' + (w / 2) + ',132 0,136 Z" fill="#5a3a1a"/>' +
    '<path d="' + planks.map(function (x) { return 'M' + x + ',0 v132'; }).join(' ') + '" stroke="#2a1808" stroke-width="1.4" opacity="0.35"/>';
  if (o.shelf !== false) s +=
    '<rect x="14" y="54" width="78" height="5" fill="#6b4e0a" opacity="0.8"/>' +
    '<rect x="14" y="54" width="78" height="1.6" fill="#a07d28" opacity="0.5"/>' +
    '<path d="M22,34 Q36,31 50,34 L50,54 L22,54 Z" fill="#a0522d" opacity="0.7"/>' +
    '<path d="M22,34 Q36,31 50,34 L50,38 Q36,35 22,38 Z" fill="#c07a48" opacity="0.6"/>' +
    '<path d="M60,38 Q72,35 84,38 L84,54 L60,54 Z" fill="#8b4513" opacity="0.7"/>' +
    '<path d="M64,44 h16" stroke="#c8a855" stroke-width="0.8" opacity="0.35"/>' +
    '<rect x="16" y="59" width="74" height="5" fill="#2a1808" opacity="0.28"/>';
  if (o.belt !== false) s +=
    '<path d="M432,44 Q456,38 468,58 Q472,78 452,84 Q432,88 428,68 Q426,52 442,50" fill="none" stroke="#4a3218" stroke-width="4.5" opacity="0.65" stroke-linecap="round"/>' +
    '<path d="M436,50 Q454,46 462,60 Q466,74 452,79" fill="none" stroke="#6a4a24" stroke-width="2.6" opacity="0.5" stroke-linecap="round"/>' +
    '<path d="M448,36 Q450,40 448,44" fill="none" stroke="#7a828c" stroke-width="1.2" opacity="0.5"/>';
  return s;
}
function wsFloor(w) {
  w = w || 500;
  var seams = [[78, 64], [196, 188], [312, 318], [428, 442]].filter(function (p) { return p[0] < w; });
  return '<rect x="0" y="206" width="' + w + '" height="54" fill="#2a1a0c"/>' +
    '<path d="M0,200 Q' + (w / 2) + ',197 ' + w + ',200 L' + w + ',207 Q' + (w / 2) + ',204 0,207 Z" fill="#5a3a1a"/>' +
    '<path d="' + seams.map(function (p) { return 'M' + p[0] + ',207 L' + p[1] + ',260'; }).join(' ') + '" stroke="#1e1208" stroke-width="1.2" opacity="0.4"/>';
}
// bench top surface at y170 from x0 to x1; legs reach the floor
function wsBench(x0, x1) {
  var a = x0 + 17, b = x1 - 17;
  return '<path d="M' + (x0 + 3) + ',170 L' + (x1 - 3) + ',170 Q' + (x1 + 1) + ',170 ' + x1 + ',175 L' + x0 + ',175 Q' + (x0 - 1) + ',170 ' + (x0 + 3) + ',170 Z" fill="#8a6420"/>' +
    '<rect x="' + x0 + '" y="175" width="' + (x1 - x0) + '" height="6" fill="#6b4e0a"/>' +
    '<rect x="' + (x0 + 3) + '" y="171" width="' + (x1 - x0 - 6) + '" height="2" fill="#c8a855" opacity="0.45"/>' +
    '<path d="M' + a + ',181 L' + (a + 13) + ',181 L' + (a + 10) + ',238 L' + (a - 3) + ',238 Z" fill="#5a3a1a"/>' +
    '<path d="M' + (b - 13) + ',181 L' + b + ',181 L' + (b + 3) + ',238 L' + (b - 10) + ',238 Z" fill="#5a3a1a"/>' +
    '<rect x="' + (a + 10) + '" y="202" width="' + (b - a - 20) + '" height="5" fill="#5a3a1a" opacity="0.7"/>';
}
// Timber stacked under the bench (workshop_1). Planks rest ON each other, bottom
// one on the floor at fy. Seen a little from above and left (light upper left):
// a lit top strip, the front face, a lit end-grain face on the left end with
// rings, ink line last. Each upper plank casts a strip of shadow onto the plank
// below; the stack casts one contact shadow onto the floor.
function wsTimberStack(fy) {
  var T = 6, D = 2.6, K = 3;   // front thickness, top-strip depth, end skew
  var P = [[272, 404], [287, 413], [279, 395]];
  var s = '<ellipse cx="342" cy="' + (fy + 0.6) + '" rx="78" ry="3.2" fill="#140b04" opacity="0.55"/>' +
    '<path d="M404,' + fy + ' h10 l-2,-' + T + ' h-8 Z" fill="#140b04" opacity="0.35"/>';
  P.forEach(function (p, i) {
    var x0 = p[0], x1 = p[1], yb = fy - i * T, yt = yb - T, yk = yt - D;
    // top strip (lit), front face, end grain (lit, it faces the light)
    s += '<path d="M' + x0 + ',' + yt + ' L' + (x0 - K) + ',' + yk + ' L' + (x1 - K) + ',' + yk + ' L' + x1 + ',' + yt + ' Z" fill="#a8823e"/>' +
      '<rect x="' + x0 + '" y="' + yt + '" width="' + (x1 - x0) + '" height="' + T + '" fill="#80602e"/>' +
      '<rect x="' + x0 + '" y="' + (yb - 1.6) + '" width="' + (x1 - x0) + '" height="1.6" fill="#5e4420"/>' +
      '<path d="M' + (x0 + 14) + ',' + (yt + 2.4) + ' q' + ((x1 - x0) * 0.3) + ',-1.2 ' + ((x1 - x0) * 0.62) + ',0.4" stroke="#6a4e24" stroke-width="0.6" fill="none" opacity="0.7"/>' +
      '<path d="M' + x0 + ',' + yt + ' L' + (x0 - K) + ',' + yk + ' L' + (x0 - K) + ',' + (yb - D) + ' L' + x0 + ',' + yb + ' Z" fill="#c09a52"/>' +
      '<path d="M' + (x0 - 2.2) + ',' + (yb - 2.6) + ' a1.6,2.4 0 0,1 1.4,-3.6 M' + (x0 - 1.6) + ',' + (yb - 1.4) + ' a2.6,3.6 0 0,1 1.2,-5.2" stroke="#8a6a30" stroke-width="0.5" fill="none"/>' +
      '<path d="M' + x0 + ',' + yb + ' L' + (x0 - K) + ',' + (yb - D) + ' L' + (x0 - K) + ',' + yk + ' L' + (x1 - K) + ',' + yk + ' L' + x1 + ',' + yt + ' L' + x1 + ',' + yb + ' Z M' + x0 + ',' + yt + ' L' + x1 + ',' + yt + ' M' + x0 + ',' + yt + ' L' + (x0 - K) + ',' + yk + '" fill="none" stroke="#3e2a12" stroke-width="1" stroke-linejoin="round"/>';
    // this plank's shadow on the one below, falling right of its front edge
    if (i > 0) s += '<path d="M' + Math.max(x0, P[i - 1][0]) + ',' + yb + ' H' + Math.min(x1 + 2, P[i - 1][1]) + ' l-' + K + ',-' + D + ' H' + (Math.max(x0, P[i - 1][0]) - K) + ' Z" fill="#140b04" opacity="0.3"/>';
  });
  return s;
}
// Croc's brass puzzle box (workshop_1). Contact point at 0,0, bottom centre,
// for bcArt.on. Croc treatment: base, one shade band (right), one highlight
// (top-left), ink line last. Seams, two dials and a keyhole make it a puzzle box.
function wsPuzzleBox() {
  var ink = '#5a4208';
  return '<ellipse cx="0" cy="0.4" rx="25" ry="2.6" fill="#1a0f06" opacity="0.35"/>' +
    // lid top, seen slightly from above
    '<path d="M-22,-27 L22,-27 L19,-32 L-19,-32 Z" fill="#e0c070"/>' +
    // body
    '<path d="M-22,-27 L22,-27 L22,0 L-22,0 Z" fill="#c8a855"/>' +
    '<path d="M14,-27 L22,-27 L22,0 L14,0 Z" fill="#9a7a2a"/>' +
    '<path d="M-22,-27 L-17,-27 L-17,0 L-22,0 Z" fill="#e8d088" opacity="0.6"/>' +
    // lid band and sliding-panel seams
    '<path d="M-22,-20 H22 M-4,-20 V0 M8,-20 V0" stroke="#8a6a18" stroke-width="0.9" fill="none"/>' +
    '<path d="M-22,-19.2 H22" stroke="#f0d890" stroke-width="0.6" opacity="0.6"/>' +
    // two combination dials, each with a pointer notch
    '<circle cx="-13" cy="-10" r="5" fill="#b08a30" stroke="' + ink + '" stroke-width="0.9"/>' +
    '<circle cx="-13" cy="-10" r="2.6" fill="#d4b860"/>' +
    '<path d="M-13,-10 L-13,-14.4" stroke="' + ink + '" stroke-width="1" stroke-linecap="round"/>' +
    '<circle cx="2" cy="-10" r="3.8" fill="#b08a30" stroke="' + ink + '" stroke-width="0.9"/>' +
    '<path d="M2,-10 L5,-12.6" stroke="' + ink + '" stroke-width="1" stroke-linecap="round"/>' +
    // keyhole on the right panel
    '<circle cx="15" cy="-12" r="1.6" fill="#3a2a08"/><path d="M14.3,-11.5 L15.7,-11.5 L16.2,-7 L13.8,-7 Z" fill="#3a2a08"/>' +
    // corner rivets
    '<circle cx="-19.5" cy="-23.5" r="1" fill="#8a6a18"/><circle cx="19.5" cy="-23.5" r="1" fill="#6a5010"/>' +
    // outline last
    '<path d="M-22,0 L-22,-27 L-19,-32 L19,-32 L22,-27 L22,0 Z M-22,-27 H22" fill="none" stroke="' + ink + '" stroke-width="1.6" stroke-linejoin="round"/>';
}
// the tiny screwdriver, lying on the bench. Contact point bottom centre.
function wsScrewdriver() {
  return '<ellipse cx="0" cy="0.3" rx="17" ry="1.4" fill="#1a0f06" opacity="0.3"/>' +
    '<g transform="rotate(-4)">' +
    '<path d="M-16,-4.6 Q-17,-2.2 -16,0 L-5,0 Q-4,-2.3 -5,-4.6 Z" fill="#a8322a" stroke="#5a1a14" stroke-width="0.8"/>' +
    '<path d="M-15,-3.8 H-6" stroke="#e07060" stroke-width="0.7" opacity="0.6"/>' +
    '<path d="M-5,-2.6 H-3 V-2 H-5 Z" fill="#c8a855"/>' +
    '<path d="M-3,-2.9 L14,-2.6 L15.5,-2.3 L14,-1.9 L-3,-1.6 Z" fill="#a8b0ba" stroke="#5a6068" stroke-width="0.5"/>' +
    '</g>';
}
// Croc for workshop_1, working the box. The approved 'tinker' pose stands
// upright with the near arm hanging, so two things change and nothing else:
// the near (screen-right) arm is swapped for a reach to the box, baked from
// BCRig.arm(22.5, -24,-23 -> -58,-26, bend -8) at the approved arm's width, and
// the near mitt moves to that wrist with the tiny screwdriver in it, tip on
// the box's dial. Pose coordinates: the figure is flipped, so -x is screen right.
// lean: degrees he tips toward the bench, about his feet; the contact shadow
// is split off first so it stays flat on the floor.
function wsCrocAtBox(lean) {
  var arm = '<path d="M-24,-23 Q-41.95,-13.74 -58,-26" fill="none" stroke="#3a8a3a" stroke-width="9" stroke-linecap="round"/>';
  var driver = '<g transform="rotate(22)">' +
    '<path d="M-3,-1.2 L-19,-1.0 L-20.5,0 L-19,1.0 L-3,1.2 Z" fill="#a8b0ba" stroke="#5a6068" stroke-width="0.6"/>' +
    '<path d="M6,-3.4 Q7.5,0 6,3.4 L-3,3 Q-4,0 -3,-3 Z" fill="#a8322a" stroke="#5a1a14" stroke-width="0.9"/></g>';
  var placed = bcApprovedPlace('croc', 'tinker', 0, 50, 150, true);
  var cut = placed.indexOf('<g data-approved-character');
  return placed.slice(0, cut) + '<g transform="rotate(' + lean + ' 0 50)">' + placed.slice(cut)
    .replace(/<path d="M-30\.36 -29\.36[^"]*" fill="#3a8a3a"\/>/, arm)
    .replace(/(<g id="[^"]*left-hand">)<g transform="translate\(-44 27\) scale\(1 1\)">/,
      '$1<g transform="translate(-58 -26)">' + driver) + '</g>';
}
// the bench top as a bcArt surface, so things on it are seated, not placed by eye
function wsBenchTop(x0, x1) { return { name: 'bench', cx: (x0 + x1) / 2, cy: 171.5, rx: (x1 - x0) / 2, ry: 2 }; }

// One letter drum of the Anagram Engine. letter '' = the jammed wheel: blank,
// knocked askew in its window. turning = the drum is rolling (ribs travel down
// its face while the letter holds), for the solved, running engine.
function wsWheel(x, letter, i, mode) {
  var s = '<g transform="translate(' + x + ',124)">';
  if (!letter) s += '<g transform="rotate(-7)">';
  s += '<path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="' + (letter ? '#8a7020' : '#6a5410') + '"/>' +
    '<path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>' +
    '<path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>' +
    '<path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#c8a855" stroke-width="0.8" opacity="0.4"/>' +
    '<path d="M9,-19 Q6,0 9,19" fill="none" stroke="#c8a855" stroke-width="0.8" opacity="0.4"/>';
  if (!letter) {
    // a stripped tooth showing where the gear has slipped, and a tremor as it strains
    s += '<path d="M-6,-2 h12 M-4,3 h8" stroke="#3a2a08" stroke-width="1.6" opacity="0.7" stroke-linecap="round"/>' +
      '<animateTransform attributeName="transform" type="rotate" values="0;1.2;0;-0.8;0" dur="2.7s" repeatCount="indefinite" additive="sum" calcMode="spline" keyTimes="0;0.2;0.45;0.7;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></g>';
  } else if (mode === 'jammed') {
    var d = ['2s', '2.3s', '1.8s', '2.1s'][i], b = ['0s', '0.2s', '0.5s', '0.8s'][i];
    s += '<text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="\'JetBrains Mono\',monospace" font-size="16" font-weight="bold">' + letter +
      '<animate attributeName="opacity" values="1;0.25;1" dur="' + d + '" repeatCount="indefinite" begin="' + b + '" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></text>';
  } else {
    var dr = ['1.1s', '1.25s', '0.95s', '1.15s', '1.05s'][i];
    s += '<path d="M-12,-15 Q0,-17.5 12,-15" fill="none" stroke="#e8c46a" stroke-width="1" opacity="0">' +
      '<animateTransform attributeName="transform" type="translate" values="0,0;0,30" dur="' + dr + '" repeatCount="indefinite" additive="sum"/>' +
      '<animate attributeName="opacity" values="0;0.55;0" dur="' + dr + '" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>' +
      '<text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="\'JetBrains Mono\',monospace" font-size="16" font-weight="bold">' + letter + '</text>';
  }
  return s + '</g>';
}
function wsWheels(mode) {
  var L = mode === 'jammed' ? ['A', 'C', 'H', 'E', ''] : ['B', 'E', 'A', 'C', 'H'];
  return L.map(function (l, i) { return wsWheel(170 + i * 40, l, i, mode); }).join('');
}
// The solved engine: no clue plate; a card slot where the plate was, the drive
// lever on the frame top pulled down, and (mode 'card') a BLANK card sliding out.
function wsRunParts(mode, k) {
  var s = '<!-- the card slot, cut where the clue plate used to be -->' +
    '<path d="M196,147 L304,147 Q307,147 307,150 L307,153 Q307,156 304,156 L196,156 Q193,156 193,153 L193,150 Q193,147 196,147 Z" fill="#8a6a18"/>' +
    '<rect x="198" y="150" width="104" height="3" rx="1.5" fill="#2a1a08"/>' +
    '<path d="M196,156 L304,156" stroke="#e8c46a" stroke-width="0.8" opacity="0.5"/>';
  if (mode === 'card') s +=
    '<!-- a blank card emerging: nothing printed on it; a clip opening down from the slot reveals it, so at t=0 there is no card -->' +
    '<clipPath id="wsCardClip' + k + '"><rect x="206" y="151.5" width="88" height="0">' +
    '<animate attributeName="height" values="0;19" keyTimes="0;1" dur="1.8s" begin="0.3s" fill="freeze" calcMode="spline" keySplines="0.42 0 0.58 1"/></rect></clipPath>' +
    '<g clip-path="url(#wsCardClip' + k + ')"><rect x="208" y="151.5" width="84" height="19" rx="1" fill="#f0e4cc"/>' +
    '<rect x="208" y="151.5" width="84" height="2.2" fill="#2a1a08" opacity="0.28"/>' +
    '<path d="M212,151.5 v16 M288,151.5 v16" stroke="#c8bda0" stroke-width="0.7" opacity="0.7"/></g>';
  // the lever, pivoted on the frame top right, pulled forward and down: at
  // 150 degrees it hangs down the frame's right face, knob clear of the gears
  s += '<!-- the drive lever, pulled -->' +
    '<g transform="translate(350,95)"><g transform="rotate(150)">' +
    '<rect x="-1.8" y="-30" width="3.6" height="30" rx="1.6" fill="#7a828c"/>' +
    '<rect x="-1.8" y="-30" width="1.3" height="30" fill="#c8ccd2" opacity="0.5"/>' +
    '<circle cx="0" cy="-31" r="4.2" fill="#8b2a1a"/><circle cx="-1.3" cy="-32.4" r="1.4" fill="#d07050" opacity="0.7"/>' +
    '</g><path d="M-7,0 Q-7,-6 0,-6 Q7,-6 7,0 Z" fill="#8a7020"/><circle cx="0" cy="-2" r="2" fill="#5a4a10"/></g>';
  return s;
}

// Scene 0: Workshop interior — gears, crossword grids, puzzle boxes on shelves
STORY_SCENES['workshop_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="100%" stop-color="#c8a855"/>
  </linearGradient>
  <radialGradient id="wsLampGlow" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg0)"/>
<!-- Warm lamp glow -->
<circle cx="118" cy="40" r="140" fill="url(#wsLampGlow)"/>
<!-- ====================================================================
     THE WORKSHOP, rebuilt. It had the right ideas already: puzzle boxes,
     crossword grids, a gear, a hanging lamp. All of them were flat rects, and
     the bench was empty: workshop.js ran 270 elements at 7% paths.

     A WORKSHOP READS AS A WORKSHOP BECAUSE OF WORK IN PROGRESS. Not tidiness,
     not furniture: a bench with something half-finished on it, tools within
     reach of a hand, shavings on the floor. An empty bench is a table.
     ==================================================================== -->

<!-- the same room as every workshop shot: plank wall, shelf up left, floor, bench -->
` + wsWall({ belt: false }) + wsFloor() + `

<!-- PEGBOARD with hanging tools: the fastest way to say workshop, and it
     replaces a stretch of blank wall -->
<g transform="translate(120,-4)">
<path d="M28,24 L172,24 L172,96 L28,96 Z" fill="#4a2c14" opacity="0.85"/>
<path d="M28,24 L172,24 L172,27 L28,27 Z" fill="#6b4e0a" opacity="0.7"/>
<!-- a saw, hung by its handle -->
<path d="M46,30 Q44,44 52,58 L88,44 Q70,32 56,29 Z" fill="#9aa3ad" opacity="0.75"/>
<path d="M52,58 Q68,52 88,44" fill="none" stroke="#c8ccd2" stroke-width="1" opacity="0.5"/>
<path d="M52,58 l3,-1.5 l1.5,3 l3,-1.5 l1.5,3 l3,-1.5 l1.5,3 l3,-1.5 l1.5,3 l3,-1.5 l1.5,3 l3,-1.5"
      fill="none" stroke="#c8ccd2" stroke-width="0.8" opacity="0.6"/>
<path d="M42,28 Q38,34 42,40 Q48,38 48,32 Z" fill="#6b4e0a"/>
<!-- two hand planes -->
<path d="M100,36 Q118,32 134,36 L134,46 Q118,50 100,46 Z" fill="#8a5a2a"/>
<path d="M104,34 Q118,30 130,34 L130,38 Q118,34 104,38 Z" fill="#c8a855" opacity="0.7"/>
<path d="M112,36 L120,36 L122,48 L110,48 Z" fill="#6b4e0a"/>
<!-- calipers, open -->
<path d="M148,32 Q146,50 140,64" fill="none" stroke="#9aa3ad" stroke-width="2.4" stroke-linecap="round"/>
<path d="M148,32 Q152,50 160,62" fill="none" stroke="#9aa3ad" stroke-width="2.4" stroke-linecap="round"/>
<circle cx="148" cy="31" r="2.6" fill="#c8a855"/>
<!-- pegboard holes, sparse: enough to read, not so many they become texture -->
<g fill="#2a1808" opacity="0.4">
  <circle cx="38" cy="70" r="1.2"/><circle cx="56" cy="70" r="1.2"/><circle cx="74" cy="70" r="1.2"/>
  <circle cx="92" cy="70" r="1.2"/><circle cx="110" cy="70" r="1.2"/><circle cx="128" cy="70" r="1.2"/>
  <circle cx="146" cy="70" r="1.2"/><circle cx="164" cy="70" r="1.2"/>
  <circle cx="38" cy="84" r="1.2"/><circle cx="56" cy="84" r="1.2"/><circle cx="74" cy="84" r="1.2"/>
  <circle cx="92" cy="84" r="1.2"/><circle cx="110" cy="84" r="1.2"/><circle cx="128" cy="84" r="1.2"/>
</g>
</g>

<!-- SHELF, with a real front edge and things that overhang it -->
<path d="M296,50 L482,50 L482,55 L296,55 Z" fill="#6b4e0a"/>
<path d="M296,50 L482,50 L482,51.6 L296,51.6 Z" fill="#a07d28" opacity="0.6"/>
<path d="M298,55 L480,55 L480,60 L298,60 Z" fill="#2a1808" opacity="0.3"/>
<!-- puzzle boxes, each a lid and a body rather than one rect -->
<path d="M306,28 Q322,25 340,28 L340,50 L306,50 Z" fill="#a0522d"/>
<path d="M306,28 Q322,25 340,28 L340,33 Q322,30 306,33 Z" fill="#c07a48" opacity="0.8"/>
<path d="M310,36 h26" stroke="#c8a855" stroke-width="1.1" opacity="0.7"/>
<path d="M320,33 v17" stroke="#c8a855" stroke-width="0.9" opacity="0.5"/>
<path d="M352,32 Q364,29 378,32 L378,50 L352,50 Z" fill="#8b4513"/>
<path d="M352,32 Q364,29 378,32 L378,36 Q364,33 352,36 Z" fill="#a5643a" opacity="0.8"/>
<circle cx="365" cy="42" r="3.4" fill="none" stroke="#d4a017" stroke-width="1.2" opacity="0.8"/>
<path d="M392,26 Q408,23 424,26 L424,50 L392,50 Z" fill="#b05530"/>
<path d="M392,26 Q408,23 424,26 L424,31 Q408,28 392,31 Z" fill="#cf7a4e" opacity="0.75"/>
<path d="M398,34 h20 M398,40 h20 M398,46 h13" stroke="#c8a855" stroke-width="0.9" opacity="0.55"/>
<!-- a jar of nibs, because a workshop has containers -->
<path d="M440,32 Q448,29 456,32 L457,48 Q448,52 439,48 Z" fill="#8aa8b8" opacity="0.35"/>
<path d="M440,32 Q448,29 456,32 L456,35 Q448,32 440,35 Z" fill="#c8ccd2" opacity="0.5"/>
<path d="M443,38 v9 M447,36 v11 M451,38 v9 M454,40 v7" stroke="#c8a855" stroke-width="1.2" opacity="0.75"/>

<!-- LOWER SHELF, with a stack of grids seen edge-on -->
<path d="M300,96 L444,96 L444,101 L300,101 Z" fill="#6b4e0a"/>
<path d="M300,96 L444,96 L444,97.5 L300,97.5 Z" fill="#a07d28" opacity="0.55"/>
<g transform="rotate(-2 340 90)">
  <path d="M312,78 L368,78 L368,96 L312,96 Z" fill="#f0e4cc" opacity="0.9"/>
  <path d="M312,78 L368,78 L368,80 L312,80 Z" fill="#c8bda0" opacity="0.9"/>
  <path d="M326,78 v18 M340,78 v18 M354,78 v18 M312,84 h56 M312,90 h56" stroke="#8a7550" stroke-width="0.5" opacity="0.5"/>
  <path d="M326,80 h14 v6 h-14 Z M340,86 h14 v6 h-14 Z" fill="#3a2210" opacity="0.6"/>
</g>
<path d="M382,84 Q396,81 410,84 L410,96 L382,96 Z" fill="#7a3a10"/>
<path d="M382,84 Q396,81 410,84 L410,87 Q396,84 382,87 Z" fill="#9a5a2a" opacity="0.7"/>

<!-- ====================================================================
     THE BENCH, with work on it. The bench was a plank on two legs and nothing
     else, which is a table. What makes it a workbench is the vice, the tools
     lying where a hand left them, and the half-built thing in the middle.
     ==================================================================== -->
` + wsBench(49, 451) + `

<!-- everything on the bench sits on its top at y170 -->
<g transform="translate(0,-6)">
<!-- the vice, bolted to the near edge -->
<path d="M196,170 L232,170 L232,182 L196,182 Z" fill="#7a828c"/>
<path d="M196,170 L232,170 L232,173 L196,173 Z" fill="#a8b0ba" opacity="0.6"/>
<path d="M204,182 L224,182 L222,196 L206,196 Z" fill="#6a7078"/>
<path d="M232,176 L248,176 L248,179 L232,179 Z" fill="#9aa3ad"/>
<circle cx="250" cy="177.5" r="4" fill="#7a828c"/>
<path d="M250,173 v9" stroke="#c8ccd2" stroke-width="1.6" opacity="0.8"/>

<!-- the half-built thing: a brass frame with a grid clamped in it, mid-work -->
<path d="M262,142 L338,142 Q342,142 342,146 L342,174 L258,174 L258,146 Q258,142 262,142 Z" fill="#c8a855" opacity="0.35"/>
<path d="M266,146 L334,146 L334,170 L266,170 Z" fill="#f0e4cc" opacity="0.85"/>
<path d="M283,146 v24 M300,146 v24 M317,146 v24 M266,152 h68 M266,158 h68 M266,164 h68"
      stroke="#8a7550" stroke-width="0.55" opacity="0.55"/>
<path d="M283,152 h17 v6 h-17 Z M300,158 h17 v6 h-17 Z M266,164 h17 v6 h-17 Z" fill="#3a2210" opacity="0.6"/>
<path d="M258,142 L258,174 M342,142 L342,174" stroke="#d4a017" stroke-width="2.6" opacity="0.85"/>
<circle cx="258" cy="142" r="2.6" fill="#d4a017"/>
<circle cx="342" cy="142" r="2.6" fill="#d4a017"/>
<circle cx="258" cy="174" r="2.6" fill="#d4a017"/>
<circle cx="342" cy="174" r="2.6" fill="#d4a017"/>

<!-- tools left where a hand put them, not arranged -->
<g transform="rotate(-9 380 170)">
  <path d="M356,168 Q372,166 388,168 L388,172 Q372,174 356,172 Z" fill="#8a5a2a"/>
  <path d="M388,169 L404,169.5 L404,171 L388,171.5 Z" fill="#9aa3ad"/>
</g>
<g transform="rotate(6 400 172)">
  <path d="M386,171 L410,171 L410,174 L386,174 Z" fill="#6a7078"/>
  <path d="M410,170 Q418,172.5 410,175 Z" fill="#c8a855"/>
</g>
<circle cx="358" cy="172" r="2.4" fill="#c8a855" opacity="0.8"/>
<circle cx="364" cy="174" r="1.8" fill="#c8a855" opacity="0.7"/>
<circle cx="370" cy="171" r="2" fill="#c8a855" opacity="0.75"/>
</g>


<!-- THE GEAR on the wall, given teeth that are actually teeth -->
<g transform="translate(108,104)">
  <circle cx="0" cy="0" r="26" fill="#8a8e96" opacity="0.55"/>
  <g fill="#8a8e96" opacity="0.55">
    <path d="M-4,-30 h8 v8 h-8 Z"/><path d="M-4,22 h8 v8 h-8 Z"/>
    <path d="M-30,-4 v8 h8 v-8 Z"/><path d="M22,-4 v8 h8 v-8 Z"/>
    <g transform="rotate(45)"><path d="M-4,-30 h8 v8 h-8 Z"/><path d="M-4,22 h8 v8 h-8 Z"/>
      <path d="M-30,-4 v8 h8 v-8 Z"/><path d="M22,-4 v8 h8 v-8 Z"/></g>
  </g>
  <circle cx="0" cy="0" r="9" fill="#3a2210" opacity="0.6"/>
  <circle cx="0" cy="0" r="26" fill="none" stroke="#c8ccd2" stroke-width="1" opacity="0.25"/>
  <animateTransform attributeName="transform" type="rotate" values="0;360" dur="46s" repeatCount="indefinite" additive="sum"/>
</g>
<g transform="translate(146,82)">
  <circle cx="0" cy="0" r="13" fill="#8a8e96" opacity="0.5"/>
  <g fill="#8a8e96" opacity="0.5">
    <path d="M-2.5,-16 h5 v4 h-5 Z"/><path d="M-2.5,12 h5 v4 h-5 Z"/>
    <path d="M-16,-2.5 v5 h4 v-5 Z"/><path d="M12,-2.5 v5 h4 v-5 Z"/>
  </g>
  <circle cx="0" cy="0" r="4.5" fill="#3a2210" opacity="0.6"/>
  <animateTransform attributeName="transform" type="rotate" values="360;0" dur="24s" repeatCount="indefinite" additive="sum"/>
</g>

<!-- Stored stock sits below the work, leaving the brass puzzle frame clear. -->
<path d="M273 231 H376 V239 H273Z" fill="#6b4e0a"/>
<path d="M278 225 H370 V231 H278Z" fill="#a07d28"/>
<path d="M282 219 H365 V225 H282Z" fill="#8a6420"/>
<path d="M286 221 H359 M283 227 H365 M278 233 H370" stroke="#c8a855" stroke-width=".8" opacity=".35"/>
<path d="M296 219 H301 V238 H296Z M350 219 H355 V238 H350Z" fill="#5a3a1a" opacity=".8"/>
<path d="M393 214 L417 211 V237 L393 240Z" fill="#6b4e0a"/>
<path d="M393 214 L387 208 L411 205 L417 211Z" fill="#a07d28"/>
<path d="M387 208 L393 214 V240 L387 234Z" fill="#5a3a1a"/>
<path d="M397 217 L413 234 M413 215 L397 236" stroke="#a07d28" stroke-width="1.4"/>
<!-- SHAVINGS on the floor under the bench: the detail that says work happened
     here recently, which no amount of tidy furniture can say -->
<path d="M232,240 q6,-5 12,0 q-6,4 -12,0 Z" fill="#c8a855" opacity="0.4"/>
<path d="M256,244 q7,-6 14,0 q-7,5 -14,0 Z" fill="#a07d28" opacity="0.35"/>
<path d="M290,241 q5,-4 10,0 q-5,3 -10,0 Z" fill="#c8a855" opacity="0.3"/>
<path d="M330,245 q8,-6 16,0 q-8,5 -16,0 Z" fill="#a07d28" opacity="0.3"/>
<path d="M370,242 q6,-5 12,0 q-6,4 -12,0 Z" fill="#c8a855" opacity="0.28"/>

<!-- HANGING LAMP, hung in the gap between the left shelf and the pegboard so
     neither the shade nor its cone touches the board or its tools -->
<g transform="translate(-132,-12)">
<path d="M250,0 Q252,9 250,18" fill="none" stroke="#7a828c" stroke-width="1.2"/>
<path d="M234,28 Q236,16 250,16 Q264,16 266,28 Q258,31 250,31 Q242,31 234,28 Z" fill="#c8a855" opacity="0.85"/>
<path d="M238,26 Q240,19 250,19 Q260,19 262,26 Q256,28 250,28 Q244,28 238,26 Z" fill="#e0c070" opacity="0.5"/>
<path d="M234,29 Q250,96 266,29 Q250,35 234,29 Z" fill="#ffd700" opacity="0.07"/>
<ellipse cx="250" cy="30" rx="16" ry="4" fill="#ffd700" opacity="0.28">
  <animate attributeName="opacity" values="0.2;0.34;0.2" dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
</g>
</svg>`;

// Scene 1: Cryptic Croc at workbench, in top hat, spectacles and work apron
STORY_SCENES['workshop_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <radialGradient id="wsWarm" cx="50%" cy="55%" r="45%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.08"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wsBg1)"/>
<circle cx="250" cy="150" r="180" fill="url(#wsWarm)"/>
<!-- the same room as the engine shots: wall, shelf, belt coil, floor, bench -->
` + wsWall() + wsFloor() + `
<!-- timber stacked under the bench, the bottom plank on the floor -->
` + wsTimberStack(237) + wsBench(49, 451) + `
<!-- ====================================================================
     THE BRASS PUZZLE BOX he is mending, seated on the bench top. The tiny
     screwdriver is in his near hand, its tip on the box's dial.
     ==================================================================== -->
` + bcArt.on(wsBenchTop(49, 451), wsPuzzleBox(), { u: 0.15 }) + `
<!-- ====================================================================
     CRYPTIC CROC, leaning toward the bench (rotated about his feet; the
     shadow stays flat), near hand on the box with the screwdriver, wrench
     still up in the far hand. Same 150 height as every other workshop shot.
     ==================================================================== -->
<g transform="translate(192, 185)">` + wsCrocAtBox(8) + `</g>
<!-- hanging lamp over the work -->
<line x1="268" y1="0" x2="268" y2="18" stroke="#888" stroke-width="1"/>
<polygon points="258,18 278,18 283,28 253,28" fill="#c8a855" opacity="0.6"/>
<ellipse cx="268" cy="30" rx="14" ry="3" fill="#ffd700" opacity="0.15"><animate attributeName="opacity" values="0.1;0.2;0.1" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
</svg>`;

// Scene 2: Anagram Engine — brass machine with letter wheels, clue on plate
// mode: 'jammed' (step 2, the BEACH puzzle: scrambled wheels, one jammed, clue
// plate), 'running' (step 3: solved, BEACH on turning wheels, no plate, lever
// pulled), 'card' (steps 4-5: running, a BLANK card emerging from a slot).
// k suffixes every id so the variants never share a gradient id.
function wsEngineScene(mode, k) {
var run = mode !== 'jammed', sp = run ? 0.45 : 1;
function gd(t) { return (t * sp).toFixed(2) + 's'; }
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg2` + k + `" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass2` + k + `" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="50%" stop-color="#c8a855"/><stop offset="100%" stop-color="#b08a30"/>
  </linearGradient>
  <radialGradient id="wsMachGlow` + k + `" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="` + (run ? '0.2' : '0.12') + `"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsPlateGlow` + k + `"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg2` + k + `)"/>
<!-- ====================================================================
     THE ANAGRAM ENGINE. Every idea here was already right: brass housing,
     five letter wheels reading BEACH, the clue plate, rivets, gears either
     side, Croc working it. All of them were flat rects, and the machine
     floated in front of an empty wall.

     A MACHINE READS BY HOW IT IS BUILT: a cast frame with rounded corners
     and a moulded lip, a recessed window the wheels turn behind, feet it
     actually stands on, and a drive train that goes somewhere. The room is
     workshop_0's room, so it gets workshop_0's plank wall and shelf.
     ==================================================================== -->

<!-- back wall, planked like workshop_0 -->
<rect x="0" y="0" width="500" height="132" fill="#3a2210" opacity="0.55"/>
<path d="M0,132 Q250,128 500,132 L500,136 Q250,132 0,136 Z" fill="#5a3a1a"/>
<path d="M64,0 v132 M178,0 v132 M322,0 v132 M436,0 v132" stroke="#2a1808" stroke-width="1.4" opacity="0.35"/>

<!-- a shelf up left, pushed back by a wash of the wall colour -->
<rect x="14" y="54" width="78" height="5" fill="#6b4e0a" opacity="0.8"/>
<rect x="14" y="54" width="78" height="1.6" fill="#a07d28" opacity="0.5"/>
<path d="M22,34 Q36,31 50,34 L50,54 L22,54 Z" fill="#a0522d" opacity="0.7"/>
<path d="M22,34 Q36,31 50,34 L50,38 Q36,35 22,38 Z" fill="#c07a48" opacity="0.6"/>
<path d="M60,38 Q72,35 84,38 L84,54 L60,54 Z" fill="#8b4513" opacity="0.7"/>
<path d="M64,44 h16" stroke="#c8a855" stroke-width="0.8" opacity="0.35"/>
<rect x="16" y="59" width="74" height="5" fill="#2a1808" opacity="0.28"/>

<!-- a coil of drive belt hung on the wall, right, so the wall is not blank -->
<path d="M432,44 Q456,38 468,58 Q472,78 452,84 Q432,88 428,68 Q426,52 442,50"
      fill="none" stroke="#4a3218" stroke-width="4.5" opacity="0.65" stroke-linecap="round"/>
<path d="M436,50 Q454,46 462,60 Q466,74 452,79" fill="none" stroke="#6a4a24" stroke-width="2.6" opacity="0.5" stroke-linecap="round"/>
<path d="M448,36 Q450,40 448,44" fill="none" stroke="#7a828c" stroke-width="1.2" opacity="0.5"/>

<!-- floor, with a board seam so it is a floor and not a band -->
<rect x="0" y="206" width="500" height="54" fill="#2a1a0c"/>
<path d="M0,200 Q250,197 500,200 L500,207 Q250,204 0,207 Z" fill="#5a3a1a"/>
<path d="M78,207 L64,260 M196,207 L188,260 M312,207 L318,260 M428,207 L442,260"
      stroke="#1e1208" stroke-width="1.2" opacity="0.4"/>

<!-- ====================================================================
     THE BENCH, same construction as workshop_0: a top with a moulded front
     edge, legs that reach the floor, a stretcher between them.
     ==================================================================== -->
<path d="M52,170 L448,170 Q452,170 451,175 L49,175 Q48,170 52,170 Z" fill="#8a6420"/>
<rect x="49" y="175" width="402" height="6" fill="#6b4e0a"/>
<rect x="52" y="171" width="396" height="2" fill="#c8a855" opacity="0.45"/>
<path d="M66,181 L79,181 L76,238 L63,238 Z" fill="#5a3a1a"/>
<path d="M421,181 L434,181 L437,238 L424,238 Z" fill="#5a3a1a"/>
<rect x="76" y="202" width="348" height="5" fill="#5a3a1a" opacity="0.7"/>

<!-- machine feet: it stands ON the bench, it does not hover over it -->
<path d="M146,160 L166,160 L169,170 L143,170 Z" fill="#8a7020"/>
<path d="M334,160 L354,160 L357,170 L331,170 Z" fill="#8a7020"/>
<rect x="143" y="170" width="26" height="2" fill="#2a1808" opacity="0.45"/>
<rect x="331" y="170" width="26" height="2" fill="#2a1808" opacity="0.45"/>

<!-- the cast brass frame, with rounded corners and a moulded lip -->
<path d="M138,95 L362,95 Q372,95 372,105 L372,152 Q372,162 362,162 L138,162
         Q128,162 128,152 L128,105 Q128,95 138,95 Z" fill="url(#wsBrass2` + k + `)"/>
<path d="M138,95 L362,95 Q372,95 372,105 L372,109 Q372,100 362,100 L138,100
         Q128,100 128,109 L128,105 Q128,95 138,95 Z" fill="#e8c46a" opacity="0.65"/>
<path d="M128,150 Q128,162 138,162 L362,162 Q372,162 372,150 L372,156
         Q372,166 362,166 L138,166 Q128,166 128,156 Z" fill="#8a6a18" opacity="0.7"/>

<!-- the recessed window the wheels turn behind: a sunk panel, lit top, dark below -->
<path d="M148,105 L352,105 Q356,105 356,109 L356,140 Q356,144 352,144 L148,144
         Q144,144 144,140 L144,109 Q144,105 148,105 Z" fill="#7a5c14"/>
<path d="M148,105 L352,105 Q356,105 356,109 L356,111 L144,111 L144,109 Q144,105 148,105 Z" fill="#5a4208" opacity="0.8"/>
<path d="M144,138 L356,138 L356,141 Q356,144 352,144 L148,144 Q144,144 144,141 Z" fill="#c8a855" opacity="0.35"/>

<!-- rivets on the frame, sunk with a highlight so they are not dots -->
<circle cx="136" cy="103" r="3" fill="#a08830"/>
<path d="M135,102 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.6"/>
<circle cx="364" cy="103" r="3" fill="#a08830"/>
<path d="M363,102 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.6"/>
<circle cx="136" cy="155" r="3" fill="#a08830"/>
<path d="M135,154 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.55"/>
<circle cx="364" cy="155" r="3" fill="#a08830"/>
<path d="M363,154 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.55"/>

<!-- ====================================================================
     THE LETTER WHEELS. Each is a drum seen edge on: a curved barrel with the
     face flattest at the centre, the letter on the face, the rims shaded.
     Jammed: A C H E hunting, the fifth wheel blank and stuck askew, so the
     answer is never shown during the puzzle. Running: BEACH, drums rolling.
     ==================================================================== -->
` + wsWheels(mode) + `
` + (run ? wsRunParts(mode, k) : `<!-- the clue plate, screwed to the front of the frame below the window -->
<path d="M162,146 L338,146 Q342,146 342,150 L342,166 Q342,170 338,170 L162,170
         Q158,170 158,166 L158,150 Q158,146 162,146 Z" fill="#c8a855"/>
<path d="M162,146 L338,146 Q342,146 342,150 L342,151 L158,151 L158,150 Q158,146 162,146 Z" fill="#e8c46a" opacity="0.7"/>
<rect x="166" y="150" width="168" height="16" fill="#b09840" opacity="0.5"/>
<circle cx="163" cy="148" r="2" fill="#8a6a18"/>
<circle cx="337" cy="148" r="2" fill="#8a6a18"/>
<circle cx="163" cy="168" r="2" fill="#8a6a18"/>
<circle cx="337" cy="168" r="2" fill="#8a6a18"/>
<g filter="url(#wsPlateGlow` + k + `)">
  <text x="250" y="157" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="6.5" letter-spacing="0.3">Ache stirred after beginning of</text>
  <text x="250" y="166" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="6.5" letter-spacing="0.3">boating for a sandy shore (5)</text>
</g>`) + `

<!-- ====================================================================
     THE DRIVE GEARS. Real teeth cut into a rim, on a hub with spokes, and
     they mesh with a small idler so the train goes somewhere. Different
     speeds either side, as workshop_0 does.
     ==================================================================== -->
<g transform="translate(104,86)">
  <g>
    <path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/>
    <g transform="rotate(51.4)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(102.8)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(154.2)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(205.7)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(257.1)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(308.6)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <circle cx="0" cy="0" r="20" fill="#8a8e96" opacity="0.7"/>
    <circle cx="0" cy="0" r="14" fill="#3a2210" opacity="0.5"/>
    <rect x="-2.4" y="-14" width="4.8" height="28" fill="#8a8e96" opacity="0.65"/>
    <rect x="-14" y="-2.4" width="28" height="4.8" fill="#8a8e96" opacity="0.65"/>
    <circle cx="0" cy="0" r="6" fill="#6a6e76" opacity="0.85"/>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="` + gd(9) + `" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(132,64)">
  <g>
    <path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/>
    <g transform="rotate(72)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(144)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(216)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(288)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <circle cx="0" cy="0" r="9" fill="#7a7e86" opacity="0.6"/>
    <circle cx="0" cy="0" r="3.4" fill="#3a2210" opacity="0.55"/>
    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="` + gd(4.05) + `" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(404,132)">
  <g>
    <path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/>
    <g transform="rotate(51.4)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(102.8)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(154.2)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(205.7)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(257.1)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(308.6)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <circle cx="0" cy="0" r="20" fill="#8a8e96" opacity="0.7"/>
    <circle cx="0" cy="0" r="14" fill="#3a2210" opacity="0.5"/>
    <rect x="-2.4" y="-14" width="4.8" height="28" fill="#8a8e96" opacity="0.65"/>
    <rect x="-14" y="-2.4" width="28" height="4.8" fill="#8a8e96" opacity="0.65"/>
    <circle cx="0" cy="0" r="6" fill="#6a6e76" opacity="0.85"/>
    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="` + gd(11.5) + `" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(404,96)">
  <g>
    <path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/>
    <g transform="rotate(72)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(144)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(216)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(288)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <circle cx="0" cy="0" r="9" fill="#7a7e86" opacity="0.6"/>
    <circle cx="0" cy="0" r="3.4" fill="#3a2210" opacity="0.55"/>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="` + gd(5.2) + `" repeatCount="indefinite" additive="sum"/>
  </g>
</g>

<!-- machine glow, over the brass -->
<path d="M120,128 Q120,72 250,72 Q380,72 380,128 Q380,184 250,184 Q120,184 120,128 Z" fill="url(#wsMachGlow` + k + `)"/>

<!-- ====================================================================
     CRYPTIC CROC, at the left of the bench, one hand on the engine. His
     kit is the top hat, the spectacles and a leather work apron for the
     bench, with the W smile snout under them.
     ==================================================================== -->
<g transform="translate(75, 185)">` + bcApprovedPlace('croc','tinker',0,50,150,true) + `</g>

<!-- shavings and a dropped washer under the bench: work happened here -->
<path d="M148,240 q6,-5 12,0 q-6,4 -12,0 Z" fill="#c8a855" opacity="0.32"/>
<path d="M212,244 q7,-6 14,0 q-7,5 -14,0 Z" fill="#a07d28" opacity="0.3"/>
<path d="M286,241 q5,-4 10,0 q-5,3 -10,0 Z" fill="#c8a855" opacity="0.26"/>
<path d="M356,245 q8,-6 16,0 q-8,5 -16,0 Z" fill="#a07d28" opacity="0.26"/>
<path d="M258,232 a4,4 0 1,1 0.1,0 Z M258,235 a1.6,1.6 0 1,0 0.1,0 Z" fill="#8a8e96" opacity="0.35" fill-rule="evenodd"/>
</svg>`;
}

STORY_SCENES['workshop_2'] = wsEngineScene('jammed', '');
// 3: solved and running, lever pulled. 4-5: a blank card slides out for each new puzzle.
STORY_SCENES['workshop_3'] = wsEngineScene('running', 'r3');
STORY_SCENES['workshop_4'] = wsEngineScene('card', 'c4');
STORY_SCENES['workshop_5'] = wsEngineScene('card', 'c5');

// Scene 6: Machine calibrated, brass plate with coordinates slides out
STORY_SCENES['workshop_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a2210"/><stop offset="50%" stop-color="#4a2a14"/><stop offset="100%" stop-color="#2a1a0c"/>
  </linearGradient>
  <linearGradient id="wsBrass6" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d4a017"/><stop offset="50%" stop-color="#c8a855"/><stop offset="100%" stop-color="#b08a30"/>
  </linearGradient>
  <radialGradient id="wsMachGlow6" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="wsSolveGlow6" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.14"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="wsPlateGlow6"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg6)"/>
<path d="M120,150 Q120,66 250,66 Q380,66 380,150 Q380,234 250,234 Q120,234 120,150 Z" fill="url(#wsSolveGlow6)"/>
<!-- ====================================================================
     THE ANAGRAM ENGINE. Every idea here was already right: brass housing,
     five letter wheels reading BEACH, the clue plate, rivets, gears either
     side, Croc working it. All of them were flat rects, and the machine
     floated in front of an empty wall.

     A MACHINE READS BY HOW IT IS BUILT: a cast frame with rounded corners
     and a moulded lip, a recessed window the wheels turn behind, feet it
     actually stands on, and a drive train that goes somewhere. The room is
     workshop_0's room, so it gets workshop_0's plank wall and shelf.
     ==================================================================== -->

<!-- back wall, planked like workshop_0 -->
<rect x="0" y="0" width="500" height="132" fill="#3a2210" opacity="0.55"/>
<path d="M0,132 Q250,128 500,132 L500,136 Q250,132 0,136 Z" fill="#5a3a1a"/>
<path d="M64,0 v132 M178,0 v132 M322,0 v132 M436,0 v132" stroke="#2a1808" stroke-width="1.4" opacity="0.35"/>

<!-- a shelf up left, pushed back by a wash of the wall colour -->
<rect x="14" y="54" width="78" height="5" fill="#6b4e0a" opacity="0.8"/>
<rect x="14" y="54" width="78" height="1.6" fill="#a07d28" opacity="0.5"/>
<path d="M22,34 Q36,31 50,34 L50,54 L22,54 Z" fill="#a0522d" opacity="0.7"/>
<path d="M22,34 Q36,31 50,34 L50,38 Q36,35 22,38 Z" fill="#c07a48" opacity="0.6"/>
<path d="M60,38 Q72,35 84,38 L84,54 L60,54 Z" fill="#8b4513" opacity="0.7"/>
<path d="M64,44 h16" stroke="#c8a855" stroke-width="0.8" opacity="0.35"/>
<rect x="16" y="59" width="74" height="5" fill="#2a1808" opacity="0.28"/>

<!-- a coil of drive belt hung on the wall, right, so the wall is not blank -->
<path d="M432,44 Q456,38 468,58 Q472,78 452,84 Q432,88 428,68 Q426,52 442,50"
      fill="none" stroke="#4a3218" stroke-width="4.5" opacity="0.65" stroke-linecap="round"/>
<path d="M436,50 Q454,46 462,60 Q466,74 452,79" fill="none" stroke="#6a4a24" stroke-width="2.6" opacity="0.5" stroke-linecap="round"/>
<path d="M448,36 Q450,40 448,44" fill="none" stroke="#7a828c" stroke-width="1.2" opacity="0.5"/>

<!-- floor, with a board seam so it is a floor and not a band -->
<rect x="0" y="206" width="500" height="54" fill="#2a1a0c"/>
<path d="M0,200 Q250,197 500,200 L500,207 Q250,204 0,207 Z" fill="#5a3a1a"/>
<path d="M78,207 L64,260 M196,207 L188,260 M312,207 L318,260 M428,207 L442,260"
      stroke="#1e1208" stroke-width="1.2" opacity="0.4"/>

<!-- ====================================================================
     THE BENCH, same construction as workshop_0: a top with a moulded front
     edge, legs that reach the floor, a stretcher between them.
     ==================================================================== -->
<path d="M52,170 L448,170 Q452,170 451,175 L49,175 Q48,170 52,170 Z" fill="#8a6420"/>
<rect x="49" y="175" width="402" height="6" fill="#6b4e0a"/>
<rect x="52" y="171" width="396" height="2" fill="#c8a855" opacity="0.45"/>
<path d="M66,181 L79,181 L76,238 L63,238 Z" fill="#5a3a1a"/>
<path d="M421,181 L434,181 L437,238 L424,238 Z" fill="#5a3a1a"/>
<rect x="76" y="202" width="348" height="5" fill="#5a3a1a" opacity="0.7"/>

<!-- machine feet: it stands ON the bench, it does not hover over it -->
<path d="M146,160 L166,160 L169,170 L143,170 Z" fill="#8a7020"/>
<path d="M334,160 L354,160 L357,170 L331,170 Z" fill="#8a7020"/>
<rect x="143" y="170" width="26" height="2" fill="#2a1808" opacity="0.45"/>
<rect x="331" y="170" width="26" height="2" fill="#2a1808" opacity="0.45"/>

<!-- the cast brass frame, with rounded corners and a moulded lip -->
<path d="M138,95 L362,95 Q372,95 372,105 L372,152 Q372,162 362,162 L138,162
         Q128,162 128,152 L128,105 Q128,95 138,95 Z" fill="url(#wsBrass6)"/>
<path d="M138,95 L362,95 Q372,95 372,105 L372,109 Q372,100 362,100 L138,100
         Q128,100 128,109 L128,105 Q128,95 138,95 Z" fill="#e8c46a" opacity="0.65"/>
<path d="M128,150 Q128,162 138,162 L362,162 Q372,162 372,150 L372,156
         Q372,166 362,166 L138,166 Q128,166 128,156 Z" fill="#8a6a18" opacity="0.7"/>

<!-- the recessed window the wheels turn behind: a sunk panel, lit top, dark below -->
<path d="M148,105 L352,105 Q356,105 356,109 L356,140 Q356,144 352,144 L148,144
         Q144,144 144,140 L144,109 Q144,105 148,105 Z" fill="#7a5c14"/>
<path d="M148,105 L352,105 Q356,105 356,109 L356,111 L144,111 L144,109 Q144,105 148,105 Z" fill="#5a4208" opacity="0.8"/>
<path d="M144,138 L356,138 L356,141 Q356,144 352,144 L148,144 Q144,144 144,141 Z" fill="#c8a855" opacity="0.35"/>

<!-- rivets on the frame, sunk with a highlight so they are not dots -->
<circle cx="136" cy="103" r="3" fill="#a08830"/>
<path d="M135,102 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.6"/>
<circle cx="364" cy="103" r="3" fill="#a08830"/>
<path d="M363,102 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.6"/>
<circle cx="136" cy="155" r="3" fill="#a08830"/>
<path d="M135,154 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.55"/>
<circle cx="364" cy="155" r="3" fill="#a08830"/>
<path d="M363,154 a2,2 0 0,1 3,0 Z" fill="#e0c070" opacity="0.55"/>

<!-- ====================================================================
     THE LETTER WHEELS. Each is a drum seen edge on: a curved barrel with the
     face flattest at the centre, the letter on the face, the rims shaded.
     The letters flicker as the wheels hunt, which the scene already did.
     ==================================================================== -->
<g transform="translate(170,124)">
  <path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="#8a7020"/>
  <path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <path d="M9,-19 Q6,0 9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="16" font-weight="bold">
    B
  </text>
</g>
<g transform="translate(210,124)">
  <path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="#8a7020"/>
  <path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <path d="M9,-19 Q6,0 9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="16" font-weight="bold">
    E
  </text>
</g>
<g transform="translate(250,124)">
  <path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="#8a7020"/>
  <path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <path d="M9,-19 Q6,0 9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="16" font-weight="bold">
    A
  </text>
</g>
<g transform="translate(290,124)">
  <path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="#8a7020"/>
  <path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <path d="M9,-19 Q6,0 9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="16" font-weight="bold">
    C
  </text>
</g>
<g transform="translate(330,124)">
  <path d="M-13,-18 Q0,-21 13,-18 L13,18 Q0,21 -13,18 Z" fill="#8a7020"/>
  <path d="M-13,-18 Q0,-21 13,-18 L13,-13 Q0,-16 -13,-13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-13,13 Q0,16 13,13 L13,18 Q0,21 -13,18 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,-19 Q-6,0 -9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <path d="M9,-19 Q6,0 9,19" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="16" font-weight="bold">
    H
  </text>
</g>

<!-- ====================================================================
     THE COORDINATES PLATE, delivered. It slides out of a slot in the frame,
     so the slot is drawn first and the plate emerges FROM it: a plate that
     simply fades in over the brass is a label, not a mechanism.
     ==================================================================== -->
<!-- the delivery slot, a dark recess with a lip -->
<path d="M186,146 L314,146 Q318,146 318,150 L318,158 Q318,162 314,162 L186,162
         Q182,162 182,158 L182,150 Q182,146 186,146 Z" fill="#4a3608"/>
<path d="M186,146 L314,146 Q318,146 318,150 L318,151 L182,151 L182,150 Q182,146 186,146 Z" fill="#2a1e04" opacity="0.8"/>
<!-- the plate itself, riding out of the slot on a slow eased slide -->
<g>
  <animateTransform attributeName="transform" type="translate" values="0,-16;0,0" dur="1.8s"
                    fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.22 0.9 0.3 1"/>
  <path d="M192,156 L308,156 Q312,156 312,160 L312,178 Q312,182 308,182 L192,182
           Q188,182 188,178 L188,160 Q188,156 192,156 Z" fill="#c8a855"/>
  <path d="M192,156 L308,156 Q312,156 312,160 L312,161 L188,161 L188,160 Q188,156 192,156 Z" fill="#e8c46a" opacity="0.75"/>
  <path d="M188,176 L312,176 L312,178 Q312,182 308,182 L192,182 Q188,182 188,178 Z" fill="#8a6a18" opacity="0.65"/>
  <rect x="196" y="161" width="108" height="16" fill="#b09840" opacity="0.45"/>
  <circle cx="194" cy="159" r="1.8" fill="#8a6a18"/>
  <circle cx="306" cy="159" r="1.8" fill="#8a6a18"/>
  <g filter="url(#wsPlateGlow6)">
    <text x="250" y="173" text-anchor="middle" fill="#3a2210" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="bold" letter-spacing="0.5">COORDINATES: SOUTH</text>
  </g>
</g>

<!-- ====================================================================
     THE DRIVE GEARS. Real teeth cut into a rim, on a hub with spokes, and
     they mesh with a small idler so the train goes somewhere. Different
     speeds either side, as workshop_0 does.
     ==================================================================== -->
<g transform="translate(104,86)">
  <g>
    <path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/>
    <g transform="rotate(51.4)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(102.8)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(154.2)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(205.7)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(257.1)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(308.6)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <circle cx="0" cy="0" r="20" fill="#8a8e96" opacity="0.7"/>
    <circle cx="0" cy="0" r="14" fill="#3a2210" opacity="0.5"/>
    <rect x="-2.4" y="-14" width="4.8" height="28" fill="#8a8e96" opacity="0.65"/>
    <rect x="-14" y="-2.4" width="28" height="4.8" fill="#8a8e96" opacity="0.65"/>
    <circle cx="0" cy="0" r="6" fill="#6a6e76" opacity="0.85"/>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6.5s" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(132,64)">
  <g>
    <path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/>
    <g transform="rotate(72)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(144)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(216)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(288)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <circle cx="0" cy="0" r="9" fill="#7a7e86" opacity="0.6"/>
    <circle cx="0" cy="0" r="3.4" fill="#3a2210" opacity="0.55"/>
    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="2.9s" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(392,88)">
  <g>
    <path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/>
    <g transform="rotate(51.4)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(102.8)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(154.2)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(205.7)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(257.1)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <g transform="rotate(308.6)"><path d="M0,-20 L4,-19.2 L4.6,-27 L-4.6,-27 L-4,-19.2 Z" fill="#8a8e96" opacity="0.7"/></g>
    <circle cx="0" cy="0" r="20" fill="#8a8e96" opacity="0.7"/>
    <circle cx="0" cy="0" r="14" fill="#3a2210" opacity="0.5"/>
    <rect x="-2.4" y="-14" width="4.8" height="28" fill="#8a8e96" opacity="0.65"/>
    <rect x="-14" y="-2.4" width="28" height="4.8" fill="#8a8e96" opacity="0.65"/>
    <circle cx="0" cy="0" r="6" fill="#6a6e76" opacity="0.85"/>
    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="8.2s" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
<g transform="translate(362,62)">
  <g>
    <path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/>
    <g transform="rotate(72)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(144)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(216)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <g transform="rotate(288)"><path d="M0,-9 L2.4,-8.4 L2.8,-13 L-2.8,-13 L-2.4,-8.4 Z" fill="#7a7e86" opacity="0.6"/></g>
    <circle cx="0" cy="0" r="9" fill="#7a7e86" opacity="0.6"/>
    <circle cx="0" cy="0" r="3.4" fill="#3a2210" opacity="0.55"/>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="3.7s" repeatCount="indefinite" additive="sum"/>
  </g>
</g>

<!-- machine glow, over the brass -->
<path d="M120,128 Q120,72 250,72 Q380,72 380,128 Q380,184 250,184 Q120,184 120,128 Z" fill="url(#wsMachGlow6)"/>

<!-- ====================================================================
     CRYPTIC CROC, crossed to the far end of the bench to read the plate. His
     kit matches the near shot; only the placement and the mirrored facing
     differ, and one arm is folded in thought instead of reaching.
     ==================================================================== -->
<g transform="translate(425.9, 185)">` + bcApprovedPlace('croc','think',0,62.2,150,false) + `</g>

<!-- sparks lifting off the engine, drifting and fading so the loop has no seam -->
<circle cx="200" cy="94" r="1.5" fill="#ffd700" opacity="0">
  <animate attributeName="cy" values="94;66" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.5 1"/>
  <animate attributeName="cx" values="200;196" dur="2.6s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0;0.75;0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
</circle>
<circle cx="256" cy="92" r="1.1" fill="#ffa040" opacity="0">
  <animate attributeName="cy" values="92;58" dur="3.4s" repeatCount="indefinite" begin="0.7s" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.5 1"/>
  <animate attributeName="cx" values="256;262" dur="3.4s" repeatCount="indefinite" begin="0.7s"/>
  <animate attributeName="opacity" values="0;0.65;0" dur="3.4s" repeatCount="indefinite" begin="0.7s" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
</circle>
<circle cx="312" cy="95" r="1.4" fill="#ffd700" opacity="0">
  <animate attributeName="cy" values="95;62" dur="3s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.5 1"/>
  <animate attributeName="cx" values="312;308" dur="3s" repeatCount="indefinite" begin="1.5s"/>
  <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0;0.3;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
</circle>

<!-- shavings and a dropped washer under the bench: work happened here -->
<path d="M148,240 q6,-5 12,0 q-6,4 -12,0 Z" fill="#c8a855" opacity="0.32"/>
<path d="M212,244 q7,-6 14,0 q-7,5 -14,0 Z" fill="#a07d28" opacity="0.3"/>
<path d="M286,241 q5,-4 10,0 q-5,3 -10,0 Z" fill="#c8a855" opacity="0.26"/>
<path d="M356,245 q8,-6 16,0 q-8,5 -16,0 Z" fill="#a07d28" opacity="0.26"/>
<path d="M258,232 a4,4 0 1,1 0.1,0 Z M258,235 a1.6,1.6 0 1,0 0.1,0 Z" fill="#8a8e96" opacity="0.35" fill-rule="evenodd"/>
</svg>`;

// Scene 7 (complete): Anagram Engine projects golden beam southward to coastline
STORY_SCENES['workshop_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wsBg4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a1a0c"/><stop offset="40%" stop-color="#3a2210"/><stop offset="100%" stop-color="#1a1208"/>
  </linearGradient>
  <linearGradient id="wsBeam" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.6"/><stop offset="50%" stop-color="#ffa040" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.1"/>
  </linearGradient>
  <radialGradient id="wsBeamSource" cx="30%" cy="50%" r="30%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wsCoast" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a8ab5"/><stop offset="100%" stop-color="#2a6a95"/>
  </linearGradient>
  <linearGradient id="wsNight7" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20304a"/><stop offset="60%" stop-color="#2e4460"/><stop offset="100%" stop-color="#4a6478"/>
  </linearGradient>
  <filter id="wsBeamGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wsBg4)"/>
<!-- ====================================================================
     THE BEAM GOES SOUTH. Every idea survives: the engine still reads BEACH,
     the golden beam still runs from it out to a coastline, particles still
     travel the beam, Croc still watches it go.

     What changed is that the vista was a RECT with a hard vertical edge, and
     a window is a hole in a wall: it reads by its reveal, its sill, and the
     wall thickness you can see through the opening. The coastline behind it
     is headlands and surf, not a blue band on a sand band.
     ==================================================================== -->

<!-- interior wall, planked like the rest of the workshop -->
` + wsWall({ w: 262, belt: false }) + `

<!-- ====================================================================
     THE WINDOW. Cut into the wall on the right: a splayed reveal so you can
     see the wall is thick, a stone sill that catches the light from outside,
     and an arched head. The night outside is a separate, cooler value band so
     inside and outside cannot fuse.
     ==================================================================== -->
<!-- the whole window (opening, sea, shore, reveal, sill) is drawn at its
     old width and narrowed to 0.55 about the sill's left end, x 474 -> 388, so
     Croc can stand fully in frame on the plain wall to its right -->
<g transform="translate(282 0) scale(0.55 1) translate(-282 0)">
<!-- the opening, filled with night -->
<path d="M292,208 L292,72 Q378,34 464,72 L464,208 Z" fill="url(#wsNight7)"/>
<!-- sea, with a horizon that is not the frame edge -->
<rect x="292" y="150" width="172" height="58" fill="url(#wsCoast)" opacity="0.55"/>
<!-- distant headlands, back to front, each darker as it nears -->
<path d="M292,150 Q316,138 340,144 Q356,148 372,146 Q392,140 412,147 Q440,152 464,148 L464,154 L292,154 Z"
      fill="#2a3a52" opacity="0.7"/>
<path d="M292,158 Q322,150 348,156 Q372,161 396,155 Q432,148 464,157 L464,164 L292,164 Z"
      fill="#22303f" opacity="0.75"/>
<!-- surf lines: a sea reads by where it breaks -->
<path d="M296,172 q14,-3 28,0 M336,178 q16,-3 32,0 M382,174 q13,-3 26,0 M418,180 q15,-3 30,0"
      fill="none" stroke="#8ac0d8" stroke-width="1.1" opacity="0.35" stroke-linecap="round"/>
<path d="M302,188 q18,-4 36,0 M352,193 q17,-3 34,0 M400,187 q16,-3 32,0"
      fill="none" stroke="#8ac0d8" stroke-width="1" opacity="0.25" stroke-linecap="round"/>
<!-- the sandy shore the beam is pointing at -->
<path d="M292,196 Q330,190 366,194 Q404,188 440,195 Q454,197 464,194 L464,208 L292,208 Z"
      fill="#c8b870" opacity="0.4"/>
<path d="M292,199 Q332,194 368,197 Q406,192 464,198 L464,202 Q406,196 368,201 Q332,198 292,203 Z"
      fill="#e0d090" opacity="0.28"/>
<!-- the reveal: the wall has thickness, so the jamb is visible on the near side -->
<path d="M292,208 L292,72 Q378,34 464,72 L464,80 Q378,44 300,80 L300,208 Z" fill="#4a2c14" opacity="0.85"/>
<path d="M292,208 L292,72 Q378,34 464,72 L464,76 Q378,39 296,76 L296,208 Z" fill="#6b4e0a" opacity="0.5"/>
<!-- the stone sill, lit from outside -->
<path d="M286,206 L470,206 L474,216 L282,216 Z" fill="#6b4e0a"/>
<rect x="286" y="206" width="184" height="3" fill="#a07d28" opacity="0.6"/>
<rect x="282" y="216" width="192" height="4" fill="#2a1808" opacity="0.4"/>
</g>

<!-- floor, interior only -->
` + wsFloor(286) + `
<!-- the floor carries on under the window wall, so he stands on something -->
<rect x="286" y="220" width="214" height="40" fill="#2a1a0c"/>
<path d="M286,220 L500,220" stroke="#1e1208" stroke-width="1.2" opacity="0.5"/>

<!-- machine glow source, over the wall -->
<circle cx="120" cy="132" r="100" fill="url(#wsBeamSource)"/>

<!-- ====================================================================
     THE BENCH the engine stands on, so it is not floating. Same build as the
     other workshop scenes: moulded top edge, legs to the floor, a stretcher.
     ==================================================================== -->
` + wsBench(15, 251) + `

<!-- the engine stands on the bench top at y170 -->
<g transform="translate(0,-6)">
<!-- the engine's feet -->
<path d="M46,166 L62,166 L65,176 L43,176 Z" fill="#8a7020"/>
<path d="M170,166 L186,166 L189,176 L167,176 Z" fill="#8a7020"/>

<!-- the cast brass frame, same construction as workshop_2, smaller in the shot -->
<path d="M44,100 L188,100 Q196,100 196,108 L196,158 Q196,166 188,166 L44,166
         Q36,166 36,158 L36,108 Q36,100 44,100 Z" fill="#c8a855"/>
<path d="M44,100 L188,100 Q196,100 196,108 L196,112 Q196,104 188,104 L44,104
         Q36,104 36,112 L36,108 Q36,100 44,100 Z" fill="#e8c46a" opacity="0.6"/>
<path d="M36,156 Q36,166 44,166 L188,166 Q196,166 196,156 L196,160 Q196,170 188,170
         L44,170 Q36,170 36,160 Z" fill="#8a6a18" opacity="0.6"/>
<!-- the recessed wheel window -->
<path d="M50,112 L182,112 Q186,112 186,116 L186,142 Q186,146 182,146 L50,146
         Q46,146 46,142 L46,116 Q46,112 50,112 Z" fill="#7a5c14"/>
<path d="M50,112 L182,112 Q186,112 186,116 L186,118 L46,118 L46,116 Q46,112 50,112 Z" fill="#5a4208" opacity="0.8"/>
<circle cx="42" cy="107" r="2.4" fill="#a08830"/>
<circle cx="190" cy="107" r="2.4" fill="#a08830"/>
<circle cx="42" cy="159" r="2.4" fill="#a08830"/>
<circle cx="190" cy="159" r="2.4" fill="#a08830"/>

<!-- letter wheels, locked on BEACH, drawn as drums like the other engine shots -->
<g transform="translate(66,129)">
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,13 Q0,15.5 -9,13 Z" fill="#8a7020"/>
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,-9.6 Q0,-12 -9,-9.6 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,9.6 Q0,12 9,9.6 L9,13 Q0,15.5 -9,13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-6.2,-14 Q-4.2,0 -6.2,14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.55"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="bold">B</text>
</g>
<g transform="translate(90,129)">
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,13 Q0,15.5 -9,13 Z" fill="#8a7020"/>
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,-9.6 Q0,-12 -9,-9.6 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,9.6 Q0,12 9,9.6 L9,13 Q0,15.5 -9,13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-6.2,-14 Q-4.2,0 -6.2,14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.55"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="bold">E</text>
</g>
<g transform="translate(114,129)">
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,13 Q0,15.5 -9,13 Z" fill="#8a7020"/>
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,-9.6 Q0,-12 -9,-9.6 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,9.6 Q0,12 9,9.6 L9,13 Q0,15.5 -9,13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-6.2,-14 Q-4.2,0 -6.2,14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.55"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="bold">A</text>
</g>
<g transform="translate(138,129)">
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,13 Q0,15.5 -9,13 Z" fill="#8a7020"/>
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,-9.6 Q0,-12 -9,-9.6 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,9.6 Q0,12 9,9.6 L9,13 Q0,15.5 -9,13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-6.2,-14 Q-4.2,0 -6.2,14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.55"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="bold">C</text>
</g>
<g transform="translate(162,129)">
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,13 Q0,15.5 -9,13 Z" fill="#8a7020"/>
  <path d="M-9,-13 Q0,-15.5 9,-13 L9,-9.6 Q0,-12 -9,-9.6 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-9,9.6 Q0,12 9,9.6 L9,13 Q0,15.5 -9,13 Z" fill="#5a4a10" opacity="0.8"/>
  <path d="M-6.2,-14 Q-4.2,0 -6.2,14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.55"/>
  <text x="0" y="4" text-anchor="middle" fill="#ffd700" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="bold">H</text>
</g>

<!-- the drive gear, spinning fast: real teeth on a spoked hub -->
<g transform="translate(24,92)">
  <g>
    <path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/>
    <g transform="rotate(60)"><path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/></g>
    <g transform="rotate(120)"><path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/></g>
    <g transform="rotate(180)"><path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/></g>
    <g transform="rotate(240)"><path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/></g>
    <g transform="rotate(300)"><path d="M0,-14 L2.8,-13.4 L3.3,-19 L-3.3,-19 L-2.8,-13.4 Z" fill="#8a8e96" opacity="0.55"/></g>
    <circle cx="0" cy="0" r="14" fill="#8a8e96" opacity="0.55"/>
    <circle cx="0" cy="0" r="9.5" fill="#2a1a0c" opacity="0.5"/>
    <rect x="-1.8" y="-9.5" width="3.6" height="19" fill="#8a8e96" opacity="0.5"/>
    <rect x="-9.5" y="-1.8" width="19" height="3.6" fill="#8a8e96" opacity="0.5"/>
    <circle cx="0" cy="0" r="4" fill="#6a6e76" opacity="0.7"/>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="3.4s" repeatCount="indefinite" additive="sum"/>
  </g>
</g>
</g>

<!-- ====================================================================
     THE BEAM. It leaves the engine, crosses the room, passes THROUGH the
     window opening and lands on the shore. Drawn as three strands of
     different width and opacity, because one stroke reads as a wire.
     ==================================================================== -->
<g filter="url(#wsBeamGlow)">
  <path d="M196,126 Q250,138 291.9,158 Q315.0,177 337.0,196" fill="none" stroke="url(#wsBeam)" stroke-width="9" stroke-linecap="round" opacity="0.6">
    <animate attributeName="opacity" values="0.45;0.72;0.45" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M196,124 Q252,135 293.0,155 Q316.1,174 338.1,193" fill="none" stroke="#ffd700" stroke-width="2.2" stroke-linecap="round" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.7s" repeatCount="indefinite" begin="0.4s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M196,129 Q248,141 290.8,161 Q313.9,180 335.9,199" fill="none" stroke="#ffa040" stroke-width="1.2" stroke-linecap="round" opacity="0.3">
    <animate attributeName="opacity" values="0.18;0.42;0.18" dur="5.3s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
<!-- where the beam lands: a pool of light on the sand -->
<path d="M324.9,195 Q337.0,190 346.9,196 Q337.0,203 324.9,200 Z" fill="#ffd700" opacity="0.22">
  <animate attributeName="opacity" values="0.14;0.3;0.14" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- beam particles, riding the beam out to the coast -->
<circle cx="196" cy="126" r="2" fill="#ffd700" opacity="0">
  <animate attributeName="cx" values="196;291.9;337.0" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="cy" values="126;158;196" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="opacity" values="0;0.85;0" dur="3.6s" repeatCount="indefinite" keyTimes="0;0.3;1"/>
</circle>
<circle cx="196" cy="126" r="1.5" fill="#ffa040" opacity="0">
  <animate attributeName="cx" values="196;291.9;337.0" dur="3.6s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="cy" values="126;158;196" dur="3.6s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="opacity" values="0;0.7;0" dur="3.6s" repeatCount="indefinite" begin="1.2s" keyTimes="0;0.3;1"/>
</circle>
<circle cx="196" cy="126" r="1.8" fill="#ffd700" opacity="0">
  <animate attributeName="cx" values="196;291.9;337.0" dur="3.6s" repeatCount="indefinite" begin="2.4s" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="cy" values="126;158;196" dur="3.6s" repeatCount="indefinite" begin="2.4s" calcMode="spline" keyTimes="0;0.55;1" keySplines="0.3 0 0.7 1;0.3 0 0.7 1"/>
  <animate attributeName="opacity" values="0;0.75;0" dur="3.6s" repeatCount="indefinite" begin="2.4s" keyTimes="0;0.3;1"/>
</circle>

<!-- ====================================================================
     CRYPTIC CROC, full 150 height like every workshop shot, on the wall to
     the right of the narrowed window, facing it, a hand up at his spectacles
     ("adjusts his spectacles and nods"). The 'think' pose is 100 wide, so he
     sits fully inside the frame and clear of the window, sill and beam.
     ==================================================================== -->
<g transform="translate(449, 200)">` + bcApprovedPlace('croc','think',0,50,150,false) + `</g>
<!-- his contact shadow comes from bcApprovedPlace now -->

<!-- warm sparks lifting off the engine -->
<circle cx="152" cy="96" r="1.5" fill="#ffd700" opacity="0">
  <animate attributeName="cy" values="96;62" dur="3.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.5 1"/>
  <animate attributeName="cx" values="152;147" dur="3.1s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0;0.6;0" dur="3.1s" repeatCount="indefinite" keyTimes="0;0.3;1"/>
</circle>
<circle cx="96" cy="94" r="1.1" fill="#ffa040" opacity="0">
  <animate attributeName="cy" values="94;56" dur="3.9s" repeatCount="indefinite" begin="0.9s" calcMode="spline" keyTimes="0;1" keySplines="0.2 0.6 0.5 1"/>
  <animate attributeName="cx" values="96;101" dur="3.9s" repeatCount="indefinite" begin="0.9s"/>
  <animate attributeName="opacity" values="0;0.5;0" dur="3.9s" repeatCount="indefinite" begin="0.9s" keyTimes="0;0.3;1"/>
</circle>
</svg>`;
