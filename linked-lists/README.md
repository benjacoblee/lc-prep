# Linked Lists

Linked lists are a data structure similar to an array.

However, unlike an array, values are not stored in a particular place in memory or index. Instead, each element is an object that points to the next object in the list. Theses objects are commonly known as nodes.

The entry point of a linked list is called a head. The last node on a list points to null.

## Advantages

-   Can add items without re-organizing the entire data structure

## Disadvantages

-   Searching/accessing is slow as there is no indexing
-   Allocation of memory is greatedr as we need to store pointers

## Types of Linked Lists

-   Singly Linked Lists: Each node points to the next node
-   Doubly Linked Lists: Each node points to the next node and the previous node
-   Circular Linked Lists: Last node points to the first node or any other node before it
