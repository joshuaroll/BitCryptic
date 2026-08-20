// ═══════════════════════════════════
//  ACCOUNT - Bit Cryptic World
//  Boots the shared auth + sync modules and adds the HUD sign-in control.
//
//  Sign-in is an OFFER, never a gate. The island is fully playable signed out
//  and always will be, so every path here degrades to a no-op rather than
//  blocking play: no Supabase project configured, offline, storage disabled,
//  script blocked — the game carries on exactly as it does today.
//
//  The shared modules live at /shared/auth/ and are byte-identical to the ones
//  Adventure loads, so one account genuinely means one implementation.
// ═══════════════════════════════════

const BCWAccount = (() => {
  let ready = false;
  let booted = false;

  // Loading auth must never delay the island appearing, so everything here runs
  // after load and failures are swallowed.
  async function boot() {
    if (booted) return false;
    booted = true;

    // Config is loaded from a SIBLING file (js/bc-config.js) rather than the
    // site root. Both copies hold the same public values, and the deploy step
    // keeps them in step.
    //
    // Root-absolute (/assets/js/bc-config.js) was the obvious choice and is
    // wrong: the island is regularly served standalone — the repo opened
    // directly, a local static server, the E2E suite — and there that path 404s.
    // The browser logs that 404 to the console no matter how the request is
    // made (import or fetch, GET or HEAD), which is a real error in a game whose
    // own test suite treats any console error as a failure. A relative sibling
    // path exists in every context the island runs in.
    let cfg;
    try {
      cfg = await import('./bc-config.js');
    } catch {
      return false; // no config shipped — guest play only, which is fine
    }

    try {
      if (!cfg.BC_AUTH_CONFIGURED) return false;

      // Loaded from the site root so both games share one implementation.
      await import('/shared/auth/bc-auth.js');
      await import('/shared/auth/bc-sync.js');
      await import('/shared/auth/bc-auth-ui.js');

      // Self-hosted, NOT a CDN — the site's CSP is `script-src 'self'
      // 'unsafe-inline'`, which refuses esm.sh outright. See the note in
      // bitcryptic-org/auth/callback/index.html. Absolute path because this
      // only runs on the deployed site (the config probe above already
      // returned when served standalone).
      const { createClient } = await import('/assets/js/vendor/supabase.js');

      await BCAuth.init({
        url: cfg.BC_SUPABASE_URL,
        anonKey: cfg.BC_SUPABASE_ANON_KEY,
        createClient,
      });

      let wasSignedIn = BCAuth.getState().signedIn;
      if (wasSignedIn) await BCSync.reconcile('world');

      BCAuth.subscribe((s) => {
        if (s.signedIn && !wasSignedIn) {
          BCSync.reconcile('world').then(announce).catch(() => {});
        }
        wasSignedIn = s.signedIn;
        render();
      });

      // A closing tab must not strand the last few minutes of play.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') BCSync.flush().catch(() => {});
      });

      // Safety net. Every writer site schedules its own debounced push, but a
      // missed one (a new feature, a code path nobody thought about) would
      // silently strand progress on this device — the exact failure this whole
      // system exists to prevent. A minute is cheap insurance: push() no-ops on
      // an unchanged fingerprint before any network call, so an idle tab costs
      // one JSON.stringify per minute and zero requests.
      setInterval(() => {
        if (BCAuth.getState().signedIn) BCSync.push('world').catch(() => {});
      }, 60_000);

      ready = true;
      render();
      return true;
    } catch (err) {
      console.warn('[account] auth unavailable, continuing as guest:', err && err.message);
      return false;
    }
  }

  // Tell the player what sync actually did. A merge that silently moves their
  // progress is alarming precisely because it is silent.
  //
  // Self-contained rather than reusing the achievements notifier: that one is a
  // private function shaped around an achievement object (icon/title/desc) and
  // says "Achievement Unlocked!", which would be wrong and confusing here.
  function announce(result) {
    if (!result) return;
    const MESSAGES = {
      'uploaded-local': 'Progress saved to your account.',
      'downloaded-cloud': 'Progress restored from your account.',
      'local-won': 'Kept this device’s progress. The other copy is backed up.',
      'cloud-won': 'Restored newer progress from your account.',
    };
    const message = MESSAGES[result.status];
    if (!message) return;

    const el = document.createElement('div');
    el.className = 'account-toast';
    el.setAttribute('role', 'status');
    el.textContent = message;
    document.body.appendChild(el);

    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 400);
    }, 4200);
  }

  // The one ACTIVE guest reminder (W4 / S6 rule 2). Called from completeStory in
  // index.html at the first story completion — the first moment the player has
  // something they would be sorry to lose.
  //
  // The once-ever guard, the signed-in check and the storage-failure handling
  // all live in the shared helper (bc-auth-ui.js guestNudge, guard key
  // bc-guest-nudge:world, deliberately outside bc-sync's GAME_KEYS so it never
  // follows an account to a new device). World does NOT hand-roll a second
  // toast: one implementation means the island and the tower cannot drift into
  // nudging the same player twice with two different voices.
  //
  // Every failure path is a silent no-op. A guest who is not offered an account
  // has lost nothing; a guest interrupted mid-reveal by a broken toast has.
  function nudgeGuest() {
    if (!ready) return false;
    if (typeof BCAuthUI === 'undefined' || typeof BCAuthUI.guestNudge !== 'function') return false;
    try {
      return BCAuthUI.guestNudge('world', {
        reason: 'Sign in and pick up where you left off, on any device.',
        onDone: () => render(),
      });
    } catch {
      return false;
    }
  }

  function render() {
    const slot = document.getElementById('hud-account');
    if (!slot) return;

    // Nothing configured or still booting: show no control at all rather than
    // one that cannot work.
    if (!ready || typeof BCAuth === 'undefined') {
      slot.innerHTML = '';
      return;
    }

    const state = BCAuth.getState();
    slot.innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'hud-account-btn';
    btn.type = 'button';

    if (state.signedIn) {
      btn.textContent = state.displayName || 'Account';
      btn.title = 'Signed in as ' + (state.email || state.displayName) + ' — click to sign out';
      btn.setAttribute('aria-label', 'Signed in. Open your account.');
      // Opens the shared account panel (rename / export / delete / sign out /
      // policy links) rather than signing out on the spot. A single click that
      // silently ends the session was always the wrong default: it is the one
      // destructive thing on this control and it had no confirmation, while the
      // things a player actually needs — take my data, delete my account — had
      // no entry point at all.
      btn.addEventListener('click', () => {
        if (typeof BCAuthUI === 'undefined' || typeof BCAuthUI.openAccount !== 'function') return;
        BCAuthUI.openAccount({ onSignOut: render, onDeleted: render });
      });
    } else {
      btn.textContent = 'Sign in';
      btn.title = 'Sign in to carry your progress between the island and the tower';
      btn.addEventListener('click', () => {
        BCAuthUI.open({
          reason: 'Sign in and pick up where you left off, on any device.',
          onGuest: () => {},
        });
      });
    }

    slot.appendChild(btn);
  }

  return { boot, render, nudgeGuest, isReady: () => ready };
})();

// This file is loaded as <script type="module"> (index.html) because it uses
// dynamic import() for the config probe and the shared auth modules. That makes
// the const above MODULE-scoped, not a global — unlike every other js/ module
// here, which is a classic script whose top-level const does become one.
//
// So publish it explicitly. Two consumers read it off window and would both
// fail silently without this: settings.js:276 gates the whole account section
// (export / delete / policy links) on `typeof BCWAccount !== 'undefined'`, and
// index.html's completeStory gates the guest nudge the same way. Both would
// simply never render — no error, no clue why.
window.BCWAccount = BCWAccount;

// Boot after the page has settled so auth never competes with the island for
// first paint.
if (document.readyState === 'complete') {
  BCWAccount.boot();
} else {
  window.addEventListener('load', () => BCWAccount.boot());
}
