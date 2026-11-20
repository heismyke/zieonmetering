export const ZENERLINK_URL = "https://www.zenerlink.com";

// A link inside the site, or (external) one that opens another site
export interface NavLink {
  label: string;
  to: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  to: string;
  // Mega-menu content shown on desktop hover / mobile expand
  menu?: {
    intro: { title: string; text: string; image: string; to: string };
    groups: { title: string; links: NavLink[] }[];
  };
}

export const primaryNav: NavItem[] = [
  {
    label: "Products",
    to: "/products",
    menu: {
      intro: {
        title: "Our products",
        text: "Smart prepaid meters and home energy hardware, built for the Nigerian grid.",
        image: "/images/meter-electronics.jpg",
        to: "/products",
      },
      groups: [
        {
          title: "Meters",
          links: [
            { label: "Prepaid Meter", to: "/products/prepaid-meter" },
            { label: "Solar Prepaid Meter", to: "/products/solar-prepaid-meter" },
            { label: "LoRaWAN Meter", to: "/products/next-gen-lorawan-meter" },
          ],
        },
        {
          title: "Home energy",
          links: [
            { label: "Smart Plugs", to: "/products/smart-plugs" },
            { label: "Home Battery", to: "/products/home-batteries" },
            { label: "Solar Kits", to: "/products/solar-kits" },
          ],
        },
        {
          title: "Buy units",
          links: [{ label: "Zenerlink", to: ZENERLINK_URL, external: true }],
        },
      ],
    },
  },
  { label: "Solutions", to: "/solutions" },
  { label: "Technology", to: "/technology" },
  { label: "Support", to: "/support" },
];

export const CONTACT_EMAIL = "hello@zieonmetering.com";
