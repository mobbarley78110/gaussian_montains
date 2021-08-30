w = 500;
h = 800;
let c = 21;
let pad = h / 20;
montains = []

function setup() {
  let c1 = color(189, 178, 255);
  let c2 = color(155, 246, 255);
  createCanvas(w, h);
  for (let i = 0; i < c; i++){
    let col = lerpColor(c1, c2, i / c);
    let alt = map(i, 0, c, 3 * pad, h - pad);
    montains.push(new Montain(alt, 100, w, i, col));
  }
}

function draw() {
  clear();
  background('#1d3557');
  for (let i = 0; i < c; i++){
    montains[i].draw();
    montains[i].update();
  }
}
