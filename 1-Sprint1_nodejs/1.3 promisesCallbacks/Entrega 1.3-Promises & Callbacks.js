/*Comentaris correcció/feedback Omar:
-Al N1 E2 has barrejat algunes coses: la funció callback no cap que ensenyi dos missatges diferents (això ho fa la principal, que ara no ho fa... li passa el paràmetre a la callback directgament)
- Mira bé els enunciats del N2, no estàs agafant com a paràmetre ni retornant les coses que es demanen!
- Un cop arreglis això el N2 E3 s'arregla sol*/


/*Nivell 1
- Exercici 1
Crea una funció que retorni una Promise 
que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

    function aDiosPongoPorTestigo() {
        return new Promise((resolve, reject) => { 
            let aprendoEsto = true; 
        if (aprendoEsto === true) {
            resolve("Me abro una botella de vino");
        } else {
            reject("Bebo agua como los pollos")
        }
    });
    }
    
    aDiosPongoPorTestigo()
        .then(res => {console.log(res);}) // () => {}// function then (log)()
        .catch(err => {console.log(err);})

/*-----------------------------------------------------------------------------------------
Nivell 1 CORREGIT!
- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/
/*
const identificacio = (nom, callback) => {
    if(nom === "Backender") {
        callback("Hola " + nom + "! Benvingutx a l'Organitació. Tenen un missatge per a tu.")
    } else {
        callback("Ho sentim, " + nom + ", no téns drets d'accés a l'Organització. No consta cap missatge per a vostè.")
    };

} 
//Comprovació

identificacio("Backender", (callback) => {console.log (callback)});
identificacio("Petra", (callback) => {console.log (callback)});
*/

/*-----------------------------------------------------------------------------------------
Nivell 2
- Exercici 1 CORREGIT Ok!!!!!!!!
Donats els objectes employees i salaries, crea una arrow function getEmployee() que 
retorni una Promise efectuant la cerca en l'objecte pel seu id. */

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
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
/*
let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let employeeTrobat = employees.find(elem => elem.id === id);
        if(employeeTrobat) {
            resolve(employeeTrobat.name);
        } else {
            reject(`Invalid ID. ID does not correspond to any employee`);
        }   
    })
}

getEmployee(1)
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/
/*-----------------------------------------------------------------------------------------
Nivell 2
- Exercici 2 CORREGIT  Ok !!!!!!!!!!!!
Crea una altra arrow function getSalary() similar a l'anterior 
que rebi com a paràmetre un objecte employee i retorni el seu salari.*/
/*
let getSalary = (id) => {
return new Promise ((resolve, reject) => {
    let salaryTrobat = salaries.find (employee => employee.id === id);
    if(salaryTrobat){
        resolve(salaryTrobat.salary);
    } else {
        reject("Invalid ID. Please, try again.");
    }
 })
}

getSalary(1)
    .then(res => 
        console.log(res))
    .catch(err =>
         console.log(err));


/*-----------------------------------------------------------------------------------------
Nivell 2
- Exercici 3 NO CORREGIT!!!!!!!!!!!!
Invoca la primera funció getEmployee() i després getSalary() 
niant l'execució de les dues promises de manera que 
es retorni per la consola el nom de l'empleat i el seu salari.*/

let id = 3

getEmployee(id)
.then(name => {
    console.log(`Employee with ID# ${id} is ${name}.`);
    return getSalary(id); 
}).then(sal => {
    console.log(`Employee with ID# ${id} earns a monthly salary of ${sal}.`);
}) 


/*-----------------------------------------------------------------------------------------
Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior que 
capturi qualsevol error i el mostri per la consola.*/

//let id = 3;
/*
getEmployee(id)
.then(name => {
   console.log(`Employee with ID found. Employee name is ${name}.`);
    return getSalary(id);
})
.then(salary => {
    console.log(`The salary of employee is ${salary}.`);
})
.catch(error => {
    console.log(error);
});

*/