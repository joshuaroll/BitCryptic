// The cast — shared character models for every scene file.
// ---------------------------------------------------------------------------
// Before this file, a character was redrawn from scratch in each scene that
// needed one: the town crier was rects and lines, the wreck has its own
// 300-line diving suit, and hidden.js has a third figure again. Three
// characters, three unrelated construction systems, no shared proportions.
//
// THE BUILD, measured off a reference and fixed here once:
//   4.41 heads tall            legs are half the total height
//   shoulder 0.89 head-half    NARROWER than the head, which is the single
//                              ratio that stops a torso reading as a slab
//   waist 0.68  hip 0.79       a real taper: widest at the shoulder
//   limb 0.29                  slim tubes; thigh 1.62x the arm, tapering 0.72
//   every part outlined
//
// THE FACE is Sanrio-proportioned, derived from Fredward's own face in
// wreck.js and normalised: a large empty forehead, features in the lower
// third, eyes 0.20 of head width (Hello Kitty is ~0.19), and NO BROWS --
// expression lives in eye shape and mouth. Four dials per character: eye
// openness, mouth curve, pupil direction, and hair.
//
// HAIR AND HATS ARE SEPARATE SLOTS. A hat layers OVER hair rather than
// replacing it, which is why a character in a beanie still reads as themselves.
//
// TWO RULES THAT KEEP BREAKING IF YOU FORGET THEM:
//   1. Any headwear edge must stop ABOVE the eye (-0.065R). A cap peak or a
//      beanie cuff that dips below it covers the eyes; this was broken twice.
//   2. Anything positioned as a fraction of head radius will DRIFT when the
//      body proportions change. Position from the body's own landmarks
//      (shoulder, waist, hip) instead. The rim light that became the sash was
//      exactly this bug.
//
// Add a character by adding one entry to CAST. Nothing else changes.

function n(v) { return Math.round(v * 1000) / 1000; }

// THE BIT CRYPTIC FACE SYSTEM, v2 -- SANRIO PROPORTIONS.
//
// WHY v1's POSITIONING WAS WRONG, measured rather than eyeballed. On a head of
// radius 52 the features landed:
//     brow  y -16.0      eye y -5.8      mouth y +22.6
// so the eye-to-mouth block was 38.6 tall -- 0.37 of head height -- and its
// centre sat 3.3 BELOW the head centre. Everything was crowded into the lower
// half with no breathing room above the brow or below the mouth.
//
// Sanrio does the opposite, and it is a proportion system rather than a style:
//
//   1. A LARGE EMPTY FOREHEAD. The top 45% of the head carries nothing. This
//      is the single biggest lever and it is what makes a character read as
//      young and gentle rather than as a small adult.
//   2. FEATURES IN THE LOWER THIRD, compressed. Eye-to-mouth is about 0.30 of
//      head height, not 0.37.
//   3. EYES WIDE APART, and much bigger: Kitty's eye separation is over half
//      the head width, and each eye is a large solid oval.
//   4. NO BROWS AT ALL on the core cast. Brows are the "adult" signal -- Kitty,
//      Kuromi and Cinnamoroll have none, and expression is carried entirely by
//      eye shape and mouth.
//   5. A TINY MOUTH, set close under the eyes and much smaller than the eye
//      separation. v1's mouth was 1.65x the eye separation, which is a mouth
//      belonging to a different design language.
//
// WHAT SURVIVES FROM FREDWARD: the pupil-to-sclera ratio and the shallow
// double-curve mouth shape, so the cast still descends from the character
// already in the codebase rather than replacing him outright.


// ---------------------------------------------------------------------------
// THE CONSTANTS, in head radii. One object; changing it changes the whole cast.
// ---------------------------------------------------------------------------
const F = {
  eyeX:   0.430,   // eye centre from the centreline: WIDE, Sanrio-wide
  eyeY:   0.150,   // BELOW the head centre, not above it
  // EYE SIZE, dialled back. The first pass ran 0.175/0.215, which is an eye
  // 0.350 of head width -- nearly TWICE Hello Kitty's ~0.19, so it overshot
  // the reference it was aiming at. A ladder from 0.35 down to 0.14 put the
  // pivot at 0.20: above it the faces read as dolls, below it expression
  // starts to go and Canon's fatigue is the first casualty.
  eyeRx:  0.100,   // 0.20 of head width
  eyeRy:  0.115,   // still taller than wide, but only just
  pupil:  0.55,    // as a FRACTION of eye width, inherited from Fredward
  mouthY: 0.560,   // close under the eyes
  mouthW: 0.150,   // tiny: about a third of the eye separation
  blushX: 0.660,
  blushY: 0.330
};

// ---------------------------------------------------------------------------
// EYES. Sanrio expression lives here and in the mouth, never in brows.
// ---------------------------------------------------------------------------
function eye(R, dx, expr, opts) {
  const cx = dx * R * F.eyeX, cy = R * F.eyeY;
  const rx = R * F.eyeRx, ry = R * F.eyeRy;
  const ink = opts.ink;
  const look = opts.look || [0, 0];
  let o = '';

  if (expr === 'closed' || expr === 'happy') {
    // A closed or smiling eye is an upward ARC. This is the single most
    // Sanrio mark there is, and the direction matters: arcing UP reads happy,
    // arcing down reads asleep or sad.
    // up=1 puts the control point ABOVE the endpoints, which arcs the eye
    // upward: the happy mark. up=-1 arcs it down: asleep. Verified by
    // comparing the y values, because the two are one sign apart and the
    // first version had them swapped.
    const up = expr === 'happy' ? 1 : -1;
    o += `<path d="M${n(cx - rx)},${n(cy + ry * 0.2 * up)} Q${n(cx)},${n(cy - ry * 0.75 * up)} ${n(cx + rx)},${n(cy + ry * 0.2 * up)}" fill="none" stroke="${ink}" stroke-width="${n(R * 0.055)}" stroke-linecap="round"/>`;
    return o;
  }

  // The eye is a solid dark oval: Sanrio eyes are not white-sclera eyes with a
  // pupil in them, they are a single filled shape with a highlight.
  const squash = expr === 'tired' ? 0.62 : expr === 'wary' ? 0.80 : 1;
  const ery = ry * squash;
  o += `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ery)}" fill="${ink}"/>`;

  // TWO highlights, a big one and a small one. The pair is what makes the eye
  // read as glossy rather than as a hole, and it is the detail that most says
  // "this cast" once you have seen it twice.
  const hx = cx + look[0] * rx * 0.3, hy = cy + look[1] * ery * 0.3;
  // The highlights take a LARGER share of a smaller eye, or they drop below
  // a pixel and the eye goes back to being a hole.
  o += `<ellipse cx="${n(hx - rx * 0.26)}" cy="${n(hy - ery * 0.30)}" rx="${n(rx * 0.40)}" ry="${n(ery * 0.36)}" fill="#ffffff" opacity="0.9"/>`;
  o += `<circle cx="${n(hx + rx * 0.32)}" cy="${n(hy + ery * 0.28)}" r="${n(rx * 0.2)}" fill="#ffffff" opacity="0.5"/>`;

  // TIRED gets a lower lid line under the eye: the one concession to a brow-
  // less face needing to show fatigue.
  if (expr === 'tired') {
    o += `<path d="M${n(cx - rx * 0.9)},${n(cy + ery + R * 0.055)} Q${n(cx)},${n(cy + ery + R * 0.095)} ${n(cx + rx * 0.9)},${n(cy + ery + R * 0.055)}" fill="none" stroke="${ink}" stroke-width="${n(R * 0.028)}" stroke-linecap="round" opacity="0.6"/>`;
  }
  return o;
}

