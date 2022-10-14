<script setup lang="ts">
import { ref } from "vue";
import Modal from '../Modal.vue'

const modal = ref({
  noOutside: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.noOutside = true">No outside</btn>
    <Modal v-model:active="modal.noOutside" :outside="false">
      <template #header> The important modal header </template>
      <template #body> The noOutside modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.noOutside = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
