// Vite plugin: renders SEO tags into index.html and, at build time, emits a
// pre-filled HTML file per route plus sitemap.xml and robots.txt, so crawlers
// and link previews see correct metadata without running JavaScript.
import type { Plugin } from "vite";
import { SITE, fullTitle, indexablePaths, metaForPath, siteJsonLd } from "../src/seo/meta";

const START = "<!--seo:start-->";
const END = "<!--seo:end-->";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON-LD sits inside <script>; only "</" needs neutralising
const ldJson = (data: unknown) => JSON.stringify(data).replace(/<\//g, "<\\/");

function renderHead(path: string, siteUrl: string) {
  const meta = metaForPath(path, siteUrl);
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}${meta.image ?? SITE.image}`;
  const title = esc(fullTitle(meta));
  const description = esc(meta.description);


  return [
    START,
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}" />`,
    meta.noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${ldJson(siteJsonLd(siteUrl))}</script>`,
    // Page-specific data; the client router replaces this block on navigation
    meta.jsonLd?.length ? `<script type="application/ld+json" data-seo="page">${ldJson(meta.jsonLd)}</script>` : "",
    END,
  ]
    .filter(Boolean)
    .join("\n    ");
}

export function seoPlugin(siteUrl: string): Plugin {
  const url = siteUrl.replace(/\/$/, "");
  return {
    name: "zieon-metering-seo",
    transformIndexHtml(html) {
      return html.replace("<!--seo-->", renderHead("/", url));
    },
    // Runs after Vite has emitted index.html into the bundle
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset") return;
      const template = String(index.source);
      const block = new RegExp(`${START}[\\s\\S]*?${END}`);

      for (const path of indexablePaths()) {
        if (path === "/") continue;
        this.emitFile({
          type: "asset",
          fileName: `${path.slice(1)}/index.html`,
          source: template.replace(block, renderHead(path, url)),
        });
      }
      // Served by hosts for unknown URLs (Netlify, Vercel, Cloudflare Pages, nginx error_page)
      this.emitFile({ type: "asset", fileName: "404.html", source: template.replace(block, renderHead("/404", url)) });

      const today = new Date().toISOString().slice(0, 10);
      const urls = indexablePaths()
        .map((p) => {
          const priority = p === "/" ? "1.0" : p.startsWith("/products/") ? "0.8" : "0.7";
          return `  <url><loc>${url}${p}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
        })
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      });
      },
    },
  };
}
