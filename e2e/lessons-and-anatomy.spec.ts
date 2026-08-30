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
  await page.goto('/index.html');
  await page.waitForTimeout(400);
}

test('HUD pills render and relabel', async ({ page }) => {
  await boot(page, { settings: { anatomyEnabled: true, autoLessonsEnabled: false } });
  await expect(page.locator('#hud-anatomy')).toHaveText('Anatomy: on');
  await expect(page.locator('#hud-lessons')).toHaveText('Lessons: off');
  await page.locator('#hud-anatomy').click();
  await expect(page.locator('#hud-anatomy')).toHaveText('Anatomy: off');
});

test('anatomy demo shows a clickable clue', async ({ page }) => {
  await boot(page, { settings: { anatomyEnabled: false, autoLessonsEnabled: false } });
  await page.locator('#hud-anatomy').click();
  const word = page.locator('#game-modal-body .anatomy-word').first();
  await expect(word).toBeVisible();
  await word.click();
  await expect(page.locator('#game-modal-body .anatomy-info')).toContainText('DEFINITION');
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
// Mirrors Adventure's orientation picker: asked once, remembered, and
// changeable in Settings. Landscape must be byte-for-byte unaffected.

test('first visit asks for an orientation', async ({ page }) => {
  await boot(page, { orientation: null });
  await expect(page.locator('.orientation-overlay')).toBeVisible();
  await page.locator('.orientation-option[data-mode="portrait"]').click();
  await expect(page.locator('.orientation-overlay')).toHaveCount(0);
  await expect(page.locator('body')).toHaveClass(/vertical-mode/);
  expect(await page.evaluate(() => localStorage.getItem('bcw_orientation'))).toBe('portrait');
});

test('a stored answer is never re-asked', async ({ page }) => {
  await boot(page, { orientation: 'landscape' });
  await expect(page.locator('.orientation-overlay')).toHaveCount(0);
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
