<script setup lang="ts">
import Button from '../Button.vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-3">
        <!-- #region snippet -->
        <Button color="primary" pills>Primary </Button>
        <Button color="secondary" pills>Secondary </Button>
        <Button color="success" pills>Success </Button>
        <Button color="danger" pills>Danger </Button>
        <Button color="warning" pills>Warning </Button>
        <!-- #endregion snippet -->
    </div>
</template>