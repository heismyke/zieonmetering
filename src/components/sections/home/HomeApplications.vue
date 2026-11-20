<script setup lang="ts">
import { RouterLink } from "vue-router";
import { HomeModernIcon, BuildingOffice2Icon, BoltIcon, BriefcaseIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import { solutions } from "../../../data/solutions";

const icons: Record<string, unknown> = { homes: HomeModernIcon, estates: BuildingOffice2Icon, utilities: BoltIcon, businesses: BriefcaseIcon };
</script>

<template>
  <section class="section bg-surface">
    <div class="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div>
        <p class="eyebrow">Applications</p>
        <h2 class="h-section mt-4">Where our meters work</h2>
        <p class="lead mt-4">From a single flat to a whole distribution network.</p>
        <img v-reveal src="/images/estate-lagos.jpg" alt="Housing estate blocks in Lagos" loading="lazy" class="mt-10 aspect-[4/3] w-full rounded-lg object-cover" />
      </div>
      <ul class="divide-y divide-line self-center border-y border-line">
        <li v-for="(s, i) in solutions" :key="s.id" v-reveal="i * 80">
          <RouterLink :to="`/solutions#${s.id}`" class="group grid grid-cols-[48px_1fr_auto] items-start gap-5 py-7">
            <span class="flex h-12 w-12 items-center justify-center rounded-md border border-line bg-white text-brand-600">
              <component :is="icons[s.id]" class="h-6 w-6" stroke-width="1.5" />
            </span>
            <span>
              <span class="block font-display text-lg font-semibold text-ink-900 group-hover:text-brand-700">{{ s.title }}</span>
              <span class="mt-1 block text-[15px] leading-relaxed text-ink-500">{{ s.text }}</span>
            </span>
            <ArrowRightIcon class="mt-3 h-5 w-5 text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-600" />
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
