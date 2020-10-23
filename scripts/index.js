let popup = document.querySelector('.popup');

let btnEdit = document.querySelector('.profile__edit-button');
let btnClose = document.querySelector('.popup__close');

let popupContainer = document.querySelector('.popup__container');

let inputName = document.querySelector('.popup__name');
let inputJob = document.querySelector('.popup__job');

let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__job');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

btnEdit.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

btnClose.addEventListener('click', closePopup);

function savePopup(evt) {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
}
popupContainer.addEventListener("submit", savePopup);
popupContainer.addEventListener("submit", closePopup);
