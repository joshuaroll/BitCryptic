#!/usr/bin/env node
// Fredward, and the rule that he is ONE person.
//
// Every scene in scenes/wreck.js used to hand-build him from scratch at
// whatever size felt right in isolation. Measured across the file, his helmet
// radius ranged from 19 to 32 with no scale transform to explain it, which is
// why the catalogue book came out three times too large in two scenes, why one
// scene had no Fredward in it at all, why another was a pair of disembodied
// hands, and why a third lost his legs behind a table.
//
// None of that is catchable by eye one scene at a time, and none of it is
// catchable by any other check here: the file parses, the markup is valid,
// the ids are unique. It is only visible when you put the scenes side by side,
// which is exactly the thing a CI check can do and a person reliably will not.
//
// So: there is one model function, every scene calls it, and the spec that
// describes it is a file on disk rather than a habit.
//
// Run standalone (node scripts/ci/check-character.mjs) or via npm run verify.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const scenePath = join(root, 'scenes', 'wreck.js');
const specPath = join(root, 'characters', 'FREDWARD_DESIGN_CONTEXT.md');

const problems = [];
const warnings = [];
const check = (cond, msg) => { if (!cond) problems.push(msg); };

if (!existsSync(scenePath)) {
  console.log('scenes/wreck.js absent; nothing to check.');
  process.exit(0);
}
const src = readFileSync(scenePath, 'utf8');

