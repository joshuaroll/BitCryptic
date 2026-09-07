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
// THE SHARED PARTS
// ---------------------------------------------------------------------------
// Everything that recurs across these 33 scenes lives here and nowhere else.
// Before this block, the chair was drawn eight times as a back panel with two
// rear legs (no seat, no front legs), rotated as a whole group so one leg
// drove through the floor and the other hovered; the hand was drawn fourteen
// times as a black blob between 1.8 and 4.8 head-diameters wide; and the
// pencil ranged 46 to 130 units long across scenes whose own comments insisted
// it had not moved.
//
// Canon is a SILHOUETTE. He is never shown facing the player and he has no
// face, ever. That is a composition rule, not a shortcut: the hands below are
// dark shapes, but they are shaped like hands, with a wrist, a palm, four
// fingers and a thumb that opposes them.

function hidn(v) { return Math.round(v * 100) / 100; }

// CANON'S SCALE. One number the whole figure derives from, so a scene at a
// different camera distance changes this and nothing else. Head radius 14 is
// the mid-shot (hidden_1), which is the reference for every other scene.
var HID_HEAD = 14;
// HID_RIM IS OFF. It was a bright cyan stroke drawn INSIDE the silhouette,
// down the middle of a black shape rather than along its outer edge, and it
// read as a tear through the figure. Canon is a pure silhouette: a shape you
// never see into, lit only by the screens in front of him. A pure silhouette
// reads best as a pure shape, and the rim was added out of a worry that the
// form was unreadable, which it was not.
//
// Set to the skin value so every existing call site becomes a no-op rather
// than 79 separate edits, and so a future pass can reinstate it in ONE place
// if it is ever done correctly (on the outer edge, following the light).
var HID_SKIN = '#05070e', HID_SKIN_L = '#0b0f19', HID_RIM = '#05070e';
var HID_CHAIR = '#2e3849', HID_CHAIR_L = '#3d4a60', HID_CHAIR_D = '#28313f';

// ---------------------------------------------------------------------------
// EASING. Every organic loop in this file goes through here.
// ---------------------------------------------------------------------------
// All 599 animation tags in this file and in wreck.js shipped linear: nothing
// accelerated, nothing settled, and every loop turned its corners instantly.
//
// The one rule that bites: len(keySplines) must be exactly len(keyTimes) - 1.
// A miscount is not a degraded animation, it is a DEAD one -- the element just
// sits there. So the count is computed from the values list rather than typed.
//
// SMIL also requires all four control-point numbers in [0,1]. Bounce curves
// like "0.34 1.56 0.64 1" are spec-invalid and kill the animation outright.
var HID_EASE = '0.42 0 0.58 1';       // symmetric, rest at both ends
var HID_EASE_OUT = '0 0 0.58 1';      // arrives and settles
var HID_EASE_IN = '0.42 0 1 1';       // departs from rest

// Emit the spline attributes for a values list of n entries, evenly spaced.
// Pass a curve per segment, or one curve to use for all of them.
function hidEase(n, curve) {
  if (n < 2) return '';
  var kt = [], ks = [];
  for (var i = 0; i < n; i++) kt.push(hidn(i / (n - 1)));
  for (var j = 0; j < n - 1; j++) ks.push(curve || HID_EASE);
  return ' calcMode="spline" keyTimes="' + kt.join(';') + '" keySplines="' + ks.join(';') + '"';
}

// A whole eased <animate>. values is a semicolon list; the spline count is
// derived from it so it cannot be miscounted.
function hidAnim(attr, values, dur, opts) {
  opts = opts || {};
  var n = values.split(';').length;
  return '<animate attributeName="' + attr + '" values="' + values + '" dur="' + dur +
    '" repeatCount="indefinite"' + (opts.begin ? ' begin="' + opts.begin + '"' : '') +
    hidEase(n, opts.curve) + (opts.additive ? ' additive="sum"' : '') + '/>';
}

// ---------------------------------------------------------------------------
// THE TAPERED LIMB. Same primitive as scenes/wreck.js, same reasoning.
// ---------------------------------------------------------------------------
// SVG has no variable-width stroke and never will: the W3C proposal was last
// edited in 2014 and never advanced. A limb that tapers has to be a FILLED
// PATH WITH TWO EDGES, built as the Tiller-Hanson offset of a quadratic
// centreline: offset each edge of the control polygon by its own distance and
// intersect. Max width error over a limb-like curve is 0.5%, sub-pixel here.
//
// Every arm in this file that read as a sausage was a constant-width stroke,
// and no amount of redrawing fixes that, because a stroke cannot taper.
function hidLineX(a, b, c, d) {
  var r = { x: b.x - a.x, y: b.y - a.y }, s = { x: d.x - c.x, y: d.y - c.y };
  var den = r.x * s.y - r.y * s.x;
  if (Math.abs(den) < 1e-9) return null;
  var t = ((c.x - a.x) * s.y - (c.y - a.y) * s.x) / den;
  return { x: a.x + t * r.x, y: a.y + t * r.y };
}

function hidOffCtrl(p0, p1, p2, d0, d1, d2, side) {
  function off(a, b, da, db) {
    var dx = b.x - a.x, dy = b.y - a.y, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = side * (dy / L), ny = side * (-dx / L);
    return [{ x: a.x + nx * da, y: a.y + ny * da },
            { x: b.x + nx * db, y: b.y + ny * db }];
  }
  var A = off(p0, p1, d0, d1), B = off(p1, p2, d1, d2);
  return hidLineX(A[0], A[1], B[0], B[1]) ||
    { x: (A[1].x + B[0].x) / 2, y: (A[1].y + B[0].y) / 2 };
}

function hidLimb(p0, p1, p2, wS, wE) {
  var d0 = wS / 2, d2 = wE / 2, d1 = (d0 + d2) / 2;
  var L = hidOffCtrl(p0, p1, p2, d0, d1, d2, 1);
  var R = hidOffCtrl(p0, p1, p2, d0, d1, d2, -1);
  function nv(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, l = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: dy / l, y: -dx / l };
  }
  var n0 = nv(p0, p1), n2 = nv(p1, p2);
  var A = { x: p0.x + n0.x * d0, y: p0.y + n0.y * d0 };
  var B = { x: p2.x + n2.x * d2, y: p2.y + n2.y * d2 };
  var C = { x: p2.x - n2.x * d2, y: p2.y - n2.y * d2 };
  var D = { x: p0.x - n0.x * d0, y: p0.y - n0.y * d0 };
  return 'M' + hidn(A.x) + ',' + hidn(A.y) +
    ' Q' + hidn(L.x) + ',' + hidn(L.y) + ' ' + hidn(B.x) + ',' + hidn(B.y) +
    ' A' + hidn(d2) + ',' + hidn(d2) + ' 0 0 1 ' + hidn(C.x) + ',' + hidn(C.y) +
    ' Q' + hidn(R.x) + ',' + hidn(R.y) + ' ' + hidn(D.x) + ',' + hidn(D.y) +
    ' A' + hidn(d0) + ',' + hidn(d0) + ' 0 0 1 ' + hidn(A.x) + ',' + hidn(A.y) + ' Z';
}

// ---------------------------------------------------------------------------
// CANON'S HAND. A MITT, and that is arithmetic rather than taste.
// ---------------------------------------------------------------------------
// This was drawn as four separate fingers three times and came out a comb
// three times. At Canon's scale the hand is about 1.5 r long, r = 14, so 21
// units. ANSUR II (n=6,068) gives hand breadth as 0.457 of hand length, so 9.6
// units across. Split four ways that is a 2.09 unit finger with a 0.58 unit
// GAP. The icon-design floor is about 2 units for the smallest reliably
// rendered void, so the gap is under a third of what can render. The fingers
// fuse, the gaps grey out, and a rake is what is left on screen.
//
// THE COMB IS FOUR FINGERS DEGRADING. It is not a drawing that needs more
// care; it is a construction that does not fit. And it is why the hands kept
// growing: at the correct size four fingers stop working, so each pass scaled
// the hand up until they did, which is how they reached 1.8x to 4.8x life.
//
// The construction that DOES fit at this size is a mitt: two lobes on one
// contour with the thumb separate. The minimum feature set, in order of read
// bought per unit of geometry:
//   1. Two lobes on one contour.
//   2. The thumb lobe attaches to the SIDE at MID-HEIGHT. A lobe on top is a
//      fifth finger; a lobe on the side is a thumb. This is the distinction
//      that converts a blob into a hand.
//   3. The thumb BREAKS THE SILHOUETTE, so a concave notch divides the lobes.
//      An everywhere-convex contour is a blob however it is shaded.
//   4. A wrist terminator, so the hand does not melt into the forearm.
//   5. The thumb seam, which asserts thumb-against-fingers even when a pose
//      closes the notch. The insurance policy.
//
// Canon is a pure silhouette with no interior value to work with, so the whole
// read has to come out of the outline. That makes the notch mandatory, not
// decorative: it is the only thing distinguishing his hand from a lozenge.
//
// r    head radius the hand belongs to
// dir  -1 for his left, +1 for his right
// opts.rot     rotate about the wrist
// opts.grip    close the hand on something
// opts.rim     draw the cold screen rim light down the near edge
//
// Origin is the WRIST. An arm ends here and the hand carries on.
// THE WRIST, in ONE place, so the arm and the hand cannot disagree.
//
// Measured, forearm : wrist : hand-breadth is 1.76 : 1.00 : 1.61, so the wrist
// is narrower than BOTH its neighbours and the outline has to pinch. A smooth
// interpolation from arm to hand is not a wrist, it is a sausage.
//
// Returns a HALF width, because every path here is built symmetrically about
// the limb axis.
// THE RATIO CHAIN, in one place. forearm : wrist : hand-breadth = 1.76 : 1.00
// : 1.61 (measured). Every previous attempt fixed ONE link and left the others,
// which is why the hand kept reading as a balloon on a thread: the mouth agreed
// with the arm and then the mass ballooned to 2.29x the wrist when it should be
// 1.61x. A hand nearly twice the size of the limb it hangs from is exactly what
// floppy and disconnected looks like.
//
// All three derive from the ARM, because the arm is the thing the hand has to
// belong to. Half widths, since every path here is symmetric about the axis.
function hidForearmW(r) { return r * 0.62 * 0.53 * 0.5; }
function hidWristW(r)   { return hidForearmW(r) / 1.76; }
function hidHandB(r)    { return hidWristW(r) * 1.61; }

function hidHand(r, dir, opts) {
  opts = opts || {};
  var H = r * 1.5;                 // wrist to fingertip: 0.75 head DIAMETERS
  // Breadth comes off the ratio chain, NOT off hand length. Deriving it from H
  // independently of the arm is how it ended up 1.95x too big for its own wrist.
  var B = hidHandB(r) * 2;         // full breadth, from the arm
  var fill = opts.fill || HID_SKIN;
  var o = '';

  // ---- THE OVERLAP, which replaced a wrist band.
  //
  // There used to be a short trapezoid here whose comment read "so the hand has
  // a boundary with the arm". That was the bug, stated out loud: it made the
  // construction boundary between hidArm() and hidHand() into a VISIBLE
  // boundary, so a hand read as a glove stuck on the end of a pole.
  //
  // The fix is the cutout-animation answer. Canon is a single flat fill, so an
  // overlap between two shapes of the same colour is literally invisible: run
  // the hand mass BACKWARD past the wrist by 0.22H and let the forearm cover
  // the far end of it. No seam, no shared tangent to compute, and every call
  // site keeps its `rot` because the hand is still its own rotatable shape.
  //
  // The wrist itself must PINCH. Measured, forearm : wrist : hand-breadth is
  // 1.76 : 1.00 : 1.61, so the wrist is narrower than BOTH its neighbours; a
  // smooth interpolation between arm and hand is not a wrist.
  // ONE wrist width, shared with hidArm(). They used to disagree by 1.93x:
  // hidHand derived its mouth from head radius and hidArm derived its wrist
  // from shoulder width, so the hand flared to nearly double the limb it was
  // meant to continue. That is most of what made the join read as a lump.
  var WW = hidWristW(r);
  var OVER = H * 0.22;
  o += '<path d="M' + hidn(-WW * 0.86 * dir) + ',' + hidn(OVER) +
    ' Q' + hidn(-WW * 1.02 * dir) + ',' + hidn(H * 0.10) + ' ' + hidn(-WW * dir) + ',0' +
    ' L' + hidn(WW * dir) + ',0' +
    ' Q' + hidn(WW * 1.02 * dir) + ',' + hidn(H * 0.10) + ' ' + hidn(WW * 0.86 * dir) + ',' + hidn(OVER) +
    ' Z" fill="' + fill + '"/>';

  if (opts.grip) {
    // ---- CLOSED. The mass shortens and squares off: a fist is wider than it
    //      is tall, which is the opposite of the open mitt and is most of what
    //      makes a closed hand read as closed.
    o += '<path d="M' + hidn(-B * 0.46 * dir) + ',' + hidn(H * 0.04) +
      ' L' + hidn(-B * 0.50 * dir) + ',' + hidn(-H * 0.30) +
      ' Q' + hidn(-B * 0.44 * dir) + ',' + hidn(-H * 0.52) + ' ' + hidn(-B * 0.10 * dir) + ',' + hidn(-H * 0.52) +
      ' L' + hidn(B * 0.22 * dir) + ',' + hidn(-H * 0.50) +
      ' Q' + hidn(B * 0.52 * dir) + ',' + hidn(-H * 0.46) + ' ' + hidn(B * 0.50 * dir) + ',' + hidn(-H * 0.26) +
      ' L' + hidn(B * 0.46 * dir) + ',' + hidn(H * 0.04) + ' Z" fill="' + fill + '"/>';
    // the thumb, folded across the front of the fist, still on the SIDE
    o += '<path d="M' + hidn(-B * 0.44 * dir) + ',' + hidn(-H * 0.06) +
      ' Q' + hidn(-B * 0.86 * dir) + ',' + hidn(-H * 0.12) + ' ' + hidn(-B * 0.78 * dir) + ',' + hidn(-H * 0.34) +
      ' Q' + hidn(-B * 0.62 * dir) + ',' + hidn(-H * 0.48) + ' ' + hidn(-B * 0.34 * dir) + ',' + hidn(-H * 0.32) +
      ' Z" fill="' + fill + '"/>';
  } else {
    // ---- OPEN. THE BIG LOBE: four fingers massed. Taller than wide, blunt,
    //      convex, no interior detail -- at this size interior detail is not
    //      readable anyway and silhouette is the whole budget.
    var top = -H * 0.98;
    o += '<path d="M' + hidn(-B * 0.44 * dir) + ',' + hidn(H * 0.04) +
      ' L' + hidn(-B * 0.50 * dir) + ',' + hidn(-H * 0.56) +
      ' Q' + hidn(-B * 0.52 * dir) + ',' + hidn(top) + ' ' + hidn(-B * 0.16 * dir) + ',' + hidn(top) +
      ' L' + hidn(B * 0.20 * dir) + ',' + hidn(top * 0.98) +
      ' Q' + hidn(B * 0.54 * dir) + ',' + hidn(top * 0.94) + ' ' + hidn(B * 0.52 * dir) + ',' + hidn(-H * 0.54) +
      ' L' + hidn(B * 0.44 * dir) + ',' + hidn(H * 0.04) + ' Z" fill="' + fill + '"/>';
    // ---- THE THUMB LOBE, on the SIDE at MID-HEIGHT, about half the mass
    //      length, protruding past the mass so the notch between them is
    //      concave. This is the feature that makes it a hand.
    var ax = -B * 0.46 * dir, ay = -H * 0.28;
    var tipx = -B * 0.94 * dir, tipy = -H * 0.58;
    o += '<path d="M' + hidn(ax) + ',' + hidn(ay + H * 0.11) +
      ' Q' + hidn(tipx * 1.02) + ',' + hidn(ay) + ' ' + hidn(tipx) + ',' + hidn(tipy) +
      ' Q' + hidn(tipx * 0.70) + ',' + hidn(tipy - H * 0.10) + ' ' + hidn(ax * 0.92) + ',' + hidn(ay - H * 0.14) +
      ' Z" fill="' + fill + '"/>';
  }

  // ---- THE RIM. A dark silhouette with no lit edge is a hole in the frame,
  //      and here it does double duty: it runs down the near edge and INTO
  //      the thumb notch, which is what makes the notch legible when the whole
  //      hand is one flat black.
  if (opts.rim !== false) {
    o += '<path d="M' + hidn(-B * 0.44 * dir) + ',' + hidn(H * 0.22) +
      ' Q' + hidn(-B * 0.54 * dir) + ',' + hidn(-H * 0.10) + ' ' + hidn(-B * 0.48 * dir) + ',' + hidn(-H * 0.40) +
      '" fill="none" stroke="' + HID_RIM + '" stroke-width="' + hidn(B * 0.10) +
      '" stroke-linecap="round" opacity="0.5"/>';
  }
  // ---- THE THUMB SEAM. One mark from the notch into the mass, so the two
  //      lobes stay separate even when the pose closes the gap between them.
  //      Always drawn: it is the insurance policy, and on a flat silhouette it
  //      is the only interior information there is.
  o += '<path d="M' + hidn(-B * 0.46 * dir) + ',' + hidn(-H * 0.40) +
    ' Q' + hidn(-B * 0.26 * dir) + ',' + hidn(-H * 0.30) + ' ' + hidn(-B * 0.22 * dir) + ',' + hidn(-H * 0.14) +
    '" fill="none" stroke="' + HID_RIM + '" stroke-width="' + hidn(B * 0.07) +
    '" stroke-linecap="round" opacity="0.34"/>';

  var t = 'translate(' + hidn(opts.x || 0) + ',' + hidn(opts.y || 0) + ')';
  if (opts.rot) t += ' rotate(' + opts.rot + ')';
  return '<g transform="' + t + '">' + o + '</g>';
}

