//List of Cards
export const cards = [
    {
        src: "../images/lightbulb.png",
        alt: "Lightbulb",
        title: "Turn Off Lights",
        text: "Turn Off Lights When You Leave"
    },
    {
        src: "../images/plug.png",
        alt: "Plug",
        title: "Unplug Unused Devices",
        text: "Unplug Unused Devices When Not in Use"
    },
    {
        src: "../images/lightbulb.png",
        alt: "Shower",
        title: "Take Shorter Showers",
        text: "Take Shorter Showers to Save Water"
    },
    {
        src: "../images/plug.png",
        alt: "Water",
        title: "Use Less Water",
        text: "Use Less Water When Brushing Teeth"
    },
    {
        src: "../images/lightbulb.png",
        alt: "Recycle",
        title: "Recycle More",
        text: "Recycle More to Reduce Waste"
    },
];

//Initial Pledges
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

//Debugging tool to remove all pledges on wall
//localStorage.removeItem("pledges");

//Load pledges from local storage, if there are no pledges create an empty array
export const pledges = JSON.parse(localStorage.getItem("pledges") || "[]");
export const cardSelectors = {
    cardTemplate: "#card-template",
    cardImage: ".card__image",
    cardTitle: ".card__title",
    cardInfo: ".card__info"
};

export const popupCardInfoSelectors = {
    popup: "#card-info-popup",
    popupTitle: ".popup__title",
    popupText: ".popup__text",
    popupCloseButton: ".popup__close-button"
};