// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 1600; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colors = document.querySelectorAll(".color");
const current = document.querySelector("#current-color");
const cells = document.querySelectorAll(".cell");
const reset = document.querySelector("#reset");
const fill = document.querySelector("#fill");
const canvas = document.querySelector("#canvas");

fill.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.backgroundImage = current.style.backgroundImage;
  }
});

reset.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = "white";
  }
});

//add event listener to each color circle. the callback function changes the background
//color of the '#current-color' square
for (let color of colors) {
  color.addEventListener("click", () => {
    current.style.backgroundImage = color.style.backgroundImage;
  });
}

//add event listener to each cell. the callback function changes the background color
//of the cell
let color;
for (let cell of cells) {
  let downListener = () => {
    color = true;
  };
  let upListener = () => {
    color = false;
  };
  let moveListener = () => {
    if (color) {
      cell.style.backgroundImage = current.style.backgroundImage;
    }
  };
  let clickListener = () => {
    cell.style.backgroundImage = current.style.backgroundImage;
  };
  cell.addEventListener("mousedown", downListener);
  cell.addEventListener("mousemove", moveListener);
  cell.addEventListener("mouseup", upListener);
  cell.addEventListener("click", clickListener);
}
