<template>
  <nav class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full border-b bg-base-100 h-18">
    <div class="flex justify-between items-center px-3 mx-auto w-full max-w-7xl lg:px-4">
      <div class="flex items-center">
        <btn @click.prevent="toggleSidebar" clean type="button" size="xl"
          class="items-center text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-300/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/10 active:bg-zinc-300/10">
          <i class="fa-regular fa-bars fa-xl" />
        </btn>
        <a href="/"
          class="inline-flex items-center text-2xl font-bold text-gray-700 transition-colors duration-200 transform hover:text-primary">
          <i class="px-3 fa-solid fa-section fa-xl"></i>Section<span class="text-primary"> UI</span>
        </a>
      </div>
      <div class="flex">
        <ThemeSelect />
        <btn variant="transparent" color="secondary" @click="setDark" class="fill-base-text">
          <span v-show="!isDark"><i class="fa-light fa-sun-bright fa-xl"></i></span>
          <span v-show="isDark"><i class="fa-light fa-moon-stars fa-xl"></i></span>
        </btn>
        <LanguageSelect />
        <btn tag="a" :href="`https://github.com/sorcecloud/sectionui`" variant="transparent" color="secondary"
          class="fill-base-text">
          <i class="fa-brands fa-github fa-xl"></i>
        </btn>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import ThemeSelect from '../ThemeSelect.vue'
import { useDark } from '../../store/dark'
import LanguageSelect from '../LanguageSelect.vue'
import { toggleSidebar } from '../../store/sidebar'
const { isDark, setDark } = useDark()

</script>