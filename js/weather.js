// ═══════════════════════════════════
//  WEATHER: the island runs one device a day
//
//  The lorebook is not being poetic when it says the islanders treat wordplay
//  as weather. Language is physics here. So the forecast is a clue device, and
//  the island demonstrates it on its own furniture.
//
//  ── The forecast is the daily clue ─────────────────────────────────────
//  Joshua's call, and it is better than picking a device at random: the weather
//  IS whatever today's clue is doing. That makes the forecast true rather than
//  decorative. A player who reads the notice board, sees "the island runs
//  backwards", and then meets a reversal in the square has been taught the
//  device twice before anyone explained it.
//
//  ── What it changes ────────────────────────────────────────────────────
//  Signage, and only signage. The welcome sign and the docks postscript are the
//  two pieces of text the island has always used to say "nothing here reads the
//  way you expect", so they are the right things to move.
//
//  Location NAMES never change. An anagram day that rearranged "Enigma Forest"
//  would make the island unusable, and a mechanic that fights navigation is a
//  mechanic that loses. Weather is texture, not an obstacle.
//
//  NO SPEED FRAMING (r3 #11). Weather turns on the local calendar day, and
//  nothing about it is timed or ranked.
// ═══════════════════════════════════

var BCWWeather = (() => {
  // What the island does on each kind of day, and how the notice board says it.
  // The line is plain on purpose: the sign demonstrates the device, so the
  // board does not also have to perform it.
  const FORECAST = {
    anagram: {
      label: 'Unsettled',
      line: 'The letters are loose today. Signs will not hold their order.',
    },
    reversal: {
      label: 'Turning',
      line: 'The island runs backwards today. Some things read correctly for once.',
    },
    hidden: {
      label: 'Close',
      line: 'Things are inside other things today. Read across the joins.',
    },
    deletion: {
      label: 'Thin',
      line: 'The island is short a letter or two today. Nothing important.',
    },
    container: {
      label: 'Holding',
      line: 'Words are carrying each other today.',
    },
    charade: {
      label: 'Settled',
      line: 'Things stand next to each other today, and mean the sum.',
    },
    homophone: {
      label: 'Carrying',
      line: 'Sound travels today. Say the signs aloud.',
    },
    double: {
      label: 'Two minds',
      line: 'Everything means two things today, and both are true.',
    },
    'letter-selection': {
      label: 'Picking out',
      line: 'Only some of the letters are showing up for work today.',
    },
  };

  /** Today's device, taken from the daily clue so the forecast is honest. */
  function device() {
    try {
      if (typeof BCWDailyTerminal !== 'undefined' && BCWDailyTerminal.pick) {
        const t = BCWDailyTerminal.pick();
        if (t && t.clue && t.clue.type) return t.clue.type;
      }
    } catch { /* fall through */ }
    return null;
  }

  function today() {
    const d = device();
    if (!d) return null;
    const f = FORECAST[d];
    if (!f) return null;
    return { device: d, label: f.label, line: f.line };
  }

  /**
   * Apply the day's device to a piece of signage.
   *
   * Only ever called on decorative text the island owns. Returns the string
   * unchanged for any device with no visual effect, which is most of them:
   * showing off is not the point, and a sign that changed every single day
   * would stop being noticeable.
   */
  function bend(text) {
    const d = device();
    if (!d || !text) return text;
    if (d === 'reversal') return String(text).split('').reverse().join('');
    if (d === 'anagram') {
      // Each word's inner letters shuffled, first and last kept, so the sign is
      // visibly wrong but still recognisably the sign it was. A full shuffle
      // reads as corruption rather than as weather.
      return String(text).replace(/[A-Za-z]{4,}/g, (w) => {
        const mid = w.slice(1, -1).split('');
        for (let i = mid.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const t = mid[i]; mid[i] = mid[j]; mid[j] = t;
        }
        return w[0] + mid.join('') + w[w.length - 1];
      });
    }
    return text;
  }

  return { FORECAST: FORECAST, device: device, today: today, bend: bend };
})();
