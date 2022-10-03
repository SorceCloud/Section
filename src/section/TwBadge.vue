<script setup lang="ts">
defineProps({
  backgroundColor: {
    type: String,
    required: false,
    default: 'blue-100',
  },
  darkBackgroundColor: {
    type: String,
    required: false,
    default: 'blue-800',
  },
  textColor: {
    type: String,
    required: false,
    default: 'blue-800',
  },
  darkTextColor: {
    type: String,
    required: false,
    default: 'blue-100',
  },
  fontSize: {
    type: String,
    required: false,
    default: 'base',
  },
  fontWeight: {
    type: String,
    required: false,
    default: 'normal',
  },
  rounded: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>

<template>
  <span
    class="px-2.5 py-0.5"
    :class="[
      `bg-${backgroundColor}`,
      `dark:bg-${darkBackgroundColor}`,
      `text-${textColor}`,
      `dark:text-${darkTextColor}`,
      `text-${fontSize}`,
      `font-${fontWeight}`,
      rounded ? 'rounded' : '',
    ]"
  >
    <slot />
  </span>
</template>
