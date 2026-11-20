<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

defineProps<{
  title: string;
  text?: string;
  image: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}>();
</script>

<template>
  <section class="relative isolate overflow-hidden bg-ink-900">
    <img :src="image" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-50" loading="lazy" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />
    <div class="container py-20 md:py-28">
      <div v-reveal class="max-w-2xl">
        <h2 class="h-section text-white md:text-3xl">{{ title }}</h2>
        <p v-if="text" class="mt-5 text-base text-ink-200">{{ text }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink :to="primary.to" class="btn-primary">
            {{ primary.label }} <ArrowRightIcon class="h-4 w-4" />
          </RouterLink>
          <RouterLink v-if="secondary" :to="secondary.to" class="btn-outline-light">{{ secondary.label }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
