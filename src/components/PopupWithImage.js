import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector, image, title) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__images');
		this._title = this._popup.querySelector('.popup__images-title');
    // this._image = popupSelector.querySelector(image);
    // this._title = popupSelector.querySelector(title);
    // this._image = image;
    // this._title = title;
  }

  open(link, name) {
    super.open();
    //console.log(123);
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
  }
}
