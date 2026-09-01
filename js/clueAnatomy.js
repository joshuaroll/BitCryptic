// ═══════════════════════════════════
//  CLUE ANATOMY - Bit Cryptic World
//  Interactive per-word clue teaching. Wraps annotated clue text in spans;
//  clicking a word reveals its role (definition / indicator / fodder / link)
//  with a persistent color and ONE message. There is no second level: a word
//  that said one thing on the first click and something else on the second was
//  telling the player two stories about the same segment.
//
//  Data comes from CLUE_ANNOTATIONS (js/clueAnnotations.js). A clue with no
//  annotation entry renders exactly as before — no wrapping, zero risk.
//  Clue strings are never modified (clue-freeze law): the stored text is
//  located verbatim and only wrapped at render time.
// ═══════════════════════════════════

const BCWClueAnatomy = (() => {
  const TAUGHT_KEY = 'bcw_anatomy_taught';

  const ROLE_LABELS = {
    definition: 'DEFINITION',
    indicator: 'INDICATOR',
    fodder: 'FODDER',
    link: 'LINK WORD',
    double: 'DOUBLE DEFINITION'
  };

  // Fallback text, used only where a segment carries no `info` of its own.
  // Empty where the label already says everything: DEFINITION, INDICATOR (its
  // operation comes from the segment), LINK WORD and DOUBLE DEFINITION are
  // complete as labels, and repeating them back would be noise.
  const ROLE_BRIEF = {
    definition: '',
    indicator: '',
    fodder: 'The material the wordplay works on.',
    link: '',
    double: ''
  };

  // Build the wrapped clue HTML for a known annotation key.
  //
  // `interactive` false still produces the card and the clue, just without the
  // affordances: no .anatomy-word class, no button role, no tab stop. A player
  // who switched anatomy off gets a clue that plainly is not tappable, rather
  // than one that looks tappable and does nothing.
  function renderClue(clueKey, interactive) {
    const ann = (typeof CLUE_ANNOTATIONS !== 'undefined') ? CLUE_ANNOTATIONS[clueKey] : null;
    if (!ann) return null;
    if (interactive === undefined) interactive = true;
    let html = '';
    let cursor = 0;
    let ok = true;
    ann.segments.forEach((seg, i) => {
      const at = clueKey.indexOf(seg.text, cursor);
      if (at === -1) { ok = false; return; }
      html += escapeHtml(clueKey.slice(cursor, at));
      html += interactive
        ? '<span class="anatomy-word" data-seg="' + i + '" data-level="0" role="button" tabindex="0">' +
          escapeHtml(seg.text) + '</span>'
        : escapeHtml(seg.text);
      cursor = at + seg.text.length;
    });
    if (!ok) {
      console.warn('BCWClueAnatomy: segment mismatch for "' + clueKey + '"');
      return null;
    }
    html += escapeHtml(clueKey.slice(cursor));
    // The card is the unit a player reads: clue, explanation and (when the step
    // asks for one) the answer box all live inside it. showStoryControls moves
    // the input in here so the box visibly belongs to the clue above it.
    return '<div class="clue-card" data-clue-card>' +
      '<span class="clue-line" data-clue-key="' + escapeHtml(clueKey) + '">' + html + '</span>' +
      '</div>';
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // How a browser serialises TEXT CONTENT back out through innerHTML: & < >
  // become entities, but a double quote stays a literal quote. Used to build
  // the needle when searching already-rendered narrative HTML for a clue.
  function escapeTextForSearch(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Clue text is full of ( ) ? . — all regex metacharacters, so a key used as
  // a pattern must be escaped or it matches the wrong thing, or nothing.
  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Find an annotated clue inside already-rendered narrative HTML (the clue
  // sits between straight quotes inside step.text) and wrap it in place.
  //
  // THE CARD ALWAYS RENDERS. The anatomy setting governs CLICKABILITY only:
  // switching it off used to bail before any of this ran, so the clue lost its
  // box, its mono styling and the answer box that belongs to it, and the panel
  // looked like a different screen depending on a setting that was supposed to
  // be about tapping words. Off means the words are inert, nothing more.
  function annotate(containerEl) {
    if (!containerEl || typeof CLUE_ANNOTATIONS === 'undefined') return;
    if (containerEl.querySelector('.clue-line')) return; // already annotated
    const interactive = !(typeof BCWSettings !== 'undefined'
      && BCWSettings.isAnatomyEnabled && !BCWSettings.isAnatomyEnabled());
    // EVERY annotated clue in the beat, not just the first: a multi_puzzle step
    // shows three clues at once, and wrapping only one left the other two as
    // bare text in the same panel.
    let html = containerEl.innerHTML;
    const wrapped = [];
    for (const key in CLUE_ANNOTATIONS) {
      // innerHTML is SERIALISED markup, so a clue containing & or < appears
      // there escaped and a raw-key search would miss it. Quotes are NOT
      // escaped in text content (verified in-browser), so escaping them here
      // would break the delimiters instead of fixing anything.
      const quoted = '"' + escapeTextForSearch(key) + '"';
      if (html.indexOf(quoted) === -1) continue;
      const rendered = renderClue(key, interactive);
      if (!rendered) continue;
      // Swallow the <br>s that separated this clue from the text above it. The
      // card carries its own margin, and CSS can only drop the breaks AFTER an
      // element, so the leading pair is absorbed here instead. A multi_puzzle
      // stacks three cards, where that doubling pushed the input off-screen.
      // Replacement passed as a FUNCTION: a literal string would let a $ in the
      // rendered markup be read as a capture reference.
      html = html.replace(
        new RegExp('(?:\\s*<br\\s*/?>\\s*)*' + escapeRegExp(quoted)),
        () => rendered
      );
      wrapped.push(key);
    }
    if (!wrapped.length) return;
    containerEl.innerHTML = html;
    if (interactive) {
      wrapped.forEach(key => wireInteraction(containerEl, key));
      maybeTeach(containerEl);
    }
  }

  function wireInteraction(containerEl, clueKey) {
    // Scoped to THIS clue's own line. A multi_puzzle beat holds several cards,
    // so a bare querySelector would wire every clue to the first one's panel.
    const line = [...containerEl.querySelectorAll('.clue-line')]
      .find(el => el.dataset.clueKey === clueKey);
    if (!line) return;
    const ann = CLUE_ANNOTATIONS[clueKey];

    // One info line lives directly after the clue, inside its own card.
    const card = line.parentNode;
    let info = card.querySelector(':scope > .anatomy-info');
    if (!info) {
      info = document.createElement('div');
      info.className = 'anatomy-info';
      // No id: a multi_puzzle beat renders one panel per clue, and a repeated
      // id would be invalid HTML and would break anything selecting by it.
      info.setAttribute('aria-live', 'polite');
      card.insertBefore(info, line.nextSibling);
    }

    function activate(span) {
      const seg = ann.segments[parseInt(span.dataset.seg, 10)];
      if (!seg) return;
      span.dataset.level = 1;
      span.classList.add('revealed-' + seg.role);
      const label = ROLE_LABELS[seg.role] || seg.role.toUpperCase();
      info.className = 'anatomy-info anatomy-info--' + seg.role + ' visible';
      // ONE message per word. There is no second level: a word that said one
      // thing on the first click and something else on the second was telling
      // the player two different stories about the same segment.
      //
      // The segment's own `info` wins where it has one — that is the sentence
      // written for this specific word. Otherwise the role's brief, and where
      // the label already says everything (DEFINITION, LINK WORD) the label
      // alone is the message. The role name is printed once, here, so `info`
      // strings must never open by repeating it.
      const body = (seg.info && seg.info.trim()) || ROLE_BRIEF[seg.role] || '';
      info.innerHTML = '<b>' + label + '</b>' + (body ? ': ' + escapeHtml(body) : '');
      dismissTeach(containerEl);
      if (typeof BCWAudio !== 'undefined') BCWAudio.playClick();
      if (typeof BCWAnalytics !== 'undefined' && BCWAnalytics.trackEvent) {
        BCWAnalytics.trackEvent('anatomy_reveal', { role: seg.role, level: level });
      }
    }

    line.addEventListener('click', (e) => {
      const span = e.target.closest('.anatomy-word');
      if (!span) return;
      e.stopPropagation(); // don't trip the typewriter skip / panel handlers
      activate(span);
    });
    line.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const span = e.target.closest('.anatomy-word');
      if (!span) return;
      e.preventDefault();
      activate(span);
    });
  }

  // One-time coach mark on the first annotated clue the player ever sees
  function maybeTeach(containerEl) {
    let taught = false;
    try { taught = localStorage.getItem(TAUGHT_KEY) === 'true'; } catch {}
    if (taught) return;
    const line = containerEl.querySelector('.clue-line');
    if (!line) return;
    const tip = document.createElement('div');
    tip.className = 'anatomy-teach';
    tip.textContent = 'Nearly every cryptic clue is made up of three main parts: definition, fodder, and wordplay indicators. Tap each word to see which each is:';
    line.parentNode.insertBefore(tip, line);
    const first = line.querySelector('.anatomy-word');
    if (first) first.classList.add('anatomy-pulse');
  }

  function dismissTeach(containerEl) {
    const tip = containerEl ? containerEl.querySelector('.anatomy-teach') : document.querySelector('.anatomy-teach');
    if (tip) tip.remove();
    document.querySelectorAll('.anatomy-pulse').forEach(el => el.classList.remove('anatomy-pulse'));
    try { localStorage.setItem(TAUGHT_KEY, 'true'); } catch {}
    window.BCSync?.schedulePush('world');
  }

  // Dev-mode integrity sweep: every segment must be locatable in its key
  function validateData() {
    if (typeof CLUE_ANNOTATIONS === 'undefined') return;
    Object.keys(CLUE_ANNOTATIONS).forEach(key => {
      let cursor = 0;
      CLUE_ANNOTATIONS[key].segments.forEach(seg => {
        const at = key.indexOf(seg.text, cursor);
        console.assert(at !== -1, 'BCWClueAnatomy: segment "' + seg.text + '" not found in "' + key + '"');
        if (at !== -1) cursor = at + seg.text.length;
      });
    });
  }

  return {
    annotate,
    renderClue,
    wireInteraction, // used by the HUD toggle's live demo panel
    validateData
  };
})();
