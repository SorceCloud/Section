export default {
  // mobile highlight color
  'html': {
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
  },
  // border color (light and dark)
  '*, ::before, ::after ': {
    'border-color': 'rgb(209 213 219)',//#9ca3af/gray-400
  },
  '.dark *, ::before, ::after ': {
    'border-color': 'rgb(75 85 99)',//#4b5563/gray-600
  },
  '.dark': {
    'color-scheme': 'dark',
  },
  // base gray for components
  ':root': {
    '--base-gray-100': '243, 244, 246',
    '--base-gray-200': '230, 231, 235',
    '--base-gray-300': '209, 212, 219',
    '--base-gray-400': '156, 162, 174',
    '--base-gray-500': '107, 115, 128',
    '--base-gray-600': '76, 85, 100',
    '--base-gray-700': '56, 65, 82',
  },
}

