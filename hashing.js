const fs = require('fs');
const OrderedList = require('./orderedlistUtil');
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
        n = parseInt(n);
        let hashIndex = this.hashFunc(n);
        let list = new OrderedList();
        list = this.arr[hashIndex];
        if (list != null) {
            if (list.search(n)) {
                return 1;
            }
        }
        return -1;
    }

    setHash(n, index) {
        let list = new OrderedList();
        n = parseInt(n);
        console.log("index", index, "value", n);
        list = this.arr[index];
        if (list == null) {
            let list = new OrderedList();
            list.add(n);
            this.arr[index] = list;
        } else {
            list.add(n);
            this.arr[index] = list;

        }
    }

    deleteHash(n) {
        let list = new OrderedList();
        n = parseInt(n);
        let index = this.hashFunc(n);
        list = this.arr[index];
        if (list != null) {
            list.remove(n);
            this.arr[index] = list;
            return 1;
        } else {
            return -1;
        }
    }

    printHash() {
        let list = new OrderedList();
        let str = ""
        for (let i = 0; i < this.arr.length; i++) {
            if (list = this.arr[i]) {
                str = str + list.printList() + "\n";
            }
        }
        return str;
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
function writeOnFile(outputStr) {
    fs.writeFile(__dirname + "/outputNum.txt", outputStr, function (err) {
        if (err) {
            throw err;
        }
        console.log("Data written successfully");
        process.exit();
    });
}
console.log("Enter number to search:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        if (hash.search(data.toString().trim()) != -1) {
            console.log("number found");
            hash.deleteHash(data.toString().trim());
        } else {
            let inp = data.toString().trim();
            console.log("number not found");
            hash.setHash(inp, hash.hashFunc(inp));
            // hash.printHash();
        }
        writeOnFile(hash.printHash());
    }
});
