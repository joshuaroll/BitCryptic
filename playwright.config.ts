import { defineConfig, devices } from '@playwright/test';

// The island game has NO build step — these files are served to players exactly
// as they sit in the repo. So the test server just serves the repo root, which
// is the closest possible match to production.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['html', { open: 'never' }], ['list']] : 'list',
  use: {
    baseURL: 'http://localhost:4174',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // `npx serve` would add a dependency; python's stdlib server is already
    // available on the runner and serves static files with correct MIME types.
    command: 'python -m http.server 4174',
    url: 'http://localhost:4174/index.html',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
