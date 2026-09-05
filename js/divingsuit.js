// ═══════════════════════════════════
//  THE DIVING SUIT: three pieces, and a reason to be at the docks
//
//  The wreck sits on the seabed a long way down and the player was reaching
//  it by clicking a button. No boat, no suit, no preparation, no reason the
//  water is survivable. The one place on the island that needed a threshold
//  had none, and the arrival at the bottom carried no weight because nothing
//  had been spent to get there.
//
//  So: an old hardhat suit hangs in the dock keeper's shack, and three parts
//  of it are missing. Find them and you can go down.
//
//  ── This is a LEAD-UP, not a gate ──────────────────────────────────────
//  The wreck is deliberately the un-gated half of the pet system. It takes no
//  terminal code, precisely so a player who never finds a secret can still
//  reach the warmest thing on the island. A subquest that BLOCKS them is the
//  same mistake in a different coat, and it is the exact failure the Layton
//  research named: content behind a threshold nobody was told about.
//
//  So nothing here is hidden and nothing here is hard:
//
//    * All three pieces sit in plain sight at locations already unlocked.
//    * The dock keeper names all three, by place, the first time you ask.
//    * No piece needs a clue solved, a code entered, or a story finished.
//    * Collecting one is a click. The work is noticing, not solving.
//
//  What it buys is preparation. You assemble a thing, you put it on, and
//  THEN you go down, so the descent is something you earned the right to do
//  rather than a button that was always there.
//
//  ── Why these three ────────────────────────────────────────────────────
//  Each piece is somewhere it would plausibly have ended up, held by somebody
//  with a reason to have it, and each one is the kind of object this island
//  makes: something that fell out of use and got absorbed into a place.
//
//    HELMET   Lexicon Library   propping a shelf, because it is the heaviest
//                               brass object anybody had
//    BOOTS    Puzzle Workshop   full of bolts, because they are lead-soled
//                               and will not tip over
//    HOSE     Cluey Cove        coiled in the tidal pool, mistaken for weed
//
//  ── No neglect, no loss ────────────────────────────────────────────────
//  Pieces are never lost, never break, never need maintenance. The suit is a
//  possession, not a chore.
// ═══════════════════════════════════

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BCWDivingSuit = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const KEY = 'bcw_diving_suit';

  // `at` is the location id whose panel offers the piece. `hint` is what the
  // dock keeper says, and it names the place outright: this is a lead-up and
  // a player must never be left hunting for something nobody mentioned.
  const PIECES = [
    {
      id: 'helmet',
      name: 'The brass helmet',
      at: 'library',
      where: 'the Lexicon Library',
      found: 'It is holding up the end of a shelf, because it was the heaviest ' +
        'brass thing anybody had when the shelf started to lean. The faceplate ' +
        'is scratched almost opaque and somebody has polished a clear patch in ' +
        'the middle of it, at eye height.',
      hint: 'The helmet went to the library. It has been propping up a shelf for ' +
        'years and I have stopped feeling able to ask for it back.',
    },
    {
      id: 'boots',
      name: 'The lead boots',
      at: 'workshop',
      where: 'the Puzzle Workshop',
      found: 'Both of them, standing side by side under a bench, full of bolts. ' +
        'Lead soles, so they will not tip over, which is exactly why somebody ' +
        'started keeping bolts in them and never stopped.',
      hint: 'The boots are at the workshop. Full of bolts, last I looked. They ' +
        'are lead-soled, so nothing in that place stands up better.',
    },
    {
      id: 'hose',
      name: 'The air hose',
      at: 'cove',
      where: 'Cluey Cove',
      found: 'Coiled in a tidal pool with weed grown through it, which is how it ' +
        'stopped being a hose and started being scenery. It is perfectly sound. ' +
        'Rubber does not mind the sea.',
      hint: 'The hose washed into the cove. It is in a tidal pool with weed all ' +
        'through it and it looks like part of the rock now.',
    },
  ];

  const BY_ID = PIECES.reduce((m, p) => ((m[p.id] = p), m), {});
  const BY_PLACE = PIECES.reduce((m, p) => ((m[p.at] = p), m), {});

  // ── Storage ───────────────────────────────────────────────────────────
  //
  // { asked: bool, have: [pieceId], worn: bool }
  //   asked — the dock keeper has explained the suit, so the pieces can be
  //           picked up. Nothing is collectable before somebody tells you it
  //           matters, or the first piece is a mystery object with no context.
  //   have  — pieces collected
  //   worn  — the suit has been assembled and put on, once. After that the
  //           player is a diver and stays one.
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return blank();
      return {
        asked: !!raw.asked,
        have: Array.isArray(raw.have) ? raw.have.filter((h) => BY_ID[h]) : [],
        worn: !!raw.worn,
      };
    } catch {
      return blank();
    }
  }

  function blank() {
    return { asked: false, have: [], worn: false };
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* private mode: the suit still works for this session */
    }
    if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
  }

  // ── The quest ─────────────────────────────────────────────────────────

  /** The dock keeper has explained what the suit needs. */
  function ask() {
    const state = load();
    if (state.asked) return false;
    state.asked = true;
    save(state);
    return true;
  }

  function hasAsked() {
    return load().asked;
  }

  /**
   * Pick a piece up.
   *
   * Refuses before the dock keeper has explained, so the first thing a player
   * ever finds is not a brass helmet with no story attached.
   */
  function take(id) {
    const piece = BY_ID[id];
    const state = load();
    if (!piece || !state.asked) return null;
    if (state.have.includes(id)) return null;
    state.have.push(id);
    save(state);
    return piece;
  }

  function has(id) {
    return load().have.includes(id);
  }

  /** The piece waiting at this location, if there is one and it is still there. */
  function pieceAt(locationId) {
    const piece = BY_PLACE[locationId];
    if (!piece) return null;
    const state = load();
    if (!state.asked || state.have.includes(piece.id)) return null;
    return piece;
  }

  function progress() {
    const state = load();
    return { have: state.have.length, total: PIECES.length, asked: state.asked, worn: state.worn };
  }

  function complete() {
    return load().have.length >= PIECES.length;
  }

  /** What the dock keeper still needs to point you at. */
  function missing() {
    const state = load();
    return PIECES.filter((p) => !state.have.includes(p.id));
  }

  /** Put it on. One-way, and only once every piece is in. */
  function wear() {
    const state = load();
    if (state.have.length < PIECES.length) return false;
    if (state.worn) return false;
    state.worn = true;
    save(state);
    return true;
  }

  /**
   * Can the player go down?
   *
   * True once the suit is assembled. Also true for any save that has ALREADY
   * been to the wreck, because this subquest arrived after the wreck did and
   * a returning player must never be told they can no longer reach a place
   * they have already been.
   */
  function canDive(alreadyVisited) {
    return !!alreadyVisited || complete();
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch { /* nothing to do */ }
  }

  return {
    KEY: KEY,
    PIECES: PIECES,
    byId: (id) => BY_ID[id] || null,
    ask: ask,
    hasAsked: hasAsked,
    take: take,
    has: has,
    pieceAt: pieceAt,
    progress: progress,
    complete: complete,
    missing: missing,
    wear: wear,
    canDive: canDive,
    reset: reset,
  };
});
