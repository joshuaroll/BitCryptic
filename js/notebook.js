// ═══════════════════════════════════
//  THE NOTEBOOK: where a solver keeps their working
//
//  Every real cryptic solver has one. A margin, a napkin, the back of the
//  puzzle. You write the fodder out and push it around, you circle the word you
//  think is the indicator, you draw a line under the definition. Solving is a
//  physical, scribbling activity and the island had nowhere to scribble.
//
//  ── What it holds ──────────────────────────────────────────────────────
//  Three kinds of page, in one book:
//
//    clue      a clue copied out of the game, with room to work under it
//    picture   a screenshot of whatever was on screen, drawable over
//    note      a blank page, typed and drawn on
//
//  The drawing layer is the same on a picture and a note, because a solver
//  drawing an arrow from fodder to answer is doing the same thing whether the
//  clue is a screenshot or their own handwriting.
//
//  ── Why it is not just a text field ────────────────────────────────────
//  Cryptic working is spatial. You cross letters out. You bracket half a clue
//  and leave the other half alone. A textarea cannot hold that, which is why
//  every page carries a canvas the player can draw on with a finger or a mouse.
//
//  ── Storage ────────────────────────────────────────────────────────────
//  localStorage under `bcw_notebook`. Screenshots are the risk here: a PNG data
//  URL is large, so captures are downscaled and capped, and the whole book is
//  capped by page count. It is deliberately NOT synced. A player's scribbles are
//  device-local, and pushing megabytes of canvas into the 256 KB save payload
//  would break cloud saves for everything else.
//
//  NO SPEED FRAMING (r3 #11).
// ═══════════════════════════════════

var BCWNotebook = (() => {
  const KEY = 'bcw_notebook';

  // Pages, and the drawn overlay on each, are the biggest thing this game
  // writes. The caps are what keep a notebook from filling a browser quota.
  const MAX_PAGES = 40;
  const MAX_SHOT_WIDTH = 900;   // captures are downscaled to this
  const SHOT_QUALITY = 0.72;    // JPEG, because a screenshot is a photograph

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function write(pages) {
    try {
      localStorage.setItem(KEY, JSON.stringify(pages.slice(0, MAX_PAGES)));
    } catch (e) {
      // A full quota is the one failure a player will actually hit here, and
      // silently losing their working would be the worst possible response.
      return { ok: false, reason: 'full' };
    }
    try {
      window.dispatchEvent(new CustomEvent('bcw-notebook-changed'));
    } catch { /* an unheard event is never worth an exception */ }
    return { ok: true };
  }

  function makeId() {
    return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  /** Add a page. Newest first, because the thing you just copied is the thing
      you want. */
  function add(page) {
    const pages = read();
    const entry = Object.assign({
      id: makeId(),
      at: Date.now(),
      kind: 'note',
      title: '',
      text: '',
      image: null,
      ink: null,
    }, page || {});
    pages.unshift(entry);
    const res = write(pages);
    return res.ok ? entry : null;
  }

  /** Copy a clue in. The player is working on it, so it opens ready to write. */
  function addClue(clue, extra) {
    return add(Object.assign({
      kind: 'clue',
      title: 'Clue',
      text: String(clue || ''),
    }, extra || {}));
  }

  function update(id, patch) {
    const pages = read();
    const i = pages.findIndex((p) => p.id === id);
    if (i === -1) return false;
    pages[i] = Object.assign({}, pages[i], patch || {}, { at: pages[i].at });
    return write(pages).ok;
  }

  function remove(id) {
    const pages = read().filter((p) => p.id !== id);
    write(pages);
    return pages;
  }

  function all() { return read(); }
  function get(id) { return read().find((p) => p.id === id) || null; }
  function count() { return read().length; }

  /**
   * Take a picture of what is on screen.
   *
   * The island is SVG and HTML, and there is no screen-capture API a page can
   * call on itself without a library. So this paints what it can reach: the
   * island map is an SVG, which serialises into an image cleanly, and that is
   * the thing worth capturing anyway.
   *
   * Resolves to a page, or null when there is nothing capturable on screen.
   */
  function capture(sourceEl) {
    return new Promise((resolve) => {
      try {
        const svg = (sourceEl && sourceEl.tagName === 'svg')
          ? sourceEl
          : document.querySelector('#island-map svg, svg#island, .map-wrap svg, svg');
        if (!svg) return resolve(null);

        const box = svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width
          ? svg.viewBox.baseVal
          : { width: svg.clientWidth || 800, height: svg.clientHeight || 600 };

        const scale = Math.min(1, MAX_SHOT_WIDTH / (box.width || MAX_SHOT_WIDTH));
        const w = Math.max(1, Math.round((box.width || 800) * scale));
        const h = Math.max(1, Math.round((box.height || 600) * scale));

        const data = new XMLSerializer().serializeToString(svg);
        const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);

        const img = new Image();
        img.onload = () => {
          try {
            const c = document.createElement('canvas');
            c.width = w; c.height = h;
            const ctx = c.getContext('2d');
            ctx.fillStyle = '#0B1021';
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);
            resolve(add({
              kind: 'picture',
              title: 'From the island',
              image: c.toDataURL('image/jpeg', SHOT_QUALITY),
            }));
          } catch {
            // A tainted canvas throws here. Nothing to capture is a fair answer.
            resolve(null);
          }
        };
        img.onerror = () => resolve(null);
        img.src = url;
      } catch {
        resolve(null);
      }
    });
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch { /* nothing to do */ }
  }

  return {
    KEY: KEY,
    MAX_PAGES: MAX_PAGES,
    add: add,
    addClue: addClue,
    update: update,
    remove: remove,
    all: all,
    get: get,
    count: count,
    capture: capture,
    reset: reset,
  };
})();
