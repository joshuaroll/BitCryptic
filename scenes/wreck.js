// Wreck story scenes — "Why does anyone stay down here?"
// Keys: wreck_0 through wreck_11, wreck_return_0 through wreck_return_5
// Palette: cold undersea greens (#07141a #0d2028 #133440 #1a4a55),
// amber lamps (#F2C14E #ffd700 #ffeaa7) as the only warm colour in frame.

// ---------------------------------------------------------------------------
// THE CHARACTER MODEL
// ---------------------------------------------------------------------------
// There is ONE Fredward. Before this block existed, every scene hand built him
// from scratch and his helmet radius ranged from 18 to 25 with no scale
// transform to explain it, so he changed size and build from frame to frame.
// Everything below is expressed as a multiple of the helmet radius h, so a
// change of scale moves the whole figure together and cannot drift.
//
// Reference scale is wreck_2: h = 21 at "standing on deck, mid shot".
//
// Hardhat diver proportions, locked:
//   helmet radius        h        the head
//   full standing height 8.65 h   4.3 helmet diameters
//   shoulder half width  1.6 h
//   torso length         2.6 h
//   leg length           3.5 h
//   boot                 1.05 h wide, heavy
//   limb thickness       0.52 h   the suit is bulky, so the silhouette is a
//                                 soft rectangle and never an hourglass
//
// He ALWAYS has: helmet, neck ring, torso, two arms with visible hands, two
// legs, two boots, and an air hose running off behind him. If a pose hides a
// part, the pose is wrong.
//
// Every function takes a suffix s and builds its gradient ids from it, so two
// scenes can both call fred() without their url(#id) references colliding.

var WSUIT_A = '#2e4a3c', WSUIT_B = '#40614e', WSUIT_C = '#22382e';
var WSUIT_SEAM = '#1c2f26';
var WBRASS_A = '#c9962e', WBRASS_B = '#8b6914', WBRASS_C = '#5c4409';
var WGLOVE = '#40614e', WGLOVE_D = '#3a5847', WGLOVE_L = '#5b8069';
var WHOSE = '#2a3a2c';
var WPLAYER = '#132c30', WPLAYER_L = '#1a4a55', WPLAYER_H = '#1a3a3e';

function wn(v) { return Math.round(v * 100) / 100; }

// The shared defs any scene carrying a figure needs. Call once per scene.
function wDefs(s) {
  return '<linearGradient id="wSuit' + s + '" x1="0" y1="0" x2="1" y2="0">' +
    '<stop offset="0%" stop-color="' + WSUIT_A + '"/><stop offset="52%" stop-color="' + WSUIT_B + '"/><stop offset="100%" stop-color="' + WSUIT_C + '"/>' +
    '</linearGradient>' +
    '<linearGradient id="wBrass' + s + '" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="' + WBRASS_A + '"/><stop offset="50%" stop-color="' + WBRASS_B + '"/><stop offset="100%" stop-color="' + WBRASS_C + '"/>' +
    '</linearGradient>' +
    '<radialGradient id="wGlass' + s + '" cx="42%" cy="72%" r="82%">' +
    '<stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>' +
    '<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>' +
    '<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>' +
    '</radialGradient>';
}

// THE FACEPLATE. Dark recessed glass, a face dimly behind it, heavy brass rim
// with bolts, specular sweep. This treatment was a deliberate fix and it
// works, so it lives in exactly one place and every scene gets the same one.
// r is the glass radius, expr picks the eyes, flip draws him inverted.
function wFace(s, r, expr, dur, flip) {
  var k = r / 15.5;
  var o = '';
  var g = function (v) { return wn(v * k); };
  o += '<circle cx="0" cy="0" r="' + wn(r) + '" fill="url(#wGlass' + s + ')"/>';
  o += '<g opacity="0.82"' + (flip ? ' transform="rotate(180,0,' + g(2.69) + ')"' : '') + '>';
  o += '<ellipse cx="0" cy="' + g(2.69) + '" rx="' + g(8.68) + '" ry="' + g(9.92) + '" fill="#9c7a5e"/>';
  o += '<path d="M' + g(-8.68) + ',' + g(1.03) + ' Q0,' + g(-7.85) + ' ' + g(8.68) + ',' + g(1.03) +
    ' L' + g(8.68) + ',' + g(-4.13) + ' Q0,' + g(-9.71) + ' ' + g(-8.68) + ',' + g(-4.13) + ' Z" fill="#6d523d" opacity="0.55"/>';
  o += '<path d="M' + g(-6.82) + ',' + g(-1.45) + ' Q0,' + g(-4.34) + ' ' + g(6.82) + ',' + g(-1.45) +
    '" fill="none" stroke="#5a4131" stroke-width="' + g(1.55) + '" stroke-linecap="round" opacity="0.8"/>';
  o += '<path d="M0,' + g(0.41) + ' L' + g(-0.83) + ',' + g(4.34) + ' Q0,' + g(5.37) + ' ' + g(1.45) + ',' + g(4.55) +
    '" fill="none" stroke="#7a5c45" stroke-width="' + g(1.24) + '" stroke-linecap="round" opacity="0.8"/>';
  if (expr === 'closed') {
    o += (flip ? '<g transform="rotate(180,0,' + g(2.69) + ')">' : '<g>') +
      '<path d="M' + g(-5.04) + ',' + g(0.56) + ' Q' + g(-3.17) + ',' + g(-1.49) + ' ' + g(-1.31) + ',' + g(0.56) +
      '" fill="none" stroke="#2a1d12" stroke-width="' + g(1.4) + '" stroke-linecap="round"/>' +
      '<path d="M' + g(1.31) + ',' + g(0.56) + ' Q' + g(3.17) + ',' + g(-1.49) + ' ' + g(5.04) + ',' + g(0.56) +
      '" fill="none" stroke="#2a1d12" stroke-width="' + g(1.4) + '" stroke-linecap="round"/></g>';
  } else {
    o += '<ellipse cx="' + g(-3.51) + '" cy="' + g(0.21) + '" rx="' + g(2.07) + '" ry="' + g(1.65) + '" fill="#e8dcc4"/>' +
      '<ellipse cx="' + g(3.51) + '" cy="' + g(0.21) + '" rx="' + g(2.07) + '" ry="' + g(1.65) + '" fill="#e8dcc4"/>' +
      '<circle cx="' + g(-3.31) + '" cy="' + g(0.41) + '" r="' + g(1.14) + '" fill="#2a1d12"/>' +
      '<circle cx="' + g(3.72) + '" cy="' + g(0.41) + '" r="' + g(1.14) + '" fill="#2a1d12"/>';
  }
  o += '<path d="M' + g(-5.79) + ',' + g(6.61) + ' Q' + g(-2.48) + ',' + g(4.96) + ' 0,' + g(6.2) +
    ' Q' + g(2.48) + ',' + g(4.96) + ' ' + g(5.79) + ',' + g(6.61) + '" fill="#7a6248" opacity="0.85"/>';
  o += '</g>';
  o += '<circle cx="0" cy="0" r="' + wn(r) + '" fill="none" stroke="' + WBRASS_B + '" stroke-width="' + g(3.51) + '"/>';
  o += '<circle cx="0" cy="0" r="' + g(16.95) + '" fill="none" stroke="' + WBRASS_A + '" stroke-width="' + g(1.03) + '" opacity="0.75"/>';
  for (var i = 0; i < 8; i++) {
    var a = (Math.PI / 4) * i + Math.PI / 8;
    o += '<circle cx="' + wn(Math.cos(a) * r * 1.09) + '" cy="' + wn(Math.sin(a) * r * 1.09) +
      '" r="' + g(1.03) + '" fill="' + WBRASS_C + '"/>';
  }
  o += '<path d="M' + g(-9.71) + ',' + g(-3.51) + ' Q' + g(-5.17) + ',' + g(-9.71) + ' ' + g(2.48) + ',' + g(-10.13) +
    '" fill="none" stroke="#dff6ea" stroke-width="' + g(2.48) + '" stroke-linecap="round" opacity="0.34">' +
    '<animate attributeName="opacity" values="0.18;0.46;0.18" dur="' + dur + '" repeatCount="indefinite"/></path>';
  o += '<circle cx="' + g(6.41) + '" cy="' + g(-6.61) + '" r="' + g(1.76) + '" fill="#ffeaa7" opacity="0.5">' +
    '<animate attributeName="opacity" values="0.3;0.62;0.3" dur="' + dur + '" repeatCount="indefinite"/></circle>';
  o += '<path d="M' + g(-7.85) + ',' + g(6.82) + ' Q0,' + g(9.92) + ' ' + g(7.85) + ',' + g(6.82) +
    '" fill="none" stroke="#7fc4b8" stroke-width="' + g(1.45) + '" stroke-linecap="round" opacity="0.2"/>';
  return o;
}

// THE HELMET, front or three quarter. Origin is the centre of the sphere.
function wHelmet(s, h, expr, dur, flip) {
  var o = '';
  o += '<circle cx="0" cy="0" r="' + wn(h) + '" fill="url(#wBrass' + s + ')"/>';
  o += '<circle cx="0" cy="0" r="' + wn(h) + '" fill="none" stroke="' + WBRASS_C + '" stroke-width="' + wn(h * 0.07) + '"/>';
  o += '<circle cx="' + wn(-h * 0.83) + '" cy="' + wn(h * 0.09) + '" r="' + wn(h * 0.235) + '" fill="' + WBRASS_C + '"/>' +
    '<circle cx="' + wn(-h * 0.83) + '" cy="' + wn(h * 0.09) + '" r="' + wn(h * 0.14) + '" fill="#123038" opacity="0.8"/>';
  o += '<circle cx="' + wn(h * 0.83) + '" cy="' + wn(h * 0.09) + '" r="' + wn(h * 0.235) + '" fill="' + WBRASS_C + '"/>' +
    '<circle cx="' + wn(h * 0.83) + '" cy="' + wn(h * 0.09) + '" r="' + wn(h * 0.14) + '" fill="#123038" opacity="0.8"/>';
  o += '<circle cx="' + wn(-h * 0.52) + '" cy="' + wn(-h * 0.74) + '" r="' + wn(h * 0.057) + '" fill="' + WBRASS_A + '"/>' +
    '<circle cx="0" cy="' + wn(-h * 0.91) + '" r="' + wn(h * 0.057) + '" fill="' + WBRASS_A + '"/>' +
    '<circle cx="' + wn(h * 0.52) + '" cy="' + wn(-h * 0.74) + '" r="' + wn(h * 0.057) + '" fill="' + WBRASS_A + '"/>';
  o += '<g transform="translate(0,' + wn(h * 0.043) + ')">' + wFace(s, h * 0.674, expr, dur, flip) + '</g>';
  return o;
}

// THE HELMET from behind: brass sphere, crown seam, bolt ring, rear vent, and
// the far edge of the faceplate rim showing round the side. No face, which is
// the whole point of the shot it is used in.
function wHelmetBack(s, h) {
  var o = '';
  o += '<circle cx="0" cy="0" r="' + wn(h) + '" fill="url(#wBrass' + s + ')"/>';
  o += '<circle cx="0" cy="0" r="' + wn(h) + '" fill="none" stroke="' + WBRASS_C + '" stroke-width="' + wn(h * 0.083) + '"/>';
  o += '<path d="M' + wn(-h) + ',0 Q0,' + wn(-h * 0.44) + ' ' + wn(h) + ',0" fill="none" stroke="' + WBRASS_C +
    '" stroke-width="' + wn(h * 0.067) + '" opacity="0.8"/>';
  var bolts = [[-0.72, -0.33], [-0.37, -0.52], [0, -0.58], [0.37, -0.52], [0.72, -0.33]];
  for (var i = 0; i < bolts.length; i++) {
    o += '<circle cx="' + wn(bolts[i][0] * h) + '" cy="' + wn(bolts[i][1] * h) + '" r="' + wn(h * 0.067) + '" fill="' + WBRASS_C + '"/>';
  }
  o += '<rect x="' + wn(-h * 0.28) + '" y="' + wn(h * 0.11) + '" width="' + wn(h * 0.56) + '" height="' + wn(h * 0.44) +
    '" rx="' + wn(h * 0.09) + '" fill="' + WBRASS_C + '"/>';
  o += '<path d="M' + wn(-h * 0.19) + ',' + wn(h * 0.22) + ' L' + wn(h * 0.19) + ',' + wn(h * 0.22) +
    ' M' + wn(-h * 0.19) + ',' + wn(h * 0.36) + ' L' + wn(h * 0.19) + ',' + wn(h * 0.36) +
    ' M' + wn(-h * 0.19) + ',' + wn(h * 0.49) + ' L' + wn(h * 0.19) + ',' + wn(h * 0.49) +
    '" stroke="#3d2c06" stroke-width="' + wn(h * 0.044) + '"/>';
  o += '<path d="M' + wn(h * 0.81) + ',' + wn(-h * 0.44) + ' Q' + wn(h * 1.08) + ',0 ' + wn(h * 0.81) + ',' + wn(h * 0.5) +
    '" fill="none" stroke="' + WBRASS_A + '" stroke-width="' + wn(h * 0.133) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(h * 0.87) + ',' + wn(-h * 0.31) + ' Q' + wn(h * 1.06) + ',0 ' + wn(h * 0.87) + ',' + wn(h * 0.37) +
    '" fill="none" stroke="#123038" stroke-width="' + wn(h * 0.089) + '" opacity="0.55"/>';
  o += '<path d="M' + wn(-h * 0.5) + ',' + wn(-h * 0.5) + ' Q' + wn(-h * 0.22) + ',' + wn(-h * 0.72) + ' ' + wn(h * 0.06) + ',' + wn(-h * 0.61) +
    '" fill="none" stroke="#ffeaa7" stroke-width="' + wn(h * 0.106) + '" stroke-linecap="round" opacity="0.4"/>';
  return o;
}

// A GLOVED HAND. Not a circle: a mitt with a heel, fingers and a thumb thrown
// clear, sized off h so it always belongs to the body it hangs from.
// dir is -1 for a hand on his left, +1 for his right.
function wHand(s, h, dir) {
  var w = h * 0.46, o = '';
  o += '<path d="M' + wn(-w * 0.85 * dir) + ',' + wn(-w * 0.4) +
    ' Q' + wn(-w * 0.15 * dir) + ',' + wn(-w * 0.8) + ' ' + wn(w * 0.8 * dir) + ',' + wn(-w * 0.5) +
    ' Q' + wn(w * 1.3 * dir) + ',' + wn(-w * 0.05) + ' ' + wn(w * 0.95 * dir) + ',' + wn(w * 0.55) +
    ' Q' + wn(w * 0.2 * dir) + ',' + wn(w * 1) + ' ' + wn(-w * 0.8 * dir) + ',' + wn(w * 0.6) + ' Z" fill="' + WGLOVE + '"/>';
  for (var i = 0; i < 3; i++) {
    var fx = (0.1 + i * 0.36) * w * dir;
    o += '<path d="M' + wn(fx) + ',' + wn(-w * 0.52) + ' L' + wn(fx + w * 0.05 * dir) + ',' + wn(w * 0.5) +
      '" stroke="' + WGLOVE_D + '" stroke-width="' + wn(w * 0.12) + '" stroke-linecap="round" opacity="0.7"/>';
  }
  o += '<path d="M' + wn(-w * 0.7 * dir) + ',' + wn(-w * 0.1) +
    ' Q' + wn(-w * 1.05 * dir) + ',' + wn(w * 0.05) + ' ' + wn(-w * 1.15 * dir) + ',' + wn(w * 0.45) +
    ' Q' + wn(-w * 1.0 * dir) + ',' + wn(w * 0.8) + ' ' + wn(-w * 0.7 * dir) + ',' + wn(w * 0.55) + ' Z" fill="' + WGLOVE + '"/>';
  o += '<path d="M' + wn(-w * 0.5 * dir) + ',' + wn(-w * 0.3) + ' Q' + wn(w * 0.15 * dir) + ',' + wn(-w * 0.5) +
    ' ' + wn(w * 0.7 * dir) + ',' + wn(-w * 0.25) +
    '" fill="none" stroke="' + WGLOVE_L + '" stroke-width="' + wn(w * 0.1) + '" opacity="0.5"/>';
  return o;
}

// A HEAVY BOOT, origin at the sole, weighted and brass capped.
// A HEAVY BOOT. Origin is the SOLE, so a caller drops it straight onto the
// deck line and the man stands on the deck instead of floating over it. The
// ankle is at -bh, the toe runs out in the dir the figure faces, and the whole
// thing is deliberately oversized: these are the lead boots that keep him down.
function wBoot(s, h, dir) {
  var bw = h * 1.15, bh = h * 0.52;
  var toe = bw * 0.66 * dir, heel = -bw * 0.38 * dir;
  var o = '';
  // sole plate, flat on the deck, running heel to toe
  o += '<path d="M' + wn(heel) + ',0 L' + wn(toe) + ',0' +
    ' L' + wn(toe) + ',' + wn(-bh * 0.28) +
    ' Q' + wn(toe - bw * 0.1 * dir) + ',' + wn(-bh * 0.55) + ' ' + wn(bw * 0.3 * dir) + ',' + wn(-bh * 0.62) +
    ' L' + wn(heel + bw * 0.06 * dir) + ',' + wn(-bh * 0.62) +
    ' Q' + wn(heel - bw * 0.04 * dir) + ',' + wn(-bh * 0.3) + ' ' + wn(heel) + ',0 Z" fill="' + WBRASS_C + '"/>';
  // the cuff of the boot where the leg goes in, brass and bolted
  o += '<path d="M' + wn(-bw * 0.32 * dir) + ',' + wn(-bh) + ' L' + wn(bw * 0.34 * dir) + ',' + wn(-bh) +
    ' L' + wn(bw * 0.3 * dir) + ',' + wn(-bh * 0.6) + ' L' + wn(-bw * 0.3 * dir) + ',' + wn(-bh * 0.6) +
    ' Z" fill="' + WBRASS_B + '" opacity="0.85"/>';
  // toe cap highlight, so the boot reads as pointing somewhere
  o += '<path d="M' + wn(bw * 0.3 * dir) + ',' + wn(-bh * 0.52) + ' Q' + wn(toe - bw * 0.08 * dir) + ',' + wn(-bh * 0.46) +
    ' ' + wn(toe - bw * 0.02 * dir) + ',' + wn(-bh * 0.22) +
    '" fill="none" stroke="' + WBRASS_A + '" stroke-width="' + wn(h * 0.07) + '" stroke-linecap="round" opacity="0.5"/>';
  return o;
}

// FREDWARD, whole. This is the only place a Fredward is assembled.
//
// opts:
//   s      id suffix, must be unique per scene
//   h      helmet radius, the reference scale. wreck_2 uses 21.
//   x, y   where the CENTRE OF THE HELMET lands in scene coordinates
//   pose   standing | leaning | table | away | inverted
//   face   left | right, which way the body is turned
//   expr   open | closed
//   arms   an override string of arm markup, drawn in body space
//   dur    animation period for the faceplate sweep
//   hose   direction the air hose runs off, left or right
//
// The body is built downward from the helmet centre so that every pose shares
// one skeleton. Nothing here is optional: legs and boots are drawn for every
// pose except inverted, where they are drawn upward instead.
// Distance from the centre of the helmet down to the sole, in scene units.
// A caller who knows where the deck is can put a man ON it:
//   y = deckY - fredFootDrop(h)
function fredFootDrop(h) { return h * 1.55 + h * 2.6 + h * 3.5; }

function fred(opts) {
  var s = opts.s, h = opts.h;
  var dur = opts.dur || '4s';
  var expr = opts.expr || 'open';
  var pose = opts.pose || 'standing';
  var dir = opts.face === 'left' ? -1 : 1;
  var hoseDir = opts.hose === 'left' ? -1 : 1;
  var o = '';

  // Skeleton, all in helmet radii, measured down from the helmet centre.
  var neckY = h * 1.15;          // the brass ring
  var shoulderY = h * 1.55;      // top of the torso
  var hipY = shoulderY + h * 2.6;
  var kneeY = hipY + h * 1.75;
  var footY = hipY + h * 3.5;
  var halfW = h * 1.6;           // shoulder half width
  var hipW = h * 1.32;
  var limb = h * 0.52;           // the suit is bulky

  var lean = pose === 'leaning' ? h * 0.28 : 0;

  o += '<g>';

  // ---- AIR HOSE, behind everything, running off and away ------------------
  var hx = hoseDir * h * 0.7, hy = -h * 0.1;
  o += '<path d="M' + wn(hx) + ',' + wn(hy) +
    ' Q' + wn(hx + hoseDir * h * 1.8) + ',' + wn(hy - h * 0.4) +
    ' ' + wn(hx + hoseDir * h * 3.2) + ',' + wn(hy + h * 1.1) +
    ' Q' + wn(hx + hoseDir * h * 4.4) + ',' + wn(hy + h * 2.9) +
    ' ' + wn(hx + hoseDir * h * 3.6) + ',' + wn(hy + h * 4.6) +
    '" fill="none" stroke="' + WHOSE + '" stroke-width="' + wn(h * 0.14) + '" stroke-linecap="round" opacity="0.62">' +
    '<animate attributeName="d" values="' +
    'M' + wn(hx) + ',' + wn(hy) + ' Q' + wn(hx + hoseDir * h * 1.8) + ',' + wn(hy - h * 0.4) + ' ' + wn(hx + hoseDir * h * 3.2) + ',' + wn(hy + h * 1.1) + ' Q' + wn(hx + hoseDir * h * 4.4) + ',' + wn(hy + h * 2.9) + ' ' + wn(hx + hoseDir * h * 3.6) + ',' + wn(hy + h * 4.6) + ';' +
    'M' + wn(hx) + ',' + wn(hy) + ' Q' + wn(hx + hoseDir * h * 2.1) + ',' + wn(hy - h * 0.7) + ' ' + wn(hx + hoseDir * h * 3.5) + ',' + wn(hy + h * 0.95) + ' Q' + wn(hx + hoseDir * h * 4.7) + ',' + wn(hy + h * 2.8) + ' ' + wn(hx + hoseDir * h * 3.6) + ',' + wn(hy + h * 4.6) + ';' +
    'M' + wn(hx) + ',' + wn(hy) + ' Q' + wn(hx + hoseDir * h * 1.8) + ',' + wn(hy - h * 0.4) + ' ' + wn(hx + hoseDir * h * 3.2) + ',' + wn(hy + h * 1.1) + ' Q' + wn(hx + hoseDir * h * 4.4) + ',' + wn(hy + h * 2.9) + ' ' + wn(hx + hoseDir * h * 3.6) + ',' + wn(hy + h * 4.6) +
    '" dur="8.5s" repeatCount="indefinite"/></path>';

  // ---- LEGS AND BOOTS, drawn before the torso so the torso overlaps them --
  // closeUp is the ONE pose without them, and only because the camera is so
  // near that his hips are below the bottom edge of the frame. That is a crop,
  // not a missing limb. Any pose whose feet would be inside the viewBox must
  // draw them: a legless figure standing on a deck is the wreck_7 bug.
  if (pose !== 'inverted' && pose !== 'closeUp') {
    var legSpread = hipW * 0.52;
    var lLeg = -legSpread + lean * 0.4, rLeg = legSpread + lean * 0.4;
    // a leaning man has one leg braced out and one taking the weight
    var lFoot = pose === 'leaning' ? lLeg - h * 0.55 : lLeg;
    var rFoot = pose === 'leaning' ? rLeg + h * 0.75 : rLeg;
    o += '<path d="M' + wn(lLeg) + ',' + wn(hipY - h * 0.2) +
      ' Q' + wn(lLeg - h * 0.12) + ',' + wn(kneeY) + ' ' + wn(lFoot) + ',' + wn(footY - h * 0.42) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.62) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(rLeg) + ',' + wn(hipY - h * 0.2) +
      ' Q' + wn(rLeg + h * 0.12) + ',' + wn(kneeY) + ' ' + wn(rFoot) + ',' + wn(footY - h * 0.42) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.62) + '" stroke-linecap="round"/>';
    // knee creases, so the leg reads as a limb and not a pipe
    o += '<path d="M' + wn(lLeg - limb * 0.5) + ',' + wn(kneeY) + ' Q' + wn(lLeg) + ',' + wn(kneeY + h * 0.16) + ' ' + wn(lLeg + limb * 0.5) + ',' + wn(kneeY) +
      ' M' + wn(rLeg - limb * 0.5) + ',' + wn(kneeY) + ' Q' + wn(rLeg) + ',' + wn(kneeY + h * 0.16) + ' ' + wn(rLeg + limb * 0.5) + ',' + wn(kneeY) +
      '" fill="none" stroke="' + WSUIT_SEAM + '" stroke-width="' + wn(h * 0.055) + '" opacity="0.5"/>';
    o += '<g transform="translate(' + wn(lFoot) + ',' + wn(footY) + ')">' + wBoot(s, h, -1) + '</g>';
    o += '<g transform="translate(' + wn(rFoot) + ',' + wn(footY) + ')">' + wBoot(s, h, 1) + '</g>';
  } else if (pose === 'inverted') {
    // upside down: the legs go UP out of frame toward the hatch he came from
    o += '<path d="M' + wn(-hipW * 0.52) + ',' + wn(-h * 1.55) + ' Q' + wn(-hipW * 0.62) + ',' + wn(-h * 3.4) + ' ' + wn(-hipW * 0.5) + ',' + wn(-h * 5.1) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.62) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(hipW * 0.52) + ',' + wn(-h * 1.55) + ' Q' + wn(hipW * 0.66) + ',' + wn(-h * 3.4) + ' ' + wn(hipW * 0.54) + ',' + wn(-h * 5.1) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.62) + '" stroke-linecap="round"/>';
    o += '<g transform="translate(' + wn(-hipW * 0.5) + ',' + wn(-h * 5.3) + ') scale(1,-1)">' + wBoot(s, h, -1) + '</g>';
    o += '<g transform="translate(' + wn(hipW * 0.54) + ',' + wn(-h * 5.3) + ') scale(1,-1)">' + wBoot(s, h, 1) + '</g>';
  }

  // ---- TORSO, a soft rectangle. Bulky suit, no waist. ---------------------
  if (pose === 'closeUp') {
    // the chest, running straight off the bottom edge rather than closing at
    // the hip, because in this shot the hip is outside the frame
    o += '<path d="M' + wn(-halfW) + ',' + wn(shoulderY) + ' Q0,' + wn(shoulderY - h * 0.42) + ' ' + wn(halfW) + ',' + wn(shoulderY) +
      ' L' + wn(hipW) + ',' + wn(hipY + h * 2) + ' L' + wn(-hipW) + ',' + wn(hipY + h * 2) + ' Z" fill="url(#wSuit' + s + ')"/>';
    o += '<path d="M' + wn(-halfW * 0.9) + ',' + wn(shoulderY + h * 0.8) + ' Q0,' + wn(shoulderY + h * 0.46) + ' ' + wn(halfW * 0.9) + ',' + wn(shoulderY + h * 0.8) +
      ' M' + wn(-halfW * 0.88) + ',' + wn(shoulderY + h * 1.7) + ' Q0,' + wn(shoulderY + h * 1.36) + ' ' + wn(halfW * 0.88) + ',' + wn(shoulderY + h * 1.7) +
      '" fill="none" stroke="' + WSUIT_SEAM + '" stroke-width="' + wn(h * 0.05) + '" opacity="0.5"/>';
    o += '<rect x="' + wn(-h * 0.6) + '" y="' + wn(shoulderY + h * 0.12) + '" width="' + wn(h * 1.2) + '" height="' + wn(h * 0.52) +
      '" rx="' + wn(h * 0.1) + '" fill="url(#wBrass' + s + ')"/>';
    o += '<circle cx="' + wn(-h * 0.29) + '" cy="' + wn(shoulderY + h * 0.38) + '" r="' + wn(h * 0.06) + '" fill="' + WBRASS_A + '"/>'
      + '<circle cx="' + wn(h * 0.29) + '" cy="' + wn(shoulderY + h * 0.38) + '" r="' + wn(h * 0.06) + '" fill="' + WBRASS_A + '"/>';
    o += '<ellipse cx="0" cy="' + wn(neckY) + '" rx="' + wn(h * 0.78) + '" ry="' + wn(h * 0.28) + '" fill="url(#wBrass' + s + ')"/>';
  } else if (pose === 'inverted') {
    o += '<path d="M' + wn(-halfW * 0.86) + ',' + wn(-h * 1.5) + ' Q0,' + wn(-h * 1.9) + ' ' + wn(halfW * 0.86) + ',' + wn(-h * 1.5) +
      ' L' + wn(halfW) + ',' + wn(-h * 4.15) + ' Q0,' + wn(-h * 4.55) + ' ' + wn(-halfW) + ',' + wn(-h * 4.15) + ' Z" fill="url(#wSuit' + s + ')"/>';
    o += '<rect x="' + wn(-h * 0.52) + '" y="' + wn(-h * 4.05) + '" width="' + wn(h * 1.04) + '" height="' + wn(h * 0.5) +
      '" rx="' + wn(h * 0.1) + '" fill="url(#wBrass' + s + ')"/>';
    o += '<ellipse cx="0" cy="' + wn(-neckY) + '" rx="' + wn(h * 0.72) + '" ry="' + wn(h * 0.26) + '" fill="url(#wBrass' + s + ')"/>';
  } else {
    o += '<path d="M' + wn(-halfW + lean * 0.5) + ',' + wn(shoulderY) +
      ' Q' + wn(lean * 0.5) + ',' + wn(shoulderY - h * 0.42) + ' ' + wn(halfW + lean * 0.5) + ',' + wn(shoulderY) +
      ' L' + wn(hipW + lean * 0.9) + ',' + wn(hipY) +
      ' Q' + wn(lean * 0.9) + ',' + wn(hipY + h * 0.34) + ' ' + wn(-hipW + lean * 0.9) + ',' + wn(hipY) + ' Z" fill="url(#wSuit' + s + ')"/>';
    // suit creases across the barrel of the chest
    o += '<path d="M' + wn(-halfW * 0.88 + lean * 0.6) + ',' + wn(shoulderY + h * 0.75) + ' Q' + wn(lean * 0.6) + ',' + wn(shoulderY + h * 0.42) + ' ' + wn(halfW * 0.88 + lean * 0.6) + ',' + wn(shoulderY + h * 0.75) +
      ' M' + wn(-halfW * 0.9 + lean * 0.75) + ',' + wn(shoulderY + h * 1.5) + ' Q' + wn(lean * 0.75) + ',' + wn(shoulderY + h * 1.17) + ' ' + wn(halfW * 0.9 + lean * 0.75) + ',' + wn(shoulderY + h * 1.5) +
      '" fill="none" stroke="' + WSUIT_SEAM + '" stroke-width="' + wn(h * 0.055) + '" opacity="0.5"/>';
    // chest weight plate, bolted on
    o += '<rect x="' + wn(-h * 0.6 + lean * 0.55) + '" y="' + wn(shoulderY + h * 0.12) + '" width="' + wn(h * 1.2) + '" height="' + wn(h * 0.56) +
      '" rx="' + wn(h * 0.11) + '" fill="url(#wBrass' + s + ')"/>';
    o += '<circle cx="' + wn(-h * 0.29 + lean * 0.55) + '" cy="' + wn(shoulderY + h * 0.4) + '" r="' + wn(h * 0.068) + '" fill="' + WBRASS_A + '"/>' +
      '<circle cx="' + wn(h * 0.29 + lean * 0.55) + '" cy="' + wn(shoulderY + h * 0.4) + '" r="' + wn(h * 0.068) + '" fill="' + WBRASS_A + '"/>';
    // neck ring, the collar the helmet bolts to
    o += '<ellipse cx="' + wn(lean * 0.4) + '" cy="' + wn(neckY) + '" rx="' + wn(h * 0.78) + '" ry="' + wn(h * 0.28) + '" fill="url(#wBrass' + s + ')"/>';
  }

  // ---- ARMS. A caller may override, but the default is two arms with two
  //      visible hands, because he always has both. -------------------------
  if (opts.arms !== undefined) {
    o += opts.arms;
  } else {
    var aY = shoulderY + h * 0.5;
    var reach = pose === 'inverted' ? -1 : 1;
    var aTop = pose === 'inverted' ? -h * 3.6 : aY;
    var handY = pose === 'inverted' ? aTop - h * 2.1 : aY + h * 1.72;
    var lhx = -halfW - h * 0.42, rhx = halfW + h * 0.42;
    o += '<path d="M' + wn(-halfW * 0.94) + ',' + wn(aTop) +
      ' Q' + wn(lhx + h * 0.15) + ',' + wn(aTop + reach * h * 1.15) + ' ' + wn(lhx) + ',' + wn(handY - reach * h * 0.35) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(halfW * 0.94) + ',' + wn(aTop) +
      ' Q' + wn(rhx - h * 0.15) + ',' + wn(aTop + reach * h * 1.15) + ' ' + wn(rhx) + ',' + wn(handY - reach * h * 0.35) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb) + '" stroke-linecap="round"/>';
    o += '<g transform="translate(' + wn(lhx) + ',' + wn(handY) + ')">' + wHand(s, h, -1) + '</g>';
    o += '<g transform="translate(' + wn(rhx) + ',' + wn(handY) + ')">' + wHand(s, h, 1) + '</g>';
  }

  // ---- HEAD -------------------------------------------------------------
  var tilt = opts.tilt || 0;
  o += '<g transform="rotate(' + tilt + ',0,0)">';
  o += pose === 'away' ? wHelmetBack(s, h) : wHelmet(s, h, expr, dur, pose === 'inverted');
  o += '</g>';

  o += '</g>';
  // The scale is stamped on the group so a CI check can assert it rather than
  // infer it from circle radii. The model composes helmets from computed
  // values, so without this a scene drawn at the wrong scale is invisible to
  // everything except looking at it.
  return '<g data-fred-h="' + h + '" transform="translate(' + opts.x + ',' + opts.y + ')' +
    (dir < 0 ? ' scale(-1,1)' : '') + (opts.scale ? ' scale(' + opts.scale + ')' : '') + '">' + o + '</g>';
}

