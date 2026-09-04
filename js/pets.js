// ═══════════════════════════════════
//  PETS: the device, walking around
//
//  The island already teaches devices three ways: the Field Guide explains
//  them, the cheese board names them, and the Menagerie collects the words
//  that signal them. All three are reading. A pet is the same knowledge as a
//  THING THAT BEHAVES: a ram that only ever walks backwards is a reversal you
//  watched happen, and that sticks in a way a paragraph does not.
//
//  ── The shape it borrows ───────────────────────────────────────────────
//  Puffles: caught in the wild, kept at home, light care, and they do
//  something for you rather than just existing. Neopets: species identity and
//  a personality that persists between visits.
//
//  What we take from each, and what we refuse:
//    * caught, not bought      — every pet costs a solve, never coins
//    * they live at home       — the cottage is the reason to go home
//    * feeding is cheap        — one cheese, no timers, no decay
//    * NO neglect mechanic     — a pet must never punish you for not playing.
//                                A hungry-pet guilt loop is the single most
//                                common way this genre goes sour, and it has
//                                no place in a game about enjoying clues.
//
//  ── Caught by solving ──────────────────────────────────────────────────
//  A pet appears only after you solve a clue of ITS device unaided. That is
//  the same rule mastery and the Menagerie use, for the same reason: hinted is
//  exposure, not understanding, and a reward that ignores the difference
//  teaches the player that the difference does not matter.
//
//  ── Feeding is the lesson ──────────────────────────────────────────────
//  Six of the nine cheeses are named after devices. Feed a pet the cheese
//  matching its own device and it is DELIGHTED; feed it any other and it eats
//  politely and is unmoved. The pairing IS the quiz, and it never says wrong.
// ═══════════════════════════════════

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BCWPets = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const KEY = 'bcw_pets';

  // Each pet's `device` is the clue type that catches it and the cheese that
  // delights it. `quirk` is the behaviour that makes the device visible.
  const SPECIES = [
    {
      id: 'croc',
      name: 'Cryptic Croc',
      device: 'anagram',
      cheese: 'Anagram Cheddar',
      colour: '#4ec96a',
      // The mascot, so he is the one you cannot miss: the first anagram any
      // player solves is at the very start of the island.
      starter: true,
      blurb: 'Chews words up and spits them out in a different order. Never the order you expected.',
      quirk: 'Rearranges the letters of anything you name.',
      fed: 'He shuffles the cheese into a different cheese and eats that instead.',
      idle: [
        'The Croc is rearranging the letters on a cereal box.',
        'The Croc has spelled something rude out of alphabet blocks and is very pleased.',
        'The Croc is asleep with a dictionary open on his face.',
      ],
    },
    {
      id: 'hedgehog',
      name: 'Hidden Hedgehog',
      device: 'hidden',
      cheese: 'Hidden Brie',
      colour: '#b98a5a',
      blurb: 'Curls up inside longer words and waits. You will spot the spines eventually.',
      quirk: 'Hides in plain sight. Look for the spines.',
      fed: 'She tucks the cheese somewhere inside the sofa and looks innocent.',
      idle: [
        'The Hedgehog is concealed somewhere in this room. You can hear breathing.',
        'The Hedgehog has hidden inside the word cupboard and thinks nobody noticed.',
        'Two small spines are visible behind the curtain. The rest is not.',
      ],
    },
    {
      id: 'ram',
      name: 'Reversal Ram',
      device: 'reversal',
      cheese: 'Reversal Roquefort',
      colour: '#9aa8c4',
      blurb: 'Walks backwards. Always has. Butts things so they come out the other way round.',
      quirk: 'Reverses whatever he touches.',
      fed: 'He eats it back to front, crumbs first, and somehow this works.',
      idle: [
        'The Ram is walking backwards up the stairs. He has not fallen yet.',
        'The Ram reversed into the room and is now facing the wrong way on purpose.',
        'The Ram butted the clock. It is running backwards. Nobody has fixed it.',
      ],
    },
    {
      id: 'chameleon',
      name: 'Charade Chameleon',
      device: 'charade',
      cheese: 'Charade Stilton',
      colour: '#d4a03a',
      blurb: 'Changes colour one segment at a time, so he is always two things joined front to back.',
      quirk: 'Is visibly made of two smaller things.',
      fed: 'He eats two small pieces and becomes one larger, smugger chameleon.',
      idle: [
        'The Chameleon is half green and half gold and will not say which half is real.',
        'The Chameleon has matched the sofa exactly, front end only.',
        'The Chameleon is two colours today. He was two different colours yesterday.',
      ],
    },
    {
      id: 'nesting-doll',
      name: 'Container Cat',
      device: 'container',
      cheese: 'Container Camembert',
      colour: '#e0954a',
      blurb: 'If a thing has an inside, she is in it. Boxes, baskets, other cats.',
      quirk: 'Puts one thing inside another thing.',
      fed: 'She hollows out the cheese, sits in it, and eats the walls from within.',
      idle: [
        'The Cat is inside a box that is inside a basket.',
        'The Cat has got into the cupboard again. The cupboard was closed.',
        'The Cat is sitting inside something. You are not sure what. It is smaller than her.',
      ],
    },
  ];

  const BY_ID = SPECIES.reduce((m, s) => ((m[s.id] = s), m), {});
  const BY_DEVICE = SPECIES.reduce((m, s) => ((m[s.device] = s), m), {});

  // ── Storage ───────────────────────────────────────────────────────────
  //
  // { adopted: {id: {since, fed, lastFed, happy}}, seen: [id] }
  //   adopted — living at the cottage
  //   seen    — offered but not yet taken in, so the offer is not repeated
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { adopted: {}, seen: [] };
      return {
        adopted: raw.adopted && typeof raw.adopted === 'object' && !Array.isArray(raw.adopted) ? raw.adopted : {},
        seen: Array.isArray(raw.seen) ? raw.seen : [],
      };
    } catch {
      return { adopted: {}, seen: [] };
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* private mode: pets still work for this session */
    }
    if (typeof BCSync !== 'undefined' && BCSync.schedulePush) BCSync.schedulePush('world');
  }

  // ── Catching ──────────────────────────────────────────────────────────

  /**
   * A clue was solved. If it was solved unaided and its device has a pet
   * nobody has met yet, that pet shows up.
   *
   * Returns the species to offer, or null. Deliberately does NOT adopt: being
   * shown a creature and choosing to take it home is the moment worth having,
   * and silently adding it to a list throws that away.
   */
  function onSolve(device, opts) {
    if (!device) return null;
    const unaided = !opts || opts.unaided !== false;
    if (!unaided) return null;

    const species = BY_DEVICE[normalizeDevice(device)];
    if (!species) return null;

    const state = load();
    if (state.adopted[species.id]) return null;
    if (state.seen.includes(species.id)) return null;

    state.seen.push(species.id);
    save(state);
    return species;
  }

  // The three pools spell devices slightly differently (hidden vs hidden_word,
  // container vs insertion). One spelling in, so a pet cannot fail to appear
  // because a pool used a synonym.
  function normalizeDevice(d) {
    const s = String(d).toLowerCase().replace(/[\s_]+/g, '-');
    if (s === 'hidden-word' || s === 'hiddenword') return 'hidden';
    if (s === 'insertion' || s === 'containment') return 'container';
    if (s === 'anagrams') return 'anagram';
    if (s === 'reversals') return 'reversal';
    if (s === 'charades') return 'charade';
    return s;
  }

  function adopt(id) {
    const species = BY_ID[id];
    if (!species) return null;
    const state = load();
    if (state.adopted[id]) return state.adopted[id];
    state.adopted[id] = { since: Date.now(), fed: 0, lastFed: 0, happy: 0 };
    if (!state.seen.includes(id)) state.seen.push(id);
    save(state);
    return state.adopted[id];
  }

  // Letting a pet go is allowed and reversible: it stays 'seen', so it will
  // not be re-offered as a surprise, but adopt() takes it back any time.
  function release(id) {
    const state = load();
    if (!state.adopted[id]) return false;
    delete state.adopted[id];
    save(state);
    return true;
  }

  // ── Feeding ───────────────────────────────────────────────────────────

  /**
   * Feed a pet one cheese.
   *
   * The right cheese for the device delights it. Any other is eaten politely.
   * There is no wrong answer and no penalty: this is a pairing you learn by
   * trying, not a test you fail.
   */
  function feed(id, cheeseName) {
    const species = BY_ID[id];
    const state = load();
    const pet = state.adopted[id];
    if (!species || !pet) return null;

    const match = cheeseName === species.cheese;
    pet.fed = (pet.fed || 0) + 1;
    pet.lastFed = Date.now();
    if (match) pet.happy = (pet.happy || 0) + 1;
    save(state);

    return {
      match: match,
      species: species,
      reaction: match
        ? species.fed
        : species.name + ' eats it, politely. It was not what they were hoping for.',
      // The nudge is the teaching moment, and it names the device rather than
      // the cheese, so the player learns the pairing rather than memorising a
      // shopping list.
      hint: match ? null : species.name + ' likes ' + species.device + ' clues.',
    };
  }

  // ── Reading state ─────────────────────────────────────────────────────

  function adopted() {
    const state = load();
    return Object.keys(state.adopted)
      .filter((id) => BY_ID[id])
      .map((id) => Object.assign({}, BY_ID[id], state.adopted[id]));
  }

  function isAdopted(id) {
    return !!load().adopted[id];
  }

  function progress() {
    const state = load();
    return {
      adopted: Object.keys(state.adopted).filter((id) => BY_ID[id]).length,
      total: SPECIES.length,
    };
  }

  /** One line of ambient life for a pet at home, stable within a day. */
  function idleLine(id, seed) {
    const species = BY_ID[id];
    if (!species) return '';
    const day = seed !== undefined ? seed : Math.floor(Date.now() / 86400000);
    // Offset by species so two pets in one room never say the same-index line.
    const i = Math.abs(day + species.id.length) % species.idle.length;
    return species.idle[i];
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch { /* nothing to do */ }
  }

  return {
    KEY: KEY,
    SPECIES: SPECIES,
    byId: (id) => BY_ID[id] || null,
    byDevice: (d) => BY_DEVICE[normalizeDevice(d)] || null,
    onSolve: onSolve,
    adopt: adopt,
    release: release,
    feed: feed,
    adopted: adopted,
    isAdopted: isAdopted,
    progress: progress,
    idleLine: idleLine,
    reset: reset,
  };
});
