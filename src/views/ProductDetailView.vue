<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { CheckIcon, ArrowRightIcon, LifebuoyIcon, WrenchScrewdriverIcon, ShieldCheckIcon, DocumentArrowDownIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import SiteLayout from "../components/site/SiteLayout.vue";
import ProductVisual from "../components/ui/ProductVisual.vue";
import ProductCard from "../components/ui/ProductCard.vue";
import StatusBadge from "../components/ui/StatusBadge.vue";
import SectionHeading from "../components/ui/SectionHeading.vue";
import NotFoundView from "./NotFoundView.vue";
import { findProduct, products } from "../data/products";

const props = defineProps<{ slug: string }>();

const product = computed(() => findProduct(props.slug));
const related = computed(() => {
  const p = product.value;
  if (!p) return [];
  return [...products.filter((o) => o.slug !== p.slug && o.category === p.category), ...products.filter((o) => o.category !== p.category)].slice(0, 3);
});

const assurances = [
  { icon: WrenchScrewdriverIcon, title: "Professional installation", text: "Set up by our installation team" },
  { icon: ShieldCheckIcon, title: "12-month warranty", text: "On meters, with support when you need it" },
  { icon: LifebuoyIcon, title: "24/7 priority support", text: "We're here whenever you need us" },
];
</script>

<template>
  <NotFoundView v-if="!product" />
  <SiteLayout v-else>
    <!-- Breadcrumb -->
    <div class="border-b border-line bg-white">
      <nav aria-label="Breadcrumb" class="container py-4">
        <ol class="flex flex-wrap items-center gap-1 text-sm text-ink-500">
          <li><RouterLink to="/" class="hover:text-brand-500">Home</RouterLink></li>
          <li class="flex items-center gap-1"><ChevronRightIcon class="h-4 w-4 text-ink-300" /><RouterLink to="/products" class="hover:text-brand-500">Products</RouterLink></li>
          <li class="flex items-center gap-1"><ChevronRightIcon class="h-4 w-4 text-ink-300" /><span class="text-ink-900" aria-current="page">{{ product.name }}</span></li>
        </ol>
      </nav>
    </div>

    <!-- Product hero -->
    <section class="bg-white py-10 md:py-16">
      <div class="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="animate-fade-up">
          <div class="overflow-hidden rounded-xl border border-line"><ProductVisual :visual="product.visual" size="hero" /></div>
        </div>
        <div class="animate-fade-up [animation-delay:120ms]">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{{ product.category }}</span>
            <StatusBadge :status="product.status" />
          </div>
          <h1 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{{ product.name }}</h1>
          <p class="mt-4 text-lg font-medium text-ink-700">{{ product.tagline }}</p>
          <p class="mt-5 leading-relaxed text-ink-500">{{ product.description }}</p>

          <ul class="mt-8 space-y-3">
            <li v-for="h in product.highlights" :key="h" class="flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                <CheckIcon class="h-3.5 w-3.5" stroke-width="3" />
              </span>
              <span class="text-ink-700">{{ h }}</span>
            </li>
          </ul>

          <div class="mt-8 flex flex-wrap items-center gap-6 border-t border-line pt-8">
            <p v-if="product.price" class="text-xl font-bold">{{ product.price }}</p>
            <RouterLink :to="{ path: '/contact', query: { product: product.slug } }" class="btn-primary">Request a quote <ArrowRightIcon class="h-4 w-4" /></RouterLink>
            <RouterLink :to="{ path: '/contact', query: { product: product.slug, topic: 'datasheet' } }" class="btn-outline">
              <DocumentArrowDownIcon class="h-4 w-4" /> Request datasheet
            </RouterLink>
          </div>
          <p class="mt-4 text-sm text-ink-400">
            Suitable for: <span class="font-medium text-ink-600">{{ product.audiences.join(" · ") }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Assurances -->
    <section class="border-y border-line bg-surface">
      <div class="container grid gap-6 py-8 sm:grid-cols-3">
        <div v-for="a in assurances" :key="a.title" class="flex items-center gap-4">
          <component :is="a.icon" class="h-9 w-9 shrink-0 text-brand-500" />
          <div>
            <p class="font-bold">{{ a.title }}</p>
            <p class="text-sm text-ink-500">{{ a.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specifications -->
    <section v-if="product.specs" class="section bg-white">
      <div class="container grid gap-10 lg:grid-cols-[1fr_2fr]">
        <SectionHeading eyebrow="Specifications" title="Technical details" />
        <dl v-reveal class="overflow-hidden rounded-xl border border-line">
          <div v-for="(s, i) in product.specs" :key="s.label" :class="['grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6', i % 2 ? 'bg-white' : 'bg-surface']">
            <dt class="font-semibold text-ink-900">{{ s.label }}</dt>
            <dd class="text-ink-600">{{ s.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Related -->
    <section class="section bg-surface">
      <div class="container">
        <SectionHeading eyebrow="More from our range" title="Related products" />
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(r, i) in related" :key="r.slug" v-reveal="i * 80">
            <ProductCard :product="r" />
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
