<script lang="ts" setup>
import { computed, PropType, ref, watchEffect } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/types'
import { useRoute } from 'vue-router'
import Link from './Link.vue'

const headingCssClassMap: Record<number, string> = {
  1: '',
  2: '',
  3: 'ml-4',
  4: 'ml-8',
  5: 'ml-12',
  6: 'ml-16',
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
  <!-- Copied from Nextra Docs Theme with customizations -->
  <li ref="itemRef" class="scroll-my-6 scroll-py-6 leading-7" :class="headingOffsetCssClass">
    <Link :href="`#${slug}`" class="inline-block no-underline" :class="[
      level === 2 && 'font-semibold',
      isActive
        ? 'text-primary-500 subpixel-antialiased'
        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
    ]" :aria-selected="isActive">
    {{ title }}
    </Link>
  </li>
  <TocItem v-for="item in children" :key="item.slug" v-bind="item" />
</template>
