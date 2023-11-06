class Particula {
  constructor() {
    this.tamanoInicial = random(10, 50);
    this.tamano = this.tamanoInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(50, 150));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    //tiempo de vida de 10 frames por segundo

    this.pos = createVector(width / 2, height / 2);

    this.vel = createVector(0, random(1, 6));
    this.vel.rotate(random(-20, 20));

    this.g = createVector(0, -0.05);
    this.color = color(255, 100, random(50, 255), 200);
  }

  //los objetos de forma interna tienen métodos
  //Método = método update
  actualizar() {
    this.vel.add(this.g);
    this.pos.add(this.vel);

    this.tamano = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      0,
      this.tamanoInicial
    );

    this.tiempoDeVida -= 1;

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      print("ups, me morí!");
      noFill();
      //stroke(this.color);
      strokeWeight(3);
      circle(this.pos.x, this.pos.y, this.tamanoInicial);
    }
  }
  //Método = método display
  mostrar() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.tamano);
  }
}
