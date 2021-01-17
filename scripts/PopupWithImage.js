import Popup from 'Popup.js';
import { items } from './utils.js';
// class PopupWithImage наследует от Popup
// Перезаписывает родительский метод open
// В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке
export default class PopupWithImage extends Popup {
  constructor(popup) { // Попап изображения
    super(popup);
    items.picture.src = this._elCardPlace.src;
    items.pictureCaption.textContent = this._elCardPlace.name;
  }
  _handleOpenPopup() {
    
    super.open();
  }
}