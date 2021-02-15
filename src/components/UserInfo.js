export default class UserInfo {
  constructor({name, description}) { // DOM элемент имя пользователя и информация
    this._name = name;
    this._description = description;
    this._profileName = document.querySelector('.profile__name');
    this._profileJob = document.querySelector('.profile__job');
  }

  getUserInfo() { // Функция открытия попапа профиля, данные профиля
    this._userInfo = {
      name:  this._profileName.textContent,
      description: this._profileJob.textContent, 
   }
   return this._userInfo;
  };

  setUserInfo(name, description) { // Функция сохранения профиля, данные профиля
    this._profileName.textContent = name;
    this._profileJob.textContent = description;
  };
}