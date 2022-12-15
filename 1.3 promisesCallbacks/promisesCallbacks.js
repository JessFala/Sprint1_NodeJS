/*Comentaris correcció/feedback Omar:
-Al N1 E2 has barrejat algunes coses: la funció callback no cap que ensenyi dos missatges diferents (això ho fa la principal, que ara no ho fa... li passa el paràmetre a la callback directgament)
- Mira bé els enunciats del N2, no estàs agafant com a paràmetre ni retornant les coses que es demanen!
- Un cop arreglis això el N2 E3 s'arregla sol*/

/*--------------------------------------NIVELL 1--------------------------------------
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

/*- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

const instruccions = message => console.log(message);

const esAdult = (edat, callback) => {
    if(typeof edat !== 'numero' && (edat > 0 && edat < 120)) {
        throw new Error('Entrada no vàlida. Si us plau, torna a intentar-ho.')
    }

    edat >= 18 ? callback(`Ets adult. Pots passar!`) : callback(`Ets menor d'edat. Queda't fora`);
}

/*---------------------------------------NIVELL 2---------------------------------------
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

let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let empFound = employees.find(elem => elem.id === id);
        if(empFound) {
            resolve(empFound);
        } else {
            reject("Ho sentim, l'empleatx no s'ha trobatx.");
        }
    })
} 

getEmployee(2)
.then(res => console.log(res))
.catch(err => console.log(err));

/*Nivell 2
- Exercici 2 CORREGIT  Ok !!!!!!!!!!!!
Crea una altra arrow function getSalary() similar a l'anterior 
que rebi com a paràmetre un objecte employee i retorni el seu salari.*/

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salFound = salaries.find(el => el.id === employee.id);
                if(salFound) {
                    resolve (`El salari d'aquestx treballadorx és de: ${salFound.salary}`);
                } else {
                    reject("Ho sentim, aquestx empleatx no s'ha trobatx.");
        }
    });
}
getSalary({
    id: 2,
    name: 'Bill Gates'})
    .then(res => console.log(res))
    .catch(error => console.log (error));



/*- Exercici 3  CORREGIT!!!!!!!!!!!!
Invoca la primera funció getEmployee() i després getSalary() 
niant l'execució de les dues promises de manera que 
es retorni per la consola el nom de l'empleat i el seu salari.*/

let id = 1; 

getEmployee(id)
    .then((res) => {
        getSalary(res)
        .then((salary) => {
            console.log(`EMPLOYEE NAME: ${res.name}; SALARY: ${salary}`)
    })
});


/*-----------------------------------NIVELL 3-------------------------------------------
- Exercici 1
Fixa un element catch a la invocació del nivell anterior que 
capturi qualsevol error i el mostri per la consola.*/

id = 0; 

 getEmployee(id)
 .then((res) => {
     getSalary(res)
     .then((salary) => {
         console.log(`EMPLOYEE NAME: ${res.name}; SALARY: ${salary}`)
 });
})
 .catch((error) => {
     console.log(error)
    });



