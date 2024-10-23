<script setup lang="ts">
import BatteryNotifierBanner from '@/assets/img/BatteryNotifierBanner.png'
import BoneappetiteBanner from '@/assets/img/BoneappetiteBanner.png'
import ExpenseTrackerBanner from '@/assets/img/ExpenseTrackerBanner.png'
import DesignCard from '@/views/DesignCard.vue'

const designProjects = ref([
  {
    projectName: 'Battery Notifier',
    description: 'An beautiful windows app to track your battery charging status and notifies you when the battery is full or when you need to connect your charger',
    banner: BatteryNotifierBanner,
    projectUrl: 'projects/battery-notifier',
  },
  {
    projectName: 'Boneappetitedk',
    description: 'Boneappetiedk is an copenhagen based dog food preparing company which aims to provide healthy and homemade food with an option of various recipes.',
    banner: BoneappetiteBanner,
    projectUrl: 'projects/boneappetitedk',
  },
  {
    projectName: 'Expense Tracker',
    description: 'Expense Tracker is an dotnet core web application, one solution to manage incoming and outgoing for multiple person. It provides the ability to create workspace and manage transaction separately.',
    banner: ExpenseTrackerBanner,
    projectUrl: 'projects/expense-tracker',
  },
  {
    projectName: 'Expense Tracker',
    description: 'Expense Tracker is an dotnet core web application, one solution to manage incoming and outgoing for multiple person. It provides the ability to create workspace and manage transaction separately.',
    banner: ExpenseTrackerBanner,
    projectUrl: 'projects/expense-tracker',
  },
  {
    projectName: 'Expense Tracker',
    description: 'Expense Tracker is an dotnet core web application, one solution to manage incoming and outgoing for multiple person. It provides the ability to create workspace and manage transaction separately.',
    banner: ExpenseTrackerBanner,
    projectUrl: 'projects/expense-tracker',
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
