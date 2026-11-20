<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import ProductCard from "../../ui/ProductCard.vue";
import { products } from "../../../data/products";

const meters = products.filter((p) => p.category === "Meters");
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="eyebrow">Product range</p>
          <h2 class="h-section mt-4">Meters</h2>
        </div>
        <RouterLink to="/products" class="link-arrow">Compare all products <ArrowRightIcon /></RouterLink>
      </div>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(product, i) in meters" :key="product.slug" v-reveal="i * 80">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>