// ---------------------------------------------------------------------------
// HAIR. Sanrio hair is a SHAPE, not strands: one silhouette that sits on the
// skull and changes the head's outline. v1's hair was a thin cap that followed
// the skull exactly, which is why it read as a painted-on patch.
// ---------------------------------------------------------------------------
function hair(R, kind, c) {
  const H = c.hair, HL = c.hairLit || c.hair;
  let o = '';
  switch (kind) {
    case 'bowl':
      // a full rounded bowl with a soft fringe, sitting PROUD of the skull
      o += `<path d="M${n(-R * 1.05)},${n(R * 0.06)} Q${n(-R * 1.12)},${n(-R * 0.92)} 0,${n(-R * 1.1)} Q${n(R * 1.12)},${n(-R * 0.92)} ${n(R * 1.05)},${n(R * 0.06)} Q${n(R * 0.86)},${n(-R * 0.2)} ${n(R * 0.42)},${n(-R * 0.28)} Q0,${n(-R * 0.38)} ${n(-R * 0.42)},${n(-R * 0.28)} Q${n(-R * 0.86)},${n(-R * 0.2)} ${n(-R * 1.05)},${n(R * 0.06)} Z" fill="${H}"/>`;
      o += `<path d="M${n(-R * 0.6)},${n(-R * 0.92)} Q0,${n(-R * 1.14)} ${n(R * 0.5)},${n(-R * 0.88)} Q${n(R * 0.1)},${n(-R * 0.98)} ${n(-R * 0.6)},${n(-R * 0.92)} Z" fill="${HL}" opacity="0.5"/>`;
      break;
    case 'tuft':
      // a small round cap with one cowlick: the least hair a character can
      // have and still be a character
      o += `<path d="M${n(-R * 0.98)},${n(-R * 0.16)} Q${n(-R * 1.04)},${n(-R * 0.94)} ${n(-R * 0.1)},${n(-R * 1.06)} Q${n(R * 0.9)},${n(-R * 1.0)} ${n(R * 0.98)},${n(-R * 0.16)} Q${n(R * 0.6)},${n(-R * 0.46)} 0,${n(-R * 0.5)} Q${n(-R * 0.6)},${n(-R * 0.46)} ${n(-R * 0.98)},${n(-R * 0.16)} Z" fill="${H}"/>`;
      o += `<path d="M${n(R * 0.1)},${n(-R * 1.02)} Q${n(R * 0.44)},${n(-R * 1.52)} ${n(R * 0.66)},${n(-R * 1.12)} Q${n(R * 0.42)},${n(-R * 1.14)} ${n(R * 0.1)},${n(-R * 1.02)} Z" fill="${H}"/>`;
      break;
    case 'bob':
      // Shoulder-length, framing the cheeks. The mass alone read as a helmet,
      // so it now carries a PARTING and two strand divisions -- and in a flat
      // shape language those are lighter WEDGES at the edges of the mass, never
      // lines drawn across it. A stroke over the top reads as a seam.
      o += `<path d="M${n(-R * 1.14)},${n(R * 0.72)} Q${n(-R * 1.24)},${n(-R * 0.6)} ${n(-R * 0.3)},${n(-R * 1.08)} Q${n(R * 0.72)},${n(-R * 1.18)} ${n(R * 1.14)},${n(-R * 0.38)} Q${n(R * 1.26)},${n(R * 0.3)} ${n(R * 1.16)},${n(R * 0.76)} Q${n(R * 0.98)},${n(R * 0.16)} ${n(R * 0.9)},${n(-R * 0.3)} Q${n(R * 0.3)},${n(-R * 0.54)} ${n(-R * 0.46)},${n(-R * 0.4)} Q${n(-R * 0.92)},${n(-R * 0.16)} ${n(-R * 0.96)},${n(R * 0.5)} Q${n(-R * 1.02)},${n(R * 0.68)} ${n(-R * 1.14)},${n(R * 0.72)} Z" fill="${H}"/>`;
      // the parting, a wedge running back from the brow to the crown
      o += `<path d="M${n(-R * 0.24)},${n(-R * 1.07)} Q${n(R * 0.44)},${n(-R * 0.94)} ${n(R * 1.04)},${n(-R * 0.5)} Q${n(R * 0.5)},${n(-R * 0.66)} ${n(-R * 0.06)},${n(-R * 0.62)} Q${n(-R * 0.2)},${n(-R * 0.86)} ${n(-R * 0.24)},${n(-R * 1.07)} Z" fill="${HL}" opacity="0.55"/>`;
      // two strand divisions in the falling length, one each side
      o += `<path d="M${n(-R * 1.12)},${n(R * 0.66)} Q${n(-R * 1.0)},${n(-R * 0.1)} ${n(-R * 0.7)},${n(-R * 0.34)} Q${n(-R * 0.88)},${n(R * 0.2)} ${n(-R * 0.94)},${n(R * 0.7)} Z" fill="${HL}" opacity="0.4"/>`;
      o += `<path d="M${n(R * 1.14)},${n(R * 0.7)} Q${n(R * 1.02)},${n(-R * 0.02)} ${n(R * 0.86)},${n(-R * 0.3)} Q${n(R * 1.0)},${n(R * 0.22)} ${n(R * 0.98)},${n(R * 0.72)} Z" fill="${HL}" opacity="0.32"/>`;
      break;
    case 'swept':
      // parted and swept to one side: asymmetry with no extra volume
      o += `<path d="M${n(-R * 1.0)},${n(R * 0.1)} Q${n(-R * 1.12)},${n(-R * 0.86)} ${n(-R * 0.02)},${n(-R * 1.09)} Q${n(R * 0.96)},${n(-R * 0.98)} ${n(R * 1.04)},${n(-R * 0.06)} Q${n(R * 0.86)},${n(-R * 0.58)} ${n(R * 0.3)},${n(-R * 0.62)} Q${n(-R * 0.24)},${n(-R * 0.66)} ${n(-R * 0.62)},${n(-R * 0.34)} Q${n(-R * 0.88)},${n(-R * 0.1)} ${n(-R * 1.0)},${n(R * 0.1)} Z" fill="${H}"/>`;
      // A parting in a flat shape language is not a drawn line -- a stroke
      // across the crown reads as a seam. It is a lighter WEDGE at the edge of
      // the sweep, so the mass looks like two thicknesses of hair.
      o += `<path d="M${n(R * 0.06)},${n(-R * 1.08)} Q${n(R * 0.62)},${n(-R * 0.92)} ${n(R * 1.02)},${n(-R * 0.12)} Q${n(R * 0.84)},${n(-R * 0.6)} ${n(R * 0.28)},${n(-R * 0.63)} Q${n(R * 0.2)},${n(-R * 0.86)} ${n(R * 0.06)},${n(-R * 1.08)} Z" fill="${HL}" opacity="0.45"/>`;
      break;
    case 'cap':
      // the flat institutional cap: hair as uniform
      o += `<path d="M${n(-R * 1.06)},${n(-R * 0.3)} Q${n(-R * 1.06)},${n(-R * 1.0)} 0,${n(-R * 1.04)} Q${n(R * 1.06)},${n(-R * 1.0)} ${n(R * 1.06)},${n(-R * 0.3)} Q${n(R * 0.5)},${n(-R * 0.52)} 0,${n(-R * 0.5)} Q${n(-R * 0.5)},${n(-R * 0.52)} ${n(-R * 1.06)},${n(-R * 0.3)} Z" fill="${H}"/>`;
      break;
  }
  return o;
}

// ---------------------------------------------------------------------------
// THE FACE.
// ---------------------------------------------------------------------------
function face(R, expr, opts) {
  opts = opts || {};
  const ink = opts.ink || '#2a1d12';
  let o = '';

  // BLUSH first, so the features sit over it. Two soft ovals on the cheeks:
  // pure Sanrio, and the cheapest warmth a face can carry.
  if (opts.blush !== false) {
    for (const d of [-1, 1]) {
      o += `<ellipse cx="${n(d * R * F.blushX)}" cy="${n(R * F.blushY)}" rx="${n(R * 0.17)}" ry="${n(R * 0.11)}" fill="${opts.blushCol || '#e08b8b'}" opacity="${opts.blushOp || 0.22}"/>`;
    }
  }

  o += eye(R, -1, expr, { ink, look: opts.look });
  o += eye(R, 1, expr, { ink, look: opts.look });

  // MOUTH. Tiny, close under the eyes, and keeping Fredward's shallow double
  // curve so the cast still descends from the character already in the game.
  const mw = R * F.mouthW, my = R * F.mouthY;
  const CURVE = { open: 0.10, happy: 0.13, closed: 0.05, tired: -0.05, wary: 0.0, wry: 0.09 };
  const c = R * (CURVE[expr] === undefined ? 0.06 : CURVE[expr]);
  if (expr === 'wry') {
    o += `<path d="M${n(-mw)},${n(my + R * 0.03)} Q0,${n(my + c)} ${n(mw)},${n(my - R * 0.045)}" fill="none" stroke="${ink}" stroke-width="${n(R * 0.05)}" stroke-linecap="round"/>`;
  } else if (expr === 'wary') {
    // a flat line reads guarded, and is the only mouth here that is not curved
    o += `<path d="M${n(-mw * 0.8)},${n(my)} L${n(mw * 0.8)},${n(my)}" fill="none" stroke="${ink}" stroke-width="${n(R * 0.05)}" stroke-linecap="round"/>`;
  } else {
    o += `<path d="M${n(-mw)},${n(my)} Q${n(-mw * 0.42)},${n(my + c)} 0,${n(my + c * 0.6)} Q${n(mw * 0.42)},${n(my + c)} ${n(mw)},${n(my)}" fill="none" stroke="${ink}" stroke-width="${n(R * 0.05)}" stroke-linecap="round"/>`;
  }
  return o;
}

// ---------------------------------------------------------------------------
// THE CAST. Same constants, different dials plus a hair shape.
// ---------------------------------------------------------------------------

// HAIR AND HATS.
//
// The rule that makes this a wardrobe rather than a pile of drawings: a HAT
// LAYERS OVER HAIR, it does not replace it. A character in a cap still has
// their own hair showing under and behind it, which is why a hat reads as
// something they put on rather than as a different head.
//
// So the two are separate slots. Five hair shapes already exist in face2 and
// stay exactly as they are (the faces are locked); this adds four more, plus
// six hats that compose with any of them.
//
// Everything is a SILHOUETTE, following the same rule the hair already
// follows: one shape that changes the head's outline. The reference build has
// outlines on every part, so these carry them too.