// ---------------------------------------------------------------------------
// A GRIPPING HAND, split so the held object goes BETWEEN the halves.
// ---------------------------------------------------------------------------
// The shape is not the insight; the SPLIT is. Occlusion is the entire signal:
// a hand beside a rail reads as near it, and a hand whose fingers are cut off
// by the rail reads as gripping it. That is a document-order fix, and no
// redraw of the hand substitutes for it.
//
// THE CALLER MUST DRAW: behind, then the object, then front.
function hidGrip(r, dir, gt, opts) {
  opts = opts || {};
  var H = r * 1.5, B = 0.457 * H * 1.10;
  var fill = opts.fill || HID_SKIN;
  var out = { behind: '', front: '' };
  function wrap(inner) {
    var t = 'translate(' + hidn(opts.x || 0) + ',' + hidn(opts.y || 0) + ')';
    if (opts.rot) t += ' rotate(' + opts.rot + ')';
    return '<g transform="' + t + '">' + inner + '</g>';
  }
  // BEHIND: wrist and the palm mass, flat side turned to the object.
  var b = '<path d="M' + hidn(-B * 0.40 * dir) + ',' + hidn(H * 0.30) +
    ' L' + hidn(B * 0.40 * dir) + ',' + hidn(H * 0.30) +
    ' L' + hidn(B * 0.46 * dir) + ',' + hidn(-H * 0.10) +
    ' Q0,' + hidn(-H * 0.30) + ' ' + hidn(-B * 0.46 * dir) + ',' + hidn(-H * 0.08) +
    ' Z" fill="' + fill + '"/>';
  // FRONT: one rounded bar of massed finger backs crossing the object, and the
  // thumb opposing on the near face. Opposition IS the grip; without it the
  // fingers read as resting on the object rather than holding it.
  var bh = Math.max(H * 0.22, gt * 0.9);
  var f = '<rect x="' + hidn(dir > 0 ? -B * 0.44 : -B * 0.40) +
    '" y="' + hidn(-H * 0.34 - bh / 2) +
    '" width="' + hidn(B * 0.84) + '" height="' + hidn(bh) +
    '" rx="' + hidn(bh * 0.44) + '" fill="' + fill + '"/>';
  f += '<path d="M' + hidn(-B * 0.40 * dir) + ',' + hidn(-H * 0.10) +
    ' Q' + hidn(-B * 0.84 * dir) + ',' + hidn(-H * 0.14) + ' ' + hidn(-B * 0.76 * dir) + ',' + hidn(-H * 0.34) +
    ' Q' + hidn(-B * 0.62 * dir) + ',' + hidn(-H * 0.48) + ' ' + hidn(-B * 0.34 * dir) + ',' + hidn(-H * 0.32) +
    ' Z" fill="' + fill + '"/>';
  if (opts.rim !== false) {
    f += '<path d="M' + hidn(-B * 0.44 * dir) + ',' + hidn(-H * 0.44) +
      ' Q' + hidn(-B * 0.52 * dir) + ',' + hidn(-H * 0.30) + ' ' + hidn(-B * 0.42 * dir) + ',' + hidn(-H * 0.16) +
      '" fill="none" stroke="' + HID_RIM + '" stroke-width="' + hidn(B * 0.08) +
      '" stroke-linecap="round" opacity="0.45"/>';
  }
  out.behind = wrap(b);
  out.front = wrap(f);
  return out;
}

// A WARM HAND, for the lamplit scenes at the end of the file.
//
// Canon's hands are dark silhouettes; Fredward's end scenes are warm and lit,
// so they need the same anatomy in a different key. hidden_end_4 and _7 were
// redrawn by hand and this is the same construction made callable, so the
// remaining scenes do not each invent their own again: hidden_end_5 shipped
// two brown blobs where the forearms should be and hidden_end_6 a single
// cloud-shaped lump at the edge of the page.
//
// The rule that matters is the one those blobs broke: the PALM IS SHORT and
// the FINGERS RUN A PALM-LENGTH AGAIN PAST IT. A palm drawn as long as the
// whole hand with stubs on top reads as a loaf however carefully it is shaded.
//
// r    the hand's reference radius, taken off the HEAD in the shot
// dir  -1 for his left, +1 for his right
function hidWarmHand(r, dir, opts) {
  opts = opts || {};
  var w = r * 1.15, o = '';
  var SKIN = opts.skin || '#c39a72', SHADE = opts.shade || '#a67c56', LIT = opts.lit || '#ffdf9e';
  // the palm, short, stopping at the knuckles
  o += '<path d="M' + hidn(-w * 0.62 * dir) + ',' + hidn(w * 0.44) +
    ' Q' + hidn(-w * 0.74 * dir) + ',' + hidn(w * 0.02) + ' ' + hidn(-w * 0.58 * dir) + ',' + hidn(-w * 0.2) +
    ' Q0,' + hidn(-w * 0.32) + ' ' + hidn(w * 0.6 * dir) + ',' + hidn(-w * 0.22) +
    ' Q' + hidn(w * 0.76 * dir) + ',' + hidn(w * 0.02) + ' ' + hidn(w * 0.64 * dir) + ',' + hidn(w * 0.42) +
    ' Z" fill="' + SKIN + '"/>';
  // four fingers, each a full palm-length again, middle longest
  for (var i = 0; i < 4; i++) {
    var fx = (-0.4 + i * 0.32) * w * dir;
    var len = w * (i === 0 ? 0.98 : i === 1 ? 1.2 : i === 2 ? 1.12 : 0.86);
    var fw = w * 0.155;
    o += '<path d="M' + hidn(fx - fw * dir) + ',' + hidn(-w * 0.12) +
      ' L' + hidn(fx - fw * 0.9 * dir) + ',' + hidn(-len + fw) +
      ' Q' + hidn(fx) + ',' + hidn(-len - fw * 0.5) + ' ' + hidn(fx + fw * 0.9 * dir) + ',' + hidn(-len + fw) +
      ' L' + hidn(fx + fw * dir) + ',' + hidn(-w * 0.12) +
      ' Z" fill="' + (i % 2 ? SKIN : SHADE) + '"/>';
    if (i < 3) {
      o += '<path d="M' + hidn(fx + fw * 1.08 * dir) + ',' + hidn(-w * 0.1) +
        ' L' + hidn(fx + fw * 1.08 * dir) + ',' + hidn(-len * 0.84) +
        '" fill="none" stroke="' + SHADE + '" stroke-width="' + hidn(w * 0.06) + '" opacity="0.7"/>';
    }
  }
  // the thumb, set low and thicker than a finger
  o += '<path d="M' + hidn(-w * 0.56 * dir) + ',' + hidn(w * 0.3) +
    ' Q' + hidn(-w * 1.02 * dir) + ',' + hidn(w * 0.08) + ' ' + hidn(-w * 1.08 * dir) + ',' + hidn(-w * 0.38) +
    ' Q' + hidn(-w * 0.94 * dir) + ',' + hidn(-w * 0.66) + ' ' + hidn(-w * 0.74 * dir) + ',' + hidn(-w * 0.34) +
    ' Q' + hidn(-w * 0.68 * dir) + ',' + hidn(-w * 0.04) + ' ' + hidn(-w * 0.54 * dir) + ',' + hidn(w * 0.08) +
    ' Z" fill="' + SKIN + '"/>';
  // the knuckle line, and the lamp catching the back of the hand
  o += '<path d="M' + hidn(-w * 0.52 * dir) + ',' + hidn(-w * 0.12) + ' Q0,' + hidn(-w * 0.26) +
    ' ' + hidn(w * 0.56 * dir) + ',' + hidn(-w * 0.14) +
    '" fill="none" stroke="' + SHADE + '" stroke-width="' + hidn(w * 0.06) + '" opacity="0.6"/>';
  o += '<path d="M' + hidn(-w * 0.56 * dir) + ',' + hidn(w * 0.32) + ' Q' + hidn(-w * 0.68 * dir) + ',' + hidn(w * 0.02) +
    ' ' + hidn(-w * 0.54 * dir) + ',' + hidn(-w * 0.18) +
    '" fill="none" stroke="' + LIT + '" stroke-width="' + hidn(w * 0.07) + '" opacity="0.55"/>';
  var t = 'translate(' + hidn(opts.x || 0) + ',' + hidn(opts.y || 0) + ')';
  if (opts.rot) t += ' rotate(' + opts.rot + ')';
  return '<g transform="' + t + '">' + o + '</g>';
}

// ---------------------------------------------------------------------------
// AN ARM, with a joint in it and a taper that is measured rather than guessed.
// ---------------------------------------------------------------------------
// The old version drew two constant-width strokes and pasted a circle over the
// bend. A circle at the bend is a patch over a joint that is not there: the
// joint reads when the CENTRELINE CHANGES DIRECTION, which a filled tapered
// path gives for free and a stroke cannot give at all.
//
// TAPER, from ANSUR II circumference data (n=6,068). Width goes with
// circumference for a roughly circular limb, so:
//
//   shoulder : forearm max : wrist  =  1.00 : 0.87 : 0.49
//
// The shape fact hidden in those numbers is the one most drawings of an arm
// get wrong: THE FOREARM IS NEARLY AS THICK AS THE BICEPS, only 13% down. The
// dramatic taper is not shoulder-to-elbow, it is FOREARM-TO-WRIST, a 43% drop.
// So this is a fat forearm ending in a thin wrist, NOT a cone. The build uses
// 1.00 : 0.84 : 0.53 measured at the ELBOW rather than at the forearm maximum,
// because the widest point of the forearm sits below the elbow.
//
// TWO NESTED TAPERS, not one: the upper arm and the forearm each taper
// individually, so the forearm starts at 1.08x the elbow width before it
// narrows. One monotonic taper shoulder to wrist is a cone, not an arm.
//
// ASYMMETRY is what kills the sausage read. A sausage is symmetric about its
// centreline and an arm is not: the bicep curve sits low on the upper arm and
// the tricep curve high, while the forearm's mass sits high near the elbow and
// dives back in about midway. So each control point is pushed off the midpoint
// AND off the centreline, in opposite directions for the two segments.
//
// The elbow sits at 0.556 along the shoulder-to-wrist line, from ANSUR's upper
// arm / (upper arm + forearm). The old midpoint was close but the joint now
// lands where a joint lands.
//
// Shoulder at (sx, sy), wrist at (wx, wy), both in the group's own space.
// bend pushes the elbow off the straight line: positive is outward.
function hidArm(r, sx, sy, wx, wy, bend, opts) {
  opts = opts || {};
  var fill = opts.fill || HID_SKIN;
  // wWr comes from hidWristW so the arm ends exactly where the hand begins.
  // These two were computed independently and disagreed by 1.93x, which is
  // why a hand read as a lump on a stick rather than a hand on an arm.
  var wSh = r * 0.62, wEl = wSh * 0.84, wWr = hidWristW(r) * 2;
  var S = { x: sx, y: sy }, W = { x: wx, y: wy };
  var dx = wx - sx, dy = wy - sy, len = Math.sqrt(dx * dx + dy * dy) || 1;
  var E = { x: sx + dx * 0.556 - (dy / len) * bend,
            y: sy + dy * 0.556 + (dx / len) * bend };
  var side = bend >= 0 ? 1 : -1;
  var o = '';

  // UPPER ARM. Control point past the midpoint at 0.60 and off the centreline.
  var uC = { x: S.x + (E.x - S.x) * 0.60 - (E.y - S.y) * 0.12 * side,
             y: S.y + (E.y - S.y) * 0.60 + (E.x - S.x) * 0.12 * side };
  o += '<path d="' + hidLimb(S, uC, E, wSh, wEl) + '" fill="' + fill + '"/>';

  // FOREARM. Control point at 0.35, which is the standard anthropometric
  // girth site (one third from the elbow toward the wrist), displaced the
  // OTHER way, starting wider than the elbow before tapering hard.
  var fC = { x: E.x + (W.x - E.x) * 0.35 + (W.y - E.y) * 0.10 * side,
             y: E.y + (W.y - E.y) * 0.35 - (W.x - E.x) * 0.10 * side };
  o += '<path d="' + hidLimb(E, fC, W, wEl * 1.08, wWr) + '" fill="' + fill + '"/>';

  // The cold rim down the near edge. On a pure silhouette this is the only
  // thing that says the arm has a form: without it the limb is a hole. It
  // follows the actual limb now rather than a straight line beside it.
  if (opts.rim) {
    var ox = -(E.y - S.y) / (Math.sqrt(Math.pow(E.x - S.x, 2) + Math.pow(E.y - S.y, 2)) || 1) * wSh * 0.42 * side;
    var oy = (E.x - S.x) / (Math.sqrt(Math.pow(E.x - S.x, 2) + Math.pow(E.y - S.y, 2)) || 1) * wSh * 0.42 * side;
    o += '<path d="M' + hidn(S.x + ox) + ',' + hidn(S.y + oy) +
      ' Q' + hidn(uC.x + ox) + ',' + hidn(uC.y + oy) + ' ' + hidn(E.x + ox * 0.86) + ',' + hidn(E.y + oy * 0.86) +
      '" fill="none" stroke="' + HID_RIM + '" stroke-width="1.2" opacity="0.45" stroke-linecap="round"/>';
  }
  return o;
}

// Where the elbow ended up, for a caller lining a held object up with the
// forearm. Same arithmetic as hidArm(), so the two cannot drift apart.
function hidArmJoints(r, sx, sy, wx, wy, bend) {
  var dx = wx - sx, dy = wy - sy, len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { x: wx, y: wy,
    ex: sx + dx * 0.556 - (dy / len) * bend,
    ey: sy + dy * 0.556 + (dx / len) * bend };
}

// Where a hand should be rotated to, given the forearm direction.
function hidWristRot(ex, ey, wx, wy) {
  return hidn(Math.atan2(wy - ey, wx - ex) * 180 / Math.PI - 90);
}


// ---------------------------------------------------------------------------
// CANON, from behind. A back, a head, a chair, and TWO ARMS WITH HANDS.
// ---------------------------------------------------------------------------
// He is never shown facing the player: every scene draws a back. That is the
// composition rule and it stands. What it is NOT is licence to leave the arms
// off, which is what happened in hidden_1 and hidden_6, or to end them in a
// round cap or a lozenge, which is what happened everywhere else.
//
// His head radius drifted 14 -> 15 -> 16 -> 19 and his arm stroke width
// 12 -> 13 -> 15 -> 28 across scenes that are the same man in the same room.
// Here it is one number, r, and everything else is a multiple of it.
//
// r        head radius. HID_HEAD (14) is the mid-shot.
// x, y     centre of the HEAD in scene coordinates
// opts.reachL / reachR  where each hand goes, in body space relative to the
//          head centre, as [x, y]. Omit for a hand resting in the lap.
// opts.gripL / gripR    close that hand on something
// opts.lean  how far the tired line falls forward, in degrees
function hidCanon(r, x, y, opts) {
  opts = opts || {};
  var o = '';
  // Skeleton, all in head radii, measured down from the head centre.
  var neckY = r * 1.55;
  var shoulderY = r * 2.05;
  var halfW = r * 1.85;             // shoulder half width
  var hipY = shoulderY + r * 3.1;
  var th = r * 0.62;                // arm thickness

  // ---- SHOULDERS AND BACK. The line falls forward: he has been here a while.
  o += '<path d="M' + hidn(-halfW) + ',' + hidn(hipY) +
    ' Q' + hidn(-halfW * 0.92) + ',' + hidn(shoulderY + r * 0.5) + ' ' + hidn(-r * 0.86) + ',' + hidn(shoulderY - r * 0.16) +
    ' Q0,' + hidn(shoulderY - r * 0.58) + ' ' + hidn(r * 0.86) + ',' + hidn(shoulderY - r * 0.16) +
    ' Q' + hidn(halfW * 0.92) + ',' + hidn(shoulderY + r * 0.5) + ' ' + hidn(halfW) + ',' + hidn(hipY) +
    ' Z" fill="' + HID_SKIN + '"/>';
  o += '<path d="M' + hidn(-halfW * 0.72) + ',' + hidn(shoulderY + r * 0.86) + ' Q0,' + hidn(shoulderY + r * 0.28) +
    ' ' + hidn(halfW * 0.72) + ',' + hidn(shoulderY + r * 0.86) + '" fill="none" stroke="#1a2334" stroke-width="1" opacity="0.7"/>';

  // ---- ARMS. Two of them, each with an elbow and each ending in a hand.
  var lw = opts.reachL || [-halfW * 0.94, hipY - r * 0.5];
  var rw = opts.reachR || [halfW * 0.94, hipY - r * 0.5];
  var lsx = -halfW * 0.78, rsx = halfW * 0.78, sy = shoulderY + r * 0.18;
  o += hidArm(r, lsx, sy, lw[0], lw[1], -r * 0.62, { rim: true });
  o += hidArm(r, rsx, sy, rw[0], rw[1], r * 0.62);
  // hands go down AFTER the arms and BEFORE anything they hold is closed on
  o += hidHand(r, -1, { x: lw[0], y: lw[1], grip: opts.gripL, rot: opts.rotL || 0 });
  o += hidHand(r, 1, { x: rw[0], y: rw[1], grip: opts.gripR, rot: opts.rotR || 0, rim: false });

  // ---- NECK AND HEAD
  o += '<rect x="' + hidn(-r * 0.4) + '" y="' + hidn(neckY - r * 0.3) + '" width="' + hidn(r * 0.84) +
    '" height="' + hidn(r * 0.8) + '" fill="' + HID_SKIN + '"/>';
  o += '<circle cx="' + hidn(r * 0.07) + '" cy="0" r="' + hidn(r) + '" fill="' + HID_SKIN + '"/>';
  o += '<path d="M' + hidn(-r * 0.93) + ',' + hidn(-r * 0.14) + ' Q' + hidn(-r * 0.64) + ',' + hidn(-r * 1.14) +
    ' ' + hidn(r * 0.07) + ',' + hidn(-r * 1) + ' Q' + hidn(r * 0.79) + ',' + hidn(-r * 1.14) +
    ' ' + hidn(r * 1.07) + ',' + hidn(-r * 0.14) + '" fill="' + HID_SKIN_L + '"/>';

  // ---- THE COLD RIM. A dark silhouette needs one lit edge or it is a hole.
  o += '<path d="M' + hidn(-halfW * 0.96) + ',' + hidn(hipY - r * 0.6) + ' Q' + hidn(-halfW * 0.9) + ',' + hidn(shoulderY + r * 0.3) +
    ' ' + hidn(-r * 0.86) + ',' + hidn(shoulderY - r * 0.12) + '" fill="none" stroke="#5fa0b8" stroke-width="' + hidn(r * 0.29) + '" opacity="0.22"/>';
  o += '<path d="M' + hidn(-halfW * 0.96) + ',' + hidn(hipY - r * 0.6) + ' Q' + hidn(-halfW * 0.9) + ',' + hidn(shoulderY + r * 0.3) +
    ' ' + hidn(-r * 0.86) + ',' + hidn(shoulderY - r * 0.12) + '" fill="none" stroke="' + HID_RIM + '" stroke-width="' + hidn(r * 0.11) + '" opacity="0.75"/>';
  o += '<path d="M' + hidn(-r * 0.93) + ',' + hidn(-r * 0.86) + ' Q' + hidn(-r * 1.07) + ',' + hidn(-r * 0.21) +
    ' ' + hidn(-r * 0.86) + ',' + hidn(r * 0.29) + '" fill="none" stroke="' + HID_RIM + '" stroke-width="' + hidn(r * 0.1) + '" opacity="0.6"/>';

  var t = 'translate(' + hidn(x) + ',' + hidn(y) + ')';
  if (opts.lean) t += ' rotate(' + opts.lean + ',0,' + hidn(hipY) + ')';
  return '<g data-canon-r="' + r + '" transform="' + t + '">' + o + '</g>';
}

