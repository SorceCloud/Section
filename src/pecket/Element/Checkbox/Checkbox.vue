<script lang="ts" setup>
import './checkbox.css'
const props = defineProps({
  checked: { type: Boolean, default: false, required: false },
  color: {
    type: String, default: 'primary',
    validator: (value: string) => {
      return ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value)
    }
  },
  size: {
    type: String, default: 'md', required: false,
    validator: (value: string) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  disabled: {
    type: Boolean, default: false, required: false
  }
})
</script>

<template>
  <input type="checkbox" :checked="checked" :disabled="disabled" class="checkbox" :class="[
    `checkbox-${color}`,
    `checkbox-${size}`,
  ]">
</template>
