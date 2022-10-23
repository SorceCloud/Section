<template>
  <nav class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full border-b bg-base-200 h-18">
    <div class="flex justify-between items-center px-3 mx-auto w-full max-w-8xl">
      <div class="flex items-center">
        <btn @click.prevent="toggleSidebar" clean type="button" size="xl"
          class="items-center text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-300/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/10 active:bg-zinc-300/10">
          <icn name="bars" regular xl />
        </btn>
        <a href="/"
          class="inline-flex items-center text-2xl font-bold transition-colors duration-200 transform hover:text-primary">
          <icn name="section" solid xl class="px-3"></icn>Section<span class="text-primary"> UI</span>
        </a>
      </div>
      <div class="flex inline-flex space-x-5">
        <ThemeSelect />
        <DarkChange />
        <LanguageSelect />
        <btn clean class="hover:bg-base-300 rounded-$rounded-btn dark:hover:bg-base-100 ">
          <a :href="`https://github.com/sorcecloud/sectionui`">
            <icn name="github" brand xl></icn>
          </a>
        </btn>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { toggleSidebar } from '../store/sidebar'
</script>