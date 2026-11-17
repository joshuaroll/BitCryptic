import { defineConfig, devices } from '@playwright/test';

// The island game has NO build step — these files are served to players exactly
// as they sit in the repo. So the test server just serves the repo root, which
// is the closest possible match to production.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  // Every test loads the whole island (a 17k-line page and ~70 scripts), and
  // the story-walk tests then click through a dozen beats. Headless Chromium
  // has no GPU, so a costly map effect turns every click into seconds: on
  // 2026-11-16 a foam animation inside the island SVG took tests from 5s to
  // 50s and they timed out at random. A healthy test here runs in 2 to 7s.
  // If they creep past 20s, measure the page's frame rate before blaming the
  // suite. The limit is generous so a busy machine alone never fails a run.
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: process.env.CI ? [['html', { open: 'never' }], ['list']] : 'list',
  use: {
    baseURL: 'http://localhost:4174',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // A dependency-free Node server (scripts/serve.cjs). It replaced python's
    // stdlib server, whose one-connection-per-file HTTP/1.0 made six parallel
    // workers queue behind each other and showed up as random failures.
    command: 'node scripts/serve.cjs 4174',
    url: 'http://localhost:4174/index.html',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
