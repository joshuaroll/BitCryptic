// ═══════════════════════════════════
//  CLUE ANATOMY - Bit Cryptic World
//  Interactive per-word clue teaching. Wraps annotated clue text in spans;
//  click 1 reveals a word's role (definition / indicator / fodder) with a
//  persistent color, click 2 explains what that part is doing.
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
    link: 'LINK WORD'
  };

  // Level-1 one-liners per role (level 2 comes from the segment's info)
  const ROLE_BRIEF = {
    definition: 'the wordplay aside, this simply means the answer.',
    indicator: 'this word names an operation — it tells you what to do.',
    fodder: 'raw material — these letters (or what they become) build the answer.',
    link: 'connective tissue — it joins definition and wordplay, nothing more.'
  };

  // Build the wrapped clue HTML for a known annotation key
  function renderClue(clueKey) {
    const ann = (typeof CLUE_ANNOTATIONS !== 'undefined') ? CLUE_ANNOTATIONS[clueKey] : null;
    if (!ann) return null;
    let html = '';
    let cursor = 0;
    let ok = true;
    ann.segments.forEach((seg, i) => {
      const at = clueKey.indexOf(seg.text, cursor);
      if (at === -1) { ok = false; return; }
      html += escapeHtml(clueKey.slice(cursor, at));
      html += '<span class="anatomy-word" data-seg="' + i + '" data-level="0" role="button" tabindex="0">' +
        escapeHtml(seg.text) + '</span>';
      cursor = at + seg.text.length;
    });
    if (!ok) {
      console.warn('BCWClueAnatomy: segment mismatch for "' + clueKey + '"');
      return null;
    }
    html += escapeHtml(clueKey.slice(cursor));
    return '<span class="clue-line" data-clue-key="' + escapeHtml(clueKey) + '">' + html + '</span>';
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Find an annotated clue inside already-rendered narrative HTML (the clue
  // sits between straight quotes inside step.text) and wrap it in place.
  function annotate(containerEl) {
    if (!containerEl || typeof CLUE_ANNOTATIONS === 'undefined') return;
    if (containerEl.querySelector('.clue-line')) return; // already annotated
    const html = containerEl.innerHTML;
    for (const key in CLUE_ANNOTATIONS) {
      const quoted = '"' + key + '"';
      if (html.indexOf(quoted) === -1) continue;
      const rendered = renderClue(key);
      if (!rendered) return;
      containerEl.innerHTML = html.replace(quoted, rendered);
      wireInteraction(containerEl, key);
      maybeTeach(containerEl);
      return;
    }
  }

  function wireInteraction(containerEl, clueKey) {
    const line = containerEl.querySelector('.clue-line');
    if (!line) return;
    const ann = CLUE_ANNOTATIONS[clueKey];

    // One info line lives directly after the clue
    let info = containerEl.querySelector('.anatomy-info');
    if (!info) {
      info = document.createElement('div');
      info.className = 'anatomy-info';
      info.id = 'anatomy-info';
      info.setAttribute('aria-live', 'polite');
      line.parentNode.insertBefore(info, line.nextSibling);
    }

    function activate(span) {
      const seg = ann.segments[parseInt(span.dataset.seg, 10)];
      if (!seg) return;
      let level = parseInt(span.dataset.level, 10) || 0;
      if (level < 2) level++;
      span.dataset.level = level;
      span.classList.add('revealed-' + seg.role);
      const label = ROLE_LABELS[seg.role] || seg.role.toUpperCase();
      info.className = 'anatomy-info anatomy-info--' + seg.role + ' visible';
      if (level === 1) {
        info.innerHTML = '<b>' + label + '</b> — “' + escapeHtml(seg.text) + '”: ' + ROLE_BRIEF[seg.role];
      } else {
        info.innerHTML = '<b>' + label + '</b> — ' + escapeHtml(seg.info || ROLE_BRIEF[seg.role]);
      }
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
    tip.textContent = 'Every clue has moving parts. Tap any word to see the job it does.';
    line.parentNode.insertBefore(tip, line);
    const first = line.querySelector('.anatomy-word');
    if (first) first.classList.add('anatomy-pulse');
  }

  function dismissTeach(containerEl) {
    const tip = containerEl ? containerEl.querySelector('.anatomy-teach') : document.querySelector('.anatomy-teach');
    if (tip) tip.remove();
    document.querySelectorAll('.anatomy-pulse').forEach(el => el.classList.remove('anatomy-pulse'));
    try { localStorage.setItem(TAUGHT_KEY, 'true'); } catch {}
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
    validateData
  };
})();
