const util = require("./util"); //imported util.js
let primeArr = [[]]; //2D array to store primeArr
let primeSubArr = [];

//function to print Prime numbers 2D array
function printPrimeArr() {
    for (let i = 1; i <= 10; i++) {
        let str = `${(i * 100 - 99)} - ${(i * 100)}`;
        let strLong = " " + str + "\t";
        let tempArr = primeArr[i];
        for (let j = 0; j < tempArr.length; j++) {
            strLong = strLong + "  " + tempArr[j];
        }
        console.log(`${strLong}\n`);
    }
}

//to check prime numbers from 1-1000 and push into primeArr
for (let i = 0; i < 10; i++) {
    for (let j = ((i + 1) * 100 - 99); j <= ((i + 1) * 100); j++) {
        if (util.Util.isPrime(j)) {
            primeSubArr.push(j);
        }
    }
    primeArr.push(primeSubArr);
    primeSubArr = [];
}

printPrimeArr();