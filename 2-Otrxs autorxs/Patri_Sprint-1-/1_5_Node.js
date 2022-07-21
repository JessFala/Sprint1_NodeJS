/* N1 Ex1 OK MAX
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/

let missatge = () => {
  setInterval(() => {
    console.log("Hola");
  }, 1000);
};
missatge();

/* N1 Ex2 OK MAX
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

let missatgeN1E2 = "Aquest és el missatge de Nadal";

missatgeN1E2 = async () => {
  try {
    await fsp.writeFile("someText.txt", missatgeN1E2);
    console.log("N1E2:");
    console.log("Arxiu creat");
  } catch (err) {
    console.error(err);
  }
};
missatgeN1E2();

/* N1 Ex3 OK MAX
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

function contFitxer(fitxer) {
  fs.readFile(fitxer, "utf8", function (err, data) {
    console.log(data);
  });
}

contFitxer("fitxerN1Ex2.txt");

/*N2 Ex1 OK MED
Crea una funció que comprimeixi el fitxer del nivell 1.*/

console.log("Nivel 2:");

const compFile = () => {
  fs.createReadStream("someText.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("someText.txt.gz"));
  console.log("File Compressed.");
};

compFile();

const showFilesFromDir = () => {
  fs.readdir("/users", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

showFilesFromDir();

/* N2 Ex2 no

Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador
utilizant Node Child Processes.*/
