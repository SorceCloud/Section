<template>
  <input type="text" :value="value" @input="onInput" @blur="onBlur" @click="onClick"
    class="absolute top-0 left-0 w-full h-full box-border border-1 text-center outline-none bg-base-300 shadow shadow-md" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  value: { type: String, default: '' },
  setValue: { type: Function, default: () => { } }
})
const inputValue = ref(props.value)
const onInput = (e: any) => {
  inputValue.value = e.target.value.trim()
}
const onClick = (e: { stopPropagation: () => void; }) => {
  e.stopPropagation()
}
const onBlur = (e: any) => {
  props.setValue(inputValue.value)
}
</script>