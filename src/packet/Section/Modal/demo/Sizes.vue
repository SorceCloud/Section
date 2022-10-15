<script setup lang="ts">
import { ref } from "vue"
import Modal from '../Modal.vue'

const modal = ref({
  small: false,
  medium: false,
  large: false
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.small = true">Modal sm</btn>
    <btn @click="modal.medium = true">Modal md</btn>
    <btn @click="modal.large = true">Modal lg</btn>
    <Modal v-model:active="modal.small">
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.small = false">Dismiss!</btn>
      </template>
    </Modal>
    <Modal v-model:active="modal.medium" size="md">
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.medium = false">Dismiss!</btn>
      </template>
    </Modal>
    <Modal v-model:active="modal.large" size="lg">
      <template #header> The important modal header </template>
      <template #body> The modal body</template>
      <template #footer="footerProps">
        <btn @click="modal.large = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>