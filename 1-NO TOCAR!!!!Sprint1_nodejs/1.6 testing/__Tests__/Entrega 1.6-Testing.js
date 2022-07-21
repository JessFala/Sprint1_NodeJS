/*Nivell 1
    Ex.1
 /* Apartat A)
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions.*/

    //Tests funcions:
const calyEmple = require("./app.js")

test('sumar 1 + 2 es igual a 3', () => {
    expect(calyEmple.suma(1, 2)).toBe(3);
});

test('restar 2 - 1 es igual a 1', () => {
    expect(calyEmple.resta(2, 1)).toBe(1);
});

test('multiplicar 1 * 2 es igual a 2', () => {
  expect(calyEmple.multiplicar(1, 2)).toBe(2);
});

test('dividir 2 / 1 es igual a 2', () => {
  expect(calyEmple.dividir(2, 1)).toBe(2);
});

/* Apartat B)
Crea els tests corresponents per verificar el funcionament 
de l'exercici Async / Await Nivell 1 - Exercici 1.*/

test('Test nivell 1 getEmployee amb ID:2 hauria de retornar Bill Gates', () => {
    return calyEmple.getEmployee(2).then(data => {
        expect(data).toEqual({ id: 2, name: 'Bill Gates'})
        })
    }
  )
  
test("Test nivell 1 getSalary amb ID: 2, name: 'Bill Gates'} hauria de retornar 1000",() => {
    return calyEmple.getSalary({ id: 2, name: 'Bill Gates'}).then(data => {
        expect(data.salary).toBe(1000)
        })
    }
  )

/* Apartat C)
Crea els tests corresponents per verificar el funcionament 
de l'exercici Async / Await Nivell 2 - Exercici 1.*/

test('Hauria de retornar ID:1, name: Linux Torvalds després de 2 segons"', async () => {
    await calyEmple.getEmployee(2).then(data=>{
        expect(data).toEqual({ id: 2, name: 'Bill Gates'})
    })
  })

/* Apartat D)
Crea els tests corresponents per verificar el funcionament de l'exercici 
Promises & Callbacks Nivell 2 - Exercici 3.*/

test('Es dona la ID:2 a getEmployee que retorna un objecte rebut per getSalary i retorna 1000'), () => {
    return calyEmple.getEmployee(2).then(obj => calyEmple.getSalary(obj)).then( data => {
        expect(data.salary).toBe(1000)
    })
  }

/* Apartat E)
Verifica mitjançant tests l'execució 
de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.*/
    
testAsynAwait("Test per verificar l'execució de l'exercici N2 E1 amb Jest Fake Timers", () => {
    test("Funció que retorna una promise que s'execita després de dos seg", async () => {
        jest.useFakeTimers();
        const promise = mostrarAls2Secs();
        jest.runAllTimers();
        const promiseFunct = await promise;
        expect(promiseFunct).toBe("Aquest missatge s'ha de mostrar als 2 segons");
    });
    test('Funció asíncrona que crida altres funcions', async () => {
        jest.useFakeTimers();
        const callFunction = cridaFuncio();
        jest.runAllTimers();
        const asyncFunct = await callFunction;
        expect(asyncFunct).toBe(asyncFunct);
    });
});

/*---------------------------------------------------------------------------------------------
Nivell 2
    Ex.1
Apartat A) 
Crea un mock que comprovi les crides 
al constructor de la classe Persona i al seu mètode decirNombre 
en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2*/

const Persona = require('./clase.js')
jest.mock('./clase.js')

test('Testeja/comprova que una instància de la classe "persona" ha cridat la seva respectiva classe',() => {
  const person1 = new Persona()
  expect(Persona).toHaveBeenCalledTimes(1)
})

/*Apartat B) 
Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.*/

test('Testeja/comprova que crida correctament el mètode "decirNombre" de la instància',() => {
  const person2 = new Persona()
  person2.decirNombre()
  const mockPersonaInstance = Persona.mock.instances[1]
  const mockdirNom = mockPersonaInstance.dirNom
  expect(mockdirNom).toHaveBeenCalledTimes(1)
})

/*---------------------------------------------------------------------------------------------
Nivell 3
    Ex.1
Apartat A) 
Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.*/


const pe = require('./functEmple_json.js')
jest.mock('./employeeYsalary.json',()=>({
    employees : [
        {
            id: 1,
            name: 'Linux Torvalds'
        }, {
            id: 2,
            name: 'Bill Gates'
        },{
            id: 3,
            name: 'Jeff Bezos'
        }],
    salaries : [
        {
            id: 1,
            salary: 4000
        }, {
            id: 2,
            salary: 1000
        }, {
            id: 3,
            salary: 2000
        }]
    })
)

/*Apartat B) 
Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, 
crea un test que forci errors de funcionament i 
verifiqui que l'error llançat per la funció és l'esperat.*/

test("Prova de consum d'arxius JSON amb getEmployee",() => {
    
    return pe.getEmployee(2).then(data => {
        expect(data).toEqual({ id: 2, name: 'Bill Gates'})
        })
})
it("Prova de consum d'arxius JSON amb getSalary",() => {

    return pe.getSalary({ id: 2, name: 'Bill Gates'}).then(data=>{
        expect(data.salary).toBe(1000)
    })
})