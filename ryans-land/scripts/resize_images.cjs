import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve(process.cwd(), 'public', 'images');
const TARGET_WIDTHS = [400, 800, 1200];
const quality = 80;

async function resizeFile(file) {
  const filePath = path.join(IMAGES_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();
    if (!meta || !meta.width) return;

    for (const w of TARGET_WIDTHS) {
      if (meta.width <= w) continue; // don't upscale
      const outName = `${base}-w${w}${ext}`;
      const outPath = path.join(IMAGES_DIR, outName);
      if (fs.existsSync(outPath)) continue;

      let pipeline = image.clone().resize({ width: w });
      if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality, mozjpeg: true });
      else if (ext === '.png') pipeline = pipeline.png({ quality });

      await pipeline.toFile(outPath);
      console.log('wrote', outName);
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
  const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) await resizeFile(f);
  console.log('done');
}

run();
