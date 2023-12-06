// Given an arr of size N. Find the length of longest sequence of consecutive elements.

let A = [100, 4, 3, 6, 10, 20, 11, 5, 101];
let set = new Set();
for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
}
let max = 0;
for (let key of set) {
    if (!set.has(key - 1)) {
        let len = 1;
        let i = key + 1;
        while (set.has(i)) {
            len++;
            i++;
        }
        if (len > max) max = len;
    }
}
console.log(max);