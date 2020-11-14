var x, y;
var diameter = 150;
var speedX = 2;
var speedY = 3;
var rColour = 75;
var gColour = 0;
var bColour = 75;
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  x = width / 2 ;
  y = height / 2;
  background(0);
}

function draw() {
  fill(0, 70);
  rect(0, 0, width, height);
  move();
  display();
}

function move() {
  x += speedX;
  y += speedY;
};

function display() {
  fill(rColour, gColour, bColour);
  noStroke();
  ellipse(x, y, diameter, diameter/2);
  fill(255, 255, 255);
  textSize(32);
  text('DVD', x-30, y+10);
  checkBorders();
}

function checkBorders() {
  if (x > width - diameter/2 || x < diameter/2)
  {
    speedX *= -1;
    rColour = random(0, 255);
    gColour = random(0, 255);
    bColour = random(0, 255);
  }

  if (y > height - diameter / 4 || y < diameter/4)
  {
    speedY *= -1;
    rColour = random(0, 255);
    gColour = random(0, 255);
    bColour = random(0, 255);
  }
}