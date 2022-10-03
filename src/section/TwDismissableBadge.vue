<script setup lang="ts">
import { nanoid } from 'nanoid'

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: '',
  },
  backgroundColor: {
    type: String,
    required: false,
    default: 'blue-100',
  },
  darkBackgroundColor: {
    type: String,
    required: false,
    default: 'blue-800',
  },
  textColor: {
    type: String,
    required: false,
    default: 'blue-800',
  },
  darkTextColor: {
    type: String,
    required: false,
    default: 'blue-100',
  },
  fontSize: {
    type: String,
    required: false,
    default: 'base',
  },
  fontWeight: {
    type: String,
    required: false,
    default: 'normal',
  },
  rounded: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttonHoverBackgroundColor: {
    type: String,
    required: false,
    default: 'blue-200',
  },
  buttonDarkHoverBackgroundColor: {
    type: String,
    required: false,
    default: 'blue-900',
  },
})

const emit = defineEmits(['removed'])

const { t } = useI18n()
const computedId = toRef(props, 'id')

if (computedId.value.length === 0) {
  computedId.value = nanoid()
}

const remove = (e: Event) => emit('removed', e)
</script>

<template>
  <span
    :id="computedId"
    class="inline-flex items-center py-1 px-2"
    :class="[
      `bg-${backgroundColor}`,
      `dark:bg-${darkBackgroundColor}`,
      `text-${textColor}`,
      `dark:text-${darkTextColor}`,
      `text-${fontSize}`,
      `font-${fontWeight}`,
      rounded ? 'rounded' : '',
    ]"
  >
    <slot />
    <button
      type="button"
      class="bg-transparent inline-flex items-center p-0.5 ml-2"
      :class="[
        `hover:bg-${buttonHoverBackgroundColor}`,
        `dark:hover:bg-${buttonDarkHoverBackgroundColor}`,
        `text-${fontSize}`,
        rounded ? 'rounded' : '',
      ]"
      :data-dismiss-target="`#${computedId}`"
      :aria-label="t('button.remove')"
      @click="remove"
    >
      <Icon icon="bi:x" :class="`text-${textColor} dark:text-${darkTextColor}`" />
      <span class="sr-only">{{ t('button.remove') }}</span>
    </button>
  </span>
</template>
