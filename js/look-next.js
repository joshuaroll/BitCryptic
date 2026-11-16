// ═══════════════════════════════════
//  LOOK "NEXT": the map, HUD and opening treatment (default since 2026-11-16)
//
//  On for everyone. Open the game with ?look=classic to see the previous
//  look for comparison; ?look=next turns this one back on. The choice lasts
//  for the tab (sessionStorage), so it never touches a save and never syncs.
//  In classic this file does nothing at all.
//
//  What it adds, all on top of art that is already drawn:
//    - sea depth, a foam line and drifting cloud shadow around the island
//    - one light (upper left) and a shaded coast, so the island has volume
//    - landmarks and labels sized to stay readable at every zoom (CSS)
//    - a pointer to the next unfinished story, on the map and in the HUD
//    - storm art for the two opening beats, which had none
// ═══════════════════════════════════

const BCWLook = (() => {
  const KEY = 'bcw_look_preview';
  const SVGNS = 'http://www.w3.org/2000/svg';

  // Story order for the main chain. Secrets are found, not pointed at.
  const MAIN_ORDER = ['docks', 'forest', 'cafe', 'town', 'adventure', 'library',
    'workshop', 'beach', 'cove', 'observatory'];

  function enabled() {
    try {
      const q = new URLSearchParams(location.search).get('look');
      if (q === 'classic') sessionStorage.setItem(KEY, 'classic');
      if (q === 'next') sessionStorage.removeItem(KEY);
      return sessionStorage.getItem(KEY) !== 'classic';
    } catch (e) { return true; }
  }

  function svgGroup(html) {
    const g = document.createElementNS(SVGNS, 'g');
    g.setAttribute('aria-hidden', 'true');
    g.setAttribute('pointer-events', 'none');
    g.innerHTML = html;
    return g;
  }

  // ─── Sea, light and weather on the map ───
  function dressMap() {
    const svg = document.querySelector('svg.island-svg');
    const body = svg && svg.querySelector('path[fill="url(#grassGrad)"]');
    if (!body || document.getElementById('ln-sea')) return;
    const d = body.getAttribute('d');
    const land = body.parentNode;            // the translate(0,500) group
    const place = land.getAttribute('transform') || '';
    // Scale a copy of the coastline about the island's centre.
    const grow = (k) => 'translate(1200 710) scale(' + k + ') translate(-1200 -710)';

    // Whatever moves gets an SVG of its own, beside the island's, on its own
    // layer. A moving shape repaints everything that shares its layer, and
    // inside the island SVG that was the whole map, blurs included, sixty
    // times a second: 14 fps without a GPU against 60 for the old look. On
    // its own layer the foam repaints two thin lines.
    function layer(id, html) {
      const el = document.createElementNS(SVGNS, 'svg');
      el.id = id;
      el.setAttribute('class', 'ln-layer');
      el.setAttribute('viewBox', svg.getAttribute('viewBox'));
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = html;
      svg.parentNode.insertBefore(el, svg);
      return el;
    }

    // Shelf water: the coastline, grown and blurred, twice. Never repaints.
    layer('ln-sea',
      '<defs><filter id="lnSeaBlur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="26"/></filter></defs>' +
      '<g transform="' + place + '">' +
        '<path d="' + d + '" transform="' + grow(1.2) + '" fill="#1f8fa6" opacity="0.2" filter="url(#lnSeaBlur)"/>' +
        '<path d="' + d + '" transform="' + grow(1.09) + '" fill="#3cc0c4" opacity="0.3" filter="url(#lnSeaBlur)"/>' +
      '</g>');

    // Foam: two broken lines that crawl along the shore in opposite directions.
    layer('ln-foam',
      '<g transform="' + place + '">' +
        '<path class="ln-foam ln-foam--far" d="' + d + '" transform="' + grow(1.075) + '" stroke-width="3" stroke-dasharray="46 150 20 90" opacity="0.2"/>' +
        '<path class="ln-foam" d="' + d + '" transform="' + grow(1.032) + '" stroke-width="5" stroke-dasharray="90 60 30 80" opacity="0.42"/>' +
      '</g>');

    // Light and coast shade sit directly on the grass, under roads, beaches,
    // trees and buildings, so nothing drawn later is tinted.
    const light = svgGroup(
      '<defs>' +
        '<filter id="lnSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="16"/></filter>' +
        '<radialGradient id="lnLight" cx="28%" cy="16%" r="95%">' +
          '<stop offset="0" stop-color="#fff3bf" stop-opacity="0.34"/>' +
          '<stop offset="0.42" stop-color="#fff3bf" stop-opacity="0"/>' +
          '<stop offset="1" stop-color="#06201c" stop-opacity="0.36"/>' +
        '</radialGradient>' +
        '<clipPath id="lnLandClip"><path d="' + d + '"/></clipPath>' +
      '</defs>' +
      '<g clip-path="url(#lnLandClip)">' +
        '<ellipse cx="760" cy="520" rx="330" ry="170" fill="#8fc46a" opacity="0.16" filter="url(#lnSoft)"/>' +
        '<ellipse cx="1500" cy="980" rx="380" ry="150" fill="#8fc46a" opacity="0.13" filter="url(#lnSoft)"/>' +
        '<ellipse cx="1650" cy="520" rx="260" ry="130" fill="#1d4a22" opacity="0.16" filter="url(#lnSoft)"/>' +
        '<ellipse cx="900" cy="1020" rx="300" ry="110" fill="#1d4a22" opacity="0.12" filter="url(#lnSoft)"/>' +
        '<path d="' + d + '" fill="url(#lnLight)"/>' +
        '<path d="' + d + '" fill="none" stroke="#123a1e" stroke-width="70" opacity="0.3" filter="url(#lnSoft)"/>' +
      '</g>'
    );
    light.id = 'ln-light';
    land.insertBefore(light, body.nextSibling);

    // Cloud shadow drifts over land and sea alike. These are plain boxes
    // with a gradient, moved by transform alone, so the browser slides
    // finished pictures and repaints nothing. They were once clipped to the
    // coastline; compositing that clip cost a quarter of the frame rate and
    // real cloud shadow crosses water anyway. The map is 2400 by 2100 CSS
    // pixels, one per SVG unit, so SVG coordinates are used as they are.
    const at = /translate\(\s*(-?[\d.]+)[\s,]+(-?[\d.]+)/.exec(place) || [0, 0, 0];
    const weather = document.createElement('div');
    weather.id = 'ln-weather';
    weather.setAttribute('aria-hidden', 'true');
    weather.style.left = (+at[1]) + 'px';
    weather.style.top = (+at[2]) + 'px';
    [['', 520, 376, 196], [' ln-cloud-shadow--b', 900, 456, 216], [' ln-cloud-shadow--c', 1100, 316, 166]].forEach((c) => {
      const el = document.createElement('div');
      el.className = 'ln-cloud-shadow' + c[0];
      el.style.cssText = 'left:' + (-c[2]) + 'px;top:' + (c[1] - c[3]) + 'px;width:' + (2 * c[2]) + 'px;height:' + (2 * c[3]) + 'px';
      weather.appendChild(el);
    });
    svg.parentNode.insertBefore(weather, svg.nextSibling);
  }

  // ─── The next unfinished story ───
  function nextObjective() {
    if (typeof getProgress !== 'function') return null;
    const state = getProgress();
    if (!state.introComplete) return null;
    for (const id of MAIN_ORDER) {
      if (state.unlockedLocations.includes(id) && !state.completedStories.includes(id)) return id;
    }
    return null;
  }

  function refreshObjective() {
    const id = nextObjective();
    document.querySelectorAll('.location.ln-next').forEach((el) => el.classList.remove('ln-next'));
    const chip = document.getElementById('ln-objective');
    if (!chip) return;
    if (!id) { chip.classList.remove('is-shown'); return; }
    const el = document.getElementById('loc-' + id);
    if (el) el.classList.add('ln-next');
    chip.dataset.location = id;
    chip.querySelector('.ln-objective-name').textContent = locations[id].title;
    chip.setAttribute('aria-label', 'Next: ' + locations[id].title + '. Show on the map.');
    chip.classList.add('is-shown');
  }

  function buildObjective() {
    if (document.getElementById('ln-objective')) return;
    const chip = document.createElement('button');
    chip.id = 'ln-objective';
    chip.className = 'ln-objective';
    chip.innerHTML = '<span class="ln-objective-kicker">Next</span>' +
      '<span class="ln-objective-name"></span><span class="ln-objective-arrow" aria-hidden="true">›</span>';
    chip.addEventListener('click', () => {
      const id = chip.dataset.location;
      if (id && typeof panToLocation === 'function') panToLocation(id, null, 700);
    });
    document.body.appendChild(chip);
  }

  // ─── Opening art: the storm ───
  // 500x260, SMIL only, no figure: the boat is seen from far enough away that
  // nobody has to be drawn in it.
  function stormScene(sfx, ending) {
    const id = (n) => 'lnStorm' + n + sfx;
    return '<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="' + id('Sky') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070d1e"/><stop offset="0.7" stop-color="#172544"/><stop offset="1" stop-color="#22355a"/></linearGradient>' +
        '<linearGradient id="' + id('Sea') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14294a"/><stop offset="1" stop-color="#060d1d"/></linearGradient>' +
        '<filter id="' + id('Blur') + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7"/></filter>' +
        '<clipPath id="' + id('Clip') + '"><rect width="500" height="260"/></clipPath>' +
      '</defs>' +
      '<g clip-path="url(#' + id('Clip') + ')">' +
      '<rect width="500" height="260" fill="url(#' + id('Sky') + ')"/>' +
      // Sheet lightning behind the cloud deck
      '<rect width="500" height="170" fill="#b9c8ee" opacity="0"><animate attributeName="opacity" dur="6.4s" repeatCount="indefinite" keyTimes="0;0.60;0.62;0.64;0.67;0.72;1" values="0;0;0.5;0.08;0.36;0;0"/></rect>' +
      // The island, a darker shape on the horizon that only the flash shows clearly
      '<g>' +
        '<path d="M250,150 L283,150 L300,128 L312,140 L330,112 L346,134 L360,124 L378,150 L430,150 L430,156 L250,156 Z" fill="#0d1730"/>' +
        '<path d="M250,150 L283,150 L300,128 L312,140 L330,112 L346,134 L360,124 L378,150 L430,150 L430,156 L250,156 Z" fill="#5d7096" opacity="0"><animate attributeName="opacity" dur="6.4s" repeatCount="indefinite" keyTimes="0;0.60;0.62;0.64;0.67;0.72;1" values="0;0;0.9;0.2;0.7;0;0"/></path>' +
        '<path d="M330,112 L322,124 L330,121 L338,125 Z" fill="#d7e0f2" opacity="0"><animate attributeName="opacity" dur="6.4s" repeatCount="indefinite" keyTimes="0;0.60;0.62;0.64;0.67;0.72;1" values="0;0;0.9;0.2;0.7;0;0"/></path>' +
      '</g>' +
      // Cloud deck
      '<g filter="url(#' + id('Blur') + ')">' +
        '<g><animateTransform attributeName="transform" type="translate" dur="23s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;-26,0;0,0"/>' +
          '<ellipse cx="90" cy="26" rx="150" ry="34" fill="#1a233d"/><ellipse cx="300" cy="14" rx="190" ry="32" fill="#141c33"/><ellipse cx="470" cy="34" rx="120" ry="30" fill="#1a233d"/></g>' +
        '<g><animateTransform attributeName="transform" type="translate" dur="31s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;34,0;0,0"/>' +
          '<ellipse cx="180" cy="58" rx="130" ry="22" fill="#232e4c" opacity="0.85"/><ellipse cx="410" cy="66" rx="110" ry="20" fill="#232e4c" opacity="0.8"/><ellipse cx="20" cy="70" rx="90" ry="18" fill="#232e4c" opacity="0.8"/></g>' +
      '</g>' +
      // The bolt
      '<path d="M352,40 L340,72 L349,72 L334,104 L343,104 L330,112" fill="none" stroke="#eef1dc" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0"><animate attributeName="opacity" dur="6.4s" repeatCount="indefinite" keyTimes="0;0.60;0.62;0.64;0.67;0.70;1" values="0;0;1;0.15;0.85;0;0"/></path>' +
      // Far swell
      '<g><animateTransform attributeName="transform" type="translate" dur="7.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;-22,3;0,0"/>' +
        '<path d="M-40,160 Q-10,150 20,160 T80,160 T140,160 T200,160 T260,160 T320,160 T380,160 T440,160 T500,160 T560,160 L560,270 L-40,270 Z" fill="url(#' + id('Sea') + ')"/></g>' +
      // The boat, pitching: placement, then bob, then roll, one transform per group
      '<g transform="translate(150,170)">' +
        '<g><animateTransform attributeName="transform" type="translate" dur="4.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;0,-7;0,0"/>' +
          '<g><animateTransform attributeName="transform" type="rotate" dur="3.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="-11 0 0;9 0 0;-11 0 0"/>' +
            '<rect x="-1.5" y="-44" width="3" height="40" fill="#5b4320"/>' +
            '<path d="M1.5,-43 L22,-36 L1.5,-29 Z" fill="#d9b23a"/>' +
            '<path d="M-1.5,-40 L-20,-12 L-1.5,-12 Z" fill="#c9c4b2" opacity="0.85"/>' +
            '<path d="M-34,-8 L34,-8 Q30,8 18,10 L-20,10 Q-31,6 -34,-8 Z" fill="#a8322a"/>' +
            '<path d="M-34,-8 L34,-8 L33,-4 L-33,-4 Z" fill="#7d231d"/>' +
            '<circle cx="-12" cy="1" r="2.6" fill="#3d7fa6"/><circle cx="2" cy="1" r="2.6" fill="#3d7fa6"/><circle cx="16" cy="1" r="2.6" fill="#3d7fa6"/>' +
          '</g></g></g>' +
      // Near swells, in front of the hull
      '<g><animateTransform attributeName="transform" type="translate" dur="5.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;28,-5;0,0"/>' +
        '<path d="M-60,186 Q-25,170 10,186 T80,186 T150,186 T220,186 T290,186 T360,186 T430,186 T500,186 T570,186 L570,270 L-60,270 Z" fill="#0f1f3b"/>' +
        '<path d="M-60,186 Q-25,170 10,186 T80,186 T150,186 T220,186 T290,186 T360,186 T430,186 T500,186 T570,186" fill="none" stroke="#7f95bd" stroke-width="1.4" opacity="0.4"/></g>' +
      '<g><animateTransform attributeName="transform" type="translate" dur="6.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" values="0,0;-34,6;0,0"/>' +
        '<path d="M-70,214 Q-30,194 10,214 T90,214 T170,214 T250,214 T330,214 T410,214 T490,214 T570,214 L570,270 L-70,270 Z" fill="#091428"/>' +
        '<path d="M-70,214 Q-30,194 10,214 T90,214 T170,214 T250,214 T330,214 T410,214 T490,214 T570,214" fill="none" stroke="#7f95bd" stroke-width="1.6" opacity="0.3"/></g>' +
      // Rain
      '<g stroke="#9fb2d6" stroke-width="1" opacity="0.26" stroke-linecap="round">' +
        '<g><animateTransform attributeName="transform" type="translate" dur="0.7s" repeatCount="indefinite" values="0,-60;-20,0"/>' +
          rain() + '</g></g>' +
      (ending || '') +
      '</g></svg>';
  }

  function rain() {
    // A fixed scatter (no Math.random: the same frame for every player).
    let out = '';
    for (let i = 0; i < 46; i++) {
      const x = (i * 67) % 540;
      const y = (i * 131) % 330 - 40;
      out += '<path d="M' + x + ',' + y + ' l-5,15"/>';
    }
    return out;
  }

  function addIntroArt() {
    if (typeof STORY_SCENES === 'undefined' || STORY_SCENES['_intro_0']) return;
    STORY_SCENES['_intro_0'] = stormScene('A');
    // "A wave takes the bow. Everything goes dark."
    STORY_SCENES['_intro_1'] = stormScene('B',
      '<path d="M-20,270 L-20,150 Q60,60 170,120 Q250,160 330,110 Q420,60 520,140 L520,270 Z" fill="#070f20" transform="translate(0,190)">' +
        '<animateTransform attributeName="transform" type="translate" dur="1.7s" begin="0.5s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1" values="0,190;0,-40"/></path>' +
      '<rect width="500" height="260" fill="#04070f" opacity="0"><animate attributeName="opacity" dur="1.5s" begin="1.5s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1" values="0;0.88"/></rect>');
  }

  function init() {
    if (!enabled()) return;
    document.body.classList.add('look-next');
    addIntroArt();
    dressMap();
    buildObjective();
    refreshObjective();
    document.addEventListener('bcw:locations-updated', refreshObjective);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  return { enabled, refreshObjective };
})();
