const fs = require('fs');
const path = require('path');
const fetch = global.fetch || require('node-fetch');

const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, 'ryans-land', 'public', 'images');

if (!process.env.UNSPLASH_ACCESS_KEY) {
  console.error('Please set UNSPLASH_ACCESS_KEY in the environment.');
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const targets = {
  o1: [
    'camping lantern close up',
    'LED camping lantern',
    'portable camping lantern',
    'hiking lantern outdoor'
  ],
  o2: [
    'insulated water bottle',
    'stainless steel water bottle',
    'insulated flask',
    'vacuum water bottle'
  ],
  pet1: [
    'dog chew toy rubber',
    'dog chew toy bone',
    'dog toy chew',
    'chew toy for dogs'
  ],
  pet2: [
    'cat treats packaging',
    'cat treats bag',
    'cat treats',
    'cat snack treats'
  ]
};

async function searchDownload(query, dest) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`;
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } });
  if (!res.ok) {
    throw new Error(`Unsplash search failed ${res.status}`);
  }
  const json = await res.json();
  if (!json.results || json.results.length === 0) {
    throw new Error('No results');
  }
  const first = json.results[0];
  const downloadUrl = first.urls && (first.urls.full || first.urls.regular || first.urls.raw || first.urls.small);
  if (!downloadUrl) throw new Error('No downloadable URL');

  const imgRes = await fetch(downloadUrl);
  if (!imgRes.ok) throw new Error(`Image download failed ${imgRes.status}`);
  if (imgRes.body && typeof imgRes.body.pipe === 'function') {
    const ws = fs.createWriteStream(dest);
    await new Promise((resolve, reject) => {
      imgRes.body.pipe(ws);
      imgRes.body.on('error', reject);
      ws.on('finish', resolve);
    });
  } else {
    const ab = await imgRes.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(ab));
  }
  return first;
}

(async () => {
  const results = {};
  for (const id of Object.keys(targets)) {
    const outPath = path.join(outDir, `${id}.jpg`);
    const metaPath = path.join(outDir, `${id}.json`);
    // remove existing to force fresh
    try { if (fs.existsSync(outPath)) fs.unlinkSync(outPath); } catch (e) {}
    let got = false;
    for (const q of targets[id]) {
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          console.log(`Try ${id}: query="${q}" attempt ${attempt}`);
          const first = await searchDownload(q, outPath);
          const stats = fs.statSync(outPath);
          if (stats.size < 2000) {
            console.warn('Downloaded too small, retrying');
            fs.unlinkSync(outPath);
            await new Promise(r => setTimeout(r, 300));
            continue;
          }
          const meta = { id, query: q, unsplash: { id: first.id, user: first.user && first.user.name, link: first.links && first.links.html } };
          fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
          console.log('Saved', outPath);
          got = true;
          results[id] = { ok: true, query: q };
          break;
        } catch (err) {
          console.warn('Attempt failed:', err.message);
          await new Promise(r => setTimeout(r, 500));
        }
      }
      if (got) break;
    }
    if (!got) {
      console.error('Failed to fetch image for', id);
      results[id] = { ok: false };
    }
  }
  console.log('Results:', results);
})();
