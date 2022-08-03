/*Crea una funció asíncrona que rebi 
un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = id => {

    return new Promise((resolve, reject) =>{   // 'Promise' afegida a una funció
        let foundEmployee= employees.find(employee => employee.id === id);
        if(foundEmployee) { 
            resolve(foundEmployee.name);
        } else {
            reject(`The employee ${id} doesn't exist`);
        }
    });
}

let getSalary = id => {

    return new Promise((resolve, reject) => {
        let foundSalary = salaries.find(salary => salary.id === id);
        if(foundSalary) {
            resolve(foundSalary.salary);
        } else {
            reject(`Sorry, an employee with this ${id} ID doesn't exist. Please, try again.`);
        }
    })
}

const asincrFunct = async (id) => {

    try {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);
    return console.log(`The employee ${employee} has a salary of ${salary} €.`);
    } catch (err){
    console.log(err);
    }
}
//asincrFunct(3);

module.exports = {
    suma,
    resta,
    multiplicar,
    dividir,
    getSalary,
    getEmployee,
    funcionAsincroTime
}