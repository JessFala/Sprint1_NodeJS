/* Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions. */

const { it, expect } = require("@jest/globals");
const Calculadora = require('../app/codi operacions');

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 mes -7 es igual a -2', () => {
        const resultat = calculadora.calcularSuma(5,-7 );
        expect(resultat).toBe(-2);
    });
});

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('-7 mes 2 es igual a -5', () => {
        const resultat = calculadora.calcularSuma(-7,2 );
        expect(resultat).toBe(-5);
    });
});
describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it("no es pot fer l'operacio", () => {
        const resultat = calculadora.calcularSuma('a',-7 );
        expect(resultat).toBeNaN;
    });
});

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('només has possat un paràmetre', () => {
        const resultat = calculadora.calcularSuma( 2 );
        expect(resultat).toBeNaN;
    });
});


describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it("no es pot realitzar l'operacio", () => {
        const resultat = calculadora.calcularSuma( );
        expect(resultat).toBeUndefined;
    });
});


describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 mes 5 es igual a 10', () => {
        const resultat = calculadora.calcularSuma(5, 5);
        expect(resultat).toBe(10);
    });
});

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 mes null es igual a 5', () => {
        const resultat = calculadora.calcularSuma(5,null );
        expect(resultat).toBe(5);
    });
});


describe("Calcula la resta de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 menys -10 es igual a 15', () => {
        const resultat = calculadora.calcularResta(5, -10);
        expect(resultat).toBe(15);
    });
});


describe("Calcula la resta de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('-5 menys -10 es igual a 5', () => {
        const resultat = calculadora.calcularResta(-5, -10);
        expect(resultat).toBe(5);
    });
});


describe("Calcula la resta de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('0 menys 5 es igual a -5', () => {
        const resultat = calculadora.calcularResta(0,5);
        expect(resultat).toBe(-5);
    });
});


describe("Calcula la multiplicacio de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 per -5 es igual a -25', () => {
        const resultat = calculadora.calcularMultiplicacio(5, -5);
        expect(resultat).toBe(-25);
    });
});


describe("Calcula la multiplicacio de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 per -5 es igual a 25', () => {
        const resultat = calculadora.calcularMultiplicacio(5, 5);
        expect(resultat).toBe(25);
    });
});

describe("Calcula la divisio de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 entre 0 es igual no es pot fer la divisio', () => {
        const resultat = calculadora.calcularDivisio(5, 0);
        expect(resultat).toBe(Infinity);
    });
});

describe("Calcula la divisio", () => {
    const calculadora = new Calculadora();
    it('5 entre 0 es igual no es pot fer la divisio', () => {
        const resultat = calculadora.calcularDivisio(5, null);
        expect(resultat).toBeUndefined;
    });
});

describe("Calcula la divisio", () => {
    const calculadora = new Calculadora();
    it('5 entre 0 es igual no es pot fer la divisio', () => {
        const resultat = calculadora.calcularDivisio(5, 'abd');
        expect(resultat).toBeNaN;
    });
});

describe("Calcula la divisio", () => {
    const calculadora = new Calculadora();
    it('5 entre 0 es igual no es pot fer la divisio', () => {
        const resultat = calculadora.calcularDivisio();
        expect(resultat).toBeNaN;
    });
});
