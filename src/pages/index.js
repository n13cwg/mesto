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
} from "../components/utils.js";
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

// Добавление новой карточки
const cardList = new Section ({
  renderer: (item) => {
  const elementCard = card.generateCard(item);
  cardList.addItem(elementCard, true);
  }
});

//Добавление новой карточки
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
  closePopup(popupCreateCard);
}

//Создание новой карточки
function createCard(item) {
  const card = new Card(item, cardSelector, openPopupPicture);
  const elementCard = card.generateCard();
  elementBox.prepend(elementCard);
}

initialCards.forEach((item) => {
  createCard(item);
});

//Создание попапа карточки
const popupCard = new PopupWithForm(popupCreateCard);
popupCard.close(btnImgClose);
popupCard.setEventListeners();

//Открытие попапа с картинкой
function openPopupPicture (name, link) {
  const popupWithImage = new PopupWithImage(popupPicture);
  popupWithImage.open(name, link);
  picture.src = link;
  pictureCaption.textContent = name;
  popupWithImage.setEventListeners();
}

//Открытие попапа добавления карточки
buttonAddCard.addEventListener('click', () => {
  popupCard.openPopup();
} );

//Информация о пользователе
const userInfo = new UserInfo ({name: profileName, description: profileJob });

//Редактирование профиля
const popupEditProfile = new PopupWithForm (popupProfile,
  () => {
      inputName.value = userInfo.name;
      inputDescription.value = userInfo.description;
      userInfo.setUserInfo();
      popupEditProfile.closePopup(popupProfile);
});
popupEditProfile.closePopup(popupProfile);
popupEditProfile.setEventListeners();

//Открытие попапа редактирования профиля
buttonEdit.addEventListener('click',() => {
  popupEditProfile.openPopup();
});

// Сохранение данных пользователя на странице
function savePopupUser(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup(popupUser);
}

//Кнопка сохранения профиля
popupProfileContainer.addEventListener("submit", savePopupProfile);
//Кнопка сохрянения карточки
popupContainerAdd.addEventListener("submit", saveCard);

const formEditProfileValidator = new FormValidator(validationConfig, popupProfileContainer);
formEditProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, popupContainerAdd);
formCardValidator.enableValidation();

