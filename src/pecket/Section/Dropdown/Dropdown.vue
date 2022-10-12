<script lang="ts" setup>
import { ref } from 'vue'
import { useClickOutside } from '~/store/useClickOutside'
import './dropdown.css'

const props = defineProps({
  placement: {
    type: String, default: 'bottom-start', required: false,
    validator: (value: string) => {
      return ['bottom-start', 'bottom-end', 'top-start', 'top-end'].includes(value)
    }
  },
  hover: { type: Boolean, default: false, required: false }
})
const dropdownRef = ref(null)
const isActive = ref(false)

function toggle() {
  if (!props.hover)
    isActive.value = !isActive.value
}
function mouseEnter() {
  if (props.hover)
    isActive.value = true
}
function mouseLeave() {
  if (props.hover)
    isActive.value = false
}
useClickOutside(dropdownRef, () => {
  if (isActive.value)
    isActive.value = false
})
</script>

<template>
  <div ref="dropdownRef" class="dropdown" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @pointerenter="mouseEnter">
    <div class="dropdown-trigger" @click="toggle">
      <slot name="trigger" :active="isActive" />
    </div>
    <transition enter-active-class="transition-enter-active" enter-from-class="transition-enter-from"
      enter-to-class="transition-enter-to" leave-active-class="transition-leave-active"
      leave-from-class="transition-leave-from" leave-to-class="transition-leave-to">
      <div v-show="isActive" class="dropdown-menu" :class="[
        `dropdown-${props.placement}`,
      ]">
        <slot />
      </div>
    </transition>
  </div>
</template>
