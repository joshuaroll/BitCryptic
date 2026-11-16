// ═══════════════════════════════════
//  HOME DESIGNER: palette, room depth and progress for the cottage editor
//
//  The editor itself (placing, dragging, snapping, undo) lives in index.html.
//  This file dresses what is already there:
//    - the palette shows the furniture itself, not an emoji standing in for it
//    - the palette is tabbed, so it fits a phone as one row instead of a
//      seven-section scroll
//    - the room gets a ceiling shade, a shadow where wall meets floor and
//      soft corners, so furniture stands in a room rather than on a backdrop
//    - the header says how far the next house badge is
//
//  It stores nothing. The open tab is forgotten when the page closes.
// ═══════════════════════════════════

const BCWHomeDesign = (() => {
  // Tab id, the heading it comes from, and whether that heading still shows
  // inside the pane (true where one tab holds several headed groups).
  const TABS = [
    { id: 'furniture', label: 'Furniture', from: ['Furniture'] },
    { id: 'walls', label: 'Walls', from: ['Wall Decor'] },
    { id: 'puzzle', label: 'Puzzle', from: ['Puzzle Items'] },
    { id: 'kitchen', label: 'Kitchen', from: [] },
    { id: 'trophies', label: 'Trophies', from: ['Trophies'] },
    { id: 'colors', label: 'Colors', from: ['Object Colorway', 'Wall Color', 'Floor Style'], keepHeadings: true }
  ];

  let built = false;
  let active = 'furniture';

  function palette() { return document.querySelector('#house-editor .house-palette'); }

  // ─── Tabs ───
  function build() {
    const pal = palette();
    if (!pal || built) return;
    built = true;

    const panes = {};
    TABS.forEach(t => {
      const pane = document.createElement('div');
      pane.className = 'hd-pane';
      pane.dataset.tab = t.id;
      pane.setAttribute('role', 'tabpanel');
      panes[t.id] = pane;
    });

    // Walk the palette as written: a heading opens a group, everything up to
    // the next heading belongs to it.
    let current = null;
    [...pal.children].forEach(node => {
      if (node.id === 'house-trash') return;
      if (node.tagName === 'H3') {
        const name = node.textContent.trim();
        current = TABS.find(t => t.from.includes(name)) || null;
        if (!current) return;
        if (!current.keepHeadings) node.classList.add('hd-heading-folded');
        panes[current.id].appendChild(node);
        return;
      }
      if (current) panes[current.id].appendChild(node);
    });

    // Kitchen is a sub-label inside Puzzle Items. Everything after it moves
    // to its own pane.
    const label = panes.puzzle.querySelector('.palette-section-label');
    if (label) {
      const section = document.createElement('div');
      section.className = 'palette-section';
      let n = label.nextElementSibling;
      while (n) { const next = n.nextElementSibling; section.appendChild(n); n = next; }
      label.remove();
      panes.kitchen.appendChild(section);
    }

    const bar = document.createElement('div');
    bar.className = 'hd-tabs';
    bar.setAttribute('role', 'tablist');
    bar.setAttribute('aria-label', 'Palette');
    TABS.forEach(t => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'hd-tab';
      b.dataset.tab = t.id;
      b.setAttribute('role', 'tab');
      b.textContent = t.label;
      b.addEventListener('click', () => select(t.id));
      bar.appendChild(b);
    });

    const trash = document.getElementById('house-trash');
    pal.insertBefore(bar, pal.firstChild);
    TABS.forEach(t => pal.insertBefore(panes[t.id], trash));
    pal.classList.add('hd-ready');
    select(active);
  }

  function select(id) {
    const pal = palette();
    if (!pal) return;
    active = id;
    pal.querySelectorAll('.hd-tab').forEach(b => {
      const on = b.dataset.tab === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    pal.querySelectorAll('.hd-pane').forEach(p => { p.hidden = p.dataset.tab !== id; });
  }

  // A tab with nothing to offer is not shown: Trophies before the first one
  // is earned, exactly as its heading was hidden before.
  function syncTabs() {
    const pal = palette();
    if (!pal) return;
    const heading = document.getElementById('trophy-palette-heading');
    const empty = !!(heading && heading.hidden);
    const tab = pal.querySelector('.hd-tab[data-tab="trophies"]');
    if (tab) tab.hidden = empty;
    if (empty && active === 'trophies') select('furniture');
  }

  // ─── Thumbnails: the piece itself, drawn small ───
  function typeOf(tile) {
    const m = /add(?:Reward)?Furniture\('([A-Za-z0-9_]+)'\)/.exec(tile.getAttribute('onclick') || '');
    return m ? m[1] : null;
  }

  function thumbs() {
    const pal = palette();
    if (!pal || typeof FURNITURE_DEFS === 'undefined') return;
    pal.querySelectorAll('.palette-item').forEach(tile => {
      if (tile.dataset.hdThumb) return;
      const type = typeOf(tile);
      const def = type && FURNITURE_DEFS[type];
      const icon = tile.querySelector('.palette-icon');
      if (!def || !def.svg || !icon) return;
      tile.dataset.hdThumb = '1';
      icon.classList.add('hd-thumb');
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = def.svg;
      // Tiles are clickable divs. Make them reachable and operable by keyboard.
      if (!tile.hasAttribute('tabindex')) {
        tile.setAttribute('tabindex', '0');
        tile.setAttribute('role', 'button');
        tile.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); tile.click(); }
        });
      }
    });
  }

  // ─── Room depth ───
  function depth() {
    const room = document.getElementById('house-room');
    if (!room || room.querySelector('.hd-room-depth')) return;
    const layer = document.createElement('div');
    layer.className = 'hd-room-depth';
    layer.setAttribute('aria-hidden', 'true');
    const lighting = document.getElementById('house-lighting');
    room.insertBefore(layer, lighting || null);
  }

  // ─── Progress toward the next house badge ───
  const GOALS = [['decorator', 5], ['dream_home', 15]];

  function progress() {
    const header = document.querySelector('#house-editor .house-header');
    if (!header || typeof BCWAchievements === 'undefined' || typeof getHouseState !== 'function') return;
    let chip = document.getElementById('hd-progress');
    if (!chip) {
      chip = document.createElement('div');
      chip.id = 'hd-progress';
      chip.className = 'hd-progress';
      chip.setAttribute('role', 'status');
      const title = document.getElementById('house-editor-title');
      header.insertBefore(chip, title ? title.nextSibling : header.firstChild);
    }
    let count = 0;
    try { count = getHouseState().items.length; } catch (e) {}
    const all = BCWAchievements.getAll();
    const next = GOALS.map(([id, goal]) => ({ a: all.find(x => x.id === id), goal }))
      .find(g => g.a && !g.a.unlocked);
    if (!next) { chip.hidden = true; return; }
    chip.hidden = false;
    const shown = Math.min(count, next.goal);
    chip.innerHTML = '';
    const name = document.createElement('span');
    name.className = 'hd-progress-name';
    name.textContent = next.a.title;
    const num = document.createElement('span');
    num.className = 'hd-progress-num';
    num.textContent = shown + ' / ' + next.goal;
    const bar = document.createElement('span');
    bar.className = 'hd-progress-bar';
    const fill = document.createElement('span');
    fill.style.width = (shown / next.goal * 100) + '%';
    bar.appendChild(fill);
    chip.append(name, num, bar);
  }

  function refresh() {
    build();
    depth();
    thumbs();
    syncTabs();
    progress();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', refresh);
  else refresh();

  return { refresh, select };
})();
