
/* Comentaris correcció/feedback Omar:
-En el nivel 2 no estás mostrando el resultado de una funcion, 
sino ejecutando una función que muestra el resultado.
-En el nivel 3 consigues instancias de la clase abstracta, pero no a través de una función. 
No deberias tener que usar el "new" para conseguir instancias.*/

/*NIVELL 1 
// Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que 
sumi dos nombres.*/

console.log = (((a, b) => a + b)) (3,4)

/*------------------------------------------------------------------------------------
Nivell 2. CORREGIT!!!!!!
Ex. 1:Crea una arrow function que, rebent un paràmetre, 
retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.*/

const arrowFuncObjecte = (obj, color) => {
    
    return obj = {
        color
    }

}

arrowFuncObjecte ("bici", "vermell");

/*------------------------------------------------------------------------------------
Nivell 2.
Ex. 2: Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona {
    constructor (nom){
        this.nom=nom;
    }

 dirNom(){
    return (`El nom és ${this.nom}`);
    }
} 

let persona1 = new Persona ("Petra"); //Per instanciar
persona1.dirNom();

/*------------------------------------------------------------------------------------
Nivell 3. CORREGIT!!!!! 
Ex. 1: Escriu una funció creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions.
** Clases abstractas ** --> clases que no pueden instanciarse; es decir, su referencia 
de objeto NO puede crearse y dentro de ella contiene 1 o más métodos abstractos.
Deben heredarse!
Necesitan subclases para proporcionar implementaciones al método declarado en la clase
 abstracta.
** Método abstracto ** --> método que SOLO puede declararse, pero NO tiene implementación.
Tanto el ** prototipo de la instancia de un objeto ** (al que se accede mediante ** Object.getPrototypeOf(obj), o
a través de la propiedad __proto__** ) como el ** prototipo que contiene el constructor** (que está en la 
** propiedad prototype del constructor** ) hacen referencia al mismo objeto.*/

//Funció creadora d'objectes:

class SuperHeroe {
    constructor(){
    if (this.constructor === SuperHeroe) {
        throw new Error("No es pot instanciar una classe abstracta"); //Especificació de l'error segons
        }
    }
}

function superHeroePrototype () {  
    return(Object.create(SuperHeroe.prototype, { constructor : {valor:SuperHeroe} }));
};

const afrodita = superHeroePrototype();
batman = superHeroePrototype();
console.log(afrodita);
console.log(batman);





