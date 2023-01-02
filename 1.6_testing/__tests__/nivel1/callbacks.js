//const {instructions, trafficLight} = require('../src/callbacks.js');
const { instructions, isAdult } = require('../../src/Level 1/callbacks');

describe('Test for functions in 1.3 Level 1, ex.2', () => {
  test('instructions("hello") should log the message hello to the console', () => {
    //check mock to ensure that the console.log receives the right parameter   
    console.log = jest.fn(); 
    // call instructions(); otherwise, console.log() is never invoked.
    instructions('hello'); 
    // The first argument of the first call to the function was 'hello'
    expect(console.log).toHaveBeenCalledWith('hello'); 
    });
  
  test('isAdult(23, instructions) should log the messge "Adult..."', done => {
    const callback = data => {
      expect(data).toBe(`Adult. You may come in`);
      done();
    }

    isAdult(23, callback);
  });

  test('isAdult(15, instructions) should log the messge "You are underage..."', done => {
    const callback = data => {
      expect(data).toBe(`You're underage. Stay outside`);
      done();
    }

    isAdult(15, callback);
  });
  
});
    
  /* => COMMENTS/NOTES
  Instead of putting the test in a function with an empty argument, we use a single argument: done. 
  Jest will wait until the done() callback is called before finishing the test.
  */