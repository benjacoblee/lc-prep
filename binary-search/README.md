# Binary Search

-   Utilizes the Divide and Conquer approach
-   Only works on sorted arrays
-   Since it's O(logN), much faster than linear search

## Pseudocode

-   Compare the value to the middle element of a list.
-   Define a start, mid, and end
-   If the value is equal to the middle element, we've found it. Return the position of the element
-   Otherwise:
    -   While the value has not been found and the start point is less than or equal to the end point
    -   If the value is greater than the middle element, the start is now midpoint + 1.
    -   If the value is less than the middle element, the end is midpoint - 1

## Resources

-   [The Binary Search Algorithm in Javascript](https://code.tutsplus.com/tutorials/the-binary-search-algorithm-in-javascript--cms-30003)
-   [Binary Search In Javascript - GeeksforGeeks](https://www.geeksforgeeks.org/binary-search-in-javascript/)
