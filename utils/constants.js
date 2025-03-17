export const cards = [
  {
    src: "../images/icons/switchIcon.jpg",
    alt: "Lightbulb",
    title: "Turn Off Lights",
    text: "Extends The Lifespan Of The Bulbs",
    img: "../images/lightswitch.png",
  },
  {
    src: "../images/icons/plug.png",
    alt: "Plug",
    title: "Unplug Unused Devices",
    text: "Prevents Phantom Energy Drain",
    img: "../images/unplug.png",
  },
  {
    src: "../images/icons/laundryIcon.png",
    alt: "Shower",
    title: "Wash With Cold Water",
    text: "Gentler on fabrics",
    img: "../images/laundry.png",
  },
  {
    src: "../images/icons/solarIcon.png",
    alt: "Water",
    title: "Switch to Solar Power",
    text: "Use Less Water When Brushing Teeth",
    img: "../images/solar.png",
  },
  {
    src: "../images/icons/thermoIcon.png",
    alt: "Recycle",
    title: "Keep Thermostat Low",
    text: "Keep thermostat low",
    img: "../images/thermostat.png",
  },
  {
    src: "../images/icons/ledIcon.png",
    alt: "Recycle",
    title: "Switch to LED Lights",
    text: "Use up to 80% less electricity",
    img: "../images/led.png",
  },
];

export const initialPledges = [
  {
    name: "Modesto",
    pledge: "washing laundry at a colder temperature",
  },
  {
    name: "Aaron",
    pledge: "switching to paper products from plastic",
  },
  {
    name: "Stephanie",
    pledge: "unplugging unused devices",
  },
  {
    name: "Pasha",
    pledge: "washing laundry at a colder temperature",
  },
];

export const pledges = JSON.parse(localStorage.getItem("pledges") || "[]");
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
  pledgeItem: ".pledge",
  pledgeTemplate: "#pledge-template",
  pledgeText: ".pledge__text",
  pledgesForm: ".pledge-list__form",
  pledgeCheckbox: ".pledge__checkbox",
  pledgeDeleteButton: ".pledge__delete-btn",
};

export const navBarSelectors = {
  navBar: document.querySelector("#nav-bar"),
  navLogo: document.querySelector(".nav__logo"),
  navList: document.querySelector(".nav__list"),
  navIcon: document.querySelector(".nav__icon"),
};
