const fs = require('fs');
const util = require('./util');
let standard_input = process.stdin;

class Hash {

    constructor() {
        this.arr = [];
    }

    hashFunc(n) {
        n = parseInt(n);
        return parseInt(n % 11);
    }

    search(n) {
        n=parseInt(n);
        let hashIndex = this.hashFunc(n);
        if(this.arr[hashIndex] != null && this.arr[hashIndex] == n){
            return 1;
        }
        return -1;
        // while (this.arr[hashIndex] != null) {
        //     if(this.arr[hashIndex]==n){
        //         return this.arr[hashIndex];
        //     }
        //     ++hashIndex;
        // }
    }

    setHash(n, index) {
        n = parseInt(n);
        console.log("index", index, "value", n);
        this.arr[index] = n;
    }

    printHash() {
        console.log(this.arr);
    }

}

const hash = new Hash();

fs.readFile(__dirname + "/inpnumber.txt", function (err, data) {
    if (err) {
        throw err;
    }
    let inpStr = data.toString().trim();
    console.log(inpStr);
    let subString = "";
    for (let i = 0; i < inpStr.length; i++) {
        if (inpStr[i] == ",") {
            hash.setHash(subString, hash.hashFunc(subString));
            subString = "";
        } else {
            subString = subString + inpStr[i];
        }
    }
});

console.log("Enter number to search:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        if (hash.search(data.toString().trim()) != -1) {
            console.log("number found");
        } else {
            console.log("number not found");
        }
        hash.printHash();
        process.exit();
    }
});
