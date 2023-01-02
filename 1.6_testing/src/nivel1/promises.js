//1.3. Level 2, Ex. 1 

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
    return new Promise((resolve, reject) => {
        let empFound = employees.find(elem => elem.id === id);
        if(empFound) {
            resolve(empFound);
        } else {
            reject('Sorry, employee not found.');
        }
    })
} 

getEmployee(2)
.then(res => console.log(res))
.catch(err => console.log(err));

//C => Level 2, Ex 2 

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(el => el.id == employee.id);
                if(salFound) {
                    resolve (salFound.salary); 
                } else {
                    reject('Sorry, employee not found.');
        }
    });
}

getSalary({
    id: 2,
    name: 'Bill Gates'})
    .then(res => console.log('The salary for this employee is ' + res))
    .catch(error => console.log(error));


module.exports = {
    getEmployee,
    getSalary
}

