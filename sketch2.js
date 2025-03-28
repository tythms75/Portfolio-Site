let waves = [];

function setup() {
  createCanvas(windowWidth, windowWidth);
  for (let i = 0; i < width; i++) {
    waves[i] = height / 2;
  }
}

function draw() {
  background(50);
  stroke(400);
  
  for (let i = 0; i < waves.length; i++) {
    waves[i] = height / 2 + sin(frameCount * 0.05 + i * 0.1) * (mouseY / 4);
    line(i, height, i, waves[i]);
  }
}
