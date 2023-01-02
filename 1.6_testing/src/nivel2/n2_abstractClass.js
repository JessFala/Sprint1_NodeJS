//source code for 1.2, Level 3, ex. 1

class Citizen {
    constructor() {
      if (this.constructor == Citizen) {
        throw new Error("Abstract classes cannot be instantiated.");
      }
    }
    greet() {
      throw new Error("Abstract method has no implementation.");
    }
  }

  class Australian extends Citizen {
    greet() {
      console.log("Hello! How are you?");
    }
  }

  class German extends Citizen {
    greet() {
      console.log("Hallo! Wie geht's dir?");
    }
  }

  class Spaniard extends Citizen {
      greet() {
          console.log("Hola! Qué tal?");
      }
  }

  module.exports = {
    Citizen,
    Australian,
    German,
    Spaniard
  }