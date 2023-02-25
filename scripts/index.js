// let popupEditButton = document.querySelector(".profile__edit-button");
// let popupContainer = document.querySelector(".popup");
// let popupButtonClose = document.querySelector(".popup__close");
// let formElement = document.querySelector(".popup__name");
// let authorInput = document.querySelector(".popup__input_type_author");
// let textInput = document.querySelector(".popup__input_type_text");
// let profileTitle = document.querySelector(".profile__title");
// let profileText = document.querySelector(".profile__subtitle");
// let likeActive = document.querySelector(".element__icon");

// popupEditButton.addEventListener("click", openPopup);

// function openPopup() {
//   popupContainer.classList.add("popup_opened");
//   authorInput.value = profileTitle.textContent;
//   textInput.value = profileText.textContent;
// }

// popupButtonClose.addEventListener("click", closePopup);

// function closePopup() {
//   popupContainer.classList.remove("popup_opened");
// }
// formElement.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(saveForm) {
//   saveForm.preventDefault();
//   profileTitle.textContent = authorInput.value;
//   profileText.textContent = textInput.value;
//   closePopup();
// }
// --------------------
// объявление переменных
const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
const profileInput = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const popupProfile = document.querySelector(".popup_edit-profile");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close_edit-profile");
const profileForm = document.querySelector(".popup__form_edit-profile");
const nameInput = document.querySelector(".popup__input_type_author");
const jobInput = document.querySelector(".popup__input_type_text");

const popupBtnOpenCard = document.querySelector(".profile__button");

const popupCard = document.querySelector(".popup_edit-card");
const popupBtnCloseCard = document.querySelector(".popup__close_edit-card");
const formElementCard = document.querySelector(".popup__form_edit-card");
const nameInputCard = document.querySelector(".popup__item_edit-card_name");
const jobInputCard = document.querySelector(".popup__item_edit-card_job");

const popupImg = document.querySelector(".popup_edit-image");
const popupImgAdd = document.querySelector(".popup__images");
const popupImgTitle = document.querySelector(".popup__image-text");
const popupImgClose = document.querySelector(".popup__close_edit-image");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector(".element");
const cardsContainer = document.querySelector(".elements");

//функция добавления данных из профиля в форму профиля
function insetProfileForm() {
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
}

// функция обнуления попапа карточки
function insetCardForm() {
  nameInputCard.value = "";
  jobInputCard.value = "";
}

//функция открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//функция закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// функция сохранние профиля из попапа
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInput.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// вызов функции рендера карточек
renderInitialCards();

// ФУНКЦИЯ создания карточки, удаления, лайка, открытие попапа картинки
function creatCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(".element__title").textContent = item.name;
  card.querySelector(".element__image").src = item.link;
  card.querySelector(".element__image").alt = item.name;

  // слушатель:  удаление карточки
  card.querySelector(".element__del").addEventListener("click", () => {
    card.remove();
  });

  // слушатель: поставить лайк карточке
  card.querySelector(".element__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });

  // слушатель открыть картинку карточки в попапе
  card.querySelector(".element__image").addEventListener("click", () => {
    openPopup(popupImg);
    popupImgAdd.src = item.link;
    popupImgAdd.alt = item.name;
    popupImgTitle.textContent = item.name;
  });

  return card;
}

// ФУНКЦИЯ РЕНДЕРА КАРТОЧКИ
function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = creatCard(item);
    cardsContainer.append(card);
  });
}

// ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ
function handleProfileFormSubmitCard(evt) {
  evt.preventDefault();
  const title = nameInputCard.value;
  const link = jobInputCard.value;
  const card = creatCard({ name: title, link: link });
  cardsContainer.prepend(card);
  closePopup(popupCard);
}

//слушатель открытие попапа профиля
buttonOpenEditProfilePopup.addEventListener("click", () => {
  insetProfileForm();
  openPopup(popupProfile);
});

//слушатель закрытие попапа профиля
buttonCloseEditProfilePopup.addEventListener("click", () => {
  closePopup(popupProfile);
});

//слушатель кнопка сохранить в попапе профиля
profileForm.addEventListener("submit", handleProfileFormSubmit);

// слуштель открытие попапа добавления карточки
popupBtnOpenCard.addEventListener("click", () => {
  insetCardForm();
  openPopup(popupCard);
});

// слушатель закрытие попапа добавления карточки
popupBtnCloseCard.addEventListener("click", () => {
  closePopup(popupCard);
});

// слушатель кнопка сохранить формы добавления карточки
formElementCard.addEventListener("submit", handleProfileFormSubmitCard);

// слушатель закрытие попапа с картинкой
popupImgClose.addEventListener("click", () => {
  closePopup(popupImg);
});
