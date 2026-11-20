<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import { ZENERLINK_URL } from "../../../data/navigation";
</script>

<template>
  <section class="bg-white py-12">
    <div class="container">
      <div class="flex flex-col gap-6 rounded-xl border border-brand-200 bg-brand-50 p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">From our sister company</p>
          <h2 class="mt-2 text-xl font-semibold text-ink-900 md:text-2xl">Buy electricity units online with Zenerlink</h2>
          <p class="mt-2 text-ink-600">Pay for any Nigerian DisCo by card, bank transfer or wallet and get your token in seconds.</p>
        </div>
        <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="btn-primary shrink-0">Buy units online on Zenerlink <ArrowUpRightIcon class="h-4 w-4" /></a>
      </div>
    </div>
  </section>
</template>
