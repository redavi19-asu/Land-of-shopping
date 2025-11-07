import { chromium } from 'playwright';
import fs from 'fs';

const OUT_DIR = new URL('../screenshots', import.meta.url).pathname;
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const baseUrl = process.env.BASE_URL || 'http://localhost:5173';

async function capture(width, height, name) {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  // Wait a bit for fonts and images
  await page.waitForTimeout(500);
  const outPath = new URL(`../screenshots/${name}`, import.meta.url).pathname;
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  return outPath;
}

(async () => {
  try {
    console.log('Capturing iPad Pro 12.9 portrait (1024x1366)...');
    const p1 = await capture(1024, 1366, 'ipad-12-9-portrait.png');
    console.log('Saved', p1);

    console.log('Capturing iPad Pro 12.9 landscape (1366x1024)...');
    const p2 = await capture(1366, 1024, 'ipad-12-9-landscape.png');
    console.log('Saved', p2);

    console.log('Done.');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
