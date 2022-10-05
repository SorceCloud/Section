<script setup lang="ts">
import Button from '../button.vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-3">
        <!-- #region snippet -->
        <Button color="primary" variant="link">Primary </Button>
        <Button color="secondary" variant="link">Secondary </Button>
        <Button color="success" variant="link">Success </Button>
        <Button color="danger" variant="link">Danger </Button>
        <Button color="warning" variant="link">Warning </Button>
        <!-- #endregion snippet -->
    </div>
</template>