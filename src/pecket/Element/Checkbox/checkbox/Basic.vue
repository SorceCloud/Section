<script setup lang="ts">
import { WCheckbox } from "vue-windi";
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WCheckbox checked />
    <WCheckbox checked color="secondary" />
    <WCheckbox checked color="success" />
    <WCheckbox checked color="warning" />
    <WCheckbox checked color="danger" />
    <!-- #endregion snippet -->
  </div>
</template>
