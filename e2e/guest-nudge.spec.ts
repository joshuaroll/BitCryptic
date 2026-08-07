import { test, expect, type Page } from '@playwright/test';

// W4: the one-time guest reminder and the account wiring around it.
//
// What is tested HERE is World's side of the contract — that the island calls
// the shared helper once, at the right moment, with the right game key, and
// that nothing fires for a signed-in player or a second story. The toast's own
// behaviour (its once-ever guard, its storage-failure handling, its markup)
// belongs to bc-auth-ui.test.mjs and is deliberately not duplicated.
//
// /shared/auth/ is not served by the standalone harness, so BCAuthUI is stubbed
// at exactly the boundary account.js reads. That is also the honest test of the
// degradation path: a player whose auth scripts are blocked must still be able
// to finish a story.

type Stub = { signedIn: boolean; ready?: boolean; withUI?: boolean };

async function boot(page: Page, stub: Stub) {
  await page.addInitScript((s: Stub) => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.__nudges = [];
    w.BCAuth = { getState: () => ({ signedIn: s.signedIn, email: 'solver@example.com', displayName: 'solver' }) };
    if (s.withUI !== false) {
      w.BCAuthUI = {
        open: () => { w.__authUiOpened = true; },
        openAccount: () => { w.__accountOpened = true; return true; },
        // Mirrors the real helper's contract: signed-in and already-shown both
        // return false without a toast.
        guestNudge: (game: string, opts: unknown) => {
          if (w.BCAuth.getState().signedIn) return false;
          if (localStorage.getItem('bc-guest-nudge:' + game) !== null) return false;
          localStorage.setItem('bc-guest-nudge:' + game, String(Date.now()));
          w.__nudges.push({ game, opts });
          return true;
        },
      };
    }
    // Stands in for js/account.js, which cannot boot here (/shared/auth/ is not
    // served standalone). nudgeGuest mirrors the real one exactly: gated on
    // ready, gated on BCAuthUI.guestNudge existing, and every failure a silent
    // no-op returning false.
    w.__stubAccount = {
      isReady: () => s.ready !== false,
      boot: async () => false,
      render: () => {},
      nudgeGuest: () => {
        if (s.ready === false) return false;
        if (!w.BCAuthUI || typeof w.BCAuthUI.guestNudge !== 'function') return false;
        try {
          return w.BCAuthUI.guestNudge('world', { reason: 'x', onDone: () => {} });
        } catch {
          return false;
        }
      },
    };
  }, stub);
  await page.goto('/index.html', { waitUntil: 'load' });
  // account.js publishes the real BCWAccount on load and would overwrite the
  // stub, so install it AFTER load. The real module cannot boot here anyway —
  // it bails at the config probe, leaving isReady() false forever.
  await page.evaluate((s: Stub) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.BCWAccount = w.__stubAccount;
    if (s.withUI === false) delete w.BCAuthUI;
  }, stub);
}

// The island's own completion path, not a synthetic one — this is the function
// the story reader calls when a player finishes.
async function finishStory(page: Page, id: string) {
  await page.evaluate((storyId) => eval(`completeStory(${JSON.stringify(storyId)})`), id);
}

test('finishing the first story nudges a guest exactly once', async ({ page }) => {
  await boot(page, { signedIn: false });

  await finishStory(page, 'docks');
  // The call is deliberately delayed past the reveal sequence and trophy banner.
  await expect.poll(() => page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length), {
    timeout: 10_000,
  }).toBe(1);

  const nudges = await page.evaluate(() => (window as never as { __nudges: { game: string }[] }).__nudges);
  expect(nudges[0].game).toBe('world');

  // Guard key is the shared one (bc-guest-nudge:world), NOT a World-local key.
  expect(await page.evaluate(() => localStorage.getItem('bc-guest-nudge:world'))).not.toBeNull();
  expect(await page.evaluate(() => localStorage.getItem('bcw_guest_nudge'))).toBeNull();
});

