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
    cardInfo: ".card__info"
};

export const popupCardInfoSelectors = {
    popup: "#card-info-popup",
    popupTitle: ".popup__title",
    popupText: ".popup__text",
    popupCloseButton: ".popup__close-button"
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
    pledgeDeleteButton: ".pledge__delete-btn"
};