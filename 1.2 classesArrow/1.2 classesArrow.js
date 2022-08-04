/* Nivell 1 Exercici 1 
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

console.log(((a, b) => a + b)(3, 2));

/* Nivell 2 Exercici 1 
Crea una arrow function que, rebent un paràmetre, retorni un objecte 
amb un atribut que tingui com a
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
var petra = new Persona("Petra");
petra.dirNom();

/*  Nivell 3 Exercici 1 
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.*/

// Creació classe abstracta
class SuperWoman {
  constructor() {
    if (this.constructor === SuperWoman) {
      throw new Error("Una classe abstracta no pot ser instanciada.");
    }
  }
}

//Funció creadora d'objectes
const heroina = () => {
  villanelle = Object.create(SuperWoman.prototype, { constructor: {value:SuperWoman}});
  return villanelle;
};

const afrodita = heroina();
console.log(afrodita);
console.log(villanelle);