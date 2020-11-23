// Код валидации в отдельном файле validate.js и подключить его в index.html
// 1. Валидация формы «Редактировать профиль»
// 2. Валидация формы «Новое место»
// 3. Закрытие попапа кликом на оверлей
// 4. Закрытие попапа нажатием на Esc

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
// Показать сообщение об ошибке
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

// Скрыть сообщение об ошибке
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

// Проверка введённых данных
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Найти невалидный input
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Отключаем и включаем кнопку
const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
};

// Пусть слушатель событий добавится всем полям ввода внутри формы. Для этого создадим функцию setEventListener,
// которая примет параметром элемент формы и добавит её полям нужные обработчики
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Найдём все формы с указанным классом в DOM,
// сделаем из них массив методом Array.from
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldset) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(fieldset);
    });
  });
};
enableValidation();