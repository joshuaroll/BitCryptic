#!/usr/bin/env node
// Canon's questline: the rules that must not quietly change.
//
// Each assertion below is a design decision that would be invisible if it
// broke. Two of them are lessons from other games, paid for by their players:
//
//   * ONE STEP PER MISSION IS RANDOMISED, AND PER SAVE.
//     Club Penguin randomised the sock count, the vault combination and the
//     telescope path. The failure mode is silent and total: mint the seed on
//     every read instead of once, and every save in the world gets identical
//     missions while every test still passes. That exact bug was written and
//     caught here, which is why this file exists.
//
//   * NOTHING EVER EXPIRES.
//     52% of Professor Layton's puzzles no longer exist, because they were
//     download-only and the servers closed. Every completion state here is
//     computed from the save in front of you. There must be no clock, no
//     window, and no date after which a player cannot finish this.
//
//   * THE LAST MISSION HAS NO GADGET.
//     The difficulty spike is the point. A well-meaning "fix" that gives
//     mission five a tool would remove the one beat where the island's whole
//     argument gets stated as a mechanic.
//
// Run standalone (node scripts/ci/check-quest.mjs) or via npm run verify.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = readFileSync(join(root, 'js', 'quest.js'), 'utf8');

// Each instance gets its OWN localStorage, passed in by scope rather than set
// on the global. A shared global here silently makes every "different save"
// the same save, which is precisely the bug this file is guarding against, and
// it would make the seed test pass while the game was broken.
function newSave() {
  const store = {};
  const localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };
  const mod = { exports: {} };
  new Function('module', 'self', 'localStorage', 'crypto', src)(
    mod, {}, localStorage, globalThis.crypto
  );
  return { Q: mod.exports, store, localStorage };
}

const problems = [];
const check = (cond, msg) => { if (!cond) problems.push(msg); };

const { Q } = newSave();

// ── The five ──────────────────────────────────────────────────────────────
check(Q.MISSIONS.length === 5, `expected 5 missions, found ${Q.MISSIONS.length}`);
const ids = Q.MISSIONS.map((m) => m.id);
check(new Set(ids).size === ids.length, 'duplicate mission id');
Q.MISSIONS.forEach((m, i) => {
  check(m.n === i + 1, `${m.id}: numbered ${m.n} but sits at position ${i + 1}`);
  check(!!m.location, `${m.id}: no location`);
  check(!!m.device, `${m.id}: no device`);
  check(!!m.artifact, `${m.id}: no artifact`);
  check(!!m.brief, `${m.id}: no briefing`);
});

// The last one is unequipped, on purpose.
const last = Q.MISSIONS[Q.MISSIONS.length - 1];
check(last.gadget === null,
  'THE LAST MISSION HAS A GADGET: the empty drawer is the difficulty spike');
check(
  Q.MISSIONS.slice(0, -1).every((m) => m.gadget && Q.GADGETS[m.gadget]),
  'a mission names a gadget that does not exist'
);

// ── The randomised step ───────────────────────────────────────────────────
// Two saves must not run the same mission, and one save must not change its
// mind between visits.
const a = newSave(), b = newSave();
const va = a.Q.MISSIONS.map((m) => a.Q.variant(m.id, 8));
const vb = b.Q.MISSIONS.map((m) => b.Q.variant(m.id, 8));
check(va.join() !== vb.join(),
  'TWO SAVES GOT IDENTICAL MISSIONS: the seed is not per-save, so a walkthrough works for everyone');
check(
  a.Q.MISSIONS.every((m) => a.Q.variant(m.id, 8) === a.Q.variant(m.id, 8)),
  'a mission changed its number between reads; a player who put the game down would come back to a different puzzle'
);
check(va.every((v) => Number.isInteger(v) && v >= 0 && v < 8), 'a variant fell outside its range');
// The seed is written down the first time it is needed, and never again.
//
// Checked explicitly rather than left to the tests above, because the failure
// is so quiet. A seed minted on every read and never persisted still produces
// a stable-looking number within one call, and every other assertion here
// passes; the game just hands identical missions to the whole world.
const stored = a.store['bcw_quest'];
check(typeof stored === 'string' && stored.length > 0,
  'THE SEED WAS NEVER WRITTEN DOWN: it must be minted once and persisted, not re-rolled on every read');