// ---------------------------------------------------------------------------
// EXTRA HAIR. Same language as the five in face2: a shape, not strands.
// ---------------------------------------------------------------------------
function hair2(R, kind, c) {
  const H = c.hair, HL = c.hairLit || c.hair, O = c.outline || '#3a2f28';
  const OW = n(R * 0.055);
  const P = (d, f) => `<path d="${d}" fill="${f || H}" stroke="${O}" stroke-width="${OW}" stroke-linejoin="round"/>`;
  switch (kind) {
    case 'long':
      // past the shoulders, framing the whole head: the biggest outline change
      // available, and the one that most changes who a character reads as.
      return P(`M${n(-R*1.16)},${n(R*1.5)} Q${n(-R*1.3)},${n(-R*0.5)} ${n(-R*0.3)},${n(-R*1.1)}` +
        ` Q${n(R*0.74)},${n(-R*1.2)} ${n(R*1.16)},${n(-R*0.4)}` +
        ` Q${n(R*1.32)},${n(R*0.5)} ${n(R*1.18)},${n(R*1.52)}` +
        ` Q${n(R*1.0)},${n(R*0.6)} ${n(R*0.92)},${n(-R*0.3)}` +
        ` Q${n(R*0.3)},${n(-R*0.56)} ${n(-R*0.46)},${n(-R*0.42)}` +
        ` Q${n(-R*0.94)},${n(-R*0.18)} ${n(-R*0.98)},${n(R*0.6)} Q${n(-R*1.04)},${n(R*1.1)} ${n(-R*1.16)},${n(R*1.5)} Z`);
    case 'buzz':
      // barely there: a thin band hugging the skull. The least hair that still
      // reads as hair rather than as a bald head.
      return P(`M${n(-R*1.0)},${n(-R*0.2)} Q${n(-R*1.02)},${n(-R*0.92)} ${n(-R*0.06)},${n(-R*1.02)}` +
        ` Q${n(R*0.9)},${n(-R*0.96)} ${n(R*1.0)},${n(-R*0.2)}` +
        ` Q${n(R*0.66)},${n(-R*0.66)} ${n(R*0.02)},${n(-R*0.68)} Q${n(-R*0.64)},${n(-R*0.66)} ${n(-R*1.0)},${n(-R*0.2)} Z`);
    case 'curls':
      // a bumpy outline instead of a smooth one: curls are a SILHOUETTE
      // property, not a texture you draw inside the shape.
      {
        let d = `M${n(-R*1.06)},${n(-R*0.1)}`;
        const bumps = [[-0.92,-0.72],[-0.5,-1.0],[0,-1.12],[0.5,-1.02],[0.94,-0.7]];
        for (const [x, y] of bumps) d += ` Q${n(R*(x-0.16))},${n(R*(y-0.3))} ${n(R*x)},${n(R*y)}`;
        d += ` Q${n(R*1.12)},${n(-R*0.42)} ${n(R*1.06)},${n(-R*0.1)}` +
          ` Q${n(R*0.5)},${n(-R*0.5)} 0,${n(-R*0.52)} Q${n(-R*0.5)},${n(-R*0.5)} ${n(-R*1.06)},${n(-R*0.1)} Z`;
        return P(d);
      }
    case 'ponytail':
      // a neat cap plus one tail behind the ear: asymmetry in the outline
      return P(`M${n(-R*1.02)},${n(-R*0.14)} Q${n(-R*1.06)},${n(-R*0.94)} ${n(-R*0.06)},${n(-R*1.06)}` +
        ` Q${n(R*0.92)},${n(-R*1.0)} ${n(R*1.02)},${n(-R*0.14)}` +
        ` Q${n(R*0.56)},${n(-R*0.54)} 0,${n(-R*0.56)} Q${n(-R*0.56)},${n(-R*0.54)} ${n(-R*1.02)},${n(-R*0.14)} Z`) +
        P(`M${n(R*0.86)},${n(-R*0.42)} Q${n(R*1.46)},${n(-R*0.34)} ${n(R*1.34)},${n(R*0.44)}` +
          ` Q${n(R*1.24)},${n(R*0.88)} ${n(R*0.96)},${n(R*0.7)} Q${n(R*1.14)},${n(R*0.3)} ${n(R*0.86)},${n(-R*0.42)} Z`);
    default:
      return '';
  }
}

// ---------------------------------------------------------------------------
// HATS. Drawn AFTER hair, so hair shows under and behind them.
// Each one has a crown (the mass on the skull) and a brim or band, because a
// hat with no brim line is just a differently coloured skull.
// ---------------------------------------------------------------------------
function hat(R, kind, c) {
  if (!kind || kind === 'none') return '';
  const F = c.hatFill || '#3d4a60', L = c.hatLit || '#5d6b85';
  const O = c.outline || '#3a2f28', OW = n(R * 0.055);
  const P = (d, f) => `<path d="${d}" fill="${f || F}" stroke="${O}" stroke-width="${OW}" stroke-linejoin="round"/>`;
  switch (kind) {
    case 'beanie':
      // pulled down over the ears, with a turned-up cuff. The cuff is the
      // whole read: without it a beanie is a swim cap.
      // MEASURED: it cleared the skull by 0.06R, which is a swim cap. Knitted
      // fabric has bulk -- clear the head by about 0.12R all round, rise
      // higher, and slouch the crown slightly so it is not a smooth dome.
      return P(`M${n(-R*1.16)},${n(-R*0.06)} Q${n(-R*1.3)},${n(-R*1.1)} ${n(-R*0.12)},${n(-R*1.34)}` +
        ` Q${n(R*1.02)},${n(-R*1.24)} ${n(R*1.16)},${n(-R*0.06)} Z`) +
        // the turned-up cuff: thicker than the crown, because it is doubled
        P(`M${n(-R*1.2)},${n(-R*0.18)} Q0,${n(R*0.03)} ${n(R*1.2)},${n(-R*0.18)}` +
          ` L${n(R*1.18)},${n(-R*0.58)} Q0,${n(-R*0.34)} ${n(-R*1.18)},${n(-R*0.58)} Z`, L);
    case 'cap':
      // a baseball cap: shallow crown plus a PEAK projecting forward, which is
      // the only part that changes the outline in a meaningful way.
      return P(`M${n(-R*1.02)},${n(-R*0.28)} Q${n(-R*1.06)},${n(-R*1.06)} 0,${n(-R*1.14)}` +
        ` Q${n(R*1.06)},${n(-R*1.06)} ${n(R*1.02)},${n(-R*0.28)} Z`) +
        // The peak, seen face-on: it comes forward over the brow, so it reads
        // as a wide shallow shelf across the head rather than a spike to one
        // side. The first version pointed it left and it read as a mullet.
        P(`M${n(-R*1.1)},${n(-R*0.3)} Q0,${n(-R*0.52)} ${n(R*1.1)},${n(-R*0.3)}` +
          ` Q${n(R*1.14)},${n(-R*0.16)} 0,${n(-R*0.07)} Q${n(-R*1.14)},${n(-R*0.16)} ${n(-R*1.1)},${n(-R*0.3)} Z`, L);
    case 'brim':
      // a wide flat brim all round: the strongest hat silhouette there is.
      return P(`M${n(-R*0.86)},${n(-R*0.34)} Q${n(-R*0.9)},${n(-R*1.18)} 0,${n(-R*1.24)}` +
        ` Q${n(R*0.9)},${n(-R*1.18)} ${n(R*0.86)},${n(-R*0.34)} Z`) +
        // The brim OVERLAPS the crown rather than meeting it at a tangent,
        // which is what made the first version look like it was floating.
        P(`M${n(-R*1.62)},${n(-R*0.14)} Q0,${n(-R*0.54)} ${n(R*1.62)},${n(-R*0.14)}` +
          ` Q0,${n(R*0.26)} ${n(-R*1.62)},${n(-R*0.14)} Z`, L);
    case 'hood':
      // FRAMES the face. The first version cleared the skull entirely and sat
      // behind it like a bonnet. A hood's opening cuts across the forehead and
      // runs down past the cheeks, so it covers the hair and the top of the
      // head and leaves an oval of face.
      return P(`M${n(-R*1.3)},${n(R*0.8)} Q${n(-R*1.44)},${n(-R*0.62)} ${n(-R*0.2)},${n(-R*1.3)}` +
        ` Q${n(R*1.08)},${n(-R*1.22)} ${n(R*1.3)},${n(-R*0.26)}` +
        ` Q${n(R*1.42)},${n(R*0.5)} ${n(R*1.22)},${n(R*0.84)}` +
        // the inner opening, cutting ACROSS the brow and down the cheeks
        ` Q${n(R*0.98)},${n(R*0.36)} ${n(R*0.9)},${n(-R*0.14)}` +
        ` Q${n(R*0.52)},${n(-R*0.82)} 0,${n(-R*0.86)} Q${n(-R*0.52)},${n(-R*0.82)} ${n(-R*0.9)},${n(-R*0.14)}` +
        ` Q${n(-R*0.98)},${n(R*0.36)} ${n(-R*1.22)},${n(R*0.84)} Z`);
    case 'visor':
      // a band and a peak, no crown at all: hair still shows on top, which is
      // the clearest demonstration that hats layer rather than replace.
      return P(`M${n(-R*1.04)},${n(-R*0.16)} Q0,${n(-R*0.62)} ${n(R*1.04)},${n(-R*0.16)}` +
        ` Q0,${n(-R*0.34)} ${n(-R*1.04)},${n(-R*0.16)} Z`, L) +
        P(`M${n(-R*1.06)},${n(-R*0.22)} Q0,${n(-R*0.44)} ${n(R*1.06)},${n(-R*0.22)}` +
          ` Q${n(R*1.1)},${n(-R*0.1)} 0,${n(-R*0.02)} Q${n(-R*1.1)},${n(-R*0.1)} ${n(-R*1.06)},${n(-R*0.22)} Z`, L);
    case 'headset':
      // not a hat but wardrobe: the listening-post gadget, kept from the
      // earliest silhouette pass because it is the one accessory that says
      // what this room is.
      // MEASURED: the cups sat at exactly 1.00R, on the skull edge, so they
      // read as painted on rather than worn. Over-ear cups sit PROUD of the
      // head -- about 0.45R across, clearing the skull by roughly 0.1R -- and
      // the band needs enough thickness to look like it holds them on.
      return `<path d="M${n(-R*1.1)},${n(-R*0.2)} Q0,${n(-R*1.46)} ${n(R*1.1)},${n(-R*0.2)}" fill="none" stroke="${O}" stroke-width="${n(R*0.3)}" stroke-linecap="round"/>` +
        `<path d="M${n(-R*1.1)},${n(-R*0.2)} Q0,${n(-R*1.46)} ${n(R*1.1)},${n(-R*0.2)}" fill="none" stroke="${F}" stroke-width="${n(R*0.2)}" stroke-linecap="round"/>` +
        // the headband pad, so the band reads as a thing rather than a wire
        `<path d="M${n(-R*0.44)},${n(-R*1.02)} Q0,${n(-R*1.2)} ${n(R*0.44)},${n(-R*1.02)}" fill="none" stroke="${L}" stroke-width="${n(R*0.1)}" stroke-linecap="round" opacity="0.8"/>` +
        `<ellipse cx="${n(-R*1.12)}" cy="${n(-R*0.02)}" rx="${n(R*0.28)}" ry="${n(R*0.42)}" fill="${F}" stroke="${O}" stroke-width="${OW}"/>` +
        `<ellipse cx="${n(R*1.12)}" cy="${n(-R*0.02)}" rx="${n(R*0.28)}" ry="${n(R*0.42)}" fill="${F}" stroke="${O}" stroke-width="${OW}"/>` +
        // the soft inner pad on each cup: one lighter oval, the detail that
        // separates a headphone from a disc
        `<ellipse cx="${n(-R*1.12)}" cy="${n(-R*0.02)}" rx="${n(R*0.16)}" ry="${n(R*0.26)}" fill="${L}" opacity="0.5"/>` +
        `<ellipse cx="${n(R*1.12)}" cy="${n(-R*0.02)}" rx="${n(R*0.16)}" ry="${n(R*0.26)}" fill="${L}" opacity="0.5"/>`;
    default:
      return '';
  }
}

