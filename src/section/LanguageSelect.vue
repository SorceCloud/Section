<script setup lang="ts">
import setLanguage from '../store/language'

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn variant="transparent" color="secondary" class="stroke-base-text">
        <icn name="language" light xl></icn>
      </btn>
    </template>
    <Menu shadow class="w-20 !bg-base-200">
      <btn item @click="setLanguage('en-US')">
        English
      </btn>
      <btn item @click="setLanguage('zh-CN')">
        中文
      </btn>
    </Menu>
  </Dropdown>
</template>
