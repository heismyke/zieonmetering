<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import BrandLogo from "./BrandLogo.vue";
import { PARENT_URL, ZENERLINK_URL, type NavLink } from "../../data/navigation";

const columns: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Prepaid Meter", to: "/products/prepaid-meter" },
      { label: "Solar Prepaid Meter", to: "/products/solar-prepaid-meter" },
      { label: "Next-Gen LoRaWAN Meter", to: "/products/next-gen-lorawan-meter" },
      { label: "Home energy", to: "/products?category=Home%20energy" },
      { label: "All products", to: "/products" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Homes", to: "/solutions#homes" },
      { label: "Landlords & estates", to: "/solutions#estates" },
      { label: "Utilities & DisCos", to: "/solutions#utilities" },
      { label: "Businesses", to: "/solutions#businesses" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help & FAQs", to: "/support" },
      { label: "Installation & warranty", to: "/support#warranty" },
      { label: "Request a quote", to: "/contact" },
      { label: "Contact us", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Technology", to: "/technology" },
      { label: "Zieon Energies (parent company)", to: PARENT_URL, external: true },
      { label: "Zenerlink: buy units online", to: ZENERLINK_URL, external: true },
      { label: "Careers", to: `${PARENT_URL}/about#careers`, external: true },
    ],
  },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-ink-900 text-ink-200">
    <div class="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
      <div class="lg:col-span-2">
        <BrandLogo variant="light" />
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
          Smart prepaid meters and energy hardware for Nigerian homes, estates, utilities and businesses.
        </p>
        <a :href="PARENT_URL" target="_blank" rel="noopener" class="mt-5 inline-flex items-center gap-1 text-sm text-ink-300 hover:text-white">
          A Zieon Energies company <ArrowUpRightIcon class="h-3.5 w-3.5" />
        </a>
      </div>

      <div v-for="col in columns" :key="col.title">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">{{ col.title }}</p>
        <ul class="space-y-2.5 text-sm">
          <li v-for="link in col.links" :key="link.label">
            <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="inline-flex items-center gap-1 transition-colors hover:text-brand-400">
              {{ link.label }} <ArrowUpRightIcon class="h-3 w-3" />
            </a>
            <RouterLink v-else :to="link.to" class="transition-colors hover:text-brand-400">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container flex flex-col gap-4 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
        <p>© {{ year }} Zieon Metering Technologies Ltd — a Zieon Energies company.</p>
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li><RouterLink to="/contact" class="hover:text-white">Privacy notice</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-white">Terms & conditions</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
