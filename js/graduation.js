// ═══════════════════════════════════
//  GRADUATION: the reason the island ends
//
//  The island had no ending. A player could finish every story, find every
//  secret and be told nothing, because completion was tracked in achievements
//  and never in the fiction. That is a world with no exit, which is a strange
//  shape for a place whose whole premise is that you washed up here.
//
//  ── The condition ──────────────────────────────────────────────────────
//  Two halves, both already tracked:
//
//    1. Solve all TEN main locations (their stories completed)
//    2. Find FIVE secret codes (the ones that spawn a hidden place)
//
//  The codes are the second half on purpose. Finishing the stories is the
//  curriculum; finding the secrets is proof you looked at the island rather
//  than through it. A player who did only the first has been taught. A player
//  who did both has been paying attention.
//
//  ── What happens ───────────────────────────────────────────────────────
//  Decoder Docks calls in a transport ship. The docks are where the player
//  arrived in a tattered red boat, so they are where a proper vessel arriving
//  means something: the island is not throwing you out, it is acknowledging you
//  can leave under your own name.
//
//  Boarding is the player's choice and is never forced. The island stays open
//  afterwards. Nothing about graduating should feel like an ending you cannot
//  come back from, because everything else here is still playable.
//
//  ── Lore ───────────────────────────────────────────────────────────────
//  The delta protagonist was sent to explore undocumented world islands. A
//  transport arriving means the survey is accepted and the next island is
//  assigned, which is the hook the story continues on. `[NEW CANON]` until
//  Joshua signs the copy off; nothing here names a character or resolves a
//  planted ambiguity.
//
//  NO SPEED FRAMING (r3 #11). Nothing is timed and nothing ranks the finish.
// ═══════════════════════════════════

var BCWGraduation = (() => {
  const STATE_KEY = 'bcw_graduation';

  // The ten locations whose stories are the island's curriculum. Secret places
  // are deliberately excluded: those are the codes half of the requirement.
  const MAIN_STORIES = [
    'docks', 'forest', 'cafe', 'town', 'adventure',
    'library', 'workshop', 'beach', 'cove', 'observatory',
  ];

  // The five codes that open a place rather than a cosmetic. Each entry lists
  // every accepted spelling, because several have a long form and a short one
  // and a player who found either has found the secret.
  const SECRET_CODES = [
    { id: 'house', label: 'the cottage', codes: ['COME IN', 'WELCOME HOME'] },
    { id: 'lair', label: 'the lair beneath the cliffs', codes: ['LR', 'LIAM RUNNALLS'] },
    { id: 'moon', label: 'the crater', codes: ['MARK', 'MOON'] },
    { id: 'pond', label: 'the pond', codes: ['FISH', 'FISHING'] },
    { id: 'airship', label: 'the skyship', codes: ['FLOAT', 'SIMON'] },
  ];

  function readState() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }

  function writeState(next) {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(next));
    } catch {
      return false;
    }
    try {
      if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
    } catch { /* sync is optional */ }
    return true;
  }

  /**
   * How far along the player is.
   *
   * Reads the same progress the rest of the game reads rather than keeping its
   * own tally, so it can never disagree with the map.
   */
  function progress() {
    let completed = [];
    let codes = [];
    try {
      const state = (typeof getProgress === 'function') ? getProgress() : {};
      completed = Array.isArray(state.completedStories) ? state.completedStories : [];
    } catch { /* an unreadable save reads as no progress */ }
    try {
      codes = (typeof getUnlockedCodes === 'function') ? getUnlockedCodes() : [];
    } catch { /* same */ }

    const storiesDone = MAIN_STORIES.filter((id) => completed.includes(id));
    const secretsFound = SECRET_CODES.filter((s) => s.codes.some((c) => codes.includes(c)));

    return {
      stories: storiesDone.length,
      storiesNeeded: MAIN_STORIES.length,
      storiesLeft: MAIN_STORIES.filter((id) => !completed.includes(id)),
      secrets: secretsFound.length,
      secretsNeeded: SECRET_CODES.length,
      secretsFound: secretsFound.map((s) => s.id),
      ready: storiesDone.length === MAIN_STORIES.length &&
             secretsFound.length === SECRET_CODES.length,
    };
  }

  /** Has the ship already been called? */
  function called() { return !!readState().called; }

  /** Has the player boarded? The island stays open either way. */
  function departed() { return !!readState().departed; }

  function markCalled() {
    const s = readState();
    if (s.called) return false;
    s.called = true;
    s.calledAt = Date.now();
    writeState(s);
    return true;
  }

  function markDeparted() {
    const s = readState();
    s.departed = true;
    s.departedAt = Date.now();
    writeState(s);
  }

  function reset() {
    try { localStorage.removeItem(STATE_KEY); } catch { /* nothing to do */ }
  }

  return {
    STATE_KEY: STATE_KEY,
    MAIN_STORIES: MAIN_STORIES,
    SECRET_CODES: SECRET_CODES,
    progress: progress,
    called: called,
    departed: departed,
    markCalled: markCalled,
    markDeparted: markDeparted,
    reset: reset,
  };
})();
