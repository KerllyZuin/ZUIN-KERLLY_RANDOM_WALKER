let w1, w2, w3, w4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(100, 200);
  w2 = new Walker(500, 300);
  w3 = new Walker(1000, 400);
  w4 = new Walker(1500, 700);
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
  w4.update();
  w4.display();
}

class Walker {
  constructor(_posx, _posy) {
    this.posx = _posx;
    this.posy = _posy;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));

    this.esCirculo = random() > 0.5 ? true : false;
  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    //noStroke();
    if (this.esCirculo) {
      circle(this.posx, this.posy, 10);
    } else {
      rect(this.posx, this.posy, 10, 10);
    }
  }
}
