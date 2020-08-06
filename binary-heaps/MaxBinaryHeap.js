class MaxBinaryHeap {
    constructor() {
        this.data = [];
    }

    insert(value) {
        this.data.push(value);
        this.bubbleUp();
        return this.data;
    }

    swap(childIndex, parentIndex) {
        let temp = this.data[childIndex];
        this.data[childIndex] = this.data[parentIndex];
        this.data[parentIndex] = temp;
        return this.data;
    }

    bubbleUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.data[parentIndex] < this.data[index]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
        return 0;
    }

    bubbleDown() {
        let parentIndex = 0;
        const length = this.data.length;
        const element = this.data[0];

        while (true) {
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            let leftChild, rightChild;
            let indexToSwap = null;

            if (leftChildIndex < length) {
                leftChild = this.data[leftChildIndex];
                if (leftChild > element) {
                    indexToSwap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.data[rightChildIndex];
                if (
                    (rightChild > element && indexToSwap === null) ||
                    (rightChild > leftChild && indexToSwap !== null)
                ) {
                    indexToSwap = rightChildIndex;
                }
            }

            if (indexToSwap === null) break;

            this.swap(parentIndex, indexToSwap);
            parentIndex = indexToSwap;
        }
    }

    removeMax() {
        this.swap(0, this.data.length - 1);
        let poppedValue = this.data.pop();
        if (this.data.length > 1) {
            this.bubbleDown();
        }
        return poppedValue;
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(17);
maxBinaryHeap.insert(3);
maxBinaryHeap.insert(7);
maxBinaryHeap.insert(19);
maxBinaryHeap.insert(36);
maxBinaryHeap.insert(100);
maxBinaryHeap.insert(1);
maxBinaryHeap.insert(25);
maxBinaryHeap.removeMax();
console.log(maxBinaryHeap.data);
