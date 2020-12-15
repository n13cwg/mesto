import {initialCards, items} from './utils.js';
import {openPopup} from './index.js';

export default class Card {
  constructor(items, cardSelector) {
    this._name = items.name;
    this._link = items.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__place').src = this._link;
    this._element.querySelector('.element__place').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  _likeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_black');
  }

  _delCard() {
    this._element.closest('.element').remove();
  }

  _openPopupPicture() {
    openPopup(items.popupPicture);
    items.picture.src = this._element.querySelector('.element__place').src;
    items.pictureCaption.textContent = this._element.querySelector('.element__place').name;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => this._likeCard());
    this._element.querySelector('.element__delete-btn').addEventListener('click', () => this._delCard());
    this._element.querySelector('.element__place').addEventListener('click', () => this._openPopupPicture());
  }
}
