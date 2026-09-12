# Fredward — Character Design Context

**Current character approval:** Fredward uses the refined otter design in the [official model library](../../Bit_Cryptic_Character_Models/README.md), with a smooth head, consistent cheek patch, brass collar, tapered tail, and six static poses. The document below is a **legacy underwater-scene implementation reference** for the existing closed-helmet diver. Its helper-function requirements remain relevant to those unmigrated scenes; they do not override the newly approved character appearance.

**Last updated:** 2026-09-08
**Status:** MODEL LOCKED. Function: `fred(opts)`, defined at the top of
`scenes/wreck.js`. **Scenes must call it. Never hand build Fredward again.**

---

## What is Fredward?

The hardhat diver who lives on the wreck: brass helmet, bulky canvas suit, lead
boots, an air hose trailing behind him. He catalogues sea creatures in a paper
book on a bolted table, on the deck of a ship lying on her side. He appears in
`scenes/wreck.js` across `wreck_0` to `wreck_11` and `wreck_return_0` to
`wreck_return_5`.

---

## The model

One function builds every Fredward:

```js
fred({ s, h, x, y, pose, face, expr, arms, tilt, hose, scale })
```

| Option  | Meaning |
|---------|---------|
| `s`     | Id suffix, unique per scene. Keeps `url(#id)` references from colliding. |
| `h`     | Helmet radius. The reference scale for the whole figure. |
| `x, y`  | Where the **centre of the helmet** lands in scene coordinates. |
| `pose`  | `standing`, `leaning`, `table`, `away`, `inverted`. |
| `face`  | `left` or `right`. Mirrors the group. |
| `expr`  | `open` or `closed` eyes. |
| `arms`  | Optional override markup, drawn in body space. Both arms and both hands are still required. |
| `tilt`  | Head rotation in degrees. |
| `hose`  | Which side the air hose runs off. |

Helper: `fredFootDrop(h)` returns helmet centre to sole, so a caller who knows
the deck line can stand him on it:

```js
var y = deckY - fredFootDrop(h);
```

Supporting parts, same file, same rule: `wHelmet`, `wHelmetBack`, `wFace`,
`wHand`, `wBoot`, `wDefs`, and for the rest of the cast `player`, `book`,
`wTable`, `wMat`, `wCrab`.

---

## Reference scale

**`wreck_2` is canonical** for "standing on deck, mid-shot". Helmet radius
there is **h = 21**. `wreck_0`, `wreck_1` and `wreck_2` are the reference for
how he should look. If the model ever changes him, it changes him toward
`wreck_2`.

Scenes at other distances change `h` and nothing else. `wreck_6` is a close
shot at `h = H * 1.55`; the proportions are identical, only the camera moved.

---

## Proportion table

Everything is a multiple of the helmet radius `h`, measured **down from the
centre of the helmet**, so one scale change moves the whole figure together.

| Landmark | Value |
|---|---|
| Helmet radius | `h` |
| Faceplate glass radius | `0.78 h` |
| Neck ring | `1.15 h` down, `0.78 h` half width, `0.28 h` deep |
| Shoulders (top of torso) | `1.55 h` down, half width `1.22 h` |
| Hips | `4.15 h` down, half width `1.08 h` |
| Knee | `5.90 h` down |
| Sole | `7.65 h` down |
| Limb thickness (arms) | `0.46 h` |
| Leg thickness | `0.84 h` (`limb * 1.62`) |
| Hand | `0.46 h` base unit |
| Boot | `1.15 h` wide, `0.52 h` tall, origin at the **sole** |
| Air hose attach | `0.7 h` to one side, `0.1 h` above the helmet centre |

Total helmet centre to sole is **7.65 h**; including the crown of the helmet the
figure stands **8.65 h**, about **4.3 helmet diameters**.

The suit is bulky. The silhouette is a soft rectangle, never an hourglass.
Limbs are thick, boots are heavy and wide.

---

## Parts that must ALWAYS be present

A figure missing any of these is a bug, not a style choice:

1. Helmet
2. Neck ring
3. Torso
4. Two arms, each ending in a **visible hand**
5. Two legs
6. Two boots
7. An air hose running off behind him

If a pose hides one of these, the pose is wrong. `wreck_7` shipped with no legs.
`wreck_8` shipped with no legs. `wreck_6` shipped as two hands with no body at
all. All three were bugs.

---

The face inside the helmet comes from `bcCharacter("fredward", radius, { headOnly: true })` in `scenes/characters.js`. The brass shell, gloves, boots, hose, and posed suit remain in `fred()`. Custom arm poses start at 1.12 helmet radii from the center to meet the fitted shoulders.

## The faceplate treatment

This was a deliberate fix and it works. It lives in `wFace()` and every scene
gets the same one. Do not re-derive it per scene.

- Dark recessed glass, radius `0.674 h`
- A face dimly behind it, at 0.82 opacity: brow, nose, moustache, mouth
- Heavy brass rim, stroke `0.226 h`, with an inner bright ring
- Eight bolts evenly spaced around the rim at radius `1.09 r`
- A specular sweep across the upper left of the glass, slowly pulsing
- A small warm highlight, and a faint cool arc low on the glass

