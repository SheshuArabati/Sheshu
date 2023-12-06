// Given a large text (String A of length N) & small pattern (String B of length M)
// Find the count of time B is present as a substring in A.

let A = "ababcababac";
let B = "aba";
let num = 29;
let mul = 1;
let mod = 1e9 + 7;
let map = new Map();
for (let i = 1; i <= 26; i++) {
    map.set(String.fromCharCode(96 + i), i);
}
let val1 = 0;
let val2 = 0;
for (let i = B.length - 1; i >= 0; i--) {
    val1 = ((val1 + (map.get(B[i]) * mul))) % mod;
    val2 = ((val2 + (map.get(A[i]) * mul))) % mod;
    mul = (mul * num) % mod;
}
let count = 0;
if (val1 == val2) count++;
mul = mul / num;
let s = 0;
let e = B.length;
while (e < A.length) {
    let stval = map.get(A[s]);
    let endval = map.get(A[e]);
    val2 = (((val2 - (stval * mul) % mod) % mod * num) % mod + endval) % mod;
    if (val1 == val2) count++;
    s++;
    e++;
}
console.log(count);