// ═══════════════════════════════════
//  TUTORIAL / ONBOARDING - Bit Cryptic World
//  Guided first-time user experience
// ═══════════════════════════════════

const BCWTutorial = (() => {
  const LEGACY_KEY = 'bcw_tutorial_complete';
  const P1_KEY = 'bcw_tutorial_p1';
  const P2_KEY = 'bcw_tutorial_p2';
  let currentStep = 0;
  let overlay = null;
  let isActive = false;
  let activeSteps = [];
  let activeKey = null;

  // Phase 1 — right after the intro story: orient, point at the Docks.
  // Map movement is NOT taught yet; that comes after the first solve.
  const PHASE1_STEPS = [
    {
      target: null,
      title: 'Welcome to Bit Cryptic World',
      text: 'An island built out of word puzzles, with a few things it keeps to itself. Let me show you around.',
      position: 'center'
    },
    {
      target: null,
      title: 'Ready to Explore!',
      text: 'Click on glowing locations to explore them. Solve puzzles to unlock new areas. Start at the Decoder Docks. The Dock Keeper is expecting you.',
      position: 'center'
    }
  ];

  // Phase 2 — after the first story completes and the map has grown:
  // now movement matters, so teach it.
  const PHASE2_STEPS = [
    {
      target: '#map-container',
      title: 'The Island Map',
      text: 'Drag to pan around the island, and scroll to zoom in and out. On mobile, pinch to zoom.',
      position: 'center'
    },
    {
      target: '.toolbar',
      title: 'Quick Travel',
      text: 'Use the toolbar to quickly jump to any location you\'ve unlocked.',
      position: 'top'
    },
    {
      target: '.minimap',
      title: 'Minimap',
      text: 'The minimap shows your current view on the island. Use it to orient yourself.',
      position: 'left'
    },
    {
      target: '.hud-controls',
      title: 'Controls',
      text: 'Access settings, your profile, and more from here. Press the gear icon for settings.',
      position: 'bottom'
    }
  ];

  function flagDone(key) {
    try { return localStorage.getItem(key) === 'true'; } catch { return false; }
  }

  function init() {
    // Legacy migration: old single-flag completions have seen everything
    try {
      if (localStorage.getItem(LEGACY_KEY) === 'true') {
        localStorage.setItem(P1_KEY, 'true');
        localStorage.setItem(P2_KEY, 'true');
        return;
      }
    } catch {}
    if (flagDone(P1_KEY)) return;

    // Wait for intro story to complete (not just loading screen)
    // The tutorial should show AFTER the player finishes washing ashore
    const checkReady = setInterval(() => {
      try {
        const progress = JSON.parse(localStorage.getItem('bitcryptic_progress') || '{}');
        if (progress.introComplete) {
          clearInterval(checkReady);
          // Delay so unlock animations finish first
          setTimeout(start, 2000);
        }
      } catch {}
    }, 1000);
  }

  function begin(steps, key) {
    if (isActive) return;
    isActive = true;
    currentStep = 0;
    activeSteps = steps;
    activeKey = key;

    // Create overlay
    overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.className = 'tutorial-overlay';
    document.body.appendChild(overlay);

    showStep();
  }

  function start() {
    if (flagDone(P1_KEY)) return;
    begin(PHASE1_STEPS, P1_KEY);
  }

  // Called after the first story's reveal sequence finishes
  function startPhase2() {
    if (flagDone(P2_KEY)) return;
    begin(PHASE2_STEPS, P2_KEY);
  }

  function showStep() {
    if (currentStep >= activeSteps.length) {
      complete();
      return;
    }

    const step = activeSteps[currentStep];

    // Skip steps whose target is hidden at this viewport (e.g. minimap on mobile)
    if (step.target) {
      const targetEl = document.querySelector(step.target);
      if (!targetEl || targetEl.offsetParent === null) {
        currentStep++;
        showStep();
        return;
      }
    }

    // Clear previous
    overlay.innerHTML = '';

    // Create spotlight if target exists
    if (step.target) {
      const targetEl = document.querySelector(step.target);
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        overlay.style.setProperty('--spot-x', rect.left + rect.width / 2 + 'px');
        overlay.style.setProperty('--spot-y', rect.top + rect.height / 2 + 'px');
        overlay.style.setProperty('--spot-w', rect.width + 40 + 'px');
        overlay.style.setProperty('--spot-h', rect.height + 40 + 'px');
        overlay.classList.add('has-spotlight');
      }
    } else {
      overlay.classList.remove('has-spotlight');
    }

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tutorial-tooltip';

    if (step.position === 'center') {
      tooltip.style.top = '50%';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translate(-50%, -50%)';
    } else if (step.target) {
      const targetEl = document.querySelector(step.target);
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        if (step.position === 'top') {
          tooltip.style.bottom = (window.innerHeight - rect.top + 20) + 'px';
          tooltip.style.left = '50%';
          tooltip.style.transform = 'translateX(-50%)';
        } else if (step.position === 'bottom') {
          tooltip.style.top = (rect.bottom + 20) + 'px';
          tooltip.style.left = '50%';
          tooltip.style.transform = 'translateX(-50%)';
        } else if (step.position === 'left') {
          tooltip.style.top = rect.top + 'px';
          tooltip.style.right = (window.innerWidth - rect.left + 20) + 'px';
        }
      }
    }

    tooltip.innerHTML = `
      <h3 class="tutorial-title">${step.title}</h3>
      <p class="tutorial-text">${step.text}</p>
      <div class="tutorial-footer">
        <div class="tutorial-dots">${activeSteps.map((_, i) =>
          `<span class="tutorial-dot ${i === currentStep ? 'active' : i < currentStep ? 'done' : ''}"></span>`
        ).join('')}</div>
        <div class="tutorial-btns">
          <button class="tutorial-skip" onclick="BCWTutorial.skip()">Skip</button>
          <button class="tutorial-next" onclick="BCWTutorial.next()">${currentStep === activeSteps.length - 1 ? (activeKey === P2_KEY ? 'Got it!' : 'Start Playing!') : 'Next'}</button>
        </div>
      </div>
    `;

    overlay.appendChild(tooltip);

    if (typeof BCWAnalytics !== 'undefined') {
      BCWAnalytics.trackTutorialStep(currentStep);
    }
  }

  function next() {
    currentStep++;
    if (typeof BCWAudio !== 'undefined') BCWAudio.playClick();
    showStep();
  }

  function skip() {
    if (typeof BCWAnalytics !== 'undefined') {
      BCWAnalytics.trackTutorialStep(currentStep, true);
    }
    complete();
  }

  function complete() {
    isActive = false;
    try { if (activeKey) localStorage.setItem(activeKey, 'true'); } catch {}
    if (overlay) {
      // Immediately stop blocking interaction
      overlay.style.pointerEvents = 'none';
      overlay.classList.add('fade-out');
      const ref = overlay;
      overlay = null;
      setTimeout(() => { try { ref.remove(); } catch {} }, 500);
    }
    // Safety: remove any lingering tutorial overlay
    const stale = document.getElementById('tutorial-overlay');
    if (stale) {
      stale.style.pointerEvents = 'none';
      stale.style.opacity = '0';
      setTimeout(() => { try { stale.remove(); } catch {} }, 100);
    }
  }

  function reset() {
    try {
      localStorage.removeItem(LEGACY_KEY);
      localStorage.removeItem(P1_KEY);
      localStorage.removeItem(P2_KEY);
    } catch {}
  }

  return {
    init,
    start,
    startPhase2,
    next,
    skip,
    reset
  };
})();
