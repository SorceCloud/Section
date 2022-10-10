import { App } from 'vue';
import Element from './Element/'
import Section from './Section'

const install = (app: App) => {
  app.use(Element);//元素
  app.use(Section);//组件
}
export { Element } //按需引入
export { Section } //按需引入
export default install //全局引用