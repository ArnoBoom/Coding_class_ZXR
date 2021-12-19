let grayCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");
let blueCircle = document.getElementById("blueButton");
let yellowCircle = document.getElementById("yellowButton");

let body = document.querySelector("body");

// 2 -- Add an event listener to each circle
yellowCircle.addEventListener("click", turnYellow);
blueCircle.addEventListener("click", turnBlue);
whiteCircle.addEventListener("click", turnWhite);
grayCircle.addEventListener("click", turnGray);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.
function turnGray() {
  console.log("gray button");

  body.style.backgroundColor = "gray";
  // body.classList.add("gray-theme");
}

function turnWhite() {
  console.log("white button");
  body.style.backgroundColor = "white";
  // body.classList.add("white-theme");
}

function turnBlue() {
  console.log("blue button");
  body.style.backgroundColor = "blue";
  // body.classList.add("blue-theme");
}

function turnYellow() {
  console.log("yellow button");
  body.style.backgroundColor = "yellow";
  // body.classList.add("yellow-theme");
}
