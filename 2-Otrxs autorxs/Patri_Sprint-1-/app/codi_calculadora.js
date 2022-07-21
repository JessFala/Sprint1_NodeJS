
// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 


class Calculadora {
    calcularSuma = (a, b) => {

        if (a !== "nombre" || b !== "nombre")
            return "no es poden fer les operacions sense nombres";

        return a + b;
    };

    calcularResta = (a, b) => {
        if (!a) return b;
        if (!b) return a;

        return a - b;
    };
    calcularMultiplicacio = (a, b) => {

        return a * b;
    };

    calcularDivisio = (a, b) => {
        if (b === 0) return "No es pot fer l'operació entre 0";
        return a / b;
    };
}

module.exports = Calculadora;

