<script setup lang="ts">
import './backdrop.css'
defineProps({
  show: { type: Boolean, required: true }
})
</script>
<template>
  <transition name="backdrop-fade" appear>
    <div v-show="show" class="backdrop bg-gray-400 z-10 opacity-30">
    </div>
  </transition>
</template>