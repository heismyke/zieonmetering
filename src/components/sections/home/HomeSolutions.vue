<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "../../ui/SectionHeading.vue";
import { solutions } from "../../../data/solutions";
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <SectionHeading eyebrow="Solutions" title="Metering for every customer" intro="From a single flat to a whole distribution network." />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink
          v-for="(s, i) in solutions"
          :key="s.id"
          v-reveal="i * 80"
          :to="`/solutions#${s.id}`"
          class="group overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-card-hover"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img :src="s.image" alt="" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div class="p-6">
            <h3 class="h-card">{{ s.title }}</h3>
            <p class="mt-1 text-sm text-ink-500">{{ s.short }}</p>
            <span class="link-arrow mt-4">Learn more <ArrowRightIcon /></span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
