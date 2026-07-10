# Bit Cryptic World — Beta Readiness Plan
_Compiled 2026-07-03 from a four-agent review: full cryptic clue audit (~80 unique clues mechanically verified), island game review, React daily-game review, and story/scene content review._

Guiding priority: **cryptic clue quality and game quality first**; development cost not weighted.

---

## STATUS — updated 2026-07-05

**🚀 THE ISLAND GAME IS LIVE IN BETA: https://bit-cryptic-world.vercel.app** (Vercel prod; redeploy with `vercel --prod --yes` from the project folder). `.vercelignore` keeps notes/, data/, backups/, src/, and all other answer-bearing dev files out of the deploy.

**Done since the plan was written:**
- Phase 1 (trust-breakers): COMPLETE. All clue/art contradictions fixed, spoilers gated, broken teaching clues replaced, achievements/save/unlock wiring repaired, secret-code breadcrumbs added (FISH at the docks notice board, LIAM in the library lore archive, MOON in the Stargaze postscript).
- Phase 2 (clue quality): COMPLETE for the island game. Every clue change went through Joshua's approval (see `data/clue-drafts-2026-07-03.json` for the full ledger: approvals, vetoes, rewordings, reverts). Lair rebuilt with hard clues (HOARD / INFERNO / TREASURE). Word Play Guide examples all valid; two new sections (Double Definitions, Charades & Containers).
- Post-story location actions: ALL converted to interactive bonus challenges (`showClueChallenge` component: brand-styled input, stepped hints, parse revealed only on solve). No action anywhere shows a story answer. Bonus clues never duplicate story clues. Stargaze includes a draggable telescope sky (moon, ringed planet, comet, constellation).
- Full story-text proofread: AI-writing tells removed (em dashes, inversion fragments, stock phrases); dragon voice reworked (understated, lightly Australian); Cluey Cove chest art layout fixed.
- All 7 items from notes/need_to_fix_07022026.txt fixed.
- Story engine: hint button no longer leaks answers; explanations moved from pre-solve story text into hints; technique-revealing placeholders neutralized; Escape/X mid-story confirm; hold-last-scene art fallback.
- React daily app: blockers fixed (definition highlight, full 30-clue rotation, local-midnight rollover, loss reveal) + clue data test suite. NOTE: daily-clue content expansion is DEPRIORITIZED per Joshua ("we do not need daily clues now"); the React app is not part of the current beta deploy.

**Still open (roughly in priority order):**
1. `data/clue-archive.json` re-sync — badly stale (predates everything above). The drafts ledger has all new clues; the archive needs regenerating from live sources.
2. Cluey Cove entrance bigger; coffee mug position on cafe window; home-decoration window default (todos.txt items 2, 6, 14).
3. bark/leaf/pine terminal easter eggs (ideasforreview.txt has the design).
4. Phase 3 daily-game retention loop (share/streak/countdown) — on hold with daily clues.
5. Phase 4 leftovers: Tailwind purge for the React app, minimap dots for secret locations, UK/US spelling pass, KAIT easter egg remains undocumented by design.
6. Spare verified clue on the bench: SEDGE ("Marsh plant amused gentry somewhat (5)") — candidate for a pond or forest bonus.

**Standing rule: no new or reworded clue ships without Joshua's explicit approval.**

---

---

## Phase 1 — Trust-breakers (fix before any tester touches the game)

A puzzle game lives or dies on the player trusting that clues are fair and answers are honored. These break that trust today.

### 1.1 On-screen clue contradicts the accepted answer (CRITICAL)
- **Cluey Cove chest** — `scenes/cove.js:155-156` renders the retired clue "Trap set up for a piece of the whole (4)" (= PART) while the story (`index.html:4355-4366`) only accepts COVE ("Shelter endlessly is a bay (4)"). A player who solves the on-screen clue is told they're wrong. Replace the SVG text with the COVE clue; add the CAVE clue to the second chest scene.
- **Docks note art** — `scenes/docks.js:251` shows `.S.P EMOCLEW EMOH` (wrong word order); story uses `!EMOH EMOCLEW .S.P` (`index.html:3881,3896`). Fix the art string.
- **Town fountain art** — `scenes/town.js:260-261` shows the rejected clue "Quiet place where books live (7)"; live clue is "Hushed collection? (7)". Sync the art.
- **Skyship art** — `scenes/skyship.js:158-164` shows an old SHIP crossword **with the answer filled in** during the VOYAGE puzzle. Rework airship scene art for the current 9-step story (or at minimum blank the SHIP letters and remove obsolete clues).

