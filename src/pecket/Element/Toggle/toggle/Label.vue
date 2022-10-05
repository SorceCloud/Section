<script setup lang="ts">
import { WToggle } from "vue-windi";
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <div class="flex flex-col w-32">
      <label
        class="cursor-pointer flex select-none content-center py-2 px-1 justify-between">
        <span class="label-text">Label</span>
        <WToggle checked />
      </label>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
