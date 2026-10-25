// Adventure Tower story scenes — "Adventure Tower"
// Keys: adventure_0 through adventure_6 (4-5 are the wall rune, 6 the mountain trail)
// DRAFT — for review only

// ====================================================================
// MYSTIC PEAK: ONE mountain, ONE trail, ONE observatory, shared by
// adventure_3 (far, from the tower) and adventure_6 (mid, from the trail).
// They used to carry pasted copies; now a change here lands in both.
//
// Native frame: base at y=230, summit plateau y=97 (x 215..291), observatory
// door at (251,90). Light from the west: lit west face, shadowed east face.
// The trail is ONE continuous switchback ribbon (bank + tread + lit lip) that
// narrows with height and runs from the foot to the door.
//
//   advPeak(prefix, tx, ty, scale, opts)  ->  '<g transform=...>...</g>'
//   prefix: unique per scene, so gradient ids never collide.
//   opts.trailClipY: hide the trail below this native y (default 230, the foot);
//   adventure_6 raises it to where its own foreground trail takes over.
//   opts.foot: a colour the mountain's foot fades into, for scenes where the
//   foot is not hidden behind foreground (adventure_3's sea, adventure_6's flank).
// ====================================================================
function advRibbon(pts, r, widthAt) {
  var f = function (n) { return Math.round(n * 10) / 10; };
  var nrm = function (x, y) { var l = Math.hypot(x, y); return [x / l, y / l]; };
  var c = [], legs = [], legStart = 0, i, k;
  var d0 = nrm(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
  c.push([pts[0][0], pts[0][1], d0[0], d0[1]]);
  for (i = 1; i < pts.length - 1; i++) {
    var p = pts[i];
    var a = nrm(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]);
    var b = nrm(pts[i + 1][0] - p[0], pts[i + 1][1] - p[1]);
    var s = [p[0] - a[0] * r, p[1] - a[1] * r], e = [p[0] + b[0] * r, p[1] + b[1] * r];
    c.push([s[0], s[1], a[0], a[1]]);
    legs.push([legStart, c.length - 1]);
    for (k = 1; k < 10; k++) {
      var t = k / 10, u = 1 - t;
      var d = nrm(2 * u * (p[0] - s[0]) + 2 * t * (e[0] - p[0]), 2 * u * (p[1] - s[1]) + 2 * t * (e[1] - p[1]));
      c.push([u * u * s[0] + 2 * u * t * p[0] + t * t * e[0], u * u * s[1] + 2 * u * t * p[1] + t * t * e[1], d[0], d[1]]);
    }
    c.push([e[0], e[1], b[0], b[1]]);
    legStart = c.length - 1;
  }
  var q = pts[pts.length - 1], dl = nrm(q[0] - pts[pts.length - 2][0], q[1] - pts[pts.length - 2][1]);
  c.push([q[0], q[1], dl[0], dl[1]]);
  legs.push([legStart, c.length - 1]);
  function band(extra, dy) {
    var L = [], R = [];
    c.forEach(function (o) {
      var h = (widthAt(o[1]) + extra) / 2;
      L.push(f(o[0] - o[3] * h) + ',' + f(o[1] + o[2] * h + dy));
      R.push(f(o[0] + o[3] * h) + ',' + f(o[1] - o[2] * h + dy));
    });
    return 'M' + L.concat(R.reverse()).join(' L') + ' Z';
  }
  var lip = legs.map(function (lg) {
    var seg = [];
    for (var j = lg[0]; j <= lg[1]; j++) {
      var o = c[j], nx = -o[3], ny = o[2];
      if (ny < 0) { nx = -nx; ny = -ny; }
      var h = widthAt(o[1]) / 2;
      seg.push(f(o[0] + nx * h) + ',' + f(o[1] + ny * h));
    }
    return 'M' + seg.join(' L');
  }).join(' ');
  return { bank: band(2.6, -1.4), tread: band(0, 0), lip: lip };
}
var ADV_TRAIL_PTS = [[198, 230], [304, 200], [176, 174], [284, 148], [216, 124], [252, 96]];
// The ribbon starts at the bottom of a 1:1 frame (112,270) so a close scene can
// lay the near stretch over its foreground (advTrailLead); advPeak clips it at
// the mountain's foot, so the far scenes only ever show the mountain part.
var ADV_TRAIL = advRibbon([[112, 270], [128, 244]].concat(ADV_TRAIL_PTS), 10, function (y) {
  return y > 230 ? 11 + (Math.min(270, y) - 230) / 40 * 13
                 : 3.4 + (Math.max(100, y) - 100) / 130 * 7.6;
});
function advTrailMarkup(g) {
  return '<path d="' + g.bank + '" fill="#231a3e" opacity="0.7"/>' +
    '<path d="' + g.tread + '" fill="#8a7a9a" opacity="0.82"/>' +
    '<path d="' + g.lip + '" fill="none" stroke="#b8a8cc" stroke-width="0.8" opacity="0.55" stroke-linecap="round" stroke-linejoin="round"/>';
}

