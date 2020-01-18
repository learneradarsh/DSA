const util = require('./util');
let standard_input = process.stdin;
let inputArr = [];

console.log("Enter integer array elements separated by space to sort:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr = data.toString().trim().split(' ');
        if (util.Util.bubbleSortForInt(inputArr) != 0) {
            console.log("String Sorted Array", util.Util.insertionSortForInt(inputArr));
        } else {
            console.log("Not a valid input");
        }
        process.exit();
    }
});