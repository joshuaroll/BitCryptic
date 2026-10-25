# Scene Studio

A visual placement editor and QA board for the story scenes. It loads the real
`scenes/*.js` and the approved cast kit, so what you see is the shipped output.

- **Compose**: pick a scene. Every `bcApprovedPlace` / `bcMissionPlace` figure is lifted
  out as a draggable character. Feet snap to mint floor lines; the amber horizon drives the
  cast-scale check (`design/tokens.json`). Held-prop and head-only shots stay locked.
  Export gives the placement calls in absolute scene coordinates, with the delta from what ships.
- **QA audit**: every scene against `lint.js`, the scene-art rules as code. The same module
  runs in CI as `npm run lint:scenes` (errors fail `verify`; warnings are the craft backlog).

Run it: open `studio.html` straight from disk (works on `file://`; token fetch falls back to
built-in values), or serve the repo root for live `design/tokens.json`.

Hosted copy: `npm run studio:bundle -- <path outside the repo>` inlines everything into one
file. It contains every scene string, answers included, so it is refused inside the repo and
must stay private. The published copy saves layouts to its own store, which Claude reads back
and applies; locally, layouts save to browser storage and copy out as JSON for
`design/scene-specs/<scene>.json`.

**Saving:** "Save positions" (or Ctrl+S) writes the layout. Auto-save writes a moment after each
adjustment, and Studio saves before switching scenes. "Reset to shipped" can be undone.

**Ask Claude** (published copy only): describe a change, and in-page Claude sees a labelled 2x snapshot
of the stage and edits through page tools. These are update/add/remove a character (addressed by index
plus name), set the horizon and floor lines, and file a code request. Chat edits always save, and the
conversation is stored per scene. Anything beyond placement (art, animation, props, layering) is filed
in the `requests` collection. In Claude Code, read those with ArtifactData (`list requests`) on the
Studio URL, apply them in the repo, and mark each one `done` with a `note`.

What it does not do: draw art, edit SMIL, or reorder layers. Edited figures render on top of
the scene, so check occlusion (a figure behind a bench) in the real render after applying.