function advPeak(p, tx, ty, s, opts) {
  opts = opts || {};
  var west = 'M60,230 L92,212 L116,199 L132,186 L148,174 L160,163 L174,152 L184,139 L196,126 L203,114 L209,104 L215,97 L258,97 L262,112 L258,130 L268,150 L264,172 L276,196 L272,230 Z';
  var east = 'M258,97 L291,97 L297,103 L305,113 L313,125 L324,138 L333,150 L346,166 L361,181 L379,197 L400,212 L436,230 L272,230 L276,196 L264,172 L268,150 L258,130 L262,112 Z';
  var clipY = opts.trailClipY || 230;
  var foot = 'M60,230 L92,212 L116,199 L132,186 L148,174 L160,163 L174,152 L346,166 L361,181 L379,197 L400,212 L436,230 L432,236 L64,236 Z';
  var marks = ADV_TRAIL_PTS.slice(1, -1).map(function (m) {
    return '<path d="M' + m[0] + ',' + (m[1] - 2.4) + ' l1.6,2.4 l-1.6,1.4 l-1.6,-1.4 Z" fill="#ffd700" opacity="0.5"/>';
  }).join('');
  return '<g transform="translate(' + tx + ' ' + ty + ') scale(' + s + ')"><defs>' +
    '<linearGradient id="' + p + 'Lit" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#65508e"/><stop offset="100%" stop-color="#46366a"/></linearGradient>' +
    '<linearGradient id="' + p + 'Shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#40315f"/><stop offset="100%" stop-color="#30244e"/></linearGradient>' +
    '<linearGradient id="' + p + 'Haze" gradientUnits="userSpaceOnUse" x1="0" y1="168" x2="0" y2="236"><stop offset="0%" stop-color="#5a4a7a" stop-opacity="0"/><stop offset="100%" stop-color="#5a4a7a" stop-opacity="0.5"/></linearGradient>' +
    '<radialGradient id="' + p + 'Wash" cx="50%" cy="30%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.12"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="' + p + 'Glint" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#e0e0ff" stop-opacity="0.5"/><stop offset="100%" stop-color="#e0e0ff" stop-opacity="0"/></radialGradient>' +
    '<filter id="' + p + 'Glow"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>' +
    (opts.foot ? '<linearGradient id="' + p + 'Foot" gradientUnits="userSpaceOnUse" x1="0" y1="200" x2="0" y2="234"><stop offset="0%" stop-color="' + opts.foot + '" stop-opacity="0"/><stop offset="100%" stop-color="' + opts.foot + '"/></linearGradient>' : '') +
    '<clipPath id="' + p + 'Clip"><rect x="0" y="0" width="500" height="' + clipY + '"/></clipPath>' +
    '</defs>' +
    // the two faces, meeting at a central spur that drops from the summit
    '<path d="' + west + '" fill="url(#' + p + 'Lit)"/>' +
    '<path d="' + east + '" fill="url(#' + p + 'Shade)"/>' +
    // rim light along the west skyline
    '<path d="M60,230 L92,212 L116,199 L132,186 L148,174 L160,163 L174,152 L184,139 L196,126 L203,114 L209,104 L215,97 L224,97 L214,110 L204,128 L190,146 L172,164 L150,184 L124,204 L98,222 L80,230 Z" fill="#7a66a6" opacity="0.32"/>' +
    // a secondary ridge on the west face: lit crest, shadowed gully beside it
    '<path d="M234,100 L212,150 L188,196 L168,230 L178,230 L196,196 L218,150 Z" fill="#7562a0" opacity="0.3"/>' +
    '<path d="M236,102 L222,150 L200,196 L184,230 L196,230 L208,196 L228,150 Z" fill="#3a2c5c" opacity="0.38"/>' +
    // the spur itself catches a thin line of light on its west side
    '<path d="M258,97 L262,112 L258,130 L268,150 L264,172 L276,196 L272,230 L268,230 L272,196 L260,172 L264,150 L254,130 L258,112 Z" fill="#7a66a6" opacity="0.28"/>' +
    // gullies and a lesser spur cut into the shadowed east face
    '<path d="M296,104 L304,126 L300,150 L312,176 L306,202 L298,176 L292,150 L294,126 Z" fill="#231a3e" opacity="0.45"/>' +
    '<path d="M330,148 L342,170 L338,194 L330,172 Z" fill="#231a3e" opacity="0.4"/>' +
    '<path d="M278,106 L288,128 L284,152 L292,178 L290,204 L282,178 L278,152 L280,128 Z" fill="#4c3c74" opacity="0.32"/>' +
    // outcrops: a lit top plane over a dark side
    '<path d="M106,214 L122,204 L138,210 L134,220 L110,220 Z" fill="#3a2c5c" opacity="0.6"/><path d="M106,214 L122,204 L138,210 L122,212 Z" fill="#7a66a6" opacity="0.4"/>' +
    '<path d="M348,186 L362,178 L374,186 L368,194 L350,193 Z" fill="#2a2048" opacity="0.6"/><path d="M348,186 L362,178 L374,186 L360,188 Z" fill="#54447a" opacity="0.45"/>' +
    // snow held on the summit shoulders
    '<path d="M209,104 L215,97 L228,97 L219,101 L213,110 Z" fill="#c6c6da" opacity="0.3"/>' +
    '<path d="M291,97 L297,103 L302,111 L293,104 L282,97 Z" fill="#c6c6da" opacity="0.22"/>' +
    // the summit plateau's rim, which the footing stands on
    '<path d="M215,97 L291,97 L289,100.5 L217,100.5 Z" fill="#6c5a92" opacity="0.6"/>' +
    // scree apron at the foot
    '<path d="M70,228 Q170,214 250,218 Q340,214 426,228 L432,236 L64,236 Z" fill="#3a2c5a" opacity="0.6"/>' +
    // THE TRAIL, one continuous ribbon, foot to door
    '<g clip-path="url(#' + p + 'Clip)">' + advTrailMarkup(ADV_TRAIL) + marks + '</g>' +
    // the east face's shadow falls across the trail where it crosses
    '<path d="' + east + '" fill="#231a3e" opacity="0.22"/>' +
    // mist pooling at the foot
    '<path d="' + foot + '" fill="url(#' + p + 'Haze)"/>' +
    // where the foot is not hidden by foreground, it dissolves into the scene's ground tone
    (opts.foot ? '<path d="' + foot + '" fill="url(#' + p + 'Foot)"/>' : '') +
    // THE OBSERVATORY: footing on the plateau, drum, door, lit windows, dome
    '<path d="M218,90 L286,90 L288,97 L216,97 Z" fill="#55557a"/>' +
    '<path d="M218,90 L286,90 L286.5,92 L217.5,92 Z" fill="#7a7a9e" opacity="0.5"/>' +
    '<path d="M244,93.5 L258,93.5 L259,97 L243,97 Z" fill="#6a6a8e"/>' +
    '<path d="M245,90 L257,90 L257.5,93.5 L244.5,93.5 Z" fill="#7a7a9e"/>' +
    '<path d="M228,68 L276,68 L278,90 L226,90 Z" fill="#6f6f92"/>' +
    '<path d="M228,68 L250,68 L250,90 L226,90 Z" fill="#8a8ab0" opacity="0.4"/>' +
    '<path d="M226,72 L278,72 L278,75 L226,75 Z" fill="#4e4e70" opacity="0.6"/>' +
    '<path d="M244,78 L258,78 L258,90 L244,90 Z" fill="#241a38" opacity="0.85"/>' +
    '<path d="M246,80 Q251,77 256,80 L256,90 L246,90 Z" fill="#ffd700" opacity="0.32"/>' +
    '<path d="M238,90 Q251,86 264,90 Q251,96 238,90 Z" fill="#ffd700" opacity="0.16"/>' +
    '<path d="M232,78 Q236,76 240,78 L240,85 Q236,87 232,85 Z" fill="#ffd700" opacity="0.35"/>' +
    '<path d="M262,78 Q266,76 270,78 L270,85 Q266,87 262,85 Z" fill="#ffd700" opacity="0.3"/>' +
    '<path d="M224,68 Q224,42 252,42 Q280,42 280,68 Z" fill="#8a8aaa"/>' +
    '<path d="M224,68 Q224,42 252,42 L252,68 Z" fill="#a4a4c6" opacity="0.35"/>' +
    '<path d="M238,45 Q234,56 233,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>' +
    '<path d="M266,45 Q270,56 271,68" fill="none" stroke="#6f6f92" stroke-width="0.9" opacity="0.4"/>' +
    '<path d="M248,42 L258,43 L258,68 L248,68 Z" fill="#241a38" opacity="0.7"/>' +
    '<path d="M248,42 L252,42 L252,68 L248,68 Z" fill="#3a2a52" opacity="0.5"/>' +
    '<path d="M250.6,35 L253.4,35 L253.4,42 L250.6,42 Z" fill="#a4a4c6" opacity="0.6"/>' +
    '<path d="M252,31 a2.2,2.2 0 1,1 0.1,0 Z" fill="#b4b4d4" opacity="0.5"/>' +
    '<circle cx="252" cy="52" r="14" fill="url(#' + p + 'Glint)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>' +
    '<circle cx="240" cy="50" r="2" fill="#f0f0ff" opacity="0.5" filter="url(#' + p + 'Glow)"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/></circle>' +
    '<circle cx="252" cy="88" r="28" fill="url(#' + p + 'Wash)" opacity="0.5"/>' +
    '</g>';
}
// For a close (1:1) view of the peak; unused since the close-up adventure_4 became
// the wall rune, kept so a 1:1 mountain shot can return without redrawing.
// The same ribbon again, clipped to the stretch below the
// ground line (y0) and drawn over the foreground rock. Same geometry, so the
// near and far parts join without a seam.
function advTrailLead(p, y0) {
  return '<defs><clipPath id="' + p + 'Lead"><rect x="0" y="' + y0 + '" width="500" height="' + (280 - y0) + '"/></clipPath></defs>' +
    '<g clip-path="url(#' + p + 'Lead)">' + advTrailMarkup(ADV_TRAIL) + '</g>';
}


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
    <text x="231" y="152" text-anchor="middle" fill="#ffd700" font-family="Georgia,serif" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2727;</text>
    <text x="244" y="152" text-anchor="middle" fill="#ffd700" font-family="Georgia,serif" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.9s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2738;</text>
    <text x="257" y="152" text-anchor="middle" fill="#ffd700" font-family="Georgia,serif" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" begin="0.6s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2726;</text>
    <text x="270" y="152" text-anchor="middle" fill="#ffd700" font-family="Georgia,serif" font-size="16" font-weight="bold" opacity="0.9"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.1s" repeatCount="indefinite" begin="0.9s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"/>&#x2740;</text>
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
</defs><rect width="500" height="260" fill="#211438"/>
<!-- Mystic Peak, far: the shared asset (advPeak, top of file). -->
` + advPeak('adv3Pk', 162, 60, 0.62, { foot: '#231838' }) + `
<!-- the water the island sits in -->
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