const HAIRS = ['swept', 'bowl', 'cap', 'tuft', 'bob', 'long', 'buzz', 'curls', 'ponytail'];
const HATS = ['none', 'beanie', 'cap', 'brim', 'hood', 'visor', 'headset'];


// CANON, WARM SLATE, FULL FIGURE.
//
// Palette locked. What is open is the POSE, and the rule that decides it comes
// from wreck.js, which already learned this the hard way:
//
//   "Any pose whose feet would be inside the viewBox must draw them: a legless
//    figure standing on a deck is the wreck_7 bug."
//
// So every figure below is built complete from head to boot sole, and a crop
// is a crop rather than a missing limb.
//
// THE BUILD IS FREDWARD'S, converted from helmet radii to head radii. His
// skeleton in wreck.js is:
//   neckY h*1.15   shoulderY h*1.55   hipY +h*2.6   kneeY +h*1.75
//   footY +h*3.5   halfW h*1.6        hipW h*1.32   limb h*0.52
//
// Canon's head is bare where Fredward's is a diving helmet, so the multiples
// differ while the BODY does not: measured shoulder-to-foot over shoulder
// width, Fredward is 1.906 and this Canon is 1.905. Same man's build. The head
// numbers only differ because a helmet is about 1.16x the shoulder-share of a
// skull.


// WARM SLATE, as approved.
const SLATE = {
  base: '#2e2b32',   // coat in shadow, the bulk of him
  lit:  '#48434c',   // planes the monitors actually reach
  edge: '#a89a8c',   // where screen light wraps the outline
  skin: '#6b5f58',   // head and neck
  hair: '#211e24',   // hair, strap, case, boot
  sole: '#171519',   // boot soles, outlines, the deepest shadow
  sleeve:  '#3a353f', // arm in shadow: its OWN value, not the coat's
  sleeveL: '#544e59'  // arm on the lit side
};

