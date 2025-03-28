let circles = [];

function setup() {
  createCanvas(windowWidth, windowWidth);
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
      size: random(10, 30),
    });
  }
}

function draw() {
  background(30);
  
  for (let c of circles) {
    fill(200, 100, 255);
    ellipse(c.x, c.y, c.size);
    
    c.x += c.vx;
    c.y += c.vy;

    if (c.x < 0 || c.x > width) c.vx *= -1;
    if (c.y < 0 || c.y > height) c.vy *= -1;
  }
}

function mousePressed() {
  
  for (let c of circles) {
    c.size += 5;
  }
}

