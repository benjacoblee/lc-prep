# Tree Traversal

The operation of visiting every node once.

-   Breadth-first search
-   Depth-first search (Inorder, preorder, postorder)

## BFS (Iterative)

-   Create a queue (array). A variable tracks the nodes visited [10,6,15....]
-   Place root node in queue
-   Loop as long as there are items in the queue
    -   Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    -   If there is a left property on the node dequeued, add it to the queue
    -   If there is a right property on the node dequeued, add it to the queue

## DFS Preorder (Recursive)

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function that accepts a node
    -   Push the value of the node to a variable that stores visited values
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node

## DFS Postorder (Recursive)

-   Create a variable to store the values of the node visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node
    -   Push the value of the node to a variable that stores visited values
    -   Invoke the helper function with the current variable
-   Return the array of values

## DFS Inorder (Recursive)

-   Create a variable to store the values of the node visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   Push the value of the node to a variable that stores visited values
    -   If the node has a right property, call the helper function with the right property on the node
    -   Invoke the helper function with the current variable
-   Return the array of values

## When to use BFS/DFS?

If a tree is very wide, a breadth-first search consumes more memory due to storage of values in the queue.

When using an inorder search, elements end up in a sorted order.

Using preorder can help to clone/reconstruct an existing tree.
