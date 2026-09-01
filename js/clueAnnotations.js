// ═══════════════════════════════════
//  CLUE ANATOMY ANNOTATIONS - Bit Cryptic World
//  Per-word parse data consumed by BCWClueAnatomy (js/clueAnatomy.js).
//
//  Keys are the EXACT clue string as it appears between straight quotes in
//  STORIES / TUTORIALS / showClueChallenge calls — byte-identical, including
//  the enumeration and any trailing full stop. This file never alters clue
//  text (clue-freeze law); it only describes it.
//
//  CONTENT GATE: annotations are parse data under the clue approval rule.
//  Merged 2026-09-01 from data/anatomy-review-2026-07.md on Joshua's
//  instruction that every story clue carry the anatomy card. Each key below
//  was machine-checked to appear verbatim in index.html, and every segment to
//  locate contiguously and in order inside its key.
//
//  Segment schema:
//    text     : contiguous substring of the clue key. For role 'double' this is
//               the WHOLE clue, so a click anywhere in it gives one message.
//    role     : 'definition' | 'indicator' | 'fodder' | 'link' | 'double'
//    usage    : fodder only, and REVIEW METADATA ONLY. 'direct' /
//               'substitution' / 'partial' never reach the player.
//    operation: indicator only: the technique it names. This one DOES reach the
//               player, because naming the operation is the indicator's job.
//    info     : the ONE message shown when the word is clicked. Optional: omit
//               it where the role label already says everything, and the
//               engine falls back to the role's own line. It names the role and
//               stops. Never the method: no "first letter of each", no "becomes
//               its abbreviation", no letter counts. Working that out is the
//               puzzle, and a panel that solves it has taught nothing. The one
//               exception is fodder the player must substitute before the
//               wordplay applies, which says so without naming the word.
// ═══════════════════════════════════

