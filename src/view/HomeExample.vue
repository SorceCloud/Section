<script setup lang="ts">
import Checkbox from '~/pecket/Element/Checkbox/Checkbox.vue'
import Toggle from '~/pecket/Element/Toggle/Toggle.vue'
import Button from '~/pecket/Element/Button/Button.vue'

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
    <div class="flex flex-raw mt-10 gap-4">
      <div v-for="theme in themes" :class="[theme]"
        class="shadow-sm border rounded-lg flex flex-wrap gap-2 (w-40 px-12 py-9  )md:(w-48  px-6 py-7)">
        <div class="flex items-center w-full justify-between">
          <Button circle size="xs"><i class="fa-regular fa-xmark"></i></Button>
          <Toggle checked />
          <Checkbox checked />
        </div>
        <Button size="sm" class="w-full"> Primary </Button>
        <Button size="sm" variant="transparent" class="w-full"> Transparent </Button>
        <Button size="sm" variant="outline" class="w-full"> Outline </Button>
      </div>
    </div>
  </div>
</template>