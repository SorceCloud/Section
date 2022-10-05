<script setup lang="ts">
import { ref } from "vue";
import { WInput } from "vue-windi";
const input = ref({
  validation: "",
});
</script>
<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WInput
      label="Your name"
      v-model:value="input.validation"
      error="The name field is required."
      placeholder="With validation here..."
    />
    <!-- #endregion snippet -->
  </div>
</template>
