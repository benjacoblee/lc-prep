function kthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

let arr = [12, 3, 5, 7, 19];
console.log(kthSmallest(arr, 1));