// THE PLAYER. A modern diver: wetsuit, single tank, oval mask, fins. Built the
// same way and to the same scale rule, so the two figures relate. p is the
// head radius, and the player is a shorter, slighter build than Fredward.
function player(opts) {
  var p = opts.h, o = '';
  var dir = opts.face === 'left' ? -1 : 1;
  var shoulderY = p * 1.5, hipY = shoulderY + p * 2.5, footY = hipY + p * 3.2;
  var halfW = p * 1.3, hipW = p * 1.05, limb = p * 0.42;

  o += '<g>';
  // legs and fins first
  var ls = hipW * 0.5;
  o += '<path d="M' + wn(-ls) + ',' + wn(hipY - p * 0.2) + ' Q' + wn(-ls - p * 0.15) + ',' + wn(hipY + p * 1.6) + ' ' + wn(-ls - p * 0.1) + ',' + wn(footY - p * 0.5) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.75) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(ls) + ',' + wn(hipY - p * 0.2) + ' Q' + wn(ls + p * 0.15) + ',' + wn(hipY + p * 1.6) + ' ' + wn(ls + p * 0.1) + ',' + wn(footY - p * 0.5) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.75) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(-ls - p * 0.1) + ',' + wn(footY - p * 0.5) + ' Q' + wn(-ls - p * 0.9) + ',' + wn(footY) + ' ' + wn(-ls - p * 1.5) + ',' + wn(footY + p * 0.2) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.5) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(ls + p * 0.1) + ',' + wn(footY - p * 0.5) + ' Q' + wn(ls + p * 0.9) + ',' + wn(footY) + ' ' + wn(ls + p * 1.5) + ',' + wn(footY + p * 0.2) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.5) + '" stroke-linecap="round"/>';
  // tank behind the shoulder
  o += '<rect x="' + wn(halfW * 0.62) + '" y="' + wn(shoulderY + p * 0.1) + '" width="' + wn(p * 0.5) + '" height="' + wn(p * 1.9) +
    '" rx="' + wn(p * 0.25) + '" fill="' + WPLAYER_L + '"/>';
  o += '<rect x="' + wn(halfW * 0.72) + '" y="' + wn(shoulderY + p * 0.3) + '" width="' + wn(p * 0.18) + '" height="' + wn(p * 1.3) +
    '" rx="' + wn(p * 0.09) + '" fill="#2a6a75" opacity="0.6"/>';
  // torso
  o += '<path d="M' + wn(-halfW) + ',' + wn(shoulderY) + ' Q0,' + wn(shoulderY - p * 0.4) + ' ' + wn(halfW) + ',' + wn(shoulderY) +
    ' L' + wn(hipW) + ',' + wn(hipY) + ' Q0,' + wn(hipY + p * 0.3) + ' ' + wn(-hipW) + ',' + wn(hipY) + ' Z" fill="' + WPLAYER + '"/>';
  o += '<path d="M' + wn(-halfW * 0.85) + ',' + wn(shoulderY + p * 0.9) + ' Q0,' + wn(shoulderY + p * 0.6) + ' ' + wn(halfW * 0.85) + ',' + wn(shoulderY + p * 0.9) +
    '" fill="none" stroke="#0a1a1e" stroke-width="' + wn(p * 0.07) + '" opacity="0.6"/>';
  // arms, overridable, but always two with two hands
  if (opts.arms !== undefined) {
    o += opts.arms;
  } else {
    var aY = shoulderY + p * 0.5;
    var lhx = -halfW - p * 0.5, rhx = halfW + p * 0.5, handY = aY + p * 2;
    o += '<path d="M' + wn(-halfW * 0.9) + ',' + wn(aY) + ' Q' + wn(lhx) + ',' + wn(aY + p * 1) + ' ' + wn(lhx) + ',' + wn(handY - p * 0.3) +
      '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(halfW * 0.9) + ',' + wn(aY) + ' Q' + wn(rhx) + ',' + wn(aY + p * 1) + ' ' + wn(rhx) + ',' + wn(handY - p * 0.3) +
      '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb) + '" stroke-linecap="round"/>';
    o += '<circle cx="' + wn(lhx) + '" cy="' + wn(handY) + '" r="' + wn(p * 0.34) + '" fill="' + WPLAYER_H + '"/>';
    o += '<circle cx="' + wn(rhx) + '" cy="' + wn(handY) + '" r="' + wn(p * 0.34) + '" fill="' + WPLAYER_H + '"/>';
  }
  // head and mask
  o += '<circle cx="0" cy="0" r="' + wn(p) + '" fill="' + WPLAYER + '"/>';
  o += '<ellipse cx="0" cy="' + wn(-p * 0.14) + '" rx="' + wn(p * 0.72) + '" ry="' + wn(p * 0.54) + '" fill="' + WPLAYER_L + '" opacity="0.7"/>';
  o += '<ellipse cx="' + wn(-p * 0.16) + '" cy="' + wn(-p * 0.32) + '" rx="' + wn(p * 0.26) + '" ry="' + wn(p * 0.18) + '" fill="#7fc4b8" opacity="0.4"/>';
  o += '<path d="M' + wn(-p * 0.68) + ',' + wn(p * 0.46) + ' Q0,' + wn(p * 0.76) + ' ' + wn(p * 0.68) + ',' + wn(p * 0.46) +
    '" fill="none" stroke="#0a1a1e" stroke-width="' + wn(p * 0.11) + '"/>';
  o += '</g>';
  return '<g data-player-h="' + p + '" transform="translate(' + opts.x + ',' + opts.y + ')' + (dir < 0 ? ' scale(-1,1)' : '') + '">' + o + '</g>';
}

// THE CATALOGUE BOOK, closed block plus open spread. w is the full width of
// the open book. It is an OBJECT ON A TABLE: comfortably smaller than a
// standing man, so w should sit near 4.5 helmet radii, never more.
function book(s, w, opts) {
  opts = opts || {};
  var hw = w / 2, ph = w * 0.42, blk = w * 0.075, o = '';
  o += '<path d="M' + wn(-hw) + ',' + wn(blk) + ' L' + wn(hw) + ',' + wn(blk) + ' L' + wn(hw - w * 0.01) + ',0 L' + wn(-hw + w * 0.01) + ',0 Z" fill="#8a7a4c"/>';
  o += '<path d="M' + wn(-hw + w * 0.01) + ',0 L' + wn(hw - w * 0.01) + ',0 L' + wn(hw - w * 0.02) + ',' + wn(-blk * 0.3) + ' L' + wn(-hw + w * 0.02) + ',' + wn(-blk * 0.3) + ' Z" fill="#a5945f"/>';
  o += '<path d="M' + wn(-hw + w * 0.02) + ',' + wn(blk * 0.3) + ' L' + wn(hw - w * 0.02) + ',' + wn(blk * 0.3) +
    ' M' + wn(-hw + w * 0.02) + ',' + wn(blk * 0.62) + ' L' + wn(hw - w * 0.02) + ',' + wn(blk * 0.62) +
    '" stroke="#6d5f38" stroke-width="' + wn(w * 0.004) + '" opacity="0.55"/>';
  // the two pages of the open spread, sagging toward the gutter
  o += '<path d="M' + wn(-hw + w * 0.03) + ',' + wn(-blk * 0.3) + ' Q' + wn(-hw * 0.45) + ',' + wn(-blk * 0.3 - ph * 0.09) + ' 0,' + wn(-blk * 0.3 - ph * 0.05) +
    ' L0,' + wn(-ph) + ' Q' + wn(-hw * 0.45) + ',' + wn(-ph - ph * 0.06) + ' ' + wn(-hw + w * 0.03) + ',' + wn(-ph + ph * 0.12) + ' Z" fill="#e8dcae"/>';
  o += '<path d="M0,' + wn(-blk * 0.3 - ph * 0.05) + ' Q' + wn(hw * 0.45) + ',' + wn(-blk * 0.3 - ph * 0.09) + ' ' + wn(hw - w * 0.03) + ',' + wn(-blk * 0.3) +
    ' L' + wn(hw - w * 0.03) + ',' + wn(-ph + ph * 0.12) + ' Q' + wn(hw * 0.45) + ',' + wn(-ph - ph * 0.06) + ' 0,' + wn(-ph) + ' Z" fill="#ddd0a0"/>';
  o += '<path d="M0,' + wn(-ph) + ' L0,' + wn(-blk * 0.3 - ph * 0.05) + '" stroke="#8a7a4c" stroke-width="' + wn(w * 0.012) + '" opacity="0.5"/>';
  // ruled notes, and a small drawn creature if the page is not blank
  o += '<g stroke="#3a2e12" stroke-width="' + wn(w * 0.0045) + '" opacity="0.45">';
  for (var i = 0; i < 4; i++) {
    var ly = -ph * 0.28 - i * ph * 0.11;
    o += '<path d="M' + wn(-hw * 0.82) + ',' + wn(ly) + ' L' + wn(-hw * 0.16) + ',' + wn(ly - ph * 0.01) + '"/>';
    o += '<path d="M' + wn(hw * 0.16) + ',' + wn(ly - ph * 0.01) + ' L' + wn(hw * 0.82) + ',' + wn(ly) + '"/>';
  }
  o += '</g>';
  if (!opts.blank) {
    o += '<path d="M' + wn(-hw * 0.72) + ',' + wn(-ph * 0.72) + ' Q' + wn(-hw * 0.5) + ',' + wn(-ph * 0.88) + ' ' + wn(-hw * 0.3) + ',' + wn(-ph * 0.73) +
      ' Q' + wn(-hw * 0.12) + ',' + wn(-ph * 0.6) + ' ' + wn(hw * 0.04) + ',' + wn(-ph * 0.74) +
      '" fill="none" stroke="#3a2e12" stroke-width="' + wn(w * 0.009) + '" stroke-linecap="round"/>';
    o += '<ellipse cx="' + wn(hw * 0.48) + '" cy="' + wn(-ph * 0.68) + '" rx="' + wn(w * 0.07) + '" ry="' + wn(w * 0.046) +
      '" fill="none" stroke="#3a2e12" stroke-width="' + wn(w * 0.008) + '"/>';
    o += '<path d="M' + wn(hw * 0.48 - w * 0.075) + ',' + wn(-ph * 0.7) + ' L' + wn(hw * 0.48 - w * 0.12) + ',' + wn(-ph * 0.78) +
      ' M' + wn(hw * 0.48 + w * 0.075) + ',' + wn(-ph * 0.7) + ' L' + wn(hw * 0.48 + w * 0.12) + ',' + wn(-ph * 0.78) +
      ' M' + wn(hw * 0.48 - w * 0.05) + ',' + wn(-ph * 0.58) + ' L' + wn(hw * 0.48 - w * 0.075) + ',' + wn(-ph * 0.47) +
      ' M' + wn(hw * 0.48 + w * 0.05) + ',' + wn(-ph * 0.58) + ' L' + wn(hw * 0.48 + w * 0.075) + ',' + wn(-ph * 0.47) +
      '" stroke="#3a2e12" stroke-width="' + wn(w * 0.006) + '" stroke-linecap="round"/>';
  }
  return '<g transform="translate(' + opts.x + ',' + opts.y + ')' + (opts.scale ? ' scale(' + opts.scale + ')' : '') + '">' + o + '</g>';
}

// THE TABLE the book sits on: a bolted plate on two legs. w is the top width,
// legH how far it drops to the deck, so the legs always reach the deck.
function wTable(w, legH, opts) {
  opts = opts || {};
  var hw = w / 2, o = '';
  o += '<path d="M' + wn(-hw) + ',0 L' + wn(hw) + ',0 L' + wn(hw + w * 0.028) + ',' + wn(w * 0.042) + ' L' + wn(-hw - w * 0.028) + ',' + wn(w * 0.042) + ' Z" fill="#1d3b3a"/>';
  o += '<path d="M' + wn(-hw) + ',0 L' + wn(hw) + ',0 L' + wn(hw) + ',' + wn(w * 0.011) + ' L' + wn(-hw) + ',' + wn(w * 0.011) + ' Z" fill="#2c5450" opacity="0.6"/>';
  var lx = hw * 0.72, lw = w * 0.03;
  o += '<rect x="' + wn(-lx - lw / 2) + '" y="' + wn(w * 0.042) + '" width="' + wn(lw) + '" height="' + wn(legH) + '" fill="#173537"/>';
  o += '<rect x="' + wn(lx - lw / 2) + '" y="' + wn(w * 0.042) + '" width="' + wn(lw) + '" height="' + wn(legH) + '" fill="#173537"/>';
  // bolt plates where the legs meet the deck, so it is fixed and not floating
  o += '<rect x="' + wn(-lx - lw * 1.4) + '" y="' + wn(w * 0.042 + legH - w * 0.014) + '" width="' + wn(lw * 2.8) + '" height="' + wn(w * 0.014) +
    '" rx="1" fill="' + WBRASS_C + '" opacity="0.8"/>';
  o += '<rect x="' + wn(lx - lw * 1.4) + '" y="' + wn(w * 0.042 + legH - w * 0.014) + '" width="' + wn(lw * 2.8) + '" height="' + wn(w * 0.014) +
    '" rx="1" fill="' + WBRASS_C + '" opacity="0.8"/>';
  return '<g transform="translate(' + opts.x + ',' + opts.y + ')">' + o + '</g>';
}

// THE DOORMAT and THE CRAB. One crab, one mat, the same everywhere. The crab
// does not move unless the caller asks: in wreck_8 it deliberately does not.
function wMat(x, y, w) {
  var hw = w / 2;
  return '<g transform="translate(' + x + ',' + y + ')">' +
    '<path d="M' + wn(-hw) + ',0 L' + wn(hw) + ',0 L' + wn(hw + w * 0.11) + ',' + wn(w * 0.21) + ' L' + wn(-hw - w * 0.11) + ',' + wn(w * 0.21) + ' Z" fill="#5a4a22"/>' +
    '<path d="M' + wn(-hw) + ',0 L' + wn(hw) + ',0 L' + wn(hw + w * 0.02) + ',' + wn(w * 0.06) + ' L' + wn(-hw - w * 0.02) + ',' + wn(w * 0.06) + ' Z" fill="#75612e" opacity="0.78"/>' +
    '<path d="M' + wn(-hw * 0.9) + ',' + wn(w * 0.095) + ' L' + wn(hw * 0.93) + ',' + wn(w * 0.095) +
    ' M' + wn(-hw * 0.96) + ',' + wn(w * 0.158) + ' L' + wn(hw) + ',' + wn(w * 0.158) +
    '" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/></g>';
}

function wCrab(x, y, r, wave) {
  var o = '<g transform="translate(' + x + ',' + y + ')">';
  o += '<ellipse cx="0" cy="0" rx="' + wn(r) + '" ry="' + wn(r * 0.67) + '" fill="#8f3b2e"/>';
  o += '<ellipse cx="0" cy="' + wn(-r * 0.2) + '" rx="' + wn(r * 0.85) + '" ry="' + wn(r * 0.42) + '" fill="#b04a38" opacity="0.85"/>';
  o += '<circle cx="' + wn(-r * 0.35) + '" cy="' + wn(-r * 0.48) + '" r="' + wn(r * 0.15) + '" fill="#0a1a1e"/>' +
    '<circle cx="' + wn(r * 0.35) + '" cy="' + wn(-r * 0.48) + '" r="' + wn(r * 0.15) + '" fill="#0a1a1e"/>';
  var claw = 'M' + wn(-r * 0.85) + ',' + wn(-r * 0.15) + ' L' + wn(-r * 1.58) + ',' + wn(-r * 0.58) + ' L' + wn(-r * 1.88) + ',' + wn(-r * 0.15);
  o += '<path d="' + claw + '" fill="none" stroke="#8f3b2e" stroke-width="' + wn(r * 0.23) + '" stroke-linecap="round">';
  if (wave) {
    o += '<animate attributeName="d" values="' + claw + ';' +
      'M' + wn(-r * 0.85) + ',' + wn(-r * 0.15) + ' L' + wn(-r * 1.58) + ',' + wn(-r * 0.73) + ' L' + wn(-r * 1.88) + ',' + wn(-r * 0.3) + ';' +
      claw + '" dur="2.8s" repeatCount="indefinite"/>';
  }
  o += '</path>';
  o += '<path d="M' + wn(r * 0.85) + ',' + wn(-r * 0.15) + ' L' + wn(r * 1.58) + ',' + wn(-r * 0.58) + ' L' + wn(r * 1.88) + ',' + wn(-r * 0.15) +
    '" fill="none" stroke="#8f3b2e" stroke-width="' + wn(r * 0.23) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(-r * 0.7) + ',' + wn(r * 0.42) + ' L' + wn(-r * 1.12) + ',' + wn(r * 0.85) +
    ' M0,' + wn(r * 0.55) + ' L0,' + wn(r) +
    ' M' + wn(r * 0.7) + ',' + wn(r * 0.42) + ' L' + wn(r * 1.12) + ',' + wn(r * 0.85) +
    '" stroke="#8f3b2e" stroke-width="' + wn(r * 0.17) + '" stroke-linecap="round"/>';
  return o + '</g>';
}

// Scene 0: The descent. Inside the water column, looking down. Rope, small
// figure, green going darker, the wreck an unreadable silhouette below.
STORY_SCENES['wreck_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckCol0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="35%" stop-color="#133440"/><stop offset="70%" stop-color="#0d2028"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.22"/><stop offset="55%" stop-color="#7fc4b8" stop-opacity="0.07"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="wreckSurf0" cx="50%" cy="0%" r="70%">
    <stop offset="0%" stop-color="#cfeee0" stop-opacity="0.3"/><stop offset="45%" stop-color="#4f9d94" stop-opacity="0.09"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckSoft0"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
  <filter id="wreckDeepBlur0"><feGaussianBlur stdDeviation="4"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckCol0)"/>
<!-- Surface light pooling at the top of the column -->
<rect width="500" height="150" fill="url(#wreckSurf0)"/>
<!-- Caustic shafts falling from the surface -->
<polygon points="60,0 96,0 150,200 128,200" fill="url(#wreckShaft0)" opacity="0.55"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="7s" repeatCount="indefinite"/></polygon>
<polygon points="180,0 204,0 232,190 216,190" fill="url(#wreckShaft0)" opacity="0.4"><animate attributeName="opacity" values="0.22;0.5;0.22" dur="9s" repeatCount="indefinite" begin="1.5s"/></polygon>
<polygon points="300,0 342,0 320,210 296,210" fill="url(#wreckShaft0)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" begin="3s"/></polygon>
<polygon points="418,0 444,0 400,180 382,180" fill="url(#wreckShaft0)" opacity="0.35"><animate attributeName="opacity" values="0.18;0.45;0.18" dur="10s" repeatCount="indefinite" begin="0.8s"/></polygon>
<!-- Surface seen from beneath, a moving ceiling -->
<path d="M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z" fill="#8fd0c4" opacity="0.16"><animate attributeName="d" values="M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z;M0,0 L500,0 L500,18 Q440,10 380,18 Q320,26 260,18 Q200,10 140,18 Q80,26 0,18 Z;M0,0 L500,0 L500,14 Q440,22 380,14 Q320,6 260,14 Q200,22 140,14 Q80,6 0,14 Z" dur="6s" repeatCount="indefinite"/></path>
<!-- The seabed, far down, and the wreck on it: unreadable -->
<path d="M0,238 Q120,230 240,234 Q360,238 500,231 L500,260 L0,260 Z" fill="#07141a"/>
<g filter="url(#wreckDeepBlur0)" opacity="0.85">
  <path d="M150,236 Q168,214 214,210 L332,206 Q368,208 378,220 L382,236 Z" fill="#0a1a20"/>
  <path d="M236,206 L244,182 L252,182 L256,206 Z" fill="#0a1a20"/>
  <path d="M300,205 L306,188 L312,189 L314,205 Z" fill="#0a1a20"/>
</g>
<!-- Two faint amber pinpricks, too far to resolve -->
<circle cx="228" cy="216" r="2" fill="#F2C14E" opacity="0.16" filter="url(#wreckSoft0)"><animate attributeName="opacity" values="0.08;0.22;0.08" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="318" cy="212" r="1.8" fill="#F2C14E" opacity="0.13" filter="url(#wreckSoft0)"><animate attributeName="opacity" values="0.06;0.18;0.06" dur="5.5s" repeatCount="indefinite" begin="1.2s"/></circle>
<!-- The rope, hanging down the middle of the column -->
<path d="M252,0 Q248,60 254,120 Q259,160 252,196" fill="none" stroke="#2a3a2c" stroke-width="2.4" stroke-linecap="round" opacity="0.85"><animate attributeName="d" values="M252,0 Q248,60 254,120 Q259,160 252,196;M252,0 Q256,60 248,120 Q245,160 252,196;M252,0 Q248,60 254,120 Q259,160 252,196" dur="8s" repeatCount="indefinite"/></path>
<path d="M252,0 Q248,60 254,120 Q259,160 252,196" fill="none" stroke="#4a5a3e" stroke-width="0.8" opacity="0.4"><animate attributeName="d" values="M252,0 Q248,60 254,120 Q259,160 252,196;M252,0 Q256,60 248,120 Q245,160 252,196;M252,0 Q248,60 254,120 Q259,160 252,196" dur="8s" repeatCount="indefinite"/></path>
<!-- The player, small, on the rope -->
<g transform="translate(250,112)">
  <animateTransform attributeName="transform" type="translate" values="250,112;252,118;250,112" dur="8s" repeatCount="indefinite"/>
  <ellipse cx="0" cy="3" rx="5" ry="8" fill="#0a1a20"/>
  <circle cx="0" cy="-7" r="4.4" fill="#0a1a20"/>
  <circle cx="1.4" cy="-7.4" r="2.6" fill="#1a4a55" opacity="0.55"/>
  <line x1="-3" y1="-2" x2="-6" y2="-8" stroke="#0a1a20" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="-2" x2="6" y2="-9" stroke="#0a1a20" stroke-width="2" stroke-linecap="round"/>
  <path d="M-3,10 Q-5,20 -3,27" fill="none" stroke="#0a1a20" stroke-width="2.4" stroke-linecap="round"><animate attributeName="d" values="M-3,10 Q-5,20 -3,27;M-3,10 Q-1,20 -4,27;M-3,10 Q-5,20 -3,27" dur="3.4s" repeatCount="indefinite"/></path>
  <path d="M3,10 Q6,20 4,27" fill="none" stroke="#0a1a20" stroke-width="2.4" stroke-linecap="round"><animate attributeName="d" values="M3,10 Q6,20 4,27;M3,10 Q2,20 5,27;M3,10 Q6,20 4,27" dur="3.4s" repeatCount="indefinite" begin="0.6s"/></path>
</g>
<!-- Bubbles rising past the descent -->
<circle cx="262" cy="120" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="120;-10" dur="5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="268" cy="126" r="1.3" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="126;-10" dur="6.4s" repeatCount="indefinite" begin="1.4s"/><animate attributeName="opacity" values="0;0.45;0" dur="6.4s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="258" cy="118" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="118;-10" dur="7.2s" repeatCount="indefinite" begin="2.9s"/><animate attributeName="opacity" values="0;0.4;0" dur="7.2s" repeatCount="indefinite" begin="2.9s"/></circle>
<!-- Drifting motes -->
<circle cx="80" cy="90" r="1" fill="#cfeee0" opacity="0.25"><animate attributeName="cy" values="90;70;90" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="410" cy="140" r="1.2" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="140;118;140" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.08;0.26;0.08" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="150" cy="180" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="180;160;180" dur="13s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="5s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="350" cy="70" r="0.9" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="70;52;70" dur="11s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
<!-- Deep haze at the bottom of frame -->
<rect x="0" y="190" width="500" height="70" fill="#07141a" opacity="0.5"/>
</svg>`;

// Scene 1: The wreck in full. On her side, sand banked along the hull like a
// drift of snow. Amber lamps strung along the rail. Doormat and one crab,
// tiny, foreground. The whole visual idea of the file lives in this frame.
STORY_SCENES['wreck_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="40%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wreckHull1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="55%" stop-color="#122a2c"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wreckSand1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <radialGradient id="wreckLampG1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckGlow1"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckWater1)"/>
<!-- Caustic shafts from far above -->
<polygon points="70,0 100,0 138,150 118,150" fill="url(#wreckShaft1)" opacity="0.6"><animate attributeName="opacity" values="0.35;0.7;0.35" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="250,0 288,0 262,160 238,160" fill="url(#wreckShaft1)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="400,0 424,0 388,140 370,140" fill="url(#wreckShaft1)" opacity="0.45"><animate attributeName="opacity" values="0.22;0.55;0.22" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- Distant seabed ridge -->
<path d="M0,196 Q80,186 170,192 Q280,198 380,188 Q450,182 500,190 L500,260 L0,260 Z" fill="#0d2028" opacity="0.85"/>
<!-- Kelp behind the wreck, slow sway -->
<path d="M40,260 Q34,222 44,190 Q50,170 44,150" fill="none" stroke="#12333a" stroke-width="4" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M40,260 Q34,222 44,190 Q50,170 44,150;M40,260 Q46,222 36,190 Q30,170 38,150;M40,260 Q34,222 44,190 Q50,170 44,150" dur="11s" repeatCount="indefinite"/></path>
<path d="M62,260 Q58,228 66,204 Q70,188 64,172" fill="none" stroke="#0f2b31" stroke-width="3" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M62,260 Q58,228 66,204 Q70,188 64,172;M62,260 Q68,228 58,204 Q54,188 62,172;M62,260 Q58,228 66,204 Q70,188 64,172" dur="13s" repeatCount="indefinite" begin="2s"/></path>
<path d="M462,260 Q456,224 466,196 Q472,178 466,160" fill="none" stroke="#12333a" stroke-width="4" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M462,260 Q456,224 466,196 Q472,178 466,160;M462,260 Q470,224 458,196 Q452,178 460,160;M462,260 Q456,224 466,196 Q472,178 466,160" dur="12s" repeatCount="indefinite" begin="4s"/></path>
<!-- THE HULL, lying over on her side, bow left, stern right -->
<!-- Main hull mass -->
<path d="M52,214 Q60,182 108,172 L360,150 Q404,148 420,164 Q432,178 428,202 L424,222 Q300,232 180,230 Q100,228 52,214 Z" fill="url(#wreckHull1)"/>
<!-- Upper plating catching the last of the green light -->
<path d="M52,214 Q60,182 108,172 L360,150 Q404,148 420,164 L418,176 Q300,166 178,180 Q104,190 56,208 Z" fill="#25494a" opacity="0.55"/>
<!-- Plank/plate seams running the length of her -->
<path d="M62,200 Q180,176 418,164" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.6"/>
<path d="M60,210 Q190,190 424,180" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M70,220 Q200,206 426,198" fill="none" stroke="#0a1a1e" stroke-width="0.8" opacity="0.4"/>
<!-- Rib frames showing where the planking has gone -->
<path d="M120,172 L114,224" stroke="#0a1a1e" stroke-width="2" opacity="0.45"/>
<path d="M168,168 L164,228" stroke="#0a1a1e" stroke-width="2" opacity="0.4"/>
<path d="M330,152 L332,226" stroke="#0a1a1e" stroke-width="2" opacity="0.35"/>
<!-- Broken bow, open to the water -->
<path d="M52,214 Q60,182 108,172 L100,186 Q86,192 82,206 L88,218 Q68,220 52,214 Z" fill="#07141a" opacity="0.8"/>
<!-- Rail line along the top of the deck -->
<path d="M106,170 L358,148" fill="none" stroke="#2c5450" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
<!-- Rail stanchions -->
<rect x="128" y="160" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="180" y="156" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="234" y="151" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="288" y="147" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<rect x="340" y="143" width="2.4" height="10" fill="#2c5450" opacity="0.8"/>
<!-- Toppled mast, still attached, angled off toward the seabed -->
<path d="M250,152 L196,84" stroke="#173537" stroke-width="5" stroke-linecap="round"/>
<path d="M250,152 L196,84" stroke="#28524f" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
<path d="M214,106 L246,98" stroke="#173537" stroke-width="3" stroke-linecap="round"/>
<!-- Rope hanging from the mast in loops that no longer go anywhere -->
<path d="M200,90 Q184,116 196,132 Q208,146 194,158" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.75"><animate attributeName="d" values="M200,90 Q184,116 196,132 Q208,146 194,158;M200,90 Q188,116 192,132 Q204,146 198,158;M200,90 Q184,116 196,132 Q208,146 194,158" dur="9s" repeatCount="indefinite"/></path>
<path d="M228,101 Q244,124 232,140 Q222,152 234,162" fill="none" stroke="#2a3a2c" stroke-width="1.3" opacity="0.6"><animate attributeName="d" values="M228,101 Q244,124 232,140 Q222,152 234,162;M228,101 Q238,124 236,140 Q228,152 230,162;M228,101 Q244,124 232,140 Q222,152 234,162" dur="11s" repeatCount="indefinite" begin="1.5s"/></path>
<path d="M356,150 Q372,168 360,182 Q350,192 362,200" fill="none" stroke="#2a3a2c" stroke-width="1.4" opacity="0.6"><animate attributeName="d" values="M356,150 Q372,168 360,182 Q350,192 362,200;M356,150 Q366,168 364,182 Q356,192 358,200;M356,150 Q372,168 360,182 Q350,192 362,200" dur="10s" repeatCount="indefinite" begin="3s"/></path>
<!-- SAND banked along the hull like a drift of snow -->
<path d="M0,246 Q60,232 130,236 Q160,238 186,244 Q140,222 116,206 Q90,192 44,206 Q16,216 0,232 Z" fill="url(#wreckSand1)" opacity="0.9"/>
<path d="M300,244 Q346,224 388,206 Q420,192 462,204 Q488,212 500,228 L500,260 L296,260 Z" fill="url(#wreckSand1)" opacity="0.9"/>
<path d="M0,250 Q120,240 250,246 Q380,252 500,242 L500,260 L0,260 Z" fill="#2f5158" opacity="0.75"/>
<!-- Sand crest highlights -->
<path d="M20,230 Q60,214 104,208" fill="none" stroke="#3d666c" stroke-width="1.4" opacity="0.5"/>
<path d="M396,206 Q436,198 476,210" fill="none" stroke="#3d666c" stroke-width="1.4" opacity="0.45"/>
<!-- AMBER LAMPS strung along the rail, the only warm thing down here -->
<path d="M124,158 Q152,166 178,154 Q206,162 232,149 Q260,157 286,145 Q314,153 338,141" fill="none" stroke="#2c5450" stroke-width="0.9" opacity="0.7"/>
<circle cx="152" cy="164" r="26" fill="url(#wreckLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="206" cy="160" r="24" fill="url(#wreckLampG1)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></circle>
<circle cx="260" cy="155" r="26" fill="url(#wreckLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.45;0.6;0.4" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="314" cy="151" r="24" fill="url(#wreckLampG1)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3s" repeatCount="indefinite" begin="2.1s"/></circle>
<g fill="#F2C14E">
  <rect x="149" y="161" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="203" y="157" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.7;1;0.8;0.92;0.7" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></rect>
  <rect x="257" y="152" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></rect>
  <rect x="311" y="148" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="3s" repeatCount="indefinite" begin="2.1s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.7" opacity="0.7">
  <rect x="148" y="160" width="8" height="9" rx="1.8"/>
  <rect x="202" y="156" width="8" height="9" rx="1.8"/>
  <rect x="256" y="151" width="8" height="9" rx="1.8"/>
  <rect x="310" y="147" width="8" height="9" rx="1.8"/>
</g>
<!-- Amber wash on the sand directly under the lamps -->
<ellipse cx="235" cy="228" rx="120" ry="16" fill="#F2C14E" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Hatch on the deck, closed for now -->
<rect x="272" y="150" width="26" height="8" rx="2" fill="#0e2224" transform="rotate(-5,285,154)"/>
<rect x="274" y="151" width="22" height="2" rx="1" fill="#2c5450" opacity="0.5" transform="rotate(-5,285,154)"/>
<!-- THE DOORMAT, foreground, swept and level despite everything -->
<g transform="translate(214,236)">
  <path d="M-34,0 L34,0 L42,14 L-42,14 Z" fill="#5a4a22"/>
  <path d="M-34,0 L34,0 L36,4 L-36,4 Z" fill="#75612e" opacity="0.8"/>
  <path d="M-30,5 L32,5 M-32,9 L34,9" stroke="#3d3216" stroke-width="0.9" opacity="0.7"/>
  <path d="M-20,0 L-24,14 M-6,0 L-8,14 M8,0 L8,14 M22,0 L24,14" stroke="#3d3216" stroke-width="0.7" opacity="0.5"/>
</g>
<!-- THE CRAB, standing on the doormat, apparently in charge -->
<g transform="translate(214,232)">
  <ellipse cx="0" cy="0" rx="7" ry="4.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.4" rx="6" ry="3" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <circle cx="2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <circle cx="-2.1" cy="-3.7" r="0.4" fill="#ffeaa7"/>
  <circle cx="2.7" cy="-3.7" r="0.4" fill="#ffeaa7"/>
  <path d="M-6,-1 L-11,-4 L-13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M-6,-1 L-11,-4 L-13,-1;M-6,-1 L-11,-5 L-13,-2;M-6,-1 L-11,-4 L-13,-1" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M6,-1 L11,-4 L13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M6,-1 L11,-4 L13,-1;M6,-1 L11,-5 L13,-2;M6,-1 L11,-4 L13,-1" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></path>
  <path d="M-5,3 L-8,6 M0,4 L0,7 M5,3 L8,6" stroke="#8f3b2e" stroke-width="1.2" stroke-linecap="round"/>
</g>
<!-- Drifting motes in the lamplight -->
<circle cx="180" cy="188" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="188;170;188" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.35;0.12" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="292" cy="176" r="1.2" fill="#ffeaa7" opacity="0.25"><animate attributeName="cy" values="176;158;176" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="96" cy="140" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="140;120;140" dur="13s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="7s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="420" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;100;120" dur="14s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" begin="1s"/></circle>
<!-- Cold vignette from the water itself, top corners -->
<rect x="0" y="0" width="500" height="46" fill="#07141a" opacity="0.18"/>
</svg>`;

