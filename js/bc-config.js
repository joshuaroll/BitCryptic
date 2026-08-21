/* ============================================================
   BIT CRYPTIC WORLD — PUBLIC CLIENT CONFIG

   Must stay in step with bitcryptic-org/assets/js/bc-config.js. Both hold the
   same two public values; this copy exists because the island is also served
   standalone (opened directly, local static server, E2E suite) where the site
   root does not exist.

   These values are PUBLIC. The Supabase anon key is designed to ship to every
   browser: it identifies the project, it does not grant access. Row Level
   Security decides what any request may read or write.

   The service_role key must NEVER appear here — it bypasses RLS entirely, and
   this file is served to every player. CI scans for it
   (scripts/ci/scan-secrets.mjs).

   While the placeholders below are unchanged, the island runs exactly as it
   does today: no accounts, no network, local saves only.
   ============================================================ */

// Real project values, wired 2026-08-21 (M1 step 8). The anon/publishable key
// is public by design — it ships in the bundle to every browser, so committing
// it is correct; Row Level Security is what protects player data.
//
// Byte-identical to bitcryptic-org/assets/js/bc-config.js. check:config fails
// the build on drift: half-configured is silent, and one game quietly dropping
// to guest-only looks like a design decision rather than a bug.
export const BC_SUPABASE_URL = 'https://cbtaiplanaeievnvpiii.supabase.co';
export const BC_SUPABASE_ANON_KEY = 'sb_publishable_kJ6FvIv200VEbTfMUecpnw_2TOprJyE';

export const BC_AUTH_CONFIGURED =
  !BC_SUPABASE_URL.includes('REPLACE_ME') && !BC_SUPABASE_ANON_KEY.includes('REPLACE_ME');
