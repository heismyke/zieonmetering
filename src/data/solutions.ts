// Who the meters are for. Used on the home page and /solutions.
export interface Solution {
  id: string;
  title: string;
  short: string;
  text: string;
  image: string;
  points: string[];
  products: string[];
}

export const solutions: Solution[] = [
  {
    id: "homes",
    title: "Homes",
    short: "Power with no codes to type",
    text: "Reliable, transparent power with no codes to type and full visibility of what you use.",
    image: "/images/smart-home.jpg",
    points: ["Tokens arrive automatically when you pay", "See what you use in real time", "Professional installation included"],
    products: ["prepaid-meter", "solar-prepaid-meter", "smart-plugs"],
  },
  {
    id: "estates",
    title: "Landlords & estates",
    short: "Meter every unit",
    text: "Meter every flat, shop and common area, and end billing disputes for good.",
    image: "/images/solar-aerial.jpg",
    points: ["One meter per unit, each with its own record", "Tenants buy their own units online", "Built for dense urban estates"],
    products: ["prepaid-meter", "next-gen-lorawan-meter"],
  },
  {
    id: "utilities",
    title: "Utilities & DisCos",
    short: "Prepaid metering at scale",
    text: "STS prepaid meters that load tokens automatically, so customers get power the moment they pay.",
    image: "/images/pylons.jpg",
    points: ["STS token standard", "Works with all 12 Nigerian DisCos", "Long-range LoRaWAN delivery with fallback"],
    products: ["prepaid-meter", "next-gen-lorawan-meter"],
  },
  {
    id: "businesses",
    title: "Businesses",
    short: "Clear, prepaid power for your sites",
    text: "Prepaid metering for shops, offices and sites, with a clear record of what each one uses.",
    image: "/images/team-office.jpg",
    points: ["Payment to power in under 90 seconds", "Real-time consumption tracking", "12-month warranty and support"],
    products: ["prepaid-meter", "solar-prepaid-meter", "home-batteries"],
  },
];
