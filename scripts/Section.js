class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }
}
