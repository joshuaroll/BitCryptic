# Clue Anatomy Review, 2026-07-10

Sign-off document for the interactive clue-anatomy feature (`js/clueAnatomy.js` +
`js/clueAnnotations.js`). Every cryptic clue in the island game, with proposed
per-word parse annotations. Nothing here ships until approved: only signed-off
rows get merged into `CLUE_ANNOTATIONS` in `js/clueAnnotations.js`.

**How to review:** per clue block, mark **approve** / **edit** (write the fix inline) /
**veto** (clue gets no anatomy; it renders exactly as today). Segment rules: keys are
byte-identical to the source clue string (no surrounding quotes); segments are contiguous
substrings in order; roles are definition / indicator / fodder / link / double.
`info` is the single message shown when the word is clicked.

**What a player is told, and what they are not.** The L2 text NAMES the role and
stops. Not what the category is for, not how it works, not the method: no "first
letter of each", no "becomes its abbreviation", no letter counts, and no second
sentence explaining the first. Working that out is the puzzle, and a panel that
explains it has solved it for the player. The one exception is a fodder segment
whose substitution the player cannot otherwise see (Vermin -> RATS), where the
note says a substitution is needed without naming the word.

**ONE message per word.** There is no second click (Joshua, 2026-09-01). A word
that said one thing on the first click and something else on the second was
telling the player two stories about the same segment. Clicking again repeats
what is already there.

| role | the message |
|---|---|
| definition | `DEFINITION` |
| link | `LINK WORD` |
| double | `DOUBLE DEFINITION` |
| indicator | `INDICATOR: Anagram indicator.` and the seven other operations |
| fodder, used directly | `FODDER: The material the wordplay works on.` |
| fodder, by substitution | `FODDER:` plus the substitution note, which says one is needed without naming the word |

Where a segment has its own `info`, that is the message; otherwise the role's
fallback; and where the label already says everything, the label alone.

The `usage/operation` column is review metadata. Fodder's direct / partial never
reaches a player; substitution does, as the note above; the indicator's operation
selects which indicator line is shown.

**Presentation: option A, the inline panel** (Joshua, 2026-08-31). Three layouts
were built and compared live at `/clue-ui` on the deploy preview: A inline panel,
B legend strip, C margin notes. A ships. One explanation slab sits directly under
the clue and is replaced as the player taps from word to word: smallest footprint,
keeps the eye on the clue, and does not announce which roles a clue contains
before the player has found them (B's cost) or widen the story panel (C's).

**The clue, its panel and the answer box are ONE card.** `renderClue` wraps the
clue in `.clue-card`, the info slab is inserted after the clue inside it, and
`showStoryControls` moves the puzzle input into the same card. They were three
loose blocks across two containers (`#story-text` and `#story-choices`), so the
box a player typed into did not visibly belong to the clue above it. A step with
no annotation still renders exactly as before, input in the choices row.

**The card always renders; the setting governs clickability only** (Joshua,
2026-09-01). `annotate()` used to bail out entirely when anatomy was switched
off, so the clue lost its card, its mono styling and the answer box that belongs
to it, and the panel looked like a different screen depending on a setting that
was supposed to be about tapping words. Now the card, the clue and the input are
built either way; `interactive: false` simply omits the `.anatomy-word` spans,
the button role and the tab stops, so a clue with anatomy off plainly is not
tappable rather than looking tappable and doing nothing. The explanation slab is
the one thing that does not render when off, because there is nothing to explain.
The HUD toggle re-renders a clue already on screen (`refreshOpenClue`), parking
the answer box so a half-typed answer survives the swap.

**MERGED 2026-09-01.** On Joshua's instruction that every story clue carry the
anatomy card, 44 of the 52 parses below are now live in `js/clueAnnotations.js`:
all 31 story clues, all 10 Learn tutorials, and 3 others. The remaining 9 are
bonus challenges that pass their clue through `showClueChallenge`'s `clue:`
property rather than as quoted narrative text, so `annotate()` never sees them;
wiring that path is still open (see the checklist at the foot of this file).

Two keys needed fixing before they would match the live game, both verified
against `index.html` rather than assumed:
- **REEL** carried a full stop INSIDE the quotes in the game (`...spool (4).`)
  but not in this document. Key and its double-definition segment both widened.
- **WELCOME** (docks step 4) did not exist here at all; it replaced the
  mirror-writing puzzle on 2026-08-31. Block 00 added above.

