#!/usr/bin/env node
// Scan tracked files for credentials that must never enter git.
//
// Specific to this repo's real risk: once player accounts exist, the Supabase
// service-role key bypasses Row Level Security entirely — one committed
// `sb_secret_...` exposes every player's email and save data. The anon key is
// safe by design (it ships to every browser), so it is NOT treated as a leak.
//
// Adapted from the DraftShare implementation, which caught a real leaked key.
//
// Scans tracked files only — .env.local is gitignored and must stay that way,
// which the workflow asserts separately.
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync } from 'node:fs';

const sh = (cmd, args) =>
  execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();

// Real credential shapes, not generic "password" words — false positives train
// people to bypass the check with --no-verify.
const PATTERNS = [
  { name: 'Supabase service-role key', re: /\bsb_secret_[A-Za-z0-9_-]{10,}/ },
  { name: 'Supabase personal access token', re: /\bsbp_[a-f0-9]{40,}/ },
  { name: 'AWS access key id', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'Google OAuth client secret', re: /\bGOCSPX-[A-Za-z0-9_-]{20,}/ },
  { name: 'Resend API key', re: /\bre_[A-Za-z0-9]{20,}/ },
  { name: 'Vercel token', re: /\bvercel_[A-Za-z0-9]{20,}/ },
  { name: 'GitHub personal access token', re: /\bghp_[A-Za-z0-9]{36,}/ },
  { name: 'Private key block', re: /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/ },
  // A JWT whose payload claims the service_role — the legacy Supabase key shape.
  { name: 'Supabase service_role JWT', re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, verify: verifyServiceRoleJwt },
];

// matchAll() requires the /g flag. PATTERNS are declared without it (they read
// better that way and are reused for single tests), so add it per use.
const globalize = (re) => (re.flags.includes('g') ? re : new RegExp(re.source, re.flags + 'g'));

// Only flag a JWT if it actually decodes to a service_role token. Bare JWT shapes
// appear in fixtures and docs constantly; the role claim is what matters.
function verifyServiceRoleJwt(match) {
  const payload = match.split('.')[1];
  if (!payload) return false;
  try {
    const json = Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    return /"role"\s*:\s*"service_role"/.test(json);
  } catch {
    return false;
  }
}

// Placeholders the CI workflow itself sets.
const ALLOWLIST = [
  /sb_secret_placeholder/,
  /sb_publishable_placeholder/,
];

// Skip generated files and true binaries. The NUL-byte and 2 MB guards below
// already reject binaries, so the extension list only covers formats that never
// hold hand-written config.
const SKIP_PATH =
  /(^|\/)(package-lock\.json|build\/|dist\/|game\/|node_modules\/|graphify-out\/|backups\/)|\.(png|jpg|jpeg|gif|webp|ico|svg|woff2?|ttf|eot|pdf|zip|sqlite3?)$/i;

// This scanner's own source obviously contains every pattern it looks for.
const SELF = 'scripts/ci/scan-secrets.mjs';

// --- 1. the working tree -----------------------------------------------------
const files = sh('git', ['ls-files']).split('\n').filter(Boolean);
const findings = [];

for (const file of files) {
  if (file === SELF || SKIP_PATH.test(file)) continue;
  let size;
  try {
    size = statSync(file).size;
  } catch {
    continue; // deleted-but-tracked in this checkout
  }
  if (size > 2 * 1024 * 1024) continue;

  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    continue; // binary
  }
  // Binary that slipped past the extension filter (NUL byte = not text).
  if (content.indexOf(String.fromCharCode(0)) !== -1) continue;

  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const p of PATTERNS) {
      // Allowlist the MATCHED TOKEN, never the whole line: a line-scoped test
      // means appending `// sb_secret_placeholder` to any line would hide a real
      // key on it. And iterate ALL matches — a non-global `match()` returns only
      // the first, so a placeholder before a real key would shield it.
      for (const m of line.matchAll(globalize(p.re))) {
        if (ALLOWLIST.some((a) => a.test(m[0]))) continue;
        if (p.verify && !p.verify(m[0])) continue;
        findings.push({ file, line: i + 1, name: p.name, sample: m[0].slice(0, 12) + '…' });
        break; // one finding per pattern per line is enough signal
      }
    }
  });
}

// --- 2. the PR's own commit range -------------------------------------------
// Scanning only the working tree misses the most common real leak: a key added
// in one commit and "removed" in a later one. The file is gone from the tip, so
// ls-files never sees it — but it is permanently in history and the key is burned.
// Requires fetch-depth: 0, which the workflow sets.
const baseRef = process.env.GITHUB_BASE_REF;
// On `push` there is no base ref. Fall back to the pushed range so a direct push
// to main is not a blind spot.
const eventBefore = process.env.GITHUB_EVENT_BEFORE;
let range = null;
if (baseRef) {
  execFileSync('git', ['fetch', '--no-tags', 'origin', baseRef], { stdio: 'ignore' });
  range = `origin/${baseRef}..HEAD`;
} else if (eventBefore && !/^0{40}$/.test(eventBefore)) {
  // All-zero SHA means a branch's first push, which has no meaningful range.
  range = `${eventBefore}..HEAD`;
}

if (range) {
  try {
    // `git diff base...HEAD` shows only the NET change, so a file added in one
    // commit and deleted in a later one cancels out to nothing. Walk every commit
    // so transient additions are still caught.
    const diff = execFileSync(
      'git',
      ['log', '-p', '--unified=0', '--no-color', range],
      { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 }
    );
    let currentFile = '';
    for (const line of diff.split('\n')) {
      if (line.startsWith('+++ b/')) {
        currentFile = line.slice(6);
        continue;
      }
      if (!line.startsWith('+') || line.startsWith('+++')) continue;
      if (currentFile === SELF || SKIP_PATH.test(currentFile)) continue;
      const added = line.slice(1);
      for (const p of PATTERNS) {
        for (const m of added.matchAll(globalize(p.re))) {
          if (ALLOWLIST.some((a) => a.test(m[0]))) continue; // per-match, see above
          if (p.verify && !p.verify(m[0])) continue;
          // Don't double-report something the working-tree pass already found.
          if (findings.some((f) => f.file === currentFile && f.name === p.name)) break;
          findings.push({
            file: currentFile,
            line: 0,
            name: `${p.name} (in this PR's history)`,
            sample: m[0].slice(0, 12) + '…',
          });
          break;
        }
      }
    }
  } catch (err) {
    // A failed history scan must not silently pass — it is the higher-value check.
    console.error('Could not scan PR history for secrets:', err.message);
    process.exit(1);
  }
}

if (findings.length) {
  console.error(`Found ${findings.length} probable credential(s) in tracked files:\n`);
  for (const f of findings) {
    console.error(`::error file=${f.file},line=${f.line}::${f.name} (${f.sample})`);
    console.error(`  ${f.file}:${f.line}  ${f.name}  ${f.sample}`);
  }
  console.error(
    '\nRemoving it in a later commit is NOT enough — it stays in git history.\n' +
      'Rotate the credential, then purge it from history before merging.'
  );
  process.exit(1);
}

console.log(`Scanned ${files.length} tracked files. No credentials found.`);
