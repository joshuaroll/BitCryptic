// FREDWARD'S CLOSE-UP PAW. He is an otter: the paw is the APPROVED CAST paw
// (scenes/approved-cast.js, fredward 'hold': the rounded mitt with three digit
// creases, fur #A7744E, ink #173C44), only scaled up for the close-up. It was a
// baked BCRig human hand (long spread fingers, a thumb), which read as a man's
// hand on the papers. Copy the path from the cast; do not redraw it.
// SLEEVE VALUE: the coat (#B78E58 lit) is in the cold room's shade here, veiled
// toward the room's ink: HID_FRED_SLEEVE, clearly darker and cooler than the
// warm paw so the two cannot fuse into one bare forearm. The cuff is the same
// coat turned back, a little lighter, so it reads as the end of the sleeve and
// not as a band worn on the wrist.
var HID_FRED_PAW_D = 'M-10 3Q-15 -6 -8 -13Q1 -19 13 -12Q20 -8 18 0L15 12Q10 19 -2 16Q-10 14 -10 3Z';
var HID_FRED_PAW_CREASES = 'M-6 -5L12 -3 M-6 2L11 4 M-3 9L10 10';
var HID_FRED_PAW_CLAWS = 'M16.4 -10l1.8 -0.5 M18.6 -1.4l1.9 0 M17.4 6.2l1.8 0.4 M14 12.6l1.6 0.8';
var HID_FRED_SLEEVE ='#565547', HID_FRED_SLEEVE_SH = '#454639', HID_FRED_CUFF = '#6E6A55';
// The cast paw points along +x with its wrist at x -12. rotate(-90) turns it to
// point up; it is translated so the wrist lands at local y = wy. k scales it.
function hidFredPawShape(k, wy) {
  var ink = '#173C44';
  return '<g transform="translate(0 ' + hidn(wy - 12 * k) + ') rotate(-90) scale(' + k + ')">'
    + '<path d="' + HID_FRED_PAW_D + '" fill="#A7744E" stroke="' + ink + '" stroke-width="' + hidn(2.2 / k) + '" stroke-linejoin="round"/>'
    + '<path d="' + HID_FRED_PAW_CREASES + '" fill="none" stroke="' + ink + '" stroke-width="' + hidn(1.5 / k) + '" stroke-linecap="round"/>'
    // four short blunt claws, one per digit tip, so it reads as a paw and not a fist
    + '<path d="' + HID_FRED_PAW_CLAWS + '" fill="none" stroke="#E5CDA4" stroke-width="' + hidn(2.4 / k) + '" stroke-linecap="round"/>'
    + '</g>';
}
// Local frame: wrist at (0,25), fingers up at rot 0, sleeve running down to y 92.
function hidFredPaw(x, y, scale, rot) {
  var ink = '#173C44';
  return '<g data-fred-paw="1" transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + scale + ')">'
    + hidFredPawShape(1.3, 34)
    // the coat sleeve, over the wrist, in the room's shade, one shade band on the far side
    + '<path d="M-15 33 L15 33 L18 92 L-18 92 Z" fill="' + HID_FRED_SLEEVE + '" stroke="' + ink + '" stroke-width="2.2" stroke-linejoin="round"/>'
    + '<path d="M8 36 L14.6 36 L17.4 91 L10 91 Z" fill="' + HID_FRED_SLEEVE_SH + '"/>'
    // the cuff: the coat turned back, proud of the sleeve
    + '<rect x="-17.5" y="26" width="35" height="11" rx="2.5" fill="' + HID_FRED_CUFF + '" stroke="' + ink + '" stroke-width="2.2"/>'
    + '</g>';
}
// THE SAME PAW LAID FLAT, palm down on the table, seen from across it:
// foreshortened onto the table plane (scale y 0.75), the sleeve running back
// toward the viewer and off the bottom of the frame.
// (x, y) is the wrist on the table; s scales the whole limb.
function hidFredPawFlat(x, y, rot, s) {
  var ink = '#173C44';
  return '<g data-fred-paw="flat" transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + s + ')">'
    // contact shade under the paw, so it sits ON the page
    + '<ellipse cx="2" cy="-14" rx="21" ry="12" fill="#3a2c19" opacity="0.22"/>'
    + '<g transform="scale(1,0.75)">' + hidFredPawShape(1.25, 6) + '</g>'
    // the forearm lying on the table, widening toward us (perspective), in shade
    + '<path d="M-14,4 L14,4 L21,60 L-21,60 Z" fill="' + HID_FRED_SLEEVE + '" stroke="' + ink + '" stroke-width="2.2" stroke-linejoin="round"/>'
    + '<path d="M7,7 L13.4,7 L19.6,59 L11,59 Z" fill="' + HID_FRED_SLEEVE_SH + '"/>'
    // the cuff: the coat turned back
    + '<rect x="-16.5" y="-2" width="33" height="9" rx="2.5" fill="' + HID_FRED_CUFF + '" stroke="' + ink + '" stroke-width="2.2"/>'
    + '</g>';
}

// THE WRECK ON THE BIG SCREEN. One wreck, drawn one way: hull, two strakes,
// the broken mast with its bent spar, the open deck rail, and THE LAMP at one
// fixed point on the hull. It had been drawn four ways (mast or no mast, rail
// or none, the lamp wandering along the hull). Geometry is hidden_3's close-up.
//   (x, y)  the bottom centre of the hull on screen;  s  scale (1 = hidden_3)
//   lampId  the scene's own amber radial gradient id (the lamp's glow)
//   o.dur   [glow, core] breathing durations, so screens do not pulse in unison
function hidScreenWreck(x, y, s, lampId, o) {
  o = o || {};
  var d = o.dur || ['8.56s', '7.68s'], ink = '#08121a', lx = hidn(x + 90 * s), ly = hidn(y - 44 * s);
  var e = ' repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"';
  return '<g data-prop="screen-wreck"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">'
    + '<path d="M-146,0 Q-130,-40 -82,-56 L64,-68 Q130,-62 142,-30 L146,0 Z" fill="' + ink + '" opacity="0.94"/>'
    + '<path d="M-122,-18 Q-72,-42 -14,-48 L86,-50" fill="none" stroke="#1d3f49" stroke-width="1.4" opacity="0.45"/>'
    + '<path d="M-104,-4 Q-48,-22 14,-28 L102,-28" fill="none" stroke="#1d3f49" stroke-width="1" opacity="0.3"/>'
    // the broken mast and its bent spar
    + '<path d="M2,-66 L-8,-124 L8,-128 L18,-66 Z" fill="' + ink + '" opacity="0.94"/>'
    + '<path d="M8,-128 Q30,-134 46,-126" fill="none" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"/>'
    // the open deck rail
    + '<g stroke="' + ink + '" stroke-width="2.4" opacity="0.9"><line x1="-66" y1="-50" x2="-66" y2="-62"/><line x1="-42" y1="-54" x2="-42" y2="-66"/>'
    + '<line x1="-18" y1="-58" x2="-18" y2="-69"/><line x1="46" y1="-62" x2="46" y2="-72"/><line x1="70" y1="-62" x2="70" y2="-71"/></g>'
    + '<line x1="-70" y1="-63" x2="76" y2="-73" stroke="' + ink + '" stroke-width="1.6" opacity="0.8"/>'
    + '</g>'
    // THE LAMP, at one fixed point on the hull. Glow and core are not scaled
    // below a readable size: it is the only warm thing in the room.
    + '<circle cx="' + lx + '" cy="' + ly + '" r="' + hidn(Math.max(14, 52 * s)) + '" fill="url(#' + lampId + ')" opacity="0.42">'
    + '<animate attributeName="opacity" values="0.26;0.5;0.26" dur="' + d[0] + '"' + e + '/></circle>'
    + '<ellipse cx="' + lx + '" cy="' + ly + '" rx="' + hidn(Math.max(1.8, 3.4 * s)) + '" ry="' + hidn(Math.max(2.2, 4.4 * s)) + '" fill="#F2C14E">'
    + '<animate attributeName="opacity" values="0.78;1;0.78" dur="' + d[1] + '"' + e + '/></ellipse>'
    + '</g>';
}
// Hidden story scenes — "The Listening Post"
// Canon's questline. Entered by typing HIDDEN at the Town Square terminal.
//
// Keys: hidden_0..hidden_10 (intro), hidden_m1..hidden_m5 (mission beats),
//       hidden_end_0..hidden_end_17 (the ending).
//
// Canon uses the complete current shared cast model in every full-figure shot.
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
// CANON'S FACE (decision 2026-10-25, "(b) Cast model with a face from
// hidden_5 on"). In hidden_1..4 his back is to the player and stays that way:
// hidCanonBack, the back of his head and the headset, no face. From hidden_5
// ("He finally turns") on he IS the mission cast model, an otter (Fredward's
// round ears, cream muzzle and whiskers on darker fur #8F6A4E, slate coat,
// listening-post headset): bcMissionPlace('canon', pose, x, floor, h, flip).
// Never draw his face by hand and never bring the legacy bcCharacter('canon')
// rig back for a front view. The model has no seated pose, so where he sat he
// now stands beside his chair (hidSeated opts.stand). His close-up arms
// (hidCastArm) take the model's fur and coat values from hidden_7 on.

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
var HID_SKIN = '#c9a88f', HID_SKIN_L = '#dfbea5', HID_RIM = '#9a8276';
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
// RUBBER-HOSE WIDTHS, taken off the reference rather than off a person.
//
// The whole limb is ONE width. There is no wrist measurement because there is
// no wrist: the hose runs at a constant thickness into a cuff, and the hand
// sits on the far side of it, LARGER than the arm.
//
// That last part is the inversion four previous versions got wrong. I kept
// shrinking the hand to match a tapering wrist. In this idiom the hand is the
// biggest thing on the limb and the arm is a thin noodle, which is why the
// cuff exists: it is the transition that makes the size jump read.
function hidHoseW(r)  { return r * 0.40; }              // the arm, end to end
function hidCuffW(r)  { return hidHoseW(r) * 1.30; }    // slightly proud of it
function hidHandB(r)  { return hidHoseW(r) * 2.20 * 0.5; }  // HALF, and bigger
// Kept so existing call sites resolve; the hose has no wrist of its own.
function hidWristW(r) { return hidHoseW(r) * 0.5; }

