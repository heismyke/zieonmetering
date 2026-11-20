<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    intro?: string;
    align?: "left" | "center";
    dark?: boolean;
  }>(),
  { align: "left", dark: false },
);
</script>

<template>
  <div v-reveal :class="['max-w-3xl', align === 'center' && 'mx-auto text-center']">
    <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
    <h2 :class="['h-section', dark ? 'text-white' : 'text-ink-900']">{{ title }}</h2>
    <p v-if="intro" :class="['mt-4 text-base leading-relaxed', dark ? 'text-ink-200' : 'text-ink-500']">{{ intro }}</p>
  </div>
</template>
