# External Sort

Required when the data is too large to store in a computer's main memory (e.g. RAM) and need to reside in slower external memory (hard drive). 

## Two Types
- Distribution sort (quick sort)
- External merge sort

Chunks of data that are small enough to fit in the main memory are read, sorted and written out to a temporary file. The sorted sub-files are then combined into a single larger file.

## Resources
-[External Sorting - GeeksforGeeks](https://www.geeksforgeeks.org/external-sorting/)
-[External Sorting - Wikipedia](https://en.wikipedia.org/wiki/External_sorting)