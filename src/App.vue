<template>
  <div class="antialiased text-base-content">
    <Header />
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/layout/Header.vue'
</script>