<script setup lang="ts">
import type { PropType } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/plugin-headers'
import type { Frontmatter } from 'vite-plugin-md'
import Tableofcontent from './Tableofcontent.vue'
import './markdown.css'

interface MdFrontmatter extends Frontmatter {
  type: string
  author: string
  date: Date | string
  toc: MarkdownItHeader[]
  categories: string[]
  tags: string[]
}
defineProps({
  frontmatter: { type: Object as PropType<MdFrontmatter>, default: () => { } },
})
</script>

<template>
  <article class="flex flex-row lg:px-10 lg:pt-10 w-full min-w-0 h-max ">
    <div class="lg:w-5/6 w-full pr-10">
      <slot></slot>
    </div>
    <div v-if="frontmatter.toc?.length > 0" class="hidden border-l xl:block xl:row-span-3">
      <Tableofcontent :toc="frontmatter.toc"
        class="max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto fixed" />
    </div>
  </article>
</template>
