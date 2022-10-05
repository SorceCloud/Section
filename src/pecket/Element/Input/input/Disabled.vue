<script setup lang="ts">
import { WInput } from "vue-windi";
</script>
<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WInput disabled label="Disabled" placeholder="Type here..." />
    <WInput disabled label="Disabled" value="disabled with text" />
    <!-- #endregion snippet -->
  </div>
</template>
