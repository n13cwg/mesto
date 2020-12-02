//
// class Card {
//   // в конструкторе будут динамические данные,
//   // для каждого экземпляра свои
//   constructor(text, image) {
//     // text и image — приватные поля,
//     // они нужны только внутри класса
//     this._text = text;
//     this._image = image;
//   }
//   _getTemplate() {
//     const cardElement = document
//       .querySelector(this._cardSelector)
//       .content
//       .querySelector('.card')
//       .cloneNode(true);
//
//     return cardElement;
//   }
//   generateCard() {
//
//   }
//   _setEventListeners() {
//
//   }
//   _handleCardClick () {
//
//   }
// }