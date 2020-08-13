function bubbleSort(arr) {
    // not optimal
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

function bubbleSort(arr) {
    let swapped;
    for (let i = arr.length; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
