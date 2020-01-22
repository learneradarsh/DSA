const util = require("./util"); // imported util.js

let standard_input = process.stdin;

console.log("Enter two strings");

//to take user input
let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr.push(data.toString().trim());
        if (inputArr.length == 2) {
            
            //to check anagram condition, isAnagram() method is in util.js
            if (util.Util.isAnagram(inputArr[0], inputArr[1])) {
                console.log("Anagram");
            } else {
                console.log("Not Anagram");
            }
            process.exit();
        }
    }
});