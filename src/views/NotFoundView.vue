<script setup lang="ts">
import { RouterLink } from "vue-router";
import SiteLayout from "../components/site/SiteLayout.vue";
</script>

<template>
  <SiteLayout>
    <section class="section bg-surface">
      <div class="container max-w-2xl py-12 text-center">
        <p class="text-5xl font-bold text-brand-500">404</p>
        <h1 class="h-section mt-4">We couldn't find that page</h1>
        <p class="lead mt-4">The page may have moved, or the link may be out of date.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <RouterLink to="/" class="btn-primary">Back to home</RouterLink>
          <RouterLink to="/products" class="btn-outline">Browse products</RouterLink>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
