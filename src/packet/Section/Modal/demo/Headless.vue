<script setup lang="ts">
import { ref } from "vue";
import { WModal, WButton } from "vue-windi";

const modal = ref({
  headless: false,
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WButton @click="modal.headless = true">Headless</WButton>
    <WModal v-model:active="modal.headless">
      <div class="bg-primary-200 px-6 py-14 text-center">
        <div class="text-2xl font-bold text-white">My own modal</div>
      </div>
    </WModal>
    <!-- #endregion snippet -->
  </div>
</template>
