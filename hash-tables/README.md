# Hash Tables

Stores key value pairs. Uses a hash function to compute an index where the value can be found. Has fast insertion, deletion and retrieval times but poor search times.

## What makes a good hash?

-   Fast (constant time)
-   Doesn't cluster outputs at specific indices, but distributes uniformly
-   Deterministic (input yields same output)

## Dealing with collisions

-   Separate chaining

    -   At each index in our array we store values using a more sophisticated data structure. This allows multiple key-value pairs to be stored at the same index.

            [["firstName", "john"], ["secondName", "smith"]]

-   Linear Probing
    -   With linear probing, when a collision happens, we search for the next empty slot, allowing key-value pairs to be stored at each index

## Resources

-   [Algorithms in Javascript: Hash Tables](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)
-   [Ben Awad Video Tutorial](https://www.youtube.com/watch?v=UOxTMOCTEZk)
