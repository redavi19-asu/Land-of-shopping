# Ryan's Land — React + Tailwind Storefront Demo

A portfolio-ready storefront with scroll reveals, category browsing, featured grid,
and a mock cart drawer — built on React + Vite + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Customize colors
Check `tailwind.config.js` (brand, bubble, limeade, plasma, solar) and tweak as needed.

## Product data & catalog

Product data is in `src/data/products.js`.
- `categories` — array of category objects `{ id, name, blurb, img }`
- `products` — array of product objects `{ id, title, price, category, img }`
- `featuredIds` — an array of product ids that populate the featured scroller

To add more items to each scroller, add more product entries and include some ids in `featuredIds`.

## Deploy (main:/docs)
You can deploy the built `dist/` folder to `docs/` on `main` (this repo's Pages target):

```bash
rm -rf docs && mkdir -p docs
cp -r ryans-land/dist/* docs/
git add docs
git commit -m "chore: deploy updated build"
git push origin main
```

## Headless verification
There is a Puppeteer script at `scripts/capture_pages.cjs` that saves a screenshot and console log to `ryans-land/artifacts/`.

```bash
node ryans-land/scripts/capture_pages.cjs
# outputs -> ryans-land/artifacts/pages_screenshot.png and pages_console.log
```

## Notes
- Chevrons are visible on medium+ breakpoints and will be disabled when the scroller is at the start or end.
- The build includes `favicon.ico` under `dist/` to avoid a repo-scoped 404 (requests to `https://<username>.github.io/favicon.ico` at the site root may still 404 outside this repo).
