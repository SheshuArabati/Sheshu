// Given a string A of length N & a string B of length M. Find the length of smallest substring in A.
// Which contains all characters of B in any order.

const check = (freqA, freqB) => {
    for (let i = 0; i < 26; i++) {
        if (freqB[i] > freqA[i]) return false;
    }
    return true;
}

let A = "abacbxaby";
let B = "cx";
let freqA = [];
let freqB = [];
for (let i = 0; i < 26; i++) {
    freqA[i] = 0;
    freqB[i] = 0;
}
for (let i = 0; i < B.length; i++) {
    freqB[B[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    freqA[A[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
}
let min = Infinity;
if (check(freqA, freqB)) min = B.length;
let s = 0;
let e = B.length - 1;
while (e < A.length) {
    if (check(freqA, freqB)) {
        if ((e - s + 1) < min) min = e - s + 1;
        freqA[A[s].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        s++;
    } else {
        e++;
        if (e == A.length) break;
        freqA[A[e].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
}
console.log(min);