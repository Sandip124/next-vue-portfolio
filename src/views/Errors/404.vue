<script setup lang="ts">
import { useElementBounding, useMouse } from '@vueuse/core'
import EmptyState from '@/components/shared/EmptyState.vue'

const retroText = ref(null)
const isHovered = ref(false)

const centerX = window.innerWidth / 2
const centerY = window.innerHeight / 2

const mouseX = ref(centerX + 50)
const mouseY = ref(centerY + 30)

const { x, y } = useMouse()

const { top, left, width, height } = useElementBounding(retroText)

const computedShadow = computed(() => {
  if (!width.value || !height.value)
    return ''

  const centerX = left.value + width.value / 2
  const centerY = top.value + height.value / 2
  const offsetX = ((isHovered.value ? x.value : mouseX.value) - centerX) / 20
  const offsetY = ((isHovered.value ? y.value : mouseY.value) - centerY) / 20

  return {
    textShadow: `
      ${offsetX * 2}px ${offsetY * 2}px red,
      ${offsetX * 3}px ${offsetY * 3}px blue,
      ${offsetX * 4}px ${offsetY * 4}px black,
      ${offsetX * 5}px ${offsetY * 5}px pink
    `,
  }
})
</script>

<template>
  <div class="flex w-full h-screen p-3">
    <div class="flex w-full h-full text-white bg-primary border-round-3xl">
      <EmptyState
        :has-background="true" title="Oops!! Page Not Found" sub-title="The Page your are looking is not found."
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <template #icon>
          <h2
            ref="retroText" class="m-0 font-bold text-8xl text-white retro-text"
            :style="computedShadow"
          >
            404
          </h2>
        </template>
      </EmptyState>
    </div>
  </div>
</template>

<style scoped>
.retro-text {
  font-size: 8rem;
  font-weight: bold;
  color: #FF00FF;
  transition: all 0.3s ease;
}
</style>
