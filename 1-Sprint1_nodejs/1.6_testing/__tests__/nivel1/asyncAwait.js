const {delayedVal, displayVal} = require('../../src/Level 1/asyncAwait.js');

describe('Test for 1.4. level 1, ex. 2', () => {
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


/* ############################ ** COMMENTS/NOTES ** ###############################################
- expect.assertions(num) verifies that a certain num of assertions are called during a test;
- Faketimers:
One of the biggest hurdles to testing global timer functions or timeouts is waiting for them to time out. Jest provides a way around this. 
Using Timer Mock, we can mock the global timer functions like setTimeout, setInterval, clearTimeout, clearTimeout, clearInterval, etc. 
These native timers aren't ideal in a testing environment because they depend on real-time to elapse. Jest can swap/mock out timers 
with functions that allow you to control the passage of time.
jest.useFakeTimers() and jest.useRealTimers() are global operations so it'll affect the other 
tests within the same file. To prevent problems:
    - call jest.useFakeTimers() before each test to reset the internal counters;
    - Then, after executing tests, call jest.useRealTimers() to then use real timers, 
    so that the faked timers do not leak across the tests.
*/