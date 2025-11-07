import fs from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const categories = [
  { id: 'dollar-deals', name: 'Dollar Deals' },
  { id: 'household', name: 'Household' },
  { id: 'snacks', name: 'Snacks & Drinks' },
  { id: 'health', name: 'Health & Beauty' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'toys', name: 'Toys & Games' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'outdoors', name: 'Outdoors' },
  { id: 'pets', name: 'Pet Supplies' },
  // additional categories
  { id: 'clothing', name: 'Clothing' },
  { id: 'baby', name: 'Baby' },
  { id: 'books', name: 'Books' },
  { id: 'office', name: 'Office' },
  { id: 'home-decor', name: 'Home Decor' },
  { id: 'sports', name: 'Sports' },
  { id: 'automotive', name: 'Automotive' },
  { id: 'beauty', name: 'Beauty' }
];

const colors = [
  '#0ea5e9', '#34d399', '#f59e0b', '#f97316', '#a78bfa', '#ef4444', '#06b6d4', '#84cc16', '#f472b6',
  '#06b6d4', '#7c3aed', '#0f766e', '#dc2626', '#0891b2', '#f43f5e'
];

for (let i = 0; i < categories.length; i++) {
  const cat = categories[i];
  const bg = colors[i % colors.length];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">\n` +
    `<rect width="100%" height="100%" fill="${bg}"/>\n` +
    `<g fill="white" font-family="Inter, Roboto, system-ui, -apple-system, 'Helvetica Neue', Arial" font-weight="700">\n` +
    `<text x="50%" y="45%" font-size="64" text-anchor="middle">${escapeXml(cat.name)}</text>\n` +
  `<text x="50%" y="62%" font-size="36" text-anchor="middle" opacity="0.9">${escapeXml(cat.blurb || '')}</text>\n` +
    `</g>\n` +
    `</svg>`;

  const outPath = path.join(outDir, `c-${cat.id}.svg`);
  fs.writeFileSync(outPath, svg);
  console.log('wrote', outPath);
}

function escapeXml(s) {
  return s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&apos;','"':'&quot;'})[c]);
}
