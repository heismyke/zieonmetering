<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

defineProps<{
  title: string;
  intro?: string;
  eyebrow?: string;
  image: string;
  breadcrumbs?: { label: string; to?: string }[];
}>();
</script>

<template>
  <section class="relative isolate flex min-h-[420px] items-end overflow-hidden bg-ink-900 md:min-h-[520px]">
    <img :src="image" alt="" class="absolute inset-0 -z-10 h-full w-full animate-ken-burns object-cover" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-ink-900/10" />
    <div class="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-900/60 to-transparent" />

    <div class="container pb-12 pt-16 md:pb-16">
      <nav v-if="breadcrumbs?.length" aria-label="Breadcrumb" class="mb-6 animate-fade-up">
        <ol class="flex flex-wrap items-center gap-1 text-sm text-white/70">
          <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
          <li v-for="crumb in breadcrumbs" :key="crumb.label" class="flex items-center gap-1">
            <ChevronRightIcon class="h-4 w-4 text-white/40" />
            <RouterLink v-if="crumb.to" :to="crumb.to" class="hover:text-white">{{ crumb.label }}</RouterLink>
            <span v-else class="text-white" aria-current="page">{{ crumb.label }}</span>
          </li>
        </ol>
      </nav>
      <div class="max-w-3xl">
        <p v-if="eyebrow" class="eyebrow mb-4 animate-fade-up text-white/70">{{ eyebrow }}</p>
        <h1 class="h-display animate-fade-up text-white [animation-delay:100ms]">{{ title }}</h1>
        <p v-if="intro" class="mt-5 max-w-2xl animate-fade-up text-base text-white/85 [animation-delay:200ms] md:text-lg">
          {{ intro }}
        </p>
        <div v-if="$slots.default" class="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:300ms]">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
