<script setup lang="ts">
import SiteLayout from "../components/site/SiteLayout.vue";
import PageBanner from "../components/site/PageBanner.vue";
import CtaBanner from "../components/ui/CtaBanner.vue";
import ProductWhy from "../components/sections/product/ProductWhy.vue";
import HowItWorks from "../components/sections/shared/HowItWorks.vue";
import QualitySteps from "../components/sections/shared/QualitySteps.vue";
</script>

<template>
  <SiteLayout>
    <PageBanner
      eyebrow="Technology"
      title="Tokens that load themselves"
      intro="Our meters receive STS tokens automatically over a long-range LoRaWAN link, with fallback paths for unstable networks."
      image="/images/grid-sunset.jpg"
      :breadcrumbs="[{ label: 'Technology' }]"
    />
    <HowItWorks />
    <ProductWhy />
    <QualitySteps />
    <CtaBanner
      title="Want the technical details?"
      text="Ask for a datasheet or speak to our engineers about your project."
      image="/images/developer.jpg"
      :primary="{ label: 'Request a datasheet', to: '/contact?topic=datasheet' }"
      :secondary="{ label: 'See our meters', to: '/products' }"
    />
  </SiteLayout>
</template>
