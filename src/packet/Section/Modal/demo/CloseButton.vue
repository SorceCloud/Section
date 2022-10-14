<script setup lang="ts">
import { ref } from "vue";
import { WModal, WButton } from "vue-windi";

const modal = ref({
  closeBtn: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WButton @click="modal.closeBtn = true">Close btn</WButton>
    <WModal v-model:active="modal.closeBtn" close-btn>
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <WButton @click="modal.closeBtn = false">Dismiss!</WButton>
      </template>
    </WModal>
    <!-- #endregion snippet -->
  </div>
</template>
