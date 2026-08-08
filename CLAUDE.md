# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bit Cryptic World is an interactive puzzle adventure island game with cryptic crossword clues. It has **two separate applications** in one repo:

1. **Island Map Game** (`index.html` at root, ~10,200 lines) — A standalone vanilla JS/HTML/CSS game where players explore an SVG island map, visit locations, solve cryptic clues, read stories, fish, decorate a house, and unlock achievements. Core systems live in `js/` as IIFE singletons. Served as a static site under `bitcryptic.org/world`.

> **Launch is governed by `..\RELEASE_PLAN.md`** (approved 2026-08-07) — read it before planning work here, and `..\PROJECT_STATUS.md` for what currently exists. World ships first (milestone M6). As of 2026-08-07 optional accounts, cloud sync, Playwright E2E and a 6-job CI all exist and are committed on `main`, unpushed. New player-facing copy is batched for Joshua's G3 sign-off in `..\COPY_REVIEW_G3.md` — do not ship new strings before it is signed.

2. **Cryptic Croc Daily Game** (`src/` directory) — A React 18 + Tailwind CSS app (Create React App) with a daily cryptic clue puzzle featuring a crocodile mascot, plus a Word Play Guide page. Deployed to GitHub Pages.

3. **`game/`** — A pre-built Vite bundle of a previous version. Referenced by `game/index.html` with hashed asset filenames.

## Build and Dev Commands

```bash
npm run verify     # THE GATE: check:syntax + check:clues + check:spoilers
npm run test:e2e   # Playwright, 46 tests across 6 specs
npm start          # Run the React daily-game dev server (port 3000)
npm run build      # Build the React daily game to /build
npm test           # Run Jest tests (react-scripts test, watch mode)
npm run deploy     # Build + deploy the React daily game to GitHub Pages
```

The root `index.html` island game has no build step — edit and open directly or serve statically.

### Tests and CI (they exist — do not assume otherwise)

`.github/workflows/ci.yml` runs 6 jobs; branch protection points at the roll-up **`ci`** job:

| Job | Checks |
|---|---|
| syntax | every shipped script parses — 29 of them, including the inline blocks inside the monolith |
| content | 12 clues validated + the clue-freeze proof |
| spoilers | all 8 `.vercelignore` exclusions still present |
| e2e | 46 Playwright tests: `smoke`, `hardening`, `sync-coverage`, `guest-nudge`, `account-settings`, `fish-log-cap` |
| security | secret scan (`service_role`, `GOCSPX-`, `re_`) |
| ci | roll-up; fails if any of the above fails |

Run `npm run verify` after any change to the monolith, `js/` or `scenes/` — a syntax error inside an inline block is otherwise invisible until the page is loaded.

## Architecture: Island Map Game

### Module Pattern
All core systems in `js/` use the IIFE singleton pattern, exposing globals:
- `BCWAudio` — Web Audio API synthesized sounds (no audio files), location-based music themes
- `BCWSettings` — Settings panel UI with tabs, syncs with other systems
- `BCWAccessibility` — ARIA labels, keyboard navigation, reduced motion, high contrast, font scaling
- `BCWAchievements` — Category-based unlock system with toast notifications
- `BCWSave` — localStorage export/import with version tracking; owns `ALL_KEYS` and the 300-entry fish-log cap
- `BCWAnalytics` — Privacy-first anonymous event tracking
- `BCWHints` — Progressive hints with difficulty-scaled timers
- `BCWTutorial` — Guided onboarding overlay, split into phase 1 (orient/docks) and phase 2 (map movement)
- `BCWDesigner` — In-game SVG element editor (Ctrl+Shift+D)
- `BCWAccount` — Sign-in entry point and account surfaces; published as a global so they can render
- `BCWClueAnatomy` / `clueAnnotations.js` — Interactive clue-anatomy engine (see below)
- `bc-config.js` — Supabase URL + anon key. **Two copies exist** (here and `bitcryptic-org/assets/js/`) and they must agree; the platform repo's `check:config` fails the build if they drift.

### Accounts and cloud sync

