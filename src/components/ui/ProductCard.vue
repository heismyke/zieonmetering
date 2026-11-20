<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { keyFacts, type Product } from "../../data/products";
import ProductVisual from "./ProductVisual.vue";
import StatusBadge from "./StatusBadge.vue";

defineProps<{ product: Product }>();
</script>

<template>
  <RouterLink
    :to="`/products/${product.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow duration-300 hover:shadow-card-hover"
  >
    <div class="relative">
      <ProductVisual :visual="product.visual" />
      <StatusBadge :status="product.status" class="absolute left-3 top-3 shadow-sm" />
    </div>
    <div class="flex flex-1 flex-col border-t border-line p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">{{ product.category }}</p>
      <h3 class="h-card mt-2 transition-colors group-hover:text-brand-600">{{ product.name }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ product.tagline }}</p>
      <ul class="mt-4 flex flex-wrap gap-1.5">
        <li v-for="f in keyFacts(product)" :key="f" class="rounded-md bg-surface px-2 py-1 text-[11.5px] font-medium text-ink-600">{{ f }}</li>
      </ul>
      <div class="mt-auto flex items-end justify-between pt-6">
        <span v-if="product.price" class="text-sm font-bold text-ink-900">{{ product.price }}</span>
        <span class="link-arrow ml-auto">View details <ArrowRightIcon /></span>
      </div>
    </div>
  </RouterLink>
</template>