if (typeof stored === 'string' && stored.length) {
  const seedOnce = JSON.parse(stored).seed;
  check(typeof seedOnce === 'number' && seedOnce > 0, 'the persisted seed is not a usable number');
  a.Q.variant('rope', 8); a.Q.current(); a.Q.progress();
  check(JSON.parse(a.store['bcw_quest']).seed === seedOnce, 'the seed was re-minted after being written');
}

// Statistical sanity: five short ids off one seed must not clump. An earlier
// hash gave three identical values out of five, which makes most of the
// missions feel un-randomised even though technically they are.
let clumped = 0;
const TRIALS = 400;
for (let i = 0; i < TRIALS; i++) {
  const s = newSave();
  if (new Set(s.Q.MISSIONS.map((m) => s.Q.variant(m.id, 8))).size <= 2) clumped++;
}
check(clumped / TRIALS < 0.12,
  `missions clump in ${((clumped / TRIALS) * 100).toFixed(1)}% of saves; the hash is not spreading`);

// ── Order and progress ────────────────────────────────────────────────────
const c = newSave().Q;
check(c.current().id === ids[0], 'the first errand is not first');
check(c.recover(ids[0]) === true, 'recovering an artifact failed');
check(c.recover(ids[0]) === false, 'the same artifact was recovered twice');
check(c.recover('not-a-mission') === false, 'an unknown mission was accepted');
check(c.current().id === ids[1], 'the questline did not advance');
check(c.progress().done === 1, 'progress miscounted');

// Gadgets arrive WITH the briefing, so you hold the tool for the errand it
// belongs to rather than being handed it afterwards.
check(c.gadgets().length === 2, `expected 2 gadgets after 1 errand, found ${c.gadgets().length}`);
ids.slice(1, 4).forEach((id) => c.recover(id));
check(c.current().id === ids[4], 'the last errand is not last');
check(c.gadgets().length === 4,
  `the final errand changed the gadget count to ${c.gadgets().length}; it must add none`);
c.recover(ids[4]);
check(c.complete() === true, 'the questline never completes');
check(c.current() === null, 'there is still an errand after the last one');
check(c.gadgets().length === 4, 'completing the quest added a gadget');

// ── Nothing expires ───────────────────────────────────────────────────────
// Completion must be a pure function of the save. If a date or a clock ever
// enters this file, a player can be locked out of finishing, which is the
// single worst thing this genre does to people.
check(
  !/Date\.now\(\)|new Date|getTime\(\)|setTimeout|expire|deadline/i.test(
    src.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')
  ),
  'A CLOCK ENTERED THE QUESTLINE: completion must never depend on when a player plays'
);

// ── Canon's lines rotate ──────────────────────────────────────────────────
const d = newSave().Q;
const pool = ['a', 'b', 'c', 'd', 'e', 'f'];
const drawn = [];
for (let i = 0; i < pool.length; i++) drawn.push(d.nextLine(pool));
check(new Set(drawn).size === pool.length,
  'Canon repeated himself before running out of things to say');
check(d.nextLine([]) === '', 'an empty line pool did not return empty');
check(d.nextLine(null) === '', 'a missing line pool threw instead of returning empty');

// ── Robustness ────────────────────────────────────────────────────────────
const e = newSave();
e.localStorage.setItem(e.Q.KEY, '{{{ not json');
check(e.Q.progress().done === 0, 'corrupt state was not survived');
e.localStorage.setItem(e.Q.KEY, '["an array, not an object"]');
check(e.Q.progress().done === 0, 'wrong-shaped state was not survived');
e.localStorage.setItem(e.Q.KEY, JSON.stringify({ done: [ids[0], 'ghost', ids[1]] }));
check(e.Q.recovered().length === 2, 'an unknown mission id survived a load');

if (problems.length) {
  console.error(`\n${problems.length} quest problem(s):\n`);
  for (const p of problems) {
    console.error(`::error::${p}`);
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(
  `Quest OK — ${Q.MISSIONS.length} errands, the last one unequipped; ` +
    'missions differ per save and never change under a player; nothing expires.'
);
