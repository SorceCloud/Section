<script setup lang="ts">
import siteConfig from '~/site.config'
</script>

<template>
  <header class="flex items-center justify-between py-10">
    <Link href="/" :aria-label="siteConfig.title">
    <div class="flex items-center justify-between">
      <div class="hidden sm:block md:hidden lg:block h-6 text-2xl font-semibold">
        {{ siteConfig.title }}
      </div>
    </div>
    </Link>
    <div class="flex items-center text-base leading-5">
      <div class="hidden md:flex">
        <Link v-for="hnItem in siteConfig.headerNavigationItems" :key="hnItem.title"
          class="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 flex items-center"
          :class="[typeof hnItem.icon === 'string' ? 'flex items-center' : '']" :href="hnItem.href"
          :disable-router-link="hnItem.disableRouterLink">
        <Icon v-if="typeof hnItem.icon === 'string'" :icon="hnItem.icon"
          :class="[typeof hnItem.title === 'string' ? 'mr-2' : '']" /><span>{{ hnItem.title }}</span>
        </Link>
      </div>
    </div>
  </header>
</template>
