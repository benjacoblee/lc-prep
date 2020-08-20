function allSubsets(nums) {
    // simulate taking a number or not taking a number
    const subsets = [];
    const current = [];
    generateSubsets(0, nums, current, subsets);

    function generateSubsets(index, nums, current, subsets) {
        subsets.push(current.slice());

        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);
            generateSubsets(i + 1, nums, current, subsets);
            current.pop();
        }
    }

    return subsets;
}

console.log(allSubsets([1, 2, 3, 4, 5]));
