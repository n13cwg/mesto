// Скрипт для редактирования профиля:
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup-img');

const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const btnImgAdd = document.querySelector('.profile__button');
const btnImgClose = document.querySelector('.popup__close-img');

const popupImgContainer = document.querySelector('.popup__container-img');
const popupContainer = document.querySelector('.popup__container');

const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputImgName = document.querySelector('.popup__input_name-img');
const inputImgAddress = document.querySelector('.popup__input_address');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const imgName = document.querySelector('.element__title');
const imgAddress = document.querySelector('.element__place');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function savePopup(evt) {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup();
}
btnClose.addEventListener('click', closePopup);
btnEdit.addEventListener('click', openPopup);
popupContainer.addEventListener("submit", savePopup);

// Скрипт для добавления карточек, удаление карточек:
// 1. открыть/закрыть попап
// 2. добавление новых карточек
// 3. удалить карточку
// 4. закрасить лайки
// 5. плавное появление попапов