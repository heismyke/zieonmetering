<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import ProductCard from "../../ui/ProductCard.vue";
import { products, productAudiences, productCategories, productStatuses, type Product } from "../../../data/products";

const filterGroups = [
  { key: "category", title: "Category", options: productCategories, matches: (p: Product, v: string) => p.category === v },
  { key: "audience", title: "Suitable for", options: productAudiences, matches: (p: Product, v: string) => p.audiences.some((a) => a === v) },
  { key: "status", title: "Availability", options: productStatuses, matches: (p: Product, v: string) => p.status === v },
] as const;

type GroupKey = (typeof filterGroups)[number]["key"];

const route = useRoute();
const fromQuery = (v: unknown) => (typeof v === "string" && v ? [v] : []);
const selected = reactive<Record<GroupKey, string[]>>({
  category: fromQuery(route.query.category),
  audience: fromQuery(route.query.for),
  status: [],
});
const sort = ref<"featured" | "az">("featured");
const filtersOpen = ref(false);

const countFor = (group: (typeof filterGroups)[number], option: string) =>
  products.filter((p) => group.matches(p, option)).length;

const results = computed(() => {
  const list = products.filter((p) =>
    filterGroups.every((g) => !selected[g.key].length || selected[g.key].some((v) => g.matches(p, v))),
  );
  return sort.value === "az" ? [...list].sort((a, b) => a.name.localeCompare(b.name)) : list;
});

const activeFilters = computed(() =>
  filterGroups.flatMap((g) => selected[g.key].map((value) => ({ key: g.key, value }))),
);

const removeFilter = (key: GroupKey, value: string) => {
  selected[key] = selected[key].filter((v) => v !== value);
};

const clearAll = () => {
  for (const g of filterGroups) selected[g.key] = [];
};
</script>

<template>
  <section id="catalogue" class="section bg-surface">
    <div class="container">
      <div class="grid gap-10 lg:grid-cols-[260px_1fr]">
        <!-- Filters -->
        <aside
          :class="[
            'lg:block',
            filtersOpen ? 'fixed inset-0 z-[55] block overflow-y-auto bg-white p-6 lg:static lg:z-auto lg:bg-transparent lg:p-0' : 'hidden',
          ]"
          aria-label="Product filters"
        >
          <div class="flex items-center justify-between border-b border-ink-900 pb-3">
            <p class="font-bold">Filter products</p>
            <button v-if="activeFilters.length" type="button" class="text-sm font-semibold text-brand-500 hover:underline" @click="clearAll">
              Clear all
            </button>
            <button type="button" class="lg:hidden" aria-label="Close filters" @click="filtersOpen = false">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>
          <fieldset v-for="group in filterGroups" :key="group.key" class="border-b border-line py-5">
            <legend class="sr-only">{{ group.title }}</legend>
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{{ group.title }}</p>
            <label
              v-for="option in group.options"
              :key="option"
              class="flex cursor-pointer items-center gap-3 py-1.5 text-[15px] text-ink-700 hover:text-ink-900"
            >
              <input
                v-model="selected[group.key]"
                type="checkbox"
                :value="option"
                class="h-4 w-4 rounded-sm border-ink-300 accent-brand-500"
              />
              <span class="flex-1">{{ option }}</span>
              <span class="text-xs text-ink-400">{{ countFor(group, option) }}</span>
            </label>
          </fieldset>
          <button type="button" class="btn-primary mt-6 w-full lg:hidden" @click="filtersOpen = false">
            Show {{ results.length }} products
          </button>
        </aside>

        <!-- Results -->
        <div>
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
            <p class="text-sm text-ink-500">
              <span class="font-bold text-ink-900">{{ results.length }}</span> of {{ products.length }} products
            </p>
            <div class="flex items-center gap-3">
              <button type="button" class="btn-outline !px-4 !py-2 lg:hidden" @click="filtersOpen = true">
                <AdjustmentsHorizontalIcon class="h-4 w-4" /> Filters
                <span v-if="activeFilters.length">({{ activeFilters.length }})</span>
              </button>
              <label class="flex items-center gap-2 text-sm text-ink-500">
                Sort by
                <select v-model="sort" class="rounded-sm border border-line bg-white px-3 py-2 font-semibold text-ink-900 focus:border-brand-500 focus:outline-none">
                  <option value="featured">Featured</option>
                  <option value="az">Name (A–Z)</option>
                </select>
              </label>
            </div>
          </div>

          <div v-if="activeFilters.length" class="mt-4 flex flex-wrap gap-2">
            <button
              v-for="f in activeFilters"
              :key="`${f.key}-${f.value}`"
              type="button"
              class="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white hover:bg-brand-500"
              @click="removeFilter(f.key, f.value)"
            >
              {{ f.value }} <XMarkIcon class="h-3.5 w-3.5" />
            </button>
          </div>

          <TransitionGroup
            v-if="results.length"
            tag="div"
            class="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-3"
          >
            <ProductCard v-for="product in results" :key="product.slug" :product="product" />
          </TransitionGroup>
          <div v-else class="mt-8 border border-dashed border-ink-200 bg-white p-12 text-center">
            <p class="font-semibold">No products match these filters.</p>
            <button type="button" class="link-arrow mt-3" @click="clearAll">Clear filters</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