// ---------------------------------------------------------------------------
// A CHAIR. Seat plane, back, four legs, all reaching the floor.
// ---------------------------------------------------------------------------
// Every chair in this file was a back panel plus two rear legs, then rotated
// as a whole group, which tilts the legs off plumb: one drove up to 18px
// through the floor and the other hovered 10px above it. A back panel with two
// rear legs is not a chair.
//
// The fix is that the ROTATION APPLIES TO THE BODY ONLY. The legs are drawn
// afterwards, vertical, from the seat corners straight down to floorY. So the
// chair can be angled toward the table and still stand on the ground.
//
// x, y     centre of the seat plane, in scene coordinates
// rot      how far the chair is turned toward the table, degrees
// floorY   the floor line the legs must reach
// opts.w   seat width (default 44), opts.d seat depth in the picture plane
function hidChair(x, y, rot, floorY, opts) {
  opts = opts || {};
  var w = opts.w || 44;             // seat width
  var d = opts.d || 16;             // how deep the seat reads, foreshortened
  var backH = opts.backH || w * 0.82;
  var hw = w / 2;
  var o = '';
  var legW = Math.max(3.5, w * 0.09);
  var legFill = opts.legFill || HID_CHAIR_D;

  // ---- the two BACK legs, drawn first so the seat overlaps them. They are
  //      set in and up the picture plane so the chair has depth.
  var backOff = d * 0.55;
  var bl = [-hw + legW * 0.6, hw - legW * 1.6];
  for (var i = 0; i < 2; i++) {
    o += '<rect x="' + hidn(x + bl[i] * 0.82) + '" y="' + hidn(y - backOff) +
      '" width="' + hidn(legW * 0.86) + '" height="' + hidn(floorY - d * 0.4 - (y - backOff)) +
      '" fill="' + legFill + '" opacity="0.78"/>';
  }

  // ---- the SEAT and the BACK, as one body, rotated about the seat centre.
  //      This is the only thing the rotation touches.
  var body = '';
  body += '<path d="M' + hidn(-hw) + ',0 L' + hidn(hw) + ',0 L' + hidn(hw - d * 0.34) + ',' + hidn(-d * 0.55) +
    ' L' + hidn(-hw + d * 0.34) + ',' + hidn(-d * 0.55) + ' Z" fill="' + (opts.seat || HID_CHAIR) + '"/>';
  body += '<rect x="' + hidn(-hw) + '" y="0" width="' + hidn(w) + '" height="' + hidn(d * 0.36) +
    '" rx="1.5" fill="' + (opts.seatEdge || HID_CHAIR_L) + '" opacity="0.75"/>';
  // the back panel, rising from the rear edge of the seat
  body += '<rect x="' + hidn(-hw + d * 0.3) + '" y="' + hidn(-d * 0.55 - backH) +
    '" width="' + hidn(w - d * 0.6) + '" height="' + hidn(backH) + '" rx="3" fill="' + (opts.seat || HID_CHAIR) + '"/>';
  body += '<rect x="' + hidn(-hw + d * 0.3) + '" y="' + hidn(-d * 0.55 - backH) +
    '" width="' + hidn(w - d * 0.6) + '" height="3" rx="1.5" fill="' + (opts.seatEdge || HID_CHAIR_L) + '"/>';
  // two slats, which keep the seat/back L open in silhouette
  body += '<rect x="' + hidn(-hw + d * 0.7) + '" y="' + hidn(-d * 0.55 - backH * 0.72) +
    '" width="' + hidn(w - d * 1.4) + '" height="2" rx="1" fill="' + (opts.seatEdge || HID_CHAIR_L) + '" opacity="0.55"/>';
  body += '<rect x="' + hidn(-hw + d * 0.7) + '" y="' + hidn(-d * 0.55 - backH * 0.42) +
    '" width="' + hidn(w - d * 1.4) + '" height="2" rx="1" fill="' + (opts.seatEdge || HID_CHAIR_L) + '" opacity="0.45"/>';
  o += '<g transform="translate(' + hidn(x) + ',' + hidn(y) + ') rotate(' + rot + ')">' + body + '</g>';

  // ---- the two FRONT legs. Vertical, from under the seat straight down to
  //      the floor, so the chair stands however far the body is turned.
  var fl = [-hw + legW * 0.4, hw - legW * 1.4];
  for (var j = 0; j < 2; j++) {
    o += '<rect x="' + hidn(x + fl[j]) + '" y="' + hidn(y + d * 0.2) +
      '" width="' + hidn(legW) + '" height="' + hidn(floorY - (y + d * 0.2)) +
      '" fill="' + legFill + '"/>';
  }

  // ---- the contact shadow, emitted from inside the helper so it cannot be
  //      forgotten. Wide and flat, never circular.
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(floorY) + '" rx="' + hidn(w * 0.66) +
    '" ry="' + hidn(w * 0.13) + '" fill="#05080f" opacity="0.34"/>';

  return o;
}

// ---------------------------------------------------------------------------
// THE PENCIL. Amber, and one of exactly two warm things in the room.
// ---------------------------------------------------------------------------
// It ranged 46 to 130 units long across scenes whose comments insisted it was
// "still exactly parallel" and "where he left it". L is the full length
// including the ferrule; everything else derives from it.
function hidPencil(x, y, L, opts) {
  opts = opts || {};
  var t = L * 0.058;                 // it is a pencil: thin
  var rot = opts.rot || 0;
  var o = '';
  o += '<rect x="0" y="0" width="' + hidn(L * 0.80) + '" height="' + hidn(t) +
    '" rx="' + hidn(t * 0.5) + '" fill="#F2C14E" opacity="' + (opts.opacity || 0.85) + '"/>';
  // the sharpened end, a wedge rather than a butt
  o += '<path d="M' + hidn(L * 0.80) + ',0 L' + hidn(L * 0.92) + ',' + hidn(t * 0.5) +
    ' L' + hidn(L * 0.80) + ',' + hidn(t) + ' Z" fill="#c08a2e" opacity="' + (opts.opacity || 0.85) + '"/>';
  o += '<path d="M' + hidn(L * 0.88) + ',' + hidn(t * 0.22) + ' L' + hidn(L * 0.92) + ',' + hidn(t * 0.5) +
    ' L' + hidn(L * 0.88) + ',' + hidn(t * 0.78) + ' Z" fill="#2b3548"/>';
  // the ferrule and eraser at the blunt end
  o += '<rect x="' + hidn(-L * 0.10) + '" y="0" width="' + hidn(L * 0.07) + '" height="' + hidn(t) +
    '" fill="#525f79"/>';
  o += '<rect x="' + hidn(-L * 0.15) + '" y="' + hidn(t * 0.08) + '" width="' + hidn(L * 0.05) +
    '" height="' + hidn(t * 0.84) + '" rx="' + hidn(t * 0.3) + '" fill="#6e7688"/>';
  return '<g transform="translate(' + hidn(x) + ',' + hidn(y) + ')' +
    (rot ? ' rotate(' + rot + ')' : '') + '">' + o + '</g>';
}

// ---------------------------------------------------------------------------
// THE TABLE. Top, front edge, four legs computed down to the floor.
// ---------------------------------------------------------------------------
// Six different tables in the same room: top y 164 to 200, width 308 to 420,
// legs present, absent, present, present, present, absent. Two of them had the
// top floating on a void with nothing below it at all.
function hidTable(x, topY, w, floorY, opts) {
  opts = opts || {};
  var hw = w / 2, o = '';
  var th = opts.th || 8;
  var legW = Math.max(6, w * 0.021);
  var lx = hw * 0.88;
  // back legs first, set in, so the top overlaps them
  o += '<rect x="' + hidn(x - lx * 0.86) + '" y="' + hidn(topY + th) + '" width="' + hidn(legW * 0.8) +
    '" height="' + hidn(floorY - 6 - (topY + th)) + '" fill="#232c3c" opacity="0.8"/>';
  o += '<rect x="' + hidn(x + lx * 0.86 - legW * 0.8) + '" y="' + hidn(topY + th) + '" width="' + hidn(legW * 0.8) +
    '" height="' + hidn(floorY - 6 - (topY + th)) + '" fill="#232c3c" opacity="0.8"/>';
  // the top
  o += '<rect x="' + hidn(x - hw) + '" y="' + hidn(topY) + '" width="' + hidn(w) + '" height="' + hidn(th) +
    '" rx="2" fill="' + (opts.top || '#3d4a60') + '"/>';
  o += '<rect x="' + hidn(x - hw) + '" y="' + hidn(topY) + '" width="' + hidn(w) + '" height="2.5" rx="1" fill="#5d6b85" opacity="0.7"/>';
  // front legs, straight to the floor
  o += '<rect x="' + hidn(x - lx) + '" y="' + hidn(topY + th) + '" width="' + hidn(legW) +
    '" height="' + hidn(floorY - (topY + th)) + '" fill="#2b3548"/>';
  o += '<rect x="' + hidn(x + lx - legW) + '" y="' + hidn(topY + th) + '" width="' + hidn(legW) +
    '" height="' + hidn(floorY - (topY + th)) + '" fill="#2b3548"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(floorY) + '" rx="' + hidn(w * 0.48) +
    '" ry="' + hidn(w * 0.035) + '" fill="#05080f" opacity="0.3"/>';
  return o;
}

// ---------------------------------------------------------------------------
// THE FOUNTAIN. ONE object, seen twice.
// ---------------------------------------------------------------------------
// hidden_0 and hidden_10 are the same fountain in the same square. They shipped
// with different basin heights, different pillar heights, a grey stone palette
// against a blue-lit one, and an access hole that was an ellipse straddling the
// basin wall in one and a rectangle flat on the cobbles in the other.
//
// WHERE THE HATCH PHYSICALLY IS: it is not in the basin. It is a service
// hatch in the cobbles in FRONT of the fountain, over the valve chamber that
// feeds it -- which is why a fountain is what marks the way down, and why the
// water goes on running while the hatch stands open. It is a rectangular
// steel plate with a bar grille, hinged along its far edge, and it opens by
// swinging UP and back toward the basin, where it rests against the plinth.
//
// s      id suffix
// x, y   centre of the basin ellipse
// opts.open   draw the hatch swung open with the shaft below it
// opts.lit    the water lit from within (hidden_10) rather than dark
function hidFountain(s, x, y, opts) {
  opts = opts || {};
  var rx = 98, ry = 30;              // the basin, one size, both scenes
  var pillarH = 48, capRx = 34;      // the pillar and its cap, one size
  var o = '';

  // ---- the plinth the basin stands on, so it is not an ellipse on a void
  o += '<path d="M' + hidn(x - rx) + ',' + hidn(y) + ' L' + hidn(x - rx * 0.94) + ',' + hidn(y + 22) +
    ' Q' + hidn(x) + ',' + hidn(y + 34) + ' ' + hidn(x + rx * 0.94) + ',' + hidn(y + 22) +
    ' L' + hidn(x + rx) + ',' + hidn(y) + ' Z" fill="#232c3c"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y + 30) + '" rx="' + hidn(rx * 1.1) +
    '" ry="' + hidn(ry * 0.36) + '" fill="#05080f" opacity="0.4"/>';

  // ---- the basin: outer rim, then the water inside it
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y) + '" rx="' + rx + '" ry="' + ry + '" fill="#2e3648"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y + 2) + '" rx="' + hidn(rx * 0.86) +
    '" ry="' + hidn(ry * 0.8) + '" fill="#1d3245"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y + 2) + '" rx="' + hidn(rx * 0.84) +
    '" ry="' + hidn(ry * 0.76) + '" fill="url(#hidBasin' + s + ')"/>';
  // the rim has thickness: a highlight along its top, so the cobbles clearly
  // stop at it rather than passing under it
  o += '<path d="M' + hidn(x - rx * 0.99) + ',' + hidn(y - 2) + ' Q' + hidn(x) + ',' + hidn(y - ry * 1.06) +
    ' ' + hidn(x + rx * 0.99) + ',' + hidn(y - 2) + '" fill="none" stroke="#4a5770" stroke-width="2.4" opacity="0.7"/>';

  // ---- the pillar and its cap. One height, both scenes.
  o += '<rect x="' + hidn(x - 9) + '" y="' + hidn(y - pillarH) + '" width="18" height="' + hidn(pillarH + 4) +
    '" fill="#39445c"/>';
  o += '<rect x="' + hidn(x - 9) + '" y="' + hidn(y - pillarH) + '" width="5" height="' + hidn(pillarH + 4) +
    '" fill="#4a5770" opacity="0.6"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y - pillarH) + '" rx="' + capRx + '" ry="11" fill="#4a5770"/>';
  o += '<ellipse cx="' + hidn(x) + '" cy="' + hidn(y - pillarH - 2) + '" rx="' + hidn(capRx * 0.82) +
    '" ry="8" fill="' + (opts.lit ? '#2a4a5e' : '#243244') + '"/>';

  // ---- the water, running off the cap into the basin. Two arcs and a fall.
  var arc = function (d, o2, dur, begin) {
    return '<path d="' + d + '" fill="none" stroke="url(#hidWat' + s + ')" stroke-width="2.2" ' +
      'stroke-linecap="round" opacity="' + o2 + '">' +
      hidAnim('opacity', o2 + ';' + hidn(o2 * 0.62) + ';' + o2, dur, { begin: begin }) + '</path>';
  };
  o += arc('M' + hidn(x - capRx * 0.62) + ',' + hidn(y - pillarH + 6) + ' Q' + hidn(x - capRx * 0.82) + ',' + hidn(y - 22) +
    ' ' + hidn(x - capRx * 0.5) + ',' + hidn(y - 4), 0.62, '3.7s', '0s');
  o += arc('M' + hidn(x + capRx * 0.62) + ',' + hidn(y - pillarH + 6) + ' Q' + hidn(x + capRx * 0.84) + ',' + hidn(y - 22) +
    ' ' + hidn(x + capRx * 0.52) + ',' + hidn(y - 4), 0.58, '4.3s', '-1.1s');
  // where the two falls land, a widening ring on the water
  o += '<ellipse cx="' + hidn(x - capRx * 0.5) + '" cy="' + hidn(y - 2) + '" rx="4" ry="1.6" fill="none" ' +
    'stroke="#7fb4c8" stroke-width="0.9" opacity="0">' +
    hidAnim('rx', '3;13;3', '5.1s', { begin: '0s' }) +
    hidAnim('opacity', '0;0.5;0', '5.1s', { begin: '0s' }) + '</ellipse>';
  o += '<ellipse cx="' + hidn(x + capRx * 0.52) + '" cy="' + hidn(y - 2) + '" rx="4" ry="1.6" fill="none" ' +
    'stroke="#7fb4c8" stroke-width="0.9" opacity="0">' +
    hidAnim('rx', '3;13;3', '6.3s', { begin: '-2.4s' }) +
    hidAnim('opacity', '0;0.44;0', '6.3s', { begin: '-2.4s' }) + '</ellipse>';

  return o;
}

// The defs the fountain needs. Same stops in both scenes, so it is the same
// stone and the same water; only opts.lit changes how much light is in it.
function hidFountainDefs(s, lit) {
  return '<radialGradient id="hidBasin' + s + '" cx="50%" cy="46%" r="62%">' +
    '<stop offset="0%" stop-color="' + (lit ? '#3f7f96' : '#27455a') + '"/>' +
    '<stop offset="100%" stop-color="' + (lit ? '#1d3245' : '#141f2e') + '"/>' +
    '</radialGradient>' +
    '<linearGradient id="hidWat' + s + '" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#9fd4e4" stop-opacity="0.8"/>' +
    '<stop offset="100%" stop-color="#3d5a75" stop-opacity="0.2"/>' +
    '</linearGradient>';
}

