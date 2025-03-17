import * as constants from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Pledge from "../components/Pledge.js";

const cardList = new Section(
    {
      items: constants.cards,
      renderer: (item) => new Card(item, constants.cardSelectors, {
        popupRenderer: (data) => {
          const popup = document.querySelector(constants.popupCardInfoSelectors.popup);
          popup.classList.add("popup_visible");
          popup.querySelector(constants.popupCardInfoSelectors.popupTitle).textContent = data.title;
          popup.querySelector(constants.popupCardInfoSelectors.popupText).textContent = data.text;
          popup.querySelector(constants.popupCardInfoSelectors.popupCloseButton).addEventListener("click", () => {
            popup.classList.remove("popup_visible");
          });
        }
      }).getCard()
    },
    constants.cardSelectors.cardList
);
cardList.renderItems();

const pledgeList = new Section(
    {
      items: constants.initialPledges,
      renderer: (item) => new Pledge(item, constants.pledgeSelectors).getPledge()
    },
    constants.pledgeSelectors.pledgeList
);
pledgeList.renderItems();

document.querySelector(constants.pledgeSelectors.pledgeForm).addEventListener("submit", () => {
  pledgeList.addItem(addPledge());
});

document.querySelector(constants.pledgeSelectors.pledgeDeleteButton).addEventListener("click", deletePledges);


function addPledge() {
  const name = document.querySelector(constants.pledgeSelectors.pledgeInputName).value;
  const pledge = document.querySelector(constants.pledgeSelectors.pledgeInputText).value;
  return { name, pledge };
}

function deletePledges() {
  document.querySelectorAll(constants.pledgeSelectors.pledgeItem).forEach((pledge) => {
      if (pledge.querySelector(constants.pledgeSelectors.pledgeCheckbox).checked) {
          pledge.remove();
      }
  });
}

//nav bar elements
const navBar = document.querySelector("#nav-bar"); //.nav_opened
const navLogo = navBar.querySelector(".nav__logo"); //.nav__logo_hidden
const navList = navBar.querySelector(".nav__list"); //.nav__list_opened  .nav__list_opened li:not(:last-child)

function myFunction() {
  navBar.classList.toggle("nav_opened");
  navLogo.classList.toggle("nav__logo_hidden");
  navList.classList.toggle("nav__list_opened");
}
