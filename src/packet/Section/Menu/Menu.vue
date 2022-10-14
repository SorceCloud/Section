<script lang="ts" setup>
import './menu.css'
const props = defineProps({
  compact: {
    type: [Boolean, String], default: false, required: false,
    validator: (value: boolean | string) => {
      return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
    }
  },
  horizontal: {    // Menu horizontal if set true or responsive
    type: [Boolean, String], default: false, required: false,
    validator: (value: boolean | string) => {
      return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
    }
  },
  rounded: { type: Boolean, default: false, required: false },//Menu with rounded borders
  padding: { type: Boolean, dafault: false, required: false },//Menu with padding and listh with rounded border
  hoverBorder: { type: Boolean, dafault: false, required: false },//List with left border colored on hover
})
</script>

<template>
  <ul class="menu" :class="[
    props.compact
      ? typeof props.compact === 'string'
        ? `compact-${props.compact}`
        : 'compact'
      : '',
      props.horizontal
      ? typeof props.horizontal === 'string'
        ? `horizontal-${props.horizontal}`
        : 'horizontal'
      : '',
    {
      'rounded': props.rounded,
      'padding': props.padding,
      'hover-border': props.hoverBorder,
    },
  ]">
    <template v-if="$slots.default">
      <li v-for="(slot, key) in $slots.default()" :key="key" class="menu-item">
        <component :is="slot" v-if="$slots.default" />
      </li>
    </template>
  </ul>
</template>
