<script setup lang="ts">
import Button from '../pecket/Element/Button/Button.vue'
import Dropdown from '~/pecket/Section/Dropdown/Dropdown.vue'
import Menu from '~/pecket/Section/Menu/Menu.vue'
import setLanguage from '../store/language'

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <Button variant="transparent" color="secondary" class="stroke-base-text">
        <i class="fa-light fa-language fa-xl"></i>
      </Button>
    </template>
    <Menu class="w-20 !bg-base-200">
      <Button menu-item @click="setLanguage('en-US')">
        English
      </Button>
      <Button menu-item @click="setLanguage('zh-CN')">
        中文
      </Button>
    </Menu>
  </Dropdown>
</template>
