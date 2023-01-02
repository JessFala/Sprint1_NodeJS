const {getEmployee, getSalary} = require('../../src/nivel1/promises.js');

describe('Test for getEmployee() and getSalary() functions from 1.3, Level 2', () => {

    test('getEmployee(2) should return an employee object containing ID and name', () => {
       const input = getEmployee(2);
       const output = { id: 2, name: 'Bill Gates'};
       return expect(input).resolves.toEqual(output); //always return for promises

     });

    test('calling getSalary(2) on employee object named Bill Gates should return 1000', () => {
        const input = getSalary({ id: 2, name: 'Bill Gates'});
        const output = 1000;
        return expect(input).resolves.toEqual(output);
        });
    });