// ====================================================================
// THE RUNE ON THE TOWER WALL, steps 4 and 5. Same room and same guardian as
// adventure_1 (arch, coursed masonry, flagstones, hewn spectral guardian), with
// the camera shifted so the arch sits left and the wall to its right carries
// one dressed stone with an ABSTRACT rune cut into it: a glyph, never letters.
//
//   advRuneRoom(p, ax)          -> wall, arch centred on ax, floor
//   advRuneStone(p, x, y, lit)  -> the dressed stone + carved rune; lit:
//                                  'waking' (step 4) or 'bright' (step 5)
//   advGuardian(p, gx, pose)    -> adventure_1's guardian standing at gx;
//                                  pose: 'think' (hand to chin, waiting) or
//                                  'discover' (arm opened toward the rune)
// p is a per-scene id prefix so gradient/filter ids never collide.
// ====================================================================
var ADV_EASE = 'calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"';

function advRuneRoom(p, ax) {
  return '<defs><linearGradient id="' + p + 'Bg" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#1a1030"/><stop offset="60%" stop-color="#2a1a4a"/><stop offset="100%" stop-color="#3a2a5a"/></linearGradient></defs>' +
    '<rect width="500" height="260" fill="url(#' + p + 'Bg)"/>' +
    // far wall, dark: distance in a dim interior means darker
    '<path d="M0,0 L500,0 L500,222 L0,222 Z" fill="#38384c" opacity="0.45"/>' +
    // masonry: the same staggered courses as adventure_1
    '<g fill="#4c4c64" opacity="0.55">' +
    '<rect x="4" y="10" width="56" height="22"/><rect x="64" y="10" width="44" height="22"/><rect x="112" y="10" width="60" height="22"/><rect x="176" y="10" width="48" height="22"/><rect x="228" y="10" width="58" height="22"/><rect x="290" y="10" width="46" height="22"/><rect x="340" y="10" width="54" height="22"/><rect x="398" y="10" width="50" height="22"/><rect x="452" y="10" width="44" height="22"/>' +
    '<rect x="-14" y="35" width="50" height="22"/><rect x="40" y="35" width="58" height="22"/><rect x="102" y="35" width="46" height="22"/><rect x="152" y="35" width="56" height="22"/><rect x="212" y="35" width="44" height="22"/><rect x="260" y="35" width="60" height="22"/><rect x="324" y="35" width="48" height="22"/><rect x="376" y="35" width="56" height="22"/><rect x="436" y="35" width="50" height="22"/>' +
    '<rect x="4" y="60" width="46" height="22"/><rect x="54" y="60" width="60" height="22"/><rect x="118" y="60" width="44" height="22"/><rect x="166" y="60" width="54" height="22"/><rect x="224" y="60" width="50" height="22"/><rect x="278" y="60" width="56" height="22"/><rect x="338" y="60" width="44" height="22"/><rect x="386" y="60" width="58" height="22"/><rect x="448" y="60" width="48" height="22"/>' +
    '<rect x="-10" y="85" width="54" height="22"/><rect x="48" y="85" width="44" height="22"/><rect x="96" y="85" width="58" height="22"/><rect x="158" y="85" width="48" height="22"/><rect x="210" y="85" width="56" height="22"/><rect x="270" y="85" width="44" height="22"/><rect x="318" y="85" width="60" height="22"/><rect x="382" y="85" width="46" height="22"/><rect x="432" y="85" width="54" height="22"/>' +
    '<rect x="6" y="110" width="58" height="22"/><rect x="68" y="110" width="46" height="22"/><rect x="118" y="110" width="54" height="22"/><rect x="176" y="110" width="44" height="22"/><rect x="224" y="110" width="60" height="22"/><rect x="288" y="110" width="48" height="22"/><rect x="340" y="110" width="50" height="22"/><rect x="394" y="110" width="56" height="22"/><rect x="454" y="110" width="42" height="22"/>' +
    '<rect x="-8" y="135" width="48" height="22"/><rect x="44" y="135" width="56" height="22"/><rect x="104" y="135" width="44" height="22"/><rect x="152" y="135" width="58" height="22"/><rect x="214" y="135" width="46" height="22"/><rect x="264" y="135" width="54" height="22"/><rect x="322" y="135" width="50" height="22"/><rect x="376" y="135" width="44" height="22"/><rect x="424" y="135" width="60" height="22"/>' +
    '<rect x="2" y="160" width="56" height="22"/><rect x="62" y="160" width="48" height="22"/><rect x="114" y="160" width="58" height="22"/><rect x="176" y="160" width="46" height="22"/><rect x="226" y="160" width="54" height="22"/><rect x="284" y="160" width="44" height="22"/><rect x="332" y="160" width="60" height="22"/><rect x="396" y="160" width="48" height="22"/><rect x="448" y="160" width="46" height="22"/>' +
    '<rect x="-12" y="185" width="52" height="22"/><rect x="44" y="185" width="60" height="22"/><rect x="108" y="185" width="44" height="22"/><rect x="156" y="185" width="54" height="22"/><rect x="214" y="185" width="48" height="22"/><rect x="266" y="185" width="56" height="22"/><rect x="326" y="185" width="46" height="22"/><rect x="376" y="185" width="50" height="22"/><rect x="430" y="185" width="56" height="22"/>' +
    '</g>' +
    // outer corners fall away into the dark
    '<path d="M0,0 L60,0 L50,222 L0,222 Z" fill="#1a1030" opacity="0.4"/>' +
    '<path d="M450,0 L500,0 L500,222 L460,222 Z" fill="#1a1030" opacity="0.35"/>' +
    // damp staining and spalls, as adventure_1
    '<path d="M96,60 q3,14 -1,28 q-2,10 1,20 q-5,-9 -4,-21 q1,-15 4,-27 Z" fill="#2f2f44" opacity="0.26"/>' +
    '<path d="M330,86 q4,16 0,30 q-2,12 2,22 q-6,-10 -5,-23 q1,-16 3,-29 Z" fill="#2f2f44" opacity="0.22"/>' +
    '<path d="M440,160 q10,-2 17,3 q-6,7 -15,5 q-6,-3 -2,-8 Z" fill="#3e3e56" opacity="0.42"/>' +
    '<path d="M28,206 q7,-8 13,-2 q6,-9 12,-1 q5,-6 10,2 q-10,7 -22,7 q-11,0 -13,-6 Z" fill="#3c4a4a" opacity="0.22"/>' +
    // the arch, moved as one piece so it stays the same arch as adventure_1
    '<g transform="translate(' + (ax - 250) + ' 0)">' +
    '<path d="M120,0 L380,0 L380,222 L120,222 Z" fill="#6a6a8a" opacity="0.08"/>' +
    '<path d="M158,222 L158,124 Q250,62 342,124 L342,222 Z" fill="#0d0820"/>' +
    '<path d="M166,222 L166,128 Q250,70 334,128 L334,222 Z" fill="#0a0618"/>' +
    '<g fill="#565672" opacity="0.85">' +
    '<path d="M154,126 L166,130 L172,116 L158,110 Z"/><path d="M158,110 L172,116 L182,102 L169,95 Z"/><path d="M169,95 L182,102 L196,90 L185,82 Z"/>' +
    '<path d="M185,82 L196,90 L213,80 L205,71 Z"/><path d="M205,71 L213,80 L232,74 L227,63 Z"/><path d="M227,63 L232,74 L250,72 L250,60 Z"/>' +
    '<path d="M250,60 L250,72 L268,74 L273,63 Z"/><path d="M273,63 L268,74 L287,80 L295,71 Z"/><path d="M295,71 L287,80 L304,90 L315,82 Z"/>' +
    '<path d="M315,82 L304,90 L318,102 L331,95 Z"/><path d="M331,95 L318,102 L328,116 L342,110 Z"/><path d="M342,110 L328,116 L334,130 L346,126 Z"/>' +
    '</g>' +
    '<path d="M239,58 L261,58 L266,74 L234,74 Z" fill="#6e6e8c"/><path d="M239,58 L261,58 L262,62 L238,62 Z" fill="#8f8fae" opacity="0.5"/>' +
    '<path d="M146,124 L178,124 L178,132 L146,132 Z" fill="#5e5e7a"/><path d="M146,124 L178,124 L178,126.5 L146,126.5 Z" fill="#8f8fae" opacity="0.45"/>' +
    '<path d="M322,124 L354,124 L354,132 L322,132 Z" fill="#5e5e7a"/><path d="M322,124 L354,124 L354,126.5 L322,126.5 Z" fill="#8f8fae" opacity="0.45"/>' +
    '<g opacity="0.75"><rect x="150" y="132" width="18" height="22" fill="#525270"/><rect x="150" y="156" width="18" height="22" fill="#525270"/><rect x="150" y="180" width="18" height="22" fill="#525270"/><rect x="150" y="204" width="18" height="18" fill="#525270"/>' +
    '<rect x="332" y="132" width="18" height="22" fill="#484864"/><rect x="332" y="156" width="18" height="22" fill="#484864"/><rect x="332" y="180" width="18" height="22" fill="#484864"/><rect x="332" y="204" width="18" height="18" fill="#484864"/></g>' +
    '<path d="M196,222 q54,-5 108,0 q-30,7 -54,7 q-24,0 -54,-7 Z" fill="#241634" opacity="0.4"/>' +
    '</g>' +
    // the floor: flagstones widening as they come forward
    '<path d="M0,222 L500,222 L500,260 L0,260 Z" fill="#2a1a3a" opacity="0.75"/>' +
    '<path d="M0,222 Q250,218 500,222 L500,226 Q250,222 0,226 Z" fill="#4a3a5a" opacity="0.5"/>' +
    '<g fill="none" stroke="#1e1230" stroke-width="1.1" opacity="0.5">' +
    '<path d="M0,232 h500 M0,244 h500"/>' +
    '<path d="M62,226 L46,232 M148,226 L140,232 M232,226 L228,232 M318,226 L322,232 M404,226 L412,232"/>' +
    '<path d="M18,232 L2,244 M104,232 L94,244 M190,232 L186,244 M276,232 L278,244 M362,232 L370,244 M448,232 L462,244"/>' +
    '<path d="M56,244 L38,260 M144,244 L134,260 M232,244 L228,260 M320,244 L326,260 M408,244 L420,260"/>' +
    '</g>' +
    '<path d="M' + (ax - 80) + ',222 Q' + ax + ',214 ' + (ax + 80) + ',222 Q' + (ax + 50) + ',252 ' + ax + ',258 Q' + (ax - 50) + ',252 ' + (ax - 80) + ',222 Z" fill="#6a5a9a" opacity="0.1"/>';
}

