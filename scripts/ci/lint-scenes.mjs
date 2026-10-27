// Run the scene-art lint (tools/scene-studio/lint.js, the same module Scene Studio uses)
// over every scene in shipped load order. Errors fail the build; warnings are the craft
// backlog from the 171-defect audit and are reported, not enforced.
//   node scripts/ci/lint-scenes.mjs [--all]   (--all lists every warning)
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const { lintSource, badFonts } = require('../../tools/scene-studio/lint.js');
const html = readFileSync('index.html', 'utf8');
const ctx = vm.createContext({ STORY_SCENES: {} });
const all = process.argv.includes('--all'), tally = {}, errors = [];
for (const [, f] of html.matchAll(/<script src="(scenes\/[^"]+)"/g)) {
  const src = readFileSync(f, 'utf8');
  vm.runInContext(src, ctx, { filename: f });
  // In-art font rule on the raw file too, so helpers and string fragments are held to it
  // even before (or without) ending up in a scene. The per-scene pass below repeats it.
  for (const b of badFonts(src)) { tally.error = (tally.error || 0) + 1; errors.push(`${f}:${src.slice(0, b.at).split('\n').length}: in-art-font: ${b.message}`); }
}
// Palette per scene for the off-palette info rule: the biome named by the scene
// key prefix (all biomes when it has none), plus every approved-cast colour so
// characters never count as off-palette.
const castColours = new Set();
for (const roster of [ctx.BC_APPROVED_CAST, ctx.BC_MISSION_CAST]) for (const c of Object.values(roster || {}))
  for (const pose of Object.values(c.poses || {})) for (const m of String(pose).matchAll(/#[0-9a-fA-F]{6}/g)) castColours.add(m[0].toLowerCase());
const art = ctx.bcArt, palettes = {};
const paletteFor = (key) => {
  const b = art && art.BIOMES.includes(key.split('_')[0]) ? key.split('_')[0] : '';
  if (!art) return { biome: b };
  if (!palettes[b]) palettes[b] = [...new Set([...art.allColours(b || undefined), ...castColours])];
  return { biome: b || 'kit', palette: palettes[b] };
};
let n = 0;
for (const [key, svg] of Object.entries(ctx.STORY_SCENES)) {
  if (typeof svg !== 'string') continue; n++;
  for (const r of lintSource(svg, paletteFor(key))) {
    tally[r.severity] = (tally[r.severity] || 0) + 1;
    if (r.severity === 'error') errors.push(`${key}: ${r.rule}: ${r.message}`);
    else if (all) console.log(`${r.severity.padEnd(5)} ${key}${r.line ? ':' + r.line : ''} ${r.rule}: ${r.message}`);
  }
}
errors.forEach(e => console.log('::error::' + e));
console.log(`Scene lint: ${n} scenes, ${tally.error || 0} errors, ${tally.warn || 0} warnings, ${tally.info || 0} info.${all ? '' : ' Run with --all for the list.'}`);
process.exit(errors.length ? 1 : 0);
