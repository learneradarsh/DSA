const fs = require('fs');
let standard_input = process.stdin;

class Node {
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(){

    }
    search() {
        console.log("search");
    }
}

const list = new LinkedList();
fs.readFile(__dirname + '/some.txt', function (err, data) {
    if (err) {
        throw err;
    }
    searchElementArr = data.toString().split(',');
    console.log(searchElementArr);
});
console.log("Enter string to search:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        if (node.search()) {

        } else {
            console.log("data not found");
        }
        process.exit();
    }
});
