const fs = require("fs");
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
      if(pos>0 && pos>this.size){
        return false;
      }else{
          let curr, prev, counter=0;
          curr=this.head;
          prev=curr;

          if(pos===0){
            this.head=curr.next;
          }else{
              while(counter<pos){
                  counter++;
                  prev=curr;
                  curr=curr.next;
              }

              prev.next=curr.next;
          }
          this.size--;

          return curr.element;
      }
  }

  //method to search element in list
  search(element) {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if (current.element === element) {
        return current.element;
      }
      count++;
      current = current.next;
    }
    return -1;
  }
}

const list = new LinkedList();
fs.readFile(__dirname + "/some.txt", function(err, data) {
  if (err) {
    throw err;
  }
  data = data.toString().split(",");

  //adding file elements to list
  for (elem of data) {
    list.add(elem.toString().trim());
    console.log(elem);
  }
});
console.log("Enter string to search:");
standard_input.on("data", function(data) {
  if (data.toString().trim() === "exit") {
    process.exit();
  } else {
    if (list.search(data.toString().trim())) {
      console.log("data found");
    } else {
      console.log("data not found");
    }
    process.exit();
  }
});
