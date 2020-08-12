class HashTable {
    constructor(size) {
        this.data = new Array(size);
        this.numItems = 0;
    }

    hash(str, tableSize) {
        const H = 37;
        let total = 0;

        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }

        total %= tableSize;

        return parseInt(total);
    }

    resize() {
        const newTable = new Array(this.data.length * 2);
        this.data.forEach((item) => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = this.hash(key, newTable.length);
                    if (newTable[index]) {
                        newTable[index].push([key, value]);
                    } else {
                        newTable[index] = [[key, value]];
                    }
                });
            }
        });

        this.data = newTable;
    }

    get(key) {
        const index = this.hash(key, this.data.length);
        if (!this.data[index]) {
            return null;
        }
        return this.data[index].find((el) => el[0] === key)[1];
    }

    set(key, value) {
        this.numItems++;
        const loadFactor = this.numItems / this.data.length;
        if (loadFactor > 0.8) {
            this.resize();
        }
        const index = this.hash(key, this.data.length);
        if (this.data[index]) {
            this.data[index].push([key, value]);
        } else {
            this.data[index] = [[key, value]];
        }
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                this.data[i].forEach((arr) => {
                    if (keysArr.indexOf(arr[0]) < 0) {
                        keysArr.push(arr[0]);
                    }
                });
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    if (!valuesArr.includes(this.data[i][j][1])) {
                        valuesArr.push(this.data[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

const hashTable = new HashTable(3);
hashTable.set("firstName", "Ben");
hashTable.set("lastName", "Lee");
hashTable.set("country", "Singapore");
hashTable.set("hobbies", ["coding", "sleeping", "watching TV"]);
// console.log(hashTable.get("firstName"));
// console.log(hashTable.data.length);
console.log(hashTable.keys());
console.log(hashTable.values());
