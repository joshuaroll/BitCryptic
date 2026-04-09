// ═══════════════════════════════════
//  HINT SYSTEM - Bit Cryptic World
//  Progressive hints for stuck players
// ═══════════════════════════════════

const BCWHints = (() => {
  let hintTimers = {};
  let hintShown = {};

  // Default hint escalation: show first hint after 30s, second after 60s, answer after 90s
  const HINT_DELAYS = {
    easy: [15000, 30000, 45000],
    normal: [30000, 60000, 90000],
    hard: [60000, 120000, 180000]
  };

  function getDifficulty() {
    return (typeof BCWSettings !== 'undefined') ? BCWSettings.getDifficulty() : 'normal';
  }

  function startHintTimer(puzzleId, hints, onShowHint) {
    clearHintTimer(puzzleId);
    hintShown[puzzleId] = 0;

    const delays = HINT_DELAYS[getDifficulty()];

    delays.forEach((delay, index) => {
      if (index < hints.length) {
        const timerId = setTimeout(() => {
          hintShown[puzzleId] = index + 1;
          if (onShowHint) onShowHint(index, hints[index]);
          if (typeof BCWAnalytics !== 'undefined') {
            BCWAnalytics.trackPuzzleHintUsed(puzzleId, index);
          }
        }, delay);

        if (!hintTimers[puzzleId]) hintTimers[puzzleId] = [];
        hintTimers[puzzleId].push(timerId);
      }
    });
  }

  function clearHintTimer(puzzleId) {
    if (hintTimers[puzzleId]) {
      hintTimers[puzzleId].forEach(t => clearTimeout(t));
      delete hintTimers[puzzleId];
    }
  }

  function clearAllTimers() {
    Object.keys(hintTimers).forEach(clearHintTimer);
  }

  // Show a hint button that reveals on click
  function createHintButton(hints, container) {
    const difficulty = getDifficulty();
    if (difficulty === 'hard' && hints.length === 0) return;

    let currentHint = 0;

    const hintBtn = document.createElement('button');
    hintBtn.className = 'hint-btn';
    hintBtn.textContent = 'Need a hint?';
    hintBtn.onclick = () => {
      if (currentHint < hints.length) {
        showHintInContainer(hints[currentHint], container);
        currentHint++;
        hintBtn.textContent = currentHint < hints.length ? 'Another hint?' : 'No more hints';
        if (currentHint >= hints.length) hintBtn.disabled = true;

        if (typeof BCWAnalytics !== 'undefined') {
          BCWAnalytics.trackPuzzleHintUsed('manual', currentHint - 1);
        }
        if (typeof BCWAudio !== 'undefined') BCWAudio.playClick();
      }
    };

    // Delay showing the hint button based on difficulty
    const showDelay = { easy: 5000, normal: 15000, hard: 30000 }[difficulty];
    hintBtn.style.opacity = '0';
    hintBtn.style.transition = 'opacity 0.5s ease';
    container.appendChild(hintBtn);

    setTimeout(() => {
      hintBtn.style.opacity = '1';
    }, showDelay);

    return hintBtn;
  }

  function showHintInContainer(hintText, container) {
    const existing = container.querySelector('.hint-text');
    if (existing) existing.remove();

    const hintEl = document.createElement('div');
    hintEl.className = 'hint-text';
    hintEl.textContent = hintText;
    hintEl.style.animation = 'hintFadeIn 0.5s ease forwards';
    container.appendChild(hintEl);
  }

  return {
    startHintTimer,
    clearHintTimer,
    clearAllTimers,
    createHintButton
  };
})();
