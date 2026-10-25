// Forest story art. Shared scenery keeps the six narrative beats continuous.
// All clue strings preserved from the September 8 handoff.
// 2026-10 restyle: the fox is drawn as a natural animal (no ink outlines, one
// faint silhouette rim, shape-based shade + highlight, almond amber eye, slim
// socked legs), same pose and footprint in every fox scene. The woods gained
// a far misty plane, fog veils between planes, and lit/shadow sides on pines.
(() => {
  // Fox palette. No ink outlines: the fox reads by value against the dark
  // undergrowth. EDGE is one faint darker rim, used only on the outer
  // silhouette (brush, body, head, ears) so it is the same head to tail.
  const FB = '#d4703a', FS = '#a8502a', FH = '#f2a065', FC = '#f3e4c8', FK = '#3e2318', FN = '#2a1712';
  const EDGE = 'stroke="#6a2c12" stroke-width=".9" stroke-opacity=".5" stroke-linejoin="round"';
  const ES = '0.42 0 0.58 1';
  // A leg is a slim round-capped stroke, dark sock over the lower run, small paw.
  function foxLeg(d, sock, paw, fill) {
    return `<path d="${d}" fill="none" stroke="${fill}" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="${sock}" fill="none" stroke="${FK}" stroke-width="4.2" stroke-linecap="round"/>
<ellipse cx="${paw[0]}" cy="${paw[1] - .4}" rx="${paw[2] * .78}" ry="1.9" fill="${FK}"/>`;
  }
  // Head in profile, facing right, authored at the seated fox's position and
  // shifted for the runner: rounded skull, long tapering muzzle, tall ears with
  // dark backs, one almond amber eye. The faint halo keeps the
  // glow-in-the-undergrowth read; foxEyeGlow is replaced per scene.
  function foxHead(dx, dy, run) {
    const t = (x, y) => `${x + dx},${y + dy}`;
    const head = `M${t(175,193)} Q${t(172,180)} ${t(182,174)} Q${t(192,169)} ${t(199,175)} Q${t(203,180)} ${t(207,185)} Q${t(212,188.5)} ${t(213.5,192)} Q${t(213,195.5)} ${t(207,196.5)} Q${t(199,198.5)} ${t(191,200)} Q${t(180,201)} ${t(175,193)}Z`;
    const farEar = run ? `M${t(190,177)} Q${t(196,167)} ${t(205,163)} Q${t(203,172)} ${t(198,180)}Z` : `M${t(189,176)} Q${t(193,165)} ${t(198,157)} Q${t(202,167)} ${t(199,179)}Z`;
    const ear = run ? `M${t(177,181)} Q${t(180,169)} ${t(189,162)} Q${t(191,171)} ${t(189,178)}Z` : `M${t(177,180)} Q${t(176,167)} ${t(180,155)} Q${t(187,164)} ${t(190,176)}Z`;
    const inner = run ? `M${t(180,178)} Q${t(182,171)} ${t(187,166.5)} Q${t(188,172)} ${t(186.5,176)}Z` : `M${t(179.5,177)} Q${t(179,168)} ${t(181,161)} Q${t(185.5,167)} ${t(187.5,175)}Z`;
    const tip = run ? `M${t(185,165)} Q${t(187,163)} ${t(189,162)} Q${t(189.6,165)} ${t(189.6,167.5)} Q${t(187,166)} ${t(185,165)}Z` : `M${t(178.6,161)} Q${t(179,158)} ${t(180,155)} Q${t(183,158.5)} ${t(184.6,161.5)} Q${t(181.5,160.5)} ${t(178.6,161)}Z`;
    const farTip = run ? `M${t(201,166)} Q${t(203,164)} ${t(205,163)} Q${t(204.4,166)} ${t(203,168.5)}Z` : `M${t(195.6,162)} Q${t(197,159.5)} ${t(198,157)} Q${t(199.6,160)} ${t(200.2,163)}Z`;
    const eye = (cx, cy, b, d) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="5.5" fill="url(#foxEyeGlow)" opacity=".3"><animate attributeName="opacity" values=".15;.42;.15" keyTimes="0;.5;1" calcMode="spline" keySplines="${ES};${ES}" dur="${d}s" begin="${b}s" repeatCount="indefinite"/></circle>
<path d="M${t(cx + 3,cy + .6)} Q${t(cx + 6,cy + 3)} ${t(cx + 7.5,cy + 7)}" fill="none" stroke="${FS}" stroke-width="1.1" stroke-linecap="round" opacity=".55"/>
<path d="M${t(cx - 3.2,cy + .2)} Q${t(cx - .4,cy - 3.2)} ${t(cx + 3.4,cy + .4)} Q${t(cx,cy + 2.8)} ${t(cx - 3.2,cy + .2)}Z" fill="#d89a30"/>
<ellipse cx="${cx + dx + .5}" cy="${cy + dy}" rx=".8" ry="1.6" fill="${FN}"/>
<path d="M${t(cx - 3.2,cy + .2)} Q${t(cx - .4,cy - 3.2)} ${t(cx + 3.4,cy + .4)}" fill="none" stroke="${FN}" stroke-width=".8" stroke-linecap="round"/>
<circle cx="${cx + dx - .5}" cy="${cy + dy - .5}" r=".45" fill="#fbf3dc" opacity=".85"/>`;
    return `<path d="${farEar}" fill="${FS}" ${EDGE}/>
<path d="${farTip}" fill="${FK}" opacity=".9"/>
<path d="${head}" fill="${FB}" ${EDGE}/>
<path d="M${t(181,175.5)} Q${t(190,171)} ${t(198,176)} Q${t(190,174)} ${t(183,177.5)}Z" fill="${FH}" opacity=".7"/>
<path d="M${t(175,193)} Q${t(177,199.5)} ${t(185,200.6)} Q${t(179,196)} ${t(179,189)}Z" fill="${FS}" opacity=".8"/>
<path d="M${t(182,194)} Q${t(194,192.6)} ${t(208,195.6)} Q${t(205,197.4)} ${t(199,198.5)} Q${t(190,200.4)} ${t(184,200.4)} Q${t(180,198)} ${t(182,194)}Z" fill="${FC}"/>
<path d="${ear}" fill="${FB}" ${EDGE}/>
<path d="${inner}" fill="${FC}" opacity=".7"/>
<path d="${tip}" fill="${FK}"/>
<ellipse cx="${212.6 + dx}" cy="${191.6 + dy}" rx="1.8" ry="1.5" fill="${FN}"/>
<path d="M${t(204,195.4)} Q${t(208,195.6)} ${t(211,193.6)}" fill="none" stroke="${FS}" stroke-width=".7" stroke-linecap="round"/>
${eye(193, 182.5, 0, 3.4)}`;
  }

  // Seated fox, facing right. Footprint x 100..213, y 156..245, as before.
  const seatedFox = `<ellipse cx="158" cy="241" rx="38" ry="4.6" fill="#0a1a0e" opacity=".5"/>
<!-- brush: drawn BEFORE the body so it tucks behind the rump; a slow eased sway -->
<g><animateTransform attributeName="transform" type="rotate" values="0 144 226;-4 144 226;0 144 226" keyTimes="0;.4;1" calcMode="spline" keySplines="${ES};${ES}" dur="4.6s" repeatCount="indefinite"/>
<path d="M146,230 Q116,237 103,222 Q93,210 101,199 Q110,190 121,197 Q131,206 147,214 Z" fill="${FB}" ${EDGE}/>
<path d="M146,230 Q116,237 103,222 Q114,227 126,224 Q138,222 147,221 Z" fill="${FS}"/>
<path d="M103,222 Q93,210 101,199 Q107,195 112,198 Q105,207 110,218 Q109,223 103,222Z" fill="${FC}"/>
<path d="M110,199 Q118,195 127,203 Q118,200 112,202Z" fill="${FH}" opacity=".65"/>
</g>
<!-- far foreleg first, then one body silhouette (back, haunch, chest) -->
${foxLeg('M172,216 L172,235', 'M172,229 L172,235', [172, 238.6, 4.6], FS)}
<path d="M134,236 Q124,222 133,208 Q145,194 165,190 Q179,186 185,193 Q192,202 189,213 Q186,221 178,224 Q170,227 165,234 Q160,239 134,236Z" fill="${FB}" ${EDGE}/>
<path d="M135,236 Q131,229 136,224 Q150,232 162,232 Q170,230 176,225 Q170,228 165,234 Q160,239 135,236Z" fill="${FS}"/>
<path d="M144,208 Q156,195 172,193 Q160,198 150,210Z" fill="${FH}" opacity=".65"/>
<!-- haunch read by shading only: a shade crescent along its front edge -->
<path d="M158,235 Q166,226 162,215 Q158,207 148,206 Q160,212 162,222 Q163,230 158,235Z" fill="${FS}" opacity=".7"/>
<path d="M138,215 Q143,209 150,209 Q144,212 141,218Z" fill="${FH}" opacity=".5"/>
<ellipse cx="160" cy="238.2" rx="7" ry="2.2" fill="${FK}"/>
<!-- cream throat and chest, soft-edged, then the near foreleg -->
<path d="M179,194 Q190,198 190,210 Q188,219 182,223.5 Q179,214 178,206Z" fill="${FC}"/>
${foxLeg('M181,216 L181.5,235', 'M181.3,229 L181.5,235', [181.8, 238.6, 4.8], FB)}
<!-- head, ears and eye -->
${foxHead(0, 0, false)}
`;

  // Running fox, facing right. Footprint x 284..406, y 160..244, as before.
  const runningFox = `<ellipse cx="346" cy="239.5" rx="44" ry="4.6" fill="#0a1a0e" opacity=".45"/>
<!-- brush streaming behind, drawn first so the rump overlaps its root -->
<path d="M337,206 Q314,198 297,203 Q283,208 285,219 Q289,228 302,226 Q318,222 338,220Z" fill="${FB}" ${EDGE}/>
<path d="M338,220 Q318,222 302,226 Q289,228 285,219 Q296,222 310,217 Q324,214 338,214Z" fill="${FS}"/>
<path d="M297,203 Q283,208 285,219 Q289,228 302,226 Q294,219 296,211 Q297,206 301,203Z" fill="${FC}"/>
<path d="M303,205 Q316,200 330,206 Q316,203 305,207Z" fill="${FH}" opacity=".65"/>
<!-- far legs in shade: hind trailing back, fore reaching -->
${foxLeg('M346,216 Q341,227 331,234', 'M335,231 L331,234', [328.6, 236, 4.6], FS)}
${foxLeg('M372,210 Q380,219 382,228', 'M381.6,224 L382,228', [384, 231, 4.6], FS)}
<!-- body: stretched, deeper at the chest than the waist -->
<path d="M330,214 Q327,202 342,198 Q358,194 372,200 Q382,206 379,216 Q374,225 357,226 Q340,226 330,214Z" fill="${FB}" ${EDGE}/>
<path d="M332,218 Q344,222 358,221 Q372,220 379,214 Q376,224 357,226 Q340,226 332,218Z" fill="${FS}"/>
<path d="M339,202 Q352,195 367,198.5 Q353,198 342,204Z" fill="${FH}" opacity=".65"/>
<!-- near hind leg under the haunch; the haunch reads by shading only -->
${foxLeg('M339,220 Q334,230 324,236', 'M328,234 L324,236', [321.6, 238, 4.8], FB)}
<ellipse cx="340" cy="212" rx="11.5" ry="10" fill="${FB}"/>
<path d="M330,216 Q334,222 341,222 Q348,221 351,215 Q346,219 340,219 Q334,219 330,216Z" fill="${FS}"/>
<path d="M349,218 Q353,211 349,205 Q352,212 347,219Z" fill="${FS}" opacity=".6"/>
<path d="M332,207 Q338,202 346,203 Q339,205 334,210Z" fill="${FH}" opacity=".55"/>
${foxLeg('M362,215 Q367,225 366,233', 'M366.4,229 L366,233', [368.4, 236.2, 4.8], FB)}
<!-- neck thrown forward, soft cream throat -->
<path d="M368,205 Q379,200 386,208 Q387,217 379,222 Q372,215 368,205Z" fill="${FC}"/>
<!-- head, low and level with the run, ears swept back -->
${foxHead(193, 6, true)}
`;
  const oakClues = ["Yelp in","sidebar knowledge (4)","Page from the","whole affair (4)","Long for an","evergreen (4)"];
  const stoneClue = ["Face remodelled into","a place for coffee (4)"];

  // Layered boughs with broken needle tips and flat light-facing planes.
  const PINE_D = "M0 0 Q-4 22 -15 31 L-9 28 Q-17 45 -28 50 L-21 50 L-24 54 L-16 51 Q-28 67 -40 74 L-32 75 L-36 80 L-26 76 Q-35 94 -53 104 L-43 104 L-47 110 L-34 106 L-36 113 L-22 109 L-25 115 L-9 110 L-3 115 L4 110 L12 114 L19 108 L28 113 L34 108 L46 112 L42 105 L55 106 Q36 91 28 77 L40 80 L36 74 L43 76 Q27 63 20 52 L30 54 L26 49 L32 51 Q15 35 10 29 L17 32 Q5 15 0 0Z";
  const PINE_LIT = "M0 10 L-9 28 L-4 25 L-2 29 L3 26Z M-9 39 L-22 50 L-13 48 L-7 49 L-2 46Z M-18 62 L-33 74 L-23 71 L-17 74 L-8 69Z M-25 89 L-43 105 L-29 100 L-24 104 L-12 99Z";
  // Light comes from the clearing glow (x ~310): a pine left of it is lit on
  // its right, so its left half takes the shade and its lit planes mirror.
  function pine(id, x, y, s, color, light, shade = .4) {
    const litRight = x < 300;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-5 78 L-8 141 Q0 138 8 141 L4 78Z" fill="#2a1d13"/>
      <path d="${litRight ? 'M1 78 L4 78 L8 141 Q5 139.6 2.5 139.4Z' : 'M-5 78 L-2 78 L-2.5 139.4 Q-5 139.6 -8 141Z'}" fill="#5a3e26" opacity=".85"/>
      <path d="${PINE_D}" fill="${color}"/>
      <path d="${PINE_D}" fill="#06140c" opacity="${shade}" clip-path="url(#${id}${litRight ? 'L' : 'R'})"/>
      <g${litRight ? ' transform="scale(-1 1)"' : ''}><path d="${PINE_LIT}" fill="${light}" opacity=".75"/></g>
    </g>`;
  }
  // Glowing toadstool: outlined stem and cap, a shade band under the rim, spots.
  function mushroom(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="17" ry="4.5" fill="#4ac8f5" opacity=".1"/>
      <ellipse cy="1" rx="6" ry="1.8" fill="#06140c" opacity=".45"/>
      <path d="M-2.6 0.5 L-1.6 -11 L2 -11 L3.2 0.5Z" fill="#cfe6d2" stroke="#0f2a1a" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M0.8 -10 L1.6 0" stroke="#9fc3aa" stroke-width="1.2"/>
      <path d="M-11 -10 Q-10 -21 0 -21 Q10 -20 11 -10 Q0 -6 -11 -10Z" fill="#4ac8f5"/>
      <path d="M-11 -10 Q0 -6 11 -10 Q9 -13 0 -12.4 Q-8 -12.6 -11 -10Z" fill="#2386b8"/>
      <path d="M-11 -10 Q-10 -21 0 -21 Q10 -20 11 -10 Q0 -6 -11 -10Z" fill="none" stroke="#0f2a1a" stroke-width="1.3" stroke-linejoin="round"/>
      <circle cx="-4" cy="-16" r="1.8" fill="#e6fff0" opacity=".85"/><circle cx="3.5" cy="-17.5" r="1.2" fill="#e6fff0" opacity=".75"/>
    </g>`;
  }
  // Fern: outlined fronds, a lit front frond and a midrib.
  function fern(x, y, s) {
    return `<g transform="translate(${x} ${y}) scale(${s})" stroke="#0a1a0e" stroke-width="1.3" stroke-linejoin="round">
      <path d="M0 0 Q-25 -5 -36 -23 Q-18 -22 -6 -7 Q-22 -34 -18 -44 Q-2 -31 0 -11 Q5 -37 21 -43 Q21 -22 5 -6 Q24 -23 39 -20 Q26 -3 0 0Z" fill="#22482a"/>
      <path d="M0 -2 Q3 -30 21 -43 Q21 -22 5 -6Z M0 -2 Q20 -20 39 -20 Q26 -3 0 0Z" fill="#2f6236" stroke="none"/>
      <path d="M0 0 Q-4 -20 -18 -38 M0 0 Q9 -20 21 -37 M0 0 Q18 -12 34 -19" fill="none" stroke="#5a8a34" stroke-width="1"/>
    </g>`;
  }
  function trail(destination) {
    const rim = 'fill="#5a4826" stroke="#2e2414" stroke-width="2" stroke-linejoin="round"';
    if (destination === 'oak' || destination === 'stone') {
      return `<path d="M204 260 L211 249 Q178 245 177 232 L190 216 Q226 203 261 211 L313 216 L353 230 L361 244 L332 260Z" ${rim}/>
        <path d="M227 260 L232 247 L213 239 L220 228 L253 224 L284 230 L296 245 L282 260Z" fill="#8a7a40" opacity=".26"/>
        <path d="M192 218 Q226 207 260 214" fill="none" stroke="#a89456" stroke-width="1.6" opacity=".35" stroke-linecap="round"/>`;
    }
    if (destination === 'cafe') {
      return `<path d="M332 151 C326 178 318 201 203 260H342 C371 211 365 178 346 151Z" ${rim}/>
        <path d="M337 157 L341 174 L335 191 L344 185 L341 162Z M324 214 L294 238 L257 260H281 L317 235Z" fill="#8a7a40" opacity=".36"/>
        <path d="M334 158 Q328 186 300 214" fill="none" stroke="#e8a060" stroke-width="2.4" opacity=".22" stroke-linecap="round"/>`;
    }
    return `<path d="M267 116 C242 137 256 152 292 168 C346 194 275 225 203 260H342 C406 205 375 182 326 162 C284 145 271 134 274 116Z" ${rim}/>
      <path d="M269 137 L275 148 L303 163 L288 151Z M326 184 L333 194 L323 208 L339 201 L341 194Z M298 227 L257 249 L242 260H265 L297 240Z" fill="#8a7a40" opacity=".34"/>
      <path d="M262 132 Q262 146 292 160 M352 186 Q352 206 300 236" fill="none" stroke="#a89456" stroke-width="1.6" opacity=".3" stroke-linecap="round"/>
      <path d="M241 126 L249 117 L256 121 L259 111 L266 119 L273 113 L277 122 L287 116 L291 128 L277 132 L259 128Z" fill="#153222"/>`;
  }
  function background(id, warm = false, destination = 'woods') {
    const fog = warm ? '#4a6a50' : '#3d6e58';
    return `<defs>
      <linearGradient id="${id}Sky" x2="0" y2="1"><stop stop-color="#0a1a10"/><stop offset=".6" stop-color="#1c3e2a"/><stop offset="1" stop-color="#2a5236"/></linearGradient>
      <radialGradient id="${id}Air"><stop stop-color="${warm ? '#e8a060' : '#cfe6d2'}" stop-opacity=".26"/><stop offset="1" stop-color="#22482a" stop-opacity="0"/></radialGradient>
      <linearGradient id="${id}Fog" x2="0" y2="1"><stop stop-color="${fog}" stop-opacity="0"/><stop offset=".6" stop-color="${fog}" stop-opacity=".5"/><stop offset="1" stop-color="${fog}" stop-opacity=".15"/></linearGradient>
      <linearGradient id="${id}Ray" x2="0" y2="1"><stop stop-color="${warm ? '#ffe2b0' : '#e6f5d8'}" stop-opacity=".1"/><stop offset="1" stop-color="${warm ? '#ffe2b0' : '#e6f5d8'}" stop-opacity="0"/></linearGradient>
      <radialGradient id="${id}Eye"><stop stop-color="#7fff7f" stop-opacity=".8"/><stop offset="1" stop-color="#7fff7f" stop-opacity="0"/></radialGradient>
      <radialGradient id="${id}Lamp"><stop stop-color="#ffd700" stop-opacity=".3"/><stop offset="1" stop-color="#e8a060" stop-opacity="0"/></radialGradient>
      <clipPath id="${id}L"><rect x="-90" y="-10" width="90" height="160"/></clipPath>
      <clipPath id="${id}R"><rect x="0" y="-10" width="90" height="160"/></clipPath>
    </defs>
    <path d="M0 0H500V260H0Z" fill="url(#${id}Sky)"/>
    <ellipse cx="310" cy="99" rx="200" ry="155" fill="url(#${id}Air)"/>
    <!-- far plane: small misty pines, veiled toward the fog colour -->
    ${[[20,40,.62],[72,30,.7],[150,44,.58],[214,34,.66],[262,48,.55],[352,38,.64],[410,30,.7],[470,42,.6]].map(([x,y,s]) => pine(id,x,y,s,'#24503e','#30624a',.2)).join('')}
    <path d="M0 20H500V180H0Z" fill="url(#${id}Fog)"/>
    <path d="M250 -10 L292 -10 L360 170 L300 170Z M318 -10 L336 -10 L404 150 L376 150Z" fill="url(#${id}Ray)"/>
    <!-- mid plane -->
    ${[[-5,4,.9],[60,-15,1.1],[126,12,.8],[182,-9,.96],[239,10,.72],[305,-20,1.1],[374,4,.86],[445,-12,1.05],[505,0,.9]].map(([x,y,s]) => pine(id,x,y,s,'#1a3a20','#2a5530')).join('')}
    <path d="M0 135 Q80 112 152 143 Q226 117 293 143 Q398 106 500 133V260H0Z" fill="#153222"/>
    <path d="M0 135 Q80 112 152 143 Q226 117 293 143 Q398 106 500 133" fill="none" stroke="#2c5a3a" stroke-width="1.6" opacity=".7"/>
    <path d="M0 70H500V190H0Z" fill="url(#${id}Fog)" opacity=".45"/>
    <!-- near plane -->
    <path d="M0 174 Q126 140 224 172 Q380 132 500 172V260H0Z" fill="#1a3a20"/>
    <path d="M0 174 Q126 140 224 172 Q380 132 500 172" fill="none" stroke="#2f5e36" stroke-width="1.6" opacity=".8"/>
    ${trail(destination)}
    <path d="M118 140 Q236 129 334 139 Q385 143 430 138 Q370 153 259 144 Q184 139 118 145Z" fill="#cfe6d2" opacity=".08"/>
    ${pine(id,100,-31,1.52,'#133020','#2a5530',.45)}
    ${pine(id,432,-46,1.75,'#112a18','#22482a',.45)}
    <path d="M0 209 Q63 185 156 212 L192 260H0Z M390 224 Q445 196 500 206V260H366Z" fill="#112a18"/>
    <path d="M0 209 Q63 185 156 212 M390 224 Q445 196 500 206" fill="none" stroke="#24502c" stroke-width="1.6" opacity=".8"/>
    ${[[111,202,.55],[135,210,.4],[360,222,.65],[377,228,.4],[187,238,.7],[301,160,.22],[268,146,.18]].map(p => mushroom(...p)).join('')}
    <path d="M221 229 l12 -4 10 2 -12 4Z M320 195 l9 -2 6 2 -9 2Z M278 157 l6 -1 4 2 -6 1Z" fill="#cfe6d2" opacity=".18"/>`;
  }
  function foreground() {
    return `<path d="M0 0H38 Q25 61 32 120 Q32 185 57 237 L79 250 Q42 249 26 235 L0 249Z" fill="#0a1a0e"/>
      <path d="M38 0 Q25 61 32 120 Q32 185 57 237" fill="none" stroke="#2a4a30" stroke-width="2" opacity=".75"/>
      <path d="M19 0 Q12 92 20 169 Q22 203 33 222" fill="none" stroke="#241a12" stroke-width="6"/>
      <path d="M500 0H468 Q482 79 473 146 Q471 204 443 242 L421 252 Q466 248 485 234L500 239Z" fill="#0a1a0e"/>
      <path d="M468 0 Q482 79 473 146 Q471 204 443 242" fill="none" stroke="#2a4a30" stroke-width="2" opacity=".75"/>
      <path d="M24 48 Q78 48 105 12 L122 0H100 Q76 27 26 29Z M477 56 Q422 41 401 0H417 Q440 29 478 33Z" fill="#0a1a0e"/>
      <path d="M0 0H500V13 L477 9 L484 17 L462 13 L465 20 L439 11 L429 18 L405 12 L411 21 L380 9 L368 16 L343 8 L348 15 L327 0 L308 12 L297 8 L285 18 L265 7 L245 5 L233 17 L221 10 L206 20 L178 8 L166 18 L146 14 L150 23 L125 14 L108 14 L88 26 L79 21 L62 31 L40 21 L24 26 L0 20Z" fill="#0d2218"/>
      ${fern(51,256,1)}${fern(449,257,-1)}${fern(91,248,.65)}
      <path d="M0 255 Q81 244 149 260H0Z M405 260 Q467 244 500 252V260Z" fill="#0a1a0e"/>`;
  }
  function motes(warm = false) {
    return [[145,100,1.2],[334,79,1],[224,129,.8],[389,156,1.5],[80,180,1]].map(([x,y,r],i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${warm ? '#ffd700' : '#ffffaa'}" opacity=".55"><animate attributeName="opacity" values=".25;.7;.25" keyTimes="0;.5;1" calcMode="spline" keySplines="${ES};${ES}" dur="${4+i/2}s" begin="${i*.7}s" repeatCount="indefinite"/></circle>`).join('');
  }
  function wrap(id, content, label) {
    return `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${id}Title"><title id="${id}Title">${label}</title>${content}</svg>`;
  }
  for (const n of [0, 2]) {
    const id = 'forest' + n;
    const glimpse = n === 2 ? `<g transform="translate(256 5) scale(.83)">${seatedFox.replaceAll('foxEyeGlow', id+'Eye')}</g>
      <path d="M361 215 L369 199 L373 204 L379 190 L384 199 L390 187 L395 201 L404 193 L409 202 L416 198 L421 207 L433 227Z" fill="#133020" stroke="#0a1a0e" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M373 204 L379 190 L384 199 L390 187 L395 201Z" fill="#22482a"/>` : '';
    STORY_SCENES['forest_'+n] = wrap(id, background(id)+glimpse+foreground()+motes(), n === 0 ? 'The trail beneath the pines' : 'A fox watches from the undergrowth');
  }
  const oak = `<path d="M183 -10 Q188 52 170 83 L125 60 L108 32 L98 35 L113 79 L170 113 Q174 178 151 220 L118 239 Q159 242 192 222 Q226 240 254 232 Q287 247 353 244 L325 228 Q306 194 307 123 L353 80 L377 30 L363 27 L337 70 L302 82 Q296 40 319 -10Z" fill="#4a3018" stroke="#241a12" stroke-width="4" stroke-linejoin="round"/>
    <path d="M187 0 Q198 54 187 119 Q187 188 171 217 L150 232 L188 219 Q212 229 220 229 Q200 187 204 124 L218 0Z" fill="#5a3a20"/>
    <path d="M190 4 Q200 56 190 120 Q190 186 175 214" fill="none" stroke="#7a5432" stroke-width="2.2" opacity=".7" stroke-linecap="round"/>
    <path d="M282 0 Q266 67 279 127 Q275 185 297 225 L331 239 L307 213 Q294 164 302 119 L327 96 L312 90 Q282 52 307 0Z" fill="#2a1a0c"/>
    <path d="M182 89 L143 73 M197 12 Q208 48 199 80 M185 163 Q180 196 170 211 M294 138 Q286 191 310 222 M234 0 Q224 31 236 59 M269 11 Q257 42 268 63" fill="none" stroke="#241a12" stroke-width="3" stroke-linecap="round"/>
    <path d="M202 78 Q233 67 275 79 L279 207 Q245 219 201 205 Q209 137 202 78Z" fill="#5a3a20" stroke="#241a12" stroke-width="2" stroke-linejoin="round"/>
    <path d="M210 81 Q240 75 271 82 M208 208 Q243 216 275 209" fill="none" stroke="#6b4826" stroke-width="2"/>
    ${oakClues.map((t,i) => `<text x="240" y="${99+Math.floor(i/2)*43+(i%2)*15}" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-size="${i<4?10:9.5}" font-weight="700">${t}</text>`).join('')}
    <path d="M68 27 L63 12 L75 -7 L122 -4 L178 -5 L223 3 L270 7 L323 -1 L371 5 L410 3 L432 21 L420 27 L426 35 L403 33 L399 41 L380 38 L366 47 L350 37 L332 43 L315 38 L308 43 L291 30 L272 39 L257 34 L243 39 L237 26 L215 34 L202 30 L193 38 L183 26 L164 38 L149 32 L130 31 L115 40 L102 34 L88 39 L83 30Z" fill="#133020" stroke="#0a1a0e" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M88 17 L106 7 L126 13 L107 12Z M144 15 L166 7 L183 17 L162 12Z M306 17 L329 8 L347 20 L330 15Z M365 24 L388 16 L405 28 L382 23Z" fill="#2a5530"/>
    <path d="M128 236 Q140 228 152 232 L150 238Z M318 236 Q332 228 346 238Z" fill="#2f6236" stroke="#0f2a1a" stroke-width="1.2" stroke-linejoin="round"/>
    ${mushroom(149,239,.6)}${mushroom(331,246,.45)}${fern(349,245,.55)}`;
  STORY_SCENES.forest_1 = wrap('forest1', background('forest1',false,'oak')+oak+foreground()+motes(), 'Cryptic clues carved into an ancient oak');

  const slab = `<ellipse cx="290" cy="232" rx="104" ry="14" fill="#0a1a0e" opacity=".55"/>
    <path d="M204 149 L223 132 L350 129 L373 149 L366 222 L345 236 L218 231 L201 210Z" fill="#3f3f4d"/>
    <path d="M204 149 L223 132 L350 129 L373 149 L350 156 L222 158Z" fill="#7a7a92"/>
    <path d="M222 158 L350 156 L357 214 L341 223 L224 219Z" fill="#5f5f70"/>
    <path d="M350 156 L373 149 L366 222 L345 236 L341 223 L357 214Z" fill="#45455a"/>
    <path d="M204 149 L222 158 L224 219 L218 231 L201 210Z" fill="#2c2c38"/>
    <path d="M206 149 L224 134 L349 131" fill="none" stroke="#a4a4bc" stroke-width="1.6" opacity=".7" stroke-linecap="round"/>
    <path d="M225 139 L347 137 M229 164 L342 162" fill="none" stroke="#8a8a9a" stroke-width="2"/>
    <path d="M352 157 L338 166 L345 173 M231 220 L238 209 L232 204" fill="none" stroke="#33333f" stroke-width="2"/>
    <path d="M204 149 L223 132 L350 129 L373 149 L366 222 L345 236 L218 231 L201 210Z" fill="none" stroke="#1b1d26" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M222 158 L350 156 L373 149 M222 158 L204 149" fill="none" stroke="#1b1d26" stroke-width="1.4" opacity=".7"/>
    <path d="M232 133 Q252 126 276 131 Q270 137 248 138 Q236 138 232 133Z M318 130 Q336 127 348 133 Q336 135 322 134Z" fill="#3a6a32" stroke="#10241a" stroke-width="1.2" stroke-linejoin="round"/>
    ${stoneClue.map((t,i) => `<text x="288" y="${181+i*16}" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-size="11" font-weight="700">${t}</text>`).join('')}
    <path d="M201 213 Q218 202 231 218 L241 229 Q217 234 201 225Z M342 231 Q351 215 369 212 L371 225Z" fill="#2f6236" stroke="#10241a" stroke-width="1.2" stroke-linejoin="round"/>
    ${mushroom(374,235,.4)}`;
  STORY_SCENES.forest_3 = wrap('forest3', background('forest3',false,'stone')+slab+seatedFox.replaceAll('foxEyeGlow','forest3Eye')+foreground()+motes(), 'The fox beside the carved clue stone');

  function cafe(id) {
    return `<ellipse cx="339" cy="140" rx="58" ry="38" fill="url(#${id}Lamp)" opacity=".7"/>
      <ellipse cx="339" cy="160" rx="34" ry="7" fill="#e8a060" opacity=".14"/>
      <!-- Town-style wall planes and hipped roof, with no perimeter stroke. -->
      <path d="M301 105 H370 V151 H301Z" fill="#647689"/>
      <path d="M370 105 L383 99 V146 L370 151Z" fill="#54667a"/>
      <path d="M301 145 H370 V151 H301Z" fill="#54667a"/>
      <path d="M295 105 L313 84 H353 L376 105Z" fill="#67798f"/>
      <path d="M313 84 H353 L355 87 H315Z" fill="#8a9cb0" opacity=".6"/>
      <path d="M353 84 H365 L389 99 L376 105Z" fill="#54667a"/>
      <path d="M295 105 H376 L389 99 V102 L376 108 H297Z" fill="#4a5468"/>
      <path d="M359 91 V76 H366 V97Z" fill="#6f8298"/>
      <path d="M366 76 L369 78 V95 L366 97Z M357 75 H368 V78 H357Z" fill="#54667a"/>
      <path d="M362 70 Q355 61 364 52 Q371 45 364 37" fill="none" stroke="#cfe6d2" stroke-width="2" opacity=".18" stroke-linecap="round"/>
      <!-- Recessed display window, counter and cup silhouettes. -->
      <path d="M306 121 H329 V140 H306Z M350 121 H365 V140 H350Z" fill="#4a5468"/>
      <path d="M307 122 H328 V138 H307Z M351 122 H364 V138 H351Z" fill="#f0d4a8" opacity=".92"/>
      <path d="M307 134 H328 V138 H307Z M351 134 H364 V138 H351Z" fill="#b85e2e" opacity=".4"/>
      <path d="M317 122 V134 M358 122 V134" stroke="#647689" stroke-width=".8"/>
      <path d="M310 131 H314 L313 134 H311Z M320 131 H324 L323 134 H321Z M354 131 H358 L357 134 H355Z" fill="#e8c8a0"/>
      <path d="M305 140 H330 V142 H305Z M349 140 H366 V142 H349Z" fill="#7d90a6"/>
      <path d="M332 119 H346 V151 H332Z" fill="#4a5468"/>
      <path d="M333 121 H345 V151 H333Z" fill="#e8a060"/>
      <path d="M334 124 H343 V140 H334Z" fill="#e8c8a0" opacity=".65"/>
      <circle cx="343" cy="144" r=".8" fill="#6b4826"/>
      <path d="M333 151 L345 151 L348 158 L329 158Z" fill="#e8a060" opacity=".16"/>
      <path d="M307 140 H328 L331 154 L294 154Z M351 140 H364 L382 155 L355 156Z" fill="#e8a060" opacity=".16"/>
      <!-- Awning and front eave share x=295..376; the hem clears the door. -->
      ${Array.from({length:8}, (_, i) => {
        const back = 301 + i * 8.625, front = 295 + i * 10.125;
        return `<path d="M${back} 108 H${back+8.625} L${front+10.125} 115 V117 Q${front+5.0625} 120 ${front} 117 V115Z" fill="${i%2 ? '#c9b28e' : '#8a4a3a'}"/>`;
      }).join('')}
      <path d="M295 115 H376" stroke="#6b4826" stroke-width=".5" opacity=".35"/>
      <path d="M301 108 H370" stroke="#e8c8a0" stroke-width=".6" opacity=".5"/>
      <!-- String of cafe lights under the eave, twinkling out of step. -->
      <path d="M296 119 Q316 125 336 120 Q356 125 376 119" fill="none" stroke="#2a2a20" stroke-width=".6" opacity=".7"/>
      ${[[302,121.4],[312,123.4],[322,123.3],[330,121.4],[342,121.4],[350,123.3],[360,123.4],[370,121.4]].map(([x,y],i) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#ffd98a"><animate attributeName="opacity" values="1;.55;1" keyTimes="0;.5;1" calcMode="spline" keySplines="${ES};${ES}" dur="${2.6+(i%3)*.7}s" begin="${i*.35}s" repeatCount="indefinite"/></circle>`).join('')}
      <!-- Small hanging cup plaque and an outdoor table. -->
      <path d="M378 108 H391 M389 108 V114" fill="none" stroke="#6b4826" stroke-width=".8"/>
      <path d="M382 114 H396 V126 H382Z" fill="#6b4826"/>
      <path d="M385 118 H391 V120 Q388 124 385 120Z M391 118 H393 V120 H391" fill="#e8c8a0"/>
      <path d="M384 123 H393" stroke="#e8c8a0" stroke-width=".7"/>
      <path d="M386 143 L384 154 M389 143 L392 154" stroke="#6b4826" stroke-width="1"/>
      <path d="M379 141 Q387 138 395 141 L394 143 H380Z" fill="#8a7a40"/>
      <path d="M385 137 H389 L388 140 H386Z" fill="#e8c8a0"/>
      <!-- Weathered direction board: outlined like the other foreground props. -->
      <ellipse cx="177" cy="239" rx="12" ry="2.6" fill="#06140c" opacity=".5"/>
      <path d="M174 190 L173 238 L180 239 L181 190Z" fill="#5a3a20" stroke="#241a12" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M175 193 L175 236 L177 238 L178 193Z" fill="#6b4826"/>
      <path d="M154 174 L223 170 L238 181 L225 193 L154 197Z" fill="#4a3018"/>
      <path d="M154 171 L224 168 L238 178 L225 190 L154 194Z" fill="#6b4826"/>
      <path d="M156 172 L223 169 L233 176 L222 171Z" fill="#8a7a40" opacity=".6"/>
      <path d="M154 171 L224 168 L238 178 L238 181 L225 193 L154 197Z" fill="none" stroke="#241a12" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M158 189 L177 188 M205 172 L221 172 M212 187 L224 185" stroke="#5a3a20" stroke-width=".6"/>
      <text x="192" y="185" text-anchor="middle" fill="#e8c8a0" font-family="Georgia,serif" font-weight="700" font-size="8">CRYPTIC CAFE</text>
      <circle cx="177" cy="175" r=".8" fill="#cfe6d2" opacity=".5"/>
      <circle cx="176" cy="189" r=".8" fill="#cfe6d2" opacity=".4"/>`;
  }
  for (const n of [4,5]) {
    const id = 'forest'+n;
    const guide = n === 4 ? `<g transform="translate(22 32) scale(.82)">${runningFox.replaceAll('foxEyeGlow', id+'Eye')}</g>` : '';
    STORY_SCENES['forest_'+n] = wrap(id, background(id,true,'cafe')+cafe(id)+guide+foreground()+motes(true), n === 4 ? 'The fox leads toward the cafe lights' : 'The cafe clearing after the fox has gone');
  }
})();
