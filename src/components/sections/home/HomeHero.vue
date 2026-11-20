<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon, ClockIcon, BuildingLibraryIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
import DeviceArt from "../../ui/DeviceArt.vue";

// Facts already stated in our product specifications
const facts = [
  { icon: ClockIcon, value: "Under 90 s", label: "From payment to power" },
  { icon: BuildingLibraryIcon, value: "All 12 DisCos", label: "Works across Nigeria" },
  { icon: ShieldCheckIcon, value: "STS tokens", label: "Standard Transfer Specification" },
  { icon: WrenchScrewdriverIcon, value: "12-month warranty", label: "Professional installation included" },
];

const callouts = [
  { label: "Automatic token delivery", side: "left", top: "22%" },
  { label: "LoRaWAN with fallback", side: "right", top: "38%" },
  { label: "Real-time readings", side: "left", top: "62%" },
];
</script>

<template>
  <section class="bg-grid relative overflow-hidden border-b border-line bg-white">
    <div class="container grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
      <div class="animate-fade-up">
        <p class="eyebrow">Smart prepaid metering</p>
        <h1 class="h-display mt-5 max-w-xl">Prepaid meters that load tokens by themselves</h1>
        <p class="lead mt-5 max-w-lg">
          Pay, and the units reach the meter automatically. No keypad, no 20-digit codes, built for the Nigerian grid.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/products" class="btn-primary">Explore the range <ArrowRightIcon class="h-4 w-4" /></RouterLink>
          <RouterLink to="/contact" class="btn-outline">Request a quote</RouterLink>
        </div>
      </div>

      <!-- Product with spec callouts -->
      <div class="relative mx-auto aspect-square w-full max-w-[520px] animate-fade-up [animation-delay:120ms]">
        <div class="absolute inset-[12%] rounded-full border border-dashed border-brand-200" />
        <div class="absolute inset-[24%] rounded-full bg-brand-50" />
        <div class="absolute inset-x-[31%] inset-y-[16%]"><DeviceArt device="meter" /></div>
        <div
          v-for="c in callouts"
          :key="c.label"
          class="absolute hidden items-center gap-2 sm:flex"
          :class="c.side === 'left' ? 'left-0 flex-row' : 'right-0 flex-row-reverse'"
          :style="{ top: c.top }"
        >
          <span class="rounded-md border border-line bg-white px-2.5 py-1.5 font-display text-[12px] font-medium text-ink-700 shadow-card">{{ c.label }}</span>
          <span class="h-px w-10 bg-brand-400" /><span class="h-2 w-2 rounded-full bg-brand-500" />
        </div>
      </div>
    </div>

    <dl class="relative border-t border-line bg-white">
      <div class="container grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        <div v-for="f in facts" :key="f.value" class="flex items-center gap-4 py-5 lg:px-6 lg:first:pl-0">
          <component :is="f.icon" class="h-7 w-7 shrink-0 text-brand-600" stroke-width="1.5" />
          <div>
            <dt class="font-display text-[15px] font-semibold text-ink-900">{{ f.value }}</dt>
            <dd class="text-[13px] text-ink-500">{{ f.label }}</dd>
          </div>
        </div>
      </div>
    </dl>
  </section>
</template>