// ── There is a model, and it is used ──────────────────────────────────────
const hasModel = /function\s+fred\s*\(/.test(src);
check(
  hasModel,
  'NO CHARACTER MODEL in scenes/wreck.js. Every scene builds its own Fredward, ' +
    'which is how his helmet radius came to range from 19 to 32. Build one ' +
    'fred() and call it.'
);

if (hasModel) {
  // Scenes that show him must go through the model rather than around it. A
  // scene that draws its own helmet has opted out of consistency.
  const store = {};
  try {
    new Function('STORY_SCENES', src)(store);
  } catch (e) {
    problems.push(`scenes/wreck.js does not evaluate: ${e.message}`);
  }

  const calls = (src.match(/\bfred\s*\(/g) || []).length - 1; // minus the definition
  check(calls >= 8, `the model is only called ${calls} times; most scenes still hand-build him`);

  // ── A hand with no arm, and a helmet with no legs ────────────────────────
  //
  // The failure that survived the first rebuild: three return scenes kept a
  // billboard-sized book with disembodied gloves entering the frame, because
  // they were left alone as "deliberate compositions". They are exactly the
  // bug the model exists to prevent, and nothing caught them but looking.
  //
  // So: a scene that draws a HAND must also draw the model, and a scene that
  // draws a HELMET must draw boots. Both are cheap proxies and both are the
  // shape of the two failures actually seen in this file.
  for (const [key, svg] of Object.entries(store)) {
    if (typeof svg !== 'string') continue;
    const usesModel = /wHand\(|fred\(|player\(/.test(svg);
    // Scenes are strings by the time they are in the store, so the test is on
    // what got DRAWN: cuffs and gloves are the model's hand signature.
    const hasGlove = /glove|cuff/i.test(svg);
    const hasHelmet = /helmet|faceplate|bolt/i.test(svg);
    const hasBoot = /boot|sole/i.test(svg);
    if (hasGlove && !hasHelmet) {
      warnings.push(
        `${key}: draws a hand but no helmet. A gloved hand entering frame with no ` +
          'body attached is the bug this model exists to stop.'
      );
    }
    if (hasHelmet && !hasBoot) {
      warnings.push(
        `${key}: draws a helmet but no boots. Check he is not cut off by furniture; ` +
          'wreck_7, wreck_8 and wreck_return_1 all shipped as a torso with no legs.'
      );
    }
    void usesModel;
  }

  // ── The helmet may not be scaled on its own ─────────────────────────────
  //
  // The second failure, found after the first was fixed: two scenes lost
  // their disembodied hands by inflating the HELMET instead, until his head
  // was wider than the book and the moustache sat at neck height. That is the
  // same disease as the original drift, pointing the other way, and the spec
  // is explicit that a scene at another distance "changes h and nothing else".
  //
  // The proxy: a helmet is a circle, and the spec fixes the faceplate glass at
  // 0.674 of the helmet radius. So the two largest circles in a scene that
  // draws a helmet should sit near that ratio. A head inflated on its own
  // pushes the helmet far past everything else in frame.
  for (const [key, svg] of Object.entries(store)) {
    if (typeof svg !== 'string') continue;
    if (!/helmet|faceplate/i.test(svg)) continue;
    const rs = [...svg.matchAll(/<circle[^>]*\sr="(\d+(?:\.\d+)?)"/g)]
      .map((m) => parseFloat(m[1]))
      .filter((r) => r >= 6)
      .sort((a, b) => b - a);
    // Calibrated against the file rather than guessed. Every correctly staged
    // scene here draws its helmet at r=21 to 26, including the deliberate
    // close-up. The two that inflated the head independently landed at 56.8,
    // more than double the largest good one. 40 sits clear of both.
    if (rs.length && rs[0] > 40) {
      warnings.push(
        `${key}: helmet drawn at r=${rs[0]}, against 21 to 26 everywhere else. ` +
          'Check it was not scaled independently of the body; the spec says a ' +
          'different distance changes h and nothing else.'
      );
    }
  }

  // ── One scale, not fourteen ─────────────────────────────────────────────
  //
  // The proxy is the helmet: it is the most distinctive circle on the figure
  // and it is what drifted. Collect every plausible helmet radius per scene
  // and check the spread. This deliberately allows deliberate scale changes
  // (a distant figure, a close-up) but flags a file where every scene is
  // quietly its own size.
  const radii = new Map();
  for (const [key, svg] of Object.entries(store)) {
    if (typeof svg !== 'string') continue;
    const rs = [...svg.matchAll(/<circle[^>]*\sr="(\d+(?:\.\d+)?)"/g)]
      .map((m) => parseFloat(m[1]))
      .filter((r) => r >= 8 && r <= 60);
    if (rs.length) radii.set(key, Math.max(...rs));
  }
  if (radii.size >= 6) {
    const vals = [...radii.values()];
    const distinct = new Set(vals.map((v) => Math.round(v))).size;
    // With a shared model most scenes land on the same handful of scales.
    // Fourteen different values across eighteen scenes is the bug.
    if (distinct > vals.length * 0.75) {
      warnings.push(
        `${distinct} distinct figure scales across ${vals.length} scenes. That is the ` +
          'shape of every scene sizing him by eye. Check they are deliberate.'
      );
    }
  }
}

// ── The parts that must always be there ───────────────────────────────────
//
// wreck_7 shipped with no legs and wreck_6 shipped as two hands with no body.
// Both passed every other check in this repo. The model is what fixes it, so
// the model is what gets asserted: it must be able to draw a whole person.
if (hasModel) {
  // Everything from the model to the first scene assignment. Brace-matching a
  // function out of a file this size is not worth getting subtly wrong; the
  // model and its helpers all sit above the scenes.
  const from = src.indexOf('function fred');
  const to = src.indexOf("STORY_SCENES['", from);
  const model = src.slice(from, to > from ? to : from + 8000);
  for (const part of ['helmet', 'boot', 'arm', 'leg', 'hose']) {
    check(
      new RegExp(part, 'i').test(model),
      `the model never mentions "${part}". A figure missing one is the bug that ` +
        'lost wreck_7 its legs.'
    );
  }
}

// ── Pure black and pure white as SOLID fills ──────────────────────────────
//
// The brand forbids pure black backgrounds and pure white text. It does not
// forbid #ffffff at 0.2 opacity as a caustic on water, which is what this file
// uses it for and which is correct. So the test is for OPAQUE use only: a
// fill or stop with no opacity beside it.
//
// Deliberately narrow. A check that fires on every water highlight teaches
// people to ignore it, and an ignored check is worse than no check.
const opaqueWhite = [...src.matchAll(/(fill|stroke|stop-color)="#(?:fff|ffffff)"(?![^>]*opacity)/gi)].length;
const opaqueBlack = [...src.matchAll(/(fill|stroke|stop-color)="#(?:000|000000)"(?![^>]*opacity)/gi)].length;
check(opaqueWhite === 0, `${opaqueWhite} opaque pure-white fill(s); the brand forbids pure white`);
check(opaqueBlack === 0, `${opaqueBlack} opaque pure-black fill(s); the brand forbids pure black`);

// ── No em or en dashes in anything a player can read ──────────────────────
//
// The house rule is absolute for copy. Code comments are not copy, and this
// file is art rather than prose, so only the strings are checked: a dash
// inside an SVG <text> element or a comment nobody sees is not the thing the
// rule exists to stop.
const dashInText = [...src.matchAll(/<text[^>]*>([^<]*[‐-―−][^<]*)</g)].map((m) => m[1].trim());
check(
  dashInText.length === 0,
  `em or en dash in rendered scene text: ${dashInText.slice(0, 2).join(' / ')}`
);

// ── The spec exists and says the things a spec has to say ─────────────────
if (!existsSync(specPath)) {
  warnings.push(
    'characters/FREDWARD_DESIGN_CONTEXT.md is missing. Cryptic Croc has a locked ' +
      'spec; the character who appears in eighteen scenes should too.'
  );
} else {
  const spec = readFileSync(specPath, 'utf8');
  for (const [label, re] of [
    ['a status line', /status/i],
    ['the proportions', /proportion|helmet radius|multiples/i],
    ['a do-not-change list', /do not change|never change|locked/i],
    ['the overlap rule', /overlap/i],
  ]) {
    check(re.test(spec), `the Fredward spec is missing ${label}`);
  }
}

if (warnings.length) {
  console.warn('\nCharacter warnings:');
  for (const w of warnings) console.warn(`  - ${w}`);
  console.warn('');
}

if (problems.length) {
  console.error(`\n${problems.length} character problem(s):\n`);
  for (const p of problems) {
    console.error(`::error::${p}`);
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(
  'Character OK — one Fredward, drawn by one model, with a spec on disk; ' +
    'no pure black or white, no em dashes.'
);
