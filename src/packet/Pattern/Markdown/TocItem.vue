<script lang="ts" setup>
import { computed, PropType, ref, watchEffect } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/types'
import { useRoute } from 'vue-router'
import TocLink from './TocLink.vue'

const headingCssClassMap: Record<number, string> = {
  1: '',
  2: '',
  3: 'ml-2',
  4: 'ml-4',
  5: 'ml-6',
  6: 'ml-8',
}
const props = defineProps({
  title: { type: String, default: '' },//Section title
  slug: { type: String, default: '' },//Section slug
  level: { type: Number, default: 1 },//Section level
  children: {
    type: Array as PropType<MarkdownItHeader[]>,
    default: () => [],
  },
})
const itemRef = ref(null)
const route = useRoute()
const isActive = computed(() => route.hash === `#${decodeURIComponent(props.slug)}`)
const headingOffsetCssClass = computed(() => headingCssClassMap[props.level])

watchEffect(() => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById(props.slug)
    if (isActive.value && el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<template>
  <div>
    <li ref="itemRef" :class="headingOffsetCssClass">
      <TocLink :href="`#${slug}`" class="inline-block no-underline py-1" :class="[
        level === 2,
        isActive
          ? 'text-primary-500 subpixel-antialiased border-l-2 border-primary bg-base-gray-300 dark:bg-base-gray-600 px-3.5'
          : 'text-gray-700 hover:bg-base-gray-300 dark:text-gray-400 dark:hover:text-gray-400 dark:hover:bg-base-gray-600 px-4',
      ]" :aria-selected="isActive">
        {{ title }}
      </TocLink>
      <TocItem v-for="item in children" :key="item.slug" v-bind="item" />
    </li>
  </div>
</template>
