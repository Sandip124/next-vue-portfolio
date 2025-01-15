<script setup lang="ts">
import { useHead } from 'unhead'
import LandingPage from '@/views/LandingPage.vue'
import MyProjects from '@/views/MyProjects.vue'
import MyDesignProjects from '@/views/MyDesignProjects.vue'
import MyExperiences from '@/views/MyExperiences.vue'
import MyEducation from '@/views/MyEducation.vue'

useHead({
  title: 'Portfolio | Sandip Choudhary',
  meta: [
    {
      name: 'Portfolio',
      content: 'Sandip Choudhary Portfolio',
    },
  ],
})
</script>

<template>
  <LandingPage />

  <MyProjects />

  <MyDesignProjects />

  <AppFooter />
</template>

<style>

</style>
