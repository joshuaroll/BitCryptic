// ═══════════════════════════════════
//  SETTINGS PANEL - Bit Cryptic World
//  Volume, difficulty, accessibility toggles
// ═══════════════════════════════════

const BCWSettings = (() => {
  const STORAGE_KEY = 'bcw_settings';
  let settings = {
    difficulty: 'normal', // easy, normal, hard
  };

  function init() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) Object.assign(settings, saved);
    } catch {}

    createSettingsPanel();
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
  }

  function createSettingsPanel() {
    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'settings-overlay';
    overlay.className = 'settings-overlay';
    overlay.onclick = closeSettings;

    // Panel
    const panel = document.createElement('div');
    panel.id = 'settings-panel';
    panel.className = 'settings-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Settings');
    panel.innerHTML = `
      <div class="settings-header">
        <h2>Settings</h2>
        <button class="settings-close-btn" onclick="BCWSettings.close()" aria-label="Close settings">&times;</button>
      </div>
      <div class="settings-body">
        <div class="settings-section">
          <h3>Audio</h3>
          <div class="settings-row">
            <label>Sound Effects</label>
            <div class="settings-toggle-wrap">
              <input type="checkbox" id="setting-sfx" class="settings-toggle" ${BCWAudio.isEnabled() ? 'checked' : ''}>
              <label for="setting-sfx" class="settings-toggle-label"></label>
            </div>
          </div>
          <div class="settings-row">
            <label>Music Volume</label>
            <input type="range" id="setting-music-vol" class="settings-slider" min="0" max="100" value="${Math.round(BCWAudio.getMusicVolume() * 100)}">
          </div>
          <div class="settings-row">
            <label>SFX Volume</label>
            <input type="range" id="setting-sfx-vol" class="settings-slider" min="0" max="100" value="${Math.round(BCWAudio.getSfxVolume() * 100)}">
          </div>
        </div>

        <div class="settings-section">
          <h3>Difficulty</h3>
          <div class="settings-row">
            <label>Puzzle Difficulty</label>
            <select id="setting-difficulty" class="settings-select">
              <option value="easy" ${settings.difficulty === 'easy' ? 'selected' : ''}>Easy (extra hints)</option>
              <option value="normal" ${settings.difficulty === 'normal' ? 'selected' : ''}>Normal</option>
              <option value="hard" ${settings.difficulty === 'hard' ? 'selected' : ''}>Hard (fewer hints)</option>
            </select>
          </div>
        </div>

        <div class="settings-section">
          <h3>Accessibility</h3>
          <div class="settings-row">
            <label>Reduced Motion</label>
            <div class="settings-toggle-wrap">
              <input type="checkbox" id="setting-reduced-motion" class="settings-toggle" ${BCWAccessibility.getSettings().reducedMotion ? 'checked' : ''}>
              <label for="setting-reduced-motion" class="settings-toggle-label"></label>
            </div>
          </div>
          <div class="settings-row">
            <label>High Contrast</label>
            <div class="settings-toggle-wrap">
              <input type="checkbox" id="setting-high-contrast" class="settings-toggle" ${BCWAccessibility.getSettings().highContrast ? 'checked' : ''}>
              <label for="setting-high-contrast" class="settings-toggle-label"></label>
            </div>
          </div>
          <div class="settings-row">
            <label>Font Size</label>
            <input type="range" id="setting-font-size" class="settings-slider" min="80" max="150" value="${Math.round(BCWAccessibility.getSettings().fontSize * 100)}">
          </div>
        </div>

        <div class="settings-section">
          <h3>Save Data</h3>
          <div class="settings-row settings-row-btns">
            <button class="settings-btn" onclick="BCWSave.exportSave()">Export Save</button>
            <button class="settings-btn" onclick="BCWSave.importSave()">Import Save</button>
            <button class="settings-btn settings-btn-danger" onclick="BCWSave.confirmReset()">Reset All Data</button>
          </div>
        </div>

        <div class="settings-section">
          <h3>Stats</h3>
          <div id="settings-stats" class="settings-stats"></div>
        </div>

        <div class="settings-section">
          <h3>Keyboard Shortcuts</h3>
          <div class="settings-shortcuts">
            <div><kbd>Esc</kbd> Close panels / Open debug</div>
            <div><kbd>M</kbd> Toggle minimap</div>
            <div><kbd>Arrow Keys</kbd> Pan map</div>
            <div><kbd>+</kbd> / <kbd>-</kbd> Zoom in/out</div>
            <div><kbd>Tab</kbd> Navigate elements</div>
            <div><kbd>?</kbd> Keyboard help</div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(panel);

    // Wire up event listeners
    document.getElementById('setting-sfx').addEventListener('change', (e) => {
      BCWAudio.setEnabled(e.target.checked);
      if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackSettingsChange('audio', e.target.checked);
    });

    document.getElementById('setting-music-vol').addEventListener('input', (e) => {
      BCWAudio.setMusicVolume(e.target.value / 100);
    });

    document.getElementById('setting-sfx-vol').addEventListener('input', (e) => {
      BCWAudio.setSfxVolume(e.target.value / 100);
    });

    document.getElementById('setting-difficulty').addEventListener('change', (e) => {
      settings.difficulty = e.target.value;
      save();
      if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackSettingsChange('difficulty', e.target.value);
    });

    document.getElementById('setting-reduced-motion').addEventListener('change', (e) => {
      BCWAccessibility.setReducedMotion(e.target.checked);
    });

    document.getElementById('setting-high-contrast').addEventListener('change', (e) => {
      BCWAccessibility.setHighContrast(e.target.checked);
    });

    document.getElementById('setting-font-size').addEventListener('input', (e) => {
      BCWAccessibility.setFontSize(e.target.value / 100);
    });
  }

  function openSettings() {
    document.getElementById('settings-overlay').classList.add('active');
    document.getElementById('settings-panel').classList.add('active');
    if (typeof BCWAudio !== 'undefined') BCWAudio.playMenuOpen();

    // Update stats
    const statsEl = document.getElementById('settings-stats');
    if (statsEl && typeof BCWAnalytics !== 'undefined') {
      const summary = BCWAnalytics.getSummary();
      if (summary) {
        statsEl.innerHTML = `
          <div class="stat-row"><span>Sessions</span><span>${summary.totalSessions}</span></div>
          <div class="stat-row"><span>Locations Visited</span><span>${summary.locationsVisited}</span></div>
          <div class="stat-row"><span>Stories Completed</span><span>${summary.storiesCompleted}</span></div>
          <div class="stat-row"><span>Puzzle Accuracy</span><span>${summary.puzzleAccuracy}%</span></div>
          <div class="stat-row"><span>Total Play Time</span><span>${formatTime(summary.totalPlayTime)}</span></div>
        `;
      }
    }
  }

  function closeSettings() {
    document.getElementById('settings-overlay').classList.remove('active');
    document.getElementById('settings-panel').classList.remove('active');
    if (typeof BCWAudio !== 'undefined') BCWAudio.playMenuClose();
  }

  function formatTime(seconds) {
    if (seconds < 60) return seconds + 's';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm';
    return Math.floor(seconds / 3600) + 'h ' + Math.floor((seconds % 3600) / 60) + 'm';
  }

  function getDifficulty() { return settings.difficulty; }

  return {
    init,
    open: openSettings,
    close: closeSettings,
    getDifficulty
  };
})();
