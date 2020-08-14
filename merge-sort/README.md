# Merge Sort

-   A combination of merging and sorting
-   Divide and conquer
-   Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

## Merging Arrays

-   In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
-   Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

## Pseudocode for merge

-   Create an empty array, take a look at the smallest values in each input array (while loop, i=0, j=0)
-   While there are still values we haven't looked at.. (i.e. i and j have not reached the end)
    -   If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    -   If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    -   Once we exhaust one array, push in all remaining values from the other array (another two while loops)

## Pseudocode for merge sort

-   Break up the array into halves until you have arrays that are empty or have one element
-   Once you have smaller sorted arrays, merge those arrays with the other sorted arrays until you are back at the full length of the array
-   Once the array has been merged back together, return the merged and sorted array

        mergeSort(10,24,76,73)
        mergeSort(10,24)
        mergeSort(10) // [10]
        mergeSort(24)// [24]
            merge(10,24) // [10,24] now we can call the right side
        mergeSort(76,73)
        mergeSort(76) // [76]
        mergeSort(73) // [73]
            merge(76,73) // [73,76]
        merge([10,24],[73,76]) // [10,24,73,76]
