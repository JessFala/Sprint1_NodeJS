/*Nivell 2    
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
