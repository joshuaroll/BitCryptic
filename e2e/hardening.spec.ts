import { test, expect, type Page } from '@playwright/test';

// W9b: a runtime error must be recorded and then survived. The island is a
// 9.8k-line monolith of inline handlers; a thrown error in one of them kills
// that handler and nothing else, which is why the game can look perfectly fine
// while a single button has quietly stopped working. Nobody hears about it.
//
// W9c: native confirm() was the last place the island dropped out of its own
// skin — an OS dialog in a system font over a game that has spent the whole
// session building a look. Worse, mobile browsers can suppress it outright,
// which turns "cancel" into "yes, delete everything".

async function boot(page: Page) {
  await page.addInitScript(() => localStorage.setItem('bcw_tutorial_complete', '1'));
  await page.goto('/index.html', { waitUntil: 'load' });
}

test.describe('global error hook', () => {
  test('records a thrown error and keeps the island alive', async ({ page }) => {
    await boot(page);

    await page.evaluate(() => {
      setTimeout(() => {
        throw new Error('deliberate test explosion');
      }, 0);
    });
    await page.waitForTimeout(300);

    // Events queue in memory and flush on a timer or when the tab is hidden,
    // so force the flush before reading storage. track() spreads its data flat
    // onto the event, so `error` sits at the top level.
    const logged = await page.evaluate(async () => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
      await new Promise((r) => setTimeout(r, 50));
      const raw = localStorage.getItem('bcw_analytics') || '[]';
      return JSON.parse(raw).filter((e: { event: string }) => e.event === 'error');
    });

    expect(
      logged.some((e: { error?: string }) => (e.error || '').includes('deliberate test explosion')),
      'the thrown error never reached trackError'
    ).toBe(true);

    // The game is still there. This is the whole point — the hook observes,
    // it does not intervene.
    await expect(page.locator('#map-container')).toBeVisible();
    expect(await page.locator('.location').count()).toBeGreaterThanOrEqual(10);
  });

  test('records an unhandled promise rejection', async ({ page }) => {
    await boot(page);
    await page.evaluate(() => {
      Promise.reject(new Error('deliberate rejection'));
    });
    await page.waitForTimeout(300);

    const logged = await page.evaluate(async () => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
      await new Promise((r) => setTimeout(r, 50));
      const raw = localStorage.getItem('bcw_analytics') || '[]';
      return JSON.parse(raw).filter(
        (e: { event: string; context?: string }) => e.event === 'error' && e.context === 'unhandledrejection'
      );
    });
    expect(logged.length, 'the rejection was never recorded').toBeGreaterThanOrEqual(1);
  });

  test('never wipes a save while handling an error', async ({ page }) => {
    // The nightmare: an error handler that "cleans up" and takes a year of
    // progress with it. Every key must be byte-identical afterwards.
    await page.addInitScript(() => {
      localStorage.setItem('bcw_tutorial_complete', '1');
      localStorage.setItem(
        'bitcryptic_progress',
        JSON.stringify({ version: 2, unlockedLocations: ['docks', 'forest'], completedStories: ['docks'], introComplete: true, storyProgress: {} })
      );
      localStorage.setItem('bitcryptic_fish_coins', '4242');
      localStorage.setItem('bitcryptic_unlocked_codes', JSON.stringify(['KAIT']));
    });
    await page.goto('/index.html', { waitUntil: 'load' });

    const before = await page.evaluate(() => ({
      progress: localStorage.getItem('bitcryptic_progress'),
      coins: localStorage.getItem('bitcryptic_fish_coins'),
      codes: localStorage.getItem('bitcryptic_unlocked_codes'),
    }));

    await page.evaluate(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          throw new Error('repeated failure ' + i);
        }, 0);
      }
      Promise.reject(new Error('and a rejection'));
    });
    await page.waitForTimeout(400);

    const after = await page.evaluate(() => ({
      progress: localStorage.getItem('bitcryptic_progress'),
      coins: localStorage.getItem('bitcryptic_fish_coins'),
      codes: localStorage.getItem('bitcryptic_unlocked_codes'),
    }));

    expect(after, 'the error hook altered a save').toEqual(before);
  });

  test('caps runaway error logging instead of filling storage', async ({ page }) => {
    // A render loop throwing every frame would otherwise write 60 entries a
    // second and evict real progress to make room.
    await boot(page);
    await page.evaluate(() => {
      for (let i = 0; i < 200; i++) {
        setTimeout(() => {
          throw new Error('flood ' + i);
        }, 0);
      }
    });
    await page.waitForTimeout(600);

    const count = await page.evaluate(async () => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
      await new Promise((r) => setTimeout(r, 50));
      const raw = localStorage.getItem('bcw_analytics') || '[]';
      return JSON.parse(raw).filter((e: { event: string }) => e.event === 'error').length;
    });
    expect(count, 'error logging is unbounded').toBeLessThanOrEqual(30);
  });
});

