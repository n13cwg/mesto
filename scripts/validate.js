// включение валидации вызовом enableValidation
// вынесли все классы и селекторы в один объект
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__button_invalid',
};

// Показать ошибку
function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage; // validationMessage - локализованное сообщение, описывающее ограничения валидности, которым элемент управления не соответствует
  input.classList.add(config.inputInvalidClass);
}

// Скрыть ошибку
function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputInvalidClass);
}

// Проверка поля ввода на валидность
function checkInputValidity(form, input, config) {
  // validity.valid - возвращает true если значение элемента не имеет проблем с валидностью; в противном случае false
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

// Состояние кнопки. Сделать кнопку активной либо не активной
function setButtonState(button, isActive, config) {
  if (isActive) {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  } else {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}

// Находит все поля ввода и вешает обработчики
function setEventListeners(form, config) {
  const inputsList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    });
  });
}

// Функция, которая запускает валидацию
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, config);
    // отмена отправки формы
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // задали правильное сосояние кнопки
    // (при открытии формы кнопка не активна пока не будут введены правильные данные)
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  });
}

enableValidation(validationConfig);