// Automovil
// class declaration
class Automovil {

  ruedas;
  puertas;
  motor;

  constructor( ruedas = 0, puertas = 0, motor='') {
    this.ruedas = ruedas;
    this.puertas = puertas;
    this.motor = motor;
  }

  // Métodos como las acciones arrancar, acelerar, frenar
  encender() {
    console.log('encender Automovil');
  }

  acelerar() {
    console.log('Acelerar Automovil');
  }

  frenar() {
    console.log('Frenar');
  }

}

const auto1 = new Automovil(4,4,'electrico');
console.log(auto1);






















// class expresion
// const Automovil = class {

// }