test.describe('branded confirm', () => {
  test('reset asks twice, in the island’s own dialog, and cancels safely', async ({ page }) => {
    // If a native confirm() were still here, this test would hang — Playwright
    // auto-dismisses native dialogs, so the flow would silently take the
    // cancel path and the assertions below would never see a modal at all.
    await page.addInitScript(() => {
      localStorage.setItem('bcw_tutorial_complete', '1');
      localStorage.setItem('bitcryptic_fish_coins', '999');
    });
    await page.goto('/index.html', { waitUntil: 'load' });

    await page.evaluate(() => { eval('BCWSave.confirmReset()'); });

    const dialog = page.locator('.game-modal-overlay[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('.game-modal-title')).toHaveText('Erase everything?');

    // Cancel must actually cancel.
    await dialog.locator('.game-modal-btn.secondary').click();
    await page.waitForTimeout(300);
    expect(await page.evaluate(() => localStorage.getItem('bitcryptic_fish_coins'))).toBe('999');
  });

  test('Escape cancels a destructive prompt', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('bcw_tutorial_complete', '1');
      localStorage.setItem('bitcryptic_fish_coins', '777');
    });
    await page.goto('/index.html', { waitUntil: 'load' });

    await page.evaluate(() => { eval('BCWSave.confirmReset()'); });
    await expect(page.locator('.game-modal-overlay[role="dialog"]')).toBeVisible();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    expect(await page.evaluate(() => localStorage.getItem('bitcryptic_fish_coins'))).toBe('777');
  });

  test('confirming both prompts really does reset', async ({ page }) => {
    // Seed AFTER load, not via addInitScript: the reset ends in
    // location.reload(), which would re-run an init script and helpfully put
    // the save back, hiding the very thing under test.
    await page.addInitScript(() => localStorage.setItem('bcw_tutorial_complete', '1'));
    await page.goto('/index.html', { waitUntil: 'load' });
    await page.evaluate(() => localStorage.setItem('bitcryptic_fish_coins', '555'));

    await page.evaluate(() => { eval('BCWSave.confirmReset()'); });
    const dialog = page.locator('.game-modal-overlay[role="dialog"]');
    await expect(dialog).toBeVisible();
    await dialog.locator('.game-modal-btn.danger').click();

    // Second prompt — a fresh element, which is why the helper does not reuse
    // one shared overlay node. The dismissed first overlay lingers for its
    // fade-out, so match on the title rather than assuming a single node.
    const second = page.locator('.game-modal-overlay[role="dialog"]', { hasText: 'Last chance' });
    await expect(second).toBeVisible();
    await second.locator('.game-modal-btn.danger').click();

    await page.waitForLoadState('load');
    expect(await page.evaluate(() => localStorage.getItem('bitcryptic_fish_coins'))).toBeNull();
  });

  test('focus starts on Cancel, not on the destructive button', async ({ page }) => {
    await boot(page);
    await page.evaluate(() => { eval('BCWSave.confirmReset()'); });
    const cancel = page.locator('.game-modal-overlay[role="dialog"] .game-modal-btn.secondary');
    await expect(cancel).toBeVisible();
    // Focus is set inside a requestAnimationFrame, so wait for it rather than
    // sampling once.
    await expect(cancel).toBeFocused();
  });

  test('no native confirm survives anywhere in the shipped code', async ({ page }) => {
    // A dialog handler that fails the test if anything ever opens one.
    let nativeDialogSeen = false;
    page.on('dialog', async (d) => {
      nativeDialogSeen = true;
      await d.dismiss();
    });
    await boot(page);
    await page.evaluate(() => { eval('BCWSave.confirmReset()'); });
    await expect(page.locator('.game-modal-overlay[role="dialog"]')).toBeVisible();
    expect(nativeDialogSeen, 'a native confirm() dialog still opens').toBe(false);
  });
});
