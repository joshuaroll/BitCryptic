import { test, expect, type Page } from '@playwright/test';

// W5: the export and delete controls that a launch collecting real email
// addresses is not allowed to ship without, plus the guest line that tells a
// signed-out player where their progress actually lives.
//
// The auth modules load from /shared/auth/, which the standalone test harness
// does not serve — the same situation as the repo opened directly off disk. So
// these tests fake BCAuth/BCWAccount at the boundary the settings panel
// actually reads, which is also the honest test of "does this degrade when
// there is no account system at all".

type Stub = { signedIn: boolean; email?: string; ready?: boolean };

async function bootWithAuth(page: Page, stub: Stub) {
  await page.addInitScript((s: Stub) => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.__deleted = false;
    w.__exported = false;
    w.BCAuth = {
      getState: () => ({ signedIn: s.signedIn, email: s.email, displayName: s.email }),
      exportMyData: async () => {
        w.__exported = true;
        return { profile: { email: s.email }, saves: [] };
      },
      deleteMyAccount: async () => {
        w.__deleted = true;
        return { dataDeleted: true, authRowDeleted: true };
      },
    };
    w.BCAuthUI = { open: () => { w.__authUiOpened = true; } };
    w.BCWAccount = { isReady: () => s.ready !== false, boot: async () => false, render: () => {} };
  }, stub);
  await page.goto('/index.html', { waitUntil: 'load' });
  await page.evaluate(() => eval('BCWSettings.open()'));
}

test('a guest is told where their progress lives, and offered a way out', async ({ page }) => {
  await bootWithAuth(page, { signedIn: false });

  const line = page.locator('.settings-account-line');
  await expect(line).toBeVisible();
  const text = await line.textContent();

  expect(text).toContain('only on this device');
  // Brand law: never "ciphers" or "decrypt", and never a gate.
  expect(text?.toLowerCase()).not.toContain('cipher');
  expect(text?.toLowerCase()).not.toContain('decrypt');

  await expect(page.locator('#settings-account button', { hasText: 'Sign in' })).toBeVisible();
  // A guest must not see account-only destructive controls.
  await expect(page.locator('#settings-account button', { hasText: 'Delete my account' })).toHaveCount(0);
});

test('a signed-in player gets export and delete', async ({ page }) => {
  await bootWithAuth(page, { signedIn: true, email: 'solver@example.com' });

  await expect(page.locator('.settings-account-line')).toContainText('solver@example.com');
  await expect(page.locator('#settings-account button', { hasText: 'Download my data' })).toBeVisible();
  await expect(page.locator('#settings-account button', { hasText: 'Delete my account' })).toBeVisible();
  await expect(page.locator('#settings-account button', { hasText: 'Manage account' })).toBeVisible();
});

test('download my data calls the export RPC', async ({ page }) => {
  await bootWithAuth(page, { signedIn: true, email: 'solver@example.com' });
  const dl = page.locator('#settings-account button', { hasText: 'Download my data' });
  await dl.scrollIntoViewIfNeeded();
  await dl.click();
  await page.waitForTimeout(300);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(await page.evaluate(() => (window as any).__exported)).toBe(true);
});

test('deleting an account takes two confirmations and can be backed out of', async ({ page }) => {
  await bootWithAuth(page, { signedIn: true, email: 'solver@example.com' });
  const del = page.locator('#settings-account button', { hasText: 'Delete my account' });
  await del.scrollIntoViewIfNeeded();
  await del.click();

  const dialog = page.locator('.game-modal-overlay[role="dialog"]');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.game-modal-title')).toHaveText('Delete your account?');

  // The copy has to say the local save survives — "delete" sitting next to
  // save buttons reads as both, and it is not both.
  await expect(dialog.locator('.game-modal-body')).toContainText('device stays put');

  await dialog.locator('.game-modal-btn.secondary').click();
  await page.waitForTimeout(300);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(await page.evaluate(() => (window as any).__deleted), 'cancel still deleted the account').toBe(false);
});

test('confirming twice actually deletes', async ({ page }) => {
  await bootWithAuth(page, { signedIn: true, email: 'solver@example.com' });
  const del = page.locator('#settings-account button', { hasText: 'Delete my account' });
  await del.scrollIntoViewIfNeeded();
  await del.click();

  await page.locator('.game-modal-overlay[role="dialog"]', { hasText: 'Delete your account?' })
    .locator('.game-modal-btn.danger').click();
  await page.locator('.game-modal-overlay[role="dialog"]', { hasText: 'Last chance' })
    .locator('.game-modal-btn.danger').click();

  await page.waitForTimeout(400);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(await page.evaluate(() => (window as any).__deleted)).toBe(true);
});

test('no auth configured renders no account controls at all', async ({ page }) => {
  // The island served standalone. A dead "Sign in" button is worse than none.
  await page.addInitScript(() => localStorage.setItem('bcw_tutorial_complete', '1'));
  await page.goto('/index.html', { waitUntil: 'load' });
  await page.evaluate(() => eval('BCWSettings.open()'));

  await expect(page.locator('#settings-account')).toBeAttached();
  expect(await page.locator('#settings-account button').count(), 'account buttons rendered with no auth available').toBe(0);
});

test('ALL_KEYS covers the tutorial and anatomy flags', async ({ page }) => {
  // These are real progress the cloud already syncs, but export used to drop
  // them and reset used to leave them behind — so a "full reset" silently
  // re-taught nothing and a restored export lost the anatomy lesson.
  await page.addInitScript(() => {
    localStorage.setItem('bcw_tutorial_complete', '1');
    localStorage.setItem('bcw_tutorial_p1', 'true');
    localStorage.setItem('bcw_tutorial_p2', 'true');
    localStorage.setItem('bcw_anatomy_taught', 'true');
  });
  await page.goto('/index.html', { waitUntil: 'load' });

  const exported = await page.evaluate(() => {
    let captured = '';
    const orig = Blob;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Blob = function (parts: string[]) {
      captured = parts && parts[0] ? parts[0] : '';
      return new orig(parts as BlobPart[], { type: 'application/json' });
    };
    try {
      eval('BCWSave.exportSave()');
    } catch {
      /* the download click is harmless headless */
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Blob = orig;
    return captured;
  });

  expect(exported).toContain('bcw_tutorial_p1');
  expect(exported).toContain('bcw_tutorial_p2');
  expect(exported).toContain('bcw_anatomy_taught');
});
