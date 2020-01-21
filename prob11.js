const util = require("./util");
let primeArr = [[]];
let primeSubArr = [];
function printPrimeArr() {
    for (let i = 1; i <= 10; i++) {
        let str = `${(i * 100 - 99)} - ${(i * 100)}`;
        let strLong=" "+str+"\t";
        let tempArr=primeArr[i];
        for (let j = 0; j < tempArr.length; j++) {
            strLong=strLong+"  "+tempArr[j];
        }
        console.log(`${strLong}\n`);
        
    }
}
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