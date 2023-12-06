// Given an array of integers. Find the length of longest subarr with sum = 0

let A = [2, 2, 1, -3, 4, 3, 1, -8, 6, -2, 1];
let map = new Map();
map.set(0, -1);
let sum = 0;
let ans = 0;
for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (map.has(sum)) {
        let len = i - map.get(sum);
        if (len > ans) ans = len;
    } else {
        map.set(sum, i);
    }
}
console.log(ans);