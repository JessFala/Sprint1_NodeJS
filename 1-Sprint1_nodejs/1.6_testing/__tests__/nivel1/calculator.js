const mathOperations = require('../src/nivel1/calculator.js');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        const input = mathOperations.sum(1, 2);
        const output = 3;
        expect(input).toBe(output);
    });
    test('substracting 5 from 10 should return 5', () => {
        expect(mathOperations.diff(10, 5)).toBe(5);
    });
    test('multiplying 2 by 11 should return 22', () => {
        expect(mathOperations.product(2, 11)).toBe(22);
    });
    test('dividing 10 by 2 should return 5', () => {
        expect(mathOperations.division(10, 2)).toBe(5);
    })
})