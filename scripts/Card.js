import {items, initialCards} from './utils.js';
import {openPopup} from './index.js';

export default class Card {
	constructor(items, cardSelector) {
			this._name = items.name;
			this._link = items.link;
			this._cardSelector = cardSelector;
	}
	_getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
	}
	generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__place').src = this._link;
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
    const popupCaption = document.querySelector('.popup__caption');
    const popupImg = document.querySelector('.popup__image');
    const img = this._element.querySelector('.element__place');
    popupImg.src = img.src;
    popupCaption.textContent = img.name;
  }
	_setEventListeners() {
		this._element.querySelector('.element__like').addEventListener('click', () => this._likeCard());
		this._element.querySelector('.element__delete-btn').addEventListener('click', () => this._delCard());
		this._element.querySelector('.element__place').addEventListener('click', () => this._openPopupPicture());
	}
}
initialCards.forEach((item) => {
	const card = new Card(item, '#elementTemplate');
	const cardElement = card.generateCard();
	items.elementsContainer.prepend(cardElement);
});