<script setup lang="ts">
import { RouterLink } from "vue-router";
import { SignalIcon, ArrowPathIcon, CpuChipIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";

const points = [
  { icon: SignalIcon, title: "Automatic transmission", text: "Tokens are pushed to the meter the moment payment is confirmed." },
  { icon: ArrowPathIcon, title: "Intelligent fallback", text: "Multiple delivery paths keep tokens arriving on unstable networks." },
  { icon: CpuChipIcon, title: "Built on standards", text: "STS-compliant tokens with a LoRaWAN delivery layer." },
];
</script>

<template>
  <section class="section bg-white">
    <div class="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <img v-reveal src="/images/circuit-board.jpg" alt="Close-up of a circuit board" loading="lazy" class="aspect-[4/3] w-full rounded-lg object-cover" />
      <div>
        <p class="eyebrow">Technology</p>
        <h2 class="h-section mt-4">Engineered for the last mile</h2>
        <ul class="mt-8 space-y-6">
          <li v-for="(p, i) in points" :key="p.title" v-reveal="i * 80" class="flex gap-4">
            <component :is="p.icon" class="mt-0.5 h-6 w-6 shrink-0 text-brand-600" stroke-width="1.5" />
            <div>
              <p class="font-display font-semibold text-ink-900">{{ p.title }}</p>
              <p class="mt-1 text-[15px] text-ink-500">{{ p.text }}</p>
            </div>
          </li>
        </ul>
        <RouterLink to="/technology" class="link-arrow mt-8">How our meters work <ArrowRightIcon /></RouterLink>
      </div>
    </div>
  </section>
</template>
