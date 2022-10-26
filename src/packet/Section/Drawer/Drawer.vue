<template>
  <!-- <Backdrop :show="isShow" /> -->
  <transition name="drawer-slide">
    <div v-show="isShow" class="fixed z-10 flex-none w-72 h-screen bg-base-200 border-l">
      <div class="flex items-center justify-between bg-base-100 px-2 border-b">
        <span class="base-content font-medium text-lg">{{ title }}</span>
        <btn item class="hover:text-primary" @click="closeDrawer">
          <icn name="xmark" regular xl />
        </btn>
      </div>
      <div class="p-3">
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
const emit = defineEmits(['update:isShow'])
function closeDrawer() {
  emit('update:isShow', false)
}
</script>
<style>
.drawer-slide-enter-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.drawer-slide-leave-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.drawer-slide-enter-from.right,
.drawer-slide-leave-to.right {
  transform: translate(-100%);
  opacity: 0;
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translate(100%);
  opacity: 0;
}
</style>