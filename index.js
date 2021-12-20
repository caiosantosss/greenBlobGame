const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

let downPressed = false;

//Game Loop
function drawGame() {
  clearScreen();
  drawGreenBlob();
}



function drawGreenBlob() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
  if (event.keyCode == 40) {
    downPressed = true;
  }
}

function keyUp(event) {

}


// drawGame();
setInterval(drawGame, 1000 / 60);