// ---------------------------------------------------------------------------
// THE FIGURE.
// ---------------------------------------------------------------------------
// r          head radius. HID_HEAD (14) is the mid-shot.
// stance     'seated' | 'standing' | 'turning'
// opts.mod   'clerk' adds the strap and the case
function figure(r, stance, opts) {
  opts = opts || {};
  const p = SLATE;
  // SITTING DROPS THE HIP. The thigh swings from vertical to horizontal and
  // the entire body above it descends by about that length. Posing the legs
  // without moving the hip gives a standing man with odd legs, which is what
  // three earlier attempts produced.
  const sit = stance === 'seated';
  const neckY = r * 1.55 * (opts.chibi ? 0.78 : 1);
  const shoulderY = r * 2.05 * (opts.chibi ? 0.72 : 1);
  // A TURN NARROWS THE SHOULDERS. Seen from behind, a body rotated toward
  // three-quarter presents less width, and that foreshortening is most of what
  // reads as "turning" -- more than any leg position.
  const turn = stance === 'turning';
  // Shoulders NARROWER than the head, per the reference (0.89 of head
  // half-width). Mine were 1.81 -- twice as wide -- which is what made the
  // torso read as a slab.
  const halfW = r * 0.89 * (turn ? 0.82 : 1);
  // the shoulder mass swings WITH the head, only less far: the head leads a
  // turn, it does not detach from the body.
  // Turning offsets are fractions of the SHOULDER, not of head radius, so
  // they scale with the body instead of drifting when its width changes.
  const sh = turn ? halfW * 0.19 : 0;
  // seated: the hip sits at the chair seat, one thigh-length lower down the
  // frame than a standing hip would be.
  // The standing skeleton is the reference for EVERY pose: torso is an
  // anatomical length and does not change when a man sits down. Deriving it
  // from the seated hip is what made the seated figure taller than the
  // standing one -- the drop leaked into footY through torso.
  // CHIBI. opts.chibi compresses the vertical skeleton only, leaving every
  // width untouched, so the figure gets shorter without getting thinner.
  // Measured: at ch=1 the build is 5.16 heads tall; at 0.46 it is about 2.8,
  // which is inside the Sanrio range and still reads as a standing adult
  // rather than a toy.
  const ch = opts.chibi || 1;
  const hipStand = shoulderY + r * 1.34 * ch;   // short torso: 0.21 of height
  const torso = hipStand - shoulderY;
  const hipY = hipStand + (sit ? r * 1.35 : 0);
  const OUT = p.outline || '#3a2f28';   // every part carries an outline
  const OW = n(r * 0.055);
  // Fredward's ratios, carried across so the brothers are one build.
  const kneeY = hipY + torso * 0.673;
  // Measured from the STANDING hip, so a seated figure's feet land exactly
  // where a standing one's do and the two poses share an overall height.
  // legs are HALF the figure in the reference, so they are long against a
  // short torso rather than the other way round.
  const footY = hipStand + torso * 3.3;
  const hipW = halfW * 0.825;
  const limb = r * 0.29;   // slim tube limbs, per the reference
  let o = '';

  // ---- LEGS AND BOOTS FIRST, so the torso overlaps them at the hip. This is
  // the layering rule from wreck.js and it is why the hip never shows a seam.
  if (sit) {
    // The hip is at seatY. The thigh runs forward from it, away from camera,
    // so it foreshortens to almost nothing; the shin drops its full length.
    for (const dir of [-1, 1]) {
      const kx = dir * limb * 1.1;
      const fx = dir * limb * 1.2;
      o += `<path d="M${n(dir * limb * 0.62 - limb * 0.81)},${n(hipY - r * 0.2)} L${n(dir * limb * 0.62 + limb * 0.81)},${n(hipY - r * 0.2)} L${n(kx + limb * 0.62)},${n(hipY + r * 0.5)} L${n(kx - limb * 0.62)},${n(hipY + r * 0.5)} Z" fill="${p.base}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.05)}" stroke-linejoin="round"/>`;
      o += `<path d="M${n(kx - limb * 0.5)},${n(hipY + r * 0.3)} L${n(kx + limb * 0.5)},${n(hipY + r * 0.3)} L${n(fx + limb * 0.44)},${n(footY - r * 0.3)} L${n(fx - limb * 0.44)},${n(footY - r * 0.3)} Z" fill="${p.hair}"/>`;
      o += boot(r, fx, footY, dir, p);
    }
  } else if (turn) {
    // Rotated, so the legs are one BEHIND the other in projection rather than
    // splayed apart. The far leg is planted and the near one is mid-stride,
    // its heel lifting, which is what a body in the act of turning does.
    o += leg(r, hipW * 0.34, hipW * 0.56, hipY, kneeY, footY, limb, p, -0.1);
    o += boot(r, hipW * 0.56, footY, 1, p);
    o += leg(r, -hipW * 0.42, -hipW * 0.26, hipY, kneeY, footY - r * 0.16, limb, p, 0.14);
    o += boot(r, -hipW * 0.26, footY - r * 0.16, -1, p);
  } else {
    // STANDING: plumb, weight even, feet a little under the hips.
    for (const dir of [-1, 1]) {
      o += leg(r, dir * limb * 0.62, dir * limb * 0.95, hipY, kneeY, footY, limb, p, dir * 0.02);
      o += boot(r, dir * limb * 0.95, footY, dir, p);
    }
  }

  // ---- THE CHAIR, for the seated pose only. Drawn AFTER the legs and BEFORE
  // the torso, so he sits in it rather than on it. Without a chair the seated
  // pose has nothing to rest on and the eye reads it as standing, which is
  // exactly what the first render showed.
  if (stance === 'seated') {
    const seatY = hipY + r * 0.42;
    const chairFloor = footY;
    const cw = hipW * 1.34;
    // The back panel, WIDER than his shoulders so it frames him, and rising
    // past them. From behind, this is nearly all you see of a chair.
    o += `<path d="M${n(-cw)},${n(seatY + r * 0.2)} L${n(-cw)},${n(shoulderY - r * 0.1)} L${n(cw)},${n(shoulderY - r * 0.1)} L${n(cw)},${n(seatY + r * 0.2)} Z" fill="#28313f"/>`;
    o += `<rect x="${n(-cw)}" y="${n(shoulderY - r * 0.1)}" width="${n(cw * 2)}" height="${n(r * 0.16)}" rx="${n(r * 0.08)}" fill="#3d4a60"/>`;
    // one slat, so the back reads as a chair back and not a wall
    o += `<rect x="${n(-cw * 0.88)}" y="${n(shoulderY + r * 0.7)}" width="${n(cw * 1.76)}" height="${n(r * 0.1)}" rx="${n(r * 0.05)}" fill="#3d4a60" opacity="0.5"/>`;
    // the two rear legs, outboard of his own, straight to the same floor
    for (const dir of [-1, 1]) {
      o += `<rect x="${n(dir * cw * 0.92 - r * 0.08)}" y="${n(seatY)}" width="${n(r * 0.16)}" height="${n(Math.max(0, footY - seatY))}" fill="#28313f"/>`;
    }
    // a sliver of seat edge either side of him: enough to say he is ON it,
    // not enough to become a table across his lap
    for (const dir of [-1, 1]) {
      o += `<rect x="${n(dir * hipW * 0.9)}" y="${n(seatY)}" width="${n(dir * (cw - hipW * 0.9))}" height="${n(r * 0.16)}" fill="#3d4a60"/>`;
    }
  }

  // ---- HIPS, tying the legs into the torso.
  o += `<path d="M${n(-hipW)},${n(hipY - r * 0.5)} L${n(hipW)},${n(hipY - r * 0.5)} L${n(hipW * 0.94)},${n(hipY + r * 0.42)} L${n(-hipW * 0.94)},${n(hipY + r * 0.42)} Z" fill="${p.base}"/>`;

  // ---- THE TORSO. Shoulder, waist, hip: three landmarks per side, not one
  // curve. The previous version ran a single quadratic from hem to shoulder
  // and back, which can only bulge outward -- measured, its hem was 2.19x the
  // shoulder width where a human is about 0.88x. That is the bell, and no
  // amount of tuning a single curve removes it.
  const hem = hipY + r * 0.18;
  const swing = turn ? halfW * 0.2 : 0;   // the hem trails the turn
  // Real torso proportions, as fractions of shoulder half-width.
  const shW = halfW;                        // 0.89 of head half-width
  const waistW = r * 0.68;                  // straight off the reference
  const hipW2 = r * 0.79;
  const waistY = shoulderY + (hipY - shoulderY) * 0.58;
  const L = (v) => n(v + sh), Lm = (v) => n(-v + sh - swing);
  o += `<path d="M${Lm(hipW2)},${n(hem + swing * 0.4)}` +
    // hip up to waist
    ` C${Lm(hipW2 * 1.02)},${n(hem - r * 0.5)} ${Lm(waistW * 1.04)},${n(waistY + r * 0.5)} ${Lm(waistW)},${n(waistY)}` +
    // waist up to shoulder: the trapezius line, slightly concave
    ` C${Lm(waistW * 1.06)},${n(waistY - r * 0.8)} ${Lm(shW * 0.99)},${n(shoulderY + r * 0.3)} ${Lm(shW)},${n(shoulderY - r * 0.26)}` +
    // across the shoulders and neck
    ` C${Lm(shW * 0.82)},${n(shoulderY - r * 0.78)} ${Lm(r * 0.5)},${n(shoulderY - r * 0.95)} ${n(sh)},${n(shoulderY - r * 0.96)}` +
    ` C${L(r * 0.5)},${n(shoulderY - r * 0.95)} ${L(shW * 0.82)},${n(shoulderY - r * 0.78)} ${L(shW)},${n(shoulderY - r * 0.26)}` +
    // down the far side, mirrored
    ` C${L(shW * 0.99)},${n(shoulderY + r * 0.3)} ${L(waistW * 1.06)},${n(waistY - r * 0.8)} ${L(waistW)},${n(waistY)}` +
    ` C${L(waistW * 1.04)},${n(waistY + r * 0.5)} ${L(hipW2 * 1.02)},${n(hem - r * 0.5)} ${L(hipW2)},${n(hem)} Z" fill="${p.base}" stroke="${OUT}" stroke-width="${OW}" stroke-linejoin="round"/>`;

  // ---- THE LIT PLANE. Monitors are in front and slightly left, so light lands
  // on the far shoulder and runs down the back. This is what turns a flat shape
  // into a body: without it, colour is worse than silhouette.
  // The lit plane, following the new torso edge rather than the old bell.
  o += `<path d="M${L(shW * 0.34)},${n(shoulderY - r * 0.82)}` +
    ` C${L(shW * 0.58)},${n(shoulderY - r * 0.88)} ${L(shW * 0.82)},${n(shoulderY - r * 0.76)} ${L(shW * 0.98)},${n(shoulderY - r * 0.26)}` +
    ` C${L(shW * 0.97)},${n(shoulderY + r * 0.3)} ${L(waistW * 1.04)},${n(waistY - r * 0.8)} ${L(waistW * 0.98)},${n(waistY)}` +
    ` C${L(waistW * 1.02)},${n(waistY + r * 0.5)} ${L(hipW2)},${n(hem - r * 0.5)} ${L(hipW2 * 0.98)},${n(hem)}` +
    ` L${L(hipW2 * 0.44)},${n(hem)} C${L(waistW * 0.5)},${n(waistY + r * 0.3)} ${L(shW * 0.44)},${n(waistY - r * 0.6)} ${L(shW * 0.34)},${n(shoulderY - r * 0.82)} Z" fill="${p.lit}" opacity="0.72"/>`;
  // the shoulder seam, one line that says garment rather than block
  o += `<path d="M${Lm(shW * 0.86)},${n(shoulderY + r * 0.2)} Q${n(sh)},${n(shoulderY - r * 0.38)} ${L(shW * 0.86)},${n(shoulderY + r * 0.2)}" fill="none" stroke="${p.hair}" stroke-width="${n(r * 0.045)}" opacity="0.55"/>`;
  // the hem, so the coat ends on a line instead of dissolving
  o += `<path d="M${Lm(hipW2 * 0.96)},${n(hem - r * 0.06)} Q${n(sh)},${n(hem + r * 0.16)} ${L(hipW2 * 0.96)},${n(hem - r * 0.06)}" fill="none" stroke="${p.hair}" stroke-width="${n(r * 0.05)}" opacity="0.55"/>`;

  // ---- ARMS. Every pose has two, and each ends in a hand. A round cap where
  // a hand should be is the defect the rig work was for.
  o += arms(r, stance, shoulderY, halfW, hipY, limb, p, Object.assign({}, opts, { ch: opts.chibi || 1, shW: shW, waistW: waistW }));

  // ---- NECK AND HEAD.
  const nk = turn ? halfW * 0.18 : 0;
  o += `<path d="M${n(-halfW * 0.26 + nk)},${n(neckY - r * 0.34)} L${n(halfW * 0.3 + nk)},${n(neckY - r * 0.34)} L${n(halfW * 0.34 + nk)},${n(neckY + r * 0.28)} L${n(-halfW * 0.3 + nk)},${n(neckY + r * 0.28)} Z" fill="${p.skin}"/>`;
  o += `<path d="M${n(-halfW * 0.26 + nk)},${n(neckY - r * 0.34)} L${n(halfW * 0.3 + nk)},${n(neckY - r * 0.34)} L${n(halfW * 0.31 + nk)},${n(neckY - r * 0.08)} L${n(-halfW * 0.27 + nk)},${n(neckY - r * 0.08)} Z" fill="${p.hair}" opacity="0.35"/>`;
  if (!opts.noHead) o += `<circle cx="${n(r * 0.07 + (turn ? halfW * 0.24 : 0))}" cy="0" r="${n(r)}" fill="${p.skin}"/>`;
  // the lit side of the skull, CURVED: a straight seam down a circle is the
  // fastest way to make a head read as cut paper.
  const hd = turn ? halfW * 0.24 : 0;
  const hw2 = turn ? 0.93 : 1;
  if (!opts.noHead) {   // the turned skull shows less hair on the far side
  o += `<path d="M${n(r * 0.07 + hd)},${n(-r)} A${n(r)} ${n(r)} 0 0 1 ${n(r * 0.07 + hd)},${n(r)} Q${n(r * 0.78 + hd)},${n(r * 0.3)} ${n(r * 0.72 + hd)},${n(-r * 0.34)} Q${n(r * 0.56 + hd)},${n(-r * 0.84)} ${n(r * 0.07 + hd)},${n(-r)} Z" fill="${p.lit}" opacity="0.5"/>`;
  o += `<path d="M${n(-r * 0.97 * hw2 + hd)},${n(-r * 0.1)} Q${n(-r * 0.68 * hw2 + hd)},${n(-r * 1.2)} ${n(r * 0.07 + hd)},${n(-r * 1.04)} Q${n(r * 0.83 * hw2 + hd)},${n(-r * 1.2)} ${n(r * 1.05 * hw2 + hd)},${n(-r * 0.1)} Q${n(r * 0.5 + hd)},${n(-r * 0.58)} ${n(r * 0.07 + hd)},${n(-r * 0.52)} Q${n(-r * 0.5 + hd)},${n(-r * 0.56)} ${n(-r * 0.97 * hw2 + hd)},${n(-r * 0.1)} Z" fill="${p.hair}"/>`;
  }

  // ---- THE STRAP AND CASE. Origin sits ON the shoulder: the first colour pass
  // ran it from the jaw, which was invisible at one flat value and read as a
  // cable across his head at three.
  if (opts.mod === 'clerk') {
    o += `<path d="M${n(halfW * 0.34)},${n(shoulderY + r * 0.34)} L${n(halfW * 1.12)},${n(shoulderY + r * 0.72)} L${n(halfW * 1.04)},${n(shoulderY + r * 2.1)} L${n(halfW * 0.3)},${n(shoulderY + r * 1.78)} Z" fill="${p.hair}"/>`;
    o += `<path d="M${n(halfW * 0.34)},${n(shoulderY + r * 0.34)} L${n(halfW * 1.12)},${n(shoulderY + r * 0.72)} L${n(halfW * 1.1)},${n(shoulderY + r * 0.94)} L${n(halfW * 0.33)},${n(shoulderY + r * 0.56)} Z" fill="${p.lit}" opacity="0.6"/>`;
    o += `<path d="M${n(halfW * 0.86)},${n(shoulderY + r * 0.58)} L${n(halfW * 1.12)},${n(shoulderY + r * 0.72)} L${n(halfW * 1.04)},${n(shoulderY + r * 2.1)} L${n(halfW * 0.8)},${n(shoulderY + r * 2.0)} Z" fill="${p.lit}" opacity="0.5"/>`;
    o += `<path d="M${n(-halfW * 0.52)},${n(shoulderY + r * 0.22)} L${n(halfW * 0.6)},${n(shoulderY + r * 1.46)}" fill="none" stroke="${p.hair}" stroke-width="${n(r * 0.24)}"/>`;
    o += `<path d="M${n(-halfW * 0.52)},${n(shoulderY + r * 0.22)} L${n(halfW * 0.6)},${n(shoulderY + r * 1.46)}" fill="none" stroke="${p.edge}" stroke-width="${n(r * 0.06)}" opacity="0.5"/>`;
    o += `<rect x="${n(halfW * 0.48)}" y="${n(shoulderY + r * 1.2)}" width="${n(r * 0.26)}" height="${n(r * 0.26)}" fill="${p.edge}" opacity="0.8"/>`;
  }

  // ---- THE EDGE. A lighter value of something that already has value, which
  // is why it works here and read as a tear on the black silhouette.
  // ---- THE SASH. A garment band from one shoulder to the opposite hip.
  // It replaces the old rim light, which was drawn down the torso's outer edge
  // and started landing on the arm once the arms hung clear of the body. A rim
  // light tracks a silhouette and drifts whenever the body changes; a sash is
  // anchored to shoulder and hip, which are landmarks that do not move.
  if (opts.sash !== false) {
    // Built from a CENTRELINE plus a PERPENDICULAR offset, which is the only
    // way to get an even band. The first version offset each end horizontally
    // by a different amount, so the band tapered: a diagonal strip offset
    // horizontally is wider where it is steeper.
    const ax = -shW * 0.82 + sh, ay = shoulderY - r * 0.34;   // over the shoulder
    const bx = hipW2 * 0.92 + sh, by = hem + r * 0.06;        // to the far hip
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
    const px = -dy / len, py = dx / len;                      // unit perpendicular
    const hw2 = r * 0.17;                                     // half the band width
    const q = (x, y, k) => `${n(x + px * hw2 * k)},${n(y + py * hw2 * k)}`;
    o += `<path d="M${q(ax, ay, 1)} L${q(bx, by, 1)} L${q(bx, by, -1)} L${q(ax, ay, -1)} Z"` +
      ` fill="${p.sash || p.edge}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.045)}" stroke-linejoin="round"/>`;
    // a lit edge along the upper side, so the band has a thickness
    o += `<path d="M${q(ax, ay, 0.55)} L${q(bx, by, 0.55)}" fill="none" stroke="${p.sashLit || p.lit}" stroke-width="${n(r * 0.05)}" opacity="0.55"/>`;
    // the buckle where it meets the hip: one hard square, so the sash ends on
    // something rather than just stopping
    o += `<rect x="${n(bx - r * 0.13)}" y="${n(by - r * 0.2)}" width="${n(r * 0.26)}" height="${n(r * 0.26)}" rx="${n(r * 0.04)}" fill="${p.sashLit || p.lit}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.04)}"/>`;
  }

  if (!opts.noHead) o += `<path d="M${n(-r * 0.95 + hd)},${n(-r * 0.5)} Q${n(-r * 1.08 + hd)},${n(-r * 0.1)} ${n(-r * 0.88 + hd)},${n(r * 0.4)}" fill="none" stroke="${p.edge}" stroke-width="${n(r * 0.08)}" opacity="0.5"/>`;

  return o;
}

