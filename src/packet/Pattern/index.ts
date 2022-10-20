import type { App } from 'vue'
import ThemeSelect from './Theme/ThemeSelect.vue'
import LanguageSelect from './Language/LanguageSelect.vue'
import I18n from './Language/locale'
import DarkChange from './Dark/DarkChange.vue'
import Markdown from './Markdown/Markdown.vue'
import Tableofcontent from './Markdown/Tableofcontent.vue'
import TocItem from './Markdown/TocItem.vue'
import TocLink from './Markdown/TocLink.vue'


const install = (app: App) => {
  app.component('ThemeSelect', ThemeSelect);//主题选择
  app.component('LanguageSelect', LanguageSelect);//语言选择
  app.use(I18n);//语言选择
  app.component('DarkChange', DarkChange);//黑白主题切换
  app.component('Markdown', Markdown);//Markdown文档解析
  app.component('Tableofcontent', Tableofcontent)
  app.component('TocItem', TocItem)
  app.component('TocLink', TocLink)
}

export default install //全局引用