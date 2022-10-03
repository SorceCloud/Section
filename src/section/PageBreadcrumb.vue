<script setup lang="ts">
import type { PropType } from 'vue'
import type { BreadcrumbItem } from '~/types'

defineProps({
  /**
   * Breadcrumb items
   *
   * @type { BreadcrumbItem[] }
   */
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    default: () => [],
  },
})

const { t } = useI18n()
</script>

<template>
  <nav class="hidden md:flex mb-10" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <Link href="/" class="inline-flex items-center text-normal font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <Icon icon="bi:house-heart-fill" />&nbsp;{{ t('home') }}
        </Link>
      </li>
      <li v-for="item in items" :key="item.text" :aria-current="item.active ? 'page' : undefined">
        <PageBreadcrumbItem v-bind="{ path: item.path, active: item.active }">
          {{ item.text }}
        </PageBreadcrumbItem>
      </li>
    </ol>
  </nav>
</template>
