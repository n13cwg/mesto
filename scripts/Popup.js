// class Popup отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this.btnClose = document.querySelector('.popup__close');
    this.btnCloseAdd = document.querySelector('.popup__close-add');
    this.btnClosePic = document.querySelector('.popup__close-picture');
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClick);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClick);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
   }
  }

  _handleOverlayClick(evt) {
    if (evt.target !== evt.currentTarget) {
      return
    }
    this.close(evt.target);
  }

  setEventListeners() {
    this._popup.btnClose.addEventListener('click', this.close.bind(this));
    this._popup.btnCloseAdd.addEventListener('click', this.close.bind(this));
    this._popup.btnClosePic.addEventListener('click', this.close.bind(this));
  }
}

class OpenPopupUser extends Popup {
  constructor(popup) {
    super(popup);
  }

  setEventListeners() {

  }

  submit(evt) {
    evt.preventDefault();
    this._close();
  }
}

