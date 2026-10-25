# Approved cast in World

The shipped `index.html` loads `scenes/approved-cast.js` before the shared character renderer and scene scripts. `scripts/build-approved-cast.cjs` compiles all 30 approved SVG poses from `../Bit_Cryptic_Character_Models`. Run it from the World directory after changing approved assets.

| Character | Scene integration |
|---|---|
| Cryptic Croc | Four workshop compositions use welcome, tinker, think and discovery poses. Existing shot transforms remain. |
| Fredward | Shared `bcCharacter` calls use the approved otter. Diving scenes retain their suit, hose, helmet and action poses, with the approved face inside the glass. |
| Webby | Background appearance at Scramble Shores, including the opening shot's aliases. |
| Harrington | Reading in the library opening and its librarian-scene derivative. |
| Professor Laurel | Background appearance in the town-square opening. |

The background appearances add no dialogue, clue text or mission requirements. Existing NPCs keep their identities. Each inserted pose namespaces its SVG IDs to keep eyes and clipping independent. Floor anchors control placement; Fredward's close-ups intentionally crop his lower body.

The island prototype's model bundle has also been rebuilt with all five approved models. Rebuild it separately with `node concept/island/models/build-models.cjs`.

Validation: all eight existing verification scripts pass. `node scripts/ci/check-approved-cast.cjs` checks the actual scene load order, model/pose counts, representative placements, repeated-instance IDs, and Croc's approved solid tail. Local scene renders are in `visual-review/approved-cast/`.

These are static pose assets integrated into the existing scene animation system. New walk cycles, seated model variants, and dedicated underwater rigs remain separate animation work.

## Review round 1 fixes (2026-10-25)

Joshua's per-placement review asked for seven changes:

- **Croc:** the apron's neck strap now runs up behind the jaw from both bib corners, and the waist tie wraps the whole body to a side knot (`workshop-croc-original-body.cjs`). Discover keeps the closed W smile; only explain opens the mouth.
- **Contact shadows:** `bcApprovedPlace` emits one for every placement (`shadow:false` opts out and stamps `data-shadow="off"`), which grounds workshop_6. workshop_7's hand-drawn shadow is gone so it isn't doubled.
- **Fredward in dive scenes:** wreck_3 and wreck_6 no longer use the legacy suit. Both show the approved otter wearing the `bcDiveHelmet` bowl on his model's diving collar.
- **Held props:** two new Fredward poses, `cradle` and `hold`, bring the library to 32 poses. They work with `bcApprovedHold` so his hands close over the cage (wreck_6) and over the rope and pages (hidden_end_5).

`check-approved-cast.cjs` asserts all of the above.
