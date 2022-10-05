import type { App } from 'vue'
import Button from './Button/Button.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import Toggle from './Toggle/Toggle.vue'


const install = (app: App) => {
  app.component('Button', Button);//按钮
  app.component('Toggle', Toggle);//切换开关
  app.component('Checkbox', Checkbox);//复选框
}
const index = install

export { Button } //按需引用
export { Toggle } //按需引用
export { Checkbox } //按需引用
export default index //全局引用