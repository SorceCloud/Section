<script setup lang="ts">
import setLanguage from '../store/language'

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn variant="transparent" color="secondary" class="stroke-base-text">
        <i class="fa-light fa-language fa-xl"></i>
      </btn>
    </template>
    <Menu class="w-20 !bg-base-200">
      <btn menu-item @click="setLanguage('en-US')">
        English
      </btn>
      <btn menu-item @click="setLanguage('zh-CN')">
        中文
      </btn>
    </Menu>
  </Dropdown>
</template>
