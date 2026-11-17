// 2026-11-17: the start scene, the text pace default and the admin codes.
//  - A new player's first screen is the island in a storm with one button.
//    It waits. It used to play by itself: a second and a half of storm over a
//    sunlit map, then a camera dive, then the story.
//  - The storm stays up for the two beats at sea and lifts when the player
//    wakes on the dock. Nothing is left dark or hidden if they close early.
//  - Story text arrives a word at a time unless the player chose otherwise.
//  - Settings has an Admin Code box: "unlock" opens every ordinary location,
//    "secret" opens the secret places as well. Any capitalisation.
import { test, expect } from '@playwright/test';

const EARLY = { version: 2, introComplete: true, unlockedLocations: ['docks'], completedStories: [], storyProgress: {} };

async function boot(page, opts: any = {}) {
  await page.addInitScript((o) => {
    if (sessionStorage.getItem('__seeded')) return;
    sessionStorage.setItem('__seeded', '1');
    if (o.progress) localStorage.setItem('bitcryptic_progress', JSON.stringify(o.progress));
    if (o.pace) localStorage.setItem('bcw_text_pace', o.pace);
    if (o.progress) {
      localStorage.setItem('bcw_tutorial_p1', 'true');
      localStorage.setItem('bcw_tutorial_p2', 'true');
    }
  }, opts);
  await page.goto('/index.html');
}

const cinematic = (page) => page.evaluate(`document.body.classList.contains('intro-cinematic')`);

test('a new player lands on a start scene that waits for Begin', async ({ page }) => {
  await boot(page, { pace: 'instant' });
  await expect(page.locator('#start-card')).toBeVisible({ timeout: 30000 });
  await expect(page.locator('#start-begin')).toBeFocused();
  await expect(page.locator('#intro-sky')).toHaveClass(/active/);
  // Nothing to press but Begin, and no map label for a place not reached yet.
  await expect(page.locator('.hud-top')).toBeHidden();
  await expect(page.locator('#loc-docks .loc-label')).toBeHidden();

  // It holds. The old sequence had started the story by now.
  await page.waitForTimeout(6000);
  await expect(page.locator('#start-card')).toBeVisible();
  await expect(page.locator('#story-panel')).not.toHaveClass(/active/);

  // Begin has focus, so Enter starts the game.
  await page.keyboard.press('Enter');
  await expect(page.locator('#story-title')).toHaveText('A Storm at Sea');
  await expect(page.locator('#start-card')).toBeHidden();
  // The storm is still overhead while the story is at sea.
  await expect(page.locator('#intro-sky')).toHaveClass(/active/);
  expect(await cinematic(page)).toBe(true);

  await expect(page.locator('#story-progress-label')).toHaveText('1 / 5');
  await page.locator('#story-continue').click();
  await expect(page.locator('#story-progress-label')).toHaveText('2 / 5');
  await expect(page.locator('#intro-sky')).toHaveClass(/active/);
  await page.locator('#story-continue').click();
  await expect(page.locator('#story-progress-label')).toHaveText('3 / 5');

  // Waking on the dock: the sky clears and the HUD comes back.
  await expect.poll(() => cinematic(page), { timeout: 10000 }).toBe(false);
  await expect(page.locator('#intro-sky')).not.toHaveClass(/active/);
  await expect(page.locator('.hud-top')).toBeVisible();
});

test('closing the opening during the storm leaves nothing dark or hidden', async ({ page }) => {
  await boot(page, { pace: 'instant' });
  await page.locator('#start-begin').click({ timeout: 30000 });
  await expect(page.locator('#story-title')).toHaveText('A Storm at Sea');
  await page.locator('#story-close-btn').click();
  await expect(page.locator('#story-panel')).not.toHaveClass(/active/);
  expect(await cinematic(page)).toBe(false);
  await expect(page.locator('#intro-sky')).not.toHaveClass(/active/);
  await expect(page.locator('.hud-top')).toBeVisible();
  await expect(page.locator('#loc-docks .loc-label')).toBeVisible();
});