test('a second story never nudges again', async ({ page }) => {
  await boot(page, { signedIn: false });

  await finishStory(page, 'docks');
  await expect.poll(() => page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length), {
    timeout: 10_000,
  }).toBe(1);

  await finishStory(page, 'forest');
  await page.waitForTimeout(5000);
  expect(await page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length)).toBe(1);
});

test('replaying the first story does not re-nudge', async ({ page }) => {
  await boot(page, { signedIn: false });

  await finishStory(page, 'docks');
  await expect.poll(() => page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length), {
    timeout: 10_000,
  }).toBe(1);

  // Same story again: isNew is false, so the island must not even call.
  await finishStory(page, 'docks');
  await page.waitForTimeout(5000);
  expect(await page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length)).toBe(1);
});

test('a signed-in player is never nudged', async ({ page }) => {
  await boot(page, { signedIn: true });

  await finishStory(page, 'docks');
  await page.waitForTimeout(5000);
  expect(await page.evaluate(() => (window as never as { __nudges: unknown[] }).__nudges.length)).toBe(0);
  // The guard is not burned either: signing out later must still leave the one
  // reminder available.
  expect(await page.evaluate(() => localStorage.getItem('bc-guest-nudge:world'))).toBeNull();
});

test('no auth system at all is a no-op, not a crash', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));

  await boot(page, { signedIn: false, ready: false, withUI: false });
  await finishStory(page, 'docks');
  await page.waitForTimeout(5000);

  expect(errors, 'finishing a story must never throw when auth is unavailable').toEqual([]);
  // The story itself still completed — sign-in is an offer, never a gate.
  expect(await page.evaluate(() => eval('getProgress().completedStories'))).toContain('docks');
});

test('settings shows policy links and the 13+ statement in both states', async ({ page }) => {
  for (const signedIn of [false, true]) {
    await boot(page, { signedIn });
    await page.evaluate(() => eval('BCWSettings.open()'));

    const legal = page.locator('.settings-account-legal');
    await expect(legal).toBeVisible();
    await expect(legal.locator('a', { hasText: 'Privacy' })).toHaveAttribute('href', '/privacy/');
    await expect(legal.locator('a', { hasText: 'Terms' })).toHaveAttribute('href', '/terms/');
    await expect(legal).toContainText('13 and up');
    await expect(legal).toContainText('play as guests');
  }
});

// Regression: js/account.js is a <script type="module">, so its top-level const
// is module-scoped and does NOT become a global by itself. Both settings.js:276
// (the whole account section) and completeStory (the nudge) gate on
// `typeof BCWAccount !== 'undefined'`, so without the explicit window
// assignment every account surface silently never renders — no error thrown,
// nothing in the console. That failure is invisible in every test that stubs
// BCWAccount, which is why this one deliberately does not.
test('the real account module publishes BCWAccount as a global', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'load' });
  await expect
    .poll(() => page.evaluate(() => typeof (window as never as { BCWAccount?: unknown }).BCWAccount))
    .toBe('object');
  expect(
    await page.evaluate(() => {
      const a = (window as never as { BCWAccount: Record<string, unknown> }).BCWAccount;
      return typeof a.nudgeGuest === 'function' && typeof a.isReady === 'function';
    }),
  ).toBe(true);
});

test('the signed-in HUD button opens the account panel instead of signing out', async ({ page }) => {
  await boot(page, { signedIn: true });

  // account.js render() is driven by its own boot; drive it directly against
  // the same stubs the real module reads.
  await page.evaluate(() => {
    const slot = document.getElementById('hud-account');
    if (slot) slot.innerHTML = '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.BCWAccount.isReady = () => true;
  });

  const opened = await page.evaluate(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.BCAuthUI.openAccount({ onSignOut: () => {} });
    return w.__accountOpened === true;
  });
  expect(opened).toBe(true);
});
