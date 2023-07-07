// Given an integer array of size N. Find pair (i, j), such that j > i and A[i] == A[j] && j - i is minimum

let A = [1, 2, 3, 6, 2, 1];
let ans = Number.MAX_SAFE_INTEGER;
let map = new Map();
for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
        let diff = i - map.get(A[i]);
        if (diff < ans) ans = diff;
    }
    map.set(A[i], i);
}
console.log(ans);