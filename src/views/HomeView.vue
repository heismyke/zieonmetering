<script setup lang="ts">
import SiteLayout from "../components/site/SiteLayout.vue";
import CtaBanner from "../components/ui/CtaBanner.vue";
import HomeHero from "../components/sections/home/HomeHero.vue";
import HomeProducts from "../components/sections/home/HomeProducts.vue";
import HomeSolutions from "../components/sections/home/HomeSolutions.vue";
import HowItWorks from "../components/sections/shared/HowItWorks.vue";
import QualitySteps from "../components/sections/shared/QualitySteps.vue";
import ZenerlinkBand from "../components/sections/shared/ZenerlinkBand.vue";
</script>

<template>
  <SiteLayout>
    <HomeHero />
    <HomeProducts />
    <HomeSolutions />
    <HowItWorks />
    <QualitySteps />
    <ZenerlinkBand />
    <CtaBanner
      title="Planning a project?"
      text="Tell us about your home, estate or network and we'll recommend the right meters and send you a quote."
      image="/images/field-technician.jpg"
      :primary="{ label: 'Request a quote', to: '/contact' }"
      :secondary="{ label: 'Talk to support', to: '/support' }"
    />
  </SiteLayout>
</template>
