// ═══════════════════════════════════
//  TUTORIAL / ONBOARDING - Bit Cryptic World
//  Guided first-time user experience
// ═══════════════════════════════════

const BCWTutorial = (() => {
  const STORAGE_KEY = 'bcw_tutorial_complete';
  let currentStep = 0;
  let overlay = null;
  let isActive = false;

  const STEPS = [
    {
      target: null,
      title: 'Welcome to Bit Cryptic World!',
      text: 'This is an island full of word puzzles, hidden secrets, and adventures. Let me show you around!',
      position: 'center'
    },
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
    },
    {
      target: null,
      title: 'Ready to Explore!',
      text: 'Click on glowing locations to explore them. Solve puzzles to unlock new areas. Your journey begins at the Decoder Docks!',
      position: 'center'
    }
  ];

  function init() {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'true') return;
    } catch {}

    // Wait for loading screen to finish
    const checkLoading = setInterval(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen && loadingScreen.classList.contains('hidden')) {
        clearInterval(checkLoading);
        // Small delay after loading
        setTimeout(start, 1000);
      }
    }, 500);
  }

  function start() {
    if (isActive) return;
    isActive = true;
    currentStep = 0;

    // Create overlay
    overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.className = 'tutorial-overlay';
    document.body.appendChild(overlay);

    showStep();
  }

  function showStep() {
    if (currentStep >= STEPS.length) {
      complete();
      return;
    }

    const step = STEPS[currentStep];

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
        <div class="tutorial-dots">${STEPS.map((_, i) =>
          `<span class="tutorial-dot ${i === currentStep ? 'active' : i < currentStep ? 'done' : ''}"></span>`
        ).join('')}</div>
        <div class="tutorial-btns">
          <button class="tutorial-skip" onclick="BCWTutorial.skip()">Skip</button>
          <button class="tutorial-next" onclick="BCWTutorial.next()">${currentStep === STEPS.length - 1 ? 'Start Playing!' : 'Next'}</button>
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
    try { localStorage.setItem(STORAGE_KEY, 'true'); } catch {}
    if (overlay) {
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 500);
      overlay = null;
    }
  }

  function reset() {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  return {
    init,
    start,
    next,
    skip,
    reset
  };
})();
