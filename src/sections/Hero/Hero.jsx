import './Hero.scss'
import { ReactComponent as LogoBigSvg } from '@/assets/logos/logo-big.svg'
import Typewriter from '@/components/Typewriter'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <h1 className="hero__title visually-hidden" id="hero-title">
          Hi, I am timakaroche
        </h1>
        <LogoBigSvg className="hero__logo" />
        <Typewriter
          className="hero__subtitle"
          tag="p"
          text="I can do some great things for you."
        />
      </div>
    </section>
  )
}
