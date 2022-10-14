import type { App } from 'vue'
import ButtonGroup from './ButtonGroup/ButtonGroup.vue'
import Menu from './Menu/Menu.vue'
import Dropdown from './Dropdown/Dropdown.vue'
import Modal from './Modal/Modal.vue'


const install = (app: App) => {
  app.component('ButtonGroup', ButtonGroup)//组合按钮
  app.component('Menu', Menu);//菜单
  app.component('Dropdown', Dropdown);//下拉菜单
  app.component('Modal', Modal);//弹窗
}

export default install //全局引用