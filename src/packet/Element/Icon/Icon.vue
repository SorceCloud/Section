<template>
  <i :class="[
  `fa-${name}`,
  {
    'fa-beat': beat,
    'fa-xs': xs,
    'fa-sm': sm,
    'fa-lg': lg,
    'fa-xl': xl,

    'fa-solid': solid,
    'fa-regular': regular,
    'fa-light': light,
    'fa-thin': thin,
    'fa-duotone': duotone,
    'fa-brands': brand,
    'fa-kit': kit,
  }]">
  </i>
</template>

<script lang="ts" setup>
import './Icon.js'
defineProps({
  name: { type: String, default: '', required: false },
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