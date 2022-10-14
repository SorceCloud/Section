<script setup lang="ts">
import { ref } from "vue";
import { WModal, WButton } from "vue-windi";

const modal = ref({
  backdropBlur: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WButton @click="modal.backdropBlur = true">Backdrop blur</WButton>
    <WModal
      v-model:active="modal.backdropBlur"
      backdrop-class="backdrop-brightness-60 backdrop-blur-1"
    >
      <template #header> The important modal header </template>
      <template #body> The backdrop blur modal body </template>
      <template #footer="footerProps">
        <WButton @click="modal.backdropBlur = false">Dismiss!</WButton>
      </template>
    </WModal>
    <!-- #endregion snippet -->
  </div>
</template>
