<script setup lang="ts">
import { WDropdown, WMenu, WButton } from "vue-windi";
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WDropdown>
      <template #trigger="{ active }">
        <WButton :active="active">With Menu</WButton>
      </template>
      <WMenu rounded padding>
        <WButton menu-item>Item 1</WButton>
        <WButton menu-item>Item 2</WButton>
        <WButton menu-item>Item 3</WButton>
      </WMenu>
    </WDropdown>
    <!-- #endregion snippet -->
  </div>
</template>
