// Iterative solution
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let position = -1;
    let found = false;
    let midPoint;

    while (!found && start <= end) {
        midPoint = Math.floor((start + end) / 2);
        if (arr[midPoint] === val) {
            found = true;
            position = midPoint;
        } else if (val > arr[midPoint]) {
            start = midPoint + 1;
        } else {
            end = midPoint - 1;
        }
    }

    return position;
}

// Recusive solution
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    let midPoint = Math.floor((start + end) / 2);

    if (arr[midPoint] === val) return midPoint;
    if (arr[midPoint] > val) {
        return binarySearch(arr, val, start, midPoint - 1);
    } else {
        return binarySearch(arr, val, midPoint + 1, end);
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(nums, 1));
