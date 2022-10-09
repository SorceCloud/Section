import I18n from '../locale'

const setLanguage = (locale: 'zh-CN' | 'en-US') => {
    if (locale !== I18n.global.locale.value) {
        localStorage.setItem("locale", locale)
        I18n.global.locale.value = locale
        return true
    } {
        return false
    }
}

export default setLanguage