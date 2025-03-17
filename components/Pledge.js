export default class Pledge {
    constructor( data, pledgeSelectors) {
        this._data = data;
        this._pledgeSelectors = pledgeSelectors;
    }

    _getElement() {
        this._pledgeElement = document.querySelector(this._pledgeSelectors.pledgeTemplate).content.cloneNode(true);
        this._pledgeText = this._pledgeElement.querySelector(this._pledgeSelectors.pledgeText);
    }

    getPledge() {
        this._getElement();
        this._pledgeText.textContent = `${this._data.name} pledged to reduce their carbon footprint by ${this._data.pledge}!`
        return this._pledgeElement;
    }
}