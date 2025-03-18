export const cards = [
  {
    src: "./images/icons/switchIcon.jpg",
    alt: "Lightbulb",
    title: "Turn Off Lights",
    text: [
      "Extends the lifespan of the bulbs",
      "Saves energy, reducing electricity bills",
      "Promote sustainability by conserving resources",
    ],
    img: "../images/lightswitch.png",
  },
  {
    src: "./images/icons/plug.png",
    alt: "Plug",
    title: "Unplug Unused Devices",
    text: [
      "Prevents phantom energy drain",
      "Saves money on electicity bills",
      "Extends the lifespan of devices",
    ],
    img: "./images/unplug.png",
  },
  {
    src: "./images/icons/laundryIcon.jpg",
    alt: "Laundry",
    title: "Wash With Cold Water",
    text: [
      "Helps garments last longer",
      "Reduces need to heat water",
      "Prevents fabrics from shinking and fading",
    ],
    img: "./images/laundry.png",
  },
  {
    src: "./images/icons/solarIcon.png",
    alt: "Solar",
    title: "Switch To Solar Power",
    text: [
      "Decreases electricity demand from the grid",
      "Reduces reliance on non-rewable energy sources",
      "Harnesses free energy from the sun",
    ],
    img: "./images/solar.png",
  },
  {
    src: "./images/icons/thermoIcon.png",
    alt: "Thermostat",
    title: "Keep Thermostat Low",
    text: [
      "Reduces carbon footprint",
      "Leads to lower heating costs",
      "Decreases the strain on heating systems",
    ],
    img: "./images/thermostat.png",
  },
  {
    src: "./images/icons/ledIcon.png",
    alt: "LED",
    title: "Switch To LED Lights",
    text: [
      "Durable and eco-friendly",
      "Use up to 80% less electricity",
      "Last longer than traditional light bulbs",
    ],
    img: "./images/led.png",
  },
];

export const initialPledges = [
  {
    name: "Stephanie",
    pledge: "Washing With Cold Water",
  },
  {
    name: "Pasha",
    pledge: "Unplugging Unused Devices",
  },
  {
    name: "Aaron",
    pledge: "Switching To Solar Power",
  },
  {
    name: "Modesto",
    pledge: "Keeping Thermostat Low",
  },
];

export const pledgeOptions = [
  "Turning Off Lights",
  "Unplugging Unused Devices",
  "Washing With Cold Water",
  "Switching To Solar Power",
  "Keeping Thermostat Low",
  "Switching To LED Lights",
];

export const cardSelectors = {
  cardList: ".cards",
  cardTemplate: "#card-template",
  cardImage: ".card__image",
  cardTitle: ".card__title",
  cardInfo: ".card__info",
};

export const popupCardInfoSelectors = {
  popup: "#card-info-popup",
  popupImage: ".popup__image",
  popupTitle: ".popup__title",
  popupText: ".popup__text",
  popupCloseButton: ".popup__close-button",
};

export const pledgeSelectors = {
  pledgeForm: ".pledge__form",
  pledgeInputName: "#pledge-name",
  pledgeInputText: "#pledge-text",
  pledgeList: ".pledges",
  pledgeSelect: ".pledge__select",
  pledgeItem: ".pledge",
  pledgeTemplate: "#pledge-template",
  pledgeText: ".pledge__text",
};

export const navBarSelectors = {
  navBar: document.querySelector("#nav-bar"),
  navLogo: document.querySelector(".nav__logo"),
  navList: document.querySelector(".nav__list"),
  navIcon: document.querySelector(".nav__icon"),
};
