<template>
  <!-- <Backdrop @click="toggleDrawer" :show="isShow" /> -->
  <transition name="sidebar-slide">
    <div v-show="isShow" class="fixed right-0 z-40 flex-none w-72 h-screen bg-base-200 border-l">
      <div class="flex items-center justify-between h-$navbar-height bg-primary-200/10 px-2">
        <span>{{ title }}</span>
        <btn variant="transparent" color="secondary" class="!fill-base-text">
          <icn name="xmark" regular xl />
        </btn>
      </div>
      <div class="max-w-2xs h-screen fixed mx-2 w-62">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
defineProps({
  isShow: { type: Boolean, default: false },
  title: { type: String, default: "Title" }
})
</script>
