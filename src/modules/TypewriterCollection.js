import getParams from '@/utils/getParams'
import getSegmentedString from '@/utils/getSegmentedString'

export default class TypewriterCollection {
  observerConfig = {
    rootMargin: '0% 0% -10% 0%',
  }

  selectors = {
    root: '[data-js-typewriter]',
  }

  constructor() {
    this.typewriterElements = document.querySelectorAll(
      this.selectors.root
    )

    if (this.typewriterElements.length > 0) {
      this.bindEvents()
    }
  }

  animateText(element, renderedText) {
    let charIndex = 0

    const animateChar = () => {
      if (charIndex < renderedText.length) {
        element.textContent += renderedText[charIndex]
        charIndex++
        setTimeout(animateChar, 50)
      }
    }

    animateChar()
  }

  onTypewriterObserver = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry
      const rawText = getParams(target, this.selectors.root)
      const segmentedText = getSegmentedString(rawText)

      if (isIntersecting) {
        this.animateText(target, segmentedText)
        this.typewriterObserver.unobserve(target)
        this.observedCount--
      }

      if (this.observedCount === 0) {
        this.unbindObservers()
      }
    })
  }

  bindObservers() {
    this.observedCount = this.typewriterElements.length
    this.typewriterObserver = new IntersectionObserver(
      this.onTypewriterObserver,
      { ...this.observerConfig }
    )
    this.typewriterElements.forEach((entry) => {
      this.typewriterObserver.observe(entry)
    })
  }

  unbindObservers() {
    this.typewriterObserver.disconnect()
  }

  onPreloaderClosed = () => {
    this.bindObservers()
    this.unbindEvents()
  }

  bindEvents() {
    document.addEventListener(
      'preloaderClosed',
      this.onPreloaderClosed
    )
  }

  unbindEvents() {
    document.removeEventListener(
      'preloaderClosed',
      this.onPreloaderClosed
    )
  }
}
