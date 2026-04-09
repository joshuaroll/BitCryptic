// ═══════════════════════════════════
//  SAVE SYSTEM - Bit Cryptic World
//  Export/import, corruption recovery, robust persistence
// ═══════════════════════════════════

const BCWSave = (() => {
  const ALL_KEYS = [
    'bitcryptic_progress',
    'bitcryptic_unlocked_codes',
    'bitcryptic_house',
    'bitcryptic_fishing',
    'bcw_audio_settings',
    'bcw_accessibility',
    'bcw_settings',
    'bcw_achievements',
    'bcw_analytics',
    'bcw_tutorial_complete'
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
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!data._version) {
            alert('Invalid save file. Please select a valid Bit Cryptic World save file.');
            return;
          }

          if (!confirm('This will replace your current save data. Are you sure?')) return;

          // Restore all keys
          Object.keys(data).forEach(key => {
            if (key.startsWith('_')) return; // Skip metadata
            if (ALL_KEYS.includes(key)) {
              safeSet(key, data[key]);
            }
          });

          if (typeof BCWAccessibility !== 'undefined') {
            BCWAccessibility.announce('Save data imported successfully. Reloading...');
          }

          setTimeout(() => location.reload(), 500);
        } catch (err) {
          alert('Failed to import save file: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // Confirm and reset all progress
  function confirmReset() {
    if (!confirm('This will permanently delete ALL your progress, including unlocked locations, completed stories, house decorations, and fishing data. This cannot be undone.\n\nAre you sure?')) {
      return;
    }
    if (!confirm('Really? This is your last chance. All progress will be lost.')) {
      return;
    }

    ALL_KEYS.forEach(key => {
      try { localStorage.removeItem(key); } catch {}
    });

    location.reload();
  }

  // Check save data integrity on load
  function validateSave() {
    const progress = safeGet('bitcryptic_progress');
    if (progress) {
      // Ensure required fields exist
      if (!progress.version) progress.version = 1;
      if (!Array.isArray(progress.unlockedLocations)) progress.unlockedLocations = [];
      if (!Array.isArray(progress.completedStories)) progress.completedStories = [];
      if (typeof progress.introComplete !== 'boolean') progress.introComplete = false;

      // Remove duplicates
      progress.unlockedLocations = [...new Set(progress.unlockedLocations)];
      progress.completedStories = [...new Set(progress.completedStories)];

      safeSet('bitcryptic_progress', progress);
    }
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
