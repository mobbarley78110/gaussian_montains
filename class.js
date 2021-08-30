class Montain{
  constructor(y_pos, altitude, width, seed, col){
    this.y_pos = y_pos
    this.altitude = altitude;
    this.width = width;
    this.R = 100;
    this.t = 0;
    this.seed = seed * 100;
    this.col = col;
  }

  update(){
    this.t += 1.5;
  }

  draw(){
    fill('#1d3557');
    stroke(this.col);
    beginShape();
    for (let r = 0; r < this.R; r++){
      let x = Math.round(map(r, 0, this.R, 0, this.width), 4);
      let y = gaussian(x, this.altitude, this.width / 2, this.width / 6)
      let n = map(noise(this.seed + this.t / 50 + x / 100), 0, 1,
        - this.altitude / 100,
        this.altitude / 500);
      vertex(x, this.y_pos - y * (1 + n));
    }
    endShape();
  }
}


function gaussian(x, a, b, c) {
  return a * Math.exp(- Math.pow(x - b, 2) / (2 * Math.pow(c,2)))
}
