import * as constants from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";

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
    ".cards"
);
cardList.renderItems();

//Add event listener to pledge form submit button to add pledge
const pledgeForm = document.querySelector(".pledge__form");
pledgeForm.addEventListener("submit", addPledge);

//Load pledges onto the page
loadPledges();

function addPledge(evt) {
  //Prevent page refresh
  evt.preventDefault();

  //Get values from name and pledge input
  const name = document.querySelector(".pledge__name").value;
  const pledge = document.querySelector("#pledges").value;

  //Identify pledge list and append a new list item to it
  const pledgeWall = document.querySelector(".pledges");
  const pledgeEl = document.createElement("li");
  pledgeEl.textContent = `${name} pledged to reduce their carbon footprint by ${pledge}!`;
  pledgeWall.append(pledgeEl);

  //Push pledge onto local storage JSON.
  constants.pledges.push({name: name, pledge: pledge});
  localStorage.setItem("pledges", JSON.stringify(constants.pledges));
}

function loadPledges() {
  //If pledges doesnt exist in local storage, create a pledge array from initial pledges
  if (localStorage.getItem("pledges") == null) {
    localStorage.setItem("pledges", JSON.stringify(constants.initialPledges));
  } else {
    //For each pledge, create a list item to append to list of pledges
    constants.pledges.forEach((pledge) => {
      console.log(pledge);
      const name = pledge.name;
      const text = pledge.pledge;
      const pledgeEl = document.createElement("li");
      const pledgeWall = document.querySelector(".pledges");
      pledgeEl.textContent = `${name} pledged to reduce their carbon footprint by ${text}!`;
      pledgeWall.append(pledgeEl);
    });
  }
}
