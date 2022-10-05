import { App } from 'vue';
import element from './Element/'

const install = (app: App) => {
  app.component('element', element);//元素
}
const index = install
export { element } //按需引入
export default index //全局引用