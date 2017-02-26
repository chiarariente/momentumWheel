function setup() {
  createCanvas(800,600);
  noFill();
  angleMode(DEGREES);
  frameRate(12);
  background(40);
}

function draw() {
  
  translate(width/2,height/2);
  rotate(frameCount*3);
  
  stroke(lerpColor(color('#ea0043'),color('#0fefca'), (frameCount%120)/120));
  
  ellipse(100,0,250,250);
    
  stroke(lerpColor(color('#0fefca'),color('#ea0043'), (frameCount%120)/120));
  
  rect(0,0,200,200);
  
}