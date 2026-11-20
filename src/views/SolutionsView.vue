<script setup lang="ts">
import { RouterLink } from "vue-router";
import { CheckIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import SiteLayout from "../components/site/SiteLayout.vue";
import PageBanner from "../components/site/PageBanner.vue";
import CtaBanner from "../components/ui/CtaBanner.vue";
import { solutions } from "../data/solutions";
import { findProduct } from "../data/products";

const productsFor = (slugs: string[]) => slugs.map(findProduct).filter((p) => p !== undefined);
</script>

<template>
  <SiteLayout>
    <PageBanner
      eyebrow="Solutions"
      title="Metering for every customer"
      intro="Homes, landlords and estates, utilities and DisCos, and businesses: the same automatic prepaid experience, sized for you."
      image="/images/solar-aerial.jpg"
      :breadcrumbs="[{ label: 'Solutions' }]"
    />
    <nav aria-label="Solutions" class="sticky top-16 z-30 border-b border-line bg-white/95 backdrop-blur lg:top-[108px]">
      <ul class="container flex gap-6 overflow-x-auto py-3 text-sm font-medium text-ink-600">
        <li v-for="s in solutions" :key="s.id"><a :href="`#${s.id}`" class="whitespace-nowrap hover:text-brand-600">{{ s.title }}</a></li>
      </ul>
    </nav>
    <section
      v-for="(s, i) in solutions"
      :id="s.id"
      :key="s.id"
      :class="['section scroll-mt-32', i % 2 ? 'bg-surface' : 'bg-white']"
    >
      <div class="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <img :src="s.image" alt="" loading="lazy" :class="['aspect-[4/3] w-full rounded-xl object-cover', i % 2 && 'lg:order-2']" />
        <div>
          <p class="eyebrow">For {{ s.title.toLowerCase() }}</p>
          <h2 class="h-section mt-3">{{ s.short }}</h2>
          <p class="lead mt-4">{{ s.text }}</p>
          <ul class="mt-6 space-y-3">
            <li v-for="pt in s.points" :key="pt" class="flex items-start gap-3 text-ink-700">
              <CheckIcon class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" stroke-width="2.5" /> {{ pt }}
            </li>
          </ul>
          <p class="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Products for this</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="p in productsFor(s.products)" :key="p.slug">
              <RouterLink :to="`/products/${p.slug}`" class="inline-flex items-center gap-1 rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink-700 hover:border-brand-500 hover:text-brand-600">
                {{ p.name }}
              </RouterLink>
            </li>
          </ul>
          <RouterLink to="/contact" class="btn-primary mt-8">Request a quote <ArrowRightIcon class="h-4 w-4" /></RouterLink>
        </div>
      </div>
    </section>
    <CtaBanner
      title="Have a bigger project?"
      text="Estates, utilities and businesses: tell us how many meters you need and we'll plan it with you."
      image="/images/field-technician.jpg"
      :primary="{ label: 'Request a quote', to: '/contact' }"
    />
  </SiteLayout>
</template>
