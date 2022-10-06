<script setup lang="ts">
import type { PropType } from 'vue'
import { MdFrontmatter, } from '~/types'
import type { PostFrontmatter } from '~/types'
defineProps({
  frontmatter: {
    type: Object as PropType<PostFrontmatter>,
    default: () => { },
  },
})
</script>

<template>
  <article class="flex flex-row p-10 w-full">
    <div>
      <slot></slot>
    </div>
    <div v-if="(frontmatter as MdFrontmatter).toc?.length > 0" class="hidden xl:block xl:row-span-3">
      <Toc :toc="(frontmatter as MdFrontmatter).toc" />
    </div>
  </article>
</template>
