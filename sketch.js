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

//background
function back() {
  noStroke();
  fill(100);
  rect(0, 0, width, height);

  fill(75);
  rect(width / 2, 0, 350, 700);
}

//well, creates a rectangle
const createRectangle = (colors, coordinates, rectMove) => {
  const {r, g, b} = colors;
  const {x, y, w} = coordinates;

  noStroke();
  fill(r, g, b);
  rect(width / x, height / y, w);
  if (rectMove) {
    rectMove()
  }
}

function draw() {
  back();
  const rectangles = [
  //topLeft
    {
      colors: {
        r: 30,
        g: 190,
        b: 40
      },
      coordinates: {
        x: 3.5,
        y: 3.5,
        w: 150
      }
    },
  //topRight
    {
      colors: {
        r: 30,
        g: 30,
        b: 210
      },
      coordinates: {
        x: 2,
        y: 3.5,
        w: 150
      },
// dynamic rectangle following the mouse
      rectMove: () => {
        let a = map(mouseX, 0, width, 0, 350);
        fill(140, 20, 110);
        quad(a, 120, 200, 200, 350, 200, a+150, 120);
          //left
        fill(30, 30, 210);
        quad(a, 120, a, 250, 200, 350, 200, 200);
      }
    },
  //bottomLeft
    {
      colors: {
        r: 210,
        g: 30,
        b: 10
      },
      coordinates: {
        x: 3.5,
        y: 2,
        w: 150
      }
    },
  //bottomRight
  {
    colors: {
      r: 60,
      g: 255,
      b: 160
    },
    coordinates: {
      x: 2,
      y: 2,
      w: 150
    }
  },
]

  for (const rect of rectangles) {
    createRectangle(rect.colors, rect.coordinates, rect.rectMove)
}
  scaling(275, 275);
  spinning(425, 425);
}
