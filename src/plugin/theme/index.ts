import plugin from 'windicss/plugin'
import configColors from './config'
import { getTheme } from './generateTheme'

const sectionThemes = plugin(
  async ({ addBase }) => {
    addBase(await getTheme())
  },
  {
    theme: {
      extend: {
        colors: () => ({
          ...configColors,
        }),
      },
    },
  },
)

export default sectionThemes
