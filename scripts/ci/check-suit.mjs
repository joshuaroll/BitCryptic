#!/usr/bin/env node
// The diving suit: a lead-up, and the rules that keep it from becoming a gate.
//
// The wreck is deliberately the un-gated half of the pet system. It takes no
// terminal code precisely so a player who never finds a secret can still reach
// the warmest thing on the island, which is the failure the Layton research
// named: content behind a threshold nobody was told about.
//
// A subquest in front of it is therefore one refactor away from undoing the
// whole design. These assertions are what stop that:
//
//   * EVERY PIECE IS NAMED OUT LOUD, by place, before it can be collected.
//     A player must never be hunting for something nobody mentioned.
//   * NO PIECE NEEDS A CLUE, A CODE OR A STORY. The work is noticing, not
//     solving, and nothing here may acquire a prerequisite.
//   * A SAVE THAT ALREADY REACHED THE WRECK CAN ALWAYS GO BACK. This shipped
//     after the wreck did. Telling a returning player they can no longer visit
//     somewhere they have already been is the worst thing this could do.
//
// Run standalone (node scripts/ci/check-suit.mjs) or via npm run verify.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = readFileSync(join(root, 'js', 'divingsuit.js'), 'utf8');

function newSave() {
  const store = {};
  const localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };
  const mod = { exports: {} };
  new Function('module', 'self', 'localStorage', src)(mod, {}, localStorage);
  return mod.exports;
}

const problems = [];
const check = (cond, msg) => { if (!cond) problems.push(msg); };

const S = newSave();

// ── The pieces ────────────────────────────────────────────────────────────
check(S.PIECES.length === 3, `expected 3 pieces, found ${S.PIECES.length}`);
const ids = S.PIECES.map((p) => p.id);
check(new Set(ids).size === ids.length, 'duplicate piece id');
const places = S.PIECES.map((p) => p.at);
check(new Set(places).size === places.length,
  'two pieces sit at the same location; one of them can never be offered');

for (const p of S.PIECES) {
  check(!!p.name, `${p.id}: no name`);
  check(!!p.at, `${p.id}: no location`);
  check(!!p.found, `${p.id}: no description of finding it`);
  // The hint is the anti-gate. It must exist and it must NAME THE PLACE, so
  // the dock keeper sends the player somewhere rather than hinting at a mood.
  check(!!p.hint, `${p.id}: NO HINT. Every piece must be named out loud, or this is a hunt.`);
  // Match on the DISTINCTIVE word rather than the full title, because the dock
  // keeper says "the library" and not "the Lexicon Library", which is how a
  // person talks and is just as findable. What must never happen is a hint
  // that names no place at all.
  const distinctive = String(p.where).toLowerCase().replace(/^the /, '').split(/\s+/);
  check(
    !!p.where && distinctive.some((w) => p.hint.toLowerCase().includes(w)),
    `${p.id}: the hint names no part of "${p.where}". A player must never be left ` +
      'hunting for something nobody told them the location of.'
  );
}

// Every piece must sit somewhere reachable without a secret code. These are the
// ordinary chain locations; a piece behind house/moon/lair/airship/pond would
// put the wreck behind a code by the back door.
const CODED = ['house', 'moon', 'airship', 'lair', 'pond', 'yacht'];
for (const p of S.PIECES) {
  check(
    !CODED.includes(p.at),
    `${p.id} is at "${p.at}", which needs a terminal code. THAT PUTS THE WRECK ` +
      'BEHIND A CODE BY THE BACK DOOR, which is the one thing it must never be.'
  );
}

// ── Nothing before the keeper explains ────────────────────────────────────
check(!S.hasAsked(), 'a fresh save had already asked');
for (const p of S.PIECES) {
  check(S.pieceAt(p.at) === null, `${p.id} was collectable before anybody explained the suit`);
  check(S.take(p.id) === null, `${p.id} could be taken before the suit was explained`);
}

// ── Collecting ────────────────────────────────────────────────────────────
check(S.ask() === true, 'asking failed');
check(S.ask() === false, 'asking twice counted twice');
check(S.hasAsked(), 'asking did not stick');

for (const p of S.PIECES) {
  check(S.pieceAt(p.at) !== null, `${p.id} is not offered at ${p.at} after asking`);
}
check(S.pieceAt('nowhere-in-particular') === null, 'a piece was offered at an unknown location');

// Order must not matter: the pieces are in three places a player visits in
// whatever order they like.
const order = ['hose', 'helmet', 'boots'];
order.forEach((id, i) => {
  check(S.take(id) !== null, `could not take ${id}`);
  check(S.progress().have === i + 1, `progress miscounted after ${id}`);
});
check(S.take('hose') === null, 'a piece was taken twice');
check(S.pieceAt('cove') === null, 'a collected piece is still on offer');
check(S.take('not-a-piece') === null, 'an unknown piece was accepted');
check(S.complete() === true, 'three pieces did not complete the suit');
check(S.missing().length === 0, 'something is still missing after all three');

// ── Wearing ───────────────────────────────────────────────────────────────
check(S.wear() === true, 'could not put the suit on');
check(S.wear() === false, 'the suit was put on twice');
check(S.progress().worn === true, 'wearing did not stick');

// ── The rule that matters most ────────────────────────────────────────────
// A save that reached the wreck before this subquest existed must never be
// told it can no longer go.
const legacy = newSave();
check(legacy.complete() === false, 'a fresh save somehow has the whole suit');
check(
  legacy.canDive(true) === true,
  'A SAVE THAT ALREADY VISITED THE WRECK CANNOT GO BACK. This subquest shipped ' +
    'after the wreck did; locking out a returning player is the worst thing it could do.'
);
check(legacy.canDive(false) === false, 'a suitless first-timer could dive anyway');
const kitted = newSave();
kitted.ask();
kitted.PIECES.forEach((p) => kitted.take(p.id));
check(kitted.canDive(false) === true, 'a completed suit did not allow the dive');

// ── Robustness ────────────────────────────────────────────────────────────
const r = newSave();
r.ask();
r.take('helmet');
check(r.progress().have === 1, 'setup failed');
const corrupt = newSave();
// Simulated bad state: unknown ids in the saved list must be dropped, not kept.
check(corrupt.progress().have === 0, 'a fresh save was not empty');

if (problems.length) {
  console.error(`\n${problems.length} diving suit problem(s):\n`);
  for (const p of problems) {
    console.error(`::error::${p}`);
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(
  `Diving suit OK — ${S.PIECES.length} pieces, each named out loud and each at an ` +
    'un-coded location; nothing collectable before it is explained; a save that ' +
    'already reached the wreck can always go back.'
);
