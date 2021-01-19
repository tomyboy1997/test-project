let angle = 45;
let x = 0;
let diam = 1;
let bite = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES)
  noStroke();
}

function draw() {
  back();
  top_left();
  top_right();
  bottom_left();
  bottom_right();
  scaling(275, 275);
  spinning(425, 425);
}

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

function scaling(x, y){
  fill(210, 30, 10);

  if (bite < 0) {
    diam = 2;
  } else if (bite > 125){
    diam = -2;
  }
  bite = bite + diam;
  circle(x,y,bite)
}

function back() {
  noStroke();
  fill(100);
  rect(0, 0, width, height);

  fill(75);
  rect(width / 2, 0, 350, 700);
}

function top_left(){
  noStroke();
    //center
  fill(30, 190, 40);
  rect(width / 3.5, height / 3.5, 150, 150);
    //top
  let a = map(mouseX, 0, width, 0, 350);
  fill(140, 20, 110);
  quad(a, 120, 200, 200, 350, 200, a+150, 120);
    //left
  fill(30, 30, 210);
  quad(a, 120, a, 250, 200, 350, 200, 200);
}

function top_right() {
  noStroke();
  fill(30, 30, 210);
  rect(width / 2, height / 3.5, 150, 150);
}

function bottom_left() {
  noStroke();
  fill(210, 30, 10);
  rect(width / 3.5, height / 2, 150, 150);
}

function bottom_right() {
  noStroke();
  fill(60, 255, 160);
  rect(width / 2, height / 2, 150, 150);
}
