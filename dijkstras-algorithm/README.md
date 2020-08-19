# Dijksta's Algorithm

-   Uses a priority queue
-   Finds the shortest path between to vertices on a graph

## Use Cases

-   GPS (fastest route)
-   Network routing
-   Airline tickets (cheapest route based on destination)

## Approach

-   Every time we look to visit a new node, always pick the one with the smallest known distance to visit first
-   Once we've moved to the node, look at its neighbors
-   For each neighbor, calculate the distance by summing the total edges that lead to the node we're checking from the starting node
-   If the new total distance to a node is less than the previous total, store the new shorter distance for that node

## Pseudocode

-   Function should accept a starting and ending vertex
-   Create an object (distance) and set each key to be every vertex in the adjacency list with a value of infinity, except the starting vertex which should have a value of 0
-   After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
-   Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
-   Start looping as long as there is anything in the priority queue
    -   Dequeue a vertex from the priority queue
    -   If that vertex is same as the ending vertex, we are done!
    -   Otherwise loop through each value in the adjacency list at that vertex
        -   Calculate the distance to that vertex from the startinag vertex
        -   If the distance is less than what is currently stored in our distances object
            -   Update the distances object with new lower distance
            -   Update the previous object to contain that vertex
            -   Enqueue the vertex with the total distance from the start node

## Resources

-   [Dijkstra's Algorithm : A Quick Intro on How it Works
    ](https://www.youtube.com/watch?v=eFZCPlZCyIM)
-   [Graph Data Structure 4. Dijkstra’s Shortest Path Algorithm
    ](https://www.youtube.com/watch?v=pVfj6mxhdMw&t=42s)
