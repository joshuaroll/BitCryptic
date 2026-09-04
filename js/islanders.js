// ═══════════════════════════════════
//  ISLANDERS: the world notices you back
//
//  THE PROBLEM THIS EXISTS TO FIX. Fifteen locations, sixteen stories, and not
//  one of them ever checked what happened anywhere else. Every location gated
//  only its own story. You could finish the forest and the docks would not
//  know. That is a corridor with rooms off it, not a world.
//
//  A place feels alive when it appears to have been paying attention. Not when
//  it has more content: when the content it has refers to the rest.
//
//  ── How a remark is chosen ─────────────────────────────────────────────
//  Each islander holds a short list of lines, each with a condition. The last
//  one whose condition is met wins, so the list reads as a progression and a
//  player who has done more hears the later thing. Nothing repeats itself into
//  the ground, and nothing fires before it is earned.
//
//  ── The rule the lore imposes ──────────────────────────────────────────
//  "Never confirm which is which cheaply. Every confirmation costs the player
//  something relational." So no line here resolves a planted ambiguity. The
//  Dock Keeper still greets arrivals as returners and still does not explain
//  it. What these lines do is notice the player, which is a different thing
//  from explaining the island.
//
//  ── Cross-references are the point ─────────────────────────────────────
//  Mark and the Star Watcher are colleagues "from before". Neither has ever
//  mentioned the other. Croc runs the Workshop and the Head Librarian catalogues
//  what you find there. Those threads exist in the lore and have never existed
//  in the game. Every remark below that names another islander or another place
//  is doing that job.
//
//  COPY IS PLACEHOLDER until G3 sign-off.
// ═══════════════════════════════════

var BCWIslanders = (() => {
  /** Everything a condition might want to ask about, read once per call. */
  function facts() {
    let progress = {};
    let codes = [];
    try { progress = (typeof getProgress === 'function') ? getProgress() : {}; } catch { /* empty */ }
    try { codes = (typeof getUnlockedCodes === 'function') ? getUnlockedCodes() : []; } catch { /* empty */ }

    const done = Array.isArray(progress.completedStories) ? progress.completedStories : [];
    let learned = 0;
    let caught = 0;
    try {
      if (typeof BCMastery !== 'undefined' && BCMastery.summary && typeof BCTaxonomy !== 'undefined') {
        learned = BCMastery.summary(BCTaxonomy.ids()).learned;
      }
    } catch { /* the Academy is optional here */ }
    try {
      if (typeof BCMenagerie !== 'undefined') caught = BCMenagerie.progress().caught;
    } catch { /* same */ }

    let materials = { timber: 0, glass: 0, brass: 0, stone: 0 };
    try {
      if (typeof BCWMaterials !== 'undefined') materials = BCWMaterials.have();
    } catch { /* same */ }

    return {
      done: done,
      stories: done.length,
      codes: codes,
      secrets: codes.length,
      learned: learned,
      caught: caught,
      materials: materials,
      built: (typeof BCWCottage !== 'undefined') ? BCWCottage.readBuilt().length : 0,
      has: (id) => done.indexOf(id) !== -1,
      code: (c) => codes.indexOf(c) !== -1,
    };
  }

  // Ordered lists. Later entries win, so each islander reads as someone whose
  // opinion of you moved rather than someone with a bag of random lines.
  const REMARKS = {
    dock_keeper: [
      { when: (f) => f.stories >= 1,
        say: 'The dock keeper nods at the water. "Still here, then. Most are, for a while."' },
      { when: (f) => f.stories >= 4,
        say: 'The dock keeper looks you over. "You have got your legs. The tumble wears off, mostly."' },
      { when: (f) => f.secrets >= 2,
        say: '"The terminal has been busy," he says, not quite a question. "It does that when someone starts listening."' },
      { when: (f) => f.stories >= 8,
        say: 'He is quiet a while. "You have been most places now. There is a thing I do at this point, which is to say nothing and let you get on."' },
    ],

    croc: [
      { when: (f) => f.has('workshop'),
        say: 'Cryptic Croc taps the Anagram Engine. "She runs. Bring me letters and we will see what falls out."' },
      { when: (f) => f.materials.timber >= 10,
        say: 'Croc eyes your timber. "You have been solving. It piles up, does it not."' },
      { when: (f) => f.learned >= 3,
        say: '"Three tricks down," says Croc, without looking up. "The Star Watcher had four before she stopped counting. Do not tell her I said a number."' },
      { when: (f) => f.built >= 5,
        say: 'Croc glances toward the cottage. "You have been building. That is the island doing its usual thing through you, but there is no need to be gloomy about it."' },
    ],

    mark: [
      { when: (f) => f.has('cove'),
        say: 'Mark writes without looking up. The pen does not stop while he speaks. "You found the cove. Good."' },
      { when: (f) => f.learned >= 2,
        say: '"You are reading them properly now," Mark says. "That is the part nobody can teach you twice."' },
      { when: (f) => f.has('observatory'),
        say: '"You have been up the peak, then." A pause. "She is well, I take it. You need not answer that."' },
      { when: (f) => f.caught >= 10,
        say: 'Mark sets the pen down, which he does not do. "Ten indicators. You are collecting the weather."' },
    ],

    star_watcher: [
      { when: (f) => f.has('observatory'),
        say: 'The Star Watcher does not take her eye from the glass. "Letters are terrain. You will see it or you will not."' },
      { when: (f) => f.caught >= 5,
        say: '"You have started noticing the signal words," she says. "Mark used to chalk them on the rail. Before."' },
      { when: (f) => f.learned >= 4,
        say: '"Four," she says, and something in her face moves. "He will have told you I stopped counting. I did not stop counting."' },
    ],

    librarian: [
      { when: (f) => f.has('library'),
        say: 'The Head Librarian whispers, which is the loudest thing here. "Everything you find is catalogued. Including the things you have not told anyone."' },
      { when: (f) => f.secrets >= 3,
        say: '"Three codes," she whispers. "The shelf notices that sort of thing."' },
      { when: (f) => f.learned >= 6,
        say: '"Six of the eight," she says. "The Forbidden Shelf is pre-settlement. It was written by people who had all eight and no word for them."' },
    ],
  };

  /**
   * The line this islander has for you now, or null.
   *
   * Null is a real answer and callers must handle it: an islander with nothing
   * new to say should say nothing rather than repeat their greeting, because a
   * character who talks when they have nothing is a character who stops
   * mattering.
   */
  function remark(who) {
    const list = REMARKS[who];
    if (!list) return null;
    const f = facts();
    let best = null;
    for (const entry of list) {
      try {
        if (entry.when(f)) best = entry.say;
      } catch { /* a broken condition simply does not fire */ }
    }
    return best;
  }

  /** Everyone with something to say right now. For the notice board. */
  function speaking() {
    return Object.keys(REMARKS).filter((w) => remark(w) !== null);
  }

  return { REMARKS: REMARKS, remark: remark, speaking: speaking, facts: facts };
})();
