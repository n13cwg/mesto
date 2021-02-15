import Popup from 'Popup.js';
// class PopupWithImage наследует от Popup
// Перезаписывает родительский метод open
// В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке
export default class PopupWithImage extends Popup {
  constructor(popup) { // Попап изображения
    super(popup);
    this._image = document.querySelector('.popup__image');
    this._imageCaption = document.querySelector('.popup__caption');
  }
  
  open(name, link) {
    this._picture.src = link;
    this._picture.alt = name;
    this._pictureCaption.textContent = name;
    super.open();
  }
}