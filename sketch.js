let m;
let m2;
let movers =[];

function setup() {
  createCanvas(400, 400);
  canvas = createGraphics(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);

  for (let i = 0; i < 10; i++){
    let mover = new Mover(random(width), random(height), random(5, 30));
    movers.push(mover);
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
