// Canon's questline: the Listening Post stories exist and are reachable.
//
// enterListeningPost() called startStory('hidden') against a story that was
// never in STORIES, and startStory's guard made that a silent no-op: the
// quest flag was consumed, the panel closed, nothing opened. The wreck had
// the identical fault (f4abcb8). These tests pin the story to the door it
// opens from, the cold-save repair, the approved LIAM clue's path into the
// terminal, and the two achievement fixes that shipped alongside.
import { test, expect, type Page } from '@playwright/test';

const INTRO_TITLE = 'Why does a man keep notes on his own brother?';

async function boot(page: Page, opts: { quest?: object; codes?: string[]; achievements?: object } = {}) {
  await page.addInitScript((o) => {
    localStorage.setItem('bitcryptic_progress', JSON.stringify({
      introComplete: true,
      unlockedLocations: ['docks', 'forest', 'cafe', 'town', 'beach'],
      completedStories: ['docks', 'forest', 'cafe', 'town'],
    }));
    localStorage.setItem('bitcryptic_unlocked_codes', JSON.stringify(o.codes || []));
    if (o.quest) localStorage.setItem('bcw_quest', JSON.stringify(o.quest));
    if (o.achievements) localStorage.setItem('bcw_achievements', JSON.stringify(o.achievements));
    localStorage.setItem('bcw_orientation', 'landscape');
    localStorage.setItem('bcw_tutorial_complete', '1');
    localStorage.setItem('bcw_tutorial_p1', 'true');
    localStorage.setItem('bcw_tutorial_p2', 'true');
    localStorage.setItem('bcw_text_pace', 'instant');
    localStorage.setItem('bc-guest-nudge:world', '1');
  }, opts);
  await page.goto('/index.html');
  await page.waitForTimeout(400);
}

async function downTheGrate(page: Page) {
  await page.locator('#loc-town').click();
  const grate = page.locator('#detail-actions .detail-action-btn', { hasText: 'Down the Grate' });
  await expect(grate).toBeVisible();
  await grate.click();
}

async function continueStory(page: Page, times = 1) {
  for (let i = 0; i < times; i++) {
    const btn = page.locator('#story-continue');
    await expect(btn).toBeVisible();
    await btn.click();
  }
}

test('typing HIDDEN leads to the intro story, not to nothing', async ({ page }) => {
  await boot(page, { codes: ['HIDDEN'] });
  await downTheGrate(page);
  await expect(page.locator('#story-panel')).toHaveClass(/active/);
  await expect(page.locator('#story-title')).toHaveText(INTRO_TITLE);
  await expect(page.locator('#story-text')).toContainText('the fountain stops');
});

test('a save that burned the quest flag before the story existed still gets the intro', async ({ page }) => {
  await boot(page, { codes: ['HIDDEN'], quest: { started: true, done: [], seed: 7, told: [] } });
  await downTheGrate(page);
  await expect(page.locator('#story-title')).toHaveText(INTRO_TITLE);
});

test('a right answer with a line attached shows the line, then continues', async ({ page }) => {
  await boot(page, { codes: ['HIDDEN'] });
  await downTheGrate(page);
  await continueStory(page, 4);
  const watching = page.locator('.story-choice-btn', { hasText: 'watching him on a screen' });
  await expect(watching).toBeVisible();
  await watching.click();
  await expect(page.locator('#story-choices .story-wrong-reaction')).toContainText('thought about the ratio');
  await continueStory(page, 1);
  await expect(page.locator('#story-text')).toContainText('Remembering is not the problem');
});

test('the LIAM clue solves, the intro completes, and the first errand is set', async ({ page }) => {
  await boot(page, { codes: ['HIDDEN'] });
  await downTheGrate(page);
  await continueStory(page, 4);
  await page.locator('.story-choice-btn', { hasText: 'So make him remember' }).click();
  await continueStory(page, 4);
  await expect(page.locator('#story-text')).toContainText('mail returned (4)');
  await page.locator('.story-puzzle-input').fill('liam');
  await page.locator('.story-puzzle-submit').click();
  await expect(page.locator('#story-text')).toContainText('held note released');
  const done = page.locator('#story-complete-btn');
  await expect(done).toBeVisible();
  await expect(done).toHaveText('Take the first errand');
  await done.click();
  // The briefing follows on its own, and the errand button then knows it did.
  await expect(page.locator('#story-title')).toHaveText('Errand 1, Scramble Shores');
  await expect(page.locator('#story-complete-btn')).toHaveText('Errand 1: Scramble Shores');
  await page.locator('#story-complete-btn').click();
  await expect(page.locator('#detail-title')).toHaveText(/Scramble Shores/);
  const quest = await page.evaluate(() => JSON.parse(localStorage.getItem('bcw_quest') || '{}'));
  expect(quest.briefed).toEqual(['rope']);
  const progress = await page.evaluate(() => JSON.parse(localStorage.getItem('bitcryptic_progress') || '{}'));
  expect(progress.completedStories).toContain('hidden');
  expect(progress.completedStories).toContain('hidden_m1');
});

test('the terminal accepts LIAM as the lair code', async ({ page }) => {
  await boot(page, { codes: [] });
  await page.locator('#loc-town').click();
  await page.locator('#detail-actions .detail-action-btn', { hasText: 'Use Terminal' }).click();
  const input = page.locator('#terminal-input');
  await expect(input).toBeVisible();
  await input.fill('liam');
  await input.press('Enter');
  await expect(page.locator('#terminal-panel')).toContainText('CODE ACCEPTED');
  const codes = await page.evaluate(() => JSON.parse(localStorage.getItem('bitcryptic_unlocked_codes') || '[]'));
  expect(codes).toContain('LR');
});

test('Completionist is awarded to a save that already holds every other badge', async ({ page }) => {
  // The meta badge was only ever evaluated inside unlock(), so a save that
  // arrived whole (import, cloud pull, or a release that added badges after
  // the player had them all) could show 30/31 forever.
  const ids = await (async () => {
    await boot(page);
    // Top-level const bindings, not window properties: evaluate by name.
    return page.evaluate('BCWAchievements.getAll().map((a) => a.id)') as Promise<string[]>;
  })();
  const everyOther = ids.filter((id: string) => id !== 'completionist');
  await boot(page, { achievements: { unlocked: everyOther, puzzleStreak: 0, totalPuzzlesSolved: 30 } });
  await expect.poll(async () =>
    page.evaluate(() => JSON.parse(localStorage.getItem('bcw_achievements') || '{}').unlocked)
  ).toContain('completionist');
  await expect(page.locator('.achievement-notif-name').last()).toHaveText('Completionist');
});

test('sharing from anywhere earns Social Butterfly', async ({ page }) => {
  await boot(page);
  await page.evaluate('BCWSharing.shareProgress()');
  await expect.poll(async () =>
    page.evaluate(() => JSON.parse(localStorage.getItem('bcw_achievements') || '{}').unlocked)
  ).toContain('first_share');
  // The link travels in the copy button, not in visible text.
  const copy = await page.locator('.share-btn-copy').getAttribute('onclick');
  expect(copy).toContain('bitcryptic.org/world');
  expect(copy).not.toContain('vercel.app');
});
