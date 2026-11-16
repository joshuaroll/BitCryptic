// Coverage for the intro guided-path choice and its two HUD pills.
// The Learn button must ALWAYS render where a tutorial exists; the setting
// controls whether it LEADS, never whether it exists (Joshua, 2026-08-29).
// bcw_auto_lesson_seen is a new persisted key — ALL_KEYS + a sync push.
import { test, expect } from '@playwright/test';

async function boot(page, opts: any = {}) {
  await page.addInitScript((o) => {
    localStorage.setItem('bitcryptic_progress', JSON.stringify({
      introComplete: true, unlockedLocations: ['docks','forest'], completedStories: o.done || []
    }));
    localStorage.setItem('bcw_settings', JSON.stringify(o.settings || {}));
    // Default to a stored answer so the once-only picker does not sit over
    // the map and swallow clicks. Pass orientation: null to get the picker.
    if (o.orientation !== null) localStorage.setItem('bcw_orientation', o.orientation || 'landscape');
    localStorage.setItem('bcw_tutorial_p1','true');
    localStorage.setItem('bcw_tutorial_p2','true');
  }, opts);
  await page.goto('/index.html' + (opts.query || ''));
  await page.waitForTimeout(400);
}

// The two pills belong to the classic look. The default look (2026-11-16)
// hides them: both switches live in Settings, covered further down.
const CLASSIC = '?look=classic';

test('HUD pills render and relabel', async ({ page }) => {
  await boot(page, { query: CLASSIC, settings: { anatomyEnabled: true, autoLessonsEnabled: false } });
  await expect(page.locator('#hud-anatomy')).toHaveText('Anatomy: on');
  await expect(page.locator('#hud-lessons')).toHaveText('Lessons: off');
  await page.locator('#hud-anatomy').click();
  await expect(page.locator('#hud-anatomy')).toHaveText('Anatomy: off');
});

test('anatomy demo shows a clickable clue', async ({ page }) => {
  await boot(page, { query: CLASSIC, settings: { anatomyEnabled: false, autoLessonsEnabled: false } });
  await page.locator('#hud-anatomy').click();
  const word = page.locator('#game-modal-body .anatomy-word').first();
  await expect(word).toBeVisible();
  await word.click();
  await expect(page.locator('#game-modal-body .anatomy-info')).toContainText('DEFINITION');
});

test('in the default look the Settings switch does what the pill did', async ({ page }) => {
  await boot(page, { settings: { anatomyEnabled: false, autoLessonsEnabled: false } });
  await expect(page.locator('#hud-anatomy')).toBeHidden();
  await expect(page.locator('#hud-lessons')).toBeHidden();
  await page.evaluate(`BCWSettings.open()`);
  await page.locator('#setting-anatomy').click();
  expect(await page.evaluate(`BCWSettings.isAnatomyEnabled()`)).toBe(true);
  // The panel steps aside and the demo clue is tappable.
  const word = page.locator('#game-modal-body .anatomy-word').first();
  await expect(word).toBeVisible();
  await word.click();
  await expect(page.locator('#game-modal-body .anatomy-info')).toContainText('DEFINITION');
  // Lessons has no demo: it flips and the panel stays.
  await page.evaluate(`closeGameModal()`);
  await page.evaluate(`BCWSettings.open()`);
  await page.locator('#setting-auto-lessons').click();
  expect(await page.evaluate(`BCWSettings.areAutoLessonsEnabled()`)).toBe(true);
});

// Button POSITION is fixed everywhere: lesson first, story second, in every
// state and at every location. Only the emphasis changes with the setting.
// A button that moves between panels costs the player a re-read each time.
for (const tutorialsEnabled of [true, false]) {
  test(`lesson sits first with tutorials ${tutorialsEnabled ? 'on' : 'off'}`, async ({ page }) => {
    await boot(page, { settings: { tutorialsEnabled, autoLessonsEnabled: false } });
    await page.locator('#loc-docks').click();
    await page.waitForTimeout(400);
    const btns = page.locator('#detail-actions .detail-action-btn');
    await expect(btns.filter({ hasText: 'Learn:' })).toHaveCount(1);
    expect(await btns.nth(0).textContent()).toContain('Learn:');
    expect(await btns.nth(1).textContent()).toContain('Story');
  });
}

