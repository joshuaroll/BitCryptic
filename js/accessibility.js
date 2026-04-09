// ═══════════════════════════════════
//  ACCESSIBILITY - Bit Cryptic World
//  ARIA labels, keyboard navigation, screen reader support
// ═══════════════════════════════════

const BCWAccessibility = (() => {
  let keyboardMode = false;
  let reducedMotion = false;
  let highContrast = false;
  let fontSize = 1;

  const STORAGE_KEY = 'bcw_accessibility';

  function init() {
    // Load saved settings
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        reducedMotion = saved.reducedMotion || false;
        highContrast = saved.highContrast || false;
        fontSize = saved.fontSize || 1;
      }
    } catch {}

    // Detect system preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reducedMotion = true;
    }

    // Detect keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        keyboardMode = true;
        document.body.classList.add('keyboard-nav');
      }
    });

    document.addEventListener('mousedown', () => {
      keyboardMode = false;
      document.body.classList.remove('keyboard-nav');
    });

    // Apply ARIA labels to existing elements
    applyAriaLabels();

    // Add keyboard shortcuts
    setupKeyboardShortcuts();

    // Apply saved settings
    applySettings();

    // Add skip-to-content link
    addSkipLink();

    // Create live region for announcements
    createLiveRegion();
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        reducedMotion, highContrast, fontSize
      }));
    } catch {}
  }

  function applySettings() {
    document.body.classList.toggle('reduced-motion', reducedMotion);
    document.body.classList.toggle('high-contrast', highContrast);
    document.documentElement.style.setProperty('--bcw-font-scale', fontSize);
  }

  function applyAriaLabels() {
    // Map container
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
      mapContainer.setAttribute('role', 'application');
      mapContainer.setAttribute('aria-label', 'Bit Cryptic World island map - drag to pan, scroll to zoom');
    }

    // Locations
    document.querySelectorAll('.location').forEach(loc => {
      loc.setAttribute('role', 'button');
      loc.setAttribute('tabindex', '0');
      const label = loc.querySelector('.loc-label');
      if (label) {
        loc.setAttribute('aria-label', label.textContent + ' - click to explore');
      }
      // Enter key activates location
      loc.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          loc.click();
        }
      });
    });

    // HUD buttons
    document.querySelectorAll('.hud-btn').forEach(btn => {
      btn.setAttribute('role', 'button');
      if (!btn.getAttribute('aria-label')) {
        btn.setAttribute('aria-label', btn.textContent.trim());
      }
    });

    // Toolbar buttons
    document.querySelectorAll('.toolbar-btn').forEach(btn => {
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');
      const tooltip = btn.querySelector('.tooltip-text');
      if (tooltip) {
        btn.setAttribute('aria-label', tooltip.textContent);
      }
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Story panel
    const storyPanel = document.getElementById('story-panel');
    if (storyPanel) {
      storyPanel.setAttribute('role', 'dialog');
      storyPanel.setAttribute('aria-label', 'Story');
      storyPanel.setAttribute('aria-modal', 'true');
    }

    // Detail panel
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
      detailPanel.setAttribute('role', 'dialog');
      detailPanel.setAttribute('aria-label', 'Location details');
      detailPanel.setAttribute('aria-modal', 'true');
    }

    // Terminal
    const terminalPanel = document.getElementById('terminal-panel');
    if (terminalPanel) {
      terminalPanel.setAttribute('role', 'dialog');
      terminalPanel.setAttribute('aria-label', 'Terminal - enter codes to unlock secrets');
    }

    // Minimap
    const minimap = document.querySelector('.minimap');
    if (minimap) {
      minimap.setAttribute('role', 'navigation');
      minimap.setAttribute('aria-label', 'Minimap showing current viewport position');
    }

    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.setAttribute('role', 'progressbar');
      loadingScreen.setAttribute('aria-label', 'Loading Bit Cryptic World');
    }
  }

  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // M = toggle minimap
      if (e.key === 'm' || e.key === 'M') {
        const minimap = document.querySelector('.minimap');
        if (minimap) {
          minimap.style.display = minimap.style.display === 'none' ? '' : 'none';
          announce(minimap.style.display === 'none' ? 'Minimap hidden' : 'Minimap shown');
        }
      }

      // ? = show keyboard shortcuts
      if (e.key === '?') {
        announce('Keyboard shortcuts: M for minimap, Escape to close panels, Tab to navigate, Enter to activate, ? for help');
      }

      // Arrow keys for map panning when no modal is open
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const anyPanelOpen = document.querySelector('.detail-panel.active, .story-panel.active, .terminal-panel.active');
        if (!anyPanelOpen && typeof panX !== 'undefined') {
          e.preventDefault();
          const step = 50;
          if (e.key === 'ArrowUp') panY += step;
          if (e.key === 'ArrowDown') panY -= step;
          if (e.key === 'ArrowLeft') panX += step;
          if (e.key === 'ArrowRight') panX -= step;
          if (typeof clampPan === 'function') clampPan();
          if (typeof updateTransform === 'function') updateTransform();
        }
      }

      // + / - for zoom
      if ((e.key === '+' || e.key === '=') && !e.ctrlKey) {
        const anyPanelOpen = document.querySelector('.detail-panel.active, .story-panel.active, .terminal-panel.active');
        if (!anyPanelOpen && typeof scale !== 'undefined') {
          e.preventDefault();
          scale = Math.min(2, scale * 1.1);
          if (typeof clampPan === 'function') clampPan();
          if (typeof updateTransform === 'function') updateTransform();
        }
      }
      if (e.key === '-' && !e.ctrlKey) {
        const anyPanelOpen = document.querySelector('.detail-panel.active, .story-panel.active, .terminal-panel.active');
        if (!anyPanelOpen && typeof scale !== 'undefined') {
          e.preventDefault();
          scale = Math.max(0.4, scale * 0.9);
          if (typeof clampPan === 'function') clampPan();
          if (typeof updateTransform === 'function') updateTransform();
        }
      }
    });
  }

  function addSkipLink() {
    const skip = document.createElement('a');
    skip.href = '#map-container';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to map';
    skip.setAttribute('tabindex', '0');
    document.body.insertBefore(skip, document.body.firstChild);
  }

  let liveRegion = null;
  function createLiveRegion() {
    liveRegion = document.createElement('div');
    liveRegion.id = 'bcw-announcer';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  function announce(message) {
    if (liveRegion) {
      liveRegion.textContent = '';
      // Force re-read by clearing then setting
      requestAnimationFrame(() => {
        liveRegion.textContent = message;
      });
    }
  }

  // ─── Settings Controls ───

  function setReducedMotion(val) {
    reducedMotion = val;
    applySettings();
    saveSettings();
  }

  function setHighContrast(val) {
    highContrast = val;
    applySettings();
    saveSettings();
  }

  function setFontSize(val) {
    fontSize = Math.max(0.8, Math.min(1.5, val));
    applySettings();
    saveSettings();
  }

  function getSettings() {
    return { reducedMotion, highContrast, fontSize, keyboardMode };
  }

  return {
    init,
    announce,
    setReducedMotion,
    setHighContrast,
    setFontSize,
    getSettings,
    applyAriaLabels
  };
})();
