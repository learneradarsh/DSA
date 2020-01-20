const fs = require("fs");
let standard_input = process.stdin;

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //method to add element in list
    add(element) {
        let node = new Node(element);
        let current = null;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //method to remove element in list
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

    //method to check whether list is empty
    isEmpty() {
        if (this.head == null || this.size == 0) {
            return true;
        } else {
            return false;
        }
    }

    //method to check size of list
    size() {
        return this.size;
    }

    //method to check the position of item in list
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

    //method to insert item in a specific position
    insert(pos, element) {
        if (pos > 0 && pos > this.size) {
            return false;
        } else {
            let node = new Node(element);
            let curr, prev;
            curr = this.head;
            if (pos == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                let counter = 0;
                while (counter < pos) {
                    counter++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    //method to remove and return last item in the list
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

    //method to remove and returns the element at position pos
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

    //method to search element in list
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
}

const list = new LinkedList();

fs.readFile(__dirname + "/some.txt", function (err, data) {
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
});

function writeOnFile(list) {
    fs.writeFile(__dirname + "/output.txt", list, function (err) {
        if (err) {
            throw err;
        }
        console.log("Data written successfully");
        process.exit();
    });
}
console.log("Enter string to search:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        // console.log("what i want", list.search(data.toString().trim()));
        if (list.search(data.toString().trim())) {
            console.log("data found");
            list.remove(data.toString().trim());
            console.log(list);
        } else {
            console.log("data not found");
            list.add(data.toString().trim());
            console.log(list);
        }
        writeOnFile(list);
    }
});
