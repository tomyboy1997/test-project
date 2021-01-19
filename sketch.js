let angle = 45;
let x = 0;


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

//try map to change color or size
function scaling(x, y){
  //top_left
  fill(random(255), random(255), random(255));
  noStroke();
  let d = 125;
  circle(x, y, d);
  d += 50;
}
