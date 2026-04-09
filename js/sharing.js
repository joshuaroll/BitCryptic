// ═══════════════════════════════════
//  SOCIAL SHARING - Bit Cryptic World
//  Share achievements, puzzle completions, challenge friends
// ═══════════════════════════════════

const BCWSharing = (() => {
  const GAME_URL = 'https://bit-cryptic-world.vercel.app';

  function shareAchievement(title, description) {
    const text = `${title} - ${description}\n\nPlay Bit Cryptic World!`;
    share(text, 'achievement');
  }

  function shareStoryComplete(storyTitle) {
    const text = `I just completed "${storyTitle}" in Bit Cryptic World! Can you solve the puzzles?`;
    share(text, 'story');
  }

  function sharePuzzleSolved(puzzleHint) {
    const text = `I cracked this cryptic clue in Bit Cryptic World: "${puzzleHint}" - Can you solve it?`;
    share(text, 'puzzle');
  }

  function shareFishCatch(fishName, weight) {
    const text = `I caught a ${weight}lb ${fishName} at the Fishing Pond in Bit Cryptic World!`;
    share(text, 'fishing');
  }

  function shareProgress() {
    try {
      const progress = JSON.parse(localStorage.getItem('bitcryptic_progress') || '{}');
      const locations = (progress.unlockedLocations || []).length;
      const stories = (progress.completedStories || []).length;
      const text = `I've explored ${locations} locations and completed ${stories} stories in Bit Cryptic World! How far can you get?`;
      share(text, 'progress');
    } catch {
      share('Come explore Bit Cryptic World - a puzzle adventure island!', 'progress');
    }
  }

  function share(text, contentType) {
    if (typeof BCWAnalytics !== 'undefined') {
      BCWAnalytics.trackShare('native_or_clipboard', contentType);
    }

    // Try native Web Share API first (mobile)
    if (navigator.share) {
      navigator.share({
        title: 'Bit Cryptic World',
        text: text,
        url: GAME_URL
      }).catch(() => {
        // User cancelled or not supported, fall back to modal
        showShareModal(text);
      });
      return;
    }

    // Fall back to share modal
    showShareModal(text);
  }

  function showShareModal(text) {
    // Remove existing modal if any
    const existing = document.getElementById('share-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'share-modal-overlay';
    overlay.className = 'share-overlay active';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(GAME_URL);

    overlay.innerHTML = `
      <div class="share-modal" role="dialog" aria-label="Share">
        <button class="share-close" onclick="this.closest('.share-overlay').remove()" aria-label="Close">&times;</button>
        <h3>Share</h3>
        <div class="share-preview">${escapeHtml(text)}</div>
        <div class="share-buttons">
          <a class="share-btn share-btn-twitter" href="https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}" target="_blank" rel="noopener" onclick="this.closest('.share-overlay').remove()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            X / Twitter
          </a>
          <a class="share-btn share-btn-reddit" href="https://reddit.com/submit?url=${encodedUrl}&title=${encodedText}" target="_blank" rel="noopener" onclick="this.closest('.share-overlay').remove()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            Reddit
          </a>
          <button class="share-btn share-btn-copy" onclick="BCWSharing.copyToClipboard('${escapeAttr(text + '\\n' + GAME_URL)}', this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy Link
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    if (typeof BCWAudio !== 'undefined') BCWAudio.playMenuOpen();
  }

  function copyToClipboard(text, btnEl) {
    navigator.clipboard.writeText(text.replace(/\\n/g, '\n')).then(() => {
      if (btnEl) {
        const original = btnEl.innerHTML;
        btnEl.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Copied!';
        setTimeout(() => { btnEl.innerHTML = original; }, 2000);
      }
      if (typeof BCWAccessibility !== 'undefined') {
        BCWAccessibility.announce('Link copied to clipboard');
      }
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text.replace(/\\n/g, '\n');
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      if (btnEl) btnEl.textContent = 'Copied!';
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  return {
    shareAchievement,
    shareStoryComplete,
    sharePuzzleSolved,
    shareFishCatch,
    shareProgress,
    share,
    copyToClipboard
  };
})();
