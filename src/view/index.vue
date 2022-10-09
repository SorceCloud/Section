<template>
  <div class="flex-auto w-full px-50 pt-25 min-w-0 lg:static lg:max-h-full lg:overflow-visible">
    <HomePage />
    <HomeExample />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import HomePage from './HomePage.vue'
import HomeExample from './HomeExample.vue';
import Footer from '../section/layout/Footer.vue'
</script>