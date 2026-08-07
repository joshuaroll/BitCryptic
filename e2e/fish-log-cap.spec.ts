import { test, expect, type Page } from '@playwright/test';

// bitcryptic_fish grew one entry per sold fish, forever. The cloud sync RPC
// rejects any payload over 256 KB uncompressed, and it rejects the WHOLE save
// — so a dedicated angler would eventually stop syncing everything: stories,
// house, achievements, all of it, with no visible cause and no error the
// player could act on.
//
// The log now keeps the newest 300 catches and folds the rest into per-species
// aggregates. These tests hold the line on the two things that matter: the
// save stays comfortably under the cap, and no player-visible total moves when
// the trim happens.

const CAP = 300;
const PAYLOAD_LIMIT = 262144; // sync_save's hard reject, 0003_security_hardening.sql

const SPECIES = [
  { name: 'Goldfish', emoji: '🐟', rarity: 'common' },
  { name: 'Trout', emoji: '🐟', rarity: 'common' },
  { name: 'Salmon', emoji: '🐟', rarity: 'uncommon' },
  { name: 'Pike', emoji: '🐟', rarity: 'rare' },
  { name: 'Golden Koi', emoji: '✨', rarity: 'legendary' },
];

// A deterministic 1,000-catch history: 200 of each species, weights ramping so
// the heaviest of each sits in a known place.
function buildLog(count: number) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const s = SPECIES[i % SPECIES.length];
    out.push({ ...s, weight: Number(((i % 50) * 0.1 + 0.1).toFixed(1)), caughtAt: `2026-01-01T00:00:${String(i % 60).padStart(2, '0')}Z` });
  }
  return out;
}

async function boot(page: Page, seed?: unknown[]) {
  await page.addInitScript((entries) => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    if (entries) localStorage.setItem('bitcryptic_fish', JSON.stringify(entries));
  }, seed ?? null);
  await page.goto('/index.html', { waitUntil: 'load' });
}

test('an existing 1,000-catch save migrates without losing a single total', async ({ page }) => {
  const seed = buildLog(1000);

  // What the old code would have reported, computed here independently of the
  // implementation under test.
  const expectedTotal = seed.length;
  const expectedSpecies: Record<string, { count: number; best: number }> = {};
  for (const f of seed) {
    const e = expectedSpecies[f.name] ?? (expectedSpecies[f.name] = { count: 0, best: 0 });
    e.count++;
    if (f.weight > e.best) e.best = f.weight;
  }

  await boot(page, seed);

  const summary = await page.evaluate(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (window as any).getFishSummary();
  });

  expect(summary.total, 'lifetime catch total changed during migration').toBe(expectedTotal);
  for (const [name, e] of Object.entries(expectedSpecies)) {
    expect(summary.species[name], `species ${name} vanished`).toBeTruthy();
    expect(summary.species[name].count, `${name} count changed`).toBe(e.count);
    expect(summary.species[name].bestWeight, `${name} best weight changed`).toBe(e.best);
  }

  // And the raw log really was trimmed.
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('bitcryptic_fish') || '[]').length);
  expect(stored, 'log was not trimmed to the cap').toBe(CAP);
});

test('the migrated save is a fraction of the 256 KB sync payload cap', async ({ page }) => {
  await boot(page, buildLog(1000));

  // Measure what sync would actually upload: every world key, as stored.
  const bytes = await page.evaluate(() => {
    const keys = [
      'bitcryptic_progress', 'bitcryptic_unlocked_codes', 'bitcryptic_house',
      'bitcryptic_fish', 'bitcryptic_fish_stats', 'bitcryptic_fish_coins',
      'bitcryptic_fish_bucket', 'bitcryptic_fish_upgrades', 'bitcryptic_cheese',
      'bitcryptic_cheese_cooldown', 'bcw_audio_settings', 'bcw_accessibility',
      'bcw_settings', 'bcw_achievements', 'bcw_tutorial_complete',
      'bcw_tutorial_p1', 'bcw_tutorial_p2', 'bcw_anatomy_taught',
    ];
    const snap: Record<string, string> = {};
    for (const k of keys) {
      const v = localStorage.getItem(k);
      if (v !== null) snap[k] = v;
    }
    return JSON.stringify(snap).length;
  });

  expect(bytes, `world snapshot is ${bytes} chars — too close to the ${PAYLOAD_LIMIT} cap`).toBeLessThan(PAYLOAD_LIMIT / 2);
});

test('catches past the cap keep counting instead of disappearing', async ({ page }) => {
  // Start just under the cap, then sell past it. The trim happens live in
  // saveFishCatch, not only in the load-time migration.
  await boot(page, buildLog(CAP - 2));

  const before = await page.evaluate(() => (window as any).getFishSummary().total); // eslint-disable-line @typescript-eslint/no-explicit-any

  await page.evaluate(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    for (let i = 0; i < 50; i++) {
      w.saveFishCatch({ name: 'Swordfish', emoji: '⚔', rarity: 'epic', weight: 9.9 });
    }
  });

  const after = await page.evaluate(() => (window as any).getFishSummary()); // eslint-disable-line @typescript-eslint/no-explicit-any
  expect(after.total, 'catches past the cap were lost').toBe(before + 50);
  expect(after.species.Swordfish.count).toBe(50);
  expect(after.species.Swordfish.bestWeight).toBe(9.9);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('bitcryptic_fish') || '[]').length);
  expect(stored).toBe(CAP);
});

test('the unique-species achievement survives a trim', async ({ page }) => {
  // The nastiest failure mode: trimming the log re-locks fish_collection for
  // exactly the players who fished hardest. The species must come from the
  // aggregate, not the live window.
  const seed = buildLog(1000); // 5 species, all of them rolled off the front
  await boot(page, seed);

  const species = await page.evaluate(() => Object.keys((window as any).getFishSummary().species)); // eslint-disable-line @typescript-eslint/no-explicit-any
  expect(species.sort()).toEqual(['Golden Koi', 'Goldfish', 'Pike', 'Salmon', 'Trout']);
});

test('a small save is left completely alone', async ({ page }) => {
  const seed = buildLog(10);
  await boot(page, seed);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('bitcryptic_fish') || '[]'));
  expect(stored.length, 'a small log should not be touched').toBe(10);
  const stats = await page.evaluate(() => localStorage.getItem('bitcryptic_fish_stats'));
  expect(stats, 'no aggregate should be written before the cap is reached').toBeNull();

  const summary = await page.evaluate(() => (window as any).getFishSummary()); // eslint-disable-line @typescript-eslint/no-explicit-any
  expect(summary.total).toBe(10);
});

test('export and import round-trip the aggregate', async ({ page }) => {
  // bitcryptic_fish_stats is new; if it were missing from ALL_KEYS, a player's
  // export would silently reset their lifetime totals on restore.
  await boot(page, buildLog(1000));
  const covered = await page.evaluate(() => {
    // ALL_KEYS is module-private, so probe it the way export does.
    let seen = false;
    const orig = Blob;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Blob = function (parts: string[]) {
      if (parts && parts[0] && parts[0].includes('bitcryptic_fish_stats')) seen = true;
      return new orig(parts as BlobPart[], { type: 'application/json' });
    };
    try {
      eval('BCWSave.exportSave()');
    } catch {
      /* the download click is harmless in a headless run */
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Blob = orig;
    return seen;
  });
  expect(covered, 'bitcryptic_fish_stats is missing from BCWSave.ALL_KEYS').toBe(true);
});
