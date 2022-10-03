<script setup lang="ts">
import siteConfig from '~/site.config'

const { t } = useI18n()
const showMobileMenu = ref(false)
const onToggleMobileMenu = () => (showMobileMenu.value = !showMobileMenu.value)

useHead({
  bodyAttrs: {
    style: computed(() => showMobileMenu.value ? 'overflow: hidden' : 'overflow: auto'),
  },
})
</script>

<template>
  <div class="md:hidden">
    <button
      type="button"
      class="w-8 h-8 py-1 ml-1 mr-1 rounded"
      :aria-label="t('button.toggle_mobile_menu')"
      @click="onToggleMobileMenu"
    >
      <Icon
        :icon="showMobileMenu ? 'bi:x' : 'bi:list'"
        width="32"
        height="32"
        class="text-gray-900 dark:text-gray-100"
      />
    </button>
    <div
      class="fixed w-full h-full top-24 right-0 bg-white dark:bg-gray-900 z-10 transform ease-in-out duration-300" :class="[showMobileMenu ? 'translate-x-0' : 'translate-x-full']"
    >
      <button
        type="button"
        aria-label="toggle modal"
        class="fixed w-full h-full cursor-auto focus:outline-none"
        @click="onToggleMobileMenu"
      />
      <nav class="fixed h-full mt-8">
        <div
          v-for="hnItem in siteConfig.headerNavigationItems"
          :key="hnItem.title"
          class="px-12 py-4"
        >
          <Link
            class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
            :href="hnItem.href"
            :disable-router-link="hnItem.disableRouterLink"
            @click="onToggleMobileMenu"
          >
            {{ hnItem.title }}
          </Link>
        </div>
      </nav>
    </div>
  </div>
</template>
