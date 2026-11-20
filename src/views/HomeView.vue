<script setup lang="ts">
import SiteLayout from "../components/site/SiteLayout.vue";
import CtaBanner from "../components/ui/CtaBanner.vue";
import HomeHero from "../components/sections/home/HomeHero.vue";
import HomeProducts from "../components/sections/home/HomeProducts.vue";
import HomeApplications from "../components/sections/home/HomeApplications.vue";
import HomeTechnology from "../components/sections/home/HomeTechnology.vue";
import HowItWorks from "../components/sections/shared/HowItWorks.vue";
import QualitySteps from "../components/sections/shared/QualitySteps.vue";
import DocsBlock from "../components/sections/shared/DocsBlock.vue";
</script>

<template>
  <SiteLayout>
    <HomeHero />
    <HomeProducts />
    <HomeApplications />
    <HowItWorks />
    <HomeTechnology />
    <QualitySteps />
    <DocsBlock />
    <CtaBanner
      title="Planning a project?"
      text="Tell us about your home, estate or network and we'll recommend the right meters and send a quote."
      :primary="{ label: 'Request a quote', to: '/contact' }"
      :secondary="{ label: 'Talk to support', to: '/support' }"
    />
  </SiteLayout>
</template>
