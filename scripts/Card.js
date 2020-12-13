// import { openPopup, openPopupPicture } from './index.js';
import {items, initialCards} from './utils.js';

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
	_setEventListeners() {
		this._element.querySelector('.element__like').addEventListener('click', () => this._likeCard());
		this._element.querySelector('.element__delete-btn').addEventListener('click', () => this._delCard());
	}
}
initialCards.forEach((item) => {
	const card = new Card(item, '.elTemplate');
	const cardElement = card.generateCard();
	items.elementsContainer.prepend(cardElement);
});