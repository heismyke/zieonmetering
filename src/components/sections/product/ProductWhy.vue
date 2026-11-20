<script setup lang="ts">
import { XCircleIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";
import SectionHeading from "../../ui/SectionHeading.vue";

const before = [
  "Find a CIU device and type a 20-digit code",
  "15 minutes and up to 3 failed attempts",
  "Paid for power — still sitting in the dark",
];
const after = [
  "Token generated instantly on payment",
  "Meter loaded automatically — nothing to type",
  "All 12 DisCos supported",
];

const tech = [
  {
    title: "Automatic transmission",
    text: "Tokens are pushed to your meter the moment payment is confirmed. No codes to type, ever.",
  },
  {
    title: "Intelligent fallback",
    text: "Multiple delivery paths keep token success at 94% even on unstable urban networks.",
  },
  {
    title: "Built on global standards",
    text: "STS-compliant tokens with a proprietary LoRaWAN dispatch layer for reliable delivery.",
  },
];
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <SectionHeading
        align="center"
        eyebrow="Why automatic prepaid"
        title="From payment to power. Zero friction."
        intro="Emeka paid for his electricity. He still has no power. We build meters so no one has to type a code in the dark again."
      />

      <div class="mx-auto mt-14 grid max-w-5xl gap-px bg-line md:grid-cols-2">
        <div v-reveal class="bg-surface p-8 md:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">The old way</p>
          <ul class="mt-6 space-y-4">
            <li v-for="item in before" :key="item" class="flex gap-3 text-ink-600">
              <XCircleIcon class="h-6 w-6 shrink-0 text-ink-300" /> {{ item }}
            </li>
          </ul>
        </div>
        <div v-reveal="100" class="bg-ink-900 p-8 text-white md:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">With a Zieon meter</p>
          <ul class="mt-6 space-y-4">
            <li v-for="item in after" :key="item" class="flex gap-3">
              <CheckCircleIcon class="h-6 w-6 shrink-0 text-brand-400" /> {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 grid gap-10 md:grid-cols-3">
        <div v-for="(t, i) in tech" :key="t.title" v-reveal="i * 100" class="border-t-[3px] border-brand-500 pt-6">
          <h3 class="h-card">{{ t.title }}</h3>
          <p class="mt-3 leading-relaxed text-ink-500">{{ t.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
