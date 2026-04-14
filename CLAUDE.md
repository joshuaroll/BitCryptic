# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bit Cryptic World is an interactive puzzle adventure island game with daily cryptic crossword clues. It has **two separate applications** in one repo:

1. **Island Map Game** (`index.html` at root, ~8300 lines) — A standalone vanilla JS/HTML/CSS game where players explore an SVG island map, visit locations, solve cryptic clues, read stories, fish, decorate a house, and unlock achievements. Core systems live in `js/` as IIFE singletons. Deployed to Vercel as a static site.

2. **Cryptic Croc Daily Game** (`src/` directory) — A React 18 + Tailwind CSS app (Create React App) with a daily cryptic clue puzzle featuring a crocodile mascot, plus a Word Play Guide page. Deployed to GitHub Pages.

3. **`game/`** — A pre-built Vite bundle of a previous version. Referenced by `game/index.html` with hashed asset filenames.

## Build and Dev Commands

```bash
npm start          # Run the React app dev server (port 3000)
npm run build      # Build the React app to /build
npm test           # Run Jest tests (react-scripts test, watch mode)
npm run deploy     # Build + deploy React app to GitHub Pages via gh-pages
```

The root `index.html` island game has no build step — edit and open directly or serve statically. Vercel deployment config is in `vercel.json`.

## Architecture: Island Map Game

### Module Pattern
All core systems in `js/` use the IIFE singleton pattern, exposing globals:
- `BCWAudio` — Web Audio API synthesized sounds (no audio files), location-based music themes
- `BCWSettings` — Settings panel UI with tabs, syncs with other systems
- `BCWAccessibility` — ARIA labels, keyboard navigation, reduced motion, high contrast, font scaling
- `BCWAchievements` — Category-based unlock system with toast notifications
- `BCWSave` — localStorage export/import with version tracking
- `BCWAnalytics` — Privacy-first anonymous event tracking
- `BCWHints` — Progressive hints with difficulty-scaled timers
- `BCWTutorial` — 6-step guided onboarding overlay
- `BCWDesigner` — In-game SVG element editor (Ctrl+Shift+D)

### Story Scene System
Scene files in `scenes/` populate a global `STORY_SCENES` object. Keys follow `{location}_{step}` pattern (e.g., `forest_0`, `beach_1`). Each scene is an SVG string with animated backgrounds, narrative text, puzzle content, and choices.

### Persistence
All game state uses localStorage with prefixed keys:
- `bitcryptic_` prefix: progress, unlocked_codes, house, fishing
- `bcw_` prefix: audio_settings, accessibility, settings, achievements, analytics, tutorial_complete

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

## Daily Clue System

- Clue database: `src/data/dailyClues.js` — 30 verified clues with hints, types, and difficulty ratings
- Selection: `getDailyClue(dateString)` hashes the date to pick the same clue for all players
- Persistence: `bitcryptic_daily_{YYYY-MM-DD}` in localStorage saves solved state, attempts, guess history
- Streaks: `bitcryptic_daily_streak` tracks current/longest streaks
- All clues are original compositions verified programmatically (anagram letter matching, hidden word presence, reversal checks)
- When adding clues, use the cryptic-clue-setter skill and verify with `an-array-of-english-words` dictionary

## Clue Archive

`data/clue-archive.json` is the master archive of every cryptic clue in the game. Before modifying or removing any clue from the game, ensure it's preserved in this archive. The archive includes validation status, technique classification, and source locations.

## Audio System Notes

`BCWAudio` synthesizes all sounds via Web Audio API oscillators — there are no audio files. Audio context is lazy-initialized on first user interaction (browser autoplay policy). Separate gain nodes control master, music, SFX, and ambient channels.
