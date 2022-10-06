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
  <article>
    <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <div class="py-20 divide-y divide-gray-200 lg:divide-y-0 dark:divide-gray-700 lg:grid lg:grid-cols-5 lg:gap-x-4">
        <div class="divide-y divide-gray-200 dark:divide-gray-700 lg:pb-0 lg:col-span-5 xl:row-span-3"
          :class="[(frontmatter as MdFrontmatter).toc?.length > 0 ? 'xl:col-span-3' : 'xl:col-span-4']">
          <div class="prose dark:prose-dark max-w-none">
            <slot />
          </div>
        </div>
        <div v-if="(frontmatter as MdFrontmatter).toc?.length > 0" class="hidden xl:block xl:row-span-3">
          <Toc :toc="(frontmatter as MdFrontmatter).toc" />
        </div>
      </div>
    </div>
  </article>
</template>
