<script setup lang="ts">
import { ref } from "vue";
import { WModal, WButton } from "vue-windi";

const modal = ref({
  noOutside: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WButton @click="modal.noOutside = true">No outside</WButton>
    <WModal v-model:active="modal.noOutside" :outside="false">
      <template #header> The important modal header </template>
      <template #body> The noOutside modal body </template>
      <template #footer="footerProps">
        <WButton @click="modal.noOutside = false">Dismiss!</WButton>
      </template>
    </WModal>
    <!-- #endregion snippet -->
  </div>
</template>
