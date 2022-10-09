import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

export const I18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  }
})
export default I18n

