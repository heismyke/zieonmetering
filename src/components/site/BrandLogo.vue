<script setup lang="ts">
import { RouterLink } from "vue-router";

// Teal dial mark with the ZIEON METERING wordmark. "light" is for dark backgrounds.
withDefaults(defineProps<{ variant?: "dark" | "light" }>(), { variant: "dark" });
</script>

<template>
  <RouterLink to="/" class="flex shrink-0 items-center gap-2.5" aria-label="Zieon Metering — go to homepage">
    <img src="/brand/mark.svg" alt="" class="h-8 w-8 lg:h-9 lg:w-9" width="36" height="36" />
    <span class="whitespace-nowrap font-display text-[17px] leading-none tracking-[0.08em] lg:text-[19px]">
      <span :class="['font-bold', variant === 'light' ? 'text-white' : 'text-ink-900']">ZIEON</span>
      <span :class="['ml-1.5 font-medium', variant === 'light' ? 'text-ink-300' : 'text-ink-500']">METERING</span>
    </span>
  </RouterLink>
</template>
