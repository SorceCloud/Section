<script setup lang="ts">
import { ref } from "vue";
import Modal from '../Modal.vue'

const modal = ref({
  headless: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.headless = true">Headless</btn>
    <Modal v-model:active="modal.headless">
      <div class="bg-primary-200 px-6 py-14 text-center">
        <div class="text-2xl font-bold text-white">My own modal</div>
      </div>
    </Modal>
  </div>
</template>
