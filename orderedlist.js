const fs = require("fs");
let standard_input = process.stdin;

/**
 * @class
 * @classdesc Having Node structure.
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

/**
 * @class
 * @classdesc Having methods for Ordered List to perform add, remove, isEmpty, size, search, printList and pop.
 */
class OrderedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * to add element in ol - orderedlist
     * @param  {} element
     */
    add(element) {
        let node = new Node(element);
        let current = null;
        if (this.head == null || this.head.element >= node.element) {
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null && current.next.element < node.element) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }
    /**
     * to remove element from ol
     * @param  {} element
     */
    remove(element) {
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
        }
        return -1;
    }

    /**
     * to check ol is empty or not
     */
    isEmpty() {
        if (this.head == null || this.size == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * to check size of ol
     */
    size() {
        return this.size;
    }

    /**
     * to check position of element in ol
     * @param  {} element
     */
    index(element) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }
    }

    /**
     * to remove last element from ol
     */
    pop() {
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
        }
        return -1;
    }
    
    /**
     * to remove and return element at position pos
     * @param  {} pos
     */
    pop(pos) {
        if (pos > 0 && pos > this.size) {
            return false;
        } else {
            let curr,
                prev,
                counter = 0;
            curr = this.head;
            prev = curr;

            if (pos === 0) {
                this.head = curr.next;
            } else {
                while (counter < pos) {
                    counter++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }
    
    /**
     * method to search element in list
     * @param  {} element
     */
    search(element) {
        let current = this.head;
        while (current != null) {
            if (current.element == element) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    /**
     * method to print elements of list
     */
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str = str + curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}

const list = new OrderedList();

fs.readFile(__dirname + "/inpnumber.txt", function (err, data) {
    if (err) {
        throw err;
    }
    data = data.toString().trim();
    //adding file elements to list
    let subString = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i] == ",") {
            list.add(subString);
            subString = "";
        } else {
            subString = subString + data[i];
        }
    }
    console.log(list);
});

//method to write outputStr on file
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
        // console.log("what i want", list.search(data.toString().trim()));
        if (list.search(data.toString().trim())) {
            console.log("data found");
            list.remove(data.toString().trim());
            console.log(list.printList());
        } else {
            console.log("data not found");
            list.add(data.toString().trim());
            console.log(list.printList());
        }
        writeOnFile(list.printList());
    }
});

