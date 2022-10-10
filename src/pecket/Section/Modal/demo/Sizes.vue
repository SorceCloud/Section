
<script setup lang="ts">
import { ref } from "vue"
import { WModal, WButton } from "vue-windi"

const modal = ref({
    small: false,
    medium: false,
    large: false
})

</script>

<template> 
    <div class="flex flex-wrap items-center gap-3">
     <!-- #region snippet -->
         <WButton @click="modal.small = true">Modal sm</WButton>
          <WButton @click="modal.medium = true">Modal md</WButton>
          <WButton @click="modal.large = true">Modal lg</WButton>

           <WModal v-model:active="modal.small">
            <template #header> The important modal header </template>
            <template #body> The modal body </template>
            <template #footer="footerProps">
              <WButton @click="modal.small = false">Dismiss!</WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.medium" size="md">
            <template #header> The important modal header </template>
            <template #body> The modal body </template>
            <template #footer="footerProps">
              <WButton @click="modal.medium = false">Dismiss!</WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.large" size="lg">
            <template #header> The important modal header </template>
            <template #body> The modal body</template>
            <template #footer="footerProps">
              <WButton @click="modal.large = false">Dismiss!</WButton>
            </template>
          </WModal>
     <!-- #endregion snippet -->

    </div>
</template>