### 1.2 Answer spoilers in location panels & hints
- **Observatory modals** — `index.html:3618` ("Stargaze") and `:3619` ("Star Watcher's Lessons") print STAR, NOVA, COMET **with answers and full explanations**, clickable before the story is played. Gate both behind `isStoryComplete('observatory')`.
- **"Need a hint?" leaks full answers** — `index.html:5543-5545` feeds `step.wrongReactions` into `BCWHints.createHintButton`; the last reaction of most puzzles spells the answer (e.g. "S-H-O-R-E…" at `:4303`). Pass proper hint text instead, and collapse the duplicate hint buttons (`:5497-5507` vs `:5544`).
- **Teaser modals with no input** — lair `index.html:3652-3654`, moon `:3686-3687`, airship `:3709-3710`, beach `:3675-3676`, cafe `:3664`, cove `:3641-3642`. They pose clues (often duplicating story puzzles → pre-story leak) with no way to answer. Fix per your todo #12: gate behind story completion OR give them a real answer input (reuse the story puzzle input). Also fix the beach reversal typo: "DLROW CITPRYC TIB" reverses to "CYRPTIC" (`:3676`), and it's labeled "Rearrange!" for a reversal.
- **Beach art pre-spoils Cluey Cove** — `scenes/beach.js:188-331`: beach_3/beach_4 show the inside of the cove and a glowing "CLUEY COVE" title before the player finds the door, cannibalizing cove's own reveal (part of your todo #4).

### 1.3 Broken clues that mis-teach (tutorials + Word Play Guide)
The guide page is the reference beta testers will trust; today 6 of its 12 examples are defective.
- **TEA tutorial clue** — `index.html:4898` "Drink from terribly early alarm (3)" has **no initial-letters indicator** and "terribly" reads as an anagrind — it mis-teaches the exact technique it exists to teach. Replace with: "Drink initially taken every afternoon (3)".
- **Word Play Guide** (`src/components/WordPlayIndicators.js`):
  - ARCH (:101) — "beheaded" removes one letter, not three. Replace: "March, beheaded, becomes a curve (4)".
  - ROPE (:108) — "half lycanthrope" can't yield 4 of 11 letters. Replace with a valid clue (e.g. hidden: "Cord found in hero personified (4)").
  - ROYAL (:132) — no acrostic indicator. Replace: "Initially red, orange, yellow, and lilac is fit for a crown (5)".
  - EDGES (:60) — definition doesn't define EDGES; stacked indicators. Rebuild or swap the example word.
  - TALE (:157) — ambiguous standalone (TALE/TAIL both parse). Anchor the homophone side.
  - Reversal indicator list (:72) includes 'east'/'south' (not reversal indicators) and down-only indicators with no grid context.
  - **Missing sections**: Double Definition (8 of 30 daily clues!) and Charade/Container (3 more). 11/30 daily clues use techniques the guide never explains.
- **DINE** — `index.html:4102` definition "a meal" (noun) vs DINE (verb). Change def to "eat (well)".

### 1.4 React daily game blockers (`src/`)
- **Definition highlight garbled for 17/30 clues** — `src/bitCrypticGame.js:159-164` assumes the definition is a prefix of the clue. Use `clue.clue.indexOf(clue.definition)` to highlight in place. Broken ids: 3,6,7,11,12,13,14,16,21,22,23,24,25,26,27,29,30.
- **Clue selector reaches only 19/30 clues, repeats every ~10 days** — `src/data/dailyClues.js:468-484`. Replace date-string hash with `Math.floor(Date.UTC(y,m,d)/86400000) % dailyClues.length` for a clean rotation.
- **UTC/local mismatch** — puzzle key uses `toISOString()` (`bitCrypticGame.js:17-19`), header uses `toLocaleDateString` (`App.js:8`): puzzle flips mid-evening for US users while header shows a different date. Pick one convention (local-midnight, Wordle-style, recommended) and derive both key and display from it. Also fix the mixed local/UTC "yesterday" computation in streak logic (`:122-124`) and add a date-change effect so an open tab resets state at rollover (`:50-51`).

