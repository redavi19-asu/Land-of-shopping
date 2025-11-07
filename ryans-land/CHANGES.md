# Recent changes (summary)

Date: 2025-11-07

This file summarizes recent UI and performance-focused updates made in the ryans-land demo.

Highlights
- Improved left scrolly: reduced opacity and added subtle backdrop blur so the left menu is less visually dominant.
- Hero adjustments: moved hero content right of the scrolly menu on medium+ breakpoints; fixed dark-mode heading contrast.
- Category placeholders: generated lightweight SVG placeholders for many categories and wired them into `src/data/products.js`.
- Image perf / CLS: generated resized image variants and an `image-manifest.json`; components set explicit width/height attributes and use `srcset`/`sizes`.
- Product card mobile UX: increased quantity button touch targets, widened quantity input, stacked controls on small screens, and made the Add button full-width on mobile.
- Tablet adjustments: reduced image heights at md breakpoints and constrained the scrolly demo image to avoid oversized rendering on iPad.

Files/areas touched
- `src/components/LeftScrolly.jsx`, `src/index.css` — left-menu transparency and focus styles
- `src/components/Hero.jsx` — hero spacing and color tweaks
- `src/components/ProductCard.jsx`, `CategoryCard.jsx`, `ScrollySection.jsx` — responsive image sizing and quantity control fixes
- `src/data/image-manifest.json`, `public/images/*` — generated image manifest and resized image variants
- `scripts/resize_images.mjs`, `scripts/generate_category_svgs.mjs` — utilities to generate images and placeholder svgs

Notes / next steps
- Consider adding WebP variants and using `<picture>` for further bytes savings.
- The DOM size is still large; consider virtualization or pagination for long scrollers.
- If you want custom icons for categories, tell me which ones and I can replace placeholders with nicer SVG icons.
