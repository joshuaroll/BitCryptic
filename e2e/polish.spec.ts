// 2026-11-16 polish pass.
//  - The opening wakes the player once, and the Dock Keeper arrives before he
//    teaches. Those two beats moved from the docks story into the intro, so
//    the docks story now opens on the note.
//  - A bookmark made against the old beat order restarts the story rather
//    than resuming past its puzzle.
//  - The wreck's name stays off the map until the player has been down.
//  - The new look is the default (approved 2026-11-16); ?look=classic is the
//    way back, and in classic the look files do nothing.
import { test, expect } from '@playwright/test';

async function boot(page, opts: any = {}) {
  await page.addInitScript((o) => {
    if (sessionStorage.getItem('__seeded')) return;
    sessionStorage.setItem('__seeded', '1');
    if (o.progress) localStorage.setItem('bitcryptic_progress', JSON.stringify(o.progress));
    localStorage.setItem('bcw_orientation', 'landscape');
    localStorage.setItem('bcw_text_pace', 'instant');
    localStorage.setItem('bcw_tutorial_p1', 'true');
    localStorage.setItem('bcw_tutorial_p2', 'true');
  }, opts);
  await page.goto('/index.html' + (opts.query || ''));
  await page.waitForTimeout(400);
}

const EARLY = { version: 2, introComplete: true, unlockedLocations: ['docks'], completedStories: [], storyProgress: {} };

test('the keeper is introduced before he teaches, and the player wakes once', async ({ page }) => {
  await boot(page, { progress: EARLY });
  const beats = await page.evaluate(`INTRO_STORY.steps.map(function (s) { return { speaker: s.speaker, text: s.text, scene: s.scene || null }; })`) as any[];
  const arrives = beats.findIndex((b) => b.text.includes('A weathered dock keeper steps out'));
  const teaches = beats.findIndex((b) => b.text.includes("You'll get clues here"));
  expect(arrives).toBeGreaterThan(-1);
  expect(teaches).toBeGreaterThan(arrives);
  // No keeper line before he has walked on.
  expect(beats.slice(0, arrives).every((b) => b.speaker !== 'Dock Keeper')).toBe(true);
  // One waking, in the whole opening.
  const docks = await page.evaluate(`STORIES.docks.steps.map(function (s) { return s.text; })`) as string[];
  const wakes = [...beats.map((b) => b.text), ...docks].filter((t) => /open your eyes|before you can open them/.test(t));
  expect(wakes).toHaveLength(1);
  // The lesson choice still lands on the closing beat.
  const choice = await page.evaluate(`INTRO_STORY.steps.find(function (s) { return s.type === 'choice'; }).choices.map(function (c) { return INTRO_STORY.steps[c.next].type; })`);
  expect(choice).toEqual(['complete', 'complete']);
});

test('moved beats keep their art, and the docks story opens on the note', async ({ page }) => {
  await boot(page, { progress: EARLY });
  // Every scene a step names exists.
  const missing = await page.evaluate(`[INTRO_STORY].concat(Object.values(STORIES)).reduce(function (acc, st) {
    st.steps.forEach(function (s) { if (s.scene && !STORY_SCENES[s.scene]) acc.push(s.scene); }); return acc; }, [])`);
  expect(missing).toEqual([]);
  await page.evaluate(`startStory('docks')`);
  await expect(page.locator('#story-text')).toContainText('A lantern flickers at the end of the pier');
  await expect(page.locator('#story-scene svg')).toHaveCount(1);
  // The puzzle still leads to the keeper's welcome, not past it.
  const after = await page.evaluate(`(function () { var p = STORIES.docks.steps.find(function (s) { return s.type === 'puzzle'; }); return STORIES.docks.steps[p.next].text; })()`);
  expect(after).toContain('"Welcome." He grins');
});

test('a bookmark from the old beat order restarts the story', async ({ page }) => {
  // Old docks story: index 3 was the beat BEFORE the puzzle. In the new order
  // index 3 is the beat after it, so resuming there would skip the clue.
  await boot(page, { progress: { ...EARLY, storyProgress: { docks: { visited: [0, 1, 2, 3] } } } });
  await page.evaluate(`startStory('docks')`);
  await expect(page.locator('#story-progress-label')).toHaveText('1 / 5');
  // A bookmark made now carries the story's rev and does resume.
  await page.evaluate(`gotoStep(1)`);
  await page.evaluate(`closeStory()`);
  await page.evaluate(`startStory('docks')`);
  await expect(page.locator('#story-progress-label')).toHaveText('2 / 5');
});

