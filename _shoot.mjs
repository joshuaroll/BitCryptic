import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const FILE = 'D:/AntiGravity/Bit_Cryptic/Bit_Cryptic_World/scenes/wreck.js';
const OUT = process.argv[2];
const only = process.argv[3] ? process.argv[3].split(',') : null;
mkdirSync(OUT, { recursive: true });

const store = {};
new Function('STORY_SCENES', readFileSync(FILE, 'utf8'))(store);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1000, height: 520 }, deviceScaleFactor: 2 });

for (const [key, svg] of Object.entries(store)) {
  if (only && !only.includes(key)) continue;
  await page.setContent(
    '<body style="margin:0;background:#07141a">' +
    '<div id="w" style="width:1000px">' + svg + '</div></body>'
  );
  // freeze SMIL at a representative time so shots are comparable
  await page.evaluate(() => { document.querySelector('svg').pauseAnimations(); document.querySelector('svg').setCurrentTime(1.2); });
  const el = await page.$('#w');
  await el.screenshot({ path: `${OUT}/${key}.png` });
}
await browser.close();
console.log('shot', Object.keys(store).length, 'scenes ->', OUT);
