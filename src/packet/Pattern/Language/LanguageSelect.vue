<script setup lang="ts">
import I18n from '~/locale'

const setLanguage = (locale: 'zh-CN' | 'en-US') => {
  if (locale !== I18n.global.locale.value) {
    localStorage.setItem("locale", locale)
    I18n.global.locale.value = locale
    return true
  } {
    return false
  }
}

</script>
<template>
  <Dropdown placement="bottom-end" hover>
    <template #trigger="{ active }">
      <btn item class="hover:text-primary">
        <icn name="language" light xl></icn>
      </btn>
    </template>
    <Menu rounded shadow class="w-20 bg-base-300 dark:bg-base-100">
      <btn clean @click="setLanguage('en-US')">
        English
      </btn>
      <btn clean @click="setLanguage('zh-CN')">
        中文
      </btn>
    </Menu>
  </Dropdown>
</template>
