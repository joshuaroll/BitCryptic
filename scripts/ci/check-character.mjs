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
    // Assert on the STAMP, not on a word.
    //
    // This keyed on /helmet/i for a while, which is a comment word rather than
    // a drawn thing. It survived only as long as every scene happened to carry
    // a comment saying "helmet": the moment wreck_return_3 was restaged and
    // its comment rewritten, the check warned about a figure that has a
    // helmet, a faceplate, two legs and two boots, all plainly there in the
    // render. A guard that fires on the correct file is worse than no guard,
    // because it teaches people to scroll past warnings.
    //
    // fred() stamps data-fred-h on the group it returns for exactly this
    // reason: the model reports its own presence and scale, so CI can assert
    // instead of inferring from prose that may or may not be in the string.
    // The actual bug is a HAND WITH NO BODY: gloves entering the frame from
    // the edge attached to nothing. So the test is whether the scene draws a
    // torso for the hand to belong to, either from the model (which stamps
    // itself) or, for the one pose the model has no case for, as its own
    // figure with a helmet-sized circle in it.
    //
    // Keying on the word "helmet" instead was brittle: it passed only while
    // every scene happened to carry a comment containing that word, and
    // warned about a complete figure the moment a comment was rewritten.
    const hasGlove = /glove/i.test(svg);
    const hasModel = /data-(?:fred|player)-h="/.test(svg);
    // a helmet is a large circle at the top of a figure; the model draws one
    // at r = h, and a scene-specific figure must draw one too
    const hasHelmetCircle = /<circle cx="0" cy="\d+" r="(\d+(?:\.\d+)?)"/.test(svg) &&
      Array.from(svg.matchAll(/<circle cx="0" cy="[\d.-]+" r="(\d+(?:\.\d+)?)"/g))
        .some((m) => Number(m[1]) >= 15);
    if (hasGlove && !hasModel && !hasHelmetCircle) {
      warnings.push(
        `${key}: draws a hand but no figure from the model. A gloved hand entering ` +
          'frame with no body attached is the bug this model exists to stop.'
      );
    }
    // A legless figure is NOT checked here, deliberately.
    //
    // I tried twice. Keying on the word "boot" warned about every figure in
    // the file, because the model emits no such comment. Measuring the drop
    // from the helmet to the lowest drawn point warned about wreck_2, the
    // CANONICAL scene, because the first circle in the markup is a lamp glow
    // rather than the helmet and the origin was wrong.
    //
    // A guard that fires on the reference scene is worse than no guard: it
    // teaches whoever runs this to scroll past the warnings, which is how the
    // real ones get missed. The legless case is covered by the two checks that
    // do work (the model is called, and the helmet is not scaled alone) plus
    // the always-present-parts list in FREDWARD_DESIGN_CONTEXT.md.
    //
    // If it is worth catching mechanically later, the way in is to have fred()
    // stamp a data attribute on its root group with the pose and the computed
    // foot position, and assert on that. That is a change to the art code, not
    // to this file, so it is not being done on the way past.
  }

  // ── One scale, asserted rather than inferred ────────────────────────────
  //
  // The second failure, found after the first was fixed: two scenes lost their
  // disembodied hands by inflating the HELMET instead, until his head was
  // wider than the book and the moustache sat at neck height. Same disease as
  // the original drift, pointing the other way, and the spec is explicit that
  // a scene at another distance "changes h and nothing else".
  //
  // This was first written to infer the scale from the largest circle radius,
  // which was wrong twice over: the model composes helmets from computed
  // values rather than literal radii, so most scenes were invisible to it, and
  // the largest circle in a scene is often a lamp glow rather than a head. It
  // passed a mutation that doubled the model's own scale variable.
  //
  // So fred() and player() now stamp data-fred-h and data-player-h on the
  // group they return, and this reads the number instead of guessing it.
  const FRED_REF = 21;      // wreck_2, the canonical mid-shot
  const FRED_MAX = 30;      // wreck_6 is a documented close-up at 27.99
  for (const [key, svg] of Object.entries(store)) {
    if (typeof svg !== 'string') continue;
    for (const m of svg.matchAll(/data-fred-h="([0-9.]+)"/g)) {
      const h = parseFloat(m[1]);
      if (h > FRED_MAX || h < FRED_REF * 0.3) {
        warnings.push(
          `${key}: Fredward drawn at h=${h.toFixed(2)}, against ${FRED_REF} in every ` +
            'mid-shot. A different distance changes h, but a head this far off the ' +
            'reference is usually a prop being matched by the man instead of the ' +
            'other way round.'
        );
      }
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
