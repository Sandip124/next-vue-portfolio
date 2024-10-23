<script setup lang="ts">
defineProps<{
  project: any
}>()

const designCardRef = ref()
const isHovered = useElementHover(designCardRef)
</script>

<template>
  <Card
    ref="designCardRef"
    style="overflow: hidden"
    class="border-round-3xl col-12 md:col-3 p-0 relative transition-all transition-duration-300 cursor-pointer"
    :pt="{
      body: 'p-0 m-0',
    }"
  >
    <template #header>
      <div v-if="isHovered" class="z-4 bg-black-alpha-10 w-full transition-all transition-duration-300 h-full absolute" />
      <img
        class="w-full h-full"
        alt="user header"
        :src="project.banner"
      >
    </template>
    <template #content>
      <RouterLink v-show="isHovered" class="absolute top-0 right-0 p-2" :to="project.projectUrl">
        <Button
          label="View Project" class="w-full p-button-contrast py-2 px-3" rounded icon="pi pi-external-link"
          icon-pos="right"
        />
      </RouterLink>
    </template>
  </Card>
</template>
