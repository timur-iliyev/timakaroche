import './Preloader.scss'
import { ReactComponent as LogoBigSvg } from '@/assets/logos/logo-big.svg'

export default () => {
  return (
    <div className="preloader" data-js-preloader="">
      <div className="preloader__ellipse"></div>
      <LogoBigSvg className="preloader__logo" />
    </div>
  )
}