test('lesson still sits first after the story is finished', async ({ page }) => {
  await boot(page, { done: ['docks'], settings: { tutorialsEnabled: true, autoLessonsEnabled: false } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(400);
  const btns = page.locator('#detail-actions .detail-action-btn');
  expect(await btns.nth(0).textContent()).toContain('Learn:');
  expect(await btns.nth(1).textContent()).toContain('Replay Story');
});

test('emphasis follows the setting even though position does not', async ({ page }) => {
  await boot(page, { settings: { tutorialsEnabled: true, autoLessonsEnabled: false } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(400);
  const learn = page.locator('#detail-actions .detail-action-btn').first();
  await expect(learn).not.toHaveClass(/secondary/);
});

test('auto-lesson opens once then never again', async ({ page }) => {
  await boot(page, { settings: { tutorialsEnabled: true, autoLessonsEnabled: true } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(1400);
  await expect(page.locator('#story-panel')).toHaveClass(/active/);
  const seen = await page.evaluate(() => localStorage.getItem('bcw_auto_lesson_seen'));
  expect(seen).toContain('docks');
});

// ── Vertical (9:8) mode ────────────────────────────────────────────────
// The layout follows the screen shape and nothing is asked (Joshua,
// 2026-11-16, replacing the first-visit picker). A choice made in Settings is
// stored and wins. Landscape must be byte-for-byte unaffected.

test('a wide screen plays wide without being asked', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await boot(page, { orientation: null });
  await expect(page.locator('.orientation-overlay')).toHaveCount(0);
  await expect(page.locator('body')).not.toHaveClass(/vertical-mode/);
  // Picked, not chosen: nothing is stored until the player uses Settings.
  expect(await page.evaluate(() => localStorage.getItem('bcw_orientation'))).toBeNull();
});

test('a tall screen plays vertical without being asked', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await boot(page, { orientation: null });
  await expect(page.locator('.orientation-overlay')).toHaveCount(0);
  await expect(page.locator('body')).toHaveClass(/vertical-mode/);
  expect(await page.evaluate(() => localStorage.getItem('bcw_orientation'))).toBeNull();
  // Settings shows the layout in use, not a blank default.
  await page.evaluate(`BCWSettings.open()`);
  await expect(page.locator('#setting-vertical')).toBeChecked();
});

test('a stored choice wins over the screen shape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await boot(page, { orientation: 'landscape' });
  await expect(page.locator('body')).not.toHaveClass(/vertical-mode/);
});

test('vertical frame is 9:8 and the map fills it', async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 800 });
  await boot(page, { orientation: 'portrait' });
  const shell = await page.locator('#vertical-shell').boundingBox();
  const map = await page.locator('#map-container').boundingBox();
  expect(shell!.width / shell!.height).toBeCloseTo(9 / 8, 1);
  expect(map!.width).toBeCloseTo(shell!.width, 0);
  // Never wider than the window.
  expect(shell!.width).toBeLessThanOrEqual(900);
});

test('landscape leaves the map full-bleed', async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 800 });
  await boot(page, { orientation: 'landscape' });
  const map = await page.locator('#map-container').boundingBox();
  expect(map!.width).toBeCloseTo(1200, 0);
});

test('Settings switches orientation live', async ({ page }) => {
  await boot(page, { orientation: 'landscape' });
  await page.evaluate(() => eval('BCWSettings.open()'));
  await page.locator('#setting-vertical').check();
  await expect(page.locator('body')).toHaveClass(/vertical-mode/);
  expect(await page.evaluate(() => localStorage.getItem('bcw_orientation'))).toBe('portrait');
});
