import Popup from "Popup.js";
// class PopupWithForm наследует от Popup
export default class PopupWithForm extends Popup {
  constructor(popup, formSelector) {
    super(popup);
    this._formSelector = formSelector;
    this._popupForm = document.querySelector(".popup__form");
    this._inputList = document.querySelector(".popup__input");
  }

  //Собирает данные полей форм
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputList;
  }

  //Закрытие и сбрасывание формы
  closePopup() {
    super.close();
    this._popupForm.reset();
  }

  //Перезаписывает родительский метод
  setEventListeners() {
    super.setEventListeners();
    this._inputValues = document
      .querySelector('.popup__button')
      .addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    this.close();
  }
}
