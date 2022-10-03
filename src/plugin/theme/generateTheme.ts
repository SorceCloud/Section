import { brighten, hexToRgb, mostReadable } from './functions'
import { baseTheme, colorNames, customThemes } from './themes'
import fs from 'fs'
import path from 'path'

const defaultConfigNames = [
  'windi.config.js',
  'windi.config.ts',
  'windicss.config.js',
  'windicss.config.ts',
]

const getConfigPath = () => {
  let configPath = null
  let configFilePath: string | undefined

  for (const name of defaultConfigNames) {
    configPath = path.resolve(process.cwd(), name)
    if (fs.existsSync(configPath)) {
      configFilePath = configPath
      break
    }
  }
  if (!configFilePath)
    throw new Error('windi.config file not found')

  return configFilePath
}

/**
 * Get section user configuration in `windi.config`
 *
 * @returns
 */
async function getConfig() {
  const themePath = getConfigPath()
  const config = await import(themePath)
  return config.default.sectionTheme
}

/**
 * Check if given string is keyof given object
 *
 * @param key
 * @param obj
 */
function isObjKey<T>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}


type Themes = string[] | string

interface SectionConfig {
  themes: Themes
}
interface Theme { [key: string]: string }
interface GeneratedTheme { [key: string]: { [key: string]: string } }
const defaultTheme = 'sectionTheme'

/**
   * check if given key include in theme default color names
   *
   * @param key
   */
const keyIncludeDefault = (key: string) => {
  for (const name of colorNames) {
    if (key.includes(name))
      return true
  }
  return false
}

/**
 *  Override theme vars for defined theme or base theme if they exist
 * @param themes
 * @param setTheme
 */
const overrideTheme = (themes: Themes, setTheme: Theme) => {
  for (const definedItem of themes) {
    if (typeof definedItem === 'object') {
      for (const definedKey in definedItem as any) {
        // if this key exists in defined theme or baseTheme then replace value
        if (isObjKey(definedKey as string, setTheme) || baseTheme.includes(definedKey))
          setTheme[definedKey] = definedItem[definedKey]
      }
    }
  }
  return setTheme
}
// generate missing colors from theme
const generateMissingColors = (setTheme: Theme) => {
  const difference = colorNames.filter(name => !Object.keys(setTheme).includes(name))
  for (const key in difference) {
    const difName = difference[key]
    if (difName.includes('focus')) {//如果`-focus`的属性未定义，则亮度在其前缀颜色的基础上降低10
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-focus', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -10)
    }
    if (difName.includes('content')) {//如果`-content`的属性未定义，则亮度在其前缀颜色的基础上进行色相调整，最大可能性保证可读性的颜色对比，亦可将所有尾缀为content的颜色都标注为#ffffff
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-content', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = mostReadable(color)
    }
    if (difName.includes('base-200' || 'dark-base-200')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-200', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -5)
    }
    if (difName.includes('base-300' || 'dark-base-300')) {
      const index = Object.keys(setTheme).find(name => name.includes(difName.replace('-300', '')))
      const color = setTheme[index as keyof typeof setTheme]
      setTheme[difName] = brighten(color, -10)
    }
  }
  return setTheme
}

// generate theme with rgb colors and separate light from dark
const darkTheme = (theme: Theme) => {
  const darkTheme: GeneratedTheme = { light: {}, dark: {} }
  const themeColor = Object.assign({}, theme)
  for (const key in themeColor) {
    if (keyIncludeDefault(key))
      themeColor[key] = hexToRgb(theme[key])
    // separate light colors  from dark
    if (key.includes('dark'))
      darkTheme.dark[`--${key.replace('dark-', '')}`] = themeColor[key]
    else
      darkTheme.light[`--${key}`] = themeColor[key]
  }

  return darkTheme
}

/**
 * @returns formated theme using default theme with out whitout user configuration
 *
 */
async function getTheme() {
  const sectionConfig: SectionConfig = await getConfig()

  let setTheme: Theme = {}
  let generatedTheme: GeneratedTheme = { light: {}, dark: {} }
  const otherThemes = []
  // include other themes
  const generatedOthers: { [key: string]: { [key: string]: string } } = {}

  // if sectionTheme config is set in `windi.config`
  if (Object.keys(setTheme).length === 0) {
    let definedTheme: string | null = null
    // get first theme defined
    for (const theme of sectionConfig.themes) {
      if (typeof theme == 'string') {
        if (!definedTheme)
          definedTheme = theme
        else
          otherThemes.push(theme)
      }
    }
    // check if defined theme is keyof `customThemes`
    if (!isObjKey(definedTheme as string, customThemes))
      definedTheme = defaultTheme

    setTheme = customThemes[definedTheme as keyof typeof customThemes]
  }

  // replace theme vars for defined theme vars if they exist
  if (sectionConfig !== undefined && sectionConfig.themes !== undefined)
    setTheme = overrideTheme(sectionConfig.themes, setTheme)

  setTheme = generateMissingColors(setTheme)
  generatedTheme = darkTheme(setTheme)

  for (const theme of otherThemes) {
    const tempTheme: { [key: string]: { [key: string]: string } } = {}
    // check if other theme is present in sectionTheme themes
    if (isObjKey(theme, customThemes)) {
      tempTheme[theme] = generateMissingColors(customThemes[theme])

      let tempGenerated: GeneratedTheme = {}

      tempGenerated = darkTheme(tempTheme[theme])
      generatedOthers[`.theme-${theme}`] = tempGenerated.light
      generatedOthers[`.dark.theme-${theme}`] = tempGenerated.dark
    }
  }

  return {
    ':root': generatedTheme.light,
    '.dark': generatedTheme.dark,
    ...generatedOthers,
  }
}

export { getTheme }

