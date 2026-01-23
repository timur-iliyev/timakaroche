import getParams from '@/utils/getParams'

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
    this.typewriterObserver = new IntersectionObserver(
      this.onTypewriterObserver,
      { ...this.observerConfig }
    )
    this.typewriterElements.forEach((entry) => {
      this.typewriterObserver.observe(entry)
    })
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
      const renderedText = getParams(target, this.selectors.root)

      if (isIntersecting) {
        this.animateText(target, renderedText)
        this.typewriterObserver.unobserve(target)
      }
    })
  }
}
