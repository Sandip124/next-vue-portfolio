<script setup lang="ts">
const academics = ref([
  {
    schoolOrCollege: 'IT-University of Copenhagen',
    course: 'Msc in Computer Science',
    duration: 'Aug-2024 - Ongoing',
    address: 'Rued Langgaards Vej 7, 2300 København',
    description: 'Pursuing my master\'s degree at ITU, I am deepening my expertise in several key areas of computer science and software development. My studies focus on machine learning, Python programming, concurrent application development, and algorithm design. I am involved in hands-on projects and research that allow me to apply advanced concepts in real-world scenarios, strengthening my skills in building efficient, scalable, and intelligent systems.',
  },
  {
    schoolOrCollege: 'Gomendra Multiple College',
    course: 'Bachelor in Computer Application (BCA)',
    duration: 'Nov 2017 - Apr 2023',
    address: 'Birtamode Jhapa',
    description: '',
  },
  {
    schoolOrCollege: 'Gomendra Birta model',
    course: 'Secondary Level Education (HSEB) +2',
    duration: 'Oct-2015 - Oct 2017',
    address: 'Birtamode Jhapa',
    description: '',
  },
  {
    schoolOrCollege: 'Kalika Secondary English School',
    course: 'School Leaving Certificate (SLC)',
    duration: 'Jun 2015',
    address: 'Arjundhara, Jhapa',
    description: '',
  },
])
</script>

<template>
  <div class="py-8 bg-primary dark:bg-surface-950 px-4 py-20 md:px-12 lg:px-20">
    <div class=" text-white text-surface-700 text-center">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">
        My Education
      </div>
      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">
        Academic qualification that i have
      </div>

      <div class="grid gap-4 justify-items-start">
        <Timeline
          :value="academics" class="w-full"
          :pt="{
            eventOpposite: 'flex-none w-0rem md:w-20rem',
          }"
        >
          <template #opposite="slotProps">
            <span
              class="hidden md:block text-xl text-surface-500 dark:text-surface-400"
            >{{ slotProps.item.duration }}</span>
          </template>
          <template #content="slotProps">
            <Card class="w-12 border-round-3xl my-3 shadow-none border-1 border-gray-300">
              <template #title>
                <strong class="text-3xl font-bold">{{ slotProps.item.schoolOrCollege }}</strong><br>
                <strong class="text-primary">{{ slotProps.item.course }}</strong> <br>
                <span class="text-gray-500 text-sm block md:hidden">{{ slotProps.item.duration }} <br></span>
                <span><i class="pi pi-map-marker" /> {{ slotProps.item.address }}</span>
              </template>
              <template #content>
                <div class="line-height-3 ml-2">
                  {{ slotProps.item.description }}
                </div>
              </template>
            </Card>
          </template>
        </Timeline>
      </div>
    </div>
  </div>
</template>
