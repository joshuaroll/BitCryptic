import dailyClues, { getDailyClue } from './dailyClues';
import englishWords from 'an-array-of-english-words';

const lettersOnly = (s) => s.toLowerCase().replace(/[^a-z]/g, '');
const sortLetters = (s) => lettersOnly(s).split('').sort().join('');

describe('dailyClues data integrity', () => {
  test('ids are unique and sequential from 1', () => {
    const ids = dailyClues.map((c) => c.id);
    expect(new Set(ids).size).toBe(dailyClues.length);
    ids.forEach((id, i) => expect(id).toBe(i + 1));
  });

  test('answers are unique common dictionary words', () => {
    const answers = dailyClues.map((c) => c.answer);
    expect(new Set(answers).size).toBe(dailyClues.length);
    answers.forEach((answer) => {
      expect(englishWords).toContain(answer.toLowerCase());
    });
  });

  test('difficulty ratings are integers from 1 to 5', () => {
    dailyClues.forEach((clue) => {
      expect(Number.isInteger(clue.difficulty)).toBe(true);
      expect(clue.difficulty).toBeGreaterThanOrEqual(1);
      expect(clue.difficulty).toBeLessThanOrEqual(5);
    });
  });

  test('every anagram clue has fodder whose letters sort-match its answer', () => {
    const anagrams = dailyClues.filter((c) => c.clueType === 'anagram');
    expect(anagrams.length).toBeGreaterThan(0);
    anagrams.forEach((clue) => {
      const fodderHint = clue.hints.find((h) => h.type === 'fodder');
      expect(fodderHint).toBeDefined();
      const match = fodderHint.text.match(/'([^']+)'/);
      expect(match).not.toBeNull();
      const fodder = match[1];
      expect(sortLetters(fodder)).toBe(sortLetters(clue.answer));
    });
  });

  test('every hidden-word clue contains its answer contiguously in the clue text', () => {
    const hiddens = dailyClues.filter((c) => c.clueType === 'hidden_word');
    expect(hiddens.length).toBeGreaterThan(0);
    hiddens.forEach((clue) => {
      expect(lettersOnly(clue.clue)).toContain(lettersOnly(clue.answer));
    });
  });

  test("every clue's stated answer length matches", () => {
    dailyClues.forEach((clue) => {
      // Answers are single uppercase words
      expect(clue.answer).toMatch(/^[A-Z]+$/);
      expect(clue.answer.length).toBeGreaterThanOrEqual(3);
      // If the clue text carries an enumeration, it must match the answer length
      const enumeration = clue.clue.match(/\((\d+)\)/);
      if (enumeration) {
        expect(Number(enumeration[1])).toBe(clue.answer.length);
      }
      // The definition must be locatable in the clue text (used for highlighting)
      expect(clue.clue.toLowerCase()).toContain(clue.definition.toLowerCase());
    });
  });

  test('getDailyClue over one full cycle of consecutive dates hits every clue', () => {
    const seenIds = new Set();
    const indices = [];
    const start = Date.UTC(2026, 0, 1);
    for (let i = 0; i < dailyClues.length; i++) {
      const d = new Date(start + i * 86400000);
      const key = d.toISOString().split('T')[0];
      const clue = getDailyClue(key);
      seenIds.add(clue.id);
      indices.push(clue.dayIndex);
    }
    expect(seenIds.size).toBe(dailyClues.length);
    dailyClues.forEach((clue) => expect(seenIds.has(clue.id)).toBe(true));
    // Rotation is sequential (each day advances by one, wrapping around)
    for (let i = 1; i < indices.length; i++) {
      expect(indices[i]).toBe((indices[i - 1] + 1) % dailyClues.length);
    }
  });
});
