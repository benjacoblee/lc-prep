# Quick Sort

-   Like merge sort, exploits the fact that arrays of 0 or 1 length are always sorted
-   Works by selecting one number (the "pivot") and finding the index where the pivot should end up in the sorted array
-   Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## Pivot Helper

-   Given an array, the helper function should designate a pivot
-   It should rearrange elements in the array so that all elements less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
-   The order of elements on either side of the pivot doesn't matter
-   The helper should do this in place, not create a new array
-   When complete, the helper should return the index of the pivot

## Picking a Pivot

-   Ideally, the pivot should be chosen so that it's the median in the data set

## Pseudocode for pivot

-   It will help to accept three arguments - the array, start index, and an end index (0, array.length - 1)
-   Grab the pivot from the start of the array
-   Store the current pivot index in a variable (this will track where the pivot eventually ends up)
-   Loop through the array from the start to the end
    -   If the pivot's value is greater than the current element's value, increment the pivot index variable and swap the current element with the element at the pivot index
-   Swap the starting element with the pivot index
-   Return the pivot index

## Pseudocode for quick sort

-   Call pivot function on array
-   When the helper returns the updated pivot index, recursively call the pivot helper on the left subarray to the left of that index, and the subarray to the right of that index
-   The base case occurs when the subarray is called with less than two elements
