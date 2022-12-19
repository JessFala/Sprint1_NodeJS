class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`Hello, my name is ${this.name}`);
     }
}

module.exports = {
    Person
}