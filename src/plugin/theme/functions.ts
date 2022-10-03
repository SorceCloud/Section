const hexToRgbVar = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : hex // if error return hex
}

const hexToRgb = (hex: string) => {
  const rgb = hexToRgbVar(hex)
  if (typeof rgb !== 'string')
    return `${rgb.r}, ${rgb.g}, ${rgb.b}`
  // if error return hex color
  return rgb
}
/**
 * 亮度调整
 * @param col 16进制颜色码
 * @param amt 10进制，正数增加亮度，负数为降低亮度
 * @returns 
 */
function brighten(col: string, amt: number) {
  if (amt > 0 || amt < 0) {
    const rgb = hexToRgbVar(col)
    if (typeof rgb !== 'string') {
      const r = Math.max(Math.min(255, rgb.r - Math.round(255 * -(amt / 100))), 0).toString(16)
      const g = Math.max(Math.min(255, rgb.g - Math.round(255 * -(amt / 100))), 0).toString(16)
      const b = Math.max(Math.min(255, rgb.b - Math.round(255 * -(amt / 100))), 0).toString(16)

      const rr = (r.length < 2 ? '0' : '') + r
      const gg = (g.length < 2 ? '0' : '') + g
      const bb = (b.length < 2 ? '0' : '') + b

      return `#${rr}${gg}${bb}`
    }
  }
  return col
}

const luminance = (rgb: { [key: string]: number }) => {
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function mostReadable(Color: string) {
  const bgRgb = hexToRgbVar(Color)
  let textColor = ''
  if (typeof bgRgb !== 'string') {
    const bgLum = luminance(bgRgb)
    for (let i = 1; i < 15; i++) {
      const readable = brighten(Color, (bgLum < 0.3 ? (i * 10) : -(i * 10)))
      const readableRgb = hexToRgbVar(readable)
      if (typeof readableRgb !== 'string') {
        const readableLum = luminance(readableRgb)
        const ratio = bgLum > readableLum ? ((readableLum + 0.50) / (bgLum + 0.05)) : ((bgLum + 0.05) / (readableLum + 0.05))
        if (ratio < 1 / 4.5) {
          textColor = readable
          break
        }
      }
    }
  }
  return textColor
}

export { hexToRgb, mostReadable, brighten }
