function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