// Scene 2: Fredward comes out of the hatch upside down, waving. Brass suit,
// huge polished faceplate, comic body language, warm light on the glass.
STORY_SCENES['wreck_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="45%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckDeck2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckBrass2" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="45%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="50%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass2" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
  <radialGradient id="wreckLampG2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckGlow2"><feGaussianBlur stdDeviation="2" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckWater2)"/>
<!-- Light from far above -->
<polygon points="120,0 152,0 176,120 152,120" fill="#bfe6d8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 358,0 336,130 314,130" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="10s" repeatCount="indefinite" begin="2s"/></polygon>
<!-- Superstructure behind, silhouetted -->
<path d="M0,150 L60,146 L66,116 L118,112 L124,148 L200,144 L200,260 L0,260 Z" fill="#0d2028" opacity="0.7"/>
<path d="M410,140 L470,134 L476,104 L500,102 L500,260 L406,260 Z" fill="#0d2028" opacity="0.6"/>
<!-- Deck plane, tilted because she is on her side -->
<path d="M0,196 L500,168 L500,260 L0,260 Z" fill="url(#wreckDeck2)"/>
<path d="M0,196 L500,168 L500,178 L0,206 Z" fill="#2c5450" opacity="0.4"/>
<path d="M0,214 L500,186" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M0,232 L500,206" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Rail along the far edge with amber lamps -->
<path d="M0,190 L500,162" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.8"/>
<circle cx="72" cy="178" r="24" fill="url(#wreckLampG2)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3.1s" repeatCount="indefinite"/></circle>
<circle cx="424" cy="158" r="24" fill="url(#wreckLampG2)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.4;0.56;0.35" dur="2.8s" repeatCount="indefinite" begin="1.2s"/></circle>
<rect x="69" y="175" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.1s" repeatCount="indefinite"/></rect>
<rect x="421" y="155" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="2.8s" repeatCount="indefinite" begin="1.2s"/></rect>
<!-- THE HATCH, open, ring of brass, and Fredward coming out of it head first -->
<ellipse cx="250" cy="188" rx="46" ry="15" fill="#07141a"/>
<ellipse cx="250" cy="188" rx="46" ry="15" fill="none" stroke="url(#wreckBrass2)" stroke-width="3"/>
<ellipse cx="250" cy="186" rx="42" ry="12" fill="none" stroke="#c9962e" stroke-width="0.8" opacity="0.4"/>
<!-- Hatch cover swung back -->
<path d="M292,184 L338,160 L344,168 L298,192 Z" fill="#1d3b3a"/>
<path d="M292,184 L338,160 L340,163 L294,187 Z" fill="#2c5450" opacity="0.6"/>
<!-- Warm light spilling out of the open hatch -->
<ellipse cx="250" cy="188" rx="40" ry="12" fill="#F2C14E" opacity="0.18"><animate attributeName="opacity" values="0.1;0.24;0.1" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- FREDWARD, upside down, feet still in the hatch, waving -->
<g transform="translate(250,182)">
  <animateTransform attributeName="transform" type="translate" values="250,182;250,176;250,182" dur="4.2s" repeatCount="indefinite"/>
  <!-- Boots, still down in the hatch, comically weighted -->
  <rect x="-22" y="-4" width="17" height="12" rx="3" fill="#5c4409"/>
  <rect x="6" y="-4" width="17" height="12" rx="3" fill="#5c4409"/>
  <rect x="-22" y="-4" width="17" height="4" rx="2" fill="#8b6914" opacity="0.7"/>
  <rect x="6" y="-4" width="17" height="4" rx="2" fill="#8b6914" opacity="0.7"/>
  <!-- Legs going up out of the hatch -->
  <path d="M-13,-4 Q-16,-30 -12,-52" fill="none" stroke="url(#wreckSuit2)" stroke-width="13" stroke-linecap="round"/>
  <path d="M14,-4 Q18,-30 13,-52" fill="none" stroke="url(#wreckSuit2)" stroke-width="13" stroke-linecap="round"/>
  <!-- Torso, hanging upside down -->
  <path d="M-18,-52 Q0,-60 18,-52 L22,-92 Q0,-100 -22,-92 Z" fill="url(#wreckSuit2)"/>
  <!-- Suit creases -->
  <path d="M-14,-62 Q0,-66 14,-62 M-16,-74 Q0,-78 16,-74" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.6"/>
  <!-- Chest weight plate, brass, now near the top because he is inverted -->
  <rect x="-11" y="-90" width="22" height="10" rx="2" fill="url(#wreckBrass2)"/>
  <circle cx="-5" cy="-85" r="1.4" fill="#c9962e"/><circle cx="5" cy="-85" r="1.4" fill="#c9962e"/>
  <!-- Neck ring -->
  <ellipse cx="0" cy="-95" rx="15" ry="5" fill="url(#wreckBrass2)"/>
  <!-- THE HELMET, hanging below the body because everything is upside down -->
  <g transform="translate(0,-118)">
    <circle cx="0" cy="0" r="21" fill="url(#wreckBrass2)"/>
    <circle cx="0" cy="0" r="21" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <!-- Side port -->
    <circle cx="-17" cy="2" r="5" fill="#5c4409"/>
    <circle cx="-17" cy="2" r="3" fill="#123038" opacity="0.8"/>
    <circle cx="17" cy="2" r="5" fill="#5c4409"/>
    <!-- Rivets around the crown -->
    <circle cx="-11" cy="-16" r="1.2" fill="#c9962e"/><circle cx="0" cy="-19" r="1.2" fill="#c9962e"/>
    <circle cx="11" cy="-16" r="1.2" fill="#c9962e"/><circle cx="-18" cy="-9" r="1.2" fill="#c9962e"/>
    <circle cx="18" cy="-9" r="1.2" fill="#c9962e"/>
    <!-- THE FACEPLATE: bolted brass rim, dark glass, his face behind it,
         upside down along with the rest of him -->
    <circle cx="0.0" cy="1.0" r="14.0" fill="url(#wreckGlass2)"/>
    <g opacity="0.82" transform="rotate(180,0.0,3.43)">
    <ellipse cx="0.0" cy="3.43" rx="7.84" ry="8.96" fill="#9c7a5e"/>
    <path d="M-7.84,1.93 Q0.0,-6.09 7.84,1.93 L7.84,-2.73 Q0.0,-7.77 -7.84,-2.73 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-6.16,-0.31 Q0.0,-2.92 6.16,-0.31" fill="none" stroke="#5a4131" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,1.37 L-0.75,4.92 Q0.0,5.85 1.31,5.11" fill="none" stroke="#7a5c45" stroke-width="1.12" stroke-linecap="round" opacity="0.8"/>
    <g transform="rotate(180,0.0,3.43)"><path d="M-5.04,1.56 Q-3.17,-0.49 -1.31,1.56" fill="none" stroke="#2a1d12" stroke-width="1.4" stroke-linecap="round"/><path d="M1.31,1.56 Q3.17,-0.49 5.04,1.56" fill="none" stroke="#2a1d12" stroke-width="1.4" stroke-linecap="round"/></g>
    <path d="M-5.23,6.97 Q-2.24,5.48 0.0,6.6 Q2.24,5.48 5.23,6.97" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="1.0" r="14.0" fill="none" stroke="#8b6914" stroke-width="3.17"/>
    <circle cx="0.0" cy="1.0" r="15.31" fill="none" stroke="#c9962e" stroke-width="0.93" opacity="0.75"/>
    <circle cx="13.11" cy="6.43" r="0.93" fill="#5c4409"/><circle cx="5.43" cy="14.11" r="0.93" fill="#5c4409"/><circle cx="-5.43" cy="14.11" r="0.93" fill="#5c4409"/><circle cx="-13.11" cy="6.43" r="0.93" fill="#5c4409"/><circle cx="-13.11" cy="-4.43" r="0.93" fill="#5c4409"/><circle cx="-5.43" cy="-12.11" r="0.93" fill="#5c4409"/><circle cx="5.43" cy="-12.11" r="0.93" fill="#5c4409"/><circle cx="13.11" cy="-4.43" r="0.93" fill="#5c4409"/>
    <path d="M-8.77,-2.17 Q-4.67,-7.77 2.24,-8.15" fill="none" stroke="#dff6ea" stroke-width="2.24" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="3.6s" repeatCount="indefinite"/></path>
    <circle cx="5.79" cy="-4.97" r="1.59" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="3.6s" repeatCount="indefinite"/></circle>
    <path d="M-7.09,7.16 Q0.0,9.96 7.09,7.16" fill="none" stroke="#7fc4b8" stroke-width="1.31" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- Waving arm, big loose comic arc -->
  <path d="M20,-86 Q46,-92 54,-116" fill="none" stroke="url(#wreckSuit2)" stroke-width="10" stroke-linecap="round"><animate attributeName="d" values="M20,-86 Q46,-92 54,-116;M20,-86 Q48,-84 62,-102;M20,-86 Q46,-92 54,-116" dur="1.5s" repeatCount="indefinite"/></path>
  <circle cx="55" cy="-118" r="6.5" fill="#5c4409"><animate attributeName="cx" values="55;63;55" dur="1.5s" repeatCount="indefinite"/><animate attributeName="cy" values="-118;-104;-118" dur="1.5s" repeatCount="indefinite"/></circle>
  <!-- Other arm, bracing on the hatch rim -->
  <path d="M-20,-86 Q-42,-76 -48,-58" fill="none" stroke="url(#wreckSuit2)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="-49" cy="-56" r="6" fill="#5c4409"/>
  <!-- Air hose, coiling back down into the hatch -->
  <path d="M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.8"><animate attributeName="d" values="M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20;M14,-108 Q44,-102 46,-78 Q48,-56 28,-46 Q8,-38 18,-20;M14,-108 Q40,-104 44,-80 Q46,-58 26,-48 Q10,-40 18,-20" dur="6s" repeatCount="indefinite"/></path>
</g>
<!-- Bubbles from the helmet, streaming DOWNWARD in frame because he is inverted -->
<circle cx="266" cy="64" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="64;-10" dur="4.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="4.4s" repeatCount="indefinite"/></circle>
<circle cx="272" cy="70" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="70;-10" dur="5.6s" repeatCount="indefinite" begin="1.3s"/><animate attributeName="opacity" values="0;0.45;0" dur="5.6s" repeatCount="indefinite" begin="1.3s"/></circle>
<circle cx="260" cy="60" r="1.6" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="60;-10" dur="6.2s" repeatCount="indefinite" begin="2.8s"/><animate attributeName="opacity" values="0;0.4;0" dur="6.2s" repeatCount="indefinite" begin="2.8s"/></circle>
<!-- The doormat and the crab, foreground left, unbothered -->
<g transform="translate(92,238)">
  <path d="M-30,0 L30,0 L37,12 L-37,12 Z" fill="#5a4a22"/>
  <path d="M-30,0 L30,0 L32,3.6 L-32,3.6 Z" fill="#75612e" opacity="0.8"/>
  <path d="M-27,5 L28,5 M-29,8.4 L30,8.4" stroke="#3d3216" stroke-width="0.8" opacity="0.7"/>
</g>
<g transform="translate(92,234)">
  <ellipse cx="0" cy="0" rx="7" ry="4.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.4" rx="6" ry="3" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/><circle cx="2.4" cy="-3.4" r="1.1" fill="#0a1a1e"/>
  <path d="M-6,-1 L-11,-4 L-13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"><animate attributeName="d" values="M-6,-1 L-11,-4 L-13,-1;M-6,-1 L-11,-5 L-13,-2;M-6,-1 L-11,-4 L-13,-1" dur="2.4s" repeatCount="indefinite"/></path>
  <path d="M6,-1 L11,-4 L13,-1" fill="none" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M-5,3 L-8,6 M0,4 L0,7 M5,3 L8,6" stroke="#8f3b2e" stroke-width="1.2" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="160" cy="120" r="1" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="380" cy="96" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="96;76;96" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.06;0.24;0.06" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="330" cy="200" r="1" fill="#ffeaa7" opacity="0.25"><animate attributeName="cy" values="200;184;200" dur="10s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" begin="3s"/></circle>
</svg>`;

// Scene 3: Close on the catalogue book, open on a bolted table. Hand-drawn
// creature pages, notes down the margin, water not touching it, his gloved
// hand turning a page.
STORY_SCENES['wreck_3'] = (function () {
var H3 = 21;
var hand3x = (186 + H3 * 4.4 * 0.3) - 292, hand3y = (196 - H3 * 4.4 * 0.2) - (236 - fredFootDrop(H3));
var arms3 = '<path d="M' + wn(-H3 * 1.5) + ',' + wn(H3 * 2.05) + ' Q' + wn(hand3x * 0.55) + ',' + wn(H3 * 2.7) + ' ' + wn(hand3x + H3 * 0.5) + ',' + wn(hand3y - H3 * 0.15) + '" fill="none" stroke="url(#wSuit3)" stroke-width="' + wn(H3 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(hand3x) + ',' + wn(hand3y) + ')">' + wHand('3', H3, -1) + '</g>'
  + '<path d="M' + wn(H3 * 1.5) + ',' + wn(H3 * 2.05) + ' Q' + wn(H3 * 2.2) + ',' + wn(H3 * 3.2) + ' ' + wn(H3 * 2.02) + ',' + wn(H3 * 4.25) + '" fill="none" stroke="url(#wSuit3)" stroke-width="' + wn(H3 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(H3 * 2.02) + ',' + wn(H3 * 4.6) + ')">' + wHand('3', H3, 1) + '</g>';
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wreckWater3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#133440"/>
<stop offset="45%" stop-color="#133440"/>
<stop offset="100%" stop-color="#07141a"/>
</linearGradient><linearGradient id="wreckDeck3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20423f"/>
<stop offset="100%" stop-color="#0d2024"/>
</linearGradient><radialGradient id="wreckLampG3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/>
<stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/>
<stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
</radialGradient><linearGradient id="wSuit3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/>
<stop offset="52%" stop-color="#40614e"/>
<stop offset="100%" stop-color="#22382e"/>
</linearGradient><linearGradient id="wBrass3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/>
<stop offset="50%" stop-color="#8b6914"/>
<stop offset="100%" stop-color="#5c4409"/>
</linearGradient><radialGradient id="wGlass3" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>
<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>
<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
</radialGradient><radialGradient id="wreckBookLit3" cx="42%" cy="56%" r="60%"><stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.3"/>
<stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/>
<stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
</radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater3)"/>
<rect width="500" height="260" fill="url(#wreckBookLit3)"/>
<rect x="0" y="0" width="500" height="150" fill="#0d2028" opacity="0.5"/>
<path d="M0,148 L500,146" stroke="#1a4a55" stroke-width="1.2" opacity="0.35"/>
<path d="M56,30 Q38,58 54,78 Q68,94 52,110" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.45"><animate attributeName="d" values="M56,30 Q38,58 54,78 Q68,94 52,110;M56,30 Q44,58 50,78 Q64,94 56,110;M56,30 Q38,58 54,78 Q68,94 52,110" dur="10s" repeatCount="indefinite"/>
</path>
<g opacity="0.45" transform="rotate(-4,432,66)"><rect x="414" y="44" width="36" height="44" fill="#c8b784"/>
<path d="M421,72 Q428,58 437,65 Q444,71 442,78" fill="none" stroke="#4a3a18" stroke-width="1"/>
<path d="M419,82 L445,82 M419,86 L438,86" stroke="#4a3a18" stroke-width="0.6" opacity="0.7"/>
<circle cx="432" cy="46" r="1.8" fill="#8f3b2e"/>
</g>
<rect x="146" y="0" width="4" height="16" fill="#2c5450"/>
<path d="M132,16 L164,16 L158,28 L138,28 Z" fill="#5c4409"/>
<rect x="140" y="26" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/>
</rect>
<ellipse cx="148" cy="34" rx="44" ry="15" fill="#ffd700" opacity="0.11"><animate attributeName="opacity" values="0.06;0.16;0.06" dur="3.4s" repeatCount="indefinite"/>
</ellipse>
<path d="M0,236 L500,228 L500,260 L0,260 Z" fill="url(#wreckDeck3)"/>
<path d="M0,236 L500,228 L500,234 L0,242 Z" fill="#2c5450" opacity="0.3"/>
<rect x="18" y="196" width="44" height="34" rx="2" fill="#12292c"/>
<rect x="18" y="196" width="44" height="7" rx="2" fill="#1d3b3a" opacity="0.7"/>
<ellipse cx="452" cy="222" rx="22" ry="6" fill="none" stroke="#2a3a2c" stroke-width="2.4" opacity="0.45"/>
<ellipse cx="452" cy="218" rx="16" ry="4.6" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.38"/>
<g transform="translate(168,196)"><path d="M-125,0 L125,0 L132,10.5 L-132,10.5 Z" fill="#1d3b3a"/>
<path d="M-125,0 L125,0 L125,2.75 L-125,2.75 Z" fill="#2c5450" opacity="0.6"/>
<rect x="-93.75" y="10.5" width="7.5" height="30" fill="#173537"/>
<rect x="86.25" y="10.5" width="7.5" height="30" fill="#173537"/>
<rect x="-100.5" y="37" width="21" height="3.5" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="79.5" y="37" width="21" height="3.5" rx="1" fill="#5c4409" opacity="0.8"/>
</g>
<g transform="translate(186,194)"><path d="M-46.2,6.93 L46.2,6.93 L45.28,0 L-45.28,0 Z" fill="#8a7a4c"/>
<path d="M-45.28,0 L45.28,0 L44.35,-2.08 L-44.35,-2.08 Z" fill="#a5945f"/>
<path d="M-44.35,2.08 L44.35,2.08 M-44.35,4.3 L44.35,4.3" stroke="#6d5f38" stroke-width="0.37" opacity="0.55"/>
<path d="M-43.43,-2.08 Q-20.79,-5.57 0,-4.02 L0,-38.81 Q-20.79,-41.14 -43.43,-34.15 Z" fill="#e8dcae"/>
<path d="M0,-4.02 Q20.79,-5.57 43.43,-2.08 L43.43,-34.15 Q20.79,-41.14 0,-38.81 Z" fill="#ddd0a0"/>
<path d="M0,-38.81 L0,-4.02" stroke="#8a7a4c" stroke-width="1.11" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.42" opacity="0.45"><path d="M-37.88,-10.87 L-7.39,-11.25"/>
<path d="M7.39,-11.25 L37.88,-10.87"/>
<path d="M-37.88,-15.14 L-7.39,-15.52"/>
<path d="M7.39,-15.52 L37.88,-15.14"/>
<path d="M-37.88,-19.4 L-7.39,-19.79"/>
<path d="M7.39,-19.79 L37.88,-19.4"/>
<path d="M-37.88,-23.67 L-7.39,-24.06"/>
<path d="M7.39,-24.06 L37.88,-23.67"/>
</g>
<path d="M-33.26,-27.94 Q-23.1,-34.15 -13.86,-28.33 Q-5.54,-23.28 1.85,-28.72" fill="none" stroke="#3a2e12" stroke-width="0.83" stroke-linecap="round"/>
<ellipse cx="22.18" cy="-26.39" rx="6.47" ry="4.25" fill="none" stroke="#3a2e12" stroke-width="0.74"/>
<path d="M15.25,-27.17 L11.09,-30.27 M29.11,-27.17 L33.26,-30.27 M17.56,-22.51 L15.25,-18.24 M26.8,-22.51 L29.11,-18.24" stroke="#3a2e12" stroke-width="0.55" stroke-linecap="round"/>
</g>
`
  + fred({ s: '3', h: H3, x: 292, y: 236 - fredFootDrop(H3), pose: 'standing', expr: 'closed', dur: '4s', hose: 'right', tilt: -6, arms: arms3 })
  + `
<circle cx="308" cy="49.349999999999994" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="49.349999999999994;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/>
<animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="302" cy="43.349999999999994" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="43.349999999999994;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/>
<animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/>
</circle>
<rect x="70" y="188" width="34" height="2.6" rx="1.3" fill="#7a5a18" transform="rotate(-3,87,189)"/>
<path d="M104,188 L110,189.4 L104,190.8 Z" fill="#2a2a2a" transform="rotate(-3,87,189)"/>
<rect x="248" y="180" width="11" height="13" rx="2" fill="#0e2224"/>
<rect x="248" y="180" width="11" height="4" rx="2" fill="#1a3a3c"/>
<rect x="251" y="176" width="5" height="5" rx="1" fill="#5c4409"/>
<g transform="translate(120,184)"><circle cx="0" cy="0" r="8" fill="#123038" opacity="0.5"/>
<circle cx="0" cy="0" r="8" fill="none" stroke="url(#wBrass3)" stroke-width="2"/>
<path d="M6,6 L14,13" stroke="url(#wBrass3)" stroke-width="2.6" stroke-linecap="round"/>
</g>
<path d="M0,168 L500,160" fill="none" stroke="#2c5450" stroke-width="1.6" opacity="0.6"/>
<circle cx="66" cy="166" r="22" fill="url(#wreckLampG3)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3.1s" repeatCount="indefinite" begin="0s"/>
</circle>
<rect x="63" y="163" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.1s" repeatCount="indefinite" begin="0s"/>
</rect>
<circle cx="430" cy="162" r="20" fill="url(#wreckLampG3)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="2.8s" repeatCount="indefinite" begin="1.2s"/>
</circle>
<rect x="427" y="159" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="2.8s" repeatCount="indefinite" begin="1.2s"/>
</rect>
<circle cx="96" cy="70" r="1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="70;52;70" dur="9s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="4.5s" repeatCount="indefinite"/>
</circle>
<circle cx="352" cy="52" r="1.2" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="52;34;52" dur="11s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="5.5s" repeatCount="indefinite"/>
</circle>
<circle cx="468" cy="118" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="118;100;118" dur="12s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6s" repeatCount="indefinite"/>
</circle>
<circle cx="34" cy="104" r="0.9" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="104;86;104" dur="13s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6.5s" repeatCount="indefinite"/>
</circle>
</svg>`;
})();

