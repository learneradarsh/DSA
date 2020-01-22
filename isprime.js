const util = require("./util"); //imported util.js

let standard_input = process.stdin;

console.log("Enter a number");

let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        //to check data is prime number or not
        if(util.Util.isPrime(data)){
            console.log("PRIME");
        }else{
            console.log("NON-PRIME");
        }
        process.exit();
    }
});