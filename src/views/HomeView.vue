<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  title: 'Portfolio | Sandip Choudhary',
  meta: [
    {
      name: 'Portfolio',
      content: 'Sandip Choudhary Portfolio',
    },
  ],
})

const items = ref([
  {
    label: 'chaudharysandip124@gmail.com',
    type: 'mail',
  },
  {
    label: 'CV',
    type: 'button',
    link: 'https://linkedin.com/in/sandip124',
  },
])

const contactItems = ref([
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sandip124', target: '_blank' },
  { label: 'Dribble', url: 'https://dribbble.com/Sandip124', target: '_blank' },
  { label: 'Github', url: 'https://github.com/sandip124', target: '_blank' },
])

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
  <div class="h-screen p-3" style="min-height: 950px;">
    <div
      class=" h-full border-round-3xl"
      style=" background-image:linear-gradient(0deg,rgba(24,0,64,0.3),rgba(44,5,83,0.6)),url('/img/background.jpg'); background-repeat:no-repeat; background-size:cover; background-position:center;"
    >
      <Menubar
        :model="items"
        :pt="{
          itemContent: 'bg-transparent',
        }"
        class="bg-transparent border-none w-10 md:w-8 mx-auto pt-4 sticky"
      >
        <template #item="{ item, props }">
          <a class="flex items-center p-0 text-white bg-transparent hover:bg-transparent" v-bind="props.action">
            <template v-if="item.type === 'button'">
              <Button severity="secondary" class="px-3" rounded> {{ item.label }}</Button>
            </template>
            <template v-else-if="item.type === 'mail'">
              <InputGroup class="bg-white-alpha-20 border-round-3xl overflow-hidden">
                <span class="py-2 px-3">{{ item.label }} </span>
                <Button severity="secondary" class="px-3 border-round-3xl" rounded>Copy</Button>
              </InputGroup>
            </template>
            <template v-else>
              <span>{{ item.label }} </span>
            </template>
          </a>
        </template>
        <template #end>
          <Breadcrumb :model="contactItems" class="bg-transparent text-">
            <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                  <span class="text-white font-semibold">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span class="text-white hover:text-primary">{{ item.label }}</span>
              </a>
            </template>
            <template #separator>
              /
            </template>
          </Breadcrumb>
        </template>
      </Menubar>

      <div class="flex justify-content-center align-items-center h-full">
        <Card class="w-full md:w-6 bg-transparent text-white py-5 border-round-3xl">
          <template #content>
            <div class="flex flex-column align-items-center justify-content-start gap-4">
              <div class="relative">
                <Avatar
                  image="https://www.sandip124.com.np/images/profile.jpg"
                  shape="circle"
                  size="xlarge"
                  class="w-12rem h-12rem md:w-15rem md:h-15rem border-3"
                />
                <Badge
                  class="text-xl absolute right-0 bottom-0 mb-5 -mr-4 p-3 font-normal border-round-3xl"
                  style="rotate:-10deg"
                >
                  Hi there 👋
                </Badge>
              </div>

              <div class="flex flex-column align-items-center text-center gap-2">
                <h1 class="m-0 text-6xl md:text-7xl font-bold">
                  Sandip Choudhary
                </h1>
                <h2 class="m-0 text-4xl text-primary">
                  Software Engineer
                </h2>

                <p class="mt-3 text-2xl md:text-3xl w-12 md:w-9 ">
                  I am a software developer with 5+ years of experience in building and maintaining web, desktop, and
                  mobile
                  applications using technologies like .NET Core, Vue.js, and Flutter.
                </p>

                <Button
                  label="View Projects"
                  class="mt-3 custom-button bg-white-alpha-20 text-white hover:bg-white hover:text-primary transition-all"
                  rounded size="large" icon="pi pi-arrow-right"
                  icon-pos="right" severity="secondary"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>

  <div class="py-8 dark:bg-surface-950 px-4 py-20 md:px-12 lg:px-20">
    <div class="text-white text-center">
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">
        My Projects
      </div>
      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">
        List of projects that i have done till now.
      </div>

      <div class="grid gap-4 justify-content-center">
        <template v-for="item in 4">
          <Card style="width: 25rem; overflow: hidden" class="border-round-3xl">
            <template #header>
              <img
                alt="user header"
                src="https://cdn.dribbble.com/users/2589332/screenshots/19777923/media/66bff58fe27167448a00d4747568e6ff.jpg?compress=1&resize=400x250&vertical=top"
              >
            </template>
            <template #title>
              <strong>Battery Notifier</strong>
            </template>
            <template #content>
              <p class="m-0">
                An beautiful windows app to track your battery charging status and notifies you when the battery is full
                or when you need to connect your charger.
              </p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="View Project" class="w-full" rounded />
              </div>
            </template>
          </Card>
        </template>
      </div>
    </div>
  </div>

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
            <span class="hidden md:block text-xl text-surface-500 dark:text-surface-400">{{ slotProps.item.duration }}</span>
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
            <span class="hidden md:block text-xl text-surface-500 dark:text-surface-400">{{ slotProps.item.duration }}</span>
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

  <AppFooter />
</template>

<style>
.custom-button .pi {
  transition: transform 0.3s ease-in-out;
}

.custom-button:hover .pi {
  transform: translateX(4px);
}

.p-menubar-mobile .p-menubar-root-list {
  background: transparent !important;
  border: none !important;
  width: 100% !important;
  justify-content: space-between;
}
</style>
