<script setup lang="ts">
import { ref } from "vue";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "../../ui/SectionHeading.vue";

const faqs = [
  {
    question: "When will Zieon meters be available in my area?",
    answer:
      "Zieon meters are installed in Abuja and Lagos. Send us a message and we'll tell you when we reach your area.",
  },
  {
    question: "How do I buy units for my meter?",
    answer:
      "Buy online on Zenerlink or from any vendor you already use. The token is sent to your meter automatically, so there's nothing to type.",
  },
  {
    question: "Is installation included?",
    answer: "Yes. Our professional installation team fits your meter, and it's included in the price.",
  },
  {
    question: "What warranty do I get?",
    answer: "Our prepaid meter comes with a 12-month warranty and 24/7 priority support.",
  },
  {
    question: "Can I use a Zieon meter with my existing solar system?",
    answer:
      "Yes. Zieon meters are designed to be compatible with most existing energy setups, including solar and battery backups.",
  },
  {
    question: "Which DisCos are supported?",
    answer: "Zieon meters work with all 12 distribution companies in Nigeria.",
  },
];

const open = ref<number | null>(0);
</script>

<template>
  <section id="faq" class="section scroll-mt-24 bg-white">
    <div class="container grid gap-12 lg:grid-cols-[1fr_2fr]">
      <SectionHeading eyebrow="FAQs" title="Frequently asked questions" intro="Can't find what you're looking for? Send us a message and we'll help." />
      <div v-reveal class="border-t border-ink-900">
        <div v-for="(faq, i) in faqs" :key="faq.question" class="border-b border-line">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold transition-colors hover:text-brand-500"
            :aria-expanded="open === i"
            @click="open = open === i ? null : i"
          >
            {{ faq.question }}
            <MinusIcon v-if="open === i" class="h-6 w-6 shrink-0 text-brand-500" />
            <PlusIcon v-else class="h-6 w-6 shrink-0" />
          </button>
          <div v-show="open === i" class="pb-6 pr-12 leading-relaxed text-ink-500">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
