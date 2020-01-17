const util = require("./util");

let standard_input = process.stdin;

console.log("Enter two strings");

let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr.push(data.toString().trim());
        if (inputArr.length == 2) {
            if (util.Util.isAnagram(inputArr[0], inputArr[1])) {
                console.log("Anagram");
            } else {
                console.log("Not Anagram");
            }
            process.exit();
        }
    }
});