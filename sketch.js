let m;
let m2;
let movers =[];

function setup() {
  createCanvas(400, 400);
  canvas = createGraphics(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);

}

function keyPressed() {
  if (keyCode == LEFT_ARROW){
    let mover = new Mover(random(width), random(height), random(5, 10));
    movers.push(mover);
  }
  else if (keyCode == RIGHT_ARROW){
    movers.pop();
  }
}

function draw() {
  background(250);
  image(canvas,0, 0);

  for (let mover of movers){
    mover.update();
    mover.show();
    mover.drawOn(canvas);
    mover.edges();
  }

  if (mouseIsPressed) {
    let mousePos = createVector(mouseX, mouseY);
    m.attractTo(mousePos);
    m2.attractTo(mousePos);

    for(let mover of movers){
      mover.attractTo(mousePos);
    }
  }
}
