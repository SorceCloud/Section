<script setup lang="ts">
import './backdrop.css'
defineProps({
  show: { type: Boolean, required: true }
})
</script>
<template>
  <transition name="backdrop-fade" appear>
    <div v-show="show" class="backdrop inset-0 fixed z-10 bg-gray-500  opacity-30">
    </div>
  </transition>
</template>