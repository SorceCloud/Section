<template>
  <div class="antialiased text-base-content bg-base-300">
    <Header />
    <div class="flex px-6 mx-auto max-w-8xl pt-$navbar-height">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/Header.vue'
import Sidebar from './section/Sidebar.vue';
</script>