// Scene 4: Fredward with his palm flat on the open book, holding your eye,
// the one moment he is making a case. The book magnificent. Whole deck behind.
STORY_SCENES['wreck_4'] = (function () {
var H4 = 21;
var page4x = (246 + H4 * 4.4 * 0.3) - 350, page4y = (194 - H4 * 4.4 * 0.16) - (232 - fredFootDrop(H4));
var arms4 = '<path d="M' + wn(-H4 * 1.5) + ',' + wn(H4 * 2.05) + ' Q' + wn(page4x * 0.6) + ',' + wn(H4 * 2.7) + ' ' + wn(page4x + H4 * 0.5) + ',' + wn(page4y - H4 * 0.15) + '" fill="none" stroke="url(#wSuit4)" stroke-width="' + wn(H4 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(page4x) + ',' + wn(page4y) + ')">' + wHand('4', H4, -1) + '</g>'
  + '<path d="M' + wn(H4 * 1.5) + ',' + wn(H4 * 2.05) + ' Q' + wn(H4 * 2.3) + ',' + wn(H4 * 3.2) + ' ' + wn(H4 * 2.05) + ',' + wn(H4 * 4.3) + '" fill="none" stroke="url(#wSuit4)" stroke-width="' + wn(H4 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(H4 * 2.05) + ',' + wn(H4 * 4.65) + ')">' + wHand('4', H4, 1) + '</g>';
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wreckWater4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a4a55"/>
<stop offset="45%" stop-color="#133440"/>
<stop offset="100%" stop-color="#07141a"/>
</linearGradient><linearGradient id="wreckDeck4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20423f"/>
<stop offset="100%" stop-color="#0d2024"/>
</linearGradient><radialGradient id="wreckLampG4" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/>
<stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/>
<stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
</radialGradient><linearGradient id="wSuit4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/>
<stop offset="52%" stop-color="#40614e"/>
<stop offset="100%" stop-color="#22382e"/>
</linearGradient><linearGradient id="wBrass4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/>
<stop offset="50%" stop-color="#8b6914"/>
<stop offset="100%" stop-color="#5c4409"/>
</linearGradient><radialGradient id="wGlass4" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>
<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>
<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
</radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater4)"/>
<polygon points="90,0 118,0 140,120 118,120" fill="#bfe6d8" opacity="0.06"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="9s" repeatCount="indefinite"/>
</polygon>
<polygon points="360,0 386,0 362,130 340,130" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/>
</polygon>
<path d="M0,152 L500,124 L500,164 L0,192 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,232 L500,202 L500,260 L0,260 Z" fill="url(#wreckDeck4)"/>
<path d="M0,232 L500,202 L500,210 L0,240 Z" fill="#2c5450" opacity="0.32"/>
<path d="M0,252 L500,218" stroke="#0a1a1e" stroke-width="1" opacity="0.35"/>
<path d="M0,156 L500,126" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.75"/>
<path d="M0,162 Q46,170 92,160 Q140,168 186,156 Q234,164 280,152 Q328,160 374,146 Q420,154 466,140" fill="none" stroke="#2c5450" stroke-width="0.8" opacity="0.55"/>
<circle cx="48" cy="166" r="22" fill="url(#wreckLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3.1s" repeatCount="indefinite" begin="0s"/>
</circle>
<rect x="45" y="163" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.1s" repeatCount="indefinite" begin="0s"/>
</rect>
<circle cx="146" cy="162" r="20" fill="url(#wreckLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="2.7s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<rect x="143" y="159" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="2.7s" repeatCount="indefinite" begin="0.8s"/>
</rect>
<circle cx="422" cy="146" r="19" fill="url(#wreckLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3s" repeatCount="indefinite" begin="2.4s"/>
</circle>
<rect x="419" y="143" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3s" repeatCount="indefinite" begin="2.4s"/>
</rect>
<rect x="446" y="140" width="34" height="26" rx="2" fill="#1d3b3a"/>
<rect x="446" y="140" width="34" height="6" rx="2" fill="#2c5450" opacity="0.6"/>
<ellipse cx="404" cy="168" rx="16" ry="5" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.55"/>
<ellipse cx="404" cy="165" rx="12" ry="4" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.45"/>
<g transform="translate(246,194)"><path d="M-118,0 L118,0 L124.61,9.91 L-124.61,9.91 Z" fill="#1d3b3a"/>
<path d="M-118,0 L118,0 L118,2.6 L-118,2.6 Z" fill="#2c5450" opacity="0.6"/>
<rect x="-88.5" y="9.91" width="7.08" height="30" fill="#173537"/>
<rect x="81.42" y="9.91" width="7.08" height="30" fill="#173537"/>
<rect x="-94.87" y="36.61" width="19.82" height="3.3" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="75.05" y="36.61" width="19.82" height="3.3" rx="1" fill="#5c4409" opacity="0.8"/>
</g>
<g transform="translate(246,192)"><path d="M-46.2,6.93 L46.2,6.93 L45.28,0 L-45.28,0 Z" fill="#8a7a4c"/>
<path d="M-45.28,0 L45.28,0 L44.35,-2.08 L-44.35,-2.08 Z" fill="#a5945f"/>
<path d="M-44.35,2.08 L44.35,2.08 M-44.35,4.3 L44.35,4.3" stroke="#6d5f38" stroke-width="0.37" opacity="0.55"/>
<path d="M-43.43,-2.08 Q-20.79,-5.57 0,-4.02 L0,-38.81 Q-20.79,-41.14 -43.43,-34.15 Z" fill="#e8dcae"/>
<path d="M0,-4.02 Q20.79,-5.57 43.43,-2.08 L43.43,-34.15 Q20.79,-41.14 0,-38.81 Z" fill="#ddd0a0"/>
<path d="M0,-38.81 L0,-4.02" stroke="#8a7a4c" stroke-width="1.11" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.42" opacity="0.45"><path d="M-37.88,-10.87 L-7.39,-11.25"/>
<path d="M7.39,-11.25 L37.88,-10.87"/>
<path d="M-37.88,-15.14 L-7.39,-15.52"/>
<path d="M7.39,-15.52 L37.88,-15.14"/>
<path d="M-37.88,-19.4 L-7.39,-19.79"/>
<path d="M7.39,-19.79 L37.88,-19.4"/>
<path d="M-37.88,-23.67 L-7.39,-24.06"/>
<path d="M7.39,-24.06 L37.88,-23.67"/>
</g>
<path d="M-33.26,-27.94 Q-23.1,-34.15 -13.86,-28.33 Q-5.54,-23.28 1.85,-28.72" fill="none" stroke="#3a2e12" stroke-width="0.83" stroke-linecap="round"/>
<ellipse cx="22.18" cy="-26.39" rx="6.47" ry="4.25" fill="none" stroke="#3a2e12" stroke-width="0.74"/>
<path d="M15.25,-27.17 L11.09,-30.27 M29.11,-27.17 L33.26,-30.27 M17.56,-22.51 L15.25,-18.24 M26.8,-22.51 L29.11,-18.24" stroke="#3a2e12" stroke-width="0.55" stroke-linecap="round"/>
</g>
<ellipse cx="246" cy="173.67" rx="46.2" ry="18.48" fill="#ffeaa7" opacity="0.09"><animate attributeName="opacity" values="0.05;0.13;0.05" dur="4s" repeatCount="indefinite"/>
</ellipse>
`
  + fred({ s: '4', h: H4, x: 350, y: 232 - fredFootDrop(H4), pose: 'standing', expr: 'open', dur: '4s', hose: 'right', arms: arms4 })
  + `
<circle cx="368" cy="43.349999999999994" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="43.349999999999994;-10" dur="5.6s" repeatCount="indefinite" begin="0s"/>
<animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="0s"/>
</circle>
<circle cx="362" cy="37.349999999999994" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="37.349999999999994;-10" dur="7s" repeatCount="indefinite" begin="2.4s"/>
<animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="2.4s"/>
</circle>
<circle cx="90" cy="110" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="110;92;110" dur="12s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6s" repeatCount="indefinite"/>
</circle>
<circle cx="400" cy="90" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="90;72;90" dur="14s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="7s" repeatCount="indefinite"/>
</circle>
<circle cx="200" cy="60" r="1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="60;42;60" dur="10s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="5s" repeatCount="indefinite"/>
</circle>
</svg>`;
})();

// Scene 5: Fredward propped against the rail mid-explanation, hands open and
// deliberately still, not reaching for anything. The step is about asking
// rather than chasing, so the water behind him is EMPTY. No creature in frame,
// deliberately: nothing is being approached and nothing is approaching.
STORY_SCENES['wreck_5'] = (function () {
var H5 = 21;
var hy5 = H5 * 3.55, hx5 = H5 * 2.6;
var arms5 = '<path d="M' + wn(-H5 * 1.5) + ',' + wn(H5 * 2.05) + ' Q' + wn(-H5 * 2.4) + ',' + wn(H5 * 2.9) + ' ' + wn(-hx5) + ',' + wn(hy5 - H5 * 0.3) + '" fill="none" stroke="url(#wSuit5)" stroke-width="' + wn(H5 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(-hx5) + ',' + wn(hy5) + ') rotate(-16)">' + wHand('5', H5, -1) + '</g>'
  + '<path d="M' + wn(H5 * 1.5) + ',' + wn(H5 * 2.05) + ' Q' + wn(H5 * 2.4) + ',' + wn(H5 * 2.9) + ' ' + wn(hx5) + ',' + wn(hy5 - H5 * 0.3) + '" fill="none" stroke="url(#wSuit5)" stroke-width="' + wn(H5 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(hx5) + ',' + wn(hy5) + ') rotate(16)">' + wHand('5', H5, 1) + '</g>';
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wreckWater5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#133440"/>
<stop offset="55%" stop-color="#0d2028"/>
<stop offset="100%" stop-color="#07141a"/>
</linearGradient><linearGradient id="wreckDeck5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20423f"/>
<stop offset="100%" stop-color="#0d2024"/>
</linearGradient><radialGradient id="wreckLampG5" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/>
<stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/>
<stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
</radialGradient><linearGradient id="wSuit5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/>
<stop offset="52%" stop-color="#40614e"/>
<stop offset="100%" stop-color="#22382e"/>
</linearGradient><linearGradient id="wBrass5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/>
<stop offset="50%" stop-color="#8b6914"/>
<stop offset="100%" stop-color="#5c4409"/>
</linearGradient><radialGradient id="wGlass5" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>
<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>
<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
</radialGradient><radialGradient id="wreckPool5" cx="50%" cy="62%" r="54%"><stop offset="0%" stop-color="#F2C14E" stop-opacity="0.14"/>
<stop offset="70%" stop-color="#F2C14E" stop-opacity="0.03"/>
<stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
</radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater5)"/>
<rect width="500" height="260" fill="url(#wreckPool5)"/>
<rect x="0" y="0" width="500" height="176" fill="#07141a" opacity="0.2"/>
<path d="M0,218 L500,208 L500,260 L0,260 Z" fill="url(#wreckDeck5)"/>
<path d="M0,218 L500,208 L500,215 L0,225 Z" fill="#2c5450" opacity="0.32"/>
<path d="M0,240 L500,226" stroke="#0a1a1e" stroke-width="1" opacity="0.3"/>
<path d="M0,176 L500,166" fill="none" stroke="#2c5450" stroke-width="2.6" opacity="0.85"/>
<path d="M0,188 L500,178" fill="none" stroke="#2c5450" stroke-width="1.2" opacity="0.5"/>
<rect x="38.4" y="175.2" width="3.2" height="43.6" fill="#2c5450" opacity="0.7"/>
<rect x="148.4" y="173" width="3.2" height="48" fill="#2c5450" opacity="0.7"/>
<rect x="298.4" y="170" width="3.2" height="54" fill="#2c5450" opacity="0.7"/>
<rect x="428.4" y="167.4" width="3.2" height="59.2" fill="#2c5450" opacity="0.7"/>
<circle cx="120" cy="174" r="28" fill="url(#wreckLampG5)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3.3s" repeatCount="indefinite" begin="0s"/>
</circle>
<rect x="117" y="171" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.3s" repeatCount="indefinite" begin="0s"/>
</rect>
<circle cx="392" cy="166" r="26" fill="url(#wreckLampG5)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="2.9s" repeatCount="indefinite" begin="1.1s"/>
</circle>
<rect x="389" y="163" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="2.9s" repeatCount="indefinite" begin="1.1s"/>
</rect>
`
  + fred({ s: '5', h: H5, x: 232, y: 218 - fredFootDrop(H5), pose: 'leaning', expr: 'open', dur: '4.2s', hose: 'right', arms: arms5 })
  + `
<ellipse cx="232" cy="221" rx="44.1" ry="6.72" fill="#07141a" opacity="0.3"/>
<circle cx="248" cy="31.349999999999994" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="31.349999999999994;-10" dur="5.6s" repeatCount="indefinite" begin="0.6s"/>
<animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="0.6s"/>
</circle>
<circle cx="242" cy="25.349999999999994" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="25.349999999999994;-10" dur="7s" repeatCount="indefinite" begin="3s"/>
<animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3s"/>
</circle>
<g transform="translate(96,196)"><path d="M-75,0 L75,0 L79.2,6.3 L-79.2,6.3 Z" fill="#1d3b3a"/>
<path d="M-75,0 L75,0 L75,1.65 L-75,1.65 Z" fill="#2c5450" opacity="0.6"/>
<rect x="-56.25" y="6.3" width="4.5" height="16" fill="#173537"/>
<rect x="51.75" y="6.3" width="4.5" height="16" fill="#173537"/>
<rect x="-60.3" y="20.2" width="12.6" height="2.1" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="47.7" y="20.2" width="12.6" height="2.1" rx="1" fill="#5c4409" opacity="0.8"/>
</g>
<g transform="translate(96,194)"><path d="M-33.6,5.04 L33.6,5.04 L32.93,0 L-32.93,0 Z" fill="#8a7a4c"/>
<path d="M-32.93,0 L32.93,0 L32.26,-1.51 L-32.26,-1.51 Z" fill="#a5945f"/>
<path d="M-32.26,1.51 L32.26,1.51 M-32.26,3.12 L32.26,3.12" stroke="#6d5f38" stroke-width="0.27" opacity="0.55"/>
<path d="M-31.58,-1.51 Q-15.12,-4.05 0,-2.92 L0,-28.22 Q-15.12,-29.92 -31.58,-24.84 Z" fill="#e8dcae"/>
<path d="M0,-2.92 Q15.12,-4.05 31.58,-1.51 L31.58,-24.84 Q15.12,-29.92 0,-28.22 Z" fill="#ddd0a0"/>
<path d="M0,-28.22 L0,-2.92" stroke="#8a7a4c" stroke-width="0.81" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.3" opacity="0.45"><path d="M-27.55,-7.9 L-5.38,-8.18"/>
<path d="M5.38,-8.18 L27.55,-7.9"/>
<path d="M-27.55,-11.01 L-5.38,-11.29"/>
<path d="M5.38,-11.29 L27.55,-11.01"/>
<path d="M-27.55,-14.11 L-5.38,-14.39"/>
<path d="M5.38,-14.39 L27.55,-14.11"/>
<path d="M-27.55,-17.22 L-5.38,-17.5"/>
<path d="M5.38,-17.5 L27.55,-17.22"/>
</g>
<path d="M-24.19,-20.32 Q-16.8,-24.84 -10.08,-20.6 Q-4.03,-16.93 1.34,-20.89" fill="none" stroke="#3a2e12" stroke-width="0.6" stroke-linecap="round"/>
<ellipse cx="16.13" cy="-19.19" rx="4.7" ry="3.09" fill="none" stroke="#3a2e12" stroke-width="0.54"/>
<path d="M11.09,-19.76 L8.06,-22.01 M21.17,-19.76 L24.19,-22.01 M12.77,-16.37 L11.09,-13.27 M19.49,-16.37 L21.17,-13.27" stroke="#3a2e12" stroke-width="0.4" stroke-linecap="round"/>
</g>
<g transform="translate(422,236)"><path d="M-22,0 L22,0 L26.84,9.24 L-26.84,9.24 Z" fill="#5a4a22"/>
<path d="M-22,0 L22,0 L22.88,2.64 L-22.88,2.64 Z" fill="#75612e" opacity="0.78"/>
<path d="M-19.8,4.18 L20.46,4.18 M-21.12,6.95 L22,6.95" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(422,232)"><ellipse cx="0" cy="0" rx="6.4" ry="4.29" fill="#8f3b2e"/>
<ellipse cx="0" cy="-1.28" rx="5.44" ry="2.69" fill="#b04a38" opacity="0.85"/>
<circle cx="-2.24" cy="-3.07" r="0.96" fill="#0a1a1e"/>
<circle cx="2.24" cy="-3.07" r="0.96" fill="#0a1a1e"/>
<path d="M-5.44,-0.96 L-10.11,-3.71 L-12.03,-0.96" fill="none" stroke="#8f3b2e" stroke-width="1.47" stroke-linecap="round"></path>
<path d="M5.44,-0.96 L10.11,-3.71 L12.03,-0.96" fill="none" stroke="#8f3b2e" stroke-width="1.47" stroke-linecap="round"/>
<path d="M-4.48,2.69 L-7.17,5.44 M0,3.52 L0,6.4 M4.48,2.69 L7.17,5.44" stroke="#8f3b2e" stroke-width="1.09" stroke-linecap="round"/>
</g>
<circle cx="200" cy="90" r="1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="90;72;90" dur="11s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="5.5s" repeatCount="indefinite"/>
</circle>
<circle cx="112" cy="140" r="1.1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="140;122;140" dur="13s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6.5s" repeatCount="indefinite"/>
</circle>
<circle cx="300" cy="46" r="0.9" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="46;28;46" dur="14s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="7s" repeatCount="indefinite"/>
</circle>
</svg>`;
})();


// Scene 6: The lure held flat on two palms. Hero prop shot. Every part of it
// is a named thing a man bent by hand and did not get quite right: a coat
// hanger of brass wire twisted closed at the top, three glass floats threaded
// on it, a length of knotted fishing line wound round the frame, and one small
// brass bell with a flat spot where it has been dropped.
STORY_SCENES['wreck_6'] = (function () {
  // Close shot. Same man, same proportions, only the camera moved: h is the
  // deck scale times 1.55. The composition is anchored on the HANDS, since
  // that is what the shot is about, and the body is built up from them.
  var CH = 21 * 1.55;
  var LURE_S = 0.52, LURE_Y = 176;
  var LURE_TOP = LURE_Y - 82 * LURE_S;
  var HANDS_Y = LURE_Y + 30 * LURE_S;
  var HEAD_R = CH * 0.86;
  var HEAD_Y = LURE_TOP - HEAD_R - 8;
  // both forearms come down and in to the palms; every joint stays in frame
  var arms = [-1, 1].map(function (d) {
    var sx = d * CH * 1.4, sy = CH * 0.45, ex = d * CH * 2.25, ey = CH * 1.35;
    var wx = d * CH * 1.32, wy = HANDS_Y - HEAD_Y;
    return '<path d="M' + wn(sx) + ',' + wn(sy) + ' Q' + wn(ex) + ',' + wn(ey) + ' ' + wn(wx) + ',' + wn(wy) +
      '" fill="none" stroke="url(#wSuit6)" stroke-width="' + wn(CH * 0.5) + '" stroke-linecap="round"/>'
      + '<g transform="translate(' + wn(wx) + ',' + wn(wy) + ') rotate(' + (d * 26) + ')">'
      + '<rect x="' + wn(-CH * 0.3) + '" y="' + wn(-CH * 0.15) + '" width="' + wn(CH * 0.6) + '" height="' + wn(CH * 0.3) +
        '" rx="' + wn(CH * 0.06) + '" fill="#5f5122"/>'
      + '<rect x="' + wn(-CH * 0.3) + '" y="' + wn(-CH * 0.15) + '" width="' + wn(CH * 0.6) + '" height="' + wn(CH * 0.1) +
        '" rx="' + wn(CH * 0.04) + '" fill="#8a7638" opacity="0.45"/></g>';
  }).join('');
  return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wreckWater6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#133440"/>
<stop offset="60%" stop-color="#0d2028"/>
<stop offset="100%" stop-color="#07141a"/>
</linearGradient><radialGradient id="wreckLureLit6" cx="50%" cy="46%" r="52%"><stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.24"/>
<stop offset="50%" stop-color="#F2C14E" stop-opacity="0.07"/>
<stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
</radialGradient><linearGradient id="wreckWire6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8bd63"/>
<stop offset="45%" stop-color="#a8892f"/>
<stop offset="100%" stop-color="#6d5a18"/>
</linearGradient><linearGradient id="wreckFloat6" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0%" stop-color="#9dc0b6" stop-opacity="0.62"/>
<stop offset="45%" stop-color="#4e7d78" stop-opacity="0.42"/>
<stop offset="100%" stop-color="#132a30" stop-opacity="0.8"/>
</linearGradient><linearGradient id="wreckBellB6" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8d7a3c"/>
<stop offset="40%" stop-color="#5d5021"/>
<stop offset="100%" stop-color="#332d11"/>
</linearGradient><linearGradient id="wSuit6" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/>
<stop offset="52%" stop-color="#40614e"/>
<stop offset="100%" stop-color="#22382e"/>
</linearGradient><linearGradient id="wBrass6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/>
<stop offset="50%" stop-color="#8b6914"/>
<stop offset="100%" stop-color="#5c4409"/>
</linearGradient><radialGradient id="wGlass6" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>
<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>
<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
</radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater6)"/>
<rect width="500" height="260" fill="url(#wreckLureLit6)"/>
<rect x="0" y="0" width="500" height="128" fill="#07141a" opacity="0.5"/>
<path d="M0,126 L500,122" stroke="#1a4a55" stroke-width="1.2" opacity="0.25"/>
<rect x="430" y="86" width="70" height="46" rx="2" fill="#0f2528" opacity="0.6"/>
<path d="M34,20 Q14,48 32,68 Q48,84 28,102" fill="none" stroke="#2a3a2c" stroke-width="2.4" opacity="0.35"><animate attributeName="d" values="M34,20 Q14,48 32,68 Q48,84 28,102;M34,20 Q20,48 28,68 Q44,84 32,102;M34,20 Q14,48 32,68 Q48,84 28,102" dur="11s" repeatCount="indefinite"/>
</path>
`
    + fred({ s: '6', h: HEAD_R, x: 250, y: HEAD_Y, pose: 'closeUp', expr: 'closed', dur: '4s', arms: arms, hose: 'right' })
    + `
<ellipse cx="250" cy="193.6" rx="34.18" ry="7.16" fill="#1b2c24" opacity="0.45"/>
<ellipse cx="250" cy="182" rx="43.94" ry="37.43" fill="#07141a" opacity="0.82"/>
<ellipse cx="250" cy="182" rx="43.94" ry="37.43" fill="#F2C14E" opacity="0.07"/>
<g transform="translate(250,176) scale(0.52)"><animateTransform attributeName="transform" type="translate" values="0,0;0,1.4;0,0" dur="6.5s" repeatCount="indefinite" additive="sum"/>
<path d="M0,-52 Q-46,-34 -54,10 Q-58,40 -22,48 Q4,54 30,46 Q62,36 58,4 Q54,-32 0,-52 Z" fill="none" stroke="url(#wreckWire6)" stroke-width="4.4" stroke-linejoin="round"/>
<path d="M0,-52 Q-46,-34 -54,10 Q-58,40 -22,48 Q4,54 30,46 Q62,36 58,4 Q54,-32 0,-52 Z" fill="none" stroke="#9c8a4a" stroke-width="1" opacity="0.3"/>
<path d="M-3,-52 L-3,-70 M3,-52 L3,-70" stroke="#5f5122" stroke-width="3" stroke-linecap="round"/>
<path d="M-4,-56 L4,-59 M-4,-60 L4,-63 M-4,-64 L4,-67" stroke="#3b3414" stroke-width="1.8" stroke-linecap="round"/>
<path d="M-3,-70 Q-3,-82 3,-82 Q9,-82 8,-72" fill="none" stroke="url(#wreckWire6)" stroke-width="3.4" stroke-linecap="round"/>
<path d="M-52,-2 L56,-8" stroke="url(#wreckWire6)" stroke-width="3" stroke-linecap="round"/>
<circle cx="-52" cy="-2" r="4.4" fill="#5f5122"/>
<circle cx="-53" cy="-3.4" r="1.6" fill="#9c8a4a" opacity="0.4"/>
<circle cx="56" cy="-8" r="2" fill="#5f5122"/>
<g><circle cx="-28" cy="-4" r="11" fill="url(#wreckFloat6)"/>
<circle cx="-28" cy="-4" r="11" fill="none" stroke="#6a9a92" stroke-width="0.8" opacity="0.35"/>
<path d="M-34,-9 Q-31,-13 -26,-13" fill="none" stroke="#b9d6cc" stroke-width="1.8" stroke-linecap="round" opacity="0.32"><animate attributeName="opacity" values="0.18;0.4;0.18" dur="3.6s" repeatCount="indefinite"/>
</path>
<path d="M-39,-4 L-17,-4" stroke="#5f5122" stroke-width="3" opacity="0.35"/>
</g>
<g><circle cx="4" cy="-6" r="14" fill="url(#wreckFloat6)"/>
<circle cx="4" cy="-6" r="14" fill="none" stroke="#6a9a92" stroke-width="0.8" opacity="0.35"/>
<path d="M-3,-12 Q1,-17 7,-16" fill="none" stroke="#b9d6cc" stroke-width="2.2" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.2;0.44;0.2" dur="4.4s" repeatCount="indefinite" begin="1.2s"/>
</path>
<path d="M-10,-6 L18,-6" stroke="#5f5122" stroke-width="3" opacity="0.35"/>
</g>
<g><circle cx="36" cy="-7" r="9" fill="url(#wreckFloat6)"/>
<circle cx="36" cy="-7" r="9" fill="none" stroke="#6a9a92" stroke-width="0.7" opacity="0.32"/>
<path d="M43,-11 L46,-6 L41,-2 Z" fill="#0d2028" opacity="0.7"/>
<path d="M28,-7 L45,-7" stroke="#5f5122" stroke-width="2.6" opacity="0.35"/>
</g>
<path d="M-53,14 Q-30,26 -6,22 Q20,18 44,28 Q54,32 57,20" fill="none" stroke="#3b4a34" stroke-width="2.6"/>
<g fill="#3b4a34"><ellipse cx="-30" cy="22" rx="3.6" ry="3"/>
<ellipse cx="-6" cy="22" rx="3.8" ry="3.2"/>
<ellipse cx="20" cy="19" rx="3.4" ry="2.8"/>
<ellipse cx="44" cy="28" rx="3.6" ry="3"/>
</g>
<path d="M-53,14 Q-70,26 -64,46" fill="none" stroke="#3b4a34" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M-53,14 Q-70,26 -64,46;M-53,14 Q-76,24 -66,44;M-53,14 Q-70,26 -64,46" dur="5s" repeatCount="indefinite"/>
</path>
<path d="M4,50 L4,60" stroke="url(#wreckWire6)" stroke-width="2.4" stroke-linecap="round"/>
<g transform="translate(4,62)"><animateTransform attributeName="transform" type="rotate" values="-5,0,-2;5,0,-2;-5,0,-2" dur="4.6s" repeatCount="indefinite" additive="sum"/>
<circle cx="0" cy="-2" r="3" fill="none" stroke="#5f5122" stroke-width="1.8"/>
<path d="M-12,16 Q-12,0 -6,-2 Q0,-3.4 6,-2 Q12,0 12,16 Z" fill="url(#wreckBellB6)"/>
<path d="M-12,16 Q0,21 12,16 L12,19.4 Q0,24.4 -12,19.4 Z" fill="#3b3414"/>
<path d="M5,2 L11.6,8 L9,15 L12,15 L12,4 Z" fill="#2a2410"/>
<path d="M-7,2 Q-4,-1 0,-1.6" fill="none" stroke="#c3b177" stroke-width="1.4" stroke-linecap="round" opacity="0.35"/>
<path d="M0,16 L0,21" stroke="#3b3414" stroke-width="1.2"/>
<circle cx="0" cy="22.4" r="2.4" fill="#3b3414"/>
</g>
<g fill="#3f4a2c" opacity="0.4"><ellipse cx="-40" cy="-24" rx="7" ry="4.4" transform="rotate(-28,-40,-24)"/>
<ellipse cx="46" cy="16" rx="6" ry="3.6" transform="rotate(18,46,16)"/>
<ellipse cx="-16" cy="42" rx="8" ry="3.8"/>
</g>
<path d="M-54,10 Q-70,2 -62,-10" fill="none" stroke="url(#wreckWire6)" stroke-width="3" stroke-linecap="round"/>
</g>
<g transform="translate(207.03,191.6) rotate(30)"><path d="M14,-6.59 Q2.47,-13.18 -13.18,-8.24 Q-21.41,-0.82 -15.65,9.06 Q-3.29,16.47 13.18,9.88 Z" fill="#40614e"/>
<path d="M-1.65,-8.56 L-2.47,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M-7.58,-8.56 L-8.4,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M-13.51,-8.56 L-14.33,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M11.53,-1.65 Q17.29,0.82 18.94,7.41 Q16.47,13.18 11.53,9.06 Z" fill="#40614e"/>
<path d="M8.24,-4.94 Q-2.47,-8.24 -11.53,-4.12" fill="none" stroke="#5b8069" stroke-width="1.65" opacity="0.5"/>
</g>
<g transform="translate(292.97,191.6) rotate(-30)"><path d="M-14,-6.59 Q-2.47,-13.18 13.18,-8.24 Q21.41,-0.82 15.65,9.06 Q3.29,16.47 -13.18,9.88 Z" fill="#40614e"/>
<path d="M1.65,-8.56 L2.47,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M7.58,-8.56 L8.4,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M13.51,-8.56 L14.33,8.24" stroke="#3a5847" stroke-width="1.98" stroke-linecap="round" opacity="0.7"/>
<path d="M-11.53,-1.65 Q-17.29,0.82 -18.94,7.41 Q-16.47,13.18 -11.53,9.06 Z" fill="#40614e"/>
<path d="M-8.24,-4.94 Q2.47,-8.24 11.53,-4.12" fill="none" stroke="#5b8069" stroke-width="1.65" opacity="0.5"/>
</g>
<ellipse cx="250" cy="191.6" rx="56" ry="20" fill="#F2C14E" opacity="0.05"><animate attributeName="opacity" values="0.03;0.09;0.03" dur="4s" repeatCount="indefinite"/>
</ellipse>
<circle cx="140" cy="62" r="1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="62;44;62" dur="10s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="5s" repeatCount="indefinite"/>
</circle>
<circle cx="366" cy="48" r="1.1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="48;30;48" dur="12s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6s" repeatCount="indefinite"/>
</circle>
<circle cx="64" cy="100" r="0.9" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="100;82;100" dur="13s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6.5s" repeatCount="indefinite"/>
</circle>
<circle cx="452" cy="74" r="0.9" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="74;56;74" dur="14s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="7s" repeatCount="indefinite"/>
</circle>
</svg>`;
})();

// Scene 7: The lure changing hands. Both figures, mid-deck.
STORY_SCENES['wreck_7'] = (function () {
var H7 = 21;
var off7x = 258 - 186 - H7 * 0.7, off7y = 178 - (226 - fredFootDrop(H7));
var arms7 = '<path d="M' + wn(H7 * 1.5) + ',' + wn(H7 * 2.05) + ' Q' + wn(off7x * 0.55) + ',' + wn(H7 * 2.35) + ' ' + wn(off7x - H7 * 0.35) + ',' + wn(off7y) + '" fill="none" stroke="url(#wSuit7)" stroke-width="' + wn(H7 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(off7x) + ',' + wn(off7y) + ') rotate(12)">' + wHand('7', H7, 1) + '</g>'
  + '<path d="M' + wn(-H7 * 1.5) + ',' + wn(H7 * 2.05) + ' Q' + wn(-H7 * 2.3) + ',' + wn(H7 * 3.2) + ' ' + wn(-H7 * 2.05) + ',' + wn(H7 * 4.3) + '" fill="none" stroke="url(#wSuit7)" stroke-width="' + wn(H7 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(-H7 * 2.05) + ',' + wn(H7 * 4.65) + ')">' + wHand('7', H7, -1) + '</g>';
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wreckWater7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a4a55"/>
<stop offset="45%" stop-color="#133440"/>
<stop offset="100%" stop-color="#07141a"/>
</linearGradient><linearGradient id="wreckDeck7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20423f"/>
<stop offset="100%" stop-color="#0d2024"/>
</linearGradient><radialGradient id="wreckLampG7" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/>
<stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/>
<stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
</radialGradient><linearGradient id="wSuit7" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/>
<stop offset="52%" stop-color="#40614e"/>
<stop offset="100%" stop-color="#22382e"/>
</linearGradient><linearGradient id="wBrass7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/>
<stop offset="50%" stop-color="#8b6914"/>
<stop offset="100%" stop-color="#5c4409"/>
</linearGradient><radialGradient id="wGlass7" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/>
<stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/>
<stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
</radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater7)"/>
<polygon points="140,0 168,0 188,110 166,110" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/>
</polygon>
<polygon points="340,0 364,0 342,114 320,114" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/>
</polygon>
<path d="M0,140 L54,136 L60,104 L112,100 L118,138 L188,134 L188,186 L0,192 Z" fill="#0d2028" opacity="0.55"/>
<path d="M424,132 L500,124 L500,186 L422,188 Z" fill="#0d2028" opacity="0.5"/>
<path d="M0,226 L500,212 L500,260 L0,260 Z" fill="url(#wreckDeck7)"/>
<path d="M0,226 L500,212 L500,220 L0,234 Z" fill="#2c5450" opacity="0.32"/>
<path d="M0,248 L500,230" stroke="#0a1a1e" stroke-width="1" opacity="0.3"/>
<path d="M0,178 L500,164" fill="none" stroke="#2c5450" stroke-width="1.9" opacity="0.72"/>
<circle cx="58" cy="176" r="24" fill="url(#wreckLampG7)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3.2s" repeatCount="indefinite" begin="0s"/>
</circle>
<rect x="55" y="173" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite" begin="0s"/>
</rect>
<circle cx="266" cy="170" r="26" fill="url(#wreckLampG7)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="2.8s" repeatCount="indefinite" begin="1s"/>
</circle>
<rect x="263" y="167" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="2.8s" repeatCount="indefinite" begin="1s"/>
</rect>
<circle cx="452" cy="164" r="24" fill="url(#wreckLampG7)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.62;0.42;0.56;0.35" dur="3.6s" repeatCount="indefinite" begin="2s"/>
</circle>
<rect x="449" y="161" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.6s" repeatCount="indefinite" begin="2s"/>
</rect>
<g transform="translate(66,204)"><path d="M-56,0 L56,0 L59.14,4.7 L-59.14,4.7 Z" fill="#1d3b3a"/>
<path d="M-56,0 L56,0 L56,1.23 L-56,1.23 Z" fill="#2c5450" opacity="0.6"/>
<rect x="-42" y="4.7" width="3.36" height="16" fill="#173537"/>
<rect x="38.64" y="4.7" width="3.36" height="16" fill="#173537"/>
<rect x="-45.02" y="19.14" width="9.41" height="1.57" rx="1" fill="#5c4409" opacity="0.8"/>
<rect x="35.62" y="19.14" width="9.41" height="1.57" rx="1" fill="#5c4409" opacity="0.8"/>
</g>
<g transform="translate(66,202)"><path d="M-26.25,3.94 L26.25,3.94 L25.73,0 L-25.72,0 Z" fill="#8a7a4c"/>
<path d="M-25.72,0 L25.73,0 L25.2,-1.18 L-25.2,-1.18 Z" fill="#a5945f"/>
<path d="M-25.2,1.18 L25.2,1.18 M-25.2,2.44 L25.2,2.44" stroke="#6d5f38" stroke-width="0.21" opacity="0.55"/>
<path d="M-24.67,-1.18 Q-11.81,-3.17 0,-2.28 L0,-22.05 Q-11.81,-23.37 -24.67,-19.4 Z" fill="#e8dcae"/>
<path d="M0,-2.28 Q11.81,-3.17 24.68,-1.18 L24.68,-19.4 Q11.81,-23.37 0,-22.05 Z" fill="#ddd0a0"/>
<path d="M0,-22.05 L0,-2.28" stroke="#8a7a4c" stroke-width="0.63" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.24" opacity="0.45"><path d="M-21.52,-6.17 L-4.2,-6.39"/>
<path d="M4.2,-6.39 L21.53,-6.17"/>
<path d="M-21.52,-8.6 L-4.2,-8.82"/>
<path d="M4.2,-8.82 L21.53,-8.6"/>
<path d="M-21.52,-11.02 L-4.2,-11.25"/>
<path d="M4.2,-11.25 L21.53,-11.02"/>
<path d="M-21.52,-13.45 L-4.2,-13.67"/>
<path d="M4.2,-13.67 L21.53,-13.45"/>
</g>
<path d="M-18.9,-15.88 Q-13.12,-19.4 -7.87,-16.1 Q-3.15,-13.23 1.05,-16.32" fill="none" stroke="#3a2e12" stroke-width="0.47" stroke-linecap="round"/>
<ellipse cx="12.6" cy="-14.99" rx="3.68" ry="2.42" fill="none" stroke="#3a2e12" stroke-width="0.42"/>
<path d="M8.66,-15.43 L6.3,-17.2 M16.54,-15.43 L18.9,-17.2 M9.98,-12.79 L8.66,-10.36 M15.23,-12.79 L16.54,-10.36" stroke="#3a2e12" stroke-width="0.32" stroke-linecap="round"/>
</g>
`
  + fred({ s: '7', h: H7, x: 186, y: 226 - fredFootDrop(H7), pose: 'standing', expr: 'closed', dur: '3.8s', hose: 'left', tilt: 5, arms: arms7 })
  + `
<ellipse cx="186" cy="229" rx="42" ry="6.3" fill="#07141a" opacity="0.28"/>
<circle cx="204" cy="39.349999999999994" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="39.349999999999994;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/>
<animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/>
</circle>
<circle cx="198" cy="33.349999999999994" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="33.349999999999994;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/>
<animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/>
</circle>
<g transform="translate(318,128.8) scale(-1,1)"><g><path d="M-7.09,51.3 Q-9.11,75.6 -8.44,90.45" fill="none" stroke="#1d3f47" stroke-width="9.92" stroke-linecap="round"/>
<path d="M7.09,51.3 Q9.11,75.6 8.44,90.45" fill="none" stroke="#1d3f47" stroke-width="9.92" stroke-linecap="round"/>
<path d="M-8.44,90.45 Q-19.24,97.2 -27.34,99.9" fill="none" stroke="#16333a" stroke-width="8.5" stroke-linecap="round"/>
<path d="M8.44,90.45 Q19.24,97.2 27.34,99.9" fill="none" stroke="#16333a" stroke-width="8.5" stroke-linecap="round"/>
<rect x="10.88" y="21.6" width="6.75" height="25.65" rx="3.38" fill="#2a6a75"/>
<rect x="12.64" y="24.3" width="2.43" height="17.55" rx="1.21" fill="#2a6a75" opacity="0.6"/>
<path d="M-17.55,20.25 Q0,14.85 17.55,20.25 L14.18,54 Q0,58.05 -14.17,54 Z" fill="#1d3f47"/>
<path d="M-14.92,32.4 Q0,28.35 14.92,32.4" fill="none" stroke="#0a1a1e" stroke-width="0.95" opacity="0.6"/>
<path d="M15.79,25.65 Q37.2,29.03 53.93,49.2" fill="none" stroke="#1d3f47" stroke-width="6.21" stroke-linecap="round"/>
<circle cx="60" cy="49.2" r="4.86" fill="#24525c"/>
<path d="M-15.79,25.65 Q-26.32,40.5 -22.95,54" fill="none" stroke="#1d3f47" stroke-width="6.21" stroke-linecap="round"/>
<circle cx="-22.95" cy="58.05" r="4.59" fill="#24525c"/>
<circle cx="0" cy="0" r="13.5" fill="#1d3f47"/>
<ellipse cx="0" cy="-1.89" rx="9.72" ry="7.29" fill="#2a6a75" opacity="0.7"/>
<ellipse cx="-2.16" cy="-4.32" rx="3.51" ry="2.43" fill="#7fc4b8" opacity="0.4"/>
<path d="M-9.18,6.21 Q0,10.26 9.18,6.21" fill="none" stroke="#0a1a1e" stroke-width="1.49"/>
</g>
</g>
<ellipse cx="318" cy="229" rx="29.7" ry="4.59" fill="#07141a" opacity="0.26"/>
<circle cx="304" cy="108.80000000000001" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="108.80000000000001;-10" dur="5.6s" repeatCount="indefinite" begin="2.2s"/>
<animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="2.2s"/>
</circle>
<circle cx="298" cy="102.80000000000001" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="102.80000000000001;-10" dur="7s" repeatCount="indefinite" begin="4.6s"/>
<animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="4.6s"/>
</circle>
<g transform="translate(258,178)"><animateTransform attributeName="transform" type="translate" values="258,178;258,180;258,178" dur="5s" repeatCount="indefinite"/>
<path d="M-13,3 Q-10,-6 -3,-8 Q5,-10 10,-5 Q14,-2 13,4" fill="none" stroke="#8b6914" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="-8" cy="-2" r="2.1" fill="#ffeaa7" opacity="0.7"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.4s" repeatCount="indefinite"/>
</circle>
<circle cx="-1" cy="-6" r="2.4" fill="#ffeaa7" opacity="0.65"><animate attributeName="opacity" values="0.35;0.8;0.35" dur="4.2s" repeatCount="indefinite" begin="1.1s"/>
</circle>
<circle cx="6" cy="-4" r="1.8" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.3;0.75;0.3" dur="3s" repeatCount="indefinite" begin="2.2s"/>
</circle>
<path d="M-12,2 Q-6,-1 0,1 Q6,3 12,1" fill="none" stroke="#2a3a2c" stroke-width="1.2"/>
<g transform="translate(12,7)"><animateTransform attributeName="transform" type="rotate" values="-5,0,-4;5,0,-4;-5,0,-4" dur="3.4s" repeatCount="indefinite" additive="sum"/>
<path d="M-4,2 Q-4,-3 0,-4 Q4,-3 4,2 Z" fill="url(#wBrass7)"/>
<path d="M-4,2 Q0,4 4,2 L4,3.4 Q0,5.4 -4,3.4 Z" fill="#5c4409"/>
</g>
</g>
<g transform="translate(126,244)"><path d="M-26,0 L26,0 L31.72,10.92 L-31.72,10.92 Z" fill="#5a4a22"/>
<path d="M-26,0 L26,0 L27.04,3.12 L-27.04,3.12 Z" fill="#75612e" opacity="0.78"/>
<path d="M-23.4,4.94 L24.18,4.94 M-24.96,8.22 L26,8.22" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(126,240)"><ellipse cx="0" cy="0" rx="6.6" ry="4.42" fill="#8f3b2e"/>
<ellipse cx="0" cy="-1.32" rx="5.61" ry="2.77" fill="#b04a38" opacity="0.85"/>
<circle cx="-2.31" cy="-3.17" r="0.99" fill="#0a1a1e"/>
<circle cx="2.31" cy="-3.17" r="0.99" fill="#0a1a1e"/>
<path d="M-5.61,-0.99 L-10.43,-3.83 L-12.41,-0.99" fill="none" stroke="#8f3b2e" stroke-width="1.52" stroke-linecap="round"><animate attributeName="d" values="M-5.61,-0.99 L-10.43,-3.83 L-12.41,-0.99;M-5.61,-0.99 L-10.43,-4.82 L-12.41,-1.98;M-5.61,-0.99 L-10.43,-3.83 L-12.41,-0.99" dur="2.8s" repeatCount="indefinite"/>
</path>
<path d="M5.61,-0.99 L10.43,-3.83 L12.41,-0.99" fill="none" stroke="#8f3b2e" stroke-width="1.52" stroke-linecap="round"/>
<path d="M-4.62,2.77 L-7.39,5.61 M0,3.63 L0,6.6 M4.62,2.77 L7.39,5.61" stroke="#8f3b2e" stroke-width="1.12" stroke-linecap="round"/>
</g>
<circle cx="120" cy="88" r="1" fill="#ffeaa7" opacity="0.2"><animate attributeName="cy" values="88;70;88" dur="11s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="5.5s" repeatCount="indefinite"/>
</circle>
<circle cx="430" cy="100" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="100;82;100" dur="13s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="6.5s" repeatCount="indefinite"/>
</circle>
<circle cx="272" cy="50" r="0.9" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="50;32;50" dur="14s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0.07;0.26;0.07" dur="7s" repeatCount="indefinite"/>
</circle>
</svg>`;
})();

