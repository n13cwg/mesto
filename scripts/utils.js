export const items = {
  popupUser: document.querySelector('.popup_user'),
  popupCreateCard: document.querySelector('.popup_create-card'),
  popupPicture: document.querySelector('.popup_picture'),
  popupCreateContainer: document.querySelector('.popup__create-container'),
  popupContainer: document.querySelector('.popup__container'),

  btnEdit: document.querySelector('.profile__edit-button'),
  btnClose: document.querySelector('.popup__close'),
  btnImgAdd: document.querySelector('.profile__button'),
  btnImgClose: document.querySelector('.popup__close-create'),
  btnClosePicture: document.querySelector('.popup__close-picture'),

  elementsContainer: document.querySelector('.elements'),
  elementTemplate: document.querySelector('#elementTemplate').content,
  picture: document.querySelector('.popup__image'),
  pictureCaption: document.querySelector('.popup__caption'),

  inputName: document.querySelector('.popup__input_name'),
  inputJob: document.querySelector('.popup__input_job'),
  inputCardName: document.querySelector('.popup__input_name-card'),
  inputImgLink: document.querySelector('.popup__input_link'),

  userName: document.querySelector('.profile__name'),
  userJob: document.querySelector('.profile__job'),
}

export const initialCards = [
  {
    name: 'Кафе',
    link: './images/safar-safarov-MSN8TFhJ0is-unsplash.jpg',
  },
  {
    name: 'TODO list',
    link: './images/roman-synkevych-vXInUOv1n84-unsplash.jpg',
  },
  {
    name: 'Картинка',
    link: './images/markus-spiske-MgtHZ4zlC1U-unsplash.jpg',
  },
  {
    name: 'Компьютер',
    link: './images/goran-ivos-idmvPhF8t4E-unsplash.jpg',
  },
  {
    name: 'Философия',
    link: './images/ben-kolde-Ajcipx1VDXI-unsplash.jpg',
  },
  {
    name: 'Идеальное рабочее место',
    link: './images/alexandru-acea--WBYxmW4yuw-unsplash.jpg',
  },
]

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button_invalid',
}
