<script setup lang="ts">
import { RouterLink } from "vue-router";
import { DocumentTextIcon, WrenchScrewdriverIcon, CreditCardIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import { ZENERLINK_URL } from "../../../data/navigation";
</script>

<template>
  <section class="section bg-surface">
    <div class="container">
      <p class="eyebrow">Documents & support</p>
      <h2 class="h-section mt-4">Everything you need to plan and run your meters</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <RouterLink to="/contact?topic=datasheet" class="group rounded-lg border border-line bg-white p-7 hover:border-brand-400">
          <DocumentTextIcon class="h-8 w-8 text-brand-600" stroke-width="1.5" />
          <p class="mt-5 font-display text-lg font-semibold">Product datasheets</p>
          <p class="mt-2 text-sm text-ink-500">Specifications for each meter, for your engineers and procurement team.</p>
          <span class="link-arrow mt-5">Request a datasheet <ArrowRightIcon /></span>
        </RouterLink>
        <RouterLink to="/support#warranty" class="group rounded-lg border border-line bg-white p-7 hover:border-brand-400">
          <WrenchScrewdriverIcon class="h-8 w-8 text-brand-600" stroke-width="1.5" />
          <p class="mt-5 font-display text-lg font-semibold">Installation & warranty</p>
          <p class="mt-2 text-sm text-ink-500">Professional installation is included, with a 12-month warranty.</p>
          <span class="link-arrow mt-5">Support <ArrowRightIcon /></span>
        </RouterLink>
        <a :href="ZENERLINK_URL" target="_blank" rel="noopener" class="group rounded-lg border border-line bg-white p-7 hover:border-brand-400">
          <CreditCardIcon class="h-8 w-8 text-brand-600" stroke-width="1.5" />
          <p class="mt-5 font-display text-lg font-semibold">Buy units online</p>
          <p class="mt-2 text-sm text-ink-500">Pay for any Nigerian DisCo on Zenerlink and get your token in seconds.</p>
          <span class="link-arrow mt-5">Go to Zenerlink <ArrowUpRightIcon /></span>
        </a>
      </div>
    </div>
  </section>
</template>
