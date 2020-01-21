const util = require("./util");
let primeArr = [[]];
primeArr[0][1] = '0-100';
let primeSubArr = [];
for (let i = 1; i <= 1000; i++) {
    for (let j = (i * 100 - 99); j <= (i * 100); j++) {
        if (util.Util.isPrime(i)) {
            primeSubArr.push(i);
        }
    }
    primeArr.push(primeSubArr);
    primeSubArr = [];
}

console.log(primeArr);
