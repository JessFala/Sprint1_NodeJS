/* Nivell 1 Exercici 1 
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

console.log(((a, b) => a + b)(1, 2));

/* Nivell 2 Exercici 1 
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a
 valor el paràmetre rebut.*/

var func2 = (y) => {
  var myObj = { atrib1: y };
  return myObj;
};

func2("Hola");

/* Nivell 2 Exercici 2 
Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log(this.nom);
  }
}
var patricia = new Persona("Pol");
patricia.dirNom();

/*  Nivell 3 Exercici 1 
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.

Las clases abstractas se pueden definir como clases que no se pueden instanciar, es decir, cuya referencia 
de objeto no se puede crear y contiene dentro de ella, uno o más métodos abstractos.
Un método abstracto es un método que solo puede declararse pero no tiene implementación. Las clases abstractas
 deben heredarse y requieren subclases para proporcionar implementaciones para el método declarado en la clase
 abstracta.
  tanto el prototipo de la instancia de un objeto (al cual se accede mediante Object.getPrototypeOf(obj), o
  a través de la propiedad __proto__) como el prototipo que contiene el constructor (que se encuentra en la 
    propiedad prototype del constructor) hacen referencia al mismo objeto.*/

class Gat {
  // funció abstracta i ojo q no es pot instanciar, surt error
  constructor() {
    if (this.constructor === Gat) {
      throw new Error("La classe abstracta no pot ser instanciada.");
    }
  }
}
const gatPrototype = () => {
  gatet = Object.create(Gat.prototype, { constructor: { value: Gat } });
  return gatet;
};
const garfield = gatPrototype();
console.log(garfield);
console.log(gatet);
