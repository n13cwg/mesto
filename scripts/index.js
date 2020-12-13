import {config, items} from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Шесть карточек «из коробки»

// или initialCards.forEach((item) => createCard(item));
// Добавление карточки
// function createCard(item) {
  // клонируем содержимое тега template
  // const cardElement = elementTemplate.cloneNode(true);
  // const btnLike = cardElement.querySelector('.element__like');
  // btnLike.addEventListener('click', likeCard);
  // const btnDelete = cardElement.querySelector('.element__delete-btn');
  // btnDelete.addEventListener('click', delCard);
  // const imgPlace = cardElement.querySelector('.element__place');
  // imgPlace.addEventListener('click', openPopupPicture);
  // // наполняем содержимым
  // imgPlace.src = item.link;
  // cardElement.querySelector('.element__title').textContent = item.name;
  // // отображаем на странице
  // elementsContainer.prepend(cardElement);

  // Открытие попапа с картинкой
//  function openPopupPicture() {
//     openPopup(popupPicture);
//     picture.src = item.link;
//     pictureCaption.textContent = item.name;
//   };

//   return cardElement;
// }
 function openPopupPicture() {
    openPopup(popupPicture);
    picture.src = item.link;
    pictureCaption.textContent = item.name;
  };
// Добавление новой карточки
function saveCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: items.inputCardName.value,
    link: items.inputImgLink.value
  };
  const card = new Card(cardData, '.elTemplate');
  const cardElement = card.generateCard();
  items.elementsContainer.prepend(cardElement);
  items.popupCreateContainer.reset(cardData);
  closePopup(items.popupCreateCard);
}

// Лайк карточки

// function likeCard(evt) {
//   evt.preventDefault();
//   evt.target.classList.toggle('element__like_black');
// }

// Удаление карточки
// function delCard(evt) {
//   evt.preventDefault();
//   evt.target.closest('.element').remove();
// }

// Открытие попапа профиля
function openPopupUser() {
  openPopup(items.popupUser);
  items.inputName.value = items.userName.textContent;
  items.inputJob.value = items.userJob.textContent;
}

// Сохранение данных пользователя на странице
function savePopupUser(evt) {
  evt.preventDefault();
  items.userName.textContent = items.inputName.value;
  items.userJob.textContent = items.inputJob.value;
  closePopup(items.popupUser);
}

// //Функция закрытия попапа кликом по оверлею
function closeOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(evt.target);
}

// Событие закрытия попапа нажатием Escape
function closeEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeOverlay);
  document.addEventListener('keydown', closeEscape);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscape);
  popup.removeEventListener('mousedown', closeOverlay);
}

// Закрытие попапа попапа профиля
items.btnClose.addEventListener('click', () => closePopup(items.popupUser));
// Закрытие попапа добавления картинки
items.btnImgClose.addEventListener('click', () => closePopup(items.popupCreateCard));
// Закрытие попапа с картинкой
items.btnClosePicture.addEventListener('click', () => closePopup(items.popupPicture));
// Открытие попапа профиля
items.btnEdit.addEventListener('click', () => openPopupUser(items.popupUser));
// Сохранение данных пользователя на странице
// items.PopupContainer.addEventListener("submit", savePopupUser);
// Открытие попапа для добавления картинки
items.btnImgAdd.addEventListener('click', () => openPopup(items.popupCreateCard));
// Сохранение карточки
items.popupCreateContainer.addEventListener("submit", saveCard);

const formValidator = new FormValidator(config, formSelector);
formValidator.enableValidation();