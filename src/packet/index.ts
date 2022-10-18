import { App } from 'vue';
import Element from './Element'
import Section from './Section'
import Pattern from './Pattern'

const install = (app: App) => {
  app.use(Element);//元素
  app.use(Section);//组件
  app.use(Pattern);//部件
}
export { Element } //按需引入
export { Section } //按需引入
export { Pattern } //按需引入
export default install //全局引用