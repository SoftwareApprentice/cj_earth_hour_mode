export default class Card {
    constructor( data, cardSelectors, { popupRenderer }) {
        this._data = data;
        this._cardSelectors = cardSelectors;
        this._popupRender = popupRenderer;
    }

    _getElement() {
        this._cardElement = document.querySelector(this._cardSelectors.cardTemplate).content.cloneNode(true);
        this._cardTitle = this._cardElement.querySelector(this._cardSelectors.cardTitle);
        this._cardImage = this._cardElement.querySelector(this._cardSelectors.cardImage);
        this._cardInfo = this._cardElement.querySelector(this._cardSelectors.cardInfo);
    }

    _setEventListeners() {
        this._cardInfo.addEventListener("click", () => {
            this._popupRender(this._data);
        });
    }

    getCard() {
        this._getElement();
        this._cardImage.src = this._data.src;
        this._cardImage.alt = this._data.alt;
        this._cardTitle.textContent = this._data.header;
        this._setEventListeners();
        return this._cardElement;
    }
}