// The rune glyph: a broken ring, a stave through it, two branches and a
// footing chevron. Abstract on purpose; it reads as "carved sign", not text.
// The branches are deliberately offset and the stave carries one side tick, so
// the sign is asymmetric and never settles into a Psi/Phi/peace-sign letterform.
var ADV_RUNE_GLYPH = 'M-6,-17.5 A17.5,17.5 0 0 0 -17,4 M-15,9.5 A17.5,17.5 0 0 0 6,17 ' +
  'M11.5,13 A17.5,17.5 0 0 0 15,-8.5 M11,-13.5 A17.5,17.5 0 0 0 0,-17.5 ' +
  'M0,-24 L0,22 M0,-4 L-10,-13 M0,-4 L6,-9.5 M0,3 L-6,3 M-7,15 L0,8 L7,15';

function advRuneStone(p, x, y, lit) {
  var bright = lit === 'bright';
  var glow = bright ? '0.75;1;0.75' : '0.3;0.85;0.3';
  var halo = bright ? '0.45;0.7;0.45' : '0.08;0.4;0.08';
  return '<defs><radialGradient id="' + p + 'Halo" cx="50%" cy="50%" r="50%">' +
    '<stop offset="0%" stop-color="#ffd700" stop-opacity="0.55"/><stop offset="55%" stop-color="#ffd700" stop-opacity="0.14"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/></radialGradient>' +
    '<filter id="' + p + 'Bloom" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>' +
    '<g transform="translate(' + x + ' ' + y + ')">' +
    // the dressed stone: proud of the coursing, lit top-left, shadowed lower-right
    '<path d="M-34,-40 L34,-40 L36,40 L-36,40 Z" fill="#1e1830" opacity="0.45" transform="translate(3 3)"/>' +
    '<path d="M-34,-40 L34,-40 L36,40 L-36,40 Z" fill="#5a5a78"/>' +
    '<path d="M-34,-40 L34,-40 L32,-36 L-31,-36 L-33,37 L-36,40 Z" fill="#7a7a9a" opacity="0.6"/>' +
    '<path d="M34,-40 L36,40 L-36,40 L-32,36 L31,36 L32,-36 Z" fill="#3e3e58" opacity="0.6"/>' +
    '<path d="M-26,-30 q4,-2 7,1 q-3,3 -7,-1 Z M22,26 q4,-2 8,1 q-4,3 -8,-1 Z" fill="#46465e" opacity="0.6"/>' +
    // light the rune throws onto its stone
    '<circle r="44" fill="url(#' + p + 'Halo)" opacity="' + (bright ? 0.45 : 0.08) + '">' +
    '<animate attributeName="opacity" values="' + halo + '" dur="' + (bright ? '3.8s' : '4.6s') + '" repeatCount="indefinite" ' + ADV_EASE + '/></circle>' +
    // the cut groove: dark, so the glow sits IN the stone
    '<path d="' + ADV_RUNE_GLYPH + '" fill="none" stroke="#24203a" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>' +
    // the glow in the groove
    '<path d="' + ADV_RUNE_GLYPH + '" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="url(#' + p + 'Bloom)" opacity="' + (bright ? 0.75 : 0.3) + '">' +
    '<animate attributeName="opacity" values="' + glow + '" dur="' + (bright ? '3.8s' : '4.6s') + '" repeatCount="indefinite" ' + ADV_EASE + '/></path>' +
    (bright
      // step 5: the rune is fully awake, light breathing off it
      ? '<circle r="28" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0">' +
        '<animate attributeName="r" values="22;34" dur="5.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>' +
        '<animate attributeName="opacity" values="0;0.45;0" dur="5.3s" repeatCount="indefinite" keyTimes="0;0.3;1"/></circle>'
      // step 4: only beginning; a spark travels up the stave
      : '<circle cx="0" cy="22" r="1.6" fill="#ffe680" opacity="0">' +
        '<animate attributeName="cy" values="22;-24" dur="5.4s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>' +
        '<animate attributeName="opacity" values="0;0.9;0" dur="5.4s" begin="0.8s" repeatCount="indefinite" keyTimes="0;0.5;1"/></circle>') +
    '</g>' +
    // the rune's light reaching the wall around the stone
    '<ellipse cx="' + x + '" cy="' + y + '" rx="90" ry="70" fill="url(#' + p + 'Halo)" opacity="' + (bright ? 0.3 : 0.08) + '">' +
    '<animate attributeName="opacity" values="' + (bright ? '0.22;0.36;0.22' : '0.04;0.16;0.04') + '" dur="' + (bright ? '3.8s' : '4.6s') + '" repeatCount="indefinite" ' + ADV_EASE + '/></ellipse>';
}

