const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://redavi19-asu.github.io/Land-of-shopping/';
  const outDir = path.resolve(__dirname, '..', 'artifacts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const viewports = [
    { name: 'mobile', width: 375, height: 800 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1366, height: 800 },
  ];

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    page.on('console', msg => console.log(`PAGE_CONSOLE: ${msg.text()}`));
    page.on('pageerror', err => console.error('PAGE_ERROR:', err.toString()));
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      console.log('Navigating to', url, 'at', vp.name);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const screenshotPath = path.join(outDir, `pages_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log('Saved', screenshotPath);
    }
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    await browser.close();
  }
})();
