<script setup lang="ts">
import { ref } from 'vue'
import Modal from '../Modal.vue'

const modal = ref({
  closeBtn: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.closeBtn = true">Close btn</btn>
    <Modal v-model:active="modal.closeBtn" close-btn>
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.closeBtn = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
