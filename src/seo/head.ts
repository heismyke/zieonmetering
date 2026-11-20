// Keeps <head> tags in sync with the current route in the browser.
import { SITE, fullTitle, metaForPath } from "./meta";

const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || SITE.url;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function applyHead(path: string) {
  const meta = metaForPath(path, siteUrl);
  const url = `${siteUrl}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;
  const image = `${siteUrl}${meta.image ?? SITE.image}`;
  const title = fullTitle(meta);

  document.title = title;
  setMeta("name", "description", meta.description);
  setMeta("name", "robots", meta.noindex ? "noindex, follow" : "index, follow");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", meta.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", meta.description);
  setMeta("name", "twitter:image", image);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (meta.noindex) {
    canonical?.remove();
  } else {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  let ld = document.head.querySelector<HTMLScriptElement>('script[data-seo="page"]');
  if (meta.jsonLd?.length) {
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.dataset.seo = "page";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(meta.jsonLd);
  } else {
    ld?.remove();
  }
}

