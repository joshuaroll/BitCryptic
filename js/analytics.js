// ═══════════════════════════════════
//  ANALYTICS ENGINE - Bit Cryptic World
//  Tracks user flows, puzzle completion, drop-off points
//  Privacy-first: all data is anonymous, no PII collected
// ═══════════════════════════════════

const BCWAnalytics = (() => {
  const STORAGE_KEY = 'bcw_analytics';
  const SESSION_KEY = 'bcw_session';
  const MAX_EVENTS = 500;

  let sessionId = null;
  let sessionStart = null;
  let eventQueue = [];
  let flushTimer = null;

  function init() {
    sessionId = generateSessionId();
    sessionStart = Date.now();

    // Track session start
    track('session_start', {
      referrer: document.referrer || 'direct',
      screen: `${window.innerWidth}x${window.innerHeight}`,
      touch: 'ontouchstart' in window,
      userAgent: navigator.userAgent.substring(0, 100)
    });

    // Track page visibility changes (detect abandonment)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        track('session_blur', { duration: Math.round((Date.now() - sessionStart) / 1000) });
        flushEvents();
      } else {
        track('session_focus');
      }
    });

    // Track session end
    window.addEventListener('beforeunload', () => {
      track('session_end', {
        duration: Math.round((Date.now() - sessionStart) / 1000),
        eventsCount: eventQueue.length
      });
      flushEvents();
    });

    // Auto-flush every 30 seconds
    flushTimer = setInterval(flushEvents, 30000);
  }

  function generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }

  function track(eventName, data = {}) {
    const event = {
      event: eventName,
      ts: Date.now(),
      sid: sessionId,
      ...data
    };
    eventQueue.push(event);

    // Keep queue bounded
    if (eventQueue.length > MAX_EVENTS) {
      eventQueue = eventQueue.slice(-MAX_EVENTS);
    }
  }

  // Specific tracking helpers
  function trackLocationVisit(locationId) {
    track('location_visit', { location: locationId });
  }

  function trackStoryStart(storyId) {
    track('story_start', { story: storyId });
  }

  function trackStoryStep(storyId, stepIndex, stepType) {
    track('story_step', { story: storyId, step: stepIndex, type: stepType });
  }

  function trackStoryComplete(storyId) {
    track('story_complete', { story: storyId });
  }

  function trackPuzzleAttempt(storyId, stepIndex, correct, answer) {
    track('puzzle_attempt', {
      story: storyId,
      step: stepIndex,
      correct,
      answer: correct ? answer : '[redacted]'
    });
  }

  function trackPuzzleHintUsed(storyId, stepIndex) {
    track('puzzle_hint', { story: storyId, step: stepIndex });
  }

  function trackUnlock(locationId, method) {
    track('location_unlock', { location: locationId, method: method || 'story' });
  }

  function trackTerminalCode(code, accepted) {
    track('terminal_code', { code, accepted });
  }

  function trackMinigameStart(game) {
    track('minigame_start', { game });
  }

  function trackMinigameAction(game, action, data = {}) {
    track('minigame_action', { game, action, ...data });
  }

  function trackShare(platform, content) {
    track('share', { platform, content });
  }

  function trackSettingsChange(setting, value) {
    track('settings_change', { setting, value });
  }

  function trackError(error, context) {
    track('error', { error: String(error).substring(0, 200), context });
  }

  function trackTutorialStep(step, skipped) {
    track('tutorial_step', { step, skipped: !!skipped });
  }

  function trackAchievement(achievementId) {
    track('achievement', { id: achievementId });
  }

  // Persist analytics to localStorage for later review/export
  function flushEvents() {
    if (eventQueue.length === 0) return;

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const combined = existing.concat(eventQueue);
      // Keep last 2000 events
      const trimmed = combined.slice(-2000);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
      eventQueue = [];
    } catch (e) {
      // Storage full or unavailable - just keep in memory
    }
  }

  // Get analytics summary for debug/settings panel
  function getSummary() {
    try {
      const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const sessions = new Set(events.map(e => e.sid)).size;
      const puzzleAttempts = events.filter(e => e.event === 'puzzle_attempt');
      const correct = puzzleAttempts.filter(e => e.correct);
      const stories = events.filter(e => e.event === 'story_complete');
      const locations = events.filter(e => e.event === 'location_visit');

      return {
        totalSessions: sessions,
        totalEvents: events.length,
        puzzleAttempts: puzzleAttempts.length,
        puzzleAccuracy: puzzleAttempts.length > 0
          ? Math.round((correct.length / puzzleAttempts.length) * 100)
          : 0,
        storiesCompleted: new Set(stories.map(e => e.story)).size,
        locationsVisited: new Set(locations.map(e => e.location)).size,
        totalPlayTime: events
          .filter(e => e.event === 'session_end')
          .reduce((sum, e) => sum + (e.duration || 0), 0)
      };
    } catch {
      return null;
    }
  }

  // Export analytics data as JSON
  function exportData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function clearData() {
    localStorage.removeItem(STORAGE_KEY);
    eventQueue = [];
  }

  return {
    init,
    track,
    trackLocationVisit,
    trackStoryStart,
    trackStoryStep,
    trackStoryComplete,
    trackPuzzleAttempt,
    trackPuzzleHintUsed,
    trackUnlock,
    trackTerminalCode,
    trackMinigameStart,
    trackMinigameAction,
    trackShare,
    trackSettingsChange,
    trackError,
    trackTutorialStep,
    trackAchievement,
    getSummary,
    exportData,
    clearData
  };
})();
