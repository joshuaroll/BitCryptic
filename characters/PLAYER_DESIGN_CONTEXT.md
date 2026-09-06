# The Player Figure — Character Design Context

**Last updated:** 2026-09-05
**Status:** MODEL LOCKED. Function: `player(opts)`, defined at the top of
`scenes/wreck.js`, beside `fred()`. **Scenes must call it.**

---

## Who is the player figure?

The diver the reader is. A modern diver, deliberately plainer than Fredward: a
wetsuit, a single tank, an oval mask, fins. No brass, no faceplate, no hardhat.
They are the quiet one in every frame: smaller, stiller, and never the subject.

Appears in `wreck_0` (descending on the rope), `wreck_7` (taking the lure),
`wreck_8` (small and still, near left) and `wreck_11` (ascending). They must be
one person throughout.

---

## The model

```js
player({ h, x, y, face, arms })
```

| Option | Meaning |
|---|---|
| `h`    | Head radius. The reference scale for the figure. |
| `x, y` | Where the **centre of the head** lands in scene coordinates. |
| `face` | `left` or `right`. Mirrors the whole group. |
| `arms` | Optional override markup, drawn in body space. Two arms with two hands are still required. |

**Mirroring gotcha.** `face: 'left'` mirrors the group, so custom `arms` markup
is authored in mirrored space: positive x points back the way the figure faces.
Getting this backwards is what once had the player in `wreck_7` reaching away
from the object being handed to them.

---

## Proportion table

Multiples of the head radius `p`, measured **down from the centre of the head**.

| Landmark | Value |
|---|---|
| Head radius | `p` |
| Mask lens | `0.72 p` by `0.54 p`, offset `0.14 p` up |
| Shoulders | `1.5 p` down, half width `1.3 p` |
| Hips | `4.0 p` down, half width `1.05 p` |
| Sole | `7.2 p` down |
| Limb thickness | `0.42 p` |
| Leg thickness | `0.735 p` (`limb * 1.75`) |
| Fin | runs a further `1.5 p` out from the ankle |
| Tank | `0.5 p` wide, `1.9 p` tall, behind the shoulder |

Helmet centre to sole is **7.2 p**. To stand them on a deck:

```js
var y = deckY - (p * 1.5 + p * 2.5 + p * 3.2);
```

---

## Relative scale against Fredward

The player is a **shorter, slighter build**. In `wreck_7`, where both stand on
the same deck, Fredward is `h = 21` and the player is `p = 13.5`. That reads as
two adults of different bulk, which is correct: Fredward is bulked out by a
canvas suit and lead boots, not by being a larger man.

---

## Parts that must ALWAYS be present

1. Head with a mask lens
2. Torso
3. Tank behind the shoulder
4. Two arms, each ending in a visible hand
5. Two legs
6. Two fins

Legs and fins are drawn at `limb * 1.75` and `limb * 1.5`. They were once thin
enough to disappear against the deck, which made the player read as a floating
blob rather than a person.

---

## DO NOT CHANGE

- **The palette.** Island art colours are not brand tokens and are never swept.
  The player's wetsuit is `#132c30`, mask and tank `#1a4a55`, hands `#1a3a3e`.
  These are close to the deck value on purpose: the player is quiet in frame.
  If they read as a blob, the fix is **thicker limbs, not a brighter colour**.
- **Never pure black `#000` and never pure white `#fff`** in new art.
- **`wreck_8`.** The player is small and still, near left, not moving and not
  reaching. Never restage it.
- The player has **no face**. A mask lens with a soft highlight, and nothing
  behind it. Fredward is the one with a face; that contrast is the point.

---

## The overlap rule

Same as Fredward's, in `FREDWARD_DESIGN_CONTEXT.md`:

- No figure cropped by furniture unless the furniture is genuinely in front and
  reads that way.
- No object passing through a body.
- No limb disappearing behind something with no explanation.
- A figure standing on a deck gets a contact shadow.
- Objects being handed over are drawn before the hand that closes on them.

---

## Design journey

The player was hand built per scene alongside Fredward and drifted the same way.
In `wreck_7` they were cut off at the table edge with no legs at all and read as
a black shadow rather than a person, while their reaching arm pointed away from
the object being offered. The model fixes the anatomy; the thin limbs, not the
colour, were what made them illegible.
