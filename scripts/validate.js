// Код валидации в отдельном файле validate.js и подключить его в index.html
// 1. Валидация формы «Редактировать профиль»
// 2. Валидация формы «Новое место»
// 3. Закрытие попапа кликом на оверлей
// 4. Закрытие попапа нажатием на Esc

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});