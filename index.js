const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let downPressed = false;
let upPressed = false;
let rightPressed = false;
let leftPressed = false;

//Game Loop
function drawGame() {
  clearScreen();
  inputs();
  drawGreenBlob();
}

function inputs() {
  if (upPressed) {
    y = y - speed;
  }
  if (downPressed) {
    y = y + speed;
  }
  if (rightPressed) {
    x = x + speed;
  }
  if (leftPressed) {
    x = x - speed;
  }
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
  // down
  if (event.keyCode == 40) {
    downPressed = true;
  }
}

function keyUp(event) {
  // up
  if (event.keyCode == 40) {
    downPressed = false;
  }
}


// drawGame();
setInterval(drawGame, 1000 / 60);
