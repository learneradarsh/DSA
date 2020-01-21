class Queue {
    constructor(maxSize) { // maxSize denotes size of queueu
        this.front = 0;
        this.rear = 0;
        this.maxSize = 0;
        this.queue = new Array(maxSize);
    }

    //method to add item to the rear of the queue
    enqueue(item) {
        if(this.maxSize == this.rear){
            return -1;
        }else{
            this.queue[this.rear]=item;
        }
     }

    //method to remove item from the front of the queue
    dequeue() {
        //isEmpty
        if(this.front == this.rear){
            return -1;
        }else{
            for(let i=0;i<this.rear-1;i++){
                this.queue[i]=this.queue+1;
            }

            if(this.rear<this.maxSize){
                this.queue[this.rear]=0;
            }
            this.rear--
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
    printQueue(){
        return this.queue;
    }
}