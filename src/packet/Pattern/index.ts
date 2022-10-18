import type { App } from 'vue'
import ThemeSelect from './Theme/ThemeSelect.vue'
import LanguageSelect from './Language/LanguageSelect.vue'
import DarkChange from './Dark/DarkChange.vue'
import Markdown from './Markdown/Markdown.vue'


const install = (app: App) => {
  app.component('ThemeSelect', ThemeSelect);//主题选择
  app.component('LanguageSelect', LanguageSelect);//语言选择
  app.component('DarkChange', DarkChange);//黑白主题切换
  app.component('Markdown', Markdown);//黑白主题切换
}

export default install //全局引用