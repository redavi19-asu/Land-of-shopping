const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const productsFile = path.join(repoRoot, 'ryans-land', 'src', 'data', 'products.js');
const outDir = path.join(repoRoot, 'ryans-land', 'public', 'images');

if (!process.env.UNSPLASH_ACCESS_KEY) {
  console.error('Please set UNSPLASH_ACCESS_KEY in the environment (do not commit the key).');
  process.exit(1);
}

if (!fs.existsSync(productsFile)) {
  console.error('products.js not found at', productsFile);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const content = fs.readFileSync(productsFile, 'utf8');
const re = /\{([\s\S]*?)\}/g;
const productsArrayMatch = content.match(/export const products = \[([\s\S]*?)\];/);
const productsBlock = productsArrayMatch ? productsArrayMatch[1] : null;
if (!productsBlock) {
  console.error('Could not locate products block in products.js');
  process.exit(1);
}

const items = [];
let match;
while ((match = re.exec(productsBlock)) !== null) {
  const obj = match[1];
  const idMatch = obj.match(/id:\s*"([^"]+)"/);
  const titleMatch = obj.match(/title:\s*"([^"]+)"/);
  if (idMatch && titleMatch) items.push({ id: idMatch[1], title: titleMatch[1] });
}

const byId = Object.fromEntries(items.map(i => [i.id, i]));

const ids = process.argv.slice(2);
const targetIds = ids.length ? ids : items.map(i => i.id);

const fetch = global.fetch || require('node-fetch');

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  // node's global fetch may return a WHATWG ReadableStream rather than a Node stream.
  if (res.body && typeof res.body.pipe === 'function') {
    const fileStream = fs.createWriteStream(dest);
    await new Promise((resolve, reject) => {
      res.body.pipe(fileStream);
      res.body.on('error', reject);
      fileStream.on('finish', resolve);
    });
  } else {
    // Fallback: read as ArrayBuffer and write buffer
    const ab = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(ab));
  }
}

async function searchAndDownload(id) {
  const info = byId[id];
  if (!info) {
    console.warn('No product with id', id);
    return;
  }
  const outPath = path.join(outDir, `${id}.jpg`);
  const metaPath = path.join(outDir, `${id}.json`);
  if (fs.existsSync(outPath)) {
    console.log('Skip existing', id + '.jpg');
    return;
  }

  const q = encodeURIComponent(info.title);
  const url = `https://api.unsplash.com/search/photos?query=${q}&per_page=1`;
  console.log('Searching Unsplash for', info.title);
  try {
    const res = await fetch(url, { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } });
    if (!res.ok) {
      console.warn('Unsplash search failed', res.status);
      return;
    }
    const json = await res.json();
    if (!json.results || json.results.length === 0) {
      console.warn('No results for', info.title);
      return;
    }
    const first = json.results[0];
    const downloadUrl = first.urls && (first.urls.regular || first.urls.small || first.urls.raw);
    if (!downloadUrl) {
      console.warn('No downloadable URL for', id);
      return;
    }
    console.log('Downloading image for', id, 'from', downloadUrl);
    await download(downloadUrl, outPath);
    const stats = fs.statSync(outPath);
    if (stats.size < 2000) {
      console.warn('Downloaded file is suspiciously small, deleting:', outPath);
      fs.unlinkSync(outPath);
      return;
    }
    const meta = {
      id,
      title: info.title,
      unsplash: {
        id: first.id,
        user: first.user && first.user.name,
        profile: first.user && first.user.links && first.user.links.html,
        link: first.links && first.links.html
      }
    };
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    console.log('Saved', outPath, 'and metadata', metaPath);
  } catch (err) {
    console.error('Error for', id, err.message);
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
  }
}

(async () => {
  for (const id of targetIds) {
    // small delay to be polite
    await new Promise(r => setTimeout(r, 300));
    await searchAndDownload(id);
  }
  console.log('Done. Images saved to', outDir);
})();
