class Cliente {
  
  #nombre;
  #saldo;
  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.#saldo = saldo;
  }

  static bienvenida() {
    return `Bienvenido(a) al cajero, ingrese su tarjeta`;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre}, su saldo es de: ${Intl.NumberFormat().format(this.#saldo)}`;
    // con separación de MILES
  }
}

const cliente1 = new Cliente('Miguel', 2000000);
// console.log(cliente1.#nombre);
// console.log(cliente1.#saldo);
console.log(cliente1.mostrarInformacion());