import MatchMedia from '@/constants/MatchMedia'

export default class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    link: '[data-js-overlay-menu-link]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(
      this.selectors.dialog
    )
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.linkElements = this.rootElement.querySelectorAll(
      this.selectors.link
    )

    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(
      this.stateClasses.isActive
    )
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(
      this.stateClasses.isLock
    )
  }

  onLinkElementClick = () => {
    this.closeDialog()
  }

  closeDialog() {
    this.burgerButtonElement.classList.remove(
      this.stateClasses.isActive
    )
    this.dialogElement.open = false
    document.documentElement.classList.remove(
      this.stateClasses.isLock
    )
  }

  onToMobileChange = (event) => {
    if (event.matches) {
      this.closeDialog()
    }
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      'click',
      this.onBurgerButtonClick
    )
    this.linkElements.forEach((linkElement) => {
      linkElement.addEventListener('click', this.onLinkElementClick)
    })
    MatchMedia.toMobile.addEventListener(
      'change',
      this.onToMobileChange
    )
  }
}
