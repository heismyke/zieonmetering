<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import DeviceArt from "../../ui/DeviceArt.vue";

// Short facts already shown on our product pages
const proof = [
  { value: "<90s", label: "Payment to power" },
  { value: "12", label: "Nigerian DisCos supported" },
  { value: "STS", label: "Token standard" },
  { value: "12 months", label: "Warranty, installation included" },
];
</script>

<template>
  <section class="bg-white">
    <div class="container grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-16">
      <div class="animate-fade-up">
        <p class="eyebrow">Zieon Metering Technologies</p>
        <h1 class="mt-4 text-[34px] font-semibold leading-[1.1] text-ink-900 sm:text-5xl lg:text-[56px]">
          Smart prepaid meters, built for Nigeria
        </h1>
        <p class="lead mt-5 max-w-xl">
          Tokens reach your meter automatically the moment you pay. No keypad, no 20-digit codes, no waiting in the dark.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/products" class="btn-primary">Explore our meters <ArrowRightIcon class="h-4 w-4" /></RouterLink>
          <RouterLink to="/contact" class="btn-outline">Request a quote</RouterLink>
        </div>
      </div>
      <div class="animate-fade-up [animation-delay:120ms]">
        <div class="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl border border-line bg-gradient-to-br from-surface via-white to-ink-100">
          <div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl" />
          <div class="relative h-[78%]"><DeviceArt device="meter" /></div>
        </div>
      </div>
    </div>

    <div class="border-y border-line">
      <dl class="container grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        <div v-for="p in proof" :key="p.label" class="flex flex-col py-6 lg:px-8 lg:first:pl-0">
          <dt class="order-2 mt-1 text-sm text-ink-500">{{ p.label }}</dt>
          <dd class="order-1 text-2xl font-semibold text-ink-900">{{ p.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
