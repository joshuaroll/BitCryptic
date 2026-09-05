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
  if (pose !== 'inverted') {
    var legSpread = hipW * 0.52;
    var lLeg = -legSpread + lean * 0.4, rLeg = legSpread + lean * 0.4;
    // a leaning man has one leg braced out and one taking the weight
    var lFoot = pose === 'leaning' ? lLeg - h * 0.55 : lLeg;
    var rFoot = pose === 'leaning' ? rLeg + h * 0.75 : rLeg;
    o += '<path d="M' + wn(lLeg) + ',' + wn(hipY - h * 0.2) +
      ' Q' + wn(lLeg - h * 0.12) + ',' + wn(kneeY) + ' ' + wn(lFoot) + ',' + wn(footY - h * 0.42) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.28) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(rLeg) + ',' + wn(hipY - h * 0.2) +
      ' Q' + wn(rLeg + h * 0.12) + ',' + wn(kneeY) + ' ' + wn(rFoot) + ',' + wn(footY - h * 0.42) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.28) + '" stroke-linecap="round"/>';
    // knee creases, so the leg reads as a limb and not a pipe
    o += '<path d="M' + wn(lLeg - limb * 0.5) + ',' + wn(kneeY) + ' Q' + wn(lLeg) + ',' + wn(kneeY + h * 0.16) + ' ' + wn(lLeg + limb * 0.5) + ',' + wn(kneeY) +
      ' M' + wn(rLeg - limb * 0.5) + ',' + wn(kneeY) + ' Q' + wn(rLeg) + ',' + wn(kneeY + h * 0.16) + ' ' + wn(rLeg + limb * 0.5) + ',' + wn(kneeY) +
      '" fill="none" stroke="' + WSUIT_SEAM + '" stroke-width="' + wn(h * 0.055) + '" opacity="0.5"/>';
    o += '<g transform="translate(' + wn(lFoot) + ',' + wn(footY) + ')">' + wBoot(s, h, -1) + '</g>';
    o += '<g transform="translate(' + wn(rFoot) + ',' + wn(footY) + ')">' + wBoot(s, h, 1) + '</g>';
  } else {
    // upside down: the legs go UP out of frame toward the hatch he came from
    o += '<path d="M' + wn(-hipW * 0.52) + ',' + wn(-h * 1.55) + ' Q' + wn(-hipW * 0.62) + ',' + wn(-h * 3.4) + ' ' + wn(-hipW * 0.5) + ',' + wn(-h * 5.1) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.28) + '" stroke-linecap="round"/>';
    o += '<path d="M' + wn(hipW * 0.52) + ',' + wn(-h * 1.55) + ' Q' + wn(hipW * 0.66) + ',' + wn(-h * 3.4) + ' ' + wn(hipW * 0.54) + ',' + wn(-h * 5.1) +
      '" fill="none" stroke="url(#wSuit' + s + ')" stroke-width="' + wn(limb * 1.28) + '" stroke-linecap="round"/>';
    o += '<g transform="translate(' + wn(-hipW * 0.5) + ',' + wn(-h * 5.3) + ') scale(1,-1)">' + wBoot(s, h, -1) + '</g>';
    o += '<g transform="translate(' + wn(hipW * 0.54) + ',' + wn(-h * 5.3) + ') scale(1,-1)">' + wBoot(s, h, 1) + '</g>';
  }

  // ---- TORSO, a soft rectangle. Bulky suit, no waist. ---------------------
  if (pose === 'inverted') {
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
  if (opts.arms) {
    o += opts.arms;
  } else {
    var aY = shoulderY + h * 0.5;
    var reach = pose === 'inverted' ? -1 : 1;
    var aTop = pose === 'inverted' ? -h * 3.6 : aY;
    var handY = pose === 'inverted' ? aTop - h * 2.1 : aY + h * 2.15;
    var lhx = -halfW - h * 0.75, rhx = halfW + h * 0.75;
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
  return '<g transform="translate(' + opts.x + ',' + opts.y + ')' +
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
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.2) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(ls) + ',' + wn(hipY - p * 0.2) + ' Q' + wn(ls + p * 0.15) + ',' + wn(hipY + p * 1.6) + ' ' + wn(ls + p * 0.1) + ',' + wn(footY - p * 0.5) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.2) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(-ls - p * 0.1) + ',' + wn(footY - p * 0.5) + ' Q' + wn(-ls - p * 0.9) + ',' + wn(footY) + ' ' + wn(-ls - p * 1.5) + ',' + wn(footY + p * 0.2) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.05) + '" stroke-linecap="round"/>';
  o += '<path d="M' + wn(ls + p * 0.1) + ',' + wn(footY - p * 0.5) + ' Q' + wn(ls + p * 0.9) + ',' + wn(footY) + ' ' + wn(ls + p * 1.5) + ',' + wn(footY + p * 0.2) +
    '" fill="none" stroke="' + WPLAYER + '" stroke-width="' + wn(limb * 1.05) + '" stroke-linecap="round"/>';
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
  if (opts.arms) {
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
  return '<g transform="translate(' + opts.x + ',' + opts.y + ')' + (dir < 0 ? ' scale(-1,1)' : '') + '">' + o + '</g>';
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
