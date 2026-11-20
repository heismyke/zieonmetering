<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "../../ui/SectionHeading.vue";
import ProductCard from "../../ui/ProductCard.vue";
import { products } from "../../../data/products";

const meters = products.filter((p) => p.category === "Meters");
</script>

<template>
  <section class="section bg-surface">
    <div class="container">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Product range" title="Our meters" intro="Prepaid meters for grid and solar power, with a long-range meter on the way." />
        <RouterLink to="/products" class="btn-outline shrink-0">All products <ArrowRightIcon class="h-4 w-4" /></RouterLink>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(product, i) in meters" :key="product.slug" v-reveal="i * 80">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>
