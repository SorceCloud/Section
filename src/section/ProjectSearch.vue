<script setup lang="ts">
const { t } = useI18n()
const { searchValue, setSearchValue } = useSearch()
const onChangeSearchValue = (e: Event) => {
  const val = (e.target as HTMLInputElement).value
  setSearchValue(val)
}
</script>

<template>
  <Search class="mx-auto" :value="searchValue" :placeholder="t('search_projects')" @change="onChangeSearchValue" />
</template>
