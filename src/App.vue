<script setup lang="ts">
import {RouterView} from 'vue-router'
// import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import {createHead} from 'unhead'

createHead()
</script>

<template>
  <RouterView/>
  <!--  <VueQueryDevtools />-->
</template>
