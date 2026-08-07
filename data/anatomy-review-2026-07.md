# Clue Anatomy Review — 2026-07-10

Sign-off document for the interactive clue-anatomy feature (`js/clueAnatomy.js` +
`js/clueAnnotations.js`). Every cryptic clue in the island game, with proposed
per-word parse annotations. Nothing here ships until approved: only signed-off
rows get merged into `CLUE_ANNOTATIONS` in `js/clueAnnotations.js`.

**How to review:** per clue block, mark **approve** / **edit** (write the fix inline) /
**veto** (clue gets no anatomy — it renders exactly as today). Segment rules: keys are
byte-identical to the source clue string (no surrounding quotes); segments are contiguous
substrings in order; roles are definition / indicator / fodder / link; fodder usage is
direct / substitution / partial; indicators carry their operation. Level-2 `info` is what
the player sees on second tap.

**Parse provenance:** all parses derive from the game's own hint/wrongReactions/explanation
text, cross-checked against `data/clue-drafts-2026-07-03.json` (authoritative for every
2026-07 change). No parse below is invented.

- [ ] **APPROVE: reuse of field-guide sand #D9B48A as the fodder color in World**

**Tutorial ids** (verified against the TUTORIALS object in index.html): docks=Reversals,
forest=Hidden Words, cafe=Initial Letters, town=Anagrams, adventure=Containers,
library=Double Definitions, workshop=Combination Clues, beach=Advanced Anagrams,
cove=Deletions, observatory=Homophones. There is **no dedicated charade tutorial** —
pure charades are pointed at `workshop` (nearest lesson: building answers from pieces).
Flagged below wherever that call is mine, not the game's.

---

## Section 1 — Story clues (STORIES object)

**Excluded, for the record:** docks story step 4 asks the player to decode
`!EMOH EMOCLEW .S.P` (→ WELCOME HOME). It is a whole-string mirror-writing puzzle, not a
cryptic clue — no definition, no indicator, nothing to segment. Recommend it gets no
anatomy entry. **FLAG: confirm exclusion.**

