let popupEditButton = document.querySelector(".profile__edit-button");
let popupContainer = document.querySelector(".popup");
let popupButtonClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__profile");
let authorInput = document.querySelector(".popup__author");
let textInput = document.querySelector(".popup__text");
let profileTitle = document.querySelector(".profile__title");
let profileText = document.querySelector(".profile__subtitle");
let likeActive = document.querySelector(".element__icon");

popupEditButton.addEventListener("click", openPopup);

function openPopup() {
  popupContainer.classList.add("popup__open");
  authorInput.value = profileTitle.textContent;
  textInput.value = profileText.textContent;
}

popupButtonClose.addEventListener("click", closePopup);

function closePopup() {
  popupContainer.classList.remove("popup__open");
}
formElement.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(saveForm) {
  saveForm.preventDefault();
  profileTitle.textContent = authorInput.value;
  profileText.textContent = textInput.value;
  closePopup();
}

// function blackLike() {
//     likeActive.classList.add("element__icon_active")
//     likeActive.classList.remove("element__icon");

//     likeActive.classList.add(".element__icon_active");
//     likeActive.setAttribute(background-image: url(../../images/Union));
// }
// likeActive.addEventListener("click", blackLike);
