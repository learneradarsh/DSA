let standard_input = process.stdin;

class Queue {
    constructor(maxSize) { // maxSize denotes size of queueu
        this.front = 0;
        this.rear = 0;
        this.maxSize = maxSize;
        // this.queue = new Array(maxSize);
        this.queue = [];
    }

    //method to add item to the rear of the queue
    enqueue(item) {
        if (this.maxSize == this.rear && this.rear != 0) {
            return -1;
        } else {
            this.queue[this.rear] = item;
            this.rear++;
        }
    }

    //method to remove item from the front of the queue
    dequeue() {

        //isEmpty
        if (this.front == this.rear) {
            return -1;
        } else {
            for (let i = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1];
            }

            if (this.rear < this.maxSize) {
                this.queue[this.rear] = 0;
            }
            this.rear--;
        }
    }

    //method to check queue is empty or not
    isEmpty() {
        if (this.front == this.rear) {
            return true;
        }
        return false;
    }

    //method to check size of queue
    size() {
        return this.queue.length;
    }

    //method to print queue
    printQueue() {
        let finalOutput = " ";
        for (let x of this.queue) {
            finalOutput = finalOutput + x + "\t";
        }
        return finalOutput;
    }
}

const deposit = new Queue(20);
const withdraw = new Queue(20);


function main() {
    console.log(`
    Welcome to Banking System
    -------------------------
    Select Your Option
    1. Deposit
    2. WithDraw
    3. Exit
`);
}

standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        switch (data.toString().trim()) {
            case "1":
                //for deposit
                console.log("Your Transact Id is :", new Date()); // to generate random transaction id for deposit
                if (deposit.enqueue(parseInt(Math.random() * 100000)) == -1) {
                    console.log("Size is full");
                }
                main();
                break;
            case "2":
                //for withdraw
                console.log("Your Transact Id is :", new Date());
                if (withdraw.enqueue(parseInt(Math.random() * 1000)) == -1) {
                    console.log("Size is full");
                }
                main();
                break;
            case "3":
                //for total deposit and withdraw in a day
                console.log("Total Amount Deposited:", deposit.printQueue());
                console.log("Total Amount Withdrawn:", withdraw.printQueue());
                process.exit();
            default:
                console.log("Something went wrong");
                process.exit();
        }
    }
});


main();