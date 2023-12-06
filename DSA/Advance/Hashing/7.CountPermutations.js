// Given two strings A & B, A with length N & B with length M. Count all permutations
// of A present in B as a substring.

const check = (freqA, freqB) => {
    for (let i = 0; i < 26; i++) {
        if (freqB[i] != freqA[i]) return false;
    }
    return true;
}

let A = "xyz";
let B = "xyzxy";
let freqA = [];
let freqB = [];
for (let i = 0; i < 26; i++) {
    freqA[i] = 0;
    freqB[i] = 0;
}
for (let i = 0; i < A.length; i++) {
    freqA[A[i].charCodeAt(0) - 97]++;
    freqB[B[i].charCodeAt(0) - 97]++;
}
let count = 0;
if (check(freqA, freqB)) count++;
let s = 0;
let e = A.length;
while (e < B.length) {
    freqB[B[s].charCodeAt(0) - 97]--;
    freqB[B[e].charCodeAt(0) - 97]++;
    if (check(freqA, freqB)) count++;
    s++;
    e++;
}
console.log(count);