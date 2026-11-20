<script setup lang="ts">
import SiteLayout from "../components/site/SiteLayout.vue";
import PageBanner from "../components/site/PageBanner.vue";
import ContactForm from "../components/sections/contact/ContactForm.vue";
</script>

<template>
  <SiteLayout>
    <PageBanner
      eyebrow="Contact"
      title="Request a quote"
      intro="Order meters for your home, estate or network, ask for a datasheet, or get help from our team."
      image="/images/meter-installation.jpg"
      :breadcrumbs="[{ label: 'Contact' }]"
    />
    <ContactForm />
  </SiteLayout>
</template>
