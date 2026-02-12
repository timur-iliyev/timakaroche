import MatchMedia from '@/constants/MatchMedia'

export default class ThemeToggle {
  selectors = {
    root: '[data-js-theme-toggle]',
    checkbox: '[data-js-theme-toggle-checkbox]',
    slider: '[data-js-theme-toggle-slider]',
  }

  storageKey = 'theme'

  themes = {
    light: 'light',
    dark: 'dark',
  }

  get initialTheme() {
    const cachedTheme = localStorage.getItem(this.storageKey)

    if (cachedTheme) {
      return cachedTheme
    }

    if (MatchMedia.prefersLightTheme.matches) {
      return this.themes.light
    }

    return this.themes.dark
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.checkboxElement = this.rootElement.querySelector(
      this.selectors.checkbox
    )
    this.sliderElement = this.rootElement.querySelector(
      this.selectors.slider
    )

    this.setTheme(this.initialTheme)
    this.bindEvents()
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)

    this.checkboxElement.checked = theme === this.themes.light

    this.sliderElement.ariaChecked = this.checkboxElement.checked

    this.sliderElement.setAttribute(
      'aria-label',
      `Toggle theme (${theme} mode active)`
    )
    localStorage.setItem(this.storageKey, theme)
  }

  onCheckboxElementChange = () => {
    const newTheme = this.checkboxElement.checked
      ? this.themes.light
      : this.themes.dark
    this.setTheme(newTheme)
  }

  dispatchChangeEvent() {
    this.checkboxElement.dispatchEvent(
      new Event('change', { bubbles: true })
    )
  }

  onRootElementKeyDown = (event) => {
    switch (event.code) {
      case 'Space':
      case 'Enter':
        event.preventDefault()
        this.checkboxElement.checked = !this.checkboxElement.checked
        this.dispatchChangeEvent()
        break
      case 'ArrowRight':
        if (!this.checkboxElement.checked) {
          this.checkboxElement.checked = true
          this.dispatchChangeEvent()
        }
        break
      case 'ArrowLeft':
        if (this.checkboxElement.checked) {
          this.checkboxElement.checked = false
          this.dispatchChangeEvent()
        }
        break
    }
  }

  bindEvents() {
    this.checkboxElement.addEventListener(
      'change',
      this.onCheckboxElementChange
    )
    this.rootElement.addEventListener(
      'keydown',
      this.onRootElementKeyDown
    )
  }
}
