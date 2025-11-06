const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const productsFile = path.join(repoRoot, 'ryans-land', 'src', 'data', 'products.js');
const outDir = path.join(repoRoot, 'ryans-land', 'public', 'images');

if (!fs.existsSync(productsFile)) {
  console.error('products.js not found at', productsFile);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const content = fs.readFileSync(productsFile, 'utf8');

// crude but effective regex to capture objects with id and title inside products array
const re = /\{([\s\S]*?)\}/g;
const items = [];
let match;
// First find the products array start
const productsArrayMatch = content.match(/export const products = \[([\s\S]*?)\];/);
const productsBlock = productsArrayMatch ? productsArrayMatch[1] : null;
if (!productsBlock) {
  console.error('Could not locate products block in products.js');
  process.exit(1);
}

while ((match = re.exec(productsBlock)) !== null) {
  const obj = match[1];
  const idMatch = obj.match(/id:\s*"([^"]+)"/);
  const titleMatch = obj.match(/title:\s*"([^"]+)"/);
  if (idMatch && titleMatch) {
    items.push({ id: idMatch[1], title: titleMatch[1] });
  }
}

console.log('Found', items.length, 'products.');

for (const it of items) {
  const filename = `${it.id}.jpg`;
  const outPath = path.join(outDir, filename);
  if (fs.existsSync(outPath)) {
    console.log('Skip existing', filename);
    continue;
  }
  // build safe query string from title
  const q = encodeURIComponent(it.title.replace(/\s+/g, '+'));
  const url = `https://source.unsplash.com/800x600/?${q}`;
  console.log('Downloading for', it.id, '-', it.title);
  try {
    // Use curl with -L to follow redirect
    execSync(`curl -sSL -o "${outPath}" "${url}"`, { stdio: 'inherit' });
    // basic sanity check
    const stats = fs.statSync(outPath);
    if (stats.size < 1000) {
      console.warn('Downloaded file is small (<1KB), deleting:', outPath);
      fs.unlinkSync(outPath);
    }
  } catch (err) {
    console.error('Failed to download for', it.id, err.message);
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
  }
}

console.log('Done. Images saved to', outDir);
