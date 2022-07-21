/*Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

Nivell 2
- Exercici 1
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció 
resolve() després de 2 segons de la seva invocació*/

const { getEmployee, getSalary
} = require('../app/AsyncAwait-N1-E1');

const { mostrarAls2Secs, cridarFuncio } = require('../app/AsyncAwait-N2-E1');

const { getEmployee2, getSalary2 } = require('../app/PromisesCallbacks-N2-E3');

// Nivell 1 ⭐️:

//TODO Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands.Testeja la correcta execució d'aquestes funcions. [x]

describe('test for addition', () => {
    test('1 + 2 is 3', () => {
        expect(addition(1, 2)).toBe(3)
    });
    test('3 + 5 is 8', () => {
        expect(addition(3, 5)).toBe(8)
    });
});

describe('test for substraction', () => {
    test('6 - 3 is 3', () => {
        expect(substraction(6, 3)).toBe(3)
    });
    test('4 - 3 is 1', () => {
        expect(substraction(4, 3)).toBe(1)
    });
});

describe('test for multiplication', () => {
    test('5 * 3 is 15', () => {
        expect(multiplication(5, 3)).toBe(15)
    });
    test('7 * 2 is 14', () => {
        expect(multiplication(8, 2)).toBe(16)
    });
});

describe('test for division', () => {
    test('8 / 2 is 4', () => {
        expect(division(8, 2)).toBe(4)
    });
    test('10 / 5 is 2', () => {
        expect(division(10, 5)).toBe(2)
    });
});


//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1 [x]

describe('test for search employee name with the ID', () => {
    test('Should return Linux Torvalds', async () => {
        const employee = await getEmployee(1)
        expect(employee).toBe('Linux Torvalds')
    })
});

//TODO Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

describe('test for the async await exercise N2 E1', () => {
    test('function that returns a promise that executes after 2 seconds', () => {
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