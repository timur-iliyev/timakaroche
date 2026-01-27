export default class Preloader {
  selectors = {
    root: '[data-js-preloader]',
  }

  stateClasses = {
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    this.bindEvents()
  }

  onAnimationEnd = (event) => {
    if (event.animationName === 'preloader-fade-out') {
      document.documentElement.classList.remove(
        this.stateClasses.isLock
      )
      document.dispatchEvent(
        new CustomEvent('preloaderClosed', {
          bubbles: true,
        })
      )
      this.unbindEvents()
    }
  }

  bindEvents() {
    this.rootElement.addEventListener(
      'animationend',
      this.onAnimationEnd
    )
  }

  unbindEvents() {
    this.rootElement.removeEventListener(
      'animationend',
      this.onAnimationEnd
    )
  }
}
