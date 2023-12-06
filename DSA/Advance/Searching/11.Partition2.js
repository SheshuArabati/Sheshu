// Partition2
// Given 2 integers A and B and an array of integers C of size N. 
// Element C[i] represents the length of ith board.
// You have to paint all N boards [C0, C1, C2, C3 … CN-1]. 
// There are A painters available and each of them takes B units of time to paint 1 unit of the board.
// Calculate and return the minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of the board.
// NOTE:
// 1. 2 painters cannot share a board to paint. That is to say, a board cannot be painted partially by one painter, and partially by another.
// 2. A painter will only paint contiguous boards. This means a configuration where painter 1 paints boards 1 and 3 but not 2 is invalid.

const noOfPainters = (arr, t, x) => {
    let painters = 1;
    let timeLeft = x;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * t > x) return -1;
        if (arr[i] * t <= timeLeft) {
            timeLeft -= arr[i] * t;
        } else {
            painters++;
            timeLeft = x - arr[i] * t;
        }
    }
    return painters;
}

let A = 4;
let B = 10;
let C = [884,228,442,889];
let hi = 0;
for (let i = 0; i < C.length; i++) {
    hi += C[i] * B;
}
let lo = 1;
let ans = 0;
while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let painters = noOfPainters(C, B, mid);
    if (painters == -1) {
        lo = mid + 1;
    } else if (painters == A) {
        ans = mid;
        hi = mid - 1;
    } else if (painters > A) {
        lo = mid + 1;
    } else {
        ans = mid;
        hi = mid - 1;
    }
}
console.log(ans);