`annotate()` also had to change: it wrapped only the FIRST annotated clue in a
beat, which left two of the three clues in the town multi_puzzle as bare text.
It now wraps every clue it finds, each in its own card with its own panel, and
`wireInteraction` scopes to its own `.clue-line` by key. The multi_puzzle's
single input stays in the choices row, because one box serves three clues and
cannot belong to any one card.

**Double definitions are one segment.** A double-definition clue has no wordplay
to take apart, so splitting it into Definition #1 / link / Definition #2 taught a
structure that is not there. The whole clue string is a single clickable segment
with role `double`: click anywhere in it and you get the one message above.

**Parse provenance:** all parses derive from the game's own hint/wrongReactions/explanation
text, cross-checked against `data/clue-drafts-2026-07-03.json` (authoritative for every
2026-07 change). No parse below is invented.

- [ ] **APPROVE: reuse of field-guide sand #D9B48A as the fodder color in World**

**Tutorial ids** (verified against the TUTORIALS object in index.html): docks=Reversals,
forest=Hidden Words, cafe=Initial Letters, town=Anagrams, adventure=Containers,
library=Double Definitions, workshop=Combination Clues, beach=Advanced Anagrams,
cove=Deletions, observatory=Homophones. There is **no dedicated charade tutorial**, so
pure charades are pointed at `workshop` (nearest lesson: building answers from pieces).
Flagged below wherever that call is mine, not the game's.

---

## Section 1: Story clues (STORIES object)

**Excluded, for the record:** docks story step 4 asks the player to decode
`!EMOH EMOCLEW .S.P` (→ WELCOME HOME). It is a whole-string mirror-writing puzzle, not a
cryptic clue. No definition, no indicator, nothing to segment. Recommend it gets no
anatomy entry. **FLAG: confirm exclusion.**

### 01. CAFE: Whispers Among the Pines (forest story, step 3)
Clue (key, verbatim): `Face remodelled into a place for coffee (4)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Face | fodder | direct |  |
| remodelled | indicator | anagram | Anagram indicator. |
| into | link | - |  |
| a place for coffee | definition | - |  |

Notes/flags: parse from hint + fox wrongReactions ("remodelled" = shuffle, rearrange "face").

### 00. WELCOME: Washed Ashore (docks story, step 4)
Clue (key, verbatim): `Embracing towel comes with warm greeting (7)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Embracing | indicator | hidden | Hidden-word indicator. |
| towel comes | fodder | direct |  |
| warm greeting | definition | - |  |

Notes/flags: approved 2026-08-31, wording by Joshua; replaces the `!EMOH EMOCLEW .S.P`
mirror-writing puzzle (see `clue-drafts-2026-07-03.json`). tutorial=forest because the
docks lesson teaches reversals and this is a hide; the docks clue is the first puzzle a
player meets, before any lesson, so it previews the forest's technique instead.

### 02. SIP: The Barista's Clue (cafe story, step 2)
Clue (key, verbatim): `Something instantly perky, starts a mouthful (3)`
tutorial: cafe

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Something instantly perky | fodder | partial |  |
| starts | indicator | letter-selection | Letter-selection indicator. |
| a mouthful | definition | - |  |

Notes/flags: parse from hint ("initial letters clue... first letter of each word before it").

