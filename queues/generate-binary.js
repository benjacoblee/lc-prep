const Queue = require("./queue");

function generateBinary(n) {
    let queue = new Queue();
    let binaryArr = [];
    queue.enqueue(1);
    while (binaryArr.length < n) {
        let front = queue.dequeue().toString();
        queue.enqueue(front + "0");
        queue.enqueue(front + "1");
        binaryArr.push(front);
    }

    return binaryArr;
}

console.log(generateBinary(10));
