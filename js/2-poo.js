// class declaration
// BANCO JAVASCRIPT
class Cliente {
  rut;
  nombre;
  saldo;

  constructor(rut, nombre, saldo) {
    this.rut = rut;
    this.nombre = nombre;
    this.saldo = saldo;
  }

  static bienvenida() {
    return `Bienvenido(a) al cajero, ingrese su tarjeta`;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, su saldo es de: ${Intl.NumberFormat().format(this.saldo)}`;
    // con separación de MILES
  }
}
// llamando al método static
console.log(Cliente.bienvenida());

// Clienta
const cliente1 = new Cliente(154547841, 'Geraldine', 2000000);
console.log(cliente1.mostrarInformacion());
