<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  title: 'Home test',
  meta: [
    {
      name: 'Home View',
      content: ' this is home content',
    },
  ],
})
</script>

<template>
  <main>
    this is welcome page
    <Button> test</Button>
  </main>
</template>
