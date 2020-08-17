# Heap Sort

A sorting technique that leans on binary heap structures. Because heaps always follow a specific order, we can use that to find the largest element - then, adding it to the end of the array.

## Steps

-   Build a max heap
-   Once the largest item is at the root node of the heap (and every parent is larger than its children), swap the largest value with the item at the end of the heap
-   Move the root to its correct position

## Resources

-   [Heapify All The Things](https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82)
