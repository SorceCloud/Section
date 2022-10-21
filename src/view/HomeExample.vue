<script setup lang="ts">

const themes = [
  'theme-blue',
  'theme-teal',
  'theme-rose',
  'theme-violet',
  'theme-orange'
]
</script>
<template>
  <div class="my-14 ">
    <div class="flex flex-wrap my-20 mx-10 gap-4">
      <div v-for="theme in themes" :class="[theme]"
        class="shadow-sm h-auto border rounded-lg flex flex-wrap gap-3 (w-60 px-10 py-9) md:(w-48  px-6 py-7)">
        <div class="flex w-full justify-between">
          <btn circle size="xs">
            <icn name="xmark" regular xl></icn>
          </btn>
          <tgl checked />
          <ckb checked />
        </div>
        <btn size="sm" class="w-full"> Primary </btn>
        <btn size="sm" variant="transparent" class="w-full"> Transparent </btn>
        <btn size="sm" variant="outline" class="w-full"> Outline </btn>
      </div>
    </div>
  </div>
</template>