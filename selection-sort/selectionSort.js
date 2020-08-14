function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // assume we've already sorted the elements prior, so we'll always want to compare it to the next
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            // prevent unnecessary swaps where i happens to be the min as well
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }

    return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
