#!/usr/bin/env node
// Static server for the end-to-end tests and for local preview.
//
//   node scripts/serve.cjs [port]      (default 4174)
//
// The island game has no build step, so this serves the repo root exactly as
// it sits, which is what production serves. It replaces `python -m
// http.server` for two reasons that both showed up as flaky tests:
//
//   - Python's server speaks HTTP/1.0 with no keep-alive, so each of the
//     page's ~70 files opened a fresh connection, and six test workers
//     loading at once queued behind each other. Tests that waited a fixed
//     400ms after load were then acting on a page that had not finished.
//   - It let the browser cache heuristically, so an edited file could be
//     served stale to a reload.
//
// No dependencies. Loopback only.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const port = Number(process.argv[2]) || 4174;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.map': 'application/json; charset=utf-8'
};

function send(res, code, body, type) {
  res.writeHead(code, {
    'Content-Type': type || 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function handle(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed');
  let rel;
  try { rel = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch (e) { return send(res, 400, 'Bad request'); }
  let file = path.normalize(path.join(ROOT, rel));
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) return send(res, 403, 'Forbidden');
  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) file = path.join(file, 'index.html');
    fs.readFile(file, (e, buf) => {
      if (e) return send(res, 404, 'Not found');
      const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Content-Length': buf.length, 'Cache-Control': 'no-store' });
      res.end(req.method === 'HEAD' ? undefined : buf);
    });
  });
}

// `localhost` resolves to ::1 on some machines and 127.0.0.1 on others, so
// listen on both. Whichever the machine lacks is skipped.
let up = 0;
['127.0.0.1', '::1'].forEach((host) => {
  const server = http.createServer(handle);
  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') { console.error('Port ' + port + ' is already in use on ' + host); process.exit(1); }
  });
  server.listen(port, host, () => {
    up++;
    if (up === 1) console.log('Serving ' + ROOT + ' at http://localhost:' + port);
  });
});
