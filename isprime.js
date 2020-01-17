const util = require("./util");

let standard_input = process.stdin;

console.log("Enter a number");

let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        if(util.Util.isPrime(data)){
            console.log("PRIME");
        }else{
            console.log("NON-PRIME");
        }
        process.exit();
    }
});