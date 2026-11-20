export type ProductCategory = "Meters" | "Home energy";
export type ProductAudience = "Homes" | "Landlords & estates" | "Utilities & DisCos" | "Businesses";
export type ProductStatus = "Available" | "In development" | "Coming soon";

// How the product is pictured on cards and the detail page.
export type ProductVisual =
  | { kind: "device"; device: "meter" | "meter-solar" | "meter-next" | "plug" | "battery" }
  | { kind: "photo"; src: string };

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  audiences: ProductAudience[];
  status: ProductStatus;
  tagline: string;
  description: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  price?: string;
  visual: ProductVisual;
  cta: { label: string; to: string };
}

export const products: Product[] = [
  {
    slug: "prepaid-meter",
    name: "Zieon Prepaid Meter",
    category: "Meters",
    audiences: ["Homes", "Landlords & estates", "Utilities & DisCos", "Businesses"],
    status: "Available",
    tagline: "Payment to power in under 90 seconds — no keypad, no 20-digit codes.",
    description:
      "The Zieon Prepaid Meter receives tokens automatically the moment you pay, with real-time visibility of your consumption.",
    highlights: [
      "Automatic token delivery — nothing to type",
      "Real-time consumption tracking",
      "Professional installation included",
      "12-month warranty and 24/7 priority support",
    ],
    specs: [
      { label: "Token standard", value: "STS (Standard Transfer Specification)" },
      { label: "Connectivity", value: "LoRaWAN with intelligent fallback" },
      { label: "DisCo compatibility", value: "All 12 Nigerian DisCos" },
      { label: "Buy units", value: "Zenerlink and other vendors" },
      { label: "Installation", value: "Professional, included" },
      { label: "Warranty", value: "12 months" },
    ],
    price: "From ₦65,000",
    visual: { kind: "device", device: "meter" },
    cta: { label: "Order your meter", to: "/contact" },
  },
  {
    slug: "solar-prepaid-meter",
    name: "Zieon Solar Prepaid Meter",
    category: "Meters",
    audiences: ["Homes", "Landlords & estates", "Businesses"],
    status: "Coming soon",
    tagline: "Prepaid, pay-as-you-go metering for solar power.",
    description:
      "We're bringing the same code-free prepaid experience to solar. Buy solar energy units, have them delivered to your meter automatically, and track what you use — just like grid power.",
    highlights: [
      "Prepaid, pay-as-you-go solar energy",
      "Units delivered automatically — nothing to type",
      "Track your solar consumption",
      "Built for homes, estates and businesses running on solar",
    ],
    visual: { kind: "device", device: "meter-solar" },
    cta: { label: "Register interest", to: "/contact" },
  },
  {
    slug: "next-gen-lorawan-meter",
    name: "Zieon LoRaWAN Meter",
    category: "Meters",
    audiences: ["Landlords & estates", "Utilities & DisCos", "Businesses"],
    status: "In development",
    tagline: "Proprietary hardware with built-in long-range radio.",
    description:
      "We are vertically integrating the energy stack. Our next-generation meter embeds LoRaWAN, recharge intelligence and demand forecasting directly in the hardware layer — built for dense urban estates.",
    highlights: [
      "Long-range, low-power LoRaWAN radio",
      "On-device recharge intelligence",
      "Demand forecasting and load behaviour tools",
    ],
    visual: { kind: "device", device: "meter-next" },
    cta: { label: "Register interest", to: "/contact" },
  },
  {
    slug: "smart-plugs",
    name: "Zieon Smart Plugs",
    category: "Home energy",
    audiences: ["Homes", "Businesses"],
    status: "Coming soon",
    tagline: "Control individual appliances and see their footprint.",
    description:
      "Switch appliances on and off remotely, set schedules and monitor exactly what each device costs you.",
    highlights: ["Remote on/off and schedules", "Per-appliance energy tracking"],
    visual: { kind: "device", device: "plug" },
    cta: { label: "Notify me", to: "/contact" },
  },
  {
    slug: "home-batteries",
    name: "Zieon Home Battery",
    category: "Home energy",
    audiences: ["Homes", "Businesses"],
    status: "In development",
    tagline: "Store energy when it's cheap, use it when the grid goes down.",
    description:
      "A battery system that charges when supply is available and keeps essential loads running through outages — integrated with your meter.",
    highlights: ["Automatic backup during outages", "Smart charging", "Integrated with your Zieon meter"],
    visual: { kind: "device", device: "battery" },
    cta: { label: "Register interest", to: "/contact" },
  },
  {
    slug: "solar-kits",
    name: "Zieon Solar Kits",
    category: "Home energy",
    audiences: ["Homes", "Businesses"],
    status: "Coming soon",
    tagline: "Plug-and-play solar that feeds your Zieon ecosystem.",
    description:
      "Generate your own power during the day and track solar production alongside grid consumption in a single view.",
    highlights: ["Plug-and-play installation", "Solar and grid in one dashboard", "Pairs with Zieon Home Battery"],
    visual: { kind: "photo", src: "/images/solar-home.jpg" },
    cta: { label: "Notify me", to: "/contact" },
  },
];

export const productCategories: ProductCategory[] = ["Meters", "Home energy"];
export const productAudiences: ProductAudience[] = ["Homes", "Landlords & estates", "Utilities & DisCos", "Businesses"];
export const productStatuses: ProductStatus[] = ["Available", "In development", "Coming soon"];

// Short facts shown as chips on product cards: the first specs, if any.
export function keyFacts(p: Product, n = 3) {
  const facts = p.specs?.length ? p.specs.map((s) => s.value) : p.highlights;
  return facts.slice(0, n);
}

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
