
<script setup lang="ts">
import { WDropdown, WMenu, WButton } from "vue-windi"

</script>

<template> 
    <div class="flex flex-wrap items-center gap-3">
     <!-- #region snippet -->
        <WDropdown placement="bottom-start">
            <template #trigger="{ active }">
              <WButton :active="active">Bottom-start</WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="bottom-end">
            <template #trigger="{ active }">
              <WButton :active="active">Bottom-end</WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="top-start">
            <template #trigger="{ active }">
              <WButton :active="active">Top-start</WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="top-end">
            <template #trigger="{ active }">
              <WButton :active="active">Top-end</WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="bottom-start">
            <template #trigger="{ active }">
              <div>Trigger with div</div>
            </template>
            test
          </WDropdown>
     <!-- #endregion snippet -->

    </div>
</template>