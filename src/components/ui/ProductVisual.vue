<script setup lang="ts">
import type { ProductVisual } from "../../data/products";
import DeviceArt from "./DeviceArt.vue";

withDefaults(defineProps<{ visual: ProductVisual; size?: "card" | "hero" }>(), { size: "card" });
</script>

<template>
  <div
    :class="[
      'relative flex w-full items-center justify-center overflow-hidden',
      visual.kind === 'photo' ? 'bg-ink-100' : 'bg-gradient-to-b from-surface to-ink-100',
      size === 'card' ? 'aspect-[4/3]' : 'aspect-square md:aspect-[5/4]',
    ]"
  >
    <img
      v-if="visual.kind === 'photo'"
      :src="visual.src"
      alt=""
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div
      v-else
      :class="['transition-transform duration-500 group-hover:-translate-y-1', size === 'card' ? 'h-[72%]' : 'h-[75%]']"
    >
      <DeviceArt :device="visual.device" />
    </div>
  </div>
</template>
