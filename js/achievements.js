// ═══════════════════════════════════
//  ACHIEVEMENTS / BADGES - Bit Cryptic World
//  Visual achievement tracking system
// ═══════════════════════════════════

const BCWAchievements = (() => {
  const STORAGE_KEY = 'bcw_achievements';

  const ACHIEVEMENTS = {
    // Exploration
    first_steps: { title: 'First Steps', desc: 'Complete the intro sequence', icon: '👣', category: 'explore' },
    explorer: { title: 'Explorer', desc: 'Visit 5 different locations', icon: '🧭', category: 'explore' },
    cartographer: { title: 'Cartographer', desc: 'Unlock all main locations', icon: '🗺️', category: 'explore' },
    secret_finder: { title: 'Secret Finder', desc: 'Discover a hidden location', icon: '🔍', category: 'explore' },
    all_secrets: { title: 'Master of Secrets', desc: 'Find all hidden locations', icon: '🏆', category: 'explore' },

    // Stories
    first_story: { title: 'Storyteller', desc: 'Complete your first story', icon: '📖', category: 'story' },
    all_stories: { title: 'Loremaster', desc: 'Complete all location stories', icon: '📚', category: 'story' },

    // Puzzles
    first_puzzle: { title: 'Puzzle Solver', desc: 'Solve your first cryptic clue', icon: '🧩', category: 'puzzle' },
    no_hints: { title: 'Clean Solve', desc: 'Solve a puzzle on the first try', icon: '⚡', category: 'puzzle' },
    puzzle_streak_5: { title: 'On a Roll', desc: 'Solve 5 puzzles in a row without mistakes', icon: '🔥', category: 'puzzle' },
    puzzle_master: { title: 'Cryptic Master', desc: 'Solve 25 puzzles total', icon: '🎓', category: 'puzzle' },

    // Fishing
    first_fish: { title: 'Gone Fishing', desc: 'Catch your first fish', icon: '🐟', category: 'fishing' },
    big_catch: { title: 'Big Catch', desc: 'Catch a fish over 5 lbs', icon: '🐋', category: 'fishing' },
    legendary_catch: { title: 'Legendary Angler', desc: 'Catch a legendary fish', icon: '👑', category: 'fishing' },
    fish_collection: { title: 'Ichthyologist', desc: 'Catch 5 unique fish species', icon: '🏅', category: 'fishing' },
    fish_complete: { title: 'The Full Shoal', desc: 'Catch every species in the pond', icon: '🎣', category: 'fishing' },

    // House
    decorator: { title: 'Interior Designer', desc: 'Place 5 items in your house', icon: '🏠', category: 'house' },
    dream_home: { title: 'Dream Home', desc: 'Place 15 items in your house', icon: '🏡', category: 'house' },

    // Story Trophies
    dragon_tamer: { title: 'Worth the Hoard', desc: 'Complete Liam\'s Lair story', icon: '🐉', category: 'story' },
    sky_hunter: { title: 'Ship\'s Log', desc: 'Complete Simon\'s Skyship story', icon: '🔭', category: 'story' },
    moonwalker: { title: 'Moonwalker', desc: 'Complete The Moon story', icon: '🌙', category: 'story' },

    // The wreck, the room under the fountain, and what came of both.
    //
    // Named for the chair Canon keeps beside him rather than for the errand,
    // because the errand is not the thing that happened.
    // The badge KEEPS THE SPOON. A reward that is only a picture of a reward
    // teaches a player the next one will be too: Club Penguin sold puffle hats
    // for 200 coins, they did nothing, and nobody remembers them.
    second_chair: { title: 'The Second Chair', desc: 'Bring something back, and the Sounding Spoon is yours to keep', icon: '🪑', category: 'story' },
    the_manifest: { title: 'What a Crossing Sheds', desc: 'Recover all five artifacts', icon: '🧭', category: 'story' },
    // The dock keeper's suit, whole again after years in three places.
    suited: { title: 'Sound, and Complete', desc: 'Put the diving suit back together', icon: '🪔', category: 'story' },
    // Pets. Adopting one at all is the milestone; the full five is the shelf.
    first_pet: { title: 'Followed You Out', desc: 'Take a creature home', icon: '🐾', category: 'house' },
    full_menagerie: { title: 'A Full House', desc: 'All five creatures living at the cottage', icon: '🏘️', category: 'house' },

    // Social
    first_share: { title: 'Social Butterfly', desc: 'Share your progress for the first time', icon: '🦋', category: 'social' },

    // Terminal
    code_breaker: { title: 'Code Breaker', desc: 'Enter your first terminal code', icon: '💻', category: 'terminal' },
    master_hacker: { title: 'Terminal Velocity', desc: 'Enter 5 terminal codes', icon: '🖥️', category: 'terminal' },

    // Meta
    completionist: { title: 'Completionist', desc: 'Earn all other achievements', icon: '✨', category: 'meta' }
  };

  let unlocked = [];
  let puzzleStreak = 0;
  let totalPuzzlesSolved = 0;

  function init() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        unlocked = saved.unlocked || [];
        puzzleStreak = saved.puzzleStreak || 0;
        totalPuzzlesSolved = saved.totalPuzzlesSolved || 0;
      }
    } catch {}
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        unlocked, puzzleStreak, totalPuzzlesSolved
      }));
    } catch {}
    // Mirror to the cloud when signed in. Optional-chained because BCSync only
    // exists once the shared auth modules load — guests and offline play must
    // never notice this line at all.
    window.BCSync?.schedulePush('world');
  }

  function unlock(id) {
    if (unlocked.includes(id) || !ACHIEVEMENTS[id]) return false;
    unlocked.push(id);
    save();

    // Show notification
    showAchievementNotification(ACHIEVEMENTS[id]);

    // Track
    if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackAchievement(id);
    if (typeof BCWAudio !== 'undefined') BCWAudio.playSuccess();

    // Check for completionist
    const nonMeta = Object.keys(ACHIEVEMENTS).filter(k => k !== 'completionist');
    if (nonMeta.every(k => unlocked.includes(k))) {
      unlock('completionist');
    }

    return true;
  }

  function showAchievementNotification(achievement) {
    const notif = document.createElement('div');
    notif.className = 'achievement-notif';
    notif.innerHTML = `
      <div class="achievement-notif-icon">${achievement.icon}</div>
      <div class="achievement-notif-text">
        <div class="achievement-notif-title">Achievement Unlocked!</div>
        <div class="achievement-notif-name">${achievement.title}</div>
        <div class="achievement-notif-desc">${achievement.desc}</div>
      </div>
    `;
    document.body.appendChild(notif);

    // Animate in
    requestAnimationFrame(() => notif.classList.add('show'));

    // Remove after delay
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 500);
    }, 4000);
  }

  // ─── Check helpers (called from game events) ───

  function checkExploration(unlockedLocations) {
    if (unlockedLocations.length >= 5) unlock('explorer');
    const mainLocations = ['docks', 'forest', 'cafe', 'town', 'adventure', 'library', 'workshop', 'beach', 'cove', 'observatory'];
    if (mainLocations.every(l => unlockedLocations.includes(l))) unlock('cartographer');
    const secrets = ['house', 'moon', 'lair', 'airship', 'pond'];
    if (secrets.some(l => unlockedLocations.includes(l))) unlock('secret_finder');
    if (secrets.every(l => unlockedLocations.includes(l))) unlock('all_secrets');
  }

  function checkStoryComplete(completedStories) {
    if (completedStories.length >= 1) unlock('first_story');
    const allStoryIds = ['docks', 'forest', 'cafe', 'town', 'adventure', 'library', 'workshop', 'beach', 'cove'];
    if (allStoryIds.every(s => completedStories.includes(s))) unlock('all_stories');
    // Story trophy achievements
    if (completedStories.includes('lair')) unlock('dragon_tamer');
    if (completedStories.includes('airship')) unlock('sky_hunter');
    if (completedStories.includes('moon')) unlock('moonwalker');
  }

  function checkPuzzleSolved(firstTry) {
    totalPuzzlesSolved++;
    puzzleStreak++;
    unlock('first_puzzle');
    if (firstTry) unlock('no_hints');
    if (puzzleStreak >= 5) unlock('puzzle_streak_5');
    if (totalPuzzlesSolved >= 25) unlock('puzzle_master');
    save();
  }

  function checkPuzzleFailed() {
    puzzleStreak = 0;
    save();
  }

  function checkFishing(fishData) {
    if (fishData.caught) unlock('first_fish');
    if (fishData.weight > 5) unlock('big_catch');
    if (fishData.rarity === 'legendary') unlock('legendary_catch');
    if (fishData.uniqueSpecies >= 5) unlock('fish_collection');
    // Every species in the table. Was unreachable: the old bar was 10 and
    // there are 9 fish, so the achievement could never fire.
    if (fishData.totalSpecies && fishData.uniqueSpecies >= fishData.totalSpecies) unlock('fish_complete');
  }

  // Three pieces from three places, and a suit that works again.
  function checkSuit(have, total) {
    if (total && have >= total) unlock('suited');
  }

  // Canon's errands. The first is the badge; the fifth is the manifest.
  function checkQuest(recovered, total) {
    if (recovered >= 1) unlock('second_chair');
    if (total && recovered >= total) unlock('the_manifest');
  }

  // Creatures at the cottage.
  function checkPets(adopted, total) {
    if (adopted >= 1) unlock('first_pet');
    if (total && adopted >= total) unlock('full_menagerie');
  }

  function checkHouseItems(count) {
    if (count >= 5) unlock('decorator');
    if (count >= 15) unlock('dream_home');
  }

  function checkTerminalCodes(count) {
    if (count >= 1) unlock('code_breaker');
    if (count >= 5) unlock('master_hacker');
  }

  function checkIntroComplete() {
    unlock('first_steps');
  }

  function checkShare() {
    unlock('first_share');
  }

  // Get all achievements with unlock state
  function getAll() {
    return Object.entries(ACHIEVEMENTS).map(([id, a]) => ({
      id,
      ...a,
      unlocked: unlocked.includes(id)
    }));
  }

  function getProgress() {
    return {
      unlocked: unlocked.length,
      total: Object.keys(ACHIEVEMENTS).length,
      percent: Math.round((unlocked.length / Object.keys(ACHIEVEMENTS).length) * 100)
    };
  }

  return {
    init,
    unlock,
    checkExploration,
    checkStoryComplete,
    checkPuzzleSolved,
    checkPuzzleFailed,
    checkFishing,
    checkHouseItems,
    checkQuest,
    checkPets,
    checkSuit,
    checkTerminalCodes,
    checkIntroComplete,
    checkShare,
    getAll,
    getProgress
  };
})();
