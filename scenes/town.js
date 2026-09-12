// Town Square story scenes — "Town Square"
// Keys: town_0 through town_5
// DRAFT — for review only

// Scene 0: Town Square opens up, grand fountain, notice boards with coded messages
STORY_SCENES['town_0'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="fountainMist" cx="50%" cy="60%" r="30%">
    <stop offset="0%" stop-color="#aaccee" stop-opacity="0.15"/><stop offset="100%" stop-color="#aaccee" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="townSoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky)"/>
<!-- ====================================================================
     THE SQUARE. The buildings were flat rects with square window holes, three
     of them, in two greys. A cartoon town reads as a town because of its
     ROOFLINE: pitched, stepped and hipped roofs at varied heights. A flat top
     reads as a block however many windows you put in it.

     Drawn in place rather than generated, so this square is this square.
     ==================================================================== -->

<!-- far row: pale, low, no detail worth reading at that distance -->
<path d="M0,182 L0,96 L26,80 L52,96 L52,182 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M48,182 L48,110 L74,92 L100,110 L100,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M96,182 L96,84 L118,70 L140,84 L140,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M300,182 L300,92 L326,74 L352,92 L352,182 Z" fill="#8a9db3" opacity="0.38"/>
<path d="M348,182 L348,106 L372,88 L396,106 L396,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M392,182 L392,88 L418,72 L444,88 L444,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M440,182 L440,100 L470,82 L500,100 L500,182 Z" fill="#7a8da3" opacity="0.4"/>

<!-- mid row: the town proper, where the rooflines do the work -->
<!-- a stepped gable, the most old-town roofline there is -->
<path d="M14,182 L14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,108 L94,108 L94,118 L114,118 L114,182 Z" fill="#6f8298" opacity="0.85"/>
<path d="M14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,182 L14,182 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M36,130 h14 v16 h-14 Z M60,130 h14 v16 h-14 Z M84,130 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.42"/>
<path d="M36,158 h14 v16 h-14 Z M84,158 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.3"/>
<path d="M60,158 h14 v16 h-14 Z" fill="#5a6276" opacity="0.5"/>

<!-- a clock tower: the one vertical the square needs -->
<path d="M122,182 L122,74 L166,74 L166,182 Z" fill="#67798f"/>
<path d="M118,74 L144,50 L170,74 Z" fill="#56687e"/>
<path d="M144,50 L170,74 L160,74 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M144,50 L144,40" stroke="#ffd700" stroke-width="1.6" opacity="0.85"/>
<path d="M144,40 L152,44 L144,48 Z" fill="#ffd700" opacity="0.8"/>
<circle cx="144" cy="94" r="12" fill="#ffeaa7" opacity="0.55"/>
<circle cx="144" cy="94" r="12" fill="none" stroke="#5a6276" stroke-width="1.6"/>
<path d="M144,94 L144,87" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round"/>
<path d="M144,94 L149,97" stroke="#3a4250" stroke-width="1.2" stroke-linecap="round"/>
<path d="M128,120 h14 v18 h-14 Z M148,120 h14 v18 h-14 Z" fill="#ffeaa7" opacity="0.36"/>
<path d="M128,150 h34 v22 h-34 Z" fill="#4a5468" opacity="0.6"/>
<path d="M132,152 h26 v18 h-26 Z" fill="#ffeaa7" opacity="0.2"/>

<!-- a plain gabled house between the tower and the fountain -->
<path d="M172,182 L172,116 L204,116 L204,182 Z" fill="#6a7286"/>
<path d="M166,116 L188,96 L210,116 Z" fill="#5a6276"/>
<path d="M188,96 L210,116 L202,116 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M178,128 h9 v12 h-9 Z M191,128 h9 v12 h-9 Z" fill="#ffeaa7" opacity="0.4"/>
<path d="M180,152 h18 v30 h-18 Z" fill="#4a3a20"/>
<path d="M182,154 h14 v26 h-14 Z" fill="#5a4830" opacity="0.7"/>
<circle cx="194" cy="168" r="1.6" fill="#ffd700" opacity="0.7"/>
<path d="M196,110 h7 v8 h-7 Z" fill="#5a6276"/>

<!-- and one on the far side, hipped -->
<path d="M296,182 L296,120 L340,120 L340,182 Z" fill="#6a7286"/>
<path d="M290,120 L306,102 L330,102 L346,120 Z" fill="#5a6276"/>
<path d="M306,102 L330,102 L346,120 L336,120 Z" fill="#8a9db3" opacity="0.35"/>
<path d="M302,132 h11 v14 h-11 Z M322,132 h11 v14 h-11 Z" fill="#ffeaa7" opacity="0.38"/>
<path d="M310,156 h16 v26 h-16 Z" fill="#4a3a20"/>
<circle cx="322" cy="170" r="1.5" fill="#ffd700" opacity="0.65"/>

<!-- ====================================================================
     TWO SHOPFRONTS flanking the square. A scalloped awning is the single most
     "shop" mark there is, and it gives the square somewhere to BE rather than
     a backdrop to stand in front of.
     ==================================================================== -->
<path d="M6,182 L6,104 L92,104 L92,182 Z" fill="#63758a" opacity="0"/>
<path d="M400,182 L400,112 L470,112 L470,182 Z" fill="#647689"/>
<path d="M396,112 L435,94 L474,112 Z" fill="#54667a"/>
<path d="M398,142 q10,9 20,0 q10,9 20,0 q10,9 20,0 q10,9 18,0 L476,132 L398,132 Z" fill="#8a4a3a" opacity="0.9"/>
<path d="M398,132 L476,132" stroke="#9aadc3" stroke-width="1.2" opacity="0.4"/>
<path d="M406,152 h30 v20 h-30 Z" fill="#ffeaa7" opacity="0.34"/>
<path d="M444,152 h20 v30 h-20 Z" fill="#4a3a20"/>
<circle cx="448" cy="168" r="1.5" fill="#ffd700" opacity="0.7"/>
<path d="M478,116 h12 M484,116 v10" stroke="#4a3a20" stroke-width="1.4"/>
<path d="M476,126 h18 v12 h-18 Z" fill="#6b4a20"/>
<path d="M480,130 h10 v2 h-10 Z M480,134 h6 v2 h-6 Z" fill="#ffd700" opacity="0.55"/>

<!-- ====================================================================
     COBBLES. The ground was one brown rectangle with six faint ellipses on it.
     Stones laid in courses that widen as they come forward is what makes a
     square read as paved rather than as bare earth.
     ==================================================================== -->
<path d="M0,182 L500,182 L500,260 L0,260 Z" fill="#6a5a48"/>
<!-- ================================================================
     THE PAVING, third pass, and the fault was never the joints.

     Measured: the stones were running 2.9:1 to 3.3:1 wide-to-tall. That is a
     BRICK. A cobble is roughly square in plan and foreshortens to about 2:1 at
     a shallow viewing angle, so the square kept reading as a wall however the
     course lines were tuned. Halving the widths fixed what two passes of joint
     tuning could not.

     Setts also have their corners knocked off, and no continuous joint runs
     across a square: the stones themselves define the courses.
     ================================================================ -->
<path d="M-8.5,187.0 h13.1 q1,0 1,1 v6.4 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M7.4,187.0 h12.5 q1,0 1,1 v6.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M22.6,185.6 h19.2 q1,0 1,1 v6.4 q0,1 -1,1 h-19.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M44.7,186.3 h13.8 q1,0 1,1 v6.4 q0,1 -1,1 h-13.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M61.3,185.6 h10.5 q1,0 1,1 v6.4 q0,1 -1,1 h-10.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M74.6,186.3 h16.3 q1,0 1,1 v6.4 q0,1 -1,1 h-16.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M93.7,185.6 h10.3 q1,0 1,1 v6.4 q0,1 -1,1 h-10.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M106.9,187.0 h12.9 q1,0 1,1 v6.4 q0,1 -1,1 h-12.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M122.6,186.3 h15.2 q1,0 1,1 v6.4 q0,1 -1,1 h-15.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M140.5,186.3 h14.2 q1,0 1,1 v6.4 q0,1 -1,1 h-14.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M157.5,185.6 h11.8 q1,0 1,1 v6.4 q0,1 -1,1 h-11.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M172.0,187.0 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M191.4,187.0 h15.0 q1,0 1,1 v6.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M209.1,186.3 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M228.5,186.3 h12.4 q1,0 1,1 v6.4 q0,1 -1,1 h-12.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M243.7,185.6 h18.1 q1,0 1,1 v6.4 q0,1 -1,1 h-18.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M264.5,186.3 h14.9 q1,0 1,1 v6.4 q0,1 -1,1 h-14.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M282.2,187.0 h17.4 q1,0 1,1 v6.4 q0,1 -1,1 h-17.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M302.4,185.6 h16.9 q1,0 1,1 v6.4 q0,1 -1,1 h-16.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M322.1,187.0 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M338.5,186.3 h18.4 q1,0 1,1 v6.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M359.7,186.3 h17.1 q1,0 1,1 v6.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M379.7,186.3 h18.5 q1,0 1,1 v6.4 q0,1 -1,1 h-18.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M401.0,186.3 h11.0 q1,0 1,1 v6.4 q0,1 -1,1 h-11.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M414.8,187.0 h17.9 q1,0 1,1 v6.4 q0,1 -1,1 h-17.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M435.5,185.6 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M451.9,185.6 h16.0 q1,0 1,1 v6.4 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M470.7,187.0 h14.4 q1,0 1,1 v6.4 q0,1 -1,1 h-14.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M487.9,186.3 h16.4 q1,0 1,1 v6.4 q0,1 -1,1 h-16.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M507.1,186.3 h17.3 q1,0 1,1 v6.4 q0,1 -1,1 h-17.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-12.7,195.3 h12.5 q1,0 1,1 v8.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M2.6,194.6 h17.5 q1,0 1,1 v8.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M23.0,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M49.9,195.3 h18.0 q1,0 1,1 v8.4 q0,1 -1,1 h-18.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M70.7,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M97.8,195.3 h21.8 q1,0 1,1 v8.4 q0,1 -1,1 h-21.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M122.3,196.0 h13.9 q1,0 1,1 v8.4 q0,1 -1,1 h-13.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M139.0,195.3 h23.8 q1,0 1,1 v8.4 q0,1 -1,1 h-23.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M165.6,195.3 h19.0 q1,0 1,1 v8.4 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M187.4,194.6 h14.3 q1,0 1,1 v8.4 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M204.5,195.3 h17.1 q1,0 1,1 v8.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M224.5,195.3 h12.7 q1,0 1,1 v8.4 q0,1 -1,1 h-12.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M239.9,195.3 h15.7 q1,0 1,1 v8.4 q0,1 -1,1 h-15.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M258.4,195.3 h14.0 q1,0 1,1 v8.4 q0,1 -1,1 h-14.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M275.2,195.3 h22.0 q1,0 1,1 v8.4 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M300.0,194.6 h20.8 q1,0 1,1 v8.4 q0,1 -1,1 h-20.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M323.5,195.3 h23.6 q1,0 1,1 v8.4 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M349.9,196.0 h15.0 q1,0 1,1 v8.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M367.7,195.3 h15.5 q1,0 1,1 v8.4 q0,1 -1,1 h-15.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M386.0,195.3 h15.3 q1,0 1,1 v8.4 q0,1 -1,1 h-15.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M404.0,196.0 h20.4 q1,0 1,1 v8.4 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M427.3,195.3 h15.6 q1,0 1,1 v8.4 q0,1 -1,1 h-15.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M445.7,195.3 h21.2 q1,0 1,1 v8.4 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M469.7,194.6 h23.9 q1,0 1,1 v8.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M496.4,195.3 h16.2 q1,0 1,1 v8.4 q0,1 -1,1 h-16.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-9.4,205.6 h27.9 q1,0 1,1 v11.4 q0,1 -1,1 h-27.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M21.3,205.6 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M41.6,206.3 h25.0 q1,0 1,1 v11.4 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M69.4,205.6 h27.7 q1,0 1,1 v11.4 q0,1 -1,1 h-27.7 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M99.9,206.3 h18.9 q1,0 1,1 v11.4 q0,1 -1,1 h-18.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M121.6,205.6 h22.4 q1,0 1,1 v11.4 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M146.8,207.0 h23.4 q1,0 1,1 v11.4 q0,1 -1,1 h-23.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M173.0,206.3 h33.4 q1,0 1,1 v11.4 q0,1 -1,1 h-33.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M209.2,205.6 h20.0 q1,0 1,1 v11.4 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M231.9,205.6 h31.9 q1,0 1,1 v11.4 q0,1 -1,1 h-31.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M266.6,207.0 h30.5 q1,0 1,1 v11.4 q0,1 -1,1 h-30.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M299.9,205.6 h20.6 q1,0 1,1 v11.4 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M323.3,207.0 h19.5 q1,0 1,1 v11.4 q0,1 -1,1 h-19.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M345.6,206.3 h27.6 q1,0 1,1 v11.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M376.0,205.6 h19.6 q1,0 1,1 v11.4 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M398.4,207.0 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M418.7,205.6 h32.1 q1,0 1,1 v11.4 q0,1 -1,1 h-32.1 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M453.6,206.3 h28.2 q1,0 1,1 v11.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M484.6,206.3 h18.4 q1,0 1,1 v11.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M505.8,206.3 h20.5 q1,0 1,1 v11.4 q0,1 -1,1 h-20.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-8.2,221.0 h36.5 q1,0 1,1 v14.4 q0,1 -1,1 h-36.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M31.1,220.3 h25.2 q1,0 1,1 v14.4 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M59.1,220.3 h23.9 q1,0 1,1 v14.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M85.8,220.3 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M117.0,220.3 h21.9 q1,0 1,1 v14.4 q0,1 -1,1 h-21.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M141.6,220.3 h25.7 q1,0 1,1 v14.4 q0,1 -1,1 h-25.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M170.1,220.3 h30.8 q1,0 1,1 v14.4 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M203.7,220.3 h27.0 q1,0 1,1 v14.4 q0,1 -1,1 h-27.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M233.5,219.6 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M264.7,220.3 h28.0 q1,0 1,1 v14.4 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M295.5,221.0 h37.2 q1,0 1,1 v14.4 q0,1 -1,1 h-37.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M335.4,220.3 h42.3 q1,0 1,1 v14.4 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M380.6,220.3 h35.5 q1,0 1,1 v14.4 q0,1 -1,1 h-35.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M418.9,220.3 h42.5 q1,0 1,1 v14.4 q0,1 -1,1 h-42.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M464.2,220.3 h37.7 q1,0 1,1 v14.4 q0,1 -1,1 h-37.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M504.7,220.3 h26.0 q1,0 1,1 v14.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-17.1,237.3 h57.1 q1,0 1,1 v21.4 q0,1 -1,1 h-57.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M42.8,237.3 h53.4 q1,0 1,1 v21.4 q0,1 -1,1 h-53.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M99.0,237.3 h52.5 q1,0 1,1 v21.4 q0,1 -1,1 h-52.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M154.3,237.3 h49.5 q1,0 1,1 v21.4 q0,1 -1,1 h-49.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M206.6,236.6 h54.6 q1,0 1,1 v21.4 q0,1 -1,1 h-54.6 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M263.9,237.3 h41.7 q1,0 1,1 v21.4 q0,1 -1,1 h-41.7 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M308.4,237.3 h39.4 q1,0 1,1 v21.4 q0,1 -1,1 h-39.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M350.7,238.0 h49.1 q1,0 1,1 v21.4 q0,1 -1,1 h-49.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M402.5,238.0 h41.1 q1,0 1,1 v21.4 q0,1 -1,1 h-41.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M446.5,237.3 h54.5 q1,0 1,1 v21.4 q0,1 -1,1 h-54.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M503.7,236.6 h45.9 q1,0 1,1 v21.4 q0,1 -1,1 h-45.9 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<!-- the kerb where the paving meets the buildings -->
<path d="M0,182 L500,182 L500,184.6 L0,184.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet cross the square -->
<path d="M150,260 Q210,220 250,196 Q290,220 350,260 Z" fill="#8a765d" opacity="0.16"/>
<path d="M0,258 Q120,236 250,198 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- Fountain base -->
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#8a8a9a"/>
<ellipse cx="250" cy="185" rx="55" ry="18" fill="#9a9aaa" opacity="0.5"/>
<ellipse cx="250" cy="180" rx="48" ry="14" fill="#6688aa" opacity="0.6"/>
<!-- Fountain pillar -->
<rect x="244" y="140" width="12" height="42" fill="#9a9aaa"/>
<rect x="246" y="140" width="8" height="42" fill="#aaaabc" opacity="0.5"/>
<!-- Fountain top basin -->
<ellipse cx="250" cy="142" rx="22" ry="8" fill="#8a8a9a"/>
<ellipse cx="250" cy="140" rx="18" ry="6" fill="#6688aa" opacity="0.5"/>
<!-- Water streams -->
<line x1="250" y1="135" x2="250" y2="120" stroke="#aaddff" stroke-width="1.5" opacity="0.5">
  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="240" y1="142" x2="228" y2="165" stroke="#aaddff" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
</line>
<line x1="260" y1="142" x2="272" y2="165" stroke="#aaddff" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.6s"/>
</line>
<!-- Water shimmer particles -->
<circle cx="250" cy="118" r="2" fill="#aaddff" opacity="0.3" filter="url(#townSoftGlow)">
  <animate attributeName="cy" values="118;112;108" dur="1.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.8;0" dur="1.5s" repeatCount="indefinite"/>
</circle>
<circle cx="232" cy="160" r="1.5" fill="#aaddff" opacity="0.3">
  <animate attributeName="cy" values="155;165;175" dur="1.8s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite"/>
</circle>
<circle cx="268" cy="160" r="1.5" fill="#aaddff" opacity="0.3">
  <animate attributeName="cy" values="155;165;175" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
  <animate attributeName="opacity" values="0.5;0.2;0" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
</circle>
<!-- Lantern left -->
<rect x="118" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="112" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="114" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.6"/>
<circle cx="120" cy="137" r="12" fill="url(#lanternGlow)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite"/>
</circle>
<!-- Lantern right -->
<rect x="378" y="140" width="4" height="40" fill="#5a4a2a"/>
<rect x="372" y="130" width="16" height="14" rx="2" fill="#6a5a3a"/>
<rect x="374" y="132" width="12" height="10" rx="1" fill="#ffeaa7" opacity="0.6"/>
<circle cx="380" cy="137" r="12" fill="url(#lanternGlow)" opacity="0.5">
  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
</circle>
<!-- Notice board left -->
<rect x="50" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="40" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="42" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="52" y="141" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.7">?X=7</text>
<text x="52" y="146" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.6">A+B=?</text>
<!-- Notice board right -->
<rect x="446" y="145" width="4" height="38" fill="#5a3a18"/>
<rect x="436" y="130" width="24" height="20" rx="2" fill="#6b4a18"/>
<rect x="438" y="132" width="20" height="16" rx="1" fill="#8a6a28"/>
<text x="448" y="141" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.7">ROT13</text>
<text x="448" y="146" text-anchor="middle" fill="#ffd700" font-family="monospace" font-size="4" opacity="0.6">#!&amp;%</text>
<!-- Fountain mist -->
<ellipse cx="250" cy="165" rx="60" ry="25" fill="url(#fountainMist)"/>
<!-- Street furniture, set clear of the fountain and entrances. -->
<g transform="translate(85 193)">
<ellipse cx="24" cy="18" rx="29" ry="4" fill="#453e36" opacity=".25"/>
<path d="M2 0H45V4H2Z M2 6H45V10H2Z" fill="#8c7152"/>
<path d="M5 -1V17 M42 -1V17" stroke="#4e565b" stroke-width="2"/>
<path d="M0 11H48L45 14H2Z" fill="#a08864"/>
<path d="M5 14V19 M42 14V19" stroke="#4e565b" stroke-width="2"/>
</g>
<g transform="translate(349 190)">
<ellipse cx="12" cy="17" rx="15" ry="3" fill="#453e36" opacity=".24"/>
<path d="M1 3H24L21 17H4Z" fill="#8a6654"/><path d="M0 2H25V6H0Z" fill="#aa8770"/>
<path d="M4 2Q-2 -9 7 -7L11 0Q7 -17 15 -12L16 0Q23 -14 25 -5L21 3Z" fill="#577360"/>
<path d="M8 0L6 -5 M15 1L15 -7 M20 2L23 -4" stroke="#839678" stroke-width="1"/>
</g>
<g fill="#a6acaa" opacity=".55"><path d="M126 140H144V142H126Z M146 140H164V142H146Z M300 147H314V149H300Z M320 147H335V149H320Z"/></g>
</svg>`;

// Scene 1: Terminal hums near fountain. Three paths lead outward.
// Reuse scene 0 — same visual composition, narrative text differs
STORY_SCENES['town_1'] = STORY_SCENES['town_0'];

// Scene 2: Town Crier — woman in plumed hat rings brass bell
STORY_SCENES['town_2'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townSky2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="lanternGlow2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="bellGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townSky2)"/>
<!-- the same paving as town_0, at the nearer camera: setts about 2:1 with
     their corners knocked off, courses deepening as they come forward -->
<path d="M0,176 L500,176 L500,260 L0,260 Z" fill="#6a5a48"/>
<path d="M-8.3,179.4 h15.1 q1,0 1,1 v8.2 q0,1 -1,1 h-15.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M9.8,178.6 h23.9 q1,0 1,1 v8.2 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M36.7,179.4 h19.6 q1,0 1,1 v8.2 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M59.3,178.6 h19.3 q1,0 1,1 v8.2 q0,1 -1,1 h-19.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M81.7,180.2 h23.2 q1,0 1,1 v8.2 q0,1 -1,1 h-23.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M107.9,179.4 h12.2 q1,0 1,1 v8.2 q0,1 -1,1 h-12.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M123.1,179.4 h20.7 q1,0 1,1 v8.2 q0,1 -1,1 h-20.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M146.8,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M167.7,179.4 h25.0 q1,0 1,1 v8.2 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M195.6,180.2 h14.3 q1,0 1,1 v8.2 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M212.9,179.4 h19.7 q1,0 1,1 v8.2 q0,1 -1,1 h-19.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M235.7,179.4 h22.3 q1,0 1,1 v8.2 q0,1 -1,1 h-22.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M261.0,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M281.8,179.4 h23.1 q1,0 1,1 v8.2 q0,1 -1,1 h-23.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M307.8,179.4 h13.1 q1,0 1,1 v8.2 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M323.9,179.4 h21.7 q1,0 1,1 v8.2 q0,1 -1,1 h-21.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M348.5,179.4 h19.3 q1,0 1,1 v8.2 q0,1 -1,1 h-19.3 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M370.9,179.4 h13.7 q1,0 1,1 v8.2 q0,1 -1,1 h-13.7 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M387.6,179.4 h21.1 q1,0 1,1 v8.2 q0,1 -1,1 h-21.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M411.7,179.4 h12.8 q1,0 1,1 v8.2 q0,1 -1,1 h-12.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M427.5,179.4 h15.1 q1,0 1,1 v8.2 q0,1 -1,1 h-15.1 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M445.6,179.4 h20.0 q1,0 1,1 v8.2 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M468.6,179.4 h17.8 q1,0 1,1 v8.2 q0,1 -1,1 h-17.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M489.4,179.4 h16.0 q1,0 1,1 v8.2 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M508.5,179.4 h13.5 q1,0 1,1 v8.2 q0,1 -1,1 h-13.5 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-11.6,189.6 h27.5 q1,0 1,1 v11.2 q0,1 -1,1 h-27.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M18.9,190.4 h30.8 q1,0 1,1 v11.2 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M52.8,190.4 h16.8 q1,0 1,1 v11.2 q0,1 -1,1 h-16.8 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M72.6,189.6 h17.7 q1,0 1,1 v11.2 q0,1 -1,1 h-17.7 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M93.3,190.4 h23.6 q1,0 1,1 v11.2 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M119.9,190.4 h25.5 q1,0 1,1 v11.2 q0,1 -1,1 h-25.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M148.4,190.4 h27.4 q1,0 1,1 v11.2 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M178.8,190.4 h19.4 q1,0 1,1 v11.2 q0,1 -1,1 h-19.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M201.2,190.4 h28.4 q1,0 1,1 v11.2 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M232.6,190.4 h33.0 q1,0 1,1 v11.2 q0,1 -1,1 h-33.0 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M268.5,189.6 h31.4 q1,0 1,1 v11.2 q0,1 -1,1 h-31.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M303.0,190.4 h27.4 q1,0 1,1 v11.2 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M333.4,189.6 h26.6 q1,0 1,1 v11.2 q0,1 -1,1 h-26.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M363.0,190.4 h26.5 q1,0 1,1 v11.2 q0,1 -1,1 h-26.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M392.5,190.4 h32.5 q1,0 1,1 v11.2 q0,1 -1,1 h-32.5 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M428.1,190.4 h20.1 q1,0 1,1 v11.2 q0,1 -1,1 h-20.1 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M451.2,189.6 h28.7 q1,0 1,1 v11.2 q0,1 -1,1 h-28.7 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z M482.9,190.4 h29.6 q1,0 1,1 v11.2 q0,1 -1,1 h-29.6 q-1,0 -1,-1 v-11.2 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-29.2,204.4 h28.2 q1,0 1,1 v15.2 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M2.0,204.4 h42.4 q1,0 1,1 v15.2 q0,1 -1,1 h-42.4 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M47.3,204.4 h28.2 q1,0 1,1 v15.2 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M78.6,205.2 h39.7 q1,0 1,1 v15.2 q0,1 -1,1 h-39.7 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M121.3,204.4 h30.4 q1,0 1,1 v15.2 q0,1 -1,1 h-30.4 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M154.7,204.4 h38.5 q1,0 1,1 v15.2 q0,1 -1,1 h-38.5 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M196.2,204.4 h26.9 q1,0 1,1 v15.2 q0,1 -1,1 h-26.9 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M226.1,204.4 h26.8 q1,0 1,1 v15.2 q0,1 -1,1 h-26.8 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M255.9,204.4 h26.1 q1,0 1,1 v15.2 q0,1 -1,1 h-26.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M285.0,204.4 h23.6 q1,0 1,1 v15.2 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M311.6,205.2 h34.1 q1,0 1,1 v15.2 q0,1 -1,1 h-34.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M348.7,204.4 h25.6 q1,0 1,1 v15.2 q0,1 -1,1 h-25.6 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M377.3,203.6 h24.8 q1,0 1,1 v15.2 q0,1 -1,1 h-24.8 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M405.1,204.4 h36.9 q1,0 1,1 v15.2 q0,1 -1,1 h-36.9 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M445.0,203.6 h40.1 q1,0 1,1 v15.2 q0,1 -1,1 h-40.1 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z M488.1,204.4 h35.2 q1,0 1,1 v15.2 q0,1 -1,1 h-35.2 q-1,0 -1,-1 v-15.2 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-24.9,222.4 h43.3 q1,0 1,1 v20.2 q0,1 -1,1 h-43.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M21.4,222.4 h54.3 q1,0 1,1 v20.2 q0,1 -1,1 h-54.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M78.7,223.2 h30.2 q1,0 1,1 v20.2 q0,1 -1,1 h-30.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M112.0,222.4 h49.2 q1,0 1,1 v20.2 q0,1 -1,1 h-49.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M164.1,223.2 h47.2 q1,0 1,1 v20.2 q0,1 -1,1 h-47.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M214.3,222.4 h43.9 q1,0 1,1 v20.2 q0,1 -1,1 h-43.9 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M261.2,222.4 h40.9 q1,0 1,1 v20.2 q0,1 -1,1 h-40.9 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M305.1,223.2 h30.6 q1,0 1,1 v20.2 q0,1 -1,1 h-30.6 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M338.6,222.4 h48.8 q1,0 1,1 v20.2 q0,1 -1,1 h-48.8 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M390.4,222.4 h48.4 q1,0 1,1 v20.2 q0,1 -1,1 h-48.4 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M441.8,222.4 h37.3 q1,0 1,1 v20.2 q0,1 -1,1 h-37.3 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z M482.1,223.2 h53.2 q1,0 1,1 v20.2 q0,1 -1,1 h-53.2 q-1,0 -1,-1 v-20.2 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-19.5,245.4 h43.2 q1,0 1,1 v23.2 q0,1 -1,1 h-43.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M26.7,244.6 h61.1 q1,0 1,1 v23.2 q0,1 -1,1 h-61.1 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M90.8,244.6 h49.7 q1,0 1,1 v23.2 q0,1 -1,1 h-49.7 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M143.5,245.4 h63.6 q1,0 1,1 v23.2 q0,1 -1,1 h-63.6 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M210.1,244.6 h42.3 q1,0 1,1 v23.2 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M255.4,245.4 h60.1 q1,0 1,1 v23.2 q0,1 -1,1 h-60.1 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M318.5,244.6 h56.2 q1,0 1,1 v23.2 q0,1 -1,1 h-56.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M377.7,245.4 h49.2 q1,0 1,1 v23.2 q0,1 -1,1 h-49.2 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M429.9,246.2 h56.6 q1,0 1,1 v23.2 q0,1 -1,1 h-56.6 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z M489.5,245.4 h68.5 q1,0 1,1 v23.2 q0,1 -1,1 h-68.5 q-1,0 -1,-1 v-23.2 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<path d="M0,176 L500,176 L500,178.6 L0,178.6 Z" fill="#8a7a63" opacity="0.5"/>
<path d="M0,258 Q120,236 250,196 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- ====================================================================
     THE SAME SQUARE, one step closer. town_2 still carried the original four
     flat rects while town_0 had been rebuilt, so the two scenes were visibly
     different towns. These are town_0's own buildings and paving, moved and
     scaled for the nearer camera.
     ==================================================================== -->

<!-- far row, pushed further back and dimmer at this distance -->
<path d="M0,178 L0,104 L30,86 L60,104 L60,178 Z" fill="#8a9db3" opacity="0.3"/>
<path d="M56,178 L56,118 L86,98 L116,118 L116,178 Z" fill="#7a8da3" opacity="0.32"/>
<path d="M384,178 L384,112 L414,92 L444,112 L444,178 Z" fill="#8a9db3" opacity="0.3"/>
<path d="M440,178 L440,122 L470,102 L500,122 L500,178 Z" fill="#7a8da3" opacity="0.32"/>

<!-- the clock tower, nearer and larger than in town_0 -->
<path d="M28,178 L28,52 L82,52 L82,178 Z" fill="#67798f"/>
<path d="M22,52 L55,22 L88,52 Z" fill="#56687e"/>
<path d="M55,22 L88,52 L76,52 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M55,22 L55,10" stroke="#ffd700" stroke-width="1.8" opacity="0.85"/>
<path d="M55,10 L65,15 L55,20 Z" fill="#ffd700" opacity="0.8"/>
<circle cx="55" cy="76" r="15" fill="#ffeaa7" opacity="0.55"/>
<circle cx="55" cy="76" r="15" fill="none" stroke="#5a6276" stroke-width="1.8"/>
<path d="M55,76 L55,67" stroke="#3a4250" stroke-width="1.6" stroke-linecap="round"/>
<path d="M55,76 L61,80" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round"/>
<path d="M36,108 h16 v20 h-16 Z M60,108 h16 v20 h-16 Z" fill="#ffeaa7" opacity="0.38"/>
<path d="M36,144 h38 v34 h-38 Z" fill="#4a5468" opacity="0.6"/>
<path d="M40,147 h30 v28 h-30 Z" fill="#ffeaa7" opacity="0.22"/>

<!-- a gabled house on the near left -->
<path d="M96,178 L96,104 L142,104 L142,178 Z" fill="#6a7286"/>
<path d="M88,104 L119,78 L150,104 Z" fill="#5a6276"/>
<path d="M119,78 L150,104 L138,104 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M104,118 h13 v16 h-13 Z M122,118 h13 v16 h-13 Z" fill="#ffeaa7" opacity="0.42"/>
<path d="M106,148 h26 v30 h-26 Z" fill="#4a3a20"/>
<path d="M108,150 h22 v26 h-22 Z" fill="#5a4830" opacity="0.7"/>
<circle cx="126" cy="164" r="1.8" fill="#ffd700" opacity="0.7"/>
<path d="M132,96 h9 v10 h-9 Z" fill="#5a6276"/>

<!-- the shop, nearer, with its awning and sign -->
<path d="M348,178 L348,98 L438,98 L438,178 Z" fill="#647689"/>
<path d="M342,98 L393,72 L444,98 Z" fill="#54667a"/>
<path d="M344,136 q12,11 24,0 q12,11 24,0 q12,11 24,0 q12,11 22,0 L442,124 L344,124 Z" fill="#8a4a3a" opacity="0.9"/>
<path d="M344,124 L442,124" stroke="#9aadc3" stroke-width="1.4" opacity="0.4"/>
<path d="M354,150 h36 v24 h-36 Z" fill="#ffeaa7" opacity="0.34"/>
<path d="M400,148 h26 v30 h-26 Z" fill="#4a3a20"/>
<circle cx="405" cy="164" r="1.8" fill="#ffd700" opacity="0.7"/>
<path d="M446,102 h14 M453,102 v12" stroke="#4a3a20" stroke-width="1.6"/>
<path d="M444,114 h22 v15 h-22 Z" fill="#6b4a20"/>
<path d="M448,119 h12 v2.4 h-12 Z M448,124 h8 v2.4 h-8 Z" fill="#ffd700" opacity="0.55"/>

<!-- the fountain, behind the crier -->
<ellipse cx="250" cy="176" rx="46" ry="15" fill="#8a8a9a" opacity="0.6"/>
<ellipse cx="250" cy="172" rx="40" ry="12" fill="#9a9aaa" opacity="0.45"/>
<path d="M245,140 L255,140 L257,172 L243,172 Z" fill="#9a9aaa" opacity="0.6"/>
<ellipse cx="250" cy="140" rx="18" ry="6" fill="#8a8a9a" opacity="0.5"/>
<path d="M250,134 Q250,124 250,118" stroke="#aaddff" stroke-width="1.2" opacity="0.35">
  <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M244,136 Q238,128 236,122 M256,136 Q262,128 264,122" fill="none" stroke="#aaddff" stroke-width="1" opacity="0.28"/>

<!-- ====================================================================
     THE TOWN CRIER: Wren, from the shared cast (scenes/characters.js).

     She was a hand-built figure with her own proportions: rects for a coat,
     a circle head, a plumed hat: so the crier was a different species from
     everyone else on the island. She is now drawn by the same model as every
     other cast appearance.

     Wren is the islander of the five, which is the right fit: the surveyor
     records and does not comment, and Aufu keeps things rather than announcing
     them.
     ==================================================================== -->
${bcPlace('wren', 17, 250, 178, { armPose: { right: { ex: 1.35, ey: -0.55, wx: 1.75, wy: -2.0 } } })}

<!-- THE BELL, SHAKEN BY HAND. Her right arm is POSED by the model, not
     drawn here: same sleeve, same outline, same elbow, same hand as her
     other arm. The model puts that hand at (276.5, 52.5), so the bell's
     handle starts there and the bell hangs straight off it. Nothing sits
     between the hand and the bell, which is what used to read as a stick. -->
<!-- the handle, a stub of the bell itself, running down out of her grip -->
<path d="M273.5,52 L279.5,52 L279.5,62 L273.5,62 Z" fill="#8a6a10"/>
<!-- the bell body -->
<path d="M266.5,64 Q276.5,60 286.5,64 Q288.5,74 290.5,83 L262.5,83 Q264.5,74 266.5,64 Z" fill="#c8962a"/>
<path d="M269.5,66 Q276.5,63 283.5,66 Q285.5,74 286.5,81 L266.5,81 Q267.5,74 269.5,66 Z" fill="#daa640" opacity="0.6"/>
<path d="M262.5,82 Q276.5,84 290.5,82 L290.5,85 Q276.5,87 262.5,85 Z" fill="#b88620"/>
<circle cx="276.5" cy="88" r="2.2" fill="#8a6a10"/>
<!-- the fingers closing over the handle, drawn on top of the model's palm -->
<path d="M272.8,50.6 q3.7,-1.7 7.4,0 M272.8,54 q3.7,-1.7 7.4,0" fill="none" stroke="#1c1722" stroke-width="0.7" opacity="0.5"/>

<!-- Bell ring effect -->
<path d="M262,59 Q256,54 258,48" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite"/>
</path>
<path d="M292,59 Q298,54 296,48" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.4">
  <animate attributeName="opacity" values="0;0.6;0" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
</path>
<path d="M255,54 Q249,50 251,44" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.3">
  <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
</path>
<!-- Lanterns (flanking) -->
<rect x="100" y="150" width="3" height="35" fill="#5a4a2a"/>
<rect x="95" y="140" width="13" height="12" rx="2" fill="#6a5a3a"/>
<rect x="97" y="142" width="9" height="8" rx="1" fill="#ffeaa7" opacity="0.5"/>
<circle cx="101" cy="146" r="10" fill="url(#lanternGlow2)" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
</circle>
<rect x="397" y="150" width="3" height="35" fill="#5a4a2a"/>
<rect x="392" y="140" width="13" height="12" rx="2" fill="#6a5a3a"/>
<rect x="394" y="142" width="9" height="8" rx="1" fill="#ffeaa7" opacity="0.5"/>
<circle cx="399" cy="146" r="10" fill="url(#lanternGlow2)" opacity="0.4">
  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" begin="0.6s"/>
</circle>
</svg>`;

// Scene 3: Fountain close-up with three cryptic clues carved on the rim
STORY_SCENES['town_3'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townCloseupBg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a6a8a"/><stop offset="50%" stop-color="#6a8aaa"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <filter id="town3SoftGlow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <radialGradient id="waterShimmer" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#aaddff" stop-opacity="0.2"/><stop offset="100%" stop-color="#aaddff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="goldTextGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.15"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="carvedGlow"><feGaussianBlur stdDeviation="1.2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
</defs>
<rect width="500" height="260" fill="url(#townCloseupBg)"/>

<!-- ====================================================================
     THE SAME SQUARE AS town_0 AND town_2, at the closest camera of the
     three. The scene used to be four concentric ellipses on an empty
     gradient, so the fountain stood nowhere: no town behind it, no paving
     under it, and nothing to say it was the same fountain the player had
     just been standing in front of.

     These are town_0's own buildings and paving, scaled up for this camera
     and pushed back with a wash, because at this distance the town is
     backdrop and the rim of the basin is the subject.
     ==================================================================== -->

<!-- far row, barely off the sky -->
<path d="M0,168 L0,74 L38,50 L76,74 L76,168 Z" fill="#8a9db3" opacity="0.26"/>
<path d="M70,168 L70,94 L108,68 L146,94 L146,168 Z" fill="#7a8da3" opacity="0.28"/>
<path d="M352,168 L352,80 L390,56 L428,80 L428,168 Z" fill="#8a9db3" opacity="0.26"/>
<path d="M420,168 L420,98 L458,72 L500,98 L500,168 Z" fill="#7a8da3" opacity="0.28"/>

<!-- the clock tower, the square's one vertical, seen over the fountain -->
<path d="M14,168 L14,40 L74,40 L74,168 Z" fill="#67798f" opacity="0.5"/>
<path d="M6,40 L44,4 L82,40 Z" fill="#56687e" opacity="0.5"/>
<path d="M44,4 L82,40 L68,40 Z" fill="#7d90a6" opacity="0.3"/>
<circle cx="44" cy="70" r="17" fill="#ffeaa7" opacity="0.32"/>
<circle cx="44" cy="70" r="17" fill="none" stroke="#5a6276" stroke-width="1.8" opacity="0.5"/>
<path d="M44,70 L44,60" stroke="#3a4250" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
<path d="M44,70 L51,74" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>
<path d="M22,104 h18 v22 h-18 Z M50,104 h18 v22 h-18 Z" fill="#ffeaa7" opacity="0.22"/>
<path d="M22,142 h44 v26 h-44 Z" fill="#4a5468" opacity="0.32"/>

<!-- a gabled house, and the stepped gable beside it -->
<path d="M92,168 L92,96 L138,96 L138,168 Z" fill="#6a7286" opacity="0.5"/>
<path d="M84,96 L115,68 L146,96 Z" fill="#5a6276" opacity="0.5"/>
<path d="M115,68 L146,96 L134,96 Z" fill="#8a9db3" opacity="0.28"/>
<path d="M100,110 h13 v16 h-13 Z M120,110 h13 v16 h-13 Z" fill="#ffeaa7" opacity="0.24"/>
<path d="M104,140 h26 v28 h-26 Z" fill="#4a3a20" opacity="0.45"/>

<!-- the shop with its scalloped awning, on the far side, as in town_0 -->
<path d="M362,168 L362,86 L452,86 L452,168 Z" fill="#647689" opacity="0.5"/>
<path d="M356,86 L407,58 L458,86 Z" fill="#54667a" opacity="0.5"/>
<path d="M358,126 q12,11 24,0 q12,11 24,0 q12,11 24,0 q12,11 22,0 L456,114 L358,114 Z" fill="#8a4a3a" opacity="0.5"/>
<path d="M358,114 L456,114" stroke="#9aadc3" stroke-width="1.4" opacity="0.22"/>
<path d="M368,140 h36 v22 h-36 Z" fill="#ffeaa7" opacity="0.2"/>
<path d="M414,140 h26 v28 h-26 Z" fill="#4a3a20" opacity="0.45"/>
<path d="M460,90 h14 M467,90 v12" stroke="#4a3a20" stroke-width="1.6" opacity="0.5"/>
<path d="M458,102 h22 v15 h-22 Z" fill="#6b4a20" opacity="0.55"/>

<!-- the distance wash: at this camera the town is backdrop, so it is veiled
     toward the sky colour rather than merely drawn smaller -->
<path d="M0,0 L500,0 L500,176 L0,176 Z" fill="#7a9ab3" opacity="0.24"/>

<!-- ====================================================================
     THE PAVING, to town_0's rule: a sett is about 2:1 wide-to-tall with its
     corners knocked off, courses deepening as they come forward, and no
     continuous joint running across the square. This is the nearest of the
     three cameras, so the courses are the deepest.
     ==================================================================== -->
<path d="M0,176 L500,176 L500,260 L0,260 Z" fill="#6a5a48"/>
<path d="M-10,178.4 h26.0 q1,0 1,1 v3.6 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M18.6,179.2 h20.4 q1,0 1,1 v3.6 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M42.6,178.0 h24.8 q1,0 1,1 v3.6 q0,1 -1,1 h-24.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M70.6,179.0 h18.6 q1,0 1,1 v3.6 q0,1 -1,1 h-18.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M92.0,178.2 h27.4 q1,0 1,1 v3.6 q0,1 -1,1 h-27.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M122.6,179.4 h21.2 q1,0 1,1 v3.6 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M147.6,178.6 h25.6 q1,0 1,1 v3.6 q0,1 -1,1 h-25.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M176.4,179.2 h19.4 q1,0 1,1 v3.6 q0,1 -1,1 h-19.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M199.0,178.0 h23.6 q1,0 1,1 v3.6 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M226.0,179.4 h26.8 q1,0 1,1 v3.6 q0,1 -1,1 h-26.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M256.0,178.4 h20.2 q1,0 1,1 v3.6 q0,1 -1,1 h-20.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M279.4,179.0 h24.4 q1,0 1,1 v3.6 q0,1 -1,1 h-24.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M307.2,178.2 h22.0 q1,0 1,1 v3.6 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M332.6,179.4 h27.8 q1,0 1,1 v3.6 q0,1 -1,1 h-27.8 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M363.6,178.6 h19.0 q1,0 1,1 v3.6 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M386.0,179.2 h25.2 q1,0 1,1 v3.6 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M414.4,178.0 h23.0 q1,0 1,1 v3.6 q0,1 -1,1 h-23.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M440.6,179.4 h20.6 q1,0 1,1 v3.6 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M464.4,178.4 h28.0 q1,0 1,1 v3.6 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z M495.6,179.0 h22.4 q1,0 1,1 v3.6 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-3.6 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.55"/>
<path d="M-16,185.6 h31.2 q1,0 1,1 v5.4 q0,1 -1,1 h-31.2 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M17.8,186.6 h27.6 q1,0 1,1 v5.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M48.2,185.4 h34.0 q1,0 1,1 v5.4 q0,1 -1,1 h-34.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M85.0,186.8 h25.4 q1,0 1,1 v5.4 q0,1 -1,1 h-25.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M113.2,185.8 h32.8 q1,0 1,1 v5.4 q0,1 -1,1 h-32.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M148.8,186.4 h28.2 q1,0 1,1 v5.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M179.8,185.4 h35.4 q1,0 1,1 v5.4 q0,1 -1,1 h-35.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M218.0,186.8 h26.0 q1,0 1,1 v5.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M246.8,185.6 h30.6 q1,0 1,1 v5.4 q0,1 -1,1 h-30.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M280.2,186.2 h33.8 q1,0 1,1 v5.4 q0,1 -1,1 h-33.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M316.8,185.4 h25.8 q1,0 1,1 v5.4 q0,1 -1,1 h-25.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M345.4,186.8 h31.4 q1,0 1,1 v5.4 q0,1 -1,1 h-31.4 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M379.6,186.0 h28.8 q1,0 1,1 v5.4 q0,1 -1,1 h-28.8 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M411.2,185.4 h34.6 q1,0 1,1 v5.4 q0,1 -1,1 h-34.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M448.6,186.6 h26.6 q1,0 1,1 v5.4 q0,1 -1,1 h-26.6 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z M478.0,185.8 h32.0 q1,0 1,1 v5.4 q0,1 -1,1 h-32.0 q-1,0 -1,-1 v-5.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.52"/>
<path d="M-22,196.4 h40.2 q1,0 1,1 v8.2 q0,1 -1,1 h-40.2 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M21.0,197.6 h34.6 q1,0 1,1 v8.2 q0,1 -1,1 h-34.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M58.4,196.2 h44.0 q1,0 1,1 v8.2 q0,1 -1,1 h-44.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M105.2,197.8 h33.0 q1,0 1,1 v8.2 q0,1 -1,1 h-33.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M141.0,196.6 h42.4 q1,0 1,1 v8.2 q0,1 -1,1 h-42.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M186.2,197.4 h36.8 q1,0 1,1 v8.2 q0,1 -1,1 h-36.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M225.8,196.2 h45.6 q1,0 1,1 v8.2 q0,1 -1,1 h-45.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M274.2,197.8 h34.0 q1,0 1,1 v8.2 q0,1 -1,1 h-34.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M311.0,196.4 h39.8 q1,0 1,1 v8.2 q0,1 -1,1 h-39.8 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M353.6,197.2 h43.4 q1,0 1,1 v8.2 q0,1 -1,1 h-43.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M399.8,196.2 h33.6 q1,0 1,1 v8.2 q0,1 -1,1 h-33.6 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M436.2,197.8 h41.0 q1,0 1,1 v8.2 q0,1 -1,1 h-41.0 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z M480.0,196.6 h37.4 q1,0 1,1 v8.2 q0,1 -1,1 h-37.4 q-1,0 -1,-1 v-8.2 q0,-1 1,-1 Z" fill="#77644e" opacity="0.5"/>
<path d="M-26,213.4 h52.6 q1,0 1,1 v12.4 q0,1 -1,1 h-52.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M29.4,214.8 h45.4 q1,0 1,1 v12.4 q0,1 -1,1 h-45.4 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M77.6,213.2 h57.6 q1,0 1,1 v12.4 q0,1 -1,1 h-57.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M138.0,214.6 h43.2 q1,0 1,1 v12.4 q0,1 -1,1 h-43.2 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M184.0,213.6 h55.4 q1,0 1,1 v12.4 q0,1 -1,1 h-55.4 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M242.2,214.4 h48.0 q1,0 1,1 v12.4 q0,1 -1,1 h-48.0 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M293.0,213.2 h59.8 q1,0 1,1 v12.4 q0,1 -1,1 h-59.8 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M355.6,214.8 h44.6 q1,0 1,1 v12.4 q0,1 -1,1 h-44.6 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M403.0,213.4 h52.2 q1,0 1,1 v12.4 q0,1 -1,1 h-52.2 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z M458.0,214.2 h56.8 q1,0 1,1 v12.4 q0,1 -1,1 h-56.8 q-1,0 -1,-1 v-12.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.47"/>
<path d="M-30,241.6 h74.2 q1,0 1,1 v20.6 q0,1 -1,1 h-74.2 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M47.0,242.8 h63.8 q1,0 1,1 v20.6 q0,1 -1,1 h-63.8 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M113.6,241.4 h81.0 q1,0 1,1 v20.6 q0,1 -1,1 h-81.0 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M197.4,242.6 h60.4 q1,0 1,1 v20.6 q0,1 -1,1 h-60.4 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M260.6,241.8 h77.6 q1,0 1,1 v20.6 q0,1 -1,1 h-77.6 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M341.0,242.4 h67.2 q1,0 1,1 v20.6 q0,1 -1,1 h-67.2 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M411.0,241.4 h83.8 q1,0 1,1 v20.6 q0,1 -1,1 h-83.8 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z M497.6,242.8 h62.0 q1,0 1,1 v20.6 q0,1 -1,1 h-62.0 q-1,0 -1,-1 v-20.6 q0,-1 1,-1 Z" fill="#71604a" opacity="0.44"/>
<path d="M0,176 L500,176 L500,178.6 L0,178.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet come round the basin -->
<path d="M0,258 Q120,238 250,204 Q380,238 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>

<!-- ====================================================================
     THE FOUNTAIN. It was four concentric ellipses, which is a diagram of a
     fountain rather than a drawing of one. A stone basin at this range has
     a COPING you can see the thickness of, and it is BUILT of blocks, so
     the joints between them run out toward the viewer around the curve.
     ==================================================================== -->
<!-- the shadow the basin drops on the paving -->
<path d="M32,214 Q250,192 468,214 Q250,254 32,214 Z" fill="#5c4d3b" opacity="0.3"/>
<!-- THE FAR WALL first, because the water sits in front of it. Its inner face
     is what the player looks across the pool AT. -->
<path d="M36,202 Q250,174 464,202 Q250,222 36,202 Z" fill="#8a8a9a"/>
<path d="M44,201 Q250,178 456,201 Q250,214 44,201 Z" fill="#a4a4b6" opacity="0.6"/>
<!-- THE POOL. Deep enough to read as a hole holding water: a dark bottom, a
     lit far edge where the sky lands on it, and the near lip in shadow. -->
<path d="M50,203 Q250,180 450,203 Q250,240 50,203 Z" fill="#3f5f7f"/>
<path d="M50,203 Q250,180 450,203 Q250,224 50,203 Z" fill="#5a7c9c" opacity="0.85"/>
<path d="M62,202 Q250,183 438,202 Q250,208 62,202 Z" fill="#8fbcd8" opacity="0.5"/>
<!-- the pillar and the sky in the water, broken into bands by the ripple -->
<path d="M234,200 Q250,197 266,200 L263,232 Q250,238 237,232 Z" fill="#9a9aaa" opacity="0.22"/>
<path d="M112,203 Q164,198 216,204 Q164,209 112,203 Z" fill="#aaddff" opacity="0.16">
  <animate attributeName="opacity" values="0.08;0.24;0.08" dur="5.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M286,204 Q334,199 384,205 Q334,210 286,204 Z" fill="#aaddff" opacity="0.14">
  <animate attributeName="opacity" values="0.07;0.21;0.07" dur="6.8s" begin="1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M84,211 Q142,206 200,213 Q142,218 84,211 Z" fill="#8ac0e8" opacity="0.11"/>
<path d="M304,214 Q356,209 408,216 Q356,221 304,214 Z" fill="#8ac0e8" opacity="0.1"/>
<path d="M60,204 Q250,184 440,204 Q250,228 60,204 Z" fill="url(#waterShimmer)">
  <animate attributeName="opacity" values="0.4;0.85;0.4" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     THE CLUES, LYING IN THE POOL. Drawn after the water and before the
     near wall, so the coping crosses in front of the lowest line: that
     overlap is what puts them under the surface rather than on the rim.
     The shimmer band below rides over the top of them for the same reason.
     ==================================================================== -->
<circle cx="126" cy="192" r="24" fill="url(#goldTextGlow)" opacity="0.5"/>
<circle cx="250" cy="209" r="26" fill="url(#goldTextGlow)" opacity="0.5"/>
<circle cx="374" cy="192" r="24" fill="url(#goldTextGlow)" opacity="0.5"/>
<g opacity="0.92" filter="url(#town3SoftGlow)">
  <animate attributeName="opacity" values="0.5;0.82;0.5" dur="5.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <text x="126" y="189" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Wrote, mangled,</text>
  <text x="126" y="197" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">a tall building (5)</text>
  <text x="250" y="206" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Moved by rail right</text>
  <text x="250" y="213" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">to the book house (7)</text>
  <text x="374" y="189" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">Hop works, scrambled,</text>
  <text x="374" y="197" text-anchor="middle" fill="#ffd700" font-family="'Fredoka One',cursive" font-size="7" letter-spacing="0.3">a place to build (8)</text>
</g>
<!-- the surface moving over the lettering -->
<path d="M70,190 Q250,180 430,190 Q250,212 70,190 Z" fill="#8fbcd8" opacity="0.13">
  <animate attributeName="opacity" values="0.07;0.2;0.07" dur="5.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- ====================================================================
     THE NEAR WALL, drawn AFTER the water, because the player is standing
     outside the basin looking over its rim: the near coping crosses in
     front of the pool and is what gives the whole thing depth.
     ==================================================================== -->
<path d="M32,207 Q250,234 468,207 L466,222 Q250,252 34,222 Z" fill="#6f6f80"/>
<!-- the coping: the flat top of the wall, and the thing you can see the
     thickness of, which is what a rim is -->
<path d="M32,207 Q250,234 468,207 Q250,226 32,207 Z" fill="#9a9aaa"/>
<path d="M38,207.6 Q250,228 462,207.6 Q250,220 38,207.6 Z" fill="#aaaabc" opacity="0.55"/>
<!-- the blocks the wall is laid in. On a circular wall the joints run out
     from the centre, following the curve, never level across the front. -->
<g stroke="#5a5a6a" stroke-width="1.1" opacity="0.5" fill="none">
  <path d="M58,212 L56,229 M110,219 L108,238 M166,224 L165,245 M224,228 L223,249
           M278,228 L279,249 M336,224 L337,245 M390,219 L392,238 M438,212 L440,229"/>
</g>
<g stroke="#c0c0d0" stroke-width="0.7" opacity="0.3" fill="none">
  <path d="M60,212 L58,229 M112,219 L110,238 M168,224 L167,245 M226,228 L225,249
           M280,228 L281,249 M338,224 L339,245 M392,219 L394,238"/>
</g>
<!-- the face of the near wall falls into its own shadow under the coping -->
<path d="M32,215 Q250,243 468,215 L466,222 Q250,252 34,222 Z" fill="#4a4a5a" opacity="0.36"/>
<!-- and a run of moss along the wet line where the wall meets the paving -->
<path d="M96,240 q30,6 62,6 q-32,4 -62,-6 Z" fill="#5a6a4a" opacity="0.28"/>
<path d="M334,245 q28,-1 56,-7 q-25,9 -56,7 Z" fill="#5a6a4a" opacity="0.24"/>

<!-- ====================================================================
     THE PILLAR. A rect with two rect bands. A fountain pillar tapers, sits
     on a plinth, and carries a moulding under the upper basin.
     ==================================================================== -->
<!-- the plinth it stands on, standing in the water -->
<path d="M226,182 Q250,176 274,182 Q250,190 226,182 Z" fill="#7c7c8c"/>
<path d="M226,182 L274,182 L272,192 Q250,198 228,192 Z" fill="#6a6a7a"/>
<path d="M228,183 Q250,178 272,183 Q250,188 228,183 Z" fill="#9a9aaa" opacity="0.55"/>
<!-- the shaft, tapering as it rises -->
<path d="M234,184 L266,184 L262,110 L238,110 Z" fill="#8a8a9a"/>
<path d="M240,184 L254,184 L252,110 L242,110 Z" fill="#aaaabc" opacity="0.5"/>
<path d="M262,184 L266,184 L262,110 L259,110 Z" fill="#6a6a7a" opacity="0.6"/>
<!-- flutes cut down the shaft -->
<g stroke="#6f6f80" stroke-width="0.9" opacity="0.4" fill="none">
  <path d="M245,182 L247,112 M256,182 L255,112"/>
</g>
<!-- the mouldings: a torus at the foot and a cavetto under the basin -->
<path d="M231,178 Q250,172 269,178 Q250,186 231,178 Z" fill="#9a9aaa"/>
<path d="M232,178 Q250,174 268,178 Q250,182 232,178 Z" fill="#b4b4c4" opacity="0.5"/>
<path d="M234,124 Q250,119 266,124 Q250,131 234,124 Z" fill="#9a9aaa"/>
<path d="M235,124 Q250,121 265,124 Q250,127 235,124 Z" fill="#b4b4c4" opacity="0.5"/>

<!-- ====================================================================
     THE UPPER BASIN. A shallow bowl seen from below the rim, so its
     UNDERSIDE shows: that is what makes it a bowl rather than a disc.
     ==================================================================== -->
<path d="M212,104 Q250,90 288,104 Q282,122 250,126 Q218,122 212,104 Z" fill="#7c7c8c"/>
<path d="M212,104 Q250,90 288,104 Q250,116 212,104 Z" fill="#9a9aaa"/>
<path d="M218,103 Q250,93 282,103 Q250,112 218,103 Z" fill="#aaaabc" opacity="0.55"/>
<path d="M224,102 Q250,96 276,102 Q250,108 224,102 Z" fill="#6688aa" opacity="0.6"/>
<!-- water spilling over its lip in two sheets -->
<path d="M220,108 Q216,124 220,140 Q226,124 226,108 Z" fill="#aaddff" opacity="0.3">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M274,108 Q278,124 274,140 Q268,124 268,108 Z" fill="#aaddff" opacity="0.28">
  <animate attributeName="opacity" values="0.14;0.38;0.14" dur="4.1s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- where those two sheets strike the water below -->
<path d="M208,190 Q222,186 236,190 Q222,195 208,190 Z" fill="#dff0fa" opacity="0.22">
  <animate attributeName="opacity" values="0.12;0.3;0.12" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M262,191 Q276,187 290,191 Q276,196 262,191 Z" fill="#dff0fa" opacity="0.2">
  <animate attributeName="opacity" values="0.1;0.28;0.1" dur="4.1s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     THE JET. A straight line does not read as water. A jet rises, slows,
     and falls: two arcs from one nozzle, plus the column between them.
     ==================================================================== -->
<path d="M250,98 Q249,74 248,58" fill="none" stroke="#aaddff" stroke-width="2.4" opacity="0.45" stroke-linecap="round">
  <animate attributeName="opacity" values="0.28;0.62;0.28" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M248,58 Q244,72 234,96" fill="none" stroke="#aaddff" stroke-width="1.6" opacity="0.32" stroke-linecap="round"/>
<path d="M248,58 Q253,72 264,96" fill="none" stroke="#aaddff" stroke-width="1.6" opacity="0.3" stroke-linecap="round"/>
<path d="M250,100 Q242,80 226,100" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.28" stroke-linecap="round">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.6s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M250,100 Q258,80 274,100" fill="none" stroke="#aaddff" stroke-width="1.3" opacity="0.28" stroke-linecap="round">
  <animate attributeName="opacity" values="0.16;0.4;0.16" dur="3.2s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the drops thrown clear at the top of the jet -->
<path d="M248,54 q2,-1 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#aaddff" opacity="0.4">
  <animate attributeName="opacity" values="0.5;0.7;0" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-2,-12;-5,-20" dur="2.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M252,56 q2,-1 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#aaddff" opacity="0.34">
  <animate attributeName="opacity" values="0.45;0.62;0" dur="2.8s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;3,-11;7,-18" dur="2.8s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.4;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>

<!-- ====================================================================
     THE SUBMERGED CLUES. Text is frozen: not one character changes. The
     glow halos go down BEFORE the letters so the letters sit on top of
     their own light rather than under it.
     ==================================================================== -->
<!-- sparkle where the gold catches the light on the coping -->
<path d="M172,214 q2,-3 4,0 q-2,3 -4,0 Z" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.16;0.66;0.16" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M328,215 q2,-3 4,0 q-2,3 -4,0 Z" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.16;0.66;0.16" dur="3.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M250,192 q1.6,-2.4 3.2,0 q-1.6,2.4 -3.2,0 Z" fill="#ffd700" opacity="0.3">
  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4.6s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
</svg>`;

// Scene 4: All three solved — bell rings, fountain surges golden
STORY_SCENES['town_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="townGoldenSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a6a7a"/><stop offset="40%" stop-color="#7a8a9a"/><stop offset="100%" stop-color="#8a9db3"/>
  </linearGradient>
  <radialGradient id="goldenFountain" cx="50%" cy="55%" r="40%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.35"/><stop offset="60%" stop-color="#ffeaa7" stop-opacity="0.1"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lanternGlow4" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.5"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowL" cx="0%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pathGlowR" cx="100%" cy="50%" r="80%">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
  </radialGradient>
  <filter id="goldenGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
  <linearGradient id="town4GoldWash" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffd700" stop-opacity="0"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0.09"/>
  </linearGradient>
</defs>
<rect width="500" height="260" fill="url(#townGoldenSky)"/>

<!-- ====================================================================
     THE SAME SQUARE AS town_0, at the same camera, the moment all three
     clues are solved. It was four flat rects for a town and one brown
     rectangle for the ground, so it did not look like the same place the
     player had been standing in for four scenes.

     These are town_0's own buildings and paving, unchanged, with the
     golden light of the surge laid over them.
     ==================================================================== -->
<!-- far row: pale, low, no detail worth reading at that distance -->
<path d="M0,182 L0,96 L26,80 L52,96 L52,182 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M48,182 L48,110 L74,92 L100,110 L100,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M96,182 L96,84 L118,70 L140,84 L140,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M300,182 L300,92 L326,74 L352,92 L352,182 Z" fill="#8a9db3" opacity="0.38"/>
<path d="M348,182 L348,106 L372,88 L396,106 L396,182 Z" fill="#7a8da3" opacity="0.42"/>
<path d="M392,182 L392,88 L418,72 L444,88 L444,182 Z" fill="#8a9db3" opacity="0.36"/>
<path d="M440,182 L440,100 L470,82 L500,100 L500,182 Z" fill="#7a8da3" opacity="0.4"/>

<!-- mid row: the town proper, where the rooflines do the work -->
<!-- a stepped gable, the most old-town roofline there is -->
<path d="M14,182 L14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,108 L94,108 L94,118 L114,118 L114,182 Z" fill="#6f8298" opacity="0.85"/>
<path d="M14,118 L34,118 L34,108 L54,108 L54,98 L74,98 L74,182 L14,182 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M36,130 h14 v16 h-14 Z M60,130 h14 v16 h-14 Z M84,130 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.42"/>
<path d="M36,158 h14 v16 h-14 Z M84,158 h14 v16 h-14 Z" fill="#ffeaa7" opacity="0.3"/>
<path d="M60,158 h14 v16 h-14 Z" fill="#5a6276" opacity="0.5"/>

<!-- a clock tower: the one vertical the square needs -->
<path d="M122,182 L122,74 L166,74 L166,182 Z" fill="#67798f"/>
<path d="M118,74 L144,50 L170,74 Z" fill="#56687e"/>
<path d="M144,50 L170,74 L160,74 Z" fill="#7d90a6" opacity="0.5"/>
<path d="M144,50 L144,40" stroke="#ffd700" stroke-width="1.6" opacity="0.85"/>
<path d="M144,40 L152,44 L144,48 Z" fill="#ffd700" opacity="0.8"/>
<circle cx="144" cy="94" r="12" fill="#ffeaa7" opacity="0.55"/>
<circle cx="144" cy="94" r="12" fill="none" stroke="#5a6276" stroke-width="1.6"/>
<path d="M144,94 L144,87" stroke="#3a4250" stroke-width="1.4" stroke-linecap="round"/>
<path d="M144,94 L149,97" stroke="#3a4250" stroke-width="1.2" stroke-linecap="round"/>
<path d="M128,120 h14 v18 h-14 Z M148,120 h14 v18 h-14 Z" fill="#ffeaa7" opacity="0.36"/>
<path d="M128,150 h34 v22 h-34 Z" fill="#4a5468" opacity="0.6"/>
<path d="M132,152 h26 v18 h-26 Z" fill="#ffeaa7" opacity="0.2"/>

<!-- a plain gabled house between the tower and the fountain -->
<path d="M172,182 L172,116 L204,116 L204,182 Z" fill="#6a7286"/>
<path d="M166,116 L188,96 L210,116 Z" fill="#5a6276"/>
<path d="M188,96 L210,116 L202,116 Z" fill="#8a9db3" opacity="0.4"/>
<path d="M178,128 h9 v12 h-9 Z M191,128 h9 v12 h-9 Z" fill="#ffeaa7" opacity="0.4"/>
<path d="M180,152 h18 v30 h-18 Z" fill="#4a3a20"/>
<path d="M182,154 h14 v26 h-14 Z" fill="#5a4830" opacity="0.7"/>
<circle cx="194" cy="168" r="1.6" fill="#ffd700" opacity="0.7"/>
<path d="M196,110 h7 v8 h-7 Z" fill="#5a6276"/>

<!-- and one on the far side, hipped -->
<path d="M296,182 L296,120 L340,120 L340,182 Z" fill="#6a7286"/>
<path d="M290,120 L306,102 L330,102 L346,120 Z" fill="#5a6276"/>
<path d="M306,102 L330,102 L346,120 L336,120 Z" fill="#8a9db3" opacity="0.35"/>
<path d="M302,132 h11 v14 h-11 Z M322,132 h11 v14 h-11 Z" fill="#ffeaa7" opacity="0.38"/>
<path d="M310,156 h16 v26 h-16 Z" fill="#4a3a20"/>
<circle cx="322" cy="170" r="1.5" fill="#ffd700" opacity="0.65"/>

<!-- ====================================================================
     TWO SHOPFRONTS flanking the square. A scalloped awning is the single most
     "shop" mark there is, and it gives the square somewhere to BE rather than
     a backdrop to stand in front of.
     ==================================================================== -->
<path d="M6,182 L6,104 L92,104 L92,182 Z" fill="#63758a" opacity="0"/>
<path d="M400,182 L400,112 L470,112 L470,182 Z" fill="#647689"/>
<path d="M396,112 L435,94 L474,112 Z" fill="#54667a"/>
<path d="M398,142 q10,9 20,0 q10,9 20,0 q10,9 20,0 q10,9 18,0 L476,132 L398,132 Z" fill="#8a4a3a" opacity="0.9"/>
<path d="M398,132 L476,132" stroke="#9aadc3" stroke-width="1.2" opacity="0.4"/>
<path d="M406,152 h30 v20 h-30 Z" fill="#ffeaa7" opacity="0.34"/>
<path d="M444,152 h20 v30 h-20 Z" fill="#4a3a20"/>
<circle cx="448" cy="168" r="1.5" fill="#ffd700" opacity="0.7"/>
<path d="M478,116 h12 M484,116 v10" stroke="#4a3a20" stroke-width="1.4"/>
<path d="M476,126 h18 v12 h-18 Z" fill="#6b4a20"/>
<path d="M480,130 h10 v2 h-10 Z M480,134 h6 v2 h-6 Z" fill="#ffd700" opacity="0.55"/>

<path d="M0,182 L500,182 L500,260 L0,260 Z" fill="#6a5a48"/>
<!-- ================================================================
     THE PAVING, third pass, and the fault was never the joints.

     Measured: the stones were running 2.9:1 to 3.3:1 wide-to-tall. That is a
     BRICK. A cobble is roughly square in plan and foreshortens to about 2:1 at
     a shallow viewing angle, so the square kept reading as a wall however the
     course lines were tuned. Halving the widths fixed what two passes of joint
     tuning could not.

     Setts also have their corners knocked off, and no continuous joint runs
     across a square: the stones themselves define the courses.
     ================================================================ -->
<path d="M-8.5,187.0 h13.1 q1,0 1,1 v6.4 q0,1 -1,1 h-13.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M7.4,187.0 h12.5 q1,0 1,1 v6.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M22.6,185.6 h19.2 q1,0 1,1 v6.4 q0,1 -1,1 h-19.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M44.7,186.3 h13.8 q1,0 1,1 v6.4 q0,1 -1,1 h-13.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M61.3,185.6 h10.5 q1,0 1,1 v6.4 q0,1 -1,1 h-10.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M74.6,186.3 h16.3 q1,0 1,1 v6.4 q0,1 -1,1 h-16.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M93.7,185.6 h10.3 q1,0 1,1 v6.4 q0,1 -1,1 h-10.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M106.9,187.0 h12.9 q1,0 1,1 v6.4 q0,1 -1,1 h-12.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M122.6,186.3 h15.2 q1,0 1,1 v6.4 q0,1 -1,1 h-15.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M140.5,186.3 h14.2 q1,0 1,1 v6.4 q0,1 -1,1 h-14.2 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M157.5,185.6 h11.8 q1,0 1,1 v6.4 q0,1 -1,1 h-11.8 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M172.0,187.0 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M191.4,187.0 h15.0 q1,0 1,1 v6.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M209.1,186.3 h16.5 q1,0 1,1 v6.4 q0,1 -1,1 h-16.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M228.5,186.3 h12.4 q1,0 1,1 v6.4 q0,1 -1,1 h-12.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M243.7,185.6 h18.1 q1,0 1,1 v6.4 q0,1 -1,1 h-18.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M264.5,186.3 h14.9 q1,0 1,1 v6.4 q0,1 -1,1 h-14.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M282.2,187.0 h17.4 q1,0 1,1 v6.4 q0,1 -1,1 h-17.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M302.4,185.6 h16.9 q1,0 1,1 v6.4 q0,1 -1,1 h-16.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M322.1,187.0 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M338.5,186.3 h18.4 q1,0 1,1 v6.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M359.7,186.3 h17.1 q1,0 1,1 v6.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M379.7,186.3 h18.5 q1,0 1,1 v6.4 q0,1 -1,1 h-18.5 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M401.0,186.3 h11.0 q1,0 1,1 v6.4 q0,1 -1,1 h-11.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M414.8,187.0 h17.9 q1,0 1,1 v6.4 q0,1 -1,1 h-17.9 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M435.5,185.6 h13.6 q1,0 1,1 v6.4 q0,1 -1,1 h-13.6 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M451.9,185.6 h16.0 q1,0 1,1 v6.4 q0,1 -1,1 h-16.0 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M470.7,187.0 h14.4 q1,0 1,1 v6.4 q0,1 -1,1 h-14.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M487.9,186.3 h16.4 q1,0 1,1 v6.4 q0,1 -1,1 h-16.4 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z M507.1,186.3 h17.3 q1,0 1,1 v6.4 q0,1 -1,1 h-17.3 q-1,0 -1,-1 v-6.4 q0,-1 1,-1 Z" fill="#7d6a54" opacity="0.58"/>
<path d="M-12.7,195.3 h12.5 q1,0 1,1 v8.4 q0,1 -1,1 h-12.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M2.6,194.6 h17.5 q1,0 1,1 v8.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M23.0,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M49.9,195.3 h18.0 q1,0 1,1 v8.4 q0,1 -1,1 h-18.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M70.7,195.3 h24.2 q1,0 1,1 v8.4 q0,1 -1,1 h-24.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M97.8,195.3 h21.8 q1,0 1,1 v8.4 q0,1 -1,1 h-21.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M122.3,196.0 h13.9 q1,0 1,1 v8.4 q0,1 -1,1 h-13.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M139.0,195.3 h23.8 q1,0 1,1 v8.4 q0,1 -1,1 h-23.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M165.6,195.3 h19.0 q1,0 1,1 v8.4 q0,1 -1,1 h-19.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M187.4,194.6 h14.3 q1,0 1,1 v8.4 q0,1 -1,1 h-14.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M204.5,195.3 h17.1 q1,0 1,1 v8.4 q0,1 -1,1 h-17.1 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M224.5,195.3 h12.7 q1,0 1,1 v8.4 q0,1 -1,1 h-12.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M239.9,195.3 h15.7 q1,0 1,1 v8.4 q0,1 -1,1 h-15.7 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M258.4,195.3 h14.0 q1,0 1,1 v8.4 q0,1 -1,1 h-14.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M275.2,195.3 h22.0 q1,0 1,1 v8.4 q0,1 -1,1 h-22.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M300.0,194.6 h20.8 q1,0 1,1 v8.4 q0,1 -1,1 h-20.8 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M323.5,195.3 h23.6 q1,0 1,1 v8.4 q0,1 -1,1 h-23.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M349.9,196.0 h15.0 q1,0 1,1 v8.4 q0,1 -1,1 h-15.0 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M367.7,195.3 h15.5 q1,0 1,1 v8.4 q0,1 -1,1 h-15.5 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M386.0,195.3 h15.3 q1,0 1,1 v8.4 q0,1 -1,1 h-15.3 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M404.0,196.0 h20.4 q1,0 1,1 v8.4 q0,1 -1,1 h-20.4 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M427.3,195.3 h15.6 q1,0 1,1 v8.4 q0,1 -1,1 h-15.6 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M445.7,195.3 h21.2 q1,0 1,1 v8.4 q0,1 -1,1 h-21.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M469.7,194.6 h23.9 q1,0 1,1 v8.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z M496.4,195.3 h16.2 q1,0 1,1 v8.4 q0,1 -1,1 h-16.2 q-1,0 -1,-1 v-8.4 q0,-1 1,-1 Z" fill="#836f57" opacity="0.55"/>
<path d="M-9.4,205.6 h27.9 q1,0 1,1 v11.4 q0,1 -1,1 h-27.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M21.3,205.6 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M41.6,206.3 h25.0 q1,0 1,1 v11.4 q0,1 -1,1 h-25.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M69.4,205.6 h27.7 q1,0 1,1 v11.4 q0,1 -1,1 h-27.7 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M99.9,206.3 h18.9 q1,0 1,1 v11.4 q0,1 -1,1 h-18.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M121.6,205.6 h22.4 q1,0 1,1 v11.4 q0,1 -1,1 h-22.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M146.8,207.0 h23.4 q1,0 1,1 v11.4 q0,1 -1,1 h-23.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M173.0,206.3 h33.4 q1,0 1,1 v11.4 q0,1 -1,1 h-33.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M209.2,205.6 h20.0 q1,0 1,1 v11.4 q0,1 -1,1 h-20.0 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M231.9,205.6 h31.9 q1,0 1,1 v11.4 q0,1 -1,1 h-31.9 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M266.6,207.0 h30.5 q1,0 1,1 v11.4 q0,1 -1,1 h-30.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M299.9,205.6 h20.6 q1,0 1,1 v11.4 q0,1 -1,1 h-20.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M323.3,207.0 h19.5 q1,0 1,1 v11.4 q0,1 -1,1 h-19.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M345.6,206.3 h27.6 q1,0 1,1 v11.4 q0,1 -1,1 h-27.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M376.0,205.6 h19.6 q1,0 1,1 v11.4 q0,1 -1,1 h-19.6 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M398.4,207.0 h17.5 q1,0 1,1 v11.4 q0,1 -1,1 h-17.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M418.7,205.6 h32.1 q1,0 1,1 v11.4 q0,1 -1,1 h-32.1 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M453.6,206.3 h28.2 q1,0 1,1 v11.4 q0,1 -1,1 h-28.2 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M484.6,206.3 h18.4 q1,0 1,1 v11.4 q0,1 -1,1 h-18.4 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z M505.8,206.3 h20.5 q1,0 1,1 v11.4 q0,1 -1,1 h-20.5 q-1,0 -1,-1 v-11.4 q0,-1 1,-1 Z" fill="#77644e" opacity="0.52"/>
<path d="M-8.2,221.0 h36.5 q1,0 1,1 v14.4 q0,1 -1,1 h-36.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M31.1,220.3 h25.2 q1,0 1,1 v14.4 q0,1 -1,1 h-25.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M59.1,220.3 h23.9 q1,0 1,1 v14.4 q0,1 -1,1 h-23.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M85.8,220.3 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M117.0,220.3 h21.9 q1,0 1,1 v14.4 q0,1 -1,1 h-21.9 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M141.6,220.3 h25.7 q1,0 1,1 v14.4 q0,1 -1,1 h-25.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M170.1,220.3 h30.8 q1,0 1,1 v14.4 q0,1 -1,1 h-30.8 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M203.7,220.3 h27.0 q1,0 1,1 v14.4 q0,1 -1,1 h-27.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M233.5,219.6 h28.4 q1,0 1,1 v14.4 q0,1 -1,1 h-28.4 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M264.7,220.3 h28.0 q1,0 1,1 v14.4 q0,1 -1,1 h-28.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M295.5,221.0 h37.2 q1,0 1,1 v14.4 q0,1 -1,1 h-37.2 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M335.4,220.3 h42.3 q1,0 1,1 v14.4 q0,1 -1,1 h-42.3 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M380.6,220.3 h35.5 q1,0 1,1 v14.4 q0,1 -1,1 h-35.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M418.9,220.3 h42.5 q1,0 1,1 v14.4 q0,1 -1,1 h-42.5 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M464.2,220.3 h37.7 q1,0 1,1 v14.4 q0,1 -1,1 h-37.7 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z M504.7,220.3 h26.0 q1,0 1,1 v14.4 q0,1 -1,1 h-26.0 q-1,0 -1,-1 v-14.4 q0,-1 1,-1 Z" fill="#8a765d" opacity="0.49"/>
<path d="M-17.1,237.3 h57.1 q1,0 1,1 v21.4 q0,1 -1,1 h-57.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M42.8,237.3 h53.4 q1,0 1,1 v21.4 q0,1 -1,1 h-53.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M99.0,237.3 h52.5 q1,0 1,1 v21.4 q0,1 -1,1 h-52.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M154.3,237.3 h49.5 q1,0 1,1 v21.4 q0,1 -1,1 h-49.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M206.6,236.6 h54.6 q1,0 1,1 v21.4 q0,1 -1,1 h-54.6 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M263.9,237.3 h41.7 q1,0 1,1 v21.4 q0,1 -1,1 h-41.7 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M308.4,237.3 h39.4 q1,0 1,1 v21.4 q0,1 -1,1 h-39.4 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M350.7,238.0 h49.1 q1,0 1,1 v21.4 q0,1 -1,1 h-49.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M402.5,238.0 h41.1 q1,0 1,1 v21.4 q0,1 -1,1 h-41.1 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M446.5,237.3 h54.5 q1,0 1,1 v21.4 q0,1 -1,1 h-54.5 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z M503.7,236.6 h45.9 q1,0 1,1 v21.4 q0,1 -1,1 h-45.9 q-1,0 -1,-1 v-21.4 q0,-1 1,-1 Z" fill="#71604a" opacity="0.46"/>
<!-- the kerb where the paving meets the buildings -->
<path d="M0,182 L500,182 L500,184.6 L0,184.6 Z" fill="#8a7a63" opacity="0.5"/>
<!-- wear polished into the stone where feet cross the square -->
<path d="M150,260 Q210,220 250,196 Q290,220 350,260 Z" fill="#8a765d" opacity="0.16"/>
<path d="M0,258 Q120,236 250,198 Q380,236 500,258 L500,260 L0,260 Z" fill="#5c4d3b" opacity="0.12"/>
<!-- the gold from the fountain washing up the near paving -->
<path d="M0,196 L500,196 L500,260 L0,260 Z" fill="url(#town4GoldWash)"/>

<!-- the golden aura, over the town but under the fountain itself -->
<circle cx="250" cy="158" r="150" fill="url(#goldenFountain)">
  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>

<!-- ====================================================================
     THE THREE PATHS, one to each solved place, laid on the paving BEFORE
     the fountain so the basin stands on top of where they meet. They are
     ribbons worn into the stone that widen as they come forward, not
     strokes of uniform width: a stroke cannot taper, and a track that does
     not taper reads as a painted stripe.
     ==================================================================== -->
<!-- left, to the tower -->
<path d="M214,191 Q154,196 92,205 Q46,212 0,221 L0,236 Q48,224 94,215 Q156,204 218,198 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M215,193 Q158,198 98,207 Q54,214 4,224 L1,232 Q50,221 98,212 Q158,202 217,196 Z" fill="#ffeaa7" opacity="0.22">
  <animate attributeName="opacity" values="0.13;0.33;0.13" dur="4.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- right, to the workshop -->
<path d="M286,191 Q346,196 408,205 Q454,212 500,221 L500,236 Q452,224 406,215 Q344,204 282,198 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M285,193 Q342,198 402,207 Q446,214 496,224 L499,232 Q450,221 402,212 Q342,202 283,196 Z" fill="#ffeaa7" opacity="0.22">
  <animate attributeName="opacity" values="0.13;0.33;0.13" dur="4.9s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- centre, to the library, running straight out at the player's feet and so
     the widest of the three -->
<path d="M238,196 Q234,224 228,260 L272,260 Q266,224 262,196 Z" fill="#ffd700" opacity="0.15">
  <animate attributeName="opacity" values="0.09;0.24;0.09" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M241,196 Q238,224 234,260 L266,260 Q262,224 259,196 Z" fill="#ffeaa7" opacity="0.24">
  <animate attributeName="opacity" values="0.15;0.36;0.15" dur="4.5s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- the individual setts each track is worn across, lit from beneath -->
<path d="M234,236 q16,-6 32,-1 q-15,9 -32,1 Z" fill="#ffeaa7" opacity="0.22"/>
<path d="M238,214 q12,-5 23,-1 q-11,7 -23,1 Z" fill="#ffeaa7" opacity="0.18"/>
<path d="M112,214 q18,-5 34,-8 q-16,10 -34,8 Z" fill="#ffeaa7" opacity="0.16"/>
<path d="M356,214 q18,3 34,8 q-18,2 -34,-8 Z" fill="#ffeaa7" opacity="0.16"/>
<path d="M172,204 q14,-3 27,-5 q-13,7 -27,5 Z" fill="#ffeaa7" opacity="0.14"/>
<path d="M302,204 q14,2 27,5 q-14,2 -27,-5 Z" fill="#ffeaa7" opacity="0.14"/>

<!-- ====================================================================
     THE FOUNTAIN, town_0's own, running gold. The basin was two flat
     ellipses; it now has a coping you can see the thickness of, and the
     pillar tapers and carries its mouldings.
     ==================================================================== -->
<path d="M190,190 Q250,180 310,190 Q250,204 190,190 Z" fill="#5c4d3b" opacity="0.3"/>
<!-- far wall and the pool it holds -->
<path d="M195,183 Q250,173 305,183 Q250,191 195,183 Z" fill="#8a8a9a"/>
<path d="M199,183 Q250,175 301,183 Q250,196 199,183 Z" fill="#aa8820" opacity="0.55"/>
<path d="M203,183 Q250,176 297,183 Q250,190 203,183 Z" fill="#ffd700" opacity="0.34">
  <animate attributeName="opacity" values="0.2;0.48;0.2" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<!-- near coping, over the pool -->
<path d="M193,185 Q250,199 307,185 L306,193 Q250,209 194,193 Z" fill="#7c7c8c"/>
<path d="M193,185 Q250,199 307,185 Q250,195 193,185 Z" fill="#9a9aaa"/>
<path d="M197,185.4 Q250,196 303,185.4 Q250,192 197,185.4 Z" fill="#aaaabc" opacity="0.5"/>
<g stroke="#5a5a6a" stroke-width="0.9" opacity="0.45" fill="none">
  <path d="M210,189 L209,199 M232,193 L231,204 M268,193 L269,204 M290,189 L291,199"/>
</g>
<path d="M193,190 Q250,204 307,190 L306,193 Q250,209 194,193 Z" fill="#4a4a5a" opacity="0.3"/>
<!-- the pillar, tapering, on its plinth -->
<path d="M238,175 Q250,171 262,175 Q250,180 238,175 Z" fill="#7c7c8c"/>
<path d="M239,175 L261,175 L260,181 Q250,184 240,181 Z" fill="#6a6a7a"/>
<path d="M242,177 L258,177 L256,142 L244,142 Z" fill="#9a9aaa"/>
<path d="M245,177 L252,177 L251,142 L246,142 Z" fill="#aaaabc" opacity="0.5"/>
<path d="M256,177 L258,177 L256,142 L254,142 Z" fill="#6a6a7a" opacity="0.55"/>
<path d="M240,173 Q250,169 260,173 Q250,178 240,173 Z" fill="#9a9aaa"/>
<path d="M241,148 Q250,145 259,148 Q250,152 241,148 Z" fill="#9a9aaa"/>
<!-- the upper bowl, with its underside showing -->
<path d="M228,140 Q250,131 272,140 Q268,150 250,153 Q232,150 228,140 Z" fill="#7c7c8c"/>
<path d="M228,140 Q250,131 272,140 Q250,147 228,140 Z" fill="#9a9aaa"/>
<path d="M233,139.6 Q250,134 267,139.6 Q250,144 233,139.6 Z" fill="#aa8820" opacity="0.55"/>
<path d="M236,139 Q250,135 264,139 Q250,142 236,139 Z" fill="#ffd700" opacity="0.4">
  <animate attributeName="opacity" values="0.24;0.56;0.24" dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- ====================================================================
     THE GOLDEN SURGE. Straight lines do not read as water. A jet rises,
     slows and falls back, so it is arcs from one nozzle plus the column.
     ==================================================================== -->
<path d="M250,134 Q249,104 248,80" fill="none" stroke="#ffd700" stroke-width="3.4" opacity="0.6" stroke-linecap="round" filter="url(#goldenGlow)">
  <animate attributeName="opacity" values="0.38;0.8;0.38" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M248,80 Q247,66 247,54" fill="none" stroke="#ffeaa7" stroke-width="2" opacity="0.42" stroke-linecap="round">
  <animate attributeName="opacity" values="0.22;0.6;0.22" dur="2.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M247,56 Q238,78 222,110 Q214,126 210,140" fill="none" stroke="#ffd700" stroke-width="1.6" opacity="0.38" stroke-linecap="round">
  <animate attributeName="opacity" values="0.2;0.54;0.2" dur="3.6s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M249,56 Q258,78 274,110 Q282,126 288,140" fill="none" stroke="#ffd700" stroke-width="1.6" opacity="0.38" stroke-linecap="round">
  <animate attributeName="opacity" values="0.2;0.54;0.2" dur="3.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M244,140 Q232,116 216,138" fill="none" stroke="#ffeaa7" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>
<path d="M256,140 Q268,116 284,138" fill="none" stroke="#ffeaa7" stroke-width="1.3" opacity="0.32" stroke-linecap="round"/>
<!-- where the two sheets strike the pool -->
<path d="M204,184 q10,-3 20,0 q-10,4 -20,0 Z" fill="#ffeaa7" opacity="0.32">
  <animate attributeName="opacity" values="0.16;0.46;0.16" dur="3.6s" begin="0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M276,184 q10,-3 20,0 q-10,4 -20,0 Z" fill="#ffeaa7" opacity="0.3">
  <animate attributeName="opacity" values="0.14;0.44;0.14" dur="3.2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>

<!-- sparks carried up off the top of the jet, each on its own timing so they
     do not pulse in unison -->
<path d="M248,48 q2.4,-1.4 3.6,1.2 q-1.2,3.4 -3.6,3.4 q-2.4,-2.4 0,-4.6 Z" fill="#ffd700" opacity="0.5" filter="url(#goldenGlow)">
  <animate attributeName="opacity" values="0.7;0.9;0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-2,-18;-6,-32" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M240,60 q2,-1.2 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#ffeaa7" opacity="0.42">
  <animate attributeName="opacity" values="0.55;0.8;0" dur="3.3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-3,-16;-8,-28" dur="3.3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M260,66 q2,-1.2 3,1 q-1,3 -3,3 q-2,-2 0,-4 Z" fill="#ffeaa7" opacity="0.42">
  <animate attributeName="opacity" values="0.55;0.8;0" dur="3.05s" begin="1.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;4,-15;9,-27" dur="3.05s" begin="1.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M232,72 q1.6,-1 2.4,0.8 q-0.8,2.4 -2.4,2.4 q-1.6,-1.6 0,-3.2 Z" fill="#ffd700" opacity="0.32">
  <animate attributeName="opacity" values="0.44;0.7;0" dur="3.7s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;-4,-14;-10,-26" dur="3.7s" begin="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>
<path d="M268,54 q1.6,-1 2.4,0.8 q-0.8,2.4 -2.4,2.4 q-1.6,-1.6 0,-3.2 Z" fill="#ffd700" opacity="0.32">
  <animate attributeName="opacity" values="0.44;0.7;0" dur="2.85s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>
  <animateTransform attributeName="transform" type="translate" values="0,0;5,-13;11,-24" dur="2.85s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.35;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" additive="sum"/>
</path>

<!-- ====================================================================
     THE LANTERNS, town_0's pair, lit brighter now the square is running
     gold. A lantern is a cage with a peaked cap and a ring, not a box.
     ==================================================================== -->
<path d="M117,146 L123,146 L124,182 L116,182 Z" fill="#5a4a2a"/>
<path d="M117,146 L120,146 L121,182 L118,182 Z" fill="#7a6a45" opacity="0.5"/>
<path d="M111,140 L129,140 L131,146 L109,146 Z" fill="#6a5a3a"/>
<path d="M111,140 L120,131 L129,140 Z" fill="#8a7a52"/>
<path d="M110,146 L130,146 L128,164 L112,164 Z" fill="#6a5a3a"/>
<path d="M113,148 L127,148 L125,162 L115,162 Z" fill="#ffeaa7" opacity="0.72">
  <animate attributeName="opacity" values="0.52;0.84;0.6;0.78;0.52" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M120,148 v14 M113,155 h14" stroke="#6a5a3a" stroke-width="0.9" opacity="0.7"/>
<path d="M109,164 L131,164 L129,168 L111,168 Z" fill="#6a5a3a"/>
<circle cx="120" cy="155" r="20" fill="url(#lanternGlow4)" opacity="0.55">
  <animate attributeName="opacity" values="0.4;0.72;0.48;0.66;0.4" dur="4.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
<path d="M377,146 L383,146 L384,182 L376,182 Z" fill="#5a4a2a"/>
<path d="M377,146 L380,146 L381,182 L378,182 Z" fill="#7a6a45" opacity="0.5"/>
<path d="M371,140 L389,140 L391,146 L369,146 Z" fill="#6a5a3a"/>
<path d="M371,140 L380,131 L389,140 Z" fill="#8a7a52"/>
<path d="M370,146 L390,146 L388,164 L372,164 Z" fill="#6a5a3a"/>
<path d="M373,148 L387,148 L385,162 L375,162 Z" fill="#ffeaa7" opacity="0.72">
  <animate attributeName="opacity" values="0.52;0.84;0.6;0.78;0.52" dur="5.1s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</path>
<path d="M380,148 v14 M373,155 h14" stroke="#6a5a3a" stroke-width="0.9" opacity="0.7"/>
<path d="M369,164 L391,164 L389,168 L371,168 Z" fill="#6a5a3a"/>
<circle cx="380" cy="155" r="20" fill="url(#lanternGlow4)" opacity="0.55">
  <animate attributeName="opacity" values="0.4;0.72;0.48;0.66;0.4" dur="5.1s" begin="0.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.28;0.55;0.8;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"/>
</circle>
</svg>`;

// Scene 5 (complete): Three paths glow golden — same visual as scene 4
STORY_SCENES['town_5'] = STORY_SCENES['town_4'];
