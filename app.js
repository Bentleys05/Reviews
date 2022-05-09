// local reviews data
const reviews = [
  {
    id: 1,
    name: "Mich Billsky",
    job: "software developer",
    img: "pexels-italo-melo-2379004.jpg",
    text: "moving average of period m is a series of successive averages of m terms starting with the first term, then second term",
  },
  {
    id: 2,
    name: "Henry Hart",
    job: "data scientist",
    img: "pexels-pixabay-220453.jpg",
    text: "determine effect od seasons of the size of the variable.determine what would be the value of the variable if there was no season",
  },
  {
    id: 3,
    name: "Charlotte Flair",
    job: "statistician",
    img: "pexels-daniel-xavier-1239288.jpg",
    text: "virtual lab of building networks and watching how data travels across the network in simulation mode and practicing setting up",
  },
];

// selecting items
const img = document.getElementById("image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// selecting prev and next button items
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting
// global variable
let currentItem = 0;

// calling the showPerson function

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// next review
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// prev review
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
