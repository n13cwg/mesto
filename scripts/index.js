// Скрипт для редактирования профиля:
let popup = document.querySelector('.popup');
let popupImg = document.querySelector('.');

let btnEdit = document.querySelector('.profile__edit-button');
let btnClose = document.querySelector('.popup__close');
let btnImgAdd = document.querySelector('.');
let btnImgClose = document.querySelector('.');

let popupImgCjntainer = document.querySelector('.');
let popupContainer = document.querySelector('.popup__container');

let inputName = document.querySelector('.popup__input_name');
let inputJob = document.querySelector('.popup__input_job');
let inputImgName = document.querySelector('.');
let inputImgAddress = document.querySelector('.');

let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');
let imgName = document.querySelector('.');
let imgAddress = document.querySelector('.');

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