// Given array elements and Q queries. For each query given L and R.
// Calculate and print no. of even numbers in given range [L R].

// BF approach
let arr = [2, 4, 3, 7, 9, 8, 6, 3, 4, 9];
let Q = 4;
let L = [4, 3, 2, 0];
let R = [8, 9, 7, 4];
for (let i = 0; i < Q; i++) {
    let count = 0;
    for (let j = L[i]; j <= R[i]; j++) {
        if (arr[j] % 2 == 0) count++;
    }
    console.log(count);
}

// Optimised
// let arr = [2, 4, 3, 7, 9, 8, 6, 3, 4, 9];
// let Q = 4;
// let L = [4, 3, 2, 0];
// let R = [8, 9, 7, 4];
if(arr[0] % 2 == 0) arr[0] = 1;
else arr[0] = 0;
for (let i = 1; i < arr.length; i ++) {
    if (arr[i] % 2 == 0) arr[i] = arr[i - 1] + 1;
    else arr[i] = arr[i - 1];
}
for (let i = 0; i < Q; i++) {
    let s = L[i], e = R[i];
    if (s == 0) console.log(arr[e]);
    else console.log(arr[e] - arr[s - 1]);
}