/*Comentaris Omar: Vale, Jess! Aun tiene algunos problemas:

- TODO en el package.json falta añadir jest para que no haya que instalarlo a mano (puede que a ti no te haga falta si lo tienes instalado globalmente)

- TODO los tests fallan por la ruta del require del app.js (que està una carpeta más arriba)

- TODO a partir de ahi hay crashean varias cosas: algun parentesis antes de tiempo, tests dentro de tests...

-TODO Ejecutalo y echale un ojo, que creo que has modificado cosas y no las has probado del todo ;)*/

//Arxius amb les funcions de les que farem tests.

//Nivell 1 
//A. Arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//B. Arxiu amb les funcions a testar per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1.
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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
        let empFound = employees.find(elem => elem.id === id); 
        if(empFound) { 
            resolve(empFound); 
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
} 

let getSalary = employee => { 
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(salary => salary.id === employee.id);  
        if(salFound) {
            resolve(salFound);
        } else {
            reject("Invalid ID. Please, try again.");
        }
    })
}

let asyncFunction = async (id) => {
    try {
        let empId = await getEmployee(id);
        let empSalary = await getSalary(empId); 
        console.log(empSalary)
    } catch(err) {
        console.log(err);
    }

}

//C. Arxiu amb les funcions corresponents al Nivell 1, Ex 2

const functionSTO = () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('I am being executed after 3 seconds');
        }, 3000);
    });
    return promise1;
};

const callFn = async () => {
    try {
        const mostrar = await functionSTO();
    } catch (err) {
        console.log(err);
    }
};

 //Exports

 module.exports = {
    add,
    substract,
    multiply,
    divide,
    getSalary,
    getEmployee,
    asyncFunction
}