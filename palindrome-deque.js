let standard_input = process.stdin;

class Dequeue {

    constructor(maxSize) {
        this.front = -1;
        this.rear = 0;
        this.maxSize = maxSize;
        // this.queue = new Array(maxSize);
        this.queue = [];
    }

    //method to check dequeue is full or not
    isFull() {
        return ((this.front == 0 && this.rear == this.maxSize - 1) ||
            this.front == this.rear + 1);
    }

    //method to check dequeue is empty or not
    isEmpty() {
        if (this.front == -1) {
            return true;
        }
        return false;
    }

    //method to add item in front
    addFront(item) {
        if (this.isFull()) {
            return -1;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        } else if (this.front == 0) {
            this.front = this.maxSize - 1;
        } else {
            this.front = this.front - 1;
        }
        this.queue[this.front] = item;
    }

    //method to add item to read
    addRear(item) {
        if (this.isFull()) {
            return -1;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        } else if (this.rear == this.maxSize - 1) {
            this.rear = 0;
        } else {
            this.rear = this.rear + 1;
        }
        this.queue[this.rear] = item;
    }

    //method to remove item from front
    removeFront() {
        let retVal;
        if (this.isEmpty()) {
            return -1;
        }

        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            retVal=this.queue[this.front];
            // console.log("returned front",this.queue[this.front]);
            if (this.front == this.maxSize - 1) {
                this.front = 0;
            } else {
                this.front = this.front + 1;
            }
        }
        return retVal;
    }

    //method to remove item from read
    removeRear() {
        let retVal;
        if (this.isEmpty()) {
            return -1;
        }
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        } else if (this.rear == 0) {
            this.rear = this.maxSize - 1;
        } else {
            retVal=this.queue[this.rear];
            // console.log("returned read",this.queue[this.rear]);
            this.rear = this.rear - 1;
        }
        return retVal;
    }

    //method to check the size of dequeue
    size() {
        return this.queue.length;
    }

    //method to print dequeu
    printdeq() {
        console.log(this.queue);
    }

}

const deq = new Dequeue(20);

console.log("Enter String to check it is palindrome or not");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        data = data.toString().trim();
        data.split("").forEach(e => {
            deq.addRear(e);
        });
        for(let i=0;i<parseInt(deq.size()/2);i++){
            if(deq.removeFront() == deq.removeRear()){
                console.clear();
                console.log("palindrome");
            }else{
                console.clear();
               console.log("non-palindrome"); 
            }
        }
        process.exit();
    }
});