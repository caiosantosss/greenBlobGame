const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 5;

let downPressed = false;
let upPressed = false;
let rightPressed = false;
let leftPressed = false;

//Game Loop
function drawGame() {
  clearScreen();
  inputs();
  boundryCheck();
  drawGreenBlob();
}

function boundryCheck() {
  //up
  if (y < radius) {
    y = radius;
  }
  // down
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  // left
  if (x < radius) {
    x = radius;
  }
  //right
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
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
  // up
  if (event.keyCode == 38) {
    upPressed = true;
  }
  // down
  if (event.keyCode == 40) {
    downPressed = true;
  }
  // right
  if (event.keyCode == 39) {
    rightPressed = true;
  }
  // left
  if (event.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUp(event) {
  // up
  if (event.keyCode == 38) {
    upPressed = false;
  }
  // down
  if (event.keyCode == 40) {
    downPressed = false;
  }
  // right
  if (event.keyCode == 39) {
    rightPressed = false;
  }
  // left
  if (event.keyCode == 37) {
    leftPressed = false;
  }
}


// drawGame();
setInterval(drawGame, 1000 / 60);
