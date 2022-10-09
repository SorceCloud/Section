<script setup lang="ts">
import { PropType } from 'vue'
import { computed, ref } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/types'
import Menu from '~/pecket/Section/Menu/Menu.vue';
import Button from '~/pecket/Element/Button/Button.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n();

const props = defineProps({
  toc: {
    type: Array as PropType<MarkdownItHeader[]>,
    default: () => [],
  },
})

const hasHeadings = computed(() => props.toc.length > 0)
const tocCssClass = ref('')
// const tocAnchor = ref(null)
// const tocContent = ref(null)

// const handleScroll = () => {
//   const e: HTMLElement = tocContent?.value
//   const offsetTop = tocAnchor?.value?.offsetTop - 24
//   if (typeof window !== 'undefined' && window.scrollY > offsetTop) {
//     e.classList.add('fixed')
//     e.style.top = '1.5rem'
//   }
//   else {
//     e.classList.remove('fixed')
//     e.style.top = ''
//   }
// }

// if (typeof window !== 'undefined') {
//   window.addEventListener('scroll', handleScroll)
// }

// onUnmounted(() => {
//   if (typeof window !== 'undefined') {
//     window.removeEventListener('scroll', handleScroll)
//   }
// })
</script>
<template>
  <div class="site-toc order-last hidden flex-shrink-0 px-4 text-sm xl:block">
    <div ref="tocContent" class="max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] overflow-y-auto"
      :class="tocCssClass">
      <ul v-if="hasHeadings">
        <p class="mb-4 font-semibold tracking-tight">
          {{t("home.tableOfContent")}}
        </p>
        <Menu v-for="heading in toc" :key="heading.slug" hover-border compacthover-border class="shadow-0 w-auto">
          <Button tag="a" :href="`#${heading.slug}`" menu-item>{{
          heading.title
          }}</Button>
        </Menu>
      </ul>
    </div>
  </div>
</template>
