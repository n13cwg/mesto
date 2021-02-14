// class Section отвечает за отрисовку элементов на странице
export default class Section {
  constructor({ items, renderer }, containerSelector) {  
    this._initialCards = items; // Массив карточек
    this._renderer = renderer; // Отрисовка каждого отдельного элемента. Функция рендера карточек (лежит в index.js)
    this._container = document.querySelector(containerSelector); // Контейнер карточек
  }

  renderItems() { // ???
    	this._renderedItems.forEach(item => {
      this.renderer(item);
    });
  }
  addItem() { // ???
		this._container.append(element);
	};

  prependItem() { // DOM элемент карточки (добавление карточки)
		this._container.prepend(element);
	};
}