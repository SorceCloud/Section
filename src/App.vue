<template>
  <div class="text-base-content bg-base-300 ">
    <Header />
    <div class="flex">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from './section/Header.vue'
import Sidebar from './section/Sidebar.vue';
</script>