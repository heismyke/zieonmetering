<script setup lang="ts">
// How a meter gets from our bench to your wall. Plain steps, no badges.
const steps = [
  { title: "Design", text: "Engineered for the Nigerian grid, from the circuit board to the case." },
  { title: "Test", text: "Meters are tested before they ship to you." },
  { title: "Install", text: "Fitted by our professional installation team, included with your meter." },
  { title: "Support", text: "A 12-month warranty and 24/7 priority support for meter customers." },
];
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <p class="eyebrow">Quality</p>
          <h2 class="h-section mt-4">From our bench to your wall</h2>
        </div>
        <p class="lead">We design, test, install and support every meter ourselves, so one team is responsible from start to finish.</p>
      </div>
      <ol class="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 80" class="bg-white p-7">
          <span class="font-display text-3xl font-semibold text-brand-600">0{{ i + 1 }}</span>
          <p class="mt-4 font-display text-lg font-semibold text-ink-900">{{ s.title }}</p>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ s.text }}</p>
        </li>
      </ol>
      <img v-reveal src="/images/meter-installation.jpg" alt="Electricians fitting meter panels on a building" loading="lazy" class="mt-8 aspect-[21/8] w-full rounded-lg object-cover" />
    </div>
  </section>
</template>
