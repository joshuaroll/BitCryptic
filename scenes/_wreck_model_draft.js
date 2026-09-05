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
//   full standing height 13 h     6.5 helmet diameters
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
  var w = h * 0.58, o = '';
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
    ' Q' + wn(-w * 1.3 * dir) + ',' + wn(0) + ' ' + wn(-w * 1.45 * dir) + ',' + wn(w * 0.5) +
    ' Q' + wn(-w * 1.25 * dir) + ',' + wn(w * 0.85) + ' ' + wn(-w * 0.7 * dir) + ',' + wn(w * 0.55) + ' Z" fill="' + WGLOVE + '"/>';
  o += '<path d="M' + wn(-w * 0.5 * dir) + ',' + wn(-w * 0.3) + ' Q' + wn(w * 0.15 * dir) + ',' + wn(-w * 0.5) +
    ' ' + wn(w * 0.7 * dir) + ',' + wn(-w * 0.25) +
    '" fill="none" stroke="' + WGLOVE_L + '" stroke-width="' + wn(w * 0.1) + '" opacity="0.5"/>';
  return o;
}

// A HEAVY BOOT, origin at the sole, weighted and brass capped.
function wBoot(s, h, dir) {
  var bw = h * 1.05, bh = h * 0.5;
  return '<path d="M' + wn(-bw * 0.36) + ',' + wn(-bh) + ' L' + wn(bw * 0.34) + ',' + wn(-bh) +
    ' Q' + wn(bw * 0.42) + ',' + wn(-bh * 0.35) + ' ' + wn((bw * 0.62) * dir) + ',' + wn(-bh * 0.06) +
    ' L' + wn(-bw * 0.44) + ',0 Q' + wn(-bw * 0.5) + ',' + wn(-bh * 0.5) + ' ' + wn(-bw * 0.36) + ',' + wn(-bh) + ' Z" fill="' + WBRASS_C + '"/>' +
    '<path d="M' + wn(-bw * 0.36) + ',' + wn(-bh) + ' L' + wn(bw * 0.34) + ',' + wn(-bh) +
    ' L' + wn(bw * 0.35) + ',' + wn(-bh * 0.6) + ' L' + wn(-bw * 0.4) + ',' + wn(-bh * 0.6) + ' Z" fill="' + WBRASS_B + '" opacity="0.7"/>';
}
