<script lang="ts" setup>
import './checkbox.css'
defineProps({
  checked: { type: Boolean, default: false, required: false },
  color: {
    type: String, default: 'primary',
    validator: (value: string) => {
      return ['primary', 'secondary', 'success', 'error', 'warning'].includes(value)
    }
  },
  size: {
    type: String, default: 'md', required: false,
    validator: (value: string) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  disabled: { type: Boolean, default: false, required: false }
})
</script>

<template>
  <input type="checkbox" :checked="checked" :disabled="disabled" class="ckb" :class="[
    `ckb-${color}`,
    `ckb-${size}`,
  ]">
</template>
