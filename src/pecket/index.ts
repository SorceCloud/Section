import { App } from 'vue';
import Element from './Element/'

const install = (app: App) => {
  app.component('Element', Element);//元素
}
export { Element } //按需引入
export default install //全局引用