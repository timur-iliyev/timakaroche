export default class Preloader {
  selectors = {
    root: '[data-js-preloader]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    this.bindEvents()
  }

  onAnimationEnd = (event) => {
    if (event.animationName === 'preloader-fade-out') {
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
