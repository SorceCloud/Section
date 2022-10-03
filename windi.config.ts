import { defineConfig } from 'windicss/helpers'
import sectionThemes from './src/plugin/theme'

export default defineConfig({
  darkMode: 'class',
  plugins: [require('windicss/plugin/typography'), require('windicss/forms'), sectionThemes],
  sectionTheme: {
    themes: [
      'blue',
      'teal',
      'rose',
      'violet',
      'orange',
    ],
  },
})