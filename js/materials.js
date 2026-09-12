// ═══════════════════════════════════
//  MATERIALS: what solving leaves behind
//
//  The house had fifteen pieces of furniture, all free and all unlimited, so
//  placing one meant nothing. You could fill the cottage in a minute without
//  having done anything. Meanwhile solving, which is the thing this whole island
//  is about, produced nothing at all.
//
//  Both problems have the same fix. Solving yields material. Furniture costs it.
//
//  ── The four ───────────────────────────────────────────────────────────
//  Timber, glass, brass, stone. Four is enough that a recipe can have a shape
//  and few enough that a player can hold the list in their head.
//
//  Which clue type yields which material is not arbitrary. It comes from what
//  the device does, so the material is a small second lesson about the clue:
//
//    anagram, letter-selection   TIMBER   things cut and re-joined
//    hidden, container           GLASS    one thing seen inside another
//    reversal, deletion          BRASS    something turned or taken off
//    charade, double, homophone  STONE    pieces set beside pieces
//
//  ── The sediment principle ─────────────────────────────────────────────
//  This is the lore, not a metaphor I invented. "An island builds from what
//  settling minds let fall." Material is what a solved clue drops. It is why
//  the cottage is furnished right, and why building here is the same act as
//  the island building itself.
//
//  ── No punishment ──────────────────────────────────────────────────────
//  A wrong answer costs nothing. Material is only ever gained, never spent on
//  attempts, never lost. Cryptics need speculative guesses, and an economy that
//  charges for one is an economy that teaches you not to try.
//
//  NO SPEED FRAMING (r3 #11). Nothing is timed and nothing pays more for haste.
// ═══════════════════════════════════

