const { Person } = require('../../src/nivel2/n2_classPerson.js');

// creates mock 
jest.mock('../../src/Level 2/l2_classPerson.js');

 // will Clear all instances and calls to constructor and all methods:
beforeEach(() => {
    Person.mockClear();
  });
  

describe('Test for class Person from 1.2. Level 2, ex. 2', () => {

    test('Creates object by calling constructor class', () => {
        const myPerson = new Person('Kim');
        //expect(myPerson).not.toBeUndefined();
        expect(myPerson instanceof Person).toBe(true);
    });

    test('Calls the constructor method', () => {
        //shows that Person.mockClear() is working. Without it, the test would fail as toHaveBeenCalledTimes(1) 
        //would be false. In order to work, it'd be toHaveBeenCalledTimes(2);
        const myPerson = new Person('Erika');
        expect(Person).toHaveBeenCalledTimes(1);
    });

    test('calls constructor and the sayName() method on the person instance', () => {
        const myPerson = new Person();
        const spySayName = jest.spyOn(myPerson, 'sayName');
        myPerson.sayName();
        expect(spySayName).toHaveBeenCalledTimes(1);
    });
});