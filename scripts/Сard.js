//const
const popupImgAdd = document.querySelector(".popup__images");
const popupImgTitle = document.querySelector(".popup__images-title");
import { openPopup } from "./index.js";
import { popupImg } from "./index.js";
export default class Card {
  constructor(initialCards, templateSelector) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like");
  }
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardTemplate;
  }
  generateCard() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    return this._element;
  }
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    this._element
      .querySelector(".element__del")
      .addEventListener("click", () => {
        this._element.remove();
      });
  }
  _handleLikeClick() {
    this._likeButton.classList.toggle("element__like_active");
  }
  _handleOpenPopup() {
    openPopup(popupImg);
    popupImgAdd.src = this._link;
    popupImgAdd.alt = this._name;
    popupImgTitle.textContent = this._name;
  }
}
