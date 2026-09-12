#!/usr/bin/env node
// Render scene art to PNG so you can LOOK at it.
//
// This is the single most useful tool in the visual workflow. Every real
// defect in the 2026-09 revamp was found by rendering and looking, and several
// were made worse by reasoning about the SVG instead. Render before you claim
// anything is fixed.
//
//   node scripts/render-scenes.cjs OUTDIR                 # all 144 scenes
//   node scripts/render-scenes.cjs OUTDIR town_2 lair_9   # just these
//
// Each scene renders in its OWN page. That is not optional: scenes share one
// document at runtime, so two scenes defining the same gradient id will steal
// each other's fill. Rendering them all into one page once flattened town_2's
// sky and sent me looking for a bug in a scene that was fine.
//
// SMIL animation is frozen at t=0 so the same scene always yields the same
// image and two renders can be compared.
//
// Requires playwright, already in devDependencies.
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const { chromium } = require(path.join(ROOT, 'node_modules', 'playwright'));
const fs = require('fs');
const DIR = path.join(ROOT, 'scenes') + path.sep;

// characters.js FIRST: it is a shared kit the scene files call into, so it has
// to be evaluated before anything that uses bcPlace().
const FILES = ['characters.js', 'forest.js', 'adventure.js', 'beach.js',
  'cafe.js', 'cove.js', 'skyship.js', 'docks.js', 'library.js', 'observatory.js',
  'town.js', 'workshop.js', 'lair.js', 'moon.js', 'wreck.js', 'hidden.js'];

async function renderKeys(keys, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const srcs = FILES.map(f => fs.readFileSync(DIR + f, 'utf8'));
  const b = await chromium.launch();
  let ok = 0; const bad = [];

  // one throwaway page just to enumerate what exists
  const probe = await b.newPage();
  await probe.setContent('<body><div id="host"></div></body>');
  await probe.evaluate(() => { window.STORY_SCENES = {}; });
  for (const s of srcs) await probe.addScriptTag({ content: s });
  const all = await probe.evaluate(() => Object.keys(window.STORY_SCENES));
  await probe.close();

  const list = keys && keys.length ? keys : all;
  for (const k of list) {
    const p = await b.newPage({ viewport: { width: 520, height: 280 } });
    await p.setContent('<body style="margin:0;background:#070b16"><div id="host"></div></body>');
    await p.evaluate(() => { window.STORY_SCENES = {}; });
    for (const s of srcs) await p.addScriptTag({ content: s });
    const r = await p.evaluate((key) => {
      const h = document.getElementById('host');
      if (!window.STORY_SCENES[key]) return 'missing';
      try { h.innerHTML = window.STORY_SCENES[key]; } catch (e) { return 'throw: ' + e.message; }
      const svg = h.querySelector('svg');
      if (!svg) return 'no svg';
      try { svg.pauseAnimations(); svg.setCurrentTime(0); } catch (e) {}
      return true;
    }, k);
    if (r !== true) { bad.push(k + ': ' + r); await p.close(); continue; }
    await p.locator('#host svg').screenshot({ path: path.join(outDir, k + '.png') });
    ok++;
    await p.close();
  }
  await b.close();
  return { ok, bad, total: list.length, all };
}

if (require.main === module) {
  const outDir = process.argv[2];
  if (!outDir) {
    console.error('usage: node scripts/render-scenes.cjs OUTDIR [scene_key ...]');
    process.exit(1);
  }
  renderKeys(process.argv.slice(3), outDir).then(r => {
    console.log('rendered ' + r.ok + '/' + r.total + '  scenes available: ' + r.all.length);
    r.bad.forEach(x => console.log('  BAD ' + x));
    if (r.bad.length) process.exit(1);
  });
}
module.exports = { renderKeys, FILES, DIR };