### 1.5 Broken/unreachable game content (island)
- **Workshop "Enter Workshop" 404s in production** — `index.html:3574` links `../Bit_Cryptic_Adventure/index.html`, which doesn't exist in the Vercel deploy. Point at the deployed URL or hide the button.
- **4 of 6 secret codes have no discovery path** — terminal handler `index.html:6392-6430`. No in-game hint exists for `LR`/`LIAM RUNNALLS`, `MARK`/`MOON`, `FISH`/`FISHING`, `KAIT`. Liam's Lair, the Moon, the Fishing Pond, and Kait's reward are unreachable, along with 4 achievements and 3 trophies. Add breadcrumbs (see Phase 3.2).
- **FLOAT Morse clue is unreadable** — a static baked copy of the cloud DOM (`index.html:3268`) overlaps the generated clouds (`createClouds()`, `:8424`), doubling the formation. Delete the baked div. (Also addresses your "clouds look static/stacked" note.)
- **Achievements that can never unlock** — `BCWAchievements.checkFishing()`/`checkHouseItems()` never called (hook into `reelIn()` `index.html:8940-8971` and the house editor `:7730`); `spawnAirship()` (`:6447-6493`) never calls `unlockLocation('airship')` → `all_secrets` and `completionist` impossible.
- **Save export/import/reset loses fishing + cheese progress** — `js/save.js:7-18` `ALL_KEYS` lists nonexistent `bitcryptic_fishing`, omits `bitcryptic_fish`, `bitcryptic_fish_coins`, `bitcryptic_fish_bucket`, `bitcryptic_fish_upgrades`, `bitcryptic_cheese`, `bitcryptic_cheese_cooldown`. Fix the list; also update the stale house schema in `validateSave()` (`:167-181`).

---

## Phase 2 — Clue excellence (the product's core)

The audit verified all enumerations match and ~48/80 clues are genuinely good (standouts: GLEAM, VOYAGE, DRAGON, GRASP, COMET, RIDGE). This phase fixes the remaining ~21 weak clues and the collection-level gaps.

