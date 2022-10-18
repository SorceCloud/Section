<template>
  <btn variant="transparent" color="secondary" @click="setDark" class="fill-base-text">
    <span v-show="!isDark">
      <icn name="sun-bright" light xl></icn>
    </span>
    <span v-show="isDark">
      <icn name="moon-stars" light xl></icn>
    </span>
  </btn>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const isDark = ref<boolean>(false)
onMounted(() => {
  const storaged = localStorage.getItem('dark')
  if (storaged !== null)
    isDark.value = storaged === 'dark' ?? true
  document.documentElement.classList.add(isDark.value ? 'dark' : 'light')
})
function setDark() {
  document.documentElement.classList.remove(isDark.value ? 'dark' : 'light');
  isDark.value = !isDark.value;
  document.documentElement.classList.add(isDark.value ? 'dark' : 'light');
  localStorage.setItem("dark", isDark.value ? 'dark' : 'light');
}
</script>