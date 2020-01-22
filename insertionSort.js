const util = require('./util'); //imported util.js
let standard_input = process.stdin;
let inputArr = []; //to take input from user

console.log("Enter string array elements separated by space to sort:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr = data.toString().trim().split(' ');
        
        //to do insertion sort inputArr string array
        if (util.Util.insertionSortForString(inputArr) != 0) {
            console.log("String Sorted Array", util.Util.insertionSortForString(inputArr));
        } else {
            console.log("Not a valid input");
        }
        process.exit();
    }
});