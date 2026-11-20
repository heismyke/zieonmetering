<script setup lang="ts">
import { RouterLink } from "vue-router";

// "full": orange mark with ZIEON METERING. "light": the mark alone, for the footer.
withDefaults(defineProps<{ variant?: "full" | "light" }>(), { variant: "full" });
</script>

<template>
  <RouterLink to="/" class="flex shrink-0 items-center" aria-label="Zieon Metering — go to homepage">
    <span v-if="variant === 'full'" class="flex items-center gap-2.5 lg:gap-3">
      <img src="/brand/icon.svg" alt="" class="h-8 w-auto lg:h-9" width="44" height="40" />
      <span class="whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[0.06em] text-ink-900 lg:text-xl">
        ZIEON <span class="text-brand-500">METERING</span>
      </span>
    </span>
    <img v-else src="/brand/icon-white.svg" alt="" class="h-8 w-auto" width="44" height="40" />
  </RouterLink>
</template>
