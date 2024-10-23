<script setup lang="ts">
import BatteryNotifierBanner from '@/assets/img/BatteryNotifierBanner.png'
import BoneappetiteBanner from '@/assets/img/BoneappetiteBanner.png'
import ExpenseTrackerBanner from '@/assets/img/ExpenseTrackerBanner.png'

const projects = ref([
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
  <div class="py-8 dark:bg-surface-950 ">
    <div class="text-white text-center">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">
        My Projects
      </div>
      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">
        List of projects that i have done till now.
      </div>

      <div class="grid gap-4 justify-content-center px-4">
        <template v-for="project in projects">
          <Card
            style="overflow: hidden" class="border-round-3xl col-12 md:col-2 p-0 relative"
            :pt="{
              header: 'p-0',
              body: 'bg-white border-round-3xl -mt-6 p-3 bottom-0 border-1 m-2 border-primary-100 h-full',
            }"
          >
            <template #header>
              <img
                class="w-full"
                alt="user header"
                :src="project.banner"
              >
            </template>
            <template #title>
              <strong>{{ project.projectName }}</strong>
            </template>
            <template #content>
              <p class="m-0">
                {{ project.description }}
              </p>
            </template>
            <template #footer>
              <div class="flex w-full gap-4 mt-1">
                <RouterLink class="w-full" :to="project.projectUrl">
                  <Button label="View Project" class="w-full" rounded icon="pi pi-external-link" icon-pos="right" />
                </RouterLink>
              </div>
            </template>
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>
