<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

defineProps<{
  title: string;
  text?: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}>();
</script>

<template>
  <section class="bg-grid-dark bg-ink-900 text-white">
    <div class="container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
      <div v-reveal class="max-w-2xl">
        <h2 class="h-section text-white">{{ title }}</h2>
        <p v-if="text" class="mt-4 text-base text-ink-300">{{ text }}</p>
      </div>
      <div v-reveal="100" class="flex shrink-0 flex-wrap gap-3">
        <RouterLink :to="primary.to" class="btn bg-brand-500 text-white hover:bg-brand-400">
          {{ primary.label }} <ArrowRightIcon class="h-4 w-4" />
        </RouterLink>
        <RouterLink v-if="secondary" :to="secondary.to" class="btn border border-white/25 text-white hover:border-white">{{ secondary.label }}</RouterLink>
      </div>
    </div>
  </section>
</template>
