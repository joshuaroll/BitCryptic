#!/usr/bin/env node
// Pets: the rules that must not quietly change.
//
// Not a unit-test suite for its own sake. Each assertion below is a design
// decision that would be invisible if it broke:
//
//   * a hinted solve must never earn a pet   — the Academy's whole rule is that
//     hinted is exposure, not understanding, and a reward that ignores the
//     difference teaches the player the difference does not matter
//   * feeding must never say "wrong"         — brand rule; the pairing is a
//     thing you learn by trying, not a test you fail
//   * device spellings must all normalize    — the three clue pools spell the
//     same device differently, and a pet that fails to appear because a pool
//     said "hidden_word" is a bug nobody would ever report
//
// Run standalone (node scripts/ci/check-pets.mjs) or via npm run verify.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// pets.js is a UMD-ish browser script, so give it a localStorage and take the
// CommonJS branch the same way node would.
const store = {};
globalThis.localStorage = {
  getItem: (k) => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: (k) => { delete store[k]; },
};

const src = readFileSync(join(root, 'js', 'pets.js'), 'utf8');
const mod = { exports: {} };
new Function('module', 'self', src)(mod, globalThis);
const P = mod.exports;

const problems = [];
const check = (cond, msg) => { if (!cond) problems.push(msg); };

// ── The roster ────────────────────────────────────────────────────────────
check(P.SPECIES.length === 5, `expected 5 species, found ${P.SPECIES.length}`);
check(
  !P.SPECIES.some((s) => s.device === 'homophone'),
  'a homophone pet is present; it was explicitly cut'
);
for (const s of P.SPECIES) {
  check(!!s.cheese, `${s.id}: no cheese named`);
  check(!!s.device, `${s.id}: no device`);
  check(Array.isArray(s.idle) && s.idle.length >= 3, `${s.id}: needs at least 3 idle lines`);
  check(/^#[0-9a-f]{6}$/i.test(s.colour), `${s.id}: colour must be a 6-digit hex`);
  // Every pet's cheese must actually be a device cheese, or the pairing that
  // teaches the device is a pairing with a thing that does not exist.
  check(
    new RegExp(s.device, 'i').test(s.cheese),
    `${s.id}: cheese "${s.cheese}" does not name its device "${s.device}"`
  );
}
const ids = P.SPECIES.map((s) => s.id);
check(new Set(ids).size === ids.length, 'duplicate species id');
const devices = P.SPECIES.map((s) => s.device);
check(new Set(devices).size === devices.length, 'two pets share a device');

// ── Catching ──────────────────────────────────────────────────────────────
P.reset();
check(P.onSolve('anagram')?.id === 'croc', 'an anagram solve does not offer the Croc');
check(P.onSolve('anagram') === null, 'the same pet was offered twice');
check(!P.isAdopted('croc'), 'being offered a pet silently adopted it');

P.reset();
check(P.onSolve('reversal', { unaided: false }) === null, 'A HINTED SOLVE EARNED A PET');
check(P.onSolve('reversal') !== null, 'a hinted attempt consumed the offer');

// Every spelling the three pools actually use.
for (const [spelling, want] of [
  ['hidden_word', 'hedgehog'],
  ['hidden-word', 'hedgehog'],
  ['HIDDEN', 'hedgehog'],
  ['insertion', 'nesting-doll'],
  ['containment', 'nesting-doll'],
  ['anagrams', 'croc'],
  ['charades', 'chameleon'],
]) {
  P.reset();
  const got = P.onSolve(spelling);
  check(got?.id === want, `device "${spelling}" should offer ${want}, got ${got?.id ?? 'nothing'}`);
}

P.reset();
check(P.onSolve('homophone') === null, 'homophone offered a pet');
check(P.onSolve(null) === null, 'a null device did not return null');
check(P.onSolve('not-a-device') === null, 'an unknown device offered a pet');

// ── Feeding ───────────────────────────────────────────────────────────────
P.reset();
P.adopt('ram');
const right = P.feed('ram', 'Reversal Roquefort');
check(right?.match === true, 'the matching cheese did not register as a match');
check(right?.hint === null, 'a correct pairing still showed a nudge');

const wrong = P.feed('ram', 'Anagram Cheddar');
check(wrong?.match === false, 'a mismatched cheese registered as a match');
check(/reversal/i.test(wrong?.hint ?? ''), 'the nudge does not name the device');
check(
  !/\b(wrong|incorrect|no,|failed|bad)\b/i.test(wrong?.reaction ?? ''),
  `FEEDING SAID WRONG: "${wrong?.reaction}"`
);
check(P.feed('nope', 'x') === null, 'feeding an unknown pet returned something');

// ── Letting one go ────────────────────────────────────────────────────────
check(P.release('ram') === true, 'release failed');
check(!P.isAdopted('ram'), 'released pet is still at home');
check(P.onSolve('reversal') === null, 'a released pet was re-offered as a surprise');
check(P.adopt('ram') !== null, 'a released pet could not be taken back');

// ── Robustness ────────────────────────────────────────────────────────────
localStorage.setItem(P.KEY, '{{{ not json');
check(P.progress().adopted === 0, 'corrupt state was not survived');
localStorage.setItem(P.KEY, '["an array, not an object"]');
check(P.progress().adopted === 0, 'wrong-shaped state was not survived');
P.reset();
check(P.idleLine('croc', 5) === P.idleLine('croc', 5), 'idle line is not stable within a day');
check(P.idleLine('nope', 0) === '', 'an unknown pet returned an idle line');

if (problems.length) {
  console.error(`\n${problems.length} pet problem(s):\n`);
  for (const p of problems) {
    console.error(`::error::${p}`);
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(
  `Pets OK — ${P.SPECIES.length} species, each paired to its own device cheese; ` +
    'hinted solves earn nothing, feeding never says wrong, every pool spelling resolves.'
);
