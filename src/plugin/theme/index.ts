import plugin from 'windicss/plugin'
import base from '../../style/base'
import configColors from '../../style/config'
import utilities from '../../style/utilitie'
import { getTheme } from './generateTheme'

const SectionTheme = plugin(
  async ({ addUtilities, addBase }) => {
    addBase(base)
    addBase(await getTheme())
    addUtilities(utilities)
  },
  {
    preflight: {
      safelist: 'button a ul li input',
    },
    theme: {
      extend: {
        colors: () => ({
          ...configColors,
        }),
      },
    },
  },
)

export default SectionTheme
