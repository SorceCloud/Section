<template>
  <div class="flex px-6 mx-auto max-w-8xl pt-$navbar-height">
    <Sidebar />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import Sidebar from '../section/layout/Sidebar.vue'
</script>