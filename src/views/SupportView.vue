<script setup lang="ts">
import { RouterLink } from "vue-router";
import { WrenchScrewdriverIcon, ShieldCheckIcon, LifebuoyIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import SiteLayout from "../components/site/SiteLayout.vue";
import PageBanner from "../components/site/PageBanner.vue";
import ContactFAQ from "../components/sections/contact/ContactFAQ.vue";
import { ZENERLINK_URL } from "../data/navigation";

const help = [
  { icon: WrenchScrewdriverIcon, title: "Installation", text: "Every meter is fitted by our professional installation team, included in the price." },
  { icon: ShieldCheckIcon, title: "12-month warranty", text: "Our prepaid meter is covered for 12 months. Tell us if anything goes wrong and we'll sort it out." },
  { icon: LifebuoyIcon, title: "24/7 priority support", text: "Meter customers can reach us any time at hello@zieonmetering.com." },
];
</script>

<template>
  <SiteLayout>
    <PageBanner
      eyebrow="Support"
      title="How can we help?"
      intro="Installation, warranty, buying units and answers to common questions."
      image="/images/electrician.jpg"
      :breadcrumbs="[{ label: 'Support' }]"
    />
    <section id="warranty" class="section scroll-mt-32 bg-surface">
      <div class="container grid gap-6 md:grid-cols-3">
        <div v-for="(h, i) in help" :key="h.title" v-reveal="i * 80" class="rounded-lg border border-line bg-white p-7">
          <component :is="h.icon" class="h-8 w-8 text-brand-500" />
          <h2 class="h-card mt-5">{{ h.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ h.text }}</p>
        </div>
      </div>
      <div class="container mt-8 flex flex-wrap gap-3">
        <RouterLink to="/contact?topic=support" class="btn-primary">Contact support <ArrowRightIcon class="h-4 w-4" /></RouterLink>
        <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="btn-outline">Buy units on Zenerlink <ArrowUpRightIcon class="h-4 w-4" /></a>
      </div>
    </section>
    <ContactFAQ />
  </SiteLayout>
</template>
