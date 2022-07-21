let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find(employee => employee.id === id)
        if (findEmployee) {
            resolve(findEmployee.name);
        } else {
            reject(`Posa un nombre de l'1 al 3`);
        }
    })
  }
  
  getEmployee(2)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
  
  let getSalary = (id) => {
    return new Promise((resolve, reject) => {
        let findSalary = salaries.find(salario => salario.id === id);
        if (findSalary) {
            resolve(findSalary.salary);
        } else {
            reject('La Id no existeix');
        }
    });
  };
  
  getSalary(2)
    .then(good => console.log(good))
    .catch(err => console.log(err));