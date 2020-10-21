let btnEdit = document.querySelector('.profile__edit-button'); // Кнопка редактировать профиль



let inputName = document.querySelector('.popup__name'); // 
let inputJob = document.querySelector('.popup__job'); // 

let userName = document.querySelector('.profile__name'); // 
let userJob = document.querySelector('.profile__job'); //

function openPopup() {
    let popup = document.querySelector('.popup');
    popup.className = 'popup_opened';
}

btnEdit.addEventListener('click', openPopup);

function closePopup() {
    let btnClose = document.querySelector('.popup__close'); // Крестик (закрыть)
    popup.className.toggle('popup');
}

btnClose.addEventListener('click', closePopup);

function savePopup() {
    let btnSave = document.querySelector('.popup__save'); // Кнопка "Сохранить"

}
btnSave.addEventListener('click', savePopup);