<template>
  <nav class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full border-b bg-base-100 h-18">
    <div class="flex justify-between items-center px-3 mx-auto w-full max-w-7xl lg:px-4">
      <div class="flex h-10">
        <a href="/"
          class="inline-flex items-center p-6 text-xl font-bold text-gray-700 transition-colors duration-200 transform md:text-2xl hover:text-blue-500">
          <i class="px-3 fa-solid fa-section fa-xl"></i>Section<span class="text-blue-500"> UI</span>
        </a>
      </div>
      <div class="flex">
        <ThemeSelect />
        <btn variant="transparent" color="secondary" @click="setDark" class="fill-base-text">
          <span v-show="!isDark"><i class="fa-light fa-sun-bright fa-xl"></i></span>
          <span v-show="isDark"><i class="fa-light fa-moon-stars fa-xl"></i></span>
        </btn>
        <LanguageSelect />
        <btn tag="a" :href="`https://github.com`" target="_blank" variant="transparent" color="secondary"
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
import LanguageSelect from '../LanguageSelect.vue';
const { isDark, setDark } = useDark();
</script>