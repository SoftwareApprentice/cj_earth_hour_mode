import * as constants from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Pledge from "../components/Pledge.js";

const popup = document.querySelector(constants.popupCardInfoSelectors.popup);
const handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
        const openPopup = document.querySelector(".popup.popup_visible");
        if (openPopup) {
            popup.classList.remove("popup_visible");
            document.activeElement.blur();
        }
    }
};

const handleMouseClickClose = (evt) => {
    const openPopup = document.querySelector(".popup.popup_visible");
    if (openPopup && evt.target === openPopup.children[0]) {
        popup.classList.remove("popup_visible");
    }
};

const addPopupListeners = () => {
    document.addEventListener("keydown", handleEscapeClose);
    document.addEventListener("click", handleMouseClickClose);
};

const removePopupListeners = () => {
    document.removeEventListener("keydown", handleEscapeClose);
    document.removeEventListener("click", handleMouseClickClose);
};

const cardList = new Section({
    items: constants.cards,
    renderer: (item) => {
        const card = new Card(item, constants.cardSelectors, {
            popupRenderer: (data) => {
                popup.classList.add("popup_visible");
                addPopupListeners();
                popup.querySelector(constants.popupCardInfoSelectors.popupImage).src = data.img;
                popup.querySelector(constants.popupCardInfoSelectors.popupTitle).textContent = data.title;
                popup.querySelector(constants.popupCardInfoSelectors.popupText).textContent = data.text;
                popup.querySelector(constants.popupCardInfoSelectors.popupCloseButton).addEventListener("click", () => {
                    popup.classList.remove("popup_visible");
                    removePopupListeners();
                });
            },
        });
        return card.getCard();
    },
}, constants.cardSelectors.cardList);
cardList.renderItems();

(function fillPledgeOptions() {
    constants.pledgeOptions.forEach((option) => {
        const selectOption = document.createElement("option");
        selectOption.value = option.toLowerCase();
        selectOption.textContent = option;
        document.querySelector(constants.pledgeSelectors.pledgeSelect).appendChild(selectOption);
    });
})();

const pledgeList = new Section({
    items: constants.initialPledges,
    renderer: (item) => new Pledge(item, constants.pledgeSelectors).getPledge(),
}, constants.pledgeSelectors.pledgeList);
pledgeList.renderItems();

document.querySelector(constants.pledgeSelectors.pledgeForm).addEventListener("submit", (evt) => {
    evt.preventDefault();
    pledgeList.addItem(addPledge());
    evt.target.reset();
});

function addPledge() {
    return {
        name: document.querySelector(constants.pledgeSelectors.pledgeInputName).value,
        pledge: document.querySelector(constants.pledgeSelectors.pledgeInputText).value,
    };
}

constants.navBarSelectors.navIcon.addEventListener("click", () => {
    constants.navBarSelectors.navBar.classList.toggle("nav_opened");
    constants.navBarSelectors.navLogo.classList.toggle("nav__logo_hidden");
    constants.navBarSelectors.navList.classList.toggle("nav__list_opened");
});