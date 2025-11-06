# Land-of-shopping

This demo app is a small storefront UI built with Vite + React + Tailwind.

Local images
--------------
This repository includes a small set of local generic product images under `ryans-land/public/images/` used for demo purposes. Two helper scripts are provided if you want to regenerate or replace them:

- `scripts/populate_images.sh` — creates placeholder seed images and copies them into product filenames (fast, offline-friendly).
- `scripts/fetch_replace_images.sh` — attempts to download deterministic generic photos from `picsum.photos` for each product/category image and creates `store.jpg` for the Hero preview. It uses seeded URLs so results are repeatable.

To regenerate images locally run:

```bash
./scripts/fetch_replace_images.sh
```

If you prefer curated high-quality photos, you can supply your own images and place them in `ryans-land/public/images/` (filenames should match the `img` fields in `ryans-land/src/data/products.js`). After adding images run a build and deploy:

```bash
npm --prefix ryans-land run build
rm -rf docs && mkdir -p docs && cp -r ryans-land/dist/* docs/
git add docs && git commit -m "chore: deploy updated images" && git push origin main
```

Enjoy the demo storefront — open `https://<your-username>.github.io/Land-of-shopping/` after pushing to see the deployed site.
# Land-of-shopping