test('a returning player goes straight to the map', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  await expect(page.locator('#start-card')).toBeHidden();
  expect(await cinematic(page)).toBe(false);
  await expect(page.locator('.hud-top')).toBeVisible();
});

test('story text arrives a word at a time unless the player chose another pace', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  expect(await page.evaluate(`getTextPace()`)).toBe('word');
  await page.evaluate(`BCWSettings.open()`);
  await expect(page.locator('#setting-text-pace')).toHaveValue('word');
  // A choice is kept across a reload.
  await page.locator('#setting-text-pace').selectOption('sentence');
  await page.reload();
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  expect(await page.evaluate(`getTextPace()`)).toBe('sentence');
});

test('the admin code "unlock" opens every ordinary location, in any capitalisation', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  await page.evaluate(`BCWSettings.open()`);
  await page.locator('#setting-admin-code').fill('  UnLoCk ');
  await page.keyboard.press('Enter');
  await expect(page.locator('#setting-admin-status')).toHaveText('All locations unlocked.');
  const after = await page.evaluate(`(function () {
    var p = getProgress();
    return {
      missing: Object.keys(UNLOCK_CHAIN).filter(function (id) { return !UNLOCK_CHAIN[id].secret && !p.unlockedLocations.includes(id); }),
      secretOpen: Object.keys(UNLOCK_CHAIN).filter(function (id) { return UNLOCK_CHAIN[id].secret && p.unlockedLocations.includes(id); }),
      stories: p.completedStories,
      codes: getUnlockedCodes()
    };
  })()`) as any;
  expect(after.missing).toEqual([]);
  // Secrets stay secret, and no story is marked as played.
  expect(after.secretOpen).toEqual([]);
  expect(after.codes).toEqual([]);
  expect(after.stories).toEqual([]);
  await expect(page.locator('#loc-house')).toBeHidden();
});

test('the admin code "secret" opens the secret places too, and they survive a reload', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  await page.evaluate(`BCWSettings.open()`);
  await page.locator('#setting-admin-code').fill('SECRET');
  await page.locator('#setting-admin-apply').click();
  await expect(page.locator('#setting-admin-status')).toHaveText('All locations unlocked, secrets included.');
  const places = ['house', 'pond', 'lair', 'moon', 'airship', 'yacht'];
  const check = async () => {
    for (const id of places) await expect(page.locator('#loc-' + id), id).toBeVisible();
    const s = await page.evaluate(`(function () {
      var p = getProgress();
      return {
        missing: Object.keys(UNLOCK_CHAIN).filter(function (id) { return !UNLOCK_CHAIN[id].secret && !p.unlockedLocations.includes(id); }),
        codes: getUnlockedCodes(),
        neon: document.body.classList.contains('pog-house'),
        brick: document.body.classList.contains('boston-roads')
      };
    })()`) as any;
    expect(s.missing).toEqual([]);
    expect(s.codes).toEqual(expect.arrayContaining(['COME IN', 'FISH', 'LR', 'MARK', 'FLOAT', 'HIDDEN', 'POG']));
    // Places only: the code does not restyle the island.
    expect(s.neon).toBe(false);
    expect(s.brick).toBe(false);
  };
  await check();
  await page.reload();
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  await check();
});

test('a wrong admin code is refused and changes nothing', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#loading-screen')).toHaveClass(/hidden/, { timeout: 30000 });
  await page.evaluate(`BCWSettings.open()`);
  await page.locator('#setting-admin-code').fill('unlock all');
  await page.locator('#setting-admin-apply').click();
  await expect(page.locator('#setting-admin-status')).toHaveText('Code not accepted.');
  await expect(page.locator('#setting-admin-status')).toHaveClass(/is-error/);
  expect(await page.evaluate(`getProgress().unlockedLocations`)).toEqual(['docks']);
  expect(await page.evaluate(`getUnlockedCodes()`)).toEqual([]);
});
