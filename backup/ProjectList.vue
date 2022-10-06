<script setup lang="ts">
defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const { t } = useI18n()
const { queryParams, pushQuery } = useQuery()

const filters = computed(() => {
  const f = queryParams.value
  if (Object.keys(f).includes('q')) {
    delete f.q
  }
  return f
})

const onFilterRemoved = (query: string) => pushQuery(query, undefined)
</script>

<template>
  <main class="relative mb-auto">
    <div class="container py-6">
      <div class="flex flex-row flex-wrap pb-6">
        <TwDismissableBadge
          v-for="(value, query) in filters"
          :key="`${query}:${value}`"
          v-bind="getRandomDismissableBadgeStyle()"
          class="mr-2"
          @removed="onFilterRemoved(query)"
        >
          {{ `${query}:${value}` }}
        </TwDismissableBadge>
      </div>
      <div v-if="Array.isArray(projects) && projects.length > 0" class="grid grid-cols-1 xl:grid-cols-2 gap-1 -m-4">
        <ProjectCard v-for="project of projects" :key="project.slug" :project="project" />
      </div>
      <p v-else class="pt-4">
        {{ t('no_post') }}
      </p>
    </div>
  </main>
</template>
