'use strict';

let angle = 45;
let x = 0;
let diam = 1;
let bite = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES)
  noStroke();
}

//rectangle bottom right
function spinning(x,y){
  push();
  fill(140, 20, 110);
  stroke(155);
  translate(425, 425);
  rectMode(CENTER);
  rotate(angle);
  rect(0,0, 100, 100);
  angle += 2;
  pop();
}

//circle top left
function scaling(x, y){
  fill(210, 30, 10);

  if (bite < 0) {
    diam = 2;
  } else if (bite > 125){
    diam = -2;
  }
  bite = bite + diam;
  circle(x, y, bite)
}

//well, creates a rectangle
const createRectangle = (r, g, b, x, y, w, rectMove) => {
  noStroke();
  fill(r, g, b);
  rect(width / x, height / y, w);
  if (rectMove) {
    rectMove()
  }
}

// dynamic rectangle following the mouse
const rectMove = () => {
    let a = map(mouseX, 0, width, 0, 350);
    fill(140, 20, 110);
    quad(a, 120, 200, 200, 350, 200, a+150, 120);
      //left
    fill(30, 30, 210);
    quad(a, 120, a, 250, 200, 350, 200, 200);
}

//background
function back() {
  noStroke();
  fill(100);
  rect(0, 0, width, height);

  fill(75);
  rect(width / 2, 0, 350, 700);
}

function draw() {
  back();
  const topLeft = createRectangle(30, 190, 40, 3.5, 3.5, 150, rectMove);
  const topRight = createRectangle(30, 30, 210, 2, 3.5, 150);
  const bottomLeft = createRectangle(210, 30, 10, 3.5, 2, 150);
  const bottomRight = createRectangle(60, 255, 160, 2, 2, 150);
  scaling(275, 275);
  spinning(425, 425);
}
