import {
  validationConfig,
  initialCards,
  popupUser,
  popupCreateCard,
  popupPicture,
  popupCreateContainer,
  popupContainer,
  btnEdit,
  btnClose,
  btnImgAdd,
  btnImgClose,
  btnClosePicture,
  elementsContainer,
  elementTemplate,
  picture,
  pictureCaption,
  inputName,
  inputJob,
  inputCardName,
  inputImgLink,
  userName,
  userJob,
} from "./utils.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
// import Section from './Section.js';
import FormValidator from "./FormValidator.js";

// const cardsList = new Section({
//   renderer: () => {

//   },
// },
// );

// Добавление новой карточки
function saveCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputCardName.value,
    link: inputImgLink.value,
  };
  const card = new Card(cardData, "#elementTemplate");
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
  popupCreateContainer.reset();
  const btnImgSave = popupCreateContainer.querySelector(".popup__save");
  btnImgSave.disabled = true;
  btnImgSave.classList.add("popup__button_invalid");
  closePopup(items.popupCreateCard);
}

initialCards.forEach((item) => {
  const card = new Card(item, "#elementTemplate");
  // сохраняем результат вызова метода в переменную cardElement
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
});

// Открытие попапа профиля
function openPopupUser() {
  openPopup(popupUser);
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

// Сохранение данных пользователя на странице
function savePopupUser(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup(popupUser);
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
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

// Открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("mousedown", closeOverlay);
  document.addEventListener("keydown", closeEscape);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
  popup.removeEventListener("mousedown", closeOverlay);
}

// Закрытие попапа попапа профиля
btnClose.addEventListener("click", () => closePopup(popupUser));
// Закрытие попапа добавления картинки
btnImgClose.addEventListener("click", () => closePopup(popupCreateCard));
// Закрытие попапа с картинкой
btnClosePicture.addEventListener("click", () => closePopup(popupPicture));
// Открытие попапа профиля
btnEdit.addEventListener("click", () => openPopupUser(popupUser));
// Сохранение данных пользователя на странице
popupContainer.addEventListener("submit", savePopupUser);
// Открытие попапа для добавления картинки
btnImgAdd.addEventListener("click", () => openPopup(popupCreateCard));
// Сохранение карточки
popupCreateContainer.addEventListener("submit", saveCard);

const formValidator = new FormValidator(
  validationConfig,
  validationConfig.formSelector
);
formValidator.enableValidation();
