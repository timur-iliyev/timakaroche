import './Hero.scss'
import { ReactComponent as LogoBigSvg } from '@/assets/logos/logo-big.svg'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <h1 className="hero__title visually-hidden" id="hero-title">
          I am timakaroche
        </h1>
        <LogoBigSvg className="hero__logo" />
      </div>
    </section>
  )
}
