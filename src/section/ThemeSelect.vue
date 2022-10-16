<script setup lang="ts">
import { useTheme } from '../store/theme'
import { useI18n } from 'vue-i18n'
const { t } = useI18n();

const { changeTheme } = useTheme()

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn variant="transparent" color="secondary" class="stroke-base-text">
        <i class="fa-light fa-swatchbook fa-xl"></i>
      </btn>
    </template>
    <Menu class="w-32 !bg-base-200">
      <btn item @click="changeTheme('theme-default')">
        <span class="theme-blue rounded-[0.5rem] bg-blue-700 h-6 w-6"></span>{{ t("theme.blue") }}
      </btn>
      <btn item @click="changeTheme('theme-teal')">
        <span class="theme-teal rounded-$rounded-btn bg-teal-700 h-6 w-6"></span>{{ t("theme.teal") }}
      </btn>
      <btn item @click="changeTheme('theme-rose')">
        <span class="theme-rose rounded-$rounded-btn bg-rose-700 h-6 w-6"></span>{{ t("theme.rose") }}
      </btn>
      <btn item @click="changeTheme('theme-violet')">
        <span class="theme-violet rounded-$rounded-btn bg-violet-700 h-6 w-6"></span>{{ t("theme.violet") }}
      </btn>
      <btn item @click="changeTheme('theme-orange')">
        <span class="theme-orange rounded-$rounded-btn bg-orange-700 h-6 w-6"></span>{{ t("theme.orange") }}
      </btn>
    </Menu>
  </Dropdown>
</template>
