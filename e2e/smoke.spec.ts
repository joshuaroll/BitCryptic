import { test, expect, type Page } from '@playwright/test';

// Modules the game depends on at runtime. Each is loaded by a RELATIVE <script>
// tag, which is exactly what broke in production on 2026-07-10: Vercel served
// /world without a trailing slash, so all 24 relative refs resolved to the site
// root and 404'd. The page still rendered (the inline monolith ran), so nothing
// looked wrong — the island simply had no stories, audio, saves or achievements.
//
// Asserting the globals EXIST is what catches that class of failure; asserting
// the page renders does not.
const REQUIRED_GLOBALS = [
  'BCWSave',
  'BCWAudio',
  'BCWAchievements',
  'BCWSettings',
  'BCWAccessibility',
  'BCWHints',
  'BCWTutorial',
  'BCWAnalytics',
] as const;

function watchConsole(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  return errors;
}

// The tutorial overlay covers the map on a fresh visit.
async function skipTutorial(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem('bcw_tutorial_complete', '1');
  });
}

test('loads the island with no console errors', async ({ page }) => {
  const errors = watchConsole(page);
  await skipTutorial(page);
  await page.goto('/index.html');

  await expect(page).toHaveTitle(/Bit Cryptic World/i);
  await expect(page.locator('#map-container')).toBeVisible();
  expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([]);
});

test('loads every js/ module — the trailingSlash regression guard', async ({ page }) => {
  await skipTutorial(page);
  // The js/ <script> tags sit at the END of index.html (line ~9880), long after
  // #map-container renders, so wait for the document's own load event.
  await page.goto('/index.html', { waitUntil: 'load' });

  for (const name of REQUIRED_GLOBALS) {
    // Probe the BARE IDENTIFIER, not window[name]. Every js/ module declares
    // itself as `const BCWSave = (() => {...})()`, and a top-level `const` is a
    // script-scoped binding that never becomes a window property — so
    // `window.BCWSave` is undefined even when the module loaded perfectly.
    // (Verified: bare `typeof BCWSave` is "object" while `typeof window.BCWSave`
    // is "undefined". STORY_SCENES uses `var`, which is why it appears on window
    // and misled the first version of this test.)
    const kind = await page.evaluate((g) => {
      try {
        return eval(`typeof ${g}`) as string;
      } catch {
        return 'unreachable';
      }
    }, name);
    expect(kind, `${name} is not defined — its js/ module failed to load`).not.toBe('undefined');
    expect(kind, `${name} threw on access`).not.toBe('unreachable');
  }
});

test('loads the story scenes', async ({ page }) => {
  await skipTutorial(page);
  await page.goto('/index.html');

  // 93 keys as of the 2026-07-10 production verification. Asserting a floor
  // rather than the exact number so adding a scene does not fail the build,
  // while a scenes/ load failure (which drops it to ~0) still does.
  const count = await page.evaluate(
    () => Object.keys((window as unknown as { STORY_SCENES?: object }).STORY_SCENES ?? {}).length
  );
  expect(count, 'STORY_SCENES is empty — scenes/*.js failed to load').toBeGreaterThanOrEqual(80);
});

test('requests no missing resources', async ({ page }) => {
  const failed: string[] = [];
  page.on('response', (r) => {
    if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`);
  });
  await skipTutorial(page);
  await page.goto('/index.html');
  await expect(page.locator('#map-container')).toBeVisible();
  expect(failed, `failed requests: ${failed.join(' | ')}`).toEqual([]);
});

test('renders the island locations', async ({ page }) => {
  await skipTutorial(page);
  await page.goto('/index.html');
  // 13+ locations per PROJECT_STATUS; a floor guards against the map rendering
  // empty while the container itself still appears.
  expect(await page.locator('.location').count()).toBeGreaterThanOrEqual(10);
});

test('opens a location without errors', async ({ page }) => {
  const errors = watchConsole(page);
  await skipTutorial(page);
  await page.goto('/index.html');

  await page.locator('#loc-docks').click();
  // Something modal should appear; the exact panel varies by progress state.
  await page.waitForTimeout(600);
  expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([]);
});

test('survives a corrupted save', async ({ page }) => {
  // BCWSave has corruption recovery; this proves it actually runs. Matters more
  // once saves arrive from the cloud and can be truncated in transit.
  const errors = watchConsole(page);
  await page.addInitScript(() => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    localStorage.setItem('bitcryptic_progress', '{not valid json');
    localStorage.setItem('bcw_achievements', 'null');
    localStorage.setItem('bitcryptic_house', '[[[');
  });
  await page.goto('/index.html', { waitUntil: 'load' });

  await expect(page.locator('#map-container')).toBeVisible();
  // Bare identifier, not window — see the module-loading test above.
  const saveOk = await page.evaluate(() => {
    try {
      return eval('typeof BCWSave') !== 'undefined';
    } catch {
      return false;
    }
  });
  expect(saveOk, 'BCWSave missing after loading a corrupted save').toBe(true);
  expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([]);
});

test('is usable at a phone viewport', async ({ page }) => {
  const errors = watchConsole(page);
  await skipTutorial(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/index.html');

  await expect(page.locator('#map-container')).toBeVisible();
  expect(errors, `console errors: ${errors.join(' | ')}`).toEqual([]);
});
