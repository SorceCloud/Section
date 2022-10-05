<script setup lang="ts">
import { WInput } from "vue-windi";
</script>
<template>
  <div class="flex flex-wrap items-center gap-3 bg-base-gray-200/30 pl-2 py-3 rounded-$rounded-btn">
    <!-- #region snippet -->
    <WInput :bordered="false" placeholder="No Border..." />
    <!-- #endregion snippet -->
  </div>
</template>