### 03. TOWER: The Heart of the Island (town story, step 3, multi_puzzle 1/3)
Clue (key, verbatim): `Wrote, mangled, a tall building (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Wrote | fodder | direct |  |
| mangled | indicator | anagram | Anagram indicator. |
| a tall building | definition | - |  |

Notes/flags: parse from step hint ("All three are anagrams... mangled") and wrongReaction 1.

### 04. LIBRARY: The Heart of the Island (town story, step 3, multi_puzzle 2/3)
Clue (key, verbatim): `Moved by rail right to the book house (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Moved | indicator | anagram | Anagram indicator. |
| by rail | fodder | direct |  |
| right | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| to | link | - |  |
| the book house | definition | - |  |

Notes/flags: parse per `clue-drafts-2026-07-03.json` town.fountain.LIBRARY (approved new 2026-07-03). Technically anagram + abbreviation, but the game teaches it as an anagram (step hint: "'right' contributes a single letter R to the mix"), so tutorial=town.

### 05. WORKSHOP: The Heart of the Island (town story, step 3, multi_puzzle 3/3)
Clue (key, verbatim): `Hop works, scrambled, a place to build (8)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Hop works | fodder | direct |  |
| scrambled | indicator | anagram | Anagram indicator. |
| a place to build | definition | - |  |

Notes/flags: parse from step hint and wrongReaction 3.

### 06. HERO: The Tower's Challenge (adventure story, step 2)
Clue (key, verbatim): `Warrior seized by the road (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Warrior | definition | - |  |
| seized by | indicator | hidden | Hidden-word indicator. |
| the road | fodder | partial |  |

Notes/flags: parse per drafts ledger (approved new): hidden in t(HE RO)ad; indicator "seized by"; definition "Warrior".

### 07. DINE: The Tower's Challenge (adventure story, step 5)
Clue (key, verbatim): `Eat in, embraced by Germany (4)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Eat | definition | - |  |
| in | fodder | direct |  |
| embraced by | indicator | container | Container indicator. |
| Germany | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |

Notes/flags: **already approved and shipping**. This block is the live `CLUE_ANNOTATIONS` entry, verbatim, per drafts decision "DINE: APPROVED option A". Listed for completeness; no action needed.

### 08. MAP: The Forbidden Shelf (library story, step 3)
Clue (key, verbatim): `Chart or plan (3)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Chart or plan (3) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint ("A chart is one. A plan is the other.").

### 09. NOVEL: The Forbidden Shelf (library story, step 4)
Clue (key, verbatim): `New book (5)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| New book (5) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint; also recorded in drafts newGuideSections (reused from Library story).

### 10. LEAVES: The Forbidden Shelf (library story, step 5)
Clue (key, verbatim): `Departs or pages (6)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Departs or pages (6) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint; also in drafts newGuideSections.

### 11. BEACH: Gears and Clues (workshop story, step 2)
Clue (key, verbatim): `Ache stirred after beginning of boating for a sandy shore (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Ache | fodder | direct |  |
| stirred | indicator | anagram | Anagram indicator. |
| after | indicator | charade | Charade: pieces joined end to end. |
| beginning of | indicator | letter-selection | Letter-selection indicator. |
| boating | fodder | partial |  |
| for | link | - |  |
| a sandy shore | definition | - |  |

Notes/flags: Joshua's approved wording per drafts decisions ("EACH (ache stirred) after B"). Two techniques in one clue → workshop (combination) tutorial.

### 12. GEARS: Gears and Clues (workshop story, step 4)
Clue (key, verbatim): `Rages shattered these cogs (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Rages | fodder | direct |  |
| shattered | indicator | anagram | Anagram indicator. |
| these | link | - |  |
| cogs | definition | - |  |

Notes/flags: parse from hint ("'Shattered' means rearrange").

### 13. PARTS: Gears and Clues (workshop story, step 5)
Clue (key, verbatim): `Traps reworked become components (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Traps | fodder | direct |  |
| reworked | indicator | anagram | Anagram indicator. |
| become | link | - |  |
| components | definition | - |  |

Notes/flags: parse from hint ("'Reworked' is an anagram indicator").

### 14. SHORE: Letters in the Sand (beach story, step 2)
Clue (key, verbatim): `Horse, broken, on the coastline (5)`
tutorial: beach

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Horse | fodder | direct |  |
| broken | indicator | anagram | Anagram indicator. |
| on the | link | - |  |
| coastline | definition | - |  |

Notes/flags: parse from hint ("'Broken' is the anagram indicator... definition is 'coastline'"). Assigned to the beach's own Advanced Anagrams lesson (it lives there); town also valid.

### 15. COVE: The Cluey Depths (cove story, step 2)
Clue (key, verbatim): `Shelter endlessly is a bay (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Shelter | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| endlessly | indicator | deletion | Deletion indicator. |
| is | link | - |  |
| a bay | definition | - |  |

Notes/flags: parse from hint ("'endlessly' tells you to remove the last letter... word for 'shelter'").

### 16. CAVE: The Cluey Depths (cove story, step 4)
Clue (key, verbatim): `Sculpt without right makes a hollow (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Sculpt | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| without right | indicator | deletion | Deletion indicator. |
| makes | link | - |  |
| a hollow | definition | - |  |

Notes/flags: parse from hint ("'without right' means remove the letter R... word for 'sculpt'").

### 17. HOARD: The Dragon's Hoard (lair story, step 3)
Clue (key, verbatim): `Tough about love, a dragon's pile (5)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Tough | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| about | indicator | container | Container indicator. |
| love | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| a dragon's pile | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("HARD (tough) about O (love)").

### 18. INFERNO: The Dragon's Hoard (lair story, step 5)
Clue (key, verbatim): `Iron fen forged into a blaze (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Iron fen | fodder | direct |  |
| forged | indicator | anagram | Anagram indicator. |
| into | link | - |  |
| a blaze | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("anagram of IRON FEN ('forged')").

### 19. TREASURE: The Dragon's Hoard (lair story, step 7)
Clue (key, verbatim): `Riches make one strangely austerer (8)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Riches | definition | - |  |
| make one | link | - |  |
| strangely | indicator | anagram | Anagram indicator. |
| austerer | fodder | direct |  |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("anagram of AUSTERER ('strangely'); def 'Riches'. Wording per Joshua.").

### 20. MARK: The Mark on The Moon (moon story, step 3)
Clue (key, verbatim): `Blemish is also a target (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Blemish is also a target (4) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint ("Both halves of the clue point to the same four-letter word.").

### 21. CRATER: The Mark on The Moon (moon story, step 5)
Clue (key, verbatim): `Lunar feature from confused tracer (6)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Lunar feature | definition | - |  |
| from | link | - |  |
| confused | indicator | anagram | Anagram indicator. |
| tracer | fodder | direct |  |

Notes/flags: parse from hint ("'Confused' is the anagram indicator. Rearrange the letters of TRACER.").

### 22. ECLIPSE: The Mark on The Moon (moon story, step 6)
Clue (key, verbatim): `Overshadow left in shattered pieces (7)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Overshadow | definition | - |  |
| left | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| in | indicator | container | Container indicator. |
| shattered | indicator | anagram | Anagram indicator. |
| pieces | fodder | direct |  |

Notes/flags: approved new composition per drafts ("L ('left') inside an anagram of PIECES ('shattered')"). Two mechanisms → workshop tutorial.

### 23. STAR: Celestial Wordplay (observatory story, step 3)
Clue (key, verbatim): `Celebrity's heavenly body (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Celebrity's heavenly body (4) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint ("Both 'Celebrity' and 'heavenly body' are separate definitions.").

### 24. NOVA: Celestial Wordplay (observatory story, step 5)
Clue (key, verbatim): `Stellar explosion in casino vault (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Stellar explosion | definition | - |  |
| in | indicator | hidden | Hidden-word indicator. |
| casino vault | fodder | partial |  |

Notes/flags: approved option A per drafts ("hidden casi(NO VA)ult"); story teaching switched from reversal to hidden word 2026-07-03.

### 25. COMET: Celestial Wordplay (observatory story, step 7)
Clue (key, verbatim): `Company encountered celestial visitor (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Company | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| encountered | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| celestial visitor | definition | - |  |

Notes/flags: charade per hint ("each part of the clue gives you a fragment to assemble"); charades carry no indicator by convention. **FLAG: no charade tutorial exists, assigned workshop; confirm.**

### 26. HOME: A Place to Call Home (house story, step 3)
Clue (key, verbatim): `Head of household? Ring me, I live here! (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Head of | indicator | letter-selection | Letter-selection indicator. |
| household | fodder | partial |  |
| Ring | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| me | fodder | direct |  |
| I live here! | definition | - |  |

Notes/flags: parse from hint ("'Head of' means take the first letter. 'Ring' is a round letter. Keep 'me' just as it is."). **FLAG: verify parse**. The definition's exact extent is my reading (hint covers the wordplay only; "I live here!" as definition is semi-&lit). Not in the drafts ledger.

### 27. VOYAGE: The Sky Captain's Collection (airship story, step 3)
Clue (key, verbatim): `Savoy agent conceals a journey (6)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Savoy agent | fodder | partial |  |
| conceals | indicator | hidden | Hidden-word indicator. |
| a journey | definition | - |  |

Notes/flags: parse from hint ("tucked inside the surrounding words... where 'savoy' ends and 'agent' begins").

### 28. COAST: The Sky Captain's Collection (airship story, step 5)
Clue (key, verbatim): `Tacos, adrift, along the shoreline (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Tacos | fodder | direct |  |
| adrift | indicator | anagram | Anagram indicator. |
| along the shoreline | definition | - |  |

Notes/flags: approved per drafts ("Anagram of TACOS = COAST; indicator 'adrift'; definition 'along the shoreline'").

### 29. MAST: The Sky Captain's Collection (airship story, step 7)
Clue (key, verbatim): `Mum's street pole (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Mum | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| 's | link | - |  |
| street | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| pole | definition | - |  |

Notes/flags: approved new charade per drafts ("MA ('mum') + ST ('street')"). **FLAG: no charade tutorial exists, assigned workshop; confirm.**

### 30. REEL: The Quiet Catch (pond story, step 2)
Clue (key, verbatim): `Stagger on a fishing spool (4).`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Stagger on a fishing spool (4). | double | - | Two definitions of the same answer. |

Notes/flags: double definition per hint ("a word that means both 'to stagger' and 'a spool used for fishing line'").

---

## Section 2: Bonus challenges (showClueChallenge + cafe napkin rotation)

### 31. PLANET: Stargaze (observatory bonus, showClueChallenge)
Clue (key, verbatim): `Scheme with the alien for a world (6)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Scheme | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| with | indicator | charade | Charade: pieces joined end to end. |
| the alien | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| for | link | - |  |
| a world | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PLAN (scheme) + ET (alien)"). **FLAG: no charade tutorial exists, assigned workshop; confirm.**

### 32. IRATE: Treasure Chest (cove bonus, showClueChallenge)
Clue (key, verbatim): `Pirate beheaded is furious (5)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Pirate | fodder | direct |  |
| beheaded | indicator | deletion | Deletion indicator. |
| is | link | - |  |
| furious | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PIRATE - P; def 'furious'").

### 33. PLAN: Cave Inscription (cove bonus, showClueChallenge)
Clue (key, verbatim): `Plank cut short reveals a scheme (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Plank | fodder | direct |  |
| cut short | indicator | deletion | Deletion indicator. |
| reveals | link | - |  |
| a scheme | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PLANK - K; def 'a scheme'").

### 34. CHEST: Dragon's Clue (lair bonus, showClueChallenge)
Clue (key, verbatim): `Treasure hidden in each estimate (5)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Treasure | definition | - |  |
| hidden in | indicator | hidden | Hidden-word indicator. |
| each estimate | fodder | partial |  |

Notes/flags: this is the OLD wording Joshua deliberately reverted to (drafts: "CHEST: REVERTED to old ... per Joshua"); the drafts also record the definition is loose (a chest holds treasure). Annotated as the game teaches it; definition info steers toward the container sense. Reused in the bonus per reusedInBonusChallenges_2026-07-05.

### 35. DRAGON: Scorched Scroll (lair bonus, showClueChallenge)
Clue (key, verbatim): `This beast makes proceedings drag on (6)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| This beast makes proceedings drag on (6) | double | - | Two definitions of the same answer. |

Notes/flags: double definition per challenge hints/explanation ("The beast itself, and DRAG ON, to be tedious"). Segment boundary of "makes proceedings" as pure link is my reading. Minor, but flagging for a look.

### 36. FURNACE: Wall Carvings (lair bonus, showClueChallenge)
Clue (key, verbatim): `Fun race, wildly, leads to the source of heat (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Fun race | fodder | direct |  |
| wildly | indicator | anagram | Anagram indicator. |
| leads to | link | - |  |
| the source of heat | definition | - |  |

Notes/flags: approved per drafts ("Anagram of FUN RACE; indicator 'wildly'"); reused in the bonus per reusedInBonusChallenges_2026-07-05.

### 37. BEAM: Mark (moon bonus, showClueChallenge)
Clue (key, verbatim): `A shaft of moonlight smiles widely (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| A shaft of moonlight smiles widely (4) | double | - | Two definitions of the same answer. |

Notes/flags: approved 2026-07-05 per drafts moonChallenges ("double definition... Wording per Joshua.").

### 38. LUNATIC: Mark's Clue (moon bonus, showClueChallenge)
Clue (key, verbatim): `Nautical, dropping anchor's head, turns moonstruck (7)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Nautical | fodder | direct |  |
| dropping | indicator | deletion | Deletion indicator. |
| anchor's head | fodder | partial |  |
| turns | indicator | anagram | Anagram indicator. |
| moonstruck | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts moonChallenges ("NAUTICAL minus A (anchor's head), anagrammed ('turns')"). Deletion + anagram → workshop tutorial. "anchor's head" as fodder-partial (it specifies the deleted letter) is a schema judgement call. Flagging for a look.

### 39. CABIN: Simon (airship bonus, showClueChallenge)
Clue (key, verbatim): `Taxi in? There's your quarters aboard (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Taxi | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| in | fodder | direct |  |
| There's | link | - |  |
| your quarters aboard | definition | - |  |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("CAB (taxi) + IN... 'There's' wording per Joshua"). **FLAG: no charade tutorial exists, assigned workshop; confirm.**

### 40. DRAWER: Simon's Collection (airship bonus, showClueChallenge)
Clue (key, verbatim): `Reward sent back: a place for socks (6)`
tutorial: docks

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Reward | fodder | direct |  |
| sent back | indicator | reversal | Reversal indicator. |
| a place for socks | definition | - |  |

Notes/flags: approved per drafts guide.reversal1 spare ("Reward sent back: a place for socks (6)' = DRAWER"), placed per reusedInBonusChallenges_2026-07-05.

### 41. MOCHA: Order a Puzzle (cafe napkin rotation, showGameModal)
Clue (key, verbatim): `Flustered macho gets a coffee (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Flustered | indicator | anagram | Anagram indicator. |
| macho | fodder | direct |  |
| gets | link | - |  |
| a coffee | definition | - |  |

Notes/flags: approved new 2026-07-03 per drafts cafe.napkin.MOCHA. Renders via showGameModal (answer behind the flip-the-napkin reveal), not showClueChallenge; the anatomy hook isn't wired there today; annotation is harmless but dormant until it is. In the source the clue string carries its own literal double quotes; the key above is the text between them, matching the annotate() convention.

### 42. DECAF: Order a Puzzle (cafe napkin rotation, showGameModal)
Clue (key, verbatim): `Faced about for coffee without the kick (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Faced | fodder | direct |  |
| about | indicator | anagram | Anagram indicator. |
| for | link | - |  |
| coffee without the kick | definition | - |  |

Notes/flags: approved new 2026-07-03 per drafts cafe.napkin.DECAF. Same dormant-hook note as MOCHA.

---

## Section 3: Learn tutorials (TUTORIALS object)

### 43. STAR: Learn: Reversals (docks tutorial, step 2)
Clue (key, verbatim): `Vermin returning as a celestial body (4)`
tutorial: docks

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Vermin | fodder | substitution | This is a short 4 letter substitution for a common word that could replace vermin. The wordplay indicator will be used on this after substituting. |
| returning | indicator | reversal | Reversal indicator. |
| as | link | - |  |
| a celestial body | definition | - |  |

Notes/flags: parse from tutorial hint ("'Vermin' = RATS. Reverse it.").

### 44. LEAF: Learn: Hidden Words (forest tutorial, step 2)
Clue (key, verbatim): `Page found in maple aftermath (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Page | definition | - |  |
| found in | indicator | hidden | Hidden-word indicator. |
| maple aftermath | fodder | partial |  |

Notes/flags: parse from tutorial hint and completion text ("mapLEAFtermath").

### 45. TEA: Learn: Initial Letters (cafe tutorial, step 1)
Clue (key, verbatim): `Drink initially taken every afternoon (3)`
tutorial: cafe

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Drink | definition | - |  |
| initially | indicator | letter-selection | Letter-selection indicator. |
| taken every afternoon | fodder | partial |  |

Notes/flags: approved new per drafts TEA ("Initial letters of Taken Every Afternoon; indicator 'initially'; definition 'Drink'").

### 46. TALES: Learn: Anagrams (town tutorial, step 2)
Clue (key, verbatim): `Steal, somehow, these stories (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Steal | fodder | direct |  |
| somehow | indicator | anagram | Anagram indicator. |
| these | link | - |  |
| stories | definition | - |  |

Notes/flags: parse from tutorial step text ("'Somehow' is the anagram indicator. Rearrange the letters of 'steal.'").

### 47. WINE: Learn: Containers (adventure tutorial, step 2)
Clue (key, verbatim): `We hold 'in' the drink (4)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| We | fodder | direct |  |
| hold | indicator | container | Container indicator. |
| 'in' | fodder | direct |  |
| the drink | definition | - |  |

Notes/flags: parse from tutorial step text ("WE is the outer word. IN goes inside it."). Key includes the straight single quotes around 'in'; they are part of the clue string.

### 48. LIGHT: Learn: Double Definitions (library tutorial, step 1)
Clue (key, verbatim): `Not heavy and illumination (5)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Not heavy and illumination (5) | double | - | Two definitions of the same answer. |

Notes/flags: parse from tutorial hint ("What word means 'not heavy' AND also means 'illumination'?").

### 49. CURE: Learn: Combination Clues (workshop tutorial, step 2)
Clue (key, verbatim): `First of royal cue, broken, is a remedy (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| First of | indicator | letter-selection | Letter-selection indicator. |
| royal | fodder | partial |  |
| cue | fodder | direct |  |
| broken | indicator | anagram | Anagram indicator. |
| is | link | - |  |
| a remedy | definition | - |  |

Notes/flags: parse from tutorial step text and hint ("'First of royal' = R... rearrange all four letters").

### 50. EARTH: Learn: Advanced Anagrams (beach tutorial, step 1)
Clue (key, verbatim): `Heart, shattered, becomes the planet (5)`
tutorial: beach

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Heart | fodder | direct |  |
| shattered | indicator | anagram | Anagram indicator. |
| becomes | link | - |  |
| the planet | definition | - |  |

Notes/flags: parse from tutorial step text ("'Shattered' tells you to rearrange 'heart.' The definition is 'the planet.'").

### 51. SCAR: Learn: Deletions (cove tutorial, step 2)
Clue (key, verbatim): `Scare endlessly leaves a mark (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Scare | fodder | direct |  |
| endlessly | indicator | deletion | Deletion indicator. |
| leaves | link | - |  |
| a mark | definition | - |  |

Notes/flags: parse from tutorial step text and hint ("SCARE without its final E").

### 52. SAIL: Learn: Homophones (observatory tutorial, step 2)
Clue (key, verbatim): `Bargain event heard on a boat (4)`
tutorial: observatory

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Bargain event | fodder | substitution | This word stands in for another. Substitute it first, then apply the wordplay indicator. |
| heard | indicator | homophone | Homophone indicator. |
| on a boat | definition | - |  |

Notes/flags: this is the OLD wording Joshua deliberately reverted to (drafts: "SAIL: REVERTED to old 'Bargain event heard on a boat (4)' per Joshua"). The drafts note the definition is locative ("on a boat") rather than a strict synonym, annotated as the game teaches it.

---

## Summary

| surface | clues |
|---|---|
| Story clues (STORIES puzzle + multi_puzzle steps) | 30 |
| Bonus challenges (10 showClueChallenge + 2 cafe napkins) | 12 |
| Learn tutorials (TUTORIALS) | 10 |
| **Total proposed for annotation** | **52** |

Of the 52, one (DINE, #07) is already approved and live; 51 await sign-off.

**Not annotated / needs Joshua's call:**
1. **Docks welcome note** `!EMOH EMOCLEW .S.P` (story step 4). mirror-writing puzzle, not a cryptic clue; proposed EXCLUDED from anatomy.
2. **#26 HOME**. FLAG: verify parse. Wordplay is documented in the hint; the definition extent ("I live here!") is my reading, not in any ledger.
3. **Charade tutorial gap**. #25 COMET, #29 MAST, #31 PLANET, #39 CABIN are pure charades with no matching Learn lesson; assigned `workshop` (nearest: building from pieces). Confirm or pick another home.
4. **#35 DRAGON**. minor: "makes proceedings" segmented as pure link; sanity-check the boundary.
5. **#38 LUNATIC**. minor: "anchor's head" carried as fodder-partial (it names the deleted letter); schema judgement call.
6. Beach jumbles (TRCPIYC shell puzzle, DLROW CITPYRC TIB bottle) are letter toys, not cryptic clues, so no annotation proposed.

**Self-check (2026-07-10): PASSED, 52/52, zero failures.** All 52 `Clue (key, verbatim)` strings
above were programmatically extracted and verified byte-identical against index.html. 46 match the raw
source directly; the 6 keys containing straight quotes (#17 HOARD, #23 STAR, #29 MAST, #38 LUNATIC,
#39 CABIN, #47 WINE) match the source's JS-escaped form (`\'` inside single-quoted strings), i.e. they
are byte-identical to the runtime string that the annotate() lookup actually sees.

---

## Section 5: Copy proposals (item 4 + teach copy; approve / edit / veto each)

Drafted in-voice (bc-writer, reviewed against voice-and-characters.md). None of these are wired in yet.

### 5.1 Germany pre-empt (a): Guardian narrative sentence
**Where:** Tower story, the narrative beat before the DINE clue ("Before you go. This tower guards a second principle..."), inserted after "Some answers must be assembled."
> "Advisory: this tower files entire nations under their two postal letters. Storage is finite."

(If it must be strictly one sentence, drop "Storage is finite.", but that fragment carries the Guardian's humor.)

### 5.2 Germany pre-empt (b): new level-0 hint on the DINE step
**Where:** prepended to the DINE hint ladder (existing hint becomes level 1).
> "A container clue: one word placed inside another. Before you nest anything, shrink the country. The island writes every nation as its two postal letters."

### 5.3 Breadcrumb: FLOAT / SIMON
**Where:** replaces the "Set Sail" placeholder modal at the Docks ("New destinations coming in future updates!").
> The Dock Keeper follows your gaze past the masts. "Ships aren't the only trade through here. A captain called Simon runs cargo above the weather, and not once has he tied up at my dock." He nods at the sky, where the clouds have drifted into a queue, some single, some stacked in pairs. "They've been spelling something up there for years. If you can't read it, just tell the terminal what clouds do all day."

(Also finally gives the Morse-cloud easter egg an in-game witness; SIMON named plainly per MARK precedent, FLOAT reachable two ways.)

### 5.4 Breadcrumb: COME IN / WELCOME HOME
**Where:** new `postscript` on the Cluey Cove Treasure Chest challenge (after the IRATE drawer opens), same slot as the MARK breadcrumb.
> Under the pearl lies a note in faded ink: "Walked the south shore at dusk. There's a gap in the wildflowers the exact shape of a cottage, and smoke where no chimney stands. The terminal knows the place. Offer it what a door says when it means it, or what the Dock Keeper's note has said all along."

**Open decision:** note stays anonymous (recommended, keeps which-islander-is-which open) vs. attributed to the FISH angler.

### 5.5 Breadcrumb: KAIT
**Where:** new workshop action `Look Around the Bench` on the Puzzle Workshop card.
> A knitted frog sits on the warmest corner of the workbench, clearly not stock. A tag on its foot reads, in careful stitches: MADE BY KAIT. Croc pats it on his way past. "She furnishes the place," he says. "The terminal's fond of her too."

**Open decision:** action label "Look Around the Bench" (recommended) vs. folding into "Enter Workshop" when the Adventure link ships.

### 5.6 Teach copy: help-overlay anatomy legend intro
> Every cryptic clue has three working parts: a definition that means the answer, an indicator that names the trick, and fodder, the raw letters the trick works on. The chips below color-code each part so you can spot them in any clue.

### 5.7 Teach copy: struggling-link label (after 2 wrong answers)
bc-writer vetoes "Struggling?" (reads as the game diagnosing the player). Recommended:
> Stuck? Learn: {technique}

Alternate: `See how {technique} works`

### 5.8 Teach copy: tutorial phase-2 HUD step (replaces current copy)
> Settings and your profile live behind the gear icon. The ? beside it opens the help guide whenever a clue won't give.

### 5.9 Already shipped teach copy (flag, veto reverts it)
The one-time coach mark on the first annotated clue (currently live with the DINE sample):
> Every clue has moving parts. Tap any word to see the job it does.

---

## Post-sign-off wiring checklist (blocked on this document)

- [ ] Merge approved rows into `js/clueAnnotations.js` (keys must match the RUNTIME string; unescape the source's `\'` for the 6 flagged keys)
- [ ] Wire `BCWClueAnatomy.annotate` into the cafe napkin `showGameModal` path (MOCHA/DECAF currently bypass the challenge hook)
- [ ] Anatomy legend section into `#help-anatomy-section` of the help overlay (5.6)
- [ ] Struggling links (5.7) in story `checkAnswer` + `checkChallenge` at wrongCount >= 2, via the annotation `tutorial` field, with mid-story tutorial jump + resume
- [ ] Germany edits (5.1 / 5.2 as approved)
- [ ] Breadcrumbs (5.3–5.5 as approved)
- [ ] Tutorial phase-2 HUD copy (5.8)
- [ ] Re-run clue-freeze check + full smoke suite after wiring
