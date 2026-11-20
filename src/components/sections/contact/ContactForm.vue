<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { products, findProduct } from "../../../data/products";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/vue/24/outline";

const submitted = ref(false);

// Opened from a product page: /contact?product=<slug>&topic=datasheet
const route = useRoute();
const topics = ["Request a quote", "Request a datasheet", "Order a meter for my home", "Installation or technical support", "Something else"];
const q = (v: unknown) => (typeof v === "string" ? v : "");
const product = ref(findProduct(q(route.query.product)) ? q(route.query.product) : "");
const topic = ref({ datasheet: topics[1], support: topics[3] }[q(route.query.topic)] ?? topics[0]);
</script>

<template>
  <section class="section bg-surface">
    <div class="container grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <div v-reveal class="rounded-xl border border-line bg-white p-6 md:p-10">
        <h2 class="h-section">Request a quote or ask a question</h2>
        <p class="mt-2 text-ink-500">Tell us what you need and our team will get back to you.</p>

        <div v-if="submitted" class="flex flex-col items-center py-16 text-center">
          <CheckCircleIcon class="h-14 w-14 text-brand-500" />
          <p class="mt-4 text-xl font-bold">Thank you</p>
          <p class="mt-2 text-ink-500">We've received your message and will get back to you soon.</p>
        </div>
        <form v-else class="mt-8 grid gap-5 sm:grid-cols-2" @submit.prevent="submitted = true">
          <div>
            <label for="c-name" class="field-label">Full name</label>
            <input id="c-name" required class="field" autocomplete="name" />
          </div>
          <div>
            <label for="c-email" class="field-label">Email address</label>
            <input id="c-email" type="email" required class="field" autocomplete="email" />
          </div>
          <div>
            <label for="c-phone" class="field-label">Phone number</label>
            <input id="c-phone" type="tel" class="field" autocomplete="tel" placeholder="+234" />
          </div>
          <div>
            <label for="c-location" class="field-label">Location</label>
            <input id="c-location" class="field" placeholder="City, State" />
          </div>
          <div class="sm:col-span-2">
            <label for="c-topic" class="field-label">How can we help?</label>
            <select id="c-topic" v-model="topic" class="field">
              <option v-for="t in topics" :key="t">{{ t }}</option>
            </select>
          </div>
          <div>
            <label for="c-product" class="field-label">Product</label>
            <select id="c-product" v-model="product" class="field">
              <option value="">Not sure yet</option>
              <option v-for="p in products" :key="p.slug" :value="p.slug">{{ p.name }}</option>
            </select>
          </div>
          <div>
            <label for="c-qty" class="field-label">How many meters?</label>
            <input id="c-qty" type="number" min="1" class="field" placeholder="e.g. 1, 20, 500" />
          </div>
          <div class="sm:col-span-2">
            <label for="c-message" class="field-label">Message</label>
            <textarea id="c-message" rows="5" class="field" />
          </div>
          <label class="flex items-start gap-3 text-sm text-ink-500 sm:col-span-2">
            <input type="checkbox" required class="mt-1 h-4 w-4 accent-brand-500" />
            I agree to Zieon Metering Technologies processing my details to respond to this enquiry.
          </label>
          <div class="sm:col-span-2">
            <button type="submit" class="btn-primary w-full sm:w-auto">Submit</button>
          </div>
        </form>
      </div>

      <aside v-reveal="100" class="space-y-6">
        <div class="rounded-xl bg-ink-900 p-8 text-white">
          <h2 class="text-lg font-bold">Get in touch</h2>
          <ul class="mt-6 space-y-5 text-ink-200">
            <li class="flex gap-4">
              <EnvelopeIcon class="h-6 w-6 shrink-0 text-brand-400" />
              <a href="mailto:hello@zieonenergies.com" class="hover:text-white">hello@zieonenergies.com</a>
            </li>
            <li class="flex gap-4">
              <MapPinIcon class="h-6 w-6 shrink-0 text-brand-400" />
              <span>Pilot cities: Abuja and Lagos, Nigeria</span>
            </li>
            <li class="flex gap-4">
              <ClockIcon class="h-6 w-6 shrink-0 text-brand-400" />
              <span>24/7 priority support for meter customers</span>
            </li>
          </ul>
        </div>
        <img src="/images/team-office.jpg" alt="" loading="lazy" class="hidden aspect-[4/3] w-full object-cover lg:block rounded-lg" />
      </aside>
    </div>
  </section>
</template>
