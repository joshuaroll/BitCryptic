// The cottage editor, 2026-11-16 upgrade.
//  - New pieces arrive in an empty spot, selected, instead of stacked on one cell.
//  - The default window sits on the wall (it used to hang half off the left
//    edge, because it was measured while the editor was hidden), and a save
//    that still holds the old one is put right.
//  - A free-placed layout keeps its shape when the room changes size.
//  - The palette shows the furniture itself and is tabbed.
//  - An item's tools are never cut off by the edge of the room.
import { test, expect } from '@playwright/test';

const PROGRESS = { version: 2, introComplete: true, unlockedLocations: ['docks', 'house'], completedStories: ['docks', 'house'], storyProgress: {} };

async function boot(page, opts: any = {}) {
  await page.addInitScript((o) => {
    if (sessionStorage.getItem('__seeded')) return;
    sessionStorage.setItem('__seeded', '1');
    localStorage.setItem('bitcryptic_progress', JSON.stringify(o.progress));
    localStorage.setItem('bitcryptic_unlocked_codes', JSON.stringify(['COME IN']));
    if (o.house) localStorage.setItem('bitcryptic_house', JSON.stringify(o.house));
    localStorage.setItem('bcw_orientation', 'landscape');
    localStorage.setItem('bcw_tutorial_p1', 'true');
    localStorage.setItem('bcw_tutorial_p2', 'true');
  }, { progress: PROGRESS, ...opts });
  await page.goto('/index.html');
  await page.waitForTimeout(400);
  await page.evaluate(`openHouseEditor()`);
  await expect(page.locator('#house-editor')).toHaveClass(/active/);
}

const items = (page) => page.evaluate(`getHouseState().items`) as Promise<any[]>;

test('new pieces land side by side, and the newest is selected', async ({ page }) => {
  await boot(page);
  await page.evaluate(`['table','chair','lamp','plant','bookshelf','fireplace','painting','clock'].forEach(function (t) { addFurniture(t); })`);
  const placed = (await items(page)).filter((i) => i.col !== undefined);
  expect(placed).toHaveLength(8);
  // No two pieces overlap on the grid.
  const size: Record<string, [number, number]> = await page.evaluate(`Object.fromEntries(Object.entries(FURNITURE_DEFS).map(function (e) { return [e[0], [e[1].cols || 1, e[1].rows || 1]]; }))`) as any;
  const cells = new Set<string>();
  for (const i of placed) {
    const [w, h] = size[i.type];
    for (let c = i.col; c < i.col + w; c++) for (let r = i.row; r < i.row + h; r++) {
      const key = c + ',' + r;
      expect(cells.has(key), `${i.type} overlaps at ${key}`).toBe(false);
      cells.add(key);
    }
  }
  // Wall pieces on the wall, floor pieces on the floor.
  for (const i of placed) {
    if (i.type === 'painting' || i.type === 'clock') expect(i.row).toBeLessThanOrEqual(2);
    else expect(i.row).toBeGreaterThanOrEqual(3);
  }
  await expect(page.locator('#house-room .furniture-item.selected')).toHaveCount(1);
  await expect(page.locator('#house-room .furniture-item.selected')).toHaveClass(/hd-type-clock/);
});

test('a rug does not push furniture away, and furniture may stand on it', async ({ page }) => {
  await boot(page);
  await page.evaluate(`addFurniture('table'); addFurniture('rug');`);
  const all = await items(page);
  const table = all.find((i) => i.type === 'table');
  const rug = all.find((i) => i.type === 'rug');
  // Both asked for the middle of the floor and both got it.
  expect(rug.row).toBe(table.row);
  expect(rug.col).toBeLessThanOrEqual(table.col);
  expect(rug.col + 3).toBeGreaterThan(table.col);
});

test('the default window is on the wall, whole', async ({ page }) => {
  await boot(page);
  const room = (await page.locator('#house-room').boundingBox())!;
  const win = (await page.locator('#house-room .hd-type-houseWindow').boundingBox())!;
  expect(win.x).toBeGreaterThanOrEqual(room.x);
  expect(win.x + win.width).toBeLessThanOrEqual(room.x + room.width);
  // Centred, give or take a pixel.
  expect(Math.abs((win.x + win.width / 2) - (room.x + room.width / 2))).toBeLessThan(3);
});

test('a save holding the old half-hidden window is put right, a moved one is left alone', async ({ page }) => {
  await boot(page, { house: { wallColor: '#7a6a5a', items: [{ type: 'houseWindow', xPx: -160, yPx: 0, wPx: 320, hPx: 240 }] } });
  expect((await items(page))[0].xPx).toBe(240);
  expect((await items(page))[0].rw).toBe(800);
  await page.evaluate(`closeHouseEditor()`);
  await page.evaluate(`localStorage.setItem('bitcryptic_house', JSON.stringify({ wallColor: '#7a6a5a', items: [{ type: 'houseWindow', xPx: 40, yPx: 20, wPx: 320, hPx: 240 }] }))`);
  await page.evaluate(`openHouseEditor()`);
  expect((await items(page))[0].xPx).toBe(40);
});

