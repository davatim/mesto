const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__edit-button"
);
const profileInput = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupProfile = document.querySelector(".popup_edit-profile");
const buttonCloseEditProfilePopup = document.querySelector(
  ".popup__close_edit-profile"
);
const profileForm = document.querySelector(".popup_form_edit-profile");
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
function insetProfileForm() {
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
}
function insetCardForm() {
  nameInputCard.value = "";
  jobInputCard.value = "";
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInput.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}
renderInitialCards();
function creatCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(".element__title").textContent = item.name;
  card.querySelector(".element__image").src = item.link;
  card.querySelector(".element__image").alt = item.name;
  card.querySelector(".element__del").addEventListener("click", () => {
    card.remove();
  });
  card.querySelector(".element__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });
  card.querySelector(".element__image").addEventListener("click", () => {
    openPopup(popupImg);
    popupImgAdd.src = item.link;
    popupImgAdd.alt = item.name;
    popupImgTitle.textContent = item.name;
  });
  return card;
}
function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = creatCard(item);
    cardsContainer.append(card);
  });
}
function handleProfileFormSubmitCard(evt) {
  evt.preventDefault();
  const title = nameInputCard.value;
  const link = jobInputCard.value;
  const card = creatCard({ name: title, link: link });
  cardsContainer.prepend(card);
  closePopup(popupCard);
}
buttonOpenEditProfilePopup.addEventListener("click", () => {
  insetProfileForm();
  openPopup(popupProfile);
});
buttonCloseEditProfilePopup.addEventListener("click", () => {
  closePopup(popupProfile);
});
profileForm.addEventListener("submit", handleProfileFormSubmit);
popupBtnOpenCard.addEventListener("click", () => {
  insetCardForm();
  openPopup(popupCard);
});
popupBtnCloseCard.addEventListener("click", () => {
  closePopup(popupCard);
});
formElementCard.addEventListener("submit", handleProfileFormSubmitCard);
popupImgClose.addEventListener("click", () => {
  closePopup(popupImg);
});
