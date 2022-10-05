import { defineConfig } from 'windicss/helpers'
import SectionTheme from './src/plugin/theme'

export default defineConfig({
  darkMode: 'class',
  plugins: [SectionTheme],
  SectionThemes: {
    themes: [
      'blue',
      'teal',
      'rose',
      'violet',
      'orange',
    ],
  },
})
