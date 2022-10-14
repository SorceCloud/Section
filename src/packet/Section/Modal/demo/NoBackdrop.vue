<script setup lang="ts">
import { ref } from "vue";
import Modal from '../Modal.vue'

const modal = ref({
  noBackdrop: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.noBackdrop = true">No backdrop</btn>
    <Modal v-model:active="modal.noBackdrop" :outside="false" :backdrop="false">
      <template #header> The important modal header </template>
      <template #body> The noBackdrop modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.noBackdrop = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
