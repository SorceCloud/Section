<script setup lang="ts">
import Button from '../Button.vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-3">
        <!-- #region snippet -->
        <Button tag="a" href="/" variant="link">Home </Button>
        <Button tag="RouterLink" to="/components/button">Secondary </Button>
        <!-- #endregion snippet -->
    </div>
</template>