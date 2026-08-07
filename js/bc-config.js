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

export const BC_SUPABASE_URL = 'https://REPLACE_ME.supabase.co';
export const BC_SUPABASE_ANON_KEY = 'sb_publishable_REPLACE_ME';

export const BC_AUTH_CONFIGURED =
  !BC_SUPABASE_URL.includes('REPLACE_ME') && !BC_SUPABASE_ANON_KEY.includes('REPLACE_ME');
