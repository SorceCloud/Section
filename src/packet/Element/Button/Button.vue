<script lang="ts" setup>
import { type PropType, computed, ref } from 'vue';
import './button.css'
const props = defineProps({
  tag: { type: String, default: 'button', required: false, },
  color: {
    type: String, default: 'primary',
    validator: (value: string) => {
      return ['primary', 'secondary', 'success', 'error', 'warning'].includes(value)
    },
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button', require: false,
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value)
    }
  },
  loading: { type: Boolean, default: false, required: false, },
  disabled: { type: Boolean, default: false, required: false, },
  size: {
    type: String, default: 'md', required: false,
    validator: (value: string) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
  variant: {
    type: String, default: 'default', required: false,
    validator: (value: string) => {
      return ['default', 'outline', 'transparent', 'link'].includes(value)
    }
  },
  pills: { type: Boolean, default: false, required: false },
  circle: { type: Boolean, default: false, required: false },
  active: { type: Boolean, default: false, required: false },
  // remove all styles from button
  clean: { type: Boolean, default: false, required: false },
  item: { type: Boolean, default: false, required: false },

  sm: { type: String, required: false }, // responsive sm
  md: { type: String, required: false }, // responsive md
  lg: { type: String, required: false }, // responsive lg
  xl: { type: String, required: false }  // responsive xl
})
const computedType = computed(() => {
  if (props.tag === 'input' || props.tag === 'button')
    return props.type
  return null
})
const responsive = computed(() => {
  const rp = ref('btn-')
  if (props.sm)
    rp.value = `${rp.value}sm-${props.sm}`
  else if (props.md)
    rp.value = `${rp.value}md-${props.md}`
  else if (props.lg)
    rp.value = `${rp.value}lg-${props.lg}`
  else if (props.xl)
    rp.value = `${rp.value}xl-${props.xl}`
  else return null
  return rp.value
})
</script>
<template>
  <component :is="props.tag" :disabled="props.disabled || props.loading" :type="computedType" class="btn" :class="[
    `btn-${props.color}`,
    `btn-${props.variant}`,
    `btn-${props.size}`,
    responsive ?? responsive,
    {
      'btn-pills': props.pills,
      'btn-disabled': props.disabled,
      'btn-loading': props.loading,
      'btn-circle': props.circle,
      'btn-active': props.active,
      'btn-clean': props.item || props.clean
    }
  ]">
    <svg v-if="props.loading" name="icon-loading" class="icon-loading" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle class="icon-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="icon-path" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot />
  </component>
</template>
