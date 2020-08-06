# Binary Heap

A heap is a tree-like structure where each node must be ordered based on the value of its children.

-   Min Heap: parent values are less than its children
-   Max heap: parent values are greater than its children

Each parent node can only have a maximum of two children.

We can find the parent, left and right nodes with the following:

    arr[Math.floor((i - 2) / 2)]; // parent node
    arr[2n + 1] // left node
    arr[2n + 2] // right node

## Resources

-   [Priority Queue](https://medium.com/swlh/binary-heaps-priority-queues-in-javascript-44d20cf0cb6e): Where higher/lower valued data bubbles to the front of queue
-   [Difference between Heaps and BSTs](https://stackoverflow.com/questions/6147242/heap-vs-binary-search-tree-bst/6147264#6147264)
