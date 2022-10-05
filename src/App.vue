<template>
  <div class="antialiased text-base-content">
    <Header />
    <div class="flex-auto w-full px-50 pt-25 min-w-0 lg:static lg:max-h-full lg:overflow-visible">
      <HomePage />
      <HomeExample />
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/layout/Header.vue'
import HomePage from './view/HomePage.vue'
import HomeExample from './view/HomeExample.vue';
import Footer from './section/layout/Footer.vue'
</script>