const { Citizen,Australian, German, Spaniard } = require('../../src/Level 2/l2_abstractClass');

describe('Test for 1.2. Level 3, ex. 1', () => {
    
    test('should throw error when attempting to create a direct instance of the abstract class', () => {
        expect(() => {
            new Citizen();
        }).toThrow("Abstract classes cannot be instantiated.");
        });

    test('creates instance by calling child class constructor', () => {
        const mensch = new German();
        expect(mensch instanceof German).toBe(true);
        expect(mensch instanceof Citizen).toBe(true);
    });

    
})