// a standing/planted leg: hip to knee to foot, with a slight outward bow
function leg(r, hipX, footX, hipY, kneeY, footY, limb, p, bow) {
  const kneeX = (hipX + footX) / 2 + r * bow;
  let o = '';
  // Limb thicknesses relative to the arm, which is `limb`:
  //   thigh at hip 1.62, at knee 1.17 (a 0.72 taper), calf 1.15, ankle 0.78.
  // The previous version ran 1.10 at the hip and 1.00 at the knee: a tube the
  // same thickness as the arm, with no taper at all.
  const thHip = limb * 0.81, thKnee = limb * 0.585;
  const calf = limb * 0.66, ankle = limb * 0.36;
  // The thigh is CURVED on its outer edge -- a straight-sided thigh reads as a
  // plank whatever its width.
  o += `<path d="M${n(hipX - thHip)},${n(hipY - r * 0.3)} L${n(hipX + thHip)},${n(hipY - r * 0.3)}` +
    ` C${n(hipX + thHip * 1.06)},${n(hipY + (kneeY - hipY) * 0.2)} ${n(kneeX + thKnee * 1.28)},${n(kneeY - (kneeY - hipY) * 0.5)} ${n(kneeX + thKnee)},${n(kneeY)}` +
    ` L${n(kneeX - thKnee)},${n(kneeY)}` +
    ` C${n(kneeX - thKnee * 1.12)},${n(kneeY - (kneeY - hipY) * 0.26)} ${n(hipX - thHip * 1.04)},${n(hipY + (kneeY - hipY) * 0.42)} ${n(hipX - thHip)},${n(hipY - r * 0.3)} Z" fill="${p.base}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.05)}" stroke-linejoin="round"/>`;
  // The shin: a calf that swells just below the knee then narrows to the ankle.
  o += `<path d="M${n(kneeX - thKnee * 0.96)},${n(kneeY - r * 0.08)} L${n(kneeX + thKnee * 0.96)},${n(kneeY - r * 0.08)}` +
    ` C${n(kneeX + calf * 1.12)},${n(kneeY + (footY - kneeY) * 0.18)} ${n(footX + ankle * 1.5)},${n(footY - (footY - kneeY) * 0.42)} ${n(footX + ankle)},${n(footY - r * 0.3)}` +
    ` L${n(footX - ankle)},${n(footY - r * 0.3)}` +
    ` C${n(footX - ankle * 1.3)},${n(footY - (footY - kneeY) * 0.3)} ${n(kneeX - calf * 1.06)},${n(kneeY + (footY - kneeY) * 0.3)} ${n(kneeX - thKnee * 0.96)},${n(kneeY - r * 0.08)} Z" fill="${p.hair}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.05)}" stroke-linejoin="round"/>`;
  // the knee, one soft line so the leg has a joint rather than a kink
  o += `<path d="M${n(kneeX - thKnee * 0.9)},${n(kneeY)} Q${n(kneeX)},${n(kneeY + r * 0.12)} ${n(kneeX + thKnee * 0.9)},${n(kneeY)}" fill="none" stroke="${p.sole}" stroke-width="${n(r * 0.05)}" opacity="0.7"/>`;
  return o;
}

