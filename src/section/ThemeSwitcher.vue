<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 16,
  },
})

const { t } = useI18n()
</script>

<template>
  <button
    :aria-label="t('button.toggle_dark')"
    type="button"
    class="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-2"
    @click="toggleDark()"
  >
    <Icon :icon="isDark ? 'bi:moon-fill' : 'bi:sun-fill'" :width="size" :height="size" />
  </button>
</template>
