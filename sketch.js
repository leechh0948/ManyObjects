let m;
let m2;
let movers =[];

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);

  for (let i = 0; i < 5; i++){
    let mover = new Mover(random(width), random(height), random(5, 50));
    movers.push(mover);
  }
}

function draw() {
  background(220);

for (let mover of movers){
  mover.update();
  mover.show();
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
