
class Persona {
  nombre;
  peso;
  estatura;
  edad;

  constructor( nombre, peso, estatura, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.estatura = estatura;
    this.edad = edad;
  }

  comer(){
    console.log('Alimentandose');
  }
  reir(){
    console.log('Riendose');
  }
  estudiar() {
    console.log('Estudiando');
  }
  // vamos a mostrar la información de las propiedades.
  mostrarInformacion() {
    return `${this.nombre} tiene un peso de : ${ this.peso }, su estatura es de: ${this.estatura} y su edad: ${this.edad}`;
  }
}

class Cliente extends Persona {
  rut;
  direccion;

  constructor(nombre, peso, estatura, edad, rut, direccion) {
    /* el super llama al constructor de la clase padre*/
    super(nombre, peso, estatura, edad);

    this.rut = rut;
    this.direccion = direccion;
  }

  // override (sobre escritura del método padre)
  mostrarInformacion() {
    return `El cliente ${this.nombre}, con Rut: ${this.rut} y direccion ${this.direccion}, tiene un peso de : ${ this.peso }, su estatura es de: ${this.estatura} y su edad: ${this.edad}`;
  }
}

// una instancia de cliente

const cliente1 = new Cliente("Pepito", 70, 1.78, 37, 787894447, 'New York #414');
console.log(cliente1);

console.log(cliente1.mostrarInformacion());
