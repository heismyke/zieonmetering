<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

defineProps<{
  title: string;
  intro?: string;
  eyebrow?: string;
  image?: string;
  breadcrumbs?: { label: string; to?: string }[];
}>();
</script>

<template>
  <section class="bg-grid border-b border-line bg-surface">
    <div :class="['container grid items-center gap-10 py-12 md:py-16', image && 'lg:grid-cols-[1.15fr_1fr]']">
      <div class="animate-fade-up">
        <nav v-if="breadcrumbs?.length" aria-label="Breadcrumb" class="mb-6">
          <ol class="flex flex-wrap items-center gap-1 text-sm text-ink-500">
            <li><RouterLink to="/" class="hover:text-ink-900">Home</RouterLink></li>
            <li v-for="crumb in breadcrumbs" :key="crumb.label" class="flex items-center gap-1">
              <ChevronRightIcon class="h-4 w-4 text-ink-300" />
              <RouterLink v-if="crumb.to" :to="crumb.to" class="hover:text-ink-900">{{ crumb.label }}</RouterLink>
              <span v-else class="text-ink-900" aria-current="page">{{ crumb.label }}</span>
            </li>
          </ol>
        </nav>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="h-display mt-4 max-w-3xl">{{ title }}</h1>
        <p v-if="intro" class="lead mt-5 max-w-2xl">{{ intro }}</p>
      </div>
      <img v-if="image" :src="image" alt="" class="aspect-[16/10] w-full animate-fade-up rounded-lg object-cover [animation-delay:120ms]" />
    </div>
  </section>
</template>
