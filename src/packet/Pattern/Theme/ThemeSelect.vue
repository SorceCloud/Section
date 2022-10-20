<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n();

const isTheme = ref<string>('theme-default')

onMounted(() => {
  const storaged = localStorage.getItem('theme')
  if (storaged)
    isTheme.value = storaged
  document.documentElement.classList.add(isTheme.value);
})

function changeTheme(color: string) {
  document.documentElement.classList.remove(isTheme.value);
  isTheme.value = color;
  document.documentElement.classList.add(isTheme.value);
  localStorage.setItem("theme", isTheme.value);
}

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn color="base-content">
        <icn name="swatchbook" light xl></icn>
      </btn>
    </template>
    <Menu shadow class="w-32 !bg-base-200">
      <btn item @click="changeTheme('theme-default')">
        <span class="theme-blue rounded-$rounded-btn bg-blue-700 h-6 w-6"></span>{{ t("theme.blue") }}
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
