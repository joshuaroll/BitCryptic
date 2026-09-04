// ═══════════════════════════════════
//  THE COTTAGE: building it, rather than being handed it
//
//  The house came furnished with fifteen free pieces. Placing one cost nothing
//  and meant nothing, so the decorator was a sandbox rather than a reward.
//
//  Now each piece is built from material that solving produced. The furniture
//  itself is unchanged, and so is the decorator: what changes is that a chair
//  is something you made out of a morning's solving rather than something the
//  menu always had.
//
//  ── The recipes ────────────────────────────────────────────────────────
//  Costs read from the object. A bookshelf is timber and the brass for its
//  fittings. A fireplace is stone and the brass of a fireguard. A spyglass is
//  mostly glass with a brass barrel. Reading a recipe should tell you what the
//  thing is made of, because that is what makes it feel built.
//
//  Five starters cost nothing. A player should be able to sit down and light a
//  lamp on the first visit; the point is not to gate the cottage, it is to make
//  the good pieces worth the walk.
//
//  ── Secrets are blueprints ─────────────────────────────────────────────
//  The five secret codes each unlock a piece that cannot be built any other
//  way, and the attic needs all four materials AND all five secrets. That makes
//  the attic what the fishing upgrade list already implies it is: the long game,
//  and now the long game rewards exploring rather than grinding.
//
//  ── The lore this rests on ─────────────────────────────────────────────
//  The sediment principle, verbatim from the lorebook: an island builds from
//  what settling minds let fall. Material is what a solved clue drops, and
//  building the cottage is the same act the island performs on itself. It is
//  also why "WELCOME HOME" was a forecast rather than a greeting.
// ═══════════════════════════════════

