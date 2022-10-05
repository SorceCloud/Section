import { defineConfig } from 'windicss/helpers'
import sectionThemes from './src/plugin/theme'
import vueWindi from "vue-windi/plugin";

export default defineConfig({
  darkMode: 'class',
  plugins: [require('windicss/plugin/typography'), require('windicss/forms'), sectionThemes, vueWindi],
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