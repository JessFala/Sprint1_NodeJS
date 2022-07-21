/*- Al N1 E1 tens un error que se solucionarà quan arreglis l'entrega anterior

- Al N2 no estàs fent el que es demana, fas el mateix que al N1 E2!

- El N3 estarà correcte quan arreglis els anteriors :)*/


/*Nivell 1
    Ex.1
Crea una funció asíncrona que rebi 
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
(asincrFunct(3));

/*--------------------------------------------------------------------------------------
 Nivell 1  
    Ex. 2:
Crea una nova funció asíncrona que cridi a una altra 
que retorni una Promise que efectuï la seva funció resolve() 
després de 2 segons de la seva invocació.*/

getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        foundEmployee = employees.find(employee => employee.id === id);

        if (!foundEmployee) {
            reject(`The ID ${id} doesn't exist`);
        } else {
            setTimeout(() => {
                resolve(foundEmployee);
            }, 2000);
        }
    })
}

async function asincroTimeFunct(){
    try{
    const idUserTime = await getEmployee(3);
    console.log(idUserTime);
    } catch (error){
        console.log(error);
    }
}

console.log(asincroTimeFunct(3));

/*--------------------------------------------------------------------------------------
Nivell 2    
    Ex. 1:
Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números 
i calculi la suma dels seus dobles usant la funció anterior.*/


const mostrarTwo2SecsLater = () => {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Aquest missatge s'ha de mostrar als 2 segons");
        }, 2000);
    });
    return promesa;
};

const cridaFuncio = async () => {
    try {
        const mostrar = await mostrarAls2Secs();
    } catch (err) {
        console.log(err);
    }
};

//cridaFuncio();


/*--------------------------------------------------------------------------------------
Nivell 3    
    Ex. 1:
Força i captura tants errors com puguis dels nivells 1 i 2.*/