<script lang="ts" setup>
import { ref, watch } from 'vue'
import './input.css'
const props = defineProps({
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  type: { type: String, default: 'text', required: false },
  name: { type: String, required: false },
  value: { type: String, required: false },
  disabled: { type: Boolean, default: false, required: false },
  size: {
    type: String, default: 'md', required: false,
    validator: (value: string) => {
      return ['xs', 'sm', 'md', 'lg'].includes(value)
    }
  },
  bordered: { type: Boolean, default: true, required: false },
  ghost: { type: Boolean, default: false, required: false },
  color: {
    type: String, default: 'neutral', required: false,
    validator: (value: string) => {
      return ['neutral', 'primary', 'secondary', 'error', 'warning'].includes(value)
    }
  },
  error: { type: String, required: false }
})
const inputText = ref<HTMLInputElement | null>(null)
const isError = ref(props.error || false)
const text = ref(props.value)
const initialValue = ref<string>('')

if (props.value && props.error)
  initialValue.value = props.value

const setFocus = () => {
  inputText.value?.focus()
}

watch(text, () => {
  if (props.error) {
    if (initialValue.value !== text.value)
      isError.value = false
    else
      isError.value = true
  }
})
</script>

<template>
  <div class="form-control">
    <label v-if="props.label" class="label" @click="setFocus">
      <span class="label-text">{{ props.label }}</span>
    </label>

    <input ref="inputText" v-model="text" :name="props.name" :placeholder="props.placeholder" :type="type"
      :disabled="disabled" class="ipt" :class="[
        {
          'ipt-bordered': props.bordered,
          'ipt-ghost': props.ghost,
          'ipt-error': isError,
        },
        `ipt-${props.size}`,
        `ipt-${props.color}`,
      ]">
    <div v-if="isError" class="validation-text" v-text="props.error" />
  </div>
</template>
