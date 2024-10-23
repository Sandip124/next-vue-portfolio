<script setup lang="ts">
import ProfileImage from '@/assets/img/profile.jpg'

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
  { label: 'Twitter', url: 'https://x.com/chaudhary_sndp', target: '_blank' },
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
                  :image="ProfileImage"
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
