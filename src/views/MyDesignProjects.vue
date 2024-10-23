<script setup lang="ts">
import BatteryNotifierBanner from '@/assets/img/BatteryNotifierBanner.png'
import CsvPasterBanner from '@/assets/img/CsvPasterBanner.png'
import VirtualQueueBanner from '@/assets/img/VirtualQueueBanner.png'
import KineticStudioBanner from '@/assets/img/KineticStudioBanner.png'
import AdbhutGamingSansarBanner from '@/assets/img/AdbhutGamingSansarBanner.png'
import DesignCard from '@/views/DesignCard.vue'

const designProjects = ref([
  {
    projectName: 'Battery Notifier',
    banner: BatteryNotifierBanner,
    projectUrl: 'showcase/battery-notifier',
  },
  {
    projectName: 'Csv Paster',
    banner: CsvPasterBanner,
    projectUrl: 'showcase/csv-paster',
  },
  {
    projectName: 'Virtual Queue',
    banner: VirtualQueueBanner,
    projectUrl: 'showcase/expense-tracker',
  },
  {
    projectName: 'Kinetic Studio',
    banner: KineticStudioBanner,
    projectUrl: 'showcase/kinetic-studio',
  },
  {
    projectName: 'Adbhut Gaming Sansar',
    banner: AdbhutGamingSansarBanner,
    projectUrl: 'showcase/adbhut-gaming-sansar',
  },
])
</script>

<template>
  <div class="py-8 surface-400 dark:bg-surface-950 ">
    <div class="text-white text-center">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">
        My Design Projects
      </div>
      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">
        Here are my design show cases case
      </div>

      <div class="grid gap-4 justify-content-center px-4">
        <template v-for="(project, idx) in designProjects" :key="idx">
          <DesignCard :project="project" />
        </template>
      </div>
    </div>
  </div>
</template>
