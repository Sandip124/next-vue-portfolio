<script setup lang="ts">
// import { useDarkModeHelper } from '@/hooks/DarkModeHelper'

const props = defineProps<{
  title: string
  subTitle?: string
  icon?: string
  hasBackground?: boolean
}>()

// const darkModeHelper = useDarkModeHelper()
// const background = computed(() => props.hasBackground ? (darkModeHelper.isDarkMode() ? 'bg-white-alpha-10' : 'bg-white-alpha-90') : 'bg-transparent')
</script>

<template>
  <div class="flex w-full h-full align-items-center justify-content-center select-none">
    <div class="flex flex-column gap-2">
      <slot>
        <div
          class="flex gap-2 flex-column align-items-center w-24rem py-4 px-4 border-round-lg"
        >
          <slot name="icon">
            <span v-if="props.icon" :class="props.icon" style="font-size: 3.2rem" />
            <svg
              v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4rem h-4rem text-gray-800"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
              />
            </svg>
          </slot>
          <h3 class="m-0 text-center">
            {{ props.title }}
          </h3>
          <p v-if="props.subTitle" class="m-0 text-300 text-center">
            {{ props.subTitle }}
          </p>
          <slot name="after" />
        </div>
      </slot>
    </div>
  </div>
</template>