// adventure_1's guardian, unchanged in build, at gx. Only the arms vary by pose.
function advGuardian(p, gx, pose) {
  var think = pose === 'think';
  // viewer-left arm: hanging (discover) or folded to the chin (think)
  var leftArm = think
    ? '<path d="M204,112 L219,110 L225,140 L210,144 Z" fill="#5f5f84" opacity="0.85"/>' +
      '<path d="M204,112 L211,111 L217,142 L210,144 Z" fill="#6d6d94" opacity="0.35"/>'
    : '<path d="M204,112 L219,110 L222,166 L207,168 Z" fill="#5f5f84" opacity="0.85"/>' +
      '<path d="M204,112 L211,111 L214,167 L207,168 Z" fill="#6d6d94" opacity="0.35"/>' +
      '<path d="M203,164 L224,166 L223,176 L202,174 Z" fill="#63638a" opacity="0.6"/>' +
      '<path d="M203,164 L224,166 L224,169 L203,167 Z" fill="#8484ab" opacity="0.4"/>' +
      '<path d="M205,174 L221,176 L219,182 L207,181 Z" fill="#55557a" opacity="0.55"/>';
  // the folded forearm goes OVER the breastplate and gorget, so it is drawn last.
  // Built in the elbow's frame (origin = elbow, forearm up the -y axis) from the
  // same parts as the hanging arm, in the same lengths: forearm, adventure_1's
  // angular cuff, then the gauntlet plate (no hand-authored fingers). Upper arm
  // 31 + forearm/cuff/gauntlet 48 matches the hanging arm's reach; rotate(35)
  // lays the gauntlet against the gorget under the helmet's chin.
  var thinkForearm = think
    ? '<g transform="translate(218 141) rotate(35)">' +
      '<path d="M-7.5,0 L7.5,0 L6.5,-30 L-6.5,-30 Z" fill="#5f5f84" stroke="#2a2a44" stroke-width="0.9"/>' +
      '<path d="M-7.5,0 L-1,0 L-1,-30 L-6.5,-30 Z" fill="#7676a0" opacity="0.4"/>' +
      '<path d="M-10.5,-29 L10.5,-30 L10,-40 L-10,-39 Z" fill="#63638a" stroke="#2a2a44" stroke-width="0.9"/>' +
      '<path d="M-10.5,-29 L10.5,-30 L10.4,-33 L-10.4,-32 Z" fill="#8484ab" opacity="0.4"/>' +
      '<path d="M-8,-39 L8,-40 L6,-48 L-6,-48 Z" fill="#55557a" stroke="#2a2a44" stroke-width="0.9"/>' +
      '</g>' +
      // couter: the elbow plate covers the joint between the two segments
      '<path d="M209,135 L219,132 L226,141 L216,147 Z" fill="#6a6a92" stroke="#2a2a44" stroke-width="0.8"/>'
    : '';
  // viewer-right arm: hanging (think) or opened toward the rune (discover).
  // Step 5's text has him waiting motionless, so the open arm is HELD, not swayed.
  var rightArmParts = '<path d="M281,110 L296,112 L293,168 L278,166 Z" fill="#535374" opacity="0.85"/>' +
    '<path d="M276,166 L297,164 L298,174 L277,176 Z" fill="#57577c" opacity="0.6"/>' +
    '<path d="M279,176 L295,174 L293,181 L281,182 Z" fill="#4b4b6c" opacity="0.55"/>';
  // the opened arm crosses the arch ring and masonry, so it is solid (no ghosting),
  // a step lighter than the arch stone, and edged dark to sit in front of it.
  // Same three plates as the hanging arm: arm, cuff, gauntlet; no fingers.
  var rightArmOpen = '<path d="M281,110 L296,112 L293,168 L278,166 Z" fill="#62628a" stroke="#24243c" stroke-width="1"/>' +
    '<path d="M281,110 L288,111 L286,167 L278,166 Z" fill="#7676a0" opacity="0.35"/>' +
    '<path d="M276,166 L297,164 L298,174 L277,176 Z" fill="#6a6a92" stroke="#24243c" stroke-width="1"/>' +
    '<path d="M276,166 L297,164 L297.3,167 L276.3,169 Z" fill="#8484ab" opacity="0.45"/>' +
    '<path d="M279,175 L295,173 L293,182 L281,183 Z" fill="#5c5c80" stroke="#24243c" stroke-width="1"/>';
  var rightArm = think ? rightArmParts
    : '<g transform="rotate(-78 288 112)">' + rightArmOpen + '</g>';
  return '<defs><radialGradient id="' + p + 'Aura" cx="50%" cy="42%" r="46%">' +
    '<stop offset="0%" stop-color="#8a7aff" stop-opacity="0.13"/><stop offset="45%" stop-color="#8a7aff" stop-opacity="0.06"/><stop offset="80%" stop-color="#8a7aff" stop-opacity="0.01"/><stop offset="100%" stop-color="#8a7aff" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="' + p + 'Sym" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd700" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/></radialGradient>' +
    '<filter id="' + p + 'Shim"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>' +
    '<filter id="' + p + 'SymG"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>' +
    '<g transform="translate(' + (gx - 250) + ' 0)"><g filter="url(#' + p + 'Shim)">' +
    '<path d="M250,10 Q348,10 356,140 Q364,270 250,278 Q136,270 144,140 Q152,10 250,10 Z" fill="url(#' + p + 'Aura)" opacity="0.5">' +
    '<animate attributeName="opacity" values="0.26;0.46;0.26" dur="4.9s" repeatCount="indefinite" ' + ADV_EASE + '/></path>' +
    // legs, knee bands, boots, contact shadow
    '<path d="M231,172 L247,172 L246,224 L230,224 Z" fill="#5c5c80" opacity="0.9"/><path d="M231,172 L238,172 L237,224 L230,224 Z" fill="#7676a0" opacity="0.45"/>' +
    '<path d="M253,172 L269,172 L270,224 L254,224 Z" fill="#4e4e6e" opacity="0.9"/>' +
    '<path d="M229,192 L248,192 L248,197 L229,197 Z" fill="#70709a" opacity="0.6"/><path d="M252,192 L271,192 L271,197 L252,197 Z" fill="#61618a" opacity="0.6"/>' +
    '<path d="M224,224 L248,224 L248,234 L221,234 Q219,229 224,224 Z" fill="#4a4a6a" opacity="0.9"/><path d="M224,224 L234,224 L234,234 L221,234 Q219,229 224,224 Z" fill="#67678e" opacity="0.45"/>' +
    '<path d="M252,224 L276,224 L279,234 L252,234 Z" fill="#41415e" opacity="0.9"/>' +
    '<path d="M214,236 Q250,229 286,236 Q250,243 214,236 Z" fill="#150c26" opacity="0.4"/>' +
    leftArm + rightArm +
    // breastplate, fauld
    '<path d="M220,110 L250,106 L250,180 Q234,178 224,172 Z" fill="#5f5f82" opacity="0.72"/><path d="M250,106 L280,110 L276,172 Q266,178 250,180 Z" fill="#4d4d6c" opacity="0.72"/>' +
    '<path d="M250,106 L250,180" stroke="#8484ab" stroke-width="1" opacity="0.3"/>' +
    '<path d="M226,168 L274,168 L272,180 Q250,186 228,180 Z" fill="#545475" opacity="0.6"/><path d="M238,169 v14 M250,170 v15 M262,169 v14" stroke="#2f2f48" stroke-width="0.9" opacity="0.45"/>' +
    // pauldrons cap the shoulder joints
    '<path d="M212,108 Q224,92 244,96 L246,110 Q228,106 210,116 Z" fill="#67678c" opacity="0.75"/><path d="M212,108 Q224,92 244,96 L244,100 Q226,97 213,111 Z" fill="#8989b0" opacity="0.4"/>' +
    '<path d="M288,108 Q276,92 256,96 L254,110 Q272,106 290,116 Z" fill="#55557a" opacity="0.75"/>' +
    // neck, gorget, helmet
    '<path d="M241,90 L259,90 L261,100 L239,100 Z" fill="#43435f" opacity="0.8"/><path d="M236,98 L264,98 L266,106 L234,106 Z" fill="#5b5b7e" opacity="0.7"/>' +
    '<path d="M231,76 Q234,58 250,55 Q266,58 269,76 L266,92 L234,92 Z" fill="#5d5d80" opacity="0.8"/><path d="M231,76 Q234,58 250,55 L250,92 L234,92 Z" fill="#75759c" opacity="0.4"/>' +
    '<path d="M247,53 Q250,48 253,53 L254,74 L246,74 Z" fill="#7c7ca3" opacity="0.55"/>' +
    '<path d="M232,74 Q250,69 268,74 L268,79 Q250,74 232,79 Z" fill="#43435f" opacity="0.7"/><path d="M234,90 Q250,95 266,90 L265,94 Q250,99 235,94 Z" fill="#3a3a55" opacity="0.6"/>' +
    // visor slot; its light sits toward the rune side, so he is looking at it
    '<path d="M238,81 L262,81 L261,85 L239,85 Z" fill="#0f0c22" opacity="0.85"/>' +
    '<path d="M246,82 L261,82 L260,84 L247,84 Z" fill="#88aaff" opacity="0.75">' +
    '<animate attributeName="opacity" values="0.45;0.9;0.45" dur="' + (think ? '3.4s' : '2.9s') + '" repeatCount="indefinite" ' + ADV_EASE + '/></path>' +
    // breastplate symbols, quieter than adventure_1: the wall rune has the stage now
    '<text x="250" y="132" text-anchor="middle" fill="#ffd700" font-size="10" opacity="0.4" filter="url(#' + p + 'SymG)">&#x2721;</text>' +
    '<text x="238" y="150" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.35" filter="url(#' + p + 'SymG)">&#x2727;</text>' +
    '<text x="262" y="150" text-anchor="middle" fill="#ffd700" font-size="8" opacity="0.35" filter="url(#' + p + 'SymG)">&#x2726;</text>' +
    '<text x="250" y="163" text-anchor="middle" fill="#ffd700" font-size="9" opacity="0.3" filter="url(#' + p + 'SymG)">&#x2738;</text>' +
    '<circle cx="250" cy="129" r="9" fill="url(#' + p + 'Sym)" opacity="0.15"/>' +
    thinkForearm +
    // shimmer rising off him, faded at both ends so the loop has no seam
    '<circle cx="222" cy="102" r="1.5" fill="#aaccff" opacity="0">' +
    '<animate attributeName="cy" values="102;62" dur="4.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>' +
    '<animate attributeName="opacity" values="0;0.45;0" dur="4.5s" repeatCount="indefinite" keyTimes="0;0.35;1"/></circle>' +
    '<circle cx="276" cy="98" r="1.1" fill="#aaccff" opacity="0">' +
    '<animate attributeName="cy" values="98;54" dur="5.8s" repeatCount="indefinite" begin="1.4s" calcMode="spline" keyTimes="0;1" keySplines="0.3 0.4 0.5 1"/>' +
    '<animate attributeName="opacity" values="0;0.4;0" dur="5.8s" repeatCount="indefinite" begin="1.4s" keyTimes="0;0.35;1"/></circle>' +
    '</g></g>';
}

