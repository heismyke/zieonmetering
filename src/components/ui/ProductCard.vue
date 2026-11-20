<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { Product } from "../../data/products";
import ProductVisual from "./ProductVisual.vue";
import StatusBadge from "./StatusBadge.vue";

// Spec-led card: a few key specifications in rows, like a datasheet summary.
const props = defineProps<{ product: Product }>();
const rows = (props.product.specs ?? []).slice(0, 3);
const points = rows.length ? [] : props.product.highlights.slice(0, 3);
</script>

<template>
  <RouterLink
    :to="`/products/${product.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-colors duration-300 hover:border-brand-400"
  >
    <div class="relative border-b border-line">
      <ProductVisual :visual="product.visual" />
      <StatusBadge :status="product.status" class="absolute left-3 top-3" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{{ product.category }}</p>
      <h3 class="h-card mt-2 group-hover:text-brand-700">{{ product.name }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ product.tagline }}</p>
      <dl v-if="rows.length" class="mt-5 divide-y divide-line border-y border-line text-[13px]">
        <div v-for="r in rows" :key="r.label" class="flex justify-between gap-4 py-2">
          <dt class="text-ink-400">{{ r.label }}</dt>
          <dd class="text-right font-medium text-ink-800">{{ r.value }}</dd>
        </div>
      </dl>
      <ul v-else class="mt-5 space-y-1.5 border-t border-line pt-4 text-[13px] text-ink-600">
        <li v-for="p in points" :key="p" class="flex gap-2"><span class="mt-[7px] h-1 w-3 shrink-0 bg-brand-500" />{{ p }}</li>
      </ul>
      <div class="mt-auto flex items-end justify-between pt-6">
        <span v-if="product.price" class="font-display text-sm font-semibold text-ink-900">{{ product.price }}</span>
        <span class="link-arrow ml-auto">View specs <ArrowRightIcon /></span>
      </div>
    </div>
  </RouterLink>
</template>
