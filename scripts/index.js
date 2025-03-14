const cards = [
    {
        link: "#lights",
        img: "../images/lightbulb.png",
        alt: "Lightbulb",
        header: "Turn Off Lights"
    },
    {
        link: "#unplug",
        img: "../images/plug.png",
        alt: "Plug",
        header: "Unplug Unused Devices"
    }
]

// Create a new card for each element in cards array.
cards.forEach((card) => {
    //Identify Card List
    const cardList = document.querySelector(".cards");
    //Create a new card list item
    const cardItem = document.createElement("li");
    cardItem.classList.add("card");

    //Create the link for the card, add appropriate class and append to card item
    const cardLink = document.createElement("a");
    cardLink.href = card.link;
    cardLink.classList.add("card__link")

    //Create the card image, add appropriate class and append to card item
    const cardImg = document.createElement("img");
    cardImg.classList.add("card__image")
    cardImg.src = card.img;
    cardImg.alt = card.alt;
    cardLink.appendChild(cardImg);

    //Create the card header, add appropriate class and append to card item
    const cardHeader = document.createElement("h2");
    cardHeader.classList.add("card__header")
    cardHeader.textContent = card.header;
    cardLink.appendChild(cardHeader);

    //Finally append the card item to the card list
    cardItem.append(cardLink);
    cardList.append(cardItem);
})