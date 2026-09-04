// ═══════════════════════════════════
//  THE NOTEBOOK, ON SCREEN
//
//  Two views. A shelf of pages, and one page open.
//
//  ── The drawing surface ────────────────────────────────────────────────
//  Every page carries a canvas over it. On a picture page the canvas sits over
//  the screenshot; on a note page it sits over the paper. Same tool either way,
//  because circling the fodder in a screenshot and circling it in your own
//  handwriting are the same act.
//
//  Pointer events rather than mouse or touch events, so a finger, a stylus and
//  a mouse all take the same path. `touch-action: none` is scoped to the canvas
//  alone, so drawing does not steal the page's scroll.
//
//  ── The ink is saved as an image, not as strokes ───────────────────────
//  Strokes would be smaller and replayable, but they need a renderer, a
//  version, and a migration the first time the format changes. A page of
//  scribble is a picture of a page of scribble. Saving it as one keeps this
//  feature small enough to be worth having.
//
//  ── What it does not do ────────────────────────────────────────────────
//  No sync. Scribbles stay on the device that made them, because a notebook of
//  canvases would swamp the 256 KB cloud save and take everything else down
//  with it.
//
//  COPY IS PLACEHOLDER until G3 sign-off.
// ═══════════════════════════════════

var BCWNotebookUI = (() => {
  const PENS = [
    { id: 'ink', label: 'Ink', colour: '#E2E8F0', width: 2.5 },
    { id: 'amber', label: 'Mark', colour: '#F2C14E', width: 3 },
    { id: 'mint', label: 'Note', colour: '#64D9A0', width: 3 },
    { id: 'wide', label: 'Highlight', colour: 'rgba(242,193,78,0.28)', width: 16 },
  ];

  let openId = null;
  let pen = PENS[0];
  let drawing = false;
  let dirty = false;

  const esc = (s) => {
    const d = document.createElement('div');
    d.textContent = s == null ? '' : s;
    return d.innerHTML;
  };

  function when(ms) {
    try {
      return new Date(ms).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
    } catch { return ''; }
  }

  /* ── the shelf ───────────────────────────────────────────────────────── */

  function showShelf() {
    openId = null;
    const pages = BCWNotebook.all();
    const body = pages.length
      ? '<div class="nb-shelf">' + pages.map((p) =>
          '<button type="button" class="nb-card nb-card--' + esc(p.kind) + '" data-open="' + esc(p.id) + '">' +
          (p.image ? '<img class="nb-card__shot" src="' + p.image + '" alt="">' : '') +
          '<span class="nb-card__kind">' + esc(p.kind) + '</span>' +
          '<span class="nb-card__title">' + esc(p.title || p.text.slice(0, 40) || 'Untitled') + '</span>' +
          '<span class="nb-card__when">' + esc(when(p.at)) + '</span>' +
          '</button>').join('') + '</div>'
      : '<p class="nb-empty">Nothing in here yet. Copy a clue in while you are working on ' +
        'it, take a picture of the island, or start a blank page and scribble.</p>';

    showGameModal(
      body +
      '<div class="nb-actions">' +
      '<button type="button" class="story-puzzle-submit" onclick="BCWNotebookUI.newNote()">New page</button>' +
      '<button type="button" class="nb-btn" onclick="BCWNotebookUI.snap()">Take a picture</button>' +
      '</div>',
      'Notebook', '\u{1F4D3}'
    );

    const root = document.getElementById('game-modal-body');
    if (!root) return;
    root.querySelectorAll('[data-open]').forEach((b) => {
      b.addEventListener('click', () => showPage(b.getAttribute('data-open')));
    });
  }

  /* ── one page ────────────────────────────────────────────────────────── */

  function showPage(id) {
    const page = BCWNotebook.get(id);
    if (!page) return showShelf();
    openId = id;
    dirty = false;

    showGameModal(
      '<div class="nb-page">' +
      '<input class="nb-title" value="' + esc(page.title) + '" placeholder="Title this page" ' +
      'aria-label="Page title">' +
      (page.kind === 'clue'
        ? '<p class="nb-clue">' + esc(page.text) + '</p>'
        : '') +
      '<div class="nb-canvas-wrap">' +
      (page.image ? '<img class="nb-shot" src="' + page.image + '" alt="Saved picture">' : '') +
      '<canvas class="nb-canvas" id="nb-canvas" width="720" height="420"></canvas>' +
      '</div>' +
      '<div class="nb-tools" role="group" aria-label="Pens">' +
      PENS.map((p) => '<button type="button" class="nb-pen' + (p.id === pen.id ? ' is-on' : '') +
        '" data-pen="' + p.id + '" style="--pen:' + p.colour + '">' + esc(p.label) + '</button>').join('') +
      '<button type="button" class="nb-pen nb-pen--clear" data-clear>Clear ink</button>' +
      '</div>' +
      (page.kind !== 'clue'
        ? '<textarea class="nb-text" placeholder="Type here" aria-label="Page notes">' +
          esc(page.text) + '</textarea>'
        : '<textarea class="nb-text" placeholder="Working" aria-label="Working">' +
          esc(page.working || '') + '</textarea>') +
      '</div>' +
      '<div class="nb-actions">' +
      '<button type="button" class="story-puzzle-submit" onclick="BCWNotebookUI.save()">Save page</button>' +
      '<button type="button" class="nb-btn" onclick="BCWNotebookUI.showShelf()">Back to the shelf</button>' +
      '<button type="button" class="nb-btn nb-btn--drop" onclick="BCWNotebookUI.drop()">Tear out</button>' +
      '</div>',
      page.kind === 'clue' ? 'Working on a clue' : 'Notebook', '\u{1F4D3}'
    );

    wirePage(page);
  }

  function wirePage(page) {
    const canvas = document.getElementById('nb-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (page.ink) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.src = page.ink;
    }

    // Pointer events cover finger, stylus and mouse in one path.
    const at = (e) => {
      const r = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - r.left) * (canvas.width / r.width),
        y: (e.clientY - r.top) * (canvas.height / r.height),
      };
    };

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      dirty = true;
      canvas.setPointerCapture(e.pointerId);
      const p = at(e);
      ctx.strokeStyle = pen.colour;
      ctx.lineWidth = pen.width;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const p = at(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });

    const stop = () => { drawing = false; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('pointerleave', stop);

    const root = document.getElementById('game-modal-body');
    root.querySelectorAll('[data-pen]').forEach((b) => {
      b.addEventListener('click', () => {
        pen = PENS.find((p) => p.id === b.getAttribute('data-pen')) || PENS[0];
        root.querySelectorAll('[data-pen]').forEach((o) => o.classList.toggle('is-on', o === b));
      });
    });

    const clear = root.querySelector('[data-clear]');
    if (clear) clear.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dirty = true;
    });
  }

  /* ── actions ─────────────────────────────────────────────────────────── */

  function save() {
    if (!openId) return;
    const root = document.getElementById('game-modal-body');
    const canvas = document.getElementById('nb-canvas');
    const title = root.querySelector('.nb-title');
    const text = root.querySelector('.nb-text');
    const page = BCWNotebook.get(openId);
    if (!page) return;

    const patch = { title: title ? title.value : page.title };
    if (page.kind === 'clue') patch.working = text ? text.value : '';
    else patch.text = text ? text.value : '';

    // Only write ink when something was drawn. An untouched canvas would
    // otherwise save a blank PNG on every page, for nothing.
    if (canvas && dirty) {
      try { patch.ink = canvas.toDataURL('image/png'); } catch { /* keep the old ink */ }
    }

    const ok = BCWNotebook.update(openId, patch);
    if (!ok) {
      showGameModal('The notebook is full. Tear a page out and try again.', 'Notebook', '\u{1F4D3}');
      return;
    }
    dirty = false;
    showShelf();
  }

  function drop() {
    if (!openId) return;
    BCWNotebook.remove(openId);
    showShelf();
  }

  function newNote() {
    const p = BCWNotebook.add({ kind: 'note', title: '' });
    if (p) showPage(p.id);
  }

  function snap() {
    BCWNotebook.capture().then((p) => {
      if (p) showPage(p.id);
      else showGameModal('Nothing to photograph from here. Try it out on the map.',
        'Notebook', '\u{1F4D3}');
    });
  }

  /** Copy a clue in from wherever the player is reading it. */
  function copyClue(clue) {
    const p = BCWNotebook.addClue(clue);
    if (!p) return false;
    if (typeof BCWAudio !== 'undefined') BCWAudio.playMenuOpen();
    return true;
  }

  return {
    PENS: PENS,
    showShelf: showShelf,
    showPage: showPage,
    save: save,
    drop: drop,
    newNote: newNote,
    snap: snap,
    copyClue: copyClue,
  };
})();
