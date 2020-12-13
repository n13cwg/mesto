import {items} from './utils.js';
// export default
class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _open() {
    this._popup.classList.add('popup_opened');
  }

  _close() {
    this._popup.classList.remove('popup_opened');
  }

  _setEventListeners() {

  }
}

class OpenPopupUser extends Popup {
  constructor(popup) {
    super(popup);
  }

  _setEventListeners() {

  }

  submit(evt) {
    evt.preventDefault();
    this._close();
  }
}