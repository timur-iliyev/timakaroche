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
    if (event.animationName === 'fade-out') {
      document.documentElement.classList.remove(this.stateClasses.isLock)
    }
  }

  bindEvents() {
    this.rootElement.addEventListener(
      'animationend',
      this.onAnimationEnd
    )
  }
}