### 01. CAFE — Whispers Among the Pines (forest story, step 3)
Clue (key, verbatim): `Face remodelled into a place for coffee (4)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Face | fodder | direct | Fodder, used directly — the four letters of FACE are the raw material. |
| remodelled | indicator | anagram | Indicator — names the operation: an anagram. "Remodelled" tells you to rearrange the nearby letters. |
| into | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a place for coffee | definition | — | Definition — points at the meaning: somewhere in the "coffee shop" direction. |

Notes/flags: parse from hint + fox wrongReactions ("remodelled" = shuffle, rearrange "face").

### 02. SIP — The Barista's Clue (cafe story, step 2)
Clue (key, verbatim): `Something instantly perky, starts a mouthful (3)`
tutorial: cafe

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Something instantly perky | fodder | partial | Fodder, used partially — only the first letter of each of these three words is taken. |
| starts | indicator | letter-selection | Indicator — names the operation: letter selection. "Starts" says take the beginnings of the words before it. |
| a mouthful | definition | — | Definition — points at the meaning: a small taste in the "drink a little" direction. |

Notes/flags: parse from hint ("initial letters clue... first letter of each word before it").

### 03. TOWER — The Heart of the Island (town story, step 3, multi_puzzle 1/3)
Clue (key, verbatim): `Wrote, mangled, a tall building (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Wrote | fodder | direct | Fodder, used directly — the five letters of WROTE go into the mix. |
| mangled | indicator | anagram | Indicator — names the operation: an anagram. "Mangled" says the letters are mixed up. |
| a tall building | definition | — | Definition — points at the meaning: a structure in the "tall building" direction. |

Notes/flags: parse from step hint ("All three are anagrams... mangled") and wrongReaction 1.

### 04. LIBRARY — The Heart of the Island (town story, step 3, multi_puzzle 2/3)
Clue (key, verbatim): `Moved by rail right to the book house (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Moved | indicator | anagram | Indicator — names the operation: an anagram. "Moved" stirs everything that follows it. |
| by rail | fodder | direct | Fodder, used directly — the six letters of BY RAIL join the shuffle. |
| right | fodder | substitution | Fodder by substitution — "right" becomes its single-letter abbreviation R and joins the mix. |
| to | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| the book house | definition | — | Definition — points at the meaning: a building in the "where the books live" direction. |

Notes/flags: parse per `clue-drafts-2026-07-03.json` town.fountain.LIBRARY (approved new 2026-07-03). Technically anagram + abbreviation, but the game teaches it as an anagram (step hint: "'right' contributes a single letter R to the mix"), so tutorial=town.

### 05. WORKSHOP — The Heart of the Island (town story, step 3, multi_puzzle 3/3)
Clue (key, verbatim): `Hop works, scrambled, a place to build (8)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Hop works | fodder | direct | Fodder, used directly — all eight letters of HOP WORKS are the raw material. |
| scrambled | indicator | anagram | Indicator — names the operation: an anagram. "Scrambled" means rearrange. |
| a place to build | definition | — | Definition — points at the meaning: a room in the "place where things get built" direction. |

Notes/flags: parse from step hint and wrongReaction 3.

### 06. HERO — The Tower's Challenge (adventure story, step 2)
Clue (key, verbatim): `Warrior seized by the road (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Warrior | definition | — | Definition — points at the meaning: someone in the "brave champion" direction. |
| seized by | indicator | hidden | Indicator — names the operation: a hidden word. The answer is held captive inside the words that follow. |
| the road | fodder | partial | Fodder, used partially — the answer's letters sit in a row across "the road", bridging the gap between the words. |

Notes/flags: parse per drafts ledger (approved new): hidden in t(HE RO)ad; indicator "seized by"; definition "Warrior".

### 07. DINE — The Tower's Challenge (adventure story, step 5)
Clue (key, verbatim): `Eat in, embraced by Germany (4)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Eat | definition | — | Definition — points at the meaning. The answer is a verb in the "eat, have a meal" direction. |
| in | fodder | direct | Fodder, used directly — the letters IN go into the answer unchanged. |
| embraced by | indicator | container | Indicator — names the operation: a container. One piece is placed inside another. |
| Germany | fodder | substitution | Fodder by substitution — Germany becomes its abbreviation, DE. DE embracing IN gives D-IN-E. |

Notes/flags: **already approved and shipping** — this block is the live `CLUE_ANNOTATIONS` entry, verbatim, per drafts decision "DINE: APPROVED option A". Listed for completeness; no action needed.

### 08. MAP — The Forbidden Shelf (library story, step 3)
Clue (key, verbatim): `Chart or plan (3)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Chart | definition | — | Definition #1 — one meaning of the answer: something in the "drawn guide to the land" direction. |
| or | link | — | Link word — sits between the two definitions; carries no letters. |
| plan | definition | — | Definition #2 — the same word again, this time as a verb in the "work out a route" direction. |

Notes/flags: double definition per hint ("A chart is one. A plan is the other.").

### 09. NOVEL — The Forbidden Shelf (library story, step 4)
Clue (key, verbatim): `New book (5)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| New | definition | — | Definition #1 — the answer as an adjective in the "fresh, original" direction. |
| book | definition | — | Definition #2 — the answer as a noun in the "something you read" direction. |

Notes/flags: double definition per hint; also recorded in drafts newGuideSections (reused from Library story).

### 10. LEAVES — The Forbidden Shelf (library story, step 5)
Clue (key, verbatim): `Departs or pages (6)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Departs | definition | — | Definition #1 — the answer as a verb in the "goes away" direction. |
| or | link | — | Link word — sits between the two definitions; carries no letters. |
| pages | definition | — | Definition #2 — the answer as a noun in the "sheets of a book" direction. |

Notes/flags: double definition per hint; also in drafts newGuideSections.

### 11. BEACH — Gears and Clues (workshop story, step 2)
Clue (key, verbatim): `Ache stirred after beginning of boating for a sandy shore (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Ache | fodder | direct | Fodder, used directly — the four letters of ACHE are one ingredient. |
| stirred | indicator | anagram | Indicator — names the operation: an anagram. "Stirred" jumbles the letters of ACHE. |
| after | indicator | charade | Indicator — names the operation: positioning. The stirred letters go after the other piece. |
| beginning of | indicator | letter-selection | Indicator — names the operation: letter selection. Take only the first letter of the next word. |
| boating | fodder | partial | Fodder, used partially — only its beginning, the letter B, is kept. |
| for | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a sandy shore | definition | — | Definition — points at the meaning: somewhere in the "sand and waves" direction. |

Notes/flags: Joshua's approved wording per drafts decisions ("EACH (ache stirred) after B"). Two techniques in one clue → workshop (combination) tutorial.

### 12. GEARS — Gears and Clues (workshop story, step 4)
Clue (key, verbatim): `Rages shattered these cogs (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Rages | fodder | direct | Fodder, used directly — the five letters of RAGES are the raw material. |
| shattered | indicator | anagram | Indicator — names the operation: an anagram. "Shattered" means rearrange. |
| these | link | — | Link word — surface glue between wordplay and definition; carries no letters. |
| cogs | definition | — | Definition — points at the meaning: parts in the "toothed wheels of a machine" direction. |

Notes/flags: parse from hint ("'Shattered' means rearrange").

### 13. PARTS — Gears and Clues (workshop story, step 5)
Clue (key, verbatim): `Traps reworked become components (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Traps | fodder | direct | Fodder, used directly — the five letters of TRAPS go into the mix. |
| reworked | indicator | anagram | Indicator — names the operation: an anagram. "Reworked" says rebuild the letters. |
| become | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| components | definition | — | Definition — points at the meaning: things in the "pieces of a whole" direction. |

Notes/flags: parse from hint ("'Reworked' is an anagram indicator").

### 14. SHORE — Letters in the Sand (beach story, step 2)
Clue (key, verbatim): `Horse, broken, on the coastline (5)`
tutorial: beach

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Horse | fodder | direct | Fodder, used directly — the five letters of HORSE are the raw material. |
| broken | indicator | anagram | Indicator — names the operation: an anagram. "Broken" means the letters come apart and reassemble. |
| on the | link | — | Link words — surface glue before the definition; carry no letters. |
| coastline | definition | — | Definition — points at the meaning: the strip in the "where land meets sea" direction. |

Notes/flags: parse from hint ("'Broken' is the anagram indicator... definition is 'coastline'"). Assigned to the beach's own Advanced Anagrams lesson (it lives there); town also valid.

### 15. COVE — The Cluey Depths (cove story, step 2)
Clue (key, verbatim): `Shelter endlessly is a bay (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Shelter | fodder | substitution | Fodder by substitution — "shelter" becomes a five-letter synonym, COVER, before the cutting starts. |
| endlessly | indicator | deletion | Indicator — names the operation: a deletion. "Endlessly" removes the last letter. |
| is | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a bay | definition | — | Definition — points at the meaning: an inlet in the "sheltered bit of coastline" direction. |

Notes/flags: parse from hint ("'endlessly' tells you to remove the last letter... word for 'shelter'").

### 16. CAVE — The Cluey Depths (cove story, step 4)
Clue (key, verbatim): `Sculpt without right makes a hollow (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Sculpt | fodder | substitution | Fodder by substitution — "sculpt" becomes its five-letter synonym CARVE before anything is removed. |
| without right | indicator | deletion | Indicator — names the operation: a deletion. "Without right" means take out the letter R. |
| makes | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a hollow | definition | — | Definition — points at the meaning: a space in the "opening in the rock" direction. |

Notes/flags: parse from hint ("'without right' means remove the letter R... word for 'sculpt'").

### 17. HOARD — The Dragon's Hoard (lair story, step 3)
Clue (key, verbatim): `Tough about love, a dragon's pile (5)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Tough | fodder | substitution | Fodder by substitution — "tough" becomes its four-letter synonym HARD, the outer wrapper. |
| about | indicator | container | Indicator — names the operation: a container. "About" wraps one piece around another. |
| love | fodder | substitution | Fodder by substitution — in tennis, love is a score of zero, giving the letter O. |
| a dragon's pile | definition | — | Definition — points at the meaning: a stash in the "everything a dragon sleeps on" direction. |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("HARD (tough) about O (love)").

### 18. INFERNO — The Dragon's Hoard (lair story, step 5)
Clue (key, verbatim): `Iron fen forged into a blaze (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Iron fen | fodder | direct | Fodder, used directly — the seven letters of IRON FEN go into the forge together. |
| forged | indicator | anagram | Indicator — names the operation: an anagram. "Forged" melts and recasts the letters. |
| into | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a blaze | definition | — | Definition — points at the meaning: a fire in the "roaring, out-of-control" direction. |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("anagram of IRON FEN ('forged')").

### 19. TREASURE — The Dragon's Hoard (lair story, step 7)
Clue (key, verbatim): `Riches make one strangely austerer (8)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Riches | definition | — | Definition — points at the meaning: wealth in the "gold and jewels" direction. |
| make one | link | — | Link words — surface glue between definition and wordplay; carry no letters. |
| strangely | indicator | anagram | Indicator — names the operation: an anagram. "Strangely" points at the odd word beside it. |
| austerer | fodder | direct | Fodder, used directly — all eight letters of AUSTERER get rearranged. |

Notes/flags: approved 2026-07-05 per drafts lairHardClues ("anagram of AUSTERER ('strangely'); def 'Riches'. Wording per Joshua.").

### 20. MARK — The Mark on The Moon (moon story, step 3)
Clue (key, verbatim): `Blemish is also a target (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Blemish | definition | — | Definition #1 — the answer as a noun in the "stain or scratch on a surface" direction. |
| is also | link | — | Link words — sit between the two definitions; carry no letters. |
| a target | definition | — | Definition #2 — the same word in the "something you aim at" direction. |

Notes/flags: double definition per hint ("Both halves of the clue point to the same four-letter word.").

### 21. CRATER — The Mark on The Moon (moon story, step 5)
Clue (key, verbatim): `Lunar feature from confused tracer (6)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Lunar feature | definition | — | Definition — points at the meaning: something in the "hole on the moon's surface" direction. |
| from | link | — | Link word — joins the definition to the wordplay; carries no letters. |
| confused | indicator | anagram | Indicator — names the operation: an anagram. "Confused" jumbles the next word. |
| tracer | fodder | direct | Fodder, used directly — the six letters of TRACER get rearranged. |

Notes/flags: parse from hint ("'Confused' is the anagram indicator. Rearrange the letters of TRACER.").

### 22. ECLIPSE — The Mark on The Moon (moon story, step 6)
Clue (key, verbatim): `Overshadow left in shattered pieces (7)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Overshadow | definition | — | Definition — points at the meaning: a verb in the "block out another's light" direction. |
| left | fodder | substitution | Fodder by substitution — "left" is crossword shorthand for the single letter L. |
| in | indicator | container | Indicator — names the operation: a container. The L slots inside the wreckage of the other piece. |
| shattered | indicator | anagram | Indicator — names the operation: an anagram. "Shattered" breaks the next word apart. |
| pieces | fodder | direct | Fodder, used directly — the six letters of PIECES get shattered, then hold the L. |

Notes/flags: approved new composition per drafts ("L ('left') inside an anagram of PIECES ('shattered')"). Two mechanisms → workshop tutorial.

### 23. STAR — Celestial Wordplay (observatory story, step 3)
Clue (key, verbatim): `Celebrity's heavenly body (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Celebrity | definition | — | Definition #1 — the answer as a person in the "famous face on the red carpet" direction. |
| 's | link | — | Link — the possessive glues the two definitions into one surface; carries no letters. |
| heavenly body | definition | — | Definition #2 — the same word in the "point of light in the night sky" direction. |

Notes/flags: double definition per hint ("Both 'Celebrity' and 'heavenly body' are separate definitions.").

### 24. NOVA — Celestial Wordplay (observatory story, step 5)
Clue (key, verbatim): `Stellar explosion in casino vault (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Stellar explosion | definition | — | Definition — points at the meaning: an event in the "sudden burst of starlight" direction. |
| in | indicator | hidden | Indicator — names the operation: a hidden word. "In" says the answer is sitting inside what follows. |
| casino vault | fodder | partial | Fodder, used partially — the answer runs straight across the boundary of "casino vault". |

Notes/flags: approved option A per drafts ("hidden casi(NO VA)ult"); story teaching switched from reversal to hidden word 2026-07-03.

### 25. COMET — Celestial Wordplay (observatory story, step 7)
Clue (key, verbatim): `Company encountered celestial visitor (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Company | fodder | substitution | Fodder by substitution — "company" becomes its two-letter business abbreviation, CO. |
| encountered | fodder | substitution | Fodder by substitution — "encountered" becomes a three-letter synonym, MET, bolted on behind. |
| celestial visitor | definition | — | Definition — points at the meaning: something in the "icy visitor from deep space" direction. |

Notes/flags: charade per hint ("each part of the clue gives you a fragment to assemble"); charades carry no indicator by convention. **FLAG: no charade tutorial exists — assigned workshop; confirm.**

### 26. HOME — A Place to Call Home (house story, step 3)
Clue (key, verbatim): `Head of household? Ring me, I live here! (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Head of | indicator | letter-selection | Indicator — names the operation: letter selection. "Head of" takes only the first letter of the next word. |
| household | fodder | partial | Fodder, used partially — only its head, the letter H, is kept. |
| Ring | fodder | substitution | Fodder by substitution — a ring is round, giving the round letter O. |
| me | fodder | direct | Fodder, used directly — the letters ME go in unchanged. |
| I live here! | definition | — | Definition — points at the meaning: the place in the "where you belong at the end of the day" direction. |

Notes/flags: parse from hint ("'Head of' means take the first letter. 'Ring' is a round letter. Keep 'me' just as it is."). **FLAG: verify parse** — the definition's exact extent is my reading (hint covers the wordplay only; "I live here!" as definition is semi-&lit). Not in the drafts ledger.

### 27. VOYAGE — The Sky Captain's Collection (airship story, step 3)
Clue (key, verbatim): `Savoy agent conceals a journey (6)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Savoy agent | fodder | partial | Fodder, used partially — the answer's letters run in a row across "Savoy agent", spanning the gap. |
| conceals | indicator | hidden | Indicator — names the operation: a hidden word. "Conceals" says these words are hiding the answer. |
| a journey | definition | — | Definition — points at the meaning: a trip in the "long expedition" direction. |

Notes/flags: parse from hint ("tucked inside the surrounding words... where 'savoy' ends and 'agent' begins").

### 28. COAST — The Sky Captain's Collection (airship story, step 5)
Clue (key, verbatim): `Tacos, adrift, along the shoreline (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Tacos | fodder | direct | Fodder, used directly — the five letters of TACOS are the raw material. |
| adrift | indicator | anagram | Indicator — names the operation: an anagram. "Adrift" sets the letters loose to resettle. |
| along the shoreline | definition | — | Definition — points at the meaning: the strip in the "where the sea meets the land" direction. |

Notes/flags: approved per drafts ("Anagram of TACOS = COAST; indicator 'adrift'; definition 'along the shoreline'").

### 29. MAST — The Sky Captain's Collection (airship story, step 7)
Clue (key, verbatim): `Mum's street pole (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Mum | fodder | substitution | Fodder by substitution — "mum" becomes the short word for mother, MA. |
| 's | link | — | Link — the possessive smooths the surface; carries no letters. |
| street | fodder | substitution | Fodder by substitution — "street" becomes its street-sign abbreviation, ST, bolted on behind. |
| pole | definition | — | Definition — points at the meaning: an upright in the "tall spar on a ship" direction. |

Notes/flags: approved new charade per drafts ("MA ('mum') + ST ('street')"). **FLAG: no charade tutorial exists — assigned workshop; confirm.**

### 30. REEL — The Quiet Catch (pond story, step 2)
Clue (key, verbatim): `Stagger on a fishing spool (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Stagger | definition | — | Definition #1 — the answer as a verb in the "sway on your feet" direction. |
| on | link | — | Link word — sits between the two definitions; carries no letters. |
| a fishing spool | definition | — | Definition #2 — the same word as a noun in the "winds the line in" direction. |

Notes/flags: double definition per hint ("a word that means both 'to stagger' and 'a spool used for fishing line'").

---

## Section 2 — Bonus challenges (showClueChallenge + cafe napkin rotation)

### 31. PLANET — Stargaze (observatory bonus, showClueChallenge)
Clue (key, verbatim): `Scheme with the alien for a world (6)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Scheme | fodder | substitution | Fodder by substitution — "scheme" becomes a four-letter synonym, PLAN, the front piece. |
| with | indicator | charade | Indicator — names the operation: joining. "With" bolts the two pieces together, front to back. |
| the alien | fodder | substitution | Fodder by substitution — the most famous alien in the movies is two letters: ET. |
| for | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a world | definition | — | Definition — points at the meaning: a body in the "orbits a sun" direction. |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PLAN (scheme) + ET (alien)"). **FLAG: no charade tutorial exists — assigned workshop; confirm.**

### 32. IRATE — Treasure Chest (cove bonus, showClueChallenge)
Clue (key, verbatim): `Pirate beheaded is furious (5)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Pirate | fodder | direct | Fodder, used directly — the letters of PIRATE, before the axe falls. |
| beheaded | indicator | deletion | Indicator — names the operation: a deletion. "Beheaded" removes exactly the first letter. |
| is | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| furious | definition | — | Definition — points at the meaning: a mood in the "boiling angry" direction. |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PIRATE - P; def 'furious'").

### 33. PLAN — Cave Inscription (cove bonus, showClueChallenge)
Clue (key, verbatim): `Plank cut short reveals a scheme (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Plank | fodder | direct | Fodder, used directly — the letters of PLANK, before it gets trimmed. |
| cut short | indicator | deletion | Indicator — names the operation: a deletion. "Cut short" removes the last letter. |
| reveals | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a scheme | definition | — | Definition — points at the meaning: something in the "thing you plot" direction. |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("PLANK - K; def 'a scheme'").

### 34. CHEST — Dragon's Clue (lair bonus, showClueChallenge)
Clue (key, verbatim): `Treasure hidden in each estimate (5)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Treasure | definition | — | Definition — points at the meaning: a box in the "what the loot gets kept in" direction. |
| hidden in | indicator | hidden | Indicator — names the operation: a hidden word. The answer sits tucked inside the words that follow. |
| each estimate | fodder | partial | Fodder, used partially — the answer runs straight across the boundary of "each estimate". |

Notes/flags: this is the OLD wording Joshua deliberately reverted to (drafts: "CHEST: REVERTED to old ... per Joshua"); the drafts also record the definition is loose (a chest holds treasure). Annotated as the game teaches it — definition info steers toward the container sense. Reused in the bonus per reusedInBonusChallenges_2026-07-05.

### 35. DRAGON — Scorched Scroll (lair bonus, showClueChallenge)
Clue (key, verbatim): `This beast makes proceedings drag on (6)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| This beast | definition | — | Definition #1 — the answer as a creature in the "fire-breathing mythical" direction. |
| makes proceedings | link | — | Link words — surface glue setting up the second meaning; carry no letters. |
| drag on | definition | — | Definition #2 — the same letters read as two words, in the "be tedious, take forever" direction. |

Notes/flags: double definition per challenge hints/explanation ("The beast itself, and DRAG ON, to be tedious"). Segment boundary of "makes proceedings" as pure link is my reading — minor, but flagging for a look.

### 36. FURNACE — Wall Carvings (lair bonus, showClueChallenge)
Clue (key, verbatim): `Fun race, wildly, leads to the source of heat (7)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Fun race | fodder | direct | Fodder, used directly — the seven letters of FUN RACE go into the blaze together. |
| wildly | indicator | anagram | Indicator — names the operation: an anagram. "Wildly" throws the letters into disorder. |
| leads to | link | — | Link words — join the wordplay to the definition; carry no letters. |
| the source of heat | definition | — | Definition — points at the meaning: the thing in the "keeps the forge roaring" direction. |

Notes/flags: approved per drafts ("Anagram of FUN RACE; indicator 'wildly'"); reused in the bonus per reusedInBonusChallenges_2026-07-05.

### 37. BEAM — Mark (moon bonus, showClueChallenge)
Clue (key, verbatim): `A shaft of moonlight smiles widely (4)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| A shaft of moonlight | definition | — | Definition #1 — the answer as a noun in the "ray of light" direction. |
| smiles widely | definition | — | Definition #2 — the same word as a verb in the "grin from ear to ear" direction. |

Notes/flags: approved 2026-07-05 per drafts moonChallenges ("double definition... Wording per Joshua.").

### 38. LUNATIC — Mark's Clue (moon bonus, showClueChallenge)
Clue (key, verbatim): `Nautical, dropping anchor's head, turns moonstruck (7)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Nautical | fodder | direct | Fodder, used directly — the eight letters of NAUTICAL, before anything is dropped. |
| dropping | indicator | deletion | Indicator — names the operation: a deletion. "Dropping" throws one letter overboard. |
| anchor's head | fodder | partial | Fodder, used partially — it names the casualty: the head of "anchor", a single A, leaves the ship. |
| turns | indicator | anagram | Indicator — names the operation: an anagram. "Turns" rearranges what's left. |
| moonstruck | definition | — | Definition — points at the meaning: someone in the "moon-addled, wildly irrational" direction. |

Notes/flags: approved 2026-07-05 per drafts moonChallenges ("NAUTICAL minus A (anchor's head), anagrammed ('turns')"). Deletion + anagram → workshop tutorial. "anchor's head" as fodder-partial (it specifies the deleted letter) is a schema judgement call — flagging for a look.

### 39. CABIN — Simon (airship bonus, showClueChallenge)
Clue (key, verbatim): `Taxi in? There's your quarters aboard (5)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Taxi | fodder | substitution | Fodder by substitution — "taxi" becomes its three-letter synonym, CAB, the front piece. |
| in | fodder | direct | Fodder, used directly — the little word IN is already sitting in the clue, bolted on behind. |
| There's | link | — | Link word — hands the wordplay over to the definition; carries no letters. |
| your quarters aboard | definition | — | Definition — points at the meaning: the room in the "where you sleep on a ship" direction. |

Notes/flags: approved 2026-07-05 per drafts bonusChallenges ("CAB (taxi) + IN... 'There's' wording per Joshua"). **FLAG: no charade tutorial exists — assigned workshop; confirm.**

### 40. DRAWER — Simon's Collection (airship bonus, showClueChallenge)
Clue (key, verbatim): `Reward sent back: a place for socks (6)`
tutorial: docks

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Reward | fodder | direct | Fodder, used directly — the six letters of REWARD, ready to about-face. |
| sent back | indicator | reversal | Indicator — names the operation: a reversal. "Sent back" reads the word right to left. |
| a place for socks | definition | — | Definition — points at the meaning: the spot in the "slides out of a dresser" direction. |

Notes/flags: approved per drafts guide.reversal1 spare ("Reward sent back: a place for socks (6)' = DRAWER"), placed per reusedInBonusChallenges_2026-07-05.

### 41. MOCHA — Order a Puzzle (cafe napkin rotation, showGameModal)
Clue (key, verbatim): `Flustered macho gets a coffee (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Flustered | indicator | anagram | Indicator — names the operation: an anagram. "Flustered" stirs the next word's letters. |
| macho | fodder | direct | Fodder, used directly — the five letters of MACHO go into the cup. |
| gets | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a coffee | definition | — | Definition — points at the meaning: a drink in the "chocolatey coffee order" direction. |

Notes/flags: approved new 2026-07-03 per drafts cafe.napkin.MOCHA. Renders via showGameModal (answer behind the flip-the-napkin reveal), not showClueChallenge — the anatomy hook isn't wired there today; annotation is harmless but dormant until it is. In the source the clue string carries its own literal double quotes; the key above is the text between them, matching the annotate() convention.

### 42. DECAF — Order a Puzzle (cafe napkin rotation, showGameModal)
Clue (key, verbatim): `Faced about for coffee without the kick (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Faced | fodder | direct | Fodder, used directly — the five letters of FACED are the raw material. |
| about | indicator | anagram | Indicator — names the operation: an anagram. "About" turns the letters around into a new order. |
| for | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| coffee without the kick | definition | — | Definition — points at the meaning: an order in the "coffee minus the caffeine" direction. |

Notes/flags: approved new 2026-07-03 per drafts cafe.napkin.DECAF. Same dormant-hook note as MOCHA.

---

## Section 3 — Learn tutorials (TUTORIALS object)

### 43. STAR — Learn: Reversals (docks tutorial, step 2)
Clue (key, verbatim): `Vermin returning as a celestial body (4)`
tutorial: docks

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Vermin | fodder | substitution | Fodder by substitution — "vermin" becomes a four-letter synonym, RATS, before it turns around. |
| returning | indicator | reversal | Indicator — names the operation: a reversal. "Returning" reads the word backwards. |
| as | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a celestial body | definition | — | Definition — points at the meaning: something in the "point of light in the night sky" direction. |

Notes/flags: parse from tutorial hint ("'Vermin' = RATS. Reverse it.").

### 44. LEAF — Learn: Hidden Words (forest tutorial, step 2)
Clue (key, verbatim): `Page found in maple aftermath (4)`
tutorial: forest

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Page | definition | — | Definition — points at the meaning: something in the "single sheet of a book" direction. |
| found in | indicator | hidden | Indicator — names the operation: a hidden word. "Found in" says the answer is lying inside what follows. |
| maple aftermath | fodder | partial | Fodder, used partially — the answer's letters run straight across the boundary of "maple aftermath". |

Notes/flags: parse from tutorial hint and completion text ("mapLEAFtermath").

### 45. TEA — Learn: Initial Letters (cafe tutorial, step 1)
Clue (key, verbatim): `Drink initially taken every afternoon (3)`
tutorial: cafe

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Drink | definition | — | Definition — points at the meaning: something in the "hot cup in the afternoon" direction. |
| initially | indicator | letter-selection | Indicator — names the operation: letter selection. "Initially" takes the first letter of each word after it. |
| taken every afternoon | fodder | partial | Fodder, used partially — only the initials of these three words are kept. |

Notes/flags: approved new per drafts TEA ("Initial letters of Taken Every Afternoon; indicator 'initially'; definition 'Drink'").

### 46. TALES — Learn: Anagrams (town tutorial, step 2)
Clue (key, verbatim): `Steal, somehow, these stories (5)`
tutorial: town

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Steal | fodder | direct | Fodder, used directly — the five letters of STEAL are the raw material. |
| somehow | indicator | anagram | Indicator — names the operation: an anagram. "Somehow" says the letters land in some other order. |
| these | link | — | Link word — surface glue before the definition; carries no letters. |
| stories | definition | — | Definition — points at the meaning: things in the "told around a campfire" direction. |

Notes/flags: parse from tutorial step text ("'Somehow' is the anagram indicator. Rearrange the letters of 'steal.'").

### 47. WINE — Learn: Containers (adventure tutorial, step 2)
Clue (key, verbatim): `We hold 'in' the drink (4)`
tutorial: adventure

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| We | fodder | direct | Fodder, used directly — the letters WE form the outer shell. |
| hold | indicator | container | Indicator — names the operation: a container. "Hold" puts the next piece inside the first. |
| 'in' | fodder | direct | Fodder, used directly — the letters IN go inside the shell unchanged. |
| the drink | definition | — | Definition — points at the meaning: something in the "poured from a bottle at dinner" direction. |

Notes/flags: parse from tutorial step text ("WE is the outer word. IN goes inside it."). Key includes the straight single quotes around 'in' — they are part of the clue string.

### 48. LIGHT — Learn: Double Definitions (library tutorial, step 1)
Clue (key, verbatim): `Not heavy and illumination (5)`
tutorial: library

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Not heavy | definition | — | Definition #1 — the answer as an adjective in the "easy to lift" direction. |
| and | link | — | Link word — sits between the two definitions; carries no letters. |
| illumination | definition | — | Definition #2 — the same word as a noun in the "what a lamp gives off" direction. |

Notes/flags: parse from tutorial hint ("What word means 'not heavy' AND also means 'illumination'?").

### 49. CURE — Learn: Combination Clues (workshop tutorial, step 2)
Clue (key, verbatim): `First of royal cue, broken, is a remedy (4)`
tutorial: workshop

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| First of | indicator | letter-selection | Indicator — names the operation: letter selection. "First of" takes only the opening letter of the next word. |
| royal | fodder | partial | Fodder, used partially — only its first letter, R, joins the mix. |
| cue | fodder | direct | Fodder, used directly — the three letters of CUE join the R. |
| broken | indicator | anagram | Indicator — names the operation: an anagram. "Broken" rearranges all four letters together. |
| is | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| a remedy | definition | — | Definition — points at the meaning: something in the "makes you better" direction. |

Notes/flags: parse from tutorial step text and hint ("'First of royal' = R... rearrange all four letters").

### 50. EARTH — Learn: Advanced Anagrams (beach tutorial, step 1)
Clue (key, verbatim): `Heart, shattered, becomes the planet (5)`
tutorial: beach

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Heart | fodder | direct | Fodder, used directly — the five letters of HEART are the raw material. |
| shattered | indicator | anagram | Indicator — names the operation: an anagram. "Shattered" breaks the letters apart to reform. |
| becomes | link | — | Link word — joins the wordplay to the definition; carries no letters. |
| the planet | definition | — | Definition — points at the meaning: the one in the "ground beneath your feet" direction. |

Notes/flags: parse from tutorial step text ("'Shattered' tells you to rearrange 'heart.' The definition is 'the planet.'").

### 51. SCAR — Learn: Deletions (cove tutorial, step 2)
Clue (key, verbatim): `Scare endlessly leaves a mark (4)`
tutorial: cove

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Scare | fodder | direct | Fodder, used directly — the letters of SCARE, before the ending goes. |
| endlessly | indicator | deletion | Indicator — names the operation: a deletion. "Endlessly" removes the last letter. |
| leaves | link | — | Link word — surface verb handing wordplay to definition; carries no letters. |
| a mark | definition | — | Definition — points at the meaning: something in the "line left behind on the skin" direction. |

Notes/flags: parse from tutorial step text and hint ("SCARE without its final E").

### 52. SAIL — Learn: Homophones (observatory tutorial, step 2)
Clue (key, verbatim): `Bargain event heard on a boat (4)`
tutorial: observatory

| segment | role | usage/operation | L2 info |
|---|---|---|---|
| Bargain event | fodder | substitution | Fodder by substitution — a bargain event is a SALE, the word the answer merely sounds like. |
| heard | indicator | homophone | Indicator — names the operation: a homophone. "Heard" says the answer sounds like the previous piece. |
| on a boat | definition | — | Definition — points at the meaning: canvas territory — something you'd find rigged on a boat. |

Notes/flags: this is the OLD wording Joshua deliberately reverted to (drafts: "SAIL: REVERTED to old 'Bargain event heard on a boat (4)' per Joshua"). The drafts note the definition is locative ("on a boat") rather than a strict synonym — annotated as the game teaches it.

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
1. **Docks welcome note** `!EMOH EMOCLEW .S.P` (story step 4) — mirror-writing puzzle, not a cryptic clue; proposed EXCLUDED from anatomy.
2. **#26 HOME** — FLAG: verify parse. Wordplay is documented in the hint; the definition extent ("I live here!") is my reading, not in any ledger.
3. **Charade tutorial gap** — #25 COMET, #29 MAST, #31 PLANET, #39 CABIN are pure charades with no matching Learn lesson; assigned `workshop` (nearest: building from pieces). Confirm or pick another home.
4. **#35 DRAGON** — minor: "makes proceedings" segmented as pure link; sanity-check the boundary.
5. **#38 LUNATIC** — minor: "anchor's head" carried as fodder-partial (it names the deleted letter); schema judgement call.
6. Beach jumbles (TRCPIYC shell puzzle, DLROW CITPYRC TIB bottle) are letter toys, not cryptic clues — no annotation proposed.

**Self-check (2026-07-10): PASSED — 52/52, zero failures.** All 52 `Clue (key, verbatim)` strings
above were programmatically extracted and verified byte-identical against index.html. 46 match the raw
source directly; the 6 keys containing straight quotes (#17 HOARD, #23 STAR, #29 MAST, #38 LUNATIC,
#39 CABIN, #47 WINE) match the source's JS-escaped form (`\'` inside single-quoted strings) — i.e. they
are byte-identical to the runtime string that the annotate() lookup actually sees.

---

## Section 5 — Copy proposals (item 4 + teach copy; approve / edit / veto each)

Drafted in-voice (bc-writer, reviewed against voice-and-characters.md). None of these are wired in yet.

### 5.1 Germany pre-empt (a) — Guardian narrative sentence
**Where:** Tower story, the narrative beat before the DINE clue ("Before you go. This tower guards a second principle..."), inserted after "Some answers must be assembled."
> "Advisory: this tower files entire nations under their two postal letters. Storage is finite."

(If it must be strictly one sentence, drop "Storage is finite." — but that fragment carries the Guardian's humor.)

### 5.2 Germany pre-empt (b) — new level-0 hint on the DINE step
**Where:** prepended to the DINE hint ladder (existing hint becomes level 1).
> "A container clue: one word placed inside another. Before you nest anything, shrink the country. The island writes every nation as its two postal letters."

### 5.3 Breadcrumb — FLOAT / SIMON
**Where:** replaces the "Set Sail" placeholder modal at the Docks ("New destinations coming in future updates!").
> The Dock Keeper follows your gaze past the masts. "Ships aren't the only trade through here. A captain called Simon runs cargo above the weather, and not once has he tied up at my dock." He nods at the sky, where the clouds have drifted into a queue, some single, some stacked in pairs. "They've been spelling something up there for years. If you can't read it, just tell the terminal what clouds do all day."

(Also finally gives the Morse-cloud easter egg an in-game witness; SIMON named plainly per MARK precedent, FLOAT reachable two ways.)

### 5.4 Breadcrumb — COME IN / WELCOME HOME
**Where:** new `postscript` on the Cluey Cove Treasure Chest challenge (after the IRATE drawer opens), same slot as the MARK breadcrumb.
> Under the pearl lies a note in faded ink: "Walked the south shore at dusk. There's a gap in the wildflowers the exact shape of a cottage, and smoke where no chimney stands. The terminal knows the place. Offer it what a door says when it means it, or what the Dock Keeper's note has said all along."

**Open decision:** note stays anonymous (recommended — keeps which-islander-is-which open) vs. attributed to the FISH angler.

### 5.5 Breadcrumb — KAIT
**Where:** new workshop action `Look Around the Bench` on the Puzzle Workshop card.
> A knitted frog sits on the warmest corner of the workbench, clearly not stock. A tag on its foot reads, in careful stitches: MADE BY KAIT. Croc pats it on his way past. "She furnishes the place," he says. "The terminal's fond of her too."

**Open decision:** action label "Look Around the Bench" (recommended) vs. folding into "Enter Workshop" when the Adventure link ships.

### 5.6 Teach copy — help-overlay anatomy legend intro
> Every cryptic clue has three working parts: a definition that means the answer, an indicator that names the trick, and fodder, the raw letters the trick works on. The chips below color-code each part so you can spot them in any clue.

### 5.7 Teach copy — struggling-link label (after 2 wrong answers)
bc-writer vetoes "Struggling?" (reads as the game diagnosing the player). Recommended:
> Stuck? Learn: {technique}

Alternate: `See how {technique} works`

### 5.8 Teach copy — tutorial phase-2 HUD step (replaces current copy)
> Settings and your profile live behind the gear icon. The ? beside it opens the help guide whenever a clue won't give.

### 5.9 Already shipped teach copy (flag, veto reverts it)
The one-time coach mark on the first annotated clue (currently live with the DINE sample):
> Every clue has moving parts. Tap any word to see the job it does.

---

## Post-sign-off wiring checklist (blocked on this document)

- [ ] Merge approved rows into `js/clueAnnotations.js` (keys must match the RUNTIME string — unescape the source's `\'` for the 6 flagged keys)
- [ ] Wire `BCWClueAnatomy.annotate` into the cafe napkin `showGameModal` path (MOCHA/DECAF currently bypass the challenge hook)
- [ ] Anatomy legend section into `#help-anatomy-section` of the help overlay (5.6)
- [ ] Struggling links (5.7) in story `checkAnswer` + `checkChallenge` at wrongCount >= 2, via the annotation `tutorial` field, with mid-story tutorial jump + resume
- [ ] Germany edits (5.1 / 5.2 as approved)
- [ ] Breadcrumbs (5.3–5.5 as approved)
- [ ] Tutorial phase-2 HUD copy (5.8)
- [ ] Re-run clue-freeze check + full smoke suite after wiring
