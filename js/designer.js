// ═══════════════════════════════════
//  MAP DESIGNER MODE - Bit Cryptic World
//  Visual SVG editor with undo, layers, and AI prompt
//  Toggle: Ctrl+Shift+D
// ═══════════════════════════════════

const BCWDesigner = (() => {
  let active = false;
  let selectedEl = null;
  let dragging = false;
  let dragStartX = 0, dragStartY = 0;
  let elStartX = 0, elStartY = 0;
  let panel = null;
  let highlightOverlay = null;
  let changeLog = [];

  // Undo system
  let undoStack = [];
  let redoStack = [];
  const MAX_UNDO = 50;

  function init() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        toggle();
      }
      if (!active) return;
      if (e.ctrlKey && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if (e.ctrlKey && e.key === 'z' && e.shiftKey) { e.preventDefault(); redo(); }
      if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo(); }
      if (e.key === 'Delete' && selectedEl) { e.preventDefault(); deleteSelected(); }
    });
  }

  function toggle() { active ? deactivate() : activate(); }

  function activate() {
    active = true;
    document.body.classList.add('designer-mode');

    panel = document.createElement('div');
    panel.id = 'designer-panel';
    panel.innerHTML = `
      <div class="designer-header">
        <span class="designer-title">Map Designer</span>
        <button onclick="BCWDesigner.toggle()" class="designer-close">&times;</button>
      </div>

      <div class="designer-info" id="designer-info">Click any element to select it</div>
      <div class="designer-props" id="designer-props"></div>

      <div class="designer-coords" id="designer-coords">
        <span id="designer-mouse-coords">Mouse: —</span>
      </div>

      <div class="designer-section-label">Actions</div>
      <div class="designer-actions">
        <button onclick="BCWDesigner.undo()" class="designer-btn" title="Ctrl+Z">↩ Undo</button>
        <button onclick="BCWDesigner.redo()" class="designer-btn" title="Ctrl+Shift+Z">↪ Redo</button>
        <button onclick="BCWDesigner.deleteSelected()" class="designer-btn" title="Delete">🗑 Delete</button>
        <button onclick="BCWDesigner.copySelected()" class="designer-btn">📋 Copy SVG</button>
      </div>

      <div class="designer-section-label">Move</div>
      <div class="designer-actions">
        <button onclick="BCWDesigner.nudge(-1,0)" class="designer-btn designer-btn-sm">←</button>
        <button onclick="BCWDesigner.nudge(0,-1)" class="designer-btn designer-btn-sm">↑</button>
        <button onclick="BCWDesigner.nudge(0,1)" class="designer-btn designer-btn-sm">↓</button>
        <button onclick="BCWDesigner.nudge(1,0)" class="designer-btn designer-btn-sm">→</button>
        <button onclick="BCWDesigner.nudge(-10,0)" class="designer-btn designer-btn-sm">⇐10</button>
        <button onclick="BCWDesigner.nudge(0,-10)" class="designer-btn designer-btn-sm">⇑10</button>
        <button onclick="BCWDesigner.nudge(0,10)" class="designer-btn designer-btn-sm">⇓10</button>
        <button onclick="BCWDesigner.nudge(10,0)" class="designer-btn designer-btn-sm">⇒10</button>
      </div>

      <div class="designer-section-label">Layers</div>
      <div class="designer-actions">
        <button onclick="BCWDesigner.layerUp()" class="designer-btn">▲ Bring Forward</button>
        <button onclick="BCWDesigner.layerDown()" class="designer-btn">▼ Send Back</button>
        <button onclick="BCWDesigner.layerTop()" class="designer-btn">⤒ To Front</button>
        <button onclick="BCWDesigner.layerBottom()" class="designer-btn">⤓ To Back</button>
      </div>

      <div class="designer-section-label">Create (describe what you want)</div>
      <div class="designer-prompt-wrap">
        <textarea id="designer-prompt" class="designer-prompt" rows="3"
          placeholder="e.g. 'Add a small wooden bridge at 600,900 spanning 80px wide' or 'Create a rocky outcrop near the observatory'"></textarea>
        <button onclick="BCWDesigner.submitPrompt()" class="designer-btn designer-btn-prompt">Generate SVG</button>
        <div id="designer-prompt-result" class="designer-prompt-result"></div>
      </div>

      <div class="designer-section-label">Export</div>
      <div class="designer-actions">
        <button onclick="BCWDesigner.exportChanges()" class="designer-btn">📋 Copy Changes</button>
        <button onclick="BCWDesigner.saveToFile()" class="designer-btn">💾 Save to File</button>
        <button onclick="BCWDesigner.saveMapHTML()" class="designer-btn">🗺️ Save Full Map</button>
      </div>
      <div id="designer-export-output" class="designer-export-output"></div>

      <div class="designer-log" id="designer-log"></div>
    `;
    document.body.appendChild(panel);

    // Prevent panel interactions from propagating to map
    panel.addEventListener('mousedown', (e) => e.stopPropagation());
    panel.addEventListener('click', (e) => e.stopPropagation());

    highlightOverlay = document.createElement('div');
    highlightOverlay.id = 'designer-highlight';
    document.body.appendChild(highlightOverlay);

    const world = document.getElementById('map-world');
    world.addEventListener('click', onWorldClick, true);
    world.addEventListener('mousedown', onDragStart, true);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);
    world.addEventListener('mousemove', onMouseMove);

    document.getElementById('map-container').style.cursor = 'crosshair';
    log('Designer ON. Ctrl+Z = undo, Delete = remove element.');
  }

  function deactivate() {
    active = false;
    document.body.classList.remove('designer-mode');
    selectedEl = null;

    const world = document.getElementById('map-world');
    world.removeEventListener('click', onWorldClick, true);
    world.removeEventListener('mousedown', onDragStart, true);
    window.removeEventListener('mousemove', onDragMove);
    window.removeEventListener('mouseup', onDragEnd);
    world.removeEventListener('mousemove', onMouseMove);

    document.getElementById('map-container').style.cursor = '';
    if (panel) { panel.remove(); panel = null; }
    if (highlightOverlay) { highlightOverlay.remove(); highlightOverlay = null; }
    document.querySelectorAll('.designer-selected').forEach(el => el.classList.remove('designer-selected'));
  }

  // ─── Undo / Redo ───

  function saveUndoState(description) {
    // Snapshot: store what changed and how to reverse it
    undoStack.push({
      desc: description,
      // Store full map HTML - simple but effective for this use case
      snapshot: document.getElementById('map-world').innerHTML
    });
    if (undoStack.length > MAX_UNDO) undoStack.shift();
    redoStack = []; // Clear redo on new action
  }

  function undo() {
    if (undoStack.length === 0) { log('Nothing to undo.'); return; }
    const state = undoStack.pop();
    // Save current state to redo
    redoStack.push({
      desc: 'Redo: ' + state.desc,
      snapshot: document.getElementById('map-world').innerHTML
    });
    document.getElementById('map-world').innerHTML = state.snapshot;
    selectedEl = null;
    if (highlightOverlay) highlightOverlay.style.display = 'none';
    document.querySelectorAll('.designer-selected').forEach(el => el.classList.remove('designer-selected'));
    log('Undid: ' + state.desc);
  }

  function redo() {
    if (redoStack.length === 0) { log('Nothing to redo.'); return; }
    const state = redoStack.pop();
    undoStack.push({
      desc: state.desc,
      snapshot: document.getElementById('map-world').innerHTML
    });
    document.getElementById('map-world').innerHTML = state.snapshot;
    selectedEl = null;
    if (highlightOverlay) highlightOverlay.style.display = 'none';
    log('Redid: ' + state.desc);
  }

  // ─── Layer controls ───

  function layerUp() {
    if (!selectedEl) { log('Select an element first.'); return; }
    const next = selectedEl.nextElementSibling;
    if (next) {
      saveUndoState('Layer: bring forward');
      selectedEl.parentNode.insertBefore(next, selectedEl);
      log('Brought forward.');
    }
  }

  function layerDown() {
    if (!selectedEl) { log('Select an element first.'); return; }
    const prev = selectedEl.previousElementSibling;
    if (prev) {
      saveUndoState('Layer: send back');
      selectedEl.parentNode.insertBefore(selectedEl, prev);
      log('Sent back.');
    }
  }

  function layerTop() {
    if (!selectedEl) { log('Select an element first.'); return; }
    saveUndoState('Layer: to front');
    selectedEl.parentNode.appendChild(selectedEl);
    log('Moved to front.');
  }

  function layerBottom() {
    if (!selectedEl) { log('Select an element first.'); return; }
    saveUndoState('Layer: to back');
    selectedEl.parentNode.insertBefore(selectedEl, selectedEl.parentNode.firstElementChild);
    log('Moved to back.');
  }

  // ─── Delete ───

  function deleteSelected() {
    if (!selectedEl) { log('Select an element first.'); return; }
    saveUndoState('Delete element');
    selectedEl.remove();
    selectedEl = null;
    if (highlightOverlay) highlightOverlay.style.display = 'none';
    document.getElementById('designer-info').textContent = 'Element deleted.';
    document.getElementById('designer-props').innerHTML = '';
    log('Deleted element. Ctrl+Z to undo.');
  }

  // ─── AI Prompt ───

  function submitPrompt() {
    const textarea = document.getElementById('designer-prompt');
    const resultEl = document.getElementById('designer-prompt-result');
    const prompt = textarea.value.trim();
    if (!prompt) { log('Enter a description first.'); return; }

    resultEl.innerHTML = '<div style="color:#ff8888;font-size:0.75rem;">Generating... (paste the SVG from Claude into the result box below)</div>';

    // Build context about cursor position and selected element
    const mouseEl = document.getElementById('designer-mouse-coords');
    const mouseCoords = mouseEl ? mouseEl.textContent : '';

    // Create a copyable prompt for the user to send to Claude
    const fullPrompt = `Generate SVG markup for the Bit Cryptic World island map.

Request: ${prompt}

Context:
- Map is 2400x2100px, dark ocean (#050a18), green island
- Color palette: navy #050a18, gold #ffd700, grass greens #4a8a3a to #2d5a27
- Sand: #e8d5a3, wet sand: #c4a86c, wood: #8b6914
- Style: flat/illustrated, soft gradients, low opacity layers
- ${mouseCoords}
${selectedEl ? '- Selected element: ' + (selectedEl.id || selectedEl.tagName) : ''}

Return ONLY the raw SVG elements (path, rect, circle, etc.) — no <svg> wrapper, no explanation. These will be inserted directly into the island SVG.`;

    // Show the prompt and a paste area
    resultEl.innerHTML = `
      <div style="color:rgba(255,255,255,0.5);font-size:0.7rem;margin-bottom:4px;">Prompt copied! Paste Claude's SVG response below:</div>
      <textarea id="designer-ai-result" class="designer-prompt" rows="4" placeholder="Paste generated SVG here..."></textarea>
      <button onclick="BCWDesigner.insertAIResult()" class="designer-btn designer-btn-prompt" style="margin-top:4px;">Insert into Map</button>
    `;

    navigator.clipboard.writeText(fullPrompt).then(() => {
      log('AI prompt copied to clipboard. Send it to Claude, then paste the SVG result back.');
    }).catch(() => {
      // Fallback: show prompt in a textarea for manual copy
      resultEl.innerHTML = `
        <div style="color:rgba(255,255,255,0.5);font-size:0.7rem;">Copy this prompt, send to Claude:</div>
        <textarea class="designer-prompt" rows="3" readonly onclick="this.select()">${fullPrompt.replace(/</g, '&lt;')}</textarea>
        <div style="color:rgba(255,255,255,0.5);font-size:0.7rem;margin-top:6px;">Then paste the SVG result here:</div>
        <textarea id="designer-ai-result" class="designer-prompt" rows="4" placeholder="Paste generated SVG here..."></textarea>
        <button onclick="BCWDesigner.insertAIResult()" class="designer-btn designer-btn-prompt" style="margin-top:4px;">Insert into Map</button>
      `;
      log('Prompt shown. Copy it, send to Claude, paste result back.');
    });
  }

  function insertAIResult() {
    const textarea = document.getElementById('designer-ai-result');
    if (!textarea) return;
    const svg = textarea.value.trim();
    if (!svg) { log('Paste SVG first.'); return; }

    saveUndoState('Insert AI-generated SVG');

    // Find the island SVG to insert into
    const islandSvg = document.querySelector('.island-svg');
    if (islandSvg) {
      // Create a group for the AI content
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'ai-generated');
      g.innerHTML = svg;
      islandSvg.appendChild(g);
      log('Inserted AI SVG into island map. Ctrl+Z to undo.');
    } else {
      // Fallback: insert into map-world as HTML
      const wrapper = document.createElement('div');
      wrapper.className = 'ai-generated';
      wrapper.style.position = 'absolute';
      wrapper.style.left = '0';
      wrapper.style.top = '0';
      wrapper.innerHTML = `<svg class="island-svg" style="position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none;">${svg}</svg>`;
      document.getElementById('map-world').appendChild(wrapper);
      log('Inserted AI SVG as overlay. Ctrl+Z to undo.');
    }

    document.getElementById('designer-prompt-result').innerHTML = '<div style="color:#44ff44;font-size:0.75rem;">Inserted! Click elements to adjust.</div>';
  }

  // ─── Mouse & Selection ───

  function onMouseMove(e) {
    if (!active) return;
    const coords = screenToMap(e.clientX, e.clientY);
    const el = document.getElementById('designer-mouse-coords');
    if (el) el.textContent = `Mouse: ${Math.round(coords.x)}, ${Math.round(coords.y)}`;
  }

  function screenToMap(clientX, clientY) {
    const world = document.getElementById('map-world');
    const rect = world.getBoundingClientRect();
    const s = typeof scale !== 'undefined' ? scale : 1;
    return { x: (clientX - rect.left) / s, y: (clientY - rect.top) / s };
  }

  function onWorldClick(e) {
    if (!active || dragging) return;
    e.stopPropagation();
    e.preventDefault();
    const target = findSelectableElement(e.target);
    if (target) selectElement(target);
  }

  function findSelectableElement(el) {
    let current = el;
    while (current && current.id !== 'map-world') {
      if (current.classList && current.classList.contains('location')) return current;
      if (['path','rect','circle','ellipse','polygon','line','text','g','image'].includes(current.tagName)) return current;
      if (current.classList && current.classList.contains('cloud')) return current;
      current = current.parentElement;
    }
    return null;
  }

  function selectElement(el) {
    document.querySelectorAll('.designer-selected').forEach(e => e.classList.remove('designer-selected'));
    selectedEl = el;
    el.classList.add('designer-selected');

    const info = document.getElementById('designer-info');
    const props = document.getElementById('designer-props');
    const tag = el.tagName.toLowerCase();
    const id = el.id || '';
    const cls = el.className?.baseVal || el.className || '';

    // Show parent chain for context
    let parentInfo = '';
    if (el.parentElement && el.parentElement.id !== 'map-world') {
      const p = el.parentElement;
      parentInfo = ` (in <${p.tagName.toLowerCase()}>${p.id ? '#' + p.id : ''})`;
    }

    info.textContent = `<${tag}>${id ? ' #' + id : ''}${cls ? ' .' + String(cls).split(' ')[0] : ''}${parentInfo}`;

    let propsHTML = '';

    if (el.classList && el.classList.contains('location')) {
      propsHTML = `
        <div class="prop-row"><label>left:</label><input type="number" value="${parseInt(el.style.left) || 0}" onchange="BCWDesigner.setProp('left', this.value + 'px')"></div>
        <div class="prop-row"><label>top:</label><input type="number" value="${parseInt(el.style.top) || 0}" onchange="BCWDesigner.setProp('top', this.value + 'px')"></div>
      `;
    } else if (tag === 'path') {
      const d = el.getAttribute('d') || '';
      propsHTML = `<div class="prop-row"><label>d:</label><textarea class="prop-path" onchange="BCWDesigner.setAttr('d', this.value)">${d}</textarea></div>`;
      ['fill','stroke','stroke-width','opacity'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v) propsHTML += `<div class="prop-row"><label>${attr}:</label><input type="text" value="${v}" onchange="BCWDesigner.setAttr('${attr}', this.value)"></div>`;
      });
    } else if (tag === 'circle') {
      ['cx','cy','r','fill','opacity'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v != null) propsHTML += `<div class="prop-row"><label>${attr}:</label><input type="${attr === 'fill' ? 'text' : 'number'}" step="any" value="${v}" onchange="BCWDesigner.setAttr('${attr}', this.value)"></div>`;
      });
    } else if (tag === 'ellipse') {
      ['cx','cy','rx','ry','fill','opacity'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v != null) propsHTML += `<div class="prop-row"><label>${attr}:</label><input type="${attr === 'fill' ? 'text' : 'number'}" step="any" value="${v}" onchange="BCWDesigner.setAttr('${attr}', this.value)"></div>`;
      });
    } else if (tag === 'rect') {
      ['x','y','width','height','rx','fill','opacity'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v != null) propsHTML += `<div class="prop-row"><label>${attr}:</label><input type="${attr === 'fill' ? 'text' : 'number'}" step="any" value="${v}" onchange="BCWDesigner.setAttr('${attr}', this.value)"></div>`;
      });
    } else if (tag === 'polygon') {
      const pts = el.getAttribute('points') || '';
      propsHTML = `<div class="prop-row"><label>points:</label><textarea class="prop-path" onchange="BCWDesigner.setAttr('points', this.value)">${pts}</textarea></div>`;
      ['fill','opacity'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v) propsHTML += `<div class="prop-row"><label>${attr}:</label><input type="text" value="${v}" onchange="BCWDesigner.setAttr('${attr}', this.value)"></div>`;
      });
    }

    props.innerHTML = propsHTML;
    updateHighlight();
  }

  function updateHighlight() {
    if (!selectedEl || !highlightOverlay) return;
    const rect = selectedEl.getBoundingClientRect();
    highlightOverlay.style.left = rect.left + 'px';
    highlightOverlay.style.top = rect.top + 'px';
    highlightOverlay.style.width = rect.width + 'px';
    highlightOverlay.style.height = rect.height + 'px';
    highlightOverlay.style.display = 'block';
  }

  // ─── Drag ───

  function onDragStart(e) {
    if (!active || !selectedEl) return;
    const target = findSelectableElement(e.target);
    if (!target || target !== selectedEl) return;
    e.stopPropagation();
    e.preventDefault();

    saveUndoState('Move element');
    dragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;

    if (selectedEl.classList && selectedEl.classList.contains('location')) {
      elStartX = parseInt(selectedEl.style.left) || 0;
      elStartY = parseInt(selectedEl.style.top) || 0;
    } else if (selectedEl.tagName === 'circle' || selectedEl.tagName === 'ellipse') {
      elStartX = parseFloat(selectedEl.getAttribute('cx')) || 0;
      elStartY = parseFloat(selectedEl.getAttribute('cy')) || 0;
    } else if (selectedEl.tagName === 'rect') {
      elStartX = parseFloat(selectedEl.getAttribute('x')) || 0;
      elStartY = parseFloat(selectedEl.getAttribute('y')) || 0;
    }
  }

  function onDragMove(e) {
    if (!dragging || !selectedEl) return;
    const s = typeof scale !== 'undefined' ? scale : 1;
    const dx = (e.clientX - dragStartX) / s;
    const dy = (e.clientY - dragStartY) / s;

    if (selectedEl.classList && selectedEl.classList.contains('location')) {
      selectedEl.style.left = Math.round(elStartX + dx) + 'px';
      selectedEl.style.top = Math.round(elStartY + dy) + 'px';
    } else if (selectedEl.tagName === 'circle' || selectedEl.tagName === 'ellipse') {
      selectedEl.setAttribute('cx', Math.round(elStartX + dx));
      selectedEl.setAttribute('cy', Math.round(elStartY + dy));
    } else if (selectedEl.tagName === 'rect') {
      selectedEl.setAttribute('x', Math.round(elStartX + dx));
      selectedEl.setAttribute('y', Math.round(elStartY + dy));
    }
    updateHighlight();
    selectElement(selectedEl);
  }

  function onDragEnd() {
    if (!dragging) return;
    dragging = false;
    if (selectedEl) {
      const tag = selectedEl.tagName.toLowerCase();
      let desc = '';
      if (selectedEl.classList && selectedEl.classList.contains('location')) {
        desc = `Moved ${selectedEl.id || 'location'} to left:${selectedEl.style.left} top:${selectedEl.style.top}`;
      } else if (tag === 'circle' || tag === 'ellipse') {
        desc = `Moved <${tag}> to cx:${selectedEl.getAttribute('cx')} cy:${selectedEl.getAttribute('cy')}`;
      } else if (tag === 'rect') {
        desc = `Moved <${tag}> to x:${selectedEl.getAttribute('x')} y:${selectedEl.getAttribute('y')}`;
      }
      if (desc) { log(desc); changeLog.push(desc); }
    }
  }

  // ─── Property setters ───

  function setProp(prop, value) {
    if (!selectedEl) return;
    saveUndoState(`Set ${prop}`);
    selectedEl.style[prop] = value;
    log(`Set ${prop} = ${value}`);
    changeLog.push(`${selectedEl.id || selectedEl.tagName}: ${prop} = ${value}`);
    updateHighlight();
  }

  function setAttr(attr, value) {
    if (!selectedEl) return;
    saveUndoState(`Set ${attr}`);
    selectedEl.setAttribute(attr, value);
    log(`Set ${attr} = ${value}`);
    changeLog.push(`${selectedEl.id || selectedEl.tagName}: ${attr} = ${value}`);
    updateHighlight();
  }

  function nudge(dx, dy) {
    if (!selectedEl) return;
    saveUndoState('Nudge');

    if (selectedEl.classList && selectedEl.classList.contains('location')) {
      const x = (parseInt(selectedEl.style.left) || 0) + dx;
      const y = (parseInt(selectedEl.style.top) || 0) + dy;
      selectedEl.style.left = x + 'px';
      selectedEl.style.top = y + 'px';
    } else if (selectedEl.tagName === 'circle' || selectedEl.tagName === 'ellipse') {
      selectedEl.setAttribute('cx', (parseFloat(selectedEl.getAttribute('cx')) || 0) + dx);
      selectedEl.setAttribute('cy', (parseFloat(selectedEl.getAttribute('cy')) || 0) + dy);
    } else if (selectedEl.tagName === 'rect') {
      selectedEl.setAttribute('x', (parseFloat(selectedEl.getAttribute('x')) || 0) + dx);
      selectedEl.setAttribute('y', (parseFloat(selectedEl.getAttribute('y')) || 0) + dy);
    }
    selectElement(selectedEl);
    updateHighlight();
  }

  function copySelected() {
    if (!selectedEl) return;
    const text = selectedEl.classList && selectedEl.classList.contains('location')
      ? `style="left: ${selectedEl.style.left}; top: ${selectedEl.style.top};"`
      : selectedEl.outerHTML;
    navigator.clipboard.writeText(text).then(() => log('Copied to clipboard!')).catch(() => { console.log(text); log('Logged to console.'); });
  }

  function exportChanges() {
    if (changeLog.length === 0) { log('No changes to export.'); return; }
    const text = changeLog.join('\n');
    // Show in panel AND copy to clipboard
    const outputEl = document.getElementById('designer-export-output');
    if (outputEl) {
      outputEl.innerHTML = `
        <div class="designer-export-label">${changeLog.length} changes:</div>
        <textarea class="designer-export-textarea" readonly onclick="this.select()">${text}</textarea>
      `;
    }
    navigator.clipboard.writeText(text).then(() => log(`${changeLog.length} changes copied to clipboard.`)).catch(() => log('Shown below. Select and copy manually.'));
  }

  function saveToFile() {
    if (changeLog.length === 0) { log('No changes to save.'); return; }
    const text = '=== BCW Designer Changes ===\n' +
      'Date: ' + new Date().toISOString() + '\n\n' +
      changeLog.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `map-changes-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    log('Changes saved to file.');
  }

  function saveMapHTML() {
    // Save the entire current map-world HTML so you can restore it
    const html = document.getElementById('map-world').innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `map-world-${new Date().toISOString().split('T')[0]}.html`;
    a.click();
    URL.revokeObjectURL(url);
    log('Full map HTML saved to file.');
  }

  function log(msg) {
    const logEl = document.getElementById('designer-log');
    if (!logEl) return;
    const line = document.createElement('div');
    line.className = 'designer-log-line';
    line.textContent = msg;
    logEl.insertBefore(line, logEl.firstChild);
    while (logEl.children.length > 30) logEl.removeChild(logEl.lastChild);
  }

  return {
    init, toggle, undo, redo,
    layerUp, layerDown, layerTop, layerBottom,
    deleteSelected, submitPrompt, insertAIResult,
    setProp, setAttr, nudge, copySelected,
    exportChanges, saveToFile, saveMapHTML
  };
})();
