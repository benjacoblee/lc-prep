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

## [DFS Preorder (Iterative)](https://www.geeksforgeeks.org/iterative-preorder-traversal/)

-   Create an empty stack and push root node to stack
-   While the stack is not empty:
    -   Pop an item from the stack
    -   Push the right child of popped item to the stack
    -   Push the left child of popped item to the stack

## DFS Postorder (Recursive)

-   Create a variable to store the values of the node visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node
    -   Push the value of the node to a variable that stores visited values
    -   Invoke the helper function with the current variable
-   Return the array of values

## [DFS Postorder (Iterative)](https://www.geeksforgeeks.org/iterative-postorder-traversal/?ref=lbp)

-   Create two empty stacks
-   Initialize the root as the current node and push it to the first stack
-   While the first stack is not empty:
    -   Set the current node to the popped value of the first stack
    -   Push it to the second stack
    -   If there is a left and right property of the current node, push both to the first stack

## DFS Inorder (Recursive)

-   Create a variable to store the values of the node visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   Push the value of the node to a variable that stores visited values
    -   If the node has a right property, call the helper function with the right property on the node
    -   Invoke the helper function with the current variable
-   Return the array of values

## [DFS Inorder (Iterative)](https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/)

-   Create an empty stack
-   Initialize the root as the current node
-   While true:
    -   If there is a current node, push it to the stack and set current to current.left
    -   Else, while the stack is not empty, pop an item off the stack and set current to current.right

## When to use BFS/DFS?

If a tree is very wide, a breadth-first search consumes more memory due to storage of values in the queue.

When using an inorder search, elements end up in a sorted order.

Using preorder can help to clone/reconstruct an existing tree.
