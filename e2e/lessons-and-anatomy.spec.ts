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

test('Learn button always present; leads only when lessons on', async ({ page }) => {
  await boot(page, { settings: { tutorialsEnabled: false, autoLessonsEnabled: false } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(400);
  const btns = page.locator('#detail-actions .detail-action-btn');
  await expect(btns.filter({ hasText: 'Learn:' })).toHaveCount(1);
  const first = await btns.first().textContent();
  expect(first).toContain('Begin Story');
});

test('lesson leads when tutorials on', async ({ page }) => {
  await boot(page, { settings: { tutorialsEnabled: true, autoLessonsEnabled: false } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(400);
  const first = await page.locator('#detail-actions .detail-action-btn').first().textContent();
  expect(first).toContain('Learn:');
});

test('auto-lesson opens once then never again', async ({ page }) => {
  await boot(page, { settings: { tutorialsEnabled: true, autoLessonsEnabled: true } });
  await page.locator('#loc-docks').click();
  await page.waitForTimeout(1400);
  await expect(page.locator('#story-panel')).toHaveClass(/active/);
  const seen = await page.evaluate(() => localStorage.getItem('bcw_auto_lesson_seen'));
  expect(seen).toContain('docks');
});
