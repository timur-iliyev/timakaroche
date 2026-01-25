const rootSelector = '[data-js-overlay-images]'

class OverlayImages {
  selectors = {
    dialog: '[data-js-overlay-images-dialog]',
    openButton: '[data-js-overlay-open-button]',
    closeButton: '[data-js-overlay-images-close-button]',
  }

  stateClasses = {
    isLock: 'is-lock',
  }

  constructor(element) {
    this.rootElement = element
    this.dialogElement = this.rootElement.querySelector(
      this.selectors.dialog
    )
    this.openButtonElement = this.rootElement.querySelector(
      this.selectors.openButton
    )
    this.closeButtonElement = this.dialogElement.querySelector(
      this.selectors.closeButton
    )

    this.bindEvents()
  }

  onOpenButtonClick = () => {
    this.dialogElement.showModal()
    document.documentElement.classList.add(this.stateClasses.isLock)
  }

  onCloseButtonClose = () => {
    this.dialogElement.close()
  }

  onBackdropClick = ({ target }) => {
    if (target === this.dialogElement) {
      this.dialogElement.close()
    }
  }

  onDialogElementClose = () => {
    document.documentElement.classList.remove(
      this.stateClasses.isLock
    )
  }

  bindEvents() {
    this.openButtonElement.addEventListener(
      'click',
      this.onOpenButtonClick
    )
    this.closeButtonElement.addEventListener(
      'click',
      this.onCloseButtonClose
    )
    this.dialogElement.addEventListener('click', this.onBackdropClick)
    this.dialogElement.addEventListener(
      'close',
      this.onDialogElementClose
    )
  }
}

export default class OverlayImagesCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new OverlayImages(element)
    })
  }
}
