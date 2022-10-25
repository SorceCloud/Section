<template>
  <div class="drawer">
    <Backdrop @click="closeDrawer" :show="display" />
    <div :class="mainClass" :style="mainStyle" class="main">
      <div class="">
        <span>{{ title }}</span>
        <btn item @click="closeDrawer">
          <icn name="xmark" regular xl />
        </btn>
      </div>
      <div class="drawer-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import './drawer.css'

const props = defineProps({
  display: { type: Boolean, default: false, required: true },//是否显示抽屉
  title: { type: String, default: 'Title' },//抽屉页面标题
  mask: { type: Boolean, default: true },//是否显示遮罩
  maskClosable: { type: Boolean, default: true },//是否点击遮罩关闭
  width: { type: String, default: '400px' },//抽屉宽度（支持百分比）
  inner: { type: Boolean, default: false },//是否在父级元素中打开
})
const mainClass = computed(() => {
  return {
    'main-show': props.display,
    'main-hide': !props.display,
    'inner': props.inner
  }
})
const mainStyle = computed(() => {
  return {
    width: props.width,
    right: props.display ? '0' : `-${props.width}`,
    borderLeft: props.mask ? 'none' : '1px solid #eee'
  }
})
const emit = defineEmits(['update:display'])
function closeDrawer() {
  emit('update:display', false)
}
</script>

<style lang="scss">
.drawer {

  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, .5);

  }

  .mask-hide {
    opacity: 0;
    transition: opacity .5s;
  }

  /* 滑块 */
  .main {
    position: fixed;
    z-index: 10;
    top: 0;
    height: 100%;
    background: #fff;
    transition: all 0.5s;
    background-color: red;
  }

  .main-show {
    opacity: 1;
  }

  .main-hide {
    opacity: 0;
  }

  /* 某个元素内部显示 */
  .inner {
    position: absolute;
  }

  /* 其他样式 */
  .drawer-head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #eee;

    .close-btn {
      display: inline-block;
      cursor: pointer;
      height: 100%;
      padding-left: 20px;
    }
  }

  .drawer-body {
    padding: 15px;
  }
}
</style>