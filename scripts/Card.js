export default class Card {
    // в конструкторе будут динамические данные,
    // для каждого экземпляра свои
    constructor(name, link) {
        // text и image — приватные поля,
        // они нужны только внутри класса
        this._name = name;
        this._link = link;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements')
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        //     evt.preventDefault();
        //     const cardData = {
        //         name: inputCardName.value,
        //         link: inputImgLink.value
        //     };
        //     const cardElement = createCard(cardData);
        //     elementsContainer.prepend(cardElement);
        //     popupCreateContainer.reset(cardData);
        //     closePopup(popupCreateCard);
    }
    _likeCard() {
        // this.elements.querySelector('element__like').classList.toggle('element__like_black');
    }
    _delCard() {}
    _setEventListeners() {}
    _handleCardClick() {}
}