const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup_user');
const popupCreateCard = document.querySelector('.popup_create-card');
const popupPicture = document.querySelector('.popup_picture');

const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const btnImgAdd = document.querySelector('.profile__button');
const btnImgClose = document.querySelector('.popup__close-create');
const btnClosePicture = document.querySelector('.popup__close-picture');

const elementsContainer = document.querySelector('.elements');
const popupCreateContainer = document.querySelector('.popup__create-container');
const popupContainer = document.querySelector('.popup__container');

const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputCardName = document.querySelector('.popup__input_name-card');
const inputImgLink = document.querySelector('.popup__input_link');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

const elementTemplate = document.querySelector('#elementTemplate').content;
const picture = document.querySelector('.popup__image');
const pictureCaption = document.querySelector('.popup__caption');

const initialCards = [{
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
// или initialCards.forEach((item) => createCard(item));
// Добавление карточки
function createCard(item) {
  // клонируем содержимое тега template
  const cardElement = elementTemplate.cloneNode(true);
  const btnLike = cardElement.querySelector('.element__like');
  btnLike.addEventListener('click', (likeCard));
  const btnDelete = cardElement.querySelector('.element__delete-btn');
  btnDelete.addEventListener('click', (delCard));
  const imgPlace = cardElement.querySelector('.element__place');
  imgPlace.addEventListener('click', (openPopupPicture));
  // наполняем содержимым
  cardElement.querySelector('.element__place').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;
  // отображаем на странице
  elementsContainer.prepend(cardElement);

  // Открытие попапа с картинкой
  function openPopupPicture() {
    openPopup(popupPicture);
    picture.src = item.link;
    pictureCaption.textContent = item.name;
  }

  return cardElement;
}

// Добавление новой карточки
function saveCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputCardName.value,
    link: inputImgLink.value
  };
  const cardElement = createCard(cardData);
  elementsContainer.prepend(cardElement);
  popupCreateContainer.reset(cardData);
  closePopup(popupCreateCard);
}

// Лайк карточки
function likeCard(evt) {
  evt.preventDefault();
  evt.target.classList.toggle('element__like_black');
}

// Удаление карточки
function delCard(evt) {
  evt.preventDefault();
  evt.target.closest('.element').remove();
}

// Открытие попапа профиля
function openPopupUser() {
  openPopup(popupUser);
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

// Сохранение данных пользователя на странице
function savePopupUser(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;
  closePopup(popupUser);
}

// //Функция закрытия попапа кликом по оверлею
// function closePopupByClickOverlay(evt) {
//   if (evt.target !== evt.currentTarget) {
//     return
//   }
//   closePopup(evt.target);
// }
// closePopupByClickOverlay();

function clickHandler (evt) {

}
popup.addEventListener('click', function () {
  closePopup(document.querySelector('.popup_opened'));
  console.log('Объявили функцию прямо при добавлении обработчика');
})

// Событие закрытия попапа нажатием Escape
function keyHandler(evt) {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
  });
}

keyHandler();

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
  // popup.removeEventListener('mousedown', closePopupByClickOverlay);
}

// Закрытие попапа попапа профиля
btnClose.addEventListener('click', () => closePopup(popupUser));
// Закрытие попапа добавления картинки
btnImgClose.addEventListener('click', () => closePopup(popupCreateCard));
// Закрытие попапа с картинкой
btnClosePicture.addEventListener('click', () => closePopup(popupPicture));
// Открытие попапа профиля
btnEdit.addEventListener('click', () => openPopup(popupUser));
// Сохранение данных пользователя на странице
popupContainer.addEventListener("submit", savePopupUser);
// Открытие попапа для добавления картинки
btnImgAdd.addEventListener('click', () => openPopup(popupCreateCard));
// Сохранение карточки
popupCreateContainer.addEventListener("submit", saveCard);
