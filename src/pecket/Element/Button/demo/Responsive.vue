<script setup lang="ts">
import Button from '../Button.vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-3">
        <!-- #region snippet -->
        <Button size="sm" md="lg">Default(sm) md(lg)</Button>
        <Button size="lg" md="xs">Default(lg) md(xs)</Button>
        <!-- #endregion snippet -->
    </div>
</template>