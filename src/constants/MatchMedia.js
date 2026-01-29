import pxToRem from '@/utils/pxToRem'

export default {
  toTablet: window.matchMedia(`(width >= ${pxToRem(1024)}rem)`),
  fromMobile: window.matchMedia(`(width <= ${pxToRem(768)}rem)`),
}
