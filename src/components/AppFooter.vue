<script setup lang="ts">
const contactItems = ref([
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sandip124', target: '_blank' },
  { label: 'Dribble', url: 'https://dribbble.com/Sandip124', target: '_blank' },
  { label: 'Github', url: 'https://github.com/sandip124', target: '_blank' },
  { label: 'Twitter', url: 'https://x.com/chaudhary_sndp', target: '_blank' },
])
</script>

<template>
  <footer>
    <div class="flex flex-wrap  w-full justify-content-between align-items-center py-3 text-white bg-black mx-auto w-full md:w-10">
      <h4 class="mx-3 my-0 font-normal">
        &copy; {{ new Date().getFullYear() }} All Rights Reserved | Made with 💖
      </h4>

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
    </div>
  </footer>
</template>
