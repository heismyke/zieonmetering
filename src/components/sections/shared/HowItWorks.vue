<script setup lang="ts">
import { BanknotesIcon, SignalIcon, BoltIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "../../ui/SectionHeading.vue";
import { ZENERLINK_URL } from "../../../data/navigation";

const steps = [
  { icon: BanknotesIcon, title: "Pay for units", text: "Buy online on Zenerlink or from any vendor you already use." },
  { icon: SignalIcon, title: "Token sent automatically", text: "The token goes straight to your meter. Nothing to type." },
  { icon: BoltIcon, title: "Power on", text: "Your meter loads the units and the power comes on, usually in under 90 seconds." },
];
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <SectionHeading eyebrow="How it works" title="From payment to power, automatically" />
      <ol class="mt-12 grid gap-6 md:grid-cols-3">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 100" class="relative rounded-xl border border-line bg-surface p-7">
          <span class="absolute right-6 top-6 text-4xl font-semibold text-ink-100">{{ i + 1 }}</span>
          <component :is="s.icon" class="h-8 w-8 text-brand-500" />
          <h3 class="h-card mt-5">{{ s.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ s.text }}</p>
        </li>
      </ol>
      <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="link-arrow mt-8">Buy units online on Zenerlink <ArrowUpRightIcon /></a>
    </div>
  </section>
</template>
