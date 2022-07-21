/*Nivell 1
    Ex.1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

const fs = require('fs');
const escriuArxiu = () => {
fs.writeFile('test.txt', "Aquest és el missatge que s'escriurà al fitxer", (error) => {
    if(error){
        console.log(`ERROR: ${error}`);
    } else {
        console.log ('Arxiu creat!');
    }
  })
}

//escriuArxiu();*/


/*---------------------------------------------------------------------------------------------
Nivell 1
    Ex.2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

function mostraContFitxer() {
    fs.readFile('test.txt', 'utf8', (error, data) => {
      if (!error) {
      console.log(data);
    } else {
      console.log(`Error: ${error}`)
    }
  })
}
//mostraContFitxer();


/*---------------------------------------------------------------------------------------------
Nivell 1
    Ex.3
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
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);
}

//zipFile();*/

/*---------------------------------------------------------------------------------------------
Nivell 2
    Ex.1
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/

let recursion = () => {
  let i = 0
  setInterval(() => {
    console.log(`This is the message number ${i++}`);
  }, 1000)
}

//recursion()*/

/*---------------------------------------------------------------------------------------------
Nivell 2
    Ex.2
Crea una funció que llisti per la consola el contingut del directori d'usuari/a de l'ordinador 
utilizant Node Child Processes.*/

    // Creació funció ShowFiles

const showFiles = () => {
  const { exec } = require('child_process');   
  exec ('ls', () => {
    const dirUser = require('os').homedir();
    let file = fs.readdirSync(dirUser);
    console.log(`1.5 Nivell 2.Ex 2: Arxius Directori Usuària =  , '\n', ${file}`);
  })
}

//showFiles();*/

/*---------------------------------------------------------------------------------------------
Nivell 3
    Ex.1*/

  /* Apartat A)
   Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
  a partir del fitxer del nivell 1.*/

  // Function Read From File With Promise (Asynch) 
const WriteToHexBase642 = async  enteredFile => {

  const myPromise = new Promise((resolve, reject) => {
   fs.readFile(enteredFile, 'utf8', (error, fileContent) => {
    if (error != null) {
     reject(error);
     return;
    }
    // Resolve the Text Read
    resolve(fileContent);
   });
  });

  // Show Message calling myPromise
  console.log('Nivell3exercici1: Cridant la myPromise');

  // Wait for the myPromise to be finsihed
  const dataRead = await myPromise;

  // Show message myPromise finished
  console.log('Nivell3exercici1: myPromise executada tEXT = ' + dataRead);

  //converting string into buffer
  const buf = Buffer.from(dataRead, 'ascii');
  
  // Convert it into hex
  var hexvalue = buf.toString('hex');

  fs.writeFile("Hex_" + fileName, hexvalue, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log('Nivell3exercici1: File Hex saved!');
  });
  
  // Convert it into base64
  var base64value = buf.toString('base64');

  fs.writeFile('base64_' + fileName, base64value, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('Nivell3exercici1: File Base64 saved!');
  });
  
 }

  /* Apartat B) 
  Crea una funció que guardi els fitxers del punt anterior, 
  ara encripta'ls amb l'algorisme aes-192-cbc, 
  i esborra els fitxers inicials.*/

function cipherAndDeleteFile(file) {
  let data = readFile(file);
  let encrypted_data = encrypt(data);
  writeFile(`${file}.enc`, encrypted_data);
  deleteFile(file);
}
//cipherAndDeleteFile();
  
    /* Apartat C) 
    Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
     tornant a generar una còpia de l'inicial.*/

function decipherAndDeleteFile(file) {
  let encrypted_data = readFile(`${file}.enc`);
  let data = decrypt(encrypted_data);
  writeFile(file, data);
  deleteFile(`${file}.enc`);
}
//decipherAndDeleteFile();

var decrypt = (encrypted) => {
  let decipher = crypto.createDecipheriv("aes-256-cbc", ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  return decrypted + decipher.final("utf8");
};

  /* Apartat D) 
  Inclou un README amb instruccions per a l'execució de cada part.
  Nota: Arxiu independent afegit*/