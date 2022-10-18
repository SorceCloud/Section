<template>
  <i :class="[
  `fa-${props.name}`,
  `fa-${props.type}`,
  `fa-${props.size}`,
  {
    'fa-beat':beat,
    'fa-xs':xs,
    'fa-sm':sm,
    'fa-lg':lg,
    'fa-xl':xl,

    'fa-solid':solid,
    'fa-regular':regular,
    'fa-light':light,
    'fa-thin':thin,
    'fa-duotone':duotone,
    'fa-brands':brand,
    'fa-kit':kit,
  }]">
  </i>
</template>

<script lang="ts" setup>
import './Icon.js'
const props = defineProps({
  name: { type: String, default: '', required: false },
  type: {
    type: String, default: 'regular', required: false,
    validator: (value: string) => {
      return ['thin', 'solid', 'regular', 'light', 'duotone', 'brand', 'kit'].includes(value)
    },
  },
  size: {
    type: String, default: '', required: false,
    validator: (value: string) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },

  beat: { type: Boolean, default: false, required: false },

  xs: { type: Boolean, required: false }, // responsive xs
  sm: { type: Boolean, required: false },// responsive sm
  md: { type: Boolean, required: false },// responsive sm
  lg: { type: Boolean, required: false },// responsive lg
  xl: { type: Boolean, required: false },// responsive xl

  duotone: { type: Boolean, required: false },// type duotone
  solid: { type: Boolean, required: false },// type solid
  regular: { type: Boolean, required: false },// type regular
  light: { type: Boolean, required: false },// type light
  thin: { type: Boolean, required: false },// type thin
  brand: { type: Boolean, required: false },// type duotone
  kit: { type: Boolean, required: false },// type duotone

})
</script>