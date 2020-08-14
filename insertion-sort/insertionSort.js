function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }

    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
