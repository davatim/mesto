const buttonOpenEditProfilePopup = document.querySelector(".profile__adit-button");
const profileInput = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupContainers = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_edit-profile");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close_edit-profile");
const profileForm = document.querySelector(".popup__form_edit-profile");
const nameInput = document.querySelector(".popup__item_edit-profile_name");
const jobInput = document.querySelector(".popup__item_edit-profile_job");
const popupBtnOpenCard = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup_edit-card");
const popupBtnCloseCard = document.querySelector(".popup__close_edit-card");
const formElementCard = document.querySelector(".popup__form_edit-card");
const nameInputCard = document.querySelector(".popup__item_edit-card_name");
const jobInputCard = document.querySelector(".popup__item_edit-card_job");
const popupImg = document.querySelector(".popup_edit-image");
const popupImgAdd = document.querySelector(".popup__images");
const popupImgTitle = document.querySelector(".popup__images-title");
const popupImgClose = document.querySelector(".popup__close_edit-image");
const saveProfiledBtn = document.querySelector(".popup__save-edit-profile");
const saveCardBtn = document.querySelector(".popup__save_edit-card");
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
function fillProfileForm() {
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
}
function clearCardForm() {
  nameInputCard.value = "";
  jobInputCard.value = "";
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
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
  const cardImg = card.querySelector(".element__image");
  card.querySelector(".element__title").textContent = item.name;
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector(".element__del").addEventListener("click", () => {
    card.remove();
  });
  card.querySelector(".element__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });
  cardImg.addEventListener("click", () => {
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
  saveCardBtn.setAttribute("disabled", "disabled");
  closePopup(popupCard);
}
buttonOpenEditProfilePopup.addEventListener("click", () => {
  fillProfileForm();
  openPopup(popupProfile);
  saveProfiledBtn.setAttribute("disabled", "disabled");
  saveProfiledBtn.classList.add("popup__save_inactive");
});
buttonCloseEditProfilePopup.addEventListener("click", () => {
  closePopup(popupProfile);
});
profileForm.addEventListener("submit", handleProfileFormSubmit);
popupBtnOpenCard.addEventListener("click", () => {
  clearCardForm();
  openPopup(popupCard);
  saveCardBtn.setAttribute("disabled", "disabled");
  saveCardBtn.classList.add("popup__save_inactive");
});
popupBtnCloseCard.addEventListener("click", () => {
  closePopup(popupCard);
});
formElementCard.addEventListener("submit", handleProfileFormSubmitCard);
popupImgClose.addEventListener("click", () => {
  closePopup(popupImg);
});
popupContainers.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(item);
    }
  });
});
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
