<script setup lang="ts">
import { computed } from "vue";
import type { ProductStatus } from "../../data/products";

const props = defineProps<{ status: ProductStatus }>();

const tone = computed(
  () =>
    ({
      Available: "bg-emerald-600 text-white",
      "In development": "bg-ink-700 text-white",
      "Coming soon": "bg-gold-500 text-white",
    })[props.status],
);
</script>

<template>
  <span :class="['badge whitespace-nowrap', tone]">
    <span class="h-1.5 w-1.5 rounded-full bg-current" />
    {{ status }}
  </span>
</template>
