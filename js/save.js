// ═══════════════════════════════════
//  SAVE SYSTEM - Bit Cryptic World
//  Export/import, corruption recovery, robust persistence
// ═══════════════════════════════════

const BCWSave = (() => {
  // Everything export / import / reset touches.
  //
  // This list drifted out of step with the game: the two tutorial phase flags,
  // the anatomy taught flag and the fish-log aggregate were all real progress
  // that export silently dropped and reset silently left behind — so a "full
  // reset" re-taught nothing and a restored export lost lifetime fish totals.
  // The cloud's own list (GAME_KEYS.world in shared/auth/bc-sync.js) already
  // treated them as progress; these two lists now agree, except bcw_analytics,
  // which belongs in a local export but is deliberately never uploaded.
  const ALL_KEYS = [
    'bitcryptic_progress',
    'bitcryptic_unlocked_codes',
    'bitcryptic_house',
    'bitcryptic_fish',
    'bitcryptic_fish_stats',
    'bitcryptic_fish_coins',
    'bitcryptic_fish_bucket',
    'bitcryptic_fish_upgrades',
    'bitcryptic_cheese',
    'bitcryptic_cheese_cooldown',
    'bcw_audio_settings',
    'bcw_accessibility',
    'bcw_settings',
    'bcw_achievements',
    'bcw_analytics',
    'bcw_tutorial_complete',
    'bcw_tutorial_p1',
    'bcw_tutorial_p2',
    'bcw_anatomy_taught',
    'bcw_auto_lesson_seen'
  ];

  // Safely get from localStorage with fallback
  function safeGet(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      if (typeof BCWAnalytics !== 'undefined') {
        BCWAnalytics.trackError(e, 'safeGet:' + key);
      }
      return fallback;
    }
  }

  // Safely set to localStorage
  function safeSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      if (typeof BCWAnalytics !== 'undefined') {
        BCWAnalytics.trackError(e, 'safeSet:' + key);
      }
      // Storage might be full - try to clear analytics to make room
      try {
        localStorage.removeItem('bcw_analytics');
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    }
  }

  // Export all save data as a downloadable JSON file
  function exportSave() {
    const data = {};
    ALL_KEYS.forEach(key => {
      const val = safeGet(key);
      if (val !== null) data[key] = val;
    });

    data._exportDate = new Date().toISOString();
    data._version = '1.0';

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bitcryptic-save-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    if (typeof BCWAccessibility !== 'undefined') {
      BCWAccessibility.announce('Save data exported');
    }
  }

  // Import save data from file
  function importSave() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!data._version) {
            showGameModal('That does not look like a Bit Cryptic World save file. Pick the .json file the game exported for you.', 'Import Error', '\u26A0\uFE0F');
            return;
          }

          // Validate that at least one recognized game key exists
          const gameKeys = Object.keys(data).filter(k => !k.startsWith('_') && ALL_KEYS.includes(k));
          if (gameKeys.length === 0) {
            showGameModal('That file has no island progress in it.', 'Import Error', '\u26A0\uFE0F');
            return;
          }

          const ok = await confirmDialog({
            title: 'Replace this save?',
            message: 'Loading this file will overwrite the progress currently on this device. Anything not in the file is lost.',
            confirmLabel: 'Load the file',
            cancelLabel: 'Keep what I have',
            danger: true,
            icon: '\u{1F4E5}'
          });
          if (!ok) return;

          // Restore only recognized keys
          gameKeys.forEach(key => {
            if (typeof data[key] === 'object' || typeof data[key] === 'string' || typeof data[key] === 'boolean' || typeof data[key] === 'number') {
              safeSet(key, data[key]);
            }
          });

          if (typeof BCWAccessibility !== 'undefined') {
            BCWAccessibility.announce('Save data imported successfully. Reloading...');
          }

          setTimeout(() => location.reload(), 500);
        } catch (err) {
          showGameModal('Failed to import save file: ' + err.message, 'Import Error', '\u26A0\uFE0F');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // The island's own confirm dialog, with a native fallback.
  //
  // showGameConfirm lives in index.html, so it is present wherever the game
  // actually runs. The fallback exists for the one case where it is not — a
  // unit harness loading this module alone — and must never be the reason a
  // destructive action silently proceeds.
  function confirmDialog(opts) {
    if (typeof showGameConfirm === 'function') return showGameConfirm(opts);
    return Promise.resolve(
      typeof confirm === 'function'
        ? confirm((opts.title ? opts.title + '\n\n' : '') + (opts.message || ''))
        : false
    );
  }

  // Confirm and reset all progress
  async function confirmReset() {
    const first = await confirmDialog({
      title: 'Reset everything?',
      message: 'This wipes every location you have unlocked, every story you have finished, your house, your fish and your achievements. There is no undo. If you want a copy first, close this and choose Export.',
      confirmLabel: 'Reset my progress',
      cancelLabel: 'Never mind',
      danger: true,
      icon: '⚠️'
    });
    if (!first) return;

    const second = await confirmDialog({
      title: 'Last chance',
      message: 'Once this is gone the island starts over from the shore. Still sure?',
      confirmLabel: 'Yes, reset it',
      cancelLabel: 'Take me back',
      danger: true,
      icon: '⚠️'
    });
    if (!second) return;

    ALL_KEYS.forEach(key => {
      try { localStorage.removeItem(key); } catch {}
    });

    location.reload();
  }

  // Fish-log cap. Must match FISH_LOG_CAP / FISH_STATS_KEY in index.html —
  // this module runs the ONE-TIME migration for saves created before the cap
  // existed, which can be tens of thousands of entries and, left alone, would
  // push the whole save past the 256 KB cloud-sync limit and stop every key
  // from syncing.
  const FISH_LOG_CAP = 300;
  const FISH_STATS_KEY = 'bitcryptic_fish_stats';

  // Fold the overflow into per-species aggregates before trimming. Lossless
  // for everything the game actually reads back: species totals, best weight,
  // and the lifetime count.
  function migrateFishLog(fishLog) {
    const existing = safeGet(FISH_STATS_KEY);
    const stats = (existing && typeof existing === 'object' && existing.species)
      ? { total: typeof existing.total === 'number' ? existing.total : 0, species: existing.species }
      : { total: 0, species: {} };

    const overflow = fishLog.slice(0, fishLog.length - FISH_LOG_CAP);
    overflow.forEach(f => {
      if (!f || !f.name) return;
      const s = stats.species[f.name] || (stats.species[f.name] = {
        count: 0, bestWeight: 0, rarity: f.rarity, emoji: f.emoji || '🐟'
      });
      s.count++;
      const w = typeof f.weight === 'number' ? f.weight : 0;
      if (w > s.bestWeight) s.bestWeight = w;
      if (!s.rarity && f.rarity) s.rarity = f.rarity;
      if (!s.emoji && f.emoji) s.emoji = f.emoji;
      stats.total++;
    });

    // Stats first: if the second write fails, the aggregate is already safe and
    // the untrimmed log is still there to retry from. The reverse order could
    // drop catches on a storage error.
    if (safeSet(FISH_STATS_KEY, stats)) {
      safeSet('bitcryptic_fish', fishLog.slice(fishLog.length - FISH_LOG_CAP));
    }
  }

  // Check save data integrity on load
  function validateSave() {
    // Validate progress
    const progress = safeGet('bitcryptic_progress');
    if (progress) {
      if (!progress.version) progress.version = 1;
      if (!Array.isArray(progress.unlockedLocations)) progress.unlockedLocations = [];
      if (!Array.isArray(progress.completedStories)) progress.completedStories = [];
      if (typeof progress.introComplete !== 'boolean') progress.introComplete = false;
      if (!progress.storyProgress || typeof progress.storyProgress !== 'object') progress.storyProgress = {};
      if (progress.version === 1) progress.version = 2; // v2 adds storyProgress (lossless)
      progress.unlockedLocations = [...new Set(progress.unlockedLocations)];
      progress.completedStories = [...new Set(progress.completedStories)];
      safeSet('bitcryptic_progress', progress);
    }

    // Validate achievements
    const achievements = safeGet('bcw_achievements');
    if (achievements) {
      if (!Array.isArray(achievements.unlocked)) achievements.unlocked = [];
      if (typeof achievements.puzzleStreak !== 'number') achievements.puzzleStreak = 0;
      if (typeof achievements.totalPuzzlesSolved !== 'number') achievements.totalPuzzlesSolved = 0;
      achievements.unlocked = [...new Set(achievements.unlocked)];
      safeSet('bcw_achievements', achievements);
    }

    // Validate house data (schema matches the house editor: items/wallColor/floorColor)
    const house = safeGet('bitcryptic_house');
    if (house) {
      if (!Array.isArray(house.items)) house.items = [];
      if (typeof house.wallColor !== 'string') house.wallColor = '#7a6a5a';
      if (typeof house.floorColor !== 'string') house.floorColor = '#8b7355';
      safeSet('bitcryptic_house', house);
    }

    // Validate fishing data (stored across separate keys)
    const fishLog = safeGet('bitcryptic_fish');
    if (fishLog !== null && !Array.isArray(fishLog)) safeSet('bitcryptic_fish', []);
    else if (Array.isArray(fishLog) && fishLog.length > FISH_LOG_CAP) migrateFishLog(fishLog);
    const fishBucket = safeGet('bitcryptic_fish_bucket');
    if (fishBucket !== null && !Array.isArray(fishBucket)) safeSet('bitcryptic_fish_bucket', []);
    const fishCoins = safeGet('bitcryptic_fish_coins');
    if (fishCoins !== null && typeof fishCoins !== 'number') safeSet('bitcryptic_fish_coins', 0);
    const fishUpgrades = safeGet('bitcryptic_fish_upgrades');
    if (fishUpgrades !== null && !Array.isArray(fishUpgrades)) safeSet('bitcryptic_fish_upgrades', []);
  }

  return {
    safeGet,
    safeSet,
    exportSave,
    importSave,
    confirmReset,
    validateSave
  };
})();
