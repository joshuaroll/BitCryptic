#!/usr/bin/env node
// Parse every shipped script. This repo has NO build step — index.html and the
// js/ modules are served to players byte-for-byte as they sit in git — so there
// is no compiler between a typo and production. A single stray brace in the
// 9.8k-line monolith is a blank island for everyone.
//
// Covers three surfaces:
//   1. js/*.js       — the IIFE singleton modules
//   2. scenes/*.js   — the SVG story scenes
//   3. index.html    — inline <script> blocks, which are the largest surface
//                      and the one no other tool looks at
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const failures = [];
let checked = 0;

// --- 1 + 2. standalone script files -----------------------------------------
for (const dir of ['js', 'scenes']) {
  let entries;
  try {
    entries = readdirSync(dir).filter((f) => f.endsWith('.js'));
  } catch {
    continue; // directory absent in this checkout
  }
  for (const f of entries) {
    const path = `${dir}/${f}`;
    try {
      execFileSync(process.execPath, ['--check', path], { stdio: 'pipe' });
      checked++;
    } catch (err) {
      failures.push({ path, message: (err.stderr?.toString() || err.message).split('\n').slice(0, 4).join('\n') });
    }
  }
}

// --- 3. inline <script> blocks in index.html --------------------------------
// `node --check` cannot read HTML, so each block is extracted to a temp file and
// parsed on its own. Blocks with a src= are external references, not inline code;
// non-JS types (application/json, text/template) are not scripts at all.
const html = readFileSync('index.html', 'utf8');
const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const tmp = mkdtempSync(join(tmpdir(), 'bcw-syntax-'));

let m;
let blockIndex = 0;
while ((m = scriptRe.exec(html)) !== null) {
  const attrs = m[1] || '';
  const body = m[2] || '';
  blockIndex++;

  if (/\bsrc\s*=/i.test(attrs)) continue; // external file, checked above
  const typeMatch = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i);
  const type = typeMatch?.[1]?.toLowerCase();
  if (type && !/^(text\/javascript|application\/javascript|module)$/.test(type)) continue;
  if (!body.trim()) continue;

  // Line number of this block's opening tag, so an error points at the real
  // place in index.html rather than at a temp file.
  const startLine = html.slice(0, m.index).split('\n').length;

  const file = join(tmp, `block-${blockIndex}.${type === 'module' ? 'mjs' : 'js'}`);
  writeFileSync(file, body);
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    checked++;
  } catch (err) {
    const raw = (err.stderr?.toString() || err.message).split('\n').slice(0, 4).join('\n');
    failures.push({
      path: `index.html (inline block #${blockIndex}, starts near line ${startLine})`,
      message: raw,
    });
  }
}

if (failures.length) {
  console.error(`\n${failures.length} script(s) failed to parse:\n`);
  for (const f of failures) {
    console.error(`::error file=${f.path.split(' ')[0]}::Syntax error in ${f.path}`);
    console.error(`--- ${f.path} ---`);
    console.error(f.message);
    console.error('');
  }
  console.error('This repo ships source directly to players — a parse error here is a blank page in production.');
  process.exit(1);
}

console.log(`Parsed ${checked} script(s) across js/, scenes/ and index.html inline blocks. All valid.`);