// a shoe: sole plate flat on the floor, upper above it, toe pointing dir
function boot(r, x, y, dir, p) {
  const bw = r * 0.52, bh = r * 0.26;
  const toe = bw * 0.62 * dir, heel = -bw * 0.36 * dir;
  let o = '';
  o += `<path d="M${n(x + heel)},${n(y)} L${n(x + toe)},${n(y)} L${n(x + toe)},${n(y - bh * 0.3)} Q${n(x + toe - bw * 0.12 * dir)},${n(y - bh * 0.6)} ${n(x + bw * 0.28 * dir)},${n(y - bh * 0.66)} L${n(x + heel + bw * 0.06 * dir)},${n(y - bh * 0.66)} Q${n(x + heel - bw * 0.04 * dir)},${n(y - bh * 0.32)} ${n(x + heel)},${n(y)} Z" fill="${p.hair}"/>`;
  o += `<path d="M${n(x + heel)},${n(y)} L${n(x + toe)},${n(y)} L${n(x + toe)},${n(y - bh * 0.16)} L${n(x + heel)},${n(y - bh * 0.16)} Z" fill="${p.sole}"/>`;
  o += `<path d="M${n(x - bw * 0.3 * dir)},${n(y - bh)} L${n(x + bw * 0.3 * dir)},${n(y - bh)} L${n(x + bw * 0.28 * dir)},${n(y - bh * 0.62)} L${n(x - bw * 0.28 * dir)},${n(y - bh * 0.62)} Z" fill="${p.base}"/>`;
  // one lit line along the top of the toe so the shoe points somewhere
  o += `<path d="M${n(x + bw * 0.05 * dir)},${n(y - bh * 0.6)} L${n(x + toe - bw * 0.1 * dir)},${n(y - bh * 0.46)}" fill="none" stroke="${p.edge}" stroke-width="${n(r * 0.045)}" opacity="0.4"/>`;
  return o;
}

// two arms, each ending in a hand rather than a cap
function arms(r, stance, shoulderY, halfW, hipY, limb, p, opts) {
  opts = opts || {};
  // Arm lengths take the same vertical compression as the skeleton. Without it
  // the arms keep their full reach on a shortened torso and the hands hang
  // below the coat hem, which is what the first chibi render showed.
  const ch = opts.ch || 1;
  const sy = shoulderY + r * 0.18 * ch;
  let o = '';
  // Arms carry their own value and a dark outline. An arm in the coat's own
  // colour, lying against the coat, is invisible: that is what the first
  // render showed, and no amount of shaping fixes it.
  const draw = (sx, ex, ey, wx, wy, fill) => {
    const up = `M${n(sx - limb * 0.5)},${n(sy)} L${n(sx + limb * 0.5)},${n(sy)} L${n(ex + limb * 0.46)},${n(ey)} L${n(ex - limb * 0.46)},${n(ey)} Z`;
    const lo = `M${n(ex - limb * 0.44)},${n(ey - r * 0.06)} L${n(ex + limb * 0.44)},${n(ey - r * 0.06)} L${n(wx + limb * 0.4)},${n(wy)} L${n(wx - limb * 0.4)},${n(wy)} Z`;
    o += `<path d="${up}" fill="${fill}" stroke="${p.outline || p.sole}" stroke-width="${n(r * 0.055)}" stroke-linejoin="round"/>`;
    o += `<path d="${lo}" fill="${fill}" stroke="${p.outline || p.sole}" stroke-width="${n(r * 0.055)}" stroke-linejoin="round"/>`;
    // the elbow, so the two segments read as one jointed limb
    o += `<circle cx="${n(ex)}" cy="${n(ey - r * 0.03)}" r="${n(limb * 0.44)}" fill="${fill}"/>`;
    // the hand: a palm mass and a thumb, small and compact, at the wrist
    o += `<ellipse cx="${n(wx)}" cy="${n(wy + r * 0.2)}" rx="${n(r * 0.19)}" ry="${n(r * 0.24)}" fill="${p.skin}" stroke="${p.outline || '#3a2f28'}" stroke-width="${n(r * 0.05)}"/>`;
    o += `<ellipse cx="${n(wx - r * 0.14)}" cy="${n(wy + r * 0.14)}" rx="${n(r * 0.075)}" ry="${n(r * 0.12)}" fill="${p.skin}"/>`;
  };
  if (stance === 'seated') {
    // both forearms on the table, which is where his hands live in these scenes
    const shO = opts.shW || halfW;
    draw(-shO * 0.86, -shO * 1.2, sy + r * 0.86 * ch, -shO * 0.7, hipY - r * 0.42 * ch, p.sleeve);
    draw(shO * 0.86, shO * 1.2, sy + r * 0.86 * ch, shO * 0.66, hipY - r * 0.42 * ch, p.sleeveL);
  } else if (stance === 'turning') {
    // near arm swings back, far arm crosses the body
    const shO = opts.shW || halfW;
    draw(-shO * 0.82, -shO * 1.3, sy + r * 0.9 * ch, -shO * 1.5, hipY - r * 0.1 * ch, p.sleeve);
    draw(shO * 0.82, shO * 0.9, sy + r * 0.94 * ch, shO * 0.34, hipY + r * 0.36 * ch, p.sleeveL);
  } else {
    // Hanging. The elbow tucks IN to the waist rather than bowing out past it,
    // and the wrist sits just clear of the hip, which is where a relaxed arm
    // actually hangs. Both are fractions of the torso's own landmarks.
    const shO = opts.shW || halfW;
    // Shoulder -> elbow -> wrist on a shallow OUTWARD diagonal, so there is
    // air between the arm and the torso. The reference's arms are separate
    // tubes, not panels stuck to the sides.
    // POSING AN ARM. opts.armPose moves an arm's elbow and wrist; it does not
    // replace the arm. Everything that makes an arm look like this cast's arm
    // (the sleeve value, the dark outline, the elbow joint, the palm and thumb)
    // comes from the same draw() call either way. A scene that hand-draws a
    // raised arm out of bare strokes gets a limb that belongs to no one, which
    // is exactly what town_2 and the docks scenes had.
    //
    // Poses are given as multiples of the shoulder offset and the head radius,
    // so one pose reads the same at any scale:
    //   { right: { ex: -1.4, ey: -0.2, wx: -1.9, wy: -1.5 } }
    // ex/wx are in units of shO, ey/wy in units of r measured from the
    // shoulder line, negative being up.
    var ap = opts.armPose || {};
    var pose = function (side, dEx, dEy, dWx, dWy, fill) {
      var q = ap[side];
      var sx = (side === 'left' ? -1 : 1) * shO * 0.86;
      if (!q) { draw(sx, dEx, dEy, dWx, dWy, fill); return; }
      draw(sx,
        q.ex !== undefined ? shO * q.ex : dEx,
        q.ey !== undefined ? sy + r * q.ey * ch : dEy,
        q.wx !== undefined ? shO * q.wx : dWx,
        q.wy !== undefined ? sy + r * q.wy * ch : dWy,
        fill);
    };
    pose('left', -shO * 1.16, sy + r * 0.92 * ch, -shO * 1.42, hipY + r * 0.22 * ch, p.sleeve);
    pose('right', shO * 1.16, sy + r * 0.92 * ch, shO * 1.42, hipY + r * 0.22 * ch, p.sleeveL);
  }
  return o;
}

// ---------------------------------------------------------------------------
// BREATH. The cheapest possible sign of life and the only one a back view can
// really show.
//
// FIRST VERSION WAS BROKEN AND THE FILMSTRIP CAUGHT IT. I used
// type="scale" additive="sum", on the reasoning that "sum" adds the scaling on
// top of the existing transform. It does not: additive="sum" post-multiplies,
// so a 1.012 scale rescales the element's whole coordinate space including its
// translation, and the figure grows AND drifts. Scaling about a point needs
// translate/scale/translate, which one animateTransform cannot express.
//
// So the breath is a TRANSLATE. The ribcage rises about 0.9% of head radius
// and settles: no scale term, so nothing can distort, and on a back view a
// rising shoulder line is what breathing actually looks like anyway.
function breathe(r, opts) {
  opts = opts || {};
  const rise = opts.rise || r * 0.055;
  const dur = opts.dur || 4.4;
  return `<animateTransform attributeName="transform" type="translate" additive="sum"` +
    ` values="0 0;0 ${n(-rise)};0 0" keyTimes="0;0.42;1" dur="${dur}s"` +
    ` calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" repeatCount="indefinite"/>`;
}

// SETTLE. A one-shot on scene entry, not a loop. Every shipped scene pops its
// figure in at full opacity: nothing ever ARRIVES. 520ms of ease-out from 2px
// high costs one tag and changes how the whole scene enters.
function settle(r, opts) {
  opts = opts || {};
  const d = opts.drop || r * 0.14;
  return `<animateTransform attributeName="transform" type="translate" additive="sum"` +
    ` values="0 ${n(-d)};0 0" dur="0.52s" fill="freeze"` +
    ` calcMode="spline" keySplines="0 0 0.58 1"/>`;
}

// WEIGHT SHIFT. For standing poses only, and slow: 11s. A person standing
// still is never actually still -- they transfer weight from one hip to the
// other. One degree of rotation about the FEET, so the head travels furthest
// and the boots do not slide.
function sway(r, footY, opts) {
  opts = opts || {};
  const a = opts.deg || 0.7;
  return `<animateTransform attributeName="transform" type="rotate" additive="sum"` +
    ` values="${n(-a)} 0 ${n(footY)};${n(a)} 0 ${n(footY)};${n(-a)} 0 ${n(footY)}"` +
    ` dur="${opts.dur || 11}s" calcMode="spline"` +
    ` keySplines="0.42 0 0.58 1;0.42 0 0.58 1" repeatCount="indefinite"/>`;
}


// THE FULL CHARACTER MODEL: body + face, composed.
//
// The two systems were built separately and this is the first time they meet.
// The join is the NECK, and it is the only place they can disagree, so the body
// now takes opts.noHead and supplies neck-down while the face module supplies
// the head. Neither owns the boundary twice.
//
// The other thing the join exposes: the body is painted in WARM SLATE, a cold
// room palette, and the faces are painted in Sanrio skin tones. A head at
// #e0b48c on a body at #2e2b32 is not a character, it is a lamp. So each model
// carries ONE skin value used by both halves, and the face system's brighter
// tones are pulled toward the body's world.


