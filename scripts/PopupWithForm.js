import Popup from 'Popup.js';
// class PopupWithForm наследует от Popup
export default class PopupWithForm extends Popup {
  constructor({ formSelector }) {
    this._formSelector = formSelector;
  }
}