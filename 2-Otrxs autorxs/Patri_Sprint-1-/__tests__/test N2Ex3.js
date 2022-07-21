/* Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks N2 E3

- Exercici 3
Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

*/


const { getEmployee, getSalary
} = require('../app/AsyncAwait-N1-E1');

const { mostrarAls2Secs, cridarFuncio } = require('../app/AsyncAwait-N2-E1');

const { getEmployee2, getSalary2 } = require('../app/PromisesCallbacks-N2-E3');


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