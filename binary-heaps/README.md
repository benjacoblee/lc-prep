# Binary Heap

A heap is a tree-like structure where each node must be ordered based on the value of its children.

-   Min Heap: parent values are less than its children
-   Max heap: parent values are greater than its children

Each parent node can only have a maximum of two children.

A binary heap is kept as compact as possible. Each left and right node are filled before moving downwards, starting with the left node.

We can find the parent, left and right nodes with the following:

    arr[Math.floor((n - 1) / 2)]; // parent node
    arr[2n + 1] // left node
    arr[2n + 2] // right node

## Insert (Max Binary Heap)

-   Push the value into the heap
-   Bubble up:
    -   Create a variable called index which is the length of the values property - 1
    -   Create a variable called parentIndex which is the floor of (index-1)/2
    -   Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        -   Swap the value of the values element at the parentIndex with the value of the element property at the child index
        -   Set the index to be the parentIndex, and start over

## Remove (Max Binary Heap)

-   Swap the first value in the values property with the last one
-   Pop from the values property so you can return the value at the end
-   Have the new root "sink down" to the correct spot..
    -   Parent index starts at 0
    -   Find the index of the left child
    -   Find the index of the right child
    -   If the left or right child is greater than the element, swap. If both the left and right children are larger, swap with the largest child.
    -   The child index swapped to becomes the new parent index
    -   Keep looping and swapping until neither child is larger than the element
    -   Return the old root

## Resources

-   [Priority Queue](https://medium.com/swlh/binary-heaps-priority-queues-in-javascript-44d20cf0cb6e): Where higher/lower valued data bubbles to the front of queue
-   [Difference between Heaps and BSTs](https://stackoverflow.com/questions/6147242/heap-vs-binary-search-tree-bst/6147264#6147264)
