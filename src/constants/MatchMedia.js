import pxToRem from '@/utils/pxToRem'

export default {
  tabletAbove: window.matchMedia(`(width >= ${pxToRem(1024)}rem)`),
  mobileAbove: window.matchMedia(`(width >= ${pxToRem(768)}rem)`),
  mobileBelow: window.matchMedia(`(width <= ${pxToRem(768)}rem)`),
  prefersLightTheme: window.matchMedia(
    '(prefers-color-scheme: light)'
  ),
}
