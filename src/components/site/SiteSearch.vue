<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { MagnifyingGlassIcon, XMarkIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import { products } from "../../data/products";

const emit = defineEmits<{ close: [] }>();

const query = ref("");
const input = ref<HTMLInputElement | null>(null);

const pages = [
  { title: "Products", text: "Prepaid meters and energy hardware", to: "/products" },
  { title: "Solutions", text: "Homes, estates, utilities and businesses", to: "/solutions" },
  { title: "Technology", text: "Automatic tokens, STS and LoRaWAN", to: "/technology" },
  { title: "Support", text: "Installation, warranty and FAQs", to: "/support" },
  { title: "Request a quote", text: "Order meters or ask our team", to: "/contact" },
];

const index = [
  ...products.map((p) => ({ title: p.name, text: p.tagline, to: `/products/${p.slug}` })),
  ...pages,
];

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return [];
  return index.filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q)).slice(0, 8);
});

onMounted(() => nextTick(() => input.value?.focus()));
</script>

<template>
  <div class="fixed inset-0 z-[60] bg-ink-900/60 backdrop-blur-sm" @click.self="emit('close')" @keydown.esc="emit('close')">
    <div class="bg-white shadow-card-hover">
      <div class="container py-6">
        <div class="flex items-center gap-4 border-b-2 border-ink-900 pb-3">
          <MagnifyingGlassIcon class="h-6 w-6 shrink-0 text-ink-400" />
          <input
            ref="input"
            v-model="query"
            type="search"
            placeholder="Search products and pages"
            class="w-full bg-transparent text-base font-medium outline-none placeholder:text-ink-300 md:text-xl"
            aria-label="Search"
          />
          <button type="button" class="p-1 text-ink-500 hover:text-ink-900" aria-label="Close search" @click="emit('close')">
            <XMarkIcon class="h-7 w-7" />
          </button>
        </div>

        <ul v-if="results.length" class="mt-4 divide-y divide-line">
          <li v-for="r in results" :key="r.to">
            <RouterLink :to="r.to" class="group flex items-center justify-between gap-4 py-4" @click="emit('close')">
              <span>
                <span class="block font-semibold text-ink-900 group-hover:text-brand-500">{{ r.title }}</span>
                <span class="block text-sm text-ink-400">{{ r.text }}</span>
              </span>
              <ArrowRightIcon class="h-5 w-5 shrink-0 text-ink-300 group-hover:text-brand-500" />
            </RouterLink>
          </li>
        </ul>
        <p v-else-if="query" class="py-6 text-ink-400">No results for “{{ query }}”.</p>
        <div v-else class="flex flex-wrap items-center gap-2 py-5 text-sm">
          <span class="mr-2 text-ink-400">Popular:</span>
          <button
            v-for="term in ['Prepaid meter', 'Solar meter', 'LoRaWAN', 'Warranty', 'Installation']"
            :key="term"
            type="button"
            class="rounded-full border border-line px-3 py-1 text-ink-600 hover:border-brand-500 hover:text-brand-500"
            @click="query = term"
          >
            {{ term }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
