// Your code here

let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left - 10}px`;
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left + 10}px`;
}


document.addEventListener("keydown", function(e) {
  let leftNumbers = dodger.style.left.replace("px", "");
  let leftEdge = parseInt(leftNumbers, 10);
  let gameBoardWidth = game.offsetWidth - dodger.offsetWidth;

  if (e.key === "ArrowLeft") {
    if (leftEdge > 0) {
      moveDodgerLeft();
    }
  } else if (e.key === "ArrowRight") {
    if (leftEdge < gameBoardWidth) {
      moveDodgerRight();
    }
  };
});



