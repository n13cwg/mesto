  export const popupUser = document.querySelector('.popup_user');
  export const popupCreateCard = document.querySelector('.popup_create-card');
  export const popupPicture = document.querySelector('.popup_picture');
  export const popupCreateContainer = document.querySelector('.popup__create-container');
  export const popupContainer = document.querySelector('.popup__container');

  export const btnEdit = document.querySelector('.profile__edit-button');
  export const btnClose = document.querySelector('.popup__close');
  export const btnImgAdd = document.querySelector('.profile__button');
  export const btnImgClose = document.querySelector('.popup__close-create');
  export const btnClosePicture = document.querySelector('.popup__close-picture');

  export const elementsContainer = document.querySelector('.elements');
  export const elementTemplate = document.querySelector('#elementTemplate').content;
  export const picture = document.querySelector('.popup__image');
  export const pictureCaption = document.querySelector('.popup__caption');

  export const inputName = document.querySelector('.popup__input_name');
  export const inputJob = document.querySelector('.popup__input_job');
  export const inputCardName = document.querySelector('.popup__input_name-card');
  export const inputImgLink = document.querySelector('.popup__input_link');

  export const userName = document.querySelector('.profile__name');
  export const userJob = document.querySelector('.profile__job');

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