// THE SERVICE HATCH, in the cobbles in front of the fountain.
//
// WHERE IT PHYSICALLY IS AND HOW IT OPENS. It is not in the basin: it is a
// steel plate set flush in the cobbles in FRONT of the fountain, over the
// valve chamber that feeds it. That is why a fountain is the thing that marks
// the way down, and why the water goes on running while the hatch stands open.
//
// The hinge is a bar along the FAR edge, running left to right. So the lid
// tips back and up about a HORIZONTAL axis, which in this picture is a
// foreshortening rather than a rotation: it stands as a leaf behind the hole,
// leaning on the fountain plinth, and we see its underside.
//
// hx, hy is the centre of the opening on the ground.
function hidHatch(hx, hy, open, s) {
  var w = 108, d = 30;               // the opening, one size in both scenes
  var hw = w / 2, o = '';
  // the ground plan of the plate: a trapezoid, wider at the near edge
  var farL = hx - hw, farR = hx + hw, nearL = hx - hw - 6, nearR = hx + hw + 6;
  var farY = hy - d / 2, nearY = hy + d / 2;

  if (open) {
    // ---- THE LEAF, standing back on its hinge. Drawn FIRST, because it is
    //      behind the hole it came out of. We see its underside: darker than
    //      the top face, with the grille bars showing through in relief and
    //      the two stiffening ribs that are only on the inside.
    var lean = 26;                   // how far up the leaf stands
    var tipL = hx - hw + 5, tipR = hx + hw - 5;  // slightly narrowed by tilt
    o += '<path d="M' + hidn(farL) + ',' + hidn(farY) +
      ' L' + hidn(farR) + ',' + hidn(farY) +
      ' L' + hidn(tipR) + ',' + hidn(farY - lean) +
      ' L' + hidn(tipL) + ',' + hidn(farY - lean) + ' Z" fill="#232c3c"/>';
    // the bar grille, seen from beneath: the gaps between the bars let the
    // sky through, which is what says grille rather than plate
    for (var j = 1; j < 7; j++) {
      var t = j / 7;
      var bxF = farL + t * w, bxT = tipL + t * (tipR - tipL);
      o += '<path d="M' + hidn(bxF) + ',' + hidn(farY - 1) + ' L' + hidn(bxT) + ',' + hidn(farY - lean + 1) +
        '" stroke="#141c2e" stroke-width="4.2" opacity="0.85"/>';
    }
    // two stiffening ribs across the underside
    o += '<path d="M' + hidn(tipL + 2) + ',' + hidn(farY - lean * 0.72) + ' L' + hidn(tipR - 2) + ',' + hidn(farY - lean * 0.72) +
      ' M' + hidn(farL + 3) + ',' + hidn(farY - lean * 0.30) + ' L' + hidn(farR - 3) + ',' + hidn(farY - lean * 0.30) +
      '" stroke="#39445c" stroke-width="2.6" opacity="0.85"/>';
    // the top edge of the leaf, catching the sky
    o += '<path d="M' + hidn(tipL) + ',' + hidn(farY - lean) + ' L' + hidn(tipR) + ',' + hidn(farY - lean) +
      '" stroke="#5d6b85" stroke-width="2" stroke-linecap="round" opacity="0.75"/>';

    // ---- THE HOLE, and the stair going down into it
    o += '<path d="M' + hidn(farL) + ',' + hidn(farY) + ' L' + hidn(farR) + ',' + hidn(farY) +
      ' L' + hidn(nearR) + ',' + hidn(nearY) + ' L' + hidn(nearL) + ',' + hidn(nearY) +
      ' Z" fill="url(#hidShaftDark' + s + ')"/>';
    // four steps, receding and darkening, so it reads as going DOWN
    for (var i = 0; i < 4; i++) {
      var sw = w * (0.78 - i * 0.11), sy = farY + 4 + i * 5.4;
      o += '<rect x="' + hidn(hx - sw / 2) + '" y="' + hidn(sy) + '" width="' + hidn(sw) + '" height="3.2" rx="1" ' +
        'fill="#2b3548" opacity="' + hidn(0.70 - i * 0.15) + '"/>';
    }
    // ---- THE HINGE BAR, on the far edge. Drawn after the hole so it reads as
    //      lying across it, and it is what the leaf turns on.
    o += '<rect x="' + hidn(farL - 2) + '" y="' + hidn(farY - 2.4) + '" width="' + hidn(w + 4) + '" height="3.4" rx="1.7" fill="#4a5770"/>';
    o += '<circle cx="' + hidn(farL + 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85"/>';
    o += '<circle cx="' + hidn(farR - 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85"/>';
    // ---- THE NEAR LIP, the kerb you would step over
    o += '<path d="M' + hidn(nearL) + ',' + hidn(nearY) + ' L' + hidn(nearR) + ',' + hidn(nearY) +
      '" stroke="#5d6b85" stroke-width="2.6" stroke-linecap="round" opacity="0.8"/>';
  } else {
    // ---- SHUT: the same plate lying flush, seen from above, same size, same
    //      seven bars, same hinge along the far edge.
    o += '<path d="M' + hidn(farL) + ',' + hidn(farY) + ' L' + hidn(farR) + ',' + hidn(farY) +
      ' L' + hidn(nearR) + ',' + hidn(nearY) + ' L' + hidn(nearL) + ',' + hidn(nearY) +
      ' Z" fill="#39445c"/>';
    for (var k = 1; k < 7; k++) {
      var u = k / 7;
      o += '<path d="M' + hidn(farL + u * w) + ',' + hidn(farY + 2) + ' L' + hidn(nearL + u * (nearR - nearL)) + ',' + hidn(nearY - 2) +
        '" stroke="#1a2334" stroke-width="4.2" opacity="0.8"/>';
    }
    // one faint cold gleam out of it, if you know to look
    o += '<path d="M' + hidn(farL + 6) + ',' + hidn(farY + 4) + ' L' + hidn(farR - 6) + ',' + hidn(farY + 4) +
      ' L' + hidn(nearR - 10) + ',' + hidn(nearY - 4) + ' L' + hidn(nearL + 10) + ',' + hidn(nearY - 4) +
      ' Z" fill="#16323a" opacity="0.32"/>';
    o += '<rect x="' + hidn(farL - 2) + '" y="' + hidn(farY - 2.4) + '" width="' + hidn(w + 4) + '" height="3.4" rx="1.7" fill="#4a5770" opacity="0.9"/>';
    o += '<circle cx="' + hidn(farL + 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85" opacity="0.8"/>';
    o += '<circle cx="' + hidn(farR - 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85" opacity="0.8"/>';
  }
  return o;
}

// ---------------------------------------------------------------------------
// INTRO — hidden_0 .. hidden_10
// ---------------------------------------------------------------------------

// Scene 0: The fountain grate open in the town square. Stairs going down.
// Water still running and the sound gone — the water is drawn mid-stream with
// no ripple animation on the basin, which is the visual of a held note.
STORY_SCENES['hidden_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>` + hidFountainDefs('0', false) + `
  <linearGradient id="hidSky0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1224"/><stop offset="55%" stop-color="#16233a"/><stop offset="100%" stop-color="#28384c"/>
  </linearGradient>
  <linearGradient id="hidShaftDark0" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0d1422"/><stop offset="100%" stop-color="#05080f"/>
  </linearGradient>
  <radialGradient id="hidShaft0" cx="50%" cy="12%" r="70%">
    <stop offset="0%" stop-color="#5fa0b8" stop-opacity="0.2"/><stop offset="55%" stop-color="#3d5a75" stop-opacity="0.06"/><stop offset="100%" stop-color="#05080f" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidSky0)"/>
<!-- FAR PLANE: the square around it, flat and unlit -->
<rect x="0" y="52" width="62" height="120" rx="2" fill="#141c2e" opacity="0.9"/>
<rect x="58" y="40" width="52" height="132" rx="2" fill="#101828" opacity="0.9"/>
<rect x="392" y="46" width="56" height="126" rx="2" fill="#141c2e" opacity="0.9"/>
<rect x="444" y="36" width="56" height="136" rx="2" fill="#101828" opacity="0.9"/>
<rect x="10" y="70" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.3"/>
<rect x="36" y="70" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.22"/>
<rect x="404" y="64" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.26"/>
<rect x="458" y="56" width="10" height="12" rx="1" fill="#3d5a75" opacity="0.2"/>
<!-- Two lanterns, low and grey. Nothing warm above ground. -->
<rect x="118" y="128" width="4" height="44" fill="#28303f"/>
<rect x="112" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="114" y="120" width="12" height="9" rx="1" fill="#3d5a75" opacity="0.42"/>
<rect x="378" y="128" width="4" height="44" fill="#28303f"/>
<rect x="372" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="374" y="120" width="12" height="9" rx="1" fill="#3d5a75" opacity="0.38"/>
<!-- MID PLANE: cobbles -->
<rect x="0" y="170" width="500" height="90" fill="#18202e"/>
<ellipse cx="70" cy="200" rx="15" ry="6" fill="#202839" opacity="0.6"/>
<ellipse cx="150" cy="222" rx="13" ry="5" fill="#1e2534" opacity="0.5"/>
<ellipse cx="360" cy="206" rx="14" ry="6" fill="#202839" opacity="0.55"/>
<ellipse cx="430" cy="234" rx="13" ry="5" fill="#1e2534" opacity="0.45"/>
<ellipse cx="110" cy="248" rx="12" ry="5" fill="#202839" opacity="0.4"/>
` + hidFountain('0', 250, 180, { lit: false }) + `
<!-- NEAR PLANE: the service hatch, open, and the cold coming up out of it.
     It is in the cobbles in FRONT of the fountain, over the valve chamber
     that feeds it, which is why a fountain marks the way down and why the
     water goes on running while the hatch stands open. -->
<ellipse cx="196" cy="220" rx="72" ry="28" fill="url(#hidShaft0)"/>
` + hidHatch(196, 226, true, '0') + `
<!-- Boot scuff on the second step down -->
<path d="M180,222 Q191,220 200,223" fill="none" stroke="#4a5568" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
<path d="M184,225 Q192,223 198,225" fill="none" stroke="#4a5568" stroke-width="0.8" stroke-linecap="round" opacity="0.32"/>
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
<rect x="0" y="0" width="500" height="196" fill="#0d1526"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash1)"/>
<!-- Floor, lighter than the wall where the screenlight lands on it -->
<rect x="0" y="196" width="500" height="64" fill="#080e1a"/>
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
    <animate attributeName="d" values="M150,60 Q200,55 250,60 Q300,65 350,60 L350,72 Q300,77 250,72 Q200,67 150,72Z;M150,63 Q200,58 250,63 Q300,68 350,63 L350,75 Q300,80 250,75 Q200,70 150,75Z;M150,60 Q200,55 250,60 Q300,65 350,60 L350,72 Q300,77 250,72 Q200,67 150,72Z" dur="9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z" fill="#0e2028" opacity="0.55">
    <animate attributeName="d" values="M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z;M150,99 Q205,94 250,99 Q295,104 350,99 L350,113 L150,113Z;M150,96 Q205,91 250,96 Q295,101 350,96 L350,110 L150,110Z" dur="12.43s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <!-- the wreck: a shape that used to be a hull -->
  <path d="M186,132 Q206,110 246,106 L300,110 Q318,116 314,132 Z" fill="#08121a" opacity="0.9"/>
  <path d="M198,124 Q222,113 250,112 L292,116" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.5"/>
  <path d="M246,106 L242,88 L252,86 L254,106" fill="#08121a" opacity="0.8"/>
  <!-- THE LAMP. The only warm thing in the room, and it is on a screen. -->
  <circle cx="272" cy="118" r="26" fill="url(#hidLamp1)" opacity="0.5">
    <animate attributeName="opacity" values="0.34;0.56;0.34" dur="6.37s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="272" cy="118" r="2.6" fill="#F2C14E">
    <animate attributeName="opacity" values="0.72;1;0.72" dur="8.89s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <!-- scanline crawling down the big screen -->
  <rect x="150" y="24" width="200" height="16" fill="url(#hidScan1)">
    <animate attributeName="y" values="10;146" dur="5.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="5.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
<!-- HIS CHAIR, behind him. Seat, back, four legs, all reaching the floor. -->
` + hidChair(200, 214, 0, 252, { w: 62, d: 18, backH: 52, seat: '#333e52', seatEdge: '#46536b' }) + `
<!-- CANON. From behind: a back, a head, a chair. Two arms, two hands, both
     forward on the table where a man watching a screen puts them. -->
` + hidCanon(HID_HEAD, 200, 148, {
  reachL: [-32, 44], reachR: [34, 42], rotL: 168, rotR: -172
}) + `
<!-- THE SECOND CHAIR. Empty, angled toward him. It has been there a while. -->
` + hidChair(332, 208, -5, 252, { w: 48, d: 16, backH: 46 }) + `
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
<rect x="0" y="0" width="500" height="164" fill="#0d1526"/>
<rect x="0" y="0" width="500" height="164" fill="url(#hidWash2)"/>
<!-- Big screen pushed left and small; the table is the subject now -->
<rect x="38" y="12" width="158" height="96" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip2)">
  <rect x="42" y="16" width="150" height="88" fill="url(#hidBig2)"/>
  <path d="M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z" fill="#1d3f49" opacity="0.45">
    <animate attributeName="d" values="M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z;M42,53 Q80,49 117,53 Q154,57 192,53 L192,63 Q154,67 117,63 Q80,59 42,63Z;M42,50 Q80,46 117,50 Q154,54 192,50 L192,60 Q154,64 117,60 Q80,56 42,60Z" dur="10.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M70,100 Q86,84 118,81 L156,84 Q168,89 165,100 Z" fill="#08121a" opacity="0.9"/>
  <circle cx="140" cy="88" r="19" fill="url(#hidLamp2)" opacity="0.46">
    <animate attributeName="opacity" values="0.3;0.52;0.3" dur="8.33s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <rect x="42" y="16" width="150" height="14" fill="url(#hidScan2)">
    <animate attributeName="y" values="4;108" dur="8.65s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="8.65s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
  </rect>
</g>
<!-- Three small screens, right edge, different horizons -->
<rect x="416" y="14" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="34" width="52" height="12" fill="#16323a"/><rect x="418" y="33" width="52" height="1" fill="#3d5a75" opacity="0.5"/>
<rect x="416" y="54" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="68" width="52" height="18" fill="#16323a"/><rect x="418" y="67" width="52" height="1" fill="#3d5a75" opacity="0.45"/>
<rect x="416" y="94" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="418" y="115" width="52" height="11" fill="#16323a"/><rect x="418" y="114" width="52" height="1" fill="#3d5a75" opacity="0.4"/>
<!-- TABLE, large, angled front-on. Legs computed down to the floor: it used
     to be a top on a black void with nothing below it at all. -->
<rect x="0" y="230" width="500" height="30" fill="#0a121e"/>
` + hidTable(250, 164, 420, 252, { th: 10 }) + `
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
<!-- Canon: shoulder and back of head, entering frame at the left, cropped.
     The crop is the frame's decision, not the furniture's: the shoulder runs
     off the left edge and the arm reaches across to where the pencil went
     down. Head radius 18 here because the camera is closer, and nothing else
     about him changes. -->
<g transform="translate(58,168)">
  <path d="M-60,92 Q-52,26 -10,10 Q10,6 24,20 Q40,44 44,92 Z" fill="#05070e"/>
  <!-- the arm, with an elbow in it, reaching to the table -->
` + hidArm(18, 24, 22, 112, -20, -13) + `
  <circle cx="-2" cy="-4" r="18" fill="#05070e"/>
  <path d="M-20,-6 Q-14,-24 -2,-22 Q10,-24 16,-6" fill="#0b0f19"/>
  <path d="M-56,86 Q-48,32 -14,14" fill="none" stroke="#5fa0b8" stroke-width="5" opacity="0.2"/>
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
</g>
<!-- His hand, resting flat where the pencil was put down. Drawn AFTER the
     table and the pencil, so the hand closes on the surface rather than the
     arm lying across it. Sized off his head, not off the frame. -->
` + hidHand(18, 1, { x: 172, y: 150, rot: -150, grip: true }) + `
<!-- THE SECOND CHAIR. Big in frame. It has been there a while. -->
` + hidChair(398, 206, -6, 250, { w: 58, d: 20, backH: 56 }) + `
<!-- dust settled on the seat rail, the "a while" of it -->
<rect x="370" y="202" width="56" height="1.2" fill="#3d5a75" opacity="0.18"/>
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
  <circle cx="90" cy="180" r="1" fill="#5fa0b8" opacity="0"><animate attributeName="cy" values="180;40" dur="19.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0;0;0" dur="19.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <circle cx="180" cy="200" r="1.4" fill="#5fa0b8" opacity="0"><animate attributeName="cy" values="200;30" dur="27s" repeatCount="indefinite" begin="4s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.14;0.14;0" dur="27s" repeatCount="indefinite" begin="4s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <circle cx="330" cy="190" r="1" fill="#5fa0b8" opacity="0"><animate attributeName="cy" values="190;36" dur="27.12s" repeatCount="indefinite" begin="9s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.16;0.16;0" dur="27.12s" repeatCount="indefinite" begin="9s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <circle cx="410" cy="205" r="1.2" fill="#5fa0b8" opacity="0"><animate attributeName="cy" values="205;44" dur="27.3s" repeatCount="indefinite" begin="14s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.12;0.12;0" dur="27.3s" repeatCount="indefinite" begin="14s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <!-- water strata -->
  <path d="M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z" fill="#1d3f49" opacity="0.42">
    <animate attributeName="d" values="M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z;M34,70 Q140,62 250,70 Q360,78 466,70 L466,88 Q360,96 250,88 Q140,80 34,88Z;M34,66 Q140,58 250,66 Q360,74 466,66 L466,84 Q360,92 250,84 Q140,76 34,84Z" dur="15.24s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z" fill="#12262e" opacity="0.5">
    <animate attributeName="d" values="M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z;M34,122 Q150,115 250,122 Q350,129 466,122 L466,140 L34,140Z;M34,118 Q150,111 250,118 Q350,125 466,118 L466,136 L34,136Z" dur="11.76s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
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
    <animate attributeName="opacity" values="0.26;0.5;0.26" dur="8.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="344" cy="164" r="16" fill="url(#hidLamp3)" opacity="0.6">
    <animate attributeName="opacity" values="0.44;0.72;0.44" dur="9.52s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <ellipse cx="344" cy="164" rx="3.4" ry="4.4" fill="#F2C14E">
    <animate attributeName="opacity" values="0.78;1;0.78" dur="7.68s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </ellipse>
  <rect x="342.4" y="168" width="3.2" height="8" fill="#3a3a2a" opacity="0.7"/>
  <!-- scanline -->
  <rect x="34" y="12" width="432" height="26" fill="url(#hidScan3)">
    <animate attributeName="y" values="-6;212" dur="9.31s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="9.31s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
  </rect>
  <!-- screen curvature vignette -->
  <rect x="34" y="12" width="432" height="196" fill="url(#hidVig3)"/>
</g>
<!-- Canon, silhouette at the bottom edge, back to us. The arm goes UP to the
     screen with an elbow in it, and it ends in a hand: two fingers out of a
     loose fist, which is the gesture, rather than two sticks off a stump. -->
<g transform="translate(140,214)">
  <path d="M-52,46 Q-46,10 -8,0 Q10,-2 22,10 Q36,26 40,46 Z" fill="#03050a"/>
` + hidArm(17, 22, 12, 68, -28, 12, { fill: '#03050a' }) + `
` + hidHand(17, 1, { x: 68, y: -28, rot: 36, fill: '#03050a', rim: false }) + `
  <circle cx="0" cy="-16" r="17" fill="#03050a"/>
  <path d="M-17,-18 Q-11,-36 0,-34 Q11,-36 17,-18" fill="#080d18"/>
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
</g>
<!-- second chair, edge of frame, still empty -->
` + hidChair(452, 226, -5, 258, { w: 44, d: 14, backH: 44, seat: '#0e1521', seatEdge: '#39465c' }) + `
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
<rect x="0" y="0" width="500" height="196" fill="#0d1526"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash4)"/>
<rect x="0" y="196" width="500" height="64" fill="#080e1a"/>
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
  </path>
  <path d="M206,92 Q220,76 250,73 L288,76 Q300,81 297,92 Z" fill="#08121a" opacity="0.92"/>
  <circle cx="274" cy="80" r="17" fill="url(#hidLamp4)" opacity="0.46">
    <animate attributeName="opacity" values="0.3;0.54;0.3" dur="7.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="274" cy="80" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.72;1;0.72" dur="8.48s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="186" y="18" width="128" height="14" fill="url(#hidScan4)">
    <animate attributeName="y" values="6;98" dur="5.46s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="5.46s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
  <animateTransform attributeName="transform" type="rotate" values="-6;-2;-6" dur="6.35s" repeatCount="indefinite" additive="sum" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <rect x="-24" y="-3" width="46" height="7" rx="1.2" fill="#7a8296"/>
  <rect x="-24" y="-3" width="46" height="2" rx="1" fill="#8e96a8" opacity="0.6"/>
</g>
<!-- calculator -->
<g transform="translate(128,180)">
  <rect x="0" y="0" width="34" height="17" rx="2" fill="#46536b"/>
  <rect x="3" y="3" width="28" height="5.6" rx="1" fill="#16323a"/>
  <rect x="3" y="3" width="17" height="5.6" rx="1" fill="#2f4245" opacity="0.75"/>
</g>
<!-- HIS CHAIR, a real one: seat, back, four legs to the floor -->
` + hidChair(238, 210, 0, 253, { w: 68, d: 20, backH: 58, seat: '#333e52', seatEdge: '#46536b' }) + `
<!-- CANON from behind, centre, low. Head slightly down. Two arms: the left
     resting, the right out toward the cards without looking at them. -->
<g transform="translate(238,150)">
  <path d="M-30,96 Q-27,46 -13,32 Q0,25 13,32 Q27,46 30,96 Z" fill="#05070e"/>
` + hidArm(15, -22, 40, -44, 44, -8) + `
` + hidHand(15, -1, { x: -44, y: 44, rot: 172 }) + `
` + hidArm(15, 24, 40, 62, 42, 10) + `
` + hidHand(15, 1, { x: 62, y: 42, rot: -166, grip: true, rim: false }) + `
  <circle cx="1" cy="13" r="15" fill="#05070e"/>
  <path d="M-14,11 Q-10,-5 1,-3 Q12,-5 16,11" fill="#0b0f19"/>
  <rect x="-6" y="24" width="13" height="9" fill="#05070e"/>
  <path d="M-29,88 Q-26,48 -13,34" fill="none" stroke="#5fa0b8" stroke-width="4.4" opacity="0.22"/>
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
</g>
<!-- second chair, angled toward him -->
` + hidChair(360, 226, -5, 253, { w: 48, d: 16, backH: 48 }) + `
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
    <animate attributeName="d" values="M34,56 Q75,51 116,56 Q157,61 198,56 L198,68 Q157,73 116,68 Q75,63 34,68Z;M34,60 Q75,55 116,60 Q157,65 198,60 L198,72 Q157,77 116,72 Q75,67 34,72Z;M34,56 Q75,51 116,56 Q157,61 198,56 L198,68 Q157,73 116,68 Q75,63 34,68Z" dur="9.24s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M58,114 Q76,94 114,90 L162,94 Q176,100 172,114 Z" fill="#08121a" opacity="0.92"/>
  <circle cx="146" cy="98" r="22" fill="url(#hidLamp5)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.52;0.3" dur="8.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="146" cy="98" r="2.2" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.74" dur="9.52s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="34" y="18" width="164" height="16" fill="url(#hidScan5)">
    <animate attributeName="y" values="4;120" dur="6.24s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="6.24s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
  </rect>
</g>
<!-- small screens, right stack -->
<rect x="418" y="16" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="38" width="52" height="10" fill="#16323a"/><rect x="420" y="37" width="52" height="1" fill="#3d5a75" opacity="0.5"/>
<rect x="418" y="56" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="72" width="52" height="16" fill="#16323a"/><rect x="420" y="71" width="52" height="1" fill="#3d5a75" opacity="0.44"/>
<rect x="418" y="96" width="56" height="34" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
<rect x="420" y="118" width="52" height="10" fill="#16323a"/><rect x="420" y="117" width="52" height="1" fill="#3d5a75" opacity="0.4"/>
<!-- table. One plane, not two: the papers used to straddle a seam where a
     second lighter rect ran behind at a different height. -->
` + hidTable(250, 200, 360, 253, { th: 9 }) + `
<rect x="126" y="192" width="48" height="2.8" rx="1.4" fill="#F2C14E" opacity="0.85"/>
<rect x="172" y="192" width="4.5" height="2.8" rx="1" fill="#525f79"/>
<g transform="translate(330,182)">
  <rect x="0" y="12" width="52" height="7" rx="1.2" fill="#4a5162"/>
  <rect x="1" y="5" width="52" height="7" rx="1.2" fill="#5a6275"/>
  <rect x="0" y="-1" width="52" height="7" rx="1.2" fill="#687084"/>
</g>
<!-- HIS CHAIR, seen from the side because he has swivelled in it. Same
     helper, turned: a seat, a back, and four legs on the floor. -->
` + hidChair(262, 216, 8, 253, { w: 56, d: 20, backH: 54, seat: '#333e52', seatEdge: '#46536b' }) + `
<!-- CANON, TURNED. Three-quarters away. We get the far side of a jaw and a
     temple in silhouette and nothing else. Still no face. -->
<g transform="translate(258,148)">
  <!-- torso turned: the shoulder line runs away from us -->
  <path d="M-34,96 Q-34,48 -20,34 Q-6,26 10,32 Q28,44 34,96 Z" fill="#05070e"/>
  <path d="M-22,44 Q-4,36 14,44" fill="none" stroke="#1a2334" stroke-width="1" opacity="0.6"/>
  <!-- the near arm, laid along the table: upper arm, elbow, forearm, hand
       open on the wood, not holding anything -->
` + hidArm(15, -26, 40, -76, 44, 8) + `
` + hidHand(15, -1, { x: -76, y: 44, rot: -102 }) + `
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
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
  </g>
  <rect x="-14" y="24" width="14" height="10" fill="#05070e"/>
  <path d="M-32,88 Q-32,50 -20,36" fill="none" stroke="#5fa0b8" stroke-width="4.4" opacity="0.22"/>
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
</g>
<!-- second chair, and he is turned toward it -->
` + hidChair(392, 228, -7, 253, { w: 48, d: 16, backH: 48 }) + `
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
<rect x="0" y="0" width="500" height="196" fill="#0d1526"/>
<rect x="0" y="0" width="500" height="196" fill="url(#hidWash6)"/>
<rect x="0" y="196" width="500" height="64" fill="#080e1a"/>
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
    <animate attributeName="d" values="M150,46 Q200,42 250,46 Q300,50 350,46 L350,54 Q300,58 250,54 Q200,50 150,54Z;M150,49 Q200,45 250,49 Q300,53 350,49 L350,57 Q300,61 250,57 Q200,53 150,57Z;M150,46 Q200,42 250,46 Q300,50 350,46 L350,54 Q300,58 250,54 Q200,50 150,54Z" dur="11.97s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <!-- the boat, tiny, a hull and a mast, twelve years ago -->
  <g transform="translate(244,42)"><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" dur="7.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
    <path d="M-14,0 Q-11,4 -4,5 L8,5 Q14,4 15,0 Z" fill="#0b1a22"/>
    <rect x="-1" y="-14" width="1.6" height="14" fill="#0b1a22"/>
    <path d="M0.6,-14 L8,-8 L0.6,-6 Z" fill="#0b1a22" opacity="0.85"/>
  </g>
  <path d="M164,140 Q182,120 216,116 L294,118 Q320,124 318,140 Z" fill="#08121a" opacity="0.9"/>
  <circle cx="278" cy="126" r="21" fill="url(#hidLamp6)" opacity="0.4">
    <animate attributeName="opacity" values="0.26;0.48;0.26" dur="8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="278" cy="126" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.7;1;0.7" dur="9.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <!-- a rope, doubled, trailing down from the boat: same cleat, both of them -->
  <path d="M240,47 Q236,78 244,112" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.35"/>
  <path d="M248,47 Q252,78 246,112" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.28"/>
  <rect x="150" y="22" width="200" height="16" fill="url(#hidScan6)">
    <animate attributeName="y" values="8;144" dur="5.46s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="5.46s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
<!-- HIS CHAIR, behind him -->
` + hidChair(200, 214, 0, 252, { w: 62, d: 18, backH: 52, seat: '#333e52', seatEdge: '#46536b' }) + `
<!-- Canon from behind, hands forward on the table as in hidden_1 -->
` + hidCanon(HID_HEAD, 200, 148, {
  reachL: [-32, 44], reachR: [34, 42], rotL: 168, rotR: -172
}) + `
<!-- second chair -->
` + hidChair(332, 208, -5, 252, { w: 48, d: 16, backH: 46 }) + `
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

<!-- THE DRAWER OF A MAN WHO COAXES SOMETHING SMALL OUT FROM UNDER A FLOOR.
     It read as paraphernalia before: three bright spoons with hard speculars,
     a tight white coil, a jar of short white sticks. Nothing in it said what
     it was for. What it is for is BAIT ,  for a small, harmless animal that
     lives under the boards and will come out for food and not for anything
     else. So: seed, a heel of bread, a saucer, a soft cloth to line a box
     with, and ONE spoon, being used as a scoop.
     Everything is warm-toned and soft-edged. Nothing in here is sharp. -->

<!-- 1. THE TIN OF SEED, open, tipped slightly, spilling. The biggest thing in
     the drawer and the first thing read. -->
<g transform="translate(140,132)">
  <ellipse cx="4" cy="46" rx="62" ry="12" fill="#1e2820" opacity="0.55"/>
  <!-- the body of the tin -->
  <path d="M-52,-26 L52,-26 L44,42 Q0,50 -44,42 Z" fill="#7a6a44"/>
  <path d="M-52,-26 L-30,-26 L-26,42 Q-36,44 -44,42 Z" fill="#93815a" opacity="0.7"/>
  <!-- the open mouth, an ellipse so it is plainly a container -->
  <ellipse cx="0" cy="-26" rx="52" ry="14" fill="#5c4f30"/>
  <ellipse cx="0" cy="-26" rx="52" ry="14" fill="none" stroke="#a08a5c" stroke-width="2.4"/>
  <!-- seed filling it, heaped above the rim -->
  <path d="M-46,-26 Q-24,-40 0,-38 Q26,-40 46,-26 Q24,-18 0,-17 Q-24,-18 -46,-26 Z" fill="#c9a961"/>
  <g fill="#e0c07a" opacity="0.85">
    <ellipse cx="-28" cy="-30" rx="3" ry="2" transform="rotate(24,-28,-30)"/>
    <ellipse cx="-14" cy="-33" rx="3.2" ry="2.1" transform="rotate(-16,-14,-33)"/>
    <ellipse cx="2" cy="-34" rx="3" ry="2" transform="rotate(48,2,-34)"/>
    <ellipse cx="17" cy="-32" rx="3.2" ry="2.1" transform="rotate(-38,17,-32)"/>
    <ellipse cx="31" cy="-29" rx="3" ry="2" transform="rotate(12,31,-29)"/>
    <ellipse cx="-20" cy="-25" rx="2.8" ry="1.9" transform="rotate(-62,-20,-25)"/>
    <ellipse cx="10" cy="-25" rx="2.8" ry="1.9" transform="rotate(30,10,-25)"/>
  </g>
  <!-- a scatter of it that has got out onto the drawer floor -->
  <g fill="#c9a961" opacity="0.75">
    <ellipse cx="62" cy="30" rx="3" ry="2" transform="rotate(18,62,30)"/>
    <ellipse cx="74" cy="38" rx="3.2" ry="2.1" transform="rotate(-28,74,38)"/>
    <ellipse cx="58" cy="44" rx="2.8" ry="1.9" transform="rotate(52,58,44)"/>
    <ellipse cx="86" cy="30" rx="2.9" ry="1.9" transform="rotate(-8,86,30)"/>
    <ellipse cx="70" cy="52" rx="3" ry="2" transform="rotate(38,70,52)"/>
    <ellipse cx="-64" cy="40" rx="3" ry="2" transform="rotate(-44,-64,40)"/>
    <ellipse cx="-76" cy="34" rx="2.8" ry="1.9" transform="rotate(20,-76,34)"/>
  </g>
</g>

<!-- 2. THE SPOON, ONE of them, lying in the seed as a SCOOP. This is the
     Sounding Spoon before it was beaten flat, and it is doing the ordinary
     job a spoon does. Warm metal, soft highlight, not a lure. -->
<g transform="translate(228,104) rotate(28)">
  <ellipse cx="0" cy="0" rx="20" ry="13" fill="#4a4436"/>
  <ellipse cx="0" cy="-1" rx="19" ry="12" fill="#a09274"/>
  <ellipse cx="1" cy="1" rx="13" ry="7.5" fill="#6f6650" opacity="0.55"/>
  <path d="M-16,-6 Q-19,0 -15,6" fill="none" stroke="#d8cba8" stroke-width="1.8" opacity="0.6" stroke-linecap="round"/>
  <rect x="17" y="-2.6" width="58" height="5.2" rx="2.6" fill="#8e8266"/>
  <rect x="17" y="-2.6" width="58" height="1.6" rx="0.8" fill="#c4b691" opacity="0.6"/>
</g>

<!-- 3. THE HEEL OF BREAD, on a saucer. Domestic, soft, unmistakable. -->
<g transform="translate(316,178)">
  <ellipse cx="0" cy="16" rx="44" ry="10" fill="#1e2820" opacity="0.5"/>
  <ellipse cx="0" cy="10" rx="42" ry="13" fill="#8d97a4"/>
  <ellipse cx="0" cy="8" rx="35" ry="10" fill="#b0b9c5"/>
  <ellipse cx="0" cy="8" rx="24" ry="6.5" fill="#98a2af" opacity="0.6"/>
  <!-- the crust: a wedge with a soft crumb face turned up -->
  <path d="M-24,4 Q-20,-18 -2,-22 Q18,-24 24,-8 Q26,2 20,7 Q-2,12 -24,4 Z" fill="#8a6634"/>
  <path d="M-19,2 Q-15,-14 -1,-17 Q14,-19 19,-7 Q20,0 16,4 Q-2,8 -19,2 Z" fill="#d8bb85"/>
  <g fill="#c2a271" opacity="0.7">
    <ellipse cx="-8" cy="-6" rx="3" ry="2.2"/><ellipse cx="4" cy="-9" rx="2.6" ry="1.9"/>
    <ellipse cx="9" cy="-2" rx="2.4" ry="1.8"/><ellipse cx="-2" cy="0" rx="2.8" ry="2"/>
  </g>
  <!-- crumbs on the saucer -->
  <g fill="#c2a271" opacity="0.8">
    <ellipse cx="27" cy="9" rx="2.4" ry="1.7"/><ellipse cx="-29" cy="11" rx="2.2" ry="1.6"/>
    <ellipse cx="33" cy="4" rx="1.8" ry="1.3"/>
  </g>
</g>

<!-- 4. THE FOLDED CLOTH, to line a box with so the thing has somewhere warm.
     Soft, thick, and it drapes: the only thing in the drawer with a fold. -->
<g transform="translate(400,86)">
  <ellipse cx="0" cy="34" rx="46" ry="10" fill="#1e2820" opacity="0.45"/>
  <path d="M-44,28 Q-46,4 -38,-6 Q-4,-16 38,-8 Q46,2 44,28 Q0,38 -44,28 Z" fill="#5c6b7a"/>
  <path d="M-38,14 Q0,4 38,12" fill="none" stroke="#78889a" stroke-width="3" opacity="0.7"/>
  <path d="M-40,22 Q0,12 40,20" fill="none" stroke="#48545f" stroke-width="2.4" opacity="0.6"/>
  <path d="M-36,-2 Q-2,-11 34,-4" fill="none" stroke="#78889a" stroke-width="2.6" opacity="0.55"/>
</g>

<!-- the room light moving very slightly over the drawer floor, so the shot
     is not a photograph. One slow loop, nothing else. -->
<ellipse cx="250" cy="140" rx="200" ry="76" fill="#5fa0b8" opacity="0.03">
  <animate attributeName="opacity" values="0.02;0.06;0.02" dur="9.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- 5. A LENGTH OF SOFT STRING, coiled loose. Not taut, not wire: three easy
     turns and an end lying where it fell. -->
<g transform="translate(126,214)">
  <g fill="none" stroke="#a89878" stroke-width="2.6" opacity="0.7" stroke-linecap="round">
    <path d="M-34,0 Q-18,-11 2,-8 Q22,-5 30,4"/>
    <path d="M-28,7 Q-12,-3 8,-1 Q26,1 34,9"/>
  </g>
  <path d="M34,9 Q56,16 76,10" fill="none" stroke="#a89878" stroke-width="2.2" opacity="0.55" stroke-linecap="round"/>
</g>

<!-- HIS HAND on the drawer edge, with a WRIST and a forearm running up out of
     frame, so it belongs to a man rather than entering as a blob. Sized off
     his head (r=18 at this camera), not off the drawer: it was 2.5 head
     diameters wide before. -->
<g transform="translate(150,4)">
` + hidArm(20, -4, -30, 6, 34, 6) + `
` + hidHand(20, 1, { x: 6, y: 36, rot: 172, grip: true }) + `
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
  <!-- rim stroke removed: it ran INSIDE the silhouette and read as a tear -->
</g>
<!-- THE LINE. One clear unbroken run from the fingers to the handle hole.
     It swings a little, and the whole tool swings with it. -->
<g transform="translate(250,58)">
  <animateTransform attributeName="transform" type="rotate" values="-2.2;2.2;-2.2" dur="6.99s" repeatCount="indefinite" additive="sum" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <!-- the line itself: bright, thin, unmistakably a line -->
  <line x1="0" y1="-4" x2="-1" y2="66" stroke="#0a121e" stroke-width="3" opacity="0.5"/>
  <line x1="0" y1="-4" x2="-1" y2="66" stroke="#dfe7f0" stroke-width="1.4" opacity="0.9"/>
  <!-- the knot, tied through the hole in the beaten handle -->
  <ellipse cx="-1.4" cy="70" rx="4.4" ry="3.4" fill="none" stroke="#dfe7f0" stroke-width="1.6" opacity="0.85"/>
  <path d="M-5.4,68 Q-1.4,72 2.6,69" fill="none" stroke="#dfe7f0" stroke-width="1.2" opacity="0.7"/>
  <!-- the cut tail of the line, left long because he did not trim it -->
  <path d="M1,72 Q9,80 7,90" fill="none" stroke="#dfe7f0" stroke-width="1" opacity="0.55"/>

    <!-- THE SOUNDING FORK. Two prongs bent from a brass curtain rod and filed
       until they agree, a shoulder, a stem, and a flat foot you set against
       a plank. It hangs from the line at a slight rake.

       This replaced a beaten spoon, which never read: at this size a spoon
       is an oval on a string, and it came out as a bell, a bathysphere and
       a blob across three passes. A fork cannot be mistaken for anything. -->
  <g transform="rotate(9)">
    <!-- the two prongs -->
    <path d="M-17,74 L-17,150" stroke="#8a6d2c" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M17,74 L17,150" stroke="#8a6d2c" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M-17,74 L-17,150" stroke="#c9a24a" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M17,74 L17,150" stroke="#c9a24a" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- the shoulder the prongs spring from, one continuous bend -->
    <path d="M-21,148 Q0,182 21,148" stroke="#8a6d2c" stroke-width="11" fill="none"/>
    <path d="M-21,148 Q0,180 21,148" stroke="#c9a24a" stroke-width="8" fill="none"/>
    <!-- stem, and the flat foot that goes against the wood -->
    <rect x="-4.6" y="172" width="9.2" height="26" rx="1.6" fill="#b08e3c"/>
    <rect x="-4.6" y="172" width="3.2" height="26" fill="#d8b45e" opacity="0.7"/>
    <rect x="-12" y="196" width="24" height="7" rx="2.6" fill="#8a6d2c"/>
    <rect x="-12" y="196" width="24" height="2.4" rx="1.2" fill="#d8b45e" opacity="0.6"/>
    <!-- one unbroken specular down the near prong, so the brass reads as
         metal rather than as a painted bar -->
    <path d="M-19.4,80 L-19.4,144" stroke="#f0dca4" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
    <path d="M14.6,80 L14.6,144" stroke="#f0dca4" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.5"/>
    <!-- file marks near the tips, where he took metal off to tune it -->
    <g stroke="#6d5423" stroke-width="1.1" opacity="0.5">
      <path d="M-21,88 h8"/><path d="M-21,94 h8"/><path d="M13,86 h8"/><path d="M13,92 h8"/>
    </g>
    <!-- the drilled hole at the top of the near prong, where the line knots -->
    <ellipse cx="-17" cy="80" rx="2.4" ry="3" fill="#3a2c10"/>
    <!-- the prongs ring: a small, slow lean apart and back. Eased, and the
         two sides use different durations so they do not move as one bar. -->
    <animateTransform attributeName="transform" type="rotate" values="9;10.4;9"
      dur="4.4s" repeatCount="indefinite" calcMode="spline"
      keyTimes="0;0.42;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
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
  <animate attributeName="rx" values="40;96" dur="3.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
  <animate attributeName="ry" values="11;26" dur="4.28s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
  <animate attributeName="opacity" values="0.3;0" dur="4.76s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
</ellipse>
<ellipse cx="292" cy="250" rx="52" ry="14" fill="none" stroke="#9fd4e4" stroke-width="1.2" opacity="0.2">
  <animate attributeName="rx" values="40;96" dur="3.84s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
  <animate attributeName="ry" values="11;26" dur="5.32s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
  <animate attributeName="opacity" values="0.25;0" dur="3.52s" repeatCount="indefinite" begin="2s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
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
  <!-- The clue, pencil grey, written by hand. Canon does not give the answer. -->
  <text x="-2" y="-8" text-anchor="middle" font-family="'Courier New',monospace" font-size="12" fill="#4a5770" opacity="0.9">Infamous clue setter</text>
  <text x="-2" y="7" text-anchor="middle" font-family="'Courier New',monospace" font-size="12" fill="#4a5770" opacity="0.9">mail returned (4)</text>
  <line x1="-40" y1="18" x2="36" y2="18" stroke="#4c5468" stroke-width="0.7" opacity="0.5"/>
  <text x="-2" y="31" text-anchor="middle" font-family="'Courier New',monospace" font-size="8.5" fill="#5b6377" opacity="0.75">TYPE IT INTO THE TERMINAL</text>
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
<!-- the screenlight in the room shifting, very slightly -->
<ellipse cx="250" cy="130" rx="250" ry="110" fill="#5fa0b8" opacity="0.02">
  <animate attributeName="opacity" values="0.012;0.042;0.012" dur="12.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
</svg>`;

// Scene 10: Back up into the square. The grate behind him, the fountain sound
// released mid-splash — the water is animating again, which scene 0 refused to do.
STORY_SCENES['hidden_10'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>` + hidFountainDefs('10', true) + `
  <linearGradient id="hidSky10" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a1224"/><stop offset="52%" stop-color="#1a2a42"/><stop offset="100%" stop-color="#2e405a"/>
  </linearGradient>
  <radialGradient id="hidMist10" cx="50%" cy="60%" r="34%">
    <stop offset="0%" stop-color="#7fb4c8" stop-opacity="0.16"/><stop offset="100%" stop-color="#7fb4c8" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidSky10)"/>
<!-- FAR PLANE: the same square, one beat later and a shade warmer -->
<rect x="0" y="50" width="64" height="122" rx="2" fill="#16203a" opacity="0.9"/>
<rect x="60" y="38" width="52" height="134" rx="2" fill="#121a30" opacity="0.9"/>
<rect x="390" y="44" width="58" height="128" rx="2" fill="#16203a" opacity="0.9"/>
<rect x="444" y="34" width="56" height="138" rx="2" fill="#121a30" opacity="0.9"/>
<rect x="12" y="68" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.28"/>
<rect x="38" y="68" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.2"/>
<rect x="404" y="62" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.24"/>
<rect x="460" y="54" width="10" height="12" rx="1" fill="#5fa0b8" opacity="0.18"/>
<!-- the same two lanterns, in the same place -->
<rect x="118" y="128" width="4" height="44" fill="#28303f"/>
<rect x="112" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="114" y="120" width="12" height="9" rx="1" fill="#5fa0b8" opacity="0.4"/>
<rect x="378" y="128" width="4" height="44" fill="#28303f"/>
<rect x="372" y="118" width="16" height="13" rx="2" fill="#303a4c"/>
<rect x="374" y="120" width="12" height="9" rx="1" fill="#5fa0b8" opacity="0.36"/>
<!-- MID PLANE: cobbles -->
<rect x="0" y="170" width="500" height="90" fill="#18202e"/>
<ellipse cx="72" cy="200" rx="15" ry="6" fill="#202839" opacity="0.6"/>
<ellipse cx="150" cy="224" rx="13" ry="5" fill="#1e2534" opacity="0.5"/>
<ellipse cx="358" cy="206" rx="14" ry="6" fill="#202839" opacity="0.55"/>
<ellipse cx="432" cy="234" rx="13" ry="5" fill="#1e2534" opacity="0.45"/>
<ellipse cx="110" cy="248" rx="12" ry="5" fill="#202839" opacity="0.4"/>
<!-- THE SAME FOUNTAIN, lit from within: the held note released. -->
` + hidFountain('10', 250, 180, { lit: true }) + `
<!-- the jet, running higher than it was, and a drop falling back off it -->
<line x1="250" y1="128" x2="250" y2="102" stroke="url(#hidWat10)" stroke-width="2.4" opacity="0.8">` + hidAnim('opacity', '0.52;0.9;0.52', '2.9s') + `</line>
<circle cx="250" cy="100" r="2.2" fill="#9fd0e0" opacity="0">` + hidAnim('cy', '100;124;150', '2.3s', { curve: HID_EASE_IN }) + hidAnim('opacity', '0;0.7;0', '2.3s') + `</circle>
<circle cx="256" cy="104" r="1.5" fill="#9fd0e0" opacity="0">` + hidAnim('cy', '104;128;152', '3.1s', { begin: '-1.4s', curve: HID_EASE_IN }) + hidAnim('opacity', '0;0.55;0', '3.1s', { begin: '-1.4s' }) + `</circle>
<ellipse cx="250" cy="166" rx="62" ry="26" fill="url(#hidMist10)"/>
<!-- NEAR PLANE: the same hatch, shut again. Nothing marks it. -->
` + hidHatch(250, 229, false, '10') + `
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
<!-- THE ARTIFACT: A CHILD'S SHOE, off one foot, come up on Scramble Shores.
     It was a rope end before and it did not read: a warm brown tapered club
     with a bulbous end, which looked like a baguette. This is small, domestic,
     and exactly the kind of thing a crossing sheds ,  and the LACES ARE
     DOUBLE-KNOTTED, one knot laid over another, which is the beat: a fourteen
     year old who was told to do it twice and did it twice.
     Small in frame on purpose. It is a child's shoe; it should look like one. -->
<g transform="translate(238,186) rotate(-3)">
  <!-- cast shadow, so it sits ON the table -->
  <ellipse cx="2" cy="26" rx="80" ry="10" fill="#101a26" opacity="0.42"/>
  <!-- SOLE: a thin slab, and the shoe's whole length. Thin, because a thick
       one turns the silhouette into a loaf. -->
  <path d="M-70,20 Q-76,10 -66,7 L62,4 Q78,5 79,12 Q79,20 64,22 L-58,25 Q-68,25 -70,20 Z" fill="#241f1a"/>
  <path d="M-68,13 L77,8" fill="none" stroke="#5a5147" stroke-width="2" opacity="0.75"/>
  <!-- HEEL BLOCK, a clear step up at the back: this is what says SHOE. -->
  <path d="M-70,20 L-70,7 L-44,6 L-44,22 Z" fill="#2f2822"/>
  <!-- HEEL COUNTER, rising steeply, then the INSTEP DIPPING sharply, then the
       toe box swelling low and forward. Three moves, not one arc. -->
  <path d="M-66,7 Q-70,-26 -54,-32 Q-40,-36 -30,-28 Q-24,-22 -22,-12
           Q-6,-18 14,-16 Q42,-13 62,0 Q72,5 72,9 L62,4 Z" fill="#6b4f33"/>
  <!-- the toe cap, a separate lighter panel, low and rounded -->
  <path d="M20,-15 Q46,-12 63,0 Q72,5 72,9 L30,7 Q28,-4 20,-15 Z" fill="#82603d"/>
  <path d="M46,-4 Q58,0 66,6" fill="none" stroke="#9d7b50" stroke-width="2.4" opacity="0.5" stroke-linecap="round"/>
  <!-- the heel counter panel, darker, so the back reads as a separate piece -->
  <path d="M-66,7 Q-70,-26 -54,-32 L-44,-29 Q-54,-20 -52,7 Z" fill="#4a351f"/>
  <!-- THE OPEN THROAT: a dark V between the counter and the toe box. This is
       the negative space that makes a shoe a shoe. -->
  <path d="M-30,-28 Q-24,-22 -22,-12 Q-6,-18 14,-16 L18,-11
           Q-4,-8 -20,-6 Q-30,-10 -32,-22 Z" fill="#15100a"/>
  <!-- the tongue, sitting up inside the throat -->
  <path d="M-28,-26 Q-16,-31 -2,-27 L2,-20 Q-14,-16 -26,-15 Z" fill="#8a6a45"/>
  <path d="M-26,-24 Q-16,-28 -4,-25" fill="none" stroke="#a3835c" stroke-width="1.4" opacity="0.6"/>
  <!-- EYELETS, four a side along the two edges of the throat -->
  <g fill="#a8834a">
    <circle cx="-24" cy="-19" r="1.9"/><circle cx="-13" cy="-21" r="1.9"/>
    <circle cx="-1" cy="-21" r="1.9"/><circle cx="10" cy="-18" r="1.9"/>
  </g>
  <!-- THE LACES, crossed through them -->
  <g fill="none" stroke="#d8cdb8" stroke-width="2.2" stroke-linecap="round" opacity="0.9">
    <path d="M-24,-19 L-13,-21"/><path d="M-13,-21 L-1,-21"/><path d="M-1,-21 L10,-18"/>
    <path d="M-24,-21 Q-18,-25 -13,-23"/><path d="M-13,-23 Q-7,-26 -1,-24"/>
  </g>
  <!-- THE DOUBLE KNOT, sitting proud on the instep. Two bows, the second tied
       over the first, the lower one's loops still showing under the upper.
       This is the beat, and it is the brightest thing in the frame. -->
  <g transform="translate(-7,-28)">
    <path d="M-8,3 Q-14,-1 -11,-6 Q-7,-9 -3,-5" fill="none" stroke="#b0a48c" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M7,3 Q14,-1 11,-6 Q7,-9 3,-5" fill="none" stroke="#b0a48c" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M-5,0 Q-15,-6 -10,-12 Q-4,-16 0,-9" fill="none" stroke="#e8dfc9" stroke-width="3" stroke-linecap="round"/>
    <path d="M5,0 Q15,-6 10,-12 Q4,-16 0,-9" fill="none" stroke="#e8dfc9" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="0" cy="-3" rx="4.8" ry="4" fill="#c9bda3"/>
    <ellipse cx="0" cy="-4" rx="2.6" ry="2.1" fill="#8a7f68"/>
    <path d="M-3,1 Q-8,9 -13,13" fill="none" stroke="#d8cdb8" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M3,1 Q6,10 4,17" fill="none" stroke="#d8cdb8" stroke-width="2" stroke-linecap="round"/>
  </g>
  <!-- SAND still in the welt and dried on the toe: it came off a beach -->
  <g fill="#e8e2d0">
    <circle cx="-50" cy="16" r="1.3" opacity="0.5"/><circle cx="-28" cy="18" r="1" opacity="0.4"/>
    <circle cx="6" cy="15" r="1.1" opacity="0.44"/><circle cx="38" cy="11" r="1.2" opacity="0.38"/>
    <circle cx="56" cy="2" r="1" opacity="0.34"/><circle cx="-46" cy="-16" r="0.9" opacity="0.3"/>
  </g>
  <!-- a tidemark: the waterline it dried at -->
  <path d="M-62,-2 Q-18,-8 50,-4" fill="none" stroke="#9c8560" stroke-width="1.5" opacity="0.38"/>
</g>
<!-- NO HAND IN THIS FRAME, DELIBERATELY.
     The shot is the shoe and the double knot, and it kept losing that fight.
     The original drew a single 8-point black path 112 units wide against a
     28-unit head, which is 4.0 head-diameters. The repair replaced it with a
     real hand and then made the SAME mistake again at r = 26, nearly twice
     Canon's own head, with a forearm running a third of the frame: a black
     bar crossing the pencil and out-massing the object the scene is about.
     Sizing it correctly off the head fixed the hand and left the arm still
     dominating the composition.
     So the arm is cropped out. Cropping by the frame edge is a camera
     decision; there is no rule that every shot must contain a figure, and a
     still life of the artifact is what this beat actually is. His hands are
     in m2 through m5, at head scale, where they have something to do. -->
<!-- the light on the table shifting, slowly. He has not moved; the room has. -->
<ellipse cx="250" cy="190" rx="240" ry="66" fill="#9fd4e4" opacity="0.02">
  <animate attributeName="opacity" values="0.015;0.05;0.015" dur="11.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
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
  <path d="M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z" fill="#2b6070" opacity="0.5">
    <animate attributeName="d" values="M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z;M112,70 Q180,64 250,70 Q320,76 388,70 L388,84 Q320,90 250,84 Q180,78 112,84Z;M112,66 Q180,60 250,66 Q320,72 388,66 L388,80 Q320,86 250,80 Q180,74 112,80Z" dur="11s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M142,172 Q164,138 220,132 L316,136 Q356,144 352,172 Z" fill="#061019" opacity="0.95"/>
  <path d="M226,132 L218,86 L232,84 L240,132Z" fill="#061019" opacity="0.9"/>
  <circle cx="312" cy="146" r="34" fill="url(#hidLampM2)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.55;0.3" dur="9.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="312" cy="146" r="2.8" fill="#F2C14E"><animate attributeName="opacity" values="0.76;1;0.76" dur="7.28s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="112" y="20" width="276" height="22" fill="url(#hidScanM2)">
    <animate attributeName="y" values="2;176" dur="8.26s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="8.26s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
  <animate attributeName="opacity" values="0.46;0.68;0.46" dur="5.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- His hand and forearm holding the lens up, from below left. No head, no
     face. The forearm was a 28-wide stroke against a 30-wide head, so it was
     as thick as his skull, and the hand on the end of it was a blob with two
     stubs. Both go through the helpers now, sized off the head. -->
` + hidArm(HID_HEAD * 1.25, 232, 272, 292, 176, -22, { rim: true }) + `
` + hidHand(HID_HEAD * 1.25, 1, { x: 294, y: 172, rot: -18, grip: true }) + `
<g transform="translate(268,154)">
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
<!-- His hand at the lifted card. Nothing tense about it. It was a black blob
     with two stubs, and the pencil passed straight through the palm and out
     the far side; the hand goes through hidHand() now and the pencil is drawn
     BEFORE it, so the fingers close over the shaft. -->
` + hidArm(HID_HEAD * 1.25, 498, 200, 436, 132, -18) + `
` + hidHand(HID_HEAD * 1.25, 1, { x: 434, y: 130, rot: 150, grip: true }) + `
<!-- THE PENCIL. Still exactly parallel. He has not dropped it. Not yet. -->
<rect x="56" y="238" width="118" height="4.6" rx="2.3" fill="#F2C14E" opacity="0.9"/>
<rect x="170" y="238" width="7" height="4.6" rx="1.6" fill="#525f79"/>
<polygon points="56,238 44,240.3 56,242.6" fill="#6d7b96"/>
<ellipse cx="114" cy="244" rx="70" ry="5" fill="#F2C14E" opacity="0.07"/>
<!-- the lamp over the table, breathing. He is reading; nothing else moves. -->
<ellipse cx="250" cy="150" rx="230" ry="90" fill="#F2C14E" opacity="0.02">
  <animate attributeName="opacity" values="0.015;0.045;0.015" dur="8.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
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
  <animateTransform attributeName="transform" type="rotate" values="0;13.4;10.2;11" dur="4.6s" fill="freeze" additive="sum" calcMode="spline" keyTimes="0;0.42;0.72;1" keySplines="0.42 0 0.58 1;0 0 0.58 1;0 0 0.58 1"/>
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
<!-- His hand on the rim, stopped turning it. It was a featureless black
     teardrop lying across the lower third of the compass, so the hand hid the
     bearing, which is the subject of the shot. It is a hand on the RIM now:
     off to the side, fingers on the edge, and the face of the compass clear. -->
` + hidArm(HID_HEAD * 1.25, 84, 272, 176, 214, 22) + `
` + hidHand(HID_HEAD * 1.25, 1, { x: 180, y: 210, rot: 74, grip: true }) + `
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
  <rect x="322" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="325" y="11" width="46" height="28" fill="#16323a"/><rect x="325" y="32" width="46" height="7" fill="#1d3f49"/><rect x="325" y="31" width="46" height="1.3" fill="#7fc4d8" opacity="0.5"/>
  <rect x="380" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="383" y="11" width="46" height="28" fill="#16323a"/><rect x="383" y="26" width="46" height="13" fill="#1d3f49"/><rect x="383" y="25" width="46" height="1.3" fill="#7fc4d8" opacity="0.44"/>
  <rect x="438" y="8" width="52" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="441" y="11" width="46" height="28" fill="#16323a"/><rect x="441" y="22" width="46" height="17" fill="#1d3f49"/><rect x="441" y="21" width="46" height="1.3" fill="#7fc4d8" opacity="0.4"/>
  <!-- and the ninth, narrow between them: water, and the lamp -->
  <rect x="242" y="8" width="18" height="34" rx="2" fill="#1e2637" stroke="#4a5770" stroke-width="1.4"/>
  <rect x="244" y="11" width="14" height="28" fill="#16323a"/>
  <circle cx="251" cy="31" r="1.8" fill="#F2C14E"><animate attributeName="opacity" values="0.55;1;0.55" dur="8.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="10" y="8" width="480" height="7" fill="url(#hidScanM5)">
    <animate attributeName="y" values="2;42" dur="10.71s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="10.71s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
<!-- His hands: put it down, and let go. Both, open, withdrawing. They were
     two black teardrops with no fingers, no wrists and no arms attached to
     anything. Open hands are the whole point of the beat, so they have to be
     legible AS hands: both go through hidHand(), open rather than gripping,
     with the arms running off the near edge of the table. -->
` + hidArm(HID_HEAD * 1.25, 8, 268, 150, 220, -16) + `
` + hidHand(HID_HEAD * 1.25, 1, { x: 154, y: 218, rot: 96 }) + `
` + hidArm(HID_HEAD * 1.25, 492, 268, 350, 220, 16) + `
` + hidHand(HID_HEAD * 1.25, -1, { x: 346, y: 218, rot: -96 }) + `
<g transform="translate(412,206) scale(-1,1)">
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
  <rect x="164" y="10" width="172" height="12" fill="url(#hidScanE0)"><animate attributeName="y" values="0;76" dur="5.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;1;1;0" dur="5.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></rect>
  <clipPath id="hidBigClipE0"><rect x="164" y="10" width="172" height="62" rx="3"/></clipPath>
</defs>
<rect width="500" height="260" fill="url(#hidRoomE0)"/>
<!-- the big screen up top, the wreck still on it -->
<rect x="160" y="6" width="180" height="70" rx="3" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClipE0)">
  <rect x="164" y="10" width="172" height="62" fill="#1d3f49"/>
  <path d="M164,32 Q206,28 250,32 Q294,36 336,32 L336,42 Q294,46 250,42 Q206,38 164,42Z" fill="#2b6070" opacity="0.5"/>
  <path d="M182,72 Q196,56 226,53 L296,56 Q312,62 310,72 Z" fill="#061019"/>
  <circle cx="286" cy="60" r="15" fill="url(#hidLampE0)" opacity="0.5"><animate attributeName="opacity" values="0.34;0.6;0.34" dur="7.68s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="286" cy="60" r="2" fill="#F2C14E"><animate attributeName="opacity" values="0.74;1;0.74" dur="10.64s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="164" y="10" width="172" height="12" fill="url(#hidScanE0)" opacity="0"><animate attributeName="y" values="0;76" dur="5.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;1;1;0" dur="5.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></rect>
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
    <animate attributeName="d" values="M76,62 Q162,55 250,62 Q338,69 424,62 L424,78 Q338,85 250,78 Q162,71 76,78Z;M76,66 Q162,59 250,66 Q338,73 424,66 L424,82 Q338,89 250,82 Q162,75 76,82Z;M76,62 Q162,55 250,62 Q338,69 424,62 L424,78 Q338,85 250,78 Q162,71 76,78Z" dur="12s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <circle cx="120" cy="150" r="1.4" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="150;30" dur="27.12s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.2;0.2;0" dur="27.12s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <circle cx="330" cy="170" r="1.6" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="170;34" dur="25.48s" repeatCount="indefinite" begin="7s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.16;0.16;0" dur="25.48s" repeatCount="indefinite" begin="7s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
  <path d="M108,190 Q128,150 186,142 L322,146 Q374,156 372,190 Z" fill="#061019"/>
  <path d="M234,142 L224,86 L242,84 L252,142Z" fill="#061019"/>
  <circle cx="330" cy="158" r="44" fill="url(#hidLampE1)" opacity="0.45">
    <animate attributeName="opacity" values="0.3;0.56;0.3" dur="10.16s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <ellipse cx="330" cy="158" rx="3.4" ry="4.4" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.78" dur="6.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
  <rect x="76" y="14" width="348" height="24" fill="url(#hidScanE1)">
    <animate attributeName="y" values="-6;194" dur="7.49s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="7.49s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
  <!-- Arms down, hands empty. There is nothing in them, and that is the shot,
       which is exactly why they have to BE hands: they were two 15-wide
       strokes hanging free and ending in round caps, so the frame's whole
       point (empty hands) had nothing in it to read. Head is r=20 in this
       standing shot, so the hands are sized off 20. -->
` + hidArm(20, -24, 84, -34, 156, -7) + `
` + hidArm(20, 30, 84, 40, 156, 7) + `
` + hidHand(20, -1, { x: -34, y: 156, rot: -6, rim: false }) + `
` + hidHand(20, 1, { x: 40, y: 156, rot: 6, rim: false }) + `
  <!-- the rim, hard: he is standing in front of a lit screen -->
  <path d="M-29,196 Q-31,112 -22,74 Q-14,56 0,51" fill="none" stroke="#5fa0b8" stroke-width="6" opacity="0.2"/>
  <path d="M-29,196 Q-31,112 -22,74 Q-14,56 0,51" fill="none" stroke="#9fd4e4" stroke-width="2" opacity="0.8"/>
  <path d="M-17,20 Q-21,32 -18,44" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.65"/>
  <path d="M-37,120 Q-40,146 -37,166" fill="none" stroke="#9fd4e4" stroke-width="1.6" opacity="0.55"/>
</g>
<!-- the empty second chair, pushed back, still there -->
<!-- the empty second chair, pushed back, still there. Legs used to end at
     278.7 and 266.8 against a floor of 260: both of them through the deck. -->
` + hidChair(410, 218, -6, 258, { w: 52, d: 18, backH: 50 }) + `
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
  <animate attributeName="d" values="M0,30 Q80,22 160,30 Q240,38 320,30 Q400,22 500,30 L500,44 Q400,52 320,44 Q240,36 160,44 Q80,52 0,44Z;M0,34 Q80,26 160,34 Q240,42 320,34 Q400,26 500,34 L500,48 Q400,56 320,48 Q240,40 160,48 Q80,56 0,48Z;M0,30 Q80,22 160,30 Q240,38 320,30 Q400,22 500,30 L500,44 Q400,52 320,44 Q240,36 160,44 Q80,52 0,44Z" dur="15.47s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- silt drifting up -->
<circle cx="60" cy="200" r="1.4" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="200;40" dur="24.96s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.16;0.16;0" dur="24.96s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="440" cy="220" r="1.6" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="220;36" dur="39.9s" repeatCount="indefinite" begin="9s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.14;0.14;0" dur="39.9s" repeatCount="indefinite" begin="9s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
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
  <rect x="36.5" y="131" width="8" height="12" fill="#ffe9a8" opacity="0.9"><animate attributeName="opacity" values="0.72;1;0.82;0.95;0.72" dur="2.99s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
  <circle cx="40.5" cy="137" r="42" fill="url(#hidLantE3)" opacity="0.42"><animate attributeName="opacity" values="0.3;0.5;0.36;0.46;0.3" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="454" y="128" width="13" height="18" rx="2.5" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="456.5" y="131" width="8" height="12" fill="#ffe9a8" opacity="0.85"><animate attributeName="opacity" values="0.68;1;0.78;0.92;0.68" dur="4.41s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
  <circle cx="460.5" cy="137" r="40" fill="url(#hidLantE3)" opacity="0.4"><animate attributeName="opacity" values="0.28;0.48;0.34;0.44;0.28" dur="3.55s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</g>
<!-- the lamp over the table, the one Canon watches on a screen -->
<line x1="250" y1="0" x2="250" y2="34" stroke="#3a2c19" stroke-width="2.4"/>
<rect x="240" y="34" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="38" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.78;1;0.86;0.96;0.78" dur="3.94s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="250" cy="47" r="92" fill="url(#hidLantE3)" opacity="0.42"><animate attributeName="opacity" values="0.32;0.5;0.38;0.47;0.32" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
  <!-- LEGS. The torso used to close at y=96 with nothing under it, so he was
       a bust on a table. Seated at the bolted table: thigh forward, shin
       down, one boot on the deck and the far leg reading behind it. -->
  <path d="M-24,92 Q-26,108 -22,120 L-4,120 Q-2,104 -4,92 Z" fill="#4f4a3a"/>
  <path d="M4,92 Q2,108 6,120 L24,120 Q26,104 24,92 Z" fill="#5c5644"/>
  <rect x="-24" y="118" width="22" height="9" rx="3" fill="#3a3428"/>
  <rect x="4" y="118" width="22" height="9" rx="3" fill="#453e30"/>
  <!-- the rolled cuffs -->
  <rect x="-38" y="56" width="16" height="9" rx="3" fill="#a89d7e"/>
  <rect x="24" y="52" width="16" height="9" rx="3" fill="#a89d7e"/>
  <!-- forearms, bare, working -->
  <path d="M-30,64 Q-14,76 8,80" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <path d="M32,60 Q46,68 58,76" fill="none" stroke="#c39a72" stroke-width="10" stroke-linecap="round"/>
  <!-- hands: one on the straight edge, one steadying the page -->
  <!-- Hands. Bare ellipses before; a mass plus a thumb lobe on the side,
       which is the minimum that reads at this size. -->
  <path d="M2,78 Q13,74 20,79 Q23,84 18,88 Q9,90 3,86 Z" fill="#c39a72"/>
  <path d="M4,79 Q-2,80 -3,84 Q-2,88 3,87" fill="#c39a72"/>
  <path d="M6,83 Q12,82 17,84" fill="none" stroke="#a37f5b" stroke-width="0.9" opacity="0.7"/>
  <g transform="rotate(-14,62,78)">
    <path d="M53,74 Q64,70 71,75 Q74,80 69,84 Q60,86 54,82 Z" fill="#c39a72"/>
    <path d="M55,75 Q49,76 48,80 Q49,84 54,83" fill="#c39a72"/>
    <path d="M57,79 Q63,78 68,80" fill="none" stroke="#a37f5b" stroke-width="0.9" opacity="0.7"/>
  </g>
  <!-- head, DOWN at the ledger. Face is allowed here: he is not Canon. -->
  <circle cx="-2" cy="0" r="17" fill="#c39a72"/>
  <path d="M-19,-4 Q-14,-20 -2,-18 Q11,-20 15,-4" fill="#5a4a34"/>
  <!-- brow and the line of a nose, seen from three quarters, looking down -->
  <path d="M-14,4 Q-10,2 -6,4" fill="none" stroke="#8a6748" stroke-width="1.4" stroke-linecap="round"/>
  <!-- EYES, closed and down at the page. The face shipped with a brow, a
       nose and a moustache and no eyes, which is what made it read blank. -->
  <path d="M-13,7 Q-9.5,9.5 -6,7" fill="none" stroke="#5a4a34" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M4,6 Q7.5,8.5 11,6" fill="none" stroke="#5a4a34" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M-13,4.5 Q-9.5,2.5 -6,4.5" fill="none" stroke="#8a6748" stroke-width="1.1" stroke-linecap="round" opacity="0.7"/>
  <path d="M4,3.5 Q7.5,1.5 11,3.5" fill="none" stroke="#8a6748" stroke-width="1.1" stroke-linecap="round" opacity="0.7"/>
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
    <animate attributeName="opacity" values="0.14;0.34;0.14" dur="5.35s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
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
<rect x="244" y="24" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.81s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="250" cy="33" r="110" fill="url(#hidLantE4)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.48;0.36;0.45;0.3" dur="3.07s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
  <!-- The PALM: a shorter block than it was. The hand read as a bread roll
       because the palm ran the full 130 units and the four fingers were 20
       unit lumps on top of it. On a real hand the fingers are about as long
       as the palm, so the palm shrinks and the fingers grow. -->
  <path d="M-52,18 Q-58,0 -46,-8 Q-22,-16 6,-15 L40,-13 Q58,-10 56,4 Q50,20 24,24 L-26,26 Z" fill="#c39a72"/>
  <!-- FINGERS, spread flat and each one its own length: index, middle, ring,
       little, with the middle longest. Each runs a full palm-length. -->
  <path d="M-44,-9 Q-50,-44 -38,-52 Q-26,-56 -22,-40 L-20,-12 Z" fill="#c39a72"/>
  <path d="M-20,-13 Q-24,-54 -10,-62 Q4,-64 6,-46 L8,-13 Z" fill="#c39a72"/>
  <path d="M8,-13 Q6,-52 20,-58 Q34,-58 34,-42 L34,-12 Z" fill="#c39a72"/>
  <path d="M34,-12 Q34,-42 48,-44 Q58,-42 56,-28 L54,-8 Z" fill="#c39a72"/>
  <!-- the creases between them, so four fingers read as four -->
  <g stroke="#a67c56" stroke-width="1.2" opacity="0.5" stroke-linecap="round">
    <path d="M-21,-40 L-21,-13"/><path d="M7,-46 L7,-13"/><path d="M34,-42 L34,-12"/>
  </g>
  <!-- the knuckle creases across each finger -->
  <g stroke="#a67c56" stroke-width="1" opacity="0.4" stroke-linecap="round">
    <path d="M-44,-30 L-22,-32"/><path d="M-20,-38 L6,-40"/>
    <path d="M8,-36 L34,-36"/><path d="M35,-28 L55,-27"/>
  </g>
  <!-- THUMB, laid along the near edge, thicker than a finger and set lower -->
  <path d="M-50,12 Q-70,8 -76,-6 Q-78,-20 -64,-20 Q-52,-18 -46,-6 Z" fill="#c39a72"/>
  <path d="M-64,-16 Q-70,-8 -66,2" fill="none" stroke="#a67c56" stroke-width="1.1" opacity="0.45"/>
  <!-- tendons: the hand is pressing, not resting -->
  <g stroke="#a67c56" stroke-width="1.4" opacity="0.5" stroke-linecap="round">
    <line x1="-36" y1="-4" x2="-30" y2="12"/><line x1="-12" y1="-6" x2="-8" y2="14"/>
    <line x1="14" y1="-6" x2="16" y2="14"/><line x1="38" y1="-4" x2="38" y2="12"/>
  </g>
  <!-- warm rim off the knuckles -->
  <path d="M-44,-10 Q-20,-17 8,-15 L40,-13" fill="none" stroke="#ffdf9e" stroke-width="2" opacity="0.6"/>
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
<circle cx="52" cy="60" r="46" fill="url(#hidLantE5)" opacity="0.32"><animate attributeName="opacity" values="0.24;0.4;0.28;0.36;0.24" dur="4.79s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="452" cy="76" r="42" fill="url(#hidLantE5)" opacity="0.28"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="3.61s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
<!-- BOTH HANDS FULL, and both at the bottom edge. WHAT they hold stays
     deliberately unreadable, because he is not looking at either of them --
     but the HANDS have to be hands. They were two brown blobs with nothing in
     them: no fingers, no wrists, no thumbs. Sized off the head in this shot
     (ry 58, so r = 29 x 0.62), which is the same rule as everywhere else. -->
<g opacity="0.9">
  <!-- the rope-shaped thing, laid across the fingers before they close -->
  <path d="M64,228 Q34,218 8,226" fill="none" stroke="#3a3830" stroke-width="15" stroke-linecap="round"/>
  <path d="M64,228 Q34,218 8,226" fill="none" stroke="#6a6558" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
` + hidWarmHand(34, 1, { x: 96, y: 244, rot: -16, skin: '#a8825e', shade: '#8a6a4c' }) + `
  <!-- the paper-shaped thing, held against the other palm -->
  <rect x="418" y="192" width="60" height="34" rx="1" fill="#d8cfb4" opacity="0.7" transform="rotate(-14,448,209)"/>
` + hidWarmHand(34, -1, { x: 408, y: 242, rot: 14, skin: '#a8825e', shade: '#8a6a4c' }) + `
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
<rect x="244" y="20" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="250" cy="29" r="106" fill="url(#hidLantE6)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.43;0.28" dur="3.62s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
<!-- His hand, gone still at the edge of the page. Not writing. It was one
     rounded mass with two short lumps on top, which read as a cloud sitting
     on the ledger; the palm ran the whole width and the "fingers" cleared it
     by a few units. Through the helper it is a short palm with four fingers
     lying flat along the page, which is what a hand that has stopped writing
     actually does. -->
` + hidWarmHand(34, 1, { x: 412, y: 158, rot: -100 }) + `
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
<rect x="244" y="14" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="250" cy="23" r="104" fill="url(#hidLantE7)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.43;0.28" dur="4.19s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
  <!-- The hand squaring the block, seen from the side. It was ONE closed blob
       with a single stub for a thumb and no fingers at all: two of them side
       by side filled 54% of the frame and read as paws. Now the palm is edge
       on to us and the four fingers curl over the far side of the paper,
       which is what squaring a stack actually looks like. -->
  <!-- the palm, edge on -->
  <path d="M2,30 Q-10,8 4,-8 Q24,-22 50,-19 L76,-16 Q92,-10 88,4 Q80,22 54,26 L20,31 Z" fill="#c39a72"/>
  <!-- four fingers, curling over the top edge of the block and down the far
       side: each one a full palm-length, the middle one longest -->
  <path d="M50,-19 Q52,-42 64,-44 Q76,-44 75,-30 Q74,-20 68,-15 Z" fill="#b78d64"/>
  <path d="M62,-17 Q66,-40 78,-41 Q89,-40 87,-27 Q86,-18 80,-13 Z" fill="#c39a72"/>
  <path d="M74,-14 Q79,-35 90,-35 Q99,-33 96,-21 Q94,-13 88,-9 Z" fill="#b78d64"/>
  <path d="M85,-10 Q90,-28 99,-27 Q107,-25 104,-15 Q102,-8 96,-5 Z" fill="#c39a72"/>
  <!-- the knuckle line, where the fingers bend over the edge -->
  <path d="M52,-19 Q68,-15 86,-9 Q97,-6 103,-4" fill="none" stroke="#a67c56" stroke-width="1.3" opacity="0.5"/>
  <!-- the thumb, on OUR side of the block, pressing down -->
  <path d="M18,-2 Q30,-14 48,-11 Q58,-8 54,2 Q46,10 30,9 Q20,7 18,-2 Z" fill="#d0a97f"/>
  <path d="M30,-8 Q42,-8 50,-3" fill="none" stroke="#a67c56" stroke-width="1.1" opacity="0.45"/>
  <!-- warm rim off the wrist and the heel of the hand -->
  <path d="M4,26 Q-6,6 8,-8" fill="none" stroke="#ffdf9e" stroke-width="2.2" opacity="0.6"/>
  <!-- the rolled cuff -->
  <rect x="-16" y="14" width="44" height="15" rx="4" fill="#a89d7e" transform="rotate(-8,6,21)"/>
</g>
<g transform="translate(380,188) scale(-1,1)">
  <!-- The hand squaring the block, seen from the side. It was ONE closed blob
       with a single stub for a thumb and no fingers at all: two of them side
       by side filled 54% of the frame and read as paws. Now the palm is edge
       on to us and the four fingers curl over the far side of the paper,
       which is what squaring a stack actually looks like. -->
  <!-- the palm, edge on -->
  <path d="M2,30 Q-10,8 4,-8 Q24,-22 50,-19 L76,-16 Q92,-10 88,4 Q80,22 54,26 L20,31 Z" fill="#c39a72"/>
  <!-- four fingers, curling over the top edge of the block and down the far
       side: each one a full palm-length, the middle one longest -->
  <path d="M50,-19 Q52,-42 64,-44 Q76,-44 75,-30 Q74,-20 68,-15 Z" fill="#b78d64"/>
  <path d="M62,-17 Q66,-40 78,-41 Q89,-40 87,-27 Q86,-18 80,-13 Z" fill="#c39a72"/>
  <path d="M74,-14 Q79,-35 90,-35 Q99,-33 96,-21 Q94,-13 88,-9 Z" fill="#b78d64"/>
  <path d="M85,-10 Q90,-28 99,-27 Q107,-25 104,-15 Q102,-8 96,-5 Z" fill="#c39a72"/>
  <!-- the knuckle line, where the fingers bend over the edge -->
  <path d="M52,-19 Q68,-15 86,-9 Q97,-6 103,-4" fill="none" stroke="#a67c56" stroke-width="1.3" opacity="0.5"/>
  <!-- the thumb, on OUR side of the block, pressing down -->
  <path d="M18,-2 Q30,-14 48,-11 Q58,-8 54,2 Q46,10 30,9 Q20,7 18,-2 Z" fill="#d0a97f"/>
  <path d="M30,-8 Q42,-8 50,-3" fill="none" stroke="#a67c56" stroke-width="1.1" opacity="0.45"/>
  <!-- warm rim off the wrist and the heel of the hand -->
  <path d="M4,26 Q-6,6 8,-8" fill="none" stroke="#ffdf9e" stroke-width="2.2" opacity="0.6"/>
  <!-- the rolled cuff -->
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
  <rect x="32.4" y="73" width="7.2" height="11" fill="#ffe9a8"><animate attributeName="opacity" values="0.74;1;0.84;0.96;0.74" dur="2.94s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
  <circle cx="36" cy="78" r="40" fill="url(#hidLantE8)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.48;0.36;0.44;0.3" dur="3.75s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <rect x="458" y="78" width="12" height="17" rx="2.4" fill="#5c4526" stroke="#7d6031" stroke-width="1.4"/>
  <rect x="460.4" y="81" width="7.2" height="11" fill="#ffe9a8"><animate attributeName="opacity" values="0.7;1;0.8;0.94;0.7" dur="4.76s" repeatCount="indefinite" begin="1.3s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
  <circle cx="464" cy="86" r="38" fill="url(#hidLantE8)" opacity="0.38"><animate attributeName="opacity" values="0.28;0.46;0.34;0.42;0.28" dur="3.84s" repeatCount="indefinite" begin="1.3s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
  <radialGradient id="hidWarmE10" cx="30%" cy="62%" r="46%">
    <stop offset="0%" stop-color="#F2C14E" stop-opacity="0.3"/><stop offset="50%" stop-color="#c98b34" stop-opacity="0.1"/><stop offset="100%" stop-color="#030c11" stop-opacity="0"/>
  </radialGradient>
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
<circle cx="360" cy="200" r="1.4" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="200;24" dur="34.58s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.2;0.2;0" dur="34.58s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="430" cy="220" r="1.6" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="220;30" dur="27.28s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.16;0.16;0" dur="27.28s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="300" cy="240" r="1.2" fill="#7fc4d8" opacity="0"><animate attributeName="cy" values="240;40" dur="34s" repeatCount="indefinite" begin="15s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.14;0.14;0" dur="34s" repeatCount="indefinite" begin="15s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
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
<rect x="62.5" y="89" width="8" height="12" fill="#ffe9a8"><animate attributeName="opacity" values="0.76;1;0.86;0.96;0.76" dur="3.84s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="66.5" cy="95" r="72" fill="url(#hidLantE10)" opacity="0.36"><animate attributeName="opacity" values="0.26;0.44;0.32;0.4;0.26" dur="3.09s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
<circle cx="120" cy="60" r="120" fill="url(#hidLantE11)" opacity="0.3"><animate attributeName="opacity" values="0.22;0.36;0.26;0.34;0.22" dur="4.57s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
<circle cx="110" cy="180" r="1.6" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="180;10" dur="7.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.3;0.3;0" dur="7.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="380" cy="220" r="1.4" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="220;20" dur="11.77s" repeatCount="indefinite" begin="3s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.26;0.26;0" dur="11.77s" repeatCount="indefinite" begin="3s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="230" cy="240" r="1.8" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="240;30" dur="15.47s" repeatCount="indefinite" begin="6s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.22;0.22;0" dur="15.47s" repeatCount="indefinite" begin="6s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="440" cy="200" r="1.2" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="200;16" dur="9.6s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.24;0.24;0" dur="9.6s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
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
<circle cx="186" cy="170" r="34" fill="url(#hidLantE12)" opacity="0.35"><animate attributeName="opacity" values="0.24;0.4;0.28;0.38;0.24" dur="4.79s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="186" cy="170" r="4" fill="#ffe9a8" opacity="0.6" filter="url(#hidWaterTakeE12)"/>
<circle cx="404" cy="176" r="30" fill="url(#hidLantE12)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="3.61s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
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
    <animateTransform attributeName="transform" type="rotate" values="-7;7;-7" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </g>
  <path d="M-20,4 Q-30,22 -30,44" fill="none" stroke="#c39a72" stroke-width="9" stroke-linecap="round"/>
</g>
<!-- and the water closing over the shape: bands drifting across him -->
<path d="M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z" fill="#2f7d92" opacity="0.16">
  <animate attributeName="d" values="M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z;M180,118 Q250,110 320,118 Q390,126 460,118 L460,134 Q390,142 320,134 Q250,126 180,134Z;M180,110 Q250,102 320,110 Q390,118 460,110 L460,126 Q390,134 320,126 Q250,118 180,126Z" dur="7.91s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z" fill="#2f7d92" opacity="0.12">
  <animate attributeName="d" values="M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z;M160,178 Q240,170 320,178 Q400,186 480,178 L480,198 L160,198Z;M160,170 Q240,162 320,170 Q400,178 480,170 L480,190 L160,190Z" dur="8.19s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
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
  <rect x="297" y="8" width="70" height="2" fill="#1d3f49"/>
</g>
<!-- the big screen, on the wreck -->
<rect x="124" y="12" width="252" height="148" rx="4" fill="#1e2637" stroke="#4a5770" stroke-width="3"/>
<g clip-path="url(#hidBigClipE13)">
  <rect x="128" y="16" width="244" height="140" fill="url(#hidBigE13)"/>
  <path d="M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z" fill="#2b6070" opacity="0.5">
    <animate attributeName="d" values="M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z;M128,58 Q188,52 250,58 Q312,64 372,58 L372,72 Q312,78 250,72 Q188,66 128,72Z;M128,54 Q188,48 250,54 Q312,60 372,54 L372,68 Q312,74 250,68 Q188,62 128,68Z" dur="15.24s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M150,156 Q168,120 216,114 L318,118 Q352,126 350,156 Z" fill="#061019"/>
  <path d="M224,114 L216,70 L230,68 L238,114Z" fill="#061019"/>
  <!-- the lamps are lit down there, the way they always are -->
  <circle cx="310" cy="128" r="34" fill="url(#hidLampE13)" opacity="0.44">
    <animate attributeName="opacity" values="0.3;0.54;0.3" dur="6.72s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <ellipse cx="310" cy="128" rx="3" ry="4" fill="#F2C14E"><animate attributeName="opacity" values="0.78;1;0.78" dur="8.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
  <!-- and a man at a table down there, doing nothing at all -->
  <rect x="240" y="132" width="58" height="3" rx="1.4" fill="#3a2c19" opacity="0.8"/>
  <ellipse cx="262" cy="124" rx="7" ry="9" fill="#0d1a16" opacity="0.85"/>
  <circle cx="262" cy="112" r="4.4" fill="#0d1a16" opacity="0.85"/>
  <rect x="128" y="16" width="244" height="20" fill="url(#hidScanE13)">
    <animate attributeName="y" values="0;160" dur="8.33s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="8.33s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
  </rect>
</g>
<!-- floor and screen spill -->
<rect x="0" y="196" width="500" height="64" fill="#101c2c"/>
<path d="M124,196 L376,196 L446,260 L54,260 Z" fill="#16323a" opacity="0.42"/>
<path d="M170,196 L330,196 L380,260 L120,260 Z" fill="#5fa0b8" opacity="0.07"/>
<!-- table -->
<!-- the table. It used to be this top and nothing else: no legs at all, so
     it floated on a void. hidTable() computes the legs down to the floor. -->
` + hidTable(250, 182, 356, 258, { th: 9 }) + `
<!-- the cards, still in a stack, still unsquared since the tin -->
<g transform="translate(354,164)">
  <rect x="0" y="12" width="64" height="8" rx="1.3" fill="#5e6577" transform="rotate(3,32,16)"/>
  <rect x="4" y="3" width="64" height="8" rx="1.3" fill="#6d748a" transform="rotate(-6,36,7)"/>
  <rect x="-1" y="-6" width="64" height="8" rx="1.3" fill="#7c849b" transform="rotate(2,31,-2)"/>
</g>
<!-- THE PENCIL, WHERE HE LEFT IT. Still not parallel: that is the point of it
     in this frame. It was 80 units long here against 46 in hidden_1, drawn at
     a 31 degree tilt, so it read as a yellow bar across the table rather than
     as the pencil. hidPencil() gives it the file's one length. -->
` + hidPencil(120, 172, 48, { rot: 14 }) + `
<!-- HIS CHAIR, a real one, behind him -->
` + hidChair(238, 200, 0, 258, { w: 72, d: 20, backH: 56, seat: '#333e52', seatEdge: '#5b6a86' }) + `
<!-- CANON from behind, watching. He does not ask you what happened.
     He had no arms drawn at all here, and his head was r=16 against r=14 in
     hidden_1: the same man in the same room, two sizes. -->
` + hidCanon(HID_HEAD, 238, 128, {
  reachL: [-30, 48], reachR: [32, 46], rotL: 168, rotR: -172
}) + `
<!-- the second chair, and it has been sat in: it is pulled out now -->
` + hidChair(356, 216, -8, 258, { w: 48, d: 16, backH: 48 }) + `
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
    <animate attributeName="opacity" values="0.3;0.46;0.3" dur="7.68s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <circle cx="250" cy="150" r="30" fill="url(#hidLampE16)" opacity="0.5">
    <animate attributeName="opacity" values="0.4;0.6;0.4" dur="10.64s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <rect x="246" y="112" width="8" height="12" rx="2" fill="#3a2c19"/>
  <ellipse cx="250" cy="126" rx="3.4" ry="4.6" fill="#ffe0a0">
    <animate attributeName="opacity" values="0.82;1;0.82" dur="7.04s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
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
    <animate attributeName="y" values="-8;222" dur="11s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="11s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
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