// Scene 4: "A rune on the wall begins to glow." The guardian waits, hand to chin.
STORY_SCENES['adventure_4'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
` + advRuneRoom('adv4R', 196) + `
` + advRuneStone('adv4R', 392, 112, 'waking') + `
` + advGuardian('adv4G', 196, 'think') + `
</svg>`;

// Scene 5: the rune is fully lit; the guardian holds his arm open to it, motionless.
STORY_SCENES['adventure_5'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
` + advRuneRoom('adv5R', 196) + `
` + advRuneStone('adv5R', 392, 112, 'bright') + `
` + advGuardian('adv5G', 196, 'discover') + `
</svg>`;

// Scene 6: Winding mountain trail, observatory dome glints in distance.
// Step 6 is where the guardian sends you up the mountain path, so the mountain
// lives here; steps 4-5 are the rune on the tower wall (advRuneRoom, above).
STORY_SCENES['adventure_6'] = `<svg width="100%" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs>
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
</defs><rect width="500" height="260" fill="#211438"/>
<!-- Mystic Peak: the shared asset (advPeak, top of file). The trail is clipped where
     it passes behind the foreground trail it branches from. -->
` + advPeak('adv5Pk', 90, 5, 0.82, { trailClipY: 208, foot: '#241840' }) + `
<!-- the flank below the trail, deeper in shadow -->
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
