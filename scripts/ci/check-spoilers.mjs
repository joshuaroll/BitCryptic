#!/usr/bin/env node
// Guard the spoiler boundary.
//
// This game ships as raw static files, so anything Vercel uploads is readable by
// any player who opens devtools. `.vercelignore` is the ONLY thing keeping
// puzzle answers, secret terminal codes and design notes off the public site,
// and CLAUDE.md states those exclusions must never be removed.
//
// Deleting a line from .vercelignore is a one-character change with no visible
// effect in review and a permanent effect in production: the answers directory
// simply appears on the live site. This check makes that change fail CI.
import { readFileSync, existsSync } from 'node:fs';

const FILE = '.vercelignore';

// Paths that hold answers, secret codes, or unshipped content. Established by
// the file's own header comment: "notes and data contain puzzle answers and
// secret codes". Removing any of these is a spoiler leak, not a refactor.
const REQUIRED = [
  'data/',            // clue archive + drafts: every answer, plus review notes
  'notes/',           // design notes
  'backups/',         // historical copies of the above
  'src/',             // the separate React daily game, not part of this deploy
  'concept/',         // unshipped concept work
  'map_inspo/',       // reference art
  'scenes/mockups/',  // unshipped scene drafts
  'index_v1.html',    // superseded build, still contains old puzzle content
];

if (!existsSync(FILE)) {
  console.error(`::error::${FILE} is missing — every dev file would deploy to the public site.`);
  process.exit(1);
}

// Ignore comments and blank lines; compare on trimmed text. A trailing-slash
// mismatch ("data" vs "data/") still counts as present, since Vercel treats
// both as the directory.
const lines = readFileSync(FILE, 'utf8')
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

const normalized = new Set(lines.map((l) => l.replace(/\/$/, '')));
const missing = REQUIRED.filter((r) => !normalized.has(r.replace(/\/$/, '')));

if (missing.length) {
  console.error(`\n${missing.length} spoiler-protection exclusion(s) removed from ${FILE}:\n`);
  for (const m of missing) {
    console.error(`::error file=${FILE}::"${m}" is no longer excluded — it would deploy publicly`);
    console.error(`  - ${m}`);
  }
  console.error(
    '\nThese paths contain puzzle answers, secret codes or unshipped content.\n' +
      'Anything Vercel uploads is readable by any player. Restore the exclusions.'
  );
  process.exit(1);
}

console.log(`${FILE}: all ${REQUIRED.length} spoiler-protection exclusions present.`);
