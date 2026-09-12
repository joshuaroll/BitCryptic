// Moon story scenes — "The Mark on The Moon"
// Keys: moon_0 through moon_7

// Scene 0: Moon surface, silence, craters everywhere, starfield
STORY_SCENES['moon_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m0Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#020408"/><stop offset="100%" stop-color="#080c14"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#m0Sky)"/>
<!-- Stars -->
<g fill="#f4f2ee">
  <circle cx="20" cy="15" r="0.8"/><circle cx="55" cy="40" r="0.6"/><circle cx="90" cy="10" r="1"/>
  <circle cx="130" cy="55" r="0.5"/><circle cx="160" cy="20" r="0.7"/><circle cx="200" cy="8" r="0.9"/>
  <circle cx="235" cy="45" r="0.6"/><circle cx="270" cy="18" r="0.8"/><circle cx="310" cy="50" r="0.5"/>
  <circle cx="340" cy="12" r="1"/><circle cx="375" cy="38" r="0.6"/><circle cx="410" cy="22" r="0.7"/>
  <circle cx="445" cy="48" r="0.8"/><circle cx="475" cy="14" r="0.5"/><circle cx="490" cy="55" r="0.6"/>
  <circle cx="45" cy="70" r="0.5"/><circle cx="110" cy="80" r="0.7"/><circle cx="180" cy="65" r="0.4"/>
  <circle cx="260" cy="75" r="0.6"/><circle cx="330" cy="68" r="0.5"/><circle cx="400" cy="78" r="0.7"/>
  <circle cx="460" cy="65" r="0.4"/><circle cx="70" cy="95" r="0.6"/><circle cx="150" cy="100" r="0.5"/>
  <circle cx="220" cy="90" r="0.7"/><circle cx="290" cy="95" r="0.4"/><circle cx="360" cy="88" r="0.6"/>
  <circle cx="430" cy="92" r="0.5"/><circle cx="15" cy="110" r="0.4"/><circle cx="485" cy="105" r="0.6"/>
  <circle cx="120" cy="35" r="0.4"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
  <circle cx="300" cy="30" r="0.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
  <circle cx="450" cy="70" r="0.3"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
</g>
<!-- Earth in distance -->
<circle cx="80" cy="60" r="14" fill="#1a4a6a"/>
<path d="M72,54 Q78,58 74,64 Q80,68 86,62 Q82,56 76,52" fill="#2a8a5a" opacity="0.5"/>
<circle cx="80" cy="60" r="14" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
<circle cx="80" cy="60" r="16" fill="none" stroke="#6abaee" stroke-width="0.3" opacity="0.15"/>
<!-- Moon surface -->
<path d="M0,170 Q50,165 100,168 Q150,160 200,170 Q250,165 300,172 Q350,162 400,168 Q450,170 500,166 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,172 Q50,167 100,170 Q150,162 200,172 Q250,167 300,174 Q350,164 400,170 Q450,172 500,168 L500,260 L0,260 Z" fill="#7a7870"/>
<!-- ====================================================================
     CRATERS. They were two concentric ellipses in near-identical greys, which
     reads as a puddle. A crater is a HOLE, and a hole reads by its RIM: the
     far wall catches the light while the near wall is in shadow, so the bright
     and dark arcs sit on OPPOSITE sides of the ring. Concentric fills can
     never show that, however many you stack.

     The Earth hangs upper-left and the sun is high to the right, so the lit
     arc is the far wall and the shadow is the near one.
     ==================================================================== -->
<ellipse cx="60" cy="210" rx="31" ry="10" fill="#8f8d84"/><ellipse cx="60" cy="210" rx="28" ry="8" fill="#63615a"/><path d="M32,210 A28,8 0 0 1 88,210 A20,5 0 0 0 32,210 Z" fill="#a8a69c" opacity="0.75"/><path d="M32,210 A28,8 0 0 0 88,210 A20,5 0 0 1 32,210 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="60" cy="210" rx="16" ry="4" fill="#56544e"/><path d="M30,208 l-10,-2 M90,209 l9,-3 M60,200 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="200" cy="230" rx="38" ry="12" fill="#8f8d84"/><ellipse cx="200" cy="230" rx="35" ry="10" fill="#63615a"/><path d="M165,230 A35,10 0 0 1 235,230 A25,7 0 0 0 165,230 Z" fill="#a8a69c" opacity="0.75"/><path d="M165,230 A35,10 0 0 0 235,230 A25,7 0 0 1 165,230 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="200" cy="231" rx="21" ry="5" fill="#56544e"/><path d="M163,228 l-12,-2 M237,229 l11,-3 M200,218 l2,-5" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="340" cy="195" rx="25" ry="9" fill="#8f8d84"/><ellipse cx="340" cy="195" rx="22" ry="7" fill="#63615a"/><path d="M318,195 A22,7 0 0 1 362,195 A15,5 0 0 0 318,195 Z" fill="#a8a69c" opacity="0.75"/><path d="M318,195 A22,7 0 0 0 362,195 A15,5 0 0 1 318,195 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="340" cy="195" rx="13" ry="3" fill="#56544e"/><path d="M316,193 l-8,-2 M364,194 l7,-3 M340,186 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="450" cy="220" rx="21" ry="7" fill="#8f8d84"/><ellipse cx="450" cy="220" rx="18" ry="5" fill="#63615a"/><path d="M432,220 A18,5 0 0 1 468,220 A12,3 0 0 0 432,220 Z" fill="#a8a69c" opacity="0.75"/><path d="M432,220 A18,5 0 0 0 468,220 A12,3 0 0 1 432,220 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="450" cy="220" rx="10" ry="2" fill="#56544e"/><path d="M430,218 l-6,-2 M470,219 l6,-3 M450,213 l2,-3" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="140" cy="200" rx="15" ry="6" fill="#8f8d84"/><ellipse cx="140" cy="200" rx="12" ry="4" fill="#63615a"/><path d="M128,200 A12,4 0 0 1 152,200 A8,2 0 0 0 128,200 Z" fill="#a8a69c" opacity="0.75"/><path d="M128,200 A12,4 0 0 0 152,200 A8,2 0 0 1 128,200 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="140" cy="200" rx="7" ry="2" fill="#56544e"/><path d="M126,198 l-4,-2 M154,199 l4,-3 M140,194 l2,-2" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="392" cy="244" rx="29" ry="9" fill="#8f8d84"/><ellipse cx="392" cy="244" rx="26" ry="7" fill="#63615a"/><path d="M366,244 A26,7 0 0 1 418,244 A18,5 0 0 0 366,244 Z" fill="#a8a69c" opacity="0.75"/><path d="M366,244 A26,7 0 0 0 418,244 A18,5 0 0 1 366,244 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="392" cy="244" rx="15" ry="3" fill="#56544e"/><path d="M364,242 l-9,-2 M420,243 l8,-3 M392,235 l2,-4" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>
<ellipse cx="268" cy="202" rx="17" ry="6" fill="#8f8d84"/><ellipse cx="268" cy="202" rx="14" ry="4" fill="#63615a"/><path d="M254,202 A14,4 0 0 1 282,202 A10,2 0 0 0 254,202 Z" fill="#a8a69c" opacity="0.75"/><path d="M254,202 A14,4 0 0 0 282,202 A10,2 0 0 1 254,202 Z" fill="#4e4c46" opacity="0.6"/><ellipse cx="268" cy="202" rx="8" ry="2" fill="#56544e"/><path d="M252,200 l-5,-2 M284,201 l4,-3 M268,196 l2,-2" stroke="#9a9890" stroke-width="1.2" opacity="0.3"/>

<!-- ridges and boulders, so the ground has relief between the craters -->
<path d="M92,186 Q108,178 128,184 Q112,190 92,186 Z" fill="#9a9890" opacity="0.5"/>
<path d="M300,214 Q318,206 340,213 Q320,220 300,214 Z" fill="#9a9890" opacity="0.4"/>
<path d="M416,190 Q430,183 448,189 Q432,195 416,190 Z" fill="#9a9890" opacity="0.45"/>
<path d="M24,238 Q40,229 60,237 Q42,246 24,238 Z" fill="#6a6860" opacity="0.5"/>
<path d="M158,250 L172,242 L186,248 L180,258 L164,258 Z" fill="#7a7870"/>
<path d="M158,250 L172,242 L178,247 L166,254 Z" fill="#a8a69c" opacity="0.45"/>
<path d="M462,246 L474,240 L486,245 L482,254 L466,254 Z" fill="#7a7870"/>
<path d="M462,246 L474,240 L479,244 L468,250 Z" fill="#a8a69c" opacity="0.4"/>

<!-- Subtle dust particles -->
<circle cx="150" cy="175" r="1" fill="#aaa8a0" opacity="0.15"><animate attributeName="opacity" values="0.05;0.2;0.05" dur="6s" repeatCount="indefinite"/></circle>
<circle cx="320" cy="180" r="0.8" fill="#aaa8a0" opacity="0.1"><animate attributeName="opacity" values="0.05;0.15;0.05" dur="5s" repeatCount="indefinite" begin="2s"/></circle>
<!-- Low relief and small ejecta fragments between the existing craters. -->
<path d="M0 181L27 174L42 178L69 175L92 180 M188 177L215 171L233 176L257 173L285 179 M375 178L396 171L412 175L433 171L460 178" fill="none" stroke="#b0ada3" stroke-width="1" opacity=".3"/>
<path d="M98 221L104 215L113 218L115 222L105 224Z M301 238L307 232L316 235L314 240Z M224 189L229 185L237 189Z" fill="#5e5c55"/>
<path d="M98 221L104 215L108 218L105 221 M301 238L307 232L310 236 M224 189L229 185L232 188" fill="#aaa79c" opacity=".65"/>
<g fill="#b2afa4" opacity=".35"><circle cx="117" cy="235" r=".8"/><circle cx="123" cy="233" r=".6"/><circle cx="310" cy="247" r=".9"/><circle cx="324" cy="237" r=".6"/><circle cx="232" cy="210" r=".7"/><circle cx="243" cy="213" r=".6"/></g>
</svg>`;

// Scene 1: Dome glows in distance, footprints in dust
STORY_SCENES['moon_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m1Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#020408"/><stop offset="100%" stop-color="#080c14"/>
  </linearGradient>
  <radialGradient id="m1DomeGlow" cx="78%" cy="72%" r="16%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.3"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m1Sky)"/>
<!-- Stars -->
<g fill="#f4f2ee">
  <circle cx="20" cy="15" r="0.8"/><circle cx="55" cy="40" r="0.6"/><circle cx="90" cy="10" r="1"/>
  <circle cx="130" cy="55" r="0.5"/><circle cx="160" cy="20" r="0.7"/><circle cx="200" cy="8" r="0.9"/>
  <circle cx="235" cy="45" r="0.6"/><circle cx="270" cy="18" r="0.8"/><circle cx="310" cy="50" r="0.5"/>
  <circle cx="340" cy="12" r="1"/><circle cx="375" cy="38" r="0.6"/><circle cx="410" cy="22" r="0.7"/>
  <circle cx="445" cy="48" r="0.8"/><circle cx="475" cy="14" r="0.5"/><circle cx="490" cy="55" r="0.6"/>
  <circle cx="45" cy="70" r="0.5"/><circle cx="110" cy="80" r="0.7"/><circle cx="180" cy="65" r="0.4"/>
  <circle cx="260" cy="75" r="0.6"/><circle cx="330" cy="68" r="0.5"/><circle cx="400" cy="78" r="0.7"/>
  <circle cx="460" cy="65" r="0.4"/><circle cx="70" cy="95" r="0.6"/><circle cx="150" cy="100" r="0.5"/>
  <circle cx="220" cy="90" r="0.7"/><circle cx="290" cy="95" r="0.4"/><circle cx="360" cy="88" r="0.6"/>
  <circle cx="430" cy="92" r="0.5"/><circle cx="15" cy="110" r="0.4"/><circle cx="485" cy="105" r="0.6"/>
  <circle cx="245" cy="28" r="0.45"><animate attributeName="opacity" values="0.35;1;0.35" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="418" cy="62" r="0.4"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="5.2s" repeatCount="indefinite" begin="1.7s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</g>
<!-- Earth in distance -->
<circle cx="80" cy="60" r="14" fill="#1a4a6a"/>
<path d="M72,54 Q78,58 74,64 Q80,68 86,62 Q82,56 76,52" fill="#2a8a5a" opacity="0.5"/>
<circle cx="80" cy="60" r="14" fill="none" stroke="#4a9aba" stroke-width="0.5" opacity="0.3"/>
<!-- ====================================================================
     GROUND. The horizon was two near identical bands, so the plain had no
     depth at all. It is now three receding bands, each a touch darker and
     flatter than the one in front, which is how a lit dust plain actually
     falls away toward the terminator.
     ==================================================================== -->
<path d="M0,168 Q54,161 104,166 Q152,157 202,167 Q252,161 302,170 Q352,159 402,166 Q452,168 500,163 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,178 Q60,173 112,177 Q168,169 216,179 Q266,173 318,181 Q368,171 420,178 Q460,180 500,176 L500,260 L0,260 Z" fill="#7a7870"/>
<path d="M0,196 Q70,190 140,196 Q210,188 280,198 Q350,190 420,197 Q460,199 500,195 L500,260 L0,260 Z" fill="#6f6d65"/>
<!-- ====================================================================
     CRATERS, built the way moon_0 builds them. A crater is a HOLE and a hole
     reads by its rim: the far wall catches the light while the near wall sits
     in shadow, so the bright and dark arcs are on OPPOSITE sides of the ring.
     The sun is high right, matching moon_0, so the lit arc is the far wall.
     ==================================================================== -->
<ellipse cx="58" cy="212" rx="32" ry="10" fill="#8f8d84"/><ellipse cx="58" cy="212" rx="29" ry="8" fill="#63615a"/>
<path d="M29,212 A29,8 0 0 1 87,212 A21,5 0 0 0 29,212 Z" fill="#a8a69c" opacity="0.75"/>
<path d="M29,212 A29,8 0 0 0 87,212 A21,5 0 0 1 29,212 Z" fill="#4e4c46" opacity="0.6"/>
<ellipse cx="58" cy="212" rx="16" ry="4" fill="#56544e"/>
<path d="M27,210 l-11,-3 M89,211 l10,-3 M58,201 l3,-5 M44,220 l-6,4" stroke="#9a9890" stroke-width="1.2" opacity="0.3" fill="none"/>
<ellipse cx="196" cy="234" rx="40" ry="12" fill="#8f8d84"/><ellipse cx="196" cy="234" rx="36" ry="10" fill="#63615a"/>
<path d="M160,234 A36,10 0 0 1 232,234 A26,7 0 0 0 160,234 Z" fill="#a8a69c" opacity="0.75"/>
<path d="M160,234 A36,10 0 0 0 232,234 A26,7 0 0 1 160,234 Z" fill="#4e4c46" opacity="0.6"/>
<ellipse cx="196" cy="235" rx="22" ry="5" fill="#56544e"/>
<path d="M158,232 l-13,-3 M234,233 l12,-4 M196,221 l3,-6" stroke="#9a9890" stroke-width="1.2" opacity="0.3" fill="none"/>
<ellipse cx="134" cy="200" rx="17" ry="6" fill="#8f8d84"/><ellipse cx="134" cy="200" rx="14" ry="4.5" fill="#63615a"/>
<path d="M120,200 A14,4.5 0 0 1 148,200 A10,3 0 0 0 120,200 Z" fill="#a8a69c" opacity="0.75"/>
<path d="M120,200 A14,4.5 0 0 0 148,200 A10,3 0 0 1 120,200 Z" fill="#4e4c46" opacity="0.6"/>
<ellipse cx="134" cy="200" rx="8" ry="2" fill="#56544e"/>
<path d="M118,198 l-5,-2 M150,199 l5,-3" stroke="#9a9890" stroke-width="1" opacity="0.28" fill="none"/>
<ellipse cx="288" cy="252" rx="34" ry="10" fill="#8f8d84"/><ellipse cx="288" cy="252" rx="31" ry="8" fill="#63615a"/>
<path d="M257,252 A31,8 0 0 1 319,252 A22,5 0 0 0 257,252 Z" fill="#a8a69c" opacity="0.7"/>
<path d="M257,252 A31,8 0 0 0 319,252 A22,5 0 0 1 257,252 Z" fill="#4e4c46" opacity="0.55"/>
<!-- Two shallow far craters, veiled toward the plain so distance eats contrast -->
<ellipse cx="452" cy="192" rx="19" ry="5.5" fill="#7f7d75"/><ellipse cx="452" cy="192" rx="16" ry="4" fill="#67655e"/>
<path d="M436,192 A16,4 0 0 1 468,192 A11,2.5 0 0 0 436,192 Z" fill="#98968e" opacity="0.55"/>
<path d="M436,192 A16,4 0 0 0 468,192 A11,2.5 0 0 1 436,192 Z" fill="#56544e" opacity="0.45"/>
<ellipse cx="96" cy="186" rx="14" ry="4" fill="#7d7b73"/><ellipse cx="96" cy="186" rx="11.5" ry="3" fill="#67655e"/>
<path d="M84.5,186 A11.5,3 0 0 1 107.5,186 A8,2 0 0 0 84.5,186 Z" fill="#96948c" opacity="0.5"/>
<path d="M84.5,186 A11.5,3 0 0 0 107.5,186 A8,2 0 0 1 84.5,186 Z" fill="#56544e" opacity="0.4"/>
<!-- Ridges and angular boulders, so there is relief between the holes -->
<path d="M228,204 Q248,196 274,203 Q252,210 228,204 Z" fill="#9a9890" opacity="0.4"/>
<path d="M20,242 Q38,232 62,241 Q40,250 20,242 Z" fill="#6a6860" opacity="0.5"/>
<path d="M330,222 Q352,214 378,222 Q354,229 330,222 Z" fill="#9a9890" opacity="0.35"/>
<ellipse cx="117" cy="255" rx="19" ry="3.5" fill="#4a4840" opacity="0.45"/>
<path d="M100,246 L116,235 L134,243 L129,255 L107,255 Z" fill="#6f6d65"/>
<path d="M116,235 L134,243 L129,255 L120,249 Z" fill="#8f8d84" opacity="0.7"/>
<path d="M100,246 L116,235 L120,249 L107,255 Z" fill="#46443d" opacity="0.55"/>
<path d="M116,235 L134,243 L127,245 Z" fill="#b2b0a6" opacity="0.4"/>
<ellipse cx="268" cy="221" rx="12" ry="2.4" fill="#4a4840" opacity="0.4"/>
<path d="M258,214 L268,207 L279,213 L275,221 L261,221 Z" fill="#6f6d65"/>
<path d="M268,207 L279,213 L275,221 L269,217 Z" fill="#8f8d84" opacity="0.65"/>
<path d="M258,214 L268,207 L269,217 L261,221 Z" fill="#46443d" opacity="0.5"/>
<ellipse cx="475" cy="256" rx="15" ry="3" fill="#4a4840" opacity="0.4"/>
<path d="M462,248 L474,240 L488,246 L484,257 L465,257 Z" fill="#6f6d65"/>
<path d="M474,240 L488,246 L484,257 L477,252 Z" fill="#8f8d84" opacity="0.65"/>
<path d="M462,248 L474,240 L477,252 L465,257 Z" fill="#46443d" opacity="0.5"/>
<!-- ====================================================================
     FOOTPRINTS. They were plain ellipses, which read as pebbles. A boot print
     is a sole and a heel with a gap between, pressed into dust, so each one
     gets a raised bright lip on the sunward edge and a dark hollow inside.
     They shrink and converge as they recede, and the last pair lands at the
     airlock rather than stopping short of it.
     ==================================================================== -->
<g>
  <path d="M256,244 q4,-1 5,3 q0,4 -4,4 q-4,0 -4,-3 q0,-3 3,-4 Z M255,251 q4,-1 5,2 q0,3 -4,3 q-3,0 -3,-2 Z" fill="#4e4c46" opacity="0.62" transform="rotate(-12,258,247)"/>
  <path d="M274,238 q4,-1 5,3 q0,4 -4,4 q-4,0 -4,-3 q0,-3 3,-4 Z M273,245 q4,-1 5,2 q0,3 -4,3 q-3,0 -3,-2 Z" fill="#4e4c46" opacity="0.6" transform="rotate(6,276,241)"/>
  <path d="M292,230 q3.6,-0.9 4.5,2.7 q0,3.6 -3.6,3.6 q-3.6,0 -3.6,-2.7 q0,-2.7 2.7,-3.6 Z M291,236.5 q3.6,-0.9 4.5,1.8 q0,2.7 -3.6,2.7 q-2.7,0 -2.7,-1.8 Z" fill="#4e4c46" opacity="0.58" transform="rotate(-9,294,233)"/>
  <path d="M310,223 q3.4,-0.8 4.2,2.5 q0,3.4 -3.4,3.4 q-3.4,0 -3.4,-2.5 q0,-2.5 2.6,-3.4 Z M309,229 q3.4,-0.8 4.2,1.7 q0,2.5 -3.4,2.5 q-2.5,0 -2.5,-1.7 Z" fill="#4e4c46" opacity="0.56" transform="rotate(5,312,226)"/>
  <path d="M327,215 q3,-0.7 3.7,2.2 q0,3 -3,3 q-3,0 -3,-2.2 q0,-2.2 2.3,-3 Z M326,220.5 q3,-0.7 3.7,1.5 q0,2.2 -3,2.2 q-2.2,0 -2.2,-1.5 Z" fill="#4e4c46" opacity="0.52" transform="rotate(-6,329,218)"/>
  <path d="M343,208 q2.7,-0.6 3.3,2 q0,2.7 -2.7,2.7 q-2.7,0 -2.7,-2 q0,-2 2.1,-2.7 Z M342,213 q2.7,-0.6 3.3,1.3 q0,2 -2.7,2 q-2,0 -2,-1.3 Z" fill="#4e4c46" opacity="0.5" transform="rotate(8,345,210)"/>
  <path d="M358,202 q2.3,-0.5 2.9,1.7 q0,2.3 -2.3,2.3 q-2.3,0 -2.3,-1.7 q0,-1.7 1.7,-2.3 Z M357,206 q2.3,-0.5 2.9,1.1 q0,1.7 -2.3,1.7 q-1.7,0 -1.7,-1.1 Z" fill="#4e4c46" opacity="0.46" transform="rotate(-5,360,204)"/>
  <path d="M371,196 q2,-0.4 2.5,1.5 q0,2 -2,2 q-2,0 -2,-1.5 q0,-1.5 1.5,-2 Z M370,200 q2,-0.4 2.5,1 q0,1.5 -2,1.5 q-1.5,0 -1.5,-1 Z" fill="#4e4c46" opacity="0.42" transform="rotate(5,372,198)"/>
  <path d="M382,192 q1.7,-0.4 2.1,1.3 q0,1.7 -1.7,1.7 q-1.7,0 -1.7,-1.3 q0,-1.3 1.3,-1.7 Z" fill="#4e4c46" opacity="0.38"/>
  <path d="M391,189 q1.5,-0.3 1.9,1.1 q0,1.5 -1.5,1.5 q-1.5,0 -1.5,-1.1 q0,-1.1 1.1,-1.5 Z" fill="#4e4c46" opacity="0.34"/>
</g>
<!-- Sunward lips on the nearest prints, which is what makes them read as pressed in -->
<path d="M254,241 q5,-2 8,1 M272,235 q5,-2 8,1 M290,228 q4,-1.6 7,0.8" stroke="#b0aea4" stroke-width="0.9" opacity="0.3" fill="none" stroke-linecap="round"/>
<!-- ====================================================================
     MARK'S DOME. An elliptical arc so it is a hemisphere and not a tent, with
     panel seams following the curve. Habitat first, glow second, so the light
     comes from inside. A service module, mast and dish give it the look of
     somewhere a person actually lives.
     ==================================================================== -->
<ellipse cx="398" cy="188" rx="30" ry="5" fill="#4e4c46" opacity="0.55"/>
<!-- Service module and mast, behind the dome -->
<path d="M428,188 L428,176 Q428,172 432,172 L444,172 Q448,172 448,176 L448,188 Z" fill="#3a382f" stroke="#d4d0c0" stroke-width="0.6" opacity="0.85"/>
<path d="M430,174 L446,174 L446,178 L430,178 Z" fill="#8a8880" opacity="0.35"/>
<path d="M436,172 L437,154" stroke="#9a9890" stroke-width="0.9" opacity="0.6" fill="none"/>
<path d="M430,158 A7,7 0 0 1 444,152 L437,155 Z" fill="#5a5850" stroke="#9a9890" stroke-width="0.7" opacity="0.75"/>
<path d="M441,153 A7,7 0 0 0 431,157" fill="none" stroke="#b0aea4" stroke-width="0.5" opacity="0.4"/>
<path d="M437,155 L440,149" stroke="#9a9890" stroke-width="0.5" opacity="0.5" fill="none"/>
<circle cx="440.5" cy="148" r="1.1" fill="#ffe880" opacity="0.7">
  <animate attributeName="opacity" values="0.25;0.9;0.25" dur="2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- Dome shell -->
<path d="M370,188 A28,25 0 0,1 426,188 Z" fill="#33312a" stroke="#d4d0c0" stroke-width="1" opacity="0.92"/>
<!-- Lit interior showing through the glass -->
<path d="M375,188 A23,20.5 0 0,1 421,188 Z" fill="#ffe27a" opacity="0.2">
  <animate attributeName="opacity" values="0.14;0.26;0.14" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- Glazing bars, following the curve so the dome reads as glass -->
<path d="M398,163 L398,188 M382,169 L385,188 M414,169 L411,188 M373,180 L373,188 M423,180 L423,188" stroke="#d4d0c0" stroke-width="0.6" opacity="0.4" fill="none"/>
<path d="M371.5,180 A26,23 0 0,1 424.5,180" stroke="#d4d0c0" stroke-width="0.5" opacity="0.3" fill="none"/>
<path d="M378,171 A20,17 0 0,1 418,171" stroke="#d4d0c0" stroke-width="0.4" opacity="0.22" fill="none"/>
<!-- The sunward quarter of the shell catches a hard highlight -->
<path d="M412,170 A28,25 0 0,1 426,188 L419,188 A21,19 0 0,0 408,173 Z" fill="#d4d0c0" opacity="0.16"/>
<!-- Airlock, so there is a way in -->
<path d="M392,188 L392,178 A6,6 0 0,1 404,178 L404,188 Z" fill="#26241e" stroke="#d4d0c0" stroke-width="0.7" opacity="0.88"/>
<path d="M398,178 L398,188" stroke="#d4d0c0" stroke-width="0.4" opacity="0.35" fill="none"/>
<!-- Base seal and a spill of light on the dust at the threshold -->
<path d="M368,188 A30,5 0 0,0 428,188" stroke="#d4d0c0" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M390,189 Q398,187 406,189 Q400,196 390,189 Z" fill="#ffe880" opacity="0.16"/>
<rect x="0" y="0" width="500" height="260" fill="url(#m1DomeGlow)"/>
</svg>`;

// Scene 2: Mark introduces himself inside dome
STORY_SCENES['moon_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m2DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m2WarmLight" cx="50%" cy="42%" r="52%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.13"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="m2Floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a3020"/><stop offset="100%" stop-color="#221c12"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#m2DomeBg)"/>
<!-- Curved glass dome showing stars outside -->
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.3"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<!-- Stars visible through dome -->
<g fill="#f4f2ee" opacity="0.4">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="180" cy="60" r="0.3"/><circle cx="300" cy="55" r="0.6"/><circle cx="430" cy="75" r="0.4"/>
</g>
<!-- Earth visible through dome glass -->
<circle cx="400" cy="45" r="10" fill="#1a4a6a" opacity="0.6"/>
<path d="M395,39 Q399,42 396,47 Q401,50 405,45 Q402,40 398,38" fill="#2a8a5a" opacity="0.3"/>
<circle cx="400" cy="45" r="10" fill="none" stroke="#4a9aba" stroke-width="0.3" opacity="0.2"/>
<!-- Glazing ribs on the dome shell, so the curve reads as built glass -->
<path d="M250,20 L250,250 M160,26 Q152,140 150,250 M340,26 Q348,140 350,250 M85,55 Q66,150 62,250 M415,55 Q434,150 438,250" stroke="#d4d0c0" stroke-width="0.4" opacity="0.1" fill="none"/>
<path d="M44,120 Q250,96 456,120" stroke="#d4d0c0" stroke-width="0.4" opacity="0.09" fill="none"/>
<!-- Warm interior glow -->
<rect x="0" y="0" width="500" height="260" fill="url(#m2WarmLight)"/>
<!-- ====================================================================
     FLOOR. It was a rounded rect floating in the dark with a gap between it
     and the dome wall. Now the deck sweeps out to meet the shell on both
     sides, with a curved front edge, so the room has a plan.
     ==================================================================== -->
<path d="M36,250 Q42,208 90,203 Q250,192 410,203 Q458,208 464,250 Z" fill="url(#m2Floor)"/>
<path d="M36,250 Q42,208 90,203 Q250,192 410,203 Q458,208 464,250 Z" fill="none" stroke="#4a3c26" stroke-width="0.8" opacity="0.5"/>
<!-- Deck seams, converging so the floor recedes -->
<path d="M92,204 Q88,226 82,250 M170,199 Q168,224 164,250 M250,197 L250,250 M330,199 Q332,224 336,250 M408,204 Q412,226 418,250" stroke="#241e14" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M48,224 Q250,212 452,224" stroke="#241e14" stroke-width="0.6" opacity="0.4" fill="none"/>
<!-- ====================================================================
     BOOKSHELVES. They were a wavy plank with a stack of rounded rects beside
     it, floating clear of the floor. Each is now a carcass with a back panel,
     shelf boards, a plinth that reaches the deck, and books of varied width
     and height with a few leaning against the next.
     ==================================================================== -->
<g>
  <!-- left case, carcass -->
  <path d="M58,96 L88,99 L88,206 L58,203 Z" fill="#33260f"/>
  <path d="M58,96 L88,99 L88,104 L58,101 Z" fill="#5a4526" opacity="0.8"/>
  <path d="M58,96 L62,97 L62,204 L58,203 Z" fill="#6a5330" opacity="0.55"/>
  <path d="M84,98.5 L88,99 L88,206 L84,205 Z" fill="#241a0b" opacity="0.8"/>
  <!-- shelf boards -->
  <path d="M60,120 L87,122 L87,124 L60,122 Z" fill="#5a4526"/>
  <path d="M60,146 L87,148 L87,150 L60,148 Z" fill="#5a4526"/>
  <path d="M60,172 L87,174 L87,176 L60,174 Z" fill="#5a4526"/>
  <path d="M59,196 L88,198 L88,201 L59,199 Z" fill="#4a3820"/>
  <!-- books, varied and a couple leaning -->
  <path d="M62,105 L66,105.3 L66,120.3 L62,120 Z" fill="#8a6040"/>
  <path d="M66.5,103 L69.5,103.2 L69.5,120.4 L66.5,120.2 Z" fill="#6a8050"/>
  <path d="M70,106 L75,106.3 L75,120.6 L70,120.3 Z" fill="#8a5040"/>
  <path d="M75.5,104 L78,104.2 L78,120.7 L75.5,120.5 Z" fill="#5a6a80"/>
  <path d="M79,108 L85,116 L85,121 L79,121 Z" fill="#8a7040"/>
  <path d="M62,132 L67,132.3 L67,146.4 L62,146.1 Z" fill="#5a6a80"/>
  <path d="M67.5,129 L70,129.2 L70,146.5 L67.5,146.3 Z" fill="#8a7040"/>
  <path d="M70.5,133 L76,133.4 L76,146.7 L70.5,146.4 Z" fill="#6a5060"/>
  <path d="M77,131 L81,131.2 L81,146.9 L77,146.6 Z" fill="#8a6040"/>
  <path d="M82,134 L86,134.3 L86,147 L82,146.8 Z" fill="#4a6a5a"/>
  <path d="M62,158 L65,158.2 L65,172.4 L62,172.2 Z" fill="#6a8050"/>
  <path d="M65.5,155 L71,155.4 L71,172.6 L65.5,172.3 Z" fill="#8a5040"/>
  <path d="M71.5,159 L74,159.2 L74,172.7 L71.5,172.5 Z" fill="#5a6a80"/>
  <path d="M75,156 L79,156.3 L79,172.9 L75,172.6 Z" fill="#8a7040"/>
  <path d="M80,161 L86,168 L86,173.1 L80,173 Z" fill="#6a5060"/>
  <!-- a couple laid flat on the bottom shelf -->
  <path d="M62,190 L82,191.3 L82,194 L62,192.7 Z" fill="#8a6040" opacity="0.85"/>
  <path d="M63,184 L79,185 L79,188 L63,187 Z" fill="#5a6a80" opacity="0.8"/>
</g>
<g>
  <!-- right case, mirrored -->
  <path d="M442,96 L412,99 L412,206 L442,203 Z" fill="#33260f"/>
  <path d="M442,96 L412,99 L412,104 L442,101 Z" fill="#5a4526" opacity="0.8"/>
  <path d="M438,97 L442,96 L442,203 L438,204 Z" fill="#241a0b" opacity="0.7"/>
  <path d="M412,99 L416,98.5 L416,205 L412,206 Z" fill="#6a5330" opacity="0.45"/>
  <path d="M413,122 L440,120 L440,122 L413,124 Z" fill="#5a4526"/>
  <path d="M413,148 L440,146 L440,148 L413,150 Z" fill="#5a4526"/>
  <path d="M413,174 L440,172 L440,174 L413,176 Z" fill="#5a4526"/>
  <path d="M412,198 L441,196 L441,199 L412,201 Z" fill="#4a3820"/>
  <path d="M415,106 L419,105.7 L419,121.7 L415,122 Z" fill="#6a8050"/>
  <path d="M419.5,103 L423,102.8 L423,121.4 L419.5,121.6 Z" fill="#8a5040"/>
  <path d="M424,107 L429,106.6 L429,121.1 L424,121.4 Z" fill="#5a6a80"/>
  <path d="M429.5,104 L433,103.8 L433,120.9 L429.5,121.1 Z" fill="#8a7040"/>
  <path d="M434,109 L438,108.7 L438,120.7 L434,120.9 Z" fill="#8a6040"/>
  <path d="M415,133 L420,132.6 L420,147.7 L415,148 Z" fill="#8a5040"/>
  <path d="M420.5,130 L423,129.8 L423,147.4 L420.5,147.6 Z" fill="#5a6a80"/>
  <path d="M424,134 L430,133.5 L430,147.1 L424,147.4 Z" fill="#8a7040"/>
  <path d="M431,131 L435,130.7 L435,146.9 L431,147.1 Z" fill="#6a5060"/>
  <path d="M436,136 L439,135.7 L439,146.8 L436,146.9 Z" fill="#6a8050"/>
  <path d="M415,159 L418,158.7 L418,173.7 L415,174 Z" fill="#8a6040"/>
  <path d="M419,156 L424,155.6 L424,173.4 L419,173.7 Z" fill="#6a8050"/>
  <path d="M425,160 L430,159.6 L430,173.1 L425,173.4 Z" fill="#8a5040"/>
  <path d="M431,157 L436,156.6 L436,172.8 L431,173.1 Z" fill="#5a6a80"/>
  <path d="M414,190 L436,188.6 L436,191.4 L414,192.8 Z" fill="#8a7040" opacity="0.85"/>
  <path d="M415,184 L432,182.9 L432,185.7 L415,186.8 Z" fill="#6a5060" opacity="0.8"/>
</g>
<!-- Contact shadows under the cases -->
<path d="M54,205 Q72,201 92,205 Q72,210 54,205 Z" fill="#181208" opacity="0.5"/>
<path d="M408,205 Q426,201 446,205 Q426,210 408,205 Z" fill="#181208" opacity="0.5"/>
<!-- ====================================================================
     ARMCHAIR, drawn before the desk it is pulled up beside. It was four
     rounded rects; a chair needs a back that curves, arms with a roll on the
     front, a seat cushion, and legs that reach the deck.
     ==================================================================== -->
<g>
  <ellipse cx="140" cy="222" rx="30" ry="5" fill="#181208" opacity="0.5"/>
  <!-- back, wings curving forward -->
  <path d="M120,214 Q114,168 124,158 Q140,150 156,158 Q166,168 160,214 Z" fill="#4a2c1c"/>
  <path d="M124,208 Q120,172 129,164 Q140,158 151,164 Q160,172 156,208 Z" fill="#5e3a26"/>
  <!-- buttoned back panel -->
  <path d="M129,203 Q126,176 133,169 Q140,165 147,169 Q154,176 151,203 Z" fill="#6a4838" opacity="0.75"/>
  <circle cx="136" cy="180" r="0.9" fill="#3e2418" opacity="0.7"/>
  <circle cx="145" cy="180" r="0.9" fill="#3e2418" opacity="0.7"/>
  <circle cx="140" cy="191" r="0.9" fill="#3e2418" opacity="0.7"/>
  <!-- arms, rolled -->
  <path d="M114,214 Q110,190 116,184 Q124,180 128,186 L128,214 Z" fill="#4a2818"/>
  <path d="M114,192 Q114,184 121,183 Q128,184 128,192 Q121,196 114,192 Z" fill="#66412c"/>
  <path d="M166,214 Q170,190 164,184 Q156,180 152,186 L152,214 Z" fill="#3e2214"/>
  <path d="M152,192 Q152,184 159,183 Q166,184 166,192 Q159,196 152,192 Z" fill="#5a3826"/>
  <!-- seat cushion, sagging in the middle -->
  <path d="M118,196 Q140,190 162,196 Q164,206 158,209 Q140,213 122,209 Q116,206 118,196 Z" fill="#71503b"/>
  <path d="M118,196 Q140,190 162,196 Q140,199 118,196 Z" fill="#835f47" opacity="0.7"/>
  <!-- legs, reaching the deck -->
  <path d="M120,213 L123,213 L124,222 L120,222 Z" fill="#33200f"/>
  <path d="M157,213 L160,213 L159,222 L156,222 Z" fill="#33200f"/>
  <path d="M129,212 L131,212 L131,219 L129,219 Z" fill="#2a1a0c" opacity="0.7"/>
</g>
<!-- ====================================================================
     DESK, drawn legs first then the top, so the top overlaps them. It was a
     plank on two sticks. Now it has a moulded front edge, a kneehole with a
     drawer, turned legs and a stretcher.
     ==================================================================== -->
<g>
  <ellipse cx="250" cy="219" rx="98" ry="5" fill="#181208" opacity="0.45"/>
  <!-- back legs first -->
  <path d="M186,186 L190,186 L189,214 L186,214 Z" fill="#33260f"/>
  <path d="M310,186 L314,186 L313,214 L310,214 Z" fill="#33260f"/>
  <!-- front legs, turned -->
  <path d="M170,188 L178,188 L177,196 Q180,199 177,202 L176,216 L169,216 L168,202 Q165,199 168,196 Z" fill="#4a3820"/>
  <path d="M170,188 L173,188 L172,216 L169,216 Z" fill="#6a5330" opacity="0.5"/>
  <path d="M322,188 L330,188 L331,196 Q334,199 331,202 L332,216 L325,216 L324,202 Q321,199 324,196 Z" fill="#4a3820"/>
  <path d="M327,188 L330,188 L331,216 L328,216 Z" fill="#2a1e0c" opacity="0.6"/>
  <!-- stretcher between the front legs -->
  <path d="M176,206 L324,206 L324,209 L176,209 Z" fill="#3d2c17"/>
  <!-- kneehole apron and a drawer -->
  <path d="M182,186 L318,186 L318,199 L182,199 Z" fill="#4a3820"/>
  <path d="M188,188 L246,188 L246,197 L188,197 Z" fill="#3d2c17"/>
  <path d="M188,188 L246,188 L246,190 L188,190 Z" fill="#6a5330" opacity="0.4"/>
  <path d="M214,192 Q220,191 220,193 Q220,195 214,194 Z" fill="#8a7a60" opacity="0.8"/>
  <!-- top, with a moulded lip -->
  <path d="M156,180 Q250,176 344,180 L346,184 Q250,180 154,184 Z" fill="#6a5330"/>
  <path d="M154,184 Q250,180 346,184 L346,188 Q250,184 154,188 Z" fill="#4a3820"/>
  <path d="M158,181 Q250,177.5 342,181 Q250,179 158,181 Z" fill="#8a6e42" opacity="0.5"/>
</g>
<!-- ====================================================================
     CROSSWORDS on the desk. They were blank rects standing on edge like a
     fence. A sheet lying on a table is FORESHORTENED: short from front to
     back, wide across, its grid lines converging with the desk. One is
     propped against the mug so not everything lies flat.
     ==================================================================== -->
<g>
  <path d="M176,172 L212,170 L216,182 L178,183 Z" fill="#e8e0d0" opacity="0.9"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.7" fill="none">
    <path d="M183,171.6 L184.6,182.8 M190,171.2 L192,182.6 M197,170.8 L199.4,182.4 M204,170.4 L206.8,182.2"/>
    <path d="M176.7,174.4 L212.9,172.4 M177.4,176.9 L213.8,174.9 M178,179.4 L215,177.4"/>
  </g>
  <path d="M183,171.6 L190,171.2 L192,174.6 L184.6,175 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M197,177.7 L204,177.3 L206.8,180.9 L199.4,181.3 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M176,172 L212,170 L212.4,171.3 L176.2,173.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M178,183 L216,182 L216.6,183.4 L178.4,184.4 Z" fill="#a8a294" opacity="0.45"/>
</g>
<g>
  <path d="M222,174 L254,175 L256,184 L221,183 Z" fill="#e2dbc9" opacity="0.82"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.55" fill="none">
    <path d="M228,174.2 L227.4,183.2 M234,174.4 L233.6,183.4 M240,174.6 L239.9,183.6 M246,174.8 L246.2,183.8"/>
    <path d="M221.7,177 L254.6,178 M221.3,180 L255.3,181"/>
  </g>
  <path d="M234,177.3 L240,177.5 L240,180.5 L233.9,180.3 Z" fill="#3a352d" opacity="0.6"/>
  <path d="M222,174 L254,175 L254.2,176.2 L221.9,175.2 Z" fill="#f4eedd" opacity="0.45"/>
</g>
<!-- one sheet slipping over the front lip, so the desk edge is felt -->
<g>
  <path d="M262,176 L292,177 Q294,183 288,187 Q272,188 260,185 Z" fill="#ddd8c8" opacity="0.72"/>
  <path d="M268,176.2 L266,186.6 M276,176.5 L274.6,187.6 M284,176.8 L283,187.6" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M260.6,180 L292.8,181 M260.2,183.5 L291,184.5" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M292,177 Q294,183 288,187 Q291,181 289,177.5 Z" fill="#b0aa9a" opacity="0.6"/>
</g>
<!-- a leaning stack of worked puzzles, the one thing not lying flat -->
<g>
  <path d="M158,166 L182,163 L184,180 L160,182 Z" fill="#cfc8b4" opacity="0.6"/>
  <path d="M156,167 L180,164 L182,181 L158,183 Z" fill="#ddd6c2" opacity="0.66"/>
  <path d="M154,168 L178,165 L180,182 L156,184 Z" fill="#e6dfca" opacity="0.72"/>
  <path d="M154,168 L178,165 L178.3,166.6 L154.3,169.6 Z" fill="#f4eedd" opacity="0.45"/>
  <path d="M158,171 L174,169 M158.3,174 L174.4,172 M158.6,177 L174.7,175" stroke="#7a746a" stroke-width="0.4" opacity="0.35" fill="none"/>
  <path d="M154,182.6 Q166,185 180,182 Q166,186 154,184 Z" fill="#8e8878" opacity="0.4"/>
</g>
<!-- Pen, lying on the desk where a hand left it -->
<path d="M228,168 Q238,169.5 248,171.5" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M247,171.3 Q250.4,171.9 252,173.4 Q249.2,173.3 247.4,172.6 Z" fill="#b8b6ac"/>
<path d="M229,168.2 Q233,168.8 236,169.4" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M231,167.2 Q239,168.6 247,170.4" stroke="#6e6e90" stroke-width="0.5" opacity="0.5" stroke-linecap="round" fill="none"/>
<!-- ====================================================================
     MUG. It was a rect with a hook. A vessel has a curved wall that narrows
     to the foot, a rim ellipse and a handle that leaves and returns.
     ==================================================================== -->
<g>
  <ellipse cx="312" cy="181" rx="8" ry="2" fill="#181208" opacity="0.4"/>
  <path d="M305,166 Q305,178 307,180 L317,180 Q319,178 319,166 Z" fill="#8a7a60"/>
  <path d="M305,166 Q305,178 307,180 L310,180 Q308,177 308,166 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M316,166 Q316,177 314.5,180 L317,180 Q319,178 319,166 Z" fill="#665a44" opacity="0.7"/>
  <path d="M319,168.5 Q325,169 325.5,173 Q325,177 319,177.5 L319,175.5 Q323,175 323.3,173 Q323,171 319,170.5 Z" fill="#8a7a60"/>
  <ellipse cx="312" cy="166" rx="7" ry="2.2" fill="#3a3226"/>
  <ellipse cx="312" cy="166" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M306,166 Q312,168.6 318,166 Q312,167.4 306,166 Z" fill="#6a4a2a" opacity="0.7"/>
</g>
<!-- Steam, drifting and fading so the loop has no seam -->
<g opacity="0.32">
  <path d="M309,163 Q307,156 310,150 Q312,145 310,141" fill="none" stroke="#b4b0a6" stroke-width="1" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.9;0" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M314,163 Q317,155 314,149 Q312,144 315,140" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.75;0" dur="3.4s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keyTimes="0;0.45;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
<!-- ====================================================================
     CEILING LAMP. It was a floating dot. A hanging lamp hangs plumb, from a
     flex, under a shade whose underside catches the bulb.
     ==================================================================== -->
<path d="M250,20 L250,68" stroke="#5a5348" stroke-width="0.7" opacity="0.6" fill="none"/>
<path d="M236,80 Q240,66 250,66 Q260,66 264,80 Z" fill="#4a4030"/>
<path d="M236,80 Q240,66 250,66 Q246,70 244,80 Z" fill="#6a5c44" opacity="0.7"/>
<path d="M236,80 Q250,84 264,80 Q250,82.5 236,80 Z" fill="#ffe880" opacity="0.5"/>
<circle cx="250" cy="82" r="3" fill="#ffe880" opacity="0.55">
  <animate attributeName="opacity" values="0.45;0.65;0.45" dur="5.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="82" r="12" fill="#ffe880" opacity="0.07"/>
<!-- the lamp throws a pool on the desk, which is why the paperwork reads -->
<path d="M198,178 Q250,168 302,178 Q250,190 198,178 Z" fill="#ffe880" opacity="0.06"/>
</svg>`;

// Scene 3: Puzzle — "Blemish is also a target (4)" answer MARK — clue etched in lunar rock
STORY_SCENES['moon_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m3Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="60%" stop-color="#14120e"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m3ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m3TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#m3Bg)"/>
<!-- Dome glass behind showing stars -->
<path d="M0,0 L0,100 Q250,70 500,100 L500,0 Z" fill="#060810"/>
<g fill="#f4f2ee" opacity="0.3">
  <circle cx="60" cy="30" r="0.6"/><circle cx="150" cy="20" r="0.8"/><circle cx="250" cy="15" r="0.5"/>
  <circle cx="340" cy="25" r="0.7"/><circle cx="430" cy="18" r="0.6"/><circle cx="100" cy="50" r="0.4"/>
  <circle cx="200" cy="45" r="0.5"/><circle cx="380" cy="42" r="0.6"/><circle cx="460" cy="50" r="0.4"/>
  <circle cx="30" cy="62" r="0.5"/><circle cx="290" cy="58" r="0.4"/>
</g>
<!-- Glazing ribs on the dome wall behind -->
<path d="M120,0 Q116,58 118,90 M250,0 L250,84 M380,0 Q384,58 382,90" stroke="#d4d0c0" stroke-width="0.4" opacity="0.1" fill="none"/>
<path d="M0,58 Q250,36 500,58" stroke="#d4d0c0" stroke-width="0.4" opacity="0.08" fill="none"/>
<!-- Earth through dome glass -->
<circle cx="420" cy="35" r="8" fill="#1a4a6a" opacity="0.5"/>
<path d="M416,31 Q419,33 417,37 Q421,39 424,35 Q422,32 418,30" fill="#2a8a5a" opacity="0.25"/>
<!-- ====================================================================
     FLOOR. It was a rounded rect butted against the dark. Now the deck runs
     back to the dome wall with a plinth where the two meet, and the boards
     converge, so the slab has somewhere to stand.
     ==================================================================== -->
<path d="M0,150 Q250,138 500,150 L500,260 L0,260 Z" fill="#2a2418"/>
<path d="M0,150 Q250,138 500,150 Q250,144 0,156 Z" fill="#3d3422" opacity="0.8"/>
<path d="M0,152 Q250,140 500,152" stroke="#4a3c26" stroke-width="0.8" opacity="0.5" fill="none"/>
<path d="M60,145 Q46,200 24,260 M158,142 Q152,198 142,260 M250,140 L250,260 M342,142 Q348,198 358,260 M440,145 Q454,200 476,260" stroke="#211b11" stroke-width="0.8" opacity="0.5" fill="none"/>
<path d="M0,180 Q250,168 500,180 M0,222 Q250,208 500,222" stroke="#211b11" stroke-width="0.7" opacity="0.35" fill="none"/>
<!-- ====================================================================
     THE SLAB. It was a rounded pill in mauve grey, which reads as soap. A
     piece of lunar rock is FACETED: flat planes meeting at angles, the ones
     turned to the light pale and the ones turned away nearly black. It is
     built here as a block with real thickness, so there is a top plane you
     look down onto and a front face you look at, separated by a hard edge.
     The light is high right, matching every other moon scene, so the cast
     shadow falls down and to the LEFT.
     ==================================================================== -->
<path d="M138,208 Q170,199 232,200 Q286,201 318,207 Q280,220 210,221 Q152,218 138,208 Z" fill="#161208" opacity="0.65"/>
<path d="M148,206 Q182,199 236,200 Q282,201 306,205 Q272,213 208,214 Q158,212 148,206 Z" fill="#100c06" opacity="0.5"/>
<!-- BACK of the block, in shade, offset up and left so it reads behind -->
<path d="M172,148 L198,139 L312,141 L332,150 L328,182 L176,182 Z" fill="#3a3831"/>
<!-- TOP plane, looked down on, catching the most light of the three -->
<path d="M172,148 L198,139 L312,141 L332,150 L338,158 L304,160 L186,159 L166,155 Z" fill="#9a988e"/>
<path d="M198,139 L312,141 L332,150 L300,151 L200,149 Z" fill="#b2b0a6" opacity="0.75"/>
<path d="M172,148 L198,139 L200,149 L186,159 L166,155 Z" fill="#7e7c73"/>
<!-- FRONT FACE, the dressed plane that carries the clue -->
<path d="M166,155 L186,159 L304,160 L338,158 L334,190 L312,196 L192,195 L170,188 Z" fill="#6f6d65"/>
<!-- hard top edge, the line that makes the block read as solid -->
<path d="M166,155 L186,159 L304,160 L338,158 L338,161.4 L304,163.4 L186,162.4 L166,158.4 Z" fill="#a8a69c" opacity="0.7"/>
<!-- the sunward end of the face, chamfered, the brightest plane on the rock -->
<path d="M312,160 L338,158 L334,190 L312,196 L308,163 Z" fill="#8b8980"/>
<path d="M324,159.2 L338,158 L334,190 L324,193 Z" fill="#a2a096" opacity="0.7"/>
<!-- the shaded end, opposite side, so bright and dark are never adjacent -->
<path d="M166,155 L186,159 L190,195 L170,188 Z" fill="#4a4841"/>
<path d="M166,155 L176,157 L180,190 L170,188 Z" fill="#3c3a34"/>
<!-- BOTTOM plane, where the block meets the dust, darkest of all -->
<path d="M170,188 L192,195 L312,196 L334,190 L336,199 L310,203 L190,202 L168,196 Z" fill="#2e2c27"/>
<!-- fracture facets across the face -->
<path d="M204,164 L218,178 L206,190 L196,174 Z" fill="#7c7a72" opacity="0.45"/>
<path d="M232,163 L258,166 L262,182 L238,180 Z" fill="#605e57" opacity="0.4"/>
<path d="M262,182 L258,166 L276,168 L280,184 Z" fill="#7a786f" opacity="0.35"/>
<path d="M286,166 L302,167 L300,186 L288,186 Z" fill="#5c5a53" opacity="0.4"/>
<!-- chisel marks along the dressed edge, and a chipped corner -->
<path d="M176,164 L182,163 M177,169 L183,168 M178,174 L184,173 M179,179 L185,178" stroke="#a8a69c" stroke-width="0.8" opacity="0.4" fill="none"/>
<path d="M334,190 L336,199 L322,196 Z" fill="#a8a69c" opacity="0.35"/>
<path d="M198,139 L212,141 L204,146 Z" fill="#c2c0b6" opacity="0.4"/>
<path d="M256,141 L272,142 L266,147 L254,146 Z" fill="#b2b0a6" opacity="0.35"/>
<!-- ====================================================================
     THE CLUE, cut into the dressed face and glowing. Sunk letters read by the
     shadow that sits below and left of them, so a dark ghost goes down first.
     ==================================================================== -->
<g opacity="0.5">
  <text x="250.8" y="176" text-anchor="middle" fill="#2a2820" font-family="'Fredoka One',cursive" font-size="9" letter-spacing="0.5">Blemish is also</text>
  <text x="250.8" y="187" text-anchor="middle" fill="#2a2820" font-family="'Fredoka One',cursive" font-size="9" letter-spacing="0.5">a target (4)</text>
</g>
<g filter="url(#m3TextGlow)">
  <text x="250" y="175" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">Blemish is also</text>
  <text x="250" y="186" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">a target (4)</text>
</g>
<ellipse cx="250" cy="178" rx="80" ry="24" fill="url(#m3ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- ====================================================================
     A SMALL SIDE TABLE with the working papers. It was a floating white rect
     with lines ruled across it. Now it is a table with legs on the deck, and
     the grid on it has blocked squares and a couple of pencilled letters.
     ==================================================================== -->
<g>
  <ellipse cx="404" cy="222" rx="52" ry="6" fill="#141009" opacity="0.45"/>
  <path d="M368,190 L372,190 L370,220 L366,220 Z" fill="#33260f"/>
  <path d="M436,190 L440,190 L442,220 L438,220 Z" fill="#33260f"/>
  <path d="M362,192 L369,192 L366,218 L359,218 Z" fill="#4a3820"/>
  <path d="M362,192 L365,192 L362,218 L359,218 Z" fill="#6a5330" opacity="0.45"/>
  <path d="M439,192 L446,192 L449,218 L442,218 Z" fill="#4a3820"/>
  <path d="M444,192 L446,192 L449,218 L447,218 Z" fill="#2a1e0c" opacity="0.6"/>
  <path d="M366,206 L442,206 L442,209 L366,209 Z" fill="#3d2c17"/>
  <path d="M352,184 Q404,180 456,184 L458,189 Q404,185 350,189 Z" fill="#6a5330"/>
  <path d="M350,189 Q404,185 458,189 L458,193 Q404,189 350,193 Z" fill="#4a3820"/>
  <path d="M354,185 Q404,181.5 454,185 Q404,183 354,185 Z" fill="#8a6e42" opacity="0.5"/>
</g>
<!-- the grid, lying on the table in its perspective -->
<g>
  <path d="M366,166 L420,163 L424,183 L368,185 Z" fill="#e8e0d0" opacity="0.72"/>
  <g stroke="#7a746a" stroke-width="0.4" opacity="0.7" fill="none">
    <path d="M377,165.4 L379,184.6 M388,164.8 L390.7,184.2 M399,164.2 L402.4,183.8 M410,163.6 L414.1,183.4"/>
    <path d="M366.8,170 L420.8,167 M367.6,174 L421.7,171 M368.4,178 L422.6,175 M367.2,181 L423.5,179"/>
  </g>
  <path d="M377,165.4 L388,164.8 L390.7,169.3 L379.5,169.9 Z" fill="#3a352d" opacity="0.75"/>
  <path d="M399,173.4 L410,172.8 L414.1,177.7 L402.9,178.3 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M366,166 L420,163 L420.4,164.5 L366.2,167.5 Z" fill="#f4eedd" opacity="0.45"/>
  <path d="M368,185 L424,183 L424.6,184.4 L368.4,186.4 Z" fill="#a8a294" opacity="0.4"/>
  <!-- two letters already pencilled in -->
  <path d="M370.5,170.8 L372.6,175.4 L374.8,170.2 M371.4,173.3 L373.8,173.2" stroke="#4a4640" stroke-width="0.6" opacity="0.55" fill="none"/>
  <path d="M392.4,175.4 L392.9,180 M392.4,175.4 L395.6,175.2 Q396.6,177.3 393,177.5 L392.6,177.5" stroke="#4a4640" stroke-width="0.6" opacity="0.5" fill="none"/>
</g>
<!-- a pencil laid across the table, and a chisel next to it, because someone cut that rock -->
<path d="M354,175 Q362,177 370,179.6" stroke="#8a6a3a" stroke-width="1.8" stroke-linecap="round" fill="none"/>
<path d="M353,174.6 Q350,174 348.6,171.8 Q351.6,172.4 353.4,173.6 Z" fill="#c8b088"/>
<path d="M349.4,172.4 Q348.8,171.9 348.6,171.8 Q348.8,172.6 349,173 Z" fill="#3a352d"/>
<g>
  <path d="M424,192 Q434,190 444,192 Q436,196 424,192 Z" fill="#6a6860" opacity="0.75"/>
  <path d="M428,190.6 Q436,188.8 442,190.8 Q436,192.4 428,190.6 Z" fill="#8a8880" opacity="0.6"/>
</g>
<!-- ====================================================================
     A WORK LIGHT clamped to the dome rib, aimed at the slab. If a light
     source exists it must be somewhere, and this is where the glow on the
     dressed face comes from.
     ==================================================================== -->
<path d="M250,84 L250,108" stroke="#5a5348" stroke-width="0.8" opacity="0.55" fill="none"/>
<path d="M238,120 Q242,106 250,106 Q258,106 262,120 Z" fill="#4a4030"/>
<path d="M238,120 Q242,106 250,106 Q246,110 244,120 Z" fill="#6a5c44" opacity="0.7"/>
<path d="M238,120 Q250,123.5 262,120 Q250,122 238,120 Z" fill="#ffe880" opacity="0.5"/>
<circle cx="250" cy="122" r="3" fill="#ffe880" opacity="0.45">
  <animate attributeName="opacity" values="0.32;0.5;0.32" dur="5.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="122" r="18" fill="#ffe880" opacity="0.045"/>
<path d="M240,122 Q198,142 178,152 Q216,146 250,124 Q284,146 322,152 Q302,142 260,122 Z" fill="#ffe880" opacity="0.045"/>
</svg>`;

// Scene 4: Mark's character, warm dome interior
STORY_SCENES['moon_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m4DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m4WarmLight" cx="42%" cy="55%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.14"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="m4Floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3e3322"/><stop offset="100%" stop-color="#231d13"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#m4DomeBg)"/>
<!-- Curved dome glass. Closer camera than moon_2, so the shell rises out of frame -->
<path d="M12,250 Q10,26 250,10 Q490,26 488,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.3"/>
<path d="M34,250 Q32,46 250,32 Q468,46 466,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<path d="M250,10 L250,250 M150,15 Q140,130 138,250 M350,15 Q360,130 362,250 M60,42 Q40,140 36,250 M440,42 Q460,140 464,250" stroke="#d4d0c0" stroke-width="0.4" opacity="0.1" fill="none"/>
<path d="M22,116 Q250,90 478,116" stroke="#d4d0c0" stroke-width="0.4" opacity="0.09" fill="none"/>
<!-- Stars through dome -->
<g fill="#f4f2ee" opacity="0.35">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="62" cy="88" r="0.4"/><circle cx="440" cy="82" r="0.5"/><circle cx="290" cy="60" r="0.4"/>
</g>
<!-- Earth through dome -->
<circle cx="390" cy="50" r="11" fill="#1a4a6a" opacity="0.5"/>
<path d="M385,45 Q389,48 386,53 Q391,55 395,50 Q392,46 388,44" fill="#2a8a5a" opacity="0.3"/>
<circle cx="390" cy="50" r="11" fill="none" stroke="#4a9aba" stroke-width="0.3" opacity="0.2"/>
<!-- Warm glow overlay -->
<rect x="0" y="0" width="500" height="260" fill="url(#m4WarmLight)"/>
<!-- Floor, sweeping out to meet the shell -->
<path d="M18,250 Q26,204 84,198 Q250,186 416,198 Q474,204 482,250 Z" fill="url(#m4Floor)"/>
<path d="M18,250 Q26,204 84,198 Q250,186 416,198 Q474,204 482,250 Z" fill="none" stroke="#4a3c26" stroke-width="0.8" opacity="0.5"/>
<path d="M86,199 Q80,224 72,250 M168,193 Q166,222 162,250 M250,191 L250,250 M332,193 Q334,222 338,250 M414,199 Q420,224 428,250" stroke="#241e14" stroke-width="0.7" opacity="0.5" fill="none"/>
<path d="M30,222 Q250,208 470,222" stroke="#241e14" stroke-width="0.6" opacity="0.38" fill="none"/>
<!-- ====================================================================
     A RUG, which is what makes a shelter read as somebody's home rather than
     a room with furniture in it. Woven border, worn thin at the chair.
     ==================================================================== -->
<path d="M96,224 Q250,210 404,224 Q250,244 96,224 Z" fill="#5a3a30" opacity="0.55"/>
<path d="M110,223.5 Q250,211.4 390,223.5 Q250,240 110,223.5 Z" fill="none" stroke="#8a5a44" stroke-width="0.8" opacity="0.4"/>
<path d="M132,223 Q250,213 368,223 Q250,235 132,223 Z" fill="#6a4436" opacity="0.4"/>
<path d="M150,219 Q250,214.6 350,219 M144,228 Q250,222 356,228" stroke="#8a5a44" stroke-width="0.5" opacity="0.28" fill="none"/>
<!-- ====================================================================
     BOOKSHELF, one tall case at left this time since the camera is closer.
     Carcass, back panel, shelf boards, plinth on the deck, books that vary in
     width and height with a few leaning into their neighbours.
     ==================================================================== -->
<g>
  <path d="M40,74 L84,79 L84,202 L40,197 Z" fill="#33260f"/>
  <path d="M40,74 L84,79 L84,86 L40,81 Z" fill="#5a4526" opacity="0.85"/>
  <path d="M40,74 L46,74.7 L46,197.7 L40,197 Z" fill="#6a5330" opacity="0.5"/>
  <path d="M78,78.4 L84,79 L84,202 L78,201.3 Z" fill="#241a0b" opacity="0.8"/>
  <path d="M43,108 L82,112 L82,115 L43,111 Z" fill="#5a4526"/>
  <path d="M43,140 L82,144 L82,147 L43,143 Z" fill="#5a4526"/>
  <path d="M43,170 L82,174 L82,177 L43,173 Z" fill="#5a4526"/>
  <path d="M41,190 L84,194 L84,199 L41,195 Z" fill="#4a3820"/>
  <path d="M46,90 L51,90.5 L51,108.6 L46,108.1 Z" fill="#8a6040"/>
  <path d="M51.5,86 L55,86.4 L55,109 L51.5,108.6 Z" fill="#6a8050"/>
  <path d="M55.5,92 L62,92.7 L62,109.6 L55.5,109 Z" fill="#8a5040"/>
  <path d="M63,88 L66,88.3 L66,110 L63,109.7 Z" fill="#5a6a80"/>
  <path d="M67,94 L73,94.6 L73,110.4 L67,109.8 Z" fill="#8a7040"/>
  <path d="M74,97 L81,105 L81,111 L74,110.5 Z" fill="#6a5060"/>
  <path d="M46,122 L52,122.6 L52,140.7 L46,140.1 Z" fill="#5a6a80"/>
  <path d="M53,118 L56,118.3 L56,141 L53,140.7 Z" fill="#8a7040"/>
  <path d="M57,124 L64,124.7 L64,141.5 L57,140.9 Z" fill="#6a5060"/>
  <path d="M65,120 L69,120.4 L69,141.9 L65,141.5 Z" fill="#4a6a5a"/>
  <path d="M70,126 L76,126.6 L76,142.4 L70,141.8 Z" fill="#8a6040"/>
  <path d="M77,123 L81,123.4 L81,142.8 L77,142.4 Z" fill="#6a8050"/>
  <path d="M46,152 L50,152.4 L50,170.7 L46,170.3 Z" fill="#6a8050"/>
  <path d="M51,148 L58,148.7 L58,171.5 L51,170.8 Z" fill="#8a5040"/>
  <path d="M59,154 L62,154.3 L62,171.8 L59,171.5 Z" fill="#5a6a80"/>
  <path d="M63,150 L68,150.5 L68,172.3 L63,171.8 Z" fill="#8a7040"/>
  <path d="M69,156 L81,166 L81,173 L69,172.4 Z" fill="#8a6040"/>
  <path d="M46,182 L72,184.4 L72,188.4 L46,186 Z" fill="#5a6a80" opacity="0.85"/>
  <path d="M47,177 L68,178.9 L68,182.2 L47,180.3 Z" fill="#8a7040" opacity="0.8"/>
  <!-- a small globe on the top, because he watches home -->
  <circle cx="62" cy="70" r="6.5" fill="#1a4a6a"/>
  <path d="M57,66 Q61,68 58,72 Q63,75 67,70 Q64,65 60,64" fill="#2a8a5a" opacity="0.55"/>
  <path d="M55.5,70 Q62,73.5 68.5,70" stroke="#4a9aba" stroke-width="0.5" opacity="0.4" fill="none"/>
  <path d="M55,72 Q62,68 69,72 Q62,80 55,72 Z" fill="#5a4526"/>
</g>
<path d="M36,199 Q60,194 88,199 Q60,205 36,199 Z" fill="#181208" opacity="0.5"/>
<!-- ====================================================================
     ARMCHAIR, turned three quarters toward the desk so the room has someone
     in mind. A blanket thrown over the near arm, slippers pushed underneath.
     ==================================================================== -->
<g>
  <ellipse cx="152" cy="212" rx="36" ry="6" fill="#181208" opacity="0.5"/>
  <path d="M126,204 Q118,148 130,136 Q152,126 174,136 Q186,148 178,204 Z" fill="#4a2c1c"/>
  <path d="M131,197 Q126,154 137,144 Q152,137 167,144 Q178,154 173,197 Z" fill="#5e3a26"/>
  <path d="M137,190 Q133,160 141,151 Q152,146 163,151 Q171,160 167,190 Z" fill="#6a4838" opacity="0.75"/>
  <path d="M144,152 Q147,168 145,188 M160,152 Q157,168 159,188" stroke="#54382a" stroke-width="0.7" opacity="0.5" fill="none"/>
  <circle cx="145" cy="157" r="0.9" fill="#3e2418" opacity="0.6"/>
  <circle cx="152" cy="155.5" r="0.9" fill="#3e2418" opacity="0.6"/>
  <circle cx="159" cy="157" r="0.9" fill="#3e2418" opacity="0.6"/>
  <circle cx="148" cy="170" r="0.9" fill="#3e2418" opacity="0.55"/>
  <circle cx="156" cy="170" r="0.9" fill="#3e2418" opacity="0.55"/>
  <path d="M118,204 Q113,174 121,167 Q131,162 136,170 L136,204 Z" fill="#4a2818"/>
  <path d="M118,176 Q118,166 127,165 Q136,166 136,176 Q127,181 118,176 Z" fill="#66412c"/>
  <path d="M186,204 Q191,174 183,167 Q173,162 168,170 L168,204 Z" fill="#3e2214"/>
  <path d="M168,176 Q168,166 177,165 Q186,166 186,176 Q177,181 168,176 Z" fill="#5a3826"/>
  <path d="M122,182 Q152,174 182,182 Q185,195 178,199 Q152,204 126,199 Q119,195 122,182 Z" fill="#71503b"/>
  <path d="M122,182 Q152,174 182,182 Q152,187 122,182 Z" fill="#835f47" opacity="0.7"/>
  <!-- blanket thrown over the near arm, hanging in uneven folds with a
       ragged hem, so it reads as cloth rather than a cushion -->
  <path d="M115,171 Q125,164 136,170 Q138,182 134,193 Q129,199 124,197 Q120,201 116,198 Q111,186 115,171 Z" fill="#5e4436" opacity="0.95"/>
  <path d="M115,171 Q125,164 136,170 Q125,169 117,175 Z" fill="#7a5a48" opacity="0.6"/>
  <path d="M120,178 Q124,186 121,196 M127,175 Q131,185 128,194 M133,174 Q135,182 133,190" stroke="#452f24" stroke-width="0.7" opacity="0.65" fill="none"/>
  <path d="M116,198 Q120,203 124,197 Q129,202 134,193 Q131,201 124,200 Q119,204 116,198 Z" fill="#4c372b"/>
  <!-- legs -->
  <path d="M128,203 L132,203 L133,212 L128,212 Z" fill="#33200f"/>
  <path d="M173,203 L177,203 L176,212 L171,212 Z" fill="#33200f"/>
  <path d="M139,202 L142,202 L142,209 L139,209 Z" fill="#2a1a0c" opacity="0.7"/>
  <!-- slippers pushed under the chair -->
  <path d="M144,213 Q152,209 158,212 Q160,217 154,218 Q146,218 144,213 Z" fill="#5a4436"/>
  <path d="M144,213 Q152,209 158,212 Q151,212 145,215 Z" fill="#76594a" opacity="0.7"/>
  <path d="M160,214 Q168,210 174,213 Q176,218 170,219 Q162,219 160,214 Z" fill="#4e3a2e"/>
</g>
<!-- ====================================================================
     DESK, legs first then the top. Same object as moon_2, seen from closer,
     so it is drawn a little larger and the near legs read properly.
     ==================================================================== -->
<g>
  <ellipse cx="316" cy="210" rx="94" ry="5.5" fill="#181208" opacity="0.45"/>
  <path d="M256,174 L261,174 L260,205 L256,205 Z" fill="#33260f"/>
  <path d="M372,174 L377,174 L376,205 L372,205 Z" fill="#33260f"/>
  <path d="M240,176 L249,176 L248,185 Q251,188 248,192 L247,207 L239,207 L238,192 Q235,188 238,185 Z" fill="#4a3820"/>
  <path d="M240,176 L243,176 L242,207 L239,207 Z" fill="#6a5330" opacity="0.5"/>
  <path d="M386,176 L395,176 L396,185 Q399,188 396,192 L397,207 L389,207 L388,192 Q385,188 388,185 Z" fill="#4a3820"/>
  <path d="M392,176 L395,176 L396,207 L393,207 Z" fill="#2a1e0c" opacity="0.6"/>
  <path d="M247,196 L389,196 L389,199.5 L247,199.5 Z" fill="#3d2c17"/>
  <path d="M252,174 L384,174 L384,188 L252,188 Z" fill="#4a3820"/>
  <path d="M258,176 L316,176 L316,186 L258,186 Z" fill="#3d2c17"/>
  <path d="M258,176 L316,176 L316,178.2 L258,178.2 Z" fill="#6a5330" opacity="0.4"/>
  <path d="M284,180.5 Q290,179.5 290,181.8 Q290,184 284,183 Z" fill="#8a7a60" opacity="0.8"/>
  <path d="M226,167 Q316,163 406,167 L408,171.5 Q316,167.5 224,171.5 Z" fill="#6a5330"/>
  <path d="M224,171.5 Q316,167.5 408,171.5 L408,176 Q316,172 224,176 Z" fill="#4a3820"/>
  <path d="M228,168 Q316,164.4 404,168 Q316,166 228,168 Z" fill="#8a6e42" opacity="0.5"/>
</g>
<!-- Crosswords lying on the desk, foreshortened onto its plane -->
<g>
  <path d="M246,158 L282,156 L286,170 L248,171 Z" fill="#e8e0d0" opacity="0.88"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.7" fill="none">
    <path d="M253,157.6 L254.7,170.8 M260,157.2 L262.3,170.6 M267,156.8 L269.9,170.4 M274,156.4 L277.5,170.2"/>
    <path d="M246.6,161 L282.7,159 M247.3,164.5 L283.9,162.5 M248,168 L285,166"/>
  </g>
  <path d="M253,157.6 L260,157.2 L262.3,161.3 L254.7,161.7 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M267,163.9 L274,163.5 L277.5,167.9 L269.9,168.3 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M246,158 L282,156 L282.4,157.3 L246.2,159.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M248,171 L286,170 L286.6,171.4 L248.4,172.4 Z" fill="#a8a294" opacity="0.45"/>
</g>
<g>
  <path d="M294,162 L328,163 L330,172 L293,171 Z" fill="#e2dbc9" opacity="0.8"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.5" fill="none">
    <path d="M300,162.2 L299.4,171.2 M307,162.4 L306.7,171.4 M314,162.6 L314,171.6 M321,162.8 L321.3,171.8"/>
    <path d="M293.7,165 L328.7,166 M293.3,168 L329.4,169"/>
  </g>
  <path d="M307,165.3 L314,165.5 L314,168.5 L306.9,168.3 Z" fill="#3a352d" opacity="0.55"/>
</g>
<g>
  <path d="M338,160 L368,162 Q371,169 366,173 Q350,175 336,171 Z" fill="#ddd8c8" opacity="0.7"/>
  <path d="M344,160.4 L342.6,172.6 M352,160.9 L351,174 M360,161.4 L359.4,174" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M336.6,165 L369.4,167 M336.2,169 L367.8,171" stroke="#7a746a" stroke-width="0.3" opacity="0.4" fill="none"/>
  <path d="M368,162 Q371,169 366,173 Q369,167 366,162.6 Z" fill="#b0aa9a" opacity="0.6"/>
</g>
<!-- Pen, put down mid clue -->
<path d="M226,160 Q236,161.6 246,163.8" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M245,163.6 Q248.4,164.2 250,165.8 Q247.2,165.6 245.4,164.9 Z" fill="#b8b6ac"/>
<path d="M227,160.2 Q231,160.8 234,161.5" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<!-- Mug, drawn as a vessel: curved wall, rim ellipse, handle that leaves and returns -->
<g>
  <ellipse cx="378" cy="168" rx="8" ry="2" fill="#181208" opacity="0.4"/>
  <path d="M371,153 Q371,165 373,167 L383,167 Q385,165 385,153 Z" fill="#8a7a60"/>
  <path d="M371,153 Q371,165 373,167 L376,167 Q374,164 374,153 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M382,153 Q382,164 380.5,167 L383,167 Q385,165 385,153 Z" fill="#665a44" opacity="0.7"/>
  <path d="M385,155.5 Q391,156 391.5,160 Q391,164 385,164.5 L385,162.5 Q389,162 389.3,160 Q389,158 385,157.5 Z" fill="#8a7a60"/>
  <ellipse cx="378" cy="153" rx="7" ry="2.2" fill="#3a3226"/>
  <ellipse cx="378" cy="153" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M372,153 Q378,155.6 384,153 Q378,154.4 372,153 Z" fill="#6a4a2a" opacity="0.7"/>
</g>
<g opacity="0.32">
  <path d="M375,150 Q373,143 376,137 Q378,132 376,128" fill="none" stroke="#b4b0a6" stroke-width="1" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.9;0" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
  <path d="M380,150 Q383,142 380,136 Q378,131 381,127" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.72;0" dur="3.6s" repeatCount="indefinite" begin="1.3s" calcMode="spline" keyTimes="0;0.45;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
<!-- ====================================================================
     A DESK LAMP, which is the light that actually falls on the crosswords.
     Weighted base, jointed arm, conical shade whose mouth faces the paper.
     ==================================================================== -->
<g>
  <path d="M410,166 Q420,162 430,166 Q420,170 410,166 Z" fill="#3d3527"/>
  <path d="M418,165 Q419,150 412,140" stroke="#5a5248" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <path d="M412,140 Q408,133 398,131" stroke="#5a5248" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="412" cy="140" r="1.6" fill="#6a6258"/>
  <path d="M398,131 Q384,133 380,143 Q392,148 400,140 Z" fill="#4a4030"/>
  <path d="M398,131 Q384,133 380,143 Q388,136 398,134 Z" fill="#6a5c44" opacity="0.7"/>
  <path d="M380,143 Q390,147 400,140 Q390,145 380,143 Z" fill="#ffe880" opacity="0.5"/>
  <path d="M382,145 Q356,158 330,168 Q356,164 392,146 Z" fill="#ffe880" opacity="0.07"/>
</g>
<!-- Hanging ceiling lamp, hanging plumb -->
<path d="M250,10 L250,58" stroke="#5a5348" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M238,70 Q242,56 250,56 Q258,56 262,70 Z" fill="#4a4030"/>
<path d="M238,70 Q242,56 250,56 Q246,60 244,70 Z" fill="#6a5c44" opacity="0.7"/>
<path d="M238,70 Q250,73.5 262,70 Q250,72.5 238,70 Z" fill="#ffe880" opacity="0.5"/>
<circle cx="250" cy="72" r="3" fill="#ffe880" opacity="0.5">
  <animate attributeName="opacity" values="0.36;0.56;0.36" dur="6.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="72" r="13" fill="#ffe880" opacity="0.06"/>
<!-- Wall sconces on the shell ribs -->
<path d="M96,138 Q102,132 108,138 Q102,142 96,138 Z" fill="#4a4030"/>
<circle cx="102" cy="137" r="2.6" fill="#ffe880" opacity="0.22"/>
<path d="M394,110 Q400,104 406,110 Q400,114 394,110 Z" fill="#4a4030"/>
<circle cx="400" cy="109" r="2.6" fill="#ffe880" opacity="0.2"/>
</svg>`;

// Scene 5: Puzzle — "Lunar feature from confused tracer (6)" answer CRATER — clue etched in lunar rock
STORY_SCENES['moon_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m5Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="60%" stop-color="#14120e"/><stop offset="100%" stop-color="#1a1810"/>
  </linearGradient>
  <radialGradient id="m5ClueGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <filter id="m5TextGlow"><feGaussianBlur stdDeviation="1" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#m5Bg)"/>
<!-- Dome glass behind showing stars and the plain outside -->
<path d="M0,0 L0,100 Q250,70 500,100 L500,0 Z" fill="#060810"/>
<g fill="#f4f2ee" opacity="0.3">
  <circle cx="50" cy="25" r="0.7"/><circle cx="120" cy="15" r="0.5"/><circle cx="200" cy="30" r="0.6"/>
  <circle cx="280" cy="12" r="0.8"/><circle cx="360" cy="28" r="0.5"/><circle cx="440" cy="20" r="0.7"/>
  <circle cx="90" cy="55" r="0.4"/><circle cx="180" cy="48" r="0.6"/><circle cx="320" cy="45" r="0.5"/>
  <circle cx="410" cy="52" r="0.4"/><circle cx="470" cy="38" r="0.6"/>
</g>
<!-- Earth through dome -->
<circle cx="60" cy="40" r="9" fill="#1a4a6a" opacity="0.5"/>
<path d="M56,36 Q59,38 57,42 Q61,44 64,40 Q62,37 58,35" fill="#2a8a5a" opacity="0.25"/>
<!-- ====================================================================
     THE PLAIN OUTSIDE, seen through the glass. It was a flat band. Since the
     answer to this clue IS a crater, the view earns a real one: rim ring,
     lit far wall and shadowed near wall on OPPOSITE sides, ejecta streaks.
     Distance eats contrast, so the whole thing is veiled toward the dark.
     ==================================================================== -->
<path d="M0,100 Q100,92 200,98 Q300,88 400,96 Q450,92 500,100 L500,120 Q400,112 300,118 Q200,110 100,116 Q50,120 0,116 Z" fill="#6a6860" opacity="0.28"/>
<g opacity="0.34">
  <ellipse cx="300" cy="108" rx="46" ry="8" fill="#8f8d84"/>
  <ellipse cx="300" cy="108" rx="42" ry="6" fill="#4e4c46"/>
  <path d="M258,108 A42,6 0 0 1 342,108 A30,4 0 0 0 258,108 Z" fill="#a8a69c"/>
  <path d="M258,108 A42,6 0 0 0 342,108 A30,4 0 0 1 258,108 Z" fill="#2e2c28"/>
  <ellipse cx="300" cy="108" rx="24" ry="3" fill="#3e3c38"/>
  <path d="M255,106 l-14,-3 M345,107 l13,-3 M300,99 l3,-5" stroke="#9a9890" stroke-width="1.2" opacity="0.5" fill="none"/>
</g>
<g opacity="0.22">
  <ellipse cx="130" cy="112" rx="26" ry="5" fill="#8f8d84"/>
  <ellipse cx="130" cy="112" rx="22" ry="3.5" fill="#4e4c46"/>
  <path d="M108,112 A22,3.5 0 0 1 152,112 A15,2 0 0 0 108,112 Z" fill="#a8a69c"/>
  <path d="M108,112 A22,3.5 0 0 0 152,112 A15,2 0 0 1 108,112 Z" fill="#2e2c28"/>
</g>
<path d="M420,104 L430,98 L442,103 L438,110 L424,110 Z" fill="#7a7870" opacity="0.24"/>
<path d="M420,104 L430,98 L436,102 L426,108 Z" fill="#a8a69c" opacity="0.16"/>
<!-- Glazing ribs on the dome wall -->
<path d="M120,0 Q116,58 118,92 M250,0 L250,86 M380,0 Q384,58 382,92" stroke="#d4d0c0" stroke-width="0.4" opacity="0.1" fill="none"/>
<path d="M0,58 Q250,36 500,58" stroke="#d4d0c0" stroke-width="0.4" opacity="0.08" fill="none"/>
<!-- Floor, running back to the dome wall with converging boards -->
<path d="M0,150 Q250,138 500,150 L500,260 L0,260 Z" fill="#2a2418"/>
<path d="M0,150 Q250,138 500,150 Q250,144 0,156 Z" fill="#3d3422" opacity="0.8"/>
<path d="M0,152 Q250,140 500,152" stroke="#4a3c26" stroke-width="0.8" opacity="0.5" fill="none"/>
<path d="M60,145 Q46,200 24,260 M158,142 Q152,198 142,260 M250,140 L250,260 M342,142 Q348,198 358,260 M440,145 Q454,200 476,260" stroke="#211b11" stroke-width="0.8" opacity="0.5" fill="none"/>
<path d="M0,180 Q250,168 500,180 M0,222 Q250,208 500,222" stroke="#211b11" stroke-width="0.7" opacity="0.35" fill="none"/>
<!-- ====================================================================
     THE BOULDER. moon_3 has a dressed block; this one is a rounder field
     specimen, split open along one plane so the fresh interior is the pale
     face that carries the clue. Same faceted construction, same light from
     high right, same cast shadow down and to the left.
     ==================================================================== -->
<path d="M132,214 Q168,203 234,203 Q294,204 330,211 Q292,224 214,224 Q148,222 132,214 Z" fill="#161208" opacity="0.65"/>
<path d="M144,211 Q182,203 238,204 Q288,205 314,209 Q276,218 208,218 Q156,216 144,211 Z" fill="#100c06" opacity="0.5"/>
<!-- back mass, in shade -->
<path d="M158,158 L184,142 L232,136 L296,140 L336,156 L332,190 L162,190 Z" fill="#3a3831"/>
<!-- the weathered upper planes, catching the light -->
<path d="M158,158 L184,142 L232,136 L296,140 L336,156 L342,164 L296,166 L200,166 L156,162 Z" fill="#8f8d84"/>
<path d="M232,136 L296,140 L336,156 L292,157 L236,152 Z" fill="#b2b0a6" opacity="0.7"/>
<path d="M184,142 L232,136 L236,152 L200,166 L156,162 L158,158 Z" fill="#76746c"/>
<path d="M184,142 L232,136 L226,146 L192,150 Z" fill="#a2a096" opacity="0.5"/>
<!-- the split face, freshly broken, so it is the palest plane on the rock -->
<path d="M156,162 L200,166 L296,166 L342,164 L338,194 L312,201 L192,200 L162,192 Z" fill="#78766e"/>
<path d="M156,162 L200,166 L296,166 L342,164 L342,167.6 L296,169.6 L200,169.6 L156,165.6 Z" fill="#adaba1" opacity="0.7"/>
<!-- sunward end, brightest -->
<path d="M306,166 L342,164 L338,194 L312,201 L302,169 Z" fill="#94928a"/>
<path d="M326,165 L342,164 L338,194 L326,198 Z" fill="#a8a69c" opacity="0.7"/>
<!-- shaded end, on the opposite side -->
<path d="M156,162 L200,166 L204,200 L162,192 Z" fill="#4a4841"/>
<path d="M156,162 L172,164 L176,196 L162,192 Z" fill="#3c3a34"/>
<!-- bottom plane, where it meets the dust -->
<path d="M162,192 L192,200 L312,201 L338,194 L340,203 L310,208 L190,207 L160,200 Z" fill="#2e2c27"/>
<!-- the split line, and conchoidal fracture rings out from the break -->
<path d="M200,166 Q206,180 202,200" stroke="#4a4841" stroke-width="1.1" opacity="0.6" fill="none"/>
<path d="M212,170 Q220,182 214,198 M226,171 Q236,183 230,199" stroke="#5e5c55" stroke-width="0.7" opacity="0.45" fill="none"/>
<path d="M256,168 L282,170 L286,188 L260,186 Z" fill="#66645d" opacity="0.4"/>
<path d="M286,188 L282,170 L300,172 L302,190 Z" fill="#84827a" opacity="0.35"/>
<path d="M176,170 L192,174 L188,192 L174,188 Z" fill="#585650" opacity="0.4"/>
<!-- pits in the weathered top, tiny craters on a lunar rock -->
<ellipse cx="248" cy="150" rx="6" ry="2" fill="#5e5c55" opacity="0.5"/>
<path d="M242,150 A6,2 0 0 1 254,150 A4,1.2 0 0 0 242,150 Z" fill="#b2b0a6" opacity="0.45"/>
<ellipse cx="278" cy="155" rx="4.5" ry="1.6" fill="#5e5c55" opacity="0.45"/>
<path d="M273.5,155 A4.5,1.6 0 0 1 282.5,155 A3,1 0 0 0 273.5,155 Z" fill="#b2b0a6" opacity="0.4"/>
<ellipse cx="206" cy="155" rx="5" ry="1.8" fill="#5e5c55" opacity="0.45"/>
<path d="M201,155 A5,1.8 0 0 1 211,155 A3.4,1.1 0 0 0 201,155 Z" fill="#a2a096" opacity="0.4"/>
<!-- chipped corners -->
<path d="M338,194 L340,203 L326,200 Z" fill="#adaba1" opacity="0.35"/>
<path d="M232,136 L246,138 L238,143 Z" fill="#c2c0b6" opacity="0.4"/>
<!-- flakes knocked off the boulder, lying where they fell -->
<path d="M348,200 L358,196 L366,201 L360,207 L350,206 Z" fill="#5e5c55"/>
<path d="M348,200 L358,196 L362,199 L352,204 Z" fill="#8f8d84" opacity="0.55"/>
<path d="M118,206 L128,201 L138,206 L132,212 L120,211 Z" fill="#54524b"/>
<path d="M118,206 L128,201 L133,204 L122,209 Z" fill="#7e7c74" opacity="0.5"/>
<!-- ====================================================================
     THE CLUE, cut into the split face and glowing. A sunk letter reads by the
     shadow that sits below and left of it, so a dark ghost goes down first.
     ==================================================================== -->
<g opacity="0.5">
  <text x="250.8" y="182" text-anchor="middle" fill="#2a2820" font-family="'Fredoka One',cursive" font-size="9" letter-spacing="0.5">Lunar feature from</text>
  <text x="250.8" y="193" text-anchor="middle" fill="#2a2820" font-family="'Fredoka One',cursive" font-size="9" letter-spacing="0.5">confused tracer (6)</text>
</g>
<g filter="url(#m5TextGlow)">
  <text x="250" y="181" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">Lunar feature from</text>
  <text x="250" y="192" text-anchor="middle" fill="#ffe880" font-family="'Fredoka One',cursive" font-size="9" opacity="0.85" letter-spacing="0.5">confused tracer (6)</text>
</g>
<ellipse cx="250" cy="184" rx="85" ry="24" fill="url(#m5ClueGlow)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</ellipse>
<!-- ====================================================================
     A SURVEY CHART pinned to the dome rib on the right, showing the crater
     field with its rims drawn. The papers were blank rects on the floor.
     ==================================================================== -->
<g>
  <path d="M382,140 L456,136 L460,196 L384,199 Z" fill="#bdb8a8" opacity="0.45"/>
  <path d="M382,140 L456,136 L456.4,138 L382.1,142 Z" fill="#d8d2c2" opacity="0.3"/>
  <path d="M456,136 L460,196 L452,192 L452,138 Z" fill="#b0aa9a" opacity="0.45"/>
  <g opacity="0.55">
    <ellipse cx="412" cy="158" rx="14" ry="5" fill="none" stroke="#5a564c" stroke-width="0.7"/>
    <path d="M398,158 A14,5 0 0 1 426,158" stroke="#3a3630" stroke-width="1.1" fill="none"/>
    <ellipse cx="412" cy="158" rx="7" ry="2.4" fill="#c2bcaa"/>
    <ellipse cx="437" cy="176" rx="9" ry="3.4" fill="none" stroke="#5a564c" stroke-width="0.6"/>
    <path d="M428,176 A9,3.4 0 0 1 446,176" stroke="#3a3630" stroke-width="0.9" fill="none"/>
    <ellipse cx="393" cy="180" rx="6" ry="2.2" fill="none" stroke="#5a564c" stroke-width="0.5"/>
    <path d="M387,180 A6,2.2 0 0 1 399,180" stroke="#3a3630" stroke-width="0.8" fill="none"/>
  </g>
  <path d="M386,146 L404,145 M386,149 L398,148.4" stroke="#7a746a" stroke-width="0.5" opacity="0.4" fill="none"/>
  <path d="M388,190 Q406,188 424,188.6" stroke="#7a746a" stroke-width="0.5" opacity="0.35" fill="none"/>
  <!-- the pin holding it, and the curl where the corner has come loose -->
  <circle cx="419" cy="138.4" r="1.4" fill="#8a8880"/>
  <path d="M384,199 Q392,194 396,186 Q394,196 390,200 Z" fill="#b0aa9a" opacity="0.5"/>
</g>
<!-- ====================================================================
     A CRATE and a rock hammer at the left, so the boulder arrived from
     somewhere. A workshop reads by work in progress.
     ==================================================================== -->
<g>
  <ellipse cx="76" cy="212" rx="34" ry="5" fill="#141009" opacity="0.45"/>
  <path d="M46,178 L70,172 L106,176 L104,206 L74,211 L48,206 Z" fill="#4a3820"/>
  <path d="M46,178 L70,172 L106,176 L74,182 Z" fill="#6a5330"/>
  <path d="M74,182 L106,176 L104,206 L74,211 Z" fill="#3a2c18"/>
  <path d="M46,178 L74,182 L74,211 L48,206 Z" fill="#57421f"/>
  <path d="M52,186 L70,189 M52,194 L70,197 M52,202 L70,204" stroke="#33260f" stroke-width="0.8" opacity="0.6" fill="none"/>
  <path d="M80,183 L102,179 M80,192 L102,188 M80,201 L102,197" stroke="#291f10" stroke-width="0.8" opacity="0.6" fill="none"/>
  <!-- rock samples in the crate -->
  <path d="M76,170 L86,165 L96,170 L92,176 L80,176 Z" fill="#6f6d65"/>
  <path d="M76,170 L86,165 L91,168 L80,174 Z" fill="#9a988e" opacity="0.6"/>
  <path d="M56,172 L64,168 L72,173 L68,178 L58,177 Z" fill="#5e5c55"/>
  <path d="M56,172 L64,168 L68,171 L60,175 Z" fill="#8a8880" opacity="0.55"/>
</g>
<!-- rock hammer leaning on the crate, where a hand left it -->
<path d="M108,206 Q116,190 122,176" stroke="#7a5a34" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M116,178 L128,171 L132,176 L126,181 Z" fill="#8a8880"/>
<path d="M116,178 L128,171 L130,173.6 L118,180 Z" fill="#b0aea4" opacity="0.6"/>
<path d="M126,181 L132,176 L137,180 L131,183 Z" fill="#6a6860"/>
<!-- ====================================================================
     A WORK LIGHT on the dome rib, aimed at the split face. The glow on the
     rock has to come from somewhere.
     ==================================================================== -->
<path d="M250,86 L250,112" stroke="#5a5348" stroke-width="0.8" opacity="0.55" fill="none"/>
<path d="M238,124 Q242,110 250,110 Q258,110 262,124 Z" fill="#4a4030"/>
<path d="M238,124 Q242,110 250,110 Q246,114 244,124 Z" fill="#6a5c44" opacity="0.7"/>
<path d="M238,124 Q250,127.5 262,124 Q250,126 238,124 Z" fill="#ffe880" opacity="0.5"/>
<circle cx="250" cy="126" r="3" fill="#ffe880" opacity="0.45">
  <animate attributeName="opacity" values="0.32;0.5;0.32" dur="5.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="126" r="18" fill="#ffe880" opacity="0.045"/>
<path d="M240,126 Q196,146 168,158 Q210,152 250,128 Q290,152 336,158 Q308,146 260,126 Z" fill="#ffe880" opacity="0.045"/>
</svg>`;

// Scene 6: Mark's final test (the eclipse clue), warm desk scene
STORY_SCENES['moon_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m6DomeBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0a0c14"/><stop offset="100%" stop-color="#1e1a12"/>
  </linearGradient>
  <radialGradient id="m6WarmLight" cx="50%" cy="48%" r="56%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.17"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="m6Floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#443724"/><stop offset="100%" stop-color="#261f14"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#m6DomeBg)"/>
<!-- Dome glass arch -->
<path d="M30,250 Q30,30 250,20 Q470,30 470,250" fill="none" stroke="#d4d0c0" stroke-width="1.5" opacity="0.35"/>
<path d="M50,250 Q50,50 250,40 Q450,50 450,250" fill="none" stroke="#d4d0c0" stroke-width="0.5" opacity="0.15"/>
<path d="M250,20 L250,250 M160,26 Q152,140 150,250 M340,26 Q348,140 350,250 M85,55 Q66,150 62,250 M415,55 Q434,150 438,250" stroke="#d4d0c0" stroke-width="0.4" opacity="0.11" fill="none"/>
<path d="M44,118 Q250,94 456,118" stroke="#d4d0c0" stroke-width="0.4" opacity="0.1" fill="none"/>
<!-- Stars visible through dome -->
<g fill="#f4f2ee" opacity="0.4">
  <circle cx="80" cy="50" r="0.6"/><circle cx="140" cy="35" r="0.8"/><circle cx="200" cy="45" r="0.5"/>
  <circle cx="260" cy="30" r="0.7"/><circle cx="320" cy="42" r="0.6"/><circle cx="380" cy="38" r="0.8"/>
  <circle cx="420" cy="55" r="0.5"/><circle cx="110" cy="70" r="0.4"/><circle cx="350" cy="65" r="0.5"/>
  <circle cx="180" cy="60" r="0.3"/><circle cx="300" cy="55" r="0.6"/><circle cx="430" cy="75" r="0.4"/>
</g>
<!-- Earth through dome, larger and warmer for the approval beat -->
<circle cx="380" cy="48" r="12" fill="#1a4a6a" opacity="0.55"/>
<path d="M374,42 Q379,46 376,52 Q382,56 387,48 Q384,43 378,41" fill="#2a8a5a" opacity="0.3"/>
<circle cx="380" cy="48" r="12" fill="none" stroke="#6abaee" stroke-width="0.4" opacity="0.2"/>
<!-- Warm glow overlay, stronger for approval -->
<rect x="0" y="0" width="500" height="260" fill="url(#m6WarmLight)"/>
<!-- Floor -->
<path d="M36,250 Q42,206 90,201 Q250,190 410,201 Q458,206 464,250 Z" fill="url(#m6Floor)"/>
<path d="M36,250 Q42,206 90,201 Q250,190 410,201 Q458,206 464,250 Z" fill="none" stroke="#54432b" stroke-width="0.8" opacity="0.5"/>
<path d="M92,202 Q88,225 82,250 M170,197 Q168,223 164,250 M250,195 L250,250 M330,197 Q332,223 336,250 M408,202 Q412,225 418,250" stroke="#281f14" stroke-width="0.7" opacity="0.5" fill="none"/>
<path d="M48,222 Q250,210 452,222" stroke="#281f14" stroke-width="0.6" opacity="0.38" fill="none"/>
<!-- ====================================================================
     BOOKSHELVES, the same two cases as moon_2. Carcass with a back panel,
     shelf boards, a plinth on the deck, and books that vary in width and
     height with one or two leaning into their neighbours.
     ==================================================================== -->
<g>
  <path d="M58,94 L88,97 L88,204 L58,201 Z" fill="#3b2c12"/>
  <path d="M58,94 L88,97 L88,102 L58,99 Z" fill="#66502c" opacity="0.85"/>
  <path d="M58,94 L62,94.4 L62,201.4 L58,201 Z" fill="#7a6038" opacity="0.55"/>
  <path d="M84,96.6 L88,97 L88,204 L84,203.6 Z" fill="#281d0d" opacity="0.8"/>
  <path d="M60,118 L87,120 L87,122 L60,120 Z" fill="#66502c"/>
  <path d="M60,144 L87,146 L87,148 L60,146 Z" fill="#66502c"/>
  <path d="M60,170 L87,172 L87,174 L60,172 Z" fill="#66502c"/>
  <path d="M59,194 L88,196 L88,199 L59,197 Z" fill="#4a3820"/>
  <path d="M62,103 L66,103.3 L66,118.3 L62,118 Z" fill="#8a6040"/>
  <path d="M66.5,101 L69.5,101.2 L69.5,118.4 L66.5,118.2 Z" fill="#6a8050"/>
  <path d="M70,104 L75,104.3 L75,118.6 L70,118.3 Z" fill="#8a5040"/>
  <path d="M75.5,102 L78,102.2 L78,118.7 L75.5,118.5 Z" fill="#5a6a80"/>
  <path d="M79,106 L85,114 L85,119 L79,119 Z" fill="#8a7040"/>
  <path d="M62,130 L67,130.3 L67,144.4 L62,144.1 Z" fill="#5a6a80"/>
  <path d="M67.5,127 L70,127.2 L70,144.5 L67.5,144.3 Z" fill="#8a7040"/>
  <path d="M70.5,131 L76,131.4 L76,144.7 L70.5,144.4 Z" fill="#6a5060"/>
  <path d="M77,129 L81,129.2 L81,144.9 L77,144.6 Z" fill="#8a6040"/>
  <path d="M82,132 L86,132.3 L86,145 L82,144.8 Z" fill="#4a6a5a"/>
  <path d="M62,156 L65,156.2 L65,170.4 L62,170.2 Z" fill="#6a8050"/>
  <path d="M65.5,153 L71,153.4 L71,170.6 L65.5,170.3 Z" fill="#8a5040"/>
  <path d="M71.5,157 L74,157.2 L74,170.7 L71.5,170.5 Z" fill="#5a6a80"/>
  <path d="M75,154 L79,154.3 L79,170.9 L75,170.6 Z" fill="#8a7040"/>
  <path d="M80,159 L86,166 L86,171.1 L80,171 Z" fill="#6a5060"/>
  <path d="M62,188 L82,189.3 L82,192 L62,190.7 Z" fill="#8a6040" opacity="0.85"/>
  <path d="M63,182 L79,183 L79,186 L63,185 Z" fill="#5a6a80" opacity="0.8"/>
</g>
<g>
  <path d="M442,94 L412,97 L412,204 L442,201 Z" fill="#3b2c12"/>
  <path d="M442,94 L412,97 L412,102 L442,99 Z" fill="#66502c" opacity="0.85"/>
  <path d="M438,95 L442,94 L442,201 L438,202 Z" fill="#281d0d" opacity="0.7"/>
  <path d="M412,97 L416,96.5 L416,203 L412,204 Z" fill="#7a6038" opacity="0.45"/>
  <path d="M413,120 L440,118 L440,120 L413,122 Z" fill="#66502c"/>
  <path d="M413,146 L440,144 L440,146 L413,148 Z" fill="#66502c"/>
  <path d="M413,172 L440,170 L440,172 L413,174 Z" fill="#66502c"/>
  <path d="M412,196 L441,194 L441,197 L412,199 Z" fill="#4a3820"/>
  <path d="M415,104 L419,103.7 L419,119.7 L415,120 Z" fill="#6a8050"/>
  <path d="M419.5,101 L423,100.8 L423,119.4 L419.5,119.6 Z" fill="#8a5040"/>
  <path d="M424,105 L429,104.6 L429,119.1 L424,119.4 Z" fill="#5a6a80"/>
  <path d="M429.5,102 L433,101.8 L433,118.9 L429.5,119.1 Z" fill="#8a7040"/>
  <path d="M434,107 L438,106.7 L438,118.7 L434,118.9 Z" fill="#8a6040"/>
  <path d="M415,131 L420,130.6 L420,145.7 L415,146 Z" fill="#8a5040"/>
  <path d="M420.5,128 L423,127.8 L423,145.4 L420.5,145.6 Z" fill="#5a6a80"/>
  <path d="M424,132 L430,131.5 L430,145.1 L424,145.4 Z" fill="#8a7040"/>
  <path d="M431,129 L435,128.7 L435,144.9 L431,145.1 Z" fill="#6a5060"/>
  <path d="M436,134 L439,133.7 L439,144.8 L436,144.9 Z" fill="#6a8050"/>
  <path d="M415,157 L418,156.7 L418,171.7 L415,172 Z" fill="#8a6040"/>
  <path d="M419,154 L424,153.6 L424,171.4 L419,171.7 Z" fill="#6a8050"/>
  <path d="M425,158 L430,157.6 L430,171.1 L425,171.4 Z" fill="#8a5040"/>
  <path d="M431,155 L436,154.6 L436,170.8 L431,171.1 Z" fill="#5a6a80"/>
  <!-- the finished puzzles, filed on the bottom shelf. This is the shelf that
       carries the beat: the work is done and put away. -->
  <path d="M414,182 L438,180.4 L438,188.4 L414,190 Z" fill="#ddd6c2" opacity="0.75"/>
  <path d="M414,182 L438,180.4 L438,181.8 L414,183.4 Z" fill="#f0eadb" opacity="0.5"/>
  <path d="M418,183.4 L418,189.7 M422,183.1 L422,189.4 M426,182.8 L426,189.1 M430,182.5 L430,188.8 M434,182.2 L434,188.5" stroke="#a09a8a" stroke-width="0.4" opacity="0.5" fill="none"/>
</g>
<path d="M54,203 Q72,199 92,203 Q72,208 54,203 Z" fill="#1c1508" opacity="0.5"/>
<path d="M408,203 Q426,199 446,203 Q426,208 408,203 Z" fill="#1c1508" opacity="0.5"/>
<!-- ====================================================================
     ARMCHAIR, pushed back from the desk and turned away from it: the beat is
     that the work is finished, so nobody is sitting at it any more.
     ==================================================================== -->
<g>
  <ellipse cx="140" cy="220" rx="30" ry="5" fill="#1c1508" opacity="0.5"/>
  <path d="M118,212 Q112,166 122,156 Q140,148 158,156 Q168,166 162,212 Z" fill="#553320"/>
  <path d="M123,206 Q118,170 128,162 Q140,156 152,162 Q162,170 157,206 Z" fill="#6a422a"/>
  <path d="M129,201 Q126,174 133,167 Q140,163 147,167 Q154,174 151,201 Z" fill="#7a533e" opacity="0.75"/>
  <path d="M136,168 Q139,184 137,199 M148,168 Q145,184 147,199" stroke="#5f402f" stroke-width="0.7" opacity="0.5" fill="none"/>
  <circle cx="134" cy="174" r="0.9" fill="#452818" opacity="0.6"/>
  <circle cx="141" cy="172.6" r="0.9" fill="#452818" opacity="0.6"/>
  <circle cx="148" cy="174" r="0.9" fill="#452818" opacity="0.6"/>
  <path d="M112,212 Q107,188 114,182 Q123,178 127,186 L127,212 Z" fill="#4a2818"/>
  <path d="M112,190 Q112,182 120,181 Q127,182 127,190 Q120,194 112,190 Z" fill="#6f4732"/>
  <path d="M168,212 Q173,188 166,182 Q157,178 153,186 L153,212 Z" fill="#432616"/>
  <path d="M153,190 Q153,182 161,181 Q168,182 168,190 Q161,194 153,190 Z" fill="#603c28"/>
  <path d="M116,194 Q140,187 164,194 Q167,204 160,207 Q140,211 120,207 Q113,204 116,194 Z" fill="#7d5942"/>
  <path d="M116,194 Q140,187 164,194 Q140,199 116,194 Z" fill="#94694e" opacity="0.7"/>
  <path d="M120,211 L124,211 L125,220 L120,220 Z" fill="#33200f"/>
  <path d="M155,211 L159,211 L158,220 L153,220 Z" fill="#33200f"/>
  <path d="M130,210 L133,210 L133,217 L130,217 Z" fill="#2a1a0c" opacity="0.7"/>
</g>
<!-- ====================================================================
     DESK, legs first then the top so the top overlaps them. Moulded lip,
     kneehole with a drawer, turned front legs, stretcher.
     ==================================================================== -->
<g>
  <ellipse cx="250" cy="217" rx="98" ry="5" fill="#1c1508" opacity="0.45"/>
  <path d="M186,184 L190,184 L189,212 L186,212 Z" fill="#3b2c12"/>
  <path d="M310,184 L314,184 L313,212 L310,212 Z" fill="#3b2c12"/>
  <path d="M170,186 L178,186 L177,194 Q180,197 177,200 L176,214 L169,214 L168,200 Q165,197 168,194 Z" fill="#5a4527"/>
  <path d="M170,186 L173,186 L172,214 L169,214 Z" fill="#7a6038" opacity="0.5"/>
  <path d="M322,186 L330,186 L331,194 Q334,197 331,200 L332,214 L325,214 L324,200 Q321,197 324,194 Z" fill="#5a4527"/>
  <path d="M327,186 L330,186 L331,214 L328,214 Z" fill="#33260f" opacity="0.6"/>
  <path d="M176,204 L324,204 L324,207 L176,207 Z" fill="#48331a"/>
  <path d="M182,184 L318,184 L318,197 L182,197 Z" fill="#5a4527"/>
  <path d="M188,186 L246,186 L246,195 L188,195 Z" fill="#48331a"/>
  <path d="M188,186 L246,186 L246,188 L188,188 Z" fill="#7a6038" opacity="0.4"/>
  <path d="M214,190 Q220,189 220,191 Q220,193 214,192 Z" fill="#a8967a" opacity="0.8"/>
  <path d="M156,178 Q250,174 344,178 L346,182 Q250,178 154,182 Z" fill="#7a6038"/>
  <path d="M154,182 Q250,178 346,182 L346,186 Q250,182 154,186 Z" fill="#5a4527"/>
  <path d="M158,179 Q250,175.5 342,179 Q250,177 158,179 Z" fill="#a08048" opacity="0.5"/>
</g>
<!-- ====================================================================
     THE SOLVED GRIDS, squared up in a neat stack instead of scattered. Every
     square is filled, which is the whole point of this scene. The top one is
     turned slightly so the stack does not read as one printed block.
     ==================================================================== -->
<g>
  <path d="M204,166 L246,164 L248,180 L206,182 Z" fill="#cfc8b4" opacity="0.62"/>
  <path d="M202,167 L244,165 L246,181 L204,183 Z" fill="#ded7c3" opacity="0.7"/>
  <path d="M200,168 L242,166 L244,182 L202,184 Z" fill="#e8e0d0" opacity="0.85"/>
  <g stroke="#7a746a" stroke-width="0.4" opacity="0.65" fill="none">
    <path d="M207,167.7 L209,183.7 M214,167.3 L216,183.3 M221,167 L223,183 M228,166.6 L230,182.6 M235,166.3 L237,182.3"/>
    <path d="M200.4,171.2 L242.4,169.2 M200.9,174.4 L242.9,172.4 M201.4,177.6 L243.4,175.6 M201.8,180.8 L243.8,178.8"/>
  </g>
  <path d="M207,167.7 L214,167.3 L214.4,170.5 L207.3,170.9 Z" fill="#3a352d" opacity="0.7"/>
  <path d="M228,173.3 L235,172.9 L235.5,176.1 L228.4,176.5 Z" fill="#3a352d" opacity="0.65"/>
  <path d="M221,180 L228,179.6 L228.4,182.8 L221.3,183.2 Z" fill="#3a352d" opacity="0.6"/>
  <!-- every remaining cell has a letter in it, drawn as short marks -->
  <g stroke="#4a4640" stroke-width="0.55" opacity="0.6" fill="none">
    <path d="M202.6,169.4 L203.2,170.6 M209.6,169 L210.2,170.2 M216.6,168.6 L217.2,169.8 M223.6,168.3 L224.2,169.5 M230.6,167.9 L231.2,169.1 M237.6,167.6 L238.2,168.8"/>
    <path d="M203,172.6 L203.6,173.8 M210,172.2 L210.6,173.4 M217,171.8 L217.6,173 M224,171.5 L224.6,172.7 M231,171.1 L231.6,172.3 M238,170.8 L238.6,172 "/>
    <path d="M203.5,175.8 L204.1,177 M210.5,175.4 L211.1,176.6 M217.5,175 L218.1,176.2 M231.5,174.3 L232.1,175.5 M238.5,174 L239.1,175.2"/>
    <path d="M204,179 L204.6,180.2 M211,178.6 L211.6,179.8 M218,178.2 L218.6,179.4 M232,177.5 L232.6,178.7 M239,177.2 L239.6,178.4"/>
  </g>
  <path d="M200,168 L242,166 L242.4,167.3 L200.2,169.3 Z" fill="#f4eedd" opacity="0.5"/>
  <path d="M202,184 L244,182 L244.6,183.4 L202.4,185.4 Z" fill="#a8a294" opacity="0.45"/>
</g>
<!-- one more grid set aside, this the newest and squarest to the desk -->
<g>
  <path d="M256,170 L292,171 L293,182 L255,181 Z" fill="#e2dbc9" opacity="0.8"/>
  <g stroke="#7a746a" stroke-width="0.35" opacity="0.55" fill="none">
    <path d="M262,170.2 L261.4,181.2 M268,170.4 L267.6,181.4 M274,170.5 L273.8,181.5 M280,170.7 L280,181.6 M286,170.8 L286.2,181.8"/>
    <path d="M255.7,174 L292.4,175 M255.4,178 L292.8,179"/>
  </g>
  <path d="M268,174.3 L274,174.5 L274,178.5 L267.9,178.3 Z" fill="#3a352d" opacity="0.6"/>
  <path d="M256,170 L292,171 L292.2,172.2 L255.9,171.2 Z" fill="#f4eedd" opacity="0.45"/>
</g>
<!-- Pen, capped and laid down straight. The work is finished. -->
<path d="M300,172 L316,173" stroke="#2c2c46" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M316,172.9 Q319.4,173 321,174.4 Q318.2,174.6 316.4,174 Z" fill="#b8b6ac"/>
<path d="M301,172 L306,172.3" stroke="#5c5c7c" stroke-width="2" stroke-linecap="round" fill="none"/>
<!-- Mug, drained, drawn as a vessel with a rim and a handle -->
<g>
  <ellipse cx="332" cy="179" rx="8" ry="2" fill="#1c1508" opacity="0.4"/>
  <path d="M325,164 Q325,176 327,178 L337,178 Q339,176 339,164 Z" fill="#8a7a60"/>
  <path d="M325,164 Q325,176 327,178 L330,178 Q328,175 328,164 Z" fill="#a8977a" opacity="0.6"/>
  <path d="M336,164 Q336,175 334.5,178 L337,178 Q339,176 339,164 Z" fill="#665a44" opacity="0.7"/>
  <path d="M339,166.5 Q345,167 345.5,171 Q345,175 339,175.5 L339,173.5 Q343,173 343.3,171 Q343,169 339,168.5 Z" fill="#8a7a60"/>
  <ellipse cx="332" cy="164" rx="7" ry="2.2" fill="#4a4032"/>
  <ellipse cx="332" cy="164" rx="7" ry="2.2" fill="none" stroke="#a8977a" stroke-width="0.7" opacity="0.8"/>
  <path d="M327,165.4 Q332,167 337,165.4 Q332,166.2 327,165.4 Z" fill="#6a4a2a" opacity="0.55"/>
</g>
<g opacity="0.26">
  <path d="M329,161 Q327,155 330,150 Q332,146 330,143" fill="none" stroke="#b4b0a6" stroke-width="0.9" stroke-linecap="round">
    <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>
</g>
<!-- ====================================================================
     THE LAMP hangs plumb from the dome apex, brighter than in the other
     interiors because this is the beat where the light goes up.
     ==================================================================== -->
<path d="M250,20 L250,66" stroke="#5a5348" stroke-width="0.7" opacity="0.6" fill="none"/>
<path d="M234,80 Q239,64 250,64 Q261,64 266,80 Z" fill="#54492f"/>
<path d="M234,80 Q239,64 250,64 Q245,68 242,80 Z" fill="#7a6a4a" opacity="0.7"/>
<path d="M234,80 Q250,85 266,80 Q250,83 234,80 Z" fill="#ffe880" opacity="0.6"/>
<circle cx="250" cy="82" r="4" fill="#ffe880" opacity="0.6">
  <animate attributeName="opacity" values="0.48;0.7;0.48" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="250" cy="82" r="18" fill="#ffe880" opacity="0.09"/>
<!-- the pool the lamp throws on the desk, which is why the grids read -->
<path d="M186,176 Q250,164 314,176 Q250,190 186,176 Z" fill="#ffe880" opacity="0.08"/>
<!-- Wall sconces on the shell ribs, warmer than in moon_4 -->
<path d="M84,140 Q90,133 96,140 Q90,144 84,140 Z" fill="#54492f"/>
<circle cx="90" cy="139" r="3" fill="#ffe880" opacity="0.28">
  <animate attributeName="opacity" values="0.2;0.34;0.2" dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<path d="M404,140 Q410,133 416,140 Q410,144 404,140 Z" fill="#54492f"/>
<circle cx="410" cy="139" r="3" fill="#ffe880" opacity="0.28">
  <animate attributeName="opacity" values="0.2;0.34;0.2" dur="6.1s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
</svg>`;

// Scene 7: Complete — dome glows, farewell, Earth rising
STORY_SCENES['moon_7'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="m7Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#050810"/><stop offset="100%" stop-color="#0a0e18"/>
  </linearGradient>
  <radialGradient id="m7EarthGlow" cx="50%" cy="55%" r="30%">
    <stop offset="0%" stop-color="#4a8aba" stop-opacity="0.08"/><stop offset="100%" stop-color="#4a8aba" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m7DomeGlow" cx="22%" cy="76%" r="17%">
    <stop offset="0%" stop-color="#ffe880" stop-opacity="0.34"/><stop offset="100%" stop-color="#ffe880" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="m7Limb" cx="34%" cy="32%" r="76%">
    <stop offset="42%" stop-color="#0a1a2a" stop-opacity="0"/><stop offset="100%" stop-color="#030b14" stop-opacity="0.9"/>
  </radialGradient>
</defs>
<rect width="500" height="260" fill="url(#m7Sky)"/>
<!-- Stars everywhere -->
<g fill="#f4f2ee">
  <circle cx="30" cy="30" r="0.8"/><circle cx="70" cy="60" r="0.5"/><circle cx="110" cy="20" r="1"/>
  <circle cx="150" cy="50" r="0.6"/><circle cx="190" cy="35" r="0.7"/><circle cx="230" cy="15" r="0.5"/>
  <circle cx="270" cy="45" r="0.8"/><circle cx="310" cy="25" r="0.6"/><circle cx="350" cy="55" r="0.9"/>
  <circle cx="390" cy="30" r="0.5"/><circle cx="430" cy="50" r="0.7"/><circle cx="470" cy="20" r="0.6"/>
  <circle cx="50" cy="90" r="0.4"/><circle cx="130" cy="85" r="0.6"/><circle cx="210" cy="78" r="0.5"/>
  <circle cx="290" cy="82" r="0.7"/><circle cx="370" cy="75" r="0.4"/><circle cx="450" cy="88" r="0.6"/>
  <circle cx="90" cy="110" r="0.5"/><circle cx="170" cy="105" r="0.3"/><circle cx="330" cy="100" r="0.5"/>
  <circle cx="410" cy="108" r="0.4"/><circle cx="480" cy="95" r="0.6"/><circle cx="20" cy="120" r="0.3"/>
  <circle cx="40" cy="55" r="0.4"><animate attributeName="opacity" values="0.35;1;0.35" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="215" cy="62" r="0.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.3s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="462" cy="40" r="0.4"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.7s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
</g>
<!-- ====================================================================
     EARTH, rising over the horizon. The continents were five green blobs of
     the same size and shape, which reads as camouflage rather than a planet.
     A globe reads by RECOGNISABLE COASTLINE and by its curvature: the seams
     between land and sea are irregular, the shapes shrink and lean toward the
     limb, and the hemisphere away from the sun falls into shadow. The sun is
     high right, matching every other moon scene, so the terminator is on the
     lower left.
     ==================================================================== -->
<circle cx="310" cy="100" r="65" fill="#123f60"/>
<!-- deep ocean, with a lighter shelf where the light strikes the sunward face -->
<path d="M310,35 A65,65 0 0,1 358,157 A65,65 0 0,0 310,35 Z" fill="#1f6a8c" opacity="0.45"/>
<path d="M330,38 A65,65 0 0,1 372,86 A48,48 0 0,0 330,38 Z" fill="#358aa8" opacity="0.32"/>
<!-- ====================================================================
     THE LANDMASSES. They were five smooth blobs of one hue and one size,
     which reads as camouflage. A COASTLINE READS BY ITS IRREGULARITY: bays
     bitten into it, peninsulas thrown out, islands trailing off the ends.
     The land is muted olive against the blue, because from orbit it is
     nothing like the postcard green.
     ==================================================================== -->
<!-- Africa and Arabia, the big central mass. Wide north, tapering to a point -->
<path d="M296,70 L304,66 L312,68 L320,64 L326,70 L324,76 L330,78 L328,86 L332,92 L328,100 L324,106 L320,116 L314,126 L308,132 L306,124 L304,114 L300,106 L298,96 L294,88 L296,80 L292,74 Z" fill="#4a7a4a" opacity="0.68"/>
<path d="M296,70 L304,66 L312,68 L320,64 L326,70 L324,76 L316,74 L306,76 L298,74 Z" fill="#7a8a4e" opacity="0.42"/>
<path d="M304,86 L316,84 L318,96 L310,104 L304,96 Z" fill="#8a7a52" opacity="0.32"/>
<path d="M330,78 L338,74 L344,80 L340,86 L332,86 Z" fill="#4a7a4a" opacity="0.55"/>
<path d="M338,74 L344,72 L346,76 L342,78 Z" fill="#6a7a48" opacity="0.4"/>
<!-- Europe, small and broken with a peninsula and an island off the west -->
<path d="M300,58 L308,54 L318,56 L324,60 L318,64 L308,62 L302,64 Z" fill="#4a7a4a" opacity="0.55"/>
<path d="M292,56 L297,54 L298,58 L293,59 Z" fill="#4a7a4a" opacity="0.45"/>
<!-- the Americas, leaning toward the left limb where the curve steepens.
     Two masses joined by a thin isthmus, which is the shape that names them -->
<path d="M258,64 L266,58 L276,60 L284,66 L282,74 L286,80 L280,84 L272,82 L266,86 L262,80 L264,72 L256,70 Z" fill="#41704a" opacity="0.58"/>
<path d="M280,84 L285,88 L282,92 L278,90 Z" fill="#41704a" opacity="0.5"/>
<path d="M278,92 L283,94 L281,98 L277,96 Z" fill="#41704a" opacity="0.45"/>
<path d="M276,98 L284,100 L288,108 L286,118 L280,128 L274,124 L272,114 L274,104 Z" fill="#41704a" opacity="0.52"/>
<path d="M276,102 L284,104 L286,112 L278,112 Z" fill="#2a8a5a" opacity="0.26"/>
<path d="M264,60 L272,58 L276,62 L268,64 Z" fill="#6a7c4a" opacity="0.35"/>
<!-- Asia, wide across the sunward shoulder with a coast bitten by two seas
     and an island arc trailing off toward the limb -->
<path d="M326,54 L336,48 L348,50 L358,54 L366,58 L372,66 L368,72 L360,70 L354,76 L346,74 L340,80 L332,76 L328,68 L330,60 Z" fill="#4a7a4a" opacity="0.62"/>
<path d="M336,52 L348,52 L358,56 L364,62 L354,62 L344,58 L336,58 Z" fill="#8a7a52" opacity="0.34"/>
<path d="M334,66 L344,66 L348,72 L338,74 Z" fill="#2a8a5a" opacity="0.24"/>
<path d="M360,74 L367,76 L365,82 L359,80 Z" fill="#4a7a4a" opacity="0.5"/>
<path d="M354,86 L360,86 L361,91 L355,91 Z" fill="#4a7a4a" opacity="0.44"/>
<path d="M346,94 L351,94 L352,99 L347,99 Z" fill="#4a7a4a" opacity="0.38"/>
<path d="M340,102 L344,102 L344,106 L340,106 Z" fill="#4a7a4a" opacity="0.32"/>
<!-- Australia, low and near the terminator so it is barely lit -->
<path d="M338,114 L348,110 L358,114 L360,120 L354,126 L344,126 L338,122 Z" fill="#7a6a44" opacity="0.34"/>
<path d="M362,128 L366,126 L367,131 L363,132 Z" fill="#7a6a44" opacity="0.26"/>
<!-- polar ice, a cap that follows the curve rather than a disc -->
<path d="M286,42 Q310,34 336,42 Q310,50 286,42 Z" fill="#c8dce8" opacity="0.3"/>
<path d="M282,152 Q310,144 340,152 Q310,162 282,152 Z" fill="#c8dce8" opacity="0.2"/>
<!-- Cloud bands, curving with the sphere -->
<path d="M252,84 Q272,72 302,74 Q334,78 356,68" fill="none" stroke="#e8f0f4" stroke-width="2.6" opacity="0.11"/>
<path d="M250,106 Q276,98 306,102 Q338,108 362,98" fill="none" stroke="#e8f0f4" stroke-width="2" opacity="0.09"/>
<path d="M264,132 Q292,122 320,128 Q342,132 356,124" fill="none" stroke="#e8f0f4" stroke-width="1.6" opacity="0.07"/>
<path d="M272,58 Q296,48 322,52 Q340,56 350,50" fill="none" stroke="#e8f0f4" stroke-width="1.4" opacity="0.07"/>
<!-- a cyclone, because a planet has weather -->
<path d="M286,112 Q296,106 302,112 Q300,120 292,120 Q286,118 286,112 Z" fill="none" stroke="#e8f0f4" stroke-width="1.1" opacity="0.1"/>
<path d="M290,113 Q296,110 298,114 Q296,117 292,116 Z" fill="none" stroke="#e8f0f4" stroke-width="0.8" opacity="0.08"/>
<!-- the terminator, shading the hemisphere turned away from the sun -->
<circle cx="310" cy="100" r="65" fill="url(#m7Limb)"/>
<circle cx="310" cy="100" r="65" fill="url(#m7EarthGlow)"/>
<!-- Atmosphere, a bright rim on the sunward limb fading around the dark side -->
<path d="M310,35 A65,65 0 0,1 358,157" fill="none" stroke="#6abaee" stroke-width="2.4" opacity="0.26"/>
<path d="M310,32.5 A67.5,67.5 0 0,1 360,159" fill="none" stroke="#6abaee" stroke-width="2.2" opacity="0.13"/>
<path d="M310,30 A70,70 0 0,1 362,161" fill="none" stroke="#4a9ade" stroke-width="1.8" opacity="0.07"/>
<path d="M310,27 A73,73 0 0,1 364,164" fill="none" stroke="#3a8ace" stroke-width="1.4" opacity="0.04"/>
<!-- ====================================================================
     LUNAR HORIZON, three receding bands so the plain falls away rather than
     sitting as one flat wall of grey.
     ==================================================================== -->
<path d="M0,184 Q80,177 160,181 Q250,174 340,183 Q420,177 500,181 L500,260 L0,260 Z" fill="#8a8880"/>
<path d="M0,193 Q100,187 200,191 Q300,183 400,193 Q450,188 500,191 L500,260 L0,260 Z" fill="#7a7870"/>
<path d="M0,210 Q90,203 180,209 Q270,201 360,210 Q430,205 500,209 L500,260 L0,260 Z" fill="#6f6d65"/>
<!-- ====================================================================
     CRATERS, using moon_0's construction: the far wall catches the light and
     the near wall is in shadow, so the bright and dark arcs sit on OPPOSITE
     sides of the ring. Ejecta streaks radiate from the rim.
     ==================================================================== -->
<ellipse cx="252" cy="238" rx="38" ry="11" fill="#8f8d84"/><ellipse cx="252" cy="238" rx="34" ry="9" fill="#63615a"/>
<path d="M218,238 A34,9 0 0 1 286,238 A24,6 0 0 0 218,238 Z" fill="#a8a69c" opacity="0.75"/>
<path d="M218,238 A34,9 0 0 0 286,238 A24,6 0 0 1 218,238 Z" fill="#4e4c46" opacity="0.6"/>
<ellipse cx="252" cy="239" rx="20" ry="4.5" fill="#56544e"/>
<path d="M216,236 l-12,-3 M288,237 l11,-3 M252,226 l3,-5" stroke="#9a9890" stroke-width="1.2" opacity="0.3" fill="none"/>
<ellipse cx="424" cy="222" rx="27" ry="8" fill="#8f8d84"/><ellipse cx="424" cy="222" rx="24" ry="6.5" fill="#63615a"/>
<path d="M400,222 A24,6.5 0 0 1 448,222 A17,4.5 0 0 0 400,222 Z" fill="#a8a69c" opacity="0.72"/>
<path d="M400,222 A24,6.5 0 0 0 448,222 A17,4.5 0 0 1 400,222 Z" fill="#4e4c46" opacity="0.58"/>
<ellipse cx="424" cy="222" rx="14" ry="3.2" fill="#56544e"/>
<path d="M398,220 l-9,-2 M450,221 l9,-3" stroke="#9a9890" stroke-width="1.1" opacity="0.28" fill="none"/>
<ellipse cx="96" cy="214" rx="21" ry="6" fill="#8f8d84"/><ellipse cx="96" cy="214" rx="18" ry="4.6" fill="#63615a"/>
<path d="M78,214 A18,4.6 0 0 1 114,214 A12,3 0 0 0 78,214 Z" fill="#a8a69c" opacity="0.68"/>
<path d="M78,214 A18,4.6 0 0 0 114,214 A12,3 0 0 1 78,214 Z" fill="#4e4c46" opacity="0.55"/>
<ellipse cx="96" cy="214" rx="10" ry="2.4" fill="#56544e"/>
<path d="M76,212 l-7,-2 M116,213 l7,-3" stroke="#9a9890" stroke-width="1" opacity="0.26" fill="none"/>
<!-- Far craters, veiled toward the plain because distance eats contrast -->
<ellipse cx="352" cy="198" rx="17" ry="4.5" fill="#7f7d75"/><ellipse cx="352" cy="198" rx="14" ry="3.2" fill="#67655e"/>
<path d="M338,198 A14,3.2 0 0 1 366,198 A10,2 0 0 0 338,198 Z" fill="#98968e" opacity="0.5"/>
<path d="M338,198 A14,3.2 0 0 0 366,198 A10,2 0 0 1 338,198 Z" fill="#56544e" opacity="0.42"/>
<ellipse cx="186" cy="200" rx="14" ry="4" fill="#7d7b73"/><ellipse cx="186" cy="200" rx="11.5" ry="2.8" fill="#67655e"/>
<path d="M174.5,200 A11.5,2.8 0 0 1 197.5,200 A8,1.8 0 0 0 174.5,200 Z" fill="#96948c" opacity="0.46"/>
<path d="M174.5,200 A11.5,2.8 0 0 0 197.5,200 A8,1.8 0 0 1 174.5,200 Z" fill="#56544e" opacity="0.38"/>
<!-- Ridges and angular boulders, so there is relief between the holes -->
<path d="M296,216 Q318,208 344,216 Q320,223 296,216 Z" fill="#9a9890" opacity="0.35"/>
<path d="M40,232 Q60,224 84,232 Q60,240 40,232 Z" fill="#6a6860" opacity="0.45"/>
<path d="M330,248 Q352,240 378,248 Q352,256 330,248 Z" fill="#6a6860" opacity="0.4"/>
<ellipse cx="204" cy="256" rx="16" ry="3" fill="#4a4840" opacity="0.4"/>
<path d="M190,248 L204,239 L219,246 L214,257 L195,257 Z" fill="#6f6d65"/>
<path d="M204,239 L219,246 L214,257 L207,252 Z" fill="#8f8d84" opacity="0.68"/>
<path d="M190,248 L204,239 L207,252 L195,257 Z" fill="#46443d" opacity="0.55"/>
<ellipse cx="470" cy="248" rx="13" ry="2.6" fill="#4a4840" opacity="0.4"/>
<path d="M458,242 L470,234 L482,240 L478,249 L461,249 Z" fill="#6f6d65"/>
<path d="M470,234 L482,240 L478,249 L472,245 Z" fill="#8f8d84" opacity="0.62"/>
<path d="M458,242 L470,234 L472,245 L461,249 Z" fill="#46443d" opacity="0.5"/>
<!-- ====================================================================
     THE DOME, the same habitat as moon_1: an elliptical arc so it is a
     hemisphere and not a tent, panel seams following the curve, an airlock,
     a service module and a mast. Habitat first, glow second, so the light
     comes from inside.
     ==================================================================== -->
<ellipse cx="108" cy="197" rx="34" ry="5.5" fill="#4e4c46" opacity="0.5"/>
<!-- service module and mast, behind the shell -->
<path d="M142,197 L142,183 Q142,179 146,179 L160,179 Q164,179 164,183 L164,197 Z" fill="#3a382f" stroke="#d4d0c0" stroke-width="0.6" opacity="0.85"/>
<path d="M144,181 L162,181 L162,185 L144,185 Z" fill="#8a8880" opacity="0.35"/>
<path d="M152,179 L153,160" stroke="#9a9890" stroke-width="0.9" opacity="0.6" fill="none"/>
<path d="M146,164 A7,7 0 0 1 160,158 L153,161 Z" fill="#5a5850" stroke="#9a9890" stroke-width="0.7" opacity="0.75"/>
<path d="M157,159 A7,7 0 0 0 147,163" fill="none" stroke="#b0aea4" stroke-width="0.5" opacity="0.4"/>
<path d="M153,161 L156,155" stroke="#9a9890" stroke-width="0.5" opacity="0.5" fill="none"/>
<circle cx="156.5" cy="154" r="1.1" fill="#ffe880" opacity="0.7">
  <animate attributeName="opacity" values="0.25;0.9;0.25" dur="3.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- dome shell -->
<path d="M76,197 A32,29 0 0,1 140,197 Z" fill="#33312a" stroke="#d4d0c0" stroke-width="1.1" opacity="0.9"/>
<!-- lit interior showing through the glass, stronger than moon_1 for the farewell -->
<path d="M81,197 A27,24.5 0 0,1 135,197 Z" fill="#ffe27a" opacity="0.3">
  <animate attributeName="opacity" values="0.2;0.38;0.2" dur="4.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- glazing bars, following the curve -->
<path d="M108,168 L108,197 M90,175 L93,197 M126,175 L123,197 M80,188 L80,197 M136,188 L136,197" stroke="#d4d0c0" stroke-width="0.6" opacity="0.4" fill="none"/>
<path d="M77.5,188 A30,27 0 0,1 138.5,188" stroke="#d4d0c0" stroke-width="0.5" opacity="0.3" fill="none"/>
<path d="M85,178 A23,20 0 0,1 131,178" stroke="#d4d0c0" stroke-width="0.4" opacity="0.22" fill="none"/>
<!-- the sunward quarter of the shell catches a hard highlight -->
<path d="M124,177 A32,29 0 0,1 140,197 L132,197 A24,22 0 0,0 120,180 Z" fill="#d4d0c0" opacity="0.15"/>
<!-- airlock, lit from inside because he is still up -->
<path d="M101,197 L101,186 A7,7 0 0,1 115,186 L115,197 Z" fill="#3a3218" stroke="#d4d0c0" stroke-width="0.7" opacity="0.9"/>
<path d="M103,197 L103,187 A5,5 0 0,1 113,187 L113,197 Z" fill="#ffe880" opacity="0.35">
  <animate attributeName="opacity" values="0.26;0.44;0.26" dur="5.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- base seal, and the light spilling onto the dust at the threshold -->
<path d="M74,197 A34,5.5 0 0,0 142,197" stroke="#d4d0c0" stroke-width="0.7" opacity="0.55" fill="none"/>
<path d="M98,198 Q108,196 118,198 Q112,210 98,198 Z" fill="#ffe880" opacity="0.18"/>
<path d="M88,199 Q108,196 128,199 Q112,216 88,199 Z" fill="#ffe880" opacity="0.08"/>
<rect x="0" y="0" width="500" height="260" fill="url(#m7DomeGlow)"/>
<rect x="0" y="0" width="500" height="260" fill="url(#m7EarthGlow)"/>
</svg>`;
