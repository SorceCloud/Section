<script setup lang="ts">
import type { PropType } from 'vue'
import { MdFrontmatter, } from '~/types'
import Toc from './Tableofcontent.vue'
defineProps({
  frontmatter: {
    type: Object as PropType<MdFrontmatter>,
    default: () => { },
  },
})

</script>

<template>
  <article class="flex flex-row p-10 w-full flex-none ">
    <div class="w-2/3">
      <slot></slot>
    </div>
    <div v-if="(frontmatter as MdFrontmatter).toc?.length > 0" class="hidden border-l xl:block xl:row-span-3">
      <Toc :toc="(frontmatter as MdFrontmatter).toc"
        class="max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto fixed" />
    </div>
  </article>
</template>
