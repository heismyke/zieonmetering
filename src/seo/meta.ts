// Single source of truth for page metadata. Used at runtime (router hook) and
// at build time (vite.config.ts) to pre-render each route's <head>.
import { products, findProduct, type Product } from "../data/products";

export const SITE = {
  name: "Zieon Metering",
  legalName: "Zieon Metering Technologies Ltd",
  alternateNames: ["Zieon Metering Technologies", "Zieon Metering Technologies Ltd", "Zieonenergy meters"],
  // Override per environment with VITE_SITE_URL (no trailing slash)
  url: "https://www.zieonmetering.com",
  email: "hello@zieonenergies.com",
  locale: "en_NG",
  image: "/og/default.jpg",
  logo: "/brand/icon-512.png",
  parent: { name: "Zieon Energies Ltd", url: "https://www.zieonenergies.com" },
  sister: { name: "Zenerlink Technologies Ltd", url: "https://www.zenerlink.com" },
};

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

const staticPages: Record<string, PageMeta> = {
  "/": {
    title: "Smart Prepaid Electricity Meters for Nigeria",
    description:
      "Zieon Metering Technologies makes smart prepaid electricity meters for Nigerian homes, estates, utilities and businesses. Tokens arrive automatically — payment to power in under 90 seconds.",
  },
  "/products": {
    title: "Prepaid Meters & Energy Hardware",
    description:
      "The Zieonenergy Prepaid Meter, Solar Prepaid Meter, Next-Gen LoRaWAN Meter and home energy hardware. Compare specifications and request a quote.",
  },
  "/solutions": {
    title: "Metering Solutions for Homes, Estates, Utilities & Businesses",
    description:
      "Prepaid metering for homes, landlords and estates, utilities and DisCos, and businesses across Nigeria. Automatic token delivery with nothing to type.",
  },
  "/technology": {
    title: "Our Technology — Automatic Tokens, STS and LoRaWAN",
    description:
      "How Zieon meters receive tokens automatically: STS-standard tokens, a LoRaWAN delivery layer and intelligent fallback for unstable networks.",
  },
  "/support": {
    title: "Support — Installation, Warranty & FAQs",
    description:
      "Help with your Zieon meter: installation, the 12-month warranty, buying units and frequently asked questions.",
  },
  "/contact": {
    title: "Request a Quote or Contact Us",
    description:
      "Request a quote for prepaid meters, order for your home or estate, or ask our team a question. Email hello@zieonenergies.com.",
  },
};

const availability: Record<Product["status"], string> = {
  Available: "https://schema.org/InStock",
  "In development": "https://schema.org/PreOrder",
  "Coming soon": "https://schema.org/PreOrder",
};

// Trim to a search-snippet length on a word boundary
function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).replace(/[\s,—-]+\S*$/, "") + "…";
}

function productMeta(p: Product, siteUrl: string): PageMeta {
  const price = p.price?.match(/[\d,]+/)?.[0]?.replace(/,/g, "");
  const url = `${siteUrl}/products/${p.slug}`;
  return {
    title: p.name,
    description: clamp(`${p.tagline} ${p.description}`, 160),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: p.name,
        description: p.description,
        category: p.category,
        brand: { "@type": "Brand", name: "Zieonenergy" },
        manufacturer: { "@id": `${siteUrl}/#organization` },
        url,
        image: `${siteUrl}${p.visual.kind === "photo" ? p.visual.src : SITE.image}`,
        ...(price
          ? {
              offers: {
                "@type": "Offer",
                price,
                priceCurrency: "NGN",
                availability: availability[p.status],
                url,
              },
            }
          : {}),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
    ],
  };
}

export const notFoundMeta: PageMeta = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  noindex: true,
};

export function metaForPath(path: string, siteUrl = SITE.url): PageMeta {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  if (staticPages[clean]) return staticPages[clean];
  const match = clean.match(/^\/products\/([^/]+)$/);
  const product = match ? findProduct(match[1]!) : undefined;
  return product ? productMeta(product, siteUrl) : notFoundMeta;
}

/** Every indexable route, for the sitemap and build-time pre-rendering. */
export function indexablePaths(): string[] {
  return [...Object.keys(staticPages), ...products.map((p) => `/products/${p.slug}`)];
}

const sitelinks = [
  { name: "Products", path: "/products" },
  { name: "Prepaid Meter", path: "/products/prepaid-meter" },
  { name: "Solutions", path: "/solutions" },
  { name: "Technology", path: "/technology" },
  { name: "Support", path: "/support" },
  { name: "Request a quote", path: "/contact" },
];

export function siteJsonLd(siteUrl = SITE.url): Record<string, unknown>[] {
  const org = `${siteUrl}/#organization`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": org,
      name: SITE.name,
      legalName: SITE.legalName,
      alternateName: SITE.alternateNames,
      description:
        "Zieon Metering Technologies makes smart prepaid electricity meters and energy hardware for Nigerian homes, estates, utilities and businesses.",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}${SITE.logo}`, width: 512, height: 512 },
      image: `${siteUrl}${SITE.image}`,
      email: SITE.email,
      areaServed: { "@type": "Country", name: "Nigeria" },
      knowsAbout: ["Prepaid electricity meters", "Smart metering", "Solar prepaid meters", "STS tokens", "LoRaWAN"],
      parentOrganization: { "@type": "Organization", name: SITE.parent.name, url: SITE.parent.url },
      contactPoint: { "@type": "ContactPoint", email: SITE.email, contactType: "sales", areaServed: "NG", availableLanguage: "English" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: `${siteUrl}/`,
      inLanguage: "en-NG",
      publisher: { "@id": org },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Main sections",
      itemListElement: sitelinks.map((l, i) => ({
        "@type": "SiteNavigationElement",
        position: i + 1,
        name: l.name,
        url: `${siteUrl}${l.path}`,
      })),
    },
  ];
}

export function fullTitle(meta: PageMeta) {
  return `${meta.title} | ${SITE.name}`;
}
