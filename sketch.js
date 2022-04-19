var mover;

function setup() {
  createCanvas(800, 800);

  mover = new Mover(random(width), random(height));
}

function draw() {
  background(235);

  mover.update();
  mover.draw();

}