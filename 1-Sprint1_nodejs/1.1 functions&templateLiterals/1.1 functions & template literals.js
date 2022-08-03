/* N1E1: Crea una funció que mostri per consola el nom d'usuàrix en invocar-la 
passant-li el nom com a paràmetre.*/

function showName (nom){
    console.log(nom)
}
showName("Leyva");

/* N2E1: Mostra per consola el nom i cognoms de l'usuària mitjançant template literals, 
guardant-los en variables i 
referenciant-les en la impressió del missatge. */

const nom = "Leyva";
const cognom = "Can";

 console.log(`El nom de l'usuarix és ${nom} i el seu cognom és ${cognom}.`);

 /* N2E2: Invoca una funció que retorni un valor des de dins d'una template literal.*/

 function showName2(nom){
    let show = (`I'm ${nom}`);
    return show
 };
 console.log(`Hi, ${showName2('Antoñita')}`);

 /* N3E1: Crea una matriu de deu funcions i 
 emplena-la mitjançant un bucle de manera que 
 cada funció compti del 0 al 9 per la consola. 
Invoca cada funció de l'array iterativament. 
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.*/

let arrayComptar = [];

function comptar(){
    let arrayNums = [];
    for(let i=0; i<10; i++) {
        arrayNums.push(i);
    }
    console.log(arrayNums);
};

comptar();

for(let i=0; i < 10; i++){
    (comptar()); 
};


/* N3E2: Crea una funció anònima autoinvocable igualada a una variable 
que mostri per consola el nom que l'usuària ha 
rebut com a paràmetre. */

showName2= function (nom){
    console.log(nom)
}
("Leyva");



