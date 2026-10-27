# Art bible: Bit Cryptic World scenes

One style, one engine. The rules live in `design/tokens.json`; the engine that obeys
them is `scenes/art-kit.js` (`bcArt`). The style guide built from both is
`tools/style-guide/build.cjs`. If this file and the code disagree, the code wins and
this file is the bug.

## Palette

Every biome defines the **same roles**:
`skyTop skyBottom ground groundShade path wood stone metal trim foliage cloth glow water haze`.
A prop asks for a role (`wood`), never a hex, so a crate is docks timber at the docks and
cafe oak in the cafe. Values were taken from the colours the best shipped scenes already use
(`palette.<biome>.$description` says which).

- `brand`: Dusk Terminal. Chrome only; art may borrow ink, amber, mint as accents.
- `shared`: Croc gold `#ffd700` (exempt from the amber sweep), ceramic, paper, steam, snow.
  Also the **device hues** (`deviceAnagram` amber, `deviceHidden` violet, `deviceReversal` sky,
  `deviceDeletion` coral, `deviceSelection` sand, `deviceHomophone` mint, `deviceDouble` rose,
  `deviceCharade` orange: the /field-guide `--tab-*` values) and the **fishing rarity hues**
  (`rarityUncommon` #6FC3E0, `rarityRare` #A78BFA). Signed off 2026-10 for use outside
  /field-guide: a device is one colour everywhere, in art and UI.
- `beach` (Scramble Shores, midday): the 14 roles alias the approved `BC_BEACH` names
  (`sand`, `drift`, `sea`, `headland`...), which are also tokens. Haze is the pale horizon,
  so on the beach distance lightens.
- Never sweep a shipped scene's colours to the palette (scene-art rule 6). The palette is for
  new art and redraws. The lint's `off-palette` rule is info only.

## Light

One key light, **upper left** (`light.side`). A scene may override per prop with
`light:'right'` when its own light source demands it; it then overrides for every prop.

- Lit faces point left and up. Box tops are lit.
- **One** shade band on the far side, `shade(base)` = 26% toward ink `#0B1021` (cool).
- **One** highlight on the lit edge, `light(base)` = 22% toward `#fff3d6` (warm).
- `flip` mirrors geometry with a handedness (a cup handle), **never the lighting**.

## Outline

Croc treatment for anything in front: flat base, one shade band, one highlight, ink line.

- Ink = the shape's own base 62% toward brand ink. Never one flat black for everything.
- Width per depth layer, in screen units whatever the prop's scale:
  fg 1.6 · mid 1.0 · bg 0 · far 0. Losing the line is itself a depth cue.
- The outline is drawn LAST so shade bands cannot paint over half its width.

## Depth

Four planes: `fg`, `mid`, `bg`, `far`. Colours veil toward the biome's `haze` by
0 / 18 / 38 / 60%. Haze is the ambient medium, so **in dark interiors and at night
distance darkens**, it does not lighten. `bcArt.layer(depth, svg, biome)` applies the same
veil to hand-drawn art, so an old backdrop can be pushed back a plane without a redraw.

## Contact

Every prop sits on a **contact point**: its local origin (0,0) is bottom centre where it
touches its surface. You place the feet, never the bounding box.

- The prop draws its own contact shadow: `rx = footprint x 0.6`, `ry = rx x 0.16` (min 1.2),
  colour and opacity aliased to the cast `shadow` tokens, faded by depth. `shadow:false` to drop it.
- Items that live on furniture are **seated**, never placed by eye:

```js
const t = { x: 150, y: 236, biome: 'cafe', cloth: true };
s += bcArt.prop('table-round', t);
const top = bcArt.anchors('table-round', t).top;                 // {cx,cy,rx,ry}
s += bcArt.on(top, 'cup-saucer', { u: 0.4, v: -0.2, biome: 'cafe', steam: true });
s += bcArt.on(top, 'newspaper', { u: -0.5, biome: 'cafe' });
```

`u`, `v` in [-1, 1] across and into the surface; points stay inside 85% of it.

## Props and anchors

| Prop | Options | Anchors |
|---|---|---|
| `chest` | `open`, `contents` ('gold' / 'scroll' / 'empty' / SVG string), `glow` | `inside` (surface), `top`, `hinge`, `lock`, `lidTop` |
| `table-round` | `h` 73, `r` 38, `cloth` | `top` (surface), `floor` |
| `table-square` | `h` 73, `w` 84, `d` 12 | `top` (surface, quad), `floor` |
| `cup-saucer` | `steam`, `flip` | `rim`, `top` |
| `newspaper` | `folded` | `top` |
| `lantern` | `lit`, `hang` (origin moves to the ring) | `handle`, `light`, `top` |
| `crate` | `size` 30 | `top` (surface) |
| `barrel` | | `top` (surface) |
| `rock` | `size`, `seed` | `top` |
| `pine` | `h` 120, `tiers` 4 | `tip`, `top`, `base` |
| `fern` | `size` 34 | `top` |
| `mushroom-glow` | `count` 1-3, `size` | `top` |
| `observatory` | | `top`, `door` |
| `mountain` | `w` 300, `h` 170, `observatory`, `snow`, `trail`, `switchbacks` 5 | `summit`, `trailBase`, `turns[]`, `top` |

Common opts: `x, y, scale, flip, depth, biome, idp, shadow, light`.
**`idp` is required for props that define gradients** (chest with glow, lit lantern,
mushrooms): `{idp:'cove3-chest'}`. Without it the kit falls back to a counter id and the lint warns.

Defect classes these fix by construction: the mountain trail is ONE Catmull-Rom curve from
`trailBase` to `summit`, narrowing with height (CI asserts continuity); the chest lid is hinged
at the back rim and drawn first, contents are drawn before the front face; table tops are real
surfaces with anchors; tablecloth uses the biome `cloth` role with folds, hem and shade, so it
reads as fabric and stays darker than any lamp.

Sizes are calibrated to the cast: Fredward 166 tall at the near floor, table top 73 (0.44).

## In-art type

Two stacks, nothing else (`font.clue`, `font.paper` in tokens.json; decision 2026-10).
`lint:scenes` **errors** on any other `font-family` in `scenes/`, in a scene or in raw file source.

| Stack | SVG attribute | For |
|---|---|---|
| clue / machine | `font-family="'JetBrains Mono',monospace"` | clue text, and anything a machine, screen, plate or sign shows |
| paper / carving | `font-family="Georgia,serif"` | paper, parchment, chalk, books, carved, engraved or scratched text |

- **The surface decides.** A clue on paper, a scroll, a book or stone takes Georgia
  (`docks_4`, `lair_3`, `forest_1`, `hidden_9`); a clue on a plate, cup, chest, pool or in the
  air takes JetBrains Mono (`cove_1`, `cafe_2`, `town_3`, `moon_3`, `workshop_2`).
- `'Fredoka One'` was never loaded and rendered as Comic Sans. Never use it, nor
  `Courier New`, `Nunito`, bare `monospace`/`serif`/`sans-serif`.
- Mono runs wide: drop `letter-spacing` to 0 and size the text to its prop. Changing a stack
  changes `font-family` only; clue text is frozen.
- Inside a single-quoted JS string write `font-family="\'JetBrains Mono\',monospace"`.
- `scripts/render-scenes.cjs` does not load web fonts, so its PNGs show JetBrains Mono as a
  system monospace. Check fit with the font loaded (the game loads it from Google Fonts).

## Cast rules (round 3, decision desk 2026-10-25)

- **The player is always the approved Webby.** At the wreck he wears the dive helmet:
  `wWebbyDiver(pose, x, floor, h, flip, hose)` in `scenes/wreck.js` (`bcApprovedPlace('webby',
  ..., {helmet})` plus the shared hose). Never the legacy `player()` rig.
- **Canon has a face from `hidden_5` on**: `bcMissionPlace('canon', ...)`. In `hidden_1..4` his
  back stays to the player (`hidCanonBack`). Never draw his face by hand. No seated pose: he
  stands beside his chair.
- **Simon** (skyship) and **Mark** (moon) are mission-cast models, `bcMissionPlace('simon'|'mark', ...)`,
  pending Joshua's sign-off. Use the model; do not hand-draw either.
- **Wreck book-table scenes share one cabin**: `wCabin(sceneId, opts)` draws the room
  (wreck_3-5, 7, 9, 10, wreck_return_2, wreck_return_4). The scene draws only table, book and cast.
- **The Sounding Fork is a tuning fork**, line knotted through the stem, tines down. Never a spoon.

## Adding a prop

1. Add `DEFS['name']` in `scenes/art-kit.js`: `defaults`, `width(o)` (footprint, drives the
   shadow), `ids(o)` (true if it defines gradients), `anchors(o, c)` in local units, `draw(c, o)`.
2. Draw in the local frame, contact point at 0,0, y negative up. Colours only through
   `c.tone(c.pal.<role>)` / `c.col(...)`; shapes through `body(c, d, tone, shadeD, hiD)` so the
   croc treatment and outline rules apply. Ids only through `c.id('x')`. Animation only through
   `ease(...)` (eased, seamless).
3. Add its option sets to `VARIANTS` and its anchors to `REQUIRED_ANCHORS` in
   `scripts/ci/check-art-kit.cjs`.
4. `npm run check:kit`, then build the style guide and **look** at it.

## Workflow

Studio -> kit -> render -> lint.

1. **Studio** (`tools/scene-studio/studio.html`): block out floors, horizon, cast placement.
2. **Kit**: environment from `bcArt.sky/ground/layer`, props from `bcArt.prop`, items seated
   with `bcArt.on`, cast from `bcApprovedPlace`. Draw back to front.
3. **Render**: `node scripts/render-scenes.cjs OUT key ...`, then open the PNGs. Check t=0 and t=2s.
4. **Lint**: `npm run verify` (includes `check:kit` and `lint:scenes`).

Tokens changed? `npm run art:tokens` (syncs the embedded copy; `check:kit` fails until you do).
Style guide: `node tools/style-guide/build.cjs OUT.html --png OUT.png` or `npm run art:guide`.
