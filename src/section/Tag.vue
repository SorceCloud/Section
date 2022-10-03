<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const slug = computed(() => kebabCase(props.text))
const link = computed(() => `/tags/${slug.value}`)
</script>

<template>
  <router-link :to="link" class="mr-2 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
    {{ slug }}
  </router-link>
</template>
