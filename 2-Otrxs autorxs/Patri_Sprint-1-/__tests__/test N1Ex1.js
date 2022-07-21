// Crea els tests corresponents per verificar el fto de l'exercici Async / Await Nivell 1 - Exercici 1

const { mostrarAls2Secs, cridarFuncio } = require('../app/AsyncAwait-N2-E1');

const { getEmployee2, getSalary2 } = require('../app/PromisesCallbacks-N2-E3');

describe('test for search employee name with the ID', () => {
    test('Should return Linux Torvalds', async () => {
        const employee = await getEmployee(2);
        expect(employee).toBe('Bill Gates');
    })
});


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
let employee = new Object();

let getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let index_treballador = employees.findIndex(
      (employee) => employee.id === id
    );
    if (index_treballador >= 0) {
      resolve(employees[index_treballador]);
    } else {
      reject("Error, no hi ha cap dada de cap treballador");
    }
  });
};

getEmployee(1)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.error(error);
  });

let getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    let index = 0;
   

    
    for (index; index < salaries.length; index++) {
      if (salaries[index].id == employee.id) {
        resolve(salaries[index].salary);
        break;
      }
      if (index >= salaries.length) {
        reject("Empleat no trobat");
      }
    }
  });
};

let employee1 = new Object();
employee1.id = 3;
getSalary(employee1)
  .then((salary) => console.log("L'Empleat te un salari de: " + salary))
  .catch((reject) => console.error(reject));


//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

describe('test N2 E1', () => {
    test('returns promise that executes after 2 seconds', () => {
        return mostrarAls2Secs().then(promise => {
            expect(promise).toBe(promise);
        });
    });
    test('async function that calls another function', async () => {
        const callFunction = await cridarFuncio();
        expect(callFunction).toBe(callFunction);
    });
});


//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

describe('Invoke the first getEmployee function and then getSalary nesting the execution of the two promises.', () => {
    test('Return the employee that matches id 1', () => {
        return getEmployee2(1).then(employee => {
            expect(employee).toBe('Linux Torvalds');
        });
    });
    test('Return the salary that matches id 1', () => {
        return getSalary2(1).then(salari => {
            expect(salari).toBe(4000);
        });
    });
});


//TODO Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

describe("test for the async await exercise N2 E1 with Jest Fake Timers", () => {
    test('function that returns a promise that executes after 2 seconds', async () => {
        jest.useFakeTimers();
        const promise = mostrarAls2Secs();
        jest.runAllTimers();
        const promiseFunct = await promise;
        expect(promiseFunct).toBe('Aquest missatge s`ha de mostrar als 2 segons');
    });
    test('async function that calls another function', async () => {
        jest.useFakeTimers();
        const callFunction = cridarFuncio();
        jest.runAllTimers();
        const asyncFunct = await callFunction;
        expect(asyncFunct).toBe(asyncFunct);
    });
});

//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1


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

let getEmployee = (id) => {
return new Promise((resolve, reject) => {
  let index_treballador = employees.findIndex(
    (employee) => employee.id === id
  );
  if (index_treballador >= 0) {
    resolve(employees[index_treballador]);
  } else {
    reject("Error, no hi ha cap dada de cap treballador");
  }
});
};

getEmployee(1)
.then((resolve) => {
  console.log(resolve);
})
.catch((error) => {
  console.error(error);
});

let getSalary = (employee) => {
return new Promise((resolve, reject) => {
  let index = 0;
 
  for (index; index < salaries.length; index++) {
    if (salaries[index].id == employee.id) {
      resolve(salaries[index].salary);
      break
    }
    if (index >= salaries.length) {
      reject("Empleat no trobat");
    }
  }
});
};

let employee1 = new Object();
employee1.id = 3;
getSalary(employee1)
.then((salary) => console.log("L'Empleat te un salari de: " + salary))
.catch((reject) => console.error(reject));


//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1


asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds later..."), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();
//Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3


getEmployee(1)
  .then((resolve) => {
    console.log("n2e3");
    return getSalary(resolve);
  })
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));


//Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.


asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds later..."), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();
