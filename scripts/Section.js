// class Section отвечает за отрисовку элементов на странице
export default class Section {
  constructor({ items, renderer }, containerSelector) {  
    this._initialCards = items; // Массив карточек (лежит в index.js)
    this._renderer = renderer; // Отрисовка каждого отдельного элемента. Функция рендера карточек (лежит в index.js)
    this._container = document.querySelector(containerSelector); // Контейнер карточек (лежит в index.js)
  }

  renderItem(); // Данные карточки в функцию рендера карточек

  appendItem(); // DOM элемент карточки (функция рендера карточек)

  prependItem(); // DOM элемент карточки (добавление карточки)
}
