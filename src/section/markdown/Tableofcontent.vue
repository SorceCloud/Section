<script setup lang="ts">
import { PropType } from 'vue'
import { computed } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/types'
//import Menu from '~/pecket/Section/Menu/Menu.vue';
import TocItem from './TocItem.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n();

const props = defineProps({
  toc: {
    type: Array as PropType<MarkdownItHeader[]>,
    default: () => [],
  },
})

const hasHeadings = computed(() => props.toc.length > 0)
</script>
<template>
  <div class="site-toc order-last hidden flex-shrink-0 px-4 text-sm xl:block">
    <div ref="tocContent" class="max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto">
      <ul v-if="hasHeadings">
        <p class="mb-4 font-semibold tracking-tight">
          {{t("home.tableOfContent")}}
        </p>
        <!-- <Menu compact="md" v-for="heading in toc" :key="heading.slug" hover-border compact
          class="shadow-0 w-auto">
          <btn tag="a" :href="`#${heading.slug}`" menu-item class="btn-sm my-0">{{
          heading.title
          }}</btn>
        </Menu> -->
        <TocItem v-for="heading in toc" :key="heading.slug" v-bind="heading" />
      </ul>
    </div>
  </div>
</template>
