const {delayedVal, displayVal} = require('../../src/nivel1/asyncAwait.js');

describe('Test for 1.4. nivel 1, ex. 2', () => {
    test('delayedVal("hola") should resolve after two seconds', () => {
        const input = delayedVal('hola');
        const output = "Password is correct. Welcome.";
        return expect(input).resolves.toEqual(output); 
    });

    test('delayedVal(23) should reject', () => {
        expect.assertions(1);
        const input = delayedVal('23');
        const output = "Wrong password.";
        return expect(input).rejects.toEqual(output);
    });

    test('displayVal("hola") waits 2 seconds before resolving', () => {
        //enables FakeTimers
        jest.useFakeTimers(); 
        jest.spyOn(global, 'setTimeout');
        
        displayVal("hola");
        
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
        
        //restores timers to their original behavior
        jest.useRealTimers(); 
});
        
});    


