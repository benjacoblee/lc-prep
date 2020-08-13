# Graph Traversal

Visiting/updating/checking each node in a graph.

## Use Cases

-   P2P networking
-   Web crawlers
-   Finding the "closest" recommendations
-   Shortest path problems
    -   GPS Navigation
    -   Solving mazes
    -   AI (shortest path to win the game)

## DFS (Recursive)

-   The function should accept a starting node
-   Create a list to store the end result, to be returned at the very end
-   Create an object to store visited vertices
-   Create a helper function which accepts a vertex
    -   The helper function should return early if the vertex is empty
    -   The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    -   Loop over all the values in the adjacencyList for that vertex
    -   If any of those values have not been visited, recursively invoke the helper function with that vertex
-   Invoke the helper function with the starting vertex
-   Return the result array

## DFS (Iterative)

-   The function should accept a starting node
-   Create a stack (array) to help keep track of vertices
-   Create a list to store the end result to be returned at the end
-   Create an object to store visited vertices
-   Add the starting vertex to the stack, and mark it visited
-   While the stack has something in it,
    -   Pop the next vertex from the stack
    -   If the vertex hasn't been visited yet
        -   Mark it as visited
        -   Add it to the result list
        -   Push all of its neighbors into the stack
-   Return the result array

## BFS

-   The function should accept a starting vertex
-   Create a queue (array) and place the starting vertex in it
-   Create an array to store the nodes visited
-   Create an object to store nodes visited
-   Mark the starting vertex as visited
-   Loop as long as there is anything in the queue
-   Rmove the first vertex from the queue and push it into the array
    that stores nodes visited
-   Loop over each vertex in the adjacency list for the vertex you're visitng
-   If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