test('a free-placed layout keeps its shape when the room changes size', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await boot(page, { house: { wallColor: '#7a6a5a', items: [
    { type: 'houseWindow', xPx: 240, yPx: 36, wPx: 320, hPx: 240, rw: 800, rh: 600 },
    { type: 'bed', xPx: 400, yPx: 450, wPx: 240, hPx: 100, rw: 800, rh: 600 }
  ] } });
  const frac = async () => {
    // Measured inside the room's 4px border, which is where pieces live.
    const outer = (await page.locator('#house-room').boundingBox())!;
    const room = { x: outer.x + 4, y: outer.y + 4, width: outer.width - 8, height: outer.height - 8 };
    const bed = (await page.locator('#house-room .hd-type-bed').boundingBox())!;
    return [(bed.x - room.x) / room.width, (bed.y - room.y) / room.height, bed.width / room.width, bed.height / room.height];
  };
  const wide = await frac();
  expect(wide[0]).toBeCloseTo(0.5, 2);
  expect(wide[2]).toBeCloseTo(0.3, 2);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(`renderHouse()`);
  const narrow = await frac();
  for (let k = 0; k < 4; k++) expect(narrow[k]).toBeCloseTo(wide[k], 2);
});

test('the palette shows the furniture itself, in tabs', async ({ page }) => {
  await boot(page);
  await expect(page.locator('.hd-tab')).toHaveCount(6);
  await expect(page.locator('.hd-tab.is-active')).toHaveText('Furniture');
  // Every furniture tile carries a drawing of its piece, not an emoji.
  const tiles = page.locator('.hd-pane[data-tab="furniture"] .palette-item');
  await expect(tiles).toHaveCount(8);
  await expect(page.locator('.hd-pane[data-tab="furniture"] .palette-icon.hd-thumb > svg')).toHaveCount(8);
  // Kitchen moved out of Puzzle Items into its own tab, with nothing lost.
  await page.locator('.hd-tab[data-tab="kitchen"]').click();
  await expect(page.locator('.hd-pane[data-tab="kitchen"] .palette-item')).toHaveCount(5);
  await expect(page.locator('.hd-pane[data-tab="furniture"]')).toBeHidden();
  await page.locator('.hd-pane[data-tab="kitchen"] .palette-item', { hasText: 'Fridge' }).click();
  expect((await items(page)).some((i) => i.type === 'fridge')).toBe(true);
  // Tiles work from the keyboard.
  await page.locator('.hd-tab[data-tab="furniture"]').click();
  await page.locator('.hd-pane[data-tab="furniture"] .palette-item').first().focus();
  await page.keyboard.press('Enter');
  expect((await items(page)).some((i) => i.type === 'table')).toBe(true);
  // Colours still reach the room.
  await page.locator('.hd-tab[data-tab="colors"]').click();
  await page.locator('.hd-pane[data-tab="colors"] .wall-swatch[title="Blue"]').click();
  expect((await page.evaluate(`getHouseState().wallColor`))).toBe('#5a6a7a');
});

test('the header counts toward the next house badge', async ({ page }) => {
  await boot(page);
  await expect(page.locator('#hd-progress')).toContainText('Interior Designer');
  await expect(page.locator('#hd-progress .hd-progress-num')).toHaveText('1 / 5');
  await page.evaluate(`['table','chair','lamp','plant'].forEach(function (t) { addFurniture(t); })`);
  // Five placed: that badge is earned and the next one takes its place.
  await expect(page.locator('#hd-progress')).toContainText('Dream Home');
  await expect(page.locator('#hd-progress .hd-progress-num')).toHaveText('5 / 15');
});

test("an item's tools stay inside the room at its edges", async ({ page }) => {
  await boot(page, { house: { wallColor: '#7a6a5a', items: [
    { type: 'plant', col: 0, row: 5 },
    { type: 'plant', col: 9, row: 5 }
  ] } });
  for (const idx of [0, 1]) {
    await page.evaluate(`deselectHouseItem(); selectHouseItem(${idx})`);
    const room = (await page.locator('#house-room').boundingBox())!;
    const bar = (await page.locator('#house-room .furniture-item.selected .house-item-toolbar').boundingBox())!;
    expect(bar.x).toBeGreaterThanOrEqual(room.x - 1);
    expect(bar.x + bar.width).toBeLessThanOrEqual(room.x + room.width + 1);
    expect(bar.y + bar.height).toBeLessThanOrEqual(room.y + room.height + 1);
  }
});

test('on a phone the room sits above a palette grid, with one row of tools', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await boot(page);
  const header = (await page.locator('#house-editor .house-header').boundingBox())!;
  const room = (await page.locator('#house-room').boundingBox())!;
  const pal = (await page.locator('#house-editor .house-palette').boundingBox())!;
  expect(header.height).toBeLessThan(110);
  expect(room.width).toBeCloseTo(390, -1);
  expect(pal.width).toBeCloseTo(390, -1);
  expect(pal.y).toBeGreaterThanOrEqual(room.y + room.height - 1);
  // Three tiles to a row.
  const a = (await page.locator('.hd-pane[data-tab="furniture"] .palette-item').nth(0).boundingBox())!;
  const c = (await page.locator('.hd-pane[data-tab="furniture"] .palette-item').nth(2).boundingBox())!;
  const d = (await page.locator('.hd-pane[data-tab="furniture"] .palette-item').nth(3).boundingBox())!;
  expect(c.y).toBeCloseTo(a.y, 0);
  expect(d.y).toBeGreaterThan(a.y + 20);
});