// Scene 8: Fredward turned away, looking down the length of his own wreck,
// smiling. Player figure small and still in the foreground.
// DELIBERATE, DO NOT "IMPROVE": the lamps here use the same colours, radii and
// flicker timings as wreck_1 and wreck_7. There is no glow pool, no vignette,
// no spotlight and no centring. Fredward is off-centre and small, turned away,
// lit by nothing but the same rail lamps that light the rest of the deck. The
// frame must look exactly as warm as every other scene in this file. Every bit
// of the cold is composition: he is facing away down his own hull, and the
// player is stopped at the near end of it.
STORY_SCENES['wreck_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="42%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wreckShaft8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wreckDeck8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wreckHull8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wreckSand8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <linearGradient id="wreckBrass8" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit8" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckLampG8" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="35%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wreckWater8)"/>
<!-- Same caustics as wreck_1 -->
<polygon points="70,0 100,0 138,150 118,150" fill="url(#wreckShaft8)" opacity="0.6"><animate attributeName="opacity" values="0.35;0.7;0.35" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="250,0 288,0 262,160 238,160" fill="url(#wreckShaft8)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="400,0 424,0 388,140 370,140" fill="url(#wreckShaft8)" opacity="0.45"><animate attributeName="opacity" values="0.22;0.55;0.22" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- The deck running away to the right: the whole length of his wreck -->
<path d="M0,150 L500,116 L500,160 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,160 L500,260 L0,260 Z" fill="url(#wreckDeck8)"/>
<path d="M0,196 L500,160 L500,168 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,218 L500,180 M0,240 L500,198" stroke="#0a1a1e" stroke-width="1" opacity="0.4"/>
<!-- Far superstructure and the broken bow, going off into the green -->
<path d="M330,142 L372,138 L376,112 L418,108 L422,136 L458,134 L458,152 L328,158 Z" fill="#0d2028" opacity="0.7"/>
<path d="M458,134 Q480,128 500,134 L500,150 L458,152 Z" fill="url(#wreckHull8)" opacity="0.75"/>
<path d="M406,108 L382,54" stroke="#173537" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
<path d="M384,60 Q370,80 380,94" fill="none" stroke="#2a3a2c" stroke-width="1.6" opacity="0.5"><animate attributeName="d" values="M384,60 Q370,80 380,94;M384,60 Q374,80 376,94;M384,60 Q370,80 380,94" dur="10s" repeatCount="indefinite"/></path>
<!-- Sand banked along the far side, same as wreck_1 -->
<path d="M320,162 Q372,148 424,142 Q466,136 500,146 L500,164 L320,174 Z" fill="url(#wreckSand8)" opacity="0.75"/>
<path d="M400,146 Q436,140 470,150" fill="none" stroke="#3d666c" stroke-width="1.3" opacity="0.4"/>
<!-- Rail with the lamp string, running the whole length away from us -->
<path d="M0,178 L500,142" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.8"/>
<path d="M0,184 Q46,192 92,182 Q140,190 186,178 Q234,186 280,172 Q328,180 374,164 Q420,172 466,156" fill="none" stroke="#2c5450" stroke-width="0.9" opacity="0.6"/>
<!-- LAMPS. Exactly the wreck_1 values: same fill, same radii, same timings. -->
<circle cx="46" cy="190" r="26" fill="url(#wreckLampG8)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.65;0.45;0.6;0.4" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="152" cy="182" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.4;0.55;0.35" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></circle>
<circle cx="258" cy="174" r="26" fill="url(#wreckLampG8)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.45;0.6;0.4" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="358" cy="166" r="24" fill="url(#wreckLampG8)" opacity="0.5"><animate attributeName="opacity" values="0.35;0.6;0.42;0.55;0.35" dur="3s" repeatCount="indefinite" begin="2.1s"/></circle>
<circle cx="450" cy="158" r="22" fill="url(#wreckLampG8)" opacity="0.48"><animate attributeName="opacity" values="0.32;0.58;0.4;0.52;0.32" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></circle>
<g fill="#F2C14E">
  <rect x="43" y="187" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.75;1;0.82;0.95;0.75" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="149" y="179" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.7;1;0.8;0.92;0.7" dur="2.7s" repeatCount="indefinite" begin="0.7s"/></rect>
  <rect x="255" y="171" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.6s" repeatCount="indefinite" begin="1.4s"/></rect>
  <rect x="355" y="163" width="6" height="7" rx="1.6"><animate attributeName="opacity" values="0.72;1;0.8;0.94;0.72" dur="3s" repeatCount="indefinite" begin="2.1s"/></rect>
  <rect x="447.4" y="155" width="5.4" height="6.4" rx="1.5"><animate attributeName="opacity" values="0.7;1;0.78;0.92;0.7" dur="2.9s" repeatCount="indefinite" begin="1.1s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.7" opacity="0.7">
  <rect x="42" y="186" width="8" height="9" rx="1.8"/>
  <rect x="148" y="178" width="8" height="9" rx="1.8"/>
  <rect x="254" y="170" width="8" height="9" rx="1.8"/>
  <rect x="354" y="162" width="8" height="9" rx="1.8"/>
</g>
<!-- Same broad amber wash on the sand as wreck_1, no stronger, not centred -->
<ellipse cx="235" cy="222" rx="120" ry="16" fill="#F2C14E" opacity="0.07"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- Deck furniture down the length: table with the book, crates, coiled rope -->
<path d="M24,228 L120,224 L128,238 L16,242 Z" fill="#1d3b3a"/>
<path d="M40,223 L112,220 L112,212 L40,216 Z" fill="#8a7a4c"/>
<path d="M44,215 L74,212 L74,199 L44,203 Z" fill="#e8dcae"/>
<path d="M74,212 L108,213 L108,200 L74,199 Z" fill="#ddd0a0"/>
<rect x="298" y="172" width="28" height="20" rx="2" fill="#1d3b3a"/>
<rect x="298" y="172" width="28" height="5" rx="2" fill="#2c5450" opacity="0.55"/>
<ellipse cx="392" cy="170" rx="13" ry="4.2" fill="none" stroke="#2a3a2c" stroke-width="1.7" opacity="0.55"/>
<ellipse cx="392" cy="167.8" rx="9" ry="3.2" fill="none" stroke="#2a3a2c" stroke-width="1.3" opacity="0.45"/>
<!-- FREDWARD. Off centre, mid-size, turned away down the deck. Lit by the
     rail lamps and nothing else: no halo of his own. -->
<g transform="translate(216,120)">
  <animateTransform attributeName="transform" type="translate" values="216,120;216,123;216,120" dur="6s" repeatCount="indefinite"/>
  <!-- LEGS AND BOOTS. He had none: his torso simply stopped at the deck line
       and he read as a man buried to the waist. Same camera, same position,
       same lamps as before; these are the model's proportions applied to the
       figure that was already here, drawn first so the torso overlaps them.
       Foreshortened, because he is mid deck and we are looking slightly down. -->
  <path d="M-11,74 Q-12,98 -11,120" fill="none" stroke="url(#wreckSuit8)" stroke-width="15" stroke-linecap="round"/>
  <path d="M11,74 Q12,98 11,120" fill="none" stroke="url(#wreckSuit8)" stroke-width="15" stroke-linecap="round"/>
  <path d="M-15,100 Q-11,103 -7,100 M7,100 Q11,103 15,100" fill="none" stroke="#1c2f26" stroke-width="1" opacity="0.5"/>
  <g transform="translate(-11,126)">
    <path d="M-7.6,0 L-13.2,0 L-13.2,-2.6 Q-11.2,-5.2 -6,-5.8 L6.4,-5.8 Q7.6,-2.8 7.6,0 Z" fill="#5c4409"/>
    <path d="M-6,-5.8 L6.4,-5.8 L6.2,-9.4 L-6.2,-9.4 Z" fill="#8b6914" opacity="0.85"/>
  </g>
  <g transform="translate(11,126)">
    <path d="M7.6,0 L13.2,0 L13.2,-2.6 Q11.2,-5.2 6,-5.8 L-6.4,-5.8 Q-7.6,-2.8 -7.6,0 Z" fill="#5c4409"/>
    <path d="M6,-5.8 L-6.4,-5.8 L-6.2,-9.4 L6.2,-9.4 Z" fill="#8b6914" opacity="0.85"/>
  </g>
  <!-- the back of the suit: no chest plate, no faceplate, just a man's back -->
  <path d="M-23,32 Q0,25 23,32 L20,80 Q0,86 -20,80 Z" fill="url(#wreckSuit8)"/>
  <path d="M-20,45 Q0,39 20,45 M-21,58 Q0,52 21,58 M-20,71 Q0,65 20,71" fill="none" stroke="#1c2f26" stroke-width="1.1" opacity="0.5"/>
  <path d="M0,34 L0,82" stroke="#1c2f26" stroke-width="1.3" opacity="0.45"/>
  <!-- back weight plate, bolted on -->
  <rect x="-11" y="40" width="22" height="12" rx="2.2" fill="url(#wreckBrass8)"/>
  <circle cx="-5.5" cy="46" r="1.3" fill="#5c4409"/><circle cx="5.5" cy="46" r="1.3" fill="#5c4409"/>
  <ellipse cx="0" cy="29" rx="13.6" ry="5" fill="url(#wreckBrass8)"/>
  <!-- HELMET FROM BEHIND: a brass sphere with a bolt ring and the strap
       fittings. No port on this side, so no face, which is the whole point. -->
  <g transform="rotate(-8,0,10)">
    <circle cx="0" cy="10" r="18" fill="url(#wreckBrass8)"/>
    <circle cx="0" cy="10" r="18" fill="none" stroke="#5c4409" stroke-width="1.5"/>
    <!-- crown seam and the bolt ring that holds the two halves together -->
    <path d="M-18,10 Q0,2 18,10" fill="none" stroke="#5c4409" stroke-width="1.2" opacity="0.8"/>
    <circle cx="-13" cy="4" r="1.2" fill="#5c4409"/><circle cx="-6.6" cy="0.6" r="1.2" fill="#5c4409"/>
    <circle cx="0" cy="-0.4" r="1.2" fill="#5c4409"/><circle cx="6.6" cy="0.6" r="1.2" fill="#5c4409"/>
    <circle cx="13" cy="4" r="1.2" fill="#5c4409"/>
    <!-- the rear vent, a small grilled plate -->
    <rect x="-5" y="12" width="10" height="8" rx="1.6" fill="#5c4409"/>
    <path d="M-3.4,14 L3.4,14 M-3.4,16.4 L3.4,16.4 M-3.4,18.8 L3.4,18.8" stroke="#3d2c06" stroke-width="0.8"/>
    <!-- the rim of the faceplate, showing round the far side. He is smiling
         at his ship and we get the edge of it and nothing more. -->
    <path d="M14.6,2 Q19.4,10 14.6,19" fill="none" stroke="#c9962e" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M15.6,4.4 Q19,10 15.6,16.6" fill="none" stroke="#123038" stroke-width="1.6" opacity="0.55"/>
    <!-- ordinary brass highlight, the same weight as every other scene -->
    <path d="M-9,1 Q-4,-3 1,-1" fill="none" stroke="#ffeaa7" stroke-width="1.9" stroke-linecap="round" opacity="0.4"/>
  </g>
  <!-- arms down, one hand resting on the rail. Nothing being done. -->
  <path d="M21,44 Q38,52 42,68" fill="none" stroke="url(#wreckSuit8)" stroke-width="10" stroke-linecap="round"/>
  <path d="M38,66 Q50,64 56,70 Q58,75 50,78 Q40,79 36,73 Z" fill="#40614e"/>
  <path d="M-21,44 Q-37,56 -39,74" fill="none" stroke="url(#wreckSuit8)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="-40" cy="77" r="6" fill="#40614e"/>
  <!-- air hose trailing back behind him toward us -->
  <path d="M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.6"><animate attributeName="d" values="M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72;M-12,-2 Q-52,-12 -74,12 Q-94,36 -80,72;M-12,-2 Q-48,-8 -70,14 Q-90,38 -80,72" dur="8.5s" repeatCount="indefinite"/></path>
</g>
<!-- His bubbles, the same calm regular rate as every other scene -->
<circle cx="232" cy="102" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="102;-10" dur="5.6s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.6s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="226" cy="96" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="96;-10" dur="7s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- THE PLAYER, small and still, near left. Not moving, not reaching. -->
<g transform="translate(88,190)">
  <path d="M-12,20 Q0,15 12,20 L10,50 Q0,54 -10,50 Z" fill="#132c30"/>
  <rect x="9" y="20" width="6.4" height="17" rx="3.2" fill="#1a4a55"/>
  <circle cx="0" cy="8" r="8.6" fill="#132c30"/>
  <ellipse cx="0" cy="7" rx="6.2" ry="4.6" fill="#1a4a55" opacity="0.6"/>
  <ellipse cx="-1.3" cy="5.2" rx="2.2" ry="1.5" fill="#7fc4b8" opacity="0.32"/>
  <path d="M-11,28 Q-20,33 -22,42" fill="none" stroke="#132c30" stroke-width="6.2" stroke-linecap="round"/>
  <path d="M11,28 Q19,33 20,42" fill="none" stroke="#132c30" stroke-width="6.2" stroke-linecap="round"/>
  <!-- the lure, in one fist, held down and not being looked at -->
  <circle cx="-23" cy="45" r="3.8" fill="#1a3a3e"/>
  <path d="M-27,46 Q-31,40 -27,36" fill="none" stroke="#8b6914" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="-29" cy="41" r="1.3" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.28;0.62;0.28" dur="3.6s" repeatCount="indefinite"/></circle>
  <path d="M-27,48 Q-30,53 -28,57" fill="none" stroke="#2a3a2c" stroke-width="0.9" stroke-linecap="round"/>
  <path d="M-6,52 Q-9,59 -15,61" fill="none" stroke="#132c30" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M6,52 Q9,59 15,61" fill="none" stroke="#132c30" stroke-width="4.6" stroke-linecap="round"/>
</g>
<!-- Player bubbles, slower than his -->
<circle cx="97" cy="184" r="1.4" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="184;-10" dur="8.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.34;0" dur="8.4s" repeatCount="indefinite"/></circle>
<circle cx="102" cy="190" r="1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="190;-10" dur="10.2s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.3;0" dur="10.2s" repeatCount="indefinite" begin="4s"/></circle>
<!-- The doormat and the crab, foreground right. It has not moved. -->
<g transform="translate(376,232)">
  <path d="M-28,0 L28,0 L34,12 L-34,12 Z" fill="#5a4a22"/>
  <path d="M-28,0 L28,0 L29,3.4 L-29,3.4 Z" fill="#75612e" opacity="0.78"/>
  <path d="M-25,5.4 L26,5.4 M-27,9 L28,9" stroke="#3d3216" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(376,228)">
  <ellipse cx="0" cy="0" rx="6.6" ry="4.4" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.3" rx="5.6" ry="2.8" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.3" cy="-3.2" r="1" fill="#0a1a1e"/><circle cx="2.3" cy="-3.2" r="1" fill="#0a1a1e"/>
  <path d="M-5.6,-1 L-10.4,-3.8 L-12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M5.6,-1 L10.4,-3.8 L12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-4.6,2.8 L-7.4,5.6 M0,3.6 L0,6.6 M4.6,2.8 L7.4,5.6" stroke="#8f3b2e" stroke-width="1.1" stroke-linecap="round"/>
</g>
<!-- Motes, same density and drift as the rest of the deck scenes -->
<circle cx="160" cy="86" r="1" fill="#ffeaa7" opacity="0.24"><animate attributeName="cy" values="86;68;86" dur="11s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.28;0.1" dur="5.5s" repeatCount="indefinite"/></circle>
<circle cx="440" cy="94" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="94;76;94" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="308" cy="46" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="46;28;46" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="60" cy="118" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="118;100;118" dur="12.5s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6s" repeatCount="indefinite" begin="1.2s"/></circle>
<!-- Same top-corner water darkening as wreck_1 and nothing more -->
<rect x="0" y="0" width="500" height="46" fill="#07141a" opacity="0.18"/>
</svg>`;

// Scene 9: Back at the book, fresh page, his posture already re-absorbed in
// work. Same table and framing as scene 3, but the spread is blank and his
// whole body has gone back to it.
STORY_SCENES['wreck_9'] = (function () {
  var H = 21;                       // reference scale, same as wreck_2
  var DECK = 234;                   // where his boots land
  var TABLE_X = 176, TABLE_Y = 194, TABLE_W = 248;
  var BOOK_W = H * 4.4;             // an object on a table, not a billboard
  var fx = 300, fy = DECK - fredFootDrop(H);
  // his drawing hand rests on the right hand page; the other holds the far
  // page flat against the current
  var penX = (TABLE_X + BOOK_W * 0.3) - fx, penY = (TABLE_Y - BOOK_W * 0.18) - fy;
  var restX = (TABLE_X + BOOK_W * 0.05) - fx, restY = (TABLE_Y - BOOK_W * 0.1) - fy;
  var arms = '<path d="M' + wn(-H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(penX * 0.55) + ',' + wn(H * 2.75)
      + ' ' + wn(penX + H * 0.5) + ',' + wn(penY - H * 0.15)
      + '" fill="none" stroke="url(#wSuit9)" stroke-width="' + wn(H * 0.52) + '" stroke-linecap="round">'
    + '<animate attributeName="d" values="'
    + 'M' + wn(-H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(penX * 0.55) + ',' + wn(H * 2.75) + ' ' + wn(penX + H * 0.5) + ',' + wn(penY - H * 0.15) + ';'
    + 'M' + wn(-H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(penX * 0.55) + ',' + wn(H * 2.85) + ' ' + wn(penX + H * 0.8) + ',' + wn(penY - H * 0.05) + ';'
    + 'M' + wn(-H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(penX * 0.55) + ',' + wn(H * 2.75) + ' ' + wn(penX + H * 0.5) + ',' + wn(penY - H * 0.15)
    + '" dur="4.6s" repeatCount="indefinite"/></path>'
    + '<g><animateTransform attributeName="transform" type="translate" values="0,0;' + wn(H * 0.28) + ',' + wn(H * 0.08) + ';0,0" dur="4.6s" repeatCount="indefinite"/>'
    + '<g transform="translate(' + wn(penX) + ',' + wn(penY) + ')">' + wHand('9', H, -1) + '</g>'
    + '<rect x="' + wn(penX - H * 0.55) + '" y="' + wn(penY + H * 0.08) + '" width="' + wn(H * 0.95) + '" height="' + wn(H * 0.11)
    + '" rx="' + wn(H * 0.055) + '" fill="#7a5a18" transform="rotate(16,' + wn(penX) + ',' + wn(penY) + ')"/></g>'
    + '<path d="M' + wn(H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(H * 2.2) + ',' + wn(H * 3.2) + ' ' + wn(H * 2.02) + ',' + wn(H * 4.25)
    + '" fill="none" stroke="url(#wSuit9)" stroke-width="' + wn(H * 0.52) + '" stroke-linecap="round"/>'
    + '<g transform="translate(' + wn(H * 2.02) + ',' + wn(H * 4.6) + ')">' + wHand('9', H, 1) + '</g>';

  return '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">'
    + '<defs>'
    + '<linearGradient id="wreckWater9" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/></linearGradient>'
    + '<radialGradient id="wreckBookLit9" cx="42%" cy="52%" r="58%">'
    + '<stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.3"/>'
    + '<stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/>'
    + '<stop offset="100%" stop-color="#07141a" stop-opacity="0"/></radialGradient>'
    + '<linearGradient id="wreckDeck9" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/></linearGradient>'
    + wDefs('9')
    + '</defs>'
    + '<rect width="500" height="260" fill="url(#wreckWater9)"/>'
    + '<rect width="500" height="260" fill="url(#wreckBookLit9)"/>'
    // lamp above frame, the same fitting as scene 3
    + '<rect x="222" y="0" width="4" height="16" fill="#2c5450"/>'
    + '<path d="M208,16 L240,16 L234,28 L214,28 Z" fill="#5c4409"/>'
    + '<rect x="216" y="26" width="16" height="9" rx="2" fill="#F2C14E">'
    + '<animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>'
    + '<ellipse cx="224" cy="34" rx="44" ry="15" fill="#ffd700" opacity="0.12">'
    + '<animate attributeName="opacity" values="0.07;0.17;0.07" dur="3.4s" repeatCount="indefinite"/></ellipse>'
    // bulkhead behind, with the shelf of finished volumes: the work already done
    + '<rect x="0" y="0" width="500" height="146" fill="#0d2028" opacity="0.55"/>'
    + '<path d="M0,144 L500,140" stroke="#1a4a55" stroke-width="1.2" opacity="0.35"/>'
    + '<path d="M424,36 Q406,62 422,80 Q436,94 420,108" fill="none" stroke="#2a3a2c" stroke-width="2" opacity="0.45">'
    + '<animate attributeName="d" values="M424,36 Q406,62 422,80 Q436,94 420,108;M424,36 Q412,62 418,80 Q432,94 424,108;M424,36 Q406,62 422,80 Q436,94 420,108" dur="10s" repeatCount="indefinite"/></path>'
    + '<rect x="46" y="66" width="104" height="5" fill="#1d3b3a"/>'
    + '<rect x="52" y="40" width="9" height="26" fill="#3d2a12"/><rect x="62" y="44" width="8" height="22" fill="#4a3418"/>'
    + '<rect x="71" y="38" width="10" height="28" fill="#33240f"/><rect x="82" y="43" width="7" height="23" fill="#4a3418"/>'
    + '<rect x="90" y="41" width="9" height="25" fill="#3d2a12"/><rect x="100" y="45" width="8" height="21" fill="#2b1f0d"/>'
    + '<rect x="109" y="39" width="10" height="27" fill="#4a3418"/><rect x="120" y="44" width="7" height="22" fill="#33240f"/>'
    + '<rect x="128" y="42" width="9" height="24" fill="#3d2a12"/><rect x="138" y="46" width="8" height="20" fill="#2b1f0d"/>'
    // deck, so his boots have something to stand on
    + '<path d="M0,' + DECK + ' L500,' + (DECK - 8) + ' L500,260 L0,260 Z" fill="url(#wreckDeck9)"/>'
    + '<path d="M0,' + DECK + ' L500,' + (DECK - 8) + ' L500,' + (DECK - 2) + ' L0,' + (DECK + 6) + ' Z" fill="#2c5450" opacity="0.3"/>'
    // THE TABLE and THE BOOK go down first: he works behind them
    + wTable(TABLE_W, DECK - TABLE_Y - 10, { x: TABLE_X, y: TABLE_Y })
    + book('9', BOOK_W, { x: TABLE_X, y: TABLE_Y - 2, blank: true })
    // the first mark of the new entry, just started
    + '<path d="M' + wn(TABLE_X + BOOK_W * 0.22) + ',' + wn(TABLE_Y - BOOK_W * 0.22)
    + ' Q' + wn(TABLE_X + BOOK_W * 0.3) + ',' + wn(TABLE_Y - BOOK_W * 0.27)
    + ' ' + wn(TABLE_X + BOOK_W * 0.38) + ',' + wn(TABLE_Y - BOOK_W * 0.22)
    + '" fill="none" stroke="#3a2e12" stroke-width="1.5" stroke-linecap="round">'
    + '<animate attributeName="opacity" values="0.85;1;0.85" dur="5s" repeatCount="indefinite"/></path>'
    // ink and a magnifier on the table, so it is a working surface
    + '<rect x="' + wn(TABLE_X - BOOK_W * 0.62) + '" y="' + wn(TABLE_Y - 16) + '" width="11" height="13" rx="2" fill="#0e2224"/>'
    + '<rect x="' + wn(TABLE_X - BOOK_W * 0.62) + '" y="' + wn(TABLE_Y - 16) + '" width="11" height="4" rx="2" fill="#1a3a3c"/>'
    + '<g transform="translate(' + wn(TABLE_X - BOOK_W * 0.78) + ',' + wn(TABLE_Y - 10) + ')">'
    + '<circle cx="0" cy="0" r="8" fill="#123038" opacity="0.5"/>'
    + '<circle cx="0" cy="0" r="8" fill="none" stroke="url(#wBrass9)" stroke-width="2"/>'
    + '<path d="M6,6 L14,13" stroke="url(#wBrass9)" stroke-width="2.6" stroke-linecap="round"/></g>'
    // FREDWARD, folded down over the page, entirely re-absorbed in the work
    + fred({ s: '9', h: H, x: fx, y: fy, pose: 'standing', expr: 'open', dur: '4.2s', arms: arms, hose: 'right', tilt: 14 })
    // his bubbles, unhurried
    + '<circle cx="' + (fx + 16) + '" cy="' + wn(fy - 26) + '" r="1.6" fill="#bfe6d8" opacity="0">'
    + '<animate attributeName="cy" values="' + wn(fy - 26) + ';-10" dur="6s" repeatCount="indefinite"/>'
    + '<animate attributeName="opacity" values="0;0.4;0" dur="6s" repeatCount="indefinite"/></circle>'
    + '<circle cx="' + (fx + 22) + '" cy="' + wn(fy - 20) + '" r="1.1" fill="#bfe6d8" opacity="0">'
    + '<animate attributeName="cy" values="' + wn(fy - 20) + ';-10" dur="7.6s" repeatCount="indefinite" begin="2.4s"/>'
    + '<animate attributeName="opacity" values="0;0.34;0" dur="7.6s" repeatCount="indefinite" begin="2.4s"/></circle>'
    // motes
    + '<circle cx="140" cy="56" r="1" fill="#ffeaa7" opacity="0.28">'
    + '<animate attributeName="cy" values="56;40;56" dur="9s" repeatCount="indefinite"/>'
    + '<animate attributeName="opacity" values="0.12;0.32;0.12" dur="4.5s" repeatCount="indefinite"/></circle>'
    + '<circle cx="452" cy="106" r="1" fill="#cfeee0" opacity="0.2">'
    + '<animate attributeName="cy" values="106;88;106" dur="12s" repeatCount="indefinite" begin="3s"/>'
    + '<animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="3s"/></circle>'
    + '<circle cx="30" cy="96" r="0.9" fill="#cfeee0" opacity="0.18">'
    + '<animate attributeName="cy" values="96;78;96" dur="13s" repeatCount="indefinite" begin="1s"/>'
    + '<animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>'
    + '</svg>';
})();

// Scene 10: Fredward with one hand flat on the page, mid-sentence, the one
// beat where his face is not certain. Under a second's worth of expression:
// the eyes go level, the smile stays, and that is all.
STORY_SCENES['wreck_10'] = (function () {
var H10 = 21;
var fy10 = 232 - fredFootDrop(H10);
var page10x = (188 + H10 * 4.4 * 0.3) - 344, page10y = (192 - H10 * 4.4 * 0.16) - fy10;
var arms10 = '<path d="M' + wn(-H10 * 1.5) + ',' + wn(H10 * 2.05) + ' Q' + wn(page10x * 0.55) + ',' + wn(H10 * 3) + ' ' + wn(page10x + H10 * 0.6) + ',' + wn(page10y - H10 * 0.2) + '" fill="none" stroke="url(#wSuit10)" stroke-width="' + wn(H10 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(page10x) + ',' + wn(page10y) + ')">' + wHand('10', H10, -1) + '</g>'
  + '<path d="M' + wn(H10 * 1.5) + ',' + wn(H10 * 2.05) + ' Q' + wn(H10 * 2.3) + ',' + wn(H10 * 3.2) + ' ' + wn(H10 * 2.05) + ',' + wn(H10 * 4.3) + '" fill="none" stroke="url(#wSuit10)" stroke-width="' + wn(H10 * 0.52) + '" stroke-linecap="round"/>'
  + '<g transform="translate(' + wn(H10 * 2.05) + ',' + wn(H10 * 4.65) + ')">' + wHand('10', H10, 1) + '</g>';
return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckWater10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckBookLit10" cx="50%" cy="50%" r="58%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.32"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckPage10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f0e5bc"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wreckBrass10" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wreckSuit10" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wreckGlass10" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
<linearGradient id="wSuit10" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/></linearGradient><linearGradient id="wBrass10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/></linearGradient><radialGradient id="wGlass10" cx="42%" cy="72%" r="82%"><stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/></radialGradient></defs>
<rect width="500" height="260" fill="url(#wreckWater10)"/>
<rect width="500" height="260" fill="url(#wreckBookLit10)"/>
<rect x="0" y="0" width="500" height="140" fill="#0d2028" opacity="0.5"/>
<!-- the deck, so his boots have something to land on -->
<path d="M0,232 L500,226 L500,260 L0,260 Z" fill="#132c30"/>
<path d="M0,232 L500,226 L500,230 L0,236 Z" fill="#2c5450" opacity="0.28"/>
<path d="M0,138 L500,134" stroke="#1a4a55" stroke-width="1.2" opacity="0.3"/>
<!-- Lamp, off to the left this time -->
<rect x="88" y="0" width="4" height="14" fill="#2c5450"/>
<path d="M74,14 L106,14 L100,26 L80,26 Z" fill="#5c4409"/>
<rect x="82" y="24" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="90" cy="32" rx="42" ry="14" fill="#ffd700" opacity="0.11"><animate attributeName="opacity" values="0.06;0.16;0.06" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- THE TABLE and THE BOOK, at model scale: an object on a table, not a
     billboard. This kept the original spread, which was about 296 wide, the
     same fault fixed in scenes 3, 4 and 9. Drawn before him: he stands behind. -->
` + wTable(236, 232 - 194 - 8, { x: 188, y: 194 })
  + book('10', 21 * 4.4, { x: 188, y: 192 })
  + `
<!-- FREDWARD, one hand flat on the page, mid-sentence. Helmet level: not
     tipped down to the book, not turned to you. Shared model, reference
     scale, so the beat lands without him changing size to carry it. -->
`
  + fred({ s: '10', h: H10, x: 344, y: fy10, pose: 'standing', expr: 'open', dur: '3.8s', hose: 'right', arms: arms10 })
  + `
<!-- Bubbles. One gap in the stream where the sentence stops, then normal. -->
<circle cx="340" cy="46" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="46;-10" dur="4.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.42;0" dur="4.6s" repeatCount="indefinite"/></circle>
<circle cx="346" cy="52" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="52;-10" dur="6.8s" repeatCount="indefinite" begin="3.6s"/><animate attributeName="opacity" values="0;0.36;0" dur="6.8s" repeatCount="indefinite" begin="3.6s"/></circle>
<circle cx="334" cy="42" r="1.3" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="42;-10" dur="5.4s" repeatCount="indefinite" begin="8s"/><animate attributeName="opacity" values="0;0.38;0" dur="5.4s" repeatCount="indefinite" begin="8s"/></circle>
<!-- Motes -->
<circle cx="140" cy="70" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="70;54;70" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="120" r="1" fill="#cfeee0" opacity="0.19"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite" begin="2.5s"/><animate attributeName="opacity" values="0.06;0.23;0.06" dur="6s" repeatCount="indefinite" begin="2.5s"/></circle>
<circle cx="240" cy="52" r="0.9" fill="#cfeee0" opacity="0.17"><animate attributeName="cy" values="52;34;52" dur="13.5s" repeatCount="indefinite" begin="4.5s"/><animate attributeName="opacity" values="0.05;0.21;0.05" dur="6.8s" repeatCount="indefinite" begin="4.5s"/></circle>
</svg>`;
})();

