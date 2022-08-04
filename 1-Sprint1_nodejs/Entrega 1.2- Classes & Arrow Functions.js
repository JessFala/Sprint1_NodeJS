
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
Invoca-la amb diferents definicions.*/


//Funció creadora de classe:
class SuperWoman {
    constructor(){
        if (this.constructor === SuperWoman) {
            throw new Error("No es pot instanciar una classe abstracta"); //Especificació de l'error
        }
    }
    poder() {
        throw new Error("Mètode abstracte no té implementació");
    }
}

//Crea subclasse
class Heroina extends SuperWoman { 
    poder() {
        console.log('Enverino sense deixar rastre!');
    }
}

//Instàncies concretes

let villanelle = new Heroina();
villanelle.poder();
