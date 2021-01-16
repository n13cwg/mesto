import {items} from './utils.js';
// class Popup отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleESC() {
    // содержит логику закрытия попапа клавишей Esc
  }

  _handleOverlayClick() {

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