const BASE5 = ['swept', 'bowl', 'cap', 'tuft', 'bob'];
const anyHair = (R, k, c) => BASE5.includes(k) ? hair(R, k, c) : hair2(R, k, c);


// ---------------------------------------------------------------------------
// THE CAST, as full models. Body palette derived from each character's own
// coat colour rather than all sharing Canon's slate: Canon is the one the room
// is unkind to, and the others should not inherit his gloom.
// ---------------------------------------------------------------------------
const MODELS = {
  canon: {
    label: 'Canon', role: 'The listening post',
    stance: 'standing', expr: 'tired', look: [-0.5, 0.1], hairKind: 'swept', hatKind: 'headset',
    skin: '#c9a88f', ink: '#2b2028', hair: '#332b33', hairLit: '#4a4048',
    blushCol: '#b98b8b', blushOp: 0.22, hatFill: '#3a353f', hatLit: '#5d5766',
    body: { base: '#2e2b32', lit: '#48434c', edge: '#a89a8c', sleeve: '#3a353f',
            sleeveL: '#544e59', hair: '#211e24', sole: '#171519', outline: '#171519', sash: '#6b6470', sashLit: '#8d8694' },
    note: 'Warm slate. The strap and case are gone: both were placed against a torso twice this width and read as clutter on the narrow build. The only model whose blush is dialled back, and the only one whose coat is colder than his skin.'
  },
  fredward: {
    label: 'Fredward', role: 'Islander, kind 2',
    stance: 'standing', expr: 'happy', look: [0.1, 0], hairKind: 'curls',
    skin: '#e0b48c', ink: '#2a1d12', hair: '#8a6242', hairLit: '#a67c52',
    body: { base: '#2e4a3c', lit: '#40614e', edge: '#a3bfa9', sleeve: '#37543f',
            sleeveL: '#4d6f58', hair: '#22382e', sole: '#1c2f26', outline: '#1c2f26', sash: '#7d9c85', sashLit: '#a3bfa9' },
    note: 'His suit green straight out of wreck.js: WSUIT_A, WSUIT_B and the pale glove value as his edge. The one model whose palette was already in the codebase.'
  },
  surveyor: {
    label: 'The surveyor', role: 'Author of the ledger page',
    stance: 'standing', expr: 'wary', look: [0.45, -0.1], hairKind: 'cap', hatKind: 'beanie',
    skin: '#d3ae94', ink: '#2a1d12', hair: '#4a3f38', hairLit: '#5f5249',
    hatFill: '#3a3f4e', hatLit: '#5a6377',
    body: { base: '#2f3340', lit: '#464b5c', edge: '#9aa4b8', sleeve: '#3a3f4e',
            sleeveL: '#535a6d', hair: '#22252e', sole: '#171a21', outline: '#171a21', sash: '#6a7488', sashLit: '#8f9ab0' },
    note: 'Standing, on the same build as Fredward. He was on the turning pose, whose offsets had been tuned against the old wide torso and read as a distortion once the body narrowed. Institutional grey-blue, no warmth in the coat at all.'
  },
  aufu: {
    label: 'Aufu', role: 'Keeper of the hoard',
    stance: 'standing', expr: 'wry', look: [-0.25, 0.15], hairKind: 'tuft',
    skin: '#dcae86', ink: '#2a1d12', hair: '#6b4526', hairLit: '#8a5c33',
    body: { base: '#4a3524', lit: '#63482f', edge: '#c9a37a', sleeve: '#553d29',
            sleeveL: '#6f5136', hair: '#2e2116', sole: '#1f160e', outline: '#1f160e', sash: '#8f6f4a', sashLit: '#b18f66' },
    note: 'Renamed from Liam, who is the DRAGON of lair.js and stays a dragon. Aufu is the person: brown, the warmest body in the set, because he is the one defined by keeping things. The cowlick does the work a raised brow used to.'
  },
  wren: {
    label: 'Wren', role: 'Islander',
    stance: 'standing', expr: 'open', look: [0, 0.1], hairKind: 'bob',
    skin: '#d9b79c', ink: '#2a1d12', hair: '#3f3630', hairLit: '#584c43',
    body: { base: '#3a2f42', lit: '#524460', edge: '#b3a1c4', sleeve: '#443a4e',
            sleeveL: '#5d5069', hair: '#2a2230', sole: '#1c1722', outline: '#1c1722', sash: '#7d6c8c', sashLit: '#9d8bad' },
    note: 'Included to prove the system generalises: a fourth character costs one palette and two dials, and nothing in either module changed to add her.'
  }
};

// ---------------------------------------------------------------------------
// Compose one model. The body is drawn first, headless; the head goes on top at
// the body's own head origin so the neck meets the skull exactly.
// ---------------------------------------------------------------------------
function model(r, m, opts) {
  opts = opts || {};
  const P = Object.assign({}, SLATE, m.body, { skin: m.skin });
  // The body module reads its palette from the module-level SLATE object, so
  // swap it for the duration of this call rather than threading a palette
  // argument through every function in it.
  const saved = {};
  for (const k of Object.keys(P)) { saved[k] = SLATE[k]; SLATE[k] = P[k]; }
  // NO CHIBI. The full build, 5.16 heads, which is what the body system was
  // designed for and what Fredward in wreck.js already is. The chibi
  // compression was introduced to reconcile the body with an over-large
  // Sanrio head; shrinking the eyes instead removes the reason for it.
  let o = figure(r, m.stance, { mod: m.mod || null,
    noHead: true, chibi: opts.chibi, armPose: opts.armPose });
  for (const k of Object.keys(saved)) SLATE[k] = saved[k];

  // The head, at the body's head origin. The body's turning pose shifts its
  // skull by r*0.3, so the face has to travel with it or it detaches -- the
  // same lesson the turning rebuild already taught once.
  const hd = m.stance === 'turning' ? r * 0.3 : 0;
  o += `<g transform="translate(${n(r * 0.07 + hd)},0)">`;
  o += `<circle cx="0" cy="0" r="${n(r)}" fill="${m.skin}"/>`;
  o += face(r, m.expr, { look: m.look, ink: m.ink, blushCol: m.blushCol, blushOp: m.blushOp });
  o += anyHair(r, m.hairKind, m);
  o += hat(r, m.hatKind || 'none', m);
  o += '</g>';
  if (opts.anim) {
    const ch = opts.chibi || 1;
    const sh = r * 2.05 * (opts.chibi ? 0.72 : 1), hs = sh + r * 3.1 * ch;
    o += breathe(r) + (m.stance === 'standing' ? sway(r, hs + (hs - sh) * 1.346) : '');
  }
  return o;
}

// ---------------------------------------------------------------------------
// PUBLIC API.
// ---------------------------------------------------------------------------
// bcCharacter(name, r, opts)  -> SVG string for one character, origin at the
//                                HEAD CENTRE so a scene positions the head and
//                                the body follows.
//   opts.stance  'standing' | 'seated' | 'turning'
//   opts.expr    overrides the character's default expression
//   opts.hat     overrides their default headwear ('none' to remove)
//   opts.sash    false to drop the sash
//   opts.flip    true to face the other way
function bcCharacter(name, r, opts) {
  opts = opts || {};
  var c = MODELS[name];
  if (!c) return '';
  var m = Object.assign({}, c, opts.expr ? { expr: opts.expr } : {},
    opts.hat !== undefined ? { hatKind: opts.hat } : {},
    opts.stance ? { stance: opts.stance } : {});
  if (opts.headOnly) {
    var head = '<g data-character-head="' + name + '">';
    if (opts.view === 'back') {
      head += '<circle r="' + n(r) + '" fill="' + m.hair + '"/>';
      head += anyHair(r, m.hairKind, m);
      if (name === 'canon') head += hat(r, 'headset', m);
    } else {
      head += '<circle r="' + n(r) + '" fill="' + m.skin + '"/>';
      head += face(r, m.expr, { look: m.look, ink: m.ink, blushCol: m.blushCol, blushOp: m.blushOp });
      head += anyHair(r, m.hairKind, m);
      head += hat(r, m.hatKind || 'none', m);
    }
    return head + '</g>';
  }
  var o = model(r, m, { sash: opts.sash, armPose: opts.armPose });
  if (opts.flip) o = '<g transform="scale(-1,1)">' + o + '</g>';
  return o;
}

// Place one at scene coordinates, standing on a given floor line.
function bcPlace(name, r, x, floorY, opts) {
  opts = opts || {};
  var sh = r * 2.05, hip = sh + r * 1.34, foot = hip + (hip - sh) * 3.3;
  // A SEATED FIGURE SITS LOWER against the same floor. The figure() geometry
  // already folds the legs correctly, but the head is drawn from the group
  // origin rather than from shoulderY, so dropping shoulderY decapitates it.
  // The whole group moves down instead, which keeps head, torso, arms and
  // folded legs together. Found by a review agent: the seated figure was
  // standing in front of its own chair.
  if (opts.stance === 'seated') foot -= r * 1.35;
  return '<g transform="translate(' + Math.round(x * 100) / 100 + ',' +
    Math.round((floorY - foot) * 100) / 100 + ')">' +
    bcCharacter(name, r, opts) + '</g>';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { bcCharacter: bcCharacter, bcPlace: bcPlace, CAST: MODELS, model: model };
}