Sign-in and cloud saves are **not** implemented in this repo. Both games load the
shared modules from the deploy repo at runtime by root-absolute path
(`/shared/auth/bc-auth.js`, `bc-sync.js`, `bc-auth-ui.js`); the source lives in
`..\bitcryptic-org\shared\auth\` and its tests run in that repo's CI.

**The platform sync contract:** *every* code path that persists progress to
localStorage must also schedule a debounced `window.BCSync?.schedulePush('world')`.
If you add a new writer, add the push — `e2e/sync-coverage.spec.ts` is what
catches you when you forget, and a missed site means a player silently loses that
category of progress on another device.

Accounts are always optional. The game must remain fully playable signed out;
the guest nudge fires once, ever, via the shared `BCAuthUI.guestNudge('world')`
helper (guard key `bc-guest-nudge:world`) — never hand-roll a second toast.

### Story Scene System
Scene files in `scenes/` populate a global `STORY_SCENES` object. Keys follow `{location}_{step}` pattern (e.g., `forest_0`, `beach_1`). Each scene is an SVG string with animated backgrounds, narrative text, puzzle content, and choices.

### Persistence
All game state uses localStorage with prefixed keys:
- `bitcryptic_` prefix: progress, unlocked_codes, house, fishing
- `bcw_` prefix: audio_settings, accessibility, settings, achievements, analytics, tutorial_complete, tutorial_p1, tutorial_p2, anatomy_taught

`BCWSave`'s `ALL_KEYS` list is the canonical set — export, import, deletion and
cloud sync all read from it. **Adding a new persisted key means adding it to
`ALL_KEYS`**, or it silently escapes backup, export and account deletion.

Story progress uses save schema **v2** (per-story beat position, so leaving and
re-entering a story resumes where you were) with a lossless v1 migration.

### CSS
- `js/enhancements.css` — Mobile responsiveness (breakpoints: 768px, 480px), accessibility styles, settings/achievements/hints/tutorial panel styles
- Root `index.html` `<style>` block — All island map styles (locations, panels, HUD, toolbar, minimap, animations)
- Touch targets are 44px minimum; `@media (pointer: coarse)` adjustments for mobile

### Key UI Classes
- `.location` — Clickable island map spots
- `.detail-panel`, `.story-panel`, `.terminal-panel` — Modal dialogs
- `.toolbar`, `.toolbar-btn` — Quick-access location bar
- `.minimap` — Viewport indicator
- `.reduced-motion`, `.high-contrast` — Body-level preference classes
- `.keyboard-nav *:focus` — Gold outline for keyboard users

## Architecture: React App (src/)

- `src/App.js` — HashRouter with two routes: `/` (CrypticCrocGame) and `/indicators` (WordPlayIndicators)
- `src/bitCrypticGame.js` — Main daily clue game component
- `src/components/WordPlayIndicators.js` — Cryptic clue type reference guide
- `src/components/ui/button.jsx` — Shadcn-style button using class-variance-authority
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge)
- Tailwind configured with CSS variable-based HSL color system in `tailwind.config.js`

## Editing Scenes

Scene SVGs use `<animate>` tags, gradient defs, and blur filters. When editing:
- Maintain the `STORY_SCENES['location_step']` assignment pattern
- SVGs use `viewBox` for responsive scaling
- Test animations in-browser — CSS `@keyframes` and SVG `<animate>` are both used
- Designer mode (Ctrl+Shift+D) allows real-time SVG element positioning in the running game

## CLUE APPROVAL RULE (read this first)

**Never add, compose, or reword a cryptic clue anywhere in this project without Joshua's explicit approval.** Propose the clue text with its full parse and wait for sign-off before editing files. Mechanical bug fixes are fine; clue content is not. Bonus-challenge clues must never duplicate clues used in the stories. All clue decisions since 2026-07-03 are recorded in `data/clue-drafts-2026-07-03.json` (approvals, vetoes, rewordings, reserved/spare clues).

**This is now machine-enforced.** `data/clue-freeze.json` hashes every live clue,
and `npm run check:clues` fails CI with a before/after diff on any change to clue
text or answers. That is deliberate. When Joshua *has* approved a change:

```bash
node scripts/ci/check-clues.mjs --update   # then commit the manifest WITH the change
```

Never run `--update` to make a red build go green. A failing freeze check means
either you changed a clue you should not have, or you have an approval to record.

## Clue Anatomy Engine

`js/clueAnatomy.js` + `js/clueAnnotations.js` let a player tap a word in a clue to
reveal its role (definition = amber, indicator = mint, fodder = sand), then tap
again for a deeper explanation, with a one-time coach mark.

The critical property: **clue strings are never modified.** Annotations are stored
separately, keyed to the clue, and the roles are wrapped in at render time. That
is what keeps the freeze proof above intact. Do not "improve" this by baking
markup into a clue string.

Only the **DINE** sample is signed off and live; that is the launch scope. The
other 52 annotations sit in `data/anatomy-review-2026-07.md` awaiting Joshua's
sign-off, and un-annotated clues render exactly as they always did.

## Deployment

The island game is live at **https://bitcryptic.org/world**. The old
`joshuaroll.github.io/BitCryptic/` and the `BitCryptic-deploy/` gh-pages repo no
longer serve the game — they are branded 302 redirects only. Do not publish there.

**Never hand-copy the deploy, and never run `vercel` from this repo.** The site is
composed from the source repos by one script in the deploy repo:

```bash
cd ..\bitcryptic-org
npm run check:compose    # dry run — writes nothing, shows what would change
npm run deploy:world     # composes world + shared into bitcryptic-org/world/
```

It copies from an explicit manifest (not a wildcard), runs the deploy gauntlet
in-process, and then **prints** `vercel --prod` and stops. Joshua runs that
command. Hand-copying is what previously shipped `world/js/` without account.js,
bc-config.js, clueAnatomy.js and clueAnnotations.js — four silent 404s and no
sign-in button on a page that otherwise looked fine — and what let 480 KB of
`scenes/mockups` accumulate in the deploy.

`.vercelignore` excludes notes/, data/, backups/, src/, and every other dev file
containing answers or secret codes — **never remove those exclusions**; it is the
only thing keeping puzzle answers off the live site, and `check:spoilers` fails
CI if any of the 8 go missing.

## Bonus Challenge System

`showClueChallenge(opts)` (index.html, near showGameModal) renders a solvable clue inside a modal: brand-styled input, stepped "Need a hint?" reveals, parse shown only on solving. Every post-story location action uses it — no action may print a clue's answer outright. The observatory's Stargaze challenge also embeds a draggable telescope sky (`telescopeHtml()` + `initTelescope()`).

## Daily Clue System (React app — currently deprioritized)

- Clue database: `src/data/dailyClues.js` — 30 verified clues with hints, types, and difficulty ratings
- Selection: `getDailyClue(dateString)` uses days-since-epoch modulo the pool, so every clue is reached in rotation; rollover is local midnight (component remounts on date change)
- Persistence: `bitcryptic_daily_{YYYY-MM-DD}` in localStorage saves solved state, attempts, guess history
- Streaks: `bitcryptic_daily_streak` tracks current/longest streaks
- `src/data/dailyClues.test.js` machine-verifies all clue wordplay (anagram letter math, hidden-word contiguity, enumerations, definition-substring, rotation coverage) — keep it passing
- Daily-clue content expansion is on hold per Joshua ("we do not need daily clues now")

## Clue Archive

`data/clue-archive.json` is the master archive of every cryptic clue in the game. **It is currently stale** (predates the 2026-07 clue overhaul) and needs regenerating from live sources; until then, `data/clue-drafts-2026-07-03.json` is the accurate ledger of recent clue changes. Before modifying or removing any clue from the game, ensure it's preserved in one of these files.

## Audio System Notes

`BCWAudio` synthesizes all sounds via Web Audio API oscillators — there are no audio files. Audio context is lazy-initialized on first user interaction (browser autoplay policy). Separate gain nodes control master, music, SFX, and ambient channels.
