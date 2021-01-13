import {items} from './utils.js';

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

  _handleEscClose() {

  }
  setEventListeners() {

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