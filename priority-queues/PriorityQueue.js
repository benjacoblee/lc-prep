class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push(new Node(value, priority));
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (left < length) {
                leftChild = this.values[left];
                if (leftChild.priority < element.priority) {
                    swap = left;
                }
            }
            if (right < length) {
                rightChild = this.values[right];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = right;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const pq = new PriorityQueue();
pq.enqueue("Exploding head", 0);
pq.enqueue("Broken arm", 2);
pq.enqueue("Light fever", 5);
pq.enqueue("Glass in foot", 3);
pq.enqueue("Covid", 1);
