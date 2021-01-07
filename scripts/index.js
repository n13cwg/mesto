import { validationConfig, items, initialCards } from './utils.js';
import Card from './Card.js';
// import Popup from './Popup.js';
import FormValidator from './FormValidator.js';

// Добавление новой карточки
function saveCard(evt) {
    evt.preventDefault();
    const cardData = {
        name: items.inputCardName.value,
        link: items.inputImgLink.value
    };
    const btnImgSave = document.querySelector('.popup__button');
    btnImgSave.disabled=true;
    const card = new Card(cardData, '#elementTemplate');
    const cardElement = card.generateCard();
    items.elementsContainer.prepend(cardElement);
    items.popupCreateContainer.reset(cardData);
    closePopup(items.popupCreateCard);
}

initialCards.forEach((item) => {
    const card = new Card(item, '#elementTemplate');
    const cardElement = card.generateCard();
    items.elementsContainer.prepend(cardElement);
});

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
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', closeOverlay);
    document.addEventListener('keydown', closeEscape);
    // formValidator.resetValidation();
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
items.popupContainer.addEventListener('submit', savePopupUser);
// Открытие попапа для добавления картинки
items.btnImgAdd.addEventListener('click', () => openPopup(items.popupCreateCard));
// Сохранение карточки
items.popupCreateContainer.addEventListener('submit', saveCard);

const formValidator = new FormValidator(validationConfig, validationConfig.formSelector); 
formValidator.enableValidation();