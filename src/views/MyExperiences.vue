<script setup lang="ts">
const experiences = ref([
  {
    post: 'Software Engineer',
    company: 'Pratham It System Pvt. Ltd',
    duration: 'Apr 2022 -  Aug 2024',
    address: 'Birtamode, Jhapa',
    description: '- Developed a POS desktop application and robust .NET Core applications for department stores, ensuring high performance and scalability.<br />\n'
    + '- Built multiple single-page applications (SPAs) using Vue.js from scratch, implementing a SAP-like UI based on research into the actual operations of department stores.<br />\n'
    + '- Decoupled frontend code from legacy .NET Framework web applications by creating APIs and consuming them in SPAs, enhancing maintainability and flexibility.<br />\n'
    + '- Gained extensive experience in JavaScript and TypeScript while developing complex front-end applications.<br />\n'
    + '- Participated in technical meetings, providing insights and recommendations on technology adoption and implementation, and mentored junior developers to enhance their skills.<br />\n'
    + '- Managed Windows Server environments with IIS for hosting and deploying applications.<br />\n'
    + '- Optimized PostgreSQL database performance using advanced techniques to improve application efficiency and responsiveness.<br />\n'
    + '- Created prototypes for mobile applications and gained experience with Flutter for implementing mobile solutions for department stores.\n',
    skills: ['ASP.Net Core', '.Net Framework', 'C#', 'PostgreSql', 'Vue.js', 'Javascript & Typescript', 'CSS', 'Git', 'Figma', 'Flutter'],
  },
  {
    post: 'Software Developer',
    company: 'Crystal Solution',
    duration: 'May 2018 -  Mar 2022',
    address: 'Birtamode, Jhapa',
    description: '- Developed an ERP system and a desktop POS system for a cafe using .NET Core, ensuring the delivery of high-performance and user-friendly applications.<br />\n'
    + '- Wrote clean and efficient code, following best practices and achieving maximum test coverage through comprehensive testing and quality assurance.<br />\n'
    + '- Optimized MySQL database performance using various techniques, including query optimization, indexing, and database tuning, to improve application responsiveness.<br />\n'
    + '- Gained experience in Linux server administration, hosting, and maintaining .NET Core projects on Linux servers, ensuring reliable and secure deployments.<br />\n'
    + '- Created prototypes and UI designs using Adobe XD and Figma, translating designs into functional and visually appealing user interfaces for applications.\n',
    skills: ['ASP.Net Core', '.Net Framework', 'C#', 'MySql', 'Javascript', 'CSS', 'Git', 'Figma'],
  },
  {
    post: 'Software Engineer Intern',
    company: 'Pratham It System Pvt. Ltd',
    duration: 'Sep 2018 -  Nov 2018',
    address: 'Birtamode, Jhapa',
    description: '- Developed and maintained web applications using the .NET Framework, implementing features and functionality according to client requirements.<br />\n'
    + '- Utilized Azure for project tracking and management, ensuring effective monitoring and progress reporting of development tasks.<br />\n'
    + '- Worked with SQL Server databases for managing and storing application data, including creating tables, writing queries, and ensuring data integrity.\n',
    skills: ['ASP.Net Core', '.Net Framework', 'C#', 'MySql', 'Javascript', 'CSS', 'Git', 'Figma'],
  },
])
</script>

<template>
  <div class="py-8 surface-100 dark:bg-surface-950 px-4 py-20 md:px-12 lg:px-20">
    <div class=" text-surface-900 text-surface-700 text-center">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">
        My Experiences
      </div>
      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">
        Professional Experience at various companies
      </div>

      <div class="grid gap-4 justify-items-start">
        <Timeline
          :value="experiences" class="w-full"
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
                <strong class="text-3xl font-bold">{{ slotProps.item.post }}</strong><br>
                <strong class="text-primary">{{ slotProps.item.company }}</strong> <br>
                <span class="text-gray-500 text-sm block md:hidden">{{ slotProps.item.duration }} <br></span>
                <span><i class="pi pi-map-marker" /> {{ slotProps.item.address }}</span>
              </template>
              <template #content>
                <div class="line-height-3 ml-2" v-html=" slotProps.item.description" />
              </template>
              <template #footer>
                <Badge v-for="item in slotProps.item.skills" class="mr-1 mb-1 bg-black-alpha-60 border-round-3xl">
                  {{ item }}
                </Badge>
              </template>
            </Card>
          </template>
        </Timeline>
      </div>
    </div>
  </div>
</template>