test('the wreck is not named on the map until the player has been down', async ({ page }) => {
  await boot(page, { progress: EARLY });
  await expect(page.locator('#map-wreck-label')).toBeHidden();
  await page.evaluate(`localStorage.setItem('bcw_wreck_seen', '1')`);
  await page.reload();
  await page.waitForTimeout(400);
  await expect(page.locator('#map-wreck-label')).toBeVisible();
});

test('the Anagram Engine sets the clue, not the story beat around it', async ({ page }) => {
  const done = ['docks', 'forest', 'cafe', 'adventure', 'library', 'workshop', 'beach', 'cove', 'pond', 'lair'];
  await boot(page, { progress: { ...EARLY, unlockedLocations: done, completedStories: done } });
  const clues = await page.evaluate(`collectSolvedClues().map(function (c) { return c.clue; })`) as string[];
  expect(clues.length).toBeGreaterThan(10);
  expect(clues).toContain('Ache stirred after beginning of boating for a sandy shore (5)');
  for (const c of clues) {
    expect(c).not.toMatch(/<br>|"/);
    expect(c.length).toBeLessThan(80);
    expect(c).toMatch(/\(\d+(?:[,-]\d+)*\)\.?$/);
  }
  // Every one is a clue the game already ships, letter for letter.
  const foreign = await page.evaluate(`collectSolvedClues().filter(function (c) {
    return !Object.values(STORIES).some(function (st) { return st.steps.some(function (s) { return (s.text || '').includes(c.clue); }); });
  }).length`);
  expect(foreign).toBe(0);
});

test('exploration badges arrive when the location does, not on the next visit', async ({ page }) => {
  await boot(page, { progress: { ...EARLY, unlockedLocations: ['docks', 'forest', 'cafe', 'town'], completedStories: ['docks', 'forest', 'cafe'] } });
  const badges = () => page.evaluate(() => JSON.parse(localStorage.getItem('bcw_achievements') || '{}').unlocked || []);
  expect(await badges()).not.toContain('explorer');
  await page.evaluate(`unlockLocation('adventure')`);
  expect(await badges()).toContain('explorer');
  await page.evaluate(`unlockLocation('pond')`);
  expect(await badges()).toContain('secret_finder');
});

test('the new look is the default, points at the next story, and classic is the way back', async ({ page }) => {
  await boot(page, { progress: { ...EARLY, unlockedLocations: ['docks', 'forest'], completedStories: ['docks'] } });
  await expect(page.locator('body')).toHaveClass(/look-next/);
  await expect(page.locator('#hud-anatomy')).toBeHidden();
  await expect(page.locator('#ln-objective')).toContainText('Enigma Forest');
  await expect(page.locator('#loc-forest')).toHaveClass(/ln-next/);
  await expect(page.locator('#ln-sea')).toHaveCount(1);
  // Nothing that moves every frame may live inside the island SVG: there it
  // repaints the whole map (14 fps without a GPU, measured 2026-11-16).
  await expect(page.locator('#ln-foam .ln-foam')).toHaveCount(2);
  await expect(page.locator('#ln-weather .ln-cloud-shadow')).toHaveCount(3);
  await expect(page.locator('svg.island-svg .ln-foam, svg.island-svg .ln-cloud-shadow')).toHaveCount(0);
  // Finishing the story moves the pointer on.
  await page.evaluate(`completeStory('forest')`);
  await expect(page.locator("#ln-objective")).toContainText("Cryptic Cafe", { timeout: 15000 });
  await expect(page.locator("#loc-cafe")).toHaveClass(/is-open/);

  // Classic: nothing injected, the old HUD back, and it holds for the tab.
  await page.goto('/index.html?look=classic');
  await page.waitForTimeout(400);
  await expect(page.locator('body')).not.toHaveClass(/look-next/);
  await expect(page.locator('#ln-objective')).toHaveCount(0);
  await expect(page.locator('#ln-sea')).toHaveCount(0);
  await expect(page.locator('#hud-anatomy')).toBeVisible();
  await page.goto('/index.html');
  await page.waitForTimeout(400);
  await expect(page.locator('body')).not.toHaveClass(/look-next/);
  await page.goto('/index.html?look=next');
  await page.waitForTimeout(400);
  await expect(page.locator('body')).toHaveClass(/look-next/);
});
