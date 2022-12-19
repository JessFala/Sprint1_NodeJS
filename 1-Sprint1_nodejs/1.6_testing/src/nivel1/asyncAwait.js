//Source code for:  1.4, Level 1, ex. 2

const delayedVal = (pw) => {
    return new Promise((resolve, reject) => {
        if (pw === "hola") {
            setTimeout (() => {
                resolve("Password is correct. Welcome.");     
        }, 2000);
        } else {
            reject("Wrong password.");
        }
    });
}

const displayVal = async(pw) => {
    try {
        //console.log ('Please, wait. This may take a couple of seconds...');
        const login = await delayedVal(pw);
        return console.log(login);

    } catch(err) {
        console.log(err);
    }
}

//displayVal("hola");

module.exports = {
    delayedVal,
    displayVal
}