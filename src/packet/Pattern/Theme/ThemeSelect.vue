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
  <Dropdown placement="bottom-end" hover>
    <template #trigger="{ active }">
      <btn item class="hover:bg-base-300 rounded-$rounded-btn dark:hover:bg-base-100">
        <icn name="swatchbook" light xl></icn>
      </btn>
    </template>
    <Menu rounded shadow class="w-32 bg-base-300 dark:bg-base-100">
      <btn clean @click="changeTheme('theme-default')">
        <span class="theme-blue rounded-$rounded-btn bg-blue-700 h-6 w-6"></span>{{ t("theme.blue") }}
      </btn>
      <btn clean @click="changeTheme('theme-teal')">
        <span class="theme-teal rounded-$rounded-btn bg-teal-700 h-6 w-6"></span>{{ t("theme.teal") }}
      </btn>
      <btn clean @click="changeTheme('theme-rose')">
        <span class="theme-rose rounded-$rounded-btn bg-rose-700 h-6 w-6"></span>{{ t("theme.rose") }}
      </btn>
      <btn clean @click="changeTheme('theme-violet')">
        <span class="theme-violet rounded-$rounded-btn bg-violet-700 h-6 w-6"></span>{{ t("theme.violet") }}
      </btn>
      <btn clean @click="changeTheme('theme-orange')">
        <span class="theme-orange rounded-$rounded-btn bg-orange-700 h-6 w-6"></span>{{ t("theme.orange") }}
      </btn>
    </Menu>
  </Dropdown>
</template>
