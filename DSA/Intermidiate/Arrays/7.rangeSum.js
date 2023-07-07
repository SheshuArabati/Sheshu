// Given array of N elements and Q queries, for each query given L & R. 
// Calculate and print sum of all elements in range L and R.
// L and R must be included.

// BF approach
let arr = [3, 6, 5, 4, 9, 1, 2, 8, 6, 3];
let Q = 5;
let L = [3, 5, 2, 0, 4];
let R = [6, 8, 6, 4, 7];
for(let i = 0; i < Q; i++) {
    let sum = 0;
    for (let j = L[i]; j <= R[i]; j++) {
        sum += arr[j];
    }
    console.log(sum);
}

// Optimised
// let arr = [3, 6, 5, 4, 9, 1, 2, 8, 6, 3];
// let Q = 5;
// let L = [3, 5, 2, 0, 4];
// let R = [6, 8, 6, 4, 7];
let pf = [];
pf[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    pf[i] = pf[i - 1] + arr[i];
}
for (let i = 0; i < Q; i++) {
    if (L[i] == 0) console.log(pf[R[i]]);
    else console.log(pf[R[i]] - pf[L[i] - 1]);
}