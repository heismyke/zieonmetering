# Zieon Metering Technologies — website

Website for Zieon Metering Technologies Ltd, makers of smart prepaid
electricity meters (www.zieonmetering.com). Vue 3 + Vite + Tailwind.

Photos: see `public/images/CREDITS.md`.

- `npm run dev` — local server on http://127.0.0.1:5175
- `npm run build` — type-check, build, and pre-render every page's SEO tags,
  plus `sitemap.xml` and `robots.txt` (see `build/seo-plugin.ts`)

Content lives in `src/data/` (products, solutions, navigation) and page
metadata in `src/seo/meta.ts`. Set `VITE_SITE_URL` to build for another domain.
