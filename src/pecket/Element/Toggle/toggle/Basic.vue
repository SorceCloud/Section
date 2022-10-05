
<script setup lang="ts">
import { WToggle } from "vue-windi"

</script>

<template> 
    <div class="flex flex-wrap items-center gap-3">
     <!-- #region snippet -->
          <WToggle checked />
          <WToggle checked color="secondary" />
          <WToggle checked color="success" />
          <WToggle checked color="warning" />
          <WToggle checked color="danger" />
     <!-- #endregion snippet -->

    </div>
</template>