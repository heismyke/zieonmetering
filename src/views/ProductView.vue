<script setup lang="ts">
import SiteLayout from "../components/site/SiteLayout.vue";
import PageBanner from "../components/site/PageBanner.vue";
import CtaBanner from "../components/ui/CtaBanner.vue";
import ProductCatalogue from "../components/sections/product/ProductCatalogue.vue";
</script>

<template>
  <SiteLayout>
    <PageBanner
      eyebrow="Products"
      title="Prepaid meters and energy hardware"
      intro="Smart prepaid meters for grid and solar power, and hardware for the home. Compare the details and request a quote."
      image="/images/solar-field.jpg"
      :breadcrumbs="[{ label: 'Products' }]"
    />
    <ProductCatalogue />
    <CtaBanner
      title="Not sure which meter is right?"
      text="Tell us about your home, estate or network and our team will recommend the right setup."
      image="/images/team-office.jpg"
      :primary="{ label: 'Request a quote', to: '/contact' }"
      :secondary="{ label: 'See solutions', to: '/solutions' }"
    />
  </SiteLayout>
</template>
