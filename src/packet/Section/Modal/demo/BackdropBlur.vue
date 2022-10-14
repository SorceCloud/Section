<script setup lang="ts">
import { ref } from 'vue'
import Modal from '../Modal.vue'

const modal = ref({
  backdropBlur: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.backdropBlur = true">Backdrop blur</btn>
    <Modal v-model:active="modal.backdropBlur" backdrop-class="backdrop-brightness-60 backdrop-blur-1">
      <template #header> The important modal header </template>
      <template #body> The backdrop blur modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.backdropBlur = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
