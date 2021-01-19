let angle = 45;
let x = 0;
let diam = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES)
  noStroke();

  fill(random(255), random(255), random(255))
  rect(0, 0, width, height);

  fill(random(255), random(255), random(255));
  rect(width / 2, 0, width, height);

  //top_left
  noStroke();
  fill(random(255), random(255), random(255));
  rect(width / 3.5, height / 3.5, 150, 150);
  fill(random(255), random(255), random(255));
  quad(100, 120, 200, 200, 350, 200, 250, 120);
  fill(random(255), random(255), random(255));
  quad(100, 120, 100, 250, 200, 350, 200, 200);

  //top_right
  noStroke();
  fill(random(255), random(255), random(255));
  rect(width / 2, height / 3.5, 150, 150);

  //bottom_left
  noStroke();
  fill(random(255), random(255), random(255));
  rect(width / 3.5, height / 2, 150, 150);

  //bottom_right
  noStroke();
  fill(random(255), random(255), random(255));
  rect(width / 2, height / 2, 150, 150);

}

function draw() {
  scaling(275, 275);
  spinning(425, 425);

}

function spinning(x,y){
  fill(125, 50);
  stroke(155);
  translate(x,y);
  rectMode(CENTER);
  rotate(angle);
  line(0,0, 50,50);
  angle += 5;
}

function scaling(x, y){
  fill(89, 47, 225);
  noStroke();

  /*for (diam = 0; diam < 125; diam += 2){
      circle(x, y, diam);
  }*/
  let m = map(mouseX, 0, width, 0, 125, true);
  circle(x, y, m)
}
