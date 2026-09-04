// ═══════════════════════════════════
//  THE DAILY, IN THE TOWN SQUARE
//
//  The town terminal already takes codes the player finds around the island.
//  This teaches it one more word. Typing DAILY hands back a clue, which puts
//  the daily habit inside a place the player already walks through instead of
//  on a separate page they have to remember to visit.
//
//  WHY THE TERMINAL RATHER THAN A NEW SCREEN. The Academy's whole argument is
//  that a learning layer belongs in the places that already exist. The terminal
//  is the island's one machine for typing a word and getting something back,
//  which is exactly the shape of a daily clue.
//
//  ── Which clue ─────────────────────────────────────────────────────────
//  The device the player is WEAKEST at, read from the shared mastery record
//  written by the Field Guide, the Clinic and the drills. That makes the daily
//  a review rather than a lottery. With no mastery available (a signed-out
//  first visit, or the module not loaded) it falls back to the date, which is
//  what the standalone Daily already does.
//
//  Within the chosen device the clue is picked by date, so every player on the
//  island sees the same clue for that device on that day and the choice is
//  reproducible for support.
//
//  ── One a day, and no punishment ───────────────────────────────────────
//  A solved daily is recorded so the same clue is not served twice, but there
//  is no streak, no counter and nothing to break. Streak creep turns a habit
//  into a grind, and a player who misses a day should find the island exactly
//  as they left it.
//
//  NO SPEED FRAMING (r3 #11). Nothing is timed and nothing is ranked.
//
//  GATED. BCW_DAILY_TERMINAL is false until after the M6 cutover. World ships
//  first and this is a new interactive surface, so the launch build behaves
//  exactly as it does today.
// ═══════════════════════════════════

var BCWDailyTerminal = (() => {
  const SOLVED_KEY = 'bcw_daily_solved';

  // Clue text, answers and parses are frozen content, quoted verbatim from
  // Bit_Cryptic_World/src/data/dailyClues.js. Nothing here is composed.
  // The monolith does not load that file (it belongs to the separate React
  // daily app), so the subset the terminal needs is mirrored here rather than
  // fetched. Keep them byte-identical to the source.
  const CLUES = [
    { clue: "Bared, oddly, the loaf (5)", answer: "BREAD", type: "anagram",
      definition: "the loaf",
      parse: "'Oddly' is the anagram indicator. Rearrange BARED to get BREAD. Definition: 'the loaf'." },
    { clue: "Cape conceals (5)", answer: "CLOAK", type: "double",
      definition: "Cape",
      parse: "Double definition. CLOAK = a cape AND CLOAK = conceals/hides from view." },
    { clue: "Bird brought north for the royal headpiece (5)", answer: "CROWN", type: "charade",
      definition: "the royal headpiece",
      parse: "CROW (bird) + N (north) = CROWN. Definition: 'the royal headpiece'." },
    { clue: "Crest partly in hybrid gears (5)", answer: "RIDGE", type: "hidden",
      definition: "Crest",
      parse: "'Partly in' is the hidden-word indicator. RIDGE is hidden across 'hyb-RIDGE-ars'. Definition: 'Crest'." },
    { clue: "Smile about a seed (5)", answer: "GRAIN", type: "container",
      definition: "seed",
      parse: "GRIN (smile) placed about A gives GRAIN. Definition: 'seed'." },
    { clue: "Rats turned into a celestial body (4)", answer: "STAR", type: "reversal",
      definition: "a celestial body",
      parse: "'Turned' is the reversal indicator. Reverse RATS to get STAR. Definition: 'a celestial body'." },
    { clue: "Happiness curtailed before morning's shimmer (5)", answer: "GLEAM", type: "deletion",
      definition: "shimmer",
      parse: "GLEE (happiness) curtailed (remove last letter) = GLE + AM (morning) = GLEAM. Definition: 'shimmer'." },
  ];

  /** Local calendar date, never toISOString, which shifts the day by timezone. */
  function today() {
    const d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function hash(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function readSolved() {
    try {
      const raw = localStorage.getItem(SOLVED_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }

  function markSolved(date) {
    try {
      const s = readSolved();
      s[date] = true;
      // Only the last 60 days are worth keeping; the rest is dead weight in a
      // synced payload.
      const keys = Object.keys(s).sort().slice(-60);
      const trimmed = {};
      keys.forEach((k) => { trimmed[k] = true; });
      localStorage.setItem(SOLVED_KEY, JSON.stringify(trimmed));
    } catch { /* a lost record costs the player nothing today */ }
    try {
      if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
    } catch { /* sync is optional */ }
  }

  /**
   * Today's clue.
   *
   * Weakest device first when mastery is available, then by date within that
   * device so the pick is stable and reproducible.
   */
  function pick() {
    const date = today();
    const devices = CLUES.map((c) => c.type);

    let preferred = null;
    try {
      if (typeof BCMastery !== 'undefined' && BCMastery.weakestFirst) {
        const ranked = BCMastery.weakestFirst(devices);
        if (ranked && ranked.length) preferred = ranked[0];
      }
    } catch { /* fall through to the date */ }

    const pool = preferred ? CLUES.filter((c) => c.type === preferred) : CLUES;
    const list = pool.length ? pool : CLUES;
    return { clue: list[hash(date) % list.length], date: date, byMastery: !!preferred };
  }

  function isSolved(date) { return !!readSolved()[date]; }

  return {
    CLUES: CLUES,
    today: today,
    pick: pick,
    isSolved: isSolved,
    markSolved: markSolved,
    _hash: hash,
  };
})();
