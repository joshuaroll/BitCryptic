// ═══════════════════════════════════
//  CLUE ANATOMY ANNOTATIONS - Bit Cryptic World
//  Per-word parse data consumed by BCWClueAnatomy (js/clueAnatomy.js).
//
//  Keys are the EXACT clue string as it appears between straight quotes in
//  STORIES / TUTORIALS / showClueChallenge calls — byte-identical, including
//  the enumeration. This file never alters clue text (clue-freeze law);
//  it only describes it.
//
//  CONTENT GATE: annotations are parse data under the clue approval rule.
//  Only Joshua-approved entries may appear here. Full batch pending review —
//  see data/anatomy-review-2026-07.md. Shipping sample: DINE (parse already
//  approved in data/clue-drafts-2026-07-03.json).
//
//  Segment schema:
//    text     — contiguous substring of the clue key
//    role     — 'definition' | 'indicator' | 'fodder' | 'link'
//    usage    — fodder only: 'direct' | 'substitution' | 'partial'
//    operation— indicator only: the technique it names
//    info     — level-2 explanation shown on second click
// ═══════════════════════════════════

var CLUE_ANNOTATIONS = {
  'Eat in, embraced by Germany (4)': {
    answer: 'DINE',
    tutorial: 'adventure',
    segments: [
      {
        text: 'Eat',
        role: 'definition',
        info: 'Definition — points at the meaning. The answer is a verb in the "eat, have a meal" direction.'
      },
      {
        text: 'in',
        role: 'fodder',
        usage: 'direct',
        info: 'Fodder, used directly — the letters IN go into the answer unchanged.'
      },
      {
        text: 'embraced by',
        role: 'indicator',
        operation: 'container',
        info: 'Indicator — names the operation: a container. One piece is placed inside another.'
      },
      {
        text: 'Germany',
        role: 'fodder',
        usage: 'substitution',
        info: 'Fodder by substitution — Germany becomes its abbreviation, DE. DE embracing IN gives D-IN-E.'
      }
    ]
  }
};
