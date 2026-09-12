// Forest story art. Shared scenery keeps the six narrative beats continuous.
// All clue strings preserved from the September 8 handoff.
(() => {
  const seatedFox = "<path d=\"M133,238 Q155,231 180,234 Q198,236 194,241 Q168,246 138,243 Q128,241 133,238 Z\" fill=\"#0a1a0e\" opacity=\"0.5\"/>\n<!-- brush: drawn BEFORE the body so it tucks behind the rump -->\n<path d=\"M141,222 Q120,224 110,215 Q101,206 108,199 Q116,193 126,201 Q134,208 146,210 Z\" fill=\"#b85e2e\"/>\n<path d=\"M141,222 Q124,223 114,216 Q122,214 130,209 Q136,214 146,212 Z\" fill=\"#d4703a\" opacity=\"0.7\"/>\n<path d=\"M112,214 Q104,209 106,203 Q113,200 117,206 Q116,211 112,214 Z\" fill=\"#e8c8a0\" opacity=\"0.75\"/>\n<!-- hind leg and front legs, tapering to paws -->\n<path d=\"M146,224 Q142,231 139,238 Q142,241 147,240 Q149,232 152,226 Z\" fill=\"#b85e2e\"/>\n<path d=\"M139,238 Q143,236 148,238 Q147,241 142,241 Q138,240 139,238 Z\" fill=\"#c06030\"/>\n<path d=\"M165,226 Q164,234 166,240 Q170,242 173,239 Q172,232 172,226 Z\" fill=\"#c06030\"/>\n<path d=\"M164,240 Q168,238 174,240 Q173,243 168,243 Q163,242 164,240 Z\" fill=\"#b85e2e\"/>\n<path d=\"M173,224 Q173,232 175,239 Q179,241 182,238 Q180,231 180,225 Z\" fill=\"#c06030\"/>\n<path d=\"M172,239 Q177,237 183,239 Q182,242 176,242 Q171,241 172,239 Z\" fill=\"#b85e2e\"/>\n<!-- body: rump low and heavy, rising to a narrower chest -->\n<path d=\"M137,220 Q131,205 143,197 Q158,190 170,196 Q180,201 180,214 Q180,226 168,229 Q150,231 137,220 Z\" fill=\"#d4703a\"/>\n<path d=\"M148,224 Q142,214 150,206 Q160,201 170,206 Q176,212 174,222 Q162,228 148,224 Z\" fill=\"#e8a060\" opacity=\"0.4\"/>\n<!-- neck and chest bib -->\n<path d=\"M168,203 Q176,196 184,199 Q188,206 184,213 Q176,214 168,210 Z\" fill=\"#d4703a\"/>\n<path d=\"M170,212 Q176,208 183,211 Q182,218 175,219 Q169,217 170,212 Z\" fill=\"#e8c8a0\" opacity=\"0.55\"/>\n<!-- head: a wedge, wide at the skull, tapering to the muzzle -->\n<path d=\"M170,199 Q170,187 180,183 Q192,180 197,189 Q200,197 194,204 Q182,208 170,199 Z\" fill=\"#d4703a\"/>\n<path d=\"M191,196 Q199,194 202,199 Q200,204 193,204 Q189,201 191,196 Z\" fill=\"#c06030\"/>\n<path d=\"M198,198 Q202,197 203,200 Q201,202 198,201 Z\" fill=\"#1a1a1a\"/>\n<!-- ears: outer shell, inner shell, set on the skull not floating above it -->\n<path d=\"M172,190 Q168,178 170,169 Q177,177 181,185 Z\" fill=\"#c06030\"/>\n<path d=\"M173,188 Q171,180 172,174 Q176,180 178,186 Z\" fill=\"#e8a060\" opacity=\"0.55\"/>\n<path d=\"M186,185 Q188,173 193,166 Q195,176 194,188 Z\" fill=\"#c06030\"/>\n<path d=\"M188,184 Q190,177 192,172 Q193,179 192,186 Z\" fill=\"#e8a060\" opacity=\"0.55\"/>\n<!-- muzzle line and the eyes, glowing green in the undergrowth dark -->\n<path d=\"M186,199 Q191,201 196,200\" fill=\"none\" stroke=\"#a04f24\" stroke-width=\"0.8\" opacity=\"0.5\" stroke-linecap=\"round\"/>\n<circle cx=\"180\" cy=\"192\" r=\"4.6\" fill=\"url(#foxEyeGlow)\" opacity=\"0.4\"/>\n<circle cx=\"190\" cy=\"191\" r=\"4.6\" fill=\"url(#foxEyeGlow)\" opacity=\"0.4\"/>\n<path d=\"M177,192 Q179,189 182,191 Q181,195 178,194 Z\" fill=\"#7fff7f\" opacity=\"0.9\"><animate attributeName=\"opacity\" values=\"0.7;1;0.7\" dur=\"3s\" repeatCount=\"indefinite\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" keySplines=\"0.42 0 0.58 1;0.42 0 0.58 1\"/></path>\n<path d=\"M187,191 Q189,188 192,190 Q191,194 188,193 Z\" fill=\"#7fff7f\" opacity=\"0.9\"><animate attributeName=\"opacity\" values=\"0.7;1;0.7\" dur=\"3.4s\" begin=\"0.3s\" repeatCount=\"indefinite\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" keySplines=\"0.42 0 0.58 1;0.42 0 0.58 1\"/></path>\n<path d=\"M179,192 Q180,190 181,192 Q180,194 179,192 Z\" fill=\"#1a3a1a\"/>\n<path d=\"M189,191 Q190,189 191,191 Q190,193 189,191 Z\" fill=\"#1a3a1a\"/>\n\n";
  const runningFox = "<path d=\"M312,238 Q340,231 372,234 Q392,236 386,241 Q356,246 320,243 Q306,241 312,238 Z\" fill=\"#0a1a0e\" opacity=\"0.45\"/>\n<!-- brush streaming behind, drawn first so the rump overlaps its root -->\n<path d=\"M334,206 Q312,200 296,206 Q282,212 285,222 Q290,231 303,228 Q317,223 336,222 Z\" fill=\"#b85e2e\"/>\n<path d=\"M334,208 Q314,204 300,209 Q292,213 294,219 Q305,221 316,216 Q325,212 336,214 Z\" fill=\"#d4703a\" opacity=\"0.6\"/>\n<path d=\"M295,207 Q283,212 285,222 Q291,230 299,226 Q294,217 297,209 Z\" fill=\"#e8c8a0\" opacity=\"0.75\"/>\n<!-- trailing hind legs, extended back -->\n<path d=\"M336,214 Q332,222 324,229 Q320,232 322,236 Q327,238 330,234 Q338,227 344,219 Z\" fill=\"#b85e2e\"/>\n<path d=\"M319,233 Q324,232 329,235 Q326,238 321,238 Q317,236 319,233 Z\" fill=\"#c06030\"/>\n<path d=\"M346,216 Q343,225 337,232 Q333,235 335,239 Q340,241 343,236 Q349,228 353,221 Z\" fill=\"#c06030\"/>\n<path d=\"M331,236 Q336,234 341,237 Q338,240 333,240 Q329,238 331,236 Z\" fill=\"#b85e2e\"/>\n<!-- reaching forelegs -->\n<path d=\"M362,212 Q368,221 375,229 Q379,231 380,227 Q375,218 370,210 Z\" fill=\"#c06030\"/>\n<path d=\"M373,230 Q378,229 382,232 Q380,235 375,235 Q371,233 373,230 Z\" fill=\"#b85e2e\"/>\n<path d=\"M354,214 Q358,224 362,233 Q366,236 369,232 Q365,222 362,213 Z\" fill=\"#b85e2e\"/>\n<path d=\"M360,234 Q365,233 369,236 Q367,239 362,239 Q358,237 360,234 Z\" fill=\"#c06030\"/>\n<!-- body: stretched, deeper at the chest than the waist -->\n<path d=\"M330,214 Q328,203 342,199 Q358,195 370,201 Q378,206 376,216 Q372,224 356,225 Q340,224 330,214 Z\" fill=\"#d4703a\"/>\n<path d=\"M340,217 Q337,209 348,205 Q360,202 368,207 Q372,213 368,219 Q354,222 340,217 Z\" fill=\"#e8a060\" opacity=\"0.4\"/>\n<!-- neck thrown forward, chest bib -->\n<path d=\"M366,203 Q374,197 382,200 Q386,207 382,213 Q374,215 366,211 Z\" fill=\"#d4703a\"/>\n<path d=\"M368,212 Q374,208 381,211 Q380,217 373,218 Q367,216 368,212 Z\" fill=\"#e8c8a0\" opacity=\"0.5\"/>\n<!-- head, low and level with the run -->\n<path d=\"M368,201 Q368,191 378,187 Q389,185 394,193 Q396,200 390,206 Q378,209 368,201 Z\" fill=\"#d4703a\"/>\n<path d=\"M388,199 Q395,197 398,201 Q396,206 390,206 Q386,203 388,199 Z\" fill=\"#c06030\"/>\n<path d=\"M395,201 Q398,200 399,202 Q397,204 395,203 Z\" fill=\"#1a1a1a\"/>\n<!-- ears swept back by the run -->\n<path d=\"M370,192 Q364,183 363,175 Q371,181 377,188 Z\" fill=\"#c06030\"/>\n<path d=\"M371,190 Q367,184 366,180 Q371,184 374,189 Z\" fill=\"#e8a060\" opacity=\"0.5\"/>\n<path d=\"M383,188 Q382,178 385,171 Q389,179 389,190 Z\" fill=\"#c06030\"/>\n<path d=\"M384,187 Q384,181 386,177 Q388,182 387,188 Z\" fill=\"#e8a060\" opacity=\"0.5\"/>\n<!-- eyes -->\n<path d=\"M375,195 Q377,192 380,194 Q379,198 376,197 Z\" fill=\"#7fff7f\" opacity=\"0.85\"/>\n<path d=\"M385,194 Q387,191 390,193 Q389,197 386,196 Z\" fill=\"#7fff7f\" opacity=\"0.85\"/>\n<path d=\"M377,195 Q378,193 379,195 Q378,197 377,195 Z\" fill=\"#1a3a1a\"/>\n<path d=\"M387,194 Q388,192 389,194 Q388,196 387,194 Z\" fill=\"#1a3a1a\"/>\n\n";
  const oakClues = ["Yelp in","sidebar knowledge (4)","Page from the","whole affair (4)","Long for an","evergreen (4)"];
  const stoneClue = ["Face remodelled into","a place for coffee (4)"];

  // Layered boughs with broken needle tips and flat light-facing planes.
  function pine(x, y, s, color, light) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-5 78 L-8 141 Q0 138 8 141 L4 78" fill="#241a12"/>
      <path d="M0 0 Q-4 22 -15 31 L-9 28 Q-17 45 -28 50 L-21 50 L-24 54 L-16 51 Q-28 67 -40 74 L-32 75 L-36 80 L-26 76 Q-35 94 -53 104 L-43 104 L-47 110 L-34 106 L-36 113 L-22 109 L-25 115 L-9 110 L-3 115 L4 110 L12 114 L19 108 L28 113 L34 108 L46 112 L42 105 L55 106 Q36 91 28 77 L40 80 L36 74 L43 76 Q27 63 20 52 L30 54 L26 49 L32 51 Q15 35 10 29 L17 32 Q5 15 0 0Z" fill="${color}"/>
      <path d="M0 10 L-9 28 L-4 25 L-2 29 L3 26Z M-9 39 L-22 50 L-13 48 L-7 49 L-2 46Z M-18 62 L-33 74 L-23 71 L-17 74 L-8 69Z M-25 89 L-43 105 L-29 100 L-24 104 L-12 99Z" fill="${light}" opacity=".7"/>
    </g>`;
  }
  function mushroom(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="2" rx="15" ry="4" fill="#4af5a0" opacity=".08"/>
      <path d="M-2 0 L-1 -11 L2 -11 L3 0Z" fill="#cfe6d2"/>
      <path d="M-10 -10 Q-9 -20 0 -20 Q9 -19 10 -10 Q0 -6 -10 -10Z" fill="#4af5a0" stroke="#1a4a25" stroke-width="1"/>
      <path d="M-6 -13 Q0 -18 5 -13" fill="none" stroke="#cfe6d2" stroke-width="1.4" opacity=".6"/>
    </g>`;
  }
  function fern(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})" fill="#22482a" stroke="#0d2218" stroke-width="1">
      <path d="M0 0 Q-25 -5 -36 -23 Q-18 -22 -6 -7 Q-22 -34 -18 -44 Q-2 -31 0 -11 Q5 -37 21 -43 Q21 -22 5 -6 Q24 -23 39 -20 Q26 -3 0 0Z"/>
      <path d="M0 0 Q-4 -20 -18 -38 M0 0 Q9 -20 21 -37" fill="none" stroke="#4a7a28"/>
    </g>`;
  }
  function trail(destination) {
    if (destination === 'oak' || destination === 'stone') {
      return `<path d="M204 260 L211 249 Q178 245 177 232 L190 216 Q226 203 261 211 L313 216 L353 230 L361 244 L332 260Z" fill="#5a4826"/>
        <path d="M227 260 L232 247 L213 239 L220 228 L253 224 L284 230 L296 245 L282 260Z" fill="#8a7a40" opacity=".22"/>`;
    }
    if (destination === 'cafe') {
      return `<path d="M332 151 C326 178 318 201 203 260H342 C371 211 365 178 346 151Z" fill="#5a4826"/>
        <path d="M337 157 L341 174 L335 191 L344 185 L341 162Z M324 214 L294 238 L257 260H281 L317 235Z" fill="#8a7a40" opacity=".32"/>`;
    }
    return `<path d="M267 116 C242 137 256 152 292 168 C346 194 275 225 203 260H342 C406 205 375 182 326 162 C284 145 271 134 274 116Z" fill="#5a4826"/>
      <path d="M269 137 L275 148 L303 163 L288 151Z M326 184 L333 194 L323 208 L339 201 L341 194Z M298 227 L257 249 L242 260H265 L297 240Z" fill="#8a7a40" opacity=".3"/>
      <path d="M241 126 L249 117 L256 121 L259 111 L266 119 L273 113 L277 122 L287 116 L291 128 L277 132 L259 128Z" fill="#153222"/>`;
  }
  function background(id, warm = false, destination = 'woods') {
    return `<defs>
      <linearGradient id="${id}Sky" x2="0" y2="1"><stop stop-color="#0a1a10"/><stop offset="1" stop-color="#22482a"/></linearGradient>
      <radialGradient id="${id}Air"><stop stop-color="${warm ? '#e8a060' : '#cfe6d2'}" stop-opacity=".22"/><stop offset="1" stop-color="#22482a" stop-opacity="0"/></radialGradient>
      <radialGradient id="${id}Eye"><stop stop-color="#7fff7f" stop-opacity=".8"/><stop offset="1" stop-color="#7fff7f" stop-opacity="0"/></radialGradient>
      <radialGradient id="${id}Lamp"><stop stop-color="#ffd700" stop-opacity=".3"/><stop offset="1" stop-color="#e8a060" stop-opacity="0"/></radialGradient>
    </defs>
    <path d="M0 0H500V260H0Z" fill="url(#${id}Sky)"/>
    <ellipse cx="310" cy="99" rx="200" ry="155" fill="url(#${id}Air)"/>
    ${[[-5,4,.9],[60,-15,1.1],[126,12,.8],[182,-9,.96],[239,10,.72],[305,-20,1.1],[374,4,.86],[445,-12,1.05],[505,0,.9]].map(([x,y,s]) => pine(x,y,s,'#1a3a20','#22482a')).join('')}
    <path d="M0 135 Q80 112 152 143 Q226 117 293 143 Q398 106 500 133V260H0Z" fill="#153222"/>
    <path d="M0 174 Q126 140 224 172 Q380 132 500 172V260H0Z" fill="#1a3a20"/>
    ${trail(destination)}
    <path d="M118 140 Q236 129 334 139 Q385 143 430 138 Q370 153 259 144 Q184 139 118 145Z" fill="#cfe6d2" opacity=".07"/>
    ${pine(100,-31,1.52,'#133020','#22482a')}
    ${pine(432,-46,1.75,'#112a18','#1a3a20')}
    <path d="M0 209 Q63 185 156 212 L192 260H0Z M390 224 Q445 196 500 206V260H366Z" fill="#112a18"/>
    ${[[111,202,.55],[135,210,.4],[360,222,.65],[377,228,.4],[187,238,.7],[301,160,.22],[268,146,.18]].map(p => mushroom(...p)).join('')}
    <path d="M221 229 l12 -4 10 2 -12 4Z M320 195 l9 -2 6 2 -9 2Z M278 157 l6 -1 4 2 -6 1Z" fill="#cfe6d2" opacity=".16"/>`;
  }
  function foreground() {
    return `<path d="M0 0H38 Q25 61 32 120 Q32 185 57 237 L79 250 Q42 249 26 235 L0 249Z" fill="#0a1a0e"/>
      <path d="M19 0 Q12 92 20 169 Q22 203 33 222" fill="none" stroke="#241a12" stroke-width="6"/>
      <path d="M500 0H468 Q482 79 473 146 Q471 204 443 242 L421 252 Q466 248 485 234L500 239Z" fill="#0a1a0e"/>
      <path d="M24 48 Q78 48 105 12 L122 0H100 Q76 27 26 29Z M477 56 Q422 41 401 0H417 Q440 29 478 33Z" fill="#0a1a0e"/>
      <path d="M0 0H500V13 L477 9 L484 17 L462 13 L465 20 L439 11 L429 18 L405 12 L411 21 L380 9 L368 16 L343 8 L348 15 L327 0 L308 12 L297 8 L285 18 L265 7 L245 5 L233 17 L221 10 L206 20 L178 8 L166 18 L146 14 L150 23 L125 14 L108 14 L88 26 L79 21 L62 31 L40 21 L24 26 L0 20Z" fill="#0d2218"/>
      ${fern(51,256,1)}${fern(449,257,-1)}${fern(91,248,.65)}
      <path d="M0 255 Q81 244 149 260H0Z M405 260 Q467 244 500 252V260Z" fill="#0a1a0e"/>`;
  }
  function motes(warm = false) {
    return [[145,100,1.2],[334,79,1],[224,129,.8],[389,156,1.5],[80,180,1]].map(([x,y,r],i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${warm ? '#ffd700' : '#ffffaa'}" opacity=".55"><animate attributeName="opacity" values=".25;.7;.25" dur="${4+i/2}s" repeatCount="indefinite"/></circle>`).join('');
  }
  function wrap(id, content, label) {
    return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${id}Title"><title id="${id}Title">${label}</title>${content}</svg>`;
  }
  for (const n of [0, 2]) {
    const id = 'forest' + n;
    const glimpse = n === 2 ? `<g transform="translate(256 5) scale(.83)">${seatedFox.replaceAll('foxEyeGlow', id+'Eye')}</g>
      <path d="M361 215 L369 199 L373 204 L379 190 L384 199 L390 187 L395 201 L404 193 L409 202 L416 198 L421 207 L433 227Z" fill="#133020"/>` : '';
    STORY_SCENES['forest_'+n] = wrap(id, background(id)+glimpse+foreground()+motes(), n === 0 ? 'The trail beneath the pines' : 'A fox watches from the undergrowth');
  }
  const oak = `<path d="M183 -10 Q188 52 170 83 L125 60 L108 32 L98 35 L113 79 L170 113 Q174 178 151 220 L118 239 Q159 242 192 222 Q226 240 254 232 Q287 247 353 244 L325 228 Q306 194 307 123 L353 80 L377 30 L363 27 L337 70 L302 82 Q296 40 319 -10Z" fill="#4a3018" stroke="#241a12" stroke-width="4" stroke-linejoin="round"/>
    <path d="M187 0 Q198 54 187 119 Q187 188 171 217 L150 232 L188 219 Q212 229 220 229 Q200 187 204 124 L218 0Z" fill="#5a3a20"/>
    <path d="M282 0 Q266 67 279 127 Q275 185 297 225 L331 239 L307 213 Q294 164 302 119 L327 96 L312 90 Q282 52 307 0Z" fill="#2a1a0c"/>
    <path d="M182 89 L143 73 M197 12 Q208 48 199 80 M185 163 Q180 196 170 211 M294 138 Q286 191 310 222 M234 0 Q224 31 236 59 M269 11 Q257 42 268 63" fill="none" stroke="#241a12" stroke-width="3" stroke-linecap="round"/>
    <path d="M202 78 Q233 67 275 79 L279 207 Q245 219 201 205 Q209 137 202 78Z" fill="#5a3a20"/>
    <path d="M210 81 Q240 75 271 82 M208 208 Q243 216 275 209" fill="none" stroke="#6b4826" stroke-width="2"/>
    ${oakClues.map((t,i) => `<text x="240" y="${99+Math.floor(i/2)*43+(i%2)*15}" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-size="${i<4?10:9.5}" font-weight="700">${t}</text>`).join('')}
    <path d="M68 27 L63 12 L75 -7 L122 -4 L178 -5 L223 3 L270 7 L323 -1 L371 5 L410 3 L432 21 L420 27 L426 35 L403 33 L399 41 L380 38 L366 47 L350 37 L332 43 L315 38 L308 43 L291 30 L272 39 L257 34 L243 39 L237 26 L215 34 L202 30 L193 38 L183 26 L164 38 L149 32 L130 31 L115 40 L102 34 L88 39 L83 30Z" fill="#133020"/>
    <path d="M88 17 L106 7 L126 13 L107 12Z M144 15 L166 7 L183 17 L162 12Z M306 17 L329 8 L347 20 L330 15Z M365 24 L388 16 L405 28 L382 23Z" fill="#22482a"/>
    ${mushroom(149,239,.6)}${mushroom(331,246,.45)}${fern(349,245,.55)}`;
  STORY_SCENES.forest_1 = wrap('forest1', background('forest1',false,'oak')+oak+foreground()+motes(), 'Cryptic clues carved into an ancient oak');

  const slab = `<ellipse cx="290" cy="232" rx="104" ry="14" fill="#0a1a0e" opacity=".5"/>
    <path d="M204 149 L223 132 L350 129 L373 149 L366 222 L345 236 L218 231 L201 210Z" fill="#3f3f4d" stroke="#1f1f28" stroke-width="3"/>
    <path d="M204 149 L223 132 L350 129 L373 149 L350 156 L222 158Z" fill="#71718a"/>
    <path d="M222 158 L350 156 L357 214 L341 223 L224 219Z" fill="#5f5f70"/>
    <path d="M204 149 L222 158 L224 219 L218 231 L201 210Z" fill="#2c2c38"/>
    <path d="M225 139 L347 137 M229 164 L342 162" fill="none" stroke="#8a8a9a" stroke-width="2"/>
    <path d="M352 157 L338 166 L345 173 M231 220 L238 209 L232 204" fill="none" stroke="#33333f" stroke-width="2"/>
    ${stoneClue.map((t,i) => `<text x="288" y="${181+i*16}" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-size="11" font-weight="700">${t}</text>`).join('')}
    <path d="M201 213 Q218 202 231 218 L241 229 Q217 234 201 225Z M342 231 Q351 215 369 212 L371 225Z" fill="#22482a"/>
    ${mushroom(374,235,.4)}`;
  STORY_SCENES.forest_3 = wrap('forest3', background('forest3',false,'stone')+slab+seatedFox.replaceAll('foxEyeGlow','forest3Eye')+foreground()+motes(), 'The fox beside the carved clue stone');

  function cafe(id) {
    return `<ellipse cx="339" cy="140" rx="38" ry="27" fill="url(#${id}Lamp)" opacity=".45"/>
      <!-- Town-style wall planes and hipped roof, with no perimeter stroke. -->
      <path d="M301 105 H370 V151 H301Z" fill="#647689"/>
      <path d="M370 105 L383 99 V146 L370 151Z" fill="#54667a"/>
      <path d="M301 145 H370 V151 H301Z" fill="#54667a"/>
      <path d="M295 105 L313 84 H353 L376 105Z" fill="#67798f"/>
      <path d="M353 84 H365 L389 99 L376 105Z" fill="#54667a"/>
      <path d="M295 105 H376 L389 99 V102 L376 108 H297Z" fill="#4a5468"/>
      <path d="M359 91 V76 H366 V97Z" fill="#6f8298"/>
      <path d="M366 76 L369 78 V95 L366 97Z M357 75 H368 V78 H357Z" fill="#54667a"/>
      <path d="M362 70 Q355 61 364 52 Q371 45 364 37" fill="none" stroke="#cfe6d2" stroke-width="2" opacity=".18" stroke-linecap="round"/>
      <!-- Recessed display window, counter and cup silhouettes. -->
      <path d="M306 121 H329 V140 H306Z M350 121 H365 V140 H350Z" fill="#4a5468"/>
      <path d="M307 122 H328 V138 H307Z M351 122 H364 V138 H351Z" fill="#e8c8a0" opacity=".85"/>
      <path d="M307 134 H328 V138 H307Z M351 134 H364 V138 H351Z" fill="#b85e2e" opacity=".4"/>
      <path d="M317 122 V134 M358 122 V134" stroke="#647689" stroke-width=".8"/>
      <path d="M310 131 H314 L313 134 H311Z M320 131 H324 L323 134 H321Z M354 131 H358 L357 134 H355Z" fill="#e8c8a0"/>
      <path d="M305 140 H330 V142 H305Z M349 140 H366 V142 H349Z" fill="#7d90a6"/>
      <path d="M332 119 H346 V151 H332Z" fill="#4a5468"/>
      <path d="M333 121 H345 V151 H333Z" fill="#e8a060"/>
      <path d="M334 124 H343 V140 H334Z" fill="#e8c8a0" opacity=".65"/>
      <circle cx="343" cy="144" r=".8" fill="#6b4826"/>
      <path d="M333 151 L345 151 L348 158 L329 158Z" fill="#e8a060" opacity=".12"/>
      <path d="M307 140 H328 L331 154 L294 154Z M351 140 H364 L382 155 L355 156Z" fill="#e8a060" opacity=".12"/>
      <!-- Awning and front eave share x=295..376; the hem clears the door. -->
      ${Array.from({length:8}, (_, i) => {
        const back = 301 + i * 8.625, front = 295 + i * 10.125;
        return `<path d="M${back} 108 H${back+8.625} L${front+10.125} 115 V117 Q${front+5.0625} 120 ${front} 117 V115Z" fill="${i%2 ? '#c9b28e' : '#8a4a3a'}"/>`;
      }).join('')}
      <path d="M295 115 H376" stroke="#6b4826" stroke-width=".5" opacity=".35"/>
      <path d="M301 108 H370" stroke="#e8c8a0" stroke-width=".6" opacity=".5"/>
      <!-- Small hanging cup plaque and an outdoor table. -->
      <path d="M378 108 H391 M389 108 V114" fill="none" stroke="#6b4826" stroke-width=".8"/>
      <path d="M382 114 H396 V126 H382Z" fill="#6b4826"/>
      <path d="M385 118 H391 V120 Q388 124 385 120Z M391 118 H393 V120 H391" fill="#e8c8a0"/>
      <path d="M384 123 H393" stroke="#e8c8a0" stroke-width=".7"/>
      <path d="M386 143 L384 154 M389 143 L392 154" stroke="#6b4826" stroke-width="1"/>
      <path d="M379 141 Q387 138 395 141 L394 143 H380Z" fill="#8a7a40"/>
      <path d="M385 137 H389 L388 140 H386Z" fill="#e8c8a0"/>
      <!-- Weathered direction board: thickness and grain instead of outlines. -->
      <path d="M174 190 L173 238 L180 239 L181 190Z" fill="#5a3a20"/>
      <path d="M175 193 L175 236 L177 238 L178 193Z" fill="#6b4826"/>
      <path d="M154 174 L223 170 L238 181 L225 193 L154 197Z" fill="#4a3018"/>
      <path d="M154 171 L224 168 L238 178 L225 190 L154 194Z" fill="#6b4826"/>
      <path d="M156 172 L223 169 L233 176 L222 171Z" fill="#8a7a40" opacity=".6"/>
      <path d="M158 189 L177 188 M205 172 L221 172 M212 187 L224 185" stroke="#5a3a20" stroke-width=".6"/>
      <text x="192" y="185" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-weight="700" font-size="8">CRYPTIC CAFE</text>
      <circle cx="177" cy="175" r=".8" fill="#cfe6d2" opacity=".5"/>
      <circle cx="176" cy="189" r=".8" fill="#cfe6d2" opacity=".4"/>`;
  }
  for (const n of [4,5]) {
    const id = 'forest'+n;
    const guide = n === 4 ? `<g transform="translate(22 32) scale(.82)">${runningFox}</g>` : '';
    STORY_SCENES['forest_'+n] = wrap(id, background(id,true,'cafe')+cafe(id)+guide+foreground()+motes(true), n === 4 ? 'The fox leads toward the cafe lights' : 'The cafe clearing after the fox has gone');
  }
})();
