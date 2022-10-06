<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <div class="p-4">
    <div
      class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between items-center">
          <div class="my-2">
            <Link :href="project.path" class="h2 text-2xl font-bold leading-8 tracking-tight mb-3">
              {{ project.title }}
            </Link>
          </div>
          <div class="flex flex-row justify-between">
            <div v-if="project.showcaseUrl" class="mx-1">
              <a
                class="text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="project.showcaseUrl"
              >
                <span class="sr-only">external-link</span>
                <Icon icon="bi:box-arrow-up-right" class="text-dark dark:text-white ml-2" />
              </a>
            </div>
            <div v-if="project.repositoryUrl" class="mx-1">
              <a
                class="text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="project.repositoryUrl"
              >
                <span class="sr-only">github</span>
                <Icon icon="bi:github" class="text-dark dark:text-white ml-2" />
              </a>
            </div>
          </div>
        </div>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ project.excerpt }}
        </p>
        <div class="flex flex-col justify-between">
          <div v-if="project.license" class="text-gray-500 dark:text-gray-400 mb-3">
            {{ t('license') }}:
            <Link v-if="project.licenseUrl" :href="project.licenseUrl" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              {{ project.license }}
            </Link>
            <span v-else>{{ project.license }}</span>
          </div>
          <div class="text-gray-500 dark:text-gray-400 mb-3">
            {{ t('development_status.title') }}: <TwBadge v-bind="getProjectBadgeStyle(project.developmentStatus)">
              {{ $t(`development_status.${project.developmentStatus}`) }}
            </TwBadge>
          </div>
          <div class="flex flex-wrap mb-3">
            <Technology v-for="tech in project.techs" :key="tech" :text="tech" />
          </div>
          <Date :date="project.date" text-size="sm" />
        </div>
        <div class="text-base font-medium leading-6 text-end">
          <Link
            :href="project.path"
            class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            :aria-label="`Read ${project.title}`"
          >
            {{ t('read_more') }} &rarr;
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>
