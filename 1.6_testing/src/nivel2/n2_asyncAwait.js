//source code for 1.4, Level 2, Ex 1

const delayedDouble = (num) => {
    return new Promise ((resolve, reject) => {
        if (typeof num === 'number'){ 
            setTimeout(() => {
                resolve (num * 2)}, 2000);
        } else {
            reject('Error, input is not a number!');
        }
    });
}

const sumDoubles = async(num1, num2, num3) => {
    try {
    let myArr = [];
    myArr.push(num1,num2,num3);
    let sum = 0;
    
    for(const el of myArr) {
        let doubleNum = await delayedDouble(el);
        sum = sum + doubleNum;
    }
    return console.log(sum);
} catch(err) {
    console.log(err);
}
}

module.exports = {
    delayedDouble,
    sumDoubles
}