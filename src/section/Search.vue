<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: String,
    required: false,
    default: null,
  },
})

const emit = defineEmits(['change'])
const onChange = (e: Event) => emit('change', e)
</script>

<template>
  <div class="relative max-w-lg">
    <input
      class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
      :aria-label="placeholder"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @change="onChange"
    >
    <Icon icon="bi:search" class="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
  </div>
</template>
