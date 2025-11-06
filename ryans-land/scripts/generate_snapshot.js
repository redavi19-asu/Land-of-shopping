import { products } from '../src/data/products.js';
import fs from 'fs';

const rows = products.map(p => `
  <div style="width:240px;margin:10px;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;background:#fff;">
    <img src="${p.img}" alt="${p.title}" style="width:100%;height:160px;object-fit:cover;display:block"/>
    <div style="padding:12px;font-family:Arial,Helvetica,sans-serif">
      <div style="font-weight:600">${p.title}</div>
      <div style="color:#0f172a;font-weight:700;margin-top:6px">$${p.price.toFixed(2)}</div>
    </div>
  </div>
`).join('\n');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Ryan's Land — Snapshot</title>
<style>body{background:#f8fafc;padding:30px;font-family:Inter,system-ui,Arial} .grid{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto}</style>
</head>
<body>
  <h1>Ryan's Land — Product Snapshot</h1>
  <div class="grid">
    ${rows}
  </div>
  <footer style="max-width:1200px;margin:40px auto;color:#6b7280;font-size:14px">This is a static snapshot generated from <code>src/data/products.js</code>.</footer>
</body>
</html>`;

const out = new URL('../snapshot.html', import.meta.url);
fs.writeFileSync(out, html, 'utf8');
console.log('Wrote snapshot to', out.pathname);
