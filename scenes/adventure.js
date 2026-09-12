// Adventure Tower story scenes — "Adventure Tower"
// Keys: adventure_0 through adventure_5
// DRAFT — for review only

// Scene 0: Tower looming against dark sky, glowing runes on stone walls
STORY_SCENES['adventure_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="advSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="50%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="runeGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="advSoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="towerStone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#5a5a6a"/><stop offset="50%" stop-color="#4a4a5a"/><stop offset="100%" stop-color="#3a3a4a"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#advSky)"/>
<!-- Stars -->
<circle cx="60" cy="25" r="1" fill="#fff" opacity="0.4"/>
<circle cx="140" cy="40" r="1.2" fill="#fff" opacity="0.35"/>
<circle cx="420" cy="18" r="1" fill="#fff" opacity="0.5"/>
<circle cx="380" cy="50" r="0.8" fill="#fff" opacity="0.3"/>
<circle cx="470" cy="35" r="1.1" fill="#fff" opacity="0.45"/>
<circle cx="30" cy="55" r="0.9" fill="#fff" opacity="0.3"/>
<!-- Distant hills -->
<ellipse cx="120" cy="220" rx="140" ry="50" fill="#3a2a5a" opacity="0.4"/>
<ellipse cx="400" cy="225" rx="130" ry="45" fill="#3a2a5a" opacity="0.35"/>
<!-- ====================================================================
     THE TOWER. It was a flat rect with a gradient and four horizontal lines.
     A stone tower reads by its MASONRY: individual blocks in staggered
     courses, each slightly different, with mortar showing between them. It
     also needs a BATTER (walls that lean in as they rise) and a plinth at
     the base, or it reads as a chimney.
     ==================================================================== -->
<!-- ====================================================================
     THE BATTLEMENTS. These were in the original and my rebuild swallowed them:
     the slice I replaced ran from the tower body down to the arch, and the
     merlons sat inside it.

     Rebuilt rather than pasted back, because the wall is now BATTERED and the
     old merlons assumed a 190..310 head that no longer exists. A crenellated
     parapet also overhangs on a CORBEL course, its merlons are capped, and the
     embrasures between them show sky.
     ==================================================================== -->
<path d="M191.0,10 L205.8,10 L205.8,26 L191.0,26 Z" fill="#4a4a5c"/><path d="M191.0,10 L196.0,10 L196.0,26 L191.0,26 Z" fill="#7a7a92" opacity="0.3"/><path d="M189.6,8 L207.2,8 L207.2,11 L189.6,11 Z" fill="#6a6a80"/>
<path d="M216.8,10 L231.6,10 L231.6,26 L216.8,26 Z" fill="#4a4a5c"/><path d="M216.8,10 L221.8,10 L221.8,26 L216.8,26 Z" fill="#7a7a92" opacity="0.3"/><path d="M215.4,8 L233.0,8 L233.0,11 L215.4,11 Z" fill="#6a6a80"/>
<path d="M242.6,10 L257.4,10 L257.4,26 L242.6,26 Z" fill="#4a4a5c"/><path d="M242.6,10 L247.6,10 L247.6,26 L242.6,26 Z" fill="#7a7a92" opacity="0.3"/><path d="M241.2,8 L258.8,8 L258.8,11 L241.2,11 Z" fill="#6a6a80"/>
<path d="M268.4,10 L283.2,10 L283.2,26 L268.4,26 Z" fill="#4a4a5c"/><path d="M268.4,10 L273.4,10 L273.4,26 L268.4,26 Z" fill="#7a7a92" opacity="0.3"/><path d="M267.0,8 L284.6,8 L284.6,11 L267.0,11 Z" fill="#6a6a80"/>
<path d="M294.2,10 L309.0,10 L309.0,26 L294.2,26 Z" fill="#4a4a5c"/><path d="M294.2,10 L299.2,10 L299.2,26 L294.2,26 Z" fill="#7a7a92" opacity="0.3"/><path d="M292.8,8 L310.4,8 L310.4,11 L292.8,11 Z" fill="#6a6a80"/>
<!-- the corbel course: the parapet steps out over the wall below it -->
<path d="M189,26 L311,26 L311,33 L189,33 Z" fill="#55556a"/>
<path d="M189,26 L311,26 L311,28 L189,28 Z" fill="#7a7a92" opacity="0.5"/>
<path d="M193,33 L307,33 L305,38 L195,38 Z" fill="#3e3e50"/>
<!-- the corbels themselves, small brackets under the overhang -->
<path d="M196,33 l5,0 l-1,5 l-3,0 Z M216,33 l5,0 l-1,5 l-3,0 Z M236,33 l5,0 l-1,5 l-3,0 Z
         M256,33 l5,0 l-1,5 l-3,0 Z M276,33 l5,0 l-1,5 l-3,0 Z M296,33 l5,0 l-1,5 l-3,0 Z"
      fill="#33334a"/>

<!-- the wall, battered: wider at the base than at the parapet -->
<path d="M197,38 L303,38 L307,230 L193,230 Z" fill="url(#towerStone)"/>
<!-- the lit face, since the moon is off to the left -->
<path d="M197,38 L232,38 L228,230 L193,230 Z" fill="#6a6a80" opacity="0.28"/>
<path d="M280,38 L303,38 L307,230 L284,230 Z" fill="#2a2a3a" opacity="0.35"/>
<!-- the masonry -->
<path d="M197.7,40.9 h20.1 v11.2 h-20.1 Z M219.6,40.9 h21.4 v11.2 h-21.4 Z M242.7,40.9 h21.9 v11.2 h-21.9 Z M266.5,40.9 h23.6 v11.2 h-23.6 Z M291.8,40.9 h10.5 v11.2 h-10.5 Z M197.4,53.9 h16.3 v11.2 h-16.3 Z M215.6,53.9 h13.5 v11.2 h-13.5 Z M230.9,53.9 h18.3 v11.2 h-18.3 Z M251.0,53.9 h23.6 v11.2 h-23.6 Z M276.4,53.9 h20.3 v11.2 h-20.3 Z M298.5,53.9 h4.0 v11.2 h-4.0 Z M197.2,66.9 h14.4 v11.2 h-14.4 Z M213.4,66.9 h18.4 v11.2 h-18.4 Z M233.6,66.9 h15.9 v11.2 h-15.9 Z M251.3,66.9 h19.2 v11.2 h-19.2 Z M272.3,66.9 h19.5 v11.2 h-19.5 Z M293.6,66.9 h9.2 v11.2 h-9.2 Z M196.9,79.9 h8.6 v11.2 h-8.6 Z M207.3,79.9 h16.3 v11.2 h-16.3 Z M225.4,79.9 h23.3 v11.2 h-23.3 Z M250.5,79.9 h21.6 v11.2 h-21.6 Z M273.9,79.9 h15.0 v11.2 h-15.0 Z M290.6,79.9 h12.4 v11.2 h-12.4 Z M196.7,92.9 h14.7 v11.2 h-14.7 Z M213.2,92.9 h20.0 v11.2 h-20.0 Z M235.0,92.9 h14.6 v11.2 h-14.6 Z M251.4,92.9 h13.2 v11.2 h-13.2 Z M266.4,92.9 h22.8 v11.2 h-22.8 Z M291.0,92.9 h12.4 v11.2 h-12.4 Z M196.4,105.9 h8.6 v11.2 h-8.6 Z M206.8,105.9 h24.0 v11.2 h-24.0 Z M232.6,105.9 h22.8 v11.2 h-22.8 Z M257.2,105.9 h16.4 v11.2 h-16.4 Z M275.4,105.9 h23.8 v11.2 h-23.8 Z M300.9,105.9 h2.7 v11.2 h-2.7 Z M196.1,118.9 h20.7 v11.2 h-20.7 Z M218.6,118.9 h15.5 v11.2 h-15.5 Z M235.8,118.9 h23.6 v11.2 h-23.6 Z M261.2,118.9 h20.8 v11.2 h-20.8 Z M283.8,118.9 h20.1 v11.2 h-20.1 Z M195.9,131.9 h16.0 v11.2 h-16.0 Z M213.7,131.9 h16.5 v11.2 h-16.5 Z M232.0,131.9 h17.2 v11.2 h-17.2 Z M251.0,131.9 h15.0 v11.2 h-15.0 Z M267.8,131.9 h14.8 v11.2 h-14.8 Z M284.4,131.9 h13.9 v11.2 h-13.9 Z M300.1,131.9 h4.0 v11.2 h-4.0 Z M195.6,144.9 h19.8 v11.2 h-19.8 Z M217.3,144.9 h13.2 v11.2 h-13.2 Z M232.3,144.9 h20.7 v11.2 h-20.7 Z M254.7,144.9 h16.9 v11.2 h-16.9 Z M273.5,144.9 h16.6 v11.2 h-16.6 Z M291.9,144.9 h12.5 v11.2 h-12.5 Z M195.4,157.9 h11.5 v11.2 h-11.5 Z M208.6,157.9 h16.7 v11.2 h-16.7 Z M227.1,157.9 h18.5 v11.2 h-18.5 Z M247.4,157.9 h21.0 v11.2 h-21.0 Z M270.2,157.9 h13.8 v11.2 h-13.8 Z M285.8,157.9 h18.8 v11.2 h-18.8 Z M195.1,170.9 h13.5 v11.2 h-13.5 Z M210.4,170.9 h21.4 v11.2 h-21.4 Z M233.6,170.9 h22.5 v11.2 h-22.5 Z M257.9,170.9 h13.4 v11.2 h-13.4 Z M273.1,170.9 h21.9 v11.2 h-21.9 Z M296.8,170.9 h8.1 v11.2 h-8.1 Z M194.8,183.9 h12.6 v11.2 h-12.6 Z M209.2,183.9 h13.3 v11.2 h-13.3 Z M224.3,183.9 h13.7 v11.2 h-13.7 Z M239.8,183.9 h15.2 v11.2 h-15.2 Z M256.8,183.9 h23.7 v11.2 h-23.7 Z M282.3,183.9 h15.4 v11.2 h-15.4 Z M299.5,183.9 h5.7 v11.2 h-5.7 Z M194.6,196.9 h23.4 v11.2 h-23.4 Z M219.8,196.9 h23.6 v11.2 h-23.6 Z M245.2,196.9 h17.0 v11.2 h-17.0 Z M264.0,196.9 h17.1 v11.2 h-17.1 Z M282.9,196.9 h19.0 v11.2 h-19.0 Z M194.3,209.9 h7.4 v11.2 h-7.4 Z M203.5,209.9 h21.4 v11.2 h-21.4 Z M226.7,209.9 h22.0 v11.2 h-22.0 Z M250.5,209.9 h22.7 v11.2 h-22.7 Z M275.0,209.9 h13.6 v11.2 h-13.6 Z M290.4,209.9 h15.3 v11.2 h-15.3 Z M194.1,222.9 h14.2 v11.2 h-14.2 Z M210.1,222.9 h16.9 v11.2 h-16.9 Z M228.8,222.9 h19.9 v11.2 h-19.9 Z M250.5,222.9 h23.3 v11.2 h-23.3 Z M275.6,222.9 h16.9 v11.2 h-16.9 Z M294.4,222.9 h11.6 v11.2 h-11.6 Z" fill="#5c5c70" opacity="0.55"/>
<!-- a plinth: the tower stands ON something -->
<path d="M186,218 L314,218 L318,232 L182,232 Z" fill="#4a4a5c"/>
<path d="M186,218 L314,218 L314,221 L186,221 Z" fill="#7a7a92" opacity="0.5"/>
<!-- a string course marking the floor levels, which is what gives a tower scale -->
<path d="M191,116 L309,116 L309,121 L191,121 Z" fill="#4a4a5c"/>
<path d="M191,116 L309,116 L309,117.6 L191,117.6 Z" fill="#7a7a92" opacity="0.45"/>
<path d="M194,72 L306,72 L306,76 L194,76 Z" fill="#4a4a5c" opacity="0.85"/>

<!-- Tower entrance arch -->
<path d="M230,230 L230,195 Q250,178 270,195 L270,230 Z" fill="#1a1030"/>
<path d="M232,230 L232,197 Q250,182 268,197 L268,230 Z" fill="#0d0820"/>
<!-- Glowing runes on walls — pulsing -->
<text x="210" y="75" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>&#x2727;</text>
<text x="280" y="75" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>&#x2726;</text>
<text x="215" y="108" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>&#x2740;</text>
<text x="275" y="110" fill="#ffd700" font-size="10" opacity="0.7" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" begin="0.3s"/>&#x2721;</text>
<text x="208" y="142" fill="#ffd700" font-size="11" opacity="0.65" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>&#x2738;</text>
<text x="282" y="145" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.35;0.8;0.35" dur="3.8s" repeatCount="indefinite" begin="0.8s"/>&#x2727;</text>
<text x="220" y="172" fill="#ffd700" font-size="10" opacity="0.55" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.3;0.75;0.3" dur="4.2s" repeatCount="indefinite" begin="2s"/>&#x2726;</text>
<text x="270" y="175" fill="#ffd700" font-size="11" opacity="0.6" filter="url(#advSoftGlow)"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3s" repeatCount="indefinite" begin="1.2s"/>&#x2740;</text>
<!-- Rune glow halos -->
<circle cx="215" cy="72" r="8" fill="url(#runeGlow)" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite"/></circle>
<circle cx="285" cy="72" r="8" fill="url(#runeGlow)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite" begin="0.5s"/></circle>
<circle cx="220" cy="105" r="7" fill="url(#runeGlow)" opacity="0.25"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
<circle cx="280" cy="107" r="7" fill="url(#runeGlow)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.8s" repeatCount="indefinite" begin="0.3s"/></circle>
<!-- Ground -->
<rect x="0" y="230" width="500" height="30" fill="#3a2a4a" opacity="0.6"/>
<ellipse cx="250" cy="232" rx="260" ry="12" fill="#4a3a5a" opacity="0.4"/>
<!-- Ground stones -->
<ellipse cx="130" cy="245" rx="15" ry="5" fill="#4a4a5a" opacity="0.3"/>
<ellipse cx="370" cy="242" rx="12" ry="4" fill="#4a4a5a" opacity="0.25"/>
<!-- Mist at base -->
<ellipse cx="250" cy="235" rx="80" ry="10" fill="#6a5a8a" opacity="0.08"/>
<ellipse cx="200" cy="240" rx="60" ry="8" fill="#8a7aaa" opacity="0.05"/>
<!-- Worn approach widens toward the viewer and meets the doorway threshold. -->
<path d="M230 230H270L296 260H202Z" fill="#555064" opacity=".7"/>
<path d="M230 231H270 M223 239H277 M214 250H287 M247 231L246 239 M257 240L260 250 M234 251L231 260" fill="none" stroke="#777083" stroke-width=".8" opacity=".4"/>
<path d="M226 229H274V232H226Z" fill="#656071"/>
<path d="M149 241L156 235L167 236L174 243L161 247Z M325 240L334 233L345 238L343 245H329Z" fill="#494256"/>
<path d="M149 241L156 235L167 236L163 240Z M325 240L334 233L338 237Z" fill="#686074" opacity=".55"/>
<path d="M121 248L117 236L124 242L127 231L131 247 M369 248L365 239L371 243L377 233L376 248" fill="#494653"/>
<path d="M194 215L190 203L195 207L196 195 M307 217L313 208L310 202" fill="none" stroke="#596055" stroke-width="1.4" opacity=".6"/>
</svg>`;

// Scene 1: Spectral guardian at entrance, glowing symbols on armor
STORY_SCENES['adventure_1'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv1Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="60%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#3a2a5a"/>
  </linearGradient>
  <radialGradient id="guardianGlow" cx="50%" cy="42%" r="46%">
    <stop offset="0%" stop-color="#8a7aff" stop-opacity="0.13"/><stop offset="45%" stop-color="#8a7aff" stop-opacity="0.06"/><stop offset="80%" stop-color="#8a7aff" stop-opacity="0.01"/><stop offset="100%" stop-color="#8a7aff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="runeGlow1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="adv1Stone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#6a6a8a"/><stop offset="50%" stop-color="#5a5a7a"/><stop offset="100%" stop-color="#454560"/>
  </linearGradient>
  <filter id="spectralShimmer">
    <feGaussianBlur stdDeviation="1.5" result="blur"/>
    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
  </filter>
  <filter id="advGlow1"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv1Bg)"/>
<!-- ====================================================================
     INSIDE THE TOWER. Every idea survives: the arch, the spectral guardian,
     the glowing symbols on his breastplate, the shimmer particles.

     What changed: the room was four horizontal lines on two flat rects, and
     adventure_0 established that a stone tower READS BY MASONRY. So the wall
     gets staggered courses with mortar between them, the arch gets voussoirs
     that spring from an impost, and the floor gets flagstones running to a
     vanishing point rather than a band of colour.

     The guardian was six rounded rects, which reads as a toy robot. He is
     hewn now: flat planes meeting at angles, one lit side and one shadowed
     side throughout, and a spectral value so he still glows rather than
     weighing anything.
     ==================================================================== -->

<!-- the far wall, dark: distance in a dim interior means DARKER -->
<path d="M0,0 L500,0 L500,222 L0,222 Z" fill="#38384c" opacity="0.45"/>

<!-- masonry, staggered courses, mortar showing as the gaps between blocks -->
<g fill="#4c4c64" opacity="0.55">
  <rect x="4" y="10" width="56" height="22"/><rect x="64" y="10" width="44" height="22"/><rect x="112" y="10" width="60" height="22"/><rect x="176" y="10" width="48" height="22"/><rect x="228" y="10" width="58" height="22"/><rect x="290" y="10" width="46" height="22"/><rect x="340" y="10" width="54" height="22"/><rect x="398" y="10" width="50" height="22"/><rect x="452" y="10" width="44" height="22"/>
  <rect x="-14" y="35" width="50" height="22"/><rect x="40" y="35" width="58" height="22"/><rect x="102" y="35" width="46" height="22"/><rect x="152" y="35" width="56" height="22"/><rect x="212" y="35" width="44" height="22"/><rect x="260" y="35" width="60" height="22"/><rect x="324" y="35" width="48" height="22"/><rect x="376" y="35" width="56" height="22"/><rect x="436" y="35" width="50" height="22"/>
  <rect x="4" y="60" width="46" height="22"/><rect x="54" y="60" width="60" height="22"/><rect x="118" y="60" width="44" height="22"/><rect x="166" y="60" width="54" height="22"/><rect x="224" y="60" width="50" height="22"/><rect x="278" y="60" width="56" height="22"/><rect x="338" y="60" width="44" height="22"/><rect x="386" y="60" width="58" height="22"/><rect x="448" y="60" width="48" height="22"/>
  <rect x="-10" y="85" width="54" height="22"/><rect x="48" y="85" width="44" height="22"/><rect x="96" y="85" width="58" height="22"/><rect x="158" y="85" width="48" height="22"/><rect x="210" y="85" width="56" height="22"/><rect x="270" y="85" width="44" height="22"/><rect x="318" y="85" width="60" height="22"/><rect x="382" y="85" width="46" height="22"/><rect x="432" y="85" width="54" height="22"/>
  <rect x="6" y="110" width="58" height="22"/><rect x="68" y="110" width="46" height="22"/><rect x="118" y="110" width="54" height="22"/><rect x="176" y="110" width="44" height="22"/><rect x="224" y="110" width="60" height="22"/><rect x="288" y="110" width="48" height="22"/><rect x="340" y="110" width="50" height="22"/><rect x="394" y="110" width="56" height="22"/><rect x="454" y="110" width="42" height="22"/>
  <rect x="-8" y="135" width="48" height="22"/><rect x="44" y="135" width="56" height="22"/><rect x="104" y="135" width="44" height="22"/><rect x="152" y="135" width="58" height="22"/><rect x="214" y="135" width="46" height="22"/><rect x="264" y="135" width="54" height="22"/><rect x="322" y="135" width="50" height="22"/><rect x="376" y="135" width="44" height="22"/><rect x="424" y="135" width="60" height="22"/>
  <rect x="2" y="160" width="56" height="22"/><rect x="62" y="160" width="48" height="22"/><rect x="114" y="160" width="58" height="22"/><rect x="176" y="160" width="46" height="22"/><rect x="226" y="160" width="54" height="22"/><rect x="284" y="160" width="44" height="22"/><rect x="332" y="160" width="60" height="22"/><rect x="396" y="160" width="48" height="22"/><rect x="448" y="160" width="46" height="22"/>
  <rect x="-12" y="185" width="52" height="22"/><rect x="44" y="185" width="60" height="22"/><rect x="108" y="185" width="44" height="22"/><rect x="156" y="185" width="54" height="22"/><rect x="214" y="185" width="48" height="22"/><rect x="266" y="185" width="56" height="22"/><rect x="326" y="185" width="46" height="22"/><rect x="376" y="185" width="50" height="22"/><rect x="430" y="185" width="56" height="22"/>
</g>
<!-- the light falls from the arch, so the wall is warmer near the middle -->
<path d="M120,0 L380,0 L380,222 L120,222 Z" fill="#6a6a8a" opacity="0.12"/>
<!-- and the outer corners fall away into the dark -->
<path d="M0,0 L86,0 L74,222 L0,222 Z" fill="#1a1030" opacity="0.4"/>
<path d="M414,0 L500,0 L500,222 L426,222 Z" fill="#1a1030" opacity="0.4"/>

<!-- ====================================================================
     WEAR. Dressed stone that has stood for centuries is not sharp: the
     arrises are knocked off, damp has run down from the string course, and
     a few blocks have spalled. These are the curves the wall was missing.
     ==================================================================== -->
<!-- damp staining running down from the courses, following gravity -->
<path d="M96,60 q3,14 -1,28 q-2,10 1,20 q-5,-9 -4,-21 q1,-15 4,-27 Z" fill="#2f2f44" opacity="0.28"/>
<path d="M212,86 q4,16 0,30 q-2,12 2,22 q-6,-10 -5,-23 q1,-16 3,-29 Z" fill="#2f2f44" opacity="0.24"/>
<path d="M388,62 q3,18 -1,34 q-2,11 1,19 q-5,-8 -4,-20 q1,-18 4,-33 Z" fill="#2f2f44" opacity="0.22"/>
<path d="M124,138 q4,12 1,24 q-2,9 1,16 q-5,-7 -4,-17 q1,-12 2,-23 Z" fill="#2f2f44" opacity="0.2"/>
<!-- spalled blocks: a corner broken away, so the face behind shows through -->
<path d="M56,60 q10,-2 18,3 q-6,7 -16,6 q-6,-4 -2,-9 Z" fill="#3e3e56" opacity="0.5"/>
<path d="M288,110 q12,-2 20,4 q-7,8 -18,6 q-7,-5 -2,-10 Z" fill="#3e3e56" opacity="0.45"/>
<path d="M152,186 q11,-2 19,4 q-7,7 -17,5 q-6,-4 -2,-9 Z" fill="#3e3e56" opacity="0.4"/>
<path d="M420,160 q10,-2 17,3 q-6,7 -15,5 q-6,-3 -2,-8 Z" fill="#3e3e56" opacity="0.42"/>
<!-- chamfers rounded off the arch ring, where hands and weather reach it -->
<path d="M166,128 q6,-8 14,-14 q-4,9 -11,16 Z" fill="#6c6c8a" opacity="0.35"/>
<path d="M334,128 q-6,-8 -14,-14 q4,9 11,16 Z" fill="#4e4e6a" opacity="0.35"/>
<path d="M226,66 q12,-5 26,-5 q-12,4 -25,8 Z" fill="#7a7a99" opacity="0.3"/>
<!-- a worn hollow in the threshold, where every foot has crossed -->
<path d="M196,222 q54,-5 108,0 q-30,7 -54,7 q-24,0 -54,-7 Z" fill="#241634" opacity="0.4"/>
<!-- lichen creeping up the lower courses, a filled shape with a ragged edge -->
<path d="M28,206 q7,-8 13,-2 q6,-9 12,-1 q5,-6 10,2 q-10,7 -22,7 q-11,0 -13,-6 Z"
      fill="#3c4a4a" opacity="0.22"/>
<path d="M446,204 q7,-8 13,-2 q6,-8 11,-1 q-9,7 -21,7 q-4,-1 -3,-4 Z" fill="#3c4a4a" opacity="0.18"/>

<!-- ====================================================================
     THE ARCH the guardian stands in. A real arch reads by its VOUSSOIRS: the
     wedge blocks of the ring, springing from an impost band on each side.
     ==================================================================== -->
<!-- the opening: black, because there is nothing lit beyond it -->
<path d="M158,222 L158,124 Q250,62 342,124 L342,222 Z" fill="#0d0820"/>
<path d="M166,222 L166,128 Q250,70 334,128 L334,222 Z" fill="#0a0618"/>
<!-- the arch ring, wedges radiating from the centre of the springing line -->
<g fill="#565672" opacity="0.85">
  <path d="M154,126 L166,130 L172,116 L158,110 Z"/>
  <path d="M158,110 L172,116 L182,102 L169,95 Z"/>
  <path d="M169,95 L182,102 L196,90 L185,82 Z"/>
  <path d="M185,82 L196,90 L213,80 L205,71 Z"/>
  <path d="M205,71 L213,80 L232,74 L227,63 Z"/>
  <path d="M227,63 L232,74 L250,72 L250,60 Z"/>
  <path d="M250,60 L250,72 L268,74 L273,63 Z"/>
  <path d="M273,63 L268,74 L287,80 L295,71 Z"/>
  <path d="M295,71 L287,80 L304,90 L315,82 Z"/>
  <path d="M315,82 L304,90 L318,102 L331,95 Z"/>
  <path d="M331,95 L318,102 L328,116 L342,110 Z"/>
  <path d="M342,110 L328,116 L334,130 L346,126 Z"/>
</g>
<!-- the keystone, proud of the ring -->
<path d="M239,58 L261,58 L266,74 L234,74 Z" fill="#6e6e8c"/>
<path d="M239,58 L261,58 L262,62 L238,62 Z" fill="#8f8fae" opacity="0.5"/>
<!-- the impost band each side, where the arch springs from the jamb -->
<path d="M146,124 L178,124 L178,132 L146,132 Z" fill="#5e5e7a"/>
<path d="M146,124 L178,124 L178,126.5 L146,126.5 Z" fill="#8f8fae" opacity="0.45"/>
<path d="M322,124 L354,124 L354,132 L322,132 Z" fill="#5e5e7a"/>
<path d="M322,124 L354,124 L354,126.5 L322,126.5 Z" fill="#8f8fae" opacity="0.45"/>
<!-- the jambs below the imposts, dressed stone -->
<rect x="150" y="132" width="18" height="22"
      fill="#525270" opacity="0.75"/><rect x="150" y="156" width="18" height="22"
      fill="#525270" opacity="0.75"/><rect x="150" y="180" width="18" height="22"
      fill="#525270" opacity="0.75"/><rect x="150" y="204" width="18" height="18"
      fill="#525270" opacity="0.75"/>
<rect x="332" y="132" width="18" height="22"
      fill="#484864" opacity="0.75"/><rect x="332" y="156" width="18" height="22"
      fill="#484864" opacity="0.75"/><rect x="332" y="180" width="18" height="22"
      fill="#484864" opacity="0.75"/><rect x="332" y="204" width="18" height="18"
      fill="#484864" opacity="0.75"/>

<!-- ====================================================================
     THE FLOOR: flagstones, wider and shallower as they come forward, which
     is what makes the floor lie down instead of standing up.
     ==================================================================== -->
<path d="M0,222 L500,222 L500,260 L0,260 Z" fill="#2a1a3a" opacity="0.75"/>
<path d="M0,222 Q250,218 500,222 L500,226 Q250,222 0,226 Z" fill="#4a3a5a" opacity="0.5"/>
<g fill="none" stroke="#1e1230" stroke-width="1.1" opacity="0.5">
  <path d="M0,232 h500 M0,244 h500"/>
  <path d="M62,226 L46,232 M148,226 L140,232 M232,226 L228,232 M318,226 L322,232 M404,226 L412,232"/>
  <path d="M18,232 L2,244 M104,232 L94,244 M190,232 L186,244 M276,232 L278,244 M362,232 L370,244 M448,232 L462,244"/>
  <path d="M56,244 L38,260 M144,244 L134,260 M232,244 L228,260 M320,244 L326,260 M408,244 L420,260"/>
</g>
<!-- the pool of light the arch throws onto the flags -->
<path d="M170,222 Q250,214 330,222 Q300,252 250,258 Q200,252 170,222 Z" fill="#6a5a9a" opacity="0.1"/>

<!-- ====================================================================
     THE GUARDIAN. Hewn stone, not plate: flat faces meeting at angles, a lit
     left side and a shadowed right side kept consistent through every part,
     and a spectral value so he reads as a presence rather than a statue.
     Every part the original had is still here: helmet, glowing visor,
     pauldrons, breastplate with cryptic symbols, arms, gauntlets, legs,
     boots, and the shimmer rising off him.
     ==================================================================== -->
<g filter="url(#spectralShimmer)">
  <!-- his aura, so the arch behind him is veiled where he stands -->
  <path d="M250,10 Q348,10 356,140 Q364,270 250,278 Q136,270 144,140 Q152,10 250,10 Z"
        fill="url(#guardianGlow)" opacity="0.5">
    <animate attributeName="opacity" values="0.26;0.46;0.26" dur="4.7s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>

  <!-- legs first, then the torso over them: SVG paints in document order -->
  <path d="M231,172 L247,172 L246,224 L230,224 Z" fill="#5c5c80" opacity="0.9"/>
  <path d="M231,172 L238,172 L237,224 L230,224 Z" fill="#7676a0" opacity="0.45"/>
  <path d="M253,172 L269,172 L270,224 L254,224 Z" fill="#4e4e6e" opacity="0.9"/>
  <!-- knee bands, carved -->
  <path d="M229,192 L248,192 L248,197 L229,197 Z" fill="#70709a" opacity="0.6"/>
  <path d="M252,192 L271,192 L271,197 L252,197 Z" fill="#61618a" opacity="0.6"/>
  <!-- boots: a sole plane and an instep plane, not a rounded box -->
  <path d="M224,224 L248,224 L248,234 L221,234 Q219,229 224,224 Z" fill="#4a4a6a" opacity="0.9"/>
  <path d="M224,224 L234,224 L234,234 L221,234 Q219,229 224,224 Z" fill="#67678e" opacity="0.45"/>
  <path d="M252,224 L276,224 L279,234 L252,234 Z" fill="#41415e" opacity="0.9"/>
  <!-- their contact shadow, so he stands on the flags -->
  <path d="M214,236 Q250,229 286,236 Q250,243 214,236 Z" fill="#150c26" opacity="0.4"/>

  <!-- arms, hung plumb from the pauldrons, ending in gauntlets -->
  <path d="M204,112 L219,110 L222,166 L207,168 Z" fill="#5f5f84" opacity="0.85"/>
  <path d="M204,112 L211,111 L214,167 L207,168 Z" fill="#6d6d94" opacity="0.35"/>
  <path d="M281,110 L296,112 L293,168 L278,166 Z" fill="#535374" opacity="0.85"/>
  <!-- gauntlets: a cuff, a back plate and a knuckle plane -->
  <path d="M203,164 L224,166 L223,176 L202,174 Z" fill="#63638a" opacity="0.6"/>
  <path d="M203,164 L224,166 L224,169 L203,167 Z" fill="#8484ab" opacity="0.4"/>
  <path d="M205,174 L221,176 L219,182 L207,181 Z" fill="#55557a" opacity="0.55"/>
  <path d="M276,166 L297,164 L298,174 L277,176 Z" fill="#57577c" opacity="0.6"/>
  <path d="M279,176 L295,174 L293,181 L281,182 Z" fill="#4b4b6c" opacity="0.55"/>

  <!-- the breastplate: a keeled front, so it has a centre ridge and two faces -->
  <path d="M220,110 L250,106 L250,180 Q234,178 224,172 Z" fill="#5f5f82" opacity="0.72"/>
  <path d="M250,106 L280,110 L276,172 Q266,178 250,180 Z" fill="#4d4d6c" opacity="0.72"/>
  <path d="M250,106 L250,180" stroke="#8484ab" stroke-width="1" opacity="0.3"/>
  <!-- a fauld: the skirt of plates at the waist -->
  <path d="M226,168 L274,168 L272,180 Q250,186 228,180 Z" fill="#545475" opacity="0.6"/>
  <path d="M238,169 v14 M250,170 v15 M262,169 v14" stroke="#2f2f48" stroke-width="0.9" opacity="0.45"/>

  <!-- pauldrons over the shoulder joints, drawn AFTER the arms so they cap them -->
  <path d="M212,108 Q224,92 244,96 L246,110 Q228,106 210,116 Z" fill="#67678c" opacity="0.75"/>
  <path d="M212,108 Q224,92 244,96 L244,100 Q226,97 213,111 Z" fill="#8989b0" opacity="0.4"/>
  <path d="M288,108 Q276,92 256,96 L254,110 Q272,106 290,116 Z" fill="#55557a" opacity="0.75"/>

  <!-- neck and gorget -->
  <path d="M241,90 L259,90 L261,100 L239,100 Z" fill="#43435f" opacity="0.8"/>
  <path d="M236,98 L264,98 L266,106 L234,106 Z" fill="#5b5b7e" opacity="0.7"/>

  <!-- the helmet: a faceted sallet, a brow ridge, a crest and a visor slot -->
  <path d="M231,76 Q234,58 250,55 Q266,58 269,76 L266,92 L234,92 Z" fill="#5d5d80" opacity="0.8"/>
  <path d="M231,76 Q234,58 250,55 L250,92 L234,92 Z" fill="#75759c" opacity="0.4"/>
  <path d="M247,53 Q250,48 253,53 L254,74 L246,74 Z" fill="#7c7ca3" opacity="0.55"/>
  <path d="M232,74 Q250,69 268,74 L268,79 Q250,74 232,79 Z" fill="#43435f" opacity="0.7"/>
  <path d="M234,90 Q250,95 266,90 L265,94 Q250,99 235,94 Z" fill="#3a3a55" opacity="0.6"/>
  <!-- the visor slot, and the light behind it -->
  <path d="M238,81 L262,81 L261,85 L239,85 Z" fill="#0f0c22" opacity="0.85"/>
  <path d="M239,82 L261,82 L260,84 L240,84 Z" fill="#88aaff" opacity="0.75">
    <animate attributeName="opacity" values="0.45;0.9;0.45" dur="3.3s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>

  <!-- the cryptic symbols cut into the breastplate, unchanged in meaning -->
  <text x="250" y="132" text-anchor="middle" fill="#ffd700" font-size="10" opacity="0.8" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2721;</text>
  <text x="238" y="150" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.7" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.4s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2727;</text>
  <text x="262" y="150" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.7" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.9s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2726;</text>
  <text x="250" y="163" text-anchor="middle" fill="#ffd700" font-size="9" opacity="0.6" filter="url(#advGlow1)"><animate attributeName="opacity" values="0.3;0.85;0.3" dur="5.1s" repeatCount="indefinite" begin="1.7s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2738;</text>
  <!-- their glow halos -->
  <circle cx="250" cy="129" r="9" fill="url(#runeGlow1)" opacity="0.25"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <circle cx="250" cy="160" r="8" fill="url(#runeGlow1)" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="5.1s" repeatCount="indefinite" begin="1.7s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>

  <!-- shimmer rising off him, faded at both ends so the loop has no seam -->
  <circle cx="222" cy="102" r="1.5" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="102;62" dur="4.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="222;217" dur="4.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.45;0" dur="4.3s" repeatCount="indefinite" keyTimes="0;0.35;1"/>
  </circle>
  <circle cx="278" cy="98" r="1.1" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="98;54" dur="5.6s" repeatCount="indefinite" begin="1.3s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="278;284" dur="5.6s" repeatCount="indefinite" begin="1.3s"/>
    <animate attributeName="opacity" values="0;0.4;0" dur="5.6s" repeatCount="indefinite" begin="1.3s" keyTimes="0;0.35;1"/>
  </circle>
  <circle cx="250" cy="112" r="1.3" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="112;60" dur="6.4s" repeatCount="indefinite" begin="2.6s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="250;256" dur="6.4s" repeatCount="indefinite" begin="2.6s"/>
    <animate attributeName="opacity" values="0;0.42;0" dur="6.4s" repeatCount="indefinite" begin="2.6s" keyTimes="0;0.35;1"/>
  </circle>
</g>
</svg>`;

// Scene 2: Puzzle — letters glowing on guardian breastplate (reuses guardian scene)
STORY_SCENES['adventure_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv2Bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="60%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#3a2a5a"/>
  </linearGradient>
  <radialGradient id="guardGlow2" cx="50%" cy="42%" r="46%">
    <stop offset="0%" stop-color="#8a7aff" stop-opacity="0.14"/><stop offset="45%" stop-color="#8a7aff" stop-opacity="0.06"/><stop offset="80%" stop-color="#8a7aff" stop-opacity="0.01"/><stop offset="100%" stop-color="#8a7aff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="letterGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.8"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="letterBloom"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <filter id="spectShimmer2"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv2Bg)"/>
<!-- ====================================================================
     THE SAME GUARDIAN, CLOSER. He is meant to be one object seen twice, so
     he is built the same way as adventure_1: hewn planes, a keeled
     breastplate, a faceted sallet, one lit side throughout. Only the camera
     moved in, which means the courses of the wall behind him read larger and
     his legs fall below the frame (a CAMERA crop, not a furniture crop).

     Every idea survives: the arch, the runes blazing across the breastplate,
     the smaller symbols above and below them, the bloom, the shimmer.
     ==================================================================== -->

<!-- the wall, bigger courses because we are closer to it -->
<path d="M0,0 L500,0 L500,236 L0,236 Z" fill="#38384c" opacity="0.45"/>
<g fill="#4c4c64" opacity="0.55">
  <rect x="-8" y="6" width="84" height="32"/><rect x="80" y="6" width="68" height="32"/><rect x="152" y="6" width="90" height="32"/><rect x="246" y="6" width="74" height="32"/><rect x="324" y="6" width="86" height="32"/><rect x="414" y="6" width="78" height="32"/>
  <rect x="-20" y="42" width="76" height="32"/><rect x="60" y="42" width="88" height="32"/><rect x="152" y="42" width="70" height="32"/><rect x="226" y="42" width="84" height="32"/><rect x="314" y="42" width="76" height="32"/><rect x="394" y="42" width="90" height="32"/>
  <rect x="-8" y="78" width="90" height="32"/><rect x="86" y="78" width="72" height="32"/><rect x="162" y="78" width="86" height="32"/><rect x="252" y="78" width="78" height="32"/><rect x="334" y="78" width="88" height="32"/><rect x="426" y="78" width="74" height="32"/>
  <rect x="-16" y="114" width="80" height="32"/><rect x="68" y="114" width="86" height="32"/><rect x="158" y="114" width="74" height="32"/><rect x="236" y="114" width="90" height="32"/><rect x="330" y="114" width="72" height="32"/><rect x="406" y="114" width="84" height="32"/>
  <rect x="-4" y="150" width="74" height="32"/><rect x="74" y="150" width="90" height="32"/><rect x="168" y="150" width="78" height="32"/><rect x="250" y="150" width="86" height="32"/><rect x="340" y="150" width="76" height="32"/><rect x="420" y="150" width="80" height="32"/>
  <rect x="-18" y="186" width="88" height="32"/><rect x="74" y="186" width="76" height="32"/><rect x="154" y="186" width="84" height="32"/><rect x="242" y="186" width="90" height="32"/><rect x="336" y="186" width="72" height="32"/><rect x="412" y="186" width="86" height="32"/>
</g>
<!-- light from the arch, and corners falling away -->
<path d="M110,0 L390,0 L390,236 L110,236 Z" fill="#6a6a8a" opacity="0.12"/>
<path d="M0,0 L74,0 L62,236 L0,236 Z" fill="#1a1030" opacity="0.42"/>
<path d="M426,0 L500,0 L500,236 L438,236 Z" fill="#1a1030" opacity="0.42"/>

<!-- ====================================================================
     WEAR, same wall seen closer, so it shows more of it: damp running down
     from the courses, spalled corners, lichen at the foot, and the arrises
     of the arch ring knocked off by weather and hands.
     ==================================================================== -->
<path d="M104,42 q5,20 0,38 q-3,14 2,26 q-8,-12 -6,-28 q2,-20 4,-36 Z" fill="#2f2f44" opacity="0.26"/>
<path d="M290,78 q5,22 -1,42 q-3,13 2,24 q-8,-11 -6,-26 q2,-21 5,-40 Z" fill="#2f2f44" opacity="0.22"/>
<path d="M424,114 q5,18 0,34 q-3,12 2,22 q-8,-10 -6,-24 q2,-17 4,-32 Z" fill="#2f2f44" opacity="0.2"/>
<path d="M42,150 q4,16 0,30 q-2,10 2,18 q-7,-8 -5,-20 q1,-15 3,-28 Z" fill="#2f2f44" opacity="0.18"/>
<path d="M56,78 q14,-3 24,4 q-9,10 -22,8 q-8,-6 -2,-12 Z" fill="#3e3e56" opacity="0.45"/>
<path d="M396,42 q15,-3 25,5 q-9,10 -23,7 q-8,-6 -2,-12 Z" fill="#3e3e56" opacity="0.4"/>
<path d="M182,190 q14,-3 24,5 q-9,9 -22,6 q-8,-5 -2,-11 Z" fill="#3e3e56" opacity="0.38"/>
<path d="M158,138 q6,-10 16,-17 q-5,11 -13,20 Z" fill="#6c6c8a" opacity="0.35"/>
<path d="M342,138 q-6,-10 -16,-17 q5,11 13,20 Z" fill="#4e4e6a" opacity="0.35"/>
<path d="M222,62 q15,-6 32,-6 q-15,5 -31,10 Z" fill="#7a7a99" opacity="0.3"/>
<path d="M18,224 q9,-10 17,-3 q7,-11 15,-1 q7,-8 13,3 q-13,9 -29,9 q-14,0 -16,-8 Z"
      fill="#3c4a4a" opacity="0.2"/>
<path d="M432,220 q9,-10 17,-3 q7,-10 14,-1 q-12,9 -27,9 q-5,-1 -4,-5 Z" fill="#3c4a4a" opacity="0.16"/>

<!-- ====================================================================
     THE ARCH, same construction, scaled up for the closer camera: voussoirs
     springing from an impost, a keystone, a black opening.
     ==================================================================== -->
<path d="M150,260 L150,132 Q250,58 350,132 L350,260 Z" fill="#0d0820"/>
<path d="M158,260 L158,137 Q250,66 342,137 L342,260 Z" fill="#0a0618"/>
<g fill="#565672" opacity="0.85">
  <path d="M145,134 L159,139 L166,122 L150,115 Z"/>
  <path d="M150,115 L166,122 L178,105 L163,96 Z"/>
  <path d="M163,96 L178,105 L195,90 L182,80 Z"/>
  <path d="M182,80 L195,90 L215,78 L206,67 Z"/>
  <path d="M206,67 L215,78 L237,71 L232,58 Z"/>
  <path d="M232,58 L237,71 L250,69 L250,55 Z"/>
  <path d="M250,55 L250,69 L263,71 L268,58 Z"/>
  <path d="M268,58 L263,71 L285,78 L294,67 Z"/>
  <path d="M294,67 L285,78 L305,90 L318,80 Z"/>
  <path d="M318,80 L305,90 L322,105 L337,96 Z"/>
  <path d="M337,96 L322,105 L334,122 L350,115 Z"/>
  <path d="M350,115 L334,122 L341,139 L355,134 Z"/>
</g>
<path d="M237,53 L263,53 L269,71 L231,71 Z" fill="#6e6e8c"/>
<path d="M237,53 L263,53 L264,58 L236,58 Z" fill="#8f8fae" opacity="0.5"/>
<path d="M136,132 L172,132 L172,142 L136,142 Z" fill="#5e5e7a"/>
<path d="M136,132 L172,132 L172,135 L136,135 Z" fill="#8f8fae" opacity="0.45"/>
<path d="M328,132 L364,132 L364,142 L328,142 Z" fill="#5e5e7a"/>
<path d="M328,132 L364,132 L364,135 L328,135 Z" fill="#8f8fae" opacity="0.45"/>
<rect x="140" y="142" width="22" height="28"
      fill="#525270" opacity="0.75"/><rect x="140" y="172" width="22" height="28"
      fill="#525270" opacity="0.75"/><rect x="140" y="202" width="22" height="28"
      fill="#525270" opacity="0.75"/><rect x="140" y="232" width="22" height="28"
      fill="#525270" opacity="0.75"/>
<rect x="338" y="142" width="22" height="28"
      fill="#484864" opacity="0.75"/><rect x="338" y="172" width="22" height="28"
      fill="#484864" opacity="0.75"/><rect x="338" y="202" width="22" height="28"
      fill="#484864" opacity="0.75"/><rect x="338" y="232" width="22" height="28"
      fill="#484864" opacity="0.75"/>

<!-- ====================================================================
     THE GUARDIAN, same build, camera moved in. His legs run out of frame at
     the bottom, which is a camera decision.
     ==================================================================== -->
<g filter="url(#spectShimmer2)">
  <path d="M250,-6 Q356,-6 364,140 Q372,286 250,294 Q128,286 136,140 Q144,-6 250,-6 Z"
        fill="url(#guardGlow2)" opacity="0.5">
    <animate attributeName="opacity" values="0.28;0.5;0.28" dur="5.2s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>

  <!-- legs, drawn before the torso, running out of the bottom of the frame -->
  <path d="M226,188 L246,188 L245,260 L225,260 Z" fill="#5c5c80" opacity="0.9"/>
  <path d="M226,188 L235,188 L234,260 L225,260 Z" fill="#7676a0" opacity="0.45"/>
  <path d="M254,188 L274,188 L275,260 L255,260 Z" fill="#4e4e6e" opacity="0.9"/>
  <path d="M224,212 L247,212 L247,218 L224,218 Z" fill="#70709a" opacity="0.6"/>
  <path d="M253,212 L276,212 L276,218 L253,218 Z" fill="#61618a" opacity="0.6"/>

  <!-- arms, hung plumb, ending in gauntlets -->
  <path d="M196,110 L214,108 L218,176 L200,178 Z" fill="#5f5f84" opacity="0.85"/>
  <path d="M196,110 L205,109 L209,177 L200,178 Z" fill="#7676a0" opacity="0.38"/>
  <path d="M286,108 L304,110 L300,178 L282,176 Z" fill="#535374" opacity="0.85"/>
  <path d="M195,174 L220,176 L219,188 L194,186 Z" fill="#63638a" opacity="0.65"/>
  <path d="M195,174 L220,176 L220,180 L195,178 Z" fill="#8484ab" opacity="0.4"/>
  <path d="M197,186 L217,188 L215,196 L200,194 Z" fill="#55557a" opacity="0.6"/>
  <path d="M280,176 L305,174 L306,186 L281,188 Z" fill="#57577c" opacity="0.65"/>
  <path d="M283,188 L303,186 L300,194 L285,196 Z" fill="#4b4b6c" opacity="0.6"/>

  <!-- the breastplate: keeled, two faces, and the runes ride on it -->
  <path d="M214,106 L250,101 L250,190 Q230,187 218,180 Z" fill="#5f5f82" opacity="0.75"/>
  <path d="M250,101 L286,106 L282,180 Q270,187 250,190 Z" fill="#4d4d6c" opacity="0.75"/>
  <path d="M250,101 L250,190" stroke="#8484ab" stroke-width="1.1" opacity="0.3"/>
  <!-- the fauld at the waist -->
  <path d="M220,178 L280,178 L278,192 Q250,199 222,192 Z" fill="#545475" opacity="0.62"/>
  <path d="M235,179 v16 M250,180 v17 M265,179 v16" stroke="#2f2f48" stroke-width="1" opacity="0.45"/>

  <!-- pauldrons, capping the arm joints -->
  <path d="M206,104 Q220,84 244,89 L246,106 Q224,101 204,113 Z" fill="#67678c" opacity="0.8"/>
  <path d="M206,104 Q220,84 244,89 L244,94 Q222,90 207,108 Z" fill="#8989b0" opacity="0.4"/>
  <path d="M294,104 Q280,84 256,89 L254,106 Q276,101 296,113 Z" fill="#55557a" opacity="0.8"/>

  <!-- neck and gorget -->
  <path d="M240,84 L260,84 L262,95 L238,95 Z" fill="#43435f" opacity="0.8"/>
  <path d="M234,93 L266,93 L268,102 L232,102 Z" fill="#5b5b7e" opacity="0.72"/>

  <!-- the helmet, same faceted sallet, larger here -->
  <path d="M229,66 Q232,45 250,42 Q268,45 271,66 L268,86 L232,86 Z" fill="#5d5d80" opacity="0.85"/>
  <path d="M229,66 Q232,45 250,42 L250,86 L232,86 Z" fill="#75759c" opacity="0.4"/>
  <path d="M246,39 Q250,33 254,39 L255,63 L245,63 Z" fill="#7c7ca3" opacity="0.55"/>
  <path d="M230,64 Q250,58 270,64 L270,70 Q250,64 230,70 Z" fill="#43435f" opacity="0.72"/>
  <path d="M232,84 Q250,90 268,84 L267,89 Q250,95 233,89 Z" fill="#3a3a55" opacity="0.6"/>
  <path d="M236,71 L264,71 L263,76 L237,76 Z" fill="#0f0c22" opacity="0.85"/>
  <path d="M237,72 L263,72 L262,75 L238,75 Z" fill="#88aaff" opacity="0.75">
    <animate attributeName="opacity" values="0.45;0.9;0.45" dur="3.3s" repeatCount="indefinite"
             calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  </path>

  <!-- ====================================================================
       THE RUNES, blazing across the plate. The clue is spoken, never shown
       solved, so these stay symbols. The plate runs x=214..286 and tapers to
       x=218..282 by y=180, so every glyph is anchored and sits inside it.
       ==================================================================== -->
  <g filter="url(#letterBloom)">
    <text x="231" y="152" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2727;</text>
    <text x="244" y="152" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.9s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2738;</text>
    <text x="257" y="152" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" begin="0.6s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2726;</text>
    <text x="270" y="152" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.1s" repeatCount="indefinite" begin="0.9s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2740;</text>
  </g>
  <!-- the bloom, sized to stay on the armour -->
  <circle cx="250" cy="147" r="22" fill="url(#letterGlow)" opacity="0.25"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>
  <!-- the smaller symbols above and below, inside the plate edges -->
  <text x="230" y="126" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.5">&#x2727;</text>
  <text x="270" y="126" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.5">&#x2726;</text>
  <text x="234" y="173" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.4">&#x2738;</text>
  <text x="266" y="173" text-anchor="middle" fill="#ffd700" font-size="7" opacity="0.4">&#x2740;</text>

  <!-- shimmer, faded at both ends so the loop has no seam -->
  <circle cx="214" cy="96" r="1.5" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="96;48" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="214;208" dur="4.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;0.45;0" dur="4.6s" repeatCount="indefinite" keyTimes="0;0.35;1"/>
  </circle>
  <circle cx="286" cy="92" r="1.1" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="92;40" dur="5.9s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="286;293" dur="5.9s" repeatCount="indefinite" begin="1.6s"/>
    <animate attributeName="opacity" values="0;0.4;0" dur="5.9s" repeatCount="indefinite" begin="1.6s" keyTimes="0;0.35;1"/>
  </circle>
  <circle cx="250" cy="104" r="1.3" fill="#aaccff" opacity="0">
    <animate attributeName="cy" values="104;46" dur="6.7s" repeatCount="indefinite" begin="3.1s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
    <animate attributeName="cx" values="250;257" dur="6.7s" repeatCount="indefinite" begin="3.1s"/>
    <animate attributeName="opacity" values="0;0.4;0" dur="6.7s" repeatCount="indefinite" begin="3.1s" keyTimes="0;0.35;1"/>
  </circle>
</g>
</svg>`;

// Scene 3: View from summit — island below, distant observatory dome on mountain peak
STORY_SCENES['adventure_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs>
  <linearGradient id="adv3Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="30%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#5a4a7a"/>
  </linearGradient>
  <radialGradient id="domeGlint" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#c0c0e0" stop-opacity="0.6"/><stop offset="100%" stop-color="#c0c0e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="moonGlow3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#eeeeff" stop-opacity="0.15"/><stop offset="100%" stop-color="#eeeeff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="adv3Merlon" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#61617a"/><stop offset="100%" stop-color="#45455c"/>
  </linearGradient>
  <filter id="advSoftGlow3"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>

  <linearGradient id="adv4Sky_adventure_3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="domeLight4_adventure_3" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="obsGlint4_adventure_3" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <filter id="advGlow4_adventure_3"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs><rect width="500" height="260" fill="#211438"/><g transform="translate(162 60) scale(0.62)"><!-- ====================================================================
     THE PEAK. Ridge lines, not a triangle. The summit sits off centre, the
     west flank catches the light, the east flank is cut by gullies, and rock
     steps break the run down to the scree.
     ==================================================================== -->
<path d="M84,224 L124,196 L156,168 L186,140 L214,110 L238,84 L252,66 L262,80
         L280,108 L300,138 L322,164 L348,190 L380,212 L404,224 Z"
      fill="#453569" opacity="0.9"/>
<!-- the lit west flank, a band along the ridge rather than the whole face -->
<path d="M186,140 L214,110 L238,84 L252,66 L256,80 L232,102 L206,134 L186,158 Z"
      fill="#57427a" opacity="0.5"/>
<path d="M84,224 L124,196 L156,168 L166,178 L136,204 L102,226 Z" fill="#503d72" opacity="0.35"/>
<!-- gullies cut down the shadowed east flank -->
<path d="M258,74 L272,102 L266,132 L280,158 L272,186 L262,158 L268,128 L254,100 Z"
      fill="#382a58" opacity="0.55"/>
<path d="M292,132 L308,158 L300,182 L288,158 Z" fill="#362954" opacity="0.45"/>
<!-- rock steps and outcrops that break the profile -->
<path d="M196,132 L228,124 L242,136 L232,148 L198,148 Z" fill="#4c3b74" opacity="0.4"/>
<path d="M148,178 L182,170 L194,182 L182,194 L150,192 Z" fill="#4a3971" opacity="0.35"/>
<path d="M300,164 L330,158 L344,172 L330,184 L302,180 Z" fill="#3f3064" opacity="0.4"/>
<!-- snow held in the summit hollows, which is where snow actually sits -->
<path d="M238,84 L252,66 L262,80 L256,86 L248,80 L242,90 Z" fill="#c6c6da" opacity="0.25"/>
<path d="M228,98 L240,92 L246,100 L236,106 Z" fill="#c6c6da" opacity="0.15"/>
<!-- scree apron at the foot -->
<path d="M92,222 Q180,208 250,212 Q330,208 396,222 L400,230 L88,230 Z" fill="#3a2c5a" opacity="0.6"/>

<!-- ====================================================================
     THE PATH: a ledge cut into the flank, so it has a tread you can walk on,
     a shadowed bank on the uphill side and a lit lip on the downhill side.
     The golden dashes the scene already had ride along the tread.
     ==================================================================== -->
<!-- The path SWITCHBACKS. A single diagonal ramp reads as a plank leaning on
     the hill; real mountain paths zigzag, and each leg is a narrow ledge whose
     outer lip catches light while the bank above it stays dark. -->
<!-- leg 1: from the foreground up and to the right -->
<!-- leg 2: doubling back left across the flank -->
<path d="M214,198 Q196,190 172,184 Q150,178 134,172" fill="none" stroke="#33265a" stroke-width="4.4" opacity="0.5" stroke-linecap="round"/>
<path d="M214,199 Q196,191 172,185 Q150,179 134,173" fill="none" stroke="#8a7a9a" stroke-width="2.1" opacity="0.38" stroke-linecap="round"/>
<path d="M214,200.2 Q196,192.2 172,186.2 Q150,180.2 134,174.2" fill="none" stroke="#a897bb" stroke-width="0.8" opacity="0.25" stroke-linecap="round"/>
<!-- leg 3: back to the right, higher and shorter -->
<path d="M134,172 Q156,164 180,158 Q204,152 222,146" fill="none" stroke="#33265a" stroke-width="3.8" opacity="0.48" stroke-linecap="round"/>
<path d="M134,173 Q156,165 180,159 Q204,153 222,147" fill="none" stroke="#8a7a9a" stroke-width="1.8" opacity="0.34" stroke-linecap="round"/>
<path d="M134,174 Q156,166 180,160 Q204,154 222,148" fill="none" stroke="#a897bb" stroke-width="0.7" opacity="0.22" stroke-linecap="round"/>
<!-- leg 4: the last pull up to the footing, shortest of all -->
<path d="M222,146 Q214,132 218,118 Q222,106 230,97" fill="none" stroke="#33265a" stroke-width="3.2" opacity="0.45" stroke-linecap="round"/>
<path d="M223,146 Q215,132 219,118 Q223,106 231,97" fill="none" stroke="#8a7a9a" stroke-width="1.5" opacity="0.32" stroke-linecap="round"/>
<path d="M224,146 Q216,132 220,118 Q224,106 232,97" fill="none" stroke="#a897bb" stroke-width="0.6" opacity="0.2" stroke-linecap="round"/>
<!-- golden way-markers set along the path, brightest near the top -->
<path d="M148,222 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M196,203 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.15"/>
<path d="M160,180 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.14"/>
<path d="M198,153 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M219,124 q4,-3 7,-1 q-4,3 -7,1 Z" fill="#ffd700" opacity="0.18"/>

<!-- ====================================================================
     THE OBSERVATORY, the same building as adventure_3 seen from much closer:
     a footing on the rock, a drum with a door and lit windows, a true half
     dome, an open shutter slit and a finial.
     ==================================================================== -->
<!-- footing cut into the summit -->
<path d="M222,90 L282,90 L286,97 L218,97 Z" fill="#55557a" opacity="0.8"/>
<path d="M222,90 L282,90 L282,92 L222,92 Z" fill="#7a7a9e" opacity="0.4"/>
<!-- the drum, lit on its west side -->
<path d="M228,68 L276,68 L278,90 L226,90 Z" fill="#6f6f92" opacity="0.9"/>
<path d="M228,68 L250,68 L250,90 L226,90 Z" fill="#8a8ab0" opacity="0.4"/>
<!-- a string course around the drum, so it has a top and a bottom -->
<path d="M226,72 L278,72 L278,75 L226,75 Z" fill="#4e4e70" opacity="0.6"/>
<!-- the door, and the light spilling out of it onto the footing -->
<path d="M244,78 L258,78 L258,90 L244,90 Z" fill="#241a38" opacity="0.75"/>
<path d="M246,80 Q251,77 256,80 L256,90 L246,90 Z" fill="#ffd700" opacity="0.3"/>
<path d="M240,90 Q252,86 264,90 Q252,96 240,90 Z" fill="#ffd700" opacity="0.14"/>
<!-- lit windows either side of the door -->
<path d="M232,78 Q236,76 240,78 L240,85 Q236,87 232,85 Z" fill="#ffd700" opacity="0.35"/>
<path d="M262,78 Q266,76 270,78 L270,85 Q266,87 262,85 Z" fill="#ffd700" opacity="0.3"/>
<!-- the dome: a true half round sitting on the drum -->
<path d="M224,68 Q224,42 252,42 Q280,42 280,68 Z" fill="#8a8aaa" opacity="0.9"/>
<path d="M224,68 Q224,42 252,42 L252,68 Z" fill="#a4a4c6" opacity="0.35"/>
<!-- ribs on the dome, which is how a real one is built -->
<path d="M238,45 Q234,56 233,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<path d="M266,45 Q270,56 271,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<!-- the shutter, open, with the dark of the chamber behind it -->
<path d="M248,42 L258,43 L258,68 L248,68 Z" fill="#241a38" opacity="0.7"/>
<path d="M248,42 L252,42 L252,68 L248,68 Z" fill="#3a2a52" opacity="0.5"/>
<!-- finial -->
<path d="M250.6,35 L253.4,35 L253.4,42 L250.6,42 Z" fill="#a4a4c6" opacity="0.6"/>
<path d="M252,31 a2.2,2.2 0 1,1 0.1,0 Z" fill="#b4b4d4" opacity="0.5"/>
<!-- Dome glint -->
<circle cx="252" cy="52" r="14" fill="url(#obsGlint4_adventure_3)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="240" cy="50" r="2" fill="#f0f0ff" opacity="0.5" filter="url(#advGlow4_adventure_3)">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- the warm wash the lit windows throw onto the summit rock -->
<circle cx="252" cy="84" r="26" fill="url(#domeLight4_adventure_3)" opacity="0.4"/>

</g><!-- the water the island sits in -->
<path d="M0,186 Q120,178 250,184 Q380,190 500,182 L500,232 L0,232 Z" fill="#241c40" opacity="0.55"/>
<!-- the island: a coast that bays in and out -->
<path d="M24,214 Q54,196 96,194 Q132,190 158,198 Q186,190 218,196 Q252,188 288,198
         Q322,192 352,204 Q382,214 396,228 Q368,240 306,242 Q222,246 148,240
         Q78,234 34,226 Q18,220 24,214 Z" fill="#33423a" opacity="0.5"/>
<!-- a lit inland ridge running along it, with a shadowed north face -->
<path d="M74,214 Q112,200 152,206 Q192,198 232,206 Q272,198 310,210 Q342,218 356,226
         Q308,220 240,218 Q160,216 96,220 Z" fill="#3e5044" opacity="0.5"/>
<path d="M74,214 Q112,200 152,206 Q192,198 232,206 L232,210 Q192,203 152,211 Q112,205 76,218 Z"
      fill="#4c6252" opacity="0.4"/>
<!-- a bay bitten out of the coast -->
<path d="M196,238 Q222,226 254,230 Q244,242 216,244 Z" fill="#241c40" opacity="0.45"/>
<!-- the woods: a canopy mass with a lumpy top edge, not separate triangles -->
<path d="M88,212 q7,-10 14,-2 q6,-11 13,-1 q7,-9 13,0 q6,-8 12,2 q-13,7 -30,7 q-16,0 -22,-6 Z"
      fill="#2a4a2a" opacity="0.35"/>
<path d="M160,206 q6,-9 12,-1 q6,-10 12,0 q6,-8 11,2 q-11,6 -23,6 q-11,0 -12,-7 Z"
      fill="#2a4a2a" opacity="0.3"/>
<path d="M244,210 q7,-9 13,-1 q6,-10 13,0 q6,-8 11,3 q-12,6 -25,6 q-11,0 -12,-8 Z"
      fill="#2a4a2a" opacity="0.32"/>
<!-- a few trees tall enough to read singly, right at the edge of the wood -->
<path d="M104,208 L107,196 L110,208 Z M126,204 L129,193 L132,204 Z M182,202 L185,192 L188,202 Z
         M266,206 L269,195 L272,206 Z" fill="#24401f" opacity="0.4"/>
<!-- haze lying over the island, because it is a long way down -->
<path d="M0,196 L500,196 L500,238 L0,238 Z" fill="#5a4a7a" opacity="0.16"/>

<!-- ====================================================================
     THE PARAPET WE ARE LEANING ON. Built like adventure_0's: a walk, a
     coping course, merlons with their own caps, and embrasures that show the
     island through them rather than being painted gaps.
     ==================================================================== -->
<!-- the merlons: each is a block with a lit left face and its own cap -->
<path d="M8,222 L44,222 L44,248 L8,248 Z" fill="url(#adv3Merlon)"/>
<path d="M8,222 L20,222 L20,248 L8,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M5,218 L47,218 L47,223 L5,223 Z" fill="#6d6d88"/>
<path d="M68,222 L104,222 L104,248 L68,248 Z" fill="url(#adv3Merlon)"/>
<path d="M68,222 L80,222 L80,248 L68,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M65,218 L107,218 L107,223 L65,223 Z" fill="#6d6d88"/>
<path d="M128,222 L164,222 L164,248 L128,248 Z" fill="url(#adv3Merlon)"/>
<path d="M128,222 L140,222 L140,248 L128,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M125,218 L167,218 L167,223 L125,223 Z" fill="#6d6d88"/>
<path d="M188,222 L224,222 L224,248 L188,248 Z" fill="url(#adv3Merlon)"/>
<path d="M188,222 L200,222 L200,248 L188,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M185,218 L227,218 L227,223 L185,223 Z" fill="#6d6d88"/>
<path d="M248,222 L284,222 L284,248 L248,248 Z" fill="url(#adv3Merlon)"/>
<path d="M248,222 L260,222 L260,248 L248,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M245,218 L287,218 L287,223 L245,223 Z" fill="#6d6d88"/>
<path d="M308,222 L344,222 L344,248 L308,248 Z" fill="url(#adv3Merlon)"/>
<path d="M308,222 L320,222 L320,248 L308,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M305,218 L347,218 L347,223 L305,223 Z" fill="#6d6d88"/>
<path d="M368,222 L404,222 L404,248 L368,248 Z" fill="url(#adv3Merlon)"/>
<path d="M368,222 L380,222 L380,248 L368,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M365,218 L407,218 L407,223 L365,223 Z" fill="#6d6d88"/>
<path d="M428,222 L464,222 L464,248 L428,248 Z" fill="url(#adv3Merlon)"/>
<path d="M428,222 L440,222 L440,248 L428,248 Z" fill="#7d7d99" opacity="0.28"/>
<path d="M425,218 L467,218 L467,223 L425,223 Z" fill="#6d6d88"/>
<!-- the walk behind the merlons, and its coping, drawn last so it is nearest -->
<path d="M0,246 L500,246 L500,260 L0,260 Z" fill="#3f3f54"/>
<path d="M0,244 L500,244 L500,249 L0,249 Z" fill="#54546e"/>
<path d="M0,244 L500,244 L500,245.6 L0,245.6 Z" fill="#7d7d99" opacity="0.4"/>
<!-- the joints between the walk's flags -->
<path d="M56,249 v11 M152,249 v11 M248,249 v11 M344,249 v11 M440,249 v11"
      stroke="#2a2a3c" stroke-width="1" opacity="0.55"/>

<!-- rune glimmer worked into the merlon faces, as before -->
<text x="26" y="240" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.4">&#x2727;</text>
<text x="206" y="240" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.35">&#x2726;</text>
<text x="326" y="240" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.4">&#x2738;</text>
<text x="446" y="240" text-anchor="middle" fill="#ffd700" font-size="6" opacity="0.35">&#x2727;</text>

<!-- wind, drifting across the gap between us and the peak -->
<path d="M46,102 q22,-4 46,-1 q-20,5 -46,1 Z" fill="#8a7aaa" opacity="0.1"/>
<path d="M196,86 q26,-4 54,-1 q-24,5 -54,1 Z" fill="#8a7aaa" opacity="0.08"/>
<path d="M118,132 q18,-3 38,-1 q-17,4 -38,1 Z" fill="#8a7aaa" opacity="0.07"/>
</svg>`;

// Scene 4: Observatory on Mystic Peak, mountain path
STORY_SCENES['adventure_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="adv4Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="domeLight4" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="obsGlint4" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <filter id="advGlow4"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#adv4Sky)"/>
<!-- ====================================================================
     MYSTIC PEAK, CLOSE. Every idea survives: the background range, the peak,
     its snow cap, the winding path with its golden dashes, the observatory
     with its lit windows and glinting dome, the rocky foreground, the mist.

     What changed: the peak was two nested triangles, the observatory was a
     rect with a bump on it, and the path was a dashed stroke floating over
     the flank. A ROCK IS NOT A TRIANGLE either: this one is built from ridge
     lines, with the light consistently on the west face, gullies cutting the
     east, and outcrops breaking the profile. The path is a CUT LEDGE, so it
     has a tread, a shadowed inner bank and a lit outer edge.
     ==================================================================== -->

<!-- Stars -->
<circle cx="50" cy="25" r="1" fill="#f4f4ff" opacity="0.45"/>
<circle cx="150" cy="18" r="1.2" fill="#f4f4ff" opacity="0.5"/>
<circle cx="280" cy="30" r="0.8" fill="#f4f4ff" opacity="0.35"/>
<circle cx="420" cy="22" r="1" fill="#f4f4ff" opacity="0.4"/>
<circle cx="470" cy="50" r="0.9" fill="#f4f4ff" opacity="0.3"/>

<!-- ====================================================================
     THE BACKGROUND RANGE, washed toward the sky so it stays behind.
     ==================================================================== -->
<path d="M0,190 L34,146 L62,168 L96,122 L128,158 L160,132 L196,164 L228,138
         L262,166 L296,130 L330,160 L366,126 L400,156 L432,134 L466,162 L500,140
         L500,206 L0,206 Z" fill="#332545" opacity="0.55"/>
<path d="M0,116 L500,116 L500,206 L0,206 Z" fill="#2a1a4a" opacity="0.3"/>

<!-- ====================================================================
     THE PEAK. Ridge lines, not a triangle. The summit sits off centre, the
     west flank catches the light, the east flank is cut by gullies, and rock
     steps break the run down to the scree.
     ==================================================================== -->
<path d="M84,224 L124,196 L156,168 L186,140 L214,110 L238,84 L252,66 L262,80
         L280,108 L300,138 L322,164 L348,190 L380,212 L404,224 Z"
      fill="#453569" opacity="0.9"/>
<!-- the lit west flank, a band along the ridge rather than the whole face -->
<path d="M186,140 L214,110 L238,84 L252,66 L256,80 L232,102 L206,134 L186,158 Z"
      fill="#57427a" opacity="0.5"/>
<path d="M84,224 L124,196 L156,168 L166,178 L136,204 L102,226 Z" fill="#503d72" opacity="0.35"/>
<!-- gullies cut down the shadowed east flank -->
<path d="M258,74 L272,102 L266,132 L280,158 L272,186 L262,158 L268,128 L254,100 Z"
      fill="#382a58" opacity="0.55"/>
<path d="M292,132 L308,158 L300,182 L288,158 Z" fill="#362954" opacity="0.45"/>
<!-- rock steps and outcrops that break the profile -->
<path d="M196,132 L228,124 L242,136 L232,148 L198,148 Z" fill="#4c3b74" opacity="0.4"/>
<path d="M148,178 L182,170 L194,182 L182,194 L150,192 Z" fill="#4a3971" opacity="0.35"/>
<path d="M300,164 L330,158 L344,172 L330,184 L302,180 Z" fill="#3f3064" opacity="0.4"/>
<!-- snow held in the summit hollows, which is where snow actually sits -->
<path d="M238,84 L252,66 L262,80 L256,86 L248,80 L242,90 Z" fill="#c6c6da" opacity="0.25"/>
<path d="M228,98 L240,92 L246,100 L236,106 Z" fill="#c6c6da" opacity="0.15"/>
<!-- scree apron at the foot -->
<path d="M92,222 Q180,208 250,212 Q330,208 396,222 L400,230 L88,230 Z" fill="#3a2c5a" opacity="0.6"/>

<!-- ====================================================================
     THE PATH: a ledge cut into the flank, so it has a tread you can walk on,
     a shadowed bank on the uphill side and a lit lip on the downhill side.
     The golden dashes the scene already had ride along the tread.
     ==================================================================== -->
<!-- The path SWITCHBACKS. A single diagonal ramp reads as a plank leaning on
     the hill; real mountain paths zigzag, and each leg is a narrow ledge whose
     outer lip catches light while the bank above it stays dark. -->
<!-- leg 1: from the foreground up and to the right -->
<!-- leg 2: doubling back left across the flank -->
<path d="M214,198 Q196,190 172,184 Q150,178 134,172" fill="none" stroke="#33265a" stroke-width="4.4" opacity="0.5" stroke-linecap="round"/>
<path d="M214,199 Q196,191 172,185 Q150,179 134,173" fill="none" stroke="#8a7a9a" stroke-width="2.1" opacity="0.38" stroke-linecap="round"/>
<path d="M214,200.2 Q196,192.2 172,186.2 Q150,180.2 134,174.2" fill="none" stroke="#a897bb" stroke-width="0.8" opacity="0.25" stroke-linecap="round"/>
<!-- leg 3: back to the right, higher and shorter -->
<path d="M134,172 Q156,164 180,158 Q204,152 222,146" fill="none" stroke="#33265a" stroke-width="3.8" opacity="0.48" stroke-linecap="round"/>
<path d="M134,173 Q156,165 180,159 Q204,153 222,147" fill="none" stroke="#8a7a9a" stroke-width="1.8" opacity="0.34" stroke-linecap="round"/>
<path d="M134,174 Q156,166 180,160 Q204,154 222,148" fill="none" stroke="#a897bb" stroke-width="0.7" opacity="0.22" stroke-linecap="round"/>
<!-- leg 4: the last pull up to the footing, shortest of all -->
<path d="M222,146 Q214,132 218,118 Q222,106 230,97" fill="none" stroke="#33265a" stroke-width="3.2" opacity="0.45" stroke-linecap="round"/>
<path d="M223,146 Q215,132 219,118 Q223,106 231,97" fill="none" stroke="#8a7a9a" stroke-width="1.5" opacity="0.32" stroke-linecap="round"/>
<path d="M224,146 Q216,132 220,118 Q224,106 232,97" fill="none" stroke="#a897bb" stroke-width="0.6" opacity="0.2" stroke-linecap="round"/>
<!-- golden way-markers set along the path, brightest near the top -->
<path d="M148,222 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M196,203 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.15"/>
<path d="M160,180 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.14"/>
<path d="M198,153 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M219,124 q4,-3 7,-1 q-4,3 -7,1 Z" fill="#ffd700" opacity="0.18"/>

<!-- ====================================================================
     THE OBSERVATORY, the same building as adventure_3 seen from much closer:
     a footing on the rock, a drum with a door and lit windows, a true half
     dome, an open shutter slit and a finial.
     ==================================================================== -->
<!-- footing cut into the summit -->
<path d="M222,90 L282,90 L286,97 L218,97 Z" fill="#55557a" opacity="0.8"/>
<path d="M222,90 L282,90 L282,92 L222,92 Z" fill="#7a7a9e" opacity="0.4"/>
<!-- the drum, lit on its west side -->
<path d="M228,68 L276,68 L278,90 L226,90 Z" fill="#6f6f92" opacity="0.9"/>
<path d="M228,68 L250,68 L250,90 L226,90 Z" fill="#8a8ab0" opacity="0.4"/>
<!-- a string course around the drum, so it has a top and a bottom -->
<path d="M226,72 L278,72 L278,75 L226,75 Z" fill="#4e4e70" opacity="0.6"/>
<!-- the door, and the light spilling out of it onto the footing -->
<path d="M244,78 L258,78 L258,90 L244,90 Z" fill="#241a38" opacity="0.75"/>
<path d="M246,80 Q251,77 256,80 L256,90 L246,90 Z" fill="#ffd700" opacity="0.3"/>
<path d="M240,90 Q252,86 264,90 Q252,96 240,90 Z" fill="#ffd700" opacity="0.14"/>
<!-- lit windows either side of the door -->
<path d="M232,78 Q236,76 240,78 L240,85 Q236,87 232,85 Z" fill="#ffd700" opacity="0.35"/>
<path d="M262,78 Q266,76 270,78 L270,85 Q266,87 262,85 Z" fill="#ffd700" opacity="0.3"/>
<!-- the dome: a true half round sitting on the drum -->
<path d="M224,68 Q224,42 252,42 Q280,42 280,68 Z" fill="#8a8aaa" opacity="0.9"/>
<path d="M224,68 Q224,42 252,42 L252,68 Z" fill="#a4a4c6" opacity="0.35"/>
<!-- ribs on the dome, which is how a real one is built -->
<path d="M238,45 Q234,56 233,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<path d="M266,45 Q270,56 271,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<!-- the shutter, open, with the dark of the chamber behind it -->
<path d="M248,42 L258,43 L258,68 L248,68 Z" fill="#241a38" opacity="0.7"/>
<path d="M248,42 L252,42 L252,68 L248,68 Z" fill="#3a2a52" opacity="0.5"/>
<!-- finial -->
<path d="M250.6,35 L253.4,35 L253.4,42 L250.6,42 Z" fill="#a4a4c6" opacity="0.6"/>
<path d="M252,31 a2.2,2.2 0 1,1 0.1,0 Z" fill="#b4b4d4" opacity="0.5"/>
<!-- Dome glint -->
<circle cx="252" cy="52" r="14" fill="url(#obsGlint4)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="240" cy="50" r="2" fill="#f0f0ff" opacity="0.5" filter="url(#advGlow4)">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- the warm wash the lit windows throw onto the summit rock -->
<circle cx="252" cy="84" r="26" fill="url(#domeLight4)" opacity="0.4"/>

<!-- ====================================================================
     THE FOREGROUND we are standing on: broken rock, not a band of colour.
     ==================================================================== -->
<path d="M0,224 Q120,216 250,220 Q380,224 500,216 L500,260 L0,260 Z" fill="#3a2a4a" opacity="0.75"/>
<path d="M0,224 Q120,216 250,220 Q380,224 500,216 L500,220 Q380,228 250,224 Q120,220 0,228 Z"
      fill="#54426e" opacity="0.45"/>
<path d="M124,260 Q124,244 104,232 Q140,224 172,214 Q196,206 214,198" fill="none" stroke="#33265a" stroke-width="5" opacity="0.55" stroke-linecap="round"/>
<path d="M124,261 Q124,245 104,233 Q140,225 172,215 Q196,207 214,199" fill="none" stroke="#8a7a9a" stroke-width="2.4" opacity="0.42" stroke-linecap="round"/>
<path d="M124,262.4 Q124,246.4 104,234.4 Q140,226.4 172,216.4 Q196,208.4 214,200.4" fill="none" stroke="#a897bb" stroke-width="0.9" opacity="0.28" stroke-linecap="round"/>

<!-- boulders: flat planes meeting at angles, each with a lit top and dark side -->
<path d="M56,244 L76,232 L98,238 L104,250 L82,256 L58,252 Z" fill="#4e4e66" opacity="0.5"/>
<path d="M56,244 L76,232 L98,238 L82,244 L60,248 Z" fill="#66668a" opacity="0.35"/>
<path d="M162,252 L178,242 L194,248 L196,258 L166,258 Z" fill="#4a4a62" opacity="0.42"/>
<path d="M162,252 L178,242 L194,248 L178,252 Z" fill="#63638a" opacity="0.3"/>
<path d="M370,246 L390,236 L412,242 L416,254 L392,258 L372,254 Z" fill="#4e4e66" opacity="0.45"/>
<path d="M370,246 L390,236 L412,242 L392,248 L374,250 Z" fill="#66668a" opacity="0.3"/>
<!-- loose stones scattered between them -->
<path d="M124,254 q6,-5 12,-1 q-6,5 -12,1 Z M238,250 q5,-4 10,-1 q-5,4 -10,1 Z
         M310,256 q7,-5 14,-1 q-7,5 -14,1 Z M446,248 q6,-4 11,-1 q-6,4 -11,1 Z"
      fill="#5a5a72" opacity="0.35"/>

<!-- Purple mist banking against the mountain foot -->
<path d="M120,214 Q200,206 260,210 Q330,206 396,214 Q330,222 260,218 Q200,222 120,214 Z"
      fill="#6a5a8a" opacity="0.1"/>
<path d="M90,220 Q150,214 210,218 Q158,226 90,220 Z" fill="#8a7aaa" opacity="0.07"/>
</svg>`;

// Scene 5: Winding mountain trail, observatory dome glints in distance
STORY_SCENES['adventure_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs>
  <linearGradient id="adv5Sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#5a4a7a"/>
  </linearGradient>
  <radialGradient id="domeGlint5" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.6"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="trailGold" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.05"/><stop offset="50%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.05"/>
  </linearGradient>
  <filter id="advGlow5"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>

  <linearGradient id="adv4Sky_adventure_5" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1030"/><stop offset="40%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#4a3a6a"/>
  </linearGradient>
  <radialGradient id="domeLight4_adventure_5" cx="50%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="obsGlint4_adventure_5" cx="50%" cy="40%" r="50%">
    <stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/>
  </radialGradient>
  <filter id="advGlow4_adventure_5"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs><rect width="500" height="260" fill="#211438"/><g transform="translate(90 5) scale(0.82)"><!-- ====================================================================
     THE PEAK. Ridge lines, not a triangle. The summit sits off centre, the
     west flank catches the light, the east flank is cut by gullies, and rock
     steps break the run down to the scree.
     ==================================================================== -->
<path d="M84,224 L124,196 L156,168 L186,140 L214,110 L238,84 L252,66 L262,80
         L280,108 L300,138 L322,164 L348,190 L380,212 L404,224 Z"
      fill="#453569" opacity="0.9"/>
<!-- the lit west flank, a band along the ridge rather than the whole face -->
<path d="M186,140 L214,110 L238,84 L252,66 L256,80 L232,102 L206,134 L186,158 Z"
      fill="#57427a" opacity="0.5"/>
<path d="M84,224 L124,196 L156,168 L166,178 L136,204 L102,226 Z" fill="#503d72" opacity="0.35"/>
<!-- gullies cut down the shadowed east flank -->
<path d="M258,74 L272,102 L266,132 L280,158 L272,186 L262,158 L268,128 L254,100 Z"
      fill="#382a58" opacity="0.55"/>
<path d="M292,132 L308,158 L300,182 L288,158 Z" fill="#362954" opacity="0.45"/>
<!-- rock steps and outcrops that break the profile -->
<path d="M196,132 L228,124 L242,136 L232,148 L198,148 Z" fill="#4c3b74" opacity="0.4"/>
<path d="M148,178 L182,170 L194,182 L182,194 L150,192 Z" fill="#4a3971" opacity="0.35"/>
<path d="M300,164 L330,158 L344,172 L330,184 L302,180 Z" fill="#3f3064" opacity="0.4"/>
<!-- snow held in the summit hollows, which is where snow actually sits -->
<path d="M238,84 L252,66 L262,80 L256,86 L248,80 L242,90 Z" fill="#c6c6da" opacity="0.25"/>
<path d="M228,98 L240,92 L246,100 L236,106 Z" fill="#c6c6da" opacity="0.15"/>
<!-- scree apron at the foot -->
<path d="M92,222 Q180,208 250,212 Q330,208 396,222 L400,230 L88,230 Z" fill="#3a2c5a" opacity="0.6"/>

<!-- ====================================================================
     THE PATH: a ledge cut into the flank, so it has a tread you can walk on,
     a shadowed bank on the uphill side and a lit lip on the downhill side.
     The golden dashes the scene already had ride along the tread.
     ==================================================================== -->
<!-- The path SWITCHBACKS. A single diagonal ramp reads as a plank leaning on
     the hill; real mountain paths zigzag, and each leg is a narrow ledge whose
     outer lip catches light while the bank above it stays dark. -->
<!-- leg 1: from the foreground up and to the right -->
<!-- leg 2: doubling back left across the flank -->
<path d="M214,198 Q196,190 172,184 Q150,178 134,172" fill="none" stroke="#33265a" stroke-width="4.4" opacity="0.5" stroke-linecap="round"/>
<path d="M214,199 Q196,191 172,185 Q150,179 134,173" fill="none" stroke="#8a7a9a" stroke-width="2.1" opacity="0.38" stroke-linecap="round"/>
<path d="M214,200.2 Q196,192.2 172,186.2 Q150,180.2 134,174.2" fill="none" stroke="#a897bb" stroke-width="0.8" opacity="0.25" stroke-linecap="round"/>
<!-- leg 3: back to the right, higher and shorter -->
<path d="M134,172 Q156,164 180,158 Q204,152 222,146" fill="none" stroke="#33265a" stroke-width="3.8" opacity="0.48" stroke-linecap="round"/>
<path d="M134,173 Q156,165 180,159 Q204,153 222,147" fill="none" stroke="#8a7a9a" stroke-width="1.8" opacity="0.34" stroke-linecap="round"/>
<path d="M134,174 Q156,166 180,160 Q204,154 222,148" fill="none" stroke="#a897bb" stroke-width="0.7" opacity="0.22" stroke-linecap="round"/>
<!-- leg 4: the last pull up to the footing, shortest of all -->
<path d="M222,146 Q214,132 218,118 Q222,106 230,97" fill="none" stroke="#33265a" stroke-width="3.2" opacity="0.45" stroke-linecap="round"/>
<path d="M223,146 Q215,132 219,118 Q223,106 231,97" fill="none" stroke="#8a7a9a" stroke-width="1.5" opacity="0.32" stroke-linecap="round"/>
<path d="M224,146 Q216,132 220,118 Q224,106 232,97" fill="none" stroke="#a897bb" stroke-width="0.6" opacity="0.2" stroke-linecap="round"/>
<!-- golden way-markers set along the path, brightest near the top -->
<path d="M148,222 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M196,203 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.15"/>
<path d="M160,180 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.14"/>
<path d="M198,153 q4,-3 8,-1 q-4,3 -8,1 Z" fill="#ffd700" opacity="0.16"/>
<path d="M219,124 q4,-3 7,-1 q-4,3 -7,1 Z" fill="#ffd700" opacity="0.18"/>

<!-- ====================================================================
     THE OBSERVATORY, the same building as adventure_3 seen from much closer:
     a footing on the rock, a drum with a door and lit windows, a true half
     dome, an open shutter slit and a finial.
     ==================================================================== -->
<!-- footing cut into the summit -->
<path d="M222,90 L282,90 L286,97 L218,97 Z" fill="#55557a" opacity="0.8"/>
<path d="M222,90 L282,90 L282,92 L222,92 Z" fill="#7a7a9e" opacity="0.4"/>
<!-- the drum, lit on its west side -->
<path d="M228,68 L276,68 L278,90 L226,90 Z" fill="#6f6f92" opacity="0.9"/>
<path d="M228,68 L250,68 L250,90 L226,90 Z" fill="#8a8ab0" opacity="0.4"/>
<!-- a string course around the drum, so it has a top and a bottom -->
<path d="M226,72 L278,72 L278,75 L226,75 Z" fill="#4e4e70" opacity="0.6"/>
<!-- the door, and the light spilling out of it onto the footing -->
<path d="M244,78 L258,78 L258,90 L244,90 Z" fill="#241a38" opacity="0.75"/>
<path d="M246,80 Q251,77 256,80 L256,90 L246,90 Z" fill="#ffd700" opacity="0.3"/>
<path d="M240,90 Q252,86 264,90 Q252,96 240,90 Z" fill="#ffd700" opacity="0.14"/>
<!-- lit windows either side of the door -->
<path d="M232,78 Q236,76 240,78 L240,85 Q236,87 232,85 Z" fill="#ffd700" opacity="0.35"/>
<path d="M262,78 Q266,76 270,78 L270,85 Q266,87 262,85 Z" fill="#ffd700" opacity="0.3"/>
<!-- the dome: a true half round sitting on the drum -->
<path d="M224,68 Q224,42 252,42 Q280,42 280,68 Z" fill="#8a8aaa" opacity="0.9"/>
<path d="M224,68 Q224,42 252,42 L252,68 Z" fill="#a4a4c6" opacity="0.35"/>
<!-- ribs on the dome, which is how a real one is built -->
<path d="M238,45 Q234,56 233,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<path d="M266,45 Q270,56 271,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>
<!-- the shutter, open, with the dark of the chamber behind it -->
<path d="M248,42 L258,43 L258,68 L248,68 Z" fill="#241a38" opacity="0.7"/>
<path d="M248,42 L252,42 L252,68 L248,68 Z" fill="#3a2a52" opacity="0.5"/>
<!-- finial -->
<path d="M250.6,35 L253.4,35 L253.4,42 L250.6,42 Z" fill="#a4a4c6" opacity="0.6"/>
<path d="M252,31 a2.2,2.2 0 1,1 0.1,0 Z" fill="#b4b4d4" opacity="0.5"/>
<!-- Dome glint -->
<circle cx="252" cy="52" r="14" fill="url(#obsGlint4_adventure_5)" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<circle cx="240" cy="50" r="2" fill="#f0f0ff" opacity="0.5" filter="url(#advGlow4_adventure_5)">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite"
           calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<!-- the warm wash the lit windows throw onto the summit rock -->
<circle cx="252" cy="84" r="26" fill="url(#domeLight4_adventure_5)" opacity="0.4"/>

</g><!-- the flank below the trail, deeper in shadow -->
<path d="M0,214 Q120,206 250,214 Q380,222 500,230 L500,260 L0,260 Z" fill="#3a2c58" opacity="0.5"/>

<!-- ====================================================================
     THE TRAIL: a ledge, so a shadowed bank above, a tread, and a lit lip on
     the downhill edge. The golden light the scene already had rides the tread.
     ==================================================================== -->
<path d="M0,196 Q52,182 102,187 Q160,192 202,182 Q252,169 302,175 Q362,182 402,192
         Q452,202 500,207" fill="none" stroke="#2f2352" stroke-width="11" opacity="0.6" stroke-linecap="round"/>
<path d="M0,198 Q52,184 102,189 Q160,194 202,184 Q252,171 302,177 Q362,184 402,194
         Q452,204 500,209" fill="none" stroke="#7a6a8a" stroke-width="6.5" opacity="0.5" stroke-linecap="round"/>
<path d="M0,198 Q52,184 102,189 Q160,194 202,184 Q252,171 302,177 Q362,184 402,194
         Q452,204 500,209" fill="none" stroke="url(#trailGold)" stroke-width="5" opacity="0.55" stroke-linecap="round"/>
<path d="M0,201 Q52,187 102,192 Q160,197 202,187 Q252,174 302,180 Q362,187 402,197
         Q452,207 500,212" fill="none" stroke="#a897bb" stroke-width="1.4" opacity="0.28" stroke-linecap="round"/>
<!-- wheel ruts worn into the tread -->
<path d="M40,192 q28,-5 58,-3 M148,190 q30,-4 56,-8 M262,175 q30,-2 58,3 M368,187 q30,4 56,10"
      fill="none" stroke="#5e5070" stroke-width="0.9" opacity="0.35" stroke-linecap="round"/>

<!-- stones set along the trail edge, faceted rather than ellipses -->
<path d="M52,196 L62,190 L72,195 L68,202 L54,201 Z" fill="#6a6a7a" opacity="0.4"/>
<path d="M52,196 L62,190 L72,195 L60,197 Z" fill="#82829a" opacity="0.28"/>
<path d="M144,194 L152,189 L160,194 L156,199 L146,199 Z" fill="#6a6a7a" opacity="0.32"/>
<path d="M264,180 L273,175 L282,180 L277,186 L266,185 Z" fill="#6a6a7a" opacity="0.38"/>
<path d="M264,180 L273,175 L282,180 L271,182 Z" fill="#82829a" opacity="0.25"/>
<path d="M372,196 L382,190 L392,196 L387,203 L374,202 Z" fill="#6a6a7a" opacity="0.34"/>

<!-- ====================================================================
     OUTCROPS beside the trail: flat planes meeting at angles, with the light
     on the same side as everywhere else in this scene.
     ==================================================================== -->
<path d="M22,182 L38,158 L52,170 L60,186 L44,192 L24,190 Z" fill="#4a3a66" opacity="0.6"/>
<path d="M22,182 L38,158 L52,170 L36,176 L24,184 Z" fill="#5e4a80" opacity="0.4"/>
<path d="M38,158 L46,168 L40,178 L32,170 Z" fill="#3a2c56" opacity="0.35"/>
<path d="M432,196 L448,172 L464,184 L472,200 L454,206 L434,204 Z" fill="#493965" opacity="0.55"/>
<path d="M432,196 L448,172 L464,184 L448,190 L434,198 Z" fill="#5c497e" opacity="0.35"/>
<path d="M448,172 L456,182 L450,192 L442,184 Z" fill="#392b55" opacity="0.32"/>

<!-- ====================================================================
     SCRUB. A frond is a FILLED SHAPE WITH A SERRATED EDGE; a thin stroke
     vanishes at this scale, which is what the old version did.
     ==================================================================== -->
<path d="M108,192 q2,-9 6,-12 q1,6 -1,9 q4,-8 9,-9 q-1,6 -4,9 q5,-4 9,-3 q-4,5 -9,6 Z"
      fill="#3a5a4a" opacity="0.4"/>
<path d="M110,192 q3,-6 7,-8" fill="none" stroke="#2c4a3c" stroke-width="0.8" opacity="0.4"/>
<path d="M336,184 q2,-8 6,-11 q1,5 -1,8 q4,-7 8,-8 q-1,5 -4,8 q4,-3 8,-2 q-4,5 -8,5 Z"
      fill="#3a5a4a" opacity="0.35"/>
<path d="M222,182 q2,-7 5,-9 q1,5 -1,7 q4,-6 7,-7 q-1,5 -3,7 q4,-3 7,-2 q-4,4 -7,4 Z"
      fill="#3a5a4a" opacity="0.3"/>
<path d="M414,196 q2,-7 6,-10 q1,5 -1,8 q4,-6 8,-7 q-1,5 -4,7 q4,-3 7,-2 q-4,5 -8,5 Z"
      fill="#3a5a4a" opacity="0.28"/>

<!-- Golden motes drifting up off the trail. Faded at both ends so the loop
     has no seam, and no two share a duration. -->
<circle cx="150" cy="188" r="2" fill="#ffd700" opacity="0" filter="url(#advGlow5)">
  <animate attributeName="cy" values="188;158" dur="5.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
  <animate attributeName="cx" values="150;144" dur="5.2s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0;0.55;0" dur="5.2s" repeatCount="indefinite" keyTimes="0;0.35;1"/>
</circle>
<circle cx="252" cy="176" r="1.5" fill="#ffd700" opacity="0" filter="url(#advGlow5)">
  <animate attributeName="cy" values="176;144" dur="6.4s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
  <animate attributeName="cx" values="252;259" dur="6.4s" repeatCount="indefinite" begin="1.1s"/>
  <animate attributeName="opacity" values="0;0.48;0" dur="6.4s" repeatCount="indefinite" begin="1.1s" keyTimes="0;0.35;1"/>
</circle>
<circle cx="348" cy="186" r="2" fill="#ffd700" opacity="0" filter="url(#advGlow5)">
  <animate attributeName="cy" values="186;152" dur="4.6s" repeatCount="indefinite" begin="2.3s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
  <animate attributeName="cx" values="348;342" dur="4.6s" repeatCount="indefinite" begin="2.3s"/>
  <animate attributeName="opacity" values="0;0.52;0" dur="4.6s" repeatCount="indefinite" begin="2.3s" keyTimes="0;0.35;1"/>
</circle>
<circle cx="446" cy="204" r="1.5" fill="#ffd700" opacity="0" filter="url(#advGlow5)">
  <animate attributeName="cy" values="204;170" dur="7.1s" repeatCount="indefinite" begin="3.4s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>
  <animate attributeName="cx" values="446;453" dur="7.1s" repeatCount="indefinite" begin="3.4s"/>
  <animate attributeName="opacity" values="0;0.44;0" dur="7.1s" repeatCount="indefinite" begin="3.4s" keyTimes="0;0.35;1"/>
</circle>

<!-- the ground right at our feet, darkest of all so the eye starts here -->
<path d="M0,242 Q130,236 260,242 Q380,248 500,242 L500,260 L0,260 Z" fill="#2f2244" opacity="0.6"/>
</svg>`;
