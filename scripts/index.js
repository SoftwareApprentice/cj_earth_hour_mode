const cards = [
  {
    link: "#lights",
    img: "../images/lightbulb.png",
    alt: "Lightbulb",
    header: "Turn Off Lights",
  },
  {
    link: "#unplug",
    img: "../images/plug.png",
    alt: "Plug",
    header: "Unplug Unused Devices",
  },
  {
    link: "#shower",
    img: "../images/lightbulb.png",
    alt: "Shower",
    header: "Take Shorter Showers",
  },
  {
    link: "#water",
    img: "../images/plug.png",
    alt: "Water",
    header: "Use Less Water",
  },
  {
    link: "#recycle",
    img: "../images/lightbulb.png",
    alt: "Recycle",
    header: "Recycle More",
  },
];
//const pledges = [{ name: "Modesto", pledge: "unplugging unused devices" }];
const pledges = JSON.parse(localStorage.getItem("pledges") || "[]");

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

loadPledges();

function addPledge(evt) {
  evt.preventDefault();
  const name = document.querySelector(".pledge__name").value;
  console.log(name);
  const pledge = document.querySelector("#pledges").value;
  console.log(pledge);
  const pledgeWall = document.querySelector(".pledges");
  const pledgeEl = document.createElement("li");
  pledgeEl.textContent = `${name} pledged to reduce their carbon footprint by ${pledge}!`;
  pledgeWall.append(pledgeEl);

  
}

function loadPledges() {
  if (localStorage.getItem("pledges") == null) {
    console.log("no pledges");
    localStorage.setItem("pledges", JSON.stringify(pledges));
  }
  else{
    console.log(pledges);
    pledges.forEach((pledge) => {
        console.log(pledge);
        const name = pledge.name;
        const text = pledge.pledge;
        const pledgeEl = document.createElement("li");
        const pledgeWall = document.querySelector(".pledges");
        pledgeEl.textContent = `${name} pledged to reduce their carbon footprint by ${text}!`;
        pledgeWall.append(pledgeEl);
    })
  }
}
