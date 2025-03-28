let shapes = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    shapes.push({ angle: i * TWO_PI / 20, color: color(random(255), random(255), random(255)) });
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
    shapes[i].color = color(random(255), random(255), random(255));
  }
}
