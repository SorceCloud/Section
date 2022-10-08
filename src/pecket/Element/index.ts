import type { App } from 'vue'
import Button from './Button/Button.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import Toggle from './Toggle/Toggle.vue'


const install = (app: App) => {
  app.component('btn', Button);//按钮
  app.component('tgl', Toggle);//切换开关
  app.component('ckb', Checkbox);//复选框
}

export { Button } //按需引用
export { Toggle } //按需引用
export { Checkbox } //按需引用
export default install //全局引用