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
  // ─── EASY (Difficulty 1-2) — Monday/Weekend clues ───

  {
    id: 1,
    clue: "Gaze produced by confused rates",
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
    clue: "Fire or old sweetheart",
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
    clue: "Flower or flourish",
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
    clue: "Royal headpiece from scarecrow nearby",
    answer: "CROWN",
    definition: "Royal headpiece",
    clueType: "hidden_word",
    difficulty: 1,
    explanation: "'From' is the hidden-word indicator. CROWN is hidden inside 'scare-CROWN-earby'. Definition: 'Royal headpiece'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Royal headpiece'" },
      { type: "indicator", text: "'from' signals a hidden word" },
      { type: "fodder", text: "The answer is hidden inside 'scarecrow nearby'" }
    ]
  },

  // ─── EASY-MEDIUM (Difficulty 2) ───

  {
    id: 6,
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
    id: 7,
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
    id: 8,
    clue: "Paint tool or slight encounter",
    answer: "BRUSH",
    definition: "Paint tool",
    clueType: "double_definition",
    difficulty: 2,
    explanation: "Double definition. BRUSH = a paint tool AND BRUSH = a slight encounter ('a brush with danger').",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Paint tool' and 'slight encounter' are definitions of the answer" }
    ]
  },
  {
    id: 9,
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
    id: 10,
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

  // ─── MEDIUM (Difficulty 3) ───

  {
    id: 11,
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
    id: 12,
    clue: "Good file gives a firm hold",
    answer: "GRASP",
    definition: "firm hold",
    clueType: "charade",
    difficulty: 3,
    explanation: "G (good) + RASP (a file/tool) = GRASP. Definition: 'firm hold'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'firm hold'" },
      { type: "fodder", text: "'Good' gives G (abbreviation)" },
      { type: "fodder", text: "'file' gives RASP (a type of coarse file)" }
    ]
  },
  {
    id: 13,
    clue: "Notes rearranged on the rock",
    answer: "STONE",
    definition: "the rock",
    clueType: "anagram",
    difficulty: 3,
    explanation: "'Rearranged' is the anagram indicator. Rearrange NOTES to get STONE. Definition: 'the rock'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the rock'" },
      { type: "indicator", text: "'Rearranged' signals an anagram" },
      { type: "fodder", text: "The letters in 'notes' are rearranged" }
    ]
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
    clue: "Create or counterfeit",
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
  {
    id: 18,
    clue: "Feather or column of smoke",
    answer: "PLUME",
    definition: "Feather",
    clueType: "double_definition",
    difficulty: 3,
    explanation: "Double definition. PLUME = a large, conspicuous feather AND PLUME = a column of smoke rising.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Feather' and 'column of smoke' are definitions of the answer" }
    ]
  },
  {
    id: 19,
    clue: "Crest partly in hybrid gears",
    answer: "RIDGE",
    definition: "Crest",
    clueType: "hidden_word",
    difficulty: 3,
    explanation: "'Partly in' is the hidden-word indicator. RIDGE is hidden across 'hyb-RIDGE-ars'. Definition: 'Crest'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Crest'" },
      { type: "indicator", text: "'partly in' signals a hidden word" },
      { type: "fodder", text: "The answer is hidden across 'hybrid gears'" }
    ]
  },
  {
    id: 20,
    clue: "Seed found in soaring rain",
    answer: "GRAIN",
    definition: "Seed",
    clueType: "hidden_word",
    difficulty: 3,
    explanation: "'Found in' is the hidden-word indicator. GRAIN is hidden inside 'soarin-GRAIN'. Definition: 'Seed'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'Seed'" },
      { type: "indicator", text: "'found in' signals a hidden word" },
      { type: "fodder", text: "The answer is hidden inside 'soaring rain'" }
    ]
  },

  // ─── MEDIUM-HARD (Difficulty 4) ───

  {
    id: 21,
    clue: "Heats ruined, causing urgency",
    answer: "HASTE",
    definition: "urgency",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Ruined' is the anagram indicator. Rearrange HEATS to get HASTE. Definition: 'urgency'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'urgency'" },
      { type: "indicator", text: "'Ruined' signals an anagram" },
      { type: "fodder", text: "The letters in 'heats' are rearranged" }
    ]
  },
  {
    id: 22,
    clue: "Pines, broken, form the backbone",
    answer: "SPINE",
    definition: "the backbone",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Broken' is the anagram indicator. Rearrange PINES to get SPINE. Definition: 'the backbone'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the backbone'" },
      { type: "indicator", text: "'Broken' signals an anagram" },
      { type: "fodder", text: "The letters in 'pines' are rearranged" }
    ]
  },
  {
    id: 23,
    clue: "Class tree makes a disguise",
    answer: "CLOAK",
    definition: "disguise",
    clueType: "charade",
    difficulty: 4,
    explanation: "CL (class) + OAK (tree) = CLOAK. Definition: 'disguise'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'disguise'" },
      { type: "fodder", text: "'Class' gives CL (abbreviation)" },
      { type: "fodder", text: "'tree' gives OAK (a type of tree)" }
    ]
  },
  {
    id: 24,
    clue: "Delta, remodelled, was distributed",
    answer: "DEALT",
    definition: "was distributed",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Remodelled' is the anagram indicator. Rearrange DELTA to get DEALT. Definition: 'was distributed'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'was distributed'" },
      { type: "indicator", text: "'Remodelled' signals an anagram" },
      { type: "fodder", text: "The letters in 'delta' are rearranged" }
    ]
  },
  {
    id: 25,
    clue: "Pears, damaged, are extra",
    answer: "SPARE",
    definition: "extra",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Damaged' is the anagram indicator. Rearrange PEARS to get SPARE. Definition: 'extra'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'extra'" },
      { type: "indicator", text: "'Damaged' signals an anagram" },
      { type: "fodder", text: "The letters in 'pears' are rearranged" }
    ]
  },

  // ─── HARD (Difficulty 5) ───

  {
    id: 26,
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
  },
  {
    id: 27,
    clue: "Cried, shattered, over the drink",
    answer: "CIDER",
    definition: "the drink",
    clueType: "anagram",
    difficulty: 5,
    explanation: "'Shattered' is the anagram indicator. Rearrange CRIED to get CIDER. Definition: 'the drink'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the drink'" },
      { type: "indicator", text: "'Shattered' signals an anagram" },
      { type: "fodder", text: "The letters in 'cried' are rearranged" }
    ]
  },
  {
    id: 28,
    clue: "Lively weather, sharp and cold",
    answer: "BRISK",
    definition: "Lively",
    clueType: "double_definition",
    difficulty: 3,
    explanation: "Double definition. BRISK = lively/energetic AND BRISK = sharp and cold (of weather).",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "Both 'Lively' and 'sharp and cold' are definitions of the answer" }
    ]
  },
  {
    id: 29,
    clue: "Taros cooked for the Sunday joint",
    answer: "ROAST",
    definition: "the Sunday joint",
    clueType: "anagram",
    difficulty: 4,
    explanation: "'Cooked' is the anagram indicator. Rearrange TAROS to get ROAST. Definition: 'the Sunday joint' (a roast dinner).",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'the Sunday joint'" },
      { type: "indicator", text: "'Cooked' signals an anagram" },
      { type: "fodder", text: "The letters in 'taros' are rearranged" }
    ]
  },
  {
    id: 30,
    clue: "Vermin returned as a celestial body",
    answer: "STAR",
    definition: "celestial body",
    clueType: "reversal",
    difficulty: 3,
    explanation: "'Returned' is the reversal indicator. Reverse RATS (vermin) to get STAR. Definition: 'celestial body'.",
    author: "by Bit Cryptic",
    hints: [
      { type: "definition", text: "The definition is 'celestial body'" },
      { type: "indicator", text: "'Returned' signals a reversal" },
      { type: "fodder", text: "'Vermin' gives RATS, which is reversed" }
    ]
  }
];

/**
 * Get the daily clue for a given date string (YYYY-MM-DD).
 * Uses a simple hash to deterministically select the same clue
 * for all players on the same day.
 */
function hashDate(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export function getDailyClue(date) {
  const dateStr = date instanceof Date
    ? date.toISOString().split('T')[0]
    : date;
  const index = hashDate(dateStr) % dailyClues.length;
  return { ...dailyClues[index], dayIndex: index };
}

export function getAllClues() {
  return dailyClues;
}

export default dailyClues;
