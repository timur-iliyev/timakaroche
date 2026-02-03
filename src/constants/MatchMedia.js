import pxToRem from '@/utils/pxToRem'

export default {
  toTablet: window.matchMedia(`(width >= ${pxToRem(1024)}rem)`),
  toMobile: window.matchMedia(`(width >= ${pxToRem(768)}rem)`),
  fromMobile: window.matchMedia(`(width <= ${pxToRem(768)}rem)`),
  prefersLightTheme: window.matchMedia(
    '(prefers-color-scheme: light)'
  ),
}
