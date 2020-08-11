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
