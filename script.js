let btnEdit = document.querySelector('.profile__edit-button'); // Кнопка редактировать профиль
let btnClose = document.querySelector('.popup__close'); // Создала btnClose и присвоила ей значение <button class="popup__close">
let btnSave = document.querySelector('.popup__save'); // Создала btnSave и присвоила ей значение <button class="popup__save">

let inputName = document.querySelector('.popup__name'); // 
let inputJob = document.querySelector('.popup__job'); // 

let userName = document.querySelector('.profile__name'); // 
let userJob = document.querySelector('.profile__job'); //

function openPopup() { // Фунция для открытия popup
    let popup = document.querySelector('.popup'); // Создала переменную popup и присвоила ей значение <div class="popup">
    popup.className = 'popup_opened'; // Добавила класс popup_opened
}

btnEdit.addEventListener('click', openPopup); // Собитие, при нажании на <button class="profile__edit-button"> срабатывает function openPopup()

function closePopup() { // Фунция для закрытия popup
    let popup = document.querySelector('.popup_opened');
    popup.className = 'popup'; // Вернула класс .popup для закрытиня попапа
}

btnClose.addEventListener('click', closePopup); // Собитие, при нажании на <button class="popup__close"> срабатывает function closePopup()

function savePopup() { // Фунция для закрытия popup и заменя содержимого в <h1 class="profile__name"> и <p class="profile__job">

}
btnSave.addEventListener('click', savePopup);