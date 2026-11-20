<script setup lang="ts">
import { BanknotesIcon, SignalIcon, BoltIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import { ZENERLINK_URL } from "../../../data/navigation";

const steps = [
  { icon: BanknotesIcon, title: "Pay for units", text: "Online on Zenerlink, or from any vendor you already use." },
  { icon: SignalIcon, title: "Token sent automatically", text: "It goes straight to the meter. Nothing to type." },
  { icon: BoltIcon, title: "Power on", text: "The meter loads the units, usually in under 90 seconds." },
];
</script>

<template>
  <section class="section bg-grid-dark bg-ink-900 text-white">
    <div class="container">
      <p class="eyebrow !text-brand-300">How it works</p>
      <h2 class="h-section mt-4 text-white">From payment to power, automatically</h2>
      <ol class="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <span class="absolute left-0 right-0 top-6 hidden h-px bg-white/15 md:block" />
        <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 100" class="relative">
          <span class="relative flex h-12 w-12 items-center justify-center rounded-md bg-brand-600">
            <component :is="s.icon" class="h-6 w-6 text-white" stroke-width="1.5" />
          </span>
          <p class="mt-6 font-display text-sm font-semibold text-brand-300">Step 0{{ i + 1 }}</p>
          <h3 class="mt-1 font-display text-xl font-semibold text-white">{{ s.title }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-ink-300">{{ s.text }}</p>
        </li>
      </ol>
      <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
        Buy units online on Zenerlink <ArrowUpRightIcon class="h-4 w-4" />
      </a>
    </div>
  </section>
</template>
