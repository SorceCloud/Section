<script setup lang="ts">
import type { PropType } from 'vue'
import { MdFrontmatter, } from '~/types'
import Tableofcontent from './Tableofcontent.vue'
defineProps({
  frontmatter: { type: Object as PropType<MdFrontmatter>, default: () => { } },
})
</script>

<template>
  <article class="flex flex-row lg:p-10 p-0 w-full min-w-0 ">
    <div class="lg:w-5/6 w-full">
      <slot></slot>
    </div>
    <div v-if="(frontmatter as MdFrontmatter).toc?.length > 0" class="hidden border-l xl:block xl:row-span-3">
      <Tableofcontent :toc="(frontmatter as MdFrontmatter).toc"
        class="max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto fixed" />
    </div>
  </article>
</template>
