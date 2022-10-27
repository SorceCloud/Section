import type { App } from 'vue'
import Button from './Button/Button.vue'
import Input from './Input/Input.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import Toggle from './Toggle/Toggle.vue'
import Icon from './Icon/Icon.vue'
import Table from './Table/Table.vue'
import Backdrop from './Backdrop/Backdrop.vue'


const install = (app: App) => {
  app.component('btn', Button);//按钮
  app.component('ipt', Input);//输入框
  app.component('tgl', Toggle);//切换开关
  app.component('ckb', Checkbox);//复选框
  app.component('icn', Icon);//图标
  app.component('tbl', Table);//表格
  app.component('Backdrop', Backdrop);//背景遮罩
}

export default install //全局引用