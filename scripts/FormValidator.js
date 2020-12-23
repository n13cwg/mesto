export default class FormValidator {
    constructor(validationConfig) {
        this._config = validationConfig;
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inputInvalidClass = validationConfig.inputInvalidClass;
        this._buttonInvalidClass = validationConfig.buttonInvalidClass;
    }

    // Показать ошибку
    _showError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage; // validationMessage - локализованное сообщение, описывающее ограничения валидности, которым элемент управления не соответствует
        input.classList.add(this._config.inputInvalidClass);
    }

    // Скрыть ошибку
    _hideError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalidClass);
    }

    // Проверка поля ввода на валидность
    _checkInputValidity(form, input) {
        // validity.valid - возвращает true если значение элемента не имеет проблем с валидностью; в противном случае false
        if (!input.validity.valid) {
            this._showError(form, input, this._config);
        } else {
            this._hideError(form, input, this._config);
        }
    }

    // Состояние кнопки. Сделать кнопку активной либо не активной
    _setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this._config.buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.buttonInvalidClass);
            button.disabled = true;
        }
    }

    // Находит все поля ввода и вешает обработчики
    _setEventListeners(form) {
        const inputsList = form.querySelectorAll(this._config.inputSelector);
        const submitButton = form.querySelector(this._config.submitButtonSelector);

        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(form, input);
                this._setButtonState(submitButton, form.checkValidity());
            });
        });
    }

    // Функция, которая запускает валидацию
    enableValidation() {
        const forms = document.querySelectorAll(this._config.formSelector);
        forms.forEach((form) => {
            this._setEventListeners(form, this._config);
            // отмена отправки формы
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
            // задали правильное сосояние кнопки
            // (при открытии формы кнопка не активна пока не будут введены правильные данные)
            const submitButton = form.querySelector(this._config.submitButtonSelector);
            this._setButtonState(submitButton, form.checkValidity(), this._config);
        });
    }

    resetValidation(form, config) {
        const inputsList = form.querySelectorAll(this._config.inputSelector);
        inputsList.forEach((input) => {
            this._hideError(input)
        });
        const button = this._form.querySelector(this._config.submitButtonSelector);
        this._setButtonState(inputsList, button);
    }
}