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

-   Singly Linked Lists: Each node points to the next node [Singly Linked List](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
-   Doubly Linked Lists: Each node points to the next node and the previous node [Doubly Linked List](https://reactgo.com/javascript-double-linked-list-implementation/)
-   Circular Linked Lists: Last node points to the first node or any other node before it [Circular Linked List](https://learnersbucket.com/tutorials/data-structures/circular-linked-list-implementation-in-javascript/) [Use Cases](https://stackoverflow.com/questions/3589772/why-exactly-do-we-need-a-circular-linked-list-singly-or-doubly-data-structur)