### 2.1 Repair weak clues (definition/indicator fixes, with proposed rewrites in the audit)
- Definition fails substitution test: CHEST ("Treasure"→"Trunk", `index.html:4422` + dupes at `:3652`, lair.js), SAIL (`:5147`, def → "Canvas"), STAR-anagram, RACE, MART, THIN (all in WordPlayIndicators.js — THIN needs recomposition).
- Wrong-direction indicator: HERO — "Warrior seized **by** the road" (`index.html:4075`).
- Anagrind scope: BEACH (`index.html:4224`) — "Beginning of boating, with ache stirred, on the shore".
- **"Oddly" as an anagram indicator ×3** (daily #6 BREAD, lair FURNACE, skyship COAST): it's the standard alternate-letters indicator; in a game that teaches conventions it's a trap. Swap at least two for "badly"/"at sea".
- NOVA (`index.html:4590`): mark the definition-by-example ("from a river, say, reflected").
- CLOAK (daily #23): CL≠"class"; recompose.
- CIDER (daily #27): "over" link doesn't work; use "for".
- BRISK (daily #28): move "weather" inside def 2.
- Shallow hidden words (1-letter boundary contributions, against your own 2-letter rule): CROWN (#5), GRAIN (#20 — "rain" visible is a giveaway), MAST (use verified "Pole in cinema stalls (4)" — 2+2, natural surface), PINE (revert to the archive's better "Long for an evergreen (4)" double definition), CHARM (#15 surface → "Enchantment in such arms, partly (5)").
- NISSAN guide example: proper noun + unnatural surface; swap to a dictionary answer.

### 2.2 Fix the difficulty curve (dailyClues.js)
9 of 11 clues rated 4–5 are single-mechanism anagrams identical in skill to the 1-rated ones. Re-rate: single anagram/DD = 1–2, hidden = 2, abbreviation charade = 3, GLEAM = 4. Then **compose ~8–10 genuinely hard clues** (container, deletion, homophone, reversal-in-charade, combination) — which also fixes the fact that the daily set contains **zero** containers/homophones/deletions, i.e. the three techniques the island tutorials teach never appear in the daily game. Use the cryptic-clue-setter skill + dictionary verification per CLAUDE.md.

### 2.3 De-duplicate and diversify
- STAR answers **five** different clues across sources; "Vermin returning…" appears near-verbatim ×3. Keep the best one per surface, recompose the rest.
- Reduce indicator reuse ("shattered" ×3, "broken" ×3, "found in" ×5).
- Anagrams are ~40% of the collection (pro norm ~20%) — new hard clues from 2.2 rebalance this.

### 2.4 Re-sync `data/clue-archive.json`
The archive (v1.2.0, claims 25 clues) is badly stale vs ~80 live clues: none of the 30 daily clues are archived; it records retired clues (TAN, SKY, PART, SUR) as live; `techniqueInventory` misclassifies and lists now-used techniques as unused. Regenerate it from the live sources and add a small script/test that diffs archive vs live so it can't drift again.

### 2.5 Content for under-served locations
- **Moon**: billed "hardest clues in the universe," has 2 easy clues. Add a genuinely esoteric third clue as the arc's closer (combination type per the Workshop tutorial); fix `speaker: null` on Mark's lines (`index.html:4518,4537`).
- **Skyship copy**: step 6 "Now this one's different" introduces the same technique as clue 1; step 8 claims "three techniques" with only two — swap MAST's clue for a third technique (fixes both).
- Secret locations (lair, moon, airship, pond, house) have no "Learn:" tutorials while all 8 main locations do — add short ones, or explicitly leave secrets as "exam" content.
- Mystic Peak: story is real now (STAR/NOVA/COMET), but the complete step advertises "chart new star patterns," which doesn't exist (`index.html:4628`). Either build the star-chart mini-puzzle from your ideasforreview notes (constellation clues would be a great beta differentiator) or fix the copy.

---

## Phase 3 — Game quality: reward loops & progression

### 3.1 Daily game retention loop (React app)
Currently solving yields confetti and one line; losing yields nothing. Add, in order of impact:
1. **Share button** (emoji-grid result, Wordle-style) + **streak display** (already tracked in localStorage, never shown).
2. **Answer + explanation reveal** when the game ends (win or loss); on reload of a finished day, fill the boxes and show the end-state message (currently blank after a loss).
3. **Countdown to next puzzle.**
4. **Progressive hint flow** using the existing-but-unused `hints` array (definition → indicator → fodder), replacing the broken Show Definition button.
5. Duplicate-guess feedback; input polish (`inputMode`, `autocapitalize="off"`, letter-only validation, paste across boxes).

### 3.2 Make secrets discoverable (island)
Three sentences unlock most of the hidden content: a pond/town NPC line hinting FISH, a lair rumor for LR/LIAM, an observatory reference to Mark and the MOON. Your library-walkthrough idea (todos.txt:30) is the natural home: add library books that teach how terminal codes are found. Keep KAIT as a true easter egg if intended.
- Name the dragon: "Liam" never appears in the lair story (`index.html:4404-4479`) yet the location is "Liam's Lair" — add a naming beat (Simon and Mark both introduce themselves).
- Mention the Dragon Scale / Lunar Rock trophies in their stories (the airship's spyglass handoff at `:4751` is the model).

### 3.3 Story/arc fixes
- **Beach ending re-cut** (your todo #4, confirmed): steps 6/7 double-narrate contradictory reveals (`index.html:4330,4335`) — merge them, end at the door grinding open, and move/strip beach_3–4 art so Cluey Cove owns its reveal.
- **Missing late-step art** blanks the panel mid-story (adventure 6–7, library 6–8, workshop 5–7 + early-firing workshop_3/4, beach 5–7, cove 5–6, airship 5–8; house/pond have none). Cheapest robust fix: make the engine hold the last scene instead of clearing (`index.html:5361-5367`, one line), then backfill art over time — skyship first, since its art tells a different story.
- Lair's "Fail, and you leave empty-handed" (`:4417`) — no fail state exists; make it a bluff joke.
- Observatory: gate modals (Phase 1) and make "Star Watcher's Lessons" the post-completion recap — it's good content in the wrong place.

### 3.4 Mechanics wiring (island)
- Town fountain multi-puzzle (`index.html:5588-5629`) bypasses `checkPuzzleSolved`, success audio, and hints — wire it into the same hooks as single puzzles.
- Escape closes a story mid-puzzle with no confirm (`:6160-6163`) — confirm or save step progress.
- Intro tutorial choice permanently clobbers `BCWSettings.areTutorialsEnabled` (`:5187-5188`) — write the choice into settings instead of replacing the function.
- Timed hint system is dead code (`js/hints.js:21-41` never called) and the difficulty setting doesn't do what its label says (`js/settings.js:97-99`) — either wire `startHintTimer` into puzzle steps or relabel the setting.
- Forest panel label computed once at parse (`index.html:3630`) — compute in `openLocation`.
- Terminal input: collapse internal whitespace + strip punctuation (`:6349-6356`) so "COME  IN" and "P.S." variants work.
- "View Leaderboard" opens the Share dialog (`:3575`) — relabel "Share".

---

## Phase 4 — Beta polish & instrumentation

- **Mobile**: tutorial step 4 spotlights the minimap which is `display:none` under 768px (`js/tutorial.js:32-36` / `enhancements.css:22`) — skip when hidden. `resize → resetView()` (`index.html:8446-8448`) discards pan/zoom when the mobile keyboard opens — debounce/preserve.
- **Cafe mug** (your todo #14, confirmed): map-building SVG draws the cup over the window glass (`index.html:3162-3171`) — reposition below the sill.
- Minimap dots for secret locations once spawned (`index.html:3290-3310`); `#loc-moon` needs an aria-label (`:3242`).
- Consistency pass: UK vs US spelling (pick UK — it suits cryptics), stale scene-file comments, beach_0 shells spell a 7-letter jumble (`beach.js:44-50`).
- Gate Designer mode (Ctrl+Shift+D) behind a flag for beta (`js/designer.js:23-33`).
- `vercel.json`: `/js/*` cached immutable 1yr with unhashed names — returning testers won't get fixes; use shorter cache or version query strings.
- React app: Tailwind isn't purging (311 KB gzipped CSS; v2 compat build with v3 `content` key) — upgrade to Tailwind 3 or set `purge`; v3-only classes in `ui/button.jsx` silently degrade under v2. Delete dead `src/App.css`, `src/logo.svg`.
- **Tests**: add `dailyClues.test.js` asserting anagram/hidden-word letter math, enumeration = answer length, selection determinism and full-pool coverage — cheap insurance for all future clue additions. Consider the same as a Node script for `data/clue-archive.json` sync.
- **Beta instrumentation**: BCWAnalytics exists — make sure it captures per-puzzle attempt counts, hint usage, and drop-off location so beta feedback is measurable; add a lightweight feedback link in Settings.

---

## Already done (verified — cross off your todo list)
- "Cryptogram" references: gone from live code (remain only in `index_v1.html`, `map_inspo/`, and the old `game/` bundle — dead files).
- "Your House" → "Your Home": done everywhere.
- Lunar Hermit text on the last moon scene: removed (`moon.js:536`); survives only in the unshipped mockup gallery.
- Simon code: `SIMON`/`FLOAT` both work.
- Liam/Simon/Mark story rewards: `REWARD_MAP` implemented; stories now contain real, valid clues (the todos.txt "real cryptic clues" items are outdated for the stories — the remaining gap is the no-input action modals and moon difficulty).
- Workshop→Beach path: exists and gates correctly in code; any remaining issue is visual alignment.

## Suggested order of work
1. Phase 1 (all of it) — nothing else matters if testers hit these.
2. Phase 2.1 + 2.2 + Word Play Guide sections — clue quality is the brand.
3. Phase 3.1 (daily loop) + 3.2 (secret discoverability) — the two biggest engagement wins.
4. Phase 2.3–2.5, 3.3, 3.4.
5. Phase 4 alongside a private beta build.
