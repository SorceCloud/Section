<script lang="ts" setup>
import { nextTick, onMounted, ref, watch, } from 'vue'
import { useHideScroll } from '../../../store/useHideScroll'
import './modal.css'
const props = defineProps({
  active: { type: Boolean, required: true },// use v-model:active for two way binding
  size: {
    type: String, default: 'sm', required: false,
    validator: (value: string) => {
      return ['sm', 'md', 'lg'].includes(value)
    }
  },
  backdrop: { type: Boolean, default: true, required: false },//show backdrop
  outside: { type: Boolean, default: true, required: false },//click outside to close
  backdropClass: { type: String, default: 'backdrop=brightness-60', required: false },// Apply windiCSS backdrop classes
  closeBtn: { type: Boolean, default: true, required: false }// btn for close modal
})


const emit = defineEmits(['update:active', 'close'])

const isShow = ref(props.active)

const { showScroll, hideScroll } = useHideScroll()

onMounted(() => {
  nextTick(() => {
    // check if props.active is true before getting scroll width (parent component :active="true")
    if (props.active)
      hideScroll()
  })
})
function dismiss() {
  emit('update:active', false)
}
// this function clickOutside() is not necessary since div is set to `pointer-events-none`
function clickOutside() {
  if (props.outside)
    emit('update:active', false)
}

watch(() => props.active, async () => {
  if (props.active) {
    isShow.value = true
    hideScroll()
  }
  else {
    isShow.value = false
    setTimeout(() => {
      showScroll()
    }, 250)
  }
},
)
</script>

<template>
  <transition name="modal-fade" appear>
    <div v-show="isShow && props.backdrop" class="backdrop" :class="props.backdropClass" />
  </transition>
  <transition name="modal-bounce" appear>
    <div v-if="isShow" class="modal-background" :class="[{ 'modal-outside': !outside }]" @click.self="clickOutside">
      <div class="modal-box" :class="[`modal-${size}`]">
        <button v-show="closeBtn" class="modal-btn-close btn" @click="dismiss">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <path
              d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z"
              fill="currentColor" />
          </svg>
        </button>
        <div class="modal-inner-box" :class="[`modal-${size}`]">
          <h2 v-show="$slots.header" class="modal-header">
            <slot name="header" />
          </h2>
          <div v-show="$slots.body" class="modal-body">
            <slot name="body" />
          </div>
          <div v-show="$slots.footer" class="modal-footer">
            <slot name="footer" :dismiss="dismiss" />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
