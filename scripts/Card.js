import { items } from './utils.js'
import { openPopup } from './index.js'

export default class Card {
  constructor(items, cardSelector) {
    this._name = items.name;
    this._link = items.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document // брём содержимое template-элемента с селектором cardSelector
      .querySelector(this._cardSelector)
      .content.querySelector('.element') // достаём из него элемент с классом .element
      .cloneNode(true); // клонировать

    return cardElement; // возвращаем клонированный элемент
  }

  generateCard() {
    this._element = this._getTemplate(); // запиcываем разметку в поле _element
    this._elCardPlace = this._element.querySelector('.element__place');
    this._elCardTitle = this._element.querySelector('.element__title');
    this._btnLike = this._element.querySelector('.element__like');
    this._btnDelete = this._element.querySelector('.element__delete-btn');
    this._elCardPlace.src = this._link;
    this._elCardPlace.alt = this._name;
    this._elCardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _likeCard() {
    this._btnLike.classList.toggle('element__like_black');
  }

  _delCard() {
    this._elCardTmplt = this._element.closest('.element');
    this._elCardTmplt.remove();
  }

  _openPopupPicture() {
    openPopup(items.popupPicture);
    items.picture.src = this._elCardPlace.src;
    items.pictureCaption.textContent = this._elCardPlace.name;
  }

  _setEventListeners() {
    this._btnLike.addEventListener('click', () => this._likeCard());
    this._btnDelete.addEventListener('click', () => this._delCard());
    this._elCardPlace.addEventListener('click', () => this._openPopupPicture());
  }
}
