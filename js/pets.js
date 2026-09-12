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
//
//  ── What a pet DOES ────────────────────────────────────────────────────
//  The black puffle rode the cart and did nothing, and that is the thing
//  everybody remembers being disappointed by. The green puffle fetched coins
//  and everybody remembers USING it. So every pet here has a verb.
//
//  The verb is never coins. This island already pays in coins (fishing) and
//  in material (solving), and a creature that prints currency devalues the
//  thing you actually earned. Instead each pet performs ITS OWN DEVICE on
//  text you choose:
//
//    croc       shuffles the letters you give it        (anagram)
//    hedgehog   marks a run buried across word ends     (hidden)
//    ram        reads your selection backwards          (reversal)
//    chameleon  slides a seam through an enumeration    (charade)
//    cat        threads one fragment through another    (container)
//
//  Two rules hold all five together:
//
//    * A PET NEVER SUPPLIES AN ANSWER. It does the manual labour a solver
//      does by hand, the shuffling and the reversing and the checking of
//      every seam, and hands back the possibility space. Seeing the options
//      is not being told which one is right.
//    * NO CLUE EVER REQUIRES A PET. The abilities are relief, never a key.
//      A player who never adopts anything can still finish everything.
//
//  ── Graduation ─────────────────────────────────────────────────────────
//  A verb that is identical at hour forty and hour one is the most common
//  way a long game goes flat. So each ability has a second tier, earned by
//  feeding that pet its OWN device cheese enough times. The progression is
//  therefore the pairing quiz played out over weeks: the pet gets better at
//  its device precisely as you get better at recognising its device.
//
//  ── One at a time ──────────────────────────────────────────────────────
//  One pet comes with you. Which one is a real choice, it is visible in the
//  HUD wherever you are, and swapping happens at the cottage, which is what
//  gives the house a reason to exist beyond decoration.
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
  //
  // `ability` is what the pet DOES when it is the one you have with you:
  //   verb    the short label on the button
  //   input   what the ability needs from the player, which decides the UI:
  //             'letters' a bag of letters to push around
  //             'text'    any selection, transformed
  //             'span'    a search across the clue for a buried run
  //             'count'   an enumeration to place a seam in
  //             'pair'    two fragments, one threaded through the other
  //   tier1   what it does from the day you adopt it
  //   tier2   what it does once it has graduated
  //   feeds   correct-cheese feedings that graduate it
  //
  // Every tier2 is MORE LABOUR DONE, never more answer given. The croc still
  // never lands on the answer; it just stops offering you piles that no
  // English word could come from.
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
      ability: {
        verb: 'Shuffle',
        input: 'letters',
        tier1: 'Give the Croc some letters and he throws them down in a new order. Again as often as you like.',
        tier2: 'The Croc has stopped offering piles no word could come from, and keeps likely pairs together.',
        feeds: 5,
      },
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
      ability: {
        verb: 'Sniff',
        input: 'span',
        tier1: 'The Hedgehog walks the clue and stops where something is buried across a word end. She will not say what it spells.',
        tier2: 'She now sniffs backwards as well, so a run hidden in reverse no longer walks past her.',
        feeds: 5,
      },
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
      ability: {
        verb: 'Turn',
        input: 'text',
        tier1: 'Point the Ram at anything and he reads it back to front. He is much better at this than you are.',
        tier2: 'He now turns each word in place as well as the whole line, which is the other thing reversals do.',
        feeds: 5,
      },
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
      ability: {
        verb: 'Split',
        input: 'count',
        tier1: 'The Chameleon puts a seam into a length and slides it, so you can see every way the answer could be two things joined.',
        tier2: 'He will hold two seams now, for the charades built out of three pieces rather than two.',
        feeds: 5,
      },
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
      ability: {
        verb: 'Nest',
        input: 'pair',
        tier1: 'Give the Cat two pieces and she shows you every place the first can sit inside the second.',
        tier2: 'She will now go the other way too, and put the second inside the first without being asked twice.',
        feeds: 5,
      },
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
  // { adopted: {id: {since, fed, lastFed, happy}}, seen: [id], active: id }
  //   adopted — living at the cottage
  //   seen    — offered but not yet taken in, so the offer is not repeated
  //   active  — the one that comes with you. Never more than one.
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { adopted: {}, seen: [], active: '' };
      return {
        adopted: raw.adopted && typeof raw.adopted === 'object' && !Array.isArray(raw.adopted) ? raw.adopted : {},
        seen: Array.isArray(raw.seen) ? raw.seen : [],
        active: typeof raw.active === 'string' ? raw.active : '',
      };
    } catch {
      return { adopted: {}, seen: [], active: '' };
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
    // The first creature you take in comes with you without being asked.
    // Making a player go and pick their only pet is a menu, not a choice.
    if (!state.active) state.active = id;
    save(state);
    return state.adopted[id];
  }

  /**
   * Put a species back on the "not yet met" list.
   *
   * For the player who is offered a creature while holding a one-shot lure and
   * decides to save it for somebody else. Turning an offer down must not cost
   * them the creature forever, or the choice is a trap rather than a choice.
   * Only ever called on a species that was NOT taken home.
   */
  function unsee(id) {
    const state = load();
    if (state.adopted[id]) return false;
    const i = state.seen.indexOf(id);
    if (i === -1) return false;
    state.seen.splice(i, 1);
    save(state);
    return true;
  }

  // Letting a pet go is allowed and reversible: it stays 'seen', so it will
  // not be re-offered as a surprise, but adopt() takes it back any time.
  function release(id) {
    const state = load();
    if (!state.adopted[id]) return false;
    delete state.adopted[id];
    // A released pet must not stay in your pocket. Hand the slot to whoever
    // is still at home, so the HUD never points at a creature that left.
    if (state.active === id) state.active = Object.keys(state.adopted)[0] || '';
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

  // ── Graduation ────────────────────────────────────────────────────────
  //
  // Tier 2 is earned by feeding a pet its OWN device cheese, which means the
  // progression IS the pairing quiz: the pet gets better at its device
  // exactly as fast as you get better at recognising its device. Nothing
  // decays and nothing is lost, so this is a ratchet, never a treadmill.
  function tier(id) {
    const species = BY_ID[id];
    if (!species) return 0;
    const pet = load().adopted[id];
    if (!pet) return 0;
    const need = (species.ability && species.ability.feeds) || 5;
    return (pet.happy || 0) >= need ? 2 : 1;
  }

  /** How far off tier 2 a pet is, for the panel to show without nagging. */
  function graduation(id) {
    const species = BY_ID[id];
    if (!species) return null;
    const pet = load().adopted[id];
    if (!pet) return null;
    const need = (species.ability && species.ability.feeds) || 5;
    const have = Math.min(pet.happy || 0, need);
    return { have: have, need: need, done: have >= need };
  }

  // ── The one that comes with you ───────────────────────────────────────

  function active() {
    const state = load();
    const id = state.active;
    if (!id || !state.adopted[id] || !BY_ID[id]) return null;
    return Object.assign({}, BY_ID[id], state.adopted[id], { tier: tier(id) });
  }

  /** Put a pet in your pocket. Only ever one, and only ever one you own. */
  function setActive(id) {
    const state = load();
    if (id && !state.adopted[id]) return false;
    state.active = id || '';
    save(state);
    return true;
  }

  // ── Abilities ─────────────────────────────────────────────────────────
  //
  // Pure functions on text. They take what the player selected and hand back
  // possibilities. NONE of them consults a clue, an answer, or a dictionary,
  // which is what keeps this side of the line between doing a solver's manual
  // labour and doing their solving.

  function letters(text) {
    return String(text || '').toUpperCase().replace(/[^A-Z]/g, '').split('');
  }

  // Tier 2 croc keeps common English pairs together. This is genuinely how an
  // experienced solver shuffles: you do not push 8 loose letters around, you
  // push TH and ING around. It narrows the pile without naming the word.
  const CLUSTERS = ['ING', 'ION', 'TH', 'CH', 'SH', 'PH', 'WH', 'CK', 'NG', 'QU', 'ST', 'TR'];

  /**
   * Anagram: the letters, in a new order.
   *
   * Deliberately does NOT check the result against any word list. A croc that
   * only ever produced real words would be an answer machine.
   */
  function shuffle(text, opts) {
    const t = (opts && opts.tier) || 1;
    const ls = letters(text);
    if (!ls.length) return { pieces: [], note: '' };

    let pieces = ls.slice();
    if (t >= 2) pieces = groupClusters(ls);

    // Fisher-Yates. A caller may pass its own rand so a test can pin it.
    const rnd = (opts && typeof opts.rand === 'function') ? opts.rand : Math.random;
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const tmp = pieces[i]; pieces[i] = pieces[j]; pieces[j] = tmp;
    }
    return {
      pieces: pieces,
      note: t >= 2 && pieces.some((p) => p.length > 1)
        ? 'He is holding some pairs together.'
        : '',
    };
  }

  // Greedy left-to-right: take the longest cluster that fits. Not clever, and
  // it does not need to be; the point is that TH stops being two loose tiles.
  function groupClusters(ls) {
    const out = [];
    let i = 0;
    while (i < ls.length) {
      let hit = '';
      for (const c of CLUSTERS) {
        if (c.length > hit.length && ls.slice(i, i + c.length).join('') === c) hit = c;
      }
      if (hit) { out.push(hit); i += hit.length; }
      else { out.push(ls[i]); i += 1; }
    }
    return out;
  }

  /**
   * Hidden: runs that straddle a word boundary.
   *
   * A run wholly inside one word is not a hidden answer, it is a substring,
   * so the boundary test is the whole ability. Returns WHERE, never WHAT:
   * the span is marked and the player reads it themselves.
   *
   * One run per starting letter, and a run only as long as an answer plausibly
   * is. Reporting every substring buries the player in near-duplicates, and
   * reporting the longest possible run hands back most of the clue, which is
   * no more useful. Four to eight letters is where hidden answers actually
   * live, so that is the window she works in. The hedgehog says "here", once
   * per place, at a size worth reading.
   *
   * When `answer` is given (its length, never its letters) the window narrows
   * to exactly that, because the enumeration is something the player can
   * already see printed on the clue.
   */
  function sniff(text, opts) {
    const t = (opts && opts.tier) || 1;
    const exact = opts && opts.length ? Math.max(2, parseInt(opts.length, 10) || 0) : 0;
    const min = exact || (opts && opts.min) || 4;
    const max = exact || (opts && opts.max) || 8;
    const src = String(text || '');
    const found = [];

    // Map every letter back to its index in the original string, so a span can
    // be highlighted in the clue exactly as the player sees it.
    const idx = [];
    let flat = '';
    for (let i = 0; i < src.length; i++) {
      if (/[A-Za-z]/.test(src[i])) { flat += src[i].toUpperCase(); idx.push(i); }
    }

    // Where in the letters-only string does a new word begin? A span is only
    // interesting if it crosses one of these.
    const starts = new Set();
    let seen = 0;
    for (let i = 0; i < src.length; i++) {
      if (/[A-Za-z]/.test(src[i])) {
        if (i === 0 || !/[A-Za-z]/.test(src[i - 1])) starts.add(seen);
        seen++;
      }
    }

    for (let a = 0; a + min <= flat.length; a++) {
      // Longest first, and stop at the first hit: that is the maximal run from
      // this letter, and every shorter one is inside it.
      const ceiling = Math.min(flat.length, a + max);
      for (let b = ceiling; b >= a + min; b--) {
        let crosses = false;
        for (let k = a + 1; k < b; k++) if (starts.has(k)) { crosses = true; break; }
        if (!crosses) continue;
        const run = flat.slice(a, b);
        found.push({ from: idx[a], to: idx[b - 1], run: run, reversed: false });
        // Tier 2 reads the same span the other way, which is how a reversed
        // hidden word gets past a solver who only ever reads left to right.
        if (t >= 2) {
          found.push({
            from: idx[a], to: idx[b - 1],
            run: run.split('').reverse().join(''), reversed: true,
          });
        }
        break;
      }
    }
    return {
      spans: found,
      note: found.length
        ? 'Something is buried here. She will not tell you what it says.'
        : 'She stays curled up. Nothing is buried in this one.',
    };
  }

  /** Reversal: the selection, backwards. Tier 2 also turns each word in place. */
  function turn(text, opts) {
    const t = (opts && opts.tier) || 1;
    const src = String(text || '');
    const whole = src.split('').reverse().join('');
    const out = [{ label: 'All of it, backwards', text: whole }];
    if (t >= 2) {
      out.push({
        label: 'Each word, backwards where it stands',
        text: src.replace(/[A-Za-z]+/g, (w) => w.split('').reverse().join('')),
      });
    }
    return { readings: out };
  }

  /**
   * Charade: every place a seam could fall in a length.
   *
   * Takes the enumeration, not the answer, because the player does not have
   * the answer yet. Seeing that (7) could be 3+4 is the thing that unsticks a
   * charade, and it gives nothing away about which.
   */
  function split(count, opts) {
    const t = (opts && opts.tier) || 1;
    const n = Math.max(0, parseInt(count, 10) || 0);
    const seams = [];
    for (let a = 1; a < n; a++) seams.push([a, n - a]);

    // Three-part charades exist but a one-letter piece is almost never one of
    // them: the parts are words or abbreviations, not stray letters. Requiring
    // every piece to be at least two cuts (7) from fifteen arrangements to
    // three, which is a list a person can actually look at.
    const triples = [];
    if (t >= 2) {
      for (let a = 2; a <= n - 4; a++) {
        for (let b = 2; b <= n - a - 2; b++) triples.push([a, b, n - a - b]);
      }
    }
    return { pairs: seams, triples: triples };
  }

  /**
   * Container: every way the inner piece can sit inside the outer one.
   *
   * The combinatorics here are the whole difficulty of the device, and they
   * are exactly the thing a person is bad at holding in their head.
   */
  function nest(inner, outer, opts) {
    const t = (opts && opts.tier) || 1;
    const a = String(inner || '').toUpperCase().replace(/[^A-Z]/g, '');
    const b = String(outer || '').toUpperCase().replace(/[^A-Z]/g, '');
    const ways = [];
    const weave = (x, y, label) => {
      // Split points strictly inside y, so the outer really does wrap.
      for (let i = 1; i < y.length; i++) {
        ways.push({ text: y.slice(0, i) + x + y.slice(i), label: label, at: i });
      }
    };
    if (a && b) weave(a, b, a + ' inside ' + b);
    if (t >= 2 && a && b) weave(b, a, b + ' inside ' + a);
    return { ways: ways };
  }

  /** Run the active pet's ability. One door, so callers need no switch. */
  function use(id, payload) {
    const species = BY_ID[id];
    if (!species || !species.ability) return null;
    const opts = Object.assign({ tier: tier(id) }, payload || {});
    switch (species.ability.input) {
      case 'letters': return { kind: 'letters', result: shuffle(payload && payload.text, opts) };
      case 'span':    return { kind: 'span',    result: sniff(payload && payload.text, opts) };
      case 'text':    return { kind: 'text',    result: turn(payload && payload.text, opts) };
      case 'count':   return { kind: 'count',   result: split(payload && payload.count, opts) };
      case 'pair':    return { kind: 'pair',    result: nest(payload && payload.inner, payload && payload.outer, opts) };
      default: return null;
    }
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
    unsee: unsee,
    feed: feed,
    adopted: adopted,
    isAdopted: isAdopted,
    progress: progress,
    idleLine: idleLine,
    tier: tier,
    graduation: graduation,
    active: active,
    setActive: setActive,
    use: use,
    shuffle: shuffle,
    sniff: sniff,
    turn: turn,
    split: split,
    nest: nest,
    reset: reset,
  };
});
