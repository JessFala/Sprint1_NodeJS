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

recursivitat(2);

/*Nivell 2 Ex 2 - 
Crea una funció que llisti per la consola 
el contingut del directori d'usuari de l'ordinador 
utilizant Node Child Processes.*/

const mostrarDir = () => {
  const { exec } = require('child_process');
  
  exec('dir', (error, stdout, stderr) => {
      if(error) {
          console.log(`Error: ${error}`)
          return
      }
      if(stderr) {
          console.log(`stderr: ${error}`);
          return
      }
      console.log(`stdout: ${stdout}`);
  });
  }

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

//Codifiquem

const codificar = () => {
  fs.readFile('exercici_1.5.txt', 'utf8', (error,data) => {
      if (error) {
          console.log(error);
      }
      let temp = Buffer.from(data).toString('base64');
      escriureArxiu('exercici_1.5_64.txt',temp);
  
      temp = Buffer.from(data).toString('hex');
      escriureArxiu('exercici_1.5_hex.txt',temp);
      });
  }

  //Encriptació dels arxius

const encriptacioArxiu = () => {
  setTimeout (() => {
      const crypto = require('crypto');
      const algorith = 'aes-192-cbc';
      const key = 'vOVH6sdmpNWjRRIqCc7rdxs0';
      const iv = crypto.randomBytes(16);
      const llegir = fs.createReadStream('exercici_1.5_64.txt');
      const llegir2 = fs.createReadStream('exercici_1.5_hex.txt');
      const encriptar = crypto.createCipheriv(algorith, key, iv);
      const escriure = fs.createWriteStream('exercici_base64_enc.txt');
      const escriure2 = fs.createWriteStream('exercici_hex_enc.txt');

llegir.pipe(encriptar).pipe(escriure);
llegir2.pipe(encriptar).pipe(escriure2);
}, 500);

setTimeout(() => {
  fs.unlinkSync('exercici_1.5_64.txt', (error) => {
      if (error) {
      console.log(error);
  }
});
  fs.unlinkSync('exercici_1.5_hex.txt', (error) => {
      if (error) {
      console.log(error);
  }
});
},1000);
  console.log('Arxius eliminats amb èxit');
}

//Desencriptar arxius per tornar a base64 i hex.

const desencriptacioArxiu = () => {
  setTimeout (() => {
      const crypto = require('crypto');
      const algorith = 'aes-192-cbc';
      const key = 'vOVH6sdmpNWjRRIqCc7rdxs0';
      const iv = crypto.randomBytes(16);
      const llegir = fs.createReadStream('exercici_base64_enc.txt');
      const llegir2 = fs.createReadStream('exercici_hex_enc.txt');
      const desencriptar = crypto.createDecipheriv(algorith, key, iv);
      const escriure = fs.createWriteStream('exercici_1.5_64.txt');
      const escriure2 = fs.createWriteStream('exercici_1.5_hex.txt');

llegir.pipe(desencriptar).pipe(escriure);
llegir2.pipe(desencriptar).pipe(escriure2);
  }, 2000);

setTimeout(() => {
  fs.unlinkSync('exercici_base64_enc.txt', (error) => {
      if (error) {
      console.log(error);
  }
});
  fs.unlinkSync('exercici_hex_enc.txt', (error) => {
      if (error) {
      console.log(error);
  }
});
},3000);
  console.log('Arxius eliminats amb èxit');
}