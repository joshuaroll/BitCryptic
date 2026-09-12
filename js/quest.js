// ═══════════════════════════════════
//  THE QUESTLINE: Canon, Fredward, and five things a crossing shed
//
//  Two brothers crossed to this island in the same boat. One of them went
//  down to the wreck early and stayed. The other sits in a room under the
//  town square fountain with nine screens and a second chair nobody uses,
//  and he has worked out that you cannot argue a person into wanting
//  something. You have to put the thing in their hands.
//
//  So: five errands. Each one retrieves an object that came off that
//  crossing and has been sitting on the island ever since, being scenery.
//
//  ── Why errands, and not a plot ────────────────────────────────────────
//  The sediment principle, from the lorebook: an island builds from what
//  settling minds let fall. That is not decoration here. It means the quest
//  structure and the metaphysics are literally the same act: fetching five
//  objects out of the landscape IS dredging a person's dropped life out of
//  the terrain. The cottage already runs on this. So does the material a
//  solved clue leaves behind.
//
//  ── The rules this module enforces ─────────────────────────────────────
//
//  1. ONE STEP PER MISSION IS RANDOMISED PER SAVE.
//     Club Penguin randomised a value in three of its eleven agent missions:
//     the sock count, the vault combination, the telescope path. A walkthrough
//     got you most of the way and then left you to actually decode something.
//     It is the cheapest integrity mechanism in the genre and it costs us one
//     seeded number. See `variant()`.
//
//  2. THE LAST MISSION HAS NO GADGET.
//     Canon has four and then he opens the drawer and it is empty, and he
//     says so rather than improvising something. This is the difficulty
//     spike, and it is also the Academy's entire argument stated as a
//     mechanic: the last one you do unaided.
//
//  3. NOTHING EXPIRES, EVER.
//     52% of Professor Layton's puzzles no longer exist, because they were
//     download-only and the servers closed. Miracle Mask lost 71% of its
//     content and a golden statue nobody can earn again. Every completion
//     state here is computed from the save file in front of you. There is no
//     server, no window, and no date after which a player can no longer
//     finish this.
//
//  4. IT NEVER BECOMES MANDATORY.
//     No clue anywhere requires an artifact, a gadget or a pet. This is the
//     best content on the island and it is entirely optional, which is the
//     only arrangement under which "best" is a compliment.
// ═══════════════════════════════════

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BCWQuest = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const KEY = 'bcw_quest';

  // The five errands, in order. `location` is the island id the mission sends
  // you to; `device` is the clue type its puzzle uses, which is also what
  // decides the material it drops.
  //
  // Each artifact is a piece of one crossing. They are deliberately small and
  // domestic: a rope end, a lamp lens, a page, a compass card, a letter. An
  // island that builds from what minds let fall does not shed treasure. It
  // sheds the things you stop reaching for.
  const MISSIONS = [
    {
      id: 'rope',
      n: 1,
      location: 'beach',
      device: 'anagram',
      artifact: 'The rope’s other end',
      artifactNote:
        'A hand’s length of tarred boat rope. Spliced at one end, cut clean at the other. ' +
        'The splice was done badly and then done again over the top of itself, by someone learning.',
      gadget: 'sounding-spoon',
      brief: 'Something of ours went into the water off the boat and came ashore there. ' +
        'Take the fork. If the sand answers flat, keep walking.',
    },
    {
      id: 'lens',
      n: 2,
      location: 'forest',
      device: 'hidden',
      artifact: 'A brass boat-lamp lens',
      artifactNote:
        'Green glass the size of a coaster, grown into the fork of a tree with the bark ' +
        'closed over the rim. The tree did not swallow it. The tree built around it.',
      gadget: 'green-lens',
      brief: 'The tree has grown around the lens. Do not fight the tree. ' +
        'Ask it nicely and then take the lens.',
    },
    {
      id: 'ledger',
      n: 3,
      location: 'library',
      device: 'container',
      artifact: 'A survey ledger page',
      artifactNote:
        'One leaf, folded in eighths, shelved between two pre-settlement riddle books as ' +
        'though it were catalogued. Ruled columns. Forty lines in a small tidy hand you ' +
        'half know and cannot place.',
      gadget: 'quiet-hinge',
      brief: 'A folded page, filed where a page should not be. ' +
        'Bring it up and do not read it in there.',
    },
    {
      id: 'compass',
      n: 4,
      location: 'observatory',
      device: 'charade',
      artifact: 'A ship’s compass card',
      artifactNote:
        'The printed rose off a boat compass, laid into the observatory floor as one tile ' +
        'among four hundred. Wrong material, right size. It points eleven degrees off, and ' +
        'it has pointed eleven degrees off since it was on a boat.',
      gadget: 'cold-latch',
      brief: 'North on that card is not north. Do not correct it. That is the information.',
    },
    {
      id: 'letter',
      n: 5,
      location: 'lair',
      device: 'reversal',
      artifact: 'A letter, unsent',
      artifactNote:
        'Four pages in the handwriting you have now seen twice, folded into a tin that once ' +
        'held boiled sweets, at the bottom of a hoard of clues. Written to a brother, on the ' +
        'boat, the night before the crossing. Never handed over.',
      // The empty drawer. Canon has nothing left and says so plainly rather
      // than improvising the player something that would only make them
      // confident. This is the spike, and it is on purpose.
      gadget: null,
      brief: 'I have nothing for you. I want to be straightforward about that rather than ' +
        'improvise you something that would only make you confident.',
    },
  ];

  // Modest, hand-made, and useful. Nothing here is a spy gadget: they are
  // things a man built out of what washed up, which is the only kind of
  // equipment this island would let anybody have.
  const GADGETS = {
    // Was "The Sounding Spoon", a beaten spoon on a fishing line. It never
    // read: a spoon at 40px is an oval on a string, and three separate art
    // passes produced a bell, a bathysphere and a blob. The problem was the
    // object, not the drawing.
    //
    // A tuning fork has the one thing the spoon lacked: an unmistakable
    // silhouette at any size. It also does the job more plainly, because a
    // fork is FOR finding out what a thing sounds like. And it is still
    // something a man makes from what washes up, which is the rule every
    // gadget here obeys.
    //
    // The id stays 'sounding-spoon' so no save, scene or check breaks.
    'sounding-spoon': {
      name: 'The Sounding Fork',
      desc: 'Two prongs bent from a brass curtain rod, filed until they agree. ' +
        'Strike it, set the stem against a plank, and listen. Solid answers flat. ' +
        'Hollow answers back.',
    },
    'green-lens': {
      name: 'The Green Lens Card',
      desc: 'A rectangle of tin with a square of green glass set into it. ' +
        'The forest lies to you in colour. This takes one of the colours away.',
    },
    'quiet-hinge': {
      name: 'The Quiet Hinge',
      desc: 'A folded strip of leather with a knot of wire through it. It does not silence ' +
        'a hinge. It changes the note into one the room has already heard.',
    },
    'cold-latch': {
      name: 'The Cold Latch',
      desc: 'Two flat magnets bound face to face on a loop of string. ' +
        'Hang it, wait, watch which way it settles, then walk.',
    },
  };

  const BY_ID = MISSIONS.reduce((m, x) => ((m[x.id] = x), m), {});

  // ── Storage ───────────────────────────────────────────────────────────
  //
  // { started, done: [missionId], seed, told: [lineIndex] }
  //   started — the player has been down the stairs
  //   done    — artifacts recovered, in the order recovered
  //   seed    — fixed per save, the source of every randomised step
  //   told    — which of Canon's between-mission lines have been used
  function load() {
    let state;
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
      state = (!raw || typeof raw !== 'object' || Array.isArray(raw))
        ? blank()
        : {
            started: !!raw.started,
            done: Array.isArray(raw.done) ? raw.done.filter((d) => BY_ID[d]) : [],
            seed: typeof raw.seed === 'number' && raw.seed > 0 ? raw.seed : 0,
            told: Array.isArray(raw.told) ? raw.told : [],
          };
    } catch {
      state = blank();
    }

    // The seed is minted ONCE and written down immediately.
    //
    // This is the whole anti-walkthrough mechanic, and getting it wrong is
    // silent: minting a fresh seed on every read looks fine in isolation and
    // makes every save in the world produce the same numbers, because the
    // only thing feeding them would be the mission id. Persist on first
    // sight, then never again.
    if (!state.seed) {
      state.seed = newSeed();
      persist(state);
    }
    return state;
  }

  function blank() {
    return { started: false, done: [], seed: 0, told: [] };
  }

  function newSeed() {
    // crypto where it exists, because Math.random is seeded per page load in
    // some engines and two players opening the game at once should not share
    // a mission. Falls back cleanly; the fallback is still per-save, not
    // per-read, which is the property that actually matters.
    try {
      if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const a = new Uint32Array(1);
        crypto.getRandomValues(a);
        return 1 + (a[0] % 1000000);
      }
    } catch { /* fall through */ }
    return 1 + Math.floor(Math.random() * 1000000);
  }

  // Write only. Kept separate from save() because load() calls it to record a
  // freshly minted seed, and a save() that reached back into load() would
  // recurse.
  function persist(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* private mode: the quest still runs for this session */
    }
  }

  function save(state) {
    persist(state);
    if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
  }

  // ── The randomised step ───────────────────────────────────────────────

  /**
   * A number this save's copy of a mission uses, and another save's does not.
   *
   * Club Penguin's mission 1 asked how many socks were on the line, and the
   * number was different for you than for the friend telling you the answer.
   * That is the whole trick, and it survives walkthroughs, wikis and a friend
   * on the sofa without punishing anybody: you still have to go and look.
   *
   * Deterministic per save, so it never changes underneath a player who put
   * the game down mid-errand and came back a week later.
   */
  function variant(missionId, range) {
    const m = BY_ID[missionId];
    if (!m) return 0;
    const n = Math.max(2, range || 6);
    const s = load().seed;
    // A small integer hash. Not cryptography; just a stable spread so two
    // missions in one save do not land on the same number.
    //
    // The obvious `h * 31 + char` version clumped badly: five short mission
    // ids off one seed produced three identical values, which makes half the
    // missions feel un-randomised even though they are. Mixing the low bits
    // back into the high ones after each round fixes the spread.
    let h = (s ^ 0x9e3779b9) >>> 0;
    for (let i = 0; i < missionId.length; i++) {
      h = (h + missionId.charCodeAt(i)) >>> 0;
      h = (h + (h << 10)) >>> 0;
      h = (h ^ (h >>> 6)) >>> 0;
    }
    h = (h + (h << 3)) >>> 0;
    h = (h ^ (h >>> 11)) >>> 0;
    h = (h + (h << 15)) >>> 0;
    return h % n;
  }

  // ── Progress ──────────────────────────────────────────────────────────

  function start() {
    const state = load();
    if (state.started) return false;
    state.started = true;
    save(state);
    return true;
  }

  function hasStarted() {
    return load().started;
  }

  /** Mark an artifact recovered. Idempotent: bringing it back twice is once. */
  function recover(missionId) {
    if (!BY_ID[missionId]) return false;
    const state = load();
    if (state.done.includes(missionId)) return false;
    state.done.push(missionId);
    save(state);
    return true;
  }

  function recovered() {
    return load().done.slice();
  }

  function isRecovered(missionId) {
    return load().done.includes(missionId);
  }

  /**
   * The mission the player is on, or null when they are done.
   *
   * Strictly in order. The five artifacts are a sequence of revelations about
   * two people and shuffling them would turn a story into a checklist.
   */
  function current() {
    const done = load().done;
    return MISSIONS.find((m) => !done.includes(m.id)) || null;
  }

  function complete() {
    return load().done.length >= MISSIONS.length;
  }

  function progress() {
    return { done: load().done.length, total: MISSIONS.length };
  }

  /** The gadgets earned so far. Mission five deliberately adds none. */
  function gadgets() {
    const done = load().done;
    const out = [];
    for (const m of MISSIONS) {
      // A gadget arrives with its briefing, so you hold it for the mission it
      // belongs to rather than being handed it after you needed it.
      const reached = done.includes(m.id) || (current() && current().id === m.id);
      if (reached && m.gadget && GADGETS[m.gadget]) {
        out.push(Object.assign({ id: m.gadget }, GADGETS[m.gadget]));
      }
    }
    return out;
  }

  /**
   * What the first errand actually buys.
   *
   * The badge used to be an achievement row and nothing else, which is the
   * puffle-hat failure exactly: Club Penguin sold hats for 200 coins, they did
   * nothing, and nobody remembers them. A reward that is only a picture of a
   * reward teaches a player that the next one will be too.
   *
   * So the badge KEEPS THE SPOON. Canon lends you the Sounding Spoon for the
   * first errand; bringing something back is what makes it yours, and from
   * then on it works anywhere on the island rather than only where he sent
   * you. It is small, it is permanent, and it is the difference between being
   * lent a tool and owning one.
   *
   * Returns null before the first artifact is home, so a caller can simply ask.
   */
  function keptGadget() {
    if (!load().done.length) return null;
    const g = GADGETS['sounding-spoon'];
    return g ? Object.assign({ id: 'sounding-spoon', kept: true }, g) : null;
  }

  // ── Canon between errands ─────────────────────────────────────────────
  //
  // Rotated rather than random, and never repeated until the pool is spent,
  // so a player who visits twice in a row does not get the same line and
  // conclude the room is a vending machine.
  function nextLine(pool) {
    if (!Array.isArray(pool) || !pool.length) return '';
    const state = load();
    const unused = pool.map((_, i) => i).filter((i) => !state.told.includes(i));
    const choices = unused.length ? unused : pool.map((_, i) => i);
    if (!unused.length) state.told = [];
    const pick = choices[Math.abs(state.seed + state.told.length) % choices.length];
    state.told.push(pick);
    save(state);
    return pool[pick];
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch { /* nothing to do */ }
  }

  return {
    KEY: KEY,
    MISSIONS: MISSIONS,
    GADGETS: GADGETS,
    byId: (id) => BY_ID[id] || null,
    variant: variant,
    start: start,
    hasStarted: hasStarted,
    recover: recover,
    recovered: recovered,
    isRecovered: isRecovered,
    current: current,
    complete: complete,
    progress: progress,
    gadgets: gadgets,
    keptGadget: keptGadget,
    nextLine: nextLine,
    reset: reset,
  };
});