var CLUE_ANNOTATIONS = {
  // 01. CAFE: Whispers Among the Pines (forest story, step 3)
  'Face remodelled into a place for coffee (4)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Face',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'remodelled',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'into',
        role: 'link'
      },
      {
        text: 'a place for coffee',
        role: 'definition'
      }
    ]
  },

  // 00. WELCOME: Washed Ashore (docks story, step 4)
  'Embracing towel comes with warm greeting (7)': {
    tutorial: 'forest',
    segments: [
      {
        text: 'Embracing',
        role: 'indicator',
        operation: 'hidden',
        info: 'Hidden-word indicator.'
      },
      {
        text: 'towel comes',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'with',
        role: 'link'
      },
      {
        text: 'warm greeting',
        role: 'definition'
      }
    ]
  },

  // 02. SIP: The Barista's Clue (cafe story, step 2)
  'Something instantly perky, starts a mouthful (3)': {
    tutorial: 'cafe',
    segments: [
      {
        text: 'Something instantly perky',
        role: 'fodder',
        usage: 'partial'
      },
      {
        text: 'starts',
        role: 'indicator',
        operation: 'letter-selection',
        info: 'Letter-selection indicator.'
      },
      {
        text: 'a mouthful',
        role: 'definition'
      }
    ]
  },

  // 03. TOWER: The Heart of the Island (town story, step 3, multi_puzzle 1/3)
  'Wrote, mangled, a tall building (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Wrote',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'mangled',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'a tall building',
        role: 'definition'
      }
    ]
  },

  // 04. LIBRARY: The Heart of the Island (town story, step 3, multi_puzzle 2/3)
  'Moved by rail right to the book house (7)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Moved',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'by rail',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'right',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'to',
        role: 'link'
      },
      {
        text: 'the book house',
        role: 'definition'
      }
    ]
  },

  // 05. WORKSHOP: The Heart of the Island (town story, step 3, multi_puzzle 3/3)
  'Hop works, scrambled, a place to build (8)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Hop works',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'scrambled',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'a place to build',
        role: 'definition'
      }
    ]
  },

  // 06. HERO: The Tower's Challenge (adventure story, step 2)
  'Warrior seized by the road (4)': {
    tutorial: 'forest',
    segments: [
      {
        text: 'Warrior',
        role: 'definition'
      },
      {
        text: 'seized by',
        role: 'indicator',
        operation: 'hidden',
        info: 'Hidden-word indicator.'
      },
      {
        text: 'the road',
        role: 'fodder',
        usage: 'partial'
      }
    ]
  },

  // 07. DINE: The Tower's Challenge (adventure story, step 5)
  'Eat in, embraced by Germany (4)': {
    tutorial: 'adventure',
    segments: [
      {
        text: 'Eat',
        role: 'definition'
      },
      {
        text: 'in',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'embraced by',
        role: 'indicator',
        operation: 'container',
        info: 'Container indicator.'
      },
      {
        text: 'Germany',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      }
    ]
  },

  // 08. MAP: The Forbidden Shelf (library story, step 3)
  'Chart or plan (3)': {
    tutorial: 'library',
    segments: [
      {
        text: 'Chart or plan (3)',
        role: 'double'
      }
    ]
  },

  // 09. NOVEL: The Forbidden Shelf (library story, step 4)
  'New book (5)': {
    tutorial: 'library',
    segments: [
      {
        text: 'New book (5)',
        role: 'double'
      }
    ]
  },

  // 10. LEAVES: The Forbidden Shelf (library story, step 5)
  'Departs or pages (6)': {
    tutorial: 'library',
    segments: [
      {
        text: 'Departs or pages (6)',
        role: 'double'
      }
    ]
  },

  // 11. BEACH: Gears and Clues (workshop story, step 2)
  'Ache stirred after beginning of boating for a sandy shore (5)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'Ache',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'stirred',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'after',
        role: 'indicator',
        operation: 'charade',
        info: 'Charade: pieces joined end to end.'
      },
      {
        text: 'beginning of',
        role: 'indicator',
        operation: 'letter-selection',
        info: 'Letter-selection indicator.'
      },
      {
        text: 'boating',
        role: 'fodder',
        usage: 'partial'
      },
      {
        text: 'for',
        role: 'link'
      },
      {
        text: 'a sandy shore',
        role: 'definition'
      }
    ]
  },

  // 12. GEARS: Gears and Clues (workshop story, step 4)
  'Rages shattered these cogs (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Rages',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'shattered',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'these',
        role: 'link'
      },
      {
        text: 'cogs',
        role: 'definition'
      }
    ]
  },

  // 13. PARTS: Gears and Clues (workshop story, step 5)
  'Traps reworked become components (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Traps',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'reworked',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'become',
        role: 'link'
      },
      {
        text: 'components',
        role: 'definition'
      }
    ]
  },

  // 14. SHORE: Letters in the Sand (beach story, step 2)
  'Horse, broken, on the coastline (5)': {
    tutorial: 'beach',
    segments: [
      {
        text: 'Horse',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'broken',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'on the',
        role: 'link'
      },
      {
        text: 'coastline',
        role: 'definition'
      }
    ]
  },

  // 15. COVE: The Cluey Depths (cove story, step 2)
  'Shelter endlessly is a bay (4)': {
    tutorial: 'cove',
    segments: [
      {
        text: 'Shelter',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'endlessly',
        role: 'indicator',
        operation: 'deletion',
        info: 'Deletion indicator.'
      },
      {
        text: 'is',
        role: 'link'
      },
      {
        text: 'a bay',
        role: 'definition'
      }
    ]
  },

  // 16. CAVE: The Cluey Depths (cove story, step 4)
  'Sculpt without right makes a hollow (4)': {
    tutorial: 'cove',
    segments: [
      {
        text: 'Sculpt',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'without right',
        role: 'indicator',
        operation: 'deletion',
        info: 'Deletion indicator.'
      },
      {
        text: 'makes',
        role: 'link'
      },
      {
        text: 'a hollow',
        role: 'definition'
      }
    ]
  },

  // 17. HOARD: The Dragon's Hoard (lair story, step 3)
  'Tough about love, a dragon\'s pile (5)': {
    tutorial: 'adventure',
    segments: [
      {
        text: 'Tough',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'about',
        role: 'indicator',
        operation: 'container',
        info: 'Container indicator.'
      },
      {
        text: 'love',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'a dragon\'s pile',
        role: 'definition'
      }
    ]
  },

  // 18. INFERNO: The Dragon's Hoard (lair story, step 5)
  'Iron fen forged into a blaze (7)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Iron fen',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'forged',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'into',
        role: 'link'
      },
      {
        text: 'a blaze',
        role: 'definition'
      }
    ]
  },

  // 19. TREASURE: The Dragon's Hoard (lair story, step 7)
  'Riches make one strangely austerer (8)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Riches',
        role: 'definition'
      },
      {
        text: 'make one',
        role: 'link'
      },
      {
        text: 'strangely',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'austerer',
        role: 'fodder',
        usage: 'direct'
      }
    ]
  },

  // 20. MARK: The Mark on The Moon (moon story, step 3)
  'Blemish is also a target (4)': {
    tutorial: 'library',
    segments: [
      {
        text: 'Blemish is also a target (4)',
        role: 'double'
      }
    ]
  },

  // 21. CRATER: The Mark on The Moon (moon story, step 5)
  'Lunar feature from confused tracer (6)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Lunar feature',
        role: 'definition'
      },
      {
        text: 'from',
        role: 'link'
      },
      {
        text: 'confused',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'tracer',
        role: 'fodder',
        usage: 'direct'
      }
    ]
  },

  // 22. ECLIPSE: The Mark on The Moon (moon story, step 6)
  'Overshadow left in shattered pieces (7)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'Overshadow',
        role: 'definition'
      },
      {
        text: 'left',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'in',
        role: 'indicator',
        operation: 'container',
        info: 'Container indicator.'
      },
      {
        text: 'shattered',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'pieces',
        role: 'fodder',
        usage: 'direct'
      }
    ]
  },

  // 23. STAR: Celestial Wordplay (observatory story, step 3)
  'Celebrity\'s heavenly body (4)': {
    tutorial: 'library',
    segments: [
      {
        text: 'Celebrity\'s heavenly body (4)',
        role: 'double'
      }
    ]
  },

  // 24. NOVA: Celestial Wordplay (observatory story, step 5)
  'Stellar explosion in casino vault (4)': {
    tutorial: 'forest',
    segments: [
      {
        text: 'Stellar explosion',
        role: 'definition'
      },
      {
        text: 'in',
        role: 'indicator',
        operation: 'hidden',
        info: 'Hidden-word indicator.'
      },
      {
        text: 'casino vault',
        role: 'fodder',
        usage: 'partial'
      }
    ]
  },

  // 25. COMET: Celestial Wordplay (observatory story, step 7)
  'Company encountered celestial visitor (5)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'Company',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'encountered',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'celestial visitor',
        role: 'definition'
      }
    ]
  },

  // 26. HOME: A Place to Call Home (house story, step 3)
  'Head of household? Ring me, I live here! (4)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'Head of',
        role: 'indicator',
        operation: 'letter-selection',
        info: 'Letter-selection indicator.'
      },
      {
        text: 'household',
        role: 'fodder',
        usage: 'partial'
      },
      {
        text: 'Ring',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'me',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'I live here!',
        role: 'definition'
      }
    ]
  },

  // 27. VOYAGE: The Sky Captain's Collection (airship story, step 3)
  'Savoy agent conceals a journey (6)': {
    tutorial: 'forest',
    segments: [
      {
        text: 'Savoy agent',
        role: 'fodder',
        usage: 'partial'
      },
      {
        text: 'conceals',
        role: 'indicator',
        operation: 'hidden',
        info: 'Hidden-word indicator.'
      },
      {
        text: 'a journey',
        role: 'definition'
      }
    ]
  },

  // 28. COAST: The Sky Captain's Collection (airship story, step 5)
  'Tacos, adrift, along the shoreline (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Tacos',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'adrift',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'along the shoreline',
        role: 'definition'
      }
    ]
  },

  // 29. MAST: The Sky Captain's Collection (airship story, step 7)
  'Mum\'s street pole (4)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'Mum',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: '\'s',
        role: 'link'
      },
      {
        text: 'street',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'pole',
        role: 'definition'
      }
    ]
  },

  // 30. REEL: The Quiet Catch (pond story, step 2)
  'Stagger on a fishing spool (4).': {
    tutorial: 'library',
    segments: [
      {
        text: 'Stagger on a fishing spool (4).',
        role: 'double'
      }
    ]
  },

  // 40. DRAWER: Simon's Collection (airship bonus, showClueChallenge)
  'Reward sent back: a place for socks (6)': {
    tutorial: 'docks',
    segments: [
      {
        text: 'Reward',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'sent back',
        role: 'indicator',
        operation: 'reversal',
        info: 'Reversal indicator.'
      },
      {
        text: 'a place for socks',
        role: 'definition'
      }
    ]
  },

  // 41. MOCHA: Order a Puzzle (cafe napkin rotation, showGameModal)
  'Flustered macho gets a coffee (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Flustered',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'macho',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'gets',
        role: 'link'
      },
      {
        text: 'a coffee',
        role: 'definition'
      }
    ]
  },

  // 42. DECAF: Order a Puzzle (cafe napkin rotation, showGameModal)
  'Faced about for coffee without the kick (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Faced',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'about',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'for',
        role: 'link'
      },
      {
        text: 'coffee without the kick',
        role: 'definition'
      }
    ]
  },

  // 43. STAR: Learn: Reversals (docks tutorial, step 2)
  'Vermin returning as a celestial body (4)': {
    tutorial: 'docks',
    segments: [
      {
        text: 'Vermin',
        role: 'fodder',
        usage: 'substitution',
        info: 'This is a short 4 letter substitution for a common word that could replace vermin. The wordplay indicator will be used on this after substituting.'
      },
      {
        text: 'returning',
        role: 'indicator',
        operation: 'reversal',
        info: 'Reversal indicator.'
      },
      {
        text: 'as',
        role: 'link'
      },
      {
        text: 'a celestial body',
        role: 'definition'
      }
    ]
  },

  // 44. LEAF: Learn: Hidden Words (forest tutorial, step 2)
  'Page found in maple aftermath (4)': {
    tutorial: 'forest',
    segments: [
      {
        text: 'Page',
        role: 'definition'
      },
      {
        text: 'found in',
        role: 'indicator',
        operation: 'hidden',
        info: 'Hidden-word indicator.'
      },
      {
        text: 'maple aftermath',
        role: 'fodder',
        usage: 'partial'
      }
    ]
  },

  // 45. TEA: Learn: Initial Letters (cafe tutorial, step 1)
  'Drink initially taken every afternoon (3)': {
    tutorial: 'cafe',
    segments: [
      {
        text: 'Drink',
        role: 'definition'
      },
      {
        text: 'initially',
        role: 'indicator',
        operation: 'letter-selection',
        info: 'Letter-selection indicator.'
      },
      {
        text: 'taken every afternoon',
        role: 'fodder',
        usage: 'partial'
      }
    ]
  },

  // 46. TALES: Learn: Anagrams (town tutorial, step 2)
  'Steal, somehow, these stories (5)': {
    tutorial: 'town',
    segments: [
      {
        text: 'Steal',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'somehow',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'these',
        role: 'link'
      },
      {
        text: 'stories',
        role: 'definition'
      }
    ]
  },

  // 47. WINE: Learn: Containers (adventure tutorial, step 2)
  'We hold \'in\' the drink (4)': {
    tutorial: 'adventure',
    segments: [
      {
        text: 'We',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'hold',
        role: 'indicator',
        operation: 'container',
        info: 'Container indicator.'
      },
      {
        text: '\'in\'',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'the drink',
        role: 'definition'
      }
    ]
  },

  // 48. LIGHT: Learn: Double Definitions (library tutorial, step 1)
  'Not heavy and illumination (5)': {
    tutorial: 'library',
    segments: [
      {
        text: 'Not heavy and illumination (5)',
        role: 'double'
      }
    ]
  },

  // 49. CURE: Learn: Combination Clues (workshop tutorial, step 2)
  'First of royal cue, broken, is a remedy (4)': {
    tutorial: 'workshop',
    segments: [
      {
        text: 'First of',
        role: 'indicator',
        operation: 'letter-selection',
        info: 'Letter-selection indicator.'
      },
      {
        text: 'royal',
        role: 'fodder',
        usage: 'partial'
      },
      {
        text: 'cue',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'broken',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'is',
        role: 'link'
      },
      {
        text: 'a remedy',
        role: 'definition'
      }
    ]
  },

  // 50. EARTH: Learn: Advanced Anagrams (beach tutorial, step 1)
  'Heart, shattered, becomes the planet (5)': {
    tutorial: 'beach',
    segments: [
      {
        text: 'Heart',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'shattered',
        role: 'indicator',
        operation: 'anagram',
        info: 'Anagram indicator.'
      },
      {
        text: 'becomes',
        role: 'link'
      },
      {
        text: 'the planet',
        role: 'definition'
      }
    ]
  },

  // 51. SCAR: Learn: Deletions (cove tutorial, step 2)
  'Scare endlessly leaves a mark (4)': {
    tutorial: 'cove',
    segments: [
      {
        text: 'Scare',
        role: 'fodder',
        usage: 'direct'
      },
      {
        text: 'endlessly',
        role: 'indicator',
        operation: 'deletion',
        info: 'Deletion indicator.'
      },
      {
        text: 'leaves',
        role: 'link'
      },
      {
        text: 'a mark',
        role: 'definition'
      }
    ]
  },

  // 52. SAIL: Learn: Homophones (observatory tutorial, step 2)
  'Bargain event heard on a boat (4)': {
    tutorial: 'observatory',
    segments: [
      {
        text: 'Bargain event',
        role: 'fodder',
        usage: 'substitution',
        info: 'This word stands in for another. Substitute it first, then apply the wordplay indicator.'
      },
      {
        text: 'heard',
        role: 'indicator',
        operation: 'homophone',
        info: 'Homophone indicator.'
      },
      {
        text: 'on a boat',
        role: 'definition'
      }
    ]
  }
};