`expr: 'closed'` swaps the eyes for closed arcs. `pose: 'inverted'` rotates the
face 180 degrees inside the still-upright helmet.

`wHelmetBack()` is the turned-away version: brass sphere, crown seam, bolt ring,
rear vent, and the far edge of the faceplate rim showing round the side. No
face, which is the entire point of the shot it is used in.

---

## The overlap rule

- No figure cropped by furniture **unless the furniture is genuinely in front
  and reads that way**. If a table crosses his shins, the table's legs must
  reach the deck and be bolted down, so the occlusion has a visible cause.
- No object passing through a body. In `wreck_4` the book's pages used to pass
  in front of his torso while he stood inside the open spread.
- No limb disappearing behind something with no explanation.
- No two elements sharing an edge in a way that fuses them into one shape.
- If a thing is behind another thing it needs a visible contact point or a
  shadow, so the depth is legible. Standing figures get a contact shadow.

**The camera moves, the anatomy does not.** If a prop and the man cannot both
fit the frame at model scale, move the camera or resize the PROP. Never resize
the helmet to match a prop: `h` is the whole figure's scale, and the implied
standing height is always `8.65 h`. A quick check: at `h = 21` he is 182px in
a 260px frame. If a scene's `h` implies a figure much taller than the frame,
the head is too big unless it is a deliberate close shot like `wreck_6`.

**Cropping by the frame edge is fine; cropping by furniture is not.** A close
shot may run his hips off the bottom of the picture. That is a camera decision.
A man who stops at a table with no legs is a bug.

**Draw order matters.** Furniture the figure stands behind goes down first.
Objects he holds go down before the hand that holds them, so the hand closes
over the object rather than vanishing under it.

---

## Scale of the props

- **The book is an object on a table**, comfortably smaller than a standing
  man: about `4.4 h` wide open. It was previously about three times that and
  dominated the frame like a billboard.
- **The table** is a bolted plate on two legs that reach the deck.
- **The crab and the doormat** are fixed sizes and do not change between scenes.

---

## DO NOT CHANGE

- **The palette.** Island art colours are not brand tokens and are never swept.
  The cold undersea greens (`#07141a`, `#0d2028`, `#133440`, `#1a4a55`) and the
  amber lamps (`#F2C14E`, `#ffd700`, `#ffeaa7`) as the only warm colour in frame.
- **Never pure black `#000` and never pure white `#fff`** in new art. Use the
  nearest value already in the file.
- **`wreck_8`.** The most important frame in the file. Fredward turned away, no
  emphasis, lamps identical to `wreck_1`, player small and still, crab unmoved.
  Model proportions may be applied to the figure; the scene is never restaged,
  never relit, and the camera never moves.
- **The crab does not move in `wreck_8`.**
- The light shafts, caustics, drifting motes and animation timings.
- The faceplate treatment above.

---

## Contract for the scene file (CI enforced)

- Every scene opens exactly
  `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">`
- Every gradient and filter id unique across the whole file, and no collision
  with `scenes/hidden.js` (their ids are all `hid` prefixed)
- Every `url(#id)` must resolve INSIDE its own scene
- No backticks and no `${}` inside the SVG strings
- No double hyphen inside an XML comment. Illegal XML, and there is a check.
- SMIL animation only

Template functions returning strings are fine and encouraged. The final assigned
value for each key must be a plain string meeting the contract.

Verify with:

```
npm run check:scenes
npm run verify
```

---

## Design journey: what went wrong, so nobody re-derives it

There was no character model. Every scene hand built Fredward from scratch at
whatever size felt right in isolation, and he drifted.

| Symptom | Cause |
|---|---|
| Helmet radius ranged **18 to 25** across the file with no scale transform to explain it | No shared model. Each scene picked a number. |
| The book was roughly **three times too big** in `wreck_3` and `wreck_4`, filling the frame like a billboard | Prop drawn to fit the frame instead of to the figure. |
| `wreck_4` had him standing **inside the open book**, cropped at the waist, pages in front of his body | Book drawn after the figure, at a size that swallowed him. |
| `wreck_5` had **no Fredward in it at all**, just an empty deck with a book | A nested `translate` plus an additive `animateTransform` overwrote the base transform and threw the group off frame. |
| `wreck_6` was **two enormous disembodied mitts**, no wrists, no forearms, no body | Hands authored as a standalone composition with nothing to attach to. |
| `wreck_7` and `wreck_8` **lost their legs**, torsos ending at the deck line | Figures built top down and stopped when they reached the furniture. |
| `wreck_return_2` and `wreck_return_3` had a **billboard book with disembodied gloved hands** entering from the frame edge | Book art authored to fill the frame, with hands added to it rather than a man drawn holding it. |
| The first fix for those two **inflated the helmet** instead, giving a giant head on a shoulder stub | Scaling the head to match an oversized prop, rather than scaling the prop to match the man. The same class of bug as the drifting radii, pointing the other way. |

The fix in every case is the same: call `fred()`, pass a scale, place him by
helmet centre using `fredFootDrop()`, and let the model supply the parts.
