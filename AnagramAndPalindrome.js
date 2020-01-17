const util = require("./util");

let standard_input = process.stdin;

console.log("Enter two number");

let inputArr = [];

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inputArr.push(data.toString().trim());
        if (inputArr.length == 2) {
            if (util.Util.isAnagramAndPalindrome(inputArr[0], inputArr[1])) {
                console.log("PRIME NUMBER IS ANAGRAM AND PALINDROME");
            } else {
                console.log("NUMBER IS NOT PRIME");
            }
            process.exit();
        }
    }
});