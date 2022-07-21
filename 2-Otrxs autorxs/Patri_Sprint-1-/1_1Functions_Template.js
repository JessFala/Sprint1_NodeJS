/* N1 E1
Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.*/

function showName(name) {
  console.log("Hi " + name);
}
showName("Patricia");

/*N2 E1
Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i 
referenciant-les en la impressió del missatge.*/

var persona = {
  nom: "Patricia",
  cognom: "González",
};

var presentacio = `Hola, sóc la ${persona.nom} ${persona.cognom}.`;

console.log(presentacio);

/*N2 E2
Invoca una funció que retorni un valor des de dins d'una template literal.*/

function showName2() {
  var name5 = "Patricia González";
  var name6 = `My name is ${name5}`;
  return name6;
}

console.log(`Hola ${showName2()}`);

/* N3 E1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 
per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 
al 9 deu vegades.*/

let arrayFunc = [];

let contar = (_) => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("fin");
};

while (arrayFunc.length < 10) {
  arrayFunc.push(contar);
}

for (let i = 0; i < 10; i++) {
  arrayFunc[i]();
}

console.log(arrayFunc);

arrayFunc = new Array(10); //crea array buida q tindrà 10 posicions

contar = (_) => {
  for (let i = 0; i < arrayFunc.length; i++) {
    console.log(i);
  }
  console.log("fin");
};

for (let i = 0; i < arrayFunc.length; i++) {
  arrayFunc[i] = contar;
}

for (let i = 0; i < 10; i++) {
  arrayFunc[i]();
}

console.log(arrayFunc);
/*N3 E2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari
rebut com a paràmetre.*/

saludar = (function (name) {
  console.log(`¡Hola, ${name}!`);
})("Patricia");
