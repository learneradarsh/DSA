const util = require("./util"); // imported util.js

let standard_input = process.stdin;

console.log("Enter two number");

//to take user input
let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr.push(data.toString().trim());
        if (inputArr.length == 2) {

            //method to check inputs prime, anagram, and Palindrome or not.
            if (util.Util.isAnagramAndPalindrome(inputArr[0], inputArr[1])) {
                console.log("PRIME NUMBER IS ANAGRAM AND PALINDROME");
            } else {
                console.log("NUMBER IS NOT PRIME");
            }
            process.exit();
        }
    }
});