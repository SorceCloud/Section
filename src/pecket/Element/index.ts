import type { App } from 'vue'
import Button from './Button/Button.vue'
import Input from './Input/Input.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import Toggle from './Toggle/Toggle.vue'


const install = (app: App) => {
  app.component('btn', Button);//按钮
  app.component('ipt', Input);//输入框
  app.component('tgl', Toggle);//切换开关
  app.component('ckb', Checkbox);//复选框
}

export default install //全局引用