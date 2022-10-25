<template>
  <btn @click="showDrawer" clean type="button" size="xl"
    class="items-center text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-300/10 focus:outline-none focus:ring-2 focus:ring-zinc-300/10 active:bg-zinc-300/10">
    <icn name="user" regular xl />
  </btn>
  <Drawer title="Drawer" :isShow="isShow">
    <h1>哈哈</h1>
    <h1>哈哈</h1>
    <h1>哈哈</h1>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false)
function showDrawer() {
  isShow.value = !isShow.value
  console.log(isShow.value);
}
</script>