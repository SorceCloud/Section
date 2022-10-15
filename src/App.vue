<template>
  <div class="antialiased text-base-content">
    <Header />
    <div class="flex px-6 mx-auto max-w-8xl pt-$navbar-height">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/layout/Header.vue'
import Sidebar from './section/layout/Sidebar.vue';
</script>