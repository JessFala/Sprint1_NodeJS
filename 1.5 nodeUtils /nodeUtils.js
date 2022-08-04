/*Nivell 1 Ex 1 - 
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

let fs = require('fs');

const escriuArxiu = () => {
fs.writeFile('test.txt', `In Spain we say "it's amargura"
In Spain we say "ay, me desangro"
In Spain we say "qué coño hago"
In Spain we say "joder qué largo"
In Spain we call it soledad. 
In Spain we don't know where to go
In Spain our feeling are so strong
Sometimes our hearts look like bombs
Bombs, bombs, bombs, bombs, bombs, bombs" by Rigoberta Vandini`, (error) => {
  if(error) {
    console.log(`ERROR: ${error}`);
  } else {
    console.log('Fitxer creat');
  }
});
}
//escriuArxiu();

/*Nivell 1 Ex 2 - 
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

const llegirArxiu = () => {
fs.readFile('test.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  } else {
  console.log(data);
  }
}); 
}
//llegirArxiu(); 


/* Nivell 1 Ex 3 - 
Crea una funció que comprimeixi el fitxer del nivell 1.*/

const zipFile = () => {
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('test.txt'),
  zlib.createGzip(),
  fs.createWriteStream('test.txt.gz'),
  (err) => {
    if (err) {
      console.error('Uups! Alguna cosa no ha anat bé!', err);
    } else {
      console.log('Fet!');
    }
  }
);
}
//zipFile();

/*Nivell 2 Ex 1 - 
Crea una funció que imprimeixi recursivament un missatge per la consola 
amb demores d'un segon.*/

const recursivitat = (num) => {
    let missatge = `Queden ${num} segons per finalitzar`;
    setTimeout(() => {
        if(num === 0){
            console.log('Finalitzat amb exit!')
            return;
        }
        if(num > 0){
            console.log(missatge)
        return recursivitat(num -1);
        }
    },1000);
}

//recursivitat();

/*Nivell 2 Ex 2 - 
Crea una funció que llisti per la consola 
el contingut del directori d'usuari de l'ordinador 
utilizant Node Child Processes.*/

const subprocess = () => {
  exec('dir', (err, stdout, stderr) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    if (stderr) {
      console.log('Standard Error: ', stderr);
      return;
    }
    console.log(stdout);
  })
}
//subprocess(); 

//Nivell 3 - Ex 1 - 
/*Crea una funció que creï dos fitxers 
codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, 
ara encriptats amb l'algorisme aes-192-cbc i 
esborri els fitxers inicials.
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. */