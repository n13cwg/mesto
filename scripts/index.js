const popup = document.querySelector('.popup');
const popupCreateCard = document.querySelector('.popup_create-card');

const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close');
const btnImgAdd = document.querySelector('.profile__button');
const btnImgClose = document.querySelector('.popup__close-create');
const btnClosePicture = document.querySelector('.popup__close-picture');

const elementsContainer = document.querySelector('.elements');
const popupCreateContainer = document.querySelector('.popup__create-container');
const popupContainer = document.querySelector('.popup__container');
const popupPicture = document.querySelector('.popup_picture');

const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputCardName = document.querySelector('.popup__input_name-card');
const inputImgLink = document.querySelector('.popup__input_link');

const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

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
    const elementTemplate = document.querySelector('#elementTemplate').content;
    // клонируем содержимое тега template
    const cardElement = elementTemplate.cloneNode(true);
    // наполняем содержимым
    cardElement.querySelector('.element__place').src = item.link;
    cardElement.querySelector('.element__title').textContent = item.name;
    // отображаем на странице
    elementsContainer.prepend(cardElement);
    // Лайк карточки
    const btnLike = document.querySelector('.element__like');
    btnLike.addEventListener('click', function() {
        btnLike.classList.toggle('element__like_black');
    });
    // Удаление карточки
    const btnDelete = document.querySelector('.element__delete-btn');
    btnDelete.addEventListener('click', function() {
            const element = btnDelete.closest('.element');
            element.remove();
        })
    // Открытие попапа с картинкой
    const imgPlace = document.querySelector('.element__place');
    imgPlace.addEventListener('click', function () {
        popupPicture.classList.add('popup_opened');
        const picture = document.querySelector('.popup__image');
        const pictureCaption = document.querySelector('.popup_caption');
        picture.src = item.link;
        pictureCaption.textContent = item.name;
    })
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
    popupCreateCard.classList.add('popup_opened');
}
// Закрытие попапа
function closePopup() {
    popup.classList.remove('popup_opened');
    popupCreateCard.classList.remove('popup_opened');
    popupPicture.classList.remove('popup_opened');
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
btnClosePicture.addEventListener('click', closePopup);
btnEdit.addEventListener('click', openPopup);
popupContainer.addEventListener("submit", savePopup);
btnImgAdd.addEventListener('click', openImgPopup);
popupCreateContainer.addEventListener("submit", saveCard);