// Bundle Scene Studio into one self-contained HTML file: every scene file, the cast kit,
// the lint and design/tokens.json inlined, so it runs with no server (and as a claude.ai artifact).
//   node tools/scene-studio/build-artifact.cjs OUT.html
// The output carries every scene string, which includes puzzle answers: keep it private,
// never under the deploy tree.
const fs = require('fs'), path = require('path');
const here = __dirname, root = path.resolve(here, '../..');
const out = process.argv[2];
if (!out) { console.error('usage: node tools/scene-studio/build-artifact.cjs OUT.html'); process.exit(1); }
if (path.resolve(out).startsWith(root)) { console.error('Refusing to write inside the repo: the bundle contains answers.'); process.exit(1); }
let html = fs.readFileSync(path.join(here, 'studio.html'), 'utf8');
const a = html.indexOf('<!--SCENE-KIT-->'), b = html.indexOf('<!--/SCENE-KIT-->') + '<!--/SCENE-KIT-->'.length;
const kit = html.slice(a, b);
const inline = src => '<script>' + src.replace(/<\/script/gi, '<\/script') + '</script>';
let bundled = '<script>window.BC_TOKENS_JSON=' + fs.readFileSync(path.join(root, 'design/tokens.json'), 'utf8') + ';</script>\n';
for (const m of kit.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)) {
  bundled += inline(m[1] ? fs.readFileSync(path.resolve(here, m[1]), 'utf8') : m[2]) + '\n';
}
html = html.slice(0, a) + bundled + html.slice(b);
html = html.replace(/<meta charset="utf-8">\n<meta name="viewport"[^>]*>\n/, '');
fs.writeFileSync(out, html);
console.log('Scene Studio bundle: ' + (html.length / 1024 / 1024).toFixed(2) + ' MB -> ' + out);
