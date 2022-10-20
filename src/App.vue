<template>
  <div class="antialiased text-base-content bg-base-200">
    <Header />
    <div class="flex mx-auto h-max">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/Header.vue'
import Sidebar from './section/Sidebar.vue';
</script>