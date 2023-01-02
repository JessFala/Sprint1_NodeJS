//1.3. Level 1, Ex. 2

const instructions = message => console.log(message);

const isAdult = (age, callback) => {
    if(typeof age !== 'number' && (age > 0 && age < 120)) {
        throw new Error('Invalid input.')
    }

    age >= 18 ? callback(`Adult. You may come in`) : callback(`You're underage. Stay outside`);
}

//isAdult(23, instructions);

module.exports = {
    instructions,
    isAdult
}