<template>
  <div class="px-6 mx-auto max-w-8xl pt-$navbar-height">
    <div class="lg:flex lg:space-x-4 lg:p-0">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">

import Sidebar from '../section/layout/Sidebar.vue'

</script>