class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(record) {
        this.data.push(record);
    }

    dequeue() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    printQueue() {
        let str = "";

        for (let i = 0; i < this.data.length; i++) {
            str += this.data[i] + " ";
        }

        return str;
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// console.log(queue.printQueue());
queue.dequeue();
// console.log(queue.printQueue());
module.exports = Queue;
