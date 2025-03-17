import * as constants from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Pledge from "../components/Pledge.js";

const cardList = new Section(
    {
        items: constants.cards,
        renderer: (item) =>
            new Card(item, constants.cardSelectors, {
                popupRenderer: (data) => {
                    const popup = document.querySelector(
                        constants.popupCardInfoSelectors.popup
                    );
                    popup.classList.add("popup_visible");
                    popup.querySelector(constants.popupCardInfoSelectors.popupImage).src = data.img;
                    popup.querySelector(constants.popupCardInfoSelectors.popupTitle).textContent = data.title;
                    popup.querySelector(
                        constants.popupCardInfoSelectors.popupText
                    ).textContent = data.text;
                    popup
                        .querySelector(constants.popupCardInfoSelectors.popupCloseButton)
                        .addEventListener("click", () => {
                            popup.classList.remove("popup_visible");
                        });
                },
            }).getCard(),
    },
    constants.cardSelectors.cardList
);
cardList.renderItems();

const pledgeList = new Section(
    {
        items: constants.initialPledges,
        renderer: (item) => new Pledge(item, constants.pledgeSelectors).getPledge(),
    },
    constants.pledgeSelectors.pledgeList
);
pledgeList.renderItems();

document
    .querySelector(constants.pledgeSelectors.pledgeForm)
    .addEventListener("submit", () => {
        pledgeList.addItem(addPledge());
    });

function addPledge() {
    const name = document.querySelector(
        constants.pledgeSelectors.pledgeInputName
    ).value;
    const pledge = document.querySelector(
        constants.pledgeSelectors.pledgeInputText
    ).value;
    return {name, pledge};
}

constants.navBarSelectors.navIcon.addEventListener("click", () => {
    constants.navBarSelectors.navBar.classList.toggle("nav_opened");
    constants.navBarSelectors.navLogo.classList.toggle("nav__logo_hidden");
    constants.navBarSelectors.navList.classList.toggle("nav__list_opened");
});
