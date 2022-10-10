<script setup lang="ts">
import { ref } from "vue";
import { WModal, WButton } from "vue-windi";

const modal = ref({
  noBackdrop: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WButton @click="modal.noBackdrop = true">No backdrop</WButton>
      <WModal
            v-model:active="modal.noBackdrop"
            :outside="false"
            :backdrop="false"
          >
            <template #header> The important modal header </template>
            <template #body> The noBackdrop modal body </template>
            <template #footer="footerProps">
              <WButton @click="modal.noBackdrop = false">Dismiss!</WButton>
            </template>
          </WModal>
    <!-- #endregion snippet -->
  </div>
</template>
