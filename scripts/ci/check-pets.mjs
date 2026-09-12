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

// ── One in your pocket ────────────────────────────────────────────────────
// The active pet is what the HUD points at, so a stale or impossible value
// there is a badge naming a creature the player does not have.
P.reset();
check(P.active() === null, 'something was active with no pets adopted');
P.adopt('croc');
check(P.active()?.id === 'croc', 'the first pet adopted did not come with you');
P.adopt('ram');
check(P.active()?.id === 'croc', 'adopting a second pet stole the active slot');
check(P.setActive('hedgehog') === false, 'an unowned pet could be made active');
check(P.active()?.id === 'croc', 'a rejected setActive still changed the active pet');
check(P.setActive('ram') === true, 'setActive refused an owned pet');
P.release('ram');
check(P.active()?.id === 'croc', 'releasing the active pet left the HUD pointing at it');
P.release('croc');
check(P.active() === null, 'releasing the last pet left something active');

// ── Abilities ─────────────────────────────────────────────────────────────
// The line these must never cross: a pet does a solver's MANUAL LABOUR and
// hands back possibilities. It never picks one, and it never consults a word
// list, because a pet that returned only real words would be an answer
// machine and the solve would stop being the player's.
for (const s of P.SPECIES) {
  check(!!s.ability, `${s.id}: no ability`);
  check(!!s.ability?.verb, `${s.id}: ability has no verb`);
  check(!!s.ability?.tier1 && !!s.ability?.tier2, `${s.id}: ability is missing a tier`);
  check(
    ['letters', 'span', 'text', 'count', 'pair'].includes(s.ability?.input),
    `${s.id}: unknown ability input "${s.ability?.input}"`
  );
}

// The croc must NOT filter to real words. Given letters that spell one word,
// he still has to be capable of handing back an arrangement that is not it.
const arrangements = new Set();
for (let i = 0; i < 200; i++) arrangements.add(P.shuffle('dine').pieces.join(''));
check(arrangements.size > 1, 'THE CROC IS AN ANAGRAM SOLVER: he only ever returns one arrangement');
check(
  [...arrangements].some((a) => !['DINE', 'NIDE'].includes(a)),
  'the croc only returns dictionary words; he must return the possibility space'
);
check(P.shuffle('dine').pieces.join('').split('').sort().join('') === 'DEIN',
  'the croc lost or invented a letter');

// The hedgehog reports WHERE, never WHAT is meant. A run wholly inside one
// word is a substring, not a hidden answer, and reporting it would teach the
// device wrong.
check(P.sniff('extraordinary').spans.length === 0,
  'THE HEDGEHOG FLAGGED A RUN INSIDE ONE WORD: that is a substring, not a hidden answer');
const spain = P.sniff('gasp aintree horses', { length: 5 });
check(spain.spans.some((s) => s.run === 'SPAIN'), 'the hedgehog missed a real hidden word');
check(spain.spans.length > 1,
  'THE HEDGEHOG NAMED THE ANSWER: she must offer the candidates, not pick one');
check(/curled up/i.test(P.sniff('cat').note), 'a clue with nothing buried gave no clear answer');

// The ram and the cat are exact operations, so they are checked for being right.
check(P.turn('stop').readings[0].text === 'pots', 'the ram cannot reverse');
check(P.turn('stop', { tier: 1 }).readings.length === 1, 'tier 1 ram had a tier 2 reading');
check(P.turn('stop', { tier: 2 }).readings.length === 2, 'the ram never graduated');
const nested = P.nest('at', 'home', { tier: 1 }).ways.map((w) => w.text);
check(nested.join(' ') === 'HATOME HOATME HOMATE', `the cat nested wrong: ${nested.join(' ')}`);
check(P.nest('at', 'home', { tier: 2 }).ways.length > nested.length, 'the cat never graduated');
// Every seam of (7), and no seam that leaves a piece of nothing.
check(P.split(7).pairs.length === 6, 'the chameleon miscounted the seams in (7)');
check(P.split(7).pairs.every(([a, b]) => a > 0 && b > 0 && a + b === 7),
  'the chameleon produced a seam that does not add up');

// ── Graduation ────────────────────────────────────────────────────────────
// Tier 2 is earned by the PAIRING, which is the lesson. Feeding a pet a pile
// of the wrong cheese must never graduate it, or the teaching is decorative.
P.reset();
P.adopt('chameleon');
check(P.tier('chameleon') === 1, 'a new pet did not start at tier 1');
for (let i = 0; i < 40; i++) P.feed('chameleon', 'Anagram Cheddar');
check(P.tier('chameleon') === 1, 'THE WRONG CHEESE GRADUATED A PET: the pairing is the lesson');
const need = P.SPECIES.find((s) => s.id === 'chameleon').ability.feeds;
for (let i = 0; i < need; i++) P.feed('chameleon', 'Charade Stilton');
check(P.tier('chameleon') === 2, 'the right cheese never graduated the pet');
check(P.graduation('chameleon')?.done === true, 'graduation did not report as done');
// A ratchet, never a treadmill: nothing decays it back down.
for (let i = 0; i < 10; i++) P.feed('chameleon', 'Anagram Cheddar');
check(P.tier('chameleon') === 2, 'A PET WAS DEMOTED: graduation must be a ratchet');

// ── Robustness ────────────────────────────────────────────────────────────
P.reset();
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
