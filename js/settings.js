// ═══════════════════════════════════
//  SETTINGS PANEL - Bit Cryptic World
//  Volume, difficulty, accessibility toggles
// ═══════════════════════════════════

const BCWSettings = (() => {
  const STORAGE_KEY = 'bcw_settings';
  let settings = {
    difficulty: 'normal', // easy, normal, hard
    tutorialsEnabled: true, // show technique tutorials at locations
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
          <div class="settings-row">
            <label>Text Sound Effects</label>
            <div class="settings-toggle-wrap">
              <input type="checkbox" id="setting-text-sfx" class="settings-toggle" ${BCWAudio.isTextSfxEnabled() ? 'checked' : ''}>
              <label for="setting-text-sfx" class="settings-toggle-label"></label>
            </div>
          </div>
          <div class="settings-row">
            <label>Text Sound Style</label>
            <div style="display:flex;gap:6px;align-items:center;">
              <select id="setting-text-sound-style" class="settings-select" style="flex:1;">
                <option value="A" ${BCWAudio.getTextSoundStyle() === 'A' ? 'selected' : ''}>Soft Bubble</option>
                <option value="B" ${BCWAudio.getTextSoundStyle() === 'B' ? 'selected' : ''}>Warm Pluck</option>
                <option value="C" ${BCWAudio.getTextSoundStyle() === 'C' ? 'selected' : ''}>Gentle Chime</option>
              </select>
              <button class="settings-btn" style="padding:6px 12px;font-size:0.75rem;" onclick="BCWAudio.previewTextSound()">Preview</button>
            </div>
          </div>
          <div class="settings-row">
            <label>Text Sound Speed</label>
            <div style="display:flex;align-items:center;gap:6px;max-width:160px;">
              <span style="font-size:0.65rem;color:#999;">Slow</span>
              <input type="range" id="setting-text-sound-freq" class="settings-slider" min="2" max="8" step="1" value="${BCWAudio.getTextSoundFrequency()}" style="flex:1;">
              <span style="font-size:0.65rem;color:#999;">Fast</span>
            </div>
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
          <div class="settings-row">
            <label>Technique Tutorials</label>
            <input type="checkbox" id="setting-tutorials" ${settings.tutorialsEnabled ? 'checked' : ''} />
          </div>
          <div class="settings-row" style="opacity:0.6;font-size:0.85rem;">
            <label>Show cryptic clue technique tutorials at each location</label>
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
          <div class="settings-font-preview" id="settings-font-preview" style="font-size: ${BCWAccessibility.getSettings().fontSize}rem; color: rgba(255,255,255,0.6); padding: 6px 0; line-height: 1.5;">
            The quick brown fox jumps over the lazy dog.
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

    // Wire up event listeners (with null guards for robustness)
    function bindSetting(id, event, handler) {
      const el = document.getElementById(id);
      if (el) el.addEventListener(event, handler);
    }

    bindSetting('setting-sfx', 'change', (e) => {
      BCWAudio.setEnabled(e.target.checked);
      if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackSettingsChange('audio', e.target.checked);
    });

    bindSetting('setting-music-vol', 'input', (e) => {
      BCWAudio.setMusicVolume(e.target.value / 100);
    });

    bindSetting('setting-sfx-vol', 'input', (e) => {
      BCWAudio.setSfxVolume(e.target.value / 100);
    });

    bindSetting('setting-text-sfx', 'change', (e) => {
      BCWAudio.setTextSfxEnabled(e.target.checked);
      if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackSettingsChange('textSfx', e.target.checked);
    });

    bindSetting('setting-text-sound-style', 'change', (e) => {
      BCWAudio.setTextSoundStyle(e.target.value);
      BCWAudio.previewTextSound();
    });

    bindSetting('setting-text-sound-freq', 'input', (e) => {
      BCWAudio.setTextSoundFrequency(parseInt(e.target.value));
    });

    bindSetting('setting-text-sound-freq', 'change', (e) => {
      BCWAudio.previewTextSound();
    });

    bindSetting('setting-difficulty', 'change', (e) => {
      settings.difficulty = e.target.value;
      save();
      if (typeof BCWAnalytics !== 'undefined') BCWAnalytics.trackSettingsChange('difficulty', e.target.value);
    });

    bindSetting('setting-tutorials', 'change', (e) => {
      settings.tutorialsEnabled = e.target.checked;
      save();
    });

    bindSetting('setting-reduced-motion', 'change', (e) => {
      BCWAccessibility.setReducedMotion(e.target.checked);
    });

    bindSetting('setting-high-contrast', 'change', (e) => {
      BCWAccessibility.setHighContrast(e.target.checked);
    });

    bindSetting('setting-font-size', 'input', (e) => {
      BCWAccessibility.setFontSize(e.target.value / 100);
      const preview = document.getElementById('settings-font-preview');
      if (preview) preview.style.fontSize = (e.target.value / 100) + 'rem';
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
  function areTutorialsEnabled() { return settings.tutorialsEnabled; }

  return {
    init,
    open: openSettings,
    close: closeSettings,
    getDifficulty,
    areTutorialsEnabled
  };
})();
