# Graphs

Consists of a collection of nodes and the connection between nodes.

## Uses for graphs

-   Social networks
-   Web pages and the links between them
-   Mapping
-   Recommendation engines

## Key Terms

-   Vertex (node)
-   Edge (conection between nodes)
-   Unweighted / weighted (whether or not values are assigned to edges to provide information about connections)
-   Undirected / directed (whether or not there is a direction between vertices)

## Adding a vertex

-   Write a method called addVertex, which accepts the name of the vertex
-   Adds a key to the adjacency list and sets the value to be an empty array

## Adding an edge

-   The function should accept two vertices, e.g. vertice1 and vertice2
-   The function should find the key of vertex 1 in the adjacency list and push vertex 2 to the array
-   The function should find the key of vertex 2 in the adjacency list and push vertex 1 to the array

## Removing an edge

-   The function should accept two vertices
-   The function should find the key of vertex 1 and remove vertex 2 from it
-   The function should find the key of vertex 2 and remove vertex 1 from it

## Removing a vertex

-   The function should accept a vertex to remove
-   The function should loop as long as there are other vertices in the adjacency list for that vertex
    -   In the loop, call the removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
-   Delete the key in the adjacency list for that vertex
