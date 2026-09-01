/**
 * Bit Cryptic World — Daily Clue Database
 *
 * Each clue is an original composition by Bit Cryptic.
 * All wordplay has been programmatically verified.
 *
 * Selection: use getDailyClue(dateString) which hashes the date
 * to deterministically pick the same clue for all players on a given day.
 */

const dailyClues = [
  // ─── EASY (Difficulty 1) ───

  {
    id: 1,
    clue: "Gaze from confused rates",
    answer: "STARE",
    definition: "Gaze",
    clueType: "anagram",
    difficulty: 1,
    explanation: "'Confused' is the anagram indicator. Rearrange RATES to get STARE. Definition: 'Gaze'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Gaze'" },
      { type: "indicator", text: "'Confused' signals an anagram" },
      { type: "fodder", text: "The letters in 'rates' are rearranged" }
    ]
  },
  {
    id: 2,
    clue: "Fire old sweetheart",
    answer: "FLAME",
    definition: "Fire",
    clueType: "double_definition",
    difficulty: 1,
    explanation: "Double definition. FLAME = fire AND FLAME = an old sweetheart/lover.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Fire' and 'old sweetheart' are definitions of the answer" }
    ]
  },
  {
    id: 3,
    clue: "Canoe wrecked in the deep blue",
    answer: "OCEAN",
    definition: "the deep blue",
    clueType: "anagram",
    difficulty: 1,
    explanation: "'Wrecked' is the anagram indicator. Rearrange CANOE to get OCEAN. Definition: 'the deep blue'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the deep blue'" },
      { type: "indicator", text: "'Wrecked' signals an anagram" },
      { type: "fodder", text: "The letters in 'canoe' are rearranged" }
    ]
  },
  {
    id: 4,
    clue: "Flower flourish",
    answer: "BLOOM",
    definition: "Flower",
    clueType: "double_definition",
    difficulty: 1,
    explanation: "Double definition. BLOOM = a flower AND BLOOM = to flourish/thrive.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Flower' and 'flourish' are definitions of the answer" }
    ]
  },
  {
    id: 5,
    clue: "Bird brought north for the royal headpiece",
    answer: "CROWN",
    definition: "the royal headpiece",
    clueType: "charade",
    difficulty: 1,
    explanation: "CROW (bird) + N (north) = CROWN. Definition: 'the royal headpiece'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the royal headpiece'" },
      { type: "fodder", text: "'Bird' gives CROW" },
      { type: "fodder", text: "'north' gives N, added at the end" }
    ]
  },
  {
    id: 6,
    clue: "Crest partly in hybrid gears",
    answer: "RIDGE",
    definition: "Crest",
    clueType: "hidden_word",
    difficulty: 1,
    explanation: "'Partly in' is the hidden-word indicator. RIDGE is hidden across 'hyb-RIDGE-ars'. Definition: 'Crest'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Crest'" },
      { type: "indicator", text: "'partly in' signals a hidden word" },
      { type: "fodder", text: "The answer is hidden across 'hybrid gears'" }
    ]
  },
  {
    id: 7,
    clue: "Smile about a seed",
    answer: "GRAIN",
    definition: "seed",
    clueType: "container",
    difficulty: 1,
    explanation: "GRIN (smile) placed about A gives GRAIN. Definition: 'seed'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'seed'" },
      { type: "indicator", text: "'about' signals one word placed around another" },
      { type: "fodder", text: "'Smile' gives GRIN, wrapped around A" }
    ]
  },
  {
    id: 8,
    clue: "Pines, broken, form the backbone",
    answer: "SPINE",
    definition: "the backbone",
    clueType: "anagram",
    difficulty: 1,
    explanation: "'Broken' is the anagram indicator. Rearrange PINES to get SPINE. Definition: 'the backbone'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the backbone'" },
      { type: "indicator", text: "'Broken' signals an anagram" },
      { type: "fodder", text: "The letters in 'pines' are rearranged" }
    ]
  },
  {
    id: 9,
    clue: "Damaged pears are extra",
    answer: "SPARE",
    definition: "extra",
    clueType: "anagram",
    difficulty: 1,
    explanation: "'Damaged' is the anagram indicator. Rearrange PEARS to get SPARE. Definition: 'extra'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'extra'" },
      { type: "indicator", text: "'Damaged' signals an anagram" },
      { type: "fodder", text: "The letters in 'pears' are rearranged" }
    ]
  },
  {
    id: 10,
    clue: "Cried, shattered, over the drink",
    answer: "CIDER",
    definition: "the drink",
    clueType: "anagram",
    difficulty: 1,
    explanation: "'Shattered' is the anagram indicator. Rearrange CRIED to get CIDER. Definition: 'the drink'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the drink'" },
      { type: "indicator", text: "'Shattered' signals an anagram" },
      { type: "fodder", text: "The letters in 'cried' are rearranged" }
    ]
  },

  // ─── EASY-MEDIUM (Difficulty 2) ───

  {
    id: 11,
    clue: "Bared, oddly, the loaf",
    answer: "BREAD",
    definition: "the loaf",
    clueType: "anagram",
    difficulty: 2,
    explanation: "'Oddly' is the anagram indicator. Rearrange BARED to get BREAD. Definition: 'the loaf'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the loaf'" },
      { type: "indicator", text: "'Oddly' signals an anagram" },
      { type: "fodder", text: "The letters in 'bared' are rearranged" }
    ]
  },
  {
    id: 12,
    clue: "Trial disrupted the path",
    answer: "TRAIL",
    definition: "the path",
    clueType: "anagram",
    difficulty: 2,
    explanation: "'Disrupted' is the anagram indicator. Rearrange TRIAL to get TRAIL. Definition: 'the path'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the path'" },
      { type: "indicator", text: "'Disrupted' signals an anagram" },
      { type: "fodder", text: "The letters in 'trial' are rearranged" }
    ]
  },
  {
    id: 13,
    clue: "Paint tool brief encounter",
    answer: "BRUSH",
    definition: "Paint tool",
    clueType: "double_definition",
    difficulty: 2,
    explanation: "Double definition. BRUSH = a paint tool AND BRUSH = a brief encounter ('a brush with danger').",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Paint tool' and 'brief encounter' are definitions of the answer" }
    ]
  },
  {
    id: 14,
    clue: "Float aimlessly, getting the meaning",
    answer: "DRIFT",
    definition: "Float aimlessly",
    clueType: "double_definition",
    difficulty: 2,
    explanation: "Double definition. DRIFT = to float aimlessly AND DRIFT = the meaning/gist of something ('catch my drift').",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Float aimlessly' and 'the meaning' are definitions of the answer" }
    ]
  },
  {
    id: 15,
    clue: "Stride out in the third month",
    answer: "MARCH",
    definition: "Stride out",
    clueType: "double_definition",
    difficulty: 2,
    explanation: "Double definition. MARCH = to stride out/walk AND MARCH = the third month of the year.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Stride out' and 'the third month' are definitions of the answer" }
    ]
  },
  {
    id: 16,
    clue: "Heats ruined, causing urgency",
    answer: "HASTE",
    definition: "urgency",
    clueType: "anagram",
    difficulty: 2,
    explanation: "'Ruined' is the anagram indicator. Rearrange HEATS to get HASTE. Definition: 'urgency'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'urgency'" },
      { type: "indicator", text: "'Ruined' signals an anagram" },
      { type: "fodder", text: "The letters in 'heats' are rearranged" }
    ]
  },
  {
    id: 17,
    clue: "Rats turned into a celestial body",
    answer: "STAR",
    definition: "a celestial body",
    clueType: "reversal",
    difficulty: 2,
    explanation: "'Turned' is the reversal indicator. Reverse RATS to get STAR. Definition: 'a celestial body'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'a celestial body'" },
      { type: "indicator", text: "'Turned' signals a reversal" },
      { type: "fodder", text: "The letters in 'Rats' are reversed" }
    ]
  },

  // ─── MEDIUM (Difficulty 3) ───

  {
    id: 18,
    clue: "Forts rebuilt in the cold snap",
    answer: "FROST",
    definition: "the cold snap",
    clueType: "anagram",
    difficulty: 3,
    explanation: "'Rebuilt' is the anagram indicator. Rearrange FORTS to get FROST. Definition: 'the cold snap'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the cold snap'" },
      { type: "indicator", text: "'Rebuilt' signals an anagram" },
      { type: "fodder", text: "The letters in 'forts' are rearranged" }
    ]
  },
  {
    id: 19,
    clue: "Notes rearranged on rock",
    answer: "STONE",
    definition: "rock",
    clueType: "anagram",
    difficulty: 3,
    explanation: "'Rearranged' is the anagram indicator. Rearrange NOTES to get STONE. Definition: 'rock'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'rock'" },
      { type: "indicator", text: "'Rearranged' signals an anagram" },
      { type: "fodder", text: "The letters in 'notes' are rearranged" }
    ]
  },
  {
    id: 20,
    clue: "Large, wild angry look",
    answer: "GLARE",
    definition: "angry look",
    clueType: "anagram",
    difficulty: 3,
    explanation: "'Wild' is the anagram indicator. Rearrange LARGE to get GLARE. Definition: 'angry look'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'angry look'" },
      { type: "indicator", text: "'Wild' signals an anagram" },
      { type: "fodder", text: "The letters in 'large' are rearranged" }
    ]
  },
  {
    id: 21,
    clue: "Enchantment found in march armour",
    answer: "CHARM",
    definition: "Enchantment",
    clueType: "hidden_word",
    difficulty: 3,
    explanation: "'Found in' is the hidden-word indicator. CHARM is hidden inside 'mar-CHARM-our'. Definition: 'Enchantment'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Enchantment'" },
      { type: "indicator", text: "'found in' signals a hidden word" },
      { type: "fodder", text: "The answer is hidden inside 'march armour'" }
    ]
  },
  {
    id: 22,
    clue: "Feats, unusually, make a banquet",
    answer: "FEAST",
    definition: "banquet",
    clueType: "anagram",
    difficulty: 3,
    explanation: "'Unusually' is the anagram indicator. Rearrange FEATS to get FEAST. Definition: 'banquet'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'banquet'" },
      { type: "indicator", text: "'Unusually' signals an anagram" },
      { type: "fodder", text: "The letters in 'feats' are rearranged" }
    ]
  },
  {
    id: 23,
    clue: "Create counterfeit",
    answer: "FORGE",
    definition: "Create",
    clueType: "double_definition",
    difficulty: 3,
    explanation: "Double definition. FORGE = to create/shape metal AND FORGE = to counterfeit/fake.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Create' and 'counterfeit' are definitions of the answer" }
    ]
  },

  // ─── MEDIUM-HARD (Difficulty 4) ───

  {
    id: 24,
    clue: "Cape conceals",
    answer: "CLOAK",
    definition: "Cape",
    clueType: "double_definition",
    difficulty: 4,
    explanation: "Double definition. CLOAK = a cape AND CLOAK = conceals/hides from view.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Cape' and 'conceals' are definitions of the answer" }
    ]
  },
  {
    id: 25,
    clue: "Delta remodelled distribution",
    answer: "DEALT",
    definition: "distribution",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Remodelled' is the anagram indicator. Rearrange DELTA to get DEALT. Definition: 'distribution'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'distribution'" },
      { type: "indicator", text: "'Remodelled' signals an anagram" },
      { type: "fodder", text: "The letters in 'delta' are rearranged" }
    ]
  },
  {
    id: 26,
    clue: "Taros cooked for the mockery",
    answer: "ROAST",
    definition: "the mockery",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Cooked' is the anagram indicator. Rearrange TAROS to get ROAST. Definition: 'the mockery'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the mockery'" },
      { type: "indicator", text: "'Cooked' signals an anagram" },
      { type: "fodder", text: "The letters in 'taros' are rearranged" }
    ]
  },

  // ─── HARD (Difficulty 5) ───

  {
    id: 27,
    clue: "Happiness curtailed before morning's shimmer",
    answer: "GLEAM",
    definition: "shimmer",
    clueType: "charade_deletion",
    difficulty: 5,
    explanation: "GLEE (happiness) curtailed (remove last letter) = GLE + AM (morning) = GLEAM. Definition: 'shimmer'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'shimmer'" },
      { type: "indicator", text: "'curtailed' signals removing the last letter" },
      { type: "fodder", text: "'Happiness' gives GLEE, curtailed to GLE" },
      { type: "fodder", text: "'morning' gives AM" }
    ]
  }
];

/**
 * Get the daily clue for a given date string (YYYY-MM-DD).
 * Uses days-since-epoch so every clue in the pool is reached,
 * rotating sequentially with the same clue for all players on a given date.
 */
export function getDailyClue(date) {
  const dateStr = date instanceof Date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    : date;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dayNumber = Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  const index = ((dayNumber % dailyClues.length) + dailyClues.length) % dailyClues.length;
  return { ...dailyClues[index], dayIndex: index };
}

export function getAllClues() {
  return dailyClues;
}

export default dailyClues;
