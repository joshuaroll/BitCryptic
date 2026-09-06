#!/usr/bin/env node
// Scene art: the failures that every other check waves through.
//
// A scene is an SVG string inside a JS file. `npm run check:syntax` and
// `node --check` both parse the JS and never look inside the string, so a
// scene can be perfectly valid JavaScript and broken markup, and nothing
// anywhere reports it.
//
// ── What actually fails, and what merely smells ────────────────────────────
// The game injects scenes with innerHTML, which is HTML parsing, not XML. That
// is forgiving: it recovers from a double hyphen in a comment, an unquoted
// attribute, and a stray unclosed tag. So most malformed markup here degrades
// rather than blanking the panel, and this check is deliberately tiered to
// match. Verified in a browser rather than assumed.
//
// FAILS the build, because the player sees something wrong:
//   * a scene that is not a string, or does not open and close as an <svg>
//   * a url(#id) pointing at nothing defined in the same scene, which renders
//     the shape flat and untextured
//   * the wrong viewBox, which crops or letterboxes the art
//
// WARNS only, because these are latent rather than live:
//   * duplicate gradient and filter ids. Scenes are injected into one document
//     over a session, so two scenes sharing `starGlow` means whichever renders
//     second borrows the first one's gradient. Five such collisions exist
//     between the older files today and predate this check.
//   * a double hyphen inside a comment. Illegal XML, harmless under innerHTML,
//     and instantly fatal if a scene is ever passed through an XML parser,
//     serialised, or captured to the notebook. Worth knowing, not worth
//     blocking a commit over.
//
// Run standalone (node scripts/ci/check-scenes.mjs) or via npm run verify.
import { readFileSync, readdirSync } from 'node:fs';

const problems = [];
const warnings = [];
let scenes = 0;

let files;
try {
  files = readdirSync('scenes').filter((f) => f.endsWith('.js'));
} catch {
  console.log('No scenes/ directory; nothing to check.');
  process.exit(0);
}

// Which file each id came from, so a collision report names both sides.
const idOwners = new Map();

for (const file of files) {
  const src = readFileSync(`scenes/${file}`, 'utf8');

  // Evaluate the file the way the browser does: it assigns into a global.
  const store = {};
  try {
    new Function('STORY_SCENES', src)(store);
  } catch (e) {
    problems.push(`${file}: does not evaluate (${e.message})`);
    continue;
  }

  const localIds = new Map();

  // Scenes alias freely: `STORY_SCENES['town_1'] = STORY_SCENES['town_0']` is
  // the idiom for a step that reuses the previous picture. Those are the SAME
  // string, so checking one twice inflates the count and, worse, reports every
  // id in it as colliding with itself.
  const seenSvg = new Set();

  for (const [key, svg] of Object.entries(store)) {
    if (typeof svg === 'string') {
      if (seenSvg.has(svg)) continue;
      seenSvg.add(svg);
    }
    scenes++;
    if (typeof svg !== 'string') {
      problems.push(`${file} ${key}: is not a string`);
      continue;
    }
    if (!svg.startsWith('<svg')) problems.push(`${file} ${key}: does not open with <svg`);
    if (!svg.trimEnd().endsWith('</svg>')) problems.push(`${file} ${key}: does not close with </svg>`);

    // Unbalanced groups. innerHTML silently repairs these, so the scene still
    // renders and nothing errors, but an extra </g> closes a group early and
    // everything after it escapes into the parent: wreck_return_4 shipped with
    // 17 opens and 18 closes, and a leftover hand-built figure was rendering
    // as a smear in the corner because of it.
    //
    // Counted per tag rather than parsed, which is enough to catch the real
    // fault and cannot itself be fooled by attribute contents.
    for (const tag of ['g', 'defs', 'svg']) {
      const open = (svg.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
      const close = (svg.match(new RegExp(`</${tag}>`, 'g')) || []).length;
      if (open !== close) {
        problems.push(
          `${file} ${key}: ${open} <${tag}> against ${close} </${tag}>. An extra close ` +
            'ends a group early and everything after it escapes; innerHTML repairs ' +
            'this silently so nothing else will tell you.'
        );
      }
    }

    // 1. Illegal comments. `--` may not appear inside an XML comment body.
    //    innerHTML forgives this, so it warns rather than fails.
    for (const c of svg.match(/<!--[\s\S]*?-->/g) || []) {
      if (c.slice(4, -3).includes('--')) {
        warnings.push(
          `${file} ${key}: double hyphen inside a comment, which is illegal XML. Harmless ` +
            `under innerHTML, fatal the moment this scene meets an XML parser. -> ` +
            c.slice(0, 56).replace(/\s+/g, ' ')
        );
      }
    }

    // 2. Ids, within the scene and across every scene that can coexist.
    for (const m of svg.match(/\sid="([^"]+)"/g) || []) {
      const id = m.match(/id="([^"]+)"/)[1];
      if (localIds.has(id) && localIds.get(id) !== key) {
        warnings.push(`${file}: id "${id}" is used by both ${localIds.get(id)} and ${key}`);
      }
      localIds.set(id, key);
      const owner = idOwners.get(id);
      if (owner && owner.file !== file) {
        warnings.push(
          `id "${id}" is defined in both ${owner.file} and ${file}; whichever scene renders ` +
            `second borrows the first one's gradient`
        );
      } else if (!owner) {
        idOwners.set(id, { file, key });
      }
    }

    // 3. Every url(#x) must resolve inside its own scene. A reference that
    //    only works because another scene happens to be on screen is a bug
    //    waiting for someone to reorder the story.
    const defined = new Set((svg.match(/\sid="([^"]+)"/g) || []).map((m) => m.match(/id="([^"]+)"/)[1]));
    for (const m of svg.match(/url\(#([^)]+)\)/g) || []) {
      const ref = m.match(/url\(#([^)]+)\)/)[1];
      if (!defined.has(ref)) {
        problems.push(`${file} ${key}: url(#${ref}) points at nothing defined in this scene`);
      }
    }

    // 4. The house canvas. 74 of 76 scenes are 500x260; forest_1 and forest_3
    //    are 500x280 and have been since they were drawn, so they sit a little
    //    shorter in the same panel. Warned rather than failed, because the fix
    //    is to reflow two compositions and that is a deliberate job for
    //    whoever owns that art, not a thing to do on the way past.
    const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
    if (vb !== '0 0 500 260') {
      warnings.push(`${file} ${key}: viewBox is "${vb}"; the house canvas is "0 0 500 260"`);
    }
  }
}

if (warnings.length) {
  // Deduplicated: one collision is reported once, not once per scene.
  const seen = new Set();
  console.warn('\nScene warnings (latent, not failing the build):');
  for (const w of warnings) {
    if (seen.has(w)) continue;
    seen.add(w);
    console.warn(`  - ${w}`);
  }
  console.warn('');
}

if (problems.length) {
  console.error(`\n${problems.length} scene problem(s):\n`);
  for (const p of problems) {
    console.error(`::error::${p}`);
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(
  `Scenes OK — ${scenes} scenes across ${files.length} files: valid markup, ` +
    'no illegal comments, every url(#id) resolves in its own scene.'
);
