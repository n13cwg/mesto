import {items} from './utils.js';
// class Popup отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popup) {
    this._popup = popup;
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
    // добавляет слушатель клика иконке закрытия попапа
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