var BCWCottage = (() => {
  const BUILT_KEY = 'bitcryptic_built';

  // Free from the start. Enough to sit, sleep, eat and see by, so the cottage
  // is never an empty room with a price list.
  const STARTERS = ['table', 'chair', 'bed', 'lamp', 'rug'];

  // id -> { cost, note }. `note` is what the builder says while making it, and
  // is the only place a recipe explains itself.
  const RECIPES = {
    bookshelf: { cost: { timber: 6, brass: 2 }, note: 'Six boards and the brass to hang them straight.' },
    plant:     { cost: { timber: 1, glass: 2 }, note: 'A cutting from the forest, under glass.' },
    fireplace: { cost: { stone: 5, brass: 2 }, note: 'Stone for the hearth, brass for the guard.' },
    painting:  { cost: { timber: 2, glass: 3 }, note: 'A frame, and glass to keep the salt off.' },
    clock:     { cost: { brass: 5, glass: 1 }, note: 'Brass throughout, and one small window.' },
    fridge:    { cost: { brass: 4, glass: 2, timber: 2 }, note: 'Cold box, brass hinges, a door that shuts.' },
    stove:     { cost: { stone: 4, brass: 3 }, note: 'Stone body, brass flue.' },
    sink:      { cost: { stone: 3, brass: 3 }, note: 'Basin cut from stone, taps turned from brass.' },
    toaster:   { cost: { brass: 3, glass: 1 }, note: 'Small, warm, and slightly overbuilt.' },
    spyglass:  { cost: { glass: 4, brass: 3 }, note: 'Ground glass in a brass barrel. Point it anywhere.' },
  };

  // Pieces that only a secret opens. The code is the blueprint.
  const BLUEPRINTS = {
    fireplace: { code: 'COME IN', from: 'the cottage itself' },
    bookshelf: { code: 'LR', from: 'a hoard beneath the cliffs' },
    spyglass:  { code: 'MARK', from: 'a crater with a view' },
  };

  function readBuilt() {
    try {
      const raw = localStorage.getItem(BUILT_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function writeBuilt(list) {
    try {
      localStorage.setItem(BUILT_KEY, JSON.stringify(list));
    } catch {
      return false;
    }
    try {
      if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
    } catch { /* sync is optional */ }
    return true;
  }

  /** Is this piece available to place in the decorator? */
  function isAvailable(id) {
    if (STARTERS.indexOf(id) !== -1) return true;
    return readBuilt().indexOf(id) !== -1;
  }

  /** Does a secret still stand between the player and this recipe? */
  function blueprintMissing(id) {
    const bp = BLUEPRINTS[id];
    if (!bp) return null;
    let codes = [];
    try {
      codes = (typeof getUnlockedCodes === 'function') ? getUnlockedCodes() : [];
    } catch { /* an unreadable list reads as none found */ }
    return codes.indexOf(bp.code) === -1 ? bp : null;
  }

  /**
   * Everything the workbench needs to draw itself.
   *
   * Each row says what the piece is, what it costs, whether it can be built
   * now, and if not, why not. A row that cannot be built still shows its cost,
   * because a price you cannot pay yet is a goal and a hidden price is nothing.
   */
  function bench() {
    const built = readBuilt();
    return Object.keys(RECIPES).map((id) => {
      const r = RECIPES[id];
      const missing = blueprintMissing(id);
      const has = typeof BCWMaterials !== 'undefined' ? BCWMaterials.canAfford(r.cost) : false;
      return {
        id: id,
        cost: r.cost,
        note: r.note,
        built: built.indexOf(id) !== -1,
        blueprint: missing,
        affordable: has,
        buildable: !missing && has && built.indexOf(id) === -1,
        short: (!missing && typeof BCWMaterials !== 'undefined')
          ? BCWMaterials.shortfall(r.cost) : {},
      };
    });
  }

  /**
   * Build one piece.
   *
   * @returns {object} { ok, reason }  `reason` is 'built' | 'blueprint' |
   *   'short' | 'unknown', so the caller can say something specific rather than
   *   refusing without explanation.
   */
  function build(id) {
    const r = RECIPES[id];
    if (!r) return { ok: false, reason: 'unknown' };
    const built = readBuilt();
    if (built.indexOf(id) !== -1) return { ok: false, reason: 'built' };
    const missing = blueprintMissing(id);
    if (missing) return { ok: false, reason: 'blueprint', blueprint: missing };
    if (typeof BCWMaterials === 'undefined' || !BCWMaterials.spend(r.cost)) {
      return { ok: false, reason: 'short', short: BCWMaterials ? BCWMaterials.shortfall(r.cost) : {} };
    }
    built.push(id);
    writeBuilt(built);
    return { ok: true, reason: 'ok', note: r.note };
  }

  // The attic. Every material and every secret, which makes it the one thing
  // on the island that asks for both halves of the game at once.
  const ATTIC_COST = { timber: 40, glass: 30, brass: 30, stone: 30 };

  function atticStatus() {
    const codes = (() => {
      try { return (typeof getUnlockedCodes === 'function') ? getUnlockedCodes() : []; }
      catch { return []; }
    })();
    const secrets = (typeof BCWGraduation !== 'undefined')
      ? BCWGraduation.SECRET_CODES.filter((s) => s.codes.some((c) => codes.indexOf(c) !== -1))
      : [];
    const affordable = typeof BCWMaterials !== 'undefined' && BCWMaterials.canAfford(ATTIC_COST);
    return {
      cost: ATTIC_COST,
      secrets: secrets.length,
      secretsNeeded: 5,
      affordable: affordable,
      ready: affordable && secrets.length === 5,
      short: typeof BCWMaterials !== 'undefined' ? BCWMaterials.shortfall(ATTIC_COST) : {},
    };
  }

  function reset() {
    try { localStorage.removeItem(BUILT_KEY); } catch { /* nothing to do */ }
  }

  return {
    BUILT_KEY: BUILT_KEY,
    STARTERS: STARTERS,
    RECIPES: RECIPES,
    BLUEPRINTS: BLUEPRINTS,
    ATTIC_COST: ATTIC_COST,
    isAvailable: isAvailable,
    blueprintMissing: blueprintMissing,
    bench: bench,
    build: build,
    atticStatus: atticStatus,
    readBuilt: readBuilt,
    reset: reset,
  };
})();