var BCWMaterials = (() => {
  const KEY = 'bitcryptic_materials';

  const KINDS = {
    timber: { label: 'Timber', icon: '\u{1FAB5}', note: 'Cut and re-joined.' },
    glass:  { label: 'Glass',  icon: '\u{1F52E}', note: 'One thing seen inside another.' },
    brass:  { label: 'Brass',  icon: '\u{1F514}', note: 'Turned, or taken off.' },
    stone:  { label: 'Stone',  icon: '\u{1FAA8}', note: 'Set beside its neighbour.' },
  };

  // The device decides the material. See the header: this is a second lesson
  // about what the clue actually did, not a random drop table.
  const BY_DEVICE = {
    anagram: 'timber',
    'letter-selection': 'timber',
    hidden: 'glass',
    container: 'glass',
    reversal: 'brass',
    deletion: 'brass',
    charade: 'stone',
    double: 'stone',
    homophone: 'stone',
  };

  // What a solved clue drops. A story clue is the ordinary case; a bonus
  // challenge is harder and pays better; finishing a whole story pays a mixed
  // handful, because a story is several clues and some walking about.
  const YIELD = { clue: 2, bonus: 3, story: 4 };

  // ── The labour graduates ──────────────────────────────────────────────
  //
  // The most-repeated fair criticism of Spiritfarer, a game that is 94%
  // positive: "it is not good on average." The named cause is that the verbs
  // at hour forty are identical to the verbs at hour one. You are still doing
  // the tutorial's job, by hand, forever.
  //
  // This bag had that shape. Every solve dropped two of something, at hour
  // one and at hour two hundred, and the only thing that changed was the
  // number getting bigger. So the yield graduates: once you have shown you
  // understand a device, its material arrives faster, because you have
  // stopped needing the practice and started needing the timber.
  //
  // Rules it obeys:
  //   * It is a RATCHET. Nothing decays and no tier is ever lost.
  //   * It is never a requirement. A player at tier one can build everything;
  //     they just make more trips.
  //   * It is earned from MASTERY, which is unaided solves, so it cannot be
  //     ground out by taking hints on the same clue repeatedly.
  const TIERS = [
    { at: 0,  mult: 1, note: '' },
    { at: 12, mult: 2, note: 'You have done this enough that it comes off in bigger pieces.' },
    { at: 30, mult: 3, note: 'It falls out of the clue almost before you have finished reading it.' },
  ];

  /**
   * How much a solve yields now, and why.
   *
   * Reads the Academy's mastery record when it is present. When it is not,
   * which is any harness or a page that loaded this module alone, everything
   * falls back to tier one and nothing breaks.
   */
  function tier() {
    let unaided = 0;
    try {
      if (typeof BCMastery !== 'undefined' && BCMastery.summary && typeof BCTaxonomy !== 'undefined') {
        // The unaided count is lifetime solves taken without a hint. Not the
        // learned count, which counts DEVICES cleared and tops out at eight,
        // and not attempted, which a player could run up by guessing.
        unaided = BCMastery.summary(BCTaxonomy.ids()).unaided || 0;
      }
    } catch { /* the Academy is optional here */ }
    let best = TIERS[0];
    for (const t of TIERS) if (unaided >= t.at) best = t;
    return best;
  }

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (!parsed || typeof parsed !== 'object') return blank();
      const out = blank();
      for (const k of Object.keys(KINDS)) {
        const n = Number(parsed[k]);
        out[k] = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
      }
      return out;
    } catch {
      return blank();
    }
  }

  function blank() {
    return { timber: 0, glass: 0, brass: 0, stone: 0 };
  }

  function write(bag) {
    try {
      localStorage.setItem(KEY, JSON.stringify(bag));
    } catch {
      return false;
    }
    try {
      if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
    } catch { /* sync is optional */ }
    try {
      window.dispatchEvent(new CustomEvent('bcw-materials-changed', { detail: bag }));
    } catch { /* an unheard event is never worth an exception */ }
    return true;
  }

  /**
   * Pay out for a solve.
   *
   * @param {string} device  a clue type; unknown devices pay timber, because a
   *   solve should never pay nothing just because its clue was untagged
   * @param {string} source  'clue' | 'bonus' | 'story'
   * @returns {object|null}  { kind, amount, total } or null if nothing was paid
   */
  function award(device, source) {
    const kind = BY_DEVICE[device] || 'timber';
    const t = tier();
    const amount = (YIELD[source] || YIELD.clue) * t.mult;
    const bag = read();
    bag[kind] += amount;
    write(bag);
    // The note is carried only so a caller can say it once when a tier is
    // first reached, rather than congratulating the player on every solve.
    return { kind: kind, amount: amount, total: bag[kind], tier: t.mult, note: t.note };
  }

  /** A mixed handful, for finishing a story. */
  function awardStory(device) {
    const kind = BY_DEVICE[device] || 'timber';
    const bag = read();
    bag[kind] += YIELD.story;
    // Plus one of something else, so a story always broadens the bag rather
    // than deepening one pile. A player who only ever solved anagrams would
    // otherwise never see glass.
    const others = Object.keys(KINDS).filter((k) => k !== kind);
    const second = others[Math.floor(Math.random() * others.length)];
    bag[second] += 1;
    write(bag);
    return { kind: kind, amount: YIELD.story, second: second };
  }

  function have() { return read(); }

  /** Can this recipe be afforded? */
  function canAfford(cost) {
    const bag = read();
    return Object.keys(cost || {}).every((k) => bag[k] >= cost[k]);
  }

  /** Spend. Returns false and changes nothing when the bag is short. */
  function spend(cost) {
    const bag = read();
    if (!canAfford(cost)) return false;
    for (const k of Object.keys(cost)) bag[k] -= cost[k];
    write(bag);
    return true;
  }

  /** For a shortfall message: what is missing, and how much. */
  function shortfall(cost) {
    const bag = read();
    const out = {};
    for (const k of Object.keys(cost || {})) {
      const gap = cost[k] - bag[k];
      if (gap > 0) out[k] = gap;
    }
    return out;
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch { /* nothing to do */ }
  }

  return {
    KEY: KEY,
    KINDS: KINDS,
    BY_DEVICE: BY_DEVICE,
    YIELD: YIELD,
    TIERS: TIERS,
    tier: tier,
    award: award,
    awardStory: awardStory,
    have: have,
    canAfford: canAfford,
    spend: spend,
    shortfall: shortfall,
    reset: reset,
  };
})();