function hidHand(r, dir, opts) {
  opts = opts || {};
  // LENGTH COMES OFF THE BREADTH, not off the head. A cartoon mitt is roughly
  // as wide as it is long; deriving length from head radius while breadth came
  // from the arm made it 1.70x longer than wide, which is a finger shape.
  var B0 = hidHandB(r) * 2;
  var H = B0 * 1.05;               // a shade longer than wide
  // Breadth comes off the ratio chain, NOT off hand length. Deriving it from H
  // independently of the arm is how it ended up 1.95x too big for its own wrist.
  var B = B0;                      // full breadth, from the arm
  var fill = opts.fill || HID_SKIN;
  var o = '';

  // ---- THE CUFF, and it is the whole join.
  //
  // I deleted a band from here two commits ago, calling it "the seam". That
  // was wrong: in rubber-hose construction the cuff IS the correct answer. It
  // is what lets a hand 2.2x the width of the arm read as attached rather than
  // stuck on, because it stages the size jump instead of hiding it. Every
  // reference image has one and they are the clearest joins in the drawing.
  //
  // Proud of the hose on both sides, short, and square-ended.
  var CW = hidCuffW(r) * 0.5;
  var CH = CW * 0.62;
  o += '<rect x="' + hidn(-CW) + '" y="' + hidn(-CH * 0.15) +
    '" width="' + hidn(CW * 2) + '" height="' + hidn(CH) +
    '" rx="' + hidn(CH * 0.30) + '" fill="' + fill + '"/>';
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
  var SKIN = opts.skin || '#e0b48c', SHADE = opts.shade || '#a67c56', LIT = opts.lit || '#ffdf9e';
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
// THE ARM. Rubber hose, which is what this character actually is.
//
// Four previous versions chased ANATOMY: biceps girth, deltoid caps, forearm
// swell one third down from the elbow, ANSUR II circumference ratios. Every
// one of them was measured correctly and every one was wrong, because Canon is
// a stylised cartoon figure and cartoon limbs are not anatomical.
//
// The reference is unambiguous and it inverts nearly everything I had built:
//
//   * THE ARM IS A CONSTANT-WIDTH TUBE. No taper anywhere. No shoulder mass,
//     no biceps, no elbow narrowing, no forearm swell. A bent noodle of one
//     thickness end to end. All that anatomical structure was noise.
//
//   * THE HAND IS BIGGER THAN THE ARM, about 2.2x its width. I had spent four
//     passes making the hand SMALLER to match a thin wrist, which is exactly
//     backwards: in this idiom the hand is the largest thing on the limb.
//
//   * A CUFF SEPARATES THEM. The band I deleted as "the seam" is the correct
//     construction. It is what makes a big hand read as attached to a thin
//     arm rather than stuck on it, and it is why the reference reads cleanly
//     at any size.
//
// The curve carries all the expression. A rubber-hose limb bends in one smooth
// arc rather than articulating at a joint, so `bend` is the whole performance.
function hidArm(r, sx, sy, wx, wy, bend, opts) {
  opts = opts || {};
  var fill = opts.fill || '#3a353f';

  // ONE width, the whole length. This is the entire idea.
  var w = hidHoseW(r);

  var S = { x: sx, y: sy }, W = { x: wx, y: wy };
  var dx = wx - sx, dy = wy - sy, len = Math.sqrt(dx * dx + dy * dy) || 1;

  // One control point at the midpoint, pushed off the line by `bend`. A single
  // quadratic is the rubber hose: it cannot kink, and a kink is the one thing
  // this construction must never do.
  var C = { x: sx + dx * 0.5 - (dy / len) * bend * 1.35,
            y: sy + dy * 0.5 + (dx / len) * bend * 1.35 };

  // Drawn as a STROKE, not a filled outline. A stroke has uniform width by
  // definition, which is precisely what is wanted here, and round caps give
  // the shoulder and wrist their domed ends for free. The filled-path
  // machinery existed only to express taper, and there is no taper.
  var o = "<path d=\"M" + hidn(S.x) + "," + hidn(S.y) +
    " Q" + hidn(C.x) + "," + hidn(C.y) + " " + hidn(W.x) + "," + hidn(W.y) +
    "\" fill=\"none\" stroke=\"" + fill + "\" stroke-width=\"" + hidn(w) +
    "\" stroke-linecap=\"round\"/>";

  return o;
}
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
// Place the complete shared Canon figure; never combine a cast head with legacy anatomy.
// (x, y) IS the head centre, as the comment above says. It used to be ignored
// and the figure floor-placed instead, which sank him 14 units into his chair
// and pushed his boots out of the frame. Seat him with hidSeated() rather than
// choosing y by eye.
function hidCanon(r, x, y, opts) {
  return '<g transform="translate(' + hidn(x) + ' ' + hidn(y) + ')">' +
    hidNoModelChair(bcCharacter('canon', r, { stance: 'seated', expr: 'tired' })) + '</g>';
}

// The shared model draws its OWN chair in the seated stance (a back panel,
// two rear legs and two seat slivers, in #28313f / #3d4a60). In this room the
// chair is hidChair's job, so the model's is removed: two chairs on one man
// was the doubled, see-through look behind every seated Canon.
function hidNoModelChair(s) {
  return s.replace(/<(path|rect)[^>]*fill="#(28313f|3d4a60)"[^>]*\/>/g, '');
}

// SEATED GEOMETRY, measured off the shared model in head radii from the head
// centre: the hips rest 5.04r down (hipY 4.74r plus the hip block), the soles
// 7.81r down. So the seat surface is 2.77r above the boots, always.
var HID_SIT_HIP = 5.04, HID_SIT_SOLE = 7.81;

// CANON IN HIS CHAIR. One call places the chair AND the man on it, so his
// hips are on the seat and his boots on the floor by construction.
//   r, x      head radius and the chair's centre line
//   floorY    the floor his boots and the chair's near legs stand on
//   opts.view 'back' (hidden_1..4: chair between us and him) or 'front'
//   opts.headY  pin the head instead (a cropped close-up); the floor follows
//   opts.chair  hidChair options (w, d, backH, rot, seat, seatEdge)
//   opts.body   hidCanonBack options for the back view
//   opts.arm    markup that belongs between him and the chair's near parts
//               (a reaching arm in the back view goes under the chair back)
//   opts.stand  FRONT VIEW FROM hidden_5 ON: { pose, x, h, flip }. The mission
//               cast Canon (bcMissionPlace('canon')) has no seated pose, so
//               the chair stays exactly where it stood with him in it, empty,
//               and he stands beside it on the same floor, in front of it.
function hidSeated(r, x, floorY, opts) {
  opts = opts || {};
  var c = Object.assign({ w: r * 4.2, d: r * 1.3, backH: r * 3.2, rot: 0 }, opts.chair || {});
  var dd = c.d * 0.55, back = opts.view === 'back';
  // back view: hips sit mid-seat, which is FARTHER than the near edge, and the
  // boots are farther still (under the table), so they land above floorY.
  var drop = back ? HID_SIT_SOLE * r + dd * 0.8 : HID_SIT_SOLE * r - dd * 0.5;
  if (opts.headY !== undefined) floorY = opts.headY + drop;
  var headY = floorY - drop;
  var seatY = headY + HID_SIT_HIP * r + dd * 0.5;   // the seat's near edge
  var ch = hidChairParts(x, seatY, c.rot, floorY, Object.assign({}, c, { view: back ? 'back' : 'front' }));
  if (opts.stand && !back) {
    var st = opts.stand;
    return ch.under + ch.over + bcMissionPlace('canon', st.pose || 'ready', st.x, floorY, st.h, !!st.flip);
  }
  var body = back ? hidCanonBack(r, x, headY, Object.assign({ stance: 'seated' }, opts.body || {}))
                  : hidCanon(r, x, headY);
  return ch.under + body + (opts.arm || '') + ch.over;
}
// Where hidSeated puts the head, for scenes that place an arm off it.
function hidSeatedHeadY(r, floorY, opts) {
  opts = opts || {};
  var d = (opts.chair && opts.chair.d) || r * 1.3, dd = d * 0.55;
  if (opts.headY !== undefined) return opts.headY;
  return floorY - (opts.view === 'back' ? HID_SIT_SOLE * r + dd * 0.8 : HID_SIT_SOLE * r - dd * 0.5);
}

// CANON'S ARM, in the cast model's own construction (hidden_6 is the
// reference): an upper and a lower tube in the sleeve value with a dark
// outline, a round elbow, and a small skin palm with a thumb at the wrist.
// The same numbers as the model's arms (characters.js arms()), but jointed in
// any direction, so a reaching arm is the same arm as a resting one. The rig
// hands this replaces were a different character's hands: a lit, five-finger
// construction on a man who is a slate-and-mitt figure everywhere else.
//   r        head radius (scale); s/e/w  shoulder, elbow, wrist in scene units
//   opts.fill     sleeve value ('#544e59' lit side, '#3a353f' shadow side)
//   opts.fingers  0 (mitt, default), 1 (pointing) or 2 (two fingers out)
//   opts.thumb    1 or -1: which side of the forearm the thumb is on
//   opts.cap      round the shoulder (an arm whose root is in view, outside
//                 the torso silhouette, so it reads as coming off the shoulder)
//   opts.hand     a close-up hand, same palm + thumb + outline value, with the
//                 fingers grouped instead of hidden in the mitt:
//                   'lip'   fingers curled over an edge; opts.lip is the edge's
//                           distance from the wrist along the forearm (r units)
//                   'pinch' index + middle pads closed on the thumb pad; the
//                           pinch point is opts.pinchAt (default 0.47r down)
//                   'flat'  palm flat on a surface, fingers together, thumb out
// THE OUTLINE IS CAPPED at 1.2 units. Scaled with r it reached 2.4 to 4 units
// in the close-ups (hidden_7/8) and turned the mitt into a lollipop, heavier
// than every prop in the frame. Every hand part is drawn as one halo pass
// (outline value, fattened) and then one fill pass, so the fingers, palm and
// thumb merge into ONE outlined silhouette instead of a stack of outlined ovals.
function hidCastArm(r, sx, sy, ex, ey, wx, wy, opts) {
  opts = opts || {};
  var limb = r * 0.29, fill = opts.fill || '#544e59', ol = '#171519';
  var swN = Math.min(r * 0.055, 1.2), sw = hidn(swN);
  function seg(ax, ay, bx, by, wa, wb) {
    var dx = bx - ax, dy = by - ay, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / L, ny = dx / L;
    return '<path d="M' + hidn(ax + nx * wa) + ',' + hidn(ay + ny * wa) + ' L' + hidn(bx + nx * wb) + ',' + hidn(by + ny * wb) +
      ' L' + hidn(bx - nx * wb) + ',' + hidn(by - ny * wb) + ' L' + hidn(ax - nx * wa) + ',' + hidn(ay - ny * wa) +
      ' Z" fill="' + fill + '" stroke="' + ol + '" stroke-width="' + sw + '" stroke-linejoin="round"/>';
  }
  var o = '';
  if (opts.cap) o += '<circle cx="' + hidn(sx) + '" cy="' + hidn(sy) + '" r="' + hidn(limb * 0.55) + '" fill="' + fill +
    '" stroke="' + ol + '" stroke-width="' + sw + '"/>';
  o += seg(sx, sy, ex, ey, limb * 0.5, limb * 0.46);
  if (opts.cap) o += '<circle cx="' + hidn(sx) + '" cy="' + hidn(sy) + '" r="' + hidn(limb * 0.55 - swN * 0.6) + '" fill="' + fill + '"/>';
  o += seg(ex, ey, wx, wy, limb * 0.44, limb * 0.4);
  o += '<circle cx="' + hidn(ex) + '" cy="' + hidn(ey) + '" r="' + hidn(limb * 0.44) + '" fill="' + fill + '"/>';
  // the hand, hanging off the end of the forearm: local +y runs down the forearm
  var a = Math.atan2(wy - ey, wx - ex) * 180 / Math.PI - 90, t = opts.thumb === -1 ? -1 : 1;
  // opts.paw: the mission cast Canon's otter paw values (fur #8F6A4E, shade
  // #5E4634), for the close-ups from hidden_7 on, where he has his face.
  var SH = opts.paw ? '#5E4634' : '#a3876f';   // skin turned away from the light
  var SK = opts.paw ? '#8F6A4E' : HID_SKIN;
  var parts = [], lines = '';
  // sep: drawn after the merged silhouette, each with ITS OWN outline, in
  // order, so a paw's fingertips and pinching pads read as separate digits
  // instead of one mitten (review 2026-10-25, hidden_7/8)
  var sep = [];
  function cap(x1, y1, x2, y2, w, f) { parts.push({ c: 1, x1: x1 * r, y1: y1 * r, x2: x2 * r, y2: y2 * r, w: w * r, f: f || SK }); }
  function capS(x1, y1, x2, y2, w, f) { sep.push({ c: 1, x1: x1 * r, y1: y1 * r, x2: x2 * r, y2: y2 * r, w: w * r, f: f || SK }); }
  function ell(cx, cy, rx, ry, f) { parts.push({ c: 0, cx: cx * r, cy: cy * r, rx: rx * r, ry: ry * r, f: f || SK }); }
  var nf = opts.fingers || 0, kind = opts.hand;
  if (kind === 'lip') {
    // fingers grouped, lying across the frame to the edge, then the tips
    // bending down over it (shorter, foreshortened, in shade)
    var lp = opts.lip || 0.44;
    // the paw has the cast model's three fingers, a little broader
    var lfx = opts.paw ? [-0.095, 0, 0.095] : [-0.105, -0.035, 0.035, 0.105], lw = opts.paw ? 0.092 : 0.075, last = lfx.length - 1;
    lfx.forEach(function (fx2, i) {
      var top = 0.26, len = lp - (i === 0 || i === last ? 0.015 : 0);
      if (opts.paw) {
        // the paw: each finger its own outlined digit, the tip only just
        // hooking past the lip (a short shaded knuckle, not a hanging blob)
        capS(fx2 * t, top, fx2 * t, len - 0.02, lw * 0.92);
        capS(fx2 * t, len - 0.02, fx2 * t * 0.97, len + 0.02, lw * 0.86, SH);
        return;
      }
      cap(fx2 * t, top, fx2 * t, len, lw);
      cap(fx2 * t, len, fx2 * t * 0.96, len + 0.055 - (i === last ? 0.01 : 0), lw - 0.005, SH);
    });
    ell(0, 0.17, 0.18, 0.15);
    cap(-0.15 * t, 0.09, -0.19 * t, 0.29, 0.085);
  } else if (kind === 'pinch') {
    // index and middle come round to meet the thumb; the line is held where
    // the pads meet, at (0, pinchAt)
    var pa = opts.pinchAt || 0.47;
    if (opts.paw) {
      // the paw pinch: palm, then the two curled fingers tucked behind (shade),
      // then the thumb and the index finger as SEPARATE outlined digits whose
      // tips meet at the line, (0, pa), with a gap between them above it
      ell(0, 0.16, 0.16, 0.15);
      capS(0.17 * t, 0.2, 0.15 * t, 0.36, 0.085, SH);           // third, curled
      capS(0.12 * t, 0.22, 0.1 * t, 0.4, 0.09, SH);             // middle, curled
      capS(-0.16 * t, 0.16, -0.03 * t, pa - 0.005, 0.088);      // thumb
      capS(0.06 * t, 0.25, 0.03 * t, pa, 0.09);                 // index
    } else {
    ell(0, 0.18, 0.17, 0.17);
    ell(0, pa - 0.1, 0.06, 0.08, SH);                         // the web, in shade
    cap(0.15 * t, 0.24, 0.09 * t, pa + 0.02, 0.1, SH);        // middle, behind
    cap(0.1 * t, 0.26, 0.035 * t, pa, 0.105);                // index pad
    cap(-0.14 * t, 0.14, -0.04 * t, pa - 0.01, 0.1);         // thumb pad
    }
  } else if (kind === 'flat') {
    [-0.11, -0.037, 0.037, 0.11].forEach(function (fx2, i) {
      cap(fx2 * t, 0.26, fx2 * t * 1.08, [0.47, 0.53, 0.52, 0.45][i], 0.078);
    });
    ell(0, 0.17, 0.19, 0.17);
    cap(-0.16 * t, 0.1, -0.29 * t, 0.27, 0.085);
  } else {
    // the hidden_6 mitt, with one or two fingers out of it
    var fw = nf === 2 ? 0.18 : 0.13, tilt = nf === 2 ? -0.05 * t : 0;
    var fx = nf === 2 ? [-fw * 0.47, fw * 0.47] : nf === 1 ? [0.02] : [];
    fx.forEach(function (f, i) {
      var L = nf === 2 && i === 0 ? 0.74 : 0.8;
      cap(f * t, 0.3, f * t + tilt, L - fw / 2, nf === 2 ? fw * 0.92 : fw);
    });
    ell(0, 0.2, 0.19, 0.24);
    ell(-0.14 * t, 0.14, 0.075, 0.12);
    if (nf === 2) {
      // the seam between the two fingers: a hairline, not a gap
      lines += '<path d="M' + hidn(0) + ',' + hidn(r * 0.42) + ' L' + hidn(tilt * r * 0.6) + ',' + hidn(r * 0.68) +
        '" stroke="' + SH + '" stroke-width="' + hidn(swN * 0.7) + '" stroke-linecap="round"/>';
    }
  }
  var halo = '', body = '';
  parts.forEach(function (p) {
    if (p.c) {
      var d = 'M' + hidn(p.x1) + ',' + hidn(p.y1) + ' L' + hidn(p.x2) + ',' + hidn(p.y2);
      halo += '<path d="' + d + '" stroke="' + ol + '" stroke-width="' + hidn(p.w + swN * 2) + '" stroke-linecap="round" fill="none"/>';
      body += '<path d="' + d + '" stroke="' + p.f + '" stroke-width="' + hidn(p.w) + '" stroke-linecap="round" fill="none"/>';
    } else {
      halo += '<ellipse cx="' + hidn(p.cx) + '" cy="' + hidn(p.cy) + '" rx="' + hidn(p.rx + swN) + '" ry="' + hidn(p.ry + swN) + '" fill="' + ol + '"/>';
      body += '<ellipse cx="' + hidn(p.cx) + '" cy="' + hidn(p.cy) + '" rx="' + hidn(p.rx) + '" ry="' + hidn(p.ry) + '" fill="' + p.f + '"/>';
    }
  });
  sep.forEach(function (p) {
    var d = 'M' + hidn(p.x1) + ',' + hidn(p.y1) + ' L' + hidn(p.x2) + ',' + hidn(p.y2);
    body += '<path d="' + d + '" stroke="' + ol + '" stroke-width="' + hidn(p.w + swN * 2) + '" stroke-linecap="round" fill="none"/>' +
      '<path d="' + d + '" stroke="' + p.f + '" stroke-width="' + hidn(p.w) + '" stroke-linecap="round" fill="none"/>';
  });
  if ((kind === 'lip' && !opts.paw) || kind === 'flat') {
    // the grouped fingers' seams, short hairlines from the tips back
    [-0.07, 0, 0.07].forEach(function (s) {
      lines += '<path d="M' + hidn(s * r * t) + ',' + hidn(r * 0.33) + ' L' + hidn(s * r * t) + ',' + hidn(r * (kind === 'lip' ? (opts.lip || 0.44) + 0.03 : 0.46)) +
        '" stroke="' + SH + '" stroke-width="' + hidn(swN * 0.7) + '" stroke-linecap="round"/>';
    });
  }
  return o + '<g transform="translate(' + hidn(wx) + ',' + hidn(wy) + ') rotate(' + hidn(a) + ')">' + halo + body + lines + '</g>';
}

// CANON FROM BEHIND. hidden_1..4: his back is to the player until step 5 ("He
// finally turns"). The shared model has no full-body back view (view:'back'
// is honoured for headOnly), so the body is the shared model and the head is
// the shared back-of-head (hair + headset) laid over it at the model's own
// head origin, which hides the face completely. Origin = HEAD CENTRE, as
// bcCharacter. Draw his chair AFTER this: from behind, the chair back is
// between the camera and him.
//
// opts.dropArm 'left' | 'right'  remove that arm from the model, because the
//   scene draws it reaching with BCRig (the seated model ignores armPose).
//   Back view: the model's 'right' (sleeveL) is on the viewer's right.
// Seated hands rest on the table IN FRONT of him, so from behind they are
// hidden: the model's hand ellipses are dropped. Shoulder for a BCRig arm:
// (hx + 0.765r, hy + 2.23r) on the right.
var HID_CANON_SLEEVE = { left: '#3a353f', right: '#544e59' };
function hidCanonBack(r, hx, hy, opts) {
  opts = opts || {};
  var body = hidNoModelChair(bcCharacter('canon', r, { expr: 'tired', stance: opts.stance || 'seated',
    armPose: opts.armPose, view: 'back' }));
  if (opts.dropArm) {
    var f = HID_CANON_SLEEVE[opts.dropArm];
    body = body.replace(new RegExp('<(path|circle)[^>]*fill="' + f + '"[^>]*/>', 'g'), '');
  }
  if ((opts.stance || 'seated') === 'seated') {
    body = body.replace(/<ellipse cx="[-\d.]+" cy="([-\d.]+)"[^>]*fill="#c9a88f"[^>]*\/>/g,
      function (m, cy) { return parseFloat(cy) > r * 3 ? '' : m; });
  }
  // THE BACK, not a faceless front. The shared model is front-only below the
  // head, so two front features are turned round here:
  //  * the skin collar V under the chin becomes the back of the jacket collar
  //    (jacket fill, with a hair nape just above it);
  //  * the bandolier strap runs the other way across the back (mirrored), and
  //    its buckle, which sits on his chest, is not drawn.
  body = body.replace(/<path d="M[-\d.]+,([\d.]+) L[-\d.]+,[\d.]+ L[-\d.]+,[\d.]+ L[-\d.]+,[\d.]+ Z" fill="#c9a88f"\/>/,
    function (m, y0) {
      var t = parseFloat(y0), cw = r * 0.34, b = r * 1.84;
      return '<path d="M' + hidn(-cw) + ',' + hidn(t) + ' L' + hidn(cw) + ',' + hidn(t) +
        ' L' + hidn(cw * 1.3) + ',' + hidn(b) + ' L' + hidn(-cw * 1.3) + ',' + hidn(b) +
        ' Z" fill="#2e2b32" stroke="#171519" stroke-width="' + hidn(r * 0.05) + '" stroke-linejoin="round"/>' +
        '<path d="M' + hidn(-cw * 0.9) + ',' + hidn(t) + ' Q0,' + hidn(t + r * 0.22) + ' ' + hidn(cw * 0.9) + ',' + hidn(t) +
        ' L' + hidn(cw * 0.7) + ',' + hidn(t - r * 0.2) + ' L' + hidn(-cw * 0.7) + ',' + hidn(t - r * 0.2) + ' Z" fill="#332b33"/>';
    });
  body = body.replace(/<path d="[^"]*" fill="#211e24" opacity="0\.35"\/>/, '');
  var strap = '';
  body = body.replace(/<path d="[^"]*" fill="#6b6470"[^>]*\/>|<path d="[^"]*" fill="none" stroke="#8d8694"[^>]*\/>/g,
    function (m) { strap += m; return ''; });
  body = body.replace(/<rect [^>]*fill="#8d8694" stroke="#171519"[^>]*\/>/, '');
  if (strap) {
    // re-insert before the first head group so it stays under the head
    var at = body.indexOf('<g transform="translate(');
    var flipped = '<g transform="scale(-1,1)">' + strap + '</g>';
    body = at >= 0 ? body.slice(0, at) + flipped + body.slice(at) : body + flipped;
  }
  var head = '<g transform="translate(' + hidn(r * 0.07) + ',0)">' +
    bcCharacter('canon', r, { headOnly: true, view: 'back' }) + '</g>';
  return '<g transform="translate(' + hidn(hx) + ' ' + hidn(hy) + ')" data-view="back">' +
    body + head + '</g>';
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
//
// 2026-10-25 REBUILD (Studio, hidden_1: "None of the chairs are right though
// the slanted chair on the right looks good"). Every chair in hidden_1..8 and
// hidden_end_13..16 is now this one, built in the style of that slanted chair
// and finished: SOLID (no part is see-through; depth is a darker value, never
// opacity), a three-quarter seat that shows its top, front rail and one side
// rail, two back uprights that run from the seat up through the back panel
// so back and seat are one object, and four legs that each meet the floor
// with their own contact shadow. The far legs stand higher on the floor than
// the near ones, because they are farther away.
//
// x, y     centre of the seat's NEAR edge, in scene coordinates
// rot      how far the body is turned, degrees (legs stay plumb)
// floorY   the floor line the near legs stand on
// opts.w   seat width (default 44), opts.d seat depth, opts.backH back height
// opts.view  'front' (default: the chair faces us, its back beyond the seat)
//            or 'back' (we stand behind it: the back panel is nearest)
// hidChairParts returns { under, over }: a seated figure goes between them.
function hidChairParts(x, y, rot, floorY, opts) {
  opts = opts || {};
  var w = opts.w || 44, d = opts.d || 16;
  var backH = opts.backH || w * 0.82;
  var hw = w / 2, dd = d * 0.55;          // seat depth as it reads on screen
  var back = opts.view === 'back';
  var sk = (back ? -1 : 1) * d * 0.42;     // three-quarter: the far edge slides over
  var ins = d * 0.16;                      // and narrows
  var ap = Math.max(2.6, d * 0.26);        // rail depth under the seat top
  var legW = Math.max(3, w * 0.075);
  var seat = opts.seat || HID_CHAIR, rail = opts.seatEdge || HID_CHAIR_L;
  var dark = opts.legFill || HID_CHAIR_D, far = '#1f2631', side = '#232b38', ink = '#121822';
  var ow = hidn(Math.max(0.7, w * 0.016));
  var rr = rot * Math.PI / 180, cs = Math.cos(rr), sn = Math.sin(rr);
  // body space (rotated about the near-edge centre) -> scene
  function P(px, py) { return [x + px * cs - py * sn, y + px * sn + py * cs]; }
  function poly(pts, fill) {
    return '<path d="M' + pts.map(function (p) { return hidn(p[0]) + ',' + hidn(p[1]); }).join(' L') +
      ' Z" fill="' + fill + '" stroke="' + ink + '" stroke-width="' + ow + '" stroke-linejoin="round"/>';
  }
  // a plumb leg from a body-space point to a floor line, tapering slightly
  function leg(px, py, fy, fill) {
    var t = P(px, py), lw = legW * (fy < floorY ? 0.88 : 1);
    return '<path d="M' + hidn(t[0] - lw / 2) + ',' + hidn(t[1]) + ' L' + hidn(t[0] + lw / 2) + ',' + hidn(t[1]) +
      ' L' + hidn(t[0] + lw * 0.38) + ',' + hidn(fy) + ' L' + hidn(t[0] - lw * 0.38) + ',' + hidn(fy) +
      ' Z" fill="' + fill + '" stroke="' + ink + '" stroke-width="' + ow + '" stroke-linejoin="round"/>' +
      '<ellipse cx="' + hidn(t[0]) + '" cy="' + hidn(fy) + '" rx="' + hidn(lw * 1.3) + '" ry="' + hidn(lw * 0.42) +
      '" fill="#05080f" opacity="0.5"/>';
  }
  // corners: near edge at y, far edge dd up the picture plane
  var NL = [-hw, 0], NR = [hw, 0], FR = [hw - ins + sk, -dd], FL = [-hw + ins + sk, -dd];
  var lin = legW * 0.7, farFloor = floorY - dd * 0.9;
  var under = '', over = '';
  // one soft shadow under the whole footprint, then the far legs
  under += '<ellipse cx="' + hidn(x + sk * 0.5) + '" cy="' + hidn(floorY - dd * 0.45) + '" rx="' + hidn(w * 0.6) +
    '" ry="' + hidn(dd * 0.7 + 2) + '" fill="#05080f" opacity="0.28"/>';
  under += leg(FL[0] + lin, -dd + ap, farFloor, far) + leg(FR[0] - lin, -dd + ap, farFloor, far);
  // the uprights and back panel stand on the edge the back belongs to: the far
  // edge from the front, the near edge from behind
  var bL = back ? NL : FL, bR = back ? NR : FR, lean = back ? -backH * 0.04 : backH * 0.05;
  var post = legW * 0.95;
  var backPart = '';
  [[bL[0] + lin, 1], [bR[0] - lin, -1]].forEach(function (b) {
    backPart += poly([P(b[0] - post / 2, bL[1]), P(b[0] + post / 2, bL[1]),
      P(b[0] + post / 2 + lean, bL[1] - backH), P(b[0] - post / 2 + lean, bL[1] - backH)], back ? dark : seat);
  });
  // the panel: the top two-thirds of the back, between the uprights, leaving
  // the seat/back L open at the bottom so it reads as a chair and not a box
  var pT = bL[1] - backH, pB = bL[1] - backH * 0.36;
  backPart += poly([P(bL[0] + lin * 0.3 + lean, pT), P(bR[0] - lin * 0.3 + lean, pT),
    P(bR[0] - lin * 0.3 + lean * 0.36, pB), P(bL[0] + lin * 0.3 + lean * 0.36, pB)], back ? side : seat);
  backPart += '<path d="M' + hidn(P(bL[0] + lin * 0.6 + lean, pT + 1.2)[0]) + ',' + hidn(P(bL[0] + lin * 0.6 + lean, pT + 1.2)[1]) +
    ' L' + hidn(P(bR[0] - lin * 0.6 + lean, pT + 1.2)[0]) + ',' + hidn(P(bR[0] - lin * 0.6 + lean, pT + 1.2)[1]) +
    '" stroke="' + rail + '" stroke-width="' + hidn(Math.max(1, backH * 0.05)) + '" stroke-linecap="round"/>';
  // the seat: top, front rail, and the side rail the three-quarter turn shows
  var seatPart = poly([NL, NR, FR, FL].map(function (p) { return P(p[0], p[1]); }), seat);
  seatPart += '<path d="M' + hidn(P(NL[0] + 1.5, -0.9)[0]) + ',' + hidn(P(NL[0] + 1.5, -0.9)[1]) + ' L' +
    hidn(P(NR[0] - 1.5, -0.9)[0]) + ',' + hidn(P(NR[0] - 1.5, -0.9)[1]) + '" stroke="' + rail +
    '" stroke-width="' + hidn(Math.max(0.9, d * 0.07)) + '" stroke-linecap="round"/>';
  var sideX = sk > 0 ? [NR, FR] : [NL, FL];
  var railPart = poly([P(sideX[0][0], sideX[0][1]), P(sideX[1][0], sideX[1][1]),
    P(sideX[1][0], sideX[1][1] + ap), P(sideX[0][0], ap)], side);
  railPart += poly([P(NL[0], 0), P(NR[0], 0), P(NR[0], ap), P(NL[0], ap)], dark);
  var nearLegs = leg(NL[0] + lin, ap, floorY, dark) + leg(NR[0] - lin, ap, floorY, dark);
  if (back) {
    // from behind: seat, then (the sitter), then back and near legs over him
    under += seatPart;
    over += railPart + nearLegs + backPart;
  } else {
    under += backPart + seatPart + railPart + nearLegs;
  }
  return { under: under, over: over };
}
function hidChair(x, y, rot, floorY, opts) {
  var c = hidChairParts(x, y, rot, floorY, opts);
  return c.under + c.over;
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
    var lean = 18;                   // how far up the leaf stands (top stays below the basin rim)
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
    // ---- THE LIGHT FROM BELOW, the focal point of the shot: a green glow
    //      welling up out of the shaft and catching the underside of the leaf.
    o += '<path d="M' + hidn(farL + 8) + ',' + hidn(farY + 2) + ' L' + hidn(farR - 8) + ',' + hidn(farY + 2) +
      ' L' + hidn(nearR - 12) + ',' + hidn(nearY - 3) + ' L' + hidn(nearL + 12) + ',' + hidn(nearY - 3) +
      ' Z" fill="#64D9A0" opacity="0.22">' + hidAnim('opacity', '0.18;0.3;0.18', '5.7s') + '</path>';
    o += '<path d="M' + hidn(tipL + 4) + ',' + hidn(farY - lean * 0.55) + ' L' + hidn(tipR - 4) + ',' + hidn(farY - lean * 0.55) +
      ' L' + hidn(farR - 2) + ',' + hidn(farY - 1) + ' L' + hidn(farL + 2) + ',' + hidn(farY - 1) +
      ' Z" fill="#64D9A0" opacity="0.16"/>';
    // ---- THE HINGE BAR, on the far edge. Drawn after the hole so it reads as
    //      lying across it, and it is what the leaf turns on.
    o += '<rect x="' + hidn(farL - 2) + '" y="' + hidn(farY - 2.4) + '" width="' + hidn(w + 4) + '" height="3.4" rx="1.7" fill="#4a5770"/>';
    o += '<circle cx="' + hidn(farL + 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85"/>';
    o += '<circle cx="' + hidn(farR - 8) + '" cy="' + hidn(farY - 0.7) + '" r="2.4" fill="#5d6b85"/>';
    // ---- THE NEAR LIP, the kerb you would step over
    o += '<path d="M' + hidn(nearL) + ',' + hidn(nearY) + ' L' + hidn(nearR) + ',' + hidn(nearY) +
      '" stroke="#5d6b85" stroke-width="2.6" stroke-linecap="round" opacity="0.8"/>';
  } else {
    // ---- SHUT: the same plate lying flush, seen from above, same size, the
    //      same grid as the open leaf (six bars, two rails across them), same
    //      hinge along the far edge.
    o += '<path d="M' + hidn(farL) + ',' + hidn(farY) + ' L' + hidn(farR) + ',' + hidn(farY) +
      ' L' + hidn(nearR) + ',' + hidn(nearY) + ' L' + hidn(nearL) + ',' + hidn(nearY) +
      ' Z" fill="#39445c"/>';
    for (var k = 1; k < 7; k++) {
      var u = k / 7;
      o += '<path d="M' + hidn(farL + u * w) + ',' + hidn(farY + 2) + ' L' + hidn(nearL + u * (nearR - nearL)) + ',' + hidn(nearY - 2) +
        '" stroke="#1a2334" stroke-width="4.2" opacity="0.8"/>';
    }
    [0.30, 0.72].forEach(function (v) {
      var ry = farY + v * d, inset = 3;
      var lx = farL + (nearL - farL) * v, rx2 = farR + (nearR - farR) * v;
      o += '<path d="M' + hidn(lx + inset) + ',' + hidn(ry) + ' L' + hidn(rx2 - inset) + ',' + hidn(ry) +
        '" stroke="#4a5770" stroke-width="2.6" opacity="0.85"/>';
    });
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

// THE TOWN SQUARE AT NIGHT (hidden_0 and hidden_10). The text puts the way
// down under the town fountain, so this is town_0's square: its roofline (the
// stepped gable, the clock tower, the gabled and hipped houses, the awning),
// its setts, its two lamp posts at 120 and 380, and the SHARED town fountain
// (townFountain, town.js) at town_0's spot, all under one night veil. The
// hatch is at the foot of the basin, centred on it, in the same place in both
// scenes; only open/shut changes.
//   s     id suffix of the scene (its sky and shaft gradients)
//   o.open    the hatch stands open (hidden_0) or lies shut (hidden_10)
//   o.win     window colour, cold: the square is asleep
//   o.veil    night veil opacity
var HID_SQ_HATCH = { x: 250, y: 244 };   // low enough that the open leaf clears the basin rim
function hidSquareSetts() {
  // town_0's courses: square-ish setts, foreshortening as they recede, no
  // continuous joint across the square. Deterministic, so both scenes match.
  var rows = [[185.6, 8.4, 10, 19], [194.6, 10.4, 13, 24], [205.6, 13.4, 17, 33], [220.3, 16.4, 22, 42], [236.6, 23.4, 40, 57]];
  var fills = [['#7d6a54', 0.58], ['#836f57', 0.55], ['#77644e', 0.52], ['#8a765d', 0.49], ['#71604a', 0.46]];
  var seed = 7, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  var out = '';
  rows.forEach(function (r, i) {
    var x = -12 - rnd() * 8, d = '';
    while (x < 505) {
      var w = r[2] + rnd() * (r[3] - r[2]), y = r[0] + Math.round(rnd() * 2) * 0.7, h = r[1];
      d += 'M' + hidn(x + 1) + ',' + hidn(y) + ' h' + hidn(w) + ' q1,0 1,1 v' + hidn(h - 2) + ' q0,1 -1,1 h' + hidn(-w) +
        ' q-1,0 -1,-1 v' + hidn(-(h - 2)) + ' q0,-1 1,-1 Z ';
      x += w + 2.8;
    }
    out += '<path d="' + d.trim() + '" fill="' + fills[i][0] + '" opacity="' + fills[i][1] + '"/>';
  });
  return out;
}
function hidSquare(s, o) {
  o = o || {};
  var win = o.win || '#3d5a75', wo = function (a) { return ' fill="' + win + '" opacity="' + a + '"'; };
  var h = HID_SQ_HATCH;
  var t = ''
  // far row: low, pale, no detail
  + '<g opacity="0.9"><path d="M0,182 L0,96 L26,80 L52,96 L52,182 Z" fill="#8a9db3" opacity="0.4"/>'
  + '<path d="M48,182 L48,110 L74,92 L100,110 L100,182 Z" fill="#7a8da3" opacity="0.42"/>'
  + '<path d="M96,182 L96,84 L118,70 L140,84 L140,182 Z" fill="#8a9db3" opacity="0.36"/>'
  + '<path d="M300,182 L300,92 L326,74 L352,92 L352,182 Z" fill="#8a9db3" opacity="0.38"/>'
  + '<path d="M348,182 L348,106 L372,88 L396,106 L396,182 Z" fill="#7a8da3" opacity="0.42"/>'
  + '<path d="M392,182 L392,88 L418,72 L444,88 L444,182 Z" fill="#8a9db3" opacity="0.36"/>'
  + '<path d="M440,182 L440,100 L470,82 L500,100 L500,182 Z" fill="#7a8da3" opacity="0.4"/></g>'
  // the town proper, town_0's building plane at its 1.5 enlargement
  + '<g transform="translate(250 182) scale(1.5) translate(-250 -182)">'
  + '<path d="M14,182 L14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,108 L94,108 L94,118 L114,118 L114,182 Z" fill="#6f8298"/>'
  + '<path d="M14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,182 L14,182 Z" fill="#7d90a6" opacity="0.5"/>'
  + '<path d="M36,130 h14 v16 h-14 Z M60,130 h14 v16 h-14 Z M84,130 h14 v16 h-14 Z M36,158 h14 v16 h-14 Z M84,158 h14 v16 h-14 Z"' + wo(0.3) + '/>'
  // the clock tower
  + '<path d="M122,182 L122,74 L166,74 L166,182 Z" fill="#67798f"/>'
  + '<path d="M118,74 L144,50 L170,74 Z" fill="#56687e"/>'
  + '<path d="M144,50 L170,74 L160,74 Z" fill="#7d90a6" opacity="0.5"/>'
  + '<circle cx="144" cy="94" r="12" fill="#c9cfd6" opacity="0.4"/>'
  + '<circle cx="144" cy="94" r="12" fill="none" stroke="#5a6276" stroke-width="1.6"/>'
  + '<path d="M144,94 L144,87 M144,94 L149,97" stroke="#3a4250" stroke-width="1.3" stroke-linecap="round"/>'
  + '<path d="M128,120 h14 v18 h-14 Z M148,120 h14 v18 h-14 Z"' + wo(0.26) + '/>'
  + '<path d="M128,150 h34 v22 h-34 Z" fill="#4a5468" opacity="0.6"/>'
  // the gabled house, and the hipped one across the square
  + '<path d="M172,182 L172,116 L204,116 L204,182 Z" fill="#6a7286"/>'
  + '<path d="M166,116 L188,96 L210,116 Z" fill="#5a6276"/>'
  + '<path d="M178,128 h9 v12 h-9 Z M191,128 h9 v12 h-9 Z"' + wo(0.28) + '/>'
  + '<path d="M180,152 h18 v30 h-18 Z" fill="#4a3a20"/>'
  + '<path d="M196,110 h7 v8 h-7 Z" fill="#5a6276"/>'
  + '<path d="M296,182 L296,120 L340,120 L340,182 Z" fill="#6a7286"/>'
  + '<path d="M290,120 L306,102 L330,102 L346,120 Z" fill="#5a6276"/>'
  + '<path d="M302,132 h11 v14 h-11 Z M322,132 h11 v14 h-11 Z"' + wo(0.26) + '/>'
  + '<path d="M310,156 h16 v26 h-16 Z" fill="#4a3a20"/>'
  // the shopfront with its scalloped awning
  + '<path d="M400,182 L400,112 L470,112 L470,182 Z" fill="#647689"/>'
  + '<path d="M396,112 L435,94 L474,112 Z" fill="#54667a"/>'
  // the awning, in a night value: at this enlargement the shop is cut by the
  // frame edge, and a red scallop on its own read as a stray blob
  + '<path d="M398,142 q10,9 20,0 q10,9 20,0 q10,9 20,0 q10,9 18,0 L476,132 L398,132 Z" fill="#54667a" opacity="0.9"/>'
  + '<path d="M406,152 h30 v20 h-30 Z"' + wo(0.24) + '/>'
  + '<path d="M444,152 h20 v30 h-20 Z" fill="#4a3a20"/>'
  + '</g>'
  // the paving, town_0's setts
  + '<path d="M0,182 L500,182 L500,260 L0,260 Z" fill="#6a5a48"/>'
  + hidSquareSetts()
  + '<path d="M0,182 L500,182 L500,184.6 L0,184.6 Z" fill="#8a7a63" opacity="0.5"/>'
  // the two lamp posts at town_0's spots, unlit
  + [120, 380].map(function (x) {
      return '<ellipse cx="' + x + '" cy="181" rx="7" ry="1.6" fill="#0a0806" opacity="0.3"/>'
        + '<path d="M' + (x - 5) + ',181 L' + (x + 5) + ',181 L' + (x + 4) + ',177 L' + (x - 4) + ',177 Z" fill="#3e4454"/>'
        + '<rect x="' + (x - 1.6) + '" y="150" width="3.2" height="27" fill="#4a5266"/>'
        + '<rect x="' + (x - 7) + '" y="137" width="14" height="14" rx="2" fill="#3e4454"/>'
        + '<rect x="' + (x - 5) + '" y="139" width="10" height="10" rx="1" fill="#6a7a8c" opacity="0.5"/>';
    }).join('')
  // the square's fountain: the shared one, at town_0's spot and size
  + (typeof townFountain === 'function' ? townFountain('hid' + s, 250, 194, 1.25) : hidFountain(s, 250, 160))
  // ONE NIGHT VEIL over the whole square, so it is the same square after dark
  + '<rect width="500" height="260" fill="#0a1224" opacity="' + (o.veil || 0.66) + '"/>';
  // THE HATCH, at the foot of the basin, centred on it. Not veiled: it is the
  // subject, and its own steel greys are already night values.
  // o.ownHatch: the scene draws its own hatch (hidden_0's stair, see there).
  if (o.ownHatch) return t;
  if (o.open) t += '<ellipse cx="' + h.x + '" cy="' + (h.y + 4) + '" rx="76" ry="26" fill="url(#hidShaft' + s + ')"/>';
  t += hidHatch(h.x, h.y, !!o.open, s);
  return t;
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
    <stop offset="0%" stop-color="#101e23"/><stop offset="100%" stop-color="#254d3c"/>
  </linearGradient>
  <radialGradient id="hidShaft0" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#64D9A0" stop-opacity="0.3"/><stop offset="55%" stop-color="#64D9A0" stop-opacity="0.1"/><stop offset="100%" stop-color="#64D9A0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidSky0)"/>
<!-- town_0's square at night, the shared fountain: hidSquare. The hatch is
     this scene's own (below). -->
` + hidSquare('0', { open: true, ownHatch: true }) + `
<!-- THE SERVICE HATCH AND ITS STAIR, beside the fountain. Studio note
     2026-10-25: "the old placement of the stairs and stair design was better,
     this is cluttered and doesn't look like stairs." So this is the earlier
     design, back in its earlier place, verbatim: the raised lid standing
     behind the opening, a shallow opening in the paving whose inner walls
     catch the light from below, and three treads stepping down into it. -->
<ellipse cx="121" cy="231" rx="71" ry="25" fill="url(#hidShaft0)"/>
<!-- Raised lid and hinge sit behind the opening. -->
<path d="M72 216L76 180H165L170 216Z" fill="#263443"/>
<path d="M77 183H163L167 211H75Z" fill="#182630"/>
<path d="M88 184L86 211 M103 184L102 211 M119 184V211 M135 184L136 211 M151 184L153 211" stroke="#344553" stroke-width="2"/>
<path d="M77 181H164 M76 201H166" stroke="#485765" stroke-width="1.3"/>
<!-- A shallow ground-plane opening; its inner walls catch light from below. -->
<path d="M70 213H172L181 246H61Z" fill="#34414c"/>
<path d="M75 217H167L174 241H68Z" fill="url(#hidShaftDark0)"/>
<path d="M75 217L68 241L75 237L81 220Z M167 217L174 241L167 237L161 220Z" fill="#385d4b" opacity=".65"/>
<!-- the three treads, each lit along its nose with a dark riser under it,
     narrowing as they go down -->
<path d="M80 224H162V226.6H80Z M85 230H157V232.6H85Z M91 236H151V238.6H91Z" fill="#0e1a1c" opacity=".7"/>
<path d="M80 222H162V224H80Z M85 228H157V230H85Z M91 234H151V236H91Z" fill="#6a9a7c" opacity=".8"/>
<path d="M71 214H171" stroke="#566571" stroke-width="2"/>
<path d="M64 244H178" stroke="#64796c" stroke-width="1.4" opacity=".7"/>
<path d="M83 213V217 M158 213V217" stroke="#65727a" stroke-width="3"/>
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
  <!-- the wreck and THE LAMP: the shared screen wreck (hidScreenWreck) -->
  ` + hidScreenWreck(250, 140, 0.44, 'hidLamp1', { dur: ['6.37s', '8.89s'] }) + `
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
<!-- Floor, and the cold spill of screenlight across it: under the furniture,
     so it lights the floor and never veils a chair leg -->
<rect x="0" y="252" width="500" height="8" fill="#0a121e" opacity="0.7"/>
<ellipse cx="250" cy="248" rx="170" ry="14" fill="#5fa0b8" opacity="0.08"/>
<!-- CANON. From behind: a back, a head, a chair. He faces the screen, so his
     face is never shown; the back of his head and the headset are. -->
<!-- HIS CHAIR is seated with him (hidSeated): seat under his hips, the back
     between us and him, four legs on the floor. -->
` + hidSeated(HID_HEAD, 200, 252, { view: 'back',
  chair: { w: 62, d: 18, backH: 34, seat: '#333e52', seatEdge: '#46536b' } }) + `
<!-- THE SECOND CHAIR. Empty, angled toward him. It has been there a while.
     Drawn after the floor wash so the wash cannot veil its legs. -->
` + hidChair(332, 208, -5, 252, { w: 48, d: 16, backH: 46 }) + `
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
<!-- 12 units nearer Canon than it was, so his paw, at a natural arm's
     length, still has its pads on the pencil's near end -->
<rect x="164" y="152" width="76" height="3.6" rx="1.8" fill="#F2C14E" opacity="0.9"/>
<rect x="236" y="152" width="6" height="3.6" rx="1.2" fill="#525f79"/>
<polygon points="164,152 158,153.8 164,155.6" fill="#6d7b96"/>
<!-- faint amber bloom under it, the only warm thing in the room's own air -->
<ellipse cx="202" cy="155.5" rx="40" ry="2.4" fill="#F2C14E" opacity="0.035"/>
<!-- Canon: seated, his back to us, facing the screen; the frame crops him at
     the left and bottom. Head radius 24 because the camera is closer, and
     nothing else about him changes. His right arm is dropped from the model
     and redrawn, reaching to where the pencil went down.
     His chair, seen from behind, between us and him, so he reads as seated
     ("I would stand up, but..."): hidSeated, the head pinned at 64,150. His
     right arm is the cast arm (hidCastArm, the hidden_6 construction), from
     the model's own shoulder (hx + 0.765r, hy + 2.23r), ending in his otter
     paw (paw: true, the hidden_7/8 paw) with its pads closed on the near end
     of the pencil he just set down. It goes under the chair back. -->
` + hidSeated(24, 64, 0, { view: 'back', headY: 150,
  chair: { w: 104, d: 30, backH: 56, seat: '#333e52', seatEdge: '#46536b' },
  body: { dropArm: 'right' },
  arm: hidCastArm(24, 87, 189, 120, 190, 160, 160.1, { thumb: -1, cap: true, hand: 'pinch', paw: true }) }) + `
<!-- CANON'S ARM STANDARD (hidden_2/3/4/7/8), 2026-10-25: hidCastArm, the
     cast model's own arm and mitt (hidden_6 is the reference). It replaced
     the BCRig five-finger hands, which were a different character's hands on
     this figure (Studio: "hidden_6 is best and the rest look weird"). -->
<!-- THE SECOND CHAIR. Big in frame. It has been there a while. -->
<!-- It stands IN FRONT of the table's right leg (feet at 255, the leg's at
     252), so drawing it over that leg is the right order. -->
` + hidChair(394, 211, -6, 255, { w: 58, d: 20, backH: 56 }) + `
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
  <!-- THE WRECK and THE LAMP, a long way down and a mile out: the shared
       screen wreck (hidScreenWreck) at full size; this is its close-up. The
       inner glow below was an unclosed circle that swallowed the lamp core,
       the scanline and the vignette; it is closed now. -->
  ` + hidScreenWreck(254, 208, 1, 'hidLamp3', { dur: ['8.56s', '7.68s'] }) + `
  <circle cx="344" cy="164" r="16" fill="url(#hidLamp3)" opacity="0.6">
    <animate attributeName="opacity" values="0.44;0.72;0.44" dur="9.52s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </circle>
  <!-- scanline -->
  <rect x="34" y="12" width="432" height="26" fill="url(#hidScan3)">
    <animate attributeName="y" values="-6;212" dur="9.31s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="9.31s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/>
  </rect>
  <!-- screen curvature vignette -->
  <rect x="34" y="12" width="432" height="196" fill="url(#hidVig3)"/>
</g>
<!-- Canon at the bottom edge, seated, back to us, facing the screen. The arm
     goes UP to the screen with a bow in it, and it ends in a hand: two
     fingers out of a loose fist, which is the gesture. His right arm is
     dropped from the model and redrawn by the character rig:
     Canon's arm standard (see hidden_2): shoulder 152.6,227.2 -> elbow
     171.35,217.21 (out, away from the body) -> wrist 176,193, cuff at the wrist.
     BCRig.hand(17, at the wrist, rot 24, size 0.76, pose 'point' with the middle finger out too, skin #c9a88f, edge #171519 13.2)
     Regenerate from the rig rather than editing the numbers below. -->
` + hidSeated(17, 140, 0, { view: 'back', headY: 200,
  chair: { w: 75, d: 22, backH: 41, seat: '#333e52', seatEdge: '#46536b' },
  body: { dropArm: 'right' },
  arm: hidCastArm(17, 156, 224, 172, 214, 178, 194, { fingers: 2, thumb: -1, cap: true }) }) + `
<!-- (the rig hand that pointed here is gone: the cast arm above carries the two fingers) -->
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
<!-- row 3, inner pair: library shelves / observatory dome. With these the
     small screens are NINE, as hidden_1 and the text have them. -->
<g>
  <rect x="106" y="126" width="64" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="108" y="158" width="60" height="12" fill="#16323a"/><rect x="108" y="157" width="60" height="1" fill="#3d5a75" opacity="0.45"/>
  <rect x="116" y="134" width="30" height="23" fill="#0b1a20"/>
  <path d="M118,143 h26 M118,150 h26" stroke="#16323a" stroke-width="1"/>
  <rect x="330" y="126" width="64" height="46" rx="2" fill="#0e2028" stroke="#1d3f49" stroke-width="1"/>
  <rect x="332" y="152" width="60" height="18" fill="#16323a"/><rect x="332" y="151" width="60" height="1" fill="#3d5a75" opacity="0.42"/>
  <path d="M352,151 V143 A10,10 0 0 1 372,143 V151 Z" fill="#0b1a20"/>
  <path d="M364,136 L374,131" stroke="#0b1a20" stroke-width="2.4"/>
</g>
<!-- THE BIG SCREEN. One of nine is his brother. -->
<rect x="182" y="14" width="136" height="84" rx="3" fill="#1e2637" stroke="#4a5770" stroke-width="2"/>
<g clip-path="url(#hidBigClip4)">
  <rect x="186" y="18" width="128" height="76" fill="url(#hidBig4)"/>
  <path d="M186,44 Q218,40 250,44 Q282,48 314,44 L314,54 Q282,58 250,54 Q218,50 186,54Z" fill="#1d3f49" opacity="0.42">
  </path>
  ` + hidScreenWreck(252, 94, 0.31, 'hidLamp4', { dur: ['7.5s', '8.48s'] }) + `
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
<!-- the turning card: mid-flip, blank face up. Its long far edge stays down
     on the table top (the pivot, y 196) and the near long edge is lifted in
     his fingers, so the card stands as a tilted face (a card, not a stick:
     it shows its full width and a foreshortened height). The lifted edge
     rocks slightly. -->
<ellipse cx="302" cy="196.6" rx="24" ry="1.4" fill="#05080f" opacity="0.4"/>
<path d="M280,196.2 L324,196.2 L321,181 L277,181 Z" fill="#7a8296" stroke="#3d4a60" stroke-width="0.8" stroke-linejoin="round">
  <animate attributeName="d" values="M280,196.2 L324,196.2 L321,181 L277,181 Z;M280,196.2 L324,196.2 L321.6,183 L277.6,183 Z;M280,196.2 L324,196.2 L321,181 L277,181 Z" dur="6.35s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M277,181 L321,181" stroke="#a3abbd" stroke-width="1.1" stroke-linecap="round" opacity="0.8">
  <animate attributeName="d" values="M277,181 L321,181;M277.6,183 L321.6,183;M277,181 L321,181" dur="6.35s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M280,196.2 L324,196.2" stroke="#4a5162" stroke-width="1" opacity="0.8"/>
<!-- calculator -->
<g transform="translate(128,180)">
  <rect x="0" y="0" width="34" height="17" rx="2" fill="#46536b"/>
  <rect x="3" y="3" width="28" height="5.6" rx="1" fill="#16323a"/>
  <rect x="3" y="3" width="17" height="5.6" rx="1" fill="#2f4245" opacity="0.75"/>
</g>
<!-- CANON from behind, centre, low, facing the screens. The left arm rests
     on the table in front of him (hidden by his back); the right reaches out
     toward the turning card without looking at it. That arm is dropped from
     the model and redrawn by the character rig:
     Canon's arm standard (see hidden_2): shoulder 249.1,165 -> elbow
     258.37,181.3 (dropped, behind the chair back) -> wrist 280,179 at the
     card's lifted edge; the fingers curl over that edge onto the card's face
     and stop inside it (they used to hang past its bottom edge).
     BCRig.hand(15, at the wrist, pose lerpPose(rest, grab, 0.85), rot 108, size 0.76, skin #c9a88f, edge #171519 15.4)
     Regenerate from the rig rather than editing the numbers below. -->
` + hidSeated(15, 238, 253, { view: 'back',
  chair: { w: 66, d: 20, backH: 36, seat: '#333e52', seatEdge: '#46536b' },
  body: { dropArm: 'right' },
  arm: hidCastArm(15, 249.48, hidSeatedHeadY(15, 253, { view: 'back', chair: { d: 20 } }) + 33.45,
    260, 180, 279, 185, { thumb: -1 }) }) + `
<!-- (the rig hand that turned the card here is gone: the cast arm above reaches it) -->
<!-- HIS CHAIR, between us and him: drawn by hidSeated above, with him in it -->

<!-- second chair, angled toward him -->
` + hidChair(360, 226, -5, 253, { w: 48, d: 16, backH: 48 }) + `
<rect x="0" y="253" width="500" height="7" fill="#0a121e" opacity="0.7"/>
</svg>`;

// Scene 5: He finally turns. He is younger than the back of his head suggested
// and more tired than the front of it admits. This is the first frame with his
// face (decision 2026-10-25): the mission cast Canon, out of his chair now,
// explaining toward the second chair ("You have to put the thing in their
// hands").
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
<!-- CANON, TURNED: the mission cast model, face and all, from here on. It
     has no seated pose, so his chair stays where hidSeated stood it and he
     stands beside it, 'explain', turned (flip) toward the second chair. -->
` + hidSeated(15, 260, 253, { view: 'front',
  chair: { w: 60, d: 20, backH: 54, rot: 4, seat: '#333e52', seatEdge: '#46536b' },
  stand: { pose: 'explain', x: 312, h: 164, flip: true } }) + `
<!-- second chair, and he is turned toward it. Its near feet (257) are in
     front of the table's right leg (253), which it is drawn over. -->
` + hidChair(392, 232, -7, 257, { w: 48, d: 16, backH: 48 }) + `
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
  ` + hidScreenWreck(241, 142, 0.53, 'hidLamp6', { dur: ['8s', '9.04s'] }) + `
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
<rect x="0" y="252" width="500" height="8" fill="#0a121e" opacity="0.7"/>
<ellipse cx="250" cy="248" rx="170" ry="14" fill="#5fa0b8" opacity="0.08"/>
<!-- second chair. Drawn after the floor wash so no part of it is veiled. -->
` + hidChair(332, 208, -5, 252, { w: 48, d: 16, backH: 46 }) + `
<!-- CANON BESIDE HIS CHAIR (hidSeated opts.stand): the mission cast model
     has no seated pose, so the chair stays put and he stands at it, 'think',
     the headset cup to his ear: "I am watched more than you are." -->
` + hidSeated(HID_HEAD, 200, 252, { view: 'front',
  chair: { w: 62, d: 18, backH: 52, seat: '#333e52', seatEdge: '#46536b' },
  stand: { pose: 'think', x: 252, h: 164 } }) + `
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

<!-- THE DRAWER OF A MAN WHO MAKES THINGS OUT OF WHAT WASHES UP. Exactly what
     the text lists: bent wire, a coil of fishing line, three spoons, a jar of
     screws sorted by nothing. Four silhouettes, one per quadrant of the lit
     floor, with clear floor between them. Detail is subordinate to shape. -->

<!-- 1. THE COIL OF FISHING LINE. Pale monofilament wound in loose turns, the
     free end trailing off across the floor. -->
<g transform="translate(140,112)">
  <ellipse cx="0" cy="22" rx="58" ry="12" fill="#1e2820" opacity="0.5"/>
  <g fill="none" stroke="#c9d6de" stroke-linecap="round">
    <ellipse cx="0" cy="4" rx="48" ry="20" stroke-width="2.4" opacity="0.85"/>
    <ellipse cx="-2" cy="3" rx="42" ry="17" stroke-width="2" opacity="0.7"/>
    <ellipse cx="1" cy="5" rx="36" ry="14.5" stroke-width="2.2" opacity="0.8"/>
    <ellipse cx="0" cy="4" rx="30" ry="12" stroke-width="1.8" opacity="0.65"/>
    <ellipse cx="0" cy="4" rx="24" ry="9.5" stroke-width="1.6" opacity="0.55"/>
  </g>
  <path d="M46,10 Q66,22 84,18 Q98,15 104,26" fill="none" stroke="#c9d6de" stroke-width="1.6" opacity="0.7" stroke-linecap="round"/>
  <path d="M-30,-6 Q0,-14 34,-8" fill="none" stroke="#eef3f6" stroke-width="1.2" opacity="0.5" stroke-linecap="round"/>
</g>

<!-- 2. THREE SPOONS, loose, not matched: three different angles, bowls up. -->
<g transform="translate(352,108)">
  <ellipse cx="0" cy="24" rx="64" ry="11" fill="#1e2820" opacity="0.45"/>
  <g transform="translate(-34,4) rotate(-24)">
    <ellipse cx="0" cy="0" rx="10" ry="14" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1.2"/>
    <rect x="-2.2" y="12" width="4.4" height="40" rx="2.2" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1"/>
  </g>
  <g transform="translate(2,-6) rotate(8)">
    <ellipse cx="0" cy="0" rx="10" ry="14" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1.2"/>
    <rect x="-2.2" y="12" width="4.4" height="40" rx="2.2" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1"/>
  </g>
  <g transform="translate(40,2) rotate(36)">
    <ellipse cx="0" cy="0" rx="9" ry="12.5" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1.2"/>
    <rect x="-2" y="11" width="4" height="36" rx="2" fill="url(#hidSpoon7)" stroke="#3a4350" stroke-width="1"/>
  </g>
</g>

<!-- 3. THE GLASS JAR OF SCREWS, sorted by nothing: long and short, flat and
     round heads, all in together. Glass reads as an outline and a sheen. -->
<g transform="translate(150,186)">
  <ellipse cx="0" cy="28" rx="40" ry="8" fill="#1e2820" opacity="0.55"/>
  <!-- the screws inside, behind the glass sheen -->
  <g fill="#8e97a2" stroke="#3a4350" stroke-width="0.8">
    <rect x="-22" y="6" width="3" height="18" transform="rotate(-18,-20,15)"/><rect x="-25" y="4" width="9" height="3" rx="1.4" transform="rotate(-18,-20,15)"/>
    <rect x="-8" y="10" width="3" height="14" transform="rotate(22,-6,17)"/><rect x="-11" y="8" width="9" height="3" rx="1.4" transform="rotate(22,-6,17)"/>
    <rect x="6" y="4" width="3" height="20" transform="rotate(-6,8,14)"/><circle cx="7.5" cy="4" r="4" transform="rotate(-6,8,14)"/>
    <rect x="18" y="12" width="3" height="12" transform="rotate(34,20,18)"/><rect x="15" y="10" width="9" height="3" rx="1.4" transform="rotate(34,20,18)"/>
    <rect x="-16" y="16" width="3" height="10" transform="rotate(70,-14,21)"/><circle cx="-14.5" cy="16" r="3.4" transform="rotate(70,-14,21)"/>
    <rect x="0" y="16" width="3" height="9" transform="rotate(-48,2,20)"/><rect x="-3" y="14" width="9" height="3" rx="1.4" transform="rotate(-48,2,20)"/>
  </g>
  <!-- glass body -->
  <path d="M-30,-18 L30,-18 L32,24 Q0,32 -32,24 Z" fill="#9fc3cf" opacity="0.16"/>
  <path d="M-30,-18 L30,-18 L32,24 Q0,32 -32,24 Z" fill="none" stroke="#b9d3dc" stroke-width="1.8" opacity="0.75"/>
  <path d="M-24,-12 L-25,18" stroke="#e6f0f4" stroke-width="2.4" opacity="0.4" stroke-linecap="round"/>
  <!-- the lid, screwed on -->
  <rect x="-32" y="-28" width="64" height="11" rx="2" fill="#5a6676" stroke="#2c343f" stroke-width="1.2"/>
  <rect x="-32" y="-28" width="64" height="3" rx="1.5" fill="#8794a6" opacity="0.6"/>
</g>

<!-- 4. A TWIST OF BENT WIRE. One length, kinked at hard angles, with one turn
     wrapped round itself: the only sharp thing in the drawer. -->
<g transform="translate(350,186)">
  <ellipse cx="0" cy="22" rx="60" ry="9" fill="#1e2820" opacity="0.45"/>
  <path d="M-56,12 L-30,-8 L-12,14 Q-4,22 4,10 Q10,0 2,-4 Q-6,-6 -4,4 L18,-14 L34,8 L56,-6" fill="none" stroke="#2c343f" stroke-width="4.6" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M-56,12 L-30,-8 L-12,14 Q-4,22 4,10 Q10,0 2,-4 Q-6,-6 -4,4 L18,-14 L34,8 L56,-6" fill="none" stroke="#b08a5e" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M-50,8 L-30,-6" stroke="#e0c49a" stroke-width="1" opacity="0.6" stroke-linecap="round"/>
</g>

<!-- the room light moving very slightly over the drawer floor, so the shot
     is not a photograph. One slow loop, nothing else. -->
<ellipse cx="250" cy="140" rx="200" ry="76" fill="#5fa0b8" opacity="0.03">
  <animate attributeName="opacity" values="0.02;0.06;0.02" dur="9.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- HIS HAND on the drawer lip, the arm coming in from off frame above, the
     fingers curled over the back edge of the drawer. Now hidCastArm
     hand:'lip' (the close-up of Canon's hidden_6 hand: grouped fingers over
     the lip at 63.6, shaded tips past it, thumb on the near side, 1.2 outline).
     The rig call it replaced, kept for reference:
     BCRig.arm(20, shoulder 150,-26 -> wrist 160,35, sleeve #544e59 0.36r over #171519 halo 0.48r), cuff at the wrist
     BCRig.hand(20, size 0.76, edgeW 11.2 (Canon's arm standard, see hidden_2), wrist 160,35, pose { thumb1 34, thumb2 22, index 8/16/34, middle 8/18/36, ring 10/20/38, pinky 12/22/40 } (a grab with the knuckles opened so the fingertips hook over the lip), rot 180, skin #c9a88f, edge #171519)
     Regenerate from the rig rather than editing the numbers below.
     paw: true (decision 2026-10-25, Canon is the mission cast otter from
     hidden_5 on): the cast model's fur and three fingers, not a man's hand. -->
<path d="M146,63.6 L176,63.6" stroke="#0b0f17" stroke-width="1.6" opacity="0.55" stroke-linecap="round"/>` + hidCastArm(44, 150, -90, 156, -26, 161, 45, { thumb: -1, hand: 'lip', lip: 0.42, paw: true }) + `
</svg>`;

// Scene 8: THE SOUNDING FORK (decision 2026-10-25, "Fork everywhere": the
// first gadget is a tuning fork, not a spoon; the story text follows). A
// tuning fork with a length of fishing line knotted through a hole in the end
// of its stem. A hand at the top pinches the line between thumb and
// forefinger; the fork hangs plumb, stem up, tines down, and both tine tips
// just touch a plank, which shivers. The hand is generated by BCRig
// (character-rig skill). Matches the inventory icon ('sounding-spoon' in
// index.html), which was always a tuning fork.
STORY_SCENES['hidden_8'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hidWall8" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20364a"/><stop offset="55%" stop-color="#1a2c3e"/><stop offset="100%" stop-color="#101c2b"/>
  </linearGradient>
  <linearGradient id="hidSteel8" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#6d7987"/><stop offset="35%" stop-color="#e6eef6"/><stop offset="60%" stop-color="#aeb9c8"/><stop offset="100%" stop-color="#4b5563"/>
  </linearGradient>
</defs>
<!-- PLAIN LIT WALL. The fork is the whole subject. -->
<rect width="500" height="260" fill="url(#hidWall8)"/>
<ellipse cx="150" cy="120" rx="230" ry="180" fill="#5fa0b8" opacity="0.07"/>
<!-- THE PLANK. "Touch it to a wall or a piling or a plank." Its top edge is
     y=219 and the two tine tips sit exactly on it. -->
<g>
  <rect x="0" y="219" width="500" height="7" fill="#6b5338"/>
  <rect x="0" y="219" width="500" height="1.6" fill="#8c7050" opacity="0.8"/>
  <rect x="0" y="226" width="500" height="26" fill="#4a3826"/>
  <rect x="0" y="252" width="500" height="8" fill="#2a1f16"/>
  <g stroke="#3a2b1d" stroke-width="1" fill="none" opacity="0.7">
    <path d="M0,234 Q120,231 230,235 T500,233"/><path d="M0,244 Q160,241 300,245 T500,242"/>
    <path d="M330,229 q30,4 60,0"/><path d="M60,239 q24,3 50,0"/>
  </g>
  <circle cx="40" cy="238" r="2" fill="#2a1f16"/><circle cx="460" cy="238" r="2" fill="#2a1f16"/>
</g>
<!-- contact shadow under the two tine tips -->
<ellipse cx="250" cy="220" rx="15" ry="2.2" fill="#1c140d" opacity="0.55"/>
<!-- THE SOUNDING FORK ON ITS LINE. A tuning fork with fishing line knotted
     through a hole in the end of its stem. Hung from the hole it hangs stem
     UP, tines down, plumb under the pinch at (250,74). One group pivots at the
     pinch; the sway is a fraction of a degree because both tine tips rest on
     the plank. Drawn BEFORE the hand so the fingers close over the line. -->
<g transform="translate(250,74)">
  <animateTransform attributeName="transform" type="rotate" values="-0.4 0 0;0.4 0 0;-0.4 0 0" dur="6.99s" repeatCount="indefinite" additive="sum" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <g transform="translate(-250,-74)">
  <!-- the line, plumb from the pinch to the knot -->
  <line x1="250" y1="71" x2="250" y2="119" stroke="#05080f" stroke-width="3" opacity="0.5"/>
  <line x1="250" y1="71" x2="250" y2="119" stroke="#e4ecf4" stroke-width="1.3"/>
  <!-- the tines ringing: a faint doubled edge either side of each tine,
       breathing in and out, which is what a struck fork looks like -->
  <g fill="none" stroke="#cfe0ec" stroke-width="0.9" stroke-linecap="round">
    <path d="M238.6,172 L238.6,214 M261.4,172 L261.4,214" opacity="0.4"><animate attributeName="opacity" values="0.4;0.08;0.4" dur="1.43s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
    <path d="M247.4,174 L247.4,212 M252.6,174 L252.6,212" opacity="0.25"><animate attributeName="opacity" values="0.25;0.05;0.25" dur="1.71s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  </g>
  <!-- THE FORK: a round end with the hole in it, the stem, the yoke, and two
       parallel tines whose tips stand on the plank at y=219 -->
  <path d="M246.6,131 A5.6,5.6 0 1 1 253.4,131 L253.4,154 C253.4,157 259.5,158 259.5,166 L259.5,217.6 Q259.5,219 258.1,219 L255.9,219 Q254.5,219 254.5,217.6 L254.5,170 Q254.5,165.5 250,165.5 Q245.5,165.5 245.5,170 L245.5,217.6 Q245.5,219 244.1,219 L241.9,219 Q240.5,219 240.5,217.6 L240.5,166 C240.5,158 246.6,157 246.6,154 Z" fill="url(#hidSteel8)" stroke="#2a313b" stroke-width="1.1" stroke-linejoin="round"/>
  <!-- light from the upper left: a bright line down the stem and each tine -->
  <g stroke="#f4f8fc" stroke-width="1.1" fill="none" stroke-linecap="round">
    <path d="M248.6,134 L248.6,153" opacity="0.7"/>
    <path d="M242.3,167 L242.3,215" opacity="0.65"/><path d="M256.3,170 L256.3,215" opacity="0.4"/>
    <path d="M243,160 Q245.5,157.5 247.6,156.5" opacity="0.5"/>
  </g>
  <!-- the hole in the end of the stem and the line knotted through it:
       the front strand drops into the hole, the loop goes back over the end,
       and the knot sits on top with a short tail -->
  <circle cx="250" cy="126.6" r="2.2" fill="#1a2028" stroke="#2a313b" stroke-width="0.6"/>
  <path d="M250,119 C250.5,122 250.5,124.4 250,126.6" stroke="#e4ecf4" stroke-width="1.3" fill="none"/>
  <path d="M250,119 C255,119 256,123 254.5,121.6" stroke="#e4ecf4" stroke-width="1.3" fill="none"/>
  <ellipse cx="250" cy="119" rx="2.6" ry="2" fill="#e4ecf4" stroke="#7d8896" stroke-width="0.5"/>
  <path d="M248.5,118.5 l-3,2.6" stroke="#e4ecf4" stroke-width="1" stroke-linecap="round" fill="none"/>
  </g>
</g>
<!-- THE SOUND, where the two tine tips touch the plank: a ring of
     shiver marks round the contact and ripples running out along the plank.
     Every loop closes on its first value. -->
<g stroke="#9fd4e4" stroke-linecap="round" fill="none">
  <path d="M231.81,208.5 A21,21 0 0 0 229.01,218.27 M270.99,218.27 A21,21 0 0 1 268.19,208.5" stroke-width="1.4" opacity="0.9"><animate attributeName="opacity" values="0.9;0.35;0.9" dur="1.31s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
  <path d="M226.62,205.5 A27,27 0 0 0 223.02,218.06 M276.98,218.06 A27,27 0 0 1 273.38,205.5" stroke-width="1.2" opacity="0.6"><animate attributeName="opacity" values="0.6;0.15;0.6" dur="1.57s" begin="0.35s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></path>
</g>
<ellipse cx="250" cy="221" rx="19" ry="2.6" fill="none" stroke="#9fd4e4" stroke-width="1.2" opacity="0">
  <animate attributeName="rx" values="19;110" dur="3.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0 0.58 1"/>
  <animate attributeName="ry" values="2.6;7" dur="3.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0 0.58 1"/>
  <animate attributeName="opacity" values="0.6;0" dur="3.36s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
</ellipse>
<ellipse cx="250" cy="221" rx="19" ry="2.6" fill="none" stroke="#9fd4e4" stroke-width="1.2" opacity="0">
  <animate attributeName="rx" values="19;110" dur="3.84s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0 0.58 1"/>
  <animate attributeName="ry" values="2.6;7" dur="3.84s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.2 0 0.58 1"/>
  <animate attributeName="opacity" values="0.5;0" dur="3.84s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
</ellipse>
<!-- THE HAND, holding the line at its top, the arm coming in from off frame
     above: Canon's arm standard, hidCastArm hand:'pinch' (index and middle
     pads closed on the thumb pad, the line leaving between them at 250,71;
     the elbow is off frame so no sleeve lump shows at the top edge). It replaced a BCRig
     five-finger hand and a hand-drawn sleeve. paw: the mission cast otter's
     fur (decision 2026-10-25), as in hidden_7; thumb and index are separate
     outlined digits meeting at the line, and the sleeve is the cast coat
     slate #4D4854 (was #3a353f, darker than the model's coat). -->
` + hidCastArm(40, 262, -90, 252, -30, 250, 52, { thumb: 1, fill: '#4D4854', hand: 'pinch', paw: true }) + `
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
  <!-- 158 wide so the footer line keeps a clear margin to both edges -->
  <rect x="-79" y="-42" width="158" height="86" rx="2" fill="#4a5162" opacity="0.4"/>
  <rect x="-81" y="-46" width="158" height="86" rx="2" fill="url(#hidCard9)"/>
  <rect x="-81" y="-46" width="158" height="3" rx="1.5" fill="#a2aabc" opacity="0.5"/>
  <!-- ruled line -->
  <line x1="-64" y1="-30" x2="60" y2="-30" stroke="#4c5468" stroke-width="0.8" opacity="0.6"/>
  <!-- The clue, pencil grey, written by hand. Canon does not give the answer. -->
  <text x="-2" y="-8" text-anchor="middle" font-family="Georgia,serif" font-size="10.5" fill="#4a5770" opacity="0.9">Infamous clue setter</text>
  <text x="-2" y="7" text-anchor="middle" font-family="Georgia,serif" font-size="10.5" fill="#4a5770" opacity="0.9">mail returned (4)</text>
  <line x1="-40" y1="18" x2="36" y2="18" stroke="#4c5468" stroke-width="0.7" opacity="0.5"/>
  <text x="-2" y="31" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="#5b6377" opacity="0.75">TYPE IT INTO THE TERMINAL</text>
  <!-- a thumb smudge -->
  <ellipse cx="54" cy="-38" rx="9" ry="4.5" fill="#5b6377" opacity="0.32"/>
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
<!-- His hand withdrawing from the card, the arm running up out of frame from
     an off-frame shoulder, the fingertips just leaving the card's top edge.
     Generated by the character rig, not drawn:
     BCRig.arm(30, shoulder 285,-22 -> wrist 267.09,76, sleeve #3a353f 0.36r over #171519 halo 0.48r), cuff at the wrist
     BCRig.hand(30, at the wrist, pose 'rest', rot 180, size 0.76, skin #c9a88f, edge #171519 7.5) (Canon's arm standard, see hidden_2)
     Regenerate from the rig rather than editing the numbers below. -->
<path d="M285,-22 Q270.75,23.03 267.09,76" fill="none" stroke="#171519" stroke-width="14.4" stroke-linecap="round"/><path d="M285,-22 Q270.75,23.03 267.09,76" fill="none" stroke="#3a353f" stroke-width="10.8" stroke-linecap="round"/><g transform="translate(267.09,76) rotate(180) scale(0.187,0.187) translate(-158,-330)"><g fill="#c9a88f" stroke="#171519" stroke-width="7.5" stroke-linejoin="round"><g transform="translate(212,232) rotate(32)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(40)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(22)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(30)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(38)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(20)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(28)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(36)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(18)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(26)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(34)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(16)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g><g transform="translate(104,298) rotate(-46) rotate(14)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(12)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g></g><g fill="#c9a88f"><g transform="translate(212,232) rotate(32)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(40)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(22)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(30)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(38)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(20)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(28)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(36)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(18)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(26)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(34)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(16)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g><g transform="translate(104,298) rotate(-46) rotate(14)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(12)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g></g></g><g transform="translate(267.09,76) rotate(93.95)"><rect x="-8.4" y="-7.02" width="8.4" height="14.04" rx="2.52" fill="#544e59" stroke="#171519" stroke-width="1.5"/></g>
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
<!-- town_0's square one beat later, a shade warmer: hidSquare. The hatch is
     this scene's own, so it lies in hidden_0's spot beside the fountain. -->
` + hidSquare('10', { open: false, ownHatch: true, win: '#5fa0b8', veil: 0.62 }) + `
<!-- The same hatch as hidden_0, in the same footprint, closed flush with the paving. -->
<path d="M70 213H172L181 246H61Z" fill="#34414c"/>
<path d="M75 217H167L174 241H68Z" fill="#283643"/>
<path d="M87 218L83 240 M102 218L100 240 M119 218V240 M135 218L137 240 M151 218L155 240" stroke="#182630" stroke-width="2"/>
<path d="M71 214H171 M64 244H178" stroke="#566571" stroke-width="1.4"/>
<path d="M113 224H128V227H113Z" fill="#182630"/>
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
<text x="42" y="60" font-family="'JetBrains Mono',monospace" font-size="9" fill="#7fc4d8" opacity="0.45">A E</text>
<text x="86" y="63" font-family="'JetBrains Mono',monospace" font-size="9" fill="#7fc4d8" opacity="0.35">R S</text>
<!-- table, lit, filling the lower frame -->
<rect x="0" y="108" width="500" height="152" fill="url(#hidTableM1)"/>
<rect x="0" y="108" width="500" height="5" rx="2.5" fill="#7686a3" opacity="0.65"/>
<!-- THE ARTIFACT: THE ROPE. The briefing says "It will be rope. Bring me the
     rope." and the return beat has his thumb on the SPLICE, so this is one
     object only: a coil of hemp lying flat, its tail running out to an EYE
     SPLICE (the loop tied off a cleat, strands tucked back into the rope).
     Earlier passes drew a club-shaped rope end, then a child's shoe with a
     double-knotted lace; both confused the beat. A coil is the clearest
     silhouette rope has. Same footprint and contact shadow as before. -->
<g transform="translate(238,186)">
  <!-- cast shadow, so it sits ON the table -->
  <ellipse cx="6" cy="24" rx="86" ry="10" fill="#101a26" opacity="0.42"/>
  <!-- the coil's thickness: the side of the stack, darker -->
  <ellipse cx="-24" cy="12" rx="62" ry="21" fill="url(#hidRopeM1)"/>
  <!-- the coil, four flat turns, outer to inner. Each turn: base, lay (the
       short dashes across a wide stroke read as the twist), one highlight. -->
  <g fill="none">
    <ellipse cx="-24" cy="6" rx="56" ry="19" stroke="#7d6646" stroke-width="13"/>
    <ellipse cx="-24" cy="6" rx="56" ry="19" stroke="#4f3f2a" stroke-width="10" stroke-dasharray="1.6 4.6" opacity="0.5"/>
    <ellipse cx="-24" cy="4" rx="55" ry="18" stroke="#c4a978" stroke-width="2.2" opacity="0.5"/>
    <ellipse cx="-24" cy="6" rx="43" ry="14.5" stroke="#86704e" stroke-width="13"/>
    <ellipse cx="-24" cy="6" rx="43" ry="14.5" stroke="#4f3f2a" stroke-width="10" stroke-dasharray="1.6 4.6" opacity="0.5"/>
    <ellipse cx="-24" cy="4" rx="42" ry="13.5" stroke="#c4a978" stroke-width="2.2" opacity="0.5"/>
    <ellipse cx="-24" cy="6" rx="30" ry="10" stroke="#8d7753" stroke-width="13"/>
    <ellipse cx="-24" cy="6" rx="30" ry="10" stroke="#4f3f2a" stroke-width="10" stroke-dasharray="1.6 4.6" opacity="0.5"/>
    <ellipse cx="-24" cy="4" rx="29" ry="9" stroke="#c4a978" stroke-width="2.2" opacity="0.5"/>
  </g>
  <!-- the hole in the middle of the coil -->
  <ellipse cx="-24" cy="6" rx="18" ry="5" fill="#1d2433"/>
  <!-- THE TAIL, leaving the outer turn at the front and running right -->
  <g fill="none">
    <path d="M2,22 Q34,27 56,20" stroke="#7d6646" stroke-width="11" stroke-linecap="round"/>
    <path d="M2,22 Q34,27 56,20" stroke="#4f3f2a" stroke-width="10" stroke-dasharray="1.6 4.6" opacity="0.5"/>
    <path d="M8,19 Q34,23 52,16" stroke="#c4a978" stroke-width="2.2" opacity="0.5" stroke-linecap="round"/>
    <!-- THE EYE: the loop that went over the cleat -->
    <path d="M60,18 C68,2 96,-2 100,8 C103,17 86,22 62,20" stroke="#7d6646" stroke-width="9" stroke-linecap="round"/>
    <path d="M60,18 C68,2 96,-2 100,8 C103,17 86,22 62,20" stroke="#4f3f2a" stroke-width="8" stroke-dasharray="1.6 4.6" opacity="0.5"/>
    <path d="M70,7 C78,1 92,0 97,5" stroke="#c4a978" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
  </g>
  <!-- THE SPLICE: where the eye's strands are tucked back into the rope. A
       swelling that tapers into the tail, with the tucks showing as diagonal
       ridges. Not a sleeve: same rope, just thicker. -->
  <path d="M34,24 Q48,15 64,13 Q70,13 70,18 Q70,24 64,24 Q48,26 34,24 Z" fill="#8d7753"/>
  <g fill="none" stroke="#4f3f2a" stroke-width="1.8" stroke-linecap="round" opacity="0.65">
    <path d="M44,24 L49,17"/><path d="M51,24 L56,15.5"/><path d="M58,24 L63,14"/>
  </g>
  <path d="M40,20 Q52,15 64,15" fill="none" stroke="#c4a978" stroke-width="1.8" opacity="0.55" stroke-linecap="round"/>
  <!-- SAND still in the lay: it came off a beach -->
  <g fill="#e8e2d0">
    <circle cx="-62" cy="14" r="1.2" opacity="0.45"/><circle cx="-30" cy="22" r="1" opacity="0.4"/>
    <circle cx="10" cy="-6" r="1.1" opacity="0.4"/><circle cx="30" cy="22" r="1.1" opacity="0.38"/>
    <circle cx="-48" cy="-8" r="0.9" opacity="0.3"/>
  </g>
</g>
<!-- NO HAND IN THIS FRAME, DELIBERATELY.
     The shot is the rope and its splice, and the arm kept losing that fight.
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

// ---------------------------------------------------------------------------
// CANON'S ARM IN THE MISSION INSERTS (hidden_m2..hidden_m5), and only there.
// ---------------------------------------------------------------------------
// The inserts are close-ups on his hands, so the mid-shot hose (a 7-unit
// stroke ending in a mitt the size of a thumbnail) read as a wire with a
// bead on it. Here the limb is drawn in the approved cast's own idiom: his
// slate sleeve (#3a353f, lit #544e59) with the cast's dark outline, a cuff,
// a short wrist, and a skin hand with a palm, four fingers and a thumb.
// One scale for all four inserts so the hand is the same hand each time.
//
// o.sx,o.sy  sleeve start (off frame or behind something)
// o.wx,o.wy  the wrist; the hand carries on along the sleeve's direction
// o.bend     push the sleeve's arc off the straight line
// o.dir      which side the thumb is on (+1 / -1, in hand space)
// o.pose     'grip' fingers curled over an edge, 'pinch' index out and the
//            rest curled, 'rest' fingers flat and together, 'open' spread
// o.rot      extra rotation of the hand at the wrist, degrees
// o.thumbBehind  return the thumb in .behind, so the caller can put the held
//            object between it and the fingers
// Canon's insert hands, baked from the character rig (rig.js), native frame.
// Regenerate: BCRig.hand(42,0,0,{pose, skin:#c9a88f, edge:#171519, edgeW:8}),
// grip = lerpPose(rest, grab, 0.85), rest = lerpPose(open, rest, 0.3); the thumb
// group is split out so a held object can sit between it and the fingers.
var HID_INSERT_HANDS = {
  grip: { body: '<g transform="translate(212,232) rotate(50.79)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(56.91)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(20.12)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(48.79)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(54.91)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(18.12)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(46.79)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(52.91)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(16.12)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(42.91)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(49.03)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(14.12)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g>', thumb: '<g transform="translate(104,298) rotate(-46) rotate(29.03)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(17.64)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g>' },
  pinch: { body: '<g transform="translate(212,232) rotate(66)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(76)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(32)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(62)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(72)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(30)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(54)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(62)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(26)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(40)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(44)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(30)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g>', thumb: '<g transform="translate(104,298) rotate(-46) rotate(46)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(30)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g>' },
  rest: { body: '<g transform="translate(212,232) rotate(2.99)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(13.34)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(7.89)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(4.13)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(12.13)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(6.67)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(4.48)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(10.13)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(5.46)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(2.48)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(10.48)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(5.02)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g>', thumb: '<g transform="translate(104,298) rotate(-46) rotate(3.02)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(2.59)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g>' },
  open: { body: '<g transform="translate(212,232) rotate(-5)"><path d="M -12 0 C -12 -23.65 -10.8 -33.54 -10.8 -32.2 A 10.8 10.8 0 0 1 10.8 -32.2 C 10.8 -33.54 12 -23.65 12 0 A 12 12 0 0 1 -12 0 Z"/><g transform="translate(0,-43) rotate(6)"><path d="M -10.8 0 C -10.8 -15.4 -9.6 -21.84 -9.6 -18.4 A 9.6 9.6 0 0 1 9.6 -18.4 C 9.6 -21.84 10.8 -15.4 10.8 0 A 10.8 10.8 0 0 1 -10.8 0 Z"/><g transform="translate(0,-28) rotate(4)"><path d="M -9.6 0 C -9.6 -12.65 -8.88 -17.94 -8.88 -14.12 A 8.88 8.88 0 0 1 8.88 -14.12 C 8.88 -17.94 9.6 -12.65 9.6 0 A 9.6 9.6 0 0 1 -9.6 0 Z"/></g></g></g><g transform="translate(184,212) rotate(-3)"><path d="M -14 0 C -14 -30.8 -12.6 -43.68 -12.6 -43.4 A 12.6 12.6 0 0 1 12.6 -43.4 C 12.6 -43.68 14 -30.8 14 0 A 14 14 0 0 1 -14 0 Z"/><g transform="translate(0,-56) rotate(5)"><path d="M -12.6 0 C -12.6 -20.35 -11.2 -28.86 -11.2 -25.8 A 11.2 11.2 0 0 1 11.2 -25.8 C 11.2 -28.86 12.6 -20.35 12.6 0 A 12.6 12.6 0 0 1 -12.6 0 Z"/><g transform="translate(0,-37) rotate(3)"><path d="M -11.2 0 C -11.2 -14.85 -10.36 -21.06 -10.36 -16.64 A 10.36 10.36 0 0 1 10.36 -16.64 C 10.36 -21.06 11.2 -14.85 11.2 0 A 11.2 11.2 0 0 1 -11.2 0 Z"/></g></g></g><path d="M 104 290 C 96 266 98 240 108 222 C 114 210 124 204 136 202 C 145 200 152 201 158 203 C 170 199 186 202 197 211 C 208 220 215 236 218 253 C 222 273 222 294 218 311 C 213 328 202 340 187 346 C 171 353 149 353 134 346 C 120 340 110 328 106 313 C 103 303 104 296 104 290 Z"/><ellipse cx="122" cy="290" rx="31" ry="44" transform="rotate(-16 122 290)"/><g transform="translate(152,204) rotate(-2)"><path d="M -15 0 C -15 -34.1 -13.5 -48.36 -13.5 -48.5 A 13.5 13.5 0 0 1 13.5 -48.5 C 13.5 -48.36 15 -34.1 15 0 A 15 15 0 0 1 -15 0 Z"/><g transform="translate(0,-62) rotate(3)"><path d="M -13.5 0 C -13.5 -22 -12 -31.2 -12 -28 A 12 12 0 0 1 12 -28 C 12 -31.2 13.5 -22 13.5 0 A 13.5 13.5 0 0 1 -13.5 0 Z"/><g transform="translate(0,-40) rotate(2)"><path d="M -12 0 C -12 -15.95 -11.1 -22.62 -11.1 -17.9 A 11.1 11.1 0 0 1 11.1 -17.9 C 11.1 -22.62 12 -15.95 12 0 A 12 12 0 0 1 -12 0 Z"/></g></g></g><g transform="translate(120,214) rotate(-4)"><path d="M -14.5 0 C -14.5 -30.8 -13.05 -43.68 -13.05 -42.95 A 13.05 13.05 0 0 1 13.05 -42.95 C 13.05 -43.68 14.5 -30.8 14.5 0 A 14.5 14.5 0 0 1 -14.5 0 Z"/><g transform="translate(0,-56) rotate(4)"><path d="M -13.05 0 C -13.05 -19.8 -11.6 -28.08 -11.6 -24.4 A 11.6 11.6 0 0 1 11.6 -24.4 C 11.6 -28.08 13.05 -19.8 13.05 0 A 13.05 13.05 0 0 1 -13.05 0 Z"/><g transform="translate(0,-36) rotate(2)"><path d="M -11.6 0 C -11.6 -15.4 -10.73 -21.84 -10.73 -17.27 A 10.73 10.73 0 0 1 10.73 -17.27 C 10.73 -21.84 11.6 -15.4 11.6 0 A 11.6 11.6 0 0 1 -11.6 0 Z"/></g></g></g>', thumb: '<g transform="translate(104,298) rotate(-46) rotate(0)"><path d="M -17 0 C -17 -27.5 -14.96 -39 -14.96 -35.04 A 14.96 14.96 0 0 1 14.96 -35.04 C 14.96 -39 17 -27.5 17 0 A 17 17 0 0 1 -17 0 Z"/><g transform="translate(0,-50) rotate(0)"><path d="M -14.96 0 C -14.96 -22 -13.6 -31.2 -13.6 -26.4 A 13.6 13.6 0 0 1 13.6 -26.4 C 13.6 -31.2 14.96 -22 14.96 0 A 14.96 14.96 0 0 1 -14.96 0 Z"/></g></g>' }
};
var HID_SLEEVE = '#3a353f', HID_SLEEVE_L = '#544e59', HID_INK = '#171519', HID_SKIN_D = '#a98a74';
function hidInsertArm(o) {
  var s = o.s || 1.5, dir = o.dir || 1, pose = o.pose || 'rest';
  var S = { x: o.sx, y: o.sy }, W = { x: o.wx, y: o.wy };
  var dx = W.x - S.x, dy = W.y - S.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
  var bend = o.bend || 0;
  var C = { x: S.x + dx * 0.5 - (dy / len) * bend, y: S.y + dy * 0.5 + (dx / len) * bend };
  var ink = ' stroke="' + HID_INK + '" stroke-width="' + hidn(1.1 * s) + '" stroke-linejoin="round"';
  var out = { behind: '', front: '' };
  var f = '';
  // THE SLEEVE: tapers a little toward the cuff, outlined like the cast.
  f += '<path d="' + hidLimb(S, C, W, 17 * s, 12.5 * s) + '" fill="' + HID_SLEEVE + '"' + ink + '/>';
  // a lit fold along the upper edge, so the sleeve is cloth and not a pipe
  var nx = dy / len, ny = -dx / len;
  if (ny > 0) { nx = -nx; ny = -ny; }
  var k = 3.6 * s;
  f += '<path d="M' + hidn(S.x + nx * k) + ',' + hidn(S.y + ny * k) + ' Q' + hidn(C.x + nx * k) + ',' + hidn(C.y + ny * k) +
    ' ' + hidn(W.x + nx * k * 0.8 - (W.x - C.x) * 0.12) + ',' + hidn(W.y + ny * k * 0.8 - (W.y - C.y) * 0.12) +
    '" fill="none" stroke="' + HID_SLEEVE_L + '" stroke-width="' + hidn(2.2 * s) + '" stroke-linecap="round" opacity="0.75"/>';

  // hand space: origin at the wrist, the hand points along local -y
  var tx = W.x - C.x, ty = W.y - C.y;
  var th = Math.atan2(tx, -ty) * 180 / Math.PI + (o.rot || 0);
  var g = function (inner) {
    return '<g transform="translate(' + hidn(W.x) + ',' + hidn(W.y) + ') rotate(' + hidn(th) + ') scale(' + s + ')">' + inner + '</g>';
  };
  var INK = ' stroke="' + HID_INK + '" stroke-width="1.1" stroke-linejoin="round"';
  // THE HAND is the character rig, baked (HID_INSERT_HANDS), in the same flat
  // style as every other Canon hand: #c9a88f, one thin #171519 line, no
  // shading, no crease lines. HK maps the rig's native frame (wrist 158,330,
  // fingers up, palm span 122) onto hand space: palm about 14 units across.
  var HK = 0.115, H = HID_INSERT_HANDS[pose] || HID_INSERT_HANDS.rest;
  var rig = function (parts) {
    return '<g transform="scale(' + (dir > 0 ? -HK : HK) + ',' + HK + ') translate(-158,-330)">' +
      '<g fill="' + HID_SKIN + '" stroke="' + HID_INK + '" stroke-width="' + hidn(0.95 / HK) + '" stroke-linejoin="round">' + parts + '</g>' +
      '<g fill="' + HID_SKIN + '">' + parts + '</g></g>';
  };
  // the cuff, flat, over the wrist
  var cuff = '<rect x="-7" y="-1.2" width="14" height="5" rx="1.6" fill="' + HID_SLEEVE_L + '"' + INK + '/>';
  var h;
  if (o.thumbBehind) { out.behind = g(rig(H.thumb)); h = rig(H.body) + cuff; }
  else h = rig(H.body + H.thumb) + cuff;
  out.front = f + g(h);
  return out;
}

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
` + hidInsertArm({ sx: 238, sy: 230, wx: 290, wy: 185, bend: 6, dir: -1, pose: 'grip' }).front + `
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
  <!-- his thumb, UNDER the card: the card sits between thumb and finger -->
  <g transform="translate(-392,-152)">` + hidInsertArm({ sx: 530, sy: 190, wx: 464, wy: 133, bend: -8, dir: -1, pose: 'grip', rot: -62, thumbBehind: true }).behind + `</g>
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
     the far side; the hand is the baked rig hand (HID_INSERT_HANDS) now and the pencil is drawn
     BEFORE it, so the fingers close over the shaft. -->
` + hidInsertArm({ sx: 530, sy: 190, wx: 464, wy: 133, bend: -8, dir: -1, pose: 'grip', rot: -62, thumbBehind: true }).front + `
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
  <text x="0" y="-43" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#2f2e24">N</text>
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
     off to the side, fingers on the edge, and the face of the compass clear.
     Canon's close-up hand (hidCastArm hand:'flat'), as in hidden_7/8 and m5. -->
` + hidCastArm(72, 30, 340, 100, 290, 181, 232, { hand: 'flat', thumb: 1, fill: '#3a353f' }) + `
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
     legible AS hands: both are Canon's close-up hand (hidCastArm hand:'flat',
     the hidden_7/8 construction: palm, thumb, fingers grouped), palms flat
     either side of the plate, the arms running off the near edge. -->
` + hidCastArm(72, -20, 336, 50, 296, 140, 240, { hand: 'flat', thumb: 1, fill: '#3a353f' }) + `
` + hidCastArm(72, 520, 336, 450, 296, 360, 240, { hand: 'flat', thumb: -1, fill: '#3a353f' }) + `
<g transform="translate(412,206) scale(-1,1)">
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
// THE ENDING — hidden_end_0 .. hidden_end_17
// Maps to script steps E1..E18 (E17 and E18 share a frame, aliased).
//
// The palette turns over here. At the wreck the amber is REAL and it is
// everywhere, because that is where the lamp actually is: Fredward lives
// inside the one warm thing Canon can only watch. Then the last frame puts it
// back on a screen, cold room around it, and nothing moves.
//
// Fredward is not Canon. Both faces are drawn, each by its own cast model:
// Fredward by bcApprovedPlace('fredward'), Canon (from hidden_5 on) by
// bcMissionPlace('canon'). Neither face is ever drawn by hand.
// ---------------------------------------------------------------------------

// THE FOUR PAGES (Canon's letter, out of the tin). One sheet design for every
// ending frame that shows them: 76x94 portrait, cream, ruled in his hand, page
// one opening on a short dark salutation line (the name). Before this helper
// they were drawn six ways, and E7 swapped them for a long ledger entirely.
//   hidEndPage(i, x, y, rot, s)       one sheet, page i (0..3), centred at x,y
//   hidEndStack(x, y, rot, s, k)      the four squared into one block; k < 1
//                                     foreshortens it for side-on cameras
var HID_END_PAGE_LINES = [[24,28,18,26,20,28,14,24,22],[26,18,28,20,26,16,28,20,26],[20,28,22,26,16,28,22,18],[24,20,26,14,22]];
function hidEndPageInk(i, sk) {
  var step = sk < 0.4 ? 3 : (sk < 0.7 ? 2 : 1), w = sk < 0.2 ? 0.5 : 0.9, out = '';
  var L = HID_END_PAGE_LINES[i], ns = ' vector-effect="non-scaling-stroke"';
  for (var r = 0; r < L.length; r += step) {
    var y = -37 + 8 * r;
    if (i === 0 && r === 0) { out += '<line x1="-30" y1="'+y+'" x2="-8" y2="'+y+'" stroke="#4a3d26" stroke-width="'+hidn(w*1.5)+'"'+ns+'/>'; continue; }
    out += '<line x1="-30" y1="'+y+'" x2="'+(L[r]+2)+'" y2="'+y+'"'+ns+'/>';
  }
  return '<g stroke="#6a5a3a" stroke-width="'+w+'" opacity="0.65" stroke-linecap="round">'+out+'</g>';
}
function hidEndPage(i, x, y, rot, s) {
  return '<g transform="translate('+x+' '+y+') rotate('+rot+') scale('+s+')">'
    + '<rect x="-36" y="-45" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.35"/>'
    + '<rect x="-38" y="-47" width="76" height="94" rx="1" fill="#f2e9cd"/>'
    + hidEndPageInk(i, s) + '</g>';
}
function hidEndStack(x, y, rot, s, k) {
  k = k || 1;
  var sk = s * k, d = Math.max(2.2, 2.4 / sk), e = sk < 0.2 ? 1 : 1.6;
  return '<g transform="translate('+x+' '+y+') rotate('+rot+') scale('+s+' '+hidn(sk)+')">'
    + '<rect x="-35" y="'+hidn(-47+3*d+2/sk)+'" width="76" height="94" rx="1" fill="#3a2c19" opacity="0.4"/>'
    + '<rect x="-38" y="'+hidn(-47+3*d)+'" width="76" height="94" rx="1" fill="#c9bd9c"/>'
    + '<rect x="-38" y="'+hidn(-47+2*d)+'" width="76" height="94" rx="1" fill="#ddd2b0"/>'
    + '<rect x="-38" y="'+hidn(-47+d)+'" width="76" height="94" rx="1" fill="#e8dcbc"/>'
    + '<rect x="-38" y="-47" width="76" height="94" rx="1" fill="#f2e9cd"/>'
    + hidEndPageInk(0, sk)
    + '<path d="M-38 47 V-47 H38" fill="none" stroke="#fff8e2" stroke-width="'+e+'" opacity="0.75" vector-effect="non-scaling-stroke"/>'
    + '</g>';
}

// THE ENDING'S CHAIR. One chair, one set of proportions, at every camera
// distance: s scales it to the figure in frame (s=1 beside the full-height
// Canon of E2, 0.75 beside the seated r=14 Canon of E14). hidden_end_13 shipped
// a 72-wide chair with a back to y=133 behind a 21-wide seated man, its legs
// running down past his shins, so they read as growing out of him. Sized here,
// its seat sits at his hip, its back tops out at his shoulders, and the four
// legs stand either side of his own on the floor.
function hidEndChair(x, seatY, rot, floorY, s, opts) {
  return hidChair(x, seatY, rot, floorY, Object.assign(
    { w: hidn(52 * s), d: hidn(18 * s), backH: hidn(50 * s) }, opts || {}));
}

// THE FIVE ARTIFACTS, one design each. hidden_end_0 is their close-up, where
// he squared them on his table; hidden_end_3 lays the same five, small, on
// Fredward's table. Each is drawn about its own origin.
// Order: rope, lens, page, compass card, tin.
var HID_END_OBJ = [
  // 1. THE ROPE
  '  <path d="M-34,32 Q0,38 34,32" fill="none" stroke="#101a26" stroke-width="16" opacity="0.3" stroke-linecap="round"/>' +
  '  <path d="M-34,24 Q-16,16 2,24 Q20,32 34,24" fill="none" stroke="#2f2c26" stroke-width="17" stroke-linecap="round"/>' +
  '  <path d="M-34,24 Q-16,16 2,24 Q20,32 34,24" fill="none" stroke="#8d8778" stroke-width="13" stroke-linecap="round"/>' +
  '  <g stroke="#3b382f" stroke-width="2" opacity="0.6" stroke-linecap="round">' +
  '    <line x1="-24" y1="17" x2="-18" y2="29"/><line x1="-8" y1="18" x2="-2" y2="30"/><line x1="10" y1="20" x2="16" y2="32"/>' +
  '  </g>' +
  '  <!-- the double splice, left -->' +
  '  <path d="M-34,20 Q-46,17 -54,22" fill="none" stroke="#8d8778" stroke-width="8" stroke-linecap="round"/>' +
  '  <path d="M-34,28 Q-48,31 -56,26" fill="none" stroke="#a49d8b" stroke-width="6" stroke-linecap="round"/>' +
  '  <!-- cut clean, right -->' +
  '  <ellipse cx="36" cy="24" rx="4" ry="7.4" fill="#a49d8b"/>',
  // 2. THE LENS
  '  <ellipse cx="2" cy="30" rx="30" ry="9" fill="#101a26" opacity="0.35"/>' +
  '  <circle cx="0" cy="22" r="28" fill="#22a97e" opacity="0.45"/>' +
  '  <circle cx="0" cy="22" r="28" fill="none" stroke="#7d7358" stroke-width="6"/>' +
  '  <circle cx="0" cy="22" r="28" fill="none" stroke="#c3b489" stroke-width="2.2" opacity="0.7"/>' +
  '  <g fill="none" stroke="#9ff2cd" stroke-width="0.8" opacity="0.35">' +
  '    <circle cx="0" cy="22" r="20"/><circle cx="0" cy="22" r="12"/><circle cx="0" cy="22" r="5"/>' +
  '  </g>' +
  '  <path d="M-20,8 Q-28,20 -24,34" fill="none" stroke="#f0e3b8" stroke-width="2.4" opacity="0.65" stroke-linecap="round"/>',
  // 3. THE LEDGER PAGE, folded back into eighths along the same creases
  '  <rect x="-28" y="0" width="58" height="46" rx="1" fill="#101a26" opacity="0.35"/>' +
  '  <rect x="-32" y="-4" width="58" height="46" rx="1" fill="#d8d6c2"/>' +
  '  <g stroke="#8d8b78" stroke-width="1" opacity="0.7">' +
  '    <line x1="-3" y1="-4" x2="-3" y2="42"/><line x1="-32" y1="19" x2="26" y2="19"/>' +
  '  </g>' +
  '  <g stroke="#3b3a30" stroke-width="0.9" opacity="0.6" stroke-linecap="round">' +
  '    <line x1="-26" y1="4" x2="-10" y2="4"/><line x1="4" y1="4" x2="20" y2="4"/>' +
  '    <line x1="-26" y1="10" x2="-14" y2="10"/><line x1="4" y1="10" x2="18" y2="10"/>' +
  '    <line x1="-26" y1="26" x2="-12" y2="26"/><line x1="4" y1="26" x2="20" y2="26"/>' +
  '    <line x1="-26" y1="32" x2="-16" y2="32"/><line x1="4" y1="32" x2="16" y2="32"/>' +
  '  </g>',
  // 4. THE COMPASS CARD, still eleven degrees off everything
  '  <ellipse cx="2" cy="24" rx="28" ry="26" fill="#101a26" opacity="0.35"/>' +
  '  <circle cx="0" cy="20" r="26" fill="#cec8b6"/>' +
  '  <circle cx="0" cy="20" r="26" fill="none" stroke="#6a6858" stroke-width="1.4"/>' +
  '  <polygon points="0,-2 3.4,17 0,20 -3.4,17" fill="#2f2e24"/>' +
  '  <polygon points="0,42 3.4,23 0,20 -3.4,23" fill="#8d8877"/>' +
  '  <polygon points="22,20 3.4,23 0,20 3.4,17" fill="#8d8877" opacity="0.85"/>' +
  '  <polygon points="-22,20 -3.4,23 0,20 -3.4,17" fill="#8d8877" opacity="0.85"/>' +
  '  <circle cx="0" cy="20" r="2.4" fill="#2f2e24"/>' +
  '  <text x="0" y="8" text-anchor="middle" font-family="Georgia,serif" font-size="7" fill="#2f2e24">N</text>',
  // 5. THE TIN, and even here it is very slightly out of true
  '  <rect x="-32" y="4" width="62" height="40" rx="4" fill="#101a26" opacity="0.4"/>' +
  '  <rect x="-36" y="0" width="62" height="40" rx="4" fill="#4f717c"/>' +
  '  <rect x="-36" y="0" width="62" height="40" rx="4" fill="none" stroke="#b9d4de" stroke-width="1.4" opacity="0.55"/>' +
  '  <ellipse cx="-5" cy="20" rx="20" ry="11" fill="none" stroke="#d3e6ed" stroke-width="1.2" opacity="0.35"/>' +
  '  <path d="M-32,2 L20,2" stroke="#eaf5f9" stroke-width="1.6" opacity="0.4"/>' +
  '  <circle cx="-26" cy="32" r="2.2" fill="#8a5c38" opacity="0.5"/>'
];

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
<g transform="translate(58,166)">` + HID_END_OBJ[0] + `</g>
<!-- 2. THE LENS -->
<g transform="translate(158,168)">` + HID_END_OBJ[1] + `</g>
<!-- 3. THE LEDGER PAGE, folded back into eighths along the same creases -->
<g transform="translate(250,170)">` + HID_END_OBJ[2] + `</g>
<!-- 4. THE COMPASS CARD, still eleven degrees off everything -->
<g transform="translate(348,170) rotate(11)">` + HID_END_OBJ[3] + `</g>
<!-- 5. THE TIN, and even here it is very slightly out of true -->
<g transform="translate(444,172) rotate(-3)">` + HID_END_OBJ[4] + `</g>
<!-- the pencil is STILL where it fell. He never squared it again. -->
<g transform="translate(60,232) rotate(29)">
  <rect x="0" y="0" width="82" height="4.4" rx="2.2" fill="#F2C14E" opacity="0.88"/>
  <rect x="78" y="0" width="6" height="4.4" rx="1.6" fill="#525f79"/>
</g>
<!-- Canon from behind at the edge of frame, looking down the row -->

</svg>`;

// E2: "Here is the whole of my plan, and I would like you to hear how thin it
// is." He does not sit down for this. Canon standing, facing us, the big
// screen behind him. Four years, and that is what he has got.
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
  <!-- the mast, stepped aft to x 278-296 so it stands in the gap between
       Canon's head and the lamp instead of directly behind his head -->
  <path d="M286,144 L278,88 L296,86 L304,144Z" fill="#061019"/>
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
<!-- CANON STANDING. He does not sit down for this. Full height in front of
     the bright screen: the mission cast model (face from hidden_5 on),
     'explain', laying out the plan. The helper emits his contact shadow. -->
` + bcMissionPlace('canon', 'explain', 219, 246, 168) + `
<!-- the empty second chair, pushed back, still there -->
<!-- the empty second chair, pushed back, still there. Legs used to end at
     278.7 and 266.8 against a floor of 260: both of them through the deck. -->
` + hidEndChair(410, 218, -6, 258, 1) + `
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
  <radialGradient id="hidTealE3" cx="50%" cy="52%" r="68%">
    <stop offset="0%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="58%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="100%" stop-color="#2c6a74" stop-opacity="0.55"/>
  </radialGradient>
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
<!-- THE COLD AT THE EDGES (decision 2026-10-25: keep the deck warm, add teal
     ambient at the edges). The wreck's own water teal (wreck.js #1a4a55 /
     #2c5450) creeps in round the frame and catches the outer edge of each
     rib; the lamps, drawn after it, are the only amber sources. -->
<rect width="500" height="260" fill="url(#hidTealE3)"/>
<g fill="none" stroke="#3f8a92" stroke-width="1.6" opacity="0.4" stroke-linecap="round">
  <path d="M-13,200 Q27,86 117,54"/><path d="M513,200 Q473,86 383,54"/>
</g>
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
` + (function () {
  // THE TABLE, and Fredward AT it. He stood in front of a table whose ledger
  // stood upright thirty units above the top, a straight edge floating beside
  // it, and none of the five things the text says you put down. Now: he is
  // behind his table (the top hides his legs, and they show between its legs
  // to the deck), the ledger lies open and FLAT on the top with the straight
  // edge resting on the right-hand page, and the five things sit in a row
  // along the front edge: rope, lens, page, compass card, tin (HID_END_OBJ,
  // hidden_end_0's designs), laid flat, so foreshortened.
  var top = { name: 'table-top', cx: 255, cy: 185, rx: 150, ry: 15 };
  var wood = '#5c4526', dark = '#3a2c19', ink = '#2a1f12', s = '';
  // THE TABLE is wreck_3's bolted table (decision 2026-10-25): a thick slab
  // whose front edge flares past the top, two straight legs set well in from
  // the ends, each bolted to the deck through a brass foot plate. Same
  // silhouette, in this room's warm wood. Back legs first, behind him; they
  // stand on the deck at 240, his feet at 246, the front legs at 250.
  var foot = function (x, y, w) {
    return '<rect x="' + hidn(x - w / 2) + '" y="' + hidn(y - 3.6) + '" width="' + hidn(w) + '" height="3.6" rx="1" fill="#8a6a35"/>'
      + '<circle cx="' + hidn(x - w / 2 + 3) + '" cy="' + hidn(y - 1.8) + '" r="0.9" fill="' + ink + '"/>'
      + '<circle cx="' + hidn(x + w / 2 - 3) + '" cy="' + hidn(y - 1.8) + '" r="0.9" fill="' + ink + '"/>';
  };
  // The back pair stands further in along the table's perspective, so each
  // side reads as two legs at two depths, not one fat two-tone leg.
  s += '<rect x="166.5" y="196" width="7" height="44" fill="' + dark + '"/><rect x="336.5" y="196" width="7" height="44" fill="' + dark + '"/>';
  s += foot(170, 240, 14) + foot(340, 240, 14);
  // FREDWARD, delighted, behind the table, bare-headed (his helmet is on the
  // table). Studio layout 2026-10-25: the approved 'explain' pose, x 253.8,
  // feet on the deck at 246.2, height 146.4.
  s += bcApprovedPlace('fredward', 'explain', 253.8, 246.2, 146.4, false);
  // the table top, a surface you can see the depth of, then the slab's thick
  // front edge flaring out past it, then the front legs and their plates
  s += '<path d="M107,170 L403,170 L410,200 L100,200 Z" fill="' + wood + '"/>';
  s += '<path d="M107,170 L403,170 L404,173 L106,173 Z" fill="#9d7c40" opacity="0.55"/>';
  s += '<path d="M100,200 L410,200 L418,211 L92,211 Z" fill="#4a3822"/>';
  s += '<path d="M100,200 L410,200 L410.6,203 L99.4,203 Z" fill="#9d7c40" opacity="0.5"/>';
  s += '<path d="M107,170 L403,170 L410,200 L418,211 L92,211 L100,200 Z" fill="none" stroke="' + ink + '" stroke-width="1.2" opacity="0.7"/>';
  s += '<rect x="138.5" y="211" width="9.5" height="39" fill="' + dark + '"/><rect x="362" y="211" width="9.5" height="39" fill="' + dark + '"/>';
  s += '<ellipse cx="143.2" cy="250" rx="16" ry="2" fill="#0a0806" opacity="0.32"/><ellipse cx="366.8" cy="250" rx="16" ry="2" fill="#0a0806" opacity="0.32"/>';
  s += foot(143.2, 250, 26) + foot(366.8, 250, 26);
  // THE LEDGER, open, flat, hundreds of pages of it, ruled by hand
  var ledger = '<path d="M-60,1.2 L60,1.2 L56,-10.8 L-56,-10.8 Z" fill="' + dark + '" opacity="0.45"/>'
    + '<path d="M-62,0 L-1,0 L-1,-12 L-57,-12 Z" fill="#e8dcbc"/><path d="M1,0 L62,0 L57,-12 L1,-12 Z" fill="#f0e6c8"/>'
    + '<path d="M-62,0 L62,0" stroke="#b8a882" stroke-width="1.2"/><path d="M0,0 L0,-12" stroke="#b8a882" stroke-width="1.4"/>'
    + '<g stroke="#8a7a56" stroke-width="0.7" opacity="0.8"><path d="M-55,-9 L-6,-9 M-56,-6 L-6,-6 M-58,-3 L-6,-3 M6,-9 L52,-9 M6,-6 L54,-6"/></g>'
    // the fresh column, being ruled now, and the straight edge resting along it
    + '<path d="M30,-0.6 L29,-11.4" stroke="#4a3822" stroke-width="1"/>'
    + '<g transform="translate(26,-2) rotate(-13)"><rect x="0" y="-1.3" width="34" height="2.6" rx="0.8" fill="#8a6a35" stroke="' + ink + '" stroke-width="0.6"/>'
    + '<rect x="0" y="-1.3" width="34" height="0.9" rx="0.45" fill="#d6b06a" opacity="0.7"/></g>';
  s += bcArt.on(top, ledger, { u: 0, v: -0.08 });
  // the tea at his left, his helmet off and set down at his right
  s += bcArt.on(top, '<g transform="translate(0,-13)"><path d="M-9,0 L9,0 L7,12 L-7,12 Z" fill="#d8cdb4"/>'
    + '<ellipse cx="0" cy="0" rx="9" ry="3" fill="#7a5a34"/><path d="M9,3 Q15,5 12,9" fill="none" stroke="#d8cdb4" stroke-width="2" stroke-linecap="round"/>'
    + '<ellipse cx="0" cy="13" rx="11" ry="3" fill="#c9bda2"/>'
    + '<path d="M-2,-4 Q1,-11 -1,-18" fill="none" stroke="#ffe9a8" stroke-width="1.4" opacity="0.3">'
    + hidAnim('opacity', '0.14;0.34;0.14', '5.35s') + '</path></g>', { u: -0.9, v: -0.45 });
  // THE HELMET, OFF (decision 2026-10-25: helmet off, the table prop is his
  // glass bowl). It is the same bcDiveHelmet he wears in the wreck scenes, at
  // his own scale (146.4 / 445), with no hose, standing on its brass neck ring
  // with a contact shadow, and the lamp caught in the glass.
  // Set down at 0.8 of his scale and turned a little, so it reads as a helmet
  // sitting on its collar rather than a porthole, and does not outsize him.
  s += bcArt.on(top, '<ellipse cx="0" cy="0" rx="18" ry="2.6" fill="#0a0806" opacity="0.38"/>'
    + '<g transform="rotate(-8 0 -4) scale(' + hidn(0.8 * 146.4 / 445) + ') translate(-226,-340)">'
    // the breastplate collar it stands on, so it reads as a helmet, not a porthole
    + '<path d="M150,308 Q226,296 302,308 L318,336 Q226,348 134,336 Z" fill="#6e5410"/>'
    + '<path d="M150,308 Q226,296 302,308" fill="none" stroke="#b88a2a" stroke-width="4"/>'
    + '<g fill="#3d2f08"><circle cx="160" cy="326" r="4"/><circle cx="292" cy="326" r="4"/><circle cx="226" cy="336" r="4"/></g>'
    + bcDiveHelmet({ hose: false })
    + '<path d="M168,296 Q226,288 284,296 L288,312 Q226,322 164,312 Z" fill="#8b6914"/>'
    + '<path d="M168,296 Q226,288 284,296" fill="none" stroke="#d6a640" stroke-width="4"/>'
    + '<g fill="#5c4409"><circle cx="182" cy="306" r="3.4"/><circle cx="226" cy="309" r="3.4"/><circle cx="270" cy="306" r="3.4"/></g>'
    + '<circle cx="196" cy="186" r="9" fill="#ffe9a8" opacity="0.5"/>'
    + '</g>',
    { u: 0.9, v: -0.45 });
  // THE FIVE THINGS YOU PUT ON HIS TABLE, in a row along the front edge, in
  // the order they came. Each lies flat, so its top-down design foreshortens.
  // [u, x offset to its centre, y of its bottom, its own turn]
  var row = [[-0.8, 8, 40, 0], [-0.4, 0, 50, 0], [0, 1, 42, 0], [0.4, 0, 46, 11], [0.8, 3, 44, -3]];
  row.forEach(function (r, k) {
    s += bcArt.on(top, '<g data-artifact="' + k + '" transform="scale(0.5,0.24) translate(' + r[1] + ',' + (-r[2]) + ') rotate(' + r[3] + ' 0 20)">'
      + HID_END_OBJ[k] + '</g>', { u: r[0], v: 0.8 });
  });
  return s;
})() + `
<!-- the crab, which does not move, on the deck clear of the table -->
<g transform="translate(446,238)">
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
<!-- (the tea is on the table now, seated with the rest) -->
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
  <radialGradient id="hidTealE4" cx="50%" cy="40%" r="70%">
    <stop offset="0%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="55%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="100%" stop-color="#2c6a74" stop-opacity="0.6"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE4)"/>
<rect width="500" height="260" fill="url(#hidWarmE4)"/>
<!-- the lamp above, the only thing in this frame that moves -->
<line x1="250" y1="0" x2="250" y2="20" stroke="#3a2c19" stroke-width="2.4"/>
<rect x="240" y="20" width="20" height="26" rx="3" fill="#5c4526" stroke="#8a6a35" stroke-width="1.6"/>
<rect x="244" y="24" width="12" height="18" fill="#ffe9a8"><animate attributeName="opacity" values="0.8;1;0.88;0.97;0.8" dur="3.81s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></rect>
<circle cx="250" cy="33" r="110" fill="url(#hidLantE4)" opacity="0.4"><animate attributeName="opacity" values="0.3;0.48;0.36;0.45;0.3" dur="3.07s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<!-- THE COLD AT THE EDGES (decision 2026-10-25): the wreck's water teal comes
     in round the frame, on the wall and hull only. Drawn before the table, so
     the wood, the pages and the props keep their warm colour. -->
<rect width="500" height="260" fill="url(#hidTealE4)"/>
<!-- THE TABLE, close, filling the lower frame. Warm wood. -->
<rect x="0" y="128" width="500" height="132" fill="#5c4526"/>
<rect x="0" y="128" width="500" height="5" rx="2.5" fill="#a5813f" opacity="0.75"/>
<g stroke="#3a2c19" stroke-width="1.4" opacity="0.5">
  <line x1="0" y1="160" x2="500" y2="160"/><line x1="0" y1="200" x2="500" y2="200"/><line x1="0" y1="240" x2="500" y2="240"/>
</g>
<!-- FOUR PAGES, in the same half familiar hand, spread in front of him -->
<!-- the third is where his hand went down, near its end. Shared sheet design
     (hidEndPage), the same four sheets every later frame squares and stacks. -->
<g>` + hidEndPage(0,144,177,-6,1) + hidEndPage(1,232,173,2,1) + hidEndPage(2,320,177,-3,1) + hidEndPage(3,406,175,5,1) + `</g>
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
     absolutely still: no animation on this element at all. Palm down, lying
     on the lower half of the third page (near its end), the sleeve running
     back toward us off the bottom of the frame. -->
` + hidFredPawFlat(322,214,-3,1) + `
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
  <radialGradient id="hidTealE5" cx="48%" cy="38%" r="66%">
    <stop offset="0%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="50%" stop-color="#1a4a55" stop-opacity="0"/><stop offset="100%" stop-color="#2c6a74" stop-opacity="0.6"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE5)"/>
<rect width="500" height="260" fill="url(#hidFaceKeyE5)"/>
<!-- THE COLD AT THE EDGES (decision 2026-10-25): warm key on his face, the
     wreck's water teal round the frame. The two lamps, drawn after it, stay
     the only amber in the room. -->
<rect width="500" height="260" fill="url(#hidTealE5)"/>
<!-- the lamps behind, thrown well out of focus. Nothing back there matters. -->
<circle cx="52" cy="60" r="46" fill="url(#hidLantE5)" opacity="0.32"><animate attributeName="opacity" values="0.24;0.4;0.28;0.36;0.24" dur="4.79s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="452" cy="76" r="42" fill="url(#hidLantE5)" opacity="0.28"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="3.61s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="52" cy="60" r="7" fill="#ffe9a8" opacity="0.55"/>
<circle cx="452" cy="76" r="6" fill="#ffe9a8" opacity="0.5"/>
<!-- hull ribs, soft, far back -->
<g fill="none" stroke="#132028" stroke-width="14" opacity="0.6">
  <path d="M-10,240 Q20,110 110,64"/><path d="M510,240 Q480,110 390,64"/>
</g>
<!-- FREDWARD, CLOSE. The face is the shot. He has stopped mid sentence.
     "He is holding a thing in each hand that has never been in the same hand
     before": the rope with the double splice and the pages. The 'hold' pose
     has grip hands, and each object goes down between his figure and his
     hand so the fingers close over it (Joshua 2026-10-25: the old props
     floated beside open palms). -->
` + (function () {
  var F = bcApprovedHold('fredward', 'hold', 250, 401, 384, false, { shadow: false });
  var rope = function (d, w) { return '<path d="' + d + '" fill="none" stroke="#3a3830" stroke-width="' + (w + 3) + '" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="#8a8170" stroke-width="' + w + '" stroke-linecap="round"/>'; };
  return F.behind
    // the rope: a coil hanging from the left fist, the spliced end standing up
    // out of it with the double splice as a fat lump
    + '<g data-held="rope">'
    + rope('M176,246 a13,8 0 1 0 26,0 a13,8 0 1 0 -26,0', 4.5)
    + rope('M180,250 a12,7 0 1 0 24,0 a12,7 0 1 0 -24,0', 4.5)
    + rope('M190,238 Q192,226 200,214', 5)
    + '<ellipse cx="197" cy="219" rx="4" ry="6.5" fill="#6b6455" transform="rotate(28,197,219)"/>'
    + '<path d="M194,216 L200,220 M195,221 L200,224" stroke="#3a3830" stroke-width="1" opacity="0.6"/></g>'
    // the pages, squared, edge-on to us so nothing on them is legible
    + '<g data-held="pages">' + hidEndStack(321,218,-10,0.45) + '</g>'
    + F.front;
})() + `
</svg>`;

// E7: He does not say anything for a while. Quieter and worse than distress:
// a careful man going back through his own notes and finding a column he has
// been ruling for years with nothing written in it. Hold on the letter, his
// hand on it: "It has his name on it now."
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
<!-- THE LETTER, still where E5 spread it: the same four sheets (hidEndPage),
     camera in closer. The owner cut the long ledger here; the beat is the
     letter, "it has his name on it now". -->
<g>` + hidEndPage(0,132,190,-6,1.3) + hidEndPage(1,252,186,2,1.3) + hidEndPage(2,372,190,-3,1.3) + hidEndPage(3,486,188,5,1.3) + `</g>
<!-- His hand, come to rest on page one with a fingertip at his own name. The
     sleeve runs out past the bottom edge (a camera crop, as in E5), so the
     hand is attached to a man on our side of the table, not floating. -->
` + hidFredPaw(106,194,1.1,-6) + `
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
<!-- the true edges are the bright lines on top and left (hidEndStack): that is
     what SQUARED looks like. His brother does this to index cards. Same sheets
     as E5 and E7, same scale as E7's close camera. -->
` + hidEndStack(250,186,0,1.3) + `
<!-- both hands, squaring: one on each long edge, thumbs pressed to the block.
     Sleeves run off the bottom of frame like E5/E7, so they belong to him. -->
` + hidFredPaw(166,206,1.1,8) + `
<g transform="matrix(-1 0 0 1 668 0)">` + hidFredPaw(334,206,1.1,8) + `</g>
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
</g>
<!-- THE FOUR PAGES, squared (hidEndStack, the block E8 made), put down on top
     of the compass card so neither of them can blow anywhere (E10, aliased). -->
<g>
  <circle cx="126" cy="222" r="18" fill="#3a2c19" opacity="0.35"/>
  <circle cx="124" cy="220" r="18" fill="#cec8b6"/>
  <polygon points="124,205 126,218 124,220 122,218" fill="#2f2e24"/>
</g>
` + hidEndStack(158,196,-5,0.8) + `
<!-- HIS HAND, touching the ledger: fingertips on the near page, the sleeve
     running off the bottom of frame like E5-E8 so it is his, not floating. -->
` + hidFredPaw(262,216,0.8,6) + `
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
` + hidEndStack(112,140,0,0.97,0.33) + `
<!-- the ledger, closed, beside them -->
<rect x="164" y="146" width="52" height="18" rx="2" fill="#7a4a30"/>
<rect x="164" y="146" width="52" height="3" rx="1.5" fill="#a3653f" opacity="0.7"/>
<line x1="172" y1="155" x2="200" y2="155" stroke="#d6b06a" stroke-width="1.2" opacity="0.5"/>
<!-- FREDWARD AT THE RAIL. From behind, and that is a choice, not the rule:
     the rule is about Canon. Here it is because he is looking at the water and
     so are we. Hands on the rail, weight on them. -->
<g transform="translate(360 81)">` + bcApprovedPlace('fredward','think',0,117.18,137.224,false) + `</g>
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
<!-- THE NET: fine line knotted by hand into uneven diamonds. Not strung taut:
     it is lashed to the rim and hangs slack, bellying down into a bag that drops
     below the hoop. Drawn BEFORE the hoop so the cane covers the cut ends. -->
<g transform="translate(174,120)">
  <defs>
    <clipPath id="hidNetClipE11"><ellipse cx="0" cy="0" rx="94" ry="92"/><path d="M-74,58 C-70,112 -26,142 8,142 C40,142 68,112 72,58 Z"/></clipPath>
    <path id="hidNetMeshE11" fill="none" d="M-112.1,-1.1 Q-104.9,7.9 -97.6,14.6 M-113.5,26.9 Q-105.5,22.0 -97.6,14.6 M-98.1,-65.8 Q-91.9,-56.0 -85.7,-49.6 M-99.0,-37.0 Q-90.3,-29.4 -81.7,-23.1 M-99.0,-37.0 Q-92.4,-41.2 -85.7,-49.6 M-100.5,-14.5 Q-91.0,-3.7 -81.4,4.6 M-100.5,-14.5 Q-91.1,-18.1 -81.7,-23.1 M-97.6,14.6 Q-91.0,22.8 -84.4,28.7 M-97.6,14.6 Q-89.5,11.0 -81.4,4.6 M-100.5,38.0 Q-92.4,34.1 -84.4,28.7 M-81.7,-78.3 Q-75.4,-69.5 -69.1,-64.0 M-85.7,-49.6 Q-76.9,-42.5 -68.2,-37.6 M-85.7,-49.6 Q-77.4,-55.5 -69.1,-64.0 M-81.7,-23.1 Q-74.7,-13.2 -67.8,-6.7 M-81.7,-23.1 Q-74.9,-28.4 -68.2,-37.6 M-81.4,4.6 Q-75.9,14.2 -70.4,20.6 M-81.4,4.6 Q-74.6,0.2 -67.8,-6.7 M-84.4,28.7 Q-77.2,39.5 -70.0,46.6 M-84.4,28.7 Q-77.4,26.8 -70.4,20.6 M-83.4,55.8 Q-76.7,53.0 -70.0,46.6 M-67.7,-89.9 Q-62.7,-82.6 -57.7,-76.8 M-69.1,-64.0 Q-62.4,-55.3 -55.7,-48.2 M-69.1,-64.0 Q-63.4,-69.8 -57.7,-76.8 M-68.2,-37.6 Q-63.1,-28.2 -58.1,-20.2 M-68.2,-37.6 Q-62.0,-42.3 -55.7,-48.2 M-67.8,-6.7 Q-60.6,1.4 -53.4,7.9 M-67.8,-6.7 Q-62.9,-11.4 -58.1,-20.2 M-70.4,20.6 Q-63.0,29.6 -55.7,35.3 M-70.4,20.6 Q-61.9,16.0 -53.4,7.9 M-70.0,46.6 Q-60.1,58.8 -50.2,68.8 M-70.0,46.6 Q-62.8,42.6 -55.7,35.3 M-64.6,75.0 Q-52.8,87.5 -40.9,98.8 M-64.6,75.0 Q-57.4,74.1 -50.2,68.8 M-46.4,108.5 Q-43.7,104.6 -40.9,98.8 M-57.7,-76.8 Q-50.7,-67.3 -43.8,-61.4 M-57.7,-76.8 Q-48.8,-82.6 -39.9,-92.0 M-55.7,-48.2 Q-48.4,-41.1 -41.0,-37.7 M-55.7,-48.2 Q-49.8,-52.9 -43.8,-61.4 M-58.1,-20.2 Q-49.2,-13.1 -40.3,-8.5 M-58.1,-20.2 Q-49.5,-27.9 -41.0,-37.7 M-53.4,7.9 Q-46.7,17.2 -40.0,22.5 M-53.4,7.9 Q-46.9,1.3 -40.3,-8.5 M-55.7,35.3 Q-48.8,44.6 -42.0,52.4 M-55.7,35.3 Q-47.8,30.0 -40.0,22.5 M-50.2,68.8 Q-42.4,80.9 -34.6,89.0 M-50.2,68.8 Q-46.1,61.3 -42.0,52.4 M-40.9,98.8 Q-31.5,111.4 -22.0,121.3 M-40.9,98.8 Q-37.8,95.9 -34.6,89.0 M-29.6,129.3 Q-25.8,127.2 -22.0,121.3 M-39.9,-92.0 Q-35.1,-82.3 -30.4,-76.8 M-43.8,-61.4 Q-36.4,-53.4 -29.1,-48.5 M-43.8,-61.4 Q-37.1,-68.2 -30.4,-76.8 M-41.0,-37.7 Q-35.0,-27.5 -29.0,-21.1 M-41.0,-37.7 Q-35.0,-42.4 -29.1,-48.5 M-40.3,-8.5 Q-32.9,1.1 -25.5,8.1 M-40.3,-8.5 Q-34.6,-13.0 -29.0,-21.1 M-40.0,22.5 Q-33.3,31.8 -26.7,37.5 M-40.0,22.5 Q-32.7,17.5 -25.5,8.1 M-42.0,52.4 Q-33.0,63.7 -23.9,72.9 M-42.0,52.4 Q-34.3,46.2 -26.7,37.5 M-34.6,89.0 Q-26.5,98.5 -18.3,106.0 M-34.6,89.0 Q-29.3,83.0 -23.9,72.9 M-22.0,121.3 Q-16.1,131.9 -10.2,140.5 M-22.0,121.3 Q-20.2,115.5 -18.3,106.0 M-17.6,148.5 Q-13.9,146.6 -10.2,140.5 M-30.6,-105.5 Q-22.3,-97.1 -14.0,-90.1 M-30.4,-76.8 Q-23.2,-67.8 -16.0,-63.1 M-30.4,-76.8 Q-22.2,-82.7 -14.0,-90.1 M-29.1,-48.5 Q-20.7,-40.8 -12.4,-36.1 M-29.1,-48.5 Q-22.5,-54.5 -16.0,-63.1 M-29.0,-21.1 Q-21.3,-14.0 -13.7,-8.5 M-29.0,-21.1 Q-20.7,-27.7 -12.4,-36.1 M-25.5,8.1 Q-19.0,17.6 -12.6,23.5 M-25.5,8.1 Q-19.6,1.3 -13.7,-8.5 M-26.7,37.5 Q-21.4,48.8 -16.1,57.5 M-26.7,37.5 Q-19.6,32.1 -12.6,23.5 M-23.9,72.9 Q-16.9,83.1 -9.8,89.6 M-23.9,72.9 Q-20.0,67.0 -16.1,57.5 M-18.3,106.0 Q-10.7,120.9 -3.0,131.6 M-18.3,106.0 Q-14.1,98.8 -9.8,89.6 M-10.2,140.5 Q-6.3,148.4 -2.4,153.3 M-10.2,140.5 Q-6.6,137.1 -3.0,131.6 M-14.0,-90.1 Q-7.6,-83.7 -1.1,-78.5 M-14.0,-90.1 Q-6.4,-95.5 1.2,-104.4 M-16.0,-63.1 Q-8.5,-53.4 -1.0,-47.7 M-16.0,-63.1 Q-8.6,-69.2 -1.1,-78.5 M-12.4,-36.1 Q-5.7,-27.8 1.0,-21.2 M-12.4,-36.1 Q-6.7,-41.0 -1.0,-47.7 M-13.7,-8.5 Q-7.0,1.8 -0.4,8.8 M-13.7,-8.5 Q-6.3,-13.7 1.0,-21.2 M-12.6,23.5 Q-6.4,34.3 -0.3,42.4 M-12.6,23.5 Q-6.5,17.8 -0.4,8.8 M-16.1,57.5 Q-8.5,68.7 -0.9,76.7 M-16.1,57.5 Q-8.2,51.9 -0.3,42.4 M-9.8,89.6 Q-2.5,100.4 4.8,107.0 M-9.8,89.6 Q-5.3,83.8 -0.9,76.7 M-3.0,131.6 Q1.9,138.5 6.9,143.0 M-3.0,131.6 Q0.9,120.4 4.8,107.0 M-2.4,153.3 Q2.2,149.0 6.9,143.0 M1.2,-104.4 Q8.5,-94.8 15.8,-87.7 M-1.1,-78.5 Q7.5,-70.7 16.1,-65.2 M-1.1,-78.5 Q7.3,-82.3 15.8,-87.7 M-1.0,-47.7 Q5.6,-40.9 12.3,-36.8 M-1.0,-47.7 Q7.5,-54.4 16.1,-65.2 M1.0,-21.2 Q7.4,-11.2 13.9,-3.7 M1.0,-21.2 Q6.6,-27.8 12.3,-36.8 M-0.4,8.8 Q7.5,18.1 15.3,24.0 M-0.4,8.8 Q6.7,3.3 13.9,-3.7 M-0.3,42.4 Q6.0,52.0 12.4,57.6 M-0.3,42.4 Q7.5,35.0 15.3,24.0 M-0.9,76.7 Q6.8,87.7 14.5,95.3 M-0.9,76.7 Q5.7,68.4 12.4,57.6 M4.8,107.0 Q9.1,117.0 13.5,125.5 M4.8,107.0 Q9.6,102.6 14.5,95.3 M6.9,143.0 Q10.4,152.3 14.0,157.5 M6.9,143.0 Q10.2,135.2 13.5,125.5 M15.8,-87.7 Q22.8,-80.7 29.9,-77.1 M15.8,-87.7 Q22.1,-92.8 28.4,-101.9 M16.1,-65.2 Q21.7,-56.7 27.3,-52.0 M16.1,-65.2 Q23.0,-69.5 29.9,-77.1 M12.3,-36.8 Q21.2,-26.8 30.1,-21.0 M12.3,-36.8 Q19.8,-42.4 27.3,-52.0 M13.9,-3.7 Q20.0,4.1 26.1,8.4 M13.9,-3.7 Q22.0,-11.2 30.1,-21.0 M15.3,24.0 Q21.2,33.9 27.2,40.6 M15.3,24.0 Q20.7,18.4 26.1,8.4 M12.4,57.6 Q20.6,65.5 28.8,69.4 M12.4,57.6 Q19.8,50.2 27.2,40.6 M14.5,95.3 Q19.5,104.0 24.4,110.6 M14.5,95.3 Q21.7,83.5 28.8,69.4 M13.5,125.5 Q18.3,134.2 23.2,140.9 M13.5,125.5 Q19.0,118.7 24.4,110.6 M29.9,-77.1 Q34.9,-69.2 39.9,-62.7 M29.9,-77.1 Q36.6,-80.8 43.3,-88.7 M27.3,-52.0 Q35.6,-43.0 43.8,-37.2 M27.3,-52.0 Q33.6,-55.5 39.9,-62.7 M30.1,-21.0 Q35.7,-12.3 41.2,-7.7 M30.1,-21.0 Q37.0,-27.6 43.8,-37.2 M26.1,8.4 Q33.3,15.0 40.4,20.0 M26.1,8.4 Q33.7,1.3 41.2,-7.7 M27.2,40.6 Q34.7,49.5 42.1,56.0 M27.2,40.6 Q33.8,32.0 40.4,20.0 M28.8,69.4 Q34.4,79.3 39.9,87.0 M28.8,69.4 Q35.5,64.7 42.1,56.0 M24.4,110.6 Q29.2,118.7 33.9,124.3 M24.4,110.6 Q32.2,100.2 39.9,87.0 M23.2,140.9 Q28.5,133.7 33.9,124.3 M43.3,-88.7 Q48.7,-80.2 54.1,-75.2 M39.9,-62.7 Q46.7,-54.9 53.5,-51.4 M39.9,-62.7 Q47.0,-67.6 54.1,-75.2 M43.8,-37.2 Q51.2,-28.2 58.5,-21.9 M43.8,-37.2 Q48.6,-43.3 53.5,-51.4 M41.2,-7.7 Q49.7,1.1 58.3,7.4 M41.2,-7.7 Q49.9,-13.4 58.5,-21.9 M40.4,20.0 Q46.9,27.8 53.4,33.4 M40.4,20.0 Q49.3,14.9 58.3,7.4 M42.1,56.0 Q48.4,61.6 54.7,64.2 M42.1,56.0 Q47.8,46.0 53.4,33.4 M39.9,87.0 Q43.3,94.8 46.7,100.8 M39.9,87.0 Q47.3,76.5 54.7,64.2 M33.9,124.3 Q37.0,129.2 40.2,130.4 M33.9,124.3 Q40.3,113.3 46.7,100.8 M54.1,-75.2 Q60.9,-67.2 67.6,-61.9 M54.1,-75.2 Q62.8,-82.2 71.6,-92.2 M53.5,-51.4 Q61.5,-42.3 69.5,-34.9 M53.5,-51.4 Q60.5,-54.8 67.6,-61.9 M58.5,-21.9 Q63.9,-15.3 69.2,-10.5 M58.5,-21.9 Q64.0,-26.6 69.5,-34.9 M58.3,7.4 Q65.2,13.7 72.0,17.2 M58.3,7.4 Q63.7,-0.5 69.2,-10.5 M53.4,33.4 Q61.6,41.8 69.9,47.8 M53.4,33.4 Q62.7,26.6 72.0,17.2 M54.7,64.2 Q58.4,74.2 62.0,82.0 M54.7,64.2 Q62.3,57.9 69.9,47.8 M46.7,100.8 Q51.3,104.8 56.0,107.4 M46.7,100.8 Q54.4,92.3 62.0,82.0 M67.6,-61.9 Q76.3,-56.4 85.0,-53.7 M67.6,-61.9 Q74.8,-66.6 82.0,-75.6 M69.5,-34.9 Q76.8,-28.7 84.0,-25.2 M69.5,-34.9 Q77.2,-42.8 85.0,-53.7 M69.2,-10.5 Q76.9,-0.8 84.6,4.9 M69.2,-10.5 Q76.6,-16.1 84.0,-25.2 M72.0,17.2 Q77.0,26.0 82.0,32.0 M72.0,17.2 Q78.3,12.8 84.6,4.9 M69.9,47.8 Q77.6,55.6 85.4,59.5 M69.9,47.8 Q75.9,41.7 82.0,32.0 M62.0,82.0 Q68.3,84.2 74.6,84.6 M62.0,82.0 Q73.7,72.3 85.4,59.5 M84.0,-25.2 Q91.0,-16.8 98.0,-12.6 M84.0,-25.2 Q91.3,-30.8 98.6,-38.1 M84.6,4.9 Q91.8,9.5 99.0,12.0 M84.6,4.9 Q91.3,-1.8 98.0,-12.6 M82.0,32.0 Q89.7,37.3 97.4,41.1 M82.0,32.0 Q90.5,23.2 99.0,12.0 M98.0,-12.6 Q105.5,-4.1 113.0,1.2 M98.0,-12.6 Q104.8,-17.4 111.6,-25.9 M99.0,12.0 Q106.4,19.6 113.8,23.5 M99.0,12.0 Q106.0,7.8 113.0,1.2"/>
    <radialGradient id="hidNetBellyE11" gradientUnits="userSpaceOnUse" cx="6" cy="112" r="120"><stop offset="0%" stop-color="#030c10" stop-opacity="0.8"/><stop offset="100%" stop-color="#030c10" stop-opacity="0"/></radialGradient>
  </defs>
  <g clip-path="url(#hidNetClipE11)">
    <!-- the depth of the bag, darkest where the slack gathers -->
    <rect x="-100" y="-100" width="200" height="250" fill="url(#hidNetBellyE11)"/>
    <use href="#hidNetMeshE11" transform="translate(1.6,2.6)" stroke="#03100f" stroke-width="1.5" opacity="0.5"/>
    <use href="#hidNetMeshE11" stroke="#dfe7f0" stroke-width="0.95" opacity="0.62"/>
    <!-- a knot at every crossing -->
    <path d="M-97.6,14.6h0 M-85.7,-49.6h0 M-81.7,-23.1h0 M-81.4,4.6h0 M-84.4,28.7h0 M-69.1,-64.0h0 M-68.2,-37.6h0 M-67.8,-6.7h0 M-70.4,20.6h0 M-70.0,46.6h0 M-57.7,-76.8h0 M-55.7,-48.2h0 M-58.1,-20.2h0 M-53.4,7.9h0 M-55.7,35.3h0 M-50.2,68.8h0 M-40.9,98.8h0 M-43.8,-61.4h0 M-41.0,-37.7h0 M-40.3,-8.5h0 M-40.0,22.5h0 M-42.0,52.4h0 M-34.6,89.0h0 M-22.0,121.3h0 M-30.4,-76.8h0 M-29.1,-48.5h0 M-29.0,-21.1h0 M-25.5,8.1h0 M-26.7,37.5h0 M-23.9,72.9h0 M-18.3,106.0h0 M-10.2,140.5h0 M-14.0,-90.1h0 M-16.0,-63.1h0 M-12.4,-36.1h0 M-13.7,-8.5h0 M-12.6,23.5h0 M-16.1,57.5h0 M-9.8,89.6h0 M-3.0,131.6h0 M-1.1,-78.5h0 M-1.0,-47.7h0 M1.0,-21.2h0 M-0.4,8.8h0 M-0.3,42.4h0 M-0.9,76.7h0 M4.8,107.0h0 M6.9,143.0h0 M15.8,-87.7h0 M16.1,-65.2h0 M12.3,-36.8h0 M13.9,-3.7h0 M15.3,24.0h0 M12.4,57.6h0 M14.5,95.3h0 M13.5,125.5h0 M29.9,-77.1h0 M27.3,-52.0h0 M30.1,-21.0h0 M26.1,8.4h0 M27.2,40.6h0 M28.8,69.4h0 M24.4,110.6h0 M39.9,-62.7h0 M43.8,-37.2h0 M41.2,-7.7h0 M40.4,20.0h0 M42.1,56.0h0 M39.9,87.0h0 M33.9,124.3h0 M54.1,-75.2h0 M53.5,-51.4h0 M58.5,-21.9h0 M58.3,7.4h0 M53.4,33.4h0 M54.7,64.2h0 M46.7,100.8h0 M67.6,-61.9h0 M69.5,-34.9h0 M69.2,-10.5h0 M72.0,17.2h0 M69.9,47.8h0 M62.0,82.0h0 M84.0,-25.2h0 M84.6,4.9h0 M82.0,32.0h0 M98.0,-12.6h0 M99.0,12.0h0" stroke="#eef3f8" stroke-width="2.3" stroke-linecap="round" opacity="0.6"/>
  </g>
  <!-- the bag's edge where the mesh folds back on itself, lit on the lantern side -->
  <path d="M-74,58 C-70,112 -26,142 8,142" fill="none" stroke="#dfe7f0" stroke-width="1.3" opacity="0.45"/>
  <path d="M8,142 C40,142 68,112 72,58" fill="none" stroke="#dfe7f0" stroke-width="1.1" opacity="0.25"/>
</g>
<!-- THE HOOP: steamed cane, bound where the two ends overlap -->
<g transform="translate(174,120)">
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="#3a2c19" stroke-width="12"/>
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="url(#hidCaneE11)" stroke-width="8"/>
  <!-- the grain of the cane, running round the hoop -->
  <ellipse cx="0" cy="0" rx="96" ry="94" fill="none" stroke="#efdcaa" stroke-width="2" opacity="0.5" stroke-dasharray="26 16"/>
  <!-- the net's edge, lashed round the cane: one turn of the same line at every mesh -->
  <path d="M90.9,4.4 L100.9,4.9 M88.7,19.8 L98.5,22.0 M83.8,34.6 L93.1,38.5 M54.9,71.0 L61.0,78.9 M41.5,79.2 L46.1,88.1 M26.8,85.0 L29.8,94.6 M11.3,88.3 L12.5,98.2 M-4.5,88.9 L-5.0,98.9 M-20.3,86.8 L-22.5,96.5 M-35.4,82.0 L-39.2,91.2 M-49.4,74.8 L-54.8,83.2 M-61.9,65.2 L-68.7,72.6 M-72.5,53.7 L-80.5,59.8 M-81.0,40.6 L-89.9,45.2 M-87.0,26.2 L-96.5,29.2 M-90.3,11.1 L-100.2,12.3 M-90.9,-4.4 L-100.9,-4.9 M-88.7,-19.8 L-98.5,-22.0 M-83.8,-34.6 L-93.1,-38.5 M-76.4,-48.3 L-84.8,-53.7 M-66.7,-60.5 L-74.0,-67.3 M-54.9,-71.0 L-61.0,-78.9 M-41.5,-79.2 L-46.1,-88.1 M-26.8,-85.0 L-29.8,-94.6 M-11.3,-88.3 L-12.5,-98.2 M4.5,-88.9 L5.0,-98.9 M20.3,-86.8 L22.5,-96.5 M35.4,-82.0 L39.2,-91.2 M49.4,-74.8 L54.8,-83.2 M61.9,-65.2 L68.7,-72.6 M72.5,-53.7 L80.5,-59.8 M81.0,-40.6 L89.9,-45.2 M87.0,-26.2 L96.5,-29.2 M90.3,-11.1 L100.2,-12.3" fill="none" stroke="#dfe7f0" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
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
  <!-- THE SLIDING COLLAR: a sleeve of stitched hide that wraps the shaft and rides
       up and down it. Hand-made like the rest, so hide and line, not metal. -->
  <g transform="translate(40,0)">
    <rect x="-9" y="-9" width="18" height="18" rx="3" fill="#3a2814"/>
    <rect x="-8" y="-8.2" width="16" height="16.4" rx="2.6" fill="#7a5530"/>
    <rect x="-8" y="-8.2" width="16" height="4.2" rx="2" fill="#b0824e" opacity="0.75"/>
    <rect x="-8" y="3.6" width="16" height="4.6" rx="2" fill="#4a3220" opacity="0.7"/>
    <!-- the seam, whipped with the net's own line -->
    <line x1="-6" y1="0.6" x2="6" y2="0.6" stroke="#dfe7f0" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
    <!-- a worn thumb-rest on the leading edge, where it gets pushed -->
    <ellipse cx="-6.5" cy="-4" rx="1.6" ry="3" fill="#d3ab72" opacity="0.5"/>
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
  <linearGradient id="hidDeckE12" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6a5132"/><stop offset="100%" stop-color="#3a2c1a"/>
  </linearGradient>
  <linearGradient id="hidHullE12" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2c2216"/><stop offset="100%" stop-color="#0c1418"/>
  </linearGradient>
  <linearGradient id="hidSiltE12" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0c2a33"/><stop offset="100%" stop-color="#03090d"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#hidDeepE12)"/>
<!-- looking BACK and UP: we are on the rope, going. -->
<circle cx="110" cy="180" r="1.6" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="180;10" dur="7.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.3;0.3;0" dur="7.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="380" cy="220" r="1.4" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="220;20" dur="11.77s" repeatCount="indefinite" begin="3s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.26;0.26;0" dur="11.77s" repeatCount="indefinite" begin="3s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="230" cy="240" r="1.8" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="240;30" dur="15.47s" repeatCount="indefinite" begin="6s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.22;0.22;0" dur="15.47s" repeatCount="indefinite" begin="6s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<circle cx="440" cy="200" r="1.2" fill="#9fd4e4" opacity="0"><animate attributeName="cy" values="200;16" dur="9.6s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 1 1"/><animate attributeName="opacity" values="0;0.24;0.24;0" dur="9.6s" repeatCount="indefinite" begin="8s" calcMode="spline" keyTimes="0;0.18;0.82;1" keySplines="0 0 0.58 1;0.42 0 0.58 1;0.42 0 1 1"/></circle>
<!-- THE WRECK BELOW: the seabed it sits on, then its deck seen from above as we
     go up the rope. Planks run toward us; the lamps along the rail pool warm
     light on them. Everything goes soft: the water is taking it. -->
<path d="M0,214 Q60,206 120,212 L460,212 Q490,208 500,212 L500,260 L0,260Z" fill="url(#hidSiltE12)"/>
<path d="M0,238 Q50,232 96,240 M462,242 Q482,236 500,240" fill="none" stroke="#1b3f48" stroke-width="2" opacity="0.5" filter="url(#hidWaterTakeE12)"/>
<g opacity="0.82">
  <!-- hull side, dropping away out of the light -->
  <path d="M102,236 L478,236 L466,260 L114,260Z" fill="url(#hidHullE12)"/>
  <g stroke="#1a140c" stroke-width="1.4" opacity="0.6"><line x1="106" y1="244" x2="474" y2="244"/><line x1="110" y1="252" x2="470" y2="252"/></g>
  <!-- deck surface: back rail edge at 205, near edge at 236 -->
  <path d="M132,205 L448,205 L478,236 L102,236Z" fill="url(#hidDeckE12)"/>
  <g stroke="#22180d" stroke-width="1.6" opacity="0.8">
    <line x1="164" y1="205" x2="140" y2="236"/><line x1="196" y1="205" x2="178" y2="236"/>
    <line x1="228" y1="205" x2="216" y2="236"/><line x1="260" y1="205" x2="254" y2="236"/>
    <line x1="292" y1="205" x2="292" y2="236"/><line x1="324" y1="205" x2="330" y2="236"/>
    <line x1="356" y1="205" x2="368" y2="236"/><line x1="388" y1="205" x2="406" y2="236"/>
    <line x1="420" y1="205" x2="444" y2="236"/>
  </g>
  <!-- the rail's base sill and the near gunwale edge -->
  <path d="M130,203 L450,203 L450,207 L130,207Z" fill="#4a3822"/>
  <path d="M100,235 L480,235 L480,239 L100,239Z" fill="#5c4526"/>
  <!-- the rail itself, posts down to the sill; the end posts carry the lamps -->
  <g stroke="#3a2c19" stroke-width="4" opacity="0.8" filter="url(#hidWaterTakeE12)">
    <line x1="186" y1="174" x2="186" y2="205"/><line x1="245" y1="184" x2="245" y2="205"/><line x1="350" y1="184" x2="350" y2="205"/><line x1="404" y1="180" x2="404" y2="205"/>
  </g>
  <line x1="150" y1="186" x2="440" y2="186" stroke="#4a3822" stroke-width="4" opacity="0.75" filter="url(#hidWaterTakeE12)"/>
</g>
<!-- the lamps' light pooling on the planks under them -->
<ellipse cx="190" cy="214" rx="52" ry="12" fill="url(#hidLantE12)" opacity="0.5"><animate attributeName="opacity" values="0.38;0.56;0.42;0.52;0.38" dur="4.79s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
<ellipse cx="404" cy="214" rx="46" ry="11" fill="url(#hidLantE12)" opacity="0.44"><animate attributeName="opacity" values="0.32;0.5;0.38;0.46;0.32" dur="3.61s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></ellipse>
<!-- the water veiling the whole wreck back a plane -->
<rect x="0" y="196" width="500" height="64" fill="url(#hidBlurE12)" opacity="0.32"/>
<!-- THE ROPE, running up out of frame past the camera -->
<path d="M64,260 Q80,180 74,100 Q70,44 84,0" fill="none" stroke="#2f2c26" stroke-width="13" stroke-linecap="round"/>
<path d="M64,260 Q80,180 74,100 Q70,44 84,0" fill="none" stroke="#8d8778" stroke-width="9" stroke-linecap="round"/>
<g stroke="#3b382f" stroke-width="2" opacity="0.55" stroke-linecap="round">
  <line x1="66" y1="234" x2="76" y2="244"/><line x1="72" y1="194" x2="82" y2="204"/>
  <line x1="72" y1="154" x2="82" y2="164"/><line x1="70" y1="114" x2="80" y2="124"/>
  <line x1="70" y1="74" x2="80" y2="84"/><line x1="74" y1="34" x2="84" y2="44"/>
</g>
<!-- the lamps, still lit, blurring out -->
<circle cx="186" cy="170" r="34" fill="url(#hidLantE12)" opacity="0.35"><animate attributeName="opacity" values="0.24;0.4;0.28;0.38;0.24" dur="4.79s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="186" cy="170" r="4" fill="#ffe9a8" opacity="0.6" filter="url(#hidWaterTakeE12)"/>
<circle cx="404" cy="176" r="30" fill="url(#hidLantE12)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.36;0.26;0.32;0.2" dur="3.61s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
<circle cx="404" cy="176" r="3.4" fill="#ffe9a8" opacity="0.55" filter="url(#hidWaterTakeE12)"/>
<!-- FREDWARD, WAVING, and the water is taking the shape of him. He is drawn
     entirely through the blur filter: still a man, no longer a person. -->
<g transform="translate(292 117)" filter="url(#hidWaterTakeE12)" opacity=".62">` + bcApprovedPlace('fredward','welcome',0,93.744,109.7783,false) + `</g>
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
  <g data-screen-fred="1"><ellipse cx="262" cy="124" rx="7" ry="9" fill="#0d1a16" opacity="0.85"/>
  <circle cx="262" cy="112" r="4.4" fill="#0d1a16" opacity="0.85"/></g>
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
<!-- the second chair, and it has been sat in: it is pulled out now. The same
     chair as hidden_1..8 (hidChair), at the same size: hidEndChair's 0.75
     scale made it a child's chair beside his. -->
` + hidChair(352, 216, -8, 254, { w: 48, d: 16, backH: 46 }) + `
<!-- CANON AT HIS CHAIR, watching. He does not ask you what happened.
     The chair is the hidden_6 chair, where hidSeated stood it; the mission
     cast model has no seated pose, so he stands beside it ('ready', tired
     eyelids), at the hidden_6 size. -->
` + hidSeated(HID_HEAD, 238, 254, { view: 'front',
  chair: { w: 62, d: 18, backH: 52, seat: '#333e52', seatEdge: '#5b6a86' },
  stand: { pose: 'ready', x: 196, h: 164 } }) + `
</svg>`;

// E15 / E16 / E17: "He read it. He put his hand on the table." He gathers the
// index cards and then holds them without doing anything to them, and at the
// end he looks at the second chair. Same room, held.
STORY_SCENES['hidden_end_14'] = STORY_SCENES['hidden_end_13'];
STORY_SCENES['hidden_end_15'] = STORY_SCENES['hidden_end_13'];
// Canon looks at the second chair. The same room, minus the otter: Studio
// note 2026-10-25, "the otter shouldn't be in the room there", so the figure
// at the table on the big screen goes and the empty table and lamp stay.
// Its own id prefix (E13 -> E13x): E16 is taken by the final frame, and two
// scenes sharing ids steal each other's fills once both are in the document.
STORY_SCENES['hidden_end_16'] = STORY_SCENES['hidden_end_13'].replace(/<g data-screen-fred="1">[\s\S]*?<\/g>/, '')
  .replace(/id="(hid[A-Za-z]+)E13"/g, 'id="$1E13x"')
  .replace(/url\(#(hid[A-Za-z]+)E13\)/g, 'url(#$1E13x)');

// E18: THE FINAL FRAME. The big screen, a man at a table, four pages, the
// lamps lit, NOTHING MOVING.
//
// This is the last thing the questline shows and it is the whole argument of
// it in one image: the warm room is real, it is four hundred feet down, and it
// arrives here only as light on a screen in a cold room. Deliberately quiet.
// The ONLY animation in the entire scene is the lamp, breathing on an eight
// second cycle, and the scanline. No silt, no waves, no figure movement. He
// has not moved for an hour and he has not gone back to the ledger either.
STORY_SCENES['hidden_end_17'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
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
  <!-- the chair he is on: its back, behind him -->
  <rect x="232" y="152" width="5" height="30" fill="#0d1a16"/>
  <!-- THE MAN AT THE TABLE. Small, still, and not at the ledger. SEATED: he
       is drawn BEFORE the table and placed behind it, so the tabletop hides
       his legs (bcApprovedFred ignored stance:'seated' and stood him beside
       the table's end). The approved 'think' pose, at the height
       bcCharacter('fredward',7) drew him. -->
  ` + bcApprovedPlace('fredward','think',246,209,64.03,false,{shadow:false}) + `
  <!-- THE TABLE -->
  <rect x="180" y="180" width="146" height="5" rx="2" fill="#5c4526"/>
  <rect x="180" y="180" width="146" height="1.8" rx="0.9" fill="#a5813f" opacity="0.6"/>
  <rect x="192" y="185" width="5" height="24" fill="#3a2c19"/>
  <rect x="310" y="185" width="5" height="24" fill="#3a2c19"/>
  <!-- the desk's front board, between its legs and down to the deck: it is
       what hides his legs, so he reads as sitting at it -->
  <rect x="197" y="185" width="113" height="24" fill="#2e2214"/>
  <rect x="197" y="185" width="113" height="1.6" fill="#1c140b" opacity="0.8"/>
  <!-- THE FOUR PAGES. Squared, in front of him, exactly where he left them. -->
  ` + hidEndStack(289,166,0,0.53,0.28) + `
  <!-- The ledger is CLOSED and pushed to the far end, which is the one detail
       in this frame that is doing any work. -->
  <rect x="196" y="172" width="24" height="8" rx="1" fill="#7a4a30"/>
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
