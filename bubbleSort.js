const util = require('./util'); // imported util.js
let standard_input = process.stdin;

//to take user input
let inputArr = [];

console.log("Enter integer array elements separated by space to sort:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr = data.toString().trim().split(' ');

        //to do bubble sorting for integeer type inputArr
        if (util.Util.bubbleSortForInt(inputArr) != 0) {
            console.log("String Sorted Array", util.Util.bubbleSortForInt(inputArr));
        } else {
            console.log("Not a valid input");
        }
        process.exit();
    }
});