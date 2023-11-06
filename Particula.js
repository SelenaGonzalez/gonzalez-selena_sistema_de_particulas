class Particula {
  constructor() {
    this.estaMuerta = false;
    this.tiempodeVida = 35;

    //tiempo de vida de 10 frames por segundo

    this.pos = createVector(width / 2, height / 2);

    this.vel = createVector(0, random(3, 10));
    this.vel.rotate(random(360));

    this.g = createVector(0, 0.5);
  }

  //los objetos de forma interna tienen métodos
  //Método = método update
  actualizar() {
    this.vel.add(this.g);
    this.pos.add(this.vel);

    this.tiempodeVida -= 1;

    if (this.tiempodeVida <= 0) {
      this.estaMuerta = true;
    }
  }

  //Método = método display
  mostrar() {
    circle(this.pos.x, this.pos.y, 20);
  }
}