// Scene 11: Looking up the rope from below. Wreck and its amber lamps small
// at the bottom of frame, surface light huge above. Ascent framing.
STORY_SCENES['wreck_11'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wreckAsc11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9fdccd"/><stop offset="18%" stop-color="#4f9d94"/><stop offset="44%" stop-color="#1a4a55"/><stop offset="72%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wreckSun11" cx="50%" cy="4%" r="46%">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.72"/><stop offset="28%" stop-color="#dff6ea" stop-opacity="0.3"/><stop offset="100%" stop-color="#4f9d94" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wreckShaft11" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.34"/><stop offset="45%" stop-color="#bfe6d8" stop-opacity="0.12"/><stop offset="100%" stop-color="#1a4a55" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="wreckLampG11" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="38%" stop-color="#F2C14E" stop-opacity="0.15"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <filter id="wreckSoft11"><feGaussianBlur stdDeviation="1.6" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#wreckAsc11)"/>
<!-- The surface, huge, right at the top of frame -->
<rect width="500" height="120" fill="url(#wreckSun11)"/>
<path d="M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z" fill="#dff6ea" opacity="0.4"><animate attributeName="d" values="M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z;M0,0 L500,0 L500,26 Q450,14 400,26 Q350,38 300,26 Q250,14 200,26 Q150,38 100,26 Q50,14 0,26 Z;M0,0 L500,0 L500,20 Q450,32 400,20 Q350,8 300,20 Q250,32 200,20 Q150,8 100,20 Q50,32 0,20 Z" dur="6s" repeatCount="indefinite"/></path>
<path d="M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z" fill="#ffffff" opacity="0.22"><animate attributeName="d" values="M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z;M0,24 Q60,12 120,24 Q180,36 240,24 Q300,12 360,24 Q420,36 500,24 L500,40 Q420,52 360,40 Q300,28 240,40 Q180,52 120,40 Q60,28 0,40 Z;M0,18 Q60,30 120,18 Q180,6 240,18 Q300,30 360,18 Q420,6 500,18 L500,34 Q420,22 360,34 Q300,46 240,34 Q180,22 120,34 Q60,46 0,34 Z" dur="7.5s" repeatCount="indefinite"/></path>
<!-- Great wide caustic shafts opening downward: the surface light is enormous -->
<polygon points="200,10 262,10 330,240 268,240" fill="url(#wreckShaft11)" opacity="0.7"><animate attributeName="opacity" values="0.5;0.85;0.5" dur="7s" repeatCount="indefinite"/></polygon>
<polygon points="120,10 168,10 190,230 140,230" fill="url(#wreckShaft11)" opacity="0.55"><animate attributeName="opacity" values="0.36;0.7;0.36" dur="9s" repeatCount="indefinite" begin="2s"/></polygon>
<polygon points="292,10 348,10 400,220 344,220" fill="url(#wreckShaft11)" opacity="0.5"><animate attributeName="opacity" values="0.32;0.66;0.32" dur="8s" repeatCount="indefinite" begin="4s"/></polygon>
<polygon points="42,10 76,10 74,210 36,210" fill="url(#wreckShaft11)" opacity="0.4"><animate attributeName="opacity" values="0.24;0.55;0.24" dur="10s" repeatCount="indefinite" begin="1s"/></polygon>
<polygon points="404,10 438,10 462,200 424,200" fill="url(#wreckShaft11)" opacity="0.38"><animate attributeName="opacity" values="0.22;0.52;0.22" dur="11s" repeatCount="indefinite" begin="5s"/></polygon>
<!-- The hull of the boat waiting on the surface, a small dark oval up there -->
<path d="M212,14 Q246,4 288,10 Q300,14 288,20 Q246,26 212,20 Z" fill="#0d2028" opacity="0.55"><animate attributeName="opacity" values="0.4;0.62;0.4" dur="6s" repeatCount="indefinite"/></path>
<!-- THE ROPE, running the whole height of frame, the way home -->
<path d="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" fill="none" stroke="#2a3a2c" stroke-width="2.8" stroke-linecap="round" opacity="0.85"><animate attributeName="d" values="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252;M248,10 Q240,60 252,110 Q262,158 246,206 Q238,232 248,252;M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" dur="9s" repeatCount="indefinite"/></path>
<path d="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" fill="none" stroke="#5c6b4a" stroke-width="0.9" opacity="0.45"><animate attributeName="d" values="M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252;M248,10 Q240,60 252,110 Q262,158 246,206 Q238,232 248,252;M248,10 Q256,60 244,110 Q234,158 250,206 Q258,232 248,252" dur="9s" repeatCount="indefinite"/></path>
<!-- THE WRECK, small at the bottom of frame, on her side, lamps still lit -->
<g opacity="0.9">
  <path d="M0,250 Q80,242 170,246 Q280,250 380,244 Q450,240 500,246 L500,260 L0,260 Z" fill="#07141a"/>
  <path d="M136,248 Q142,232 168,228 L326,220 Q352,220 358,230 L360,246 Q250,252 160,251 Q142,250 136,248 Z" fill="#0f2528"/>
  <path d="M136,248 Q142,232 168,228 L326,220 Q352,220 358,230 L356,234 Q250,228 164,240 Q142,244 136,248 Z" fill="#1d3b3a" opacity="0.6"/>
  <!-- her mast, angled, tiny -->
  <path d="M238,224 L222,196" stroke="#173537" stroke-width="2.4" stroke-linecap="round"/>
  <!-- sand banked along her -->
  <path d="M96,252 Q124,240 152,236 Q126,232 100,240 Q80,246 68,252 Z" fill="#2f5158" opacity="0.6"/>
  <path d="M352,244 Q384,232 416,230 Q444,229 468,238 L468,250 Q410,246 352,250 Z" fill="#2f5158" opacity="0.6"/>
  <!-- rail line -->
  <path d="M166,227 L324,219" fill="none" stroke="#2c5450" stroke-width="1.2" opacity="0.7"/>
</g>
<!-- HER LAMPS, small, warm, and still on. The last thing in the frame. -->
<circle cx="182" cy="230" r="14" fill="url(#wreckLampG11)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="228" cy="227" r="15" fill="url(#wreckLampG11)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.46;0.62;0.4" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></circle>
<circle cx="274" cy="224" r="14" fill="url(#wreckLampG11)" opacity="0.52"><animate attributeName="opacity" values="0.36;0.64;0.44;0.58;0.36" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="316" cy="221" r="13" fill="url(#wreckLampG11)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3s" repeatCount="indefinite" begin="2.6s"/></circle>
<g fill="#F2C14E" filter="url(#wreckSoft11)">
  <rect x="180" y="228" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="226" y="225" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></rect>
  <rect x="272" y="222" width="4.4" height="5" rx="1.2"><animate attributeName="opacity" values="0.74;1;0.82;0.95;0.74" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></rect>
  <rect x="314" y="219" width="4" height="4.6" rx="1.1"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="3s" repeatCount="indefinite" begin="2.6s"/></rect>
</g>
<!-- A single amber pinprick moving on the deck: he is still working -->
<circle cx="252" cy="216" r="1.2" fill="#ffeaa7" opacity="0.5" filter="url(#wreckSoft11)"><animate attributeName="cx" values="252;258;252" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.28;0.6;0.28" dur="4s" repeatCount="indefinite"/></circle>
<!-- Bubbles, big and going the same way you are -->
<circle cx="264" cy="200" r="3" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="200;-14" dur="4.6s" repeatCount="indefinite"/><animate attributeName="r" values="2.2;4.4" dur="4.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.55;0" dur="4.6s" repeatCount="indefinite"/></circle>
<circle cx="238" cy="212" r="2.2" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="212;-14" dur="5.8s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="r" values="1.6;3.6" dur="5.8s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0;0.5;0" dur="5.8s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="272" cy="220" r="1.8" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="220;-14" dur="6.6s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="r" values="1.3;3" dur="6.6s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.45;0" dur="6.6s" repeatCount="indefinite" begin="2.6s"/></circle>
<circle cx="230" cy="190" r="1.5" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="190;-14" dur="7.4s" repeatCount="indefinite" begin="4s"/><animate attributeName="r" values="1.1;2.6" dur="7.4s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.4;0" dur="7.4s" repeatCount="indefinite" begin="4s"/></circle>
<circle cx="258" cy="180" r="1.2" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="180;-14" dur="8.2s" repeatCount="indefinite" begin="5.4s"/><animate attributeName="opacity" values="0;0.36;0" dur="8.2s" repeatCount="indefinite" begin="5.4s"/></circle>
<!-- THE PLAYER, on the rope, going up, seen from below and behind -->
<g transform="translate(250,168)">
  <animateTransform attributeName="transform" type="translate" values="250,174;250,164;250,174" dur="10s" repeatCount="indefinite"/>
  <!-- fins nearest us, foreshortened, kicking -->
  <path d="M-8,26 Q-16,38 -26,42" fill="none" stroke="#132c30" stroke-width="7.4" stroke-linecap="round"><animate attributeName="d" values="M-8,26 Q-16,38 -26,42;M-8,26 Q-14,34 -22,44;M-8,26 Q-16,38 -26,42" dur="3.2s" repeatCount="indefinite"/></path>
  <path d="M8,26 Q16,38 26,42" fill="none" stroke="#132c30" stroke-width="7.4" stroke-linecap="round"><animate attributeName="d" values="M8,26 Q16,38 26,42;M8,26 Q14,34 22,44;M8,26 Q16,38 26,42" dur="3.2s" repeatCount="indefinite" begin="1.6s"/></path>
  <path d="M-12,4 Q0,-2 12,4 L10,28 Q0,32 -10,28 Z" fill="#132c30"/>
  <rect x="-4" y="-2" width="8" height="20" rx="4" fill="#1a4a55"/>
  <rect x="-2.4" y="0" width="2.6" height="15" rx="1.3" fill="#2a6a75" opacity="0.6"/>
  <circle cx="0" cy="-8" r="8.6" fill="#132c30"/>
  <!-- both arms up on the rope -->
  <path d="M-10,2 Q-8,-14 -3,-24" fill="none" stroke="#132c30" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M10,2 Q8,-16 3,-28" fill="none" stroke="#132c30" stroke-width="6.4" stroke-linecap="round"/>
  <circle cx="-3" cy="-26" r="4" fill="#1a3a3e"/>
  <circle cx="3" cy="-30" r="4" fill="#1a3a3e"/>
  <!-- the lure, in a fist, a single amber bead visible -->
  <circle cx="4" cy="-31" r="1.4" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.34;0.75;0.34" dur="3.4s" repeatCount="indefinite"/></circle>
</g>
<!-- Motes, thinning as the water gets brighter -->
<circle cx="90" cy="150" r="1" fill="#dff6ea" opacity="0.24"><animate attributeName="cy" values="150;130;150" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="404" cy="120" r="1.1" fill="#dff6ea" opacity="0.22"><animate attributeName="cy" values="120;98;120" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.28;0.07" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="152" cy="70" r="0.9" fill="#ffffff" opacity="0.26"><animate attributeName="cy" values="70;52;70" dur="11s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.1;0.32;0.1" dur="5.5s" repeatCount="indefinite" begin="3.5s"/></circle>
<circle cx="352" cy="60" r="0.8" fill="#ffffff" opacity="0.24"><animate attributeName="cy" values="60;42;60" dur="13s" repeatCount="indefinite" begin="1.4s"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="6.5s" repeatCount="indefinite" begin="1.4s"/></circle>
<circle cx="60" cy="220" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="220;200;220" dur="15s" repeatCount="indefinite" begin="5s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7.5s" repeatCount="indefinite" begin="5s"/></circle>
</svg>`;

// ---------------------------------------------------------------------------
// STORY 2: wreck_return — "Back Down to Fishington's"
// ---------------------------------------------------------------------------

// Return scene 0: Arrival. The story-1 wreck composition, but closer and more
// familiar. Crab on the mat, foreground.
STORY_SCENES['wreck_return_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="42%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetShaft0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.16"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wrRetHull0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="55%" stop-color="#122a2c"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wrRetSand0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <radialGradient id="wrRetLampG0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater0)"/>
<polygon points="100,0 132,0 158,140 130,140" fill="url(#wrRetShaft0)" opacity="0.6"><animate attributeName="opacity" values="0.34;0.7;0.34" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 366,0 340,150 312,150" fill="url(#wrRetShaft0)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.6;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<!-- Kelp, closer than in story 1 -->
<path d="M22,260 Q14,214 26,178 Q34,154 26,128" fill="none" stroke="#12333a" stroke-width="5" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M22,260 Q14,214 26,178 Q34,154 26,128;M22,260 Q30,214 16,178 Q8,154 18,128;M22,260 Q14,214 26,178 Q34,154 26,128" dur="11s" repeatCount="indefinite"/></path>
<path d="M482,260 Q474,220 486,186 Q492,164 484,142" fill="none" stroke="#12333a" stroke-width="4.4" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M482,260 Q474,220 486,186 Q492,164 484,142;M482,260 Q492,220 476,186 Q470,164 478,142;M482,260 Q474,220 486,186 Q492,164 484,142" dur="13s" repeatCount="indefinite" begin="3s"/></path>
<!-- THE HULL, closer, filling more of frame -->
<path d="M20,208 Q30,164 96,150 L392,116 Q450,112 470,134 Q488,154 482,190 L476,220 Q300,238 150,234 Q60,230 20,208 Z" fill="url(#wrRetHull0)"/>
<path d="M20,208 Q30,164 96,150 L392,116 Q450,112 470,134 L466,150 Q300,138 148,158 Q60,176 24,200 Z" fill="#25494a" opacity="0.55"/>
<path d="M32,192 Q180,158 468,140" fill="none" stroke="#0a1a1e" stroke-width="1.2" opacity="0.55"/>
<path d="M28,206 Q190,176 476,160" fill="none" stroke="#0a1a1e" stroke-width="1.2" opacity="0.45"/>
<path d="M112,150 L104,222" stroke="#0a1a1e" stroke-width="2.2" opacity="0.4"/>
<path d="M180,142 L174,230" stroke="#0a1a1e" stroke-width="2.2" opacity="0.35"/>
<path d="M366,120 L370,228" stroke="#0a1a1e" stroke-width="2.2" opacity="0.3"/>
<!-- Broken bow, open water inside -->
<path d="M20,208 Q30,164 96,150 L84,168 Q62,178 58,196 L66,212 Q38,216 20,208 Z" fill="#07141a" opacity="0.8"/>
<!-- Rail with stanchions -->
<path d="M94,148 L390,114" fill="none" stroke="#2c5450" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
<rect x="122" y="134" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="188" y="126" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="254" y="118" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<rect x="320" y="111" width="2.6" height="12" fill="#2c5450" opacity="0.8"/>
<!-- Toppled mast and its hanging loops of rope -->
<path d="M270,118 L206,44" stroke="#173537" stroke-width="6" stroke-linecap="round"/>
<path d="M270,118 L206,44" stroke="#28524f" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
<path d="M226,68 L262,58" stroke="#173537" stroke-width="3.4" stroke-linecap="round"/>
<path d="M212,50 Q192,82 208,102 Q224,120 206,136" fill="none" stroke="#2a3a2c" stroke-width="1.8" opacity="0.75"><animate attributeName="d" values="M212,50 Q192,82 208,102 Q224,120 206,136;M212,50 Q198,82 202,102 Q218,120 212,136;M212,50 Q192,82 208,102 Q224,120 206,136" dur="9s" repeatCount="indefinite"/></path>
<path d="M248,60 Q268,88 252,108 Q240,124 254,140" fill="none" stroke="#2a3a2c" stroke-width="1.5" opacity="0.6"><animate attributeName="d" values="M248,60 Q268,88 252,108 Q240,124 254,140;M248,60 Q260,88 258,108 Q248,124 250,140;M248,60 Q268,88 252,108 Q240,124 254,140" dur="11s" repeatCount="indefinite" begin="1.6s"/></path>
<!-- SAND banked along her -->
<path d="M0,242 Q52,224 116,216 Q152,212 176,220 Q126,196 96,182 Q64,166 26,182 Q4,192 0,206 Z" fill="url(#wrRetSand0)" opacity="0.9"/>
<path d="M340,236 Q392,214 436,194 Q466,180 500,192 L500,260 L336,260 Z" fill="url(#wrRetSand0)" opacity="0.9"/>
<path d="M0,248 Q120,238 250,244 Q380,250 500,238 L500,260 L0,260 Z" fill="#2f5158" opacity="0.75"/>
<path d="M12,214 Q56,196 100,188" fill="none" stroke="#3d666c" stroke-width="1.5" opacity="0.5"/>
<path d="M420,194 Q456,186 490,198" fill="none" stroke="#3d666c" stroke-width="1.5" opacity="0.45"/>
<!-- THE LAMPS, closer and brighter than the first dive -->
<path d="M112,132 Q146,142 178,128 Q212,138 244,122 Q278,132 310,116 Q344,126 374,110" fill="none" stroke="#2c5450" stroke-width="1" opacity="0.7"/>
<circle cx="146" cy="140" r="32" fill="url(#wrRetLampG0)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.72;0.5;0.66;0.42" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="212" cy="136" r="30" fill="url(#wrRetLampG0)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="278" cy="130" r="32" fill="url(#wrRetLampG0)" opacity="0.6"><animate attributeName="opacity" values="0.42;0.74;0.5;0.66;0.42" dur="3.6s" repeatCount="indefinite" begin="1.6s"/></circle>
<circle cx="344" cy="124" r="29" fill="url(#wrRetLampG0)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.68;0.46;0.6;0.38" dur="3s" repeatCount="indefinite" begin="2.4s"/></circle>
<g fill="#F2C14E">
  <rect x="142" y="136" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="208" y="132" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.74;1;0.82;0.94;0.74" dur="2.7s" repeatCount="indefinite" begin="0.8s"/></rect>
  <rect x="274" y="126" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="3.6s" repeatCount="indefinite" begin="1.6s"/></rect>
  <rect x="340" y="120" width="7.4" height="8.6" rx="1.8"><animate attributeName="opacity" values="0.75;1;0.83;0.95;0.75" dur="3s" repeatCount="indefinite" begin="2.4s"/></rect>
</g>
<g fill="none" stroke="#8b6914" stroke-width="0.8" opacity="0.7">
  <rect x="141" y="135" width="9.4" height="10.6" rx="2"/>
  <rect x="207" y="131" width="9.4" height="10.6" rx="2"/>
  <rect x="273" y="125" width="9.4" height="10.6" rx="2"/>
  <rect x="339" y="119" width="9.4" height="10.6" rx="2"/>
</g>
<ellipse cx="244" cy="222" rx="150" ry="20" fill="#F2C14E" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/></ellipse>
<!-- The hatch, shut. It is about to bang open. -->
<rect x="290" y="118" width="34" height="10" rx="2.4" fill="#0e2224" transform="rotate(-6,307,123)"/>
<rect x="293" y="119" width="28" height="2.6" rx="1.3" fill="#2c5450" opacity="0.5" transform="rotate(-6,307,123)"/>
<circle cx="318" cy="123" r="2.4" fill="url(#wrRetSand0)" opacity="0"/>
<circle cx="318" cy="123" r="2.4" fill="#8b6914" opacity="0.7"/>
<!-- THE DOORMAT, close and clearly swept, and the crab on it -->
<g transform="translate(206,234)">
  <path d="M-42,0 L42,0 L52,18 L-52,18 Z" fill="#5a4a22"/>
  <path d="M-42,0 L42,0 L44,5 L-44,5 Z" fill="#75612e" opacity="0.85"/>
  <path d="M-38,7 L40,7 M-41,12 L43,12" stroke="#3d3216" stroke-width="1.1" opacity="0.7"/>
  <path d="M-24,0 L-29,18 M-8,0 L-10,18 M8,0 L9,18 M24,0 L28,18" stroke="#3d3216" stroke-width="0.8" opacity="0.5"/>
  <!-- a fringe of the mat lifting in the current -->
  <path d="M-52,18 Q-56,14 -52,10" fill="none" stroke="#5a4a22" stroke-width="2" stroke-linecap="round"><animate attributeName="d" values="M-52,18 Q-56,14 -52,10;M-52,18 Q-58,13 -52,9;M-52,18 Q-56,14 -52,10" dur="5s" repeatCount="indefinite"/></path>
</g>
<g transform="translate(206,228)">
  <ellipse cx="0" cy="0" rx="10" ry="6.6" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-2" rx="8.6" ry="4.2" fill="#b04a38" opacity="0.85"/>
  <path d="M-6,-4 Q0,-6 6,-4" fill="none" stroke="#7a3428" stroke-width="0.8" opacity="0.6"/>
  <circle cx="-3.4" cy="-4.8" r="1.6" fill="#0a1a1e"/>
  <circle cx="3.4" cy="-4.8" r="1.6" fill="#0a1a1e"/>
  <circle cx="-3" cy="-5.3" r="0.6" fill="#ffeaa7"/>
  <circle cx="3.8" cy="-5.3" r="0.6" fill="#ffeaa7"/>
  <path d="M-8.6,-1.4 L-16,-5.6 L-19,-1.4" fill="none" stroke="#8f3b2e" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M-8.6,-1.4 L-16,-5.6 L-19,-1.4;M-8.6,-1.4 L-16,-7 L-19,-3;M-8.6,-1.4 L-16,-5.6 L-19,-1.4" dur="2.4s" repeatCount="indefinite"/></path>
  <path d="M8.6,-1.4 L16,-5.6 L19,-1.4" fill="none" stroke="#8f3b2e" stroke-width="2.2" stroke-linecap="round"><animate attributeName="d" values="M8.6,-1.4 L16,-5.6 L19,-1.4;M8.6,-1.4 L16,-7 L19,-3;M8.6,-1.4 L16,-5.6 L19,-1.4" dur="2.4s" repeatCount="indefinite" begin="1.2s"/></path>
  <path d="M-7,4.4 L-11,8.6 M0,5.6 L0,10 M7,4.4 L11,8.6" stroke="#8f3b2e" stroke-width="1.6" stroke-linecap="round"/>
</g>
<!-- The rope you came down on, still there, off to the left -->
<path d="M76,0 Q70,40 80,80 Q88,110 76,138" fill="none" stroke="#2a3a2c" stroke-width="2.2" stroke-linecap="round" opacity="0.7"><animate attributeName="d" values="M76,0 Q70,40 80,80 Q88,110 76,138;M76,0 Q82,40 72,80 Q66,110 76,138;M76,0 Q70,40 80,80 Q88,110 76,138" dur="8s" repeatCount="indefinite"/></path>
<!-- Motes -->
<circle cx="170" cy="170" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="170;152;170" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.34;0.12" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="310" cy="158" r="1.2" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="158;140;158" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="440" cy="80" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="80;60;80" dur="13s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="56" cy="100" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="100;80;100" dur="14s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="1s"/></circle>
<rect x="0" y="0" width="500" height="40" fill="#07141a" opacity="0.16"/>
</svg>`;

// Return scene 1: The hatch bangs open and Fredward is already coming at the
// viewer with the book. Motion, joy, ink.
STORY_SCENES['wreck_return_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="48%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetDeck1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wrRetBrass1" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="48%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetGlass1" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
  <radialGradient id="wrRetLampG1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetPage1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#d2c190"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater1)"/>
<polygon points="60,0 92,0 116,130 88,130" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="400,0 428,0 404,136 380,136" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- Deck and rail -->
<path d="M0,150 L500,132 L500,178 L0,196 Z" fill="#0d2028" opacity="0.6"/>
<path d="M0,196 L500,178 L500,260 L0,260 Z" fill="url(#wrRetDeck1)"/>
<path d="M0,196 L500,178 L500,186 L0,204 Z" fill="#2c5450" opacity="0.35"/>
<path d="M0,220 L500,200 M0,242 L500,220" stroke="#0a1a1e" stroke-width="1" opacity="0.35"/>
<path d="M0,178 L500,158" fill="none" stroke="#2c5450" stroke-width="2" opacity="0.75"/>
<circle cx="62" cy="180" r="26" fill="url(#wrRetLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="436" cy="162" r="26" fill="url(#wrRetLampG1)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.68;0.46;0.62;0.38" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></circle>
<rect x="59" y="177" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
<rect x="433" y="159" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.75;1;0.83;0.95;0.75" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></rect>
<!-- THE HATCH, banged open, cover still swinging -->
<ellipse cx="248" cy="196" rx="52" ry="17" fill="#07141a"/>
<ellipse cx="248" cy="196" rx="52" ry="17" fill="none" stroke="url(#wrRetBrass1)" stroke-width="3.4"/>
<ellipse cx="248" cy="194" rx="47" ry="13" fill="none" stroke="#c9962e" stroke-width="0.9" opacity="0.4"/>
<g transform="translate(296,192)">
  <animateTransform attributeName="transform" type="rotate" values="-8,0,0;5,0,0;-3,0,0;2,0,0;0,0,0" dur="2.4s" repeatCount="indefinite" additive="sum"/>
  <path d="M0,-6 L54,-38 L62,-24 L8,8 Z" fill="#1d3b3a"/>
  <path d="M0,-6 L54,-38 L56,-34 L2,-2 Z" fill="#2c5450" opacity="0.6"/>
  <circle cx="52" cy="-32" r="2.4" fill="#8b6914"/>
</g>
<!-- Silt kicked up by the bang, settling -->
<ellipse cx="248" cy="208" rx="76" ry="12" fill="#3d666c" opacity="0.2"><animate attributeName="rx" values="40;96;110" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.12;0" dur="3.4s" repeatCount="indefinite"/></ellipse>
<ellipse cx="248" cy="196" rx="46" ry="14" fill="#F2C14E" opacity="0.2"><animate attributeName="opacity" values="0.12;0.28;0.12" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- FREDWARD, out of the hatch and already coming at you, both hands out -->
<g transform="translate(246,86)">
  <animateTransform attributeName="transform" type="translate" values="246,90;246,80;246,90" dur="2.6s" repeatCount="indefinite"/>
  <!-- legs, still half in the hatch, kicking up -->
  <path d="M-14,96 Q-24,116 -20,132" fill="none" stroke="url(#wrRetSuit1)" stroke-width="14" stroke-linecap="round"><animate attributeName="d" values="M-14,96 Q-24,116 -20,132;M-14,96 Q-28,112 -26,128;M-14,96 Q-24,116 -20,132" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M14,96 Q26,114 22,130" fill="none" stroke="url(#wrRetSuit1)" stroke-width="14" stroke-linecap="round"><animate attributeName="d" values="M14,96 Q26,114 22,130;M14,96 Q30,110 28,126;M14,96 Q26,114 22,130" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></path>
  <rect x="-28" y="128" width="18" height="12" rx="3" fill="#5c4409"><animate attributeName="x" values="-28;-34;-28" dur="2.6s" repeatCount="indefinite"/></rect>
  <rect x="14" y="126" width="18" height="12" rx="3" fill="#5c4409"><animate attributeName="x" values="14;20;14" dur="2.6s" repeatCount="indefinite" begin="1.3s"/></rect>
  <!-- torso, leaning forward hard -->
  <path d="M-30,46 Q0,36 30,46 L26,100 Q0,108 -26,100 Z" fill="url(#wrRetSuit1)"/>
  <path d="M-27,60 Q0,52 27,60 M-27,76 Q0,68 27,76" fill="none" stroke="#1c2f26" stroke-width="1.2" opacity="0.5"/>
  <rect x="-13" y="48" width="26" height="12" rx="2.5" fill="url(#wrRetBrass1)"/>
  <circle cx="-6" cy="54" r="1.5" fill="#c9962e"/><circle cx="6" cy="54" r="1.5" fill="#c9962e"/>
  <ellipse cx="0" cy="42" rx="17" ry="6" fill="url(#wrRetBrass1)"/>
  <!-- helmet, tilted forward at you, very slight bob -->
  <g transform="rotate(-4,0,16)">
    <animateTransform attributeName="transform" type="rotate" values="-6,0,16;-2,0,16;-6,0,16" dur="2.6s" repeatCount="indefinite" additive="sum"/>
    <circle cx="0" cy="16" r="23" fill="url(#wrRetBrass1)"/>
    <circle cx="0" cy="16" r="23" fill="none" stroke="#5c4409" stroke-width="1.6"/>
    <circle cx="-19" cy="18" r="5.4" fill="#5c4409"/><circle cx="-19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
    <circle cx="19" cy="18" r="5.4" fill="#5c4409"/><circle cx="19" cy="18" r="3.2" fill="#123038" opacity="0.8"/>
    <circle cx="-12" cy="-1" r="1.3" fill="#c9962e"/><circle cx="0" cy="-5" r="1.3" fill="#c9962e"/><circle cx="12" cy="-1" r="1.3" fill="#c9962e"/>
    <circle cx="0.0" cy="17.0" r="15.4" fill="url(#wrRetGlass1)"/>
    <g opacity="0.82">
    <ellipse cx="0.0" cy="19.67" rx="8.62" ry="9.86" fill="#9c7a5e"/>
    <path d="M-8.62,18.03 Q0.0,9.2 8.62,18.03 L8.62,12.89 Q0.0,7.35 -8.62,12.89 Z" fill="#6d523d" opacity="0.55"/>
    <path d="M-6.78,15.56 Q0.0,12.69 6.78,15.56" fill="none" stroke="#5a4131" stroke-width="1.54" stroke-linecap="round" opacity="0.8"/>
    <path d="M0.0,17.41 L-0.82,21.31 Q0.0,22.34 1.44,21.52" fill="none" stroke="#7a5c45" stroke-width="1.23" stroke-linecap="round" opacity="0.8"/>
    <path d="M-5.54,17.62 Q-3.49,15.36 -1.44,17.62" fill="none" stroke="#2a1d12" stroke-width="1.54" stroke-linecap="round"/><path d="M1.44,17.62 Q3.49,15.36 5.54,17.62" fill="none" stroke="#2a1d12" stroke-width="1.54" stroke-linecap="round"/>
    <path d="M-5.75,23.57 Q-2.46,21.93 0.0,23.16 Q2.46,21.93 5.75,23.57" fill="#7a6248" opacity="0.85"/>
    </g>
    <circle cx="0.0" cy="17.0" r="15.4" fill="none" stroke="#8b6914" stroke-width="3.49"/>
    <circle cx="0.0" cy="17.0" r="16.84" fill="none" stroke="#c9962e" stroke-width="1.03" opacity="0.75"/>
    <circle cx="14.42" cy="22.97" r="1.03" fill="#5c4409"/><circle cx="5.97" cy="31.42" r="1.03" fill="#5c4409"/><circle cx="-5.97" cy="31.42" r="1.03" fill="#5c4409"/><circle cx="-14.42" cy="22.97" r="1.03" fill="#5c4409"/><circle cx="-14.42" cy="11.03" r="1.03" fill="#5c4409"/><circle cx="-5.97" cy="2.58" r="1.03" fill="#5c4409"/><circle cx="5.97" cy="2.58" r="1.03" fill="#5c4409"/><circle cx="14.42" cy="11.03" r="1.03" fill="#5c4409"/>
    <path d="M-9.65,13.51 Q-5.13,7.35 2.46,6.94" fill="none" stroke="#dff6ea" stroke-width="2.46" stroke-linecap="round" opacity="0.34"><animate attributeName="opacity" values="0.18;0.46;0.18" dur="2.8s" repeatCount="indefinite"/></path>
    <circle cx="6.37" cy="10.43" r="1.75" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.3;0.62;0.3" dur="2.8s" repeatCount="indefinite"/></circle>
    <path d="M-7.8,23.78 Q0.0,26.86 7.8,23.78" fill="none" stroke="#7fc4b8" stroke-width="1.44" stroke-linecap="round" opacity="0.2"/>
  </g>
  <!-- BOTH ARMS OUT, thrusting the book at the viewer -->
  <path d="M-28,60 Q-58,74 -70,96" fill="none" stroke="url(#wrRetSuit1)" stroke-width="11" stroke-linecap="round"><animate attributeName="d" values="M-28,60 Q-58,74 -70,96;M-28,60 Q-60,78 -66,100;M-28,60 Q-58,74 -70,96" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M28,60 Q58,74 70,96" fill="none" stroke="url(#wrRetSuit1)" stroke-width="11" stroke-linecap="round"><animate attributeName="d" values="M28,60 Q58,74 70,96;M28,60 Q60,78 66,100;M28,60 Q58,74 70,96" dur="2.6s" repeatCount="indefinite"/></path>
  <!-- air hose, whipping behind him -->
  <path d="M18,2 Q60,-10 84,14 Q104,40 92,76" fill="none" stroke="#2a3a2c" stroke-width="3" stroke-linecap="round" opacity="0.65"><animate attributeName="d" values="M18,2 Q60,-10 84,14 Q104,40 92,76;M18,2 Q66,-18 90,10 Q110,38 92,76;M18,2 Q60,-10 84,14 Q104,40 92,76" dur="3.6s" repeatCount="indefinite"/></path>
</g>
<!-- THE BOOK, held out open, right at the front of frame -->
<g>
  <animateTransform attributeName="transform" type="translate" values="246,228;246,220;246,228" dur="2.6s" repeatCount="indefinite"/>
  <g transform="scale(0.6)">
  <!-- the closed block of pages beneath, thick -->
  <path d="M-96,18 L96,18 L92,2 L-92,2 Z" fill="#8a7a4c"/>
  <path d="M-92,2 L92,2 L88,-2 L-88,-2 Z" fill="#a5945f"/>
  <path d="M-88,6 L88,6 M-88,11 L88,11 M-88,16 L88,16" stroke="#6d5f38" stroke-width="0.7" opacity="0.55"/>
  <path d="M-100,20 L-92,20 L-92,-6 L-100,-4 Z" fill="#3d2a12"/>
  <path d="M100,20 L92,20 L92,-6 L100,-4 Z" fill="#3d2a12"/>
  <!-- open spread, tipped toward the viewer -->
  <path d="M-88,0 Q-44,-14 0,-10 L0,-72 Q-44,-80 -88,-64 Z" fill="url(#wrRetPage1)"/>
  <path d="M0,-10 Q44,-14 88,0 L88,-64 Q44,-80 0,-72 Z" fill="url(#wrRetPage1)" opacity="0.94"/>
  <path d="M0,-72 L0,-10" stroke="#8a7a4c" stroke-width="3.4" opacity="0.5"/>
  <!-- left page: finished entries -->
  <g stroke="#3a2e12" stroke-width="0.6" opacity="0.45">
    <path d="M-78,-52 L-24,-55 M-78,-46 L-16,-49 M-78,-40 L-36,-43"/>
    <path d="M-78,-26 L-20,-28 M-78,-20 L-30,-22"/>
  </g>
  <path d="M-70,-36 Q-56,-46 -42,-36 Q-30,-27 -18,-36" fill="none" stroke="#3a2e12" stroke-width="1.6" stroke-linecap="round"/>
  <!-- right page: THE NEW ONE, ink still tacky -->
  <path d="M16,-64 L64,-66" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
  <ellipse cx="46" cy="-40" rx="19" ry="12" fill="none" stroke="#26200c" stroke-width="2"/>
  <path d="M28,-43 L16,-49 M28,-37 L15,-34 M62,-43 L74,-49 M62,-37 L75,-34 M36,-29 L30,-20 M56,-29 L62,-20" stroke="#26200c" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="40" cy="-43" r="1.5" fill="#26200c"/><circle cx="52" cy="-43" r="1.5" fill="#26200c"/>
  <!-- wet ink: a faint sheen that moves -->
  <ellipse cx="46" cy="-40" rx="19" ry="12" fill="none" stroke="#5b4a20" stroke-width="2" opacity="0.4"><animate attributeName="opacity" values="0.2;0.55;0.2" dur="3s" repeatCount="indefinite"/></ellipse>
  <g stroke="#3a2e12" stroke-width="0.6" opacity="0.4">
    <path d="M16,-22 L78,-24 M16,-16 L70,-18"/>
  </g>
  <!-- a smudge where a glove has already touched it -->
  <ellipse cx="24" cy="-18" rx="6" ry="3" fill="#4a3a18" opacity="0.25"/>
  <!-- his gloves gripping both covers -->
  <path d="M-108,10 Q-96,2 -86,8 Q-82,16 -92,20 Q-104,22 -108,16 Z" fill="#40614e"/>
  <path d="M108,10 Q96,2 86,8 Q82,16 92,20 Q104,22 108,16 Z" fill="#40614e"/>
  <path d="M-100,20 L-102,26 M-92,21 L-93,27" stroke="#3a5847" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M100,20 L102,26 M92,21 L93,27" stroke="#3a5847" stroke-width="3.2" stroke-linecap="round"/>
  <!-- warm light landing on the open spread -->
  <path d="M-88,0 Q-44,-14 0,-10 L0,-72 Q-44,-80 -88,-64 Z" fill="#ffeaa7" opacity="0.1"><animate attributeName="opacity" values="0.06;0.14;0.06" dur="4s" repeatCount="indefinite"/></path>
</g></g>
<!-- Bubbles, fast, because he has come up out of the hatch in a hurry -->
<circle cx="264" cy="70" r="2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="70;-10" dur="3.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="3.6s" repeatCount="indefinite"/></circle>
<circle cx="272" cy="78" r="1.5" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="78;-10" dur="4.4s" repeatCount="indefinite" begin="0.8s"/><animate attributeName="opacity" values="0;0.46;0" dur="4.4s" repeatCount="indefinite" begin="0.8s"/></circle>
<circle cx="256" cy="64" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="64;-10" dur="4s" repeatCount="indefinite" begin="1.7s"/><animate attributeName="opacity" values="0;0.48;0" dur="4s" repeatCount="indefinite" begin="1.7s"/></circle>
<circle cx="280" cy="86" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="86;-10" dur="5.2s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.42;0" dur="5.2s" repeatCount="indefinite" begin="2.6s"/></circle>
<!-- Motes -->
<circle cx="120" cy="110" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="110;92;110" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="404" cy="88" r="1.1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="88;70;88" dur="13s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="46" cy="60" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="60;42;60" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Return scene 2: The new page. The drawing pool rotates per visit, so all
// four creatures sit on the spread as separate entries and the page reads
// correctly whichever line the story picks: the eel that only swims through
// gaps, the crab building a shell out of letters, the thing that comes to look
// at the lamps, and the octopus who has moved into the ship's bell.
STORY_SCENES['wreck_return_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wrRetLit2" cx="50%" cy="46%" r="60%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.34"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.1"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetPage2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wrRetBrass2" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetGlove2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
` + wDefs('R2') + `</defs>
<rect width="500" height="260" fill="url(#wrRetWater2)"/>
<rect width="500" height="260" fill="url(#wrRetLit2)"/>
<!-- Lamp above frame -->
<rect x="248" y="0" width="4" height="14" fill="#2c5450"/>
<path d="M234,14 L266,14 L260,26 L240,26 Z" fill="#5c4409"/>
<rect x="242" y="24" width="16" height="9" rx="2" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.4s" repeatCount="indefinite"/></rect>
<ellipse cx="250" cy="32" rx="46" ry="15" fill="#ffd700" opacity="0.12"><animate attributeName="opacity" values="0.07;0.17;0.07" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Bulkhead and table -->
<rect x="0" y="0" width="500" height="46" fill="#0d2028" opacity="0.5"/>
<path d="M26,222 L474,222 L484,238 L16,238 Z" fill="#1d3b3a"/>
<path d="M26,222 L474,222 L476,226 L24,226 Z" fill="#2c5450" opacity="0.55"/>
<rect x="54" y="238" width="12" height="22" fill="#173537"/>
<rect x="434" y="238" width="12" height="22" fill="#173537"/>
<!-- THE BOOK, on the table, scaled so the entries still read while staying an
     object he leans over rather than a backdrop. HE is at model scale and the
     book is fitted to him, which is how wreck_return_1 stages it. It used to
     span the whole 500 frame with a gloved hand entering from the edge. -->
<g transform="translate(186,228) scale(0.46) translate(-250,-224)">
<!-- THE BOOK, filling the frame, open to the new spread -->
<path d="M60,222 L440,222 L438,200 L62,200 Z" fill="#8a7a4c"/>
<path d="M62,200 L438,200 L436,195 L64,195 Z" fill="#a5945f"/>
<path d="M68,203 L432,203 M68,209 L432,209 M68,215 L432,215" stroke="#6d5f38" stroke-width="0.7" opacity="0.55"/>
<path d="M54,224 L62,224 L62,192 L54,193 Z" fill="#3d2a12"/>
<path d="M446,224 L438,224 L438,192 L446,193 Z" fill="#3d2a12"/>
<path d="M68,198 Q160,182 250,187 L250,44 Q160,36 68,54 Z" fill="url(#wrRetPage2)"/>
<path d="M250,187 Q340,182 432,198 L432,54 Q340,36 250,44 Z" fill="url(#wrRetPage2)" opacity="0.95"/>
<path d="M250,44 L250,187" stroke="#8a7a4c" stroke-width="4" opacity="0.5"/>
<!-- Ruled margins -->
<path d="M92,50 L92,192 M408,50 L408,192" stroke="#c9705a" stroke-width="0.6" opacity="0.35"/>
<!-- ENTRY 1, upper left: the eel that only swims through gaps between things -->
<g stroke="#3a2e12" fill="none">
  <path d="M104,84 Q124,66 140,80 Q154,92 172,76 Q186,64 202,72" stroke-width="1.9" stroke-linecap="round"/>
  <path d="M104,84 Q124,70 140,83 Q154,94 172,79 Q186,68 202,75" stroke-width="0.7" opacity="0.55"/>
</g>
<circle cx="106" cy="83" r="1.3" fill="#3a2e12"/>
<!-- the gaps it swims through, drawn as two rocks with a slot between -->
<path d="M132,96 Q140,88 150,96 L150,104 L132,104 Z" fill="none" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M158,96 Q166,88 176,96 L176,104 L158,104 Z" fill="none" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M154,90 L154,106" stroke="#3a2e12" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 2"/>
<path d="M104,58 L172,56" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M104,112 L200,109 M104,117 L192,114 M104,122 L162,120"/>
</g>
<!-- ENTRY 2, lower left: the crab building a shell out of letters -->
<ellipse cx="140" cy="152" rx="17" ry="11" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M126,150 L118,145 M126,156 L117,158 M154,150 L162,145 M154,156 L163,158" stroke="#3a2e12" stroke-width="1.2" stroke-linecap="round"/>
<path d="M132,162 L128,170 M148,162 L152,170" stroke="#3a2e12" stroke-width="1" stroke-linecap="round"/>
<circle cx="135" cy="148" r="1.1" fill="#3a2e12"/><circle cx="145" cy="148" r="1.1" fill="#3a2e12"/>
<!-- the shell, made of actual letters -->
<text x="132" y="155" font-family="'Courier New',monospace" font-size="7" fill="#3a2e12" opacity="0.85">A</text>
<text x="140" y="151" font-family="'Courier New',monospace" font-size="6" fill="#3a2e12" opacity="0.75">R</text>
<text x="146" y="156" font-family="'Courier New',monospace" font-size="7" fill="#3a2e12" opacity="0.8">G</text>
<text x="134" y="147" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.6">S</text>
<text x="149" y="149" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.6">U</text>
<!-- drawn twice, and a different word both times -->
<ellipse cx="196" cy="158" rx="12" ry="8" fill="none" stroke="#3a2e12" stroke-width="1.2" opacity="0.55"/>
<text x="190" y="160" font-family="'Courier New',monospace" font-size="5" fill="#3a2e12" opacity="0.5">GUAR</text>
<path d="M168,152 L182,155" stroke="#3a2e12" stroke-width="0.6" opacity="0.4" stroke-dasharray="2 2"/>
<path d="M104,136 L176,134" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M104,176 L204,173 M104,181 L196,178"/>
</g>
<!-- ENTRY 3, upper right: the thing that comes to look at the lamps -->
<!-- fourteen tally marks, and it has never once come closer -->
<path d="M270,84 Q292,66 318,78 Q338,88 320,98 Q292,110 270,94 Z" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M270,94 L256,104 L260,84 Z" fill="none" stroke="#3a2e12" stroke-width="1.4"/>
<circle cx="312" cy="82" r="1.4" fill="#3a2e12"/>
<!-- the lamp it looks at, drawn small at the far side, and the gap between -->
<rect x="358" y="80" width="7" height="9" rx="1.8" fill="none" stroke="#3a2e12" stroke-width="1.1"/>
<path d="M336,86 L354,85" stroke="#3a2e12" stroke-width="0.6" opacity="0.45" stroke-dasharray="3 3"/>
<!-- fourteen tallies -->
<g stroke="#3a2e12" stroke-width="0.9" opacity="0.7">
  <path d="M266,110 L266,118 M270,110 L270,118 M274,110 L274,118 M278,110 L278,118 M264,118 L280,110"/>
  <path d="M286,110 L286,118 M290,110 L290,118 M294,110 L294,118 M298,110 L298,118 M284,118 L300,110"/>
  <path d="M306,110 L306,118 M310,110 L310,118 M314,110 L314,118 M318,110 L318,118"/>
</g>
<path d="M266,58 L340,56" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M266,126 L390,123 M266,131 L380,128"/>
</g>
<!-- ENTRY 4, lower right: the octopus who has moved into the ship's bell -->
<path d="M300,150 Q300,136 314,134 Q328,136 328,150 Z" fill="none" stroke="#3a2e12" stroke-width="1.8"/>
<path d="M300,150 Q314,156 328,150 L328,153 Q314,159 300,153 Z" fill="none" stroke="#3a2e12" stroke-width="1.2"/>
<circle cx="314" cy="131" r="2.4" fill="none" stroke="#3a2e12" stroke-width="1"/>
<!-- her, inside it, not ringing it -->
<ellipse cx="314" cy="145" rx="7" ry="6" fill="none" stroke="#3a2e12" stroke-width="1.3"/>
<circle cx="311" cy="144" r="1" fill="#3a2e12"/><circle cx="317" cy="144" r="1" fill="#3a2e12"/>
<path d="M308,151 Q304,157 300,158 M312,152 Q311,159 307,162 M317,152 Q319,159 323,161 M321,151 Q326,156 330,157" fill="none" stroke="#3a2e12" stroke-width="1" stroke-linecap="round"/>
<!-- the clapper, hanging perfectly still -->
<path d="M314,150 L314,155" stroke="#3a2e12" stroke-width="0.7" opacity="0.5"/>
<circle cx="314" cy="156" r="1.4" fill="none" stroke="#3a2e12" stroke-width="0.7" opacity="0.5"/>
<path d="M266,136 L336,134" stroke="#3a2e12" stroke-width="1.5" opacity="0.75"/>
<g stroke="#3a2e12" stroke-width="0.6" opacity="0.42">
  <path d="M266,172 L392,169 M266,177 L378,174 M266,182 L330,179"/>
</g>
<!-- the newest ink, still wet: a sheen over the octopus entry -->
<ellipse cx="314" cy="146" rx="20" ry="18" fill="#5b4a20" opacity="0.1"><animate attributeName="opacity" values="0.05;0.16;0.05" dur="3.2s" repeatCount="indefinite"/></ellipse>
</g>
<!-- FREDWARD, behind the table, one finger down on the newest entry. Model
     scale, h 22, the same man as every other frame. An earlier pass removed
     the disembodied hand by inflating the helmet instead, which broke the
     proportion table in the other direction. -->
` + (function () {
  var CH = 22;                   // model scale: the same man as every scene
  var HEAD_X = 342, HEAD_Y = 80;
  var hx = 250 - HEAD_X, hy = 214 - HEAD_Y;
  // upper arm down from the shoulder to an elbow, then forearm across to
  // the page: two lengths with a joint, so it reads as an arm and not a slab
  var ex = (-CH * 1.42 + hx) / 2 - CH * 0.2, ey = (CH * 1.75 + hy) / 2 + CH * 0.35;
  var arms = '<path d="M' + wn(-CH * 1.42) + ',' + wn(CH * 1.75) + ' L' + wn(ex) + ',' + wn(ey)
      + '" fill="none" stroke="url(#wSuitR2)" stroke-width="' + wn(CH * 0.5) + '" stroke-linecap="round"/>'
    + '<path d="M' + wn(ex) + ',' + wn(ey) + ' Q' + wn((ex + hx) / 2) + ',' + wn((ey + hy) / 2 + CH * 0.1)
      + ' ' + wn(hx + CH * 0.42) + ',' + wn(hy - CH * 0.06)
      + '" fill="none" stroke="url(#wSuitR2)" stroke-width="' + wn(CH * 0.44) + '" stroke-linecap="round"/>'
    + '<g transform="translate(' + wn(hx + CH * 0.5) + ',' + wn(hy - CH * 0.08) + ') rotate(-24)">'
    + '<rect x="' + wn(-CH * 0.26) + '" y="' + wn(-CH * 0.15) + '" width="' + wn(CH * 0.52) + '" height="' + wn(CH * 0.3)
    + '" rx="' + wn(CH * 0.06) + '" fill="#5f5122"/></g>'
    + '<g transform="translate(' + wn(hx) + ',' + wn(hy) + ') rotate(-14)">' + wHand('R2', CH, -1) + '</g>'
    + '<path d="M' + wn(hx - CH * 0.2) + ',' + wn(hy + CH * 0.02) + ' Q' + wn(hx - CH * 0.52) + ',' + wn(hy - CH * 0.06)
    + ' ' + wn(hx - CH * 0.78) + ',' + wn(hy + CH * 0.02) + '" fill="none" stroke="#40614e" stroke-width="' + wn(CH * 0.13)
    + '" stroke-linecap="round"><animate attributeName="d" values="'
    + 'M' + wn(hx - CH * 0.2) + ',' + wn(hy + CH * 0.02) + ' Q' + wn(hx - CH * 0.52) + ',' + wn(hy - CH * 0.06) + ' ' + wn(hx - CH * 0.78) + ',' + wn(hy + CH * 0.02) + ';'
    + 'M' + wn(hx - CH * 0.2) + ',' + wn(hy + CH * 0.02) + ' Q' + wn(hx - CH * 0.52) + ',' + wn(hy - CH * 0.02) + ' ' + wn(hx - CH * 0.78) + ',' + wn(hy + CH * 0.08) + ';'
    + 'M' + wn(hx - CH * 0.2) + ',' + wn(hy + CH * 0.02) + ' Q' + wn(hx - CH * 0.52) + ',' + wn(hy - CH * 0.06) + ' ' + wn(hx - CH * 0.78) + ',' + wn(hy + CH * 0.02)
    + '" dur="1.8s" repeatCount="indefinite"/></path>'
    // far arm, hanging at his side. He always has two, and both hands show.
    + '<path d="M' + wn(CH * 1.5) + ',' + wn(CH * 2.05) + ' Q' + wn(CH * 2.3) + ',' + wn(CH * 3.2)
      + ' ' + wn(CH * 2.05) + ',' + wn(CH * 4.3)
      + '" fill="none" stroke="url(#wSuitR2)" stroke-width="' + wn(CH * 0.52) + '" stroke-linecap="round"/>'
    + '<g transform="translate(' + wn(CH * 2.05) + ',' + wn(CH * 4.65) + ')">' + wHand('R2', CH, 1) + '</g>';
  return fred({ s: 'R2', h: CH, x: HEAD_X, y: HEAD_Y, pose: 'standing', expr: 'open',
                dur: '4s', arms: arms, hose: 'right', tilt: -8 });
})() + `
<!-- Pen, laid across the gutter where he dropped it -->
<rect x="216" y="192" width="48" height="3.2" rx="1.6" fill="#7a5a18" transform="rotate(-6,240,193)"/>
<path d="M264,192 L272,194 L264,196 Z" fill="#2a2a2a" transform="rotate(-6,240,193)"/>
<!-- Motes in the lamplight -->
<circle cx="140" cy="34" r="1" fill="#ffeaa7" opacity="0.3"><animate attributeName="cy" values="34;18;34" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.34;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="368" cy="28" r="1.1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="28;12;28" dur="11s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.5s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="472" cy="120" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="120;102;120" dur="12s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="3s"/></circle>
<circle cx="24" cy="140" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="140;122;140" dur="13s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="1s"/></circle>
</svg>`;

// Return scene 3: The book fanned open at a hundred pages back, two spreads
// visible, identical handwriting on both. The old spread is stained and the
// new one is not, and the hand is exactly the same hand.
STORY_SCENES['wreck_return_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <radialGradient id="wrRetLit3" cx="50%" cy="48%" r="60%">
    <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.32"/><stop offset="45%" stop-color="#F2C14E" stop-opacity="0.09"/><stop offset="100%" stop-color="#07141a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="wrRetOldPg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dbcb98"/><stop offset="100%" stop-color="#b8a672"/>
  </linearGradient>
  <linearGradient id="wrRetNewPg3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f2e7be"/><stop offset="100%" stop-color="#cfbe8c"/>
  </linearGradient>
  <linearGradient id="wrRetBrass3" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetGlove3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
` + wDefs('R3') + `</defs>
<rect width="500" height="260" fill="url(#wrRetWater3)"/>
<rect width="500" height="260" fill="url(#wrRetLit3)"/>
<rect x="0" y="0" width="500" height="40" fill="#0d2028" opacity="0.5"/>
<!-- Lamp glow from off-frame left -->
<ellipse cx="60" cy="20" rx="70" ry="30" fill="#ffd700" opacity="0.09"><animate attributeName="opacity" values="0.05;0.13;0.05" dur="3.4s" repeatCount="indefinite"/></ellipse>
<!-- Table -->
<path d="M14,228 L486,228 L496,244 L4,244 Z" fill="#1d3b3a"/>
<path d="M14,228 L486,228 L488,232 L12,232 Z" fill="#2c5450" opacity="0.55"/>
<rect x="48" y="244" width="12" height="16" fill="#173537"/>
<rect x="440" y="244" width="12" height="16" fill="#173537"/>
<!-- FREDWARD, the book, and his two hands, composed together so the draw order
     is right: his body first, the open book in front of him, then his arms and
     palms ON the two spreads. He is at MODEL SCALE, h 22, the same man as every
     other frame; the book is scaled to sit in front of him, which is exactly how
     wreck_return_1 stages it. An earlier pass fixed the disembodied hands by
     inflating the helmet instead, which broke the proportion table the other way. -->
` + (function () {
  var CH = 22;                     // model scale: the same man as every scene
  var HEAD_X = 250, HEAD_Y = 82;
  // the two spread faces, after the book's own scaling, in scene coordinates
  var lx = 192 - HEAD_X, ly = 224 - HEAD_Y;
  var rx = 310 - HEAD_X, ry = 224 - HEAD_Y;
  function limb(sx, sy, ex, ey, hxx, hyy, dir) {
    return '<path d="M' + wn(sx) + ',' + wn(sy) + ' Q' + wn(ex) + ',' + wn(ey)
      + ' ' + wn(hxx + dir * CH * 0.34) + ',' + wn(hyy - CH * 0.1)
      + '" fill="none" stroke="url(#wSuitR3)" stroke-width="' + wn(CH * 0.52) + '" stroke-linecap="round"/>'
      + '<g transform="translate(' + wn(hxx) + ',' + wn(hyy) + ') rotate(' + (dir * -12) + ')">' + wHand('R3', CH, dir) + '</g>';
  }
  var body = fred({ s: 'R3', h: CH, x: HEAD_X, y: HEAD_Y, pose: 'standing', expr: 'open',
                    dur: '4.2s', arms: '', hose: 'right' });
  var arms = '<g transform="translate(' + HEAD_X + ',' + HEAD_Y + ')">'
    + limb(-CH * 1.5, CH * 2.05, -CH * 3.1, CH * 2.7, lx, ly, -1)
    + limb(CH * 1.5, CH * 2.05, CH * 3.1, CH * 2.7, rx, ry, 1)
    + '</g>';
  return body + `<!-- THE BOOK, held open in two places at once, fanned. Scaled to the model
     scale. A fanned book showing two spreads at once is physically wider
     than one closed book, so it runs past 4.4 h; what matters is that HE is
     at model scale and the book is an object he is holding open. It used
     to span the whole frame with two gloved hands entering from the edges
     and no body attached to either of them. -->
<g transform="translate(250,232) scale(0.4) translate(-250,-230)">
<!-- THE BOOK, held open in two places at once, fanned -->
<!-- page block, left half: the hundred pages he has turned back through -->
<path d="M40,228 L246,228 L244,190 L42,196 Z" fill="#8a7a4c"/>
<path d="M42,196 L244,190 L242,185 L44,191 Z" fill="#a5945f"/>
<g stroke="#6d5f38" stroke-width="0.6" opacity="0.5">
  <path d="M46,200 L244,194 M46,206 L244,200 M46,212 L244,206 M46,218 L244,212 M46,224 L244,218"/>
</g>
<!-- page block, right half: the rest of it -->
<path d="M254,228 L460,228 L458,196 L256,190 Z" fill="#8a7a4c"/>
<path d="M256,190 L458,196 L456,191 L258,185 Z" fill="#a5945f"/>
<g stroke="#6d5f38" stroke-width="0.6" opacity="0.5">
  <path d="M256,194 L456,200 M256,200 L456,206 M256,206 L456,212 M256,212 L456,218 M256,218 L456,224"/>
</g>
<!-- covers at the outer edges -->
<path d="M34,230 L42,230 L44,184 L36,185 Z" fill="#3d2a12"/>
<path d="M466,230 L458,230 L456,184 L464,185 Z" fill="#3d2a12"/>
<!-- SPREAD A: a hundred pages back. Older paper, water-marked, complete. -->
<path d="M46,192 Q106,178 172,182 L172,66 Q106,58 46,72 Z" fill="url(#wrRetOldPg3)"/>
<path d="M172,182 Q196,181 212,184 L212,68 Q196,64 172,66 Z" fill="url(#wrRetOldPg3)" opacity="0.85"/>
<path d="M172,66 L172,182" stroke="#8a7a4c" stroke-width="2.6" opacity="0.5"/>
<!-- age: stains, and a corner gone soft -->
<ellipse cx="70" cy="164" rx="26" ry="15" fill="#9d8a58" opacity="0.28"/>
<ellipse cx="152" cy="84" rx="20" ry="11" fill="#9d8a58" opacity="0.22"/>
<path d="M46,192 Q56,186 46,180" fill="#b8a672" opacity="0.7"/>
<!-- entry heading in his hand, plus the drawing and dense marginal notes -->
<path d="M58,84 L124,81" stroke="#3a2e12" stroke-width="1.5" opacity="0.7"/>
<path d="M64,108 Q84,92 100,106 Q114,118 132,104" fill="none" stroke="#3a2e12" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="66" cy="107" r="1.2" fill="#3a2e12"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M52,94 L60,94 M52,99 L61,99 M52,104 L58,104 M52,109 L61,109 M52,114 L59,114 M52,119 L61,119"/>
  <path d="M64,128 L152,125 M64,133 L160,130 M64,138 L124,136 M64,143 L150,140 M64,148 L138,146"/>
  <path d="M182,90 L206,89 M182,96 L206,95 M182,102 L200,101 M182,108 L206,107"/>
</g>
<path d="M64,120 L152,120" stroke="#3a2e12" stroke-width="0.6" opacity="0.5"/>
<path d="M64,117 L64,123 M86,118 L86,122 M108,117 L108,123 M130,118 L130,122 M152,117 L152,123" stroke="#3a2e12" stroke-width="0.55" opacity="0.5"/>
<!-- a date, ruled off, at the foot -->
<path d="M120,168 L160,168" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M116,172 L164,172" stroke="#3a2e12" stroke-width="0.5" opacity="0.4"/>
<!-- THE FAN OF PAGES BETWEEN THE TWO SPREADS: a hundred of them, held -->
<g>
  <path d="M212,68 Q240,44 268,62" fill="none" stroke="#e0d0a0" stroke-width="1.4" opacity="0.9"/>
  <path d="M212,72 Q242,50 270,68" fill="none" stroke="#dccb9a" stroke-width="1.3" opacity="0.85"/>
  <path d="M212,76 Q244,56 272,74" fill="none" stroke="#e0d0a0" stroke-width="1.3" opacity="0.8"/>
  <path d="M212,80 Q246,62 274,80" fill="none" stroke="#d8c694" stroke-width="1.2" opacity="0.75"/>
  <path d="M212,84 Q248,68 276,86" fill="none" stroke="#e0d0a0" stroke-width="1.2" opacity="0.7"/>
  <path d="M212,88 Q248,74 278,92" fill="none" stroke="#d8c694" stroke-width="1.1" opacity="0.65"/>
  <path d="M212,92 Q250,80 280,98" fill="none" stroke="#e0d0a0" stroke-width="1.1" opacity="0.6"/>
  <path d="M212,96 Q250,86 280,104" fill="none" stroke="#d8c694" stroke-width="1" opacity="0.55"/>
  <path d="M212,100 Q250,92 280,110" fill="none" stroke="#e0d0a0" stroke-width="1" opacity="0.5"/>
  <path d="M212,104 Q248,98 278,116" fill="none" stroke="#d8c694" stroke-width="0.9" opacity="0.45"/>
  <path d="M212,108 Q246,104 276,122" fill="none" stroke="#e0d0a0" stroke-width="0.9" opacity="0.4"/>
  <path d="M212,112 Q244,110 274,128" fill="none" stroke="#d8c694" stroke-width="0.9" opacity="0.36"/>
  <path d="M212,116 Q242,116 272,134" fill="none" stroke="#e0d0a0" stroke-width="0.8" opacity="0.32"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="6s" repeatCount="indefinite"/>
</g>
<!-- SPREAD B: this week. New paper, no stains, same handwriting exactly. -->
<path d="M282,186 Q302,183 322,182 L322,68 Q302,64 282,68 Z" fill="url(#wrRetNewPg3)" opacity="0.9"/>
<path d="M322,182 Q392,178 452,192 L452,72 Q392,58 322,68 Z" fill="url(#wrRetNewPg3)"/>
<path d="M322,68 L322,182" stroke="#8a7a4c" stroke-width="2.6" opacity="0.5"/>
<!-- the SAME heading stroke, the SAME margin rhythm, the SAME rule -->
<path d="M336,80 L402,78" stroke="#3a2e12" stroke-width="1.5" opacity="0.7"/>
<path d="M342,104 Q362,88 378,102 Q392,114 410,100" fill="none" stroke="#3a2e12" stroke-width="1.7" stroke-linecap="round"/>
<circle cx="344" cy="103" r="1.2" fill="#3a2e12"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M330,90 L338,90 M330,95 L339,95 M330,100 L336,100 M330,105 L339,105 M330,110 L337,110 M330,115 L339,115"/>
  <path d="M342,124 L430,121 M342,129 L438,126 M342,134 L402,132 M342,139 L428,136 M342,144 L416,142"/>
  <path d="M292,88 L316,87 M292,94 L316,93 M292,100 L310,99 M292,106 L316,105"/>
</g>
<path d="M342,116 L430,116" stroke="#3a2e12" stroke-width="0.6" opacity="0.5"/>
<path d="M342,113 L342,119 M364,114 L364,118 M386,113 L386,119 M408,114 L408,118 M430,113 L430,119" stroke="#3a2e12" stroke-width="0.55" opacity="0.5"/>
<path d="M398,164 L438,164" stroke="#3a2e12" stroke-width="0.9" opacity="0.55"/>
<path d="M394,168 L442,168" stroke="#3a2e12" stroke-width="0.5" opacity="0.4"/>
<!-- the new spread is the one the lamp is on -->
<path d="M322,182 Q392,178 452,192 L452,72 Q392,58 322,68 Z" fill="#ffeaa7" opacity="0.08"><animate attributeName="opacity" values="0.05;0.12;0.05" dur="4s" repeatCount="indefinite"/></path>
</g>
` + arms;
})() + `
<!-- Motes -->
<circle cx="240" cy="40" r="1" fill="#ffeaa7" opacity="0.28"><animate attributeName="cy" values="40;24;40" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.12;0.32;0.12" dur="4.5s" repeatCount="indefinite"/></circle>
<circle cx="466" cy="100" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="100;82;100" dur="12s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="22" cy="120" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="120;102;120" dur="13s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="6.5s" repeatCount="indefinite" begin="3.5s"/></circle>
</svg>`;

// Return scene 4: Two-shot at the table. He is turned to the player, the book
// between them, and his eyes are on the player's hands, which is what both
// branches need: branch A he glances at empty hands, branch B he is turning
// the proper catcher over. The catcher is drawn on the table between them so
// the frame reads either way.
STORY_SCENES['wreck_return_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a4a55"/><stop offset="50%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetDeck4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20423f"/><stop offset="100%" stop-color="#0d2024"/>
  </linearGradient>
  <linearGradient id="wrRetBrass4" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit4" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetGlass4" cx="42%" cy="72%" r="82%">
    <stop offset="0%" stop-color="#3a5540" stop-opacity="0.95"/><stop offset="38%" stop-color="#1c3630" stop-opacity="0.95"/><stop offset="100%" stop-color="#0c2028" stop-opacity="0.98"/>
  </radialGradient>
  <radialGradient id="wrRetLampG4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="34%" stop-color="#F2C14E" stop-opacity="0.18"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
` + wDefs('R4') + `</defs>
<rect width="500" height="260" fill="url(#wrRetWater4)"/>
<polygon points="160,0 190,0 210,110 182,110" fill="#bfe6d8" opacity="0.055"><animate attributeName="opacity" values="0.03;0.085;0.03" dur="9s" repeatCount="indefinite"/></polygon>
<polygon points="330,0 356,0 334,116 312,116" fill="#bfe6d8" opacity="0.05"><animate attributeName="opacity" values="0.02;0.08;0.02" dur="11s" repeatCount="indefinite" begin="3s"/></polygon>
<!-- Bulkhead, shelf of finished volumes, rope loop -->
<rect x="0" y="0" width="500" height="140" fill="#0d2028" opacity="0.5"/>
<!-- the deck, so his boots have something to land on -->
<path d="M0,232 L500,226 L500,260 L0,260 Z" fill="#132c30"/>
<path d="M0,232 L500,226 L500,230 L0,236 Z" fill="#2c5450" opacity="0.28"/>
<rect x="330" y="60" width="112" height="5" fill="#1d3b3a"/>
<rect x="336" y="34" width="9" height="26" fill="#3d2a12"/><rect x="346" y="38" width="8" height="22" fill="#4a3418"/>
<rect x="355" y="32" width="10" height="28" fill="#33240f"/><rect x="366" y="37" width="7" height="23" fill="#4a3418"/>
<rect x="374" y="35" width="9" height="25" fill="#3d2a12"/><rect x="384" y="39" width="8" height="21" fill="#2b1f0d"/>
<rect x="393" y="33" width="10" height="27" fill="#4a3418"/><rect x="404" y="38" width="7" height="22" fill="#33240f"/>
<rect x="412" y="36" width="9" height="24" fill="#3d2a12"/><rect x="422" y="40" width="8" height="20" fill="#2b1f0d"/>
<path d="M60,26 Q40,54 58,74 Q74,90 56,106" fill="none" stroke="#2a3a2c" stroke-width="2.2" opacity="0.45"><animate attributeName="d" values="M60,26 Q40,54 58,74 Q74,90 56,106;M60,26 Q46,54 52,74 Q68,90 60,106;M60,26 Q40,54 58,74 Q74,90 56,106" dur="10s" repeatCount="indefinite"/></path>
<!-- Deck and rail -->
<path d="M0,140 L500,132 L500,178 L0,186 Z" fill="#0d2028" opacity="0.55"/>
<path d="M0,186 L500,178 L500,260 L0,260 Z" fill="url(#wrRetDeck4)"/>
<path d="M0,186 L500,178 L500,186 L0,194 Z" fill="#2c5450" opacity="0.32"/>
<path d="M0,152 L500,144" fill="none" stroke="#2c5450" stroke-width="1.8" opacity="0.65"/>
<circle cx="88" cy="152" r="26" fill="url(#wrRetLampG4)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="452" cy="146" r="24" fill="url(#wrRetLampG4)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.62;0.42;0.56;0.34" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></circle>
<rect x="85" y="149" width="6.4" height="7.4" rx="1.7" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.85;0.96;0.78" dur="3.2s" repeatCount="indefinite"/></rect>
<rect x="449" y="143" width="6" height="7" rx="1.6" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.82;0.94;0.74" dur="2.8s" repeatCount="indefinite" begin="1.4s"/></rect>
<!-- FREDWARD, left, turned three-quarters to the player. Whole figure from
     the shared model, standing on the deck BEHIND the table: he was previously
     cut off at the table edge with no legs at all. -->
` + (function () {
  var H = 21, DECK = 246, fy = DECK - fredFootDrop(H), fx = 150;
  // near hand rests on the table edge; far arm hangs where we can see it
  var tX = 214 - fx, tY = 212 - fy;
  var arms = '<path d="M' + wn(H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(tX * 0.6) + ',' + wn(H * 2.6)
      + ' ' + wn(tX - H * 0.4) + ',' + wn(tY - H * 0.15)
      + '" fill="none" stroke="url(#wSuitR4)" stroke-width="' + wn(H * 0.52) + '" stroke-linecap="round"/>'
    + '<g transform="translate(' + wn(tX) + ',' + wn(tY) + ') rotate(10)">' + wHand('R4', H, 1) + '</g>'
    + '<path d="M' + wn(-H * 1.5) + ',' + wn(H * 2.05) + ' Q' + wn(-H * 2.3) + ',' + wn(H * 3.2)
      + ' ' + wn(-H * 2.05) + ',' + wn(H * 4.3)
      + '" fill="none" stroke="url(#wSuitR4)" stroke-width="' + wn(H * 0.52) + '" stroke-linecap="round"/>'
    + '<g transform="translate(' + wn(-H * 2.05) + ',' + wn(H * 4.65) + ')">' + wHand('R4', H, -1) + '</g>';
  return fred({ s: 'R4', h: H, x: fx, y: fy, pose: 'standing', expr: 'open', dur: '4s', arms: arms, hose: 'left', tilt: 6 });
})() + `
<!-- THE TABLE between them, seen slightly from the side -->
<path d="M108,214 L396,208 L410,226 L96,232 Z" fill="#1d3b3a"/>
<path d="M108,214 L396,208 L397,212 L107,218 Z" fill="#2c5450" opacity="0.55"/>
<rect x="132" y="228" width="12" height="32" fill="#173537"/>
<rect x="368" y="224" width="12" height="32" fill="#173537"/>
<!-- The book, open, pushed a little to one side -->
<path d="M150,212 L318,207 L316,190 L152,196 Z" fill="#8a7a4c"/>
<path d="M152,196 L316,190 L314,186 L154,192 Z" fill="#a5945f"/>
<path d="M156,198 Q194,190 232,192 L232,158 Q194,152 156,162 Z" fill="#f0e5bc"/>
<path d="M232,192 Q272,190 310,196 L310,162 Q272,152 232,158 Z" fill="#e6d9a8"/>
<path d="M232,158 L232,192" stroke="#8a7a4c" stroke-width="2.4" opacity="0.5"/>
<g stroke="#3a2e12" stroke-width="0.55" opacity="0.42">
  <path d="M164,172 L222,170 M164,177 L226,174 M164,182 L206,180 M244,172 L302,169 M244,177 L296,174"/>
</g>
<path d="M178,166 Q192,158 206,166" fill="none" stroke="#3a2e12" stroke-width="1.4" stroke-linecap="round"/>
<!-- THE CATCHER on the table between them: a proper one, and next to it his -->
<g transform="translate(276,204)">
  <!-- the proper catcher: neat, machined, a clean glass dome and a good clasp -->
  <ellipse cx="0" cy="0" rx="20" ry="5" fill="#5c4409"/>
  <path d="M-18,-1 Q-18,-18 0,-20 Q18,-18 18,-1 Z" fill="#7fc4b8" opacity="0.22"/>
  <path d="M-18,-1 Q-18,-18 0,-20 Q18,-18 18,-1" fill="none" stroke="#c9962e" stroke-width="1.6"/>
  <path d="M-11,-6 Q-9,-14 -2,-17" fill="none" stroke="#ffeaa7" stroke-width="1.6" opacity="0.5"><animate attributeName="opacity" values="0.28;0.66;0.28" dur="3.6s" repeatCount="indefinite"/></path>
  <rect x="-4" y="-25" width="8" height="6" rx="2" fill="url(#wrRetBrass4)"/>
  <circle cx="0" cy="-27" r="2.4" fill="none" stroke="#8b6914" stroke-width="1.2"/>
  <path d="M-20,0 L20,0" stroke="#c9962e" stroke-width="1" opacity="0.6"/>
</g>
<g transform="translate(196,208)">
  <!-- and his: wire, beads, knotted line, the dented bell. Sitting beside it. -->
  <path d="M-20,2 Q-16,-8 -5,-11 Q6,-14 15,-8 Q22,-3 20,4" fill="none" stroke="#8b6914" stroke-width="1.7" stroke-linecap="round"/>
  <path d="M-14,5 Q-5,-3 4,-6 Q13,-9 18,-4" fill="none" stroke="#7a5a18" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="-13" cy="-3" r="2.2" fill="#ffeaa7" opacity="0.6"><animate attributeName="opacity" values="0.34;0.75;0.34" dur="3.4s" repeatCount="indefinite"/></circle>
  <circle cx="-1" cy="-10" r="2.6" fill="#ffeaa7" opacity="0.55"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite" begin="1.1s"/></circle>
  <circle cx="10" cy="-8" r="1.8" fill="#ffeaa7" opacity="0.5"><animate attributeName="opacity" values="0.26;0.66;0.26" dur="3s" repeatCount="indefinite" begin="2.2s"/></circle>
  <path d="M-19,2 Q-9,-1 0,1 Q10,4 18,2" fill="none" stroke="#2a3a2c" stroke-width="1.2"/>
  <circle cx="0" cy="1" r="1.4" fill="#2a3a2c"/>
  <g transform="translate(20,8)">
    <path d="M-4.4,2.6 Q-4.4,-3.4 0,-4.4 Q4.4,-3.4 4.4,2.6 Z" fill="url(#wrRetBrass4)"/>
    <path d="M-4.4,2.6 Q0,4.8 4.4,2.6 L4.4,4 Q0,6 -4.4,4 Z" fill="#5c4409"/>
    <path d="M1.8,-2.6 L4,-0.4" stroke="#5c4409" stroke-width="0.9"/>
  </g>
</g>
<!-- THE PLAYER, right, across the table, hands resting on its edge. Whole
     figure from the shared model, standing on the deck: they were previously
     a legless shape that read as a shadow rather than a second person. -->
` + (function () {
  var P = 13.5, DECK = 246;
  var py = DECK - (P * 1.5 + P * 2.5 + P * 3.2), px = 372;
  // face left mirrors the group, so positive x here points back at the table
  var tX = px - 322, tY = 210 - py;
  var arms = '<path d="M' + wn(P * 1.17) + ',' + wn(P * 1.9) + ' Q' + wn(tX * 0.62) + ',' + wn(P * 2.3)
      + ' ' + wn(tX - P * 0.4) + ',' + wn(tY)
      + '" fill="none" stroke="#132c30" stroke-width="' + wn(P * 0.46) + '" stroke-linecap="round"/>'
    + '<circle cx="' + wn(tX) + '" cy="' + wn(tY) + '" r="' + wn(P * 0.34) + '" fill="#1a3a3e"/>'
    + '<path d="M' + wn(-P * 1.17) + ',' + wn(P * 1.9) + ' Q' + wn(-P * 1.95) + ',' + wn(P * 3)
      + ' ' + wn(-P * 1.7) + ',' + wn(P * 4)
      + '" fill="none" stroke="#132c30" stroke-width="' + wn(P * 0.46) + '" stroke-linecap="round"/>'
    + '<circle cx="' + wn(-P * 1.7) + '" cy="' + wn(P * 4.3) + '" r="' + wn(P * 0.34) + '" fill="#1a3a3e"/>';
  return player({ h: P, x: px, y: py, face: 'left', arms: arms });
})() + `
<!-- Bubbles from both, at their own rates -->
<circle cx="194" cy="86" r="1.7" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="86;-10" dur="5.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.42;0" dur="5.4s" repeatCount="indefinite"/></circle>
<circle cx="188" cy="80" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="80;-10" dur="7s" repeatCount="indefinite" begin="2.6s"/><animate attributeName="opacity" values="0;0.36;0" dur="7s" repeatCount="indefinite" begin="2.6s"/></circle>
<circle cx="364" cy="104" r="1.5" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="104;-10" dur="6.4s" repeatCount="indefinite" begin="1.2s"/><animate attributeName="opacity" values="0;0.38;0" dur="6.4s" repeatCount="indefinite" begin="1.2s"/></circle>
<circle cx="370" cy="110" r="1" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="110;-10" dur="8s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0;0.32;0" dur="8s" repeatCount="indefinite" begin="4s"/></circle>
<!-- The crab, foreground right, on the mat, present as ever -->
<g transform="translate(452,240)">
  <path d="M-26,0 L26,0 L32,12 L-32,12 Z" fill="#5a4a22"/>
  <path d="M-26,0 L26,0 L27,3.4 L-27,3.4 Z" fill="#75612e" opacity="0.75"/>
</g>
<g transform="translate(452,236)">
  <ellipse cx="0" cy="0" rx="6.6" ry="4.4" fill="#8f3b2e"/>
  <ellipse cx="0" cy="-1.3" rx="5.6" ry="2.8" fill="#b04a38" opacity="0.85"/>
  <circle cx="-2.3" cy="-3.2" r="1" fill="#0a1a1e"/><circle cx="2.3" cy="-3.2" r="1" fill="#0a1a1e"/>
  <path d="M-5.6,-1 L-10.4,-3.8 L-12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"><animate attributeName="d" values="M-5.6,-1 L-10.4,-3.8 L-12.4,-1;M-5.6,-1 L-10.4,-4.8 L-12.4,-2;M-5.6,-1 L-10.4,-3.8 L-12.4,-1" dur="2.6s" repeatCount="indefinite"/></path>
  <path d="M5.6,-1 L10.4,-3.8 L12.4,-1" fill="none" stroke="#8f3b2e" stroke-width="1.5" stroke-linecap="round"/>
</g>
<!-- Motes -->
<circle cx="266" cy="80" r="1" fill="#ffeaa7" opacity="0.26"><animate attributeName="cy" values="80;62;80" dur="10s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/></circle>
<circle cx="60" cy="110" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="110;92;110" dur="12.5s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="6s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="470" cy="70" r="0.9" fill="#cfeee0" opacity="0.18"><animate attributeName="cy" values="70;52;70" dur="14s" repeatCount="indefinite" begin="4s"/><animate attributeName="opacity" values="0.06;0.22;0.06" dur="7s" repeatCount="indefinite" begin="4s"/></circle>
</svg>`;

// Return scene 5: Fredward at the table with one hand holding the page down,
// seen from the rope, going away. The rope is in the near foreground, he is
// small and busy at the far end of the lit deck, and the whole frame is
// already receding.
STORY_SCENES['wreck_return_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="wrRetWater5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2a6a70"/><stop offset="28%" stop-color="#1a4a55"/><stop offset="66%" stop-color="#133440"/><stop offset="100%" stop-color="#07141a"/>
  </linearGradient>
  <linearGradient id="wrRetShaft5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe6d8" stop-opacity="0.22"/><stop offset="100%" stop-color="#133440" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="wrRetHull5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1d3b3a"/><stop offset="100%" stop-color="#0a1a1e"/>
  </linearGradient>
  <linearGradient id="wrRetSand5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2f5158"/><stop offset="100%" stop-color="#16333a"/>
  </linearGradient>
  <linearGradient id="wrRetBrass5" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c9962e"/><stop offset="50%" stop-color="#8b6914"/><stop offset="100%" stop-color="#5c4409"/>
  </linearGradient>
  <linearGradient id="wrRetSuit5" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#2e4a3c"/><stop offset="52%" stop-color="#40614e"/><stop offset="100%" stop-color="#22382e"/>
  </linearGradient>
  <radialGradient id="wrRetLampG5" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.52"/><stop offset="36%" stop-color="#F2C14E" stop-opacity="0.17"/><stop offset="100%" stop-color="#F2C14E" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#wrRetWater5)"/>
<!-- Surface light above, because you are already on your way up to it -->
<polygon points="150,0 196,0 214,150 178,150" fill="url(#wrRetShaft5)" opacity="0.6"><animate attributeName="opacity" values="0.34;0.7;0.34" dur="8s" repeatCount="indefinite"/></polygon>
<polygon points="320,0 362,0 336,160 302,160" fill="url(#wrRetShaft5)" opacity="0.5"><animate attributeName="opacity" values="0.28;0.62;0.28" dur="10s" repeatCount="indefinite" begin="2.5s"/></polygon>
<polygon points="40,0 72,0 96,140 66,140" fill="url(#wrRetShaft5)" opacity="0.42"><animate attributeName="opacity" values="0.24;0.55;0.24" dur="9s" repeatCount="indefinite" begin="1s"/></polygon>
<!-- The wreck, below and behind, seen from above and off to one side -->
<path d="M0,236 Q90,226 190,230 Q300,234 400,226 Q460,222 500,230 L500,260 L0,260 Z" fill="#07141a"/>
<path d="M96,232 Q104,208 140,202 L354,190 Q394,190 402,204 L404,230 Q250,240 140,238 Q106,236 96,232 Z" fill="url(#wrRetHull5)"/>
<path d="M96,232 Q104,208 140,202 L354,190 Q394,190 402,204 L400,210 Q250,200 138,214 Q106,222 96,232 Z" fill="#25494a" opacity="0.5"/>
<path d="M108,222 Q250,198 400,204" fill="none" stroke="#0a1a1e" stroke-width="1" opacity="0.5"/>
<path d="M172,200 L168,236" stroke="#0a1a1e" stroke-width="1.6" opacity="0.35"/>
<path d="M312,192 L314,236" stroke="#0a1a1e" stroke-width="1.6" opacity="0.3"/>
<!-- sand banked along her -->
<path d="M60,240 Q96,226 132,220 Q104,216 74,224 Q46,232 34,240 Z" fill="url(#wrRetSand5)" opacity="0.7"/>
<path d="M396,228 Q432,216 468,214 Q492,213 500,222 L500,236 Q446,232 396,236 Z" fill="url(#wrRetSand5)" opacity="0.7"/>
<!-- her toppled mast -->
<path d="M226,196 L200,150" stroke="#173537" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
<path d="M202,156 Q188,176 198,190" fill="none" stroke="#2a3a2c" stroke-width="1.4" opacity="0.45"><animate attributeName="d" values="M202,156 Q188,176 198,190;M202,156 Q192,176 194,190;M202,156 Q188,176 198,190" dur="10s" repeatCount="indefinite"/></path>
<!-- rail and the amber lamps, still lit, small now -->
<path d="M138,200 L354,188" fill="none" stroke="#2c5450" stroke-width="1.4" opacity="0.7"/>
<circle cx="164" cy="202" r="20" fill="url(#wrRetLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.38;0.66;0.46;0.6;0.38" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="230" cy="198" r="21" fill="url(#wrRetLampG5)" opacity="0.55"><animate attributeName="opacity" values="0.4;0.68;0.46;0.62;0.4" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></circle>
<circle cx="296" cy="194" r="20" fill="url(#wrRetLampG5)" opacity="0.52"><animate attributeName="opacity" values="0.36;0.64;0.44;0.58;0.36" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></circle>
<circle cx="352" cy="190" r="18" fill="url(#wrRetLampG5)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.42;0.55;0.34" dur="3s" repeatCount="indefinite" begin="2.6s"/></circle>
<g fill="#F2C14E">
  <rect x="161.4" y="199" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.76;1;0.84;0.96;0.76" dur="3.2s" repeatCount="indefinite"/></rect>
  <rect x="227.4" y="195" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.8;1;0.86;0.97;0.8" dur="2.8s" repeatCount="indefinite" begin="0.9s"/></rect>
  <rect x="293.4" y="191" width="5.2" height="6.2" rx="1.4"><animate attributeName="opacity" values="0.74;1;0.82;0.95;0.74" dur="3.6s" repeatCount="indefinite" begin="1.8s"/></rect>
  <rect x="349.6" y="187" width="4.8" height="5.6" rx="1.3"><animate attributeName="opacity" values="0.72;1;0.8;0.93;0.72" dur="3s" repeatCount="indefinite" begin="2.6s"/></rect>
</g>
<!-- THE TABLE, small, near the middle of the lit deck, with the book on it -->
<path d="M226,222 L306,218 L312,228 L220,232 Z" fill="#1d3b3a"/>
<path d="M240,218 L296,216 L296,209 L240,212 Z" fill="#8a7a4c"/>
<path d="M243,211 L266,209 L266,199 L243,202 Z" fill="#e8dcae"/>
<path d="M266,209 L292,210 L292,200 L266,199 Z" fill="#ddd0a0"/>
<g stroke="#3a2e12" stroke-width="0.4" opacity="0.4">
  <path d="M247,204 L262,203 M247,207 L263,206 M271,204 L288,203"/>
</g>
<!-- FREDWARD, small, at the table, one hand flat on the page against the
     current, already back at work and humming something with no tune in it -->
<g transform="translate(268,182)">
  <animateTransform attributeName="transform" type="translate" values="268,182;268,183.6;268,182" dur="7s" repeatCount="indefinite"/>
  <path d="M-11,15 Q0,11 11,15 L10,36 Q0,39 -10,36 Z" fill="url(#wrRetSuit5)"/>
  <rect x="-5" y="16" width="10" height="5" rx="1.2" fill="url(#wrRetBrass5)"/>
  <ellipse cx="0" cy="13" rx="6.4" ry="2.4" fill="url(#wrRetBrass5)"/>
  <!-- helmet, tipped down to the page. Too small for a face, and correctly so. -->
  <g transform="rotate(22,0,5)">
    <circle cx="0" cy="5" r="8.6" fill="url(#wrRetBrass5)"/>
    <circle cx="0" cy="5" r="8.6" fill="none" stroke="#5c4409" stroke-width="0.9"/>
    <circle cx="-7" cy="6" r="2" fill="#5c4409"/>
    <circle cx="7" cy="6" r="2" fill="#5c4409"/>
    <circle cx="0" cy="5.6" r="5.4" fill="#1c3630"/>
    <circle cx="0" cy="5.6" r="5.4" fill="none" stroke="#c9962e" stroke-width="1.3"/>
    <path d="M-3.4,2.4 Q-1.4,-0.4 1.6,0.4" fill="none" stroke="#dff6ea" stroke-width="1.2" stroke-linecap="round" opacity="0.4"><animate attributeName="opacity" values="0.22;0.5;0.22" dur="4s" repeatCount="indefinite"/></path>
  </g>
  <!-- the hand holding the page down. It does not move. -->
  <path d="M10,20 Q22,26 26,34" fill="none" stroke="url(#wrRetSuit5)" stroke-width="4.6" stroke-linecap="round"/>
  <path d="M22,32 Q30,31 34,34 Q35,37 31,38 Q25,39 22,36 Z" fill="#40614e"/>
  <!-- drawing arm, moving in a small arc -->
  <path d="M-10,20 Q-22,28 -24,36" fill="none" stroke="url(#wrRetSuit5)" stroke-width="4.6" stroke-linecap="round"><animate attributeName="d" values="M-10,20 Q-22,28 -24,36;M-10,20 Q-21,30 -21,37;M-10,20 Q-22,28 -24,36" dur="4.8s" repeatCount="indefinite"/></path>
  <circle cx="-25" cy="37" r="2.8" fill="#40614e"><animate attributeName="cx" values="-25;-22;-25" dur="4.8s" repeatCount="indefinite"/></circle>
  <!-- air hose going off into the hull -->
  <path d="M6,-2 Q26,-6 36,8 Q46,24 40,42" fill="none" stroke="#2a3a2c" stroke-width="1.5" stroke-linecap="round" opacity="0.55"><animate attributeName="d" values="M6,-2 Q26,-6 36,8 Q46,24 40,42;M6,-2 Q28,-9 38,7 Q48,23 40,42;M6,-2 Q26,-6 36,8 Q46,24 40,42" dur="9s" repeatCount="indefinite"/></path>
</g>
<!-- his bubbles, still going, small at this distance -->
<circle cx="276" cy="172" r="1.2" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="172;-10" dur="7s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.34;0" dur="7s" repeatCount="indefinite"/></circle>
<circle cx="271" cy="168" r="0.9" fill="#bfe6d8" opacity="0"><animate attributeName="cy" values="168;-10" dur="8.6s" repeatCount="indefinite" begin="3s"/><animate attributeName="opacity" values="0;0.3;0" dur="8.6s" repeatCount="indefinite" begin="3s"/></circle>
<!-- The crab, on the mat, seeing you off by not looking up -->
<g transform="translate(378,224)">
  <path d="M-13,0 L13,0 L16,6 L-16,6 Z" fill="#5a4a22"/>
  <path d="M-13,0 L13,0 L13.6,1.8 L-13.6,1.8 Z" fill="#75612e" opacity="0.7"/>
</g>
<g transform="translate(378,222)">
  <ellipse cx="0" cy="0" rx="3.6" ry="2.4" fill="#8f3b2e"/>
  <path d="M-3,-0.6 L-5.6,-2 L-6.8,-0.6" fill="none" stroke="#8f3b2e" stroke-width="1" stroke-linecap="round"/>
  <path d="M3,-0.6 L5.6,-2 L6.8,-0.6" fill="none" stroke="#8f3b2e" stroke-width="1" stroke-linecap="round"/>
</g>
<!-- THE ROPE, near foreground, running up out of frame. You are on it. -->
<path d="M92,260 Q78,196 96,132 Q112,76 88,0" fill="none" stroke="#2a3a2c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M92,260 Q78,196 96,132 Q112,76 88,0;M92,260 Q86,196 88,132 Q104,76 96,0;M92,260 Q78,196 96,132 Q112,76 88,0" dur="9s" repeatCount="indefinite"/></path>
<path d="M92,260 Q78,196 96,132 Q112,76 88,0" fill="none" stroke="#5c6b4a" stroke-width="1.6" opacity="0.45"><animate attributeName="d" values="M92,260 Q78,196 96,132 Q112,76 88,0;M92,260 Q86,196 88,132 Q104,76 96,0;M92,260 Q78,196 96,132 Q112,76 88,0" dur="9s" repeatCount="indefinite"/></path>
<!-- the twist of the rope's lay, close enough to see -->
<g stroke="#1e2a20" stroke-width="1" opacity="0.6">
  <path d="M89,232 L95,228 M91,206 L97,202 M93,180 L98,176 M95,154 L100,150 M97,128 L103,124 M100,102 L106,98 M101,76 L107,72 M99,50 L105,46 M95,24 L101,20"/>
</g>
<!-- your gloved hand on the rope, closest thing to camera -->
<g transform="translate(94,196)">
  <animateTransform attributeName="transform" type="translate" values="0,4;0,-8;0,4" additive="sum" dur="9s" repeatCount="indefinite"/>
  <path d="M-16,10 Q-20,-6 -6,-14 Q10,-20 20,-10 Q26,0 18,10 Q4,20 -16,10 Z" fill="#1a3a3e"/>
  <path d="M-14,-4 Q-22,-8 -26,-2" fill="none" stroke="#1a3a3e" stroke-width="7" stroke-linecap="round"/>
  <path d="M-15,4 Q-25,4 -29,10" fill="none" stroke="#16323a" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M-10,12 Q-18,18 -20,26" fill="none" stroke="#16323a" stroke-width="6" stroke-linecap="round"/>
  <path d="M-4,-14 Q-12,-20 -20,-18" fill="none" stroke="#16323a" stroke-width="6.4" stroke-linecap="round"/>
  <path d="M-6,-2 Q4,-8 16,-6" fill="none" stroke="#2a6a75" stroke-width="1" opacity="0.5"/>
  <path d="M14,-16 Q24,-20 32,-14" fill="none" stroke="#132c30" stroke-width="14" stroke-linecap="round"/>
</g>
<!-- Bubbles going up past you the way you are going -->
<circle cx="112" cy="180" r="2.4" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="180;-12" dur="4.8s" repeatCount="indefinite"/><animate attributeName="r" values="1.8;3.6" dur="4.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.5;0" dur="4.8s" repeatCount="indefinite"/></circle>
<circle cx="104" cy="196" r="1.7" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="196;-12" dur="6.2s" repeatCount="indefinite" begin="1.6s"/><animate attributeName="r" values="1.3;2.8" dur="6.2s" repeatCount="indefinite" begin="1.6s"/><animate attributeName="opacity" values="0;0.44;0" dur="6.2s" repeatCount="indefinite" begin="1.6s"/></circle>
<circle cx="118" cy="206" r="1.3" fill="#dff6ea" opacity="0"><animate attributeName="cy" values="206;-12" dur="7.4s" repeatCount="indefinite" begin="3.4s"/><animate attributeName="opacity" values="0;0.38;0" dur="7.4s" repeatCount="indefinite" begin="3.4s"/></circle>
<!-- Motes -->
<circle cx="330" cy="110" r="1" fill="#cfeee0" opacity="0.22"><animate attributeName="cy" values="110;90;110" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.08;0.28;0.08" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="446" cy="70" r="1" fill="#cfeee0" opacity="0.2"><animate attributeName="cy" values="70;50;70" dur="14s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.07;0.24;0.07" dur="7s" repeatCount="indefinite" begin="2s"/></circle>
<circle cx="220" cy="60" r="0.9" fill="#dff6ea" opacity="0.24"><animate attributeName="cy" values="60;40;60" dur="11s" repeatCount="indefinite" begin="3.5s"/><animate attributeName="opacity" values="0.08;0.3;0.08" dur="5.5s" repeatCount="indefinite" begin="3.5s"/></circle>
<circle cx="30" cy="150" r="0.9" fill="#cfeee0" opacity="0.16"><animate attributeName="cy" values="150;130;150" dur="15s" repeatCount="indefinite" begin="5s"/><animate attributeName="opacity" values="0.05;0.2;0.05" dur="7.5s" repeatCount="indefinite" begin="5s"/></circle>
</svg>`;
