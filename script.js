let btnEdit = document.querySelector('.profile__edit-button'); // Кнопка редактировать профиль
let btnClose = document.querySelector('popup__close'); // Крестик (закрыть)
let btnSave = document.querySelector('popup__save'); // Кнопка "Сохранить"


let inputName = document.querySelector('popup__name'); // 
let inputJob = document.querySelector('popup__job'); // 

let userName = document.querySelector('profile__name'); // 
let userJob = document.querySelector('profile__job'); //

function openPopup() {
    let popup = document.querySelector('.popup');
    popup.className = 'popup_opened';
}

btnEdit.addEventListener('click', openPopup);