class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class OrderedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //to add element in ol - orderedlist
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

    //to remove element from ol
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

    //to check ol is empty or not
    isEmpty() {
        if (this.head == null || this.size == 0) {
            return true;
        } else {
            return false;
        }
    }

    //to check size of ol
    size() {
        return this.size;
    }

    //to check position of element in ol
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

    //to remove last element from ol
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

    //to remove and return element at position pos
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

    //method to print elements of list
    printList(){
        let curr=this.head;
        let str="";
        while(curr){
            str = str+ curr.element + " ";
            curr=curr.next;
        }
        return str;
    }
}

//to export OrderedList Class for external use
module.exports = OrderedList;