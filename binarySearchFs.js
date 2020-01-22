const fs = require('fs');
const util = require('./util'); // imported util.js
let standard_input = process.stdin;

//to take user input
let searchElementArr = [];

fs.readFile(__dirname + '/some.txt', function (err, data) {
    if (err) {
        throw err;
    }
    searchElementArr = data.toString().split(',');
});

console.log("Enter string to search:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        //to do binary search for given string
        if (util.Util.binarySearchForString(data.toString().trim(), searchElementArr)) {
            console.log("String Found");
        } else {
            console.log("String not Found");
        }
        process.exit();
    }
});
