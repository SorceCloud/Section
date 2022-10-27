<template>
  <div class="p-5 w-full">
    <table class="w-full border-2">
      <thead>
        <tr class="bg-base-200 border-b-1 h-10">
          <th v-for="info of tHead" :key="info.key" class=" font-light text-base-content">{{ info.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of tBody" :key="item.id" class="bg-base-100 h-8 hover:bg-base-200">
          <td v-for="(value, key) in item" :key="key" @click.stop="showEditInput($event, key, index)"
            class="relative text-center cursor-pointer border-1 hover:bg-base-300 font-thin">
            {{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { createApp, toRefs, reactive, App } from 'vue'
import EditInput from './EditInput.vue'
let editInputApp: App<Element> | null = null
const state = reactive({
  key: '',
  value: '',
  index: -1,
  text: ''
})
const props = defineProps({
  data: {
    type: Object,
    default: {
      tHead: [],
      tBody: []
    }
  }
})
const emit = defineEmits(['submit'])

const { tHead, tBody } = toRefs(props.data)

function showEditInput(event: { target: any; }, key: any, index: any) {
  editInputApp && removeEditInputApp
  if (!checkEditable(key)) return
  const target = event.target
  const oFrag = document.createDocumentFragment()
  editInputApp = createApp(EditInput, {
    value: target.textContent,
    setValue
  })
  if (editInputApp) {
    editInputApp.mount(oFrag)
    target.appendChild(oFrag)
    target.querySelector('input').select()
  }
  setData({ index, key, text: findText(key) })
}
function setData({ index, key, value = '', text }: any) {
  state.key = key
  state.index = index
  state.value = value
  state.text = text
}
/**
 * 查找key对应的text值
 * @param {*} key 
 */
function findText(key: any) {
  const { text } = tHead.value.find((item: { key: any; }) => item.key === key)
  return text
}
/**
 * update data of table cell
 * @param {*} value 
 */
function setValue(value: string) {
  state.value = value
  emit('submit', { ...state }, removeEditInputApp)
}
/**
 * remove editinput when target change
 */
function removeEditInputApp() {
  editInputApp && editInputApp.unmount()
  setData({
    index: -1,
    key: '',
    value: '',
    text: ''
  })
}
/**
 * check tHead.editable
 * @param {*} key 
 */
function checkEditable(key: any) {
  const { editable } = tHead.value.find((item: { key: any; }) => item.key === key)
  return editable
}
window.addEventListener('click', removeEditInputApp, false)
</script>