<script setup lang="ts">
import SectionHeading from "../../ui/SectionHeading.vue";

// How a meter gets from our lab to your wall. Plain steps, no badges.
const steps = [
  { title: "Design", text: "Engineered for the Nigerian grid, from the circuit board to the case." },
  { title: "Test", text: "Meters are tested before they ship to you." },
  { title: "Install", text: "Fitted by our professional installation team, included with your meter." },
  { title: "Support", text: "A 12-month warranty and 24/7 priority support for meter customers." },
];
</script>

<template>
  <section class="section bg-surface">
    <div class="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHeading eyebrow="Quality" title="Built with care, from lab to wall" intro="We design, test, install and support every meter ourselves." />
        <ol class="mt-10 divide-y divide-line border-y border-line">
          <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 80" class="grid grid-cols-[48px_1fr] gap-4 py-5">
            <span class="text-sm font-semibold text-brand-500">0{{ i + 1 }}</span>
            <div>
              <p class="font-semibold text-ink-900">{{ s.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-500">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>
      <img v-reveal="120" src="/images/engineer-lab.jpg" alt="An engineer testing hardware in the lab" loading="lazy" class="aspect-[4/5] w-full rounded-xl object-cover lg:aspect-[4/5]" />
    </div>
  </section>
</template>
