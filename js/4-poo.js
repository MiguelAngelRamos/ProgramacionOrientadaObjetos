class Cliente {
  // private
  #saldo;
  // la variable privada no puede ser accedida directamente
  // por medio de una instancia

  // set y get
  constructor(){}

  setSaldo(saldo) {
    if(saldo < 0) {
      console.log('No se admite saldo negativo');
      this.#saldo = 0;
    } else {
      this.#saldo = saldo;
    }
  }

  getSaldo() {
    // codificacion
      return this.#saldo;
  }

}

const cliente1 = new Cliente();
// console.log(cliente1);

cliente1.setSaldo(-10);
console.log('Su saldo disponible es: ' + cliente1.getSaldo());
// console.log(cliente1.#nombre);







// Objetos POJO (Plain old Java object) 