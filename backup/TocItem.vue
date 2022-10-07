<script lang="ts">
import type { PropType } from 'vue'
import type { MarkdownItHeader } from '@mdit-vue/types'

const headingCssClassMap: Record<number, string> = {
  1: '',
  2: '',
  3: 'ml-4',
  4: 'ml-8',
  5: 'ml-12',
  6: 'ml-16',
}

export default defineComponent({
  props: {
    /**
     * Section title
     *
     * @type { string }
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * Section slug
     *
     * @type { string }
     */
    slug: {
      type: String,
      default: '',
    },
    /**
     * Section level
     *
     * @type { Number }
     */
    level: {
      type: Number,
      default: 1,
    },
    /**
     * Children table of contents
     *
     * @type { MarkdownItHeader[] }
     */
    children: {
      type: Array as PropType<MarkdownItHeader[]>,
      default: () => [],
    },
  },
  setup(props) {
    const itemRef = ref(null)
    // const route = useRoute()
    // const isActive = computed(() => route.hash === `#${decodeURIComponent(props.slug)}`)
    const headingOffsetCssClass = computed(() => headingCssClassMap[props.level])

    // watchEffect(() => {
    //   if (typeof document !== 'undefined') {
    //     const el = document.getElementById(props.slug)
    //     // if (isActive.value && el) {
    //     //   el.scrollIntoView({ behavior: 'smooth' })
    //     // }
    //   }
    // })

    return { headingOffsetCssClass, itemRef }
  },
})
</script>

<template>
  <li ref="itemRef" class="scroll-my-6 scroll-py-6 leading-7" :class="headingOffsetCssClass">
    <Link :href="`#${slug}`" class="inline-block no-underline">
    {{ title }}
    </Link>
  </li>
  <!-- <TocItem v-for="item in children" :key="item.slug" v-bind="item" /> -->
</template>
