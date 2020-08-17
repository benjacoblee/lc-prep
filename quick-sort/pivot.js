function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = arr[startIdx];
    let swapIdx = startIdx;

    for (let i = startIdx + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, swapIdx, startIdx);
    return swapIdx;
}

function swap(arr, i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
