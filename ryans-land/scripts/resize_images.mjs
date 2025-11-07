import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve(process.cwd(), 'public', 'images');
const TARGET_WIDTHS = [400, 800, 1200];
const quality = 80;

async function resizeFile(file, manifest) {
  const filePath = path.join(IMAGES_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();
    if (!meta || !meta.width || !meta.height) return;

    // record original dimensions
    manifest[file] = manifest[file] || { width: meta.width, height: meta.height, variants: {} };

    for (const w of TARGET_WIDTHS) {
      if (meta.width <= w) continue; // don't upscale
      const outName = `${base}-w${w}${ext}`;
      const outPath = path.join(IMAGES_DIR, outName);
      if (!fs.existsSync(outPath)) {
        let pipeline = image.clone().resize({ width: w });
        if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality, mozjpeg: true });
        else if (ext === '.png') pipeline = pipeline.png({ quality });
        await pipeline.toFile(outPath);
        console.log('wrote', outName);
      }
      // record variant dims (approximate height by aspect ratio)
      const h = Math.round((meta.height / meta.width) * w);
      manifest[file].variants[w] = { file: outName, width: w, height: h };
    }
  } catch (e) {
    console.error('error processing', file, e.message);
  }
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('images dir not found:', IMAGES_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(jpe?g|png|svg)$/i.test(f));
  const manifest = {};
  for (const f of files) {
    // skip generated variants when scanning originals; only process original names without -w<width>
    if (/ -w\d+\./.test(f)) continue;
    // treat svg separately (we'll try to read width/height from attributes if possible)
    if (/\.svg$/i.test(f)) {
      const svgText = fs.readFileSync(path.join(IMAGES_DIR, f), 'utf8');
      // try to extract viewBox or width/height
      let w = null, h = null;
      const vb = svgText.match(/viewBox=\"(\d+\s+\d+\s+(\d+)\s+(\d+))\"/i);
      if (vb && vb[2] && vb[3]) { w = parseInt(vb[2],10); h = parseInt(vb[3],10); }
      const wh = svgText.match(/width=\"(\d+)\".*height=\"(\d+)\"/i);
      if ((!w || !h) && wh) { w = parseInt(wh[1],10); h = parseInt(wh[2],10); }
      // fallback to 1200x800 for our generator
      if (!w || !h) { w = 1200; h = 800; }
      manifest[f] = { width: w, height: h, variants: {} };
      continue;
    }
    await resizeFile(f, manifest);
  }

  // write manifest to public and src/data so app can import it
  const outPublic = path.join(IMAGES_DIR, 'manifest.json');
  fs.writeFileSync(outPublic, JSON.stringify(manifest, null, 2));
  console.log('wrote', outPublic);

  const outSrcDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(outSrcDir)) fs.mkdirSync(outSrcDir, { recursive: true });
  const outSrc = path.join(outSrcDir, 'image-manifest.json');
  fs.writeFileSync(outSrc, JSON.stringify(manifest, null, 2));
  console.log('wrote', outSrc);

  console.log('done');
}

run();
