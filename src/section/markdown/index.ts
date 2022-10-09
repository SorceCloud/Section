import type { App } from 'vue'
import Markdown from './Markdown.vue'

const install = (app: App) => {
  app.component('Markdown', Markdown);//按钮
}
export default install //全局引用