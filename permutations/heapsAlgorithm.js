function permutate(arr) {
    const output = [];

    function swapInPlace(arrToSwap, i, j) {
        return ([arrToSwap[i], arrToSwap[j]] = [arrToSwap[j], arrToSwap[i]]);
    }

    function generate(n, heapArr) {
        if (n === 1) {
            output.push(heapArr.slice());
            return;
        }

        generate(n - 1, heapArr);

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1);
            } else {
                swapInPlace(heapArr, 0, n - 1);
            }
            generate(n - 1, heapArr);
        }
    }

    generate(arr.length, arr.slice());

    return output;
}

console.log(permutate([1, 2, 3, 4]));
