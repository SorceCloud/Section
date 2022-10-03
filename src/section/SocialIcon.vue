<script lang="ts">
const iconMap = {
  email: 'bi:envelope-fill',
  github: 'bi:github',
  facebook: 'bi:facebook',
  telegram: 'bi:telegram',
  twitter: 'bi:twitter',
  linkedin: 'bi:linkedin',
  reddit: 'bi:reddit',
}

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    href: [String],
    kind: {
      type: String,
      default: '',
    },
    icon: [String],
    size: {
      type: Number,
      required: false,
      default: 32,
    },
  },
  setup(props) {
    const computedHref = computed(() => {
      if (!props.href)
        return ''

      if (props.kind === 'email') {
        if (props.href.startsWith('mailto:'))
          return props.href
        return `mailto:${props.href}`
      }

      return props.href
    })

    const computedIcon = computed(() => {
      if (typeof props.icon === 'string' && props.icon.length > 0)
        return props.icon

      return iconMap[props.kind]
    })

    return { computedHref, computedIcon }
  },
})
</script>

<template>
  <a
    class="text-sm text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    :href="computedHref"
  >
    <span class="sr-only">{{ kind }}</span>
    <Icon
      :icon="computedIcon"
      :width="size"
      :height="size"
      class="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
    />
  </a>
</template>
