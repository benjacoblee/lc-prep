function hash(str, arrayLen) {
    let total = 0;
    for (char of str) {
        let value = char.charCodeAt(char) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// only hashes strings
// not constant time
// not very random

function hash(str, arrayLen) {
    let total = 0;
    const prime = 37;

    for (let i = 0; i < str.length; i++) {
        total += prime * total + str.charCodeAt(i);
    }

    total %= arrayLen;

    return parseInt(total);
}

function hash(str, arrayLen) {
    let total = 0;
    let prime = 31;

    for (let i = 0; i < Math.min(str.length, 100); i++) {
        let char = str[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % arrayLen;
    }

    return total;
}

hash("pink", 13);
