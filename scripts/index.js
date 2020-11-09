const popup = document.querySelector('.popup');
const popupImgAdd = document.querySelector('.popup-img-add');

const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const btnImgAdd = document.querySelector('.profile__button');
const btnImgClose = document.querySelector('.popup__close-img');
const btnLike = document.querySelector('.element__like');

const elementsContainer = document.querySelector('.elements');
const popupImgContainer = document.querySelector('.popup__container-img');
const popupContainer = document.querySelector('.popup__container');

const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputImgName = document.querySelector('.popup__input_name-img');
const inputImgAddress = document.querySelector('.popup__input_address');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const imgName = document.querySelector('.element__title');
const imgAddress = document.querySelector('.element__place');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardData = {
  name: inputImgName.value,
  link: inputImgAddress.value
};

initialCards.forEach(function () {
  const cardElement = createCard(cardData);
  elementsContainer.prepend(cardElement);
})

function createCard(data) {
  const elementTemplate = document.querySelector('#elementTemplate').content;
  // клонируем содержимое тега template
  const cadrElement = elementTemplate.cloneNode(true);
  // наполняем содержимым
  cadrElement.querySelector('.element__place').src = data.link;
  cadrElement.querySelector('.element__title').textContent = data.name;
  // отображаем на странице
  elementsContainer.prepend(cadrElement);
  return cadrElement;
}
function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = userName.textContent;
  inputJob.value = userJob.textContent;
}

function openImgPopup(evt) {
  popupImgAdd.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupImgAdd.classList.remove('popup_opened');
}

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
