
/*N1 E1 OK MED
Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise
 efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a 
 paràmetre un objecte employee i retorni el seu salari.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = id => {
  return new Promise((resolve, reject) => {
      let findEmployee = employees.find(employee => employee.id === id)
      if (findEmployee) {
          resolve(findEmployee.name);
      } else {
          reject(`Posa un nombre de l'1 al 3`);
      }
  })
}

getEmployee(2)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

let getSalary = (id) => {
  return new Promise((resolve, reject) => {
      let findSalary = salaries.find(salario => salario.id === id);
      if (findSalary) {
          resolve(findSalary.salary);
      } else {
          reject('La Id no existeix');
      }
  });
};

getSalary(2)
  .then(good => console.log(good))
  .catch(err => console.log(err));

  
/* N1 E2  OK MAX
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu 
salari, usant les funcions que has definit a l'exercici anterior */

// asinFunc === asinRes
async function asinFunc(id) {
  try {
      const employee = await getEmployee(id);
      const salary = await getSalary(id);
      return console.log(`L'empleat és el : ${employee} i el seu salari és: ${salary}`);
  } catch (errorMessage) {
      console.log('Error')
  }
}
asinFunc(1);


/* N2 E1 OK MAX
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció
 resolve() després de 2 segons de la seva invocació */

 const mostrar2Secs = () => {
  const promise = new Promise((resolve) => {
      setTimeout(() => {
          resolve('Missatge després de 2 segons');
      }, 2000);
  });
  return promise;
};

const callFunction = async () => {
  try {
      const mostrar = await mostrar2Secs();
      console.log(mostrar);

  } catch (error) {
      console.log(error);
  }
};

callFunction();

/*N3 E1
Captura tots els errors possibles dels nivells 1 i 2 */
