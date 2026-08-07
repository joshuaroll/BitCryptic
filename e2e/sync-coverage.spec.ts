import { test, expect, type Page } from '@playwright/test';

// The platform sync contract: EVERY code path that persists progress to
// localStorage must schedule a debounced cloud push.
//
// The failure this guards against is silent and total. Before this suite,
// only saveProgress() pushed — so a player who signed in, spent an evening
// fishing and decorating, and then opened the game on their phone found none
// of it. Nothing errored. The local save was perfect. The cloud simply never
// heard about it.
//
// These tests mock BCSync and drive the game's REAL writer functions, because
// the bug class is "a writer that forgot to call schedulePush" — which only a
// test that exercises the writer itself can see. Driving the fishing minigame
// through its UI instead would test the cast/aim/reel animation timing, which
// is not what is broken and would be flaky in CI.

type PushLog = { game: string }[];

declare global {
  interface Window {
    __bcPushes?: PushLog;
    BCSync?: { schedulePush: (game: string) => void; push: (game: string) => Promise<unknown> };
  }
}

// Install a fake BCSync BEFORE any game script runs. The real one only exists
// after the shared auth modules load from /shared/auth/, which is not served in
// the standalone test harness — precisely why every call site is written
// `window.BCSync?.schedulePush(...)`.
async function mockSync(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    window.__bcPushes = [];
    window.BCSync = {
      schedulePush: (game: string) => {
        window.__bcPushes!.push({ game });
      },
      push: async (game: string) => {
        window.__bcPushes!.push({ game });
        return { status: 'pushed' };
      },
    };
  });
}

async function pushes(page: Page): Promise<PushLog> {
  return page.evaluate(() => window.__bcPushes ?? []);
}

async function clearPushes(page: Page) {
  await page.evaluate(() => {
    window.__bcPushes = [];
  });
}

test.describe('cloud sync coverage', () => {
  test.beforeEach(async ({ page }) => {
    await mockSync(page);
    await page.goto('/index.html', { waitUntil: 'load' });
  });

  test('a fishing-only session reaches the cloud', async ({ page }) => {
    // The headline case from the audit: a player who only fishes. No story is
    // completed, so saveProgress() — the one writer that used to push — never
    // runs at all.
    await clearPushes(page);

    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.saveFishCatch({ name: 'Trout', emoji: '🐟', rarity: 'common', weight: 1.2 });
      w.setCoins(120);
      w.saveBucket([{ name: 'Perch', emoji: '🐟', rarity: 'common', weight: 0.8 }]);
    });

    const log = await pushes(page);
    expect(log.length, 'fishing writers scheduled no cloud push').toBeGreaterThanOrEqual(3);
    expect(log.every((p) => p.game === 'world')).toBe(true);

    // And the catch really did land locally — a push of nothing is not a pass.
    const stored = await page.evaluate(() => localStorage.getItem('bitcryptic_fish'));
    expect(stored).toContain('Trout');
  });

  test('house decorating pushes', async ({ page }) => {
    await clearPushes(page);
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).saveHouseState({ items: [{ id: 'lamp', x: 10, y: 10 }], wallColor: '#7a6a5a', floorColor: '#8b7355' });
    });
    expect((await pushes(page)).length).toBeGreaterThanOrEqual(1);
  });

  test('terminal codes push', async ({ page }) => {
    await clearPushes(page);
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).saveUnlockedCode('TESTCODE');
    });
    expect((await pushes(page)).length).toBeGreaterThanOrEqual(1);
  });

  test('cheese collecting pushes', async ({ page }) => {
    await clearPushes(page);
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).saveCheeseCollection([{ name: 'Cheddar Cipherwheel', rarity: 'common' }]);
    });
    expect((await pushes(page)).length).toBeGreaterThanOrEqual(1);
  });

  test('settings, audio, accessibility and achievements all push', async ({ page }) => {
    await clearPushes(page);

    // These modules are script-scoped consts, not window properties (see the
    // smoke suite's note), so reach them by eval rather than window lookup.
    await page.evaluate(() => {
      eval('BCWAudio.setMusicVolume(0.4)');
      eval('BCWAccessibility.setFontSize(1.1)');
      eval('BCWAchievements.checkFishing({ caught: true, weight: 1, rarity: "common", uniqueSpecies: 1 })');
    });

    const log = await pushes(page);
    expect(log.length, 'settings/audio/a11y/achievement writers scheduled no push').toBeGreaterThanOrEqual(3);
    expect(log.every((p) => p.game === 'world')).toBe(true);
  });

  test('story progress still pushes (regression on the one writer that always did)', async ({ page }) => {
    await clearPushes(page);
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.saveProgress({ version: 2, unlockedLocations: ['docks'], completedStories: ['docks'], introComplete: true, storyProgress: {} });
    });
    expect((await pushes(page)).length).toBeGreaterThanOrEqual(1);
  });

  test('guests never break — no BCSync at all is a no-op, not a crash', async ({ page, context }) => {
    // Fresh page WITHOUT the mock: window.BCSync is undefined, which is the
    // real state for every signed-out player. Optional chaining must absorb it.
    const guest = await context.newPage();
    const errors: string[] = [];
    guest.on('pageerror', (e) => errors.push(e.message));
    guest.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });
    await guest.addInitScript(() => localStorage.setItem('bcw_tutorial_complete', '1'));
    await guest.goto('/index.html', { waitUntil: 'load' });

    await guest.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.saveFishCatch({ name: 'Trout', emoji: '🐟', rarity: 'common', weight: 1.2 });
      w.saveUnlockedCode('GUESTCODE');
      w.saveCheeseCollection([]);
    });

    expect(errors, `guest play errored: ${errors.join(' | ')}`).toEqual([]);
    expect(await guest.evaluate(() => localStorage.getItem('bitcryptic_fish'))).toContain('Trout');
    await guest.close();
  });
});
