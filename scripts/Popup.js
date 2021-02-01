import {items} from './utils.js';
// class Popup отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this.btnClose = document.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close();
   }
  }

  _handleOverlayClick() {
    if (evt.target !== evt.currentTarget) {
      return
    }
    this.close();
  }

  setEventListeners() {
    this._popup.btnClose.addEventListener('click', () => this.close.bind(this));
  }
}

class OpenPopupUser extends Popup {
  constructor(popup) {
    super(popup);
  }

  setEventListeners() {

  }

  submit(evt) {
    evt.preventDefault();
    this._close();
  }
}

