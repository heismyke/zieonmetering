<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
import BrandLogo from "./BrandLogo.vue";
import { CONTACT_EMAIL, ZENERLINK_URL, type NavLink } from "../../data/navigation";

const columns: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Prepaid Meter", to: "/products/prepaid-meter" },
      { label: "Solar Prepaid Meter", to: "/products/solar-prepaid-meter" },
      { label: "LoRaWAN Meter", to: "/products/next-gen-lorawan-meter" },
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
      { label: "Request a datasheet", to: "/contact?topic=datasheet" },
      { label: "Buy units online", to: ZENERLINK_URL, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Technology", to: "/technology" },
      { label: "Request a quote", to: "/contact" },
      { label: "Careers", to: "/contact#careers" },
      { label: "Contact us", to: "/contact" },
    ],
  },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line bg-surface text-ink-600">
    <div class="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
      <div class="lg:col-span-2">
        <BrandLogo />
        <p class="mt-5 max-w-xs text-sm leading-relaxed">
          Smart prepaid meters and energy hardware for Nigerian homes, estates, utilities and businesses.
        </p>
        <a :href="`mailto:${CONTACT_EMAIL}`" class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-brand-700">
          <EnvelopeIcon class="h-4 w-4" /> {{ CONTACT_EMAIL }}
        </a>
      </div>

      <div v-for="col in columns" :key="col.title">
        <p class="mb-4 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink-900">{{ col.title }}</p>
        <ul class="space-y-2.5 text-sm">
          <li v-for="link in col.links" :key="link.label">
            <a v-if="link.external" :href="link.to" target="_blank" rel="noopener" class="inline-flex items-center gap-1 hover:text-brand-700">
              {{ link.label }} <ArrowUpRightIcon class="h-3 w-3" />
            </a>
            <RouterLink v-else :to="link.to" class="hover:text-brand-700">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-line">
      <div class="container flex flex-col gap-4 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
        <p>© {{ year }} Zieon Metering Technologies Ltd. All rights reserved.</p>
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li><RouterLink to="/contact" class="hover:text-ink-900">Privacy notice</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-ink-900">Terms & conditions</RouterLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
