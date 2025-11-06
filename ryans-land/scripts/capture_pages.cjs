const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://redavi19-asu.github.io/Land-of-shopping/';
  const outDir = path.resolve(__dirname, '..', 'artifacts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    const logs = [];
    page.on('console', msg => {
      const text = `${msg.type().toUpperCase()}: ${msg.text()}`;
      logs.push(text);
      console.log(text);
    });
    // capture failed requests (404s, network errors)
    page.on('requestfailed', req => {
      const failure = req.failure && req.failure();
      const reason = failure && failure.errorText ? failure.errorText : (failure && failure.errorCode) || 'failed';
      const text = `REQUESTFAILED: ${req.url()} -> ${reason}`;
      logs.push(text);
      console.error(text);
    });
    // capture responses with non-OK status so we can see 404 URLs
    page.on('response', resp => {
      const status = resp.status();
      if (status >= 400) {
        const text = `RESPONSE ${status}: ${resp.url()}`;
        logs.push(text);
        console.error(text);
      }
    });
    page.on('pageerror', err => {
      const text = `PAGEERROR: ${err.toString()}`;
      logs.push(text);
      console.error(text);
      if (err && err.stack) {
        console.error(err.stack);
        logs.push(err.stack);
      }
    });

    console.log('Navigating to', url);
    const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    console.log('Status:', resp && resp.status());

    const screenshotPath = path.join(outDir, 'pages_screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Saved screenshot to', screenshotPath);

    const logsPath = path.join(outDir, 'pages_console.log');
    fs.writeFileSync(logsPath, logs.join('\n') + '\n');
    console.log('Saved console log to', logsPath);
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    await browser.close();
  }
})();
