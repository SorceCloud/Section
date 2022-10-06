<script setup lang="ts">
const props = defineProps({
  /**
  * { time, string }
  */
  date: [Date, String],
  textSize: {
    type: String,
    default: null,
  },
})

const { t } = useI18n()
const dateObject = computed(() => {
  const date = props.date instanceof Date ? props.date : new Date(props.date as string)

  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
})

const getDateTime = () => new Date().toISOString()
</script>

<template>
  <dl>
    <dt class="sr-only">
      {{ t('posted_on') }}
    </dt>
    <dd class="font-medium leading-6 text-gray-500 dark:text-gray-400" :class="[textSize ? `text-${textSize}` : 'text-base']">
      <time :datetime="getDateTime()">{{ dateObject.string }}</time>
    </dd>
  </dl>
</template>
