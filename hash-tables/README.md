# Hash Tables

Stores key value pairs. Uses a hash function to compute an index where the value can be found. Has fast insertion, deletion and retrieval times but poor search times.

The hashing function:

    hash(str, tableSize) {
        const H = 37;
        let total = 0;

        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }

        total %= tableSize;

        return parseInt(total);
    }

[Resource](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)
