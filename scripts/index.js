//List of Cards
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

//Initial Pledges
const initialPledges = [
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


//Load pledges from local storage, if there are no pledges create an empty array
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

//Add event listener to pledge form submit button to add pledge
const pledgeForm = document.querySelector(".pledge__form");
pledgeForm.addEventListener("submit", addPledge);

const deleteBtn = document.querySelector(".pledge__delete-btn");
deleteBtn.addEventListener("click", deletePledges);

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
  pledges.push({ name: name, pledge: pledge });
  localStorage.setItem("pledges", JSON.stringify(pledges));
}

function loadPledges() {
  //If pledges doesnt exist in local storage, create a pledge array from initial pledges
  if (localStorage.getItem("pledges") == null) {
    localStorage.setItem("pledges", JSON.stringify(initialPledges));
  } else {
    //For each pledge, create a list item to append to list of pledges
    pledges.forEach((pledge) => {
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

function deletePledges(evt){
  //Debugging tool to remove all pledges on wall
  console.log("deleting pledges...")
  localStorage.removeItem("pledges");
  window.location.reload();
}
