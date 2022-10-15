<script lang="ts">
import { defineComponent } from 'vue'
import './menu.css'
export default defineComponent({
  props: {
    compact: {    // Menu compact if set true or responsive
      type: [Boolean, String], default: false, required: false,
      validator: (value: boolean | string) => {
        return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
      },
    },
    horizontal: {// Menu horizontal if set true or responsive
      type: [Boolean, String], default: false, required: false,
      validator: (value: boolean | string) => {
        return ['sm', 'md', 'lg', 'xl', true, false].includes(value)
      },
    },
    rounded: { type: Boolean, default: false, required: false }, // Menu with rounded borders
    padding: { type: Boolean, default: false, required: false },// Menu with padding and list with rounded border
    hoverBorder: { type: Boolean, default: false, required: false }, // List with left border colored on hover
  },
  setup(props, { slots }) {
    return { slots }
  },
})
</script>

<template>
  <ul class="menu" :class="[compact ? typeof compact === 'string' ? `compact-${compact}` : 'compact': '',
  horizontal ? typeof horizontal === 'string' ? `horizontal-${horizontal}` : 'horizontal' : '',
  {'rounded': rounded, 'padding': padding,'hover-border': hoverBorder}]">
    <template v-if="slots.default">
      <li v-for="(slot, key) in slots.default()" :key="key" class="menu-item">
        <component :is="slot" v-if="slots.default" />
      </li>
    </template>
  </ul>
</template>
