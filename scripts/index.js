const popup = document.querySelector('.popup');
const popupImgAdd = document.querySelector('.popup-img-add');

const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const btnImgAdd = document.querySelector('.profile__button');
const btnImgClose = document.querySelector('.popup__close-img');
// const btnLike = document.querySelector('.element__like');

const elementsContainer = document.querySelector('.elements');
const popupImgContainer = document.querySelector('.popup__container-img');
const popupContainer = document.querySelector('.popup__container');
const popupImgShow = document.querySelector('.popup-img');

const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputImgName = document.querySelector('.popup__input_name-img');
const inputImgAddress = document.querySelector('.popup__input_address');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const imgName = document.querySelector('.element__title');
const imgPlace = document.querySelector('.element__place');

const initialCards = [
  {
    name: 'Кафе',
    link: './images/safar-safarov-MSN8TFhJ0is-unsplash.jpg'
  },
  {
    name: 'TODO list',
    link: './images/roman-synkevych-vXInUOv1n84-unsplash.jpg'
  },
  {
    name: 'Картинка',
    link: './images/markus-spiske-MgtHZ4zlC1U-unsplash.jpg'
  },
  {
    name: 'Компьютер',
    link: './images/goran-ivos-idmvPhF8t4E-unsplash.jpg'
  },
  {
    name: 'Философия',
    link: './images/ben-kolde-Ajcipx1VDXI-unsplash.jpg'
  },
  {
    name: 'Идеальное рабочее место',
    link: './images/alexandru-acea--WBYxmW4yuw-unsplash.jpg'
  }
];
// Шесть карточек «из коробки»
initialCards.forEach(createCard);
// Добавление карточки
function createCard(item) {
  const elementTemplate = document.querySelector('#elementTemplate').content;
  // клонируем содержимое тега template
  const cadrElement = elementTemplate.cloneNode(true);
  // наполняем содержимым
  cadrElement.querySelector('.element__place').src = item.link;
  cadrElement.querySelector('.element__title').textContent = item.name;
  // отображаем на странице
  elementsContainer.prepend(cadrElement);
  // Лайк карточки
  const btnLike = document.querySelector('.element__like');
  btnLike.addEventListener('click', function () {
    btnLike.classList.toggle('element__like_black');
  });
  // Удаление карточки
  const btnDelete = document.querySelector('.element__delete-btn');
  btnDelete.addEventListener('click', function () {
    const element = btnDelete.closest('.element');
    element.remove();
  })
  return cadrElement;
}
// Добавление новой карточки
function saveImgPopup(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputImgName.value,
    link: inputImgAddress.value
  };
  const cardElement = createCard(cardData);
  elementsContainer.prepend(cardElement);
  popupImgContainer.reset(cardData);
  closePopup();
}
// Открытие попапа профиля
function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}
// Открытие попапа для добавления картинки
function openImgPopup() {
  popupImgAdd.classList.add('popup_opened');
}

// Открытие попапа с картинкой

// Закрытие попапа
function closePopup() {
  popup.classList.remove('popup_opened');
  popupImgAdd.classList.remove('popup_opened');
}
// Сохранение данных пользователя на странице
function savePopup(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup();
}

btnClose.addEventListener('click', closePopup);
btnImgClose.addEventListener('click', closePopup);
btnEdit.addEventListener('click', openPopup);
popupContainer.addEventListener("submit", savePopup);
btnImgAdd.addEventListener('click', openImgPopup);
popupImgContainer.addEventListener("submit", saveImgPopup);