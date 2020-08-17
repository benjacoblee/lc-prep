function heapSort(arr) {
    buildMaxHeap(arr);

    let last = arr.length - 1;

    while (last > 0) {
        swap(arr, 0, last);
        heapify(arr, 0, last);
        last -= 1; // last item is sorted. move one element left
    }

    return arr;
}

function buildMaxHeap(arr) {
    let i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
        heapify(arr, i, arr.length);
        i -= 1;
    }
}

function heapify(heap, i, max) {
    let index, leftChild, rightChild;
    while (i < max) {
        index = i;
        leftChild = 2 * i + 1;
        rightChild = leftChild + 1;
        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }
        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }
        if (index === i) return;
        swap(heap, i, index);
        i = index;
    }
}

function swap(arr, i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}

console.log(heapSort([3, 19, 1, 14, 8, 7]));
