let shapes = [];

function setup() {
  createCanvas(windowWidth, windowWidth);
  for (let i = 0; i < 20; i++) {
    shapes.push({ angle: i * TWO_PI / 20, color: color(random(500), random(500), random(500)) });
  }
}

function draw() {
  background(20);
  translate(width / 2, height / 2);
  
  for (let i = 0; i < shapes.length; i++) {
    let s = shapes[i];
    fill(s.color);
    noStroke();
    push();
    rotate(s.angle);
    rect(50, -5, 100, 10);
    pop();
  }
}

function mousePressed() {
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].color = color(random(500), random(500), random(500));
  }
}
