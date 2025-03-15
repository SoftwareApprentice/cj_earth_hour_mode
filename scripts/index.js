const cards = [
  {
    link: "#lightswitch",
    img: "../images/lightswitch_icon.png",
    alt: "Lightswitch",
    header: "Turn Off Lights",
  },
  {
    link: "#unplug",
    img: "../images/unplug_icon.png",
    alt: "Unplug",
    header: "Unplug Unused Devices",
  },
  {
    link: "#solar",
    img: "../images/icons/solar_icon.jpg",
    alt: "Solar",
    header: "Use Solar Devices",
  },
  {
    link: "#laundry",
    img: "../images/laundry_icon.png",
    alt: "laundry",
    header: "Use Cold Water",
  },
  {
    link: "#led",
    img: "../images/led_icon.png",
    alt: "LED",
    header: "Use LED Lights",
  },
  {
    link: "#thermostat",
    img: "../images/thermostat_icon.png",
    alt: "Thermostat",
    header: "Keep Thermostat Low",
  },
];

// Create a new card for each element in cards array.
cards.forEach((card) => {
  //Identify Card List
  const cardList = document.querySelector(".cards");
  //Create a new card list item
  const cardItem = document.createElement("li");
  cardItem.classList.add("card");

  //Create the link for the card, add appropriate class
  const cardLink = document.createElement("a");
  cardLink.href = card.link;
  cardLink.classList.add("card__link");

  //Create the card image, add appropriate class and append to card link
  const cardImg = document.createElement("img");
  cardImg.classList.add("card__image");
  cardImg.src = card.img;
  cardImg.alt = card.alt;
  cardLink.appendChild(cardImg);

  //Create the card header, add appropriate class and append to card link
  const cardHeader = document.createElement("h2");
  cardHeader.classList.add("card__header");
  cardHeader.textContent = card.header;
  cardLink.appendChild(cardHeader);

  //Finally append the card link to the card item then to the card list
  cardItem.append(cardLink);
  cardList.append(cardItem);
});

const pledgeForm = document.querySelector(".pledge__form");
pledgeForm.addEventListener("submit", addPledge);

function addPledge(evt) {
  evt.preventDefault();
  const name = document.querySelector(".pledge__name").value;
  console.log(name);
  const pledge = document.querySelector("#pledges").value;
  console.log(pledge);
  const pledgeWall = document.querySelector(".pledges");
  const pledgeEl = document.createElement("li");
}
